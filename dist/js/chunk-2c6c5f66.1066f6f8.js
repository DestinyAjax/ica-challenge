(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c6c5f66"],{"40fd":function(e,t,a){},"73cf":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"register"}},[r("top-navigation",{attrs:{current:"register"}}),r("div",{staticClass:"section"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-2 col-lg-2 col-sm-12 col-xs-12"}),r("div",{staticClass:"col-md-8 col-lg-8 col-sm-12 col-xs-12 form"},[e._m(0),r("div",{staticClass:"body"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[r("div",{staticClass:"form-group"},[r("label",[e._v("Full Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",autocomplete:"off",name:"fullName",placeholder:"Enter your full name...",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[e._v("Email Address")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",autocomplete:"off",name:"emailAddress",placeholder:"Enter your email ...",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[e._v("Telephone")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.telephone,expression:"telephone"}],staticClass:"form-control",attrs:{min:"11",max:"11",type:"text",name:"phone",autocomplete:"off",placeholder:"Enter your phone number ...",required:""},domProps:{value:e.telephone},on:{input:function(t){t.target.composing||(e.telephone=t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[e._v("School")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.school,expression:"school"}],staticClass:"form-control",attrs:{type:"text",name:"school",autocomplete:"off",placeholder:"Tell us the name of your school ...",required:""},domProps:{value:e.school},on:{input:function(t){t.target.composing||(e.school=t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[e._v("Twitter Handle")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.twitter_url,expression:"twitter_url"}],staticClass:"form-control",attrs:{type:"url",name:"twitter",autocomplete:"off",placeholder:"Ex. https://twitter.com/rebot",required:""},domProps:{value:e.twitter_url},on:{input:function(t){t.target.composing||(e.twitter_url=t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[e._v("Track")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.track,expression:"track"}],staticClass:"form-control",attrs:{name:"track",required:""},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.track=t.target.multiple?a:a[0]}}},[r("option",{attrs:{value:""}},[e._v("--select your track --")]),r("option",{attrs:{value:"Web Development"}},[e._v("Web Development")]),r("option",{attrs:{value:"UI/UX Design"}},[e._v("UI/UX Design")]),r("option",{attrs:{value:"Technical Writing"}},[e._v("Technical Writing")])])]),r("div",{staticClass:"form-group"},[r("label",[e._v("Challenge Link")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.solution_url,expression:"solution_url"}],staticClass:"form-control",attrs:{type:"url",name:"challenge",autocomplete:"off",placeholder:"Please provide the link to your solution",required:""},domProps:{value:e.solution_url},on:{input:function(t){t.target.composing||(e.solution_url=t.target.value)}}})]),r("div",{staticClass:"photoWrapper"},[r("div",{staticClass:"imgWrapper"},[null===e.imageUrl?r("img",{attrs:{src:a("92ef")}}):r("img",{attrs:{src:e.imageUrl}})]),r("div",{staticClass:"fileWrapper form-group"},[r("input",{ref:"image",staticClass:"uploader",attrs:{type:"file",accept:"image/*",required:""},on:{change:e.handleFileUpload}})])]),r("div",{staticClass:"form-group"},[e.processing?r("button",{staticClass:"form-control btn btn-lg btn-success",attrs:{type:"button",disabled:""}},[r("i",{staticClass:"fa fa-spinner fa-spin"}),e._v(" please wait...")]):r("button",{staticClass:"form-control btn btn-lg btn-success",attrs:{type:"submit",disabled:!0===e.buttonActive}},[e._v("Push Application")])])])])]),r("div",{staticClass:"col-md-2 col-lg-2 col-sm-12 col-xs-12"})])])])],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("span",{staticClass:"h2"},[e._v("Register")]),a("p",[e._v("Register to participate in the #7days code challenge")])])}],l=(a("b0c0"),a("96cf"),a("1da1")),n=a("dc59"),s=a("820a"),i={name:"register",components:{TopNavigation:s["a"]},data:function(){return{imageUrl:null,name:"",email:"",track:"",telephone:"",school:"",twitter_url:"",image_url:"",solution_url:"",processing:!1,buttonActive:!0}},methods:{handleSubmit:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var r,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.preventDefault(),t.processing=!0,a.prev=2,a.next=5,n["storage"].ref("images/".concat(Date.now())).put(t.image_url);case 5:return r=a.sent,a.next=8,r.ref.getDownloadURL();case 8:if(o=a.sent,!o){a.next=13;break}return a.next=12,n["playersCollection"].add({name:t.name,email:t.email,telephone:t.telephone,twitter_url:t.twitter_url,solution_url:t.solution_url,school:t.school,image_url:o,created_at:Date.now()});case 12:t.$router.push("/leaderboard");case 13:a.next=18;break;case 15:a.prev=15,a.t0=a["catch"](2),console.log(a.t0);case 18:return a.prev=18,t.processing=!1,a.finish(18);case 21:case"end":return a.stop()}}),a,null,[[2,15,18,21]])})))()},handleFileUpload:function(e){var t=this,a=e.target.files;if(void 0!==a[0]){var r=new FileReader;r.readAsDataURL(a[0]),r.addEventListener("load",(function(){t.imageUrl=r.result,t.image_url=a[0],t.buttonActive=!1}))}}}},c=i,u=(a("7723"),a("2877")),m=Object(u["a"])(c,r,o,!1,null,"6707209d",null);t["default"]=m.exports},7723:function(e,t,a){"use strict";var r=a("40fd"),o=a.n(r);o.a},"92ef":function(e,t,a){e.exports=a.p+"img/avatar.d0a6d38a.jpg"},b0c0:function(e,t,a){var r=a("83ab"),o=a("9bf2").f,l=Function.prototype,n=l.toString,s=/^\s*function ([^ (]*)/,i="name";r&&!(i in l)&&o(l,i,{configurable:!0,get:function(){try{return n.call(this).match(s)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-2c6c5f66.1066f6f8.js.map