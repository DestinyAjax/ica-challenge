(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15768e46"],{"4bec":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"dashboard"}},[a("top-navigation",{attrs:{current:"admin"}}),a("div",{staticClass:"section"},[a("b-container",[t.error?a("div",{staticClass:"alert alert-danger"},[t._v(t._s(t.error))]):t._e(),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3 col-lg-3 col-sm-12 col-xs-12"},[a("side-menu",{attrs:{active_page:"challenges"}})],1),a("div",{staticClass:"col-md-9 col-lg-9 col-sm-12 col-xs-12 players"},[a("div",{staticClass:"body"},[a("div",{staticClass:"overflow-auto p-2"},[t.loading?a("div",{staticClass:"text-center"},[a("i",{staticClass:"fa fa-spinner fa-spin"}),t._v(" loading... ")]):a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-9 col-lg-9 col-sm-12 col-xs-12"},[a("h4",[t._v("All Challenge Days: "),a("small",[t._v("Showing list of all challenge days")])])]),a("div",{staticClass:"col-md-3 col-lg-3 col-sm-12 col-xs-12"},[a("button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],staticClass:"btn btn-sm btn-primary pull-right",attrs:{type:"button"}},[t._v("Create Challenge")])])]),a("hr"),t.challenges.length>0?a("b-table",{staticClass:"custom-table",attrs:{id:"my-table",items:t.challenges,small:"",striped:"",responsive:"sm"},scopedSlots:t._u([{key:"cell(status)",fn:function(e){return[!0===e.item.status?a("span",{staticClass:"badge badge-success"},[t._v("Active")]):a("span",{staticClass:"badge badge-danger"},[t._v("Not Active")])]}},{key:"cell(challenge_id)",fn:function(e){return[a("button",{staticClass:"btn btn-sm btn-secondary",attrs:{type:"button"},on:{click:function(a){return t.viewUpdate(e.item.challenge_id)}}},[t._v("Edit")])]}}],null,!1,3629300255)}):a("p",{staticClass:"text-center"},[t._v("There are no challenges")])],1)])])])])])],1),a("b-modal",{attrs:{id:"modal-1",title:"Create New Challenge Day","hide-footer":""}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[a("div",{staticClass:"form-group"},[a("label",[t._v("Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Ex. Challenge Day 1",required:""},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",[t._v("Date")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],staticClass:"form-control",attrs:{type:"date",placeholder:"Challenge day date",required:""},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}}),a("span",{staticStyle:{"font-size":"12px",color:"red"}},[t._v("Please note that this must be an accurate date of the challenge day.")])]),t.submitting?a("b-button",{staticClass:"mt-3",attrs:{variant:"success",block:"",disable:""}},[a("i",{staticClass:"fa fa-spinner fa-spin"}),t._v(" processing ... ")]):a("b-button",{staticClass:"mt-3",attrs:{variant:"success",type:"submit",block:""}},[t._v("Submit")])],1)])],1)},s=[],l=(a("d81d"),a("96cf"),a("1da1")),r=a("820a"),i=a("4d94"),c=a("adc5"),o={name:"challenges",components:{TopNavigation:r["a"],SideMenu:i["a"]},data:function(){return{loading:!1,error:null,title:"",date:"",challenge_id:"",submitting:!1,chalenges:[]}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,t.challenges=[],e.next=5,Object(c["a"])();case 5:a=e.sent,n=a.data,n.data.length>0&&n.data.map((function(e,a){t.challenges.push({id:++a,title:e.title,date:e.date,status:e.status,challenge_id:e.id})})),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](1),t.error=e.t0.message;case 13:return e.prev=13,t.loading=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})))()},handleSubmit:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.submitting=!0,e.prev=1,e.next=4,Object(c["b"])({title:t.title,date:t.date});case 4:t.$bvModal.hide("modal-1"),t.$swal("Created Successfully!","Challenge day has bee successfully set.","success"),window.location.reload(),e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](1),a=e.t0.response.data,t.$swal("Something went wrong","".concat(a.message),"error");case 13:return e.prev=13,t.submitting=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,9,13,16]])})))()},viewUpdate:function(t){this.$router.push("/challenge/".concat(t))}}},d=o,u=(a("9e49"),a("2877")),m=Object(u["a"])(d,n,s,!1,null,"76a0ff45",null);e["default"]=m.exports},"9e49":function(t,e,a){"use strict";var n=a("abbd"),s=a.n(n);s.a},abbd:function(t,e,a){},adc5:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return l})),a.d(e,"c",(function(){return r})),a.d(e,"d",(function(){return i}));var n=a("dde5"),s=function(){return Object(n["a"])("challenges")},l=function(t){return Object(n["b"])("challenge/create",t)},r=function(t,e){return Object(n["c"])("challenge/".concat(t),e)},i=function(t){return Object(n["a"])("challenge/".concat(t))}},d81d:function(t,e,a){"use strict";var n=a("23e7"),s=a("b727").map,l=a("1dde"),r=a("ae40"),i=l("map"),c=r("map");n({target:"Array",proto:!0,forced:!i||!c},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-15768e46.4e152210.js.map