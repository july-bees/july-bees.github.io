(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0254"],{20:function(e,t){},24:function(e,t){},25:function(e,t){},"6z9e":function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return s});var r=n("HejF"),a=n("GcbA"),i=n("7Qib");function o(e){var t=e%100;return Math.floor(e/100)+"."+(t>=10?t:"0"+t)}function s(e,t){var n=Object(i.a)(e);delete n.page,delete n.limit;var o=r.a.baseURL;return o+=t?"/balance/admin/history-download":"/balance/history-download",Object(a.a)(o,n)}},"9lpW":function(e,t,n){"use strict";n.r(t);var r=n("OyzN"),a=n.n(r),i=n("N5aa"),o=n("t3Un");var s=n("ZySA"),l=n("+iC2"),c=n("6z9e"),u={name:"AdminPricePlan",directives:{waves:s.a},components:{UploadExcelComponent:i.a},data:function(){var e=Object(l.a)().map(l.c);return{userLevelHeaders:e,tableHeader:["重量"].concat(e),editableItems:e,list:null,listLoading:!0,refreshLoading:!1,saveLoading:!1,exportLoading:!1}},created:function(){this.forceRefresh()},methods:{forceRefresh:function(){var e=this;this.refreshLoading=!0,this.editableItems=[],this.fetch().then(function(){e.refresh(),e.refreshLoading=!1})},fetch:function(){var e=this;return this.listLoading=!0,Object(o.a)({url:"/admin/price-plan",method:"get"}).then(function(t){e.listLoading=!1,0!==t.data.errorCode&&e.$message.error(t.data.errorMessage);var n=t.data.pricePlan;n&&n.userPricePlans?e.list=e.convertToWeightPricePlans(n.userPricePlans):e.list=e.generateDefaultWeigthPricePlans()})},refresh:function(){this.refreshLoading=!1},edit:function(){0===this.editableItems.length?this.editableItems=this.userLevelHeaders:this.editableItems=[]},convertToWeightPricePlans:function(e){var t={};for(var n in e){var r=Object(l.c)(n),i=e[n];for(var o in t.pricePerkg||(t.pricePerkg=this.generateAWeightPricePlan(),t.pricePerkg["重量"]="续重/公斤"),t.pricePerkg[r]=Object(c.a)(i.pricePerKg),i.fixedWeightPrices)t[o]||(t[o]=this.generateAWeightPricePlan(),t[o]["重量"]=parseInt(o)/1e3+"公斤",t[o].weight=o),t[o][r]=Object(c.a)(i.fixedWeightPrices[o])}return a()(t).map(function(e){return t[e]})},generateDefaultWeigthPricePlans:function(){var e=this,t=[1e3,2e3,3e3,4e3,5e3,6e3].map(function(t){var n={"重量":t/1e3+"公斤",weight:t};return e.userLevelHeaders.forEach(function(e){n[e]=0}),n}),n={"重量":"续重/公斤"};return this.userLevelHeaders.forEach(function(e){n[e]=0}),t.push(n),t},generateAWeightPricePlan:function(){var e={};return this.userLevelHeaders.forEach(function(t){e[t]=""}),e},convertToUserPricePlans:function(e){var t={};return this.userLevelHeaders.forEach(function(n){var r={},a=0;e.forEach(function(e){var t=e.weight,i=Math.round(100*parseFloat(e[n]));void 0===t?a=i:r[t]=i});var i=Object(l.b)(n);t[i]={fixedWeightPrices:r,pricePerkg:a}}),t},beforeImport:function(e){return this.listLoading=!0,e.size/1024/1024<1||(this.$alert("文件最大只支持1M.","遇到错误",{confirmButtonText:"确认",type:"warning"}),!1)},preprocessData:function(e){return e.map(function(e){return"续重/公斤"===e["重量"]?e.weight=void 0:e.weight=1e3*parseInt(e["重量"]),e}).filter(function(e){return e.weight||void 0===e.weight})},handleImport:function(e){var t=e.results;e.header;this.list=this.preprocessData(t),console.log(this.list),this.listLoading=!1},save:function(){var e=this;this.listLoading=!0,this.saveLoading=!0,function(e){var t={userPricePlans:e};return Object(o.a)({url:"/admin/price-plan",method:"post",data:t})}(this.convertToUserPricePlans(this.list)).then(function(t){e.listLoading=!1,e.saveLoading=!1,(t=t.data).errorCode?e.$message.error(t.errorMessage):(e.$message.success("价格表更新成功"),e.forceRefresh())}).catch(function(t){e.listLoading=!1,e.saveLoading=!1,e.$message.error(t)})},handleExport:function(){var e=this;this.listLoading=!0,this.exportLoading=!0;var t=this.list;n.e("chunk-8725").then(n.bind(null,"S/jZ")).then(function(n){var r=e.tableHeader,a=e.formatJson(r,t);n.export_json_to_excel({header:r,data:a,filename:e.getFileName()}),e.listLoading=!1,e.exportLoading=!1})},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return t[e]})})},getFileName:function(){var e=new Date;return"价格表_"+e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()}}},d=n("KHd+"),f=Object(d.a)(u,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-row",[n("el-col",{attrs:{xs:24}},[n("upload-excel-component",{attrs:{"on-success":e.handleImport,"before-upload":e.beforeImport}})],1)],1),e._v(" "),n("el-row",[n("el-col",{attrs:{xs:18,sm:16,md:15}},[n("div",{staticClass:"filter-container"},[n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.edit}},[e._v("修改")]),e._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{loading:e.saveLoading,type:"primary",icon:"el-icon-save"},on:{click:e.save}},[e._v("保存")])],1)]),e._v(" "),n("el-col",{attrs:{xs:6,sm:8,md:9}},[n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{loading:e.refreshLoading,type:"primary",icon:"el-icon-refresh"},on:{click:e.forceRefresh}},[e._v("刷新")]),e._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticStyle:{float:"right"},attrs:{loading:e.exportLoading,type:"primary",icon:"el-icon-export"},on:{click:e.handleExport}},[e._v("导出价格表")])],1)],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""}},e._l(e.tableHeader,function(t){return n("el-table-column",{key:t,attrs:{prop:t,label:t},scopedSlots:e._u([{key:"default",fn:function(r){return[-1!==e.editableItems.indexOf(t)?n("div",[n("el-input",{attrs:{placeholder:t,clearable:""},model:{value:r.row[t],callback:function(n){e.$set(r.row,t,n)},expression:"scope.row[item]"}})],1):n("div",[n("span",[e._v(e._s(r.row[t]))])])]}}])})}))],1)},[],!1,null,null,null);f.options.__file="index.vue";t.default=f.exports},E0so:function(e,t,n){"use strict";var r=n("v+aU");n.n(r).a},GcbA:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n("gDS+"),a=n.n(r),i=n("EJiy"),o=n.n(i);function s(e){return"[object Array]"===Object.prototype.toString.call(e)}function l(e,t){if(null!==e&&void 0!==e)if("object"!==(void 0===e?"undefined":o()(e))&&(e=[e]),s(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}function c(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function u(e,t){if(!t)return e;var n=[];l(t,function(e,t){null!==e&&void 0!==e&&(s(e)?t+="[]":e=[e],l(e,function(e){!function(e){return"[object Date]"===Object.prototype.toString.call(e)}(e)?function(e){return null!==e&&"object"===(void 0===e?"undefined":o()(e))}(e)&&(e=a()(e)):e=e.toISOString(),n.push(c(t)+"="+c(e))}))});var r=n.join("&");if(r){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e}},HejF:function(e,t,n){"use strict";t.a={baseURL:"https://e--delivery-dev.chinacloudsites.cn/api"}},N5aa:function(e,t,n){"use strict";var r=n("4d7F"),a=n.n(r),i=n("EUZL"),o=n.n(i),s={props:{beforeUpload:Function,onSuccess:Function,title:String},data:function(){return{loading:!1,excelData:{header:null,results:null},description:this.title||"将Excel文件拖放到这里"}},methods:{generateData:function(e){var t=e.header,n=e.results;this.excelData.header=t,this.excelData.results=n,this.onSuccess&&this.onSuccess(this.excelData)},handleDrop:function(e){if(e.stopPropagation(),e.preventDefault(),!this.loading){var t=e.dataTransfer.files;if(1===t.length){var n=t[0];if(!this.isExcel(n))return this.$message.error("只支持.xlsx, .xls后缀名的文件"),!1;this.upload(n),e.stopPropagation(),e.preventDefault()}else this.$message.error("Only support uploading one file!")}},handleDragover:function(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"},handleUpload:function(){this.$refs["excel-upload-input"].click()},handleClick:function(e){var t=e.target.files[0];t&&this.upload(t)},upload:function(e){(this.$refs["excel-upload-input"].value=null,this.beforeUpload)?this.beforeUpload(e)&&this.readerData(e):this.readerData(e)},readerData:function(e){var t=this;return this.loading=!0,new a.a(function(n,r){var a=new FileReader;a.onload=function(e){var r=e.target.result,a=t.fixData(r),i=o.a.read(btoa(a),{type:"base64"}),s=i.SheetNames[0],l=i.Sheets[s],c=t.getHeaderRow(l),u=o.a.utils.sheet_to_json(l);t.generateData({header:c,results:u}),t.loading=!1,n()},a.readAsArrayBuffer(e)})},fixData:function(e){for(var t="",n=0,r=10240;n<e.byteLength/r;++n)t+=String.fromCharCode.apply(null,new Uint8Array(e.slice(n*r,n*r+r)));return t+=String.fromCharCode.apply(null,new Uint8Array(e.slice(n*r)))},getHeaderRow:function(e){var t=[],n=o.a.utils.decode_range(e["!ref"]),r=void 0,a=n.s.r;for(r=n.s.c;r<=n.e.c;++r){var i=e[o.a.utils.encode_cell({c:r,r:a})],s="UNKNOWN "+r;i&&i.t&&(s=o.a.utils.format_cell(i)),t.push(s)}return t},isExcel:function(e){return/\.(xlsx|xls|csv)$/.test(e.name)}}},l=(n("E0so"),n("KHd+")),c=Object(l.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"excel-upload-container"},[n("input",{ref:"excel-upload-input",staticClass:"excel-upload-input",attrs:{type:"file",accept:".xlsx, .xls"},on:{change:e.handleClick}}),e._v(" "),n("div",{staticClass:"drop",on:{drop:e.handleDrop,dragover:e.handleDragover,dragenter:e.handleDragover}},[e._v("\n    "+e._s(e.description)+"\n    "),n("el-button",{staticStyle:{"margin-left":"16px"},attrs:{loading:e.loading,size:"mini",type:"primary"},on:{click:e.handleUpload}},[e._v("打开Excel")])],1)])},[],!1,null,"4498957c",null);c.options.__file="index.vue";t.a=c.exports},ZySA:function(e,t,n){"use strict";var r=n("P2sY"),a=n.n(r),i=(n("jUE0"),{bind:function(e,t){e.addEventListener("click",function(n){var r=a()({},t.value),i=a()({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},r),o=i.ele;if(o){o.style.position="relative",o.style.overflow="hidden";var s=o.getBoundingClientRect(),l=o.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":((l=document.createElement("span")).className="waves-ripple",l.style.height=l.style.width=Math.max(s.width,s.height)+"px",o.appendChild(l)),i.type){case"center":l.style.top=s.height/2-l.offsetHeight/2+"px",l.style.left=s.width/2-l.offsetWidth/2+"px";break;default:l.style.top=(n.pageY-s.top-l.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",l.style.left=(n.pageX-s.left-l.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return l.style.backgroundColor=i.color,l.className="waves-ripple z-active",!1}},!1)}}),o=function(e){e.directive("waves",i)};window.Vue&&(window.waves=i,Vue.use(o)),i.install=o;t.a=i},jUE0:function(e,t,n){},"v+aU":function(e,t,n){}}]);