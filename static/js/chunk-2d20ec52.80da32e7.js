(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20ec52"],{b17d:function(n,e,t){"use strict";t.r(e);var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar"}},[t("bar-space"),t("bar-cell",[t("el-button",{on:{click:n.goBack}},[n._v("返回")]),t("el-button",{attrs:{type:"primary"},on:{click:n.save}},[n._v("保存")])],1)],1),t("div",{staticClass:"app-container"},[t("div",{staticClass:"tab-container"},[t("el-tabs",{attrs:{type:"card"},model:{value:n.activeName,callback:function(e){n.activeName=e},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:"基础信息",name:"basic"}},[t("Detail",{ref:"detail",attrs:{operate:"edit"},on:{loadInfo:n.loadInfo}})],1),t("el-tab-pane",{attrs:{label:"考评情况",name:"evaluation"}},["evaluation"===n.activeName?t("Evaluation"):n._e()],1),t("el-tab-pane",{attrs:{label:"培训情况",name:"training"}},["training"===n.activeName?t("Training",{attrs:{"user-info":n.userInfo}}):n._e()],1),t("el-tab-pane",{attrs:{label:"违纪情况",name:"violation"}},["violation"===n.activeName?t("Violation",{attrs:{"user-info":n.userInfo}}):n._e()],1),t("el-tab-pane",{attrs:{label:"表彰情况",name:"recognition"}},["recognition"===n.activeName?t("Recognition",{attrs:{"user-info":n.userInfo}}):n._e()],1)],1)],1)])],1)},i=[],l=(t("d3b7"),{name:"EditDetail",components:{BarCell:function(){return t.e("chunk-2d221e17").then(t.bind(null,"cbdf"))},BarSpace:function(){return t.e("chunk-2d2218de").then(t.bind(null,"cb9b"))},Sticky:function(){return t.e("chunk-2d210590").then(t.bind(null,"b804"))},Detail:function(){return t.e("chunk-1548bfa8").then(t.bind(null,"199a"))},Evaluation:function(){return t.e("chunk-2d2227e1").then(t.bind(null,"cf9a"))},Training:function(){return t.e("chunk-0647f645").then(t.bind(null,"d02c"))},Violation:function(){return t.e("chunk-3f9280fb").then(t.bind(null,"619e"))},Recognition:function(){return t.e("chunk-8bdb5cc2").then(t.bind(null,"905a"))}},data:function(){return{activeName:"basic",userInfo:{}}},methods:{goBack:function(){this.$router.go(-1)},loadInfo:function(n){this.userInfo=n},save:function(){this.$refs.detail.submitForm()}}}),o=l,c=t("2877"),r=Object(c["a"])(o,a,i,!1,null,null,null);e["default"]=r.exports}}]);