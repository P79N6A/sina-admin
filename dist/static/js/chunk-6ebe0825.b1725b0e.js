(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ebe0825"],{"17c2":function(t,e,a){"use strict";a.d(e,"a",function(){return l}),a.d(e,"b",function(){return r});var n=a("f8c8"),o=a("a27e");function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"1",l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"10";return Object(o["a"])({url:"".concat(n["a"],"/4/data/dspActStat"),method:"get",params:{source:n["b"],dt:t,material_pos:e,is_material:a,limit:l}})}function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"real_time@all";return t=JSON.stringify(t),Object(o["a"])({url:"".concat(n["a"],"/4/data/dspActStat"),method:"get",params:{source:n["b"],dt:t,material_pos:e}})}},"1a3d":function(t,e,a){},"248e":function(t,e,a){"use strict";var n=a("bb16"),o=a.n(n);o.a},a27e:function(t,e,a){"use strict";var n=a("bc3a"),o=a.n(n),l=o.a.create({baseURL:"",timeout:5e3});l.interceptors.request.use(),l.interceptors.response.use(),e["a"]=l},b50f:function(t,e,a){"use strict";var n=a("1a3d"),o=a.n(n);o.a},bb16:function(t,e,a){},c466:function(t,e,a){"use strict";function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new Date,o=n.getMonth()+1+e<10?"0".concat(n.getMonth()+1):n.getMonth()+1+e,l=n.getDate()+a<10?"0".concat(n.getDate()):n.getDate()+a;return"".concat(n.getFullYear()+t).concat(o).concat(l)}function o(){var t=new Date,e=t.getMinutes()<10?"00":t.getMinutes();return"".concat(t.getHours(),":").concat(e)}function l(t){var e=t?new Date(t):new Date;return{year:e.getFullYear(),month:e.getMonth()+1<10?"0".concat(e.getMonth()+1):e.getMonth()+1,day:e.getDate()<10?"0".concat(e.getDate()):e.getDate(),hour:e.getHours()<10?"0".concat(e.getHours()):e.getHours(),minute:e.getMinutes()<10?"0".concat(e.getMinutes()):e.getMinutes(),second:e.getSeconds()<10?"0".concat(e.getSeconds()):e.getSeconds()}}a.d(e,"b",function(){return n}),a.d(e,"a",function(){return o}),a.d(e,"c",function(){return l})},cc4c:function(t,e,a){"use strict";a.d(e,"a",function(){return c}),a.d(e,"c",function(){return i}),a.d(e,"d",function(){return s}),a.d(e,"b",function(){return u});a("28a5"),a("ac6a"),a("456d");var n={product:"send_prod",uv:"send_uv",pv:"send_pv"},o={product:"action_prod",uv:"action_uv",pv:"action_pv"},l=["action_statistic","send_statistic"],r=[o,n];function c(t){var e=[];if(0===Object.keys(t.data).length)return e;var a=[];return Object.keys(t.data).forEach(function(e){a.push({date_time:e,value:t.data[e]})}),a[0].value.material_pos.forEach(function(t){e.push({label:t+"",value:t+""})}),e}function i(t,e){var a=[];if(0===Object.keys(t.data).length)return a;var n=0;return Object.keys(t.data).forEach(function(o){a.push({date_time:o});for(var c=t.data[o],i=function(t){Object.keys(c[l[t]][e]).forEach(function(o){a[n][r[t][o]]=c[l[t]][e][o]})},s=0;s<l.length;s++)i(s);n++}),a}function s(t,e){var a=[];if(0===Object.keys(t.data).length)return a;var n=t.data;Object.keys(n).forEach(function(t){a.push({date_time:t})});for(var o=function(t){var o=n[a[t]["date_time"]]["material_statistic"][e];Object.keys(o).forEach(function(e){Object.keys(o[e]).forEach(function(n){a[t]["".concat(e,"_").concat(n)]=o[e][n]})})},l=0;l<a.length;l++)o(l);return a}function u(t){var e=[],a=[],n=[];if(t.errcode||0===Object.keys(t.data).length)return{posRes:a,todayRes:e,legends:n};var o=t.data,l=Object.keys(o)[0],r=o[l]["action_statistic"];return Object.keys(r).forEach(function(t){n.push(t)}),Object.keys(o).forEach(function(t,n){var l=d(t);e.push([l]),a.push([l]);var r=o[t]["action_statistic"];Object.keys(r).forEach(function(t){e[n].push(r[t]["today"]?r[t]["today"]:0),a[n].push(r[t]["10p"]?r[t]["10p"]:0)})}),{posRes:a,todayRes:e,legends:n}}function d(t){var e=t.split("");return"".concat(e[0]).concat(e[1],":").concat(e[2]).concat(e[3])}},ee23:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-header",{staticClass:"header-text-line-height h1-font header-bottom-border"},[t._v("\n    用户行为\n  ")]),t._v(" "),a("el-main",[a("el-row",[a("el-col",{attrs:{span:6}},[a("el-container",[a("el-main",{staticClass:"bold-weight-font el-main-1"},[t._v("\n            date_time:\n          ")]),t._v(" "),a("el-footer",{staticClass:"el-main-1"},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期",format:"yyyyMMdd"},model:{value:t.dateValue,callback:function(e){t.dateValue=e},expression:"dateValue"}})],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:6,offset:1}},[a("el-container",[a("el-main",{staticClass:"bold-weight-font el-main-1"},[t._v("\n            material_pos:\n          ")]),t._v(" "),a("el-footer",{staticClass:"el-main-1"},[a("el-select",{attrs:{placeholder:""},model:{value:t.totalValue,callback:function(e){t.totalValue=e},expression:"totalValue"}},t._l(t.totalOptions,function(t,e){return a("el-option",{key:e,attrs:{label:t.label,value:t.value}})}),1)],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:2}},[a("el-button",{staticClass:"btn-margin",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.searchInfo}},[t._v("查询")])],1)],1),t._v(" "),a("el-row",{staticClass:"common-container top-radius"},[a("el-col",{attrs:{span:24}},[a("panel-top",{attrs:{title:"用户行为数据查询结果"}}),t._v(" "),a("el-row",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[a("el-col",{staticClass:"table-margin",attrs:{span:24}},[a("data-table",{attrs:{"table-data":t.currTableData,"secondary-data":t.secondaryData,"filter-field":t.filterValue}})],1)],1)],1)],1)],1)],1)},o=[],l=a("7c1d"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",[a("el-col",{attrs:{span:24}},[a("el-table",{attrs:{data:t.tableData,stripe:""}},t._l(t.tableOptions,function(t,e){return a("el-table-column",{key:e,attrs:{prop:t.prop,label:t.label}})}),1)],1),t._v(" "),"date_time"!==t.filterField?a("el-col",{staticClass:"secondary",attrs:{span:24}},[a("el-table",{attrs:{data:t.secondaryData,stripe:""}},[a("el-table-column",{attrs:{label:"点击"}},t._l(t.secondaryOptions,function(t,e){return a("el-table-column",{key:e,attrs:{prop:"action_"+t.prop,label:t.label}})}),1),t._v(" "),a("el-table-column",{attrs:{label:"下发"}},t._l(t.secondaryOptions,function(t,e){return a("el-table-column",{key:e,attrs:{prop:"send_"+t.prop,label:t.label}})}),1),t._v(" "),a("el-table-column",{attrs:{label:"比率"}},t._l(t.secondaryOptions,function(t,e){return a("el-table-column",{key:e,attrs:{prop:"rate_"+t.prop,label:t.label}})}),1)],1)],1):t._e()],1)},c=[],i=[{prop:"send_pv",label:"下发pv"},{prop:"send_uv",label:"下发uv"},{prop:"send_prod",label:"下发素材"},{prop:"action_pv",label:"点击pv"},{prop:"action_uv",label:"点击uv"},{prop:"action_prod",label:"点击素材"},{prop:"date_time",label:"日期"}],s=[{prop:"10p",label:"10p"},{prop:"50p",label:"50p"},{prop:"90p",label:"90p"},{prop:"av",label:"av"}],u={name:"DataTable",props:{tableData:{type:Array,default:null},filterField:{type:String,default:"date_time"},secondaryData:{type:Array,default:null}},data:function(){return{tableOptions:i,secondaryOptions:s}}},d=u,p=(a("248e"),a("2877")),f=Object(p["a"])(d,r,c,!1,null,"7648dade",null),b=f.exports,v=a("17c2"),h=a("c466"),g=a("cc4c"),_={name:"BehaviorTable",components:{PanelTop:l["a"],DataTable:b},data:function(){return{totalValue:"total",totalOptions:[],dateValue:"",currTableData:[],filterValue:"date_time",secondaryData:[],loading:!1}},created:function(){this.initApiData(Object(h["b"])(0,0,-1))},methods:{searchInfo:function(){""!==this.dateValue&&this.dateValue?(this.loading=!0,"total"!==this.totalValue?(this.filterValue="",this.initApiData(Object(h["b"])(0,0,0,this.dateValue),!1)):(this.filterValue="date_time",this.initApiData(Object(h["b"])(0,0,0,this.dateValue)))):this.$message.error("查询项为空")},initApiData:function(t){var e=this,a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];Object(v["a"])(t,this.totalValue).then(function(t){e.totalOptions=Object(g["a"])(t.data),e.currTableData=Object(g["c"])(t.data,e.totalValue),a||(e.secondaryData=Object(g["d"])(t.data,e.totalValue)),0===e.currTableData.length&&(e.totalValue="total"),e.loading=!1}).catch(function(t){e.loading=!1,console.log(t),e.$notify({title:"未知错误",message:"请检查网络后刷新重试",type:"error"})})}}},m=_,y=(a("b50f"),Object(p["a"])(m,n,o,!1,null,"7000ee7e",null));e["default"]=y.exports},f8c8:function(t,e,a){"use strict";a.d(e,"a",function(){return n}),a.d(e,"b",function(){return o});var n="",o="3567320871234567890"}}]);