(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26882bc4","chunk-747e5e9f"],{2934:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"j",(function(){return r})),a.d(t,"g",(function(){return u})),a.d(t,"e",(function(){return i})),a.d(t,"i",(function(){return c})),a.d(t,"k",(function(){return o})),a.d(t,"f",(function(){return s})),a.d(t,"h",(function(){return b})),a.d(t,"b",(function(){return d})),a.d(t,"c",(function(){return f})),a.d(t,"n",(function(){return p})),a.d(t,"m",(function(){return m})),a.d(t,"l",(function(){return h})),a.d(t,"d",(function(){return g}));var n=a("b775");function l(e){return Object(n["a"])({url:"api/Sys/CheckUserInfo",method:"get",noNoticeError:!0,params:e})}function r(e){return Object(n["a"])({url:"api/Sys/GetSelRoleList",method:"get",params:e})}function u(e){return Object(n["a"])({url:"api/Sys/GetEnableProfessionnalTitles",method:"get",params:e})}function i(e){return Object(n["a"])({url:"api/Sys/GetEnableExaminerProfessionnalTitles",method:"get",params:e})}function c(e){return Object(n["a"])({url:"api/Global/GetRegionList",method:"get",params:e})}function o(e){return Object(n["a"])({url:"api/Station/GetSelSites",method:"get",params:e})}function s(e){return Object(n["a"])({url:"api/Sys/EnableProfessionList",method:"get",params:e})}function b(e){return Object(n["a"])({url:"api/Examination/LoadQuestionBankOptions",method:"get",params:e})}function d(e){return Object(n["a"])({url:"api/Sys/GetEnableEQLanguages",method:"get",params:e})}function f(e){return Object(n["a"])({url:"api/Station/EnableExamRoomLst",method:"get",params:e})}function p(e){return Object(n["a"])({url:"images/Upload/TempPic",method:"post",data:e,multiple:!0})}function m(e){return Object(n["a"])({url:"images/Upload/TempFile",method:"post",data:e,multiple:!0})}function h(e){return Object(n["a"])({url:"api/images/Upload/NewPic",method:"post",data:e,multiple:!0})}function g(e){return Object(n["a"])({url:"api/Station/EnableExaminerInfos",method:"get",params:e})}},"432e":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("editor",{attrs:{init:e.init},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})},l=[],r=(a("caad"),a("baa5"),a("b0c0"),a("a9e3"),a("2532"),a("e562")),u=a.n(r),i=(a("0d68"),a("0342"),a("fc39"),a("ca72")),c=(a("0902"),a("84ec8"),a("d2dc"),a("2fec"),a("64d8"),a("3154"),a("2b07"),a("4ea8"),a("8863"),a("4bd0"),a("4237"),a("cfb0"),a("ebac"),a("bc54"),a("0a9d"),a("62e5"),a("dcb7"),a("55a0"),a("07d1"),a("0335"),a("78e4"),a("0efa"),a("365e"),a("9434"),["advlist lists anchor autolink code fullscreen hr image imagetools insertdatetime link noneditable pagebreak paste preview searchreplace spellchecker tabfocus table template textpattern visualblocks visualchars wordcount"]),o=c,s=["  code undo redo |   bold italic underline strikethrough forecolor backcolor link anchor |   alignleft aligncenter alignright alignjustify outdent indent |   styleselect formatselect fontselect fontsizeselect |   bullist numlist |   blockquote subscript superscript removeformat |   table image charmap hr pagebreak insertdatetime preview |   fullscreen"],b=s,d=a("2934"),f=a("60fe"),p=a("cf45"),m={name:"Tinymce",components:{Editor:i["a"]},props:{value:{type:String,default:""},height:{type:[Number,String],required:!1,default:360}},data:function(){var e=this;return{tinymceId:this.id,init:{fontsize_formats:"12px 14px 16px 18px 20px 24px 36px",language_url:"/tinymce/langs/zh_CN.js",language:"zh_CN",height:this.height,plugins:o,toolbar:b,branding:!1,menubar:!1,images_upload_handler:function(t,a,n){e.handleImageUpload(t,a,n)}},content:this.value,acceptSize:f["f"][0].limitSize}},watch:{value:function(e){this.content=e},content:function(e){this.$emit("input",e)}},mounted:function(){u.a.init({})},methods:{clear:function(){this.content=""},hasInclude:function(e){var t=e.name.substring(e.name.lastIndexOf(".")+1);return f["f"][0].type.includes(t)},acceptUnit:function(){return Object(p["f"])(this.acceptSize)},handleImageUpload:function(e,t,a){var n=e.blob();this.hasInclude(n)||a("不支持的图片类型"),n.size>1024*this.acceptSize&&a("图片大小不得大于".concat(this.acceptUnit()));var l=new FormData;l.append("file",e.blob()),Object(d["l"])(l).then((function(e){t(e.response.weburl)})).catch((function(e){a("TinymceEditor uploadImage Error")}))}}},h=m,g=a("2877"),v=Object(g["a"])(h,n,l,!1,null,null,null);t["default"]=v.exports},cf45:function(e,t,a){"use strict";a.d(t,"g",(function(){return n})),a.d(t,"i",(function(){return l})),a.d(t,"h",(function(){return r})),a.d(t,"d",(function(){return u})),a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return c})),a.d(t,"e",(function(){return o})),a.d(t,"a",(function(){return s})),a.d(t,"f",(function(){return b}));a("4160"),a("baa5"),a("b680"),a("ac1f"),a("5319"),a("159b");function n(e,t){return e.forEach((function(e){e[t]&&e[t].length?n(e[t],t):e[t]=null})),e}function l(e){var t="";try{var a=new Date(e.replace(/-/g,"/")),n=new Date,l=n.getMonth()<a.getMonth()||n.getMonth()===a.getMonth()&&n.getDate()<a.getDate();t=n.getFullYear()-a.getFullYear()-(l?1:0)}catch(r){console.warn("--\x3e Error getYearsByDate",r)}return t}function r(e){var t,a=e.substring(e.lastIndexOf(".")+1);switch(a){case"pdf":t=0;break;case"doc":t=1;break;case"docx":t=2;break;case"wps":t=3;break;case"ppt":t=4;break;case"xls":t=5;break;case"xlsx":t=6;break;case"mp4":t=7;break;case"pptx":t=8;break;default:t=-1}return t}var u=[{value:0,label:"党员"},{value:1,label:"群众"},{value:2,label:"其他"}],i=[{value:9,label:"博士研究生"},{value:8,label:"硕士研究生"},{value:7,label:"本科"},{value:6,label:"专科"},{value:5,label:"中技"},{value:4,label:"职校"},{value:3,label:"中专"},{value:2,label:"高中"},{value:1,label:"初中"},{value:0,label:"小学"}],c=[{value:11,label:"博士研究生"},{value:10,label:"硕士研究生"},{value:9,label:"本科"},{value:8,label:"专科"},{value:7,label:"高技"},{value:6,label:"中技"},{value:5,label:"高职"},{value:4,label:"中职"},{value:3,label:"中专"},{value:2,label:"高中"},{value:1,label:"初中"},{value:0,label:"小学"}],o=[{value:2,label:"保密"},{value:1,label:"男"},{value:0,label:"女"}],s=[{value:3,label:"其他证件"},{value:2,label:"护照"},{value:1,label:"港澳台证"},{value:0,label:"身份证"}];function b(e){var t=e;return t=e>1048576?(e/1048576).toFixed(2)+"GB":e>1024?(e/1024).toFixed(2)+"MB":"".concat(e,"KB"),t}}}]);