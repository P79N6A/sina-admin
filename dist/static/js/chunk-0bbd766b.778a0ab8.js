(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bbd766b"],{"19f9":function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r}),a.d(t,"c",function(){return i});var n=[{value:"cat_ids",label:"cat_ids"},{value:"city_level",label:"city_level"},{value:"obj_ids",label:"obj_ids"},{value:"user_type_id",label:"user_type_id"},{value:"reg_time",label:"reg_time"},{value:"gender",label:"gender"},{value:"age",label:"age"},{value:"tag_ids",label:"tag_ids"},{value:"value",label:"value"}],r=[{value:"task_id",label:"task_id"},{value:"date_time",label:"date_time"}],i=[{value:10,label:10},{value:25,label:25},{value:50,label:50},{value:100,label:100}]},5832:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{style:{width:e.width,height:e.height},attrs:{id:e.chartId}})},r=[],i=a("313e"),s=a.n(i),l=a("f42c"),o={name:"Histogram",mixins:[l["a"]],props:{width:{type:String,default:"100%"},height:{type:String,default:"300px"},source:{type:Array,default:null},xAxisName:{type:String,default:""},title:{type:String,default:"数据分布展示"},chartId:{type:String,default:"0"},tipName:{type:String,default:"次数"},legends:{type:Array,default:null},graphics:{type:String,default:"bar"}},data:function(){return{chart:null}},watch:{source:{handler:function(){this.initChart()},deep:!0}},mounted:function(){this.initChart()},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{_initSeries:function(){var e=[];if(this.source)for(var t=this.source[0].length-1,a=0;a<t;a++)e.push({name:this.legends[a],type:this.graphics,markLine:{data:[{type:"average",name:"平均值"}]}});return e},initChart:function(){if(0===this.source.length)return this.$message.error("存在空数据项"),!1;this.chart=s.a.init(document.getElementById(this.chartId)),this.chart.setOption({title:{text:"".concat(this.title),textStyle:{fontWeight:"bolder",fontSize:16,color:"#000000"}},legend:{data:this.legends},tooltip:{trigger:"axis"},toolbox:{show:!0,itemGap:20,feature:{dataView:{title:"数据视图"},magicType:{show:!0,type:["bar","line"]},saveAsImage:{show:!0},restore:{}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",name:this.xAxisName},dataset:{source:this.source},series:this._initSeries(),yAxis:[{type:"value"}]},!0)}}},u=o,c=a("2877"),d=Object(c["a"])(u,n,r,!1,null,"6d35ccbc",null);t["a"]=d.exports},"6a25":function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a.d(t,"d",function(){return s}),a.d(t,"c",function(){return o}),a.d(t,"b",function(){return l});var n=a("a27e"),r=a("f8c8");function i(){return Object(n["a"])({url:"".concat(r["a"],"/4/data/dspFeaDataStat"),method:"get",params:{cip:230,source:r["b"],type:"coverage",taskIds:"all",dts:"all"}})}function s(e,t){return Object(n["a"])({url:"".concat(r["a"],"/4/data/dspFeaDataStat"),method:"get",params:{cip:230,source:r["b"],type:t,taskIds:e,dts:"[]"}})}function l(e,t){return Object(n["a"])({url:"".concat(r["a"],"/4/data/dspFeaDataStat"),method:"get",params:{cip:230,source:r["b"],type:t,taskIds:"[]",dts:e}})}function o(){return Object(n["a"])({url:"".concat(r["a"],"/4/data/dspFeaDataStat"),method:"get",params:{source:r["b"],cip:230,taskIds:"[]",dts:"[]",type:"all",isTaskIds:!0,isDts:!0}})}},a27e:function(e,t,a){"use strict";var n=a("bc3a"),r=a.n(n),i=r.a.create({baseURL:"",timeout:5e3});i.interceptors.request.use(),i.interceptors.response.use(),t["a"]=i},b8de:function(e,t,a){},c466:function(e,t,a){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new Date,r=n.getMonth()+1+t<10?"0".concat(n.getMonth()+1):n.getMonth()+1+t,i=n.getDate()+a<10?"0".concat(n.getDate()):n.getDate()+a;return"".concat(n.getFullYear()+e).concat(r).concat(i)}function r(){var e=new Date,t=e.getMinutes()<10?"00":e.getMinutes();return"".concat(e.getHours(),":").concat(t)}function i(e){var t=e?new Date(e):new Date;return{year:t.getFullYear(),month:t.getMonth()+1<10?"0".concat(t.getMonth()+1):t.getMonth()+1,day:t.getDate()<10?"0".concat(t.getDate()):t.getDate(),hour:t.getHours()<10?"0".concat(t.getHours()):t.getHours(),minute:t.getMinutes()<10?"0".concat(t.getMinutes()):t.getMinutes(),second:t.getSeconds()<10?"0".concat(t.getSeconds()):t.getSeconds()}}a.d(t,"b",function(){return n}),a.d(t,"a",function(){return r}),a.d(t,"c",function(){return i})},c4e2:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",[a("el-header",{staticClass:"header-text-line-height h1-font header-bottom-border"},[e._v("数据分析展示")]),e._v(" "),a("el-main",[a("el-row",[a("el-col",{attrs:{span:3}},[a("el-select",{attrs:{placeholder:"请选择",size:"small"},model:{value:e.fieldValue,callback:function(t){e.fieldValue=t},expression:"fieldValue"}},e._l(e.fieldOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),a("el-col",{attrs:{span:8,offset:1}},[a("el-select",{directives:[{name:"show",rawName:"v-show",value:"task_id"===e.fieldValue,expression:"fieldValue==='task_id'"}],staticStyle:{width:"100%"},attrs:{multiple:"","multiple-limit":5,placeholder:"请选择",size:"small"},model:{value:e.passiveValue,callback:function(t){e.passiveValue=t},expression:"passiveValue"}},e._l(e.passiveOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),e._v(" "),a("el-date-picker",{directives:[{name:"show",rawName:"v-show",value:"task_id"!==e.fieldValue,expression:"fieldValue!=='task_id'"}],staticStyle:{width:"90%"},attrs:{type:"dates",format:"yyyyMMdd",placeholder:"选择一个或多个日期",size:"small"},on:{change:e.change},model:{value:e.dateValue,callback:function(t){e.dateValue=t},expression:"dateValue"}})],1),e._v(" "),a("el-col",{attrs:{span:3,offset:1}},[a("el-select",{attrs:{placeholder:"请选择",size:"small"},model:{value:e.extraValue,callback:function(t){e.extraValue=t},expression:"extraValue"}},e._l(e.extraOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),a("el-col",{attrs:{span:2,offset:2},nativeOn:{click:function(t){return e.searchTargetValue(t)}}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"small"}},[e._v("查询")])],1)],1),e._v(" "),a("el-row",[a("el-col",{staticClass:"common-container top-radius",attrs:{span:24}},[a("el-row",[a("el-col",{attrs:{span:24}},[a("panel-top",{attrs:{title:"数据分布展示"}})],1)],1),e._v(" "),a("el-row",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[e.showCharts?a("el-col",{attrs:{span:24}},[a("charts-data",{attrs:{"curr-charts-data":e.currChartsData,"x-alias-name":e.extraValue,legends:e.keys}})],1):e._e()],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:22,offset:1}},[a("el-table",{staticStyle:{width:"100%",marginBottom:"20px",marginTop:"20px"},attrs:{data:e.UidCountTable,border:"",stripe:""}},[a("el-table-column",{attrs:{prop:"key",label:"key",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"uid_count",label:"uid_count",sortable:""}})],1)],1)],1)],1)],1)],1),e._v(" "),a("el-footer")],1)},r=[],i=a("f23a"),s=a("6a25"),l=a("19f9"),o=a("c466"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",[a("el-col",[a("histogram",{attrs:{height:"400px",source:e.currChartsData,"x-axis-name":e.xAliasName,legends:e.legends}})],1)],1)},c=[],d=a("5832"),h={name:"ChartsData",components:{Histogram:d["a"]},props:{currChartsData:{type:Array,default:null},xAliasName:{type:String,default:""},legends:{type:Array,default:null}}},f=h,p=(a("cda4"),a("2877")),g=Object(p["a"])(f,u,c,!1,null,"22d75366",null),v=g.exports,b=a("7c1d"),m={name:"DataDistribution",components:{ChartsData:v,PanelTop:b["a"]},data:function(){return{loading:!1,fieldOptions:l["b"],passiveOptions:[],extraOptions:l["a"],fieldValue:"task_id",dateValue:[],passiveValue:[],extraValue:"cat_ids",UidCountTable:[],keys:[],currChartsData:null,showCharts:!1}},watch:{dateValue:function(e){e.length>5&&(this.dateValue.length=5,this.$notify({title:"非法输入",message:"最多同时显示五天的数据",type:"warning"}))}},created:function(){this._initApiData()},methods:{change:function(){var e=Object(o["b"])();console.log(e,this.dateValue),this.dateValue=this.dateValue.filter(function(t){return!(Object(o["b"])(0,0,0,t)>e)})},searchTargetValue:function(){var e=this;if("task_id"===this.fieldValue){if(0===this.passiveValue.length)return void this.$message.error("task_id筛选项为空");if(this.passiveValue.length>5)return void this.$message.error("最多同时展示5条数据");this.loading=!0;var t=JSON.stringify(this.passiveValue);Object(s["d"])(t,this.extraValue).then(function(t){var a=Object(i["b"])("task_id",t.data,e.extraValue),n=a.chartsMap,r=a.uidCountMap,s=a.legends;e.currChartsData=n,e.UidCountTable=r,e.keys=s,e.showCharts=!0,e.loading=!1}).catch(function(t){console.error(t),e.loading=!1,e.$notify({title:"未知错误",message:"请检查网络后刷新重试",type:"error"})})}else{if(0===this.dateValue.length)return void this.$message.error("date_time筛选项为空");this.loading=!0;var a=Object(i["d"])(this.dateValue);Object(s["b"])(a,this.extraValue).then(function(t){var a=Object(i["b"])("date_time",t.data,e.extraValue),n=a.chartsMap,r=a.uidCountMap,s=a.legends;e.currChartsData=n,e.UidCountTable=r,e.keys=s,e.showCharts=!0,e.loading=!1}).catch(function(t){console.error(t),e.loading=!1,e.$notify({message:"请检查网络后重试"})})}},_initDefaultValues:function(){this.passiveValue=[this.passiveOptions[0].value],this.extraValue=this.extraOptions[0].value,this.searchTargetValue()},_initApiData:function(){var e=this;Object(s["c"])().then(function(t){var a=t.data.taskIds;e.passiveOptions=Object(i["c"])(a),e._initDefaultValues()})}}},y=m,_=Object(p["a"])(y,n,r,!1,null,"401d4e43",null);t["default"]=_.exports},cda4:function(e,t,a){"use strict";var n=a("b8de"),r=a.n(n);r.a},f23a:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"c",function(){return i}),a.d(t,"d",function(){return s}),a.d(t,"b",function(){return l});a("5df3"),a("1c4c"),a("28a5"),a("456d"),a("ac6a");var n=a("c466");function r(e){var t=e.dsp_monitor_task,a=e.dsp_monitor_day,n=[],r=[];function i(e){var t=[],a=1;return Object.keys(e).forEach(function(e){t.push({field:e,index:a++})}),t}return n=i(t),r=i(a),n.forEach(function(e){Object.assign(e,t[e.field]["coverage"])}),r.forEach(function(e){Object.assign(e,a[e.field]["coverage"])}),{coverages_task_id:n,coverages_day:r}}function i(e){var t=[];return e&&(e=e.split(","),e.forEach(function(e){t.push({value:e,lable:e})})),t}function s(e){var t=[];return e.forEach(function(e){t.push(Object(n["b"])(0,0,0,e))}),JSON.stringify(t)}function l(e,t,a){var n={task_id:"dsp_monitor_task",date_time:"dsp_monitor_day"},r=t[n[e]],i=[];Object.keys(r).forEach(function(e){i.push({key:e,uid_count:r[e]["uid_count"]})});var s=Array.from(Object.keys(r)).length,l=[],o=[];Object.keys(r).forEach(function(e){o.push(e)});var u=[],c=i[0].key+"";Object.keys(r[c][a]).forEach(function(e){u.push(e),l.push([e])});for(var d=0;d<s;d++)for(var h=r[i[d].key][a],f=0;f<u.length;f++)l[f].push(h[u[f]]);return{chartsMap:l,uidCountMap:i,legends:o}}},f8c8:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r});var n="",r="3567320871234567890"}}]);