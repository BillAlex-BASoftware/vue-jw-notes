(function(t){function e(e){for(var o,i,s=e[0],c=e[1],l=e[2],d=0,h=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&h.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(h.length)h.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},a=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/jw-notes/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"144f":function(t,e,n){"use strict";var o=n("fbe1"),r=n.n(o);r.a},2791:function(t,e,n){},3464:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("f6b5"),r=n.n(o),a=n("e86e"),i=n.n(a),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100%"},on:{click:function(e){return t.clickDisplay()}}},[t._m(0)])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w3-display-container",staticStyle:{height:"100%"}},[n("div",{staticClass:"w3-display-middle"},[n("div",{staticClass:"w3-center"},[n("div",{staticClass:"theme-background fontRobotoCondensed",attrs:{id:"container-logo"}},[n("span",{attrs:{id:"logo"}},[t._v("JW")]),n("br"),n("span",{attrs:{id:"logo-sub"}},[t._v("Notes")])]),n("div",{attrs:{id:"container-hint"}},[t._v("\n                    Tippen um die Anwendung im Vollbildmodus zu starten.\n                ")])])]),n("div",{staticClass:"w3-display-bottomright"},[n("div",{staticClass:"w3-right-align fontRaleway",staticStyle:{"margin-right":"12px"}},[n("p",{attrs:{id:"copyright"}},[n("span",{staticStyle:{"font-size":"8px"}},[t._v("made by")]),n("br"),n("span",[t._v("Alexander Hentzsch")])])])])])}],l={name:"Main",methods:{clickDisplay:function(){this.startVideo(),this.goToOverview()},startVideo:function(){var t=document.querySelector("#player");t.paused&&t.play()},goToOverview:function(){this.$router.push("/overview/notes/")}}},u=l,d=(n("fe40"),n("2877")),h=Object(d["a"])(u,s,c,!1,null,"80ac92f0",null),f=h.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-content"},[n("comp-header"),n("div",{staticClass:"w3-content w3-container"},[n("h1",[t._v("Optionen")]),n("div",{staticClass:"slidecontainer"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontSize,expression:"fontSize"}],staticClass:"slider",attrs:{type:"range",min:"0",max:t.possibleTextHeight.length-1,id:"myRange"},domProps:{value:t.fontSize},on:{change:function(e){return t.saveOptions()},__r:function(e){t.fontSize=e.target.value}}})]),n("p",[t._v("Schriftgröße: "+t._s(t.selectedFontSize)+"px")])])],1)},p=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"header"}},[n("div",{staticClass:"w3-row theme-color",staticStyle:{height:"100%"}},[n("div",{staticClass:"container-btn w3-col w3-left"},[n("button",{staticClass:"w3-btn w3-hover-none",on:{click:function(e){return t.goBack(-1)}}},[n("i",{staticClass:"fas fa-angle-left"})])]),n("div",{staticClass:"container-btn w3-col w3-right"},[n("router-link",{staticClass:"w3-btn w3-hover-none",attrs:{to:"/options"}},[n("i",{staticClass:"fas fa-cog",staticStyle:{position:"relative",top:"9px"}})])],1),t._m(0)])])},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w3-rest",staticStyle:{height:"55px"}},[n("button",{staticClass:"w3-btn w3-hover-none fontRobotoCondensed",staticStyle:{"padding-left":"0","text-align":"left"}},[t._v("\n                JW Notes\n            ")])])}],w=(n("7f7f"),{name:"CompHeader",computed:{domApp:function(){return document.querySelector("#app")}},methods:{goBack:function(){var t,e=this.$route.name;switch(e){case"Options":return this.$router.go(-1);case"OverviewNotes":case"OverviewPrograms":t="/";break;case"Program":t="/overview/programs/".concat(this.$route.params.idProgram);break;case"EditorNotes":t="/overview/notes";break;case"OverviewProgramsNotes":case"EditorProgram":t="/overview/programs";break;default:t="/overview/notes"}this.$router.push(t)}}}),b=w,x=(n("144f"),Object(d["a"])(b,m,g,!1,null,"7479462e",null)),y=x.exports,_={name:"Options",components:{CompHeader:y},data:function(){return{fontSize:4,localStorageKey:"options"}},computed:{possibleTextHeight:function(){return[8,9,10,11,12,14,16,18,20,22,24,26,28,36,48,72]},selectedFontSize:function(){return this.possibleTextHeight[this.fontSize]},jsonDB:function(){return window.jsonDB}},mounted:function(){this.loadOptions()},methods:{saveOptions:function(){var t={fontSize:this.selectedFontSize},e=this.localStorageKey;localStorage.setItem(e,JSON.stringify(t))},loadOptions:function(){var t=localStorage.getItem(this.localStorageKey);void 0!==t&&(t=JSON.parse(t),this.fontSize=this.possibleTextHeight.indexOf(t.fontSize))}}},S=_,C=(n("b656"),Object(d["a"])(S,v,p,!1,null,"253d1470",null)),O=C.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-content"},[n("comp-header"),n("comp-tabs-overview"),n("div",{staticClass:"w3-content w3-container"},[n("div",{staticClass:"w3-center",staticStyle:{"padding-top":"24px"}},[n("router-link",{staticClass:"w3-block w3-btn theme-background",attrs:{to:"/editor/notes/new"}},[t._v("Neue Mitschrift")])],1),n("div",t._l(t.jsonDBLocalReverse,(function(e,o){return n("router-link",{staticClass:"font-note-title w3-large w3-btn w3-hover-none w3-left-align",staticStyle:{display:"block"},attrs:{to:"/editor/notes/"+t.getReversedPos(o)}},[t._v("\n                "+t._s(e.title)+"\n            ")])})),1)])],1)},j=[],D=(n("28a5"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-content"},[n("router-link",{staticClass:"router-link w3-btn w3-hover-none",attrs:{to:"/overview/notes/"}},[t._v("Notizen")]),n("router-link",{staticClass:"router-link w3-btn w3-hover-none",attrs:{to:"/overview/programs/"}},[t._v("Programme")])],1)}),N=[],$={name:"compTabsOverview"},P=$,H=Object(d["a"])(P,D,N,!1,null,"bd6176c8",null),B=H.exports,I={name:"Overview_Notes",components:{CompTabsOverview:B,CompHeader:y},data:function(){return{jsonDBLocal:[]}},mounted:function(){this.loadFromLocalStorage()},computed:{jsonDB:function(){return window.jsonDB},jsonDBLocalReverse:function(){var t=JSON.parse(JSON.stringify(this.jsonDBLocal));return t.reverse()}},methods:{getReversedPos:function(t){var e=this.jsonDBLocal.length-1;return e-t+1},getSavedDateStringReadable:function(t){var e=t.split("-");return"".concat(e[2],".").concat(e[1],".").concat(e[0])},loadFromLocalStorage:function(){var t=JSON.parse(localStorage.getItem("DB"));void 0!==t&&null!==t&&(jsonDB=t,this.jsonDBLocal=jsonDB)}}},T=I,E=Object(d["a"])(T,k,j,!1,null,null,null),z=E.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-content"},[n("comp-header"),n("comp-tabs-overview"),n("h1",[t._v("Overview_Programms")])],1)},q=[],J={name:"OverviewProgramms",components:{CompTabsOverview:B,CompHeader:y}},M=J,R=Object(d["a"])(M,L,q,!1,null,"1b57c8cc",null),W=R.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-content"},[n("comp-header"),n("comp-tabs-overview"),n("h1",[t._v("Overview_Programms_Notes")])],1)},K=[],V={name:"Overview_Programms_Notes",components:{CompTabsOverview:B,CompHeader:y}},A=V,U=Object(d["a"])(A,F,K,!1,null,"0c880ad7",null),Y=U.exports,G=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Programm")])])}],X={name:"Programm"},Z=X,tt=Object(d["a"])(Z,G,Q,!1,null,"a69ff9ca",null),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-content fontRaleway",attrs:{id:"Editor"}},[n("comp-header"),n("div",{staticClass:"w3-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"font-note-title note-inputs",attrs:{id:"title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),n("label",{attrs:{id:"label-title",for:"title"}},[""===t.title?[t._v("Titel")]:t._e(),""!==t.title?[t._v(t._s(t.getDate("day&time",t.date)))]:t._e()],2)]),n("div",{staticStyle:{margin:"24px 24px 100%",height:"100%"}},[n("div",t._l(t.notes,(function(e,o){return n("div",{staticClass:"w3-row",style:{fontSize:t.options.fontSize+"px"}},[n("div",{staticClass:"val-content w3-col s12",on:{click:function(e){return t.edit(o)}}},["@"!==e[0]?n("span",[t._v(t._s(t.getValue(e)))]):t._e(),"@"===e[0]?n("span",[n("a",{attrs:{href:t.getLinkToWOL(e),target:"_blank"}},[t._v(t._s(t.getValue(e)))])]):t._e()])])})),0),n("div",{staticStyle:{position:"fixed",bottom:"0",left:"0",padding:"8px",width:"100%","background-color":"#000"}},[n("div",{staticClass:"w3-row",attrs:{id:"toolbox"}},[n("div",{staticClass:"w3-left w3-rest container-special-btn",style:{width:t.widthContainerSpecialBtn+"px"}},[n("button",{staticClass:"w3-btn w3-hover-none editor-btn",on:{click:function(e){return t.addEmoji("star")}}},[t._v("⭐")]),n("button",{staticClass:"w3-btn w3-hover-none editor-btn",on:{click:function(e){return t.addEmoji("questionMark")}}},[t._v("❓")]),n("button",{staticClass:"w3-btn w3-hover-none editor-btn",on:{click:function(e){return t.addEmoji("video")}}},[t._v("🎥")])]),n("div",{staticClass:"w3-col w3-right",style:{width:t.widthContainerStandardBtn+"px"}},[t.routerHasIndex?n("button",{staticClass:"w3-btn w3-hover-none editor-btn",on:{click:function(e){return t.deleteIndex()}}},[n("i",{staticClass:"far fa-trash-alt"})]):t._e(),t.routerHasIndex?n("button",{staticClass:"w3-btn w3-hover-none editor-btn",on:{click:function(e){return t.abortEdit()}}},[n("i",{staticClass:"far fa-times-circle"})]):t._e(),n("button",{staticClass:"w3-btn w3-hover-none editor-btn",on:{click:function(e){return t.textareaToNotes()}}},[n("i",{staticClass:"fas fa-level-up-alt"})])])]),n("div",{staticClass:"w3-container",attrs:{id:"container-textarea"}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.current.text,expression:"form.current.text"}],staticClass:"note-inputs",style:{resize:"none",height:t.textareaHeight+"px"},domProps:{value:t.form.current.text},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.ctrlKey?t.textareaToNotes():null},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.abortEdit()},function(e){return t.setTextareaHeight()}],input:function(e){e.target.composing||t.$set(t.form.current,"text",e.target.value)}}})])]),n("div",{staticClass:"w3-container note-inputs",style:{position:"fixed",visibility:"hidden",width:t.textareaWidth+"px"},attrs:{id:"container-textarea-height"}},[t._v("\n            "+t._s(t.form.current.text)+"\n        ")])])],1)},ot=[],rt=(n("4917"),n("7618")),at=(n("6b54"),n("f576"),{name:"Editor",components:{CompHeader:y},data:function(){return{title:"",date:"",notes:[],form:{current:{text:""}},options:{fontSize:12},textareaHeight:32,defaultTextareaHeight:32}},computed:{jsonDB:function(){return window.jsonDB},currentId:function(){var t=this.$route.params.idNotes;return"new"===t?"new":parseInt(t)-1},routerHasIndex:function(){return!(void 0===this.$route.params.index)},documentWidth:function(){return document.getElementsByTagName("html")[0].clientWidth-16},widthContainerSpecialBtn:function(){var t=this.routerHasIndex?3:1,e=50*t;return this.documentWidth-e},widthContainerStandardBtn:function(){var t=this.routerHasIndex?3:1;return 50*t},textareaWidth:function(){var t=document.querySelector("textarea");return null===t?300:t.offsetWidth}},mounted:function(){var t=this.currentId;if("new"===t)this.createNewNotesArray(),document.querySelector("#title").focus();else{if(void 0===this.jsonDB[t])return this.$router.push("/");document.querySelector("textarea").focus()}this.setDefaults(),this.loadFontSize()},watch:{"$route.params.index":function(){this.changeTextareaContent()},title:function(){this.jsonDB[this.currentId].title=""===this.title?this.getDate("day"):this.title,this.saveInLocalStorage()},notes:function(){this.jsonDB[this.currentId].notes=this.notes},date:function(){this.jsonDB[this.currentId].date=this.date,this.saveInLocalStorage()}},methods:{loadFontSize:function(){var t=localStorage.getItem("options");void 0!==t&&(t=JSON.parse(t),this.options.fontSize=t.fontSize)},getDate:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date,n=function(t){return t.toString().padStart(2,"0")};"object"!==Object(rt["a"])(e)&&(e=new Date(e));var o=e.getTime(),r=n(e.getDate()),a=n(e.getMonth()+1),i=e.getFullYear(),s=n(e.getHours()),c=n(e.getMinutes()),l=n(e.getSeconds());switch(t){case"unix":return o;case"day&time":return"".concat(r,".").concat(a,".").concat(i," ").concat(s,":").concat(c,":").concat(l);case"day":default:return"".concat(r,".").concat(a,".").concat(i)}},setDefaults:function(){var t=this.jsonDB[this.currentId];this.title=void 0===t.title?this.getDate("day"):t.title,this.date=void 0===t.date?this.getDate("unix"):t.date,this.notes=void 0===t.notes?[]:t.notes},createNewNotesArray:function(){this.jsonDB.push({}),this.$router.push("/editor/notes/".concat(this.jsonDB.length))},saveInLocalStorage:function(){localStorage.setItem("DB",JSON.stringify(this.jsonDB))},changeTextareaContent:function(){var t=this.$route.params.index;void 0!==t&&(t=parseInt(t),this.form.current.text=this.notes[t])},addEmoji:function(t){var e="";switch(t){case"star":e="⭐";break;case"questionMark":e="❓";break;case"video":e="🎥";break;default:e=""}this.form.current.text=e+" "+this.form.current.text,document.querySelector("textarea").focus()},textareaToNotes:function(){this.date=this.getDate("unix");var t=this.form.current.text,e=this.$route.params.idNotes,n=this.$route.params.index,o=/[0-9]:[0-9]/,r=null!==t.match(o),a="@"===t[0];r&&!a&&(t="@"+t),this.form.current.text="",void 0!==n?(n=parseInt(n),this.notes[n]=t,this.$router.push("/editor/notes/".concat(e))):this.notes.push(t),this.saveInLocalStorage(),document.querySelector("textarea").focus(),this.textareaHeight=parseInt(this.defaultTextareaHeight),console.log(this.textareaHeight)},edit:function(t){if(!(t<0||t>=this.notes.length||t===parseInt(this.$route.params.index))){var e=this.$route.params.idNotes;this.$router.push("/editor/notes/".concat(e,"/").concat(t)),document.querySelector("textarea").focus(),this.textareaHeight=parseInt(this.defaultTextareaHeight)}},abortEdit:function(){var t=this.$route.params.idNotes,e=this.$route.params.index;this.form.current.text="",this.textareaHeight=parseInt(this.defaultTextareaHeight),void 0!==e&&this.$router.push("/editor/notes/".concat(t))},deleteIndex:function(){var t=parseInt(this.$route.params.index);this.notes.splice(t,1),this.abortEdit()},getValue:function(t){var e=t[0];return"@"===e?t.substr(1):""===t?" ":t},getLinkToWOL:function(t){return t=this.getValue(t),"https://wol.jw.org/de/wol/l/r10/lp-x?q="+encodeURIComponent(t)},setTextareaHeight:function(){var t=document.querySelector("#container-textarea-height").offsetHeight;t>this.defaultTextareaHeight&&(this.textareaHeight=t)}}}),it=at,st=(n("ef91"),Object(d["a"])(it,nt,ot,!1,null,"203a3a9f",null)),ct=st.exports,lt=[{path:"/",component:f,name:"Main"},{path:"/options",component:O,name:"Options"},{path:"/overview/notes",component:z,name:"OverviewNotes"},{path:"/overview/programs",component:W,name:"OverviewPrograms"},{path:"/overview/programs/:idProgram",component:Y,name:"OverviewProgramsNotes"},{path:"/program/:idProgram",component:et,name:"Program"},{path:"/editor/notes/:idNotes/:index?",component:ct,name:"EditorNotes"},{path:"/editor/program/:idProgram/:idProgramPoint/:index?",component:ct,name:"EditorProgram"}];r.a.config.productionTip=!1,r.a.use(i.a),new r.a({router:new i.a({routes:lt}),el:"#app"})},b656:function(t,e,n){"use strict";var o=n("da27"),r=n.n(o);r.a},da27:function(t,e,n){},ef91:function(t,e,n){"use strict";var o=n("2791"),r=n.n(o);r.a},fbe1:function(t,e,n){},fe40:function(t,e,n){"use strict";var o=n("3464"),r=n.n(o);r.a}});
//# sourceMappingURL=app.4bca6f35.js.map