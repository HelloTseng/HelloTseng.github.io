(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e57c0"],{"954b":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("span",[e._v(e._s(e._f("parseTime")(e.row.StartRectificationDate,"{y}-{m}-{d}"))+" - "+e._s(e._f("parseTime")(e.row.EndRectificationDate,"{y}-{m}-{d}")))]),e.isOverTime(e.row)?a("el-tag",{attrs:{type:"danger"}},[e._v("超时")]):e._e()],1)},i=[],r={name:"RectificationPeriod",props:{row:{type:Object,default:null}},methods:{isOverTime:function(e){var t=!1,a=e.EndRectificationDate,n=e.UploadDate;if(a){var i=new Date(a),r=new Date(n);i<r&&(t=!0)}return t}}},c=r,o=a("2877"),s=Object(o["a"])(c,n,i,!1,null,null,null);t["default"]=s.exports}}]);