(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04a21536"],{8018:function(e,t,a){"use strict";var s=a("ac9e"),n=a.n(s);n.a},a97a:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-row",{attrs:{type:"flex",justify:"end"}},[a("el-button",{on:{click:e.goBack}},[e._v("关闭")])],1),e._m(0),e._m(1),a("div",[a("p",[e._v(" 答题时间：耗时63分41秒（2020-08-17 09:01开卷，2020-08-17 10:04交卷） ")]),a("table-body",{attrs:{columns:e.columns,"table-data":e.tableData,options:e.tableOptions,"has-padding":!1}})],1),a("div",[a("el-tabs",{attrs:{type:"card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"单选题",name:"single"}},[a("AnswerDetailList",{attrs:{list:e.listSingle}})],1),a("el-tab-pane",{attrs:{label:"多选题",name:"multiple"}},[a("AnswerDetailList",{attrs:{list:e.listMulti}})],1),a("el-tab-pane",{attrs:{label:"判断题",name:"judgment"}},[a("AnswerDetailList",{attrs:{list:e.listJudgment}})],1)],1)],1)],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"title-box"},[a("h3",[e._v("消防设施操作员五级/初级消防设施操作监控方向鉴定考试")]),a("h3",[e._v("杭州鉴定站2020年6月第三周第2场")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",[a("span",[e._v("考试时间：90分钟")]),a("span",{staticStyle:{"margin-left":"50px"}},[e._v("满分：100分")])])])}],i=(a("a9e3"),a("d3b7"),a("5530")),l=a("2f62"),c={name:"AnswerDetail",components:{TableBody:function(){return a.e("chunk-79d593e5").then(a.bind(null,"2c21"))},AnswerDetailList:function(){return a.e("chunk-5c4ea622").then(a.bind(null,"9583"))}},props:{id:{type:Number,default:null},visible:{type:Boolean,default:!1}},data:function(){return{activeName:"single",tableData:[{SingleChoice:42,MultipleChoice:12,TrueOrFalse:28,TotalScore:80}],tableOptions:{border:!0,headerCellClassName:"table-header-bg"},columns:[{title:"题型",align:"center",formatter:function(e,t,a,s){return"得分"}},{title:"单选题",key:"SingleChoice",align:"center"},{title:"多选题",key:"MultipleChoice",align:"center"},{title:"判断题",key:"TrueOrFalse",align:"center"},{title:"总分",key:"TotalScore",align:"center",formatter:function(e,t,a,s){var n="",i=e.TotalScore;return!i||isNaN(i)||(n="".concat(i,i>60?"(及格)":"(不及格)")),n}}],listSingle:[],listMulti:[],listJudgment:[]}},computed:Object(i["a"])({},Object(l["c"])({tableSize:function(e){return e.settings.tableSize}})),created:function(){this.listSingle=[{QID:220,QBID:10,QBName:"消防设置监控操作理论（五级/初级）",LanguageID:1,LanguageName:"简体中文",IsMainLanguage:!0,BookName:"消防设施操作员教材(消防理论培训第一单元)",BookID:12,ClassName:"基本要求(职业道德)",ClassID:3,QNumber:"0202",QType:1,QuestionsMutex:"",Difficulty:2,QName:"单选路面上的黄色标记是何含义",QImg:"",Status:!1,EditMod:2,UserSelect:814,DetailImg:"http://fpsa-01.oss-cn-shenzhen.aliyuncs.com/TempFile/20200926101249.png",Details:[{QDID:813,DetailName:"禁止转弯",DetailImg:"",IsCorrect:!0},{QDID:814,DetailName:"禁止掉头",DetailImg:"",IsCorrect:!1},{QDID:815,DetailName:"禁止直行",DetailImg:"",IsCorrect:!1},{QDID:816,DetailName:"禁止变道",DetailImg:"",IsCorrect:!1}]},{QID:221,QBID:10,QBName:"消防设置监控操作理论（五级/初级）",LanguageID:1,LanguageName:"简体中文",IsMainLanguage:!0,BookName:"消防设施操作员教材(消防理论培训第一单元)",BookID:12,ClassName:"基本要求(职业道德)",ClassID:3,QNumber:"0202",QType:1,QuestionsMutex:"",Difficulty:2,QName:"单选路面上的黄色标记是何含义",QImg:"",Status:!1,EditMod:2,UserSelect:814,DetailImg:"http://fpsa-01.oss-cn-shenzhen.aliyuncs.com/TempFile/20200926101249.png",Details:[{QDID:813,DetailName:"答案1",DetailImg:"http://fpsa-01.oss-cn-shenzhen.aliyuncs.com/TempFile/20200926101249.png",IsCorrect:!0},{QDID:814,DetailName:"答案2",DetailImg:"http://fpsa-01.oss-cn-shenzhen.aliyuncs.com/TempFile/20200926101249.png",IsCorrect:!1},{QDID:815,DetailName:"答案3",DetailImg:"http://fpsa-01.oss-cn-shenzhen.aliyuncs.com/TempFile/20200926101249.png",IsCorrect:!1},{QDID:816,DetailName:"答案4",DetailImg:"http://fpsa-01.oss-cn-shenzhen.aliyuncs.com/TempFile/20200926101249.png",IsCorrect:!1}]}],this.listMulti=[{QID:220,QBID:10,QBName:"消防设置监控操作理论（五级/初级）",LanguageID:1,LanguageName:"简体中文",IsMainLanguage:!0,BookName:"消防设施操作员教材(消防理论培训第一单元)",BookID:12,ClassName:"基本要求(职业道德)",ClassID:3,QNumber:"0202",QType:2,QuestionsMutex:"",Difficulty:2,QName:"多选路面上的黄色标记是何含义",QImg:"",Status:!1,EditMod:2,UserSelect:[814,815],DetailImg:"http://fpsa-01.oss-cn-shenzhen.aliyuncs.com/TempFile/20200926101249.png",Details:[{QDID:812,DetailName:"这是一个长长的选项可以用来选择哦这是一个长长的选项可以用来选择哦",DetailImg:"http://fpsa-01.oss-cn-shenzhen.aliyuncs.com/TempFile/20200926101249.png",IsCorrect:!0},{QDID:813,DetailName:"这是一个长长的选项可以用来选择哦这是一个长长的选项可以用来选择哦",DetailImg:"http://fpsa-01.oss-cn-shenzhen.aliyuncs.com/TempFile/20200926101249.png",IsCorrect:!0},{QDID:814,DetailName:"这是一个长长的选项可以用来选择哦这是一个长长的选项可以用来选择哦",DetailImg:"http://fpsa-01.oss-cn-shenzhen.aliyuncs.com/TempFile/20200926101249.png",IsCorrect:!1},{QDID:815,DetailName:"这是一个长长的选项可以用来选择哦这是一个长长的选项可以用来选择哦",DetailImg:"http://fpsa-01.oss-cn-shenzhen.aliyuncs.com/TempFile/20200926101249.png",IsCorrect:!0},{QDID:816,DetailName:"一个长长的选项可以用来选择哦这是一个长长的选项可以用来选择哦",DetailImg:"http://fpsa-01.oss-cn-shenzhen.aliyuncs.com/TempFile/20200926101249.png",IsCorrect:!1}]},{QID:220,QBID:10,QBName:"消防设置监控操作理论（五级/初级）",LanguageID:1,LanguageName:"简体中文",IsMainLanguage:!0,BookName:"消防设施操作员教材(消防理论培训第一单元)",BookID:12,ClassName:"基本要求(职业道德)",ClassID:3,QNumber:"0202",QType:2,QuestionsMutex:"",Difficulty:2,QName:"多选路面上的黄色标记是何含义",QImg:"",Status:!1,EditMod:2,UserSelect:[814,815],DetailImg:"http://fpsa-01.oss-cn-shenzhen.aliyuncs.com/TempFile/20200926101249.png",Details:[{QDID:813,DetailName:"禁止转弯",DetailImg:"",IsCorrect:!0},{QDID:814,DetailName:"禁止掉头",DetailImg:"",IsCorrect:!0},{QDID:815,DetailName:"禁止直行",DetailImg:"",IsCorrect:!0},{QDID:816,DetailName:"禁止变道",DetailImg:"",IsCorrect:!1}]}],this.listJudgment=[{UserSelect:!1,CorrectItem:!1,QID:220,QBID:10,QBName:"消防设置监控操作理论（五级/初级）",LanguageID:1,LanguageName:"简体中文",IsMainLanguage:!0,BookName:"消防设施操作员教材(消防理论培训第一单元)",BookID:12,ClassName:"基本要求(职业道德)",ClassID:3,QNumber:"0202",QType:3,QuestionsMutex:"",Difficulty:2,QName:"这道题是对的吗?",QImg:"",Status:!1,EditMod:2,DetailImg:"http://fpsa-01.oss-cn-shenzhen.aliyuncs.com/TempFile/20200926101249.png"}]},methods:{goBack:function(){this.$router.go(-1)}}},o=c,m=(a("8018"),a("2877")),r=Object(m["a"])(o,s,n,!1,null,null,null);t["default"]=r.exports},ac9e:function(e,t,a){}}]);