(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20ca5c63"],{3111:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.formRules,"label-position":"right","label-width":"120px"}},[a("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar"}},[a("bar-space"),a("bar-cell",[a("el-button",{on:{click:e.goBack}},[e._v("返回")])],1),a("bar-cell",[a("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.submitForm}},[e._v("保存")])],1)],1),a("div",{staticClass:"app-container"},[a("el-form-item",{attrs:{label:"视频标题",prop:"title"}},[a("el-input",{attrs:{maxlength:"30","show-word-limit":""},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title","string"===typeof t?t.trim():t)},expression:"form.title"}})],1),a("el-form-item",{attrs:{label:"是否置顶",prop:"isTop"}},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.form.isTop,callback:function(t){e.$set(e.form,"isTop",t)},expression:"form.isTop"}})],1),a("el-form-item",{attrs:{label:"附件",prop:"attachment"}},[a("upload",{attrs:{"file-list":e.form.attachment,"list-type":"text",limit:1,drag:"",multiple:"",accept:".mp4","limit-size":e.limitSize,"get-file-list":e.getFileList,"get-file-size":e.getFileSize}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.submitForm}},[e._v("保存")])],1)],1)],1)],1)},r=[],u=(a("99af"),a("4160"),a("caad"),a("b0c0"),a("a9e3"),a("b64b"),a("d3b7"),a("ac1f"),a("2532"),a("5319"),a("1276"),a("159b"),a("2909")),i=a("ade3"),o=a("5530"),c=(a("96cf"),a("1da1")),l=a("37cb"),s=a("0a4f"),d=a("60fe"),f=a("cf45"),b={name:"Edit",components:{BarCell:function(){return a.e("chunk-2d221e17").then(a.bind(null,"cbdf"))},BarSpace:function(){return a.e("chunk-2d2218de").then(a.bind(null,"cb9b"))},Sticky:function(){return a.e("chunk-2d210590").then(a.bind(null,"b804"))},Upload:function(){return a.e("chunk-162c4695").then(a.bind(null,"c7f0"))}},beforeRouteEnter:function(e,t,a){var n="";n=Number(e.params.id)?"编辑":"新增",a((function(e){e.$route.meta.title=n+"视频"}))},data:function(){return{loading:!1,KBId:0,routeName:"",isEdit:!1,kType:1,fromTeachingVideo:!1,form:{title:"",isTop:0,attachment:[],removeFileList:[],dataSize:""},formRules:{title:[{required:!0,message:"请输入文章标题",trigger:"blur"}],attachment:[{type:"array",required:!0,message:"请上传附件",trigger:"change"}]},limitSize:d["f"][2].limitSize}},created:function(){var e=Number(this.$route.params.id);this.KBId=e,this.isEdit=0!==e,0!==e&&this.fetchData({KBId:e})},methods:{fetchData:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(l["x"])(e);case 2:n=a.sent,console.log("res",n),n.response.AnnexInfo.length&&n.response.AnnexInfo.forEach((function(e){var a={};Object.keys(e).forEach((function(t){a="Status"===t?Object(o["a"])(Object(o["a"])({},a),{},{sts:e[t]}):"AnnexName"===t?Object(o["a"])(Object(o["a"])({},a),{},{webupurl:e[t]}):"SourceName"===t?Object(o["a"])(Object(o["a"])({},a),{},{name:e[t]}):Object(o["a"])(Object(o["a"])({},a),{},Object(i["a"])({},t,e[t]))})),a=Object(o["a"])(Object(o["a"])({},a),{},{url:Object(s["a"])().ResourcesURL+e.AnnexName,fileName:e.AnnexName.split("/")[e.AnnexName.split("/").length-1]}),t.form.attachment.push(a)})),t.form=Object(o["a"])(Object(o["a"])({},t.form),{},{title:n.response.Title,isTop:n.response.IsTop?1:0,dataSize:n.response.DataSize});case 6:case"end":return a.stop()}}),a)})))()},goBack:function(){this.$router.replace({name:"TeachingVideoIndex"})},submitForm:function(){var e=this;this.loading||this.$refs.form.validate(function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(a){var n,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=18;break}if(e.loading=!0,n=[],e.form.attachment.forEach((function(e){var t=0,a=0;Object.keys(e).includes("AI_ID")&&(t=e.AI_ID),Object.keys(e).includes("sts")&&(a=e.sts),n.push({AI_ID:t,AnnexName:e.webupurl,AnnexType:e.type,sourceName:e.name,Status:a})})),n=[].concat(Object(u["a"])(n),Object(u["a"])(e.form.removeFileList)),r={KID:e.KBId,kType:e.kType,title:e.form.title,isTop:e.form.isTop,dataSize:e.form.dataSize,annexInfo:n},e.isEdit){t.next=12;break}return t.next=9,Object(l["c"])(r);case 9:i=t.sent,t.next=15;break;case 12:return t.next=14,Object(l["M"])(r);case 14:i=t.sent;case 15:e.loading=!1,console.log("res",i),i.success&&(e.$notify({title:"成功",message:i.msg,type:"success"}),e.goBack());case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},getFileList:function(e,t,a,n){console.log("----------------------------------------------"),console.log("getFileList",e,t,a,n),"remove"===e&&Object.keys(t).includes("AI_ID")&&this.form.removeFileList.push({AI_ID:t.AI_ID,Status:1,AnnexName:t.webupurl,AnnexType:t.AnnexType,sourceName:t.name}),this.againValidate("attachment")},getFileSize:function(e){var t=e/1024;this.form.dataSize=Object(f["f"])(t)},againValidate:function(e){this.$refs.form.validateField(e)}}},p=b,m=a("2877"),g=Object(m["a"])(p,n,r,!1,null,null,null);t["default"]=g.exports},"37cb":function(e,t,a){"use strict";a.d(t,"i",(function(){return r})),a.d(t,"y",(function(){return u})),a.d(t,"r",(function(){return i})),a.d(t,"n",(function(){return o})),a.d(t,"j",(function(){return c})),a.d(t,"c",(function(){return l})),a.d(t,"M",(function(){return s})),a.d(t,"x",(function(){return d})),a.d(t,"A",(function(){return f})),a.d(t,"g",(function(){return b})),a.d(t,"I",(function(){return p})),a.d(t,"e",(function(){return m})),a.d(t,"E",(function(){return g})),a.d(t,"G",(function(){return h})),a.d(t,"C",(function(){return v})),a.d(t,"p",(function(){return j})),a.d(t,"u",(function(){return O})),a.d(t,"F",(function(){return x})),a.d(t,"B",(function(){return M})),a.d(t,"l",(function(){return k})),a.d(t,"t",(function(){return W})),a.d(t,"a",(function(){return w})),a.d(t,"K",(function(){return y})),a.d(t,"z",(function(){return I})),a.d(t,"d",(function(){return S})),a.d(t,"s",(function(){return A})),a.d(t,"o",(function(){return D})),a.d(t,"N",(function(){return F})),a.d(t,"k",(function(){return B})),a.d(t,"D",(function(){return L})),a.d(t,"f",(function(){return T})),a.d(t,"O",(function(){return E})),a.d(t,"w",(function(){return z})),a.d(t,"b",(function(){return N})),a.d(t,"L",(function(){return U})),a.d(t,"q",(function(){return K})),a.d(t,"m",(function(){return C})),a.d(t,"h",(function(){return G})),a.d(t,"v",(function(){return _})),a.d(t,"H",(function(){return R})),a.d(t,"J",(function(){return $}));var n=a("b775");function r(e){return Object(n["a"])({url:"api/WebManager/DeleteInfo",method:"post",data:e})}function u(e){return Object(n["a"])({url:"api/WebManager/GetKnowledgeBaseList",method:"get",params:e})}function i(e){return Object(n["a"])({url:"api/WebManager/EnableKnowledgeBase",method:"post",data:e})}function o(e){return Object(n["a"])({url:"api/WebManager/DisableKnowledgeBase",method:"post",data:e})}function c(e){return Object(n["a"])({url:"api/WebManager/DeleteKnowledgeBase",method:"post",data:e})}function l(e){return Object(n["a"])({url:"api/WebManager/AddKnowledgeBase",method:"post",data:e})}function s(e){return Object(n["a"])({url:"api/WebManager/UpdateKnowledgeBase",method:"post",data:e})}function d(e){return Object(n["a"])({url:"api/WebManager/GetKnowledgeBase",method:"get",params:e})}function f(e){return Object(n["a"])({url:"api/WebManager/GetManuscriptList",method:"get",params:e})}function b(e){return Object(n["a"])({url:"api/WebManager/ApprovedManuscript",method:"post",useJSON:!0,data:e})}function p(e){return Object(n["a"])({url:"api/WebManager/ManuscriptDelivery",method:"post",data:e})}function m(e){return Object(n["a"])({url:"api/WebManager/AddManuscriptInfo",method:"post",data:e})}function g(e){return Object(n["a"])({url:"api/WebManager/GetSupervisorList",method:"get",params:e})}function h(e){return Object(n["a"])({url:"api/WebManager/UpdateSupervis",method:"get",params:e})}function v(e){return Object(n["a"])({url:"api/WebManager/OrderBySupervis",method:"get",params:e})}function j(e){return Object(n["a"])({url:"api/WebManager/DisableSupervisPublic",method:"post",data:e})}function O(e){return Object(n["a"])({url:"api/WebManager/GetExaminerInfoList",method:"get",params:e})}function x(e){return Object(n["a"])({url:"api/WebManager/UpdateExaminerInfo",method:"get",params:e})}function M(e){return Object(n["a"])({url:"api/WebManager/OrderByExaminerInfo",method:"get",params:e})}function k(e){return Object(n["a"])({url:"api/WebManager/DisableExaminerInfoPublic",method:"post",data:e})}function W(e){return Object(n["a"])({url:"api/WebManager/GetContactUs",method:"get",params:e})}function w(e){return Object(n["a"])({url:"api/WebManager/AddContactUs",method:"post",data:e})}function y(e){return Object(n["a"])({url:"api/WebManager/UpdateContactUs",method:"post",data:e})}function I(e){return Object(n["a"])({url:"api/WebManager/GetLinkList",method:"get",params:e})}function S(e){return Object(n["a"])({url:"api/WebManager/AddLink",method:"post",data:e})}function A(e){return Object(n["a"])({url:"api/WebManager/EnableLink",method:"post",data:e})}function D(e){return Object(n["a"])({url:"api/WebManager/DisableLink",method:"post",data:e})}function F(e){return Object(n["a"])({url:"api/WebManager/UpdateLink",method:"post",data:e})}function B(e){return Object(n["a"])({url:"api/WebManager/DeleteLink",method:"post",data:e})}function L(e){return Object(n["a"])({url:"api/WebManager/GetSiteInfo",method:"get",params:e})}function T(e){return Object(n["a"])({url:"api/WebManager/AddSiteInfo",method:"post",data:e})}function E(e){return Object(n["a"])({url:"api/WebManager/UpdateSiteInfo",method:"post",data:e})}function z(e){return Object(n["a"])({url:"api/WebManager/GetFloatChartList",method:"get",params:e})}function N(e){return Object(n["a"])({url:"api/WebManager/AddFloatChart",method:"post",data:e})}function U(e){return Object(n["a"])({url:"api/WebManager/UpdateFloatChart",method:"post",data:e})}function K(e){return Object(n["a"])({url:"api/WebManager/EnableFloatChart",method:"post",data:e})}function C(e){return Object(n["a"])({url:"api/WebManager/DisableFloatChart",method:"post",data:e})}function G(e){return Object(n["a"])({url:"api/WebManager/DeleteFloatChart",method:"post",data:e})}function _(e){return Object(n["a"])({url:"api/WebManager/GetFloatChart",method:"get",params:e})}function R(e){return Object(n["a"])({url:"api/WebManager/GetUserAgreement",method:"get",params:e})}function $(e){return Object(n["a"])({url:"api/WebManager/SetUserAgreement",method:"post",useJSON:!0,data:e})}},"60fe":function(e,t,a){"use strict";a.d(t,"d",(function(){return n})),a.d(t,"e",(function(){return r})),a.d(t,"c",(function(){return u})),a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return o})),a.d(t,"f",(function(){return c}));var n=["image/png","image/jpeg","image/jpg","image/gif"],r="image/png,image/jpeg,image/jpg,image/gif",u=["pdf","doc","docx","ppt","xls","xlsx"],i="".concat("http://172.16.3.14:8008/","images/Upload/TempPic"),o="".concat("http://172.16.3.14:8008/","images/Upload/TempFile"),c=[{txt:"图片",limitSize:800,type:["png","jpeg","jpg","gif"]},{txt:"文件",limitSize:2048,type:["pdf","doc","docx","ppt","pptx","xls","xlsx","wps"]},{txt:"视频",limitSize:51200,type:["mp4"]}]},cf45:function(e,t,a){"use strict";a.d(t,"g",(function(){return n})),a.d(t,"i",(function(){return r})),a.d(t,"h",(function(){return u})),a.d(t,"d",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return c})),a.d(t,"e",(function(){return l})),a.d(t,"a",(function(){return s})),a.d(t,"f",(function(){return d}));a("4160"),a("baa5"),a("b680"),a("ac1f"),a("5319"),a("159b");function n(e,t){return e.forEach((function(e){e[t]&&e[t].length?n(e[t],t):e[t]=null})),e}function r(e){var t="";try{var a=new Date(e.replace(/-/g,"/")),n=new Date,r=n.getMonth()<a.getMonth()||n.getMonth()===a.getMonth()&&n.getDate()<a.getDate();t=n.getFullYear()-a.getFullYear()-(r?1:0)}catch(u){console.warn("--\x3e Error getYearsByDate",u)}return t}function u(e){var t,a=e.substring(e.lastIndexOf(".")+1);switch(a){case"pdf":t=0;break;case"doc":t=1;break;case"docx":t=2;break;case"wps":t=3;break;case"ppt":t=4;break;case"xls":t=5;break;case"xlsx":t=6;break;case"mp4":t=7;break;case"pptx":t=8;break;default:t=-1}return t}var i=[{value:0,label:"党员"},{value:1,label:"群众"},{value:2,label:"其他"}],o=[{value:9,label:"博士研究生"},{value:8,label:"硕士研究生"},{value:7,label:"本科"},{value:6,label:"专科"},{value:5,label:"中技"},{value:4,label:"职校"},{value:3,label:"中专"},{value:2,label:"高中"},{value:1,label:"初中"},{value:0,label:"小学"}],c=[{value:11,label:"博士研究生"},{value:10,label:"硕士研究生"},{value:9,label:"本科"},{value:8,label:"专科"},{value:7,label:"高技"},{value:6,label:"中技"},{value:5,label:"高职"},{value:4,label:"中职"},{value:3,label:"中专"},{value:2,label:"高中"},{value:1,label:"初中"},{value:0,label:"小学"}],l=[{value:2,label:"保密"},{value:1,label:"男"},{value:0,label:"女"}],s=[{value:3,label:"其他证件"},{value:2,label:"护照"},{value:1,label:"港澳台证"},{value:0,label:"身份证"}];function d(e){var t=e;return t=e>1048576?(e/1048576).toFixed(2)+"GB":e>1024?(e/1024).toFixed(2)+"MB":"".concat(e,"KB"),t}}}]);