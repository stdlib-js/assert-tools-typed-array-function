// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function t(){return r&&"symbol"==typeof Symbol.toStringTag}var n=Object.prototype.toString;var e=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol:void 0,i="function"==typeof o?o.toStringTag:"";var a=t()?function(r){var t,o,a,c,f;if(null==r)return n.call(r);o=r[i],f=i,t=null!=(c=r)&&e.call(c,f);try{r[i]=void 0}catch(t){return n.call(r)}return a=n.call(r),t?r[i]=o:delete r[i],a}:function(r){return n.call(r)},c="function"==typeof Object.defineProperty?Object.defineProperty:null;var f=Object.defineProperty;function u(r){return"number"==typeof r}function l(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function p(r,t,n){var e=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=n?r+l(o):l(o)+r,e&&(r="-"+r)),r}var y=String.prototype.toLowerCase,s=String.prototype.toUpperCase;function d(r){var t,n,e;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,e=parseInt(n,10),!isFinite(e)){if(!u(n))throw new Error("invalid integer. Value: "+n);e=0}return e<0&&("u"===r.specifier||10!==t)&&(e=4294967295+e+1),e<0?(n=(-e).toString(t),r.precision&&(n=p(n,r.precision,r.padRight)),n="-"+n):(n=e.toString(t),e||r.precision?r.precision&&(n=p(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===s.call(r.specifier)?s.call(n):y.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function v(r){return"string"==typeof r}var g=Math.abs,h=String.prototype.toLowerCase,w=String.prototype.toUpperCase,b=String.prototype.replace,A=/e\+(\d)$/,m=/e-(\d)$/,j=/^(\d+)$/,I=/^(\d+)e/,E=/\.0$/,U=/\.0*e/,_=/(\..*[^0])0*e/;function F(r){var t,n,e=parseFloat(r.arg);if(!isFinite(e)){if(!u(r.arg))throw new Error("invalid floating-point number. Value: "+n);e=r.arg}switch(r.specifier){case"e":case"E":n=e.toExponential(r.precision);break;case"f":case"F":n=e.toFixed(r.precision);break;case"g":case"G":g(e)<1e-4?((t=r.precision)>0&&(t-=1),n=e.toExponential(t)):n=e.toPrecision(r.precision),r.alternate||(n=b.call(n,_,"$1e"),n=b.call(n,U,"e"),n=b.call(n,E,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=b.call(n,A,"e+0$1"),n=b.call(n,m,"e-0$1"),r.alternate&&(n=b.call(n,j,"$1."),n=b.call(n,I,"$1.e")),e>=0&&r.sign&&(n=r.sign+n),n=r.specifier===w.call(r.specifier)?w.call(n):h.call(n)}function S(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function x(r,t,n){var e=t-r.length;return e<0?r:r=n?r+S(e):S(e)+r}var k=String.fromCharCode,O=isNaN,T=Array.isArray;function C(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function V(r){var t,n,e,o,i,a,c,f,u;if(!T(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,f=0;f<r.length;f++)if(v(e=r[f]))a+=e;else{if(t=void 0!==e.precision,!(e=C(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+e+"`.");for(e.mapping&&(c=e.mapping),n=e.flags,u=0;u<n.length;u++)switch(o=n.charAt(u)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[c],10),c+=1,O(e.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[c],10),c+=1,O(e.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[c],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=d(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!O(e.arg)){if((i=parseInt(e.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=O(i)?String(e.arg):k(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=F(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=p(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=x(e.arg,e.width,e.padRight)),a+=e.arg||"",c+=1}return a}var P=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function R(r){var t,n,e,o;for(n=[],o=0,e=P.exec(r);e;)(t=r.slice(o,P.lastIndex-e[0].length)).length&&n.push(t),n.push($(e)),o=P.lastIndex,e=P.exec(r);return(t=r.slice(o)).length&&n.push(t),n}function B(r){return"string"==typeof r}function N(r){var t,n,e;if(!B(r))throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=R(r),(n=new Array(arguments.length))[0]=t,e=1;e<n.length;e++)n[e]=arguments[e];return V.apply(null,n)}var L,G=Object.prototype,Z=G.toString,M=G.__defineGetter__,W=G.__defineSetter__,X=G.__lookupGetter__,z=G.__lookupSetter__;L=function(){try{return c({},"x",{}),!0}catch(r){return!1}}()?f:function(r,t,n){var e,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===Z.call(r))throw new TypeError(N("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===Z.call(n))throw new TypeError(N("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&(X.call(r,t)||z.call(r,t)?(e=r.__proto__,r.__proto__=G,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,a="set"in n,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&M&&M.call(r,t,n.get),a&&W&&W.call(r,t,n.set),r};var H=L;function J(r,t,n){H(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Y(){return/^\s*function\s*([^(]*)/i}var q=/^\s*function\s*([^(]*)/i;J(Y,"REGEXP",q);var D=Array.isArray?Array.isArray:function(r){return"[object Array]"===a(r)};function K(r){return null!==r&&"object"==typeof r}function Q(r){var t,n,e,o;if(("Object"===(n=a(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=q.exec(e.toString()))return t[1]}return K(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}J(K,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(N("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!D(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(K));var rr=/./;function tr(r){return"boolean"==typeof r}var nr=Boolean,er=Boolean.prototype.toString;var or=t();function ir(r){return"object"==typeof r&&(r instanceof nr||(or?function(r){try{return er.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===a(r)))}function ar(r){return tr(r)||ir(r)}function cr(){return new Function("return this;")()}J(ar,"isPrimitive",tr),J(ar,"isObject",ir);var fr="object"==typeof self?self:null,ur="object"==typeof window?window:null,lr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},pr="object"==typeof lr?lr:null,yr="object"==typeof globalThis?globalThis:null;var sr=function(r){if(arguments.length){if(!tr(r))throw new TypeError(N("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return cr()}if(yr)return yr;if(fr)return fr;if(ur)return ur;if(pr)return pr;throw new Error("unexpected error. Unable to resolve global object.")}(),dr=sr.document&&sr.document.childNodes,vr=Int8Array;var gr="function"==typeof rr||"object"==typeof vr||"function"==typeof dr?function(r){return Q(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Q(r).toLowerCase():t};function hr(r){return"function"===gr(r)}function wr(){}var br="foo"===wr.name;var Ar,mr=Object,jr=Object.getPrototypeOf;Ar=hr(Object.getPrototypeOf)?jr:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===a(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ir=Ar;function Er(r){return null==r?null:(r=mr(r),Ir(r))}var Ur="function"==typeof Float64Array;var _r="function"==typeof Float64Array?Float64Array:null;function Fr(){var r,t,n;if("function"!=typeof _r)return!1;try{t=new _r([1,3.14,-3.14,NaN]),n=t,r=(Ur&&n instanceof Float64Array||"[object Float64Array]"===a(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}var Sr="function"==typeof Float64Array?Float64Array:void 0;var xr=Fr()?Sr:function(){throw new Error("not implemented")},kr="function"==typeof Int8Array;var Or="function"==typeof Int8Array?Int8Array:null;var Tr="function"==typeof Int8Array?Int8Array:void 0;var Cr=function(){var r,t,n;if("function"!=typeof Or)return!1;try{t=new Or([1,3.14,-3.14,128]),n=t,r=(kr&&n instanceof Int8Array||"[object Int8Array]"===a(n))&&1===t[0]&&3===t[1]&&-3===t[2]&&-128===t[3]}catch(t){r=!1}return r}()?Tr:function(){throw new Error("not implemented")},Vr="function"==typeof Uint8Array;var Pr="function"==typeof Uint8Array?Uint8Array:null;var $r="function"==typeof Uint8Array?Uint8Array:void 0;var Rr=function(){var r,t,n;if("function"!=typeof Pr)return!1;try{t=new Pr(t=[1,3.14,-3.14,256,257]),n=t,r=(Vr&&n instanceof Uint8Array||"[object Uint8Array]"===a(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?$r:function(){throw new Error("not implemented")},Br="function"==typeof Uint8ClampedArray;var Nr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Lr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var Gr=function(){var r,t,n;if("function"!=typeof Nr)return!1;try{t=new Nr([-1,0,1,3.14,4.99,255,256]),n=t,r=(Br&&n instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===a(n))&&0===t[0]&&0===t[1]&&1===t[2]&&3===t[3]&&5===t[4]&&255===t[5]&&255===t[6]}catch(t){r=!1}return r}()?Lr:function(){throw new Error("not implemented")},Zr="function"==typeof Int16Array;var Mr="function"==typeof Int16Array?Int16Array:null;var Wr="function"==typeof Int16Array?Int16Array:void 0;var Xr=function(){var r,t,n;if("function"!=typeof Mr)return!1;try{t=new Mr([1,3.14,-3.14,32768]),n=t,r=(Zr&&n instanceof Int16Array||"[object Int16Array]"===a(n))&&1===t[0]&&3===t[1]&&-3===t[2]&&-32768===t[3]}catch(t){r=!1}return r}()?Wr:function(){throw new Error("not implemented")},zr="function"==typeof Uint16Array;var Hr="function"==typeof Uint16Array?Uint16Array:null;var Jr="function"==typeof Uint16Array?Uint16Array:void 0;var Yr=function(){var r,t,n;if("function"!=typeof Hr)return!1;try{t=new Hr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(zr&&n instanceof Uint16Array||"[object Uint16Array]"===a(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Jr:function(){throw new Error("not implemented")},qr="function"==typeof Int32Array;var Dr="function"==typeof Int32Array?Int32Array:null;var Kr="function"==typeof Int32Array?Int32Array:void 0;var Qr=function(){var r,t,n;if("function"!=typeof Dr)return!1;try{t=new Dr([1,3.14,-3.14,2147483648]),n=t,r=(qr&&n instanceof Int32Array||"[object Int32Array]"===a(n))&&1===t[0]&&3===t[1]&&-3===t[2]&&-2147483648===t[3]}catch(t){r=!1}return r}()?Kr:function(){throw new Error("not implemented")},rt="function"==typeof Uint32Array;var tt="function"==typeof Uint32Array?Uint32Array:null;var nt="function"==typeof Uint32Array?Uint32Array:void 0;var et=function(){var r,t,n;if("function"!=typeof tt)return!1;try{t=new tt(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(rt&&n instanceof Uint32Array||"[object Uint32Array]"===a(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?nt:function(){throw new Error("not implemented")},ot="function"==typeof Float32Array;var it=Number.POSITIVE_INFINITY,at="function"==typeof Float32Array?Float32Array:null;var ct="function"==typeof Float32Array?Float32Array:void 0;var ft=[xr,function(){var r,t,n;if("function"!=typeof at)return!1;try{t=new at([1,3.14,-3.14,5e40]),n=t,r=(ot&&n instanceof Float32Array||"[object Float32Array]"===a(n))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===it}catch(t){r=!1}return r}()?ct:function(){throw new Error("not implemented")},Qr,et,Xr,Yr,Cr,Rr,Gr],ut=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],lt=Fr()?Er(xr):pt;function pt(){}function yt(r){if("function"!=typeof r)throw new TypeError(function(){var r,t=arguments,n="https://stdlib.io/e/"+t[0]+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}("0BH3J,IR",r));return function(t){var n,e;if(!function(r){var t,n;if("object"!=typeof r||null===r)return!1;if(r instanceof lt)return!0;for(n=0;n<ft.length;n++)if(r instanceof ft[n])return!0;for(;r;){for(t=Q(r),n=0;n<ut.length;n++)if(ut[n]===t)return!0;r=Er(r)}return!1}(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}lt="TypedArray"===function(r){if(!1===hr(r))throw new TypeError(N("invalid argument. Must provide a function. Value: `%s`.",r));return br?r.name:q.exec(r.toString())[1]}(lt)?lt:pt;export{yt as default};
//# sourceMappingURL=mod.js.map
