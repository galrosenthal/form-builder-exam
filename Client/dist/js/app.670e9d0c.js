(function(e){function t(t){for(var r,o,i=t[0],u=t[1],l=t[2],c=0,d=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);m&&m(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(s.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},s=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d0aed93":"71e57a78","chunk-2d21ecda":"b0933a76","chunk-59ac3ce5":"86450494"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-59ac3ce5":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0aed93":"31d6cfe0","chunk-2d21ecda":"31d6cfe0","chunk-59ac3ce5":"4b4a4804"}[e]+".css",a=u.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===r||c===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],c=l.getAttribute("data-href");if(c===r||c===a)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete o[e],m.parentNode.removeChild(m),n(s)},m.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=s);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e);var d=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(m);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var m=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1130:function(e,t,n){},"1c92":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("4160"),n("d3b7"),n("159b"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/NewForm"}},[e._v("Add New Form")]),e._v(" | "),n("router-link",{attrs:{to:"/Submissions"}},[e._v("Submissions")])],1),n("transition",{attrs:{name:"slide-fade"}},[n("router-view")],1)],1)},a=[],s=(n("5c0b"),n("2877")),i={},u=Object(s["a"])(i,o,a,!1,null,null,null),l=u.exports,c=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("formsTable",{attrs:{url:e.urlToGetForms}})],1)},m=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.allForms?0===e.allForms.length?n("div",[n("h2",[e._v("There are no forms yet")]),n("h4",[e._v("Please add one using the 'Add New Form' page.")])]):e._e():n("div",[n("b-spinner",{attrs:{variant:"info"}})],1),n("b-table",{attrs:{dark:"",striped:"",hover:"",items:e.allForms,fields:e.fields,stacked:"md",outlined:"","no-border-collapse":""},scopedSlots:e._u([{key:"cell(LinkToSubmit)",fn:function(t){return[n("b-button",{key:t.item.id,attrs:{variant:"link"},on:{click:function(n){return e.openSubmitForm(t.item.id,t.item.name)}}},[e._v("Submit to this form")])]}},{key:"cell(LinkToSubmission)",fn:function(t){return[n("router-link",{attrs:{to:"/Submissions/"+t.item.id}},[n("b-button",{key:t.item.id,attrs:{variant:"link"}},[e._v("View all Submissions of this form")])],1)]}}])}),n("b-modal",{attrs:{"hide-footer":"",title:"Using Component Methods"},model:{value:e.showSubmissionModal,callback:function(t){e.showSubmissionModal=t},expression:"showSubmissionModal"}}),n("b-modal",{attrs:{scrollable:"",centered:"","no-close-on-backdrop":"","hide-footer":"","content-class":"submitting-page","header-class":"p-2 border-bottom-0","button-size":"sm"},model:{value:e.showSubmitModal,callback:function(t){e.showSubmitModal=t},expression:"showSubmitModal"}},[n("div",[n("selected-form",{attrs:{form_name:e.selectedFormName,form_id:e.selectedFormId},on:{"form-na":e.closeModal,"close-panel":e.closeModal}},[e._v("Hello From Submit Modal!")])],1)])],1)},p=[],b=(n("96cf"),n("1da1")),h=n("bc3a"),v=n.n(h),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.isLoaded?e.isError?n("div",[n("b-alert",{attrs:{show:e.dismissCounter,variant:"danger"},on:{"dismiss-count-down":e.countDownChanged,dismissed:e.closeModal}},[e._v(" Could not find the requested form"),n("br"),e._v(" Please try again later ")])],1):n("div",[n("h1",{staticClass:"text-center"},[e._v(e._s(e.form_name))]),n("b-form",{staticClass:"text-center",on:{submit:e.onSubmit}},[e._l(e.questionsArray,(function(t,r){return n("b-form-group",{key:r,staticClass:"submit-form-group",attrs:{id:"input-group-"+r,label:t.label+": ("+t.type+")","label-align":"left","label-for":"input-"+t.label}},[n("b-form-input",{attrs:{id:"input-"+t.label,type:e._f("Lower")(t.type),required:"",placeholder:t.name},model:{value:t.answer,callback:function(n){e.$set(t,"answer",n)},expression:"question.answer"}})],1)})),n("b-button",{attrs:{id:"submit-btn",type:"submit",variant:"primary"}},[e._v("Submit")]),n("b-button",{attrs:{type:"reset",variant:"danger"}},[e._v("Reset")])],2)],1):n("div",[n("b-spinner",{attrs:{variant:"info"}})],1)])},y=[];n("b0c0"),n("a9e3");function w(e){return k.apply(this,arguments)}function k(){return k=Object(b["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v.a.get(t).then((function(e){return console.log(e),n=e.data,n})).catch((function(e){return console.log("no questions found"),null}));case 2:return e.abrupt("return",{formQuestions:n});case 3:case"end":return e.stop()}}),e)}))),k.apply(this,arguments)}function _(e,t,n){return S.apply(this,arguments)}function S(){return S=Object(b["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v.a.post(t,{form_id:n,answers:r}).then((function(e){console.log(e)})).catch((function(e){return console.log("no questions found"),e}));case 2:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}var x={name:"selectedForm",props:{form_id:Number,form_name:String},data:function(){return{questionsArray:[],isLoaded:!1,isError:!1,dismissCounter:4}},mounted:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.$root.store.baseUrl+"forms/submit/"+e.form_id,t.next=3,w(n);case 3:e.questionsArray=t.sent.formQuestions,e.questionsArray?(e.isLoaded=!0,console.log("Mounted new questions array"),e.questionsArray.forEach((function(e){e={label:e.label,name:e.name,type:e.type,answer:""}}))):e.isError=!0;case 5:case"end":return t.stop()}}),t)})))()},methods:{countDownChanged:function(e){this.dismissCounter=e},closeModal:function(){this.$emit("form-na")},onSubmit:function(e){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.preventDefault(),r={},t.questionsArray.forEach((function(e){r[e.name]=e.answer})),console.log("Form Answers = "+JSON.stringify(r)),n.prev=4,o=t.$root.store.baseUrl+"forms/submit",n.next=8,_(o,t.form_id,r);case 8:t.$router.push({name:"Home"}).catch((function(){t.$router.go()})),n.next=14;break;case 11:n.prev=11,n.t0=n["catch"](4),console.log(n.t0);case 14:t.$emit("close-panel","success");case 15:case"end":return n.stop()}}),n,null,[[4,11]])})))()}},filters:{Lower:function(e){return e.toLowerCase()}}},F=x,N=(n("f6e3"),Object(s["a"])(F,g,y,!1,null,"6a79fa02",null)),T=N.exports,C=n("8d7b");function O(e){return j.apply(this,arguments)}function j(){return j=Object(b["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v.a.get(t).then((function(e){return console.log(e),n=e.data,n})).catch((function(e){return console.log("no forms found")}));case 2:return e.abrupt("return",{recivedForms:n});case 3:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}var L={name:"formsTable",props:{url:{type:String,required:!0}},data:function(){return{fields:[{key:"id",label:"ID"},{key:"name",label:"Form Name"},{key:"numOfSubmissions",label:"# Submitted Answers"},{key:"LinkToSubmit",label:"Submit"},{key:"LinkToSubmission",label:"Submissions"}],allForms:null,showSubmissionModal:!1,showSubmitModal:!1,selectedFormId:null,selectedFormName:"",showAddFormModal:!1}},methods:{updateTable:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("Entered updateTable()"),t.next=3,O(e.url);case 3:n=t.sent,r=n.recivedForms,e.allForms=r;case 6:case"end":return t.stop()}}),t)})))()},openSubmitForm:function(e,t){var n=this;return Object(b["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n.selectedFormId=e,n.selectedFormName=t,n.showSubmitModal=!0;case 3:case"end":return r.stop()}}),r)})))()},closeModal:function(){this.showSubmitModal=!1}},mounted:function(){this.updateTable(),console.log("windows size = "+JSON.stringify(window.innerWidth)),window.addEventListener("resize",this.handleResize)},components:{selectedForm:T,newForm:C["a"]}},P=L,E=(n("d105"),Object(s["a"])(P,f,p,!1,null,"1ab72e50",null)),q=E.exports,A={name:"Home",data:function(){return{urlToGetForms:this.$root.store.baseUrl+"forms/all_forms"}},components:{formsTable:q}},M=A,$=(n("cccb"),Object(s["a"])(M,d,m,!1,null,null,null)),R=$.exports;r["default"].use(c["a"]);var D=[{path:"/",name:"Home",component:R},{path:"/NewForm",name:"New Form Page",component:function(){return n.e("chunk-2d21ecda").then(n.bind(null,"d6b4"))}},{path:"/Submissions",name:"Submissions Page",component:function(){return n.e("chunk-59ac3ce5").then(n.bind(null,"f6c9"))}},{path:"/Submissions/:formId",name:"Submission Page",component:function(){return n.e("chunk-59ac3ce5").then(n.bind(null,"f6c9"))}},{path:"*",name:"notFound",component:function(){return n.e("chunk-2d0aed93").then(n.bind(null,"0c8b"))}}],z=new c["a"]({mode:"history",base:"/",routes:D}),I=z,U=n("a7fe"),H=n.n(U),B=n("209f"),Q=n.n(B),J=n("b189"),G=n.n(J),K=n("1dce"),V=n.n(K),W=(n("f9e3"),n("2dd8"),n("1073")),X=n("3d31"),Y=n("cbd0"),Z=n("b1fc"),ee=n("7049"),te=n("a7e2"),ne=n("f9bc"),re=n("44d4"),oe=n("cca8"),ae=n("51c2"),se=n("498a"),ie=n("b519"),ue=n("dbbe"),le=n("8c60"),ce=n("63e9"),de=n("1f1a"),me=n("f7ca");[W["a"],X["a"],Y["a"],Z["a"],ee["a"],te["a"],ne["a"],re["a"],oe["a"],ae["a"],se["a"],ie["a"],ue["a"],le["a"],ce["a"],de["a"],me["a"]].forEach((function(e){return r["default"].use(e)})),r["default"].use(V.a),r["default"].use(G.a),r["default"].use(Q.a,{dialog:!0}),v.a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),r["default"].use(c["a"]),v.a.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),r["default"].use(H.a,v.a),r["default"].config.productionTip=!1;var fe={baseUrl:"https://heroku-form-builder.herokuapp.com/"};new r["default"]({router:I,data:function(){return{store:fe}},vuetify:new G.a,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"5ced":function(e,t,n){},"6e88":function(e,t,n){},"8d7b":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-gra-01 page-wrapper p-t"},[n("div",{attrs:{id:"new-form-header"}},[n("h3",[e._v("Add a new Form")]),n("h4",[e._v("Please Add your fields:")]),n("div",{attrs:{id:"nameDiv"}},[n("b-form-input",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.top",modifiers:{hover:!0,top:!0}}],class:e.isDanger,attrs:{autocomplete:"off",type:"text",placeholder:"Name this form",size:"sm",id:"formName"},model:{value:e.formName,callback:function(t){e.formName=t},expression:"formName"}})],1)]),n("div",{staticClass:"inputs"},[n("div",{staticClass:"label"},[n("b-form-input",{attrs:{autocomplete:"off",type:"text",placeholder:"Label",id:"labelTag"},model:{value:e.fieldLabel,callback:function(t){e.fieldLabel=t},expression:"fieldLabel"}})],1),n("div",{staticClass:"name"},[n("b-form-input",{attrs:{autocomplete:"off",type:"text",placeholder:"Name",id:"nameTag"},model:{value:e.fieldName,callback:function(t){e.fieldName=t},expression:"fieldName"}})],1),n("div",{staticClass:"type"},[n("b-form-select",{class:e.applyFont,attrs:{options:e.availableTypes,size:"sm",id:"typeTag"},on:{change:e.applyClass},scopedSlots:e._u([{key:"first",fn:function(){return[n("b-form-select-option",{attrs:{value:"null",disabled:""}},[e._v("Please select input Type")])]},proxy:!0}]),model:{value:e.selectedType,callback:function(t){e.selectedType=t},expression:"selectedType"}},[e._v("--\x3e ")])],1),n("b-button",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.top",value:"Add another field",expression:"'Add another field'",modifiers:{hover:!0,top:!0}}],staticClass:"plus-btn",attrs:{variant:"secondary",size:"lg"},on:{click:e.addField}},[e._v("+")])],1),n("b-table",{staticClass:"fields-table",attrs:{striped:"",hover:"",stacked:"md",fields:e.fields,items:e.questions,outlined:"","no-border-collapse":""},scopedSlots:e._u([{key:"cell(delete)",fn:function(t){return[n("b-button",{key:t.index,attrs:{variant:"link"},on:{click:function(n){return e.removeField(t.index)}}},[n("img",{attrs:{src:"https://img.icons8.com/nolan/20/delete-sign.png"}})])]}}])}),n("div",{attrs:{id:"submit-cancel-div"}},[n("div",{staticClass:"cancelBtn"},[n("b-button",{attrs:{pill:"",size:"md",variant:"danger"},on:{click:e.cancel}},[e._v("Cancel")])],1),n("div",{staticClass:"submitBtn"},[n("b-button",{staticClass:"add-form-btn",attrs:{pill:"",size:"md",variant:"success"},on:{click:e.submitNewForm}},[e._v("Add Form")])],1)]),n("b-popover",{attrs:{id:"formNamePop",show:e.showPopOver,target:"formName",variant:"danger",placement:"top",delay:"5"},on:{"update:show":function(t){e.showPopOver=t}}},[e._v(" Please fill form Name! ")])],1)},o=[],a=(n("fb6a"),n("a434"),n("d3b7"),n("25f0"),n("96cf"),n("1da1")),s=n("bc3a"),i=n.n(s);function u(e,t,n){return l.apply(this,arguments)}function l(){return l=Object(a["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.a.post(t,{name:n,questions:r}).then((function(e){return console.log(e),e})).catch((function(e){console.error(e)}));case 2:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}var c={name:"BuildNewForm",data:function(){return{availableTypes:["Text","Color","Date","Email","Tel","Number"],questions:[],selectedType:null,fieldName:"",fieldLabel:"",formName:"",isDanger:"",showPopOver:!1,fields:[{key:"label",label:"Question Label"},{key:"name",label:"Question Name"},{key:"type",label:"Question Type"},{key:"delete",label:""}],applyFont:""}},filters:{capitalize:function(e){return e?(e=e.toString(),e.charAt(0).toUpperCase()+e.slice(1)):""}},methods:{addField:function(){console.log(this.fieldLabel&&this.selectedType&&this.fieldName),this.fieldLabel&&this.selectedType&&this.fieldName&&(this.questions.push({label:this.fieldLabel,name:this.fieldName,type:this.selectedType}),this.resetInputs())},removeField:function(e){console.log(e),this.questions.splice(e,1)},applyClass:function(){this.applyFont="select-font-bold"},resetInputs:function(){this.fieldName="",this.fieldLabel="",this.selectedType=null},cancel:function(e){var t=this;e||(e=0),setTimeout((function(){return t.$router.push("/")}),e)},submitNewForm:function(){var e=this;if(0===this.questions.length){var t=1500;this.$bvToast.toast("Empty Form. Redirects to home page",{title:"Error",variant:"danger",toaster:"b-toaster-top-center",autoHideDelay:t}),this.cancel(t)}else if(this.formName){var n=this.$root.store.baseUrl+"forms/new_form/";u(n,this.formName,this.questions).then((function(t){console.log(t),e.$router.push("/")}))}else this.isDanger="mustFill-red",this.showPopOver=!0}},mounted:function(){var e=this;this.$root.$on("bv::popover::shown",(function(t){setTimeout((function(){return e.$root.$emit("bv::hide::popover","formNamePop")}),2e3)}))}},d=c,m=(n("d30a"),n("2877")),f=Object(m["a"])(d,r,o,!1,null,"7d101c48",null);t["a"]=f.exports},"9c0c":function(e,t,n){},cccb:function(e,t,n){"use strict";var r=n("5ced"),o=n.n(r);o.a},d105:function(e,t,n){"use strict";var r=n("1130"),o=n.n(r);o.a},d30a:function(e,t,n){"use strict";var r=n("1c92"),o=n.n(r);o.a},f6e3:function(e,t,n){"use strict";var r=n("6e88"),o=n.n(r);o.a}});
//# sourceMappingURL=app.670e9d0c.js.map