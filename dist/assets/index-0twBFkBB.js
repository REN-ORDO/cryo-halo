(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var ns=typeof self<"u"?self:{};function lr(){throw Error("Invalid UTF8")}function Gh(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}let ya,rc;const eg=typeof TextDecoder<"u";let tg;const ng=typeof TextEncoder<"u";function sp(t){if(ng)t=(tg||=new TextEncoder).encode(t);else{let n=0;const i=new Uint8Array(3*t.length);for(let r=0;r<t.length;r++){var e=t.charCodeAt(r);if(e<128)i[n++]=e;else{if(e<2048)i[n++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&r<t.length){const s=t.charCodeAt(++r);if(s>=56320&&s<=57343){e=1024*(e-55296)+s-56320+65536,i[n++]=e>>18|240,i[n++]=e>>12&63|128,i[n++]=e>>6&63|128,i[n++]=63&e|128;continue}r--}e=65533}i[n++]=e>>12|224,i[n++]=e>>6&63|128}i[n++]=63&e|128}}t=n===i.length?i:i.subarray(0,n)}return t}var pu,lo;e:{for(var Hh=["CLOSURE_FLAGS"],sc=ns,ac=0;ac<Hh.length;ac++)if((sc=sc[Hh[ac]])==null){lo=null;break e}lo=sc}var ea,Wh=lo&&lo[610401301];pu=Wh!=null&&Wh;const Xh=ns.navigator;function Jc(t){return!!pu&&!!ea&&ea.brands.some((({brand:e})=>e&&e.indexOf(t)!=-1))}function Nn(t){var e;return(e=ns.navigator)&&(e=e.userAgent)||(e=""),e.indexOf(t)!=-1}function Yi(){return!!pu&&!!ea&&ea.brands.length>0}function oc(){return Yi()?Jc("Chromium"):(Nn("Chrome")||Nn("CriOS"))&&!(!Yi()&&Nn("Edge"))||Nn("Silk")}function Mo(t){return Mo[" "](t),t}ea=Xh&&Xh.userAgentData||null,Mo[" "]=function(){};var ig=!Yi()&&(Nn("Trident")||Nn("MSIE"));!Nn("Android")||oc(),oc(),Nn("Safari")&&(oc()||!Yi()&&Nn("Coast")||!Yi()&&Nn("Opera")||!Yi()&&Nn("Edge")||(Yi()?Jc("Microsoft Edge"):Nn("Edg/"))||Yi()&&Jc("Opera"));var ap={},Vs=null;function rg(t){const e=t.length;let n=3*e/4;n%3?n=Math.floor(n):"=.".indexOf(t[e-1])!=-1&&(n="=.".indexOf(t[e-2])!=-1?n-2:n-1);const i=new Uint8Array(n);let r=0;return(function(s,a){function o(l){for(;c<s.length;){const u=s.charAt(c++),h=Vs[u];if(h!=null)return h;if(!/^[\s\xa0]*$/.test(u))throw Error("Unknown base64 encoding at char: "+u)}return l}op();let c=0;for(;;){const l=o(-1),u=o(0),h=o(64),d=o(64);if(d===64&&l===-1)break;a(l<<2|u>>4),h!=64&&(a(u<<4&240|h>>2),d!=64&&a(h<<6&192|d))}})(t,(function(s){i[r++]=s})),r!==n?i.subarray(0,r):i}function op(){if(!Vs){Vs={};var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){const i=t.concat(e[n].split(""));ap[n]=i;for(let r=0;r<i.length;r++){const s=i[r];Vs[s]===void 0&&(Vs[s]=r)}}}}var cp=typeof Uint8Array<"u",lp=!ig&&typeof btoa=="function";function qh(t){if(!lp){var e;e===void 0&&(e=0),op(),e=ap[e];var n=Array(Math.floor(t.length/3)),i=e[64]||"";let c=0,l=0;for(;c<t.length-2;c+=3){var r=t[c],s=t[c+1],a=t[c+2],o=e[r>>2];r=e[(3&r)<<4|s>>4],s=e[(15&s)<<2|a>>6],a=e[63&a],n[l++]=o+r+s+a}switch(o=0,a=i,t.length-c){case 2:a=e[(15&(o=t[c+1]))<<2]||i;case 1:t=t[c],n[l]=e[t>>2]+e[(3&t)<<4|o>>4]+a+i}return n.join("")}for(e="",n=0,i=t.length-10240;n<i;)e+=String.fromCharCode.apply(null,t.subarray(n,n+=10240));return e+=String.fromCharCode.apply(null,n?t.subarray(n):t),btoa(e)}const Yh=/[-_.]/g,sg={"-":"+",_:"/",".":"="};function ag(t){return sg[t]||""}function up(t){if(!lp)return rg(t);Yh.test(t)&&(t=t.replace(Yh,ag)),t=atob(t);const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function br(t){return cp&&t!=null&&t instanceof Uint8Array}var is={};function Ar(){return og||=new Ci(null,is)}function mu(t){hp(is);var e=t.g;return(e=e==null||br(e)?e:typeof e=="string"?up(e):null)==null?e:t.g=e}var Ci=class{h(){return new Uint8Array(mu(this)||0)}constructor(t,e){if(hp(e),this.g=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}};let og,cg;function hp(t){if(t!==is)throw Error("illegal external caller")}function fp(t,e){t.__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity=e}function $c(t){return fp(t=Error(t),"warning"),t}function gu(t){if(t!=null){var e=cg??={},n=e[t]||0;n>=5||(e[t]=n+1,fp(t=Error(),"incident"),(function(i){ns.setTimeout((()=>{throw i}),0)})(t))}}var yo=typeof Symbol=="function"&&typeof Symbol()=="symbol";function xs(t,e,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&t?Symbol.for(t):t!=null?Symbol(t):Symbol():e}var lg=xs("jas",void 0,!0),Kh=xs(void 0,"0di"),Ds=xs(void 0,"1oa"),rs=xs(void 0,Symbol()),ug=xs(void 0,"0actk"),dp=xs(void 0,"8utk");const Ie=yo?lg:"Ea",pp={Ea:{value:0,configurable:!0,writable:!0,enumerable:!1}},mp=Object.defineProperties;function Eo(t,e){yo||Ie in t||mp(t,pp),t[Ie]|=e}function Bt(t,e){yo||Ie in t||mp(t,pp),t[Ie]=e}function Ss(t){return Eo(t,34),t}function hg(t,e){Bt(e,-15615&(0|t))}function Qc(t,e){Bt(e,-15581&(34|t))}function To(){return typeof BigInt=="function"}function fn(t){return Array.prototype.slice.call(t)}var _u,pa={};function bo(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)&&t.constructor===Object}function vu(t,e){if(t!=null){if(typeof t=="string")t=t?new Ci(t,is):Ar();else if(t.constructor!==Ci)if(br(t))t=t.length?new Ci(new Uint8Array(t),is):Ar();else{if(!e)throw Error();t=void 0}}return t}const jh=[];function rr(t){if(2&t)throw Error()}Bt(jh,55),_u=Object.freeze(jh);class Zh{constructor(e,n,i){this.g=e,this.h=n,this.l=i}next(){const e=this.g.next();return e.done||(e.value=this.h.call(this.l,e.value)),e}[Symbol.iterator](){return this}}function xu(t){return rs?t[rs]:void 0}var fg=Object.freeze({});function Ao(t){return t.Na=!0,t}var dg=Ao((t=>typeof t=="number")),Jh=Ao((t=>typeof t=="string")),pg=Ao((t=>typeof t=="boolean")),wo=typeof ns.BigInt=="function"&&typeof ns.BigInt(0)=="bigint";function Ji(t){var e=t;if(Jh(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(dg(e)&&!Number.isSafeInteger(e))throw Error(String(e));return wo?BigInt(t):t=pg(t)?t?"1":"0":Jh(t)?t.trim()||"0":String(t)}var el=Ao((t=>wo?t>=gg&&t<=vg:t[0]==="-"?$h(t,mg):$h(t,_g)));const mg=Number.MIN_SAFE_INTEGER.toString(),gg=wo?BigInt(Number.MIN_SAFE_INTEGER):void 0,_g=Number.MAX_SAFE_INTEGER.toString(),vg=wo?BigInt(Number.MAX_SAFE_INTEGER):void 0;function $h(t,e){if(t.length>e.length)return!1;if(t.length<e.length||t===e)return!0;for(let n=0;n<t.length;n++){const i=t[n],r=e[n];if(i>r)return!1;if(i<r)return!0}}const xg=typeof Uint8Array.prototype.slice=="function";let gp,_t=0,Lt=0;function Qh(t){const e=t>>>0;_t=e,Lt=(t-e)/4294967296>>>0}function wr(t){if(t<0){Qh(-t);const[e,n]=Eu(_t,Lt);_t=e>>>0,Lt=n>>>0}else Qh(t)}function Su(t){const e=gp||=new DataView(new ArrayBuffer(8));e.setFloat32(0,+t,!0),Lt=0,_t=e.getUint32(0,!0)}function Mu(t,e){const n=4294967296*e+(t>>>0);return Number.isSafeInteger(n)?n:ta(t,e)}function yu(t,e){const n=2147483648&e;return n&&(e=~e>>>0,(t=1+~t>>>0)==0&&(e=e+1>>>0)),typeof(t=Mu(t,e))=="number"?n?-t:t:n?"-"+t:t}function ta(t,e){if(t>>>=0,(e>>>=0)<=2097151)var n=""+(4294967296*e+t);else To()?n=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(n=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),n+=8147497*e,e*=2,t>=1e7&&(n+=t/1e7>>>0,t%=1e7),n>=1e7&&(e+=n/1e7>>>0,n%=1e7),n=e+ef(n)+ef(t));return n}function ef(t){return t=String(t),"0000000".slice(t.length)+t}function _p(){var t=_t,e=Lt;if(2147483648&e)if(To())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else{const[n,i]=Eu(t,e);t="-"+ta(n,i)}else t=ta(t,e);return t}function Ro(t){if(t.length<16)wr(Number(t));else if(To())t=BigInt(t),_t=Number(t&BigInt(4294967295))>>>0,Lt=Number(t>>BigInt(32)&BigInt(4294967295));else{const e=+(t[0]==="-");Lt=_t=0;const n=t.length;for(let i=e,r=(n-e)%6+e;r<=n;i=r,r+=6){const s=Number(t.slice(i,r));Lt*=1e6,_t=1e6*_t+s,_t>=4294967296&&(Lt+=Math.trunc(_t/4294967296),Lt>>>=0,_t>>>=0)}if(e){const[i,r]=Eu(_t,Lt);_t=i,Lt=r}}}function Eu(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}const na=typeof BigInt=="function"?BigInt.asIntN:void 0,Sg=typeof BigInt=="function"?BigInt.asUintN:void 0,$i=Number.isSafeInteger,Co=Number.isFinite,ss=Math.trunc,Mg=Ji(0);function sr(t){return t==null||typeof t=="number"?t:t==="NaN"||t==="Infinity"||t==="-Infinity"?Number(t):void 0}function vp(t){return t==null||typeof t=="boolean"?t:typeof t=="number"?!!t:void 0}const yg=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function ia(t){switch(typeof t){case"bigint":return!0;case"number":return Co(t);case"string":return yg.test(t);default:return!1}}function Ms(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return Co(t)?0|t:void 0}function xp(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return Co(t)?t>>>0:void 0}function tf(t){if(t[0]==="-")return!1;const e=t.length;return e<20||e===20&&Number(t.substring(0,6))<184467}function Sp(t){const e=t.length;return t[0]==="-"?e<20||e===20&&Number(t.substring(0,7))>-922337:e<19||e===19&&Number(t.substring(0,6))<922337}function Mp(t){return Sp(t)?t:(Ro(t),_p())}function Tu(t){return t=ss(t),$i(t)||(wr(t),t=yu(_t,Lt)),t}function yp(t){var e=ss(Number(t));return $i(e)?String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),Mp(t))}function nf(t){var e=ss(Number(t));return $i(e)?Ji(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),To()?Ji(na(64,BigInt(t))):Ji(Mp(t)))}function rf(t){if($i(t))t=Ji(Tu(t));else{if(t=ss(t),$i(t))t=String(t);else{const e=String(t);Sp(e)?t=e:(wr(t),t=_p())}t=Ji(t)}return t}function tl(t){return t==null?t:typeof t=="bigint"?(el(t)?t=Number(t):(t=na(64,t),t=el(t)?Number(t):String(t)),t):ia(t)?typeof t=="number"?Tu(t):yp(t):void 0}function Eg(t){if(t==null)return t;var e=typeof t;if(e==="bigint")return String(Sg(64,t));if(ia(t)){if(e==="string")return e=ss(Number(t)),$i(e)&&e>=0?t=String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),tf(t)||(Ro(t),t=ta(_t,Lt))),t;if(e==="number")return(t=ss(t))>=0&&$i(t)?t:(function(n){if(n<0){wr(n);var i=ta(_t,Lt);return n=Number(i),$i(n)?n:i}return tf(i=String(n))?i:(wr(n),Mu(_t,Lt))})(t)}}function Ep(t){if(typeof t!="string")throw Error();return t}function ys(t){if(t!=null&&typeof t!="string")throw Error();return t}function as(t){return t==null||typeof t=="string"?t:void 0}function bu(t,e,n,i){if(t!=null&&typeof t=="object"&&t.W===pa)return t;if(!Array.isArray(t))return n?2&i?((t=e[Kh])||(Ss((t=new e).u),t=e[Kh]=t),e=t):e=new e:e=void 0,e;let r=n=0|t[Ie];return r===0&&(r|=32&i),r|=2&i,r!==n&&Bt(t,r),new e(t)}function Tg(t,e,n){if(e)e:{if(!ia(e=t))throw $c("int64");switch(typeof e){case"string":e=nf(e);break e;case"bigint":e=Ji(na(64,e));break e;default:e=rf(e)}}else t=typeof(e=t),e=e==null?e:t==="bigint"?Ji(na(64,e)):ia(e)?t==="string"?nf(e):rf(e):void 0;return(t=e)==null?n?Mg:void 0:t}function bg(t){return t}const Ag={};let wg=(function(){try{return Mo(new class extends Map{constructor(){super()}}),!1}catch{return!0}})();class cc{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,n){return this.g.set(e,n),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,n){return this.g.forEach(e,n)}[Symbol.iterator](){return this.entries()}}const Rg=wg?(Object.setPrototypeOf(cc.prototype,Map.prototype),Object.defineProperties(cc.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),cc):class extends Map{constructor(){super()}};function sf(t){return t}function lc(t){if(2&t.M)throw Error("Cannot mutate an immutable Map")}var hi=class extends Rg{constructor(t,e,n=sf,i=sf){super();let r=0|t[Ie];r|=64,Bt(t,r),this.M=r,this.I=e,this.S=n,this.X=this.I?Cg:i;for(let s=0;s<t.length;s++){const a=t[s],o=n(a[0],!1,!0);let c=a[1];e?c===void 0&&(c=null):c=i(a[1],!1,!0,void 0,void 0,r),super.set(o,c)}}La(){var t=Ug;if(this.size!==0)return Array.from(super.entries(),(e=>(e[0]=t(e[0]),e[1]=t(e[1]),e)))}da(t=Pg){const e=[],n=super.entries();for(var i;!(i=n.next()).done;)(i=i.value)[0]=t(i[0]),i[1]=t(i[1]),e.push(i);return e}clear(){lc(this),super.clear()}delete(t){return lc(this),super.delete(this.S(t,!0,!1))}entries(){if(this.I){var t=super.keys();t=new Zh(t,Lg,this)}else t=super.entries();return t}values(){if(this.I){var t=super.keys();t=new Zh(t,hi.prototype.get,this)}else t=super.values();return t}forEach(t,e){this.I?super.forEach(((n,i,r)=>{t.call(e,r.get(i),i,r)})):super.forEach(t,e)}set(t,e){return lc(this),(t=this.S(t,!0,!1))==null?this:e==null?(super.delete(t),this):super.set(t,this.X(e,!0,!0,this.I,!1,this.M))}Ja(t){const e=this.S(t[0],!1,!0);t=t[1],t=this.I?t===void 0?null:t:this.X(t,!1,!0,void 0,!1,this.M),super.set(e,t)}has(t){return super.has(this.S(t,!1,!1))}get(t){t=this.S(t,!1,!1);const e=super.get(t);if(e!==void 0){var n=this.I;return n?((n=this.X(e,!1,!0,n,this.pa,this.M))!==e&&super.set(t,n),n):e}}[Symbol.iterator](){return this.entries()}};function Cg(t,e,n,i,r,s){return t=bu(t,i,n,s),r&&(t=Do(t)),t}function Pg(t){return t}function Lg(t){return[t,this.get(t)]}let Dg,Tp,bp,Ig;function af(){return Dg||=new hi(Ss([]),void 0,void 0,void 0,Ag)}function nl(t,e,n,i,r){if(t!=null){if(Array.isArray(t)){const s=0|t[Ie];return t.length===0&&1&s?void 0:r&&2&s?t:Po(t,e,n,i!==void 0,r)}return e(t,i)}}function Po(t,e,n,i,r){const s=i||n?0|t[Ie]:0,a=i?!!(32&s):void 0;let o=0;const c=(i=fn(t)).length;for(let _=0;_<c;_++){var l=i[_];if(_===c-1&&bo(l)){var u=e,h=n,d=a,p=r;let S;for(let m in l){const f=nl(l[m],u,h,d,p);f!=null&&((S??={})[m]=f)}l=S}else l=nl(i[_],e,n,a,r);i[_]=l,l!=null&&(o=_+1)}return o<c&&(i.length=o),n&&((t=xu(t))&&(i[rs]=fn(t)),n(s,i)),i}function Ug(t){return nl(t,Au,void 0,void 0,!1)}function Au(t){switch(typeof t){case"number":return Number.isFinite(t)?t:""+t;case"bigint":return el(t)?Number(t):""+t;case"boolean":return t?1:0;case"object":if(br(t))return br(t)&&gu(dp),qh(t);if(t.W===pa)return Ap(t);if(t instanceof Ci){const e=t.g;return e==null?"":typeof e=="string"?e:t.g=qh(e)}return t instanceof hi?t.La():void 0}return t}function Ap(t){var e=t.u;t=Po(e,Au,void 0,void 0,!1);var n=0|e[Ie];if((e=t.length)&&!(512&n)){var i=t[e-1],r=!1;bo(i)?(e--,r=!0):i=void 0;var s=e-(n=512&n?0:-1),a=(Tp??bg)(s,n,t,i);if(i&&(t[e]=void 0),s<a&&i){for(var o in s=!0,i){const c=+o;c<=a?(t[r=c+n]=i[o],e=Math.max(r+1,e),r=!1,delete i[o]):s=!1}s&&(i=void 0)}for(s=e-1;e>0;s=e-1)if((o=t[s])==null)e--,r=!0;else{if(!((s-=n)>=a))break;(i??={})[s]=o,e--,r=!0}r&&(t.length=e),i&&t.push(i)}return t}function Qi(t,e,n){return t=wp(t,e[0],e[1],n?1:2),e!==bp&&n&&Eo(t,8192),t}function wp(t,e,n,i){if(t==null){var r=96;n?(t=[n],r|=512):t=[],e&&(r=-16760833&r|(1023&e)<<14)}else{if(!Array.isArray(t))throw Error("narr");if(8192&(r=0|t[Ie])||!(64&r)||2&r||gu(ug),1024&r)throw Error("farr");if(64&r)return t;if(i===1||i===2||(r|=64),n&&(r|=512,n!==t[0]))throw Error("mid");e:{var s=(n=t).length;if(s){var a=s-1;if(bo(i=n[a])){if((a-=e=512&(r|=256)?0:-1)>=1024)throw Error("pvtlmt");for(var o in i)(s=+o)<a&&(n[s+e]=i[o],delete i[o]);r=-16760833&r|(1023&a)<<14;break e}}if(e){if((o=Math.max(e,s-(512&r?0:-1)))>1024)throw Error("spvt");r=-16760833&r|(1023&o)<<14}}}return Bt(t,r),t}function il(t,e,n=Qc){if(t!=null){if(cp&&t instanceof Uint8Array)return e?t:new Uint8Array(t);if(Array.isArray(t)){var i=0|t[Ie];return 2&i?t:(e&&=i===0||!!(32&i)&&!(64&i||!(16&i)),e?(Bt(t,34|i),4&i&&Object.freeze(t),t):Po(t,il,4&i?Qc:n,!0,!0))}return t.W===pa?t=2&(i=0|(n=t.u)[Ie])?t:new t.constructor(Lo(n,i,!0)):t instanceof hi&&!(2&t.M)&&(n=Ss(t.da(il)),t=new hi(n,t.I,t.S,t.X)),t}}function Lo(t,e,n){const i=n||2&e?Qc:hg,r=!!(32&e);return t=(function(s,a,o){const c=fn(s);var l=c.length;const u=256&a?c[l-1]:void 0;for(l+=u?-1:0,a=512&a?1:0;a<l;a++)c[a]=o(c[a]);if(u){a=c[a]={};for(const h in u)a[h]=o(u[h])}return(s=xu(s))&&(c[rs]=fn(s)),c})(t,e,(s=>il(s,r,i))),Eo(t,32|(n?2:0)),t}function Do(t){const e=t.u,n=0|e[Ie];return 2&n?new t.constructor(Lo(e,n,!1)):t}function os(t,e){return Bi(t=t.u,0|t[Ie],e)}function Bi(t,e,n){if(n===-1)return null;const i=n+(512&e?0:-1),r=t.length-1;return i>=r&&256&e?t[r][n]:i<=r?t[i]:void 0}function St(t,e,n){const i=t.u;let r=0|i[Ie];return rr(r),Rt(i,r,e,n),t}function Rt(t,e,n,i){const r=512&e?0:-1,s=n+r;var a=t.length-1;return s>=a&&256&e?(t[a][n]=i,e):s<=a?(t[s]=i,e):(i!==void 0&&(n>=(a=e>>14&1023||536870912)?i!=null&&(t[a+r]={[n]:i},Bt(t,e|=256)):t[s]=i),e)}function $a(t,e){let n=0|(t=t.u)[Ie];const i=Bi(t,n,e),r=sr(i);return r!=null&&r!==i&&Rt(t,n,e,r),r}function Rp(t){let e=0|(t=t.u)[Ie];const n=Bi(t,e,1),i=vu(n,!0);return i!=null&&i!==n&&Rt(t,e,1,i),i}function Sr(){return fg===void 0?2:4}function Mr(t,e,n,i,r){const s=t.u,a=2&(t=0|s[Ie])?1:i;r=!!r;let o=0|(i=wu(s,t,e))[Ie];if(!(4&o)){4&o&&(i=fn(i),o=Pi(o,t),t=Rt(s,t,e,i));let c=0,l=0;for(;c<i.length;c++){const u=n(i[c]);u!=null&&(i[l++]=u)}l<c&&(i.length=l),o=Ru(o,t),n=-2049&(20|o),o=n&=-4097,Bt(i,o),2&o&&Object.freeze(i)}return a===1||a===4&&32&o?Ai(o)||(r=o,o|=2,o!==r&&Bt(i,o),Object.freeze(i)):(a===2&&Ai(o)&&(i=fn(i),o=Pi(o,t),o=er(o,t,r),Bt(i,o),t=Rt(s,t,e,i)),Ai(o)||(e=o,o=er(o,t,r),o!==e&&Bt(i,o))),i}function wu(t,e,n){return t=Bi(t,e,n),Array.isArray(t)?t:_u}function Ru(t,e){return t===0&&(t=Pi(t,e)),1|t}function Ai(t){return!!(2&t)&&!!(4&t)||!!(1024&t)}function Cp(t){t=fn(t);for(let e=0;e<t.length;e++){const n=t[e]=fn(t[e]);Array.isArray(n[1])&&(n[1]=Ss(n[1]))}return t}function rl(t,e,n,i){let r=0|(t=t.u)[Ie];rr(r),Rt(t,r,e,(i==="0"?Number(n)===0:n===i)?void 0:n)}function Es(t,e,n,i){rr(e);let r=wu(t,e,n);const s=r!==_u;if(64&e||!(8192&e)||!s){const a=s?0|r[Ie]:0;let o=a;(!s||2&o||Ai(o)||4&o&&!(32&o))&&(r=fn(r),o=Pi(o,e),e=Rt(t,e,n,r)),o=-13&Ru(o,e),o=er(i?-17&o:16|o,e,!0),o!==a&&Bt(r,o)}return r}function uc(t,e){var n=_m;return Pu(Cu(t=t.u),t,0|t[Ie],n)===e?e:-1}function Cu(t){if(yo)return t[Ds]??(t[Ds]=new Map);if(Ds in t)return t[Ds];const e=new Map;return Object.defineProperty(t,Ds,{value:e}),e}function Pp(t,e,n,i){const r=Cu(t),s=Pu(r,t,e,n);return s!==i&&(s&&(e=Rt(t,e,s)),r.set(n,i)),e}function Pu(t,e,n,i){let r=t.get(i);if(r!=null)return r;r=0;for(let s=0;s<i.length;s++){const a=i[s];Bi(e,n,a)!=null&&(r!==0&&(n=Rt(e,n,r)),r=a)}return t.set(i,r),r}function Lu(t,e,n){let i=0|t[Ie];const r=Bi(t,i,n);let s;if(r!=null&&r.W===pa)return(e=Do(r))!==r&&Rt(t,i,n,e),e.u;if(Array.isArray(r)){const a=0|r[Ie];s=2&a?Qi(Lo(r,a,!1),e,!0):64&a?r:Qi(s,e,!0)}else s=Qi(void 0,e,!0);return s!==r&&Rt(t,i,n,s),s}function Lp(t,e,n){let i=0|(t=t.u)[Ie];const r=Bi(t,i,n);return(e=bu(r,e,!1,i))!==r&&e!=null&&Rt(t,i,n,e),e}function rt(t,e,n){if((e=Lp(t,e,n))==null)return e;let i=0|(t=t.u)[Ie];if(!(2&i)){const r=Do(e);r!==e&&Rt(t,i,n,e=r)}return e}function Dp(t,e,n,i,r,s,a){t=t.u;var o=!!(2&e);const c=o?1:r;s=!!s,a&&=!o;var l=0|(r=wu(t,e,i))[Ie];if(!(o=!!(4&l))){var u=r,h=e;const d=!!(2&(l=Ru(l,e)));d&&(h|=2);let p=!d,_=!0,S=0,m=0;for(;S<u.length;S++){const f=bu(u[S],n,!1,h);if(f instanceof n){if(!d){const A=!!(2&(0|f.u[Ie]));p&&=!A,_&&=A}u[m++]=f}}m<S&&(u.length=m),l|=4,l=_?16|l:-17&l,Bt(u,l=p?8|l:-9&l),d&&Object.freeze(u)}if(a&&!(8&l||!r.length&&(c===1||c===4&&32&l))){for(Ai(l)&&(r=fn(r),l=Pi(l,e),e=Rt(t,e,i,r)),n=r,a=l,u=0;u<n.length;u++)(l=n[u])!==(h=Do(l))&&(n[u]=h);a|=8,Bt(n,a=n.length?-17&a:16|a),l=a}return c===1||c===4&&32&l?Ai(l)||(e=l,(l|=!r.length||16&l&&(!o||32&l)?2:1024)!==e&&Bt(r,l),Object.freeze(r)):(c===2&&Ai(l)&&(Bt(r=fn(r),l=er(l=Pi(l,e),e,s)),e=Rt(t,e,i,r)),Ai(l)||(i=l,(l=er(l,e,s))!==i&&Bt(r,l))),r}function Ui(t,e,n){const i=0|t.u[Ie];return Dp(t,i,e,n,Sr(),!1,!(2&i))}function Ue(t,e,n,i){return i==null&&(i=void 0),St(t,n,i)}function Ys(t,e,n,i){i==null&&(i=void 0);e:{let r=0|(t=t.u)[Ie];if(rr(r),i==null){const s=Cu(t);if(Pu(s,t,r,n)!==e)break e;s.set(n,0)}else r=Pp(t,r,n,e);Rt(t,r,e,i)}}function Pi(t,e){return-1025&(t=32|(2&e?2|t:-3&t))}function er(t,e,n){return 32&e&&n||(t&=-33),t}function Io(t,e,n){rr(0|t.u[Ie]),Mr(t,e,as,2,!0).push(Ep(n))}function uo(t,e,n,i){const r=0|t.u[Ie];rr(r),t=Dp(t,r,n,e,2,!0),i=i??new n,t.push(i),t[Ie]=2&(0|i.u[Ie])?-9&t[Ie]:-17&t[Ie]}function Bn(t,e){return Ms(os(t,e))}function kn(t,e){return as(os(t,e))}function It(t,e){return $a(t,e)??0}function ra(t,e,n){if(n!=null&&typeof n!="boolean")throw t=typeof n,Error(`Expected boolean but got ${t!="object"?t:n?Array.isArray(n)?"array":t:"null"}: ${n}`);St(t,e,n)}function fi(t,e,n){if(n!=null){if(typeof n!="number"||!Co(n))throw $c("int32");n|=0}St(t,e,n)}function Pe(t,e,n){if(n!=null&&typeof n!="number")throw Error(`Value of float/double field must be a number, found ${typeof n}: ${n}`);St(t,e,n)}function ho(t,e,n){{const a=t.u;let o=0|a[Ie];if(rr(o),n==null)Rt(a,o,e);else{var i=t=0|n[Ie],r=Ai(t),s=r||Object.isFrozen(n);for(r||(t=0),s||(n=fn(n),i=0,t=er(t=Pi(t,o),o,!0),s=!1),t|=21,r=0;r<n.length;r++){const c=n[r],l=Ep(c);Object.is(c,l)||(s&&(n=fn(n),i=0,t=er(t=Pi(t,o),o,!0),s=!1),n[r]=l)}t!==i&&(s&&(n=fn(n),t=er(t=Pi(t,o),o,!0)),Bt(n,t)),Rt(a,o,e,n)}}}function Ip(t,e){return Error(`Invalid wire type: ${t} (at position ${e})`)}function Du(){return Error("Failed to read varint, encoding is invalid.")}function Up(t,e){return Error(`Tried to read past the end of the data ${e} > ${t}`)}function Iu(t){if(typeof t=="string")return{buffer:up(t),O:!1};if(Array.isArray(t))return{buffer:new Uint8Array(t),O:!1};if(t.constructor===Uint8Array)return{buffer:t,O:!1};if(t.constructor===ArrayBuffer)return{buffer:new Uint8Array(t),O:!1};if(t.constructor===Ci)return{buffer:mu(t)||new Uint8Array(0),O:!0};if(t instanceof Uint8Array)return{buffer:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),O:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function Uu(t,e){let n,i=0,r=0,s=0;const a=t.h;let o=t.g;do n=a[o++],i|=(127&n)<<s,s+=7;while(s<32&&128&n);for(s>32&&(r|=(127&n)>>4),s=3;s<32&&128&n;s+=7)n=a[o++],r|=(127&n)<<s;if(Tr(t,o),n<128)return e(i>>>0,r>>>0);throw Du()}function Nu(t){let e=0,n=t.g;const i=n+10,r=t.h;for(;n<i;){const s=r[n++];if(e|=s,(128&s)==0)return Tr(t,n),!!(127&e)}throw Du()}function tr(t){const e=t.h;let n=t.g,i=e[n++],r=127&i;if(128&i&&(i=e[n++],r|=(127&i)<<7,128&i&&(i=e[n++],r|=(127&i)<<14,128&i&&(i=e[n++],r|=(127&i)<<21,128&i&&(i=e[n++],r|=i<<28,128&i&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++])))))throw Du();return Tr(t,n),r}function Ni(t){return tr(t)>>>0}function sl(t){var e=t.h;const n=t.g,i=e[n],r=e[n+1],s=e[n+2];return e=e[n+3],Tr(t,t.g+4),(i<<0|r<<8|s<<16|e<<24)>>>0}function al(t){var e=sl(t);t=2*(e>>31)+1;const n=e>>>23&255;return e&=8388607,n==255?e?NaN:t*(1/0):n==0?1401298464324817e-60*t*e:t*Math.pow(2,n-150)*(e+8388608)}function Ng(t){return tr(t)}function hc(t,e,{aa:n=!1}={}){t.aa=n,e&&(e=Iu(e),t.h=e.buffer,t.m=e.O,t.j=0,t.l=t.h.length,t.g=t.j)}function Tr(t,e){if(t.g=e,e>t.l)throw Up(t.l,e)}function Np(t,e){if(e<0)throw Error(`Tried to read a negative byte length: ${e}`);const n=t.g,i=n+e;if(i>t.l)throw Up(e,t.l-n);return t.g=i,n}function Fp(t,e){if(e==0)return Ar();var n=Np(t,e);return t.aa&&t.m?n=t.h.subarray(n,n+e):(t=t.h,n=n===(e=n+e)?new Uint8Array(0):xg?t.slice(n,e):new Uint8Array(t.subarray(n,e))),n.length==0?Ar():new Ci(n,is)}hi.prototype.toJSON=void 0;var of=[];function Op(t){var e=t.g;if(e.g==e.l)return!1;t.l=t.g.g;var n=Ni(t.g);if(e=n>>>3,!((n&=7)>=0&&n<=5))throw Ip(n,t.l);if(e<1)throw Error(`Invalid field number: ${e} (at position ${t.l})`);return t.m=e,t.h=n,!0}function Qa(t){switch(t.h){case 0:t.h!=0?Qa(t):Nu(t.g);break;case 1:Tr(t=t.g,t.g+8);break;case 2:if(t.h!=2)Qa(t);else{var e=Ni(t.g);Tr(t=t.g,t.g+e)}break;case 5:Tr(t=t.g,t.g+4);break;case 3:for(e=t.m;;){if(!Op(t))throw Error("Unmatched start-group tag: stream EOF");if(t.h==4){if(t.m!=e)throw Error("Unmatched end-group tag");break}Qa(t)}break;default:throw Ip(t.h,t.l)}}function ma(t,e,n){const i=t.g.l,r=Ni(t.g),s=t.g.g+r;let a=s-i;if(a<=0&&(t.g.l=s,n(e,t,void 0,void 0,void 0),a=s-t.g.g),a)throw Error(`Message parsing ended unexpectedly. Expected to read ${r} bytes, instead read ${r-a} bytes, either the data ended unexpectedly or the message misreported its own length`);return t.g.g=s,t.g.l=i,e}function Fu(t){var e=Ni(t.g),n=Np(t=t.g,e);if(t=t.h,eg){var i,r=t;(i=rc)||(i=rc=new TextDecoder("utf-8",{fatal:!0})),e=n+e,r=n===0&&e===r.length?r:r.subarray(n,e);try{var s=i.decode(r)}catch(o){if(ya===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),ya=!0}catch{ya=!1}}throw!ya&&(rc=void 0),o}}else{e=(s=n)+e,n=[];let o,c=null;for(;s<e;){var a=t[s++];a<128?n.push(a):a<224?s>=e?lr():(o=t[s++],a<194||(192&o)!=128?(s--,lr()):n.push((31&a)<<6|63&o)):a<240?s>=e-1?lr():(o=t[s++],(192&o)!=128||a===224&&o<160||a===237&&o>=160||(192&(i=t[s++]))!=128?(s--,lr()):n.push((15&a)<<12|(63&o)<<6|63&i)):a<=244?s>=e-2?lr():(o=t[s++],(192&o)!=128||o-144+(a<<28)>>30!=0||(192&(i=t[s++]))!=128||(192&(r=t[s++]))!=128?(s--,lr()):(a=(7&a)<<18|(63&o)<<12|(63&i)<<6|63&r,a-=65536,n.push(55296+(a>>10&1023),56320+(1023&a)))):lr(),n.length>=8192&&(c=Gh(c,n),n.length=0)}s=Gh(c,n)}return s}function Bp(t){const e=Ni(t.g);return Fp(t.g,e)}function Uo(t,e,n){var i=Ni(t.g);for(i=t.g.g+i;t.g.g<i;)n.push(e(t.g))}var Ea=[];function Kn(t,e,n){e.g?e.m(t,e.g,e.h,n):e.m(t,e.h,n)}var Re=class{constructor(t,e){this.u=wp(t,e)}toJSON(){try{var t=Ap(this)}finally{Tp=void 0}return t}l(){var t=__;return t.g?t.l(this,t.g,t.h):t.l(this,t.h,t.defaultValue)}clone(){const t=this.u;return new this.constructor(Lo(t,0|t[Ie],!1))}O(){return!!(2&(0|this.u[Ie]))}};function cf(t){return t?/^\d+$/.test(t)?(Ro(t),new ol(_t,Lt)):null:Fg||=new ol(0,0)}Re.prototype.W=pa,Re.prototype.toString=function(){return this.u.toString()};var ol=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let Fg;function lf(t){return t?/^-?\d+$/.test(t)?(Ro(t),new cl(_t,Lt)):null:Og||=new cl(0,0)}var cl=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let Og;function Jr(t,e,n){for(;n>0||e>127;)t.g.push(127&e|128),e=(e>>>7|n<<25)>>>0,n>>>=7;t.g.push(e)}function Ts(t,e){for(;e>127;)t.g.push(127&e|128),e>>>=7;t.g.push(e)}function No(t,e){if(e>=0)Ts(t,e);else{for(let n=0;n<9;n++)t.g.push(127&e|128),e>>=7;t.g.push(1)}}function sa(t,e){t.g.push(e>>>0&255),t.g.push(e>>>8&255),t.g.push(e>>>16&255),t.g.push(e>>>24&255)}function cs(t,e){e.length!==0&&(t.l.push(e),t.h+=e.length)}function An(t,e,n){Ts(t.g,8*e+n)}function Ou(t,e){return An(t,e,2),e=t.g.end(),cs(t,e),e.push(t.h),e}function Bu(t,e){var n=e.pop();for(n=t.h+t.g.length()-n;n>127;)e.push(127&n|128),n>>>=7,t.h++;e.push(n),t.h++}function Fo(t,e,n){An(t,e,2),Ts(t.g,n.length),cs(t,t.g.end()),cs(t,n)}function fo(t,e,n,i){n!=null&&(e=Ou(t,e),i(n,t),Bu(t,e))}function jn(){const t=class{constructor(){throw Error()}};return Object.setPrototypeOf(t,t.prototype),t}var ku=jn(),kp=jn(),zu=jn(),Vu=jn(),zp=jn(),Vp=jn(),Gu=jn(),Gp=jn(),Hp=jn(),bs=class{constructor(t,e,n){this.g=t,this.h=e,t=ku,this.l=!!t&&n===t||!1}};function Oo(t,e){return new bs(t,e,ku)}function Wp(t,e,n,i,r){fo(t,n,Kp(e,i),r)}const Bg=Oo((function(t,e,n,i,r){return t.h===2&&(ma(t,Lu(e,i,n),r),!0)}),Wp),kg=Oo((function(t,e,n,i,r){return t.h===2&&(ma(t,Lu(e,i,n),r),!0)}),Wp);var Bo=Symbol(),Hu=Symbol(),uf=Symbol(),hf=Symbol();let Xp,qp;function Pr(t,e,n,i){var r=i[t];if(r)return r;(r={}).Ma=i,r.T=(function(h){switch(typeof h){case"boolean":return bp||=[0,void 0,!0];case"number":return h>0?void 0:h===0?Ig||=[0,void 0]:[-h,void 0];case"string":return[0,h];case"object":return h}})(i[0]);var s=i[1];let a=1;s&&s.constructor===Object&&(r.ga=s,typeof(s=i[++a])=="function"&&(r.la=!0,Xp??=s,qp??=i[a+1],s=i[a+=2]));const o={};for(;s&&Array.isArray(s)&&s.length&&typeof s[0]=="number"&&s[0]>0;){for(var c=0;c<s.length;c++)o[s[c]]=s;s=i[++a]}for(c=1;s!==void 0;){let h;typeof s=="number"&&(c+=s,s=i[++a]);var l=void 0;if(s instanceof bs?h=s:(h=Bg,a--),h?.l){s=i[++a],l=i;var u=a;typeof s=="function"&&(s=s(),l[u]=s),l=s}for(u=c+1,typeof(s=i[++a])=="number"&&s<0&&(u-=s,s=i[++a]);c<u;c++){const d=o[c];l?n(r,c,h,l,d):e(r,c,h,d)}}return i[t]=r}function Yp(t){return Array.isArray(t)?t[0]instanceof bs?t:[kg,t]:[t,void 0]}function Kp(t,e){return t instanceof Re?t.u:Array.isArray(t)?Qi(t,e,!1):void 0}function Wu(t,e,n,i){const r=n.g;t[e]=i?(s,a,o)=>r(s,a,o,i):r}function Xu(t,e,n,i,r){const s=n.g;let a,o;t[e]=(c,l,u)=>s(c,l,u,o||=Pr(Hu,Wu,Xu,i).T,a||=qu(i),r)}function qu(t){let e=t[uf];if(e!=null)return e;const n=Pr(Hu,Wu,Xu,t);return e=n.la?(i,r)=>Xp(i,r,n):(i,r)=>{const s=0|i[Ie];for(;Op(r)&&r.h!=4;){var a=r.m,o=n[a];if(o==null){var c=n.ga;c&&(c=c[a])&&(c=zg(c))!=null&&(o=n[a]=c)}o!=null&&o(r,i,a)||(a=(o=r).l,Qa(o),o.fa?o=void 0:(c=o.g.g-a,o.g.g=a,o=Fp(o.g,c)),a=i,o&&((c=a[rs])?c.push(o):a[rs]=[o]))}return 8192&s&&Ss(i),!0},t[uf]=e}function zg(t){const e=(t=Yp(t))[0].g;if(t=t[1]){const n=qu(t),i=Pr(Hu,Wu,Xu,t).T;return(r,s,a)=>e(r,s,a,i,n)}return e}function ko(t,e,n){t[e]=n.h}function zo(t,e,n,i){let r,s;const a=n.h;t[e]=(o,c,l)=>a(o,c,l,s||=Pr(Bo,ko,zo,i).T,r||=jp(i))}function jp(t){let e=t[hf];if(!e){const n=Pr(Bo,ko,zo,t);e=(i,r)=>Zp(i,r,n),t[hf]=e}return e}function Zp(t,e,n){(function(i,r,s){const a=512&r?0:-1,o=i.length,c=o+((r=64&r?256&r:!!o&&bo(i[o-1]))?-1:0);for(let l=0;l<c;l++)s(l-a,i[l]);if(r){i=i[o-1];for(const l in i)!isNaN(l)&&s(+l,i[l])}})(t,0|t[Ie]|(n.T[1]?512:0),((i,r)=>{if(r!=null){var s=(function(a,o){var c=a[o];if(c)return c;if((c=a.ga)&&(c=c[o])){var l=(c=Yp(c))[0].h;if(c=c[1]){const u=jp(c),h=Pr(Bo,ko,zo,c).T;c=a.la?qp(h,u):(d,p,_)=>l(d,p,_,h,u)}else c=l;return a[o]=c}})(n,i);s&&s(e,r,i)}})),(t=xu(t))&&(function(i,r){cs(i,i.g.end());for(let s=0;s<r.length;s++)cs(i,mu(r[s])||new Uint8Array(0))})(e,t)}function As(t,e){if(Array.isArray(e)){var n=0|e[Ie];if(4&n)return e;for(var i=0,r=0;i<e.length;i++){const s=t(e[i]);s!=null&&(e[r++]=s)}return r<i&&(e.length=r),Bt(e,-6145&(5|n)),2&n&&Object.freeze(e),e}}function an(t,e,n){return new bs(t,e,n)}function ws(t,e,n){return new bs(t,e,n)}function on(t,e,n){Rt(t,0|t[Ie],e,n)}var Vg=Oo((function(t,e,n,i,r){return t.h===2&&(t=ma(t,Qi([void 0,void 0],i,!0),r),rr(i=0|e[Ie]),(r=Bi(e,i,n))instanceof hi?(2&r.M)!=0?((r=r.da()).push(t),Rt(e,i,n,r)):r.Ja(t):Array.isArray(r)?(2&(0|r[Ie])&&Rt(e,i,n,r=Cp(r)),r.push(t)):Rt(e,i,n,[t]),!0)}),(function(t,e,n,i,r){if(e instanceof hi)e.forEach(((s,a)=>{fo(t,n,Qi([a,s],i,!1),r)}));else if(Array.isArray(e))for(let s=0;s<e.length;s++){const a=e[s];Array.isArray(a)&&fo(t,n,Qi(a,i,!1),r)}}));function Jp(t,e,n){if(e=(function(i){if(i==null)return i;const r=typeof i;if(r==="bigint")return String(na(64,i));if(ia(i)){if(r==="string")return yp(i);if(r==="number")return Tu(i)}})(e),e!=null&&(typeof e=="string"&&lf(e),e!=null))switch(An(t,n,0),typeof e){case"number":t=t.g,wr(e),Jr(t,_t,Lt);break;case"bigint":n=BigInt.asUintN(64,e),n=new cl(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Jr(t.g,n.h,n.g);break;default:n=lf(e),Jr(t.g,n.h,n.g)}}function $p(t,e,n){(e=Ms(e))!=null&&e!=null&&(An(t,n,0),No(t.g,e))}function Qp(t,e,n){(e=vp(e))!=null&&(An(t,n,0),t.g.g.push(e?1:0))}function em(t,e,n){(e=as(e))!=null&&Fo(t,n,sp(e))}function tm(t,e,n,i,r){fo(t,n,Kp(e,i),r)}function nm(t,e,n){e==null||typeof e=="string"||e instanceof Ci||(br(e)?br(e)&&gu(dp):e=void 0),e!=null&&Fo(t,n,Iu(e).buffer)}function im(t,e,n){return(t.h===5||t.h===2)&&(e=Es(e,0|e[Ie],n,!1),t.h==2?Uo(t,al,e):e.push(al(t.g)),!0)}var Ti=an((function(t,e,n){if(t.h!==1)return!1;var i=t.g;t=sl(i);const r=sl(i);i=2*(r>>31)+1;const s=r>>>20&2047;return t=4294967296*(1048575&r)+t,on(e,n,s==2047?t?NaN:i*(1/0):s==0?5e-324*i*t:i*Math.pow(2,s-1075)*(t+4503599627370496)),!0}),(function(t,e,n){(e=sr(e))!=null&&(An(t,n,1),t=t.g,(n=gp||=new DataView(new ArrayBuffer(8))).setFloat64(0,+e,!0),_t=n.getUint32(0,!0),Lt=n.getUint32(4,!0),sa(t,_t),sa(t,Lt))}),jn()),kt=an((function(t,e,n){return t.h===5&&(on(e,n,al(t.g)),!0)}),(function(t,e,n){(e=sr(e))!=null&&(An(t,n,5),t=t.g,Su(e),sa(t,_t))}),Gu),Gg=ws(im,(function(t,e,n){if((e=As(sr,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&(An(i,r,5),i=i.g,Su(s),sa(i,_t))}}),Gu),Yu=ws(im,(function(t,e,n){if((e=As(sr,e))!=null&&e.length){An(t,n,2),Ts(t.g,4*e.length);for(let i=0;i<e.length;i++)n=t.g,Su(e[i]),sa(n,_t)}}),Gu),nr=an((function(t,e,n){return t.h===0&&(on(e,n,Uu(t.g,yu)),!0)}),Jp,Vp),fc=an((function(t,e,n){return t.h===0&&(on(e,n,(t=Uu(t.g,yu))===0?void 0:t),!0)}),Jp,Vp),Hg=an((function(t,e,n){return t.h===0&&(on(e,n,Uu(t.g,Mu)),!0)}),(function(t,e,n){if((e=Eg(e))!=null&&(typeof e=="string"&&cf(e),e!=null))switch(An(t,n,0),typeof e){case"number":t=t.g,wr(e),Jr(t,_t,Lt);break;case"bigint":n=BigInt.asUintN(64,e),n=new ol(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Jr(t.g,n.h,n.g);break;default:n=cf(e),Jr(t.g,n.h,n.g)}}),jn()),Dt=an((function(t,e,n){return t.h===0&&(on(e,n,tr(t.g)),!0)}),$p,Vu),Vo=ws((function(t,e,n){return(t.h===0||t.h===2)&&(e=Es(e,0|e[Ie],n,!1),t.h==2?Uo(t,tr,e):e.push(tr(t.g)),!0)}),(function(t,e,n){if((e=As(Ms,e))!=null&&e.length){n=Ou(t,n);for(let i=0;i<e.length;i++)No(t.g,e[i]);Bu(t,n)}}),Vu),Zr=an((function(t,e,n){return t.h===0&&(on(e,n,(t=tr(t.g))===0?void 0:t),!0)}),$p,Vu),Tt=an((function(t,e,n){return t.h===0&&(on(e,n,Nu(t.g)),!0)}),Qp,kp),$r=an((function(t,e,n){return t.h===0&&(on(e,n,(t=Nu(t.g))===!1?void 0:t),!0)}),Qp,kp),Jt=ws((function(t,e,n){return t.h===2&&(t=Fu(t),Es(e,0|e[Ie],n,!1).push(t),!0)}),(function(t,e,n){if((e=As(as,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&Fo(i,r,sp(s))}}),zu),Ki=an((function(t,e,n){return t.h===2&&(on(e,n,(t=Fu(t))===""?void 0:t),!0)}),em,zu),ct=an((function(t,e,n){return t.h===2&&(on(e,n,Fu(t)),!0)}),em,zu),Vt=(function(t,e,n=ku){return new bs(t,e,n)})((function(t,e,n,i,r){return t.h===2&&(i=Qi(void 0,i,!0),Es(e,0|e[Ie],n,!0).push(i),ma(t,i,r),!0)}),(function(t,e,n,i,r){if(Array.isArray(e))for(let s=0;s<e.length;s++)tm(t,e[s],n,i,r)})),ot=Oo((function(t,e,n,i,r,s){return t.h===2&&(Pp(e,0|e[Ie],s,n),ma(t,e=Lu(e,i,n),r),!0)}),tm),rm=an((function(t,e,n){return t.h===2&&(on(e,n,Bp(t)),!0)}),nm,Gp),Wg=ws((function(t,e,n){return(t.h===0||t.h===2)&&(e=Es(e,0|e[Ie],n,!1),t.h==2?Uo(t,Ni,e):e.push(Ni(t.g)),!0)}),(function(t,e,n){if((e=As(xp,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&(An(i,r,0),Ts(i.g,s))}}),zp),Xg=an((function(t,e,n){return t.h===0&&(on(e,n,(t=Ni(t.g))===0?void 0:t),!0)}),(function(t,e,n){(e=xp(e))!=null&&e!=null&&(An(t,n,0),Ts(t.g,e))}),zp),Tn=an((function(t,e,n){return t.h===0&&(on(e,n,tr(t.g)),!0)}),(function(t,e,n){(e=Ms(e))!=null&&(e=parseInt(e,10),An(t,n,0),No(t.g,e))}),Hp);class qg{constructor(e,n){this.h=e,this.g=n,this.l=rt,this.m=Ue,this.defaultValue=void 0}register(){Mo(this)}}function Zn(t,e){return new qg(t,e)}function ar(t,e){return(n,i)=>{if(Ea.length){const s=Ea.pop();s.o(i),hc(s.g,n,i),n=s}else n=new class{constructor(s,a){if(of.length){const o=of.pop();hc(o,s,a),s=o}else s=new class{constructor(o,c){this.h=null,this.m=!1,this.g=this.l=this.j=0,hc(this,o,c)}clear(){this.h=null,this.m=!1,this.g=this.l=this.j=0,this.aa=!1}}(s,a);this.g=s,this.l=this.g.g,this.h=this.m=-1,this.o(a)}o({fa:s=!1}={}){this.fa=s}}(n,i);try{const s=new t,a=s.u;qu(e)(a,n);var r=s}finally{n.g.clear(),n.m=-1,n.h=-1,Ea.length<100&&Ea.push(n)}return r}}function Go(t){return function(){const e=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const a=this.g;return this.g=[],a}}}};Zp(this.u,e,Pr(Bo,ko,zo,t)),cs(e,e.g.end());const n=new Uint8Array(e.h),i=e.l,r=i.length;let s=0;for(let a=0;a<r;a++){const o=i[a];n.set(o,s),s+=o.length}return e.l=[n],n}}var ff=class extends Re{constructor(t){super(t)}},df=[0,Ki,an((function(t,e,n){return t.h===2&&(on(e,n,(t=Bp(t))===Ar()?void 0:t),!0)}),(function(t,e,n){if(e!=null){if(e instanceof Re){const i=e.Oa;return void(i&&(e=i(e),e!=null&&Fo(t,n,Iu(e).buffer)))}if(Array.isArray(e))return}nm(t,e,n)}),Gp)];let dc,pf=globalThis.trustedTypes;function mf(t){dc===void 0&&(dc=(function(){let n=null;if(!pf)return n;try{const i=r=>r;n=pf.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n})());var e=dc;return new class{constructor(n){this.g=n}toString(){return this.g+""}}(e?e.createScriptURL(t):t)}function Yg(t,...e){if(e.length===0)return mf(t[0]);let n=t[0];for(let i=0;i<e.length;i++)n+=encodeURIComponent(e[i])+t[i+1];return mf(n)}var sm=[0,Dt,Tn,Tt,-1,Vo,Tn,-1],Kg=class extends Re{constructor(t){super(t)}},am=[0,Tt,ct,Tt,Tn,-1,ws((function(t,e,n){return(t.h===0||t.h===2)&&(e=Es(e,0|e[Ie],n,!1),t.h==2?Uo(t,Ng,e):e.push(tr(t.g)),!0)}),(function(t,e,n){if((e=As(Ms,e))!=null&&e.length){n=Ou(t,n);for(let i=0;i<e.length;i++)No(t.g,e[i]);Bu(t,n)}}),Hp),ct,-1,[0,Tt,-1],Tn,Tt,-1],om=[0,ct,-2],gf=class extends Re{constructor(t){super(t)}},cm=[0],lm=[0,Dt,Tt,1,Tt,-3],bn=class extends Re{constructor(t){super(t,2)}},zt={};zt[336783863]=[0,ct,Tt,-1,Dt,[0,[1,2,3,4,5,6,7,8,9],ot,cm,ot,am,ot,om,ot,lm,ot,sm,ot,[0,ct,-2],ot,[0,ct,Tn],ot,[0,Tn,ct,-1],ot,[0,Tn,-1]],[0,ct],Tt,[0,[1,3],[2,4],ot,[0,Vo],-1,ot,[0,Jt],-1,Vt,[0,ct,-1]],ct];var _f=[0,fc,-1,$r,-3,fc,Vo,Ki,Zr,fc,-1,$r,Zr,$r,-2,Ki];function wn(t,e){rl(t,2,ys(e),"")}function Mt(t,e){Io(t,3,e)}function Qe(t,e){Io(t,4,e)}var sn=class extends Re{constructor(t){super(t,500)}o(t){return Ue(this,0,7,t)}},Ks=[-1,{}],vf=[0,ct,1,Ks],xf=[0,ct,Jt,Ks];function Rn(t,e){uo(t,1,sn,e)}function yt(t,e){Io(t,10,e)}function at(t,e){Io(t,15,e)}var mn=class extends Re{constructor(t){super(t,500)}o(t){return Ue(this,0,1001,t)}},um=[-500,Vt,[-500,Ki,-1,Jt,-3,[-2,zt,Tt],Vt,df,Zr,-1,vf,xf,Vt,[0,Ki,$r],Ki,_f,Zr,Jt,987,Jt],4,Vt,[-500,ct,-1,[-1,{}],998,ct],Vt,[-500,ct,Jt,-1,[-2,{},Tt],997,Jt,-1],Zr,Vt,[-500,ct,Jt,Ks,998,Jt],Jt,Zr,vf,xf,Vt,[0,Ki,-1,Ks],Jt,-2,_f,Ki,-1,$r,[0,$r,Xg],978,Ks,Vt,df];mn.prototype.g=Go(um);var jg=ar(mn,um),Zg=class extends Re{constructor(t){super(t)}},hm=class extends Re{constructor(t){super(t)}g(){return Ui(this,Zg,1)}},fm=[0,Vt,[0,Dt,kt,ct,-1]],Ho=ar(hm,fm),Jg=class extends Re{constructor(t){super(t)}},$g=class extends Re{constructor(t){super(t)}},pc=class extends Re{constructor(t){super(t)}h(){return rt(this,Jg,2)}g(){return Ui(this,$g,5)}},dm=ar(class extends Re{constructor(t){super(t)}},[0,Jt,Vo,Yu,[0,Tn,[0,Dt,-3],[0,kt,-3],[0,Dt,-1,[0,Vt,[0,Dt,-2]]],Vt,[0,kt,-1,ct,kt]],ct,-1,nr,Vt,[0,Dt,kt],Jt,nr]),pm=class extends Re{constructor(t){super(t)}},Qr=ar(class extends Re{constructor(t){super(t)}},[0,Vt,[0,kt,-4]]),mm=class extends Re{constructor(t){super(t)}},ga=ar(class extends Re{constructor(t){super(t)}},[0,Vt,[0,kt,-4]]),Qg=class extends Re{constructor(t){super(t)}},e_=[0,Dt,-1,Yu,Tn],gm=class extends Re{constructor(t){super(t)}};gm.prototype.g=Go([0,kt,-4,nr]);var t_=class extends Re{constructor(t){super(t)}},n_=ar(class extends Re{constructor(t){super(t)}},[0,Vt,[0,1,Dt,ct,fm],nr]),Sf=class extends Re{constructor(t){super(t)}},i_=class extends Re{constructor(t){super(t)}ma(){const t=Rp(this);return t??Ar()}},r_=class extends Re{constructor(t){super(t)}},_m=[1,2],s_=ar(class extends Re{constructor(t){super(t)}},[0,Vt,[0,_m,ot,[0,Yu],ot,[0,rm],Dt,ct],nr]),Ku=class extends Re{constructor(t){super(t)}},vm=[0,ct,Dt,kt,Jt,-1],Mf=class extends Re{constructor(t){super(t)}},a_=[0,Tt,-1],yf=class extends Re{constructor(t){super(t)}},eo=[1,2,3,4,5],po=class extends Re{constructor(t){super(t)}g(){return Rp(this)!=null}h(){return kn(this,2)!=null}},bt=class extends Re{constructor(t){super(t)}g(){return vp(os(this,2))??!1}},xm=[0,rm,ct,[0,Dt,nr,-1],[0,Hg,nr]],Ft=[0,xm,Tt,[0,eo,ot,lm,ot,am,ot,sm,ot,cm,ot,om],Tn],Wo=class extends Re{constructor(t){super(t)}},ju=[0,Ft,kt,-1,Dt],o_=Zn(502141897,Wo);zt[502141897]=ju;var c_=ar(class extends Re{constructor(t){super(t)}},[0,[0,Tn,-1,Gg,Wg],e_]),Sm=class extends Re{constructor(t){super(t)}},Mm=class extends Re{constructor(t){super(t)}},Zu=[0,Ft,kt,[0,Ft],Tt],ym=[0,Ft,ju,Zu,kt,[0,[0,xm]]],l_=Zn(508968150,Mm);zt[508968150]=ym,zt[508968149]=Zu;var Em=class extends Re{constructor(t){super(t)}},u_=Zn(513916220,Em);zt[513916220]=[0,Ft,ym,Dt];var Ir=class extends Re{constructor(t){super(t)}h(){return rt(this,Ku,2)}g(){St(this,2)}},Tm=[0,Ft,vm];zt[478825465]=Tm;var h_=class extends Re{constructor(t){super(t)}},bm=class extends Re{constructor(t){super(t)}},Ju=class extends Re{constructor(t){super(t)}},$u=class extends Re{constructor(t){super(t)}},Am=class extends Re{constructor(t){super(t)}},Ef=[0,Ft,[0,Ft],Tm,-1],wm=[0,Ft,kt,Dt],Qu=[0,Ft,kt],Rm=[0,Ft,wm,Qu,kt],f_=Zn(479097054,Am);zt[479097054]=[0,Ft,Rm,Ef],zt[463370452]=Ef,zt[464864288]=wm;var d_=Zn(462713202,$u);zt[462713202]=Rm,zt[474472470]=Qu;var p_=class extends Re{constructor(t){super(t)}},Cm=class extends Re{constructor(t){super(t)}},Pm=class extends Re{constructor(t){super(t)}},Lm=class extends Re{constructor(t){super(t)}},eh=[0,Ft,kt,-1,Dt],ll=[0,Ft,kt,Tt];Lm.prototype.g=Go([0,Ft,Qu,[0,Ft],ju,Zu,eh,ll]);var Dm=class extends Re{constructor(t){super(t)}},m_=Zn(456383383,Dm);zt[456383383]=[0,Ft,vm];var Im=class extends Re{constructor(t){super(t)}},g_=Zn(476348187,Im);zt[476348187]=[0,Ft,a_];var Um=class extends Re{constructor(t){super(t)}},Tf=class extends Re{constructor(t){super(t)}},Nm=[0,Tn,-1],__=Zn(458105876,class extends Re{constructor(t){super(t)}g(){var t=this.u;const e=0|t[Ie],n=2&e;return t=(function(i,r,s){var a=Tf;const o=2&r;let c=!1;if(s==null){if(o)return af();s=[]}else if(s.constructor===hi){if((2&s.M)==0||o)return s;s=s.da()}else Array.isArray(s)?c=!!(2&(0|s[Ie])):s=[];if(o){if(!s.length)return af();c||(c=!0,Ss(s))}else c&&(c=!1,s=Cp(s));return c||(64&(0|s[Ie])?s[Ie]&=-33:32&r&&Eo(s,32)),Rt(i,r,2,a=new hi(s,a,Tg,void 0)),a})(t,e,Bi(t,e,2)),!n&&Tf&&(t.pa=!0),t}});zt[458105876]=[0,Nm,Vg,[!0,nr,[0,ct,-1,Jt]]];var th=class extends Re{constructor(t){super(t)}},Fm=Zn(458105758,th);zt[458105758]=[0,Ft,ct,Nm];var Om=class extends Re{constructor(t){super(t)}},v_=Zn(443442058,Om);zt[443442058]=[0,Ft,ct,Dt,kt,Jt,-1,Tt,kt],zt[514774813]=eh;var Bm=class extends Re{constructor(t){super(t)}},x_=Zn(516587230,Bm);function ul(t,e){return e=e?e.clone():new Ku,t.displayNamesLocale!==void 0?St(e,1,ys(t.displayNamesLocale)):t.displayNamesLocale===void 0&&St(e,1),t.maxResults!==void 0?fi(e,2,t.maxResults):"maxResults"in t&&St(e,2),t.scoreThreshold!==void 0?Pe(e,3,t.scoreThreshold):"scoreThreshold"in t&&St(e,3),t.categoryAllowlist!==void 0?ho(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&St(e,4),t.categoryDenylist!==void 0?ho(e,5,t.categoryDenylist):"categoryDenylist"in t&&St(e,5),e}function nh(t,e=-1,n=""){return{categories:t.map((i=>({index:Bn(i,1)??0??-1,score:It(i,2)??0,categoryName:kn(i,3)??""??"",displayName:kn(i,4)??""??""}))),headIndex:e,headName:n}}function km(t){var e=Mr(t,3,sr,Sr()),n=Mr(t,2,Ms,Sr()),i=Mr(t,1,as,Sr()),r=Mr(t,9,as,Sr());const s={categories:[],keypoints:[]};for(let a=0;a<e.length;a++)s.categories.push({score:e[a],index:n[a]??-1,categoryName:i[a]??"",displayName:r[a]??""});if((e=rt(t,pc,4)?.h())&&(s.boundingBox={originX:Bn(e,1)??0,originY:Bn(e,2)??0,width:Bn(e,3)??0,height:Bn(e,4)??0,angle:0}),rt(t,pc,4)?.g().length)for(const a of rt(t,pc,4).g())s.keypoints.push({x:$a(a,1)??0,y:$a(a,2)??0,score:$a(a,4)??0,label:kn(a,3)??""});return s}function Xo(t){const e=[];for(const n of Ui(t,mm,1))e.push({x:It(n,1)??0,y:It(n,2)??0,z:It(n,3)??0,visibility:It(n,4)??0});return e}function js(t){const e=[];for(const n of Ui(t,pm,1))e.push({x:It(n,1)??0,y:It(n,2)??0,z:It(n,3)??0,visibility:It(n,4)??0});return e}function bf(t){return Array.from(t,(e=>e>127?e-256:e))}function Af(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);let n=0,i=0,r=0;for(let s=0;s<t.length;s++)n+=t[s]*e[s],i+=t[s]*t[s],r+=e[s]*e[s];if(i<=0||r<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*r)}let Ta;zt[516587230]=[0,Ft,eh,ll,kt],zt[518928384]=ll;const S_=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function zm(){if(Ta===void 0)try{await WebAssembly.instantiate(S_),Ta=!0}catch{Ta=!1}return Ta}async function Is(t,e=Yg``){const n=await zm()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${e}/${t}_${n}.js`,wasmBinaryPath:`${e}/${t}_${n}.wasm`}}var gr=class{};function Vm(){var t=navigator;return typeof OffscreenCanvas<"u"&&(!(function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")})(t)||!!((t=t.userAgent.match(/Version\/([\d]+).*Safari/))&&t.length>=1&&Number(t[1])>=17))}async function wf(t){if(typeof importScripts!="function"){const e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise(((n,i)=>{e.addEventListener("load",(()=>{n()}),!1),e.addEventListener("error",(r=>{i(r)}),!1),document.body.appendChild(e)}))}importScripts(t.toString())}function Gm(t){return t.videoWidth!==void 0?[t.videoWidth,t.videoHeight]:t.naturalWidth!==void 0?[t.naturalWidth,t.naturalHeight]:t.displayWidth!==void 0?[t.displayWidth,t.displayHeight]:[t.width,t.height]}function De(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(e=t.i.stringToNewUTF8(e)),t.i._free(e)}function Rf(t,e,n){if(!t.i.canvas)throw Error("No OpenGL canvas configured.");if(n?t.i._bindTextureToStream(n):t.i._bindTextureToCanvas(),!(n=t.i.canvas.getContext("webgl2")||t.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[i,r]=Gm(e);return!t.l||i===t.i.canvas.width&&r===t.i.canvas.height||(t.i.canvas.width=i,t.i.canvas.height=r),[i,r]}function Cf(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(e.length);for(let r=0;r<e.length;r++)i[r]=t.i.stringToNewUTF8(e[r]);e=t.i._malloc(4*i.length),t.i.HEAPU32.set(i,e>>2),n(e);for(const r of i)t.i._free(r);t.i._free(e)}function Qn(t,e,n){t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=n}function ki(t,e,n){let i=[];t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=(r,s,a)=>{s?(n(i,a),i=[]):i.push(r)}}gr.forVisionTasks=function(t){return Is("vision",t)},gr.forTextTasks=function(t){return Is("text",t)},gr.forGenAiExperimentalTasks=function(t){return Is("genai_experimental",t)},gr.forGenAiTasks=function(t){return Is("genai",t)},gr.forAudioTasks=function(t){return Is("audio",t)},gr.isSimdSupported=function(){return zm()};async function M_(t,e,n,i){return t=await(async(r,s,a,o,c)=>{if(s&&await wf(s),!self.ModuleFactory||a&&(await wf(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&c&&((s=self.Module).locateFile=c.locateFile,c.mainScriptUrlOrBlob&&(s.mainScriptUrlOrBlob=c.mainScriptUrlOrBlob)),c=await self.ModuleFactory(self.Module||c),self.ModuleFactory=self.Module=void 0,new r(c,o)})(t,n.wasmLoaderPath,n.assetLoaderPath,e,{locateFile:r=>r.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&r.endsWith(".data")?n.assetBinaryPath.toString():r}),await t.o(i),t}function mc(t,e){const n=rt(t.baseOptions,po,1)||new po;typeof e=="string"?(St(n,2,ys(e)),St(n,1)):e instanceof Uint8Array&&(St(n,1,vu(e,!1)),St(n,2)),Ue(t.baseOptions,0,1,n)}function Pf(t){try{const e=t.G.length;if(e===1)throw Error(t.G[0].message);if(e>1)throw Error("Encountered multiple errors: "+t.G.map((n=>n.message)).join(", "))}finally{t.G=[]}}function ye(t,e){t.B=Math.max(t.B,e)}function qo(t,e){t.A=new sn,wn(t.A,"PassThroughCalculator"),Mt(t.A,"free_memory"),Qe(t.A,"free_memory_unused_out"),yt(e,"free_memory"),Rn(e,t.A)}function ls(t,e){Mt(t.A,e),Qe(t.A,e+"_unused_out")}function Yo(t){t.g.addBoolToStream(!0,"free_memory",t.B)}var hl=class{constructor(t){this.g=t,this.G=[],this.B=0,this.g.setAutoRenderToScreen(!1)}l(t,e=!0){if(e){const n=t.baseOptions||{};if(t.baseOptions?.modelAssetBuffer&&t.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(rt(this.baseOptions,po,1)?.g()||rt(this.baseOptions,po,1)?.h()||t.baseOptions?.modelAssetBuffer||t.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(i,r){let s=rt(i.baseOptions,yf,3);if(!s){var a=s=new yf,o=new gf;Ys(a,4,eo,o)}"delegate"in r&&(r.delegate==="GPU"?(r=s,a=new Kg,Ys(r,2,eo,a)):(r=s,a=new gf,Ys(r,4,eo,a))),Ue(i.baseOptions,0,3,s)})(this,n),n.modelAssetPath)return fetch(n.modelAssetPath.toString()).then((i=>{if(i.ok)return i.arrayBuffer();throw Error(`Failed to fetch model: ${n.modelAssetPath} (${i.status})`)})).then((i=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(i),!0,!1,!1),mc(this,"/model.dat"),this.m(),this.J()}));if(n.modelAssetBuffer instanceof Uint8Array)mc(this,n.modelAssetBuffer);else if(n.modelAssetBuffer)return(async function(i){const r=[];for(var s=0;;){const{done:a,value:o}=await i.read();if(a)break;r.push(o),s+=o.length}if(r.length===0)return new Uint8Array(0);if(r.length===1)return r[0];i=new Uint8Array(s),s=0;for(const a of r)i.set(a,s),s+=a.length;return i})(n.modelAssetBuffer).then((i=>{mc(this,i),this.m(),this.J()}))}return this.m(),this.J(),Promise.resolve()}J(){}ca(){let t;if(this.g.ca((e=>{t=jg(e)})),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){this.g.attachErrorListener(((n,i)=>{this.G.push(Error(i))})),this.g.Ha(),this.g.setGraph(t,e),this.A=void 0,Pf(this)}finishProcessing(){this.g.finishProcessing(),Pf(this)}close(){this.A=void 0,this.g.closeGraph()}};function Li(t,e){if(!t)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}hl.prototype.close=hl.prototype.close;class y_{constructor(e,n,i,r){this.g=e,this.h=n,this.m=i,this.l=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function Lf(t,e,n){const i=t.g;if(n=Li(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,e),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(t.h,n),n}function Df(t,e){const n=t.g,i=Li(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);const r=Li(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(t.P),n.vertexAttribPointer(t.P,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const s=Li(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(t.J),n.vertexAttribPointer(t.J,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new y_(n,i,r,s)}function ih(t,e){if(t.g){if(e!==t.g)throw Error("Cannot change GL context once initialized")}else t.g=e}function rh(t,e,n,i){return ih(t,e),t.h||(t.m(),t.C()),n?(t.s||(t.s=Df(t,!0)),n=t.s):(t.v||(t.v=Df(t,!1)),n=t.v),e.useProgram(t.h),n.bind(),t.l(),t=i(),n.g.bindVertexArray(null),t}function Ko(t,e,n){return ih(t,e),t=Li(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function jo(t,e,n){ih(t,e),t.A||(t.A=Li(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.A),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)}function sh(t){t.g?.bindFramebuffer(t.g.FRAMEBUFFER,null)}var ah=class{G(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const t=this.g;if(this.h=Li(t.createProgram(),"Failed to create WebGL program"),this.Z=Lf(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.Y=Lf(this,this.G(),t.FRAGMENT_SHADER),t.linkProgram(this.h),!t.getProgramParameter(this.h,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);this.P=t.getAttribLocation(this.h,"aVertex"),this.J=t.getAttribLocation(this.h,"aTex")}C(){}l(){}close(){if(this.h){const t=this.g;t.deleteProgram(this.h),t.deleteShader(this.Z),t.deleteShader(this.Y)}this.A&&this.g.deleteFramebuffer(this.A),this.v&&this.v.close(),this.s&&this.s.close()}};function bi(t,e){switch(e){case 0:return t.g.find((n=>n instanceof Uint8Array));case 1:return t.g.find((n=>n instanceof Float32Array));case 2:return t.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${e}`)}}function fl(t){var e=bi(t,1);if(!e){if(e=bi(t,0))e=new Float32Array(e).map((i=>i/255));else{e=new Float32Array(t.width*t.height);const i=us(t);var n=oh(t);if(jo(n,i,Hm(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(t.width*t.height*4),i.readPixels(0,0,t.width,t.height,i.RGBA,i.FLOAT,n);for(let r=0,s=0;r<e.length;++r,s+=4)e[r]=n[s]}else i.readPixels(0,0,t.width,t.height,i.RED,i.FLOAT,e)}t.g.push(e)}return e}function Hm(t){let e=bi(t,2);if(!e){const n=us(t);e=Xm(t);const i=fl(t),r=Wm(t);n.texImage2D(n.TEXTURE_2D,0,r,t.width,t.height,0,n.RED,n.FLOAT,i),dl(t)}return e}function us(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=Li(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function Wm(t){if(t=us(t),!ba)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))ba=t.R32F;else{if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");ba=t.R16F}return ba}function oh(t){return t.l||(t.l=new ah),t.l}function Xm(t){const e=us(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=bi(t,2);return n||(n=Ko(oh(t),e,t.m?e.LINEAR:e.NEAREST),t.g.push(n),t.j=!0),e.bindTexture(e.TEXTURE_2D,n),n}function dl(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}var ba,Xt=class{constructor(t,e,n,i,r,s,a){this.g=t,this.m=e,this.j=n,this.canvas=i,this.l=r,this.width=s,this.height=a,this.j&&--If===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Da(){return!!bi(this,0)}ja(){return!!bi(this,1)}R(){return!!bi(this,2)}ia(){return(e=bi(t=this,0))||(e=fl(t),e=new Uint8Array(e.map((n=>255*n))),t.g.push(e)),e;var t,e}ha(){return fl(this)}N(){return Hm(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof Uint8Array)n=new Uint8Array(e);else if(e instanceof Float32Array)n=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{const i=us(this),r=oh(this);i.activeTexture(i.TEXTURE1),n=Ko(r,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);const s=Wm(this);i.texImage2D(i.TEXTURE_2D,0,s,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),jo(r,i,n),rh(r,i,!1,(()=>{Xm(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),dl(this)})),sh(r),dl(this)}}t.push(n)}return new Xt(t,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&us(this).deleteTexture(bi(this,2)),If=-1}};Xt.prototype.close=Xt.prototype.close,Xt.prototype.clone=Xt.prototype.clone,Xt.prototype.getAsWebGLTexture=Xt.prototype.N,Xt.prototype.getAsFloat32Array=Xt.prototype.ha,Xt.prototype.getAsUint8Array=Xt.prototype.ia,Xt.prototype.hasWebGLTexture=Xt.prototype.R,Xt.prototype.hasFloat32Array=Xt.prototype.ja,Xt.prototype.hasUint8Array=Xt.prototype.Da;var If=250;function ii(t,e){switch(e){case 0:return t.g.find((n=>n instanceof ImageData));case 1:return t.g.find((n=>typeof ImageBitmap<"u"&&n instanceof ImageBitmap));case 2:return t.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${e}`)}}function qm(t){var e=ii(t,0);if(!e){e=hs(t);const n=Zo(t),i=new Uint8Array(t.width*t.height*4);jo(n,e,to(t)),e.readPixels(0,0,t.width,t.height,e.RGBA,e.UNSIGNED_BYTE,i),sh(n),e=new ImageData(new Uint8ClampedArray(i.buffer),t.width,t.height),t.g.push(e)}return e}function to(t){let e=ii(t,2);if(!e){const n=hs(t);e=no(t);const i=ii(t,1)||qm(t);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,i),Gs(t)}return e}function hs(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=Li(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function Zo(t){return t.l||(t.l=new ah),t.l}function no(t){const e=hs(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=ii(t,2);return n||(n=Ko(Zo(t),e),t.g.push(n),t.m=!0),e.bindTexture(e.TEXTURE_2D,n),n}function Gs(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}function Uf(t){const e=hs(t);return rh(Zo(t),e,!0,(()=>(function(n,i){const r=n.canvas;if(r.width===n.width&&r.height===n.height)return i();const s=r.width,a=r.height;return r.width=n.width,r.height=n.height,n=i(),r.width=s,r.height=a,n})(t,(()=>{if(e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLE_FAN,0,4),!(t.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return t.canvas.transferToImageBitmap()}))))}var qt=class{constructor(t,e,n,i,r,s,a){this.g=t,this.j=e,this.m=n,this.canvas=i,this.l=r,this.width=s,this.height=a,(this.j||this.m)&&--Nf===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ca(){return!!ii(this,0)}ka(){return!!ii(this,1)}R(){return!!ii(this,2)}Aa(){return qm(this)}za(){var t=ii(this,1);return t||(to(this),no(this),t=Uf(this),Gs(this),this.g.push(t),this.j=!0),t}N(){return to(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof ImageData)n=new ImageData(e.data,this.width,this.height);else if(e instanceof WebGLTexture){const i=hs(this),r=Zo(this);i.activeTexture(i.TEXTURE1),n=Ko(r,i),i.bindTexture(i.TEXTURE_2D,n),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),jo(r,i,n),rh(r,i,!1,(()=>{no(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Gs(this)})),sh(r),Gs(this)}else{if(!(e instanceof ImageBitmap))throw Error(`Type is not supported: ${e}`);to(this),no(this),n=Uf(this),Gs(this)}t.push(n)}return new qt(t,this.ka(),this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&ii(this,1).close(),this.m&&hs(this).deleteTexture(ii(this,2)),Nf=-1}};qt.prototype.close=qt.prototype.close,qt.prototype.clone=qt.prototype.clone,qt.prototype.getAsWebGLTexture=qt.prototype.N,qt.prototype.getAsImageBitmap=qt.prototype.za,qt.prototype.getAsImageData=qt.prototype.Aa,qt.prototype.hasWebGLTexture=qt.prototype.R,qt.prototype.hasImageBitmap=qt.prototype.ka,qt.prototype.hasImageData=qt.prototype.Ca;var Nf=250;function Jn(...t){return t.map((([e,n])=>({start:e,end:n})))}const E_=(function(t){return class extends t{Ha(){this.i._registerModelResourcesGraphService()}}})((Ff=class{constructor(t,e){this.l=!0,this.i=t,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:Vm()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(t){const e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph(new TextEncoder().encode(t),!1)}setGraph(t,e){const n=t.length,i=this.i._malloc(n);this.i.HEAPU8.set(t,i),e?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(t,e,n,i,r){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),De(this,i||"input_audio",(s=>{De(this,r=r||"audio_header",(a=>{this.i._configureAudio(s,a,t,e??0,n)}))}))}setAutoResizeCanvas(t){this.l=t}setAutoRenderToScreen(t){this.i._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.i.gpuOriginForWebTexturesIsBottomLeft=t}ca(t){Qn(this,"__graph_config__",(e=>{t(e)})),De(this,"__graph_config__",(e=>{this.i._getGraphConfig(e,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(t){this.i.errorListener=t}attachEmptyPacketListener(t,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[t]=e}addAudioToStream(t,e,n){this.addAudioToStreamWithShape(t,0,0,e,n)}addAudioToStreamWithShape(t,e,n,i,r){const s=4*t.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(t,this.g/4),De(this,i,(a=>{this.i._addAudioToInputStream(this.g,e,n,a,r)}))}addGpuBufferToStream(t,e,n){De(this,e,(i=>{const[r,s]=Rf(this,t,i);this.i._addBoundTextureToStream(i,r,s,n)}))}addBoolToStream(t,e,n){De(this,e,(i=>{this.i._addBoolToInputStream(t,i,n)}))}addDoubleToStream(t,e,n){De(this,e,(i=>{this.i._addDoubleToInputStream(t,i,n)}))}addFloatToStream(t,e,n){De(this,e,(i=>{this.i._addFloatToInputStream(t,i,n)}))}addIntToStream(t,e,n){De(this,e,(i=>{this.i._addIntToInputStream(t,i,n)}))}addUintToStream(t,e,n){De(this,e,(i=>{this.i._addUintToInputStream(t,i,n)}))}addStringToStream(t,e,n){De(this,e,(i=>{De(this,t,(r=>{this.i._addStringToInputStream(r,i,n)}))}))}addStringRecordToStream(t,e,n){De(this,e,(i=>{Cf(this,Object.keys(t),(r=>{Cf(this,Object.values(t),(s=>{this.i._addFlatHashMapToInputStream(r,s,Object.keys(t).length,i,n)}))}))}))}addProtoToStream(t,e,n,i){De(this,n,(r=>{De(this,e,(s=>{const a=this.i._malloc(t.length);this.i.HEAPU8.set(t,a),this.i._addProtoToInputStream(a,t.length,s,r,i),this.i._free(a)}))}))}addEmptyPacketToStream(t,e){De(this,t,(n=>{this.i._addEmptyPacketToInputStream(n,e)}))}addBoolVectorToStream(t,e,n){De(this,e,(i=>{const r=this.i._allocateBoolVector(t.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const s of t)this.i._addBoolVectorEntry(r,s);this.i._addBoolVectorToInputStream(r,i,n)}))}addDoubleVectorToStream(t,e,n){De(this,e,(i=>{const r=this.i._allocateDoubleVector(t.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const s of t)this.i._addDoubleVectorEntry(r,s);this.i._addDoubleVectorToInputStream(r,i,n)}))}addFloatVectorToStream(t,e,n){De(this,e,(i=>{const r=this.i._allocateFloatVector(t.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const s of t)this.i._addFloatVectorEntry(r,s);this.i._addFloatVectorToInputStream(r,i,n)}))}addIntVectorToStream(t,e,n){De(this,e,(i=>{const r=this.i._allocateIntVector(t.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const s of t)this.i._addIntVectorEntry(r,s);this.i._addIntVectorToInputStream(r,i,n)}))}addUintVectorToStream(t,e,n){De(this,e,(i=>{const r=this.i._allocateUintVector(t.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of t)this.i._addUintVectorEntry(r,s);this.i._addUintVectorToInputStream(r,i,n)}))}addStringVectorToStream(t,e,n){De(this,e,(i=>{const r=this.i._allocateStringVector(t.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const s of t)De(this,s,(a=>{this.i._addStringVectorEntry(r,a)}));this.i._addStringVectorToInputStream(r,i,n)}))}addBoolToInputSidePacket(t,e){De(this,e,(n=>{this.i._addBoolToInputSidePacket(t,n)}))}addDoubleToInputSidePacket(t,e){De(this,e,(n=>{this.i._addDoubleToInputSidePacket(t,n)}))}addFloatToInputSidePacket(t,e){De(this,e,(n=>{this.i._addFloatToInputSidePacket(t,n)}))}addIntToInputSidePacket(t,e){De(this,e,(n=>{this.i._addIntToInputSidePacket(t,n)}))}addUintToInputSidePacket(t,e){De(this,e,(n=>{this.i._addUintToInputSidePacket(t,n)}))}addStringToInputSidePacket(t,e){De(this,e,(n=>{De(this,t,(i=>{this.i._addStringToInputSidePacket(i,n)}))}))}addProtoToInputSidePacket(t,e,n){De(this,n,(i=>{De(this,e,(r=>{const s=this.i._malloc(t.length);this.i.HEAPU8.set(t,s),this.i._addProtoToInputSidePacket(s,t.length,r,i),this.i._free(s)}))}))}addBoolVectorToInputSidePacket(t,e){De(this,e,(n=>{const i=this.i._allocateBoolVector(t.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const r of t)this.i._addBoolVectorEntry(i,r);this.i._addBoolVectorToInputSidePacket(i,n)}))}addDoubleVectorToInputSidePacket(t,e){De(this,e,(n=>{const i=this.i._allocateDoubleVector(t.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const r of t)this.i._addDoubleVectorEntry(i,r);this.i._addDoubleVectorToInputSidePacket(i,n)}))}addFloatVectorToInputSidePacket(t,e){De(this,e,(n=>{const i=this.i._allocateFloatVector(t.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const r of t)this.i._addFloatVectorEntry(i,r);this.i._addFloatVectorToInputSidePacket(i,n)}))}addIntVectorToInputSidePacket(t,e){De(this,e,(n=>{const i=this.i._allocateIntVector(t.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const r of t)this.i._addIntVectorEntry(i,r);this.i._addIntVectorToInputSidePacket(i,n)}))}addUintVectorToInputSidePacket(t,e){De(this,e,(n=>{const i=this.i._allocateUintVector(t.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of t)this.i._addUintVectorEntry(i,r);this.i._addUintVectorToInputSidePacket(i,n)}))}addStringVectorToInputSidePacket(t,e){De(this,e,(n=>{const i=this.i._allocateStringVector(t.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const r of t)De(this,r,(s=>{this.i._addStringVectorEntry(i,s)}));this.i._addStringVectorToInputSidePacket(i,n)}))}attachBoolListener(t,e){Qn(this,t,e),De(this,t,(n=>{this.i._attachBoolListener(n)}))}attachBoolVectorListener(t,e){ki(this,t,e),De(this,t,(n=>{this.i._attachBoolVectorListener(n)}))}attachIntListener(t,e){Qn(this,t,e),De(this,t,(n=>{this.i._attachIntListener(n)}))}attachIntVectorListener(t,e){ki(this,t,e),De(this,t,(n=>{this.i._attachIntVectorListener(n)}))}attachUintListener(t,e){Qn(this,t,e),De(this,t,(n=>{this.i._attachUintListener(n)}))}attachUintVectorListener(t,e){ki(this,t,e),De(this,t,(n=>{this.i._attachUintVectorListener(n)}))}attachDoubleListener(t,e){Qn(this,t,e),De(this,t,(n=>{this.i._attachDoubleListener(n)}))}attachDoubleVectorListener(t,e){ki(this,t,e),De(this,t,(n=>{this.i._attachDoubleVectorListener(n)}))}attachFloatListener(t,e){Qn(this,t,e),De(this,t,(n=>{this.i._attachFloatListener(n)}))}attachFloatVectorListener(t,e){ki(this,t,e),De(this,t,(n=>{this.i._attachFloatVectorListener(n)}))}attachStringListener(t,e){Qn(this,t,e),De(this,t,(n=>{this.i._attachStringListener(n)}))}attachStringVectorListener(t,e){ki(this,t,e),De(this,t,(n=>{this.i._attachStringVectorListener(n)}))}attachProtoListener(t,e,n){Qn(this,t,e),De(this,t,(i=>{this.i._attachProtoListener(i,n||!1)}))}attachProtoVectorListener(t,e,n){ki(this,t,e),De(this,t,(i=>{this.i._attachProtoVectorListener(i,n||!1)}))}attachAudioListener(t,e,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),Qn(this,t,((i,r)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,r)})),De(this,t,(i=>{this.i._attachAudioListener(i,n||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends Ff{get ea(){return this.i}oa(t,e,n){De(this,e,(i=>{const[r,s]=Rf(this,t,i);this.ea._addBoundTextureAsImageToStream(i,r,s,n)}))}V(t,e){Qn(this,t,e),De(this,t,(n=>{this.ea._attachImageListener(n)}))}ba(t,e){ki(this,t,e),De(this,t,(n=>{this.ea._attachImageVectorListener(n)}))}}));var Ff,zn=class extends E_{};async function $e(t,e,n){return(async function(i,r,s,a){return M_(i,r,s,a)})(t,n.canvas??(Vm()?void 0:document.createElement("canvas")),e,n)}function Ym(t,e,n,i){if(t.U){const s=new gm;if(n?.regionOfInterest){if(!t.na)throw Error("This task doesn't support region-of-interest.");var r=n.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");Pe(s,1,(r.left+r.right)/2),Pe(s,2,(r.top+r.bottom)/2),Pe(s,4,r.right-r.left),Pe(s,3,r.bottom-r.top)}else Pe(s,1,.5),Pe(s,2,.5),Pe(s,4,1),Pe(s,3,1);if(n?.rotationDegrees){if(n?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(Pe(s,5,-Math.PI*n.rotationDegrees/180),n?.rotationDegrees%180!=0){const[a,o]=Gm(e);n=It(s,3)*o/a,r=It(s,4)*a/o,Pe(s,4,n),Pe(s,3,r)}}t.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",t.U,i)}t.g.oa(e,t.Z,i??performance.now()),t.finishProcessing()}function Vn(t,e,n){if(t.baseOptions?.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");Ym(t,e,n,t.B+1)}function gi(t,e,n,i){if(!t.baseOptions?.g())throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");Ym(t,e,n,i)}function fs(t,e,n,i){var r=e.data;const s=e.width,a=s*(e=e.height);if((r instanceof Uint8Array||r instanceof Float32Array)&&r.length!==a)throw Error("Unsupported channel count: "+r.length/a);return t=new Xt([r],n,!1,t.g.i.canvas,t.P,s,e),i?t.clone():t}var pn=class extends hl{constructor(t,e,n,i){super(t),this.g=t,this.Z=e,this.U=n,this.na=i,this.P=new ah}l(t,e=!0){if("runningMode"in t&&ra(this.baseOptions,2,!!t.runningMode&&t.runningMode!=="IMAGE"),t.canvas!==void 0&&this.g.i.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(t,e)}close(){this.P.close(),super.close()}};pn.prototype.close=pn.prototype.close;var Pn=class extends pn{constructor(t,e){super(new zn(t,e),"image_in","norm_rect_in",!1),this.j={detections:[]},Ue(t=this.h=new Wo,0,1,e=new bt),Pe(this.h,2,.5),Pe(this.h,3,.3)}get baseOptions(){return rt(this.h,bt,1)}set baseOptions(t){Ue(this.h,0,1,t)}o(t){return"minDetectionConfidence"in t&&Pe(this.h,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&Pe(this.h,3,t.minSuppressionThreshold??.3),this.l(t)}D(t,e){return this.j={detections:[]},Vn(this,t,e),this.j}F(t,e,n){return this.j={detections:[]},gi(this,t,n,e),this.j}m(){var t=new mn;yt(t,"image_in"),yt(t,"norm_rect_in"),at(t,"detections");const e=new bn;Kn(e,o_,this.h);const n=new sn;wn(n,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Mt(n,"IMAGE:image_in"),Mt(n,"NORM_RECT:norm_rect_in"),Qe(n,"DETECTIONS:detections"),n.o(e),Rn(t,n),this.g.attachProtoVectorListener("detections",((i,r)=>{for(const s of i)i=dm(s),this.j.detections.push(km(i));ye(this,r)})),this.g.attachEmptyPacketListener("detections",(i=>{ye(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Pn.prototype.detectForVideo=Pn.prototype.F,Pn.prototype.detect=Pn.prototype.D,Pn.prototype.setOptions=Pn.prototype.o,Pn.createFromModelPath=async function(t,e){return $e(Pn,t,{baseOptions:{modelAssetPath:e}})},Pn.createFromModelBuffer=function(t,e){return $e(Pn,t,{baseOptions:{modelAssetBuffer:e}})},Pn.createFromOptions=function(t,e){return $e(Pn,t,e)};var ch=Jn([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),lh=Jn([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),uh=Jn([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),Km=Jn([474,475],[475,476],[476,477],[477,474]),hh=Jn([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),fh=Jn([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),jm=Jn([469,470],[470,471],[471,472],[472,469]),dh=Jn([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),Zm=[...ch,...lh,...uh,...hh,...fh,...dh],Jm=Jn([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function Of(t){t.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var At=class extends pn{constructor(t,e){super(new zn(t,e),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Ue(t=this.h=new Mm,0,1,e=new bt),this.v=new Sm,Ue(this.h,0,3,this.v),this.s=new Wo,Ue(this.h,0,2,this.s),fi(this.s,4,1),Pe(this.s,2,.5),Pe(this.v,2,.5),Pe(this.h,4,.5)}get baseOptions(){return rt(this.h,bt,1)}set baseOptions(t){Ue(this.h,0,1,t)}o(t){return"numFaces"in t&&fi(this.s,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&Pe(this.s,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&Pe(this.h,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&Pe(this.v,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.l(t)}D(t,e){return Of(this),Vn(this,t,e),this.j}F(t,e,n){return Of(this),gi(this,t,n,e),this.j}m(){var t=new mn;yt(t,"image_in"),yt(t,"norm_rect"),at(t,"face_landmarks");const e=new bn;Kn(e,l_,this.h);const n=new sn;wn(n,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Mt(n,"IMAGE:image_in"),Mt(n,"NORM_RECT:norm_rect"),Qe(n,"NORM_LANDMARKS:face_landmarks"),n.o(e),Rn(t,n),this.g.attachProtoVectorListener("face_landmarks",((i,r)=>{for(const s of i)i=ga(s),this.j.faceLandmarks.push(Xo(i));ye(this,r)})),this.g.attachEmptyPacketListener("face_landmarks",(i=>{ye(this,i)})),this.outputFaceBlendshapes&&(at(t,"blendshapes"),Qe(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((i,r)=>{if(this.outputFaceBlendshapes)for(const s of i)i=Ho(s),this.j.faceBlendshapes.push(nh(i.g()??[]));ye(this,r)})),this.g.attachEmptyPacketListener("blendshapes",(i=>{ye(this,i)}))),this.outputFacialTransformationMatrixes&&(at(t,"face_geometry"),Qe(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((i,r)=>{if(this.outputFacialTransformationMatrixes)for(const s of i)(i=rt(c_(s),Qg,2))&&this.j.facialTransformationMatrixes.push({rows:Bn(i,1)??0??0,columns:Bn(i,2)??0??0,data:Mr(i,3,sr,Sr()).slice()??[]});ye(this,r)})),this.g.attachEmptyPacketListener("face_geometry",(i=>{ye(this,i)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};At.prototype.detectForVideo=At.prototype.F,At.prototype.detect=At.prototype.D,At.prototype.setOptions=At.prototype.o,At.createFromModelPath=function(t,e){return $e(At,t,{baseOptions:{modelAssetPath:e}})},At.createFromModelBuffer=function(t,e){return $e(At,t,{baseOptions:{modelAssetBuffer:e}})},At.createFromOptions=function(t,e){return $e(At,t,e)},At.FACE_LANDMARKS_LIPS=ch,At.FACE_LANDMARKS_LEFT_EYE=lh,At.FACE_LANDMARKS_LEFT_EYEBROW=uh,At.FACE_LANDMARKS_LEFT_IRIS=Km,At.FACE_LANDMARKS_RIGHT_EYE=hh,At.FACE_LANDMARKS_RIGHT_EYEBROW=fh,At.FACE_LANDMARKS_RIGHT_IRIS=jm,At.FACE_LANDMARKS_FACE_OVAL=dh,At.FACE_LANDMARKS_CONTOURS=Zm,At.FACE_LANDMARKS_TESSELATION=Jm;var ei=class extends pn{constructor(t,e){super(new zn(t,e),"image_in","norm_rect",!0),Ue(t=this.j=new Em,0,1,e=new bt)}get baseOptions(){return rt(this.j,bt,1)}set baseOptions(t){Ue(this.j,0,1,t)}o(t){return super.l(t)}Ka(t,e,n){const i=typeof e!="function"?e:{};if(this.h=typeof e=="function"?e:n,Vn(this,t,i??{}),!this.h)return this.s}m(){var t=new mn;yt(t,"image_in"),yt(t,"norm_rect"),at(t,"stylized_image");const e=new bn;Kn(e,u_,this.j);const n=new sn;wn(n,"mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"),Mt(n,"IMAGE:image_in"),Mt(n,"NORM_RECT:norm_rect"),Qe(n,"STYLIZED_IMAGE:stylized_image"),n.o(e),Rn(t,n),this.g.V("stylized_image",((i,r)=>{var s=!this.h,a=i.data,o=i.width;const c=o*(i=i.height);if(a instanceof Uint8Array)if(a.length===3*c){const l=new Uint8ClampedArray(4*c);for(let u=0;u<c;++u)l[4*u]=a[3*u],l[4*u+1]=a[3*u+1],l[4*u+2]=a[3*u+2],l[4*u+3]=255;a=new ImageData(l,o,i)}else{if(a.length!==4*c)throw Error("Unsupported channel count: "+a.length/c);a=new ImageData(new Uint8ClampedArray(a.buffer,a.byteOffset,a.length),o,i)}else if(!(a instanceof WebGLTexture))throw Error(`Unsupported format: ${a.constructor.name}`);o=new qt([a],!1,!1,this.g.i.canvas,this.P,o,i),this.s=s=s?o.clone():o,this.h&&this.h(s),ye(this,r)})),this.g.attachEmptyPacketListener("stylized_image",(i=>{this.s=null,this.h&&this.h(null),ye(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ei.prototype.stylize=ei.prototype.Ka,ei.prototype.setOptions=ei.prototype.o,ei.createFromModelPath=function(t,e){return $e(ei,t,{baseOptions:{modelAssetPath:e}})},ei.createFromModelBuffer=function(t,e){return $e(ei,t,{baseOptions:{modelAssetBuffer:e}})},ei.createFromOptions=function(t,e){return $e(ei,t,e)};var ph=Jn([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function Bf(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[]}function kf(t){return t.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function zf(t,e=!0){const n=[];for(const r of t){var i=Ho(r);t=[];for(const s of i.g())i=e&&Bn(s,1)!=null?Bn(s,1)??0:-1,t.push({score:It(s,2)??0,index:i,categoryName:kn(s,3)??""??"",displayName:kn(s,4)??""??""});n.push(t)}return n}var vn=class extends pn{constructor(t,e){super(new zn(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ue(t=this.j=new Am,0,1,e=new bt),this.s=new $u,Ue(this.j,0,2,this.s),this.C=new Ju,Ue(this.s,0,3,this.C),this.v=new bm,Ue(this.s,0,2,this.v),this.h=new h_,Ue(this.j,0,3,this.h),Pe(this.v,2,.5),Pe(this.s,4,.5),Pe(this.C,2,.5)}get baseOptions(){return rt(this.j,bt,1)}set baseOptions(t){Ue(this.j,0,1,t)}o(t){if(fi(this.v,3,t.numHands??1),"minHandDetectionConfidence"in t&&Pe(this.v,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Pe(this.s,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Pe(this.C,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new Ir,n=e,i=ul(t.cannedGesturesClassifierOptions,rt(this.h,Ir,3)?.h());Ue(n,0,2,i),Ue(this.h,0,3,e)}else t.cannedGesturesClassifierOptions===void 0&&rt(this.h,Ir,3)?.g();return t.customGesturesClassifierOptions?(Ue(n=e=new Ir,0,2,i=ul(t.customGesturesClassifierOptions,rt(this.h,Ir,4)?.h())),Ue(this.h,0,4,e)):t.customGesturesClassifierOptions===void 0&&rt(this.h,Ir,4)?.g(),this.l(t)}Fa(t,e){return Bf(this),Vn(this,t,e),kf(this)}Ga(t,e,n){return Bf(this),gi(this,t,n,e),kf(this)}m(){var t=new mn;yt(t,"image_in"),yt(t,"norm_rect"),at(t,"hand_gestures"),at(t,"hand_landmarks"),at(t,"world_hand_landmarks"),at(t,"handedness");const e=new bn;Kn(e,f_,this.j);const n=new sn;wn(n,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Mt(n,"IMAGE:image_in"),Mt(n,"NORM_RECT:norm_rect"),Qe(n,"HAND_GESTURES:hand_gestures"),Qe(n,"LANDMARKS:hand_landmarks"),Qe(n,"WORLD_LANDMARKS:world_hand_landmarks"),Qe(n,"HANDEDNESS:handedness"),n.o(e),Rn(t,n),this.g.attachProtoVectorListener("hand_landmarks",((i,r)=>{for(const s of i){i=ga(s);const a=[];for(const o of Ui(i,mm,1))a.push({x:It(o,1)??0,y:It(o,2)??0,z:It(o,3)??0,visibility:It(o,4)??0});this.landmarks.push(a)}ye(this,r)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{ye(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,r)=>{for(const s of i){i=Qr(s);const a=[];for(const o of Ui(i,pm,1))a.push({x:It(o,1)??0,y:It(o,2)??0,z:It(o,3)??0,visibility:It(o,4)??0});this.worldLandmarks.push(a)}ye(this,r)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{ye(this,i)})),this.g.attachProtoVectorListener("hand_gestures",((i,r)=>{this.gestures.push(...zf(i,!1)),ye(this,r)})),this.g.attachEmptyPacketListener("hand_gestures",(i=>{ye(this,i)})),this.g.attachProtoVectorListener("handedness",((i,r)=>{this.handedness.push(...zf(i)),ye(this,r)})),this.g.attachEmptyPacketListener("handedness",(i=>{ye(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};function Vf(t){return{landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}vn.prototype.recognizeForVideo=vn.prototype.Ga,vn.prototype.recognize=vn.prototype.Fa,vn.prototype.setOptions=vn.prototype.o,vn.createFromModelPath=function(t,e){return $e(vn,t,{baseOptions:{modelAssetPath:e}})},vn.createFromModelBuffer=function(t,e){return $e(vn,t,{baseOptions:{modelAssetBuffer:e}})},vn.createFromOptions=function(t,e){return $e(vn,t,e)},vn.HAND_CONNECTIONS=ph;var xn=class extends pn{constructor(t,e){super(new zn(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ue(t=this.h=new $u,0,1,e=new bt),this.s=new Ju,Ue(this.h,0,3,this.s),this.j=new bm,Ue(this.h,0,2,this.j),fi(this.j,3,1),Pe(this.j,2,.5),Pe(this.s,2,.5),Pe(this.h,4,.5)}get baseOptions(){return rt(this.h,bt,1)}set baseOptions(t){Ue(this.h,0,1,t)}o(t){return"numHands"in t&&fi(this.j,3,t.numHands??1),"minHandDetectionConfidence"in t&&Pe(this.j,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Pe(this.h,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Pe(this.s,2,t.minHandPresenceConfidence??.5),this.l(t)}D(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Vn(this,t,e),Vf(this)}F(t,e,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],gi(this,t,n,e),Vf(this)}m(){var t=new mn;yt(t,"image_in"),yt(t,"norm_rect"),at(t,"hand_landmarks"),at(t,"world_hand_landmarks"),at(t,"handedness");const e=new bn;Kn(e,d_,this.h);const n=new sn;wn(n,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Mt(n,"IMAGE:image_in"),Mt(n,"NORM_RECT:norm_rect"),Qe(n,"LANDMARKS:hand_landmarks"),Qe(n,"WORLD_LANDMARKS:world_hand_landmarks"),Qe(n,"HANDEDNESS:handedness"),n.o(e),Rn(t,n),this.g.attachProtoVectorListener("hand_landmarks",((i,r)=>{for(const s of i)i=ga(s),this.landmarks.push(Xo(i));ye(this,r)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{ye(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,r)=>{for(const s of i)i=Qr(s),this.worldLandmarks.push(js(i));ye(this,r)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{ye(this,i)})),this.g.attachProtoVectorListener("handedness",((i,r)=>{var s=this.handedness,a=s.push;const o=[];for(const c of i){i=Ho(c);const l=[];for(const u of i.g())l.push({score:It(u,2)??0,index:Bn(u,1)??0??-1,categoryName:kn(u,3)??""??"",displayName:kn(u,4)??""??""});o.push(l)}a.call(s,...o),ye(this,r)})),this.g.attachEmptyPacketListener("handedness",(i=>{ye(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};xn.prototype.detectForVideo=xn.prototype.F,xn.prototype.detect=xn.prototype.D,xn.prototype.setOptions=xn.prototype.o,xn.createFromModelPath=function(t,e){return $e(xn,t,{baseOptions:{modelAssetPath:e}})},xn.createFromModelBuffer=function(t,e){return $e(xn,t,{baseOptions:{modelAssetBuffer:e}})},xn.createFromOptions=function(t,e){return $e(xn,t,e)},xn.HAND_CONNECTIONS=ph;var $m=Jn([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function Gf(t){t.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function Hf(t){try{if(!t.C)return t.h;t.C(t.h)}finally{Yo(t)}}function Aa(t,e){t=ga(t),e.push(Xo(t))}var Et=class extends pn{constructor(t,e){super(new zn(t,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Ue(t=this.j=new Lm,0,1,e=new bt),this.K=new Ju,Ue(this.j,0,2,this.K),this.Y=new p_,Ue(this.j,0,3,this.Y),this.s=new Wo,Ue(this.j,0,4,this.s),this.H=new Sm,Ue(this.j,0,5,this.H),this.v=new Cm,Ue(this.j,0,6,this.v),this.L=new Pm,Ue(this.j,0,7,this.L),Pe(this.s,2,.5),Pe(this.s,3,.3),Pe(this.H,2,.5),Pe(this.v,2,.5),Pe(this.v,3,.3),Pe(this.L,2,.5),Pe(this.K,2,.5)}get baseOptions(){return rt(this.j,bt,1)}set baseOptions(t){Ue(this.j,0,1,t)}o(t){return"minFaceDetectionConfidence"in t&&Pe(this.s,2,t.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in t&&Pe(this.s,3,t.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in t&&Pe(this.H,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"minPoseDetectionConfidence"in t&&Pe(this.v,2,t.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in t&&Pe(this.v,3,t.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in t&&Pe(this.L,2,t.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in t&&(this.outputPoseSegmentationMasks=!!t.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in t&&Pe(this.K,2,t.minHandLandmarksConfidence??.5),this.l(t)}D(t,e,n){const i=typeof e!="function"?e:{};return this.C=typeof e=="function"?e:n,Gf(this),Vn(this,t,i),Hf(this)}F(t,e,n,i){const r=typeof n!="function"?n:{};return this.C=typeof n=="function"?n:i,Gf(this),gi(this,t,r,e),Hf(this)}m(){var t=new mn;yt(t,"input_frames_image"),at(t,"pose_landmarks"),at(t,"pose_world_landmarks"),at(t,"face_landmarks"),at(t,"left_hand_landmarks"),at(t,"left_hand_world_landmarks"),at(t,"right_hand_landmarks"),at(t,"right_hand_world_landmarks");const e=new bn,n=new ff;rl(n,1,ys("type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),""),(function(r,s){if(s!=null)if(Array.isArray(s))St(r,2,Po(s,Au,void 0,void 0,!1));else{if(!(typeof s=="string"||s instanceof Ci||br(s)))throw Error("invalid value in Any.value field: "+s+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");rl(r,2,vu(s,!1),Ar())}})(n,this.j.g());const i=new sn;wn(i,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),uo(i,8,ff,n),Mt(i,"IMAGE:input_frames_image"),Qe(i,"POSE_LANDMARKS:pose_landmarks"),Qe(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),Qe(i,"FACE_LANDMARKS:face_landmarks"),Qe(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),Qe(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),Qe(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),Qe(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(e),Rn(t,i),qo(this,t),this.g.attachProtoListener("pose_landmarks",((r,s)=>{Aa(r,this.h.poseLandmarks),ye(this,s)})),this.g.attachEmptyPacketListener("pose_landmarks",(r=>{ye(this,r)})),this.g.attachProtoListener("pose_world_landmarks",((r,s)=>{var a=this.h.poseWorldLandmarks;r=Qr(r),a.push(js(r)),ye(this,s)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(r=>{ye(this,r)})),this.outputPoseSegmentationMasks&&(Qe(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),ls(this,"pose_segmentation_mask"),this.g.V("pose_segmentation_mask",((r,s)=>{this.h.poseSegmentationMasks=[fs(this,r,!0,!this.C)],ye(this,s)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(r=>{this.h.poseSegmentationMasks=[],ye(this,r)}))),this.g.attachProtoListener("face_landmarks",((r,s)=>{Aa(r,this.h.faceLandmarks),ye(this,s)})),this.g.attachEmptyPacketListener("face_landmarks",(r=>{ye(this,r)})),this.outputFaceBlendshapes&&(at(t,"extra_blendshapes"),Qe(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((r,s)=>{var a=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(r=Ho(r),a.push(nh(r.g()??[]))),ye(this,s)})),this.g.attachEmptyPacketListener("extra_blendshapes",(r=>{ye(this,r)}))),this.g.attachProtoListener("left_hand_landmarks",((r,s)=>{Aa(r,this.h.leftHandLandmarks),ye(this,s)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(r=>{ye(this,r)})),this.g.attachProtoListener("left_hand_world_landmarks",((r,s)=>{var a=this.h.leftHandWorldLandmarks;r=Qr(r),a.push(js(r)),ye(this,s)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(r=>{ye(this,r)})),this.g.attachProtoListener("right_hand_landmarks",((r,s)=>{Aa(r,this.h.rightHandLandmarks),ye(this,s)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(r=>{ye(this,r)})),this.g.attachProtoListener("right_hand_world_landmarks",((r,s)=>{var a=this.h.rightHandWorldLandmarks;r=Qr(r),a.push(js(r)),ye(this,s)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(r=>{ye(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Et.prototype.detectForVideo=Et.prototype.F,Et.prototype.detect=Et.prototype.D,Et.prototype.setOptions=Et.prototype.o,Et.createFromModelPath=function(t,e){return $e(Et,t,{baseOptions:{modelAssetPath:e}})},Et.createFromModelBuffer=function(t,e){return $e(Et,t,{baseOptions:{modelAssetBuffer:e}})},Et.createFromOptions=function(t,e){return $e(Et,t,e)},Et.HAND_CONNECTIONS=ph,Et.POSE_CONNECTIONS=$m,Et.FACE_LANDMARKS_LIPS=ch,Et.FACE_LANDMARKS_LEFT_EYE=lh,Et.FACE_LANDMARKS_LEFT_EYEBROW=uh,Et.FACE_LANDMARKS_LEFT_IRIS=Km,Et.FACE_LANDMARKS_RIGHT_EYE=hh,Et.FACE_LANDMARKS_RIGHT_EYEBROW=fh,Et.FACE_LANDMARKS_RIGHT_IRIS=jm,Et.FACE_LANDMARKS_FACE_OVAL=dh,Et.FACE_LANDMARKS_CONTOURS=Zm,Et.FACE_LANDMARKS_TESSELATION=Jm;var Ln=class extends pn{constructor(t,e){super(new zn(t,e),"input_image","norm_rect",!0),this.j={classifications:[]},Ue(t=this.h=new Dm,0,1,e=new bt)}get baseOptions(){return rt(this.h,bt,1)}set baseOptions(t){Ue(this.h,0,1,t)}o(t){return Ue(this.h,0,2,ul(t,rt(this.h,Ku,2))),this.l(t)}qa(t,e){return this.j={classifications:[]},Vn(this,t,e),this.j}ra(t,e,n){return this.j={classifications:[]},gi(this,t,n,e),this.j}m(){var t=new mn;yt(t,"input_image"),yt(t,"norm_rect"),at(t,"classifications");const e=new bn;Kn(e,m_,this.h);const n=new sn;wn(n,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Mt(n,"IMAGE:input_image"),Mt(n,"NORM_RECT:norm_rect"),Qe(n,"CLASSIFICATIONS:classifications"),n.o(e),Rn(t,n),this.g.attachProtoListener("classifications",((i,r)=>{this.j=(function(s){const a={classifications:Ui(s,t_,1).map((o=>nh(rt(o,hm,4)?.g()??[],Bn(o,2)??0,kn(o,3)??"")))};return tl(os(s,2))!=null&&(a.timestampMs=tl(os(s,2))??0),a})(n_(i)),ye(this,r)})),this.g.attachEmptyPacketListener("classifications",(i=>{ye(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Ln.prototype.classifyForVideo=Ln.prototype.ra,Ln.prototype.classify=Ln.prototype.qa,Ln.prototype.setOptions=Ln.prototype.o,Ln.createFromModelPath=function(t,e){return $e(Ln,t,{baseOptions:{modelAssetPath:e}})},Ln.createFromModelBuffer=function(t,e){return $e(Ln,t,{baseOptions:{modelAssetBuffer:e}})},Ln.createFromOptions=function(t,e){return $e(Ln,t,e)};var Sn=class extends pn{constructor(t,e){super(new zn(t,e),"image_in","norm_rect",!0),this.h=new Im,this.embeddings={embeddings:[]},Ue(t=this.h,0,1,e=new bt)}get baseOptions(){return rt(this.h,bt,1)}set baseOptions(t){Ue(this.h,0,1,t)}o(t){var e=this.h,n=rt(this.h,Mf,2);return n=n?n.clone():new Mf,t.l2Normalize!==void 0?ra(n,1,t.l2Normalize):"l2Normalize"in t&&St(n,1),t.quantize!==void 0?ra(n,2,t.quantize):"quantize"in t&&St(n,2),Ue(e,0,2,n),this.l(t)}xa(t,e){return Vn(this,t,e),this.embeddings}ya(t,e,n){return gi(this,t,n,e),this.embeddings}m(){var t=new mn;yt(t,"image_in"),yt(t,"norm_rect"),at(t,"embeddings_out");const e=new bn;Kn(e,g_,this.h);const n=new sn;wn(n,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Mt(n,"IMAGE:image_in"),Mt(n,"NORM_RECT:norm_rect"),Qe(n,"EMBEDDINGS:embeddings_out"),n.o(e),Rn(t,n),this.g.attachProtoListener("embeddings_out",((i,r)=>{i=s_(i),this.embeddings=(function(s){return{embeddings:Ui(s,r_,1).map((a=>{const o={headIndex:Bn(a,3)??0??-1,headName:kn(a,4)??""??""};if(Lp(a,Sf,uc(a,1))!==void 0)a=Mr(a=rt(a,Sf,uc(a,1)),1,sr,Sr()),o.floatEmbedding=a.slice();else{const c=new Uint8Array(0);o.quantizedEmbedding=rt(a,i_,uc(a,2))?.ma()?.h()??c}return o})),timestampMs:tl(os(s,2))??0}})(i),ye(this,r)})),this.g.attachEmptyPacketListener("embeddings_out",(i=>{ye(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Sn.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=Af(t.floatEmbedding,e.floatEmbedding);else{if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=Af(bf(t.quantizedEmbedding),bf(e.quantizedEmbedding))}return t},Sn.prototype.embedForVideo=Sn.prototype.ya,Sn.prototype.embed=Sn.prototype.xa,Sn.prototype.setOptions=Sn.prototype.o,Sn.createFromModelPath=function(t,e){return $e(Sn,t,{baseOptions:{modelAssetPath:e}})},Sn.createFromModelBuffer=function(t,e){return $e(Sn,t,{baseOptions:{modelAssetBuffer:e}})},Sn.createFromOptions=function(t,e){return $e(Sn,t,e)};var pl=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach((t=>{t.close()})),this.categoryMask?.close()}};function Wf(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0}function Xf(t){try{const e=new pl(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.j)return e;t.j(e)}finally{Yo(t)}}pl.prototype.close=pl.prototype.close;var un=class extends pn{constructor(t,e){super(new zn(t,e),"image_in","norm_rect",!1),this.s=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new th,this.v=new Um,Ue(this.h,0,3,this.v),Ue(t=this.h,0,1,e=new bt)}get baseOptions(){return rt(this.h,bt,1)}set baseOptions(t){Ue(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?St(this.h,2,ys(t.displayNamesLocale)):"displayNamesLocale"in t&&St(this.h,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}J(){(function(t){const e=Ui(t.ca(),sn,1).filter((n=>(kn(n,1)??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));if(t.s=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(rt(e[0],bn,7)?.l()?.g()??new Map).forEach(((n,i)=>{t.s[Number(i)]=kn(n,1)??""}))})(this)}segment(t,e,n){const i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:n,Wf(this),Vn(this,t,i),Xf(this)}Ia(t,e,n,i){const r=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,Wf(this),gi(this,t,r,e),Xf(this)}Ba(){return this.s}m(){var t=new mn;yt(t,"image_in"),yt(t,"norm_rect");const e=new bn;Kn(e,Fm,this.h);const n=new sn;wn(n,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Mt(n,"IMAGE:image_in"),Mt(n,"NORM_RECT:norm_rect"),n.o(e),Rn(t,n),qo(this,t),this.outputConfidenceMasks&&(at(t,"confidence_masks"),Qe(n,"CONFIDENCE_MASKS:confidence_masks"),ls(this,"confidence_masks"),this.g.ba("confidence_masks",((i,r)=>{this.confidenceMasks=i.map((s=>fs(this,s,!0,!this.j))),ye(this,r)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],ye(this,i)}))),this.outputCategoryMask&&(at(t,"category_mask"),Qe(n,"CATEGORY_MASK:category_mask"),ls(this,"category_mask"),this.g.V("category_mask",((i,r)=>{this.categoryMask=fs(this,i,!1,!this.j),ye(this,r)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,ye(this,i)}))),at(t,"quality_scores"),Qe(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,r)=>{this.qualityScores=i,ye(this,r)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,ye(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};un.prototype.getLabels=un.prototype.Ba,un.prototype.segmentForVideo=un.prototype.Ia,un.prototype.segment=un.prototype.segment,un.prototype.setOptions=un.prototype.o,un.createFromModelPath=function(t,e){return $e(un,t,{baseOptions:{modelAssetPath:e}})},un.createFromModelBuffer=function(t,e){return $e(un,t,{baseOptions:{modelAssetBuffer:e}})},un.createFromOptions=function(t,e){return $e(un,t,e)};var ml=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach((t=>{t.close()})),this.categoryMask?.close()}};ml.prototype.close=ml.prototype.close;var T_=class extends Re{constructor(t){super(t)}},Ur=[0,Dt,-2],mo=[0,Ti,-3,Tt,Ti,-1],qf=[0,mo],Yf=[0,mo,Dt,-1],gc=class extends Re{constructor(t){super(t)}},Kf=[0,Ti,-1,Tt],b_=class extends Re{constructor(t){super(t)}},jf=class extends Re{constructor(t){super(t)}},gl=[1,2,3,4,5,6,7,8,9,10,14,15],Qm=class extends Re{constructor(t){super(t)}};Qm.prototype.g=Go([0,Vt,[0,gl,ot,mo,ot,[0,mo,Ur],ot,qf,ot,[0,qf,Ur],ot,Kf,ot,[0,Ti,-3,Tt,Tn],ot,[0,Ti,-3,Tt],ot,[0,ct,Ti,-2,Tt,Dt,Tt,-1,2,Ti,Ur],ot,Yf,ot,[0,Yf,Ur],Ti,Ur,ct,ot,[0,Ti,-3,Tt,Ur,-1],ot,[0,Vt,Kf]],ct,[0,ct,Dt,-1,Tt]]);var ti=class extends pn{constructor(t,e){super(new zn(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new th,this.s=new Um,Ue(this.h,0,3,this.s),Ue(t=this.h,0,1,e=new bt)}get baseOptions(){return rt(this.h,bt,1)}set baseOptions(t){Ue(this.h,0,1,t)}o(t){return"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}segment(t,e,n,i){const r=typeof n!="function"?n:{};this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.B+1,i=new Qm;const s=new jf;var a=new T_;if(fi(a,1,255),Ue(s,0,12,a),e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var o=new gc;ra(o,3,!0),Pe(o,1,e.keypoint.x),Pe(o,2,e.keypoint.y),Ys(s,5,gl,o)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");for(o of(a=new b_,e.scribble))ra(e=new gc,3,!0),Pe(e,1,o.x),Pe(e,2,o.y),uo(a,1,gc,e);Ys(s,15,gl,a)}uo(i,1,jf,s),this.g.addProtoToStream(i.g(),"drishti.RenderData","roi_in",n),Vn(this,t,r);e:{try{const l=new ml(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var c=l;break e}this.j(l)}finally{Yo(this)}c=void 0}return c}m(){var t=new mn;yt(t,"image_in"),yt(t,"roi_in"),yt(t,"norm_rect_in");const e=new bn;Kn(e,Fm,this.h);const n=new sn;wn(n,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"),Mt(n,"IMAGE:image_in"),Mt(n,"ROI:roi_in"),Mt(n,"NORM_RECT:norm_rect_in"),n.o(e),Rn(t,n),qo(this,t),this.outputConfidenceMasks&&(at(t,"confidence_masks"),Qe(n,"CONFIDENCE_MASKS:confidence_masks"),ls(this,"confidence_masks"),this.g.ba("confidence_masks",((i,r)=>{this.confidenceMasks=i.map((s=>fs(this,s,!0,!this.j))),ye(this,r)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],ye(this,i)}))),this.outputCategoryMask&&(at(t,"category_mask"),Qe(n,"CATEGORY_MASK:category_mask"),ls(this,"category_mask"),this.g.V("category_mask",((i,r)=>{this.categoryMask=fs(this,i,!1,!this.j),ye(this,r)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,ye(this,i)}))),at(t,"quality_scores"),Qe(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,r)=>{this.qualityScores=i,ye(this,r)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,ye(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ti.prototype.segment=ti.prototype.segment,ti.prototype.setOptions=ti.prototype.o,ti.createFromModelPath=function(t,e){return $e(ti,t,{baseOptions:{modelAssetPath:e}})},ti.createFromModelBuffer=function(t,e){return $e(ti,t,{baseOptions:{modelAssetBuffer:e}})},ti.createFromOptions=function(t,e){return $e(ti,t,e)};var Dn=class extends pn{constructor(t,e){super(new zn(t,e),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Ue(t=this.h=new Om,0,1,e=new bt)}get baseOptions(){return rt(this.h,bt,1)}set baseOptions(t){Ue(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?St(this.h,2,ys(t.displayNamesLocale)):"displayNamesLocale"in t&&St(this.h,2),t.maxResults!==void 0?fi(this.h,3,t.maxResults):"maxResults"in t&&St(this.h,3),t.scoreThreshold!==void 0?Pe(this.h,4,t.scoreThreshold):"scoreThreshold"in t&&St(this.h,4),t.categoryAllowlist!==void 0?ho(this.h,5,t.categoryAllowlist):"categoryAllowlist"in t&&St(this.h,5),t.categoryDenylist!==void 0?ho(this.h,6,t.categoryDenylist):"categoryDenylist"in t&&St(this.h,6),this.l(t)}D(t,e){return this.j={detections:[]},Vn(this,t,e),this.j}F(t,e,n){return this.j={detections:[]},gi(this,t,n,e),this.j}m(){var t=new mn;yt(t,"input_frame_gpu"),yt(t,"norm_rect"),at(t,"detections");const e=new bn;Kn(e,v_,this.h);const n=new sn;wn(n,"mediapipe.tasks.vision.ObjectDetectorGraph"),Mt(n,"IMAGE:input_frame_gpu"),Mt(n,"NORM_RECT:norm_rect"),Qe(n,"DETECTIONS:detections"),n.o(e),Rn(t,n),this.g.attachProtoVectorListener("detections",((i,r)=>{for(const s of i)i=dm(s),this.j.detections.push(km(i));ye(this,r)})),this.g.attachEmptyPacketListener("detections",(i=>{ye(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Dn.prototype.detectForVideo=Dn.prototype.F,Dn.prototype.detect=Dn.prototype.D,Dn.prototype.setOptions=Dn.prototype.o,Dn.createFromModelPath=async function(t,e){return $e(Dn,t,{baseOptions:{modelAssetPath:e}})},Dn.createFromModelBuffer=function(t,e){return $e(Dn,t,{baseOptions:{modelAssetBuffer:e}})},Dn.createFromOptions=function(t,e){return $e(Dn,t,e)};var _l=class{constructor(t,e,n){this.landmarks=t,this.worldLandmarks=e,this.segmentationMasks=n}close(){this.segmentationMasks?.forEach((t=>{t.close()}))}};function Zf(t){t.landmarks=[],t.worldLandmarks=[],t.segmentationMasks=void 0}function Jf(t){try{const e=new _l(t.landmarks,t.worldLandmarks,t.segmentationMasks);if(!t.s)return e;t.s(e)}finally{Yo(t)}}_l.prototype.close=_l.prototype.close;var Mn=class extends pn{constructor(t,e){super(new zn(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Ue(t=this.h=new Bm,0,1,e=new bt),this.v=new Pm,Ue(this.h,0,3,this.v),this.j=new Cm,Ue(this.h,0,2,this.j),fi(this.j,4,1),Pe(this.j,2,.5),Pe(this.v,2,.5),Pe(this.h,4,.5)}get baseOptions(){return rt(this.h,bt,1)}set baseOptions(t){Ue(this.h,0,1,t)}o(t){return"numPoses"in t&&fi(this.j,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&Pe(this.j,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&Pe(this.h,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&Pe(this.v,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.l(t)}D(t,e,n){const i=typeof e!="function"?e:{};return this.s=typeof e=="function"?e:n,Zf(this),Vn(this,t,i),Jf(this)}F(t,e,n,i){const r=typeof n!="function"?n:{};return this.s=typeof n=="function"?n:i,Zf(this),gi(this,t,r,e),Jf(this)}m(){var t=new mn;yt(t,"image_in"),yt(t,"norm_rect"),at(t,"normalized_landmarks"),at(t,"world_landmarks"),at(t,"segmentation_masks");const e=new bn;Kn(e,x_,this.h);const n=new sn;wn(n,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Mt(n,"IMAGE:image_in"),Mt(n,"NORM_RECT:norm_rect"),Qe(n,"NORM_LANDMARKS:normalized_landmarks"),Qe(n,"WORLD_LANDMARKS:world_landmarks"),n.o(e),Rn(t,n),qo(this,t),this.g.attachProtoVectorListener("normalized_landmarks",((i,r)=>{this.landmarks=[];for(const s of i)i=ga(s),this.landmarks.push(Xo(i));ye(this,r)})),this.g.attachEmptyPacketListener("normalized_landmarks",(i=>{this.landmarks=[],ye(this,i)})),this.g.attachProtoVectorListener("world_landmarks",((i,r)=>{this.worldLandmarks=[];for(const s of i)i=Qr(s),this.worldLandmarks.push(js(i));ye(this,r)})),this.g.attachEmptyPacketListener("world_landmarks",(i=>{this.worldLandmarks=[],ye(this,i)})),this.outputSegmentationMasks&&(Qe(n,"SEGMENTATION_MASK:segmentation_masks"),ls(this,"segmentation_masks"),this.g.ba("segmentation_masks",((i,r)=>{this.segmentationMasks=i.map((s=>fs(this,s,!0,!this.s))),ye(this,r)})),this.g.attachEmptyPacketListener("segmentation_masks",(i=>{this.segmentationMasks=[],ye(this,i)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Mn.prototype.detectForVideo=Mn.prototype.F,Mn.prototype.detect=Mn.prototype.D,Mn.prototype.setOptions=Mn.prototype.o,Mn.createFromModelPath=function(t,e){return $e(Mn,t,{baseOptions:{modelAssetPath:e}})},Mn.createFromModelBuffer=function(t,e){return $e(Mn,t,{baseOptions:{modelAssetBuffer:e}})},Mn.createFromOptions=function(t,e){return $e(Mn,t,e)},Mn.POSE_CONNECTIONS=$m;class A_{constructor(){this.faceLandmarker=null,this.lastVideoTime=-1,this.results=void 0}async init(){const e=await gr.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm");this.faceLandmarker=await At.createFromOptions(e,{baseOptions:{modelAssetPath:"https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",delegate:"GPU"},outputFaceBlendshapes:!0,runningMode:"VIDEO",numFaces:1}),console.log("FaceLandmarker initialized")}detect(e){if(!this.faceLandmarker)return;let n=performance.now();return e.currentTime!==this.lastVideoTime&&(this.lastVideoTime=e.currentTime,this.results=this.faceLandmarker.detectForVideo(e,n)),this.results}}const mh="182",w_=0,$f=1,R_=2,io=1,C_=2,Hs=3,ir=0,dn=1,si=2,Di=0,es=1,Qf=2,ed=3,td=4,P_=5,vr=100,L_=101,D_=102,I_=103,U_=104,N_=200,F_=201,O_=202,B_=203,vl=204,xl=205,k_=206,z_=207,V_=208,G_=209,H_=210,W_=211,X_=212,q_=213,Y_=214,Sl=0,Ml=1,yl=2,ds=3,El=4,Tl=5,bl=6,Al=7,e0=0,K_=1,j_=2,ci=0,t0=1,n0=2,i0=3,r0=4,s0=5,a0=6,o0=7,c0=300,Rr=301,ps=302,wl=303,Rl=304,Jo=306,Cl=1e3,wi=1001,Pl=1002,Yt=1003,Z_=1004,wa=1005,$t=1006,_c=1007,yr=1008,On=1009,l0=1010,u0=1011,aa=1012,gh=1013,di=1014,ai=1015,Fi=1016,_h=1017,vh=1018,oa=1020,h0=35902,f0=35899,d0=1021,p0=1022,Yn=1023,Oi=1026,Er=1027,m0=1028,xh=1029,ms=1030,Sh=1031,Mh=1033,ro=33776,so=33777,ao=33778,oo=33779,Ll=35840,Dl=35841,Il=35842,Ul=35843,Nl=36196,Fl=37492,Ol=37496,Bl=37488,kl=37489,zl=37490,Vl=37491,Gl=37808,Hl=37809,Wl=37810,Xl=37811,ql=37812,Yl=37813,Kl=37814,jl=37815,Zl=37816,Jl=37817,$l=37818,Ql=37819,eu=37820,tu=37821,nu=36492,iu=36494,ru=36495,su=36283,au=36284,ou=36285,cu=36286,J_=3200,g0=0,$_=1,ji="",Un="srgb",gs="srgb-linear",go="linear",ht="srgb",Nr=7680,nd=519,Q_=512,e1=513,t1=514,yh=515,n1=516,i1=517,Eh=518,r1=519,id=35044,rd="300 es",oi=2e3,_o=2001;function _0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function vo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function s1(){const t=vo("canvas");return t.style.display="block",t}const sd={};function ad(...t){const e="THREE."+t.shift();console.log(e,...t)}function He(...t){const e="THREE."+t.shift();console.warn(e,...t)}function nt(...t){const e="THREE."+t.shift();console.error(e,...t)}function ca(...t){const e=t.join(" ");e in sd||(sd[e]=!0,He(...t))}function a1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}class Rs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let od=1234567;const Zs=Math.PI/180,la=180/Math.PI;function Lr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[t&255]+jt[t>>8&255]+jt[t>>16&255]+jt[t>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[n&63|128]+jt[n>>8&255]+"-"+jt[n>>16&255]+jt[n>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function Ze(t,e,n){return Math.max(e,Math.min(n,t))}function Th(t,e){return(t%e+e)%e}function o1(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function c1(t,e,n){return t!==e?(n-t)/(e-t):0}function Js(t,e,n){return(1-n)*t+n*e}function l1(t,e,n,i){return Js(t,e,1-Math.exp(-n*i))}function u1(t,e=1){return e-Math.abs(Th(t,e*2)-e)}function h1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function f1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function d1(t,e){return t+Math.floor(Math.random()*(e-t+1))}function p1(t,e){return t+Math.random()*(e-t)}function m1(t){return t*(.5-Math.random())}function g1(t){t!==void 0&&(od=t);let e=od+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _1(t){return t*Zs}function v1(t){return t*la}function x1(t){return(t&t-1)===0&&t!==0}function S1(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function M1(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function y1(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),c=a(n/2),l=s((e+i)/2),u=a((e+i)/2),h=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":t.set(o*u,c*h,c*d,o*l);break;case"YZY":t.set(c*d,o*u,c*h,o*l);break;case"ZXZ":t.set(c*h,c*d,o*u,o*l);break;case"XZX":t.set(o*u,c*_,c*p,o*l);break;case"YXY":t.set(c*p,o*u,c*_,o*l);break;case"ZYZ":t.set(c*_,c*p,o*u,o*l);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function jr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function en(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const E1={DEG2RAD:Zs,RAD2DEG:la,generateUUID:Lr,clamp:Ze,euclideanModulo:Th,mapLinear:o1,inverseLerp:c1,lerp:Js,damp:l1,pingpong:u1,smoothstep:h1,smootherstep:f1,randInt:d1,randFloat:p1,randFloatSpread:m1,seededRandom:g1,degToRad:_1,radToDeg:v1,isPowerOfTwo:x1,ceilPowerOfTwo:S1,floorPowerOfTwo:M1,setQuaternionFromProperEuler:y1,normalize:en,denormalize:jr};class pe{constructor(e=0,n=0){pe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _a{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3],d=s[a+0],p=s[a+1],_=s[a+2],S=s[a+3];if(o<=0){e[n+0]=c,e[n+1]=l,e[n+2]=u,e[n+3]=h;return}if(o>=1){e[n+0]=d,e[n+1]=p,e[n+2]=_,e[n+3]=S;return}if(h!==S||c!==d||l!==p||u!==_){let m=c*d+l*p+u*_+h*S;m<0&&(d=-d,p=-p,_=-_,S=-S,m=-m);let f=1-o;if(m<.9995){const A=Math.acos(m),T=Math.sin(A);f=Math.sin(f*A)/T,o=Math.sin(o*A)/T,c=c*f+d*o,l=l*f+p*o,u=u*f+_*o,h=h*f+S*o}else{c=c*f+d*o,l=l*f+p*o,u=u*f+_*o,h=h*f+S*o;const A=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=A,l*=A,u*=A,h*=A}}e[n]=c,e[n+1]=l,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[a],d=s[a+1],p=s[a+2],_=s[a+3];return e[n]=o*_+u*h+c*p-l*d,e[n+1]=c*_+u*d+l*h-o*p,e[n+2]=l*_+u*p+o*d-c*h,e[n+3]=u*_-o*h-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),h=o(s/2),d=c(i/2),p=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=d*u*h+l*p*_,this._y=l*p*h-d*u*_,this._z=l*u*_+d*p*h,this._w=l*u*h-d*p*_;break;case"YXZ":this._x=d*u*h+l*p*_,this._y=l*p*h-d*u*_,this._z=l*u*_-d*p*h,this._w=l*u*h+d*p*_;break;case"ZXY":this._x=d*u*h-l*p*_,this._y=l*p*h+d*u*_,this._z=l*u*_+d*p*h,this._w=l*u*h-d*p*_;break;case"ZYX":this._x=d*u*h-l*p*_,this._y=l*p*h+d*u*_,this._z=l*u*_-d*p*h,this._w=l*u*h+d*p*_;break;case"YZX":this._x=d*u*h+l*p*_,this._y=l*p*h+d*u*_,this._z=l*u*_-d*p*h,this._w=l*u*h-d*p*_;break;case"XZY":this._x=d*u*h-l*p*_,this._y=l*p*h-d*u*_,this._z=l*u*_+d*p*h,this._w=l*u*h+d*p*_;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],l=n[2],u=n[6],h=n[10],d=i+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,c=n._y,l=n._z,u=n._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-n;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,n=Math.sin(n*l)/u,this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(cd.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(cd.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+c*l+a*h-o*u,this.y=i+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vc.copy(this).projectOnVector(e),this.sub(vc)}reflect(e){return this.sub(vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vc=new U,cd=new _a;class Ye{constructor(e,n,i,r,s,a,o,c,l){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l)}set(e,n,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],p=i[5],_=i[8],S=r[0],m=r[3],f=r[6],A=r[1],T=r[4],E=r[7],w=r[2],R=r[5],C=r[8];return s[0]=a*S+o*A+c*w,s[3]=a*m+o*T+c*R,s[6]=a*f+o*E+c*C,s[1]=l*S+u*A+h*w,s[4]=l*m+u*T+h*R,s[7]=l*f+u*E+h*C,s[2]=d*S+p*A+_*w,s[5]=d*m+p*T+_*R,s[8]=d*f+p*E+_*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return n*a*u-n*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*s,p=l*s-a*c,_=n*h+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=h*S,e[1]=(r*l-u*i)*S,e[2]=(o*i-r*a)*S,e[3]=d*S,e[4]=(u*n-r*c)*S,e[5]=(r*s-o*n)*S,e[6]=p*S,e[7]=(i*c-l*n)*S,e[8]=(a*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(xc.makeScale(e,n)),this}rotate(e){return this.premultiply(xc.makeRotation(-e)),this}translate(e,n){return this.premultiply(xc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xc=new Ye,ld=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ud=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function T1(){const t={enabled:!0,workingColorSpace:gs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ht&&(r.r=Ii(r.r),r.g=Ii(r.g),r.b=Ii(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ht&&(r.r=ts(r.r),r.g=ts(r.g),r.b=ts(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ji?go:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ca("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ca("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[gs]:{primaries:e,whitePoint:i,transfer:go,toXYZ:ld,fromXYZ:ud,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Un},outputColorSpaceConfig:{drawingBufferColorSpace:Un}},[Un]:{primaries:e,whitePoint:i,transfer:ht,toXYZ:ld,fromXYZ:ud,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Un}}}),t}const it=T1();function Ii(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ts(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Fr;class b1{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Fr===void 0&&(Fr=vo("canvas")),Fr.width=e.width,Fr.height=e.height;const r=Fr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Fr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=vo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ii(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ii(n[i]/255)*255):n[i]=Ii(n[i]);return{data:n,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let A1=0;class bh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:A1++}),this.uuid=Lr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Sc(r[a].image)):s.push(Sc(r[a]))}else s=Sc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Sc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?b1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}let w1=0;const Mc=new U;class nn extends Rs{constructor(e=nn.DEFAULT_IMAGE,n=nn.DEFAULT_MAPPING,i=wi,r=wi,s=$t,a=yr,o=Yn,c=On,l=nn.DEFAULT_ANISOTROPY,u=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w1++}),this.uuid=Lr(),this.name="",this.source=new bh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Mc).x}get height(){return this.source.getSize(Mc).y}get depth(){return this.source.getSize(Mc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){He(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){He(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==c0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cl:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case Pl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cl:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case Pl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=c0;nn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,n=0,i=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],_=c[9],S=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+S)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const T=(l+1)/2,E=(p+1)/2,w=(f+1)/2,R=(u+d)/4,C=(h+S)/4,N=(_+m)/4;return T>E&&T>w?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=R/i,s=C/i):E>w?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=R/r,s=N/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=C/s,r=N/s),this.set(i,r,s,n),this}let A=Math.sqrt((m-_)*(m-_)+(h-S)*(h-S)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(h-S)/A,this.z=(d-u)/A,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this.w=Ze(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this.w=Ze(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class R1 extends Rs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ut(0,0,e,n),this.scissorTest=!1,this.viewport=new Ut(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new nn(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:$t,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new bh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends R1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class v0 extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class C1 extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class va{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Hn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Hn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Hn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Hn):Hn.fromBufferAttribute(s,a),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ra.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ra.copy(i.boundingBox)),Ra.applyMatrix4(e.matrixWorld),this.union(Ra)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Us),Ca.subVectors(this.max,Us),Or.subVectors(e.a,Us),Br.subVectors(e.b,Us),kr.subVectors(e.c,Us),zi.subVectors(Br,Or),Vi.subVectors(kr,Br),ur.subVectors(Or,kr);let n=[0,-zi.z,zi.y,0,-Vi.z,Vi.y,0,-ur.z,ur.y,zi.z,0,-zi.x,Vi.z,0,-Vi.x,ur.z,0,-ur.x,-zi.y,zi.x,0,-Vi.y,Vi.x,0,-ur.y,ur.x,0];return!yc(n,Or,Br,kr,Ca)||(n=[1,0,0,0,1,0,0,0,1],!yc(n,Or,Br,kr,Ca))?!1:(Pa.crossVectors(zi,Vi),n=[Pa.x,Pa.y,Pa.z],yc(n,Or,Br,kr,Ca))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xi=[new U,new U,new U,new U,new U,new U,new U,new U],Hn=new U,Ra=new va,Or=new U,Br=new U,kr=new U,zi=new U,Vi=new U,ur=new U,Us=new U,Ca=new U,Pa=new U,hr=new U;function yc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){hr.fromArray(t,s);const o=r.x*Math.abs(hr.x)+r.y*Math.abs(hr.y)+r.z*Math.abs(hr.z),c=e.dot(hr),l=n.dot(hr),u=i.dot(hr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const P1=new va,Ns=new U,Ec=new U;class Ah{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):P1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ns.subVectors(e,this.center);const n=Ns.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ns,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ec.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ns.copy(e.center).add(Ec)),this.expandByPoint(Ns.copy(e.center).sub(Ec))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Si=new U,Tc=new U,La=new U,Gi=new U,bc=new U,Da=new U,Ac=new U;class L1{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Si.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,n),Si.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Tc.copy(e).add(n).multiplyScalar(.5),La.copy(n).sub(e).normalize(),Gi.copy(this.origin).sub(Tc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(La),o=Gi.dot(this.direction),c=-Gi.dot(La),l=Gi.lengthSq(),u=Math.abs(1-a*a);let h,d,p,_;if(u>0)if(h=a*c-o,d=a*o-c,_=s*u,h>=0)if(d>=-_)if(d<=_){const S=1/u;h*=S,d*=S,p=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d<=-_?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l):d<=_?(h=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Tc).addScaledVector(La,d),p}intersectSphere(e,n){Si.subVectors(e.center,this.origin);const i=Si.dot(this.direction),r=Si.dot(Si)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,n,i,r,s){bc.subVectors(n,e),Da.subVectors(i,e),Ac.crossVectors(bc,Da);let a=this.direction.dot(Ac),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gi.subVectors(this.origin,e);const c=o*this.direction.dot(Da.crossVectors(Gi,Da));if(c<0)return null;const l=o*this.direction.dot(bc.cross(Gi));if(l<0||c+l>a)return null;const u=-o*Gi.dot(Ac);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(e,n,i,r,s,a,o,c,l,u,h,d,p,_,S,m){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l,u,h,d,p,_,S,m)}set(e,n,i,r,s,a,o,c,l,u,h,d,p,_,S,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=_,f[11]=S,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/zr.setFromMatrixColumn(e,0).length(),s=1/zr.setFromMatrixColumn(e,1).length(),a=1/zr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*h,_=o*u,S=o*h;n[0]=c*u,n[4]=-c*h,n[8]=l,n[1]=p+_*l,n[5]=d-S*l,n[9]=-o*c,n[2]=S-d*l,n[6]=_+p*l,n[10]=a*c}else if(e.order==="YXZ"){const d=c*u,p=c*h,_=l*u,S=l*h;n[0]=d+S*o,n[4]=_*o-p,n[8]=a*l,n[1]=a*h,n[5]=a*u,n[9]=-o,n[2]=p*o-_,n[6]=S+d*o,n[10]=a*c}else if(e.order==="ZXY"){const d=c*u,p=c*h,_=l*u,S=l*h;n[0]=d-S*o,n[4]=-a*h,n[8]=_+p*o,n[1]=p+_*o,n[5]=a*u,n[9]=S-d*o,n[2]=-a*l,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){const d=a*u,p=a*h,_=o*u,S=o*h;n[0]=c*u,n[4]=_*l-p,n[8]=d*l+S,n[1]=c*h,n[5]=S*l+d,n[9]=p*l-_,n[2]=-l,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){const d=a*c,p=a*l,_=o*c,S=o*l;n[0]=c*u,n[4]=S-d*h,n[8]=_*h+p,n[1]=h,n[5]=a*u,n[9]=-o*u,n[2]=-l*u,n[6]=p*h+_,n[10]=d-S*h}else if(e.order==="XZY"){const d=a*c,p=a*l,_=o*c,S=o*l;n[0]=c*u,n[4]=-h,n[8]=l*u,n[1]=d*h+S,n[5]=a*u,n[9]=p*h-_,n[2]=_*h-p,n[6]=o*u,n[10]=S*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(D1,e,I1)}lookAt(e,n,i){const r=this.elements;return yn.subVectors(e,n),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Hi.crossVectors(i,yn),Hi.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Hi.crossVectors(i,yn)),Hi.normalize(),Ia.crossVectors(yn,Hi),r[0]=Hi.x,r[4]=Ia.x,r[8]=yn.x,r[1]=Hi.y,r[5]=Ia.y,r[9]=yn.y,r[2]=Hi.z,r[6]=Ia.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],p=i[13],_=i[2],S=i[6],m=i[10],f=i[14],A=i[3],T=i[7],E=i[11],w=i[15],R=r[0],C=r[4],N=r[8],v=r[12],M=r[1],P=r[5],k=r[9],O=r[13],q=r[2],G=r[6],H=r[10],B=r[14],$=r[3],fe=r[7],ae=r[11],le=r[15];return s[0]=a*R+o*M+c*q+l*$,s[4]=a*C+o*P+c*G+l*fe,s[8]=a*N+o*k+c*H+l*ae,s[12]=a*v+o*O+c*B+l*le,s[1]=u*R+h*M+d*q+p*$,s[5]=u*C+h*P+d*G+p*fe,s[9]=u*N+h*k+d*H+p*ae,s[13]=u*v+h*O+d*B+p*le,s[2]=_*R+S*M+m*q+f*$,s[6]=_*C+S*P+m*G+f*fe,s[10]=_*N+S*k+m*H+f*ae,s[14]=_*v+S*O+m*B+f*le,s[3]=A*R+T*M+E*q+w*$,s[7]=A*C+T*P+E*G+w*fe,s[11]=A*N+T*k+E*H+w*ae,s[15]=A*v+T*O+E*B+w*le,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],p=e[14],_=e[3],S=e[7],m=e[11],f=e[15],A=c*p-l*d,T=o*p-l*h,E=o*d-c*h,w=a*p-l*u,R=a*d-c*u,C=a*h-o*u;return n*(S*A-m*T+f*E)-i*(_*A-m*w+f*R)+r*(_*T-S*w+f*C)-s*(_*E-S*R+m*C)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],p=e[11],_=e[12],S=e[13],m=e[14],f=e[15],A=h*m*l-S*d*l+S*c*p-o*m*p-h*c*f+o*d*f,T=_*d*l-u*m*l-_*c*p+a*m*p+u*c*f-a*d*f,E=u*S*l-_*h*l+_*o*p-a*S*p-u*o*f+a*h*f,w=_*h*c-u*S*c-_*o*d+a*S*d+u*o*m-a*h*m,R=n*A+i*T+r*E+s*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=A*C,e[1]=(S*d*s-h*m*s-S*r*p+i*m*p+h*r*f-i*d*f)*C,e[2]=(o*m*s-S*c*s+S*r*l-i*m*l-o*r*f+i*c*f)*C,e[3]=(h*c*s-o*d*s-h*r*l+i*d*l+o*r*p-i*c*p)*C,e[4]=T*C,e[5]=(u*m*s-_*d*s+_*r*p-n*m*p-u*r*f+n*d*f)*C,e[6]=(_*c*s-a*m*s-_*r*l+n*m*l+a*r*f-n*c*f)*C,e[7]=(a*d*s-u*c*s+u*r*l-n*d*l-a*r*p+n*c*p)*C,e[8]=E*C,e[9]=(_*h*s-u*S*s-_*i*p+n*S*p+u*i*f-n*h*f)*C,e[10]=(a*S*s-_*o*s+_*i*l-n*S*l-a*i*f+n*o*f)*C,e[11]=(u*o*s-a*h*s-u*i*l+n*h*l+a*i*p-n*o*p)*C,e[12]=w*C,e[13]=(u*S*r-_*h*r+_*i*d-n*S*d-u*i*m+n*h*m)*C,e[14]=(_*o*r-a*S*r-_*i*c+n*S*c+a*i*m-n*o*m)*C,e[15]=(a*h*r-u*o*r+u*i*c-n*h*c-a*i*d+n*o*d)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,l=s+s,u=a+a,h=o+o,d=s*l,p=s*u,_=s*h,S=a*u,m=a*h,f=o*h,A=c*l,T=c*u,E=c*h,w=i.x,R=i.y,C=i.z;return r[0]=(1-(S+f))*w,r[1]=(p+E)*w,r[2]=(_-T)*w,r[3]=0,r[4]=(p-E)*R,r[5]=(1-(d+f))*R,r[6]=(m+A)*R,r[7]=0,r[8]=(_+T)*C,r[9]=(m-A)*C,r[10]=(1-(d+S))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),n.identity(),this;let s=zr.set(r[0],r[1],r[2]).length();const a=zr.set(r[4],r[5],r[6]).length(),o=zr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),Wn.copy(this);const l=1/s,u=1/a,h=1/o;return Wn.elements[0]*=l,Wn.elements[1]*=l,Wn.elements[2]*=l,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=h,Wn.elements[9]*=h,Wn.elements[10]*=h,n.setFromRotationMatrix(Wn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=oi,c=!1){const l=this.elements,u=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),p=(i+r)/(i-r);let _,S;if(c)_=s/(a-s),S=a*s/(a-s);else if(o===oi)_=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===_o)_=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=oi,c=!1){const l=this.elements,u=2/(n-e),h=2/(i-r),d=-(n+e)/(n-e),p=-(i+r)/(i-r);let _,S;if(c)_=1/(a-s),S=a/(a-s);else if(o===oi)_=-2/(a-s),S=-(a+s)/(a-s);else if(o===_o)_=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const zr=new U,Wn=new Nt,D1=new U(0,0,0),I1=new U(1,1,1),Hi=new U,Ia=new U,yn=new U,hd=new Nt,fd=new _a;class pi{constructor(e=0,n=0,i=0,r=pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return hd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hd,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return fd.setFromEuler(this),this.setFromQuaternion(fd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pi.DEFAULT_ORDER="XYZ";class x0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let U1=0;const dd=new U,Vr=new _a,Mi=new Nt,Ua=new U,Fs=new U,N1=new U,F1=new _a,pd=new U(1,0,0),md=new U(0,1,0),gd=new U(0,0,1),_d={type:"added"},O1={type:"removed"},Gr={type:"childadded",child:null},wc={type:"childremoved",child:null};class rn extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:U1++}),this.uuid=Lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new U,n=new pi,i=new _a,r=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Nt},normalMatrix:{value:new Ye}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new x0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis(pd,e)}rotateY(e){return this.rotateOnAxis(md,e)}rotateZ(e){return this.rotateOnAxis(gd,e)}translateOnAxis(e,n){return dd.copy(e).applyQuaternion(this.quaternion),this.position.add(dd.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(pd,e)}translateY(e){return this.translateOnAxis(md,e)}translateZ(e){return this.translateOnAxis(gd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ua.copy(e):Ua.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Fs,Ua,this.up):Mi.lookAt(Ua,Fs,this.up),this.quaternion.setFromRotationMatrix(Mi),r&&(Mi.extractRotation(r.matrixWorld),Vr.setFromRotationMatrix(Mi),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_d),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(O1),wc.child=e,this.dispatchEvent(wc),wc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_d),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,e,N1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,F1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(n){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}rn.DEFAULT_UP=new U(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new U,yi=new U,Rc=new U,Ei=new U,Hr=new U,Wr=new U,vd=new U,Cc=new U,Pc=new U,Lc=new U,Dc=new Ut,Ic=new Ut,Uc=new Ut;class qn{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Xn.subVectors(e,n),r.cross(Xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Xn.subVectors(r,n),yi.subVectors(i,n),Rc.subVectors(e,n);const a=Xn.dot(Xn),o=Xn.dot(yi),c=Xn.dot(Rc),l=yi.dot(yi),u=yi.dot(Rc),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(l*c-o*u)*d,_=(a*u-o*c)*d;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,n,i,r,s,a,o,c){return this.getBarycoord(e,n,i,r,Ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ei.x),c.addScaledVector(a,Ei.y),c.addScaledVector(o,Ei.z),c)}static getInterpolatedAttribute(e,n,i,r,s,a){return Dc.setScalar(0),Ic.setScalar(0),Uc.setScalar(0),Dc.fromBufferAttribute(e,n),Ic.fromBufferAttribute(e,i),Uc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Dc,s.x),a.addScaledVector(Ic,s.y),a.addScaledVector(Uc,s.z),a}static isFrontFacing(e,n,i,r){return Xn.subVectors(i,n),yi.subVectors(e,n),Xn.cross(yi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Xn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return qn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Hr.subVectors(r,i),Wr.subVectors(s,i),Cc.subVectors(e,i);const c=Hr.dot(Cc),l=Wr.dot(Cc);if(c<=0&&l<=0)return n.copy(i);Pc.subVectors(e,r);const u=Hr.dot(Pc),h=Wr.dot(Pc);if(u>=0&&h<=u)return n.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),n.copy(i).addScaledVector(Hr,a);Lc.subVectors(e,s);const p=Hr.dot(Lc),_=Wr.dot(Lc);if(_>=0&&p<=_)return n.copy(s);const S=p*l-c*_;if(S<=0&&l>=0&&_<=0)return o=l/(l-_),n.copy(i).addScaledVector(Wr,o);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return vd.subVectors(s,r),o=(h-u)/(h-u+(p-_)),n.copy(r).addScaledVector(vd,o);const f=1/(m+S+d);return a=S*f,o=d*f,n.copy(i).addScaledVector(Hr,a).addScaledVector(Wr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const S0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},Na={h:0,s:0,l:0};function Nc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=Th(e,1),n=Ze(n,0,1),i=Ze(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Nc(a,s,e+1/3),this.g=Nc(a,s,e),this.b=Nc(a,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,n=Un){function i(s){s!==void 0&&parseFloat(s)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:He("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Un){const i=S0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Un){return it.workingToColorSpace(Zt.copy(this),e),Math.round(Ze(Zt.r*255,0,255))*65536+Math.round(Ze(Zt.g*255,0,255))*256+Math.round(Ze(Zt.b*255,0,255))}getHexString(e=Un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.workingToColorSpace(Zt.copy(this),n);const i=Zt.r,r=Zt.g,s=Zt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,n=it.workingColorSpace){return it.workingToColorSpace(Zt.copy(this),n),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Un){it.workingToColorSpace(Zt.copy(this),e);const n=Zt.r,i=Zt.g,r=Zt.b;return e!==Un?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+n,Wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Wi),e.getHSL(Na);const i=Js(Wi.h,Na.h,n),r=Js(Wi.s,Na.s,n),s=Js(Wi.l,Na.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new et;et.NAMES=S0;let B1=0;class xa extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:B1++}),this.uuid=Lr(),this.name="",this.type="Material",this.blending=es,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vl,this.blendDst=xl,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){He(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){He(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(i.blending=this.blending),this.side!==ir&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vl&&(i.blendSrc=this.blendSrc),this.blendDst!==xl&&(i.blendDst=this.blendDst),this.blendEquation!==vr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ds&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Nr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Nr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class M0 extends xa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=e0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new U,Fa=new pe;let k1=0;class ui{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:k1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=id,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Fa.fromBufferAttribute(this,n),Fa.applyMatrix3(e),this.setXY(n,Fa.x,Fa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix3(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix4(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyNormalMatrix(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.transformDirection(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=jr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=en(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=jr(n,this.array)),n}setX(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=jr(n,this.array)),n}setY(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=jr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=jr(n,this.array)),n}setW(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array),s=en(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==id&&(e.usage=this.usage),e}}class y0 extends ui{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class E0 extends ui{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Kt extends ui{constructor(e,n,i){super(new Float32Array(e),n,i)}}let z1=0;const In=new Nt,Fc=new rn,Xr=new U,En=new va,Os=new va,Wt=new U;class Gn extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:z1++}),this.uuid=Lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_0(e)?E0:y0)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,n,i){return In.makeTranslation(e,n,i),this.applyMatrix4(In),this}scale(e,n,i){return In.makeScale(e,n,i),this.applyMatrix4(In),this}lookAt(e){return Fc.lookAt(e),Fc.updateMatrix(),this.applyMatrix4(Fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Kt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new va);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ah);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Os.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(En.min,Os.min),En.expandByPoint(Wt),Wt.addVectors(En.max,Os.max),En.expandByPoint(Wt)):(En.expandByPoint(Os.min),En.expandByPoint(Os.max))}En.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Wt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Wt.fromBufferAttribute(o,l),c&&(Xr.fromBufferAttribute(e,l),Wt.add(Xr)),r=Math.max(r,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let N=0;N<i.count;N++)o[N]=new U,c[N]=new U;const l=new U,u=new U,h=new U,d=new pe,p=new pe,_=new pe,S=new U,m=new U;function f(N,v,M){l.fromBufferAttribute(i,N),u.fromBufferAttribute(i,v),h.fromBufferAttribute(i,M),d.fromBufferAttribute(s,N),p.fromBufferAttribute(s,v),_.fromBufferAttribute(s,M),u.sub(l),h.sub(l),p.sub(d),_.sub(d);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(S.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(P),o[N].add(S),o[v].add(S),o[M].add(S),c[N].add(m),c[v].add(m),c[M].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let N=0,v=A.length;N<v;++N){const M=A[N],P=M.start,k=M.count;for(let O=P,q=P+k;O<q;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const T=new U,E=new U,w=new U,R=new U;function C(N){w.fromBufferAttribute(r,N),R.copy(w);const v=o[N];T.copy(v),T.sub(w.multiplyScalar(w.dot(v))).normalize(),E.crossVectors(R,v);const P=E.dot(c[N])<0?-1:1;a.setXYZW(N,T.x,T.y,T.z,P)}for(let N=0,v=A.length;N<v;++N){const M=A[N],P=M.start,k=M.count;for(let O=P,q=P+k;O<q;O+=3)C(e.getX(O+0)),C(e.getX(O+1)),C(e.getX(O+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ui(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new U,s=new U,a=new U,o=new U,c=new U,l=new U,u=new U,h=new U;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),S=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,S),a.fromBufferAttribute(n,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,S),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Wt.fromBufferAttribute(e,n),Wt.normalize(),e.setXYZ(n,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let p=0,_=0;for(let S=0,m=c.length;S<m;S++){o.isInterleavedBufferAttribute?p=c[S]*o.data.stride+o.offset:p=c[S]*u;for(let f=0;f<u;f++)d[_++]=l[p++]}return new ui(d,u,h)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Gn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);n.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=e(d,i);c.push(p)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(n))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(n));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xd=new Nt,fr=new L1,Oa=new Ah,Sd=new U,Ba=new U,ka=new U,za=new U,Oc=new U,Va=new U,Md=new U,Ga=new U;class hn extends rn{constructor(e=new Gn,n=new M0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Va.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(Oc.fromBufferAttribute(h,e),a?Va.addScaledVector(Oc,u):Va.addScaledVector(Oc.sub(n),u))}n.add(Va)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Oa.copy(i.boundingSphere),Oa.applyMatrix4(s),fr.copy(e.ray).recast(e.near),!(Oa.containsPoint(fr.origin)===!1&&(fr.intersectSphere(Oa,Sd)===null||fr.origin.distanceToSquared(Sd)>(e.far-e.near)**2))&&(xd.copy(s).invert(),fr.copy(e.ray).applyMatrix4(xd),!(i.boundingBox!==null&&fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,fr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=d.length;_<S;_++){const m=d[_],f=a[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=A,w=T;E<w;E+=3){const R=o.getX(E),C=o.getX(E+1),N=o.getX(E+2);r=Ha(this,f,e,i,l,u,h,R,C,N),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let m=_,f=S;m<f;m+=3){const A=o.getX(m),T=o.getX(m+1),E=o.getX(m+2);r=Ha(this,a,e,i,l,u,h,A,T,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,S=d.length;_<S;_++){const m=d[_],f=a[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let E=A,w=T;E<w;E+=3){const R=E,C=E+1,N=E+2;r=Ha(this,f,e,i,l,u,h,R,C,N),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),S=Math.min(c.count,p.start+p.count);for(let m=_,f=S;m<f;m+=3){const A=m,T=m+1,E=m+2;r=Ha(this,a,e,i,l,u,h,A,T,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function V1(t,e,n,i,r,s,a,o){let c;if(e.side===dn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===ir,o),c===null)return null;Ga.copy(o),Ga.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo(Ga);return l<n.near||l>n.far?null:{distance:l,point:Ga.clone(),object:t}}function Ha(t,e,n,i,r,s,a,o,c,l){t.getVertexPosition(o,Ba),t.getVertexPosition(c,ka),t.getVertexPosition(l,za);const u=V1(t,e,n,i,Ba,ka,za,Md);if(u){const h=new U;qn.getBarycoord(Md,Ba,ka,za,h),r&&(u.uv=qn.getInterpolatedAttribute(r,o,c,l,h,new pe)),s&&(u.uv1=qn.getInterpolatedAttribute(s,o,c,l,h,new pe)),a&&(u.normal=qn.getInterpolatedAttribute(a,o,c,l,h,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new U,materialIndex:0};qn.getNormal(Ba,ka,za,d.normal),u.face=d,u.barycoord=h}return u}class Cs extends Gn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(h,2));function _(S,m,f,A,T,E,w,R,C,N,v){const M=E/C,P=w/N,k=E/2,O=w/2,q=R/2,G=C+1,H=N+1;let B=0,$=0;const fe=new U;for(let ae=0;ae<H;ae++){const le=ae*P-O;for(let Xe=0;Xe<G;Xe++){const Ge=Xe*M-k;fe[S]=Ge*A,fe[m]=le*T,fe[f]=q,l.push(fe.x,fe.y,fe.z),fe[S]=0,fe[m]=0,fe[f]=R>0?1:-1,u.push(fe.x,fe.y,fe.z),h.push(Xe/C),h.push(1-ae/N),B+=1}}for(let ae=0;ae<N;ae++)for(let le=0;le<C;le++){const Xe=d+le+G*ae,Ge=d+le+G*(ae+1),ft=d+(le+1)+G*(ae+1),dt=d+(le+1)+G*ae;c.push(Xe,Ge,dt),c.push(Ge,ft,dt),$+=6}o.addGroup(p,$,v),p+=$,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _s(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function tn(t){const e={};for(let n=0;n<t.length;n++){const i=_s(t[n]);for(const r in i)e[r]=i[r]}return e}function G1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function T0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const H1={clone:_s,merge:tn};var W1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,X1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mi extends xa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=W1,this.fragmentShader=X1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=G1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class b0 extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xi=new U,yd=new pe,Ed=new pe;class Fn extends b0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=la*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return la*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,n){return this.getViewBounds(e,yd,Ed),n.subVectors(Ed,yd)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Zs*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const qr=-90,Yr=1;class q1 extends rn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Fn(qr,Yr,e,n);r.layers=this.layers,this.add(r);const s=new Fn(qr,Yr,e,n);s.layers=this.layers,this.add(s);const a=new Fn(qr,Yr,e,n);a.layers=this.layers,this.add(a);const o=new Fn(qr,Yr,e,n);o.layers=this.layers,this.add(o);const c=new Fn(qr,Yr,e,n);c.layers=this.layers,this.add(c);const l=new Fn(qr,Yr,e,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const l of n)this.remove(l);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===_o)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of n)this.add(l),l.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,c),e.setRenderTarget(i,4,r),e.render(n,l),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(h,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class A0 extends nn{constructor(e=[],n=Rr,i,r,s,a,o,c,l,u){super(e,n,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class w0 extends li{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new A0(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Cs(5,5,5),s=new mi({name:"CubemapFromEquirect",uniforms:_s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:Di});s.uniforms.tEquirect.value=n;const a=new hn(r,s),o=n.minFilter;return n.minFilter===yr&&(n.minFilter=$t),new q1(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}class Ws extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Y1={type:"move"};class Bc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ws,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ws,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ws,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const S of e.hand.values()){const m=n.getJointPose(S,i),f=this._getHandJoint(l,S);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,_=.005;l.inputState.pinching&&d>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Y1)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ws;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class K1 extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class j1 extends nn{constructor(e=null,n=1,i=1,r,s,a,o,c,l=Yt,u=Yt,h,d){super(null,a,o,c,l,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kc=new U,Z1=new U,J1=new Ye;class _r{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=kc.subVectors(i,n).cross(Z1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(kc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||J1.getNormalMatrix(e),r=this.coplanarPoint(kc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const dr=new Ah,$1=new pe(.5,.5),Wa=new U;class R0{constructor(e=new _r,n=new _r,i=new _r,r=new _r,s=new _r,a=new _r){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=oi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],h=s[5],d=s[6],p=s[7],_=s[8],S=s[9],m=s[10],f=s[11],A=s[12],T=s[13],E=s[14],w=s[15];if(r[0].setComponents(l-a,p-u,f-_,w-A).normalize(),r[1].setComponents(l+a,p+u,f+_,w+A).normalize(),r[2].setComponents(l+o,p+h,f+S,w+T).normalize(),r[3].setComponents(l-o,p-h,f-S,w-T).normalize(),i)r[4].setComponents(c,d,m,E).normalize(),r[5].setComponents(l-c,p-d,f-m,w-E).normalize();else if(r[4].setComponents(l-c,p-d,f-m,w-E).normalize(),n===oi)r[5].setComponents(l+c,p+d,f+m,w+E).normalize();else if(n===_o)r[5].setComponents(c,d,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){dr.center.set(0,0,0);const n=$1.distanceTo(e.center);return dr.radius=.7071067811865476+n,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Wa.x=r.normal.x>0?e.max.x:e.min.x,Wa.y=r.normal.y>0?e.max.y:e.min.y,Wa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Wa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ua extends nn{constructor(e,n,i=di,r,s,a,o=Yt,c=Yt,l,u=Oi,h=1){if(u!==Oi&&u!==Er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:h};super(d,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Q1 extends ua{constructor(e,n=di,i=Rr,r,s,a=Yt,o=Yt,c,l=Oi){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,n,i,r,s,a,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class C0 extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class wh extends Gn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],p=[];let _=0;const S=[],m=i/2;let f=0;A(),a===!1&&(e>0&&T(!0),n>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new Kt(h,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(p,2));function A(){const E=new U,w=new U;let R=0;const C=(n-e)/i;for(let N=0;N<=s;N++){const v=[],M=N/s,P=M*(n-e)+e;for(let k=0;k<=r;k++){const O=k/r,q=O*c+o,G=Math.sin(q),H=Math.cos(q);w.x=P*G,w.y=-M*i+m,w.z=P*H,h.push(w.x,w.y,w.z),E.set(G,C,H).normalize(),d.push(E.x,E.y,E.z),p.push(O,1-M),v.push(_++)}S.push(v)}for(let N=0;N<r;N++)for(let v=0;v<s;v++){const M=S[v][N],P=S[v+1][N],k=S[v+1][N+1],O=S[v][N+1];(e>0||v!==0)&&(u.push(M,P,O),R+=3),(n>0||v!==s-1)&&(u.push(P,k,O),R+=3)}l.addGroup(f,R,0),f+=R}function T(E){const w=_,R=new pe,C=new U;let N=0;const v=E===!0?e:n,M=E===!0?1:-1;for(let k=1;k<=r;k++)h.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),_++;const P=_;for(let k=0;k<=r;k++){const q=k/r*c+o,G=Math.cos(q),H=Math.sin(q);C.x=v*H,C.y=m*M,C.z=v*G,h.push(C.x,C.y,C.z),d.push(0,M,0),R.x=G*.5+.5,R.y=H*.5*M+.5,p.push(R.x,R.y),_++}for(let k=0;k<r;k++){const O=w+k,q=P+k;E===!0?u.push(q,q+1,O):u.push(q+1,q,O),N+=3}l.addGroup(f,N,E===!0?1:2),f+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _i{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){He("Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let a;n?a=n:a=e*i[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=i[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===a)return r/(s-1);const u=i[r],d=i[r+1]-u,p=(a-u)/d;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=n||(a.isVector2?new pe:new U);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new U,r=[],s=[],a=[],o=new U,c=new Nt;for(let p=0;p<=e;p++){const _=p/e;r[p]=this.getTangentAt(_,new U)}s[0]=new U,a[0]=new U;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),d<=l&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Ze(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,_))}a[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Ze(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let _=1;_<=e;_++)s[_].applyMatrix4(c.makeRotationAxis(r[_],p*_)),a[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Rh extends _i{constructor(e=0,n=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,n=new pe){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*u-p*h+this.aX,l=d*h+p*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ev extends Rh{constructor(e,n,i,r,s,a){super(e,n,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ch(){let t=0,e=0,n=0,i=0;function r(s,a,o,c){t=s,e=o,n=-3*s+3*a-2*o-c,i=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,u,h){let d=(a-s)/l-(o-s)/(l+u)+(o-a)/u,p=(o-a)/u-(c-a)/(u+h)+(c-o)/h;d*=u,p*=u,r(a,o,d,p)},calc:function(s){const a=s*s,o=a*s;return t+e*s+n*a+i*o}}}const Xa=new U,zc=new Ch,Vc=new Ch,Gc=new Ch;class tv extends _i{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new U){const i=n,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,u;this.closed||o>0?l=r[(o-1)%s]:(Xa.subVectors(r[0],r[1]).add(r[0]),l=Xa);const h=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(Xa.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Xa),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(h),p),S=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);S<1e-4&&(S=1),_<1e-4&&(_=S),m<1e-4&&(m=S),zc.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,_,S,m),Vc.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,_,S,m),Gc.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,_,S,m)}else this.curveType==="catmullrom"&&(zc.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Vc.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Gc.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return i.set(zc.calc(c),Vc.calc(c),Gc.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new U().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Td(t,e,n,i,r){const s=(i-e)*.5,a=(r-n)*.5,o=t*t,c=t*o;return(2*n-2*i+s+a)*c+(-3*n+3*i-2*s-a)*o+s*t+n}function nv(t,e){const n=1-t;return n*n*e}function iv(t,e){return 2*(1-t)*t*e}function rv(t,e){return t*t*e}function $s(t,e,n,i){return nv(t,e)+iv(t,n)+rv(t,i)}function sv(t,e){const n=1-t;return n*n*n*e}function av(t,e){const n=1-t;return 3*n*n*t*e}function ov(t,e){return 3*(1-t)*t*t*e}function cv(t,e){return t*t*t*e}function Qs(t,e,n,i,r){return sv(t,e)+av(t,n)+ov(t,i)+cv(t,r)}class P0 extends _i{constructor(e=new pe,n=new pe,i=new pe,r=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new pe){const i=n,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Qs(e,r.x,s.x,a.x,o.x),Qs(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class lv extends _i{constructor(e=new U,n=new U,i=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new U){const i=n,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Qs(e,r.x,s.x,a.x,o.x),Qs(e,r.y,s.y,a.y,o.y),Qs(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class L0 extends _i{constructor(e=new pe,n=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new pe){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new pe){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uv extends _i{constructor(e=new U,n=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new U){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new U){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class D0 extends _i{constructor(e=new pe,n=new pe,i=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new pe){const i=n,r=this.v0,s=this.v1,a=this.v2;return i.set($s(e,r.x,s.x,a.x),$s(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hv extends _i{constructor(e=new U,n=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new U){const i=n,r=this.v0,s=this.v1,a=this.v2;return i.set($s(e,r.x,s.x,a.x),$s(e,r.y,s.y,a.y),$s(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class I0 extends _i{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new pe){const i=n,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return i.set(Td(o,c.x,l.x,u.x,h.x),Td(o,c.y,l.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new pe().fromArray(r))}return this}}var lu=Object.freeze({__proto__:null,ArcCurve:ev,CatmullRomCurve3:tv,CubicBezierCurve:P0,CubicBezierCurve3:lv,EllipseCurve:Rh,LineCurve:L0,LineCurve3:uv,QuadraticBezierCurve:D0,QuadraticBezierCurve3:hv,SplineCurve:I0});class fv extends _i{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new lu[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const a=r[s]-i,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new lu[r.type]().fromJSON(r))}return this}}class bd extends fv{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new L0(this.currentPoint.clone(),new pe(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new D0(this.currentPoint.clone(),new pe(e,n),new pe(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,a){const o=new P0(this.currentPoint.clone(),new pe(e,n),new pe(i,r),new pe(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new I0(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,n+c,i,r,s,a),this}absarc(e,n,i,r,s,a){return this.absellipse(e,n,i,i,r,s,a),this}ellipse(e,n,i,r,s,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,n+u,i,r,s,a,o,c),this}absellipse(e,n,i,r,s,a,o,c){const l=new Rh(e,n,i,r,s,a,o,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class xo extends bd{constructor(e){super(e),this.uuid=Lr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new bd().fromJSON(r))}return this}}function dv(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=U0(t,0,r,n,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(i&&(s=vv(t,e,s,n)),t.length>80*n){o=t[0],c=t[1];let u=o,h=c;for(let d=n;d<r;d+=n){const p=t[d],_=t[d+1];p<o&&(o=p),_<c&&(c=_),p>u&&(u=p),_>h&&(h=_)}l=Math.max(u-o,h-c),l=l!==0?32767/l:0}return ha(s,a,n,o,c,l,0),a}function U0(t,e,n,i,r){let s;if(r===Cv(t,e,n,i)>0)for(let a=e;a<n;a+=i)s=Ad(a/i|0,t[a],t[a+1],s);else for(let a=n-i;a>=e;a-=i)s=Ad(a/i|0,t[a],t[a+1],s);return s&&vs(s,s.next)&&(da(s),s=s.next),s}function Cr(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(vs(n,n.next)||wt(n.prev,n,n.next)===0)){if(da(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function ha(t,e,n,i,r,s,a){if(!t)return;!a&&s&&Ev(t,i,r,s);let o=t;for(;t.prev!==t.next;){const c=t.prev,l=t.next;if(s?mv(t,i,r,s):pv(t)){e.push(c.i,t.i,l.i),da(t),t=l.next,o=l.next;continue}if(t=l,t===o){a?a===1?(t=gv(Cr(t),e),ha(t,e,n,i,r,s,2)):a===2&&_v(t,e,n,i,r,s):ha(Cr(t),e,n,i,r,s,1);break}}}function pv(t){const e=t.prev,n=t,i=t.next;if(wt(e,n,i)>=0)return!1;const r=e.x,s=n.x,a=i.x,o=e.y,c=n.y,l=i.y,u=Math.min(r,s,a),h=Math.min(o,c,l),d=Math.max(r,s,a),p=Math.max(o,c,l);let _=i.next;for(;_!==e;){if(_.x>=u&&_.x<=d&&_.y>=h&&_.y<=p&&Xs(r,o,s,c,a,l,_.x,_.y)&&wt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function mv(t,e,n,i){const r=t.prev,s=t,a=t.next;if(wt(r,s,a)>=0)return!1;const o=r.x,c=s.x,l=a.x,u=r.y,h=s.y,d=a.y,p=Math.min(o,c,l),_=Math.min(u,h,d),S=Math.max(o,c,l),m=Math.max(u,h,d),f=uu(p,_,e,n,i),A=uu(S,m,e,n,i);let T=t.prevZ,E=t.nextZ;for(;T&&T.z>=f&&E&&E.z<=A;){if(T.x>=p&&T.x<=S&&T.y>=_&&T.y<=m&&T!==r&&T!==a&&Xs(o,u,c,h,l,d,T.x,T.y)&&wt(T.prev,T,T.next)>=0||(T=T.prevZ,E.x>=p&&E.x<=S&&E.y>=_&&E.y<=m&&E!==r&&E!==a&&Xs(o,u,c,h,l,d,E.x,E.y)&&wt(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;T&&T.z>=f;){if(T.x>=p&&T.x<=S&&T.y>=_&&T.y<=m&&T!==r&&T!==a&&Xs(o,u,c,h,l,d,T.x,T.y)&&wt(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;E&&E.z<=A;){if(E.x>=p&&E.x<=S&&E.y>=_&&E.y<=m&&E!==r&&E!==a&&Xs(o,u,c,h,l,d,E.x,E.y)&&wt(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function gv(t,e){let n=t;do{const i=n.prev,r=n.next.next;!vs(i,r)&&F0(i,n,n.next,r)&&fa(i,r)&&fa(r,i)&&(e.push(i.i,n.i,r.i),da(n),da(n.next),n=t=r),n=n.next}while(n!==t);return Cr(n)}function _v(t,e,n,i,r,s){let a=t;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Av(a,o)){let c=O0(a,o);a=Cr(a,a.next),c=Cr(c,c.next),ha(a,e,n,i,r,s,0),ha(c,e,n,i,r,s,0);return}o=o.next}a=a.next}while(a!==t)}function vv(t,e,n,i){const r=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*i,c=s<a-1?e[s+1]*i:t.length,l=U0(t,o,c,i,!1);l===l.next&&(l.steiner=!0),r.push(bv(l))}r.sort(xv);for(let s=0;s<r.length;s++)n=Sv(r[s],n);return n}function xv(t,e){let n=t.x-e.x;if(n===0&&(n=t.y-e.y,n===0)){const i=(t.next.y-t.y)/(t.next.x-t.x),r=(e.next.y-e.y)/(e.next.x-e.x);n=i-r}return n}function Sv(t,e){const n=Mv(t,e);if(!n)return e;const i=O0(n,t);return Cr(i,i.next),Cr(n,n.next)}function Mv(t,e){let n=e;const i=t.x,r=t.y;let s=-1/0,a;if(vs(t,n))return n;do{if(vs(t,n.next))return n.next;if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){const h=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(h<=i&&h>s&&(s=h,a=n.x<n.next.x?n:n.next,h===i))return a}n=n.next}while(n!==e);if(!a)return null;const o=a,c=a.x,l=a.y;let u=1/0;n=a;do{if(i>=n.x&&n.x>=c&&i!==n.x&&N0(r<l?i:s,r,c,l,r<l?s:i,r,n.x,n.y)){const h=Math.abs(r-n.y)/(i-n.x);fa(n,t)&&(h<u||h===u&&(n.x>a.x||n.x===a.x&&yv(a,n)))&&(a=n,u=h)}n=n.next}while(n!==o);return a}function yv(t,e){return wt(t.prev,t,e.prev)<0&&wt(e.next,t,t.next)<0}function Ev(t,e,n,i){let r=t;do r.z===0&&(r.z=uu(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,Tv(r)}function Tv(t){let e,n=1;do{let i=t,r;t=null;let s=null;for(e=0;i;){e++;let a=i,o=0;for(let l=0;l<n&&(o++,a=a.nextZ,!!a);l++);let c=n;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||i.z<=a.z)?(r=i,i=i.nextZ,o--):(r=a,a=a.nextZ,c--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;i=a}s.nextZ=null,n*=2}while(e>1);return t}function uu(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function bv(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function N0(t,e,n,i,r,s,a,o){return(r-a)*(e-o)>=(t-a)*(s-o)&&(t-a)*(i-o)>=(n-a)*(e-o)&&(n-a)*(s-o)>=(r-a)*(i-o)}function Xs(t,e,n,i,r,s,a,o){return!(t===a&&e===o)&&N0(t,e,n,i,r,s,a,o)}function Av(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!wv(t,e)&&(fa(t,e)&&fa(e,t)&&Rv(t,e)&&(wt(t.prev,t,e.prev)||wt(t,e.prev,e))||vs(t,e)&&wt(t.prev,t,t.next)>0&&wt(e.prev,e,e.next)>0)}function wt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function vs(t,e){return t.x===e.x&&t.y===e.y}function F0(t,e,n,i){const r=Ya(wt(t,e,n)),s=Ya(wt(t,e,i)),a=Ya(wt(n,i,t)),o=Ya(wt(n,i,e));return!!(r!==s&&a!==o||r===0&&qa(t,n,e)||s===0&&qa(t,i,e)||a===0&&qa(n,t,i)||o===0&&qa(n,e,i))}function qa(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Ya(t){return t>0?1:t<0?-1:0}function wv(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&F0(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function fa(t,e){return wt(t.prev,t,t.next)<0?wt(t,e,t.next)>=0&&wt(t,t.prev,e)>=0:wt(t,e,t.prev)<0||wt(t,t.next,e)<0}function Rv(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function O0(t,e){const n=hu(t.i,t.x,t.y),i=hu(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function Ad(t,e,n,i){const r=hu(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function da(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function hu(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Cv(t,e,n,i){let r=0;for(let s=e,a=n-i;s<n;s+=i)r+=(t[a]-t[s])*(t[s+1]+t[a+1]),a=s;return r}class Pv{static triangulate(e,n,i=2){return dv(e,n,i)}}class Ri{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Ri.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];wd(e),Rd(i,e);let a=e.length;n.forEach(wd);for(let c=0;c<n.length;c++)r.push(a),a+=n[c].length,Rd(i,n[c]);const o=Pv.triangulate(i,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function wd(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function Rd(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Ph extends Gn{constructor(e=new xo([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new Kt(r,3)),this.setAttribute("uv",new Kt(s,2)),this.computeVertexNormals();function a(o){const c=[],l=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,h=n.depth!==void 0?n.depth:1;let d=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,_=n.bevelSize!==void 0?n.bevelSize:p-.1,S=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3;const f=n.extrudePath,A=n.UVGenerator!==void 0?n.UVGenerator:Lv;let T,E=!1,w,R,C,N;if(f){T=f.getSpacedPoints(u),E=!0,d=!1;const Z=f.isCatmullRomCurve3?f.closed:!1;w=f.computeFrenetFrames(u,Z),R=new U,C=new U,N=new U}d||(m=0,p=0,_=0,S=0);const v=o.extractPoints(l);let M=v.shape;const P=v.holes;if(!Ri.isClockWise(M)){M=M.reverse();for(let Z=0,te=P.length;Z<te;Z++){const J=P[Z];Ri.isClockWise(J)&&(P[Z]=J.reverse())}}function O(Z){const J=10000000000000001e-36;let me=Z[0];for(let b=1;b<=Z.length;b++){const Ne=b%Z.length,ve=Z[Ne],ke=ve.x-me.x,re=ve.y-me.y,y=ke*ke+re*re,g=Math.max(Math.abs(ve.x),Math.abs(ve.y),Math.abs(me.x),Math.abs(me.y)),D=J*g*g;if(y<=D){Z.splice(Ne,1),b--;continue}me=ve}}O(M),P.forEach(O);const q=P.length,G=M;for(let Z=0;Z<q;Z++){const te=P[Z];M=M.concat(te)}function H(Z,te,J){return te||nt("ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(te,J)}const B=M.length;function $(Z,te,J){let me,b,Ne;const ve=Z.x-te.x,ke=Z.y-te.y,re=J.x-Z.x,y=J.y-Z.y,g=ve*ve+ke*ke,D=ve*y-ke*re;if(Math.abs(D)>Number.EPSILON){const W=Math.sqrt(g),K=Math.sqrt(re*re+y*y),X=te.x-ke/W,we=te.y+ve/W,se=J.x-y/K,be=J.y+re/K,ze=((se-X)*y-(be-we)*re)/(ve*y-ke*re);me=X+ve*ze-Z.x,b=we+ke*ze-Z.y;const ee=me*me+b*b;if(ee<=2)return new pe(me,b);Ne=Math.sqrt(ee/2)}else{let W=!1;ve>Number.EPSILON?re>Number.EPSILON&&(W=!0):ve<-Number.EPSILON?re<-Number.EPSILON&&(W=!0):Math.sign(ke)===Math.sign(y)&&(W=!0),W?(me=-ke,b=ve,Ne=Math.sqrt(g)):(me=ve,b=ke,Ne=Math.sqrt(g/2))}return new pe(me/Ne,b/Ne)}const fe=[];for(let Z=0,te=G.length,J=te-1,me=Z+1;Z<te;Z++,J++,me++)J===te&&(J=0),me===te&&(me=0),fe[Z]=$(G[Z],G[J],G[me]);const ae=[];let le,Xe=fe.concat();for(let Z=0,te=q;Z<te;Z++){const J=P[Z];le=[];for(let me=0,b=J.length,Ne=b-1,ve=me+1;me<b;me++,Ne++,ve++)Ne===b&&(Ne=0),ve===b&&(ve=0),le[me]=$(J[me],J[Ne],J[ve]);ae.push(le),Xe=Xe.concat(le)}let Ge;if(m===0)Ge=Ri.triangulateShape(G,P);else{const Z=[],te=[];for(let J=0;J<m;J++){const me=J/m,b=p*Math.cos(me*Math.PI/2),Ne=_*Math.sin(me*Math.PI/2)+S;for(let ve=0,ke=G.length;ve<ke;ve++){const re=H(G[ve],fe[ve],Ne);Be(re.x,re.y,-b),me===0&&Z.push(re)}for(let ve=0,ke=q;ve<ke;ve++){const re=P[ve];le=ae[ve];const y=[];for(let g=0,D=re.length;g<D;g++){const W=H(re[g],le[g],Ne);Be(W.x,W.y,-b),me===0&&y.push(W)}me===0&&te.push(y)}}Ge=Ri.triangulateShape(Z,te)}const ft=Ge.length,dt=_+S;for(let Z=0;Z<B;Z++){const te=d?H(M[Z],Xe[Z],dt):M[Z];E?(C.copy(w.normals[0]).multiplyScalar(te.x),R.copy(w.binormals[0]).multiplyScalar(te.y),N.copy(T[0]).add(C).add(R),Be(N.x,N.y,N.z)):Be(te.x,te.y,0)}for(let Z=1;Z<=u;Z++)for(let te=0;te<B;te++){const J=d?H(M[te],Xe[te],dt):M[te];E?(C.copy(w.normals[Z]).multiplyScalar(J.x),R.copy(w.binormals[Z]).multiplyScalar(J.y),N.copy(T[Z]).add(C).add(R),Be(N.x,N.y,N.z)):Be(J.x,J.y,h/u*Z)}for(let Z=m-1;Z>=0;Z--){const te=Z/m,J=p*Math.cos(te*Math.PI/2),me=_*Math.sin(te*Math.PI/2)+S;for(let b=0,Ne=G.length;b<Ne;b++){const ve=H(G[b],fe[b],me);Be(ve.x,ve.y,h+J)}for(let b=0,Ne=P.length;b<Ne;b++){const ve=P[b];le=ae[b];for(let ke=0,re=ve.length;ke<re;ke++){const y=H(ve[ke],le[ke],me);E?Be(y.x,y.y+T[u-1].y,T[u-1].x+J):Be(y.x,y.y,h+J)}}}Y(),Q();function Y(){const Z=r.length/3;if(d){let te=0,J=B*te;for(let me=0;me<ft;me++){const b=Ge[me];Ee(b[2]+J,b[1]+J,b[0]+J)}te=u+m*2,J=B*te;for(let me=0;me<ft;me++){const b=Ge[me];Ee(b[0]+J,b[1]+J,b[2]+J)}}else{for(let te=0;te<ft;te++){const J=Ge[te];Ee(J[2],J[1],J[0])}for(let te=0;te<ft;te++){const J=Ge[te];Ee(J[0]+B*u,J[1]+B*u,J[2]+B*u)}}i.addGroup(Z,r.length/3-Z,0)}function Q(){const Z=r.length/3;let te=0;Se(G,te),te+=G.length;for(let J=0,me=P.length;J<me;J++){const b=P[J];Se(b,te),te+=b.length}i.addGroup(Z,r.length/3-Z,1)}function Se(Z,te){let J=Z.length;for(;--J>=0;){const me=J;let b=J-1;b<0&&(b=Z.length-1);for(let Ne=0,ve=u+m*2;Ne<ve;Ne++){const ke=B*Ne,re=B*(Ne+1),y=te+me+ke,g=te+b+ke,D=te+b+re,W=te+me+re;tt(y,g,D,W)}}}function Be(Z,te,J){c.push(Z),c.push(te),c.push(J)}function Ee(Z,te,J){pt(Z),pt(te),pt(J);const me=r.length/3,b=A.generateTopUV(i,r,me-3,me-2,me-1);qe(b[0]),qe(b[1]),qe(b[2])}function tt(Z,te,J,me){pt(Z),pt(te),pt(me),pt(te),pt(J),pt(me);const b=r.length/3,Ne=A.generateSideWallUV(i,r,b-6,b-3,b-2,b-1);qe(Ne[0]),qe(Ne[1]),qe(Ne[3]),qe(Ne[1]),qe(Ne[2]),qe(Ne[3])}function pt(Z){r.push(c[Z*3+0]),r.push(c[Z*3+1]),r.push(c[Z*3+2])}function qe(Z){s.push(Z.x),s.push(Z.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return Dv(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=n[e.shapes[s]];i.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new lu[r.type]().fromJSON(r)),new Ph(i,e.options)}}const Lv={generateTopUV:function(t,e,n,i,r){const s=e[n*3],a=e[n*3+1],o=e[i*3],c=e[i*3+1],l=e[r*3],u=e[r*3+1];return[new pe(s,a),new pe(o,c),new pe(l,u)]},generateSideWallUV:function(t,e,n,i,r,s){const a=e[n*3],o=e[n*3+1],c=e[n*3+2],l=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[r*3],p=e[r*3+1],_=e[r*3+2],S=e[s*3],m=e[s*3+1],f=e[s*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new pe(a,1-c),new pe(l,1-h),new pe(d,1-_),new pe(S,1-f)]:[new pe(o,1-c),new pe(u,1-h),new pe(p,1-_),new pe(m,1-f)]}};function Dv(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class $o extends Gn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,h=e/o,d=n/c,p=[],_=[],S=[],m=[];for(let f=0;f<u;f++){const A=f*d-a;for(let T=0;T<l;T++){const E=T*h-s;_.push(E,-A,0),S.push(0,0,1),m.push(T/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let A=0;A<o;A++){const T=A+l*f,E=A+l*(f+1),w=A+1+l*(f+1),R=A+1+l*f;p.push(T,E,R),p.push(E,w,R)}this.setIndex(p),this.setAttribute("position",new Kt(_,3)),this.setAttribute("normal",new Kt(S,3)),this.setAttribute("uv",new Kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.width,e.height,e.widthSegments,e.heightSegments)}}class Lh extends Gn{constructor(e=new xo([new pe(0,.5),new pe(-.5,-.5),new pe(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:n};const i=[],r=[],s=[],a=[];let o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(i),this.setAttribute("position",new Kt(r,3)),this.setAttribute("normal",new Kt(s,3)),this.setAttribute("uv",new Kt(a,2));function l(u){const h=r.length/3,d=u.extractPoints(n);let p=d.shape;const _=d.holes;Ri.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=_.length;m<f;m++){const A=_[m];Ri.isClockWise(A)===!0&&(_[m]=A.reverse())}const S=Ri.triangulateShape(p,_);for(let m=0,f=_.length;m<f;m++){const A=_[m];p=p.concat(A)}for(let m=0,f=p.length;m<f;m++){const A=p[m];r.push(A.x,A.y,0),s.push(0,0,1),a.push(A.x,A.y)}for(let m=0,f=S.length;m<f;m++){const A=S[m],T=A[0]+h,E=A[1]+h,w=A[2]+h;i.push(T,E,w),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes;return Iv(n,e)}static fromJSON(e,n){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const a=n[e.shapes[r]];i.push(a)}return new Lh(i,e.curveSegments)}}function Iv(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}class Uv extends mi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class B0 extends xa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=g0,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cd extends B0{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Nv extends xa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=J_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fv extends xa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ov extends rn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class Bv extends Ov{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new et(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}class k0 extends b0{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class kv extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Pd(t,e,n,i){const r=zv(i);switch(n){case d0:return t*e;case m0:return t*e/r.components*r.byteLength;case xh:return t*e/r.components*r.byteLength;case ms:return t*e*2/r.components*r.byteLength;case Sh:return t*e*2/r.components*r.byteLength;case p0:return t*e*3/r.components*r.byteLength;case Yn:return t*e*4/r.components*r.byteLength;case Mh:return t*e*4/r.components*r.byteLength;case ro:case so:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ao:case oo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Dl:case Ul:return Math.max(t,16)*Math.max(e,8)/4;case Ll:case Il:return Math.max(t,8)*Math.max(e,8)/2;case Nl:case Fl:case Bl:case kl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ol:case zl:case Vl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ql:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case jl:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Zl:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case $l:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Ql:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case eu:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case tu:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case nu:case iu:case ru:return Math.ceil(t/4)*Math.ceil(e/4)*16;case su:case au:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ou:case cu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function zv(t){switch(t){case On:case l0:return{byteLength:1,components:1};case aa:case u0:case Fi:return{byteLength:2,components:1};case _h:case vh:return{byteLength:2,components:4};case di:case gh:case ai:return{byteLength:4,components:1};case h0:case f0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mh}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mh);function z0(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Vv(t){const e=new WeakMap;function n(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=t.createBuffer();t.bindBuffer(c,d),t.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=t.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=t.SHORT;else if(l instanceof Uint32Array)p=t.UNSIGNED_INT;else if(l instanceof Int32Array)p=t.INT;else if(l instanceof Int8Array)p=t.BYTE;else if(l instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,l){const u=c.array,h=c.updateRanges;if(t.bindBuffer(l,o),h.length===0)t.bufferSubData(l,0,u);else{h.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<h.length;p++){const _=h[d],S=h[p];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++d,h[d]=S)}h.length=d+1;for(let p=0,_=h.length;p<_;p++){const S=h[p];t.bufferSubData(l,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(t.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,n(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Gv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Jv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$v=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,t2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,n2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,i2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,r2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,s2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,a2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,o2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,c2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,l2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,u2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,h2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,f2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,d2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,p2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v2="gl_FragColor = linearToOutputTexel( gl_FragColor );",x2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,S2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,M2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,y2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,E2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,T2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,b2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,w2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,R2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,C2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,P2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,D2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,I2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,U2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,N2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,F2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,k2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,z2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,V2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,G2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,H2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,W2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,X2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,K2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,j2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Z2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,J2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ex=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ix=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ax=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ux=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,px=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_x=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ex=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Tx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ax=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Px=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ix=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ux=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$x=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,e3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,n3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,a3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,c3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,l3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,f3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,g3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,x3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,S3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:Gv,alphahash_pars_fragment:Hv,alphamap_fragment:Wv,alphamap_pars_fragment:Xv,alphatest_fragment:qv,alphatest_pars_fragment:Yv,aomap_fragment:Kv,aomap_pars_fragment:jv,batching_pars_vertex:Zv,batching_vertex:Jv,begin_vertex:$v,beginnormal_vertex:Qv,bsdfs:e2,iridescence_fragment:t2,bumpmap_pars_fragment:n2,clipping_planes_fragment:i2,clipping_planes_pars_fragment:r2,clipping_planes_pars_vertex:s2,clipping_planes_vertex:a2,color_fragment:o2,color_pars_fragment:c2,color_pars_vertex:l2,color_vertex:u2,common:h2,cube_uv_reflection_fragment:f2,defaultnormal_vertex:d2,displacementmap_pars_vertex:p2,displacementmap_vertex:m2,emissivemap_fragment:g2,emissivemap_pars_fragment:_2,colorspace_fragment:v2,colorspace_pars_fragment:x2,envmap_fragment:S2,envmap_common_pars_fragment:M2,envmap_pars_fragment:y2,envmap_pars_vertex:E2,envmap_physical_pars_fragment:U2,envmap_vertex:T2,fog_vertex:b2,fog_pars_vertex:A2,fog_fragment:w2,fog_pars_fragment:R2,gradientmap_pars_fragment:C2,lightmap_pars_fragment:P2,lights_lambert_fragment:L2,lights_lambert_pars_fragment:D2,lights_pars_begin:I2,lights_toon_fragment:N2,lights_toon_pars_fragment:F2,lights_phong_fragment:O2,lights_phong_pars_fragment:B2,lights_physical_fragment:k2,lights_physical_pars_fragment:z2,lights_fragment_begin:V2,lights_fragment_maps:G2,lights_fragment_end:H2,logdepthbuf_fragment:W2,logdepthbuf_pars_fragment:X2,logdepthbuf_pars_vertex:q2,logdepthbuf_vertex:Y2,map_fragment:K2,map_pars_fragment:j2,map_particle_fragment:Z2,map_particle_pars_fragment:J2,metalnessmap_fragment:$2,metalnessmap_pars_fragment:Q2,morphinstance_vertex:ex,morphcolor_vertex:tx,morphnormal_vertex:nx,morphtarget_pars_vertex:ix,morphtarget_vertex:rx,normal_fragment_begin:sx,normal_fragment_maps:ax,normal_pars_fragment:ox,normal_pars_vertex:cx,normal_vertex:lx,normalmap_pars_fragment:ux,clearcoat_normal_fragment_begin:hx,clearcoat_normal_fragment_maps:fx,clearcoat_pars_fragment:dx,iridescence_pars_fragment:px,opaque_fragment:mx,packing:gx,premultiplied_alpha_fragment:_x,project_vertex:vx,dithering_fragment:xx,dithering_pars_fragment:Sx,roughnessmap_fragment:Mx,roughnessmap_pars_fragment:yx,shadowmap_pars_fragment:Ex,shadowmap_pars_vertex:Tx,shadowmap_vertex:bx,shadowmask_pars_fragment:Ax,skinbase_vertex:wx,skinning_pars_vertex:Rx,skinning_vertex:Cx,skinnormal_vertex:Px,specularmap_fragment:Lx,specularmap_pars_fragment:Dx,tonemapping_fragment:Ix,tonemapping_pars_fragment:Ux,transmission_fragment:Nx,transmission_pars_fragment:Fx,uv_pars_fragment:Ox,uv_pars_vertex:Bx,uv_vertex:kx,worldpos_vertex:zx,background_vert:Vx,background_frag:Gx,backgroundCube_vert:Hx,backgroundCube_frag:Wx,cube_vert:Xx,cube_frag:qx,depth_vert:Yx,depth_frag:Kx,distance_vert:jx,distance_frag:Zx,equirect_vert:Jx,equirect_frag:$x,linedashed_vert:Qx,linedashed_frag:e3,meshbasic_vert:t3,meshbasic_frag:n3,meshlambert_vert:i3,meshlambert_frag:r3,meshmatcap_vert:s3,meshmatcap_frag:a3,meshnormal_vert:o3,meshnormal_frag:c3,meshphong_vert:l3,meshphong_frag:u3,meshphysical_vert:h3,meshphysical_frag:f3,meshtoon_vert:d3,meshtoon_frag:p3,points_vert:m3,points_frag:g3,shadow_vert:_3,shadow_frag:v3,sprite_vert:x3,sprite_frag:S3},de={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},ri={basic:{uniforms:tn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:tn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new et(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:tn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:tn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:tn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new et(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:tn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:tn([de.points,de.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:tn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:tn([de.common,de.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:tn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:tn([de.sprite,de.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:tn([de.common,de.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:tn([de.lights,de.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};ri.physical={uniforms:tn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Ka={r:0,b:0,g:0},pr=new pi,M3=new Nt;function y3(t,e,n,i,r,s,a){const o=new et(0);let c=s===!0?0:1,l,u,h=null,d=0,p=null;function _(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?n:e).get(E)),E}function S(T){let E=!1;const w=_(T);w===null?f(o,c):w&&w.isColor&&(f(w,1),E=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(T,E){const w=_(E);w&&(w.isCubeTexture||w.mapping===Jo)?(u===void 0&&(u=new hn(new Cs(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:_s(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),pr.copy(E.backgroundRotation),pr.x*=-1,pr.y*=-1,pr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(M3.makeRotationFromEuler(pr)),u.material.toneMapped=it.getTransfer(w.colorSpace)!==ht,(h!==w||d!==w.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=w,d=w.version,p=t.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new hn(new $o(2,2),new mi({name:"BackgroundMaterial",uniforms:_s(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=it.getTransfer(w.colorSpace)!==ht,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||d!==w.version||p!==t.toneMapping)&&(l.material.needsUpdate=!0,h=w,d=w.version,p=t.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function f(T,E){T.getRGB(Ka,T0(t)),i.buffers.color.setClear(Ka.r,Ka.g,Ka.b,E,a)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,E=1){o.set(T),c=E,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,f(o,c)},render:S,addToRenderList:m,dispose:A}}function E3(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(M,P,k,O,q){let G=!1;const H=h(O,k,P);s!==H&&(s=H,l(s.object)),G=p(M,O,k,q),G&&_(M,O,k,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,E(M,P,k,O),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return t.createVertexArray()}function l(M){return t.bindVertexArray(M)}function u(M){return t.deleteVertexArray(M)}function h(M,P,k){const O=k.wireframe===!0;let q=i[M.id];q===void 0&&(q={},i[M.id]=q);let G=q[P.id];G===void 0&&(G={},q[P.id]=G);let H=G[O];return H===void 0&&(H=d(c()),G[O]=H),H}function d(M){const P=[],k=[],O=[];for(let q=0;q<n;q++)P[q]=0,k[q]=0,O[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:O,object:M,attributes:{},index:null}}function p(M,P,k,O){const q=s.attributes,G=P.attributes;let H=0;const B=k.getAttributes();for(const $ in B)if(B[$].location>=0){const ae=q[$];let le=G[$];if(le===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(le=M.instanceColor)),ae===void 0||ae.attribute!==le||le&&ae.data!==le.data)return!0;H++}return s.attributesNum!==H||s.index!==O}function _(M,P,k,O){const q={},G=P.attributes;let H=0;const B=k.getAttributes();for(const $ in B)if(B[$].location>=0){let ae=G[$];ae===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor));const le={};le.attribute=ae,ae&&ae.data&&(le.data=ae.data),q[$]=le,H++}s.attributes=q,s.attributesNum=H,s.index=O}function S(){const M=s.newAttributes;for(let P=0,k=M.length;P<k;P++)M[P]=0}function m(M){f(M,0)}function f(M,P){const k=s.newAttributes,O=s.enabledAttributes,q=s.attributeDivisors;k[M]=1,O[M]===0&&(t.enableVertexAttribArray(M),O[M]=1),q[M]!==P&&(t.vertexAttribDivisor(M,P),q[M]=P)}function A(){const M=s.newAttributes,P=s.enabledAttributes;for(let k=0,O=P.length;k<O;k++)P[k]!==M[k]&&(t.disableVertexAttribArray(k),P[k]=0)}function T(M,P,k,O,q,G,H){H===!0?t.vertexAttribIPointer(M,P,k,q,G):t.vertexAttribPointer(M,P,k,O,q,G)}function E(M,P,k,O){S();const q=O.attributes,G=k.getAttributes(),H=P.defaultAttributeValues;for(const B in G){const $=G[B];if($.location>=0){let fe=q[B];if(fe===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor)),fe!==void 0){const ae=fe.normalized,le=fe.itemSize,Xe=e.get(fe);if(Xe===void 0)continue;const Ge=Xe.buffer,ft=Xe.type,dt=Xe.bytesPerElement,Y=ft===t.INT||ft===t.UNSIGNED_INT||fe.gpuType===gh;if(fe.isInterleavedBufferAttribute){const Q=fe.data,Se=Q.stride,Be=fe.offset;if(Q.isInstancedInterleavedBuffer){for(let Ee=0;Ee<$.locationSize;Ee++)f($.location+Ee,Q.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ee=0;Ee<$.locationSize;Ee++)m($.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let Ee=0;Ee<$.locationSize;Ee++)T($.location+Ee,le/$.locationSize,ft,ae,Se*dt,(Be+le/$.locationSize*Ee)*dt,Y)}else{if(fe.isInstancedBufferAttribute){for(let Q=0;Q<$.locationSize;Q++)f($.location+Q,fe.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Q=0;Q<$.locationSize;Q++)m($.location+Q);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let Q=0;Q<$.locationSize;Q++)T($.location+Q,le/$.locationSize,ft,ae,le*dt,le/$.locationSize*Q*dt,Y)}}else if(H!==void 0){const ae=H[B];if(ae!==void 0)switch(ae.length){case 2:t.vertexAttrib2fv($.location,ae);break;case 3:t.vertexAttrib3fv($.location,ae);break;case 4:t.vertexAttrib4fv($.location,ae);break;default:t.vertexAttrib1fv($.location,ae)}}}}A()}function w(){N();for(const M in i){const P=i[M];for(const k in P){const O=P[k];for(const q in O)u(O[q].object),delete O[q];delete P[k]}delete i[M]}}function R(M){if(i[M.id]===void 0)return;const P=i[M.id];for(const k in P){const O=P[k];for(const q in O)u(O[q].object),delete O[q];delete P[k]}delete i[M.id]}function C(M){for(const P in i){const k=i[P];if(k[M.id]===void 0)continue;const O=k[M.id];for(const q in O)u(O[q].object),delete O[q];delete k[M.id]}}function N(){v(),a=!0,s!==r&&(s=r,l(s.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:v,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:m,disableUnusedAttributes:A}}function T3(t,e,n){let i;function r(l){i=l}function s(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function a(l,u,h){h!==0&&(t.drawArraysInstanced(i,l,u,h),n.update(u,i,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];n.update(p,i,1)}function c(l,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)a(l[_],u[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let _=0;for(let S=0;S<h;S++)_+=u[S]*d[S];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function b3(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Yn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const N=C===Fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==On&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ai&&!N)}function c(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp";const u=c(l);u!==l&&(He("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),A=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),T=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),R=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:E,maxSamples:w,samples:R}}function A3(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new _r,o=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=u(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,S=h.clipIntersection,m=h.clipShadows,f=t.get(h);if(!r||_===null||_.length===0||s&&!m)s?u(null):l();else{const A=s?0:i,T=A*4;let E=f.clippingState||null;c.value=E,E=u(_,d,T,p);for(let w=0;w!==T;++w)E[w]=n[w];f.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,_){const S=h!==null?h.length:0;let m=null;if(S!==0){if(m=c.value,_!==!0||m===null){const f=p+S*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<f)&&(m=new Float32Array(f));for(let T=0,E=p;T!==S;++T,E+=4)a.copy(h[T]).applyMatrix4(A,o),a.normal.toArray(m,E),m[E+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function w3(t){let e=new WeakMap;function n(a,o){return o===wl?a.mapping=Rr:o===Rl&&(a.mapping=ps),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===wl||o===Rl)if(e.has(a)){const c=e.get(a).texture;return n(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new w0(c.height);return l.fromEquirectangularTexture(t,a),e.set(a,l),a.addEventListener("dispose",r),n(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Zi=4,Ld=[.125,.215,.35,.446,.526,.582],xr=20,R3=256,Bs=new k0,Dd=new et;let Hc=null,Wc=0,Xc=0,qc=!1;const C3=new U;class Id{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=C3}=s;Hc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Hc,Wc,Xc),this._renderer.xr.enabled=qc,e.scissorTest=!1,Kr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Rr||e.mapping===ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:Fi,format:Yn,colorSpace:gs,depthBuffer:!1},r=Ud(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ud(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=P3(s)),this._blurMaterial=D3(s,e,n),this._ggxMaterial=L3(s,e,n)}return r}_compileMaterial(e){const n=new hn(new Gn,e);this._renderer.compile(n,Bs)}_sceneToCubeUV(e,n,i,r,s){const c=new Fn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Dd),h.toneMapping=ci,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new hn(new Cs,new M0({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let f=!1;const A=e.background;A?A.isColor&&(m.color.copy(A),e.background=null,f=!0):(m.color.copy(Dd),f=!0);for(let T=0;T<6;T++){const E=T%3;E===0?(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[T],s.y,s.z)):E===1?(c.up.set(0,0,l[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[T],s.z)):(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[T]));const w=this._cubeSize;Kr(r,E*w,T>2?w:0,w,w),h.setRenderTarget(r),f&&h.render(S,c),h.render(e,c)}h.toneMapping=p,h.autoClear=d,e.background=A}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Rr||e.mapping===ps;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nd());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Kr(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,Bs)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=0+l*1.25,p=h*d,{_lodMax:_}=this,S=this._sizeLods[i],m=3*S*(i>_-Zi?i-_+Zi:0),f=4*(this._cubeSize-S);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=_-n,Kr(s,m,f,3*S,2*S),r.setRenderTarget(s),r.render(o,Bs),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=_-i,Kr(e,m,f,3*S,2*S),r.setRenderTarget(e),r.render(o,Bs)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&nt("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=l;const d=l.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*xr-1),S=s/_,m=isFinite(s)?1+Math.floor(u*S):xr;m>xr&&He(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xr}`);const f=[];let A=0;for(let C=0;C<xr;++C){const N=C/S,v=Math.exp(-N*N/2);f.push(v),C===0?A+=v:C<m&&(A+=2*v)}for(let C=0;C<f.length;C++)f[C]=f[C]/A;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=_,d.mipInt.value=T-i;const E=this._sizeLods[r],w=3*E*(r>T-Zi?r-T+Zi:0),R=4*(this._cubeSize-E);Kr(n,w,R,3*E,2*E),c.setRenderTarget(n),c.render(h,Bs)}}function P3(t){const e=[],n=[],i=[];let r=t;const s=t-Zi+1+Ld.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>t-Zi?c=Ld[a-t+Zi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,S=3,m=2,f=1,A=new Float32Array(S*_*p),T=new Float32Array(m*_*p),E=new Float32Array(f*_*p);for(let R=0;R<p;R++){const C=R%3*2/3-1,N=R>2?0:-1,v=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];A.set(v,S*_*R),T.set(d,m*_*R);const M=[R,R,R,R,R,R];E.set(M,f*_*R)}const w=new Gn;w.setAttribute("position",new ui(A,S)),w.setAttribute("uv",new ui(T,m)),w.setAttribute("faceIndex",new ui(E,f)),i.push(new hn(w,null)),r>Zi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Ud(t,e,n){const i=new li(t,e,n);return i.texture.mapping=Jo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Kr(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function L3(t,e,n){return new mi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:R3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function D3(t,e,n){const i=new Float32Array(xr),r=new U(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Nd(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Fd(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Qo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function I3(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===wl||c===Rl,u=c===Rr||c===ps;if(l||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return n===null&&(n=new Id(t)),h=l?n.fromEquirectangular(o,h):n.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return l&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Id(t)),h=l?n.fromEquirectangular(o):n.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function U3(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ca("WebGLRenderer: "+i+" extension not supported."),r}}}function N3(t,e,n,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function c(h){const d=h.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function l(h){const d=[],p=h.index,_=h.attributes.position;let S=0;if(p!==null){const A=p.array;S=p.version;for(let T=0,E=A.length;T<E;T+=3){const w=A[T+0],R=A[T+1],C=A[T+2];d.push(w,R,R,C,C,w)}}else if(_!==void 0){const A=_.array;S=_.version;for(let T=0,E=A.length/3-1;T<E;T+=3){const w=T+0,R=T+1,C=T+2;d.push(w,R,R,C,C,w)}}else return;const m=new(_0(d)?E0:y0)(d,1);m.version=S;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function F3(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,p){t.drawElements(i,p,s,d*a),n.update(p,i,1)}function l(d,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,d*a,_),n.update(p,i,_))}function u(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];n.update(m,i,1)}function h(d,p,_,S){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/a,p[f],S[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,S,0,_);let f=0;for(let A=0;A<_;A++)f+=p[A]*S[A];n.update(f,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function O3(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:nt("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function B3(t,e,n){const i=new WeakMap,r=new Ut;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let M=function(){N.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let E=0;_===!0&&(E=1),S===!0&&(E=2),m===!0&&(E=3);let w=o.attributes.position.count*E,R=1;w>e.maxTextureSize&&(R=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const C=new Float32Array(w*R*4*h),N=new v0(C,w,R,h);N.type=ai,N.needsUpdate=!0;const v=E*4;for(let P=0;P<h;P++){const k=f[P],O=A[P],q=T[P],G=w*R*4*P;for(let H=0;H<k.count;H++){const B=H*v;_===!0&&(r.fromBufferAttribute(k,H),C[G+B+0]=r.x,C[G+B+1]=r.y,C[G+B+2]=r.z,C[G+B+3]=0),S===!0&&(r.fromBufferAttribute(O,H),C[G+B+4]=r.x,C[G+B+5]=r.y,C[G+B+6]=r.z,C[G+B+7]=0),m===!0&&(r.fromBufferAttribute(q,H),C[G+B+8]=r.x,C[G+B+9]=r.y,C[G+B+10]=r.z,C[G+B+11]=q.itemSize===4?r.w:1)}}d={count:h,texture:N,size:new pe(w,R)},i.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const S=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(t,"morphTargetBaseInfluence",S),c.getUniforms().setValue(t,"morphTargetInfluences",l)}c.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function k3(t,e,n,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:s,dispose:a}}const z3={[t0]:"LINEAR_TONE_MAPPING",[n0]:"REINHARD_TONE_MAPPING",[i0]:"CINEON_TONE_MAPPING",[r0]:"ACES_FILMIC_TONE_MAPPING",[a0]:"AGX_TONE_MAPPING",[o0]:"NEUTRAL_TONE_MAPPING",[s0]:"CUSTOM_TONE_MAPPING"};function V3(t,e,n,i,r){const s=new li(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),a=new li(e,n,{type:Fi,depthBuffer:!1,stencilBuffer:!1}),o=new Gn;o.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Kt([0,2,0,0,2,0],2));const c=new Uv({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new hn(o,c),u=new k0(-1,1,1,-1,0,1);let h=null,d=null,p=!1,_,S=null,m=[],f=!1;this.setSize=function(A,T){s.setSize(A,T),a.setSize(A,T);for(let E=0;E<m.length;E++){const w=m[E];w.setSize&&w.setSize(A,T)}},this.setEffects=function(A){m=A,f=m.length>0&&m[0].isRenderPass===!0;const T=s.width,E=s.height;for(let w=0;w<m.length;w++){const R=m[w];R.setSize&&R.setSize(T,E)}},this.begin=function(A,T){if(p||A.toneMapping===ci&&m.length===0)return!1;if(S=T,T!==null){const E=T.width,w=T.height;(s.width!==E||s.height!==w)&&this.setSize(E,w)}return f===!1&&A.setRenderTarget(s),_=A.toneMapping,A.toneMapping=ci,!0},this.hasRenderPass=function(){return f},this.end=function(A,T){A.toneMapping=_,p=!0;let E=s,w=a;for(let R=0;R<m.length;R++){const C=m[R];if(C.enabled!==!1&&(C.render(A,w,E,T),C.needsSwap!==!1)){const N=E;E=w,w=N}}if(h!==A.outputColorSpace||d!==A.toneMapping){h=A.outputColorSpace,d=A.toneMapping,c.defines={},it.getTransfer(h)===ht&&(c.defines.SRGB_TRANSFER="");const R=z3[d];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,A.setRenderTarget(S),A.render(l,u),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),c.dispose()}}const V0=new nn,fu=new ua(1,1),G0=new v0,H0=new C1,W0=new A0,Od=[],Bd=[],kd=new Float32Array(16),zd=new Float32Array(9),Vd=new Float32Array(4);function Ps(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Od[r];if(s===void 0&&(s=new Float32Array(r),Od[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Gt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ht(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ec(t,e){let n=Bd[e];n===void 0&&(n=new Int32Array(e),Bd[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function G3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function H3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2fv(this.addr,e),Ht(n,e)}}function W3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Gt(n,e))return;t.uniform3fv(this.addr,e),Ht(n,e)}}function X3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4fv(this.addr,e),Ht(n,e)}}function q3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ht(n,e)}else{if(Gt(n,i))return;Vd.set(i),t.uniformMatrix2fv(this.addr,!1,Vd),Ht(n,i)}}function Y3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ht(n,e)}else{if(Gt(n,i))return;zd.set(i),t.uniformMatrix3fv(this.addr,!1,zd),Ht(n,i)}}function K3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ht(n,e)}else{if(Gt(n,i))return;kd.set(i),t.uniformMatrix4fv(this.addr,!1,kd),Ht(n,i)}}function j3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Z3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2iv(this.addr,e),Ht(n,e)}}function J3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Gt(n,e))return;t.uniform3iv(this.addr,e),Ht(n,e)}}function $3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4iv(this.addr,e),Ht(n,e)}}function Q3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function eS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2uiv(this.addr,e),Ht(n,e)}}function tS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Gt(n,e))return;t.uniform3uiv(this.addr,e),Ht(n,e)}}function nS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4uiv(this.addr,e),Ht(n,e)}}function iS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(fu.compareFunction=n.isReversedDepthBuffer()?Eh:yh,s=fu):s=V0,n.setTexture2D(e||s,r)}function rS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||H0,r)}function sS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||W0,r)}function aS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||G0,r)}function oS(t){switch(t){case 5126:return G3;case 35664:return H3;case 35665:return W3;case 35666:return X3;case 35674:return q3;case 35675:return Y3;case 35676:return K3;case 5124:case 35670:return j3;case 35667:case 35671:return Z3;case 35668:case 35672:return J3;case 35669:case 35673:return $3;case 5125:return Q3;case 36294:return eS;case 36295:return tS;case 36296:return nS;case 35678:case 36198:case 36298:case 36306:case 35682:return iS;case 35679:case 36299:case 36307:return rS;case 35680:case 36300:case 36308:case 36293:return sS;case 36289:case 36303:case 36311:case 36292:return aS}}function cS(t,e){t.uniform1fv(this.addr,e)}function lS(t,e){const n=Ps(e,this.size,2);t.uniform2fv(this.addr,n)}function uS(t,e){const n=Ps(e,this.size,3);t.uniform3fv(this.addr,n)}function hS(t,e){const n=Ps(e,this.size,4);t.uniform4fv(this.addr,n)}function fS(t,e){const n=Ps(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function dS(t,e){const n=Ps(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function pS(t,e){const n=Ps(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function mS(t,e){t.uniform1iv(this.addr,e)}function gS(t,e){t.uniform2iv(this.addr,e)}function _S(t,e){t.uniform3iv(this.addr,e)}function vS(t,e){t.uniform4iv(this.addr,e)}function xS(t,e){t.uniform1uiv(this.addr,e)}function SS(t,e){t.uniform2uiv(this.addr,e)}function MS(t,e){t.uniform3uiv(this.addr,e)}function yS(t,e){t.uniform4uiv(this.addr,e)}function ES(t,e,n){const i=this.cache,r=e.length,s=ec(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=fu:a=V0;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function TS(t,e,n){const i=this.cache,r=e.length,s=ec(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||H0,s[a])}function bS(t,e,n){const i=this.cache,r=e.length,s=ec(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||W0,s[a])}function AS(t,e,n){const i=this.cache,r=e.length,s=ec(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||G0,s[a])}function wS(t){switch(t){case 5126:return cS;case 35664:return lS;case 35665:return uS;case 35666:return hS;case 35674:return fS;case 35675:return dS;case 35676:return pS;case 5124:case 35670:return mS;case 35667:case 35671:return gS;case 35668:case 35672:return _S;case 35669:case 35673:return vS;case 5125:return xS;case 36294:return SS;case 36295:return MS;case 36296:return yS;case 35678:case 36198:case 36298:case 36306:case 35682:return ES;case 35679:case 36299:case 36307:return TS;case 35680:case 36300:case 36308:case 36293:return bS;case 36289:case 36303:case 36311:case 36292:return AS}}class RS{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=oS(n.type)}}class CS{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=wS(n.type)}}class PS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Yc=/(\w+)(\])?(\[|\.)?/g;function Gd(t,e){t.seq.push(e),t.map[e.id]=e}function LS(t,e,n){const i=t.name,r=i.length;for(Yc.lastIndex=0;;){const s=Yc.exec(i),a=Yc.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Gd(n,l===void 0?new RS(o,t,e):new CS(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new PS(o),Gd(n,h)),n=h}}}class co{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),c=e.getUniformLocation(n,o.name);LS(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Hd(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const DS=37297;let IS=0;function US(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Wd=new Ye;function NS(t){it._getMatrix(Wd,it.workingColorSpace,t);const e=`mat3( ${Wd.elements.map(n=>n.toFixed(4))} )`;switch(it.getTransfer(t)){case go:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Xd(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+US(t.getShaderSource(e),o)}else return s}function FS(t,e){const n=NS(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const OS={[t0]:"Linear",[n0]:"Reinhard",[i0]:"Cineon",[r0]:"ACESFilmic",[a0]:"AgX",[o0]:"Neutral",[s0]:"Custom"};function BS(t,e){const n=OS[e];return n===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ja=new U;function kS(){it.getLuminanceCoefficients(ja);const t=ja.x.toFixed(4),e=ja.y.toFixed(4),n=ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zS(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qs).join(`
`)}function VS(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function GS(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function qs(t){return t!==""}function qd(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yd(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HS=/^[ \t]*#include +<([\w\d./]+)>/gm;function du(t){return t.replace(HS,XS)}const WS=new Map;function XS(t,e){let n=Ke[e];if(n===void 0){const i=WS.get(e);if(i!==void 0)n=Ke[i],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return du(n)}const qS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kd(t){return t.replace(qS,YS)}function YS(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function jd(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const KS={[io]:"SHADOWMAP_TYPE_PCF",[Hs]:"SHADOWMAP_TYPE_VSM"};function jS(t){return KS[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ZS={[Rr]:"ENVMAP_TYPE_CUBE",[ps]:"ENVMAP_TYPE_CUBE",[Jo]:"ENVMAP_TYPE_CUBE_UV"};function JS(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":ZS[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const $S={[ps]:"ENVMAP_MODE_REFRACTION"};function QS(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":$S[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const eM={[e0]:"ENVMAP_BLENDING_MULTIPLY",[K_]:"ENVMAP_BLENDING_MIX",[j_]:"ENVMAP_BLENDING_ADD"};function tM(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":eM[t.combine]||"ENVMAP_BLENDING_NONE"}function nM(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function iM(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=jS(n),l=JS(n),u=QS(n),h=tM(n),d=nM(n),p=zS(n),_=VS(s),S=r.createProgram();let m,f,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(qs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(qs).join(`
`),f.length>0&&(f+=`
`)):(m=[jd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),f=[jd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ci?"#define TONE_MAPPING":"",n.toneMapping!==ci?Ke.tonemapping_pars_fragment:"",n.toneMapping!==ci?BS("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,FS("linearToOutputTexel",n.outputColorSpace),kS(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(qs).join(`
`)),a=du(a),a=qd(a,n),a=Yd(a,n),o=du(o),o=qd(o,n),o=Yd(o,n),a=Kd(a),o=Kd(o),n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===rd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===rd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const T=A+m+a,E=A+f+o,w=Hd(r,r.VERTEX_SHADER,T),R=Hd(r,r.FRAGMENT_SHADER,E);r.attachShader(S,w),r.attachShader(S,R),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function C(P){if(t.debug.checkShaderErrors){const k=r.getProgramInfoLog(S)||"",O=r.getShaderInfoLog(w)||"",q=r.getShaderInfoLog(R)||"",G=k.trim(),H=O.trim(),B=q.trim();let $=!0,fe=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,w,R);else{const ae=Xd(r,w,"vertex"),le=Xd(r,R,"fragment");nt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+ae+`
`+le)}else G!==""?He("WebGLProgram: Program Info Log:",G):(H===""||B==="")&&(fe=!1);fe&&(P.diagnostics={runnable:$,programLog:G,vertexShader:{log:H,prefix:m},fragmentShader:{log:B,prefix:f}})}r.deleteShader(w),r.deleteShader(R),N=new co(r,S),v=GS(r,S)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let v;this.getAttributes=function(){return v===void 0&&C(this),v};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(S,DS)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=IS++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=w,this.fragmentShader=R,this}let rM=0;class sM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new aM(e),n.set(e,i)),i}}class aM{constructor(e){this.id=rM++,this.code=e,this.usedTimes=0}}function oM(t,e,n,i,r,s,a){const o=new x0,c=new sM,l=new Set,u=[],h=new Map,d=r.logarithmicDepthBuffer;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,M,P,k,O){const q=k.fog,G=O.geometry,H=v.isMeshStandardMaterial?k.environment:null,B=(v.isMeshStandardMaterial?n:e).get(v.envMap||H),$=B&&B.mapping===Jo?B.image.height:null,fe=_[v.type];v.precision!==null&&(p=r.getMaxPrecision(v.precision),p!==v.precision&&He("WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const ae=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,le=ae!==void 0?ae.length:0;let Xe=0;G.morphAttributes.position!==void 0&&(Xe=1),G.morphAttributes.normal!==void 0&&(Xe=2),G.morphAttributes.color!==void 0&&(Xe=3);let Ge,ft,dt,Y;if(fe){const lt=ri[fe];Ge=lt.vertexShader,ft=lt.fragmentShader}else Ge=v.vertexShader,ft=v.fragmentShader,c.update(v),dt=c.getVertexShaderID(v),Y=c.getFragmentShaderID(v);const Q=t.getRenderTarget(),Se=t.state.buffers.depth.getReversed(),Be=O.isInstancedMesh===!0,Ee=O.isBatchedMesh===!0,tt=!!v.map,pt=!!v.matcap,qe=!!B,Z=!!v.aoMap,te=!!v.lightMap,J=!!v.bumpMap,me=!!v.normalMap,b=!!v.displacementMap,Ne=!!v.emissiveMap,ve=!!v.metalnessMap,ke=!!v.roughnessMap,re=v.anisotropy>0,y=v.clearcoat>0,g=v.dispersion>0,D=v.iridescence>0,W=v.sheen>0,K=v.transmission>0,X=re&&!!v.anisotropyMap,we=y&&!!v.clearcoatMap,se=y&&!!v.clearcoatNormalMap,be=y&&!!v.clearcoatRoughnessMap,ze=D&&!!v.iridescenceMap,ee=D&&!!v.iridescenceThicknessMap,ue=W&&!!v.sheenColorMap,Ae=W&&!!v.sheenRoughnessMap,Ce=!!v.specularMap,ce=!!v.specularColorMap,je=!!v.specularIntensityMap,L=K&&!!v.transmissionMap,_e=K&&!!v.thicknessMap,ie=!!v.gradientMap,xe=!!v.alphaMap,ne=v.alphaTest>0,j=!!v.alphaHash,oe=!!v.extensions;let We=ci;v.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(We=t.toneMapping);const vt={shaderID:fe,shaderType:v.type,shaderName:v.name,vertexShader:Ge,fragmentShader:ft,defines:v.defines,customVertexShaderID:dt,customFragmentShaderID:Y,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Ee,batchingColor:Ee&&O._colorsTexture!==null,instancing:Be,instancingColor:Be&&O.instanceColor!==null,instancingMorph:Be&&O.morphTexture!==null,outputColorSpace:Q===null?t.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:gs,alphaToCoverage:!!v.alphaToCoverage,map:tt,matcap:pt,envMap:qe,envMapMode:qe&&B.mapping,envMapCubeUVHeight:$,aoMap:Z,lightMap:te,bumpMap:J,normalMap:me,displacementMap:b,emissiveMap:Ne,normalMapObjectSpace:me&&v.normalMapType===$_,normalMapTangentSpace:me&&v.normalMapType===g0,metalnessMap:ve,roughnessMap:ke,anisotropy:re,anisotropyMap:X,clearcoat:y,clearcoatMap:we,clearcoatNormalMap:se,clearcoatRoughnessMap:be,dispersion:g,iridescence:D,iridescenceMap:ze,iridescenceThicknessMap:ee,sheen:W,sheenColorMap:ue,sheenRoughnessMap:Ae,specularMap:Ce,specularColorMap:ce,specularIntensityMap:je,transmission:K,transmissionMap:L,thicknessMap:_e,gradientMap:ie,opaque:v.transparent===!1&&v.blending===es&&v.alphaToCoverage===!1,alphaMap:xe,alphaTest:ne,alphaHash:j,combine:v.combine,mapUv:tt&&S(v.map.channel),aoMapUv:Z&&S(v.aoMap.channel),lightMapUv:te&&S(v.lightMap.channel),bumpMapUv:J&&S(v.bumpMap.channel),normalMapUv:me&&S(v.normalMap.channel),displacementMapUv:b&&S(v.displacementMap.channel),emissiveMapUv:Ne&&S(v.emissiveMap.channel),metalnessMapUv:ve&&S(v.metalnessMap.channel),roughnessMapUv:ke&&S(v.roughnessMap.channel),anisotropyMapUv:X&&S(v.anisotropyMap.channel),clearcoatMapUv:we&&S(v.clearcoatMap.channel),clearcoatNormalMapUv:se&&S(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&S(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&S(v.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&S(v.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&S(v.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&S(v.sheenRoughnessMap.channel),specularMapUv:Ce&&S(v.specularMap.channel),specularColorMapUv:ce&&S(v.specularColorMap.channel),specularIntensityMapUv:je&&S(v.specularIntensityMap.channel),transmissionMapUv:L&&S(v.transmissionMap.channel),thicknessMapUv:_e&&S(v.thicknessMap.channel),alphaMapUv:xe&&S(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(me||re),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!G.attributes.uv&&(tt||xe),fog:!!q,useFog:v.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Se,skinning:O.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Xe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:We,decodeVideoTexture:tt&&v.map.isVideoTexture===!0&&it.getTransfer(v.map.colorSpace)===ht,decodeVideoTextureEmissive:Ne&&v.emissiveMap.isVideoTexture===!0&&it.getTransfer(v.emissiveMap.colorSpace)===ht,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===si,flipSided:v.side===dn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:oe&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&v.extensions.multiDraw===!0||Ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return vt.vertexUv1s=l.has(1),vt.vertexUv2s=l.has(2),vt.vertexUv3s=l.has(3),l.clear(),vt}function f(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)M.push(P),M.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(A(M,v),T(M,v),M.push(t.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function A(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function T(v,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),v.push(o.mask)}function E(v){const M=_[v.type];let P;if(M){const k=ri[M];P=H1.clone(k.uniforms)}else P=v.uniforms;return P}function w(v,M){let P=h.get(M);return P!==void 0?++P.usedTimes:(P=new iM(t,M,v,s),u.push(P),h.set(M,P)),P}function R(v){if(--v.usedTimes===0){const M=u.indexOf(v);u[M]=u[u.length-1],u.pop(),h.delete(v.cacheKey),v.destroy()}}function C(v){c.remove(v)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:E,acquireProgram:w,releaseProgram:R,releaseShaderCache:C,programs:u,dispose:N}}function cM(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,c){t.get(a)[o]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function lM(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Zd(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Jd(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h,d,p,_,S,m){let f=t[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:_,renderOrder:h.renderOrder,z:S,group:m},t[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=S,f.group=m),e++,f}function o(h,d,p,_,S,m){const f=a(h,d,p,_,S,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function c(h,d,p,_,S,m){const f=a(h,d,p,_,S,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function l(h,d){n.length>1&&n.sort(h||lM),i.length>1&&i.sort(d||Zd),r.length>1&&r.sort(d||Zd)}function u(){for(let h=e,d=t.length;h<d;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function uM(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Jd,t.set(i,[a])):r>=s.length?(a=new Jd,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function hM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new et};break;case"SpotLight":n={position:new U,direction:new U,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function fM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let dM=0;function pM(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function mM(t){const e=new hM,n=fM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);const r=new U,s=new Nt,a=new Nt;function o(l){let u=0,h=0,d=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let p=0,_=0,S=0,m=0,f=0,A=0,T=0,E=0,w=0,R=0,C=0;l.sort(pM);for(let v=0,M=l.length;v<M;v++){const P=l[v],k=P.color,O=P.intensity,q=P.distance;let G=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ms?G=P.shadow.map.texture:G=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=k.r*O,h+=k.g*O,d+=k.b*O;else if(P.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(P.sh.coefficients[H],O);C++}else if(P.isDirectionalLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const B=P.shadow,$=n.get(P);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,i.directionalShadow[p]=$,i.directionalShadowMap[p]=G,i.directionalShadowMatrix[p]=P.shadow.matrix,A++}i.directional[p]=H,p++}else if(P.isSpotLight){const H=e.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(k).multiplyScalar(O),H.distance=q,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,i.spot[S]=H;const B=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,B.updateMatrices(P),P.castShadow&&R++),i.spotLightMatrix[S]=B.matrix,P.castShadow){const $=n.get(P);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,i.spotShadow[S]=$,i.spotShadowMap[S]=G,E++}S++}else if(P.isRectAreaLight){const H=e.get(P);H.color.copy(k).multiplyScalar(O),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=H,m++}else if(P.isPointLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const B=P.shadow,$=n.get(P);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,$.shadowCameraNear=B.camera.near,$.shadowCameraFar=B.camera.far,i.pointShadow[_]=$,i.pointShadowMap[_]=G,i.pointShadowMatrix[_]=P.shadow.matrix,T++}i.point[_]=H,_++}else if(P.isHemisphereLight){const H=e.get(P);H.skyColor.copy(P.color).multiplyScalar(O),H.groundColor.copy(P.groundColor).multiplyScalar(O),i.hemi[f]=H,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const N=i.hash;(N.directionalLength!==p||N.pointLength!==_||N.spotLength!==S||N.rectAreaLength!==m||N.hemiLength!==f||N.numDirectionalShadows!==A||N.numPointShadows!==T||N.numSpotShadows!==E||N.numSpotMaps!==w||N.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=m,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=E+w-R,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,N.directionalLength=p,N.pointLength=_,N.spotLength=S,N.rectAreaLength=m,N.hemiLength=f,N.numDirectionalShadows=A,N.numPointShadows=T,N.numSpotShadows=E,N.numSpotMaps=w,N.numLightProbes=C,i.version=dM++)}function c(l,u){let h=0,d=0,p=0,_=0,S=0;const m=u.matrixWorldInverse;for(let f=0,A=l.length;f<A;f++){const T=l[f];if(T.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),h++}else if(T.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),a.identity(),s.copy(T.matrixWorld),s.premultiply(m),a.extractRotation(s),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const E=i.hemi[S];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(m),S++}}}return{setup:o,setupView:c,state:i}}function $d(t){const e=new mM(t),n=[],i=[];function r(u){l.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function o(){e.setup(n)}function c(u){e.setupView(n,u)}const l={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function gM(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new $d(t),e.set(r,[o])):s>=a.length?(o=new $d(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const _M=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,xM=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],SM=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Qd=new Nt,ks=new U,Kc=new U;function MM(t,e,n){let i=new R0;const r=new pe,s=new pe,a=new Ut,o=new Nv,c=new Fv,l={},u=n.maxTextureSize,h={[ir]:dn,[dn]:ir,[si]:si},d=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:_M,fragmentShader:vM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Gn;_.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new hn(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=io;let f=this.type;this.render=function(R,C,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;R.type===C_&&(He("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),R.type=io);const v=t.getRenderTarget(),M=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),k=t.state;k.setBlending(Di),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const O=f!==this.type;O&&C.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(G=>G.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,G=R.length;q<G;q++){const H=R[q],B=H.shadow;if(B===void 0){He("WebGLShadowMap:",H,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const $=B.getFrameExtents();if(r.multiply($),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/$.x),r.x=s.x*$.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/$.y),r.y=s.y*$.y,B.mapSize.y=s.y)),B.map===null||O===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Hs){if(H.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new li(r.x,r.y,{format:ms,type:Fi,minFilter:$t,magFilter:$t,generateMipmaps:!1}),B.map.texture.name=H.name+".shadowMap",B.map.depthTexture=new ua(r.x,r.y,ai),B.map.depthTexture.name=H.name+".shadowMapDepth",B.map.depthTexture.format=Oi,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Yt,B.map.depthTexture.magFilter=Yt}else{H.isPointLight?(B.map=new w0(r.x),B.map.depthTexture=new Q1(r.x,di)):(B.map=new li(r.x,r.y),B.map.depthTexture=new ua(r.x,r.y,di)),B.map.depthTexture.name=H.name+".shadowMap",B.map.depthTexture.format=Oi;const ae=t.state.buffers.depth.getReversed();this.type===io?(B.map.depthTexture.compareFunction=ae?Eh:yh,B.map.depthTexture.minFilter=$t,B.map.depthTexture.magFilter=$t):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Yt,B.map.depthTexture.magFilter=Yt)}B.camera.updateProjectionMatrix()}const fe=B.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<fe;ae++){if(B.map.isWebGLCubeRenderTarget)t.setRenderTarget(B.map,ae),t.clear();else{ae===0&&(t.setRenderTarget(B.map),t.clear());const le=B.getViewport(ae);a.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),k.viewport(a)}if(H.isPointLight){const le=B.camera,Xe=B.matrix,Ge=H.distance||le.far;Ge!==le.far&&(le.far=Ge,le.updateProjectionMatrix()),ks.setFromMatrixPosition(H.matrixWorld),le.position.copy(ks),Kc.copy(le.position),Kc.add(xM[ae]),le.up.copy(SM[ae]),le.lookAt(Kc),le.updateMatrixWorld(),Xe.makeTranslation(-ks.x,-ks.y,-ks.z),Qd.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Qd,le.coordinateSystem,le.reversedDepth)}else B.updateMatrices(H);i=B.getFrustum(),E(C,N,B.camera,H,this.type)}B.isPointLightShadow!==!0&&this.type===Hs&&A(B,N),B.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(v,M,P)};function A(R,C){const N=e.update(S);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new li(r.x,r.y,{format:ms,type:Fi})),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(C,null,N,d,S,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(C,null,N,p,S,null)}function T(R,C,N,v){let M=null;const P=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)M=P;else if(M=N.isPointLight===!0?c:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const k=M.uuid,O=C.uuid;let q=l[k];q===void 0&&(q={},l[k]=q);let G=q[O];G===void 0&&(G=M.clone(),q[O]=G,C.addEventListener("dispose",w)),M=G}if(M.visible=C.visible,M.wireframe=C.wireframe,v===Hs?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:h[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=t.properties.get(M);k.light=N}return M}function E(R,C,N,v,M){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Hs)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);const O=e.update(R),q=R.material;if(Array.isArray(q)){const G=O.groups;for(let H=0,B=G.length;H<B;H++){const $=G[H],fe=q[$.materialIndex];if(fe&&fe.visible){const ae=T(R,fe,v,M);R.onBeforeShadow(t,R,C,N,O,ae,$),t.renderBufferDirect(N,null,O,ae,R,$),R.onAfterShadow(t,R,C,N,O,ae,$)}}}else if(q.visible){const G=T(R,q,v,M);R.onBeforeShadow(t,R,C,N,O,G,null),t.renderBufferDirect(N,null,O,G,R,null),R.onAfterShadow(t,R,C,N,O,G,null)}}const k=R.children;for(let O=0,q=k.length;O<q;O++)E(k[O],C,N,v,M)}function w(R){R.target.removeEventListener("dispose",w);for(const N in l){const v=l[N],M=R.target.uuid;M in v&&(v[M].dispose(),delete v[M])}}}const yM={[Sl]:Ml,[yl]:bl,[El]:Al,[ds]:Tl,[Ml]:Sl,[bl]:yl,[Al]:El,[Tl]:ds};function EM(t,e){function n(){let L=!1;const _e=new Ut;let ie=null;const xe=new Ut(0,0,0,0);return{setMask:function(ne){ie!==ne&&!L&&(t.colorMask(ne,ne,ne,ne),ie=ne)},setLocked:function(ne){L=ne},setClear:function(ne,j,oe,We,vt){vt===!0&&(ne*=We,j*=We,oe*=We),_e.set(ne,j,oe,We),xe.equals(_e)===!1&&(t.clearColor(ne,j,oe,We),xe.copy(_e))},reset:function(){L=!1,ie=null,xe.set(-1,0,0,0)}}}function i(){let L=!1,_e=!1,ie=null,xe=null,ne=null;return{setReversed:function(j){if(_e!==j){const oe=e.get("EXT_clip_control");j?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT),_e=j;const We=ne;ne=null,this.setClear(We)}},getReversed:function(){return _e},setTest:function(j){j?Q(t.DEPTH_TEST):Se(t.DEPTH_TEST)},setMask:function(j){ie!==j&&!L&&(t.depthMask(j),ie=j)},setFunc:function(j){if(_e&&(j=yM[j]),xe!==j){switch(j){case Sl:t.depthFunc(t.NEVER);break;case Ml:t.depthFunc(t.ALWAYS);break;case yl:t.depthFunc(t.LESS);break;case ds:t.depthFunc(t.LEQUAL);break;case El:t.depthFunc(t.EQUAL);break;case Tl:t.depthFunc(t.GEQUAL);break;case bl:t.depthFunc(t.GREATER);break;case Al:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}xe=j}},setLocked:function(j){L=j},setClear:function(j){ne!==j&&(_e&&(j=1-j),t.clearDepth(j),ne=j)},reset:function(){L=!1,ie=null,xe=null,ne=null,_e=!1}}}function r(){let L=!1,_e=null,ie=null,xe=null,ne=null,j=null,oe=null,We=null,vt=null;return{setTest:function(lt){L||(lt?Q(t.STENCIL_TEST):Se(t.STENCIL_TEST))},setMask:function(lt){_e!==lt&&!L&&(t.stencilMask(lt),_e=lt)},setFunc:function(lt,$n,vi){(ie!==lt||xe!==$n||ne!==vi)&&(t.stencilFunc(lt,$n,vi),ie=lt,xe=$n,ne=vi)},setOp:function(lt,$n,vi){(j!==lt||oe!==$n||We!==vi)&&(t.stencilOp(lt,$n,vi),j=lt,oe=$n,We=vi)},setLocked:function(lt){L=lt},setClear:function(lt){vt!==lt&&(t.clearStencil(lt),vt=lt)},reset:function(){L=!1,_e=null,ie=null,xe=null,ne=null,j=null,oe=null,We=null,vt=null}}}const s=new n,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,p=[],_=null,S=!1,m=null,f=null,A=null,T=null,E=null,w=null,R=null,C=new et(0,0,0),N=0,v=!1,M=null,P=null,k=null,O=null,q=null;const G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,B=0;const $=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec($)[1]),H=B>=1):$.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),H=B>=2);let fe=null,ae={};const le=t.getParameter(t.SCISSOR_BOX),Xe=t.getParameter(t.VIEWPORT),Ge=new Ut().fromArray(le),ft=new Ut().fromArray(Xe);function dt(L,_e,ie,xe){const ne=new Uint8Array(4),j=t.createTexture();t.bindTexture(L,j),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let oe=0;oe<ie;oe++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(_e,0,t.RGBA,1,1,xe,0,t.RGBA,t.UNSIGNED_BYTE,ne):t.texImage2D(_e+oe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ne);return j}const Y={};Y[t.TEXTURE_2D]=dt(t.TEXTURE_2D,t.TEXTURE_2D,1),Y[t.TEXTURE_CUBE_MAP]=dt(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[t.TEXTURE_2D_ARRAY]=dt(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Y[t.TEXTURE_3D]=dt(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(t.DEPTH_TEST),a.setFunc(ds),J(!1),me($f),Q(t.CULL_FACE),Z(Di);function Q(L){u[L]!==!0&&(t.enable(L),u[L]=!0)}function Se(L){u[L]!==!1&&(t.disable(L),u[L]=!1)}function Be(L,_e){return h[L]!==_e?(t.bindFramebuffer(L,_e),h[L]=_e,L===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=_e),L===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=_e),!0):!1}function Ee(L,_e){let ie=p,xe=!1;if(L){ie=d.get(_e),ie===void 0&&(ie=[],d.set(_e,ie));const ne=L.textures;if(ie.length!==ne.length||ie[0]!==t.COLOR_ATTACHMENT0){for(let j=0,oe=ne.length;j<oe;j++)ie[j]=t.COLOR_ATTACHMENT0+j;ie.length=ne.length,xe=!0}}else ie[0]!==t.BACK&&(ie[0]=t.BACK,xe=!0);xe&&t.drawBuffers(ie)}function tt(L){return _!==L?(t.useProgram(L),_=L,!0):!1}const pt={[vr]:t.FUNC_ADD,[L_]:t.FUNC_SUBTRACT,[D_]:t.FUNC_REVERSE_SUBTRACT};pt[I_]=t.MIN,pt[U_]=t.MAX;const qe={[N_]:t.ZERO,[F_]:t.ONE,[O_]:t.SRC_COLOR,[vl]:t.SRC_ALPHA,[H_]:t.SRC_ALPHA_SATURATE,[V_]:t.DST_COLOR,[k_]:t.DST_ALPHA,[B_]:t.ONE_MINUS_SRC_COLOR,[xl]:t.ONE_MINUS_SRC_ALPHA,[G_]:t.ONE_MINUS_DST_COLOR,[z_]:t.ONE_MINUS_DST_ALPHA,[W_]:t.CONSTANT_COLOR,[X_]:t.ONE_MINUS_CONSTANT_COLOR,[q_]:t.CONSTANT_ALPHA,[Y_]:t.ONE_MINUS_CONSTANT_ALPHA};function Z(L,_e,ie,xe,ne,j,oe,We,vt,lt){if(L===Di){S===!0&&(Se(t.BLEND),S=!1);return}if(S===!1&&(Q(t.BLEND),S=!0),L!==P_){if(L!==m||lt!==v){if((f!==vr||E!==vr)&&(t.blendEquation(t.FUNC_ADD),f=vr,E=vr),lt)switch(L){case es:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Qf:t.blendFunc(t.ONE,t.ONE);break;case ed:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case td:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:nt("WebGLState: Invalid blending: ",L);break}else switch(L){case es:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Qf:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case ed:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case td:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",L);break}A=null,T=null,w=null,R=null,C.set(0,0,0),N=0,m=L,v=lt}return}ne=ne||_e,j=j||ie,oe=oe||xe,(_e!==f||ne!==E)&&(t.blendEquationSeparate(pt[_e],pt[ne]),f=_e,E=ne),(ie!==A||xe!==T||j!==w||oe!==R)&&(t.blendFuncSeparate(qe[ie],qe[xe],qe[j],qe[oe]),A=ie,T=xe,w=j,R=oe),(We.equals(C)===!1||vt!==N)&&(t.blendColor(We.r,We.g,We.b,vt),C.copy(We),N=vt),m=L,v=!1}function te(L,_e){L.side===si?Se(t.CULL_FACE):Q(t.CULL_FACE);let ie=L.side===dn;_e&&(ie=!ie),J(ie),L.blending===es&&L.transparent===!1?Z(Di):Z(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const xe=L.stencilWrite;o.setTest(xe),xe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ne(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Q(t.SAMPLE_ALPHA_TO_COVERAGE):Se(t.SAMPLE_ALPHA_TO_COVERAGE)}function J(L){M!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),M=L)}function me(L){L!==w_?(Q(t.CULL_FACE),L!==P&&(L===$f?t.cullFace(t.BACK):L===R_?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Se(t.CULL_FACE),P=L}function b(L){L!==k&&(H&&t.lineWidth(L),k=L)}function Ne(L,_e,ie){L?(Q(t.POLYGON_OFFSET_FILL),(O!==_e||q!==ie)&&(t.polygonOffset(_e,ie),O=_e,q=ie)):Se(t.POLYGON_OFFSET_FILL)}function ve(L){L?Q(t.SCISSOR_TEST):Se(t.SCISSOR_TEST)}function ke(L){L===void 0&&(L=t.TEXTURE0+G-1),fe!==L&&(t.activeTexture(L),fe=L)}function re(L,_e,ie){ie===void 0&&(fe===null?ie=t.TEXTURE0+G-1:ie=fe);let xe=ae[ie];xe===void 0&&(xe={type:void 0,texture:void 0},ae[ie]=xe),(xe.type!==L||xe.texture!==_e)&&(fe!==ie&&(t.activeTexture(ie),fe=ie),t.bindTexture(L,_e||Y[L]),xe.type=L,xe.texture=_e)}function y(){const L=ae[fe];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function g(){try{t.compressedTexImage2D(...arguments)}catch(L){nt("WebGLState:",L)}}function D(){try{t.compressedTexImage3D(...arguments)}catch(L){nt("WebGLState:",L)}}function W(){try{t.texSubImage2D(...arguments)}catch(L){nt("WebGLState:",L)}}function K(){try{t.texSubImage3D(...arguments)}catch(L){nt("WebGLState:",L)}}function X(){try{t.compressedTexSubImage2D(...arguments)}catch(L){nt("WebGLState:",L)}}function we(){try{t.compressedTexSubImage3D(...arguments)}catch(L){nt("WebGLState:",L)}}function se(){try{t.texStorage2D(...arguments)}catch(L){nt("WebGLState:",L)}}function be(){try{t.texStorage3D(...arguments)}catch(L){nt("WebGLState:",L)}}function ze(){try{t.texImage2D(...arguments)}catch(L){nt("WebGLState:",L)}}function ee(){try{t.texImage3D(...arguments)}catch(L){nt("WebGLState:",L)}}function ue(L){Ge.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),Ge.copy(L))}function Ae(L){ft.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),ft.copy(L))}function Ce(L,_e){let ie=l.get(_e);ie===void 0&&(ie=new WeakMap,l.set(_e,ie));let xe=ie.get(L);xe===void 0&&(xe=t.getUniformBlockIndex(_e,L.name),ie.set(L,xe))}function ce(L,_e){const xe=l.get(_e).get(L);c.get(_e)!==xe&&(t.uniformBlockBinding(_e,xe,L.__bindingPointIndex),c.set(_e,xe))}function je(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},fe=null,ae={},h={},d=new WeakMap,p=[],_=null,S=!1,m=null,f=null,A=null,T=null,E=null,w=null,R=null,C=new et(0,0,0),N=0,v=!1,M=null,P=null,k=null,O=null,q=null,Ge.set(0,0,t.canvas.width,t.canvas.height),ft.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Q,disable:Se,bindFramebuffer:Be,drawBuffers:Ee,useProgram:tt,setBlending:Z,setMaterial:te,setFlipSided:J,setCullFace:me,setLineWidth:b,setPolygonOffset:Ne,setScissorTest:ve,activeTexture:ke,bindTexture:re,unbindTexture:y,compressedTexImage2D:g,compressedTexImage3D:D,texImage2D:ze,texImage3D:ee,updateUBOMapping:Ce,uniformBlockBinding:ce,texStorage2D:se,texStorage3D:be,texSubImage2D:W,texSubImage3D:K,compressedTexSubImage2D:X,compressedTexSubImage3D:we,scissor:ue,viewport:Ae,reset:je}}function TM(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pe,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,g){return p?new OffscreenCanvas(y,g):vo("canvas")}function S(y,g,D){let W=1;const K=re(y);if((K.width>D||K.height>D)&&(W=D/Math.max(K.width,K.height)),W<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const X=Math.floor(W*K.width),we=Math.floor(W*K.height);h===void 0&&(h=_(X,we));const se=g?_(X,we):h;return se.width=X,se.height=we,se.getContext("2d").drawImage(y,0,0,X,we),He("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+X+"x"+we+")."),se}else return"data"in y&&He("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),y;return y}function m(y){return y.generateMipmaps}function f(y){t.generateMipmap(y)}function A(y){return y.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?t.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function T(y,g,D,W,K=!1){if(y!==null){if(t[y]!==void 0)return t[y];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let X=g;if(g===t.RED&&(D===t.FLOAT&&(X=t.R32F),D===t.HALF_FLOAT&&(X=t.R16F),D===t.UNSIGNED_BYTE&&(X=t.R8)),g===t.RED_INTEGER&&(D===t.UNSIGNED_BYTE&&(X=t.R8UI),D===t.UNSIGNED_SHORT&&(X=t.R16UI),D===t.UNSIGNED_INT&&(X=t.R32UI),D===t.BYTE&&(X=t.R8I),D===t.SHORT&&(X=t.R16I),D===t.INT&&(X=t.R32I)),g===t.RG&&(D===t.FLOAT&&(X=t.RG32F),D===t.HALF_FLOAT&&(X=t.RG16F),D===t.UNSIGNED_BYTE&&(X=t.RG8)),g===t.RG_INTEGER&&(D===t.UNSIGNED_BYTE&&(X=t.RG8UI),D===t.UNSIGNED_SHORT&&(X=t.RG16UI),D===t.UNSIGNED_INT&&(X=t.RG32UI),D===t.BYTE&&(X=t.RG8I),D===t.SHORT&&(X=t.RG16I),D===t.INT&&(X=t.RG32I)),g===t.RGB_INTEGER&&(D===t.UNSIGNED_BYTE&&(X=t.RGB8UI),D===t.UNSIGNED_SHORT&&(X=t.RGB16UI),D===t.UNSIGNED_INT&&(X=t.RGB32UI),D===t.BYTE&&(X=t.RGB8I),D===t.SHORT&&(X=t.RGB16I),D===t.INT&&(X=t.RGB32I)),g===t.RGBA_INTEGER&&(D===t.UNSIGNED_BYTE&&(X=t.RGBA8UI),D===t.UNSIGNED_SHORT&&(X=t.RGBA16UI),D===t.UNSIGNED_INT&&(X=t.RGBA32UI),D===t.BYTE&&(X=t.RGBA8I),D===t.SHORT&&(X=t.RGBA16I),D===t.INT&&(X=t.RGBA32I)),g===t.RGB&&(D===t.UNSIGNED_INT_5_9_9_9_REV&&(X=t.RGB9_E5),D===t.UNSIGNED_INT_10F_11F_11F_REV&&(X=t.R11F_G11F_B10F)),g===t.RGBA){const we=K?go:it.getTransfer(W);D===t.FLOAT&&(X=t.RGBA32F),D===t.HALF_FLOAT&&(X=t.RGBA16F),D===t.UNSIGNED_BYTE&&(X=we===ht?t.SRGB8_ALPHA8:t.RGBA8),D===t.UNSIGNED_SHORT_4_4_4_4&&(X=t.RGBA4),D===t.UNSIGNED_SHORT_5_5_5_1&&(X=t.RGB5_A1)}return(X===t.R16F||X===t.R32F||X===t.RG16F||X===t.RG32F||X===t.RGBA16F||X===t.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function E(y,g){let D;return y?g===null||g===di||g===oa?D=t.DEPTH24_STENCIL8:g===ai?D=t.DEPTH32F_STENCIL8:g===aa&&(D=t.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===di||g===oa?D=t.DEPTH_COMPONENT24:g===ai?D=t.DEPTH_COMPONENT32F:g===aa&&(D=t.DEPTH_COMPONENT16),D}function w(y,g){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==Yt&&y.minFilter!==$t?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function R(y){const g=y.target;g.removeEventListener("dispose",R),N(g),g.isVideoTexture&&u.delete(g)}function C(y){const g=y.target;g.removeEventListener("dispose",C),M(g)}function N(y){const g=i.get(y);if(g.__webglInit===void 0)return;const D=y.source,W=d.get(D);if(W){const K=W[g.__cacheKey];K.usedTimes--,K.usedTimes===0&&v(y),Object.keys(W).length===0&&d.delete(D)}i.remove(y)}function v(y){const g=i.get(y);t.deleteTexture(g.__webglTexture);const D=y.source,W=d.get(D);delete W[g.__cacheKey],a.memory.textures--}function M(y){const g=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(g.__webglFramebuffer[W]))for(let K=0;K<g.__webglFramebuffer[W].length;K++)t.deleteFramebuffer(g.__webglFramebuffer[W][K]);else t.deleteFramebuffer(g.__webglFramebuffer[W]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[W])}else{if(Array.isArray(g.__webglFramebuffer))for(let W=0;W<g.__webglFramebuffer.length;W++)t.deleteFramebuffer(g.__webglFramebuffer[W]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let W=0;W<g.__webglColorRenderbuffer.length;W++)g.__webglColorRenderbuffer[W]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[W]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const D=y.textures;for(let W=0,K=D.length;W<K;W++){const X=i.get(D[W]);X.__webglTexture&&(t.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(D[W])}i.remove(y)}let P=0;function k(){P=0}function O(){const y=P;return y>=r.maxTextures&&He("WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),P+=1,y}function q(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function G(y,g){const D=i.get(y);if(y.isVideoTexture&&ve(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&D.__version!==y.version){const W=y.image;if(W===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(D,y,g);return}}else y.isExternalTexture&&(D.__webglTexture=y.sourceTexture?y.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,D.__webglTexture,t.TEXTURE0+g)}function H(y,g){const D=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&D.__version!==y.version){Y(D,y,g);return}else y.isExternalTexture&&(D.__webglTexture=y.sourceTexture?y.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,D.__webglTexture,t.TEXTURE0+g)}function B(y,g){const D=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&D.__version!==y.version){Y(D,y,g);return}n.bindTexture(t.TEXTURE_3D,D.__webglTexture,t.TEXTURE0+g)}function $(y,g){const D=i.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&D.__version!==y.version){Q(D,y,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+g)}const fe={[Cl]:t.REPEAT,[wi]:t.CLAMP_TO_EDGE,[Pl]:t.MIRRORED_REPEAT},ae={[Yt]:t.NEAREST,[Z_]:t.NEAREST_MIPMAP_NEAREST,[wa]:t.NEAREST_MIPMAP_LINEAR,[$t]:t.LINEAR,[_c]:t.LINEAR_MIPMAP_NEAREST,[yr]:t.LINEAR_MIPMAP_LINEAR},le={[Q_]:t.NEVER,[r1]:t.ALWAYS,[e1]:t.LESS,[yh]:t.LEQUAL,[t1]:t.EQUAL,[Eh]:t.GEQUAL,[n1]:t.GREATER,[i1]:t.NOTEQUAL};function Xe(y,g){if(g.type===ai&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===$t||g.magFilter===_c||g.magFilter===wa||g.magFilter===yr||g.minFilter===$t||g.minFilter===_c||g.minFilter===wa||g.minFilter===yr)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(y,t.TEXTURE_WRAP_S,fe[g.wrapS]),t.texParameteri(y,t.TEXTURE_WRAP_T,fe[g.wrapT]),(y===t.TEXTURE_3D||y===t.TEXTURE_2D_ARRAY)&&t.texParameteri(y,t.TEXTURE_WRAP_R,fe[g.wrapR]),t.texParameteri(y,t.TEXTURE_MAG_FILTER,ae[g.magFilter]),t.texParameteri(y,t.TEXTURE_MIN_FILTER,ae[g.minFilter]),g.compareFunction&&(t.texParameteri(y,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(y,t.TEXTURE_COMPARE_FUNC,le[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Yt||g.minFilter!==wa&&g.minFilter!==yr||g.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");t.texParameterf(y,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Ge(y,g){let D=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",R));const W=g.source;let K=d.get(W);K===void 0&&(K={},d.set(W,K));const X=q(g);if(X!==y.__cacheKey){K[X]===void 0&&(K[X]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,D=!0),K[X].usedTimes++;const we=K[y.__cacheKey];we!==void 0&&(K[y.__cacheKey].usedTimes--,we.usedTimes===0&&v(g)),y.__cacheKey=X,y.__webglTexture=K[X].texture}return D}function ft(y,g,D){return Math.floor(Math.floor(y/D)/g)}function dt(y,g,D,W){const X=y.updateRanges;if(X.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,D,W,g.data);else{X.sort((ee,ue)=>ee.start-ue.start);let we=0;for(let ee=1;ee<X.length;ee++){const ue=X[we],Ae=X[ee],Ce=ue.start+ue.count,ce=ft(Ae.start,g.width,4),je=ft(ue.start,g.width,4);Ae.start<=Ce+1&&ce===je&&ft(Ae.start+Ae.count-1,g.width,4)===ce?ue.count=Math.max(ue.count,Ae.start+Ae.count-ue.start):(++we,X[we]=Ae)}X.length=we+1;const se=t.getParameter(t.UNPACK_ROW_LENGTH),be=t.getParameter(t.UNPACK_SKIP_PIXELS),ze=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let ee=0,ue=X.length;ee<ue;ee++){const Ae=X[ee],Ce=Math.floor(Ae.start/4),ce=Math.ceil(Ae.count/4),je=Ce%g.width,L=Math.floor(Ce/g.width),_e=ce,ie=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,je),t.pixelStorei(t.UNPACK_SKIP_ROWS,L),n.texSubImage2D(t.TEXTURE_2D,0,je,L,_e,ie,D,W,g.data)}y.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,se),t.pixelStorei(t.UNPACK_SKIP_PIXELS,be),t.pixelStorei(t.UNPACK_SKIP_ROWS,ze)}}function Y(y,g,D){let W=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(W=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(W=t.TEXTURE_3D);const K=Ge(y,g),X=g.source;n.bindTexture(W,y.__webglTexture,t.TEXTURE0+D);const we=i.get(X);if(X.version!==we.__version||K===!0){n.activeTexture(t.TEXTURE0+D);const se=it.getPrimaries(it.workingColorSpace),be=g.colorSpace===ji?null:it.getPrimaries(g.colorSpace),ze=g.colorSpace===ji||se===be?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let ee=S(g.image,!1,r.maxTextureSize);ee=ke(g,ee);const ue=s.convert(g.format,g.colorSpace),Ae=s.convert(g.type);let Ce=T(g.internalFormat,ue,Ae,g.colorSpace,g.isVideoTexture);Xe(W,g);let ce;const je=g.mipmaps,L=g.isVideoTexture!==!0,_e=we.__version===void 0||K===!0,ie=X.dataReady,xe=w(g,ee);if(g.isDepthTexture)Ce=E(g.format===Er,g.type),_e&&(L?n.texStorage2D(t.TEXTURE_2D,1,Ce,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,Ce,ee.width,ee.height,0,ue,Ae,null));else if(g.isDataTexture)if(je.length>0){L&&_e&&n.texStorage2D(t.TEXTURE_2D,xe,Ce,je[0].width,je[0].height);for(let ne=0,j=je.length;ne<j;ne++)ce=je[ne],L?ie&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,ce.width,ce.height,ue,Ae,ce.data):n.texImage2D(t.TEXTURE_2D,ne,Ce,ce.width,ce.height,0,ue,Ae,ce.data);g.generateMipmaps=!1}else L?(_e&&n.texStorage2D(t.TEXTURE_2D,xe,Ce,ee.width,ee.height),ie&&dt(g,ee,ue,Ae)):n.texImage2D(t.TEXTURE_2D,0,Ce,ee.width,ee.height,0,ue,Ae,ee.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){L&&_e&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Ce,je[0].width,je[0].height,ee.depth);for(let ne=0,j=je.length;ne<j;ne++)if(ce=je[ne],g.format!==Yn)if(ue!==null)if(L){if(ie)if(g.layerUpdates.size>0){const oe=Pd(ce.width,ce.height,g.format,g.type);for(const We of g.layerUpdates){const vt=ce.data.subarray(We*oe/ce.data.BYTES_PER_ELEMENT,(We+1)*oe/ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,We,ce.width,ce.height,1,ue,vt)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,ce.width,ce.height,ee.depth,ue,ce.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,Ce,ce.width,ce.height,ee.depth,0,ce.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ie&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,ce.width,ce.height,ee.depth,ue,Ae,ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,Ce,ce.width,ce.height,ee.depth,0,ue,Ae,ce.data)}else{L&&_e&&n.texStorage2D(t.TEXTURE_2D,xe,Ce,je[0].width,je[0].height);for(let ne=0,j=je.length;ne<j;ne++)ce=je[ne],g.format!==Yn?ue!==null?L?ie&&n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,ce.width,ce.height,ue,ce.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,Ce,ce.width,ce.height,0,ce.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ie&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,ce.width,ce.height,ue,Ae,ce.data):n.texImage2D(t.TEXTURE_2D,ne,Ce,ce.width,ce.height,0,ue,Ae,ce.data)}else if(g.isDataArrayTexture)if(L){if(_e&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Ce,ee.width,ee.height,ee.depth),ie)if(g.layerUpdates.size>0){const ne=Pd(ee.width,ee.height,g.format,g.type);for(const j of g.layerUpdates){const oe=ee.data.subarray(j*ne/ee.data.BYTES_PER_ELEMENT,(j+1)*ne/ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,j,ee.width,ee.height,1,ue,Ae,oe)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ue,Ae,ee.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ce,ee.width,ee.height,ee.depth,0,ue,Ae,ee.data);else if(g.isData3DTexture)L?(_e&&n.texStorage3D(t.TEXTURE_3D,xe,Ce,ee.width,ee.height,ee.depth),ie&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ue,Ae,ee.data)):n.texImage3D(t.TEXTURE_3D,0,Ce,ee.width,ee.height,ee.depth,0,ue,Ae,ee.data);else if(g.isFramebufferTexture){if(_e)if(L)n.texStorage2D(t.TEXTURE_2D,xe,Ce,ee.width,ee.height);else{let ne=ee.width,j=ee.height;for(let oe=0;oe<xe;oe++)n.texImage2D(t.TEXTURE_2D,oe,Ce,ne,j,0,ue,Ae,null),ne>>=1,j>>=1}}else if(je.length>0){if(L&&_e){const ne=re(je[0]);n.texStorage2D(t.TEXTURE_2D,xe,Ce,ne.width,ne.height)}for(let ne=0,j=je.length;ne<j;ne++)ce=je[ne],L?ie&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,ue,Ae,ce):n.texImage2D(t.TEXTURE_2D,ne,Ce,ue,Ae,ce);g.generateMipmaps=!1}else if(L){if(_e){const ne=re(ee);n.texStorage2D(t.TEXTURE_2D,xe,Ce,ne.width,ne.height)}ie&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue,Ae,ee)}else n.texImage2D(t.TEXTURE_2D,0,Ce,ue,Ae,ee);m(g)&&f(W),we.__version=X.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function Q(y,g,D){if(g.image.length!==6)return;const W=Ge(y,g),K=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,y.__webglTexture,t.TEXTURE0+D);const X=i.get(K);if(K.version!==X.__version||W===!0){n.activeTexture(t.TEXTURE0+D);const we=it.getPrimaries(it.workingColorSpace),se=g.colorSpace===ji?null:it.getPrimaries(g.colorSpace),be=g.colorSpace===ji||we===se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const ze=g.isCompressedTexture||g.image[0].isCompressedTexture,ee=g.image[0]&&g.image[0].isDataTexture,ue=[];for(let j=0;j<6;j++)!ze&&!ee?ue[j]=S(g.image[j],!0,r.maxCubemapSize):ue[j]=ee?g.image[j].image:g.image[j],ue[j]=ke(g,ue[j]);const Ae=ue[0],Ce=s.convert(g.format,g.colorSpace),ce=s.convert(g.type),je=T(g.internalFormat,Ce,ce,g.colorSpace),L=g.isVideoTexture!==!0,_e=X.__version===void 0||W===!0,ie=K.dataReady;let xe=w(g,Ae);Xe(t.TEXTURE_CUBE_MAP,g);let ne;if(ze){L&&_e&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,je,Ae.width,Ae.height);for(let j=0;j<6;j++){ne=ue[j].mipmaps;for(let oe=0;oe<ne.length;oe++){const We=ne[oe];g.format!==Yn?Ce!==null?L?ie&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe,0,0,We.width,We.height,Ce,We.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe,je,We.width,We.height,0,We.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe,0,0,We.width,We.height,Ce,ce,We.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe,je,We.width,We.height,0,Ce,ce,We.data)}}}else{if(ne=g.mipmaps,L&&_e){ne.length>0&&xe++;const j=re(ue[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,je,j.width,j.height)}for(let j=0;j<6;j++)if(ee){L?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ue[j].width,ue[j].height,Ce,ce,ue[j].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,je,ue[j].width,ue[j].height,0,Ce,ce,ue[j].data);for(let oe=0;oe<ne.length;oe++){const vt=ne[oe].image[j].image;L?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe+1,0,0,vt.width,vt.height,Ce,ce,vt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe+1,je,vt.width,vt.height,0,Ce,ce,vt.data)}}else{L?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ce,ce,ue[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,je,Ce,ce,ue[j]);for(let oe=0;oe<ne.length;oe++){const We=ne[oe];L?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe+1,0,0,Ce,ce,We.image[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe+1,je,Ce,ce,We.image[j])}}}m(g)&&f(t.TEXTURE_CUBE_MAP),X.__version=K.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function Se(y,g,D,W,K,X){const we=s.convert(D.format,D.colorSpace),se=s.convert(D.type),be=T(D.internalFormat,we,se,D.colorSpace),ze=i.get(g),ee=i.get(D);if(ee.__renderTarget=g,!ze.__hasExternalTextures){const ue=Math.max(1,g.width>>X),Ae=Math.max(1,g.height>>X);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,X,be,ue,Ae,g.depth,0,we,se,null):n.texImage2D(K,X,be,ue,Ae,0,we,se,null)}n.bindFramebuffer(t.FRAMEBUFFER,y),Ne(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,W,K,ee.__webglTexture,0,b(g)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,W,K,ee.__webglTexture,X),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Be(y,g,D){if(t.bindRenderbuffer(t.RENDERBUFFER,y),g.depthBuffer){const W=g.depthTexture,K=W&&W.isDepthTexture?W.type:null,X=E(g.stencilBuffer,K),we=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Ne(g)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,b(g),X,g.width,g.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,b(g),X,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,X,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,we,t.RENDERBUFFER,y)}else{const W=g.textures;for(let K=0;K<W.length;K++){const X=W[K],we=s.convert(X.format,X.colorSpace),se=s.convert(X.type),be=T(X.internalFormat,we,se,X.colorSpace);Ne(g)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,b(g),be,g.width,g.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,b(g),be,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,be,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ee(y,g,D){const W=g.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(g.depthTexture);if(K.__renderTarget=g,(!K.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),W){if(K.__webglInit===void 0&&(K.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),K.__webglTexture===void 0){K.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),Xe(t.TEXTURE_CUBE_MAP,g.depthTexture);const ze=s.convert(g.depthTexture.format),ee=s.convert(g.depthTexture.type);let ue;g.depthTexture.format===Oi?ue=t.DEPTH_COMPONENT24:g.depthTexture.format===Er&&(ue=t.DEPTH24_STENCIL8);for(let Ae=0;Ae<6;Ae++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,ue,g.width,g.height,0,ze,ee,null)}}else G(g.depthTexture,0);const X=K.__webglTexture,we=b(g),se=W?t.TEXTURE_CUBE_MAP_POSITIVE_X+D:t.TEXTURE_2D,be=g.depthTexture.format===Er?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(g.depthTexture.format===Oi)Ne(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,be,se,X,0,we):t.framebufferTexture2D(t.FRAMEBUFFER,be,se,X,0);else if(g.depthTexture.format===Er)Ne(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,be,se,X,0,we):t.framebufferTexture2D(t.FRAMEBUFFER,be,se,X,0);else throw new Error("Unknown depthTexture format")}function tt(y){const g=i.get(y),D=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const W=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),W){const K=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,W.removeEventListener("dispose",K)};W.addEventListener("dispose",K),g.__depthDisposeCallback=K}g.__boundDepthTexture=W}if(y.depthTexture&&!g.__autoAllocateDepthBuffer)if(D)for(let W=0;W<6;W++)Ee(g.__webglFramebuffer[W],y,W);else{const W=y.texture.mipmaps;W&&W.length>0?Ee(g.__webglFramebuffer[0],y,0):Ee(g.__webglFramebuffer,y,0)}else if(D){g.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[W]),g.__webglDepthbuffer[W]===void 0)g.__webglDepthbuffer[W]=t.createRenderbuffer(),Be(g.__webglDepthbuffer[W],y,!1);else{const K=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,X=g.__webglDepthbuffer[W];t.bindRenderbuffer(t.RENDERBUFFER,X),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,X)}}else{const W=y.texture.mipmaps;if(W&&W.length>0?n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),Be(g.__webglDepthbuffer,y,!1);else{const K=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,X=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,X),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,X)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function pt(y,g,D){const W=i.get(y);g!==void 0&&Se(W.__webglFramebuffer,y,y.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),D!==void 0&&tt(y)}function qe(y){const g=y.texture,D=i.get(y),W=i.get(g);y.addEventListener("dispose",C);const K=y.textures,X=y.isWebGLCubeRenderTarget===!0,we=K.length>1;if(we||(W.__webglTexture===void 0&&(W.__webglTexture=t.createTexture()),W.__version=g.version,a.memory.textures++),X){D.__webglFramebuffer=[];for(let se=0;se<6;se++)if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer[se]=[];for(let be=0;be<g.mipmaps.length;be++)D.__webglFramebuffer[se][be]=t.createFramebuffer()}else D.__webglFramebuffer[se]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer=[];for(let se=0;se<g.mipmaps.length;se++)D.__webglFramebuffer[se]=t.createFramebuffer()}else D.__webglFramebuffer=t.createFramebuffer();if(we)for(let se=0,be=K.length;se<be;se++){const ze=i.get(K[se]);ze.__webglTexture===void 0&&(ze.__webglTexture=t.createTexture(),a.memory.textures++)}if(y.samples>0&&Ne(y)===!1){D.__webglMultisampledFramebuffer=t.createFramebuffer(),D.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let se=0;se<K.length;se++){const be=K[se];D.__webglColorRenderbuffer[se]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,D.__webglColorRenderbuffer[se]);const ze=s.convert(be.format,be.colorSpace),ee=s.convert(be.type),ue=T(be.internalFormat,ze,ee,be.colorSpace,y.isXRRenderTarget===!0),Ae=b(y);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,ue,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+se,t.RENDERBUFFER,D.__webglColorRenderbuffer[se])}t.bindRenderbuffer(t.RENDERBUFFER,null),y.depthBuffer&&(D.__webglDepthRenderbuffer=t.createRenderbuffer(),Be(D.__webglDepthRenderbuffer,y,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(X){n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture),Xe(t.TEXTURE_CUBE_MAP,g);for(let se=0;se<6;se++)if(g.mipmaps&&g.mipmaps.length>0)for(let be=0;be<g.mipmaps.length;be++)Se(D.__webglFramebuffer[se][be],y,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+se,be);else Se(D.__webglFramebuffer[se],y,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(g)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(we){for(let se=0,be=K.length;se<be;se++){const ze=K[se],ee=i.get(ze);let ue=t.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ue=y.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,ee.__webglTexture),Xe(ue,ze),Se(D.__webglFramebuffer,y,ze,t.COLOR_ATTACHMENT0+se,ue,0),m(ze)&&f(ue)}n.unbindTexture()}else{let se=t.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(se=y.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(se,W.__webglTexture),Xe(se,g),g.mipmaps&&g.mipmaps.length>0)for(let be=0;be<g.mipmaps.length;be++)Se(D.__webglFramebuffer[be],y,g,t.COLOR_ATTACHMENT0,se,be);else Se(D.__webglFramebuffer,y,g,t.COLOR_ATTACHMENT0,se,0);m(g)&&f(se),n.unbindTexture()}y.depthBuffer&&tt(y)}function Z(y){const g=y.textures;for(let D=0,W=g.length;D<W;D++){const K=g[D];if(m(K)){const X=A(y),we=i.get(K).__webglTexture;n.bindTexture(X,we),f(X),n.unbindTexture()}}}const te=[],J=[];function me(y){if(y.samples>0){if(Ne(y)===!1){const g=y.textures,D=y.width,W=y.height;let K=t.COLOR_BUFFER_BIT;const X=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,we=i.get(y),se=g.length>1;if(se)for(let ze=0;ze<g.length;ze++)n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ze,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ze,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const be=y.texture.mipmaps;be&&be.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let ze=0;ze<g.length;ze++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),se){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,we.__webglColorRenderbuffer[ze]);const ee=i.get(g[ze]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ee,0)}t.blitFramebuffer(0,0,D,W,0,0,D,W,K,t.NEAREST),c===!0&&(te.length=0,J.length=0,te.push(t.COLOR_ATTACHMENT0+ze),y.depthBuffer&&y.resolveDepthBuffer===!1&&(te.push(X),J.push(X),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,J)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,te))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),se)for(let ze=0;ze<g.length;ze++){n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ze,t.RENDERBUFFER,we.__webglColorRenderbuffer[ze]);const ee=i.get(g[ze]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ze,t.TEXTURE_2D,ee,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&c){const g=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function b(y){return Math.min(r.maxSamples,y.samples)}function Ne(y){const g=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ve(y){const g=a.render.frame;u.get(y)!==g&&(u.set(y,g),y.update())}function ke(y,g){const D=y.colorSpace,W=y.format,K=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||D!==gs&&D!==ji&&(it.getTransfer(D)===ht?(W!==Yn||K!==On)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",D)),g}function re(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(l.width=y.naturalWidth||y.width,l.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(l.width=y.displayWidth,l.height=y.displayHeight):(l.width=y.width,l.height=y.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=k,this.setTexture2D=G,this.setTexture2DArray=H,this.setTexture3D=B,this.setTextureCube=$,this.rebindTextures=pt,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ne,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function bM(t,e){function n(i,r=ji){let s;const a=it.getTransfer(r);if(i===On)return t.UNSIGNED_BYTE;if(i===_h)return t.UNSIGNED_SHORT_4_4_4_4;if(i===vh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===h0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===f0)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===l0)return t.BYTE;if(i===u0)return t.SHORT;if(i===aa)return t.UNSIGNED_SHORT;if(i===gh)return t.INT;if(i===di)return t.UNSIGNED_INT;if(i===ai)return t.FLOAT;if(i===Fi)return t.HALF_FLOAT;if(i===d0)return t.ALPHA;if(i===p0)return t.RGB;if(i===Yn)return t.RGBA;if(i===Oi)return t.DEPTH_COMPONENT;if(i===Er)return t.DEPTH_STENCIL;if(i===m0)return t.RED;if(i===xh)return t.RED_INTEGER;if(i===ms)return t.RG;if(i===Sh)return t.RG_INTEGER;if(i===Mh)return t.RGBA_INTEGER;if(i===ro||i===so||i===ao||i===oo)if(a===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ro)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===so)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===oo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ro)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===so)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ao)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===oo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ll||i===Dl||i===Il||i===Ul)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ll)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Dl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Il)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ul)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Nl||i===Fl||i===Ol||i===Bl||i===kl||i===zl||i===Vl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Nl||i===Fl)return a===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ol)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Bl)return s.COMPRESSED_R11_EAC;if(i===kl)return s.COMPRESSED_SIGNED_R11_EAC;if(i===zl)return s.COMPRESSED_RG11_EAC;if(i===Vl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Gl||i===Hl||i===Wl||i===Xl||i===ql||i===Yl||i===Kl||i===jl||i===Zl||i===Jl||i===$l||i===Ql||i===eu||i===tu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Gl)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hl)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wl)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xl)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ql)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yl)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kl)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jl)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zl)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jl)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$l)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ql)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===eu)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===tu)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===nu||i===iu||i===ru)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===nu)return a===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===iu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ru)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===su||i===au||i===ou||i===cu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===su)return s.COMPRESSED_RED_RGTC1_EXT;if(i===au)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ou)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===oa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const AM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class RM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new C0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new mi({vertexShader:AM,fragmentShader:wM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new hn(new $o(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class CM extends Rs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,_=null;const S=typeof XRWebGLBinding<"u",m=new RM,f={},A=n.getContextAttributes();let T=null,E=null;const w=[],R=[],C=new pe;let N=null;const v=new Fn;v.viewport=new Ut;const M=new Fn;M.viewport=new Ut;const P=[v,M],k=new kv;let O=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=w[Y];return Q===void 0&&(Q=new Bc,w[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=w[Y];return Q===void 0&&(Q=new Bc,w[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=w[Y];return Q===void 0&&(Q=new Bc,w[Y]=Q),Q.getHandSpace()};function G(Y){const Q=R.indexOf(Y.inputSource);if(Q===-1)return;const Se=w[Q];Se!==void 0&&(Se.update(Y.inputSource,Y.frame,l||a),Se.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",B);for(let Y=0;Y<w.length;Y++){const Q=R[Y];Q!==null&&(R[Y]=null,w[Y].disconnect(Q))}O=null,q=null,m.reset();for(const Y in f)delete f[Y];e.setRenderTarget(T),p=null,d=null,h=null,r=null,E=null,dt.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&S&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",H),r.addEventListener("inputsourceschange",B),A.xrCompatible!==!0&&await n.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(C),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Be=null,Ee=null;A.depth&&(Ee=A.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Se=A.stencil?Er:Oi,Be=A.stencil?oa:di);const tt={colorFormat:n.RGBA8,depthFormat:Ee,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(tt),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new li(d.textureWidth,d.textureHeight,{format:Yn,type:On,depthTexture:new ua(d.textureWidth,d.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Se={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Se),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new li(p.framebufferWidth,p.framebufferHeight,{format:Yn,type:On,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),dt.setContext(r),dt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(Y){for(let Q=0;Q<Y.removed.length;Q++){const Se=Y.removed[Q],Be=R.indexOf(Se);Be>=0&&(R[Be]=null,w[Be].disconnect(Se))}for(let Q=0;Q<Y.added.length;Q++){const Se=Y.added[Q];let Be=R.indexOf(Se);if(Be===-1){for(let tt=0;tt<w.length;tt++)if(tt>=R.length){R.push(Se),Be=tt;break}else if(R[tt]===null){R[tt]=Se,Be=tt;break}if(Be===-1)break}const Ee=w[Be];Ee&&Ee.connect(Se)}}const $=new U,fe=new U;function ae(Y,Q,Se){$.setFromMatrixPosition(Q.matrixWorld),fe.setFromMatrixPosition(Se.matrixWorld);const Be=$.distanceTo(fe),Ee=Q.projectionMatrix.elements,tt=Se.projectionMatrix.elements,pt=Ee[14]/(Ee[10]-1),qe=Ee[14]/(Ee[10]+1),Z=(Ee[9]+1)/Ee[5],te=(Ee[9]-1)/Ee[5],J=(Ee[8]-1)/Ee[0],me=(tt[8]+1)/tt[0],b=pt*J,Ne=pt*me,ve=Be/(-J+me),ke=ve*-J;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ke),Y.translateZ(ve),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ee[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const re=pt+ve,y=qe+ve,g=b-ke,D=Ne+(Be-ke),W=Z*qe/y*re,K=te*qe/y*re;Y.projectionMatrix.makePerspective(g,D,W,K,re,y),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function le(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let Q=Y.near,Se=Y.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(Se=m.depthFar)),k.near=M.near=v.near=Q,k.far=M.far=v.far=Se,(O!==k.near||q!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),O=k.near,q=k.far),k.layers.mask=Y.layers.mask|6,v.layers.mask=k.layers.mask&3,M.layers.mask=k.layers.mask&5;const Be=Y.parent,Ee=k.cameras;le(k,Be);for(let tt=0;tt<Ee.length;tt++)le(Ee[tt],Be);Ee.length===2?ae(k,v,M):k.projectionMatrix.copy(v.projectionMatrix),Xe(Y,k,Be)};function Xe(Y,Q,Se){Se===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(Se.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=la*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(Y){return f[Y]};let Ge=null;function ft(Y,Q){if(u=Q.getViewerPose(l||a),_=Q,u!==null){const Se=u.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let Be=!1;Se.length!==k.cameras.length&&(k.cameras.length=0,Be=!0);for(let qe=0;qe<Se.length;qe++){const Z=Se[qe];let te=null;if(p!==null)te=p.getViewport(Z);else{const me=h.getViewSubImage(d,Z);te=me.viewport,qe===0&&(e.setRenderTargetTextures(E,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(E))}let J=P[qe];J===void 0&&(J=new Fn,J.layers.enable(qe),J.viewport=new Ut,P[qe]=J),J.matrix.fromArray(Z.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Z.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(te.x,te.y,te.width,te.height),qe===0&&(k.matrix.copy(J.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Be===!0&&k.cameras.push(J)}const Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){h=i.getBinding();const qe=h.getDepthInformation(Se[0]);qe&&qe.isValid&&qe.texture&&m.init(qe,r.renderState)}if(Ee&&Ee.includes("camera-access")&&S){e.state.unbindTexture(),h=i.getBinding();for(let qe=0;qe<Se.length;qe++){const Z=Se[qe].camera;if(Z){let te=f[Z];te||(te=new C0,f[Z]=te);const J=h.getCameraImage(Z);te.sourceTexture=J}}}}for(let Se=0;Se<w.length;Se++){const Be=R[Se],Ee=w[Se];Be!==null&&Ee!==void 0&&Ee.update(Be,Q,l||a)}Ge&&Ge(Y,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),_=null}const dt=new z0;dt.setAnimationLoop(ft),this.setAnimationLoop=function(Y){Ge=Y},this.dispose=function(){}}}const mr=new pi,PM=new Nt;function LM(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,T0(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,A,T,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),S(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,A,T):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===dn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===dn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const A=e.get(f),T=A.envMap,E=A.envMapRotation;T&&(m.envMap.value=T,mr.copy(E),mr.x*=-1,mr.y*=-1,mr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),m.envMapRotation.value.setFromMatrix4(PM.makeRotationFromEuler(mr)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,A,T){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*A,m.scale.value=T*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,A){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===dn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function S(m,f){const A=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function DM(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,T){const E=T.program;i.uniformBlockBinding(A,E)}function l(A,T){let E=r[A.id];E===void 0&&(_(A),E=u(A),r[A.id]=E,A.addEventListener("dispose",m));const w=T.program;i.updateUBOMapping(A,w);const R=e.render.frame;s[A.id]!==R&&(d(A),s[A.id]=R)}function u(A){const T=h();A.__bindingPointIndex=T;const E=t.createBuffer(),w=A.__size,R=A.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,w,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,E),E}function h(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const T=r[A.id],E=A.uniforms,w=A.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let R=0,C=E.length;R<C;R++){const N=Array.isArray(E[R])?E[R]:[E[R]];for(let v=0,M=N.length;v<M;v++){const P=N[v];if(p(P,R,v,w)===!0){const k=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let G=0;G<O.length;G++){const H=O[G],B=S(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,k+q,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,q),q+=B.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(A,T,E,w){const R=A.value,C=T+"_"+E;if(w[C]===void 0)return typeof R=="number"||typeof R=="boolean"?w[C]=R:w[C]=R.clone(),!0;{const N=w[C];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return w[C]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function _(A){const T=A.uniforms;let E=0;const w=16;for(let C=0,N=T.length;C<N;C++){const v=Array.isArray(T[C])?T[C]:[T[C]];for(let M=0,P=v.length;M<P;M++){const k=v[M],O=Array.isArray(k.value)?k.value:[k.value];for(let q=0,G=O.length;q<G;q++){const H=O[q],B=S(H),$=E%w,fe=$%B.boundary,ae=$+fe;E+=fe,ae!==0&&w-ae<B.storage&&(E+=w-ae),k.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=E,E+=B.storage}}}const R=E%w;return R>0&&(E+=w-R),A.__size=E,A.__cache={},this}function S(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):He("WebGLRenderer: Unsupported uniform value type.",A),T}function m(A){const T=A.target;T.removeEventListener("dispose",m);const E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function f(){for(const A in r)t.deleteBuffer(r[A]);a=[],r={},s={}}return{bind:c,update:l,dispose:f}}const IM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ni=null;function UM(){return ni===null&&(ni=new j1(IM,16,16,ms,Fi),ni.name="DFG_LUT",ni.minFilter=$t,ni.magFilter=$t,ni.wrapS=wi,ni.wrapT=wi,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}class NM{constructor(e={}){const{canvas:n=s1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=On}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const S=p,m=new Set([Mh,Sh,xh]),f=new Set([On,di,aa,oa,_h,vh]),A=new Uint32Array(4),T=new Int32Array(4);let E=null,w=null;const R=[],C=[];let N=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let M=!1;this._outputColorSpace=Un;let P=0,k=0,O=null,q=-1,G=null;const H=new Ut,B=new Ut;let $=null;const fe=new et(0);let ae=0,le=n.width,Xe=n.height,Ge=1,ft=null,dt=null;const Y=new Ut(0,0,le,Xe),Q=new Ut(0,0,le,Xe);let Se=!1;const Be=new R0;let Ee=!1,tt=!1;const pt=new Nt,qe=new U,Z=new Ut,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let J=!1;function me(){return O===null?Ge:1}let b=i;function Ne(x,I){return n.getContext(x,I)}try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${mh}`),n.addEventListener("webglcontextlost",We,!1),n.addEventListener("webglcontextrestored",vt,!1),n.addEventListener("webglcontextcreationerror",lt,!1),b===null){const I="webgl2";if(b=Ne(I,x),b===null)throw Ne(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw nt("WebGLRenderer: "+x.message),x}let ve,ke,re,y,g,D,W,K,X,we,se,be,ze,ee,ue,Ae,Ce,ce,je,L,_e,ie,xe,ne;function j(){ve=new U3(b),ve.init(),ie=new bM(b,ve),ke=new b3(b,ve,e,ie),re=new EM(b,ve),ke.reversedDepthBuffer&&d&&re.buffers.depth.setReversed(!0),y=new O3(b),g=new cM,D=new TM(b,ve,re,g,ke,ie,y),W=new w3(v),K=new I3(v),X=new Vv(b),xe=new E3(b,X),we=new N3(b,X,y,xe),se=new k3(b,we,X,y),je=new B3(b,ke,D),Ae=new A3(g),be=new oM(v,W,K,ve,ke,xe,Ae),ze=new LM(v,g),ee=new uM,ue=new gM(ve),ce=new y3(v,W,K,re,se,_,c),Ce=new MM(v,se,ke),ne=new DM(b,y,ke,re),L=new T3(b,ve,y),_e=new F3(b,ve,y),y.programs=be.programs,v.capabilities=ke,v.extensions=ve,v.properties=g,v.renderLists=ee,v.shadowMap=Ce,v.state=re,v.info=y}j(),S!==On&&(N=new V3(S,n.width,n.height,r,s));const oe=new CM(v,b);this.xr=oe,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const x=ve.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=ve.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Ge},this.setPixelRatio=function(x){x!==void 0&&(Ge=x,this.setSize(le,Xe,!1))},this.getSize=function(x){return x.set(le,Xe)},this.setSize=function(x,I,V=!0){if(oe.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}le=x,Xe=I,n.width=Math.floor(x*Ge),n.height=Math.floor(I*Ge),V===!0&&(n.style.width=x+"px",n.style.height=I+"px"),N!==null&&N.setSize(n.width,n.height),this.setViewport(0,0,x,I)},this.getDrawingBufferSize=function(x){return x.set(le*Ge,Xe*Ge).floor()},this.setDrawingBufferSize=function(x,I,V){le=x,Xe=I,Ge=V,n.width=Math.floor(x*V),n.height=Math.floor(I*V),this.setViewport(0,0,x,I)},this.setEffects=function(x){if(S===On){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let I=0;I<x.length;I++)if(x[I].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(H)},this.getViewport=function(x){return x.copy(Y)},this.setViewport=function(x,I,V,z){x.isVector4?Y.set(x.x,x.y,x.z,x.w):Y.set(x,I,V,z),re.viewport(H.copy(Y).multiplyScalar(Ge).round())},this.getScissor=function(x){return x.copy(Q)},this.setScissor=function(x,I,V,z){x.isVector4?Q.set(x.x,x.y,x.z,x.w):Q.set(x,I,V,z),re.scissor(B.copy(Q).multiplyScalar(Ge).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(x){re.setScissorTest(Se=x)},this.setOpaqueSort=function(x){ft=x},this.setTransparentSort=function(x){dt=x},this.getClearColor=function(x){return x.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(x=!0,I=!0,V=!0){let z=0;if(x){let F=!1;if(O!==null){const he=O.texture.format;F=m.has(he)}if(F){const he=O.texture.type,Me=f.has(he),ge=ce.getClearColor(),Te=ce.getClearAlpha(),Le=ge.r,Ve=ge.g,Fe=ge.b;Me?(A[0]=Le,A[1]=Ve,A[2]=Fe,A[3]=Te,b.clearBufferuiv(b.COLOR,0,A)):(T[0]=Le,T[1]=Ve,T[2]=Fe,T[3]=Te,b.clearBufferiv(b.COLOR,0,T))}else z|=b.COLOR_BUFFER_BIT}I&&(z|=b.DEPTH_BUFFER_BIT),V&&(z|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",We,!1),n.removeEventListener("webglcontextrestored",vt,!1),n.removeEventListener("webglcontextcreationerror",lt,!1),ce.dispose(),ee.dispose(),ue.dispose(),g.dispose(),W.dispose(),K.dispose(),se.dispose(),xe.dispose(),ne.dispose(),be.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Nh),oe.removeEventListener("sessionend",Fh),or.stop()};function We(x){x.preventDefault(),ad("WebGLRenderer: Context Lost."),M=!0}function vt(){ad("WebGLRenderer: Context Restored."),M=!1;const x=y.autoReset,I=Ce.enabled,V=Ce.autoUpdate,z=Ce.needsUpdate,F=Ce.type;j(),y.autoReset=x,Ce.enabled=I,Ce.autoUpdate=V,Ce.needsUpdate=z,Ce.type=F}function lt(x){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function $n(x){const I=x.target;I.removeEventListener("dispose",$n),vi(I)}function vi(x){q0(x),g.remove(x)}function q0(x){const I=g.get(x).programs;I!==void 0&&(I.forEach(function(V){be.releaseProgram(V)}),x.isShaderMaterial&&be.releaseShaderCache(x))}this.renderBufferDirect=function(x,I,V,z,F,he){I===null&&(I=te);const Me=F.isMesh&&F.matrixWorld.determinant()<0,ge=K0(x,I,V,z,F);re.setMaterial(z,Me);let Te=V.index,Le=1;if(z.wireframe===!0){if(Te=we.getWireframeAttribute(V),Te===void 0)return;Le=2}const Ve=V.drawRange,Fe=V.attributes.position;let Je=Ve.start*Le,mt=(Ve.start+Ve.count)*Le;he!==null&&(Je=Math.max(Je,he.start*Le),mt=Math.min(mt,(he.start+he.count)*Le)),Te!==null?(Je=Math.max(Je,0),mt=Math.min(mt,Te.count)):Fe!=null&&(Je=Math.max(Je,0),mt=Math.min(mt,Fe.count));const Ct=mt-Je;if(Ct<0||Ct===1/0)return;xe.setup(F,z,ge,V,Te);let Pt,gt=L;if(Te!==null&&(Pt=X.get(Te),gt=_e,gt.setIndex(Pt)),F.isMesh)z.wireframe===!0?(re.setLineWidth(z.wireframeLinewidth*me()),gt.setMode(b.LINES)):gt.setMode(b.TRIANGLES);else if(F.isLine){let Oe=z.linewidth;Oe===void 0&&(Oe=1),re.setLineWidth(Oe*me()),F.isLineSegments?gt.setMode(b.LINES):F.isLineLoop?gt.setMode(b.LINE_LOOP):gt.setMode(b.LINE_STRIP)}else F.isPoints?gt.setMode(b.POINTS):F.isSprite&&gt.setMode(b.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ca("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ve.get("WEBGL_multi_draw"))gt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Oe=F._multiDrawStarts,ut=F._multiDrawCounts,st=F._multiDrawCount,gn=Te?X.get(Te).bytesPerElement:1,Dr=g.get(z).currentProgram.getUniforms();for(let _n=0;_n<st;_n++)Dr.setValue(b,"_gl_DrawID",_n),gt.render(Oe[_n]/gn,ut[_n])}else if(F.isInstancedMesh)gt.renderInstances(Je,Ct,F.count);else if(V.isInstancedBufferGeometry){const Oe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ut=Math.min(V.instanceCount,Oe);gt.renderInstances(Je,Ct,ut)}else gt.render(Je,Ct)};function Uh(x,I,V){x.transparent===!0&&x.side===si&&x.forceSinglePass===!1?(x.side=dn,x.needsUpdate=!0,Ma(x,I,V),x.side=ir,x.needsUpdate=!0,Ma(x,I,V),x.side=si):Ma(x,I,V)}this.compile=function(x,I,V=null){V===null&&(V=x),w=ue.get(V),w.init(I),C.push(w),V.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(w.pushLight(F),F.castShadow&&w.pushShadow(F))}),x!==V&&x.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(w.pushLight(F),F.castShadow&&w.pushShadow(F))}),w.setupLights();const z=new Set;return x.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const he=F.material;if(he)if(Array.isArray(he))for(let Me=0;Me<he.length;Me++){const ge=he[Me];Uh(ge,V,F),z.add(ge)}else Uh(he,V,F),z.add(he)}),w=C.pop(),z},this.compileAsync=function(x,I,V=null){const z=this.compile(x,I,V);return new Promise(F=>{function he(){if(z.forEach(function(Me){g.get(Me).currentProgram.isReady()&&z.delete(Me)}),z.size===0){F(x);return}setTimeout(he,10)}ve.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let tc=null;function Y0(x){tc&&tc(x)}function Nh(){or.stop()}function Fh(){or.start()}const or=new z0;or.setAnimationLoop(Y0),typeof self<"u"&&or.setContext(self),this.setAnimationLoop=function(x){tc=x,oe.setAnimationLoop(x),x===null?or.stop():or.start()},oe.addEventListener("sessionstart",Nh),oe.addEventListener("sessionend",Fh),this.render=function(x,I){if(I!==void 0&&I.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;const V=oe.enabled===!0&&oe.isPresenting===!0,z=N!==null&&(O===null||V)&&N.begin(v,O);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(I),I=oe.getCamera()),x.isScene===!0&&x.onBeforeRender(v,x,I,O),w=ue.get(x,C.length),w.init(I),C.push(w),pt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Be.setFromProjectionMatrix(pt,oi,I.reversedDepth),tt=this.localClippingEnabled,Ee=Ae.init(this.clippingPlanes,tt),E=ee.get(x,R.length),E.init(),R.push(E),oe.enabled===!0&&oe.isPresenting===!0){const Me=v.xr.getDepthSensingMesh();Me!==null&&nc(Me,I,-1/0,v.sortObjects)}nc(x,I,0,v.sortObjects),E.finish(),v.sortObjects===!0&&E.sort(ft,dt),J=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,J&&ce.addToRenderList(E,x),this.info.render.frame++,Ee===!0&&Ae.beginShadows();const F=w.state.shadowsArray;if(Ce.render(F,x,I),Ee===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(z&&N.hasRenderPass())===!1){const Me=E.opaque,ge=E.transmissive;if(w.setupLights(),I.isArrayCamera){const Te=I.cameras;if(ge.length>0)for(let Le=0,Ve=Te.length;Le<Ve;Le++){const Fe=Te[Le];Bh(Me,ge,x,Fe)}J&&ce.render(x);for(let Le=0,Ve=Te.length;Le<Ve;Le++){const Fe=Te[Le];Oh(E,x,Fe,Fe.viewport)}}else ge.length>0&&Bh(Me,ge,x,I),J&&ce.render(x),Oh(E,x,I)}O!==null&&k===0&&(D.updateMultisampleRenderTarget(O),D.updateRenderTargetMipmap(O)),z&&N.end(v),x.isScene===!0&&x.onAfterRender(v,x,I),xe.resetDefaultState(),q=-1,G=null,C.pop(),C.length>0?(w=C[C.length-1],Ee===!0&&Ae.setGlobalState(v.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?E=R[R.length-1]:E=null};function nc(x,I,V,z){if(x.visible===!1)return;if(x.layers.test(I.layers)){if(x.isGroup)V=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(I);else if(x.isLight)w.pushLight(x),x.castShadow&&w.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Be.intersectsSprite(x)){z&&Z.setFromMatrixPosition(x.matrixWorld).applyMatrix4(pt);const Me=se.update(x),ge=x.material;ge.visible&&E.push(x,Me,ge,V,Z.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Be.intersectsObject(x))){const Me=se.update(x),ge=x.material;if(z&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Z.copy(x.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Z.copy(Me.boundingSphere.center)),Z.applyMatrix4(x.matrixWorld).applyMatrix4(pt)),Array.isArray(ge)){const Te=Me.groups;for(let Le=0,Ve=Te.length;Le<Ve;Le++){const Fe=Te[Le],Je=ge[Fe.materialIndex];Je&&Je.visible&&E.push(x,Me,Je,V,Z.z,Fe)}}else ge.visible&&E.push(x,Me,ge,V,Z.z,null)}}const he=x.children;for(let Me=0,ge=he.length;Me<ge;Me++)nc(he[Me],I,V,z)}function Oh(x,I,V,z){const{opaque:F,transmissive:he,transparent:Me}=x;w.setupLightsView(V),Ee===!0&&Ae.setGlobalState(v.clippingPlanes,V),z&&re.viewport(H.copy(z)),F.length>0&&Sa(F,I,V),he.length>0&&Sa(he,I,V),Me.length>0&&Sa(Me,I,V),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function Bh(x,I,V,z){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[z.id]===void 0){const Je=ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[z.id]=new li(1,1,{generateMipmaps:!0,type:Je?Fi:On,minFilter:yr,samples:ke.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace})}const he=w.state.transmissionRenderTarget[z.id],Me=z.viewport||H;he.setSize(Me.z*v.transmissionResolutionScale,Me.w*v.transmissionResolutionScale);const ge=v.getRenderTarget(),Te=v.getActiveCubeFace(),Le=v.getActiveMipmapLevel();v.setRenderTarget(he),v.getClearColor(fe),ae=v.getClearAlpha(),ae<1&&v.setClearColor(16777215,.5),v.clear(),J&&ce.render(V);const Ve=v.toneMapping;v.toneMapping=ci;const Fe=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),w.setupLightsView(z),Ee===!0&&Ae.setGlobalState(v.clippingPlanes,z),Sa(x,V,z),D.updateMultisampleRenderTarget(he),D.updateRenderTargetMipmap(he),ve.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let mt=0,Ct=I.length;mt<Ct;mt++){const Pt=I[mt],{object:gt,geometry:Oe,material:ut,group:st}=Pt;if(ut.side===si&&gt.layers.test(z.layers)){const gn=ut.side;ut.side=dn,ut.needsUpdate=!0,kh(gt,V,z,Oe,ut,st),ut.side=gn,ut.needsUpdate=!0,Je=!0}}Je===!0&&(D.updateMultisampleRenderTarget(he),D.updateRenderTargetMipmap(he))}v.setRenderTarget(ge,Te,Le),v.setClearColor(fe,ae),Fe!==void 0&&(z.viewport=Fe),v.toneMapping=Ve}function Sa(x,I,V){const z=I.isScene===!0?I.overrideMaterial:null;for(let F=0,he=x.length;F<he;F++){const Me=x[F],{object:ge,geometry:Te,group:Le}=Me;let Ve=Me.material;Ve.allowOverride===!0&&z!==null&&(Ve=z),ge.layers.test(V.layers)&&kh(ge,I,V,Te,Ve,Le)}}function kh(x,I,V,z,F,he){x.onBeforeRender(v,I,V,z,F,he),x.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),F.onBeforeRender(v,I,V,z,x,he),F.transparent===!0&&F.side===si&&F.forceSinglePass===!1?(F.side=dn,F.needsUpdate=!0,v.renderBufferDirect(V,I,z,F,x,he),F.side=ir,F.needsUpdate=!0,v.renderBufferDirect(V,I,z,F,x,he),F.side=si):v.renderBufferDirect(V,I,z,F,x,he),x.onAfterRender(v,I,V,z,F,he)}function Ma(x,I,V){I.isScene!==!0&&(I=te);const z=g.get(x),F=w.state.lights,he=w.state.shadowsArray,Me=F.state.version,ge=be.getParameters(x,F.state,he,I,V),Te=be.getProgramCacheKey(ge);let Le=z.programs;z.environment=x.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(x.isMeshStandardMaterial?K:W).get(x.envMap||z.environment),z.envMapRotation=z.environment!==null&&x.envMap===null?I.environmentRotation:x.envMapRotation,Le===void 0&&(x.addEventListener("dispose",$n),Le=new Map,z.programs=Le);let Ve=Le.get(Te);if(Ve!==void 0){if(z.currentProgram===Ve&&z.lightsStateVersion===Me)return Vh(x,ge),Ve}else ge.uniforms=be.getUniforms(x),x.onBeforeCompile(ge,v),Ve=be.acquireProgram(ge,Te),Le.set(Te,Ve),z.uniforms=ge.uniforms;const Fe=z.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Fe.clippingPlanes=Ae.uniform),Vh(x,ge),z.needsLights=Z0(x),z.lightsStateVersion=Me,z.needsLights&&(Fe.ambientLightColor.value=F.state.ambient,Fe.lightProbe.value=F.state.probe,Fe.directionalLights.value=F.state.directional,Fe.directionalLightShadows.value=F.state.directionalShadow,Fe.spotLights.value=F.state.spot,Fe.spotLightShadows.value=F.state.spotShadow,Fe.rectAreaLights.value=F.state.rectArea,Fe.ltc_1.value=F.state.rectAreaLTC1,Fe.ltc_2.value=F.state.rectAreaLTC2,Fe.pointLights.value=F.state.point,Fe.pointLightShadows.value=F.state.pointShadow,Fe.hemisphereLights.value=F.state.hemi,Fe.directionalShadowMap.value=F.state.directionalShadowMap,Fe.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Fe.spotShadowMap.value=F.state.spotShadowMap,Fe.spotLightMatrix.value=F.state.spotLightMatrix,Fe.spotLightMap.value=F.state.spotLightMap,Fe.pointShadowMap.value=F.state.pointShadowMap,Fe.pointShadowMatrix.value=F.state.pointShadowMatrix),z.currentProgram=Ve,z.uniformsList=null,Ve}function zh(x){if(x.uniformsList===null){const I=x.currentProgram.getUniforms();x.uniformsList=co.seqWithValue(I.seq,x.uniforms)}return x.uniformsList}function Vh(x,I){const V=g.get(x);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.batchingColor=I.batchingColor,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.instancingMorph=I.instancingMorph,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function K0(x,I,V,z,F){I.isScene!==!0&&(I=te),D.resetTextureUnits();const he=I.fog,Me=z.isMeshStandardMaterial?I.environment:null,ge=O===null?v.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:gs,Te=(z.isMeshStandardMaterial?K:W).get(z.envMap||Me),Le=z.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ve=!!V.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Fe=!!V.morphAttributes.position,Je=!!V.morphAttributes.normal,mt=!!V.morphAttributes.color;let Ct=ci;z.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Ct=v.toneMapping);const Pt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,gt=Pt!==void 0?Pt.length:0,Oe=g.get(z),ut=w.state.lights;if(Ee===!0&&(tt===!0||x!==G)){const Qt=x===G&&z.id===q;Ae.setState(z,x,Qt)}let st=!1;z.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==ut.state.version||Oe.outputColorSpace!==ge||F.isBatchedMesh&&Oe.batching===!1||!F.isBatchedMesh&&Oe.batching===!0||F.isBatchedMesh&&Oe.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Oe.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Oe.instancing===!1||!F.isInstancedMesh&&Oe.instancing===!0||F.isSkinnedMesh&&Oe.skinning===!1||!F.isSkinnedMesh&&Oe.skinning===!0||F.isInstancedMesh&&Oe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Oe.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Oe.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Oe.instancingMorph===!1&&F.morphTexture!==null||Oe.envMap!==Te||z.fog===!0&&Oe.fog!==he||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Ae.numPlanes||Oe.numIntersection!==Ae.numIntersection)||Oe.vertexAlphas!==Le||Oe.vertexTangents!==Ve||Oe.morphTargets!==Fe||Oe.morphNormals!==Je||Oe.morphColors!==mt||Oe.toneMapping!==Ct||Oe.morphTargetsCount!==gt)&&(st=!0):(st=!0,Oe.__version=z.version);let gn=Oe.currentProgram;st===!0&&(gn=Ma(z,I,F));let Dr=!1,_n=!1,Ls=!1;const xt=gn.getUniforms(),cn=Oe.uniforms;if(re.useProgram(gn.program)&&(Dr=!0,_n=!0,Ls=!0),z.id!==q&&(q=z.id,_n=!0),Dr||G!==x){re.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),xt.setValue(b,"projectionMatrix",x.projectionMatrix),xt.setValue(b,"viewMatrix",x.matrixWorldInverse);const ln=xt.map.cameraPosition;ln!==void 0&&ln.setValue(b,qe.setFromMatrixPosition(x.matrixWorld)),ke.logarithmicDepthBuffer&&xt.setValue(b,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&xt.setValue(b,"isOrthographic",x.isOrthographicCamera===!0),G!==x&&(G=x,_n=!0,Ls=!0)}if(Oe.needsLights&&(ut.state.directionalShadowMap.length>0&&xt.setValue(b,"directionalShadowMap",ut.state.directionalShadowMap,D),ut.state.spotShadowMap.length>0&&xt.setValue(b,"spotShadowMap",ut.state.spotShadowMap,D),ut.state.pointShadowMap.length>0&&xt.setValue(b,"pointShadowMap",ut.state.pointShadowMap,D)),F.isSkinnedMesh){xt.setOptional(b,F,"bindMatrix"),xt.setOptional(b,F,"bindMatrixInverse");const Qt=F.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),xt.setValue(b,"boneTexture",Qt.boneTexture,D))}F.isBatchedMesh&&(xt.setOptional(b,F,"batchingTexture"),xt.setValue(b,"batchingTexture",F._matricesTexture,D),xt.setOptional(b,F,"batchingIdTexture"),xt.setValue(b,"batchingIdTexture",F._indirectTexture,D),xt.setOptional(b,F,"batchingColorTexture"),F._colorsTexture!==null&&xt.setValue(b,"batchingColorTexture",F._colorsTexture,D));const Cn=V.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&je.update(F,V,gn),(_n||Oe.receiveShadow!==F.receiveShadow)&&(Oe.receiveShadow=F.receiveShadow,xt.setValue(b,"receiveShadow",F.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(cn.envMap.value=Te,cn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&I.environment!==null&&(cn.envMapIntensity.value=I.environmentIntensity),cn.dfgLUT!==void 0&&(cn.dfgLUT.value=UM()),_n&&(xt.setValue(b,"toneMappingExposure",v.toneMappingExposure),Oe.needsLights&&j0(cn,Ls),he&&z.fog===!0&&ze.refreshFogUniforms(cn,he),ze.refreshMaterialUniforms(cn,z,Ge,Xe,w.state.transmissionRenderTarget[x.id]),co.upload(b,zh(Oe),cn,D)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(co.upload(b,zh(Oe),cn,D),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&xt.setValue(b,"center",F.center),xt.setValue(b,"modelViewMatrix",F.modelViewMatrix),xt.setValue(b,"normalMatrix",F.normalMatrix),xt.setValue(b,"modelMatrix",F.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Qt=z.uniformsGroups;for(let ln=0,ic=Qt.length;ln<ic;ln++){const cr=Qt[ln];ne.update(cr,gn),ne.bind(cr,gn)}}return gn}function j0(x,I){x.ambientLightColor.needsUpdate=I,x.lightProbe.needsUpdate=I,x.directionalLights.needsUpdate=I,x.directionalLightShadows.needsUpdate=I,x.pointLights.needsUpdate=I,x.pointLightShadows.needsUpdate=I,x.spotLights.needsUpdate=I,x.spotLightShadows.needsUpdate=I,x.rectAreaLights.needsUpdate=I,x.hemisphereLights.needsUpdate=I}function Z0(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(x,I,V){const z=g.get(x);z.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),g.get(x.texture).__webglTexture=I,g.get(x.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:V,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,I){const V=g.get(x);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0};const J0=b.createFramebuffer();this.setRenderTarget=function(x,I=0,V=0){O=x,P=I,k=V;let z=null,F=!1,he=!1;if(x){const ge=g.get(x);if(ge.__useDefaultFramebuffer!==void 0){re.bindFramebuffer(b.FRAMEBUFFER,ge.__webglFramebuffer),H.copy(x.viewport),B.copy(x.scissor),$=x.scissorTest,re.viewport(H),re.scissor(B),re.setScissorTest($),q=-1;return}else if(ge.__webglFramebuffer===void 0)D.setupRenderTarget(x);else if(ge.__hasExternalTextures)D.rebindTextures(x,g.get(x.texture).__webglTexture,g.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ve=x.depthTexture;if(ge.__boundDepthTexture!==Ve){if(Ve!==null&&g.has(Ve)&&(x.width!==Ve.image.width||x.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(x)}}const Te=x.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(he=!0);const Le=g.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Le[I])?z=Le[I][V]:z=Le[I],F=!0):x.samples>0&&D.useMultisampledRTT(x)===!1?z=g.get(x).__webglMultisampledFramebuffer:Array.isArray(Le)?z=Le[V]:z=Le,H.copy(x.viewport),B.copy(x.scissor),$=x.scissorTest}else H.copy(Y).multiplyScalar(Ge).floor(),B.copy(Q).multiplyScalar(Ge).floor(),$=Se;if(V!==0&&(z=J0),re.bindFramebuffer(b.FRAMEBUFFER,z)&&re.drawBuffers(x,z),re.viewport(H),re.scissor(B),re.setScissorTest($),F){const ge=g.get(x.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+I,ge.__webglTexture,V)}else if(he){const ge=I;for(let Te=0;Te<x.textures.length;Te++){const Le=g.get(x.textures[Te]);b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0+Te,Le.__webglTexture,V,ge)}}else if(x!==null&&V!==0){const ge=g.get(x.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,ge.__webglTexture,V)}q=-1},this.readRenderTargetPixels=function(x,I,V,z,F,he,Me,ge=0){if(!(x&&x.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=g.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){re.bindFramebuffer(b.FRAMEBUFFER,Te);try{const Le=x.textures[ge],Ve=Le.format,Fe=Le.type;if(!ke.textureFormatReadable(Ve)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(Fe)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=x.width-z&&V>=0&&V<=x.height-F&&(x.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+ge),b.readPixels(I,V,z,F,ie.convert(Ve),ie.convert(Fe),he))}finally{const Le=O!==null?g.get(O).__webglFramebuffer:null;re.bindFramebuffer(b.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(x,I,V,z,F,he,Me,ge=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=g.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te)if(I>=0&&I<=x.width-z&&V>=0&&V<=x.height-F){re.bindFramebuffer(b.FRAMEBUFFER,Te);const Le=x.textures[ge],Ve=Le.format,Fe=Le.type;if(!ke.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Je),b.bufferData(b.PIXEL_PACK_BUFFER,he.byteLength,b.STREAM_READ),x.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+ge),b.readPixels(I,V,z,F,ie.convert(Ve),ie.convert(Fe),0);const mt=O!==null?g.get(O).__webglFramebuffer:null;re.bindFramebuffer(b.FRAMEBUFFER,mt);const Ct=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await a1(b,Ct,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Je),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,he),b.deleteBuffer(Je),b.deleteSync(Ct),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,I=null,V=0){const z=Math.pow(2,-V),F=Math.floor(x.image.width*z),he=Math.floor(x.image.height*z),Me=I!==null?I.x:0,ge=I!==null?I.y:0;D.setTexture2D(x,0),b.copyTexSubImage2D(b.TEXTURE_2D,V,0,0,Me,ge,F,he),re.unbindTexture()};const $0=b.createFramebuffer(),Q0=b.createFramebuffer();this.copyTextureToTexture=function(x,I,V=null,z=null,F=0,he=null){he===null&&(F!==0?(ca("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=F,F=0):he=0);let Me,ge,Te,Le,Ve,Fe,Je,mt,Ct;const Pt=x.isCompressedTexture?x.mipmaps[he]:x.image;if(V!==null)Me=V.max.x-V.min.x,ge=V.max.y-V.min.y,Te=V.isBox3?V.max.z-V.min.z:1,Le=V.min.x,Ve=V.min.y,Fe=V.isBox3?V.min.z:0;else{const Cn=Math.pow(2,-F);Me=Math.floor(Pt.width*Cn),ge=Math.floor(Pt.height*Cn),x.isDataArrayTexture?Te=Pt.depth:x.isData3DTexture?Te=Math.floor(Pt.depth*Cn):Te=1,Le=0,Ve=0,Fe=0}z!==null?(Je=z.x,mt=z.y,Ct=z.z):(Je=0,mt=0,Ct=0);const gt=ie.convert(I.format),Oe=ie.convert(I.type);let ut;I.isData3DTexture?(D.setTexture3D(I,0),ut=b.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(D.setTexture2DArray(I,0),ut=b.TEXTURE_2D_ARRAY):(D.setTexture2D(I,0),ut=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,I.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,I.unpackAlignment);const st=b.getParameter(b.UNPACK_ROW_LENGTH),gn=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Dr=b.getParameter(b.UNPACK_SKIP_PIXELS),_n=b.getParameter(b.UNPACK_SKIP_ROWS),Ls=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,Pt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Pt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Le),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ve),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Fe);const xt=x.isDataArrayTexture||x.isData3DTexture,cn=I.isDataArrayTexture||I.isData3DTexture;if(x.isDepthTexture){const Cn=g.get(x),Qt=g.get(I),ln=g.get(Cn.__renderTarget),ic=g.get(Qt.__renderTarget);re.bindFramebuffer(b.READ_FRAMEBUFFER,ln.__webglFramebuffer),re.bindFramebuffer(b.DRAW_FRAMEBUFFER,ic.__webglFramebuffer);for(let cr=0;cr<Te;cr++)xt&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,g.get(x).__webglTexture,F,Fe+cr),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,g.get(I).__webglTexture,he,Ct+cr)),b.blitFramebuffer(Le,Ve,Me,ge,Je,mt,Me,ge,b.DEPTH_BUFFER_BIT,b.NEAREST);re.bindFramebuffer(b.READ_FRAMEBUFFER,null),re.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(F!==0||x.isRenderTargetTexture||g.has(x)){const Cn=g.get(x),Qt=g.get(I);re.bindFramebuffer(b.READ_FRAMEBUFFER,$0),re.bindFramebuffer(b.DRAW_FRAMEBUFFER,Q0);for(let ln=0;ln<Te;ln++)xt?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Cn.__webglTexture,F,Fe+ln):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Cn.__webglTexture,F),cn?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Qt.__webglTexture,he,Ct+ln):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Qt.__webglTexture,he),F!==0?b.blitFramebuffer(Le,Ve,Me,ge,Je,mt,Me,ge,b.COLOR_BUFFER_BIT,b.NEAREST):cn?b.copyTexSubImage3D(ut,he,Je,mt,Ct+ln,Le,Ve,Me,ge):b.copyTexSubImage2D(ut,he,Je,mt,Le,Ve,Me,ge);re.bindFramebuffer(b.READ_FRAMEBUFFER,null),re.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else cn?x.isDataTexture||x.isData3DTexture?b.texSubImage3D(ut,he,Je,mt,Ct,Me,ge,Te,gt,Oe,Pt.data):I.isCompressedArrayTexture?b.compressedTexSubImage3D(ut,he,Je,mt,Ct,Me,ge,Te,gt,Pt.data):b.texSubImage3D(ut,he,Je,mt,Ct,Me,ge,Te,gt,Oe,Pt):x.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,he,Je,mt,Me,ge,gt,Oe,Pt.data):x.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,he,Je,mt,Pt.width,Pt.height,gt,Pt.data):b.texSubImage2D(b.TEXTURE_2D,he,Je,mt,Me,ge,gt,Oe,Pt);b.pixelStorei(b.UNPACK_ROW_LENGTH,st),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,gn),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Dr),b.pixelStorei(b.UNPACK_SKIP_ROWS,_n),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ls),he===0&&I.generateMipmaps&&b.generateMipmap(ut),re.unbindTexture()},this.initRenderTarget=function(x){g.get(x).__webglFramebuffer===void 0&&D.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?D.setTextureCube(x,0):x.isData3DTexture?D.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?D.setTexture2DArray(x,0):D.setTexture2D(x,0),re.unbindTexture()},this.resetState=function(){P=0,k=0,O=null,re.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),n.unpackColorSpace=it._getUnpackColorSpace()}}class FM{constructor(e){this.canvas=e,this.renderer=new NM({canvas:this.canvas,alpha:!0,antialias:!0}),this.scene=new K1,this.camera=new Fn(50,1,.1,1e3);const n=new Bv(16777215,0,1.5);this.scene.add(n),this.glasses=new Ws,this.createGlassesGeo(),this.scene.add(this.glasses),this.glasses.visible=!1}createGlassesGeo(){const e=new Cd({color:78368,emissive:4096,roughness:.1,metalness:.1,clearcoat:1,clearcoatRoughness:.1,reflectivity:1}),n=new Cd({color:2105376,metalness:0,roughness:0,transmission:.5,thickness:.5,opacity:.8,transparent:!0,side:si}),i=new B0({color:16766720,metalness:1,roughness:.2}),r=new xo,s=6,a=4.5,o=2;r.moveTo(-s/2+o,a/2),r.lineTo(s/2-o,a/2),r.quadraticCurveTo(s/2,a/2,s/2,a/2-o),r.lineTo(s/2,-a/2+o),r.quadraticCurveTo(s/2,-a/2,s/2-o,-a/2),r.lineTo(-s/2+o,-a/2),r.quadraticCurveTo(-s/2,-a/2,-s/2,-a/2+o),r.lineTo(-s/2,a/2-o),r.quadraticCurveTo(-s/2,a/2,-s/2+o,a/2);const c=new xo,l=.8,u=s+l*2,h=a+l*2;c.moveTo(-u/2+o,h/2),c.lineTo(u/2-o,h/2),c.quadraticCurveTo(u/2,h/2,u/2,h/2-o),c.lineTo(u/2,-h/2+o),c.quadraticCurveTo(u/2,-h/2,u/2-o,-h/2),c.lineTo(-u/2+o,-h/2),c.quadraticCurveTo(-u/2,-h/2,-u/2,-h/2+o),c.lineTo(-u/2,h/2-o),c.quadraticCurveTo(-u/2,h/2,-u/2+o,h/2),c.holes.push(r);const d={steps:1,depth:.5,bevelEnabled:!0,bevelThickness:.3,bevelSize:.2,bevelSegments:4},p=new Ph(c,d),_=new hn(p,e);_.position.set(-s/2-1.5,0,0);const S=new Lh(r),m=new hn(S,n);m.position.set(-s/2-1.5,0,.2);const f=_.clone();f.position.set(s/2+1.5,0,0);const A=m.clone();A.position.set(s/2+1.5,0,.2);const T=new wh(.3,.3,3,16),E=new hn(T,e);E.rotation.z=Math.PI/2,E.position.set(0,.5,0);const w=new Cs(.5,1,.5),R=new hn(w,i);R.position.set(-s-2.5,1,-.5);const C=new hn(w,i);C.position.set(s+2.5,1,-.5),this.glasses.add(_,f,m,A,E,R,C),this.glasses.scale.set(.1,.1,.1)}resize(e,n){this.renderer.setSize(e,n),this.camera.aspect=e/n,this.camera.updateProjectionMatrix()}update(e){if(e&&e.length>0){this.glasses.visible||(this.glasses.visible=!0);const n=e[0][1],i=e[0][33],r=e[0][263];new U((n.x*2-1)*-1,(n.y*2-1)*-1,-n.z),this.canvas.width,this.canvas.height;const s=e[0][6],a=50,o=E1.degToRad(this.camera.fov),c=2*Math.tan(o/2)*a,l=c*this.camera.aspect,u=(s.x-.5)*l,h=(.5-s.y)*c,d=-a;this.glasses.position.set(u,h,d);const p=r.x-i.x,_=r.y-i.y,S=Math.sqrt(p*p+_*_),f=l*S*.13;this.glasses.scale.set(f,f,f);const A=Math.atan2(_,p);this.glasses.rotation.z=-A}else this.glasses.visible=!1;this.renderer.render(this.scene,this.camera)}}const qi=document.getElementById("input-video"),Za=document.getElementById("vto-canvas"),ep=document.getElementById("vto-start-btn"),Ja=document.getElementById("vto-access"),jc=document.getElementById("vto-loading");if(qi&&Za&&ep){let n=function(){const r=qi.videoWidth,s=qi.videoHeight;if(r&&s){const a=qi.getBoundingClientRect();Za.width=a.width,Za.height=a.height,e.resize(a.width,a.height)}},i=function(){const r=t.detect(qi);r&&r.faceLandmarks?e.update(r.faceLandmarks):e.update(null),requestAnimationFrame(i)};var VM=n,GM=i;const t=new A_,e=new FM(Za);ep.addEventListener("click",async()=>{Ja.style.opacity="0",Ja.style.pointerEvents="none",jc.style.opacity="1";try{await t.init();const r=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:1280},height:{ideal:720},facingMode:"user"}});qi.srcObject=r,qi.addEventListener("loadeddata",()=>{jc.style.opacity="0",qi.style.opacity="1",n(),window.addEventListener("resize",n),i()})}catch(r){console.error(r),alert("Error accessing camera or initializing AI. Please check permissions."),jc.style.opacity="0",Ja.style.opacity="1",Ja.style.pointerEvents="auto"}})}const zs=document.querySelector(".hero-title");zs&&zs.addEventListener("mousemove",t=>{const e=zs.getBoundingClientRect(),n=(t.clientX-e.left)/e.width*100,i=(t.clientY-e.top)/e.height*100;zs.style.setProperty("--x",`${n}%`),zs.style.setProperty("--y",`${i}%`)});const tp=document.querySelector(".site-header");window.addEventListener("scroll",()=>{window.scrollY>50?tp.classList.add("scrolled"):tp.classList.remove("scrolled")});console.log("Óptica S&V Landing Page Loaded");const OM=document.querySelector(".testimonial-track"),So=document.querySelectorAll(".nav-dot");let Dh=0;const X0=So.length;function Ih(t){OM.style.transform=`translateX(-${t*100}%)`,So.forEach(e=>e.classList.remove("active")),So[t].classList.add("active"),Dh=t}So.forEach((t,e)=>{t.addEventListener("click",()=>{Ih(e),BM()})});let np=setInterval(()=>{let t=(Dh+1)%X0;Ih(t)},5e3);function BM(){clearInterval(np),np=setInterval(()=>{let t=(Dh+1)%X0;Ih(t)},5e3)}const ip=document.querySelector(".mobile-toggle"),rp=document.querySelector(".nav-mobile"),Zc=document.querySelector(".overlay");ip&&(ip.addEventListener("click",()=>{rp.classList.toggle("active"),Zc.classList.toggle("active")}),Zc.addEventListener("click",()=>{rp.classList.remove("active"),Zc.classList.remove("active")}));const kM=document.querySelectorAll(".reveal, .section-title, .value-card, .service-card, .testimonial-card, .hero-content"),zM=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting?e.target.classList.add("active"):e.target.classList.remove("active")})},{threshold:.15,rootMargin:"0px 0px -50px 0px"});kM.forEach(t=>{t.classList.add("reveal"),zM.observe(t)});
