"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[809],{4809:(t,e,n)=>{var r=n(2926).___internalHook("/","../../..","..");t.exports=n(1314),r()},1314:(t,e,n)=>{n.r(e),n.d(e,{default:()=>y});var r=n(8669),o=n(1627),u=n(8682),c=n(9534),i=n(8738),f=n(8025),a=n(8612),l=n(6641);function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,u=[],c=!0,i=!1;try{for(n=n.call(t);!(c=(r=n.next()).done)&&(u.push(r.value),!e||u.length!==e);c=!0);}catch(t){i=!0,o=t}finally{try{c||null==n.return||n.return()}finally{if(i)throw o}}return u}}(t,e)||function(t,e){if(t){if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const y=function(){var t=p((0,r.useState)(!1),2),e=t[0],n=t[1],s=p((0,r.useState)(null),2),y=s[0],b=s[1],h=new l.default;return r.createElement("div",null,y&&r.createElement(r.Fragment,null,r.createElement("input",{type:"checkbox",name:"editable",id:"editable",checked:e,onChange:function(){var t;t=!e,h.commands.setEditable(t)(void 0,void 0,y),n(t)}}),r.createElement("label",null,"editable")),r.createElement(o.ZP,{topNode:new u.default,afterInit:function(t){b(t)},editable:e,plugins:[new c.default,new i.default,new a.default,new f.default]},r.createElement("p",null,"This is an example show how to config editable in EMirror."),r.createElement("p",null,"You can use checkbox the changed this state.")))}},8682:(t,e,n)=>{var r=n(2926).___internalHook("/","../../..","..");t.exports=n(6395),r()},6395:(t,e,n)=>{function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,{default:()=>a});const a=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(p,t);var e,n,r,a,l=(r=p,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=f(r);if(a){var n=f(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return i(this,t)});function p(){return o(this,p),l.apply(this,arguments)}return e=p,(n=[{key:"name",get:function(){return"doc"}},{key:"createNodeSpec",value:function(){return{content:"block+"}}}])&&u(e.prototype,n),p}(n(5820).N)},6641:(t,e,n)=>{var r=n(2926).___internalHook("/","../../..","..");t.exports=n(9462),r()},9462:(t,e,n)=>{function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,{default:()=>s});const s=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(s,t);var e,n,r,o,c=(r=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=p(r);if(o){var n=p(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return l(this,t)});function s(){return i(this,s),c.apply(this,arguments)}return e=s,(n=[{key:"name",get:function(){return"editable"}},{key:"commands",get:function(){return{setEditable:function(t){return function(e,n,r){return r.update(u(u({},r.props),{},{editable:function(){return t}})),!0}}}}}])&&f(e.prototype,n),s}(n(5647).h)},8025:(t,e,n)=>{var r=n(2926).___internalHook("/","../../..","..");t.exports=n(2923),r()},2923:(t,e,n)=>{n.d(e,{default:()=>s});var r=n(5647),o=n(8454),u=n(531);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}const s=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(y,t);var e,n,r,c,s=(r=y,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=p(r);if(c){var n=p(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return l(this,t)});function y(){return i(this,y),s.apply(this,arguments)}return e=y,(n=[{key:"name",get:function(){return"history"}},{key:"plugin",get:function(){return(0,u.m8)()}},{key:"commands",get:function(){return{redo:u.KX,undo:u.Yw}}},{key:"keymap",get:function(){var t={};return t["Mod-z"]=u.Yw,t["Shift-Mod-z"]=u.KX,o.V5||(t["Mod-y"]=u.KX),t}}])&&f(e.prototype,n),y}(r.h)},531:(t,e,n)=>{n.d(e,{m8:()=>r.m8,KX:()=>r.KX,Yw:()=>r.Yw});var r=n(8253)}}]);