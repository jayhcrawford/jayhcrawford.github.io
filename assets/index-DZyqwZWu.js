(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Lh={exports:{}},Zo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h0;function FS(){if(h0)return Zo;h0=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:a,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Zo.Fragment=e,Zo.jsx=i,Zo.jsxs=i,Zo}var d0;function HS(){return d0||(d0=1,Lh.exports=FS()),Lh.exports}var b=HS(),Oh={exports:{}},rt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p0;function GS(){if(p0)return rt;p0=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function E(P){return P===null||typeof P!="object"?null:(P=x&&P[x]||P["@@iterator"],typeof P=="function"?P:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,S={};function _(P,ne,Se){this.props=P,this.context=ne,this.refs=S,this.updater=Se||M}_.prototype.isReactComponent={},_.prototype.setState=function(P,ne){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,ne,"setState")},_.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function L(){}L.prototype=_.prototype;function U(P,ne,Se){this.props=P,this.context=ne,this.refs=S,this.updater=Se||M}var D=U.prototype=new L;D.constructor=U,T(D,_.prototype),D.isPureReactComponent=!0;var k=Array.isArray;function H(){}var B={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function N(P,ne,Se){var Z=Se.ref;return{$$typeof:a,type:P,key:ne,ref:Z!==void 0?Z:null,props:Se}}function C(P,ne){return N(P.type,ne,P.props)}function V(P){return typeof P=="object"&&P!==null&&P.$$typeof===a}function ue(P){var ne={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(Se){return ne[Se]})}var re=/\/+/g;function _e(P,ne){return typeof P=="object"&&P!==null&&P.key!=null?ue(""+P.key):ne.toString(36)}function pe(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(H,H):(P.status="pending",P.then(function(ne){P.status==="pending"&&(P.status="fulfilled",P.value=ne)},function(ne){P.status==="pending"&&(P.status="rejected",P.reason=ne)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function z(P,ne,Se,Z,de){var Me=typeof P;(Me==="undefined"||Me==="boolean")&&(P=null);var ye=!1;if(P===null)ye=!0;else switch(Me){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(P.$$typeof){case a:case e:ye=!0;break;case v:return ye=P._init,z(ye(P._payload),ne,Se,Z,de)}}if(ye)return de=de(P),ye=Z===""?"."+_e(P,0):Z,k(de)?(Se="",ye!=null&&(Se=ye.replace(re,"$&/")+"/"),z(de,ne,Se,"",function(Ke){return Ke})):de!=null&&(V(de)&&(de=C(de,Se+(de.key==null||P&&P.key===de.key?"":(""+de.key).replace(re,"$&/")+"/")+ye)),ne.push(de)),1;ye=0;var ze=Z===""?".":Z+":";if(k(P))for(var Ye=0;Ye<P.length;Ye++)Z=P[Ye],Me=ze+_e(Z,Ye),ye+=z(Z,ne,Se,Me,de);else if(Ye=E(P),typeof Ye=="function")for(P=Ye.call(P),Ye=0;!(Z=P.next()).done;)Z=Z.value,Me=ze+_e(Z,Ye++),ye+=z(Z,ne,Se,Me,de);else if(Me==="object"){if(typeof P.then=="function")return z(pe(P),ne,Se,Z,de);throw ne=String(P),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return ye}function Q(P,ne,Se){if(P==null)return P;var Z=[],de=0;return z(P,Z,"","",function(Me){return ne.call(Se,Me,de++)}),Z}function K(P){if(P._status===-1){var ne=P._result;ne=ne(),ne.then(function(Se){(P._status===0||P._status===-1)&&(P._status=1,P._result=Se)},function(Se){(P._status===0||P._status===-1)&&(P._status=2,P._result=Se)}),P._status===-1&&(P._status=0,P._result=ne)}if(P._status===1)return P._result.default;throw P._result}var Ee=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},Ae={map:Q,forEach:function(P,ne,Se){Q(P,function(){ne.apply(this,arguments)},Se)},count:function(P){var ne=0;return Q(P,function(){ne++}),ne},toArray:function(P){return Q(P,function(ne){return ne})||[]},only:function(P){if(!V(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return rt.Activity=g,rt.Children=Ae,rt.Component=_,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=U,rt.StrictMode=s,rt.Suspense=p,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,rt.__COMPILER_RUNTIME={__proto__:null,c:function(P){return B.H.useMemoCache(P)}},rt.cache=function(P){return function(){return P.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(P,ne,Se){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Z=T({},P.props),de=P.key;if(ne!=null)for(Me in ne.key!==void 0&&(de=""+ne.key),ne)!Y.call(ne,Me)||Me==="key"||Me==="__self"||Me==="__source"||Me==="ref"&&ne.ref===void 0||(Z[Me]=ne[Me]);var Me=arguments.length-2;if(Me===1)Z.children=Se;else if(1<Me){for(var ye=Array(Me),ze=0;ze<Me;ze++)ye[ze]=arguments[ze+2];Z.children=ye}return N(P.type,de,Z)},rt.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},rt.createElement=function(P,ne,Se){var Z,de={},Me=null;if(ne!=null)for(Z in ne.key!==void 0&&(Me=""+ne.key),ne)Y.call(ne,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(de[Z]=ne[Z]);var ye=arguments.length-2;if(ye===1)de.children=Se;else if(1<ye){for(var ze=Array(ye),Ye=0;Ye<ye;Ye++)ze[Ye]=arguments[Ye+2];de.children=ze}if(P&&P.defaultProps)for(Z in ye=P.defaultProps,ye)de[Z]===void 0&&(de[Z]=ye[Z]);return N(P,Me,de)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(P){return{$$typeof:d,render:P}},rt.isValidElement=V,rt.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:K}},rt.memo=function(P,ne){return{$$typeof:m,type:P,compare:ne===void 0?null:ne}},rt.startTransition=function(P){var ne=B.T,Se={};B.T=Se;try{var Z=P(),de=B.S;de!==null&&de(Se,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(H,Ee)}catch(Me){Ee(Me)}finally{ne!==null&&Se.types!==null&&(ne.types=Se.types),B.T=ne}},rt.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},rt.use=function(P){return B.H.use(P)},rt.useActionState=function(P,ne,Se){return B.H.useActionState(P,ne,Se)},rt.useCallback=function(P,ne){return B.H.useCallback(P,ne)},rt.useContext=function(P){return B.H.useContext(P)},rt.useDebugValue=function(){},rt.useDeferredValue=function(P,ne){return B.H.useDeferredValue(P,ne)},rt.useEffect=function(P,ne){return B.H.useEffect(P,ne)},rt.useEffectEvent=function(P){return B.H.useEffectEvent(P)},rt.useId=function(){return B.H.useId()},rt.useImperativeHandle=function(P,ne,Se){return B.H.useImperativeHandle(P,ne,Se)},rt.useInsertionEffect=function(P,ne){return B.H.useInsertionEffect(P,ne)},rt.useLayoutEffect=function(P,ne){return B.H.useLayoutEffect(P,ne)},rt.useMemo=function(P,ne){return B.H.useMemo(P,ne)},rt.useOptimistic=function(P,ne){return B.H.useOptimistic(P,ne)},rt.useReducer=function(P,ne,Se){return B.H.useReducer(P,ne,Se)},rt.useRef=function(P){return B.H.useRef(P)},rt.useState=function(P){return B.H.useState(P)},rt.useSyncExternalStore=function(P,ne,Se){return B.H.useSyncExternalStore(P,ne,Se)},rt.useTransition=function(){return B.H.useTransition()},rt.version="19.2.5",rt}var m0;function up(){return m0||(m0=1,Oh.exports=GS()),Oh.exports}var le=up(),Ph={exports:{}},Ko={},Bh={exports:{}},zh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g0;function VS(){return g0||(g0=1,(function(a){function e(z,Q){var K=z.length;z.push(Q);e:for(;0<K;){var Ee=K-1>>>1,Ae=z[Ee];if(0<l(Ae,Q))z[Ee]=Q,z[K]=Ae,K=Ee;else break e}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var Q=z[0],K=z.pop();if(K!==Q){z[0]=K;e:for(var Ee=0,Ae=z.length,P=Ae>>>1;Ee<P;){var ne=2*(Ee+1)-1,Se=z[ne],Z=ne+1,de=z[Z];if(0>l(Se,K))Z<Ae&&0>l(de,Se)?(z[Ee]=de,z[Z]=K,Ee=Z):(z[Ee]=Se,z[ne]=K,Ee=ne);else if(Z<Ae&&0>l(de,K))z[Ee]=de,z[Z]=K,Ee=Z;else break e}}return Q}function l(z,Q){var K=z.sortIndex-Q.sortIndex;return K!==0?K:z.id-Q.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();a.unstable_now=function(){return f.now()-d}}var p=[],m=[],v=1,g=null,x=3,E=!1,M=!1,T=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function D(z){for(var Q=i(m);Q!==null;){if(Q.callback===null)s(m);else if(Q.startTime<=z)s(m),Q.sortIndex=Q.expirationTime,e(p,Q);else break;Q=i(m)}}function k(z){if(T=!1,D(z),!M)if(i(p)!==null)M=!0,H||(H=!0,ue());else{var Q=i(m);Q!==null&&pe(k,Q.startTime-z)}}var H=!1,B=-1,Y=5,N=-1;function C(){return S?!0:!(a.unstable_now()-N<Y)}function V(){if(S=!1,H){var z=a.unstable_now();N=z;var Q=!0;try{e:{M=!1,T&&(T=!1,L(B),B=-1),E=!0;var K=x;try{t:{for(D(z),g=i(p);g!==null&&!(g.expirationTime>z&&C());){var Ee=g.callback;if(typeof Ee=="function"){g.callback=null,x=g.priorityLevel;var Ae=Ee(g.expirationTime<=z);if(z=a.unstable_now(),typeof Ae=="function"){g.callback=Ae,D(z),Q=!0;break t}g===i(p)&&s(p),D(z)}else s(p);g=i(p)}if(g!==null)Q=!0;else{var P=i(m);P!==null&&pe(k,P.startTime-z),Q=!1}}break e}finally{g=null,x=K,E=!1}Q=void 0}}finally{Q?ue():H=!1}}}var ue;if(typeof U=="function")ue=function(){U(V)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,_e=re.port2;re.port1.onmessage=V,ue=function(){_e.postMessage(null)}}else ue=function(){_(V,0)};function pe(z,Q){B=_(function(){z(a.unstable_now())},Q)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(z){z.callback=null},a.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<z?Math.floor(1e3/z):5},a.unstable_getCurrentPriorityLevel=function(){return x},a.unstable_next=function(z){switch(x){case 1:case 2:case 3:var Q=3;break;default:Q=x}var K=x;x=Q;try{return z()}finally{x=K}},a.unstable_requestPaint=function(){S=!0},a.unstable_runWithPriority=function(z,Q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var K=x;x=z;try{return Q()}finally{x=K}},a.unstable_scheduleCallback=function(z,Q,K){var Ee=a.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?Ee+K:Ee):K=Ee,z){case 1:var Ae=-1;break;case 2:Ae=250;break;case 5:Ae=1073741823;break;case 4:Ae=1e4;break;default:Ae=5e3}return Ae=K+Ae,z={id:v++,callback:Q,priorityLevel:z,startTime:K,expirationTime:Ae,sortIndex:-1},K>Ee?(z.sortIndex=K,e(m,z),i(p)===null&&z===i(m)&&(T?(L(B),B=-1):T=!0,pe(k,K-Ee))):(z.sortIndex=Ae,e(p,z),M||E||(M=!0,H||(H=!0,ue()))),z},a.unstable_shouldYield=C,a.unstable_wrapCallback=function(z){var Q=x;return function(){var K=x;x=Q;try{return z.apply(this,arguments)}finally{x=K}}}})(zh)),zh}var v0;function kS(){return v0||(v0=1,Bh.exports=VS()),Bh.exports}var Ih={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _0;function jS(){if(_0)return Ln;_0=1;var a=up();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)m+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:p,containerInfo:m,implementation:v}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ln.createPortal=function(p,m){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return c(p,m,null,v)},Ln.flushSync=function(p){var m=f.T,v=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=m,s.p=v,s.d.f()}},Ln.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},Ln.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Ln.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var v=m.as,g=d(v,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,E=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;v==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:E}):v==="script"&&s.d.X(p,{crossOrigin:g,integrity:x,fetchPriority:E,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Ln.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var v=d(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},Ln.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var v=m.as,g=d(v,m.crossOrigin);s.d.L(p,v,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Ln.preloadModule=function(p,m){if(typeof p=="string")if(m){var v=d(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},Ln.requestFormReset=function(p){s.d.r(p)},Ln.unstable_batchedUpdates=function(p,m){return p(m)},Ln.useFormState=function(p,m,v){return f.H.useFormState(p,m,v)},Ln.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ln.version="19.2.5",Ln}var x0;function XS(){if(x0)return Ih.exports;x0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Ih.exports=jS(),Ih.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y0;function WS(){if(y0)return Ko;y0=1;var a=kS(),e=up(),i=XS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,r=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(r=n.return),t=n.return;while(t)}return n.tag===3?r:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(s(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var r=t,o=n;;){var u=r.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){r=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===r)return p(u),t;if(h===o)return p(u),n;h=h.sibling}throw Error(s(188))}if(r.return!==o.return)r=u,o=h;else{for(var y=!1,A=u.child;A;){if(A===r){y=!0,r=u,o=h;break}if(A===o){y=!0,o=u,r=h;break}A=A.sibling}if(!y){for(A=h.child;A;){if(A===r){y=!0,r=h,o=u;break}if(A===o){y=!0,o=h,r=u;break}A=A.sibling}if(!y)throw Error(s(189))}}if(r.alternate!==o)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),U=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function ue(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var re=Symbol.for("react.client.reference");function _e(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===re?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case _:return"Profiler";case S:return"StrictMode";case k:return"Suspense";case H:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case U:return t.displayName||"Context";case L:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:_e(t.type)||"Memo";case Y:n=t._payload,t=t._init;try{return _e(t(n))}catch{}}return null}var pe=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},Ee=[],Ae=-1;function P(t){return{current:t}}function ne(t){0>Ae||(t.current=Ee[Ae],Ee[Ae]=null,Ae--)}function Se(t,n){Ae++,Ee[Ae]=t.current,t.current=n}var Z=P(null),de=P(null),Me=P(null),ye=P(null);function ze(t,n){switch(Se(Me,n),Se(de,t),Se(Z,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Pv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Pv(n),t=Bv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ne(Z),Se(Z,t)}function Ye(){ne(Z),ne(de),ne(Me)}function Ke(t){t.memoizedState!==null&&Se(ye,t);var n=Z.current,r=Bv(n,t.type);n!==r&&(Se(de,t),Se(Z,r))}function Wt(t){de.current===t&&(ne(Z),ne(de)),ye.current===t&&(ne(ye),Xo._currentValue=K)}var jt,ht;function F(t){if(jt===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);jt=n&&n[1]||"",ht=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+jt+t+ht}var Un=!1;function dt(t,n){if(!t||Un)return"";Un=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ve=function(){throw Error()};if(Object.defineProperty(ve.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ve,[])}catch(se){var ee=se}Reflect.construct(t,[],ve)}else{try{ve.call()}catch(se){ee=se}t.call(ve.prototype)}}else{try{throw Error()}catch(se){ee=se}(ve=t())&&typeof ve.catch=="function"&&ve.catch(function(){})}}catch(se){if(se&&ee&&typeof se.stack=="string")return[se.stack,ee.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),y=h[0],A=h[1];if(y&&A){var I=y.split(`
`),$=A.split(`
`);for(u=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(o===I.length||u===$.length)for(o=I.length-1,u=$.length-1;1<=o&&0<=u&&I[o]!==$[u];)u--;for(;1<=o&&0<=u;o--,u--)if(I[o]!==$[u]){if(o!==1||u!==1)do if(o--,u--,0>u||I[o]!==$[u]){var fe=`
`+I[o].replace(" at new "," at ");return t.displayName&&fe.includes("<anonymous>")&&(fe=fe.replace("<anonymous>",t.displayName)),fe}while(1<=o&&0<=u);break}}}finally{Un=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?F(r):""}function gt(t,n){switch(t.tag){case 26:case 27:case 5:return F(t.type);case 16:return F("Lazy");case 13:return t.child!==n&&n!==null?F("Suspense Fallback"):F("Suspense");case 19:return F("SuspenseList");case 0:case 15:return dt(t.type,!1);case 11:return dt(t.type.render,!1);case 1:return dt(t.type,!0);case 31:return F("Activity");default:return""}}function je(t){try{var n="",r=null;do n+=gt(t,r),r=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Lt=Object.prototype.hasOwnProperty,ke=a.unstable_scheduleCallback,O=a.unstable_cancelCallback,w=a.unstable_shouldYield,te=a.unstable_requestPaint,he=a.unstable_now,be=a.unstable_getCurrentPriorityLevel,ge=a.unstable_ImmediatePriority,Ge=a.unstable_UserBlockingPriority,Ce=a.unstable_NormalPriority,Qe=a.unstable_LowPriority,$e=a.unstable_IdlePriority,we=a.log,Ie=a.unstable_setDisableYieldValue,Ze=null,Ve=null;function Pe(t){if(typeof we=="function"&&Ie(t),Ve&&typeof Ve.setStrictMode=="function")try{Ve.setStrictMode(Ze,t)}catch{}}var tt=Math.clz32?Math.clz32:X,st=Math.log,It=Math.LN2;function X(t){return t>>>=0,t===0?32:31-(st(t)/It|0)|0}var De=256,ce=262144,xe=4194304;function Re(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ue(t,n,r){var o=t.pendingLanes;if(o===0)return 0;var u=0,h=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var A=o&134217727;return A!==0?(o=A&~h,o!==0?u=Re(o):(y&=A,y!==0?u=Re(y):r||(r=A&~t,r!==0&&(u=Re(r))))):(A=o&~h,A!==0?u=Re(A):y!==0?u=Re(y):r||(r=o&~t,r!==0&&(u=Re(r)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,r=n&-n,h>=r||h===32&&(r&4194048)!==0)?n:u}function nt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Kt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dn(){var t=xe;return xe<<=1,(xe&62914560)===0&&(xe=4194304),t}function Tt(t){for(var n=[],r=0;31>r;r++)n.push(t);return n}function En(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ti(t,n,r,o,u,h){var y=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var A=t.entanglements,I=t.expirationTimes,$=t.hiddenUpdates;for(r=y&~r;0<r;){var fe=31-tt(r),ve=1<<fe;A[fe]=0,I[fe]=-1;var ee=$[fe];if(ee!==null)for($[fe]=null,fe=0;fe<ee.length;fe++){var se=ee[fe];se!==null&&(se.lane&=-536870913)}r&=~ve}o!==0&&no(t,o,0),h!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=h&~(y&~n))}function no(t,n,r){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-tt(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|r&261930}function io(t,n){var r=t.entangledLanes|=n;for(t=t.entanglements;r;){var o=31-tt(r),u=1<<o;u&n|t[o]&n&&(t[o]|=n),r&=~u}}function Fi(t,n){var r=n&-n;return r=(r&42)!==0?1:hr(r),(r&(t.suspendedLanes|n))!==0?0:r}function hr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Yr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ao(){var t=Q.p;return t!==0?t:(t=window.event,t===void 0?32:r0(t.type))}function dr(t,n){var r=Q.p;try{return Q.p=t,n()}finally{Q.p=r}}var Ai=Math.random().toString(36).slice(2),en="__reactFiber$"+Ai,bn="__reactProps$"+Ai,ea="__reactContainer$"+Ai,ro="__reactEvents$"+Ai,Au="__reactListeners$"+Ai,wu="__reactHandles$"+Ai,El="__reactResources$"+Ai,pr="__reactMarker$"+Ai;function so(t){delete t[en],delete t[bn],delete t[ro],delete t[Au],delete t[wu]}function R(t){var n=t[en];if(n)return n;for(var r=t.parentNode;r;){if(n=r[ea]||r[en]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(t=kv(t);t!==null;){if(r=t[en])return r;t=kv(t)}return n}t=r,r=t.parentNode}return null}function W(t){if(t=t[en]||t[ea]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ie(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function ae(t){var n=t[El];return n||(n=t[El]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function j(t){t[pr]=!0}var Te=new Set,Ne={};function Oe(t,n){Be(t,n),Be(t+"Capture",n)}function Be(t,n){for(Ne[t]=n,t=0;t<n.length;t++)Te.add(n[t])}var it=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),et={},Xe={};function yt(t){return Lt.call(Xe,t)?!0:Lt.call(et,t)?!1:it.test(t)?Xe[t]=!0:(et[t]=!0,!1)}function St(t,n,r){if(yt(n))if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+r)}}function qt(t,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+r)}}function At(t,n,r,o){if(o===null)t.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(n,r,""+o)}}function at(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qe(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function pn(t,n,r){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){r=""+y,h.call(this,y)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return r},setValue:function(y){r=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Mt(t){if(!t._valueTracker){var n=qe(t)?"checked":"value";t._valueTracker=pn(t,n,""+t[n])}}function jn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var r=n.getValue(),o="";return t&&(o=qe(t)?t.checked?"true":"false":t.value),t=o,t!==r?(n.setValue(t),!0):!1}function wi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Fn=/[\n"\\]/g;function _n(t){return t.replace(Fn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ft(t,n,r,o,u,h,y,A){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+at(n)):t.value!==""+at(n)&&(t.value=""+at(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?Nn(t,y,at(n)):r!=null?Nn(t,y,at(r)):o!=null&&t.removeAttribute("value"),u==null&&h!=null&&(t.defaultChecked=!!h),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+at(A):t.removeAttribute("name")}function Hn(t,n,r,o,u,h,y,A){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||r!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Mt(t);return}r=r!=null?""+at(r):"",n=n!=null?""+at(n):r,A||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=A?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),Mt(t)}function Nn(t,n,r){n==="number"&&wi(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function tn(t,n,r,o){if(t=t.options,n){n={};for(var u=0;u<r.length;u++)n["$"+r[u]]=!0;for(r=0;r<t.length;r++)u=n.hasOwnProperty("$"+t[r].value),t[r].selected!==u&&(t[r].selected=u),u&&o&&(t[r].defaultSelected=!0)}else{for(r=""+at(r),n=null,u=0;u<t.length;u++){if(t[u].value===r){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Mn(t,n,r){if(n!=null&&(n=""+at(n),n!==t.value&&(t.value=n),r==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=r!=null?""+at(r):""}function Zr(t,n,r,o){if(n==null){if(o!=null){if(r!=null)throw Error(s(92));if(pe(o)){if(1<o.length)throw Error(s(93));o=o[0]}r=o}r==null&&(r=""),n=r}r=at(n),t.defaultValue=r,o=t.textContent,o===r&&o!==""&&o!==null&&(t.value=o),Mt(t)}function Xn(t,n){if(n){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=n;return}}t.textContent=n}var Ox=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Np(t,n,r){var o=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,r):typeof r!="number"||r===0||Ox.has(n)?n==="float"?t.cssFloat=r:t[n]=(""+r).trim():t[n]=r+"px"}function Lp(t,n,r){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&r[u]!==o&&Np(t,u,o)}else for(var h in n)n.hasOwnProperty(h)&&Np(t,h,n[h])}function Ru(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Px=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Bx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bl(t){return Bx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ta(){}var Cu=null;function Du(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Kr=null,Qr=null;function Op(t){var n=W(t);if(n&&(t=n.stateNode)){var r=t[bn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ft(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+_n(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var o=r[n];if(o!==t&&o.form===t.form){var u=o[bn]||null;if(!u)throw Error(s(90));Ft(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<r.length;n++)o=r[n],o.form===t.form&&jn(o)}break e;case"textarea":Mn(t,r.value,r.defaultValue);break e;case"select":n=r.value,n!=null&&tn(t,!!r.multiple,n,!1)}}}var Uu=!1;function Pp(t,n,r){if(Uu)return t(n,r);Uu=!0;try{var o=t(n);return o}finally{if(Uu=!1,(Kr!==null||Qr!==null)&&(uc(),Kr&&(n=Kr,t=Qr,Qr=Kr=null,Op(n),t)))for(n=0;n<t.length;n++)Op(t[n])}}function oo(t,n){var r=t.stateNode;if(r===null)return null;var o=r[bn]||null;if(o===null)return null;r=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(s(231,n,typeof r));return r}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nu=!1;if(na)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{Nu=!1}var Na=null,Lu=null,Ml=null;function Bp(){if(Ml)return Ml;var t,n=Lu,r=n.length,o,u="value"in Na?Na.value:Na.textContent,h=u.length;for(t=0;t<r&&n[t]===u[t];t++);var y=r-t;for(o=1;o<=y&&n[r-o]===u[h-o];o++);return Ml=u.slice(t,1<o?1-o:void 0)}function Tl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Al(){return!0}function zp(){return!1}function Wn(t){function n(r,o,u,h,y){this._reactName=r,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(r=t[A],this[A]=r?r(h):h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Al:zp,this.isPropagationStopped=zp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Al)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Al)},persist:function(){},isPersistent:Al}),n}var mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wl=Wn(mr),co=g({},mr,{view:0,detail:0}),zx=Wn(co),Ou,Pu,uo,Rl=g({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==uo&&(uo&&t.type==="mousemove"?(Ou=t.screenX-uo.screenX,Pu=t.screenY-uo.screenY):Pu=Ou=0,uo=t),Ou)},movementY:function(t){return"movementY"in t?t.movementY:Pu}}),Ip=Wn(Rl),Ix=g({},Rl,{dataTransfer:0}),Fx=Wn(Ix),Hx=g({},co,{relatedTarget:0}),Bu=Wn(Hx),Gx=g({},mr,{animationName:0,elapsedTime:0,pseudoElement:0}),Vx=Wn(Gx),kx=g({},mr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jx=Wn(kx),Xx=g({},mr,{data:0}),Fp=Wn(Xx),Wx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Yx[t])?!!n[t]:!1}function zu(){return Zx}var Kx=g({},co,{key:function(t){if(t.key){var n=Wx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?qx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zu,charCode:function(t){return t.type==="keypress"?Tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Qx=Wn(Kx),Jx=g({},Rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hp=Wn(Jx),$x=g({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zu}),ey=Wn($x),ty=g({},mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ny=Wn(ty),iy=g({},Rl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ay=Wn(iy),ry=g({},mr,{newState:0,oldState:0}),sy=Wn(ry),oy=[9,13,27,32],Iu=na&&"CompositionEvent"in window,fo=null;na&&"documentMode"in document&&(fo=document.documentMode);var ly=na&&"TextEvent"in window&&!fo,Gp=na&&(!Iu||fo&&8<fo&&11>=fo),Vp=" ",kp=!1;function jp(t,n){switch(t){case"keyup":return oy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jr=!1;function cy(t,n){switch(t){case"compositionend":return Xp(n);case"keypress":return n.which!==32?null:(kp=!0,Vp);case"textInput":return t=n.data,t===Vp&&kp?null:t;default:return null}}function uy(t,n){if(Jr)return t==="compositionend"||!Iu&&jp(t,n)?(t=Bp(),Ml=Lu=Na=null,Jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Gp&&n.locale!=="ko"?null:n.data;default:return null}}var fy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!fy[t.type]:n==="textarea"}function qp(t,n,r,o){Kr?Qr?Qr.push(o):Qr=[o]:Kr=o,n=vc(n,"onChange"),0<n.length&&(r=new wl("onChange","change",null,r,o),t.push({event:r,listeners:n}))}var ho=null,po=null;function hy(t){Cv(t,0)}function Cl(t){var n=ie(t);if(jn(n))return t}function Yp(t,n){if(t==="change")return n}var Zp=!1;if(na){var Fu;if(na){var Hu="oninput"in document;if(!Hu){var Kp=document.createElement("div");Kp.setAttribute("oninput","return;"),Hu=typeof Kp.oninput=="function"}Fu=Hu}else Fu=!1;Zp=Fu&&(!document.documentMode||9<document.documentMode)}function Qp(){ho&&(ho.detachEvent("onpropertychange",Jp),po=ho=null)}function Jp(t){if(t.propertyName==="value"&&Cl(po)){var n=[];qp(n,po,t,Du(t)),Pp(hy,n)}}function dy(t,n,r){t==="focusin"?(Qp(),ho=n,po=r,ho.attachEvent("onpropertychange",Jp)):t==="focusout"&&Qp()}function py(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cl(po)}function my(t,n){if(t==="click")return Cl(n)}function gy(t,n){if(t==="input"||t==="change")return Cl(n)}function vy(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ni=typeof Object.is=="function"?Object.is:vy;function mo(t,n){if(ni(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var r=Object.keys(t),o=Object.keys(n);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var u=r[o];if(!Lt.call(n,u)||!ni(t[u],n[u]))return!1}return!0}function $p(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function em(t,n){var r=$p(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=n&&o>=n)return{node:r,offset:n-t};t=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=$p(r)}}function tm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?tm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function nm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=wi(t.document);n instanceof t.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)t=n.contentWindow;else break;n=wi(t.document)}return n}function Gu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var _y=na&&"documentMode"in document&&11>=document.documentMode,$r=null,Vu=null,go=null,ku=!1;function im(t,n,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ku||$r==null||$r!==wi(o)||(o=$r,"selectionStart"in o&&Gu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),go&&mo(go,o)||(go=o,o=vc(Vu,"onSelect"),0<o.length&&(n=new wl("onSelect","select",null,n,r),t.push({event:n,listeners:o}),n.target=$r)))}function gr(t,n){var r={};return r[t.toLowerCase()]=n.toLowerCase(),r["Webkit"+t]="webkit"+n,r["Moz"+t]="moz"+n,r}var es={animationend:gr("Animation","AnimationEnd"),animationiteration:gr("Animation","AnimationIteration"),animationstart:gr("Animation","AnimationStart"),transitionrun:gr("Transition","TransitionRun"),transitionstart:gr("Transition","TransitionStart"),transitioncancel:gr("Transition","TransitionCancel"),transitionend:gr("Transition","TransitionEnd")},ju={},am={};na&&(am=document.createElement("div").style,"AnimationEvent"in window||(delete es.animationend.animation,delete es.animationiteration.animation,delete es.animationstart.animation),"TransitionEvent"in window||delete es.transitionend.transition);function vr(t){if(ju[t])return ju[t];if(!es[t])return t;var n=es[t],r;for(r in n)if(n.hasOwnProperty(r)&&r in am)return ju[t]=n[r];return t}var rm=vr("animationend"),sm=vr("animationiteration"),om=vr("animationstart"),xy=vr("transitionrun"),yy=vr("transitionstart"),Sy=vr("transitioncancel"),lm=vr("transitionend"),cm=new Map,Xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xu.push("scrollEnd");function Ri(t,n){cm.set(t,n),Oe(n,[t])}var Dl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},pi=[],ts=0,Wu=0;function Ul(){for(var t=ts,n=Wu=ts=0;n<t;){var r=pi[n];pi[n++]=null;var o=pi[n];pi[n++]=null;var u=pi[n];pi[n++]=null;var h=pi[n];if(pi[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}h!==0&&um(r,u,h)}}function Nl(t,n,r,o){pi[ts++]=t,pi[ts++]=n,pi[ts++]=r,pi[ts++]=o,Wu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function qu(t,n,r,o){return Nl(t,n,r,o),Ll(t)}function _r(t,n){return Nl(t,null,null,n),Ll(t)}function um(t,n,r){t.lanes|=r;var o=t.alternate;o!==null&&(o.lanes|=r);for(var u=!1,h=t.return;h!==null;)h.childLanes|=r,o=h.alternate,o!==null&&(o.childLanes|=r),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(u=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,u&&n!==null&&(u=31-tt(r),t=h.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=r|536870912),h):null}function Ll(t){if(50<Io)throw Io=0,ih=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ns={};function Ey(t,n,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(t,n,r,o){return new Ey(t,n,r,o)}function Yu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ia(t,n){var r=t.alternate;return r===null?(r=ii(t.tag,n,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=n,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,n=t.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function fm(t,n){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,n=r.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Ol(t,n,r,o,u,h){var y=0;if(o=t,typeof t=="function")Yu(t)&&(y=1);else if(typeof t=="string")y=wS(t,r,Z.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case N:return t=ii(31,r,n,u),t.elementType=N,t.lanes=h,t;case T:return xr(r.children,u,h,n);case S:y=8,u|=24;break;case _:return t=ii(12,r,n,u|2),t.elementType=_,t.lanes=h,t;case k:return t=ii(13,r,n,u),t.elementType=k,t.lanes=h,t;case H:return t=ii(19,r,n,u),t.elementType=H,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:y=10;break e;case L:y=9;break e;case D:y=11;break e;case B:y=14;break e;case Y:y=16,o=null;break e}y=29,r=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=ii(y,r,n,u),n.elementType=t,n.type=o,n.lanes=h,n}function xr(t,n,r,o){return t=ii(7,t,o,n),t.lanes=r,t}function Zu(t,n,r){return t=ii(6,t,null,n),t.lanes=r,t}function hm(t){var n=ii(18,null,null,0);return n.stateNode=t,n}function Ku(t,n,r){return n=ii(4,t.children!==null?t.children:[],t.key,n),n.lanes=r,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var dm=new WeakMap;function mi(t,n){if(typeof t=="object"&&t!==null){var r=dm.get(t);return r!==void 0?r:(n={value:t,source:n,stack:je(n)},dm.set(t,n),n)}return{value:t,source:n,stack:je(n)}}var is=[],as=0,Pl=null,vo=0,gi=[],vi=0,La=null,Hi=1,Gi="";function aa(t,n){is[as++]=vo,is[as++]=Pl,Pl=t,vo=n}function pm(t,n,r){gi[vi++]=Hi,gi[vi++]=Gi,gi[vi++]=La,La=t;var o=Hi;t=Gi;var u=32-tt(o)-1;o&=~(1<<u),r+=1;var h=32-tt(n)+u;if(30<h){var y=u-u%5;h=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Hi=1<<32-tt(n)+u|r<<u|o,Gi=h+t}else Hi=1<<h|r<<u|o,Gi=t}function Qu(t){t.return!==null&&(aa(t,1),pm(t,1,0))}function Ju(t){for(;t===Pl;)Pl=is[--as],is[as]=null,vo=is[--as],is[as]=null;for(;t===La;)La=gi[--vi],gi[vi]=null,Gi=gi[--vi],gi[vi]=null,Hi=gi[--vi],gi[vi]=null}function mm(t,n){gi[vi++]=Hi,gi[vi++]=Gi,gi[vi++]=La,Hi=n.id,Gi=n.overflow,La=t}var Tn=null,Yt=null,Et=!1,Oa=null,_i=!1,$u=Error(s(519));function Pa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw _o(mi(n,t)),$u}function gm(t){var n=t.stateNode,r=t.type,o=t.memoizedProps;switch(n[en]=t,n[bn]=o,r){case"dialog":mt("cancel",n),mt("close",n);break;case"iframe":case"object":case"embed":mt("load",n);break;case"video":case"audio":for(r=0;r<Ho.length;r++)mt(Ho[r],n);break;case"source":mt("error",n);break;case"img":case"image":case"link":mt("error",n),mt("load",n);break;case"details":mt("toggle",n);break;case"input":mt("invalid",n),Hn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":mt("invalid",n);break;case"textarea":mt("invalid",n),Zr(n,o.value,o.defaultValue,o.children)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||o.suppressHydrationWarning===!0||Lv(n.textContent,r)?(o.popover!=null&&(mt("beforetoggle",n),mt("toggle",n)),o.onScroll!=null&&mt("scroll",n),o.onScrollEnd!=null&&mt("scrollend",n),o.onClick!=null&&(n.onclick=ta),n=!0):n=!1,n||Pa(t,!0)}function vm(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:Tn=Tn.return}}function rs(t){if(t!==Tn)return!1;if(!Et)return vm(t),Et=!0,!1;var n=t.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||_h(t.type,t.memoizedProps)),r=!r),r&&Yt&&Pa(t),vm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Yt=Vv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Yt=Vv(t)}else n===27?(n=Yt,Za(t.type)?(t=bh,bh=null,Yt=t):Yt=n):Yt=Tn?yi(t.stateNode.nextSibling):null;return!0}function yr(){Yt=Tn=null,Et=!1}function ef(){var t=Oa;return t!==null&&(Kn===null?Kn=t:Kn.push.apply(Kn,t),Oa=null),t}function _o(t){Oa===null?Oa=[t]:Oa.push(t)}var tf=P(null),Sr=null,ra=null;function Ba(t,n,r){Se(tf,n._currentValue),n._currentValue=r}function sa(t){t._currentValue=tf.current,ne(tf)}function nf(t,n,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===r)break;t=t.return}}function af(t,n,r,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var h=u.dependencies;if(h!==null){var y=u.child;h=h.firstContext;e:for(;h!==null;){var A=h;h=u;for(var I=0;I<n.length;I++)if(A.context===n[I]){h.lanes|=r,A=h.alternate,A!==null&&(A.lanes|=r),nf(h.return,r,t),o||(y=null);break e}h=A.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=r,h=y.alternate,h!==null&&(h.lanes|=r),nf(y,r,t),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===t){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function ss(t,n,r,o){t=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var A=u.type;ni(u.pendingProps.value,y.value)||(t!==null?t.push(A):t=[A])}}else if(u===ye.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Xo):t=[Xo])}u=u.return}t!==null&&af(n,t,r,o),n.flags|=262144}function Bl(t){for(t=t.firstContext;t!==null;){if(!ni(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Er(t){Sr=t,ra=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return _m(Sr,t)}function zl(t,n){return Sr===null&&Er(t),_m(t,n)}function _m(t,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},ra===null){if(t===null)throw Error(s(308));ra=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ra=ra.next=n;return r}var by=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(r,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(r){return r()})}},My=a.unstable_scheduleCallback,Ty=a.unstable_NormalPriority,on={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function rf(){return{controller:new by,data:new Map,refCount:0}}function xo(t){t.refCount--,t.refCount===0&&My(Ty,function(){t.controller.abort()})}var yo=null,sf=0,os=0,ls=null;function Ay(t,n){if(yo===null){var r=yo=[];sf=0,os=ch(),ls={status:"pending",value:void 0,then:function(o){r.push(o)}}}return sf++,n.then(xm,xm),n}function xm(){if(--sf===0&&yo!==null){ls!==null&&(ls.status="fulfilled");var t=yo;yo=null,os=0,ls=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function wy(t,n){var r=[],o={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<r.length;u++)(0,r[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),o}var ym=z.S;z.S=function(t,n){iv=he(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ay(t,n),ym!==null&&ym(t,n)};var br=P(null);function of(){var t=br.current;return t!==null?t:Xt.pooledCache}function Il(t,n){n===null?Se(br,br.current):Se(br,n.pool)}function Sm(){var t=of();return t===null?null:{parent:on._currentValue,pool:t}}var cs=Error(s(460)),lf=Error(s(474)),Fl=Error(s(542)),Hl={then:function(){}};function Em(t){return t=t.status,t==="fulfilled"||t==="rejected"}function bm(t,n,r){switch(r=t[r],r===void 0?t.push(n):r!==n&&(n.then(ta,ta),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Tm(t),t;default:if(typeof n.status=="string")n.then(ta,ta);else{if(t=Xt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Tm(t),t}throw Tr=n,cs}}function Mr(t){try{var n=t._init;return n(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(Tr=r,cs):r}}var Tr=null;function Mm(){if(Tr===null)throw Error(s(459));var t=Tr;return Tr=null,t}function Tm(t){if(t===cs||t===Fl)throw Error(s(483))}var us=null,So=0;function Gl(t){var n=So;return So+=1,us===null&&(us=[]),bm(us,t,n)}function Eo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Vl(t,n){throw n.$$typeof===x?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Am(t){function n(q,G){if(t){var J=q.deletions;J===null?(q.deletions=[G],q.flags|=16):J.push(G)}}function r(q,G){if(!t)return null;for(;G!==null;)n(q,G),G=G.sibling;return null}function o(q){for(var G=new Map;q!==null;)q.key!==null?G.set(q.key,q):G.set(q.index,q),q=q.sibling;return G}function u(q,G){return q=ia(q,G),q.index=0,q.sibling=null,q}function h(q,G,J){return q.index=J,t?(J=q.alternate,J!==null?(J=J.index,J<G?(q.flags|=67108866,G):J):(q.flags|=67108866,G)):(q.flags|=1048576,G)}function y(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function A(q,G,J,me){return G===null||G.tag!==6?(G=Zu(J,q.mode,me),G.return=q,G):(G=u(G,J),G.return=q,G)}function I(q,G,J,me){var We=J.type;return We===T?fe(q,G,J.props.children,me,J.key):G!==null&&(G.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===Y&&Mr(We)===G.type)?(G=u(G,J.props),Eo(G,J),G.return=q,G):(G=Ol(J.type,J.key,J.props,null,q.mode,me),Eo(G,J),G.return=q,G)}function $(q,G,J,me){return G===null||G.tag!==4||G.stateNode.containerInfo!==J.containerInfo||G.stateNode.implementation!==J.implementation?(G=Ku(J,q.mode,me),G.return=q,G):(G=u(G,J.children||[]),G.return=q,G)}function fe(q,G,J,me,We){return G===null||G.tag!==7?(G=xr(J,q.mode,me,We),G.return=q,G):(G=u(G,J),G.return=q,G)}function ve(q,G,J){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=Zu(""+G,q.mode,J),G.return=q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case E:return J=Ol(G.type,G.key,G.props,null,q.mode,J),Eo(J,G),J.return=q,J;case M:return G=Ku(G,q.mode,J),G.return=q,G;case Y:return G=Mr(G),ve(q,G,J)}if(pe(G)||ue(G))return G=xr(G,q.mode,J,null),G.return=q,G;if(typeof G.then=="function")return ve(q,Gl(G),J);if(G.$$typeof===U)return ve(q,zl(q,G),J);Vl(q,G)}return null}function ee(q,G,J,me){var We=G!==null?G.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return We!==null?null:A(q,G,""+J,me);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case E:return J.key===We?I(q,G,J,me):null;case M:return J.key===We?$(q,G,J,me):null;case Y:return J=Mr(J),ee(q,G,J,me)}if(pe(J)||ue(J))return We!==null?null:fe(q,G,J,me,null);if(typeof J.then=="function")return ee(q,G,Gl(J),me);if(J.$$typeof===U)return ee(q,G,zl(q,J),me);Vl(q,J)}return null}function se(q,G,J,me,We){if(typeof me=="string"&&me!==""||typeof me=="number"||typeof me=="bigint")return q=q.get(J)||null,A(G,q,""+me,We);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case E:return q=q.get(me.key===null?J:me.key)||null,I(G,q,me,We);case M:return q=q.get(me.key===null?J:me.key)||null,$(G,q,me,We);case Y:return me=Mr(me),se(q,G,J,me,We)}if(pe(me)||ue(me))return q=q.get(J)||null,fe(G,q,me,We,null);if(typeof me.then=="function")return se(q,G,J,Gl(me),We);if(me.$$typeof===U)return se(q,G,J,zl(G,me),We);Vl(G,me)}return null}function Fe(q,G,J,me){for(var We=null,wt=null,He=G,lt=G=0,_t=null;He!==null&&lt<J.length;lt++){He.index>lt?(_t=He,He=null):_t=He.sibling;var Rt=ee(q,He,J[lt],me);if(Rt===null){He===null&&(He=_t);break}t&&He&&Rt.alternate===null&&n(q,He),G=h(Rt,G,lt),wt===null?We=Rt:wt.sibling=Rt,wt=Rt,He=_t}if(lt===J.length)return r(q,He),Et&&aa(q,lt),We;if(He===null){for(;lt<J.length;lt++)He=ve(q,J[lt],me),He!==null&&(G=h(He,G,lt),wt===null?We=He:wt.sibling=He,wt=He);return Et&&aa(q,lt),We}for(He=o(He);lt<J.length;lt++)_t=se(He,q,lt,J[lt],me),_t!==null&&(t&&_t.alternate!==null&&He.delete(_t.key===null?lt:_t.key),G=h(_t,G,lt),wt===null?We=_t:wt.sibling=_t,wt=_t);return t&&He.forEach(function(er){return n(q,er)}),Et&&aa(q,lt),We}function Je(q,G,J,me){if(J==null)throw Error(s(151));for(var We=null,wt=null,He=G,lt=G=0,_t=null,Rt=J.next();He!==null&&!Rt.done;lt++,Rt=J.next()){He.index>lt?(_t=He,He=null):_t=He.sibling;var er=ee(q,He,Rt.value,me);if(er===null){He===null&&(He=_t);break}t&&He&&er.alternate===null&&n(q,He),G=h(er,G,lt),wt===null?We=er:wt.sibling=er,wt=er,He=_t}if(Rt.done)return r(q,He),Et&&aa(q,lt),We;if(He===null){for(;!Rt.done;lt++,Rt=J.next())Rt=ve(q,Rt.value,me),Rt!==null&&(G=h(Rt,G,lt),wt===null?We=Rt:wt.sibling=Rt,wt=Rt);return Et&&aa(q,lt),We}for(He=o(He);!Rt.done;lt++,Rt=J.next())Rt=se(He,q,lt,Rt.value,me),Rt!==null&&(t&&Rt.alternate!==null&&He.delete(Rt.key===null?lt:Rt.key),G=h(Rt,G,lt),wt===null?We=Rt:wt.sibling=Rt,wt=Rt);return t&&He.forEach(function(IS){return n(q,IS)}),Et&&aa(q,lt),We}function Vt(q,G,J,me){if(typeof J=="object"&&J!==null&&J.type===T&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case E:e:{for(var We=J.key;G!==null;){if(G.key===We){if(We=J.type,We===T){if(G.tag===7){r(q,G.sibling),me=u(G,J.props.children),me.return=q,q=me;break e}}else if(G.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===Y&&Mr(We)===G.type){r(q,G.sibling),me=u(G,J.props),Eo(me,J),me.return=q,q=me;break e}r(q,G);break}else n(q,G);G=G.sibling}J.type===T?(me=xr(J.props.children,q.mode,me,J.key),me.return=q,q=me):(me=Ol(J.type,J.key,J.props,null,q.mode,me),Eo(me,J),me.return=q,q=me)}return y(q);case M:e:{for(We=J.key;G!==null;){if(G.key===We)if(G.tag===4&&G.stateNode.containerInfo===J.containerInfo&&G.stateNode.implementation===J.implementation){r(q,G.sibling),me=u(G,J.children||[]),me.return=q,q=me;break e}else{r(q,G);break}else n(q,G);G=G.sibling}me=Ku(J,q.mode,me),me.return=q,q=me}return y(q);case Y:return J=Mr(J),Vt(q,G,J,me)}if(pe(J))return Fe(q,G,J,me);if(ue(J)){if(We=ue(J),typeof We!="function")throw Error(s(150));return J=We.call(J),Je(q,G,J,me)}if(typeof J.then=="function")return Vt(q,G,Gl(J),me);if(J.$$typeof===U)return Vt(q,G,zl(q,J),me);Vl(q,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,G!==null&&G.tag===6?(r(q,G.sibling),me=u(G,J),me.return=q,q=me):(r(q,G),me=Zu(J,q.mode,me),me.return=q,q=me),y(q)):r(q,G)}return function(q,G,J,me){try{So=0;var We=Vt(q,G,J,me);return us=null,We}catch(He){if(He===cs||He===Fl)throw He;var wt=ii(29,He,null,q.mode);return wt.lanes=me,wt.return=q,wt}finally{}}}var Ar=Am(!0),wm=Am(!1),za=!1;function cf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ia(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Fa(t,n,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ut&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Ll(t),um(t,null,r),n}return Nl(t,o,n,r),Ll(t)}function bo(t,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,io(t,r)}}function ff(t,n){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var u=null,h=null;if(r=r.firstBaseUpdate,r!==null){do{var y={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};h===null?u=h=y:h=h.next=y,r=r.next}while(r!==null);h===null?u=h=n:h=h.next=n}else u=h=n;r={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=n:t.next=n,r.lastBaseUpdate=n}var hf=!1;function Mo(){if(hf){var t=ls;if(t!==null)throw t}}function To(t,n,r,o){hf=!1;var u=t.updateQueue;za=!1;var h=u.firstBaseUpdate,y=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var I=A,$=I.next;I.next=null,y===null?h=$:y.next=$,y=I;var fe=t.alternate;fe!==null&&(fe=fe.updateQueue,A=fe.lastBaseUpdate,A!==y&&(A===null?fe.firstBaseUpdate=$:A.next=$,fe.lastBaseUpdate=I))}if(h!==null){var ve=u.baseState;y=0,fe=$=I=null,A=h;do{var ee=A.lane&-536870913,se=ee!==A.lane;if(se?(vt&ee)===ee:(o&ee)===ee){ee!==0&&ee===os&&(hf=!0),fe!==null&&(fe=fe.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Fe=t,Je=A;ee=n;var Vt=r;switch(Je.tag){case 1:if(Fe=Je.payload,typeof Fe=="function"){ve=Fe.call(Vt,ve,ee);break e}ve=Fe;break e;case 3:Fe.flags=Fe.flags&-65537|128;case 0:if(Fe=Je.payload,ee=typeof Fe=="function"?Fe.call(Vt,ve,ee):Fe,ee==null)break e;ve=g({},ve,ee);break e;case 2:za=!0}}ee=A.callback,ee!==null&&(t.flags|=64,se&&(t.flags|=8192),se=u.callbacks,se===null?u.callbacks=[ee]:se.push(ee))}else se={lane:ee,tag:A.tag,payload:A.payload,callback:A.callback,next:null},fe===null?($=fe=se,I=ve):fe=fe.next=se,y|=ee;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;se=A,A=se.next,se.next=null,u.lastBaseUpdate=se,u.shared.pending=null}}while(!0);fe===null&&(I=ve),u.baseState=I,u.firstBaseUpdate=$,u.lastBaseUpdate=fe,h===null&&(u.shared.lanes=0),ja|=y,t.lanes=y,t.memoizedState=ve}}function Rm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Cm(t,n){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)Rm(r[t],n)}var fs=P(null),kl=P(0);function Dm(t,n){t=ma,Se(kl,t),Se(fs,n),ma=t|n.baseLanes}function df(){Se(kl,ma),Se(fs,fs.current)}function pf(){ma=kl.current,ne(fs),ne(kl)}var ai=P(null),xi=null;function Ha(t){var n=t.alternate;Se(rn,rn.current&1),Se(ai,t),xi===null&&(n===null||fs.current!==null||n.memoizedState!==null)&&(xi=t)}function mf(t){Se(rn,rn.current),Se(ai,t),xi===null&&(xi=t)}function Um(t){t.tag===22?(Se(rn,rn.current),Se(ai,t),xi===null&&(xi=t)):Ga()}function Ga(){Se(rn,rn.current),Se(ai,ai.current)}function ri(t){ne(ai),xi===t&&(xi=null),ne(rn)}var rn=P(0);function jl(t){for(var n=t;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Sh(r)||Eh(r)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var oa=0,ot=null,Ht=null,ln=null,Xl=!1,hs=!1,wr=!1,Wl=0,Ao=0,ds=null,Ry=0;function nn(){throw Error(s(321))}function gf(t,n){if(n===null)return!1;for(var r=0;r<n.length&&r<t.length;r++)if(!ni(t[r],n[r]))return!1;return!0}function vf(t,n,r,o,u,h){return oa=h,ot=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?pg:Nf,wr=!1,h=r(o,u),wr=!1,hs&&(h=Lm(n,r,o,u)),Nm(t),h}function Nm(t){z.H=Co;var n=Ht!==null&&Ht.next!==null;if(oa=0,ln=Ht=ot=null,Xl=!1,Ao=0,ds=null,n)throw Error(s(300));t===null||cn||(t=t.dependencies,t!==null&&Bl(t)&&(cn=!0))}function Lm(t,n,r,o){ot=t;var u=0;do{if(hs&&(ds=null),Ao=0,hs=!1,25<=u)throw Error(s(301));if(u+=1,ln=Ht=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}z.H=mg,h=n(r,o)}while(hs);return h}function Cy(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?wo(n):n,t=t.useState()[0],(Ht!==null?Ht.memoizedState:null)!==t&&(ot.flags|=1024),n}function _f(){var t=Wl!==0;return Wl=0,t}function xf(t,n,r){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~r}function yf(t){if(Xl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Xl=!1}oa=0,ln=Ht=ot=null,hs=!1,Ao=Wl=0,ds=null}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?ot.memoizedState=ln=t:ln=ln.next=t,ln}function sn(){if(Ht===null){var t=ot.alternate;t=t!==null?t.memoizedState:null}else t=Ht.next;var n=ln===null?ot.memoizedState:ln.next;if(n!==null)ln=n,Ht=t;else{if(t===null)throw ot.alternate===null?Error(s(467)):Error(s(310));Ht=t,t={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},ln===null?ot.memoizedState=ln=t:ln=ln.next=t}return ln}function ql(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function wo(t){var n=Ao;return Ao+=1,ds===null&&(ds=[]),t=bm(ds,t,n),n=ot,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?pg:Nf),t}function Yl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return wo(t);if(t.$$typeof===U)return An(t)}throw Error(s(438,String(t)))}function Sf(t){var n=null,r=ot.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var o=ot.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=ql(),ot.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(t),o=0;o<t;o++)r[o]=C;return n.index++,r}function la(t,n){return typeof n=="function"?n(t):n}function Zl(t){var n=sn();return Ef(n,Ht,t)}function Ef(t,n,r){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=r;var u=t.baseQueue,h=o.pending;if(h!==null){if(u!==null){var y=u.next;u.next=h.next,h.next=y}n.baseQueue=u=h,o.pending=null}if(h=t.baseState,u===null)t.memoizedState=h;else{n=u.next;var A=y=null,I=null,$=n,fe=!1;do{var ve=$.lane&-536870913;if(ve!==$.lane?(vt&ve)===ve:(oa&ve)===ve){var ee=$.revertLane;if(ee===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),ve===os&&(fe=!0);else if((oa&ee)===ee){$=$.next,ee===os&&(fe=!0);continue}else ve={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(A=I=ve,y=h):I=I.next=ve,ot.lanes|=ee,ja|=ee;ve=$.action,wr&&r(h,ve),h=$.hasEagerState?$.eagerState:r(h,ve)}else ee={lane:ve,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(A=I=ee,y=h):I=I.next=ee,ot.lanes|=ve,ja|=ve;$=$.next}while($!==null&&$!==n);if(I===null?y=h:I.next=A,!ni(h,t.memoizedState)&&(cn=!0,fe&&(r=ls,r!==null)))throw r;t.memoizedState=h,t.baseState=y,t.baseQueue=I,o.lastRenderedState=h}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function bf(t){var n=sn(),r=n.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=t;var o=r.dispatch,u=r.pending,h=n.memoizedState;if(u!==null){r.pending=null;var y=u=u.next;do h=t(h,y.action),y=y.next;while(y!==u);ni(h,n.memoizedState)||(cn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),r.lastRenderedState=h}return[h,o]}function Om(t,n,r){var o=ot,u=sn(),h=Et;if(h){if(r===void 0)throw Error(s(407));r=r()}else r=n();var y=!ni((Ht||u).memoizedState,r);if(y&&(u.memoizedState=r,cn=!0),u=u.queue,Af(zm.bind(null,o,u,t),[t]),u.getSnapshot!==n||y||ln!==null&&ln.memoizedState.tag&1){if(o.flags|=2048,ps(9,{destroy:void 0},Bm.bind(null,o,u,r,n),null),Xt===null)throw Error(s(349));h||(oa&127)!==0||Pm(o,n,r)}return r}function Pm(t,n,r){t.flags|=16384,t={getSnapshot:n,value:r},n=ot.updateQueue,n===null?(n=ql(),ot.updateQueue=n,n.stores=[t]):(r=n.stores,r===null?n.stores=[t]:r.push(t))}function Bm(t,n,r,o){n.value=r,n.getSnapshot=o,Im(n)&&Fm(t)}function zm(t,n,r){return r(function(){Im(n)&&Fm(t)})}function Im(t){var n=t.getSnapshot;t=t.value;try{var r=n();return!ni(t,r)}catch{return!0}}function Fm(t){var n=_r(t,2);n!==null&&Qn(n,t,2)}function Mf(t){var n=Gn();if(typeof t=="function"){var r=t;if(t=r(),wr){Pe(!0);try{r()}finally{Pe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:t},n}function Hm(t,n,r,o){return t.baseState=r,Ef(t,Ht,typeof o=="function"?o:la)}function Dy(t,n,r,o,u){if(Jl(t))throw Error(s(485));if(t=n.action,t!==null){var h={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){h.listeners.push(y)}};z.T!==null?r(!0):h.isTransition=!1,o(h),r=n.pending,r===null?(h.next=n.pending=h,Gm(n,h)):(h.next=r.next,n.pending=r.next=h)}}function Gm(t,n){var r=n.action,o=n.payload,u=t.state;if(n.isTransition){var h=z.T,y={};z.T=y;try{var A=r(u,o),I=z.S;I!==null&&I(y,A),Vm(t,n,A)}catch($){Tf(t,n,$)}finally{h!==null&&y.types!==null&&(h.types=y.types),z.T=h}}else try{h=r(u,o),Vm(t,n,h)}catch($){Tf(t,n,$)}}function Vm(t,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){km(t,n,o)},function(o){return Tf(t,n,o)}):km(t,n,r)}function km(t,n,r){n.status="fulfilled",n.value=r,jm(n),t.state=r,n=t.pending,n!==null&&(r=n.next,r===n?t.pending=null:(r=r.next,n.next=r,Gm(t,r)))}function Tf(t,n,r){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=r,jm(n),n=n.next;while(n!==o)}t.action=null}function jm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Xm(t,n){return n}function Wm(t,n){if(Et){var r=Xt.formState;if(r!==null){e:{var o=ot;if(Et){if(Yt){t:{for(var u=Yt,h=_i;u.nodeType!==8;){if(!h){u=null;break t}if(u=yi(u.nextSibling),u===null){u=null;break t}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Yt=yi(u.nextSibling),o=u.data==="F!";break e}}Pa(o)}o=!1}o&&(n=r[0])}}return r=Gn(),r.memoizedState=r.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xm,lastRenderedState:n},r.queue=o,r=fg.bind(null,ot,o),o.dispatch=r,o=Mf(!1),h=Uf.bind(null,ot,!1,o.queue),o=Gn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,r=Dy.bind(null,ot,u,h,r),u.dispatch=r,o.memoizedState=t,[n,r,!1]}function qm(t){var n=sn();return Ym(n,Ht,t)}function Ym(t,n,r){if(n=Ef(t,n,Xm)[0],t=Zl(la)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=wo(n)}catch(y){throw y===cs?Fl:y}else o=n;n=sn();var u=n.queue,h=u.dispatch;return r!==n.memoizedState&&(ot.flags|=2048,ps(9,{destroy:void 0},Uy.bind(null,u,r),null)),[o,h,t]}function Uy(t,n){t.action=n}function Zm(t){var n=sn(),r=Ht;if(r!==null)return Ym(n,r,t);sn(),n=n.memoizedState,r=sn();var o=r.queue.dispatch;return r.memoizedState=t,[n,o,!1]}function ps(t,n,r,o){return t={tag:t,create:r,deps:o,inst:n,next:null},n=ot.updateQueue,n===null&&(n=ql(),ot.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,n.lastEffect=t),t}function Km(){return sn().memoizedState}function Kl(t,n,r,o){var u=Gn();ot.flags|=t,u.memoizedState=ps(1|n,{destroy:void 0},r,o===void 0?null:o)}function Ql(t,n,r,o){var u=sn();o=o===void 0?null:o;var h=u.memoizedState.inst;Ht!==null&&o!==null&&gf(o,Ht.memoizedState.deps)?u.memoizedState=ps(n,h,r,o):(ot.flags|=t,u.memoizedState=ps(1|n,h,r,o))}function Qm(t,n){Kl(8390656,8,t,n)}function Af(t,n){Ql(2048,8,t,n)}function Ny(t){ot.flags|=4;var n=ot.updateQueue;if(n===null)n=ql(),ot.updateQueue=n,n.events=[t];else{var r=n.events;r===null?n.events=[t]:r.push(t)}}function Jm(t){var n=sn().memoizedState;return Ny({ref:n,nextImpl:t}),function(){if((Ut&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function $m(t,n){return Ql(4,2,t,n)}function eg(t,n){return Ql(4,4,t,n)}function tg(t,n){if(typeof n=="function"){t=t();var r=n(t);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function ng(t,n,r){r=r!=null?r.concat([t]):null,Ql(4,4,tg.bind(null,n,t),r)}function wf(){}function ig(t,n){var r=sn();n=n===void 0?null:n;var o=r.memoizedState;return n!==null&&gf(n,o[1])?o[0]:(r.memoizedState=[t,n],t)}function ag(t,n){var r=sn();n=n===void 0?null:n;var o=r.memoizedState;if(n!==null&&gf(n,o[1]))return o[0];if(o=t(),wr){Pe(!0);try{t()}finally{Pe(!1)}}return r.memoizedState=[o,n],o}function Rf(t,n,r){return r===void 0||(oa&1073741824)!==0&&(vt&261930)===0?t.memoizedState=n:(t.memoizedState=r,t=rv(),ot.lanes|=t,ja|=t,r)}function rg(t,n,r,o){return ni(r,n)?r:fs.current!==null?(t=Rf(t,r,o),ni(t,n)||(cn=!0),t):(oa&42)===0||(oa&1073741824)!==0&&(vt&261930)===0?(cn=!0,t.memoizedState=r):(t=rv(),ot.lanes|=t,ja|=t,n)}function sg(t,n,r,o,u){var h=Q.p;Q.p=h!==0&&8>h?h:8;var y=z.T,A={};z.T=A,Uf(t,!1,n,r);try{var I=u(),$=z.S;if($!==null&&$(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var fe=wy(I,o);Ro(t,n,fe,li(t))}else Ro(t,n,o,li(t))}catch(ve){Ro(t,n,{then:function(){},status:"rejected",reason:ve},li())}finally{Q.p=h,y!==null&&A.types!==null&&(y.types=A.types),z.T=y}}function Ly(){}function Cf(t,n,r,o){if(t.tag!==5)throw Error(s(476));var u=og(t).queue;sg(t,u,n,K,r===null?Ly:function(){return lg(t),r(o)})}function og(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:K},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:r},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function lg(t){var n=og(t);n.next===null&&(n=t.alternate.memoizedState),Ro(t,n.next.queue,{},li())}function Df(){return An(Xo)}function cg(){return sn().memoizedState}function ug(){return sn().memoizedState}function Oy(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var r=li();t=Ia(r);var o=Fa(n,t,r);o!==null&&(Qn(o,n,r),bo(o,n,r)),n={cache:rf()},t.payload=n;return}n=n.return}}function Py(t,n,r){var o=li();r={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Jl(t)?hg(n,r):(r=qu(t,n,r,o),r!==null&&(Qn(r,t,o),dg(r,n,o)))}function fg(t,n,r){var o=li();Ro(t,n,r,o)}function Ro(t,n,r,o){var u={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Jl(t))hg(n,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var y=n.lastRenderedState,A=h(y,r);if(u.hasEagerState=!0,u.eagerState=A,ni(A,y))return Nl(t,n,u,0),Xt===null&&Ul(),!1}catch{}finally{}if(r=qu(t,n,u,o),r!==null)return Qn(r,t,o),dg(r,n,o),!0}return!1}function Uf(t,n,r,o){if(o={lane:2,revertLane:ch(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Jl(t)){if(n)throw Error(s(479))}else n=qu(t,r,o,2),n!==null&&Qn(n,t,2)}function Jl(t){var n=t.alternate;return t===ot||n!==null&&n===ot}function hg(t,n){hs=Xl=!0;var r=t.pending;r===null?n.next=n:(n.next=r.next,r.next=n),t.pending=n}function dg(t,n,r){if((r&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,io(t,r)}}var Co={readContext:An,use:Yl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};Co.useEffectEvent=nn;var pg={readContext:An,use:Yl,useCallback:function(t,n){return Gn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:Qm,useImperativeHandle:function(t,n,r){r=r!=null?r.concat([t]):null,Kl(4194308,4,tg.bind(null,n,t),r)},useLayoutEffect:function(t,n){return Kl(4194308,4,t,n)},useInsertionEffect:function(t,n){Kl(4,2,t,n)},useMemo:function(t,n){var r=Gn();n=n===void 0?null:n;var o=t();if(wr){Pe(!0);try{t()}finally{Pe(!1)}}return r.memoizedState=[o,n],o},useReducer:function(t,n,r){var o=Gn();if(r!==void 0){var u=r(n);if(wr){Pe(!0);try{r(n)}finally{Pe(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Py.bind(null,ot,t),[o.memoizedState,t]},useRef:function(t){var n=Gn();return t={current:t},n.memoizedState=t},useState:function(t){t=Mf(t);var n=t.queue,r=fg.bind(null,ot,n);return n.dispatch=r,[t.memoizedState,r]},useDebugValue:wf,useDeferredValue:function(t,n){var r=Gn();return Rf(r,t,n)},useTransition:function(){var t=Mf(!1);return t=sg.bind(null,ot,t.queue,!0,!1),Gn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,r){var o=ot,u=Gn();if(Et){if(r===void 0)throw Error(s(407));r=r()}else{if(r=n(),Xt===null)throw Error(s(349));(vt&127)!==0||Pm(o,n,r)}u.memoizedState=r;var h={value:r,getSnapshot:n};return u.queue=h,Qm(zm.bind(null,o,h,t),[t]),o.flags|=2048,ps(9,{destroy:void 0},Bm.bind(null,o,h,r,n),null),r},useId:function(){var t=Gn(),n=Xt.identifierPrefix;if(Et){var r=Gi,o=Hi;r=(o&~(1<<32-tt(o)-1)).toString(32)+r,n="_"+n+"R_"+r,r=Wl++,0<r&&(n+="H"+r.toString(32)),n+="_"}else r=Ry++,n="_"+n+"r_"+r.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Df,useFormState:Wm,useActionState:Wm,useOptimistic:function(t){var n=Gn();n.memoizedState=n.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=Uf.bind(null,ot,!0,r),r.dispatch=n,[t,n]},useMemoCache:Sf,useCacheRefresh:function(){return Gn().memoizedState=Oy.bind(null,ot)},useEffectEvent:function(t){var n=Gn(),r={impl:t};return n.memoizedState=r,function(){if((Ut&2)!==0)throw Error(s(440));return r.impl.apply(void 0,arguments)}}},Nf={readContext:An,use:Yl,useCallback:ig,useContext:An,useEffect:Af,useImperativeHandle:ng,useInsertionEffect:$m,useLayoutEffect:eg,useMemo:ag,useReducer:Zl,useRef:Km,useState:function(){return Zl(la)},useDebugValue:wf,useDeferredValue:function(t,n){var r=sn();return rg(r,Ht.memoizedState,t,n)},useTransition:function(){var t=Zl(la)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:wo(t),n]},useSyncExternalStore:Om,useId:cg,useHostTransitionStatus:Df,useFormState:qm,useActionState:qm,useOptimistic:function(t,n){var r=sn();return Hm(r,Ht,t,n)},useMemoCache:Sf,useCacheRefresh:ug};Nf.useEffectEvent=Jm;var mg={readContext:An,use:Yl,useCallback:ig,useContext:An,useEffect:Af,useImperativeHandle:ng,useInsertionEffect:$m,useLayoutEffect:eg,useMemo:ag,useReducer:bf,useRef:Km,useState:function(){return bf(la)},useDebugValue:wf,useDeferredValue:function(t,n){var r=sn();return Ht===null?Rf(r,t,n):rg(r,Ht.memoizedState,t,n)},useTransition:function(){var t=bf(la)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:wo(t),n]},useSyncExternalStore:Om,useId:cg,useHostTransitionStatus:Df,useFormState:Zm,useActionState:Zm,useOptimistic:function(t,n){var r=sn();return Ht!==null?Hm(r,Ht,t,n):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:Sf,useCacheRefresh:ug};mg.useEffectEvent=Jm;function Lf(t,n,r,o){n=t.memoizedState,r=r(o,n),r=r==null?n:g({},n,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Of={enqueueSetState:function(t,n,r){t=t._reactInternals;var o=li(),u=Ia(o);u.payload=n,r!=null&&(u.callback=r),n=Fa(t,u,o),n!==null&&(Qn(n,t,o),bo(n,t,o))},enqueueReplaceState:function(t,n,r){t=t._reactInternals;var o=li(),u=Ia(o);u.tag=1,u.payload=n,r!=null&&(u.callback=r),n=Fa(t,u,o),n!==null&&(Qn(n,t,o),bo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var r=li(),o=Ia(r);o.tag=2,n!=null&&(o.callback=n),n=Fa(t,o,r),n!==null&&(Qn(n,t,r),bo(n,t,r))}};function gg(t,n,r,o,u,h,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,h,y):n.prototype&&n.prototype.isPureReactComponent?!mo(r,o)||!mo(u,h):!0}function vg(t,n,r,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,o),n.state!==t&&Of.enqueueReplaceState(n,n.state,null)}function Rr(t,n){var r=n;if("ref"in n){r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}if(t=t.defaultProps){r===n&&(r=g({},r));for(var u in t)r[u]===void 0&&(r[u]=t[u])}return r}function _g(t){Dl(t)}function xg(t){console.error(t)}function yg(t){Dl(t)}function $l(t,n){try{var r=t.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Sg(t,n,r){try{var o=t.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Pf(t,n,r){return r=Ia(r),r.tag=3,r.payload={element:null},r.callback=function(){$l(t,n)},r}function Eg(t){return t=Ia(t),t.tag=3,t}function bg(t,n,r,o){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;t.payload=function(){return u(h)},t.callback=function(){Sg(n,r,o)}}var y=r.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){Sg(n,r,o),typeof u!="function"&&(Xa===null?Xa=new Set([this]):Xa.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function By(t,n,r,o,u){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=r.alternate,n!==null&&ss(n,r,u,!0),r=ai.current,r!==null){switch(r.tag){case 31:case 13:return xi===null?fc():r.alternate===null&&an===0&&(an=3),r.flags&=-257,r.flags|=65536,r.lanes=u,o===Hl?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([o]):n.add(o),sh(t,o,u)),!1;case 22:return r.flags|=65536,o===Hl?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([o]):r.add(o)),sh(t,o,u)),!1}throw Error(s(435,r.tag))}return sh(t,o,u),fc(),!1}if(Et)return n=ai.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==$u&&(t=Error(s(422),{cause:o}),_o(mi(t,r)))):(o!==$u&&(n=Error(s(423),{cause:o}),_o(mi(n,r))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=mi(o,r),u=Pf(t.stateNode,o,u),ff(t,u),an!==4&&(an=2)),!1;var h=Error(s(520),{cause:o});if(h=mi(h,r),zo===null?zo=[h]:zo.push(h),an!==4&&(an=2),n===null)return!0;o=mi(o,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,t=u&-u,r.lanes|=t,t=Pf(r.stateNode,o,t),ff(r,t),!1;case 1:if(n=r.type,h=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Xa===null||!Xa.has(h))))return r.flags|=65536,u&=-u,r.lanes|=u,u=Eg(u),bg(u,t,r,o),ff(r,u),!1}r=r.return}while(r!==null);return!1}var Bf=Error(s(461)),cn=!1;function wn(t,n,r,o){n.child=t===null?wm(n,null,r,o):Ar(n,t.child,r,o)}function Mg(t,n,r,o,u){r=r.render;var h=n.ref;if("ref"in o){var y={};for(var A in o)A!=="ref"&&(y[A]=o[A])}else y=o;return Er(n),o=vf(t,n,r,y,h,u),A=_f(),t!==null&&!cn?(xf(t,n,u),ca(t,n,u)):(Et&&A&&Qu(n),n.flags|=1,wn(t,n,o,u),n.child)}function Tg(t,n,r,o,u){if(t===null){var h=r.type;return typeof h=="function"&&!Yu(h)&&h.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=h,Ag(t,n,h,o,u)):(t=Ol(r.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!jf(t,u)){var y=h.memoizedProps;if(r=r.compare,r=r!==null?r:mo,r(y,o)&&t.ref===n.ref)return ca(t,n,u)}return n.flags|=1,t=ia(h,o),t.ref=n.ref,t.return=n,n.child=t}function Ag(t,n,r,o,u){if(t!==null){var h=t.memoizedProps;if(mo(h,o)&&t.ref===n.ref)if(cn=!1,n.pendingProps=o=h,jf(t,u))(t.flags&131072)!==0&&(cn=!0);else return n.lanes=t.lanes,ca(t,n,u)}return zf(t,n,r,o,u)}function wg(t,n,r,o){var u=o.children,h=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|r:r,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return Rg(t,n,h,r,o)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Il(n,h!==null?h.cachePool:null),h!==null?Dm(n,h):df(),Um(n);else return o=n.lanes=536870912,Rg(t,n,h!==null?h.baseLanes|r:r,r,o)}else h!==null?(Il(n,h.cachePool),Dm(n,h),Ga(),n.memoizedState=null):(t!==null&&Il(n,null),df(),Ga());return wn(t,n,u,r),n.child}function Do(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Rg(t,n,r,o,u){var h=of();return h=h===null?null:{parent:on._currentValue,pool:h},n.memoizedState={baseLanes:r,cachePool:h},t!==null&&Il(n,null),df(),Um(n),t!==null&&ss(t,n,o,!0),n.childLanes=u,null}function ec(t,n){return n=nc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Cg(t,n,r){return Ar(n,t.child,null,r),t=ec(n,n.pendingProps),t.flags|=2,ri(n),n.memoizedState=null,t}function zy(t,n,r){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Et){if(o.mode==="hidden")return t=ec(n,o),n.lanes=536870912,Do(null,t);if(mf(n),(t=Yt)?(t=Gv(t,_i),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:La!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},r=hm(t),r.return=n,n.child=r,Tn=n,Yt=null)):t=null,t===null)throw Pa(n);return n.lanes=536870912,null}return ec(n,o)}var h=t.memoizedState;if(h!==null){var y=h.dehydrated;if(mf(n),u)if(n.flags&256)n.flags&=-257,n=Cg(t,n,r);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(cn||ss(t,n,r,!1),u=(r&t.childLanes)!==0,cn||u){if(o=Xt,o!==null&&(y=Fi(o,r),y!==0&&y!==h.retryLane))throw h.retryLane=y,_r(t,y),Qn(o,t,y),Bf;fc(),n=Cg(t,n,r)}else t=h.treeContext,Yt=yi(y.nextSibling),Tn=n,Et=!0,Oa=null,_i=!1,t!==null&&mm(n,t),n=ec(n,o),n.flags|=4096;return n}return t=ia(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function tc(t,n){var r=n.ref;if(r===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(s(284));(t===null||t.ref!==r)&&(n.flags|=4194816)}}function zf(t,n,r,o,u){return Er(n),r=vf(t,n,r,o,void 0,u),o=_f(),t!==null&&!cn?(xf(t,n,u),ca(t,n,u)):(Et&&o&&Qu(n),n.flags|=1,wn(t,n,r,u),n.child)}function Dg(t,n,r,o,u,h){return Er(n),n.updateQueue=null,r=Lm(n,o,r,u),Nm(t),o=_f(),t!==null&&!cn?(xf(t,n,h),ca(t,n,h)):(Et&&o&&Qu(n),n.flags|=1,wn(t,n,r,h),n.child)}function Ug(t,n,r,o,u){if(Er(n),n.stateNode===null){var h=ns,y=r.contextType;typeof y=="object"&&y!==null&&(h=An(y)),h=new r(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Of,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},cf(n),y=r.contextType,h.context=typeof y=="object"&&y!==null?An(y):ns,h.state=n.memoizedState,y=r.getDerivedStateFromProps,typeof y=="function"&&(Lf(n,r,y,o),h.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(y=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),y!==h.state&&Of.enqueueReplaceState(h,h.state,null),To(n,o,h,u),Mo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){h=n.stateNode;var A=n.memoizedProps,I=Rr(r,A);h.props=I;var $=h.context,fe=r.contextType;y=ns,typeof fe=="object"&&fe!==null&&(y=An(fe));var ve=r.getDerivedStateFromProps;fe=typeof ve=="function"||typeof h.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,fe||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(A||$!==y)&&vg(n,h,o,y),za=!1;var ee=n.memoizedState;h.state=ee,To(n,o,h,u),Mo(),$=n.memoizedState,A||ee!==$||za?(typeof ve=="function"&&(Lf(n,r,ve,o),$=n.memoizedState),(I=za||gg(n,r,I,o,ee,$,y))?(fe||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),h.props=o,h.state=$,h.context=y,o=I):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,uf(t,n),y=n.memoizedProps,fe=Rr(r,y),h.props=fe,ve=n.pendingProps,ee=h.context,$=r.contextType,I=ns,typeof $=="object"&&$!==null&&(I=An($)),A=r.getDerivedStateFromProps,($=typeof A=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==ve||ee!==I)&&vg(n,h,o,I),za=!1,ee=n.memoizedState,h.state=ee,To(n,o,h,u),Mo();var se=n.memoizedState;y!==ve||ee!==se||za||t!==null&&t.dependencies!==null&&Bl(t.dependencies)?(typeof A=="function"&&(Lf(n,r,A,o),se=n.memoizedState),(fe=za||gg(n,r,fe,o,ee,se,I)||t!==null&&t.dependencies!==null&&Bl(t.dependencies))?($||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,se,I),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,se,I)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||y===t.memoizedProps&&ee===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ee===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=se),h.props=o,h.state=se,h.context=I,o=fe):(typeof h.componentDidUpdate!="function"||y===t.memoizedProps&&ee===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ee===t.memoizedState||(n.flags|=1024),o=!1)}return h=o,tc(t,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&o?(n.child=Ar(n,t.child,null,u),n.child=Ar(n,null,r,u)):wn(t,n,r,u),n.memoizedState=h.state,t=n.child):t=ca(t,n,u),t}function Ng(t,n,r,o){return yr(),n.flags|=256,wn(t,n,r,o),n.child}var If={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ff(t){return{baseLanes:t,cachePool:Sm()}}function Hf(t,n,r){return t=t!==null?t.childLanes&~r:0,n&&(t|=oi),t}function Lg(t,n,r){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,y;if((y=h)||(y=t!==null&&t.memoizedState===null?!1:(rn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(Et){if(u?Ha(n):Ga(),(t=Yt)?(t=Gv(t,_i),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:La!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},r=hm(t),r.return=n,n.child=r,Tn=n,Yt=null)):t=null,t===null)throw Pa(n);return Eh(t)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Ga(),u=n.mode,A=nc({mode:"hidden",children:A},u),o=xr(o,u,r,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Ff(r),o.childLanes=Hf(t,y,r),n.memoizedState=If,Do(null,o)):(Ha(n),Gf(n,A))}var I=t.memoizedState;if(I!==null&&(A=I.dehydrated,A!==null)){if(h)n.flags&256?(Ha(n),n.flags&=-257,n=Vf(t,n,r)):n.memoizedState!==null?(Ga(),n.child=t.child,n.flags|=128,n=null):(Ga(),A=o.fallback,u=n.mode,o=nc({mode:"visible",children:o.children},u),A=xr(A,u,r,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,Ar(n,t.child,null,r),o=n.child,o.memoizedState=Ff(r),o.childLanes=Hf(t,y,r),n.memoizedState=If,n=Do(null,o));else if(Ha(n),Eh(A)){if(y=A.nextSibling&&A.nextSibling.dataset,y)var $=y.dgst;y=$,o=Error(s(419)),o.stack="",o.digest=y,_o({value:o,source:null,stack:null}),n=Vf(t,n,r)}else if(cn||ss(t,n,r,!1),y=(r&t.childLanes)!==0,cn||y){if(y=Xt,y!==null&&(o=Fi(y,r),o!==0&&o!==I.retryLane))throw I.retryLane=o,_r(t,o),Qn(y,t,o),Bf;Sh(A)||fc(),n=Vf(t,n,r)}else Sh(A)?(n.flags|=192,n.child=t.child,n=null):(t=I.treeContext,Yt=yi(A.nextSibling),Tn=n,Et=!0,Oa=null,_i=!1,t!==null&&mm(n,t),n=Gf(n,o.children),n.flags|=4096);return n}return u?(Ga(),A=o.fallback,u=n.mode,I=t.child,$=I.sibling,o=ia(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,$!==null?A=ia($,A):(A=xr(A,u,r,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,Do(null,o),o=n.child,A=t.child.memoizedState,A===null?A=Ff(r):(u=A.cachePool,u!==null?(I=on._currentValue,u=u.parent!==I?{parent:I,pool:I}:u):u=Sm(),A={baseLanes:A.baseLanes|r,cachePool:u}),o.memoizedState=A,o.childLanes=Hf(t,y,r),n.memoizedState=If,Do(t.child,o)):(Ha(n),r=t.child,t=r.sibling,r=ia(r,{mode:"visible",children:o.children}),r.return=n,r.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=r,n.memoizedState=null,r)}function Gf(t,n){return n=nc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function nc(t,n){return t=ii(22,t,null,n),t.lanes=0,t}function Vf(t,n,r){return Ar(n,t.child,null,r),t=Gf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Og(t,n,r){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),nf(t.return,n,r)}function kf(t,n,r,o,u,h){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:u,treeForkCount:h}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=r,y.tailMode=u,y.treeForkCount=h)}function Pg(t,n,r){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var y=rn.current,A=(y&2)!==0;if(A?(y=y&1|2,n.flags|=128):y&=1,Se(rn,y),wn(t,n,o,r),o=Et?vo:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Og(t,r,n);else if(t.tag===19)Og(t,r,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(r=n.child,u=null;r!==null;)t=r.alternate,t!==null&&jl(t)===null&&(u=r),r=r.sibling;r=u,r===null?(u=n.child,n.child=null):(u=r.sibling,r.sibling=null),kf(n,!1,u,r,h,o);break;case"backwards":case"unstable_legacy-backwards":for(r=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&jl(t)===null){n.child=u;break}t=u.sibling,u.sibling=r,r=u,u=t}kf(n,!0,r,null,h,o);break;case"together":kf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ca(t,n,r){if(t!==null&&(n.dependencies=t.dependencies),ja|=n.lanes,(r&n.childLanes)===0)if(t!==null){if(ss(t,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,r=ia(t,t.pendingProps),n.child=r,r.return=n;t.sibling!==null;)t=t.sibling,r=r.sibling=ia(t,t.pendingProps),r.return=n;r.sibling=null}return n.child}function jf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Bl(t)))}function Iy(t,n,r){switch(n.tag){case 3:ze(n,n.stateNode.containerInfo),Ba(n,on,t.memoizedState.cache),yr();break;case 27:case 5:Ke(n);break;case 4:ze(n,n.stateNode.containerInfo);break;case 10:Ba(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,mf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ha(n),n.flags|=128,null):(r&n.child.childLanes)!==0?Lg(t,n,r):(Ha(n),t=ca(t,n,r),t!==null?t.sibling:null);Ha(n);break;case 19:var u=(t.flags&128)!==0;if(o=(r&n.childLanes)!==0,o||(ss(t,n,r,!1),o=(r&n.childLanes)!==0),u){if(o)return Pg(t,n,r);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Se(rn,rn.current),o)break;return null;case 22:return n.lanes=0,wg(t,n,r,n.pendingProps);case 24:Ba(n,on,t.memoizedState.cache)}return ca(t,n,r)}function Bg(t,n,r){if(t!==null)if(t.memoizedProps!==n.pendingProps)cn=!0;else{if(!jf(t,r)&&(n.flags&128)===0)return cn=!1,Iy(t,n,r);cn=(t.flags&131072)!==0}else cn=!1,Et&&(n.flags&1048576)!==0&&pm(n,vo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Mr(n.elementType),n.type=t,typeof t=="function")Yu(t)?(o=Rr(t,o),n.tag=1,n=Ug(null,n,t,o,r)):(n.tag=0,n=zf(null,n,t,o,r));else{if(t!=null){var u=t.$$typeof;if(u===D){n.tag=11,n=Mg(null,n,t,o,r);break e}else if(u===B){n.tag=14,n=Tg(null,n,t,o,r);break e}}throw n=_e(t)||t,Error(s(306,n,""))}}return n;case 0:return zf(t,n,n.type,n.pendingProps,r);case 1:return o=n.type,u=Rr(o,n.pendingProps),Ug(t,n,o,u,r);case 3:e:{if(ze(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,uf(t,n),To(n,o,null,r);var y=n.memoizedState;if(o=y.cache,Ba(n,on,o),o!==h.cache&&af(n,[on],r,!0),Mo(),o=y.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Ng(t,n,o,r);break e}else if(o!==u){u=mi(Error(s(424)),n),_o(u),n=Ng(t,n,o,r);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Yt=yi(t.firstChild),Tn=n,Et=!0,Oa=null,_i=!0,r=wm(n,null,o,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(yr(),o===u){n=ca(t,n,r);break e}wn(t,n,o,r)}n=n.child}return n;case 26:return tc(t,n),t===null?(r=qv(n.type,null,n.pendingProps,null))?n.memoizedState=r:Et||(r=n.type,t=n.pendingProps,o=_c(Me.current).createElement(r),o[en]=n,o[bn]=t,Rn(o,r,t),j(o),n.stateNode=o):n.memoizedState=qv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ke(n),t===null&&Et&&(o=n.stateNode=jv(n.type,n.pendingProps,Me.current),Tn=n,_i=!0,u=Yt,Za(n.type)?(bh=u,Yt=yi(o.firstChild)):Yt=u),wn(t,n,n.pendingProps.children,r),tc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Et&&((u=o=Yt)&&(o=pS(o,n.type,n.pendingProps,_i),o!==null?(n.stateNode=o,Tn=n,Yt=yi(o.firstChild),_i=!1,u=!0):u=!1),u||Pa(n)),Ke(n),u=n.type,h=n.pendingProps,y=t!==null?t.memoizedProps:null,o=h.children,_h(u,h)?o=null:y!==null&&_h(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=vf(t,n,Cy,null,null,r),Xo._currentValue=u),tc(t,n),wn(t,n,o,r),n.child;case 6:return t===null&&Et&&((t=r=Yt)&&(r=mS(r,n.pendingProps,_i),r!==null?(n.stateNode=r,Tn=n,Yt=null,t=!0):t=!1),t||Pa(n)),null;case 13:return Lg(t,n,r);case 4:return ze(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Ar(n,null,o,r):wn(t,n,o,r),n.child;case 11:return Mg(t,n,n.type,n.pendingProps,r);case 7:return wn(t,n,n.pendingProps,r),n.child;case 8:return wn(t,n,n.pendingProps.children,r),n.child;case 12:return wn(t,n,n.pendingProps.children,r),n.child;case 10:return o=n.pendingProps,Ba(n,n.type,o.value),wn(t,n,o.children,r),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Er(n),u=An(u),o=o(u),n.flags|=1,wn(t,n,o,r),n.child;case 14:return Tg(t,n,n.type,n.pendingProps,r);case 15:return Ag(t,n,n.type,n.pendingProps,r);case 19:return Pg(t,n,r);case 31:return zy(t,n,r);case 22:return wg(t,n,r,n.pendingProps);case 24:return Er(n),o=An(on),t===null?(u=of(),u===null&&(u=Xt,h=rf(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=r),u=h),n.memoizedState={parent:o,cache:u},cf(n),Ba(n,on,u)):((t.lanes&r)!==0&&(uf(t,n),To(n,null,null,r),Mo()),u=t.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ba(n,on,o)):(o=h.cache,Ba(n,on,o),o!==u.cache&&af(n,[on],r,!0))),wn(t,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ua(t){t.flags|=4}function Xf(t,n,r,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(cv())t.flags|=8192;else throw Tr=Hl,lf}else t.flags&=-16777217}function zg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Jv(n))if(cv())t.flags|=8192;else throw Tr=Hl,lf}function ic(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?dn():536870912,t.lanes|=n,_s|=n)}function Uo(t,n){if(!Et)switch(t.tailMode){case"hidden":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Zt(t){var n=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(n)for(var u=t.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=r,n}function Fy(t,n,r){var o=n.pendingProps;switch(Ju(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(n),null;case 1:return Zt(n),null;case 3:return r=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),sa(on),Ye(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(rs(n)?ua(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ef())),Zt(n),null;case 26:var u=n.type,h=n.memoizedState;return t===null?(ua(n),h!==null?(Zt(n),zg(n,h)):(Zt(n),Xf(n,u,null,o,r))):h?h!==t.memoizedState?(ua(n),Zt(n),zg(n,h)):(Zt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ua(n),Zt(n),Xf(n,u,t,o,r)),null;case 27:if(Wt(n),r=Me.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ua(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Zt(n),null}t=Z.current,rs(n)?gm(n):(t=jv(u,o,r),n.stateNode=t,ua(n))}return Zt(n),null;case 5:if(Wt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ua(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Zt(n),null}if(h=Z.current,rs(n))gm(n);else{var y=_c(Me.current);switch(h){case 1:h=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=y.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}h[en]=n,h[bn]=o;e:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)h.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=h;e:switch(Rn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ua(n)}}return Zt(n),Xf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,r),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ua(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=Me.current,rs(n)){if(t=n.stateNode,r=n.memoizedProps,o=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[en]=n,t=!!(t.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||Lv(t.nodeValue,r)),t||Pa(n,!0)}else t=_c(t).createTextNode(o),t[en]=n,n.stateNode=t}return Zt(n),null;case 31:if(r=n.memoizedState,t===null||t.memoizedState!==null){if(o=rs(n),r!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[en]=n}else yr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),t=!1}else r=ef(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return n.flags&256?(ri(n),n):(ri(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Zt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=rs(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[en]=n}else yr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),u=!1}else u=ef(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ri(n),n):(ri(n),null)}return ri(n),(n.flags&128)!==0?(n.lanes=r,n):(r=o!==null,t=t!==null&&t.memoizedState!==null,r&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),r!==t&&r&&(n.child.flags|=8192),ic(n,n.updateQueue),Zt(n),null);case 4:return Ye(),t===null&&dh(n.stateNode.containerInfo),Zt(n),null;case 10:return sa(n.type),Zt(n),null;case 19:if(ne(rn),o=n.memoizedState,o===null)return Zt(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)Uo(o,!1);else{if(an!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=jl(t),h!==null){for(n.flags|=128,Uo(o,!1),t=h.updateQueue,n.updateQueue=t,ic(n,t),n.subtreeFlags=0,t=r,r=n.child;r!==null;)fm(r,t),r=r.sibling;return Se(rn,rn.current&1|2),Et&&aa(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&he()>lc&&(n.flags|=128,u=!0,Uo(o,!1),n.lanes=4194304)}else{if(!u)if(t=jl(h),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,ic(n,t),Uo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Et)return Zt(n),null}else 2*he()-o.renderingStartTime>lc&&r!==536870912&&(n.flags|=128,u=!0,Uo(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(t=o.last,t!==null?t.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=he(),t.sibling=null,r=rn.current,Se(rn,u?r&1|2:r&1),Et&&aa(n,o.treeForkCount),t):(Zt(n),null);case 22:case 23:return ri(n),pf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(r&536870912)!==0&&(n.flags&128)===0&&(Zt(n),n.subtreeFlags&6&&(n.flags|=8192)):Zt(n),r=n.updateQueue,r!==null&&ic(n,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048),t!==null&&ne(br),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),sa(on),Zt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Hy(t,n){switch(Ju(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return sa(on),Ye(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Wt(n),null;case 31:if(n.memoizedState!==null){if(ri(n),n.alternate===null)throw Error(s(340));yr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ri(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));yr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ne(rn),null;case 4:return Ye(),null;case 10:return sa(n.type),null;case 22:case 23:return ri(n),pf(),t!==null&&ne(br),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return sa(on),null;case 25:return null;default:return null}}function Ig(t,n){switch(Ju(n),n.tag){case 3:sa(on),Ye();break;case 26:case 27:case 5:Wt(n);break;case 4:Ye();break;case 31:n.memoizedState!==null&&ri(n);break;case 13:ri(n);break;case 19:ne(rn);break;case 10:sa(n.type);break;case 22:case 23:ri(n),pf(),t!==null&&ne(br);break;case 24:sa(on)}}function No(t,n){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var u=o.next;r=u;do{if((r.tag&t)===t){o=void 0;var h=r.create,y=r.inst;o=h(),y.destroy=o}r=r.next}while(r!==u)}}catch(A){Pt(n,n.return,A)}}function Va(t,n,r){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&t)===t){var y=o.inst,A=y.destroy;if(A!==void 0){y.destroy=void 0,u=n;var I=r,$=A;try{$()}catch(fe){Pt(u,I,fe)}}}o=o.next}while(o!==h)}}catch(fe){Pt(n,n.return,fe)}}function Fg(t){var n=t.updateQueue;if(n!==null){var r=t.stateNode;try{Cm(n,r)}catch(o){Pt(t,t.return,o)}}}function Hg(t,n,r){r.props=Rr(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(o){Pt(t,n,o)}}function Lo(t,n){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof r=="function"?t.refCleanup=r(o):r.current=o}}catch(u){Pt(t,n,u)}}function Vi(t,n){var r=t.ref,o=t.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(u){Pt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){Pt(t,n,u)}else r.current=null}function Gg(t){var n=t.type,r=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break e;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(u){Pt(t,t.return,u)}}function Wf(t,n,r){try{var o=t.stateNode;lS(o,t.type,r,n),o[bn]=n}catch(u){Pt(t,t.return,u)}}function Vg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Za(t.type)||t.tag===4}function qf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Vg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Za(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yf(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(t),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=ta));else if(o!==4&&(o===27&&Za(t.type)&&(r=t.stateNode,n=null),t=t.child,t!==null))for(Yf(t,n,r),t=t.sibling;t!==null;)Yf(t,n,r),t=t.sibling}function ac(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(o!==4&&(o===27&&Za(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(ac(t,n,r),t=t.sibling;t!==null;)ac(t,n,r),t=t.sibling}function kg(t){var n=t.stateNode,r=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Rn(n,o,r),n[en]=t,n[bn]=r}catch(h){Pt(t,t.return,h)}}var fa=!1,un=!1,Zf=!1,jg=typeof WeakSet=="function"?WeakSet:Set,xn=null;function Gy(t,n){if(t=t.containerInfo,gh=Tc,t=nm(t),Gu(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{r.nodeType,h.nodeType}catch{r=null;break e}var y=0,A=-1,I=-1,$=0,fe=0,ve=t,ee=null;t:for(;;){for(var se;ve!==r||u!==0&&ve.nodeType!==3||(A=y+u),ve!==h||o!==0&&ve.nodeType!==3||(I=y+o),ve.nodeType===3&&(y+=ve.nodeValue.length),(se=ve.firstChild)!==null;)ee=ve,ve=se;for(;;){if(ve===t)break t;if(ee===r&&++$===u&&(A=y),ee===h&&++fe===o&&(I=y),(se=ve.nextSibling)!==null)break;ve=ee,ee=ve.parentNode}ve=se}r=A===-1||I===-1?null:{start:A,end:I}}else r=null}r=r||{start:0,end:0}}else r=null;for(vh={focusedElem:t,selectionRange:r},Tc=!1,xn=n;xn!==null;)if(n=xn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,xn=t;else for(;xn!==null;){switch(n=xn,h=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)u=t[r],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,r=n,u=h.memoizedProps,h=h.memoizedState,o=r.stateNode;try{var Fe=Rr(r.type,u);t=o.getSnapshotBeforeUpdate(Fe,h),o.__reactInternalSnapshotBeforeUpdate=t}catch(Je){Pt(r,r.return,Je)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,r=t.nodeType,r===9)yh(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":yh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,xn=t;break}xn=n.return}}function Xg(t,n,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:da(t,r),o&4&&No(5,r);break;case 1:if(da(t,r),o&4)if(t=r.stateNode,n===null)try{t.componentDidMount()}catch(y){Pt(r,r.return,y)}else{var u=Rr(r.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){Pt(r,r.return,y)}}o&64&&Fg(r),o&512&&Lo(r,r.return);break;case 3:if(da(t,r),o&64&&(t=r.updateQueue,t!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{Cm(t,n)}catch(y){Pt(r,r.return,y)}}break;case 27:n===null&&o&4&&kg(r);case 26:case 5:da(t,r),n===null&&o&4&&Gg(r),o&512&&Lo(r,r.return);break;case 12:da(t,r);break;case 31:da(t,r),o&4&&Yg(t,r);break;case 13:da(t,r),o&4&&Zg(t,r),o&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=Ky.bind(null,r),gS(t,r))));break;case 22:if(o=r.memoizedState!==null||fa,!o){n=n!==null&&n.memoizedState!==null||un,u=fa;var h=un;fa=o,(un=n)&&!h?pa(t,r,(r.subtreeFlags&8772)!==0):da(t,r),fa=u,un=h}break;case 30:break;default:da(t,r)}}function Wg(t){var n=t.alternate;n!==null&&(t.alternate=null,Wg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&so(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Qt=null,qn=!1;function ha(t,n,r){for(r=r.child;r!==null;)qg(t,n,r),r=r.sibling}function qg(t,n,r){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(Ze,r)}catch{}switch(r.tag){case 26:un||Vi(r,n),ha(t,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:un||Vi(r,n);var o=Qt,u=qn;Za(r.type)&&(Qt=r.stateNode,qn=!1),ha(t,n,r),Vo(r.stateNode),Qt=o,qn=u;break;case 5:un||Vi(r,n);case 6:if(o=Qt,u=qn,Qt=null,ha(t,n,r),Qt=o,qn=u,Qt!==null)if(qn)try{(Qt.nodeType===9?Qt.body:Qt.nodeName==="HTML"?Qt.ownerDocument.body:Qt).removeChild(r.stateNode)}catch(h){Pt(r,n,h)}else try{Qt.removeChild(r.stateNode)}catch(h){Pt(r,n,h)}break;case 18:Qt!==null&&(qn?(t=Qt,Fv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),As(t)):Fv(Qt,r.stateNode));break;case 4:o=Qt,u=qn,Qt=r.stateNode.containerInfo,qn=!0,ha(t,n,r),Qt=o,qn=u;break;case 0:case 11:case 14:case 15:Va(2,r,n),un||Va(4,r,n),ha(t,n,r);break;case 1:un||(Vi(r,n),o=r.stateNode,typeof o.componentWillUnmount=="function"&&Hg(r,n,o)),ha(t,n,r);break;case 21:ha(t,n,r);break;case 22:un=(o=un)||r.memoizedState!==null,ha(t,n,r),un=o;break;default:ha(t,n,r)}}function Yg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{As(t)}catch(r){Pt(n,n.return,r)}}}function Zg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{As(t)}catch(r){Pt(n,n.return,r)}}function Vy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new jg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new jg),n;default:throw Error(s(435,t.tag))}}function rc(t,n){var r=Vy(t);n.forEach(function(o){if(!r.has(o)){r.add(o);var u=Qy.bind(null,t,o);o.then(u,u)}})}function Yn(t,n){var r=n.deletions;if(r!==null)for(var o=0;o<r.length;o++){var u=r[o],h=t,y=n,A=y;e:for(;A!==null;){switch(A.tag){case 27:if(Za(A.type)){Qt=A.stateNode,qn=!1;break e}break;case 5:Qt=A.stateNode,qn=!1;break e;case 3:case 4:Qt=A.stateNode.containerInfo,qn=!0;break e}A=A.return}if(Qt===null)throw Error(s(160));qg(h,y,u),Qt=null,qn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Kg(n,t),n=n.sibling}var Ci=null;function Kg(t,n){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Yn(n,t),Zn(t),o&4&&(Va(3,t,t.return),No(3,t),Va(5,t,t.return));break;case 1:Yn(n,t),Zn(t),o&512&&(un||r===null||Vi(r,r.return)),o&64&&fa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var u=Ci;if(Yn(n,t),Zn(t),o&512&&(un||r===null||Vi(r,r.return)),o&4){var h=r!==null?r.memoizedState:null;if(o=t.memoizedState,r===null)if(o===null)if(t.stateNode===null){e:{o=t.type,r=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[pr]||h[en]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Rn(h,o,r),h[en]=t,j(h),o=h;break e;case"link":var y=Kv("link","href",u).get(o+(r.href||""));if(y){for(var A=0;A<y.length;A++)if(h=y[A],h.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&h.getAttribute("rel")===(r.rel==null?null:r.rel)&&h.getAttribute("title")===(r.title==null?null:r.title)&&h.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){y.splice(A,1);break t}}h=u.createElement(o),Rn(h,o,r),u.head.appendChild(h);break;case"meta":if(y=Kv("meta","content",u).get(o+(r.content||""))){for(A=0;A<y.length;A++)if(h=y[A],h.getAttribute("content")===(r.content==null?null:""+r.content)&&h.getAttribute("name")===(r.name==null?null:r.name)&&h.getAttribute("property")===(r.property==null?null:r.property)&&h.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&h.getAttribute("charset")===(r.charSet==null?null:r.charSet)){y.splice(A,1);break t}}h=u.createElement(o),Rn(h,o,r),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[en]=t,j(h),o=h}t.stateNode=o}else Qv(u,t.type,t.stateNode);else t.stateNode=Zv(u,o,t.memoizedProps);else h!==o?(h===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):h.count--,o===null?Qv(u,t.type,t.stateNode):Zv(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Wf(t,t.memoizedProps,r.memoizedProps)}break;case 27:Yn(n,t),Zn(t),o&512&&(un||r===null||Vi(r,r.return)),r!==null&&o&4&&Wf(t,t.memoizedProps,r.memoizedProps);break;case 5:if(Yn(n,t),Zn(t),o&512&&(un||r===null||Vi(r,r.return)),t.flags&32){u=t.stateNode;try{Xn(u,"")}catch(Fe){Pt(t,t.return,Fe)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Wf(t,u,r!==null?r.memoizedProps:u)),o&1024&&(Zf=!0);break;case 6:if(Yn(n,t),Zn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,r=t.stateNode;try{r.nodeValue=o}catch(Fe){Pt(t,t.return,Fe)}}break;case 3:if(Sc=null,u=Ci,Ci=xc(n.containerInfo),Yn(n,t),Ci=u,Zn(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{As(n.containerInfo)}catch(Fe){Pt(t,t.return,Fe)}Zf&&(Zf=!1,Qg(t));break;case 4:o=Ci,Ci=xc(t.stateNode.containerInfo),Yn(n,t),Zn(t),Ci=o;break;case 12:Yn(n,t),Zn(t);break;case 31:Yn(n,t),Zn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,rc(t,o)));break;case 13:Yn(n,t),Zn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(oc=he()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,rc(t,o)));break;case 22:u=t.memoizedState!==null;var I=r!==null&&r.memoizedState!==null,$=fa,fe=un;if(fa=$||u,un=fe||I,Yn(n,t),un=fe,fa=$,Zn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(r===null||I||fa||un||Cr(t)),r=null,n=t;;){if(n.tag===5||n.tag===26){if(r===null){I=r=n;try{if(h=I.stateNode,u)y=h.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{A=I.stateNode;var ve=I.memoizedProps.style,ee=ve!=null&&ve.hasOwnProperty("display")?ve.display:null;A.style.display=ee==null||typeof ee=="boolean"?"":(""+ee).trim()}}catch(Fe){Pt(I,I.return,Fe)}}}else if(n.tag===6){if(r===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(Fe){Pt(I,I.return,Fe)}}}else if(n.tag===18){if(r===null){I=n;try{var se=I.stateNode;u?Hv(se,!0):Hv(I.stateNode,!1)}catch(Fe){Pt(I,I.return,Fe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,rc(t,r))));break;case 19:Yn(n,t),Zn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,rc(t,o)));break;case 30:break;case 21:break;default:Yn(n,t),Zn(t)}}function Zn(t){var n=t.flags;if(n&2){try{for(var r,o=t.return;o!==null;){if(Vg(o)){r=o;break}o=o.return}if(r==null)throw Error(s(160));switch(r.tag){case 27:var u=r.stateNode,h=qf(t);ac(t,h,u);break;case 5:var y=r.stateNode;r.flags&32&&(Xn(y,""),r.flags&=-33);var A=qf(t);ac(t,A,y);break;case 3:case 4:var I=r.stateNode.containerInfo,$=qf(t);Yf(t,$,I);break;default:throw Error(s(161))}}catch(fe){Pt(t,t.return,fe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Qg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Qg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function da(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Xg(t,n.alternate,n),n=n.sibling}function Cr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Va(4,n,n.return),Cr(n);break;case 1:Vi(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&Hg(n,n.return,r),Cr(n);break;case 27:Vo(n.stateNode);case 26:case 5:Vi(n,n.return),Cr(n);break;case 22:n.memoizedState===null&&Cr(n);break;case 30:Cr(n);break;default:Cr(n)}t=t.sibling}}function pa(t,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,h=n,y=h.flags;switch(h.tag){case 0:case 11:case 15:pa(u,h,r),No(4,h);break;case 1:if(pa(u,h,r),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch($){Pt(o,o.return,$)}if(o=h,u=o.updateQueue,u!==null){var A=o.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)Rm(I[u],A)}catch($){Pt(o,o.return,$)}}r&&y&64&&Fg(h),Lo(h,h.return);break;case 27:kg(h);case 26:case 5:pa(u,h,r),r&&o===null&&y&4&&Gg(h),Lo(h,h.return);break;case 12:pa(u,h,r);break;case 31:pa(u,h,r),r&&y&4&&Yg(u,h);break;case 13:pa(u,h,r),r&&y&4&&Zg(u,h);break;case 22:h.memoizedState===null&&pa(u,h,r),Lo(h,h.return);break;case 30:break;default:pa(u,h,r)}n=n.sibling}}function Kf(t,n){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&xo(r))}function Qf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&xo(t))}function Di(t,n,r,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Jg(t,n,r,o),n=n.sibling}function Jg(t,n,r,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Di(t,n,r,o),u&2048&&No(9,n);break;case 1:Di(t,n,r,o);break;case 3:Di(t,n,r,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&xo(t)));break;case 12:if(u&2048){Di(t,n,r,o),t=n.stateNode;try{var h=n.memoizedProps,y=h.id,A=h.onPostCommit;typeof A=="function"&&A(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){Pt(n,n.return,I)}}else Di(t,n,r,o);break;case 31:Di(t,n,r,o);break;case 13:Di(t,n,r,o);break;case 23:break;case 22:h=n.stateNode,y=n.alternate,n.memoizedState!==null?h._visibility&2?Di(t,n,r,o):Oo(t,n):h._visibility&2?Di(t,n,r,o):(h._visibility|=2,ms(t,n,r,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Kf(y,n);break;case 24:Di(t,n,r,o),u&2048&&Qf(n.alternate,n);break;default:Di(t,n,r,o)}}function ms(t,n,r,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=t,y=n,A=r,I=o,$=y.flags;switch(y.tag){case 0:case 11:case 15:ms(h,y,A,I,u),No(8,y);break;case 23:break;case 22:var fe=y.stateNode;y.memoizedState!==null?fe._visibility&2?ms(h,y,A,I,u):Oo(h,y):(fe._visibility|=2,ms(h,y,A,I,u)),u&&$&2048&&Kf(y.alternate,y);break;case 24:ms(h,y,A,I,u),u&&$&2048&&Qf(y.alternate,y);break;default:ms(h,y,A,I,u)}n=n.sibling}}function Oo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=t,o=n,u=o.flags;switch(o.tag){case 22:Oo(r,o),u&2048&&Kf(o.alternate,o);break;case 24:Oo(r,o),u&2048&&Qf(o.alternate,o);break;default:Oo(r,o)}n=n.sibling}}var Po=8192;function gs(t,n,r){if(t.subtreeFlags&Po)for(t=t.child;t!==null;)$g(t,n,r),t=t.sibling}function $g(t,n,r){switch(t.tag){case 26:gs(t,n,r),t.flags&Po&&t.memoizedState!==null&&RS(r,Ci,t.memoizedState,t.memoizedProps);break;case 5:gs(t,n,r);break;case 3:case 4:var o=Ci;Ci=xc(t.stateNode.containerInfo),gs(t,n,r),Ci=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Po,Po=16777216,gs(t,n,r),Po=o):gs(t,n,r));break;default:gs(t,n,r)}}function ev(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Bo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];xn=o,nv(o,t)}ev(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)tv(t),t=t.sibling}function tv(t){switch(t.tag){case 0:case 11:case 15:Bo(t),t.flags&2048&&Va(9,t,t.return);break;case 3:Bo(t);break;case 12:Bo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,sc(t)):Bo(t);break;default:Bo(t)}}function sc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];xn=o,nv(o,t)}ev(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Va(8,n,n.return),sc(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,sc(n));break;default:sc(n)}t=t.sibling}}function nv(t,n){for(;xn!==null;){var r=xn;switch(r.tag){case 0:case 11:case 15:Va(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:xo(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,xn=o;else e:for(r=t;xn!==null;){o=xn;var u=o.sibling,h=o.return;if(Wg(o),o===r){xn=null;break e}if(u!==null){u.return=h,xn=u;break e}xn=h}}}var ky={getCacheForType:function(t){var n=An(on),r=n.data.get(t);return r===void 0&&(r=t(),n.data.set(t,r)),r},cacheSignal:function(){return An(on).controller.signal}},jy=typeof WeakMap=="function"?WeakMap:Map,Ut=0,Xt=null,pt=null,vt=0,Ot=0,si=null,ka=!1,vs=!1,Jf=!1,ma=0,an=0,ja=0,Dr=0,$f=0,oi=0,_s=0,zo=null,Kn=null,eh=!1,oc=0,iv=0,lc=1/0,cc=null,Xa=null,mn=0,Wa=null,xs=null,ga=0,th=0,nh=null,av=null,Io=0,ih=null;function li(){return(Ut&2)!==0&&vt!==0?vt&-vt:z.T!==null?ch():ao()}function rv(){if(oi===0)if((vt&536870912)===0||Et){var t=ce;ce<<=1,(ce&3932160)===0&&(ce=262144),oi=t}else oi=536870912;return t=ai.current,t!==null&&(t.flags|=32),oi}function Qn(t,n,r){(t===Xt&&(Ot===2||Ot===9)||t.cancelPendingCommit!==null)&&(ys(t,0),qa(t,vt,oi,!1)),En(t,r),((Ut&2)===0||t!==Xt)&&(t===Xt&&((Ut&2)===0&&(Dr|=r),an===4&&qa(t,vt,oi,!1)),ki(t))}function sv(t,n,r){if((Ut&6)!==0)throw Error(s(327));var o=!r&&(n&127)===0&&(n&t.expiredLanes)===0||nt(t,n),u=o?qy(t,n):rh(t,n,!0),h=o;do{if(u===0){vs&&!o&&qa(t,n,0,!1);break}else{if(r=t.current.alternate,h&&!Xy(r)){u=rh(t,n,!1),h=!1;continue}if(u===2){if(h=n,t.errorRecoveryDisabledLanes&h)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var A=t;u=zo;var I=A.current.memoizedState.isDehydrated;if(I&&(ys(A,y).flags|=256),y=rh(A,y,!1),y!==2){if(Jf&&!I){A.errorRecoveryDisabledLanes|=h,Dr|=h,u=4;break e}h=Kn,Kn=u,h!==null&&(Kn===null?Kn=h:Kn.push.apply(Kn,h))}u=y}if(h=!1,u!==2)continue}}if(u===1){ys(t,0),qa(t,n,0,!0);break}e:{switch(o=t,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:qa(o,n,oi,!ka);break e;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=oc+300-he(),10<u)){if(qa(o,n,oi,!ka),Ue(o,0,!0)!==0)break e;ga=n,o.timeoutHandle=zv(ov.bind(null,o,r,Kn,cc,eh,n,oi,Dr,_s,ka,h,"Throttled",-0,0),u);break e}ov(o,r,Kn,cc,eh,n,oi,Dr,_s,ka,h,null,-0,0)}}break}while(!0);ki(t)}function ov(t,n,r,o,u,h,y,A,I,$,fe,ve,ee,se){if(t.timeoutHandle=-1,ve=n.subtreeFlags,ve&8192||(ve&16785408)===16785408){ve={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ta},$g(n,h,ve);var Fe=(h&62914560)===h?oc-he():(h&4194048)===h?iv-he():0;if(Fe=CS(ve,Fe),Fe!==null){ga=h,t.cancelPendingCommit=Fe(mv.bind(null,t,n,h,r,o,u,y,A,I,fe,ve,null,ee,se)),qa(t,h,y,!$);return}}mv(t,n,h,r,o,u,y,A,I)}function Xy(t){for(var n=t;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var u=r[o],h=u.getSnapshot;u=u.value;try{if(!ni(h(),u))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qa(t,n,r,o){n&=~$f,n&=~Dr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var h=31-tt(u),y=1<<h;o[h]=-1,u&=~y}r!==0&&no(t,r,n)}function uc(){return(Ut&6)===0?(Fo(0),!1):!0}function ah(){if(pt!==null){if(Ot===0)var t=pt.return;else t=pt,ra=Sr=null,yf(t),us=null,So=0,t=pt;for(;t!==null;)Ig(t.alternate,t),t=t.return;pt=null}}function ys(t,n){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,fS(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),ga=0,ah(),Xt=t,pt=r=ia(t.current,null),vt=n,Ot=0,si=null,ka=!1,vs=nt(t,n),Jf=!1,_s=oi=$f=Dr=ja=an=0,Kn=zo=null,eh=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-tt(o),h=1<<u;n|=t[u],o&=~h}return ma=n,Ul(),r}function lv(t,n){ot=null,z.H=Co,n===cs||n===Fl?(n=Mm(),Ot=3):n===lf?(n=Mm(),Ot=4):Ot=n===Bf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,si=n,pt===null&&(an=1,$l(t,mi(n,t.current)))}function cv(){var t=ai.current;return t===null?!0:(vt&4194048)===vt?xi===null:(vt&62914560)===vt||(vt&536870912)!==0?t===xi:!1}function uv(){var t=z.H;return z.H=Co,t===null?Co:t}function fv(){var t=z.A;return z.A=ky,t}function fc(){an=4,ka||(vt&4194048)!==vt&&ai.current!==null||(vs=!0),(ja&134217727)===0&&(Dr&134217727)===0||Xt===null||qa(Xt,vt,oi,!1)}function rh(t,n,r){var o=Ut;Ut|=2;var u=uv(),h=fv();(Xt!==t||vt!==n)&&(cc=null,ys(t,n)),n=!1;var y=an;e:do try{if(Ot!==0&&pt!==null){var A=pt,I=si;switch(Ot){case 8:ah(),y=6;break e;case 3:case 2:case 9:case 6:ai.current===null&&(n=!0);var $=Ot;if(Ot=0,si=null,Ss(t,A,I,$),r&&vs){y=0;break e}break;default:$=Ot,Ot=0,si=null,Ss(t,A,I,$)}}Wy(),y=an;break}catch(fe){lv(t,fe)}while(!0);return n&&t.shellSuspendCounter++,ra=Sr=null,Ut=o,z.H=u,z.A=h,pt===null&&(Xt=null,vt=0,Ul()),y}function Wy(){for(;pt!==null;)hv(pt)}function qy(t,n){var r=Ut;Ut|=2;var o=uv(),u=fv();Xt!==t||vt!==n?(cc=null,lc=he()+500,ys(t,n)):vs=nt(t,n);e:do try{if(Ot!==0&&pt!==null){n=pt;var h=si;t:switch(Ot){case 1:Ot=0,si=null,Ss(t,n,h,1);break;case 2:case 9:if(Em(h)){Ot=0,si=null,dv(n);break}n=function(){Ot!==2&&Ot!==9||Xt!==t||(Ot=7),ki(t)},h.then(n,n);break e;case 3:Ot=7;break e;case 4:Ot=5;break e;case 7:Em(h)?(Ot=0,si=null,dv(n)):(Ot=0,si=null,Ss(t,n,h,7));break;case 5:var y=null;switch(pt.tag){case 26:y=pt.memoizedState;case 5:case 27:var A=pt;if(y?Jv(y):A.stateNode.complete){Ot=0,si=null;var I=A.sibling;if(I!==null)pt=I;else{var $=A.return;$!==null?(pt=$,hc($)):pt=null}break t}}Ot=0,si=null,Ss(t,n,h,5);break;case 6:Ot=0,si=null,Ss(t,n,h,6);break;case 8:ah(),an=6;break e;default:throw Error(s(462))}}Yy();break}catch(fe){lv(t,fe)}while(!0);return ra=Sr=null,z.H=o,z.A=u,Ut=r,pt!==null?0:(Xt=null,vt=0,Ul(),an)}function Yy(){for(;pt!==null&&!w();)hv(pt)}function hv(t){var n=Bg(t.alternate,t,ma);t.memoizedProps=t.pendingProps,n===null?hc(t):pt=n}function dv(t){var n=t,r=n.alternate;switch(n.tag){case 15:case 0:n=Dg(r,n,n.pendingProps,n.type,void 0,vt);break;case 11:n=Dg(r,n,n.pendingProps,n.type.render,n.ref,vt);break;case 5:yf(n);default:Ig(r,n),n=pt=fm(n,ma),n=Bg(r,n,ma)}t.memoizedProps=t.pendingProps,n===null?hc(t):pt=n}function Ss(t,n,r,o){ra=Sr=null,yf(n),us=null,So=0;var u=n.return;try{if(By(t,u,n,r,vt)){an=1,$l(t,mi(r,t.current)),pt=null;return}}catch(h){if(u!==null)throw pt=u,h;an=1,$l(t,mi(r,t.current)),pt=null;return}n.flags&32768?(Et||o===1?t=!0:vs||(vt&536870912)!==0?t=!1:(ka=t=!0,(o===2||o===9||o===3||o===6)&&(o=ai.current,o!==null&&o.tag===13&&(o.flags|=16384))),pv(n,t)):hc(n)}function hc(t){var n=t;do{if((n.flags&32768)!==0){pv(n,ka);return}t=n.return;var r=Fy(n.alternate,n,ma);if(r!==null){pt=r;return}if(n=n.sibling,n!==null){pt=n;return}pt=n=t}while(n!==null);an===0&&(an=5)}function pv(t,n){do{var r=Hy(t.alternate,t);if(r!==null){r.flags&=32767,pt=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(t=t.sibling,t!==null)){pt=t;return}pt=t=r}while(t!==null);an=6,pt=null}function mv(t,n,r,o,u,h,y,A,I){t.cancelPendingCommit=null;do dc();while(mn!==0);if((Ut&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=Wu,Ti(t,r,h,y,A,I),t===Xt&&(pt=Xt=null,vt=0),xs=n,Wa=t,ga=r,th=h,nh=u,av=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Jy(Ce,function(){return yv(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,u=Q.p,Q.p=2,y=Ut,Ut|=4;try{Gy(t,n,r)}finally{Ut=y,Q.p=u,z.T=o}}mn=1,gv(),vv(),_v()}}function gv(){if(mn===1){mn=0;var t=Wa,n=xs,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=z.T,z.T=null;var o=Q.p;Q.p=2;var u=Ut;Ut|=4;try{Kg(n,t);var h=vh,y=nm(t.containerInfo),A=h.focusedElem,I=h.selectionRange;if(y!==A&&A&&A.ownerDocument&&tm(A.ownerDocument.documentElement,A)){if(I!==null&&Gu(A)){var $=I.start,fe=I.end;if(fe===void 0&&(fe=$),"selectionStart"in A)A.selectionStart=$,A.selectionEnd=Math.min(fe,A.value.length);else{var ve=A.ownerDocument||document,ee=ve&&ve.defaultView||window;if(ee.getSelection){var se=ee.getSelection(),Fe=A.textContent.length,Je=Math.min(I.start,Fe),Vt=I.end===void 0?Je:Math.min(I.end,Fe);!se.extend&&Je>Vt&&(y=Vt,Vt=Je,Je=y);var q=em(A,Je),G=em(A,Vt);if(q&&G&&(se.rangeCount!==1||se.anchorNode!==q.node||se.anchorOffset!==q.offset||se.focusNode!==G.node||se.focusOffset!==G.offset)){var J=ve.createRange();J.setStart(q.node,q.offset),se.removeAllRanges(),Je>Vt?(se.addRange(J),se.extend(G.node,G.offset)):(J.setEnd(G.node,G.offset),se.addRange(J))}}}}for(ve=[],se=A;se=se.parentNode;)se.nodeType===1&&ve.push({element:se,left:se.scrollLeft,top:se.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<ve.length;A++){var me=ve[A];me.element.scrollLeft=me.left,me.element.scrollTop=me.top}}Tc=!!gh,vh=gh=null}finally{Ut=u,Q.p=o,z.T=r}}t.current=n,mn=2}}function vv(){if(mn===2){mn=0;var t=Wa,n=xs,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=z.T,z.T=null;var o=Q.p;Q.p=2;var u=Ut;Ut|=4;try{Xg(t,n.alternate,n)}finally{Ut=u,Q.p=o,z.T=r}}mn=3}}function _v(){if(mn===4||mn===3){mn=0,te();var t=Wa,n=xs,r=ga,o=av;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,xs=Wa=null,xv(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Xa=null),Yr(r),n=n.stateNode,Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(Ze,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,u=Q.p,Q.p=2,z.T=null;try{for(var h=t.onRecoverableError,y=0;y<o.length;y++){var A=o[y];h(A.value,{componentStack:A.stack})}}finally{z.T=n,Q.p=u}}(ga&3)!==0&&dc(),ki(t),u=t.pendingLanes,(r&261930)!==0&&(u&42)!==0?t===ih?Io++:(Io=0,ih=t):Io=0,Fo(0)}}function xv(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,xo(n)))}function dc(){return gv(),vv(),_v(),yv()}function yv(){if(mn!==5)return!1;var t=Wa,n=th;th=0;var r=Yr(ga),o=z.T,u=Q.p;try{Q.p=32>r?32:r,z.T=null,r=nh,nh=null;var h=Wa,y=ga;if(mn=0,xs=Wa=null,ga=0,(Ut&6)!==0)throw Error(s(331));var A=Ut;if(Ut|=4,tv(h.current),Jg(h,h.current,y,r),Ut=A,Fo(0,!1),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(Ze,h)}catch{}return!0}finally{Q.p=u,z.T=o,xv(t,n)}}function Sv(t,n,r){n=mi(r,n),n=Pf(t.stateNode,n,2),t=Fa(t,n,2),t!==null&&(En(t,2),ki(t))}function Pt(t,n,r){if(t.tag===3)Sv(t,t,r);else for(;n!==null;){if(n.tag===3){Sv(n,t,r);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Xa===null||!Xa.has(o))){t=mi(r,t),r=Eg(2),o=Fa(n,r,2),o!==null&&(bg(r,o,n,t),En(o,2),ki(o));break}}n=n.return}}function sh(t,n,r){var o=t.pingCache;if(o===null){o=t.pingCache=new jy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(r)||(Jf=!0,u.add(r),t=Zy.bind(null,t,n,r),n.then(t,t))}function Zy(t,n,r){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,Xt===t&&(vt&r)===r&&(an===4||an===3&&(vt&62914560)===vt&&300>he()-oc?(Ut&2)===0&&ys(t,0):$f|=r,_s===vt&&(_s=0)),ki(t)}function Ev(t,n){n===0&&(n=dn()),t=_r(t,n),t!==null&&(En(t,n),ki(t))}function Ky(t){var n=t.memoizedState,r=0;n!==null&&(r=n.retryLane),Ev(t,r)}function Qy(t,n){var r=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(r=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Ev(t,r)}function Jy(t,n){return ke(t,n)}var pc=null,Es=null,oh=!1,mc=!1,lh=!1,Ya=0;function ki(t){t!==Es&&t.next===null&&(Es===null?pc=Es=t:Es=Es.next=t),mc=!0,oh||(oh=!0,eS())}function Fo(t,n){if(!lh&&mc){lh=!0;do for(var r=!1,o=pc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var y=o.suspendedLanes,A=o.pingedLanes;h=(1<<31-tt(42|t)+1)-1,h&=u&~(y&~A),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(r=!0,Av(o,h))}else h=vt,h=Ue(o,o===Xt?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||nt(o,h)||(r=!0,Av(o,h));o=o.next}while(r);lh=!1}}function $y(){bv()}function bv(){mc=oh=!1;var t=0;Ya!==0&&uS()&&(t=Ya);for(var n=he(),r=null,o=pc;o!==null;){var u=o.next,h=Mv(o,n);h===0?(o.next=null,r===null?pc=u:r.next=u,u===null&&(Es=r)):(r=o,(t!==0||(h&3)!==0)&&(mc=!0)),o=u}mn!==0&&mn!==5||Fo(t),Ya!==0&&(Ya=0)}function Mv(t,n){for(var r=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var y=31-tt(h),A=1<<y,I=u[y];I===-1?((A&r)===0||(A&o)!==0)&&(u[y]=Kt(A,n)):I<=n&&(t.expiredLanes|=A),h&=~A}if(n=Xt,r=vt,r=Ue(t,t===n?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,r===0||t===n&&(Ot===2||Ot===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&O(o),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||nt(t,r)){if(n=r&-r,n===t.callbackPriority)return n;switch(o!==null&&O(o),Yr(r)){case 2:case 8:r=Ge;break;case 32:r=Ce;break;case 268435456:r=$e;break;default:r=Ce}return o=Tv.bind(null,t),r=ke(r,o),t.callbackPriority=n,t.callbackNode=r,n}return o!==null&&o!==null&&O(o),t.callbackPriority=2,t.callbackNode=null,2}function Tv(t,n){if(mn!==0&&mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(dc()&&t.callbackNode!==r)return null;var o=vt;return o=Ue(t,t===Xt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(sv(t,o,n),Mv(t,he()),t.callbackNode!=null&&t.callbackNode===r?Tv.bind(null,t):null)}function Av(t,n){if(dc())return null;sv(t,n,!0)}function eS(){hS(function(){(Ut&6)!==0?ke(ge,$y):bv()})}function ch(){if(Ya===0){var t=os;t===0&&(t=De,De<<=1,(De&261888)===0&&(De=256)),Ya=t}return Ya}function wv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:bl(""+t)}function Rv(t,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,t.id&&r.setAttribute("form",t.id),n.parentNode.insertBefore(r,n),t=new FormData(t),r.parentNode.removeChild(r),t}function tS(t,n,r,o,u){if(n==="submit"&&r&&r.stateNode===u){var h=wv((u[bn]||null).action),y=o.submitter;y&&(n=(n=y[bn]||null)?wv(n.formAction):y.getAttribute("formAction"),n!==null&&(h=n,y=null));var A=new wl("action","action",null,o,u);t.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ya!==0){var I=y?Rv(u,y):new FormData(u);Cf(r,{pending:!0,data:I,method:u.method,action:h},null,I)}}else typeof h=="function"&&(A.preventDefault(),I=y?Rv(u,y):new FormData(u),Cf(r,{pending:!0,data:I,method:u.method,action:h},h,I))},currentTarget:u}]})}}for(var uh=0;uh<Xu.length;uh++){var fh=Xu[uh],nS=fh.toLowerCase(),iS=fh[0].toUpperCase()+fh.slice(1);Ri(nS,"on"+iS)}Ri(rm,"onAnimationEnd"),Ri(sm,"onAnimationIteration"),Ri(om,"onAnimationStart"),Ri("dblclick","onDoubleClick"),Ri("focusin","onFocus"),Ri("focusout","onBlur"),Ri(xy,"onTransitionRun"),Ri(yy,"onTransitionStart"),Ri(Sy,"onTransitionCancel"),Ri(lm,"onTransitionEnd"),Be("onMouseEnter",["mouseout","mouseover"]),Be("onMouseLeave",["mouseout","mouseover"]),Be("onPointerEnter",["pointerout","pointerover"]),Be("onPointerLeave",["pointerout","pointerover"]),Oe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ho));function Cv(t,n){n=(n&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],u=o.event;o=o.listeners;e:{var h=void 0;if(n)for(var y=o.length-1;0<=y;y--){var A=o[y],I=A.instance,$=A.currentTarget;if(A=A.listener,I!==h&&u.isPropagationStopped())break e;h=A,u.currentTarget=$;try{h(u)}catch(fe){Dl(fe)}u.currentTarget=null,h=I}else for(y=0;y<o.length;y++){if(A=o[y],I=A.instance,$=A.currentTarget,A=A.listener,I!==h&&u.isPropagationStopped())break e;h=A,u.currentTarget=$;try{h(u)}catch(fe){Dl(fe)}u.currentTarget=null,h=I}}}}function mt(t,n){var r=n[ro];r===void 0&&(r=n[ro]=new Set);var o=t+"__bubble";r.has(o)||(Dv(n,t,2,!1),r.add(o))}function hh(t,n,r){var o=0;n&&(o|=4),Dv(r,t,o,n)}var gc="_reactListening"+Math.random().toString(36).slice(2);function dh(t){if(!t[gc]){t[gc]=!0,Te.forEach(function(r){r!=="selectionchange"&&(aS.has(r)||hh(r,!1,t),hh(r,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[gc]||(n[gc]=!0,hh("selectionchange",!1,n))}}function Dv(t,n,r,o){switch(r0(n)){case 2:var u=NS;break;case 8:u=LS;break;default:u=Rh}r=u.bind(null,n,r,t),u=void 0,!Nu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,r,{capture:!0,passive:u}):t.addEventListener(n,r,!0):u!==void 0?t.addEventListener(n,r,{passive:u}):t.addEventListener(n,r,!1)}function ph(t,n,r,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var A=o.stateNode.containerInfo;if(A===u)break;if(y===4)for(y=o.return;y!==null;){var I=y.tag;if((I===3||I===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;A!==null;){if(y=R(A),y===null)return;if(I=y.tag,I===5||I===6||I===26||I===27){o=h=y;continue e}A=A.parentNode}}o=o.return}Pp(function(){var $=h,fe=Du(r),ve=[];e:{var ee=cm.get(t);if(ee!==void 0){var se=wl,Fe=t;switch(t){case"keypress":if(Tl(r)===0)break e;case"keydown":case"keyup":se=Qx;break;case"focusin":Fe="focus",se=Bu;break;case"focusout":Fe="blur",se=Bu;break;case"beforeblur":case"afterblur":se=Bu;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Fx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=ey;break;case rm:case sm:case om:se=Vx;break;case lm:se=ny;break;case"scroll":case"scrollend":se=zx;break;case"wheel":se=ay;break;case"copy":case"cut":case"paste":se=jx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=Hp;break;case"toggle":case"beforetoggle":se=sy}var Je=(n&4)!==0,Vt=!Je&&(t==="scroll"||t==="scrollend"),q=Je?ee!==null?ee+"Capture":null:ee;Je=[];for(var G=$,J;G!==null;){var me=G;if(J=me.stateNode,me=me.tag,me!==5&&me!==26&&me!==27||J===null||q===null||(me=oo(G,q),me!=null&&Je.push(Go(G,me,J))),Vt)break;G=G.return}0<Je.length&&(ee=new se(ee,Fe,null,r,fe),ve.push({event:ee,listeners:Je}))}}if((n&7)===0){e:{if(ee=t==="mouseover"||t==="pointerover",se=t==="mouseout"||t==="pointerout",ee&&r!==Cu&&(Fe=r.relatedTarget||r.fromElement)&&(R(Fe)||Fe[ea]))break e;if((se||ee)&&(ee=fe.window===fe?fe:(ee=fe.ownerDocument)?ee.defaultView||ee.parentWindow:window,se?(Fe=r.relatedTarget||r.toElement,se=$,Fe=Fe?R(Fe):null,Fe!==null&&(Vt=c(Fe),Je=Fe.tag,Fe!==Vt||Je!==5&&Je!==27&&Je!==6)&&(Fe=null)):(se=null,Fe=$),se!==Fe)){if(Je=Ip,me="onMouseLeave",q="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Je=Hp,me="onPointerLeave",q="onPointerEnter",G="pointer"),Vt=se==null?ee:ie(se),J=Fe==null?ee:ie(Fe),ee=new Je(me,G+"leave",se,r,fe),ee.target=Vt,ee.relatedTarget=J,me=null,R(fe)===$&&(Je=new Je(q,G+"enter",Fe,r,fe),Je.target=J,Je.relatedTarget=Vt,me=Je),Vt=me,se&&Fe)t:{for(Je=rS,q=se,G=Fe,J=0,me=q;me;me=Je(me))J++;me=0;for(var We=G;We;We=Je(We))me++;for(;0<J-me;)q=Je(q),J--;for(;0<me-J;)G=Je(G),me--;for(;J--;){if(q===G||G!==null&&q===G.alternate){Je=q;break t}q=Je(q),G=Je(G)}Je=null}else Je=null;se!==null&&Uv(ve,ee,se,Je,!1),Fe!==null&&Vt!==null&&Uv(ve,Vt,Fe,Je,!0)}}e:{if(ee=$?ie($):window,se=ee.nodeName&&ee.nodeName.toLowerCase(),se==="select"||se==="input"&&ee.type==="file")var wt=Yp;else if(Wp(ee))if(Zp)wt=gy;else{wt=py;var He=dy}else se=ee.nodeName,!se||se.toLowerCase()!=="input"||ee.type!=="checkbox"&&ee.type!=="radio"?$&&Ru($.elementType)&&(wt=Yp):wt=my;if(wt&&(wt=wt(t,$))){qp(ve,wt,r,fe);break e}He&&He(t,ee,$),t==="focusout"&&$&&ee.type==="number"&&$.memoizedProps.value!=null&&Nn(ee,"number",ee.value)}switch(He=$?ie($):window,t){case"focusin":(Wp(He)||He.contentEditable==="true")&&($r=He,Vu=$,go=null);break;case"focusout":go=Vu=$r=null;break;case"mousedown":ku=!0;break;case"contextmenu":case"mouseup":case"dragend":ku=!1,im(ve,r,fe);break;case"selectionchange":if(_y)break;case"keydown":case"keyup":im(ve,r,fe)}var lt;if(Iu)e:{switch(t){case"compositionstart":var _t="onCompositionStart";break e;case"compositionend":_t="onCompositionEnd";break e;case"compositionupdate":_t="onCompositionUpdate";break e}_t=void 0}else Jr?jp(t,r)&&(_t="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(_t="onCompositionStart");_t&&(Gp&&r.locale!=="ko"&&(Jr||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&Jr&&(lt=Bp()):(Na=fe,Lu="value"in Na?Na.value:Na.textContent,Jr=!0)),He=vc($,_t),0<He.length&&(_t=new Fp(_t,t,null,r,fe),ve.push({event:_t,listeners:He}),lt?_t.data=lt:(lt=Xp(r),lt!==null&&(_t.data=lt)))),(lt=ly?cy(t,r):uy(t,r))&&(_t=vc($,"onBeforeInput"),0<_t.length&&(He=new Fp("onBeforeInput","beforeinput",null,r,fe),ve.push({event:He,listeners:_t}),He.data=lt)),tS(ve,t,$,r,fe)}Cv(ve,n)})}function Go(t,n,r){return{instance:t,listener:n,currentTarget:r}}function vc(t,n){for(var r=n+"Capture",o=[];t!==null;){var u=t,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=oo(t,r),u!=null&&o.unshift(Go(t,u,h)),u=oo(t,n),u!=null&&o.push(Go(t,u,h))),t.tag===3)return o;t=t.return}return[]}function rS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Uv(t,n,r,o,u){for(var h=n._reactName,y=[];r!==null&&r!==o;){var A=r,I=A.alternate,$=A.stateNode;if(A=A.tag,I!==null&&I===o)break;A!==5&&A!==26&&A!==27||$===null||(I=$,u?($=oo(r,h),$!=null&&y.unshift(Go(r,$,I))):u||($=oo(r,h),$!=null&&y.push(Go(r,$,I)))),r=r.return}y.length!==0&&t.push({event:n,listeners:y})}var sS=/\r\n?/g,oS=/\u0000|\uFFFD/g;function Nv(t){return(typeof t=="string"?t:""+t).replace(sS,`
`).replace(oS,"")}function Lv(t,n){return n=Nv(n),Nv(t)===n}function Gt(t,n,r,o,u,h){switch(r){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Xn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Xn(t,""+o);break;case"className":qt(t,"class",o);break;case"tabIndex":qt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":qt(t,r,o);break;case"style":Lp(t,o,h);break;case"data":if(n!=="object"){qt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||r!=="href")){t.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=bl(""+o),t.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(r==="formAction"?(n!=="input"&&Gt(t,n,"name",u.name,u,null),Gt(t,n,"formEncType",u.formEncType,u,null),Gt(t,n,"formMethod",u.formMethod,u,null),Gt(t,n,"formTarget",u.formTarget,u,null)):(Gt(t,n,"encType",u.encType,u,null),Gt(t,n,"method",u.method,u,null),Gt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=bl(""+o),t.setAttribute(r,o);break;case"onClick":o!=null&&(t.onclick=ta);break;case"onScroll":o!=null&&mt("scroll",t);break;case"onScrollEnd":o!=null&&mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=r}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}r=bl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""+o):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":o===!0?t.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,o):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(r,o):t.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(r):t.setAttribute(r,o);break;case"popover":mt("beforetoggle",t),mt("toggle",t),St(t,"popover",o);break;case"xlinkActuate":At(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":At(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":At(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":At(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":At(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":At(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":At(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":At(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":At(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":St(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Px.get(r)||r,St(t,r,o))}}function mh(t,n,r,o,u,h){switch(r){case"style":Lp(t,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=r}}break;case"children":typeof o=="string"?Xn(t,o):(typeof o=="number"||typeof o=="bigint")&&Xn(t,""+o);break;case"onScroll":o!=null&&mt("scroll",t);break;case"onScrollEnd":o!=null&&mt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ta);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ne.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),n=r.slice(2,u?r.length-7:void 0),h=t[bn]||null,h=h!=null?h[r]:null,typeof h=="function"&&t.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(n,o,u);break e}r in t?t[r]=o:o===!0?t.setAttribute(r,""):St(t,r,o)}}}function Rn(t,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mt("error",t),mt("load",t);var o=!1,u=!1,h;for(h in r)if(r.hasOwnProperty(h)){var y=r[h];if(y!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Gt(t,n,h,y,r,null)}}u&&Gt(t,n,"srcSet",r.srcSet,r,null),o&&Gt(t,n,"src",r.src,r,null);return;case"input":mt("invalid",t);var A=h=y=u=null,I=null,$=null;for(o in r)if(r.hasOwnProperty(o)){var fe=r[o];if(fe!=null)switch(o){case"name":u=fe;break;case"type":y=fe;break;case"checked":I=fe;break;case"defaultChecked":$=fe;break;case"value":h=fe;break;case"defaultValue":A=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(s(137,n));break;default:Gt(t,n,o,fe,r,null)}}Hn(t,h,A,I,$,y,u,!1);return;case"select":mt("invalid",t),o=y=h=null;for(u in r)if(r.hasOwnProperty(u)&&(A=r[u],A!=null))switch(u){case"value":h=A;break;case"defaultValue":y=A;break;case"multiple":o=A;default:Gt(t,n,u,A,r,null)}n=h,r=y,t.multiple=!!o,n!=null?tn(t,!!o,n,!1):r!=null&&tn(t,!!o,r,!0);return;case"textarea":mt("invalid",t),h=u=o=null;for(y in r)if(r.hasOwnProperty(y)&&(A=r[y],A!=null))switch(y){case"value":o=A;break;case"defaultValue":u=A;break;case"children":h=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Gt(t,n,y,A,r,null)}Zr(t,o,u,h);return;case"option":for(I in r)if(r.hasOwnProperty(I)&&(o=r[I],o!=null))switch(I){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Gt(t,n,I,o,r,null)}return;case"dialog":mt("beforetoggle",t),mt("toggle",t),mt("cancel",t),mt("close",t);break;case"iframe":case"object":mt("load",t);break;case"video":case"audio":for(o=0;o<Ho.length;o++)mt(Ho[o],t);break;case"image":mt("error",t),mt("load",t);break;case"details":mt("toggle",t);break;case"embed":case"source":case"link":mt("error",t),mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in r)if(r.hasOwnProperty($)&&(o=r[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Gt(t,n,$,o,r,null)}return;default:if(Ru(n)){for(fe in r)r.hasOwnProperty(fe)&&(o=r[fe],o!==void 0&&mh(t,n,fe,o,r,void 0));return}}for(A in r)r.hasOwnProperty(A)&&(o=r[A],o!=null&&Gt(t,n,A,o,r,null))}function lS(t,n,r,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,y=null,A=null,I=null,$=null,fe=null;for(se in r){var ve=r[se];if(r.hasOwnProperty(se)&&ve!=null)switch(se){case"checked":break;case"value":break;case"defaultValue":I=ve;default:o.hasOwnProperty(se)||Gt(t,n,se,null,o,ve)}}for(var ee in o){var se=o[ee];if(ve=r[ee],o.hasOwnProperty(ee)&&(se!=null||ve!=null))switch(ee){case"type":h=se;break;case"name":u=se;break;case"checked":$=se;break;case"defaultChecked":fe=se;break;case"value":y=se;break;case"defaultValue":A=se;break;case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(s(137,n));break;default:se!==ve&&Gt(t,n,ee,se,o,ve)}}Ft(t,y,A,I,$,fe,h,u);return;case"select":se=y=A=ee=null;for(h in r)if(I=r[h],r.hasOwnProperty(h)&&I!=null)switch(h){case"value":break;case"multiple":se=I;default:o.hasOwnProperty(h)||Gt(t,n,h,null,o,I)}for(u in o)if(h=o[u],I=r[u],o.hasOwnProperty(u)&&(h!=null||I!=null))switch(u){case"value":ee=h;break;case"defaultValue":A=h;break;case"multiple":y=h;default:h!==I&&Gt(t,n,u,h,o,I)}n=A,r=y,o=se,ee!=null?tn(t,!!r,ee,!1):!!o!=!!r&&(n!=null?tn(t,!!r,n,!0):tn(t,!!r,r?[]:"",!1));return;case"textarea":se=ee=null;for(A in r)if(u=r[A],r.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Gt(t,n,A,null,o,u)}for(y in o)if(u=o[y],h=r[y],o.hasOwnProperty(y)&&(u!=null||h!=null))switch(y){case"value":ee=u;break;case"defaultValue":se=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&Gt(t,n,y,u,o,h)}Mn(t,ee,se);return;case"option":for(var Fe in r)if(ee=r[Fe],r.hasOwnProperty(Fe)&&ee!=null&&!o.hasOwnProperty(Fe))switch(Fe){case"selected":t.selected=!1;break;default:Gt(t,n,Fe,null,o,ee)}for(I in o)if(ee=o[I],se=r[I],o.hasOwnProperty(I)&&ee!==se&&(ee!=null||se!=null))switch(I){case"selected":t.selected=ee&&typeof ee!="function"&&typeof ee!="symbol";break;default:Gt(t,n,I,ee,o,se)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Je in r)ee=r[Je],r.hasOwnProperty(Je)&&ee!=null&&!o.hasOwnProperty(Je)&&Gt(t,n,Je,null,o,ee);for($ in o)if(ee=o[$],se=r[$],o.hasOwnProperty($)&&ee!==se&&(ee!=null||se!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(s(137,n));break;default:Gt(t,n,$,ee,o,se)}return;default:if(Ru(n)){for(var Vt in r)ee=r[Vt],r.hasOwnProperty(Vt)&&ee!==void 0&&!o.hasOwnProperty(Vt)&&mh(t,n,Vt,void 0,o,ee);for(fe in o)ee=o[fe],se=r[fe],!o.hasOwnProperty(fe)||ee===se||ee===void 0&&se===void 0||mh(t,n,fe,ee,o,se);return}}for(var q in r)ee=r[q],r.hasOwnProperty(q)&&ee!=null&&!o.hasOwnProperty(q)&&Gt(t,n,q,null,o,ee);for(ve in o)ee=o[ve],se=r[ve],!o.hasOwnProperty(ve)||ee===se||ee==null&&se==null||Gt(t,n,ve,ee,o,se)}function Ov(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function cS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,r=performance.getEntriesByType("resource"),o=0;o<r.length;o++){var u=r[o],h=u.transferSize,y=u.initiatorType,A=u.duration;if(h&&A&&Ov(y)){for(y=0,A=u.responseEnd,o+=1;o<r.length;o++){var I=r[o],$=I.startTime;if($>A)break;var fe=I.transferSize,ve=I.initiatorType;fe&&Ov(ve)&&(I=I.responseEnd,y+=fe*(I<A?1:(A-$)/(I-$)))}if(--o,n+=8*(h+y)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var gh=null,vh=null;function _c(t){return t.nodeType===9?t:t.ownerDocument}function Pv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Bv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function _h(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var xh=null;function uS(){var t=window.event;return t&&t.type==="popstate"?t===xh?!1:(xh=t,!0):(xh=null,!1)}var zv=typeof setTimeout=="function"?setTimeout:void 0,fS=typeof clearTimeout=="function"?clearTimeout:void 0,Iv=typeof Promise=="function"?Promise:void 0,hS=typeof queueMicrotask=="function"?queueMicrotask:typeof Iv<"u"?function(t){return Iv.resolve(null).then(t).catch(dS)}:zv;function dS(t){setTimeout(function(){throw t})}function Za(t){return t==="head"}function Fv(t,n){var r=n,o=0;do{var u=r.nextSibling;if(t.removeChild(r),u&&u.nodeType===8)if(r=u.data,r==="/$"||r==="/&"){if(o===0){t.removeChild(u),As(n);return}o--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")o++;else if(r==="html")Vo(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,Vo(r);for(var h=r.firstChild;h;){var y=h.nextSibling,A=h.nodeName;h[pr]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&h.rel.toLowerCase()==="stylesheet"||r.removeChild(h),h=y}}else r==="body"&&Vo(t.ownerDocument.body);r=u}while(r);As(n)}function Hv(t,n){var r=t;t=0;do{var o=r.nextSibling;if(r.nodeType===1?n?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(n?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=o}while(r)}function yh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":yh(r),so(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function pS(t,n,r,o){for(;t.nodeType===1;){var u=r;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[pr])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=yi(t.nextSibling),t===null)break}return null}function mS(t,n,r){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=yi(t.nextSibling),t===null))return null;return t}function Gv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=yi(t.nextSibling),t===null))return null;return t}function Sh(t){return t.data==="$?"||t.data==="$~"}function Eh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function gS(t,n){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||r.readyState!=="loading")n();else{var o=function(){n(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function yi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var bh=null;function Vv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(n===0)return yi(t.nextSibling);n--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||n++}t=t.nextSibling}return null}function kv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(n===0)return t;n--}else r!=="/$"&&r!=="/&"||n++}t=t.previousSibling}return null}function jv(t,n,r){switch(n=_c(r),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Vo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);so(t)}var Si=new Map,Xv=new Set;function xc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var va=Q.d;Q.d={f:vS,r:_S,D:xS,C:yS,L:SS,m:ES,X:MS,S:bS,M:TS};function vS(){var t=va.f(),n=uc();return t||n}function _S(t){var n=W(t);n!==null&&n.tag===5&&n.type==="form"?lg(n):va.r(t)}var bs=typeof document>"u"?null:document;function Wv(t,n,r){var o=bs;if(o&&typeof n=="string"&&n){var u=_n(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),Xv.has(u)||(Xv.add(u),t={rel:t,crossOrigin:r,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Rn(n,"link",t),j(n),o.head.appendChild(n)))}}function xS(t){va.D(t),Wv("dns-prefetch",t,null)}function yS(t,n){va.C(t,n),Wv("preconnect",t,n)}function SS(t,n,r){va.L(t,n,r);var o=bs;if(o&&t&&n){var u='link[rel="preload"][as="'+_n(n)+'"]';n==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+_n(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+_n(r.imageSizes)+'"]')):u+='[href="'+_n(t)+'"]';var h=u;switch(n){case"style":h=Ms(t);break;case"script":h=Ts(t)}Si.has(h)||(t=g({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:t,as:n},r),Si.set(h,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(ko(h))||n==="script"&&o.querySelector(jo(h))||(n=o.createElement("link"),Rn(n,"link",t),j(n),o.head.appendChild(n)))}}function ES(t,n){va.m(t,n);var r=bs;if(r&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+_n(o)+'"][href="'+_n(t)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Ts(t)}if(!Si.has(h)&&(t=g({rel:"modulepreload",href:t},n),Si.set(h,t),r.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(jo(h)))return}o=r.createElement("link"),Rn(o,"link",t),j(o),r.head.appendChild(o)}}}function bS(t,n,r){va.S(t,n,r);var o=bs;if(o&&t){var u=ae(o).hoistableStyles,h=Ms(t);n=n||"default";var y=u.get(h);if(!y){var A={loading:0,preload:null};if(y=o.querySelector(ko(h)))A.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},r),(r=Si.get(h))&&Mh(t,r);var I=y=o.createElement("link");j(I),Rn(I,"link",t),I._p=new Promise(function($,fe){I.onload=$,I.onerror=fe}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,yc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:A},u.set(h,y)}}}function MS(t,n){va.X(t,n);var r=bs;if(r&&t){var o=ae(r).hoistableScripts,u=Ts(t),h=o.get(u);h||(h=r.querySelector(jo(u)),h||(t=g({src:t,async:!0},n),(n=Si.get(u))&&Th(t,n),h=r.createElement("script"),j(h),Rn(h,"link",t),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function TS(t,n){va.M(t,n);var r=bs;if(r&&t){var o=ae(r).hoistableScripts,u=Ts(t),h=o.get(u);h||(h=r.querySelector(jo(u)),h||(t=g({src:t,async:!0,type:"module"},n),(n=Si.get(u))&&Th(t,n),h=r.createElement("script"),j(h),Rn(h,"link",t),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function qv(t,n,r,o){var u=(u=Me.current)?xc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=Ms(r.href),r=ae(u).hoistableStyles,o=r.get(n),o||(o={type:"style",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=Ms(r.href);var h=ae(u).hoistableStyles,y=h.get(t);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,y),(h=u.querySelector(ko(t)))&&!h._p&&(y.instance=h,y.state.loading=5),Si.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Si.set(t,r),h||AS(u,t,r,y.state))),n&&o===null)throw Error(s(528,""));return y}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ts(r),r=ae(u).hoistableScripts,o=r.get(n),o||(o={type:"script",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ms(t){return'href="'+_n(t)+'"'}function ko(t){return'link[rel="stylesheet"]['+t+"]"}function Yv(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function AS(t,n,r,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Rn(n,"link",r),j(n),t.head.appendChild(n))}function Ts(t){return'[src="'+_n(t)+'"]'}function jo(t){return"script[async]"+t}function Zv(t,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+_n(r.href)+'"]');if(o)return n.instance=o,j(o),o;var u=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),j(o),Rn(o,"style",u),yc(o,r.precedence,t),n.instance=o;case"stylesheet":u=Ms(r.href);var h=t.querySelector(ko(u));if(h)return n.state.loading|=4,n.instance=h,j(h),h;o=Yv(r),(u=Si.get(u))&&Mh(o,u),h=(t.ownerDocument||t).createElement("link"),j(h);var y=h;return y._p=new Promise(function(A,I){y.onload=A,y.onerror=I}),Rn(h,"link",o),n.state.loading|=4,yc(h,r.precedence,t),n.instance=h;case"script":return h=Ts(r.src),(u=t.querySelector(jo(h)))?(n.instance=u,j(u),u):(o=r,(u=Si.get(h))&&(o=g({},r),Th(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),j(u),Rn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,yc(o,r.precedence,t));return n.instance}function yc(t,n,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,y=0;y<o.length;y++){var A=o[y];if(A.dataset.precedence===n)h=A;else if(h!==u)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(t,n.firstChild))}function Mh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Th(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Sc=null;function Kv(t,n,r){if(Sc===null){var o=new Map,u=Sc=new Map;u.set(r,o)}else u=Sc,o=u.get(r),o||(o=new Map,u.set(r,o));if(o.has(t))return o;for(o.set(t,null),r=r.getElementsByTagName(t),u=0;u<r.length;u++){var h=r[u];if(!(h[pr]||h[en]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var y=h.getAttribute(n)||"";y=t+y;var A=o.get(y);A?A.push(h):o.set(y,[h])}}return o}function Qv(t,n,r){t=t.ownerDocument||t,t.head.insertBefore(r,n==="title"?t.querySelector("head > title"):null)}function wS(t,n,r){if(r===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Jv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function RS(t,n,r,o){if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var u=Ms(o.href),h=n.querySelector(ko(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Ec.bind(t),n.then(t,t)),r.state.loading|=4,r.instance=h,j(h);return}h=n.ownerDocument||n,o=Yv(o),(u=Si.get(u))&&Mh(o,u),h=h.createElement("link"),j(h);var y=h;y._p=new Promise(function(A,I){y.onload=A,y.onerror=I}),Rn(h,"link",o),r.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=Ec.bind(t),n.addEventListener("load",r),n.addEventListener("error",r))}}var Ah=0;function CS(t,n){return t.stylesheets&&t.count===0&&Mc(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var o=setTimeout(function(){if(t.stylesheets&&Mc(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+n);0<t.imgBytes&&Ah===0&&(Ah=62500*cS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Mc(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>Ah?50:800)+n);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Ec(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Mc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var bc=null;function Mc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,bc=new Map,n.forEach(DS,t),bc=null,Ec.call(t))}function DS(t,n){if(!(n.state.loading&4)){var r=bc.get(t);if(r)var o=r.get(null);else{r=new Map,bc.set(t,r);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var y=u[h];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(r.set(y.dataset.precedence,y),o=y)}o&&r.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),h=r.get(y)||o,h===o&&r.set(null,u),r.set(y,u),this.count++,o=Ec.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Xo={$$typeof:U,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function US(t,n,r,o,u,h,y,A,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tt(0),this.hiddenUpdates=Tt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function $v(t,n,r,o,u,h,y,A,I,$,fe,ve){return t=new US(t,n,r,y,I,$,fe,ve,A),n=1,h===!0&&(n|=24),h=ii(3,null,null,n),t.current=h,h.stateNode=t,n=rf(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:r,cache:n},cf(h),t}function e0(t){return t?(t=ns,t):ns}function t0(t,n,r,o,u,h){u=e0(u),o.context===null?o.context=u:o.pendingContext=u,o=Ia(n),o.payload={element:r},h=h===void 0?null:h,h!==null&&(o.callback=h),r=Fa(t,o,n),r!==null&&(Qn(r,t,n),bo(r,t,n))}function n0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<n?r:n}}function wh(t,n){n0(t,n),(t=t.alternate)&&n0(t,n)}function i0(t){if(t.tag===13||t.tag===31){var n=_r(t,67108864);n!==null&&Qn(n,t,67108864),wh(t,67108864)}}function a0(t){if(t.tag===13||t.tag===31){var n=li();n=hr(n);var r=_r(t,n);r!==null&&Qn(r,t,n),wh(t,n)}}var Tc=!0;function NS(t,n,r,o){var u=z.T;z.T=null;var h=Q.p;try{Q.p=2,Rh(t,n,r,o)}finally{Q.p=h,z.T=u}}function LS(t,n,r,o){var u=z.T;z.T=null;var h=Q.p;try{Q.p=8,Rh(t,n,r,o)}finally{Q.p=h,z.T=u}}function Rh(t,n,r,o){if(Tc){var u=Ch(o);if(u===null)ph(t,n,o,Ac,r),s0(t,o);else if(PS(u,t,n,r,o))o.stopPropagation();else if(s0(t,o),n&4&&-1<OS.indexOf(t)){for(;u!==null;){var h=W(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var y=Re(h.pendingLanes);if(y!==0){var A=h;for(A.pendingLanes|=2,A.entangledLanes|=2;y;){var I=1<<31-tt(y);A.entanglements[1]|=I,y&=~I}ki(h),(Ut&6)===0&&(lc=he()+500,Fo(0))}}break;case 31:case 13:A=_r(h,2),A!==null&&Qn(A,h,2),uc(),wh(h,2)}if(h=Ch(o),h===null&&ph(t,n,o,Ac,r),h===u)break;u=h}u!==null&&o.stopPropagation()}else ph(t,n,o,null,r)}}function Ch(t){return t=Du(t),Dh(t)}var Ac=null;function Dh(t){if(Ac=null,t=R(t),t!==null){var n=c(t);if(n===null)t=null;else{var r=n.tag;if(r===13){if(t=f(n),t!==null)return t;t=null}else if(r===31){if(t=d(n),t!==null)return t;t=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Ac=t,null}function r0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(be()){case ge:return 2;case Ge:return 8;case Ce:case Qe:return 32;case $e:return 268435456;default:return 32}default:return 32}}var Uh=!1,Ka=null,Qa=null,Ja=null,Wo=new Map,qo=new Map,$a=[],OS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function s0(t,n){switch(t){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Qa=null;break;case"mouseover":case"mouseout":Ja=null;break;case"pointerover":case"pointerout":Wo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(n.pointerId)}}function Yo(t,n,r,o,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:r,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=W(n),n!==null&&i0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function PS(t,n,r,o,u){switch(n){case"focusin":return Ka=Yo(Ka,t,n,r,o,u),!0;case"dragenter":return Qa=Yo(Qa,t,n,r,o,u),!0;case"mouseover":return Ja=Yo(Ja,t,n,r,o,u),!0;case"pointerover":var h=u.pointerId;return Wo.set(h,Yo(Wo.get(h)||null,t,n,r,o,u)),!0;case"gotpointercapture":return h=u.pointerId,qo.set(h,Yo(qo.get(h)||null,t,n,r,o,u)),!0}return!1}function o0(t){var n=R(t.target);if(n!==null){var r=c(n);if(r!==null){if(n=r.tag,n===13){if(n=f(r),n!==null){t.blockedOn=n,dr(t.priority,function(){a0(r)});return}}else if(n===31){if(n=d(r),n!==null){t.blockedOn=n,dr(t.priority,function(){a0(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var r=Ch(t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);Cu=o,r.target.dispatchEvent(o),Cu=null}else return n=W(r),n!==null&&i0(n),t.blockedOn=r,!1;n.shift()}return!0}function l0(t,n,r){wc(t)&&r.delete(n)}function BS(){Uh=!1,Ka!==null&&wc(Ka)&&(Ka=null),Qa!==null&&wc(Qa)&&(Qa=null),Ja!==null&&wc(Ja)&&(Ja=null),Wo.forEach(l0),qo.forEach(l0)}function Rc(t,n){t.blockedOn===n&&(t.blockedOn=null,Uh||(Uh=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,BS)))}var Cc=null;function c0(t){Cc!==t&&(Cc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Cc===t&&(Cc=null);for(var n=0;n<t.length;n+=3){var r=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Dh(o||r)===null)continue;break}var h=W(r);h!==null&&(t.splice(n,3),n-=3,Cf(h,{pending:!0,data:u,method:r.method,action:o},o,u))}}))}function As(t){function n(I){return Rc(I,t)}Ka!==null&&Rc(Ka,t),Qa!==null&&Rc(Qa,t),Ja!==null&&Rc(Ja,t),Wo.forEach(n),qo.forEach(n);for(var r=0;r<$a.length;r++){var o=$a[r];o.blockedOn===t&&(o.blockedOn=null)}for(;0<$a.length&&(r=$a[0],r.blockedOn===null);)o0(r),r.blockedOn===null&&$a.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var u=r[o],h=r[o+1],y=u[bn]||null;if(typeof h=="function")y||c0(r);else if(y){var A=null;if(h&&h.hasAttribute("formAction")){if(u=h,y=h[bn]||null)A=y.formAction;else if(Dh(u)!==null)continue}else A=y.action;typeof A=="function"?r[o+1]=A:(r.splice(o,3),o-=3),c0(r)}}}function u0(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(r,20)}function r(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(r,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Nh(t){this._internalRoot=t}Dc.prototype.render=Nh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var r=n.current,o=li();t0(r,o,t,n,null,null)},Dc.prototype.unmount=Nh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;t0(t.current,2,null,t,null,null),uc(),n[ea]=null}};function Dc(t){this._internalRoot=t}Dc.prototype.unstable_scheduleHydration=function(t){if(t){var n=ao();t={blockedOn:null,target:t,priority:n};for(var r=0;r<$a.length&&n!==0&&n<$a[r].priority;r++);$a.splice(r,0,t),r===0&&o0(t)}};var f0=e.version;if(f0!=="19.2.5")throw Error(s(527,f0,"19.2.5"));Q.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=m(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var zS={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uc.isDisabled&&Uc.supportsFiber)try{Ze=Uc.inject(zS),Ve=Uc}catch{}}return Ko.createRoot=function(t,n){if(!l(t))throw Error(s(299));var r=!1,o="",u=_g,h=xg,y=yg;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=$v(t,1,!1,null,null,r,o,null,u,h,y,u0),t[ea]=n.current,dh(t),new Nh(n)},Ko.hydrateRoot=function(t,n,r){if(!l(t))throw Error(s(299));var o=!1,u="",h=_g,y=xg,A=yg,I=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(y=r.onCaughtError),r.onRecoverableError!==void 0&&(A=r.onRecoverableError),r.formState!==void 0&&(I=r.formState)),n=$v(t,1,!0,n,r??null,o,u,I,h,y,A,u0),n.context=e0(null),r=n.current,o=li(),o=hr(o),u=Ia(o),u.callback=null,Fa(r,u,o),r=o,n.current.lanes=r,En(n,r),ki(n),t[ea]=n.current,dh(t),new Dc(n)},Ko.version="19.2.5",Ko}var S0;function qS(){if(S0)return Ph.exports;S0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Ph.exports=WS(),Ph.exports}var YS=qS();/**
 * react-router v7.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var E0="popstate";function b0(a){return typeof a=="object"&&a!=null&&"pathname"in a&&"search"in a&&"hash"in a&&"state"in a&&"key"in a}function ZS(a={}){function e(s,l){var m;let c=(m=l.state)==null?void 0:m.masked,{pathname:f,search:d,hash:p}=c||s.location;return Sd("",{pathname:f,search:d,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default",c?{pathname:s.location.pathname,search:s.location.search,hash:s.location.hash}:void 0)}function i(s,l){return typeof l=="string"?l:ol(l)}return QS(e,i,null,a)}function $t(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function Qi(a,e){if(!a){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function KS(){return Math.random().toString(36).substring(2,10)}function M0(a,e){return{usr:a.state,key:a.key,idx:e,masked:a.unstable_mask?{pathname:a.pathname,search:a.search,hash:a.hash}:void 0}}function Sd(a,e,i=null,s,l){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof e=="string"?Qs(e):e,state:i,key:e&&e.key||s||KS(),unstable_mask:l}}function ol({pathname:a="/",search:e="",hash:i=""}){return e&&e!=="?"&&(a+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(a+=i.charAt(0)==="#"?i:"#"+i),a}function Qs(a){let e={};if(a){let i=a.indexOf("#");i>=0&&(e.hash=a.substring(i),a=a.substring(0,i));let s=a.indexOf("?");s>=0&&(e.search=a.substring(s),a=a.substring(0,s)),a&&(e.pathname=a)}return e}function QS(a,e,i,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,f=l.history,d="POP",p=null,m=v();m==null&&(m=0,f.replaceState({...f.state,idx:m},""));function v(){return(f.state||{idx:null}).idx}function g(){d="POP";let S=v(),_=S==null?null:S-m;m=S,p&&p({action:d,location:T.location,delta:_})}function x(S,_){d="PUSH";let L=b0(S)?S:Sd(T.location,S,_);m=v()+1;let U=M0(L,m),D=T.createHref(L.unstable_mask||L);try{f.pushState(U,"",D)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;l.location.assign(D)}c&&p&&p({action:d,location:T.location,delta:1})}function E(S,_){d="REPLACE";let L=b0(S)?S:Sd(T.location,S,_);m=v();let U=M0(L,m),D=T.createHref(L.unstable_mask||L);f.replaceState(U,"",D),c&&p&&p({action:d,location:T.location,delta:0})}function M(S){return JS(S)}let T={get action(){return d},get location(){return a(l,f)},listen(S){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(E0,g),p=S,()=>{l.removeEventListener(E0,g),p=null}},createHref(S){return e(l,S)},createURL:M,encodeLocation(S){let _=M(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:x,replace:E,go(S){return f.go(S)}};return T}function JS(a,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),$t(i,"No window.location.(origin|href) available to create URL");let s=typeof a=="string"?a:ol(a);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=i+s),new URL(s,i)}function C_(a,e,i="/"){return $S(a,e,i,!1)}function $S(a,e,i,s){let l=typeof e=="string"?Qs(e):e,c=wa(l.pathname||"/",i);if(c==null)return null;let f=D_(a);e1(f);let d=null;for(let p=0;d==null&&p<f.length;++p){let m=f1(c);d=c1(f[p],m,s)}return d}function D_(a,e=[],i=[],s="",l=!1){let c=(f,d,p=l,m)=>{let v={relativePath:m===void 0?f.path||"":m,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(s)&&p)return;$t(v.relativePath.startsWith(s),`Absolute route path "${v.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(s.length)}let g=Yi([s,v.relativePath]),x=i.concat(v);f.children&&f.children.length>0&&($t(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),D_(f.children,e,x,g,p)),!(f.path==null&&!f.index)&&e.push({path:g,score:o1(g,f.index),routesMeta:x})};return a.forEach((f,d)=>{var p;if(f.path===""||!((p=f.path)!=null&&p.includes("?")))c(f,d);else for(let m of U_(f.path))c(f,d,!0,m)}),e}function U_(a){let e=a.split("/");if(e.length===0)return[];let[i,...s]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let f=U_(s.join("/")),d=[];return d.push(...f.map(p=>p===""?c:[c,p].join("/"))),l&&d.push(...f),d.map(p=>a.startsWith("/")&&p===""?"/":p)}function e1(a){a.sort((e,i)=>e.score!==i.score?i.score-e.score:l1(e.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var t1=/^:[\w-]+$/,n1=3,i1=2,a1=1,r1=10,s1=-2,T0=a=>a==="*";function o1(a,e){let i=a.split("/"),s=i.length;return i.some(T0)&&(s+=s1),e&&(s+=i1),i.filter(l=>!T0(l)).reduce((l,c)=>l+(t1.test(c)?n1:c===""?a1:r1),s)}function l1(a,e){return a.length===e.length&&a.slice(0,-1).every((s,l)=>s===e[l])?a[a.length-1]-e[e.length-1]:0}function c1(a,e,i=!1){let{routesMeta:s}=a,l={},c="/",f=[];for(let d=0;d<s.length;++d){let p=s[d],m=d===s.length-1,v=c==="/"?e:e.slice(c.length)||"/",g=hu({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},v),x=p.route;if(!g&&m&&i&&!s[s.length-1].route.index&&(g=hu({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},v)),!g)return null;Object.assign(l,g.params),f.push({params:l,pathname:Yi([c,g.pathname]),pathnameBase:m1(Yi([c,g.pathnameBase])),route:x}),g.pathnameBase!=="/"&&(c=Yi([c,g.pathnameBase]))}return f}function hu(a,e){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[i,s]=u1(a.path,a.caseSensitive,a.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:s.reduce((m,{paramName:v,isOptional:g},x)=>{if(v==="*"){let M=d[x]||"";f=c.slice(0,c.length-M.length).replace(/(.)\/+$/,"$1")}const E=d[x];return g&&!E?m[v]=void 0:m[v]=(E||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:f,pattern:a}}function u1(a,e=!1,i=!0){Qi(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let s=[],l="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,p,m,v)=>{if(s.push({paramName:d,isOptional:p!=null}),p){let g=v.charAt(m+f.length);return g&&g!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(s.push({paramName:"*"}),l+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":a!==""&&a!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function f1(a){try{return a.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Qi(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),a}}function wa(a,e){if(e==="/")return a;if(!a.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,s=a.charAt(i);return s&&s!=="/"?null:a.slice(i)||"/"}var h1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function d1(a,e="/"){let{pathname:i,search:s="",hash:l=""}=typeof a=="string"?Qs(a):a,c;return i?(i=i.replace(/\/\/+/g,"/"),i.startsWith("/")?c=A0(i.substring(1),"/"):c=A0(i,e)):c=e,{pathname:c,search:g1(s),hash:v1(l)}}function A0(a,e){let i=e.replace(/\/+$/,"").split("/");return a.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Fh(a,e,i,s){return`Cannot include a '${a}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function p1(a){return a.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function N_(a){let e=p1(a);return e.map((i,s)=>s===e.length-1?i.pathname:i.pathnameBase)}function fp(a,e,i,s=!1){let l;typeof a=="string"?l=Qs(a):(l={...a},$t(!l.pathname||!l.pathname.includes("?"),Fh("?","pathname","search",l)),$t(!l.pathname||!l.pathname.includes("#"),Fh("#","pathname","hash",l)),$t(!l.search||!l.search.includes("#"),Fh("#","search","hash",l)));let c=a===""||l.pathname==="",f=c?"/":l.pathname,d;if(f==null)d=i;else{let g=e.length-1;if(!s&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),g-=1;l.pathname=x.join("/")}d=g>=0?e[g]:"/"}let p=d1(l,d),m=f&&f!=="/"&&f.endsWith("/"),v=(c||f===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(m||v)&&(p.pathname+="/"),p}var Yi=a=>a.join("/").replace(/\/\/+/g,"/"),m1=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),g1=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,v1=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,_1=class{constructor(a,e,i,s=!1){this.status=a,this.statusText=e||"",this.internal=s,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function x1(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function y1(a){return a.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var L_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function O_(a,e){let i=a;if(typeof i!="string"||!h1.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let s=i,l=!1;if(L_)try{let c=new URL(window.location.href),f=i.startsWith("//")?new URL(c.protocol+i):new URL(i),d=wa(f.pathname,e);f.origin===c.origin&&d!=null?i=d+f.search+f.hash:l=!0}catch{Qi(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var P_=["POST","PUT","PATCH","DELETE"];new Set(P_);var S1=["GET",...P_];new Set(S1);var Js=le.createContext(null);Js.displayName="DataRouter";var xu=le.createContext(null);xu.displayName="DataRouterState";var B_=le.createContext(!1);function E1(){return le.useContext(B_)}var z_=le.createContext({isTransitioning:!1});z_.displayName="ViewTransition";var b1=le.createContext(new Map);b1.displayName="Fetchers";var M1=le.createContext(null);M1.displayName="Await";var Mi=le.createContext(null);Mi.displayName="Navigation";var hl=le.createContext(null);hl.displayName="Location";var $i=le.createContext({outlet:null,matches:[],isDataRoute:!1});$i.displayName="Route";var hp=le.createContext(null);hp.displayName="RouteError";var I_="REACT_ROUTER_ERROR",T1="REDIRECT",A1="ROUTE_ERROR_RESPONSE";function w1(a){if(a.startsWith(`${I_}:${T1}:{`))try{let e=JSON.parse(a.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function R1(a){if(a.startsWith(`${I_}:${A1}:{`))try{let e=JSON.parse(a.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new _1(e.status,e.statusText,e.data)}catch{}}function C1(a,{relative:e}={}){$t(dl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=le.useContext(Mi),{hash:l,pathname:c,search:f}=pl(a,{relative:e}),d=c;return i!=="/"&&(d=c==="/"?i:Yi([i,c])),s.createHref({pathname:d,search:f,hash:l})}function dl(){return le.useContext(hl)!=null}function zi(){return $t(dl(),"useLocation() may be used only in the context of a <Router> component."),le.useContext(hl).location}var F_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function H_(a){le.useContext(Mi).static||le.useLayoutEffect(a)}function D1(){let{isDataRoute:a}=le.useContext($i);return a?j1():U1()}function U1(){$t(dl(),"useNavigate() may be used only in the context of a <Router> component.");let a=le.useContext(Js),{basename:e,navigator:i}=le.useContext(Mi),{matches:s}=le.useContext($i),{pathname:l}=zi(),c=JSON.stringify(N_(s)),f=le.useRef(!1);return H_(()=>{f.current=!0}),le.useCallback((p,m={})=>{if(Qi(f.current,F_),!f.current)return;if(typeof p=="number"){i.go(p);return}let v=fp(p,JSON.parse(c),l,m.relative==="path");a==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:Yi([e,v.pathname])),(m.replace?i.replace:i.push)(v,m.state,m)},[e,i,c,l,a])}le.createContext(null);function N1(){let{matches:a}=le.useContext($i),e=a[a.length-1];return e?e.params:{}}function pl(a,{relative:e}={}){let{matches:i}=le.useContext($i),{pathname:s}=zi(),l=JSON.stringify(N_(i));return le.useMemo(()=>fp(a,JSON.parse(l),s,e==="path"),[a,l,s,e])}function L1(a,e){return G_(a,e)}function G_(a,e,i){var S;$t(dl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=le.useContext(Mi),{matches:l}=le.useContext($i),c=l[l.length-1],f=c?c.params:{},d=c?c.pathname:"/",p=c?c.pathnameBase:"/",m=c&&c.route;{let _=m&&m.path||"";k_(d,!m||_.endsWith("*")||_.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_==="/"?"*":`${_}/*`}">.`)}let v=zi(),g;if(e){let _=typeof e=="string"?Qs(e):e;$t(p==="/"||((S=_.pathname)==null?void 0:S.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${_.pathname}" was given in the \`location\` prop.`),g=_}else g=v;let x=g.pathname||"/",E=x;if(p!=="/"){let _=p.replace(/^\//,"").split("/");E="/"+x.replace(/^\//,"").split("/").slice(_.length).join("/")}let M=C_(a,{pathname:E});Qi(m||M!=null,`No routes matched location "${g.pathname}${g.search}${g.hash}" `),Qi(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let T=I1(M&&M.map(_=>Object.assign({},_,{params:Object.assign({},f,_.params),pathname:Yi([p,s.encodeLocation?s.encodeLocation(_.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?p:Yi([p,s.encodeLocation?s.encodeLocation(_.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathnameBase])})),l,i);return e&&T?le.createElement(hl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...g},navigationType:"POP"}},T):T}function O1(){let a=k1(),e=x1(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),i=a instanceof Error?a.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",a),f=le.createElement(le.Fragment,null,le.createElement("p",null,"💿 Hey developer 👋"),le.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",le.createElement("code",{style:c},"ErrorBoundary")," or"," ",le.createElement("code",{style:c},"errorElement")," prop on your route.")),le.createElement(le.Fragment,null,le.createElement("h2",null,"Unexpected Application Error!"),le.createElement("h3",{style:{fontStyle:"italic"}},e),i?le.createElement("pre",{style:l},i):null,f)}var P1=le.createElement(O1,null),V_=class extends le.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,e){return e.location!==a.location||e.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:e.error,location:e.location,revalidation:a.revalidation||e.revalidation}}componentDidCatch(a,e){this.props.onError?this.props.onError(a,e):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const i=R1(a.digest);i&&(a=i)}let e=a!==void 0?le.createElement($i.Provider,{value:this.props.routeContext},le.createElement(hp.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?le.createElement(B1,{error:a},e):e}};V_.contextType=B_;var Hh=new WeakMap;function B1({children:a,error:e}){let{basename:i}=le.useContext(Mi);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=w1(e.digest);if(s){let l=Hh.get(e);if(l)throw l;let c=O_(s.location,i);if(L_&&!Hh.get(e))if(c.isExternal||s.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:s.replace}));throw Hh.set(e,f),f}return le.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return a}function z1({routeContext:a,match:e,children:i}){let s=le.useContext(Js);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),le.createElement($i.Provider,{value:a},i)}function I1(a,e=[],i){let s=i==null?void 0:i.state;if(a==null){if(!s)return null;if(s.errors)a=s.matches;else if(e.length===0&&!s.initialized&&s.matches.length>0)a=s.matches;else return null}let l=a,c=s==null?void 0:s.errors;if(c!=null){let v=l.findIndex(g=>g.route.id&&(c==null?void 0:c[g.route.id])!==void 0);$t(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,v+1))}let f=!1,d=-1;if(i&&s){f=s.renderFallback;for(let v=0;v<l.length;v++){let g=l[v];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=v),g.route.id){let{loaderData:x,errors:E}=s,M=g.route.loader&&!x.hasOwnProperty(g.route.id)&&(!E||E[g.route.id]===void 0);if(g.route.lazy||M){i.isStatic&&(f=!0),d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}}let p=i==null?void 0:i.onError,m=s&&p?(v,g)=>{var x,E;p(v,{location:s.location,params:((E=(x=s.matches)==null?void 0:x[0])==null?void 0:E.params)??{},unstable_pattern:y1(s.matches),errorInfo:g})}:void 0;return l.reduceRight((v,g,x)=>{let E,M=!1,T=null,S=null;s&&(E=c&&g.route.id?c[g.route.id]:void 0,T=g.route.errorElement||P1,f&&(d<0&&x===0?(k_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,S=null):d===x&&(M=!0,S=g.route.hydrateFallbackElement||null)));let _=e.concat(l.slice(0,x+1)),L=()=>{let U;return E?U=T:M?U=S:g.route.Component?U=le.createElement(g.route.Component,null):g.route.element?U=g.route.element:U=v,le.createElement(z1,{match:g,routeContext:{outlet:v,matches:_,isDataRoute:s!=null},children:U})};return s&&(g.route.ErrorBoundary||g.route.errorElement||x===0)?le.createElement(V_,{location:s.location,revalidation:s.revalidation,component:T,error:E,children:L(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:m}):L()},null)}function dp(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function F1(a){let e=le.useContext(Js);return $t(e,dp(a)),e}function H1(a){let e=le.useContext(xu);return $t(e,dp(a)),e}function G1(a){let e=le.useContext($i);return $t(e,dp(a)),e}function pp(a){let e=G1(a),i=e.matches[e.matches.length-1];return $t(i.route.id,`${a} can only be used on routes that contain a unique "id"`),i.route.id}function V1(){return pp("useRouteId")}function k1(){var s;let a=le.useContext(hp),e=H1("useRouteError"),i=pp("useRouteError");return a!==void 0?a:(s=e.errors)==null?void 0:s[i]}function j1(){let{router:a}=F1("useNavigate"),e=pp("useNavigate"),i=le.useRef(!1);return H_(()=>{i.current=!0}),le.useCallback(async(l,c={})=>{Qi(i.current,F_),i.current&&(typeof l=="number"?await a.navigate(l):await a.navigate(l,{fromRouteId:e,...c}))},[a,e])}var w0={};function k_(a,e,i){!e&&!w0[a]&&(w0[a]=!0,Qi(!1,i))}le.memo(X1);function X1({routes:a,future:e,state:i,isStatic:s,onError:l}){return G_(a,void 0,{state:i,isStatic:s,onError:l})}function Cn(a){$t(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function W1({basename:a="/",children:e=null,location:i,navigationType:s="POP",navigator:l,static:c=!1,unstable_useTransitions:f}){$t(!dl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=a.replace(/^\/*/,"/"),p=le.useMemo(()=>({basename:d,navigator:l,static:c,unstable_useTransitions:f,future:{}}),[d,l,c,f]);typeof i=="string"&&(i=Qs(i));let{pathname:m="/",search:v="",hash:g="",state:x=null,key:E="default",unstable_mask:M}=i,T=le.useMemo(()=>{let S=wa(m,d);return S==null?null:{location:{pathname:S,search:v,hash:g,state:x,key:E,unstable_mask:M},navigationType:s}},[d,m,v,g,x,E,s,M]);return Qi(T!=null,`<Router basename="${d}"> is not able to match the URL "${m}${v}${g}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:le.createElement(Mi.Provider,{value:p},le.createElement(hl.Provider,{children:e,value:T}))}function q1({children:a,location:e}){return L1(Ed(a),e)}function Ed(a,e=[]){let i=[];return le.Children.forEach(a,(s,l)=>{if(!le.isValidElement(s))return;let c=[...e,l];if(s.type===le.Fragment){i.push.apply(i,Ed(s.props.children,c));return}$t(s.type===Cn,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),$t(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Ed(s.props.children,c)),i.push(f)}),i}var nu="get",iu="application/x-www-form-urlencoded";function yu(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function Y1(a){return yu(a)&&a.tagName.toLowerCase()==="button"}function Z1(a){return yu(a)&&a.tagName.toLowerCase()==="form"}function K1(a){return yu(a)&&a.tagName.toLowerCase()==="input"}function Q1(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function J1(a,e){return a.button===0&&(!e||e==="_self")&&!Q1(a)}var Nc=null;function $1(){if(Nc===null)try{new FormData(document.createElement("form"),0),Nc=!1}catch{Nc=!0}return Nc}var eE=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Gh(a){return a!=null&&!eE.has(a)?(Qi(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${iu}"`),null):a}function tE(a,e){let i,s,l,c,f;if(Z1(a)){let d=a.getAttribute("action");s=d?wa(d,e):null,i=a.getAttribute("method")||nu,l=Gh(a.getAttribute("enctype"))||iu,c=new FormData(a)}else if(Y1(a)||K1(a)&&(a.type==="submit"||a.type==="image")){let d=a.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=a.getAttribute("formaction")||d.getAttribute("action");if(s=p?wa(p,e):null,i=a.getAttribute("formmethod")||d.getAttribute("method")||nu,l=Gh(a.getAttribute("formenctype"))||Gh(d.getAttribute("enctype"))||iu,c=new FormData(d,a),!$1()){let{name:m,type:v,value:g}=a;if(v==="image"){let x=m?`${m}.`:"";c.append(`${x}x`,"0"),c.append(`${x}y`,"0")}else m&&c.append(m,g)}}else{if(yu(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=nu,s=null,l=iu,f=a}return c&&l==="text/plain"&&(f=c,c=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function mp(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function j_(a,e,i,s){let l=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${s}`:l.pathname=`${l.pathname}.${s}`:l.pathname==="/"?l.pathname=`_root.${s}`:e&&wa(l.pathname,e)==="/"?l.pathname=`${e.replace(/\/$/,"")}/_root.${s}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${s}`,l}async function nE(a,e){if(a.id in e)return e[a.id];try{let i=await import(a.module);return e[a.id]=i,i}catch(i){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function iE(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function aE(a,e,i){let s=await Promise.all(a.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await nE(c,i);return f.links?f.links():[]}return[]}));return lE(s.flat(1).filter(iE).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function R0(a,e,i,s,l,c){let f=(p,m)=>i[m]?p.route.id!==i[m].route.id:!0,d=(p,m)=>{var v;return i[m].pathname!==p.pathname||((v=i[m].route.path)==null?void 0:v.endsWith("*"))&&i[m].params["*"]!==p.params["*"]};return c==="assets"?e.filter((p,m)=>f(p,m)||d(p,m)):c==="data"?e.filter((p,m)=>{var g;let v=s.routes[p.route.id];if(!v||!v.hasLoader)return!1;if(f(p,m)||d(p,m))return!0;if(p.route.shouldRevalidate){let x=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((g=i[0])==null?void 0:g.params)||{},nextUrl:new URL(a,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function rE(a,e,{includeHydrateFallback:i}={}){return sE(a.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function sE(a){return[...new Set(a)]}function oE(a){let e={},i=Object.keys(a).sort();for(let s of i)e[s]=a[s];return e}function lE(a,e){let i=new Set;return new Set(e),a.reduce((s,l)=>{let c=JSON.stringify(oE(l));return i.has(c)||(i.add(c),s.push({key:c,link:l})),s},[])}function gp(){let a=le.useContext(Js);return mp(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function cE(){let a=le.useContext(xu);return mp(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var vp=le.createContext(void 0);vp.displayName="FrameworkContext";function _p(){let a=le.useContext(vp);return mp(a,"You must render this element inside a <HydratedRouter> element"),a}function uE(a,e){let i=le.useContext(vp),[s,l]=le.useState(!1),[c,f]=le.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:m,onMouseLeave:v,onTouchStart:g}=e,x=le.useRef(null);le.useEffect(()=>{if(a==="render"&&f(!0),a==="viewport"){let T=_=>{_.forEach(L=>{f(L.isIntersecting)})},S=new IntersectionObserver(T,{threshold:.5});return x.current&&S.observe(x.current),()=>{S.disconnect()}}},[a]),le.useEffect(()=>{if(s){let T=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(T)}}},[s]);let E=()=>{l(!0)},M=()=>{l(!1),f(!1)};return i?a!=="intent"?[c,x,{}]:[c,x,{onFocus:Qo(d,E),onBlur:Qo(p,M),onMouseEnter:Qo(m,E),onMouseLeave:Qo(v,M),onTouchStart:Qo(g,E)}]:[!1,x,{}]}function Qo(a,e){return i=>{a&&a(i),i.defaultPrevented||e(i)}}function fE({page:a,...e}){let i=E1(),{router:s}=gp(),l=le.useMemo(()=>C_(s.routes,a,s.basename),[s.routes,a,s.basename]);return l?i?le.createElement(dE,{page:a,matches:l,...e}):le.createElement(pE,{page:a,matches:l,...e}):null}function hE(a){let{manifest:e,routeModules:i}=_p(),[s,l]=le.useState([]);return le.useEffect(()=>{let c=!1;return aE(a,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[a,e,i]),s}function dE({page:a,matches:e,...i}){let s=zi(),{future:l}=_p(),{basename:c}=gp(),f=le.useMemo(()=>{if(a===s.pathname+s.search+s.hash)return[];let d=j_(a,c,l.unstable_trailingSlashAwareDataRequests,"rsc"),p=!1,m=[];for(let v of e)typeof v.route.shouldRevalidate=="function"?p=!0:m.push(v.route.id);return p&&m.length>0&&d.searchParams.set("_routes",m.join(",")),[d.pathname+d.search]},[c,l.unstable_trailingSlashAwareDataRequests,a,s,e]);return le.createElement(le.Fragment,null,f.map(d=>le.createElement("link",{key:d,rel:"prefetch",as:"fetch",href:d,...i})))}function pE({page:a,matches:e,...i}){let s=zi(),{future:l,manifest:c,routeModules:f}=_p(),{basename:d}=gp(),{loaderData:p,matches:m}=cE(),v=le.useMemo(()=>R0(a,e,m,c,s,"data"),[a,e,m,c,s]),g=le.useMemo(()=>R0(a,e,m,c,s,"assets"),[a,e,m,c,s]),x=le.useMemo(()=>{if(a===s.pathname+s.search+s.hash)return[];let T=new Set,S=!1;if(e.forEach(L=>{var D;let U=c.routes[L.route.id];!U||!U.hasLoader||(!v.some(k=>k.route.id===L.route.id)&&L.route.id in p&&((D=f[L.route.id])!=null&&D.shouldRevalidate)||U.hasClientLoader?S=!0:T.add(L.route.id))}),T.size===0)return[];let _=j_(a,d,l.unstable_trailingSlashAwareDataRequests,"data");return S&&T.size>0&&_.searchParams.set("_routes",e.filter(L=>T.has(L.route.id)).map(L=>L.route.id).join(",")),[_.pathname+_.search]},[d,l.unstable_trailingSlashAwareDataRequests,p,s,c,v,e,a,f]),E=le.useMemo(()=>rE(g,c),[g,c]),M=hE(g);return le.createElement(le.Fragment,null,x.map(T=>le.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...i})),E.map(T=>le.createElement("link",{key:T,rel:"modulepreload",href:T,...i})),M.map(({key:T,link:S})=>le.createElement("link",{key:T,nonce:i.nonce,...S,crossOrigin:S.crossOrigin??i.crossOrigin})))}function mE(...a){return e=>{a.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var gE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{gE&&(window.__reactRouterVersion="7.14.0")}catch{}function vE({basename:a,children:e,unstable_useTransitions:i,window:s}){let l=le.useRef();l.current==null&&(l.current=ZS({window:s,v5Compat:!0}));let c=l.current,[f,d]=le.useState({action:c.action,location:c.location}),p=le.useCallback(m=>{i===!1?d(m):le.startTransition(()=>d(m))},[i]);return le.useLayoutEffect(()=>c.listen(p),[c,p]),le.createElement(W1,{basename:a,children:e,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:i})}var X_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qr=le.forwardRef(function({onClick:e,discover:i="render",prefetch:s="none",relative:l,reloadDocument:c,replace:f,unstable_mask:d,state:p,target:m,to:v,preventScrollReset:g,viewTransition:x,unstable_defaultShouldRevalidate:E,...M},T){let{basename:S,navigator:_,unstable_useTransitions:L}=le.useContext(Mi),U=typeof v=="string"&&X_.test(v),D=O_(v,S);v=D.to;let k=C1(v,{relative:l}),H=zi(),B=null;if(d){let pe=fp(d,[],H.unstable_mask?H.unstable_mask.pathname:"/",!0);S!=="/"&&(pe.pathname=pe.pathname==="/"?S:Yi([S,pe.pathname])),B=_.createHref(pe)}let[Y,N,C]=uE(s,M),V=SE(v,{replace:f,unstable_mask:d,state:p,target:m,preventScrollReset:g,relative:l,viewTransition:x,unstable_defaultShouldRevalidate:E,unstable_useTransitions:L});function ue(pe){e&&e(pe),pe.defaultPrevented||V(pe)}let re=!(D.isExternal||c),_e=le.createElement("a",{...M,...C,href:(re?B:void 0)||D.absoluteURL||k,onClick:re?ue:e,ref:mE(T,N),target:m,"data-discover":!U&&i==="render"?"true":void 0});return Y&&!U?le.createElement(le.Fragment,null,_e,le.createElement(fE,{page:k})):_e});qr.displayName="Link";var _E=le.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:s="",end:l=!1,style:c,to:f,viewTransition:d,children:p,...m},v){let g=pl(f,{relative:m.relative}),x=zi(),E=le.useContext(xu),{navigator:M,basename:T}=le.useContext(Mi),S=E!=null&&AE(g)&&d===!0,_=M.encodeLocation?M.encodeLocation(g).pathname:g.pathname,L=x.pathname,U=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;i||(L=L.toLowerCase(),U=U?U.toLowerCase():null,_=_.toLowerCase()),U&&T&&(U=wa(U,T)||U);const D=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let k=L===_||!l&&L.startsWith(_)&&L.charAt(D)==="/",H=U!=null&&(U===_||!l&&U.startsWith(_)&&U.charAt(_.length)==="/"),B={isActive:k,isPending:H,isTransitioning:S},Y=k?e:void 0,N;typeof s=="function"?N=s(B):N=[s,k?"active":null,H?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let C=typeof c=="function"?c(B):c;return le.createElement(qr,{...m,"aria-current":Y,className:N,ref:v,style:C,to:f,viewTransition:d},typeof p=="function"?p(B):p)});_E.displayName="NavLink";var xE=le.forwardRef(({discover:a="render",fetcherKey:e,navigate:i,reloadDocument:s,replace:l,state:c,method:f=nu,action:d,onSubmit:p,relative:m,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:x,...E},M)=>{let{unstable_useTransitions:T}=le.useContext(Mi),S=ME(),_=TE(d,{relative:m}),L=f.toLowerCase()==="get"?"get":"post",U=typeof d=="string"&&X_.test(d),D=k=>{if(p&&p(k),k.defaultPrevented)return;k.preventDefault();let H=k.nativeEvent.submitter,B=(H==null?void 0:H.getAttribute("formmethod"))||f,Y=()=>S(H||k.currentTarget,{fetcherKey:e,method:B,navigate:i,replace:l,state:c,relative:m,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:x});T&&i!==!1?le.startTransition(()=>Y()):Y()};return le.createElement("form",{ref:M,method:L,action:_,onSubmit:s?p:D,...E,"data-discover":!U&&a==="render"?"true":void 0})});xE.displayName="Form";function yE(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function W_(a){let e=le.useContext(Js);return $t(e,yE(a)),e}function SE(a,{target:e,replace:i,unstable_mask:s,state:l,preventScrollReset:c,relative:f,viewTransition:d,unstable_defaultShouldRevalidate:p,unstable_useTransitions:m}={}){let v=D1(),g=zi(),x=pl(a,{relative:f});return le.useCallback(E=>{if(J1(E,e)){E.preventDefault();let M=i!==void 0?i:ol(g)===ol(x),T=()=>v(a,{replace:M,unstable_mask:s,state:l,preventScrollReset:c,relative:f,viewTransition:d,unstable_defaultShouldRevalidate:p});m?le.startTransition(()=>T()):T()}},[g,v,x,i,s,l,e,a,c,f,d,p,m])}var EE=0,bE=()=>`__${String(++EE)}__`;function ME(){let{router:a}=W_("useSubmit"),{basename:e}=le.useContext(Mi),i=V1(),s=a.fetch,l=a.navigate;return le.useCallback(async(c,f={})=>{let{action:d,method:p,encType:m,formData:v,body:g}=tE(c,e);if(f.navigate===!1){let x=f.fetcherKey||bE();await s(x,i,f.action||d,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:v,body:g,formMethod:f.method||p,formEncType:f.encType||m,flushSync:f.flushSync})}else await l(f.action||d,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:v,body:g,formMethod:f.method||p,formEncType:f.encType||m,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[s,l,e,i])}function TE(a,{relative:e}={}){let{basename:i}=le.useContext(Mi),s=le.useContext($i);$t(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...pl(a||".",{relative:e})},f=zi();if(a==null){c.search=f.search;let d=new URLSearchParams(c.search),p=d.getAll("index");if(p.some(v=>v==="")){d.delete("index"),p.filter(g=>g).forEach(g=>d.append("index",g));let v=d.toString();c.search=v?`?${v}`:""}}return(!a||a===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:Yi([i,c.pathname])),ol(c)}function AE(a,{relative:e}={}){let i=le.useContext(z_);$t(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=W_("useViewTransitionState"),l=pl(a,{relative:e});if(!i.isTransitioning)return!1;let c=wa(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=wa(i.nextLocation.pathname,s)||i.nextLocation.pathname;return hu(l.pathname,f)!=null||hu(l.pathname,c)!=null}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ml="176",wE=0,C0=1,RE=2,q_=1,CE=2,ba=3,Ra=0,Sn=1,fi=2,ti=0,ks=1,D0=2,U0=3,N0=4,DE=5,Hr=100,UE=101,NE=102,LE=103,OE=104,PE=200,BE=201,zE=202,IE=203,bd=204,Md=205,FE=206,HE=207,GE=208,VE=209,kE=210,jE=211,XE=212,WE=213,qE=214,Td=0,du=1,Ad=2,Xs=3,wd=4,Rd=5,Cd=6,Dd=7,Y_=0,YE=1,ZE=2,Ta=0,KE=1,QE=2,JE=3,$E=4,eb=5,tb=6,nb=7,Z_=300,Ws=301,qs=302,Ud=303,Nd=304,Su=306,Ld=1e3,Vr=1001,Od=1002,Bi=1003,ib=1004,Lc=1005,ei=1006,Vh=1007,kr=1008,zn=1009,K_=1010,Q_=1011,ll=1012,xp=1013,Wr=1014,Wi=1015,gl=1016,yp=1017,Sp=1018,Ys=1020,J_=35902,$_=1021,ex=1022,Pi=1023,cl=1026,Zs=1027,tx=1028,Ep=1029,nx=1030,bp=1031,Mp=1033,au=33776,ru=33777,su=33778,ou=33779,Pd=35840,Bd=35841,zd=35842,Id=35843,Fd=36196,Hd=37492,Gd=37496,Vd=37808,kd=37809,jd=37810,Xd=37811,Wd=37812,qd=37813,Yd=37814,Zd=37815,Kd=37816,Qd=37817,Jd=37818,$d=37819,ep=37820,tp=37821,lu=36492,np=36494,ip=36495,ix=36283,ap=36284,rp=36285,sp=36286,vl=3200,ab=3201,rb=0,sb=1,Xi="",Bt="srgb",fr="srgb-linear",pu="linear",kt="srgb",ws=7680,L0=519,ob=512,lb=513,cb=514,ax=515,ub=516,fb=517,hb=518,db=519,O0=35044,P0="300 es",Ma=2e3,mu=2001;class Da{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kh=Math.PI/180,op=180/Math.PI;function _l(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(On[a&255]+On[a>>8&255]+On[a>>16&255]+On[a>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]).toLowerCase()}function bt(a,e,i){return Math.max(e,Math.min(i,a))}function pb(a,e){return(a%e+e)%e}function jh(a,e,i){return(1-i)*a+i*e}function Jo(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Jn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class ut{constructor(e=0,i=0){ut.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(bt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(bt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ct{constructor(e,i,s,l,c,f,d,p,m){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,d,p,m)}set(e,i,s,l,c,f,d,p,m){const v=this.elements;return v[0]=e,v[1]=l,v[2]=d,v[3]=i,v[4]=c,v[5]=p,v[6]=s,v[7]=f,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],d=s[3],p=s[6],m=s[1],v=s[4],g=s[7],x=s[2],E=s[5],M=s[8],T=l[0],S=l[3],_=l[6],L=l[1],U=l[4],D=l[7],k=l[2],H=l[5],B=l[8];return c[0]=f*T+d*L+p*k,c[3]=f*S+d*U+p*H,c[6]=f*_+d*D+p*B,c[1]=m*T+v*L+g*k,c[4]=m*S+v*U+g*H,c[7]=m*_+v*D+g*B,c[2]=x*T+E*L+M*k,c[5]=x*S+E*U+M*H,c[8]=x*_+E*D+M*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8];return i*f*v-i*d*m-s*c*v+s*d*p+l*c*m-l*f*p}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8],g=v*f-d*m,x=d*p-v*c,E=m*c-f*p,M=i*g+s*x+l*E;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=g*T,e[1]=(l*m-v*s)*T,e[2]=(d*s-l*f)*T,e[3]=x*T,e[4]=(v*i-l*p)*T,e[5]=(l*c-d*i)*T,e[6]=E*T,e[7]=(s*p-m*i)*T,e[8]=(f*i-s*c)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,d){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*f+m*d)+f+e,-l*m,l*p,-l*(-m*f+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Xh.makeScale(e,i)),this}rotate(e){return this.premultiply(Xh.makeRotation(-e)),this}translate(e,i){return this.premultiply(Xh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xh=new ct;function rx(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function gu(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function mb(){const a=gu("canvas");return a.style.display="block",a}const B0={};function cu(a){a in B0||(B0[a]=!0,console.warn(a))}function gb(a,e,i){return new Promise(function(s,l){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:l();break;case a.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}function vb(a){const e=a.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function _b(a){const e=a.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const z0=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),I0=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xb(){const a={enabled:!0,workingColorSpace:fr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===kt&&(l.r=Aa(l.r),l.g=Aa(l.g),l.b=Aa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===kt&&(l.r=js(l.r),l.g=js(l.g),l.b=js(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Xi?pu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return a.define({[fr]:{primaries:e,whitePoint:s,transfer:pu,toXYZ:z0,fromXYZ:I0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:e,whitePoint:s,transfer:kt,toXYZ:z0,fromXYZ:I0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}}),a}const Ct=xb();function Aa(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function js(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Rs;class yb{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Rs===void 0&&(Rs=gu("canvas")),Rs.width=e.width,Rs.height=e.height;const l=Rs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Rs}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=gu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Aa(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Aa(i[s]/255)*255):i[s]=Aa(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sb=0;class Tp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sb++}),this.uuid=_l(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(Wh(l[f].image)):c.push(Wh(l[f]))}else c=Wh(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Wh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?yb.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Eb=0;class Bn extends Da{constructor(e=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,s=Vr,l=Vr,c=ei,f=kr,d=Pi,p=zn,m=Bn.DEFAULT_ANISOTROPY,v=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eb++}),this.uuid=_l(),this.name="",this.source=new Tp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Z_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ld:e.x=e.x-Math.floor(e.x);break;case Vr:e.x=e.x<0?0:1;break;case Od:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ld:e.y=e.y-Math.floor(e.y);break;case Vr:e.y=e.y<0?0:1;break;case Od:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=Z_;Bn.DEFAULT_ANISOTROPY=1;class Jt{constructor(e=0,i=0,s=0,l=1){Jt.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const p=e.elements,m=p[0],v=p[4],g=p[8],x=p[1],E=p[5],M=p[9],T=p[2],S=p[6],_=p[10];if(Math.abs(v-x)<.01&&Math.abs(g-T)<.01&&Math.abs(M-S)<.01){if(Math.abs(v+x)<.1&&Math.abs(g+T)<.1&&Math.abs(M+S)<.1&&Math.abs(m+E+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(m+1)/2,D=(E+1)/2,k=(_+1)/2,H=(v+x)/4,B=(g+T)/4,Y=(M+S)/4;return U>D&&U>k?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=H/s,c=B/s):D>k?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=H/l,c=Y/l):k<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(k),s=B/c,l=Y/c),this.set(s,l,c,i),this}let L=Math.sqrt((S-M)*(S-M)+(g-T)*(g-T)+(x-v)*(x-v));return Math.abs(L)<.001&&(L=1),this.x=(S-M)/L,this.y=(g-T)/L,this.z=(x-v)/L,this.w=Math.acos((m+E+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this.z=bt(this.z,e.z,i.z),this.w=bt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this.z=bt(this.z,e,i),this.w=bt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(bt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bb extends Da{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth?s.depth:1,this.scissor=new Jt(0,0,e,i),this.scissorTest=!1,this.viewport=new Jt(0,0,e,i);const l={width:e,height:i,depth:this.depth};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},s);const c=new Bn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);c.flipY=!1,c.generateMipmaps=s.generateMipmaps,c.internalFormat=s.internalFormat,this.textures=[];const f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Tp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class In extends bb{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class sx extends Bn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Bi,this.minFilter=Bi,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mb extends Bn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Bi,this.minFilter=Bi,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xl{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,d){let p=s[l+0],m=s[l+1],v=s[l+2],g=s[l+3];const x=c[f+0],E=c[f+1],M=c[f+2],T=c[f+3];if(d===0){e[i+0]=p,e[i+1]=m,e[i+2]=v,e[i+3]=g;return}if(d===1){e[i+0]=x,e[i+1]=E,e[i+2]=M,e[i+3]=T;return}if(g!==T||p!==x||m!==E||v!==M){let S=1-d;const _=p*x+m*E+v*M+g*T,L=_>=0?1:-1,U=1-_*_;if(U>Number.EPSILON){const k=Math.sqrt(U),H=Math.atan2(k,_*L);S=Math.sin(S*H)/k,d=Math.sin(d*H)/k}const D=d*L;if(p=p*S+x*D,m=m*S+E*D,v=v*S+M*D,g=g*S+T*D,S===1-d){const k=1/Math.sqrt(p*p+m*m+v*v+g*g);p*=k,m*=k,v*=k,g*=k}}e[i]=p,e[i+1]=m,e[i+2]=v,e[i+3]=g}static multiplyQuaternionsFlat(e,i,s,l,c,f){const d=s[l],p=s[l+1],m=s[l+2],v=s[l+3],g=c[f],x=c[f+1],E=c[f+2],M=c[f+3];return e[i]=d*M+v*g+p*E-m*x,e[i+1]=p*M+v*x+m*g-d*E,e[i+2]=m*M+v*E+d*x-p*g,e[i+3]=v*M-d*g-p*x-m*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(s/2),v=d(l/2),g=d(c/2),x=p(s/2),E=p(l/2),M=p(c/2);switch(f){case"XYZ":this._x=x*v*g+m*E*M,this._y=m*E*g-x*v*M,this._z=m*v*M+x*E*g,this._w=m*v*g-x*E*M;break;case"YXZ":this._x=x*v*g+m*E*M,this._y=m*E*g-x*v*M,this._z=m*v*M-x*E*g,this._w=m*v*g+x*E*M;break;case"ZXY":this._x=x*v*g-m*E*M,this._y=m*E*g+x*v*M,this._z=m*v*M+x*E*g,this._w=m*v*g-x*E*M;break;case"ZYX":this._x=x*v*g-m*E*M,this._y=m*E*g+x*v*M,this._z=m*v*M-x*E*g,this._w=m*v*g+x*E*M;break;case"YZX":this._x=x*v*g+m*E*M,this._y=m*E*g+x*v*M,this._z=m*v*M-x*E*g,this._w=m*v*g-x*E*M;break;case"XZY":this._x=x*v*g-m*E*M,this._y=m*E*g-x*v*M,this._z=m*v*M+x*E*g,this._w=m*v*g+x*E*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],d=i[5],p=i[9],m=i[2],v=i[6],g=i[10],x=s+d+g;if(x>0){const E=.5/Math.sqrt(x+1);this._w=.25/E,this._x=(v-p)*E,this._y=(c-m)*E,this._z=(f-l)*E}else if(s>d&&s>g){const E=2*Math.sqrt(1+s-d-g);this._w=(v-p)/E,this._x=.25*E,this._y=(l+f)/E,this._z=(c+m)/E}else if(d>g){const E=2*Math.sqrt(1+d-s-g);this._w=(c-m)/E,this._x=(l+f)/E,this._y=.25*E,this._z=(p+v)/E}else{const E=2*Math.sqrt(1+g-s-d);this._w=(f-l)/E,this._x=(c+m)/E,this._y=(p+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,d=i._x,p=i._y,m=i._z,v=i._w;return this._x=s*v+f*d+l*m-c*p,this._y=l*v+f*p+c*d-s*m,this._z=c*v+f*m+s*p-l*d,this._w=f*v-s*d-l*p-c*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,c=this._z,f=this._w;let d=f*e._w+s*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=s,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const E=1-i;return this._w=E*f+i*this._w,this._x=E*s+i*this._x,this._y=E*l+i*this._y,this._z=E*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,d),g=Math.sin((1-i)*v)/m,x=Math.sin(i*v)/m;return this._w=f*g+this._w*x,this._x=s*g+this._x*x,this._y=l*g+this._y*x,this._z=c*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class oe{constructor(e=0,i=0,s=0){oe.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(F0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(F0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*l-d*s),v=2*(d*i-c*l),g=2*(c*s-f*i);return this.x=i+p*m+f*g-d*v,this.y=s+p*v+d*m-c*g,this.z=l+p*g+c*v-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this.z=bt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this.z=bt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(bt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*f-s*p,this.z=s*d-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return qh.copy(this).projectOnVector(e),this.sub(qh)}reflect(e){return this.sub(qh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(bt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qh=new oe,F0=new xl;class yl{constructor(e=new oe(1/0,1/0,1/0),i=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ui.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ui.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ui.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,Ui):Ui.fromBufferAttribute(c,f),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Oc.copy(s.boundingBox)),Oc.applyMatrix4(e.matrixWorld),this.union(Oc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($o),Pc.subVectors(this.max,$o),Cs.subVectors(e.a,$o),Ds.subVectors(e.b,$o),Us.subVectors(e.c,$o),tr.subVectors(Ds,Cs),nr.subVectors(Us,Ds),Ur.subVectors(Cs,Us);let i=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-Ur.z,Ur.y,tr.z,0,-tr.x,nr.z,0,-nr.x,Ur.z,0,-Ur.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-Ur.y,Ur.x,0];return!Yh(i,Cs,Ds,Us,Pc)||(i=[1,0,0,0,1,0,0,0,1],!Yh(i,Cs,Ds,Us,Pc))?!1:(Bc.crossVectors(tr,nr),i=[Bc.x,Bc.y,Bc.z],Yh(i,Cs,Ds,Us,Pc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_a),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _a=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],Ui=new oe,Oc=new yl,Cs=new oe,Ds=new oe,Us=new oe,tr=new oe,nr=new oe,Ur=new oe,$o=new oe,Pc=new oe,Bc=new oe,Nr=new oe;function Yh(a,e,i,s,l){for(let c=0,f=a.length-3;c<=f;c+=3){Nr.fromArray(a,c);const d=l.x*Math.abs(Nr.x)+l.y*Math.abs(Nr.y)+l.z*Math.abs(Nr.z),p=e.dot(Nr),m=i.dot(Nr),v=s.dot(Nr);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const Tb=new yl,el=new oe,Zh=new oe;class Ap{constructor(e=new oe,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):Tb.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;el.subVectors(e,this.center);const i=el.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(el,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(el.copy(e.center).add(Zh)),this.expandByPoint(el.copy(e.center).sub(Zh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xa=new oe,Kh=new oe,zc=new oe,ir=new oe,Qh=new oe,Ic=new oe,Jh=new oe;class Ab{constructor(e=new oe,i=new oe(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=xa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(xa.copy(this.origin).addScaledVector(this.direction,i),xa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Kh.copy(e).add(i).multiplyScalar(.5),zc.copy(i).sub(e).normalize(),ir.copy(this.origin).sub(Kh);const c=e.distanceTo(i)*.5,f=-this.direction.dot(zc),d=ir.dot(this.direction),p=-ir.dot(zc),m=ir.lengthSq(),v=Math.abs(1-f*f);let g,x,E,M;if(v>0)if(g=f*p-d,x=f*d-p,M=c*v,g>=0)if(x>=-M)if(x<=M){const T=1/v;g*=T,x*=T,E=g*(g+f*x+2*d)+x*(f*g+x+2*p)+m}else x=c,g=Math.max(0,-(f*x+d)),E=-g*g+x*(x+2*p)+m;else x=-c,g=Math.max(0,-(f*x+d)),E=-g*g+x*(x+2*p)+m;else x<=-M?(g=Math.max(0,-(-f*c+d)),x=g>0?-c:Math.min(Math.max(-c,-p),c),E=-g*g+x*(x+2*p)+m):x<=M?(g=0,x=Math.min(Math.max(-c,-p),c),E=x*(x+2*p)+m):(g=Math.max(0,-(f*c+d)),x=g>0?c:Math.min(Math.max(-c,-p),c),E=-g*g+x*(x+2*p)+m);else x=f>0?-c:c,g=Math.max(0,-(f*x+d)),E=-g*g+x*(x+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Kh).addScaledVector(zc,x),E}intersectSphere(e,i){xa.subVectors(e.center,this.origin);const s=xa.dot(this.direction),l=xa.dot(xa)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,p=s+f;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,d,p;const m=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,x=this.origin;return m>=0?(s=(e.min.x-x.x)*m,l=(e.max.x-x.x)*m):(s=(e.max.x-x.x)*m,l=(e.min.x-x.x)*m),v>=0?(c=(e.min.y-x.y)*v,f=(e.max.y-x.y)*v):(c=(e.max.y-x.y)*v,f=(e.min.y-x.y)*v),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),g>=0?(d=(e.min.z-x.z)*g,p=(e.max.z-x.z)*g):(d=(e.max.z-x.z)*g,p=(e.min.z-x.z)*g),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,xa)!==null}intersectTriangle(e,i,s,l,c){Qh.subVectors(i,e),Ic.subVectors(s,e),Jh.crossVectors(Qh,Ic);let f=this.direction.dot(Jh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;ir.subVectors(this.origin,e);const p=d*this.direction.dot(Ic.crossVectors(ir,Ic));if(p<0)return null;const m=d*this.direction.dot(Qh.cross(ir));if(m<0||p+m>f)return null;const v=-d*ir.dot(Jh);return v<0?null:this.at(v/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hn{constructor(e,i,s,l,c,f,d,p,m,v,g,x,E,M,T,S){hn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,d,p,m,v,g,x,E,M,T,S)}set(e,i,s,l,c,f,d,p,m,v,g,x,E,M,T,S){const _=this.elements;return _[0]=e,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=f,_[9]=d,_[13]=p,_[2]=m,_[6]=v,_[10]=g,_[14]=x,_[3]=E,_[7]=M,_[11]=T,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/Ns.setFromMatrixColumn(e,0).length(),c=1/Ns.setFromMatrixColumn(e,1).length(),f=1/Ns.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),d=Math.sin(s),p=Math.cos(l),m=Math.sin(l),v=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const x=f*v,E=f*g,M=d*v,T=d*g;i[0]=p*v,i[4]=-p*g,i[8]=m,i[1]=E+M*m,i[5]=x-T*m,i[9]=-d*p,i[2]=T-x*m,i[6]=M+E*m,i[10]=f*p}else if(e.order==="YXZ"){const x=p*v,E=p*g,M=m*v,T=m*g;i[0]=x+T*d,i[4]=M*d-E,i[8]=f*m,i[1]=f*g,i[5]=f*v,i[9]=-d,i[2]=E*d-M,i[6]=T+x*d,i[10]=f*p}else if(e.order==="ZXY"){const x=p*v,E=p*g,M=m*v,T=m*g;i[0]=x-T*d,i[4]=-f*g,i[8]=M+E*d,i[1]=E+M*d,i[5]=f*v,i[9]=T-x*d,i[2]=-f*m,i[6]=d,i[10]=f*p}else if(e.order==="ZYX"){const x=f*v,E=f*g,M=d*v,T=d*g;i[0]=p*v,i[4]=M*m-E,i[8]=x*m+T,i[1]=p*g,i[5]=T*m+x,i[9]=E*m-M,i[2]=-m,i[6]=d*p,i[10]=f*p}else if(e.order==="YZX"){const x=f*p,E=f*m,M=d*p,T=d*m;i[0]=p*v,i[4]=T-x*g,i[8]=M*g+E,i[1]=g,i[5]=f*v,i[9]=-d*v,i[2]=-m*v,i[6]=E*g+M,i[10]=x-T*g}else if(e.order==="XZY"){const x=f*p,E=f*m,M=d*p,T=d*m;i[0]=p*v,i[4]=-g,i[8]=m*v,i[1]=x*g+T,i[5]=f*v,i[9]=E*g-M,i[2]=M*g-E,i[6]=d*v,i[10]=T*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wb,e,Rb)}lookAt(e,i,s){const l=this.elements;return ci.subVectors(e,i),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),ar.crossVectors(s,ci),ar.lengthSq()===0&&(Math.abs(s.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),ar.crossVectors(s,ci)),ar.normalize(),Fc.crossVectors(ci,ar),l[0]=ar.x,l[4]=Fc.x,l[8]=ci.x,l[1]=ar.y,l[5]=Fc.y,l[9]=ci.y,l[2]=ar.z,l[6]=Fc.z,l[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],d=s[4],p=s[8],m=s[12],v=s[1],g=s[5],x=s[9],E=s[13],M=s[2],T=s[6],S=s[10],_=s[14],L=s[3],U=s[7],D=s[11],k=s[15],H=l[0],B=l[4],Y=l[8],N=l[12],C=l[1],V=l[5],ue=l[9],re=l[13],_e=l[2],pe=l[6],z=l[10],Q=l[14],K=l[3],Ee=l[7],Ae=l[11],P=l[15];return c[0]=f*H+d*C+p*_e+m*K,c[4]=f*B+d*V+p*pe+m*Ee,c[8]=f*Y+d*ue+p*z+m*Ae,c[12]=f*N+d*re+p*Q+m*P,c[1]=v*H+g*C+x*_e+E*K,c[5]=v*B+g*V+x*pe+E*Ee,c[9]=v*Y+g*ue+x*z+E*Ae,c[13]=v*N+g*re+x*Q+E*P,c[2]=M*H+T*C+S*_e+_*K,c[6]=M*B+T*V+S*pe+_*Ee,c[10]=M*Y+T*ue+S*z+_*Ae,c[14]=M*N+T*re+S*Q+_*P,c[3]=L*H+U*C+D*_e+k*K,c[7]=L*B+U*V+D*pe+k*Ee,c[11]=L*Y+U*ue+D*z+k*Ae,c[15]=L*N+U*re+D*Q+k*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],d=e[5],p=e[9],m=e[13],v=e[2],g=e[6],x=e[10],E=e[14],M=e[3],T=e[7],S=e[11],_=e[15];return M*(+c*p*g-l*m*g-c*d*x+s*m*x+l*d*E-s*p*E)+T*(+i*p*E-i*m*x+c*f*x-l*f*E+l*m*v-c*p*v)+S*(+i*m*g-i*d*E-c*f*g+s*f*E+c*d*v-s*m*v)+_*(-l*d*v-i*p*g+i*d*x+l*f*g-s*f*x+s*p*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8],g=e[9],x=e[10],E=e[11],M=e[12],T=e[13],S=e[14],_=e[15],L=g*S*m-T*x*m+T*p*E-d*S*E-g*p*_+d*x*_,U=M*x*m-v*S*m-M*p*E+f*S*E+v*p*_-f*x*_,D=v*T*m-M*g*m+M*d*E-f*T*E-v*d*_+f*g*_,k=M*g*p-v*T*p-M*d*x+f*T*x+v*d*S-f*g*S,H=i*L+s*U+l*D+c*k;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/H;return e[0]=L*B,e[1]=(T*x*c-g*S*c-T*l*E+s*S*E+g*l*_-s*x*_)*B,e[2]=(d*S*c-T*p*c+T*l*m-s*S*m-d*l*_+s*p*_)*B,e[3]=(g*p*c-d*x*c-g*l*m+s*x*m+d*l*E-s*p*E)*B,e[4]=U*B,e[5]=(v*S*c-M*x*c+M*l*E-i*S*E-v*l*_+i*x*_)*B,e[6]=(M*p*c-f*S*c-M*l*m+i*S*m+f*l*_-i*p*_)*B,e[7]=(f*x*c-v*p*c+v*l*m-i*x*m-f*l*E+i*p*E)*B,e[8]=D*B,e[9]=(M*g*c-v*T*c-M*s*E+i*T*E+v*s*_-i*g*_)*B,e[10]=(f*T*c-M*d*c+M*s*m-i*T*m-f*s*_+i*d*_)*B,e[11]=(v*d*c-f*g*c-v*s*m+i*g*m+f*s*E-i*d*E)*B,e[12]=k*B,e[13]=(v*T*l-M*g*l+M*s*x-i*T*x-v*s*S+i*g*S)*B,e[14]=(M*d*l-f*T*l-M*s*p+i*T*p+f*s*S-i*d*S)*B,e[15]=(f*g*l-v*d*l+v*s*p-i*g*p-f*s*x+i*d*x)*B,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,d=e.y,p=e.z,m=c*f,v=c*d;return this.set(m*f+s,m*d-l*p,m*p+l*d,0,m*d+l*p,v*d+s,v*p-l*f,0,m*p-l*d,v*p+l*f,c*p*p+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,d=i._z,p=i._w,m=c+c,v=f+f,g=d+d,x=c*m,E=c*v,M=c*g,T=f*v,S=f*g,_=d*g,L=p*m,U=p*v,D=p*g,k=s.x,H=s.y,B=s.z;return l[0]=(1-(T+_))*k,l[1]=(E+D)*k,l[2]=(M-U)*k,l[3]=0,l[4]=(E-D)*H,l[5]=(1-(x+_))*H,l[6]=(S+L)*H,l[7]=0,l[8]=(M+U)*B,l[9]=(S-L)*B,l[10]=(1-(x+T))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let c=Ns.set(l[0],l[1],l[2]).length();const f=Ns.set(l[4],l[5],l[6]).length(),d=Ns.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],Ni.copy(this);const m=1/c,v=1/f,g=1/d;return Ni.elements[0]*=m,Ni.elements[1]*=m,Ni.elements[2]*=m,Ni.elements[4]*=v,Ni.elements[5]*=v,Ni.elements[6]*=v,Ni.elements[8]*=g,Ni.elements[9]*=g,Ni.elements[10]*=g,i.setFromRotationMatrix(Ni),s.x=c,s.y=f,s.z=d,this}makePerspective(e,i,s,l,c,f,d=Ma){const p=this.elements,m=2*c/(i-e),v=2*c/(s-l),g=(i+e)/(i-e),x=(s+l)/(s-l);let E,M;if(d===Ma)E=-(f+c)/(f-c),M=-2*f*c/(f-c);else if(d===mu)E=-f/(f-c),M=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=M,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,f,d=Ma){const p=this.elements,m=1/(i-e),v=1/(s-l),g=1/(f-c),x=(i+e)*m,E=(s+l)*v;let M,T;if(d===Ma)M=(f+c)*g,T=-2*g;else if(d===mu)M=c*g,T=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-E,p[2]=0,p[6]=0,p[10]=T,p[14]=-M,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Ns=new oe,Ni=new hn,wb=new oe(0,0,0),Rb=new oe(1,1,1),ar=new oe,Fc=new oe,ci=new oe,H0=new hn,G0=new xl;class Ca{constructor(e=0,i=0,s=0,l=Ca.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],d=l[8],p=l[1],m=l[5],v=l[9],g=l[2],x=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(bt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,E),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-bt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,E),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(bt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return H0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(H0,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return G0.setFromEuler(this),this.setFromQuaternion(G0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ca.DEFAULT_ORDER="XYZ";class ox{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cb=0;const V0=new oe,Ls=new xl,ya=new hn,Hc=new oe,tl=new oe,Db=new oe,Ub=new xl,k0=new oe(1,0,0),j0=new oe(0,1,0),X0=new oe(0,0,1),W0={type:"added"},Nb={type:"removed"},Os={type:"childadded",child:null},$h={type:"childremoved",child:null};class di extends Da{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cb++}),this.uuid=_l(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=di.DEFAULT_UP.clone();const e=new oe,i=new Ca,s=new xl,l=new oe(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new hn},normalMatrix:{value:new ct}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=di.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=di.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ox,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ls.setFromAxisAngle(e,i),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,i){return Ls.setFromAxisAngle(e,i),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(k0,e)}rotateY(e){return this.rotateOnAxis(j0,e)}rotateZ(e){return this.rotateOnAxis(X0,e)}translateOnAxis(e,i){return V0.copy(e).applyQuaternion(this.quaternion),this.position.add(V0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(k0,e)}translateY(e){return this.translateOnAxis(j0,e)}translateZ(e){return this.translateOnAxis(X0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ya.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Hc.copy(e):Hc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ya.lookAt(tl,Hc,this.up):ya.lookAt(Hc,tl,this.up),this.quaternion.setFromRotationMatrix(ya),l&&(ya.extractRotation(l.matrixWorld),Ls.setFromRotationMatrix(ya),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(W0),Os.child=e,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Nb),$h.child=e,this.dispatchEvent($h),$h.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ya.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ya.multiply(e.parent.matrixWorld)),e.applyMatrix4(ya),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(W0),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,e,Db),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,Ub,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?{min:d.boundingBox.min.toArray(),max:d.boundingBox.max.toArray()}:void 0,boundingSphere:d.boundingSphere?{radius:d.boundingSphere.radius,center:d.boundingSphere.center.toArray()}:void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const g=p[m];c(e.shapes,g)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(e.animations,p))}}if(i){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),v=f(e.images),g=f(e.shapes),x=f(e.skeletons),E=f(e.animations),M=f(e.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),v.length>0&&(s.images=v),g.length>0&&(s.shapes=g),x.length>0&&(s.skeletons=x),E.length>0&&(s.animations=E),M.length>0&&(s.nodes=M)}return s.object=l,s;function f(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}di.DEFAULT_UP=new oe(0,1,0);di.DEFAULT_MATRIX_AUTO_UPDATE=!0;di.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Li=new oe,Sa=new oe,ed=new oe,Ea=new oe,Ps=new oe,Bs=new oe,q0=new oe,td=new oe,nd=new oe,id=new oe,ad=new Jt,rd=new Jt,sd=new Jt;class Oi{constructor(e=new oe,i=new oe,s=new oe){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Li.subVectors(e,i),l.cross(Li);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Li.subVectors(l,i),Sa.subVectors(s,i),ed.subVectors(e,i);const f=Li.dot(Li),d=Li.dot(Sa),p=Li.dot(ed),m=Sa.dot(Sa),v=Sa.dot(ed),g=f*m-d*d;if(g===0)return c.set(0,0,0),null;const x=1/g,E=(m*p-d*v)*x,M=(f*v-d*p)*x;return c.set(1-E-M,M,E)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Ea)===null?!1:Ea.x>=0&&Ea.y>=0&&Ea.x+Ea.y<=1}static getInterpolation(e,i,s,l,c,f,d,p){return this.getBarycoord(e,i,s,l,Ea)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Ea.x),p.addScaledVector(f,Ea.y),p.addScaledVector(d,Ea.z),p)}static getInterpolatedAttribute(e,i,s,l,c,f){return ad.setScalar(0),rd.setScalar(0),sd.setScalar(0),ad.fromBufferAttribute(e,i),rd.fromBufferAttribute(e,s),sd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(ad,c.x),f.addScaledVector(rd,c.y),f.addScaledVector(sd,c.z),f}static isFrontFacing(e,i,s,l){return Li.subVectors(s,i),Sa.subVectors(e,i),Li.cross(Sa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),Sa.subVectors(this.a,this.b),Li.cross(Sa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Oi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Oi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,d;Ps.subVectors(l,s),Bs.subVectors(c,s),td.subVectors(e,s);const p=Ps.dot(td),m=Bs.dot(td);if(p<=0&&m<=0)return i.copy(s);nd.subVectors(e,l);const v=Ps.dot(nd),g=Bs.dot(nd);if(v>=0&&g<=v)return i.copy(l);const x=p*g-v*m;if(x<=0&&p>=0&&v<=0)return f=p/(p-v),i.copy(s).addScaledVector(Ps,f);id.subVectors(e,c);const E=Ps.dot(id),M=Bs.dot(id);if(M>=0&&E<=M)return i.copy(c);const T=E*m-p*M;if(T<=0&&m>=0&&M<=0)return d=m/(m-M),i.copy(s).addScaledVector(Bs,d);const S=v*M-E*g;if(S<=0&&g-v>=0&&E-M>=0)return q0.subVectors(c,l),d=(g-v)/(g-v+(E-M)),i.copy(l).addScaledVector(q0,d);const _=1/(S+T+x);return f=T*_,d=x*_,i.copy(s).addScaledVector(Ps,f).addScaledVector(Bs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},Gc={h:0,s:0,l:0};function od(a,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(e-a)*6*i:i<1/2?e:i<2/3?a+(e-a)*6*(2/3-i):a}class zt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=Ct.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ct.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=Ct.workingColorSpace){if(e=pb(e,1),i=bt(i,0,1),s=bt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=od(f,c,e+1/3),this.g=od(f,c,e),this.b=od(f,c,e-1/3)}return Ct.toWorkingColorSpace(this,l),this}setStyle(e,i=Bt){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Bt){const s=lx[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Aa(e.r),this.g=Aa(e.g),this.b=Aa(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return Ct.fromWorkingColorSpace(Pn.copy(this),e),Math.round(bt(Pn.r*255,0,255))*65536+Math.round(bt(Pn.g*255,0,255))*256+Math.round(bt(Pn.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ct.workingColorSpace){Ct.fromWorkingColorSpace(Pn.copy(this),i);const s=Pn.r,l=Pn.g,c=Pn.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let p,m;const v=(d+f)/2;if(d===f)p=0,m=0;else{const g=f-d;switch(m=v<=.5?g/(f+d):g/(2-f-d),f){case s:p=(l-c)/g+(l<c?6:0);break;case l:p=(c-s)/g+2;break;case c:p=(s-l)/g+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,i=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(Pn.copy(this),i),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=Bt){Ct.fromWorkingColorSpace(Pn.copy(this),e);const i=Pn.r,s=Pn.g,l=Pn.b;return e!==Bt?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(rr),this.setHSL(rr.h+e,rr.s+i,rr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(rr),e.getHSL(Gc);const s=jh(rr.h,Gc.h,i),l=jh(rr.s,Gc.s,i),c=jh(rr.l,Gc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new zt;zt.NAMES=lx;let Lb=0;class $s extends Da{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lb++}),this.uuid=_l(),this.name="",this.type="Material",this.blending=ks,this.side=Ra,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bd,this.blendDst=Md,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=L0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(s.blending=this.blending),this.side!==Ra&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==bd&&(s.blendSrc=this.blendSrc),this.blendDst!==Md&&(s.blendDst=this.blendDst),this.blendEquation!==Hr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==L0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Eu extends $s{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ca,this.combine=Y_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fn=new oe,Vc=new ut;let Ob=0;class bi{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ob++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=O0,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Vc.fromBufferAttribute(this,i),Vc.applyMatrix3(e),this.setXY(i,Vc.x,Vc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Jo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Jn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Jo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Jn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Jo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Jn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Jo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Jn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Jo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Jn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Jn(i,this.array),s=Jn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Jn(i,this.array),s=Jn(s,this.array),l=Jn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Jn(i,this.array),s=Jn(s,this.array),l=Jn(l,this.array),c=Jn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==O0&&(e.usage=this.usage),e}}class cx extends bi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class ux extends bi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Zi extends bi{constructor(e,i,s){super(new Float32Array(e),i,s)}}let Pb=0;const Ei=new hn,ld=new di,zs=new oe,ui=new yl,nl=new yl,yn=new oe;class Ua extends Da{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pb++}),this.uuid=_l(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rx(e)?ux:cx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ct().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,i,s){return Ei.makeTranslation(e,i,s),this.applyMatrix4(Ei),this}scale(e,i,s){return Ei.makeScale(e,i,s),this.applyMatrix4(Ei),this}lookAt(e){return ld.lookAt(e),ld.updateMatrix(),this.applyMatrix4(ld.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Zi(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ui.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ap);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const s=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];nl.setFromBufferAttribute(d),this.morphTargetsRelative?(yn.addVectors(ui.min,nl.min),ui.expandByPoint(yn),yn.addVectors(ui.max,nl.max),ui.expandByPoint(yn)):(ui.expandByPoint(nl.min),ui.expandByPoint(nl.max))}ui.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)yn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(yn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)yn.fromBufferAttribute(d,m),p&&(zs.fromBufferAttribute(e,m),yn.add(zs)),l=Math.max(l,s.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let Y=0;Y<s.count;Y++)d[Y]=new oe,p[Y]=new oe;const m=new oe,v=new oe,g=new oe,x=new ut,E=new ut,M=new ut,T=new oe,S=new oe;function _(Y,N,C){m.fromBufferAttribute(s,Y),v.fromBufferAttribute(s,N),g.fromBufferAttribute(s,C),x.fromBufferAttribute(c,Y),E.fromBufferAttribute(c,N),M.fromBufferAttribute(c,C),v.sub(m),g.sub(m),E.sub(x),M.sub(x);const V=1/(E.x*M.y-M.x*E.y);isFinite(V)&&(T.copy(v).multiplyScalar(M.y).addScaledVector(g,-E.y).multiplyScalar(V),S.copy(g).multiplyScalar(E.x).addScaledVector(v,-M.x).multiplyScalar(V),d[Y].add(T),d[N].add(T),d[C].add(T),p[Y].add(S),p[N].add(S),p[C].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let Y=0,N=L.length;Y<N;++Y){const C=L[Y],V=C.start,ue=C.count;for(let re=V,_e=V+ue;re<_e;re+=3)_(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const U=new oe,D=new oe,k=new oe,H=new oe;function B(Y){k.fromBufferAttribute(l,Y),H.copy(k);const N=d[Y];U.copy(N),U.sub(k.multiplyScalar(k.dot(N))).normalize(),D.crossVectors(H,N);const V=D.dot(p[Y])<0?-1:1;f.setXYZW(Y,U.x,U.y,U.z,V)}for(let Y=0,N=L.length;Y<N;++Y){const C=L[Y],V=C.start,ue=C.count;for(let re=V,_e=V+ue;re<_e;re+=3)B(e.getX(re+0)),B(e.getX(re+1)),B(e.getX(re+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new bi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,E=s.count;x<E;x++)s.setXYZ(x,0,0,0);const l=new oe,c=new oe,f=new oe,d=new oe,p=new oe,m=new oe,v=new oe,g=new oe;if(e)for(let x=0,E=e.count;x<E;x+=3){const M=e.getX(x+0),T=e.getX(x+1),S=e.getX(x+2);l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,S),v.subVectors(f,c),g.subVectors(l,c),v.cross(g),d.fromBufferAttribute(s,M),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,S),d.add(v),p.add(v),m.add(v),s.setXYZ(M,d.x,d.y,d.z),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(S,m.x,m.y,m.z)}else for(let x=0,E=i.count;x<E;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),v.subVectors(f,c),g.subVectors(l,c),v.cross(g),s.setXYZ(x+0,v.x,v.y,v.z),s.setXYZ(x+1,v.x,v.y,v.z),s.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)yn.fromBufferAttribute(e,i),yn.normalize(),e.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function e(d,p){const m=d.array,v=d.itemSize,g=d.normalized,x=new m.constructor(p.length*v);let E=0,M=0;for(let T=0,S=p.length;T<S;T++){d.isInterleavedBufferAttribute?E=p[T]*d.data.stride+d.offset:E=p[T]*v;for(let _=0;_<v;_++)x[M++]=m[E++]}return new bi(x,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ua,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=e(p,s);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let v=0,g=m.length;v<g;v++){const x=m[v],E=e(x,s);p.push(E)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let g=0,x=m.length;g<x;g++){const E=m[g];v.push(E.toJSON(e.data))}v.length>0&&(l[p]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const m in l){const v=l[m];this.setAttribute(m,v.clone(i))}const c=e.morphAttributes;for(const m in c){const v=[],g=c[m];for(let x=0,E=g.length;x<E;x++)v.push(g[x].clone(i));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,v=f.length;m<v;m++){const g=f[m];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Y0=new hn,Lr=new Ab,kc=new Ap,Z0=new oe,jc=new oe,Xc=new oe,Wc=new oe,cd=new oe,qc=new oe,K0=new oe,Yc=new oe;class hi extends di{constructor(e=new Ua,i=new Eu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){qc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const v=d[p],g=c[p];v!==0&&(cd.fromBufferAttribute(g,e),f?qc.addScaledVector(cd,v):qc.addScaledVector(cd.sub(i),v))}i.add(qc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),kc.copy(s.boundingSphere),kc.applyMatrix4(c),Lr.copy(e.ray).recast(e.near),!(kc.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(kc,Z0)===null||Lr.origin.distanceToSquared(Z0)>(e.far-e.near)**2))&&(Y0.copy(c).invert(),Lr.copy(e.ray).applyMatrix4(Y0),!(s.boundingBox!==null&&Lr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Lr)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,x=c.groups,E=c.drawRange;if(d!==null)if(Array.isArray(f))for(let M=0,T=x.length;M<T;M++){const S=x[M],_=f[S.materialIndex],L=Math.max(S.start,E.start),U=Math.min(d.count,Math.min(S.start+S.count,E.start+E.count));for(let D=L,k=U;D<k;D+=3){const H=d.getX(D),B=d.getX(D+1),Y=d.getX(D+2);l=Zc(this,_,e,s,m,v,g,H,B,Y),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const M=Math.max(0,E.start),T=Math.min(d.count,E.start+E.count);for(let S=M,_=T;S<_;S+=3){const L=d.getX(S),U=d.getX(S+1),D=d.getX(S+2);l=Zc(this,f,e,s,m,v,g,L,U,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let M=0,T=x.length;M<T;M++){const S=x[M],_=f[S.materialIndex],L=Math.max(S.start,E.start),U=Math.min(p.count,Math.min(S.start+S.count,E.start+E.count));for(let D=L,k=U;D<k;D+=3){const H=D,B=D+1,Y=D+2;l=Zc(this,_,e,s,m,v,g,H,B,Y),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const M=Math.max(0,E.start),T=Math.min(p.count,E.start+E.count);for(let S=M,_=T;S<_;S+=3){const L=S,U=S+1,D=S+2;l=Zc(this,f,e,s,m,v,g,L,U,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function Bb(a,e,i,s,l,c,f,d){let p;if(e.side===Sn?p=s.intersectTriangle(f,c,l,!0,d):p=s.intersectTriangle(l,c,f,e.side===Ra,d),p===null)return null;Yc.copy(d),Yc.applyMatrix4(a.matrixWorld);const m=i.ray.origin.distanceTo(Yc);return m<i.near||m>i.far?null:{distance:m,point:Yc.clone(),object:a}}function Zc(a,e,i,s,l,c,f,d,p,m){a.getVertexPosition(d,jc),a.getVertexPosition(p,Xc),a.getVertexPosition(m,Wc);const v=Bb(a,e,i,s,jc,Xc,Wc,K0);if(v){const g=new oe;Oi.getBarycoord(K0,jc,Xc,Wc,g),l&&(v.uv=Oi.getInterpolatedAttribute(l,d,p,m,g,new ut)),c&&(v.uv1=Oi.getInterpolatedAttribute(c,d,p,m,g,new ut)),f&&(v.normal=Oi.getInterpolatedAttribute(f,d,p,m,g,new oe),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new oe,materialIndex:0};Oi.getNormal(jc,Xc,Wc,x.normal),v.face=x,v.barycoord=g}return v}class eo extends Ua{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],v=[],g=[];let x=0,E=0;M("z","y","x",-1,-1,s,i,e,f,c,0),M("z","y","x",1,-1,s,i,-e,f,c,1),M("x","z","y",1,1,e,s,i,l,f,2),M("x","z","y",1,-1,e,s,-i,l,f,3),M("x","y","z",1,-1,e,i,s,l,c,4),M("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new Zi(m,3)),this.setAttribute("normal",new Zi(v,3)),this.setAttribute("uv",new Zi(g,2));function M(T,S,_,L,U,D,k,H,B,Y,N){const C=D/B,V=k/Y,ue=D/2,re=k/2,_e=H/2,pe=B+1,z=Y+1;let Q=0,K=0;const Ee=new oe;for(let Ae=0;Ae<z;Ae++){const P=Ae*V-re;for(let ne=0;ne<pe;ne++){const Se=ne*C-ue;Ee[T]=Se*L,Ee[S]=P*U,Ee[_]=_e,m.push(Ee.x,Ee.y,Ee.z),Ee[T]=0,Ee[S]=0,Ee[_]=H>0?1:-1,v.push(Ee.x,Ee.y,Ee.z),g.push(ne/B),g.push(1-Ae/Y),Q+=1}}for(let Ae=0;Ae<Y;Ae++)for(let P=0;P<B;P++){const ne=x+P+pe*Ae,Se=x+P+pe*(Ae+1),Z=x+(P+1)+pe*(Ae+1),de=x+(P+1)+pe*Ae;p.push(ne,Se,de),p.push(Se,Z,de),K+=6}d.addGroup(E,K,N),E+=K,x+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(a){const e={};for(const i in a){e[i]={};for(const s in a[i]){const l=a[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Vn(a){const e={};for(let i=0;i<a.length;i++){const s=Ks(a[i]);for(const l in s)e[l]=s[l]}return e}function zb(a){const e=[];for(let i=0;i<a.length;i++)e.push(a[i].clone());return e}function fx(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const Ib={clone:Ks,merge:Vn};var Fb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends $s{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fb,this.fragmentShader=Hb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=zb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class hx extends di{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=Ma}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const sr=new oe,Q0=new ut,J0=new ut;class $n extends hx{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=op*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return op*2*Math.atan(Math.tan(kh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(sr.x,sr.y).multiplyScalar(-e/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(sr.x,sr.y).multiplyScalar(-e/sr.z)}getViewSize(e,i){return this.getViewBounds(e,Q0,J0),i.subVectors(J0,Q0)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(kh*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,i-=f.offsetY*s/m,l*=f.width/p,s*=f.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Is=-90,Fs=1;class Gb extends di{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new $n(Is,Fs,e,i);l.layers=this.layers,this.add(l);const c=new $n(Is,Fs,e,i);c.layers=this.layers,this.add(c);const f=new $n(Is,Fs,e,i);f.layers=this.layers,this.add(f);const d=new $n(Is,Fs,e,i);d.layers=this.layers,this.add(d);const p=new $n(Is,Fs,e,i);p.layers=this.layers,this.add(p);const m=new $n(Is,Fs,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,d,p]=i;for(const m of i)this.remove(m);if(e===Ma)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===mu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,p,m,v]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,f),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,p),e.setRenderTarget(s,4,l),e.render(i,m),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,l),e.render(i,v),e.setRenderTarget(g,x,E),e.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class dx extends Bn{constructor(e=[],i=Ws,s,l,c,f,d,p,m,v){super(e,i,s,l,c,f,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vb extends In{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new dx(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:ei}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new eo(5,5,5),c=new kn({name:"CubemapFromEquirect",uniforms:Ks(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Sn,blending:ti});c.uniforms.tEquirect.value=i;const f=new hi(l,c),d=i.minFilter;return i.minFilter===kr&&(i.minFilter=ei),new Gb(1,10,this).update(e,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}class al extends di{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kb={type:"move"};class ud{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new al,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new al,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new al,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const T of e.hand.values()){const S=i.getJointPose(T,s),_=this._getHandJoint(m,T);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const v=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],x=v.position.distanceTo(g.position),E=.02,M=.005;m.inputState.pinching&&x>E+M?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=E-M&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(kb)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new al;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class vu extends di{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ca,this.environmentIntensity=1,this.environmentRotation=new Ca,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const fd=new oe,jb=new oe,Xb=new ct;class Ir{constructor(e=new oe(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=fd.subVectors(s,i).cross(jb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(fd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||Xb.getNormalMatrix(e),l=this.coplanarPoint(fd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Or=new Ap,Kc=new oe;class px{constructor(e=new Ir,i=new Ir,s=new Ir,l=new Ir,c=new Ir,f=new Ir){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Ma){const s=this.planes,l=e.elements,c=l[0],f=l[1],d=l[2],p=l[3],m=l[4],v=l[5],g=l[6],x=l[7],E=l[8],M=l[9],T=l[10],S=l[11],_=l[12],L=l[13],U=l[14],D=l[15];if(s[0].setComponents(p-c,x-m,S-E,D-_).normalize(),s[1].setComponents(p+c,x+m,S+E,D+_).normalize(),s[2].setComponents(p+f,x+v,S+M,D+L).normalize(),s[3].setComponents(p-f,x-v,S-M,D-L).normalize(),s[4].setComponents(p-d,x-g,S-T,D-U).normalize(),i===Ma)s[5].setComponents(p+d,x+g,S+T,D+U).normalize();else if(i===mu)s[5].setComponents(d,g,T,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Or.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){return Or.center.set(0,0,0),Or.radius=.7071067811865476,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Kc.x=l.normal.x>0?e.max.x:e.min.x,Kc.y=l.normal.y>0?e.max.y:e.min.y,Kc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Kc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wp extends Bn{constructor(e,i,s=Wr,l,c,f,d=Bi,p=Bi,m,v=cl){if(v!==cl&&v!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,c,f,d,p,v,s,m),this.isDepthTexture=!0,this.image={width:e,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class bu extends Ua{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,d=Math.floor(s),p=Math.floor(l),m=d+1,v=p+1,g=e/d,x=i/p,E=[],M=[],T=[],S=[];for(let _=0;_<v;_++){const L=_*x-f;for(let U=0;U<m;U++){const D=U*g-c;M.push(D,-L,0),T.push(0,0,1),S.push(U/d),S.push(1-_/p)}}for(let _=0;_<p;_++)for(let L=0;L<d;L++){const U=L+m*_,D=L+m*(_+1),k=L+1+m*(_+1),H=L+1+m*_;E.push(U,D,H),E.push(D,k,H)}this.setIndex(E),this.setAttribute("position",new Zi(M,3)),this.setAttribute("normal",new Zi(T,3)),this.setAttribute("uv",new Zi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Rp extends Ua{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(f+d,Math.PI);let m=0;const v=[],g=new oe,x=new oe,E=[],M=[],T=[],S=[];for(let _=0;_<=s;_++){const L=[],U=_/s;let D=0;_===0&&f===0?D=.5/i:_===s&&p===Math.PI&&(D=-.5/i);for(let k=0;k<=i;k++){const H=k/i;g.x=-e*Math.cos(l+H*c)*Math.sin(f+U*d),g.y=e*Math.cos(f+U*d),g.z=e*Math.sin(l+H*c)*Math.sin(f+U*d),M.push(g.x,g.y,g.z),x.copy(g).normalize(),T.push(x.x,x.y,x.z),S.push(H+D,1-U),L.push(m++)}v.push(L)}for(let _=0;_<s;_++)for(let L=0;L<i;L++){const U=v[_][L+1],D=v[_][L],k=v[_+1][L],H=v[_+1][L+1];(_!==0||f>0)&&E.push(U,D,H),(_!==s-1||p<Math.PI)&&E.push(D,k,H)}this.setIndex(E),this.setAttribute("position",new Zi(M,3)),this.setAttribute("normal",new Zi(T,3)),this.setAttribute("uv",new Zi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wb extends $s{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qb extends $s{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class mx extends hx{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Yb extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Nt{constructor(e){this.value=e}clone(){return new Nt(this.value.clone===void 0?this.value:this.value.clone())}}function $0(a,e,i,s){const l=Zb(s);switch(i){case $_:return a*e;case tx:return a*e/l.components*l.byteLength;case Ep:return a*e/l.components*l.byteLength;case nx:return a*e*2/l.components*l.byteLength;case bp:return a*e*2/l.components*l.byteLength;case ex:return a*e*3/l.components*l.byteLength;case Pi:return a*e*4/l.components*l.byteLength;case Mp:return a*e*4/l.components*l.byteLength;case au:case ru:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case su:case ou:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Bd:case Id:return Math.max(a,16)*Math.max(e,8)/4;case Pd:case zd:return Math.max(a,8)*Math.max(e,8)/2;case Fd:case Hd:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Gd:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Vd:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case kd:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case jd:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Wd:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case qd:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Zd:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Kd:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Jd:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case $d:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case ep:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case tp:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case lu:case np:case ip:return Math.ceil(a/4)*Math.ceil(e/4)*16;case ix:case ap:return Math.ceil(a/4)*Math.ceil(e/4)*8;case rp:case sp:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Zb(a){switch(a){case zn:case K_:return{byteLength:1,components:1};case ll:case Q_:case gl:return{byteLength:2,components:1};case yp:case Sp:return{byteLength:2,components:4};case Wr:case xp:case Wi:return{byteLength:4,components:1};case J_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ml}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ml);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gx(){let a=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=a.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=a.requestAnimationFrame(l),e=!0)},stop:function(){a.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){a=c}}}function Kb(a){const e=new WeakMap;function i(d,p){const m=d.array,v=d.usage,g=m.byteLength,x=a.createBuffer();a.bindBuffer(p,x),a.bufferData(p,m,v),d.onUploadCallback();let E;if(m instanceof Float32Array)E=a.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?E=a.HALF_FLOAT:E=a.UNSIGNED_SHORT;else if(m instanceof Int16Array)E=a.SHORT;else if(m instanceof Uint32Array)E=a.UNSIGNED_INT;else if(m instanceof Int32Array)E=a.INT;else if(m instanceof Int8Array)E=a.BYTE;else if(m instanceof Uint8Array)E=a.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)E=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:E,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,p,m){const v=p.array,g=p.updateRanges;if(a.bindBuffer(m,d),g.length===0)a.bufferSubData(m,0,v);else{g.sort((E,M)=>E.start-M.start);let x=0;for(let E=1;E<g.length;E++){const M=g[x],T=g[E];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++x,g[x]=T)}g.length=x+1;for(let E=0,M=g.length;E<M;E++){const T=g[E];a.bufferSubData(m,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(a.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:f}}var Qb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jb=`#ifdef USE_ALPHAHASH
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
#endif`,$b=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iM=`#ifdef USE_AOMAP
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
#endif`,aM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rM=`#ifdef USE_BATCHING
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
#endif`,sM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uM=`#ifdef USE_IRIDESCENCE
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
#endif`,fM=`#ifdef USE_BUMPMAP
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
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_M=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,yM=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,SM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,EM=`vec3 transformedNormal = objectNormal;
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
#endif`,bM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,MM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,TM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wM="gl_FragColor = linearToOutputTexel( gl_FragColor );",RM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,CM=`#ifdef USE_ENVMAP
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
#endif`,DM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,UM=`#ifdef USE_ENVMAP
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
#endif`,NM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,LM=`#ifdef USE_ENVMAP
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
#endif`,OM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IM=`#ifdef USE_GRADIENTMAP
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
}`,FM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,VM=`uniform bool receiveShadow;
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
#endif`,kM=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,jM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,WM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,ZM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,KM=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,QM=`#if defined( RE_IndirectDiffuse )
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
#endif`,JM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$M=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sT=`#if defined( USE_POINTS_UV )
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
#endif`,oT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hT=`#ifdef USE_MORPHTARGETS
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
#endif`,dT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_T=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xT=`#ifdef USE_NORMALMAP
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
#endif`,yT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ST=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ET=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,MT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,AT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,CT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,UT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,LT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,PT=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,BT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zT=`#ifdef USE_SKINNING
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
#endif`,IT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FT=`#ifdef USE_SKINNING
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
#endif`,HT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jT=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,XT=`#ifdef USE_TRANSMISSION
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
#endif`,WT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const KT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QT=`uniform sampler2D t2D;
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
}`,JT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$T=`#ifdef ENVMAP_TYPE_CUBE
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
}`,e2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n2=`#include <common>
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
}`,i2=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,a2=`#define DISTANCE
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
}`,r2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,s2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l2=`uniform float scale;
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
}`,c2=`uniform vec3 diffuse;
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
}`,u2=`#include <common>
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
}`,f2=`uniform vec3 diffuse;
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
}`,h2=`#define LAMBERT
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
}`,d2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,p2=`#define MATCAP
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
}`,m2=`#define MATCAP
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
}`,g2=`#define NORMAL
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
}`,v2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_2=`#define PHONG
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
}`,x2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,y2=`#define STANDARD
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
}`,S2=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,E2=`#define TOON
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
}`,b2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,M2=`uniform float size;
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
}`,T2=`uniform vec3 diffuse;
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
}`,A2=`#include <common>
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
}`,w2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,R2=`uniform float rotation;
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
}`,C2=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:Qb,alphahash_pars_fragment:Jb,alphamap_fragment:$b,alphamap_pars_fragment:eM,alphatest_fragment:tM,alphatest_pars_fragment:nM,aomap_fragment:iM,aomap_pars_fragment:aM,batching_pars_vertex:rM,batching_vertex:sM,begin_vertex:oM,beginnormal_vertex:lM,bsdfs:cM,iridescence_fragment:uM,bumpmap_pars_fragment:fM,clipping_planes_fragment:hM,clipping_planes_pars_fragment:dM,clipping_planes_pars_vertex:pM,clipping_planes_vertex:mM,color_fragment:gM,color_pars_fragment:vM,color_pars_vertex:_M,color_vertex:xM,common:yM,cube_uv_reflection_fragment:SM,defaultnormal_vertex:EM,displacementmap_pars_vertex:bM,displacementmap_vertex:MM,emissivemap_fragment:TM,emissivemap_pars_fragment:AM,colorspace_fragment:wM,colorspace_pars_fragment:RM,envmap_fragment:CM,envmap_common_pars_fragment:DM,envmap_pars_fragment:UM,envmap_pars_vertex:NM,envmap_physical_pars_fragment:kM,envmap_vertex:LM,fog_vertex:OM,fog_pars_vertex:PM,fog_fragment:BM,fog_pars_fragment:zM,gradientmap_pars_fragment:IM,lightmap_pars_fragment:FM,lights_lambert_fragment:HM,lights_lambert_pars_fragment:GM,lights_pars_begin:VM,lights_toon_fragment:jM,lights_toon_pars_fragment:XM,lights_phong_fragment:WM,lights_phong_pars_fragment:qM,lights_physical_fragment:YM,lights_physical_pars_fragment:ZM,lights_fragment_begin:KM,lights_fragment_maps:QM,lights_fragment_end:JM,logdepthbuf_fragment:$M,logdepthbuf_pars_fragment:eT,logdepthbuf_pars_vertex:tT,logdepthbuf_vertex:nT,map_fragment:iT,map_pars_fragment:aT,map_particle_fragment:rT,map_particle_pars_fragment:sT,metalnessmap_fragment:oT,metalnessmap_pars_fragment:lT,morphinstance_vertex:cT,morphcolor_vertex:uT,morphnormal_vertex:fT,morphtarget_pars_vertex:hT,morphtarget_vertex:dT,normal_fragment_begin:pT,normal_fragment_maps:mT,normal_pars_fragment:gT,normal_pars_vertex:vT,normal_vertex:_T,normalmap_pars_fragment:xT,clearcoat_normal_fragment_begin:yT,clearcoat_normal_fragment_maps:ST,clearcoat_pars_fragment:ET,iridescence_pars_fragment:bT,opaque_fragment:MT,packing:TT,premultiplied_alpha_fragment:AT,project_vertex:wT,dithering_fragment:RT,dithering_pars_fragment:CT,roughnessmap_fragment:DT,roughnessmap_pars_fragment:UT,shadowmap_pars_fragment:NT,shadowmap_pars_vertex:LT,shadowmap_vertex:OT,shadowmask_pars_fragment:PT,skinbase_vertex:BT,skinning_pars_vertex:zT,skinning_vertex:IT,skinnormal_vertex:FT,specularmap_fragment:HT,specularmap_pars_fragment:GT,tonemapping_fragment:VT,tonemapping_pars_fragment:kT,transmission_fragment:jT,transmission_pars_fragment:XT,uv_pars_fragment:WT,uv_pars_vertex:qT,uv_vertex:YT,worldpos_vertex:ZT,background_vert:KT,background_frag:QT,backgroundCube_vert:JT,backgroundCube_frag:$T,cube_vert:e2,cube_frag:t2,depth_vert:n2,depth_frag:i2,distanceRGBA_vert:a2,distanceRGBA_frag:r2,equirect_vert:s2,equirect_frag:o2,linedashed_vert:l2,linedashed_frag:c2,meshbasic_vert:u2,meshbasic_frag:f2,meshlambert_vert:h2,meshlambert_frag:d2,meshmatcap_vert:p2,meshmatcap_frag:m2,meshnormal_vert:g2,meshnormal_frag:v2,meshphong_vert:_2,meshphong_frag:x2,meshphysical_vert:y2,meshphysical_frag:S2,meshtoon_vert:E2,meshtoon_frag:b2,points_vert:M2,points_frag:T2,shadow_vert:A2,shadow_frag:w2,sprite_vert:R2,sprite_frag:C2},Le={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},ji={basic:{uniforms:Vn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Vn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new zt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Vn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Vn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Vn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new zt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Vn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Vn([Le.points,Le.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Vn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Vn([Le.common,Le.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Vn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Vn([Le.sprite,Le.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:Vn([Le.common,Le.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:Vn([Le.lights,Le.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};ji.physical={uniforms:Vn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Qc={r:0,b:0,g:0},Pr=new Ca,D2=new hn;function U2(a,e,i,s,l,c,f){const d=new zt(0);let p=c===!0?0:1,m,v,g=null,x=0,E=null;function M(U){let D=U.isScene===!0?U.background:null;return D&&D.isTexture&&(D=(U.backgroundBlurriness>0?i:e).get(D)),D}function T(U){let D=!1;const k=M(U);k===null?_(d,p):k&&k.isColor&&(_(k,1),D=!0);const H=a.xr.getEnvironmentBlendMode();H==="additive"?s.buffers.color.setClear(0,0,0,1,f):H==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(a.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function S(U,D){const k=M(D);k&&(k.isCubeTexture||k.mapping===Su)?(v===void 0&&(v=new hi(new eo(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Ks(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(H,B,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Pr.copy(D.backgroundRotation),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),v.material.uniforms.envMap.value=k,v.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(D2.makeRotationFromEuler(Pr)),v.material.toneMapped=Ct.getTransfer(k.colorSpace)!==kt,(g!==k||x!==k.version||E!==a.toneMapping)&&(v.material.needsUpdate=!0,g=k,x=k.version,E=a.toneMapping),v.layers.enableAll(),U.unshift(v,v.geometry,v.material,0,0,null)):k&&k.isTexture&&(m===void 0&&(m=new hi(new bu(2,2),new kn({name:"BackgroundMaterial",uniforms:Ks(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:Ra,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=k,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Ct.getTransfer(k.colorSpace)!==kt,k.matrixAutoUpdate===!0&&k.updateMatrix(),m.material.uniforms.uvTransform.value.copy(k.matrix),(g!==k||x!==k.version||E!==a.toneMapping)&&(m.material.needsUpdate=!0,g=k,x=k.version,E=a.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function _(U,D){U.getRGB(Qc,fx(a)),s.buffers.color.setClear(Qc.r,Qc.g,Qc.b,D,f)}function L(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,D=1){d.set(U),p=D,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,_(d,p)},render:T,addToRenderList:S,dispose:L}}function N2(a,e){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,f=!1;function d(C,V,ue,re,_e){let pe=!1;const z=g(re,ue,V);c!==z&&(c=z,m(c.object)),pe=E(C,re,ue,_e),pe&&M(C,re,ue,_e),_e!==null&&e.update(_e,a.ELEMENT_ARRAY_BUFFER),(pe||f)&&(f=!1,D(C,V,ue,re),_e!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(_e).buffer))}function p(){return a.createVertexArray()}function m(C){return a.bindVertexArray(C)}function v(C){return a.deleteVertexArray(C)}function g(C,V,ue){const re=ue.wireframe===!0;let _e=s[C.id];_e===void 0&&(_e={},s[C.id]=_e);let pe=_e[V.id];pe===void 0&&(pe={},_e[V.id]=pe);let z=pe[re];return z===void 0&&(z=x(p()),pe[re]=z),z}function x(C){const V=[],ue=[],re=[];for(let _e=0;_e<i;_e++)V[_e]=0,ue[_e]=0,re[_e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ue,attributeDivisors:re,object:C,attributes:{},index:null}}function E(C,V,ue,re){const _e=c.attributes,pe=V.attributes;let z=0;const Q=ue.getAttributes();for(const K in Q)if(Q[K].location>=0){const Ae=_e[K];let P=pe[K];if(P===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(P=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(P=C.instanceColor)),Ae===void 0||Ae.attribute!==P||P&&Ae.data!==P.data)return!0;z++}return c.attributesNum!==z||c.index!==re}function M(C,V,ue,re){const _e={},pe=V.attributes;let z=0;const Q=ue.getAttributes();for(const K in Q)if(Q[K].location>=0){let Ae=pe[K];Ae===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(Ae=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(Ae=C.instanceColor));const P={};P.attribute=Ae,Ae&&Ae.data&&(P.data=Ae.data),_e[K]=P,z++}c.attributes=_e,c.attributesNum=z,c.index=re}function T(){const C=c.newAttributes;for(let V=0,ue=C.length;V<ue;V++)C[V]=0}function S(C){_(C,0)}function _(C,V){const ue=c.newAttributes,re=c.enabledAttributes,_e=c.attributeDivisors;ue[C]=1,re[C]===0&&(a.enableVertexAttribArray(C),re[C]=1),_e[C]!==V&&(a.vertexAttribDivisor(C,V),_e[C]=V)}function L(){const C=c.newAttributes,V=c.enabledAttributes;for(let ue=0,re=V.length;ue<re;ue++)V[ue]!==C[ue]&&(a.disableVertexAttribArray(ue),V[ue]=0)}function U(C,V,ue,re,_e,pe,z){z===!0?a.vertexAttribIPointer(C,V,ue,_e,pe):a.vertexAttribPointer(C,V,ue,re,_e,pe)}function D(C,V,ue,re){T();const _e=re.attributes,pe=ue.getAttributes(),z=V.defaultAttributeValues;for(const Q in pe){const K=pe[Q];if(K.location>=0){let Ee=_e[Q];if(Ee===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(Ee=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(Ee=C.instanceColor)),Ee!==void 0){const Ae=Ee.normalized,P=Ee.itemSize,ne=e.get(Ee);if(ne===void 0)continue;const Se=ne.buffer,Z=ne.type,de=ne.bytesPerElement,Me=Z===a.INT||Z===a.UNSIGNED_INT||Ee.gpuType===xp;if(Ee.isInterleavedBufferAttribute){const ye=Ee.data,ze=ye.stride,Ye=Ee.offset;if(ye.isInstancedInterleavedBuffer){for(let Ke=0;Ke<K.locationSize;Ke++)_(K.location+Ke,ye.meshPerAttribute);C.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Ke=0;Ke<K.locationSize;Ke++)S(K.location+Ke);a.bindBuffer(a.ARRAY_BUFFER,Se);for(let Ke=0;Ke<K.locationSize;Ke++)U(K.location+Ke,P/K.locationSize,Z,Ae,ze*de,(Ye+P/K.locationSize*Ke)*de,Me)}else{if(Ee.isInstancedBufferAttribute){for(let ye=0;ye<K.locationSize;ye++)_(K.location+ye,Ee.meshPerAttribute);C.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let ye=0;ye<K.locationSize;ye++)S(K.location+ye);a.bindBuffer(a.ARRAY_BUFFER,Se);for(let ye=0;ye<K.locationSize;ye++)U(K.location+ye,P/K.locationSize,Z,Ae,P*de,P/K.locationSize*ye*de,Me)}}else if(z!==void 0){const Ae=z[Q];if(Ae!==void 0)switch(Ae.length){case 2:a.vertexAttrib2fv(K.location,Ae);break;case 3:a.vertexAttrib3fv(K.location,Ae);break;case 4:a.vertexAttrib4fv(K.location,Ae);break;default:a.vertexAttrib1fv(K.location,Ae)}}}}L()}function k(){Y();for(const C in s){const V=s[C];for(const ue in V){const re=V[ue];for(const _e in re)v(re[_e].object),delete re[_e];delete V[ue]}delete s[C]}}function H(C){if(s[C.id]===void 0)return;const V=s[C.id];for(const ue in V){const re=V[ue];for(const _e in re)v(re[_e].object),delete re[_e];delete V[ue]}delete s[C.id]}function B(C){for(const V in s){const ue=s[V];if(ue[C.id]===void 0)continue;const re=ue[C.id];for(const _e in re)v(re[_e].object),delete re[_e];delete ue[C.id]}}function Y(){N(),f=!0,c!==l&&(c=l,m(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:N,dispose:k,releaseStatesOfGeometry:H,releaseStatesOfProgram:B,initAttributes:T,enableAttribute:S,disableUnusedAttributes:L}}function L2(a,e,i){let s;function l(m){s=m}function c(m,v){a.drawArrays(s,m,v),i.update(v,s,1)}function f(m,v,g){g!==0&&(a.drawArraysInstanced(s,m,v,g),i.update(v,s,g))}function d(m,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,v,0,g);let E=0;for(let M=0;M<g;M++)E+=v[M];i.update(E,s,1)}function p(m,v,g,x){if(g===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let M=0;M<m.length;M++)f(m[M],v[M],x[M]);else{E.multiDrawArraysInstancedWEBGL(s,m,0,v,0,x,0,g);let M=0;for(let T=0;T<g;T++)M+=v[T]*x[T];i.update(M,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function O2(a,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=a.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(B){return!(B!==Pi&&s.convert(B)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const Y=B===gl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==zn&&s.convert(B)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Wi&&!Y)}function p(B){if(B==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const g=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),E=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),M=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=a.getParameter(a.MAX_TEXTURE_SIZE),S=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),_=a.getParameter(a.MAX_VERTEX_ATTRIBS),L=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),U=a.getParameter(a.MAX_VARYING_VECTORS),D=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),k=M>0,H=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:g,reverseDepthBuffer:x,maxTextures:E,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:L,maxVaryings:U,maxFragmentUniforms:D,vertexTextures:k,maxSamples:H}}function P2(a){const e=this;let i=null,s=0,l=!1,c=!1;const f=new Ir,d=new ct,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const E=g.length!==0||x||s!==0||l;return l=x,s=g.length,E},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,x){i=v(g,x,0)},this.setState=function(g,x,E){const M=g.clippingPlanes,T=g.clipIntersection,S=g.clipShadows,_=a.get(g);if(!l||M===null||M.length===0||c&&!S)c?v(null):m();else{const L=c?0:s,U=L*4;let D=_.clippingState||null;p.value=D,D=v(M,x,U,E);for(let k=0;k!==U;++k)D[k]=i[k];_.clippingState=D,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=L}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(g,x,E,M){const T=g!==null?g.length:0;let S=null;if(T!==0){if(S=p.value,M!==!0||S===null){const _=E+T*4,L=x.matrixWorldInverse;d.getNormalMatrix(L),(S===null||S.length<_)&&(S=new Float32Array(_));for(let U=0,D=E;U!==T;++U,D+=4)f.copy(g[U]).applyMatrix4(L,d),f.normal.toArray(S,D),S[D+3]=f.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function B2(a){let e=new WeakMap;function i(f,d){return d===Ud?f.mapping=Ws:d===Nd&&(f.mapping=qs),f}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===Ud||d===Nd)if(e.has(f)){const p=e.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new Vb(p.height);return m.fromEquirectangularTexture(a,f),e.set(f,m),f.addEventListener("dispose",l),i(m.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const Vs=4,e_=[.125,.215,.35,.446,.526,.582],Gr=20,hd=new mx,t_=new zt;let dd=null,pd=0,md=0,gd=!1;const Fr=(1+Math.sqrt(5))/2,Hs=1/Fr,n_=[new oe(-Fr,Hs,0),new oe(Fr,Hs,0),new oe(-Hs,0,Fr),new oe(Hs,0,Fr),new oe(0,Fr,-Hs),new oe(0,Fr,Hs),new oe(-1,1,-1),new oe(1,1,-1),new oe(-1,1,1),new oe(1,1,1)],z2=new oe;class i_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:d=z2}=c;dd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,s,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=s_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=r_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(dd,pd,md),this._renderer.xr.enabled=gd,e.scissorTest=!1,Jc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ws||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:ei,minFilter:ei,generateMipmaps:!1,type:gl,format:Pi,colorSpace:fr,depthBuffer:!1},l=a_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=a_(e,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=I2(c)),this._blurMaterial=F2(c,e,i)}return l}_compileMaterial(e){const i=new hi(this._lodPlanes[0],e);this._renderer.compile(i,hd)}_sceneToCubeUV(e,i,s,l,c){const p=new $n(90,1,i,s),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,E=g.toneMapping;g.getClearColor(t_),g.toneMapping=Ta,g.autoClear=!1;const M=new Eu({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),T=new hi(new eo,M);let S=!1;const _=e.background;_?_.isColor&&(M.color.copy(_),e.background=null,S=!0):(M.color.copy(t_),S=!0);for(let L=0;L<6;L++){const U=L%3;U===0?(p.up.set(0,m[L],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+v[L],c.y,c.z)):U===1?(p.up.set(0,0,m[L]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+v[L],c.z)):(p.up.set(0,m[L],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+v[L]));const D=this._cubeSize;Jc(l,U*D,L>2?D:0,D,D),g.setRenderTarget(l),S&&g.render(T,p),g.render(e,p)}T.geometry.dispose(),T.material.dispose(),g.toneMapping=E,g.autoClear=x,e.background=_}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Ws||e.mapping===qs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=s_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=r_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new hi(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;Jc(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(f,hd)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=n_[(l-c-1)%n_.length];this._blur(e,c-1,c,f,d)}i.autoClear=s}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new hi(this._lodPlanes[l],m),x=m.uniforms,E=this._sizeLods[s]-1,M=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Gr-1),T=c/M,S=isFinite(c)?1+Math.floor(v*T):Gr;S>Gr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Gr}`);const _=[];let L=0;for(let B=0;B<Gr;++B){const Y=B/T,N=Math.exp(-Y*Y/2);_.push(N),B===0?L+=N:B<S&&(L+=2*N)}for(let B=0;B<_.length;B++)_[B]=_[B]/L;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=_,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:U}=this;x.dTheta.value=M,x.mipInt.value=U-s;const D=this._sizeLods[l],k=3*D*(l>U-Vs?l-U+Vs:0),H=4*(this._cubeSize-D);Jc(i,k,H,3*D,2*D),p.setRenderTarget(i),p.render(g,hd)}}function I2(a){const e=[],i=[],s=[];let l=a;const c=a-Vs+1+e_.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);i.push(d);let p=1/d;f>a-Vs?p=e_[f-a+Vs-1]:f===0&&(p=0),s.push(p);const m=1/(d-2),v=-m,g=1+m,x=[v,v,g,v,g,g,v,v,g,g,v,g],E=6,M=6,T=3,S=2,_=1,L=new Float32Array(T*M*E),U=new Float32Array(S*M*E),D=new Float32Array(_*M*E);for(let H=0;H<E;H++){const B=H%3*2/3-1,Y=H>2?0:-1,N=[B,Y,0,B+2/3,Y,0,B+2/3,Y+1,0,B,Y,0,B+2/3,Y+1,0,B,Y+1,0];L.set(N,T*M*H),U.set(x,S*M*H);const C=[H,H,H,H,H,H];D.set(C,_*M*H)}const k=new Ua;k.setAttribute("position",new bi(L,T)),k.setAttribute("uv",new bi(U,S)),k.setAttribute("faceIndex",new bi(D,_)),e.push(k),l>Vs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function a_(a,e,i){const s=new In(a,e,i);return s.texture.mapping=Su,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Jc(a,e,i,s,l){a.viewport.set(e,i,s,l),a.scissor.set(e,i,s,l)}function F2(a,e,i){const s=new Float32Array(Gr),l=new oe(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Cp(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function r_(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cp(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function s_(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Cp(){return`

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
	`}function H2(a){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===Ud||p===Nd,v=p===Ws||p===qs;if(m||v){let g=e.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new i_(a)),g=m?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const E=d.image;return m&&E&&E.height>0||v&&E&&l(E)?(i===null&&(i=new i_(a)),g=m?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let p=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function G2(a){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=a.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&cu("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function V2(a,e,i,s){const l={},c=new WeakMap;function f(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const M in x.attributes)e.remove(x.attributes[M]);x.removeEventListener("dispose",f),delete l[x.id];const E=c.get(x);E&&(e.remove(E),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(g,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function p(g){const x=g.attributes;for(const E in x)e.update(x[E],a.ARRAY_BUFFER)}function m(g){const x=[],E=g.index,M=g.attributes.position;let T=0;if(E!==null){const L=E.array;T=E.version;for(let U=0,D=L.length;U<D;U+=3){const k=L[U+0],H=L[U+1],B=L[U+2];x.push(k,H,H,B,B,k)}}else if(M!==void 0){const L=M.array;T=M.version;for(let U=0,D=L.length/3-1;U<D;U+=3){const k=U+0,H=U+1,B=U+2;x.push(k,H,H,B,B,k)}}else return;const S=new(rx(x)?ux:cx)(x,1);S.version=T;const _=c.get(g);_&&e.remove(_),c.set(g,S)}function v(g){const x=c.get(g);if(x){const E=g.index;E!==null&&x.version<E.version&&m(g)}else m(g);return c.get(g)}return{get:d,update:p,getWireframeAttribute:v}}function k2(a,e,i){let s;function l(x){s=x}let c,f;function d(x){c=x.type,f=x.bytesPerElement}function p(x,E){a.drawElements(s,E,c,x*f),i.update(E,s,1)}function m(x,E,M){M!==0&&(a.drawElementsInstanced(s,E,c,x*f,M),i.update(E,s,M))}function v(x,E,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,E,0,c,x,0,M);let S=0;for(let _=0;_<M;_++)S+=E[_];i.update(S,s,1)}function g(x,E,M,T){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<x.length;_++)m(x[_]/f,E[_],T[_]);else{S.multiDrawElementsInstancedWEBGL(s,E,0,c,x,0,T,0,M);let _=0;for(let L=0;L<M;L++)_+=E[L]*T[L];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function j2(a){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(i.calls++,f){case a.TRIANGLES:i.triangles+=d*(c/3);break;case a.LINES:i.lines+=d*(c/2);break;case a.LINE_STRIP:i.lines+=d*(c-1);break;case a.LINE_LOOP:i.lines+=d*c;break;case a.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function X2(a,e,i){const s=new WeakMap,l=new Jt;function c(f,d,p){const m=f.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let x=s.get(d);if(x===void 0||x.count!==g){let C=function(){Y.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var E=C;x!==void 0&&x.texture.dispose();const M=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let D=0;M===!0&&(D=1),T===!0&&(D=2),S===!0&&(D=3);let k=d.attributes.position.count*D,H=1;k>e.maxTextureSize&&(H=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const B=new Float32Array(k*H*4*g),Y=new sx(B,k,H,g);Y.type=Wi,Y.needsUpdate=!0;const N=D*4;for(let V=0;V<g;V++){const ue=_[V],re=L[V],_e=U[V],pe=k*H*4*V;for(let z=0;z<ue.count;z++){const Q=z*N;M===!0&&(l.fromBufferAttribute(ue,z),B[pe+Q+0]=l.x,B[pe+Q+1]=l.y,B[pe+Q+2]=l.z,B[pe+Q+3]=0),T===!0&&(l.fromBufferAttribute(re,z),B[pe+Q+4]=l.x,B[pe+Q+5]=l.y,B[pe+Q+6]=l.z,B[pe+Q+7]=0),S===!0&&(l.fromBufferAttribute(_e,z),B[pe+Q+8]=l.x,B[pe+Q+9]=l.y,B[pe+Q+10]=l.z,B[pe+Q+11]=_e.itemSize===4?l.w:1)}}x={count:g,texture:Y,size:new ut(k,H)},s.set(d,x),d.addEventListener("dispose",C)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(a,"morphTexture",f.morphTexture,i);else{let M=0;for(let S=0;S<m.length;S++)M+=m[S];const T=d.morphTargetsRelative?1:1-M;p.getUniforms().setValue(a,"morphTargetBaseInfluence",T),p.getUniforms().setValue(a,"morphTargetInfluences",m)}p.getUniforms().setValue(a,"morphTargetsTexture",x.texture,i),p.getUniforms().setValue(a,"morphTargetsTextureSize",x.size)}return{update:c}}function W2(a,e,i,s){let l=new WeakMap;function c(p){const m=s.render.frame,v=p.geometry,g=e.get(p,v);if(l.get(g)!==m&&(e.update(g),l.set(g,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,a.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,a.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return g}function f(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:f}}const vx=new Bn,o_=new wp(1,1),_x=new sx,xx=new Mb,yx=new dx,l_=[],c_=[],u_=new Float32Array(16),f_=new Float32Array(9),h_=new Float32Array(4);function to(a,e,i){const s=a[0];if(s<=0||s>0)return a;const l=e*i;let c=l_[l];if(c===void 0&&(c=new Float32Array(l),l_[l]=c),e!==0){s.toArray(c,0);for(let f=1,d=0;f!==e;++f)d+=i,a[f].toArray(c,d)}return c}function gn(a,e){if(a.length!==e.length)return!1;for(let i=0,s=a.length;i<s;i++)if(a[i]!==e[i])return!1;return!0}function vn(a,e){for(let i=0,s=e.length;i<s;i++)a[i]=e[i]}function Mu(a,e){let i=c_[e];i===void 0&&(i=new Int32Array(e),c_[e]=i);for(let s=0;s!==e;++s)i[s]=a.allocateTextureUnit();return i}function q2(a,e){const i=this.cache;i[0]!==e&&(a.uniform1f(this.addr,e),i[0]=e)}function Y2(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;a.uniform2fv(this.addr,e),vn(i,e)}}function Z2(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(gn(i,e))return;a.uniform3fv(this.addr,e),vn(i,e)}}function K2(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;a.uniform4fv(this.addr,e),vn(i,e)}}function Q2(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;a.uniformMatrix2fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,s))return;h_.set(s),a.uniformMatrix2fv(this.addr,!1,h_),vn(i,s)}}function J2(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;a.uniformMatrix3fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,s))return;f_.set(s),a.uniformMatrix3fv(this.addr,!1,f_),vn(i,s)}}function $2(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;a.uniformMatrix4fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,s))return;u_.set(s),a.uniformMatrix4fv(this.addr,!1,u_),vn(i,s)}}function eA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1i(this.addr,e),i[0]=e)}function tA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;a.uniform2iv(this.addr,e),vn(i,e)}}function nA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;a.uniform3iv(this.addr,e),vn(i,e)}}function iA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;a.uniform4iv(this.addr,e),vn(i,e)}}function aA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1ui(this.addr,e),i[0]=e)}function rA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;a.uniform2uiv(this.addr,e),vn(i,e)}}function sA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;a.uniform3uiv(this.addr,e),vn(i,e)}}function oA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;a.uniform4uiv(this.addr,e),vn(i,e)}}function lA(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l);let c;this.type===a.SAMPLER_2D_SHADOW?(o_.compareFunction=ax,c=o_):c=vx,i.setTexture2D(e||c,l)}function cA(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||xx,l)}function uA(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||yx,l)}function fA(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||_x,l)}function hA(a){switch(a){case 5126:return q2;case 35664:return Y2;case 35665:return Z2;case 35666:return K2;case 35674:return Q2;case 35675:return J2;case 35676:return $2;case 5124:case 35670:return eA;case 35667:case 35671:return tA;case 35668:case 35672:return nA;case 35669:case 35673:return iA;case 5125:return aA;case 36294:return rA;case 36295:return sA;case 36296:return oA;case 35678:case 36198:case 36298:case 36306:case 35682:return lA;case 35679:case 36299:case 36307:return cA;case 35680:case 36300:case 36308:case 36293:return uA;case 36289:case 36303:case 36311:case 36292:return fA}}function dA(a,e){a.uniform1fv(this.addr,e)}function pA(a,e){const i=to(e,this.size,2);a.uniform2fv(this.addr,i)}function mA(a,e){const i=to(e,this.size,3);a.uniform3fv(this.addr,i)}function gA(a,e){const i=to(e,this.size,4);a.uniform4fv(this.addr,i)}function vA(a,e){const i=to(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function _A(a,e){const i=to(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function xA(a,e){const i=to(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function yA(a,e){a.uniform1iv(this.addr,e)}function SA(a,e){a.uniform2iv(this.addr,e)}function EA(a,e){a.uniform3iv(this.addr,e)}function bA(a,e){a.uniform4iv(this.addr,e)}function MA(a,e){a.uniform1uiv(this.addr,e)}function TA(a,e){a.uniform2uiv(this.addr,e)}function AA(a,e){a.uniform3uiv(this.addr,e)}function wA(a,e){a.uniform4uiv(this.addr,e)}function RA(a,e,i){const s=this.cache,l=e.length,c=Mu(i,l);gn(s,c)||(a.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)i.setTexture2D(e[f]||vx,c[f])}function CA(a,e,i){const s=this.cache,l=e.length,c=Mu(i,l);gn(s,c)||(a.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||xx,c[f])}function DA(a,e,i){const s=this.cache,l=e.length,c=Mu(i,l);gn(s,c)||(a.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||yx,c[f])}function UA(a,e,i){const s=this.cache,l=e.length,c=Mu(i,l);gn(s,c)||(a.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||_x,c[f])}function NA(a){switch(a){case 5126:return dA;case 35664:return pA;case 35665:return mA;case 35666:return gA;case 35674:return vA;case 35675:return _A;case 35676:return xA;case 5124:case 35670:return yA;case 35667:case 35671:return SA;case 35668:case 35672:return EA;case 35669:case 35673:return bA;case 5125:return MA;case 36294:return TA;case 36295:return AA;case 36296:return wA;case 35678:case 36198:case 36298:case 36306:case 35682:return RA;case 35679:case 36299:case 36307:return CA;case 35680:case 36300:case 36308:case 36293:return DA;case 36289:case 36303:case 36311:case 36292:return UA}}class LA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=hA(i.type)}}class OA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=NA(i.type)}}class PA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(e,i[d.id],s)}}}const vd=/(\w+)(\])?(\[|\.)?/g;function d_(a,e){a.seq.push(e),a.map[e.id]=e}function BA(a,e,i){const s=a.name,l=s.length;for(vd.lastIndex=0;;){const c=vd.exec(s),f=vd.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===l){d_(i,m===void 0?new LA(d,a,e):new OA(d,a,e));break}else{let g=i.map[d];g===void 0&&(g=new PA(d),d_(i,g)),i=g}}}class uu{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=e.getActiveUniform(i,l),f=e.getUniformLocation(i,c.name);BA(c,f,this)}}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],p=s[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function p_(a,e,i){const s=a.createShader(e);return a.shaderSource(s,i),a.compileShader(s),s}const zA=37297;let IA=0;function FA(a,e){const i=a.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===e?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const m_=new ct;function HA(a){Ct._getMatrix(m_,Ct.workingColorSpace,a);const e=`mat3( ${m_.elements.map(i=>i.toFixed(4))} )`;switch(Ct.getTransfer(a)){case pu:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function g_(a,e,i){const s=a.getShaderParameter(e,a.COMPILE_STATUS),l=a.getShaderInfoLog(e).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+FA(a.getShaderSource(e),f)}else return l}function GA(a,e){const i=HA(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function VA(a,e){let i;switch(e){case KE:i="Linear";break;case QE:i="Reinhard";break;case JE:i="Cineon";break;case $E:i="ACESFilmic";break;case tb:i="AgX";break;case nb:i="Neutral";break;case eb:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const $c=new oe;function kA(){Ct.getLuminanceCoefficients($c);const a=$c.x.toFixed(4),e=$c.y.toFixed(4),i=$c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jA(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rl).join(`
`)}function XA(a){const e=[];for(const i in a){const s=a[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function WA(a,e){const i={},s=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=a.getActiveAttrib(e,l),f=c.name;let d=1;c.type===a.FLOAT_MAT2&&(d=2),c.type===a.FLOAT_MAT3&&(d=3),c.type===a.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:a.getAttribLocation(e,f),locationSize:d}}return i}function rl(a){return a!==""}function v_(a,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function __(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qA=/^[ \t]*#include +<([\w\d./]+)>/gm;function lp(a){return a.replace(qA,ZA)}const YA=new Map;function ZA(a,e){let i=ft[e];if(i===void 0){const s=YA.get(e);if(s!==void 0)i=ft[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return lp(i)}const KA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function x_(a){return a.replace(KA,QA)}function QA(a,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function y_(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function JA(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===q_?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===CE?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===ba&&(e="SHADOWMAP_TYPE_VSM"),e}function $A(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Ws:case qs:e="ENVMAP_TYPE_CUBE";break;case Su:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ew(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case qs:e="ENVMAP_MODE_REFRACTION";break}return e}function tw(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Y_:e="ENVMAP_BLENDING_MULTIPLY";break;case YE:e="ENVMAP_BLENDING_MIX";break;case ZE:e="ENVMAP_BLENDING_ADD";break}return e}function nw(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function iw(a,e,i,s){const l=a.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const p=JA(i),m=$A(i),v=ew(i),g=tw(i),x=nw(i),E=jA(i),M=XA(c),T=l.createProgram();let S,_,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(rl).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(rl).join(`
`),_.length>0&&(_+=`
`)):(S=[y_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rl).join(`
`),_=[y_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ta?"#define TONE_MAPPING":"",i.toneMapping!==Ta?ft.tonemapping_pars_fragment:"",i.toneMapping!==Ta?VA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,GA("linearToOutputTexel",i.outputColorSpace),kA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(rl).join(`
`)),f=lp(f),f=v_(f,i),f=__(f,i),d=lp(d),d=v_(d,i),d=__(d,i),f=x_(f),d=x_(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===P0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===P0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=L+S+f,D=L+_+d,k=p_(l,l.VERTEX_SHADER,U),H=p_(l,l.FRAGMENT_SHADER,D);l.attachShader(T,k),l.attachShader(T,H),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function B(V){if(a.debug.checkShaderErrors){const ue=l.getProgramInfoLog(T).trim(),re=l.getShaderInfoLog(k).trim(),_e=l.getShaderInfoLog(H).trim();let pe=!0,z=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(pe=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(l,T,k,H);else{const Q=g_(l,k,"vertex"),K=g_(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ue+`
`+Q+`
`+K)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(re===""||_e==="")&&(z=!1);z&&(V.diagnostics={runnable:pe,programLog:ue,vertexShader:{log:re,prefix:S},fragmentShader:{log:_e,prefix:_}})}l.deleteShader(k),l.deleteShader(H),Y=new uu(l,T),N=WA(l,T)}let Y;this.getUniforms=function(){return Y===void 0&&B(this),Y};let N;this.getAttributes=function(){return N===void 0&&B(this),N};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(T,zA)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=IA++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=k,this.fragmentShader=H,this}let aw=0;class rw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new sw(e),i.set(e,s)),s}}class sw{constructor(e){this.id=aw++,this.code=e,this.usedTimes=0}}function ow(a,e,i,s,l,c,f){const d=new ox,p=new rw,m=new Set,v=[],g=l.logarithmicDepthBuffer,x=l.vertexTextures;let E=l.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(N){return m.add(N),N===0?"uv":`uv${N}`}function S(N,C,V,ue,re){const _e=ue.fog,pe=re.geometry,z=N.isMeshStandardMaterial?ue.environment:null,Q=(N.isMeshStandardMaterial?i:e).get(N.envMap||z),K=Q&&Q.mapping===Su?Q.image.height:null,Ee=M[N.type];N.precision!==null&&(E=l.getMaxPrecision(N.precision),E!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",E,"instead."));const Ae=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,P=Ae!==void 0?Ae.length:0;let ne=0;pe.morphAttributes.position!==void 0&&(ne=1),pe.morphAttributes.normal!==void 0&&(ne=2),pe.morphAttributes.color!==void 0&&(ne=3);let Se,Z,de,Me;if(Ee){const Tt=ji[Ee];Se=Tt.vertexShader,Z=Tt.fragmentShader}else Se=N.vertexShader,Z=N.fragmentShader,p.update(N),de=p.getVertexShaderID(N),Me=p.getFragmentShaderID(N);const ye=a.getRenderTarget(),ze=a.state.buffers.depth.getReversed(),Ye=re.isInstancedMesh===!0,Ke=re.isBatchedMesh===!0,Wt=!!N.map,jt=!!N.matcap,ht=!!Q,F=!!N.aoMap,Un=!!N.lightMap,dt=!!N.bumpMap,gt=!!N.normalMap,je=!!N.displacementMap,Lt=!!N.emissiveMap,ke=!!N.metalnessMap,O=!!N.roughnessMap,w=N.anisotropy>0,te=N.clearcoat>0,he=N.dispersion>0,be=N.iridescence>0,ge=N.sheen>0,Ge=N.transmission>0,Ce=w&&!!N.anisotropyMap,Qe=te&&!!N.clearcoatMap,$e=te&&!!N.clearcoatNormalMap,we=te&&!!N.clearcoatRoughnessMap,Ie=be&&!!N.iridescenceMap,Ze=be&&!!N.iridescenceThicknessMap,Ve=ge&&!!N.sheenColorMap,Pe=ge&&!!N.sheenRoughnessMap,tt=!!N.specularMap,st=!!N.specularColorMap,It=!!N.specularIntensityMap,X=Ge&&!!N.transmissionMap,De=Ge&&!!N.thicknessMap,ce=!!N.gradientMap,xe=!!N.alphaMap,Re=N.alphaTest>0,Ue=!!N.alphaHash,nt=!!N.extensions;let Kt=Ta;N.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Kt=a.toneMapping);const dn={shaderID:Ee,shaderType:N.type,shaderName:N.name,vertexShader:Se,fragmentShader:Z,defines:N.defines,customVertexShaderID:de,customFragmentShaderID:Me,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:E,batching:Ke,batchingColor:Ke&&re._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&re.instanceColor!==null,instancingMorph:Ye&&re.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ye===null?a.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:fr,alphaToCoverage:!!N.alphaToCoverage,map:Wt,matcap:jt,envMap:ht,envMapMode:ht&&Q.mapping,envMapCubeUVHeight:K,aoMap:F,lightMap:Un,bumpMap:dt,normalMap:gt,displacementMap:x&&je,emissiveMap:Lt,normalMapObjectSpace:gt&&N.normalMapType===sb,normalMapTangentSpace:gt&&N.normalMapType===rb,metalnessMap:ke,roughnessMap:O,anisotropy:w,anisotropyMap:Ce,clearcoat:te,clearcoatMap:Qe,clearcoatNormalMap:$e,clearcoatRoughnessMap:we,dispersion:he,iridescence:be,iridescenceMap:Ie,iridescenceThicknessMap:Ze,sheen:ge,sheenColorMap:Ve,sheenRoughnessMap:Pe,specularMap:tt,specularColorMap:st,specularIntensityMap:It,transmission:Ge,transmissionMap:X,thicknessMap:De,gradientMap:ce,opaque:N.transparent===!1&&N.blending===ks&&N.alphaToCoverage===!1,alphaMap:xe,alphaTest:Re,alphaHash:Ue,combine:N.combine,mapUv:Wt&&T(N.map.channel),aoMapUv:F&&T(N.aoMap.channel),lightMapUv:Un&&T(N.lightMap.channel),bumpMapUv:dt&&T(N.bumpMap.channel),normalMapUv:gt&&T(N.normalMap.channel),displacementMapUv:je&&T(N.displacementMap.channel),emissiveMapUv:Lt&&T(N.emissiveMap.channel),metalnessMapUv:ke&&T(N.metalnessMap.channel),roughnessMapUv:O&&T(N.roughnessMap.channel),anisotropyMapUv:Ce&&T(N.anisotropyMap.channel),clearcoatMapUv:Qe&&T(N.clearcoatMap.channel),clearcoatNormalMapUv:$e&&T(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&T(N.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&T(N.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&T(N.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&T(N.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&T(N.sheenRoughnessMap.channel),specularMapUv:tt&&T(N.specularMap.channel),specularColorMapUv:st&&T(N.specularColorMap.channel),specularIntensityMapUv:It&&T(N.specularIntensityMap.channel),transmissionMapUv:X&&T(N.transmissionMap.channel),thicknessMapUv:De&&T(N.thicknessMap.channel),alphaMapUv:xe&&T(N.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(gt||w),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:re.isPoints===!0&&!!pe.attributes.uv&&(Wt||xe),fog:!!_e,useFog:N.fog===!0,fogExp2:!!_e&&_e.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:ze,skinning:re.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:ne,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:N.dithering,shadowMapEnabled:a.shadowMap.enabled&&V.length>0,shadowMapType:a.shadowMap.type,toneMapping:Kt,decodeVideoTexture:Wt&&N.map.isVideoTexture===!0&&Ct.getTransfer(N.map.colorSpace)===kt,decodeVideoTextureEmissive:Lt&&N.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(N.emissiveMap.colorSpace)===kt,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===fi,flipSided:N.side===Sn,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:nt&&N.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&N.extensions.multiDraw===!0||Ke)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return dn.vertexUv1s=m.has(1),dn.vertexUv2s=m.has(2),dn.vertexUv3s=m.has(3),m.clear(),dn}function _(N){const C=[];if(N.shaderID?C.push(N.shaderID):(C.push(N.customVertexShaderID),C.push(N.customFragmentShaderID)),N.defines!==void 0)for(const V in N.defines)C.push(V),C.push(N.defines[V]);return N.isRawShaderMaterial===!1&&(L(C,N),U(C,N),C.push(a.outputColorSpace)),C.push(N.customProgramCacheKey),C.join()}function L(N,C){N.push(C.precision),N.push(C.outputColorSpace),N.push(C.envMapMode),N.push(C.envMapCubeUVHeight),N.push(C.mapUv),N.push(C.alphaMapUv),N.push(C.lightMapUv),N.push(C.aoMapUv),N.push(C.bumpMapUv),N.push(C.normalMapUv),N.push(C.displacementMapUv),N.push(C.emissiveMapUv),N.push(C.metalnessMapUv),N.push(C.roughnessMapUv),N.push(C.anisotropyMapUv),N.push(C.clearcoatMapUv),N.push(C.clearcoatNormalMapUv),N.push(C.clearcoatRoughnessMapUv),N.push(C.iridescenceMapUv),N.push(C.iridescenceThicknessMapUv),N.push(C.sheenColorMapUv),N.push(C.sheenRoughnessMapUv),N.push(C.specularMapUv),N.push(C.specularColorMapUv),N.push(C.specularIntensityMapUv),N.push(C.transmissionMapUv),N.push(C.thicknessMapUv),N.push(C.combine),N.push(C.fogExp2),N.push(C.sizeAttenuation),N.push(C.morphTargetsCount),N.push(C.morphAttributeCount),N.push(C.numDirLights),N.push(C.numPointLights),N.push(C.numSpotLights),N.push(C.numSpotLightMaps),N.push(C.numHemiLights),N.push(C.numRectAreaLights),N.push(C.numDirLightShadows),N.push(C.numPointLightShadows),N.push(C.numSpotLightShadows),N.push(C.numSpotLightShadowsWithMaps),N.push(C.numLightProbes),N.push(C.shadowMapType),N.push(C.toneMapping),N.push(C.numClippingPlanes),N.push(C.numClipIntersection),N.push(C.depthPacking)}function U(N,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),N.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),N.push(d.mask)}function D(N){const C=M[N.type];let V;if(C){const ue=ji[C];V=Ib.clone(ue.uniforms)}else V=N.uniforms;return V}function k(N,C){let V;for(let ue=0,re=v.length;ue<re;ue++){const _e=v[ue];if(_e.cacheKey===C){V=_e,++V.usedTimes;break}}return V===void 0&&(V=new iw(a,C,N,c),v.push(V)),V}function H(N){if(--N.usedTimes===0){const C=v.indexOf(N);v[C]=v[v.length-1],v.pop(),N.destroy()}}function B(N){p.remove(N)}function Y(){p.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:D,acquireProgram:k,releaseProgram:H,releaseShaderCache:B,programs:v,dispose:Y}}function lw(){let a=new WeakMap;function e(f){return a.has(f)}function i(f){let d=a.get(f);return d===void 0&&(d={},a.set(f,d)),d}function s(f){a.delete(f)}function l(f,d,p){a.get(f)[d]=p}function c(){a=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function cw(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function S_(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function E_(){const a=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(g,x,E,M,T,S){let _=a[e];return _===void 0?(_={id:g.id,object:g,geometry:x,material:E,groupOrder:M,renderOrder:g.renderOrder,z:T,group:S},a[e]=_):(_.id=g.id,_.object=g,_.geometry=x,_.material=E,_.groupOrder=M,_.renderOrder=g.renderOrder,_.z=T,_.group=S),e++,_}function d(g,x,E,M,T,S){const _=f(g,x,E,M,T,S);E.transmission>0?s.push(_):E.transparent===!0?l.push(_):i.push(_)}function p(g,x,E,M,T,S){const _=f(g,x,E,M,T,S);E.transmission>0?s.unshift(_):E.transparent===!0?l.unshift(_):i.unshift(_)}function m(g,x){i.length>1&&i.sort(g||cw),s.length>1&&s.sort(x||S_),l.length>1&&l.sort(x||S_)}function v(){for(let g=e,x=a.length;g<x;g++){const E=a[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:p,finish:v,sort:m}}function uw(){let a=new WeakMap;function e(s,l){const c=a.get(s);let f;return c===void 0?(f=new E_,a.set(s,[f])):l>=c.length?(f=new E_,c.push(f)):f=c[l],f}function i(){a=new WeakMap}return{get:e,dispose:i}}function fw(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new oe,color:new zt};break;case"SpotLight":i={position:new oe,direction:new oe,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new oe,color:new zt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new oe,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":i={color:new zt,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return a[e.id]=i,i}}}function hw(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=i,i}}}let dw=0;function pw(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function mw(a){const e=new fw,i=hw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new oe);const l=new oe,c=new hn,f=new hn;function d(m){let v=0,g=0,x=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let E=0,M=0,T=0,S=0,_=0,L=0,U=0,D=0,k=0,H=0,B=0;m.sort(pw);for(let N=0,C=m.length;N<C;N++){const V=m[N],ue=V.color,re=V.intensity,_e=V.distance,pe=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)v+=ue.r*re,g+=ue.g*re,x+=ue.b*re;else if(V.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(V.sh.coefficients[z],re);B++}else if(V.isDirectionalLight){const z=e.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const Q=V.shadow,K=i.get(V);K.shadowIntensity=Q.intensity,K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,s.directionalShadow[E]=K,s.directionalShadowMap[E]=pe,s.directionalShadowMatrix[E]=V.shadow.matrix,L++}s.directional[E]=z,E++}else if(V.isSpotLight){const z=e.get(V);z.position.setFromMatrixPosition(V.matrixWorld),z.color.copy(ue).multiplyScalar(re),z.distance=_e,z.coneCos=Math.cos(V.angle),z.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),z.decay=V.decay,s.spot[T]=z;const Q=V.shadow;if(V.map&&(s.spotLightMap[k]=V.map,k++,Q.updateMatrices(V),V.castShadow&&H++),s.spotLightMatrix[T]=Q.matrix,V.castShadow){const K=i.get(V);K.shadowIntensity=Q.intensity,K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,s.spotShadow[T]=K,s.spotShadowMap[T]=pe,D++}T++}else if(V.isRectAreaLight){const z=e.get(V);z.color.copy(ue).multiplyScalar(re),z.halfWidth.set(V.width*.5,0,0),z.halfHeight.set(0,V.height*.5,0),s.rectArea[S]=z,S++}else if(V.isPointLight){const z=e.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),z.distance=V.distance,z.decay=V.decay,V.castShadow){const Q=V.shadow,K=i.get(V);K.shadowIntensity=Q.intensity,K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,K.shadowCameraNear=Q.camera.near,K.shadowCameraFar=Q.camera.far,s.pointShadow[M]=K,s.pointShadowMap[M]=pe,s.pointShadowMatrix[M]=V.shadow.matrix,U++}s.point[M]=z,M++}else if(V.isHemisphereLight){const z=e.get(V);z.skyColor.copy(V.color).multiplyScalar(re),z.groundColor.copy(V.groundColor).multiplyScalar(re),s.hemi[_]=z,_++}}S>0&&(a.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_FLOAT_1,s.rectAreaLTC2=Le.LTC_FLOAT_2):(s.rectAreaLTC1=Le.LTC_HALF_1,s.rectAreaLTC2=Le.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=g,s.ambient[2]=x;const Y=s.hash;(Y.directionalLength!==E||Y.pointLength!==M||Y.spotLength!==T||Y.rectAreaLength!==S||Y.hemiLength!==_||Y.numDirectionalShadows!==L||Y.numPointShadows!==U||Y.numSpotShadows!==D||Y.numSpotMaps!==k||Y.numLightProbes!==B)&&(s.directional.length=E,s.spot.length=T,s.rectArea.length=S,s.point.length=M,s.hemi.length=_,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=D+k-H,s.spotLightMap.length=k,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=B,Y.directionalLength=E,Y.pointLength=M,Y.spotLength=T,Y.rectAreaLength=S,Y.hemiLength=_,Y.numDirectionalShadows=L,Y.numPointShadows=U,Y.numSpotShadows=D,Y.numSpotMaps=k,Y.numLightProbes=B,s.version=dw++)}function p(m,v){let g=0,x=0,E=0,M=0,T=0;const S=v.matrixWorldInverse;for(let _=0,L=m.length;_<L;_++){const U=m[_];if(U.isDirectionalLight){const D=s.directional[g];D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),g++}else if(U.isSpotLight){const D=s.spot[E];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),E++}else if(U.isRectAreaLight){const D=s.rectArea[M];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(S),f.identity(),c.copy(U.matrixWorld),c.premultiply(S),f.extractRotation(c),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),M++}else if(U.isPointLight){const D=s.point[x];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(S),x++}else if(U.isHemisphereLight){const D=s.hemi[T];D.direction.setFromMatrixPosition(U.matrixWorld),D.direction.transformDirection(S),T++}}}return{setup:d,setupView:p,state:s}}function b_(a){const e=new mw(a),i=[],s=[];function l(v){m.camera=v,i.length=0,s.length=0}function c(v){i.push(v)}function f(v){s.push(v)}function d(){e.setup(i)}function p(v){e.setupView(i,v)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:f}}function gw(a){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let d;return f===void 0?(d=new b_(a),e.set(l,[d])):c>=f.length?(d=new b_(a),f.push(d)):d=f[c],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const vw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_w=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xw(a,e,i){let s=new px;const l=new ut,c=new ut,f=new Jt,d=new Wb({depthPacking:ab}),p=new qb,m={},v=i.maxTextureSize,g={[Ra]:Sn,[Sn]:Ra,[fi]:fi},x=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:vw,fragmentShader:_w}),E=x.clone();E.defines.HORIZONTAL_PASS=1;const M=new Ua;M.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new hi(M,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=q_;let _=this.type;this.render=function(H,B,Y){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||H.length===0)return;const N=a.getRenderTarget(),C=a.getActiveCubeFace(),V=a.getActiveMipmapLevel(),ue=a.state;ue.setBlending(ti),ue.buffers.color.setClear(1,1,1,1),ue.buffers.depth.setTest(!0),ue.setScissorTest(!1);const re=_!==ba&&this.type===ba,_e=_===ba&&this.type!==ba;for(let pe=0,z=H.length;pe<z;pe++){const Q=H[pe],K=Q.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;l.copy(K.mapSize);const Ee=K.getFrameExtents();if(l.multiply(Ee),c.copy(K.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/Ee.x),l.x=c.x*Ee.x,K.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/Ee.y),l.y=c.y*Ee.y,K.mapSize.y=c.y)),K.map===null||re===!0||_e===!0){const P=this.type!==ba?{minFilter:Bi,magFilter:Bi}:{};K.map!==null&&K.map.dispose(),K.map=new In(l.x,l.y,P),K.map.texture.name=Q.name+".shadowMap",K.camera.updateProjectionMatrix()}a.setRenderTarget(K.map),a.clear();const Ae=K.getViewportCount();for(let P=0;P<Ae;P++){const ne=K.getViewport(P);f.set(c.x*ne.x,c.y*ne.y,c.x*ne.z,c.y*ne.w),ue.viewport(f),K.updateMatrices(Q,P),s=K.getFrustum(),D(B,Y,K.camera,Q,this.type)}K.isPointLightShadow!==!0&&this.type===ba&&L(K,Y),K.needsUpdate=!1}_=this.type,S.needsUpdate=!1,a.setRenderTarget(N,C,V)};function L(H,B){const Y=e.update(T);x.defines.VSM_SAMPLES!==H.blurSamples&&(x.defines.VSM_SAMPLES=H.blurSamples,E.defines.VSM_SAMPLES=H.blurSamples,x.needsUpdate=!0,E.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new In(l.x,l.y)),x.uniforms.shadow_pass.value=H.map.texture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,a.setRenderTarget(H.mapPass),a.clear(),a.renderBufferDirect(B,null,Y,x,T,null),E.uniforms.shadow_pass.value=H.mapPass.texture,E.uniforms.resolution.value=H.mapSize,E.uniforms.radius.value=H.radius,a.setRenderTarget(H.map),a.clear(),a.renderBufferDirect(B,null,Y,E,T,null)}function U(H,B,Y,N){let C=null;const V=Y.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(V!==void 0)C=V;else if(C=Y.isPointLight===!0?p:d,a.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const ue=C.uuid,re=B.uuid;let _e=m[ue];_e===void 0&&(_e={},m[ue]=_e);let pe=_e[re];pe===void 0&&(pe=C.clone(),_e[re]=pe,B.addEventListener("dispose",k)),C=pe}if(C.visible=B.visible,C.wireframe=B.wireframe,N===ba?C.side=B.shadowSide!==null?B.shadowSide:B.side:C.side=B.shadowSide!==null?B.shadowSide:g[B.side],C.alphaMap=B.alphaMap,C.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,C.map=B.map,C.clipShadows=B.clipShadows,C.clippingPlanes=B.clippingPlanes,C.clipIntersection=B.clipIntersection,C.displacementMap=B.displacementMap,C.displacementScale=B.displacementScale,C.displacementBias=B.displacementBias,C.wireframeLinewidth=B.wireframeLinewidth,C.linewidth=B.linewidth,Y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ue=a.properties.get(C);ue.light=Y}return C}function D(H,B,Y,N,C){if(H.visible===!1)return;if(H.layers.test(B.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&C===ba)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,H.matrixWorld);const re=e.update(H),_e=H.material;if(Array.isArray(_e)){const pe=re.groups;for(let z=0,Q=pe.length;z<Q;z++){const K=pe[z],Ee=_e[K.materialIndex];if(Ee&&Ee.visible){const Ae=U(H,Ee,N,C);H.onBeforeShadow(a,H,B,Y,re,Ae,K),a.renderBufferDirect(Y,null,re,Ae,H,K),H.onAfterShadow(a,H,B,Y,re,Ae,K)}}}else if(_e.visible){const pe=U(H,_e,N,C);H.onBeforeShadow(a,H,B,Y,re,pe,null),a.renderBufferDirect(Y,null,re,pe,H,null),H.onAfterShadow(a,H,B,Y,re,pe,null)}}const ue=H.children;for(let re=0,_e=ue.length;re<_e;re++)D(ue[re],B,Y,N,C)}function k(H){H.target.removeEventListener("dispose",k);for(const Y in m){const N=m[Y],C=H.target.uuid;C in N&&(N[C].dispose(),delete N[C])}}}const yw={[Td]:du,[Ad]:Cd,[wd]:Dd,[Xs]:Rd,[du]:Td,[Cd]:Ad,[Dd]:wd,[Rd]:Xs};function Sw(a,e){function i(){let X=!1;const De=new Jt;let ce=null;const xe=new Jt(0,0,0,0);return{setMask:function(Re){ce!==Re&&!X&&(a.colorMask(Re,Re,Re,Re),ce=Re)},setLocked:function(Re){X=Re},setClear:function(Re,Ue,nt,Kt,dn){dn===!0&&(Re*=Kt,Ue*=Kt,nt*=Kt),De.set(Re,Ue,nt,Kt),xe.equals(De)===!1&&(a.clearColor(Re,Ue,nt,Kt),xe.copy(De))},reset:function(){X=!1,ce=null,xe.set(-1,0,0,0)}}}function s(){let X=!1,De=!1,ce=null,xe=null,Re=null;return{setReversed:function(Ue){if(De!==Ue){const nt=e.get("EXT_clip_control");Ue?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT),De=Ue;const Kt=Re;Re=null,this.setClear(Kt)}},getReversed:function(){return De},setTest:function(Ue){Ue?ye(a.DEPTH_TEST):ze(a.DEPTH_TEST)},setMask:function(Ue){ce!==Ue&&!X&&(a.depthMask(Ue),ce=Ue)},setFunc:function(Ue){if(De&&(Ue=yw[Ue]),xe!==Ue){switch(Ue){case Td:a.depthFunc(a.NEVER);break;case du:a.depthFunc(a.ALWAYS);break;case Ad:a.depthFunc(a.LESS);break;case Xs:a.depthFunc(a.LEQUAL);break;case wd:a.depthFunc(a.EQUAL);break;case Rd:a.depthFunc(a.GEQUAL);break;case Cd:a.depthFunc(a.GREATER);break;case Dd:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}xe=Ue}},setLocked:function(Ue){X=Ue},setClear:function(Ue){Re!==Ue&&(De&&(Ue=1-Ue),a.clearDepth(Ue),Re=Ue)},reset:function(){X=!1,ce=null,xe=null,Re=null,De=!1}}}function l(){let X=!1,De=null,ce=null,xe=null,Re=null,Ue=null,nt=null,Kt=null,dn=null;return{setTest:function(Tt){X||(Tt?ye(a.STENCIL_TEST):ze(a.STENCIL_TEST))},setMask:function(Tt){De!==Tt&&!X&&(a.stencilMask(Tt),De=Tt)},setFunc:function(Tt,En,Ti){(ce!==Tt||xe!==En||Re!==Ti)&&(a.stencilFunc(Tt,En,Ti),ce=Tt,xe=En,Re=Ti)},setOp:function(Tt,En,Ti){(Ue!==Tt||nt!==En||Kt!==Ti)&&(a.stencilOp(Tt,En,Ti),Ue=Tt,nt=En,Kt=Ti)},setLocked:function(Tt){X=Tt},setClear:function(Tt){dn!==Tt&&(a.clearStencil(Tt),dn=Tt)},reset:function(){X=!1,De=null,ce=null,xe=null,Re=null,Ue=null,nt=null,Kt=null,dn=null}}}const c=new i,f=new s,d=new l,p=new WeakMap,m=new WeakMap;let v={},g={},x=new WeakMap,E=[],M=null,T=!1,S=null,_=null,L=null,U=null,D=null,k=null,H=null,B=new zt(0,0,0),Y=0,N=!1,C=null,V=null,ue=null,re=null,_e=null;const pe=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Q=0;const K=a.getParameter(a.VERSION);K.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(K)[1]),z=Q>=1):K.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),z=Q>=2);let Ee=null,Ae={};const P=a.getParameter(a.SCISSOR_BOX),ne=a.getParameter(a.VIEWPORT),Se=new Jt().fromArray(P),Z=new Jt().fromArray(ne);function de(X,De,ce,xe){const Re=new Uint8Array(4),Ue=a.createTexture();a.bindTexture(X,Ue),a.texParameteri(X,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(X,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let nt=0;nt<ce;nt++)X===a.TEXTURE_3D||X===a.TEXTURE_2D_ARRAY?a.texImage3D(De,0,a.RGBA,1,1,xe,0,a.RGBA,a.UNSIGNED_BYTE,Re):a.texImage2D(De+nt,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Re);return Ue}const Me={};Me[a.TEXTURE_2D]=de(a.TEXTURE_2D,a.TEXTURE_2D,1),Me[a.TEXTURE_CUBE_MAP]=de(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[a.TEXTURE_2D_ARRAY]=de(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Me[a.TEXTURE_3D]=de(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),ye(a.DEPTH_TEST),f.setFunc(Xs),dt(!1),gt(C0),ye(a.CULL_FACE),F(ti);function ye(X){v[X]!==!0&&(a.enable(X),v[X]=!0)}function ze(X){v[X]!==!1&&(a.disable(X),v[X]=!1)}function Ye(X,De){return g[X]!==De?(a.bindFramebuffer(X,De),g[X]=De,X===a.DRAW_FRAMEBUFFER&&(g[a.FRAMEBUFFER]=De),X===a.FRAMEBUFFER&&(g[a.DRAW_FRAMEBUFFER]=De),!0):!1}function Ke(X,De){let ce=E,xe=!1;if(X){ce=x.get(De),ce===void 0&&(ce=[],x.set(De,ce));const Re=X.textures;if(ce.length!==Re.length||ce[0]!==a.COLOR_ATTACHMENT0){for(let Ue=0,nt=Re.length;Ue<nt;Ue++)ce[Ue]=a.COLOR_ATTACHMENT0+Ue;ce.length=Re.length,xe=!0}}else ce[0]!==a.BACK&&(ce[0]=a.BACK,xe=!0);xe&&a.drawBuffers(ce)}function Wt(X){return M!==X?(a.useProgram(X),M=X,!0):!1}const jt={[Hr]:a.FUNC_ADD,[UE]:a.FUNC_SUBTRACT,[NE]:a.FUNC_REVERSE_SUBTRACT};jt[LE]=a.MIN,jt[OE]=a.MAX;const ht={[PE]:a.ZERO,[BE]:a.ONE,[zE]:a.SRC_COLOR,[bd]:a.SRC_ALPHA,[kE]:a.SRC_ALPHA_SATURATE,[GE]:a.DST_COLOR,[FE]:a.DST_ALPHA,[IE]:a.ONE_MINUS_SRC_COLOR,[Md]:a.ONE_MINUS_SRC_ALPHA,[VE]:a.ONE_MINUS_DST_COLOR,[HE]:a.ONE_MINUS_DST_ALPHA,[jE]:a.CONSTANT_COLOR,[XE]:a.ONE_MINUS_CONSTANT_COLOR,[WE]:a.CONSTANT_ALPHA,[qE]:a.ONE_MINUS_CONSTANT_ALPHA};function F(X,De,ce,xe,Re,Ue,nt,Kt,dn,Tt){if(X===ti){T===!0&&(ze(a.BLEND),T=!1);return}if(T===!1&&(ye(a.BLEND),T=!0),X!==DE){if(X!==S||Tt!==N){if((_!==Hr||D!==Hr)&&(a.blendEquation(a.FUNC_ADD),_=Hr,D=Hr),Tt)switch(X){case ks:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case D0:a.blendFunc(a.ONE,a.ONE);break;case U0:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case N0:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case ks:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case D0:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case U0:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case N0:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}L=null,U=null,k=null,H=null,B.set(0,0,0),Y=0,S=X,N=Tt}return}Re=Re||De,Ue=Ue||ce,nt=nt||xe,(De!==_||Re!==D)&&(a.blendEquationSeparate(jt[De],jt[Re]),_=De,D=Re),(ce!==L||xe!==U||Ue!==k||nt!==H)&&(a.blendFuncSeparate(ht[ce],ht[xe],ht[Ue],ht[nt]),L=ce,U=xe,k=Ue,H=nt),(Kt.equals(B)===!1||dn!==Y)&&(a.blendColor(Kt.r,Kt.g,Kt.b,dn),B.copy(Kt),Y=dn),S=X,N=!1}function Un(X,De){X.side===fi?ze(a.CULL_FACE):ye(a.CULL_FACE);let ce=X.side===Sn;De&&(ce=!ce),dt(ce),X.blending===ks&&X.transparent===!1?F(ti):F(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const xe=X.stencilWrite;d.setTest(xe),xe&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Lt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ye(a.SAMPLE_ALPHA_TO_COVERAGE):ze(a.SAMPLE_ALPHA_TO_COVERAGE)}function dt(X){C!==X&&(X?a.frontFace(a.CW):a.frontFace(a.CCW),C=X)}function gt(X){X!==wE?(ye(a.CULL_FACE),X!==V&&(X===C0?a.cullFace(a.BACK):X===RE?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):ze(a.CULL_FACE),V=X}function je(X){X!==ue&&(z&&a.lineWidth(X),ue=X)}function Lt(X,De,ce){X?(ye(a.POLYGON_OFFSET_FILL),(re!==De||_e!==ce)&&(a.polygonOffset(De,ce),re=De,_e=ce)):ze(a.POLYGON_OFFSET_FILL)}function ke(X){X?ye(a.SCISSOR_TEST):ze(a.SCISSOR_TEST)}function O(X){X===void 0&&(X=a.TEXTURE0+pe-1),Ee!==X&&(a.activeTexture(X),Ee=X)}function w(X,De,ce){ce===void 0&&(Ee===null?ce=a.TEXTURE0+pe-1:ce=Ee);let xe=Ae[ce];xe===void 0&&(xe={type:void 0,texture:void 0},Ae[ce]=xe),(xe.type!==X||xe.texture!==De)&&(Ee!==ce&&(a.activeTexture(ce),Ee=ce),a.bindTexture(X,De||Me[X]),xe.type=X,xe.texture=De)}function te(){const X=Ae[Ee];X!==void 0&&X.type!==void 0&&(a.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function he(){try{a.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function be(){try{a.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ge(){try{a.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ge(){try{a.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ce(){try{a.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Qe(){try{a.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $e(){try{a.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function we(){try{a.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ie(){try{a.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ze(){try{a.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ve(X){Se.equals(X)===!1&&(a.scissor(X.x,X.y,X.z,X.w),Se.copy(X))}function Pe(X){Z.equals(X)===!1&&(a.viewport(X.x,X.y,X.z,X.w),Z.copy(X))}function tt(X,De){let ce=m.get(De);ce===void 0&&(ce=new WeakMap,m.set(De,ce));let xe=ce.get(X);xe===void 0&&(xe=a.getUniformBlockIndex(De,X.name),ce.set(X,xe))}function st(X,De){const xe=m.get(De).get(X);p.get(De)!==xe&&(a.uniformBlockBinding(De,xe,X.__bindingPointIndex),p.set(De,xe))}function It(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),f.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),v={},Ee=null,Ae={},g={},x=new WeakMap,E=[],M=null,T=!1,S=null,_=null,L=null,U=null,D=null,k=null,H=null,B=new zt(0,0,0),Y=0,N=!1,C=null,V=null,ue=null,re=null,_e=null,Se.set(0,0,a.canvas.width,a.canvas.height),Z.set(0,0,a.canvas.width,a.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:ye,disable:ze,bindFramebuffer:Ye,drawBuffers:Ke,useProgram:Wt,setBlending:F,setMaterial:Un,setFlipSided:dt,setCullFace:gt,setLineWidth:je,setPolygonOffset:Lt,setScissorTest:ke,activeTexture:O,bindTexture:w,unbindTexture:te,compressedTexImage2D:he,compressedTexImage3D:be,texImage2D:Ie,texImage3D:Ze,updateUBOMapping:tt,uniformBlockBinding:st,texStorage2D:$e,texStorage3D:we,texSubImage2D:ge,texSubImage3D:Ge,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Qe,scissor:Ve,viewport:Pe,reset:It}}function Ew(a,e,i,s,l,c,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ut,v=new WeakMap;let g;const x=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(O,w){return E?new OffscreenCanvas(O,w):gu("canvas")}function T(O,w,te){let he=1;const be=ke(O);if((be.width>te||be.height>te)&&(he=te/Math.max(be.width,be.height)),he<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ge=Math.floor(he*be.width),Ge=Math.floor(he*be.height);g===void 0&&(g=M(ge,Ge));const Ce=w?M(ge,Ge):g;return Ce.width=ge,Ce.height=Ge,Ce.getContext("2d").drawImage(O,0,0,ge,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+ge+"x"+Ge+")."),Ce}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),O;return O}function S(O){return O.generateMipmaps}function _(O){a.generateMipmap(O)}function L(O){return O.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?a.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function U(O,w,te,he,be=!1){if(O!==null){if(a[O]!==void 0)return a[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ge=w;if(w===a.RED&&(te===a.FLOAT&&(ge=a.R32F),te===a.HALF_FLOAT&&(ge=a.R16F),te===a.UNSIGNED_BYTE&&(ge=a.R8)),w===a.RED_INTEGER&&(te===a.UNSIGNED_BYTE&&(ge=a.R8UI),te===a.UNSIGNED_SHORT&&(ge=a.R16UI),te===a.UNSIGNED_INT&&(ge=a.R32UI),te===a.BYTE&&(ge=a.R8I),te===a.SHORT&&(ge=a.R16I),te===a.INT&&(ge=a.R32I)),w===a.RG&&(te===a.FLOAT&&(ge=a.RG32F),te===a.HALF_FLOAT&&(ge=a.RG16F),te===a.UNSIGNED_BYTE&&(ge=a.RG8)),w===a.RG_INTEGER&&(te===a.UNSIGNED_BYTE&&(ge=a.RG8UI),te===a.UNSIGNED_SHORT&&(ge=a.RG16UI),te===a.UNSIGNED_INT&&(ge=a.RG32UI),te===a.BYTE&&(ge=a.RG8I),te===a.SHORT&&(ge=a.RG16I),te===a.INT&&(ge=a.RG32I)),w===a.RGB_INTEGER&&(te===a.UNSIGNED_BYTE&&(ge=a.RGB8UI),te===a.UNSIGNED_SHORT&&(ge=a.RGB16UI),te===a.UNSIGNED_INT&&(ge=a.RGB32UI),te===a.BYTE&&(ge=a.RGB8I),te===a.SHORT&&(ge=a.RGB16I),te===a.INT&&(ge=a.RGB32I)),w===a.RGBA_INTEGER&&(te===a.UNSIGNED_BYTE&&(ge=a.RGBA8UI),te===a.UNSIGNED_SHORT&&(ge=a.RGBA16UI),te===a.UNSIGNED_INT&&(ge=a.RGBA32UI),te===a.BYTE&&(ge=a.RGBA8I),te===a.SHORT&&(ge=a.RGBA16I),te===a.INT&&(ge=a.RGBA32I)),w===a.RGB&&te===a.UNSIGNED_INT_5_9_9_9_REV&&(ge=a.RGB9_E5),w===a.RGBA){const Ge=be?pu:Ct.getTransfer(he);te===a.FLOAT&&(ge=a.RGBA32F),te===a.HALF_FLOAT&&(ge=a.RGBA16F),te===a.UNSIGNED_BYTE&&(ge=Ge===kt?a.SRGB8_ALPHA8:a.RGBA8),te===a.UNSIGNED_SHORT_4_4_4_4&&(ge=a.RGBA4),te===a.UNSIGNED_SHORT_5_5_5_1&&(ge=a.RGB5_A1)}return(ge===a.R16F||ge===a.R32F||ge===a.RG16F||ge===a.RG32F||ge===a.RGBA16F||ge===a.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function D(O,w){let te;return O?w===null||w===Wr||w===Ys?te=a.DEPTH24_STENCIL8:w===Wi?te=a.DEPTH32F_STENCIL8:w===ll&&(te=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Wr||w===Ys?te=a.DEPTH_COMPONENT24:w===Wi?te=a.DEPTH_COMPONENT32F:w===ll&&(te=a.DEPTH_COMPONENT16),te}function k(O,w){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==Bi&&O.minFilter!==ei?Math.log2(Math.max(w.width,w.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?w.mipmaps.length:1}function H(O){const w=O.target;w.removeEventListener("dispose",H),Y(w),w.isVideoTexture&&v.delete(w)}function B(O){const w=O.target;w.removeEventListener("dispose",B),C(w)}function Y(O){const w=s.get(O);if(w.__webglInit===void 0)return;const te=O.source,he=x.get(te);if(he){const be=he[w.__cacheKey];be.usedTimes--,be.usedTimes===0&&N(O),Object.keys(he).length===0&&x.delete(te)}s.remove(O)}function N(O){const w=s.get(O);a.deleteTexture(w.__webglTexture);const te=O.source,he=x.get(te);delete he[w.__cacheKey],f.memory.textures--}function C(O){const w=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(w.__webglFramebuffer[he]))for(let be=0;be<w.__webglFramebuffer[he].length;be++)a.deleteFramebuffer(w.__webglFramebuffer[he][be]);else a.deleteFramebuffer(w.__webglFramebuffer[he]);w.__webglDepthbuffer&&a.deleteRenderbuffer(w.__webglDepthbuffer[he])}else{if(Array.isArray(w.__webglFramebuffer))for(let he=0;he<w.__webglFramebuffer.length;he++)a.deleteFramebuffer(w.__webglFramebuffer[he]);else a.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&a.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&a.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let he=0;he<w.__webglColorRenderbuffer.length;he++)w.__webglColorRenderbuffer[he]&&a.deleteRenderbuffer(w.__webglColorRenderbuffer[he]);w.__webglDepthRenderbuffer&&a.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const te=O.textures;for(let he=0,be=te.length;he<be;he++){const ge=s.get(te[he]);ge.__webglTexture&&(a.deleteTexture(ge.__webglTexture),f.memory.textures--),s.remove(te[he])}s.remove(O)}let V=0;function ue(){V=0}function re(){const O=V;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),V+=1,O}function _e(O){const w=[];return w.push(O.wrapS),w.push(O.wrapT),w.push(O.wrapR||0),w.push(O.magFilter),w.push(O.minFilter),w.push(O.anisotropy),w.push(O.internalFormat),w.push(O.format),w.push(O.type),w.push(O.generateMipmaps),w.push(O.premultiplyAlpha),w.push(O.flipY),w.push(O.unpackAlignment),w.push(O.colorSpace),w.join()}function pe(O,w){const te=s.get(O);if(O.isVideoTexture&&je(O),O.isRenderTargetTexture===!1&&O.version>0&&te.__version!==O.version){const he=O.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(te,O,w);return}}i.bindTexture(a.TEXTURE_2D,te.__webglTexture,a.TEXTURE0+w)}function z(O,w){const te=s.get(O);if(O.version>0&&te.__version!==O.version){Z(te,O,w);return}i.bindTexture(a.TEXTURE_2D_ARRAY,te.__webglTexture,a.TEXTURE0+w)}function Q(O,w){const te=s.get(O);if(O.version>0&&te.__version!==O.version){Z(te,O,w);return}i.bindTexture(a.TEXTURE_3D,te.__webglTexture,a.TEXTURE0+w)}function K(O,w){const te=s.get(O);if(O.version>0&&te.__version!==O.version){de(te,O,w);return}i.bindTexture(a.TEXTURE_CUBE_MAP,te.__webglTexture,a.TEXTURE0+w)}const Ee={[Ld]:a.REPEAT,[Vr]:a.CLAMP_TO_EDGE,[Od]:a.MIRRORED_REPEAT},Ae={[Bi]:a.NEAREST,[ib]:a.NEAREST_MIPMAP_NEAREST,[Lc]:a.NEAREST_MIPMAP_LINEAR,[ei]:a.LINEAR,[Vh]:a.LINEAR_MIPMAP_NEAREST,[kr]:a.LINEAR_MIPMAP_LINEAR},P={[ob]:a.NEVER,[db]:a.ALWAYS,[lb]:a.LESS,[ax]:a.LEQUAL,[cb]:a.EQUAL,[hb]:a.GEQUAL,[ub]:a.GREATER,[fb]:a.NOTEQUAL};function ne(O,w){if(w.type===Wi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===ei||w.magFilter===Vh||w.magFilter===Lc||w.magFilter===kr||w.minFilter===ei||w.minFilter===Vh||w.minFilter===Lc||w.minFilter===kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(O,a.TEXTURE_WRAP_S,Ee[w.wrapS]),a.texParameteri(O,a.TEXTURE_WRAP_T,Ee[w.wrapT]),(O===a.TEXTURE_3D||O===a.TEXTURE_2D_ARRAY)&&a.texParameteri(O,a.TEXTURE_WRAP_R,Ee[w.wrapR]),a.texParameteri(O,a.TEXTURE_MAG_FILTER,Ae[w.magFilter]),a.texParameteri(O,a.TEXTURE_MIN_FILTER,Ae[w.minFilter]),w.compareFunction&&(a.texParameteri(O,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(O,a.TEXTURE_COMPARE_FUNC,P[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Bi||w.minFilter!==Lc&&w.minFilter!==kr||w.type===Wi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||s.get(w).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");a.texParameterf(O,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,l.getMaxAnisotropy())),s.get(w).__currentAnisotropy=w.anisotropy}}}function Se(O,w){let te=!1;O.__webglInit===void 0&&(O.__webglInit=!0,w.addEventListener("dispose",H));const he=w.source;let be=x.get(he);be===void 0&&(be={},x.set(he,be));const ge=_e(w);if(ge!==O.__cacheKey){be[ge]===void 0&&(be[ge]={texture:a.createTexture(),usedTimes:0},f.memory.textures++,te=!0),be[ge].usedTimes++;const Ge=be[O.__cacheKey];Ge!==void 0&&(be[O.__cacheKey].usedTimes--,Ge.usedTimes===0&&N(w)),O.__cacheKey=ge,O.__webglTexture=be[ge].texture}return te}function Z(O,w,te){let he=a.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(he=a.TEXTURE_2D_ARRAY),w.isData3DTexture&&(he=a.TEXTURE_3D);const be=Se(O,w),ge=w.source;i.bindTexture(he,O.__webglTexture,a.TEXTURE0+te);const Ge=s.get(ge);if(ge.version!==Ge.__version||be===!0){i.activeTexture(a.TEXTURE0+te);const Ce=Ct.getPrimaries(Ct.workingColorSpace),Qe=w.colorSpace===Xi?null:Ct.getPrimaries(w.colorSpace),$e=w.colorSpace===Xi||Ce===Qe?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,w.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,w.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let we=T(w.image,!1,l.maxTextureSize);we=Lt(w,we);const Ie=c.convert(w.format,w.colorSpace),Ze=c.convert(w.type);let Ve=U(w.internalFormat,Ie,Ze,w.colorSpace,w.isVideoTexture);ne(he,w);let Pe;const tt=w.mipmaps,st=w.isVideoTexture!==!0,It=Ge.__version===void 0||be===!0,X=ge.dataReady,De=k(w,we);if(w.isDepthTexture)Ve=D(w.format===Zs,w.type),It&&(st?i.texStorage2D(a.TEXTURE_2D,1,Ve,we.width,we.height):i.texImage2D(a.TEXTURE_2D,0,Ve,we.width,we.height,0,Ie,Ze,null));else if(w.isDataTexture)if(tt.length>0){st&&It&&i.texStorage2D(a.TEXTURE_2D,De,Ve,tt[0].width,tt[0].height);for(let ce=0,xe=tt.length;ce<xe;ce++)Pe=tt[ce],st?X&&i.texSubImage2D(a.TEXTURE_2D,ce,0,0,Pe.width,Pe.height,Ie,Ze,Pe.data):i.texImage2D(a.TEXTURE_2D,ce,Ve,Pe.width,Pe.height,0,Ie,Ze,Pe.data);w.generateMipmaps=!1}else st?(It&&i.texStorage2D(a.TEXTURE_2D,De,Ve,we.width,we.height),X&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,we.width,we.height,Ie,Ze,we.data)):i.texImage2D(a.TEXTURE_2D,0,Ve,we.width,we.height,0,Ie,Ze,we.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){st&&It&&i.texStorage3D(a.TEXTURE_2D_ARRAY,De,Ve,tt[0].width,tt[0].height,we.depth);for(let ce=0,xe=tt.length;ce<xe;ce++)if(Pe=tt[ce],w.format!==Pi)if(Ie!==null)if(st){if(X)if(w.layerUpdates.size>0){const Re=$0(Pe.width,Pe.height,w.format,w.type);for(const Ue of w.layerUpdates){const nt=Pe.data.subarray(Ue*Re/Pe.data.BYTES_PER_ELEMENT,(Ue+1)*Re/Pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ce,0,0,Ue,Pe.width,Pe.height,1,Ie,nt)}w.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ce,0,0,0,Pe.width,Pe.height,we.depth,Ie,Pe.data)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ce,Ve,Pe.width,Pe.height,we.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?X&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,ce,0,0,0,Pe.width,Pe.height,we.depth,Ie,Ze,Pe.data):i.texImage3D(a.TEXTURE_2D_ARRAY,ce,Ve,Pe.width,Pe.height,we.depth,0,Ie,Ze,Pe.data)}else{st&&It&&i.texStorage2D(a.TEXTURE_2D,De,Ve,tt[0].width,tt[0].height);for(let ce=0,xe=tt.length;ce<xe;ce++)Pe=tt[ce],w.format!==Pi?Ie!==null?st?X&&i.compressedTexSubImage2D(a.TEXTURE_2D,ce,0,0,Pe.width,Pe.height,Ie,Pe.data):i.compressedTexImage2D(a.TEXTURE_2D,ce,Ve,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?X&&i.texSubImage2D(a.TEXTURE_2D,ce,0,0,Pe.width,Pe.height,Ie,Ze,Pe.data):i.texImage2D(a.TEXTURE_2D,ce,Ve,Pe.width,Pe.height,0,Ie,Ze,Pe.data)}else if(w.isDataArrayTexture)if(st){if(It&&i.texStorage3D(a.TEXTURE_2D_ARRAY,De,Ve,we.width,we.height,we.depth),X)if(w.layerUpdates.size>0){const ce=$0(we.width,we.height,w.format,w.type);for(const xe of w.layerUpdates){const Re=we.data.subarray(xe*ce/we.data.BYTES_PER_ELEMENT,(xe+1)*ce/we.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,xe,we.width,we.height,1,Ie,Ze,Re)}w.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Ie,Ze,we.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,Ve,we.width,we.height,we.depth,0,Ie,Ze,we.data);else if(w.isData3DTexture)st?(It&&i.texStorage3D(a.TEXTURE_3D,De,Ve,we.width,we.height,we.depth),X&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Ie,Ze,we.data)):i.texImage3D(a.TEXTURE_3D,0,Ve,we.width,we.height,we.depth,0,Ie,Ze,we.data);else if(w.isFramebufferTexture){if(It)if(st)i.texStorage2D(a.TEXTURE_2D,De,Ve,we.width,we.height);else{let ce=we.width,xe=we.height;for(let Re=0;Re<De;Re++)i.texImage2D(a.TEXTURE_2D,Re,Ve,ce,xe,0,Ie,Ze,null),ce>>=1,xe>>=1}}else if(tt.length>0){if(st&&It){const ce=ke(tt[0]);i.texStorage2D(a.TEXTURE_2D,De,Ve,ce.width,ce.height)}for(let ce=0,xe=tt.length;ce<xe;ce++)Pe=tt[ce],st?X&&i.texSubImage2D(a.TEXTURE_2D,ce,0,0,Ie,Ze,Pe):i.texImage2D(a.TEXTURE_2D,ce,Ve,Ie,Ze,Pe);w.generateMipmaps=!1}else if(st){if(It){const ce=ke(we);i.texStorage2D(a.TEXTURE_2D,De,Ve,ce.width,ce.height)}X&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,Ie,Ze,we)}else i.texImage2D(a.TEXTURE_2D,0,Ve,Ie,Ze,we);S(w)&&_(he),Ge.__version=ge.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function de(O,w,te){if(w.image.length!==6)return;const he=Se(O,w),be=w.source;i.bindTexture(a.TEXTURE_CUBE_MAP,O.__webglTexture,a.TEXTURE0+te);const ge=s.get(be);if(be.version!==ge.__version||he===!0){i.activeTexture(a.TEXTURE0+te);const Ge=Ct.getPrimaries(Ct.workingColorSpace),Ce=w.colorSpace===Xi?null:Ct.getPrimaries(w.colorSpace),Qe=w.colorSpace===Xi||Ge===Ce?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,w.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,w.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);const $e=w.isCompressedTexture||w.image[0].isCompressedTexture,we=w.image[0]&&w.image[0].isDataTexture,Ie=[];for(let xe=0;xe<6;xe++)!$e&&!we?Ie[xe]=T(w.image[xe],!0,l.maxCubemapSize):Ie[xe]=we?w.image[xe].image:w.image[xe],Ie[xe]=Lt(w,Ie[xe]);const Ze=Ie[0],Ve=c.convert(w.format,w.colorSpace),Pe=c.convert(w.type),tt=U(w.internalFormat,Ve,Pe,w.colorSpace),st=w.isVideoTexture!==!0,It=ge.__version===void 0||he===!0,X=be.dataReady;let De=k(w,Ze);ne(a.TEXTURE_CUBE_MAP,w);let ce;if($e){st&&It&&i.texStorage2D(a.TEXTURE_CUBE_MAP,De,tt,Ze.width,Ze.height);for(let xe=0;xe<6;xe++){ce=Ie[xe].mipmaps;for(let Re=0;Re<ce.length;Re++){const Ue=ce[Re];w.format!==Pi?Ve!==null?st?X&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Re,0,0,Ue.width,Ue.height,Ve,Ue.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Re,tt,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?X&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Re,0,0,Ue.width,Ue.height,Ve,Pe,Ue.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Re,tt,Ue.width,Ue.height,0,Ve,Pe,Ue.data)}}}else{if(ce=w.mipmaps,st&&It){ce.length>0&&De++;const xe=ke(Ie[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,De,tt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(we){st?X&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ie[xe].width,Ie[xe].height,Ve,Pe,Ie[xe].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,tt,Ie[xe].width,Ie[xe].height,0,Ve,Pe,Ie[xe].data);for(let Re=0;Re<ce.length;Re++){const nt=ce[Re].image[xe].image;st?X&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Re+1,0,0,nt.width,nt.height,Ve,Pe,nt.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Re+1,tt,nt.width,nt.height,0,Ve,Pe,nt.data)}}else{st?X&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ve,Pe,Ie[xe]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,tt,Ve,Pe,Ie[xe]);for(let Re=0;Re<ce.length;Re++){const Ue=ce[Re];st?X&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Re+1,0,0,Ve,Pe,Ue.image[xe]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Re+1,tt,Ve,Pe,Ue.image[xe])}}}S(w)&&_(a.TEXTURE_CUBE_MAP),ge.__version=be.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function Me(O,w,te,he,be,ge){const Ge=c.convert(te.format,te.colorSpace),Ce=c.convert(te.type),Qe=U(te.internalFormat,Ge,Ce,te.colorSpace),$e=s.get(w),we=s.get(te);if(we.__renderTarget=w,!$e.__hasExternalTextures){const Ie=Math.max(1,w.width>>ge),Ze=Math.max(1,w.height>>ge);be===a.TEXTURE_3D||be===a.TEXTURE_2D_ARRAY?i.texImage3D(be,ge,Qe,Ie,Ze,w.depth,0,Ge,Ce,null):i.texImage2D(be,ge,Qe,Ie,Ze,0,Ge,Ce,null)}i.bindFramebuffer(a.FRAMEBUFFER,O),gt(w)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,he,be,we.__webglTexture,0,dt(w)):(be===a.TEXTURE_2D||be>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,he,be,we.__webglTexture,ge),i.bindFramebuffer(a.FRAMEBUFFER,null)}function ye(O,w,te){if(a.bindRenderbuffer(a.RENDERBUFFER,O),w.depthBuffer){const he=w.depthTexture,be=he&&he.isDepthTexture?he.type:null,ge=D(w.stencilBuffer,be),Ge=w.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ce=dt(w);gt(w)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ce,ge,w.width,w.height):te?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ce,ge,w.width,w.height):a.renderbufferStorage(a.RENDERBUFFER,ge,w.width,w.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ge,a.RENDERBUFFER,O)}else{const he=w.textures;for(let be=0;be<he.length;be++){const ge=he[be],Ge=c.convert(ge.format,ge.colorSpace),Ce=c.convert(ge.type),Qe=U(ge.internalFormat,Ge,Ce,ge.colorSpace),$e=dt(w);te&&gt(w)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,$e,Qe,w.width,w.height):gt(w)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,$e,Qe,w.width,w.height):a.renderbufferStorage(a.RENDERBUFFER,Qe,w.width,w.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ze(O,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(a.FRAMEBUFFER,O),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=s.get(w.depthTexture);he.__renderTarget=w,(!he.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),pe(w.depthTexture,0);const be=he.__webglTexture,ge=dt(w);if(w.depthTexture.format===cl)gt(w)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,be,0,ge):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,be,0);else if(w.depthTexture.format===Zs)gt(w)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,be,0,ge):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,be,0);else throw new Error("Unknown depthTexture format")}function Ye(O){const w=s.get(O),te=O.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==O.depthTexture){const he=O.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),he){const be=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,he.removeEventListener("dispose",be)};he.addEventListener("dispose",be),w.__depthDisposeCallback=be}w.__boundDepthTexture=he}if(O.depthTexture&&!w.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");const he=O.texture.mipmaps;he&&he.length>0?ze(w.__webglFramebuffer[0],O):ze(w.__webglFramebuffer,O)}else if(te){w.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(i.bindFramebuffer(a.FRAMEBUFFER,w.__webglFramebuffer[he]),w.__webglDepthbuffer[he]===void 0)w.__webglDepthbuffer[he]=a.createRenderbuffer(),ye(w.__webglDepthbuffer[he],O,!1);else{const be=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ge=w.__webglDepthbuffer[he];a.bindRenderbuffer(a.RENDERBUFFER,ge),a.framebufferRenderbuffer(a.FRAMEBUFFER,be,a.RENDERBUFFER,ge)}}else{const he=O.texture.mipmaps;if(he&&he.length>0?i.bindFramebuffer(a.FRAMEBUFFER,w.__webglFramebuffer[0]):i.bindFramebuffer(a.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=a.createRenderbuffer(),ye(w.__webglDepthbuffer,O,!1);else{const be=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ge=w.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,ge),a.framebufferRenderbuffer(a.FRAMEBUFFER,be,a.RENDERBUFFER,ge)}}i.bindFramebuffer(a.FRAMEBUFFER,null)}function Ke(O,w,te){const he=s.get(O);w!==void 0&&Me(he.__webglFramebuffer,O,O.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),te!==void 0&&Ye(O)}function Wt(O){const w=O.texture,te=s.get(O),he=s.get(w);O.addEventListener("dispose",B);const be=O.textures,ge=O.isWebGLCubeRenderTarget===!0,Ge=be.length>1;if(Ge||(he.__webglTexture===void 0&&(he.__webglTexture=a.createTexture()),he.__version=w.version,f.memory.textures++),ge){te.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0){te.__webglFramebuffer[Ce]=[];for(let Qe=0;Qe<w.mipmaps.length;Qe++)te.__webglFramebuffer[Ce][Qe]=a.createFramebuffer()}else te.__webglFramebuffer[Ce]=a.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){te.__webglFramebuffer=[];for(let Ce=0;Ce<w.mipmaps.length;Ce++)te.__webglFramebuffer[Ce]=a.createFramebuffer()}else te.__webglFramebuffer=a.createFramebuffer();if(Ge)for(let Ce=0,Qe=be.length;Ce<Qe;Ce++){const $e=s.get(be[Ce]);$e.__webglTexture===void 0&&($e.__webglTexture=a.createTexture(),f.memory.textures++)}if(O.samples>0&&gt(O)===!1){te.__webglMultisampledFramebuffer=a.createFramebuffer(),te.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Ce=0;Ce<be.length;Ce++){const Qe=be[Ce];te.__webglColorRenderbuffer[Ce]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,te.__webglColorRenderbuffer[Ce]);const $e=c.convert(Qe.format,Qe.colorSpace),we=c.convert(Qe.type),Ie=U(Qe.internalFormat,$e,we,Qe.colorSpace,O.isXRRenderTarget===!0),Ze=dt(O);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ze,Ie,O.width,O.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.RENDERBUFFER,te.__webglColorRenderbuffer[Ce])}a.bindRenderbuffer(a.RENDERBUFFER,null),O.depthBuffer&&(te.__webglDepthRenderbuffer=a.createRenderbuffer(),ye(te.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ge){i.bindTexture(a.TEXTURE_CUBE_MAP,he.__webglTexture),ne(a.TEXTURE_CUBE_MAP,w);for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0)for(let Qe=0;Qe<w.mipmaps.length;Qe++)Me(te.__webglFramebuffer[Ce][Qe],O,w,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Qe);else Me(te.__webglFramebuffer[Ce],O,w,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);S(w)&&_(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ge){for(let Ce=0,Qe=be.length;Ce<Qe;Ce++){const $e=be[Ce],we=s.get($e);i.bindTexture(a.TEXTURE_2D,we.__webglTexture),ne(a.TEXTURE_2D,$e),Me(te.__webglFramebuffer,O,$e,a.COLOR_ATTACHMENT0+Ce,a.TEXTURE_2D,0),S($e)&&_(a.TEXTURE_2D)}i.unbindTexture()}else{let Ce=a.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ce=O.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Ce,he.__webglTexture),ne(Ce,w),w.mipmaps&&w.mipmaps.length>0)for(let Qe=0;Qe<w.mipmaps.length;Qe++)Me(te.__webglFramebuffer[Qe],O,w,a.COLOR_ATTACHMENT0,Ce,Qe);else Me(te.__webglFramebuffer,O,w,a.COLOR_ATTACHMENT0,Ce,0);S(w)&&_(Ce),i.unbindTexture()}O.depthBuffer&&Ye(O)}function jt(O){const w=O.textures;for(let te=0,he=w.length;te<he;te++){const be=w[te];if(S(be)){const ge=L(O),Ge=s.get(be).__webglTexture;i.bindTexture(ge,Ge),_(ge),i.unbindTexture()}}}const ht=[],F=[];function Un(O){if(O.samples>0){if(gt(O)===!1){const w=O.textures,te=O.width,he=O.height;let be=a.COLOR_BUFFER_BIT;const ge=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ge=s.get(O),Ce=w.length>1;if(Ce)for(let $e=0;$e<w.length;$e++)i.bindFramebuffer(a.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+$e,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,Ge.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+$e,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer);const Qe=O.texture.mipmaps;Qe&&Qe.length>0?i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer[0]):i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let $e=0;$e<w.length;$e++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(be|=a.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(be|=a.STENCIL_BUFFER_BIT)),Ce){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ge.__webglColorRenderbuffer[$e]);const we=s.get(w[$e]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,we,0)}a.blitFramebuffer(0,0,te,he,0,0,te,he,be,a.NEAREST),p===!0&&(ht.length=0,F.length=0,ht.push(a.COLOR_ATTACHMENT0+$e),O.depthBuffer&&O.resolveDepthBuffer===!1&&(ht.push(ge),F.push(ge),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,F)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,ht))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Ce)for(let $e=0;$e<w.length;$e++){i.bindFramebuffer(a.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+$e,a.RENDERBUFFER,Ge.__webglColorRenderbuffer[$e]);const we=s.get(w[$e]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,Ge.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+$e,a.TEXTURE_2D,we,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&p){const w=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[w])}}}function dt(O){return Math.min(l.maxSamples,O.samples)}function gt(O){const w=s.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function je(O){const w=f.render.frame;v.get(O)!==w&&(v.set(O,w),O.update())}function Lt(O,w){const te=O.colorSpace,he=O.format,be=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||te!==fr&&te!==Xi&&(Ct.getTransfer(te)===kt?(he!==Pi||be!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),w}function ke(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(m.width=O.naturalWidth||O.width,m.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(m.width=O.displayWidth,m.height=O.displayHeight):(m.width=O.width,m.height=O.height),m}this.allocateTextureUnit=re,this.resetTextureUnits=ue,this.setTexture2D=pe,this.setTexture2DArray=z,this.setTexture3D=Q,this.setTextureCube=K,this.rebindTextures=Ke,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=Un,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=gt}function bw(a,e){function i(s,l=Xi){let c;const f=Ct.getTransfer(l);if(s===zn)return a.UNSIGNED_BYTE;if(s===yp)return a.UNSIGNED_SHORT_4_4_4_4;if(s===Sp)return a.UNSIGNED_SHORT_5_5_5_1;if(s===J_)return a.UNSIGNED_INT_5_9_9_9_REV;if(s===K_)return a.BYTE;if(s===Q_)return a.SHORT;if(s===ll)return a.UNSIGNED_SHORT;if(s===xp)return a.INT;if(s===Wr)return a.UNSIGNED_INT;if(s===Wi)return a.FLOAT;if(s===gl)return a.HALF_FLOAT;if(s===$_)return a.ALPHA;if(s===ex)return a.RGB;if(s===Pi)return a.RGBA;if(s===cl)return a.DEPTH_COMPONENT;if(s===Zs)return a.DEPTH_STENCIL;if(s===tx)return a.RED;if(s===Ep)return a.RED_INTEGER;if(s===nx)return a.RG;if(s===bp)return a.RG_INTEGER;if(s===Mp)return a.RGBA_INTEGER;if(s===au||s===ru||s===su||s===ou)if(f===kt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===au)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ru)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ou)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===au)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ru)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===su)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ou)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Pd||s===Bd||s===zd||s===Id)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Pd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Bd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===zd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Id)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Fd||s===Hd||s===Gd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Fd||s===Hd)return f===kt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Gd)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Vd||s===kd||s===jd||s===Xd||s===Wd||s===qd||s===Yd||s===Zd||s===Kd||s===Qd||s===Jd||s===$d||s===ep||s===tp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Vd)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===kd)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===jd)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Xd)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Wd)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===qd)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Yd)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Zd)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Kd)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Qd)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Jd)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===$d)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ep)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===tp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===lu||s===np||s===ip)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===lu)return f===kt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===np)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ip)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ix||s===ap||s===rp||s===sp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===lu)return c.COMPRESSED_RED_RGTC1_EXT;if(s===ap)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===rp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===sp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ys?a.UNSIGNED_INT_24_8:a[s]!==void 0?a[s]:null}return{convert:i}}const Mw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tw=`
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

}`;class Aw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,s){if(this.texture===null){const l=new Bn,c=e.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new kn({vertexShader:Mw,fragmentShader:Tw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new hi(new bu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ww extends Da{constructor(e,i){super();const s=this;let l=null,c=1,f=null,d="local-floor",p=1,m=null,v=null,g=null,x=null,E=null,M=null;const T=new Aw,S=i.getContextAttributes();let _=null,L=null;const U=[],D=[],k=new ut;let H=null;const B=new $n;B.viewport=new Jt;const Y=new $n;Y.viewport=new Jt;const N=[B,Y],C=new Yb;let V=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let de=U[Z];return de===void 0&&(de=new ud,U[Z]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Z){let de=U[Z];return de===void 0&&(de=new ud,U[Z]=de),de.getGripSpace()},this.getHand=function(Z){let de=U[Z];return de===void 0&&(de=new ud,U[Z]=de),de.getHandSpace()};function re(Z){const de=D.indexOf(Z.inputSource);if(de===-1)return;const Me=U[de];Me!==void 0&&(Me.update(Z.inputSource,Z.frame,m||f),Me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function _e(){l.removeEventListener("select",re),l.removeEventListener("selectstart",re),l.removeEventListener("selectend",re),l.removeEventListener("squeeze",re),l.removeEventListener("squeezestart",re),l.removeEventListener("squeezeend",re),l.removeEventListener("end",_e),l.removeEventListener("inputsourceschange",pe);for(let Z=0;Z<U.length;Z++){const de=D[Z];de!==null&&(D[Z]=null,U[Z].disconnect(de))}V=null,ue=null,T.reset(),e.setRenderTarget(_),E=null,x=null,g=null,l=null,L=null,Se.stop(),s.isPresenting=!1,e.setPixelRatio(H),e.setSize(k.width,k.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){c=Z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(Z){m=Z},this.getBaseLayer=function(){return x!==null?x:E},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return l},this.setSession=async function(Z){if(l=Z,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",re),l.addEventListener("selectstart",re),l.addEventListener("selectend",re),l.addEventListener("squeeze",re),l.addEventListener("squeezestart",re),l.addEventListener("squeezeend",re),l.addEventListener("end",_e),l.addEventListener("inputsourceschange",pe),S.xrCompatible!==!0&&await i.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(k),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,ye=null,ze=null;S.depth&&(ze=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Me=S.stencil?Zs:cl,ye=S.stencil?Ys:Wr);const Ye={colorFormat:i.RGBA8,depthFormat:ze,scaleFactor:c};g=new XRWebGLBinding(l,i),x=g.createProjectionLayer(Ye),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),L=new In(x.textureWidth,x.textureHeight,{format:Pi,type:zn,depthTexture:new wp(x.textureWidth,x.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Me={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,Me),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),L=new In(E.framebufferWidth,E.framebufferHeight,{format:Pi,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(d),Se.setContext(l),Se.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function pe(Z){for(let de=0;de<Z.removed.length;de++){const Me=Z.removed[de],ye=D.indexOf(Me);ye>=0&&(D[ye]=null,U[ye].disconnect(Me))}for(let de=0;de<Z.added.length;de++){const Me=Z.added[de];let ye=D.indexOf(Me);if(ye===-1){for(let Ye=0;Ye<U.length;Ye++)if(Ye>=D.length){D.push(Me),ye=Ye;break}else if(D[Ye]===null){D[Ye]=Me,ye=Ye;break}if(ye===-1)break}const ze=U[ye];ze&&ze.connect(Me)}}const z=new oe,Q=new oe;function K(Z,de,Me){z.setFromMatrixPosition(de.matrixWorld),Q.setFromMatrixPosition(Me.matrixWorld);const ye=z.distanceTo(Q),ze=de.projectionMatrix.elements,Ye=Me.projectionMatrix.elements,Ke=ze[14]/(ze[10]-1),Wt=ze[14]/(ze[10]+1),jt=(ze[9]+1)/ze[5],ht=(ze[9]-1)/ze[5],F=(ze[8]-1)/ze[0],Un=(Ye[8]+1)/Ye[0],dt=Ke*F,gt=Ke*Un,je=ye/(-F+Un),Lt=je*-F;if(de.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Lt),Z.translateZ(je),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ze[10]===-1)Z.projectionMatrix.copy(de.projectionMatrix),Z.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const ke=Ke+je,O=Wt+je,w=dt-Lt,te=gt+(ye-Lt),he=jt*Wt/O*ke,be=ht*Wt/O*ke;Z.projectionMatrix.makePerspective(w,te,he,be,ke,O),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Ee(Z,de){de===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(de.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(l===null)return;let de=Z.near,Me=Z.far;T.texture!==null&&(T.depthNear>0&&(de=T.depthNear),T.depthFar>0&&(Me=T.depthFar)),C.near=Y.near=B.near=de,C.far=Y.far=B.far=Me,(V!==C.near||ue!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),V=C.near,ue=C.far),B.layers.mask=Z.layers.mask|2,Y.layers.mask=Z.layers.mask|4,C.layers.mask=B.layers.mask|Y.layers.mask;const ye=Z.parent,ze=C.cameras;Ee(C,ye);for(let Ye=0;Ye<ze.length;Ye++)Ee(ze[Ye],ye);ze.length===2?K(C,B,Y):C.projectionMatrix.copy(B.projectionMatrix),Ae(Z,C,ye)};function Ae(Z,de,Me){Me===null?Z.matrix.copy(de.matrixWorld):(Z.matrix.copy(Me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(de.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(de.projectionMatrix),Z.projectionMatrixInverse.copy(de.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=op*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&E===null))return p},this.setFoveation=function(Z){p=Z,x!==null&&(x.fixedFoveation=Z),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=Z)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(C)};let P=null;function ne(Z,de){if(v=de.getViewerPose(m||f),M=de,v!==null){const Me=v.views;E!==null&&(e.setRenderTargetFramebuffer(L,E.framebuffer),e.setRenderTarget(L));let ye=!1;Me.length!==C.cameras.length&&(C.cameras.length=0,ye=!0);for(let Ke=0;Ke<Me.length;Ke++){const Wt=Me[Ke];let jt=null;if(E!==null)jt=E.getViewport(Wt);else{const F=g.getViewSubImage(x,Wt);jt=F.viewport,Ke===0&&(e.setRenderTargetTextures(L,F.colorTexture,F.depthStencilTexture),e.setRenderTarget(L))}let ht=N[Ke];ht===void 0&&(ht=new $n,ht.layers.enable(Ke),ht.viewport=new Jt,N[Ke]=ht),ht.matrix.fromArray(Wt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Wt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(jt.x,jt.y,jt.width,jt.height),Ke===0&&(C.matrix.copy(ht.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ye===!0&&C.cameras.push(ht)}const ze=l.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&g){const Ke=g.getDepthInformation(Me[0]);Ke&&Ke.isValid&&Ke.texture&&T.init(e,Ke,l.renderState)}}for(let Me=0;Me<U.length;Me++){const ye=D[Me],ze=U[Me];ye!==null&&ze!==void 0&&ze.update(ye,de,m||f)}P&&P(Z,de),de.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:de}),M=null}const Se=new gx;Se.setAnimationLoop(ne),this.setAnimationLoop=function(Z){P=Z},this.dispose=function(){}}}const Br=new Ca,Rw=new hn;function Cw(a,e){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function s(S,_){_.color.getRGB(S.fogColor.value,fx(a)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,L,U,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(S,_):_.isMeshToonMaterial?(c(S,_),g(S,_)):_.isMeshPhongMaterial?(c(S,_),v(S,_)):_.isMeshStandardMaterial?(c(S,_),x(S,_),_.isMeshPhysicalMaterial&&E(S,_,D)):_.isMeshMatcapMaterial?(c(S,_),M(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),T(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(f(S,_),_.isLineDashedMaterial&&d(S,_)):_.isPointsMaterial?p(S,_,L,U):_.isSpriteMaterial?m(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Sn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Sn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const L=e.get(_),U=L.envMap,D=L.envMapRotation;U&&(S.envMap.value=U,Br.copy(D),Br.x*=-1,Br.y*=-1,Br.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),S.envMapRotation.value.setFromMatrix4(Rw.makeRotationFromEuler(Br)),S.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function f(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function d(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function p(S,_,L,U){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*L,S.scale.value=U*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function m(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function v(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function g(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function x(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function E(S,_,L){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Sn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,_){_.matcap&&(S.matcap.value=_.matcap)}function T(S,_){const L=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function Dw(a,e,i,s){let l={},c={},f=[];const d=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function p(L,U){const D=U.program;s.uniformBlockBinding(L,D)}function m(L,U){let D=l[L.id];D===void 0&&(M(L),D=v(L),l[L.id]=D,L.addEventListener("dispose",S));const k=U.program;s.updateUBOMapping(L,k);const H=e.render.frame;c[L.id]!==H&&(x(L),c[L.id]=H)}function v(L){const U=g();L.__bindingPointIndex=U;const D=a.createBuffer(),k=L.__size,H=L.usage;return a.bindBuffer(a.UNIFORM_BUFFER,D),a.bufferData(a.UNIFORM_BUFFER,k,H),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,U,D),D}function g(){for(let L=0;L<d;L++)if(f.indexOf(L)===-1)return f.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const U=l[L.id],D=L.uniforms,k=L.__cache;a.bindBuffer(a.UNIFORM_BUFFER,U);for(let H=0,B=D.length;H<B;H++){const Y=Array.isArray(D[H])?D[H]:[D[H]];for(let N=0,C=Y.length;N<C;N++){const V=Y[N];if(E(V,H,N,k)===!0){const ue=V.__offset,re=Array.isArray(V.value)?V.value:[V.value];let _e=0;for(let pe=0;pe<re.length;pe++){const z=re[pe],Q=T(z);typeof z=="number"||typeof z=="boolean"?(V.__data[0]=z,a.bufferSubData(a.UNIFORM_BUFFER,ue+_e,V.__data)):z.isMatrix3?(V.__data[0]=z.elements[0],V.__data[1]=z.elements[1],V.__data[2]=z.elements[2],V.__data[3]=0,V.__data[4]=z.elements[3],V.__data[5]=z.elements[4],V.__data[6]=z.elements[5],V.__data[7]=0,V.__data[8]=z.elements[6],V.__data[9]=z.elements[7],V.__data[10]=z.elements[8],V.__data[11]=0):(z.toArray(V.__data,_e),_e+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,ue,V.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function E(L,U,D,k){const H=L.value,B=U+"_"+D;if(k[B]===void 0)return typeof H=="number"||typeof H=="boolean"?k[B]=H:k[B]=H.clone(),!0;{const Y=k[B];if(typeof H=="number"||typeof H=="boolean"){if(Y!==H)return k[B]=H,!0}else if(Y.equals(H)===!1)return Y.copy(H),!0}return!1}function M(L){const U=L.uniforms;let D=0;const k=16;for(let B=0,Y=U.length;B<Y;B++){const N=Array.isArray(U[B])?U[B]:[U[B]];for(let C=0,V=N.length;C<V;C++){const ue=N[C],re=Array.isArray(ue.value)?ue.value:[ue.value];for(let _e=0,pe=re.length;_e<pe;_e++){const z=re[_e],Q=T(z),K=D%k,Ee=K%Q.boundary,Ae=K+Ee;D+=Ee,Ae!==0&&k-Ae<Q.storage&&(D+=k-Ae),ue.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=D,D+=Q.storage}}}const H=D%k;return H>0&&(D+=k-H),L.__size=D,L.__cache={},this}function T(L){const U={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(U.boundary=4,U.storage=4):L.isVector2?(U.boundary=8,U.storage=8):L.isVector3||L.isColor?(U.boundary=16,U.storage=12):L.isVector4?(U.boundary=16,U.storage=16):L.isMatrix3?(U.boundary=48,U.storage=48):L.isMatrix4?(U.boundary=64,U.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),U}function S(L){const U=L.target;U.removeEventListener("dispose",S);const D=f.indexOf(U.__bindingPointIndex);f.splice(D,1),a.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function _(){for(const L in l)a.deleteBuffer(l[L]);f=[],l={},c={}}return{bind:p,update:m,dispose:_}}class Sx{constructor(e={}){const{canvas:i=mb(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const M=new Uint32Array(4),T=new Int32Array(4);let S=null,_=null;const L=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ta,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let k=!1;this._outputColorSpace=Bt;let H=0,B=0,Y=null,N=-1,C=null;const V=new Jt,ue=new Jt;let re=null;const _e=new zt(0);let pe=0,z=i.width,Q=i.height,K=1,Ee=null,Ae=null;const P=new Jt(0,0,z,Q),ne=new Jt(0,0,z,Q);let Se=!1;const Z=new px;let de=!1,Me=!1;const ye=new hn,ze=new hn,Ye=new oe,Ke=new Jt,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let jt=!1;function ht(){return Y===null?K:1}let F=s;function Un(R,W){return i.getContext(R,W)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ml}`),i.addEventListener("webglcontextlost",xe,!1),i.addEventListener("webglcontextrestored",Re,!1),i.addEventListener("webglcontextcreationerror",Ue,!1),F===null){const W="webgl2";if(F=Un(W,R),F===null)throw Un(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let dt,gt,je,Lt,ke,O,w,te,he,be,ge,Ge,Ce,Qe,$e,we,Ie,Ze,Ve,Pe,tt,st,It,X;function De(){dt=new G2(F),dt.init(),st=new bw(F,dt),gt=new O2(F,dt,e,st),je=new Sw(F,dt),gt.reverseDepthBuffer&&x&&je.buffers.depth.setReversed(!0),Lt=new j2(F),ke=new lw,O=new Ew(F,dt,je,ke,gt,st,Lt),w=new B2(D),te=new H2(D),he=new Kb(F),It=new N2(F,he),be=new V2(F,he,Lt,It),ge=new W2(F,be,he,Lt),Ve=new X2(F,gt,O),we=new P2(ke),Ge=new ow(D,w,te,dt,gt,It,we),Ce=new Cw(D,ke),Qe=new uw,$e=new gw(dt),Ze=new U2(D,w,te,je,ge,E,p),Ie=new xw(D,ge,gt),X=new Dw(F,Lt,gt,je),Pe=new L2(F,dt,Lt),tt=new k2(F,dt,Lt),Lt.programs=Ge.programs,D.capabilities=gt,D.extensions=dt,D.properties=ke,D.renderLists=Qe,D.shadowMap=Ie,D.state=je,D.info=Lt}De();const ce=new ww(D,F);this.xr=ce,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=dt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=dt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(R){R!==void 0&&(K=R,this.setSize(z,Q,!1))},this.getSize=function(R){return R.set(z,Q)},this.setSize=function(R,W,ie=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,Q=W,i.width=Math.floor(R*K),i.height=Math.floor(W*K),ie===!0&&(i.style.width=R+"px",i.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(z*K,Q*K).floor()},this.setDrawingBufferSize=function(R,W,ie){z=R,Q=W,K=ie,i.width=Math.floor(R*ie),i.height=Math.floor(W*ie),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(V)},this.getViewport=function(R){return R.copy(P)},this.setViewport=function(R,W,ie,ae){R.isVector4?P.set(R.x,R.y,R.z,R.w):P.set(R,W,ie,ae),je.viewport(V.copy(P).multiplyScalar(K).round())},this.getScissor=function(R){return R.copy(ne)},this.setScissor=function(R,W,ie,ae){R.isVector4?ne.set(R.x,R.y,R.z,R.w):ne.set(R,W,ie,ae),je.scissor(ue.copy(ne).multiplyScalar(K).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(R){je.setScissorTest(Se=R)},this.setOpaqueSort=function(R){Ee=R},this.setTransparentSort=function(R){Ae=R},this.getClearColor=function(R){return R.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,ie=!0){let ae=0;if(R){let j=!1;if(Y!==null){const Te=Y.texture.format;j=Te===Mp||Te===bp||Te===Ep}if(j){const Te=Y.texture.type,Ne=Te===zn||Te===Wr||Te===ll||Te===Ys||Te===yp||Te===Sp,Oe=Ze.getClearColor(),Be=Ze.getClearAlpha(),it=Oe.r,et=Oe.g,Xe=Oe.b;Ne?(M[0]=it,M[1]=et,M[2]=Xe,M[3]=Be,F.clearBufferuiv(F.COLOR,0,M)):(T[0]=it,T[1]=et,T[2]=Xe,T[3]=Be,F.clearBufferiv(F.COLOR,0,T))}else ae|=F.COLOR_BUFFER_BIT}W&&(ae|=F.DEPTH_BUFFER_BIT),ie&&(ae|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",xe,!1),i.removeEventListener("webglcontextrestored",Re,!1),i.removeEventListener("webglcontextcreationerror",Ue,!1),Ze.dispose(),Qe.dispose(),$e.dispose(),ke.dispose(),w.dispose(),te.dispose(),ge.dispose(),It.dispose(),X.dispose(),Ge.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",no),ce.removeEventListener("sessionend",io),Fi.stop()};function xe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const R=Lt.autoReset,W=Ie.enabled,ie=Ie.autoUpdate,ae=Ie.needsUpdate,j=Ie.type;De(),Lt.autoReset=R,Ie.enabled=W,Ie.autoUpdate=ie,Ie.needsUpdate=ae,Ie.type=j}function Ue(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function nt(R){const W=R.target;W.removeEventListener("dispose",nt),Kt(W)}function Kt(R){dn(R),ke.remove(R)}function dn(R){const W=ke.get(R).programs;W!==void 0&&(W.forEach(function(ie){Ge.releaseProgram(ie)}),R.isShaderMaterial&&Ge.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,ie,ae,j,Te){W===null&&(W=Wt);const Ne=j.isMesh&&j.matrixWorld.determinant()<0,Oe=ro(R,W,ie,ae,j);je.setMaterial(ae,Ne);let Be=ie.index,it=1;if(ae.wireframe===!0){if(Be=be.getWireframeAttribute(ie),Be===void 0)return;it=2}const et=ie.drawRange,Xe=ie.attributes.position;let yt=et.start*it,St=(et.start+et.count)*it;Te!==null&&(yt=Math.max(yt,Te.start*it),St=Math.min(St,(Te.start+Te.count)*it)),Be!==null?(yt=Math.max(yt,0),St=Math.min(St,Be.count)):Xe!=null&&(yt=Math.max(yt,0),St=Math.min(St,Xe.count));const qt=St-yt;if(qt<0||qt===1/0)return;It.setup(j,ae,Oe,ie,Be);let At,at=Pe;if(Be!==null&&(At=he.get(Be),at=tt,at.setIndex(At)),j.isMesh)ae.wireframe===!0?(je.setLineWidth(ae.wireframeLinewidth*ht()),at.setMode(F.LINES)):at.setMode(F.TRIANGLES);else if(j.isLine){let qe=ae.linewidth;qe===void 0&&(qe=1),je.setLineWidth(qe*ht()),j.isLineSegments?at.setMode(F.LINES):j.isLineLoop?at.setMode(F.LINE_LOOP):at.setMode(F.LINE_STRIP)}else j.isPoints?at.setMode(F.POINTS):j.isSprite&&at.setMode(F.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)cu("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))at.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const qe=j._multiDrawStarts,pn=j._multiDrawCounts,Mt=j._multiDrawCount,jn=Be?he.get(Be).bytesPerElement:1,wi=ke.get(ae).currentProgram.getUniforms();for(let Fn=0;Fn<Mt;Fn++)wi.setValue(F,"_gl_DrawID",Fn),at.render(qe[Fn]/jn,pn[Fn])}else if(j.isInstancedMesh)at.renderInstances(yt,qt,j.count);else if(ie.isInstancedBufferGeometry){const qe=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,pn=Math.min(ie.instanceCount,qe);at.renderInstances(yt,qt,pn)}else at.render(yt,qt)};function Tt(R,W,ie){R.transparent===!0&&R.side===fi&&R.forceSinglePass===!1?(R.side=Sn,R.needsUpdate=!0,en(R,W,ie),R.side=Ra,R.needsUpdate=!0,en(R,W,ie),R.side=fi):en(R,W,ie)}this.compile=function(R,W,ie=null){ie===null&&(ie=R),_=$e.get(ie),_.init(W),U.push(_),ie.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),R!==ie&&R.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const ae=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Te=j.material;if(Te)if(Array.isArray(Te))for(let Ne=0;Ne<Te.length;Ne++){const Oe=Te[Ne];Tt(Oe,ie,j),ae.add(Oe)}else Tt(Te,ie,j),ae.add(Te)}),_=U.pop(),ae},this.compileAsync=function(R,W,ie=null){const ae=this.compile(R,W,ie);return new Promise(j=>{function Te(){if(ae.forEach(function(Ne){ke.get(Ne).currentProgram.isReady()&&ae.delete(Ne)}),ae.size===0){j(R);return}setTimeout(Te,10)}dt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let En=null;function Ti(R){En&&En(R)}function no(){Fi.stop()}function io(){Fi.start()}const Fi=new gx;Fi.setAnimationLoop(Ti),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(R){En=R,ce.setAnimationLoop(R),R===null?Fi.stop():Fi.start()},ce.addEventListener("sessionstart",no),ce.addEventListener("sessionend",io),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(W),W=ce.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,W,Y),_=$e.get(R,U.length),_.init(W),U.push(_),ze.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Z.setFromProjectionMatrix(ze),Me=this.localClippingEnabled,de=we.init(this.clippingPlanes,Me),S=Qe.get(R,L.length),S.init(),L.push(S),ce.enabled===!0&&ce.isPresenting===!0){const Te=D.xr.getDepthSensingMesh();Te!==null&&hr(Te,W,-1/0,D.sortObjects)}hr(R,W,0,D.sortObjects),S.finish(),D.sortObjects===!0&&S.sort(Ee,Ae),jt=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,jt&&Ze.addToRenderList(S,R),this.info.render.frame++,de===!0&&we.beginShadows();const ie=_.state.shadowsArray;Ie.render(ie,R,W),de===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=S.opaque,j=S.transmissive;if(_.setupLights(),W.isArrayCamera){const Te=W.cameras;if(j.length>0)for(let Ne=0,Oe=Te.length;Ne<Oe;Ne++){const Be=Te[Ne];ao(ae,j,R,Be)}jt&&Ze.render(R);for(let Ne=0,Oe=Te.length;Ne<Oe;Ne++){const Be=Te[Ne];Yr(S,R,Be,Be.viewport)}}else j.length>0&&ao(ae,j,R,W),jt&&Ze.render(R),Yr(S,R,W);Y!==null&&B===0&&(O.updateMultisampleRenderTarget(Y),O.updateRenderTargetMipmap(Y)),R.isScene===!0&&R.onAfterRender(D,R,W),It.resetDefaultState(),N=-1,C=null,U.pop(),U.length>0?(_=U[U.length-1],de===!0&&we.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function hr(R,W,ie,ae){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)ie=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Z.intersectsSprite(R)){ae&&Ke.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ze);const Ne=ge.update(R),Oe=R.material;Oe.visible&&S.push(R,Ne,Oe,ie,Ke.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Z.intersectsObject(R))){const Ne=ge.update(R),Oe=R.material;if(ae&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ke.copy(R.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Ke.copy(Ne.boundingSphere.center)),Ke.applyMatrix4(R.matrixWorld).applyMatrix4(ze)),Array.isArray(Oe)){const Be=Ne.groups;for(let it=0,et=Be.length;it<et;it++){const Xe=Be[it],yt=Oe[Xe.materialIndex];yt&&yt.visible&&S.push(R,Ne,yt,ie,Ke.z,Xe)}}else Oe.visible&&S.push(R,Ne,Oe,ie,Ke.z,null)}}const Te=R.children;for(let Ne=0,Oe=Te.length;Ne<Oe;Ne++)hr(Te[Ne],W,ie,ae)}function Yr(R,W,ie,ae){const j=R.opaque,Te=R.transmissive,Ne=R.transparent;_.setupLightsView(ie),de===!0&&we.setGlobalState(D.clippingPlanes,ie),ae&&je.viewport(V.copy(ae)),j.length>0&&dr(j,W,ie),Te.length>0&&dr(Te,W,ie),Ne.length>0&&dr(Ne,W,ie),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function ao(R,W,ie,ae){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ae.id]===void 0&&(_.state.transmissionRenderTarget[ae.id]=new In(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?gl:zn,minFilter:kr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const Te=_.state.transmissionRenderTarget[ae.id],Ne=ae.viewport||V;Te.setSize(Ne.z*D.transmissionResolutionScale,Ne.w*D.transmissionResolutionScale);const Oe=D.getRenderTarget();D.setRenderTarget(Te),D.getClearColor(_e),pe=D.getClearAlpha(),pe<1&&D.setClearColor(16777215,.5),D.clear(),jt&&Ze.render(ie);const Be=D.toneMapping;D.toneMapping=Ta;const it=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),_.setupLightsView(ae),de===!0&&we.setGlobalState(D.clippingPlanes,ae),dr(R,ie,ae),O.updateMultisampleRenderTarget(Te),O.updateRenderTargetMipmap(Te),dt.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Xe=0,yt=W.length;Xe<yt;Xe++){const St=W[Xe],qt=St.object,At=St.geometry,at=St.material,qe=St.group;if(at.side===fi&&qt.layers.test(ae.layers)){const pn=at.side;at.side=Sn,at.needsUpdate=!0,Ai(qt,ie,ae,At,at,qe),at.side=pn,at.needsUpdate=!0,et=!0}}et===!0&&(O.updateMultisampleRenderTarget(Te),O.updateRenderTargetMipmap(Te))}D.setRenderTarget(Oe),D.setClearColor(_e,pe),it!==void 0&&(ae.viewport=it),D.toneMapping=Be}function dr(R,W,ie){const ae=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Te=R.length;j<Te;j++){const Ne=R[j],Oe=Ne.object,Be=Ne.geometry,it=Ne.group;let et=Ne.material;et.allowOverride===!0&&ae!==null&&(et=ae),Oe.layers.test(ie.layers)&&Ai(Oe,W,ie,Be,et,it)}}function Ai(R,W,ie,ae,j,Te){R.onBeforeRender(D,W,ie,ae,j,Te),R.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(D,W,ie,ae,R,Te),j.transparent===!0&&j.side===fi&&j.forceSinglePass===!1?(j.side=Sn,j.needsUpdate=!0,D.renderBufferDirect(ie,W,ae,j,R,Te),j.side=Ra,j.needsUpdate=!0,D.renderBufferDirect(ie,W,ae,j,R,Te),j.side=fi):D.renderBufferDirect(ie,W,ae,j,R,Te),R.onAfterRender(D,W,ie,ae,j,Te)}function en(R,W,ie){W.isScene!==!0&&(W=Wt);const ae=ke.get(R),j=_.state.lights,Te=_.state.shadowsArray,Ne=j.state.version,Oe=Ge.getParameters(R,j.state,Te,W,ie),Be=Ge.getProgramCacheKey(Oe);let it=ae.programs;ae.environment=R.isMeshStandardMaterial?W.environment:null,ae.fog=W.fog,ae.envMap=(R.isMeshStandardMaterial?te:w).get(R.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,it===void 0&&(R.addEventListener("dispose",nt),it=new Map,ae.programs=it);let et=it.get(Be);if(et!==void 0){if(ae.currentProgram===et&&ae.lightsStateVersion===Ne)return ea(R,Oe),et}else Oe.uniforms=Ge.getUniforms(R),R.onBeforeCompile(Oe,D),et=Ge.acquireProgram(Oe,Be),it.set(Be,et),ae.uniforms=Oe.uniforms;const Xe=ae.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xe.clippingPlanes=we.uniform),ea(R,Oe),ae.needsLights=wu(R),ae.lightsStateVersion=Ne,ae.needsLights&&(Xe.ambientLightColor.value=j.state.ambient,Xe.lightProbe.value=j.state.probe,Xe.directionalLights.value=j.state.directional,Xe.directionalLightShadows.value=j.state.directionalShadow,Xe.spotLights.value=j.state.spot,Xe.spotLightShadows.value=j.state.spotShadow,Xe.rectAreaLights.value=j.state.rectArea,Xe.ltc_1.value=j.state.rectAreaLTC1,Xe.ltc_2.value=j.state.rectAreaLTC2,Xe.pointLights.value=j.state.point,Xe.pointLightShadows.value=j.state.pointShadow,Xe.hemisphereLights.value=j.state.hemi,Xe.directionalShadowMap.value=j.state.directionalShadowMap,Xe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Xe.spotShadowMap.value=j.state.spotShadowMap,Xe.spotLightMatrix.value=j.state.spotLightMatrix,Xe.spotLightMap.value=j.state.spotLightMap,Xe.pointShadowMap.value=j.state.pointShadowMap,Xe.pointShadowMatrix.value=j.state.pointShadowMatrix),ae.currentProgram=et,ae.uniformsList=null,et}function bn(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=uu.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function ea(R,W){const ie=ke.get(R);ie.outputColorSpace=W.outputColorSpace,ie.batching=W.batching,ie.batchingColor=W.batchingColor,ie.instancing=W.instancing,ie.instancingColor=W.instancingColor,ie.instancingMorph=W.instancingMorph,ie.skinning=W.skinning,ie.morphTargets=W.morphTargets,ie.morphNormals=W.morphNormals,ie.morphColors=W.morphColors,ie.morphTargetsCount=W.morphTargetsCount,ie.numClippingPlanes=W.numClippingPlanes,ie.numIntersection=W.numClipIntersection,ie.vertexAlphas=W.vertexAlphas,ie.vertexTangents=W.vertexTangents,ie.toneMapping=W.toneMapping}function ro(R,W,ie,ae,j){W.isScene!==!0&&(W=Wt),O.resetTextureUnits();const Te=W.fog,Ne=ae.isMeshStandardMaterial?W.environment:null,Oe=Y===null?D.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:fr,Be=(ae.isMeshStandardMaterial?te:w).get(ae.envMap||Ne),it=ae.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,et=!!ie.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Xe=!!ie.morphAttributes.position,yt=!!ie.morphAttributes.normal,St=!!ie.morphAttributes.color;let qt=Ta;ae.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(qt=D.toneMapping);const At=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,at=At!==void 0?At.length:0,qe=ke.get(ae),pn=_.state.lights;if(de===!0&&(Me===!0||R!==C)){const tn=R===C&&ae.id===N;we.setState(ae,R,tn)}let Mt=!1;ae.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==pn.state.version||qe.outputColorSpace!==Oe||j.isBatchedMesh&&qe.batching===!1||!j.isBatchedMesh&&qe.batching===!0||j.isBatchedMesh&&qe.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&qe.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&qe.instancing===!1||!j.isInstancedMesh&&qe.instancing===!0||j.isSkinnedMesh&&qe.skinning===!1||!j.isSkinnedMesh&&qe.skinning===!0||j.isInstancedMesh&&qe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&qe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&qe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&qe.instancingMorph===!1&&j.morphTexture!==null||qe.envMap!==Be||ae.fog===!0&&qe.fog!==Te||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==we.numPlanes||qe.numIntersection!==we.numIntersection)||qe.vertexAlphas!==it||qe.vertexTangents!==et||qe.morphTargets!==Xe||qe.morphNormals!==yt||qe.morphColors!==St||qe.toneMapping!==qt||qe.morphTargetsCount!==at)&&(Mt=!0):(Mt=!0,qe.__version=ae.version);let jn=qe.currentProgram;Mt===!0&&(jn=en(ae,W,j));let wi=!1,Fn=!1,_n=!1;const Ft=jn.getUniforms(),Hn=qe.uniforms;if(je.useProgram(jn.program)&&(wi=!0,Fn=!0,_n=!0),ae.id!==N&&(N=ae.id,Fn=!0),wi||C!==R){je.buffers.depth.getReversed()?(ye.copy(R.projectionMatrix),vb(ye),_b(ye),Ft.setValue(F,"projectionMatrix",ye)):Ft.setValue(F,"projectionMatrix",R.projectionMatrix),Ft.setValue(F,"viewMatrix",R.matrixWorldInverse);const Mn=Ft.map.cameraPosition;Mn!==void 0&&Mn.setValue(F,Ye.setFromMatrixPosition(R.matrixWorld)),gt.logarithmicDepthBuffer&&Ft.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Ft.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,Fn=!0,_n=!0)}if(j.isSkinnedMesh){Ft.setOptional(F,j,"bindMatrix"),Ft.setOptional(F,j,"bindMatrixInverse");const tn=j.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Ft.setValue(F,"boneTexture",tn.boneTexture,O))}j.isBatchedMesh&&(Ft.setOptional(F,j,"batchingTexture"),Ft.setValue(F,"batchingTexture",j._matricesTexture,O),Ft.setOptional(F,j,"batchingIdTexture"),Ft.setValue(F,"batchingIdTexture",j._indirectTexture,O),Ft.setOptional(F,j,"batchingColorTexture"),j._colorsTexture!==null&&Ft.setValue(F,"batchingColorTexture",j._colorsTexture,O));const Nn=ie.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&Ve.update(j,ie,jn),(Fn||qe.receiveShadow!==j.receiveShadow)&&(qe.receiveShadow=j.receiveShadow,Ft.setValue(F,"receiveShadow",j.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(Hn.envMap.value=Be,Hn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&W.environment!==null&&(Hn.envMapIntensity.value=W.environmentIntensity),Fn&&(Ft.setValue(F,"toneMappingExposure",D.toneMappingExposure),qe.needsLights&&Au(Hn,_n),Te&&ae.fog===!0&&Ce.refreshFogUniforms(Hn,Te),Ce.refreshMaterialUniforms(Hn,ae,K,Q,_.state.transmissionRenderTarget[R.id]),uu.upload(F,bn(qe),Hn,O)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(uu.upload(F,bn(qe),Hn,O),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Ft.setValue(F,"center",j.center),Ft.setValue(F,"modelViewMatrix",j.modelViewMatrix),Ft.setValue(F,"normalMatrix",j.normalMatrix),Ft.setValue(F,"modelMatrix",j.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const tn=ae.uniformsGroups;for(let Mn=0,Zr=tn.length;Mn<Zr;Mn++){const Xn=tn[Mn];X.update(Xn,jn),X.bind(Xn,jn)}}return jn}function Au(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function wu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(R,W,ie){const ae=ke.get(R);ae.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),ke.get(R.texture).__webglTexture=W,ke.get(R.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:ie,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const ie=ke.get(R);ie.__webglFramebuffer=W,ie.__useDefaultFramebuffer=W===void 0};const El=F.createFramebuffer();this.setRenderTarget=function(R,W=0,ie=0){Y=R,H=W,B=ie;let ae=!0,j=null,Te=!1,Ne=!1;if(R){const Be=ke.get(R);if(Be.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(F.FRAMEBUFFER,null),ae=!1;else if(Be.__webglFramebuffer===void 0)O.setupRenderTarget(R);else if(Be.__hasExternalTextures)O.rebindTextures(R,ke.get(R.texture).__webglTexture,ke.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Xe=R.depthTexture;if(Be.__boundDepthTexture!==Xe){if(Xe!==null&&ke.has(Xe)&&(R.width!==Xe.image.width||R.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(R)}}const it=R.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Ne=!0);const et=ke.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(et[W])?j=et[W][ie]:j=et[W],Te=!0):R.samples>0&&O.useMultisampledRTT(R)===!1?j=ke.get(R).__webglMultisampledFramebuffer:Array.isArray(et)?j=et[ie]:j=et,V.copy(R.viewport),ue.copy(R.scissor),re=R.scissorTest}else V.copy(P).multiplyScalar(K).floor(),ue.copy(ne).multiplyScalar(K).floor(),re=Se;if(ie!==0&&(j=El),je.bindFramebuffer(F.FRAMEBUFFER,j)&&ae&&je.drawBuffers(R,j),je.viewport(V),je.scissor(ue),je.setScissorTest(re),Te){const Be=ke.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+W,Be.__webglTexture,ie)}else if(Ne){const Be=ke.get(R.texture),it=W;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Be.__webglTexture,ie,it)}else if(R!==null&&ie!==0){const Be=ke.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Be.__webglTexture,ie)}N=-1},this.readRenderTargetPixels=function(R,W,ie,ae,j,Te,Ne){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=ke.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(Oe=Oe[Ne]),Oe){je.bindFramebuffer(F.FRAMEBUFFER,Oe);try{const Be=R.texture,it=Be.format,et=Be.type;if(!gt.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!gt.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-ae&&ie>=0&&ie<=R.height-j&&F.readPixels(W,ie,ae,j,st.convert(it),st.convert(et),Te)}finally{const Be=Y!==null?ke.get(Y).__webglFramebuffer:null;je.bindFramebuffer(F.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(R,W,ie,ae,j,Te,Ne){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=ke.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(Oe=Oe[Ne]),Oe)if(W>=0&&W<=R.width-ae&&ie>=0&&ie<=R.height-j){je.bindFramebuffer(F.FRAMEBUFFER,Oe);const Be=R.texture,it=Be.format,et=Be.type;if(!gt.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!gt.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Xe),F.bufferData(F.PIXEL_PACK_BUFFER,Te.byteLength,F.STREAM_READ),F.readPixels(W,ie,ae,j,st.convert(it),st.convert(et),0);const yt=Y!==null?ke.get(Y).__webglFramebuffer:null;je.bindFramebuffer(F.FRAMEBUFFER,yt);const St=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await gb(F,St,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Xe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Te),F.deleteBuffer(Xe),F.deleteSync(St),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,ie=0){const ae=Math.pow(2,-ie),j=Math.floor(R.image.width*ae),Te=Math.floor(R.image.height*ae),Ne=W!==null?W.x:0,Oe=W!==null?W.y:0;O.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,ie,0,0,Ne,Oe,j,Te),je.unbindTexture()};const pr=F.createFramebuffer(),so=F.createFramebuffer();this.copyTextureToTexture=function(R,W,ie=null,ae=null,j=0,Te=null){Te===null&&(j!==0?(cu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=j,j=0):Te=0);let Ne,Oe,Be,it,et,Xe,yt,St,qt;const At=R.isCompressedTexture?R.mipmaps[Te]:R.image;if(ie!==null)Ne=ie.max.x-ie.min.x,Oe=ie.max.y-ie.min.y,Be=ie.isBox3?ie.max.z-ie.min.z:1,it=ie.min.x,et=ie.min.y,Xe=ie.isBox3?ie.min.z:0;else{const Nn=Math.pow(2,-j);Ne=Math.floor(At.width*Nn),Oe=Math.floor(At.height*Nn),R.isDataArrayTexture?Be=At.depth:R.isData3DTexture?Be=Math.floor(At.depth*Nn):Be=1,it=0,et=0,Xe=0}ae!==null?(yt=ae.x,St=ae.y,qt=ae.z):(yt=0,St=0,qt=0);const at=st.convert(W.format),qe=st.convert(W.type);let pn;W.isData3DTexture?(O.setTexture3D(W,0),pn=F.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(O.setTexture2DArray(W,0),pn=F.TEXTURE_2D_ARRAY):(O.setTexture2D(W,0),pn=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const Mt=F.getParameter(F.UNPACK_ROW_LENGTH),jn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),wi=F.getParameter(F.UNPACK_SKIP_PIXELS),Fn=F.getParameter(F.UNPACK_SKIP_ROWS),_n=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,At.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,At.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,it),F.pixelStorei(F.UNPACK_SKIP_ROWS,et),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Xe);const Ft=R.isDataArrayTexture||R.isData3DTexture,Hn=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const Nn=ke.get(R),tn=ke.get(W),Mn=ke.get(Nn.__renderTarget),Zr=ke.get(tn.__renderTarget);je.bindFramebuffer(F.READ_FRAMEBUFFER,Mn.__webglFramebuffer),je.bindFramebuffer(F.DRAW_FRAMEBUFFER,Zr.__webglFramebuffer);for(let Xn=0;Xn<Be;Xn++)Ft&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ke.get(R).__webglTexture,j,Xe+Xn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ke.get(W).__webglTexture,Te,qt+Xn)),F.blitFramebuffer(it,et,Ne,Oe,yt,St,Ne,Oe,F.DEPTH_BUFFER_BIT,F.NEAREST);je.bindFramebuffer(F.READ_FRAMEBUFFER,null),je.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||ke.has(R)){const Nn=ke.get(R),tn=ke.get(W);je.bindFramebuffer(F.READ_FRAMEBUFFER,pr),je.bindFramebuffer(F.DRAW_FRAMEBUFFER,so);for(let Mn=0;Mn<Be;Mn++)Ft?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Nn.__webglTexture,j,Xe+Mn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Nn.__webglTexture,j),Hn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,tn.__webglTexture,Te,qt+Mn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,tn.__webglTexture,Te),j!==0?F.blitFramebuffer(it,et,Ne,Oe,yt,St,Ne,Oe,F.COLOR_BUFFER_BIT,F.NEAREST):Hn?F.copyTexSubImage3D(pn,Te,yt,St,qt+Mn,it,et,Ne,Oe):F.copyTexSubImage2D(pn,Te,yt,St,it,et,Ne,Oe);je.bindFramebuffer(F.READ_FRAMEBUFFER,null),je.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Hn?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(pn,Te,yt,St,qt,Ne,Oe,Be,at,qe,At.data):W.isCompressedArrayTexture?F.compressedTexSubImage3D(pn,Te,yt,St,qt,Ne,Oe,Be,at,At.data):F.texSubImage3D(pn,Te,yt,St,qt,Ne,Oe,Be,at,qe,At):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Te,yt,St,Ne,Oe,at,qe,At.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Te,yt,St,At.width,At.height,at,At.data):F.texSubImage2D(F.TEXTURE_2D,Te,yt,St,Ne,Oe,at,qe,At);F.pixelStorei(F.UNPACK_ROW_LENGTH,Mt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,jn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,wi),F.pixelStorei(F.UNPACK_SKIP_ROWS,Fn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,_n),Te===0&&W.generateMipmaps&&F.generateMipmap(pn),je.unbindTexture()},this.copyTextureToTexture3D=function(R,W,ie=null,ae=null,j=0){return cu('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,W,ie,ae,j)},this.initRenderTarget=function(R){ke.get(R).__webglFramebuffer===void 0&&O.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?O.setTextureCube(R,0):R.isData3DTexture?O.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?O.setTexture2DArray(R,0):O.setTexture2D(R,0),je.unbindTexture()},this.resetState=function(){H=0,B=0,Y=null,je.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ma}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ct._getUnpackColorSpace()}}function Ex(){const[a,e]=le.useState({width:window.innerWidth,height:window.innerHeight});return le.useEffect(()=>{function i(){e({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}},[]),a}const _u="https://github.com/jayhcrawford",Dp="https://www.instagram.com/jaycraw1_",ul="https://www.linkedin.com/in/jay-crawford-prod/",Ji="Cal Sans",jr="Oswald",Ki="Arial, sans",Uw=1e3,fl="Jay H. Crawford",fu="65",sl="opacity-65 font-bold text-white",Sl=a=>b.jsx(b.Fragment,{children:b.jsxs("div",{className:"text-white mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10 py-8",children:[a.construction==!0&&b.jsx("div",{className:"flex justify-center mb-10",children:b.jsxs("div",{className:"flex flex-col",children:[b.jsx("div",{className:"flex justify-center",children:b.jsx("div",{className:"h-40 w-40",children:b.jsx("img",{src:"/under_construction.svg"})})}),b.jsx("p",{className:"inline-block bg-red-500 rounded-xl text-center font-extrabold text-4xl",children:"This section is under construction"})]})}),b.jsx("h1",{style:{fontFamily:jr},id:"blog_header",className:"text-5xl text-white font-extrabold pb-10 ",children:a.title}),b.jsx("div",{className:"p-4 sm:p-6 lg:p-8",style:{backgroundColor:"#0b0f17",borderRadius:"20px"},children:a.children})]})}),bx="text-[#CCCFD9]",eu=({children:a,align:e="center",className:i})=>{const s={left:"text-left",center:"text-center",right:"text-right"};return b.jsx("p",{className:`${s[e]} text-xs uppercase tracking-[0.4em] ${bx} ${i??""}`.trim(),children:a})},or=({src:a,alt:e,variant:i="full",figureLabel:s,figureCaption:l,imgClassName:c,figureMarginClassName:f="my-8",figcaptionClassName:d,withMatte:p=!1,matteClassName:m})=>{const v=!!(s||l),g={full:"w-full max-w-4xl",half:"mx-auto w-full sm:w-3/4 lg:w-1/2",centered:"mx-auto w-full sm:w-3/4 lg:w-2/3",quarter:"mx-auto w-full sm:w-1/2 lg:w-1/4"},x=b.jsx("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:b.jsx("img",{src:a,alt:e,className:`${g[i]} ${c??""}`.trim()})});return b.jsxs("figure",{className:`flex flex-col justify-center ${f}`,children:[p?b.jsx("div",{className:`rounded-2xl border border-white/20 bg-white/5 p-4 ${m??""}`.trim(),children:x}):x,v&&b.jsxs("figcaption",{className:`mt-2 text-center text-sm ${d??"text-gray-300"}`.trim(),children:[s&&b.jsx("span",{className:"font-semibold",children:s}),l&&b.jsx("span",{className:s?"ml-2":"",children:l})]})]})},Mx=({href:a,label:e,newTab:i=!0})=>b.jsx("a",{href:a,target:i?"_blank":void 0,rel:i?"noopener noreferrer":void 0,className:"inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/90 bg-white/70 px-6 py-3 text-sm font-semibold tracking-wide text-slate-900 text-center backdrop-blur-sm transition hover:bg-white/90 hover:border-white hover:text-slate-900 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]",children:e}),Nw=a=>b.jsxs("div",{className:" flex justify-center",children:[b.jsx("a",{className:" text-xl font-semibold underline text-center",target:"_blank",href:a.url,children:a.linkText}),b.jsx("div",{style:{width:"90px"},children:b.jsx("svg",{style:{filter:"invert(100%)",transform:"rotate(-10deg), translateX(-20px)"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 640",children:b.jsx("path",{d:"M224 104C224 81.9 241.9 64 264 64C286.1 64 304 81.9 304 104L304 252.2C312.5 244.6 323.7 240 336 240C356.6 240 374.2 253 381 271.2C389.8 261.9 402.2 256 416 256C441.3 256 462 275.5 463.9 300.3C472.4 292.6 483.7 288 496 288C522.5 288 544 309.5 544 336L544 448C544 518.7 486.7 576 416 576L330.7 576C325.7 576 320.8 575.7 316 575C260.7 569.4 209.8 541 176 496L104 400C90.7 382.3 94.3 357.3 112 344C129.7 330.7 154.7 334.3 168 352L224 426.7L224 104zM336 368C336 359.2 328.8 352 320 352C311.2 352 304 359.2 304 368L304 464C304 472.8 311.2 480 320 480C328.8 480 336 472.8 336 464L336 368zM384 352C375.2 352 368 359.2 368 368L368 464C368 472.8 375.2 480 384 480C392.8 480 400 472.8 400 464L400 368C400 359.2 392.8 352 384 352zM464 368C464 359.2 456.8 352 448 352C439.2 352 432 359.2 432 368L432 464C432 472.8 439.2 480 448 480C456.8 480 464 472.8 464 464L464 368z"})})})]}),Dn=({text:a,className:e})=>b.jsx("section",{className:"mt-0",style:{fontFamily:Ki},children:b.jsx("p",{className:`text-lg leading-relaxed text-slate-200 mt-5 ${e??""}`.trim(),children:a})}),il=a=>{const e={compact:"text-2xl sm:text-4xl lg:text-5xl font-light text-center p-4 sm:p-6 pb-8 leading-snug",balanced:"text-3xl sm:text-5xl lg:text-6xl font-light text-center p-6 sm:p-8 pb-10 sm:pb-14 leading-tight",hero:"text-4xl sm:text-6xl xl:text-7xl font-light text-center p-6 sm:p-10 pb-12 leading-tight"};return b.jsxs("section",{id:"Blog_heroQuote",className:`${e[a.sizePreset??"hero"]}`,style:{fontFamily:jr},children:[b.jsx("style",{children:`
                        #Blog_heroQuoteQuoter::before {
                            content: "- "; /* or content: "&copy;"; */
                        }
                `}),b.jsxs("p",{children:[a.quote,a.quoter?b.jsx("span",{id:"Blog_heroQuoteQuoter",className:`block text-center pt-4 ml-${a.quoter_padding}`,children:a.quoter}):null]})]})},Lw=[{label:"Now",items:["Engineering student at LACC","BuildLACCD intern","UrFriends dev"]},{label:"Roots",items:["BFA from SAIC","Lexington-born","multidisciplinary maker"]},{label:"Range",items:["Construction ops","hospitality leadership","art direction","software"]}],Ow=["Designing community-driven software","Digitizing construction workflows","Making data feel human (fitness, fabrication, finance)"],Pw=[{title:"Creative Tools",tools:["Photoshop","Illustrator","Maya","Blender","Fusion 360","SOLIDWORKS"]},{title:"Coding / Languages",tools:["TypeScript","JavaScript","Python","C++","SQL"]},{title:"Web Dev & Platforms",tools:["Next.js","Firebase","Stripe","Vercel","Render","Tailwind"]}],zr="text-[#CCCFD9]",Bw=()=>b.jsxs(Sl,{title:"About",construction:!1,children:[b.jsxs("style",{children:[`
        /* Custom scrollbar styles */
        `,"`"]}),b.jsx("div",{className:"relative flex items-center justify-center rounded-2xl border border-dashed border-white/20 bg-slate-800/40 p-6 text-center",children:b.jsxs("div",{children:[b.jsx("p",{className:`text-sm uppercase tracking-[0.3em] ${zr}`,children:"Portrait Placeholder"}),b.jsx("p",{className:"mt-3 text-xl font-semibold text-white",children:"Drop a high-contrast photo here"}),b.jsx("p",{className:"mt-2 text-sm text-slate-300",children:"Suggested: clean lighting, subtle gradient background, confident but relaxed posture."})]})}),b.jsxs("div",{className:"space-y-16 text-slate-100",children:[b.jsx("section",{className:"grid gap-10 rounded-2xl p-8 lg:grid-cols-[3fr,2fr]",children:b.jsxs("div",{className:"space-y-6",children:[b.jsx("p",{className:`text-center text-sm uppercase tracking-[0.3em] ${zr}`,children:"Designer · Builder · Storyteller"}),b.jsxs("h1",{className:"text-4xl font-semibold leading-tight text-white sm:text-5xl mt-10 mb-10",children:["Context-switching between ",b.jsx("strong",{children:"construction sites"}),", ",b.jsx("strong",{children:"code editors"}),", and ",b.jsx("strong",{children:"sketchbooks"})," is my normal."]}),b.jsxs("p",{className:"text-lg leading-relaxed text-slate-200 mt-5",children:["I grew up in Kentucky, cut my teeth in ",b.jsx("strong",{children:"art school"})," at SAIC, and moved to Los Angeles in 2017 to pursue dreams; ",b.jsx("i",{children:"LA has become home now. "}),"The city's beauty, its diversity, the weather, the culture, I love what it has to offer here  — here I've worked across specialty construction, hospitality, and entertainment. Today I split my time between BuildLACCD ",b.jsx("strong",{children:"project management"}),", UrFriends",b.jsx("strong",{children:" full-stack development"}),", ",b.jsx("strong",{children:"engineering school"}),", my passion for the fitness & creativity."]}),b.jsxs("div",{className:"space-y-3 rounded-2xl border border-white/5 bg-white/5/20 mt-5 pt-1 p-6",children:[b.jsx("p",{className:`text-xs uppercase tracking-[0.4em] pb-5 pt-5 ${zr}`,children:"What Drives Me"}),b.jsx("div",{className:"flex flex-wrap gap-3",children:Ow.map(a=>b.jsx("span",{className:"rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm",children:a},a))})]})]})}),b.jsx("section",{className:"grid gap-6 lg:grid-cols-3",children:Lw.map(a=>b.jsxs("article",{className:"rounded-2xl border border-white/10 bg-slate-900/40 p-6 shadow-lg shadow-black/20",children:[b.jsx("p",{className:`text-xs uppercase tracking-[0.4em] ${zr}`,children:a.label}),b.jsx("ul",{className:"mt-3 space-y-2",children:a.items.map(e=>b.jsxs("li",{className:"text-lg font-semibold text-white flex items-start",children:[b.jsx("span",{className:"mr-3",children:"•"}),b.jsx("span",{children:e})]},e))})]},a.label))}),b.jsxs("section",{className:"space-y-6 text-lg leading-relaxed text-slate-200",children:[b.jsxs("p",{children:["I thrive where ",b.jsx("strong",{children:"hands-on execution"})," meets ",b.jsx("strong",{children:"polished storytelling"}),". I have ",b.jsx("strong",{children:b.jsx("a",{href:ul,target:"_blank",className:"hover:text-white/80 transition-colors",children:b.jsx("u",{children:"managed multimillion-dollar campus upgrades"})})}),", ",b.jsx("strong",{children:b.jsx("a",{href:"/projects/urfriends",className:"hover:text-white/80 transition-colors",children:b.jsx("u",{children:"shipped SaaS products"})})}),", led hospitality teams, fabricated sets, and still carve out time to paint, sketch, and cycle the Los Angeles river paths. Fitness is a huge passion of mine, especially running and cycling. As a runner, I love the distance and concentration, and as a cyclist I love the freedom. Each lane teaches me to stay calm, design deliberately, and communicate with clarity — and in every world thoughts of finding cross-pollination drive my imagination wild! I'm always looking for new ways to learn."]}),b.jsxs("p",{children:["Engineering school sharpened my math and systems thinking; art school wired me to experiment without fear; years in hospitality taught me to keep people seen and to communicate ",b.jsx("i",{children:"thoroughly"}),". School in STEM has been extremely rewarding — it has exposed me to tools that I've used for refining and analyzing",b.jsx("strong",{children:b.jsxs("a",{href:"/projects/ripsheet",className:"hover:text-white/80 transition-colors",children:[" ",b.jsx("u",{children:"personal fitness systems"})]})}),", allowed me to tutor fellow students at MESA; I've celebrated and philosophized in the Human Computer Interaction Club, helped organize a hackathon, I've gone from 'self-taught' programmer to someone who understands computer science paradigms, and become ",b.jsx("i",{children:"actually"})," kind of fascinated by math."]}),b.jsx("p",{children:`When I am not laboring (with love ofc), you will find me studying new fabrication techniques, spelunking the wiki of my latest fascination, long-distnace or trail running, homecanning beans (they're SO good), riding my bike around LA, going to an art museum, or tinkering creatively. I'm big on "hippie" type stuff, get way into reading about future green-tech, and resonate with preserving the environment — you can absolutely find me using a bicycle and public transit.`}),b.jsx("p",{className:"mt-8",children:"I still say yes to the weird gigs — they keep me humble and curious."})]}),b.jsxs("section",{className:"space-y-8 rounded-2xl border border-white/10 bg-slate-900/40 p-6",children:[b.jsxs("div",{className:"flex items-baseline justify-between",children:[b.jsx("h2",{className:"text-2xl font-semibold text-white",children:"Digital skills"}),b.jsx("span",{className:`text-xs uppercase tracking-[0.4em] ${zr}`,children:"TODO: ADD GRAPHIC"})]}),b.jsx("div",{className:"space-y-6",children:Pw.map(a=>b.jsxs("div",{className:"space-y-3",children:[b.jsx("p",{className:`text-s uppercase tracking-[0.4em]  p-5 text-center font-bold ${zr}`,children:a.title}),b.jsx("div",{className:"grid sm:grid-cols-3 md:grid-cols-5 gap-4 lg:grid-cols-5 xl:grid-cols-6",children:a.tools.map(e=>b.jsxs("div",{className:"flex flex-col items-center gap-2 text-center",children:[b.jsx("div",{className:"flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-slate-800/60 text-xs uppercase tracking-wide text-slate-400",children:"Logo"}),b.jsx("p",{className:"text-sm font-medium text-white",children:e})]},e))})]},a.title))})]}),b.jsxs("section",{className:`flex flex-col items-center gap-4 rounded-2xl border border-white/20 bg-slate-800/40 px-6 py-5 text-sm ${zr}`,children:[b.jsx("p",{className:"text-xs uppercase tracking-[0.4em]",children:"Next steps"}),b.jsxs("div",{className:"flex flex-col gap-3 text-base text-slate-100",children:[b.jsxs("p",{className:"text-center",children:["I love ",b.jsx("strong",{children:"building"})," and ",b.jsx("strong",{children:"creating"}),", and if you can use my help, ",b.jsx("strong",{children:"please reach out!"})]}),b.jsx(Mx,{href:"/contact",label:"Open Contact Page",newTab:!1})]})]})]})]}),zw=()=>b.jsx("div",{className:"text-white",style:{fontFamily:Ki},children:b.jsx("div",{className:"mx-auto w-full max-w-6xl px-6 py-20",children:b.jsxs("div",{className:"grid gap-10 md:grid-cols-2 md:items-center",children:[b.jsxs("div",{children:[b.jsx("p",{className:"uppercase tracking-[0.3em] text-sm opacity-70",children:"Contact"}),b.jsx("h1",{style:{fontFamily:Ji},className:"text-4xl md:text-6xl font-bold mt-4",children:"Let's build something bold."}),b.jsx("p",{className:"mt-4 text-lg opacity-80 max-w-xl",children:"Reach out for collaborations, commissions, or just to say hello. I'm based in Los Angeles and always open to new ideas."}),b.jsxs("div",{className:"mt-8 flex flex-col sm:flex-row gap-4",children:[b.jsx("a",{href:"mailto:jayhcrawford@gmail.com",className:"inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:border-white hover:bg-white/10",children:"Email Me"}),b.jsx("a",{href:ul,target:"new",className:"inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:border-white hover:bg-white/10",children:"LinkedIn"})]})]}),b.jsxs("div",{className:"rounded-2xl border border-white/20 bg-white/5 p-8 backdrop-blur",children:[b.jsx("p",{className:"text-sm uppercase tracking-[0.3em] opacity-70",children:"Direct"}),b.jsx("h2",{style:{fontFamily:Ji},className:"text-3xl font-semibold mt-3",children:fl}),b.jsx("p",{className:"opacity-80 mt-2",children:"Los Angeles, CA"}),b.jsxs("div",{className:"mt-6",children:[b.jsx("p",{className:"text-sm uppercase tracking-[0.3em] opacity-70",children:"Email"}),b.jsx("a",{className:"text-lg font-semibold hover:underline",href:"mailto:jayhcrawford@gmail.com",children:"jayhcrawford@gmail.com"})]}),b.jsxs("div",{className:"mt-6",children:[b.jsx("p",{className:"text-sm uppercase tracking-[0.3em] opacity-70",children:"Social"}),b.jsxs("div",{className:"mt-3 flex flex-wrap gap-4 text-sm",children:[b.jsx("a",{className:"hover:underline",href:ul,target:"new",children:"LinkedIn"}),b.jsx("a",{className:"hover:underline",href:Dp,target:"new",children:"Instagram"}),b.jsx("a",{className:"hover:underline",href:_u,target:"new",children:"Github"})]})]})]})]})})}),Iw=a=>b.jsxs(b.Fragment,{children:[a.url==""&&b.jsx("div",{id:"this_one",className:"h-30 w-30 absolute",children:b.jsx("img",{src:"/under_construction.svg"})}),b.jsx("div",{style:{boxShadow:"5px 5px 5px rgba(0, 0, 0, 1)"},className:"gridPhoto_Image_container w-80 h-60",children:b.jsx("img",{className:"rounded-lg w-80 h-60",style:{objectFit:"cover"},src:a.img})})]}),Fw=a=>{const[e,i]=le.useState(!1);return b.jsx("div",{onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:b.jsx(qr,{id:"",to:a.url?a.url:"",children:b.jsx("div",{className:"gridPhoto_container p-1 m-2 flex justify-center",children:b.jsxs("div",{className:`gridPhoto_item_container m-2 inline ${a.url==""&&"cursor-not-allowed"}`,children:[b.jsx("style",{children:`
                .gridPhoto_item_container:hover {
                  text-decoration: dotted;
                }
                .gridPhoto_item_container {
                  text-decoration: dotted;
                }
              `}),b.jsx("div",{className:"relative",children:b.jsxs("div",{className:" h-full w-full relative z-100",children:[b.jsx("div",{className:`${a.url==""&&e?"absolute":"hidden"} w-full absolute text-white font-black bg-red-600 top-[120px] p-4 text-center`,children:"Under Construction"}),b.jsx(Iw,{img:a.img,url:a.url})]})}),b.jsx("div",{children:b.jsx("h4",{style:{fontFamily:Ji},className:"text-2xl text-white p-4 abt_gridPhotoItem",children:a.title})})]})})})})},Tx=a=>{const e=()=>a.width<2e3?"w-full":"w-[60%]",i=()=>a.width<750?"grid-cols-1":"grid-cols-2";return b.jsx("div",{id:"grid_container",className:`grid ${e()} ${i()}`,children:a.categories.map((s,l)=>b.jsx("span",{children:b.jsx(Fw,{title:s.category,img:s.img,url:s.url?s.url:""})},`${l}-${s.category}`))})},Hw=a=>b.jsx(Tx,{width:a.width,categories:a.category_array}),Gw=a=>{const e=new Date().getFullYear();return a.path=="/"?b.jsx("footer",{style:{fontFamily:Ji},className:""}):b.jsxs("footer",{style:{fontFamily:Ji},className:" text-white mx-auto w-full p-4 py-6",children:[b.jsx("style",{children:`
            .footer_links {
              margin-bottom: 2em;
            }
            .footer_links li {
              margin-bottom: .2em;
            }
            .footer_linkes_transp {
            opacity: ${fu}%;
            }
            
            .footer_links li:hover {
            text-decoration: underline;
            opacity: 100%;
            }`}),b.jsxs("div",{id:"footer_content",children:[b.jsxs("div",{className:"md:flex md:justify-between",children:[b.jsx("div",{className:"",children:b.jsx("ul",{className:"footer_links text-md text-left",children:b.jsx("li",{children:b.jsxs("a",{href:"mailto:jayhcrawford@gmail.com",children:[b.jsx("p",{className:"font-bold",children:fl}),b.jsxs("span",{className:"footer_linkes_transp font-normal",style:{fontFamily:Ki},children:[b.jsx("p",{children:"Los Angeles, CA"}),b.jsx("p",{children:"jayhcrawford@gmail.com"})]})]})})})}),b.jsxs("div",{className:"grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 text-left",children:[b.jsxs("div",{children:[b.jsx("h2",{className:"text-sm font-bold uppercase",children:"Social"}),b.jsxs("ul",{id:"footer_social",style:{fontFamily:Ki},className:"footer_links footer_linkes_transp font-medium mt-3 mb-10",children:[b.jsx("style",{children:`
                      #footer_social li {
                        
                      }
                    `}),b.jsx("li",{children:b.jsx("a",{href:ul,target:"new",className:"hover:underline",children:"LinkedIn"})}),b.jsx("li",{className:"",children:b.jsx("a",{href:Dp,target:"new",className:"hover:underline",children:"Instagram"})}),b.jsx("li",{children:b.jsx("a",{href:_u,target:"new",className:"hover:underline",children:"Github"})})]})]}),b.jsx("div",{})]})]}),b.jsxs("div",{className:"sm:flex sm:items-center sm:justify-between",children:[b.jsxs("span",{style:{fontFamily:Ki},className:`font-normal text-sm text-white opacity-${fu} sm:text-center`,children:[e," - ",fl]}),b.jsx("div",{className:"flex mt-4 sm:justify-center sm:mt-0",children:b.jsxs("a",{href:_u,target:"new",className:`opacity-${fu} hover:opacity-100 hover:white ms-5`,children:[b.jsx("svg",{className:"w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:b.jsx("path",{fillRule:"evenodd",d:"M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z",clipRule:"evenodd"})}),b.jsx("span",{className:"sr-only",children:"GitHub account"})]})})]})]})]})},Vw=a=>b.jsx("div",{className:"social_brick_icon_container",style:{width:"150px"},children:b.jsxs("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 40",className:"social-svg",children:[b.jsx("defs",{children:b.jsx("style",{children:`
                    .social-svg {
                        fill: white;
                        transition: transform 0.3s ease-in-out; /* Smooth scaling effect */
                    }
                    .social-svg:hover {
                        transform: scale(1.1); /* Expand by 10% */
                    }
                    .social-svg:active {
                        transform: none;
                    }
                    `})}),a.name=="Tiktok"&&b.jsx("path",{className:"social_icon_fg",d:"M34.41,10.31c-3.78-.81-6.59-3.98-6.95-7.82v-.81h-6.35v25.2c-.01,2.95-2.41,5.33-5.36,5.32-1.66,0-3.22-.78-4.23-2.11h0s0,0,0,0c-1.78-2.35-1.33-5.69,1.02-7.48,1.38-1.05,3.19-1.36,4.85-.84v-6.45c-6.38-.88-12.27,3.58-13.15,9.96-.49,3.57.69,7.17,3.21,9.75,4.5,4.61,11.89,4.69,16.5.19,2.25-2.2,3.51-5.2,3.51-8.34v-12.88c2.57,1.83,5.64,2.82,8.8,2.81v-6.31c-.62,0-1.24-.06-1.85-.19h0Z"}),a.name=="Instagram"&&b.jsx("path",{className:"social_icon_fg",d:"M12.23,1.12C6.1,1.12,1.11,6.1,1.11,12.23v15.39c0,6.13,4.99,11.12,11.12,11.12h15.39c6.13,0,11.12-4.99,11.12-11.12v-15.39c0-6.13-4.99-11.12-11.12-11.12h-15.39ZM12.23,2.83h15.39c5.2,0,9.41,4.2,9.41,9.41v15.39c0,5.2-4.2,9.41-9.41,9.41h-15.39c-5.2,0-9.41-4.2-9.41-9.41v-15.39C2.82,7.03,7.02,2.83,12.23,2.83ZM30.18,7.96c-.94,0-1.71.77-1.71,1.71s.77,1.71,1.71,1.71,1.71-.77,1.71-1.71-.77-1.71-1.71-1.71ZM19.92,10.52c-5.19,0-9.41,4.22-9.41,9.41s4.22,9.41,9.41,9.41,9.41-4.22,9.41-9.41-4.22-9.41-9.41-9.41ZM19.92,12.23c4.26,0,7.7,3.44,7.7,7.7s-3.44,7.7-7.7,7.7-7.7-3.44-7.7-7.7,3.44-7.7,7.7-7.7Z"}),a.name=="Discord"&&b.jsx("path",{className:"social_icon_fg",d:"M33.35,7.61c-2.49-1.16-5.15-2.01-7.93-2.49-.34.62-.74,1.45-1.02,2.11-2.96-.44-5.89-.44-8.79,0-.28-.66-.68-1.49-1.03-2.11-2.79.48-5.45,1.33-7.94,2.5C1.62,15.2.26,22.6.94,29.89c3.33,2.49,6.56,4,9.73,4.99.78-1.08,1.48-2.22,2.08-3.43-1.15-.44-2.24-.97-3.28-1.6.28-.2.54-.42.8-.64,6.33,2.96,13.2,2.96,19.45,0,.26.22.53.43.8.64-1.04.63-2.14,1.16-3.29,1.6.6,1.2,1.3,2.35,2.08,3.43,3.18-.99,6.41-2.5,9.74-4.99.8-8.45-1.36-15.79-5.72-22.28h0ZM13.61,25.41c-1.9,0-3.46-1.77-3.46-3.93s1.52-3.94,3.46-3.94,3.49,1.77,3.46,3.94c0,2.16-1.52,3.93-3.46,3.93ZM26.39,25.41c-1.9,0-3.46-1.77-3.46-3.93s1.52-3.94,3.46-3.94,3.49,1.77,3.46,3.94c0,2.16-1.52,3.93-3.46,3.93Z"}),a.name=="Github"&&b.jsx("path",{className:"social_icon_fg",d:"M19.9,1.55C9.52,1.55,1.12,10.01,1.12,20.47c0,8.36,5.38,15.44,12.84,17.95.93.19,1.27-.41,1.27-.91,0-.44-.03-1.94-.03-3.51-5.22,1.13-6.31-2.26-6.31-2.26-.84-2.19-2.08-2.76-2.08-2.76-1.71-1.16.12-1.16.12-1.16,1.9.13,2.89,1.94,2.89,1.94,1.68,2.88,4.38,2.07,5.47,1.57.16-1.22.65-2.07,1.18-2.54-4.17-.44-8.55-2.07-8.55-9.33,0-2.07.75-3.76,1.93-5.07-.19-.47-.84-2.41.19-5.01,0,0,1.59-.5,5.16,1.94,1.53-.41,3.11-.62,4.7-.63,1.59,0,3.2.22,4.69.63,3.58-2.44,5.16-1.94,5.16-1.94,1.03,2.6.37,4.54.19,5.01,1.21,1.32,1.93,3.01,1.93,5.07,0,7.27-4.38,8.86-8.58,9.33.68.6,1.27,1.72,1.27,3.51,0,2.54-.03,4.57-.03,5.2,0,.5.34,1.1,1.27.91,7.46-2.51,12.84-9.59,12.84-17.95.03-10.46-8.4-18.92-18.75-18.92Z"})]})}),kw=()=>{const a=[{name:"Instagram",url:Dp},{name:"Github",url:_u}];return b.jsx("div",{className:"socialbrick-outer",children:b.jsxs("div",{className:"socialbrick-inner",children:[b.jsx("style",{children:`
                        .glow-button:hover svg {
                            filter: drop-shadow(0 0 10px rgba(255, 255, 255, .5)) drop-shadow(0 0 10px rgba(255, 255, 255, .5));
                        }
                        .glow-button:active svg {
                            filter: none;
                        }
                    `}),a.map((e,i)=>b.jsx("a",{"aria-label":`Our ${e.name}`,href:e.url,target:"_blank",className:"glow-button socialbrick-link",children:b.jsx(Vw,{name:e.name})},i))]})})};function jw(a){return a?a.toLowerCase().split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "):""}const Gs=()=>b.jsx("span",{className:`${sl} ml-5 mr-5`,children:"|"}),lr=a=>b.jsx("li",{style:{transition:"opacity .1s .1s"},className:`outline_nav_elem_text ${sl} hover:underline hover:opacity-100`,children:b.jsxs(qr,{to:`/${a.name}`,children:[b.jsx("style",{children:`
 
        
        `}),jw(a.name)]})}),Xw=a=>a.path=="/"?b.jsxs(b.Fragment,{children:[b.jsx("nav",{className:"z-10 w-ful",children:b.jsxs("ul",{style:{fontFamily:jr},className:"list-none p-0 pb-4 m-0 flex justify-center text-xl sm:text-3xl md:text-5xl",children:[b.jsx(lr,{name:"about"}),b.jsx(Gs,{}),b.jsx(lr,{name:"art"}),b.jsx(Gs,{}),b.jsx(lr,{name:"projects"}),b.jsx(Gs,{}),b.jsx(lr,{name:"contact"})]})}),b.jsxs("header",{style:{marginBottom:"70px"},children:[b.jsx("h1",{className:"text-center text-white",style:{fontFamily:Ji,fontSize:a.width<500?"3rem":"6rem",fontWeight:"bold"},children:fl}),b.jsxs("p",{className:`${sl} text-5xl text-center`,style:{fontFamily:jr},children:[b.jsx("span",{className:"block",children:"Engineering Student,"}),b.jsx("span",{children:"Interdisciplinary Creative & Programmer"})]}),b.jsx("p",{style:{fontFamily:Ki},className:`text-center p-4 ${sl} text-3xl`,children:"Los Angeles, CA"}),b.jsx(kw,{})]})]}):b.jsxs(b.Fragment,{children:[b.jsx("nav",{className:"z-10 w-full mb-5",children:b.jsxs("ul",{style:{fontFamily:jr},className:"list-none p-0 m-0 flex sm:text-2xl md:text-5xl",children:[b.jsx(lr,{name:"about"}),b.jsx(Gs,{}),b.jsx(lr,{name:"art"}),b.jsx(Gs,{}),b.jsx(lr,{name:"projects"}),b.jsx(Gs,{}),b.jsx(lr,{name:"contact"})]})}),b.jsxs("header",{style:{marginBottom:"70px"},children:[b.jsx(qr,{to:"/",children:b.jsx("h1",{className:"text-white",style:{fontFamily:Ji,fontSize:a.width<500?"1rem":"2rem",fontWeight:"bold"},children:fl})}),b.jsx("p",{className:`${sl} text-3xl text-left`,style:{fontFamily:jr},children:"Interdisciplinary Creative & Programmer"})]})]}),Ww=()=>b.jsx("img",{className:"w-30",src:"/LinkedIn_Logo.svg",alt:"LinkedIn logo"}),qw=a=>{let e="";const i=new Map(a.locationData.map(l=>[l.url.replace(/^\//,""),l.title])),s=l=>l.replace(/[_-]/g," ").trim().split(" ").filter(Boolean).map(f=>f.charAt(0).toUpperCase()+f.slice(1)).join(" ");return b.jsxs(b.Fragment,{children:[b.jsx("style",{children:`
        #location-bar {
        }

        .location-bar-bttn {
          font-family: ${jr};
          color: #0a0f16;
          background-color: rgba(255,255,255,.8);
          cursor: pointer;
          font-size: 1rem;
          padding: .5em;
          border: solid 3px #0a0f16;
          outline: solid 3px  rgba(255,255,255,.8);
          margin-right: 1em;
          margin-left: 1em;
          margin-bottom: 2em;
        }

        .location-bar-bttn:hover {
          background-color: rgba(255,255,255,1);
          outline: solid 3px  rgba(255,255,255,.8);
        }

        .location-bar-bttn:active {
          background-color: rgba(255,255,255,.5);
          outline: solid 3px  rgba(255,255,255,.8);
        }

        .location-bar-arrow {
            color: white;
            margin-top: .3em;
            font-size: 2em;
            color: rgba(255,255,255,.65);

        }

    `}),b.jsx("div",{id:"location-bar",children:a.split().map((l,c)=>{e+="/"+l;const f=i.get(l)??s(l);return b.jsxs("span",{children:[b.jsx(qr,{to:e,children:b.jsx("button",{className:"location-bar-bttn",children:f})}),c<a.split().length-1&&b.jsx("span",{className:"location-bar-arrow",children:">"})]},`${c}-location`)})})]})},Yw=()=>b.jsxs("svg",{id:"Layer_6","data-name":"Layer 6",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 1050 990",children:[b.jsx("defs",{children:b.jsx("style",{children:`
      .cls-1 {
        fill: #0e1a34;
      }

      .cls-2 {
        fill: #0b0f17;
      }

      .cls-3 {
        fill: #1e2b5a;
      }
      `})}),b.jsx("image",{width:"149",height:"149",transform:"translate(-50, -50) scale(9.2)",xlinkHref:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAACVCAYAAABRorhPAAAACXBIWXMAAAGJAAABiQGeLhE1AAABlklEQVR4nO3SoRGDAAAEQcBGIOm/PCQCHQoI8iYEsitfvbhhAAAAfs54Nr7m5f3tI9zTvq0fDU1XHOHZREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5EQFAADwDw4ePAUWKoYQ6wAAAABJRU5ErkJggg=="}),b.jsx("polygon",{className:"cls-3",transform:"translate(-20,0)",points:"1103.99 82.8 1103.99 967.01 1089.6 968.46 1089.61 960.77 1081.92 960.78 1081.93 954.05 1075.2 954.07 1075.21 946.38 1060.81 946.38 1060.82 939.66 1054.03 939.25 1053.14 931.98 1046.41 932 1046.42 925.27 1032.02 925.27 1032.03 917.59 1024.34 917.6 1024.35 910.87 1010.85 910.46 1009.95 903.2 995.56 903.2 995.56 896.48 982.06 896.07 981.17 888.81 974.44 888.82 974.45 882.09 960.05 882.09 960.05 874.42 945.66 874.42 945.66 867.7 925.03 867.7 923.59 860.02 909.19 860.02 909.19 853.31 888.08 853.31 888.08 845.63 873.69 845.63 873.69 838.91 844.9 838.91 844.9 831.24 816.11 831.24 816.11 824.52 766.69 824.52 765.25 816.85 707.68 816.85 707.68 824.52 664.49 824.52 664.49 831.24 628.99 831.24 627.55 838.91 600.2 838.91 600.2 845.63 571.41 845.63 569.97 853.31 542.62 853.31 542.62 860.02 513.84 860.02 512.4 867.7 485.05 867.7 485.05 874.42 456.26 874.42 454.82 882.09 427.47 882.09 427.47 888.81 405.4 888.81 405.4 896.49 376.61 896.49 376.61 903.2 347.82 903.2 347.82 910.88 326.71 910.88 326.71 917.6 297.92 917.6 296.49 925.27 269.14 925.27 269.14 931.99 247.07 931.99 247.07 939.67 218.28 939.67 218.28 946.38 197.17 946.38 195.73 954.06 175.09 954.06 175.09 960.78 146.31 960.78 146.31 968.45 125.2 968.45 125.2 975.17 96.41 975.17 94.97 982.85 74.34 982.85 74.34 989.56 53.22 989.56 51.79 997.24 31.15 997.24 31.15 1003.96 16.76 1003.96 16.76 788.06 10.04 788.06 10.04 148.05 37.39 148.05 38.83 140.37 67.62 140.37 67.62 133.65 103.12 133.65 103.12 125.98 131.91 125.98 131.91 119.26 175.09 119.26 175.09 111.58 218.28 111.58 218.28 104.87 384.29 104.87 384.29 111.58 413.08 111.58 413.08 119.26 427.47 119.26 427.47 125.98 448.58 125.98 449.48 133.23 462.98 133.65 462.98 140.37 477.37 140.37 478.27 147.63 485.05 148.04 485.05 154.76 499.44 154.76 499.44 162.44 513.84 162.44 513.83 169.16 520.56 169.15 521.45 176.41 534.95 176.83 534.94 183.55 542.63 183.54 542.62 191.23 557.02 191.23 557.01 197.95 563.74 197.94 564.64 205.2 578.14 205.61 578.13 212.34 592.52 212.34 593.42 219.59 606.92 220.01 606.92 226.73 628.99 226.73 628.99 234.4 713.91 234.4 715.35 226.73 744.14 226.73 744.14 220.01 771.49 220.01 772.93 212.34 794.04 212.34 794.04 205.62 814.67 205.62 816.11 197.94 837.22 197.94 837.22 191.23 857.86 191.23 859.3 183.55 873.69 183.55 873.69 176.83 894.8 176.83 894.8 169.16 909.19 169.16 909.19 162.44 929.83 162.44 931.27 154.76 945.66 154.76 945.65 148.04 959.15 147.63 960.05 140.37 981.17 140.37 981.17 133.65 995.56 133.65 995.56 125.98 1009.95 125.98 1009.95 119.26 1024.35 119.26 1024.35 111.58 1038.74 111.58 1038.74 104.87 1053.14 104.87 1053.14 97.19 1067.53 97.19 1067.53 90.47 1081.92 90.47 1081.92 82.8 1103.99 82.8"}),b.jsx("polygon",{className:"cls-1",transform:"translate(-20,0)",points:"472.49 231.55 472.49 238.74 508.47 238.74 508.47 245.94 537.26 245.94 537.26 253.13 558.85 253.13 558.85 260.33 580.44 260.33 580.44 267.52 594.84 267.52 594.84 274.72 609.23 274.72 609.23 281.92 623.63 281.92 623.63 289.11 645.22 289.11 645.22 296.31 659.61 296.31 659.61 303.5 681.2 303.5 681.2 310.7 695.6 310.7 695.6 317.89 724.39 317.89 724.39 325.09 767.57 325.09 767.57 332.28 795.64 332.28 796.36 325.09 846.02 325.09 846.74 317.89 882 317.89 882.72 310.7 910.79 310.7 911.51 303.5 939.58 303.5 940.3 296.31 968.37 296.31 969.08 289.11 997.15 289.11 997.87 281.92 1018.74 281.92 1019.46 274.72 1047.53 274.72 1048.25 267.52 1069.12 267.52 1069.84 260.33 1090.71 260.33 1091.43 253.13 1105.83 253.13 1105.83 799.26 1105.11 799.98 1084.24 799.98 1084.24 792.79 1048.25 792.79 1048.25 785.59 997.87 785.59 997.87 778.4 933.1 778.4 933.1 771.2 789.16 771.2 788.44 778.4 738.78 778.4 738.06 785.59 695.6 785.59 694.88 792.79 645.22 792.79 644.5 799.98 602.04 799.98 601.32 807.18 558.85 807.18 558.13 814.37 515.67 814.37 514.95 821.57 472.49 821.57 471.77 828.77 429.31 828.77 428.59 835.96 393.32 835.96 392.6 843.16 350.14 843.16 349.42 850.35 306.96 850.35 306.24 857.55 270.97 857.55 270.25 864.74 227.79 864.74 227.07 871.94 191.8 871.94 191.08 879.13 148.62 879.13 147.9 886.33 112.64 886.33 111.92 893.52 76.65 893.52 75.93 900.72 33.47 900.72 32.75 907.91 11.88 907.91 11.88 274.72 18.87 274.27 19.08 267.52 61.54 267.52 62.26 260.33 104.72 260.33 105.44 253.13 147.9 253.13 148.62 245.94 198.28 245.94 199 238.74 255.86 238.74 256.58 231.55 472.49 231.55"}),b.jsx("polygon",{className:"cls-2",transform:"translate(-20,0)",points:"1108.35 316.15 1108.35 553.56 1101.15 553.56 1101.15 769.38 1086.76 769.38 1086.76 762.19 1050.77 762.19 1050.77 754.99 1021.98 754.99 1021.98 747.8 1000.39 747.8 1000.39 740.6 978.8 740.6 978.8 733.41 964.41 733.41 964.41 726.22 942.82 726.22 942.82 719.02 928.42 719.02 928.42 711.83 914.03 711.83 914.03 704.63 899.63 704.63 899.63 697.44 878.04 697.44 878.04 690.25 863.65 690.25 863.65 683.05 849.25 683.05 849.25 675.86 834.86 675.86 834.86 668.66 813.27 668.66 813.27 661.47 798.88 661.47 798.88 654.27 784.48 654.27 784.48 647.08 762.89 647.08 762.89 639.89 748.5 639.89 748.5 632.69 726.9 632.69 726.9 625.5 712.51 625.5 712.51 618.3 690.92 618.3 690.92 611.11 669.33 611.11 669.33 603.92 640.54 603.92 640.54 596.72 611.75 596.72 611.75 589.53 582.96 589.53 582.96 582.33 554.17 582.33 554.17 575.14 510.99 575.14 510.99 567.95 446.22 567.95 446.22 560.75 352.66 560.75 352.66 567.95 323.87 567.95 323.87 575.14 309.47 575.14 309.47 582.33 295.08 582.33 295.08 589.53 280.69 589.53 280.69 596.72 266.29 596.72 266.29 603.92 251.9 603.92 251.9 611.11 244.7 611.11 244.7 618.3 230.31 618.3 230.31 625.5 223.11 625.5 223.11 632.69 208.72 632.69 208.72 639.89 201.52 639.89 201.52 647.08 194.32 647.08 194.32 654.27 179.93 654.27 179.93 661.47 172.73 661.47 172.73 668.66 165.53 668.66 165.53 675.86 158.34 675.86 158.34 683.05 151.14 683.05 151.14 690.25 136.74 690.25 136.74 697.44 129.55 697.44 129.55 704.63 122.35 704.63 122.35 711.83 115.15 711.83 115.15 719.02 107.96 719.02 107.96 726.22 100.76 726.22 100.76 733.41 93.56 733.41 93.56 740.6 86.36 740.6 86.36 747.8 79.17 747.8 79.17 754.99 71.97 754.99 71.97 762.19 64.77 762.19 64.77 769.38 57.58 769.38 57.58 776.57 50.38 776.57 50.38 783.77 43.18 783.77 43.18 798.16 35.99 798.16 35.99 805.35 28.79 805.35 28.79 812.54 21.59 812.54 21.59 819.74 14.39 819.74 14.39 826.93 0 826.93 0 819.74 7.2 819.74 7.2 366.51 35.99 366.51 35.99 373.71 50.38 373.71 50.38 380.9 71.97 380.9 71.97 388.09 93.56 388.09 93.56 395.29 115.15 395.29 115.15 402.48 136.74 402.48 136.74 409.68 158.34 409.68 158.34 416.87 179.93 416.87 179.93 424.06 208.72 424.06 208.72 431.26 237.5 431.26 237.5 438.45 266.29 438.45 266.29 445.65 302.28 445.65 302.28 452.84 352.66 452.84 352.66 460.03 532.58 460.03 532.58 452.84 590.16 452.84 590.16 445.65 633.34 445.65 633.34 438.45 662.13 438.45 662.13 431.26 690.92 431.26 690.92 424.06 719.71 424.06 719.71 416.87 741.3 416.87 741.3 409.68 762.89 409.68 762.89 402.48 784.48 402.48 784.48 395.29 806.07 395.29 806.07 388.09 827.66 388.09 827.66 380.9 842.06 380.9 842.06 373.71 863.65 373.71 863.65 366.51 885.24 366.51 885.24 359.32 899.63 359.32 899.63 352.12 921.23 352.12 921.23 344.93 942.82 344.93 942.82 337.74 971.61 337.74 971.61 330.54 1000.39 330.54 1000.39 323.35 1043.58 323.35 1043.58 316.15 1108.35 316.15"})]});/**
 * postprocessing v6.39.0 build Fri Mar 20 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */var Zw=(()=>{const a=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),i=new Ua;return i.setAttribute("position",new bi(a,3)),i.setAttribute("uv",new bi(e,2)),i})(),Ii=class cp{static get fullscreenGeometry(){return Zw}constructor(e="Pass",i=new vu,s=new mx){this.name=e,this.renderer=null,this.scene=i,this.camera=s,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const i=this.fullscreenMaterial;i!==null&&(i.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let i=this.screen;i!==null?i.material=e:(i=new hi(cp.fullscreenGeometry,e),i.frustumCulled=!1,this.scene===null&&(this.scene=new vu),this.scene.add(i),this.screen=i)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,i=vl){}render(e,i,s,l,c){throw new Error("Render method not implemented!")}setSize(e,i){}initialize(e,i,s){}dispose(){for(const e of Object.keys(this)){const i=this[e];(i instanceof In||i instanceof $s||i instanceof Bn||i instanceof cp)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},Kw=class extends Ii{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(a,e,i,s,l){const c=a.state.buffers.stencil;c.setLocked(!1),c.setTest(!1)}},Qw=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,Ax="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",wx=class extends kn{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new Nt(null),depthBuffer:new Nt(null),channelWeights:new Nt(null),opacity:new Nt(1)},blending:ti,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Qw,vertexShader:Ax}),this.depthFunc=du}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(a){const e=a!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=a}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(a){const e=a!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=a}set depthPacking(a){this.defines.DEPTH_PACKING=a.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(a){this.colorSpaceConversion!==a&&(a?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(a){a!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=a):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(a){this.uniforms.inputBuffer.value=a}getOpacity(a){return this.uniforms.opacity.value}setOpacity(a){this.uniforms.opacity.value=a}},Jw=class extends Ii{constructor(a,e=!0){super("CopyPass"),this.fullscreenMaterial=new wx,this.needsSwap=!1,this.renderTarget=a,a===void 0&&(this.renderTarget=new In(1,1,{minFilter:ei,magFilter:ei,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(a){this.autoResize=a}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(a){this.autoResize=a}render(a,e,i,s,l){this.fullscreenMaterial.inputBuffer=e.texture,a.setRenderTarget(this.renderToScreen?null:this.renderTarget),a.render(this.scene,this.camera)}setSize(a,e){this.autoResize&&this.renderTarget.setSize(a,e)}initialize(a,e,i){i!==void 0&&(this.renderTarget.texture.type=i,i!==zn?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":a!==null&&a.outputColorSpace===Bt&&(this.renderTarget.texture.colorSpace=Bt))}},M_=new zt,Rx=class extends Ii{constructor(a=!0,e=!0,i=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=a,this.depth=e,this.stencil=i,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(a,e,i){this.color=a,this.depth=e,this.stencil=i}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(a){this.overrideClearColor=a}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(a){this.overrideClearAlpha=a}render(a,e,i,s,l){const c=this.overrideClearColor,f=this.overrideClearAlpha,d=a.getClearAlpha(),p=c!==null,m=f>=0;p?(a.getClearColor(M_),a.setClearColor(c,m?f:d)):m&&a.setClearAlpha(f),a.setRenderTarget(this.renderToScreen?null:e),a.clear(this.color,this.depth,this.stencil),p?a.setClearColor(M_,d):m&&a.setClearAlpha(d)}},$w=class extends Ii{constructor(a,e){super("MaskPass",a,e),this.needsSwap=!1,this.clearPass=new Rx(!1,!1,!0),this.inverse=!1}set mainScene(a){this.scene=a}set mainCamera(a){this.camera=a}get inverted(){return this.inverse}set inverted(a){this.inverse=a}get clear(){return this.clearPass.enabled}set clear(a){this.clearPass.enabled=a}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(a){this.inverted=a}render(a,e,i,s,l){const c=a.getContext(),f=a.state.buffers,d=this.scene,p=this.camera,m=this.clearPass,v=this.inverted?0:1,g=1-v;f.color.setMask(!1),f.depth.setMask(!1),f.color.setLocked(!0),f.depth.setLocked(!0),f.stencil.setTest(!0),f.stencil.setOp(c.REPLACE,c.REPLACE,c.REPLACE),f.stencil.setFunc(c.ALWAYS,v,4294967295),f.stencil.setClear(g),f.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?m.render(a,null):(m.render(a,e),m.render(a,i))),this.renderToScreen?(a.setRenderTarget(null),a.render(d,p)):(a.setRenderTarget(e),a.render(d,p),a.setRenderTarget(i),a.render(d,p)),f.color.setLocked(!1),f.depth.setLocked(!1),f.stencil.setLocked(!1),f.stencil.setFunc(c.EQUAL,1,4294967295),f.stencil.setOp(c.KEEP,c.KEEP,c.KEEP),f.stencil.setLocked(!0)}},_d=1/1e3,eR=1e3,tR=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(a){typeof document<"u"&&document.hidden!==void 0&&(a?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=a)}get delta(){return this._delta*_d}get fixedDelta(){return this._fixedDelta*_d}set fixedDelta(a){this._fixedDelta=a*eR}get elapsed(){return this._elapsed*_d}update(a){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(a!==void 0?a:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(a){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},nR=class{constructor(a=null,{depthBuffer:e=!0,stencilBuffer:i=!1,multisampling:s=0,frameBufferType:l}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,i,l,s),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new Jw,this.depthTexture=null,this.depthRenderTarget=null,this.passes=[],this.timer=new tR,this.autoRenderToScreen=!0,this.setRenderer(a)}get multisampling(){return this.inputBuffer.samples}set multisampling(a){const e=this.inputBuffer,i=this.multisampling;i>0&&a>0?(this.inputBuffer.samples=a,this.outputBuffer.samples=a,this.inputBuffer.dispose(),this.outputBuffer.dispose()):i!==a&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,a),this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(a){if(this.renderer=a,a!==null){const e=a.getSize(new ut),i=a.getContext().getContextAttributes().alpha,s=this.inputBuffer.texture.type;s===zn&&a.outputColorSpace===Bt&&(this.inputBuffer.texture.colorSpace=Bt,this.outputBuffer.texture.colorSpace=Bt,this.inputBuffer.dispose(),this.outputBuffer.dispose()),a.autoClear=!1,this.setSize(e.width,e.height);for(const l of this.passes)l.initialize(a,i,s)}}replaceRenderer(a,e=!0){const i=this.renderer,s=i.domElement.parentNode;return this.setRenderer(a),e&&s!==null&&(s.removeChild(i.domElement),s.appendChild(a.domElement)),i}createDepthTexture(){const a=this.inputBuffer,e=new wp;this.depthTexture=e,a.stencilBuffer?(e.format=Zs,e.type=Ys):e.type=Wi;const i=e.clone();return i.name="EffectComposer.StableDepth",this.depthRenderTarget=new In(a.width,a.height,{depthBuffer:!0,stencilBuffer:a.stencilBuffer,depthTexture:i}),i}blitDepthBuffer(a){const e=this.renderer,i=this.depthRenderTarget,s=e.properties,l=e.getContext();e.setRenderTarget(i);const c=s.get(a).__webglFramebuffer,f=s.get(i).__webglFramebuffer,d=a.stencilBuffer?l.DEPTH_BUFFER_BIT|l.STENCIL_BUFFER_BIT:l.DEPTH_BUFFER_BIT;l.bindFramebuffer(l.READ_FRAMEBUFFER,c),l.bindFramebuffer(l.DRAW_FRAMEBUFFER,f),l.blitFramebuffer(0,0,a.width,a.height,0,0,i.width,i.height,d,l.NEAREST),l.bindFramebuffer(l.READ_FRAMEBUFFER,null),l.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),e.setRenderTarget(null)}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.depthRenderTarget.dispose(),this.depthRenderTarget=null,this.inputBuffer.depthTexture=null,this.outputBuffer.depthTexture=null;for(const a of this.passes)a.setDepthTexture(null)}}createBuffer(a,e,i,s){const l=this.renderer,c=l===null?new ut:l.getDrawingBufferSize(new ut),f={minFilter:ei,magFilter:ei,stencilBuffer:e,depthBuffer:a,type:i},d=new In(c.width,c.height,f);return s>0&&(d.samples=s),i===zn&&l!==null&&l.outputColorSpace===Bt&&(d.texture.colorSpace=Bt),d.texture.name="EffectComposer.Buffer",d.texture.generateMipmaps=!1,d}setMainScene(a){for(const e of this.passes)e.mainScene=a}setMainCamera(a){for(const e of this.passes)e.mainCamera=a}addPass(a,e){const i=this.passes,s=this.renderer,l=s.getDrawingBufferSize(new ut),c=s.getContext().getContextAttributes().alpha,f=this.inputBuffer.texture.type;if(a.renderer=s,a.setSize(l.width,l.height),a.initialize(s,c,f),this.autoRenderToScreen&&(i.length>0&&(i[i.length-1].renderToScreen=!1),a.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?i.splice(e,0,a):i.push(a),this.autoRenderToScreen&&(i[i.length-1].renderToScreen=!0),a.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const d=this.createDepthTexture();for(a of i)a.setDepthTexture(d)}else{const d=this.depthRenderTarget.depthTexture;a.setDepthTexture(d)}}removePass(a){const e=this.passes,i=e.indexOf(a);if(i!==-1&&e.splice(i,1).length>0){if(this.depthTexture!==null){const c=(d,p)=>d||p.needsDepthTexture;if(!e.reduce(c,!1)){const d=this.depthRenderTarget.depthTexture;a.getDepthTexture()===d&&a.setDepthTexture(null),this.deleteDepthTexture()}}this.autoRenderToScreen&&i===e.length&&(a.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const a=this.passes;this.deleteDepthTexture(),a.length>0&&(this.autoRenderToScreen&&(a[a.length-1].renderToScreen=!1),this.passes=[])}render(a){const e=this.renderer,i=this.copyPass;let s=this.inputBuffer,l=this.outputBuffer,c,f=!1;a===void 0&&(this.timer.update(),a=this.timer.getDelta());for(const d of this.passes)if(d.enabled){if(s.depthTexture=this.depthTexture,l.depthTexture=null,d.render(e,s,l,a,f),d.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(s),d.needsSwap){if(f){i.renderToScreen=d.renderToScreen;const p=e.getContext(),m=e.state.buffers.stencil;m.setFunc(p.NOTEQUAL,1,4294967295),i.render(e,s,l,a,f),m.setFunc(p.EQUAL,1,4294967295)}c=s,s=l,l=c}d instanceof $w?f=!0:d instanceof Kw&&(f=!1)}}setSize(a,e,i){const s=this.renderer,l=s.getSize(new ut);(a===void 0||e===void 0)&&(a=l.width,e=l.height),(l.width!==a||l.height!==e)&&s.setSize(a,e,i);const c=s.getDrawingBufferSize(new ut);this.inputBuffer.setSize(c.width,c.height),this.outputBuffer.setSize(c.width,c.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(c.width,c.height);for(const f of this.passes)f.setSize(c.width,c.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const a of this.passes)a.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),Ii.fullscreenGeometry.dispose()}},Xr={NONE:0,DEPTH:1,CONVOLUTION:2},Dt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},iR=class{constructor(){this.shaderParts=new Map([[Dt.FRAGMENT_HEAD,null],[Dt.FRAGMENT_MAIN_UV,null],[Dt.FRAGMENT_MAIN_IMAGE,null],[Dt.VERTEX_HEAD,null],[Dt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Xr.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=fr}},xd=!1,T_=class{constructor(a=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(a),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let i;if(e.material.flatShading)switch(e.material.side){case fi:i=this.materialsFlatShadedDoubleSide;break;case Sn:i=this.materialsFlatShadedBackSide;break;default:i=this.materialsFlatShaded;break}else switch(e.material.side){case fi:i=this.materialsDoubleSide;break;case Sn:i=this.materialsBackSide;break;default:i=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=i[2]:e.isInstancedMesh?e.material=i[1]:e.material=i[0],++this.meshCount}}}cloneMaterial(a){if(!(a instanceof kn))return a.clone();const e=a.uniforms,i=new Map;for(const l in e){const c=e[l].value;c.isRenderTargetTexture&&(e[l].value=null,i.set(l,c))}const s=a.clone();for(const l of i)e[l[0]].value=l[1],s.uniforms[l[0]].value=l[1];return s}setMaterial(a){if(this.disposeMaterials(),this.material=a,a!==null){const e=this.materials=[this.cloneMaterial(a),this.cloneMaterial(a),this.cloneMaterial(a)];for(const i of e)i.uniforms=Object.assign({},a.uniforms),i.side=Ra;e[2].skinning=!0,this.materialsBackSide=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},a.uniforms),s.side=Sn,s}),this.materialsDoubleSide=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},a.uniforms),s.side=fi,s}),this.materialsFlatShaded=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},a.uniforms),s.flatShading=!0,s}),this.materialsFlatShadedBackSide=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},a.uniforms),s.flatShading=!0,s.side=Sn,s}),this.materialsFlatShadedDoubleSide=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},a.uniforms),s.flatShading=!0,s.side=fi,s})}}render(a,e,i){const s=a.shadowMap.enabled;if(a.shadowMap.enabled=!1,xd){const l=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),a.render(e,i);for(const c of l)c[0].material=c[1];this.meshCount!==l.size&&l.clear()}else{const l=e.overrideMaterial;e.overrideMaterial=this.material,a.render(e,i),e.overrideMaterial=l}a.shadowMap.enabled=s}disposeMaterials(){if(this.material!==null){const a=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of a)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return xd}static set workaroundEnabled(a){xd=a}},cr=-1,qi=class extends Da{constructor(a,e=cr,i=cr,s=1){super(),this.resizable=a,this.baseSize=new ut(1,1),this.preferredSize=new ut(e,i),this.target=this.preferredSize,this.s=s,this.effectiveSize=new ut,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const a=this.baseSize,e=this.preferredSize,i=this.effectiveSize,s=this.scale;e.width!==cr?i.width=e.width:e.height!==cr?i.width=Math.round(e.height*(a.width/Math.max(a.height,1))):i.width=Math.round(a.width*s),e.height!==cr?i.height=e.height:e.width!==cr?i.height=Math.round(e.width/Math.max(a.width/Math.max(a.height,1),1)):i.height=Math.round(a.height*s)}get width(){return this.effectiveSize.width}set width(a){this.preferredWidth=a}get height(){return this.effectiveSize.height}set height(a){this.preferredHeight=a}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(a){this.s!==a&&(this.s=a,this.preferredSize.setScalar(cr),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(a){this.scale=a}get baseWidth(){return this.baseSize.width}set baseWidth(a){this.baseSize.width!==a&&(this.baseSize.width=a,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(a){this.baseWidth=a}get baseHeight(){return this.baseSize.height}set baseHeight(a){this.baseSize.height!==a&&(this.baseSize.height=a,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(a){this.baseHeight=a}setBaseSize(a,e){(this.baseSize.width!==a||this.baseSize.height!==e)&&(this.baseSize.set(a,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(a){this.preferredSize.width!==a&&(this.preferredSize.width=a,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(a){this.preferredWidth=a}get preferredHeight(){return this.preferredSize.height}set preferredHeight(a){this.preferredSize.height!==a&&(this.preferredSize.height=a,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(a){this.preferredHeight=a}setPreferredSize(a,e){(this.preferredSize.width!==a||this.preferredSize.height!==e)&&(this.preferredSize.set(a,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(a){this.s=a.scale,this.baseSize.set(a.baseWidth,a.baseHeight),this.preferredSize.set(a.preferredWidth,a.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return cr}},xt={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},aR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",rR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",sR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",oR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",lR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",cR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",uR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",fR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",hR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",dR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",pR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",mR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",gR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",vR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",_R="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",xR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",yR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",SR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ER="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",bR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",MR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",TR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",AR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",wR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",RR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",CR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",DR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",UR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",NR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",LR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",OR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",PR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",BR=new Map([[xt.ADD,aR],[xt.ALPHA,rR],[xt.AVERAGE,sR],[xt.COLOR,oR],[xt.COLOR_BURN,lR],[xt.COLOR_DODGE,cR],[xt.DARKEN,uR],[xt.DIFFERENCE,fR],[xt.DIVIDE,hR],[xt.DST,null],[xt.EXCLUSION,dR],[xt.HARD_LIGHT,pR],[xt.HARD_MIX,mR],[xt.HUE,gR],[xt.INVERT,vR],[xt.INVERT_RGB,_R],[xt.LIGHTEN,xR],[xt.LINEAR_BURN,yR],[xt.LINEAR_DODGE,SR],[xt.LINEAR_LIGHT,ER],[xt.LUMINOSITY,bR],[xt.MULTIPLY,MR],[xt.NEGATION,TR],[xt.NORMAL,AR],[xt.OVERLAY,wR],[xt.PIN_LIGHT,RR],[xt.REFLECT,CR],[xt.SATURATION,DR],[xt.SCREEN,UR],[xt.SOFT_LIGHT,NR],[xt.SRC,LR],[xt.SUBTRACT,OR],[xt.VIVID_LIGHT,PR]]),zR=class extends Da{constructor(a,e=1){super(),this._blendFunction=a,this.opacity=new Nt(e)}getOpacity(){return this.opacity.value}setOpacity(a){this.opacity.value=a}get blendFunction(){return this._blendFunction}set blendFunction(a){this._blendFunction=a,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(a){this.blendFunction=a}getShaderCode(){return BR.get(this.blendFunction)}},IR=class extends Da{constructor(a,e,{attributes:i=Xr.NONE,blendFunction:s=xt.NORMAL,defines:l=new Map,uniforms:c=new Map,extensions:f=null,vertexShader:d=null}={}){super(),this.name=a,this.renderer=null,this.attributes=i,this.fragmentShader=e,this.vertexShader=d,this.defines=l,this.uniforms=c,this.extensions=f,this.blendMode=new zR(s),this.blendMode.addEventListener("change",p=>this.setChanged()),this._inputColorSpace=fr,this._outputColorSpace=Xi}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(a){this._inputColorSpace=a,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(a){this._outputColorSpace=a,this.setChanged()}set mainScene(a){}set mainCamera(a){}getName(){return this.name}setRenderer(a){this.renderer=a}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(a){this.attributes=a,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(a){this.fragmentShader=a,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(a){this.vertexShader=a,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(a,e=vl){}update(a,e,i){}setSize(a,e){}initialize(a,e,i){}dispose(){for(const a of Object.keys(this)){const e=this[a];(e instanceof In||e instanceof $s||e instanceof Bn||e instanceof Ii)&&this[a].dispose()}}},Up={MEDIUM:2,LARGE:3},FR=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,HR="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",GR=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],VR=class extends kn{constructor(a=new Jt){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new Nt(null),texelSize:new Nt(new Jt),scale:new Nt(1),kernel:new Nt(0)},blending:ti,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:FR,vertexShader:HR}),this.setTexelSize(a.x,a.y),this.kernelSize=Up.MEDIUM}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setInputBuffer(a){this.inputBuffer=a}get kernelSequence(){return GR[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(a){this.uniforms.scale.value=a}getScale(){return this.uniforms.scale.value}setScale(a){this.uniforms.scale.value=a}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(a){this.uniforms.kernel.value=a}setKernel(a){this.kernel=a}setTexelSize(a,e){this.uniforms.texelSize.value.set(a,e,a*.5,e*.5)}setSize(a,e){const i=1/a,s=1/e;this.uniforms.texelSize.value.set(i,s,i*.5,s*.5)}},kR=class extends Ii{constructor({kernelSize:a=Up.MEDIUM,resolutionScale:e=.5,width:i=qi.AUTO_SIZE,height:s=qi.AUTO_SIZE,resolutionX:l=i,resolutionY:c=s}={}){super("KawaseBlurPass"),this.renderTargetA=new In(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const f=this.resolution=new qi(this,l,c,e);f.addEventListener("change",d=>this.setSize(f.baseWidth,f.baseHeight)),this._blurMaterial=new VR,this._blurMaterial.kernelSize=a,this.copyMaterial=new wx}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(a){this._blurMaterial=a}get dithering(){return this.copyMaterial.dithering}set dithering(a){this.copyMaterial.dithering=a}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(a){this.blurMaterial.kernelSize=a}get width(){return this.resolution.width}set width(a){this.resolution.preferredWidth=a}get height(){return this.resolution.height}set height(a){this.resolution.preferredHeight=a}get scale(){return this.blurMaterial.scale}set scale(a){this.blurMaterial.scale=a}getScale(){return this.blurMaterial.scale}setScale(a){this.blurMaterial.scale=a}getKernelSize(){return this.kernelSize}setKernelSize(a){this.kernelSize=a}getResolutionScale(){return this.resolution.scale}setResolutionScale(a){this.resolution.scale=a}render(a,e,i,s,l){const c=this.scene,f=this.camera,d=this.renderTargetA,p=this.renderTargetB,m=this.blurMaterial,v=m.kernelSequence;let g=e;this.fullscreenMaterial=m;for(let x=0,E=v.length;x<E;++x){const M=(x&1)===0?d:p;m.kernel=v[x],m.inputBuffer=g.texture,a.setRenderTarget(M),a.render(c,f),g=M}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=g.texture,a.setRenderTarget(this.renderToScreen?null:i),a.render(c,f)}setSize(a,e){const i=this.resolution;i.setBaseSize(a,e);const s=i.width,l=i.height;this.renderTargetA.setSize(s,l),this.renderTargetB.setSize(s,l),this.blurMaterial.setSize(a,e)}initialize(a,e,i){i!==void 0&&(this.renderTargetA.texture.type=i,this.renderTargetB.texture.type=i,i!==zn?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):a!==null&&a.outputColorSpace===Bt&&(this.renderTargetA.texture.colorSpace=Bt,this.renderTargetB.texture.colorSpace=Bt))}static get AUTO_SIZE(){return qi.AUTO_SIZE}},jR=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`,XR=class extends kn{constructor(a=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:ml.replace(/\D+/g,"")},uniforms:{inputBuffer:new Nt(null),threshold:new Nt(0),smoothing:new Nt(1),range:new Nt(null)},blending:ti,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:jR,vertexShader:Ax}),this.colorOutput=a,this.luminanceRange=e}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setInputBuffer(a){this.uniforms.inputBuffer.value=a}get threshold(){return this.uniforms.threshold.value}set threshold(a){this.smoothing>0||a>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=a}getThreshold(){return this.threshold}setThreshold(a){this.threshold=a}get smoothing(){return this.uniforms.smoothing.value}set smoothing(a){this.threshold>0||a>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=a}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(a){this.smoothing=a}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(a){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(a){a?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(a){return this.colorOutput}setColorOutputEnabled(a){this.colorOutput=a}get useRange(){return this.luminanceRange!==null}set useRange(a){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(a){a!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=a,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(a){this.luminanceRange=a}},WR=class extends Ii{constructor({renderTarget:a,luminanceRange:e,colorOutput:i,resolutionScale:s=1,width:l=qi.AUTO_SIZE,height:c=qi.AUTO_SIZE,resolutionX:f=l,resolutionY:d=c}={}){super("LuminancePass"),this.fullscreenMaterial=new XR(i,e),this.needsSwap=!1,this.renderTarget=a,this.renderTarget===void 0&&(this.renderTarget=new In(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const p=this.resolution=new qi(this,f,d,s);p.addEventListener("change",m=>this.setSize(p.baseWidth,p.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(a,e,i,s,l){const c=this.fullscreenMaterial;c.inputBuffer=e.texture,a.setRenderTarget(this.renderToScreen?null:this.renderTarget),a.render(this.scene,this.camera)}setSize(a,e){const i=this.resolution;i.setBaseSize(a,e),this.renderTarget.setSize(i.width,i.height)}initialize(a,e,i){i!==void 0&&i!==zn&&(this.renderTarget.texture.type=i,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},qR=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,YR="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",ZR=class extends kn{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new Nt(null),texelSize:new Nt(new ut)},blending:ti,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:qR,vertexShader:YR})}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setSize(a,e){this.uniforms.texelSize.value.set(1/a,1/e)}},KR=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,QR="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",JR=class extends kn{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new Nt(null),supportBuffer:new Nt(null),texelSize:new Nt(new ut),radius:new Nt(.85)},blending:ti,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:KR,vertexShader:QR})}set inputBuffer(a){this.uniforms.inputBuffer.value=a}set supportBuffer(a){this.uniforms.supportBuffer.value=a}get radius(){return this.uniforms.radius.value}set radius(a){this.uniforms.radius.value=a}setSize(a,e){this.uniforms.texelSize.value.set(1/a,1/e)}},$R=class extends Ii{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new In(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new ZR,this.upsamplingMaterial=new JR,this.resolution=new ut}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(a){if(this.levels!==a){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let i=0;i<a;++i){const s=e.clone();s.texture.name="Downsampling.Mipmap"+i,this.downsamplingMipmaps.push(s)}this.upsamplingMipmaps.push(e);for(let i=1,s=a-1;i<s;++i){const l=e.clone();l.texture.name="Upsampling.Mipmap"+i,this.upsamplingMipmaps.push(l)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(a){this.upsamplingMaterial.radius=a}render(a,e,i,s,l){const{scene:c,camera:f}=this,{downsamplingMaterial:d,upsamplingMaterial:p}=this,{downsamplingMipmaps:m,upsamplingMipmaps:v}=this;let g=e;this.fullscreenMaterial=d;for(let x=0,E=m.length;x<E;++x){const M=m[x];d.setSize(g.width,g.height),d.inputBuffer=g.texture,a.setRenderTarget(M),a.render(c,f),g=M}this.fullscreenMaterial=p;for(let x=v.length-1;x>=0;--x){const E=v[x];p.setSize(g.width,g.height),p.inputBuffer=g.texture,p.supportBuffer=m[x].texture,a.setRenderTarget(E),a.render(c,f),g=E}}setSize(a,e){const i=this.resolution;i.set(a,e);let s=i.width,l=i.height;for(let c=0,f=this.downsamplingMipmaps.length;c<f;++c)s=Math.round(s*.5),l=Math.round(l*.5),this.downsamplingMipmaps[c].setSize(s,l),c<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[c].setSize(s,l)}initialize(a,e,i){if(i!==void 0){const s=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const l of s)l.texture.type=i;if(i!==zn)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(a!==null&&a.outputColorSpace===Bt)for(const l of s)l.texture.colorSpace=Bt}}dispose(){super.dispose();for(const a of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))a.dispose()}},e3=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,t3=class extends IR{constructor({blendFunction:a=xt.SCREEN,luminanceThreshold:e=1,luminanceSmoothing:i=.03,mipmapBlur:s=!0,intensity:l=1,radius:c=.85,levels:f=8,kernelSize:d=Up.LARGE,resolutionScale:p=.5,width:m=qi.AUTO_SIZE,height:v=qi.AUTO_SIZE,resolutionX:g=m,resolutionY:x=v}={}){super("BloomEffect",e3,{blendFunction:a,uniforms:new Map([["map",new Nt(null)],["intensity",new Nt(l)]])}),this.renderTarget=new In(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new kR({kernelSize:d}),this.luminancePass=new WR({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=i,this.mipmapBlurPass=new $R,this.mipmapBlurPass.enabled=s,this.mipmapBlurPass.radius=c,this.mipmapBlurPass.levels=f,this.uniforms.get("map").value=s?this.mipmapBlurPass.texture:this.renderTarget.texture;const E=this.resolution=new qi(this,g,x,p);E.addEventListener("change",M=>this.setSize(E.baseWidth,E.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(a){this.resolution.preferredWidth=a}get height(){return this.resolution.height}set height(a){this.resolution.preferredHeight=a}get dithering(){return this.blurPass.dithering}set dithering(a){this.blurPass.dithering=a}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(a){this.blurPass.kernelSize=a}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(a){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(a){this.uniforms.get("intensity").value=a}getIntensity(){return this.intensity}setIntensity(a){this.intensity=a}getResolutionScale(){return this.resolution.scale}setResolutionScale(a){this.resolution.scale=a}update(a,e,i){const s=this.renderTarget,l=this.luminancePass;l.enabled?(l.render(a,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(a,l.renderTarget):this.blurPass.render(a,l.renderTarget,s)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(a,e):this.blurPass.render(a,e,s)}setSize(a,e){const i=this.resolution;i.setBaseSize(a,e),this.renderTarget.setSize(i.width,i.height),this.blurPass.resolution.copy(i),this.luminancePass.setSize(a,e),this.mipmapBlurPass.setSize(a,e)}initialize(a,e,i){this.blurPass.initialize(a,e,i),this.luminancePass.initialize(a,e,i),this.mipmapBlurPass.initialize(a,e,i),i!==void 0&&(this.renderTarget.texture.type=i,a!==null&&a.outputColorSpace===Bt&&(this.renderTarget.texture.colorSpace=Bt))}},n3=class extends Ii{constructor(a,e,i=null){super("RenderPass",a,e),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new Rx,this.overrideMaterialManager=i===null?null:new T_(i),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(a){this.scene=a}set mainCamera(a){this.camera=a}get renderToScreen(){return super.renderToScreen}set renderToScreen(a){super.renderToScreen=a,this.clearPass.renderToScreen=a}get overrideMaterial(){const a=this.overrideMaterialManager;return a!==null?a.material:null}set overrideMaterial(a){const e=this.overrideMaterialManager;a!==null?e!==null?e.setMaterial(a):this.overrideMaterialManager=new T_(a):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(a){this.overrideMaterial=a}get clear(){return this.clearPass.enabled}set clear(a){this.clearPass.enabled=a}getSelection(){return this.selection}setSelection(a){this.selection=a}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(a){this.ignoreBackground=a}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(a){this.skipShadowMapUpdate=a}getClearPass(){return this.clearPass}render(a,e,i,s,l){const c=this.scene,f=this.camera,d=this.selection,p=f.layers.mask,m=c.background,v=a.shadowMap.autoUpdate,g=this.renderToScreen?null:e;d!==null&&f.layers.set(d.getLayer()),this.skipShadowMapUpdate&&(a.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(c.background=null),this.clearPass.enabled&&this.clearPass.render(a,e),a.setRenderTarget(g),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(a,c,f):a.render(c,f),f.layers.mask=p,c.background=m,a.shadowMap.autoUpdate=v}},i3=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,a3="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",r3=class extends kn{constructor(a,e,i,s,l=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:ml.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new Nt(null),depthBuffer:new Nt(null),resolution:new Nt(new ut),texelSize:new Nt(new ut),cameraNear:new Nt(.3),cameraFar:new Nt(1e3),aspect:new Nt(1),time:new Nt(0)},blending:ti,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:l}),a&&this.setShaderParts(a),e&&this.setDefines(e),i&&this.setUniforms(i),this.copyCameraSettings(s)}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setInputBuffer(a){this.uniforms.inputBuffer.value=a}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(a){this.uniforms.depthBuffer.value=a}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(a){this.defines.DEPTH_PACKING=a.toFixed(0),this.needsUpdate=!0}setDepthBuffer(a,e=vl){this.depthBuffer=a,this.depthPacking=e}setShaderData(a){this.setShaderParts(a.shaderParts),this.setDefines(a.defines),this.setUniforms(a.uniforms),this.setExtensions(a.extensions)}setShaderParts(a){return this.fragmentShader=i3.replace(Dt.FRAGMENT_HEAD,a.get(Dt.FRAGMENT_HEAD)||"").replace(Dt.FRAGMENT_MAIN_UV,a.get(Dt.FRAGMENT_MAIN_UV)||"").replace(Dt.FRAGMENT_MAIN_IMAGE,a.get(Dt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=a3.replace(Dt.VERTEX_HEAD,a.get(Dt.VERTEX_HEAD)||"").replace(Dt.VERTEX_MAIN_SUPPORT,a.get(Dt.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(a){for(const e of a.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(a){for(const e of a.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(a){this.extensions={};for(const e of a)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(a){this.encodeOutput!==a&&(a?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(a){return this.encodeOutput}setOutputEncodingEnabled(a){this.encodeOutput=a}get time(){return this.uniforms.time.value}set time(a){this.uniforms.time.value=a}setDeltaTime(a){this.uniforms.time.value+=a}adoptCameraSettings(a){this.copyCameraSettings(a)}copyCameraSettings(a){a&&(this.uniforms.cameraNear.value=a.near,this.uniforms.cameraFar.value=a.far,a instanceof $n?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(a,e){const i=this.uniforms;i.resolution.value.set(a,e),i.texelSize.value.set(1/a,1/e),i.aspect.value=a/e}static get Section(){return Dt}};function A_(a,e,i){for(const s of e){const l="$1"+a+s.charAt(0).toUpperCase()+s.slice(1),c=new RegExp("([^\\.])(\\b"+s+"\\b)","g");for(const f of i.entries())f[1]!==null&&i.set(f[0],f[1].replace(c,l))}}function s3(a,e,i){let s=e.getFragmentShader(),l=e.getVertexShader();const c=s!==void 0&&/mainImage/.test(s),f=s!==void 0&&/mainUv/.test(s);if(i.attributes|=e.getAttributes(),s===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(f&&(i.attributes&Xr.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!c&&!f)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const d=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,p=i.shaderParts;let m=p.get(Dt.FRAGMENT_HEAD)||"",v=p.get(Dt.FRAGMENT_MAIN_UV)||"",g=p.get(Dt.FRAGMENT_MAIN_IMAGE)||"",x=p.get(Dt.VERTEX_HEAD)||"",E=p.get(Dt.VERTEX_MAIN_SUPPORT)||"";const M=new Set,T=new Set;if(f&&(v+=`	${a}MainUv(UV);
`,i.uvTransformation=!0),l!==null&&/mainSupport/.test(l)){const L=/mainSupport *\([\w\s]*?uv\s*?\)/.test(l);E+=`	${a}MainSupport(`,E+=L?`vUv);
`:`);
`;for(const U of l.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const D of U[1].split(/\s*,\s*/))i.varyings.add(D),M.add(D),T.add(D);for(const U of l.matchAll(d))T.add(U[1])}for(const L of s.matchAll(d))T.add(L[1]);for(const L of e.defines.keys())T.add(L.replace(/\([\w\s,]*\)/g,""));for(const L of e.uniforms.keys())T.add(L);T.delete("while"),T.delete("for"),T.delete("if"),e.uniforms.forEach((L,U)=>i.uniforms.set(a+U.charAt(0).toUpperCase()+U.slice(1),L)),e.defines.forEach((L,U)=>i.defines.set(a+U.charAt(0).toUpperCase()+U.slice(1),L));const S=new Map([["fragment",s],["vertex",l]]);A_(a,T,i.defines),A_(a,T,S),s=S.get("fragment"),l=S.get("vertex");const _=e.blendMode;if(i.blendModes.set(_.blendFunction,_),c){e.inputColorSpace!==null&&e.inputColorSpace!==i.colorSpace&&(g+=e.inputColorSpace===Bt?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==Xi?i.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(i.colorSpace=e.inputColorSpace);const L=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;g+=`${a}MainImage(color0, UV, `,(i.attributes&Xr.DEPTH)!==0&&L.test(s)&&(g+="depth, ",i.readDepth=!0),g+=`color1);
	`;const U=a+"BlendOpacity";i.uniforms.set(U,_.opacity),g+=`color0 = blend${_.blendFunction}(color0, color1, ${U});

	`,m+=`uniform float ${U};

`}if(m+=s+`
`,l!==null&&(x+=l+`
`),p.set(Dt.FRAGMENT_HEAD,m),p.set(Dt.FRAGMENT_MAIN_UV,v),p.set(Dt.FRAGMENT_MAIN_IMAGE,g),p.set(Dt.VERTEX_HEAD,x),p.set(Dt.VERTEX_MAIN_SUPPORT,E),e.extensions!==null)for(const L of e.extensions)i.extensions.add(L)}}var o3=class extends Ii{constructor(a,...e){super("EffectPass"),this.fullscreenMaterial=new r3(null,null,null,a),this.listener=i=>this.handleEvent(i),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(a){for(const e of this.effects)e.mainScene=a}set mainCamera(a){this.fullscreenMaterial.copyCameraSettings(a);for(const e of this.effects)e.mainCamera=a}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(a){this.fullscreenMaterial.encodeOutput=a}get dithering(){return this.fullscreenMaterial.dithering}set dithering(a){const e=this.fullscreenMaterial;e.dithering=a,e.needsUpdate=!0}setEffects(a){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=a.sort((e,i)=>i.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const a=new iR;let e=0;for(const f of this.effects)if(f.blendMode.blendFunction===xt.DST)a.attributes|=f.getAttributes()&Xr.DEPTH;else{if((a.attributes&f.getAttributes()&Xr.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${f.name})`);s3("e"+e++,f,a)}let i=a.shaderParts.get(Dt.FRAGMENT_HEAD),s=a.shaderParts.get(Dt.FRAGMENT_MAIN_IMAGE),l=a.shaderParts.get(Dt.FRAGMENT_MAIN_UV);const c=/\bblend\b/g;for(const f of a.blendModes.values())i+=f.getShaderCode().replace(c,`blend${f.blendFunction}`)+`
`;(a.attributes&Xr.DEPTH)!==0?(a.readDepth&&(s=`float depth = readDepth(UV);

	`+s),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,a.colorSpace===Bt&&(s+=`color0 = sRGBToLinear(color0);
	`),a.uvTransformation?(l=`vec2 transformedUv = vUv;
`+l,a.defines.set("UV","transformedUv")):a.defines.set("UV","vUv"),a.shaderParts.set(Dt.FRAGMENT_HEAD,i),a.shaderParts.set(Dt.FRAGMENT_MAIN_IMAGE,s),a.shaderParts.set(Dt.FRAGMENT_MAIN_UV,l);for(const[f,d]of a.shaderParts)d!==null&&a.shaderParts.set(f,d.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(a)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(a,e=vl){this.fullscreenMaterial.depthBuffer=a,this.fullscreenMaterial.depthPacking=e;for(const i of this.effects)i.setDepthTexture(a,e)}render(a,e,i,s,l){for(const c of this.effects)c.update(a,e,s);if(!this.skipRendering||this.renderToScreen){const c=this.fullscreenMaterial;c.inputBuffer=e.texture,c.time+=s*this.timeScale,a.setRenderTarget(this.renderToScreen?null:i),a.render(this.scene,this.camera)}}setSize(a,e){this.fullscreenMaterial.setSize(a,e);for(const i of this.effects)i.setSize(a,e)}initialize(a,e,i){this.renderer=a;for(const s of this.effects)s.initialize(a,e,i);this.updateMaterial(),i!==void 0&&i!==zn&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const a of this.effects)a.removeEventListener("change",this.listener),a.dispose()}handleEvent(a){switch(a.type){case"change":this.recompile();break}}};const l3=()=>{const{width:a,height:e}=Ex(),i=le.useRef(null);return le.useEffect(()=>{const s=new vu,l=new $n(75,a/e,.1,1e3),c=new Sx({alpha:!0,antialias:!0,powerPreference:"high-performance"});c.setClearColor(0,0),c.outputColorSpace=Bt,c.toneMapping=Ta,c.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),c.setSize(a,e),c.domElement.style.position="absolute",c.domElement.style.inset="0",c.domElement.style.zIndex="0",c.domElement.style.pointerEvents="none",c.domElement.style.background="transparent";const f=i.current;f instanceof HTMLElement&&!f.hasChildNodes()&&f.appendChild(c.domElement);const d=new al;for(let E=0;E<50;E++){const M=.03+Math.random()*.07,T=new Rp(M,7,7),S=new Eu({color:"white"}),_=new hi(T,S);_.position.x=(Math.random()-.5)*10,_.position.y=(Math.random()-.5)*10,_.position.z=(Math.random()-.5)*10,d.add(_)}s.add(d),l.position.z=5;const p=new nR(c);p.addPass(new n3(s,l));const m=new t3({intensity:.03,luminanceThreshold:.25,luminanceSmoothing:.35,radius:.5}),v=new o3(l,m);v.renderToScreen=!0,p.addPass(v);let g=0;const x=()=>{g=window.requestAnimationFrame(x),d.rotation.x+=89e-6,d.rotation.y+=99e-6,p.render()};return x(),()=>{window.cancelAnimationFrame(g),d.traverse(E=>{E instanceof hi&&(E.geometry.dispose(),Array.isArray(E.material)?E.material.forEach(M=>M.dispose()):E.material.dispose())}),p.dispose(),c.dispose(),f&&f.removeChild(c.domElement)}},[a,e]),b.jsx("div",{id:"three_background",style:{position:"fixed",top:0,left:0,width:`${a}px`,height:`${e}px`,overflow:"hidden",pointerEvents:"none"},ref:i})},yd=a=>(console.log(a),b.jsx("div",{children:b.jsx(Tx,{width:a.width,categories:a.category_array})})),c3=()=>b.jsx("div",{children:b.jsxs(Sl,{construction:!0,title:"The Book",children:[b.jsx(Dn,{text:"The Book is a project that I started in highschool. This is an expansive collection of great thoughts, ideas, practices, and philosphies."}),b.jsx(Dn,{text:`
                    Sun Tzu quotes, storytelling ideas from PIXAR, biographical information about great artists and thinkers,
                    reading lists from our planet's great innovative minds, and a mixed-bag of other written ideas.
                    `}),b.jsx(Dn,{text:`
                    After UrFriends is fully migrated to AWS, turning this inspirational collection of highly motivational material into a simple mobile app is up next.
                    `})]})}),ur=["https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_ALL_WORKOUTS.png","https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_DATA_BOARD.png","https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_DATA_BOARD_REGRESSION.png","https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_DATA_CHART.png","https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_ORIGIN_SHEET.png","https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_G_SHEET.png","https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_RAW_JSON.png","https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_FILE.jpg"],u3=()=>{const a=bx;return b.jsx(Sl,{construction:!0,title:"The Rip Sheet",children:b.jsxs("div",{className:"space-y-8 text-slate-100",children:[b.jsxs("section",{className:"rip-section rip-section--intro",children:[b.jsx(eu,{children:"RIP Sheet case study"}),b.jsx("div",{className:"relative flex items-center justify-center rounded-2xl border border-dashed border-white/20 bg-slate-800/40 p-6 text-center",children:b.jsxs("div",{children:[b.jsx("p",{className:`text-sm uppercase tracking-[0.3em] ${a}`,children:"Portrait Placeholder"}),b.jsx("p",{className:"mt-3 text-xl font-semibold text-white",children:"Drop a strong bicep portrait here"}),b.jsx("p",{className:"mt-2 text-sm text-slate-300",children:"Suggested: gym setting, clear lighting, confident flex."})]})}),b.jsx(il,{quote:"In 2018, I decided to learn weightlifting."}),b.jsx("div",{className:a,children:b.jsx(il,{quote:"Since then, I’ve been developing tools and systems to become stronger and to consistently learn.",sizePreset:"compact"})}),b.jsx(Dn,{text:"In 2018, I set out to learn weightlifting. Over time, through repeated iteration, I built a system I call the RIP Sheet. Early versions failed to track progress and enforce consistency—but I kept refining, testing, and improving. The name is a double entendre: a memento mori and a call to get ripped. Today is the day you make that change—this very rep."}),b.jsx("div",{className:"rip-figure rip-figure--single",children:b.jsx(or,{variant:"quarter",src:ur[4],alt:"Origin version of the RIP sheet layout",figureLabel:"Figure 1",figureCaption:"Early RIP sheet concept and structure.",withMatte:!0,figcaptionClassName:a})})]}),b.jsxs("section",{className:"rip-section rip-section--analog",children:[b.jsx(eu,{align:"left",children:"Analog beginnings"}),b.jsx(Dn,{text:"The first version of the RIP Sheet was a physical worksheet—a structured attempt to bring discipline into the gym without relying on screens. The layout was clear, but the medium wasn’t. Tracking progress across loose pages quickly became impractical, and paper doesn’t hold up well in a gym environment."}),b.jsx(Dn,{text:"Alongside the sheet, I created a small reference packet for stretching and brought both with me to train."}),b.jsx("div",{className:"rip-figure rip-figure--single",children:b.jsx(or,{variant:"half",src:ur[7],alt:"Original workbook used for tracking workouts in the initial prototyping phase",figureLabel:"Figure 2",figureCaption:"The workbook taken to the gym in the initial prototyping phase.",withMatte:!0,figcaptionClassName:a})}),b.jsx(Dn,{text:"This workbook was the version I brought with me to the gym during early prototyping—an attempt to turn structure into habit. I found keeping track of the physical worksheets and transferring them into a digital format was very inconvenient."})]}),b.jsxs("section",{className:"rip-section rip-section--digital",children:[b.jsx(eu,{align:"left",children:"From paper to data"}),b.jsx(Dn,{text:"Eventually, I moved to Google Sheets, which made tracking progress far more efficient and reliable allowing me to track every rep I've made since 2022. Because I had already been collecting this data, I was able to analyze it later in a Linear Algebra for Data Science course in 2025."}),b.jsx(Dn,{text:"Processing the data was inconsistent at first, and I experimented with both JavaScript and C++. Over time, I simplified the system: each set is stored as JSON, defined by exercise name, weight, reps, and date. This structure makes generating visualizations straightforward, with same-day workouts naturally aligning in the data."}),b.jsxs("div",{className:"rip-cta",children:[b.jsx("p",{className:`rip-cta__label ${a}`,children:"Explore the notebooks + regression overlays"}),b.jsx(Mx,{href:"https://colab.research.google.com/drive/1ENZlQbCl78q4ilT7lTgQ9YkcPgvTLV9d?usp=sharing",label:"View the Python analysis in Google Colab"})]}),b.jsxs("div",{className:"rip-gallery rip-gallery--grid",children:[b.jsx(or,{variant:"full",src:ur[6],alt:"Origin version of the RIP sheet layout",figureLabel:"Figure 3",figureCaption:"The data is stored in a way that makes it easy to analyze.",withMatte:!0,imgClassName:"mx-auto w-full max-w-sm aspect-square object-cover",figcaptionClassName:a}),b.jsx(or,{variant:"full",src:ur[5],alt:"Origin version of the RIP sheet layout",figureLabel:"Figure 4",figureCaption:"Although it looks basic, this is the system I've found supports consistency.",withMatte:!0,imgClassName:"mx-auto w-full max-w-sm aspect-square object-cover",figcaptionClassName:a}),b.jsx(or,{variant:"full",src:ur[0],alt:"Collection of all workouts tracked in the RIP sheet",figureLabel:"Figure 5",figureCaption:"Consolidated workout history view.",withMatte:!0,imgClassName:"mx-auto w-full max-w-sm aspect-square object-cover",figcaptionClassName:a})]})]}),b.jsxs("section",{className:"rip-section rip-section--insights",children:[b.jsx("div",{className:a,children:b.jsx(il,{quote:"Today is the day you make that life change—this very rep.",sizePreset:"balanced"})}),b.jsx("div",{className:"rip-figure rip-figure--wide",children:b.jsx(or,{variant:"centered",src:ur[1],alt:"RIP sheet data board showing tracked exercise metrics",figureLabel:"Figure 6",figureCaption:"Data board used to monitor progress over time.",withMatte:!0,figcaptionClassName:a})}),b.jsx(Dn,{text:"Visualizations expose my habits instantly—what’s strong, what’s falling off, and where volume spikes. When I fit least-squares regressions to each lift, I could literally see plateaus forming."}),b.jsx("div",{className:a,children:b.jsx(il,{quote:"Fitting a least-squares regression to the data shows interesting trends:",sizePreset:"compact"})}),b.jsxs("div",{className:"rip-gallery rip-gallery--dual",children:[b.jsx(or,{variant:"centered",src:ur[2],alt:"Regression analysis chart generated from RIP sheet data",figureLabel:"Figure 7",figureCaption:"Least-squares regression snapshot for exercise trends.",withMatte:!0,figcaptionClassName:a}),b.jsx(or,{variant:"centered",src:ur[3],alt:"Progress chart visualizing workout performance changes",figureLabel:"Figure 8",figureCaption:"Bar chart showing exercise type counts for the data captured.",withMatte:!0,figcaptionClassName:a})]}),b.jsx(Dn,{text:"Recently, I took a linear algebra for data analysis course, and used Python to create least square regression analyses of each one of my exercises over the past 2.5 years. Seeing a visualization was highly motivational and validating for my stronger routines, but it also showed me clearly where I've been slacking recently."})]}),b.jsxs("section",{className:"rip-section rip-section--future",children:[b.jsx(eu,{align:"left",children:"What’s next"}),b.jsx(Dn,{text:"My hope is to create a fitness app that allows people to develop realistic and healthy physical fitness routines and give useful visualizations that will let users know for sure how to generate real physical progress. The gym habit can be challenging to adopt, and I want to help people realize that learning that habit is counter-intuitive to first impressions."}),b.jsx("div",{className:a,children:b.jsx(il,{quote:"I believe I can help people to adopt a habit that they love.",sizePreset:"balanced"})})]})]})})},f3=()=>b.jsx("div",{children:b.jsxs(Sl,{construction:!1,title:"UrFriends",children:[b.jsx(Dn,{text:"UrFriends is designed to help you build real, lasting relationships using your device. "}),b.jsx(Nw,{url:"https://public--urfriends-beta.us-central1.hosted.app/",linkText:"The Latest UrFriends Deployment"}),b.jsx(Dn,{text:`
                Inspired by the documented habits of highly influential thinkers like Benjamin Franklin and Charles Darwin, and by the routines of my endlessly social Grandmother Faye, UrFriends is about staying connected with intention—not just collecting contacts.
                Organize your relationships into tiers and set unique reminder timeframes for each. A tier could be set for a daily reach-out, weekly, or even yearly. Each contact has a conversations journal, so you can take notes after reaching out and remember the things that matter.
                There is a functional beta for a single user on my Github. The beta started on Vercel with React.js, Node, and MongoDB. Then it migrated to AWS, and Amplify. Finally, I've settled on Firebase, because of the ease of accomplishing everything that I want to.
                `}),b.jsx(Dn,{text:`
                I’m currently migrating functionality to AWS to support real users. Google and Apple integration is on the way.
                UrFriends is for people who believe technology should bring us together—not make us busier.`})]})}),h3=()=>b.jsx("div",{children:b.jsxs(Sl,{construction:!0,title:"Widow Bags",children:[b.jsx(Dn,{text:"Widow Bags is an conceptual, apparel company currently under development. More details coming soon."}),b.jsx(Dn,{text:"My initial design was formulated at the School of the Art Institute of Chicago."})]})}),d3="https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting/",p3=["KP.webp","G.webp","alien_invasion.webp","alley.webp","bad_painting.webp","bada_bing.webp","behind.webp","blinker.webp","blue_girl_1.webp","blue_girl_2.webp","bouquet.webp","bright_lights_big_city.webp","business_card.webp","california_onlookers.webp","connection.webp","dips.webp","eyes.webp","following.webp","funny_mustache_guy.webp","hilltop_city.webp","hollywood_hills.webp","house.webp","in_the_city.webp","jacks.webp","jacks_2.webp","james.webp","locked_away.webp","network.webp","night.webp","one_way.webp","online.webp","outlooker.webp","perspective.webp","pictures_of_then.webp","portrait_copy.webp","rainy_sun.webp","researchers.webp","street_corner.webp","sunday.webp","time.webp","tornado.webp","transfer.webp","victorian.webp","what_do_you.webp","woah_dude.webp","worm.webp","x.webp"],m3=a=>a&&a.endsWith(".webp")?a.slice(0,-5):"",g3=(a,e)=>a.map(i=>({src:`${e}${i}`,alt:i,title:i})),w_=a=>{const e=()=>a.current>=a.gallery_images.length-5?a.gallery_images.slice(a.gallery_images.length-5,a.gallery_images.length):a.gallery_images.slice(a.current+1,a.current+6);return b.jsx("div",{className:"gallery_subImages",children:e().map(i=>b.jsxs("button",{className:"mini_gallery_image",onClick:()=>a.setCurrent(a.images_array.indexOf(i.title?i.title:"")),children:[b.jsx("style",{children:`
              .mini_gallery_image:hover {
                outline: 2px solid rgba(255, 255, 255, 1);
                transition: outline .2s;
                opacity: 100%;

              .mini_gallery_image {
                opacity: 80%;
              }
              }
            `}),b.jsx("img",{src:i.src,alt:i.alt,title:i.title,className:"inline max-w-25 max-h-25 m-1 rounded-sm",loading:"lazy"},i.src)]}))})},Cx="rgba(255,255,255,0.2)",v3={border:`3px solid ${Cx}`,cursor:"not-allowed"},tu=a=>{const e=a.direction==="left"&&a.current===0||a.direction==="right"&&a.current===a.total-1;console.log(a.current,a.direction);const i=()=>{switch(a.graphic){case"caret-right":return b.jsx("div",{className:"h-10 w-10",children:b.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:b.jsx("path",{d:"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"})})});case"caret-left":return b.jsx("div",{className:"h-10 w-10",children:b.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:b.jsx("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"})})});case"arrow-right":return b.jsx("div",{className:" h-8 w-8",children:b.jsx("svg",{className:"",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:b.jsx("path",{d:"M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"})})});case"arrow-left":return b.jsx("div",{className:" h-8 w-8",children:b.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:b.jsx("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"})})})}};return b.jsxs("button",{style:{...(a.graphic=="arrow-left"||a.graphic=="arrow-right")&&e?v3:{}},className:`inline-block ${a.graphic=="caret-left"||a.graphic=="caret-right"?"LR_bttn":"border-3 border-white LR_bttn"} cursor-pointer p-1 h-20 w-20 bg-none rounded-[50%]`,onClick:a.onclick_func,disabled:e,"aria-label":a.direction==="right"?"Next painting":"Previous painting",type:"button",children:[b.jsx("style",{children:`
        .LR_bttn:hover {
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, .5)) drop-shadow(0 0 10px rgba(255, 255, 255, .5));
        }
        .LR_bttn:active {
          filter: none;
        }
        .LR_bttn {
          transition: filter .2s;
        }
      `}),b.jsx("div",{style:{fill:e?Cx:"white"},className:"flex justify-center items-center",children:i()})]})},_3=a=>{const[e,i]=le.useState(0),s=a.images&&a.images.length>0?a.images:p3,l=a.base_url?a.base_url:d3,c=g3(s,l),f=c.length-1,d=a.detail_medium?a.detail_medium:"acrylic on canvas",p=a.detail_years?a.detail_years:"2021-2025",m=c[e],v=m3(m.title);console.log(e,"is current");const g=()=>i(E=>Math.max(E-1,0)),x=()=>i(E=>Math.min(E+1,f));return a.width>Uw?b.jsxs("div",{id:"gallery-container",className:"flex items-center justify-center h-screen",children:[b.jsx("div",{className:"gallery_leftButton ml-auto",children:b.jsx(tu,{graphic:"arrow-left",direction:"left",current:e,total:c.length,onclick_func:g})}),b.jsx("div",{className:"gallery_mainImage",children:b.jsx("img",{src:m.src,alt:m.alt,title:m.title,loading:"lazy"})}),b.jsx("div",{className:"gallery_rightButton",children:b.jsx(tu,{graphic:"arrow-right",direction:"right",current:e,total:c.length,onclick_func:x})}),b.jsx(w_,{images_array:s,gallery_images:c,current:e,setCurrent:i}),b.jsxs("div",{className:"gallery_textDetails text-white text-left p-10",children:[b.jsx("h3",{children:v}),b.jsx("p",{children:d}),b.jsx("p",{children:p})]})]}):b.jsxs("div",{children:[b.jsxs("div",{id:"",className:"flex flex-row justify-center",children:[b.jsx("style",{children:`
            .gallery_leftRightButton_cols {
              display: flex;
              align-items: center;
            }
            `}),b.jsx("button",{onClick:()=>g(),className:"gallery_leftRightButton_cols",children:b.jsx(tu,{graphic:"caret-left",direction:"left",current:e,total:c.length})}),b.jsx("img",{style:{width:"70%"},src:m.src,alt:m.alt,title:m.title,loading:"lazy"}),b.jsx("button",{onClick:()=>x(),className:"gallery_leftRightButton_cols",children:b.jsx(tu,{graphic:"caret-right",direction:"right",current:e,total:c.length})})]}),b.jsxs("div",{className:"text-left p-10",children:[b.jsx("h3",{children:v}),b.jsx("p",{children:d}),b.jsx("p",{children:p})]}),b.jsx(w_,{images_array:s,gallery_images:c,setCurrent:i,current:e})]})},x3=["pictures_of_then.webp","alley.webp","bright_lights_big_city.webp","behind.webp","G.webp","business_card.webp","blue_girl_1.webp","connection.webp","dips.webp"],y3=["alley.webp","eyes.webp","blue_girl_2.webp","KP.webp","house.webp","in_the_city.webp","jacks.webp","locked_away.webp","one_way.webp","time.webp"],S3=["bada_bing.webp","california_onlookers.webp","following.webp","hollywood_hills.webp","rainy_sun.webp","sunday.webp","tornado.webp","victorian.webp","woah_dude.webp","street_corner.webp"],E3=["bad_painting.webp","bouquet.webp","blinker.webp","james.webp","night.webp","outlooker.webp","transfer.webp","what_do_you.webp"],b3=["hilltop_city.webp","funny_mustache_guy.webp","jacks_2.webp","online.webp","perspective.webp","portrait_copy.webp","researchers.webp","x.webp"],M3=["worm.webp","network.webp"],T3=[{slug:"2025p",title:"2025",year_label:"2025",images:M3},{slug:"2024p",title:"2024",year_label:"2024",images:b3},{slug:"2023p",title:"2023",year_label:"2023",images:E3},{slug:"2022p",title:"2022",year_label:"2022",images:S3},{slug:"2021p",title:"2021",year_label:"2021",images:y3},{slug:"2020p",title:"2020",year_label:"2020",images:x3}],A3=T3.reduce((a,e)=>(a[e.slug]=e,a),{}),w3=a=>{const{periodSlug:e}=N1(),i=e?A3[e]:void 0;return i?b.jsxs("div",{className:"text-white px-6 py-20",style:{fontFamily:Ki},children:[b.jsxs("h1",{style:{fontFamily:Ji},className:"text-4xl md:text-5xl font-bold mb-6",children:[i.title," Paintings"]}),b.jsx(_3,{width:a.width,images:i.images,detail_medium:"acrylic on canvas",detail_years:i.year_label})]}):b.jsxs("div",{className:"text-white px-6 py-20",style:{fontFamily:Ki},children:[b.jsx("h1",{style:{fontFamily:Ji},className:"text-3xl font-semibold",children:"Painting period not found"}),b.jsx("p",{className:"mt-4 opacity-80",children:"Check back soon for more updates."})]})},Dx=[{category:"Painting",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting_dir/painting-web-icons/painting-web-icon.jpg",url:"painting"},{category:"Drawing",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting_dir/drawing-web-icons/drawing-web-icon.jpg",url:"drawing"}],R3=[{category:"Web Development",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/web-design-web-icons/DM.webp",url:"../projects/web_dev"},{category:"UrFriends - SaaS",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/blog-images/UR_Friends.webp",url:"urfriends"},{category:"Widow Bags",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/product-design-icons/widow-icon.jpg",url:"widowbags"}],Ux=[{category:"Design",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/drawing-web-icons/design-drawing-icon.webp",url:"drawing_design"},{category:"Engineering",img:"https://jayhcrawford-webdocs.s3.us-east-2.amazonaws.com/webdocs-icons/tripod-drawing-icon.webp",url:"drawing_engineering"},{category:"Fine Art",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/drawing-web-icons/fine-art-drawing-icon.webp",url:"drawing_fa"},{category:"Doodling",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting_dir/drawing-web-icons/drawing-web-icon.jpg",url:"drawing_doodle"}],Nx=[{category:"2025",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting_dir/painting-web-icons/2024-painting-icon.jpg",url:"2025p"},{category:"2024",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting_dir/painting-web-icons/2023-painting-icon.jpg",url:"2024p"},{category:"2023",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting_dir/painting-web-icons/2022-painting-icon.jpg",url:"2023p"},{category:"2022",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting_dir/painting-web-icons/2021-painting-icon.jpg",url:"2022p"},{category:"2021",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting_dir/painting-web-icons/2020-painting-icon.jpg",url:"2021p"},{category:"2020 and Prior",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting_dir/painting-web-icons/2019-painting-icon.jpg",url:"2020p"}],C3=a=>{const[e,i]=le.useState(!1);return b.jsxs(b.Fragment,{children:[b.jsx("style",{children:`
      hr {
      color: white;
      border-width: 2px;
      opacity: ${fu}%

      }`}),b.jsx(qr,{onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),to:a.url?a.url:"",children:b.jsx("div",{className:`${a.url==""?"cursor-not-allowed":"cursor-pointer"} text-white m-6 justify-center ${a.width<750?"flex flex-col":"flex"}`,children:b.jsxs("div",{className:` ${a.width<750?"flex flex-col items-center":"flex w-[70%]"}`,children:[b.jsx("div",{className:"p-1 m-1",children:b.jsx("div",{className:"relative",children:b.jsxs("div",{className:" h-full w-full relative z-100",children:[b.jsx("div",{className:`${a.url==""&&e?"absolute":"hidden"} w-full text-white font-black absolute bg-red-600 top-[120px] p-4 text-center`,children:"Under Construction"}),b.jsx(D3,{img:a.img,under_construction:a.under_construction})]})})}),b.jsxs("div",{className:`ml-10 ${a.width<750?"mt-8 w-full pr-20":"flex flex-col justify-center mb-10"}`,children:[b.jsx("h4",{style:{fontFamily:Ji},className:"text-2xl",children:a.title}),b.jsx("p",{style:{fontFamily:Ki},children:a.about_txt})]})]})})}),b.jsx("hr",{})]})},D3=a=>b.jsxs(b.Fragment,{children:[a.under_construction&&a.under_construction===!0&&b.jsx("div",{className:"h-30 w-30 absolute",children:b.jsx("img",{src:"/under_construction.svg"})}),b.jsx("div",{style:{boxShadow:"5px 5px 5px rgba(0, 0, 0, 1)"},className:"w-80 h-60",children:b.jsx("img",{className:"rounded-lg w-80 h-60",style:{objectFit:"cover"},src:a.img})})]}),Tu=a=>b.jsxs("div",{style:{fontFamily:Ki},children:[b.jsx("hr",{}),a.blog_array.map((e,i)=>b.jsx(C3,{url:e.url?e.url:"",title:e.title,about_txt:e.about_txt,img:e.img,width:a.width},i))]}),U3=a=>b.jsx(Tu,{width:a.width,blog_array:a.blog_array}),N3=[{title:"Red X CLI Utility",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/programming-icons/redX-CLI-icon.webp",about_txt:"Stub entry for the Red X CLI utility.",url:"https://github.com/jayhcrawford/3-month-habit-tracker"},{title:"RIP Sheet Data Analysis",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/blog-images/RIP.webp",about_txt:"Stub entry for the RIP Sheet data analysis project.",url:"/projects/ripsheet"}],Lx=[{category:"Web Development",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/web-design-web-icons/DM.webp",url:"web_dev"},{category:"Programming",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/programming-icons/Programming.webp",url:"programming"},{category:"3D Projects",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/3d-project-icons/orthographic-icon.jpg",url:"3d"},{category:"UrFriends - SaaS",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/blog-images/UR_Friends.webp",url:"urfriends"},{category:"The Book",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/blog-images/TheBook.webp",url:"thebook"},{category:"The RIP Sheet",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/blog-images/RIP.webp",url:"ripsheet"},{category:"Widow Bags",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/product-design-icons/widow-icon.jpg",url:"widowbags"}],L3=a=>b.jsx(Tu,{width:a.width,blog_array:a.blog_array}),R_=[{title:"This Website!",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/product-design-icons/jayhcrawford-domain.webp",about_txt:"This resposnive website uses Threejs, CSS, SVG, React, GitHub. I made the components.",url:"https://medium.com/@jayhcrawford/taking-my-github-from-html-based-pages-to-a-vite-based-react-app-a202d7be2ad0",under_construction:!0},{title:"d3 Data Visuatilzations",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/programming-icons/d3_tempGraph.webp",about_txt:"CSS by me; Originally written with while I did freeCodeCamp in 2023.",url:"d3-visualizations",under_construction:!1},{title:"Calculator",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/web-design-web-icons/Calc.webp",about_txt:"CSS by me; Originally written with React class components while I did freeCodeCamp in 2023; rewritten into React 19 with an LLM.",url:"https://codepen.io/jayhcrawford/pen/rNRQJZa?editors=1010",under_construction:!1},{title:"Chem 101 App",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/web-design-web-icons/Chem101.webp",about_txt:"Kind of like a study guide wiki. Essentially a markdown viewer/editor that allowed my classmates to create and propose revisions. Revisions were databased and reviewed using a seperately hosted API. Centralizing all the course content in an easy to access place helped me to get an A in this class.",url:"https://chem101-sg.vercel.app/index.html",under_construction:!1},{title:"UrFriends",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/blog-images/UR_Friends.webp",about_txt:"Will be a SaaS toolset for relationship building; inspired by the routines of world leaders. Started on MongoDB and Vercel; migrated to Amplify and AWS; settled on Firebase and Firestore. The hosted beta has auth and data privacy securely enforced and a Stripe webhook.",url:"/projects/urfriends",under_construction:!1},{title:"Drum Machine",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/web-design-web-icons/DM.webp",about_txt:"CSS by me; Originally written with React class components while I did freeCodeCamp in 2023; rewritten into React 19 with an LLM.",url:"https://codepen.io/jayhcrawford/pen/poYJzyb",under_construction:!1}],O3=a=>b.jsx(Tu,{width:a.width,blog_array:a.blog_array}),P3=[{title:"My Place",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/3d-project-icons/orthographic-icon.jpg",about_txt:"Autodesk Maya and Arnold project."},{title:"Door Project",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/3d-project-icons/3d-door-project-icon.jpg",about_txt:"Based on a drawing, built in Blender to emulate the drawing."},{title:"3D Me :-)",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/3d-project-icons/3d-jay-icon.jpg",about_txt:"Fully rigged, simple 3D character modeled after me. This helped me to better understand topology, weight-painting, and rigging."},{title:"Fusion360 Tripod",img:"https://jayhcrawford-webdocs.s3.us-east-2.amazonaws.com/webdocs-icons/tripod-drawing-icon.webp",about_txt:"In my first engineering drawing course, we used Fusion360. I made this there as my final."},{title:"Solidworks Japanese Lantern",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/product-design-icons/j-lantern-icon.webp",about_txt:"In my second engineering drawing course, my groupmates and I collaborated together to make a Japanese-inspired lamp."}],B3=a=>b.jsx(Tu,{width:a.width,blog_array:a.blog_array}),z3=[{title:"Projects",url:"projects"},{title:"Art",url:"art"},{title:"About",url:"about"},{title:"Contact",url:"contact"},{title:"3D Projects",url:"3d"},...Lx.map(a=>({title:a.category,url:a.url})),...Dx.map(a=>({title:a.category,url:a.url})),...Nx.map(a=>({title:a.category,url:a.url})),...Ux.map(a=>({title:a.category,url:a.url})),...R3.map(a=>({title:a.category,url:a.url}))],I3=()=>{const{width:a,height:e}=Ex(),i=le.useRef(null),l=zi().pathname;function c(){return l.split("/").filter((f,d)=>d!==0)}return console.log(l,"is curernt"),le.useEffect(()=>{const f=new vu,d=new $n(75,window.innerWidth/window.innerHeight,.1,1e3),p=new Sx({alpha:!0});p.setClearColor(0,0),p.setSize(window.innerWidth,window.innerHeight),p.domElement.style.position="absolute",p.domElement.style.top="0",p.domElement.style.left="0",p.domElement.style.zIndex="-1",i.current instanceof HTMLElement&&!i.current.hasChildNodes()&&i.current.appendChild(p.domElement);const m=new eo,v=new Eu({color:65280}),g=new hi(m,v);f.add(g),d.position.z=5;const x=()=>{g.rotation.x+=.01,g.rotation.y+=.01,p.render(f,d),requestAnimationFrame(x)};return x(),()=>{i.current&&i.current.removeChild(p.domElement)}},[]),console.log(a,"is the width; and the height is: ",e),b.jsx(b.Fragment,{children:b.jsxs("div",{id:"outer_bg",children:[b.jsx("div",{style:{position:"fixed",top:0,left:0,width:`${a}px`,height:`${e}px`,overflow:"hidden"},children:b.jsx(Yw,{})}),b.jsx(l3,{}),b.jsxs("div",{className:"pt-20",id:"inner_bg",ref:i,style:{position:"relative",width:"95vw",margin:"auto"},children:[b.jsxs("div",{children:[b.jsx(Xw,{width:a,path:l}),c().length>1&&b.jsx(qw,{split:c,locationData:z3})]}),b.jsxs("div",{id:"body_div",children:[b.jsx("main",{children:b.jsxs(q1,{children:[b.jsx(Cn,{path:"/",element:b.jsx(b.Fragment,{})}),b.jsx(Cn,{path:"/about",element:b.jsx(Bw,{})}),b.jsx(Cn,{path:"/projects/3d",element:b.jsx(O3,{width:a,blog_array:P3})}),b.jsx(Cn,{path:"/projects",element:b.jsx(Hw,{width:a,category_array:Lx})}),b.jsx(Cn,{path:"/projects/web_dev",element:b.jsx(L3,{width:a,blog_array:R_})}),b.jsx(Cn,{path:"/projects/programming",element:b.jsx(U3,{width:a,blog_array:N3})}),b.jsx(Cn,{path:"/projects/web_dev/d3-visualizations",element:b.jsx(B3,{width:a,blog_array:R_})}),b.jsx(Cn,{path:"/art",element:b.jsx(yd,{width:a,category_array:Dx})}),b.jsx(Cn,{path:"/art/painting",element:b.jsx(yd,{width:a,category_array:Nx})}),b.jsx(Cn,{path:"/art/painting/:periodSlug",element:b.jsx(w3,{width:a})}),b.jsx(Cn,{path:"/art/drawing",element:b.jsx(yd,{width:a,category_array:Ux})}),b.jsx(Cn,{path:"/contact",element:b.jsx(zw,{})}),b.jsx(Cn,{path:"/projects/urfriends",element:b.jsx(f3,{})}),b.jsx(Cn,{path:"/projects/thebook",element:b.jsx(c3,{})}),b.jsx(Cn,{path:"/projects/ripsheet",element:b.jsx(u3,{})}),b.jsx(Cn,{path:"/projects/widowbags",element:b.jsx(h3,{})})]})}),b.jsx(Gw,{path:l})]})]}),b.jsx("div",{className:"pointer-events-none flex justify-end fixed top-0 w-full z-100 ",children:b.jsx("a",{href:ul,target:"new",children:b.jsx("button",{className:"pointer-events-auto p-2 rounded-lg m-2 bg-white cursor-pointer",children:b.jsx(Ww,{})})})})]})})};function F3(){const{pathname:a}=zi();return le.useEffect(()=>{window.scrollTo(0,0)},[a]),null}YS.createRoot(document.getElementById("root")).render(b.jsx(le.StrictMode,{children:b.jsxs(vE,{basename:"/",children:[b.jsx(F3,{}),b.jsx(I3,{})]})}));
