(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76656a40"],{"0326":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-header",{staticClass:"header-text-line-height h1-font header-bottom-border"},[t._v("用户行为")]),t._v(" "),n("el-main",[n("el-row",[n("el-col",{attrs:{span:14}},[n("el-container",[n("el-main",{staticClass:"h2-font bold-weight-font"},[t._v("\n            选取时间段：\n          ")]),t._v(" "),n("el-footer",[n("el-time-select",{attrs:{placeholder:"起始时间","picker-options":t.optionsCommon},model:{value:t.startTime,callback:function(e){t.startTime=e},expression:"startTime"}}),t._v(" 到 \n            "),n("el-time-select",{attrs:{placeholder:"结束时间","picker-options":Object.assign({},t.optionsCommon,{minTime:t.startTime})},model:{value:t.endTime,callback:function(e){t.endTime=e},expression:"endTime"}})],1)],1)],1),t._v(" "),n("el-col",{attrs:{span:2}},[n("el-button",{staticClass:"btn-margin",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.searchInfo}},[t._v("查询")])],1)],1),t._v(" "),n("el-row",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"common-container top-radius"},[n("el-col",{attrs:{span:24}},[n("panel-top",{attrs:{title:"用户行为数据查询结果"}}),t._v(" "),t.isDataInit?n("el-row",{staticClass:"charts-margin"},[n("el-col",{attrs:{span:22,offset:1}},[n("Histogram",{attrs:{source:t.posSourceData,"x-axis-name":"timer","chart-id":"pos",legends:t.legends,graphics:"line",title:"10p数据展示","legends-controller":t.legendsController}})],1)],1):t._e(),t._v(" "),t.isDataInit?n("el-row",{staticClass:"charts-margin"},[n("el-col",{attrs:{span:22,offset:1}},[n("Histogram",{attrs:{source:t.todaySourceData,"x-axis-name":"timer","chart-id":"today",legends:t.legends,graphics:"line",title:"today数据展示","legends-controller":t.legendsController}})],1)],1):t._e()],1)],1)],1)],1)},r=[],i=(n("28a5"),n("ac6a"),n("7c1d")),o=n("5832"),s=n("c466"),c=n("17c2"),l=n("cc4c"),u={name:"BehaviorChart",components:{PanelTop:i["a"],Histogram:o["a"]},data:function(){return{startTime:"",endTime:"",optionsCommon:{start:"00:00",step:"01:00",end:""},legends:[],posSourceData:[],todaySourceData:[],isDataInit:!1,loading:!1,legendsController:{}}},created:function(){this._initEndTime(),this.searchInfo()},methods:{searchInfo:function(){var t=this;this.loading=!0;var e=Object(s["c"])(),n=e.year,a=e.month,r=e.day,i=this._formatTimeKey(this.endTime).hour,o=this._formatTimeKey(this.endTime).minute,u=this._formatTimeKey(this.startTime).hour||this._getDefaultStartTime(i,o).start_h,d=this._formatTimeKey(this.startTime).minute||this._getDefaultStartTime(i,o).start_m,h=new Date(+n,+a-1,+r,+u,+d),f=new Date(+n,+a-1,+r,+i,+o);Object(c["b"])({start_time:Date.parse(h)/1e3,end_time:Date.parse(f)/1e3}).then(function(e){var n=Object(l["b"])(e.data);t.legends=n.legends,t.posSourceData=n.posRes,t.todaySourceData=n.todayRes,t._initLegendsController(),t.isDataInit=!0,t.loading=!1}).catch(function(e){console.error(e),t.$notify({title:"未知错误",message:"请检查网络后刷新重试",type:"error"}),t.loading=!1})},_initLegendsController:function(){var t=this;this.legends.forEach(function(e){t.legendsController[e]=!1}),this.legendsController[this.legends[0]]=!0},_getDefaultStartTime:function(t,e){var n="",a="";return+e-30<0?(a=30,n=t-1<0?"00":t-1):(a=+e-30,n=t),this.startTime="".concat(n,":").concat(a),{start_h:n,start_m:a}},_initEndTime:function(){var t=Object(s["a"])();this.optionsCommon.end=t,this.endTime=this._formatEndTime(t)},_formatEndTime:function(t){var e=t.split("");return e[e.length-1]="0",e.join("")},_formatTimeKey:function(t){var e=t.split(":");return{hour:e[0],minute:e[1]}}}},d=u,h=(n("1735"),n("2877")),f=Object(h["a"])(d,a,r,!1,null,"0d37f892",null);e["default"]=f.exports},1735:function(t,e,n){"use strict";var a=n("2029"),r=n.n(a);r.a},"17c2":function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var a=n("f8c8"),r=n("a27e");function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"1",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"10";return t=JSON.stringify(t),Object(r["a"])({url:"".concat(a["a"],"/4/data/dspActStat"),method:"get",params:{source:a["b"],dt:t,material_pos:e,is_material:n,limit:i}})}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"real_time@all";return t=JSON.stringify(t),Object(r["a"])({url:"".concat(a["a"],"/4/data/dspActStat"),method:"get",params:{source:a["b"],dt:t,material_pos:e}})}},2029:function(t,e,n){},5832:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{width:t.width,height:t.height},attrs:{id:t.chartId}})},r=[],i=n("db72"),o=n("313e"),s=n.n(o),c=n("f42c"),l={name:"Histogram",mixins:[c["a"]],props:{width:{type:String,default:"100%"},height:{type:String,default:"300px"},source:{type:Array,default:null},xAxisName:{type:String,default:""},title:{type:String,default:"数据分布展示"},chartId:{type:String,default:"0"},tipName:{type:String,default:"次数"},legends:{type:Array,default:null},graphics:{type:String,default:"bar"},legendsController:{type:Object,default:null}},data:function(){return{chart:null}},watch:{source:{handler:function(){this.initChart()},deep:!0}},mounted:function(){this.initChart()},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{_initSeries:function(){var t=[];if(this.source)for(var e=this.source[0].length-1,n=0;n<e;n++)t.push({name:this.legends[n],symbol:"none",type:this.graphics,markLine:{data:[{type:"average",name:"平均值"}]}});return t},initChart:function(){if(console.log(this.source),0===this.source.length)return this.$message.error("图表存在空数据项"),!1;this.chart=s.a.init(document.getElementById(this.chartId)),this.chart.setOption({title:{text:"".concat(this.title),textStyle:{fontWeight:"bolder",fontSize:16,color:"#000000"}},legend:{data:this.legends,selected:Object(i["a"])({},this.legendsController)},tooltip:{trigger:"axis"},toolbox:{show:!0,itemGap:20,feature:{dataView:{title:"数据视图"},magicType:{show:!0,type:["bar","line"]},saveAsImage:{show:!0},restore:{}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",name:this.xAxisName},dataset:{source:this.source},series:this._initSeries(),yAxis:[{type:"value"}]},!0)}}},u=l,d=n("2877"),h=Object(d["a"])(u,a,r,!1,null,"7d6f8128",null);e["a"]=h.exports},a27e:function(t,e,n){"use strict";var a=n("bc3a"),r=n.n(a),i=r.a.create({baseURL:"",timeout:5e3});i.interceptors.request.use(),i.interceptors.response.use(),e["a"]=i},c466:function(t,e,n){"use strict";function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new Date,r=a.getMonth()+1+e<10?"0".concat(a.getMonth()+1):a.getMonth()+1+e,i=a.getDate()+n<10?"0".concat(a.getDate()):a.getDate()+n;return"".concat(a.getFullYear()+t).concat(r).concat(i)}function r(){var t=new Date,e=t.getHours()<10?"0".concat(t.getHours()):t.getHours(),n=t.getMinutes()<10?"00":t.getMinutes();return"".concat(e,":").concat(n)}function i(t){var e=t?new Date(t):new Date;return{timestamp:Date.parse(e),year:e.getFullYear(),month:e.getMonth()+1<10?"0".concat(e.getMonth()+1):e.getMonth()+1,day:e.getDate()<10?"0".concat(e.getDate()):e.getDate(),hour:e.getHours()<10?"0".concat(e.getHours()):e.getHours(),minute:e.getMinutes()<10?"0".concat(e.getMinutes()):e.getMinutes(),second:e.getSeconds()<10?"0".concat(e.getSeconds()):e.getSeconds()}}n.d(e,"b",function(){return a}),n.d(e,"a",function(){return r}),n.d(e,"c",function(){return i})},cc4c:function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"c",function(){return c}),n.d(e,"d",function(){return l}),n.d(e,"b",function(){return u});n("28a5"),n("55dd"),n("ac6a"),n("456d");var a={product:"send_prod",uv:"send_uv",pv:"send_pv"},r={product:"action_prod",uv:"action_uv",pv:"action_pv"},i=["action_statistic","send_statistic"],o=[r,a];function s(t){var e=[];if(0===Object.keys(t.data).length)return e;var n=[];return Object.keys(t.data).forEach(function(e){n.push({date_time:e,value:t.data[e]})}),n[0].value.material_pos.forEach(function(t){e.push({label:t+"",value:t+""})}),e}function c(t,e){var n=[];if(0===Object.keys(t.data).length)return n;var a=0;return Object.keys(t.data).forEach(function(r){n.push({date_time:r});for(var s=t.data[r],c=function(t){Object.keys(s[i[t]][e]).forEach(function(r){n[a][o[t][r]]=s[i[t]][e][r]})},l=0;l<i.length;l++)c(l);a++}),n}function l(t,e){var n=[];if(0===Object.keys(t.data).length)return n;var a=t.data;Object.keys(a).forEach(function(t){n.push({date_time:t})});for(var r=function(t){var r=a[n[t]["date_time"]]["material_statistic"][e];Object.keys(r).forEach(function(e){Object.keys(r[e]).forEach(function(a){n[t]["".concat(e,"_").concat(a)]=r[e][a]})})},i=0;i<n.length;i++)r(i);return n}function u(t){var e=[],n=[],a=[];if(t.errcode||0===Object.keys(t.data).length)return{posRes:n,todayRes:e,legends:a};var r=t.data,i=Object.keys(r)[0],o=r[i]["action_statistic"];return Object.keys(o).forEach(function(t){a.push(t)}),Object.keys(r).sort().forEach(function(t,a){var i=d(t);console.log(i),e.push([i]),n.push([i]);var o=r[t]["action_statistic"];Object.keys(o).forEach(function(t){e[a].push(o[t]["today"]?o[t]["today"]:0),n[a].push(o[t]["10p"]?o[t]["10p"]:0)})}),{posRes:n,todayRes:e,legends:a}}function d(t){var e=t.split("");return"".concat(e[0]).concat(e[1],":").concat(e[2]).concat(e[3])}},f8c8:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r});var a="",r="3567320871234567890"}}]);