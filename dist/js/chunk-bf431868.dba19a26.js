(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bf431868"],{"582c":function(e,t,s){"use strict";s.d(t,"b",(function(){return n})),s.d(t,"c",(function(){return r})),s.d(t,"d",(function(){return i})),s.d(t,"a",(function(){return o}));var a=s("dde5"),n=function(e){return Object(a["b"])("submission/create",e)},r=function(e,t){return Object(a["c"])("submission/".concat(e),t)},i=function(e){return Object(a["a"])("submission/".concat(e))},o=function(e){return Object(a["a"])("challenge/".concat(e,"/submissions"))}},"6d2a":function(e,t,s){},ccf7:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"dashboard"}},[s("top-navigation",{attrs:{current:"admin"}}),s("div",{staticClass:"section"},[s("b-container",[e.error?s("div",{staticClass:"alert alert-danger"},[e._v(e._s(e.error))]):e._e(),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-3 col-lg-3 col-sm-12 col-xs-12"},[s("side-menu",{attrs:{active_page:"submissions",is_track:""}})],1),s("div",{staticClass:"col-md-9 col-lg-9 col-sm-12 col-xs-12 players"},[s("div",{staticClass:"body"},[s("div",{staticClass:"overflow-auto p-2"},[e.loading?s("div",{staticClass:"text-center"},[s("i",{staticClass:"fa fa-spinner fa-spin"}),e._v(" loading... ")]):s("div",[s("form",{on:{submit:function(t){return t.preventDefault(),e.handleUpdate(t)}}},[s("div",{staticClass:"form-group"},[s("labal",[e._v("Player Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.player_name,expression:"player_name"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:e.player_name},on:{input:function(t){t.target.composing||(e.player_name=t.target.value)}}})],1),s("div",{staticClass:"form-group"},[s("labal",[e._v("Submission Link")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.submission_link,expression:"submission_link"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:e.submission_link},on:{input:function(t){t.target.composing||(e.submission_link=t.target.value)}}})],1),s("div",{staticClass:"form-group"},[s("labal",[e._v("Score")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.score,expression:"score"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Ex. 43.9"},domProps:{value:e.score},on:{input:function(t){t.target.composing||(e.score=t.target.value)}}})],1),s("br"),s("div",{staticClass:"form-group"},[e.processing?s("button",{staticClass:"btn btn-md btn-secondary",attrs:{disabled:""}},[s("i",{staticClass:"fa fa-spinner fa-spin"}),e._v(" Processing... ")]):s("button",{staticClass:"btn btn-md btn-success",attrs:{type:"submit"}},[e._v("Update")])])])])])])])])])],1)],1)},n=[],r=(s("96cf"),s("1da1")),i=s("820a"),o=s("4d94"),c=s("582c"),l={name:"submissiondetails",components:{TopNavigation:i["a"],SideMenu:o["a"]},data:function(){return{player_name:"",player_url:"",submission_link:"",score:0,loading:!1,processing:!1,error:null,players:[]}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var s,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,s=e.$route.params.submission_id,t.next=5,Object(c["d"])(s);case 5:a=t.sent,n=a.data,e.player_name=n.data.player_name,e.submission_link=n.data.submission_link,e.score=n.data.score,t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](1),e.error=t.t0.message;case 15:return t.prev=15,e.loading=!1,t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[1,12,15,18]])})))()},handleUpdate:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.processing=!0,t.prev=1,s=e.$route.params.submission_id,t.next=5,Object(c["c"])(s,{score:e.score});case 5:e.$swal("Updated successfully","This participant score has been updated successfully","success"),window.location.reload(),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),console.log(t.t0);case 12:return t.prev=12,e.processing=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})))()}}},u=l,d=(s("dcb32"),s("2877")),p=Object(d["a"])(u,a,n,!1,null,"14eb586e",null);t["default"]=p.exports},dcb32:function(e,t,s){"use strict";var a=s("6d2a"),n=s.n(a);n.a}}]);
//# sourceMappingURL=chunk-bf431868.dba19a26.js.map