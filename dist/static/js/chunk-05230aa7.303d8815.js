(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05230aa7"],{"0326":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",[a("el-header",{staticClass:"header-text-line-height h1-font header-bottom-border"},[e._v("用户行为")]),e._v(" "),a("el-main",[a("el-row",[a("el-col",{attrs:{span:18}},[a("el-container",[a("el-main",{staticClass:"h2-font bold-weight-font"},[e._v("\n            选取时间段：\n          ")]),e._v(" "),a("el-footer",[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.filterValue,callback:function(t){e.filterValue=t},expression:"filterValue"}},e._l(e.filterOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),e._v("\n                    \n            "),a("el-date-picker",{directives:[{name:"show",rawName:"v-show",value:"time_point"===e.filterValue,expression:"filterValue==='time_point'"}],attrs:{type:"datetime",placeholder:"开始时间"},model:{value:e.dateValue_s,callback:function(t){e.dateValue_s=t},expression:"dateValue_s"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:"time_point"===e.filterValue,expression:"filterValue==='time_point'"}]},[e._v("到")]),e._v(" "),a("el-date-picker",{directives:[{name:"show",rawName:"v-show",value:"time_point"===e.filterValue,expression:"filterValue==='time_point'"}],attrs:{type:"datetime",placeholder:"结束时间"},model:{value:e.dateValue_e,callback:function(t){e.dateValue_e=t},expression:"dateValue_e"}}),e._v(" "),a("el-select",{directives:[{name:"show",rawName:"v-show",value:"time_point"!==e.filterValue,expression:"filterValue!=='time_point'"}],attrs:{placeholder:"请选择"},model:{value:e.rangeValue,callback:function(t){e.rangeValue=t},expression:"rangeValue"}},e._l(e.rangeOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:2}},[a("el-button",{staticClass:"btn-margin",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.searchInfo}},[e._v("查询")])],1)],1),e._v(" "),a("el-row",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"common-container top-radius"},[a("el-col",{attrs:{span:24}},[a("panel-top",{attrs:{title:"用户行为数据查询结果"}}),e._v(" "),e.isDataInit?a("el-row",{staticClass:"charts-margin"},[a("el-col",{attrs:{span:22,offset:1}},[a("Histogram",{attrs:{source:e.posSourceData,"x-axis-name":"time_range","chart-id":"10p",legends:e.legends,graphics:"line",title:"10p数据展示","legends-controller":e.legendsController}})],1)],1):e._e(),e._v(" "),e.isDataInit?a("el-row",{staticClass:"charts-margin"},[a("el-col",{attrs:{span:22,offset:1}},[a("Histogram",{attrs:{source:e.todaySourceData,"x-axis-name":"time_range","chart-id":"today",legends:e.legends,graphics:"line",title:"today数据展示","legends-controller":e.legendsController}})],1)],1):e._e()],1)],1)],1)],1)},i=[],r=(a("ac6a"),a("7c1d")),o=a("5832"),l=a("17c2"),s=a("cc4c"),c=a("c466"),u=a("c62c"),d={name:"BehaviorChart",components:{PanelTop:r["a"],Histogram:o["a"]},data:function(){return{dateValue_s:"",dateValue_e:"",range_dateValue_s:"",range_dateValue_e:"",filterValue:"time_point",rangeValue:"four_hour",legends:[],posSourceData:[],todaySourceData:[],isDataInit:!1,loading:!1,legendsController:{},filterOptions:u["a"],rangeOptions:u["b"]}},created:function(){this._initDefaultTime(),this.searchInfo()},methods:{searchInfo:function(){if("time_point"===this.filterValue){if(!this.dateValue_s||!this.dateValue_e||""===this.dateValue_s||""===this.dateValue_e)return this.$message.error("查询项存在空项"),!1;if(!this._dateValueCheck())return this.$message.error("请保证开始日期小于结束日期"),!1;this._initApiData({start_time:+this.dateValue_s/1e3,end_time:+this.dateValue_e/1e3})}else this._initRangeDateValue(this.rangeValue),this._initApiData({start_time:Math.round(+this.range_dateValue_s/1e3),end_time:Math.round(+this.range_dateValue_e/1e3)})},_initRangeDateValue:function(e){var t=Object(c["b"])().timestamp;if(this.range_dateValue_e=t,"four_hour"===e&&(this.range_dateValue_s=t-144e5),"full_day"===e&&(this.range_dateValue_s=t-864e5),"yeater_fullday"===e){var a=Object(c["b"])(),n=a.year,i=a.month,r=a.day,o=new Date(+n,+i-1,+r);this.range_dateValue_e=+o,this.range_dateValue_s=+o-864e5}"full_week"===e&&(this.range_dateValue_s=t-6048e5),"full_month"===e&&(this.range_dateValue_s=t-2592e6)},_initApiData:function(e){var t=this;this.loading=!0,Object(l["b"])(e).then(function(e){var a=Object(s["b"])(e.data);t.legends=a.legends,t.posSourceData=a.posRes,t.todaySourceData=a.todayRes,t._initLegendsController(),t.isDataInit=!0,t.loading=!1}).catch(function(e){console.error(e),t.$notify({title:"未知错误",message:"请检查网络后刷新重试",type:"error"}),t.loading=!1})},_initLegendsController:function(){var e=this;this.legends.forEach(function(t){e.legendsController[t]=!1}),this.legendsController[this.legends[0]]=!0},_dateValueCheck:function(){return!(+this.dateValue_s>+this.dateValue_e)},_initDefaultTime:function(){var e=Object(c["b"])(),t=e.timestamp,a=e.year,n=e.month,i=e.day,r=+new Date(+a,+n-1,+i),o=Object(c["b"])(r);this.dateValue_s=o.timestamp,this.dateValue_e=t}}},h=d,p=(a("62ba"),a("2877")),f=Object(p["a"])(h,n,i,!1,null,"4778f648",null);t["default"]=f.exports},"17c2":function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"b",function(){return o});var n=a("f8c8"),i=a("a27e");function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"1",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"10";return e=JSON.stringify(e),Object(i["a"])({url:"".concat(n["b"],"/Dsp_data/dspActStat"),method:"get",params:{cip:n["a"],dt:e,material_pos:t,is_material:a,limit:r}})}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"real_time@all";return e=JSON.stringify(e),Object(i["a"])({url:"".concat(n["b"],"/Dsp_data/dspActStat"),method:"get",params:{cip:n["a"],dt:e,material_pos:t}})}},5832:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{style:{width:e.width,height:e.height},attrs:{id:e.chartId}})},i=[],r=a("db72"),o=a("313e"),l=a.n(o),s=a("f42c"),c={name:"Histogram",mixins:[s["a"]],props:{width:{type:String,default:"100%"},height:{type:String,default:"300px"},source:{type:Array,default:null},xAxisName:{type:String,default:""},title:{type:String,default:"数据分布展示"},chartId:{type:String,default:"0"},tipName:{type:String,default:"次数"},legends:{type:Array,default:null},graphics:{type:String,default:"bar"},legendsController:{type:Object,default:null}},data:function(){return{chart:null}},watch:{source:{handler:function(){this.initChart()},deep:!0}},mounted:function(){this.initChart()},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{_initSeries:function(){var e=[];if(this.source)for(var t=this.source[0].length-1,a=0;a<t;a++)e.push({name:this.legends[a],symbol:"none",type:this.graphics,markLine:{data:[{type:"average",name:"平均值"}]}});return e},initChart:function(){if(0===this.source.length)return this.$message.error("图表存在空数据项"),!1;this.chart=l.a.init(document.getElementById(this.chartId)),this.chart.setOption({title:{text:"".concat(this.title),textStyle:{fontWeight:"bolder",fontSize:16,color:"#000000"}},legend:{data:this.legends,selected:Object(r["a"])({},this.legendsController)},tooltip:{trigger:"axis"},toolbox:{show:!0,itemGap:20,feature:{dataView:{title:"数据视图"},magicType:{show:!0,type:["bar","line"]},saveAsImage:{show:!0},restore:{}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",name:this.xAxisName},dataset:{source:this.source},series:this._initSeries(),yAxis:[{type:"value"}]},!0)}}},u=c,d=a("2877"),h=Object(d["a"])(u,n,i,!1,null,"8000b9dc",null);t["a"]=h.exports},"62ba":function(e,t,a){"use strict";var n=a("a81d"),i=a.n(n);i.a},a27e:function(e,t,a){"use strict";var n=a("bc3a"),i=a.n(n),r=i.a.create({baseURL:"",timeout:5e3});r.interceptors.request.use(),r.interceptors.response.use(),t["a"]=r},a81d:function(e,t,a){},c466:function(e,t,a){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new Date,i=n.getMonth()+1+t<10?"0".concat(n.getMonth()+1):n.getMonth()+1+t,r=n.getDate()+a<10?"0".concat(n.getDate()):n.getDate()+a;return"".concat(n.getFullYear()+e).concat(i).concat(r)}function i(e){var t=e?new Date(e):new Date;return{timestamp:Date.parse(t),year:t.getFullYear(),month:t.getMonth()+1<10?"0".concat(t.getMonth()+1):t.getMonth()+1,day:t.getDate()<10?"0".concat(t.getDate()):t.getDate(),hour:t.getHours()<10?"0".concat(t.getHours()):t.getHours(),minute:t.getMinutes()<10?"0".concat(t.getMinutes()):t.getMinutes(),second:t.getSeconds()<10?"0".concat(t.getSeconds()):t.getSeconds()}}a.d(t,"a",function(){return n}),a.d(t,"b",function(){return i})},c62c:function(e,t,a){"use strict";a.d(t,"d",function(){return n}),a.d(t,"c",function(){return i}),a.d(t,"a",function(){return r}),a.d(t,"b",function(){return o});var n=[{prop:"date_time",label:"日期"},{prop:"send_pv",label:"下发pv"},{prop:"send_uv",label:"下发uv"},{prop:"send_prod",label:"下发素材"},{prop:"action_pv",label:"点击pv"},{prop:"action_uv",label:"点击uv"},{prop:"action_prod",label:"点击素材"}],i=[{prop:"10p",label:"10p"},{prop:"50p",label:"50p"},{prop:"90p",label:"90p"},{prop:"av",label:"av"}],r=[{value:"time_point",label:"精确查找"},{value:"time_range",label:"范围查找"}],o=[{value:"four_hour",label:"最近四小时"},{value:"full_day",label:"最近一天"},{value:"yeater_fullday",label:"昨天"},{value:"full_week",label:"最近一周"},{value:"full_month",label:"最近一个月"}]},cc4c:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"c",function(){return s}),a.d(t,"d",function(){return c}),a.d(t,"b",function(){return u});a("28a5"),a("55dd"),a("ac6a"),a("456d");var n={product:"send_prod",uv:"send_uv",pv:"send_pv"},i={product:"action_prod",uv:"action_uv",pv:"action_pv"},r=["action_statistic","send_statistic"],o=[i,n];function l(e){var t=[];if(0===Object.keys(e.data).length)return t;var a=[];return Object.keys(e.data).forEach(function(t){a.push({date_time:t,value:e.data[t]})}),a[0].value.material_pos.forEach(function(e){t.push({label:e+"",value:e+""})}),t}function s(e,t){var a=[];if(0===Object.keys(e.data).length)return a;var n=0;return Object.keys(e.data).forEach(function(i){a.push({date_time:i});for(var l=e.data[i],s=function(e){Object.keys(l[r[e]][t]).forEach(function(i){a[n][o[e][i]]=l[r[e]][t][i]})},c=0;c<r.length;c++)s(c);n++}),a}function c(e,t){var a=[];if(0===Object.keys(e.data).length)return a;var n=e.data;Object.keys(n).forEach(function(e){a.push({date_time:e})});for(var i=function(e){var i=n[a[e]["date_time"]]["material_statistic"][t];Object.keys(i).forEach(function(t){Object.keys(i[t]).forEach(function(n){a[e]["".concat(t,"_").concat(n)]=i[t][n]})})},r=0;r<a.length;r++)i(r);return a}function u(e){var t=[],a=[],n=[];if(e.errcode||0===Object.keys(e.data).length)return{posRes:a,todayRes:t,legends:n};var i=e.data,r=Object.keys(i),o=i[r[r.length-1]]["action_statistic"];return Object.keys(o).forEach(function(e){n.push(e)}),Object.keys(i).sort().forEach(function(e,n){var r=d(e);t.push([r]),a.push([r]);var o=i[e]["action_statistic"];Object.keys(o).forEach(function(e){t[n].push(o[e]["today"]?o[e]["today"]:0),a[n].push(o[e]["10p"]?o[e]["10p"]:0)})}),{posRes:a,todayRes:t,legends:n}}function d(e){var t=e.split("");return"".concat(t[0]).concat(t[1],":").concat(t[2]).concat(t[3])}},f8c8:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return i});var n="",i=230}}]);