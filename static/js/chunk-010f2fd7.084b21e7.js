(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-010f2fd7"],{"4654d":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar"}},[l("bar-space"),l("bar-cell",[l("el-button",{on:{click:e.goBack}},[e._v("返回")])],1)],1),l("div",{staticClass:"app-container"},[l("el-form",{attrs:{size:e.tableSize,model:e.elForm,"label-position":"left","label-width":"130px"}},[l("h4",[e._v("基础信息")]),l("el-row",[l("el-col",{attrs:{lg:18}},[l("el-row",[l("el-col",{attrs:{md:12}},[l("el-form-item",{attrs:{label:"姓名：",prop:"UserName"}},[l("span",[e._v(e._s(e.elForm.UserName))]),l("el-tag",{staticStyle:{"margin-left":"10px"},attrs:{type:"warning"}},[e._v("跨省")])],1)],1),l("el-col",{attrs:{md:12}},[l("el-form-item",{attrs:{label:"性别：",prop:"UserSex"}},[1===e.elForm.UserSex?l("span",[e._v("男")]):e._e(),0===e.elForm.UserSex?l("span",[e._v("女")]):e._e()])],1)],1),l("el-row",[l("el-col",{attrs:{md:12}},[l("el-form-item",{attrs:{label:"证件类型：",prop:"IDCardType"}},[l("span",[e._v("身份证")])])],1),l("el-col",{attrs:{md:12}},[l("el-form-item",{attrs:{label:"身份证号：",prop:"IDCardNum"}},[l("span",[e._v(e._s(e.elForm.IDCardNum))])])],1)],1),l("el-row",[l("el-col",{attrs:{md:12}},[l("el-form-item",{attrs:{label:"工作单位：",prop:"Address"}},[e._v(" "+e._s(e.elForm.Address)+" ")])],1),l("el-col",{attrs:{md:12}},[l("el-form-item",{attrs:{label:"年龄：",prop:"UserAge"}},[e._v(" "+e._s(e.elForm.UserAge)+" ")])],1)],1),l("el-row",[l("el-col",{attrs:{md:12}},[l("el-form-item",{attrs:{label:"联系手机：",prop:"MobilePhone"}},[e._v(" "+e._s(e.elForm.MobilePhone)+" ")])],1),l("el-col",{attrs:{md:12}},[l("el-form-item",{attrs:{label:"文化程度：",prop:"Culture"}},[e._v(" 本科 ")])],1)],1),l("el-row",[l("el-col",{attrs:{md:12}},[l("el-form-item",{attrs:{label:"是否参加培训：",prop:"IsTrain"}},[e._v(" 环球网校 ")])],1),l("el-col",{attrs:{md:12}},[l("el-form-item",{attrs:{label:"禁考状态：",prop:"IsTrain"}},[e._v(" 正常 ")])],1)],1)],1),l("el-col",{attrs:{lg:6}},[l("el-form-item",{attrs:{label:"照片：",prop:"HeadImg"}},[l("el-avatar",{attrs:{shape:"square",size:150,src:e.elForm.HeadImg}})],1)],1)],1),l("div",[l("el-divider"),l("h4",[e._v("工作信息")]),l("el-row",[l("el-col",{attrs:{lg:18}},[l("el-row",[l("el-col",{attrs:{md:12}},[l("el-form-item",{attrs:{label:"工作地区："}},[l("span",[e._v("浙江省杭州市")])])],1),l("el-col",{attrs:{md:12}},[l("el-form-item",{attrs:{label:"工作单位："}},[l("span",[e._v("科技有限公司")])])],1)],1),l("el-row",[l("el-col",{attrs:{md:12}},[l("el-form-item",{attrs:{label:"组织机构代码："}},[l("span",[e._v("9998ASAIOQ")])])],1),l("el-col",{attrs:{md:12}})],1),l("el-row",[l("el-col",{attrs:{md:12}},[l("el-form-item",{attrs:{label:"本职业/相关职业："}},[l("span",[e._v("消防工程技术人员")])])],1),l("el-col",{attrs:{md:12}},[l("el-form-item",{attrs:{label:"职业年限：",prop:""}},[e._v(" 6年 ")])],1)],1),l("el-row",[l("el-col",{attrs:{md:12}},[l("el-form-item",{attrs:{label:"联系手机：",prop:"MobilePhone"}},[e._v(" "+e._s(e.elForm.MobilePhone)+" ")])],1),l("el-col",{attrs:{md:12}},[l("el-form-item",{attrs:{label:"文化程度：",prop:"Culture"}},[e._v(" 本科 ")])],1)],1),l("el-row",[l("el-col",{attrs:{md:12}},[l("el-form-item",{attrs:{label:"是否参加培训：",prop:"IsTrain"}},[e._v(" 环球网校 ")])],1),l("el-col",{attrs:{md:12}},[l("el-form-item",{attrs:{label:"禁考状态：",prop:"IsTrain"}},[e._v(" 正常 ")])],1)],1)],1)],1)],1),l("div",[l("el-divider"),l("el-row",[l("el-col",{attrs:{md:8}},[l("el-form-item",{attrs:{label:"鉴定工种："}},[e._v("消防设施操作员")])],1),l("el-col",{attrs:{md:8}},[l("el-form-item",{attrs:{label:"技能等级："}},[e._v("二级")])],1),l("el-col",{attrs:{md:8}},[l("el-form-item",{attrs:{label:"申报职业方向："}},[e._v("维修保养")])],1)],1),l("table-body",{attrs:{columns:e.columns,"table-data":e.tableData,options:e.tableOptions,"has-padding":!1}},[l("el-table-column",{attrs:{slot:"operate",label:"操作",width:"230",align:"center",fixed:"right"},slot:"operate",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[l("el-link",{attrs:{type:"primary"},on:{click:function(t){return e.handleDetails(a)}}},[e._v("查看考试档案")])]}}])})],1)],1),l("div",[l("el-divider"),l("h4",[e._v("考试违纪记录")]),l("table-body",{attrs:{columns:e.columnsBreach,"table-data":e.tableDataBreach,options:e.tableOptionsGray,"has-padding":!1}})],1),l("div",[l("el-divider"),l("h4",[e._v("持有证书")]),l("table-body",{attrs:{columns:e.columnsCertificate,"table-data":e.tableDataCertificate,options:e.tableOptions,"has-padding":!1}})],1),l("div",[l("el-divider"),l("h4",[e._v("申请鉴定资料")]),l("el-row",[l("el-col",{attrs:{md:8}},[l("el-form-item",{attrs:{label:"申报鉴定工种："}},[e._v("消防设施操作员")])],1),l("el-col",{attrs:{md:8}},[l("el-form-item",{attrs:{label:"技能等级："}},[e._v("二级")])],1),l("el-col",{attrs:{md:8}},[l("el-form-item",{attrs:{label:"申报职业方向："}},[e._v("维修保养")])],1)],1),l("table-body",{attrs:{columns:e.columnsIdentification,"table-data":e.tableDataIdentification,options:e.tableOptions,"has-padding":!1}})],1),l("div",[l("el-divider"),l("h4",[e._v("系统自动审核记录")]),l("table-body",{attrs:{columns:e.columnsReview,"table-data":e.tableDataReview,options:e.tableOptionsGray,"has-padding":!1}})],1),l("div",[l("el-divider"),l("h4",{staticClass:"text-red"},[e._v("人工审核结果")]),l("table-body",{attrs:{columns:e.columnsArtificial,"table-data":e.tableDataArtificial,options:e.tableOptionsGray,"has-padding":!1}})],1),l("el-button",{on:{click:e.goBack}},[e._v("返回")])],1)],1)],1)},r=[],i=(l("d3b7"),l("5530")),n={data:function(){return{elForm:{ExaminerID:0,AdminUserID:0,URID:0,IDCardNum:"",UserName:"",UserSex:"",BirthDate:"",UserAge:"",MobilePhone:"",Address:"",PostalCode:"",FixedPhone:"",Email:"",PoliticsStatus:"",Culture:"",HeadImg:"",WorkUnit:"",ProfessionID:null,SkillID:null,CertificateNumber:"",PTID:"",InDate:"",InDateToYear:"",RoleID:[],Status:!0},elFormRules:{},tableOptions:{border:!0,headerCellClassName:"table-header-bg"},tableOptionsGray:{border:!0,headerCellClassName:"table-header-bg-gray"},tableData:[],columns:[{title:"科目",key:"",align:"center"},{title:"考试省份",key:"",align:"center"},{title:"考试地点",key:"",align:"center"},{title:"考试名称",key:"",align:"center"},{title:"考试时间",key:"",align:"center"},{title:"考试状态",key:"",align:"center"},{title:"考生成绩",key:"",align:"center"},{title:"成绩状态",key:"",align:"center"}],tableDataBreach:[],columnsBreach:[{title:"违纪程度",key:"",align:"center"},{title:"违纪情况",key:"",align:"center"},{title:"处罚结果",key:"",align:"center"},{title:"操作人",key:"",align:"center"},{title:"备注",key:"",align:"center"},{title:"提交时间",key:"",align:"center"},{title:"审批人",key:"",align:"center"},{title:"审批时间",key:"",align:"center"},{title:"审批状态",key:"",align:"center"},{title:"审批意见",key:"",align:"center"}],tableDataCertificate:[],columnsCertificate:[{title:"证书编码",key:"",align:"center"},{title:"职业工种",key:"",align:"center"},{title:"技能等级",key:"",align:"center"},{title:"职业方向",key:"",align:"center"},{title:"发证时间",key:"",align:"center"}],tableDataIdentification:[],columnsIdentification:[{title:"考试科目",key:"",align:"center"},{title:"考试省份",key:"",align:"center"},{title:"考试地点",key:"",align:"center"},{title:"考试时间",key:"",align:"center"},{title:"状态",key:"",align:"center"},{title:"成绩得分",key:"",align:"center"},{title:"证书状态",key:"",align:"center"}],tableDataReview:[],columnsReview:[{title:"审核时间",key:"",align:"center"},{title:"审核通过项",key:"",align:"center"},{title:"未审核项",key:"",align:"center"}],tableDataArtificial:[],columnsArtificial:[{title:"审核人",key:"",align:"center"},{title:"审核时间",key:"",align:"center"},{title:"虚假内容",key:"",align:"center"},{title:"审核意见",key:"",align:"center"},{title:"审批领导",key:"",align:"center"},{title:"审批时间",key:"",align:"center"},{title:"审批结果",key:"",align:"center"},{title:"审批意见",key:"",align:"center"},{title:"处罚结果",key:"",align:"center"}]}}},o=l("2f62"),s={name:"Detail",components:{BarCell:function(){return l.e("chunk-2d221e17").then(l.bind(null,"cbdf"))},BarSpace:function(){return l.e("chunk-2d2218de").then(l.bind(null,"cb9b"))},Sticky:function(){return l.e("chunk-2d210590").then(l.bind(null,"b804"))},TableBody:function(){return l.e("chunk-79d593e5").then(l.bind(null,"2c21"))}},mixins:[n],props:{operate:{type:String,default:"detail"}},computed:Object(i["a"])(Object(i["a"])({},Object(o["c"])({tableSize:function(e){return e.settings.tableSize}})),{},{showOperateBtns:function(){return"detail"!==this.operate}}),created:function(){var e={status:200,success:!0,msg:"",response:{ExaminerID:26,AdminUserID:1096,URID:1102,UserName:"张大仙",HeadImg:"ExaminerImg/20200922153707.jpg",UserSex:1,IDCardNum:"110101199003077379",MobilePhone:"13784875848",UserAge:24,BirthDate:"1996-08-30T00:00:00",Address:"这是一段很经典的地址",Email:"51265156165@163.com",WorkUnit:"河北省鉴定站",PostalCode:"554848",Culture:6,PoliticsStatus:0,FixedPhone:"0554-4-54654654",CertificateNumber:"21651651651651",InDate:"2017-09-05T00:00:00",InDateToYear:3,PTID:60,ProfessionID:1,Fraction:10,SkillID:4,Status:!0,RoleID:null}};this.elForm=e.response},methods:{handleDetails:function(){},goBack:function(){this.$router.go(-1)}}},c=s,m=(l("657b"),l("2877")),d=Object(m["a"])(c,a,r,!1,null,null,null);t["default"]=d.exports},"657b":function(e,t,l){"use strict";var a=l("aa3b"),r=l.n(a);r.a},aa3b:function(e,t,l){}}]);