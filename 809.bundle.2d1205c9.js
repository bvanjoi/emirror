(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[809],{4809:(t,e,r)=>{"use strict";var n=r(2926).___internalHook("/","../../..","..");t.exports=r(1314),n()},1314:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>a});var n=r(8669),o=r(8641),i=r(8682),u=r(9534),s=r(8738),c=r(8025);function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const a=function(){var t,e,r=(t=(0,n.useState)(!1),e=2,function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],u=!0,s=!1;try{for(r=r.call(t);!(u=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);u=!0);}catch(t){s=!0,o=t}finally{try{u||null==r.return||r.return()}finally{if(s)throw o}}return i}}(t,e)||function(t,e){if(t){if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=r[0],f=r[1];return n.createElement("div",null,n.createElement("input",{type:"checkbox",name:"editable",id:"editable",checked:a,onChange:function(){return f(!a)}}),n.createElement("label",null,"editable"),n.createElement(o.Z,{topNode:new i.default,editable:a,plugins:[new u.default,new s.default,new c.default]},n.createElement("p",null,"This is a example show how to config editable of EMirror."),n.createElement("p",null,"You can use checkbox the changed this state.")))}},4668:(t,e,r)=>{"use strict";r.d(e,{q:()=>i});var n=r(760),o=r(83);function i(t){return void 0===t&&(t={}),new n.Sy({view:function(e){return new u(e,t)}})}var u=function(t,e){var r=this;this.editorView=t,this.width=e.width||1,this.color=e.color||"black",this.class=e.class,this.cursorPos=null,this.element=null,this.timeout=null,this.handlers=["dragover","dragend","drop","dragleave"].map((function(e){var n=function(t){return r[e](t)};return t.dom.addEventListener(e,n),{name:e,handler:n}}))};u.prototype.destroy=function(){var t=this;this.handlers.forEach((function(e){var r=e.name,n=e.handler;return t.editorView.dom.removeEventListener(r,n)}))},u.prototype.update=function(t,e){null!=this.cursorPos&&e.doc!=t.state.doc&&(this.cursorPos>t.state.doc.content.size?this.setCursor(null):this.updateOverlay())},u.prototype.setCursor=function(t){t!=this.cursorPos&&(this.cursorPos=t,null==t?(this.element.parentNode.removeChild(this.element),this.element=null):this.updateOverlay())},u.prototype.updateOverlay=function(){var t,e=this.editorView.state.doc.resolve(this.cursorPos);if(!e.parent.inlineContent){var r=e.nodeBefore,n=e.nodeAfter;if(r||n){var o=this.editorView.nodeDOM(this.cursorPos-(r?r.nodeSize:0)).getBoundingClientRect(),i=r?o.bottom:o.top;r&&n&&(i=(i+this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top)/2),t={left:o.left,right:o.right,top:i-this.width/2,bottom:i+this.width/2}}}if(!t){var u=this.editorView.coordsAtPos(this.cursorPos);t={left:u.left-this.width/2,right:u.left+this.width/2,top:u.top,bottom:u.bottom}}var s,c,l=this.editorView.dom.offsetParent;if(this.element||(this.element=l.appendChild(document.createElement("div")),this.class&&(this.element.className=this.class),this.element.style.cssText="position: absolute; z-index: 50; pointer-events: none; background-color: "+this.color),!l||l==document.body&&"static"==getComputedStyle(l).position)s=-pageXOffset,c=-pageYOffset;else{var a=l.getBoundingClientRect();s=a.left-l.scrollLeft,c=a.top-l.scrollTop}this.element.style.left=t.left-s+"px",this.element.style.top=t.top-c+"px",this.element.style.width=t.right-t.left+"px",this.element.style.height=t.bottom-t.top+"px"},u.prototype.scheduleRemoval=function(t){var e=this;clearTimeout(this.timeout),this.timeout=setTimeout((function(){return e.setCursor(null)}),t)},u.prototype.dragover=function(t){if(this.editorView.editable){var e=this.editorView.posAtCoords({left:t.clientX,top:t.clientY});if(e){var r=e.pos;if(this.editorView.dragging&&this.editorView.dragging.slice&&null==(r=(0,o.nj)(this.editorView.state.doc,r,this.editorView.dragging.slice)))return this.setCursor(null);this.setCursor(r),this.scheduleRemoval(5e3)}}},u.prototype.dragend=function(){this.scheduleRemoval(20)},u.prototype.drop=function(){this.scheduleRemoval(20)},u.prototype.dragleave=function(t){t.target!=this.editorView.dom&&this.editorView.dom.contains(t.relatedTarget)||this.setCursor(null)}},4548:(t,e,r)=>{"use strict";r.d(e,{d:()=>l});var n=r(5170),o=r(760),i=r(5954),u=r(8284),s=function(t){function e(e){t.call(this,e,e)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.map=function(r,n){var o=r.resolve(n.map(this.head));return e.valid(o)?new e(o):t.near(o)},e.prototype.content=function(){return u.p2.empty},e.prototype.eq=function(t){return t instanceof e&&t.head==this.head},e.prototype.toJSON=function(){return{type:"gapcursor",pos:this.head}},e.fromJSON=function(t,r){if("number"!=typeof r.pos)throw new RangeError("Invalid input for GapCursor.fromJSON");return new e(t.resolve(r.pos))},e.prototype.getBookmark=function(){return new c(this.anchor)},e.valid=function(t){var e=t.parent;if(e.isTextblock||!function(t){for(var e=t.depth;e>=0;e--){var r=t.index(e);if(0!=r)for(var n=t.node(e).child(r-1);;n=n.lastChild){if(0==n.childCount&&!n.inlineContent||n.isAtom||n.type.spec.isolating)return!0;if(n.inlineContent)return!1}}return!0}(t)||!function(t){for(var e=t.depth;e>=0;e--){var r=t.indexAfter(e),n=t.node(e);if(r!=n.childCount)for(var o=n.child(r);;o=o.firstChild){if(0==o.childCount&&!o.inlineContent||o.isAtom||o.type.spec.isolating)return!0;if(o.inlineContent)return!1}}return!0}(t))return!1;var r=e.type.spec.allowGapCursor;if(null!=r)return r;var n=e.contentMatchAt(t.index()).defaultType;return n&&n.isTextblock},e.findFrom=function(t,r,n){t:for(;;){if(!n&&e.valid(t))return t;for(var i=t.pos,u=null,s=t.depth;;s--){var c=t.node(s);if(r>0?t.indexAfter(s)<c.childCount:t.index(s)>0){u=c.child(r>0?t.indexAfter(s):t.index(s)-1);break}if(0==s)return null;i+=r;var l=t.doc.resolve(i);if(e.valid(l))return l}for(;;){var a=r>0?u.firstChild:u.lastChild;if(!a){if(u.isAtom&&!u.isText&&!o.qv.isSelectable(u)){t=t.doc.resolve(i+u.nodeSize*r),n=!1;continue t}break}u=a,i+=r;var f=t.doc.resolve(i);if(e.valid(f))return f}return null}},e}(o.Y1);s.prototype.visible=!1,o.Y1.jsonID("gapcursor",s);var c=function(t){this.pos=t};c.prototype.map=function(t){return new c(t.map(this.pos))},c.prototype.resolve=function(t){var e=t.resolve(this.pos);return s.valid(e)?new s(e):o.Y1.near(e)};var l=function(){return new o.Sy({props:{decorations:d,createSelectionBetween:function(t,e,r){if(e.pos==r.pos&&s.valid(r))return new s(r)},handleClick:p,handleKeyDown:a}})},a=(0,n.$)({ArrowLeft:f("horiz",-1),ArrowRight:f("horiz",1),ArrowUp:f("vert",-1),ArrowDown:f("vert",1)});function f(t,e){var r="vert"==t?e>0?"down":"up":e>0?"right":"left";return function(t,n,i){var u=t.selection,c=e>0?u.$to:u.$from,l=u.empty;if(u instanceof o.Bs){if(!i.endOfTextblock(r)||0==c.depth)return!1;l=!1,c=t.doc.resolve(e>0?c.after():c.before())}var a=s.findFrom(c,e,l);return!!a&&(n&&n(t.tr.setSelection(new s(a))),!0)}}function p(t,e,r){if(!t.editable)return!1;var n=t.state.doc.resolve(e);if(!s.valid(n))return!1;var i=t.posAtCoords({left:r.clientX,top:r.clientY}).inside;return!(i>-1&&o.qv.isSelectable(t.state.doc.nodeAt(i))||(t.dispatch(t.state.tr.setSelection(new s(n))),0))}function d(t){if(!(t.selection instanceof s))return null;var e=document.createElement("div");return e.className="ProseMirror-gapcursor",i.EH.create(t.doc,[i.p.widget(t.selection.head,e,{key:"gapcursor"})])}},8682:(t,e,r)=>{"use strict";var n=r(2926).___internalHook("/","../../..","..");t.exports=r(7527),n()},7527:(t,e,r)=>{"use strict";r.d(e,{default:()=>p});var n=r(2740),o=r(4548),i=r(4668);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}const p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(d,t);var e,r,n,u,p=(n=d,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=f(n);if(u){var r=f(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return a(this,t)});function d(){return s(this,d),p.apply(this,arguments)}return e=d,(r=[{key:"name",get:function(){return"doc"}},{key:"schema",get:function(){return{content:"block+"}}},{key:"plugins",get:function(){return[(0,o.d)(),(0,i.q)()]}}])&&c(e.prototype,r),d}(n.NB)},8025:(t,e,r)=>{"use strict";var n=r(2926).___internalHook("/","../../..","..");t.exports=r(2923),n()},2923:(t,e,r)=>{"use strict";r.d(e,{default:()=>h});var n=r(2740),o=r(1061),i=r(531);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?f(t):e}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(y,t);var e,r,n,u,h=(n=y,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=p(n);if(u){var r=p(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return a(this,t)});function y(){var t;s(this,y);for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return d(f(t=h.call.apply(h,[this].concat(r))),"keymap",(function(){var t={};return t["Mod-z"]=i.Yw,t["Shift-Mod-z"]=i.KX,o.V5||(t["Mod-y"]=i.KX),t})),t}return e=y,(r=[{key:"name",get:function(){return"history"}},{key:"plugins",get:function(){return[(0,i.m8)()]}},{key:"commands",get:function(){return{redo:i.KX,undo:i.Yw}}}])&&c(e.prototype,r),y}(n.hj)},531:(t,e,r)=>{"use strict";r.d(e,{m8:()=>n.m8,KX:()=>n.KX,Yw:()=>n.Yw});var n=r(8253)}}]);