// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).typedarrayfcn=t()}(this,(function(){"use strict";function r(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var t=r();var n=Object.prototype.toString;var e=Object.prototype.hasOwnProperty;function o(r,t){return null!=r&&e.call(r,t)}var i="function"==typeof Symbol?Symbol:void 0,a="function"==typeof i?i.toStringTag:"";var c=t&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,i;if(null==r)return n.call(r);e=r[a],t=o(r,a);try{r[a]=void 0}catch(t){return n.call(r)}return i=n.call(r),t?r[a]=e:delete r[a],i}:function(r){return n.call(r)},l="function"==typeof Object.defineProperty?Object.defineProperty:null;var u=Object.defineProperty;function f(r){return"number"==typeof r}function y(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function p(r,t,n){var e=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=n?r+y(o):y(o)+r,e&&(r="-"+r)),r}var s=String.prototype.toLowerCase,v=String.prototype.toUpperCase;function g(r){var t,n,e;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,e=parseInt(n,10),!isFinite(e)){if(!f(n))throw new Error("invalid integer. Value: "+n);e=0}return e<0&&("u"===r.specifier||10!==t)&&(e=4294967295+e+1),e<0?(n=(-e).toString(t),r.precision&&(n=p(n,r.precision,r.padRight)),n="-"+n):(n=e.toString(t),e||r.precision?r.precision&&(n=p(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===v.call(r.specifier)?v.call(n):s.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function d(r){return"string"==typeof r}var b=Math.abs,m=String.prototype.toLowerCase,h=String.prototype.toUpperCase,w=String.prototype.replace,S=/e\+(\d)$/,A=/e-(\d)$/,j=/^(\d+)$/,T=/^(\d+)e/,I=/\.0$/,E=/\.0*e/,U=/(\..*[^0])0*e/;function _(r){var t,n,e=parseFloat(r.arg);if(!isFinite(e)){if(!f(r.arg))throw new Error("invalid floating-point number. Value: "+n);e=r.arg}switch(r.specifier){case"e":case"E":n=e.toExponential(r.precision);break;case"f":case"F":n=e.toFixed(r.precision);break;case"g":case"G":b(e)<1e-4?((t=r.precision)>0&&(t-=1),n=e.toExponential(t)):n=e.toPrecision(r.precision),r.alternate||(n=w.call(n,U,"$1e"),n=w.call(n,E,"e"),n=w.call(n,I,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=w.call(n,S,"e+0$1"),n=w.call(n,A,"e-0$1"),r.alternate&&(n=w.call(n,j,"$1."),n=w.call(n,T,"$1.e")),e>=0&&r.sign&&(n=r.sign+n),n=r.specifier===h.call(r.specifier)?h.call(n):m.call(n)}function O(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function F(r,t,n){var e=t-r.length;return e<0?r:r=n?r+O(e):O(e)+r}var x=String.fromCharCode,k=isNaN,C=Array.isArray;function V(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function P(r){var t,n,e,o,i,a,c,l,u;if(!C(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,l=0;l<r.length;l++)if(d(e=r[l]))a+=e;else{if(t=void 0!==e.precision,!(e=V(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+e+"`.");for(e.mapping&&(c=e.mapping),n=e.flags,u=0;u<n.length;u++)switch(o=n.charAt(u)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[c],10),c+=1,k(e.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[c],10),c+=1,k(e.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[c],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=g(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!k(e.arg)){if((i=parseInt(e.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=k(i)?String(e.arg):x(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=_(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=p(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=F(e.arg,e.width,e.padRight)),a+=e.arg||"",c+=1}return a}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function N(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function B(r){var t,n,e,o;for(n=[],o=0,e=$.exec(r);e;)(t=r.slice(o,$.lastIndex-e[0].length)).length&&n.push(t),n.push(N(e)),o=$.lastIndex,e=$.exec(r);return(t=r.slice(o)).length&&n.push(t),n}function R(r){return"string"==typeof r}function L(r){var t,n;if(!R(r))throw new TypeError(L("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[B(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return P.apply(null,t)}var G,M=Object.prototype,Z=M.toString,W=M.__defineGetter__,X=M.__defineSetter__,z=M.__lookupGetter__,Y=M.__lookupSetter__;G=function(){try{return l({},"x",{}),!0}catch(r){return!1}}()?u:function(r,t,n){var e,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===Z.call(r))throw new TypeError(L("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===Z.call(n))throw new TypeError(L("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&(z.call(r,t)||Y.call(r,t)?(e=r.__proto__,r.__proto__=M,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,a="set"in n,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&W&&W.call(r,t,n.get),a&&X&&X.call(r,t,n.set),r};var q=G;function D(){return/^\s*function\s*([^(]*)/i}var H=/^\s*function\s*([^(]*)/i;!function(r,t,n){q(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}(D,"REGEXP",H);var J=r();var K=Object.prototype.toString;var Q="function"==typeof Symbol?Symbol:void 0,rr="function"==typeof Q?Q.toStringTag:"";var tr=J&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return K.call(r);n=r[rr],t=o(r,rr);try{r[rr]=void 0}catch(t){return K.call(r)}return e=K.call(r),t?r[rr]=n:delete r[rr],e}:function(r){return K.call(r)};var nr=Array.isArray?Array.isArray:function(r){return"[object Array]"===tr(r)};function er(r){return null!==r&&"object"==typeof r}function or(r){var t,n,e,o;if(("Object"===(n=c(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=H.exec(e.toString()))return t[1]}return er(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}!function(r,t,n){q(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}(er,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(L("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!nr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(er));var ir=/./;function ar(r,t,n){q(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function cr(r){return"boolean"==typeof r}var lr=r();function ur(){return lr&&"symbol"==typeof Symbol.toStringTag}var fr=Object.prototype.toString;var yr="function"==typeof Symbol?Symbol:void 0,pr="function"==typeof yr?yr.toStringTag:"";var sr=ur()?function(r){var t,n,e;if(null==r)return fr.call(r);n=r[pr],t=o(r,pr);try{r[pr]=void 0}catch(t){return fr.call(r)}return e=fr.call(r),t?r[pr]=n:delete r[pr],e}:function(r){return fr.call(r)},vr=Boolean,gr=Boolean.prototype.toString;var dr=ur();function br(r){return"object"==typeof r&&(r instanceof vr||(dr?function(r){try{return gr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===sr(r)))}function mr(r){return cr(r)||br(r)}function hr(){return new Function("return this;")()}ar(mr,"isPrimitive",cr),ar(mr,"isObject",br);var wr="object"==typeof self?self:null,Sr="object"==typeof window?window:null,Ar="object"==typeof global?global:null,jr="object"==typeof globalThis?globalThis:null;var Tr=function(r){if(arguments.length){if(!cr(r))throw new TypeError(L("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return hr()}if(jr)return jr;if(wr)return wr;if(Sr)return Sr;if(Ar)return Ar;throw new Error("unexpected error. Unable to resolve global object.")}(),Ir=Tr.document&&Tr.document.childNodes,Er=Int8Array;var Ur="function"==typeof ir||"object"==typeof Er||"function"==typeof Ir?function(r){return or(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?or(r).toLowerCase():t};function _r(r){return"function"===Ur(r)}function Or(){}var Fr="foo"===Or.name;var xr=Object,kr=Object.getPrototypeOf,Cr=r();var Vr=Object.prototype.toString;var Pr="function"==typeof Symbol?Symbol:void 0,$r="function"==typeof Pr?Pr.toStringTag:"";var Nr,Br=Cr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return Vr.call(r);n=r[$r],t=o(r,$r);try{r[$r]=void 0}catch(t){return Vr.call(r)}return e=Vr.call(r),t?r[$r]=n:delete r[$r],e}:function(r){return Vr.call(r)};Nr=_r(Object.getPrototypeOf)?kr:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===Br(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Rr=Nr;function Lr(r){return null==r?null:(r=xr(r),Rr(r))}var Gr=r();var Mr=Object.prototype.toString;var Zr="function"==typeof Symbol?Symbol:void 0,Wr="function"==typeof Zr?Zr.toStringTag:"";var Xr=Gr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return Mr.call(r);n=r[Wr],t=o(r,Wr);try{r[Wr]=void 0}catch(t){return Mr.call(r)}return e=Mr.call(r),t?r[Wr]=n:delete r[Wr],e}:function(r){return Mr.call(r)},zr="function"==typeof Float64Array;var Yr="function"==typeof Float64Array?Float64Array:null;function qr(){var r,t,n;if("function"!=typeof Yr)return!1;try{t=new Yr([1,3.14,-3.14,NaN]),n=t,r=(zr&&n instanceof Float64Array||"[object Float64Array]"===Xr(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}var Dr="function"==typeof Float64Array?Float64Array:void 0;var Hr=qr()?Dr:function(){throw new Error("not implemented")},Jr=r();var Kr=Object.prototype.toString;var Qr="function"==typeof Symbol?Symbol:void 0,rt="function"==typeof Qr?Qr.toStringTag:"";var tt=Jr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return Kr.call(r);n=r[rt],t=o(r,rt);try{r[rt]=void 0}catch(t){return Kr.call(r)}return e=Kr.call(r),t?r[rt]=n:delete r[rt],e}:function(r){return Kr.call(r)},nt="function"==typeof Int8Array;var et="function"==typeof Int8Array?Int8Array:null;var ot="function"==typeof Int8Array?Int8Array:void 0;var it=function(){var r,t,n;if("function"!=typeof et)return!1;try{t=new et([1,3.14,-3.14,128]),n=t,r=(nt&&n instanceof Int8Array||"[object Int8Array]"===tt(n))&&1===t[0]&&3===t[1]&&-3===t[2]&&-128===t[3]}catch(t){r=!1}return r}()?ot:function(){throw new Error("not implemented")},at=r();var ct=Object.prototype.toString;var lt="function"==typeof Symbol?Symbol:void 0,ut="function"==typeof lt?lt.toStringTag:"";var ft=at&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return ct.call(r);n=r[ut],t=o(r,ut);try{r[ut]=void 0}catch(t){return ct.call(r)}return e=ct.call(r),t?r[ut]=n:delete r[ut],e}:function(r){return ct.call(r)},yt="function"==typeof Uint8Array;var pt="function"==typeof Uint8Array?Uint8Array:null;var st="function"==typeof Uint8Array?Uint8Array:void 0;var vt=function(){var r,t,n;if("function"!=typeof pt)return!1;try{t=new pt(t=[1,3.14,-3.14,256,257]),n=t,r=(yt&&n instanceof Uint8Array||"[object Uint8Array]"===ft(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?st:function(){throw new Error("not implemented")},gt=r();var dt=Object.prototype.toString;var bt="function"==typeof Symbol?Symbol:void 0,mt="function"==typeof bt?bt.toStringTag:"";var ht=gt&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return dt.call(r);n=r[mt],t=o(r,mt);try{r[mt]=void 0}catch(t){return dt.call(r)}return e=dt.call(r),t?r[mt]=n:delete r[mt],e}:function(r){return dt.call(r)},wt="function"==typeof Uint8ClampedArray;var St="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var At="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var jt=function(){var r,t,n;if("function"!=typeof St)return!1;try{t=new St([-1,0,1,3.14,4.99,255,256]),n=t,r=(wt&&n instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===ht(n))&&0===t[0]&&0===t[1]&&1===t[2]&&3===t[3]&&5===t[4]&&255===t[5]&&255===t[6]}catch(t){r=!1}return r}()?At:function(){throw new Error("not implemented")},Tt=r();var It=Object.prototype.toString;var Et="function"==typeof Symbol?Symbol:void 0,Ut="function"==typeof Et?Et.toStringTag:"";var _t=Tt&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return It.call(r);n=r[Ut],t=o(r,Ut);try{r[Ut]=void 0}catch(t){return It.call(r)}return e=It.call(r),t?r[Ut]=n:delete r[Ut],e}:function(r){return It.call(r)},Ot="function"==typeof Int16Array;var Ft="function"==typeof Int16Array?Int16Array:null;var xt="function"==typeof Int16Array?Int16Array:void 0;var kt=function(){var r,t,n;if("function"!=typeof Ft)return!1;try{t=new Ft([1,3.14,-3.14,32768]),n=t,r=(Ot&&n instanceof Int16Array||"[object Int16Array]"===_t(n))&&1===t[0]&&3===t[1]&&-3===t[2]&&-32768===t[3]}catch(t){r=!1}return r}()?xt:function(){throw new Error("not implemented")},Ct=r();var Vt=Object.prototype.toString;var Pt="function"==typeof Symbol?Symbol:void 0,$t="function"==typeof Pt?Pt.toStringTag:"";var Nt=Ct&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return Vt.call(r);n=r[$t],t=o(r,$t);try{r[$t]=void 0}catch(t){return Vt.call(r)}return e=Vt.call(r),t?r[$t]=n:delete r[$t],e}:function(r){return Vt.call(r)},Bt="function"==typeof Uint16Array;var Rt="function"==typeof Uint16Array?Uint16Array:null;var Lt="function"==typeof Uint16Array?Uint16Array:void 0;var Gt=function(){var r,t,n;if("function"!=typeof Rt)return!1;try{t=new Rt(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Bt&&n instanceof Uint16Array||"[object Uint16Array]"===Nt(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Lt:function(){throw new Error("not implemented")},Mt=r();var Zt=Object.prototype.toString;var Wt="function"==typeof Symbol?Symbol:void 0,Xt="function"==typeof Wt?Wt.toStringTag:"";var zt=Mt&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return Zt.call(r);n=r[Xt],t=o(r,Xt);try{r[Xt]=void 0}catch(t){return Zt.call(r)}return e=Zt.call(r),t?r[Xt]=n:delete r[Xt],e}:function(r){return Zt.call(r)},Yt="function"==typeof Int32Array;var qt="function"==typeof Int32Array?Int32Array:null;var Dt="function"==typeof Int32Array?Int32Array:void 0;var Ht=function(){var r,t,n;if("function"!=typeof qt)return!1;try{t=new qt([1,3.14,-3.14,2147483648]),n=t,r=(Yt&&n instanceof Int32Array||"[object Int32Array]"===zt(n))&&1===t[0]&&3===t[1]&&-3===t[2]&&-2147483648===t[3]}catch(t){r=!1}return r}()?Dt:function(){throw new Error("not implemented")},Jt=r();var Kt=Object.prototype.toString;var Qt="function"==typeof Symbol?Symbol:void 0,rn="function"==typeof Qt?Qt.toStringTag:"";var tn=Jt&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return Kt.call(r);n=r[rn],t=o(r,rn);try{r[rn]=void 0}catch(t){return Kt.call(r)}return e=Kt.call(r),t?r[rn]=n:delete r[rn],e}:function(r){return Kt.call(r)},nn="function"==typeof Uint32Array;var en="function"==typeof Uint32Array?Uint32Array:null;var on="function"==typeof Uint32Array?Uint32Array:void 0;var an=function(){var r,t,n;if("function"!=typeof en)return!1;try{t=new en(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(nn&&n instanceof Uint32Array||"[object Uint32Array]"===tn(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?on:function(){throw new Error("not implemented")},cn=r();var ln=Object.prototype.toString;var un="function"==typeof Symbol?Symbol:void 0,fn="function"==typeof un?un.toStringTag:"";var yn=cn&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return ln.call(r);n=r[fn],t=o(r,fn);try{r[fn]=void 0}catch(t){return ln.call(r)}return e=ln.call(r),t?r[fn]=n:delete r[fn],e}:function(r){return ln.call(r)},pn="function"==typeof Float32Array;var sn=Number.POSITIVE_INFINITY,vn="function"==typeof Float32Array?Float32Array:null;var gn="function"==typeof Float32Array?Float32Array:void 0;var dn=[Hr,function(){var r,t,n;if("function"!=typeof vn)return!1;try{t=new vn([1,3.14,-3.14,5e40]),n=t,r=(pn&&n instanceof Float32Array||"[object Float32Array]"===yn(n))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===sn}catch(t){r=!1}return r}()?gn:function(){throw new Error("not implemented")},Ht,an,kt,Gt,it,vt,jt],bn=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],mn=qr()?Lr(Hr):hn;function hn(){}return mn="TypedArray"===function(r){if(!1===_r(r))throw new TypeError(L("invalid argument. Must provide a function. Value: `%s`.",r));return Fr?r.name:H.exec(r.toString())[1]}(mn)?mn:hn,function(r){if("function"!=typeof r)throw new TypeError(L("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!function(r){var t,n;if("object"!=typeof r||null===r)return!1;if(r instanceof mn)return!0;for(n=0;n<dn.length;n++)if(r instanceof dn[n])return!0;for(;r;){for(t=or(r),n=0;n<bn.length;n++)if(bn[n]===t)return!0;r=Lr(r)}return!1}(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}}));
//# sourceMappingURL=index.js.map
