(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d210590"],{b804:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{style:{height:t.height+"px",zIndex:t.zIndex}},[e("div",{staticClass:"form-header__fixed",class:t.className,style:{top:t.isSticky?t.calcStickyTop+"px":"",zIndex:t.zIndex,position:t.position,width:t.width,height:t.height+"px"},attrs:{flex:"cross:center"}},[t._t("default",[e("div",[t._v("sticky")])])],2)])},n=[],h=(e("a9e3"),e("5530")),c=e("2f62"),d={name:"Sticky",props:{stickyTop:{type:Number,default:0},zIndex:{type:Number,default:1},className:{type:String,default:""}},data:function(){return{active:!1,position:"",width:void 0,height:void 0,isSticky:!1}},computed:Object(h["a"])(Object(h["a"])({},Object(c["c"])({fixedHeader:function(t){return t.settings.fixedHeader}})),{},{calcStickyTop:function(){return this.fixedHeader?this.stickyTop+50:this.stickyTop}}),mounted:function(){this.height=this.$el.getBoundingClientRect().height,window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleResize)},activated:function(){this.handleScroll()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleResize)},methods:{sticky:function(){this.active||(this.position="fixed",this.active=!0,this.width=this.width+"px",this.isSticky=!0)},handleReset:function(){this.active&&this.reset()},reset:function(){this.position="",this.width="auto",this.active=!1,this.isSticky=!1},handleScroll:function(){var t=this.$el.getBoundingClientRect().width;this.width=t||"auto";var i=this.$el.getBoundingClientRect().top;i<this.calcStickyTop?this.sticky():this.handleReset()},handleResize:function(){this.isSticky&&(this.width=this.$el.getBoundingClientRect().width+"px")}}},o=d,a=e("2877"),l=Object(a["a"])(o,s,n,!1,null,null,null);i["default"]=l.exports}}]);