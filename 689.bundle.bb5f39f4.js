(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[689],{9689:(t,e,n)=>{"use strict";var r=n(2926).___internalHook("/","../../..","..");t.exports=n(759),r()},759:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>a});var r=n(8669),o=n(8641),i=n(8682),c=n(9534),u=n(8738),s=n(8025),l=n(7140);const a=function(){return r.createElement(o.Z,{topNode:new i.default,plugins:[new c.default,new u.default,new s.default,new l.default({maxSize:140})]},r.createElement("p",null,"At some social Apps, such as weibo, Twitter, The editor has restrict the content length of document."),r.createElement("p",null,"And now, ExceedTip plugin had implement similar feature, If you input content exceed 140 chars, it will show error tip. Of course, you can define it custom."),r.createElement("p",null,"Meanwhile, as a tip, because of the complexity of unicode, the count of content may be not as you see."),r.createElement("p",null,"such as 🤚, although it seems take up 1 char in visual, it occur 2 chars indeed."))}},4668:(t,e,n)=>{"use strict";n.d(e,{q:()=>i});var r=n(760),o=n(83);function i(t){return void 0===t&&(t={}),new r.Sy({view:function(e){return new c(e,t)}})}var c=function(t,e){var n=this;this.editorView=t,this.width=e.width||1,this.color=e.color||"black",this.class=e.class,this.cursorPos=null,this.element=null,this.timeout=null,this.handlers=["dragover","dragend","drop","dragleave"].map((function(e){var r=function(t){return n[e](t)};return t.dom.addEventListener(e,r),{name:e,handler:r}}))};c.prototype.destroy=function(){var t=this;this.handlers.forEach((function(e){var n=e.name,r=e.handler;return t.editorView.dom.removeEventListener(n,r)}))},c.prototype.update=function(t,e){null!=this.cursorPos&&e.doc!=t.state.doc&&(this.cursorPos>t.state.doc.content.size?this.setCursor(null):this.updateOverlay())},c.prototype.setCursor=function(t){t!=this.cursorPos&&(this.cursorPos=t,null==t?(this.element.parentNode.removeChild(this.element),this.element=null):this.updateOverlay())},c.prototype.updateOverlay=function(){var t,e=this.editorView.state.doc.resolve(this.cursorPos);if(!e.parent.inlineContent){var n=e.nodeBefore,r=e.nodeAfter;if(n||r){var o=this.editorView.nodeDOM(this.cursorPos-(n?n.nodeSize:0)).getBoundingClientRect(),i=n?o.bottom:o.top;n&&r&&(i=(i+this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top)/2),t={left:o.left,right:o.right,top:i-this.width/2,bottom:i+this.width/2}}}if(!t){var c=this.editorView.coordsAtPos(this.cursorPos);t={left:c.left-this.width/2,right:c.left+this.width/2,top:c.top,bottom:c.bottom}}var u,s,l=this.editorView.dom.offsetParent;if(this.element||(this.element=l.appendChild(document.createElement("div")),this.class&&(this.element.className=this.class),this.element.style.cssText="position: absolute; z-index: 50; pointer-events: none; background-color: "+this.color),!l||l==document.body&&"static"==getComputedStyle(l).position)u=-pageXOffset,s=-pageYOffset;else{var a=l.getBoundingClientRect();u=a.left-l.scrollLeft,s=a.top-l.scrollTop}this.element.style.left=t.left-u+"px",this.element.style.top=t.top-s+"px",this.element.style.width=t.right-t.left+"px",this.element.style.height=t.bottom-t.top+"px"},c.prototype.scheduleRemoval=function(t){var e=this;clearTimeout(this.timeout),this.timeout=setTimeout((function(){return e.setCursor(null)}),t)},c.prototype.dragover=function(t){if(this.editorView.editable){var e=this.editorView.posAtCoords({left:t.clientX,top:t.clientY});if(e){var n=e.pos;if(this.editorView.dragging&&this.editorView.dragging.slice&&null==(n=(0,o.nj)(this.editorView.state.doc,n,this.editorView.dragging.slice)))return this.setCursor(null);this.setCursor(n),this.scheduleRemoval(5e3)}}},c.prototype.dragend=function(){this.scheduleRemoval(20)},c.prototype.drop=function(){this.scheduleRemoval(20)},c.prototype.dragleave=function(t){t.target!=this.editorView.dom&&this.editorView.dom.contains(t.relatedTarget)||this.setCursor(null)}},4548:(t,e,n)=>{"use strict";n.d(e,{d:()=>l});var r=n(5170),o=n(760),i=n(5954),c=n(8284),u=function(t){function e(e){t.call(this,e,e)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.map=function(n,r){var o=n.resolve(r.map(this.head));return e.valid(o)?new e(o):t.near(o)},e.prototype.content=function(){return c.p2.empty},e.prototype.eq=function(t){return t instanceof e&&t.head==this.head},e.prototype.toJSON=function(){return{type:"gapcursor",pos:this.head}},e.fromJSON=function(t,n){if("number"!=typeof n.pos)throw new RangeError("Invalid input for GapCursor.fromJSON");return new e(t.resolve(n.pos))},e.prototype.getBookmark=function(){return new s(this.anchor)},e.valid=function(t){var e=t.parent;if(e.isTextblock||!function(t){for(var e=t.depth;e>=0;e--){var n=t.index(e);if(0!=n)for(var r=t.node(e).child(n-1);;r=r.lastChild){if(0==r.childCount&&!r.inlineContent||r.isAtom||r.type.spec.isolating)return!0;if(r.inlineContent)return!1}}return!0}(t)||!function(t){for(var e=t.depth;e>=0;e--){var n=t.indexAfter(e),r=t.node(e);if(n!=r.childCount)for(var o=r.child(n);;o=o.firstChild){if(0==o.childCount&&!o.inlineContent||o.isAtom||o.type.spec.isolating)return!0;if(o.inlineContent)return!1}}return!0}(t))return!1;var n=e.type.spec.allowGapCursor;if(null!=n)return n;var r=e.contentMatchAt(t.index()).defaultType;return r&&r.isTextblock},e.findFrom=function(t,n,r){t:for(;;){if(!r&&e.valid(t))return t;for(var i=t.pos,c=null,u=t.depth;;u--){var s=t.node(u);if(n>0?t.indexAfter(u)<s.childCount:t.index(u)>0){c=s.child(n>0?t.indexAfter(u):t.index(u)-1);break}if(0==u)return null;i+=n;var l=t.doc.resolve(i);if(e.valid(l))return l}for(;;){var a=n>0?c.firstChild:c.lastChild;if(!a){if(c.isAtom&&!c.isText&&!o.qv.isSelectable(c)){t=t.doc.resolve(i+c.nodeSize*n),r=!1;continue t}break}c=a,i+=n;var f=t.doc.resolve(i);if(e.valid(f))return f}return null}},e}(o.Y1);u.prototype.visible=!1,o.Y1.jsonID("gapcursor",u);var s=function(t){this.pos=t};s.prototype.map=function(t){return new s(t.map(this.pos))},s.prototype.resolve=function(t){var e=t.resolve(this.pos);return u.valid(e)?new u(e):o.Y1.near(e)};var l=function(){return new o.Sy({props:{decorations:d,createSelectionBetween:function(t,e,n){if(e.pos==n.pos&&u.valid(n))return new u(n)},handleClick:p,handleKeyDown:a}})},a=(0,r.$)({ArrowLeft:f("horiz",-1),ArrowRight:f("horiz",1),ArrowUp:f("vert",-1),ArrowDown:f("vert",1)});function f(t,e){var n="vert"==t?e>0?"down":"up":e>0?"right":"left";return function(t,r,i){var c=t.selection,s=e>0?c.$to:c.$from,l=c.empty;if(c instanceof o.Bs){if(!i.endOfTextblock(n)||0==s.depth)return!1;l=!1,s=t.doc.resolve(e>0?s.after():s.before())}var a=u.findFrom(s,e,l);return!!a&&(r&&r(t.tr.setSelection(new u(a))),!0)}}function p(t,e,n){if(!t.editable)return!1;var r=t.state.doc.resolve(e);if(!u.valid(r))return!1;var i=t.posAtCoords({left:n.clientX,top:n.clientY}).inside;return!(i>-1&&o.qv.isSelectable(t.state.doc.nodeAt(i))||(t.dispatch(t.state.tr.setSelection(new u(r))),0))}function d(t){if(!(t.selection instanceof u))return null;var e=document.createElement("div");return e.className="ProseMirror-gapcursor",i.EH.create(t.doc,[i.p.widget(t.selection.head,e,{key:"gapcursor"})])}},8682:(t,e,n)=>{"use strict";var r=n(2926).___internalHook("/","../../..","..");t.exports=n(7527),r()},7527:(t,e,n)=>{"use strict";n.d(e,{default:()=>p});var r=n(2740),o=n(4548),i=n(4668);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}const p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(d,t);var e,n,r,c,p=(r=d,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=f(r);if(c){var n=f(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return a(this,t)});function d(){return u(this,d),p.apply(this,arguments)}return e=d,(n=[{key:"name",get:function(){return"doc"}},{key:"schema",get:function(){return{content:"block+"}}},{key:"plugins",get:function(){return[(0,o.d)(),(0,i.q)()]}}])&&s(e.prototype,n),d}(r.NB)},7140:(t,e,n)=>{"use strict";var r=n(2926).___internalHook("/","../../..","..");t.exports=n(6298),r()},6298:(t,e,n)=>{"use strict";n.d(e,{default:()=>v});var r=n(2740),o=n(8371),i=n(5106),c=n(1892),u=n.n(c),s=n(8733);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?d(t):e}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}u()(s.Z,{insert:"head",singleton:!1}),s.Z.locals;const v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(s,t);var e,n,r,c,u=(r=s,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=h(r);if(c){var n=h(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return p(this,t)});function s(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),y(d(e=u.call(this)),"exceedTipKey",new o.H$(e.name)),y(d(e),"options",{maxSize:140}),e.options=t,e}return e=s,(n=[{key:"name",get:function(){return"placeholder"}},{key:"plugins",get:function(){var t=this;return[new o.Sy({key:this.exceedTipKey,props:{decorations:function(e){var n=e.doc,r=n.lastChild;if(r&&!(n.textContent.length<=t.options.maxSize)){var o=n.content.size-r.nodeSize,c="emirror-exceed-tip ";r.isTextblock&&!r.textContent.length?c+="before":c+="after";var u=i.p.node(o,o+r.nodeSize,{class:c,"data-exceed-tip-content":"".concat(n.textContent.length,"/").concat(t.options.maxSize)});return i.EH.create(n,[u])}}}})]}}])&&a(e.prototype,n),s}(r.hj)},8025:(t,e,n)=>{"use strict";var r=n(2926).___internalHook("/","../../..","..");t.exports=n(2923),r()},2923:(t,e,n)=>{"use strict";n.d(e,{default:()=>h});var r=n(2740),o=n(1061),i=n(531);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?f(t):e}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(y,t);var e,n,r,c,h=(r=y,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=p(r);if(c){var n=p(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return a(this,t)});function y(){var t;u(this,y);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return d(f(t=h.call.apply(h,[this].concat(n))),"keymap",(function(){var t={};return t["Mod-z"]=i.Yw,t["Shift-Mod-z"]=i.KX,o.V5||(t["Mod-y"]=i.KX),t})),t}return e=y,(n=[{key:"name",get:function(){return"history"}},{key:"plugins",get:function(){return[(0,i.m8)()]}},{key:"commands",get:function(){return{redo:i.KX,undo:i.Yw}}}])&&s(e.prototype,n),y}(r.hj)},531:(t,e,n)=>{"use strict";n.d(e,{m8:()=>r.m8,KX:()=>r.KX,Yw:()=>r.Yw});var r=n(8253)},8733:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var r=n(8711),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,"// extracted by mini-css-extract-plugin\nexport {};",""]);const i=o}}]);