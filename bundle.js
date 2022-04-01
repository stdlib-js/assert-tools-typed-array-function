// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).typedarrayfcn=t()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}var t=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var e=function(){return t&&"symbol"==typeof Symbol.toStringTag},n=Object.prototype.toString,i=n;var o=function(r){return i.call(r)},a=Object.prototype.hasOwnProperty;var u=function(r,t){return null!=r&&a.call(r,t)},c="function"==typeof Symbol?Symbol.toStringTag:"",f=u,l=c,s=n;var p=o,y=function(r){var t,e,n;if(null==r)return s.call(r);e=r[l],t=f(r,l);try{r[l]=void 0}catch(t){return s.call(r)}return n=s.call(r),t?r[l]=e:delete r[l],n},v=e()?y:p,g="function"==typeof Object.defineProperty?Object.defineProperty:null;var d=function(){try{return g({},"x",{}),!0}catch(r){return!1}},m=Object.defineProperty,h=Object.prototype,b=h.toString,w=h.__defineGetter__,A=h.__defineSetter__,j=h.__lookupGetter__,E=h.__lookupSetter__;var P=function(r,t,e){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===b.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===b.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((i="value"in e)&&(j.call(r,t)||E.call(r,t)?(n=r.__proto__,r.__proto__=h,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),o="get"in e,a="set"in e,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&w&&w.call(r,t,e.get),a&&A&&A.call(r,t,e.set),r},_=m,I=P,O=d()?_:I;var T=function(r,t,e){O(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})},U=T;var x=function(){return/^\s*function\s*([^(]*)/i},F=x;U(F,"REGEXP",x());var V=F,S=v;var k=Array.isArray?Array.isArray:function(r){return"[object Array]"===S(r)};var C=function(r){return null!==r&&"object"==typeof r};U(C,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!k(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(C));var R=C;var M=v,$=V.REGEXP,N=function(r){return R(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var G=function(r){var t,e,n;if(("Object"===(e=M(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=$.exec(n.toString()))return t[1]}return N(r)?"Buffer":e},B=G,L=/./;var X=function(r){return"boolean"==typeof r},Z=Boolean.prototype.toString;var W=v,z=function(r){try{return Z.call(r),!0}catch(r){return!1}},Y=e();var D=function(r){return"object"==typeof r&&(r instanceof Boolean||(Y?z(r):"[object Boolean]"===W(r)))},q=X,H=D;var J=U,K=function(r){return q(r)||H(r)},Q=D;J(K,"isPrimitive",X),J(K,"isObject",Q);var rr=K;var tr=function(){return new Function("return this;")()},er="object"==typeof self?self:null,nr="object"==typeof window?window:null,ir="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},or="object"==typeof ir?ir:null;module.exports=or;var ar=rr.isPrimitive,ur=tr,cr=er,fr=nr,lr=r(Object.freeze({__proto__:null}));var sr=function(r){if(arguments.length){if(!ar(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return ur()}if(cr)return cr;if(fr)return fr;if(lr)return lr;throw new Error("unexpected error. Unable to resolve global object.")},pr=sr(),yr=pr.document&&pr.document.childNodes,vr=Int8Array,gr=L,dr=yr,mr=vr;var hr=B;var br=B;var wr=function(r){var t;return null===r?"null":"object"===(t=typeof r)?hr(r).toLowerCase():t},Ar=function(r){return br(r).toLowerCase()},jr=function(){return"function"==typeof gr||"object"==typeof mr||"function"==typeof dr}()?Ar:wr;var Er=function(r){return"function"===jr(r)};var Pr=function(){};var _r=Er,Ir=V.REGEXP,Or=function(){return"foo"===Pr.name}();var Tr=function(r){if(!1===_r(r))throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return Or?r.name:Ir.exec(r.toString())[1]},Ur=Object.getPrototypeOf;var xr=function(r){return r.__proto__},Fr=v,Vr=xr;var Sr=function(r){var t=Vr(r);return t||null===t?t:"[object Function]"===Fr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},kr=Ur,Cr=Sr,Rr=Er(Object.getPrototypeOf)?kr:Cr;var Mr=function(r){return null==r?null:(r=Object(r),Rr(r))},$r=v,Nr="function"==typeof Float64Array;var Gr="function"==typeof Float64Array?Float64Array:null,Br=function(r){return Nr&&r instanceof Float64Array||"[object Float64Array]"===$r(r)},Lr=Gr;var Xr=function(){var r,t;if("function"!=typeof Lr)return!1;try{t=new Lr([1,3.14,-3.14,NaN]),r=Br(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var Zr="function"==typeof Float64Array?Float64Array:void 0,Wr=function(){throw new Error("not implemented")},zr=Xr()?Zr:Wr,Yr=v,Dr="function"==typeof Int8Array;var qr="function"==typeof Int8Array?Int8Array:null,Hr=function(r){return Dr&&r instanceof Int8Array||"[object Int8Array]"===Yr(r)},Jr=qr;var Kr="function"==typeof Int8Array?Int8Array:void 0,Qr=function(){throw new Error("not implemented")},rt=function(){var r,t;if("function"!=typeof Jr)return!1;try{t=new Jr([1,3.14,-3.14,128]),r=Hr(t)&&1===t[0]&&3===t[1]&&-3===t[2]&&-128===t[3]}catch(t){r=!1}return r}()?Kr:Qr,tt=v,et="function"==typeof Uint8Array;var nt="function"==typeof Uint8Array?Uint8Array:null,it=function(r){return et&&r instanceof Uint8Array||"[object Uint8Array]"===tt(r)},ot=nt;var at="function"==typeof Uint8Array?Uint8Array:void 0,ut=function(){throw new Error("not implemented")},ct=function(){var r,t;if("function"!=typeof ot)return!1;try{t=new ot(t=[1,3.14,-3.14,256,257]),r=it(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?at:ut,ft=v,lt="function"==typeof Uint8ClampedArray;var st="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null,pt=function(r){return lt&&r instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===ft(r)},yt=st;var vt="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0,gt=function(){throw new Error("not implemented")},dt=function(){var r,t;if("function"!=typeof yt)return!1;try{t=new yt([-1,0,1,3.14,4.99,255,256]),r=pt(t)&&0===t[0]&&0===t[1]&&1===t[2]&&3===t[3]&&5===t[4]&&255===t[5]&&255===t[6]}catch(t){r=!1}return r}()?vt:gt,mt=v,ht="function"==typeof Int16Array;var bt="function"==typeof Int16Array?Int16Array:null,wt=function(r){return ht&&r instanceof Int16Array||"[object Int16Array]"===mt(r)},At=bt;var jt="function"==typeof Int16Array?Int16Array:void 0,Et=function(){throw new Error("not implemented")},Pt=function(){var r,t;if("function"!=typeof At)return!1;try{t=new At([1,3.14,-3.14,32768]),r=wt(t)&&1===t[0]&&3===t[1]&&-3===t[2]&&-32768===t[3]}catch(t){r=!1}return r}()?jt:Et,_t=v,It="function"==typeof Uint16Array;var Ot="function"==typeof Uint16Array?Uint16Array:null,Tt=function(r){return It&&r instanceof Uint16Array||"[object Uint16Array]"===_t(r)},Ut=Ot;var xt="function"==typeof Uint16Array?Uint16Array:void 0,Ft=function(){throw new Error("not implemented")},Vt=function(){var r,t;if("function"!=typeof Ut)return!1;try{t=new Ut(t=[1,3.14,-3.14,65536,65537]),r=Tt(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?xt:Ft,St=v,kt="function"==typeof Int32Array;var Ct="function"==typeof Int32Array?Int32Array:null,Rt=function(r){return kt&&r instanceof Int32Array||"[object Int32Array]"===St(r)},Mt=Ct;var $t="function"==typeof Int32Array?Int32Array:void 0,Nt=function(){throw new Error("not implemented")},Gt=function(){var r,t;if("function"!=typeof Mt)return!1;try{t=new Mt([1,3.14,-3.14,2147483648]),r=Rt(t)&&1===t[0]&&3===t[1]&&-3===t[2]&&-2147483648===t[3]}catch(t){r=!1}return r}()?$t:Nt,Bt=v,Lt="function"==typeof Uint32Array;var Xt="function"==typeof Uint32Array?Uint32Array:null,Zt=function(r){return Lt&&r instanceof Uint32Array||"[object Uint32Array]"===Bt(r)},Wt=Xt;var zt="function"==typeof Uint32Array?Uint32Array:void 0,Yt=function(){throw new Error("not implemented")},Dt=function(){var r,t;if("function"!=typeof Wt)return!1;try{t=new Wt(t=[1,3.14,-3.14,4294967296,4294967297]),r=Zt(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?zt:Yt,qt=v,Ht="function"==typeof Float32Array;var Jt=function(r){return Ht&&r instanceof Float32Array||"[object Float32Array]"===qt(r)},Kt=Number.POSITIVE_INFINITY,Qt="function"==typeof Float32Array?Float32Array:null,re=Jt,te=Kt,ee=Qt;var ne,ie="function"==typeof Float32Array?Float32Array:void 0,oe=function(){throw new Error("not implemented")};ne=function(){var r,t;if("function"!=typeof ee)return!1;try{t=new ee([1,3.14,-3.14,5e40]),r=re(t)&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===te}catch(t){r=!1}return r}()?ie:oe;var ae=B,ue=Tr,ce=Mr,fe=zr,le=[zr,ne,Gt,Dt,Pt,Vt,rt,ct,dt],se=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],pe=Xr()?ce(fe):ye;function ye(){}pe="TypedArray"===ue(pe)?pe:ye;var ve=function(r){var t,e;if("object"!=typeof r||null===r)return!1;if(r instanceof pe)return!0;for(e=0;e<le.length;e++)if(r instanceof le[e])return!0;for(;r;){for(t=ae(r),e=0;e<se.length;e++)if(se[e]===t)return!0;r=ce(r)}return!1};var ge=function(r){return"string"==typeof r},de=String.prototype.valueOf;var me=v,he=function(r){try{return de.call(r),!0}catch(r){return!1}},be=e();var we=function(r){return"object"==typeof r&&(r instanceof String||(be?he(r):"[object String]"===me(r)))},Ae=ge,je=we;var Ee=U,Pe=function(r){return Ae(r)||je(r)},_e=we;Ee(Pe,"isPrimitive",ge),Ee(Pe,"isObject",_e);var Ie=Pe,Oe=Math.floor;var Te=function(r){return Oe(r)===r},Ue=Te;var xe=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Ue(r.length)&&r.length>=0&&r.length<=9007199254740991};var Fe=function(r){return"number"==typeof r},Ve=Number,Se=Ve.prototype.toString;var ke=v,Ce=Ve,Re=function(r){try{return Se.call(r),!0}catch(r){return!1}},Me=e();var $e=function(r){return"object"==typeof r&&(r instanceof Ce||(Me?Re(r):"[object Number]"===ke(r)))},Ne=Fe,Ge=$e;var Be=U,Le=function(r){return Ne(r)||Ge(r)},Xe=$e;Be(Le,"isPrimitive",Fe),Be(Le,"isObject",Xe);var Ze=Le,We=Ve.NEGATIVE_INFINITY,ze=Kt,Ye=We,De=Te;var qe=function(r){return r<ze&&r>Ye&&De(r)},He=Ze.isPrimitive,Je=qe;var Ke=function(r){return He(r)&&Je(r)},Qe=Ze.isObject,rn=qe;var tn=function(r){return Qe(r)&&rn(r.valueOf())},en=Ke,nn=tn;var on=U,an=function(r){return en(r)||nn(r)},un=tn;on(an,"isPrimitive",Ke),on(an,"isObject",un);var cn=an;var fn=function(r){return r!=r},ln=Ze.isPrimitive,sn=fn;var pn=function(r){return ln(r)&&sn(r)},yn=Ze.isObject,vn=fn;var gn=function(r){return yn(r)&&vn(r.valueOf())},dn=pn,mn=gn;var hn=U,bn=function(r){return dn(r)||mn(r)},wn=gn;hn(bn,"isPrimitive",pn),hn(bn,"isObject",wn);var An=xe,jn=cn.isPrimitive,En=Ie.isPrimitive,Pn=bn.isPrimitive;var _n=function(r,t,e){var n,i,o;if(!An(r)&&!En(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!jn(e))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+e+"`.");(i=e)<0&&(i=0)}else i=0;if(En(r)){if(!En(t))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+t+"`.");return-1!==r.indexOf(t,i)}if(n=r.length,Pn(t)){for(o=i;o<n;o++)if(Pn(r[o]))return!0;return!1}for(o=i;o<n;o++)if(r[o]===t)return!0;return!1},In=_n,On=Ie.isPrimitive;var Tn=function(r){if(!On(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Un=Ie.isPrimitive;var xn=function(r){if(!Un(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},Fn=Tn,Vn=xn,Sn=Ie.isPrimitive;var kn=function(r){return Sn(r)&&r===Vn(r)&&r!==Fn(r)},Cn=Kt,Rn=We;var Mn=function(r){return r==r&&r>Rn&&r<Cn},$n=cn.isPrimitive;var Nn=function(r){return $n(r)&&r>=0},Gn=cn.isObject;var Bn=function(r){return Gn(r)&&r.valueOf()>=0},Ln=Nn,Xn=Bn;var Zn=U,Wn=function(r){return Ln(r)||Xn(r)},zn=Bn;Zn(Wn,"isPrimitive",Nn),Zn(Wn,"isObject",zn);var Yn=Wn.isPrimitive,Dn=Ie.isPrimitive;var qn=function(r,t){var e,n;if(!Dn(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!Yn(t))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+t+"`.");if(0===r.length||0===t)return"";if(r.length*t>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(e="",n=t;1==(1&n)&&(e+=r),0!==(n>>>=1);)r+=r;return e},Hn=cn.isPrimitive,Jn=Ie.isPrimitive;var Kn=function(r,t,e){var n,i;if(!Jn(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!Jn(t))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+t+"`.");if(arguments.length>2){if(!Hn(e))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+e+"`.");n=e<0?r.length+e:e}else n=0;if(0===t.length)return!0;if(n<0||n+t.length>r.length)return!1;for(i=0;i<t.length;i++)if(r.charCodeAt(n+i)!==t.charCodeAt(i))return!1;return!0},Qn=qn,ri=Kn;var ti=function(r,t,e){var n=!1,i=t-r.length;return i<0||(ri(r,"-")&&(n=!0,r=r.substr(1)),r=e?r+Qn("0",i):Qn("0",i)+r,n&&(r="-"+r)),r},ei=kn,ni=xn,ii=Tn,oi=Mn,ai=Ze.isPrimitive,ui=ti;var ci=function(r){var t,e,n;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,n=parseInt(e,10),!oi(n)){if(!ai(e))throw new Error("invalid integer. Value: "+e);n=0}return n<0&&("u"===r.specifier||10!==t)&&(n=4294967295+n+1),n<0?(e=(-n).toString(t),r.precision&&(e=ui(e,r.precision,r.padRight)),e="-"+e):(e=n.toString(t),n||r.precision?r.precision&&(e=ui(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=ei(r.specifier)?ni(e):ii(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e},fi=Ie.isPrimitive,li=/[-\/\\^$*+?.()|[\]{}]/g;var si=function(r){var t,e;if(!fi(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(e=r.length-1;e>=0&&"/"!==r[e];e--);return void 0===e||e<=0?r.replace(li,"\\$&"):(t=(t=r.substring(1,e)).replace(li,"\\$&"),r=r[0]+t+r.substring(e))},pi=RegExp.prototype.exec;var yi=v,vi=function(r){try{return pi.call(r),!0}catch(r){return!1}},gi=e();var di=si,mi=Er,hi=Ie.isPrimitive,bi=function(r){return"object"==typeof r&&(r instanceof RegExp||(gi?vi(r):"[object RegExp]"===yi(r)))};var wi=kn,Ai=xn,ji=Tn,Ei=function(r,t,e){if(!hi(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(hi(t))t=di(t),t=new RegExp(t,"g");else if(!bi(t))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+t+"`.");if(!hi(e)&&!mi(e))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+e+"`.");return r.replace(t,e)},Pi=Mn,_i=Ze.isPrimitive,Ii=function(r){return Math.abs(r)},Oi=/e\+(\d)$/,Ti=/e-(\d)$/,Ui=/^(\d+)$/,xi=/^(\d+)e/,Fi=/\.0$/,Vi=/\.0*e/,Si=/(\..*[^0])0*e/;var ki=function(r){var t,e,n=parseFloat(r.arg);if(!Pi(n)){if(!_i(r.arg))throw new Error("invalid floating-point number. Value: "+e);n=r.arg}switch(r.specifier){case"e":case"E":e=n.toExponential(r.precision);break;case"f":case"F":e=n.toFixed(r.precision);break;case"g":case"G":Ii(n)<1e-4?((t=r.precision)>0&&(t-=1),e=n.toExponential(t)):e=n.toPrecision(r.precision),r.alternate||(e=Ei(e,Si,"$1e"),e=Ei(e,Vi,"e"),e=Ei(e,Fi,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=Ei(e,Oi,"e+0$1"),e=Ei(e,Ti,"e-0$1"),r.alternate&&(e=Ei(e,Ui,"$1."),e=Ei(e,xi,"$1.e")),n>=0&&r.sign&&(e=r.sign+e),e=wi(r.specifier)?Ai(e):ji(e)},Ci=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var Ri=qn;var Mi=Ie.isPrimitive,$i=In,Ni=fn,Gi=ci,Bi=ki,Li=function(r){var t,e,n,i,o;for(t=0,n=[],o=Ci.exec(r);o;)(e=r.slice(t,Ci.lastIndex-o[0].length)).length&&n.push(e),(i=a(o,n.length))&&n.push(i),t=Ci.lastIndex,o=Ci.exec(r);return(e=r.slice(t)).length&&n.push(e),n;function a(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},Xi=function(r,t,e){var n=t-r.length;return n<0?r:r=e?r+Ri(" ",n):Ri(" ",n)+r},Zi=ti,Wi=String.fromCharCode;var zi=function(r){var t,e,n,i,o,a,u,c,f;if(!Mi(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(t=Li(r),a="",u=1,c=0;c<t.length;c++)if(n=t[c],Mi(n))a+=n;else{for(n.mapping&&(u=n.mapping),e=n.flags,f=0;f<e.length;f++)switch(i=e.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!$i(e,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Ni(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,Ni(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=Gi(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!Ni(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Ni(o)?String(n.arg):Wi(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=Bi(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Zi(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Xi(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a},Yi=ve,Di=zi;return function(r){if("function"!=typeof r)throw new TypeError(Di("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!Yi(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}}));
//# sourceMappingURL=bundle.js.map
