(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0134"],{20:function(e,t){},24:function(e,t){},25:function(e,t){},E0so:function(e,t,n){"use strict";var a=n("v+aU");n.n(a).a},GcbA:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var a=n("gDS+"),r=n.n(a),o=n("EJiy"),i=n.n(o);function l(e){return"[object Array]"===Object.prototype.toString.call(e)}function s(e,t){if(null!==e&&void 0!==e)if("object"!==(void 0===e?"undefined":i()(e))&&(e=[e]),l(e))for(var n=0,a=e.length;n<a;n++)t.call(null,e[n],n,e);else for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.call(null,e[r],r,e)}function c(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function d(e,t){if(!t)return e;var n=[];s(t,function(e,t){null!==e&&void 0!==e&&(l(e)?t+="[]":e=[e],s(e,function(e){!function(e){return"[object Date]"===Object.prototype.toString.call(e)}(e)?function(e){return null!==e&&"object"===(void 0===e?"undefined":i()(e))}(e)&&(e=r()(e)):e=e.toISOString(),n.push(c(t)+"="+c(e))}))});var a=n.join("&");if(a){var o=e.indexOf("#");-1!==o&&(e=e.slice(0,o)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}},HejF:function(e,t,n){"use strict";t.a={baseURL:"https://e--delivery-dev.chinacloudsites.cn/api"}},J4ac:function(e,t,n){"use strict";n.r(t);var a=n("gDS+"),r=n.n(a),o=n("xA6U"),i=n("N5aa"),l=n("tGfh"),s={name:"TaobaoCreate",components:{UploadExcelComponent:i.a},data:function(){return{selectedGoodsId:"",selectedGoodsItem:null,loading:!1,tableData:[],tableHeader:["序号","订单编号","订单状态","买家会员名","收货人姓名","收货地址","修改后的收货地址","联系手机","宝贝标题","店铺名称"],multipleSelection:[],goods:[]}},watch:{selectedGoodsId:function(){this.selectedGoodsItem=null;for(var e=0;e<this.goods.length;e++)this.goods[e].goodsId===this.selectedGoodsId&&(this.selectedGoodsItem=this.goods[e])}},created:function(){var e=this;Object(o.c)({status:"Active"}).then(function(t){t=t.data,e.goods=t.items,0===e.goods.length&&e.$alert("没有库存货品，请先联系客服建立库存货品","遇到错误",{confirmButtonText:"确认",type:"warning"})}).catch(function(t){e.loading=!1,e.$alert(t,"遇到错误",{confirmButtonText:"确认"})})},methods:{beforeUpload:function(e){return e.size/1024/1024<1||(this.$alert("文件最大只支持1M.","遇到错误",{confirmButtonText:"确认",type:"warning"}),!1)},preprocessData:function(e){var t=this;return e.filter(function(e){return e["订单编号"]}).map(function(e,n){var a={};for(var r in e){var o=r.trim();if(e[r]=e[r].trim(),a[o]=t.trim(e[r],"'"),"联系手机"===o&&a[o].length>11)a[o]=a[o].substring(0,11);else if("修改后的收货地址"===o||"收货地址"===o){var i=a[o].split(" ").filter(function(e){return!!e});if(i.length>4){for(var l=i[3],s=4;s<i.length;s++)l+=i[s];a[o]=i[0]+" "+i[1]+" "+i[2]+" "+l}}}return a["序号"]=n+1,a})},trim:function(e,t){for(;0===e.indexOf(t);)e=e.substring(t.length);for(;e.lastIndexOf(t)===e.length-t.length;)e=e.substring(0,e.length-t.length);return e},handleSuccess:function(e){var t=e.results;e.header;this.tableData=this.preprocessData(t);var n=this.validateTrades(this.tableData);n&&this.$alert(n,"遇到错误",{confirmButtonText:"确认",type:"error"})},validateTrades:function(e){for(var t=0;t<e.length;t++){var n=Object(l.c)(e[t]);if(n)return n="订单"+e[t]["序号"]+"："+n}return""},validateTradesConfirmToGoods:function(e,t){for(var n="",a=0;a<e.length;a++)if(e[a]["店铺名称"]!==t.userShopName){n="订单"+e[a]["序号"]+": 店铺名称与所选货品的店铺不符";break}return n},toggleSelection:function(e){var t=this;this.$refs.multipleTable&&(e?e.forEach(function(e){t.$refs.multipleTable.toggleRowSelection(e)}):this.$refs.multipleTable.clearSelection())},handleSelectionChange:function(e){this.multipleSelection=e},handleUpload:function(){var e=this;if(0!==this.multipleSelection.length)if(this.selectedGoodsItem){var t=this.validateTrades(this.multipleSelection)||this.validateTradesConfirmToGoods(this.multipleSelection,this.selectedGoodsItem);if(t)this.$alert(t,"遇到错误",{confirmButtonText:"确认",type:"error"});else{this.loading=!0;var n={trades:this.multipleSelection.map(function(t){return e.convertToTrade(t)}),goodsId:this.selectedGoodsItem.goodsId};this.$store.dispatch("CreateTrades",n).then(function(t){if(e.loading=!1,t.errorCode)e.$alert(t.errorMessage,"遇到错误",{confirmButtonText:"确认",type:"error"});else{var n=e.multipleSelection.length;e.reset(),e.$alert(n+"条订单上传成功，请勿重复上传","上传成功",{confirmButtonText:"确认",type:"success",callback:function(t){e.$store.dispatch("GetUserInfo",!0)}})}}).catch(function(t){e.loading=!1,e.$alert(t,"遇到错误",{confirmButtonText:"确认"})})}}else this.$alert("请先选择对应的仓库货品","遇到错误",{confirmButtonText:"确认",type:"warning"});else this.$alert("请选择需要上传的订单","遇到错误",{confirmButtonText:"确认",type:"warning"})},convertToTrade:function(e){var t=Object(l.b)(e);return{originTradeJson:r()(e),platform:"Taobao",originShop:e["店铺名称"],originTradeId:e["订单编号"],originPrice:e["买家实际支付金额"]?parseInt(e["买家实际支付金额"]):0,originGoodsName:e["宝贝标题"],tradeTime:e["订单创建时间"]?parseInt(Date.parse(e["订单创建时间"])/1e3):Date.now()/1e3,payTime:e["订单付款时间"]?parseInt(Date.parse(e["订单付款时间"])/1e3):Date.now()/1e3,buyerNick:e["买家会员名"],buyerName:e["收货人姓名"],buyerProvince:t[0],buyerCity:t[1],buyerDistrict:t[2],buyerAddress:t[3],buyerPhone:e["联系手机"]}},reset:function(){this.loading=!1,this.$refs.multipleTable.clearSelection(),this.tableData=[]}}},c=(n("i90m"),n("KHd+")),d=Object(c.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-row",[n("el-col",{attrs:{xs:24,sm:24,md:3}},[n("div",{staticClass:"header"},[e.selectedGoodsItem?n("el-tooltip",{attrs:{placement:"bottom"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("img",{attrs:{src:e.selectedGoodsItem.itemImage,height:"200"}})]),e._v(" "),n("a",{attrs:{href:"https://item.taobao.com/item.htm?id="+e.selectedGoodsItem.itemId,target:"_blank"}},[n("img",{attrs:{src:e.selectedGoodsItem.itemImage,height:"60"}})])]):e._e()],1)]),e._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:18}},[n("upload-excel-component",{attrs:{"on-success":e.handleSuccess,"before-upload":e.beforeUpload}})],1)],1),e._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{xs:24,sm:24,md:18}},[n("div",{staticClass:"filter-container header"},[n("el-select",{staticStyle:{width:"60%"},attrs:{placeholder:e.$t("taobao.goodsId"),filterable:""},model:{value:e.selectedGoodsId,callback:function(t){e.selectedGoodsId=t},expression:"selectedGoodsId"}},e._l(e.goods,function(t){return n("el-option",{key:t.goodsId,attrs:{label:t.userShopName+"-"+t.userGoodsName,value:t.goodsId}},[n("span",{staticStyle:{float:"left"}},[e._v(e._s(t.userShopName)+" - "+e._s(t.userGoodsName))]),e._v(" "),n("span",{staticStyle:{float:"left",color:"#8492a6","font-size":"12px","padding-left":"5px"}},[e._v("("+e._s(t.weight)+"kg)")]),e._v(" "),n("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px","padding-left":"10px"}},[e._v(e._s(t.itemId))])])}))],1)]),e._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:6}},[n("div",{staticClass:"header"},[e._v("\n        总共"),n("span",[e._v(e._s(e.tableData.length))]),e._v("条订单，\n        选择了"),n("span",[e._v(e._s(e.multipleSelection.length))]),e._v("条。\n        "),n("el-button",{attrs:{loading:e.loading,type:"primary"},on:{click:e.handleUpload}},[e._v("上传")])],1)])],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.tableData,"element-loading-text":"上传中...","element-loading-spinner":"el-icon-loading",border:"","highlight-current-row":"",stripe:"","max-height":"100%"},on:{"selection-change":e.handleSelectionChange}},[e.tableHeader.length>0?n("el-table-column",{attrs:{type:"selection",width:"55",fixed:""}}):e._e(),e._v(" "),e._l(e.tableHeader,function(e){return n("el-table-column",{key:e,attrs:{prop:e,label:e}})})],2)],1)},[],!1,null,"1914ad48",null);d.options.__file="create.vue";t.default=d.exports},N5aa:function(e,t,n){"use strict";var a=n("4d7F"),r=n.n(a),o=n("EUZL"),i=n.n(o),l={props:{beforeUpload:Function,onSuccess:Function,title:String},data:function(){return{loading:!1,excelData:{header:null,results:null},description:this.title||"将Excel文件拖放到这里"}},methods:{generateData:function(e){var t=e.header,n=e.results;this.excelData.header=t,this.excelData.results=n,this.onSuccess&&this.onSuccess(this.excelData)},handleDrop:function(e){if(e.stopPropagation(),e.preventDefault(),!this.loading){var t=e.dataTransfer.files;if(1===t.length){var n=t[0];if(!this.isExcel(n))return this.$message.error("只支持.xlsx, .xls后缀名的文件"),!1;this.upload(n),e.stopPropagation(),e.preventDefault()}else this.$message.error("Only support uploading one file!")}},handleDragover:function(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"},handleUpload:function(){this.$refs["excel-upload-input"].click()},handleClick:function(e){var t=e.target.files[0];t&&this.upload(t)},upload:function(e){(this.$refs["excel-upload-input"].value=null,this.beforeUpload)?this.beforeUpload(e)&&this.readerData(e):this.readerData(e)},readerData:function(e){var t=this;return this.loading=!0,new r.a(function(n,a){var r=new FileReader;r.onload=function(e){var a=e.target.result,r=t.fixData(a),o=i.a.read(btoa(r),{type:"base64"}),l=o.SheetNames[0],s=o.Sheets[l],c=t.getHeaderRow(s),d=i.a.utils.sheet_to_json(s);t.generateData({header:c,results:d}),t.loading=!1,n()},r.readAsArrayBuffer(e)})},fixData:function(e){for(var t="",n=0,a=10240;n<e.byteLength/a;++n)t+=String.fromCharCode.apply(null,new Uint8Array(e.slice(n*a,n*a+a)));return t+=String.fromCharCode.apply(null,new Uint8Array(e.slice(n*a)))},getHeaderRow:function(e){var t=[],n=i.a.utils.decode_range(e["!ref"]),a=void 0,r=n.s.r;for(a=n.s.c;a<=n.e.c;++a){var o=e[i.a.utils.encode_cell({c:a,r:r})],l="UNKNOWN "+a;o&&o.t&&(l=i.a.utils.format_cell(o)),t.push(l)}return t},isExcel:function(e){return/\.(xlsx|xls|csv)$/.test(e.name)}}},s=(n("E0so"),n("KHd+")),c=Object(s.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"excel-upload-container"},[n("input",{ref:"excel-upload-input",staticClass:"excel-upload-input",attrs:{type:"file",accept:".xlsx, .xls"},on:{change:e.handleClick}}),e._v(" "),n("div",{staticClass:"drop",on:{drop:e.handleDrop,dragover:e.handleDragover,dragenter:e.handleDragover}},[e._v("\n    "+e._s(e.description)+"\n    "),n("el-button",{staticStyle:{"margin-left":"16px"},attrs:{loading:e.loading,size:"mini",type:"primary"},on:{click:e.handleUpload}},[e._v("打开Excel")])],1)])},[],!1,null,"4498957c",null);c.options.__file="index.vue";t.a=c.exports},Rsup:function(e,t,n){},i90m:function(e,t,n){"use strict";var a=n("Rsup");n.n(a).a},tGfh:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return l}),n.d(t,"c",function(){return s});n("OyzN");var a=n("HejF"),r=n("GcbA"),o=n("7Qib");function i(e,t){var n=Object(o.a)(e);delete n.page,delete n.limit;var i=a.a.baseURL;return i+=t?"/trade/admin/download":"/trade/download",Object(r.a)(i,n)}function l(e){e["修改后的收货地址"]||(e["修改后的收货地址"]="");var t=e["修改后的收货地址"].split(" ").filter(function(e){return!!e});return 3===t.length&&(t.push(t[2]),t[2]=t[1]),4!==t.length&&(t=e["收货地址"].split(" ").filter(function(e){return!!e})),3===t.length&&(t.push(t[2]),t[2]=t[1]),t[2]&&"null"!==t[2]||(t[2]=t[1]),t}function s(e){if(!/^[0-9\-]+$/.test(e["订单编号"]))return"订单编号只能是数字";var t=function(e){if(4!==e.length)return"收货地址必须为省 市 区 地址四个部分组成";var t=e[0],n=!1;if(["新疆","西藏","海南","青海","内蒙"].forEach(function(e){-1!==t.indexOf(e)&&(n=!0)}),n)return"目前不支持代发包裹的地区包括：新疆 西藏 海南 青海 内蒙";return""}(l(e));return t||(e["买家会员名"]?e["收货人姓名"]?e["联系手机"]?e["店铺名称"]?"":"店铺名称不能为空":"联系手机不能为空":"收货人姓名不能为空":"买家会员名不能为空")}},"v+aU":function(e,t,n){},xA6U:function(e,t,n){"use strict";n.d(t,"d",function(){return r}),n.d(t,"c",function(){return o}),n.d(t,"b",function(){return i}),n.d(t,"f",function(){return l}),n.d(t,"a",function(){return s}),n.d(t,"e",function(){return c}),n.d(t,"g",function(){return d});var a=n("t3Un");function r(e){var t=e?"/goods/admin/shops":"/goods/shops";return Object(a.a)({url:t,method:"get"})}function o(e,t){var n=t?"/goods/admin/list":"/goods/list";return Object(a.a)({url:n,method:"get",params:e})}function i(e,t){var n=t?"/goods/admin/create":"/goods/create";return Object(a.a)({url:n,method:"post",data:e})}function l(e,t){var n=t?"/goods/admin/update":"/goods/update";return Object(a.a)({url:n,method:"post",data:e})}function s(e){return Object(a.a)({url:"/goods/admin/approve",method:"post",data:e})}function c(e){return Object(a.a)({url:"/goods/admin/reject",method:"post",data:e})}function d(e){return Object(a.a)({url:"/goods/image",method:"post",data:e})}}}]);