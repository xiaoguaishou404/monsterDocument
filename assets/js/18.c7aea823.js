(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{398:function(e,t,r){},399:function(e,t,r){},448:function(e,t,r){"use strict";r(398)},449:function(e,t,r){"use strict";r(399)},469:function(e,t,r){"use strict";r.r(t);var a={components:{Icon:r(351).a},name:"FeelInput",props:{placeholder:{type:String},value:{type:String},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{type:String}}},n=(r(448),r(50)),l={components:{"f-input":Object(n.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrapper",class:{error:e.error}},[r("input",{attrs:{type:"text",disabled:e.disabled,readonly:e.readonly,placeholder:e.placeholder},domProps:{value:e.value},on:{change:function(t){return e.$emit("change",t.target.value)},input:function(t){return e.$emit("input",t.target.value)},blur:function(t){return e.$emit("blur",t.target.value)},focus:function(t){return e.$emit("focus",t.target.value)}}}),e._v(" "),e.error?[r("icon",{staticClass:"icon-error",attrs:{name:"error"}}),e._v(" "),r("span",{staticClass:"errorMessage"},[e._v(e._s(e.error))])]:e._e()],2)}),[],!1,null,"4d67da25",null).exports},data:function(){return{value:"输入试试"}}},u=(r(449),Object(n.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"easy"},[r("f-input",{attrs:{placeholder:"请输入内容"}}),e._v(" "),r("f-input",{attrs:{value:"默认文本"}}),e._v(" "),r("f-input",{attrs:{disabled:"",value:"禁用状态"}})],1),e._v(" "),r("div",{staticClass:"error"},[r("f-input",{attrs:{error:"请输入正确内容！"}})],1),e._v(" "),r("div",{staticClass:"bindDate"},[r("f-input",{model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),e._v(" "),r("span",[e._v("支持数据绑定: "+e._s(e.value))])],1)])}),[],!1,null,null,null));t.default=u.exports}}]);