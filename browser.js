// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).typedarrayfcn=t()}(this,(function(){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function t(){return r&&"symbol"==typeof Symbol.toStringTag}var n=Object.prototype.toString;var e=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol.toStringTag:"";var i=t()?function(r){var t,i,a,f,u;if(null==r)return n.call(r);i=r[o],u=o,t=null!=(f=r)&&e.call(f,u);try{r[o]=void 0}catch(t){return n.call(r)}return a=n.call(r),t?r[o]=i:delete r[o],a}:function(r){return n.call(r)},a="function"==typeof Object.defineProperty?Object.defineProperty:null;var f,u=Object.defineProperty,c=Object.prototype,y=c.toString,l=c.__defineGetter__,p=c.__defineSetter__,v=c.__lookupGetter__,A=c.__lookupSetter__;f=function(){try{return a({},"x",{}),!0}catch(r){return!1}}()?u:function(r,t,n){var e,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===y.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===y.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(v.call(r,t)||A.call(r,t)?(e=r.__proto__,r.__proto__=c,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,a="set"in n,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&l&&l.call(r,t,n.get),a&&p&&p.call(r,t,n.set),r};var d=f;function s(r,t,n){d(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function b(){return/^\s*function\s*([^(]*)/i}var m=/^\s*function\s*([^(]*)/i;s(b,"REGEXP",m);var w=Array.isArray?Array.isArray:function(r){return"[object Array]"===i(r)};function h(r){return null!==r&&"object"==typeof r}function j(r){var t,n,e,o;if(("Object"===(n=i(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=m.exec(e.toString()))return t[1]}return h(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}s(h,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!w(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(h));var g=/./;function U(r){return"boolean"==typeof r}var _=Boolean.prototype.toString;var I=t();function E(r){return"object"==typeof r&&(r instanceof Boolean||(I?function(r){try{return _.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===i(r)))}function F(r){return U(r)||E(r)}function O(){return new Function("return this;")()}s(F,"isPrimitive",U),s(F,"isObject",E);var S="object"==typeof self?self:null,T="object"==typeof window?window:null,C="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},P="object"==typeof C?C:null;var B=function(r){if(arguments.length){if(!U(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return O()}if(S)return S;if(T)return T;if(P)return P;throw new Error("unexpected error. Unable to resolve global object.")}(),V=B.document&&B.document.childNodes,x=Int8Array;var N="function"==typeof g||"object"==typeof x||"function"==typeof V?function(r){return j(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?j(r).toLowerCase():t};function k(r){return"function"===N(r)}function G(){}var L="foo"===G.name;var M,R=Object.getPrototypeOf;M=k(Object.getPrototypeOf)?R:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===i(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var X=M;function Y(r){return null==r?null:(r=Object(r),X(r))}var q="function"==typeof Float64Array;var z="function"==typeof Float64Array?Float64Array:null;function D(){var r,t,n;if("function"!=typeof z)return!1;try{t=new z([1,3.14,-3.14,NaN]),n=t,r=(q&&n instanceof Float64Array||"[object Float64Array]"===i(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}var H="function"==typeof Float64Array?Float64Array:void 0;var J=D()?H:function(){throw new Error("not implemented")},K="function"==typeof Int8Array;var Q="function"==typeof Int8Array?Int8Array:null;var W="function"==typeof Int8Array?Int8Array:void 0;var Z=function(){var r,t,n;if("function"!=typeof Q)return!1;try{t=new Q([1,3.14,-3.14,128]),n=t,r=(K&&n instanceof Int8Array||"[object Int8Array]"===i(n))&&1===t[0]&&3===t[1]&&-3===t[2]&&-128===t[3]}catch(t){r=!1}return r}()?W:function(){throw new Error("not implemented")},$="function"==typeof Uint8Array;var rr="function"==typeof Uint8Array?Uint8Array:null;var tr="function"==typeof Uint8Array?Uint8Array:void 0;var nr=function(){var r,t,n;if("function"!=typeof rr)return!1;try{t=new rr(t=[1,3.14,-3.14,256,257]),n=t,r=($&&n instanceof Uint8Array||"[object Uint8Array]"===i(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?tr:function(){throw new Error("not implemented")},er="function"==typeof Uint8ClampedArray;var or="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var ir="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var ar=function(){var r,t,n;if("function"!=typeof or)return!1;try{t=new or([-1,0,1,3.14,4.99,255,256]),n=t,r=(er&&n instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===i(n))&&0===t[0]&&0===t[1]&&1===t[2]&&3===t[3]&&5===t[4]&&255===t[5]&&255===t[6]}catch(t){r=!1}return r}()?ir:function(){throw new Error("not implemented")},fr="function"==typeof Int16Array;var ur="function"==typeof Int16Array?Int16Array:null;var cr="function"==typeof Int16Array?Int16Array:void 0;var yr=function(){var r,t,n;if("function"!=typeof ur)return!1;try{t=new ur([1,3.14,-3.14,32768]),n=t,r=(fr&&n instanceof Int16Array||"[object Int16Array]"===i(n))&&1===t[0]&&3===t[1]&&-3===t[2]&&-32768===t[3]}catch(t){r=!1}return r}()?cr:function(){throw new Error("not implemented")},lr="function"==typeof Uint16Array;var pr="function"==typeof Uint16Array?Uint16Array:null;var vr="function"==typeof Uint16Array?Uint16Array:void 0;var Ar=function(){var r,t,n;if("function"!=typeof pr)return!1;try{t=new pr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(lr&&n instanceof Uint16Array||"[object Uint16Array]"===i(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?vr:function(){throw new Error("not implemented")},dr="function"==typeof Int32Array;var sr="function"==typeof Int32Array?Int32Array:null;var br="function"==typeof Int32Array?Int32Array:void 0;var mr=function(){var r,t,n;if("function"!=typeof sr)return!1;try{t=new sr([1,3.14,-3.14,2147483648]),n=t,r=(dr&&n instanceof Int32Array||"[object Int32Array]"===i(n))&&1===t[0]&&3===t[1]&&-3===t[2]&&-2147483648===t[3]}catch(t){r=!1}return r}()?br:function(){throw new Error("not implemented")},wr="function"==typeof Uint32Array;var hr="function"==typeof Uint32Array?Uint32Array:null;var jr="function"==typeof Uint32Array?Uint32Array:void 0;var gr=function(){var r,t,n;if("function"!=typeof hr)return!1;try{t=new hr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(wr&&n instanceof Uint32Array||"[object Uint32Array]"===i(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?jr:function(){throw new Error("not implemented")},Ur="function"==typeof Float32Array;var _r=Number.POSITIVE_INFINITY,Ir="function"==typeof Float32Array?Float32Array:null;var Er="function"==typeof Float32Array?Float32Array:void 0;var Fr=[J,function(){var r,t,n;if("function"!=typeof Ir)return!1;try{t=new Ir([1,3.14,-3.14,5e40]),n=t,r=(Ur&&n instanceof Float32Array||"[object Float32Array]"===i(n))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===_r}catch(t){r=!1}return r}()?Er:function(){throw new Error("not implemented")},mr,gr,yr,Ar,Z,nr,ar],Or=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],Sr=D()?Y(J):Tr;function Tr(){}return Sr="TypedArray"===function(r){if(!1===k(r))throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return L?r.name:m.exec(r.toString())[1]}(Sr)?Sr:Tr,function(r){if("function"!=typeof r)throw new TypeError(function(){var r,t=arguments,n="https://stdlib.io/e/"+t[0]+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}("05c3V",r));return function(t){var n,e;if(!function(r){var t,n;if("object"!=typeof r||null===r)return!1;if(r instanceof Sr)return!0;for(n=0;n<Fr.length;n++)if(r instanceof Fr[n])return!0;for(;r;){for(t=j(r),n=0;n<Or.length;n++)if(Or[n]===t)return!0;r=Y(r)}return!1}(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}}));
//# sourceMappingURL=browser.js.map
