"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[954],{9673:(t,e,n)=>{var o=n(2926).___internalHook("/","../../..","..");t.exports=n(72),o()},72:(t,e,n)=>{n.r(e),n.d(e,{default:()=>l});var o=n(8669),r=n(1627),i=n(8682),c=n(9534),u=n(8738),a=n(8025),s=n(5260),f=n(8612);const l=function(){return o.createElement(r.ZP,{topNode:new i.default,plugins:[new c.default,new u.default,new f.default,new a.default,new s.default]},o.createElement("p",null,"This plugin is copy from website example, and it will expend this feature."),o.createElement("div",{className:"emirror-code-editor"},"/**\n * get the sum of a and b.\n * @param(number) a\n * @param(number) b\n */\nconst add = (a, b) => a + b"))}},5260:(t,e,n)=>{var o=n(2926).___internalHook("/","../../..","..");t.exports=n(1107),o()},1107:(t,e,n)=>{n.d(e,{default:()=>M});var o=n(5820),r=n(8371),i=n(2945),c=n.n(i),u=n(8454),a=n(6535),s=n(531),f=n(1892),l=n.n(f),p=n(5760),h=n.n(p),d=n(8311),y=n.n(d),m=n(8192),b=n.n(m),v=n(8060),g=n.n(v),w=n(4865),O=n.n(w),_=n(652),S={};function k(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function P(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}S.styleTagTransform=O(),S.setAttributes=b(),S.insert=y().bind(null,"head"),S.domAPI=h(),S.insertStyleElement=g(),l()(_.Z,S),_.Z&&_.Z.locals&&_.Z.locals,n(2940),n(2783);const x=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),P(this,"view",void 0),P(this,"node",void 0),P(this,"getPos",void 0),P(this,"dom",void 0),P(this,"contentDOM",void 0),P(this,"incomingChanges",void 0),P(this,"updating",void 0),P(this,"cm",void 0),P(this,"update",(function(t){if(t.type!==n.node.type)return!1;n.node=t;var e=n.computeChange(n.cm.getValue(),t.textContent);return e&&(n.updating=!0,n.cm.replaceRange(e.text,n.cm.posFromIndex(e.from),n.cm.posFromIndex(e.to)),n.updating=!1),!0})),P(this,"selectNode",(function(){n.cm.focus()})),this.view=e.view,this.node=e.node,this.getPos=e.getPos,this.incomingChanges=!1,this.dom=document.createElement("div"),this.dom.classList.add("emirror-".concat(this.node.type.name,"__nodeview-dom")),this.cm=c()(this.dom,{value:this.node.textContent,lineNumbers:!0,extraKeys:this.codeMirrorKeymap(),mode:e.options.language}),setTimeout((function(){n.cm.refresh()}),10),this.updating=!1,this.cm.on("beforeChange",(function(){return n.incomingChanges=!0})),this.cm.on("cursorActivity",(function(){n.updating||n.incomingChanges||n.forwardSelection()})),this.cm.on("changes",(function(){n.updating||(n.valueChanged(),n.forwardSelection()),n.incomingChanges=!1})),this.cm.on("focus",(function(){return n.forwardSelection()}))}var e,n;return e=t,(n=[{key:"asPMSelection",value:function(t){var e=this.getPos()+1,n=this.cm.indexFromPos(this.cm.getCursor("anchor"))+e,o=this.cm.indexFromPos(this.cm.getCursor("head"))+e;return r.Bs.create(t,n,o)}},{key:"forwardSelection",value:function(){if(this.cm.hasFocus()){var t=this.view.state,e=this.asPMSelection(t.doc);e.eq(t.selection)||this.view.dispatch(t.tr.setSelection(e))}}},{key:"computeChange",value:function(t,e){if(t===e)return null;for(var n=0,o=t.length,r=e.length;n<o&&t.charCodeAt(n)===e.charCodeAt(n);)n+=1;for(;o>n&&r>n&&t.charCodeAt(o-1)===e.charCodeAt(r-1);)o-=1,r-=1;return{from:n,to:o,text:e.slice(n,r)}}},{key:"valueChanged",value:function(){var t=this.computeChange(this.node.textContent,this.cm.getValue());if(t){var e=this.getPos()+1,n=this.view.state.tr.replaceWith(e+t.from,e+t.to,t.text?this.view.state.schema.text(t.text):null);this.view.dispatch(n)}}},{key:"maybeEscape",value:function(t,e){var n=this.cm.getCursor();if(this.cm.somethingSelected()||n.line!==(e<0?this.cm.firstLine():this.cm.lastLine())||"char"===t&&n.ch!==(e<0?0:this.cm.getLine(n.line).length))return c().Pass;this.view.focus();var o=this.getPos()+(e<0?0:this.node.nodeSize),i=r.Y1.near(this.view.state.doc.resolve(o),e);this.view.dispatch(this.view.state.tr.setSelection(i).scrollIntoView()),this.view.focus()}},{key:"codeMirrorKeymap",value:function(){var t,e=this,n=this.view,o=u.V5?"Cmd":"Ctrl";return c().normalizeKeyMap((P(t={Up:function(){return e.maybeEscape("line",-1)},Left:function(){return e.maybeEscape("char",-1)},Down:function(){return e.maybeEscape("line",1)},Right:function(){return e.maybeEscape("char",1)}},"".concat(o,"-Enter"),(function(){(0,a.uo)(n.state,n.dispatch)&&n.focus()})),P(t,"".concat(o,"-z"),(function(){return(0,s.Yw)(n.state,n.dispatch)})),P(t,"Shift-".concat(o,"-z"),(function(){return(0,s.KX)(n.state,n.dispatch)})),P(t,"".concat(o,"-y"),(function(){return(0,s.KX)(n.state,n.dispatch)})),t))}},{key:"setSelection",value:function(t,e){this.cm.focus(),this.updating=!0,this.cm.setSelection(this.cm.posFromIndex(t),this.cm.posFromIndex(e)),this.updating=!1}}])&&k(e.prototype,n),t}();function C(t){return function(e,n,o){if(e.selection.empty&&o.endOfTextblock(t)){var i=["left","up"].includes(t)?-1:1,c=e.selection.$head,u=r.Y1.near(e.doc.resolve(i>0?c.after():c.before()),i);if(u.$head&&"codeEditor"===u.$head.parent.type.name)return n(e.tr.setSelection(u)),!0}return!1}}function j(t){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function E(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function R(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function T(t,e){return(T=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function A(t,e){return!e||"object"!==j(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function K(t){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}const M=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&T(t,e)}(u,t);var e,n,o,i,c=(o=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=K(o);if(i){var n=K(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return A(this,t)});function u(){return E(this,u),c.apply(this,arguments)}return e=u,(n=[{key:"name",get:function(){return"codeEditor"}},{key:"createNodeSpec",value:function(){return{attrs:{language:{default:""}},content:"text*",marks:"",group:"block",code:!0,defining:!0,isolating:!0,parseDOM:[{tag:"div.emirror-code-editor",preserveWhitespace:"full"}],toDOM:function(){return["div",{class:"emirror-code-editor"},0]}}}},{key:"plugin",get:function(){return new r.Sy({key:new r.H$(this.name),props:{nodeViews:(t={},e=this.name,n=function(t,e,n){return new x({view:e,node:t,getPos:n,options:{language:t.attrs.language||"javascript"}})},e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t)}});var t,e,n}},{key:"keymap",get:function(){return{ArrowLeft:C("left"),ArrowRight:C("right"),ArrowUp:C("up"),ArrowDown:C("down")}}}])&&R(e.prototype,n),u}(o.N)},8682:(t,e,n)=>{var o=n(2926).___internalHook("/","../../..","..");t.exports=n(6395),o()},6395:(t,e,n)=>{function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,{default:()=>s});const s=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(l,t);var e,n,o,s,f=(o=l,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=a(o);if(s){var n=a(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return u(this,t)});function l(){return r(this,l),f.apply(this,arguments)}return e=l,(n=[{key:"name",get:function(){return"doc"}},{key:"createNodeSpec",value:function(){return{content:"block+"}}}])&&i(e.prototype,n),l}(n(5820).N)},8025:(t,e,n)=>{var o=n(2926).___internalHook("/","../../..","..");t.exports=n(2923),o()},2923:(t,e,n)=>{n.d(e,{default:()=>p});var o=n(5647),r=n(8454),i=n(531);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}const p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(h,t);var e,n,o,c,p=(o=h,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=l(o);if(c){var n=l(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return f(this,t)});function h(){return u(this,h),p.apply(this,arguments)}return e=h,(n=[{key:"name",get:function(){return"history"}},{key:"plugin",get:function(){return(0,i.m8)()}},{key:"commands",get:function(){return{redo:i.KX,undo:i.Yw}}},{key:"keymap",get:function(){var t={};return t["Mod-z"]=i.Yw,t["Shift-Mod-z"]=i.KX,r.V5||(t["Mod-y"]=i.KX),t}}])&&a(e.prototype,n),h}(o.h)},531:(t,e,n)=>{n.d(e,{m8:()=>o.m8,KX:()=>o.KX,Yw:()=>o.Yw});var o=n(8253)},652:(t,e,n)=>{n.d(e,{Z:()=>i});var o=n(8711),r=n.n(o)()((function(t){return t[1]}));r.push([t.id,"// extracted by mini-css-extract-plugin\nexport {};",""]);const i=r}}]);