(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0481c599"],{"30a0":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-form",{ref:"form",attrs:{model:t.form,"label-width":"250px","label-position":"right"}},[n("el-form-item",{attrs:{label:"支持考生到考点自取"}},[n("el-switch",{attrs:{"active-text":t.form.IsInvite?"是":"否"},model:{value:t.form.IsInvite,callback:function(e){t.$set(t.form,"IsInvite",e)},expression:"form.IsInvite"}})],1),n("el-form-item",{attrs:{label:"支持邮寄"}},[n("el-switch",{attrs:{"active-text":t.form.IsMail?"是":"否"},model:{value:t.form.IsMail,callback:function(e){t.$set(t.form,"IsMail",e)},expression:"form.IsMail"}})],1),n("el-form-item",{directives:[{name:"permission",rawName:"v-permission",value:"save",expression:"'save'"}]},[n("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.handleSave}},[t._v("保存设置")])],1)],1)],1)},a=[],u=n("5530"),o=n("db42"),i={name:"CertificateSetting",data:function(){return{loading:!1,form:{IsInvite:!0,IsMail:!0}}},created:function(){this.doLoad()},methods:{doLoad:function(){var t=this;Object(o["o"])().then((function(e){var n=e.response;t.form=Object(u["a"])(Object(u["a"])({},t.form),{},{IsInvite:n.IsInvite,IsMail:n.IsMail})}))},loadingStart:function(){this.loading=!0},loadingClose:function(){this.loading=!1},handleSave:function(){var t=this;this.$refs.form.validate((function(e){if(!t.loading){t.loadingStart();var n=t.form,r=n.IsInvite,a=n.IsMail;Object(o["Z"])({IsInvite:r,IsMail:a}).then((function(e){t.$notify({title:"成功",message:e.msg,type:"success"}),t.loadingClose()})).catch((function(e){t.loadingClose()}))}}))}}},s=i,c=n("2877"),d=Object(c["a"])(s,r,a,!1,null,null,null);e["default"]=d.exports},db42:function(t,e,n){"use strict";n.d(e,"E",(function(){return a})),n.d(e,"eb",(function(){return u})),n.d(e,"b",(function(){return o})),n.d(e,"g",(function(){return i})),n.d(e,"U",(function(){return s})),n.d(e,"T",(function(){return c})),n.d(e,"t",(function(){return d})),n.d(e,"S",(function(){return f})),n.d(e,"f",(function(){return p})),n.d(e,"l",(function(){return l})),n.d(e,"j",(function(){return m})),n.d(e,"u",(function(){return b})),n.d(e,"a",(function(){return h})),n.d(e,"ab",(function(){return O})),n.d(e,"p",(function(){return S})),n.d(e,"K",(function(){return g})),n.d(e,"L",(function(){return j})),n.d(e,"J",(function(){return y})),n.d(e,"d",(function(){return v})),n.d(e,"q",(function(){return I})),n.d(e,"c",(function(){return G})),n.d(e,"h",(function(){return L})),n.d(e,"V",(function(){return T})),n.d(e,"Q",(function(){return E})),n.d(e,"v",(function(){return x})),n.d(e,"s",(function(){return C})),n.d(e,"X",(function(){return M})),n.d(e,"P",(function(){return k})),n.d(e,"W",(function(){return P})),n.d(e,"r",(function(){return R})),n.d(e,"D",(function(){return w})),n.d(e,"m",(function(){return D})),n.d(e,"k",(function(){return Q})),n.d(e,"n",(function(){return A})),n.d(e,"Y",(function(){return B})),n.d(e,"F",(function(){return U})),n.d(e,"N",(function(){return F})),n.d(e,"O",(function(){return J})),n.d(e,"e",(function(){return N})),n.d(e,"ib",(function(){return $})),n.d(e,"i",(function(){return z})),n.d(e,"H",(function(){return _})),n.d(e,"gb",(function(){return Z})),n.d(e,"B",(function(){return q})),n.d(e,"C",(function(){return H})),n.d(e,"A",(function(){return K})),n.d(e,"z",(function(){return V})),n.d(e,"I",(function(){return W})),n.d(e,"jb",(function(){return X})),n.d(e,"R",(function(){return Y})),n.d(e,"w",(function(){return tt})),n.d(e,"bb",(function(){return et})),n.d(e,"M",(function(){return nt})),n.d(e,"hb",(function(){return rt})),n.d(e,"G",(function(){return at})),n.d(e,"fb",(function(){return ut})),n.d(e,"o",(function(){return ot})),n.d(e,"Z",(function(){return it})),n.d(e,"y",(function(){return st})),n.d(e,"db",(function(){return ct})),n.d(e,"x",(function(){return dt})),n.d(e,"cb",(function(){return ft}));var r=n("b775");function a(t){return Object(r["a"])({url:"api/Sys/GetProfessionnalTitleList",method:"get",params:t})}function u(t){return Object(r["a"])({url:"api/Sys/SetProfessionnalTitleStatus",method:"post",data:t})}function o(t){return Object(r["a"])({url:"api/Sys/AddProfessionnalTitle",method:"post",data:t})}function i(t){return Object(r["a"])({url:"api/Sys/DelProfessionnalTitle",method:"get",params:t})}function s(t){return Object(r["a"])({url:"api/sys/SaveEQCFirst",method:"post",data:t})}function c(t){return Object(r["a"])({url:"api/sys/SaveEQCClass",method:"post",data:t})}function d(t){return Object(r["a"])({url:"api/sys/GetEQCList",method:"get",params:t})}function f(t){return Object(r["a"])({url:"api/sys/LoadEQClassFirst",method:"get",params:t})}function p(t){return Object(r["a"])({url:"api/sys/DelEQClass",method:"get",params:t})}function l(t){return Object(r["a"])({url:"api/sys/EnableEQClass",method:"get",params:t})}function m(t){return Object(r["a"])({url:"api/sys/DisableEQClass",method:"get",params:t})}function b(){return Object(r["a"])({url:"api/Sys/GetEQLanguageList",method:"get"})}function h(t){return Object(r["a"])({url:"api/Sys/AddEQLanguage",method:"post",data:t})}function O(t){return Object(r["a"])({url:"api/Sys/SetEQLanguageStatus",method:"post",data:t})}function S(t){return Object(r["a"])({url:"api/Sys/DelEQLanguage",method:"get",params:t})}function g(){return Object(r["a"])({url:"api/Sys/GetRoleInfos",method:"get"})}function j(t){return Object(r["a"])({url:"api/Sys/GetRoleMemberList",method:"get",params:t})}function y(t){return Object(r["a"])({url:"api/Sys/GetRoleInfo",method:"get",params:t})}function v(t){return Object(r["a"])({url:"api/Sys/AddRoleMember",method:"post",data:t})}function I(t){return Object(r["a"])({url:"api/Sys/DelRoleMember",method:"get",params:t})}function G(t){return Object(r["a"])({url:"api/Sys/AddRoleInfo",method:"post",data:t})}function L(t){return Object(r["a"])({url:"api/Sys/DelRoleInfo",method:"post",data:t})}function T(t){return Object(r["a"])({url:"api/Sys/SaveRoleInfo",method:"post",data:t})}function E(t){return Object(r["a"])({url:"api/sys/GetTextBookList",method:"get",params:t})}function x(t){return Object(r["a"])({url:"api/sys/EnableTextBook",method:"get",params:t})}function C(t){return Object(r["a"])({url:"api/sys/DisableTextBook",method:"get",params:t})}function M(t){return Object(r["a"])({url:"api/sys/SaveTextBook",method:"post",data:t})}function k(t){return Object(r["a"])({url:"api/sys/GetTextBookDetail",method:"get",params:t})}function P(t){return Object(r["a"])({url:"api/sys/SaveSubTextBook",method:"post",data:t})}function R(t){return Object(r["a"])({url:"api/sys/DelTextBook",method:"get",params:t})}function w(t){return Object(r["a"])({url:"api/sys/GetProfessionList",method:"get",params:t})}function D(t){return Object(r["a"])({url:"api/sys/EnableSkill",method:"get",params:t})}function Q(t){return Object(r["a"])({url:"api/sys/DisableSkill",method:"get",params:t})}function A(t){return Object(r["a"])({url:"api/sys/GetAppointmentOption",method:"get",params:t})}function B(t){return Object(r["a"])({url:"api/sys/SetAppointmentOption",method:"post",data:t})}function U(t){return Object(r["a"])({url:"api/sys/GetProvinceAppointmentOption",method:"get",params:t})}function F(t){return Object(r["a"])({url:"api/Sys/GetSupervisionSetting",method:"get",params:t})}function J(t){return Object(r["a"])({url:"api/Sys/GetSupervisionSettingList",method:"get",params:t})}function N(t){return Object(r["a"])({url:"api/Sys/AddSupervisionSetting",method:"post",data:t})}function $(t){return Object(r["a"])({url:"api/Sys/UpdateSupervisionSetting",method:"post",data:t})}function z(t){return Object(r["a"])({url:"api/Sys/DeleteSupervisionSetting",method:"post",data:t})}function _(t){return Object(r["a"])({url:"api/Sys/GetReportTemplate",method:"get",params:t})}function Z(t){return Object(r["a"])({url:"api/Sys/SetReportTemplate",method:"post",useJSON:!0,data:t})}function q(t){return Object(r["a"])({url:"api/Sys/GetMemberList",method:"get",params:t})}function H(t){return Object(r["a"])({url:"api/Sys/GetMemberNoActiveList",method:"get",params:t})}function K(t){return Object(r["a"])({url:"api/Sys/GetMemberFrozenList",method:"get",params:t})}function V(t){return Object(r["a"])({url:"api/Sys/GetMemberCancelList",method:"get",params:t})}function W(t){return Object(r["a"])({url:"api/Sys/ResetPassword",method:"get",params:t})}function X(t){return Object(r["a"])({url:"api/Sys/UserFrozen",method:"post",data:t})}function Y(t){return Object(r["a"])({url:"api/Sys/UserThaw",method:"get",params:t})}function tt(t){return Object(r["a"])({url:"api/Sys/GetExaminationPrecautions",method:"get",params:t})}function et(t){return Object(r["a"])({url:"api/Sys/SetExaminationPrecautions",method:"post",data:t})}function nt(t){return Object(r["a"])({url:"api/Sys/GetSignUpPromise",method:"get",params:t})}function rt(t){return Object(r["a"])({url:"api/Sys/SetSignUpPromise",method:"post",data:t})}function at(t){return Object(r["a"])({url:"api/Sys/GetPublicTime",method:"get",params:t})}function ut(t){return Object(r["a"])({url:"api/Sys/SetPublicTime",method:"post",data:t,useJSON:!0})}function ot(t){return Object(r["a"])({url:"api/sys/GetCertificateGetToTypeOption",method:"get",params:t})}function it(t){return Object(r["a"])({url:"api/sys/SetCertificateGetToTypeOption",method:"post",data:t})}function st(t){return Object(r["a"])({url:"api/sys/GetLostReissueOption",method:"get",params:t})}function ct(t){return Object(r["a"])({url:"api/sys/SetLostReissueOption",method:"post",data:t})}function dt(t){return Object(r["a"])({url:"api/sys/GetIniuceOption",method:"get",params:t})}function ft(t){return Object(r["a"])({url:"api/sys/SetIniuceOption",method:"post",data:t})}}}]);