"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[954],{9673:(e,t,n)=>{var o=n(2926).___internalHook("/","../../..","..");e.exports=n(72),o()},72:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var o=n(8669),r=n(7719),i=n(8682),c=n(9534),u=n(8738),a=n(8025),s=n(5260),f=n(8612);const l=function(){var e=(0,r.D0)({topNode:new i.default,emPlugins:[new c.default,new u.default,new f.default,new a.default,new s.default]});return e&&o.createElement(r.o.Provider,{value:e},o.createElement(r.k3,null,o.createElement("p",null,"This plugin is copy from website example, and it will expend this feature."),o.createElement("div",{className:"emirror-code-editor"},"/**\n * get the sum of a and b.\n * @param(number) a\n * @param(number) b\n */\nconst add = (a, b) => a + b")))}},5260:(e,t,n)=>{var o=n(2926).___internalHook("/","../../..","..");e.exports=n(1107),o()},1107:(e,t,n)=>{n.d(t,{default:()=>M});var o=n(5820),r=n(8371),i=n(2945),c=n.n(i),u=n(919),a=n(6535),s=n(531),f=n(1892),l=n.n(f),p=n(5760),h=n.n(p),d=n(8311),y=n.n(d),m=n(8192),b=n.n(m),v=n(8060),g=n.n(v),w=n(4865),O=n.n(w),_=n(652),k={};function S(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}k.styleTagTransform=O(),k.setAttributes=b(),k.insert=y().bind(null,"head"),k.domAPI=h(),k.insertStyleElement=g(),l()(_.Z,k),_.Z&&_.Z.locals&&_.Z.locals,n(2940),n(2783);const x=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),P(this,"view",void 0),P(this,"node",void 0),P(this,"getPos",void 0),P(this,"dom",void 0),P(this,"contentDOM",void 0),P(this,"incomingChanges",void 0),P(this,"updating",void 0),P(this,"cm",void 0),P(this,"update",(function(e){if(e.type!==n.node.type)return!1;n.node=e;var t=n.computeChange(n.cm.getValue(),e.textContent);return t&&(n.updating=!0,n.cm.replaceRange(t.text,n.cm.posFromIndex(t.from),n.cm.posFromIndex(t.to)),n.updating=!1),!0})),P(this,"selectNode",(function(){n.cm.focus()})),this.view=t.view,this.node=t.node,this.getPos=t.getPos,this.incomingChanges=!1,this.dom=document.createElement("div"),this.dom.classList.add("emirror-".concat(this.node.type.name,"__nodeview-dom")),this.cm=c()(this.dom,{value:this.node.textContent,lineNumbers:!0,extraKeys:this.codeMirrorKeymap(),mode:t.options.language}),setTimeout((function(){n.cm.refresh()}),10),this.updating=!1,this.cm.on("beforeChange",(function(){return n.incomingChanges=!0})),this.cm.on("cursorActivity",(function(){n.updating||n.incomingChanges||n.forwardSelection()})),this.cm.on("changes",(function(){n.updating||(n.valueChanged(),n.forwardSelection()),n.incomingChanges=!1})),this.cm.on("focus",(function(){return n.forwardSelection()}))}var t,n;return t=e,(n=[{key:"asPMSelection",value:function(e){var t=this.getPos()+1,n=this.cm.indexFromPos(this.cm.getCursor("anchor"))+t,o=this.cm.indexFromPos(this.cm.getCursor("head"))+t;return r.Bs.create(e,n,o)}},{key:"forwardSelection",value:function(){if(this.cm.hasFocus()){var e=this.view.state,t=this.asPMSelection(e.doc);t.eq(e.selection)||this.view.dispatch(e.tr.setSelection(t))}}},{key:"computeChange",value:function(e,t){if(e===t)return null;for(var n=0,o=e.length,r=t.length;n<o&&e.charCodeAt(n)===t.charCodeAt(n);)n+=1;for(;o>n&&r>n&&e.charCodeAt(o-1)===t.charCodeAt(r-1);)o-=1,r-=1;return{from:n,to:o,text:t.slice(n,r)}}},{key:"valueChanged",value:function(){var e=this.computeChange(this.node.textContent,this.cm.getValue());if(e){var t=this.getPos()+1,n=this.view.state.tr.replaceWith(t+e.from,t+e.to,e.text?this.view.state.schema.text(e.text):null);this.view.dispatch(n)}}},{key:"maybeEscape",value:function(e,t){var n=this.cm.getCursor();if(this.cm.somethingSelected()||n.line!==(t<0?this.cm.firstLine():this.cm.lastLine())||"char"===e&&n.ch!==(t<0?0:this.cm.getLine(n.line).length))return c().Pass;this.view.focus();var o=this.getPos()+(t<0?0:this.node.nodeSize),i=r.Y1.near(this.view.state.doc.resolve(o),t);this.view.dispatch(this.view.state.tr.setSelection(i).scrollIntoView()),this.view.focus()}},{key:"codeMirrorKeymap",value:function(){var e,t=this,n=this.view,o=u.V5?"Cmd":"Ctrl";return c().normalizeKeyMap((P(e={Up:function(){return t.maybeEscape("line",-1)},Left:function(){return t.maybeEscape("char",-1)},Down:function(){return t.maybeEscape("line",1)},Right:function(){return t.maybeEscape("char",1)}},"".concat(o,"-Enter"),(function(){(0,a.uo)(n.state,n.dispatch)&&n.focus()})),P(e,"".concat(o,"-z"),(function(){return(0,s.Yw)(n.state,n.dispatch)})),P(e,"Shift-".concat(o,"-z"),(function(){return(0,s.KX)(n.state,n.dispatch)})),P(e,"".concat(o,"-y"),(function(){return(0,s.KX)(n.state,n.dispatch)})),e))}},{key:"setSelection",value:function(e,t){this.cm.focus(),this.updating=!0,this.cm.setSelection(this.cm.posFromIndex(e),this.cm.posFromIndex(t)),this.updating=!1}}])&&S(t.prototype,n),e}();function C(e){return function(t,n,o){if(t.selection.empty&&o.endOfTextblock(e)){var i=["left","up"].includes(e)?-1:1,c=t.selection.$head,u=r.Y1.near(t.doc.resolve(i>0?c.after():c.before()),i);if(u.$head&&"codeEditor"===u.$head.parent.type.name)return n(t.tr.setSelection(u)),!0}return!1}}function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function R(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function A(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(u,e);var t,n,o,i,c=(o=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=K(o);if(i){var n=K(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return A(this,e)});function u(){return E(this,u),c.apply(this,arguments)}return t=u,(n=[{key:"name",get:function(){return"codeEditor"}},{key:"createNodeSpec",value:function(){return{attrs:{language:{default:""}},content:"text*",marks:"",group:"block",code:!0,defining:!0,isolating:!0,parseDOM:[{tag:"div.emirror-code-editor",preserveWhitespace:"full"}],toDOM:function(){return["div",{class:"emirror-code-editor"},0]}}}},{key:"plugin",get:function(){return new r.Sy({key:new r.H$(this.name),props:{nodeViews:(e={},t=this.name,n=function(e,t,n){return new x({view:t,node:e,getPos:n,options:{language:e.attrs.language||"javascript"}})},t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e)}});var e,t,n}},{key:"keymap",get:function(){return{ArrowLeft:C("left"),ArrowRight:C("right"),ArrowUp:C("up"),ArrowDown:C("down")}}}])&&R(t.prototype,n),u}(o.N)},8682:(e,t,n)=>{var o=n(2926).___internalHook("/","../../..","..");e.exports=n(6395),o()},6395:(e,t,n)=>{function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,{default:()=>s});const s=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(l,e);var t,n,o,s,f=(o=l,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=a(o);if(s){var n=a(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return u(this,e)});function l(){return r(this,l),f.apply(this,arguments)}return t=l,(n=[{key:"name",get:function(){return"doc"}},{key:"createNodeSpec",value:function(){return{content:"block+"}}}])&&i(t.prototype,n),l}(n(5820).N)},8025:(e,t,n)=>{var o=n(2926).___internalHook("/","../../..","..");e.exports=n(2923),o()},2923:(e,t,n)=>{n.d(t,{default:()=>p});var o=n(5647),r=n(919),i=n(531);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(h,e);var t,n,o,c,p=(o=h,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=l(o);if(c){var n=l(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function h(){return u(this,h),p.apply(this,arguments)}return t=h,(n=[{key:"name",get:function(){return"history"}},{key:"plugin",get:function(){return(0,i.m8)()}},{key:"commands",get:function(){return{redo:function(){return i.KX},undo:function(){return i.Yw}}}},{key:"keymap",get:function(){var e={};return e["Mod-z"]=i.Yw,e["Shift-Mod-z"]=i.KX,r.V5||(e["Mod-y"]=i.KX),e}}])&&a(t.prototype,n),h}(o.h)},531:(e,t,n)=>{n.d(t,{m8:()=>o.m8,KX:()=>o.KX,Yw:()=>o.Yw});var o=n(8253)},652:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(8711),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"// extracted by mini-css-extract-plugin\nexport {};",""]);const i=r}}]);