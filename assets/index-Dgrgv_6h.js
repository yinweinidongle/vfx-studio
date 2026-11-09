const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/aura-D5t-nTjX.js","assets/kit-TXKnCP5u.js","assets/textures-DdZe6I7R.js","assets/geometry-ZkWW22uO.js","assets/sword-Dkvas5Vw.js","assets/fireworks-CDQYSEi3.js","assets/portal-zrsulfDa.js","assets/waterfall-paheCxvf.js","assets/lightning-DhfG-TuN.js","assets/LightningStrike-DJxKzaAz.js","assets/explosion-CXA4Ir16.js","assets/projectile-rhk2LF69.js","assets/beam-BXzB4lFj.js","assets/blackhole-DcipRc9n.js","assets/aurora-WZazNr1a.js","assets/meteor-fFTUF0a0.js"])))=>i.map(i=>d[i]);
import{$ as e,A as t,An as n,Bn as r,C as i,D as a,Dn as o,E as s,En as c,F as l,Fn as u,G as d,Gn as f,Hn as p,I as m,In as h,J as g,Jn as _,K as v,Kn as y,L as b,Ln as x,Mn as S,N as C,Nn as w,O as T,On as E,P as D,Pn as O,Q as k,Qt as A,R as j,Rn as M,S as N,Sn as P,T as F,Tn as I,Un as ee,V as L,Vn as te,Wn as R,X as ne,Xn as z,Xt as re,Y as ie,Yn as ae,Zn as oe,Zt as se,_n as ce,a as le,at as ue,b as de,bn as fe,bt as pe,c as me,cn as he,ct as ge,dn as _e,dt as ve,en as ye,et as be,f as xe,h as Se,hn as Ce,ht as we,i as Te,it as Ee,jn as De,k as Oe,kn as B,l as ke,ln as Ae,lt as je,m as Me,mn as Ne,nn as Pe,nt as Fe,ot as Ie,p as Le,pn as Re,q as ze,qn as Be,rt as Ve,st as V,t as He,tn as Ue,tt as We,un as H,ut as Ge,v as U,vn as W,wn as Ke,x as qe,y as Je,yn as Ye,yt as Xe,zn as Ze}from"./textures-DdZe6I7R.js";var Qe=Object.create,$e=Object.defineProperty,et=Object.getOwnPropertyDescriptor,tt=Object.getOwnPropertyNames,nt=Object.getPrototypeOf,rt=Object.prototype.hasOwnProperty,it=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),at=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(var i=tt(t),a=0,o=i.length,s;a<o;a++)s=i[a],!rt.call(e,s)&&s!==n&&$e(e,s,{get:(e=>t[e]).bind(null,s),enumerable:!(r=et(t,s))||r.enumerable});return e},ot=(e,t,n)=>(n=e==null?{}:Qe(nt(e)),at(t||!e||!e.__esModule||!rt.call(e,`default`)?$e(n,`default`,{value:e,enumerable:!0}):n,e));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function st(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var G={},ct=[],lt=()=>{},ut=()=>!1,dt=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ft=e=>e.startsWith(`onUpdate:`),pt=Object.assign,mt=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},ht=Object.prototype.hasOwnProperty,K=(e,t)=>ht.call(e,t),q=Array.isArray,gt=e=>wt(e)===`[object Map]`,_t=e=>wt(e)===`[object Set]`,vt=e=>wt(e)===`[object Date]`,J=e=>typeof e==`function`,yt=e=>typeof e==`string`,bt=e=>typeof e==`symbol`,xt=e=>typeof e==`object`&&!!e,St=e=>(xt(e)||J(e))&&J(e.then)&&J(e.catch),Ct=Object.prototype.toString,wt=e=>Ct.call(e),Tt=e=>wt(e).slice(8,-1),Et=e=>wt(e)===`[object Object]`,Dt=e=>yt(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,Ot=st(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),kt=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},At=/-\w/g,jt=kt(e=>e.replace(At,e=>e.slice(1).toUpperCase())),Mt=/\B([A-Z])/g,Nt=kt(e=>e.replace(Mt,`-$1`).toLowerCase()),Pt=kt(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ft=kt(e=>e?`on${Pt(e)}`:``),It=(e,t)=>!Object.is(e,t),Lt=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Rt=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},zt=e=>{let t=parseFloat(e);return isNaN(t)?e:t},Bt,Vt=()=>Bt||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function Ht(e){if(q(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=yt(r)?Kt(r):Ht(r);if(i)for(let e in i)t[e]=i[e]}return t}if(yt(e)||xt(e))return e}var Ut=/;(?![^(]*\))/g,Wt=/:([^]+)/,Gt=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Kt(e){let t={};return e.replace(Gt,e=>e.startsWith(`/*`)?``:e).split(Ut).forEach(e=>{if(e){let n=e.split(Wt);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function qt(e){let t=``;if(yt(e))t=e;else if(q(e))for(let n=0;n<e.length;n++){let r=qt(e[n]);r&&(t+=r+` `)}else if(xt(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var Jt=st(`itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly`);function Yt(e){return!!e||e===``}function Xt(e,t,n){if(e.length!==t.length)return!1;let r=!0;for(let i=0;r&&i<e.length;i++)r=en(e[i],t[i],n);return r}function Zt(e,t,n){if(e.size!==t.size)return!1;let r=Array.from(t),i=new Uint8Array(r.length);for(let t of e){let e=-1;for(let a=0;a<r.length;a++)if(!i[a]&&en(t,r[a],n)){e=a;break}if(e<0)return!1;i[e]=1}return!0}function Qt(e,t,n){let r=gt(e),i=gt(t);if(r||i||(r=_t(e),i=_t(t),r||i))return r&&i?Zt(e,t,n):!1;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let r in e){let i=e.hasOwnProperty(r),a=t.hasOwnProperty(r);if(i&&!a||!i&&a||!en(e[r],t[r],n))return!1}return String(e)===String(t)}function $t(e,t,n,r){n||=[new Map,new Map];let[i,a]=n;if(i.has(e)||a.has(t))return i.get(e)===t&&a.get(t)===e;i.set(e,t),a.set(t,e);let o=r(e,t,n);return i.delete(e),a.delete(t),o}function en(e,t,n){if(e===t)return!0;let r=vt(e),i=vt(t);return r||i?r&&i?e.getTime()===t.getTime():!1:(r=bt(e),i=bt(t),r||i?e===t:(r=q(e),i=q(t),r||i?r&&i?$t(e,t,n,Xt):!1:(r=xt(e),i=xt(t),r||i?!r||!i?!1:$t(e,t,n,Qt):String(e)===String(t))))}var tn=e=>!!(e&&e.__v_isRef===!0),nn=e=>yt(e)?e:e==null?``:q(e)||xt(e)&&(e.toString===Ct||!J(e.toString))?tn(e)?nn(e.value):JSON.stringify(e,rn,2):String(e),rn=(e,t)=>tn(t)?rn(e,t.value):gt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[an(t,r)+` =>`]=n,e),{})}:_t(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>an(e))}:bt(t)?an(t):xt(t)&&!q(t)&&!Et(t)?String(t):t,an=(e,t=``)=>bt(e)?`Symbol(${e.description??t})`:e,on,sn=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&on&&(on.active?(this.parent=on,this.index=(on.scopes||(on.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}let n=this.effects.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}}run(e){if(this._active){let t=on;try{return on=this,e()}finally{on=t}}}on(){++this._on===1&&(this.prevScope=on,on=this)}off(){if(this._on>0&&--this._on===0){if(on===this)on=this.prevScope;else{let e=on;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){let e=this.scopes.slice();for(t=0,n=e.length;t<n;t++)e[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function cn(){return on}var ln,un=new WeakSet,dn=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,on&&(on.active?on.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,un.has(this)&&(un.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||hn(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,On(this),vn(this);let e=ln,t=wn;ln=this,wn=!0;try{return this.fn()}finally{yn(this),ln=e,wn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Sn(e);this.deps=this.depsTail=void 0,On(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?un.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){bn(this)&&this.run()}get dirty(){return bn(this)}},fn=0,pn,mn;function hn(e,t=!1){e.flags|=8,t?(e.next=mn,mn=e):(e.next=pn,pn=e)}function gn(){fn++}function _n(){if(--fn>0)return;if(mn){let e=mn;for(mn=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;pn;){let t=pn;for(pn=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function vn(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function yn(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Sn(r),Cn(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function bn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(xn(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function xn(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===kn)||(e.globalVersion=kn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!bn(e))))return;e.flags|=2;let t=e.dep,n=ln,r=wn;ln=e,wn=!0;try{vn(e);let n=e.fn(e._value);(t.version===0||It(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{ln=n,wn=r,yn(e),e.flags&=-3}}function Sn(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Sn(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Cn(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var wn=!0,Tn=[];function En(){Tn.push(wn),wn=!1}function Dn(){let e=Tn.pop();wn=e===void 0||e}function On(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=ln;ln=void 0;try{t()}finally{ln=e}}}var kn=0,An=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},jn=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ln||!wn||ln===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ln)t=this.activeLink=new An(ln,this),ln.deps?(t.prevDep=ln.depsTail,ln.depsTail.nextDep=t,ln.depsTail=t):ln.deps=ln.depsTail=t,Mn(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=ln.depsTail,t.nextDep=void 0,ln.depsTail.nextDep=t,ln.depsTail=t,ln.deps===t&&(ln.deps=e)}return t}trigger(e){this.version++,kn++,this.notify(e)}notify(e){gn();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{_n()}}};function Mn(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)Mn(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var Nn=new WeakMap,Pn=Symbol(``),Fn=Symbol(``),In=Symbol(``);function Ln(e,t,n){if(wn&&ln){let t=Nn.get(e);t||Nn.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new jn),r.map=t,r.key=n),r.track()}}function Rn(e,t,n,r,i,a){let o=Nn.get(e);if(!o){kn++;return}let s=e=>{e&&e.trigger()};if(gn(),t===`clear`)o.forEach(s);else{let i=q(e),a=i&&Dt(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===In||!bt(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(In)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(Pn)),gt(e)&&s(o.get(Fn)));break;case`delete`:i||(s(o.get(Pn)),gt(e)&&s(o.get(Fn)));break;case`set`:gt(e)&&s(o.get(Pn))}}_n()}function zn(e){let t=Dr(e);return t===e||(Ln(t,`iterate`,In),Tr(e))?t:wr(e)?Cr(e)?t.map(e=>Ar(kr(e))):t.map(Ar):t.map(kr)}function Bn(e){return Ln(e=Dr(e),`iterate`,In),e}function Vn(e,t){return wr(e)?Ar(Cr(e)?kr(t):t):kr(t)}var Hn={__proto__:null,[Symbol.iterator](){return Un(this,Symbol.iterator,e=>Vn(this,e))},concat(...e){return zn(this).concat(...e.map(e=>q(e)?zn(e):e))},entries(){return Un(this,`entries`,e=>(e[1]=Vn(this,e[1]),e))},every(e,t){return Kn(this,`every`,e,t,void 0,arguments)},filter(e,t){return Kn(this,`filter`,e,t,e=>e.map(e=>Vn(this,e)),arguments)},find(e,t){return Kn(this,`find`,e,t,e=>Vn(this,e),arguments)},findIndex(e,t){return Kn(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return Kn(this,`findLast`,e,t,e=>Vn(this,e),arguments)},findLastIndex(e,t){return Kn(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return Kn(this,`forEach`,e,t,void 0,arguments)},includes(...e){return Jn(this,`includes`,e)},indexOf(...e){return Jn(this,`indexOf`,e)},join(e){return zn(this).join(e)},lastIndexOf(...e){return Jn(this,`lastIndexOf`,e)},map(e,t){return Kn(this,`map`,e,t,void 0,arguments)},pop(){return Yn(this,`pop`)},push(...e){return Yn(this,`push`,e)},reduce(e,...t){return qn(this,`reduce`,e,t)},reduceRight(e,...t){return qn(this,`reduceRight`,e,t)},shift(){return Yn(this,`shift`)},some(e,t){return Kn(this,`some`,e,t,void 0,arguments)},splice(...e){return Yn(this,`splice`,e)},toReversed(){return zn(this).toReversed()},toSorted(e){return zn(this).toSorted(e)},toSpliced(...e){return zn(this).toSpliced(...e)},unshift(...e){return Yn(this,`unshift`,e)},values(){return Un(this,`values`,e=>Vn(this,e))}};function Un(e,t,n){let r=Bn(e),i=r[t],a=i.call(r);if(r!==e&&!Tr(e)){if(a[Symbol.toStringTag]===`Array Iterator`){let e=Object.create(Object.getPrototypeOf(a));return e.next=()=>Wn(a.next(),n),i!==Gn[t]&&Object.defineProperties(e,{return:{get(){let e=a.return;return typeof e==`function`?e.bind(a):e}},throw:{get(){let e=a.throw;return typeof e==`function`?e.bind(a):e}}}),e}a._next=a.next,a.next=()=>Wn(a._next(),n)}return a}function Wn(e,t){return e.done||(e.value=t(e.value)),e}var Gn=Array.prototype;function Kn(e,t,n,r,i,a){let o=Bn(e),s=o!==e&&!Tr(e),c=o[t];if(c!==Gn[t]){let t=c.apply(e,a);return s?kr(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,Vn(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function qn(e,t,n,r){let i=Bn(e),a=i!==e&&!Tr(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=Vn(e,t)),n.call(this,t,Vn(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?Vn(e,c):c}function Jn(e,t,n){let r=Dr(e);Ln(r,`iterate`,In);let i=r[t](...n);return(i===-1||i===!1)&&Er(n[0])?(n[0]=Dr(n[0]),r[t](...n)):i}function Yn(e,t,n=[]){En(),gn();let r=Dr(e)[t].apply(e,n);return _n(),Dn(),r}var Xn=st(`__proto__,__v_isRef,__isVue`),Zn=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(bt));function Qn(e){bt(e)||(e=String(e));let t=Dr(this);return Ln(t,`has`,e),t.hasOwnProperty(e)}var $n=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?_r:gr:i?hr:mr).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=q(e);if(!r){let e;if(a&&(e=Hn[t]))return e;if(t===`hasOwnProperty`)return Qn}let o=Reflect.get(e,t,jr(e)?e:n);if((bt(t)?Zn.has(t):Xn(t))||(r||Ln(e,`get`,t),i))return o;if(jr(o)){let e=a&&Dt(t)?o:o.value;return r&&xt(e)?xr(e):e}return xt(o)?r?xr(o):yr(o):o}},er=class extends $n{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=q(e)&&Dt(t);if(!this._isShallow){let e=wr(i);if(!Tr(n)&&!wr(n)&&(i=Dr(i),n=Dr(n)),!a&&jr(i)&&!jr(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:K(e,t),s=Reflect.set(e,t,n,jr(e)?e:r);return e===Dr(r)&&s&&(o?It(n,i)&&Rn(e,`set`,t,n,i):Rn(e,`add`,t,n)),s}deleteProperty(e,t){let n=K(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&Rn(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return bt(t)&&Zn.has(t)||Ln(e,`has`,t),n}ownKeys(e){return Ln(e,`iterate`,q(e)?`length`:Pn),Reflect.ownKeys(e)}},tr=class extends $n{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},nr=new er,rr=new tr,ir=new er(!0),ar=e=>e,or=e=>Reflect.getPrototypeOf(e);function sr(e,t,n){return function(...r){let i=this.__v_raw,a=Dr(i),o=gt(a),s=e===`entries`||e===Symbol.iterator&&o,c=e===`keys`&&o,l=i[e](...r),u=n?ar:t?Ar:kr;return!t&&Ln(a,`iterate`,c?Fn:Pn),pt(Object.create(l),{next(){let{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:s?[u(e[0]),u(e[1])]:u(e),done:t}}})}}function cr(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function lr(e,t){let n={get(n){let r=this.__v_raw,i=Dr(r),a=Dr(n);e||(It(n,a)&&Ln(i,`get`,n),Ln(i,`get`,a));let{has:o}=or(i),s=t?ar:e?Ar:kr;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&Ln(Dr(t),`iterate`,Pn),t.size},has(t){let n=this.__v_raw,r=Dr(n),i=Dr(t);return e||(It(t,i)&&Ln(r,`has`,t),Ln(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=Dr(a),s=t?ar:e?Ar:kr;return!e&&Ln(o,`iterate`,Pn),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return pt(n,e?{add:cr(`add`),set:cr(`set`),delete:cr(`delete`),clear:cr(`clear`)}:{add(e){let n=Dr(this),r=or(n),i=Dr(e),a=!t&&!Tr(e)&&!wr(e)?i:e;return r.has.call(n,a)||It(e,a)&&r.has.call(n,e)||It(i,a)&&r.has.call(n,i)||(n.add(a),Rn(n,`add`,a,a)),this},set(e,n){t||Tr(n)||wr(n)||(n=Dr(n));let r=Dr(this),{has:i,get:a}=or(r),o=i.call(r,e);o||=(e=Dr(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?It(n,s)&&Rn(r,`set`,e,n,s):Rn(r,`add`,e,n),this},delete(e){let t=Dr(this),{has:n,get:r}=or(t),i=n.call(t,e);i||=(e=Dr(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&Rn(t,`delete`,e,void 0,a),o},clear(){let e=Dr(this),t=e.size!==0,n=e.clear();return t&&Rn(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=sr(r,e,t)}),n}function ur(e,t){let n=lr(e,t);return(r,i,a)=>i===`__v_isReactive`?!e:i===`__v_isReadonly`?e:i===`__v_isShallow`?t:i===`__v_raw`?r:Reflect.get(K(n,i)&&i in r?n:r,i,a)}var dr={get:ur(!1,!1)},fr={get:ur(!1,!0)},pr={get:ur(!0,!1)},mr=new WeakMap,hr=new WeakMap,gr=new WeakMap,_r=new WeakMap;function vr(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function yr(e){return wr(e)?e:Sr(e,!1,nr,dr,mr)}function br(e){return Sr(e,!1,ir,fr,hr)}function xr(e){return Sr(e,!0,rr,pr,gr)}function Sr(e,t,n,r,i){if(!xt(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;let a=i.get(e);if(a)return a;let o=vr(Tt(e));if(o===0)return e;let s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function Cr(e){return wr(e)?Cr(e.__v_raw):!!(e&&e.__v_isReactive)}function wr(e){return!!(e&&e.__v_isReadonly)}function Tr(e){return!!(e&&e.__v_isShallow)}function Er(e){return e?!!e.__v_raw:!1}function Dr(e){let t=e&&e.__v_raw;return t?Dr(t):e}function Or(e){return!K(e,`__v_skip`)&&Object.isExtensible(e)&&Rt(e,`__v_skip`,!0),e}var kr=e=>xt(e)?yr(e):e,Ar=e=>xt(e)?xr(e):e;function jr(e){return e?e.__v_isRef===!0:!1}function Mr(e){return Pr(e,!1)}function Nr(e){return Pr(e,!0)}function Pr(e,t){return jr(e)?e:new Fr(e,t)}var Fr=class{constructor(e,t){this.dep=new jn,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Dr(e),this._value=t?e:kr(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||Tr(e)||wr(e);e=n?e:Dr(e),It(e,t)&&(this._rawValue=e,this._value=n?e:kr(e),this.dep.trigger())}};function Y(e){return jr(e)?e.value:e}var Ir={get:(e,t,n)=>t===`__v_raw`?e:Y(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return jr(i)&&!jr(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Lr(e){return Cr(e)?e:new Proxy(e,Ir)}var Rr=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new jn(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=kn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&ln!==this)return hn(this,!0),!0}get value(){let e=this.dep.track();return xn(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function zr(e,t,n=!1){let r,i;return J(e)?r=e:(r=e.get,i=e.set),new Rr(r,i,n)}var Br={},Vr=new WeakMap,Hr=void 0;function Ur(e,t=!1,n=Hr){if(n){let t=Vr.get(n);t||Vr.set(n,t=[]),t.push(e)}}function Wr(e,t,n=G){let{immediate:r,deep:i,once:a,scheduler:o,augmentJob:s,call:c}=n,l=e=>i?e:Tr(e)||i===!1||i===0?Gr(e,1):Gr(e),u,d,f,p,m=!1,h=!1;if(jr(e)?(d=()=>e.value,m=Tr(e)):Cr(e)?(d=()=>l(e),m=!0):q(e)?(h=!0,m=e.some(e=>Cr(e)||Tr(e)),d=()=>e.map(e=>{if(jr(e))return e.value;if(Cr(e))return l(e);if(J(e))return c?c(e,2):e()})):d=J(e)?t?c?()=>c(e,2):e:()=>{if(f){En();try{f()}finally{Dn()}}let t=Hr;Hr=u;try{return c?c(e,3,[p]):e(p)}finally{Hr=t}}:lt,t&&i){let e=d,t=i===!0?1/0:i;d=()=>Gr(e(),t)}let g=cn(),_=()=>{u.stop(),g&&g.active&&mt(g.effects,u)};if(a&&t){let e=t;t=(...t)=>{try{return e(...t)}finally{_()}}}let v=h?Array(e.length).fill(Br):Br,y=e=>{if(u.flags&1&&(u.dirty||e)){if(t){let n=u.run();if(e||i||m||(h?n.some((e,t)=>It(e,v[t])):It(n,v))){let e=Hr;En();try{f&&f(),Hr=u;let e=[n,v===Br?void 0:h&&v[0]===Br?[]:v,p];v=n,c?c(t,3,e):t(...e)}finally{Hr=e,Dn()}}}else u.run()}};return s&&s(y),u=new dn(d),u.scheduler=o?()=>o(y,!1):y,p=e=>Ur(e,!1,u),f=u.onStop=()=>{let e=Vr.get(u);if(e){if(c)c(e,4);else for(let t of e)t();Vr.delete(u)}},t?r?y(!0):v=u.run():o?o(y.bind(null,!0),!0):u.run(),_.pause=u.pause.bind(u),_.resume=u.resume.bind(u),_.stop=_,_}function Gr(e,t=1/0,n){if(t<=0||!xt(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,jr(e))Gr(e.value,t,n);else if(q(e))for(let r=0;r<e.length;r++)Gr(e[r],t,n);else if(_t(e)||gt(e))e.forEach(e=>{Gr(e,t,n)});else if(Et(e)){for(let r in e)Gr(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Gr(e[r],t,n)}return e}function Kr(e,t,n,r){try{return r?e(...r):e()}catch(e){Jr(e,t,n)}}function qr(e,t,n,r){if(J(e)){let i=Kr(e,t,n,r);return i&&St(i)&&i.catch(e=>{Jr(e,t,n,void 0,!0)}),i}if(q(e)){let i=[];for(let a=0;a<e.length;a++)i.push(qr(e[a],t,n,r));return i}}function Jr(e,t,n,r=!0,i=!1){let a=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=t&&t.appContext.config||G;if(t){let r=t.parent,a=t.proxy,s=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){let t=r.ec;if(t&&!r.isUnmounted&&(!i||r.scope.active)){for(let n=0;n<t.length;n++)if(t[n](e,a,s)===!1)return}r=r.parent}if(o){En(),Kr(o,null,10,[e,a,s]),Dn();return}}Yr(e,n,a,r,s)}function Yr(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var Xr=[],Zr=-1,Qr=[],$r=null,ei=0,ti=Promise.resolve(),ni=null;function ri(e){let t=ni||ti;return e?t.then(this?e.bind(this):e):t}function ii(e){let t=Zr+1,n=Xr.length;for(;t<n;){let r=t+n>>>1,i=Xr[r],a=fi(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function ai(e){if(!(e.flags&1)){let t=fi(e),n=Xr[Xr.length-1];!n||!(e.flags&2)&&t>=fi(n)?Xr.push(e):Xr.splice(ii(t),0,e),e.flags|=1,oi()}}function oi(){ni||=ti.then(pi)}function si(e){if(!q(e))$r&&e.id===-1?$r.splice(ei+1,0,e):e.flags&1||(Qr.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)Qr.push(e[t]);oi()}function ci(e,t,n,r=Zr+1){for(;r<Xr.length;r++){let n=Xr[r];if(n&&n.flags&2){if(e&&n.id!==e.uid||t!==void 0&&!(n.id>=t))continue;Xr.splice(r,1),r=e?r-1:Zr,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function li(e,t,n=0){if(Qr.length){let e=Qr,r=0;if(t){e=[];for(let i=0;i<Qr.length;i++){let a=Qr[i];(a.i===void 0?t.has(a):!a.i||a.i.uid<n)?Qr[r++]=a:e.push(a)}}let i=[...new Set(e)].sort((e,t)=>fi(e)-fi(t));if(Qr.length=r,$r){for(let e=0;e<i.length;e++)$r.push(i[e]);return}for($r=i,ei=0;ei<$r.length;ei++){let e=$r[ei];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}$r=null,ei=0}}var ui=!1;function di(e,t){if(ui){e();return}let n=t===void 0?void 0:new Set(Qr);e(),ui=!0;try{ci(void 0,t),li(void 0,n,t)}finally{ui=!1}}var fi=e=>e.id==null?e.flags&2?-1:1/0:e.id;function pi(e){try{for(Zr=0;Zr<Xr.length;Zr++){let e=Xr[Zr];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Kr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Zr<Xr.length;Zr++){let e=Xr[Zr];e&&(e.flags&=-2)}Zr=-1,Xr.length=0,li(e),ni=null,(Xr.length||Qr.length)&&pi(e)}}var mi=null,hi=null;function gi(e){let t=mi;return mi=e,hi=e&&e.type.__scopeId||null,t}function _i(e,t=mi,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&Io(-1);let i=gi(t),a=jo.length,o;try{o=e(...n)}finally{for(let e=jo.length;e>a;e--)Po();gi(i),r._d&&Io(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function vi(e,t){if(mi===null)return e;let n=bs(mi),r=e.dirs||=[];for(let e=0;e<t.length;e++){let[i,a,o,s=G]=t[e];i&&(J(i)&&(i={mounted:i,updated:i}),i.deep&&Gr(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:o,modifiers:s}))}return e}function yi(e,t,n,r){let i=e;if(r===`beforeMount`)e._mount=e;else if(r===`beforeUpdate`){let n=t&&t._mount;n&&(n._latest=e,e._mount=n)}else if(r===`mounted`){let t=e._latest;e._mount=e._latest=void 0,t&&(i=t,t._mount=void 0)}let a=i.dirs,o=t&&t.dirs;for(let s=0;s<a.length;s++){let c=a[s];o?c.oldValue=o[s].value:r===`mounted`&&c.oldValue!==void 0&&(c=pt({},c,{oldValue:void 0}));let l=c.dir[r];l&&(En(),qr(l,n,8,[e.el,c,i,t]),Dn())}}function bi(e,t){if(as){let n=as.provides,r=as.parent&&as.parent.provides;r===n&&(n=as.provides=Object.create(r)),n[e]=t}}function xi(e,t,n=!1){let r=os();if(r||Pa){let i=Pa?Pa._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&J(t)?t.call(r&&r.proxy):t}}var Si=Symbol.for(`v-scx`),Ci=()=>xi(Si);function wi(e,t,n){return Ti(e,t,n)}function Ti(e,t,n=G){let{immediate:r,deep:i,flush:a,once:o}=n,s=pt({},n),c=t&&r||!t&&a!==`post`,l;if(fs){if(a===`sync`){let e=Ci();l=e.__watcherHandles||=[]}else if(!c){let e=()=>{};return e.stop=lt,e.resume=lt,e.pause=lt,e}}let u=as;s.call=(e,t,n)=>qr(e,u,t,n);let d=!1;a===`post`?s.scheduler=e=>{e.i=u,po(e,u&&u.suspense)}:a!==`sync`&&(d=!0,s.scheduler=(e,t)=>{t?e():ai(e)}),s.augmentJob=e=>{t&&(e.flags|=4),d&&(e.flags|=2,u&&(e.id=u.uid,e.i=u))};let f=Wr(e,t,s);return fs&&(l?l.push(f):c&&f()),f}function Ei(e,t,n){let r=this.proxy,i=yt(e)?e.includes(`.`)?Di(r,e):()=>r[e]:e.bind(r,r),a;J(t)?a=t:(a=t.handler,n=t);let o=ls(this),s=Ti(i,a.bind(r),n);return o(),s}function Di(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var Oi=Symbol(`_vte`),ki=e=>e.__isTeleport,Ai=Symbol(`_leaveCb`);function ji(e){let t=e[0];if(e.length>1){for(let n of e)if(n.type!==ko){t=n;break}}return t}function Mi(e){if(!Hi(e))return ki(e.type)&&e.children?ji(e.children):e;if(e.component)return e.component.subTree;let{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&J(n.default))return n.default()}}function Ni(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;let n=e.component.subTree;Ni(ki(n.type)&&Mi(n)||n,t)}else if(e.shapeFlag&128){let n=e.suspense;if(n){let e=n.isHydrating?n.pendingBranch:n.activeBranch;e&&Ni(e,t.clone(e))}else e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)}else if(e.transition=t,e.type===Do&&q(e.children)){let n=Va(e.children,!1);n&&Ni(n,t)}}function Pi(e){if(e.component)return Pi(e.component.subTree);if(e.type===Do){let t=q(e.children)&&Va(e.children,!1);return t?Pi(t):void 0}if(e.type!==ko)return e}function Fi(e,t){return J(e)?pt({name:e.name},t,{setup:e}):e}function Ii(e){e.ids=[e.ids[0]+e.ids[2]+++`-`,0,0]}function Li(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var Ri=new WeakMap;function zi(e,t,n,r,i=!1){if(q(e)){e.forEach((e,a)=>zi(e,t&&(q(t)?t[a]:t),n,r,i));return}if(Vi(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&zi(e,t,n,r.component.subTree);return}let a=r.shapeFlag&4?bs(r.component):r.el,o=i?null:a,{i:s,r:c}=e,l=t&&t.r,u=s.refs===G?s.refs={}:s.refs,d=s.setupState,f=Dr(d),p=d===G?ut:e=>!Li(u,e)&&K(f,e),m=(e,t)=>!(t&&Li(u,t));if(l!=null&&l!==c){if(Bi(t),yt(l))u[l]=null,p(l)&&(d[l]=null);else if(jr(l)){let e=t;m(l,e.k)&&(l.value=null),e.k&&(u[e.k]=null)}}if(J(c))Kr(c,s,12,[o,u]);else{let t=yt(c),r=jr(c);if(t||r){let s=()=>{if(e.f){let n=t?p(c)?d[c]:u[c]:m(c)||!e.k?c.value:u[e.k];if(i)q(n)&&mt(n,a);else if(q(n))n.includes(a)||n.push(a);else if(t)u[c]=[a],p(c)&&(d[c]=u[c]);else{let t=[a];m(c,e.k)&&(c.value=t),e.k&&(u[e.k]=t)}}else t?(u[c]=o,p(c)&&(d[c]=o)):r&&(m(c,e.k)&&(c.value=o),e.k&&(u[e.k]=o))};if(o){let t=()=>{s(),Ri.delete(e)};t.id=-1,Ri.set(e,t),po(t,n)}else Bi(e),s()}}}function Bi(e){let t=Ri.get(e);t&&(t.flags|=8,Ri.delete(e))}Vt().requestIdleCallback,Vt().cancelIdleCallback;var Vi=e=>!!e.type.__asyncLoader,Hi=e=>e.type.__isKeepAlive;function Ui(e,t){Gi(e,`a`,t)}function Wi(e,t){Gi(e,`da`,t)}function Gi(e,t,n=as){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(qi(t,r,n),n){let e=n.parent;for(;e&&e.parent;)Hi(e.parent.vnode)&&Ki(r,t,n,e),e=e.parent}}function Ki(e,t,n,r){let i=qi(t,e,r,!0),a=qi(`um`,()=>mt(r[t],i),n);a.flags=16}function qi(e,t,n=as,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{En();let i=ls(n),a=qr(t,n,e,r);return i(),Dn(),a};return r?i.unshift(a):i.push(a),a}}var Ji=e=>(t,n=as)=>{fs&&e!==`sp`||qi(e,(...e)=>t(...e),n)},Yi=Ji(`bm`),Xi=Ji(`m`),Zi=Ji(`bu`),Qi=Ji(`u`),$i=Ji(`bum`),ea=Ji(`um`),ta=Ji(`sp`),na=Ji(`rtg`),ra=Ji(`rtc`);function ia(e,t=as){qi(`ec`,e,t)}var aa=`components`;function oa(e,t){return ca(aa,e,!0,t)||e}var sa=Symbol.for(`v-ndc`);function ca(e,t,n=!0,r=!1){let i=mi||as;if(i){let n=i.type;if(e===aa){let e=xs(n,!1);if(e&&(e===t||e===jt(t)||e===Pt(jt(t))))return n}let a=la(i[e]||n[e],t)||la(i.appContext[e],t);return!a&&r?n:a}}function la(e,t){return e&&(e[t]||e[jt(t)]||e[Pt(jt(t))])}function ua(e,t,n,r){let i,a=n&&n[r],o=q(e);if(o||yt(e)){let n=o&&Cr(e),r=!1,s=!1;n&&(r=!Tr(e),s=wr(e),e=Bn(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?Ar(kr(e[n])):kr(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){if(!Number.isInteger(e)||e<0)i=[];else{i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}}else if(xt(e)){if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}}else i=[];return n&&(n[r]=i),i}var da=e=>e?ds(e)?bs(e):da(e.parent):null,fa=pt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>da(e.parent),$root:e=>da(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>xa(e),$forceUpdate:e=>e.f||=()=>{ai(e.update)},$nextTick:e=>e.n||=ri.bind(e.proxy),$watch:e=>Ei.bind(e)}),pa=(e,t)=>e!==G&&!e.__isScriptSetup&&K(e,t),ma={get({_:e},t){if(t===`__v_skip`)return!0;let{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:c}=e;if(t[0]!==`$`){let e=o[t];if(e!==void 0)switch(e){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else if(pa(r,t))return o[t]=1,r[t];else if(i!==G&&K(i,t))return o[t]=2,i[t];else if(K(a,t))return o[t]=3,a[t];else if(n!==G&&K(n,t))return o[t]=4,n[t];else ga&&(o[t]=0)}let l=fa[t],u,d;if(l)return t===`$attrs`&&Ln(e.attrs,`get`,``),l(e);if((u=s.__cssModules)&&(u=u[t]))return u;if(n!==G&&K(n,t))return o[t]=4,n[t];if(d=c.config.globalProperties,K(d,t))return d[t]},set({_:e},t,n){let{data:r,setupState:i,ctx:a}=e;return pa(i,t)?(i[t]=n,!0):r!==G&&K(r,t)?(r[t]=n,!0):K(e.props,t)||t[0]===`$`&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,props:a,type:o}},s){let c;return!!(n[s]||e!==G&&s[0]!==`$`&&K(e,s)||pa(t,s)||K(a,s)||K(r,s)||K(fa,s)||K(i.config.globalProperties,s)||(c=o.__cssModules)&&c[s])},defineProperty(e,t,n){return n.get==null?K(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function ha(e){return q(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var ga=!0;function _a(e){let t=xa(e),n=e.proxy,r=e.ctx;ga=!1,t.beforeCreate&&ya(t.beforeCreate,e,`bc`);let{data:i,computed:a,methods:o,watch:s,provide:c,inject:l,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:m,activated:h,deactivated:g,beforeDestroy:_,beforeUnmount:v,destroyed:y,unmounted:b,render:x,renderTracked:S,renderTriggered:C,errorCaptured:w,serverPrefetch:T,expose:E,inheritAttrs:D,components:O,directives:k,filters:A}=t;if(l&&va(l,r,null),o)for(let e in o){let t=o[e];J(t)&&(r[e]=t.bind(n))}if(i){let t=i.call(n,n);xt(t)&&(e.data=yr(t))}if(ga=!0,a)for(let e in a){let t=a[e],i=Cs({get:J(t)?t.bind(n,n):J(t.get)?t.get.bind(n,n):lt,set:!J(t)&&J(t.set)?t.set.bind(n):lt});Object.defineProperty(r,e,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e})}if(s)for(let e in s)ba(s[e],r,n,e);if(c){let e=J(c)?c.call(n):c;Reflect.ownKeys(e).forEach(t=>{bi(t,e[t])})}u&&ya(u,e,`c`);function j(e,t){q(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(j(Yi,d),j(Xi,f),j(Zi,p),j(Qi,m),j(Ui,h),j(Wi,g),j(ia,w),j(ra,S),j(na,C),j($i,v),j(ea,b),j(ta,T),q(E)){if(E.length){let t=e.exposed||={};E.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={}}x&&e.render===lt&&(e.render=x),D!=null&&(e.inheritAttrs=D),O&&(e.components=O),k&&(e.directives=k),T&&Ii(e)}function va(e,t,n=lt){q(e)&&(e=Ea(e));for(let n in e){let r=e[n],i;i=xt(r)?`default`in r?xi(r.from||n,r.default,!0):xi(r.from||n):xi(r),jr(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function ya(e,t,n){qr(q(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function ba(e,t,n,r){let i=r.includes(`.`)?Di(n,r):()=>n[r];if(yt(e)){let n=t[e];J(n)&&wi(i,n)}else if(J(e))wi(i,e.bind(n));else if(xt(e)){if(q(e))e.forEach(e=>ba(e,t,n,r));else{let r=J(e.handler)?e.handler.bind(n):t[e.handler];J(r)&&wi(i,r,e)}}}function xa(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>Sa(c,e,o,!0)),Sa(c,t,o)),xt(t)&&a.set(t,c),c}function Sa(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&Sa(e,a,n,!0),i&&i.forEach(t=>Sa(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=Ca[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var Ca={data:wa,props:ka,emits:ka,methods:Oa,computed:Oa,beforeCreate:Da,created:Da,beforeMount:Da,mounted:Da,beforeUpdate:Da,updated:Da,beforeDestroy:Da,beforeUnmount:Da,destroyed:Da,unmounted:Da,activated:Da,deactivated:Da,errorCaptured:Da,serverPrefetch:Da,components:Oa,directives:Oa,watch:Aa,provide:wa,inject:Ta};function wa(e,t){return t?e?function(){return pt(J(e)?e.call(this,this):e,J(t)?t.call(this,this):t)}:t:e}function Ta(e,t){return Oa(Ea(e),Ea(t))}function Ea(e){if(q(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Da(e,t){return e?[...new Set([].concat(e,t))]:t}function Oa(e,t){return e?pt(Object.create(null),e,t):t}function ka(e,t){return e?q(e)&&q(t)?[...new Set([...e,...t])]:pt(Object.create(null),ha(e),ha(t??{})):t}function Aa(e,t){if(!e)return t;if(!t)return e;let n=pt(Object.create(null),e);for(let r in t)n[r]=Da(e[r],t[r]);return n}function ja(){return{app:null,config:{isNativeTag:ut,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var Ma=0;function Na(e,t){return function(n,r=null){J(n)||(n=pt({},n)),r!=null&&!xt(r)&&(r=null);let i=ja(),a=new WeakSet,o=[],s=!1,c=i.app={_uid:Ma++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Ts,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&J(e.install)?(a.add(e),e.install(c,...t)):J(e)&&(a.add(e),e(c,...t))),c},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),c},component(e,t){return t?(i.components[e]=t,c):i.components[e]},directive(e,t){return t?(i.directives[e]=t,c):i.directives[e]},mount(a,o,l){if(!s){let u=c._ceVNode||Wo(n,r);return u.appContext=i,l===!0?l=`svg`:l===!1&&(l=void 0),o&&t?t(u,a):e(u,a,l),s=!0,c._container=a,a.__vue_app__=c,bs(u.component)}},onUnmount(e){o.push(e)},unmount(){s&&(qr(o,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return i.provides[e]=t,c},runWithContext(e){let t=Pa;Pa=c;try{return e()}finally{Pa=t}}};return c}}var Pa=null,Fa=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${jt(t)}Modifiers`]||e[`${Nt(t)}Modifiers`];function Ia(e,t,...n){if(e.isUnmounted)return;let r=e.vnode.props||G,i=n,a=t.startsWith(`update:`),o=a&&Fa(r,t.slice(7));o&&(o.trim&&(i=n.map(e=>yt(e)?e.trim():e)),o.number&&(i=i.map(zt)));let s,c=r[s=Ft(t)]||r[s=Ft(jt(t))];!c&&a&&(c=r[s=Ft(Nt(t))]),c&&qr(c,e,6,i);let l=r[s+`Once`];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,qr(l,e,6,i)}}var La=new WeakMap;function Ra(e,t,n=!1){let r=n?La:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},s=!1;if(!J(e)){let r=e=>{let n=Ra(e,t,!0);n&&(s=!0,pt(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!s?(xt(e)&&r.set(e,null),null):(q(a)?a.forEach(e=>o[e]=null):pt(o,a),xt(e)&&r.set(e,o),o)}function za(e,t){return!e||!dt(t)?!1:(t=t.slice(2),t=t===`Once`?t:t.replace(/Once$/,``),K(e,t[0].toLowerCase()+t.slice(1))||K(e,Nt(t))||K(e,t))}function Ba(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:o,attrs:s,emit:c,render:l,renderCache:u,props:d,data:f,setupState:p,ctx:m,inheritAttrs:h}=e,g=gi(e),_,v;try{if(n.shapeFlag&4){let e=i||r,t=e;_=Xo(l.call(t,e,u,d,p,f,m)),v=s}else{let e=t;_=Xo(e.length>1?e(d,{attrs:s,slots:o,emit:c}):e(d,null)),v=t.props?s:Ha(s)}}catch(t){jo.length=0,Jr(t,e,1),_=Wo(ko)}let y=_;if(v&&h!==!1){let e=Object.keys(v),{shapeFlag:t}=y;e.length&&t&7&&(a&&e.some(ft)&&(v=Ua(v,a)),y=qo(y,v,!1,!0))}return n.dirs&&(y=qo(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&Ni(ki(y.type)&&Mi(y)||y,n.transition),_=y,gi(g),_}function Va(e,t=!0){let n;for(let t=0;t<e.length;t++){let r=e[t];if(Bo(r)){if(r.type!==ko||r.children===`v-if`){if(n)return;n=r}}else return}return n}var Ha=e=>{let t;for(let n in e)(n===`class`||n===`style`||dt(n))&&((t||={})[n]=e[n]);return t},Ua=(e,t)=>{let n={};for(let r in e)ft(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function Wa(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ga(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(Ka(o,r,n)&&!za(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?!o||Ga(r,o,l):!!o;return!1}function Ga(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(!K(e,a)||Ka(t,e,a)&&!za(n,a))return!0}return!1}function Ka(e,t,n){let r=e[n],i=t[n];return n===`style`&&xt(r)&&xt(i)?!en(r,i):r!==i}function qa({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var Ja={},Ya=()=>Object.create(Ja),Xa=e=>Object.getPrototypeOf(e)===Ja;function Za(e,t,n,r=!1){let i={},a=Ya();e.propsDefaults=Object.create(null),$a(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);e.props=n?r?i:br(i):e.type.props?i:a,e.attrs=a}function Qa(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=Dr(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(za(e.emitsOptions,o))continue;let u=t[o];if(c){if(K(a,o))u!==a[o]&&(a[o]=u,l=!0);else{let t=jt(o);i[t]=eo(c,s,t,u,e,!1)}}else u!==a[o]&&(a[o]=u,l=!0)}}}else{$a(e,t,i,a)&&(l=!0);let r;for(let a in s)t&&(K(t,a)||(r=Nt(a))!==a&&K(t,r))||(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=eo(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)t&&K(t,e)||(delete a[e],l=!0)}l&&Rn(e.attrs,`set`,``)}function $a(e,t,n,r){let[i,a]=e.propsOptions,o=!1,s;if(t)for(let c in t){if(Ot(c))continue;let l=t[c],u;i&&K(i,u=jt(c))?!a||!a.includes(u)?n[u]=l:(s||={})[u]=l:za(e.emitsOptions,c)||c in r&&l===r[c]||(r[c]=l,o=!0)}if(a){let t=Dr(n),r=s||G;for(let o=0;o<a.length;o++){let s=a[o];n[s]=eo(i,t,s,r[s],e,!K(r,s))}}return o}function eo(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=K(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&J(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=ls(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===Nt(n))&&(r=!0))}return r}var to=new WeakMap;function no(e,t,n=!1){let r=n?to:t.propsCache,i=r.get(e);if(i)return i;let a=e.props,o={},s=[],c=!1;if(!J(e)){let r=e=>{c=!0;let[n,r]=no(e,t,!0);pt(o,n),r&&s.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!a&&!c)return xt(e)&&r.set(e,ct),ct;if(q(a))for(let e=0;e<a.length;e++){let t=jt(a[e]);ro(t)&&(o[t]=G)}else if(a)for(let e in a){let t=jt(e);if(ro(t)){let n=a[e],r=o[t]=q(n)||J(n)?{type:n}:pt({},n),i=r.type,c=!1,l=!0;if(q(i))for(let e=0;e<i.length;++e){let t=i[e],n=J(t)&&t.name;if(n===`Boolean`){c=!0;break}n===`String`&&(l=!1)}else c=J(i)&&i.name===`Boolean`;r[0]=c,r[1]=l,(c||K(r,`default`))&&s.push(t)}}let l=[o,s];return xt(e)&&r.set(e,l),l}function ro(e){return e[0]!==`$`&&!Ot(e)}var io=e=>e===`_`||e===`_ctx`||e===`$stable`,ao=e=>q(e)?e.map(Xo):[Xo(e)],oo=(e,t,n)=>{if(t._n)return t;let r=_i((...e)=>ao(t(...e)),n);return r._c=!1,r},so=(e,t,n)=>{let r=e._ctx;for(let n in e){if(io(n))continue;let i=e[n];if(J(i))t[n]=oo(n,i,r);else if(i!=null){let e=ao(i);t[n]=()=>e}}},co=(e,t)=>{let n=ao(t);e.slots.default=()=>n},lo=(e,t,n)=>{for(let r in t)(n||!io(r))&&(e[r]=t[r])},uo=(e,t,n)=>{let r=e.slots=Ya();if(e.vnode.shapeFlag&32){let e=t._;e?(lo(r,t,n),n&&Rt(r,`_`,e,!0)):so(t,r)}else t&&co(e,t)},fo=(e,t,n)=>{let{vnode:r,slots:i}=e,a=!0,o=G;if(r.shapeFlag&32){let e=t._;e?n&&e===1?a=!1:lo(i,t,n):(a=!t.$stable,so(t,i)),o=t}else t&&(co(e,t),o={default:1});if(a)for(let e in i)!io(e)&&o[e]==null&&delete i[e]},po=Eo;function mo(e){return ho(e)}function ho(e,t){let n=Vt();n.__VUE__=!0;let{insert:r,remove:i,patchProp:a,createElement:o,createText:s,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=lt,insertStaticContent:m}=e,h=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Vo(e,t)&&(r=re(e),L(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null),t.dynamicChildren&&e&&e.dynamicChildren&&e.dynamicChildren.hasOnce&&(t.dynamicChildren===ct&&(t.dynamicChildren=[]),t.dynamicChildren.hasOnce=!0);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case Oo:g(e,t,n,r);break;case ko:_(e,t,n,r);break;case Ao:e??v(t,n,r,o);break;case Do:O(e,t,n,r,i,a,o,s,c);break;default:d&1?x(e,t,n,r,i,a,o,s,c):d&6?k(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,ae)}u!=null&&i?zi(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&zi(e.ref,null,a,e,!0)},g=(e,t,n,i)=>{if(e==null)r(t.el=s(t.children),n,i);else{let n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},_=(e,t,n,i)=>{e==null?r(t.el=c(t.children||``),n,i):t.el=e.el},v=(e,t,n,r)=>{[e.el,e.anchor]=m(e.children,t,n,r,e.el,e.anchor)},y=({el:e,anchor:t},n,i)=>{let a;for(;e&&e!==t;)a=f(e),r(e,n,i),e=a;r(t,n,i)},b=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=f(e),i(e),e=n;i(t)},x=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)S(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),T(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},S=(e,t,n,i,s,c,l,d)=>{let f,p,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(f=e.el=o(e.type,c,m&&m.is,m),h&8?u(f,e.children):h&16&&w(e.children,f,null,i,s,go(e,c),l,d),_&&yi(e,null,i,`created`),C(f,e,e.scopeId,l,i),m){for(let e in m)e!==`value`&&!Ot(e)&&a(f,e,null,m[e],c,i);`value`in m&&a(f,`value`,null,m.value,c),(p=m.onVnodeBeforeMount)&&es(p,i,e)}_&&yi(e,null,i,`beforeMount`);let v=vo(s,g);v?g.beforeEnter(f):g&&!g.persisted&&(f[To]=!0),r(f,t,n),((p=m&&m.onVnodeMounted)||v||_)&&po(()=>{try{p&&es(p,i,e),v&&g.enter(f),_&&yi(e,null,i,`mounted`)}finally{}},s)},C=(e,t,n,r,i)=>{if(n&&p(e,n),r)for(let t=0;t<r.length;t++)p(e,r[t]);if(i){let n=i.subTree;if(t===n||wo(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;C(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},w=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++){let c=e[l]=s?Zo(e[l]):Xo(e[l]);h(null,c,t,n,r,i,a,o,s)}},T=(e,t,n,r,i,o,s)=>{let c=t.el=e.el,{patchFlag:l,dynamicChildren:d,dirs:f}=t;l|=e.patchFlag&16;let p=e.props||G,m=t.props||G,h;if(n&&_o(n,!1),(h=m.onVnodeBeforeUpdate)&&es(h,n,t,e),f&&yi(t,e,n,`beforeUpdate`),n&&_o(n,!0),d&&(!e.dynamicChildren||e.dynamicChildren.length!==d.length)&&(l=0,s=!1,d=null),(p.innerHTML&&m.innerHTML==null||p.textContent&&m.textContent==null)&&u(c,``),d?E(e.dynamicChildren,d,c,n,r,go(t,i),o):s||P(e,t,c,null,n,r,go(t,i),o,!1),l>0){if(l&16)D(c,p,m,n,i);else if(l&2&&p.class!==m.class&&a(c,`class`,null,m.class,i),l&4&&a(c,`style`,p.style,m.style,i),l&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let r=e[t],o=p[r],s=m[r];(s!==o||r===`value`)&&a(c,r,o,s,i,n)}}l&1&&e.children!==t.children&&u(c,t.children)}else!s&&d==null&&D(c,p,m,n,i);((h=m.onVnodeUpdated)||f)&&po(()=>{h&&es(h,n,t,e),f&&yi(t,e,n,`updated`)},r)},E=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s],u=c.el||Co(c),f=u&&(c.type===Do||!Vo(c,l)||c.shapeFlag&198)?d(u):n;h(c,l,f,null,r,i,a,o,!0)}},D=(e,t,n,r,i)=>{if(t!==n){if(t!==G)for(let o in t)!Ot(o)&&!(o in n)&&a(e,o,t[o],null,i,r);for(let o in n){if(Ot(o))continue;let s=n[o],c=t[o];s!==c&&o!==`value`&&a(e,o,c,s,i,r)}`value`in n&&a(e,`value`,t.value,n.value,i)}},O=(e,t,n,i,a,o,c,l,u)=>{let d=t.el=e?e.el:s(``),f=t.anchor=e?e.anchor:s(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(l=l?l.concat(h):h),e==null?(r(d,n,i),r(f,n,i),w(t.children||[],n,f,a,o,c,l,u)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(E(e.dynamicChildren,m,n,a,o,c,l),(t.key!=null||a&&t===a.subTree)&&yo(e,t,!0)):P(e,t,n,f,a,o,c,l,u)},k=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):A(t,n,r,i,a,o,c):j(e,t,c)},A=(e,t,n,r,i,a,o)=>{let s=e.component=is(e,r,i);if(Hi(e)&&(s.ctx.renderer=ae),ps(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,M,o,a),!e.el){let r=s.subTree=Wo(ko);_(null,r,t,n),e.placeholder=r.el}}else M(s,e,t,n,i,a,o)},j=(e,t,n)=>{let r=t.component=e.component;if(Wa(e,t,n)){if(r.asyncDep&&!r.asyncResolved){t.el=e.el,t.placeholder=e.placeholder,N(r,t,n);return}r.next=t,r.update()}else t.el=e.el,t.placeholder=e.placeholder,r.vnode=t},M=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=xo(e);if(n){t&&(t.el=c.el,N(e,t,o)),n.asyncDep.then(()=>{let t=()=>{e.job.flags&8||(i&&i.pendingBranch?po(t,i):l())};t.flags=48,po(t,i)});return}}let u=t,f;_o(e,!1),t?(t.el=c.el,N(e,t,o)):t=c,n&&Lt(n),(f=t.props&&t.props.onVnodeBeforeUpdate)&&es(f,s,t,c),_o(e,!0);let p=Ba(e),m=e.subTree;e.subTree=p,h(m,p,d(m.el||Co(m)),re(m),e,i,a),t.el=p.el,u===null&&qa(e,p.el),r&&po(r,i),(f=t.props&&t.props.onVnodeUpdated)&&po(()=>es(f,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=Vi(t);if(_o(e,!1),l&&Lt(l),!m&&(o=c&&c.onVnodeBeforeMount)&&es(o,d,t),_o(e,!0),s&&se){let t=()=>{e.subTree=Ba(e),se(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=Ba(e);h(null,o,n,r,e,i,a),t.el=o.el}if(u&&po(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;po(()=>es(o,d,e),i)}(t.shapeFlag&256||d&&Vi(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&po(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new dn(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>ai(u),_o(e,!0),l()},N=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,Qa(e,t.props,r,n),fo(e,t.children,n),En(),ci(e),Dn()},P=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,d=e?e.shapeFlag:0,f=t.children,{patchFlag:p,shapeFlag:m}=t;if(p>0){if(p&128){I(l,f,n,r,i,a,o,s,c);return}if(p&256){F(l,f,n,r,i,a,o,s,c);return}}m&8?(d&16&&z(l,i,a),f!==l&&u(n,f)):d&16?m&16?I(l,f,n,r,i,a,o,s,c):z(l,i,a,!0):(d&8&&u(n,``),m&16&&w(f,n,r,i,a,o,s,c))},F=(e,t,n,r,i,a,o,s,c)=>{e||=ct,t||=ct;let l=e.length,u=t.length,d=Math.min(l,u),f=0;for(;f<d;f++){let r=t[f]=c?Zo(t[f]):Xo(t[f]);h(e[f],r,n,null,i,a,o,s,c)}l>u?z(e,i,a,!0,!1,d):w(t,n,r,i,a,o,s,c,d)},I=(e,t,n,r,i,a,o,s,c)=>{let l=0,u=t.length,d=e.length-1,f=u-1;for(;l<=d&&l<=f;){let r=e[l],u=t[l]=c?Zo(t[l]):Xo(t[l]);if(Vo(r,u))h(r,u,n,null,i,a,o,s,c);else break;l++}for(;l<=d&&l<=f;){let r=e[d],l=t[f]=c?Zo(t[f]):Xo(t[f]);if(Vo(r,l))h(r,l,n,null,i,a,o,s,c);else break;d--,f--}if(l>d){if(l<=f){let e=f+1,d=e<u?t[e].el:r;for(;l<=f;)h(null,t[l]=c?Zo(t[l]):Xo(t[l]),n,d,i,a,o,s,c),l++}}else if(l>f)for(;l<=d;)L(e[l],i,a,!0),l++;else{let p=l,m=l,g=new Map;for(l=m;l<=f;l++){let e=t[l]=c?Zo(t[l]):Xo(t[l]);e.key!=null&&g.set(e.key,l)}let _,v=0,y=f-m+1,b=!1,x=0,S=Array(y);for(l=0;l<y;l++)S[l]=0;for(l=p;l<=d;l++){let r=e[l];if(v>=y){L(r,i,a,!0);continue}let u;if(r.key!=null)u=g.get(r.key);else for(_=m;_<=f;_++)if(S[_-m]===0&&Vo(r,t[_])){u=_;break}u===void 0?L(r,i,a,!0):(S[u-m]=l+1,u>=x?x=u:b=!0,h(r,t[u],n,null,i,a,o,s,c),v++)}let C=b?bo(S):ct;for(_=C.length-1,l=y-1;l>=0;l--){let e=m+l,d=t[e],f=t[e+1],p=e+1<u?f.el||Co(f):r;S[l]===0?h(null,d,n,p,i,a,o,s,c):b&&(_<0||l!==C[_]?ee(d,n,p,2):_--)}}},ee=(e,t,n,a,o=null)=>{let{el:s,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6)ee(e.component.subTree,t,n,a);else if(d&128)e.suspense.move(t,n,a);else if(d&64)c.move(e,t,n,ae);else if(c===Do){r(s,t,n);for(let e=0;e<u.length;e++)ee(u[e],t,n,a);r(e.anchor,t,n)}else if(c===Ao)y(e,t,n);else if(a!==2&&d&1&&l){if(a===0)l.persisted&&!s[Ai]?r(s,t,n):(l.beforeEnter(s),r(s,t,n),po(()=>l.enter(s),o));else{let{leave:a,delayLeave:o,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?i(s):r(s,t,n)},d=()=>{let e=s._isLeaving||!!s[Ai];s._isLeaving&&s[Ai](!0),l.persisted&&!e?u():a(s,()=>{u(),c&&c()})};o?o(s,u,d):d()}}else r(s,t,n)},L=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if((d===-2||l&&l.hasOnce)&&(i=!1),s!=null&&(En(),zi(s,null,n,e,!0),Dn()),p==null||e.ctx&&e.ctx!==t||(t.renderCache[p]=void 0),u&256&&t.ctx.deactivate(e))return;let h=u&1&&f,g=!Vi(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&es(_,t,e),u&6)ne(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&yi(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,ae,r):l&&!l.hasOnce&&(a!==Do||d>0&&d&64)?z(l,t,n,!1,!0):(a===Do&&d&384||!i&&u&16)&&z(c,t,n),r&&te(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&po(()=>{_&&es(_,t,e),h&&yi(e,null,t,`unmounted`),v&&(e.el=null)},n)},te=e=>{let{type:t,el:n,anchor:r,transition:a}=e,o=t===Do;if(o&&!a){R(n,r);return}if(t===Ao){b(e),a&&!a.persisted&&a.afterLeave&&a.afterLeave();return}let s=o?Pi(e):e,c=()=>{o?d(n)&&R(n,r):i(n),a&&!a.persisted&&a.afterLeave&&a.afterLeave()};if(s&&s.shapeFlag&1&&a&&!a.persisted){let{leave:e,delayLeave:t}=a,n=s.el,r=()=>e(n,c);t?t(n,c,r):r()}else c()},R=(e,t)=>{let n;for(;e!==t;)n=f(e),i(e),e=n;i(t)},ne=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;So(c),So(l),r&&Lt(r),i.stop(),a?(a.flags|=8,L(o,e,t,n)):o&&(o.transition=e.vnode.transition,L(o,e,t,n)),s&&po(s,t);let u=()=>{e.isUnmounted=!0};u.flags=16,po(u,t)},z=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)L(e[o],t,n,r,i)},re=e=>{if(e.shapeFlag&6)return re(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=f(e.anchor||e.el),n=t&&t[Oi];return n?f(n):t},ie=(e,t,n)=>{di(()=>{e==null?t._vnode&&L(t._vnode,null,null,!0):h(t._vnode||null,e,t,null,null,null,n),t._vnode=e},e&&t._vnode?void 0:e&&e.component?e.component.uid:rs())},ae={p:h,um:L,m:ee,r:te,mt:A,mc:w,pc:P,pbc:E,n:re,o:e},oe,se;return t&&([oe,se]=t(ae)),{render:ie,hydrate:oe,createApp:Na(ie,oe)}}function go({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function _o({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function vo(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function yo(e,t,n=!1){let r=e.children,i=t.children;if(q(r)&&q(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=Zo(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&yo(t,a)),a.type===Oo&&(a.patchFlag===-1&&(a=i[e]=Zo(a)),a.el=t.el),a.type===ko&&!a.el&&(a.el=t.el)}}function bo(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-->0;)n[a]=o,o=t[o];return n}function xo(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:xo(t)}function So(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Co(e){if(e.placeholder)return e.placeholder;let t=e.component;if(t)return Co(t.subTree);let n=e.suspense;return n&&n.activeBranch?Co(n.activeBranch):null}var wo=e=>e.__isSuspense,To=Symbol(`_deferredEnter`);function Eo(e,t){t&&t.pendingBranch?q(e)?t.effects.push(...e):t.effects.push(e):si(e)}var Do=Symbol.for(`v-fgt`),Oo=Symbol.for(`v-txt`),ko=Symbol.for(`v-cmt`),Ao=Symbol.for(`v-stc`),jo=[],Mo=null;function No(e=!1){jo.push(Mo=e?null:[])}function Po(){jo.pop(),Mo=jo[jo.length-1]||null}var Fo=1;function Io(e,t=!1){Fo+=e,e<0&&Mo&&t&&(Mo.hasOnce=!0)}function Lo(e){return e.dynamicChildren=Fo>0?Mo||ct:null,Po(),Fo>0&&Mo&&Mo.push(e),e}function Ro(e,t,n,r,i,a){return Lo(X(e,t,n,r,i,a,!0))}function zo(e,t,n,r,i){return Lo(Wo(e,t,n,r,i,!0))}function Bo(e){return e?e.__v_isVNode===!0:!1}function Vo(e,t){return e.type===t.type&&e.key===t.key}var Ho=({key:e})=>e??null,Uo=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:yt(e)||jr(e)||J(e)?{i:mi,r:e,k:t,f:!!n}:e);function X(e,t=null,n=null,r=0,i=null,a=e===Do?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ho(t),ref:t&&Uo(t),scopeId:hi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:mi};return s?(Qo(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=yt(n)?8:16),Fo>0&&!o&&Mo&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&Mo.push(c),c}var Wo=Go;function Go(e,t=null,n=null,r=0,i=null,a=!1){if(e&&e!==sa||(e=ko),Bo(e)){let r=qo(e,t,!0);return n&&Qo(r,n),Fo>0&&!a&&Mo&&(r.shapeFlag&6?Mo[Mo.indexOf(e)]=r:Mo.push(r)),r.patchFlag=-2,r}if(Ss(e)&&(e=e.__vccOpts),t){t=Ko(t);let{class:e,style:n}=t;e&&!yt(e)&&(t.class=qt(e)),xt(n)&&(Er(n)&&!q(n)&&(n=pt({},n)),t.style=Ht(n))}let o=yt(e)?1:wo(e)?128:ki(e)?64:xt(e)?4:J(e)?2:0;return X(e,t,n,r,i,o,a,!0)}function Ko(e){return e?Er(e)?pt({},e):Xa(e)?pt({},e[_s]||e):e:null}function qo(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?$o(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Ho(l),ref:t&&t.ref?n&&a?q(a)?a.concat(Uo(t)):[a,Uo(t)]:Uo(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Do?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&qo(e.ssContent),ssFallback:e.ssFallback&&qo(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return c&&r&&Ni(u,c.clone(u)),u}function Jo(e=` `,t=0){return Wo(Oo,null,e,t)}function Yo(e=``,t=!1){return t?(No(),zo(ko,null,e)):Wo(ko,null,e)}function Xo(e){return e==null||typeof e==`boolean`?Wo(ko):q(e)?Wo(Do,null,e.slice()):Bo(e)?Zo(e):Wo(Oo,null,String(e))}function Zo(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:qo(e)}function Qo(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(q(t))n=16;else if(typeof t==`object`){if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),Qo(e,n()),n._c&&(n._d=!0));return}{n=32;let r=t._;!r&&!Xa(t)?t._ctx=mi:r===3&&mi&&(mi.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}}else if(J(t)){if(r&65){Qo(e,{default:t});return}t={default:t,_ctx:mi},n=32}else t=String(t),r&64?(n=16,t=[Jo(t)]):n=8;e.children=t,e.shapeFlag|=n}function $o(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=qt([t.class,r.class]));else if(e===`style`)t.style=Ht([t.style,r.style]);else if(dt(e)){let n=t[e],i=r[e];i&&n!==i&&!(q(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!ft(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function es(e,t,n,r=null){qr(e,t,7,[n,r])}var ts=ja(),ns=0;function rs(){return ns}function is(e,t,n){let r=e.type,i=(t?t.appContext:e.appContext)||ts,a={uid:ns++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new sn(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:no(r,i),emitsOptions:Ra(r,i),emit:null,emitted:null,propsDefaults:G,inheritAttrs:r.inheritAttrs,ctx:G,data:G,props:G,attrs:G,slots:G,refs:G,setupState:G,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Ia.bind(null,a),e.ce&&e.ce(a),a}var as=null,os=()=>as||mi,ss,cs;{let e=Vt(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};ss=t(`__VUE_INSTANCE_SETTERS__`,e=>as=e),cs=t(`__VUE_SSR_SETTERS__`,e=>fs=e)}var ls=e=>{let t=as;return ss(e),e.scope.on(),()=>{e.scope.off(),ss(t)}},us=()=>{as&&as.scope.off(),ss(null)};function ds(e){return e.vnode.shapeFlag&4}var fs=!1;function ps(e,t=!1,n=!1){t&&cs(t);let{props:r,children:i}=e.vnode,a=ds(e);Za(e,r,a,t),uo(e,i,n||t);let o=a?ms(e,t):void 0;return t&&cs(!1),o}function ms(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,ma);let{setup:r}=n;if(r){En();let n=e.setupContext=r.length>1?ys(e):null,i=ls(e),a=Kr(r,e,0,[e.props,n]),o=St(a);if(Dn(),i(),(o||e.sp)&&!Vi(e)&&Ii(e),o){if(a.then(us,us),t)return a.then(n=>{cs(!0);try{hs(e,n,t)}finally{cs(!1)}}).catch(t=>{Jr(t,e,0,void 0,!0),e.ssrRender=(e,t)=>t(`<!---->`)});e.asyncDep=a}else hs(e,a,t)}else gs(e,t)}function hs(e,t,n){J(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:xt(t)&&(e.setupState=Lr(t)),gs(e,n)}function gs(e,t,n){let r=e.type;e.render||=r.render||lt;{let t=ls(e);En();try{_a(e)}finally{Dn(),t()}}}var _s=Symbol(),vs={get(e,t){return Ln(e,`get`,``),t===_s?e:e[t]}};function ys(e){return{attrs:new Proxy(e.attrs,vs),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function bs(e){return e.exposed?e.exposeProxy||=new Proxy(Lr(Or(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in fa)return fa[n](e)},has(e,t){return t in e||t in fa}}):e.proxy}function xs(e,t=!0){return J(e)?e.displayName||e.name:e.name||t&&e.__name}function Ss(e){return J(e)&&`__vccOpts`in e}var Cs=(e,t)=>zr(e,t,fs);function ws(e,t,n){try{Io(-1);let r=arguments.length;return r===2?xt(t)&&!q(t)?Bo(t)?Wo(e,null,[t]):Wo(e,t):Wo(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Bo(n)&&(n=[n]),Wo(e,t,n))}finally{Io(1)}}var Ts=`3.5.45`,Es=void 0,Ds=typeof window<`u`&&window.trustedTypes;if(Ds)try{Es=Ds.createPolicy(`vue`,{createHTML:e=>e})}catch{}var Os=Es?e=>Es.createHTML(e):e=>e,ks=`http://www.w3.org/2000/svg`,As=`http://www.w3.org/1998/Math/MathML`,js=typeof document<`u`?document:null,Ms=js&&js.createElement(`template`),Ns={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?js.createElementNS(ks,e):t===`mathml`?js.createElementNS(As,e):n?js.createElement(e,{is:n}):js.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>js.createTextNode(e),createComment:e=>js.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>js.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),i!==a&&(i=i.nextSibling););else{Ms.innerHTML=Os(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Ms.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ps=Symbol(`_vtc`);function Fs(e,t,n){let r=e[Ps];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var Is=Symbol(`_vod`),Ls=Symbol(`_vsh`),Rs={name:`show`,beforeMount(e,{value:t},{transition:n}){e[Is]=e.style.display===`none`?``:e.style.display,n&&t?n.beforeEnter(e):zs(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),zs(e,!0),r.enter(e)):r.leave(e,()=>{zs(e,!1)}):zs(e,t))},beforeUnmount(e,{value:t}){zs(e,t)}};function zs(e,t){e.style.display=t?e[Is]:`none`,e[Ls]=!t}var Bs=Symbol(``),Vs=/(?:^|;)\s*display\s*:/;function Hs(e,t,n){let r=e.style,i=yt(n),a=!1;if(n&&!i){if(t){if(yt(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??Ws(r,t,``)}else for(let e in t)n[e]??Ws(r,e,``)}for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?Ws(r,i,``):Js(e,i,!yt(t)&&t?t[i]:void 0,o)||Ws(r,i,o)}}else if(i){if(t!==n){let e=r[Bs];e&&(n+=`;`+e),r.cssText=n,a=Vs.test(n)}}else t&&e.removeAttribute(`style`);Is in e&&(i&&t===n||(e[Is]=a?r.display:``),e[Ls]&&(r.display=`none`))}var Us=/\s*!important$/;function Ws(e,t,n){if(q(n))n.forEach(n=>Ws(e,t,n));else if(n??=``,t.startsWith(`--`))Us.test(n)?e.setProperty(t,n.replace(Us,``),`important`):e.setProperty(t,n);else{let r=qs(e,t);Us.test(n)?e.setProperty(Nt(r),n.replace(Us,``),`important`):e[r]=n}}var Gs=[`Webkit`,`Moz`,`ms`],Ks={};function qs(e,t){let n=Ks[t];if(n)return n;let r=jt(t);if(r!==`filter`&&r in e)return Ks[t]=r;r=Pt(r);for(let n=0;n<Gs.length;n++){let i=Gs[n]+r;if(i in e)return Ks[t]=i}return t}function Js(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&yt(r)&&n===r}var Ys=`http://www.w3.org/1999/xlink`;function Xs(e,t,n,r,i,a=Jt(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(Ys,t.slice(6,t.length)):e.setAttributeNS(Ys,t,n):n==null||a&&!Yt(n)?e.removeAttribute(t):e.setAttribute(t,a?``:bt(n)?String(n):n)}function Zs(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Os(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);r===i&&`_value`in e||(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=Yt(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Qs(e,t,n,r){e.addEventListener(t,n,r)}function $s(e,t,n,r){e.removeEventListener(t,n,r)}var ec=Symbol(`_vei`);function tc(e,t,n,r,i=null){let a=e[ec]||(e[ec]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=ic(t);r?Qs(e,n,a[t]=cc(r,i),s):o&&($s(e,n,o,s),a[t]=void 0)}}var nc=/(Once|Passive|Capture)$/,rc=/^on:?(?:Once|Passive|Capture)$/;function ic(e){let t,n;for(;(n=e.match(nc))&&!rc.test(e);)t||={},e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===`:`?e.slice(3):Nt(e.slice(2)),t]}var ac=0,oc=Promise.resolve(),sc=()=>ac||=(oc.then(()=>ac=0),Date.now());function cc(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;let r=n.value;if(q(r)){let n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0};let i=r.slice(),a=[e];for(let n=0;n<i.length&&!e._stopped;n++){let e=i[n];e&&qr(e,t,5,a)}}else qr(r,t,5,[e])};return n.value=e,n.attached=sc(),n}var lc=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,uc=(e,t,n,r,i,a)=>{let o=i===`svg`;t===`class`?Fs(e,r,o):t===`style`?Hs(e,n,r):dt(t)?ft(t)||tc(e,t,n,r,a):(t[0]===`.`?(t=t.slice(1),1):t[0]===`^`?(t=t.slice(1),0):dc(e,t,r,o))?(Zs(e,t,r),e.tagName.includes(`-`)||t!==`value`&&t!==`checked`&&t!==`selected`||Xs(e,t,r,o,a,t!==`value`)):e._isVueCE&&(fc(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!yt(r)))?Zs(e,jt(t),r,a,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),Xs(e,t,r,o))};function dc(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&lc(t)&&J(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return lc(t)&&yt(n)?!1:t in e}function fc(e,t){let n=e._def.props;if(!n)return!1;let r=jt(t);return Array.isArray(n)?n.some(e=>jt(e)===r):Object.keys(n).some(e=>jt(e)===r)}var pc=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return q(t)?e=>Lt(t,e):t};function mc(e){e.target.composing=!0}function hc(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event(`input`)))}var gc=Symbol(`_assign`),_c=Symbol(`_initialValue`);function vc(e,t,n){return t&&(e=e.trim()),n&&(e=zt(e)),e}var yc={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e.parentNode&&(e.type===`text`?e[_c]=e.defaultValue.replace(/[\r\n]/g,``):e.type===`textarea`&&(e[_c]=e.defaultValue.replace(/\r\n?/g,`
`))),e[gc]=pc(i);let a=r||i.props&&i.props.type===`number`;Qs(e,t?`change`:`input`,t=>{t.target.composing||e[gc](vc(e.value,n,a))}),(n||a)&&Qs(e,`change`,()=>{e.value=vc(e.value,n,a)}),t||(Qs(e,`compositionstart`,mc),Qs(e,`compositionend`,hc),Qs(e,`change`,hc))},mounted(e,{value:t,modifiers:{trim:n,number:r}}){let i=t??``,a=e[_c];delete e[_c],a!==void 0&&(e.type===`text`||e.type===`textarea`)&&e.value!==a?e[gc](vc(e.value,n,r)):e.value=i},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:a}},o){if(e[gc]=pc(o),e.composing)return;let s=(a||e.type===`number`)&&!/^0\d/.test(e.value)?zt(e.value):e.value,c=t??``;if(s===c)return;let l=e.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===e&&e.type!==`range`&&(r&&t===n||i&&e.value.trim()===c)||(e.value=c)}},bc=pt({patchProp:uc},Ns),xc;function Sc(){return xc||=mo(bc)}var Cc=((...e)=>{let t=Sc().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=Tc(e);if(!r)return;let i=t._component;J(i)||i.render||i.template||(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,wc(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function wc(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function Tc(e){return yt(e)?document.querySelector(e):e}var Ec=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},Dc={};function Oc(e,t){let n=oa(`router-view`);return No(),zo(n)}var kc=Ec(Dc,[[`render`,Oc]]),Ac=e=>e.startsWith(`/`);function jc(e){return typeof e==`object`||`displayName`in e||`props`in e||`__vccOpts`in e}function Mc(e){return e.__esModule||e[Symbol.toStringTag]===`Module`||e.default&&jc(e.default)}var Nc=Object.assign;function Pc(e,t){let n={};for(let r in t){let i=t[r];n[r]=Ic(i)?i.map(e):e(i)}return n}var Fc=()=>{},Ic=Array.isArray;function Lc(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}var Rc=Symbol(``);function zc(e,t){return Nc(Error(),{type:e,[Rc]:!0},t)}function Bc(e,t){return e instanceof Error&&Rc in e&&(t==null||!!(e.type&t))}var Vc=Symbol(``),Hc=Symbol(``),Uc=Symbol(``),Wc=Symbol(``),Gc=Symbol(``),Kc=Symbol(``);function qc(){return xi(Uc)}function Jc(e){return xi(Wc)}var Yc=typeof document<`u`,Xc=/#/g,Zc=/&/g,Qc=/\//g,$c=/=/g,el=/\?/g,tl=/\+/g,nl=/%5B/g,rl=/%5D/g,il=/%5E/g,al=/%60/g,ol=/%7B/g,sl=/%7C/g,cl=/%7D/g,ll=/%20/g;function ul(e){return e==null?``:encodeURI(``+e).replace(sl,`|`).replace(nl,`[`).replace(rl,`]`)}function dl(e){return ul(e).replace(ol,`{`).replace(cl,`}`).replace(il,`^`)}function fl(e){return ul(e).replace(tl,`%2B`).replace(ll,`+`).replace(Xc,`%23`).replace(Zc,`%26`).replace(al,"`").replace(ol,`{`).replace(cl,`}`).replace(il,`^`)}function pl(e){return fl(e).replace($c,`%3D`)}function ml(e){return ul(e).replace(Xc,`%23`).replace(el,`%3F`)}function hl(e){return ml(e).replace(Qc,`%2F`)}function gl(e){if(e==null)return null;try{return decodeURIComponent(``+e)}catch{}return``+e}var _l=/\/$/,vl=e=>e.replace(_l,``);function yl(e,t,n=`/`){let r,i={},a=``,o=``,s=t.indexOf(`#`),c=t.indexOf(`?`);return c=s>=0&&c>s?-1:c,c>=0&&(r=t.slice(0,c),a=t.slice(c,s>0?s:t.length),i=e(a.slice(1))),s>=0&&(r||=t.slice(0,s),o=t.slice(s,t.length)),r=Dl(r??t,n),{fullPath:r+a+o,path:r,query:i,hash:gl(o)}}function bl(e,t){let n=t.query?e(t.query):``;return t.path+(n&&`?`)+n+(t.hash||``)}function xl(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||`/`}function Sl(e,t,n){let r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Cl(t.matched[r],n.matched[i])&&wl(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Cl(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function wl(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Tl(e[n],t[n]))return!1;return!0}function Tl(e,t){return Ic(e)?El(e,t):Ic(t)?El(t,e):(e&&e.valueOf())===(t&&t.valueOf())}function El(e,t){return Ic(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):e.length===1&&e[0]===t}function Dl(e,t){if(Ac(e))return e;if(!e)return t;let n=t.split(`/`),r=e.split(`/`),i=r[r.length-1];(i===`..`||i===`.`)&&r.push(``);let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==`.`){if(s===`..`)a>1&&a--;else break}return n.slice(0,a).join(`/`)+`/`+r.slice(o).join(`/`)}var Ol={path:`/`,name:void 0,params:{},query:{},hash:``,fullPath:`/`,matched:[],meta:{},redirectedFrom:void 0};function kl(e){if(!e){if(Yc){let t=document.querySelector(`base`);e=t&&t.getAttribute(`href`)||`/`,e=e.replace(/^\w+:\/\/[^/]+/,``)}else e=`/`}return e[0]!==`/`&&e[0]!==`#`&&(e=`/`+e),vl(e)}var Al=/^[^#]+#/;function jl(e,t){return e.replace(Al,`#`)+t}function Ml(e,t){let n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}var Nl=()=>history.scrollRestoration===`manual`?{left:window.scrollX,top:window.scrollY}:null;function Pl(e){let t;if(`el`in e){let n=e.el,r=typeof n==`string`&&n.startsWith(`#`),i=typeof n==`string`?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Ml(i,e)}else t=e;`scrollBehavior`in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left==null?window.scrollX:t.left,t.top==null?window.scrollY:t.top)}function Fl(e,t){return(history.state?history.state.position-t:-1)+e}var Il=new Map;function Ll(e){Il.set(e,Nl())}function Rl(e){let t=Il.get(e);return Il.delete(e),t}function zl(e,t=!1){for(let n of Il.keys()){let r=parseInt(n,10);(r===e||!t&&r>e)&&Il.delete(n)}}function Bl(e){return typeof e==`string`||e&&typeof e==`object`}function Vl(e){return typeof e==`string`||typeof e==`symbol`}function Hl(e){let t={};if(e===``||e===`?`)return t;let n=(e[0]===`?`?e.slice(1):e).split(`&`);for(let e=0;e<n.length;++e){let r=n[e].replace(tl,` `),i=r.indexOf(`=`),a=gl(i<0?r:r.slice(0,i)),o=i<0?null:gl(r.slice(i+1));if(a in t){let e=t[a];Ic(e)||(e=t[a]=[e]),e.push(o)}else t[a]=o}return t}function Ul(e){let t=``;for(let n in e){let r=e[n];n=pl(n),r==null?r!==void 0&&(t+=(t.length?`&`:``)+n):(Ic(r)?r.map(e=>e&&fl(e)):[r&&fl(r)]).forEach(e=>{e!==void 0&&(t+=(t.length?`&`:``)+n,e!=null&&(t+=`=`+e))})}return t}function Wl(e){let t={};for(let n in e){let r=e[n];r!==void 0&&(t[n]=Ic(r)?r.map(e=>e==null?null:``+e):r==null?r:``+r)}return t}function Gl(){let e=[];function t(t){return e.push(t),()=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Kl(e,t,n,r,i,a=e=>e()){let o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,c)=>{let l=e=>{e===!1?c(zc(4,{from:n,to:t})):e instanceof Error?c(e):Bl(e)?c(zc(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&typeof e==`function`&&o.push(e),s())},u=a(()=>e.call(r&&r.instances[i],t,n,l)),d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch(e=>c(e))})}function ql(e,t,n,r,i=e=>e()){let a=[];for(let o of e)for(let e in o.components){let s=o.components[e];if(t===`beforeRouteEnter`||o.instances[e]){if(jc(s)){let c=(s.__vccOpts||s)[t];c&&a.push(Kl(c,n,r,o,e,i))}else{let c=s();a.push(()=>c.then(a=>{if(!a)throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);let s=Mc(a)?a.default:a;o.mods[e]=a,o.components[e]=s;let c=(s.__vccOpts||s)[t];return c&&Kl(c,n,r,o,e,i)()}))}}}return a}function Jl(e,t){let n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){let a=t.matched[o];a&&(e.matched.find(e=>Cl(e,a))?r.push(a):n.push(a));let s=e.matched[o];s&&(t.matched.find(e=>Cl(e,s))||i.push(s))}return[n,r,i]}var Yl=()=>location.protocol+`//`+location.host;function Xl(e,t){let{pathname:n,search:r,hash:i}=t,a=e.indexOf(`#`);if(a>-1){let t=i.includes(e.slice(a))?e.slice(a).length:1,n=i.slice(t);return n[0]!==`/`&&(n=`/`+n),xl(n,``)}return xl(n,e)+r+i}function Zl(e,t,n,r){let i=[],a=[],o=null,s=({state:a})=>{let s=Xl(e,location),c=n.value,l=t.value,u=0;if(a){if(n.value=s,t.value=a,o&&o===c){o=null;return}u=l?a.position-l.position:0}else r(s);i.forEach(e=>{e(n.value,c,{delta:u,type:`pop`,direction:u?u>0?`forward`:`back`:``})})};function c(){o=n.value}function l(e){i.push(e);let t=()=>{let t=i.indexOf(e);t>-1&&i.splice(t,1)};return a.push(t),t}function u(){let{history:e}=window;e.state&&e.replaceState(Nc({},e.state,{scroll:Nl()}),``)}function d(){for(let e of a)e();a=[],window.removeEventListener(`popstate`,s),window.removeEventListener(`pagehide`,u)}return window.addEventListener(`popstate`,s),window.addEventListener(`pagehide`,u),{pauseListeners:c,listen:l,destroy:d}}function Ql(e,t,n,r=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:null}}function $l(e){let{history:t,location:n}=window,r={value:Xl(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(r,a,o){let s=e.indexOf(`#`),c=s>-1?(n.host&&document.querySelector(`base`)?e:e.slice(s))+r:Yl()+e+r;try{t[o?`replaceState`:`pushState`](a,``,c),i.value=a}catch(e){console.error(e),n[o?`replace`:`assign`](c)}}function o(e,n){let o=Nc({},t.state,Ql(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});a(e,o,!0),zl(o.position,!0),r.value=e}function s(e,n){let o=Nc({},i.value,t.state,{forward:e,scroll:Nl()});a(o.current,o,!0),a(e,Nc({},Ql(r.value,e,null),{position:o.position+1},n),!1),zl(o.position),r.value=e}return{location:r,state:i,push:s,replace:o}}function eu(e){e=kl(e);let t=$l(e),n=Zl(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}let i=Nc({location:``,base:e,go:r,createHref:jl.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function tu(e){return e=location.host?e||location.pathname+location.search:``,e.includes(`#`)||(e+=`#`),eu(e)}var nu={type:0,value:``},ru=/[a-zA-Z0-9_]/;function iu(e){if(!e)return[[]];if(e===`/`)return[[nu]];if(!Ac(e))throw Error(`Invalid path "${e}"`);function t(e){throw Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n,i=[],a;function o(){a&&i.push(a),a=[]}let s=0,c,l=``,u=``;function d(){l&&=(n===0?a.push({type:0,value:l}):n===1||n===2||n===3?(a.length>1&&(c===`*`||c===`+`)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:l,regexp:u,repeatable:c===`*`||c===`+`,optional:c===`*`||c===`?`})):t(`Invalid state to consume buffer`),``)}function f(){l+=c}for(;s<e.length;)switch(c=e[s++],n){case 0:c===`\\`?(r=n,n=4):c===`/`?(l&&d(),o()):c===`:`?(d(),n=1):f();break;case 4:f(),n=r;break;case 1:c===`(`?n=2:ru.test(c)?f():(d(),n=0,c!==`*`&&c!==`?`&&c!==`+`&&s--);break;case 2:c===`)`?u[u.length-1]==`\\`?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!==`*`&&c!==`?`&&c!==`+`&&s--,u=``;break;default:t(`Unknown state`)}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}var au=`[^/]+?`,ou={sensitive:!1,strict:!1,start:!0,end:!0},su=/[.+*?^${}()[\]/\\]/g;function cu(e,t){let n=Nc({},ou,t),r=[],i=n.start?`^`:``,a=[];for(let t of e){let e=t.length?[]:[90];n.strict&&!t.length&&(i+=`/`);for(let r=0;r<t.length;r++){let o=t[r],s=40+(n.sensitive?.25:0);if(o.type===0)r||(i+=`/`),i+=o.value.replace(su,`\\$&`),s+=40;else if(o.type===1){let{value:e,repeatable:n,optional:c,regexp:l}=o;a.push({name:e,repeatable:n,optional:c});let u=l||au;if(u!==au){s+=10;try{RegExp(`(${u})`)}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(d=c&&t.length<2?`(?:/${d})`:`/`+d),c&&(d+=`?`),i+=d,s+=20,c&&(s+=-8),n&&(s+=-20),u===`.*`&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+=`/?`),n.end?i+=`$`:n.strict&&!i.endsWith(`/`)&&(i+=`(?:/|$)`);let o=new RegExp(i,n.sensitive?``:`i`);function s(e){let t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||``,i=a[e-1];n[i.name]=r&&i.repeatable?r.split(`/`):r}return n}function c(t){let n=``,r=!1;for(let i of e){r&&n.endsWith(`/`)||(n+=`/`),r=!1;for(let e of i)if(e.type===0)n+=e.value;else if(e.type===1){let{value:a,repeatable:o,optional:s}=e,c=a in t?t[a]:``;if(Ic(c)&&!o)throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);let l=Ic(c)?c.join(`/`):c;if(!l){if(s)i.length<2&&(n.endsWith(`/`)?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${a}"`)}n+=l}}return n||`/`}return{re:o,score:r,keys:a,parse:s,stringify:c}}function lu(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function uu(e,t){let n=0,r=e.score,i=t.score;for(;n<r.length&&n<i.length;){let e=lu(r[n],i[n]);if(e)return e;n++}if(Math.abs(i.length-r.length)===1){if(du(r))return 1;if(du(i))return-1}return i.length-r.length}function du(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}var fu={strict:!1,end:!0,sensitive:!1};function pu(e,t,n){let r=Nc(cu(iu(e.path),n),{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function mu(e,t){let n=[],r=new Map;t=Lc(fu,t);function i(e){return r.get(e)}function a(e,n,r){let i=!r,s=gu(e);s.aliasOf=r&&r.record;let l=Lc(t,e),u=[s];if(`alias`in e){let t=typeof e.alias==`string`?[e.alias]:e.alias;for(let e of t)u.push(gu(Nc({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s})))}let d,f;for(let t of u){let{path:u}=t;if(n&&!Ac(u)){let e=n.record.path,r=e[e.length-1]===`/`?``:`/`;t.path=n.record.path+(u&&r+u)}if(d=pu(t,n,l),r?r.alias.push(d):(f||=d,f!==d&&f.alias.push(d),i&&e.name&&!vu(d)&&o(e.name)),Su(d)&&c(d),s.children){let e=s.children;for(let t=0;t<e.length;t++)a(e[t],d,r&&r.children[t])}r||=d}return f?()=>{o(f)}:Fc}function o(e){if(Vl(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function s(){return n}function c(e){let t=bu(e,n);n.splice(t,0,e),e.record.name&&!vu(e)&&r.set(e.record.name,e)}function l(e,t){let i,a={},o,s;if(`name`in e&&e.name){if(i=r.get(e.name),!i)throw zc(1,{location:e});s=i.record.name,a=Nc(hu(t.params,i.keys.filter(e=>!e.optional).concat(i.parent?i.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&hu(e.params,i.keys.map(e=>e.name))),o=i.stringify(a)}else if(e.path!=null)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name,i.keys.forEach(e=>{e.optional&&!a[e.name]&&delete a[e.name]}));else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw zc(1,{location:e,currentLocation:t});s=i.record.name,a=Nc({},t.params,e.params),o=i.stringify(a)}let c=[],l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:s,path:o,params:a,matched:c,meta:yu(c)}}e.forEach(e=>a(e));function u(){n.length=0,r.clear()}return{addRoute:a,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:s,getRecordMatcher:i}}function hu(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function gu(e){let t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:_u(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:`components`in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function _u(e){let t={},n=e.props||!1;if(`component`in e)t.default=n;else for(let r in e.components)t[r]=typeof n==`object`?n[r]:n;return t}function vu(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function yu(e){return e.reduce((e,t)=>Nc(e,t.meta),{})}function bu(e,t){let n=0,r=t.length;for(;n!==r;){let i=n+r>>1;uu(e,t[i])<0?r=i:n=i+1}let i=xu(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function xu(e){let t=e;for(;t=t.parent;)if(Su(t)&&uu(e,t)===0)return t}function Su({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Cu(e){let t=xi(Uc),n=xi(Wc),r=Cs(()=>{let n=Y(e.to);return t.resolve(n)}),i=Cs(()=>{let{matched:e}=r.value,{length:t}=e,i=e[t-1],a=n.matched;if(!i||!a.length)return-1;let o=a.findIndex(Cl.bind(null,i));if(o>-1)return o;let s=Ou(e[t-2]);return t>1&&Ou(i)===s&&a[a.length-1].path!==s?a.findIndex(Cl.bind(null,e[t-2])):o}),a=Cs(()=>i.value>-1&&Du(n.params,r.value.params)),o=Cs(()=>i.value>-1&&i.value===n.matched.length-1&&wl(n.params,r.value.params));function s(n={}){if(Eu(n)){let n=t[Y(e.replace)?`replace`:`push`](Y(e.to)).catch(Fc);return e.viewTransition&&typeof document<`u`&&`startViewTransition`in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:r,href:Cs(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}function wu(e){return e.length===1?e[0]:e}var Tu=Fi({name:`RouterLink`,compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:`page`},viewTransition:Boolean},useLink:Cu,setup(e,{slots:t}){let n=yr(Cu(e)),{options:r}=xi(Uc),i=Cs(()=>({[ku(e.activeClass,r.linkActiveClass,`router-link-active`)]:n.isActive,[ku(e.exactActiveClass,r.linkExactActiveClass,`router-link-exact-active`)]:n.isExactActive}));return()=>{let r=t.default&&wu(t.default(n));return e.custom?r:ws(`a`,{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function Eu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(e.button===void 0||e.button===0)){if(e.currentTarget&&e.currentTarget.getAttribute){let t=e.currentTarget.getAttribute(`target`);if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Du(e,t){for(let n in t){let r=t[n],i=e[n];if(Ic(r)){if(!Ic(i)||i.length!==r.length||r.some((e,t)=>e.valueOf()!==i[t].valueOf()))return!1}else if(r!==i)return!1}return!0}function Ou(e){return e?e.aliasOf?e.aliasOf.path:e.path:``}var ku=(e,t,n)=>e??t??n,Au=Fi({name:`RouterView`,inheritAttrs:!1,props:{name:{type:String,default:`default`},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){let r=xi(Gc),i=Cs(()=>e.route||r.value),a=xi(Hc,0),o=Cs(()=>{let e=Y(a),{matched:t}=i.value,n;for(;(n=t[e])&&!n.components;)e++;return e}),s=Cs(()=>i.value.matched[o.value]);bi(Hc,Cs(()=>o.value+1)),bi(Vc,s),bi(Gc,i);let c=new Set;bi(Kc,c);let l=Mr(),u=Ol,{app:d}=os().appContext;return wi(()=>[l.value,s.value,e.name],([e,t,n],[r,i,a])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&Cl(t,i)&&r||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:`post`}),()=>{let r=i.value,a=e.name,o=s.value,f=o&&o.components[a];if(!f)return ju(n.default,{Component:f,route:r});let p=o.props[a],m=p?p===!0?r.params:typeof p==`function`?p(r):p:null,h=e=>{e.component.isUnmounted&&(o.instances[a]=null)},g=e=>ri(()=>{if(u===r||i.value!==r||e.el.getRootNode()!==d._container.getRootNode())return;let t=u;u=r;for(let e of c)e(r,t)}),_=ws(f,Nc({},m,t,{onVnodeUnmounted:h,onVnodeMounted:g,onVnodeUpdated:g,ref:l}));return ju(n.default,{Component:_,route:r})||_}}});function ju(e,t){if(!e)return null;let n=e(t);return n.length===1?n[0]:n}var Mu=Au;function Nu(e){let t=e.matcher||mu(e.routes,e),n=e.parseQuery||Hl,r=e.stringifyQuery||Ul,i=e.history,a=Gl(),o=Gl(),s=Gl(),c=Nr(Ol),l=Nr(0),u=Ol;Yc&&e.scrollBehavior&&`scrollRestoration`in history&&(history.scrollRestoration=`manual`);let d=Pc.bind(null,e=>``+e),f=Pc.bind(null,hl),p=Pc.bind(null,gl);function m(e,n){let r,i;Vl(e)?(r=t.getRecordMatcher(e),i=n):i=e;let a=t.addRoute(i,r);return l.value++,()=>{a(),l.value++}}function h(e){let n=t.getRecordMatcher(e);n&&(t.removeRoute(n),l.value++)}function g(){t.clearRoutes(),l.value++}function _(){return t.getRoutes().map(e=>e.record)}function v(e){return!!t.getRecordMatcher(e)}function y(e,a){if(l.value,typeof e==`string`){a||=e.startsWith(`/`)?Ol:c.value;let r=yl(n,e,a.path),o=t.resolve({path:r.path},a),s=i.createHref(r.fullPath);return Nc(r,o,{params:p(o.params),redirectedFrom:void 0,href:s})}a=Nc({},a||(e.path!=null&&e.path.startsWith(`/`)&&!(`name`in e&&e.name)?Ol:c.value));let o;if(e.path!=null)o=Nc({},e,{path:yl(n,e.path,a.path).path});else{let t=Nc({},e.params);for(let e in t)t[e]??delete t[e];o=Nc({},e,{params:f(t)}),a.params=f(a.params)}let s=t.resolve(o,a),u=e.hash||``;s.params=d(p(s.params));let m=bl(r,Nc({},e,{hash:dl(u),path:s.path})),h=i.createHref(m);return Nc({fullPath:m,hash:u,query:r===Ul?Wl(e.query):e.query||{}},s,{redirectedFrom:void 0,href:h})}function b(e){return typeof e==`string`?yl(n,e,c.value.path):Nc({},e)}function x(e,t){if(u!==e)return zc(8,{from:t,to:e})}function S(e){return T(e)}function C(e){return S(Nc(b(e),{replace:!0}))}function w(e,t){let n=e.matched[e.matched.length-1];if(n&&n.redirect){let{redirect:r}=n,i=typeof r==`function`?r(e,t):r;return typeof i==`string`&&(i=i.includes(`?`)||i.includes(`#`)?i=b(i):{path:i},i.params={}),Nc({query:e.query,hash:e.hash,params:i.path==null?e.params:{}},i)}}function T(e,t){let n=u=y(e),i=c.value,a=e.state,o=e.force,s=e.replace===!0,l=w(n,i);if(l)return T(Nc(b(l),{state:typeof l==`object`?Nc({},a,l.state):a,force:o,replace:s}),t||n);let d=n;d.redirectedFrom=t;let f;return!o&&Sl(r,i,n)&&(f=zc(16,{to:d,from:i}),te(i,i,!0,!1)),(f?Promise.resolve(f):O(d,i)).catch(e=>Bc(e)?Bc(e,2)?e:L(e):I(e,d,i)).then(e=>{if(e){if(Bc(e,2))return T(Nc({replace:s},b(e.to),{state:typeof e.to==`object`?Nc({},a,e.to.state):a,force:o}),t||d)}else e=A(d,i,!0,s,a);return k(d,i,e),e})}function E(e,t){let n=x(e,t);return n?Promise.reject(n):Promise.resolve()}function D(e){let t=z.values().next().value;return t&&typeof t.runWithContext==`function`?t.runWithContext(e):e()}function O(e,t){let n,[r,i,s]=Jl(e,t);n=ql(r.reverse(),`beforeRouteLeave`,e,t);for(let i of r)i.leaveGuards.forEach(r=>{n.push(Kl(r,e,t))});let c=E.bind(null,e,t);return n.push(c),ie(n).then(()=>{n=[];for(let r of a.list())n.push(Kl(r,e,t));return n.push(c),ie(n)}).then(()=>{n=ql(i,`beforeRouteUpdate`,e,t);for(let r of i)r.updateGuards.forEach(r=>{n.push(Kl(r,e,t))});return n.push(c),ie(n)}).then(()=>{n=[];for(let r of s)if(r.beforeEnter){if(Ic(r.beforeEnter))for(let i of r.beforeEnter)n.push(Kl(i,e,t));else n.push(Kl(r.beforeEnter,e,t))}return n.push(c),ie(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=ql(s,`beforeRouteEnter`,e,t,D),n.push(c),ie(n))).then(()=>{n=[];for(let r of o.list())n.push(Kl(r,e,t));return n.push(c),ie(n)}).catch(e=>Bc(e,8)?e:Promise.reject(e))}function k(e,t,n){s.list().forEach(r=>D(()=>r(e,t,n)))}function A(e,t,n,r,a){let o=x(e,t);if(o)return o;let s=t===Ol,l=Yc?history.state:{};n&&(r||s?i.replace(e.fullPath,Nc({scroll:s&&l&&l.scroll},a)):i.push(e.fullPath,a)),c.value=e,te(e,t,n,s),L()}let j;function M(){j||=i.listen((e,t,n)=>{if(!re.listening)return;let r=y(e),a=w(r,re.currentRoute.value);if(a){T(Nc(a,{replace:!0,force:!0}),r).catch(Fc);return}u=r;let o=c.value;Yc&&n.delta&&Ll(Fl(o.fullPath,n.delta)),O(r,o).catch(e=>Bc(e,12)?e:Bc(e,2)?(T(Nc(b(e.to),{force:!0}),r).then(e=>{Bc(e,20)&&!n.delta&&n.type===`pop`&&i.go(-1,!1)}).catch(Fc),Promise.reject()):(n.delta&&i.go(-n.delta,!1),I(e,r,o))).then(e=>{e||=A(r,o,!1),e&&(n.delta&&!Bc(e,8)?i.go(-n.delta,!1):n.type===`pop`&&Bc(e,20)&&i.go(-1,!1)),k(r,o,e)}).catch(Fc)})}let N=Gl(),P=Gl(),F;function I(e,t,n){L(e);let r=P.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function ee(){return F&&c.value!==Ol?Promise.resolve():new Promise((e,t)=>{N.add([e,t])})}function L(e){return F||(F=!e,M(),N.list().forEach(([t,n])=>e?n(e):t()),N.reset()),e}function te(t,n,r,i){let{scrollBehavior:a}=e;if(!Yc||!a)return Promise.resolve();let o=!r&&Rl(Fl(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return ri().then(()=>a(t,n,o)).then(e=>t===c.value&&e&&Pl(e)).catch(e=>t===c.value&&I(e,t,n))}let R=e=>i.go(e),ne,z=new Set,re={currentRoute:c,listening:!0,addRoute:m,removeRoute:h,clearRoutes:g,hasRoute:v,getRoutes:_,resolve:y,options:e,push:S,replace:C,go:R,back:()=>R(-1),forward:()=>R(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:P.add,isReady:ee,install(e){e.component(`RouterLink`,Tu),e.component(`RouterView`,Mu),e.config.globalProperties.$router=re,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Y(c)}),Yc&&!ne&&c.value===Ol&&(ne=!0,S(i.location).catch(e=>{}));let t={};for(let e in Ol)Object.defineProperty(t,e,{get:()=>c.value[e],enumerable:!0});e.provide(Uc,re),e.provide(Wc,br(t)),e.provide(Gc,c);let n=e.unmount;z.add(e),e.unmount=function(){z.delete(e),z.size<1&&(u=Ol,j&&j(),j=null,c.value=Ol,ne=!1,F=!1),n()}}};function ie(e){return e.reduce((e,t)=>e.then(()=>D(t)),Promise.resolve())}return re}function Pu(e,t){let n=t.replace(/^\/+/,``);return!e||e===`/`?`/${n}`:`${e.endsWith(`/`)?e:`${e}/`}${n}`}function Fu(e){return Pu(`/vfx-studio/`,e)}var Iu={id:`aura`,name:`灵纹星环`,categoryId:`spell`,category:`法术`,summary:`三层符文环、中心涡柱和漂浮印记。`,description:`地面法阵、倾斜符文环、上升涡旋和中心光柱叠在一起。脉冲沿法阵向外走，而不是一片均匀的光点。`,tags:[`符文`,`环`,`涡旋`,`法阵`],accent:`#79f3ff`,loop:8,posterTime:2.2,params:z(`#79f3ff`,`#9a86ff`,[{key:`density`,label:`符文密度`,type:`float`,min:8,max:42,step:1,default:22},{key:`height`,label:`涡柱高度`,type:`float`,min:.6,max:2.4,step:.01,default:1.25}]),presets:[{id:`frost`,name:`霜环`,blurb:`慢转、密符文、短涡柱。`,values:{intensity:1,speed:.72,color:`#9af6ff`,colorB:`#d7f7ff`,density:32,height:.9}},{id:`violet`,name:`紫府`,blurb:`更快的外环和更高的涡柱。`,values:{intensity:1.15,speed:1.35,color:`#b9a6ff`,colorB:`#6de8ff`,density:18,height:1.7}},{id:`seal`,name:`金印`,blurb:`低涡柱，符文压得很密。`,values:{intensity:1.25,speed:.48,color:`#ffd27a`,colorB:`#ff8b6a`,density:40,height:.7}}],attribution:[Be,y],bloom:{strength:.28,radius:.26,threshold:.88},notes:`## 灵纹星环

这是原创场景，不是把粒子系统换了颜色。

- 地面是极坐标法阵：同心环、角度刻度和由哈希决定的符文缺口。
- 三枚圆环几何体各自倾斜、对向旋转，管壁着色器沿圆周画符文。
- 中心有粗细两根能量柱，噪声沿高度滚动。
- 涡旋粒子按种子走螺旋，不是随机布朗运动。另有一圈慢速印记。
- 脉冲环写在地面着色器里，按循环时间向外扩。

噪声使用 Ashima 的 simplex。辉光来自共享的 UnrealBloomPass，阈值压得较高，只让符文热芯开花。`},Lu={id:`fireworks`,name:`夜空烟花`,categoryId:`festival`,category:`庆典`,summary:`升空、爆开、下坠和余烬是同一发炮弹的四个阶段。`,description:`每发炮弹先拉出上升轨迹，再按种子方向爆成拖尾，然后分裂出白热碎光，最后只剩受重力牵引的余烬。`,tags:[`升空`,`爆裂`,`重力`,`余烬`],accent:`#ffb15a`,loop:5.4,posterTime:1.85,params:z(`#ffb15a`,`#ff6d8a`,[{key:`gravity`,label:`重力`,type:`float`,min:.4,max:2.2,step:.01,default:1},{key:`shells`,label:`炮弹数`,type:`float`,min:2,max:4,step:1,default:4}]),presets:[{id:`festival`,name:`庙会`,blurb:`四发交错，金红拖尾。`,values:{intensity:1.1,speed:1,color:`#ffc56a`,colorB:`#ff5d7a`,gravity:1,shells:4}},{id:`cold`,name:`冷焰`,blurb:`更慢，爆开后留得更久。`,values:{intensity:1.2,speed:.62,color:`#9ae7ff`,colorB:`#d8e4ff`,gravity:.55,shells:3}},{id:`signal`,name:`信号弹`,blurb:`两发高重力，白热头。`,values:{intensity:1.35,speed:1.25,color:`#fff1d2`,colorB:`#ff9a4a`,gravity:1.6,shells:2}}],attribution:[Be,y],bloom:{strength:.42,radius:.32,threshold:.78},notes:`## 夜空烟花

原创的分段弹道，不是静态烟花贴图。

- 少量种子扮演火箭：在爆点之前从地面拉到顶点。
- 主体在顶点按种子方向散开，位移是 \`速度 × 时间 + 重力 × 时间²\`。
- 靠近尾部的种子晚半秒再炸一次，当作二次碎裂。
- 余烬是另一套圆形粒子，只在爆开后出现，下落更慢。
- 地面有对应的光池，位置和炮弹原点一致。
- 天空是渐变穹顶加星，不是一张背景图。

拖尾用相机朝向的四边形，热芯在头部，尾部变细。Bloom 阈值让白热头部开花，彩色尾迹还留得住。`},Ru={id:`sword`,name:`月华剑气`,categoryId:`weapon`,category:`兵刃`,summary:`收束的弯刃、热刃口、冲击环和沿切线飞出的火星。`,description:`剑气是一条按贝塞尔展开的锥形飘带。刃口保持白热，外缘吃辅色，斩击落到末端时地面弹出冲击环。`,tags:[`斩击`,`飘带`,`冲击环`,`火星`],accent:`#e8fbff`,loop:3.4,posterTime:.36,params:z(`#d9fbff`,`#79e7ff`,[{key:`width`,label:`刃宽`,type:`float`,min:.35,max:1.8,step:.01,default:1},{key:`sparks`,label:`火星`,type:`float`,min:.2,max:2,step:.01,default:1}]),presets:[{id:`crescent`,name:`月弧`,blurb:`标准宽度，青白刃。`,values:{intensity:1.05,speed:1,color:`#e7fdff`,colorB:`#7ee9ff`,width:1,sparks:1}},{id:`break`,name:`断岳`,blurb:`更快、更宽，冲击更亮。`,values:{intensity:1.4,speed:1.45,color:`#ffffff`,colorB:`#ffd29a`,width:1.45,sparks:1.4}},{id:`thread`,name:`细霜`,blurb:`窄刃，火星收着走。`,values:{intensity:.9,speed:.72,color:`#c9f6ff`,colorB:`#9eb6ff`,width:.48,sparks:.45}}],attribution:[Be,y],bloom:{strength:.32,radius:.28,threshold:.86},notes:`## 月华剑气

三条错开的贝塞尔飘带，不是一张拉伸的贴图。

- 飘带由一串相机朝向的四边形拼成，宽度用正弦收成两端尖、中间宽。
- 显露窗口沿曲线移动，所以能看见斩击被“抽出来”。
- 刃心是白色，外缘是辅色，前端还有一截更热的刃口。
- 每条斩击在末端触发一枚扩散冲击环。
- 火星从当前刃尖位置迸出，方向沿着曲线切线附近散开。

曲线控制点写在实现里，着色器只负责展开和上色。`},zu={id:`projectile`,name:`追影飞弹`,categoryId:`weapon`,category:`兵刃`,summary:`五发带蛇形修正的能量弹，尾迹、枪口和命中环分开画。`,description:`弹头走解析弹道，尾迹取稍早的位置拉成细带。命中前枪口闪光，命中时各自弹出冲击环。`,tags:[`飞弹`,`尾迹`,`命中`,`枪口`],accent:`#8eb6ff`,loop:2.8,posterTime:1.05,params:z(`#8eb6ff`,`#f0c27a`,[{key:`weave`,label:`蛇形`,type:`float`,min:0,max:1.8,step:.01,default:.7},{key:`trail`,label:`尾长`,type:`float`,min:.2,max:1.6,step:.01,default:.85}]),presets:[{id:`volley`,name:`齐射`,blurb:`五发钴蓝色，尾迹清楚。`,values:{intensity:1.1,speed:1,color:`#9ec2ff`,colorB:`#f2c98a`,weave:.65,trail:.9}},{id:`straight`,name:`直射`,blurb:`几乎不蛇形，尾迹更短。`,values:{intensity:1,speed:1.3,color:`#d7e6ff`,colorB:`#ffffff`,weave:.08,trail:.4}},{id:`hunt`,name:`追猎`,blurb:`慢，蛇形大，命中更暖。`,values:{intensity:1.2,speed:.7,color:`#6ef0c5`,colorB:`#ffe08a`,weave:1.4,trail:1.25}}],attribution:[Be,y],bloom:{strength:.5,radius:.34,threshold:.74},notes:`## 追影飞弹

五条解析弹道，编号固定，所以每次循环都走同一组弧线。

- 头部是短而亮的拖尾，尾部采样稍早的弹道点。
- 蛇形是沿弹道的正弦，越接近命中越小。
- 枪口闪光只在每发弹道开始的一小段出现。
- 命中环用圆片着色器，按各自相位展开。
- 背景是三层不同深度的雾片，给弹道一个峡谷纵深，不是随机尘埃。`},Bu={id:`waterfall`,name:`层瀑云雾`,categoryId:`nature`,category:`自然`,summary:`四层水幕、落点泡沫、上升薄雾，水池用 three.js 的反射水面。`,description:`水幕是被噪声撕开的薄片，不是粒子雨。落点有泡沫和短喷溅，雾是正常混合的软团，水池单独反射场景。`,tags:[`水幕`,`泡沫`,`薄雾`,`反射`],accent:`#b7fff2`,loop:8,posterTime:1.4,params:z(`#d9fff8`,`#7ee0ff`,[{key:`flow`,label:`流速`,type:`float`,min:.35,max:2,step:.01,default:1},{key:`mist`,label:`雾量`,type:`float`,min:.2,max:1.8,step:.01,default:1}]),presets:[{id:`moon`,name:`月瀑`,blurb:`冷白水幕，雾比较满。`,values:{intensity:1,speed:.85,color:`#e7fffb`,colorB:`#8fdfff`,flow:.8,mist:1.15}},{id:`torrent`,name:`急流`,blurb:`水幕更快，喷溅更亮。`,values:{intensity:1.25,speed:1.4,color:`#ffffff`,colorB:`#9af0ff`,flow:1.6,mist:.7}},{id:`glen`,name:`深涧`,blurb:`压暗，只留薄雾和暗青。`,values:{intensity:.75,speed:.6,color:`#9fe7dd`,colorB:`#4f8f98`,flow:.55,mist:1.4}}],attribution:[oe,Be,y],bloom:{strength:.32,radius:.28,threshold:.86},notes:`## 层瀑云雾

水池是 three.js Water 的改编，水幕、泡沫、喷溅和焦散是原创。

- 四片不同宽度和深度的平面，顶点随噪声起伏，片元用滚动噪声挖出水流间隙。
- 泡沫粒子集中在落点一带，上下浮动。
- 薄雾用正常混合、很低的透明度，避免变成另一团加法光点。
- 落点另有短促喷溅拖尾。
- 水面之上铺了一层很淡的焦散。
- 岩壁是不透明的噪声明暗，用来把水幕衬出来。

Water 的反射目标在切换效果时通过新增的 dispose() 释放。`},Vu={id:`lightning`,name:`裂空雷`,categoryId:`nature`,category:`自然`,summary:`上游 LightningStrike 的分支电弧，加上落地闪光和斜雨。`,description:`电弧的分叉和传播来自 three.js r152 的 LightningStrike。场景自己补了雷云、落地冲击和同一方向的雨丝。`,tags:[`闪电`,`分支`,`落点`,`雷雨`],accent:`#d9e6ff`,loop:6,posterTime:.35,params:z(`#e7f0ff`,`#8f7dff`,[{key:`rough`,label:`曲折`,type:`float`,min:.2,max:1,step:.01,default:.82},{key:`bolts`,label:`主弧`,type:`float`,min:1,max:3,step:1,default:2}]),presets:[{id:`storm`,name:`夜雷`,blurb:`两条主弧，紫边。`,values:{intensity:1.15,speed:1,color:`#f4f7ff`,colorB:`#9a86ff`,rough:.86,bolts:2}},{id:`clean`,name:`直击`,blurb:`更直，单弧，白热。`,values:{intensity:1.3,speed:.7,color:`#ffffff`,colorB:`#c5d8ff`,rough:.35,bolts:1}},{id:`web`,name:`蛛网`,blurb:`三条更皱的弧。`,values:{intensity:1,speed:1.3,color:`#d5e4ff`,colorB:`#6ec8ff`,rough:.96,bolts:3}}],attribution:[_,ae,Be,y],bloom:{strength:.38,radius:.28,threshold:.82},notes:`## 裂空雷

分支网格不是手写的随机折线。\`LightningStrike.update(time)\` 负责传播、分叉和半径。

本地只做这些层：

- 电弧材质按 UV 把棱柱中心画成白热，边缘落到辅色。
- 天空穹顶跟着落点闪一下。
- 落点有冲击环和一小组火星。
- 雨是同一风向的短拖尾，用来交代风暴，不是主效果。

上游文件在源码页的 \`LightningStrike.js\`。改动只有 SimplexNoise 的导入路径。`},Hu={id:`explosion`,name:`技能爆发`,categoryId:`spell`,category:`法术`,summary:`聚能、双层冲击壳、放射拖尾、碎块和烟。`,description:`一个循环里先把光点吸向核心，再炸开两层菲涅尔壳。碎块走抛物线，烟用正常混合，地面留下灼环。`,tags:[`聚能`,`冲击`,`碎块`,`烟`],accent:`#ffb15e`,loop:3.6,posterTime:.95,params:z(`#ffd7a1`,`#ff6b3d`,[{key:`charge`,label:`聚能`,type:`float`,min:.4,max:1.6,step:.01,default:1},{key:`debris`,label:`碎块`,type:`float`,min:.3,max:1.8,step:.01,default:1}]),presets:[{id:`cast`,name:`咏唱`,blurb:`聚能更久，金核。`,values:{intensity:1.1,speed:.8,color:`#ffe0a8`,colorB:`#ff7a3c`,charge:1.25,debris:.8}},{id:`nova`,name:`新星`,blurb:`快，壳更亮，碎块多。`,values:{intensity:1.4,speed:1.35,color:`#fff6ea`,colorB:`#ff4d6a`,charge:.7,debris:1.5}},{id:`ember`,name:`余烬`,blurb:`低亮度，烟和碎块留得更清楚。`,values:{intensity:.75,speed:.7,color:`#ffb07a`,colorB:`#6a2a22`,charge:.9,debris:1.2}}],attribution:[Be,y],bloom:{strength:.34,radius:.3,threshold:.84},notes:`## 技能爆发

时间轴写在着色器里，约 3.6 秒循环。

- 0 到 0.55 秒：粒子向核心收拢。
- 0.55 秒：两层菲涅尔球壳依次胀开。
- 同期放射状拖尾冲出去。
- 碎块是方块实例，带旋转和重力，不是光点。
- 烟是正常混合的大软粒子，颜色偏灰，避免和火花糊成一团。
- 地面灼环在爆心停留后变暗。`},Uu={id:`portal`,name:`星门裂隙`,categoryId:`spell`,category:`法术`,summary:`门环符文、轨道火星，门内是扭曲过的星空渲染。`,description:`先把星空画进一张渲染目标，门洞再按极坐标把它拧成旋涡，上面另压能量细丝。门外仍是同一片星空。`,tags:[`传送门`,`扭曲`,`符文`,`星空`],accent:`#c7b6ff`,loop:10,posterTime:1.2,params:z(`#d7cbff`,`#7af0ff`,[{key:`twist`,label:`扭曲`,type:`float`,min:.2,max:2.2,step:.01,default:1},{key:`throat`,label:`喉深`,type:`float`,min:.4,max:1.6,step:.01,default:1}]),presets:[{id:`violet`,name:`紫阙`,blurb:`标准旋涡，紫环青丝。`,values:{intensity:1.05,speed:.8,color:`#d8ccff`,colorB:`#7af0ff`,twist:1,throat:1}},{id:`well`,name:`深井`,blurb:`拧得更紧，中心更暗。`,values:{intensity:.9,speed:.55,color:`#9eb6ff`,colorB:`#f2f6ff`,twist:1.7,throat:1.4}},{id:`dawn`,name:`曙门`,blurb:`暖色门环，旋转更快。`,values:{intensity:1.2,speed:1.25,color:`#ffd0a4`,colorB:`#ff8d6a`,twist:.7,throat:.75}}],attribution:[Be,y],bloom:{strength:.26,radius:.24,threshold:.9},notes:`## 星门裂隙

门内不是一张贴图。每帧把星空场景画进半精度渲染目标，门洞着色器再用极坐标和噪声偏移采样它。

- 门外的穹顶和门内采样的是同一套星空着色器，所以扭曲读得出来。
- 门环是圆环几何体，沿圆周走符文，不靠粒子假装圆环。
- 一圈火星被约束在环上。
- 底座是暗色圆台加法阵，把门户放在地上。

低画质会把渲染目标降到 256。切换效果时渲染目标随 disposer 释放。`},Wu={id:`blackhole`,name:`吸积黑洞`,categoryId:`cosmos`,category:`天体`,summary:`暗视界、光子环、多普勒吸积盘，背景星光被偏折。`,description:`盘面按半径从白热落到暗赤，一侧更亮。背景球用近似偏折把星点扯向光子环，中间是纯黑的视界。`,tags:[`黑洞`,`吸积盘`,`透镜`,`恒星`],accent:`#ffd2a8`,loop:12,posterTime:2,params:z(`#fff1dd`,`#ff7a3a`,[{key:`spin`,label:`转速`,type:`float`,min:.2,max:2,step:.01,default:1},{key:`lens`,label:`偏折`,type:`float`,min:.2,max:1.8,step:.01,default:1}]),presets:[{id:`sagittarius`,name:`银心`,blurb:`暖盘，中等偏折。`,values:{intensity:1.05,speed:.7,color:`#fff4e4`,colorB:`#ff7a32`,spin:.85,lens:1}},{id:`quiet`,name:`静默`,blurb:`转得慢，盘更薄更暗。`,values:{intensity:.75,speed:.4,color:`#ffd8c2`,colorB:`#8a3a22`,spin:.35,lens:.7}},{id:`photon`,name:`光子环`,blurb:`偏折拉满，内缘更白。`,values:{intensity:1.3,speed:1.1,color:`#ffffff`,colorB:`#ffb089`,spin:1.4,lens:1.55}}],attribution:[Be,y],bloom:{strength:.22,radius:.22,threshold:.92},notes:`## 吸积黑洞

偏折是着色器里的近似，不是引用某篇论文的实现代码。

- 背景在大球内侧计算视线，按到原点的最近距离把方向轻轻拧弯，再采样星点。
- 光子环是很细的圆环，只在内缘发白。
- 吸积盘用半径决定温度，用角度做多普勒明暗，再用螺旋压出尘带。
- 视界是不发光的黑球，挡住盘心。
- 吸积流是几条收束的螺旋拖尾，终点落在视界外。

Bloom 阈值高，免得整张盘糊成一块光。`},Gu={id:`aurora`,name:`极光帷幕`,categoryId:`nature`,category:`自然`,summary:`三道折曲光幕、冰面反光和一条银河。`,description:`光幕是高分段平面，顶点按不同频率起伏。颜色沿高度和噪声分成青、绿和紫，不是竖着的粒子条。`,tags:[`极光`,`光幕`,`冰面`,`银河`],accent:`#9dffc8`,loop:14,posterTime:2.4,params:z(`#b8ffd8`,`#8d7dff`,[{key:`fold`,label:`褶皱`,type:`float`,min:.2,max:1.8,step:.01,default:1},{key:`veil`,label:`透明度`,type:`float`,min:.35,max:1.4,step:.01,default:1}]),presets:[{id:`north`,name:`北冕`,blurb:`青绿主幕，褶皱适中。`,values:{intensity:1,speed:.55,color:`#b6ffd4`,colorB:`#7d5cff`,fold:1,veil:1}},{id:`quiet`,name:`静夜`,blurb:`几乎不走，幕更薄。`,values:{intensity:.8,speed:.25,color:`#d9fff0`,colorB:`#9ecbff`,fold:.45,veil:.7}},{id:`storm`,name:`磁暴`,blurb:`褶皱拉大，紫色压上来。`,values:{intensity:1.2,speed:1.1,color:`#7dffb0`,colorB:`#c084ff`,fold:1.55,veil:1.15}}],attribution:[Be,y],bloom:{strength:.18,radius:.22,threshold:.9},notes:`## 极光帷幕

三片光幕各自有相位，顶点位移和片元色带都写在着色器里。

- 高度越高，横向波动越大。
- 噪声把幕折成亮带和暗隙。
- 底下有一层压暗、拉扁的倒影，当作冰面反射。
- 天空有一条横向银河，星点用哈希网格，不是噪声糊成的雾。

绿色是极光本身的颜色，界面强调色仍然是青和紫。`},Ku={id:`beam`,name:`离子束`,categoryId:`weapon`,category:`兵刃`,summary:`六角枪口、热芯、外壳电弧和被打中的护盾。`,description:`光束是两层圆柱：里面一道细白芯，外面一层滚动的离子壳。枪口有三枚六角环，末端护盾跟着冲击起涟漪。`,tags:[`光束`,`护盾`,`电弧`,`枪口`],accent:`#67f6ff`,loop:4,posterTime:.8,params:z(`#67f6ff`,`#d8fbff`,[{key:`width`,label:`束宽`,type:`float`,min:.4,max:1.6,step:.01,default:1},{key:`flicker`,label:`扰动`,type:`float`,min:.2,max:2,step:.01,default:1}]),presets:[{id:`ion`,name:`离子`,blurb:`标准青束。`,values:{intensity:1.1,speed:1,color:`#67f6ff`,colorB:`#e7fdff`,width:1,flicker:1}},{id:`lance`,name:`长枪`,blurb:`更细、更快、更白。`,values:{intensity:1.3,speed:1.5,color:`#e9fbff`,colorB:`#9ad7ff`,width:.55,flicker:.45}},{id:`unstable`,name:`不稳`,blurb:`束体发胖，扰动很重。`,values:{intensity:1,speed:.8,color:`#8f7dff`,colorB:`#67f6ff`,width:1.4,flicker:1.7}}],attribution:[_,ae,Be,y],bloom:{strength:.3,radius:.24,threshold:.86},notes:`## 离子束

束体是圆柱几何，不是一条拉长的广告牌。

- 内芯细、高亮、少噪声。
- 外壳更粗，噪声沿长度快速滚动，半径在顶点里轻微胀缩。
- 枪口三枚扁环错相旋转。
- 两侧短电弧使用 LightningStrike，只当作束体上的二次放电。
- 末端是菲涅尔护盾，冲击粒子从命中点溅开。`},qu={id:`meteor`,name:`流星坠`,categoryId:`cosmos`,category:`天体`,summary:`夜侧行星、大气辉光，以及会中途碎开的燃烧流星。`,description:`行星只露出一条大气边缘和稀疏灯火。流星先是一条白热头，过了碎裂点才分裂成更短的子轨迹。`,tags:[`流星`,`大气`,`碎裂`,`行星`],accent:`#ffb15a`,loop:5.5,posterTime:1.35,params:z(`#fff1d4`,`#ff8a3d`,[{key:`burn`,label:`燃烧`,type:`float`,min:.4,max:1.8,step:.01,default:1},{key:`breakup`,label:`碎裂`,type:`float`,min:.35,max:.8,step:.01,default:.62}]),presets:[{id:`entry`,name:`再入`,blurb:`标准角度，中段碎裂。`,values:{intensity:1.1,speed:1,color:`#fff3d8`,colorB:`#ff8a3d`,burn:1,breakup:.62}},{id:`slow`,name:`慢火`,blurb:`烧得更久，碎裂更晚。`,values:{intensity:.95,speed:.62,color:`#ffe0b0`,colorB:`#ff5a2a`,burn:1.4,breakup:.74}},{id:`shower`,name:`流星雨`,blurb:`更快，更早碎开。`,values:{intensity:1.25,speed:1.45,color:`#ffffff`,colorB:`#ffd08a`,burn:.8,breakup:.42}}],attribution:[Be,y],bloom:{strength:.55,radius:.34,threshold:.72},notes:`## 流星坠

行星和流星是两套几何。

- 行星是大球，夜侧几乎全黑，只在边缘留一层大气，暗面有极稀的灯火。
- 再外面一圈更淡的大气壳。
- 每颗流星是相机朝向的拖尾。头是白的，尾落到辅色。
- 走过碎裂参数之后，父轨迹变短，另一组种子从同一点岔出去。

颜色是再入的暖色，和法术青紫、瀑布冷青分开。`},Ju=`modulepreload`,Yu=function(e){return`/vfx-studio/`+e},Xu={},Zu=function(e){return e.pathname.endsWith(`.css`)},Qu=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},$u=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Yu(t,n);let r=s(t),i=Zu(r);return Qu(Xu,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:Ju,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},ed=[{id:`all`,name:`全部`},{id:`spell`,name:`法术`},{id:`weapon`,name:`兵刃`},{id:`nature`,name:`自然`},{id:`cosmos`,name:`天体`},{id:`festival`,name:`庆典`}],td=[{meta:Iu,load:()=>$u(()=>import(`./aura-D5t-nTjX.js`).then(e=>e.effectModule),__vite__mapDeps([0,1,2,3]))},{meta:Ru,load:()=>$u(()=>import(`./sword-Dkvas5Vw.js`).then(e=>e.effectModule),__vite__mapDeps([4,1,2,3]))},{meta:Lu,load:()=>$u(()=>import(`./fireworks-CDQYSEi3.js`).then(e=>e.effectModule),__vite__mapDeps([5,1,2,3]))},{meta:Uu,load:()=>$u(()=>import(`./portal-zrsulfDa.js`).then(e=>e.effectModule),__vite__mapDeps([6,1,2,3]))},{meta:Bu,load:()=>$u(()=>import(`./waterfall-paheCxvf.js`).then(e=>e.effectModule),__vite__mapDeps([7,1,2,3]))},{meta:Vu,load:()=>$u(()=>import(`./lightning-DhfG-TuN.js`).then(e=>e.effectModule),__vite__mapDeps([8,9,2,1,3]))},{meta:Hu,load:()=>$u(()=>import(`./explosion-CXA4Ir16.js`).then(e=>e.effectModule),__vite__mapDeps([10,1,2,3]))},{meta:zu,load:()=>$u(()=>import(`./projectile-rhk2LF69.js`).then(e=>e.effectModule),__vite__mapDeps([11,1,2,3]))},{meta:Ku,load:()=>$u(()=>import(`./beam-BXzB4lFj.js`).then(e=>e.effectModule),__vite__mapDeps([12,9,2,1,3]))},{meta:Wu,load:()=>$u(()=>import(`./blackhole-DcipRc9n.js`).then(e=>e.effectModule),__vite__mapDeps([13,1,2,3]))},{meta:Gu,load:()=>$u(()=>import(`./aurora-WZazNr1a.js`).then(e=>e.effectModule),__vite__mapDeps([14,1,2]))},{meta:qu,load:()=>$u(()=>import(`./meteor-fFTUF0a0.js`).then(e=>e.effectModule),__vite__mapDeps([15,1,2,3]))}];function nd(e){let t=td.find(t=>t.meta.id===e),n=td[0];if(t)return t;if(!n)throw Error(`效果注册表是空的`);return n}function rd(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function id(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Z={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
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
}`,lights_fragment_begin:`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
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
void main() {
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
#include <envmap_physical_pars_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
#include <envmap_physical_pars_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},Q={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new k},alphaMap:{value:null},alphaMapTransform:{value:new k},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new k}},envmap:{envMap:{value:null},envMapRotation:{value:new k},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new k}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new k}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new k},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new k},normalScale:{value:new E(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new k},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new k}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new k}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new k}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new k},alphaTest:{value:0},uvTransform:{value:new k}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new E(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new k},alphaMap:{value:null},alphaMapTransform:{value:new k},alphaTest:{value:0}}},ad={basic:{uniforms:p([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.fog]),vertexShader:Z.meshbasic_vert,fragmentShader:Z.meshbasic_frag},lambert:{uniforms:p([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:Z.meshlambert_vert,fragmentShader:Z.meshlambert_frag},phong:{uniforms:p([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Z.meshphong_vert,fragmentShader:Z.meshphong_frag},standard:{uniforms:p([Q.common,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.roughnessmap,Q.metalnessmap,Q.fog,Q.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag},toon:{uniforms:p([Q.common,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.gradientmap,Q.fog,Q.lights,{emissive:{value:new Je(0)}}]),vertexShader:Z.meshtoon_vert,fragmentShader:Z.meshtoon_frag},matcap:{uniforms:p([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,{matcap:{value:null}}]),vertexShader:Z.meshmatcap_vert,fragmentShader:Z.meshmatcap_frag},points:{uniforms:p([Q.points,Q.fog]),vertexShader:Z.points_vert,fragmentShader:Z.points_frag},dashed:{uniforms:p([Q.common,Q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Z.linedashed_vert,fragmentShader:Z.linedashed_frag},depth:{uniforms:p([Q.common,Q.displacementmap]),vertexShader:Z.depth_vert,fragmentShader:Z.depth_frag},normal:{uniforms:p([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,{opacity:{value:1}}]),vertexShader:Z.meshnormal_vert,fragmentShader:Z.meshnormal_frag},sprite:{uniforms:p([Q.sprite,Q.fog]),vertexShader:Z.sprite_vert,fragmentShader:Z.sprite_frag},background:{uniforms:{uvTransform:{value:new k},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Z.background_vert,fragmentShader:Z.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new k}},vertexShader:Z.backgroundCube_vert,fragmentShader:Z.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Z.cube_vert,fragmentShader:Z.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Z.equirect_vert,fragmentShader:Z.equirect_frag},distance:{uniforms:p([Q.common,Q.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Z.distance_vert,fragmentShader:Z.distance_frag},shadow:{uniforms:p([Q.lights,Q.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Z.shadow_vert,fragmentShader:Z.shadow_frag}};ad.physical={uniforms:p([ad.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new k},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new k},clearcoatNormalScale:{value:new E(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new k},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new k},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new k},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new k},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new k},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new k},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new k},transmissionSamplerSize:{value:new E},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new k},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new k},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new k},anisotropyVector:{value:new E},anisotropyMap:{value:null},anisotropyMapTransform:{value:new k}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag};var od={r:0,b:0,g:0},sd=new e,cd=new k;cd.set(-1,0,0,0,1,0,0,0,1);function ld(e,t,n,i,a,o){let s=new Je(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function h(t){let r=!1,i=m(t);i===null?_(s,c):i&&i.isColor&&(_(i,1),r=!0);let a=e.xr.getEnvironmentBlendMode();a===`additive`?n.buffers.color.setClear(0,0,0,1,o):a===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,o),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(t,n){let r=m(n);r&&r.isCubeTexture?(u===void 0&&(u=new be(new Le(1,1,1),new _e({name:`BackgroundCubeMaterial`,uniforms:O(ad.backgroundCube.uniforms),vertexShader:ad.backgroundCube.vertexShader,fragmentShader:ad.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=r,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(sd.makeRotationFromEuler(n.backgroundRotation)).transpose(),r.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(cd),u.material.toneMapped=de.getTransfer(r.colorSpace)!==Ae,(d!==r||f!==r.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):r&&r.isTexture&&(l===void 0&&(l=new be(new ve(2,2),new _e({name:`BackgroundMaterial`,uniforms:O(ad.background.uniforms),vertexShader:ad.background.vertexShader,fragmentShader:ad.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=r,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=de.getTransfer(r.colorSpace)!==Ae,r.matrixAutoUpdate===!0&&r.updateMatrix(),l.material.uniforms.uvTransform.value.copy(r.matrix),(d!==r||f!==r.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}function _(t,i){t.getRGB(od,r(e)),n.buffers.color.setClear(od.r,od.g,od.b,i,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,_(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,_(s,c)},render:h,addToRenderList:g,dispose:v}}function ud(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function dd(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function fd(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(R(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&R(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&R(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function pd(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Ge,s=new k,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var md=class extends S{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new i(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Le(5,5,5),i=new _e({name:`CubemapFromEquirect`,uniforms:O(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new be(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=v),new qe(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},hd=256,gd=3,_d=20,vd=256,yd=16,bd=3,xd=new B,Sd=new Je,Cd=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new qe(1,10,null),this._boxMesh=new be(new Le(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=xd}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(Sd));let h=new qe(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ad(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(hd,M(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?hd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=wd(e,!1,!1),n=Math.log2(e)-gd;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=wd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ad()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=kd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Ed(),this._integrationMaterial=Dd());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/yd);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-bd)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(vd*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Od());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function wd(e,t,n){return new md(e,{minFilter:ze,generateMipmaps:t,type:L,colorSpace:ie,depthBuffer:n})}function Td(e,t,n){return new _e({name:e,uniforms:t,vertexShader:Z.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function Ed(){return Td(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${vd}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Dd(){return Td(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:yd}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Od(){return Td(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${_d}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function kd(){return Td(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Ad(){return Td(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function jd(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new md(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Cd(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Cd(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Md(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&f(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Nd(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?W:ce)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function Pd(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Fd(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:x(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Id(e,t,r){let i=new WeakMap,a=new n;function o(n,o,c){let l=n.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u===void 0?0:u.length,f=i.get(o);if(f===void 0||f.count!==d){f!==void 0&&f.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,r=o.morphAttributes.color!==void 0,c=o.morphAttributes.position||[],l=o.morphAttributes.normal||[],u=o.morphAttributes.color||[],p=0;e===!0&&(p=1),n===!0&&(p=2),r===!0&&(p=3);let h=o.attributes.position.count*p,g=1;h>t.maxTextureSize&&(g=Math.ceil(h/t.maxTextureSize),h=t.maxTextureSize);let _=new Float32Array(h*g*4*d),v=new s(_,h,g,d);v.type=m,v.needsUpdate=!0;let y=p*4;for(let t=0;t<d;t++){let i=c[t],o=l[t],s=u[t],d=h*g*4*t;for(let t=0;t<i.count;t++){let c=t*y;e===!0&&(a.fromBufferAttribute(i,t),_[d+c+0]=a.x,_[d+c+1]=a.y,_[d+c+2]=a.z,_[d+c+3]=0),n===!0&&(a.fromBufferAttribute(o,t),_[d+c+4]=a.x,_[d+c+5]=a.y,_[d+c+6]=a.z,_[d+c+7]=0),r===!0&&(a.fromBufferAttribute(s,t),_[d+c+8]=a.x,_[d+c+9]=a.y,_[d+c+10]=a.z,_[d+c+11]=s.itemSize===4?a.w:1)}}f={count:d,texture:v,size:new E(h,g)},i.set(o,f);function b(){v.dispose(),i.delete(o),o.removeEventListener(`dispose`,b)}o.addEventListener(`dispose`,b)}if(n.isInstancedMesh===!0&&n.morphTexture!==null)c.getUniforms().setValue(e,`morphTexture`,n.morphTexture,r);else{let t=0;for(let e=0;e<l.length;e++)t+=l[e];let n=o.morphTargetsRelative?1:1-t;c.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),c.getUniforms().setValue(e,`morphTargetInfluences`,l)}c.getUniforms().setValue(e,`morphTargetsTexture`,f.texture,r),c.getUniforms().setValue(e,`morphTargetsTextureSize`,f.size)}return{update:o}}function Ld(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Rd={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function zd(e,n,r,i,a,o){let s=new S(n,r,{type:e,depthBuffer:a,stencilBuffer:o,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),c=null,u=null,d=null,f=new Se;f.setAttribute(`position`,new l([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute(`uv`,new l([0,2,0,0,2,0],2));let p=new A({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new be(f,p),h=new ge(-1,1,1,-1,0,1),g=null,_=null,v=!1,y,b=null,x=[],C=!1;this.setSize=function(e,t){s.setSize(e,t),c!==null&&c.setSize(e,t),u!==null&&u.setSize(e,t);for(let n=0;n<x.length;n++){let r=x[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){x=e,C=x.length>0&&x[0].isRenderPass===!0;let n=s.width,r=s.height;x.length>0&&c===null&&(c=new S(n,r,{type:L,depthBuffer:!1,stencilBuffer:!1}),u=new S(n,r,{type:L,depthBuffer:!1,stencilBuffer:!1}));let i=a===!0&&x.some(e=>e.needsDepthTexture===!0);i!==(s.depthTexture!==null)&&(i===!0&&d===null&&(d=new t(n,r),o===!0&&(d.format=Oe,d.type=P)),s.dispose(),s.depthTexture=i?d:null,s.resolveDepthBuffer=i,s.storeMultisampledDepthBuffer=i);for(let e=0;e<x.length;e++){let t=x[e];t.setSize&&t.setSize(n,r),i&&t.needsDepthTexture===!0&&t.setDepthTexture&&t.setDepthTexture(d)}},this.begin=function(e,t){if(v||e.toneMapping===0&&x.length===0)return!1;if(b=t,t!==null){let e=t.width,n=t.height;(s.width!==e||s.height!==n)&&this.setSize(e,n)}return C===!1&&e.setRenderTarget(s),y=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return C},this.end=function(e,t){e.toneMapping=y,v=!0;let n=s,r=c;for(let i=0;i<x.length;i++){let a=x[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===c?u:c))}if(g!==e.outputColorSpace||_!==e.toneMapping){g=e.outputColorSpace,_=e.toneMapping,p.defines={},de.getTransfer(g)===`srgb`&&(p.defines.SRGB_TRANSFER=``);let t=Rd[_];t&&(p.defines[t]=``),p.needsUpdate=!0}p.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(b),e.render(m,h),b=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){s.dispose(),c!==null&&c.dispose(),u!==null&&u.dispose(),f.dispose(),p.dispose()}}var Bd=new Ne,Vd=new t(1,1),Hd=new N(1),Ud=new s,Wd=new F,Gd=new i,Kd=[],qd=[],Jd=new Float32Array(16),Yd=new Float32Array(9),Xd=new Float32Array(4);function Zd(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Kd[i];if(a===void 0&&(a=new Float32Array(i),Kd[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Qd(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function $d(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function ef(e,t){let n=qd[t];n===void 0&&(n=new Int32Array(t),qd[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function tf(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function nf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qd(n,t))return;e.uniform2fv(this.addr,t),$d(n,t)}}function rf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Qd(n,t))return;e.uniform3fv(this.addr,t),$d(n,t)}}function af(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qd(n,t))return;e.uniform4fv(this.addr,t),$d(n,t)}}function of(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Qd(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),$d(n,t)}else{if(Qd(n,r))return;Xd.set(r),e.uniformMatrix2fv(this.addr,!1,Xd),$d(n,r)}}function sf(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Qd(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),$d(n,t)}else{if(Qd(n,r))return;Yd.set(r),e.uniformMatrix3fv(this.addr,!1,Yd),$d(n,r)}}function cf(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Qd(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),$d(n,t)}else{if(Qd(n,r))return;Jd.set(r),e.uniformMatrix4fv(this.addr,!1,Jd),$d(n,r)}}function lf(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function uf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qd(n,t))return;e.uniform2iv(this.addr,t),$d(n,t)}}function df(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Qd(n,t))return;e.uniform3iv(this.addr,t),$d(n,t)}}function ff(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qd(n,t))return;e.uniform4iv(this.addr,t),$d(n,t)}}function pf(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function mf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qd(n,t))return;e.uniform2uiv(this.addr,t),$d(n,t)}}function hf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Qd(n,t))return;e.uniform3uiv(this.addr,t),$d(n,t)}}function gf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qd(n,t))return;e.uniform4uiv(this.addr,t),$d(n,t)}}function _f(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function vf(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?_f(Vd):Bd,n.setTexture2D(t||a,i)}function yf(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Wd,i)}function bf(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?_f(Hd):Gd,n.setTextureCube(t||a,i)}function xf(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Ud,i)}function Sf(e){switch(e){case 5126:return tf;case 35664:return nf;case 35665:return rf;case 35666:return af;case 35674:return of;case 35675:return sf;case 35676:return cf;case 5124:case 35670:return lf;case 35667:case 35671:return uf;case 35668:case 35672:return df;case 35669:case 35673:return ff;case 5125:return pf;case 36294:return mf;case 36295:return hf;case 36296:return gf;case 35678:case 36198:case 36298:case 36306:case 35682:return vf;case 35679:case 36299:case 36307:return yf;case 35680:case 36300:case 36308:case 36293:return bf;case 36289:case 36303:case 36311:case 36292:return xf}}function Cf(e,t){e.uniform1fv(this.addr,t)}function wf(e,t){let n=Zd(t,this.size,2);e.uniform2fv(this.addr,n)}function Tf(e,t){let n=Zd(t,this.size,3);e.uniform3fv(this.addr,n)}function Ef(e,t){let n=Zd(t,this.size,4);e.uniform4fv(this.addr,n)}function Df(e,t){let n=Zd(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Of(e,t){let n=Zd(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function kf(e,t){let n=Zd(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Af(e,t){e.uniform1iv(this.addr,t)}function jf(e,t){e.uniform2iv(this.addr,t)}function Mf(e,t){e.uniform3iv(this.addr,t)}function Nf(e,t){e.uniform4iv(this.addr,t)}function Pf(e,t){e.uniform1uiv(this.addr,t)}function Ff(e,t){e.uniform2uiv(this.addr,t)}function If(e,t){e.uniform3uiv(this.addr,t)}function Lf(e,t){e.uniform4uiv(this.addr,t)}function Rf(e,t,n){let r=this.cache,i=t.length,a=ef(n,i);Qd(r,a)||(e.uniform1iv(this.addr,a),$d(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?_f(Vd):Bd;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function zf(e,t,n){let r=this.cache,i=t.length,a=ef(n,i);Qd(r,a)||(e.uniform1iv(this.addr,a),$d(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Wd,a[e])}function Bf(e,t,n){let r=this.cache,i=t.length,a=ef(n,i);Qd(r,a)||(e.uniform1iv(this.addr,a),$d(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?_f(Hd):Gd;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function Vf(e,t,n){let r=this.cache,i=t.length,a=ef(n,i);Qd(r,a)||(e.uniform1iv(this.addr,a),$d(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Ud,a[e])}function Hf(e){switch(e){case 5126:return Cf;case 35664:return wf;case 35665:return Tf;case 35666:return Ef;case 35674:return Df;case 35675:return Of;case 35676:return kf;case 5124:case 35670:return Af;case 35667:case 35671:return jf;case 35668:case 35672:return Mf;case 35669:case 35673:return Nf;case 5125:return Pf;case 36294:return Ff;case 36295:return If;case 36296:return Lf;case 35678:case 36198:case 36298:case 36306:case 35682:return Rf;case 35679:case 36299:case 36307:return zf;case 35680:case 36300:case 36308:case 36293:return Bf;case 36289:case 36303:case 36311:case 36292:return Vf}}var Uf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Sf(t.type)}},Wf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hf(t.type)}},Gf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Kf=/(\w+)(\])?(\[|\.)?/g;function qf(e,t){e.seq.push(t),e.map[t.id]=t}function Jf(e,t,n){let r=e.name,i=r.length;for(Kf.lastIndex=0;;){let a=Kf.exec(r),o=Kf.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){qf(n,l===void 0?new Uf(s,e,t):new Wf(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Gf(s),qf(n,e)),n=e}}}var Yf=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Jf(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Xf(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Zf=37297,Qf=0;function $f(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var ep=new k;function tp(e){de._getMatrix(ep,de.workingColorSpace,e);let t=`mat3( ${ep.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(e)){case ne:return[t,`LinearTransferOETF`];case Ae:return[t,`sRGBTransferOETF`];default:return R(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function np(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+$f(e.getShaderSource(t),r)}return i}function rp(e,t){let n=tp(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var ip={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function ap(e,t){let n=ip[t];return n===void 0?(R(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var op=new B;function sp(){return de.getLuminanceCoefficients(op),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${op.x.toFixed(4)}, ${op.y.toFixed(4)}, ${op.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function cp(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(dp).join(`
`)}function lp(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function up(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function dp(e){return e!==``}function fp(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function pp(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var mp=/^[ \t]*#include +<([\w\d./]+)>/gm;function hp(e){return e.replace(mp,gp)}function gp(e,t){let n=Z[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return hp(n)}var _p=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vp(e){return e.replace(_p,yp)}function yp(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function bp(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var xp={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Sp(e){return xp[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Cp={302:`ENVMAP_MODE_REFRACTION`};function wp(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Cp[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Tp={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Ep(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Tp[e.combine]||`ENVMAP_BLENDING_NONE`}function Dp(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Sp(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=wp(n),d=Ep(n),f=cp(n),p=lp(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(dp).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(dp).join(`
`),g.length>0&&(g+=`
`)):(h=[bp(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(dp).join(`
`),g=[bp(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Z.tonemapping_pars_fragment,n.toneMapping===0?``:ap(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Z.colorspace_pars_fragment,rp(`linearToOutputTexel`,n.outputColorSpace),sp(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(dp).join(`
`)),o=hp(o),o=fp(o,n),o=pp(o,n),s=hp(s),s=fp(s,n),s=pp(s,n),o=vp(o),s=vp(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=Xf(i,i.VERTEX_SHADER,v),S=Xf(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,S);else{let e=np(i,b,`vertex`),n=np(i,S,`fragment`);x(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):R(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(S),w=new Yf(i,m),T=up(i,m)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(m,Zf)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Qf++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=S,this}var Op=0,kp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ap(e),t.set(e,n)),n}},Ap=class{constructor(e){this.id=Op++,this.code=e,this.usedTimes=0}};function jp(e){return e===1030||e===37490||e===36285}function Mp(e,t,n,r,i,a){let o=new d,s=new kp,c=new Set,l=[],u=new Map,f=r.logarithmicDepthBuffer,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,d,h){let g=u.fog,_=d.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=p[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&R(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=ad[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),M=d.isInstancedMesh===!0,N=d.isBatchedMesh===!0,P=!!i.map,F=!!i.matcap,I=!!b,ee=I&&b.isPMREMTexture===!0,L=!!i.aoMap,te=!!i.lightMap,ne=!!i.bumpMap&&i.wireframe===!1,z=!!i.normalMap,re=!!i.displacementMap,ie=!!i.emissiveMap,ae=!!i.metalnessMap,oe=!!i.roughnessMap,se=i.anisotropy>0,ce=i.clearcoat>0,le=i.diffuseRoughness>0,ue=i.dispersion>0,fe=i.retroreflectivity>0,pe=i.iridescence>0,me=i.sheen>0,he=i.transmission>0,ge=se&&!!i.anisotropyMap,_e=ce&&!!i.clearcoatMap,ve=ce&&!!i.clearcoatNormalMap,ye=ce&&!!i.clearcoatRoughnessMap,be=le&&!!i.diffuseRoughnessMap,xe=pe&&!!i.iridescenceMap,Se=pe&&!!i.iridescenceThicknessMap,Ce=me&&!!i.sheenColorMap,we=me&&!!i.sheenRoughnessMap,Te=!!i.specularMap,Ee=!!i.specularColorMap,De=!!i.specularIntensityMap,Oe=he&&!!i.transmissionMap,B=he&&!!i.thicknessMap,ke=!!i.gradientMap,Ae=!!i.alphaMap,je=i.alphaTest>0,Me=!!i.alphaHash,Ne=!!i.extensions,Pe=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Pe=e.toneMapping);let Fe=ee?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Ie={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:N,batchingColor:N&&d._colorsTexture!==null,instancing:M,instancingColor:M&&d.instanceColor!==null,instancingMorph:M&&d.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:de.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:P,matcap:F,envMap:I,envMapMode:I&&b.mapping,envMapPMREM:ee,envMapMaxLod:ee?Fe.length-1:null,envMapSize:ee?Fe[0].width:null,aoMap:L,lightMap:te,bumpMap:ne,normalMap:z,displacementMap:re,emissiveMap:ie,normalMapObjectSpace:z&&i.normalMapType===1,normalMapTangentSpace:z&&i.normalMapType===0,packedNormalMap:z&&i.normalMapType===0&&jp(i.normalMap.format),metalnessMap:ae,roughnessMap:oe,anisotropy:se,anisotropyMap:ge,clearcoat:ce,clearcoatMap:_e,clearcoatNormalMap:ve,clearcoatRoughnessMap:ye,diffuseRoughness:le,diffuseRoughnessMap:be,dispersion:ue,retroreflection:fe,iridescence:pe,iridescenceMap:xe,iridescenceThicknessMap:Se,sheen:me,sheenColorMap:Ce,sheenRoughnessMap:we,specularMap:Te,specularColorMap:Ee,specularIntensityMap:De,transmission:he,transmissionMap:Oe,thicknessMap:B,gradientMap:ke,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ae,alphaTest:je,alphaHash:Me,combine:i.combine,mapUv:P&&m(i.map.channel),aoMapUv:L&&m(i.aoMap.channel),lightMapUv:te&&m(i.lightMap.channel),bumpMapUv:ne&&m(i.bumpMap.channel),normalMapUv:z&&m(i.normalMap.channel),displacementMapUv:re&&m(i.displacementMap.channel),emissiveMapUv:ie&&m(i.emissiveMap.channel),metalnessMapUv:ae&&m(i.metalnessMap.channel),roughnessMapUv:oe&&m(i.roughnessMap.channel),anisotropyMapUv:ge&&m(i.anisotropyMap.channel),clearcoatMapUv:_e&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ve&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&m(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:be&&m(i.diffuseRoughnessMap.channel),iridescenceMapUv:xe&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:we&&m(i.sheenRoughnessMap.channel),specularMapUv:Te&&m(i.specularMap.channel),specularColorMapUv:Ee&&m(i.specularColorMap.channel),specularIntensityMapUv:De&&m(i.specularIntensityMap.channel),transmissionMapUv:Oe&&m(i.transmissionMap.channel),thicknessMapUv:B&&m(i.thicknessMap.channel),alphaMapUv:Ae&&m(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(z||se),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:d.isPoints===!0&&!!_.attributes.uv&&(P||Ae),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&z===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:j,skinning:d.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Pe,decodeVideoTexture:P&&i.map.isVideoTexture===!0&&de.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ie&&i.emissiveMap.isVideoTexture===!0&&de.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ne&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ne&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=ad[t];n=Ye.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Dp(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Np(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Pp(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Fp(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ip(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Pp),r.length>1&&r.sort(t||Fp),i.length>1&&i.sort(t||Fp)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Lp(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Ip,e.set(t,[i])):n>=r.length?(i=new Ip,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Rp(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new B,color:new Je};break;case`SpotLight`:n={position:new B,direction:new B,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new B,color:new Je,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new B,skyColor:new Je,groundColor:new Je};break;case`RectAreaLight`:n={color:new Je,position:new B,halfWidth:new B,halfHeight:new B}}return e[t.id]=n,n}}}function zp(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new E};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new E};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new E,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Bp=0;function Vp(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Hp(t){let n=new Rp,r=zp(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)i.probe.push(new B);let a=new B,o=new e,s=new e;function c(e){let a=0,o=0,s=0;for(let e=0;e<9;e++)i.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;e.sort(Vp);for(let t=0,S=e.length;t<S;t++){let S=e[t],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)i.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=n.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=r.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),i.sunShadow[l]=t,i.sunShadowMap[l]=E;let n=e.getViewportCount();for(let t=0;t<n;t++)i.sunShadowMatrix[u+t]=e.getMatrix(t),i.sunShadowCascade[u+t]=e._cascadeData[t];u+=n,l++}i.sun[c]=e,c++}else if(S.isDirectionalLight){let e=n.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=r.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,i.directionalShadow[d]=t,i.directionalShadowMap[d]=E,i.directionalShadowMatrix[d]=S.shadow.matrix,g++}i.directional[d]=e,d++}else if(S.isSpotLight){let e=n.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,i.spot[p]=e;let t=S.shadow;if(S.map&&(i.spotLightMap[y]=S.map,y++,t.updateMatrices(S),S.castShadow&&b++),i.spotLightMatrix[p]=t.matrix,S.castShadow){let e=r.get(S);e.shadowIntensity=t.intensity,e.shadowBias=t.bias,e.shadowNormalBias=t.normalBias,e.shadowRadius=t.radius,e.shadowMapSize=t.mapSize,i.spotShadow[p]=e,i.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=n.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),i.rectArea[m]=e,m++}else if(S.isPointLight){let e=n.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=r.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,i.pointShadow[f]=t,i.pointShadowMap[f]=E,i.pointShadowMatrix[f]=S.shadow.matrix,_++}i.point[f]=e,f++}else if(S.isHemisphereLight){let e=n.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),i.hemi[h]=e,h++}}m>0&&(t.has(`OES_texture_float_linear`)===!0?(i.rectAreaLTC1=Q.LTC_FLOAT_1,i.rectAreaLTC2=Q.LTC_FLOAT_2):(i.rectAreaLTC1=Q.LTC_HALF_1,i.rectAreaLTC2=Q.LTC_HALF_2)),i.ambient[0]=a,i.ambient[1]=o,i.ambient[2]=s;let S=i.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(i.sun.length=c,i.directional.length=d,i.spot.length=p,i.rectArea.length=m,i.point.length=f,i.hemi.length=h,i.sunShadow.length=l,i.sunShadowMap.length=l,i.sunShadowMatrix.length=u,i.sunShadowCascade.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.directionalShadowMatrix.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.pointShadowMatrix.length=_,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+y-b,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,i.version=Bp++)}function l(e,t){let n=0,r=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=i.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=i.directional[r];e.direction.setFromMatrixPosition(p.matrixWorld),a.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(a),e.direction.transformDirection(f),r++}else if(p.isSpotLight){let e=i.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),a.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(a),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=i.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),s.identity(),o.copy(p.matrixWorld),o.premultiply(f),s.extractRotation(o),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(s),e.halfHeight.applyMatrix4(s),u++}else if(p.isPointLight){let e=i.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=i.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:c,setupView:l,state:i}}function Up(e){let t=new Hp(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Wp(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Up(e),t.set(n,[a])):r>=i.length?(a=new Up(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Gp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kp=`uniform sampler2D shadow_pass;
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
}`,qp=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Jp=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Yp=new e,Xp=new B,Zp=new B;function Qp(e,r,i){let a=new b,o=new E,s=new E,c=new n,l=new Fe,u=new Ve,d={},f=i.maxTextureSize,p={0:1,1:0,2:2},h=new _e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new E},radius:{value:4}},vertexShader:Gp,fragmentShader:Kp}),g=h.clone();g.defines.HORIZONTAL_PASS=1;let _=new Se;_.setAttribute(`position`,new Me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new be(_,h),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let C=this.type;this.render=function(n,r,i){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||n.length===0)return;this.type===2&&(R(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let l=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.depth.getReversed()===!0?p.buffers.color.setClear(0,0,0,0):p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let h=C!==this.type;h&&r.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let l=0,u=n.length;l<u;l++){let u=n[l],d=u.shadow;if(d===void 0){R(`WebGLShadowMap:`,u,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;o.copy(d.mapSize);let g=d.getFrameExtents();o.multiply(g),s.copy(d.mapSize),(o.x>f||o.y>f)&&(o.x>f&&(s.x=Math.floor(f/g.x),o.x=s.x*g.x,d.mapSize.x=s.x),o.y>f&&(s.y=Math.floor(f/g.y),o.y=s.y*g.y,d.mapSize.y=s.y));let _=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=_,d.map===null||h===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(u.isPointLight){R(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new S(o.x,o.y,{format:re,type:L,minFilter:v,magFilter:v,generateMipmaps:!1}),d.map.texture.name=u.name+`.shadowMap`,d.map.depthTexture=new t(o.x,o.y,m),d.map.depthTexture.name=u.name+`.shadowMapDepth`,d.map.depthTexture.format=T,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=ue,d.map.depthTexture.magFilter=ue}else u.isPointLight?(d.map=new md(o.x),d.map.depthTexture=new N(o.x,Ke)):(d.map=new S(o.x,o.y),d.map.depthTexture=new t(o.x,o.y,Ke)),d.map.depthTexture.name=u.name+`.shadowMap`,d.map.depthTexture.format=T,this.type===1?(d.map.depthTexture.compareFunction=_?518:515,d.map.depthTexture.minFilter=v,d.map.depthTexture.magFilter=v):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=ue,d.map.depthTexture.magFilter=ue);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==o.x||d.map.height!==o.y)&&d.map.setSize(o.x,o.y);let y=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();u.isPointLight!==!0&&d.updateMatrices(u,i);let b=d.camera.layers.mask&4294967294?d.camera.layers:i.layers;for(let t=0;t<y;t++){let n=d.getCamera(t);if(u.isPointLight){let e=d.camera,n=d.matrix,r=u.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Xp.setFromMatrixPosition(u.matrixWorld),e.position.copy(Xp),Zp.copy(e.position),Zp.add(qp[t]),e.up.copy(Jp[t]),e.lookAt(Zp),e.updateMatrixWorld(),n.makeTranslation(-Xp.x,-Xp.y,-Xp.z),Yp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Yp,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),p.viewport(c)}a=d.getFrustum(t),O(r,i,n,u,b,this.type)}d.isPointLightShadow!==!0&&this.type===3&&w(d,i),d.needsUpdate=!1}C=this.type,x.needsUpdate=!1,e.setRenderTarget(l,u,d)};function w(t,n){let i=r.update(y);h.defines.VSM_SAMPLES!==t.blurSamples&&(h.defines.VSM_SAMPLES=t.blurSamples,g.defines.VSM_SAMPLES=t.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),t.mapPass===null?t.mapPass=new S(o.x,o.y,{format:re,type:L}):(t.mapPass.width!==t.map.width||t.mapPass.height!==t.map.height)&&t.mapPass.setSize(t.map.width,t.map.height),h.uniforms.shadow_pass.value=t.map.depthTexture,h.uniforms.resolution.value.set(t.map.width,t.map.height),h.uniforms.radius.value=t.radius,e.setRenderTarget(t.mapPass),e.clear(),e.renderBufferDirect(n,null,i,h,y,null),g.uniforms.shadow_pass.value=t.mapPass.texture,g.uniforms.resolution.value.set(t.map.width,t.map.height),g.uniforms.radius.value=t.radius,e.setRenderTarget(t.map),e.clear(),e.renderBufferDirect(n,null,i,g,y,null)}function D(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,k)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function O(t,n,i,o,s,c){if(t.visible===!1)return;if(t.layers.test(s)&&(t.isMesh||t.isLine||t.isPoints)&&(t.castShadow||t.receiveShadow&&c===3)&&(!t.frustumCulled||t.intersectsFrustum(a))){t.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse,t.matrixWorld);let a=r.update(t),s=t.material;if(Array.isArray(s)){let r=a.groups;for(let l=0,u=r.length;l<u;l++){let u=r[l],d=s[u.materialIndex];if(d&&d.visible){let r=D(t,d,o,c);t.onBeforeShadow(e,t,n,i,a,r,u),e.renderBufferDirect(i,null,a,r,t,u),t.onAfterShadow(e,t,n,i,a,r,u)}}}else if(s.visible){let r=D(t,s,o,c);t.onBeforeShadow(e,t,n,i,a,r,null),e.renderBufferDirect(i,null,a,r,t,null),t.onAfterShadow(e,t,n,i,a,r,null)}}let l=t.children;for(let e=0,t=l.length;e<t;e++)O(l[e],n,i,o,s,c)}function k(e){e.target.removeEventListener(`dispose`,k);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function $p(e,t){function r(){let t=!1,r=new n,i=null,a=new n(0,0,0,0);return{setMask:function(n){i!==n&&!t&&(e.colorMask(n,n,n,n),i=n)},setLocked:function(e){t=e},setClear:function(t,n,i,o,s){s===!0&&(t*=o,n*=o,i*=o),r.set(t,n,i,o),a.equals(r)===!1&&(e.clearColor(t,n,i,o),a.copy(r))},reset:function(){t=!1,i=null,a.set(-1,0,0,0)}}}function i(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?oe(e.DEPTH_TEST):se(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Pe[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function a(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?oe(e.STENCIL_TEST):se(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let o=new r,s=new i,c=new a,l={},u=new WeakMap,d={},f={},p={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,S=null,C=null,w=null,T=null,E=new Je(0,0,0),D=0,O=!1,k=null,A=null,j=null,M=null,N=null,P=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,I=0,ee=e.getParameter(e.VERSION);ee.indexOf(`WebGL`)===-1?ee.indexOf(`OpenGL ES`)!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),F=I>=2):(I=parseFloat(/^WebGL (\d)/.exec(ee)[1]),F=I>=1);let L=null,te={},R=e.getParameter(e.SCISSOR_BOX),ne=e.getParameter(e.VIEWPORT),z=new n().fromArray(R),re=new n().fromArray(ne);function ie(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ae={};ae[e.TEXTURE_2D]=ie(e.TEXTURE_2D,e.TEXTURE_2D,1),ae[e.TEXTURE_CUBE_MAP]=ie(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[e.TEXTURE_2D_ARRAY]=ie(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ae[e.TEXTURE_3D]=ie(e.TEXTURE_3D,e.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),c.setClear(0),oe(e.DEPTH_TEST),s.setFunc(3),he(!1),ge(1),oe(e.CULL_FACE),pe(0);function oe(t){d[t]!==!0&&(e.enable(t),d[t]=!0)}function se(t){d[t]!==!1&&(e.disable(t),d[t]=!1)}function ce(t,n){return p[t]!==n&&(e.bindFramebuffer(t,n),p[t]=n,t===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=n),!0)}function le(t,n){let r=h,i=!1;if(t){r=m.get(n),r===void 0&&(r=[],m.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ue(t){return g!==t&&(e.useProgram(t),g=t,!0)}let de={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};de[103]=e.MIN,de[104]=e.MAX;let fe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function pe(t,n,r,i,a,o,s,c,l,u){if(t===0)_===!0&&(se(e.BLEND),_=!1);else if(_===!1&&(oe(e.BLEND),_=!0),t!==5){if(t!==v||u!==O){if((y!==100||C!==100)&&(e.blendEquation(e.FUNC_ADD),y=100,C=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:x(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:x(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:x(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:x(`WebGLState: Invalid blending: `,t)}b=null,S=null,w=null,T=null,E.set(0,0,0),D=0,v=t,O=u}}else a||=n,o||=r,s||=i,(n!==y||a!==C)&&(e.blendEquationSeparate(de[n],de[a]),y=n,C=a),(r!==b||i!==S||o!==w||s!==T)&&(e.blendFuncSeparate(fe[r],fe[i],fe[o],fe[s]),b=r,S=i,w=o,T=s),(c.equals(E)===!1||l!==D)&&(e.blendColor(c.r,c.g,c.b,l),E.copy(c),D=l),v=t,O=!1}function me(t,n){t.side===2?se(e.CULL_FACE):oe(e.CULL_FACE);let r=t.side===1;n&&(r=!r),he(r),t.blending===1&&t.transparent===!1?pe(0):pe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),s.setFunc(t.depthFunc),s.setTest(t.depthTest),s.setMask(t.depthWrite),o.setMask(t.colorWrite);let i=t.stencilWrite;c.setTest(i),i&&(c.setMask(t.stencilWriteMask),c.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),c.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ve(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?oe(e.SAMPLE_ALPHA_TO_COVERAGE):se(e.SAMPLE_ALPHA_TO_COVERAGE)}function he(t){k!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),k=t)}function ge(t){t===0?se(e.CULL_FACE):(oe(e.CULL_FACE),t!==A&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),A=t}function _e(t){t!==j&&(F&&e.lineWidth(t),j=t)}function ve(t,n,r){t?(oe(e.POLYGON_OFFSET_FILL),(M!==n||N!==r)&&(M=n,N=r,s.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):se(e.POLYGON_OFFSET_FILL)}function ye(t){t?oe(e.SCISSOR_TEST):se(e.SCISSOR_TEST)}function be(t){t===void 0&&(t=e.TEXTURE0+P-1),L!==t&&(e.activeTexture(t),L=t)}function xe(t,n,r){r===void 0&&(r=L===null?e.TEXTURE0+P-1:L);let i=te[r];i===void 0&&(i={type:void 0,texture:void 0},te[r]=i),(i.type!==t||i.texture!==n)&&(L!==r&&(e.activeTexture(r),L=r),e.bindTexture(t,n||ae[t]),i.type=t,i.texture=n)}function Se(){let t=te[L];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ce(){try{e.compressedTexImage2D(...arguments)}catch(e){x(`WebGLState:`,e)}}function we(){try{e.compressedTexImage3D(...arguments)}catch(e){x(`WebGLState:`,e)}}function Te(){try{e.texSubImage2D(...arguments)}catch(e){x(`WebGLState:`,e)}}function Ee(){try{e.texSubImage3D(...arguments)}catch(e){x(`WebGLState:`,e)}}function De(){try{e.compressedTexSubImage2D(...arguments)}catch(e){x(`WebGLState:`,e)}}function Oe(){try{e.compressedTexSubImage3D(...arguments)}catch(e){x(`WebGLState:`,e)}}function B(){try{e.texStorage2D(...arguments)}catch(e){x(`WebGLState:`,e)}}function ke(){try{e.texStorage3D(...arguments)}catch(e){x(`WebGLState:`,e)}}function Ae(){try{e.texImage2D(...arguments)}catch(e){x(`WebGLState:`,e)}}function je(){try{e.texImage3D(...arguments)}catch(e){x(`WebGLState:`,e)}}function Me(t){return f[t]===void 0?e.getParameter(t):f[t]}function Ne(t,n){f[t]!==n&&(e.pixelStorei(t,n),f[t]=n)}function Fe(t){z.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),z.copy(t))}function Ie(t){re.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),re.copy(t))}function Le(t,n){let r=u.get(n);r===void 0&&(r=new WeakMap,u.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function Re(t,n,r){let i=u.get(n).get(t);l[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),l[i]=r)}function ze(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),d={},f={},L=null,te={},p={},l={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,S=null,C=null,w=null,T=null,E=new Je(0,0,0),D=0,O=!1,k=null,A=null,j=null,M=null,N=null,z.set(0,0,e.canvas.width,e.canvas.height),re.set(0,0,e.canvas.width,e.canvas.height),o.reset(),s.reset(),c.reset()}return{buffers:{color:o,depth:s,stencil:c},enable:oe,disable:se,bindFramebuffer:ce,drawBuffers:le,useProgram:ue,setBlending:pe,setMaterial:me,setFlipSided:he,setCullFace:ge,setLineWidth:_e,setPolygonOffset:ve,setScissorTest:ye,activeTexture:be,bindTexture:xe,unbindTexture:Se,compressedTexImage2D:Ce,compressedTexImage3D:we,texImage2D:Ae,texImage3D:je,pixelStorei:Ne,getParameter:Me,updateUBOMapping:Le,uniformBlockBinding:Re,texStorage2D:B,texStorage3D:ke,texSubImage2D:Te,texSubImage3D:Ee,compressedTexSubImage2D:De,compressedTexSubImage3D:Oe,scissor:Fe,viewport:Ie,reset:ze}}function em(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new E,u=new WeakMap,d=new Set,f,p=new WeakMap,m=new Set,_=new FinalizationRegistry(e=>m.delete(e)),y=!1;try{y=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function b(e,t){return y?new OffscreenCanvas(e,t):h(`canvas`)}function S(e,t,n){let r=1,i=Re(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=b(n,a));let o=t?b(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),R(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&R(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function C(e){return e.generateMipmaps}function w(t){e.generateMipmap(t)}function T(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function D(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];R(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||R(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?ne:de.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function O(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,R(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function k(e,t){return C(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function A(e){let t=new WeakRef(e);r.get(e).__ref=t,m.add(t),_.register(e,t,t)}function j(e){let t=r.get(e).__ref;t!==void 0&&(m.delete(t),_.unregister(t))}function M(e){P(e.target)}function N(e){F(e.target)}function P(e){e.removeEventListener(`dispose`,M),j(e),ee(e),e.isVideoTexture&&u.delete(e),e.isHTMLTexture&&d.delete(e)}function F(e){e.removeEventListener(`dispose`,N),j(e),te(e)}function I(){for(let e of m){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?F(t):P(t))}m.clear(),d.clear()}function ee(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&L(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function L(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function te(t){let n=r.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let i=t.depthTexture;if(i&&i.renderTarget===t&&P(i),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=r.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(a[t])}r.remove(t)}let z=0;function re(){z=0}function ie(){return z}function ae(e){z=e}function oe(){let e=z;return e>=i.maxTextures&&R(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),z+=1,e}function se(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ce(t,i){let a=r.get(t);if(t.isVideoTexture&&Fe(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)R(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)R(`WebGLRenderer: Texture marked for update but image is incomplete`);else{xe(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function le(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?xe(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function fe(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?xe(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function pe(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?Se(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let me={[Ue]:e.REPEAT,[U]:e.CLAMP_TO_EDGE,[Ee]:e.MIRRORED_REPEAT},he={[ue]:e.NEAREST,[V]:e.NEAREST_MIPMAP_NEAREST,[Ie]:e.NEAREST_MIPMAP_LINEAR,[v]:e.LINEAR,[g]:e.LINEAR_MIPMAP_NEAREST,[ze]:e.LINEAR_MIPMAP_LINEAR},ge={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function _e(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&R(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,me[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,me[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,me[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,he[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,he[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ge[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ve(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,M),A(n));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=se(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&L(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function ye(e,t,n){return Math.floor(Math.floor(e/n)/t)}function be(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ye(n.start,r.width,4),c=ye(t.start,r.width,4);n.start<=i+1&&a===c&&ye(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function xe(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ve(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=de.getPrimaries(de.workingColorSpace),r=o.colorSpace===``?null:de.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=S(o.image,!1,i.maxTextureSize);t=Le(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=D(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);_e(c,o);let h,g=o.mipmaps,_=o.isVideoTexture!==!0,v=f.__version===void 0||l===!0,y=u.dataReady,b=k(o,t);if(o.isDepthTexture)m=O(o.format===Oe,o.type),v&&(_?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(g.length>0){_&&v&&n.texStorage2D(e.TEXTURE_2D,b,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],_?y&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else _?(v&&n.texStorage2D(e.TEXTURE_2D,b,m,t.width,t.height),y&&be(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){_&&v&&n.texStorage3D(e.TEXTURE_2D_ARRAY,b,m,g[0].width,g[0].height,t.depth);for(let i=0,a=g.length;i<a;i++)if(h=g[i],o.format!==1023){if(r!==null){if(_){if(y){if(o.layerUpdates.size>0){let t=Ze(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?y&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{_&&v&&n.texStorage2D(e.TEXTURE_2D,b,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],o.format===1023?_?y&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?y&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(_){if(v&&n.texStorage3D(e.TEXTURE_2D_ARRAY,b,m,t.width,t.height,t.depth),y){if(o.layerUpdates.size>0){let i=Ze(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)_?(v&&n.texStorage3D(e.TEXTURE_3D,b,m,t.width,t.height,t.depth),y&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(v){if(_)n.texStorage2D(e.TEXTURE_2D,b,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<b;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(_&&v){let t=Re(g[0]);n.texStorage2D(e.TEXTURE_2D,b,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],_?y&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(_){if(v){let r=Re(t);n.texStorage2D(e.TEXTURE_2D,b,m,r.width,r.height)}y&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);C(o)&&o.mipmapsAutoUpdate===!0&&w(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Se(t,o,s){if(o.image.length!==6)return;let c=ve(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=de.getPrimaries(de.workingColorSpace),r=o.colorSpace===``?null:de.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=S(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Le(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=D(o.internalFormat,g,_,o.normalized,o.colorSpace),y=o.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,T=k(o,h);_e(e.TEXTURE_CUBE_MAP,o);let E;if(o.isDepthTexture){if(v=O(o.format===Oe,o.type),b){if(y)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,h.width,h.height,0,g,_,null)}}else if(f){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,T,v,h.width,h.height);for(let t=0;t<6;t++){E=m[t].mipmaps;for(let r=0;r<E.length;r++){let i=E[r];o.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(E=o.mipmaps,y&&b){E.length>0&&T++;let t=Re(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,T,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<E.length;r++){let i=E[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<E.length;r++){let i=E[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}C(o)&&o.mipmapsAutoUpdate===!0&&w(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Ce(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=D(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Pe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Ne(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function we(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=O(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Pe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ne(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ne(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=D(o.internalFormat,c,l,o.normalized,o.colorSpace);Pe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ne(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ne(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Te(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=r.get(i.depthTexture);c.__renderTarget=i;let l=o?i.depthTexture.image[0]:i.depthTexture.image;c.__webglTexture&&l.width===i.width&&l.height===i.height||(l.width=i.width,l.height=i.height,i.depthTexture.needsUpdate=!0),o?pe(i.depthTexture,0):ce(i.depthTexture,0);let u=c.__webglTexture,d=Ne(i),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Pe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Pe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function De(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Te(i.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?Te(i.__webglFramebuffer[0],t,0):Te(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),we(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),we(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function B(t,n,i){let a=r.get(t);n!==void 0&&Ce(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&De(t)}function ke(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,N),A(t);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Pe(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=D(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Ne(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),we(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),_e(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Ce(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Ce(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);C(i)?w(e.TEXTURE_CUBE_MAP):i.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),_e(c,a),Ce(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),C(a)&&w(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),_e(r,i),i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Ce(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Ce(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);C(i)?w(r):i.mipmaps.length>0&&e.texParameteri(r,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&De(t)}function Ae(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(C(a)&&a.mipmapsAutoUpdate===!0){let t=T(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),w(t),n.unbindTexture()}}}let je=[];function Me(t){if(t.samples>0){if(Pe(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(je.length=0,je.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&je.push(l),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,je))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ne(e){return Math.min(i.maxSamples,e.samples)}function Pe(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Fe(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function Le(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(de.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&R(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):x(`WebGLTextures: Unsupported texture color space:`,n)),t}function Re(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=oe,this.resetTextureUnits=re,this.getTextureUnits=ie,this.setTextureUnits=ae,this.setTexture2D=ce,this.setTexture2DArray=le,this.setTexture3D=fe,this.setTextureCube=pe,this.rebindTextures=B,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Pe,this.dispose=I}function tm(e,t){function n(n,r=``){let i,a=de.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var nm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rm=`
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

}`,im=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new D(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new _e({vertexShader:nm,fragmentShader:rm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new be(new ve(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},am=class extends C{constructor(e,r){super();let i=this,a=null,o=1,s=null,c=`local-floor`,l=1,u=null,d=null,f=null,p=null,m=null,h=null,g=typeof XRWebGLBinding<`u`,_=new im,v={},y=r.getContextAttributes(),b=null,x=null,C=[],O=[],k=new E,A=null,j=null,M=new je;M.viewport=new n;let N=new je;N.viewport=new n;let F=[M,N],I=new xe,ee=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new w,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new w,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new w,C[e]=t),t.getHandSpace()};function te(e){let t=O.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,u||s),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ne(){a.removeEventListener(`select`,te),a.removeEventListener(`selectstart`,te),a.removeEventListener(`selectend`,te),a.removeEventListener(`squeeze`,te),a.removeEventListener(`squeezestart`,te),a.removeEventListener(`squeezeend`,te),a.removeEventListener(`end`,ne),a.removeEventListener(`inputsourceschange`,z);for(let e=0;e<C.length;e++){let t=O[e];t!==null&&(O[e]=null,C[e].disconnect(t))}ee=null,L=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(b),m=null,p=null,f=null,a=null,x=null,se.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(k.width,k.height,!1),j!==null){let e=j.camera;e.fov=j.fov,e.zoom=j.zoom,e.updateProjectionMatrix(),j=null}i.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){o=e,i.isPresenting===!0&&R(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){c=e,i.isPresenting===!0&&R(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(e){u=e},this.getBaseLayer=function(){return p===null?m:p},this.getBinding=function(){return f===null&&g&&(f=new XRWebGLBinding(a,r)),f},this.getFrame=function(){return h},this.getSession=function(){return a},this.setSession=async function(n){if(a=n,a!==null){if(b=e.getRenderTarget(),a.addEventListener(`select`,te),a.addEventListener(`selectstart`,te),a.addEventListener(`selectend`,te),a.addEventListener(`squeeze`,te),a.addEventListener(`squeezestart`,te),a.addEventListener(`squeezeend`,te),a.addEventListener(`end`,ne),a.addEventListener(`inputsourceschange`,z),y.xrCompatible!==!0&&await r.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(k),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,i=null,s=null;y.depth&&(s=y.stencil?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT24,n=y.stencil?Oe:T,i=y.stencil?P:Ke);let c={colorFormat:r.RGBA8,depthFormat:s,scaleFactor:o};f=this.getBinding(),p=f.createProjectionLayer(c),a.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),x=new S(p.textureWidth,p.textureHeight,{format:Xe,type:fe,depthTexture:new t(p.textureWidth,p.textureHeight,i,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let t={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(a,r,t),a.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new S(m.framebufferWidth,m.framebufferHeight,{format:Xe,type:fe,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await a.requestReferenceSpace(c),se.setContext(a),se.start(),i.isPresenting=!0,i.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function z(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=O.indexOf(n);r>=0&&(O[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=O.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=O.length){O.push(n),r=e;break}else if(O[e]===null){O[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}function re(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(a===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),I.near=N.near=M.near=t,I.far=N.far=M.far=n,(ee!==I.near||L!==I.far)&&(a.updateRenderState({depthNear:I.near,depthFar:I.far}),ee=I.near,L=I.far),I.layers.mask=e.layers.mask|6,M.layers.mask=I.layers.mask&-5,N.layers.mask=I.layers.mask&-3;let r=e.parent,i=I.cameras;re(I,r);for(let e=0;e<i.length;e++)re(i[e],r);I.projectionMatrix.copy(M.projectionMatrix),I.projectionMatrixInverse.copy(M.projectionMatrixInverse),j===null&&e.isPerspectiveCamera&&(j={camera:e,fov:e.fov,zoom:e.zoom}),ie(e,I,r)};function ie(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=we*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(p!==null||m!==null)return l},this.setFoveation=function(e){l=e,p!==null&&(p.fixedFoveation=e),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(I)},this.getCameraTexture=function(e){return v[e]};let ae=null;function oe(t,r){if(d=r.getViewerPose(u||s),h=r,d!==null){let t=d.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let r=!1;t.length!==I.cameras.length&&(I.cameras.length=0,r=!0);for(let i=0;i<t.length;i++){let a=t[i],o=null;if(m!==null)o=m.getViewport(a);else{let t=f.getViewSubImage(p,a);o=t.viewport,i===0&&(e.setRenderTargetTextures(x,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(x))}let s=F[i];s===void 0&&(s=new je,s.layers.enable(i),s.viewport=new n,F[i]=s),s.matrix.fromArray(a.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.projectionMatrix.fromArray(a.projectionMatrix),s.projectionMatrixInverse.copy(s.projectionMatrix).invert(),s.viewport.set(o.x,o.y,o.width,o.height),i===0&&(I.matrix.copy(s.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),r===!0&&I.cameras.push(s)}let o=a.enabledFeatures;if(o&&o.includes(`depth-sensing`)&&a.depthUsage==`gpu-optimized`&&g){f=i.getBinding();let e=f.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,a.renderState)}if(o&&o.includes(`camera-access`)&&g){e.state.unbindTexture(),f=i.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new D,v[n]=e);let t=f.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=O[e],n=C[e];t!==null&&n!==void 0&&n.update(t,r,u||s)}ae&&ae(t,r),r.detectedPlanes&&i.dispatchEvent({type:`planesdetected`,data:r}),h=null}let se=new rd;se.setAnimationLoop(oe),this.setAnimationLoop=function(e){ae=e},this.dispose=function(){}}},om=new e,sm=new k;sm.set(-1,0,0,0,1,0,0,0,1);function cm(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function i(t,n){n.color.getRGB(t.fogColor.value,r(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function a(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?o(e,t):t.isMeshLambertMaterial?(o(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(o(e,t),f(e,t)):t.isMeshPhongMaterial?(o(e,t),d(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(o(e,t),p(e,t),t.isMeshPhysicalMaterial&&m(e,t,i)):t.isMeshMatcapMaterial?(o(e,t),h(e,t)):t.isMeshDepthMaterial?o(e,t):t.isMeshDistanceMaterial?(o(e,t),g(e,t)):t.isMeshNormalMaterial?o(e,t):t.isLineBasicMaterial?(s(e,t),t.isLineDashedMaterial&&c(e,t)):t.isPointsMaterial?l(e,t,n,r):t.isSpriteMaterial?u(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function o(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(om.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(sm),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function s(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function c(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function l(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function d(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function f(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function p(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function m(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function h(e,t){t.matcap&&(e.matcap.value=t.matcap)}function g(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function lm(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?R(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):R(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var um=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),dm=null;function fm(){return dm===null&&(dm=new a(um,16,16,re,L),dm.name=`DFG_LUT`,dm.minFilter=v,dm.magFilter=v,dm.wrapS=U,dm.wrapT=U,dm.generateMipmaps=!1,dm.needsUpdate=!0),dm}var pm=class{constructor(t={}){let{canvas:r=u(),context:i=null,depth:a=!0,stencil:s=!1,alpha:l=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:m=`default`,failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:g=!1,outputBufferType:_=fe}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<`u`&&i instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);v=i.getContextAttributes().alpha}else v=l;let y=_,C=new Set([pe,se,ye]),w=new Set([fe,Ke,o,P,I,c]),T=new Uint32Array(4),E=new Int32Array(4),D={textures:[],min:[],max:[],resolution:[]},O=null,k=null,A=[],M=[],N=null;this.domElement=r,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,ne=!1,z=null,re=null,ie=null,ae=null;this._outputColorSpace=he;let oe=0,ce=0,le=null,ue=-1,me=null,ge=new n,_e=new n,ve=null,be=new Je(0),xe=0,Se=r.width,Ce=r.height,we=1,Te=null,Ee=null,Oe=new n(0,0,Se,Ce),ke=new n(0,0,Se,Ce),Ae=!1,je=new b,Me=new j,Ne=!1,Pe=!1,Fe=new e,Ie=new B,Le=new n,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Be=!1;function Ve(){return le===null?we:1}let V=i;function He(e,t){return r.getContext(e,t)}let Ue,We,H,Ge,U,W,qe,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,st,G,ct,lt;try{let e={alpha:!0,depth:a,stencil:s,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:h};if(`setAttribute`in r&&r.setAttribute(`data-engine`,`three.js r187`),r.addEventListener(`webglcontextlost`,ft,!1),r.addEventListener(`webglcontextrestored`,pt,!1),r.addEventListener(`webglcontextcreationerror`,mt,!1),V===null){let t=`webgl2`;if(V=He(t,e),V===null)throw He(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}ut()}catch(e){throw r.removeEventListener(`webglcontextlost`,ft,!1),r.removeEventListener(`webglcontextrestored`,pt,!1),r.removeEventListener(`webglcontextcreationerror`,mt,!1),x(`WebGLRenderer: `+e.message),e}function ut(){Ue=new Md(V),Ue.init(),G=new tm(V,Ue),We=new fd(V,Ue,t,G),H=new $p(V,Ue),We.reversedDepthBuffer&&g&&H.buffers.depth.setReversed(!0),re=V.createFramebuffer(),ie=V.createFramebuffer(),ae=V.createFramebuffer(),Ge=new Fd(V),U=new Np,W=new em(V,Ue,H,U,We,G,Ge),qe=new jd(F),Ye=new id(V),ct=new ud(V,Ye),Xe=new Nd(V,Ye,Ge,ct),Ze=new Ld(V,Xe,Ye,ct,Ge),at=new Id(V,We,W),nt=new pd(U),Qe=new Mp(F,qe,Ue,We,ct,nt),$e=new cm(F,U),et=new Lp,tt=new Wp(Ue),it=new ld(F,qe,H,Ze,v,f),rt=new Qp(F,Ze,We),lt=new lm(V,Ge,We,H),ot=new dd(V,Ue,Ge),st=new Pd(V,Ue,Ge),Ge.programs=Qe.programs,F.capabilities=We,F.extensions=Ue,F.properties=U,F.renderLists=et,F.shadowMap=rt,F.state=H,F.info=Ge}y!==1009&&(N=new zd(y,r.width,r.height,d,a,s));let dt=new am(F,V);this.xr=dt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let e=Ue.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ue.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return we},this.setPixelRatio=function(e){e!==void 0&&(we=e,this.setSize(Se,Ce,!1))},this.getSize=function(e){return e.set(Se,Ce)},this.setSize=function(e,t,n=!0){dt.isPresenting?R(`WebGLRenderer: Can't change size while VR device is presenting.`):(Se=e,Ce=t,r.width=Math.floor(e*we),r.height=Math.floor(t*we),n===!0&&(r.style.width=e+`px`,r.style.height=t+`px`),N!==null&&N.setSize(r.width,r.height),this.setViewport(0,0,e,t))},this.getDrawingBufferSize=function(e){return e.set(Se*we,Ce*we).floor()},this.setDrawingBufferSize=function(e,t,n){Se=e,Ce=t,we=n,r.width=Math.floor(e*n),r.height=Math.floor(t*n),this.setViewport(0,0,e,t)},this.setEffects=function(e){if(y===1009)x(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){R(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}N.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(ge)},this.getViewport=function(e){return e.copy(Oe)},this.setViewport=function(e,t,n,r){e.isVector4?Oe.set(e.x,e.y,e.z,e.w):Oe.set(e,t,n,r),H.viewport(ge.copy(Oe).multiplyScalar(Ve()).round())},this.getScissor=function(e){return e.copy(ke)},this.setScissor=function(e,t,n,r){e.isVector4?ke.set(e.x,e.y,e.z,e.w):ke.set(e,t,n,r),H.scissor(_e.copy(ke).multiplyScalar(Ve()).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(e){H.setScissorTest(Ae=e)},this.setOpaqueSort=function(e){Te=e},this.setTransparentSort=function(e){Ee=e},this.getClearColor=function(e){return e.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(le!==null){let t=le.texture.format;e=C.has(t)}if(e){let e=le.texture.type,t=w.has(e),n=it.getClearColor(),r=it.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,V.clearBufferuiv(V.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,V.clearBufferiv(V.COLOR,0,E))}else r|=V.COLOR_BUFFER_BIT}t&&(r|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&V.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),z=e},this.dispose=function(){r.removeEventListener(`webglcontextlost`,ft,!1),r.removeEventListener(`webglcontextrestored`,pt,!1),r.removeEventListener(`webglcontextcreationerror`,mt,!1),it.dispose(),et.dispose(),tt.dispose(),W.dispose(),U.dispose(),qe.dispose(),Ze.dispose(),Xe.dispose(),ct.dispose(),lt.dispose(),Qe.dispose(),dt.dispose(),dt.removeEventListener(`sessionstart`,J),dt.removeEventListener(`sessionend`,yt),bt.stop()};function ft(e){e.preventDefault(),te(`WebGLRenderer: Context Lost.`),ne=!0}function pt(){te(`WebGLRenderer: Context Restored.`),ne=!1;let e=Ge.autoReset,t=rt.enabled,n=rt.autoUpdate,r=rt.needsUpdate,i=rt.type;ut(),Ge.autoReset=e,rt.enabled=t,rt.autoUpdate=n,rt.needsUpdate=r,rt.type=i}function mt(e){x(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ht(e){let t=e.target;t.removeEventListener(`dispose`,ht),K(t)}function K(e){q(e),U.remove(e)}function q(e){let t=U.get(e).programs;t!==void 0&&(t.forEach(function(e){Qe.releaseProgram(e)}),e.isShaderMaterial&&Qe.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Re);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=jt(e,t,n,r,i);H.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Xe.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;ct.setup(i,r,s,n,c);let h,g=ot;if(c!==null&&(h=Ye.get(c),g=st,g.setIndex(h)),i.isMesh)r.wireframe===!0?(H.setLineWidth(r.wireframeLinewidth*Ve()),g.setMode(V.LINES)):g.setMode(V.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),H.setLineWidth(e*Ve()),i.isLineSegments?g.setMode(V.LINES):i.isLineLoop?g.setMode(V.LINE_LOOP):g.setMode(V.LINE_STRIP)}else i.isPoints?g.setMode(V.POINTS):i.isSprite&&g.setMode(V.TRIANGLES);if(i.isBatchedMesh){if(Ue.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ye.get(c).bytesPerElement:1,o=U.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(V,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function gt(e,t,n,r){z!==null&&e.isNodeMaterial&&z.setObject(r,e),Ne===!0&&nt.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Dt(e,t,r),e.side=0,e.needsUpdate=!0,Dt(e,t,r),e.side=2):Dt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),z!==null&&z.renderStart(e,t,n),k=tt.get(n),k.init(t),M.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights(),z!==null&&z.updateLights(k.state.lightsArray),Pe=this.localClippingEnabled,Ne=nt.init(this.clippingPlanes,Pe),Ne===!0&&nt.setGlobalState(this.clippingPlanes,t),z!==null&&rt.render(k.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];gt(o,n,t,e),r.add(o)}else gt(i,n,t,e),r.add(i)}}),k=M.pop(),z!==null&&z.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=U.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Ue.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let _t=null;function vt(e){_t&&_t(e)}function J(){bt.stop()}function yt(){bt.start()}let bt=new rd;bt.setAnimationLoop(vt),typeof self<`u`&&bt.setContext(self),this.setAnimationLoop=function(e){_t=e,dt.setAnimationLoop(e),e===null?bt.stop():bt.start()},dt.addEventListener(`sessionstart`,J),dt.addEventListener(`sessionend`,yt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){x(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ne===!0)return;z!==null&&z.renderStart(e,t);let n=dt.enabled===!0&&dt.isPresenting===!0,r=N!==null&&(le===null||n)&&N.begin(F,le);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(t),t=dt.getCamera()),e.isScene===!0&&e.onBeforeRender(F,e,t,le),k=tt.get(e,M.length),k.init(t),k.state.textureUnits=W.getTextureUnits(),M.push(k),Fe.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?Me.setFromArrayCamera(t):je.setFromProjectionMatrix(Fe,De,t.reversedDepth),Pe=this.localClippingEnabled,Ne=nt.init(this.clippingPlanes,Pe),O=et.get(e,A.length),O.init(),A.push(O),this.info.render.frame++,dt.enabled===!0&&dt.isPresenting===!0){let e=F.xr.getDepthSensingMesh();e!==null&&xt(e,t,-1/0,F.sortObjects)}xt(e,t,0,F.sortObjects),O.finish(),z!==null&&z.updateLights(k.state.lightsArray),F.sortObjects===!0&&O.sort(Te,Ee),Be=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,Be&&it.addToRenderList(O,e),this.info.autoReset===!0&&this.info.reset(),Ne===!0&&nt.beginShadows();let i=k.state.shadowsArray;if(rt.render(i,e,t),Ne===!0&&nt.endShadows(),(r&&N.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Ct(n,r,e,a)}Be&&it.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];St(O,e,n,n.viewport)}}else r.length>0&&Ct(n,r,e,t),Be&&it.render(e),St(O,e,t)}le!==null&&ce===0&&(W.updateMultisampleRenderTarget(le),W.updateRenderTargetMipmap(le)),r&&N.end(F),e.isScene===!0&&e.onAfterRender(F,e,t),ct.resetDefaultState(),ue=-1,me=null,M.pop(),M.length>0?(k=M[M.length-1],W.setTextureUnits(k.state.textureUnits),Ne===!0&&nt.setGlobalState(F.clippingPlanes,k.state.camera)):k=null,A.pop(),O=A.length>0?A[A.length-1]:null,z!==null&&z.renderEnd()};function xt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?Me:je;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&Le.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Fe);let i=Ze.update(e),a=e.material;a.visible&&O.push(e,i,a,n,Le.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?Me:je;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Ze.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Le.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Le.copy(e.boundingSphere.center)),Le.applyMatrix4(e.matrixWorld).applyMatrix4(Fe)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&O.push(e,i,c,n,Le.z,s,t)}}else a.visible&&O.push(e,i,a,n,Le.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)xt(i[e],t,n,r)}function St(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),Ne===!0&&nt.setGlobalState(F.clippingPlanes,n),r&&H.viewport(ge.copy(r)),i.length>0&&wt(i,t,n),a.length>0&&wt(a,t,n),o.length>0&&wt(o,t,n),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function Ct(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=Ue.has(`EXT_color_buffer_half_float`)||Ue.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new S(1,1,{generateMipmaps:!0,type:e?L:fe,minFilter:ze,samples:Math.max(4,We.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:de.workingColorSpace})}let i=k.state.transmissionRenderTarget[r.id],a=r.viewport||ge;i.setSize(a.z*F.transmissionResolutionScale,a.w*F.transmissionResolutionScale);let o=F.getRenderTarget(),c=F.getActiveCubeFace(),l=F.getActiveMipmapLevel();F.setRenderTarget(i),F.getClearColor(be),xe=F.getClearAlpha(),xe<1&&F.setClearColor(16777215,.5),F.clear(),Be&&it.render(n);let u=F.toneMapping;F.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),Ne===!0&&nt.setGlobalState(F.clippingPlanes,r),wt(e,n,r),W.updateMultisampleRenderTarget(i),W.updateRenderTargetMipmap(i),Ue.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Tt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(W.updateMultisampleRenderTarget(i),W.updateRenderTargetMipmap(i))}F.setRenderTarget(o,c,l),F.setClearColor(be,xe),d!==void 0&&(r.viewport=d),F.toneMapping=u}function wt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Tt(o,t,n,s,l,c)}}function Tt(e,t,n,r,i,a){z!==null&&i.isNodeMaterial&&z.setObject(e,i),e.onBeforeRender(F,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(F,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,F.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,F.renderBufferDirect(n,t,r,i,e,a),i.side=2):F.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(F,t,n,r,i,a)}function Et(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function Dt(e,t,n){t.isScene!==!0&&(t=Re);let r=U.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=Qe.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=Qe.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=qe.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ht),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return At(e,s),d}else s.uniforms=Qe.getUniforms(e),z!==null&&e.isNodeMaterial&&z.build(e,n,s),e.onBeforeCompile(s,F),d=Qe.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=nt.uniform),At(e,s),r.needsLights=Nt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=Et(k.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function Ot(e,t,n,r,i){let a=U.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=Dt(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function kt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Yf.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function At(e,t){let n=U.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function jt(e,t,n,r,i){t.isScene!==!0&&(t=Re),W.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=le===null?F.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:de.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=qe.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(h=F.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=U.get(r),y=k.state.lights;if(Ne===!0&&(Pe===!0||e!==me)){let t=e===me&&r.id===ue;nt.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==nt.numPlanes||v.numIntersection!==nt.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===Et(k.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;(b===!0||x===!0)&&(S=x===!0?Ot(r,t,i,s,h):Dt(r,t,i),z&&r.isNodeMaterial&&z.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),O=v.uniforms;if(H.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==ue&&(ue=r.id,w=!0),C||me!==e){H.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(V,`projectionMatrix`,e.projectionMatrix),E.setValue(V,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(V,Ie.setFromMatrixPosition(e.matrixWorld)),We.logarithmicDepthBuffer&&E.setValue(V,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(V,`isOrthographic`,e.isOrthographicCamera===!0),me!==e&&(me=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(V,`sunShadowMap`,y.state.sunShadowMap,W),y.state.directionalShadowMap.length>0&&E.setValue(V,`directionalShadowMap`,y.state.directionalShadowMap,W),y.state.spotShadowMap.length>0&&E.setValue(V,`spotShadowMap`,y.state.spotShadowMap,W),y.state.pointShadowMap.length>0&&E.setValue(V,`pointShadowMap`,y.state.pointShadowMap,W)),i.isSkinnedMesh){E.setOptional(V,i,`bindMatrix`),E.setOptional(V,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(V,`boneTexture`,e.boneTexture,W))}i.isBatchedMesh&&(E.setOptional(V,i,`batchingTexture`),E.setValue(V,`batchingTexture`,i._matricesTexture,W),E.setOptional(V,i,`batchingIdTexture`),E.setValue(V,`batchingIdTexture`,i._indirectTexture,W),E.setOptional(V,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(V,`batchingColorTexture`,i._colorsTexture,W));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&at.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(V,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(O.envMapIntensity.value=t.environmentIntensity),O.dfgLUT!==void 0&&(O.dfgLUT.value=fm()),w){if(E.setValue(V,`toneMappingExposure`,F.toneMappingExposure),v.needsLights&&Mt(O,T),a&&r.fog===!0&&$e.refreshFogUniforms(O,a),$e.refreshMaterialUniforms(O,r,we,Ce,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=D,t=0;for(let n of k.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;O.probesSH.value=e.textures,O.probesMin.value=e.min,O.probesMax.value=e.max,O.probesResolution.value=e.resolution}Yf.upload(V,kt(v),O,W)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Yf.upload(V,kt(v),O,W),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(V,`center`,i.center),E.setValue(V,`modelViewMatrix`,i.modelViewMatrix),E.setValue(V,`normalMatrix`,i.normalMatrix),E.setValue(V,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];lt.update(n,S),lt.bind(n,S)}}return S}function Mt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Nt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return ce},this.getRenderTarget=function(){return le},this.setRenderTargetTextures=function(e,t,n){let r=U.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),U.get(e.texture).__webglTexture=t,U.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=U.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){le=e,oe=t,ce=n;let r=null,i=!1,a=!1;if(e){let o=U.get(e);if(o.__useDefaultFramebuffer!==void 0){H.bindFramebuffer(V.FRAMEBUFFER,o.__webglFramebuffer),ge.copy(e.viewport),_e.copy(e.scissor),ve=e.scissorTest,H.viewport(ge),H.scissor(_e),H.setScissorTest(ve),ue=-1;return}if(o.__webglFramebuffer===void 0)W.setupRenderTarget(e);else if(o.__hasExternalTextures)W.rebindTextures(e,U.get(e.texture).__webglTexture,U.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&U.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);W.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=U.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&W.useMultisampledRTT(e)===!1?U.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ge.copy(e.viewport),_e.copy(e.scissor),ve=e.scissorTest}else ge.copy(Oe).multiplyScalar(we).floor(),_e.copy(ke).multiplyScalar(we).floor(),ve=Ae;if(n!==0&&(r=re),H.bindFramebuffer(V.FRAMEBUFFER,r)&&H.drawBuffers(e,r),H.viewport(ge),H.scissor(_e),H.setScissorTest(ve),i){let r=U.get(e.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=U.get(e.textures[t]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=U.get(e.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,t.__webglTexture,n)}ue=-1};function Pt(e){let t=U.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=We.textureFormatReadable(e.format),t.__typeReadable=We.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){x(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=U.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){H.bindFramebuffer(V.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+s);let u=Pt(o);if(u.__formatReadable===!1){x(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){x(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&V.readPixels(t,n,r,i,G.convert(c),G.convert(l),a)}finally{let e=le===null?null:U.get(le).__webglFramebuffer;H.bindFramebuffer(V.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=U.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){H.bindFramebuffer(V.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+s);let d=Pt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,f),V.bufferData(V.PIXEL_PACK_BUFFER,a.byteLength,V.STREAM_READ),V.readPixels(t,n,r,i,G.convert(l),G.convert(u),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let p=le===null?null:U.get(le).__webglFramebuffer;H.bindFramebuffer(V.FRAMEBUFFER,p);let m=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await ee(V,m,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,f),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,a),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(f),V.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;W.setTexture2D(e,0),V.copyTexSubImage2D(V.TEXTURE_2D,n,0,0,o,s,i,a),H.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=G.convert(t.format),_=G.convert(t.type),v;t.isData3DTexture?(W.setTexture3D(t,0),v=V.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(W.setTexture2DArray(t,0),v=V.TEXTURE_2D_ARRAY):(W.setTexture2D(t,0),v=V.TEXTURE_2D),H.activeTexture(V.TEXTURE0),H.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,t.flipY),H.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),H.pixelStorei(V.UNPACK_ALIGNMENT,t.unpackAlignment);let y=H.getParameter(V.UNPACK_ROW_LENGTH),b=H.getParameter(V.UNPACK_IMAGE_HEIGHT),x=H.getParameter(V.UNPACK_SKIP_PIXELS),S=H.getParameter(V.UNPACK_SKIP_ROWS),C=H.getParameter(V.UNPACK_SKIP_IMAGES);H.pixelStorei(V.UNPACK_ROW_LENGTH,h.width),H.pixelStorei(V.UNPACK_IMAGE_HEIGHT,h.height),H.pixelStorei(V.UNPACK_SKIP_PIXELS,l),H.pixelStorei(V.UNPACK_SKIP_ROWS,u),H.pixelStorei(V.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=U.get(e),r=U.get(t),h=U.get(n.__renderTarget),g=U.get(r.__renderTarget);H.bindFramebuffer(V.READ_FRAMEBUFFER,h.__webglFramebuffer),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,U.get(e).__webglTexture,i,d+n),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,U.get(t).__webglTexture,a,m+n)),V.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,V.DEPTH_BUFFER_BIT,V.NEAREST);H.bindFramebuffer(V.READ_FRAMEBUFFER,null),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||U.has(e)){let n=U.get(e),r=U.get(t);H.bindFramebuffer(V.READ_FRAMEBUFFER,ie),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,ae);for(let e=0;e<c;e++)w?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,n.__webglTexture,i),T?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,r.__webglTexture,a),i===0?T?V.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):V.copyTexSubImage2D(v,a,f,p,l,u,o,s):V.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,V.COLOR_BUFFER_BIT,V.NEAREST);H.bindFramebuffer(V.READ_FRAMEBUFFER,null),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?V.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?V.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):V.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):V.texSubImage2D(V.TEXTURE_2D,a,f,p,o,s,g,_,h);H.pixelStorei(V.UNPACK_ROW_LENGTH,y),H.pixelStorei(V.UNPACK_IMAGE_HEIGHT,b),H.pixelStorei(V.UNPACK_SKIP_PIXELS,x),H.pixelStorei(V.UNPACK_SKIP_ROWS,S),H.pixelStorei(V.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&V.generateMipmap(v),H.unbindTexture()},this.initRenderTarget=function(e){U.get(e).__webglFramebuffer===void 0&&W.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?W.setTextureCube(e,0):e.isData3DTexture?W.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?W.setTexture2DArray(e,0):W.setTexture2D(e,0),H.unbindTexture()},this.resetState=function(){oe=0,ce=0,le=null,H.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return De}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=de._getDrawingBufferColorSpace(e),t.unpackColorSpace=de._getUnpackColorSpace()}},mm=new Set([`auto`,`low`,`high`]);function hm(e,t){let n={fx:e.id};t.presetId&&(n.preset=t.presetId),t.quality!==`auto`&&(n.q=t.quality),t.playing||(n.play=`0`),t.reduceMotion===!0&&(n.motion=`reduce`),t.time!==null&&(n.t=t.time.toFixed(2));let r=t.presetId?le(e,t.presetId)??Te(e):Te(e);for(let i of e.params){let e=t.values[i.key];e!==r[i.key]&&(typeof e==`boolean`?n[i.key]=e?`1`:`0`:typeof e==`number`?n[i.key]=String(Math.round(e*1e3)/1e3):n[i.key]=e.replace(`#`,``))}return n}function gm(e,t){let n=e=>{let n=t[e];return Array.isArray(n)?n.find(e=>typeof e==`string`):typeof n==`string`?n:void 0},r=n(`preset`)??e.presets[0]?.id??``,i={...le(e,r)??Te(e)};for(let t of e.params){let e=n(t.key);e!==void 0&&(i[t.key]=e)}let{values:a}=ke(e,i),o=n(`q`),s=o&&mm.has(o)?o:`auto`,c=n(`t`),l=c!==void 0&&Number.isFinite(Number(c))?Number(c):null,u=n(`motion`);return{effectId:e.id,presetId:e.presets.some(e=>e.id===r)?r:``,quality:s,playing:n(`play`)!==`0`,reduceMotion:u===`reduce`||u!==`full`&&null,time:l,values:a}}function _m(e,t){let n=new Set([...Object.keys(e),...Object.keys(t)]);for(let r of n){let n=t[r],i=Array.isArray(n)?n.find(e=>typeof e==`string`):n;if((e[r]??``)!==(i??``))return!1}return!0}function vm(){let e=window.location.hash,t=e.indexOf(`?`),n=new URLSearchParams(t>=0?e.slice(t+1):``),r={};return n.forEach((e,t)=>{r[t]=e}),r}var ym=vm(),bm=gm(nd(ym.fx??`aura`).meta,ym),$=yr({effectId:bm.effectId,presetId:bm.presetId,quality:bm.quality,playing:bm.playing,cinema:!1,showFps:!0,fps:null,reduceMotion:bm.reduceMotion,systemReduce:window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,time:bm.time,seekToken:0,values:bm.values,mobilePane:`stage`,sideTab:`controls`,error:null,loading:!0,ready:!1,helpOpen:!1});function xm(){return nd($.effectId).meta}function Sm(){return $.reduceMotion??$.systemReduce}function Cm(e){let t=nd(e).meta;$.effectId=t.id,$.presetId=t.presets[0]?.id??``,$.values=le(t,$.presetId)??Te(t),$.time=null,$.playing=!0,window.innerWidth<900&&($.mobilePane=`stage`)}function wm(e){let t=xm(),n=le(t,e);n&&($.presetId=e,$.values=n)}function Tm(e,t){let n=xm(),r={...$.values,[e]:t},i=ke(n,r);$.values=i.values,$.presetId=n.presets.find(e=>me(le(n,e.id)??{},i.values))?.id??``}function Em(e){$.quality=e}function Dm(){$.playing=!$.playing}function Om(){$.time=0,$.seekToken+=1,$.playing=!0}function km(e){$.time=e,$.seekToken+=1,$.playing=!1}function Am(){return hm(xm(),{effectId:$.effectId,presetId:$.presetId,quality:$.quality,playing:$.playing,reduceMotion:$.reduceMotion,time:$.playing?null:$.time,values:$.values})}function jm(e){let t=nd((typeof e.fx==`string`?e.fx:Array.isArray(e.fx)?e.fx[0]:$.effectId)??$.effectId).meta,n=gm(t,e);$.effectId=t.id,$.presetId=n.presetId,$.quality=n.quality,$.playing=n.playing,$.reduceMotion=n.reduceMotion,$.time=n.time,$.values=n.values,n.time!==null&&($.seekToken+=1)}function Mm(e){return _m(Am(),e)}function Nm(e){let t=td[(td.findIndex(e=>e.meta.id===$.effectId)+e+td.length)%td.length];t&&Cm(t.meta.id)}var Pm=window.matchMedia(`(prefers-reduced-motion: reduce)`);Pm.addEventListener(`change`,()=>{$.systemReduce=Pm.matches});var Fm=[`data-query`,`data-category`],Im={class:`search`},Lm=[`value`],Rm={class:`chips`,role:`tablist`,"aria-label":`分类`},zm=[`aria-selected`,`onClick`],Bm={key:0,class:`empty`},Vm={key:1,class:`cards`},Hm=[`aria-current`,`data-effect`,`onClick`],Um=[`src`,`alt`],Wm=Fi({__name:`GalleryPanel`,props:{query:{},category:{}},emits:[`update:query`,`update:category`],setup(e,{emit:t}){let n=e,r=t,i=Cs(()=>{let e=n.query.trim().toLowerCase();return td.filter(t=>{let r=t.meta;return n.category!==`all`&&r.categoryId!==n.category?!1:!e||[r.name,r.summary,r.category,r.id,...r.tags].join(` `).toLowerCase().includes(e)})});function a(e){return Fu(`thumbs/${e}.jpg`)}return(t,n)=>(No(),Ro(`section`,{class:`gallery`,"aria-label":`效果图库`,"data-query":e.query,"data-category":e.category},[n[2]||=X(`header`,{class:`gallery-head`},[X(`p`,{class:`eyebrow`},`图库`),X(`h2`,null,`十二条分层效果`)],-1),X(`label`,Im,[n[1]||=X(`span`,null,`搜索`,-1),X(`input`,{id:`effect-search`,value:e.query,type:`search`,placeholder:`名称、分类或标签`,onInput:n[0]||=e=>r(`update:query`,e.target.value)},null,40,Lm)]),X(`div`,Rm,[(No(!0),Ro(Do,null,ua(Y(ed),t=>(No(),Ro(`button`,{key:t.id,type:`button`,role:`tab`,"aria-selected":e.category===t.id,class:qt({on:e.category===t.id}),onClick:e=>r(`update:category`,t.id)},nn(t.name),11,zm))),128))]),i.value.length===0?(No(),Ro(`p`,Bm,`没有对得上的效果。换个词，或切回全部分类。`)):(No(),Ro(`ul`,Vm,[(No(!0),Ro(Do,null,ua(i.value,e=>(No(),Ro(`li`,{key:e.meta.id},[X(`button`,{type:`button`,class:qt([`card`,{on:Y($).effectId===e.meta.id}]),"aria-current":Y($).effectId===e.meta.id?`true`:void 0,"data-effect":e.meta.id,onClick:t=>Y(Cm)(e.meta.id)},[X(`img`,{src:a(e.meta.id),alt:`${e.meta.name}的静态截帧`},null,8,Um),X(`span`,null,[X(`small`,null,nn(e.meta.category),1),X(`strong`,null,nn(e.meta.name),1),X(`em`,null,nn(e.meta.summary),1)])],10,Hm)]))),128))]))],8,Fm))}}),Gm={class:`inspector`,"aria-label":`参数`},Km={class:`eyebrow`},qm={class:`lead`},Jm={class:`presets`,role:`listbox`,"aria-label":`预设`},Ym=[`onClick`],Xm={class:`field`},Zm=[`max`,`value`,`aria-valuetext`],Qm={key:0},$m=[`min`,`max`,`step`,`value`,`onInput`],eh=[`value`,`onInput`],th=[`checked`,`onChange`],nh={class:`credits`},rh=[`href`],ih=Fi({__name:`InspectorPanel`,setup(e){let t=Cs(()=>xm()),n=Cs(()=>{let e=t.value.loop,n=(($.time??t.value.posterTime)%e+e)%e;return Math.round(n*100)/100});function r(e,t){let n=t.target;Tm(e,Number(n.value))}function i(e,t){Tm(e,t.target.value)}function a(e,t){Tm(e,t.target.checked)}function o(e){km(Number(e.target.value))}return(e,s)=>(No(),Ro(`section`,Gm,[X(`header`,null,[X(`p`,Km,nn(t.value.category),1),X(`h2`,null,nn(t.value.name),1),X(`p`,qm,nn(t.value.description),1)]),X(`div`,Jm,[(No(!0),Ro(Do,null,ua(t.value.presets,e=>(No(),Ro(`button`,{key:e.id,type:`button`,class:qt({on:Y($).presetId===e.id}),onClick:t=>Y(wm)(e.id)},[X(`strong`,null,nn(e.name),1),X(`span`,null,nn(e.blurb),1)],10,Ym))),128))]),X(`label`,Xm,[X(`span`,null,[s[0]||=Jo(`循环时间 `,-1),X(`b`,null,nn(n.value.toFixed(2))+`s`,1)]),X(`input`,{type:`range`,min:`0`,max:t.value.loop,step:`0.01`,value:n.value,"aria-valuetext":`${n.value} 秒`,onInput:o},null,40,Zm)]),(No(!0),Ro(Do,null,ua(t.value.params,e=>(No(),Ro(`label`,{key:e.key,class:`field`},[X(`span`,null,[Jo(nn(e.label)+` `,1),e.type===`float`?(No(),Ro(`b`,Qm,nn(Number(Y($).values[e.key]).toFixed(2)),1)):Yo(``,!0)]),e.type===`float`?(No(),Ro(`input`,{key:0,type:`range`,min:e.min,max:e.max,step:e.step,value:Number(Y($).values[e.key]),onInput:t=>r(e.key,t)},null,40,$m)):e.type===`color`?(No(),Ro(`input`,{key:1,type:`color`,value:String(Y($).values[e.key]),onInput:t=>i(e.key,t)},null,40,eh)):(No(),Ro(`input`,{key:2,type:`checkbox`,checked:Y($).values[e.key]===!0,onChange:t=>a(e.key,t)},null,40,th))]))),128)),X(`section`,nh,[s[1]||=X(`h3`,null,`这一条用到的来源`,-1),X(`ul`,null,[(No(!0),Ro(Do,null,ua(t.value.attribution,e=>(No(),Ro(`li`,{key:e.url},[X(`a`,{href:e.url,target:`_blank`,rel:`noreferrer noopener`},nn(e.title),9,rh),X(`small`,null,nn(e.kind===`incorporated`?`直接纳入`:e.kind===`adapted`?`改编`:`原创`)+` · `+nn(e.license),1),X(`p`,null,nn(e.note),1)]))),128))])])]))}}),ah=ot(it(((e,t)=>{function n(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw Error(`map is read-only`)}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw Error(`set is read-only`)}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(t=>{let r=e[t],i=typeof r;i!==`object`&&i!==`function`||Object.isFrozen(r)||n(r)}),e}var r=class{constructor(e){e.data===void 0&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}};function i(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#x27;`)}function a(e,...t){let n=Object.create(null);for(let t in e)n[t]=e[t];return t.forEach(function(e){for(let t in e)n[t]=e[t]}),n}var o=`</span>`,s=e=>!!e.scope,c=(e,{prefix:t})=>{if(e.startsWith(`language:`))return e.replace(`language:`,`language-`);if(e.includes(`.`)){let n=e.split(`.`);return[`${t}${n.shift()}`,...n.map((e,t)=>`${e}${`_`.repeat(t+1)}`)].join(` `)}return`${t}${e}`},l=class{constructor(e,t){this.buffer=``,this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=i(e)}openNode(e){if(!s(e))return;let t=c(e.scope,{prefix:this.classPrefix});this.span(t)}closeNode(e){s(e)&&(this.buffer+=o)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}},u=(e={})=>{let t={children:[]};return Object.assign(t,e),t},d=class e{constructor(){this.rootNode=u(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){let t=u({scope:e});this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return typeof t==`string`?e.addText(t):t.children&&(e.openNode(t),t.children.forEach(t=>this._walk(e,t)),e.closeNode(t)),e}static _collapse(t){typeof t!=`string`&&t.children&&(t.children.every(e=>typeof e==`string`)?t.children=[t.children.join(``)]:t.children.forEach(t=>{e._collapse(t)}))}},f=class extends d{constructor(e){super(),this.options=e}addText(e){e!==``&&this.add(e)}startScope(e){this.openNode(e)}endScope(){this.closeNode()}__addSublanguage(e,t){let n=e.root;t&&(n.scope=`language:${t}`),this.add(n)}toHTML(){return new l(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}};function p(e){return e?typeof e==`string`?e:e.source:null}function m(e){return _(`(?=`,e,`)`)}function h(e){return _(`(?:`,e,`)*`)}function g(e){return _(`(?:`,e,`)?`)}function _(...e){return e.map(e=>p(e)).join(``)}function v(e){let t=e[e.length-1];return typeof t==`object`&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function y(...e){return`(`+(v(e).capture?``:`?:`)+e.map(e=>p(e)).join(`|`)+`)`}function b(e){return RegExp(e.toString()+`|`).exec(``).length-1}function x(e,t){let n=e&&e.exec(t);return n&&n.index===0}var S=new RegExp(y(/\[(?:[^\\\]]|\\.)*\]/,/\(\?<(?![=!])[^>]+>/,/\(\?'[^']+'/,/\(\??/,/\\([1-9][0-9]*)/,/\\./));function C(e,{joinWith:t}){let n=0;return e.map(e=>{n+=1;let t=n,r=p(e),i=``;for(;r.length>0;){let e=S.exec(r);if(!e){i+=r;break}i+=r.substring(0,e.index),r=r.substring(e.index+e[0].length),e[0][0]===`\\`&&e[1]?i+=`\\`+String(Number(e[1])+t):(i+=e[0],(e[0]===`(`||/^\(\?[<']/.test(e[0]))&&n++)}return i}).map(e=>`(${e})`).join(t)}var w=/\b\B/,T=`[a-zA-Z]\\w*`,E=`[a-zA-Z_]\\w*`,D=`\\b\\d+(\\.\\d+)?`,O=`(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)`,k=`\\b(0b[01]+)`,A=`!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~`,j=(e={})=>{let t=/^#![ ]*\//;return e.binary&&(e.begin=_(t,/.*\b/,e.binary,/\b.*/)),a({scope:`meta`,begin:t,end:/$/,relevance:0,"on:begin":(e,t)=>{e.index!==0&&t.ignoreMatch()}},e)},M={begin:`\\\\[\\s\\S]`,relevance:0},N={scope:`string`,begin:`'`,end:`'`,illegal:`\\n`,contains:[M]},P={scope:`string`,begin:`"`,end:`"`,illegal:`\\n`,contains:[M]},F={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},I=function(e,t,n={}){let r=a({scope:`comment`,begin:e,end:t,contains:[]},n);r.contains.push({scope:`doctag`,begin:`[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)`,end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});let i=y(`I`,`a`,`is`,`so`,`us`,`to`,`at`,`if`,`in`,`it`,`on`,/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return r.contains.push({begin:_(/[ ]+/,`(`,i,/[.]?[:]?([.][ ]|[ ])/,`){3}`)}),r},ee=I(`//`,`$`),L=I(`/\\*`,`\\*/`),te=I(`#`,`$`),R=Object.freeze({__proto__:null,APOS_STRING_MODE:N,BACKSLASH_ESCAPE:M,BINARY_NUMBER_MODE:{scope:`number`,begin:k,relevance:0},BINARY_NUMBER_RE:k,COMMENT:I,C_BLOCK_COMMENT_MODE:L,C_LINE_COMMENT_MODE:ee,C_NUMBER_MODE:{scope:`number`,begin:O,relevance:0},C_NUMBER_RE:O,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})},HASH_COMMENT_MODE:te,IDENT_RE:T,MATCH_NOTHING_RE:w,METHOD_GUARD:{begin:`\\.\\s*[a-zA-Z_]\\w*`,relevance:0},NUMBER_MODE:{scope:`number`,begin:D,relevance:0},NUMBER_RE:D,PHRASAL_WORDS_MODE:F,QUOTE_STRING_MODE:P,REGEXP_MODE:{scope:`regexp`,begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[M,{begin:/\[/,end:/\]/,relevance:0,contains:[M]}]},RE_STARTERS_RE:A,SHEBANG:j,TITLE_MODE:{scope:`title`,begin:T,relevance:0},UNDERSCORE_IDENT_RE:E,UNDERSCORE_TITLE_MODE:{scope:`title`,begin:E,relevance:0}});function ne(e,t){e.input[e.index-1]===`.`&&t.ignoreMatch()}function z(e,t){e.className!==void 0&&(e.scope=e.className,delete e.className)}function re(e,t){t&&e.beginKeywords&&(e.begin=`\\b(`+e.beginKeywords.split(` `).join(`|`)+`)(?!\\.)(?=\\b|\\s)`,e.__beforeBegin=ne,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function ie(e,t){Array.isArray(e.illegal)&&(e.illegal=y(...e.illegal))}function ae(e,t){if(e.match){if(e.begin||e.end)throw Error(`begin & end are not supported with match`);e.begin=e.match,delete e.match}}function oe(e,t){e.relevance===void 0&&(e.relevance=1)}var se=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw Error(`beforeMatch cannot be used with starts`);let n=Object.assign({},e);Object.keys(e).forEach(t=>{delete e[t]}),e.keywords=n.keywords,e.begin=_(n.beforeMatch,m(n.begin)),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},ce=[`of`,`and`,`for`,`in`,`not`,`or`,`if`,`then`,`parent`,`list`,`value`],le=`keyword`;function ue(e,t,n=le){let r=Object.create(null);return typeof e==`string`?i(n,e.split(` `)):Array.isArray(e)?i(n,e):Object.keys(e).forEach(function(n){Object.assign(r,ue(e[n],t,n))}),r;function i(e,n){t&&(n=n.map(e=>e.toLowerCase())),n.forEach(function(t){let n=t.split(`|`);r[n[0]]=[e,de(n[0],n[1])]})}}function de(e,t){return t?Number(t):+!fe(e)}function fe(e){return ce.includes(e.toLowerCase())}var pe={},me=e=>{console.error(e)},he=(e,...t)=>{console.log(`WARN: ${e}`,...t)},ge=(e,t)=>{pe[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),pe[`${e}/${t}`]=!0)},_e=Error();function ve(e,t,{key:n}){let r=0,i=e[n],a={},o={};for(let e=1;e<=t.length;e++)o[e+r]=i[e],a[e+r]=!0,r+=b(t[e-1]);e[n]=o,e[n]._emit=a,e[n]._multi=!0}function ye(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw me(`skip, excludeBegin, returnBegin not compatible with beginScope: {}`),_e;if(typeof e.beginScope!=`object`||e.beginScope===null)throw me(`beginScope must be object`),_e;ve(e,e.begin,{key:`beginScope`}),e.begin=C(e.begin,{joinWith:``})}}function be(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw me(`skip, excludeEnd, returnEnd not compatible with endScope: {}`),_e;if(typeof e.endScope!=`object`||e.endScope===null)throw me(`endScope must be object`),_e;ve(e,e.end,{key:`endScope`}),e.end=C(e.end,{joinWith:``})}}function xe(e){e.scope&&typeof e.scope==`object`&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function Se(e){xe(e),typeof e.beginScope==`string`&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope==`string`&&(e.endScope={_wrap:e.endScope}),ye(e),be(e)}function Ce(e){function t(t,n){return new RegExp(p(t),`m`+(e.case_insensitive?`i`:``)+(e.unicodeRegex?`u`:``)+(n?`g`:``))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,t){t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),this.matchAt+=b(e)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);let e=this.regexes.map(e=>e[1]);this.matcherRe=t(C(e,{joinWith:`|`}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;let t=this.matcherRe.exec(e);if(!t)return null;let n=t.findIndex((e,t)=>t>0&&e!==void 0),r=this.matchIndexes[n];return t.splice(0,n),Object.assign(t,r)}}class r{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];let t=new n;return this.rules.slice(e).forEach(([e,n])=>t.addRule(e,n)),t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(e,t){this.rules.push([e,t]),t.type===`begin`&&this.count++}exec(e){let t=this.getMatcher(this.regexIndex);t.lastIndex=this.lastIndex;let n=t.exec(e);if(this.resumingScanAtSamePosition()&&!(n&&n.index===this.lastIndex)){let t=this.getMatcher(0);t.lastIndex=this.lastIndex+1,n=t.exec(e)}return n&&(this.regexIndex+=n.position+1,this.regexIndex===this.count&&this.considerAll()),n}}function i(e){let t=new r;return e.contains.forEach(e=>t.addRule(e.begin,{rule:e,type:`begin`})),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:`end`}),e.illegal&&t.addRule(e.illegal,{type:`illegal`}),t}function o(n,r){let a=n;if(n.isCompiled)return a;[z,ae,Se,se].forEach(e=>e(n,r)),e.compilerExtensions.forEach(e=>e(n,r)),n.__beforeBegin=null,[re,ie,oe].forEach(e=>e(n,r)),n.isCompiled=!0;let s=null;return typeof n.keywords==`object`&&n.keywords.$pattern&&(n.keywords=Object.assign({},n.keywords),s=n.keywords.$pattern,delete n.keywords.$pattern),s||=/\w+/,n.keywords&&=ue(n.keywords,e.case_insensitive),a.keywordPatternRe=t(s,!0),r&&(n.begin||=/\B|\b/,a.beginRe=t(a.begin),!n.end&&!n.endsWithParent&&(n.end=/\B|\b/),n.end&&(a.endRe=t(a.end)),a.terminatorEnd=p(a.end)||``,n.endsWithParent&&r.terminatorEnd&&(a.terminatorEnd+=(n.end?`|`:``)+r.terminatorEnd)),n.illegal&&(a.illegalRe=t(n.illegal)),n.contains||=[],n.contains=[].concat(...n.contains.map(function(e){return Te(e===`self`?n:e)})),n.contains.forEach(function(e){o(e,a)}),n.starts&&o(n.starts,r),a.matcher=i(a),a}if(e.compilerExtensions||=[],e.contains&&e.contains.includes(`self`))throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=a(e.classNameAliases||{}),o(e)}function we(e){return e?e.endsWithParent||we(e.starts):!1}function Te(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return a(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:we(e)?a(e,{starts:e.starts?a(e.starts):null}):Object.isFrozen(e)?a(e):e}var Ee=`11.12.0`,De=class extends Error{constructor(e,t){super(e),this.name=`HTMLInjectionError`,this.html=t}},Oe=i,B=a,ke=Symbol(`nomatch`),Ae=7,je=function(e){let t=Object.create(null),i=Object.create(null),a=[],o=!0,s=`Could not find the language '{}', did you forget to load/include a language module?`,c={disableAutodetect:!0,name:`Plain text`,contains:[]},l={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:`hljs-`,cssSelector:`pre code`,languages:null,__emitter:f};function u(e){return l.noHighlightRe.test(e)}function d(e){let t=e.className+` `;t+=e.parentNode?e.parentNode.className:``;let n=l.languageDetectRe.exec(t);if(n){let t=N(n[1]);return t||(he(s.replace(`{}`,n[1])),he(`Falling back to no-highlight mode for this block.`,e)),t?n[1]:`no-highlight`}return t.split(/\s+/).find(e=>u(e)||N(e))}function p(e,t,n){let r=``,i=``;typeof t==`object`?(r=e,n=t.ignoreIllegals,i=t.language):(ge(`10.7.0`,`highlight(lang, code, ...args) has been deprecated.`),ge(`10.7.0`,`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),i=e,r=t),n===void 0&&(n=!0);let a={code:r,language:i};te(`before:highlight`,a);let o=a.result?a.result:v(a.language,a.code,n);return o.code=a.code,te(`after:highlight`,o),o}function v(e,n,i,a){let c=Object.create(null);function u(e,t){return e.keywords[t]}function d(){if(!A.keywords){M.addText(P);return}let e=0;A.keywordPatternRe.lastIndex=0;let t=A.keywordPatternRe.exec(P),n=``;for(;t;){n+=P.substring(e,t.index);let r=D.case_insensitive?t[0].toLowerCase():t[0],i=u(A,r);if(i){let[e,a]=i;if(M.addText(n),n=``,c[r]=(c[r]||0)+1,c[r]<=Ae&&(F+=a),e.startsWith(`_`))n+=t[0];else{let n=D.classNameAliases[e]||e;m(t[0],n)}}else n+=t[0];e=A.keywordPatternRe.lastIndex,t=A.keywordPatternRe.exec(P)}n+=P.substring(e),M.addText(n)}function f(){if(P===``)return;let e=null;if(typeof A.subLanguage==`string`){if(!t[A.subLanguage]){M.addText(P);return}e=v(A.subLanguage,P,!0,j[A.subLanguage]),j[A.subLanguage]=e._top}else e=S(P,A.subLanguage.length?A.subLanguage:null);A.relevance>0&&(F+=e.relevance),M.__addSublanguage(e._emitter,e.language)}function p(){A.subLanguage==null?d():f(),P=``}function m(e,t){e!==``&&(M.startScope(t),M.addText(e),M.endScope())}function h(e,t){let n=1,r=t.length-1;for(;n<=r;){if(!e._emit[n]){n++;continue}let r=D.classNameAliases[e[n]]||e[n],i=t[n];r?m(i,r):(P=i,d(),P=``),n++}}function g(e,t){return e.scope&&typeof e.scope==`string`&&M.openNode(D.classNameAliases[e.scope]||e.scope),e.beginScope&&(e.beginScope._wrap?(m(P,D.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),P=``):e.beginScope._multi&&(h(e.beginScope,t),P=``)),A=Object.create(e,{parent:{value:A}}),A}function _(e,t,n){let i=x(e.endRe,n);if(i){if(e[`on:end`]){let n=new r(e);e[`on:end`](t,n),n.isMatchIgnored&&(i=!1)}if(i){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return _(e.parent,t,n)}function y(e){return A.matcher.regexIndex===0?(P+=e[0],1):(L=!0,0)}function b(e){let t=e[0],n=e.rule,i=new r(n),a=[n.__beforeBegin,n[`on:begin`]];for(let n of a)if(n&&(n(e,i),i.isMatchIgnored))return y(t);return n.skip?P+=t:(n.excludeBegin&&(P+=t),p(),!n.returnBegin&&!n.excludeBegin&&(P=t)),g(n,e),n.returnBegin?0:t.length}function C(e){let t=e[0],r=n.substring(e.index),i=_(A,e,r);if(!i)return ke;let a=A;A.endScope&&A.endScope._wrap?(p(),m(t,A.endScope._wrap)):A.endScope&&A.endScope._multi?(p(),h(A.endScope,e)):a.skip?P+=t:(a.returnEnd||a.excludeEnd||(P+=t),p(),a.excludeEnd&&(P=t));do A.scope&&M.closeNode(),!A.skip&&!A.subLanguage&&(F+=A.relevance),A=A.parent;while(A!==i.parent);return i.starts&&g(i.starts,e),a.returnEnd?0:t.length}function w(){let e=[];for(let t=A;t!==D;t=t.parent)t.scope&&e.unshift(t.scope);e.forEach(e=>M.openNode(e))}let T={};function E(t,r){let a=r&&r[0];if(P+=t,a==null)return p(),0;if(T.type===`begin`&&r.type===`end`&&T.index===r.index&&a===``){if(P+=n.slice(r.index,r.index+1),!o){let t=Error(`0 width match regex (${e})`);throw t.languageName=e,t.badRule=T.rule,t}return 1}if(T=r,r.type===`begin`)return b(r);if(r.type===`illegal`&&!i){let e=Error(`Illegal lexeme "`+a+`" for mode "`+(A.scope||`<unnamed>`)+`"`);throw e.mode=A,e}if(r.type===`end`){let e=C(r);if(e!==ke)return e}if(r.type===`illegal`&&a===``)return r.index===n.length||(P+=`
`),1;if(ee>1e5&&ee>r.index*3)throw Error(`potential infinite loop, way more iterations than matches`);return P+=a,a.length}let D=N(e);if(!D)throw me(s.replace(`{}`,e)),Error(`Unknown language: "`+e+`"`);let O=Ce(D),k=``,A=a||O,j={},M=new l.__emitter(l);w();let P=``,F=0,I=0,ee=0,L=!1;try{if(D.__emitTokens)D.__emitTokens(n,M);else{for(A.matcher.considerAll();;){ee++,L?L=!1:A.matcher.considerAll(),A.matcher.lastIndex=I;let e=A.matcher.exec(n);if(!e)break;let t=E(n.substring(I,e.index),e);I=e.index+t}E(n.substring(I))}return M.finalize(),k=M.toHTML(),{language:e,value:k,relevance:F,illegal:!1,_emitter:M,_top:A}}catch(t){if(t.message&&t.message.includes(`Illegal`))return{language:e,value:Oe(n),illegal:!0,relevance:0,_illegalBy:{message:t.message,index:I,context:n.slice(I-100,I+100),mode:t.mode,resultSoFar:k},_emitter:M};if(o)return{language:e,value:Oe(n),illegal:!1,relevance:0,errorRaised:t,_emitter:M,_top:A};throw t}}function b(e){let t={value:Oe(e),illegal:!1,relevance:0,_top:c,_emitter:new l.__emitter(l)};return t._emitter.addText(e),t}function S(e,n){n=n||l.languages||Object.keys(t);let r=b(e),i=n.filter(N).filter(F).map(t=>v(t,e,!1));i.unshift(r);let[a,o]=i.sort((e,t)=>{if(e.relevance!==t.relevance)return t.relevance-e.relevance;if(e.language&&t.language){if(N(e.language).supersetOf===t.language)return 1;if(N(t.language).supersetOf===e.language)return-1}return 0}),s=a;return s.secondBest=o,s}function C(e,t,n){let r=t&&i[t]||n;e.classList.add(`hljs`),e.classList.add(`language-${r}`)}function w(e){let t=null,n=d(e);if(u(n))return;if(te(`before:highlightElement`,{el:e,language:n}),e.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",e);return}if(e.children.length>0&&(l.ignoreUnescapedHTML||(console.warn(`One of your code blocks includes unescaped HTML. This is a potentially serious security risk.`),console.warn(`https://github.com/highlightjs/highlight.js/wiki/security`),console.warn(`The element with unescaped HTML:`),console.warn(e)),l.throwUnescapedHTML))throw new De(`One of your code blocks includes unescaped HTML.`,e.innerHTML);t=e;let r=t.textContent,i=n?p(r,{language:n,ignoreIllegals:!0}):S(r);e.innerHTML=i.value,e.dataset.highlighted=`yes`,C(e,n,i.language),e.result={language:i.language,re:i.relevance,relevance:i.relevance},i.secondBest&&(e.secondBest={language:i.secondBest.language,relevance:i.secondBest.relevance}),te(`after:highlightElement`,{el:e,result:i,text:r})}function T(e){l=B(l,e)}let E=()=>{k(),ge(`10.6.0`,`initHighlighting() deprecated.  Use highlightAll() now.`)};function D(){k(),ge(`10.6.0`,`initHighlightingOnLoad() deprecated.  Use highlightAll() now.`)}let O=!1;function k(){function e(){k()}document.readyState===`loading`?(O||window.addEventListener(`DOMContentLoaded`,e,!1),O=!0):document.querySelectorAll(l.cssSelector).forEach(w)}function A(n,r){let i=null;try{i=r(e)}catch(e){if(me(`Language definition for '{}' could not be registered.`.replace(`{}`,n)),o)me(e);else throw e;i=c}i.name||(i.name=n),t[n]=i,i.rawDefinition=r.bind(null,e),i.aliases&&P(i.aliases,{languageName:n})}function j(e){delete t[e];for(let t of Object.keys(i))i[t]===e&&delete i[t]}function M(){return Object.keys(t)}function N(e){return e=(e||``).toLowerCase(),t[e]||t[i[e]]}function P(e,{languageName:t}){typeof e==`string`&&(e=[e]),e.forEach(e=>{i[e.toLowerCase()]=t})}function F(e){let t=N(e);return t&&!t.disableAutodetect}function I(e){e[`before:highlightBlock`]&&!e[`before:highlightElement`]&&(e[`before:highlightElement`]=t=>{e[`before:highlightBlock`](Object.assign({block:t.el},t))}),e[`after:highlightBlock`]&&!e[`after:highlightElement`]&&(e[`after:highlightElement`]=t=>{e[`after:highlightBlock`](Object.assign({block:t.el},t))})}function ee(e){I(e),a.push(e)}function L(e){let t=a.indexOf(e);t!==-1&&a.splice(t,1)}function te(e,t){let n=e;a.forEach(function(e){e[n]&&e[n](t)})}function ne(e){return ge(`10.7.0`,`highlightBlock will be removed entirely in v12.0`),ge(`10.7.0`,`Please use highlightElement now.`),w(e)}Object.assign(e,{highlight:p,highlightAuto:S,highlightAll:k,highlightElement:w,highlightBlock:ne,configure:T,initHighlighting:E,initHighlightingOnLoad:D,registerLanguage:A,unregisterLanguage:j,listLanguages:M,getLanguage:N,registerAliases:P,autoDetection:F,inherit:B,addPlugin:ee,removePlugin:L}),e.debugMode=function(){o=!1},e.safeMode=function(){o=!0},e.versionString=Ee,e.regex={concat:_,lookahead:m,either:y,optional:g,anyNumberOfTimes:h};for(let e in R)typeof R[e]==`object`&&n(R[e]);return Object.assign(e,R),e},Me=je({});Me.newInstance=()=>je({}),t.exports=Me,Me.HighlightJS=Me,Me.default=Me}))()).default;function oh(e){return{name:`GLSL`,keywords:{keyword:`break continue discard do else for if return while switch case default attribute binding buffer ccw centroid centroid varying coherent column_major const cw depth_any depth_greater depth_less depth_unchanged early_fragment_tests equal_spacing flat fractional_even_spacing fractional_odd_spacing highp in index inout invariant invocations isolines layout line_strip lines lines_adjacency local_size_x local_size_y local_size_z location lowp max_vertices mediump noperspective offset origin_upper_left out packed patch pixel_center_integer point_mode points precise precision quads r11f_g11f_b10f r16 r16_snorm r16f r16i r16ui r32f r32i r32ui r8 r8_snorm r8i r8ui readonly restrict rg16 rg16_snorm rg16f rg16i rg16ui rg32f rg32i rg32ui rg8 rg8_snorm rg8i rg8ui rgb10_a2 rgb10_a2ui rgba16 rgba16_snorm rgba16f rgba16i rgba16ui rgba32f rgba32i rgba32ui rgba8 rgba8_snorm rgba8i rgba8ui row_major sample shared smooth std140 std430 stream triangle_strip triangles triangles_adjacency uniform varying vertices volatile writeonly`,type:`atomic_uint bool bvec2 bvec3 bvec4 dmat2 dmat2x2 dmat2x3 dmat2x4 dmat3 dmat3x2 dmat3x3 dmat3x4 dmat4 dmat4x2 dmat4x3 dmat4x4 double dvec2 dvec3 dvec4 float iimage1D iimage1DArray iimage2D iimage2DArray iimage2DMS iimage2DMSArray iimage2DRect iimage3D iimageBuffer iimageCube iimageCubeArray image1D image1DArray image2D image2DArray image2DMS image2DMSArray image2DRect image3D imageBuffer imageCube imageCubeArray int isampler1D isampler1DArray isampler2D isampler2DArray isampler2DMS isampler2DMSArray isampler2DRect isampler3D isamplerBuffer isamplerCube isamplerCubeArray ivec2 ivec3 ivec4 mat2 mat2x2 mat2x3 mat2x4 mat3 mat3x2 mat3x3 mat3x4 mat4 mat4x2 mat4x3 mat4x4 sampler1D sampler1DArray sampler1DArrayShadow sampler1DShadow sampler2D sampler2DArray sampler2DArrayShadow sampler2DMS sampler2DMSArray sampler2DRect sampler2DRectShadow sampler2DShadow sampler3D samplerBuffer samplerCube samplerCubeArray samplerCubeArrayShadow samplerCubeShadow image1D uimage1DArray uimage2D uimage2DArray uimage2DMS uimage2DMSArray uimage2DRect uimage3D uimageBuffer uimageCube uimageCubeArray uint usampler1D usampler1DArray usampler2D usampler2DArray usampler2DMS usampler2DMSArray usampler2DRect usampler3D samplerBuffer usamplerCube usamplerCubeArray uvec2 uvec3 uvec4 vec2 vec3 vec4 void`,built_in:`gl_MaxAtomicCounterBindings gl_MaxAtomicCounterBufferSize gl_MaxClipDistances gl_MaxClipPlanes gl_MaxCombinedAtomicCounterBuffers gl_MaxCombinedAtomicCounters gl_MaxCombinedImageUniforms gl_MaxCombinedImageUnitsAndFragmentOutputs gl_MaxCombinedTextureImageUnits gl_MaxComputeAtomicCounterBuffers gl_MaxComputeAtomicCounters gl_MaxComputeImageUniforms gl_MaxComputeTextureImageUnits gl_MaxComputeUniformComponents gl_MaxComputeWorkGroupCount gl_MaxComputeWorkGroupSize gl_MaxDrawBuffers gl_MaxFragmentAtomicCounterBuffers gl_MaxFragmentAtomicCounters gl_MaxFragmentImageUniforms gl_MaxFragmentInputComponents gl_MaxFragmentInputVectors gl_MaxFragmentUniformComponents gl_MaxFragmentUniformVectors gl_MaxGeometryAtomicCounterBuffers gl_MaxGeometryAtomicCounters gl_MaxGeometryImageUniforms gl_MaxGeometryInputComponents gl_MaxGeometryOutputComponents gl_MaxGeometryOutputVertices gl_MaxGeometryTextureImageUnits gl_MaxGeometryTotalOutputComponents gl_MaxGeometryUniformComponents gl_MaxGeometryVaryingComponents gl_MaxImageSamples gl_MaxImageUnits gl_MaxLights gl_MaxPatchVertices gl_MaxProgramTexelOffset gl_MaxTessControlAtomicCounterBuffers gl_MaxTessControlAtomicCounters gl_MaxTessControlImageUniforms gl_MaxTessControlInputComponents gl_MaxTessControlOutputComponents gl_MaxTessControlTextureImageUnits gl_MaxTessControlTotalOutputComponents gl_MaxTessControlUniformComponents gl_MaxTessEvaluationAtomicCounterBuffers gl_MaxTessEvaluationAtomicCounters gl_MaxTessEvaluationImageUniforms gl_MaxTessEvaluationInputComponents gl_MaxTessEvaluationOutputComponents gl_MaxTessEvaluationTextureImageUnits gl_MaxTessEvaluationUniformComponents gl_MaxTessGenLevel gl_MaxTessPatchComponents gl_MaxTextureCoords gl_MaxTextureImageUnits gl_MaxTextureUnits gl_MaxVaryingComponents gl_MaxVaryingFloats gl_MaxVaryingVectors gl_MaxVertexAtomicCounterBuffers gl_MaxVertexAtomicCounters gl_MaxVertexAttribs gl_MaxVertexImageUniforms gl_MaxVertexOutputComponents gl_MaxVertexOutputVectors gl_MaxVertexTextureImageUnits gl_MaxVertexUniformComponents gl_MaxVertexUniformVectors gl_MaxViewports gl_MinProgramTexelOffset gl_BackColor gl_BackLightModelProduct gl_BackLightProduct gl_BackMaterial gl_BackSecondaryColor gl_ClipDistance gl_ClipPlane gl_ClipVertex gl_Color gl_DepthRange gl_EyePlaneQ gl_EyePlaneR gl_EyePlaneS gl_EyePlaneT gl_Fog gl_FogCoord gl_FogFragCoord gl_FragColor gl_FragCoord gl_FragData gl_FragDepth gl_FrontColor gl_FrontFacing gl_FrontLightModelProduct gl_FrontLightProduct gl_FrontMaterial gl_FrontSecondaryColor gl_GlobalInvocationID gl_InstanceID gl_InvocationID gl_Layer gl_LightModel gl_LightSource gl_LocalInvocationID gl_LocalInvocationIndex gl_ModelViewMatrix gl_ModelViewMatrixInverse gl_ModelViewMatrixInverseTranspose gl_ModelViewMatrixTranspose gl_ModelViewProjectionMatrix gl_ModelViewProjectionMatrixInverse gl_ModelViewProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixTranspose gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_Normal gl_NormalMatrix gl_NormalScale gl_NumSamples gl_NumWorkGroups gl_ObjectPlaneQ gl_ObjectPlaneR gl_ObjectPlaneS gl_ObjectPlaneT gl_PatchVerticesIn gl_Point gl_PointCoord gl_PointSize gl_Position gl_PrimitiveID gl_PrimitiveIDIn gl_ProjectionMatrix gl_ProjectionMatrixInverse gl_ProjectionMatrixInverseTranspose gl_ProjectionMatrixTranspose gl_SampleID gl_SampleMask gl_SampleMaskIn gl_SamplePosition gl_SecondaryColor gl_TessCoord gl_TessLevelInner gl_TessLevelOuter gl_TexCoord gl_TextureEnvColor gl_TextureMatrix gl_TextureMatrixInverse gl_TextureMatrixInverseTranspose gl_TextureMatrixTranspose gl_Vertex gl_VertexID gl_ViewportIndex gl_WorkGroupID gl_WorkGroupSize gl_in gl_out EmitStreamVertex EmitVertex EndPrimitive EndStreamPrimitive abs acos acosh all any asin asinh atan atanh atomicAdd atomicAnd atomicCompSwap atomicCounter atomicCounterDecrement atomicCounterIncrement atomicExchange atomicMax atomicMin atomicOr atomicXor barrier bitCount bitfieldExtract bitfieldInsert bitfieldReverse ceil clamp cos cosh cross dFdx dFdy degrees determinant distance dot equal exp exp2 faceforward findLSB findMSB floatBitsToInt floatBitsToUint floor fma fract frexp ftransform fwidth greaterThan greaterThanEqual groupMemoryBarrier imageAtomicAdd imageAtomicAnd imageAtomicCompSwap imageAtomicExchange imageAtomicMax imageAtomicMin imageAtomicOr imageAtomicXor imageLoad imageSize imageStore imulExtended intBitsToFloat interpolateAtCentroid interpolateAtOffset interpolateAtSample inverse inversesqrt isinf isnan ldexp length lessThan lessThanEqual log log2 matrixCompMult max memoryBarrier memoryBarrierAtomicCounter memoryBarrierBuffer memoryBarrierImage memoryBarrierShared min mix mod modf noise1 noise2 noise3 noise4 normalize not notEqual outerProduct packDouble2x32 packHalf2x16 packSnorm2x16 packSnorm4x8 packUnorm2x16 packUnorm4x8 pow radians reflect refract round roundEven shadow1D shadow1DLod shadow1DProj shadow1DProjLod shadow2D shadow2DLod shadow2DProj shadow2DProjLod sign sin sinh smoothstep sqrt step tan tanh texelFetch texelFetchOffset texture texture1D texture1DLod texture1DProj texture1DProjLod texture2D texture2DLod texture2DProj texture2DProjLod texture3D texture3DLod texture3DProj texture3DProjLod textureCube textureCubeLod textureGather textureGatherOffset textureGatherOffsets textureGrad textureGradOffset textureLod textureLodOffset textureOffset textureProj textureProjGrad textureProjGradOffset textureProjLod textureProjLodOffset textureProjOffset textureQueryLevels textureQueryLod textureSize transpose trunc uaddCarry uintBitsToFloat umulExtended unpackDouble2x32 unpackHalf2x16 unpackSnorm2x16 unpackSnorm4x8 unpackUnorm2x16 unpackUnorm4x8 usubBorrow`,literal:`true false`},illegal:`"`,contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.C_NUMBER_MODE,{className:`meta`,begin:`#`,end:`$`}]}}var sh=`[A-Za-z$_][0-9A-Za-z$_]*`,ch=`as.in.of.if.for.while.finally.var.new.function.do.return.void.else.break.catch.instanceof.with.throw.case.default.try.switch.continue.typeof.delete.let.yield.const.class.debugger.async.await.static.import.from.export.extends.using`.split(`.`),lh=[`true`,`false`,`null`,`undefined`,`NaN`,`Infinity`],uh=`Object.Function.Boolean.Symbol.Math.Date.Number.BigInt.String.RegExp.Array.Float32Array.Float64Array.Int8Array.Uint8Array.Uint8ClampedArray.Int16Array.Int32Array.Uint16Array.Uint32Array.BigInt64Array.BigUint64Array.Set.Map.WeakSet.WeakMap.ArrayBuffer.SharedArrayBuffer.Atomics.DataView.JSON.Promise.Generator.GeneratorFunction.AsyncFunction.Reflect.Proxy.Intl.WebAssembly`.split(`.`),dh=[`Error`,`EvalError`,`InternalError`,`RangeError`,`ReferenceError`,`SyntaxError`,`TypeError`,`URIError`],fh=[`setInterval`,`setTimeout`,`clearInterval`,`clearTimeout`,`require`,`exports`,`eval`,`isFinite`,`isNaN`,`parseFloat`,`parseInt`,`decodeURI`,`decodeURIComponent`,`encodeURI`,`encodeURIComponent`,`escape`,`unescape`],ph=[`arguments`,`this`,`super`,`console`,`window`,`document`,`localStorage`,`sessionStorage`,`module`,`self`,`global`],mh=[].concat(fh,uh,dh);function hh(e){let t=e.regex,n=(e,{after:t})=>{let n=`</`+e[0].slice(1);return e.input.indexOf(n,t)!==-1},r=sh,i={begin:`<>`,end:`</>`},a=/<[A-Za-z0-9\\._:-]+\s*\/>/,o={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,t)=>{let r=e[0].length+e.index,i=e.input[r];if(i===`<`||i===`,`){t.ignoreMatch();return}i===`>`&&(n(e,{after:r})||t.ignoreMatch());let a,o=e.input.substring(r);((a=o.match(/^\s*=/))||(a=o.match(/^\s+extends\s+/))&&a.index===0)&&t.ignoreMatch()}},s={$pattern:sh,keyword:ch,literal:lh,built_in:mh,"variable.language":ph},c=`[0-9](_?[0-9])*`,l=`\\.(${c})`,u=`0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`,d={className:`number`,variants:[{begin:`(\\b(${u})((${l})|\\.)?|(${l}))[eE][+-]?(${c})\\b`},{begin:`\\b(${u})\\b((${l})\\b|\\.)?|(${l})\\b`},{begin:`\\b(0|[1-9](_?[0-9])*)n\\b`},{begin:`\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b`},{begin:`\\b0[bB][0-1](_?[0-1])*n?\\b`},{begin:`\\b0[oO][0-7](_?[0-7])*n?\\b`},{begin:`\\b0[0-7]+n?\\b`}],relevance:0},f={className:`subst`,begin:`\\$\\{`,end:`\\}`,keywords:s,contains:[]},p={begin:".?html`",end:``,starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:`xml`}},m={begin:".?css`",end:``,starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:`css`}},h={begin:".?gql`",end:``,starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:`graphql`}},g={className:`string`,begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,f]},_={className:`comment`,variants:[e.COMMENT(/\/\*\*(?!\/)/,`\\*/`,{relevance:0,contains:[{begin:`(?=@[A-Za-z]+)`,relevance:0,contains:[{className:`doctag`,begin:`@[A-Za-z]+`},{className:`type`,begin:`\\{`,end:`\\}`,excludeEnd:!0,excludeBegin:!0,relevance:0},{className:`variable`,begin:r+`(?=\\s*(-)|$)`,endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},v=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,p,m,h,g,{match:/\$\d+/},d];f.contains=v.concat({begin:/\{/,end:/\}/,keywords:s,contains:[`self`].concat(v)});let y=[].concat(_,f.contains),b=y.concat([{begin:/(\s*)\(/,end:/\)/,keywords:s,contains:[`self`].concat(y)}]),x={className:`params`,begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:b},S={variants:[{match:[/class/,/\s+/,r,/\s+/,/extends/,/\s+/,t.concat(r,`(`,t.concat(/\./,r),`)*`)],scope:{1:`keyword`,3:`title.class`,5:`keyword`,7:`title.class.inherited`}},{match:[/class/,/\s+/,r],scope:{1:`keyword`,3:`title.class`}}]},C={relevance:0,match:t.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:`title.class`,keywords:{_:[...uh,...dh]}},w={label:`use_strict`,className:`meta`,relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},T={variants:[{match:[/function/,/\s+/,r,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:`keyword`,3:`title.function`},label:`func.def`,contains:[x],illegal:/%/},E={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:`variable.constant`};function D(e){return t.concat(`(?!`,e.join(`|`),`)`)}let O={match:t.concat(/\b/,D([...fh,`super`,`import`,`await`].map(e=>`${e}\\s*\\(`)),r,t.lookahead(/\s*\(/)),className:`title.function`,relevance:0},k={begin:t.concat(/\./,t.lookahead(t.concat(r,/(?![0-9A-Za-z$_(])/))),end:r,excludeBegin:!0,keywords:`prototype`,className:`property`,relevance:0},A={match:[/get|set/,/\s+/,r,/(?=\()/],className:{1:`keyword`,3:`title.function`},contains:[{begin:/\(\)/},x]},j=`(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|`+e.UNDERSCORE_IDENT_RE+`)\\s*=>`,M={match:[/const|var|let/,/\s+/,r,/\s*/,/=\s*/,/(async\s*)?/,t.lookahead(j)],keywords:`async`,className:{1:`keyword`,3:`title.function`},contains:[x]};return{name:`JavaScript`,aliases:[`js`,`jsx`,`mjs`,`cjs`],keywords:s,exports:{PARAMS_CONTAINS:b,CLASS_REFERENCE:C},illegal:/#(?![$_A-Za-z])/,contains:[e.SHEBANG({label:`shebang`,binary:`node`,relevance:5}),w,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,p,m,h,g,_,{match:/\$\d+/},d,C,{scope:`attr`,match:r+t.lookahead(`:`),relevance:0},M,{begin:`(`+e.RE_STARTERS_RE+`|\\b(case|return|throw)\\b)\\s*`,keywords:`return throw case`,relevance:0,contains:[_,e.REGEXP_MODE,{className:`function`,begin:j,returnBegin:!0,end:`\\s*=>`,contains:[{className:`params`,variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:b}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:i.begin,end:i.end},{match:a},{begin:o.begin,"on:begin":o.isTrulyOpeningTag,end:o.end}],subLanguage:`xml`,contains:[{begin:o.begin,end:o.end,skip:!0,contains:[`self`]}]}]},T,{beginKeywords:`while if switch catch for`},{begin:`\\b(?!function)`+e.UNDERSCORE_IDENT_RE+`\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{`,returnBegin:!0,label:`func.def`,contains:[x,e.inherit(e.TITLE_MODE,{begin:r,className:`title.function`})]},{match:/\.\.\./,relevance:0},k,{match:`\\$`+r,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:`title.function`},contains:[x]},O,E,S,A,{match:/\$[(.]/}]}}function gh(e){let t=e.regex,n=hh(e),r=sh,i=[`any`,`void`,`number`,`boolean`,`string`,`object`,`never`,`symbol`,`bigint`,`unknown`],a={begin:[/namespace/,/\s+/,e.IDENT_RE],beginScope:{1:`keyword`,3:`title.class`}},o={beginKeywords:`interface`,end:/\{/,excludeEnd:!0,keywords:{keyword:`interface extends`,built_in:i},contains:[n.exports.CLASS_REFERENCE]},s={className:`meta`,relevance:10,begin:/^\s*['"]use strict['"]/},c={$pattern:sh,keyword:ch.concat([`type`,`interface`,`public`,`private`,`protected`,`implements`,`declare`,`abstract`,`readonly`,`enum`,`override`,`satisfies`]),literal:lh,built_in:mh.concat(i),"variable.language":ph},l={className:`meta`,begin:`@`+r},u=(e,t,n)=>{let r=e.contains.findIndex(e=>e.label===t);if(r===-1)throw Error(`can not find mode to replace`);e.contains.splice(r,1,n)};Object.assign(n.keywords,c),n.exports.PARAMS_CONTAINS.push(l);let d=n.contains.find(e=>e.scope===`attr`),f=Object.assign({},d,{match:t.concat(r,t.lookahead(/\s*\?:/))});n.exports.PARAMS_CONTAINS.push([n.exports.CLASS_REFERENCE,d,f]),n.contains=n.contains.concat([l,a,o,f]),u(n,`shebang`,e.SHEBANG()),u(n,`use_strict`,s);let p=n.contains.find(e=>e.label===`func.def`);return p.relevance=0,Object.assign(n,{name:`TypeScript`,aliases:[`ts`,`tsx`,`mts`,`cts`]}),n}var _h=`[A-Za-z$_][0-9A-Za-z$_]*`,vh=`as.in.of.if.for.while.finally.var.new.function.do.return.void.else.break.catch.instanceof.with.throw.case.default.try.switch.continue.typeof.delete.let.yield.const.class.debugger.async.await.static.import.from.export.extends.using`.split(`.`),yh=[`true`,`false`,`null`,`undefined`,`NaN`,`Infinity`],bh=`Object.Function.Boolean.Symbol.Math.Date.Number.BigInt.String.RegExp.Array.Float32Array.Float64Array.Int8Array.Uint8Array.Uint8ClampedArray.Int16Array.Int32Array.Uint16Array.Uint32Array.BigInt64Array.BigUint64Array.Set.Map.WeakSet.WeakMap.ArrayBuffer.SharedArrayBuffer.Atomics.DataView.JSON.Promise.Generator.GeneratorFunction.AsyncFunction.Reflect.Proxy.Intl.WebAssembly`.split(`.`),xh=[`Error`,`EvalError`,`InternalError`,`RangeError`,`ReferenceError`,`SyntaxError`,`TypeError`,`URIError`],Sh=[`setInterval`,`setTimeout`,`clearInterval`,`clearTimeout`,`require`,`exports`,`eval`,`isFinite`,`isNaN`,`parseFloat`,`parseInt`,`decodeURI`,`decodeURIComponent`,`encodeURI`,`encodeURIComponent`,`escape`,`unescape`],Ch=[`arguments`,`this`,`super`,`console`,`window`,`document`,`localStorage`,`sessionStorage`,`module`,`self`,`global`],wh=[].concat(Sh,bh,xh);function Th(e){let t=e.regex,n=(e,{after:t})=>{let n=`</`+e[0].slice(1);return e.input.indexOf(n,t)!==-1},r=_h,i={begin:`<>`,end:`</>`},a=/<[A-Za-z0-9\\._:-]+\s*\/>/,o={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,t)=>{let r=e[0].length+e.index,i=e.input[r];if(i===`<`||i===`,`){t.ignoreMatch();return}i===`>`&&(n(e,{after:r})||t.ignoreMatch());let a,o=e.input.substring(r);((a=o.match(/^\s*=/))||(a=o.match(/^\s+extends\s+/))&&a.index===0)&&t.ignoreMatch()}},s={$pattern:_h,keyword:vh,literal:yh,built_in:wh,"variable.language":Ch},c=`[0-9](_?[0-9])*`,l=`\\.(${c})`,u=`0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`,d={className:`number`,variants:[{begin:`(\\b(${u})((${l})|\\.)?|(${l}))[eE][+-]?(${c})\\b`},{begin:`\\b(${u})\\b((${l})\\b|\\.)?|(${l})\\b`},{begin:`\\b(0|[1-9](_?[0-9])*)n\\b`},{begin:`\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b`},{begin:`\\b0[bB][0-1](_?[0-1])*n?\\b`},{begin:`\\b0[oO][0-7](_?[0-7])*n?\\b`},{begin:`\\b0[0-7]+n?\\b`}],relevance:0},f={className:`subst`,begin:`\\$\\{`,end:`\\}`,keywords:s,contains:[]},p={begin:".?html`",end:``,starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:`xml`}},m={begin:".?css`",end:``,starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:`css`}},h={begin:".?gql`",end:``,starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:`graphql`}},g={className:`string`,begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,f]},_={className:`comment`,variants:[e.COMMENT(/\/\*\*(?!\/)/,`\\*/`,{relevance:0,contains:[{begin:`(?=@[A-Za-z]+)`,relevance:0,contains:[{className:`doctag`,begin:`@[A-Za-z]+`},{className:`type`,begin:`\\{`,end:`\\}`,excludeEnd:!0,excludeBegin:!0,relevance:0},{className:`variable`,begin:r+`(?=\\s*(-)|$)`,endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},v=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,p,m,h,g,{match:/\$\d+/},d];f.contains=v.concat({begin:/\{/,end:/\}/,keywords:s,contains:[`self`].concat(v)});let y=[].concat(_,f.contains),b=y.concat([{begin:/(\s*)\(/,end:/\)/,keywords:s,contains:[`self`].concat(y)}]),x={className:`params`,begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:b},S={variants:[{match:[/class/,/\s+/,r,/\s+/,/extends/,/\s+/,t.concat(r,`(`,t.concat(/\./,r),`)*`)],scope:{1:`keyword`,3:`title.class`,5:`keyword`,7:`title.class.inherited`}},{match:[/class/,/\s+/,r],scope:{1:`keyword`,3:`title.class`}}]},C={relevance:0,match:t.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:`title.class`,keywords:{_:[...bh,...xh]}},w={label:`use_strict`,className:`meta`,relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},T={variants:[{match:[/function/,/\s+/,r,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:`keyword`,3:`title.function`},label:`func.def`,contains:[x],illegal:/%/},E={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:`variable.constant`};function D(e){return t.concat(`(?!`,e.join(`|`),`)`)}let O={match:t.concat(/\b/,D([...Sh,`super`,`import`,`await`].map(e=>`${e}\\s*\\(`)),r,t.lookahead(/\s*\(/)),className:`title.function`,relevance:0},k={begin:t.concat(/\./,t.lookahead(t.concat(r,/(?![0-9A-Za-z$_(])/))),end:r,excludeBegin:!0,keywords:`prototype`,className:`property`,relevance:0},A={match:[/get|set/,/\s+/,r,/(?=\()/],className:{1:`keyword`,3:`title.function`},contains:[{begin:/\(\)/},x]},j=`(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|`+e.UNDERSCORE_IDENT_RE+`)\\s*=>`,M={match:[/const|var|let/,/\s+/,r,/\s*/,/=\s*/,/(async\s*)?/,t.lookahead(j)],keywords:`async`,className:{1:`keyword`,3:`title.function`},contains:[x]};return{name:`JavaScript`,aliases:[`js`,`jsx`,`mjs`,`cjs`],keywords:s,exports:{PARAMS_CONTAINS:b,CLASS_REFERENCE:C},illegal:/#(?![$_A-Za-z])/,contains:[e.SHEBANG({label:`shebang`,binary:`node`,relevance:5}),w,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,p,m,h,g,_,{match:/\$\d+/},d,C,{scope:`attr`,match:r+t.lookahead(`:`),relevance:0},M,{begin:`(`+e.RE_STARTERS_RE+`|\\b(case|return|throw)\\b)\\s*`,keywords:`return throw case`,relevance:0,contains:[_,e.REGEXP_MODE,{className:`function`,begin:j,returnBegin:!0,end:`\\s*=>`,contains:[{className:`params`,variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:b}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:i.begin,end:i.end},{match:a},{begin:o.begin,"on:begin":o.isTrulyOpeningTag,end:o.end}],subLanguage:`xml`,contains:[{begin:o.begin,end:o.end,skip:!0,contains:[`self`]}]}]},T,{beginKeywords:`while if switch catch for`},{begin:`\\b(?!function)`+e.UNDERSCORE_IDENT_RE+`\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{`,returnBegin:!0,label:`func.def`,contains:[x,e.inherit(e.TITLE_MODE,{begin:r,className:`title.function`})]},{match:/\.\.\./,relevance:0},k,{match:`\\$`+r,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:`title.function`},contains:[x]},O,E,S,A,{match:/\$[(.]/}]}}function Eh(e){let t=e.regex,n={begin:/<\/?[A-Za-z_]/,end:`>`,subLanguage:`xml`,relevance:0},r={match:/^ {0,3}([-*_])[ \t]*(?:\1[ \t]*){2,}$/},i={className:`code`,variants:[{begin:"(`{3,})[^`](.|\\n)*?\\1`*[ ]*"},{begin:`(~{3,})[^~](.|\\n)*?\\1~*[ ]*`},{begin:"```",end:"```+[ ]*$"},{begin:`~~~`,end:`~~~+[ ]*$`},{begin:"`.+?`"},{begin:`(?=^( {4}|\\t))`,contains:[{begin:`^( {4}|\\t)`,end:`(\\n)$`}],relevance:0}]},a={className:`bullet`,begin:`^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)`,end:`\\s+`,excludeEnd:!0},o={begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{className:`symbol`,begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{className:`link`,begin:/:\s*/,end:/$/,excludeBegin:!0}]},s={variants:[{begin:/\[.+?\]\[.*?\]/,relevance:0},{begin:/\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,relevance:2},{begin:t.concat(/\[.+?\]\(/,/[A-Za-z][A-Za-z0-9+.-]*/,/:\/\/.*?\)/),relevance:2},{begin:/\[.+?\]\([./?&#].*?\)/,relevance:1},{begin:/\[.*?\]\(.*?\)/,relevance:0}],returnBegin:!0,contains:[{match:/\[(?=\])/},{className:`string`,relevance:0,begin:`\\[`,end:`\\]`,excludeBegin:!0,returnEnd:!0},{className:`link`,relevance:0,begin:`\\]\\(`,end:`\\)`,excludeBegin:!0,excludeEnd:!0},{className:`symbol`,relevance:0,begin:`\\]\\[`,end:`\\]`,excludeBegin:!0,excludeEnd:!0}]},c={className:`strong`,contains:[],variants:[{begin:/_{2}(?!\s)/,end:/_{2}/},{begin:/\*{2}(?!\s)/,end:/\*{2}/}]},l={className:`emphasis`,contains:[],variants:[{begin:/\*(?![*\s])/,end:/\*/},{begin:/_(?![_\s])/,end:/_/,relevance:0}]},u=e.inherit(c,{contains:[]}),d=e.inherit(l,{contains:[]});c.contains.push(d),l.contains.push(u);let f=[n,s];return[c,l,u,d].forEach(e=>{e.contains=e.contains.concat(f)}),f=f.concat(c,l),{name:`Markdown`,aliases:[`md`,`mkdown`,`mkd`],contains:[{className:`section`,variants:[{begin:`^#{1,6}`,end:`$`,contains:f},{begin:`(?=^.+?\\n[=-]{2,}$)`,contains:[{begin:`^[=-]*$`},{begin:`^`,end:`\\n`,contains:f}]}]},n,a,r,c,l,{className:`quote`,begin:`^>\\s+`,contains:f,end:`$`},i,s,o,{scope:`literal`,match:/&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/}]}}var Dh=8e3,Oh=`uniform float uTime;
uniform vec2 uResolution;
uniform vec3 uColor;
varying vec2 vUv;
varying vec3 vNormalW;

void main() {
  float bands = 0.5 + 0.5 * sin(uTime * 1.4 + vUv.y * 18.0);
  float fres = pow(1.0 - abs(dot(normalize(vNormalW), vec3(0.0, 0.0, 1.0))), 2.0);
  vec3 col = mix(uColor * 0.25, vec3(1.0), bands * fres);
  gl_FragColor = vec4(col, 1.0);
}
`,kh=`varying vec2 vUv;
varying vec3 vNormalW;
void main() {
  vUv = uv;
  vNormalW = mat3(modelMatrix) * normal;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;function Ah(e){let t=e.replace(/\r\n/g,`
`).trim();return t?t.length>8e3?{ok:!1,log:`着色器超过 ${Dh} 个字符。`}:t.includes(`\0`)?{ok:!1,log:`着色器含有非法空字符。`}:t.includes(`#version`)?{ok:!1,log:`不要写 #version，校验器会补上 WebGL2 头。`}:/void\s+main\s*\(/.test(t)?{ok:!0,vertex:kh,fragment:t}:{ok:!1,log:`片段着色器需要 void main()。`}:{ok:!1,log:`着色器是空的。`}}var jh=`#version 300 es
precision highp float;
#define attribute in
#define varying out
#define texture2D texture
uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat3 normalMatrix;
uniform vec3 cameraPosition;
in vec3 position;
in vec3 normal;
in vec2 uv;
`,Mh=`#version 300 es
precision highp float;
#define varying in
layout(location = 0) out vec4 pc_fragColor;
#define gl_FragColor pc_fragColor
#define texture2D texture
uniform vec3 cameraPosition;
`;function Nh(e,t,n){let r=(t,n)=>{let r=e.createShader(t);if(!r)return{shader:null,log:`无法创建着色器对象。`,ok:!1};e.shaderSource(r,n),e.compileShader(r);let i=e.getShaderParameter(r,e.COMPILE_STATUS);return{shader:r,log:e.getShaderInfoLog(r)??``,ok:i}},i=r(e.VERTEX_SHADER,jh+t),a=r(e.FRAGMENT_SHADER,Mh+n),o=``,s=!1;if(i.shader&&a.shader&&i.ok&&a.ok){let t=e.createProgram();t&&(e.attachShader(t,i.shader),e.attachShader(t,a.shader),e.linkProgram(t),s=e.getProgramParameter(t,e.LINK_STATUS),o=e.getProgramInfoLog(t)??``,e.deleteProgram(t))}i.shader&&e.deleteShader(i.shader),a.shader&&e.deleteShader(a.shader);let c=i.ok&&a.ok&&s;return{ok:c,log:[i.log&&`顶点着色器:\n${i.log}`,a.log&&`片段着色器:\n${a.log}`,o&&`链接:\n${o}`,c?`编译并链接成功。这段着色器只在本地 GPU 上运行，没有上传。`:`编译失败。场景没有被替换。`].filter(Boolean).join(`

`),vertex:t,fragment:n}}var Ph={class:`source`,"aria-label":`源码`},Fh={key:0,class:`empty`},Ih={class:`file-tabs`,role:`tablist`,"aria-label":`源码文件`},Lh=[`aria-selected`,`onClick`],Rh={class:`source-actions`},zh={"aria-live":`polite`},Bh={key:0,class:`code`},Vh=[`innerHTML`],Hh={class:`lab`},Uh={class:`source-actions`},Wh={class:`log`},Gh=Fi({__name:`SourcePanel`,setup(e){ah.registerLanguage(`glsl`,oh),ah.registerLanguage(`typescript`,gh),ah.registerLanguage(`javascript`,Th),ah.registerLanguage(`markdown`,Eh);let t=Mr(null),n=Mr(``),r=Mr(0),i=Mr(``),a=Mr(Oh),o=Mr(`还没有编译。着色器只在这台浏览器里跑，不会上传。`),s=Cs(()=>t.value?.sources??[]),c=Cs(()=>s.value[r.value]??null),l=Cs(()=>{let e=c.value;if(!e)return``;let t=e.language===`javascript`?`javascript`:e.language;return ah.highlight(e.contents,{language:t}).value});async function u(e){n.value=``;try{t.value=await nd(e).load(),r.value=0}catch(e){n.value=e instanceof Error?e.message:`源码加载失败`}}wi(()=>$.effectId,e=>void u(e),{immediate:!0});async function d(){let e=c.value;if(e){try{await navigator.clipboard.writeText(e.contents),i.value=`已复制`}catch{i.value=`复制失败，请手动选择文本`}window.setTimeout(()=>{i.value=``},1600)}}function f(){let e=c.value;if(!e)return;let t=new Blob([e.contents],{type:`text/plain;charset=utf-8`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=e.filename,r.click(),URL.revokeObjectURL(n)}function p(e){let t=window.__XUANLAN_STAGE__;if(!t){o.value=`渲染器还没准备好。`;return}let n=e?t.showUserShader(a.value):t.compileUserShader(a.value);o.value=n.log}async function m(){await window.__XUANLAN_STAGE__?.leaveShaderLab(),o.value=`已回到当前效果。`}let h={implementation:`实现`,shader:`着色器`,compiled:`拼接后`,shared:`共享`,notes:`说明`,upstream:`上游`};return(e,t)=>(No(),Ro(`section`,Ph,[n.value?(No(),Ro(`p`,Fh,nn(n.value),1)):(No(),Ro(Do,{key:1},[X(`div`,Ih,[(No(!0),Ro(Do,null,ua(s.value,(e,t)=>(No(),Ro(`button`,{key:e.filename+e.role,type:`button`,role:`tab`,"aria-selected":r.value===t,class:qt({on:r.value===t}),onClick:e=>r.value=t},[X(`small`,null,nn(h[e.role]),1),Jo(` `+nn(e.filename),1)],10,Lh))),128))]),X(`div`,Rh,[X(`button`,{type:`button`,onClick:d},`复制`),X(`button`,{type:`button`,onClick:f},`下载`),X(`span`,zh,nn(i.value),1)]),c.value?(No(),Ro(`pre`,Bh,[X(`code`,{innerHTML:l.value},null,8,Vh)])):Yo(``,!0),X(`section`,Hh,[t[3]||=X(`h3`,null,`本地着色器校验`,-1),t[4]||=X(`p`,null,`只编译你粘贴的片段着色器。不会执行 JavaScript，也不会上传。通过后可以暂时替换成一个预览球。`,-1),vi(X(`textarea`,{"onUpdate:modelValue":t[0]||=e=>a.value=e,spellcheck:`false`,"aria-label":`片段着色器`},null,512),[[yc,a.value]]),X(`div`,Uh,[X(`button`,{type:`button`,onClick:t[1]||=e=>p(!1)},`编译`),X(`button`,{type:`button`,onClick:t[2]||=e=>p(!0)},`编译并预览`),X(`button`,{type:`button`,onClick:m},`回到效果`)]),X(`pre`,Wh,nn(o.value),1)])],64))]))}}),Kh={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},qh=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Jh=new ge(-1,1,1,-1,0,1),Yh=new class extends Se{constructor(){super(),this.setAttribute(`position`,new l([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new l([0,2,0,0,2,0],2))}},Xh=class{constructor(e){this._mesh=new be(Yh,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Jh)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Zh=class extends qh{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof _e?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ye.clone(e.uniforms),this.material=new _e({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Xh(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Qh=class extends qh{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},$h=class extends qh{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},eg=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new E);this._width=n.width,this._height=n.height,t=new S(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:L}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Zh(Kh),this.copyPass.material.blending=0,this.timer=new Ce}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Qh!==void 0&&(r instanceof Qh?n=!0:r instanceof $h&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new E);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},tg={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},ng=class extends qh{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ye.clone(tg.uniforms),this.material=new A({name:tg.name,uniforms:this.uniforms,vertexShader:tg.vertexShader,fragmentShader:tg.fragmentShader}),this._fsQuad=new Xh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},de.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},rg=class extends qh{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Je}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},ig={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Je(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},ag=class e extends qh{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new E(256,256):new E(e.x,e.y),this.clearColor=new Je(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new S(i,a,{type:L,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new S(i,a,{type:L,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new S(i,a,{type:L,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=ig;this.highPassUniforms=Ye.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new _e({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new E(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ye.clone(Kh.uniforms),this.blendMaterial=new _e({uniforms:this.copyUniforms,vertexShader:Kh.vertexShader,fragmentShader:Kh.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Je,this._oldClearAlpha=1,this._basic=new We,this._fsQuad=new Xh(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new E(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new _e({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new E(.5,.5)},direction:{value:new E(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new _e({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};ag.BlurDirectionX=new E(1,0),ag.BlurDirectionY=new E(0,1);function og(e,t,n,r){return e===`low`||e===`auto`&&(r||t<800||n>0&&n<=4)?{choice:e,resolved:`low`,dprCap:1,particles:.42,bloom:e!==`low`,segments:.62,water:160}:e===`high`?{choice:e,resolved:`high`,dprCap:1.75,particles:1,bloom:!0,segments:1,water:384}:{choice:e,resolved:`medium`,dprCap:1.35,particles:.72,bloom:!0,segments:.85,water:256}}function sg(e,t,n=8){return Math.max(n,Math.round(e*t.particles))}var cg=class{geometries=new Set;materials=new Set;textures=new Set;targets=new Set;roots=new Set;listeners=[];extra=[];track(e){return this.roots.add(e),e.traverse(e=>{let t=e;t.geometry&&this.geometries.add(t.geometry);let n=t.material;if(Array.isArray(n))for(let e of n)this.materials.add(e);else n&&this.materials.add(n)}),e}texture(e){return this.textures.add(e),e}target(e){return this.targets.add(e),e}listen(e,t,n){e.addEventListener(t,n),this.listeners.push({target:e,type:t,fn:n})}add(e){this.extra.push(e)}dispose(){for(let e of this.extra)e();for(let e of this.roots)e.removeFromParent();for(let e of this.geometries)e.dispose();for(let e of this.materials)e.dispose();for(let e of this.textures)e.dispose();for(let e of this.targets)e.dispose();for(let e of this.listeners)e.target.removeEventListener(e.type,e.fn);this.extra=[],this.roots.clear(),this.geometries.clear(),this.materials.clear(),this.textures.clear(),this.targets.clear(),this.listeners=[]}},lg={name:`VignetteGrain`,uniforms:{tDiffuse:{value:null},uGrain:{value:.012},uTime:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uGrain;
    uniform float uTime;
    varying vec2 vUv;
    void main() {
      vec3 color = texture2D(tDiffuse, vUv).rgb;
      float dist = distance(vUv, vec2(0.5));
      color *= mix(0.78, 1.0, smoothstep(0.95, 0.28, dist));
      float grain = fract(sin(dot(vUv * vec2(192.0, 91.0) + uTime, vec2(12.9898, 78.233))) * 43758.5453);
      color += (grain - 0.5) * uGrain;
      gl_FragColor = vec4(color, 1.0);
    }
  `},ug=class{host;renderer=null;composer=null;bloom=null;vignette=null;scene=new H;camera=new je(42,1,.08,220);sprite=He();disposer=new cg;effect=null;module=null;quality=null;raf=0;running=!1;playing=!0;time=0;last=0;fpsSamples=[];errors=[];ready=!1;loading=!1;token=0;sandbox=!1;visible=!0;contextLost=!1;observer=null;onContextLost;onContextRestored;onVisibility;constructor(e){this.host=e,this.onContextLost=e=>{e.preventDefault(),this.contextLost=!0,this.errors=[`WebGL 上下文已丢失。浏览器可能会在片刻后恢复。`],this.emit()},this.onContextRestored=()=>{this.contextLost=!1,this.errors=[],this.reload()},this.onVisibility=()=>{document.visibilityState===`hidden`?this.stopLoop():this.startLoop()}}mount(){let e=this.host.canvas,t=null;try{t=e.getContext(`webgl2`,{alpha:!1,antialias:!1,powerPreference:`high-performance`,preserveDrawingBuffer:!0,stencil:!1})}catch{t=null}if(!t){this.errors=[`这个环境没有可用的 WebGL2。实时效果无法启动。`],this.emit();return}let n=new pm({canvas:e,context:t,alpha:!1,antialias:!1,powerPreference:`high-performance`,preserveDrawingBuffer:!0});n.outputColorSpace=he,n.toneMapping=4,n.toneMappingExposure=1.05,n.setClearColor(new Je(`#05060c`),1),n.debug.checkShaderErrors=!0,n.debug.onShaderError=(e,t,n,r)=>{let i=[e.getShaderInfoLog(n)??``,e.getShaderInfoLog(r)??``].filter(Boolean).join(`
`)||`着色器编译失败。`;this.errors=[i],this.emit()};let r=new eg(n,new S(1,1,{type:L}));r.addPass(new rg(this.scene,this.camera));let i=new ag(new E(1,1),.5,.4,.82);r.addPass(i);let a=new Zh(lg);r.addPass(a),r.addPass(new ng),this.renderer=n,this.composer=r,this.bloom=i,this.vignette=a,e.addEventListener(`webglcontextlost`,this.onContextLost),e.addEventListener(`webglcontextrestored`,this.onContextRestored),document.addEventListener(`visibilitychange`,this.onVisibility),this.observer=new IntersectionObserver(e=>{this.visible=e.some(e=>e.isIntersecting),this.visible&&this.playing?this.startLoop():this.visible||this.stopLoop()}),this.observer.observe(e),this.resize(),this.reload(),this.installDebug()}resize(){let e=this.renderer,t=this.composer;if(!e||!t)return;let n=this.host.canvas,r=Math.max(1,n.clientWidth),i=Math.max(1,n.clientHeight),a=Math.min(window.devicePixelRatio||1,this.quality?.dprCap??1);e.setPixelRatio(a),e.setSize(r,i,!1),t.setPixelRatio(a),t.setSize(r,i),this.camera.aspect=r/Math.max(1,i),this.camera.updateProjectionMatrix(),this.playing||this.renderFrame(0)}async reload(){if(!this.renderer||this.contextLost)return;let e=++this.token,t=nd(this.host.getEffectId());this.loading=!0,this.ready=!1,this.errors=[],this.sandbox=!1,this.emit(),this.disposeEffect();let n;try{n=await t.load()}catch(t){if(e!==this.token)return;this.loading=!1,this.errors=[t instanceof Error?t.message:`效果模块加载失败。`],this.emit();return}if(e===this.token&&this.renderer){this.quality=this.currentQuality(),this.resize();try{let e=n.createEffect({scene:this.scene,camera:this.camera,renderer:this.renderer,quality:this.quality,reducedMotion:this.host.getReducedMotion(),sprite:this.sprite,disposer:this.disposer});e.apply(this.host.getValues()),this.effect=e,this.module=n;let t=this.host.getSeek();this.time=t??n.meta.posterTime,this.applyBloom()}catch(e){this.disposeEffect(),this.errors=[e instanceof Error?e.message:`效果初始化失败。`]}this.loading=!1,this.ready=this.effect!==null,this.fpsSamples=[],this.emit(),this.renderFrame(0),this.playing=this.host.getPlaying(),this.playing&&this.startLoop()}}applyParams(){this.effect?.apply(this.host.getValues()),this.applyBloom(),this.playing||this.renderFrame(0)}setPlaying(e){this.playing=e,e?this.startLoop():this.stopLoop()}seek(e){this.time=Math.max(0,e),this.renderFrame(0)}replay(){this.time=0,this.playing=!0,this.startLoop(),this.renderFrame(0)}compileUserShader(e){let t=this.renderer;if(!t)return{ok:!1,log:`渲染器还没有就绪。`};let n=Ah(e);if(!n.ok)return n;let r=Nh(t.getContext(),n.vertex,n.fragment);return{ok:r.ok,log:r.log}}showUserShader(e){let t=this.compileUserShader(e);if(!t.ok||!this.renderer)return t;let n=Ah(e);if(!n.ok)return n;this.disposeEffect(),this.sandbox=!0;let r={uTime:{value:0},uResolution:{value:new E(this.host.canvas.clientWidth,this.host.canvas.clientHeight)},uColor:{value:new Je(`#8ef6ff`)}},i=new _e({uniforms:r,vertexShader:n.vertex,fragmentShader:n.fragment,toneMapped:!1}),a=new be(new Re(1.15,96,64),i);return this.scene.add(a),this.disposer.track(a),this.camera.position.set(0,0,3.4),this.camera.lookAt(0,0,0),this.camera.fov=40,this.camera.updateProjectionMatrix(),this.effect={bloom:{strength:.35,radius:.35,threshold:.72},update:e=>{r.uTime.value=e,a.rotation.y=e*.25},apply:()=>void 0,dispose:()=>void 0},this.applyBloom(),this.ready=!0,this.errors=[],this.renderFrame(0),this.startLoop(),t}async leaveShaderLab(){this.sandbox&&await this.reload()}sample(){let e=this.renderer?.domElement;if(!e)return{max:0,avg:0};let t=document.createElement(`canvas`);t.width=32,t.height=18;let n=t.getContext(`2d`,{willReadFrequently:!0});if(!n)return{max:0,avg:0};n.drawImage(e,0,0,32,18);let r=n.getImageData(0,0,32,18).data,i=0,a=0,o=r.length/4;for(let e=0;e<r.length;e+=4){let t=(r[e]??0)+(r[e+1]??0)+(r[e+2]??0);i=Math.max(i,t),a+=t}return{max:i,avg:a/o}}snapshot(){return{effectId:this.sandbox?`shader-lab`:this.module?.meta.id??null,ready:this.ready,loading:this.loading,errors:[...this.errors],fps:this.fpsSamples.length>=12?dg(this.fpsSamples):null,quality:this.quality}}dispose(){this.stopLoop(),this.disposeEffect(),this.observer?.disconnect(),document.removeEventListener(`visibilitychange`,this.onVisibility),this.host.canvas.removeEventListener(`webglcontextlost`,this.onContextLost),this.host.canvas.removeEventListener(`webglcontextrestored`,this.onContextRestored),this.composer?.dispose(),this.bloom?.dispose(),this.vignette?.dispose(),this.sprite.dispose(),this.renderer?.dispose(),this.renderer=null}currentQuality(){let e=window.matchMedia(`(pointer: coarse)`).matches,t=navigator.hardwareConcurrency||0;return og(this.host.getQuality(),this.host.canvas.clientWidth,t,e)}disposeEffect(){this.effect?.dispose(),this.effect=null,this.disposer.dispose(),this.disposer=new cg,this.scene.clear(),this.scene.background=new Je(`#05060c`)}applyBloom(){let e=this.bloom,t=this.effect;if(!e||!t)return;let n=this.quality?.bloom??!0;e.enabled=n,e.strength=n?t.bloom.strength:0,e.radius=t.bloom.radius,e.threshold=t.bloom.threshold;let r=this.vignette?.uniforms.uGrain;r&&(r.value=this.quality?.resolved===`low`?0:.01)}startLoop(){if(this.running||!this.renderer||!this.visible||document.visibilityState===`hidden`)return;this.running=!0,this.last=performance.now();let e=t=>{if(!this.running)return;let n=Math.min(.05,(t-this.last)/1e3);if(this.last=t,this.playing&&this.visible&&document.visibilityState!==`hidden`){let e=this.host.getReducedMotion()?.28:1;this.time+=n*e,this.renderFrame(n),this.noteFps(n)}this.raf=requestAnimationFrame(e)};this.raf=requestAnimationFrame(e)}stopLoop(){this.running=!1,cancelAnimationFrame(this.raf)}renderFrame(e){if(!this.composer||!this.effect||this.contextLost)return;let t=this.vignette?.uniforms.uTime;t&&(t.value=this.time);try{this.effect.update(this.time,e,this.host.getReducedMotion()),this.composer.render(e)}catch(e){this.errors=[e instanceof Error?e.message:`渲染中断。`],this.emit(),this.stopLoop()}}noteFps(e){e<=0||(this.fpsSamples.push(1/e),this.fpsSamples.length>36&&this.fpsSamples.shift(),(this.fpsSamples.length===12||this.fpsSamples.length===36)&&this.emit())}emit(){this.host.onSnapshot(this.snapshot())}installDebug(){window.__XUANLAN__={get effectId(){return window.__XUANLAN_STAGE__?.snapshot().effectId??null},get ready(){return window.__XUANLAN_STAGE__?.snapshot().ready??!1},get errors(){return window.__XUANLAN_STAGE__?.snapshot().errors??[]},get fps(){return window.__XUANLAN_STAGE__?.snapshot().fps??null},sample:()=>this.sample()},window.__XUANLAN_STAGE__=this}};function dg(e){return e.reduce((e,t)=>e+t,0)/e.length}var fg=[`data-ready`,`data-effect`],pg=[`aria-label`],mg={key:0,class:`stage-note`},hg={key:1,class:`stage-error`,role:`alert`},gg=Fi({__name:`StageView`,setup(e,{expose:t}){let n=Mr(null),r=Mr(null),i=null,a=null;Xi(()=>{let e=n.value;e&&(i=new ug({canvas:e,getEffectId:()=>$.effectId,getValues:()=>$.values,getQuality:()=>$.quality,getPlaying:()=>$.playing,getReducedMotion:()=>$.reduceMotion??$.systemReduce,getSeek:()=>$.time,onSnapshot:e=>{$.ready=e.ready,$.loading=e.loading,$.fps=e.fps,$.error=e.errors[0]??null}}),i.mount(),a=new ResizeObserver(()=>i?.resize()),a.observe(e))}),$i(()=>{a?.disconnect(),i?.dispose(),i=null}),wi(()=>$.effectId,()=>void i?.reload()),wi(()=>$.quality,()=>void i?.reload()),wi(()=>[$.values,$.reduceMotion],()=>i?.applyParams(),{deep:!0}),wi(()=>$.playing,e=>i?.setPlaying(e)),wi(()=>$.seekToken,()=>{$.time!==null&&i?.seek($.time)});let o=()=>`${xm().name}。${xm().description}`;async function s(){let e=r.value;e&&(document.fullscreenElement?await document.exitFullscreen():await e.requestFullscreen())}return t({fullscreen:s}),(e,t)=>(No(),Ro(`div`,{ref_key:`frame`,ref:r,class:`stage-frame`,"data-ready":Y($).ready,"data-effect":Y($).effectId},[X(`canvas`,{ref_key:`canvas`,ref:n,"aria-label":o(),role:`img`},null,8,pg),Y($).loading?(No(),Ro(`p`,mg,`正在装入着色器…`)):Yo(``,!0),Y($).error?(No(),Ro(`p`,hg,nn(Y($).error),1)):Yo(``,!0)],8,fg))}}),_g={class:`topbar`},vg={class:`now`},yg={class:`tools`},bg={class:`segmented`,role:`group`,"aria-label":`画质`},xg=[`aria-pressed`,`onClick`],Sg=[`aria-pressed`],Cg=[`aria-pressed`],wg=[`aria-pressed`],Tg={class:`status`,"aria-live":`polite`},Eg={class:`workspace`},Dg={class:`side-tabs`,role:`tablist`},Og={class:`mobile-nav`,"aria-label":`手机分区`},kg=[`open`],Ag={method:`dialog`},jg=[`href`],Mg=Fi({__name:`StudioPage`,setup(e){let t=Jc(),n=qc(),r=Mr(``),i=Mr(`all`),a=Mr(``),o=!1,s=[{id:`auto`,label:`自动`},{id:`low`,label:`低`},{id:`high`,label:`高`}];function c(){let e={};for(let[n,r]of Object.entries(t.query))Array.isArray(r)?e[n]=r.filter(e=>typeof e==`string`):typeof r==`string`&&(e[n]=r);return e}function l(){let e=c();Mm(e)||(o=!0,jm(e),o=!1)}wi(()=>t.fullPath,()=>l()),wi(()=>[$.effectId,$.presetId,$.quality,$.playing,$.reduceMotion,$.time,JSON.stringify($.values)],()=>{if(o)return;let e=Am();Mm(c())||n.replace({query:e})}),Xi(()=>{window.addEventListener(`keydown`,u),l()}),$i(()=>window.removeEventListener(`keydown`,u));function u(e){let t=e.target,n=t?[`INPUT`,`TEXTAREA`,`SELECT`].includes(t.tagName):!1;if(e.key===`Escape`)$.cinema=!1,$.helpOpen=!1,document.fullscreenElement&&document.exitFullscreen();else if(!n){if(e.key===`ArrowRight`)Nm(1),e.preventDefault();else if(e.key===`ArrowLeft`)Nm(-1),e.preventDefault();else if(e.key===` `)Dm(),e.preventDefault();else if(e.key===`r`||e.key===`R`)Om();else if(e.key===`f`||e.key===`F`)d();else if(e.key===`c`||e.key===`C`)$.cinema=!$.cinema;else if(e.key===`/`)e.preventDefault(),document.getElementById(`effect-search`)?.focus();else if(e.key===`1`||e.key===`2`||e.key===`3`){let t=xm().presets[Number(e.key)-1];t&&wm(t.id)}}}async function d(){let e=document.querySelector(`.stage-frame`);e instanceof HTMLElement&&(document.fullscreenElement?await document.exitFullscreen():await e.requestFullscreen())}async function f(){try{await navigator.clipboard.writeText(window.location.href),a.value=`链接已复制`}catch{a.value=`无法复制链接`}window.setTimeout(()=>{a.value=``},1600)}function p(){$.reduceMotion=!Sm()}return(e,t)=>(No(),Ro(`div`,{class:qt([`app`,{cinema:Y($).cinema,[`pane-`+Y($).mobilePane]:!0}])},[t[17]||=X(`a`,{class:`skip`,href:`#stage`},`跳到预览`,-1),X(`header`,_g,[t[13]||=X(`div`,{class:`brand`},[X(`span`,{class:`mark`},`折光社`),X(`span`,{class:`latin`},`ZHEGUANG`)],-1),X(`div`,vg,[X(`strong`,null,nn(Y(xm)().name),1),X(`span`,null,nn(Y(xm)().summary),1)]),X(`div`,yg,[X(`div`,bg,[(No(),Ro(Do,null,ua(s,e=>X(`button`,{key:e.id,type:`button`,class:qt({on:Y($).quality===e.id}),"aria-pressed":Y($).quality===e.id,onClick:t=>Y(Em)(e.id)},nn(e.label),11,xg)),64))]),X(`button`,{type:`button`,onClick:t[0]||=(...e)=>Y(Dm)&&Y(Dm)(...e)},nn(Y($).playing?`暂停`:`播放`),1),X(`button`,{type:`button`,onClick:t[1]||=(...e)=>Y(Om)&&Y(Om)(...e)},`重放`),X(`button`,{type:`button`,"aria-pressed":Y($).cinema,onClick:t[2]||=e=>Y($).cinema=!Y($).cinema},`影院`,8,Sg),X(`button`,{type:`button`,onClick:d},`全屏`),X(`button`,{type:`button`,"aria-pressed":Y(Sm)(),onClick:p},nn(Y(Sm)()?`动效已减弱`:`减弱动效`),9,Cg),X(`button`,{type:`button`,onClick:f},`分享`),X(`button`,{type:`button`,class:`fps`,"aria-pressed":Y($).showFps,onClick:t[3]||=e=>Y($).showFps=!Y($).showFps},nn(Y($).showFps?Y($).fps===null?`实测 —`:`实测 ${Math.round(Y($).fps)}`:`帧率关`),9,wg),X(`button`,{type:`button`,onClick:t[4]||=e=>Y($).helpOpen=!0},`按键`)])]),X(`p`,Tg,nn(a.value),1),X(`main`,Eg,[Wo(Wm,{query:r.value,"onUpdate:query":t[5]||=e=>r.value=e,category:i.value,"onUpdate:category":t[6]||=e=>i.value=e},null,8,[`query`,`category`]),X(`section`,{id:`stage`,class:qt([`stage-wrap`,{dim:Y($).mobilePane!==`stage`}])},[Wo(gg)],2),X(`aside`,{class:qt([`side`,{dim:Y($).mobilePane===`stage`&&!1}])},[X(`div`,Dg,[X(`button`,{type:`button`,class:qt({on:Y($).sideTab===`controls`}),onClick:t[7]||=e=>Y($).sideTab=`controls`},`调控`,2),X(`button`,{type:`button`,class:qt({on:Y($).sideTab===`source`}),onClick:t[8]||=e=>Y($).sideTab=`source`},`源码`,2)]),vi(Wo(ih,null,null,512),[[Rs,Y($).sideTab===`controls`]]),Y($).sideTab===`source`?(No(),zo(Gh,{key:0})):Yo(``,!0)],2)]),X(`nav`,Og,[X(`button`,{type:`button`,class:qt({on:Y($).mobilePane===`gallery`}),onClick:t[9]||=e=>Y($).mobilePane=`gallery`},`图库`,2),X(`button`,{type:`button`,class:qt({on:Y($).mobilePane===`stage`}),onClick:t[10]||=e=>{Y($).mobilePane=`stage`,Y($).sideTab=`controls`}},`预览`,2),X(`button`,{type:`button`,class:qt({on:Y($).mobilePane===`source`}),onClick:t[11]||=e=>{Y($).mobilePane=`source`,Y($).sideTab=`source`}},`源码`,2)]),X(`dialog`,{open:Y($).helpOpen,class:`help`,"aria-labelledby":`help-title`},[X(`form`,Ag,[t[14]||=X(`h2`,{id:`help-title`},`键盘`,-1),t[15]||=X(`ul`,null,[X(`li`,null,`左右方向键切换效果`),X(`li`,null,`空格暂停或播放`),X(`li`,null,`R 重放，F 全屏，C 影院`),X(`li`,null,`/ 聚焦搜索，1 到 3 选预设`),X(`li`,null,`Esc 退出影院、帮助和全屏`)],-1),t[16]||=X(`p`,null,`实测帧率来自最近约三十帧的采样，只说明此刻，不是性能承诺。`,-1),X(`p`,null,[X(`a`,{href:`${Y(`/vfx-studio/`)}THIRD_PARTY_NOTICES.md`},`第三方声明`,8,jg)]),X(`button`,{type:`button`,onClick:t[12]||=e=>Y($).helpOpen=!1},`关闭`)])],8,kg)],2))}}),Ng=Nu({history:tu(`/vfx-studio/`),routes:[{path:`/`,name:`studio`,component:Mg}]});Cc(kc).use(Ng).mount(`#app`);export{Gu as a,Hu as c,zu as d,Ru as f,Ku as i,Vu as l,Iu as m,Q as n,Wu as o,Lu as p,qu as r,Uu as s,sg as t,Bu as u};