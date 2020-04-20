(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a39d450e"],{"3ca7":function(e,t,a){},"76ad":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"leader"}},[r("top-navigation",{attrs:{current:"leaderboard"}}),r("div",{staticClass:"section"},[r("div",{staticClass:"container"},[e.error?r("div",{staticClass:"alert alert-danger"},[e._v(" "+e._s(e.error)+" ")]):e._e(),e.loading?r("div",{staticClass:"text-center"},[r("img",{attrs:{src:a("68c4")}})]):r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-2 col-lg-2 col-sm-12 col-xs-12"}),r("div",{staticClass:"col-md-8 col-lg-8 col-sm-12 col-xs-12 leaderboard"},[null!==e.active?r("div",{staticClass:"info text-center"},[r("h1",[e._v(e._s(e.active.title))]),r("button",{staticClass:"btn btn-sm btn-secondary",attrs:{type:"button"},on:{click:e.previousChallenge}},[r("i",{staticClass:"fa fa-arrow-left"}),e._v(" Previous Day Challenge")])]):e._e(),r("h4",[e._v("Leaderboard")]),r("div",{staticClass:"tab-menu"},[r("a",{class:e.web_active,attrs:{href:"#"},on:{click:function(t){return e.handleTab("web")}}},[e._v("Web Development")]),r("a",{class:e.ui_active,attrs:{href:"#"},on:{click:function(t){return e.handleTab("ui")}}},[e._v("UI/UX Design")]),r("a",{class:e.tech_active,attrs:{href:"#"},on:{click:function(t){return e.handleTab("tech")}}},[e._v("Technical Writing")])]),e._m(0),r("div",{staticClass:"body"},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.show_web,expression:"show_web"}]},[e.webArr.length>0?r("div",e._l(e.webArr,(function(e,t){return r("player-card",{key:t,attrs:{name:e.name,score:e.score,image:e.image,index:++t,trophy:""+e.trophy}})})),1):r("div",{staticClass:"no-value"},[e._m(1),r("p",{staticStyle:{"text-align":"center"}},[e._v("There are currently no players")])])]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.show_ui,expression:"show_ui"}]},[e.uiArr.length>0?r("div",e._l(e.uiArr,(function(e,t){return r("player-card",{key:t,attrs:{name:e.name,score:e.score,image:e.image,index:++t,trophy:""+e.trophy}})})),1):r("div",{staticClass:"no-value"},[e._m(2),r("p",{staticStyle:{"text-align":"center"}},[e._v("There are currently no players")])])]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.show_tech,expression:"show_tech"}]},[e.techArr.length>0?r("div",e._l(e.techArr,(function(e,t){return r("player-card",{key:t,attrs:{name:e.name,score:e.score,image:e.image,index:++t,trophy:""+e.trophy}})})),1):r("div",{staticClass:"no-value"},[e._m(3),r("p",{staticStyle:{"text-align":"center"}},[e._v("There are currently no players")])])])])]),r("div",{staticClass:"col-md-2 col-lg-2 col-sm-12 col-xs-12"})])])])],1)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("div",{staticClass:"header-row"},[a("a",{staticClass:"column column1",attrs:{href:"#"}},[e._v("Rank")]),a("a",{staticClass:"column column2",attrs:{href:"#"}}),a("a",{staticClass:"column column3",attrs:{href:"#"}},[e._v("Name")]),a("a",{staticClass:"column column4",attrs:{href:"#"}},[e._v("Score")]),a("a",{staticClass:"column column5",attrs:{href:"#"}})])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("i",{staticClass:"fa fa-ban"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("i",{staticClass:"fa fa-ban"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("i",{staticClass:"fa fa-ban"})])}],c=(a("99af"),a("d81d"),a("d3b7"),a("ac1f"),a("25f0"),a("1276"),a("96cf"),a("1da1")),i=a("582c"),n=a("820a"),o=a("de29"),l={name:"leaderboard",components:{TopNavigation:n["a"],PlayerCard:o["a"]},data:function(){return{show_web:!1,show_ui:!1,show_tech:!1,web_active:"",ui_active:"",tech_active:"",loading:!1,webArr:[],uiArr:[],techArr:[],error:null,active:null}},created:function(){this.fetchData(),this.show_web=!0,this.web_active="active"},watch:{$route:"fetchData"},methods:{previousChallenge:function(){var e=this.active.date.split("-"),t=parseInt(e[2])-1,a=parseInt(e[1]),r="".concat(e[0],"-").concat(a<=9?"0".concat(a):a,"-").concat(t);console.log(r),this.$router.push("/previous/".concat(r))},fetchData:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,t.next=4,Object(i["a"])(1);case 4:return a=t.sent,t.next=7,Object(i["a"])(11);case 7:return r=t.sent,t.next=10,Object(i["a"])(21);case 10:s=t.sent,e.active=a.data.challenge,a.data.data.map((function(t,a){var r=e.computeTrophy(a,t.score);e.webArr.push({name:t.player_name,image:t.image_url,score:t.score,trophy:r})})),r.data.data.map((function(t,a){var r=e.computeTrophy(a,t.score);e.uiArr.push({name:t.player_name,image:t.image_url,score:t.score,trophy:r})})),s.data.data.map((function(t,a){var r=e.computeTrophy(a,t.score);e.techArr.push({name:t.player_name,image:t.image_url,score:t.score,trophy:r})})),t.next=20;break;case 17:t.prev=17,t.t0=t["catch"](0),e.error=t.t0.toString();case 20:return t.prev=20,e.loading=!1,t.finish(20);case 23:case"end":return t.stop()}}),t,null,[[0,17,20,23]])})))()},computeTrophy:function(e,t){var a="";return 0===e&&t>0?a="/images/gold.png":1===e&&t>0?a="/images/silver.png":2===e&&t>0&&(a="/images/bronze.png"),a},handleTab:function(e){switch(e){case"web":this.web_active="active",this.show_web=!0,this.ui_active="",this.show_ui=!1,this.tech_active="",this.show_tech=!1;break;case"ui":this.web_active="",this.show_web=!1,this.ui_active="active",this.show_ui=!0,this.tech_active="",this.show_tech=!1;break;case"tech":this.web_active="",this.show_web=!1,this.ui_active="",this.show_ui=!1,this.tech_active="active",this.show_tech=!0;break;default:break}}}},h=l,u=(a("792d"),a("2877")),v=Object(u["a"])(h,r,s,!1,null,"26f67a81",null);t["default"]=v.exports},"792d":function(e,t,a){"use strict";var r=a("3ca7"),s=a.n(r);s.a}}]);
//# sourceMappingURL=chunk-a39d450e.c1564406.js.map