(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[885],{3510:(t,e,n)=>{"use strict";var r=n(2926).___internalHook("/","../../..","..");t.exports=n(3665),r()},3665:(t,e,n)=>{"use strict";n.d(e,{BasicMenuBtn:()=>s,default:()=>c});var r=n(8669),o=n(4238),u=n.n(o);const c=function(t){var e=r.useRef(null),n=t.view,o=t.items,c=t.children,i=t.className,a=t.menuPlugin;return(0,r.useEffect)((function(){var t=n.state.plugins;t.push(a({items:o,element:e.current}));var r=n.state.reconfigure({plugins:t});n.updateState(r)}),[]),r.createElement("div",{className:u()("menu-container",i),ref:e},c)};var i,a,f,l=n(8765).ZP.button(i||(a=["\n  cursor: pointer;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 4px;\n\n  padding: 2px 4px;\n  margin: 0 2px;\n\n  width: 24px;\n  height: 22px;\n\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n\n  &.activated {\n    background-color: rgba(0, 0, 0, 0.2);\n  }\n\n  &.disabled {\n    cursor: not-allowed;\n    pointer-events: none;\n  }\n"],f||(f=a.slice(0)),i=Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(f)}}))));const s=function(t){var e=t.view,n=t.attrs,o=t.plugin,u=t.children,c=t.className,i=void 0===c?"":c,a=t.onClick;return r.createElement(l,{className:i,"data-plugin-name":null==o?void 0:o.name,"data-plugin-attrs":JSON.stringify(n),onClick:function(){a(e.state,e.dispatch,e),e.focus()}},u)}},6419:(t,e,n)=>{"use strict";var r=n(2926).___internalHook("/","../../..","..");t.exports=n(4141),r()},4141:(t,e,n)=>{"use strict";n.d(e,{default:()=>b});var r=n(2740),o=n(6535),u=n(1061);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(m,t);var e,n,r,c,b=(r=m,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=p(r);if(c){var n=p(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return l(this,t)});function m(){var t;i(this,m);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return y(s(t=b.call.apply(b,[this].concat(n))),"keymap",(function(t){var e=t.type;return{"Mod-b":(0,o.w9)(e),"Mod-B":(0,o.w9)(e)}})),y(s(t),"inputRules",(function(t){var e=t.type;return[(0,u.hi)(/(?:\*\*)([^*_]+)(?:\*\*)\x20$/,e)]})),t}return e=m,(n=[{key:"name",get:function(){return"bold"}},{key:"schema",get:function(){return{parseDOM:[{tag:"strong"},{tag:"b",getAttrs:function(t){return"normal"!==t.style.fontWeight&&null}},{tag:"font-weight",getAttrs:function(t){return/^(bolder)?|[5-9]\d{2,}$/.test(t)&&null}}],toDOM:function(){return["strong",{class:"emirror-bold"},0]}}}},{key:"commands",get:function(){return{toggleBold:(0,o.w9)(this.name)}}}])&&a(e.prototype,n),m}(r.vc)},4697:(t,e,n)=>{"use strict";var r=n(2926).___internalHook("/","../../..","..");t.exports=n(7639),r()},7639:(t,e,n)=>{"use strict";n.d(e,{default:()=>b});var r=n(2740),o=n(62),u=n(982);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(m,t);var e,n,r,c,b=(r=m,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=p(r);if(c){var n=p(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return l(this,t)});function m(){var t;i(this,m);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return y(s(t=b.call.apply(b,[this].concat(n))),"keymap",(function(t){var e=t.type;return{"Shift-Ctrl-7":(0,u.toggleList)(e,"listItem")}})),y(s(t),"inputRules",(function(t){var e=t.type;return[(0,o.S0)(/^\s*[-+*]\s$/,e)]})),t}return e=m,(n=[{key:"name",get:function(){return"bulletList"}},{key:"schema",get:function(){return{content:"listItem+",group:"block",parseDOM:[{tag:"ul"}],toDOM:function(){return["ul",{class:"emirror-bullet-list"},0]}}}},{key:"commands",get:function(){return{toggleBulletList:(0,u.toggleList)(this.name,"listItem")}}}])&&a(e.prototype,n),m}(r.NB)},8985:(t,e,n)=>{"use strict";var r=n(2926).___internalHook("/","../../..","..");t.exports=n(7411),r()},7411:(t,e,n)=>{"use strict";n.d(e,{default:()=>m});var r=n(2740),o=n(6535),u=n(62),c=n(1061);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?p(t):e}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(h,t);var e,n,r,i,m=(r=h,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=y(r);if(i){var n=y(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return s(this,t)});function h(){var t;a(this,h);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return b(p(t=m.call.apply(m,[this].concat(n))),"levels",[1,2,3,4,5,6]),b(p(t),"keymap",(function(e){var n=e.type;return Object.fromEntries(t.levels.map((function(t){return["Ctrl-Shift-".concat(t),(0,o.uJ)(n,{level:t})]})))})),b(p(t),"inputRules",(function(e){var n=e.type;return t.levels.map((function(t){return(0,u.zK)(new RegExp("^(#{1,".concat(t,"})\\s$")),n,(function(){return{level:t}}))}))})),t}return e=h,(n=[{key:"name",get:function(){return"heading"}},{key:"schema",get:function(){return{group:"block",content:"inline*",defining:!0,attrs:{level:{default:1}},parseDOM:this.levels.map((function(t){return{tag:"h".concat(t),attrs:{level:t}}})),toDOM:function(t){return["h".concat(t.attrs.level),{id:(0,c.op)(),class:"emirror-heading emirror-h".concat(t.attrs.level)},0]}}}},{key:"commands",get:function(){var t=this;return{toggleHeading:function(e){return(0,c.bh)(t.name,"paragraph",{level:e})}}}}])&&f(e.prototype,n),h}(r.NB)},8942:(t,e,n)=>{"use strict";var r=n(2926).___internalHook("/","../../..","..");t.exports=n(2488),r()},2488:(t,e,n)=>{"use strict";n.d(e,{default:()=>b});var r=n(2740),o=n(6535),u=n(1061);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(m,t);var e,n,r,c,b=(r=m,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=p(r);if(c){var n=p(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return l(this,t)});function m(){var t;i(this,m);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return y(s(t=b.call.apply(b,[this].concat(n))),"keymap",(function(t){var e=t.type;return{"Mod-i":(0,o.w9)(e),"Mod-I":(0,o.w9)(e)}})),y(s(t),"inputRules",(function(t){var e=t.type;return[(0,u.hi)(/(?:\*)([^*_]+)(?:\*)\x20$/,e)]})),t}return e=m,(n=[{key:"name",get:function(){return"italic"}},{key:"schema",get:function(){return{parseDOM:[{tag:"em"},{tag:"i"},{style:"font-style=italic"}],toDOM:function(){return["em",{class:"emirror-italic"},0]}}}},{key:"commands",get:function(){return{toggleItalic:(0,o.w9)(this.name)}}}])&&a(e.prototype,n),m}(r.vc)},8930:(t,e,n)=>{"use strict";var r=n(2926).___internalHook("/","../../..","..");t.exports=n(369),r()},369:(t,e,n)=>{"use strict";n.d(e,{default:()=>b});var r=n(2740),o=n(62),u=n(982);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(m,t);var e,n,r,c,b=(r=m,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=p(r);if(c){var n=p(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return l(this,t)});function m(){var t;i(this,m);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return y(s(t=b.call.apply(b,[this].concat(n))),"keymap",(function(t){var e=t.type;return{"Shift-Ctrl-8":(0,u.toggleList)(e,"listItem")}})),y(s(t),"inputRules",(function(t){var e=t.type;return[(0,o.S0)(/^^(\d+)\.\s$/,e,(function(t){return{order:parseInt(t[1],10)}}),(function(t,e){return e.childCount+e.attrs.order===parseInt(t[1],10)}))]})),t}return e=m,(n=[{key:"name",get:function(){return"orderList"}},{key:"schema",get:function(){return{attrs:{order:{default:1}},content:"listItem+",group:"block",parseDOM:[{tag:"ol",getAttrs:function(t){return{order:t.getAttribute("data-order-start")?parseInt(t.getAttribute("data-order-start"),10):1}}}],toDOM:function(t){return 1===t.attrs.order?["ol",{class:"emirror-order-li"},0]:["ol",{class:"emirror-order-li","data-order-start":t.attrs.order},0]}}}},{key:"commands",get:function(){return{toggleOrderList:(0,u.toggleList)(this.name,"listItem")}}}])&&a(e.prototype,n),m}(r.NB)},4699:(t,e,n)=>{"use strict";var r=n(2926).___internalHook("/","../../..","..");t.exports=n(1310),r()},1310:(t,e,n)=>{"use strict";n.d(e,{default:()=>b});var r=n(2740),o=n(6535),u=n(1061);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(m,t);var e,n,r,c,b=(r=m,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=p(r);if(c){var n=p(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return l(this,t)});function m(){var t;i(this,m);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return y(s(t=b.call.apply(b,[this].concat(n))),"keymap",(function(t){var e=t.type;return{"Mod-Shift-x":(0,o.w9)(e),"Mod-Shift-X":(0,o.w9)(e)}})),y(s(t),"inputRules",(function(t){var e=t.type;return[(0,u.hi)(/(?:~~)([^*_]+)(?:~~)\x20$/,e)]})),t}return e=m,(n=[{key:"name",get:function(){return"strike"}},{key:"schema",get:function(){return{parseDOM:[{tag:"s"},{tag:"del"},{tag:"text-decoration",getAttrs:function(t){return"line-through"===t&&{}}}],toDOM:function(){return["s",{class:"emirror-strike"},0]}}}},{key:"commands",get:function(){return{toggleStrike:(0,o.w9)(this.name)}}}])&&a(e.prototype,n),m}(r.vc)}}]);