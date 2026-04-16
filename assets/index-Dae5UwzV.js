(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Vd={exports:{}},il={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y0;function WS(){if(y0)return il;y0=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:a,type:s,key:f,ref:l!==void 0?l:null,props:c}}return il.Fragment=e,il.jsx=i,il.jsxs=i,il}var S0;function qS(){return S0||(S0=1,Vd.exports=WS()),Vd.exports}var S=qS(),kd={exports:{}},rt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b0;function YS(){if(b0)return rt;b0=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function E(P){return P===null||typeof P!="object"?null:(P=x&&P[x]||P["@@iterator"],typeof P=="function"?P:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,b={};function _(P,ne,Se){this.props=P,this.context=ne,this.refs=b,this.updater=Se||M}_.prototype.isReactComponent={},_.prototype.setState=function(P,ne){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,ne,"setState")},_.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function L(){}L.prototype=_.prototype;function U(P,ne,Se){this.props=P,this.context=ne,this.refs=b,this.updater=Se||M}var D=U.prototype=new L;D.constructor=U,T(D,_.prototype),D.isPureReactComponent=!0;var k=Array.isArray;function H(){}var B={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function N(P,ne,Se){var Z=Se.ref;return{$$typeof:a,type:P,key:ne,ref:Z!==void 0?Z:null,props:Se}}function C(P,ne){return N(P.type,ne,P.props)}function V(P){return typeof P=="object"&&P!==null&&P.$$typeof===a}function ue(P){var ne={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(Se){return ne[Se]})}var re=/\/+/g;function _e(P,ne){return typeof P=="object"&&P!==null&&P.key!=null?ue(""+P.key):ne.toString(36)}function pe(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(H,H):(P.status="pending",P.then(function(ne){P.status==="pending"&&(P.status="fulfilled",P.value=ne)},function(ne){P.status==="pending"&&(P.status="rejected",P.reason=ne)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function z(P,ne,Se,Z,he){var Me=typeof P;(Me==="undefined"||Me==="boolean")&&(P=null);var ye=!1;if(P===null)ye=!0;else switch(Me){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(P.$$typeof){case a:case e:ye=!0;break;case v:return ye=P._init,z(ye(P._payload),ne,Se,Z,he)}}if(ye)return he=he(P),ye=Z===""?"."+_e(P,0):Z,k(he)?(Se="",ye!=null&&(Se=ye.replace(re,"$&/")+"/"),z(he,ne,Se,"",function(Ke){return Ke})):he!=null&&(V(he)&&(he=C(he,Se+(he.key==null||P&&P.key===he.key?"":(""+he.key).replace(re,"$&/")+"/")+ye)),ne.push(he)),1;ye=0;var ze=Z===""?".":Z+":";if(k(P))for(var Ye=0;Ye<P.length;Ye++)Z=P[Ye],Me=ze+_e(Z,Ye),ye+=z(Z,ne,Se,Me,he);else if(Ye=E(P),typeof Ye=="function")for(P=Ye.call(P),Ye=0;!(Z=P.next()).done;)Z=Z.value,Me=ze+_e(Z,Ye++),ye+=z(Z,ne,Se,Me,he);else if(Me==="object"){if(typeof P.then=="function")return z(pe(P),ne,Se,Z,he);throw ne=String(P),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return ye}function Q(P,ne,Se){if(P==null)return P;var Z=[],he=0;return z(P,Z,"","",function(Me){return ne.call(Se,Me,he++)}),Z}function K(P){if(P._status===-1){var ne=P._result;ne=ne(),ne.then(function(Se){(P._status===0||P._status===-1)&&(P._status=1,P._result=Se)},function(Se){(P._status===0||P._status===-1)&&(P._status=2,P._result=Se)}),P._status===-1&&(P._status=0,P._result=ne)}if(P._status===1)return P._result.default;throw P._result}var be=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},we={map:Q,forEach:function(P,ne,Se){Q(P,function(){ne.apply(this,arguments)},Se)},count:function(P){var ne=0;return Q(P,function(){ne++}),ne},toArray:function(P){return Q(P,function(ne){return ne})||[]},only:function(P){if(!V(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return rt.Activity=g,rt.Children=we,rt.Component=_,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=U,rt.StrictMode=s,rt.Suspense=p,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,rt.__COMPILER_RUNTIME={__proto__:null,c:function(P){return B.H.useMemoCache(P)}},rt.cache=function(P){return function(){return P.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(P,ne,Se){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Z=T({},P.props),he=P.key;if(ne!=null)for(Me in ne.key!==void 0&&(he=""+ne.key),ne)!Y.call(ne,Me)||Me==="key"||Me==="__self"||Me==="__source"||Me==="ref"&&ne.ref===void 0||(Z[Me]=ne[Me]);var Me=arguments.length-2;if(Me===1)Z.children=Se;else if(1<Me){for(var ye=Array(Me),ze=0;ze<Me;ze++)ye[ze]=arguments[ze+2];Z.children=ye}return N(P.type,he,Z)},rt.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},rt.createElement=function(P,ne,Se){var Z,he={},Me=null;if(ne!=null)for(Z in ne.key!==void 0&&(Me=""+ne.key),ne)Y.call(ne,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(he[Z]=ne[Z]);var ye=arguments.length-2;if(ye===1)he.children=Se;else if(1<ye){for(var ze=Array(ye),Ye=0;Ye<ye;Ye++)ze[Ye]=arguments[Ye+2];he.children=ze}if(P&&P.defaultProps)for(Z in ye=P.defaultProps,ye)he[Z]===void 0&&(he[Z]=ye[Z]);return N(P,Me,he)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(P){return{$$typeof:h,render:P}},rt.isValidElement=V,rt.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:K}},rt.memo=function(P,ne){return{$$typeof:m,type:P,compare:ne===void 0?null:ne}},rt.startTransition=function(P){var ne=B.T,Se={};B.T=Se;try{var Z=P(),he=B.S;he!==null&&he(Se,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(H,be)}catch(Me){be(Me)}finally{ne!==null&&Se.types!==null&&(ne.types=Se.types),B.T=ne}},rt.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},rt.use=function(P){return B.H.use(P)},rt.useActionState=function(P,ne,Se){return B.H.useActionState(P,ne,Se)},rt.useCallback=function(P,ne){return B.H.useCallback(P,ne)},rt.useContext=function(P){return B.H.useContext(P)},rt.useDebugValue=function(){},rt.useDeferredValue=function(P,ne){return B.H.useDeferredValue(P,ne)},rt.useEffect=function(P,ne){return B.H.useEffect(P,ne)},rt.useEffectEvent=function(P){return B.H.useEffectEvent(P)},rt.useId=function(){return B.H.useId()},rt.useImperativeHandle=function(P,ne,Se){return B.H.useImperativeHandle(P,ne,Se)},rt.useInsertionEffect=function(P,ne){return B.H.useInsertionEffect(P,ne)},rt.useLayoutEffect=function(P,ne){return B.H.useLayoutEffect(P,ne)},rt.useMemo=function(P,ne){return B.H.useMemo(P,ne)},rt.useOptimistic=function(P,ne){return B.H.useOptimistic(P,ne)},rt.useReducer=function(P,ne,Se){return B.H.useReducer(P,ne,Se)},rt.useRef=function(P){return B.H.useRef(P)},rt.useState=function(P){return B.H.useState(P)},rt.useSyncExternalStore=function(P,ne,Se){return B.H.useSyncExternalStore(P,ne,Se)},rt.useTransition=function(){return B.H.useTransition()},rt.version="19.2.5",rt}var E0;function pp(){return E0||(E0=1,kd.exports=YS()),kd.exports}var le=pp(),jd={exports:{}},al={},Xd={exports:{}},Wd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M0;function ZS(){return M0||(M0=1,(function(a){function e(z,Q){var K=z.length;z.push(Q);e:for(;0<K;){var be=K-1>>>1,we=z[be];if(0<l(we,Q))z[be]=Q,z[K]=we,K=be;else break e}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var Q=z[0],K=z.pop();if(K!==Q){z[0]=K;e:for(var be=0,we=z.length,P=we>>>1;be<P;){var ne=2*(be+1)-1,Se=z[ne],Z=ne+1,he=z[Z];if(0>l(Se,K))Z<we&&0>l(he,Se)?(z[be]=he,z[Z]=K,be=Z):(z[be]=Se,z[ne]=K,be=ne);else if(Z<we&&0>l(he,K))z[be]=he,z[Z]=K,be=Z;else break e}}return Q}function l(z,Q){var K=z.sortIndex-Q.sortIndex;return K!==0?K:z.id-Q.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();a.unstable_now=function(){return f.now()-h}}var p=[],m=[],v=1,g=null,x=3,E=!1,M=!1,T=!1,b=!1,_=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function D(z){for(var Q=i(m);Q!==null;){if(Q.callback===null)s(m);else if(Q.startTime<=z)s(m),Q.sortIndex=Q.expirationTime,e(p,Q);else break;Q=i(m)}}function k(z){if(T=!1,D(z),!M)if(i(p)!==null)M=!0,H||(H=!0,ue());else{var Q=i(m);Q!==null&&pe(k,Q.startTime-z)}}var H=!1,B=-1,Y=5,N=-1;function C(){return b?!0:!(a.unstable_now()-N<Y)}function V(){if(b=!1,H){var z=a.unstable_now();N=z;var Q=!0;try{e:{M=!1,T&&(T=!1,L(B),B=-1),E=!0;var K=x;try{t:{for(D(z),g=i(p);g!==null&&!(g.expirationTime>z&&C());){var be=g.callback;if(typeof be=="function"){g.callback=null,x=g.priorityLevel;var we=be(g.expirationTime<=z);if(z=a.unstable_now(),typeof we=="function"){g.callback=we,D(z),Q=!0;break t}g===i(p)&&s(p),D(z)}else s(p);g=i(p)}if(g!==null)Q=!0;else{var P=i(m);P!==null&&pe(k,P.startTime-z),Q=!1}}break e}finally{g=null,x=K,E=!1}Q=void 0}}finally{Q?ue():H=!1}}}var ue;if(typeof U=="function")ue=function(){U(V)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,_e=re.port2;re.port1.onmessage=V,ue=function(){_e.postMessage(null)}}else ue=function(){_(V,0)};function pe(z,Q){B=_(function(){z(a.unstable_now())},Q)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(z){z.callback=null},a.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<z?Math.floor(1e3/z):5},a.unstable_getCurrentPriorityLevel=function(){return x},a.unstable_next=function(z){switch(x){case 1:case 2:case 3:var Q=3;break;default:Q=x}var K=x;x=Q;try{return z()}finally{x=K}},a.unstable_requestPaint=function(){b=!0},a.unstable_runWithPriority=function(z,Q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var K=x;x=z;try{return Q()}finally{x=K}},a.unstable_scheduleCallback=function(z,Q,K){var be=a.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?be+K:be):K=be,z){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=K+we,z={id:v++,callback:Q,priorityLevel:z,startTime:K,expirationTime:we,sortIndex:-1},K>be?(z.sortIndex=K,e(m,z),i(p)===null&&z===i(m)&&(T?(L(B),B=-1):T=!0,pe(k,K-be))):(z.sortIndex=we,e(p,z),M||E||(M=!0,H||(H=!0,ue()))),z},a.unstable_shouldYield=C,a.unstable_wrapCallback=function(z){var Q=x;return function(){var K=x;x=Q;try{return z.apply(this,arguments)}finally{x=K}}}})(Wd)),Wd}var T0;function KS(){return T0||(T0=1,Xd.exports=ZS()),Xd.exports}var qd={exports:{}},Bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w0;function QS(){if(w0)return Bn;w0=1;var a=pp();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)m+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:p,containerInfo:m,implementation:v}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Bn.createPortal=function(p,m){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return c(p,m,null,v)},Bn.flushSync=function(p){var m=f.T,v=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=m,s.p=v,s.d.f()}},Bn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},Bn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Bn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var v=m.as,g=h(v,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,E=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;v==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:E}):v==="script"&&s.d.X(p,{crossOrigin:g,integrity:x,fetchPriority:E,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Bn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var v=h(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},Bn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var v=m.as,g=h(v,m.crossOrigin);s.d.L(p,v,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Bn.preloadModule=function(p,m){if(typeof p=="string")if(m){var v=h(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},Bn.requestFormReset=function(p){s.d.r(p)},Bn.unstable_batchedUpdates=function(p,m){return p(m)},Bn.useFormState=function(p,m,v){return f.H.useFormState(p,m,v)},Bn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Bn.version="19.2.5",Bn}var A0;function JS(){if(A0)return qd.exports;A0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),qd.exports=QS(),qd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R0;function $S(){if(R0)return al;R0=1;var a=KS(),e=pp(),i=JS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,r=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(r=n.return),t=n.return;while(t)}return n.tag===3?r:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(s(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var r=t,o=n;;){var u=r.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){r=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===r)return p(u),t;if(d===o)return p(u),n;d=d.sibling}throw Error(s(188))}if(r.return!==o.return)r=u,o=d;else{for(var y=!1,w=u.child;w;){if(w===r){y=!0,r=u,o=d;break}if(w===o){y=!0,o=u,r=d;break}w=w.sibling}if(!y){for(w=d.child;w;){if(w===r){y=!0,r=d,o=u;break}if(w===o){y=!0,o=d,r=u;break}w=w.sibling}if(!y)throw Error(s(189))}}if(r.alternate!==o)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),U=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function ue(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var re=Symbol.for("react.client.reference");function _e(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===re?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case _:return"Profiler";case b:return"StrictMode";case k:return"Suspense";case H:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case U:return t.displayName||"Context";case L:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:_e(t.type)||"Memo";case Y:n=t._payload,t=t._init;try{return _e(t(n))}catch{}}return null}var pe=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},be=[],we=-1;function P(t){return{current:t}}function ne(t){0>we||(t.current=be[we],be[we]=null,we--)}function Se(t,n){we++,be[we]=t.current,t.current=n}var Z=P(null),he=P(null),Me=P(null),ye=P(null);function ze(t,n){switch(Se(Me,n),Se(he,t),Se(Z,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?kv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=kv(n),t=jv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ne(Z),Se(Z,t)}function Ye(){ne(Z),ne(he),ne(Me)}function Ke(t){t.memoizedState!==null&&Se(ye,t);var n=Z.current,r=jv(n,t.type);n!==r&&(Se(he,t),Se(Z,r))}function qt(t){he.current===t&&(ne(Z),ne(he)),ye.current===t&&(ne(ye),$o._currentValue=K)}var Xt,dt;function F(t){if(Xt===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);Xt=n&&n[1]||"",dt=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xt+t+dt}var On=!1;function ht(t,n){if(!t||On)return"";On=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ve=function(){throw Error()};if(Object.defineProperty(ve.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ve,[])}catch(se){var ee=se}Reflect.construct(t,[],ve)}else{try{ve.call()}catch(se){ee=se}t.call(ve.prototype)}}else{try{throw Error()}catch(se){ee=se}(ve=t())&&typeof ve.catch=="function"&&ve.catch(function(){})}}catch(se){if(se&&ee&&typeof se.stack=="string")return[se.stack,ee.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),y=d[0],w=d[1];if(y&&w){var I=y.split(`
`),$=w.split(`
`);for(u=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(o===I.length||u===$.length)for(o=I.length-1,u=$.length-1;1<=o&&0<=u&&I[o]!==$[u];)u--;for(;1<=o&&0<=u;o--,u--)if(I[o]!==$[u]){if(o!==1||u!==1)do if(o--,u--,0>u||I[o]!==$[u]){var fe=`
`+I[o].replace(" at new "," at ");return t.displayName&&fe.includes("<anonymous>")&&(fe=fe.replace("<anonymous>",t.displayName)),fe}while(1<=o&&0<=u);break}}}finally{On=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?F(r):""}function vt(t,n){switch(t.tag){case 26:case 27:case 5:return F(t.type);case 16:return F("Lazy");case 13:return t.child!==n&&n!==null?F("Suspense Fallback"):F("Suspense");case 19:return F("SuspenseList");case 0:case 15:return ht(t.type,!1);case 11:return ht(t.type.render,!1);case 1:return ht(t.type,!0);case 31:return F("Activity");default:return""}}function je(t){try{var n="",r=null;do n+=vt(t,r),r=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Bt=Object.prototype.hasOwnProperty,ke=a.unstable_scheduleCallback,O=a.unstable_cancelCallback,A=a.unstable_shouldYield,te=a.unstable_requestPaint,de=a.unstable_now,Ee=a.unstable_getCurrentPriorityLevel,ge=a.unstable_ImmediatePriority,Ge=a.unstable_UserBlockingPriority,Ce=a.unstable_NormalPriority,Qe=a.unstable_LowPriority,$e=a.unstable_IdlePriority,Ae=a.log,Ie=a.unstable_setDisableYieldValue,Ze=null,Ve=null;function Pe(t){if(typeof Ae=="function"&&Ie(t),Ve&&typeof Ve.setStrictMode=="function")try{Ve.setStrictMode(Ze,t)}catch{}}var tt=Math.clz32?Math.clz32:X,st=Math.log,Ft=Math.LN2;function X(t){return t>>>=0,t===0?32:31-(st(t)/Ft|0)|0}var De=256,ce=262144,xe=4194304;function Re(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ue(t,n,r){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var w=o&134217727;return w!==0?(o=w&~d,o!==0?u=Re(o):(y&=w,y!==0?u=Re(y):r||(r=w&~t,r!==0&&(u=Re(r))))):(w=o&~d,w!==0?u=Re(w):y!==0?u=Re(y):r||(r=o&~t,r!==0&&(u=Re(r)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,r=n&-n,d>=r||d===32&&(r&4194048)!==0)?n:u}function nt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Qt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pn(){var t=xe;return xe<<=1,(xe&62914560)===0&&(xe=4194304),t}function wt(t){for(var n=[],r=0;31>r;r++)n.push(t);return n}function Mn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ui(t,n,r,o,u,d){var y=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var w=t.entanglements,I=t.expirationTimes,$=t.hiddenUpdates;for(r=y&~r;0<r;){var fe=31-tt(r),ve=1<<fe;w[fe]=0,I[fe]=-1;var ee=$[fe];if(ee!==null)for($[fe]=null,fe=0;fe<ee.length;fe++){var se=ee[fe];se!==null&&(se.lane&=-536870913)}r&=~ve}o!==0&&uo(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(y&~n))}function uo(t,n,r){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-tt(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|r&261930}function fo(t,n){var r=t.entangledLanes|=n;for(t=t.entanglements;r;){var o=31-tt(r),u=1<<o;u&n|t[o]&n&&(t[o]|=n),r&=~u}}function ki(t,n){var r=n&-n;return r=(r&42)!==0?1:_r(r),(r&(t.suspendedLanes|n))!==0?0:r}function _r(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Jr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ho(){var t=Q.p;return t!==0?t:(t=window.event,t===void 0?32:h0(t.type))}function xr(t,n){var r=Q.p;try{return Q.p=t,n()}finally{Q.p=r}}var Ni=Math.random().toString(36).slice(2),tn="__reactFiber$"+Ni,Tn="__reactProps$"+Ni,aa="__reactContainer$"+Ni,po="__reactEvents$"+Ni,Pu="__reactListeners$"+Ni,Bu="__reactHandles$"+Ni,Ul="__reactResources$"+Ni,yr="__reactMarker$"+Ni;function mo(t){delete t[tn],delete t[Tn],delete t[po],delete t[Pu],delete t[Bu]}function R(t){var n=t[tn];if(n)return n;for(var r=t.parentNode;r;){if(n=r[aa]||r[tn]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(t=Qv(t);t!==null;){if(r=t[tn])return r;t=Qv(t)}return n}t=r,r=t.parentNode}return null}function W(t){if(t=t[tn]||t[aa]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ie(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function ae(t){var n=t[Ul];return n||(n=t[Ul]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function j(t){t[yr]=!0}var Te=new Set,Ne={};function Oe(t,n){Be(t,n),Be(t+"Capture",n)}function Be(t,n){for(Ne[t]=n,t=0;t<n.length;t++)Te.add(n[t])}var it=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),et={},Xe={};function yt(t){return Bt.call(Xe,t)?!0:Bt.call(et,t)?!1:it.test(t)?Xe[t]=!0:(et[t]=!0,!1)}function St(t,n,r){if(yt(n))if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+r)}}function Yt(t,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+r)}}function At(t,n,r,o){if(o===null)t.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(n,r,""+o)}}function at(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qe(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function mn(t,n,r){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){r=""+y,d.call(this,y)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return r},setValue:function(y){r=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Tt(t){if(!t._valueTracker){var n=qe(t)?"checked":"value";t._valueTracker=mn(t,n,""+t[n])}}function qn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var r=n.getValue(),o="";return t&&(o=qe(t)?t.checked?"true":"false":t.value),t=o,t!==r?(n.setValue(t),!0):!1}function Li(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Gn=/[\n"\\]/g;function xn(t){return t.replace(Gn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ht(t,n,r,o,u,d,y,w){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+at(n)):t.value!==""+at(n)&&(t.value=""+at(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?Pn(t,y,at(n)):r!=null?Pn(t,y,at(r)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+at(w):t.removeAttribute("name")}function Vn(t,n,r,o,u,d,y,w){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||r!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Tt(t);return}r=r!=null?""+at(r):"",n=n!=null?""+at(n):r,w||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=w?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),Tt(t)}function Pn(t,n,r){n==="number"&&Li(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function nn(t,n,r,o){if(t=t.options,n){n={};for(var u=0;u<r.length;u++)n["$"+r[u]]=!0;for(r=0;r<t.length;r++)u=n.hasOwnProperty("$"+t[r].value),t[r].selected!==u&&(t[r].selected=u),u&&o&&(t[r].defaultSelected=!0)}else{for(r=""+at(r),n=null,u=0;u<t.length;u++){if(t[u].value===r){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function wn(t,n,r){if(n!=null&&(n=""+at(n),n!==t.value&&(t.value=n),r==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=r!=null?""+at(r):""}function $r(t,n,r,o){if(n==null){if(o!=null){if(r!=null)throw Error(s(92));if(pe(o)){if(1<o.length)throw Error(s(93));o=o[0]}r=o}r==null&&(r=""),n=r}r=at(n),t.defaultValue=r,o=t.textContent,o===r&&o!==""&&o!==null&&(t.value=o),Tt(t)}function Yn(t,n){if(n){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=n;return}}t.textContent=n}var Gx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hp(t,n,r){var o=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,r):typeof r!="number"||r===0||Gx.has(n)?n==="float"?t.cssFloat=r:t[n]=(""+r).trim():t[n]=r+"px"}function Gp(t,n,r){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&r[u]!==o&&Hp(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Hp(t,d,n[d])}function zu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),kx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Nl(t){return kx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ra(){}var Iu=null;function Fu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var es=null,ts=null;function Vp(t){var n=W(t);if(n&&(t=n.stateNode)){var r=t[Tn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ht(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+xn(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var o=r[n];if(o!==t&&o.form===t.form){var u=o[Tn]||null;if(!u)throw Error(s(90));Ht(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<r.length;n++)o=r[n],o.form===t.form&&qn(o)}break e;case"textarea":wn(t,r.value,r.defaultValue);break e;case"select":n=r.value,n!=null&&nn(t,!!r.multiple,n,!1)}}}var Hu=!1;function kp(t,n,r){if(Hu)return t(n,r);Hu=!0;try{var o=t(n);return o}finally{if(Hu=!1,(es!==null||ts!==null)&&(xc(),es&&(n=es,t=ts,ts=es=null,Vp(n),t)))for(n=0;n<t.length;n++)Vp(t[n])}}function go(t,n){var r=t.stateNode;if(r===null)return null;var o=r[Tn]||null;if(o===null)return null;r=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(s(231,n,typeof r));return r}var sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gu=!1;if(sa)try{var vo={};Object.defineProperty(vo,"passive",{get:function(){Gu=!0}}),window.addEventListener("test",vo,vo),window.removeEventListener("test",vo,vo)}catch{Gu=!1}var Ba=null,Vu=null,Ll=null;function jp(){if(Ll)return Ll;var t,n=Vu,r=n.length,o,u="value"in Ba?Ba.value:Ba.textContent,d=u.length;for(t=0;t<r&&n[t]===u[t];t++);var y=r-t;for(o=1;o<=y&&n[r-o]===u[d-o];o++);return Ll=u.slice(t,1<o?1-o:void 0)}function Ol(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Pl(){return!0}function Xp(){return!1}function Zn(t){function n(r,o,u,d,y){this._reactName=r,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(r=t[w],this[w]=r?r(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Pl:Xp,this.isPropagationStopped=Xp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Pl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Pl)},persist:function(){},isPersistent:Pl}),n}var Sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bl=Zn(Sr),_o=g({},Sr,{view:0,detail:0}),jx=Zn(_o),ku,ju,xo,zl=g({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xo&&(xo&&t.type==="mousemove"?(ku=t.screenX-xo.screenX,ju=t.screenY-xo.screenY):ju=ku=0,xo=t),ku)},movementY:function(t){return"movementY"in t?t.movementY:ju}}),Wp=Zn(zl),Xx=g({},zl,{dataTransfer:0}),Wx=Zn(Xx),qx=g({},_o,{relatedTarget:0}),Xu=Zn(qx),Yx=g({},Sr,{animationName:0,elapsedTime:0,pseudoElement:0}),Zx=Zn(Yx),Kx=g({},Sr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Qx=Zn(Kx),Jx=g({},Sr,{data:0}),qp=Zn(Jx),$x={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ey={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ty={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ny(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=ty[t])?!!n[t]:!1}function Wu(){return ny}var iy=g({},_o,{key:function(t){if(t.key){var n=$x[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ol(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ey[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wu,charCode:function(t){return t.type==="keypress"?Ol(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ol(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ay=Zn(iy),ry=g({},zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yp=Zn(ry),sy=g({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wu}),oy=Zn(sy),ly=g({},Sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),cy=Zn(ly),uy=g({},zl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fy=Zn(uy),dy=g({},Sr,{newState:0,oldState:0}),hy=Zn(dy),py=[9,13,27,32],qu=sa&&"CompositionEvent"in window,yo=null;sa&&"documentMode"in document&&(yo=document.documentMode);var my=sa&&"TextEvent"in window&&!yo,Zp=sa&&(!qu||yo&&8<yo&&11>=yo),Kp=" ",Qp=!1;function Jp(t,n){switch(t){case"keyup":return py.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $p(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function gy(t,n){switch(t){case"compositionend":return $p(n);case"keypress":return n.which!==32?null:(Qp=!0,Kp);case"textInput":return t=n.data,t===Kp&&Qp?null:t;default:return null}}function vy(t,n){if(ns)return t==="compositionend"||!qu&&Jp(t,n)?(t=jp(),Ll=Vu=Ba=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Zp&&n.locale!=="ko"?null:n.data;default:return null}}var _y={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function em(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!_y[t.type]:n==="textarea"}function tm(t,n,r,o){es?ts?ts.push(o):ts=[o]:es=o,n=wc(n,"onChange"),0<n.length&&(r=new Bl("onChange","change",null,r,o),t.push({event:r,listeners:n}))}var So=null,bo=null;function xy(t){zv(t,0)}function Il(t){var n=ie(t);if(qn(n))return t}function nm(t,n){if(t==="change")return n}var im=!1;if(sa){var Yu;if(sa){var Zu="oninput"in document;if(!Zu){var am=document.createElement("div");am.setAttribute("oninput","return;"),Zu=typeof am.oninput=="function"}Yu=Zu}else Yu=!1;im=Yu&&(!document.documentMode||9<document.documentMode)}function rm(){So&&(So.detachEvent("onpropertychange",sm),bo=So=null)}function sm(t){if(t.propertyName==="value"&&Il(bo)){var n=[];tm(n,bo,t,Fu(t)),kp(xy,n)}}function yy(t,n,r){t==="focusin"?(rm(),So=n,bo=r,So.attachEvent("onpropertychange",sm)):t==="focusout"&&rm()}function Sy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Il(bo)}function by(t,n){if(t==="click")return Il(n)}function Ey(t,n){if(t==="input"||t==="change")return Il(n)}function My(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ii=typeof Object.is=="function"?Object.is:My;function Eo(t,n){if(ii(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var r=Object.keys(t),o=Object.keys(n);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var u=r[o];if(!Bt.call(n,u)||!ii(t[u],n[u]))return!1}return!0}function om(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lm(t,n){var r=om(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=n&&o>=n)return{node:r,offset:n-t};t=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=om(r)}}function cm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?cm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function um(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Li(t.document);n instanceof t.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)t=n.contentWindow;else break;n=Li(t.document)}return n}function Ku(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Ty=sa&&"documentMode"in document&&11>=document.documentMode,is=null,Qu=null,Mo=null,Ju=!1;function fm(t,n,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Ju||is==null||is!==Li(o)||(o=is,"selectionStart"in o&&Ku(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Mo&&Eo(Mo,o)||(Mo=o,o=wc(Qu,"onSelect"),0<o.length&&(n=new Bl("onSelect","select",null,n,r),t.push({event:n,listeners:o}),n.target=is)))}function br(t,n){var r={};return r[t.toLowerCase()]=n.toLowerCase(),r["Webkit"+t]="webkit"+n,r["Moz"+t]="moz"+n,r}var as={animationend:br("Animation","AnimationEnd"),animationiteration:br("Animation","AnimationIteration"),animationstart:br("Animation","AnimationStart"),transitionrun:br("Transition","TransitionRun"),transitionstart:br("Transition","TransitionStart"),transitioncancel:br("Transition","TransitionCancel"),transitionend:br("Transition","TransitionEnd")},$u={},dm={};sa&&(dm=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function Er(t){if($u[t])return $u[t];if(!as[t])return t;var n=as[t],r;for(r in n)if(n.hasOwnProperty(r)&&r in dm)return $u[t]=n[r];return t}var hm=Er("animationend"),pm=Er("animationiteration"),mm=Er("animationstart"),wy=Er("transitionrun"),Ay=Er("transitionstart"),Ry=Er("transitioncancel"),gm=Er("transitionend"),vm=new Map,ef="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ef.push("scrollEnd");function Oi(t,n){vm.set(t,n),Oe(n,[t])}var Fl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},_i=[],rs=0,tf=0;function Hl(){for(var t=rs,n=tf=rs=0;n<t;){var r=_i[n];_i[n++]=null;var o=_i[n];_i[n++]=null;var u=_i[n];_i[n++]=null;var d=_i[n];if(_i[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}d!==0&&_m(r,u,d)}}function Gl(t,n,r,o){_i[rs++]=t,_i[rs++]=n,_i[rs++]=r,_i[rs++]=o,tf|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function nf(t,n,r,o){return Gl(t,n,r,o),Vl(t)}function Mr(t,n){return Gl(t,null,null,n),Vl(t)}function _m(t,n,r){t.lanes|=r;var o=t.alternate;o!==null&&(o.lanes|=r);for(var u=!1,d=t.return;d!==null;)d.childLanes|=r,o=d.alternate,o!==null&&(o.childLanes|=r),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-tt(r),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=r|536870912),d):null}function Vl(t){if(50<Wo)throw Wo=0,dd=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ss={};function Cy(t,n,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(t,n,r,o){return new Cy(t,n,r,o)}function af(t){return t=t.prototype,!(!t||!t.isReactComponent)}function oa(t,n){var r=t.alternate;return r===null?(r=ai(t.tag,n,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=n,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,n=t.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function xm(t,n){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,n=r.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function kl(t,n,r,o,u,d){var y=0;if(o=t,typeof t=="function")af(t)&&(y=1);else if(typeof t=="string")y=OS(t,r,Z.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case N:return t=ai(31,r,n,u),t.elementType=N,t.lanes=d,t;case T:return Tr(r.children,u,d,n);case b:y=8,u|=24;break;case _:return t=ai(12,r,n,u|2),t.elementType=_,t.lanes=d,t;case k:return t=ai(13,r,n,u),t.elementType=k,t.lanes=d,t;case H:return t=ai(19,r,n,u),t.elementType=H,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:y=10;break e;case L:y=9;break e;case D:y=11;break e;case B:y=14;break e;case Y:y=16,o=null;break e}y=29,r=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=ai(y,r,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function Tr(t,n,r,o){return t=ai(7,t,o,n),t.lanes=r,t}function rf(t,n,r){return t=ai(6,t,null,n),t.lanes=r,t}function ym(t){var n=ai(18,null,null,0);return n.stateNode=t,n}function sf(t,n,r){return n=ai(4,t.children!==null?t.children:[],t.key,n),n.lanes=r,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Sm=new WeakMap;function xi(t,n){if(typeof t=="object"&&t!==null){var r=Sm.get(t);return r!==void 0?r:(n={value:t,source:n,stack:je(n)},Sm.set(t,n),n)}return{value:t,source:n,stack:je(n)}}var os=[],ls=0,jl=null,To=0,yi=[],Si=0,za=null,ji=1,Xi="";function la(t,n){os[ls++]=To,os[ls++]=jl,jl=t,To=n}function bm(t,n,r){yi[Si++]=ji,yi[Si++]=Xi,yi[Si++]=za,za=t;var o=ji;t=Xi;var u=32-tt(o)-1;o&=~(1<<u),r+=1;var d=32-tt(n)+u;if(30<d){var y=u-u%5;d=(o&(1<<y)-1).toString(32),o>>=y,u-=y,ji=1<<32-tt(n)+u|r<<u|o,Xi=d+t}else ji=1<<d|r<<u|o,Xi=t}function of(t){t.return!==null&&(la(t,1),bm(t,1,0))}function lf(t){for(;t===jl;)jl=os[--ls],os[ls]=null,To=os[--ls],os[ls]=null;for(;t===za;)za=yi[--Si],yi[Si]=null,Xi=yi[--Si],yi[Si]=null,ji=yi[--Si],yi[Si]=null}function Em(t,n){yi[Si++]=ji,yi[Si++]=Xi,yi[Si++]=za,ji=n.id,Xi=n.overflow,za=t}var An=null,Zt=null,bt=!1,Ia=null,bi=!1,cf=Error(s(519));function Fa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wo(xi(n,t)),cf}function Mm(t){var n=t.stateNode,r=t.type,o=t.memoizedProps;switch(n[tn]=t,n[Tn]=o,r){case"dialog":mt("cancel",n),mt("close",n);break;case"iframe":case"object":case"embed":mt("load",n);break;case"video":case"audio":for(r=0;r<Yo.length;r++)mt(Yo[r],n);break;case"source":mt("error",n);break;case"img":case"image":case"link":mt("error",n),mt("load",n);break;case"details":mt("toggle",n);break;case"input":mt("invalid",n),Vn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":mt("invalid",n);break;case"textarea":mt("invalid",n),$r(n,o.value,o.defaultValue,o.children)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||o.suppressHydrationWarning===!0||Gv(n.textContent,r)?(o.popover!=null&&(mt("beforetoggle",n),mt("toggle",n)),o.onScroll!=null&&mt("scroll",n),o.onScrollEnd!=null&&mt("scrollend",n),o.onClick!=null&&(n.onclick=ra),n=!0):n=!1,n||Fa(t,!0)}function Tm(t){for(An=t.return;An;)switch(An.tag){case 5:case 31:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:An=An.return}}function cs(t){if(t!==An)return!1;if(!bt)return Tm(t),bt=!0,!1;var n=t.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||Ad(t.type,t.memoizedProps)),r=!r),r&&Zt&&Fa(t),Tm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Zt=Kv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Zt=Kv(t)}else n===27?(n=Zt,$a(t.type)?(t=Nd,Nd=null,Zt=t):Zt=n):Zt=An?Mi(t.stateNode.nextSibling):null;return!0}function wr(){Zt=An=null,bt=!1}function uf(){var t=Ia;return t!==null&&($n===null?$n=t:$n.push.apply($n,t),Ia=null),t}function wo(t){Ia===null?Ia=[t]:Ia.push(t)}var ff=P(null),Ar=null,ca=null;function Ha(t,n,r){Se(ff,n._currentValue),n._currentValue=r}function ua(t){t._currentValue=ff.current,ne(ff)}function df(t,n,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===r)break;t=t.return}}function hf(t,n,r,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var y=u.child;d=d.firstContext;e:for(;d!==null;){var w=d;d=u;for(var I=0;I<n.length;I++)if(w.context===n[I]){d.lanes|=r,w=d.alternate,w!==null&&(w.lanes|=r),df(d.return,r,t),o||(y=null);break e}d=w.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=r,d=y.alternate,d!==null&&(d.lanes|=r),df(y,r,t),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===t){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function us(t,n,r,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var w=u.type;ii(u.pendingProps.value,y.value)||(t!==null?t.push(w):t=[w])}}else if(u===ye.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push($o):t=[$o])}u=u.return}t!==null&&hf(n,t,r,o),n.flags|=262144}function Xl(t){for(t=t.firstContext;t!==null;){if(!ii(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Rr(t){Ar=t,ca=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return wm(Ar,t)}function Wl(t,n){return Ar===null&&Rr(t),wm(t,n)}function wm(t,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},ca===null){if(t===null)throw Error(s(308));ca=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ca=ca.next=n;return r}var Dy=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(r,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(r){return r()})}},Uy=a.unstable_scheduleCallback,Ny=a.unstable_NormalPriority,ln={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pf(){return{controller:new Dy,data:new Map,refCount:0}}function Ao(t){t.refCount--,t.refCount===0&&Uy(Ny,function(){t.controller.abort()})}var Ro=null,mf=0,fs=0,ds=null;function Ly(t,n){if(Ro===null){var r=Ro=[];mf=0,fs=_d(),ds={status:"pending",value:void 0,then:function(o){r.push(o)}}}return mf++,n.then(Am,Am),n}function Am(){if(--mf===0&&Ro!==null){ds!==null&&(ds.status="fulfilled");var t=Ro;Ro=null,fs=0,ds=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Oy(t,n){var r=[],o={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<r.length;u++)(0,r[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),o}var Rm=z.S;z.S=function(t,n){fv=de(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ly(t,n),Rm!==null&&Rm(t,n)};var Cr=P(null);function gf(){var t=Cr.current;return t!==null?t:Wt.pooledCache}function ql(t,n){n===null?Se(Cr,Cr.current):Se(Cr,n.pool)}function Cm(){var t=gf();return t===null?null:{parent:ln._currentValue,pool:t}}var hs=Error(s(460)),vf=Error(s(474)),Yl=Error(s(542)),Zl={then:function(){}};function Dm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Um(t,n,r){switch(r=t[r],r===void 0?t.push(n):r!==n&&(n.then(ra,ra),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Lm(t),t;default:if(typeof n.status=="string")n.then(ra,ra);else{if(t=Wt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Lm(t),t}throw Ur=n,hs}}function Dr(t){try{var n=t._init;return n(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(Ur=r,hs):r}}var Ur=null;function Nm(){if(Ur===null)throw Error(s(459));var t=Ur;return Ur=null,t}function Lm(t){if(t===hs||t===Yl)throw Error(s(483))}var ps=null,Co=0;function Kl(t){var n=Co;return Co+=1,ps===null&&(ps=[]),Um(ps,t,n)}function Do(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ql(t,n){throw n.$$typeof===x?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Om(t){function n(q,G){if(t){var J=q.deletions;J===null?(q.deletions=[G],q.flags|=16):J.push(G)}}function r(q,G){if(!t)return null;for(;G!==null;)n(q,G),G=G.sibling;return null}function o(q){for(var G=new Map;q!==null;)q.key!==null?G.set(q.key,q):G.set(q.index,q),q=q.sibling;return G}function u(q,G){return q=oa(q,G),q.index=0,q.sibling=null,q}function d(q,G,J){return q.index=J,t?(J=q.alternate,J!==null?(J=J.index,J<G?(q.flags|=67108866,G):J):(q.flags|=67108866,G)):(q.flags|=1048576,G)}function y(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function w(q,G,J,me){return G===null||G.tag!==6?(G=rf(J,q.mode,me),G.return=q,G):(G=u(G,J),G.return=q,G)}function I(q,G,J,me){var We=J.type;return We===T?fe(q,G,J.props.children,me,J.key):G!==null&&(G.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===Y&&Dr(We)===G.type)?(G=u(G,J.props),Do(G,J),G.return=q,G):(G=kl(J.type,J.key,J.props,null,q.mode,me),Do(G,J),G.return=q,G)}function $(q,G,J,me){return G===null||G.tag!==4||G.stateNode.containerInfo!==J.containerInfo||G.stateNode.implementation!==J.implementation?(G=sf(J,q.mode,me),G.return=q,G):(G=u(G,J.children||[]),G.return=q,G)}function fe(q,G,J,me,We){return G===null||G.tag!==7?(G=Tr(J,q.mode,me,We),G.return=q,G):(G=u(G,J),G.return=q,G)}function ve(q,G,J){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=rf(""+G,q.mode,J),G.return=q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case E:return J=kl(G.type,G.key,G.props,null,q.mode,J),Do(J,G),J.return=q,J;case M:return G=sf(G,q.mode,J),G.return=q,G;case Y:return G=Dr(G),ve(q,G,J)}if(pe(G)||ue(G))return G=Tr(G,q.mode,J,null),G.return=q,G;if(typeof G.then=="function")return ve(q,Kl(G),J);if(G.$$typeof===U)return ve(q,Wl(q,G),J);Ql(q,G)}return null}function ee(q,G,J,me){var We=G!==null?G.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return We!==null?null:w(q,G,""+J,me);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case E:return J.key===We?I(q,G,J,me):null;case M:return J.key===We?$(q,G,J,me):null;case Y:return J=Dr(J),ee(q,G,J,me)}if(pe(J)||ue(J))return We!==null?null:fe(q,G,J,me,null);if(typeof J.then=="function")return ee(q,G,Kl(J),me);if(J.$$typeof===U)return ee(q,G,Wl(q,J),me);Ql(q,J)}return null}function se(q,G,J,me,We){if(typeof me=="string"&&me!==""||typeof me=="number"||typeof me=="bigint")return q=q.get(J)||null,w(G,q,""+me,We);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case E:return q=q.get(me.key===null?J:me.key)||null,I(G,q,me,We);case M:return q=q.get(me.key===null?J:me.key)||null,$(G,q,me,We);case Y:return me=Dr(me),se(q,G,J,me,We)}if(pe(me)||ue(me))return q=q.get(J)||null,fe(G,q,me,We,null);if(typeof me.then=="function")return se(q,G,J,Kl(me),We);if(me.$$typeof===U)return se(q,G,J,Wl(G,me),We);Ql(G,me)}return null}function Fe(q,G,J,me){for(var We=null,Rt=null,He=G,ct=G=0,xt=null;He!==null&&ct<J.length;ct++){He.index>ct?(xt=He,He=null):xt=He.sibling;var Ct=ee(q,He,J[ct],me);if(Ct===null){He===null&&(He=xt);break}t&&He&&Ct.alternate===null&&n(q,He),G=d(Ct,G,ct),Rt===null?We=Ct:Rt.sibling=Ct,Rt=Ct,He=xt}if(ct===J.length)return r(q,He),bt&&la(q,ct),We;if(He===null){for(;ct<J.length;ct++)He=ve(q,J[ct],me),He!==null&&(G=d(He,G,ct),Rt===null?We=He:Rt.sibling=He,Rt=He);return bt&&la(q,ct),We}for(He=o(He);ct<J.length;ct++)xt=se(He,q,ct,J[ct],me),xt!==null&&(t&&xt.alternate!==null&&He.delete(xt.key===null?ct:xt.key),G=d(xt,G,ct),Rt===null?We=xt:Rt.sibling=xt,Rt=xt);return t&&He.forEach(function(ar){return n(q,ar)}),bt&&la(q,ct),We}function Je(q,G,J,me){if(J==null)throw Error(s(151));for(var We=null,Rt=null,He=G,ct=G=0,xt=null,Ct=J.next();He!==null&&!Ct.done;ct++,Ct=J.next()){He.index>ct?(xt=He,He=null):xt=He.sibling;var ar=ee(q,He,Ct.value,me);if(ar===null){He===null&&(He=xt);break}t&&He&&ar.alternate===null&&n(q,He),G=d(ar,G,ct),Rt===null?We=ar:Rt.sibling=ar,Rt=ar,He=xt}if(Ct.done)return r(q,He),bt&&la(q,ct),We;if(He===null){for(;!Ct.done;ct++,Ct=J.next())Ct=ve(q,Ct.value,me),Ct!==null&&(G=d(Ct,G,ct),Rt===null?We=Ct:Rt.sibling=Ct,Rt=Ct);return bt&&la(q,ct),We}for(He=o(He);!Ct.done;ct++,Ct=J.next())Ct=se(He,q,ct,Ct.value,me),Ct!==null&&(t&&Ct.alternate!==null&&He.delete(Ct.key===null?ct:Ct.key),G=d(Ct,G,ct),Rt===null?We=Ct:Rt.sibling=Ct,Rt=Ct);return t&&He.forEach(function(XS){return n(q,XS)}),bt&&la(q,ct),We}function kt(q,G,J,me){if(typeof J=="object"&&J!==null&&J.type===T&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case E:e:{for(var We=J.key;G!==null;){if(G.key===We){if(We=J.type,We===T){if(G.tag===7){r(q,G.sibling),me=u(G,J.props.children),me.return=q,q=me;break e}}else if(G.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===Y&&Dr(We)===G.type){r(q,G.sibling),me=u(G,J.props),Do(me,J),me.return=q,q=me;break e}r(q,G);break}else n(q,G);G=G.sibling}J.type===T?(me=Tr(J.props.children,q.mode,me,J.key),me.return=q,q=me):(me=kl(J.type,J.key,J.props,null,q.mode,me),Do(me,J),me.return=q,q=me)}return y(q);case M:e:{for(We=J.key;G!==null;){if(G.key===We)if(G.tag===4&&G.stateNode.containerInfo===J.containerInfo&&G.stateNode.implementation===J.implementation){r(q,G.sibling),me=u(G,J.children||[]),me.return=q,q=me;break e}else{r(q,G);break}else n(q,G);G=G.sibling}me=sf(J,q.mode,me),me.return=q,q=me}return y(q);case Y:return J=Dr(J),kt(q,G,J,me)}if(pe(J))return Fe(q,G,J,me);if(ue(J)){if(We=ue(J),typeof We!="function")throw Error(s(150));return J=We.call(J),Je(q,G,J,me)}if(typeof J.then=="function")return kt(q,G,Kl(J),me);if(J.$$typeof===U)return kt(q,G,Wl(q,J),me);Ql(q,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,G!==null&&G.tag===6?(r(q,G.sibling),me=u(G,J),me.return=q,q=me):(r(q,G),me=rf(J,q.mode,me),me.return=q,q=me),y(q)):r(q,G)}return function(q,G,J,me){try{Co=0;var We=kt(q,G,J,me);return ps=null,We}catch(He){if(He===hs||He===Yl)throw He;var Rt=ai(29,He,null,q.mode);return Rt.lanes=me,Rt.return=q,Rt}finally{}}}var Nr=Om(!0),Pm=Om(!1),Ga=!1;function _f(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Va(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ka(t,n,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Lt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Vl(t),_m(t,null,r),n}return Gl(t,o,n,r),Vl(t)}function Uo(t,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,fo(t,r)}}function yf(t,n){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var u=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var y={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};d===null?u=d=y:d=d.next=y,r=r.next}while(r!==null);d===null?u=d=n:d=d.next=n}else u=d=n;r={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=n:t.next=n,r.lastBaseUpdate=n}var Sf=!1;function No(){if(Sf){var t=ds;if(t!==null)throw t}}function Lo(t,n,r,o){Sf=!1;var u=t.updateQueue;Ga=!1;var d=u.firstBaseUpdate,y=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var I=w,$=I.next;I.next=null,y===null?d=$:y.next=$,y=I;var fe=t.alternate;fe!==null&&(fe=fe.updateQueue,w=fe.lastBaseUpdate,w!==y&&(w===null?fe.firstBaseUpdate=$:w.next=$,fe.lastBaseUpdate=I))}if(d!==null){var ve=u.baseState;y=0,fe=$=I=null,w=d;do{var ee=w.lane&-536870913,se=ee!==w.lane;if(se?(_t&ee)===ee:(o&ee)===ee){ee!==0&&ee===fs&&(Sf=!0),fe!==null&&(fe=fe.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var Fe=t,Je=w;ee=n;var kt=r;switch(Je.tag){case 1:if(Fe=Je.payload,typeof Fe=="function"){ve=Fe.call(kt,ve,ee);break e}ve=Fe;break e;case 3:Fe.flags=Fe.flags&-65537|128;case 0:if(Fe=Je.payload,ee=typeof Fe=="function"?Fe.call(kt,ve,ee):Fe,ee==null)break e;ve=g({},ve,ee);break e;case 2:Ga=!0}}ee=w.callback,ee!==null&&(t.flags|=64,se&&(t.flags|=8192),se=u.callbacks,se===null?u.callbacks=[ee]:se.push(ee))}else se={lane:ee,tag:w.tag,payload:w.payload,callback:w.callback,next:null},fe===null?($=fe=se,I=ve):fe=fe.next=se,y|=ee;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;se=w,w=se.next,se.next=null,u.lastBaseUpdate=se,u.shared.pending=null}}while(!0);fe===null&&(I=ve),u.baseState=I,u.firstBaseUpdate=$,u.lastBaseUpdate=fe,d===null&&(u.shared.lanes=0),Ya|=y,t.lanes=y,t.memoizedState=ve}}function Bm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function zm(t,n){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)Bm(r[t],n)}var ms=P(null),Jl=P(0);function Im(t,n){t=xa,Se(Jl,t),Se(ms,n),xa=t|n.baseLanes}function bf(){Se(Jl,xa),Se(ms,ms.current)}function Ef(){xa=Jl.current,ne(ms),ne(Jl)}var ri=P(null),Ei=null;function ja(t){var n=t.alternate;Se(sn,sn.current&1),Se(ri,t),Ei===null&&(n===null||ms.current!==null||n.memoizedState!==null)&&(Ei=t)}function Mf(t){Se(sn,sn.current),Se(ri,t),Ei===null&&(Ei=t)}function Fm(t){t.tag===22?(Se(sn,sn.current),Se(ri,t),Ei===null&&(Ei=t)):Xa()}function Xa(){Se(sn,sn.current),Se(ri,ri.current)}function si(t){ne(ri),Ei===t&&(Ei=null),ne(sn)}var sn=P(0);function $l(t){for(var n=t;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Dd(r)||Ud(r)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var fa=0,ot=null,Gt=null,cn=null,ec=!1,gs=!1,Lr=!1,tc=0,Oo=0,vs=null,Py=0;function an(){throw Error(s(321))}function Tf(t,n){if(n===null)return!1;for(var r=0;r<n.length&&r<t.length;r++)if(!ii(t[r],n[r]))return!1;return!0}function wf(t,n,r,o,u,d){return fa=d,ot=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?bg:Gf,Lr=!1,d=r(o,u),Lr=!1,gs&&(d=Gm(n,r,o,u)),Hm(t),d}function Hm(t){z.H=zo;var n=Gt!==null&&Gt.next!==null;if(fa=0,cn=Gt=ot=null,ec=!1,Oo=0,vs=null,n)throw Error(s(300));t===null||un||(t=t.dependencies,t!==null&&Xl(t)&&(un=!0))}function Gm(t,n,r,o){ot=t;var u=0;do{if(gs&&(vs=null),Oo=0,gs=!1,25<=u)throw Error(s(301));if(u+=1,cn=Gt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}z.H=Eg,d=n(r,o)}while(gs);return d}function By(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?Po(n):n,t=t.useState()[0],(Gt!==null?Gt.memoizedState:null)!==t&&(ot.flags|=1024),n}function Af(){var t=tc!==0;return tc=0,t}function Rf(t,n,r){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~r}function Cf(t){if(ec){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}ec=!1}fa=0,cn=Gt=ot=null,gs=!1,Oo=tc=0,vs=null}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?ot.memoizedState=cn=t:cn=cn.next=t,cn}function on(){if(Gt===null){var t=ot.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var n=cn===null?ot.memoizedState:cn.next;if(n!==null)cn=n,Gt=t;else{if(t===null)throw ot.alternate===null?Error(s(467)):Error(s(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},cn===null?ot.memoizedState=cn=t:cn=cn.next=t}return cn}function nc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Po(t){var n=Oo;return Oo+=1,vs===null&&(vs=[]),t=Um(vs,t,n),n=ot,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?bg:Gf),t}function ic(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Po(t);if(t.$$typeof===U)return Rn(t)}throw Error(s(438,String(t)))}function Df(t){var n=null,r=ot.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var o=ot.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=nc(),ot.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(t),o=0;o<t;o++)r[o]=C;return n.index++,r}function da(t,n){return typeof n=="function"?n(t):n}function ac(t){var n=on();return Uf(n,Gt,t)}function Uf(t,n,r){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=r;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var y=u.next;u.next=d.next,d.next=y}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var w=y=null,I=null,$=n,fe=!1;do{var ve=$.lane&-536870913;if(ve!==$.lane?(_t&ve)===ve:(fa&ve)===ve){var ee=$.revertLane;if(ee===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),ve===fs&&(fe=!0);else if((fa&ee)===ee){$=$.next,ee===fs&&(fe=!0);continue}else ve={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(w=I=ve,y=d):I=I.next=ve,ot.lanes|=ee,Ya|=ee;ve=$.action,Lr&&r(d,ve),d=$.hasEagerState?$.eagerState:r(d,ve)}else ee={lane:ve,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(w=I=ee,y=d):I=I.next=ee,ot.lanes|=ve,Ya|=ve;$=$.next}while($!==null&&$!==n);if(I===null?y=d:I.next=w,!ii(d,t.memoizedState)&&(un=!0,fe&&(r=ds,r!==null)))throw r;t.memoizedState=d,t.baseState=y,t.baseQueue=I,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Nf(t){var n=on(),r=n.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=t;var o=r.dispatch,u=r.pending,d=n.memoizedState;if(u!==null){r.pending=null;var y=u=u.next;do d=t(d,y.action),y=y.next;while(y!==u);ii(d,n.memoizedState)||(un=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),r.lastRenderedState=d}return[d,o]}function Vm(t,n,r){var o=ot,u=on(),d=bt;if(d){if(r===void 0)throw Error(s(407));r=r()}else r=n();var y=!ii((Gt||u).memoizedState,r);if(y&&(u.memoizedState=r,un=!0),u=u.queue,Pf(Xm.bind(null,o,u,t),[t]),u.getSnapshot!==n||y||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,_s(9,{destroy:void 0},jm.bind(null,o,u,r,n),null),Wt===null)throw Error(s(349));d||(fa&127)!==0||km(o,n,r)}return r}function km(t,n,r){t.flags|=16384,t={getSnapshot:n,value:r},n=ot.updateQueue,n===null?(n=nc(),ot.updateQueue=n,n.stores=[t]):(r=n.stores,r===null?n.stores=[t]:r.push(t))}function jm(t,n,r,o){n.value=r,n.getSnapshot=o,Wm(n)&&qm(t)}function Xm(t,n,r){return r(function(){Wm(n)&&qm(t)})}function Wm(t){var n=t.getSnapshot;t=t.value;try{var r=n();return!ii(t,r)}catch{return!0}}function qm(t){var n=Mr(t,2);n!==null&&ei(n,t,2)}function Lf(t){var n=kn();if(typeof t=="function"){var r=t;if(t=r(),Lr){Pe(!0);try{r()}finally{Pe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:t},n}function Ym(t,n,r,o){return t.baseState=r,Uf(t,Gt,typeof o=="function"?o:da)}function zy(t,n,r,o,u){if(oc(t))throw Error(s(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};z.T!==null?r(!0):d.isTransition=!1,o(d),r=n.pending,r===null?(d.next=n.pending=d,Zm(n,d)):(d.next=r.next,n.pending=r.next=d)}}function Zm(t,n){var r=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=z.T,y={};z.T=y;try{var w=r(u,o),I=z.S;I!==null&&I(y,w),Km(t,n,w)}catch($){Of(t,n,$)}finally{d!==null&&y.types!==null&&(d.types=y.types),z.T=d}}else try{d=r(u,o),Km(t,n,d)}catch($){Of(t,n,$)}}function Km(t,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){Qm(t,n,o)},function(o){return Of(t,n,o)}):Qm(t,n,r)}function Qm(t,n,r){n.status="fulfilled",n.value=r,Jm(n),t.state=r,n=t.pending,n!==null&&(r=n.next,r===n?t.pending=null:(r=r.next,n.next=r,Zm(t,r)))}function Of(t,n,r){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=r,Jm(n),n=n.next;while(n!==o)}t.action=null}function Jm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function $m(t,n){return n}function eg(t,n){if(bt){var r=Wt.formState;if(r!==null){e:{var o=ot;if(bt){if(Zt){t:{for(var u=Zt,d=bi;u.nodeType!==8;){if(!d){u=null;break t}if(u=Mi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Zt=Mi(u.nextSibling),o=u.data==="F!";break e}}Fa(o)}o=!1}o&&(n=r[0])}}return r=kn(),r.memoizedState=r.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$m,lastRenderedState:n},r.queue=o,r=xg.bind(null,ot,o),o.dispatch=r,o=Lf(!1),d=Hf.bind(null,ot,!1,o.queue),o=kn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,r=zy.bind(null,ot,u,d,r),u.dispatch=r,o.memoizedState=t,[n,r,!1]}function tg(t){var n=on();return ng(n,Gt,t)}function ng(t,n,r){if(n=Uf(t,n,$m)[0],t=ac(da)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Po(n)}catch(y){throw y===hs?Yl:y}else o=n;n=on();var u=n.queue,d=u.dispatch;return r!==n.memoizedState&&(ot.flags|=2048,_s(9,{destroy:void 0},Iy.bind(null,u,r),null)),[o,d,t]}function Iy(t,n){t.action=n}function ig(t){var n=on(),r=Gt;if(r!==null)return ng(n,r,t);on(),n=n.memoizedState,r=on();var o=r.queue.dispatch;return r.memoizedState=t,[n,o,!1]}function _s(t,n,r,o){return t={tag:t,create:r,deps:o,inst:n,next:null},n=ot.updateQueue,n===null&&(n=nc(),ot.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,n.lastEffect=t),t}function ag(){return on().memoizedState}function rc(t,n,r,o){var u=kn();ot.flags|=t,u.memoizedState=_s(1|n,{destroy:void 0},r,o===void 0?null:o)}function sc(t,n,r,o){var u=on();o=o===void 0?null:o;var d=u.memoizedState.inst;Gt!==null&&o!==null&&Tf(o,Gt.memoizedState.deps)?u.memoizedState=_s(n,d,r,o):(ot.flags|=t,u.memoizedState=_s(1|n,d,r,o))}function rg(t,n){rc(8390656,8,t,n)}function Pf(t,n){sc(2048,8,t,n)}function Fy(t){ot.flags|=4;var n=ot.updateQueue;if(n===null)n=nc(),ot.updateQueue=n,n.events=[t];else{var r=n.events;r===null?n.events=[t]:r.push(t)}}function sg(t){var n=on().memoizedState;return Fy({ref:n,nextImpl:t}),function(){if((Lt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function og(t,n){return sc(4,2,t,n)}function lg(t,n){return sc(4,4,t,n)}function cg(t,n){if(typeof n=="function"){t=t();var r=n(t);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function ug(t,n,r){r=r!=null?r.concat([t]):null,sc(4,4,cg.bind(null,n,t),r)}function Bf(){}function fg(t,n){var r=on();n=n===void 0?null:n;var o=r.memoizedState;return n!==null&&Tf(n,o[1])?o[0]:(r.memoizedState=[t,n],t)}function dg(t,n){var r=on();n=n===void 0?null:n;var o=r.memoizedState;if(n!==null&&Tf(n,o[1]))return o[0];if(o=t(),Lr){Pe(!0);try{t()}finally{Pe(!1)}}return r.memoizedState=[o,n],o}function zf(t,n,r){return r===void 0||(fa&1073741824)!==0&&(_t&261930)===0?t.memoizedState=n:(t.memoizedState=r,t=hv(),ot.lanes|=t,Ya|=t,r)}function hg(t,n,r,o){return ii(r,n)?r:ms.current!==null?(t=zf(t,r,o),ii(t,n)||(un=!0),t):(fa&42)===0||(fa&1073741824)!==0&&(_t&261930)===0?(un=!0,t.memoizedState=r):(t=hv(),ot.lanes|=t,Ya|=t,n)}function pg(t,n,r,o,u){var d=Q.p;Q.p=d!==0&&8>d?d:8;var y=z.T,w={};z.T=w,Hf(t,!1,n,r);try{var I=u(),$=z.S;if($!==null&&$(w,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var fe=Oy(I,o);Bo(t,n,fe,ci(t))}else Bo(t,n,o,ci(t))}catch(ve){Bo(t,n,{then:function(){},status:"rejected",reason:ve},ci())}finally{Q.p=d,y!==null&&w.types!==null&&(y.types=w.types),z.T=y}}function Hy(){}function If(t,n,r,o){if(t.tag!==5)throw Error(s(476));var u=mg(t).queue;pg(t,u,n,K,r===null?Hy:function(){return gg(t),r(o)})}function mg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:K},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:r},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function gg(t){var n=mg(t);n.next===null&&(n=t.alternate.memoizedState),Bo(t,n.next.queue,{},ci())}function Ff(){return Rn($o)}function vg(){return on().memoizedState}function _g(){return on().memoizedState}function Gy(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var r=ci();t=Va(r);var o=ka(n,t,r);o!==null&&(ei(o,n,r),Uo(o,n,r)),n={cache:pf()},t.payload=n;return}n=n.return}}function Vy(t,n,r){var o=ci();r={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},oc(t)?yg(n,r):(r=nf(t,n,r,o),r!==null&&(ei(r,t,o),Sg(r,n,o)))}function xg(t,n,r){var o=ci();Bo(t,n,r,o)}function Bo(t,n,r,o){var u={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(oc(t))yg(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var y=n.lastRenderedState,w=d(y,r);if(u.hasEagerState=!0,u.eagerState=w,ii(w,y))return Gl(t,n,u,0),Wt===null&&Hl(),!1}catch{}finally{}if(r=nf(t,n,u,o),r!==null)return ei(r,t,o),Sg(r,n,o),!0}return!1}function Hf(t,n,r,o){if(o={lane:2,revertLane:_d(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},oc(t)){if(n)throw Error(s(479))}else n=nf(t,r,o,2),n!==null&&ei(n,t,2)}function oc(t){var n=t.alternate;return t===ot||n!==null&&n===ot}function yg(t,n){gs=ec=!0;var r=t.pending;r===null?n.next=n:(n.next=r.next,r.next=n),t.pending=n}function Sg(t,n,r){if((r&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,fo(t,r)}}var zo={readContext:Rn,use:ic,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an};zo.useEffectEvent=an;var bg={readContext:Rn,use:ic,useCallback:function(t,n){return kn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:rg,useImperativeHandle:function(t,n,r){r=r!=null?r.concat([t]):null,rc(4194308,4,cg.bind(null,n,t),r)},useLayoutEffect:function(t,n){return rc(4194308,4,t,n)},useInsertionEffect:function(t,n){rc(4,2,t,n)},useMemo:function(t,n){var r=kn();n=n===void 0?null:n;var o=t();if(Lr){Pe(!0);try{t()}finally{Pe(!1)}}return r.memoizedState=[o,n],o},useReducer:function(t,n,r){var o=kn();if(r!==void 0){var u=r(n);if(Lr){Pe(!0);try{r(n)}finally{Pe(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Vy.bind(null,ot,t),[o.memoizedState,t]},useRef:function(t){var n=kn();return t={current:t},n.memoizedState=t},useState:function(t){t=Lf(t);var n=t.queue,r=xg.bind(null,ot,n);return n.dispatch=r,[t.memoizedState,r]},useDebugValue:Bf,useDeferredValue:function(t,n){var r=kn();return zf(r,t,n)},useTransition:function(){var t=Lf(!1);return t=pg.bind(null,ot,t.queue,!0,!1),kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,r){var o=ot,u=kn();if(bt){if(r===void 0)throw Error(s(407));r=r()}else{if(r=n(),Wt===null)throw Error(s(349));(_t&127)!==0||km(o,n,r)}u.memoizedState=r;var d={value:r,getSnapshot:n};return u.queue=d,rg(Xm.bind(null,o,d,t),[t]),o.flags|=2048,_s(9,{destroy:void 0},jm.bind(null,o,d,r,n),null),r},useId:function(){var t=kn(),n=Wt.identifierPrefix;if(bt){var r=Xi,o=ji;r=(o&~(1<<32-tt(o)-1)).toString(32)+r,n="_"+n+"R_"+r,r=tc++,0<r&&(n+="H"+r.toString(32)),n+="_"}else r=Py++,n="_"+n+"r_"+r.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Ff,useFormState:eg,useActionState:eg,useOptimistic:function(t){var n=kn();n.memoizedState=n.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=Hf.bind(null,ot,!0,r),r.dispatch=n,[t,n]},useMemoCache:Df,useCacheRefresh:function(){return kn().memoizedState=Gy.bind(null,ot)},useEffectEvent:function(t){var n=kn(),r={impl:t};return n.memoizedState=r,function(){if((Lt&2)!==0)throw Error(s(440));return r.impl.apply(void 0,arguments)}}},Gf={readContext:Rn,use:ic,useCallback:fg,useContext:Rn,useEffect:Pf,useImperativeHandle:ug,useInsertionEffect:og,useLayoutEffect:lg,useMemo:dg,useReducer:ac,useRef:ag,useState:function(){return ac(da)},useDebugValue:Bf,useDeferredValue:function(t,n){var r=on();return hg(r,Gt.memoizedState,t,n)},useTransition:function(){var t=ac(da)[0],n=on().memoizedState;return[typeof t=="boolean"?t:Po(t),n]},useSyncExternalStore:Vm,useId:vg,useHostTransitionStatus:Ff,useFormState:tg,useActionState:tg,useOptimistic:function(t,n){var r=on();return Ym(r,Gt,t,n)},useMemoCache:Df,useCacheRefresh:_g};Gf.useEffectEvent=sg;var Eg={readContext:Rn,use:ic,useCallback:fg,useContext:Rn,useEffect:Pf,useImperativeHandle:ug,useInsertionEffect:og,useLayoutEffect:lg,useMemo:dg,useReducer:Nf,useRef:ag,useState:function(){return Nf(da)},useDebugValue:Bf,useDeferredValue:function(t,n){var r=on();return Gt===null?zf(r,t,n):hg(r,Gt.memoizedState,t,n)},useTransition:function(){var t=Nf(da)[0],n=on().memoizedState;return[typeof t=="boolean"?t:Po(t),n]},useSyncExternalStore:Vm,useId:vg,useHostTransitionStatus:Ff,useFormState:ig,useActionState:ig,useOptimistic:function(t,n){var r=on();return Gt!==null?Ym(r,Gt,t,n):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:Df,useCacheRefresh:_g};Eg.useEffectEvent=sg;function Vf(t,n,r,o){n=t.memoizedState,r=r(o,n),r=r==null?n:g({},n,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var kf={enqueueSetState:function(t,n,r){t=t._reactInternals;var o=ci(),u=Va(o);u.payload=n,r!=null&&(u.callback=r),n=ka(t,u,o),n!==null&&(ei(n,t,o),Uo(n,t,o))},enqueueReplaceState:function(t,n,r){t=t._reactInternals;var o=ci(),u=Va(o);u.tag=1,u.payload=n,r!=null&&(u.callback=r),n=ka(t,u,o),n!==null&&(ei(n,t,o),Uo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var r=ci(),o=Va(r);o.tag=2,n!=null&&(o.callback=n),n=ka(t,o,r),n!==null&&(ei(n,t,r),Uo(n,t,r))}};function Mg(t,n,r,o,u,d,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,y):n.prototype&&n.prototype.isPureReactComponent?!Eo(r,o)||!Eo(u,d):!0}function Tg(t,n,r,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,o),n.state!==t&&kf.enqueueReplaceState(n,n.state,null)}function Or(t,n){var r=n;if("ref"in n){r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}if(t=t.defaultProps){r===n&&(r=g({},r));for(var u in t)r[u]===void 0&&(r[u]=t[u])}return r}function wg(t){Fl(t)}function Ag(t){console.error(t)}function Rg(t){Fl(t)}function lc(t,n){try{var r=t.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Cg(t,n,r){try{var o=t.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function jf(t,n,r){return r=Va(r),r.tag=3,r.payload={element:null},r.callback=function(){lc(t,n)},r}function Dg(t){return t=Va(t),t.tag=3,t}function Ug(t,n,r,o){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){Cg(n,r,o)}}var y=r.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){Cg(n,r,o),typeof u!="function"&&(Za===null?Za=new Set([this]):Za.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function ky(t,n,r,o,u){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=r.alternate,n!==null&&us(n,r,u,!0),r=ri.current,r!==null){switch(r.tag){case 31:case 13:return Ei===null?yc():r.alternate===null&&rn===0&&(rn=3),r.flags&=-257,r.flags|=65536,r.lanes=u,o===Zl?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([o]):n.add(o),md(t,o,u)),!1;case 22:return r.flags|=65536,o===Zl?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([o]):r.add(o)),md(t,o,u)),!1}throw Error(s(435,r.tag))}return md(t,o,u),yc(),!1}if(bt)return n=ri.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==cf&&(t=Error(s(422),{cause:o}),wo(xi(t,r)))):(o!==cf&&(n=Error(s(423),{cause:o}),wo(xi(n,r))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=xi(o,r),u=jf(t.stateNode,o,u),yf(t,u),rn!==4&&(rn=2)),!1;var d=Error(s(520),{cause:o});if(d=xi(d,r),Xo===null?Xo=[d]:Xo.push(d),rn!==4&&(rn=2),n===null)return!0;o=xi(o,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,t=u&-u,r.lanes|=t,t=jf(r.stateNode,o,t),yf(r,t),!1;case 1:if(n=r.type,d=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Za===null||!Za.has(d))))return r.flags|=65536,u&=-u,r.lanes|=u,u=Dg(u),Ug(u,t,r,o),yf(r,u),!1}r=r.return}while(r!==null);return!1}var Xf=Error(s(461)),un=!1;function Cn(t,n,r,o){n.child=t===null?Pm(n,null,r,o):Nr(n,t.child,r,o)}function Ng(t,n,r,o,u){r=r.render;var d=n.ref;if("ref"in o){var y={};for(var w in o)w!=="ref"&&(y[w]=o[w])}else y=o;return Rr(n),o=wf(t,n,r,y,d,u),w=Af(),t!==null&&!un?(Rf(t,n,u),ha(t,n,u)):(bt&&w&&of(n),n.flags|=1,Cn(t,n,o,u),n.child)}function Lg(t,n,r,o,u){if(t===null){var d=r.type;return typeof d=="function"&&!af(d)&&d.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=d,Og(t,n,d,o,u)):(t=kl(r.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!$f(t,u)){var y=d.memoizedProps;if(r=r.compare,r=r!==null?r:Eo,r(y,o)&&t.ref===n.ref)return ha(t,n,u)}return n.flags|=1,t=oa(d,o),t.ref=n.ref,t.return=n,n.child=t}function Og(t,n,r,o,u){if(t!==null){var d=t.memoizedProps;if(Eo(d,o)&&t.ref===n.ref)if(un=!1,n.pendingProps=o=d,$f(t,u))(t.flags&131072)!==0&&(un=!0);else return n.lanes=t.lanes,ha(t,n,u)}return Wf(t,n,r,o,u)}function Pg(t,n,r,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|r:r,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return Bg(t,n,d,r,o)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&ql(n,d!==null?d.cachePool:null),d!==null?Im(n,d):bf(),Fm(n);else return o=n.lanes=536870912,Bg(t,n,d!==null?d.baseLanes|r:r,r,o)}else d!==null?(ql(n,d.cachePool),Im(n,d),Xa(),n.memoizedState=null):(t!==null&&ql(n,null),bf(),Xa());return Cn(t,n,u,r),n.child}function Io(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Bg(t,n,r,o,u){var d=gf();return d=d===null?null:{parent:ln._currentValue,pool:d},n.memoizedState={baseLanes:r,cachePool:d},t!==null&&ql(n,null),bf(),Fm(n),t!==null&&us(t,n,o,!0),n.childLanes=u,null}function cc(t,n){return n=fc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function zg(t,n,r){return Nr(n,t.child,null,r),t=cc(n,n.pendingProps),t.flags|=2,si(n),n.memoizedState=null,t}function jy(t,n,r){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(bt){if(o.mode==="hidden")return t=cc(n,o),n.lanes=536870912,Io(null,t);if(Mf(n),(t=Zt)?(t=Zv(t,bi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:za!==null?{id:ji,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},r=ym(t),r.return=n,n.child=r,An=n,Zt=null)):t=null,t===null)throw Fa(n);return n.lanes=536870912,null}return cc(n,o)}var d=t.memoizedState;if(d!==null){var y=d.dehydrated;if(Mf(n),u)if(n.flags&256)n.flags&=-257,n=zg(t,n,r);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(un||us(t,n,r,!1),u=(r&t.childLanes)!==0,un||u){if(o=Wt,o!==null&&(y=ki(o,r),y!==0&&y!==d.retryLane))throw d.retryLane=y,Mr(t,y),ei(o,t,y),Xf;yc(),n=zg(t,n,r)}else t=d.treeContext,Zt=Mi(y.nextSibling),An=n,bt=!0,Ia=null,bi=!1,t!==null&&Em(n,t),n=cc(n,o),n.flags|=4096;return n}return t=oa(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function uc(t,n){var r=n.ref;if(r===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(s(284));(t===null||t.ref!==r)&&(n.flags|=4194816)}}function Wf(t,n,r,o,u){return Rr(n),r=wf(t,n,r,o,void 0,u),o=Af(),t!==null&&!un?(Rf(t,n,u),ha(t,n,u)):(bt&&o&&of(n),n.flags|=1,Cn(t,n,r,u),n.child)}function Ig(t,n,r,o,u,d){return Rr(n),n.updateQueue=null,r=Gm(n,o,r,u),Hm(t),o=Af(),t!==null&&!un?(Rf(t,n,d),ha(t,n,d)):(bt&&o&&of(n),n.flags|=1,Cn(t,n,r,d),n.child)}function Fg(t,n,r,o,u){if(Rr(n),n.stateNode===null){var d=ss,y=r.contextType;typeof y=="object"&&y!==null&&(d=Rn(y)),d=new r(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=kf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},_f(n),y=r.contextType,d.context=typeof y=="object"&&y!==null?Rn(y):ss,d.state=n.memoizedState,y=r.getDerivedStateFromProps,typeof y=="function"&&(Vf(n,r,y,o),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&kf.enqueueReplaceState(d,d.state,null),Lo(n,o,d,u),No(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var w=n.memoizedProps,I=Or(r,w);d.props=I;var $=d.context,fe=r.contextType;y=ss,typeof fe=="object"&&fe!==null&&(y=Rn(fe));var ve=r.getDerivedStateFromProps;fe=typeof ve=="function"||typeof d.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,fe||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(w||$!==y)&&Tg(n,d,o,y),Ga=!1;var ee=n.memoizedState;d.state=ee,Lo(n,o,d,u),No(),$=n.memoizedState,w||ee!==$||Ga?(typeof ve=="function"&&(Vf(n,r,ve,o),$=n.memoizedState),(I=Ga||Mg(n,r,I,o,ee,$,y))?(fe||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),d.props=o,d.state=$,d.context=y,o=I):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,xf(t,n),y=n.memoizedProps,fe=Or(r,y),d.props=fe,ve=n.pendingProps,ee=d.context,$=r.contextType,I=ss,typeof $=="object"&&$!==null&&(I=Rn($)),w=r.getDerivedStateFromProps,($=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==ve||ee!==I)&&Tg(n,d,o,I),Ga=!1,ee=n.memoizedState,d.state=ee,Lo(n,o,d,u),No();var se=n.memoizedState;y!==ve||ee!==se||Ga||t!==null&&t.dependencies!==null&&Xl(t.dependencies)?(typeof w=="function"&&(Vf(n,r,w,o),se=n.memoizedState),(fe=Ga||Mg(n,r,fe,o,ee,se,I)||t!==null&&t.dependencies!==null&&Xl(t.dependencies))?($||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,se,I),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,se,I)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&ee===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ee===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=se),d.props=o,d.state=se,d.context=I,o=fe):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&ee===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ee===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,uc(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=Nr(n,t.child,null,u),n.child=Nr(n,null,r,u)):Cn(t,n,r,u),n.memoizedState=d.state,t=n.child):t=ha(t,n,u),t}function Hg(t,n,r,o){return wr(),n.flags|=256,Cn(t,n,r,o),n.child}var qf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yf(t){return{baseLanes:t,cachePool:Cm()}}function Zf(t,n,r){return t=t!==null?t.childLanes&~r:0,n&&(t|=li),t}function Gg(t,n,r){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,y;if((y=d)||(y=t!==null&&t.memoizedState===null?!1:(sn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(bt){if(u?ja(n):Xa(),(t=Zt)?(t=Zv(t,bi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:za!==null?{id:ji,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},r=ym(t),r.return=n,n.child=r,An=n,Zt=null)):t=null,t===null)throw Fa(n);return Ud(t)?n.lanes=32:n.lanes=536870912,null}var w=o.children;return o=o.fallback,u?(Xa(),u=n.mode,w=fc({mode:"hidden",children:w},u),o=Tr(o,u,r,null),w.return=n,o.return=n,w.sibling=o,n.child=w,o=n.child,o.memoizedState=Yf(r),o.childLanes=Zf(t,y,r),n.memoizedState=qf,Io(null,o)):(ja(n),Kf(n,w))}var I=t.memoizedState;if(I!==null&&(w=I.dehydrated,w!==null)){if(d)n.flags&256?(ja(n),n.flags&=-257,n=Qf(t,n,r)):n.memoizedState!==null?(Xa(),n.child=t.child,n.flags|=128,n=null):(Xa(),w=o.fallback,u=n.mode,o=fc({mode:"visible",children:o.children},u),w=Tr(w,u,r,null),w.flags|=2,o.return=n,w.return=n,o.sibling=w,n.child=o,Nr(n,t.child,null,r),o=n.child,o.memoizedState=Yf(r),o.childLanes=Zf(t,y,r),n.memoizedState=qf,n=Io(null,o));else if(ja(n),Ud(w)){if(y=w.nextSibling&&w.nextSibling.dataset,y)var $=y.dgst;y=$,o=Error(s(419)),o.stack="",o.digest=y,wo({value:o,source:null,stack:null}),n=Qf(t,n,r)}else if(un||us(t,n,r,!1),y=(r&t.childLanes)!==0,un||y){if(y=Wt,y!==null&&(o=ki(y,r),o!==0&&o!==I.retryLane))throw I.retryLane=o,Mr(t,o),ei(y,t,o),Xf;Dd(w)||yc(),n=Qf(t,n,r)}else Dd(w)?(n.flags|=192,n.child=t.child,n=null):(t=I.treeContext,Zt=Mi(w.nextSibling),An=n,bt=!0,Ia=null,bi=!1,t!==null&&Em(n,t),n=Kf(n,o.children),n.flags|=4096);return n}return u?(Xa(),w=o.fallback,u=n.mode,I=t.child,$=I.sibling,o=oa(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,$!==null?w=oa($,w):(w=Tr(w,u,r,null),w.flags|=2),w.return=n,o.return=n,o.sibling=w,n.child=o,Io(null,o),o=n.child,w=t.child.memoizedState,w===null?w=Yf(r):(u=w.cachePool,u!==null?(I=ln._currentValue,u=u.parent!==I?{parent:I,pool:I}:u):u=Cm(),w={baseLanes:w.baseLanes|r,cachePool:u}),o.memoizedState=w,o.childLanes=Zf(t,y,r),n.memoizedState=qf,Io(t.child,o)):(ja(n),r=t.child,t=r.sibling,r=oa(r,{mode:"visible",children:o.children}),r.return=n,r.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=r,n.memoizedState=null,r)}function Kf(t,n){return n=fc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function fc(t,n){return t=ai(22,t,null,n),t.lanes=0,t}function Qf(t,n,r){return Nr(n,t.child,null,r),t=Kf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Vg(t,n,r){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),df(t.return,n,r)}function Jf(t,n,r,o,u,d){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:u,treeForkCount:d}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=r,y.tailMode=u,y.treeForkCount=d)}function kg(t,n,r){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var y=sn.current,w=(y&2)!==0;if(w?(y=y&1|2,n.flags|=128):y&=1,Se(sn,y),Cn(t,n,o,r),o=bt?To:0,!w&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vg(t,r,n);else if(t.tag===19)Vg(t,r,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(r=n.child,u=null;r!==null;)t=r.alternate,t!==null&&$l(t)===null&&(u=r),r=r.sibling;r=u,r===null?(u=n.child,n.child=null):(u=r.sibling,r.sibling=null),Jf(n,!1,u,r,d,o);break;case"backwards":case"unstable_legacy-backwards":for(r=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&$l(t)===null){n.child=u;break}t=u.sibling,u.sibling=r,r=u,u=t}Jf(n,!0,r,null,d,o);break;case"together":Jf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ha(t,n,r){if(t!==null&&(n.dependencies=t.dependencies),Ya|=n.lanes,(r&n.childLanes)===0)if(t!==null){if(us(t,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,r=oa(t,t.pendingProps),n.child=r,r.return=n;t.sibling!==null;)t=t.sibling,r=r.sibling=oa(t,t.pendingProps),r.return=n;r.sibling=null}return n.child}function $f(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Xl(t)))}function Xy(t,n,r){switch(n.tag){case 3:ze(n,n.stateNode.containerInfo),Ha(n,ln,t.memoizedState.cache),wr();break;case 27:case 5:Ke(n);break;case 4:ze(n,n.stateNode.containerInfo);break;case 10:Ha(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Mf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ja(n),n.flags|=128,null):(r&n.child.childLanes)!==0?Gg(t,n,r):(ja(n),t=ha(t,n,r),t!==null?t.sibling:null);ja(n);break;case 19:var u=(t.flags&128)!==0;if(o=(r&n.childLanes)!==0,o||(us(t,n,r,!1),o=(r&n.childLanes)!==0),u){if(o)return kg(t,n,r);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Se(sn,sn.current),o)break;return null;case 22:return n.lanes=0,Pg(t,n,r,n.pendingProps);case 24:Ha(n,ln,t.memoizedState.cache)}return ha(t,n,r)}function jg(t,n,r){if(t!==null)if(t.memoizedProps!==n.pendingProps)un=!0;else{if(!$f(t,r)&&(n.flags&128)===0)return un=!1,Xy(t,n,r);un=(t.flags&131072)!==0}else un=!1,bt&&(n.flags&1048576)!==0&&bm(n,To,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Dr(n.elementType),n.type=t,typeof t=="function")af(t)?(o=Or(t,o),n.tag=1,n=Fg(null,n,t,o,r)):(n.tag=0,n=Wf(null,n,t,o,r));else{if(t!=null){var u=t.$$typeof;if(u===D){n.tag=11,n=Ng(null,n,t,o,r);break e}else if(u===B){n.tag=14,n=Lg(null,n,t,o,r);break e}}throw n=_e(t)||t,Error(s(306,n,""))}}return n;case 0:return Wf(t,n,n.type,n.pendingProps,r);case 1:return o=n.type,u=Or(o,n.pendingProps),Fg(t,n,o,u,r);case 3:e:{if(ze(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,xf(t,n),Lo(n,o,null,r);var y=n.memoizedState;if(o=y.cache,Ha(n,ln,o),o!==d.cache&&hf(n,[ln],r,!0),No(),o=y.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=Hg(t,n,o,r);break e}else if(o!==u){u=xi(Error(s(424)),n),wo(u),n=Hg(t,n,o,r);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Zt=Mi(t.firstChild),An=n,bt=!0,Ia=null,bi=!0,r=Pm(n,null,o,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(wr(),o===u){n=ha(t,n,r);break e}Cn(t,n,o,r)}n=n.child}return n;case 26:return uc(t,n),t===null?(r=t0(n.type,null,n.pendingProps,null))?n.memoizedState=r:bt||(r=n.type,t=n.pendingProps,o=Ac(Me.current).createElement(r),o[tn]=n,o[Tn]=t,Dn(o,r,t),j(o),n.stateNode=o):n.memoizedState=t0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ke(n),t===null&&bt&&(o=n.stateNode=Jv(n.type,n.pendingProps,Me.current),An=n,bi=!0,u=Zt,$a(n.type)?(Nd=u,Zt=Mi(o.firstChild)):Zt=u),Cn(t,n,n.pendingProps.children,r),uc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&bt&&((u=o=Zt)&&(o=SS(o,n.type,n.pendingProps,bi),o!==null?(n.stateNode=o,An=n,Zt=Mi(o.firstChild),bi=!1,u=!0):u=!1),u||Fa(n)),Ke(n),u=n.type,d=n.pendingProps,y=t!==null?t.memoizedProps:null,o=d.children,Ad(u,d)?o=null:y!==null&&Ad(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=wf(t,n,By,null,null,r),$o._currentValue=u),uc(t,n),Cn(t,n,o,r),n.child;case 6:return t===null&&bt&&((t=r=Zt)&&(r=bS(r,n.pendingProps,bi),r!==null?(n.stateNode=r,An=n,Zt=null,t=!0):t=!1),t||Fa(n)),null;case 13:return Gg(t,n,r);case 4:return ze(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Nr(n,null,o,r):Cn(t,n,o,r),n.child;case 11:return Ng(t,n,n.type,n.pendingProps,r);case 7:return Cn(t,n,n.pendingProps,r),n.child;case 8:return Cn(t,n,n.pendingProps.children,r),n.child;case 12:return Cn(t,n,n.pendingProps.children,r),n.child;case 10:return o=n.pendingProps,Ha(n,n.type,o.value),Cn(t,n,o.children,r),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Rr(n),u=Rn(u),o=o(u),n.flags|=1,Cn(t,n,o,r),n.child;case 14:return Lg(t,n,n.type,n.pendingProps,r);case 15:return Og(t,n,n.type,n.pendingProps,r);case 19:return kg(t,n,r);case 31:return jy(t,n,r);case 22:return Pg(t,n,r,n.pendingProps);case 24:return Rr(n),o=Rn(ln),t===null?(u=gf(),u===null&&(u=Wt,d=pf(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=r),u=d),n.memoizedState={parent:o,cache:u},_f(n),Ha(n,ln,u)):((t.lanes&r)!==0&&(xf(t,n),Lo(n,null,null,r),No()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ha(n,ln,o)):(o=d.cache,Ha(n,ln,o),o!==u.cache&&hf(n,[ln],r,!0))),Cn(t,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function pa(t){t.flags|=4}function ed(t,n,r,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(vv())t.flags|=8192;else throw Ur=Zl,vf}else t.flags&=-16777217}function Xg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!s0(n))if(vv())t.flags|=8192;else throw Ur=Zl,vf}function dc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?pn():536870912,t.lanes|=n,bs|=n)}function Fo(t,n){if(!bt)switch(t.tailMode){case"hidden":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Kt(t){var n=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(n)for(var u=t.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=r,n}function Wy(t,n,r){var o=n.pendingProps;switch(lf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(n),null;case 1:return Kt(n),null;case 3:return r=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ua(ln),Ye(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(cs(n)?pa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,uf())),Kt(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(pa(n),d!==null?(Kt(n),Xg(n,d)):(Kt(n),ed(n,u,null,o,r))):d?d!==t.memoizedState?(pa(n),Kt(n),Xg(n,d)):(Kt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&pa(n),Kt(n),ed(n,u,t,o,r)),null;case 27:if(qt(n),r=Me.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&pa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Kt(n),null}t=Z.current,cs(n)?Mm(n):(t=Jv(u,o,r),n.stateNode=t,pa(n))}return Kt(n),null;case 5:if(qt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&pa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Kt(n),null}if(d=Z.current,cs(n))Mm(n);else{var y=Ac(Me.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}d[tn]=n,d[Tn]=o;e:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=d;e:switch(Dn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&pa(n)}}return Kt(n),ed(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,r),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&pa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=Me.current,cs(n)){if(t=n.stateNode,r=n.memoizedProps,o=null,u=An,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[tn]=n,t=!!(t.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||Gv(t.nodeValue,r)),t||Fa(n,!0)}else t=Ac(t).createTextNode(o),t[tn]=n,n.stateNode=t}return Kt(n),null;case 31:if(r=n.memoizedState,t===null||t.memoizedState!==null){if(o=cs(n),r!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[tn]=n}else wr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),t=!1}else r=uf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return n.flags&256?(si(n),n):(si(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Kt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=cs(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[tn]=n}else wr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),u=!1}else u=uf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(si(n),n):(si(n),null)}return si(n),(n.flags&128)!==0?(n.lanes=r,n):(r=o!==null,t=t!==null&&t.memoizedState!==null,r&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),r!==t&&r&&(n.child.flags|=8192),dc(n,n.updateQueue),Kt(n),null);case 4:return Ye(),t===null&&bd(n.stateNode.containerInfo),Kt(n),null;case 10:return ua(n.type),Kt(n),null;case 19:if(ne(sn),o=n.memoizedState,o===null)return Kt(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)Fo(o,!1);else{if(rn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=$l(t),d!==null){for(n.flags|=128,Fo(o,!1),t=d.updateQueue,n.updateQueue=t,dc(n,t),n.subtreeFlags=0,t=r,r=n.child;r!==null;)xm(r,t),r=r.sibling;return Se(sn,sn.current&1|2),bt&&la(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&de()>vc&&(n.flags|=128,u=!0,Fo(o,!1),n.lanes=4194304)}else{if(!u)if(t=$l(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,dc(n,t),Fo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!bt)return Kt(n),null}else 2*de()-o.renderingStartTime>vc&&r!==536870912&&(n.flags|=128,u=!0,Fo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=de(),t.sibling=null,r=sn.current,Se(sn,u?r&1|2:r&1),bt&&la(n,o.treeForkCount),t):(Kt(n),null);case 22:case 23:return si(n),Ef(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(r&536870912)!==0&&(n.flags&128)===0&&(Kt(n),n.subtreeFlags&6&&(n.flags|=8192)):Kt(n),r=n.updateQueue,r!==null&&dc(n,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048),t!==null&&ne(Cr),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ua(ln),Kt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function qy(t,n){switch(lf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ua(ln),Ye(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return qt(n),null;case 31:if(n.memoizedState!==null){if(si(n),n.alternate===null)throw Error(s(340));wr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(si(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));wr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ne(sn),null;case 4:return Ye(),null;case 10:return ua(n.type),null;case 22:case 23:return si(n),Ef(),t!==null&&ne(Cr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ua(ln),null;case 25:return null;default:return null}}function Wg(t,n){switch(lf(n),n.tag){case 3:ua(ln),Ye();break;case 26:case 27:case 5:qt(n);break;case 4:Ye();break;case 31:n.memoizedState!==null&&si(n);break;case 13:si(n);break;case 19:ne(sn);break;case 10:ua(n.type);break;case 22:case 23:si(n),Ef(),t!==null&&ne(Cr);break;case 24:ua(ln)}}function Ho(t,n){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var u=o.next;r=u;do{if((r.tag&t)===t){o=void 0;var d=r.create,y=r.inst;o=d(),y.destroy=o}r=r.next}while(r!==u)}}catch(w){It(n,n.return,w)}}function Wa(t,n,r){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var y=o.inst,w=y.destroy;if(w!==void 0){y.destroy=void 0,u=n;var I=r,$=w;try{$()}catch(fe){It(u,I,fe)}}}o=o.next}while(o!==d)}}catch(fe){It(n,n.return,fe)}}function qg(t){var n=t.updateQueue;if(n!==null){var r=t.stateNode;try{zm(n,r)}catch(o){It(t,t.return,o)}}}function Yg(t,n,r){r.props=Or(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(o){It(t,n,o)}}function Go(t,n){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof r=="function"?t.refCleanup=r(o):r.current=o}}catch(u){It(t,n,u)}}function Wi(t,n){var r=t.ref,o=t.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(u){It(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){It(t,n,u)}else r.current=null}function Zg(t){var n=t.type,r=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break e;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(u){It(t,t.return,u)}}function td(t,n,r){try{var o=t.stateNode;mS(o,t.type,r,n),o[Tn]=n}catch(u){It(t,t.return,u)}}function Kg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&$a(t.type)||t.tag===4}function nd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Kg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&$a(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function id(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(t),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=ra));else if(o!==4&&(o===27&&$a(t.type)&&(r=t.stateNode,n=null),t=t.child,t!==null))for(id(t,n,r),t=t.sibling;t!==null;)id(t,n,r),t=t.sibling}function hc(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(o!==4&&(o===27&&$a(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(hc(t,n,r),t=t.sibling;t!==null;)hc(t,n,r),t=t.sibling}function Qg(t){var n=t.stateNode,r=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Dn(n,o,r),n[tn]=t,n[Tn]=r}catch(d){It(t,t.return,d)}}var ma=!1,fn=!1,ad=!1,Jg=typeof WeakSet=="function"?WeakSet:Set,yn=null;function Yy(t,n){if(t=t.containerInfo,Td=Oc,t=um(t),Ku(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break e}var y=0,w=-1,I=-1,$=0,fe=0,ve=t,ee=null;t:for(;;){for(var se;ve!==r||u!==0&&ve.nodeType!==3||(w=y+u),ve!==d||o!==0&&ve.nodeType!==3||(I=y+o),ve.nodeType===3&&(y+=ve.nodeValue.length),(se=ve.firstChild)!==null;)ee=ve,ve=se;for(;;){if(ve===t)break t;if(ee===r&&++$===u&&(w=y),ee===d&&++fe===o&&(I=y),(se=ve.nextSibling)!==null)break;ve=ee,ee=ve.parentNode}ve=se}r=w===-1||I===-1?null:{start:w,end:I}}else r=null}r=r||{start:0,end:0}}else r=null;for(wd={focusedElem:t,selectionRange:r},Oc=!1,yn=n;yn!==null;)if(n=yn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,yn=t;else for(;yn!==null;){switch(n=yn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)u=t[r],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,r=n,u=d.memoizedProps,d=d.memoizedState,o=r.stateNode;try{var Fe=Or(r.type,u);t=o.getSnapshotBeforeUpdate(Fe,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(Je){It(r,r.return,Je)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,r=t.nodeType,r===9)Cd(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Cd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,yn=t;break}yn=n.return}}function $g(t,n,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:va(t,r),o&4&&Ho(5,r);break;case 1:if(va(t,r),o&4)if(t=r.stateNode,n===null)try{t.componentDidMount()}catch(y){It(r,r.return,y)}else{var u=Or(r.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){It(r,r.return,y)}}o&64&&qg(r),o&512&&Go(r,r.return);break;case 3:if(va(t,r),o&64&&(t=r.updateQueue,t!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{zm(t,n)}catch(y){It(r,r.return,y)}}break;case 27:n===null&&o&4&&Qg(r);case 26:case 5:va(t,r),n===null&&o&4&&Zg(r),o&512&&Go(r,r.return);break;case 12:va(t,r);break;case 31:va(t,r),o&4&&nv(t,r);break;case 13:va(t,r),o&4&&iv(t,r),o&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=iS.bind(null,r),ES(t,r))));break;case 22:if(o=r.memoizedState!==null||ma,!o){n=n!==null&&n.memoizedState!==null||fn,u=ma;var d=fn;ma=o,(fn=n)&&!d?_a(t,r,(r.subtreeFlags&8772)!==0):va(t,r),ma=u,fn=d}break;case 30:break;default:va(t,r)}}function ev(t){var n=t.alternate;n!==null&&(t.alternate=null,ev(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&mo(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Jt=null,Kn=!1;function ga(t,n,r){for(r=r.child;r!==null;)tv(t,n,r),r=r.sibling}function tv(t,n,r){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(Ze,r)}catch{}switch(r.tag){case 26:fn||Wi(r,n),ga(t,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:fn||Wi(r,n);var o=Jt,u=Kn;$a(r.type)&&(Jt=r.stateNode,Kn=!1),ga(t,n,r),Ko(r.stateNode),Jt=o,Kn=u;break;case 5:fn||Wi(r,n);case 6:if(o=Jt,u=Kn,Jt=null,ga(t,n,r),Jt=o,Kn=u,Jt!==null)if(Kn)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(r.stateNode)}catch(d){It(r,n,d)}else try{Jt.removeChild(r.stateNode)}catch(d){It(r,n,d)}break;case 18:Jt!==null&&(Kn?(t=Jt,qv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),Ds(t)):qv(Jt,r.stateNode));break;case 4:o=Jt,u=Kn,Jt=r.stateNode.containerInfo,Kn=!0,ga(t,n,r),Jt=o,Kn=u;break;case 0:case 11:case 14:case 15:Wa(2,r,n),fn||Wa(4,r,n),ga(t,n,r);break;case 1:fn||(Wi(r,n),o=r.stateNode,typeof o.componentWillUnmount=="function"&&Yg(r,n,o)),ga(t,n,r);break;case 21:ga(t,n,r);break;case 22:fn=(o=fn)||r.memoizedState!==null,ga(t,n,r),fn=o;break;default:ga(t,n,r)}}function nv(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ds(t)}catch(r){It(n,n.return,r)}}}function iv(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ds(t)}catch(r){It(n,n.return,r)}}function Zy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Jg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Jg),n;default:throw Error(s(435,t.tag))}}function pc(t,n){var r=Zy(t);n.forEach(function(o){if(!r.has(o)){r.add(o);var u=aS.bind(null,t,o);o.then(u,u)}})}function Qn(t,n){var r=n.deletions;if(r!==null)for(var o=0;o<r.length;o++){var u=r[o],d=t,y=n,w=y;e:for(;w!==null;){switch(w.tag){case 27:if($a(w.type)){Jt=w.stateNode,Kn=!1;break e}break;case 5:Jt=w.stateNode,Kn=!1;break e;case 3:case 4:Jt=w.stateNode.containerInfo,Kn=!0;break e}w=w.return}if(Jt===null)throw Error(s(160));tv(d,y,u),Jt=null,Kn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)av(n,t),n=n.sibling}var Pi=null;function av(t,n){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Qn(n,t),Jn(t),o&4&&(Wa(3,t,t.return),Ho(3,t),Wa(5,t,t.return));break;case 1:Qn(n,t),Jn(t),o&512&&(fn||r===null||Wi(r,r.return)),o&64&&ma&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var u=Pi;if(Qn(n,t),Jn(t),o&512&&(fn||r===null||Wi(r,r.return)),o&4){var d=r!==null?r.memoizedState:null;if(o=t.memoizedState,r===null)if(o===null)if(t.stateNode===null){e:{o=t.type,r=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[yr]||d[tn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Dn(d,o,r),d[tn]=t,j(d),o=d;break e;case"link":var y=a0("link","href",u).get(o+(r.href||""));if(y){for(var w=0;w<y.length;w++)if(d=y[w],d.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&d.getAttribute("rel")===(r.rel==null?null:r.rel)&&d.getAttribute("title")===(r.title==null?null:r.title)&&d.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){y.splice(w,1);break t}}d=u.createElement(o),Dn(d,o,r),u.head.appendChild(d);break;case"meta":if(y=a0("meta","content",u).get(o+(r.content||""))){for(w=0;w<y.length;w++)if(d=y[w],d.getAttribute("content")===(r.content==null?null:""+r.content)&&d.getAttribute("name")===(r.name==null?null:r.name)&&d.getAttribute("property")===(r.property==null?null:r.property)&&d.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&d.getAttribute("charset")===(r.charSet==null?null:r.charSet)){y.splice(w,1);break t}}d=u.createElement(o),Dn(d,o,r),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[tn]=t,j(d),o=d}t.stateNode=o}else r0(u,t.type,t.stateNode);else t.stateNode=i0(u,o,t.memoizedProps);else d!==o?(d===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):d.count--,o===null?r0(u,t.type,t.stateNode):i0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&td(t,t.memoizedProps,r.memoizedProps)}break;case 27:Qn(n,t),Jn(t),o&512&&(fn||r===null||Wi(r,r.return)),r!==null&&o&4&&td(t,t.memoizedProps,r.memoizedProps);break;case 5:if(Qn(n,t),Jn(t),o&512&&(fn||r===null||Wi(r,r.return)),t.flags&32){u=t.stateNode;try{Yn(u,"")}catch(Fe){It(t,t.return,Fe)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,td(t,u,r!==null?r.memoizedProps:u)),o&1024&&(ad=!0);break;case 6:if(Qn(n,t),Jn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,r=t.stateNode;try{r.nodeValue=o}catch(Fe){It(t,t.return,Fe)}}break;case 3:if(Dc=null,u=Pi,Pi=Rc(n.containerInfo),Qn(n,t),Pi=u,Jn(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{Ds(n.containerInfo)}catch(Fe){It(t,t.return,Fe)}ad&&(ad=!1,rv(t));break;case 4:o=Pi,Pi=Rc(t.stateNode.containerInfo),Qn(n,t),Jn(t),Pi=o;break;case 12:Qn(n,t),Jn(t);break;case 31:Qn(n,t),Jn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,pc(t,o)));break;case 13:Qn(n,t),Jn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(gc=de()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,pc(t,o)));break;case 22:u=t.memoizedState!==null;var I=r!==null&&r.memoizedState!==null,$=ma,fe=fn;if(ma=$||u,fn=fe||I,Qn(n,t),fn=fe,ma=$,Jn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(r===null||I||ma||fn||Pr(t)),r=null,n=t;;){if(n.tag===5||n.tag===26){if(r===null){I=r=n;try{if(d=I.stateNode,u)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{w=I.stateNode;var ve=I.memoizedProps.style,ee=ve!=null&&ve.hasOwnProperty("display")?ve.display:null;w.style.display=ee==null||typeof ee=="boolean"?"":(""+ee).trim()}}catch(Fe){It(I,I.return,Fe)}}}else if(n.tag===6){if(r===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(Fe){It(I,I.return,Fe)}}}else if(n.tag===18){if(r===null){I=n;try{var se=I.stateNode;u?Yv(se,!0):Yv(I.stateNode,!1)}catch(Fe){It(I,I.return,Fe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,pc(t,r))));break;case 19:Qn(n,t),Jn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,pc(t,o)));break;case 30:break;case 21:break;default:Qn(n,t),Jn(t)}}function Jn(t){var n=t.flags;if(n&2){try{for(var r,o=t.return;o!==null;){if(Kg(o)){r=o;break}o=o.return}if(r==null)throw Error(s(160));switch(r.tag){case 27:var u=r.stateNode,d=nd(t);hc(t,d,u);break;case 5:var y=r.stateNode;r.flags&32&&(Yn(y,""),r.flags&=-33);var w=nd(t);hc(t,w,y);break;case 3:case 4:var I=r.stateNode.containerInfo,$=nd(t);id(t,$,I);break;default:throw Error(s(161))}}catch(fe){It(t,t.return,fe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function rv(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;rv(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function va(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)$g(t,n.alternate,n),n=n.sibling}function Pr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Wa(4,n,n.return),Pr(n);break;case 1:Wi(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&Yg(n,n.return,r),Pr(n);break;case 27:Ko(n.stateNode);case 26:case 5:Wi(n,n.return),Pr(n);break;case 22:n.memoizedState===null&&Pr(n);break;case 30:Pr(n);break;default:Pr(n)}t=t.sibling}}function _a(t,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,y=d.flags;switch(d.tag){case 0:case 11:case 15:_a(u,d,r),Ho(4,d);break;case 1:if(_a(u,d,r),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch($){It(o,o.return,$)}if(o=d,u=o.updateQueue,u!==null){var w=o.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)Bm(I[u],w)}catch($){It(o,o.return,$)}}r&&y&64&&qg(d),Go(d,d.return);break;case 27:Qg(d);case 26:case 5:_a(u,d,r),r&&o===null&&y&4&&Zg(d),Go(d,d.return);break;case 12:_a(u,d,r);break;case 31:_a(u,d,r),r&&y&4&&nv(u,d);break;case 13:_a(u,d,r),r&&y&4&&iv(u,d);break;case 22:d.memoizedState===null&&_a(u,d,r),Go(d,d.return);break;case 30:break;default:_a(u,d,r)}n=n.sibling}}function rd(t,n){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&Ao(r))}function sd(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ao(t))}function Bi(t,n,r,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)sv(t,n,r,o),n=n.sibling}function sv(t,n,r,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Bi(t,n,r,o),u&2048&&Ho(9,n);break;case 1:Bi(t,n,r,o);break;case 3:Bi(t,n,r,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ao(t)));break;case 12:if(u&2048){Bi(t,n,r,o),t=n.stateNode;try{var d=n.memoizedProps,y=d.id,w=d.onPostCommit;typeof w=="function"&&w(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){It(n,n.return,I)}}else Bi(t,n,r,o);break;case 31:Bi(t,n,r,o);break;case 13:Bi(t,n,r,o);break;case 23:break;case 22:d=n.stateNode,y=n.alternate,n.memoizedState!==null?d._visibility&2?Bi(t,n,r,o):Vo(t,n):d._visibility&2?Bi(t,n,r,o):(d._visibility|=2,xs(t,n,r,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&rd(y,n);break;case 24:Bi(t,n,r,o),u&2048&&sd(n.alternate,n);break;default:Bi(t,n,r,o)}}function xs(t,n,r,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,y=n,w=r,I=o,$=y.flags;switch(y.tag){case 0:case 11:case 15:xs(d,y,w,I,u),Ho(8,y);break;case 23:break;case 22:var fe=y.stateNode;y.memoizedState!==null?fe._visibility&2?xs(d,y,w,I,u):Vo(d,y):(fe._visibility|=2,xs(d,y,w,I,u)),u&&$&2048&&rd(y.alternate,y);break;case 24:xs(d,y,w,I,u),u&&$&2048&&sd(y.alternate,y);break;default:xs(d,y,w,I,u)}n=n.sibling}}function Vo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=t,o=n,u=o.flags;switch(o.tag){case 22:Vo(r,o),u&2048&&rd(o.alternate,o);break;case 24:Vo(r,o),u&2048&&sd(o.alternate,o);break;default:Vo(r,o)}n=n.sibling}}var ko=8192;function ys(t,n,r){if(t.subtreeFlags&ko)for(t=t.child;t!==null;)ov(t,n,r),t=t.sibling}function ov(t,n,r){switch(t.tag){case 26:ys(t,n,r),t.flags&ko&&t.memoizedState!==null&&PS(r,Pi,t.memoizedState,t.memoizedProps);break;case 5:ys(t,n,r);break;case 3:case 4:var o=Pi;Pi=Rc(t.stateNode.containerInfo),ys(t,n,r),Pi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=ko,ko=16777216,ys(t,n,r),ko=o):ys(t,n,r));break;default:ys(t,n,r)}}function lv(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function jo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];yn=o,uv(o,t)}lv(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)cv(t),t=t.sibling}function cv(t){switch(t.tag){case 0:case 11:case 15:jo(t),t.flags&2048&&Wa(9,t,t.return);break;case 3:jo(t);break;case 12:jo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,mc(t)):jo(t);break;default:jo(t)}}function mc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];yn=o,uv(o,t)}lv(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Wa(8,n,n.return),mc(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,mc(n));break;default:mc(n)}t=t.sibling}}function uv(t,n){for(;yn!==null;){var r=yn;switch(r.tag){case 0:case 11:case 15:Wa(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Ao(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,yn=o;else e:for(r=t;yn!==null;){o=yn;var u=o.sibling,d=o.return;if(ev(o),o===r){yn=null;break e}if(u!==null){u.return=d,yn=u;break e}yn=d}}}var Ky={getCacheForType:function(t){var n=Rn(ln),r=n.data.get(t);return r===void 0&&(r=t(),n.data.set(t,r)),r},cacheSignal:function(){return Rn(ln).controller.signal}},Qy=typeof WeakMap=="function"?WeakMap:Map,Lt=0,Wt=null,pt=null,_t=0,zt=0,oi=null,qa=!1,Ss=!1,od=!1,xa=0,rn=0,Ya=0,Br=0,ld=0,li=0,bs=0,Xo=null,$n=null,cd=!1,gc=0,fv=0,vc=1/0,_c=null,Za=null,gn=0,Ka=null,Es=null,ya=0,ud=0,fd=null,dv=null,Wo=0,dd=null;function ci(){return(Lt&2)!==0&&_t!==0?_t&-_t:z.T!==null?_d():ho()}function hv(){if(li===0)if((_t&536870912)===0||bt){var t=ce;ce<<=1,(ce&3932160)===0&&(ce=262144),li=t}else li=536870912;return t=ri.current,t!==null&&(t.flags|=32),li}function ei(t,n,r){(t===Wt&&(zt===2||zt===9)||t.cancelPendingCommit!==null)&&(Ms(t,0),Qa(t,_t,li,!1)),Mn(t,r),((Lt&2)===0||t!==Wt)&&(t===Wt&&((Lt&2)===0&&(Br|=r),rn===4&&Qa(t,_t,li,!1)),qi(t))}function pv(t,n,r){if((Lt&6)!==0)throw Error(s(327));var o=!r&&(n&127)===0&&(n&t.expiredLanes)===0||nt(t,n),u=o?eS(t,n):pd(t,n,!0),d=o;do{if(u===0){Ss&&!o&&Qa(t,n,0,!1);break}else{if(r=t.current.alternate,d&&!Jy(r)){u=pd(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var w=t;u=Xo;var I=w.current.memoizedState.isDehydrated;if(I&&(Ms(w,y).flags|=256),y=pd(w,y,!1),y!==2){if(od&&!I){w.errorRecoveryDisabledLanes|=d,Br|=d,u=4;break e}d=$n,$n=u,d!==null&&($n===null?$n=d:$n.push.apply($n,d))}u=y}if(d=!1,u!==2)continue}}if(u===1){Ms(t,0),Qa(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Qa(o,n,li,!qa);break e;case 2:$n=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=gc+300-de(),10<u)){if(Qa(o,n,li,!qa),Ue(o,0,!0)!==0)break e;ya=n,o.timeoutHandle=Xv(mv.bind(null,o,r,$n,_c,cd,n,li,Br,bs,qa,d,"Throttled",-0,0),u);break e}mv(o,r,$n,_c,cd,n,li,Br,bs,qa,d,null,-0,0)}}break}while(!0);qi(t)}function mv(t,n,r,o,u,d,y,w,I,$,fe,ve,ee,se){if(t.timeoutHandle=-1,ve=n.subtreeFlags,ve&8192||(ve&16785408)===16785408){ve={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ra},ov(n,d,ve);var Fe=(d&62914560)===d?gc-de():(d&4194048)===d?fv-de():0;if(Fe=BS(ve,Fe),Fe!==null){ya=d,t.cancelPendingCommit=Fe(Ev.bind(null,t,n,d,r,o,u,y,w,I,fe,ve,null,ee,se)),Qa(t,d,y,!$);return}}Ev(t,n,d,r,o,u,y,w,I)}function Jy(t){for(var n=t;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var u=r[o],d=u.getSnapshot;u=u.value;try{if(!ii(d(),u))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Qa(t,n,r,o){n&=~ld,n&=~Br,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-tt(u),y=1<<d;o[d]=-1,u&=~y}r!==0&&uo(t,r,n)}function xc(){return(Lt&6)===0?(qo(0),!1):!0}function hd(){if(pt!==null){if(zt===0)var t=pt.return;else t=pt,ca=Ar=null,Cf(t),ps=null,Co=0,t=pt;for(;t!==null;)Wg(t.alternate,t),t=t.return;pt=null}}function Ms(t,n){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,_S(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),ya=0,hd(),Wt=t,pt=r=oa(t.current,null),_t=n,zt=0,oi=null,qa=!1,Ss=nt(t,n),od=!1,bs=li=ld=Br=Ya=rn=0,$n=Xo=null,cd=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-tt(o),d=1<<u;n|=t[u],o&=~d}return xa=n,Hl(),r}function gv(t,n){ot=null,z.H=zo,n===hs||n===Yl?(n=Nm(),zt=3):n===vf?(n=Nm(),zt=4):zt=n===Xf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,oi=n,pt===null&&(rn=1,lc(t,xi(n,t.current)))}function vv(){var t=ri.current;return t===null?!0:(_t&4194048)===_t?Ei===null:(_t&62914560)===_t||(_t&536870912)!==0?t===Ei:!1}function _v(){var t=z.H;return z.H=zo,t===null?zo:t}function xv(){var t=z.A;return z.A=Ky,t}function yc(){rn=4,qa||(_t&4194048)!==_t&&ri.current!==null||(Ss=!0),(Ya&134217727)===0&&(Br&134217727)===0||Wt===null||Qa(Wt,_t,li,!1)}function pd(t,n,r){var o=Lt;Lt|=2;var u=_v(),d=xv();(Wt!==t||_t!==n)&&(_c=null,Ms(t,n)),n=!1;var y=rn;e:do try{if(zt!==0&&pt!==null){var w=pt,I=oi;switch(zt){case 8:hd(),y=6;break e;case 3:case 2:case 9:case 6:ri.current===null&&(n=!0);var $=zt;if(zt=0,oi=null,Ts(t,w,I,$),r&&Ss){y=0;break e}break;default:$=zt,zt=0,oi=null,Ts(t,w,I,$)}}$y(),y=rn;break}catch(fe){gv(t,fe)}while(!0);return n&&t.shellSuspendCounter++,ca=Ar=null,Lt=o,z.H=u,z.A=d,pt===null&&(Wt=null,_t=0,Hl()),y}function $y(){for(;pt!==null;)yv(pt)}function eS(t,n){var r=Lt;Lt|=2;var o=_v(),u=xv();Wt!==t||_t!==n?(_c=null,vc=de()+500,Ms(t,n)):Ss=nt(t,n);e:do try{if(zt!==0&&pt!==null){n=pt;var d=oi;t:switch(zt){case 1:zt=0,oi=null,Ts(t,n,d,1);break;case 2:case 9:if(Dm(d)){zt=0,oi=null,Sv(n);break}n=function(){zt!==2&&zt!==9||Wt!==t||(zt=7),qi(t)},d.then(n,n);break e;case 3:zt=7;break e;case 4:zt=5;break e;case 7:Dm(d)?(zt=0,oi=null,Sv(n)):(zt=0,oi=null,Ts(t,n,d,7));break;case 5:var y=null;switch(pt.tag){case 26:y=pt.memoizedState;case 5:case 27:var w=pt;if(y?s0(y):w.stateNode.complete){zt=0,oi=null;var I=w.sibling;if(I!==null)pt=I;else{var $=w.return;$!==null?(pt=$,Sc($)):pt=null}break t}}zt=0,oi=null,Ts(t,n,d,5);break;case 6:zt=0,oi=null,Ts(t,n,d,6);break;case 8:hd(),rn=6;break e;default:throw Error(s(462))}}tS();break}catch(fe){gv(t,fe)}while(!0);return ca=Ar=null,z.H=o,z.A=u,Lt=r,pt!==null?0:(Wt=null,_t=0,Hl(),rn)}function tS(){for(;pt!==null&&!A();)yv(pt)}function yv(t){var n=jg(t.alternate,t,xa);t.memoizedProps=t.pendingProps,n===null?Sc(t):pt=n}function Sv(t){var n=t,r=n.alternate;switch(n.tag){case 15:case 0:n=Ig(r,n,n.pendingProps,n.type,void 0,_t);break;case 11:n=Ig(r,n,n.pendingProps,n.type.render,n.ref,_t);break;case 5:Cf(n);default:Wg(r,n),n=pt=xm(n,xa),n=jg(r,n,xa)}t.memoizedProps=t.pendingProps,n===null?Sc(t):pt=n}function Ts(t,n,r,o){ca=Ar=null,Cf(n),ps=null,Co=0;var u=n.return;try{if(ky(t,u,n,r,_t)){rn=1,lc(t,xi(r,t.current)),pt=null;return}}catch(d){if(u!==null)throw pt=u,d;rn=1,lc(t,xi(r,t.current)),pt=null;return}n.flags&32768?(bt||o===1?t=!0:Ss||(_t&536870912)!==0?t=!1:(qa=t=!0,(o===2||o===9||o===3||o===6)&&(o=ri.current,o!==null&&o.tag===13&&(o.flags|=16384))),bv(n,t)):Sc(n)}function Sc(t){var n=t;do{if((n.flags&32768)!==0){bv(n,qa);return}t=n.return;var r=Wy(n.alternate,n,xa);if(r!==null){pt=r;return}if(n=n.sibling,n!==null){pt=n;return}pt=n=t}while(n!==null);rn===0&&(rn=5)}function bv(t,n){do{var r=qy(t.alternate,t);if(r!==null){r.flags&=32767,pt=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(t=t.sibling,t!==null)){pt=t;return}pt=t=r}while(t!==null);rn=6,pt=null}function Ev(t,n,r,o,u,d,y,w,I){t.cancelPendingCommit=null;do bc();while(gn!==0);if((Lt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=tf,Ui(t,r,d,y,w,I),t===Wt&&(pt=Wt=null,_t=0),Es=n,Ka=t,ya=r,ud=d,fd=u,dv=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,rS(Ce,function(){return Rv(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,u=Q.p,Q.p=2,y=Lt,Lt|=4;try{Yy(t,n,r)}finally{Lt=y,Q.p=u,z.T=o}}gn=1,Mv(),Tv(),wv()}}function Mv(){if(gn===1){gn=0;var t=Ka,n=Es,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=z.T,z.T=null;var o=Q.p;Q.p=2;var u=Lt;Lt|=4;try{av(n,t);var d=wd,y=um(t.containerInfo),w=d.focusedElem,I=d.selectionRange;if(y!==w&&w&&w.ownerDocument&&cm(w.ownerDocument.documentElement,w)){if(I!==null&&Ku(w)){var $=I.start,fe=I.end;if(fe===void 0&&(fe=$),"selectionStart"in w)w.selectionStart=$,w.selectionEnd=Math.min(fe,w.value.length);else{var ve=w.ownerDocument||document,ee=ve&&ve.defaultView||window;if(ee.getSelection){var se=ee.getSelection(),Fe=w.textContent.length,Je=Math.min(I.start,Fe),kt=I.end===void 0?Je:Math.min(I.end,Fe);!se.extend&&Je>kt&&(y=kt,kt=Je,Je=y);var q=lm(w,Je),G=lm(w,kt);if(q&&G&&(se.rangeCount!==1||se.anchorNode!==q.node||se.anchorOffset!==q.offset||se.focusNode!==G.node||se.focusOffset!==G.offset)){var J=ve.createRange();J.setStart(q.node,q.offset),se.removeAllRanges(),Je>kt?(se.addRange(J),se.extend(G.node,G.offset)):(J.setEnd(G.node,G.offset),se.addRange(J))}}}}for(ve=[],se=w;se=se.parentNode;)se.nodeType===1&&ve.push({element:se,left:se.scrollLeft,top:se.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<ve.length;w++){var me=ve[w];me.element.scrollLeft=me.left,me.element.scrollTop=me.top}}Oc=!!Td,wd=Td=null}finally{Lt=u,Q.p=o,z.T=r}}t.current=n,gn=2}}function Tv(){if(gn===2){gn=0;var t=Ka,n=Es,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=z.T,z.T=null;var o=Q.p;Q.p=2;var u=Lt;Lt|=4;try{$g(t,n.alternate,n)}finally{Lt=u,Q.p=o,z.T=r}}gn=3}}function wv(){if(gn===4||gn===3){gn=0,te();var t=Ka,n=Es,r=ya,o=dv;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,Es=Ka=null,Av(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Za=null),Jr(r),n=n.stateNode,Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(Ze,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,u=Q.p,Q.p=2,z.T=null;try{for(var d=t.onRecoverableError,y=0;y<o.length;y++){var w=o[y];d(w.value,{componentStack:w.stack})}}finally{z.T=n,Q.p=u}}(ya&3)!==0&&bc(),qi(t),u=t.pendingLanes,(r&261930)!==0&&(u&42)!==0?t===dd?Wo++:(Wo=0,dd=t):Wo=0,qo(0)}}function Av(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ao(n)))}function bc(){return Mv(),Tv(),wv(),Rv()}function Rv(){if(gn!==5)return!1;var t=Ka,n=ud;ud=0;var r=Jr(ya),o=z.T,u=Q.p;try{Q.p=32>r?32:r,z.T=null,r=fd,fd=null;var d=Ka,y=ya;if(gn=0,Es=Ka=null,ya=0,(Lt&6)!==0)throw Error(s(331));var w=Lt;if(Lt|=4,cv(d.current),sv(d,d.current,y,r),Lt=w,qo(0,!1),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(Ze,d)}catch{}return!0}finally{Q.p=u,z.T=o,Av(t,n)}}function Cv(t,n,r){n=xi(r,n),n=jf(t.stateNode,n,2),t=ka(t,n,2),t!==null&&(Mn(t,2),qi(t))}function It(t,n,r){if(t.tag===3)Cv(t,t,r);else for(;n!==null;){if(n.tag===3){Cv(n,t,r);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Za===null||!Za.has(o))){t=xi(r,t),r=Dg(2),o=ka(n,r,2),o!==null&&(Ug(r,o,n,t),Mn(o,2),qi(o));break}}n=n.return}}function md(t,n,r){var o=t.pingCache;if(o===null){o=t.pingCache=new Qy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(r)||(od=!0,u.add(r),t=nS.bind(null,t,n,r),n.then(t,t))}function nS(t,n,r){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,Wt===t&&(_t&r)===r&&(rn===4||rn===3&&(_t&62914560)===_t&&300>de()-gc?(Lt&2)===0&&Ms(t,0):ld|=r,bs===_t&&(bs=0)),qi(t)}function Dv(t,n){n===0&&(n=pn()),t=Mr(t,n),t!==null&&(Mn(t,n),qi(t))}function iS(t){var n=t.memoizedState,r=0;n!==null&&(r=n.retryLane),Dv(t,r)}function aS(t,n){var r=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(r=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Dv(t,r)}function rS(t,n){return ke(t,n)}var Ec=null,ws=null,gd=!1,Mc=!1,vd=!1,Ja=0;function qi(t){t!==ws&&t.next===null&&(ws===null?Ec=ws=t:ws=ws.next=t),Mc=!0,gd||(gd=!0,oS())}function qo(t,n){if(!vd&&Mc){vd=!0;do for(var r=!1,o=Ec;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var y=o.suspendedLanes,w=o.pingedLanes;d=(1<<31-tt(42|t)+1)-1,d&=u&~(y&~w),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(r=!0,Ov(o,d))}else d=_t,d=Ue(o,o===Wt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||nt(o,d)||(r=!0,Ov(o,d));o=o.next}while(r);vd=!1}}function sS(){Uv()}function Uv(){Mc=gd=!1;var t=0;Ja!==0&&vS()&&(t=Ja);for(var n=de(),r=null,o=Ec;o!==null;){var u=o.next,d=Nv(o,n);d===0?(o.next=null,r===null?Ec=u:r.next=u,u===null&&(ws=r)):(r=o,(t!==0||(d&3)!==0)&&(Mc=!0)),o=u}gn!==0&&gn!==5||qo(t),Ja!==0&&(Ja=0)}function Nv(t,n){for(var r=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var y=31-tt(d),w=1<<y,I=u[y];I===-1?((w&r)===0||(w&o)!==0)&&(u[y]=Qt(w,n)):I<=n&&(t.expiredLanes|=w),d&=~w}if(n=Wt,r=_t,r=Ue(t,t===n?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,r===0||t===n&&(zt===2||zt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&O(o),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||nt(t,r)){if(n=r&-r,n===t.callbackPriority)return n;switch(o!==null&&O(o),Jr(r)){case 2:case 8:r=Ge;break;case 32:r=Ce;break;case 268435456:r=$e;break;default:r=Ce}return o=Lv.bind(null,t),r=ke(r,o),t.callbackPriority=n,t.callbackNode=r,n}return o!==null&&o!==null&&O(o),t.callbackPriority=2,t.callbackNode=null,2}function Lv(t,n){if(gn!==0&&gn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(bc()&&t.callbackNode!==r)return null;var o=_t;return o=Ue(t,t===Wt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(pv(t,o,n),Nv(t,de()),t.callbackNode!=null&&t.callbackNode===r?Lv.bind(null,t):null)}function Ov(t,n){if(bc())return null;pv(t,n,!0)}function oS(){xS(function(){(Lt&6)!==0?ke(ge,sS):Uv()})}function _d(){if(Ja===0){var t=fs;t===0&&(t=De,De<<=1,(De&261888)===0&&(De=256)),Ja=t}return Ja}function Pv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Nl(""+t)}function Bv(t,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,t.id&&r.setAttribute("form",t.id),n.parentNode.insertBefore(r,n),t=new FormData(t),r.parentNode.removeChild(r),t}function lS(t,n,r,o,u){if(n==="submit"&&r&&r.stateNode===u){var d=Pv((u[Tn]||null).action),y=o.submitter;y&&(n=(n=y[Tn]||null)?Pv(n.formAction):y.getAttribute("formAction"),n!==null&&(d=n,y=null));var w=new Bl("action","action",null,o,u);t.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ja!==0){var I=y?Bv(u,y):new FormData(u);If(r,{pending:!0,data:I,method:u.method,action:d},null,I)}}else typeof d=="function"&&(w.preventDefault(),I=y?Bv(u,y):new FormData(u),If(r,{pending:!0,data:I,method:u.method,action:d},d,I))},currentTarget:u}]})}}for(var xd=0;xd<ef.length;xd++){var yd=ef[xd],cS=yd.toLowerCase(),uS=yd[0].toUpperCase()+yd.slice(1);Oi(cS,"on"+uS)}Oi(hm,"onAnimationEnd"),Oi(pm,"onAnimationIteration"),Oi(mm,"onAnimationStart"),Oi("dblclick","onDoubleClick"),Oi("focusin","onFocus"),Oi("focusout","onBlur"),Oi(wy,"onTransitionRun"),Oi(Ay,"onTransitionStart"),Oi(Ry,"onTransitionCancel"),Oi(gm,"onTransitionEnd"),Be("onMouseEnter",["mouseout","mouseover"]),Be("onMouseLeave",["mouseout","mouseover"]),Be("onPointerEnter",["pointerout","pointerover"]),Be("onPointerLeave",["pointerout","pointerover"]),Oe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yo));function zv(t,n){n=(n&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var y=o.length-1;0<=y;y--){var w=o[y],I=w.instance,$=w.currentTarget;if(w=w.listener,I!==d&&u.isPropagationStopped())break e;d=w,u.currentTarget=$;try{d(u)}catch(fe){Fl(fe)}u.currentTarget=null,d=I}else for(y=0;y<o.length;y++){if(w=o[y],I=w.instance,$=w.currentTarget,w=w.listener,I!==d&&u.isPropagationStopped())break e;d=w,u.currentTarget=$;try{d(u)}catch(fe){Fl(fe)}u.currentTarget=null,d=I}}}}function mt(t,n){var r=n[po];r===void 0&&(r=n[po]=new Set);var o=t+"__bubble";r.has(o)||(Iv(n,t,2,!1),r.add(o))}function Sd(t,n,r){var o=0;n&&(o|=4),Iv(r,t,o,n)}var Tc="_reactListening"+Math.random().toString(36).slice(2);function bd(t){if(!t[Tc]){t[Tc]=!0,Te.forEach(function(r){r!=="selectionchange"&&(fS.has(r)||Sd(r,!1,t),Sd(r,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Tc]||(n[Tc]=!0,Sd("selectionchange",!1,n))}}function Iv(t,n,r,o){switch(h0(n)){case 2:var u=FS;break;case 8:u=HS;break;default:u=zd}r=u.bind(null,n,r,t),u=void 0,!Gu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,r,{capture:!0,passive:u}):t.addEventListener(n,r,!0):u!==void 0?t.addEventListener(n,r,{passive:u}):t.addEventListener(n,r,!1)}function Ed(t,n,r,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var w=o.stateNode.containerInfo;if(w===u)break;if(y===4)for(y=o.return;y!==null;){var I=y.tag;if((I===3||I===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;w!==null;){if(y=R(w),y===null)return;if(I=y.tag,I===5||I===6||I===26||I===27){o=d=y;continue e}w=w.parentNode}}o=o.return}kp(function(){var $=d,fe=Fu(r),ve=[];e:{var ee=vm.get(t);if(ee!==void 0){var se=Bl,Fe=t;switch(t){case"keypress":if(Ol(r)===0)break e;case"keydown":case"keyup":se=ay;break;case"focusin":Fe="focus",se=Xu;break;case"focusout":Fe="blur",se=Xu;break;case"beforeblur":case"afterblur":se=Xu;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Wx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=oy;break;case hm:case pm:case mm:se=Zx;break;case gm:se=cy;break;case"scroll":case"scrollend":se=jx;break;case"wheel":se=fy;break;case"copy":case"cut":case"paste":se=Qx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=Yp;break;case"toggle":case"beforetoggle":se=hy}var Je=(n&4)!==0,kt=!Je&&(t==="scroll"||t==="scrollend"),q=Je?ee!==null?ee+"Capture":null:ee;Je=[];for(var G=$,J;G!==null;){var me=G;if(J=me.stateNode,me=me.tag,me!==5&&me!==26&&me!==27||J===null||q===null||(me=go(G,q),me!=null&&Je.push(Zo(G,me,J))),kt)break;G=G.return}0<Je.length&&(ee=new se(ee,Fe,null,r,fe),ve.push({event:ee,listeners:Je}))}}if((n&7)===0){e:{if(ee=t==="mouseover"||t==="pointerover",se=t==="mouseout"||t==="pointerout",ee&&r!==Iu&&(Fe=r.relatedTarget||r.fromElement)&&(R(Fe)||Fe[aa]))break e;if((se||ee)&&(ee=fe.window===fe?fe:(ee=fe.ownerDocument)?ee.defaultView||ee.parentWindow:window,se?(Fe=r.relatedTarget||r.toElement,se=$,Fe=Fe?R(Fe):null,Fe!==null&&(kt=c(Fe),Je=Fe.tag,Fe!==kt||Je!==5&&Je!==27&&Je!==6)&&(Fe=null)):(se=null,Fe=$),se!==Fe)){if(Je=Wp,me="onMouseLeave",q="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Je=Yp,me="onPointerLeave",q="onPointerEnter",G="pointer"),kt=se==null?ee:ie(se),J=Fe==null?ee:ie(Fe),ee=new Je(me,G+"leave",se,r,fe),ee.target=kt,ee.relatedTarget=J,me=null,R(fe)===$&&(Je=new Je(q,G+"enter",Fe,r,fe),Je.target=J,Je.relatedTarget=kt,me=Je),kt=me,se&&Fe)t:{for(Je=dS,q=se,G=Fe,J=0,me=q;me;me=Je(me))J++;me=0;for(var We=G;We;We=Je(We))me++;for(;0<J-me;)q=Je(q),J--;for(;0<me-J;)G=Je(G),me--;for(;J--;){if(q===G||G!==null&&q===G.alternate){Je=q;break t}q=Je(q),G=Je(G)}Je=null}else Je=null;se!==null&&Fv(ve,ee,se,Je,!1),Fe!==null&&kt!==null&&Fv(ve,kt,Fe,Je,!0)}}e:{if(ee=$?ie($):window,se=ee.nodeName&&ee.nodeName.toLowerCase(),se==="select"||se==="input"&&ee.type==="file")var Rt=nm;else if(em(ee))if(im)Rt=Ey;else{Rt=Sy;var He=yy}else se=ee.nodeName,!se||se.toLowerCase()!=="input"||ee.type!=="checkbox"&&ee.type!=="radio"?$&&zu($.elementType)&&(Rt=nm):Rt=by;if(Rt&&(Rt=Rt(t,$))){tm(ve,Rt,r,fe);break e}He&&He(t,ee,$),t==="focusout"&&$&&ee.type==="number"&&$.memoizedProps.value!=null&&Pn(ee,"number",ee.value)}switch(He=$?ie($):window,t){case"focusin":(em(He)||He.contentEditable==="true")&&(is=He,Qu=$,Mo=null);break;case"focusout":Mo=Qu=is=null;break;case"mousedown":Ju=!0;break;case"contextmenu":case"mouseup":case"dragend":Ju=!1,fm(ve,r,fe);break;case"selectionchange":if(Ty)break;case"keydown":case"keyup":fm(ve,r,fe)}var ct;if(qu)e:{switch(t){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else ns?Jp(t,r)&&(xt="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(xt="onCompositionStart");xt&&(Zp&&r.locale!=="ko"&&(ns||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&ns&&(ct=jp()):(Ba=fe,Vu="value"in Ba?Ba.value:Ba.textContent,ns=!0)),He=wc($,xt),0<He.length&&(xt=new qp(xt,t,null,r,fe),ve.push({event:xt,listeners:He}),ct?xt.data=ct:(ct=$p(r),ct!==null&&(xt.data=ct)))),(ct=my?gy(t,r):vy(t,r))&&(xt=wc($,"onBeforeInput"),0<xt.length&&(He=new qp("onBeforeInput","beforeinput",null,r,fe),ve.push({event:He,listeners:xt}),He.data=ct)),lS(ve,t,$,r,fe)}zv(ve,n)})}function Zo(t,n,r){return{instance:t,listener:n,currentTarget:r}}function wc(t,n){for(var r=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=go(t,r),u!=null&&o.unshift(Zo(t,u,d)),u=go(t,n),u!=null&&o.push(Zo(t,u,d))),t.tag===3)return o;t=t.return}return[]}function dS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Fv(t,n,r,o,u){for(var d=n._reactName,y=[];r!==null&&r!==o;){var w=r,I=w.alternate,$=w.stateNode;if(w=w.tag,I!==null&&I===o)break;w!==5&&w!==26&&w!==27||$===null||(I=$,u?($=go(r,d),$!=null&&y.unshift(Zo(r,$,I))):u||($=go(r,d),$!=null&&y.push(Zo(r,$,I)))),r=r.return}y.length!==0&&t.push({event:n,listeners:y})}var hS=/\r\n?/g,pS=/\u0000|\uFFFD/g;function Hv(t){return(typeof t=="string"?t:""+t).replace(hS,`
`).replace(pS,"")}function Gv(t,n){return n=Hv(n),Hv(t)===n}function Vt(t,n,r,o,u,d){switch(r){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Yn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Yn(t,""+o);break;case"className":Yt(t,"class",o);break;case"tabIndex":Yt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Yt(t,r,o);break;case"style":Gp(t,o,d);break;case"data":if(n!=="object"){Yt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||r!=="href")){t.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=Nl(""+o),t.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(r==="formAction"?(n!=="input"&&Vt(t,n,"name",u.name,u,null),Vt(t,n,"formEncType",u.formEncType,u,null),Vt(t,n,"formMethod",u.formMethod,u,null),Vt(t,n,"formTarget",u.formTarget,u,null)):(Vt(t,n,"encType",u.encType,u,null),Vt(t,n,"method",u.method,u,null),Vt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=Nl(""+o),t.setAttribute(r,o);break;case"onClick":o!=null&&(t.onclick=ra);break;case"onScroll":o!=null&&mt("scroll",t);break;case"onScrollEnd":o!=null&&mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=r}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}r=Nl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""+o):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":o===!0?t.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,o):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(r,o):t.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(r):t.setAttribute(r,o);break;case"popover":mt("beforetoggle",t),mt("toggle",t),St(t,"popover",o);break;case"xlinkActuate":At(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":At(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":At(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":At(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":At(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":At(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":At(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":At(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":At(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":St(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Vx.get(r)||r,St(t,r,o))}}function Md(t,n,r,o,u,d){switch(r){case"style":Gp(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=r}}break;case"children":typeof o=="string"?Yn(t,o):(typeof o=="number"||typeof o=="bigint")&&Yn(t,""+o);break;case"onScroll":o!=null&&mt("scroll",t);break;case"onScrollEnd":o!=null&&mt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ra);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ne.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),n=r.slice(2,u?r.length-7:void 0),d=t[Tn]||null,d=d!=null?d[r]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(n,o,u);break e}r in t?t[r]=o:o===!0?t.setAttribute(r,""):St(t,r,o)}}}function Dn(t,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mt("error",t),mt("load",t);var o=!1,u=!1,d;for(d in r)if(r.hasOwnProperty(d)){var y=r[d];if(y!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Vt(t,n,d,y,r,null)}}u&&Vt(t,n,"srcSet",r.srcSet,r,null),o&&Vt(t,n,"src",r.src,r,null);return;case"input":mt("invalid",t);var w=d=y=u=null,I=null,$=null;for(o in r)if(r.hasOwnProperty(o)){var fe=r[o];if(fe!=null)switch(o){case"name":u=fe;break;case"type":y=fe;break;case"checked":I=fe;break;case"defaultChecked":$=fe;break;case"value":d=fe;break;case"defaultValue":w=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(s(137,n));break;default:Vt(t,n,o,fe,r,null)}}Vn(t,d,w,I,$,y,u,!1);return;case"select":mt("invalid",t),o=y=d=null;for(u in r)if(r.hasOwnProperty(u)&&(w=r[u],w!=null))switch(u){case"value":d=w;break;case"defaultValue":y=w;break;case"multiple":o=w;default:Vt(t,n,u,w,r,null)}n=d,r=y,t.multiple=!!o,n!=null?nn(t,!!o,n,!1):r!=null&&nn(t,!!o,r,!0);return;case"textarea":mt("invalid",t),d=u=o=null;for(y in r)if(r.hasOwnProperty(y)&&(w=r[y],w!=null))switch(y){case"value":o=w;break;case"defaultValue":u=w;break;case"children":d=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:Vt(t,n,y,w,r,null)}$r(t,o,u,d);return;case"option":for(I in r)if(r.hasOwnProperty(I)&&(o=r[I],o!=null))switch(I){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Vt(t,n,I,o,r,null)}return;case"dialog":mt("beforetoggle",t),mt("toggle",t),mt("cancel",t),mt("close",t);break;case"iframe":case"object":mt("load",t);break;case"video":case"audio":for(o=0;o<Yo.length;o++)mt(Yo[o],t);break;case"image":mt("error",t),mt("load",t);break;case"details":mt("toggle",t);break;case"embed":case"source":case"link":mt("error",t),mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in r)if(r.hasOwnProperty($)&&(o=r[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Vt(t,n,$,o,r,null)}return;default:if(zu(n)){for(fe in r)r.hasOwnProperty(fe)&&(o=r[fe],o!==void 0&&Md(t,n,fe,o,r,void 0));return}}for(w in r)r.hasOwnProperty(w)&&(o=r[w],o!=null&&Vt(t,n,w,o,r,null))}function mS(t,n,r,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,y=null,w=null,I=null,$=null,fe=null;for(se in r){var ve=r[se];if(r.hasOwnProperty(se)&&ve!=null)switch(se){case"checked":break;case"value":break;case"defaultValue":I=ve;default:o.hasOwnProperty(se)||Vt(t,n,se,null,o,ve)}}for(var ee in o){var se=o[ee];if(ve=r[ee],o.hasOwnProperty(ee)&&(se!=null||ve!=null))switch(ee){case"type":d=se;break;case"name":u=se;break;case"checked":$=se;break;case"defaultChecked":fe=se;break;case"value":y=se;break;case"defaultValue":w=se;break;case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(s(137,n));break;default:se!==ve&&Vt(t,n,ee,se,o,ve)}}Ht(t,y,w,I,$,fe,d,u);return;case"select":se=y=w=ee=null;for(d in r)if(I=r[d],r.hasOwnProperty(d)&&I!=null)switch(d){case"value":break;case"multiple":se=I;default:o.hasOwnProperty(d)||Vt(t,n,d,null,o,I)}for(u in o)if(d=o[u],I=r[u],o.hasOwnProperty(u)&&(d!=null||I!=null))switch(u){case"value":ee=d;break;case"defaultValue":w=d;break;case"multiple":y=d;default:d!==I&&Vt(t,n,u,d,o,I)}n=w,r=y,o=se,ee!=null?nn(t,!!r,ee,!1):!!o!=!!r&&(n!=null?nn(t,!!r,n,!0):nn(t,!!r,r?[]:"",!1));return;case"textarea":se=ee=null;for(w in r)if(u=r[w],r.hasOwnProperty(w)&&u!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Vt(t,n,w,null,o,u)}for(y in o)if(u=o[y],d=r[y],o.hasOwnProperty(y)&&(u!=null||d!=null))switch(y){case"value":ee=u;break;case"defaultValue":se=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&Vt(t,n,y,u,o,d)}wn(t,ee,se);return;case"option":for(var Fe in r)if(ee=r[Fe],r.hasOwnProperty(Fe)&&ee!=null&&!o.hasOwnProperty(Fe))switch(Fe){case"selected":t.selected=!1;break;default:Vt(t,n,Fe,null,o,ee)}for(I in o)if(ee=o[I],se=r[I],o.hasOwnProperty(I)&&ee!==se&&(ee!=null||se!=null))switch(I){case"selected":t.selected=ee&&typeof ee!="function"&&typeof ee!="symbol";break;default:Vt(t,n,I,ee,o,se)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Je in r)ee=r[Je],r.hasOwnProperty(Je)&&ee!=null&&!o.hasOwnProperty(Je)&&Vt(t,n,Je,null,o,ee);for($ in o)if(ee=o[$],se=r[$],o.hasOwnProperty($)&&ee!==se&&(ee!=null||se!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(s(137,n));break;default:Vt(t,n,$,ee,o,se)}return;default:if(zu(n)){for(var kt in r)ee=r[kt],r.hasOwnProperty(kt)&&ee!==void 0&&!o.hasOwnProperty(kt)&&Md(t,n,kt,void 0,o,ee);for(fe in o)ee=o[fe],se=r[fe],!o.hasOwnProperty(fe)||ee===se||ee===void 0&&se===void 0||Md(t,n,fe,ee,o,se);return}}for(var q in r)ee=r[q],r.hasOwnProperty(q)&&ee!=null&&!o.hasOwnProperty(q)&&Vt(t,n,q,null,o,ee);for(ve in o)ee=o[ve],se=r[ve],!o.hasOwnProperty(ve)||ee===se||ee==null&&se==null||Vt(t,n,ve,ee,o,se)}function Vv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function gS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,r=performance.getEntriesByType("resource"),o=0;o<r.length;o++){var u=r[o],d=u.transferSize,y=u.initiatorType,w=u.duration;if(d&&w&&Vv(y)){for(y=0,w=u.responseEnd,o+=1;o<r.length;o++){var I=r[o],$=I.startTime;if($>w)break;var fe=I.transferSize,ve=I.initiatorType;fe&&Vv(ve)&&(I=I.responseEnd,y+=fe*(I<w?1:(w-$)/(I-$)))}if(--o,n+=8*(d+y)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Td=null,wd=null;function Ac(t){return t.nodeType===9?t:t.ownerDocument}function kv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Ad(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Rd=null;function vS(){var t=window.event;return t&&t.type==="popstate"?t===Rd?!1:(Rd=t,!0):(Rd=null,!1)}var Xv=typeof setTimeout=="function"?setTimeout:void 0,_S=typeof clearTimeout=="function"?clearTimeout:void 0,Wv=typeof Promise=="function"?Promise:void 0,xS=typeof queueMicrotask=="function"?queueMicrotask:typeof Wv<"u"?function(t){return Wv.resolve(null).then(t).catch(yS)}:Xv;function yS(t){setTimeout(function(){throw t})}function $a(t){return t==="head"}function qv(t,n){var r=n,o=0;do{var u=r.nextSibling;if(t.removeChild(r),u&&u.nodeType===8)if(r=u.data,r==="/$"||r==="/&"){if(o===0){t.removeChild(u),Ds(n);return}o--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")o++;else if(r==="html")Ko(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,Ko(r);for(var d=r.firstChild;d;){var y=d.nextSibling,w=d.nodeName;d[yr]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&d.rel.toLowerCase()==="stylesheet"||r.removeChild(d),d=y}}else r==="body"&&Ko(t.ownerDocument.body);r=u}while(r);Ds(n)}function Yv(t,n){var r=t;t=0;do{var o=r.nextSibling;if(r.nodeType===1?n?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(n?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=o}while(r)}function Cd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Cd(r),mo(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function SS(t,n,r,o){for(;t.nodeType===1;){var u=r;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[yr])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Mi(t.nextSibling),t===null)break}return null}function bS(t,n,r){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=Mi(t.nextSibling),t===null))return null;return t}function Zv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Mi(t.nextSibling),t===null))return null;return t}function Dd(t){return t.data==="$?"||t.data==="$~"}function Ud(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function ES(t,n){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||r.readyState!=="loading")n();else{var o=function(){n(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Mi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Nd=null;function Kv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(n===0)return Mi(t.nextSibling);n--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||n++}t=t.nextSibling}return null}function Qv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(n===0)return t;n--}else r!=="/$"&&r!=="/&"||n++}t=t.previousSibling}return null}function Jv(t,n,r){switch(n=Ac(r),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Ko(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);mo(t)}var Ti=new Map,$v=new Set;function Rc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Sa=Q.d;Q.d={f:MS,r:TS,D:wS,C:AS,L:RS,m:CS,X:US,S:DS,M:NS};function MS(){var t=Sa.f(),n=xc();return t||n}function TS(t){var n=W(t);n!==null&&n.tag===5&&n.type==="form"?gg(n):Sa.r(t)}var As=typeof document>"u"?null:document;function e0(t,n,r){var o=As;if(o&&typeof n=="string"&&n){var u=xn(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),$v.has(u)||($v.add(u),t={rel:t,crossOrigin:r,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Dn(n,"link",t),j(n),o.head.appendChild(n)))}}function wS(t){Sa.D(t),e0("dns-prefetch",t,null)}function AS(t,n){Sa.C(t,n),e0("preconnect",t,n)}function RS(t,n,r){Sa.L(t,n,r);var o=As;if(o&&t&&n){var u='link[rel="preload"][as="'+xn(n)+'"]';n==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+xn(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+xn(r.imageSizes)+'"]')):u+='[href="'+xn(t)+'"]';var d=u;switch(n){case"style":d=Rs(t);break;case"script":d=Cs(t)}Ti.has(d)||(t=g({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:t,as:n},r),Ti.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Qo(d))||n==="script"&&o.querySelector(Jo(d))||(n=o.createElement("link"),Dn(n,"link",t),j(n),o.head.appendChild(n)))}}function CS(t,n){Sa.m(t,n);var r=As;if(r&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+xn(o)+'"][href="'+xn(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Cs(t)}if(!Ti.has(d)&&(t=g({rel:"modulepreload",href:t},n),Ti.set(d,t),r.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Jo(d)))return}o=r.createElement("link"),Dn(o,"link",t),j(o),r.head.appendChild(o)}}}function DS(t,n,r){Sa.S(t,n,r);var o=As;if(o&&t){var u=ae(o).hoistableStyles,d=Rs(t);n=n||"default";var y=u.get(d);if(!y){var w={loading:0,preload:null};if(y=o.querySelector(Qo(d)))w.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},r),(r=Ti.get(d))&&Ld(t,r);var I=y=o.createElement("link");j(I),Dn(I,"link",t),I._p=new Promise(function($,fe){I.onload=$,I.onerror=fe}),I.addEventListener("load",function(){w.loading|=1}),I.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Cc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:w},u.set(d,y)}}}function US(t,n){Sa.X(t,n);var r=As;if(r&&t){var o=ae(r).hoistableScripts,u=Cs(t),d=o.get(u);d||(d=r.querySelector(Jo(u)),d||(t=g({src:t,async:!0},n),(n=Ti.get(u))&&Od(t,n),d=r.createElement("script"),j(d),Dn(d,"link",t),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function NS(t,n){Sa.M(t,n);var r=As;if(r&&t){var o=ae(r).hoistableScripts,u=Cs(t),d=o.get(u);d||(d=r.querySelector(Jo(u)),d||(t=g({src:t,async:!0,type:"module"},n),(n=Ti.get(u))&&Od(t,n),d=r.createElement("script"),j(d),Dn(d,"link",t),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function t0(t,n,r,o){var u=(u=Me.current)?Rc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=Rs(r.href),r=ae(u).hoistableStyles,o=r.get(n),o||(o={type:"style",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=Rs(r.href);var d=ae(u).hoistableStyles,y=d.get(t);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,y),(d=u.querySelector(Qo(t)))&&!d._p&&(y.instance=d,y.state.loading=5),Ti.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Ti.set(t,r),d||LS(u,t,r,y.state))),n&&o===null)throw Error(s(528,""));return y}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Cs(r),r=ae(u).hoistableScripts,o=r.get(n),o||(o={type:"script",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Rs(t){return'href="'+xn(t)+'"'}function Qo(t){return'link[rel="stylesheet"]['+t+"]"}function n0(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function LS(t,n,r,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Dn(n,"link",r),j(n),t.head.appendChild(n))}function Cs(t){return'[src="'+xn(t)+'"]'}function Jo(t){return"script[async]"+t}function i0(t,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+xn(r.href)+'"]');if(o)return n.instance=o,j(o),o;var u=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),j(o),Dn(o,"style",u),Cc(o,r.precedence,t),n.instance=o;case"stylesheet":u=Rs(r.href);var d=t.querySelector(Qo(u));if(d)return n.state.loading|=4,n.instance=d,j(d),d;o=n0(r),(u=Ti.get(u))&&Ld(o,u),d=(t.ownerDocument||t).createElement("link"),j(d);var y=d;return y._p=new Promise(function(w,I){y.onload=w,y.onerror=I}),Dn(d,"link",o),n.state.loading|=4,Cc(d,r.precedence,t),n.instance=d;case"script":return d=Cs(r.src),(u=t.querySelector(Jo(d)))?(n.instance=u,j(u),u):(o=r,(u=Ti.get(d))&&(o=g({},r),Od(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),j(u),Dn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Cc(o,r.precedence,t));return n.instance}function Cc(t,n,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,y=0;y<o.length;y++){var w=o[y];if(w.dataset.precedence===n)d=w;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(t,n.firstChild))}function Ld(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Od(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Dc=null;function a0(t,n,r){if(Dc===null){var o=new Map,u=Dc=new Map;u.set(r,o)}else u=Dc,o=u.get(r),o||(o=new Map,u.set(r,o));if(o.has(t))return o;for(o.set(t,null),r=r.getElementsByTagName(t),u=0;u<r.length;u++){var d=r[u];if(!(d[yr]||d[tn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(n)||"";y=t+y;var w=o.get(y);w?w.push(d):o.set(y,[d])}}return o}function r0(t,n,r){t=t.ownerDocument||t,t.head.insertBefore(r,n==="title"?t.querySelector("head > title"):null)}function OS(t,n,r){if(r===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function s0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function PS(t,n,r,o){if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var u=Rs(o.href),d=n.querySelector(Qo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Uc.bind(t),n.then(t,t)),r.state.loading|=4,r.instance=d,j(d);return}d=n.ownerDocument||n,o=n0(o),(u=Ti.get(u))&&Ld(o,u),d=d.createElement("link"),j(d);var y=d;y._p=new Promise(function(w,I){y.onload=w,y.onerror=I}),Dn(d,"link",o),r.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=Uc.bind(t),n.addEventListener("load",r),n.addEventListener("error",r))}}var Pd=0;function BS(t,n){return t.stylesheets&&t.count===0&&Lc(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var o=setTimeout(function(){if(t.stylesheets&&Lc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&Pd===0&&(Pd=62500*gS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Lc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>Pd?50:800)+n);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Uc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Lc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Nc=null;function Lc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Nc=new Map,n.forEach(zS,t),Nc=null,Uc.call(t))}function zS(t,n){if(!(n.state.loading&4)){var r=Nc.get(t);if(r)var o=r.get(null);else{r=new Map,Nc.set(t,r);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var y=u[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(r.set(y.dataset.precedence,y),o=y)}o&&r.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),d=r.get(y)||o,d===o&&r.set(null,u),r.set(y,u),this.count++,o=Uc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var $o={$$typeof:U,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function IS(t,n,r,o,u,d,y,w,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function o0(t,n,r,o,u,d,y,w,I,$,fe,ve){return t=new IS(t,n,r,y,I,$,fe,ve,w),n=1,d===!0&&(n|=24),d=ai(3,null,null,n),t.current=d,d.stateNode=t,n=pf(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:r,cache:n},_f(d),t}function l0(t){return t?(t=ss,t):ss}function c0(t,n,r,o,u,d){u=l0(u),o.context===null?o.context=u:o.pendingContext=u,o=Va(n),o.payload={element:r},d=d===void 0?null:d,d!==null&&(o.callback=d),r=ka(t,o,n),r!==null&&(ei(r,t,n),Uo(r,t,n))}function u0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<n?r:n}}function Bd(t,n){u0(t,n),(t=t.alternate)&&u0(t,n)}function f0(t){if(t.tag===13||t.tag===31){var n=Mr(t,67108864);n!==null&&ei(n,t,67108864),Bd(t,67108864)}}function d0(t){if(t.tag===13||t.tag===31){var n=ci();n=_r(n);var r=Mr(t,n);r!==null&&ei(r,t,n),Bd(t,n)}}var Oc=!0;function FS(t,n,r,o){var u=z.T;z.T=null;var d=Q.p;try{Q.p=2,zd(t,n,r,o)}finally{Q.p=d,z.T=u}}function HS(t,n,r,o){var u=z.T;z.T=null;var d=Q.p;try{Q.p=8,zd(t,n,r,o)}finally{Q.p=d,z.T=u}}function zd(t,n,r,o){if(Oc){var u=Id(o);if(u===null)Ed(t,n,o,Pc,r),p0(t,o);else if(VS(u,t,n,r,o))o.stopPropagation();else if(p0(t,o),n&4&&-1<GS.indexOf(t)){for(;u!==null;){var d=W(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=Re(d.pendingLanes);if(y!==0){var w=d;for(w.pendingLanes|=2,w.entangledLanes|=2;y;){var I=1<<31-tt(y);w.entanglements[1]|=I,y&=~I}qi(d),(Lt&6)===0&&(vc=de()+500,qo(0))}}break;case 31:case 13:w=Mr(d,2),w!==null&&ei(w,d,2),xc(),Bd(d,2)}if(d=Id(o),d===null&&Ed(t,n,o,Pc,r),d===u)break;u=d}u!==null&&o.stopPropagation()}else Ed(t,n,o,null,r)}}function Id(t){return t=Fu(t),Fd(t)}var Pc=null;function Fd(t){if(Pc=null,t=R(t),t!==null){var n=c(t);if(n===null)t=null;else{var r=n.tag;if(r===13){if(t=f(n),t!==null)return t;t=null}else if(r===31){if(t=h(n),t!==null)return t;t=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Pc=t,null}function h0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ee()){case ge:return 2;case Ge:return 8;case Ce:case Qe:return 32;case $e:return 268435456;default:return 32}default:return 32}}var Hd=!1,er=null,tr=null,nr=null,el=new Map,tl=new Map,ir=[],GS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function p0(t,n){switch(t){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":el.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":tl.delete(n.pointerId)}}function nl(t,n,r,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:r,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=W(n),n!==null&&f0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function VS(t,n,r,o,u){switch(n){case"focusin":return er=nl(er,t,n,r,o,u),!0;case"dragenter":return tr=nl(tr,t,n,r,o,u),!0;case"mouseover":return nr=nl(nr,t,n,r,o,u),!0;case"pointerover":var d=u.pointerId;return el.set(d,nl(el.get(d)||null,t,n,r,o,u)),!0;case"gotpointercapture":return d=u.pointerId,tl.set(d,nl(tl.get(d)||null,t,n,r,o,u)),!0}return!1}function m0(t){var n=R(t.target);if(n!==null){var r=c(n);if(r!==null){if(n=r.tag,n===13){if(n=f(r),n!==null){t.blockedOn=n,xr(t.priority,function(){d0(r)});return}}else if(n===31){if(n=h(r),n!==null){t.blockedOn=n,xr(t.priority,function(){d0(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var r=Id(t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);Iu=o,r.target.dispatchEvent(o),Iu=null}else return n=W(r),n!==null&&f0(n),t.blockedOn=r,!1;n.shift()}return!0}function g0(t,n,r){Bc(t)&&r.delete(n)}function kS(){Hd=!1,er!==null&&Bc(er)&&(er=null),tr!==null&&Bc(tr)&&(tr=null),nr!==null&&Bc(nr)&&(nr=null),el.forEach(g0),tl.forEach(g0)}function zc(t,n){t.blockedOn===n&&(t.blockedOn=null,Hd||(Hd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,kS)))}var Ic=null;function v0(t){Ic!==t&&(Ic=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Ic===t&&(Ic=null);for(var n=0;n<t.length;n+=3){var r=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Fd(o||r)===null)continue;break}var d=W(r);d!==null&&(t.splice(n,3),n-=3,If(d,{pending:!0,data:u,method:r.method,action:o},o,u))}}))}function Ds(t){function n(I){return zc(I,t)}er!==null&&zc(er,t),tr!==null&&zc(tr,t),nr!==null&&zc(nr,t),el.forEach(n),tl.forEach(n);for(var r=0;r<ir.length;r++){var o=ir[r];o.blockedOn===t&&(o.blockedOn=null)}for(;0<ir.length&&(r=ir[0],r.blockedOn===null);)m0(r),r.blockedOn===null&&ir.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var u=r[o],d=r[o+1],y=u[Tn]||null;if(typeof d=="function")y||v0(r);else if(y){var w=null;if(d&&d.hasAttribute("formAction")){if(u=d,y=d[Tn]||null)w=y.formAction;else if(Fd(u)!==null)continue}else w=y.action;typeof w=="function"?r[o+1]=w:(r.splice(o,3),o-=3),v0(r)}}}function _0(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(r,20)}function r(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(r,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Gd(t){this._internalRoot=t}Fc.prototype.render=Gd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var r=n.current,o=ci();c0(r,o,t,n,null,null)},Fc.prototype.unmount=Gd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;c0(t.current,2,null,t,null,null),xc(),n[aa]=null}};function Fc(t){this._internalRoot=t}Fc.prototype.unstable_scheduleHydration=function(t){if(t){var n=ho();t={blockedOn:null,target:t,priority:n};for(var r=0;r<ir.length&&n!==0&&n<ir[r].priority;r++);ir.splice(r,0,t),r===0&&m0(t)}};var x0=e.version;if(x0!=="19.2.5")throw Error(s(527,x0,"19.2.5"));Q.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=m(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var jS={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hc.isDisabled&&Hc.supportsFiber)try{Ze=Hc.inject(jS),Ve=Hc}catch{}}return al.createRoot=function(t,n){if(!l(t))throw Error(s(299));var r=!1,o="",u=wg,d=Ag,y=Rg;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=o0(t,1,!1,null,null,r,o,null,u,d,y,_0),t[aa]=n.current,bd(t),new Gd(n)},al.hydrateRoot=function(t,n,r){if(!l(t))throw Error(s(299));var o=!1,u="",d=wg,y=Ag,w=Rg,I=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(y=r.onCaughtError),r.onRecoverableError!==void 0&&(w=r.onRecoverableError),r.formState!==void 0&&(I=r.formState)),n=o0(t,1,!0,n,r??null,o,u,I,d,y,w,_0),n.context=l0(null),r=n.current,o=ci(),o=_r(o),u=Va(o),u.callback=null,ka(r,u,o),r=o,n.current.lanes=r,Mn(n,r),qi(n),t[aa]=n.current,bd(t),new Fc(n)},al.version="19.2.5",al}var C0;function e1(){if(C0)return jd.exports;C0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),jd.exports=$S(),jd.exports}var t1=e1();/**
 * react-router v7.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var D0="popstate";function U0(a){return typeof a=="object"&&a!=null&&"pathname"in a&&"search"in a&&"hash"in a&&"state"in a&&"key"in a}function n1(a={}){function e(s,l){var m;let c=(m=l.state)==null?void 0:m.masked,{pathname:f,search:h,hash:p}=c||s.location;return Uh("",{pathname:f,search:h,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default",c?{pathname:s.location.pathname,search:s.location.search,hash:s.location.hash}:void 0)}function i(s,l){return typeof l=="string"?l:ml(l)}return a1(e,i,null,a)}function en(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function ta(a,e){if(!a){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function i1(){return Math.random().toString(36).substring(2,10)}function N0(a,e){return{usr:a.state,key:a.key,idx:e,masked:a.unstable_mask?{pathname:a.pathname,search:a.search,hash:a.hash}:void 0}}function Uh(a,e,i=null,s,l){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof e=="string"?io(e):e,state:i,key:e&&e.key||s||i1(),unstable_mask:l}}function ml({pathname:a="/",search:e="",hash:i=""}){return e&&e!=="?"&&(a+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(a+=i.charAt(0)==="#"?i:"#"+i),a}function io(a){let e={};if(a){let i=a.indexOf("#");i>=0&&(e.hash=a.substring(i),a=a.substring(0,i));let s=a.indexOf("?");s>=0&&(e.search=a.substring(s),a=a.substring(0,s)),a&&(e.pathname=a)}return e}function a1(a,e,i,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,f=l.history,h="POP",p=null,m=v();m==null&&(m=0,f.replaceState({...f.state,idx:m},""));function v(){return(f.state||{idx:null}).idx}function g(){h="POP";let b=v(),_=b==null?null:b-m;m=b,p&&p({action:h,location:T.location,delta:_})}function x(b,_){h="PUSH";let L=U0(b)?b:Uh(T.location,b,_);m=v()+1;let U=N0(L,m),D=T.createHref(L.unstable_mask||L);try{f.pushState(U,"",D)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;l.location.assign(D)}c&&p&&p({action:h,location:T.location,delta:1})}function E(b,_){h="REPLACE";let L=U0(b)?b:Uh(T.location,b,_);m=v();let U=N0(L,m),D=T.createHref(L.unstable_mask||L);f.replaceState(U,"",D),c&&p&&p({action:h,location:T.location,delta:0})}function M(b){return r1(b)}let T={get action(){return h},get location(){return a(l,f)},listen(b){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(D0,g),p=b,()=>{l.removeEventListener(D0,g),p=null}},createHref(b){return e(l,b)},createURL:M,encodeLocation(b){let _=M(b);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:x,replace:E,go(b){return f.go(b)}};return T}function r1(a,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),en(i,"No window.location.(origin|href) available to create URL");let s=typeof a=="string"?a:ml(a);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=i+s),new URL(s,i)}function I_(a,e,i="/"){return s1(a,e,i,!1)}function s1(a,e,i,s){let l=typeof e=="string"?io(e):e,c=Ua(l.pathname||"/",i);if(c==null)return null;let f=F_(a);o1(f);let h=null;for(let p=0;h==null&&p<f.length;++p){let m=_1(c);h=g1(f[p],m,s)}return h}function F_(a,e=[],i=[],s="",l=!1){let c=(f,h,p=l,m)=>{let v={relativePath:m===void 0?f.path||"":m,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(s)&&p)return;en(v.relativePath.startsWith(s),`Absolute route path "${v.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(s.length)}let g=Ji([s,v.relativePath]),x=i.concat(v);f.children&&f.children.length>0&&(en(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),F_(f.children,e,x,g,p)),!(f.path==null&&!f.index)&&e.push({path:g,score:p1(g,f.index),routesMeta:x})};return a.forEach((f,h)=>{var p;if(f.path===""||!((p=f.path)!=null&&p.includes("?")))c(f,h);else for(let m of H_(f.path))c(f,h,!0,m)}),e}function H_(a){let e=a.split("/");if(e.length===0)return[];let[i,...s]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let f=H_(s.join("/")),h=[];return h.push(...f.map(p=>p===""?c:[c,p].join("/"))),l&&h.push(...f),h.map(p=>a.startsWith("/")&&p===""?"/":p)}function o1(a){a.sort((e,i)=>e.score!==i.score?i.score-e.score:m1(e.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var l1=/^:[\w-]+$/,c1=3,u1=2,f1=1,d1=10,h1=-2,L0=a=>a==="*";function p1(a,e){let i=a.split("/"),s=i.length;return i.some(L0)&&(s+=h1),e&&(s+=u1),i.filter(l=>!L0(l)).reduce((l,c)=>l+(l1.test(c)?c1:c===""?f1:d1),s)}function m1(a,e){return a.length===e.length&&a.slice(0,-1).every((s,l)=>s===e[l])?a[a.length-1]-e[e.length-1]:0}function g1(a,e,i=!1){let{routesMeta:s}=a,l={},c="/",f=[];for(let h=0;h<s.length;++h){let p=s[h],m=h===s.length-1,v=c==="/"?e:e.slice(c.length)||"/",g=yu({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},v),x=p.route;if(!g&&m&&i&&!s[s.length-1].route.index&&(g=yu({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},v)),!g)return null;Object.assign(l,g.params),f.push({params:l,pathname:Ji([c,g.pathname]),pathnameBase:b1(Ji([c,g.pathnameBase])),route:x}),g.pathnameBase!=="/"&&(c=Ji([c,g.pathnameBase]))}return f}function yu(a,e){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[i,s]=v1(a.path,a.caseSensitive,a.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:s.reduce((m,{paramName:v,isOptional:g},x)=>{if(v==="*"){let M=h[x]||"";f=c.slice(0,c.length-M.length).replace(/(.)\/+$/,"$1")}const E=h[x];return g&&!E?m[v]=void 0:m[v]=(E||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:f,pattern:a}}function v1(a,e=!1,i=!0){ta(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let s=[],l="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,p,m,v)=>{if(s.push({paramName:h,isOptional:p!=null}),p){let g=v.charAt(m+f.length);return g&&g!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(s.push({paramName:"*"}),l+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":a!==""&&a!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function _1(a){try{return a.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ta(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),a}}function Ua(a,e){if(e==="/")return a;if(!a.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,s=a.charAt(i);return s&&s!=="/"?null:a.slice(i)||"/"}var x1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function y1(a,e="/"){let{pathname:i,search:s="",hash:l=""}=typeof a=="string"?io(a):a,c;return i?(i=i.replace(/\/\/+/g,"/"),i.startsWith("/")?c=O0(i.substring(1),"/"):c=O0(i,e)):c=e,{pathname:c,search:E1(s),hash:M1(l)}}function O0(a,e){let i=e.replace(/\/+$/,"").split("/");return a.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Yd(a,e,i,s){return`Cannot include a '${a}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function S1(a){return a.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function G_(a){let e=S1(a);return e.map((i,s)=>s===e.length-1?i.pathname:i.pathnameBase)}function mp(a,e,i,s=!1){let l;typeof a=="string"?l=io(a):(l={...a},en(!l.pathname||!l.pathname.includes("?"),Yd("?","pathname","search",l)),en(!l.pathname||!l.pathname.includes("#"),Yd("#","pathname","hash",l)),en(!l.search||!l.search.includes("#"),Yd("#","search","hash",l)));let c=a===""||l.pathname==="",f=c?"/":l.pathname,h;if(f==null)h=i;else{let g=e.length-1;if(!s&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),g-=1;l.pathname=x.join("/")}h=g>=0?e[g]:"/"}let p=y1(l,h),m=f&&f!=="/"&&f.endsWith("/"),v=(c||f===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(m||v)&&(p.pathname+="/"),p}var Ji=a=>a.join("/").replace(/\/\/+/g,"/"),b1=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),E1=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,M1=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,T1=class{constructor(a,e,i,s=!1){this.status=a,this.statusText=e||"",this.internal=s,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function w1(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function A1(a){return a.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var V_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function k_(a,e){let i=a;if(typeof i!="string"||!x1.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let s=i,l=!1;if(V_)try{let c=new URL(window.location.href),f=i.startsWith("//")?new URL(c.protocol+i):new URL(i),h=Ua(f.pathname,e);f.origin===c.origin&&h!=null?i=h+f.search+f.hash:l=!0}catch{ta(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var j_=["POST","PUT","PATCH","DELETE"];new Set(j_);var R1=["GET",...j_];new Set(R1);var ao=le.createContext(null);ao.displayName="DataRouter";var Cu=le.createContext(null);Cu.displayName="DataRouterState";var X_=le.createContext(!1);function C1(){return le.useContext(X_)}var W_=le.createContext({isTransitioning:!1});W_.displayName="ViewTransition";var D1=le.createContext(new Map);D1.displayName="Fetchers";var U1=le.createContext(null);U1.displayName="Await";var Di=le.createContext(null);Di.displayName="Navigation";var El=le.createContext(null);El.displayName="Location";var ia=le.createContext({outlet:null,matches:[],isDataRoute:!1});ia.displayName="Route";var gp=le.createContext(null);gp.displayName="RouteError";var q_="REACT_ROUTER_ERROR",N1="REDIRECT",L1="ROUTE_ERROR_RESPONSE";function O1(a){if(a.startsWith(`${q_}:${N1}:{`))try{let e=JSON.parse(a.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function P1(a){if(a.startsWith(`${q_}:${L1}:{`))try{let e=JSON.parse(a.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new T1(e.status,e.statusText,e.data)}catch{}}function B1(a,{relative:e}={}){en(Ml(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=le.useContext(Di),{hash:l,pathname:c,search:f}=Tl(a,{relative:e}),h=c;return i!=="/"&&(h=c==="/"?i:Ji([i,c])),s.createHref({pathname:h,search:f,hash:l})}function Ml(){return le.useContext(El)!=null}function Vi(){return en(Ml(),"useLocation() may be used only in the context of a <Router> component."),le.useContext(El).location}var Y_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Z_(a){le.useContext(Di).static||le.useLayoutEffect(a)}function z1(){let{isDataRoute:a}=le.useContext(ia);return a?Q1():I1()}function I1(){en(Ml(),"useNavigate() may be used only in the context of a <Router> component.");let a=le.useContext(ao),{basename:e,navigator:i}=le.useContext(Di),{matches:s}=le.useContext(ia),{pathname:l}=Vi(),c=JSON.stringify(G_(s)),f=le.useRef(!1);return Z_(()=>{f.current=!0}),le.useCallback((p,m={})=>{if(ta(f.current,Y_),!f.current)return;if(typeof p=="number"){i.go(p);return}let v=mp(p,JSON.parse(c),l,m.relative==="path");a==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:Ji([e,v.pathname])),(m.replace?i.replace:i.push)(v,m.state,m)},[e,i,c,l,a])}le.createContext(null);function F1(){let{matches:a}=le.useContext(ia),e=a[a.length-1];return e?e.params:{}}function Tl(a,{relative:e}={}){let{matches:i}=le.useContext(ia),{pathname:s}=Vi(),l=JSON.stringify(G_(i));return le.useMemo(()=>mp(a,JSON.parse(l),s,e==="path"),[a,l,s,e])}function H1(a,e){return K_(a,e)}function K_(a,e,i){var b;en(Ml(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=le.useContext(Di),{matches:l}=le.useContext(ia),c=l[l.length-1],f=c?c.params:{},h=c?c.pathname:"/",p=c?c.pathnameBase:"/",m=c&&c.route;{let _=m&&m.path||"";J_(h,!m||_.endsWith("*")||_.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_==="/"?"*":`${_}/*`}">.`)}let v=Vi(),g;if(e){let _=typeof e=="string"?io(e):e;en(p==="/"||((b=_.pathname)==null?void 0:b.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${_.pathname}" was given in the \`location\` prop.`),g=_}else g=v;let x=g.pathname||"/",E=x;if(p!=="/"){let _=p.replace(/^\//,"").split("/");E="/"+x.replace(/^\//,"").split("/").slice(_.length).join("/")}let M=I_(a,{pathname:E});ta(m||M!=null,`No routes matched location "${g.pathname}${g.search}${g.hash}" `),ta(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let T=X1(M&&M.map(_=>Object.assign({},_,{params:Object.assign({},f,_.params),pathname:Ji([p,s.encodeLocation?s.encodeLocation(_.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?p:Ji([p,s.encodeLocation?s.encodeLocation(_.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathnameBase])})),l,i);return e&&T?le.createElement(El.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...g},navigationType:"POP"}},T):T}function G1(){let a=K1(),e=w1(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),i=a instanceof Error?a.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",a),f=le.createElement(le.Fragment,null,le.createElement("p",null,"💿 Hey developer 👋"),le.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",le.createElement("code",{style:c},"ErrorBoundary")," or"," ",le.createElement("code",{style:c},"errorElement")," prop on your route.")),le.createElement(le.Fragment,null,le.createElement("h2",null,"Unexpected Application Error!"),le.createElement("h3",{style:{fontStyle:"italic"}},e),i?le.createElement("pre",{style:l},i):null,f)}var V1=le.createElement(G1,null),Q_=class extends le.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,e){return e.location!==a.location||e.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:e.error,location:e.location,revalidation:a.revalidation||e.revalidation}}componentDidCatch(a,e){this.props.onError?this.props.onError(a,e):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const i=P1(a.digest);i&&(a=i)}let e=a!==void 0?le.createElement(ia.Provider,{value:this.props.routeContext},le.createElement(gp.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?le.createElement(k1,{error:a},e):e}};Q_.contextType=X_;var Zd=new WeakMap;function k1({children:a,error:e}){let{basename:i}=le.useContext(Di);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=O1(e.digest);if(s){let l=Zd.get(e);if(l)throw l;let c=k_(s.location,i);if(V_&&!Zd.get(e))if(c.isExternal||s.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:s.replace}));throw Zd.set(e,f),f}return le.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return a}function j1({routeContext:a,match:e,children:i}){let s=le.useContext(ao);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),le.createElement(ia.Provider,{value:a},i)}function X1(a,e=[],i){let s=i==null?void 0:i.state;if(a==null){if(!s)return null;if(s.errors)a=s.matches;else if(e.length===0&&!s.initialized&&s.matches.length>0)a=s.matches;else return null}let l=a,c=s==null?void 0:s.errors;if(c!=null){let v=l.findIndex(g=>g.route.id&&(c==null?void 0:c[g.route.id])!==void 0);en(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,v+1))}let f=!1,h=-1;if(i&&s){f=s.renderFallback;for(let v=0;v<l.length;v++){let g=l[v];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(h=v),g.route.id){let{loaderData:x,errors:E}=s,M=g.route.loader&&!x.hasOwnProperty(g.route.id)&&(!E||E[g.route.id]===void 0);if(g.route.lazy||M){i.isStatic&&(f=!0),h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}}let p=i==null?void 0:i.onError,m=s&&p?(v,g)=>{var x,E;p(v,{location:s.location,params:((E=(x=s.matches)==null?void 0:x[0])==null?void 0:E.params)??{},unstable_pattern:A1(s.matches),errorInfo:g})}:void 0;return l.reduceRight((v,g,x)=>{let E,M=!1,T=null,b=null;s&&(E=c&&g.route.id?c[g.route.id]:void 0,T=g.route.errorElement||V1,f&&(h<0&&x===0?(J_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,b=null):h===x&&(M=!0,b=g.route.hydrateFallbackElement||null)));let _=e.concat(l.slice(0,x+1)),L=()=>{let U;return E?U=T:M?U=b:g.route.Component?U=le.createElement(g.route.Component,null):g.route.element?U=g.route.element:U=v,le.createElement(j1,{match:g,routeContext:{outlet:v,matches:_,isDataRoute:s!=null},children:U})};return s&&(g.route.ErrorBoundary||g.route.errorElement||x===0)?le.createElement(Q_,{location:s.location,revalidation:s.revalidation,component:T,error:E,children:L(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:m}):L()},null)}function vp(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function W1(a){let e=le.useContext(ao);return en(e,vp(a)),e}function q1(a){let e=le.useContext(Cu);return en(e,vp(a)),e}function Y1(a){let e=le.useContext(ia);return en(e,vp(a)),e}function _p(a){let e=Y1(a),i=e.matches[e.matches.length-1];return en(i.route.id,`${a} can only be used on routes that contain a unique "id"`),i.route.id}function Z1(){return _p("useRouteId")}function K1(){var s;let a=le.useContext(gp),e=q1("useRouteError"),i=_p("useRouteError");return a!==void 0?a:(s=e.errors)==null?void 0:s[i]}function Q1(){let{router:a}=W1("useNavigate"),e=_p("useNavigate"),i=le.useRef(!1);return Z_(()=>{i.current=!0}),le.useCallback(async(l,c={})=>{ta(i.current,Y_),i.current&&(typeof l=="number"?await a.navigate(l):await a.navigate(l,{fromRouteId:e,...c}))},[a,e])}var P0={};function J_(a,e,i){!e&&!P0[a]&&(P0[a]=!0,ta(!1,i))}le.memo(J1);function J1({routes:a,future:e,state:i,isStatic:s,onError:l}){return K_(a,void 0,{state:i,isStatic:s,onError:l})}function Un(a){en(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function $1({basename:a="/",children:e=null,location:i,navigationType:s="POP",navigator:l,static:c=!1,unstable_useTransitions:f}){en(!Ml(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=a.replace(/^\/*/,"/"),p=le.useMemo(()=>({basename:h,navigator:l,static:c,unstable_useTransitions:f,future:{}}),[h,l,c,f]);typeof i=="string"&&(i=io(i));let{pathname:m="/",search:v="",hash:g="",state:x=null,key:E="default",unstable_mask:M}=i,T=le.useMemo(()=>{let b=Ua(m,h);return b==null?null:{location:{pathname:b,search:v,hash:g,state:x,key:E,unstable_mask:M},navigationType:s}},[h,m,v,g,x,E,s,M]);return ta(T!=null,`<Router basename="${h}"> is not able to match the URL "${m}${v}${g}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:le.createElement(Di.Provider,{value:p},le.createElement(El.Provider,{children:e,value:T}))}function eb({children:a,location:e}){return H1(Nh(a),e)}function Nh(a,e=[]){let i=[];return le.Children.forEach(a,(s,l)=>{if(!le.isValidElement(s))return;let c=[...e,l];if(s.type===le.Fragment){i.push.apply(i,Nh(s.props.children,c));return}en(s.type===Un,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),en(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Nh(s.props.children,c)),i.push(f)}),i}var uu="get",fu="application/x-www-form-urlencoded";function Du(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function tb(a){return Du(a)&&a.tagName.toLowerCase()==="button"}function nb(a){return Du(a)&&a.tagName.toLowerCase()==="form"}function ib(a){return Du(a)&&a.tagName.toLowerCase()==="input"}function ab(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function rb(a,e){return a.button===0&&(!e||e==="_self")&&!ab(a)}var Gc=null;function sb(){if(Gc===null)try{new FormData(document.createElement("form"),0),Gc=!1}catch{Gc=!0}return Gc}var ob=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Kd(a){return a!=null&&!ob.has(a)?(ta(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${fu}"`),null):a}function lb(a,e){let i,s,l,c,f;if(nb(a)){let h=a.getAttribute("action");s=h?Ua(h,e):null,i=a.getAttribute("method")||uu,l=Kd(a.getAttribute("enctype"))||fu,c=new FormData(a)}else if(tb(a)||ib(a)&&(a.type==="submit"||a.type==="image")){let h=a.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=a.getAttribute("formaction")||h.getAttribute("action");if(s=p?Ua(p,e):null,i=a.getAttribute("formmethod")||h.getAttribute("method")||uu,l=Kd(a.getAttribute("formenctype"))||Kd(h.getAttribute("enctype"))||fu,c=new FormData(h,a),!sb()){let{name:m,type:v,value:g}=a;if(v==="image"){let x=m?`${m}.`:"";c.append(`${x}x`,"0"),c.append(`${x}y`,"0")}else m&&c.append(m,g)}}else{if(Du(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=uu,s=null,l=fu,f=a}return c&&l==="text/plain"&&(f=c,c=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function xp(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function $_(a,e,i,s){let l=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${s}`:l.pathname=`${l.pathname}.${s}`:l.pathname==="/"?l.pathname=`_root.${s}`:e&&Ua(l.pathname,e)==="/"?l.pathname=`${e.replace(/\/$/,"")}/_root.${s}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${s}`,l}async function cb(a,e){if(a.id in e)return e[a.id];try{let i=await import(a.module);return e[a.id]=i,i}catch(i){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ub(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function fb(a,e,i){let s=await Promise.all(a.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await cb(c,i);return f.links?f.links():[]}return[]}));return mb(s.flat(1).filter(ub).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function B0(a,e,i,s,l,c){let f=(p,m)=>i[m]?p.route.id!==i[m].route.id:!0,h=(p,m)=>{var v;return i[m].pathname!==p.pathname||((v=i[m].route.path)==null?void 0:v.endsWith("*"))&&i[m].params["*"]!==p.params["*"]};return c==="assets"?e.filter((p,m)=>f(p,m)||h(p,m)):c==="data"?e.filter((p,m)=>{var g;let v=s.routes[p.route.id];if(!v||!v.hasLoader)return!1;if(f(p,m)||h(p,m))return!0;if(p.route.shouldRevalidate){let x=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((g=i[0])==null?void 0:g.params)||{},nextUrl:new URL(a,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function db(a,e,{includeHydrateFallback:i}={}){return hb(a.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function hb(a){return[...new Set(a)]}function pb(a){let e={},i=Object.keys(a).sort();for(let s of i)e[s]=a[s];return e}function mb(a,e){let i=new Set;return new Set(e),a.reduce((s,l)=>{let c=JSON.stringify(pb(l));return i.has(c)||(i.add(c),s.push({key:c,link:l})),s},[])}function yp(){let a=le.useContext(ao);return xp(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function gb(){let a=le.useContext(Cu);return xp(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Sp=le.createContext(void 0);Sp.displayName="FrameworkContext";function bp(){let a=le.useContext(Sp);return xp(a,"You must render this element inside a <HydratedRouter> element"),a}function vb(a,e){let i=le.useContext(Sp),[s,l]=le.useState(!1),[c,f]=le.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:m,onMouseLeave:v,onTouchStart:g}=e,x=le.useRef(null);le.useEffect(()=>{if(a==="render"&&f(!0),a==="viewport"){let T=_=>{_.forEach(L=>{f(L.isIntersecting)})},b=new IntersectionObserver(T,{threshold:.5});return x.current&&b.observe(x.current),()=>{b.disconnect()}}},[a]),le.useEffect(()=>{if(s){let T=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(T)}}},[s]);let E=()=>{l(!0)},M=()=>{l(!1),f(!1)};return i?a!=="intent"?[c,x,{}]:[c,x,{onFocus:rl(h,E),onBlur:rl(p,M),onMouseEnter:rl(m,E),onMouseLeave:rl(v,M),onTouchStart:rl(g,E)}]:[!1,x,{}]}function rl(a,e){return i=>{a&&a(i),i.defaultPrevented||e(i)}}function _b({page:a,...e}){let i=C1(),{router:s}=yp(),l=le.useMemo(()=>I_(s.routes,a,s.basename),[s.routes,a,s.basename]);return l?i?le.createElement(yb,{page:a,matches:l,...e}):le.createElement(Sb,{page:a,matches:l,...e}):null}function xb(a){let{manifest:e,routeModules:i}=bp(),[s,l]=le.useState([]);return le.useEffect(()=>{let c=!1;return fb(a,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[a,e,i]),s}function yb({page:a,matches:e,...i}){let s=Vi(),{future:l}=bp(),{basename:c}=yp(),f=le.useMemo(()=>{if(a===s.pathname+s.search+s.hash)return[];let h=$_(a,c,l.unstable_trailingSlashAwareDataRequests,"rsc"),p=!1,m=[];for(let v of e)typeof v.route.shouldRevalidate=="function"?p=!0:m.push(v.route.id);return p&&m.length>0&&h.searchParams.set("_routes",m.join(",")),[h.pathname+h.search]},[c,l.unstable_trailingSlashAwareDataRequests,a,s,e]);return le.createElement(le.Fragment,null,f.map(h=>le.createElement("link",{key:h,rel:"prefetch",as:"fetch",href:h,...i})))}function Sb({page:a,matches:e,...i}){let s=Vi(),{future:l,manifest:c,routeModules:f}=bp(),{basename:h}=yp(),{loaderData:p,matches:m}=gb(),v=le.useMemo(()=>B0(a,e,m,c,s,"data"),[a,e,m,c,s]),g=le.useMemo(()=>B0(a,e,m,c,s,"assets"),[a,e,m,c,s]),x=le.useMemo(()=>{if(a===s.pathname+s.search+s.hash)return[];let T=new Set,b=!1;if(e.forEach(L=>{var D;let U=c.routes[L.route.id];!U||!U.hasLoader||(!v.some(k=>k.route.id===L.route.id)&&L.route.id in p&&((D=f[L.route.id])!=null&&D.shouldRevalidate)||U.hasClientLoader?b=!0:T.add(L.route.id))}),T.size===0)return[];let _=$_(a,h,l.unstable_trailingSlashAwareDataRequests,"data");return b&&T.size>0&&_.searchParams.set("_routes",e.filter(L=>T.has(L.route.id)).map(L=>L.route.id).join(",")),[_.pathname+_.search]},[h,l.unstable_trailingSlashAwareDataRequests,p,s,c,v,e,a,f]),E=le.useMemo(()=>db(g,c),[g,c]),M=xb(g);return le.createElement(le.Fragment,null,x.map(T=>le.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...i})),E.map(T=>le.createElement("link",{key:T,rel:"modulepreload",href:T,...i})),M.map(({key:T,link:b})=>le.createElement("link",{key:T,nonce:i.nonce,...b,crossOrigin:b.crossOrigin??i.crossOrigin})))}function bb(...a){return e=>{a.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var Eb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Eb&&(window.__reactRouterVersion="7.14.0")}catch{}function Mb({basename:a,children:e,unstable_useTransitions:i,window:s}){let l=le.useRef();l.current==null&&(l.current=n1({window:s,v5Compat:!0}));let c=l.current,[f,h]=le.useState({action:c.action,location:c.location}),p=le.useCallback(m=>{i===!1?h(m):le.startTransition(()=>h(m))},[i]);return le.useLayoutEffect(()=>c.listen(p),[c,p]),le.createElement($1,{basename:a,children:e,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:i})}var ex=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qr=le.forwardRef(function({onClick:e,discover:i="render",prefetch:s="none",relative:l,reloadDocument:c,replace:f,unstable_mask:h,state:p,target:m,to:v,preventScrollReset:g,viewTransition:x,unstable_defaultShouldRevalidate:E,...M},T){let{basename:b,navigator:_,unstable_useTransitions:L}=le.useContext(Di),U=typeof v=="string"&&ex.test(v),D=k_(v,b);v=D.to;let k=B1(v,{relative:l}),H=Vi(),B=null;if(h){let pe=mp(h,[],H.unstable_mask?H.unstable_mask.pathname:"/",!0);b!=="/"&&(pe.pathname=pe.pathname==="/"?b:Ji([b,pe.pathname])),B=_.createHref(pe)}let[Y,N,C]=vb(s,M),V=Rb(v,{replace:f,unstable_mask:h,state:p,target:m,preventScrollReset:g,relative:l,viewTransition:x,unstable_defaultShouldRevalidate:E,unstable_useTransitions:L});function ue(pe){e&&e(pe),pe.defaultPrevented||V(pe)}let re=!(D.isExternal||c),_e=le.createElement("a",{...M,...C,href:(re?B:void 0)||D.absoluteURL||k,onClick:re?ue:e,ref:bb(T,N),target:m,"data-discover":!U&&i==="render"?"true":void 0});return Y&&!U?le.createElement(le.Fragment,null,_e,le.createElement(_b,{page:k})):_e});Qr.displayName="Link";var Tb=le.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:s="",end:l=!1,style:c,to:f,viewTransition:h,children:p,...m},v){let g=Tl(f,{relative:m.relative}),x=Vi(),E=le.useContext(Cu),{navigator:M,basename:T}=le.useContext(Di),b=E!=null&&Lb(g)&&h===!0,_=M.encodeLocation?M.encodeLocation(g).pathname:g.pathname,L=x.pathname,U=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;i||(L=L.toLowerCase(),U=U?U.toLowerCase():null,_=_.toLowerCase()),U&&T&&(U=Ua(U,T)||U);const D=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let k=L===_||!l&&L.startsWith(_)&&L.charAt(D)==="/",H=U!=null&&(U===_||!l&&U.startsWith(_)&&U.charAt(_.length)==="/"),B={isActive:k,isPending:H,isTransitioning:b},Y=k?e:void 0,N;typeof s=="function"?N=s(B):N=[s,k?"active":null,H?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let C=typeof c=="function"?c(B):c;return le.createElement(Qr,{...m,"aria-current":Y,className:N,ref:v,style:C,to:f,viewTransition:h},typeof p=="function"?p(B):p)});Tb.displayName="NavLink";var wb=le.forwardRef(({discover:a="render",fetcherKey:e,navigate:i,reloadDocument:s,replace:l,state:c,method:f=uu,action:h,onSubmit:p,relative:m,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:x,...E},M)=>{let{unstable_useTransitions:T}=le.useContext(Di),b=Ub(),_=Nb(h,{relative:m}),L=f.toLowerCase()==="get"?"get":"post",U=typeof h=="string"&&ex.test(h),D=k=>{if(p&&p(k),k.defaultPrevented)return;k.preventDefault();let H=k.nativeEvent.submitter,B=(H==null?void 0:H.getAttribute("formmethod"))||f,Y=()=>b(H||k.currentTarget,{fetcherKey:e,method:B,navigate:i,replace:l,state:c,relative:m,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:x});T&&i!==!1?le.startTransition(()=>Y()):Y()};return le.createElement("form",{ref:M,method:L,action:_,onSubmit:s?p:D,...E,"data-discover":!U&&a==="render"?"true":void 0})});wb.displayName="Form";function Ab(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function tx(a){let e=le.useContext(ao);return en(e,Ab(a)),e}function Rb(a,{target:e,replace:i,unstable_mask:s,state:l,preventScrollReset:c,relative:f,viewTransition:h,unstable_defaultShouldRevalidate:p,unstable_useTransitions:m}={}){let v=z1(),g=Vi(),x=Tl(a,{relative:f});return le.useCallback(E=>{if(rb(E,e)){E.preventDefault();let M=i!==void 0?i:ml(g)===ml(x),T=()=>v(a,{replace:M,unstable_mask:s,state:l,preventScrollReset:c,relative:f,viewTransition:h,unstable_defaultShouldRevalidate:p});m?le.startTransition(()=>T()):T()}},[g,v,x,i,s,l,e,a,c,f,h,p,m])}var Cb=0,Db=()=>`__${String(++Cb)}__`;function Ub(){let{router:a}=tx("useSubmit"),{basename:e}=le.useContext(Di),i=Z1(),s=a.fetch,l=a.navigate;return le.useCallback(async(c,f={})=>{let{action:h,method:p,encType:m,formData:v,body:g}=lb(c,e);if(f.navigate===!1){let x=f.fetcherKey||Db();await s(x,i,f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:v,body:g,formMethod:f.method||p,formEncType:f.encType||m,flushSync:f.flushSync})}else await l(f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:v,body:g,formMethod:f.method||p,formEncType:f.encType||m,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[s,l,e,i])}function Nb(a,{relative:e}={}){let{basename:i}=le.useContext(Di),s=le.useContext(ia);en(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...Tl(a||".",{relative:e})},f=Vi();if(a==null){c.search=f.search;let h=new URLSearchParams(c.search),p=h.getAll("index");if(p.some(v=>v==="")){h.delete("index"),p.filter(g=>g).forEach(g=>h.append("index",g));let v=h.toString();c.search=v?`?${v}`:""}}return(!a||a===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:Ji([i,c.pathname])),ml(c)}function Lb(a,{relative:e}={}){let i=le.useContext(W_);en(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=tx("useViewTransitionState"),l=Tl(a,{relative:e});if(!i.isTransitioning)return!1;let c=Ua(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=Ua(i.nextLocation.pathname,s)||i.nextLocation.pathname;return yu(l.pathname,f)!=null||yu(l.pathname,c)!=null}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wl="176",Ob=0,z0=1,Pb=2,nx=1,Bb=2,Aa=3,Na=0,bn=1,di=2,Wn=0,Ys=1,I0=2,F0=3,H0=4,zb=5,Xr=100,Ib=101,Fb=102,Hb=103,Gb=104,Vb=200,kb=201,jb=202,Xb=203,Lh=204,Oh=205,Wb=206,qb=207,Yb=208,Zb=209,Kb=210,Qb=211,Jb=212,$b=213,eE=214,Su=0,gl=1,vl=2,Zr=3,Ks=4,bu=5,Eu=6,_l=7,ix=0,tE=1,nE=2,Ca=0,iE=1,aE=2,rE=3,sE=4,oE=5,lE=6,cE=7,ax=300,Qs=301,Js=302,Ph=303,Bh=304,Uu=306,zh=1e3,qr=1001,Ih=1002,mi=1003,uE=1004,Vc=1005,ni=1006,Qd=1007,Yr=1008,Ln=1009,rx=1010,sx=1011,xl=1012,Ep=1013,Kr=1014,Qi=1015,Al=1016,Mp=1017,Tp=1018,$s=1020,ox=35902,lx=1021,cx=1022,Gi=1023,yl=1026,eo=1027,ux=1028,wp=1029,fx=1030,Ap=1031,Rp=1033,du=33776,hu=33777,pu=33778,mu=33779,Fh=35840,Hh=35841,Gh=35842,Vh=35843,kh=36196,jh=37492,Xh=37496,Wh=37808,qh=37809,Yh=37810,Zh=37811,Kh=37812,Qh=37813,Jh=37814,$h=37815,ep=37816,tp=37817,np=37818,ip=37819,ap=37820,rp=37821,gu=36492,sp=36494,op=36495,dx=36283,lp=36284,cp=36285,up=36286,gr=3200,Cp=3201,fE=0,dE=1,Ki="",Pt="srgb",vr="srgb-linear",Mu="linear",jt="srgb",Us=7680,G0=519,hE=512,pE=513,mE=514,hx=515,gE=516,vE=517,_E=518,xE=519,V0=35044,k0="300 es",Ra=2e3,Tu=2001;class Oa{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jd=Math.PI/180,fp=180/Math.PI;function Rl(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(zn[a&255]+zn[a>>8&255]+zn[a>>16&255]+zn[a>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[i&63|128]+zn[i>>8&255]+"-"+zn[i>>16&255]+zn[i>>24&255]+zn[s&255]+zn[s>>8&255]+zn[s>>16&255]+zn[s>>24&255]).toLowerCase()}function Et(a,e,i){return Math.max(e,Math.min(i,a))}function yE(a,e){return(a%e+e)%e}function $d(a,e,i){return(1-i)*a+i*e}function sl(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function ti(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class lt{constructor(e=0,i=0){lt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Et(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,i,s,l,c,f,h,p,m){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,h,p,m)}set(e,i,s,l,c,f,h,p,m){const v=this.elements;return v[0]=e,v[1]=l,v[2]=h,v[3]=i,v[4]=c,v[5]=p,v[6]=s,v[7]=f,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],h=s[3],p=s[6],m=s[1],v=s[4],g=s[7],x=s[2],E=s[5],M=s[8],T=l[0],b=l[3],_=l[6],L=l[1],U=l[4],D=l[7],k=l[2],H=l[5],B=l[8];return c[0]=f*T+h*L+p*k,c[3]=f*b+h*U+p*H,c[6]=f*_+h*D+p*B,c[1]=m*T+v*L+g*k,c[4]=m*b+v*U+g*H,c[7]=m*_+v*D+g*B,c[2]=x*T+E*L+M*k,c[5]=x*b+E*U+M*H,c[8]=x*_+E*D+M*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],p=e[6],m=e[7],v=e[8];return i*f*v-i*h*m-s*c*v+s*h*p+l*c*m-l*f*p}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],p=e[6],m=e[7],v=e[8],g=v*f-h*m,x=h*p-v*c,E=m*c-f*p,M=i*g+s*x+l*E;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=g*T,e[1]=(l*m-v*s)*T,e[2]=(h*s-l*f)*T,e[3]=x*T,e[4]=(v*i-l*p)*T,e[5]=(l*c-h*i)*T,e[6]=E*T,e[7]=(s*p-m*i)*T,e[8]=(f*i-s*c)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,h){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*f+m*h)+f+e,-l*m,l*p,-l*(-m*f+p*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(eh.makeScale(e,i)),this}rotate(e){return this.premultiply(eh.makeRotation(-e)),this}translate(e,i){return this.premultiply(eh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const eh=new ut;function px(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function wu(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function SE(){const a=wu("canvas");return a.style.display="block",a}const j0={};function vu(a){a in j0||(j0[a]=!0,console.warn(a))}function bE(a,e,i){return new Promise(function(s,l){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:l();break;case a.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}function EE(a){const e=a.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ME(a){const e=a.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const X0=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),W0=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function TE(){const a={enabled:!0,workingColorSpace:vr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===jt&&(l.r=Da(l.r),l.g=Da(l.g),l.b=Da(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===jt&&(l.r=Zs(l.r),l.g=Zs(l.g),l.b=Zs(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ki?Mu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return a.define({[vr]:{primaries:e,whitePoint:s,transfer:Mu,toXYZ:X0,fromXYZ:W0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:s,transfer:jt,toXYZ:X0,fromXYZ:W0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),a}const Dt=TE();function Da(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Zs(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Ns;class wE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Ns===void 0&&(Ns=wu("canvas")),Ns.width=e.width,Ns.height=e.height;const l=Ns.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Ns}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=wu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Da(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Da(i[s]/255)*255):i[s]=Da(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let AE=0;class Dp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=Rl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(th(l[f].image)):c.push(th(l[f]))}else c=th(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function th(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?wE.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let RE=0;class Fn extends Oa{constructor(e=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,s=qr,l=qr,c=ni,f=Yr,h=Gi,p=Ln,m=Fn.DEFAULT_ANISOTROPY,v=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=Rl(),this.name="",this.source=new Dp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ax)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zh:e.x=e.x-Math.floor(e.x);break;case qr:e.x=e.x<0?0:1;break;case Ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zh:e.y=e.y-Math.floor(e.y);break;case qr:e.y=e.y<0?0:1;break;case Ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=ax;Fn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,i=0,s=0,l=1){$t.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const p=e.elements,m=p[0],v=p[4],g=p[8],x=p[1],E=p[5],M=p[9],T=p[2],b=p[6],_=p[10];if(Math.abs(v-x)<.01&&Math.abs(g-T)<.01&&Math.abs(M-b)<.01){if(Math.abs(v+x)<.1&&Math.abs(g+T)<.1&&Math.abs(M+b)<.1&&Math.abs(m+E+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(m+1)/2,D=(E+1)/2,k=(_+1)/2,H=(v+x)/4,B=(g+T)/4,Y=(M+b)/4;return U>D&&U>k?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=H/s,c=B/s):D>k?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=H/l,c=Y/l):k<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(k),s=B/c,l=Y/c),this.set(s,l,c,i),this}let L=Math.sqrt((b-M)*(b-M)+(g-T)*(g-T)+(x-v)*(x-v));return Math.abs(L)<.001&&(L=1),this.x=(b-M)/L,this.y=(g-T)/L,this.z=(x-v)/L,this.w=Math.acos((m+E+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this.w=Et(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this.w=Et(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CE extends Oa{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth?s.depth:1,this.scissor=new $t(0,0,e,i),this.scissorTest=!1,this.viewport=new $t(0,0,e,i);const l={width:e,height:i,depth:this.depth};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},s);const c=new Fn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);c.flipY=!1,c.generateMipmaps=s.generateMipmaps,c.internalFormat=s.internalFormat,this.textures=[];const f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Dp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class En extends CE{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class mx extends Fn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=mi,this.minFilter=mi,this.wrapR=qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class DE extends Fn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=mi,this.minFilter=mi,this.wrapR=qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cl{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,h){let p=s[l+0],m=s[l+1],v=s[l+2],g=s[l+3];const x=c[f+0],E=c[f+1],M=c[f+2],T=c[f+3];if(h===0){e[i+0]=p,e[i+1]=m,e[i+2]=v,e[i+3]=g;return}if(h===1){e[i+0]=x,e[i+1]=E,e[i+2]=M,e[i+3]=T;return}if(g!==T||p!==x||m!==E||v!==M){let b=1-h;const _=p*x+m*E+v*M+g*T,L=_>=0?1:-1,U=1-_*_;if(U>Number.EPSILON){const k=Math.sqrt(U),H=Math.atan2(k,_*L);b=Math.sin(b*H)/k,h=Math.sin(h*H)/k}const D=h*L;if(p=p*b+x*D,m=m*b+E*D,v=v*b+M*D,g=g*b+T*D,b===1-h){const k=1/Math.sqrt(p*p+m*m+v*v+g*g);p*=k,m*=k,v*=k,g*=k}}e[i]=p,e[i+1]=m,e[i+2]=v,e[i+3]=g}static multiplyQuaternionsFlat(e,i,s,l,c,f){const h=s[l],p=s[l+1],m=s[l+2],v=s[l+3],g=c[f],x=c[f+1],E=c[f+2],M=c[f+3];return e[i]=h*M+v*g+p*E-m*x,e[i+1]=p*M+v*x+m*g-h*E,e[i+2]=m*M+v*E+h*x-p*g,e[i+3]=v*M-h*g-p*x-m*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,p=Math.sin,m=h(s/2),v=h(l/2),g=h(c/2),x=p(s/2),E=p(l/2),M=p(c/2);switch(f){case"XYZ":this._x=x*v*g+m*E*M,this._y=m*E*g-x*v*M,this._z=m*v*M+x*E*g,this._w=m*v*g-x*E*M;break;case"YXZ":this._x=x*v*g+m*E*M,this._y=m*E*g-x*v*M,this._z=m*v*M-x*E*g,this._w=m*v*g+x*E*M;break;case"ZXY":this._x=x*v*g-m*E*M,this._y=m*E*g+x*v*M,this._z=m*v*M+x*E*g,this._w=m*v*g-x*E*M;break;case"ZYX":this._x=x*v*g-m*E*M,this._y=m*E*g+x*v*M,this._z=m*v*M-x*E*g,this._w=m*v*g+x*E*M;break;case"YZX":this._x=x*v*g+m*E*M,this._y=m*E*g+x*v*M,this._z=m*v*M-x*E*g,this._w=m*v*g-x*E*M;break;case"XZY":this._x=x*v*g-m*E*M,this._y=m*E*g-x*v*M,this._z=m*v*M+x*E*g,this._w=m*v*g+x*E*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],h=i[5],p=i[9],m=i[2],v=i[6],g=i[10],x=s+h+g;if(x>0){const E=.5/Math.sqrt(x+1);this._w=.25/E,this._x=(v-p)*E,this._y=(c-m)*E,this._z=(f-l)*E}else if(s>h&&s>g){const E=2*Math.sqrt(1+s-h-g);this._w=(v-p)/E,this._x=.25*E,this._y=(l+f)/E,this._z=(c+m)/E}else if(h>g){const E=2*Math.sqrt(1+h-s-g);this._w=(c-m)/E,this._x=(l+f)/E,this._y=.25*E,this._z=(p+v)/E}else{const E=2*Math.sqrt(1+g-s-h);this._w=(f-l)/E,this._x=(c+m)/E,this._y=(p+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,h=i._x,p=i._y,m=i._z,v=i._w;return this._x=s*v+f*h+l*m-c*p,this._y=l*v+f*p+c*h-s*m,this._z=c*v+f*m+s*p-l*h,this._w=f*v-s*h-l*p-c*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,c=this._z,f=this._w;let h=f*e._w+s*e._x+l*e._y+c*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=f,this._x=s,this._y=l,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const E=1-i;return this._w=E*f+i*this._w,this._x=E*s+i*this._x,this._y=E*l+i*this._y,this._z=E*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,h),g=Math.sin((1-i)*v)/m,x=Math.sin(i*v)/m;return this._w=f*g+this._w*x,this._x=s*g+this._x*x,this._y=l*g+this._y*x,this._z=c*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class oe{constructor(e=0,i=0,s=0){oe.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(q0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(q0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,h=e.z,p=e.w,m=2*(f*l-h*s),v=2*(h*i-c*l),g=2*(c*s-f*i);return this.x=i+p*m+f*g-h*v,this.y=s+p*v+h*m-c*g,this.z=l+p*g+c*v-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,h=i.y,p=i.z;return this.x=l*p-c*h,this.y=c*f-s*p,this.z=s*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return nh.copy(this).projectOnVector(e),this.sub(nh)}reflect(e){return this.sub(nh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Et(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nh=new oe,q0=new Cl;class Dl{constructor(e=new oe(1/0,1/0,1/0),i=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(zi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(zi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=zi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,zi):zi.fromBufferAttribute(c,f),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),kc.copy(s.boundingBox)),kc.applyMatrix4(e.matrixWorld),this.union(kc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ol),jc.subVectors(this.max,ol),Ls.subVectors(e.a,ol),Os.subVectors(e.b,ol),Ps.subVectors(e.c,ol),rr.subVectors(Os,Ls),sr.subVectors(Ps,Os),zr.subVectors(Ls,Ps);let i=[0,-rr.z,rr.y,0,-sr.z,sr.y,0,-zr.z,zr.y,rr.z,0,-rr.x,sr.z,0,-sr.x,zr.z,0,-zr.x,-rr.y,rr.x,0,-sr.y,sr.x,0,-zr.y,zr.x,0];return!ih(i,Ls,Os,Ps,jc)||(i=[1,0,0,0,1,0,0,0,1],!ih(i,Ls,Os,Ps,jc))?!1:(Xc.crossVectors(rr,sr),i=[Xc.x,Xc.y,Xc.z],ih(i,Ls,Os,Ps,jc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ba[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ba[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ba[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ba[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ba[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ba[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ba[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ba[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ba),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ba=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],zi=new oe,kc=new Dl,Ls=new oe,Os=new oe,Ps=new oe,rr=new oe,sr=new oe,zr=new oe,ol=new oe,jc=new oe,Xc=new oe,Ir=new oe;function ih(a,e,i,s,l){for(let c=0,f=a.length-3;c<=f;c+=3){Ir.fromArray(a,c);const h=l.x*Math.abs(Ir.x)+l.y*Math.abs(Ir.y)+l.z*Math.abs(Ir.z),p=e.dot(Ir),m=i.dot(Ir),v=s.dot(Ir);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>h)return!1}return!0}const UE=new Dl,ll=new oe,ah=new oe;class Up{constructor(e=new oe,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):UE.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ll.subVectors(e,this.center);const i=ll.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(ll,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ah.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ll.copy(e.center).add(ah)),this.expandByPoint(ll.copy(e.center).sub(ah))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ea=new oe,rh=new oe,Wc=new oe,or=new oe,sh=new oe,qc=new oe,oh=new oe;class NE{constructor(e=new oe,i=new oe(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ea)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ea.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ea.copy(this.origin).addScaledVector(this.direction,i),Ea.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){rh.copy(e).add(i).multiplyScalar(.5),Wc.copy(i).sub(e).normalize(),or.copy(this.origin).sub(rh);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Wc),h=or.dot(this.direction),p=-or.dot(Wc),m=or.lengthSq(),v=Math.abs(1-f*f);let g,x,E,M;if(v>0)if(g=f*p-h,x=f*h-p,M=c*v,g>=0)if(x>=-M)if(x<=M){const T=1/v;g*=T,x*=T,E=g*(g+f*x+2*h)+x*(f*g+x+2*p)+m}else x=c,g=Math.max(0,-(f*x+h)),E=-g*g+x*(x+2*p)+m;else x=-c,g=Math.max(0,-(f*x+h)),E=-g*g+x*(x+2*p)+m;else x<=-M?(g=Math.max(0,-(-f*c+h)),x=g>0?-c:Math.min(Math.max(-c,-p),c),E=-g*g+x*(x+2*p)+m):x<=M?(g=0,x=Math.min(Math.max(-c,-p),c),E=x*(x+2*p)+m):(g=Math.max(0,-(f*c+h)),x=g>0?c:Math.min(Math.max(-c,-p),c),E=-g*g+x*(x+2*p)+m);else x=f>0?-c:c,g=Math.max(0,-(f*x+h)),E=-g*g+x*(x+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(rh).addScaledVector(Wc,x),E}intersectSphere(e,i){Ea.subVectors(e.center,this.origin);const s=Ea.dot(this.direction),l=Ea.dot(Ea)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,p=s+f;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,h,p;const m=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,x=this.origin;return m>=0?(s=(e.min.x-x.x)*m,l=(e.max.x-x.x)*m):(s=(e.max.x-x.x)*m,l=(e.min.x-x.x)*m),v>=0?(c=(e.min.y-x.y)*v,f=(e.max.y-x.y)*v):(c=(e.max.y-x.y)*v,f=(e.min.y-x.y)*v),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),g>=0?(h=(e.min.z-x.z)*g,p=(e.max.z-x.z)*g):(h=(e.max.z-x.z)*g,p=(e.min.z-x.z)*g),s>p||h>l)||((h>s||s!==s)&&(s=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Ea)!==null}intersectTriangle(e,i,s,l,c){sh.subVectors(i,e),qc.subVectors(s,e),oh.crossVectors(sh,qc);let f=this.direction.dot(oh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;or.subVectors(this.origin,e);const p=h*this.direction.dot(qc.crossVectors(or,qc));if(p<0)return null;const m=h*this.direction.dot(sh.cross(or));if(m<0||p+m>f)return null;const v=-h*or.dot(oh);return v<0?null:this.at(v/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hn{constructor(e,i,s,l,c,f,h,p,m,v,g,x,E,M,T,b){hn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,h,p,m,v,g,x,E,M,T,b)}set(e,i,s,l,c,f,h,p,m,v,g,x,E,M,T,b){const _=this.elements;return _[0]=e,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=f,_[9]=h,_[13]=p,_[2]=m,_[6]=v,_[10]=g,_[14]=x,_[3]=E,_[7]=M,_[11]=T,_[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/Bs.setFromMatrixColumn(e,0).length(),c=1/Bs.setFromMatrixColumn(e,1).length(),f=1/Bs.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),h=Math.sin(s),p=Math.cos(l),m=Math.sin(l),v=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const x=f*v,E=f*g,M=h*v,T=h*g;i[0]=p*v,i[4]=-p*g,i[8]=m,i[1]=E+M*m,i[5]=x-T*m,i[9]=-h*p,i[2]=T-x*m,i[6]=M+E*m,i[10]=f*p}else if(e.order==="YXZ"){const x=p*v,E=p*g,M=m*v,T=m*g;i[0]=x+T*h,i[4]=M*h-E,i[8]=f*m,i[1]=f*g,i[5]=f*v,i[9]=-h,i[2]=E*h-M,i[6]=T+x*h,i[10]=f*p}else if(e.order==="ZXY"){const x=p*v,E=p*g,M=m*v,T=m*g;i[0]=x-T*h,i[4]=-f*g,i[8]=M+E*h,i[1]=E+M*h,i[5]=f*v,i[9]=T-x*h,i[2]=-f*m,i[6]=h,i[10]=f*p}else if(e.order==="ZYX"){const x=f*v,E=f*g,M=h*v,T=h*g;i[0]=p*v,i[4]=M*m-E,i[8]=x*m+T,i[1]=p*g,i[5]=T*m+x,i[9]=E*m-M,i[2]=-m,i[6]=h*p,i[10]=f*p}else if(e.order==="YZX"){const x=f*p,E=f*m,M=h*p,T=h*m;i[0]=p*v,i[4]=T-x*g,i[8]=M*g+E,i[1]=g,i[5]=f*v,i[9]=-h*v,i[2]=-m*v,i[6]=E*g+M,i[10]=x-T*g}else if(e.order==="XZY"){const x=f*p,E=f*m,M=h*p,T=h*m;i[0]=p*v,i[4]=-g,i[8]=m*v,i[1]=x*g+T,i[5]=f*v,i[9]=E*g-M,i[2]=M*g-E,i[6]=h*v,i[10]=T*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(LE,e,OE)}lookAt(e,i,s){const l=this.elements;return ui.subVectors(e,i),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),lr.crossVectors(s,ui),lr.lengthSq()===0&&(Math.abs(s.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),lr.crossVectors(s,ui)),lr.normalize(),Yc.crossVectors(ui,lr),l[0]=lr.x,l[4]=Yc.x,l[8]=ui.x,l[1]=lr.y,l[5]=Yc.y,l[9]=ui.y,l[2]=lr.z,l[6]=Yc.z,l[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],h=s[4],p=s[8],m=s[12],v=s[1],g=s[5],x=s[9],E=s[13],M=s[2],T=s[6],b=s[10],_=s[14],L=s[3],U=s[7],D=s[11],k=s[15],H=l[0],B=l[4],Y=l[8],N=l[12],C=l[1],V=l[5],ue=l[9],re=l[13],_e=l[2],pe=l[6],z=l[10],Q=l[14],K=l[3],be=l[7],we=l[11],P=l[15];return c[0]=f*H+h*C+p*_e+m*K,c[4]=f*B+h*V+p*pe+m*be,c[8]=f*Y+h*ue+p*z+m*we,c[12]=f*N+h*re+p*Q+m*P,c[1]=v*H+g*C+x*_e+E*K,c[5]=v*B+g*V+x*pe+E*be,c[9]=v*Y+g*ue+x*z+E*we,c[13]=v*N+g*re+x*Q+E*P,c[2]=M*H+T*C+b*_e+_*K,c[6]=M*B+T*V+b*pe+_*be,c[10]=M*Y+T*ue+b*z+_*we,c[14]=M*N+T*re+b*Q+_*P,c[3]=L*H+U*C+D*_e+k*K,c[7]=L*B+U*V+D*pe+k*be,c[11]=L*Y+U*ue+D*z+k*we,c[15]=L*N+U*re+D*Q+k*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],h=e[5],p=e[9],m=e[13],v=e[2],g=e[6],x=e[10],E=e[14],M=e[3],T=e[7],b=e[11],_=e[15];return M*(+c*p*g-l*m*g-c*h*x+s*m*x+l*h*E-s*p*E)+T*(+i*p*E-i*m*x+c*f*x-l*f*E+l*m*v-c*p*v)+b*(+i*m*g-i*h*E-c*f*g+s*f*E+c*h*v-s*m*v)+_*(-l*h*v-i*p*g+i*h*x+l*f*g-s*f*x+s*p*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],p=e[6],m=e[7],v=e[8],g=e[9],x=e[10],E=e[11],M=e[12],T=e[13],b=e[14],_=e[15],L=g*b*m-T*x*m+T*p*E-h*b*E-g*p*_+h*x*_,U=M*x*m-v*b*m-M*p*E+f*b*E+v*p*_-f*x*_,D=v*T*m-M*g*m+M*h*E-f*T*E-v*h*_+f*g*_,k=M*g*p-v*T*p-M*h*x+f*T*x+v*h*b-f*g*b,H=i*L+s*U+l*D+c*k;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/H;return e[0]=L*B,e[1]=(T*x*c-g*b*c-T*l*E+s*b*E+g*l*_-s*x*_)*B,e[2]=(h*b*c-T*p*c+T*l*m-s*b*m-h*l*_+s*p*_)*B,e[3]=(g*p*c-h*x*c-g*l*m+s*x*m+h*l*E-s*p*E)*B,e[4]=U*B,e[5]=(v*b*c-M*x*c+M*l*E-i*b*E-v*l*_+i*x*_)*B,e[6]=(M*p*c-f*b*c-M*l*m+i*b*m+f*l*_-i*p*_)*B,e[7]=(f*x*c-v*p*c+v*l*m-i*x*m-f*l*E+i*p*E)*B,e[8]=D*B,e[9]=(M*g*c-v*T*c-M*s*E+i*T*E+v*s*_-i*g*_)*B,e[10]=(f*T*c-M*h*c+M*s*m-i*T*m-f*s*_+i*h*_)*B,e[11]=(v*h*c-f*g*c-v*s*m+i*g*m+f*s*E-i*h*E)*B,e[12]=k*B,e[13]=(v*T*l-M*g*l+M*s*x-i*T*x-v*s*b+i*g*b)*B,e[14]=(M*h*l-f*T*l-M*s*p+i*T*p+f*s*b-i*h*b)*B,e[15]=(f*g*l-v*h*l+v*s*p-i*g*p-f*s*x+i*h*x)*B,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,h=e.y,p=e.z,m=c*f,v=c*h;return this.set(m*f+s,m*h-l*p,m*p+l*h,0,m*h+l*p,v*h+s,v*p-l*f,0,m*p-l*h,v*p+l*f,c*p*p+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,h=i._z,p=i._w,m=c+c,v=f+f,g=h+h,x=c*m,E=c*v,M=c*g,T=f*v,b=f*g,_=h*g,L=p*m,U=p*v,D=p*g,k=s.x,H=s.y,B=s.z;return l[0]=(1-(T+_))*k,l[1]=(E+D)*k,l[2]=(M-U)*k,l[3]=0,l[4]=(E-D)*H,l[5]=(1-(x+_))*H,l[6]=(b+L)*H,l[7]=0,l[8]=(M+U)*B,l[9]=(b-L)*B,l[10]=(1-(x+T))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let c=Bs.set(l[0],l[1],l[2]).length();const f=Bs.set(l[4],l[5],l[6]).length(),h=Bs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],Ii.copy(this);const m=1/c,v=1/f,g=1/h;return Ii.elements[0]*=m,Ii.elements[1]*=m,Ii.elements[2]*=m,Ii.elements[4]*=v,Ii.elements[5]*=v,Ii.elements[6]*=v,Ii.elements[8]*=g,Ii.elements[9]*=g,Ii.elements[10]*=g,i.setFromRotationMatrix(Ii),s.x=c,s.y=f,s.z=h,this}makePerspective(e,i,s,l,c,f,h=Ra){const p=this.elements,m=2*c/(i-e),v=2*c/(s-l),g=(i+e)/(i-e),x=(s+l)/(s-l);let E,M;if(h===Ra)E=-(f+c)/(f-c),M=-2*f*c/(f-c);else if(h===Tu)E=-f/(f-c),M=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=M,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,f,h=Ra){const p=this.elements,m=1/(i-e),v=1/(s-l),g=1/(f-c),x=(i+e)*m,E=(s+l)*v;let M,T;if(h===Ra)M=(f+c)*g,T=-2*g;else if(h===Tu)M=c*g,T=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-E,p[2]=0,p[6]=0,p[10]=T,p[14]=-M,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Bs=new oe,Ii=new hn,LE=new oe(0,0,0),OE=new oe(1,1,1),lr=new oe,Yc=new oe,ui=new oe,Y0=new hn,Z0=new Cl;class La{constructor(e=0,i=0,s=0,l=La.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],p=l[1],m=l[5],v=l[9],g=l[2],x=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Et(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,E),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Et(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,E),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Et(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Y0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Y0,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Z0.setFromEuler(this),this.setFromQuaternion(Z0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}La.DEFAULT_ORDER="XYZ";class gx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let PE=0;const K0=new oe,zs=new Cl,Ma=new hn,Zc=new oe,cl=new oe,BE=new oe,zE=new Cl,Q0=new oe(1,0,0),J0=new oe(0,1,0),$0=new oe(0,0,1),e_={type:"added"},IE={type:"removed"},Is={type:"childadded",child:null},lh={type:"childremoved",child:null};class gi extends Oa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=Rl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gi.DEFAULT_UP.clone();const e=new oe,i=new La,s=new Cl,l=new oe(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new hn},normalMatrix:{value:new ut}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=gi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return zs.setFromAxisAngle(e,i),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,i){return zs.setFromAxisAngle(e,i),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(Q0,e)}rotateY(e){return this.rotateOnAxis(J0,e)}rotateZ(e){return this.rotateOnAxis($0,e)}translateOnAxis(e,i){return K0.copy(e).applyQuaternion(this.quaternion),this.position.add(K0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Q0,e)}translateY(e){return this.translateOnAxis(J0,e)}translateZ(e){return this.translateOnAxis($0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ma.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Zc.copy(e):Zc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),cl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ma.lookAt(cl,Zc,this.up):Ma.lookAt(Zc,cl,this.up),this.quaternion.setFromRotationMatrix(Ma),l&&(Ma.extractRotation(l.matrixWorld),zs.setFromRotationMatrix(Ma),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(e_),Is.child=e,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(IE),lh.child=e,this.dispatchEvent(lh),lh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ma.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ma.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ma),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(e_),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cl,e,BE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cl,zE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?{min:h.boundingBox.min.toArray(),max:h.boundingBox.max.toArray()}:void 0,boundingSphere:h.boundingSphere?{radius:h.boundingSphere.radius,center:h.boundingSphere.center.toArray()}:void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const g=p[m];c(e.shapes,g)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(e.materials,this.material[p]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(c(e.animations,p))}}if(i){const h=f(e.geometries),p=f(e.materials),m=f(e.textures),v=f(e.images),g=f(e.shapes),x=f(e.skeletons),E=f(e.animations),M=f(e.nodes);h.length>0&&(s.geometries=h),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),v.length>0&&(s.images=v),g.length>0&&(s.shapes=g),x.length>0&&(s.skeletons=x),E.length>0&&(s.animations=E),M.length>0&&(s.nodes=M)}return s.object=l,s;function f(h){const p=[];for(const m in h){const v=h[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}gi.DEFAULT_UP=new oe(0,1,0);gi.DEFAULT_MATRIX_AUTO_UPDATE=!0;gi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fi=new oe,Ta=new oe,ch=new oe,wa=new oe,Fs=new oe,Hs=new oe,t_=new oe,uh=new oe,fh=new oe,dh=new oe,hh=new $t,ph=new $t,mh=new $t;class Hi{constructor(e=new oe,i=new oe,s=new oe){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Fi.subVectors(e,i),l.cross(Fi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Fi.subVectors(l,i),Ta.subVectors(s,i),ch.subVectors(e,i);const f=Fi.dot(Fi),h=Fi.dot(Ta),p=Fi.dot(ch),m=Ta.dot(Ta),v=Ta.dot(ch),g=f*m-h*h;if(g===0)return c.set(0,0,0),null;const x=1/g,E=(m*p-h*v)*x,M=(f*v-h*p)*x;return c.set(1-E-M,M,E)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,wa)===null?!1:wa.x>=0&&wa.y>=0&&wa.x+wa.y<=1}static getInterpolation(e,i,s,l,c,f,h,p){return this.getBarycoord(e,i,s,l,wa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,wa.x),p.addScaledVector(f,wa.y),p.addScaledVector(h,wa.z),p)}static getInterpolatedAttribute(e,i,s,l,c,f){return hh.setScalar(0),ph.setScalar(0),mh.setScalar(0),hh.fromBufferAttribute(e,i),ph.fromBufferAttribute(e,s),mh.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(hh,c.x),f.addScaledVector(ph,c.y),f.addScaledVector(mh,c.z),f}static isFrontFacing(e,i,s,l){return Fi.subVectors(s,i),Ta.subVectors(e,i),Fi.cross(Ta).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),Ta.subVectors(this.a,this.b),Fi.cross(Ta).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Hi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Hi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,h;Fs.subVectors(l,s),Hs.subVectors(c,s),uh.subVectors(e,s);const p=Fs.dot(uh),m=Hs.dot(uh);if(p<=0&&m<=0)return i.copy(s);fh.subVectors(e,l);const v=Fs.dot(fh),g=Hs.dot(fh);if(v>=0&&g<=v)return i.copy(l);const x=p*g-v*m;if(x<=0&&p>=0&&v<=0)return f=p/(p-v),i.copy(s).addScaledVector(Fs,f);dh.subVectors(e,c);const E=Fs.dot(dh),M=Hs.dot(dh);if(M>=0&&E<=M)return i.copy(c);const T=E*m-p*M;if(T<=0&&m>=0&&M<=0)return h=m/(m-M),i.copy(s).addScaledVector(Hs,h);const b=v*M-E*g;if(b<=0&&g-v>=0&&E-M>=0)return t_.subVectors(c,l),h=(g-v)/(g-v+(E-M)),i.copy(l).addScaledVector(t_,h);const _=1/(b+T+x);return f=T*_,h=x*_,i.copy(s).addScaledVector(Fs,f).addScaledVector(Hs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},Kc={h:0,s:0,l:0};function gh(a,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(e-a)*6*i:i<1/2?e:i<2/3?a+(e-a)*6*(2/3-i):a}class Nt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=Dt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Dt.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=Dt.workingColorSpace){if(e=yE(e,1),i=Et(i,0,1),s=Et(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=gh(f,c,e+1/3),this.g=gh(f,c,e),this.b=gh(f,c,e-1/3)}return Dt.toWorkingColorSpace(this,l),this}setStyle(e,i=Pt){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Pt){const s=vx[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Da(e.r),this.g=Da(e.g),this.b=Da(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return Dt.fromWorkingColorSpace(In.copy(this),e),Math.round(Et(In.r*255,0,255))*65536+Math.round(Et(In.g*255,0,255))*256+Math.round(Et(In.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Dt.workingColorSpace){Dt.fromWorkingColorSpace(In.copy(this),i);const s=In.r,l=In.g,c=In.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let p,m;const v=(h+f)/2;if(h===f)p=0,m=0;else{const g=f-h;switch(m=v<=.5?g/(f+h):g/(2-f-h),f){case s:p=(l-c)/g+(l<c?6:0);break;case l:p=(c-s)/g+2;break;case c:p=(s-l)/g+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,i=Dt.workingColorSpace){return Dt.fromWorkingColorSpace(In.copy(this),i),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Pt){Dt.fromWorkingColorSpace(In.copy(this),e);const i=In.r,s=In.g,l=In.b;return e!==Pt?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(cr),this.setHSL(cr.h+e,cr.s+i,cr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(cr),e.getHSL(Kc);const s=$d(cr.h,Kc.h,i),l=$d(cr.s,Kc.s,i),c=$d(cr.l,Kc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new Nt;Nt.NAMES=vx;let FE=0;class ro extends Oa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=Rl(),this.name="",this.type="Material",this.blending=Ys,this.side=Na,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lh,this.blendDst=Oh,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=Zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=G0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(s.blending=this.blending),this.side!==Na&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Lh&&(s.blendSrc=this.blendSrc),this.blendDst!==Oh&&(s.blendDst=this.blendDst),this.blendEquation!==Xr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Zr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==G0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const p=c[h];delete p.metadata,f.push(p)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Nu extends ro{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new La,this.combine=ix,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new oe,Qc=new lt;let HE=0;class Ci{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:HE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=V0,this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Qc.fromBufferAttribute(this,i),Qc.applyMatrix3(e),this.setXY(i,Qc.x,Qc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=sl(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=ti(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=sl(i,this.array)),i}setX(e,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=sl(i,this.array)),i}setY(e,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=sl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=sl(i,this.array)),i}setW(e,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=ti(i,this.array),s=ti(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=ti(i,this.array),s=ti(s,this.array),l=ti(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=ti(i,this.array),s=ti(s,this.array),l=ti(l,this.array),c=ti(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==V0&&(e.usage=this.usage),e}}class _x extends Ci{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class xx extends Ci{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class $i extends Ci{constructor(e,i,s){super(new Float32Array(e),i,s)}}let GE=0;const wi=new hn,vh=new gi,Gs=new oe,fi=new Dl,ul=new Dl,Sn=new oe;class Pa extends Oa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:GE++}),this.uuid=Rl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(px(e)?xx:_x)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ut().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wi.makeRotationFromQuaternion(e),this.applyMatrix4(wi),this}rotateX(e){return wi.makeRotationX(e),this.applyMatrix4(wi),this}rotateY(e){return wi.makeRotationY(e),this.applyMatrix4(wi),this}rotateZ(e){return wi.makeRotationZ(e),this.applyMatrix4(wi),this}translate(e,i,s){return wi.makeTranslation(e,i,s),this.applyMatrix4(wi),this}scale(e,i,s){return wi.makeScale(e,i,s),this.applyMatrix4(wi),this}lookAt(e){return vh.lookAt(e),vh.updateMatrix(),this.applyMatrix4(vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new $i(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];fi.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Up);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const s=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];ul.setFromBufferAttribute(h),this.morphTargetsRelative?(Sn.addVectors(fi.min,ul.min),fi.expandByPoint(Sn),Sn.addVectors(fi.max,ul.max),fi.expandByPoint(Sn)):(fi.expandByPoint(ul.min),fi.expandByPoint(ul.max))}fi.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)Sn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],p=this.morphTargetsRelative;for(let m=0,v=h.count;m<v;m++)Sn.fromBufferAttribute(h,m),p&&(Gs.fromBufferAttribute(e,m),Sn.add(Gs)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ci(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],p=[];for(let Y=0;Y<s.count;Y++)h[Y]=new oe,p[Y]=new oe;const m=new oe,v=new oe,g=new oe,x=new lt,E=new lt,M=new lt,T=new oe,b=new oe;function _(Y,N,C){m.fromBufferAttribute(s,Y),v.fromBufferAttribute(s,N),g.fromBufferAttribute(s,C),x.fromBufferAttribute(c,Y),E.fromBufferAttribute(c,N),M.fromBufferAttribute(c,C),v.sub(m),g.sub(m),E.sub(x),M.sub(x);const V=1/(E.x*M.y-M.x*E.y);isFinite(V)&&(T.copy(v).multiplyScalar(M.y).addScaledVector(g,-E.y).multiplyScalar(V),b.copy(g).multiplyScalar(E.x).addScaledVector(v,-M.x).multiplyScalar(V),h[Y].add(T),h[N].add(T),h[C].add(T),p[Y].add(b),p[N].add(b),p[C].add(b))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let Y=0,N=L.length;Y<N;++Y){const C=L[Y],V=C.start,ue=C.count;for(let re=V,_e=V+ue;re<_e;re+=3)_(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const U=new oe,D=new oe,k=new oe,H=new oe;function B(Y){k.fromBufferAttribute(l,Y),H.copy(k);const N=h[Y];U.copy(N),U.sub(k.multiplyScalar(k.dot(N))).normalize(),D.crossVectors(H,N);const V=D.dot(p[Y])<0?-1:1;f.setXYZW(Y,U.x,U.y,U.z,V)}for(let Y=0,N=L.length;Y<N;++Y){const C=L[Y],V=C.start,ue=C.count;for(let re=V,_e=V+ue;re<_e;re+=3)B(e.getX(re+0)),B(e.getX(re+1)),B(e.getX(re+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ci(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,E=s.count;x<E;x++)s.setXYZ(x,0,0,0);const l=new oe,c=new oe,f=new oe,h=new oe,p=new oe,m=new oe,v=new oe,g=new oe;if(e)for(let x=0,E=e.count;x<E;x+=3){const M=e.getX(x+0),T=e.getX(x+1),b=e.getX(x+2);l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,b),v.subVectors(f,c),g.subVectors(l,c),v.cross(g),h.fromBufferAttribute(s,M),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,b),h.add(v),p.add(v),m.add(v),s.setXYZ(M,h.x,h.y,h.z),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(b,m.x,m.y,m.z)}else for(let x=0,E=i.count;x<E;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),v.subVectors(f,c),g.subVectors(l,c),v.cross(g),s.setXYZ(x+0,v.x,v.y,v.z),s.setXYZ(x+1,v.x,v.y,v.z),s.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Sn.fromBufferAttribute(e,i),Sn.normalize(),e.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(h,p){const m=h.array,v=h.itemSize,g=h.normalized,x=new m.constructor(p.length*v);let E=0,M=0;for(let T=0,b=p.length;T<b;T++){h.isInterleavedBufferAttribute?E=p[T]*h.data.stride+h.offset:E=p[T]*v;for(let _=0;_<v;_++)x[M++]=m[E++]}return new Ci(x,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Pa,s=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=e(p,s);i.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let v=0,g=m.length;v<g;v++){const x=m[v],E=e(x,s);p.push(E)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,p=f.length;h<p;h++){const m=f[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let g=0,x=m.length;g<x;g++){const E=m[g];v.push(E.toJSON(e.data))}v.length>0&&(l[p]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const m in l){const v=l[m];this.setAttribute(m,v.clone(i))}const c=e.morphAttributes;for(const m in c){const v=[],g=c[m];for(let x=0,E=g.length;x<E;x++)v.push(g[x].clone(i));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,v=f.length;m<v;m++){const g=f[m];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const n_=new hn,Fr=new NE,Jc=new Up,i_=new oe,$c=new oe,eu=new oe,tu=new oe,_h=new oe,nu=new oe,a_=new oe,iu=new oe;class hi extends gi{constructor(e=new Pa,i=new Nu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){nu.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const v=h[p],g=c[p];v!==0&&(_h.fromBufferAttribute(g,e),f?nu.addScaledVector(_h,v):nu.addScaledVector(_h.sub(i),v))}i.add(nu)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Jc.copy(s.boundingSphere),Jc.applyMatrix4(c),Fr.copy(e.ray).recast(e.near),!(Jc.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(Jc,i_)===null||Fr.origin.distanceToSquared(i_)>(e.far-e.near)**2))&&(n_.copy(c).invert(),Fr.copy(e.ray).applyMatrix4(n_),!(s.boundingBox!==null&&Fr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Fr)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,x=c.groups,E=c.drawRange;if(h!==null)if(Array.isArray(f))for(let M=0,T=x.length;M<T;M++){const b=x[M],_=f[b.materialIndex],L=Math.max(b.start,E.start),U=Math.min(h.count,Math.min(b.start+b.count,E.start+E.count));for(let D=L,k=U;D<k;D+=3){const H=h.getX(D),B=h.getX(D+1),Y=h.getX(D+2);l=au(this,_,e,s,m,v,g,H,B,Y),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const M=Math.max(0,E.start),T=Math.min(h.count,E.start+E.count);for(let b=M,_=T;b<_;b+=3){const L=h.getX(b),U=h.getX(b+1),D=h.getX(b+2);l=au(this,f,e,s,m,v,g,L,U,D),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let M=0,T=x.length;M<T;M++){const b=x[M],_=f[b.materialIndex],L=Math.max(b.start,E.start),U=Math.min(p.count,Math.min(b.start+b.count,E.start+E.count));for(let D=L,k=U;D<k;D+=3){const H=D,B=D+1,Y=D+2;l=au(this,_,e,s,m,v,g,H,B,Y),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const M=Math.max(0,E.start),T=Math.min(p.count,E.start+E.count);for(let b=M,_=T;b<_;b+=3){const L=b,U=b+1,D=b+2;l=au(this,f,e,s,m,v,g,L,U,D),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}}}function VE(a,e,i,s,l,c,f,h){let p;if(e.side===bn?p=s.intersectTriangle(f,c,l,!0,h):p=s.intersectTriangle(l,c,f,e.side===Na,h),p===null)return null;iu.copy(h),iu.applyMatrix4(a.matrixWorld);const m=i.ray.origin.distanceTo(iu);return m<i.near||m>i.far?null:{distance:m,point:iu.clone(),object:a}}function au(a,e,i,s,l,c,f,h,p,m){a.getVertexPosition(h,$c),a.getVertexPosition(p,eu),a.getVertexPosition(m,tu);const v=VE(a,e,i,s,$c,eu,tu,a_);if(v){const g=new oe;Hi.getBarycoord(a_,$c,eu,tu,g),l&&(v.uv=Hi.getInterpolatedAttribute(l,h,p,m,g,new lt)),c&&(v.uv1=Hi.getInterpolatedAttribute(c,h,p,m,g,new lt)),f&&(v.normal=Hi.getInterpolatedAttribute(f,h,p,m,g,new oe),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const x={a:h,b:p,c:m,normal:new oe,materialIndex:0};Hi.getNormal($c,eu,tu,x.normal),v.face=x,v.barycoord=g}return v}class so extends Pa{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],v=[],g=[];let x=0,E=0;M("z","y","x",-1,-1,s,i,e,f,c,0),M("z","y","x",1,-1,s,i,-e,f,c,1),M("x","z","y",1,1,e,s,i,l,f,2),M("x","z","y",1,-1,e,s,-i,l,f,3),M("x","y","z",1,-1,e,i,s,l,c,4),M("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new $i(m,3)),this.setAttribute("normal",new $i(v,3)),this.setAttribute("uv",new $i(g,2));function M(T,b,_,L,U,D,k,H,B,Y,N){const C=D/B,V=k/Y,ue=D/2,re=k/2,_e=H/2,pe=B+1,z=Y+1;let Q=0,K=0;const be=new oe;for(let we=0;we<z;we++){const P=we*V-re;for(let ne=0;ne<pe;ne++){const Se=ne*C-ue;be[T]=Se*L,be[b]=P*U,be[_]=_e,m.push(be.x,be.y,be.z),be[T]=0,be[b]=0,be[_]=H>0?1:-1,v.push(be.x,be.y,be.z),g.push(ne/B),g.push(1-we/Y),Q+=1}}for(let we=0;we<Y;we++)for(let P=0;P<B;P++){const ne=x+P+pe*we,Se=x+P+pe*(we+1),Z=x+(P+1)+pe*(we+1),he=x+(P+1)+pe*we;p.push(ne,Se,he),p.push(Se,Z,he),K+=6}h.addGroup(E,K,N),E+=K,x+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new so(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function to(a){const e={};for(const i in a){e[i]={};for(const s in a[i]){const l=a[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function jn(a){const e={};for(let i=0;i<a.length;i++){const s=to(a[i]);for(const l in s)e[l]=s[l]}return e}function kE(a){const e=[];for(let i=0;i<a.length;i++)e.push(a[i].clone());return e}function yx(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const jE={clone:to,merge:jn};var XE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,WE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends ro{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=XE,this.fragmentShader=WE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=to(e.uniforms),this.uniformsGroups=kE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Sx extends gi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=Ra}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ur=new oe,r_=new lt,s_=new lt;class Xn extends Sx{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=fp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fp*2*Math.atan(Math.tan(Jd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ur.x,ur.y).multiplyScalar(-e/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ur.x,ur.y).multiplyScalar(-e/ur.z)}getViewSize(e,i){return this.getViewBounds(e,r_,s_),i.subVectors(s_,r_)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Jd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,i-=f.offsetY*s/m,l*=f.width/p,s*=f.height/m}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Vs=-90,ks=1;class qE extends gi{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Xn(Vs,ks,e,i);l.layers=this.layers,this.add(l);const c=new Xn(Vs,ks,e,i);c.layers=this.layers,this.add(c);const f=new Xn(Vs,ks,e,i);f.layers=this.layers,this.add(f);const h=new Xn(Vs,ks,e,i);h.layers=this.layers,this.add(h);const p=new Xn(Vs,ks,e,i);p.layers=this.layers,this.add(p);const m=new Xn(Vs,ks,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,h,p]=i;for(const m of i)this.remove(m);if(e===Ra)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Tu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,p,m,v]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,f),e.setRenderTarget(s,2,l),e.render(i,h),e.setRenderTarget(s,3,l),e.render(i,p),e.setRenderTarget(s,4,l),e.render(i,m),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,l),e.render(i,v),e.setRenderTarget(g,x,E),e.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class bx extends Fn{constructor(e=[],i=Qs,s,l,c,f,h,p,m,v){super(e,i,s,l,c,f,h,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class YE extends En{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new bx(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:ni}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new so(5,5,5),c=new Hn({name:"CubemapFromEquirect",uniforms:to(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:bn,blending:Wn});c.uniforms.tEquirect.value=i;const f=new hi(l,c),h=i.minFilter;return i.minFilter===Yr&&(i.minFilter=ni),new qE(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}class fl extends gi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZE={type:"move"};class xh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const T of e.hand.values()){const b=i.getJointPose(T,s),_=this._getHandJoint(m,T);b!==null&&(_.matrix.fromArray(b.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=b.radius),_.visible=b!==null}const v=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],x=v.position.distanceTo(g.position),E=.02,M=.005;m.inputState.pinching&&x>E+M?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=E-M&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(ZE)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new fl;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class Au extends gi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new La,this.environmentIntensity=1,this.environmentRotation=new La,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const yh=new oe,KE=new oe,QE=new ut;class kr{constructor(e=new oe(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=yh.subVectors(s,i).cross(KE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(yh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||QE.getNormalMatrix(e),l=this.coplanarPoint(yh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new Up,ru=new oe;class Ex{constructor(e=new kr,i=new kr,s=new kr,l=new kr,c=new kr,f=new kr){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Ra){const s=this.planes,l=e.elements,c=l[0],f=l[1],h=l[2],p=l[3],m=l[4],v=l[5],g=l[6],x=l[7],E=l[8],M=l[9],T=l[10],b=l[11],_=l[12],L=l[13],U=l[14],D=l[15];if(s[0].setComponents(p-c,x-m,b-E,D-_).normalize(),s[1].setComponents(p+c,x+m,b+E,D+_).normalize(),s[2].setComponents(p+f,x+v,b+M,D+L).normalize(),s[3].setComponents(p-f,x-v,b-M,D-L).normalize(),s[4].setComponents(p-h,x-g,b-T,D-U).normalize(),i===Ra)s[5].setComponents(p+h,x+g,b+T,D+U).normalize();else if(i===Tu)s[5].setComponents(h,g,T,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Hr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){return Hr.center.set(0,0,0),Hr.radius=.7071067811865476,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(ru.x=l.normal.x>0?e.max.x:e.min.x,ru.y=l.normal.y>0?e.max.y:e.min.y,ru.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(ru)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Np extends Fn{constructor(e,i,s=Kr,l,c,f,h=mi,p=mi,m,v=yl){if(v!==yl&&v!==eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,c,f,h,p,v,s,m),this.isDepthTexture=!0,this.image={width:e,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Lu extends Pa{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,h=Math.floor(s),p=Math.floor(l),m=h+1,v=p+1,g=e/h,x=i/p,E=[],M=[],T=[],b=[];for(let _=0;_<v;_++){const L=_*x-f;for(let U=0;U<m;U++){const D=U*g-c;M.push(D,-L,0),T.push(0,0,1),b.push(U/h),b.push(1-_/p)}}for(let _=0;_<p;_++)for(let L=0;L<h;L++){const U=L+m*_,D=L+m*(_+1),k=L+1+m*(_+1),H=L+1+m*_;E.push(U,D,H),E.push(D,k,H)}this.setIndex(E),this.setAttribute("position",new $i(M,3)),this.setAttribute("normal",new $i(T,3)),this.setAttribute("uv",new $i(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Lp extends Pa{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(f+h,Math.PI);let m=0;const v=[],g=new oe,x=new oe,E=[],M=[],T=[],b=[];for(let _=0;_<=s;_++){const L=[],U=_/s;let D=0;_===0&&f===0?D=.5/i:_===s&&p===Math.PI&&(D=-.5/i);for(let k=0;k<=i;k++){const H=k/i;g.x=-e*Math.cos(l+H*c)*Math.sin(f+U*h),g.y=e*Math.cos(f+U*h),g.z=e*Math.sin(l+H*c)*Math.sin(f+U*h),M.push(g.x,g.y,g.z),x.copy(g).normalize(),T.push(x.x,x.y,x.z),b.push(H+D,1-U),L.push(m++)}v.push(L)}for(let _=0;_<s;_++)for(let L=0;L<i;L++){const U=v[_][L+1],D=v[_][L],k=v[_+1][L],H=v[_+1][L+1];(_!==0||f>0)&&E.push(U,D,H),(_!==s-1||p<Math.PI)&&E.push(D,k,H)}this.setIndex(E),this.setAttribute("position",new $i(M,3)),this.setAttribute("normal",new $i(T,3)),this.setAttribute("uv",new $i(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Mx extends ro{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gr,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class JE extends ro{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Tx extends Sx{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,h-=v*this.view.offsetY,p=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class $E extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Mt{constructor(e){this.value=e}clone(){return new Mt(this.value.clone===void 0?this.value:this.value.clone())}}function o_(a,e,i,s){const l=eM(s);switch(i){case lx:return a*e;case ux:return a*e/l.components*l.byteLength;case wp:return a*e/l.components*l.byteLength;case fx:return a*e*2/l.components*l.byteLength;case Ap:return a*e*2/l.components*l.byteLength;case cx:return a*e*3/l.components*l.byteLength;case Gi:return a*e*4/l.components*l.byteLength;case Rp:return a*e*4/l.components*l.byteLength;case du:case hu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case pu:case mu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Hh:case Vh:return Math.max(a,16)*Math.max(e,8)/4;case Fh:case Gh:return Math.max(a,8)*Math.max(e,8)/2;case kh:case jh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Xh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Wh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case qh:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Yh:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Zh:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Qh:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Jh:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case $h:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case ep:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case tp:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case np:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case ip:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case ap:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case rp:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case gu:case sp:case op:return Math.ceil(a/4)*Math.ceil(e/4)*16;case dx:case lp:return Math.ceil(a/4)*Math.ceil(e/4)*8;case cp:case up:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function eM(a){switch(a){case Ln:case rx:return{byteLength:1,components:1};case xl:case sx:case Al:return{byteLength:2,components:1};case Mp:case Tp:return{byteLength:2,components:4};case Kr:case Ep:case Qi:return{byteLength:4,components:1};case ox:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wx(){let a=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=a.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=a.requestAnimationFrame(l),e=!0)},stop:function(){a.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){a=c}}}function tM(a){const e=new WeakMap;function i(h,p){const m=h.array,v=h.usage,g=m.byteLength,x=a.createBuffer();a.bindBuffer(p,x),a.bufferData(p,m,v),h.onUploadCallback();let E;if(m instanceof Float32Array)E=a.FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?E=a.HALF_FLOAT:E=a.UNSIGNED_SHORT;else if(m instanceof Int16Array)E=a.SHORT;else if(m instanceof Uint32Array)E=a.UNSIGNED_INT;else if(m instanceof Int32Array)E=a.INT;else if(m instanceof Int8Array)E=a.BYTE;else if(m instanceof Uint8Array)E=a.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)E=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:E,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:g}}function s(h,p,m){const v=p.array,g=p.updateRanges;if(a.bindBuffer(m,h),g.length===0)a.bufferSubData(m,0,v);else{g.sort((E,M)=>E.start-M.start);let x=0;for(let E=1;E<g.length;E++){const M=g[x],T=g[E];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++x,g[x]=T)}g.length=x+1;for(let E=0,M=g.length;E<M;E++){const T=g[E];a.bufferSubData(m,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(a.deleteBuffer(p.buffer),e.delete(h))}function f(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,p),m.version=h.version}}return{get:l,remove:c,update:f}}var nM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iM=`#ifdef USE_ALPHAHASH
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
#endif`,aM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lM=`#ifdef USE_AOMAP
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
#endif`,cM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uM=`#ifdef USE_BATCHING
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
#endif`,fM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mM=`#ifdef USE_IRIDESCENCE
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
#endif`,gM=`#ifdef USE_BUMPMAP
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
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,SM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,EM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,MM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,TM=`#define PI 3.141592653589793
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
} // validated`,wM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,AM=`vec3 transformedNormal = objectNormal;
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
#endif`,RM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,CM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,DM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,UM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NM="gl_FragColor = linearToOutputTexel( gl_FragColor );",LM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,OM=`#ifdef USE_ENVMAP
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
#endif`,PM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,BM=`#ifdef USE_ENVMAP
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
#endif`,zM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,IM=`#ifdef USE_ENVMAP
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
#endif`,FM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,GM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,VM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kM=`#ifdef USE_GRADIENTMAP
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
}`,jM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,XM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qM=`uniform bool receiveShadow;
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
#endif`,YM=`#ifdef USE_ENVMAP
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
#endif`,ZM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,KM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,QM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$M=`PhysicalMaterial material;
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
#endif`,eT=`struct PhysicalMaterial {
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
}`,tT=`
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
#endif`,nT=`#if defined( RE_IndirectDiffuse )
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
#endif`,iT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,aT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fT=`#if defined( USE_POINTS_UV )
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
#endif`,dT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vT=`#ifdef USE_MORPHTARGETS
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
#endif`,_T=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ST=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ET=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,MT=`#ifdef USE_NORMALMAP
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
#endif`,TT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,RT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,UT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,NT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,OT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,PT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,BT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,IT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,HT=`float getShadowMask() {
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
}`,GT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,VT=`#ifdef USE_SKINNING
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
#endif`,kT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jT=`#ifdef USE_SKINNING
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
#endif`,XT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ZT=`#ifdef USE_TRANSMISSION
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
#endif`,KT=`#ifdef USE_TRANSMISSION
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
#endif`,QT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$T=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const t2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,n2=`uniform sampler2D t2D;
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
}`,i2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,r2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o2=`#include <common>
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
}`,l2=`#if DEPTH_PACKING == 3200
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
}`,c2=`#define DISTANCE
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
}`,u2=`#define DISTANCE
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
}`,f2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h2=`uniform float scale;
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
}`,p2=`uniform vec3 diffuse;
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
}`,m2=`#include <common>
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
}`,g2=`uniform vec3 diffuse;
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
}`,v2=`#define LAMBERT
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
}`,_2=`#define LAMBERT
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
}`,x2=`#define MATCAP
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
}`,y2=`#define MATCAP
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
}`,S2=`#define NORMAL
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
}`,b2=`#define NORMAL
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
}`,E2=`#define PHONG
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
}`,M2=`#define PHONG
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
}`,T2=`#define STANDARD
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
}`,w2=`#define STANDARD
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
}`,A2=`#define TOON
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
}`,R2=`#define TOON
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
}`,C2=`uniform float size;
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
}`,D2=`uniform vec3 diffuse;
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
}`,U2=`#include <common>
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
}`,N2=`uniform vec3 color;
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
}`,L2=`uniform float rotation;
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
}`,O2=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:nM,alphahash_pars_fragment:iM,alphamap_fragment:aM,alphamap_pars_fragment:rM,alphatest_fragment:sM,alphatest_pars_fragment:oM,aomap_fragment:lM,aomap_pars_fragment:cM,batching_pars_vertex:uM,batching_vertex:fM,begin_vertex:dM,beginnormal_vertex:hM,bsdfs:pM,iridescence_fragment:mM,bumpmap_pars_fragment:gM,clipping_planes_fragment:vM,clipping_planes_pars_fragment:_M,clipping_planes_pars_vertex:xM,clipping_planes_vertex:yM,color_fragment:SM,color_pars_fragment:bM,color_pars_vertex:EM,color_vertex:MM,common:TM,cube_uv_reflection_fragment:wM,defaultnormal_vertex:AM,displacementmap_pars_vertex:RM,displacementmap_vertex:CM,emissivemap_fragment:DM,emissivemap_pars_fragment:UM,colorspace_fragment:NM,colorspace_pars_fragment:LM,envmap_fragment:OM,envmap_common_pars_fragment:PM,envmap_pars_fragment:BM,envmap_pars_vertex:zM,envmap_physical_pars_fragment:YM,envmap_vertex:IM,fog_vertex:FM,fog_pars_vertex:HM,fog_fragment:GM,fog_pars_fragment:VM,gradientmap_pars_fragment:kM,lightmap_pars_fragment:jM,lights_lambert_fragment:XM,lights_lambert_pars_fragment:WM,lights_pars_begin:qM,lights_toon_fragment:ZM,lights_toon_pars_fragment:KM,lights_phong_fragment:QM,lights_phong_pars_fragment:JM,lights_physical_fragment:$M,lights_physical_pars_fragment:eT,lights_fragment_begin:tT,lights_fragment_maps:nT,lights_fragment_end:iT,logdepthbuf_fragment:aT,logdepthbuf_pars_fragment:rT,logdepthbuf_pars_vertex:sT,logdepthbuf_vertex:oT,map_fragment:lT,map_pars_fragment:cT,map_particle_fragment:uT,map_particle_pars_fragment:fT,metalnessmap_fragment:dT,metalnessmap_pars_fragment:hT,morphinstance_vertex:pT,morphcolor_vertex:mT,morphnormal_vertex:gT,morphtarget_pars_vertex:vT,morphtarget_vertex:_T,normal_fragment_begin:xT,normal_fragment_maps:yT,normal_pars_fragment:ST,normal_pars_vertex:bT,normal_vertex:ET,normalmap_pars_fragment:MT,clearcoat_normal_fragment_begin:TT,clearcoat_normal_fragment_maps:wT,clearcoat_pars_fragment:AT,iridescence_pars_fragment:RT,opaque_fragment:CT,packing:DT,premultiplied_alpha_fragment:UT,project_vertex:NT,dithering_fragment:LT,dithering_pars_fragment:OT,roughnessmap_fragment:PT,roughnessmap_pars_fragment:BT,shadowmap_pars_fragment:zT,shadowmap_pars_vertex:IT,shadowmap_vertex:FT,shadowmask_pars_fragment:HT,skinbase_vertex:GT,skinning_pars_vertex:VT,skinning_vertex:kT,skinnormal_vertex:jT,specularmap_fragment:XT,specularmap_pars_fragment:WT,tonemapping_fragment:qT,tonemapping_pars_fragment:YT,transmission_fragment:ZT,transmission_pars_fragment:KT,uv_pars_fragment:QT,uv_pars_vertex:JT,uv_vertex:$T,worldpos_vertex:e2,background_vert:t2,background_frag:n2,backgroundCube_vert:i2,backgroundCube_frag:a2,cube_vert:r2,cube_frag:s2,depth_vert:o2,depth_frag:l2,distanceRGBA_vert:c2,distanceRGBA_frag:u2,equirect_vert:f2,equirect_frag:d2,linedashed_vert:h2,linedashed_frag:p2,meshbasic_vert:m2,meshbasic_frag:g2,meshlambert_vert:v2,meshlambert_frag:_2,meshmatcap_vert:x2,meshmatcap_frag:y2,meshnormal_vert:S2,meshnormal_frag:b2,meshphong_vert:E2,meshphong_frag:M2,meshphysical_vert:T2,meshphysical_frag:w2,meshtoon_vert:A2,meshtoon_frag:R2,points_vert:C2,points_frag:D2,shadow_vert:U2,shadow_frag:N2,sprite_vert:L2,sprite_frag:O2},Le={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Zi={basic:{uniforms:jn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:jn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Nt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:jn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:jn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:jn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Nt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:jn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:jn([Le.points,Le.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:jn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:jn([Le.common,Le.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:jn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:jn([Le.sprite,Le.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:jn([Le.common,Le.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:jn([Le.lights,Le.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Zi.physical={uniforms:jn([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const su={r:0,b:0,g:0},Gr=new La,P2=new hn;function B2(a,e,i,s,l,c,f){const h=new Nt(0);let p=c===!0?0:1,m,v,g=null,x=0,E=null;function M(U){let D=U.isScene===!0?U.background:null;return D&&D.isTexture&&(D=(U.backgroundBlurriness>0?i:e).get(D)),D}function T(U){let D=!1;const k=M(U);k===null?_(h,p):k&&k.isColor&&(_(k,1),D=!0);const H=a.xr.getEnvironmentBlendMode();H==="additive"?s.buffers.color.setClear(0,0,0,1,f):H==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(a.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function b(U,D){const k=M(D);k&&(k.isCubeTexture||k.mapping===Uu)?(v===void 0&&(v=new hi(new so(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:to(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(H,B,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Gr.copy(D.backgroundRotation),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),v.material.uniforms.envMap.value=k,v.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(P2.makeRotationFromEuler(Gr)),v.material.toneMapped=Dt.getTransfer(k.colorSpace)!==jt,(g!==k||x!==k.version||E!==a.toneMapping)&&(v.material.needsUpdate=!0,g=k,x=k.version,E=a.toneMapping),v.layers.enableAll(),U.unshift(v,v.geometry,v.material,0,0,null)):k&&k.isTexture&&(m===void 0&&(m=new hi(new Lu(2,2),new Hn({name:"BackgroundMaterial",uniforms:to(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:Na,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=k,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Dt.getTransfer(k.colorSpace)!==jt,k.matrixAutoUpdate===!0&&k.updateMatrix(),m.material.uniforms.uvTransform.value.copy(k.matrix),(g!==k||x!==k.version||E!==a.toneMapping)&&(m.material.needsUpdate=!0,g=k,x=k.version,E=a.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function _(U,D){U.getRGB(su,yx(a)),s.buffers.color.setClear(su.r,su.g,su.b,D,f)}function L(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,D=1){h.set(U),p=D,_(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,_(h,p)},render:T,addToRenderList:b,dispose:L}}function z2(a,e){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,f=!1;function h(C,V,ue,re,_e){let pe=!1;const z=g(re,ue,V);c!==z&&(c=z,m(c.object)),pe=E(C,re,ue,_e),pe&&M(C,re,ue,_e),_e!==null&&e.update(_e,a.ELEMENT_ARRAY_BUFFER),(pe||f)&&(f=!1,D(C,V,ue,re),_e!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(_e).buffer))}function p(){return a.createVertexArray()}function m(C){return a.bindVertexArray(C)}function v(C){return a.deleteVertexArray(C)}function g(C,V,ue){const re=ue.wireframe===!0;let _e=s[C.id];_e===void 0&&(_e={},s[C.id]=_e);let pe=_e[V.id];pe===void 0&&(pe={},_e[V.id]=pe);let z=pe[re];return z===void 0&&(z=x(p()),pe[re]=z),z}function x(C){const V=[],ue=[],re=[];for(let _e=0;_e<i;_e++)V[_e]=0,ue[_e]=0,re[_e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ue,attributeDivisors:re,object:C,attributes:{},index:null}}function E(C,V,ue,re){const _e=c.attributes,pe=V.attributes;let z=0;const Q=ue.getAttributes();for(const K in Q)if(Q[K].location>=0){const we=_e[K];let P=pe[K];if(P===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(P=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(P=C.instanceColor)),we===void 0||we.attribute!==P||P&&we.data!==P.data)return!0;z++}return c.attributesNum!==z||c.index!==re}function M(C,V,ue,re){const _e={},pe=V.attributes;let z=0;const Q=ue.getAttributes();for(const K in Q)if(Q[K].location>=0){let we=pe[K];we===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(we=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(we=C.instanceColor));const P={};P.attribute=we,we&&we.data&&(P.data=we.data),_e[K]=P,z++}c.attributes=_e,c.attributesNum=z,c.index=re}function T(){const C=c.newAttributes;for(let V=0,ue=C.length;V<ue;V++)C[V]=0}function b(C){_(C,0)}function _(C,V){const ue=c.newAttributes,re=c.enabledAttributes,_e=c.attributeDivisors;ue[C]=1,re[C]===0&&(a.enableVertexAttribArray(C),re[C]=1),_e[C]!==V&&(a.vertexAttribDivisor(C,V),_e[C]=V)}function L(){const C=c.newAttributes,V=c.enabledAttributes;for(let ue=0,re=V.length;ue<re;ue++)V[ue]!==C[ue]&&(a.disableVertexAttribArray(ue),V[ue]=0)}function U(C,V,ue,re,_e,pe,z){z===!0?a.vertexAttribIPointer(C,V,ue,_e,pe):a.vertexAttribPointer(C,V,ue,re,_e,pe)}function D(C,V,ue,re){T();const _e=re.attributes,pe=ue.getAttributes(),z=V.defaultAttributeValues;for(const Q in pe){const K=pe[Q];if(K.location>=0){let be=_e[Q];if(be===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(be=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(be=C.instanceColor)),be!==void 0){const we=be.normalized,P=be.itemSize,ne=e.get(be);if(ne===void 0)continue;const Se=ne.buffer,Z=ne.type,he=ne.bytesPerElement,Me=Z===a.INT||Z===a.UNSIGNED_INT||be.gpuType===Ep;if(be.isInterleavedBufferAttribute){const ye=be.data,ze=ye.stride,Ye=be.offset;if(ye.isInstancedInterleavedBuffer){for(let Ke=0;Ke<K.locationSize;Ke++)_(K.location+Ke,ye.meshPerAttribute);C.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Ke=0;Ke<K.locationSize;Ke++)b(K.location+Ke);a.bindBuffer(a.ARRAY_BUFFER,Se);for(let Ke=0;Ke<K.locationSize;Ke++)U(K.location+Ke,P/K.locationSize,Z,we,ze*he,(Ye+P/K.locationSize*Ke)*he,Me)}else{if(be.isInstancedBufferAttribute){for(let ye=0;ye<K.locationSize;ye++)_(K.location+ye,be.meshPerAttribute);C.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let ye=0;ye<K.locationSize;ye++)b(K.location+ye);a.bindBuffer(a.ARRAY_BUFFER,Se);for(let ye=0;ye<K.locationSize;ye++)U(K.location+ye,P/K.locationSize,Z,we,P*he,P/K.locationSize*ye*he,Me)}}else if(z!==void 0){const we=z[Q];if(we!==void 0)switch(we.length){case 2:a.vertexAttrib2fv(K.location,we);break;case 3:a.vertexAttrib3fv(K.location,we);break;case 4:a.vertexAttrib4fv(K.location,we);break;default:a.vertexAttrib1fv(K.location,we)}}}}L()}function k(){Y();for(const C in s){const V=s[C];for(const ue in V){const re=V[ue];for(const _e in re)v(re[_e].object),delete re[_e];delete V[ue]}delete s[C]}}function H(C){if(s[C.id]===void 0)return;const V=s[C.id];for(const ue in V){const re=V[ue];for(const _e in re)v(re[_e].object),delete re[_e];delete V[ue]}delete s[C.id]}function B(C){for(const V in s){const ue=s[V];if(ue[C.id]===void 0)continue;const re=ue[C.id];for(const _e in re)v(re[_e].object),delete re[_e];delete ue[C.id]}}function Y(){N(),f=!0,c!==l&&(c=l,m(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Y,resetDefaultState:N,dispose:k,releaseStatesOfGeometry:H,releaseStatesOfProgram:B,initAttributes:T,enableAttribute:b,disableUnusedAttributes:L}}function I2(a,e,i){let s;function l(m){s=m}function c(m,v){a.drawArrays(s,m,v),i.update(v,s,1)}function f(m,v,g){g!==0&&(a.drawArraysInstanced(s,m,v,g),i.update(v,s,g))}function h(m,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,v,0,g);let E=0;for(let M=0;M<g;M++)E+=v[M];i.update(E,s,1)}function p(m,v,g,x){if(g===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let M=0;M<m.length;M++)f(m[M],v[M],x[M]);else{E.multiDrawArraysInstancedWEBGL(s,m,0,v,0,x,0,g);let M=0;for(let T=0;T<g;T++)M+=v[T]*x[T];i.update(M,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function F2(a,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=a.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(B){return!(B!==Gi&&s.convert(B)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const Y=B===Al&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Ln&&s.convert(B)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Qi&&!Y)}function p(B){if(B==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const g=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),E=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),M=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=a.getParameter(a.MAX_TEXTURE_SIZE),b=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),_=a.getParameter(a.MAX_VERTEX_ATTRIBS),L=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),U=a.getParameter(a.MAX_VARYING_VECTORS),D=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),k=M>0,H=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:g,reverseDepthBuffer:x,maxTextures:E,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:b,maxAttributes:_,maxVertexUniforms:L,maxVaryings:U,maxFragmentUniforms:D,vertexTextures:k,maxSamples:H}}function H2(a){const e=this;let i=null,s=0,l=!1,c=!1;const f=new kr,h=new ut,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const E=g.length!==0||x||s!==0||l;return l=x,s=g.length,E},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,x){i=v(g,x,0)},this.setState=function(g,x,E){const M=g.clippingPlanes,T=g.clipIntersection,b=g.clipShadows,_=a.get(g);if(!l||M===null||M.length===0||c&&!b)c?v(null):m();else{const L=c?0:s,U=L*4;let D=_.clippingState||null;p.value=D,D=v(M,x,U,E);for(let k=0;k!==U;++k)D[k]=i[k];_.clippingState=D,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=L}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(g,x,E,M){const T=g!==null?g.length:0;let b=null;if(T!==0){if(b=p.value,M!==!0||b===null){const _=E+T*4,L=x.matrixWorldInverse;h.getNormalMatrix(L),(b===null||b.length<_)&&(b=new Float32Array(_));for(let U=0,D=E;U!==T;++U,D+=4)f.copy(g[U]).applyMatrix4(L,h),f.normal.toArray(b,D),b[D+3]=f.constant}p.value=b,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,b}}function G2(a){let e=new WeakMap;function i(f,h){return h===Ph?f.mapping=Qs:h===Bh&&(f.mapping=Js),f}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===Ph||h===Bh)if(e.has(f)){const p=e.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new YE(p.height);return m.fromEquirectangularTexture(a,f),e.set(f,m),f.addEventListener("dispose",l),i(m.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const qs=4,l_=[.125,.215,.35,.446,.526,.582],Wr=20,Sh=new Tx,c_=new Nt;let bh=null,Eh=0,Mh=0,Th=!1;const jr=(1+Math.sqrt(5))/2,js=1/jr,u_=[new oe(-jr,js,0),new oe(jr,js,0),new oe(-js,0,jr),new oe(js,0,jr),new oe(0,jr,-js),new oe(0,jr,js),new oe(-1,1,-1),new oe(1,1,-1),new oe(-1,1,1),new oe(1,1,1)],V2=new oe;class f_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:h=V2}=c;bh=this._renderer.getRenderTarget(),Eh=this._renderer.getActiveCubeFace(),Mh=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,s,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=p_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=h_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bh,Eh,Mh),this._renderer.xr.enabled=Th,e.scissorTest=!1,ou(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Qs||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bh=this._renderer.getRenderTarget(),Eh=this._renderer.getActiveCubeFace(),Mh=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:ni,minFilter:ni,generateMipmaps:!1,type:Al,format:Gi,colorSpace:vr,depthBuffer:!1},l=d_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=d_(e,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=k2(c)),this._blurMaterial=j2(c,e,i)}return l}_compileMaterial(e){const i=new hi(this._lodPlanes[0],e);this._renderer.compile(i,Sh)}_sceneToCubeUV(e,i,s,l,c){const p=new Xn(90,1,i,s),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,E=g.toneMapping;g.getClearColor(c_),g.toneMapping=Ca,g.autoClear=!1;const M=new Nu({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),T=new hi(new so,M);let b=!1;const _=e.background;_?_.isColor&&(M.color.copy(_),e.background=null,b=!0):(M.color.copy(c_),b=!0);for(let L=0;L<6;L++){const U=L%3;U===0?(p.up.set(0,m[L],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+v[L],c.y,c.z)):U===1?(p.up.set(0,0,m[L]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+v[L],c.z)):(p.up.set(0,m[L],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+v[L]));const D=this._cubeSize;ou(l,U*D,L>2?D:0,D,D),g.setRenderTarget(l),b&&g.render(T,p),g.render(e,p)}T.geometry.dispose(),T.material.dispose(),g.toneMapping=E,g.autoClear=x,e.background=_}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Qs||e.mapping===Js;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=p_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=h_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new hi(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=e;const p=this._cubeSize;ou(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(f,Sh)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=u_[(l-c-1)%u_.length];this._blur(e,c-1,c,f,h)}i.autoClear=s}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,h){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new hi(this._lodPlanes[l],m),x=m.uniforms,E=this._sizeLods[s]-1,M=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Wr-1),T=c/M,b=isFinite(c)?1+Math.floor(v*T):Wr;b>Wr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${Wr}`);const _=[];let L=0;for(let B=0;B<Wr;++B){const Y=B/T,N=Math.exp(-Y*Y/2);_.push(N),B===0?L+=N:B<b&&(L+=2*N)}for(let B=0;B<_.length;B++)_[B]=_[B]/L;x.envMap.value=e.texture,x.samples.value=b,x.weights.value=_,x.latitudinal.value=f==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:U}=this;x.dTheta.value=M,x.mipInt.value=U-s;const D=this._sizeLods[l],k=3*D*(l>U-qs?l-U+qs:0),H=4*(this._cubeSize-D);ou(i,k,H,3*D,2*D),p.setRenderTarget(i),p.render(g,Sh)}}function k2(a){const e=[],i=[],s=[];let l=a;const c=a-qs+1+l_.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);i.push(h);let p=1/h;f>a-qs?p=l_[f-a+qs-1]:f===0&&(p=0),s.push(p);const m=1/(h-2),v=-m,g=1+m,x=[v,v,g,v,g,g,v,v,g,g,v,g],E=6,M=6,T=3,b=2,_=1,L=new Float32Array(T*M*E),U=new Float32Array(b*M*E),D=new Float32Array(_*M*E);for(let H=0;H<E;H++){const B=H%3*2/3-1,Y=H>2?0:-1,N=[B,Y,0,B+2/3,Y,0,B+2/3,Y+1,0,B,Y,0,B+2/3,Y+1,0,B,Y+1,0];L.set(N,T*M*H),U.set(x,b*M*H);const C=[H,H,H,H,H,H];D.set(C,_*M*H)}const k=new Pa;k.setAttribute("position",new Ci(L,T)),k.setAttribute("uv",new Ci(U,b)),k.setAttribute("faceIndex",new Ci(D,_)),e.push(k),l>qs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function d_(a,e,i){const s=new En(a,e,i);return s.texture.mapping=Uu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function ou(a,e,i,s,l){a.viewport.set(e,i,s,l),a.scissor.set(e,i,s,l)}function j2(a,e,i){const s=new Float32Array(Wr),l=new oe(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Op(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function h_(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Op(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function p_(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Op(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Op(){return`

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
	`}function X2(a){let e=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const p=h.mapping,m=p===Ph||p===Bh,v=p===Qs||p===Js;if(m||v){let g=e.get(h);const x=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new f_(a)),g=m?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const E=h.image;return m&&E&&E.height>0||v&&E&&l(E)?(i===null&&(i=new f_(a)),g=m?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function l(h){let p=0;const m=6;for(let v=0;v<m;v++)h[v]!==void 0&&p++;return p===m}function c(h){const p=h.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function W2(a){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=a.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&vu("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function q2(a,e,i,s){const l={},c=new WeakMap;function f(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const M in x.attributes)e.remove(x.attributes[M]);x.removeEventListener("dispose",f),delete l[x.id];const E=c.get(x);E&&(e.remove(E),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(g,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function p(g){const x=g.attributes;for(const E in x)e.update(x[E],a.ARRAY_BUFFER)}function m(g){const x=[],E=g.index,M=g.attributes.position;let T=0;if(E!==null){const L=E.array;T=E.version;for(let U=0,D=L.length;U<D;U+=3){const k=L[U+0],H=L[U+1],B=L[U+2];x.push(k,H,H,B,B,k)}}else if(M!==void 0){const L=M.array;T=M.version;for(let U=0,D=L.length/3-1;U<D;U+=3){const k=U+0,H=U+1,B=U+2;x.push(k,H,H,B,B,k)}}else return;const b=new(px(x)?xx:_x)(x,1);b.version=T;const _=c.get(g);_&&e.remove(_),c.set(g,b)}function v(g){const x=c.get(g);if(x){const E=g.index;E!==null&&x.version<E.version&&m(g)}else m(g);return c.get(g)}return{get:h,update:p,getWireframeAttribute:v}}function Y2(a,e,i){let s;function l(x){s=x}let c,f;function h(x){c=x.type,f=x.bytesPerElement}function p(x,E){a.drawElements(s,E,c,x*f),i.update(E,s,1)}function m(x,E,M){M!==0&&(a.drawElementsInstanced(s,E,c,x*f,M),i.update(E,s,M))}function v(x,E,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,E,0,c,x,0,M);let b=0;for(let _=0;_<M;_++)b+=E[_];i.update(b,s,1)}function g(x,E,M,T){if(M===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let _=0;_<x.length;_++)m(x[_]/f,E[_],T[_]);else{b.multiDrawElementsInstancedWEBGL(s,E,0,c,x,0,T,0,M);let _=0;for(let L=0;L<M;L++)_+=E[L]*T[L];i.update(_,s,1)}}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function Z2(a){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(i.calls++,f){case a.TRIANGLES:i.triangles+=h*(c/3);break;case a.LINES:i.lines+=h*(c/2);break;case a.LINE_STRIP:i.lines+=h*(c-1);break;case a.LINE_LOOP:i.lines+=h*c;break;case a.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function K2(a,e,i){const s=new WeakMap,l=new $t;function c(f,h,p){const m=f.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let x=s.get(h);if(x===void 0||x.count!==g){let C=function(){Y.dispose(),s.delete(h),h.removeEventListener("dispose",C)};var E=C;x!==void 0&&x.texture.dispose();const M=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let D=0;M===!0&&(D=1),T===!0&&(D=2),b===!0&&(D=3);let k=h.attributes.position.count*D,H=1;k>e.maxTextureSize&&(H=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const B=new Float32Array(k*H*4*g),Y=new mx(B,k,H,g);Y.type=Qi,Y.needsUpdate=!0;const N=D*4;for(let V=0;V<g;V++){const ue=_[V],re=L[V],_e=U[V],pe=k*H*4*V;for(let z=0;z<ue.count;z++){const Q=z*N;M===!0&&(l.fromBufferAttribute(ue,z),B[pe+Q+0]=l.x,B[pe+Q+1]=l.y,B[pe+Q+2]=l.z,B[pe+Q+3]=0),T===!0&&(l.fromBufferAttribute(re,z),B[pe+Q+4]=l.x,B[pe+Q+5]=l.y,B[pe+Q+6]=l.z,B[pe+Q+7]=0),b===!0&&(l.fromBufferAttribute(_e,z),B[pe+Q+8]=l.x,B[pe+Q+9]=l.y,B[pe+Q+10]=l.z,B[pe+Q+11]=_e.itemSize===4?l.w:1)}}x={count:g,texture:Y,size:new lt(k,H)},s.set(h,x),h.addEventListener("dispose",C)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(a,"morphTexture",f.morphTexture,i);else{let M=0;for(let b=0;b<m.length;b++)M+=m[b];const T=h.morphTargetsRelative?1:1-M;p.getUniforms().setValue(a,"morphTargetBaseInfluence",T),p.getUniforms().setValue(a,"morphTargetInfluences",m)}p.getUniforms().setValue(a,"morphTargetsTexture",x.texture,i),p.getUniforms().setValue(a,"morphTargetsTextureSize",x.size)}return{update:c}}function Q2(a,e,i,s){let l=new WeakMap;function c(p){const m=s.render.frame,v=p.geometry,g=e.get(p,v);if(l.get(g)!==m&&(e.update(g),l.set(g,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==m&&(i.update(p.instanceMatrix,a.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,a.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return g}function f(){l=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:f}}const Ax=new Fn,m_=new Np(1,1),Rx=new mx,Cx=new DE,Dx=new bx,g_=[],v_=[],__=new Float32Array(16),x_=new Float32Array(9),y_=new Float32Array(4);function oo(a,e,i){const s=a[0];if(s<=0||s>0)return a;const l=e*i;let c=g_[l];if(c===void 0&&(c=new Float32Array(l),g_[l]=c),e!==0){s.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,a[f].toArray(c,h)}return c}function vn(a,e){if(a.length!==e.length)return!1;for(let i=0,s=a.length;i<s;i++)if(a[i]!==e[i])return!1;return!0}function _n(a,e){for(let i=0,s=e.length;i<s;i++)a[i]=e[i]}function Ou(a,e){let i=v_[e];i===void 0&&(i=new Int32Array(e),v_[e]=i);for(let s=0;s!==e;++s)i[s]=a.allocateTextureUnit();return i}function J2(a,e){const i=this.cache;i[0]!==e&&(a.uniform1f(this.addr,e),i[0]=e)}function $2(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;a.uniform2fv(this.addr,e),_n(i,e)}}function ew(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(vn(i,e))return;a.uniform3fv(this.addr,e),_n(i,e)}}function tw(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;a.uniform4fv(this.addr,e),_n(i,e)}}function nw(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(vn(i,e))return;a.uniformMatrix2fv(this.addr,!1,e),_n(i,e)}else{if(vn(i,s))return;y_.set(s),a.uniformMatrix2fv(this.addr,!1,y_),_n(i,s)}}function iw(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(vn(i,e))return;a.uniformMatrix3fv(this.addr,!1,e),_n(i,e)}else{if(vn(i,s))return;x_.set(s),a.uniformMatrix3fv(this.addr,!1,x_),_n(i,s)}}function aw(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(vn(i,e))return;a.uniformMatrix4fv(this.addr,!1,e),_n(i,e)}else{if(vn(i,s))return;__.set(s),a.uniformMatrix4fv(this.addr,!1,__),_n(i,s)}}function rw(a,e){const i=this.cache;i[0]!==e&&(a.uniform1i(this.addr,e),i[0]=e)}function sw(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;a.uniform2iv(this.addr,e),_n(i,e)}}function ow(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;a.uniform3iv(this.addr,e),_n(i,e)}}function lw(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;a.uniform4iv(this.addr,e),_n(i,e)}}function cw(a,e){const i=this.cache;i[0]!==e&&(a.uniform1ui(this.addr,e),i[0]=e)}function uw(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;a.uniform2uiv(this.addr,e),_n(i,e)}}function fw(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;a.uniform3uiv(this.addr,e),_n(i,e)}}function dw(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;a.uniform4uiv(this.addr,e),_n(i,e)}}function hw(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l);let c;this.type===a.SAMPLER_2D_SHADOW?(m_.compareFunction=hx,c=m_):c=Ax,i.setTexture2D(e||c,l)}function pw(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Cx,l)}function mw(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Dx,l)}function gw(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Rx,l)}function vw(a){switch(a){case 5126:return J2;case 35664:return $2;case 35665:return ew;case 35666:return tw;case 35674:return nw;case 35675:return iw;case 35676:return aw;case 5124:case 35670:return rw;case 35667:case 35671:return sw;case 35668:case 35672:return ow;case 35669:case 35673:return lw;case 5125:return cw;case 36294:return uw;case 36295:return fw;case 36296:return dw;case 35678:case 36198:case 36298:case 36306:case 35682:return hw;case 35679:case 36299:case 36307:return pw;case 35680:case 36300:case 36308:case 36293:return mw;case 36289:case 36303:case 36311:case 36292:return gw}}function _w(a,e){a.uniform1fv(this.addr,e)}function xw(a,e){const i=oo(e,this.size,2);a.uniform2fv(this.addr,i)}function yw(a,e){const i=oo(e,this.size,3);a.uniform3fv(this.addr,i)}function Sw(a,e){const i=oo(e,this.size,4);a.uniform4fv(this.addr,i)}function bw(a,e){const i=oo(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function Ew(a,e){const i=oo(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function Mw(a,e){const i=oo(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function Tw(a,e){a.uniform1iv(this.addr,e)}function ww(a,e){a.uniform2iv(this.addr,e)}function Aw(a,e){a.uniform3iv(this.addr,e)}function Rw(a,e){a.uniform4iv(this.addr,e)}function Cw(a,e){a.uniform1uiv(this.addr,e)}function Dw(a,e){a.uniform2uiv(this.addr,e)}function Uw(a,e){a.uniform3uiv(this.addr,e)}function Nw(a,e){a.uniform4uiv(this.addr,e)}function Lw(a,e,i){const s=this.cache,l=e.length,c=Ou(i,l);vn(s,c)||(a.uniform1iv(this.addr,c),_n(s,c));for(let f=0;f!==l;++f)i.setTexture2D(e[f]||Ax,c[f])}function Ow(a,e,i){const s=this.cache,l=e.length,c=Ou(i,l);vn(s,c)||(a.uniform1iv(this.addr,c),_n(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||Cx,c[f])}function Pw(a,e,i){const s=this.cache,l=e.length,c=Ou(i,l);vn(s,c)||(a.uniform1iv(this.addr,c),_n(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||Dx,c[f])}function Bw(a,e,i){const s=this.cache,l=e.length,c=Ou(i,l);vn(s,c)||(a.uniform1iv(this.addr,c),_n(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||Rx,c[f])}function zw(a){switch(a){case 5126:return _w;case 35664:return xw;case 35665:return yw;case 35666:return Sw;case 35674:return bw;case 35675:return Ew;case 35676:return Mw;case 5124:case 35670:return Tw;case 35667:case 35671:return ww;case 35668:case 35672:return Aw;case 35669:case 35673:return Rw;case 5125:return Cw;case 36294:return Dw;case 36295:return Uw;case 36296:return Nw;case 35678:case 36198:case 36298:case 36306:case 35682:return Lw;case 35679:case 36299:case 36307:return Ow;case 35680:case 36300:case 36308:case 36293:return Pw;case 36289:case 36303:case 36311:case 36292:return Bw}}class Iw{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=vw(i.type)}}class Fw{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=zw(i.type)}}class Hw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,i[h.id],s)}}}const wh=/(\w+)(\])?(\[|\.)?/g;function S_(a,e){a.seq.push(e),a.map[e.id]=e}function Gw(a,e,i){const s=a.name,l=s.length;for(wh.lastIndex=0;;){const c=wh.exec(s),f=wh.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&f+2===l){S_(i,m===void 0?new Iw(h,a,e):new Fw(h,a,e));break}else{let g=i.map[h];g===void 0&&(g=new Hw(h),S_(i,g)),i=g}}}class _u{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=e.getActiveUniform(i,l),f=e.getUniformLocation(i,c.name);Gw(c,f,this)}}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],p=s[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function b_(a,e,i){const s=a.createShader(e);return a.shaderSource(s,i),a.compileShader(s),s}const Vw=37297;let kw=0;function jw(a,e){const i=a.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const E_=new ut;function Xw(a){Dt._getMatrix(E_,Dt.workingColorSpace,a);const e=`mat3( ${E_.elements.map(i=>i.toFixed(4))} )`;switch(Dt.getTransfer(a)){case Mu:return[e,"LinearTransferOETF"];case jt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function M_(a,e,i){const s=a.getShaderParameter(e,a.COMPILE_STATUS),l=a.getShaderInfoLog(e).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+jw(a.getShaderSource(e),f)}else return l}function Ww(a,e){const i=Xw(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function qw(a,e){let i;switch(e){case iE:i="Linear";break;case aE:i="Reinhard";break;case rE:i="Cineon";break;case sE:i="ACESFilmic";break;case lE:i="AgX";break;case cE:i="Neutral";break;case oE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const lu=new oe;function Yw(){Dt.getLuminanceCoefficients(lu);const a=lu.x.toFixed(4),e=lu.y.toFixed(4),i=lu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zw(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dl).join(`
`)}function Kw(a){const e=[];for(const i in a){const s=a[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function Qw(a,e){const i={},s=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=a.getActiveAttrib(e,l),f=c.name;let h=1;c.type===a.FLOAT_MAT2&&(h=2),c.type===a.FLOAT_MAT3&&(h=3),c.type===a.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:a.getAttribLocation(e,f),locationSize:h}}return i}function dl(a){return a!==""}function T_(a,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function w_(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Jw=/^[ \t]*#include +<([\w\d./]+)>/gm;function dp(a){return a.replace(Jw,eA)}const $w=new Map;function eA(a,e){let i=ft[e];if(i===void 0){const s=$w.get(e);if(s!==void 0)i=ft[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return dp(i)}const tA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function A_(a){return a.replace(tA,nA)}function nA(a,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function R_(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}function iA(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===nx?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Bb?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Aa&&(e="SHADOWMAP_TYPE_VSM"),e}function aA(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Qs:case Js:e="ENVMAP_TYPE_CUBE";break;case Uu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rA(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Js:e="ENVMAP_MODE_REFRACTION";break}return e}function sA(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case ix:e="ENVMAP_BLENDING_MULTIPLY";break;case tE:e="ENVMAP_BLENDING_MIX";break;case nE:e="ENVMAP_BLENDING_ADD";break}return e}function oA(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function lA(a,e,i,s){const l=a.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const p=iA(i),m=aA(i),v=rA(i),g=sA(i),x=oA(i),E=Zw(i),M=Kw(c),T=l.createProgram();let b,_,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(dl).join(`
`),b.length>0&&(b+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(dl).join(`
`),_.length>0&&(_+=`
`)):(b=[R_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dl).join(`
`),_=[R_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ca?"#define TONE_MAPPING":"",i.toneMapping!==Ca?ft.tonemapping_pars_fragment:"",i.toneMapping!==Ca?qw("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,Ww("linearToOutputTexel",i.outputColorSpace),Yw(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(dl).join(`
`)),f=dp(f),f=T_(f,i),f=w_(f,i),h=dp(h),h=T_(h,i),h=w_(h,i),f=A_(f),h=A_(h),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,b=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,_=["#define varying in",i.glslVersion===k0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===k0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=L+b+f,D=L+_+h,k=b_(l,l.VERTEX_SHADER,U),H=b_(l,l.FRAGMENT_SHADER,D);l.attachShader(T,k),l.attachShader(T,H),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function B(V){if(a.debug.checkShaderErrors){const ue=l.getProgramInfoLog(T).trim(),re=l.getShaderInfoLog(k).trim(),_e=l.getShaderInfoLog(H).trim();let pe=!0,z=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(pe=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(l,T,k,H);else{const Q=M_(l,k,"vertex"),K=M_(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ue+`
`+Q+`
`+K)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(re===""||_e==="")&&(z=!1);z&&(V.diagnostics={runnable:pe,programLog:ue,vertexShader:{log:re,prefix:b},fragmentShader:{log:_e,prefix:_}})}l.deleteShader(k),l.deleteShader(H),Y=new _u(l,T),N=Qw(l,T)}let Y;this.getUniforms=function(){return Y===void 0&&B(this),Y};let N;this.getAttributes=function(){return N===void 0&&B(this),N};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(T,Vw)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=kw++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=k,this.fragmentShader=H,this}let cA=0;class uA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new fA(e),i.set(e,s)),s}}class fA{constructor(e){this.id=cA++,this.code=e,this.usedTimes=0}}function dA(a,e,i,s,l,c,f){const h=new gx,p=new uA,m=new Set,v=[],g=l.logarithmicDepthBuffer,x=l.vertexTextures;let E=l.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(N){return m.add(N),N===0?"uv":`uv${N}`}function b(N,C,V,ue,re){const _e=ue.fog,pe=re.geometry,z=N.isMeshStandardMaterial?ue.environment:null,Q=(N.isMeshStandardMaterial?i:e).get(N.envMap||z),K=Q&&Q.mapping===Uu?Q.image.height:null,be=M[N.type];N.precision!==null&&(E=l.getMaxPrecision(N.precision),E!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",E,"instead."));const we=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,P=we!==void 0?we.length:0;let ne=0;pe.morphAttributes.position!==void 0&&(ne=1),pe.morphAttributes.normal!==void 0&&(ne=2),pe.morphAttributes.color!==void 0&&(ne=3);let Se,Z,he,Me;if(be){const wt=Zi[be];Se=wt.vertexShader,Z=wt.fragmentShader}else Se=N.vertexShader,Z=N.fragmentShader,p.update(N),he=p.getVertexShaderID(N),Me=p.getFragmentShaderID(N);const ye=a.getRenderTarget(),ze=a.state.buffers.depth.getReversed(),Ye=re.isInstancedMesh===!0,Ke=re.isBatchedMesh===!0,qt=!!N.map,Xt=!!N.matcap,dt=!!Q,F=!!N.aoMap,On=!!N.lightMap,ht=!!N.bumpMap,vt=!!N.normalMap,je=!!N.displacementMap,Bt=!!N.emissiveMap,ke=!!N.metalnessMap,O=!!N.roughnessMap,A=N.anisotropy>0,te=N.clearcoat>0,de=N.dispersion>0,Ee=N.iridescence>0,ge=N.sheen>0,Ge=N.transmission>0,Ce=A&&!!N.anisotropyMap,Qe=te&&!!N.clearcoatMap,$e=te&&!!N.clearcoatNormalMap,Ae=te&&!!N.clearcoatRoughnessMap,Ie=Ee&&!!N.iridescenceMap,Ze=Ee&&!!N.iridescenceThicknessMap,Ve=ge&&!!N.sheenColorMap,Pe=ge&&!!N.sheenRoughnessMap,tt=!!N.specularMap,st=!!N.specularColorMap,Ft=!!N.specularIntensityMap,X=Ge&&!!N.transmissionMap,De=Ge&&!!N.thicknessMap,ce=!!N.gradientMap,xe=!!N.alphaMap,Re=N.alphaTest>0,Ue=!!N.alphaHash,nt=!!N.extensions;let Qt=Ca;N.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Qt=a.toneMapping);const pn={shaderID:be,shaderType:N.type,shaderName:N.name,vertexShader:Se,fragmentShader:Z,defines:N.defines,customVertexShaderID:he,customFragmentShaderID:Me,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:E,batching:Ke,batchingColor:Ke&&re._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&re.instanceColor!==null,instancingMorph:Ye&&re.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ye===null?a.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:vr,alphaToCoverage:!!N.alphaToCoverage,map:qt,matcap:Xt,envMap:dt,envMapMode:dt&&Q.mapping,envMapCubeUVHeight:K,aoMap:F,lightMap:On,bumpMap:ht,normalMap:vt,displacementMap:x&&je,emissiveMap:Bt,normalMapObjectSpace:vt&&N.normalMapType===dE,normalMapTangentSpace:vt&&N.normalMapType===fE,metalnessMap:ke,roughnessMap:O,anisotropy:A,anisotropyMap:Ce,clearcoat:te,clearcoatMap:Qe,clearcoatNormalMap:$e,clearcoatRoughnessMap:Ae,dispersion:de,iridescence:Ee,iridescenceMap:Ie,iridescenceThicknessMap:Ze,sheen:ge,sheenColorMap:Ve,sheenRoughnessMap:Pe,specularMap:tt,specularColorMap:st,specularIntensityMap:Ft,transmission:Ge,transmissionMap:X,thicknessMap:De,gradientMap:ce,opaque:N.transparent===!1&&N.blending===Ys&&N.alphaToCoverage===!1,alphaMap:xe,alphaTest:Re,alphaHash:Ue,combine:N.combine,mapUv:qt&&T(N.map.channel),aoMapUv:F&&T(N.aoMap.channel),lightMapUv:On&&T(N.lightMap.channel),bumpMapUv:ht&&T(N.bumpMap.channel),normalMapUv:vt&&T(N.normalMap.channel),displacementMapUv:je&&T(N.displacementMap.channel),emissiveMapUv:Bt&&T(N.emissiveMap.channel),metalnessMapUv:ke&&T(N.metalnessMap.channel),roughnessMapUv:O&&T(N.roughnessMap.channel),anisotropyMapUv:Ce&&T(N.anisotropyMap.channel),clearcoatMapUv:Qe&&T(N.clearcoatMap.channel),clearcoatNormalMapUv:$e&&T(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&T(N.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&T(N.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&T(N.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&T(N.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&T(N.sheenRoughnessMap.channel),specularMapUv:tt&&T(N.specularMap.channel),specularColorMapUv:st&&T(N.specularColorMap.channel),specularIntensityMapUv:Ft&&T(N.specularIntensityMap.channel),transmissionMapUv:X&&T(N.transmissionMap.channel),thicknessMapUv:De&&T(N.thicknessMap.channel),alphaMapUv:xe&&T(N.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(vt||A),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:re.isPoints===!0&&!!pe.attributes.uv&&(qt||xe),fog:!!_e,useFog:N.fog===!0,fogExp2:!!_e&&_e.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:ze,skinning:re.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:ne,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:N.dithering,shadowMapEnabled:a.shadowMap.enabled&&V.length>0,shadowMapType:a.shadowMap.type,toneMapping:Qt,decodeVideoTexture:qt&&N.map.isVideoTexture===!0&&Dt.getTransfer(N.map.colorSpace)===jt,decodeVideoTextureEmissive:Bt&&N.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(N.emissiveMap.colorSpace)===jt,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===di,flipSided:N.side===bn,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:nt&&N.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&N.extensions.multiDraw===!0||Ke)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return pn.vertexUv1s=m.has(1),pn.vertexUv2s=m.has(2),pn.vertexUv3s=m.has(3),m.clear(),pn}function _(N){const C=[];if(N.shaderID?C.push(N.shaderID):(C.push(N.customVertexShaderID),C.push(N.customFragmentShaderID)),N.defines!==void 0)for(const V in N.defines)C.push(V),C.push(N.defines[V]);return N.isRawShaderMaterial===!1&&(L(C,N),U(C,N),C.push(a.outputColorSpace)),C.push(N.customProgramCacheKey),C.join()}function L(N,C){N.push(C.precision),N.push(C.outputColorSpace),N.push(C.envMapMode),N.push(C.envMapCubeUVHeight),N.push(C.mapUv),N.push(C.alphaMapUv),N.push(C.lightMapUv),N.push(C.aoMapUv),N.push(C.bumpMapUv),N.push(C.normalMapUv),N.push(C.displacementMapUv),N.push(C.emissiveMapUv),N.push(C.metalnessMapUv),N.push(C.roughnessMapUv),N.push(C.anisotropyMapUv),N.push(C.clearcoatMapUv),N.push(C.clearcoatNormalMapUv),N.push(C.clearcoatRoughnessMapUv),N.push(C.iridescenceMapUv),N.push(C.iridescenceThicknessMapUv),N.push(C.sheenColorMapUv),N.push(C.sheenRoughnessMapUv),N.push(C.specularMapUv),N.push(C.specularColorMapUv),N.push(C.specularIntensityMapUv),N.push(C.transmissionMapUv),N.push(C.thicknessMapUv),N.push(C.combine),N.push(C.fogExp2),N.push(C.sizeAttenuation),N.push(C.morphTargetsCount),N.push(C.morphAttributeCount),N.push(C.numDirLights),N.push(C.numPointLights),N.push(C.numSpotLights),N.push(C.numSpotLightMaps),N.push(C.numHemiLights),N.push(C.numRectAreaLights),N.push(C.numDirLightShadows),N.push(C.numPointLightShadows),N.push(C.numSpotLightShadows),N.push(C.numSpotLightShadowsWithMaps),N.push(C.numLightProbes),N.push(C.shadowMapType),N.push(C.toneMapping),N.push(C.numClippingPlanes),N.push(C.numClipIntersection),N.push(C.depthPacking)}function U(N,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),N.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reverseDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),N.push(h.mask)}function D(N){const C=M[N.type];let V;if(C){const ue=Zi[C];V=jE.clone(ue.uniforms)}else V=N.uniforms;return V}function k(N,C){let V;for(let ue=0,re=v.length;ue<re;ue++){const _e=v[ue];if(_e.cacheKey===C){V=_e,++V.usedTimes;break}}return V===void 0&&(V=new lA(a,C,N,c),v.push(V)),V}function H(N){if(--N.usedTimes===0){const C=v.indexOf(N);v[C]=v[v.length-1],v.pop(),N.destroy()}}function B(N){p.remove(N)}function Y(){p.dispose()}return{getParameters:b,getProgramCacheKey:_,getUniforms:D,acquireProgram:k,releaseProgram:H,releaseShaderCache:B,programs:v,dispose:Y}}function hA(){let a=new WeakMap;function e(f){return a.has(f)}function i(f){let h=a.get(f);return h===void 0&&(h={},a.set(f,h)),h}function s(f){a.delete(f)}function l(f,h,p){a.get(f)[h]=p}function c(){a=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function pA(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function C_(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function D_(){const a=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(g,x,E,M,T,b){let _=a[e];return _===void 0?(_={id:g.id,object:g,geometry:x,material:E,groupOrder:M,renderOrder:g.renderOrder,z:T,group:b},a[e]=_):(_.id=g.id,_.object=g,_.geometry=x,_.material=E,_.groupOrder=M,_.renderOrder=g.renderOrder,_.z=T,_.group=b),e++,_}function h(g,x,E,M,T,b){const _=f(g,x,E,M,T,b);E.transmission>0?s.push(_):E.transparent===!0?l.push(_):i.push(_)}function p(g,x,E,M,T,b){const _=f(g,x,E,M,T,b);E.transmission>0?s.unshift(_):E.transparent===!0?l.unshift(_):i.unshift(_)}function m(g,x){i.length>1&&i.sort(g||pA),s.length>1&&s.sort(x||C_),l.length>1&&l.sort(x||C_)}function v(){for(let g=e,x=a.length;g<x;g++){const E=a[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:p,finish:v,sort:m}}function mA(){let a=new WeakMap;function e(s,l){const c=a.get(s);let f;return c===void 0?(f=new D_,a.set(s,[f])):l>=c.length?(f=new D_,c.push(f)):f=c[l],f}function i(){a=new WeakMap}return{get:e,dispose:i}}function gA(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new oe,color:new Nt};break;case"SpotLight":i={position:new oe,direction:new oe,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new oe,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new oe,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":i={color:new Nt,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return a[e.id]=i,i}}}function vA(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=i,i}}}let _A=0;function xA(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function yA(a){const e=new gA,i=vA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new oe);const l=new oe,c=new hn,f=new hn;function h(m){let v=0,g=0,x=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let E=0,M=0,T=0,b=0,_=0,L=0,U=0,D=0,k=0,H=0,B=0;m.sort(xA);for(let N=0,C=m.length;N<C;N++){const V=m[N],ue=V.color,re=V.intensity,_e=V.distance,pe=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)v+=ue.r*re,g+=ue.g*re,x+=ue.b*re;else if(V.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(V.sh.coefficients[z],re);B++}else if(V.isDirectionalLight){const z=e.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const Q=V.shadow,K=i.get(V);K.shadowIntensity=Q.intensity,K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,s.directionalShadow[E]=K,s.directionalShadowMap[E]=pe,s.directionalShadowMatrix[E]=V.shadow.matrix,L++}s.directional[E]=z,E++}else if(V.isSpotLight){const z=e.get(V);z.position.setFromMatrixPosition(V.matrixWorld),z.color.copy(ue).multiplyScalar(re),z.distance=_e,z.coneCos=Math.cos(V.angle),z.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),z.decay=V.decay,s.spot[T]=z;const Q=V.shadow;if(V.map&&(s.spotLightMap[k]=V.map,k++,Q.updateMatrices(V),V.castShadow&&H++),s.spotLightMatrix[T]=Q.matrix,V.castShadow){const K=i.get(V);K.shadowIntensity=Q.intensity,K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,s.spotShadow[T]=K,s.spotShadowMap[T]=pe,D++}T++}else if(V.isRectAreaLight){const z=e.get(V);z.color.copy(ue).multiplyScalar(re),z.halfWidth.set(V.width*.5,0,0),z.halfHeight.set(0,V.height*.5,0),s.rectArea[b]=z,b++}else if(V.isPointLight){const z=e.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),z.distance=V.distance,z.decay=V.decay,V.castShadow){const Q=V.shadow,K=i.get(V);K.shadowIntensity=Q.intensity,K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,K.shadowCameraNear=Q.camera.near,K.shadowCameraFar=Q.camera.far,s.pointShadow[M]=K,s.pointShadowMap[M]=pe,s.pointShadowMatrix[M]=V.shadow.matrix,U++}s.point[M]=z,M++}else if(V.isHemisphereLight){const z=e.get(V);z.skyColor.copy(V.color).multiplyScalar(re),z.groundColor.copy(V.groundColor).multiplyScalar(re),s.hemi[_]=z,_++}}b>0&&(a.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_FLOAT_1,s.rectAreaLTC2=Le.LTC_FLOAT_2):(s.rectAreaLTC1=Le.LTC_HALF_1,s.rectAreaLTC2=Le.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=g,s.ambient[2]=x;const Y=s.hash;(Y.directionalLength!==E||Y.pointLength!==M||Y.spotLength!==T||Y.rectAreaLength!==b||Y.hemiLength!==_||Y.numDirectionalShadows!==L||Y.numPointShadows!==U||Y.numSpotShadows!==D||Y.numSpotMaps!==k||Y.numLightProbes!==B)&&(s.directional.length=E,s.spot.length=T,s.rectArea.length=b,s.point.length=M,s.hemi.length=_,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=D+k-H,s.spotLightMap.length=k,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=B,Y.directionalLength=E,Y.pointLength=M,Y.spotLength=T,Y.rectAreaLength=b,Y.hemiLength=_,Y.numDirectionalShadows=L,Y.numPointShadows=U,Y.numSpotShadows=D,Y.numSpotMaps=k,Y.numLightProbes=B,s.version=_A++)}function p(m,v){let g=0,x=0,E=0,M=0,T=0;const b=v.matrixWorldInverse;for(let _=0,L=m.length;_<L;_++){const U=m[_];if(U.isDirectionalLight){const D=s.directional[g];D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(b),g++}else if(U.isSpotLight){const D=s.spot[E];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(b),D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(b),E++}else if(U.isRectAreaLight){const D=s.rectArea[M];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(b),f.identity(),c.copy(U.matrixWorld),c.premultiply(b),f.extractRotation(c),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),M++}else if(U.isPointLight){const D=s.point[x];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(b),x++}else if(U.isHemisphereLight){const D=s.hemi[T];D.direction.setFromMatrixPosition(U.matrixWorld),D.direction.transformDirection(b),T++}}}return{setup:h,setupView:p,state:s}}function U_(a){const e=new yA(a),i=[],s=[];function l(v){m.camera=v,i.length=0,s.length=0}function c(v){i.push(v)}function f(v){s.push(v)}function h(){e.setup(i)}function p(v){e.setupView(i,v)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:f}}function SA(a){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new U_(a),e.set(l,[h])):c>=f.length?(h=new U_(a),f.push(h)):h=f[c],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const bA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EA=`uniform sampler2D shadow_pass;
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
}`;function MA(a,e,i){let s=new Ex;const l=new lt,c=new lt,f=new $t,h=new Mx({depthPacking:Cp}),p=new JE,m={},v=i.maxTextureSize,g={[Na]:bn,[bn]:Na,[di]:di},x=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:bA,fragmentShader:EA}),E=x.clone();E.defines.HORIZONTAL_PASS=1;const M=new Pa;M.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new hi(M,x),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nx;let _=this.type;this.render=function(H,B,Y){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||H.length===0)return;const N=a.getRenderTarget(),C=a.getActiveCubeFace(),V=a.getActiveMipmapLevel(),ue=a.state;ue.setBlending(Wn),ue.buffers.color.setClear(1,1,1,1),ue.buffers.depth.setTest(!0),ue.setScissorTest(!1);const re=_!==Aa&&this.type===Aa,_e=_===Aa&&this.type!==Aa;for(let pe=0,z=H.length;pe<z;pe++){const Q=H[pe],K=Q.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;l.copy(K.mapSize);const be=K.getFrameExtents();if(l.multiply(be),c.copy(K.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/be.x),l.x=c.x*be.x,K.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/be.y),l.y=c.y*be.y,K.mapSize.y=c.y)),K.map===null||re===!0||_e===!0){const P=this.type!==Aa?{minFilter:mi,magFilter:mi}:{};K.map!==null&&K.map.dispose(),K.map=new En(l.x,l.y,P),K.map.texture.name=Q.name+".shadowMap",K.camera.updateProjectionMatrix()}a.setRenderTarget(K.map),a.clear();const we=K.getViewportCount();for(let P=0;P<we;P++){const ne=K.getViewport(P);f.set(c.x*ne.x,c.y*ne.y,c.x*ne.z,c.y*ne.w),ue.viewport(f),K.updateMatrices(Q,P),s=K.getFrustum(),D(B,Y,K.camera,Q,this.type)}K.isPointLightShadow!==!0&&this.type===Aa&&L(K,Y),K.needsUpdate=!1}_=this.type,b.needsUpdate=!1,a.setRenderTarget(N,C,V)};function L(H,B){const Y=e.update(T);x.defines.VSM_SAMPLES!==H.blurSamples&&(x.defines.VSM_SAMPLES=H.blurSamples,E.defines.VSM_SAMPLES=H.blurSamples,x.needsUpdate=!0,E.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new En(l.x,l.y)),x.uniforms.shadow_pass.value=H.map.texture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,a.setRenderTarget(H.mapPass),a.clear(),a.renderBufferDirect(B,null,Y,x,T,null),E.uniforms.shadow_pass.value=H.mapPass.texture,E.uniforms.resolution.value=H.mapSize,E.uniforms.radius.value=H.radius,a.setRenderTarget(H.map),a.clear(),a.renderBufferDirect(B,null,Y,E,T,null)}function U(H,B,Y,N){let C=null;const V=Y.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(V!==void 0)C=V;else if(C=Y.isPointLight===!0?p:h,a.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const ue=C.uuid,re=B.uuid;let _e=m[ue];_e===void 0&&(_e={},m[ue]=_e);let pe=_e[re];pe===void 0&&(pe=C.clone(),_e[re]=pe,B.addEventListener("dispose",k)),C=pe}if(C.visible=B.visible,C.wireframe=B.wireframe,N===Aa?C.side=B.shadowSide!==null?B.shadowSide:B.side:C.side=B.shadowSide!==null?B.shadowSide:g[B.side],C.alphaMap=B.alphaMap,C.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,C.map=B.map,C.clipShadows=B.clipShadows,C.clippingPlanes=B.clippingPlanes,C.clipIntersection=B.clipIntersection,C.displacementMap=B.displacementMap,C.displacementScale=B.displacementScale,C.displacementBias=B.displacementBias,C.wireframeLinewidth=B.wireframeLinewidth,C.linewidth=B.linewidth,Y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ue=a.properties.get(C);ue.light=Y}return C}function D(H,B,Y,N,C){if(H.visible===!1)return;if(H.layers.test(B.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&C===Aa)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,H.matrixWorld);const re=e.update(H),_e=H.material;if(Array.isArray(_e)){const pe=re.groups;for(let z=0,Q=pe.length;z<Q;z++){const K=pe[z],be=_e[K.materialIndex];if(be&&be.visible){const we=U(H,be,N,C);H.onBeforeShadow(a,H,B,Y,re,we,K),a.renderBufferDirect(Y,null,re,we,H,K),H.onAfterShadow(a,H,B,Y,re,we,K)}}}else if(_e.visible){const pe=U(H,_e,N,C);H.onBeforeShadow(a,H,B,Y,re,pe,null),a.renderBufferDirect(Y,null,re,pe,H,null),H.onAfterShadow(a,H,B,Y,re,pe,null)}}const ue=H.children;for(let re=0,_e=ue.length;re<_e;re++)D(ue[re],B,Y,N,C)}function k(H){H.target.removeEventListener("dispose",k);for(const Y in m){const N=m[Y],C=H.target.uuid;C in N&&(N[C].dispose(),delete N[C])}}}const TA={[Su]:gl,[vl]:Eu,[Ks]:_l,[Zr]:bu,[gl]:Su,[Eu]:vl,[_l]:Ks,[bu]:Zr};function wA(a,e){function i(){let X=!1;const De=new $t;let ce=null;const xe=new $t(0,0,0,0);return{setMask:function(Re){ce!==Re&&!X&&(a.colorMask(Re,Re,Re,Re),ce=Re)},setLocked:function(Re){X=Re},setClear:function(Re,Ue,nt,Qt,pn){pn===!0&&(Re*=Qt,Ue*=Qt,nt*=Qt),De.set(Re,Ue,nt,Qt),xe.equals(De)===!1&&(a.clearColor(Re,Ue,nt,Qt),xe.copy(De))},reset:function(){X=!1,ce=null,xe.set(-1,0,0,0)}}}function s(){let X=!1,De=!1,ce=null,xe=null,Re=null;return{setReversed:function(Ue){if(De!==Ue){const nt=e.get("EXT_clip_control");Ue?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT),De=Ue;const Qt=Re;Re=null,this.setClear(Qt)}},getReversed:function(){return De},setTest:function(Ue){Ue?ye(a.DEPTH_TEST):ze(a.DEPTH_TEST)},setMask:function(Ue){ce!==Ue&&!X&&(a.depthMask(Ue),ce=Ue)},setFunc:function(Ue){if(De&&(Ue=TA[Ue]),xe!==Ue){switch(Ue){case Su:a.depthFunc(a.NEVER);break;case gl:a.depthFunc(a.ALWAYS);break;case vl:a.depthFunc(a.LESS);break;case Zr:a.depthFunc(a.LEQUAL);break;case Ks:a.depthFunc(a.EQUAL);break;case bu:a.depthFunc(a.GEQUAL);break;case Eu:a.depthFunc(a.GREATER);break;case _l:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}xe=Ue}},setLocked:function(Ue){X=Ue},setClear:function(Ue){Re!==Ue&&(De&&(Ue=1-Ue),a.clearDepth(Ue),Re=Ue)},reset:function(){X=!1,ce=null,xe=null,Re=null,De=!1}}}function l(){let X=!1,De=null,ce=null,xe=null,Re=null,Ue=null,nt=null,Qt=null,pn=null;return{setTest:function(wt){X||(wt?ye(a.STENCIL_TEST):ze(a.STENCIL_TEST))},setMask:function(wt){De!==wt&&!X&&(a.stencilMask(wt),De=wt)},setFunc:function(wt,Mn,Ui){(ce!==wt||xe!==Mn||Re!==Ui)&&(a.stencilFunc(wt,Mn,Ui),ce=wt,xe=Mn,Re=Ui)},setOp:function(wt,Mn,Ui){(Ue!==wt||nt!==Mn||Qt!==Ui)&&(a.stencilOp(wt,Mn,Ui),Ue=wt,nt=Mn,Qt=Ui)},setLocked:function(wt){X=wt},setClear:function(wt){pn!==wt&&(a.clearStencil(wt),pn=wt)},reset:function(){X=!1,De=null,ce=null,xe=null,Re=null,Ue=null,nt=null,Qt=null,pn=null}}}const c=new i,f=new s,h=new l,p=new WeakMap,m=new WeakMap;let v={},g={},x=new WeakMap,E=[],M=null,T=!1,b=null,_=null,L=null,U=null,D=null,k=null,H=null,B=new Nt(0,0,0),Y=0,N=!1,C=null,V=null,ue=null,re=null,_e=null;const pe=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Q=0;const K=a.getParameter(a.VERSION);K.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(K)[1]),z=Q>=1):K.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),z=Q>=2);let be=null,we={};const P=a.getParameter(a.SCISSOR_BOX),ne=a.getParameter(a.VIEWPORT),Se=new $t().fromArray(P),Z=new $t().fromArray(ne);function he(X,De,ce,xe){const Re=new Uint8Array(4),Ue=a.createTexture();a.bindTexture(X,Ue),a.texParameteri(X,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(X,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let nt=0;nt<ce;nt++)X===a.TEXTURE_3D||X===a.TEXTURE_2D_ARRAY?a.texImage3D(De,0,a.RGBA,1,1,xe,0,a.RGBA,a.UNSIGNED_BYTE,Re):a.texImage2D(De+nt,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Re);return Ue}const Me={};Me[a.TEXTURE_2D]=he(a.TEXTURE_2D,a.TEXTURE_2D,1),Me[a.TEXTURE_CUBE_MAP]=he(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[a.TEXTURE_2D_ARRAY]=he(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Me[a.TEXTURE_3D]=he(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),ye(a.DEPTH_TEST),f.setFunc(Zr),ht(!1),vt(z0),ye(a.CULL_FACE),F(Wn);function ye(X){v[X]!==!0&&(a.enable(X),v[X]=!0)}function ze(X){v[X]!==!1&&(a.disable(X),v[X]=!1)}function Ye(X,De){return g[X]!==De?(a.bindFramebuffer(X,De),g[X]=De,X===a.DRAW_FRAMEBUFFER&&(g[a.FRAMEBUFFER]=De),X===a.FRAMEBUFFER&&(g[a.DRAW_FRAMEBUFFER]=De),!0):!1}function Ke(X,De){let ce=E,xe=!1;if(X){ce=x.get(De),ce===void 0&&(ce=[],x.set(De,ce));const Re=X.textures;if(ce.length!==Re.length||ce[0]!==a.COLOR_ATTACHMENT0){for(let Ue=0,nt=Re.length;Ue<nt;Ue++)ce[Ue]=a.COLOR_ATTACHMENT0+Ue;ce.length=Re.length,xe=!0}}else ce[0]!==a.BACK&&(ce[0]=a.BACK,xe=!0);xe&&a.drawBuffers(ce)}function qt(X){return M!==X?(a.useProgram(X),M=X,!0):!1}const Xt={[Xr]:a.FUNC_ADD,[Ib]:a.FUNC_SUBTRACT,[Fb]:a.FUNC_REVERSE_SUBTRACT};Xt[Hb]=a.MIN,Xt[Gb]=a.MAX;const dt={[Vb]:a.ZERO,[kb]:a.ONE,[jb]:a.SRC_COLOR,[Lh]:a.SRC_ALPHA,[Kb]:a.SRC_ALPHA_SATURATE,[Yb]:a.DST_COLOR,[Wb]:a.DST_ALPHA,[Xb]:a.ONE_MINUS_SRC_COLOR,[Oh]:a.ONE_MINUS_SRC_ALPHA,[Zb]:a.ONE_MINUS_DST_COLOR,[qb]:a.ONE_MINUS_DST_ALPHA,[Qb]:a.CONSTANT_COLOR,[Jb]:a.ONE_MINUS_CONSTANT_COLOR,[$b]:a.CONSTANT_ALPHA,[eE]:a.ONE_MINUS_CONSTANT_ALPHA};function F(X,De,ce,xe,Re,Ue,nt,Qt,pn,wt){if(X===Wn){T===!0&&(ze(a.BLEND),T=!1);return}if(T===!1&&(ye(a.BLEND),T=!0),X!==zb){if(X!==b||wt!==N){if((_!==Xr||D!==Xr)&&(a.blendEquation(a.FUNC_ADD),_=Xr,D=Xr),wt)switch(X){case Ys:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case I0:a.blendFunc(a.ONE,a.ONE);break;case F0:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case H0:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Ys:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case I0:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case F0:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case H0:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}L=null,U=null,k=null,H=null,B.set(0,0,0),Y=0,b=X,N=wt}return}Re=Re||De,Ue=Ue||ce,nt=nt||xe,(De!==_||Re!==D)&&(a.blendEquationSeparate(Xt[De],Xt[Re]),_=De,D=Re),(ce!==L||xe!==U||Ue!==k||nt!==H)&&(a.blendFuncSeparate(dt[ce],dt[xe],dt[Ue],dt[nt]),L=ce,U=xe,k=Ue,H=nt),(Qt.equals(B)===!1||pn!==Y)&&(a.blendColor(Qt.r,Qt.g,Qt.b,pn),B.copy(Qt),Y=pn),b=X,N=!1}function On(X,De){X.side===di?ze(a.CULL_FACE):ye(a.CULL_FACE);let ce=X.side===bn;De&&(ce=!ce),ht(ce),X.blending===Ys&&X.transparent===!1?F(Wn):F(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const xe=X.stencilWrite;h.setTest(xe),xe&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Bt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ye(a.SAMPLE_ALPHA_TO_COVERAGE):ze(a.SAMPLE_ALPHA_TO_COVERAGE)}function ht(X){C!==X&&(X?a.frontFace(a.CW):a.frontFace(a.CCW),C=X)}function vt(X){X!==Ob?(ye(a.CULL_FACE),X!==V&&(X===z0?a.cullFace(a.BACK):X===Pb?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):ze(a.CULL_FACE),V=X}function je(X){X!==ue&&(z&&a.lineWidth(X),ue=X)}function Bt(X,De,ce){X?(ye(a.POLYGON_OFFSET_FILL),(re!==De||_e!==ce)&&(a.polygonOffset(De,ce),re=De,_e=ce)):ze(a.POLYGON_OFFSET_FILL)}function ke(X){X?ye(a.SCISSOR_TEST):ze(a.SCISSOR_TEST)}function O(X){X===void 0&&(X=a.TEXTURE0+pe-1),be!==X&&(a.activeTexture(X),be=X)}function A(X,De,ce){ce===void 0&&(be===null?ce=a.TEXTURE0+pe-1:ce=be);let xe=we[ce];xe===void 0&&(xe={type:void 0,texture:void 0},we[ce]=xe),(xe.type!==X||xe.texture!==De)&&(be!==ce&&(a.activeTexture(ce),be=ce),a.bindTexture(X,De||Me[X]),xe.type=X,xe.texture=De)}function te(){const X=we[be];X!==void 0&&X.type!==void 0&&(a.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function de(){try{a.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ee(){try{a.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ge(){try{a.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ge(){try{a.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ce(){try{a.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Qe(){try{a.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $e(){try{a.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ae(){try{a.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ie(){try{a.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ze(){try{a.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ve(X){Se.equals(X)===!1&&(a.scissor(X.x,X.y,X.z,X.w),Se.copy(X))}function Pe(X){Z.equals(X)===!1&&(a.viewport(X.x,X.y,X.z,X.w),Z.copy(X))}function tt(X,De){let ce=m.get(De);ce===void 0&&(ce=new WeakMap,m.set(De,ce));let xe=ce.get(X);xe===void 0&&(xe=a.getUniformBlockIndex(De,X.name),ce.set(X,xe))}function st(X,De){const xe=m.get(De).get(X);p.get(De)!==xe&&(a.uniformBlockBinding(De,xe,X.__bindingPointIndex),p.set(De,xe))}function Ft(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),f.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),v={},be=null,we={},g={},x=new WeakMap,E=[],M=null,T=!1,b=null,_=null,L=null,U=null,D=null,k=null,H=null,B=new Nt(0,0,0),Y=0,N=!1,C=null,V=null,ue=null,re=null,_e=null,Se.set(0,0,a.canvas.width,a.canvas.height),Z.set(0,0,a.canvas.width,a.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:ye,disable:ze,bindFramebuffer:Ye,drawBuffers:Ke,useProgram:qt,setBlending:F,setMaterial:On,setFlipSided:ht,setCullFace:vt,setLineWidth:je,setPolygonOffset:Bt,setScissorTest:ke,activeTexture:O,bindTexture:A,unbindTexture:te,compressedTexImage2D:de,compressedTexImage3D:Ee,texImage2D:Ie,texImage3D:Ze,updateUBOMapping:tt,uniformBlockBinding:st,texStorage2D:$e,texStorage3D:Ae,texSubImage2D:ge,texSubImage3D:Ge,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Qe,scissor:Ve,viewport:Pe,reset:Ft}}function AA(a,e,i,s,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new lt,v=new WeakMap;let g;const x=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(O,A){return E?new OffscreenCanvas(O,A):wu("canvas")}function T(O,A,te){let de=1;const Ee=ke(O);if((Ee.width>te||Ee.height>te)&&(de=te/Math.max(Ee.width,Ee.height)),de<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ge=Math.floor(de*Ee.width),Ge=Math.floor(de*Ee.height);g===void 0&&(g=M(ge,Ge));const Ce=A?M(ge,Ge):g;return Ce.width=ge,Ce.height=Ge,Ce.getContext("2d").drawImage(O,0,0,ge,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+ge+"x"+Ge+")."),Ce}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),O;return O}function b(O){return O.generateMipmaps}function _(O){a.generateMipmap(O)}function L(O){return O.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?a.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function U(O,A,te,de,Ee=!1){if(O!==null){if(a[O]!==void 0)return a[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ge=A;if(A===a.RED&&(te===a.FLOAT&&(ge=a.R32F),te===a.HALF_FLOAT&&(ge=a.R16F),te===a.UNSIGNED_BYTE&&(ge=a.R8)),A===a.RED_INTEGER&&(te===a.UNSIGNED_BYTE&&(ge=a.R8UI),te===a.UNSIGNED_SHORT&&(ge=a.R16UI),te===a.UNSIGNED_INT&&(ge=a.R32UI),te===a.BYTE&&(ge=a.R8I),te===a.SHORT&&(ge=a.R16I),te===a.INT&&(ge=a.R32I)),A===a.RG&&(te===a.FLOAT&&(ge=a.RG32F),te===a.HALF_FLOAT&&(ge=a.RG16F),te===a.UNSIGNED_BYTE&&(ge=a.RG8)),A===a.RG_INTEGER&&(te===a.UNSIGNED_BYTE&&(ge=a.RG8UI),te===a.UNSIGNED_SHORT&&(ge=a.RG16UI),te===a.UNSIGNED_INT&&(ge=a.RG32UI),te===a.BYTE&&(ge=a.RG8I),te===a.SHORT&&(ge=a.RG16I),te===a.INT&&(ge=a.RG32I)),A===a.RGB_INTEGER&&(te===a.UNSIGNED_BYTE&&(ge=a.RGB8UI),te===a.UNSIGNED_SHORT&&(ge=a.RGB16UI),te===a.UNSIGNED_INT&&(ge=a.RGB32UI),te===a.BYTE&&(ge=a.RGB8I),te===a.SHORT&&(ge=a.RGB16I),te===a.INT&&(ge=a.RGB32I)),A===a.RGBA_INTEGER&&(te===a.UNSIGNED_BYTE&&(ge=a.RGBA8UI),te===a.UNSIGNED_SHORT&&(ge=a.RGBA16UI),te===a.UNSIGNED_INT&&(ge=a.RGBA32UI),te===a.BYTE&&(ge=a.RGBA8I),te===a.SHORT&&(ge=a.RGBA16I),te===a.INT&&(ge=a.RGBA32I)),A===a.RGB&&te===a.UNSIGNED_INT_5_9_9_9_REV&&(ge=a.RGB9_E5),A===a.RGBA){const Ge=Ee?Mu:Dt.getTransfer(de);te===a.FLOAT&&(ge=a.RGBA32F),te===a.HALF_FLOAT&&(ge=a.RGBA16F),te===a.UNSIGNED_BYTE&&(ge=Ge===jt?a.SRGB8_ALPHA8:a.RGBA8),te===a.UNSIGNED_SHORT_4_4_4_4&&(ge=a.RGBA4),te===a.UNSIGNED_SHORT_5_5_5_1&&(ge=a.RGB5_A1)}return(ge===a.R16F||ge===a.R32F||ge===a.RG16F||ge===a.RG32F||ge===a.RGBA16F||ge===a.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function D(O,A){let te;return O?A===null||A===Kr||A===$s?te=a.DEPTH24_STENCIL8:A===Qi?te=a.DEPTH32F_STENCIL8:A===xl&&(te=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Kr||A===$s?te=a.DEPTH_COMPONENT24:A===Qi?te=a.DEPTH_COMPONENT32F:A===xl&&(te=a.DEPTH_COMPONENT16),te}function k(O,A){return b(O)===!0||O.isFramebufferTexture&&O.minFilter!==mi&&O.minFilter!==ni?Math.log2(Math.max(A.width,A.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?A.mipmaps.length:1}function H(O){const A=O.target;A.removeEventListener("dispose",H),Y(A),A.isVideoTexture&&v.delete(A)}function B(O){const A=O.target;A.removeEventListener("dispose",B),C(A)}function Y(O){const A=s.get(O);if(A.__webglInit===void 0)return;const te=O.source,de=x.get(te);if(de){const Ee=de[A.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&N(O),Object.keys(de).length===0&&x.delete(te)}s.remove(O)}function N(O){const A=s.get(O);a.deleteTexture(A.__webglTexture);const te=O.source,de=x.get(te);delete de[A.__cacheKey],f.memory.textures--}function C(O){const A=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(A.__webglFramebuffer[de]))for(let Ee=0;Ee<A.__webglFramebuffer[de].length;Ee++)a.deleteFramebuffer(A.__webglFramebuffer[de][Ee]);else a.deleteFramebuffer(A.__webglFramebuffer[de]);A.__webglDepthbuffer&&a.deleteRenderbuffer(A.__webglDepthbuffer[de])}else{if(Array.isArray(A.__webglFramebuffer))for(let de=0;de<A.__webglFramebuffer.length;de++)a.deleteFramebuffer(A.__webglFramebuffer[de]);else a.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&a.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&a.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let de=0;de<A.__webglColorRenderbuffer.length;de++)A.__webglColorRenderbuffer[de]&&a.deleteRenderbuffer(A.__webglColorRenderbuffer[de]);A.__webglDepthRenderbuffer&&a.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const te=O.textures;for(let de=0,Ee=te.length;de<Ee;de++){const ge=s.get(te[de]);ge.__webglTexture&&(a.deleteTexture(ge.__webglTexture),f.memory.textures--),s.remove(te[de])}s.remove(O)}let V=0;function ue(){V=0}function re(){const O=V;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),V+=1,O}function _e(O){const A=[];return A.push(O.wrapS),A.push(O.wrapT),A.push(O.wrapR||0),A.push(O.magFilter),A.push(O.minFilter),A.push(O.anisotropy),A.push(O.internalFormat),A.push(O.format),A.push(O.type),A.push(O.generateMipmaps),A.push(O.premultiplyAlpha),A.push(O.flipY),A.push(O.unpackAlignment),A.push(O.colorSpace),A.join()}function pe(O,A){const te=s.get(O);if(O.isVideoTexture&&je(O),O.isRenderTargetTexture===!1&&O.version>0&&te.__version!==O.version){const de=O.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(te,O,A);return}}i.bindTexture(a.TEXTURE_2D,te.__webglTexture,a.TEXTURE0+A)}function z(O,A){const te=s.get(O);if(O.version>0&&te.__version!==O.version){Z(te,O,A);return}i.bindTexture(a.TEXTURE_2D_ARRAY,te.__webglTexture,a.TEXTURE0+A)}function Q(O,A){const te=s.get(O);if(O.version>0&&te.__version!==O.version){Z(te,O,A);return}i.bindTexture(a.TEXTURE_3D,te.__webglTexture,a.TEXTURE0+A)}function K(O,A){const te=s.get(O);if(O.version>0&&te.__version!==O.version){he(te,O,A);return}i.bindTexture(a.TEXTURE_CUBE_MAP,te.__webglTexture,a.TEXTURE0+A)}const be={[zh]:a.REPEAT,[qr]:a.CLAMP_TO_EDGE,[Ih]:a.MIRRORED_REPEAT},we={[mi]:a.NEAREST,[uE]:a.NEAREST_MIPMAP_NEAREST,[Vc]:a.NEAREST_MIPMAP_LINEAR,[ni]:a.LINEAR,[Qd]:a.LINEAR_MIPMAP_NEAREST,[Yr]:a.LINEAR_MIPMAP_LINEAR},P={[hE]:a.NEVER,[xE]:a.ALWAYS,[pE]:a.LESS,[hx]:a.LEQUAL,[mE]:a.EQUAL,[_E]:a.GEQUAL,[gE]:a.GREATER,[vE]:a.NOTEQUAL};function ne(O,A){if(A.type===Qi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===ni||A.magFilter===Qd||A.magFilter===Vc||A.magFilter===Yr||A.minFilter===ni||A.minFilter===Qd||A.minFilter===Vc||A.minFilter===Yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(O,a.TEXTURE_WRAP_S,be[A.wrapS]),a.texParameteri(O,a.TEXTURE_WRAP_T,be[A.wrapT]),(O===a.TEXTURE_3D||O===a.TEXTURE_2D_ARRAY)&&a.texParameteri(O,a.TEXTURE_WRAP_R,be[A.wrapR]),a.texParameteri(O,a.TEXTURE_MAG_FILTER,we[A.magFilter]),a.texParameteri(O,a.TEXTURE_MIN_FILTER,we[A.minFilter]),A.compareFunction&&(a.texParameteri(O,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(O,a.TEXTURE_COMPARE_FUNC,P[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===mi||A.minFilter!==Vc&&A.minFilter!==Yr||A.type===Qi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||s.get(A).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");a.texParameterf(O,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy}}}function Se(O,A){let te=!1;O.__webglInit===void 0&&(O.__webglInit=!0,A.addEventListener("dispose",H));const de=A.source;let Ee=x.get(de);Ee===void 0&&(Ee={},x.set(de,Ee));const ge=_e(A);if(ge!==O.__cacheKey){Ee[ge]===void 0&&(Ee[ge]={texture:a.createTexture(),usedTimes:0},f.memory.textures++,te=!0),Ee[ge].usedTimes++;const Ge=Ee[O.__cacheKey];Ge!==void 0&&(Ee[O.__cacheKey].usedTimes--,Ge.usedTimes===0&&N(A)),O.__cacheKey=ge,O.__webglTexture=Ee[ge].texture}return te}function Z(O,A,te){let de=a.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(de=a.TEXTURE_2D_ARRAY),A.isData3DTexture&&(de=a.TEXTURE_3D);const Ee=Se(O,A),ge=A.source;i.bindTexture(de,O.__webglTexture,a.TEXTURE0+te);const Ge=s.get(ge);if(ge.version!==Ge.__version||Ee===!0){i.activeTexture(a.TEXTURE0+te);const Ce=Dt.getPrimaries(Dt.workingColorSpace),Qe=A.colorSpace===Ki?null:Dt.getPrimaries(A.colorSpace),$e=A.colorSpace===Ki||Ce===Qe?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,A.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,A.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let Ae=T(A.image,!1,l.maxTextureSize);Ae=Bt(A,Ae);const Ie=c.convert(A.format,A.colorSpace),Ze=c.convert(A.type);let Ve=U(A.internalFormat,Ie,Ze,A.colorSpace,A.isVideoTexture);ne(de,A);let Pe;const tt=A.mipmaps,st=A.isVideoTexture!==!0,Ft=Ge.__version===void 0||Ee===!0,X=ge.dataReady,De=k(A,Ae);if(A.isDepthTexture)Ve=D(A.format===eo,A.type),Ft&&(st?i.texStorage2D(a.TEXTURE_2D,1,Ve,Ae.width,Ae.height):i.texImage2D(a.TEXTURE_2D,0,Ve,Ae.width,Ae.height,0,Ie,Ze,null));else if(A.isDataTexture)if(tt.length>0){st&&Ft&&i.texStorage2D(a.TEXTURE_2D,De,Ve,tt[0].width,tt[0].height);for(let ce=0,xe=tt.length;ce<xe;ce++)Pe=tt[ce],st?X&&i.texSubImage2D(a.TEXTURE_2D,ce,0,0,Pe.width,Pe.height,Ie,Ze,Pe.data):i.texImage2D(a.TEXTURE_2D,ce,Ve,Pe.width,Pe.height,0,Ie,Ze,Pe.data);A.generateMipmaps=!1}else st?(Ft&&i.texStorage2D(a.TEXTURE_2D,De,Ve,Ae.width,Ae.height),X&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,Ae.width,Ae.height,Ie,Ze,Ae.data)):i.texImage2D(a.TEXTURE_2D,0,Ve,Ae.width,Ae.height,0,Ie,Ze,Ae.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){st&&Ft&&i.texStorage3D(a.TEXTURE_2D_ARRAY,De,Ve,tt[0].width,tt[0].height,Ae.depth);for(let ce=0,xe=tt.length;ce<xe;ce++)if(Pe=tt[ce],A.format!==Gi)if(Ie!==null)if(st){if(X)if(A.layerUpdates.size>0){const Re=o_(Pe.width,Pe.height,A.format,A.type);for(const Ue of A.layerUpdates){const nt=Pe.data.subarray(Ue*Re/Pe.data.BYTES_PER_ELEMENT,(Ue+1)*Re/Pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ce,0,0,Ue,Pe.width,Pe.height,1,Ie,nt)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ce,0,0,0,Pe.width,Pe.height,Ae.depth,Ie,Pe.data)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ce,Ve,Pe.width,Pe.height,Ae.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?X&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,ce,0,0,0,Pe.width,Pe.height,Ae.depth,Ie,Ze,Pe.data):i.texImage3D(a.TEXTURE_2D_ARRAY,ce,Ve,Pe.width,Pe.height,Ae.depth,0,Ie,Ze,Pe.data)}else{st&&Ft&&i.texStorage2D(a.TEXTURE_2D,De,Ve,tt[0].width,tt[0].height);for(let ce=0,xe=tt.length;ce<xe;ce++)Pe=tt[ce],A.format!==Gi?Ie!==null?st?X&&i.compressedTexSubImage2D(a.TEXTURE_2D,ce,0,0,Pe.width,Pe.height,Ie,Pe.data):i.compressedTexImage2D(a.TEXTURE_2D,ce,Ve,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?X&&i.texSubImage2D(a.TEXTURE_2D,ce,0,0,Pe.width,Pe.height,Ie,Ze,Pe.data):i.texImage2D(a.TEXTURE_2D,ce,Ve,Pe.width,Pe.height,0,Ie,Ze,Pe.data)}else if(A.isDataArrayTexture)if(st){if(Ft&&i.texStorage3D(a.TEXTURE_2D_ARRAY,De,Ve,Ae.width,Ae.height,Ae.depth),X)if(A.layerUpdates.size>0){const ce=o_(Ae.width,Ae.height,A.format,A.type);for(const xe of A.layerUpdates){const Re=Ae.data.subarray(xe*ce/Ae.data.BYTES_PER_ELEMENT,(xe+1)*ce/Ae.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,xe,Ae.width,Ae.height,1,Ie,Ze,Re)}A.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ie,Ze,Ae.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,Ve,Ae.width,Ae.height,Ae.depth,0,Ie,Ze,Ae.data);else if(A.isData3DTexture)st?(Ft&&i.texStorage3D(a.TEXTURE_3D,De,Ve,Ae.width,Ae.height,Ae.depth),X&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ie,Ze,Ae.data)):i.texImage3D(a.TEXTURE_3D,0,Ve,Ae.width,Ae.height,Ae.depth,0,Ie,Ze,Ae.data);else if(A.isFramebufferTexture){if(Ft)if(st)i.texStorage2D(a.TEXTURE_2D,De,Ve,Ae.width,Ae.height);else{let ce=Ae.width,xe=Ae.height;for(let Re=0;Re<De;Re++)i.texImage2D(a.TEXTURE_2D,Re,Ve,ce,xe,0,Ie,Ze,null),ce>>=1,xe>>=1}}else if(tt.length>0){if(st&&Ft){const ce=ke(tt[0]);i.texStorage2D(a.TEXTURE_2D,De,Ve,ce.width,ce.height)}for(let ce=0,xe=tt.length;ce<xe;ce++)Pe=tt[ce],st?X&&i.texSubImage2D(a.TEXTURE_2D,ce,0,0,Ie,Ze,Pe):i.texImage2D(a.TEXTURE_2D,ce,Ve,Ie,Ze,Pe);A.generateMipmaps=!1}else if(st){if(Ft){const ce=ke(Ae);i.texStorage2D(a.TEXTURE_2D,De,Ve,ce.width,ce.height)}X&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,Ie,Ze,Ae)}else i.texImage2D(a.TEXTURE_2D,0,Ve,Ie,Ze,Ae);b(A)&&_(de),Ge.__version=ge.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function he(O,A,te){if(A.image.length!==6)return;const de=Se(O,A),Ee=A.source;i.bindTexture(a.TEXTURE_CUBE_MAP,O.__webglTexture,a.TEXTURE0+te);const ge=s.get(Ee);if(Ee.version!==ge.__version||de===!0){i.activeTexture(a.TEXTURE0+te);const Ge=Dt.getPrimaries(Dt.workingColorSpace),Ce=A.colorSpace===Ki?null:Dt.getPrimaries(A.colorSpace),Qe=A.colorSpace===Ki||Ge===Ce?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,A.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,A.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);const $e=A.isCompressedTexture||A.image[0].isCompressedTexture,Ae=A.image[0]&&A.image[0].isDataTexture,Ie=[];for(let xe=0;xe<6;xe++)!$e&&!Ae?Ie[xe]=T(A.image[xe],!0,l.maxCubemapSize):Ie[xe]=Ae?A.image[xe].image:A.image[xe],Ie[xe]=Bt(A,Ie[xe]);const Ze=Ie[0],Ve=c.convert(A.format,A.colorSpace),Pe=c.convert(A.type),tt=U(A.internalFormat,Ve,Pe,A.colorSpace),st=A.isVideoTexture!==!0,Ft=ge.__version===void 0||de===!0,X=Ee.dataReady;let De=k(A,Ze);ne(a.TEXTURE_CUBE_MAP,A);let ce;if($e){st&&Ft&&i.texStorage2D(a.TEXTURE_CUBE_MAP,De,tt,Ze.width,Ze.height);for(let xe=0;xe<6;xe++){ce=Ie[xe].mipmaps;for(let Re=0;Re<ce.length;Re++){const Ue=ce[Re];A.format!==Gi?Ve!==null?st?X&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Re,0,0,Ue.width,Ue.height,Ve,Ue.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Re,tt,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?X&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Re,0,0,Ue.width,Ue.height,Ve,Pe,Ue.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Re,tt,Ue.width,Ue.height,0,Ve,Pe,Ue.data)}}}else{if(ce=A.mipmaps,st&&Ft){ce.length>0&&De++;const xe=ke(Ie[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,De,tt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Ae){st?X&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ie[xe].width,Ie[xe].height,Ve,Pe,Ie[xe].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,tt,Ie[xe].width,Ie[xe].height,0,Ve,Pe,Ie[xe].data);for(let Re=0;Re<ce.length;Re++){const nt=ce[Re].image[xe].image;st?X&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Re+1,0,0,nt.width,nt.height,Ve,Pe,nt.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Re+1,tt,nt.width,nt.height,0,Ve,Pe,nt.data)}}else{st?X&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ve,Pe,Ie[xe]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,tt,Ve,Pe,Ie[xe]);for(let Re=0;Re<ce.length;Re++){const Ue=ce[Re];st?X&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Re+1,0,0,Ve,Pe,Ue.image[xe]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Re+1,tt,Ve,Pe,Ue.image[xe])}}}b(A)&&_(a.TEXTURE_CUBE_MAP),ge.__version=Ee.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function Me(O,A,te,de,Ee,ge){const Ge=c.convert(te.format,te.colorSpace),Ce=c.convert(te.type),Qe=U(te.internalFormat,Ge,Ce,te.colorSpace),$e=s.get(A),Ae=s.get(te);if(Ae.__renderTarget=A,!$e.__hasExternalTextures){const Ie=Math.max(1,A.width>>ge),Ze=Math.max(1,A.height>>ge);Ee===a.TEXTURE_3D||Ee===a.TEXTURE_2D_ARRAY?i.texImage3D(Ee,ge,Qe,Ie,Ze,A.depth,0,Ge,Ce,null):i.texImage2D(Ee,ge,Qe,Ie,Ze,0,Ge,Ce,null)}i.bindFramebuffer(a.FRAMEBUFFER,O),vt(A)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,de,Ee,Ae.__webglTexture,0,ht(A)):(Ee===a.TEXTURE_2D||Ee>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,de,Ee,Ae.__webglTexture,ge),i.bindFramebuffer(a.FRAMEBUFFER,null)}function ye(O,A,te){if(a.bindRenderbuffer(a.RENDERBUFFER,O),A.depthBuffer){const de=A.depthTexture,Ee=de&&de.isDepthTexture?de.type:null,ge=D(A.stencilBuffer,Ee),Ge=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ce=ht(A);vt(A)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ce,ge,A.width,A.height):te?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ce,ge,A.width,A.height):a.renderbufferStorage(a.RENDERBUFFER,ge,A.width,A.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ge,a.RENDERBUFFER,O)}else{const de=A.textures;for(let Ee=0;Ee<de.length;Ee++){const ge=de[Ee],Ge=c.convert(ge.format,ge.colorSpace),Ce=c.convert(ge.type),Qe=U(ge.internalFormat,Ge,Ce,ge.colorSpace),$e=ht(A);te&&vt(A)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,$e,Qe,A.width,A.height):vt(A)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,$e,Qe,A.width,A.height):a.renderbufferStorage(a.RENDERBUFFER,Qe,A.width,A.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ze(O,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(a.FRAMEBUFFER,O),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=s.get(A.depthTexture);de.__renderTarget=A,(!de.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),pe(A.depthTexture,0);const Ee=de.__webglTexture,ge=ht(A);if(A.depthTexture.format===yl)vt(A)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Ee,0,ge):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Ee,0);else if(A.depthTexture.format===eo)vt(A)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Ee,0,ge):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Ee,0);else throw new Error("Unknown depthTexture format")}function Ye(O){const A=s.get(O),te=O.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==O.depthTexture){const de=O.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),de){const Ee=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,de.removeEventListener("dispose",Ee)};de.addEventListener("dispose",Ee),A.__depthDisposeCallback=Ee}A.__boundDepthTexture=de}if(O.depthTexture&&!A.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");const de=O.texture.mipmaps;de&&de.length>0?ze(A.__webglFramebuffer[0],O):ze(A.__webglFramebuffer,O)}else if(te){A.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(i.bindFramebuffer(a.FRAMEBUFFER,A.__webglFramebuffer[de]),A.__webglDepthbuffer[de]===void 0)A.__webglDepthbuffer[de]=a.createRenderbuffer(),ye(A.__webglDepthbuffer[de],O,!1);else{const Ee=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ge=A.__webglDepthbuffer[de];a.bindRenderbuffer(a.RENDERBUFFER,ge),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ee,a.RENDERBUFFER,ge)}}else{const de=O.texture.mipmaps;if(de&&de.length>0?i.bindFramebuffer(a.FRAMEBUFFER,A.__webglFramebuffer[0]):i.bindFramebuffer(a.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=a.createRenderbuffer(),ye(A.__webglDepthbuffer,O,!1);else{const Ee=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ge=A.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,ge),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ee,a.RENDERBUFFER,ge)}}i.bindFramebuffer(a.FRAMEBUFFER,null)}function Ke(O,A,te){const de=s.get(O);A!==void 0&&Me(de.__webglFramebuffer,O,O.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),te!==void 0&&Ye(O)}function qt(O){const A=O.texture,te=s.get(O),de=s.get(A);O.addEventListener("dispose",B);const Ee=O.textures,ge=O.isWebGLCubeRenderTarget===!0,Ge=Ee.length>1;if(Ge||(de.__webglTexture===void 0&&(de.__webglTexture=a.createTexture()),de.__version=A.version,f.memory.textures++),ge){te.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(A.mipmaps&&A.mipmaps.length>0){te.__webglFramebuffer[Ce]=[];for(let Qe=0;Qe<A.mipmaps.length;Qe++)te.__webglFramebuffer[Ce][Qe]=a.createFramebuffer()}else te.__webglFramebuffer[Ce]=a.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){te.__webglFramebuffer=[];for(let Ce=0;Ce<A.mipmaps.length;Ce++)te.__webglFramebuffer[Ce]=a.createFramebuffer()}else te.__webglFramebuffer=a.createFramebuffer();if(Ge)for(let Ce=0,Qe=Ee.length;Ce<Qe;Ce++){const $e=s.get(Ee[Ce]);$e.__webglTexture===void 0&&($e.__webglTexture=a.createTexture(),f.memory.textures++)}if(O.samples>0&&vt(O)===!1){te.__webglMultisampledFramebuffer=a.createFramebuffer(),te.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Ce=0;Ce<Ee.length;Ce++){const Qe=Ee[Ce];te.__webglColorRenderbuffer[Ce]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,te.__webglColorRenderbuffer[Ce]);const $e=c.convert(Qe.format,Qe.colorSpace),Ae=c.convert(Qe.type),Ie=U(Qe.internalFormat,$e,Ae,Qe.colorSpace,O.isXRRenderTarget===!0),Ze=ht(O);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ze,Ie,O.width,O.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.RENDERBUFFER,te.__webglColorRenderbuffer[Ce])}a.bindRenderbuffer(a.RENDERBUFFER,null),O.depthBuffer&&(te.__webglDepthRenderbuffer=a.createRenderbuffer(),ye(te.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ge){i.bindTexture(a.TEXTURE_CUBE_MAP,de.__webglTexture),ne(a.TEXTURE_CUBE_MAP,A);for(let Ce=0;Ce<6;Ce++)if(A.mipmaps&&A.mipmaps.length>0)for(let Qe=0;Qe<A.mipmaps.length;Qe++)Me(te.__webglFramebuffer[Ce][Qe],O,A,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Qe);else Me(te.__webglFramebuffer[Ce],O,A,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);b(A)&&_(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ge){for(let Ce=0,Qe=Ee.length;Ce<Qe;Ce++){const $e=Ee[Ce],Ae=s.get($e);i.bindTexture(a.TEXTURE_2D,Ae.__webglTexture),ne(a.TEXTURE_2D,$e),Me(te.__webglFramebuffer,O,$e,a.COLOR_ATTACHMENT0+Ce,a.TEXTURE_2D,0),b($e)&&_(a.TEXTURE_2D)}i.unbindTexture()}else{let Ce=a.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ce=O.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Ce,de.__webglTexture),ne(Ce,A),A.mipmaps&&A.mipmaps.length>0)for(let Qe=0;Qe<A.mipmaps.length;Qe++)Me(te.__webglFramebuffer[Qe],O,A,a.COLOR_ATTACHMENT0,Ce,Qe);else Me(te.__webglFramebuffer,O,A,a.COLOR_ATTACHMENT0,Ce,0);b(A)&&_(Ce),i.unbindTexture()}O.depthBuffer&&Ye(O)}function Xt(O){const A=O.textures;for(let te=0,de=A.length;te<de;te++){const Ee=A[te];if(b(Ee)){const ge=L(O),Ge=s.get(Ee).__webglTexture;i.bindTexture(ge,Ge),_(ge),i.unbindTexture()}}}const dt=[],F=[];function On(O){if(O.samples>0){if(vt(O)===!1){const A=O.textures,te=O.width,de=O.height;let Ee=a.COLOR_BUFFER_BIT;const ge=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ge=s.get(O),Ce=A.length>1;if(Ce)for(let $e=0;$e<A.length;$e++)i.bindFramebuffer(a.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+$e,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,Ge.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+$e,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer);const Qe=O.texture.mipmaps;Qe&&Qe.length>0?i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer[0]):i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let $e=0;$e<A.length;$e++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Ee|=a.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Ee|=a.STENCIL_BUFFER_BIT)),Ce){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ge.__webglColorRenderbuffer[$e]);const Ae=s.get(A[$e]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ae,0)}a.blitFramebuffer(0,0,te,de,0,0,te,de,Ee,a.NEAREST),p===!0&&(dt.length=0,F.length=0,dt.push(a.COLOR_ATTACHMENT0+$e),O.depthBuffer&&O.resolveDepthBuffer===!1&&(dt.push(ge),F.push(ge),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,F)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,dt))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Ce)for(let $e=0;$e<A.length;$e++){i.bindFramebuffer(a.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+$e,a.RENDERBUFFER,Ge.__webglColorRenderbuffer[$e]);const Ae=s.get(A[$e]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,Ge.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+$e,a.TEXTURE_2D,Ae,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&p){const A=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[A])}}}function ht(O){return Math.min(l.maxSamples,O.samples)}function vt(O){const A=s.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function je(O){const A=f.render.frame;v.get(O)!==A&&(v.set(O,A),O.update())}function Bt(O,A){const te=O.colorSpace,de=O.format,Ee=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||te!==vr&&te!==Ki&&(Dt.getTransfer(te)===jt?(de!==Gi||Ee!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),A}function ke(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(m.width=O.naturalWidth||O.width,m.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(m.width=O.displayWidth,m.height=O.displayHeight):(m.width=O.width,m.height=O.height),m}this.allocateTextureUnit=re,this.resetTextureUnits=ue,this.setTexture2D=pe,this.setTexture2DArray=z,this.setTexture3D=Q,this.setTextureCube=K,this.rebindTextures=Ke,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=On,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=vt}function RA(a,e){function i(s,l=Ki){let c;const f=Dt.getTransfer(l);if(s===Ln)return a.UNSIGNED_BYTE;if(s===Mp)return a.UNSIGNED_SHORT_4_4_4_4;if(s===Tp)return a.UNSIGNED_SHORT_5_5_5_1;if(s===ox)return a.UNSIGNED_INT_5_9_9_9_REV;if(s===rx)return a.BYTE;if(s===sx)return a.SHORT;if(s===xl)return a.UNSIGNED_SHORT;if(s===Ep)return a.INT;if(s===Kr)return a.UNSIGNED_INT;if(s===Qi)return a.FLOAT;if(s===Al)return a.HALF_FLOAT;if(s===lx)return a.ALPHA;if(s===cx)return a.RGB;if(s===Gi)return a.RGBA;if(s===yl)return a.DEPTH_COMPONENT;if(s===eo)return a.DEPTH_STENCIL;if(s===ux)return a.RED;if(s===wp)return a.RED_INTEGER;if(s===fx)return a.RG;if(s===Ap)return a.RG_INTEGER;if(s===Rp)return a.RGBA_INTEGER;if(s===du||s===hu||s===pu||s===mu)if(f===jt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===du)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===hu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===pu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===mu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===du)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===hu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===pu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===mu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Fh||s===Hh||s===Gh||s===Vh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Fh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Hh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Gh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Vh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===kh||s===jh||s===Xh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===kh||s===jh)return f===jt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Xh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Wh||s===qh||s===Yh||s===Zh||s===Kh||s===Qh||s===Jh||s===$h||s===ep||s===tp||s===np||s===ip||s===ap||s===rp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Wh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===qh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Yh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Zh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Kh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Qh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Jh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===$h)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ep)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===tp)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===np)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ip)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ap)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===rp)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===gu||s===sp||s===op)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===gu)return f===jt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===sp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===op)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===dx||s===lp||s===cp||s===up)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===gu)return c.COMPRESSED_RED_RGTC1_EXT;if(s===lp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===cp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===up)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===$s?a.UNSIGNED_INT_24_8:a[s]!==void 0?a[s]:null}return{convert:i}}const CA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DA=`
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

}`;class UA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,s){if(this.texture===null){const l=new Fn,c=e.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Hn({vertexShader:CA,fragmentShader:DA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new hi(new Lu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class NA extends Oa{constructor(e,i){super();const s=this;let l=null,c=1,f=null,h="local-floor",p=1,m=null,v=null,g=null,x=null,E=null,M=null;const T=new UA,b=i.getContextAttributes();let _=null,L=null;const U=[],D=[],k=new lt;let H=null;const B=new Xn;B.viewport=new $t;const Y=new Xn;Y.viewport=new $t;const N=[B,Y],C=new $E;let V=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let he=U[Z];return he===void 0&&(he=new xh,U[Z]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Z){let he=U[Z];return he===void 0&&(he=new xh,U[Z]=he),he.getGripSpace()},this.getHand=function(Z){let he=U[Z];return he===void 0&&(he=new xh,U[Z]=he),he.getHandSpace()};function re(Z){const he=D.indexOf(Z.inputSource);if(he===-1)return;const Me=U[he];Me!==void 0&&(Me.update(Z.inputSource,Z.frame,m||f),Me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function _e(){l.removeEventListener("select",re),l.removeEventListener("selectstart",re),l.removeEventListener("selectend",re),l.removeEventListener("squeeze",re),l.removeEventListener("squeezestart",re),l.removeEventListener("squeezeend",re),l.removeEventListener("end",_e),l.removeEventListener("inputsourceschange",pe);for(let Z=0;Z<U.length;Z++){const he=D[Z];he!==null&&(D[Z]=null,U[Z].disconnect(he))}V=null,ue=null,T.reset(),e.setRenderTarget(_),E=null,x=null,g=null,l=null,L=null,Se.stop(),s.isPresenting=!1,e.setPixelRatio(H),e.setSize(k.width,k.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){c=Z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){h=Z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(Z){m=Z},this.getBaseLayer=function(){return x!==null?x:E},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return l},this.setSession=async function(Z){if(l=Z,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",re),l.addEventListener("selectstart",re),l.addEventListener("selectend",re),l.addEventListener("squeeze",re),l.addEventListener("squeezestart",re),l.addEventListener("squeezeend",re),l.addEventListener("end",_e),l.addEventListener("inputsourceschange",pe),b.xrCompatible!==!0&&await i.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(k),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,ye=null,ze=null;b.depth&&(ze=b.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Me=b.stencil?eo:yl,ye=b.stencil?$s:Kr);const Ye={colorFormat:i.RGBA8,depthFormat:ze,scaleFactor:c};g=new XRWebGLBinding(l,i),x=g.createProjectionLayer(Ye),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),L=new En(x.textureWidth,x.textureHeight,{format:Gi,type:Ln,depthTexture:new Np(x.textureWidth,x.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Me={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,Me),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),L=new En(E.framebufferWidth,E.framebufferHeight,{format:Gi,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(h),Se.setContext(l),Se.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function pe(Z){for(let he=0;he<Z.removed.length;he++){const Me=Z.removed[he],ye=D.indexOf(Me);ye>=0&&(D[ye]=null,U[ye].disconnect(Me))}for(let he=0;he<Z.added.length;he++){const Me=Z.added[he];let ye=D.indexOf(Me);if(ye===-1){for(let Ye=0;Ye<U.length;Ye++)if(Ye>=D.length){D.push(Me),ye=Ye;break}else if(D[Ye]===null){D[Ye]=Me,ye=Ye;break}if(ye===-1)break}const ze=U[ye];ze&&ze.connect(Me)}}const z=new oe,Q=new oe;function K(Z,he,Me){z.setFromMatrixPosition(he.matrixWorld),Q.setFromMatrixPosition(Me.matrixWorld);const ye=z.distanceTo(Q),ze=he.projectionMatrix.elements,Ye=Me.projectionMatrix.elements,Ke=ze[14]/(ze[10]-1),qt=ze[14]/(ze[10]+1),Xt=(ze[9]+1)/ze[5],dt=(ze[9]-1)/ze[5],F=(ze[8]-1)/ze[0],On=(Ye[8]+1)/Ye[0],ht=Ke*F,vt=Ke*On,je=ye/(-F+On),Bt=je*-F;if(he.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Bt),Z.translateZ(je),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ze[10]===-1)Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const ke=Ke+je,O=qt+je,A=ht-Bt,te=vt+(ye-Bt),de=Xt*qt/O*ke,Ee=dt*qt/O*ke;Z.projectionMatrix.makePerspective(A,te,de,Ee,ke,O),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function be(Z,he){he===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(he.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(l===null)return;let he=Z.near,Me=Z.far;T.texture!==null&&(T.depthNear>0&&(he=T.depthNear),T.depthFar>0&&(Me=T.depthFar)),C.near=Y.near=B.near=he,C.far=Y.far=B.far=Me,(V!==C.near||ue!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),V=C.near,ue=C.far),B.layers.mask=Z.layers.mask|2,Y.layers.mask=Z.layers.mask|4,C.layers.mask=B.layers.mask|Y.layers.mask;const ye=Z.parent,ze=C.cameras;be(C,ye);for(let Ye=0;Ye<ze.length;Ye++)be(ze[Ye],ye);ze.length===2?K(C,B,Y):C.projectionMatrix.copy(B.projectionMatrix),we(Z,C,ye)};function we(Z,he,Me){Me===null?Z.matrix.copy(he.matrixWorld):(Z.matrix.copy(Me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(he.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=fp*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&E===null))return p},this.setFoveation=function(Z){p=Z,x!==null&&(x.fixedFoveation=Z),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=Z)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(C)};let P=null;function ne(Z,he){if(v=he.getViewerPose(m||f),M=he,v!==null){const Me=v.views;E!==null&&(e.setRenderTargetFramebuffer(L,E.framebuffer),e.setRenderTarget(L));let ye=!1;Me.length!==C.cameras.length&&(C.cameras.length=0,ye=!0);for(let Ke=0;Ke<Me.length;Ke++){const qt=Me[Ke];let Xt=null;if(E!==null)Xt=E.getViewport(qt);else{const F=g.getViewSubImage(x,qt);Xt=F.viewport,Ke===0&&(e.setRenderTargetTextures(L,F.colorTexture,F.depthStencilTexture),e.setRenderTarget(L))}let dt=N[Ke];dt===void 0&&(dt=new Xn,dt.layers.enable(Ke),dt.viewport=new $t,N[Ke]=dt),dt.matrix.fromArray(qt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(qt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),Ke===0&&(C.matrix.copy(dt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ye===!0&&C.cameras.push(dt)}const ze=l.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&g){const Ke=g.getDepthInformation(Me[0]);Ke&&Ke.isValid&&Ke.texture&&T.init(e,Ke,l.renderState)}}for(let Me=0;Me<U.length;Me++){const ye=D[Me],ze=U[Me];ye!==null&&ze!==void 0&&ze.update(ye,he,m||f)}P&&P(Z,he),he.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:he}),M=null}const Se=new wx;Se.setAnimationLoop(ne),this.setAnimationLoop=function(Z){P=Z},this.dispose=function(){}}}const Vr=new La,LA=new hn;function OA(a,e){function i(b,_){b.matrixAutoUpdate===!0&&b.updateMatrix(),_.value.copy(b.matrix)}function s(b,_){_.color.getRGB(b.fogColor.value,yx(a)),_.isFog?(b.fogNear.value=_.near,b.fogFar.value=_.far):_.isFogExp2&&(b.fogDensity.value=_.density)}function l(b,_,L,U,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(b,_):_.isMeshToonMaterial?(c(b,_),g(b,_)):_.isMeshPhongMaterial?(c(b,_),v(b,_)):_.isMeshStandardMaterial?(c(b,_),x(b,_),_.isMeshPhysicalMaterial&&E(b,_,D)):_.isMeshMatcapMaterial?(c(b,_),M(b,_)):_.isMeshDepthMaterial?c(b,_):_.isMeshDistanceMaterial?(c(b,_),T(b,_)):_.isMeshNormalMaterial?c(b,_):_.isLineBasicMaterial?(f(b,_),_.isLineDashedMaterial&&h(b,_)):_.isPointsMaterial?p(b,_,L,U):_.isSpriteMaterial?m(b,_):_.isShadowMaterial?(b.color.value.copy(_.color),b.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(b,_){b.opacity.value=_.opacity,_.color&&b.diffuse.value.copy(_.color),_.emissive&&b.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(b.map.value=_.map,i(_.map,b.mapTransform)),_.alphaMap&&(b.alphaMap.value=_.alphaMap,i(_.alphaMap,b.alphaMapTransform)),_.bumpMap&&(b.bumpMap.value=_.bumpMap,i(_.bumpMap,b.bumpMapTransform),b.bumpScale.value=_.bumpScale,_.side===bn&&(b.bumpScale.value*=-1)),_.normalMap&&(b.normalMap.value=_.normalMap,i(_.normalMap,b.normalMapTransform),b.normalScale.value.copy(_.normalScale),_.side===bn&&b.normalScale.value.negate()),_.displacementMap&&(b.displacementMap.value=_.displacementMap,i(_.displacementMap,b.displacementMapTransform),b.displacementScale.value=_.displacementScale,b.displacementBias.value=_.displacementBias),_.emissiveMap&&(b.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,b.emissiveMapTransform)),_.specularMap&&(b.specularMap.value=_.specularMap,i(_.specularMap,b.specularMapTransform)),_.alphaTest>0&&(b.alphaTest.value=_.alphaTest);const L=e.get(_),U=L.envMap,D=L.envMapRotation;U&&(b.envMap.value=U,Vr.copy(D),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),b.envMapRotation.value.setFromMatrix4(LA.makeRotationFromEuler(Vr)),b.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=_.reflectivity,b.ior.value=_.ior,b.refractionRatio.value=_.refractionRatio),_.lightMap&&(b.lightMap.value=_.lightMap,b.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,b.lightMapTransform)),_.aoMap&&(b.aoMap.value=_.aoMap,b.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,b.aoMapTransform))}function f(b,_){b.diffuse.value.copy(_.color),b.opacity.value=_.opacity,_.map&&(b.map.value=_.map,i(_.map,b.mapTransform))}function h(b,_){b.dashSize.value=_.dashSize,b.totalSize.value=_.dashSize+_.gapSize,b.scale.value=_.scale}function p(b,_,L,U){b.diffuse.value.copy(_.color),b.opacity.value=_.opacity,b.size.value=_.size*L,b.scale.value=U*.5,_.map&&(b.map.value=_.map,i(_.map,b.uvTransform)),_.alphaMap&&(b.alphaMap.value=_.alphaMap,i(_.alphaMap,b.alphaMapTransform)),_.alphaTest>0&&(b.alphaTest.value=_.alphaTest)}function m(b,_){b.diffuse.value.copy(_.color),b.opacity.value=_.opacity,b.rotation.value=_.rotation,_.map&&(b.map.value=_.map,i(_.map,b.mapTransform)),_.alphaMap&&(b.alphaMap.value=_.alphaMap,i(_.alphaMap,b.alphaMapTransform)),_.alphaTest>0&&(b.alphaTest.value=_.alphaTest)}function v(b,_){b.specular.value.copy(_.specular),b.shininess.value=Math.max(_.shininess,1e-4)}function g(b,_){_.gradientMap&&(b.gradientMap.value=_.gradientMap)}function x(b,_){b.metalness.value=_.metalness,_.metalnessMap&&(b.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,b.metalnessMapTransform)),b.roughness.value=_.roughness,_.roughnessMap&&(b.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,b.roughnessMapTransform)),_.envMap&&(b.envMapIntensity.value=_.envMapIntensity)}function E(b,_,L){b.ior.value=_.ior,_.sheen>0&&(b.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),b.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(b.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,b.sheenColorMapTransform)),_.sheenRoughnessMap&&(b.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,b.sheenRoughnessMapTransform))),_.clearcoat>0&&(b.clearcoat.value=_.clearcoat,b.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(b.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,b.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(b.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===bn&&b.clearcoatNormalScale.value.negate())),_.dispersion>0&&(b.dispersion.value=_.dispersion),_.iridescence>0&&(b.iridescence.value=_.iridescence,b.iridescenceIOR.value=_.iridescenceIOR,b.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(b.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,b.iridescenceMapTransform)),_.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),_.transmission>0&&(b.transmission.value=_.transmission,b.transmissionSamplerMap.value=L.texture,b.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(b.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,b.transmissionMapTransform)),b.thickness.value=_.thickness,_.thicknessMap&&(b.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=_.attenuationDistance,b.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(b.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(b.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=_.specularIntensity,b.specularColor.value.copy(_.specularColor),_.specularColorMap&&(b.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,b.specularColorMapTransform)),_.specularIntensityMap&&(b.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,b.specularIntensityMapTransform))}function M(b,_){_.matcap&&(b.matcap.value=_.matcap)}function T(b,_){const L=e.get(_).light;b.referencePosition.value.setFromMatrixPosition(L.matrixWorld),b.nearDistance.value=L.shadow.camera.near,b.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function PA(a,e,i,s){let l={},c={},f=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function p(L,U){const D=U.program;s.uniformBlockBinding(L,D)}function m(L,U){let D=l[L.id];D===void 0&&(M(L),D=v(L),l[L.id]=D,L.addEventListener("dispose",b));const k=U.program;s.updateUBOMapping(L,k);const H=e.render.frame;c[L.id]!==H&&(x(L),c[L.id]=H)}function v(L){const U=g();L.__bindingPointIndex=U;const D=a.createBuffer(),k=L.__size,H=L.usage;return a.bindBuffer(a.UNIFORM_BUFFER,D),a.bufferData(a.UNIFORM_BUFFER,k,H),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,U,D),D}function g(){for(let L=0;L<h;L++)if(f.indexOf(L)===-1)return f.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const U=l[L.id],D=L.uniforms,k=L.__cache;a.bindBuffer(a.UNIFORM_BUFFER,U);for(let H=0,B=D.length;H<B;H++){const Y=Array.isArray(D[H])?D[H]:[D[H]];for(let N=0,C=Y.length;N<C;N++){const V=Y[N];if(E(V,H,N,k)===!0){const ue=V.__offset,re=Array.isArray(V.value)?V.value:[V.value];let _e=0;for(let pe=0;pe<re.length;pe++){const z=re[pe],Q=T(z);typeof z=="number"||typeof z=="boolean"?(V.__data[0]=z,a.bufferSubData(a.UNIFORM_BUFFER,ue+_e,V.__data)):z.isMatrix3?(V.__data[0]=z.elements[0],V.__data[1]=z.elements[1],V.__data[2]=z.elements[2],V.__data[3]=0,V.__data[4]=z.elements[3],V.__data[5]=z.elements[4],V.__data[6]=z.elements[5],V.__data[7]=0,V.__data[8]=z.elements[6],V.__data[9]=z.elements[7],V.__data[10]=z.elements[8],V.__data[11]=0):(z.toArray(V.__data,_e),_e+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,ue,V.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function E(L,U,D,k){const H=L.value,B=U+"_"+D;if(k[B]===void 0)return typeof H=="number"||typeof H=="boolean"?k[B]=H:k[B]=H.clone(),!0;{const Y=k[B];if(typeof H=="number"||typeof H=="boolean"){if(Y!==H)return k[B]=H,!0}else if(Y.equals(H)===!1)return Y.copy(H),!0}return!1}function M(L){const U=L.uniforms;let D=0;const k=16;for(let B=0,Y=U.length;B<Y;B++){const N=Array.isArray(U[B])?U[B]:[U[B]];for(let C=0,V=N.length;C<V;C++){const ue=N[C],re=Array.isArray(ue.value)?ue.value:[ue.value];for(let _e=0,pe=re.length;_e<pe;_e++){const z=re[_e],Q=T(z),K=D%k,be=K%Q.boundary,we=K+be;D+=be,we!==0&&k-we<Q.storage&&(D+=k-we),ue.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=D,D+=Q.storage}}}const H=D%k;return H>0&&(D+=k-H),L.__size=D,L.__cache={},this}function T(L){const U={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(U.boundary=4,U.storage=4):L.isVector2?(U.boundary=8,U.storage=8):L.isVector3||L.isColor?(U.boundary=16,U.storage=12):L.isVector4?(U.boundary=16,U.storage=16):L.isMatrix3?(U.boundary=48,U.storage=48):L.isMatrix4?(U.boundary=64,U.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),U}function b(L){const U=L.target;U.removeEventListener("dispose",b);const D=f.indexOf(U.__bindingPointIndex);f.splice(D,1),a.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function _(){for(const L in l)a.deleteBuffer(l[L]);f=[],l={},c={}}return{bind:p,update:m,dispose:_}}class Ux{constructor(e={}){const{canvas:i=SE(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const M=new Uint32Array(4),T=new Int32Array(4);let b=null,_=null;const L=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ca,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let k=!1;this._outputColorSpace=Pt;let H=0,B=0,Y=null,N=-1,C=null;const V=new $t,ue=new $t;let re=null;const _e=new Nt(0);let pe=0,z=i.width,Q=i.height,K=1,be=null,we=null;const P=new $t(0,0,z,Q),ne=new $t(0,0,z,Q);let Se=!1;const Z=new Ex;let he=!1,Me=!1;const ye=new hn,ze=new hn,Ye=new oe,Ke=new $t,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function dt(){return Y===null?K:1}let F=s;function On(R,W){return i.getContext(R,W)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${wl}`),i.addEventListener("webglcontextlost",xe,!1),i.addEventListener("webglcontextrestored",Re,!1),i.addEventListener("webglcontextcreationerror",Ue,!1),F===null){const W="webgl2";if(F=On(W,R),F===null)throw On(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ht,vt,je,Bt,ke,O,A,te,de,Ee,ge,Ge,Ce,Qe,$e,Ae,Ie,Ze,Ve,Pe,tt,st,Ft,X;function De(){ht=new W2(F),ht.init(),st=new RA(F,ht),vt=new F2(F,ht,e,st),je=new wA(F,ht),vt.reverseDepthBuffer&&x&&je.buffers.depth.setReversed(!0),Bt=new Z2(F),ke=new hA,O=new AA(F,ht,je,ke,vt,st,Bt),A=new G2(D),te=new X2(D),de=new tM(F),Ft=new z2(F,de),Ee=new q2(F,de,Bt,Ft),ge=new Q2(F,Ee,de,Bt),Ve=new K2(F,vt,O),Ae=new H2(ke),Ge=new dA(D,A,te,ht,vt,Ft,Ae),Ce=new OA(D,ke),Qe=new mA,$e=new SA(ht),Ze=new B2(D,A,te,je,ge,E,p),Ie=new MA(D,ge,vt),X=new PA(F,Bt,vt,je),Pe=new I2(F,ht,Bt),tt=new Y2(F,ht,Bt),Bt.programs=Ge.programs,D.capabilities=vt,D.extensions=ht,D.properties=ke,D.renderLists=Qe,D.shadowMap=Ie,D.state=je,D.info=Bt}De();const ce=new NA(D,F);this.xr=ce,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=ht.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ht.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(R){R!==void 0&&(K=R,this.setSize(z,Q,!1))},this.getSize=function(R){return R.set(z,Q)},this.setSize=function(R,W,ie=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,Q=W,i.width=Math.floor(R*K),i.height=Math.floor(W*K),ie===!0&&(i.style.width=R+"px",i.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(z*K,Q*K).floor()},this.setDrawingBufferSize=function(R,W,ie){z=R,Q=W,K=ie,i.width=Math.floor(R*ie),i.height=Math.floor(W*ie),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(V)},this.getViewport=function(R){return R.copy(P)},this.setViewport=function(R,W,ie,ae){R.isVector4?P.set(R.x,R.y,R.z,R.w):P.set(R,W,ie,ae),je.viewport(V.copy(P).multiplyScalar(K).round())},this.getScissor=function(R){return R.copy(ne)},this.setScissor=function(R,W,ie,ae){R.isVector4?ne.set(R.x,R.y,R.z,R.w):ne.set(R,W,ie,ae),je.scissor(ue.copy(ne).multiplyScalar(K).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(R){je.setScissorTest(Se=R)},this.setOpaqueSort=function(R){be=R},this.setTransparentSort=function(R){we=R},this.getClearColor=function(R){return R.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,ie=!0){let ae=0;if(R){let j=!1;if(Y!==null){const Te=Y.texture.format;j=Te===Rp||Te===Ap||Te===wp}if(j){const Te=Y.texture.type,Ne=Te===Ln||Te===Kr||Te===xl||Te===$s||Te===Mp||Te===Tp,Oe=Ze.getClearColor(),Be=Ze.getClearAlpha(),it=Oe.r,et=Oe.g,Xe=Oe.b;Ne?(M[0]=it,M[1]=et,M[2]=Xe,M[3]=Be,F.clearBufferuiv(F.COLOR,0,M)):(T[0]=it,T[1]=et,T[2]=Xe,T[3]=Be,F.clearBufferiv(F.COLOR,0,T))}else ae|=F.COLOR_BUFFER_BIT}W&&(ae|=F.DEPTH_BUFFER_BIT),ie&&(ae|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",xe,!1),i.removeEventListener("webglcontextrestored",Re,!1),i.removeEventListener("webglcontextcreationerror",Ue,!1),Ze.dispose(),Qe.dispose(),$e.dispose(),ke.dispose(),A.dispose(),te.dispose(),ge.dispose(),Ft.dispose(),X.dispose(),Ge.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",uo),ce.removeEventListener("sessionend",fo),ki.stop()};function xe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const R=Bt.autoReset,W=Ie.enabled,ie=Ie.autoUpdate,ae=Ie.needsUpdate,j=Ie.type;De(),Bt.autoReset=R,Ie.enabled=W,Ie.autoUpdate=ie,Ie.needsUpdate=ae,Ie.type=j}function Ue(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function nt(R){const W=R.target;W.removeEventListener("dispose",nt),Qt(W)}function Qt(R){pn(R),ke.remove(R)}function pn(R){const W=ke.get(R).programs;W!==void 0&&(W.forEach(function(ie){Ge.releaseProgram(ie)}),R.isShaderMaterial&&Ge.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,ie,ae,j,Te){W===null&&(W=qt);const Ne=j.isMesh&&j.matrixWorld.determinant()<0,Oe=po(R,W,ie,ae,j);je.setMaterial(ae,Ne);let Be=ie.index,it=1;if(ae.wireframe===!0){if(Be=Ee.getWireframeAttribute(ie),Be===void 0)return;it=2}const et=ie.drawRange,Xe=ie.attributes.position;let yt=et.start*it,St=(et.start+et.count)*it;Te!==null&&(yt=Math.max(yt,Te.start*it),St=Math.min(St,(Te.start+Te.count)*it)),Be!==null?(yt=Math.max(yt,0),St=Math.min(St,Be.count)):Xe!=null&&(yt=Math.max(yt,0),St=Math.min(St,Xe.count));const Yt=St-yt;if(Yt<0||Yt===1/0)return;Ft.setup(j,ae,Oe,ie,Be);let At,at=Pe;if(Be!==null&&(At=de.get(Be),at=tt,at.setIndex(At)),j.isMesh)ae.wireframe===!0?(je.setLineWidth(ae.wireframeLinewidth*dt()),at.setMode(F.LINES)):at.setMode(F.TRIANGLES);else if(j.isLine){let qe=ae.linewidth;qe===void 0&&(qe=1),je.setLineWidth(qe*dt()),j.isLineSegments?at.setMode(F.LINES):j.isLineLoop?at.setMode(F.LINE_LOOP):at.setMode(F.LINE_STRIP)}else j.isPoints?at.setMode(F.POINTS):j.isSprite&&at.setMode(F.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)vu("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))at.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const qe=j._multiDrawStarts,mn=j._multiDrawCounts,Tt=j._multiDrawCount,qn=Be?de.get(Be).bytesPerElement:1,Li=ke.get(ae).currentProgram.getUniforms();for(let Gn=0;Gn<Tt;Gn++)Li.setValue(F,"_gl_DrawID",Gn),at.render(qe[Gn]/qn,mn[Gn])}else if(j.isInstancedMesh)at.renderInstances(yt,Yt,j.count);else if(ie.isInstancedBufferGeometry){const qe=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,mn=Math.min(ie.instanceCount,qe);at.renderInstances(yt,Yt,mn)}else at.render(yt,Yt)};function wt(R,W,ie){R.transparent===!0&&R.side===di&&R.forceSinglePass===!1?(R.side=bn,R.needsUpdate=!0,tn(R,W,ie),R.side=Na,R.needsUpdate=!0,tn(R,W,ie),R.side=di):tn(R,W,ie)}this.compile=function(R,W,ie=null){ie===null&&(ie=R),_=$e.get(ie),_.init(W),U.push(_),ie.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),R!==ie&&R.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const ae=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Te=j.material;if(Te)if(Array.isArray(Te))for(let Ne=0;Ne<Te.length;Ne++){const Oe=Te[Ne];wt(Oe,ie,j),ae.add(Oe)}else wt(Te,ie,j),ae.add(Te)}),_=U.pop(),ae},this.compileAsync=function(R,W,ie=null){const ae=this.compile(R,W,ie);return new Promise(j=>{function Te(){if(ae.forEach(function(Ne){ke.get(Ne).currentProgram.isReady()&&ae.delete(Ne)}),ae.size===0){j(R);return}setTimeout(Te,10)}ht.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Mn=null;function Ui(R){Mn&&Mn(R)}function uo(){ki.stop()}function fo(){ki.start()}const ki=new wx;ki.setAnimationLoop(Ui),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(R){Mn=R,ce.setAnimationLoop(R),R===null?ki.stop():ki.start()},ce.addEventListener("sessionstart",uo),ce.addEventListener("sessionend",fo),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(W),W=ce.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,W,Y),_=$e.get(R,U.length),_.init(W),U.push(_),ze.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Z.setFromProjectionMatrix(ze),Me=this.localClippingEnabled,he=Ae.init(this.clippingPlanes,Me),b=Qe.get(R,L.length),b.init(),L.push(b),ce.enabled===!0&&ce.isPresenting===!0){const Te=D.xr.getDepthSensingMesh();Te!==null&&_r(Te,W,-1/0,D.sortObjects)}_r(R,W,0,D.sortObjects),b.finish(),D.sortObjects===!0&&b.sort(be,we),Xt=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Xt&&Ze.addToRenderList(b,R),this.info.render.frame++,he===!0&&Ae.beginShadows();const ie=_.state.shadowsArray;Ie.render(ie,R,W),he===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=b.opaque,j=b.transmissive;if(_.setupLights(),W.isArrayCamera){const Te=W.cameras;if(j.length>0)for(let Ne=0,Oe=Te.length;Ne<Oe;Ne++){const Be=Te[Ne];ho(ae,j,R,Be)}Xt&&Ze.render(R);for(let Ne=0,Oe=Te.length;Ne<Oe;Ne++){const Be=Te[Ne];Jr(b,R,Be,Be.viewport)}}else j.length>0&&ho(ae,j,R,W),Xt&&Ze.render(R),Jr(b,R,W);Y!==null&&B===0&&(O.updateMultisampleRenderTarget(Y),O.updateRenderTargetMipmap(Y)),R.isScene===!0&&R.onAfterRender(D,R,W),Ft.resetDefaultState(),N=-1,C=null,U.pop(),U.length>0?(_=U[U.length-1],he===!0&&Ae.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,L.pop(),L.length>0?b=L[L.length-1]:b=null};function _r(R,W,ie,ae){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)ie=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Z.intersectsSprite(R)){ae&&Ke.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ze);const Ne=ge.update(R),Oe=R.material;Oe.visible&&b.push(R,Ne,Oe,ie,Ke.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Z.intersectsObject(R))){const Ne=ge.update(R),Oe=R.material;if(ae&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ke.copy(R.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Ke.copy(Ne.boundingSphere.center)),Ke.applyMatrix4(R.matrixWorld).applyMatrix4(ze)),Array.isArray(Oe)){const Be=Ne.groups;for(let it=0,et=Be.length;it<et;it++){const Xe=Be[it],yt=Oe[Xe.materialIndex];yt&&yt.visible&&b.push(R,Ne,yt,ie,Ke.z,Xe)}}else Oe.visible&&b.push(R,Ne,Oe,ie,Ke.z,null)}}const Te=R.children;for(let Ne=0,Oe=Te.length;Ne<Oe;Ne++)_r(Te[Ne],W,ie,ae)}function Jr(R,W,ie,ae){const j=R.opaque,Te=R.transmissive,Ne=R.transparent;_.setupLightsView(ie),he===!0&&Ae.setGlobalState(D.clippingPlanes,ie),ae&&je.viewport(V.copy(ae)),j.length>0&&xr(j,W,ie),Te.length>0&&xr(Te,W,ie),Ne.length>0&&xr(Ne,W,ie),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function ho(R,W,ie,ae){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ae.id]===void 0&&(_.state.transmissionRenderTarget[ae.id]=new En(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Al:Ln,minFilter:Yr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace}));const Te=_.state.transmissionRenderTarget[ae.id],Ne=ae.viewport||V;Te.setSize(Ne.z*D.transmissionResolutionScale,Ne.w*D.transmissionResolutionScale);const Oe=D.getRenderTarget();D.setRenderTarget(Te),D.getClearColor(_e),pe=D.getClearAlpha(),pe<1&&D.setClearColor(16777215,.5),D.clear(),Xt&&Ze.render(ie);const Be=D.toneMapping;D.toneMapping=Ca;const it=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),_.setupLightsView(ae),he===!0&&Ae.setGlobalState(D.clippingPlanes,ae),xr(R,ie,ae),O.updateMultisampleRenderTarget(Te),O.updateRenderTargetMipmap(Te),ht.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Xe=0,yt=W.length;Xe<yt;Xe++){const St=W[Xe],Yt=St.object,At=St.geometry,at=St.material,qe=St.group;if(at.side===di&&Yt.layers.test(ae.layers)){const mn=at.side;at.side=bn,at.needsUpdate=!0,Ni(Yt,ie,ae,At,at,qe),at.side=mn,at.needsUpdate=!0,et=!0}}et===!0&&(O.updateMultisampleRenderTarget(Te),O.updateRenderTargetMipmap(Te))}D.setRenderTarget(Oe),D.setClearColor(_e,pe),it!==void 0&&(ae.viewport=it),D.toneMapping=Be}function xr(R,W,ie){const ae=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Te=R.length;j<Te;j++){const Ne=R[j],Oe=Ne.object,Be=Ne.geometry,it=Ne.group;let et=Ne.material;et.allowOverride===!0&&ae!==null&&(et=ae),Oe.layers.test(ie.layers)&&Ni(Oe,W,ie,Be,et,it)}}function Ni(R,W,ie,ae,j,Te){R.onBeforeRender(D,W,ie,ae,j,Te),R.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(D,W,ie,ae,R,Te),j.transparent===!0&&j.side===di&&j.forceSinglePass===!1?(j.side=bn,j.needsUpdate=!0,D.renderBufferDirect(ie,W,ae,j,R,Te),j.side=Na,j.needsUpdate=!0,D.renderBufferDirect(ie,W,ae,j,R,Te),j.side=di):D.renderBufferDirect(ie,W,ae,j,R,Te),R.onAfterRender(D,W,ie,ae,j,Te)}function tn(R,W,ie){W.isScene!==!0&&(W=qt);const ae=ke.get(R),j=_.state.lights,Te=_.state.shadowsArray,Ne=j.state.version,Oe=Ge.getParameters(R,j.state,Te,W,ie),Be=Ge.getProgramCacheKey(Oe);let it=ae.programs;ae.environment=R.isMeshStandardMaterial?W.environment:null,ae.fog=W.fog,ae.envMap=(R.isMeshStandardMaterial?te:A).get(R.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,it===void 0&&(R.addEventListener("dispose",nt),it=new Map,ae.programs=it);let et=it.get(Be);if(et!==void 0){if(ae.currentProgram===et&&ae.lightsStateVersion===Ne)return aa(R,Oe),et}else Oe.uniforms=Ge.getUniforms(R),R.onBeforeCompile(Oe,D),et=Ge.acquireProgram(Oe,Be),it.set(Be,et),ae.uniforms=Oe.uniforms;const Xe=ae.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xe.clippingPlanes=Ae.uniform),aa(R,Oe),ae.needsLights=Bu(R),ae.lightsStateVersion=Ne,ae.needsLights&&(Xe.ambientLightColor.value=j.state.ambient,Xe.lightProbe.value=j.state.probe,Xe.directionalLights.value=j.state.directional,Xe.directionalLightShadows.value=j.state.directionalShadow,Xe.spotLights.value=j.state.spot,Xe.spotLightShadows.value=j.state.spotShadow,Xe.rectAreaLights.value=j.state.rectArea,Xe.ltc_1.value=j.state.rectAreaLTC1,Xe.ltc_2.value=j.state.rectAreaLTC2,Xe.pointLights.value=j.state.point,Xe.pointLightShadows.value=j.state.pointShadow,Xe.hemisphereLights.value=j.state.hemi,Xe.directionalShadowMap.value=j.state.directionalShadowMap,Xe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Xe.spotShadowMap.value=j.state.spotShadowMap,Xe.spotLightMatrix.value=j.state.spotLightMatrix,Xe.spotLightMap.value=j.state.spotLightMap,Xe.pointShadowMap.value=j.state.pointShadowMap,Xe.pointShadowMatrix.value=j.state.pointShadowMatrix),ae.currentProgram=et,ae.uniformsList=null,et}function Tn(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=_u.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function aa(R,W){const ie=ke.get(R);ie.outputColorSpace=W.outputColorSpace,ie.batching=W.batching,ie.batchingColor=W.batchingColor,ie.instancing=W.instancing,ie.instancingColor=W.instancingColor,ie.instancingMorph=W.instancingMorph,ie.skinning=W.skinning,ie.morphTargets=W.morphTargets,ie.morphNormals=W.morphNormals,ie.morphColors=W.morphColors,ie.morphTargetsCount=W.morphTargetsCount,ie.numClippingPlanes=W.numClippingPlanes,ie.numIntersection=W.numClipIntersection,ie.vertexAlphas=W.vertexAlphas,ie.vertexTangents=W.vertexTangents,ie.toneMapping=W.toneMapping}function po(R,W,ie,ae,j){W.isScene!==!0&&(W=qt),O.resetTextureUnits();const Te=W.fog,Ne=ae.isMeshStandardMaterial?W.environment:null,Oe=Y===null?D.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:vr,Be=(ae.isMeshStandardMaterial?te:A).get(ae.envMap||Ne),it=ae.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,et=!!ie.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Xe=!!ie.morphAttributes.position,yt=!!ie.morphAttributes.normal,St=!!ie.morphAttributes.color;let Yt=Ca;ae.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Yt=D.toneMapping);const At=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,at=At!==void 0?At.length:0,qe=ke.get(ae),mn=_.state.lights;if(he===!0&&(Me===!0||R!==C)){const nn=R===C&&ae.id===N;Ae.setState(ae,R,nn)}let Tt=!1;ae.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==mn.state.version||qe.outputColorSpace!==Oe||j.isBatchedMesh&&qe.batching===!1||!j.isBatchedMesh&&qe.batching===!0||j.isBatchedMesh&&qe.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&qe.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&qe.instancing===!1||!j.isInstancedMesh&&qe.instancing===!0||j.isSkinnedMesh&&qe.skinning===!1||!j.isSkinnedMesh&&qe.skinning===!0||j.isInstancedMesh&&qe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&qe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&qe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&qe.instancingMorph===!1&&j.morphTexture!==null||qe.envMap!==Be||ae.fog===!0&&qe.fog!==Te||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Ae.numPlanes||qe.numIntersection!==Ae.numIntersection)||qe.vertexAlphas!==it||qe.vertexTangents!==et||qe.morphTargets!==Xe||qe.morphNormals!==yt||qe.morphColors!==St||qe.toneMapping!==Yt||qe.morphTargetsCount!==at)&&(Tt=!0):(Tt=!0,qe.__version=ae.version);let qn=qe.currentProgram;Tt===!0&&(qn=tn(ae,W,j));let Li=!1,Gn=!1,xn=!1;const Ht=qn.getUniforms(),Vn=qe.uniforms;if(je.useProgram(qn.program)&&(Li=!0,Gn=!0,xn=!0),ae.id!==N&&(N=ae.id,Gn=!0),Li||C!==R){je.buffers.depth.getReversed()?(ye.copy(R.projectionMatrix),EE(ye),ME(ye),Ht.setValue(F,"projectionMatrix",ye)):Ht.setValue(F,"projectionMatrix",R.projectionMatrix),Ht.setValue(F,"viewMatrix",R.matrixWorldInverse);const wn=Ht.map.cameraPosition;wn!==void 0&&wn.setValue(F,Ye.setFromMatrixPosition(R.matrixWorld)),vt.logarithmicDepthBuffer&&Ht.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Ht.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,Gn=!0,xn=!0)}if(j.isSkinnedMesh){Ht.setOptional(F,j,"bindMatrix"),Ht.setOptional(F,j,"bindMatrixInverse");const nn=j.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Ht.setValue(F,"boneTexture",nn.boneTexture,O))}j.isBatchedMesh&&(Ht.setOptional(F,j,"batchingTexture"),Ht.setValue(F,"batchingTexture",j._matricesTexture,O),Ht.setOptional(F,j,"batchingIdTexture"),Ht.setValue(F,"batchingIdTexture",j._indirectTexture,O),Ht.setOptional(F,j,"batchingColorTexture"),j._colorsTexture!==null&&Ht.setValue(F,"batchingColorTexture",j._colorsTexture,O));const Pn=ie.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&Ve.update(j,ie,qn),(Gn||qe.receiveShadow!==j.receiveShadow)&&(qe.receiveShadow=j.receiveShadow,Ht.setValue(F,"receiveShadow",j.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(Vn.envMap.value=Be,Vn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&W.environment!==null&&(Vn.envMapIntensity.value=W.environmentIntensity),Gn&&(Ht.setValue(F,"toneMappingExposure",D.toneMappingExposure),qe.needsLights&&Pu(Vn,xn),Te&&ae.fog===!0&&Ce.refreshFogUniforms(Vn,Te),Ce.refreshMaterialUniforms(Vn,ae,K,Q,_.state.transmissionRenderTarget[R.id]),_u.upload(F,Tn(qe),Vn,O)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(_u.upload(F,Tn(qe),Vn,O),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Ht.setValue(F,"center",j.center),Ht.setValue(F,"modelViewMatrix",j.modelViewMatrix),Ht.setValue(F,"normalMatrix",j.normalMatrix),Ht.setValue(F,"modelMatrix",j.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const nn=ae.uniformsGroups;for(let wn=0,$r=nn.length;wn<$r;wn++){const Yn=nn[wn];X.update(Yn,qn),X.bind(Yn,qn)}}return qn}function Pu(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Bu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(R,W,ie){const ae=ke.get(R);ae.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),ke.get(R.texture).__webglTexture=W,ke.get(R.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:ie,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const ie=ke.get(R);ie.__webglFramebuffer=W,ie.__useDefaultFramebuffer=W===void 0};const Ul=F.createFramebuffer();this.setRenderTarget=function(R,W=0,ie=0){Y=R,H=W,B=ie;let ae=!0,j=null,Te=!1,Ne=!1;if(R){const Be=ke.get(R);if(Be.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(F.FRAMEBUFFER,null),ae=!1;else if(Be.__webglFramebuffer===void 0)O.setupRenderTarget(R);else if(Be.__hasExternalTextures)O.rebindTextures(R,ke.get(R.texture).__webglTexture,ke.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Xe=R.depthTexture;if(Be.__boundDepthTexture!==Xe){if(Xe!==null&&ke.has(Xe)&&(R.width!==Xe.image.width||R.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(R)}}const it=R.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Ne=!0);const et=ke.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(et[W])?j=et[W][ie]:j=et[W],Te=!0):R.samples>0&&O.useMultisampledRTT(R)===!1?j=ke.get(R).__webglMultisampledFramebuffer:Array.isArray(et)?j=et[ie]:j=et,V.copy(R.viewport),ue.copy(R.scissor),re=R.scissorTest}else V.copy(P).multiplyScalar(K).floor(),ue.copy(ne).multiplyScalar(K).floor(),re=Se;if(ie!==0&&(j=Ul),je.bindFramebuffer(F.FRAMEBUFFER,j)&&ae&&je.drawBuffers(R,j),je.viewport(V),je.scissor(ue),je.setScissorTest(re),Te){const Be=ke.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+W,Be.__webglTexture,ie)}else if(Ne){const Be=ke.get(R.texture),it=W;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Be.__webglTexture,ie,it)}else if(R!==null&&ie!==0){const Be=ke.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Be.__webglTexture,ie)}N=-1},this.readRenderTargetPixels=function(R,W,ie,ae,j,Te,Ne){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=ke.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(Oe=Oe[Ne]),Oe){je.bindFramebuffer(F.FRAMEBUFFER,Oe);try{const Be=R.texture,it=Be.format,et=Be.type;if(!vt.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-ae&&ie>=0&&ie<=R.height-j&&F.readPixels(W,ie,ae,j,st.convert(it),st.convert(et),Te)}finally{const Be=Y!==null?ke.get(Y).__webglFramebuffer:null;je.bindFramebuffer(F.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(R,W,ie,ae,j,Te,Ne){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=ke.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(Oe=Oe[Ne]),Oe)if(W>=0&&W<=R.width-ae&&ie>=0&&ie<=R.height-j){je.bindFramebuffer(F.FRAMEBUFFER,Oe);const Be=R.texture,it=Be.format,et=Be.type;if(!vt.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Xe),F.bufferData(F.PIXEL_PACK_BUFFER,Te.byteLength,F.STREAM_READ),F.readPixels(W,ie,ae,j,st.convert(it),st.convert(et),0);const yt=Y!==null?ke.get(Y).__webglFramebuffer:null;je.bindFramebuffer(F.FRAMEBUFFER,yt);const St=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await bE(F,St,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Xe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Te),F.deleteBuffer(Xe),F.deleteSync(St),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,ie=0){const ae=Math.pow(2,-ie),j=Math.floor(R.image.width*ae),Te=Math.floor(R.image.height*ae),Ne=W!==null?W.x:0,Oe=W!==null?W.y:0;O.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,ie,0,0,Ne,Oe,j,Te),je.unbindTexture()};const yr=F.createFramebuffer(),mo=F.createFramebuffer();this.copyTextureToTexture=function(R,W,ie=null,ae=null,j=0,Te=null){Te===null&&(j!==0?(vu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=j,j=0):Te=0);let Ne,Oe,Be,it,et,Xe,yt,St,Yt;const At=R.isCompressedTexture?R.mipmaps[Te]:R.image;if(ie!==null)Ne=ie.max.x-ie.min.x,Oe=ie.max.y-ie.min.y,Be=ie.isBox3?ie.max.z-ie.min.z:1,it=ie.min.x,et=ie.min.y,Xe=ie.isBox3?ie.min.z:0;else{const Pn=Math.pow(2,-j);Ne=Math.floor(At.width*Pn),Oe=Math.floor(At.height*Pn),R.isDataArrayTexture?Be=At.depth:R.isData3DTexture?Be=Math.floor(At.depth*Pn):Be=1,it=0,et=0,Xe=0}ae!==null?(yt=ae.x,St=ae.y,Yt=ae.z):(yt=0,St=0,Yt=0);const at=st.convert(W.format),qe=st.convert(W.type);let mn;W.isData3DTexture?(O.setTexture3D(W,0),mn=F.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(O.setTexture2DArray(W,0),mn=F.TEXTURE_2D_ARRAY):(O.setTexture2D(W,0),mn=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const Tt=F.getParameter(F.UNPACK_ROW_LENGTH),qn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Li=F.getParameter(F.UNPACK_SKIP_PIXELS),Gn=F.getParameter(F.UNPACK_SKIP_ROWS),xn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,At.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,At.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,it),F.pixelStorei(F.UNPACK_SKIP_ROWS,et),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Xe);const Ht=R.isDataArrayTexture||R.isData3DTexture,Vn=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const Pn=ke.get(R),nn=ke.get(W),wn=ke.get(Pn.__renderTarget),$r=ke.get(nn.__renderTarget);je.bindFramebuffer(F.READ_FRAMEBUFFER,wn.__webglFramebuffer),je.bindFramebuffer(F.DRAW_FRAMEBUFFER,$r.__webglFramebuffer);for(let Yn=0;Yn<Be;Yn++)Ht&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ke.get(R).__webglTexture,j,Xe+Yn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ke.get(W).__webglTexture,Te,Yt+Yn)),F.blitFramebuffer(it,et,Ne,Oe,yt,St,Ne,Oe,F.DEPTH_BUFFER_BIT,F.NEAREST);je.bindFramebuffer(F.READ_FRAMEBUFFER,null),je.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||ke.has(R)){const Pn=ke.get(R),nn=ke.get(W);je.bindFramebuffer(F.READ_FRAMEBUFFER,yr),je.bindFramebuffer(F.DRAW_FRAMEBUFFER,mo);for(let wn=0;wn<Be;wn++)Ht?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pn.__webglTexture,j,Xe+wn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Pn.__webglTexture,j),Vn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,nn.__webglTexture,Te,Yt+wn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,nn.__webglTexture,Te),j!==0?F.blitFramebuffer(it,et,Ne,Oe,yt,St,Ne,Oe,F.COLOR_BUFFER_BIT,F.NEAREST):Vn?F.copyTexSubImage3D(mn,Te,yt,St,Yt+wn,it,et,Ne,Oe):F.copyTexSubImage2D(mn,Te,yt,St,it,et,Ne,Oe);je.bindFramebuffer(F.READ_FRAMEBUFFER,null),je.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Vn?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(mn,Te,yt,St,Yt,Ne,Oe,Be,at,qe,At.data):W.isCompressedArrayTexture?F.compressedTexSubImage3D(mn,Te,yt,St,Yt,Ne,Oe,Be,at,At.data):F.texSubImage3D(mn,Te,yt,St,Yt,Ne,Oe,Be,at,qe,At):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Te,yt,St,Ne,Oe,at,qe,At.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Te,yt,St,At.width,At.height,at,At.data):F.texSubImage2D(F.TEXTURE_2D,Te,yt,St,Ne,Oe,at,qe,At);F.pixelStorei(F.UNPACK_ROW_LENGTH,Tt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,qn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Li),F.pixelStorei(F.UNPACK_SKIP_ROWS,Gn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,xn),Te===0&&W.generateMipmaps&&F.generateMipmap(mn),je.unbindTexture()},this.copyTextureToTexture3D=function(R,W,ie=null,ae=null,j=0){return vu('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,W,ie,ae,j)},this.initRenderTarget=function(R){ke.get(R).__webglFramebuffer===void 0&&O.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?O.setTextureCube(R,0):R.isData3DTexture?O.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?O.setTexture2DArray(R,0):O.setTexture2D(R,0),je.unbindTexture()},this.resetState=function(){H=0,B=0,Y=null,je.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Dt._getUnpackColorSpace()}}function Nx(){const[a,e]=le.useState({width:window.innerWidth,height:window.innerHeight});return le.useEffect(()=>{function i(){e({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}},[]),a}const Ru="https://github.com/jayhcrawford",Pp="https://www.instagram.com/jaycraw1_",Sl="https://www.linkedin.com/in/jay-crawford-prod/",na="Cal Sans",hr="Oswald",ea="Arial, sans",BA=1e3,N_="Full Stack Developer & SaaS Founder",bl="Jay H. Crawford",xu="65",hl="opacity-65 font-bold text-white",lo=a=>S.jsx(S.Fragment,{children:S.jsxs("div",{className:"text-white mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10 py-8",children:[a.construction==!0&&S.jsx("div",{className:"flex justify-center mb-10",children:S.jsxs("div",{className:"flex flex-col",children:[S.jsx("div",{className:"flex justify-center",children:S.jsx("div",{className:"h-40 w-40",children:S.jsx("img",{src:"/under_construction.svg"})})}),S.jsx("p",{className:"inline-block bg-red-500 rounded-xl text-center font-extrabold text-4xl",children:"This section is under construction"})]})}),S.jsx("h1",{style:{fontFamily:hr},id:"blog_header",className:"text-5xl text-white font-extrabold pb-10 ",children:a.title}),S.jsx("div",{className:"p-4 sm:p-6 lg:p-8",style:{backgroundColor:"#0b0f17",borderRadius:"20px"},children:a.children})]})}),co="text-[#CCCFD9]",Nn=({children:a,align:e="center",className:i})=>{const s={left:"text-left",center:"text-center",right:"text-right"};return S.jsx("p",{className:`${s[e]} text-xs uppercase tracking-[0.4em] ${co} ${i??""}`.trim(),children:a})},Ri=({children:a,tone:e="solid",className:i})=>{const s=e==="glass"?"border border-white/20 bg-slate-800/40 backdrop-blur":"border border-white/10 bg-slate-900/40";return S.jsx("div",{className:`rounded-2xl p-6 ${s} ${i??""}`.trim(),children:a})},Ai=({src:a,alt:e,variant:i="full",figureLabel:s,figureCaption:l,imgClassName:c,figureMarginClassName:f="my-8",figcaptionClassName:h,withMatte:p=!1,matteClassName:m})=>{const v=!!(s||l),g={full:"w-full max-w-4xl",half:"mx-auto w-full sm:w-3/4 lg:w-1/2",centered:"mx-auto w-full sm:w-3/4 lg:w-2/3",quarter:"mx-auto w-full sm:w-1/2 lg:w-1/4"},x=S.jsx("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:S.jsx("img",{src:a,alt:e,className:`${g[i]} ${c??""}`.trim()})});return S.jsxs("figure",{className:`flex flex-col justify-center ${f}`,children:[p?S.jsx("div",{className:`rounded-2xl border border-3 border-white/20 bg-white/5 p-10 ${m??""}`.trim(),children:x}):x,v&&S.jsxs("figcaption",{className:`mt-2 text-center text-sm ${h??"text-gray-300"}`.trim(),children:[s&&S.jsx("span",{className:"font-semibold",children:s}),l&&S.jsx("span",{className:s?"ml-2":"",children:l})]})]})},no=({href:a,label:e,newTab:i=!0})=>S.jsx("a",{href:a,target:i?"_blank":void 0,rel:i?"noopener noreferrer":void 0,className:"inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/90 bg-white/70 px-6 py-3 text-sm font-semibold tracking-wide text-slate-900 text-center backdrop-blur-sm transition hover:bg-white/90 hover:border-white hover:text-slate-900 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]",children:e}),Ot=({children:a,className:e})=>S.jsx("section",{className:"mt-0",style:{fontFamily:ea},children:S.jsx("p",{className:`text-lg leading-relaxed text-slate-200 mt-5 ${e??""}`.trim(),children:a})}),pr=a=>{const e={compact:"text-2xl sm:text-4xl lg:text-5xl font-light text-center p-4 sm:p-6 pb-8 leading-snug",balanced:"text-3xl sm:text-5xl lg:text-6xl font-light text-center p-6 sm:p-8 pb-10 sm:pb-14 leading-tight",hero:"text-4xl sm:text-6xl xl:text-7xl font-light text-center p-6 sm:p-10 pb-12 leading-tight"};return S.jsxs("section",{id:"Blog_heroQuote",className:`${e[a.sizePreset??"hero"]}`,style:{fontFamily:hr},children:[S.jsx("style",{children:`
                        #Blog_heroQuoteQuoter::before {
                            content: "- "; /* or content: "&copy;"; */
                        }
                `}),S.jsxs("p",{children:[a.quote,a.quoter?S.jsx("span",{id:"Blog_heroQuoteQuoter",className:`block text-center pt-4 ml-${a.quoter_padding}`,children:a.quoter}):null]})]})},zA=[{label:"Now",items:["Engineering student at LACC","BuildLACCD intern","UrFriends dev"]},{label:"Roots",items:["BFA from SAIC","Lexington-born","multidisciplinary maker"]},{label:"Range",items:["Construction ops","hospitality leadership","art direction","software"]}],IA=["Designing community-driven software","Digitizing workflows","Making data feel human","Creativity","Exploring and learning"],FA=[{title:"Creative Tools",tools:["Photoshop","Illustrator","Maya","Blender","Fusion 360","SOLIDWORKS"]},{title:"Programming / Languages",tools:["TypeScript","JavaScript","Python","C++","Powershell","SQL"]},{title:"Web Dev & Platforms",tools:["Next.js","Firebase","Stripe","Vercel","Render","Tailwind"]},{title:"AI Tools",tools:["Gemini","Copilot","ChatGPT","Codex","OpenClaw","OpenAI API","Claude"]}],Xs="text-[#CCCFD9]",HA=()=>S.jsxs(lo,{title:"About",construction:!1,children:[S.jsxs("style",{children:[`
        /* Custom scrollbar styles */
        `,"`"]}),S.jsx("div",{className:"relative flex items-center justify-center rounded-2xl border border-dashed border-white/20 bg-slate-800/40 p-6 text-center",children:S.jsxs("div",{children:[S.jsx("p",{className:`text-sm uppercase tracking-[0.3em] ${Xs}`,children:"Portrait Placeholder"}),S.jsx("p",{className:"mt-3 text-xl font-semibold text-white",children:"Drop a high-contrast photo here"}),S.jsx("p",{className:"mt-2 text-sm text-slate-300",children:"Suggested: clean lighting, subtle gradient background, confident but relaxed posture."})]})}),S.jsxs("div",{className:"space-y-16 text-slate-100",children:[S.jsx("section",{className:"grid gap-10 rounded-2xl p-8 lg:grid-cols-[3fr,2fr]",children:S.jsxs("div",{className:"space-y-6",children:[S.jsx("p",{className:`text-center text-sm uppercase tracking-[0.3em] ${Xs}`,children:"Designer · Builder · Storyteller"}),S.jsxs("h1",{className:"text-4xl font-semibold leading-tight text-white sm:text-5xl mt-10 mb-10",children:["Context-switching between ",S.jsx("strong",{children:"construction sites"}),", ",S.jsx("strong",{children:"code editors"}),", and ",S.jsx("strong",{children:"sketchbooks"})," is my normal."]}),S.jsxs(Ot,{children:["I grew up in Kentucky, cut my teeth in ",S.jsx("strong",{children:"art school"})," at SAIC, and moved to Los Angeles in 2017 to pursue dreams; ",S.jsx("i",{children:"LA has become home now. "}),"The city's beauty, its diversity, the weather, the culture, I love what it has to offer here  — here I've worked across specialty construction, hospitality, and entertainment. Today I split my time between BuildLACCD ",S.jsx("strong",{children:"project management"}),", UrFriends",S.jsx("strong",{children:" full-stack development"}),", ",S.jsx("strong",{children:"engineering school"}),", my passion for the fitness & creativity."]}),S.jsxs("div",{className:"space-y-3 rounded-2xl border border-white/5 bg-white/5/20 mt-5 pt-1 p-6",children:[S.jsx("p",{className:`text-xs uppercase tracking-[0.4em] pb-5 pt-5 ${Xs}`,children:"What Drives Me"}),S.jsx("div",{className:"flex flex-wrap gap-3",children:IA.map(a=>S.jsx("span",{className:"rounded-full border border-white/10 bg-white/5 px-3 py-1 md:px-3 md:py-1 text-sm sm:px-4 sm:py-2",children:a},a))})]})]})}),S.jsx("section",{className:"grid gap-6 lg:grid-cols-3",children:zA.map(a=>S.jsxs("article",{className:"rounded-2xl border border-white/10 bg-slate-900/40 p-6 shadow-lg shadow-black/20",children:[S.jsx("p",{className:`text-xs uppercase tracking-[0.4em] ${Xs}`,children:a.label}),S.jsx("ul",{className:"mt-3 space-y-2",children:a.items.map(e=>S.jsxs("li",{className:"text-lg font-semibold text-white flex items-start",children:[S.jsx("span",{className:"mr-3",children:"•"}),S.jsx("span",{children:e})]},e))})]},a.label))}),S.jsxs("section",{className:"space-y-6 text-lg leading-relaxed text-slate-200",children:[S.jsxs(Ot,{children:["I thrive where ",S.jsx("strong",{children:"hands-on execution"})," meets ",S.jsx("strong",{children:"polished storytelling"}),". I have ",S.jsx("strong",{children:S.jsx("a",{href:Sl,target:"_blank",className:"hover:text-white/80 transition-colors",children:S.jsx("u",{children:"managed multimillion-dollar campus upgrades"})})}),", ",S.jsx("strong",{children:S.jsx("a",{href:"/projects/urfriends",className:"hover:text-white/80 transition-colors",children:S.jsx("u",{children:"shipped SaaS products"})})}),", led hospitality teams, fabricated sets for film & TV, and still carve out time to paint, sketch, and cycle the Los Angeles river paths. Fitness is a huge passion of mine, especially running and cycling. As a runner, I love the distance and concentration, and as a cyclist I love the freedom. Each lane teaches me to stay calm, design deliberately, and communicate with clarity — and in every world thoughts of finding cross-pollination drive my imagination wild! I'm always looking for new ways to learn."]}),S.jsxs(Ot,{children:["Engineering school sharpened my math and systems thinking; art school wired me to experiment without fear; years in hospitality taught me to keep people seen and to communicate ",S.jsx("i",{children:"thoroughly"}),". School in STEM has been extremely rewarding — it has exposed me to tools that I've used for refining and analyzing",S.jsx("strong",{children:S.jsxs("a",{href:"/projects/ripsheet",className:"hover:text-white/80 transition-colors",children:[" ",S.jsx("u",{children:"personal fitness systems"})]})}),", allowed me to tutor fellow students at MESA; I've celebrated and philosophized in the Human Computer Interaction Club, helped organize a hackathon, I've gone from 'self-taught' programmer to someone who understands computer science paradigms, and become ",S.jsx("i",{children:"actually"})," kind of fascinated by math."]}),S.jsx(Ot,{children:`When I am not laboring (with love ofc), you will find me studying new fabrication techniques, spelunking the wiki of my latest fascination, long-distance or trail running, homecanning beans (they're SO good), riding my bike around LA, going to an art museum, or tinkering creatively. I'm big on "hippie" type stuff, get way into reading about present and future green-tech, and resonate with preserving the environment — you may spot me using a bicycle or public transit.`}),S.jsx(Ot,{children:"I still say yes to the weird gigs — they keep me humble and curious."})]}),S.jsxs("section",{className:"space-y-8 rounded-2xl border border-white/10 bg-slate-900/40 p-6",children:[S.jsx("div",{className:"flex items-baseline justify-between",children:S.jsx("h2",{className:"text-2xl font-semibold text-white",children:"Digital skills"})}),S.jsx("div",{className:"space-y-6",children:FA.map(a=>S.jsxs("div",{className:"space-y-3",children:[S.jsx("p",{className:`text-s uppercase tracking-[0.4em]  p-5 text-center font-bold ${Xs}`,children:a.title}),S.jsx("div",{className:"grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4",children:a.tools.map(e=>{const s={Photoshop:"photoshop_logo_40pt.svg",Illustrator:"illustrator_logo_40pt.svg",Maya:"maya_logo_40pt.svg",Blender:"blender_logo_40pt.svg","Fusion 360":"fusion_logo_40pt.svg",SOLIDWORKS:"solidworks_logo_40pt.svg",TypeScript:"typescript_logo_40pt.svg",JavaScript:"javascript_logo_40pt.svg",Python:"python_logo_40pt.svg","C++":"cpp_logo_40pt.svg",Powershell:"powershell_logo_40pt.svg",SQL:"sql_logo_40pt.svg",Firebase:"firebase_logo_40pt.svg","Next.js":"next_logo_40pt.svg",Stripe:"stripe_logo_40pt.svg",Tailwind:"tailwind_logo_40pt.svg",Vercel:"vercel_logo_40pt.svg",Render:"render_logo_40pt.svg",Gemini:"gemini_logo_40pt.svg",Copilot:"copilot_logo_40pt.svg",ChatGPT:"chatgpt_logo_40pt.svg",Codex:"codex_logo_40pt.svg",OpenClaw:"openclaw_logo_40pt.svg","OpenAI API":"openai_logo_40pt.svg",Claude:"claude_logo_40pt.svg"}[e];return S.jsxs("div",{className:"flex flex-col items-center gap-2 text-center",children:[S.jsx("div",{className:`flex h-16 w-16 items-center justify-center rounded-full text-xs uppercase tracking-wide text-slate-400 ${s?"":"border border-white/15 bg-slate-800/60"}`,children:s?S.jsx("img",{src:`/${s}`,alt:`${e} logo`,className:"h-16 w-16"}):"Logo"}),S.jsx("p",{className:"text-sm font-medium text-white",children:e})]},e)})})]},a.title))})]}),S.jsxs("section",{className:`flex flex-col items-center gap-4 rounded-2xl border border-white/20 bg-slate-800/40 px-6 py-5 text-sm ${Xs}`,children:[S.jsx("p",{className:"text-xs uppercase tracking-[0.4em]",children:"Next steps"}),S.jsxs("div",{className:"flex flex-col gap-3 text-base text-slate-100",children:[S.jsxs("p",{className:"text-center",children:["I love ",S.jsx("strong",{children:"building"})," and ",S.jsx("strong",{children:"creating"}),", and if you can use my help, ",S.jsx("strong",{children:"please reach out!"})]}),S.jsx(no,{href:"/contact",label:"Open Contact Page",newTab:!1})]})]})]})]}),GA=()=>S.jsx("div",{className:"text-white",style:{fontFamily:ea},children:S.jsx("div",{className:"mx-auto w-full max-w-6xl px-6 py-20",children:S.jsxs("div",{className:"grid gap-10 md:grid-cols-2 md:items-center",children:[S.jsxs("div",{children:[S.jsx("p",{className:"uppercase tracking-[0.3em] text-sm opacity-70",children:"Contact"}),S.jsx("h1",{style:{fontFamily:na},className:"text-4xl md:text-6xl font-bold mt-4",children:"Let's build something bold."}),S.jsx("p",{className:"mt-4 text-lg opacity-80 max-w-xl",children:"Reach out for collaborations, commissions, or just to say hello. I'm based in Los Angeles and always open to new ideas."}),S.jsxs("div",{className:"mt-8 flex flex-col sm:flex-row gap-4",children:[S.jsx("a",{href:"mailto:jayhcrawford@gmail.com",className:"inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:border-white hover:bg-white/10",children:"Email Me"}),S.jsx("a",{href:Sl,target:"new",className:"inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:border-white hover:bg-white/10",children:"LinkedIn"})]})]}),S.jsxs("div",{className:"rounded-2xl border border-white/20 bg-white/5 p-8 backdrop-blur",children:[S.jsx("p",{className:"text-sm uppercase tracking-[0.3em] opacity-70",children:"Direct"}),S.jsx("h2",{style:{fontFamily:na},className:"text-3xl font-semibold mt-3",children:bl}),S.jsx("p",{className:"opacity-80 mt-2",children:"Los Angeles, CA"}),S.jsxs("div",{className:"mt-6",children:[S.jsx("p",{className:"text-sm uppercase tracking-[0.3em] opacity-70",children:"Email"}),S.jsx("a",{className:"text-lg font-semibold hover:underline",href:"mailto:jayhcrawford@gmail.com",children:"jayhcrawford@gmail.com"})]}),S.jsxs("div",{className:"mt-6",children:[S.jsx("p",{className:"text-sm uppercase tracking-[0.3em] opacity-70",children:"Social"}),S.jsxs("div",{className:"mt-3 flex flex-wrap gap-4 text-sm",children:[S.jsx("a",{className:"hover:underline",href:Sl,target:"new",children:"LinkedIn"}),S.jsx("a",{className:"hover:underline",href:Pp,target:"new",children:"Instagram"}),S.jsx("a",{className:"hover:underline",href:Ru,target:"new",children:"Github"})]})]})]})]})})}),VA=a=>S.jsxs(S.Fragment,{children:[a.url==""&&S.jsx("div",{id:"this_one",className:"h-30 w-30 absolute",children:S.jsx("img",{src:"/under_construction.svg"})}),S.jsx("div",{style:{boxShadow:"5px 5px 5px rgba(0, 0, 0, 1)"},className:"gridPhoto_Image_container w-80 h-60",children:S.jsx("img",{className:"rounded-lg w-80 h-60",style:{objectFit:"cover"},src:a.img})})]}),kA=a=>{const[e,i]=le.useState(!1);return S.jsx("div",{onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:S.jsx(Qr,{id:"",to:a.url?a.url:"",children:S.jsx("div",{className:"gridPhoto_container p-1 m-2 flex justify-center",children:S.jsxs("div",{className:`gridPhoto_item_container m-2 inline ${a.url==""&&"cursor-not-allowed"}`,children:[S.jsx("style",{children:`
                .gridPhoto_item_container:hover {
                  text-decoration: dotted;
                }
                .gridPhoto_item_container {
                  text-decoration: dotted;
                }
              `}),S.jsx("div",{className:"relative",children:S.jsxs("div",{className:" h-full w-full relative z-100",children:[S.jsx("div",{className:`${a.url==""&&e?"absolute":"hidden"} w-full absolute text-white font-black bg-red-600 top-[120px] p-4 text-center`,children:"Under Construction"}),S.jsx(VA,{img:a.img,url:a.url})]})}),S.jsx("div",{children:S.jsx("h4",{style:{fontFamily:na},className:"text-2xl text-white p-4 abt_gridPhotoItem",children:a.title})})]})})})})},Lx=a=>{const e=()=>a.width<2e3?"w-full":"w-[60%]",i=()=>a.width<750?"grid-cols-1":"grid-cols-2";return S.jsx("div",{id:"grid_container",className:`grid ${e()} ${i()}`,children:a.categories.map((s,l)=>S.jsx("span",{children:S.jsx(kA,{title:s.category,img:s.img,url:s.url?s.url:""})},`${l}-${s.category}`))})},jA=a=>S.jsx(Lx,{width:a.width,categories:a.category_array}),XA=a=>{const e=new Date().getFullYear();return a.path=="/"?S.jsx("footer",{style:{fontFamily:na},className:""}):S.jsxs("footer",{style:{fontFamily:na},className:" text-white mx-auto w-full p-4 py-6",children:[S.jsx("style",{children:`
            .footer_links {
              margin-bottom: 2em;
            }
            .footer_links li {
              margin-bottom: .2em;
            }
            .footer_linkes_transp {
            opacity: ${xu}%;
            }
            
            .footer_links li:hover {
            text-decoration: underline;
            opacity: 100%;
            }`}),S.jsxs("div",{id:"footer_content",children:[S.jsxs("div",{className:"md:flex md:justify-between",children:[S.jsx("div",{className:"",children:S.jsx("ul",{className:"footer_links text-md text-left",children:S.jsx("li",{children:S.jsxs("a",{href:"mailto:jayhcrawford@gmail.com",children:[S.jsx("p",{className:"font-bold",children:bl}),S.jsxs("span",{className:"footer_linkes_transp font-normal",style:{fontFamily:ea},children:[S.jsx("p",{children:"Los Angeles, CA"}),S.jsx("p",{children:"jayhcrawford@gmail.com"})]})]})})})}),S.jsxs("div",{className:"grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 text-left",children:[S.jsxs("div",{children:[S.jsx("h2",{className:"text-sm font-bold uppercase",children:"Social"}),S.jsxs("ul",{id:"footer_social",style:{fontFamily:ea},className:"footer_links footer_linkes_transp font-medium mt-3 mb-10",children:[S.jsx("style",{children:`
                      #footer_social li {
                        
                      }
                    `}),S.jsx("li",{children:S.jsx("a",{href:Sl,target:"new",className:"hover:underline",children:"LinkedIn"})}),S.jsx("li",{className:"",children:S.jsx("a",{href:Pp,target:"new",className:"hover:underline",children:"Instagram"})}),S.jsx("li",{children:S.jsx("a",{href:Ru,target:"new",className:"hover:underline",children:"Github"})})]})]}),S.jsx("div",{})]})]}),S.jsxs("div",{className:"sm:flex sm:items-center sm:justify-between",children:[S.jsxs("span",{style:{fontFamily:ea},className:`font-normal text-sm text-white opacity-${xu} sm:text-center`,children:[e," - ",bl]}),S.jsx("div",{className:"flex mt-4 sm:justify-center sm:mt-0",children:S.jsxs("a",{href:Ru,target:"new",className:`opacity-${xu} hover:opacity-100 hover:white ms-5`,children:[S.jsx("svg",{className:"w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:S.jsx("path",{fillRule:"evenodd",d:"M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z",clipRule:"evenodd"})}),S.jsx("span",{className:"sr-only",children:"GitHub account"})]})})]})]})]})},WA=a=>S.jsx("div",{className:"social_brick_icon_container",style:{width:"150px"},children:S.jsxs("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 40",className:"social-svg",children:[S.jsx("defs",{children:S.jsx("style",{children:`
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
                    `})}),a.name=="Tiktok"&&S.jsx("path",{className:"social_icon_fg",d:"M34.41,10.31c-3.78-.81-6.59-3.98-6.95-7.82v-.81h-6.35v25.2c-.01,2.95-2.41,5.33-5.36,5.32-1.66,0-3.22-.78-4.23-2.11h0s0,0,0,0c-1.78-2.35-1.33-5.69,1.02-7.48,1.38-1.05,3.19-1.36,4.85-.84v-6.45c-6.38-.88-12.27,3.58-13.15,9.96-.49,3.57.69,7.17,3.21,9.75,4.5,4.61,11.89,4.69,16.5.19,2.25-2.2,3.51-5.2,3.51-8.34v-12.88c2.57,1.83,5.64,2.82,8.8,2.81v-6.31c-.62,0-1.24-.06-1.85-.19h0Z"}),a.name=="Instagram"&&S.jsx("path",{className:"social_icon_fg",d:"M12.23,1.12C6.1,1.12,1.11,6.1,1.11,12.23v15.39c0,6.13,4.99,11.12,11.12,11.12h15.39c6.13,0,11.12-4.99,11.12-11.12v-15.39c0-6.13-4.99-11.12-11.12-11.12h-15.39ZM12.23,2.83h15.39c5.2,0,9.41,4.2,9.41,9.41v15.39c0,5.2-4.2,9.41-9.41,9.41h-15.39c-5.2,0-9.41-4.2-9.41-9.41v-15.39C2.82,7.03,7.02,2.83,12.23,2.83ZM30.18,7.96c-.94,0-1.71.77-1.71,1.71s.77,1.71,1.71,1.71,1.71-.77,1.71-1.71-.77-1.71-1.71-1.71ZM19.92,10.52c-5.19,0-9.41,4.22-9.41,9.41s4.22,9.41,9.41,9.41,9.41-4.22,9.41-9.41-4.22-9.41-9.41-9.41ZM19.92,12.23c4.26,0,7.7,3.44,7.7,7.7s-3.44,7.7-7.7,7.7-7.7-3.44-7.7-7.7,3.44-7.7,7.7-7.7Z"}),a.name=="Discord"&&S.jsx("path",{className:"social_icon_fg",d:"M33.35,7.61c-2.49-1.16-5.15-2.01-7.93-2.49-.34.62-.74,1.45-1.02,2.11-2.96-.44-5.89-.44-8.79,0-.28-.66-.68-1.49-1.03-2.11-2.79.48-5.45,1.33-7.94,2.5C1.62,15.2.26,22.6.94,29.89c3.33,2.49,6.56,4,9.73,4.99.78-1.08,1.48-2.22,2.08-3.43-1.15-.44-2.24-.97-3.28-1.6.28-.2.54-.42.8-.64,6.33,2.96,13.2,2.96,19.45,0,.26.22.53.43.8.64-1.04.63-2.14,1.16-3.29,1.6.6,1.2,1.3,2.35,2.08,3.43,3.18-.99,6.41-2.5,9.74-4.99.8-8.45-1.36-15.79-5.72-22.28h0ZM13.61,25.41c-1.9,0-3.46-1.77-3.46-3.93s1.52-3.94,3.46-3.94,3.49,1.77,3.46,3.94c0,2.16-1.52,3.93-3.46,3.93ZM26.39,25.41c-1.9,0-3.46-1.77-3.46-3.93s1.52-3.94,3.46-3.94,3.49,1.77,3.46,3.94c0,2.16-1.52,3.93-3.46,3.93Z"}),a.name=="Github"&&S.jsx("path",{className:"social_icon_fg",d:"M19.9,1.55C9.52,1.55,1.12,10.01,1.12,20.47c0,8.36,5.38,15.44,12.84,17.95.93.19,1.27-.41,1.27-.91,0-.44-.03-1.94-.03-3.51-5.22,1.13-6.31-2.26-6.31-2.26-.84-2.19-2.08-2.76-2.08-2.76-1.71-1.16.12-1.16.12-1.16,1.9.13,2.89,1.94,2.89,1.94,1.68,2.88,4.38,2.07,5.47,1.57.16-1.22.65-2.07,1.18-2.54-4.17-.44-8.55-2.07-8.55-9.33,0-2.07.75-3.76,1.93-5.07-.19-.47-.84-2.41.19-5.01,0,0,1.59-.5,5.16,1.94,1.53-.41,3.11-.62,4.7-.63,1.59,0,3.2.22,4.69.63,3.58-2.44,5.16-1.94,5.16-1.94,1.03,2.6.37,4.54.19,5.01,1.21,1.32,1.93,3.01,1.93,5.07,0,7.27-4.38,8.86-8.58,9.33.68.6,1.27,1.72,1.27,3.51,0,2.54-.03,4.57-.03,5.2,0,.5.34,1.1,1.27.91,7.46-2.51,12.84-9.59,12.84-17.95.03-10.46-8.4-18.92-18.75-18.92Z"})]})}),qA=()=>{const a=[{name:"Instagram",url:Pp},{name:"Github",url:Ru}];return S.jsx("div",{className:"socialbrick-outer",children:S.jsxs("div",{className:"socialbrick-inner",children:[S.jsx("style",{children:`
                        .glow-button:hover svg {
                            filter: drop-shadow(0 0 10px rgba(255, 255, 255, .5)) drop-shadow(0 0 10px rgba(255, 255, 255, .5));
                        }
                        .glow-button:active svg {
                            filter: none;
                        }
                    `}),a.map((e,i)=>S.jsx("a",{"aria-label":`Our ${e.name}`,href:e.url,target:"_blank",className:"glow-button socialbrick-link",children:S.jsx(WA,{name:e.name})},i))]})})};function YA(a){return a?a.toLowerCase().split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "):""}const Ws=()=>S.jsx("span",{className:`${hl} ml-5 mr-5`,children:"|"}),fr=a=>S.jsx("li",{style:{transition:"opacity .1s .1s"},className:`outline_nav_elem_text ${hl} hover:underline hover:opacity-100`,children:S.jsxs(Qr,{to:`/${a.name}`,children:[S.jsx("style",{children:`


        `}),YA(a.name)]})}),ZA=a=>a.path=="/"?S.jsxs(S.Fragment,{children:[S.jsx("nav",{className:"z-10 w-ful",children:S.jsxs("ul",{style:{fontFamily:hr},className:"list-none p-0 pb-4 m-0 flex justify-center text-xl sm:text-3xl md:text-5xl",children:[S.jsx(fr,{name:"about"}),S.jsx(Ws,{}),S.jsx(fr,{name:"art"}),S.jsx(Ws,{}),S.jsx(fr,{name:"projects"}),S.jsx(Ws,{}),S.jsx(fr,{name:"contact"})]})}),S.jsxs("header",{style:{marginBottom:"70px"},children:[S.jsx("h1",{className:"text-center text-white",style:{fontFamily:na,fontSize:a.width<500?"3rem":"6rem",fontWeight:"bold"},children:bl}),S.jsx("p",{className:`${hl} text-5xl text-center`,style:{fontFamily:hr},children:S.jsx("span",{children:N_})}),S.jsx("p",{style:{fontFamily:ea},className:`text-center p-4 ${hl} text-3xl`,children:"Los Angeles, CA"}),S.jsx(qA,{})]})]}):S.jsxs(S.Fragment,{children:[S.jsx("nav",{className:"z-10 w-full mb-5",children:S.jsxs("ul",{style:{fontFamily:hr},className:"list-none p-0 m-0 flex sm:text-2xl md:text-5xl",children:[S.jsx(fr,{name:"about"}),S.jsx(Ws,{}),S.jsx(fr,{name:"art"}),S.jsx(Ws,{}),S.jsx(fr,{name:"projects"}),S.jsx(Ws,{}),S.jsx(fr,{name:"contact"})]})}),S.jsxs("header",{style:{marginBottom:"70px"},children:[S.jsx(Qr,{to:"/",children:S.jsx("h1",{className:"text-white",style:{fontFamily:na,fontSize:a.width<500?"1rem":"2rem",fontWeight:"bold"},children:bl})}),S.jsx("p",{className:`${hl} text-3xl text-left`,style:{fontFamily:hr},children:N_})]})]}),KA=()=>S.jsx("img",{className:"w-30",src:"/LinkedIn_Logo.svg",alt:"LinkedIn logo"}),QA=a=>{let e="";const i=new Map(a.locationData.map(l=>[l.url.replace(/^\//,""),l.title])),s=l=>l.replace(/[_-]/g," ").trim().split(" ").filter(Boolean).map(f=>f.charAt(0).toUpperCase()+f.slice(1)).join(" ");return S.jsxs(S.Fragment,{children:[S.jsx("style",{children:`
        #location-bar {
        }

        .location-bar-bttn {
          font-family: ${hr};
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

    `}),S.jsx("div",{id:"location-bar",children:a.split().map((l,c)=>{e+="/"+l;const f=i.get(l)??s(l);return S.jsxs("span",{children:[S.jsx(Qr,{to:e,children:S.jsx("button",{className:"location-bar-bttn",children:f})}),c<a.split().length-1&&S.jsx("span",{className:"location-bar-arrow",children:">"})]},`${c}-location`)})})]})},JA=()=>S.jsxs("svg",{id:"Layer_6","data-name":"Layer 6",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 1050 990",children:[S.jsx("defs",{children:S.jsx("style",{children:`
      .cls-1 {
        fill: #0e1a34;
      }

      .cls-2 {
        fill: #0b0f17;
      }

      .cls-3 {
        fill: #1e2b5a;
      }
      `})}),S.jsx("image",{width:"149",height:"149",transform:"translate(-50, -50) scale(9.2)",xlinkHref:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAACVCAYAAABRorhPAAAACXBIWXMAAAGJAAABiQGeLhE1AAABlklEQVR4nO3SoRGDAAAEQcBGIOm/PCQCHQoI8iYEsitfvbhhAAAAfs54Nr7m5f3tI9zTvq0fDU1XHOHZREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5EQFAADwDw4ePAUWKoYQ6wAAAABJRU5ErkJggg=="}),S.jsx("polygon",{className:"cls-3",transform:"translate(-20,0)",points:"1103.99 82.8 1103.99 967.01 1089.6 968.46 1089.61 960.77 1081.92 960.78 1081.93 954.05 1075.2 954.07 1075.21 946.38 1060.81 946.38 1060.82 939.66 1054.03 939.25 1053.14 931.98 1046.41 932 1046.42 925.27 1032.02 925.27 1032.03 917.59 1024.34 917.6 1024.35 910.87 1010.85 910.46 1009.95 903.2 995.56 903.2 995.56 896.48 982.06 896.07 981.17 888.81 974.44 888.82 974.45 882.09 960.05 882.09 960.05 874.42 945.66 874.42 945.66 867.7 925.03 867.7 923.59 860.02 909.19 860.02 909.19 853.31 888.08 853.31 888.08 845.63 873.69 845.63 873.69 838.91 844.9 838.91 844.9 831.24 816.11 831.24 816.11 824.52 766.69 824.52 765.25 816.85 707.68 816.85 707.68 824.52 664.49 824.52 664.49 831.24 628.99 831.24 627.55 838.91 600.2 838.91 600.2 845.63 571.41 845.63 569.97 853.31 542.62 853.31 542.62 860.02 513.84 860.02 512.4 867.7 485.05 867.7 485.05 874.42 456.26 874.42 454.82 882.09 427.47 882.09 427.47 888.81 405.4 888.81 405.4 896.49 376.61 896.49 376.61 903.2 347.82 903.2 347.82 910.88 326.71 910.88 326.71 917.6 297.92 917.6 296.49 925.27 269.14 925.27 269.14 931.99 247.07 931.99 247.07 939.67 218.28 939.67 218.28 946.38 197.17 946.38 195.73 954.06 175.09 954.06 175.09 960.78 146.31 960.78 146.31 968.45 125.2 968.45 125.2 975.17 96.41 975.17 94.97 982.85 74.34 982.85 74.34 989.56 53.22 989.56 51.79 997.24 31.15 997.24 31.15 1003.96 16.76 1003.96 16.76 788.06 10.04 788.06 10.04 148.05 37.39 148.05 38.83 140.37 67.62 140.37 67.62 133.65 103.12 133.65 103.12 125.98 131.91 125.98 131.91 119.26 175.09 119.26 175.09 111.58 218.28 111.58 218.28 104.87 384.29 104.87 384.29 111.58 413.08 111.58 413.08 119.26 427.47 119.26 427.47 125.98 448.58 125.98 449.48 133.23 462.98 133.65 462.98 140.37 477.37 140.37 478.27 147.63 485.05 148.04 485.05 154.76 499.44 154.76 499.44 162.44 513.84 162.44 513.83 169.16 520.56 169.15 521.45 176.41 534.95 176.83 534.94 183.55 542.63 183.54 542.62 191.23 557.02 191.23 557.01 197.95 563.74 197.94 564.64 205.2 578.14 205.61 578.13 212.34 592.52 212.34 593.42 219.59 606.92 220.01 606.92 226.73 628.99 226.73 628.99 234.4 713.91 234.4 715.35 226.73 744.14 226.73 744.14 220.01 771.49 220.01 772.93 212.34 794.04 212.34 794.04 205.62 814.67 205.62 816.11 197.94 837.22 197.94 837.22 191.23 857.86 191.23 859.3 183.55 873.69 183.55 873.69 176.83 894.8 176.83 894.8 169.16 909.19 169.16 909.19 162.44 929.83 162.44 931.27 154.76 945.66 154.76 945.65 148.04 959.15 147.63 960.05 140.37 981.17 140.37 981.17 133.65 995.56 133.65 995.56 125.98 1009.95 125.98 1009.95 119.26 1024.35 119.26 1024.35 111.58 1038.74 111.58 1038.74 104.87 1053.14 104.87 1053.14 97.19 1067.53 97.19 1067.53 90.47 1081.92 90.47 1081.92 82.8 1103.99 82.8"}),S.jsx("polygon",{className:"cls-1",transform:"translate(-20,0)",points:"472.49 231.55 472.49 238.74 508.47 238.74 508.47 245.94 537.26 245.94 537.26 253.13 558.85 253.13 558.85 260.33 580.44 260.33 580.44 267.52 594.84 267.52 594.84 274.72 609.23 274.72 609.23 281.92 623.63 281.92 623.63 289.11 645.22 289.11 645.22 296.31 659.61 296.31 659.61 303.5 681.2 303.5 681.2 310.7 695.6 310.7 695.6 317.89 724.39 317.89 724.39 325.09 767.57 325.09 767.57 332.28 795.64 332.28 796.36 325.09 846.02 325.09 846.74 317.89 882 317.89 882.72 310.7 910.79 310.7 911.51 303.5 939.58 303.5 940.3 296.31 968.37 296.31 969.08 289.11 997.15 289.11 997.87 281.92 1018.74 281.92 1019.46 274.72 1047.53 274.72 1048.25 267.52 1069.12 267.52 1069.84 260.33 1090.71 260.33 1091.43 253.13 1105.83 253.13 1105.83 799.26 1105.11 799.98 1084.24 799.98 1084.24 792.79 1048.25 792.79 1048.25 785.59 997.87 785.59 997.87 778.4 933.1 778.4 933.1 771.2 789.16 771.2 788.44 778.4 738.78 778.4 738.06 785.59 695.6 785.59 694.88 792.79 645.22 792.79 644.5 799.98 602.04 799.98 601.32 807.18 558.85 807.18 558.13 814.37 515.67 814.37 514.95 821.57 472.49 821.57 471.77 828.77 429.31 828.77 428.59 835.96 393.32 835.96 392.6 843.16 350.14 843.16 349.42 850.35 306.96 850.35 306.24 857.55 270.97 857.55 270.25 864.74 227.79 864.74 227.07 871.94 191.8 871.94 191.08 879.13 148.62 879.13 147.9 886.33 112.64 886.33 111.92 893.52 76.65 893.52 75.93 900.72 33.47 900.72 32.75 907.91 11.88 907.91 11.88 274.72 18.87 274.27 19.08 267.52 61.54 267.52 62.26 260.33 104.72 260.33 105.44 253.13 147.9 253.13 148.62 245.94 198.28 245.94 199 238.74 255.86 238.74 256.58 231.55 472.49 231.55"}),S.jsx("polygon",{className:"cls-2",transform:"translate(-20,0)",points:"1108.35 316.15 1108.35 553.56 1101.15 553.56 1101.15 769.38 1086.76 769.38 1086.76 762.19 1050.77 762.19 1050.77 754.99 1021.98 754.99 1021.98 747.8 1000.39 747.8 1000.39 740.6 978.8 740.6 978.8 733.41 964.41 733.41 964.41 726.22 942.82 726.22 942.82 719.02 928.42 719.02 928.42 711.83 914.03 711.83 914.03 704.63 899.63 704.63 899.63 697.44 878.04 697.44 878.04 690.25 863.65 690.25 863.65 683.05 849.25 683.05 849.25 675.86 834.86 675.86 834.86 668.66 813.27 668.66 813.27 661.47 798.88 661.47 798.88 654.27 784.48 654.27 784.48 647.08 762.89 647.08 762.89 639.89 748.5 639.89 748.5 632.69 726.9 632.69 726.9 625.5 712.51 625.5 712.51 618.3 690.92 618.3 690.92 611.11 669.33 611.11 669.33 603.92 640.54 603.92 640.54 596.72 611.75 596.72 611.75 589.53 582.96 589.53 582.96 582.33 554.17 582.33 554.17 575.14 510.99 575.14 510.99 567.95 446.22 567.95 446.22 560.75 352.66 560.75 352.66 567.95 323.87 567.95 323.87 575.14 309.47 575.14 309.47 582.33 295.08 582.33 295.08 589.53 280.69 589.53 280.69 596.72 266.29 596.72 266.29 603.92 251.9 603.92 251.9 611.11 244.7 611.11 244.7 618.3 230.31 618.3 230.31 625.5 223.11 625.5 223.11 632.69 208.72 632.69 208.72 639.89 201.52 639.89 201.52 647.08 194.32 647.08 194.32 654.27 179.93 654.27 179.93 661.47 172.73 661.47 172.73 668.66 165.53 668.66 165.53 675.86 158.34 675.86 158.34 683.05 151.14 683.05 151.14 690.25 136.74 690.25 136.74 697.44 129.55 697.44 129.55 704.63 122.35 704.63 122.35 711.83 115.15 711.83 115.15 719.02 107.96 719.02 107.96 726.22 100.76 726.22 100.76 733.41 93.56 733.41 93.56 740.6 86.36 740.6 86.36 747.8 79.17 747.8 79.17 754.99 71.97 754.99 71.97 762.19 64.77 762.19 64.77 769.38 57.58 769.38 57.58 776.57 50.38 776.57 50.38 783.77 43.18 783.77 43.18 798.16 35.99 798.16 35.99 805.35 28.79 805.35 28.79 812.54 21.59 812.54 21.59 819.74 14.39 819.74 14.39 826.93 0 826.93 0 819.74 7.2 819.74 7.2 366.51 35.99 366.51 35.99 373.71 50.38 373.71 50.38 380.9 71.97 380.9 71.97 388.09 93.56 388.09 93.56 395.29 115.15 395.29 115.15 402.48 136.74 402.48 136.74 409.68 158.34 409.68 158.34 416.87 179.93 416.87 179.93 424.06 208.72 424.06 208.72 431.26 237.5 431.26 237.5 438.45 266.29 438.45 266.29 445.65 302.28 445.65 302.28 452.84 352.66 452.84 352.66 460.03 532.58 460.03 532.58 452.84 590.16 452.84 590.16 445.65 633.34 445.65 633.34 438.45 662.13 438.45 662.13 431.26 690.92 431.26 690.92 424.06 719.71 424.06 719.71 416.87 741.3 416.87 741.3 409.68 762.89 409.68 762.89 402.48 784.48 402.48 784.48 395.29 806.07 395.29 806.07 388.09 827.66 388.09 827.66 380.9 842.06 380.9 842.06 373.71 863.65 373.71 863.65 366.51 885.24 366.51 885.24 359.32 899.63 359.32 899.63 352.12 921.23 352.12 921.23 344.93 942.82 344.93 942.82 337.74 971.61 337.74 971.61 330.54 1000.39 330.54 1000.39 323.35 1043.58 323.35 1043.58 316.15 1108.35 316.15"})]});/**
 * postprocessing v6.39.0 build Fri Mar 20 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */var $A=(()=>{const a=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),i=new Pa;return i.setAttribute("position",new Ci(a,3)),i.setAttribute("uv",new Ci(e,2)),i})(),vi=class hp{static get fullscreenGeometry(){return $A}constructor(e="Pass",i=new Au,s=new Tx){this.name=e,this.renderer=null,this.scene=i,this.camera=s,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const i=this.fullscreenMaterial;i!==null&&(i.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let i=this.screen;i!==null?i.material=e:(i=new hi(hp.fullscreenGeometry,e),i.frustumCulled=!1,this.scene===null&&(this.scene=new Au),this.scene.add(i),this.screen=i)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,i=gr){}render(e,i,s,l,c){throw new Error("Render method not implemented!")}setSize(e,i){}initialize(e,i,s){}dispose(){for(const e of Object.keys(this)){const i=this[e];(i instanceof En||i instanceof ro||i instanceof Fn||i instanceof hp)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},eR=class extends vi{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(a,e,i,s,l){const c=a.state.buffers.stencil;c.setLocked(!1),c.setTest(!1)}},tR=`#ifdef COLOR_WRITE
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
}`,Bp="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",Ox=class extends Hn{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new Mt(null),depthBuffer:new Mt(null),channelWeights:new Mt(null),opacity:new Mt(1)},blending:Wn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:tR,vertexShader:Bp}),this.depthFunc=gl}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(a){const e=a!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=a}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(a){const e=a!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=a}set depthPacking(a){this.defines.DEPTH_PACKING=a.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(a){this.colorSpaceConversion!==a&&(a?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(a){a!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=a):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(a){this.uniforms.inputBuffer.value=a}getOpacity(a){return this.uniforms.opacity.value}setOpacity(a){this.uniforms.opacity.value=a}},nR=class extends vi{constructor(a,e=!0){super("CopyPass"),this.fullscreenMaterial=new Ox,this.needsSwap=!1,this.renderTarget=a,a===void 0&&(this.renderTarget=new En(1,1,{minFilter:ni,magFilter:ni,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(a){this.autoResize=a}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(a){this.autoResize=a}render(a,e,i,s,l){this.fullscreenMaterial.inputBuffer=e.texture,a.setRenderTarget(this.renderToScreen?null:this.renderTarget),a.render(this.scene,this.camera)}setSize(a,e){this.autoResize&&this.renderTarget.setSize(a,e)}initialize(a,e,i){i!==void 0&&(this.renderTarget.texture.type=i,i!==Ln?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":a!==null&&a.outputColorSpace===Pt&&(this.renderTarget.texture.colorSpace=Pt))}},L_=new Nt,zp=class extends vi{constructor(a=!0,e=!0,i=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=a,this.depth=e,this.stencil=i,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(a,e,i){this.color=a,this.depth=e,this.stencil=i}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(a){this.overrideClearColor=a}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(a){this.overrideClearAlpha=a}render(a,e,i,s,l){const c=this.overrideClearColor,f=this.overrideClearAlpha,h=a.getClearAlpha(),p=c!==null,m=f>=0;p?(a.getClearColor(L_),a.setClearColor(c,m?f:h)):m&&a.setClearAlpha(f),a.setRenderTarget(this.renderToScreen?null:e),a.clear(this.color,this.depth,this.stencil),p?a.setClearColor(L_,h):m&&a.setClearAlpha(h)}},iR=class extends vi{constructor(a,e){super("MaskPass",a,e),this.needsSwap=!1,this.clearPass=new zp(!1,!1,!0),this.inverse=!1}set mainScene(a){this.scene=a}set mainCamera(a){this.camera=a}get inverted(){return this.inverse}set inverted(a){this.inverse=a}get clear(){return this.clearPass.enabled}set clear(a){this.clearPass.enabled=a}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(a){this.inverted=a}render(a,e,i,s,l){const c=a.getContext(),f=a.state.buffers,h=this.scene,p=this.camera,m=this.clearPass,v=this.inverted?0:1,g=1-v;f.color.setMask(!1),f.depth.setMask(!1),f.color.setLocked(!0),f.depth.setLocked(!0),f.stencil.setTest(!0),f.stencil.setOp(c.REPLACE,c.REPLACE,c.REPLACE),f.stencil.setFunc(c.ALWAYS,v,4294967295),f.stencil.setClear(g),f.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?m.render(a,null):(m.render(a,e),m.render(a,i))),this.renderToScreen?(a.setRenderTarget(null),a.render(h,p)):(a.setRenderTarget(e),a.render(h,p),a.setRenderTarget(i),a.render(h,p)),f.color.setLocked(!1),f.depth.setLocked(!1),f.stencil.setLocked(!1),f.stencil.setFunc(c.EQUAL,1,4294967295),f.stencil.setOp(c.KEEP,c.KEEP,c.KEEP),f.stencil.setLocked(!0)}},Ah=1/1e3,aR=1e3,rR=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(a){typeof document<"u"&&document.hidden!==void 0&&(a?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=a)}get delta(){return this._delta*Ah}get fixedDelta(){return this._fixedDelta*Ah}set fixedDelta(a){this._fixedDelta=a*aR}get elapsed(){return this._elapsed*Ah}update(a){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(a!==void 0?a:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(a){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},sR=class{constructor(a=null,{depthBuffer:e=!0,stencilBuffer:i=!1,multisampling:s=0,frameBufferType:l}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,i,l,s),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new nR,this.depthTexture=null,this.depthRenderTarget=null,this.passes=[],this.timer=new rR,this.autoRenderToScreen=!0,this.setRenderer(a)}get multisampling(){return this.inputBuffer.samples}set multisampling(a){const e=this.inputBuffer,i=this.multisampling;i>0&&a>0?(this.inputBuffer.samples=a,this.outputBuffer.samples=a,this.inputBuffer.dispose(),this.outputBuffer.dispose()):i!==a&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,a),this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(a){if(this.renderer=a,a!==null){const e=a.getSize(new lt),i=a.getContext().getContextAttributes().alpha,s=this.inputBuffer.texture.type;s===Ln&&a.outputColorSpace===Pt&&(this.inputBuffer.texture.colorSpace=Pt,this.outputBuffer.texture.colorSpace=Pt,this.inputBuffer.dispose(),this.outputBuffer.dispose()),a.autoClear=!1,this.setSize(e.width,e.height);for(const l of this.passes)l.initialize(a,i,s)}}replaceRenderer(a,e=!0){const i=this.renderer,s=i.domElement.parentNode;return this.setRenderer(a),e&&s!==null&&(s.removeChild(i.domElement),s.appendChild(a.domElement)),i}createDepthTexture(){const a=this.inputBuffer,e=new Np;this.depthTexture=e,a.stencilBuffer?(e.format=eo,e.type=$s):e.type=Qi;const i=e.clone();return i.name="EffectComposer.StableDepth",this.depthRenderTarget=new En(a.width,a.height,{depthBuffer:!0,stencilBuffer:a.stencilBuffer,depthTexture:i}),i}blitDepthBuffer(a){const e=this.renderer,i=this.depthRenderTarget,s=e.properties,l=e.getContext();e.setRenderTarget(i);const c=s.get(a).__webglFramebuffer,f=s.get(i).__webglFramebuffer,h=a.stencilBuffer?l.DEPTH_BUFFER_BIT|l.STENCIL_BUFFER_BIT:l.DEPTH_BUFFER_BIT;l.bindFramebuffer(l.READ_FRAMEBUFFER,c),l.bindFramebuffer(l.DRAW_FRAMEBUFFER,f),l.blitFramebuffer(0,0,a.width,a.height,0,0,i.width,i.height,h,l.NEAREST),l.bindFramebuffer(l.READ_FRAMEBUFFER,null),l.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),e.setRenderTarget(null)}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.depthRenderTarget.dispose(),this.depthRenderTarget=null,this.inputBuffer.depthTexture=null,this.outputBuffer.depthTexture=null;for(const a of this.passes)a.setDepthTexture(null)}}createBuffer(a,e,i,s){const l=this.renderer,c=l===null?new lt:l.getDrawingBufferSize(new lt),f={minFilter:ni,magFilter:ni,stencilBuffer:e,depthBuffer:a,type:i},h=new En(c.width,c.height,f);return s>0&&(h.samples=s),i===Ln&&l!==null&&l.outputColorSpace===Pt&&(h.texture.colorSpace=Pt),h.texture.name="EffectComposer.Buffer",h.texture.generateMipmaps=!1,h}setMainScene(a){for(const e of this.passes)e.mainScene=a}setMainCamera(a){for(const e of this.passes)e.mainCamera=a}addPass(a,e){const i=this.passes,s=this.renderer,l=s.getDrawingBufferSize(new lt),c=s.getContext().getContextAttributes().alpha,f=this.inputBuffer.texture.type;if(a.renderer=s,a.setSize(l.width,l.height),a.initialize(s,c,f),this.autoRenderToScreen&&(i.length>0&&(i[i.length-1].renderToScreen=!1),a.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?i.splice(e,0,a):i.push(a),this.autoRenderToScreen&&(i[i.length-1].renderToScreen=!0),a.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const h=this.createDepthTexture();for(a of i)a.setDepthTexture(h)}else{const h=this.depthRenderTarget.depthTexture;a.setDepthTexture(h)}}removePass(a){const e=this.passes,i=e.indexOf(a);if(i!==-1&&e.splice(i,1).length>0){if(this.depthTexture!==null){const c=(h,p)=>h||p.needsDepthTexture;if(!e.reduce(c,!1)){const h=this.depthRenderTarget.depthTexture;a.getDepthTexture()===h&&a.setDepthTexture(null),this.deleteDepthTexture()}}this.autoRenderToScreen&&i===e.length&&(a.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const a=this.passes;this.deleteDepthTexture(),a.length>0&&(this.autoRenderToScreen&&(a[a.length-1].renderToScreen=!1),this.passes=[])}render(a){const e=this.renderer,i=this.copyPass;let s=this.inputBuffer,l=this.outputBuffer,c,f=!1;a===void 0&&(this.timer.update(),a=this.timer.getDelta());for(const h of this.passes)if(h.enabled){if(s.depthTexture=this.depthTexture,l.depthTexture=null,h.render(e,s,l,a,f),h.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(s),h.needsSwap){if(f){i.renderToScreen=h.renderToScreen;const p=e.getContext(),m=e.state.buffers.stencil;m.setFunc(p.NOTEQUAL,1,4294967295),i.render(e,s,l,a,f),m.setFunc(p.EQUAL,1,4294967295)}c=s,s=l,l=c}h instanceof iR?f=!0:h instanceof eR&&(f=!1)}}setSize(a,e,i){const s=this.renderer,l=s.getSize(new lt);(a===void 0||e===void 0)&&(a=l.width,e=l.height),(l.width!==a||l.height!==e)&&s.setSize(a,e,i);const c=s.getDrawingBufferSize(new lt);this.inputBuffer.setSize(c.width,c.height),this.outputBuffer.setSize(c.width,c.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(c.width,c.height);for(const f of this.passes)f.setSize(c.width,c.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const a of this.passes)a.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),vi.fullscreenGeometry.dispose()}},mr={NONE:0,DEPTH:1,CONVOLUTION:2},Ut={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},oR=class{constructor(){this.shaderParts=new Map([[Ut.FRAGMENT_HEAD,null],[Ut.FRAGMENT_MAIN_UV,null],[Ut.FRAGMENT_MAIN_IMAGE,null],[Ut.VERTEX_HEAD,null],[Ut.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=mr.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=vr}},Rh=!1,O_=class{constructor(a=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(a),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let i;if(e.material.flatShading)switch(e.material.side){case di:i=this.materialsFlatShadedDoubleSide;break;case bn:i=this.materialsFlatShadedBackSide;break;default:i=this.materialsFlatShaded;break}else switch(e.material.side){case di:i=this.materialsDoubleSide;break;case bn:i=this.materialsBackSide;break;default:i=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=i[2]:e.isInstancedMesh?e.material=i[1]:e.material=i[0],++this.meshCount}}}cloneMaterial(a){if(!(a instanceof Hn))return a.clone();const e=a.uniforms,i=new Map;for(const l in e){const c=e[l].value;c.isRenderTargetTexture&&(e[l].value=null,i.set(l,c))}const s=a.clone();for(const l of i)e[l[0]].value=l[1],s.uniforms[l[0]].value=l[1];return s}setMaterial(a){if(this.disposeMaterials(),this.material=a,a!==null){const e=this.materials=[this.cloneMaterial(a),this.cloneMaterial(a),this.cloneMaterial(a)];for(const i of e)i.uniforms=Object.assign({},a.uniforms),i.side=Na;e[2].skinning=!0,this.materialsBackSide=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},a.uniforms),s.side=bn,s}),this.materialsDoubleSide=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},a.uniforms),s.side=di,s}),this.materialsFlatShaded=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},a.uniforms),s.flatShading=!0,s}),this.materialsFlatShadedBackSide=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},a.uniforms),s.flatShading=!0,s.side=bn,s}),this.materialsFlatShadedDoubleSide=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},a.uniforms),s.flatShading=!0,s.side=di,s})}}render(a,e,i){const s=a.shadowMap.enabled;if(a.shadowMap.enabled=!1,Rh){const l=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),a.render(e,i);for(const c of l)c[0].material=c[1];this.meshCount!==l.size&&l.clear()}else{const l=e.overrideMaterial;e.overrideMaterial=this.material,a.render(e,i),e.overrideMaterial=l}a.shadowMap.enabled=s}disposeMaterials(){if(this.material!==null){const a=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of a)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Rh}static set workaroundEnabled(a){Rh=a}},dr=-1,pi=class extends Oa{constructor(a,e=dr,i=dr,s=1){super(),this.resizable=a,this.baseSize=new lt(1,1),this.preferredSize=new lt(e,i),this.target=this.preferredSize,this.s=s,this.effectiveSize=new lt,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const a=this.baseSize,e=this.preferredSize,i=this.effectiveSize,s=this.scale;e.width!==dr?i.width=e.width:e.height!==dr?i.width=Math.round(e.height*(a.width/Math.max(a.height,1))):i.width=Math.round(a.width*s),e.height!==dr?i.height=e.height:e.width!==dr?i.height=Math.round(e.width/Math.max(a.width/Math.max(a.height,1),1)):i.height=Math.round(a.height*s)}get width(){return this.effectiveSize.width}set width(a){this.preferredWidth=a}get height(){return this.effectiveSize.height}set height(a){this.preferredHeight=a}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(a){this.s!==a&&(this.s=a,this.preferredSize.setScalar(dr),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(a){this.scale=a}get baseWidth(){return this.baseSize.width}set baseWidth(a){this.baseSize.width!==a&&(this.baseSize.width=a,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(a){this.baseWidth=a}get baseHeight(){return this.baseSize.height}set baseHeight(a){this.baseSize.height!==a&&(this.baseSize.height=a,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(a){this.baseHeight=a}setBaseSize(a,e){(this.baseSize.width!==a||this.baseSize.height!==e)&&(this.baseSize.set(a,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(a){this.preferredSize.width!==a&&(this.preferredSize.width=a,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(a){this.preferredWidth=a}get preferredHeight(){return this.preferredSize.height}set preferredHeight(a){this.preferredSize.height!==a&&(this.preferredSize.height=a,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(a){this.preferredHeight=a}setPreferredSize(a,e){(this.preferredSize.width!==a||this.preferredSize.height!==e)&&(this.preferredSize.set(a,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(a){this.s=a.scale,this.baseSize.set(a.baseWidth,a.baseHeight),this.preferredSize.set(a.preferredWidth,a.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return dr}},lR=class{constructor(a=0){this.nextId=a}getNextId(){return this.nextId++}reset(a=0){return this.nextId=a,this}},Ch=new lR(2),cR=class extends Set{constructor(a,e=Ch.getNextId()){super(),this.exclusive=!1,this._layer=e,(this._layer<1||this._layer>31)&&(console.warn("Layer out of range, resetting to 2"),Ch.reset(2),this._layer=Ch.getNextId()),a!==void 0&&this.set(a)}get layer(){return this._layer}set layer(a){const e=this._layer;for(const i of this)i.layers.disable(e),i.layers.enable(a);this._layer=a}getLayer(){return this.layer}setLayer(a){this.layer=a}isExclusive(){return this.exclusive}setExclusive(a){this.exclusive=a}clear(){const a=this.layer;for(const e of this)e.layers.disable(a);return super.clear()}set(a){this.clear();for(const e of a)this.add(e);return this}indexOf(a){return this.has(a)?0:-1}add(a){return this.exclusive?a.layers.set(this.layer):a.layers.enable(this.layer),super.add(a)}delete(a){return this.has(a)&&a.layers.disable(this.layer),super.delete(a)}toggle(a){let e;return this.has(a)?(this.delete(a),e=!1):(this.add(a),e=!0),e}setVisible(a){for(const e of this)a?e.layers.enable(0):e.layers.disable(0);return this}},gt={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},uR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",fR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",dR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",hR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",pR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",mR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",gR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",vR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",_R="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",xR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",yR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",SR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",bR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ER="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",MR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",TR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",wR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",AR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",RR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",CR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",DR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",UR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",NR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",LR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",OR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",PR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",BR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",zR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",IR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",FR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",HR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",GR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",VR=new Map([[gt.ADD,uR],[gt.ALPHA,fR],[gt.AVERAGE,dR],[gt.COLOR,hR],[gt.COLOR_BURN,pR],[gt.COLOR_DODGE,mR],[gt.DARKEN,gR],[gt.DIFFERENCE,vR],[gt.DIVIDE,_R],[gt.DST,null],[gt.EXCLUSION,xR],[gt.HARD_LIGHT,yR],[gt.HARD_MIX,SR],[gt.HUE,bR],[gt.INVERT,ER],[gt.INVERT_RGB,MR],[gt.LIGHTEN,TR],[gt.LINEAR_BURN,wR],[gt.LINEAR_DODGE,AR],[gt.LINEAR_LIGHT,RR],[gt.LUMINOSITY,CR],[gt.MULTIPLY,DR],[gt.NEGATION,UR],[gt.NORMAL,NR],[gt.OVERLAY,LR],[gt.PIN_LIGHT,OR],[gt.REFLECT,PR],[gt.SATURATION,BR],[gt.SCREEN,zR],[gt.SOFT_LIGHT,IR],[gt.SRC,FR],[gt.SUBTRACT,HR],[gt.VIVID_LIGHT,GR]]),kR=class extends Oa{constructor(a,e=1){super(),this._blendFunction=a,this.opacity=new Mt(e)}getOpacity(){return this.opacity.value}setOpacity(a){this.opacity.value=a}get blendFunction(){return this._blendFunction}set blendFunction(a){this._blendFunction=a,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(a){this.blendFunction=a}getShaderCode(){return VR.get(this.blendFunction)}},jR=class extends Oa{constructor(a,e,{attributes:i=mr.NONE,blendFunction:s=gt.NORMAL,defines:l=new Map,uniforms:c=new Map,extensions:f=null,vertexShader:h=null}={}){super(),this.name=a,this.renderer=null,this.attributes=i,this.fragmentShader=e,this.vertexShader=h,this.defines=l,this.uniforms=c,this.extensions=f,this.blendMode=new kR(s),this.blendMode.addEventListener("change",p=>this.setChanged()),this._inputColorSpace=vr,this._outputColorSpace=Ki}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(a){this._inputColorSpace=a,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(a){this._outputColorSpace=a,this.setChanged()}set mainScene(a){}set mainCamera(a){}getName(){return this.name}setRenderer(a){this.renderer=a}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(a){this.attributes=a,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(a){this.fragmentShader=a,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(a){this.vertexShader=a,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(a,e=gr){}update(a,e,i){}setSize(a,e){}initialize(a,e,i){}dispose(){for(const a of Object.keys(this)){const e=this[a];(e instanceof En||e instanceof ro||e instanceof Fn||e instanceof vi)&&this[a].dispose()}}},Ip={MEDIUM:2,LARGE:3},XR=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,WR="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",qR=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],YR=class extends Hn{constructor(a=new $t){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new Mt(null),texelSize:new Mt(new $t),scale:new Mt(1),kernel:new Mt(0)},blending:Wn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:XR,vertexShader:WR}),this.setTexelSize(a.x,a.y),this.kernelSize=Ip.MEDIUM}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setInputBuffer(a){this.inputBuffer=a}get kernelSequence(){return qR[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(a){this.uniforms.scale.value=a}getScale(){return this.uniforms.scale.value}setScale(a){this.uniforms.scale.value=a}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(a){this.uniforms.kernel.value=a}setKernel(a){this.kernel=a}setTexelSize(a,e){this.uniforms.texelSize.value.set(a,e,a*.5,e*.5)}setSize(a,e){const i=1/a,s=1/e;this.uniforms.texelSize.value.set(i,s,i*.5,s*.5)}},ZR=class extends vi{constructor({kernelSize:a=Ip.MEDIUM,resolutionScale:e=.5,width:i=pi.AUTO_SIZE,height:s=pi.AUTO_SIZE,resolutionX:l=i,resolutionY:c=s}={}){super("KawaseBlurPass"),this.renderTargetA=new En(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const f=this.resolution=new pi(this,l,c,e);f.addEventListener("change",h=>this.setSize(f.baseWidth,f.baseHeight)),this._blurMaterial=new YR,this._blurMaterial.kernelSize=a,this.copyMaterial=new Ox}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(a){this._blurMaterial=a}get dithering(){return this.copyMaterial.dithering}set dithering(a){this.copyMaterial.dithering=a}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(a){this.blurMaterial.kernelSize=a}get width(){return this.resolution.width}set width(a){this.resolution.preferredWidth=a}get height(){return this.resolution.height}set height(a){this.resolution.preferredHeight=a}get scale(){return this.blurMaterial.scale}set scale(a){this.blurMaterial.scale=a}getScale(){return this.blurMaterial.scale}setScale(a){this.blurMaterial.scale=a}getKernelSize(){return this.kernelSize}setKernelSize(a){this.kernelSize=a}getResolutionScale(){return this.resolution.scale}setResolutionScale(a){this.resolution.scale=a}render(a,e,i,s,l){const c=this.scene,f=this.camera,h=this.renderTargetA,p=this.renderTargetB,m=this.blurMaterial,v=m.kernelSequence;let g=e;this.fullscreenMaterial=m;for(let x=0,E=v.length;x<E;++x){const M=(x&1)===0?h:p;m.kernel=v[x],m.inputBuffer=g.texture,a.setRenderTarget(M),a.render(c,f),g=M}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=g.texture,a.setRenderTarget(this.renderToScreen?null:i),a.render(c,f)}setSize(a,e){const i=this.resolution;i.setBaseSize(a,e);const s=i.width,l=i.height;this.renderTargetA.setSize(s,l),this.renderTargetB.setSize(s,l),this.blurMaterial.setSize(a,e)}initialize(a,e,i){i!==void 0&&(this.renderTargetA.texture.type=i,this.renderTargetB.texture.type=i,i!==Ln?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):a!==null&&a.outputColorSpace===Pt&&(this.renderTargetA.texture.colorSpace=Pt,this.renderTargetB.texture.colorSpace=Pt))}static get AUTO_SIZE(){return pi.AUTO_SIZE}},KR=`#include <common>
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
}`,QR=class extends Hn{constructor(a=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:wl.replace(/\D+/g,"")},uniforms:{inputBuffer:new Mt(null),threshold:new Mt(0),smoothing:new Mt(1),range:new Mt(null)},blending:Wn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:KR,vertexShader:Bp}),this.colorOutput=a,this.luminanceRange=e}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setInputBuffer(a){this.uniforms.inputBuffer.value=a}get threshold(){return this.uniforms.threshold.value}set threshold(a){this.smoothing>0||a>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=a}getThreshold(){return this.threshold}setThreshold(a){this.threshold=a}get smoothing(){return this.uniforms.smoothing.value}set smoothing(a){this.threshold>0||a>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=a}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(a){this.smoothing=a}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(a){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(a){a?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(a){return this.colorOutput}setColorOutputEnabled(a){this.colorOutput=a}get useRange(){return this.luminanceRange!==null}set useRange(a){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(a){a!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=a,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(a){this.luminanceRange=a}},JR=class extends vi{constructor({renderTarget:a,luminanceRange:e,colorOutput:i,resolutionScale:s=1,width:l=pi.AUTO_SIZE,height:c=pi.AUTO_SIZE,resolutionX:f=l,resolutionY:h=c}={}){super("LuminancePass"),this.fullscreenMaterial=new QR(i,e),this.needsSwap=!1,this.renderTarget=a,this.renderTarget===void 0&&(this.renderTarget=new En(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const p=this.resolution=new pi(this,f,h,s);p.addEventListener("change",m=>this.setSize(p.baseWidth,p.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(a,e,i,s,l){const c=this.fullscreenMaterial;c.inputBuffer=e.texture,a.setRenderTarget(this.renderToScreen?null:this.renderTarget),a.render(this.scene,this.camera)}setSize(a,e){const i=this.resolution;i.setBaseSize(a,e),this.renderTarget.setSize(i.width,i.height)}initialize(a,e,i){i!==void 0&&i!==Ln&&(this.renderTarget.texture.type=i,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},$R=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,e3="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",t3=class extends Hn{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new Mt(null),texelSize:new Mt(new lt)},blending:Wn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:$R,vertexShader:e3})}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setSize(a,e){this.uniforms.texelSize.value.set(1/a,1/e)}},n3=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,i3="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",a3=class extends Hn{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new Mt(null),supportBuffer:new Mt(null),texelSize:new Mt(new lt),radius:new Mt(.85)},blending:Wn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:n3,vertexShader:i3})}set inputBuffer(a){this.uniforms.inputBuffer.value=a}set supportBuffer(a){this.uniforms.supportBuffer.value=a}get radius(){return this.uniforms.radius.value}set radius(a){this.uniforms.radius.value=a}setSize(a,e){this.uniforms.texelSize.value.set(1/a,1/e)}},r3=class extends vi{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new En(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new t3,this.upsamplingMaterial=new a3,this.resolution=new lt}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(a){if(this.levels!==a){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let i=0;i<a;++i){const s=e.clone();s.texture.name="Downsampling.Mipmap"+i,this.downsamplingMipmaps.push(s)}this.upsamplingMipmaps.push(e);for(let i=1,s=a-1;i<s;++i){const l=e.clone();l.texture.name="Upsampling.Mipmap"+i,this.upsamplingMipmaps.push(l)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(a){this.upsamplingMaterial.radius=a}render(a,e,i,s,l){const{scene:c,camera:f}=this,{downsamplingMaterial:h,upsamplingMaterial:p}=this,{downsamplingMipmaps:m,upsamplingMipmaps:v}=this;let g=e;this.fullscreenMaterial=h;for(let x=0,E=m.length;x<E;++x){const M=m[x];h.setSize(g.width,g.height),h.inputBuffer=g.texture,a.setRenderTarget(M),a.render(c,f),g=M}this.fullscreenMaterial=p;for(let x=v.length-1;x>=0;--x){const E=v[x];p.setSize(g.width,g.height),p.inputBuffer=g.texture,p.supportBuffer=m[x].texture,a.setRenderTarget(E),a.render(c,f),g=E}}setSize(a,e){const i=this.resolution;i.set(a,e);let s=i.width,l=i.height;for(let c=0,f=this.downsamplingMipmaps.length;c<f;++c)s=Math.round(s*.5),l=Math.round(l*.5),this.downsamplingMipmaps[c].setSize(s,l),c<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[c].setSize(s,l)}initialize(a,e,i){if(i!==void 0){const s=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const l of s)l.texture.type=i;if(i!==Ln)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(a!==null&&a.outputColorSpace===Pt)for(const l of s)l.texture.colorSpace=Pt}}dispose(){super.dispose();for(const a of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))a.dispose()}},s3=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,o3=class extends jR{constructor({blendFunction:a=gt.SCREEN,luminanceThreshold:e=1,luminanceSmoothing:i=.03,mipmapBlur:s=!0,intensity:l=1,radius:c=.85,levels:f=8,kernelSize:h=Ip.LARGE,resolutionScale:p=.5,width:m=pi.AUTO_SIZE,height:v=pi.AUTO_SIZE,resolutionX:g=m,resolutionY:x=v}={}){super("BloomEffect",s3,{blendFunction:a,uniforms:new Map([["map",new Mt(null)],["intensity",new Mt(l)]])}),this.renderTarget=new En(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new ZR({kernelSize:h}),this.luminancePass=new JR({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=i,this.mipmapBlurPass=new r3,this.mipmapBlurPass.enabled=s,this.mipmapBlurPass.radius=c,this.mipmapBlurPass.levels=f,this.uniforms.get("map").value=s?this.mipmapBlurPass.texture:this.renderTarget.texture;const E=this.resolution=new pi(this,g,x,p);E.addEventListener("change",M=>this.setSize(E.baseWidth,E.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(a){this.resolution.preferredWidth=a}get height(){return this.resolution.height}set height(a){this.resolution.preferredHeight=a}get dithering(){return this.blurPass.dithering}set dithering(a){this.blurPass.dithering=a}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(a){this.blurPass.kernelSize=a}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(a){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(a){this.uniforms.get("intensity").value=a}getIntensity(){return this.intensity}setIntensity(a){this.intensity=a}getResolutionScale(){return this.resolution.scale}setResolutionScale(a){this.resolution.scale=a}update(a,e,i){const s=this.renderTarget,l=this.luminancePass;l.enabled?(l.render(a,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(a,l.renderTarget):this.blurPass.render(a,l.renderTarget,s)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(a,e):this.blurPass.render(a,e,s)}setSize(a,e){const i=this.resolution;i.setBaseSize(a,e),this.renderTarget.setSize(i.width,i.height),this.blurPass.resolution.copy(i),this.luminancePass.setSize(a,e),this.mipmapBlurPass.setSize(a,e)}initialize(a,e,i){this.blurPass.initialize(a,e,i),this.luminancePass.initialize(a,e,i),this.mipmapBlurPass.initialize(a,e,i),i!==void 0&&(this.renderTarget.texture.type=i,a!==null&&a.outputColorSpace===Pt&&(this.renderTarget.texture.colorSpace=Pt))}},l3=class extends vi{constructor(a,e="inputBuffer"){super("ShaderPass"),this.fullscreenMaterial=a,this.input=e}setInput(a){this.input=a}render(a,e,i,s,l){const c=this.fullscreenMaterial.uniforms;e!==null&&c!==void 0&&c[this.input]!==void 0&&(c[this.input].value=e.texture),a.setRenderTarget(this.renderToScreen?null:i),a.render(this.scene,this.camera)}initialize(a,e,i){i!==void 0&&i!==Ln&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},Px=class extends vi{constructor(a,e,i=null){super("RenderPass",a,e),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new zp,this.overrideMaterialManager=i===null?null:new O_(i),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(a){this.scene=a}set mainCamera(a){this.camera=a}get renderToScreen(){return super.renderToScreen}set renderToScreen(a){super.renderToScreen=a,this.clearPass.renderToScreen=a}get overrideMaterial(){const a=this.overrideMaterialManager;return a!==null?a.material:null}set overrideMaterial(a){const e=this.overrideMaterialManager;a!==null?e!==null?e.setMaterial(a):this.overrideMaterialManager=new O_(a):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(a){this.overrideMaterial=a}get clear(){return this.clearPass.enabled}set clear(a){this.clearPass.enabled=a}getSelection(){return this.selection}setSelection(a){this.selection=a}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(a){this.ignoreBackground=a}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(a){this.skipShadowMapUpdate=a}getClearPass(){return this.clearPass}render(a,e,i,s,l){const c=this.scene,f=this.camera,h=this.selection,p=f.layers.mask,m=c.background,v=a.shadowMap.autoUpdate,g=this.renderToScreen?null:e;h!==null&&f.layers.set(h.getLayer()),this.skipShadowMapUpdate&&(a.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(c.background=null),this.clearPass.enabled&&this.clearPass.render(a,e),a.setRenderTarget(g),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(a,c,f):a.render(c,f),f.layers.mask=p,c.background=m,a.shadowMap.autoUpdate=v}},pl={KEEP_MAX_DEPTH:1,DISCARD_MAX_DEPTH:2},c3=class extends vi{constructor(a,e,{renderTarget:i,resolutionScale:s=1,width:l=pi.AUTO_SIZE,height:c=pi.AUTO_SIZE,resolutionX:f=l,resolutionY:h=c}={}){super("DepthPass"),this.needsSwap=!1,this.renderPass=new Px(a,e,new Mx({depthPacking:Cp}));const p=this.renderPass;p.skipShadowMapUpdate=!0,p.ignoreBackground=!0,this.renderTarget=i,this.renderTarget===void 0&&(this.renderTarget=new En(1,1,{minFilter:mi,magFilter:mi}),this.renderTarget.texture.name="DepthPass.Target");const m=this.resolution=new pi(this,f,h,s);m.addEventListener("change",v=>this.setSize(m.baseWidth,m.baseHeight))}set mainScene(a){this.renderPass.mainScene=a}set mainCamera(a){this.renderPass.mainCamera=a}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}getResolutionScale(){return this.resolution.scale}setResolutionScale(a){this.resolution.scale=a}render(a,e,i,s,l){const c=this.renderToScreen?null:this.renderTarget;this.renderPass.render(a,c)}setSize(a,e){const i=this.resolution;i.setBaseSize(a,e),this.renderTarget.setSize(i.width,i.height)}initialize(a,e,i){const s=a.capabilities.reversedDepthBuffer?0:16777215,l=this.renderPass.clearPass;l.overrideClearColor=new Nt(s),l.overrideClearAlpha=1}},u3=`#include <common>
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer0;uniform highp sampler2D depthBuffer1;
#else
uniform mediump sampler2D depthBuffer0;uniform mediump sampler2D depthBuffer1;
#endif
uniform sampler2D inputBuffer;uniform vec2 cameraNearFar;float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNearFar.x,cameraNearFar.y);
#else
return orthographicDepthToViewZ(depth,cameraNearFar.x,cameraNearFar.y);
#endif
}varying vec2 vUv;void main(){vec2 depth;
#if DEPTH_PACKING_0 == 3201
depth.x=unpackRGBAToDepth(texture2D(depthBuffer0,vUv));
#else
depth.x=texture2D(depthBuffer0,vUv).r;
#endif
#if DEPTH_PACKING_1 == 3201
depth.y=unpackRGBAToDepth(texture2D(depthBuffer1,vUv));
#else
depth.y=texture2D(depthBuffer1,vUv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float a=cameraNearFar.y/(cameraNearFar.y-cameraNearFar.x);float b=cameraNearFar.y*cameraNearFar.x/(cameraNearFar.x-cameraNearFar.y);float c=log2(cameraNearFar.y+1.0);float d=pow(2.0,depth.x*c)-1.0;depth.x=a+b/d;d=pow(2.0,depth.y*c)-1.0;depth.y=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth.x=1.0-depth.x;depth.y=1.0-depth.y;
#endif
bool isMaxDepth=(depth.x==1.0);
#ifdef PERSPECTIVE_CAMERA
depth.x=viewZToOrthographicDepth(getViewZ(depth.x),cameraNearFar.x,cameraNearFar.y);depth.y=viewZToOrthographicDepth(getViewZ(depth.y),cameraNearFar.x,cameraNearFar.y);
#endif
#if DEPTH_TEST_STRATEGY == 0
bool keep=depthTest(depth.x,depth.y);
#elif DEPTH_TEST_STRATEGY == 1
bool keep=isMaxDepth||depthTest(depth.x,depth.y);
#else
bool keep=!isMaxDepth&&depthTest(depth.x,depth.y);
#endif
if(keep){gl_FragColor=texture2D(inputBuffer,vUv);}else{discard;}}`,f3=class extends Hn{constructor(){super({name:"DepthMaskMaterial",defines:{DEPTH_EPSILON:"0.0001",DEPTH_PACKING_0:"0",DEPTH_PACKING_1:"0",DEPTH_TEST_STRATEGY:pl.KEEP_MAX_DEPTH},uniforms:{inputBuffer:new Mt(null),depthBuffer0:new Mt(null),depthBuffer1:new Mt(null),cameraNearFar:new Mt(new lt(1,1))},blending:Wn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:u3,vertexShader:Bp}),this.depthMode=vl}set depthBuffer0(a){this.uniforms.depthBuffer0.value=a}set depthPacking0(a){this.defines.DEPTH_PACKING_0=a.toFixed(0),this.needsUpdate=!0}setDepthBuffer0(a,e=gr){this.depthBuffer0=a,this.depthPacking0=e}set depthBuffer1(a){this.uniforms.depthBuffer1.value=a}set depthPacking1(a){this.defines.DEPTH_PACKING_1=a.toFixed(0),this.needsUpdate=!0}setDepthBuffer1(a,e=gr){this.depthBuffer1=a,this.depthPacking1=e}get maxDepthStrategy(){return Number(this.defines.DEPTH_TEST_STRATEGY)}set maxDepthStrategy(a){this.defines.DEPTH_TEST_STRATEGY=a.toFixed(0),this.needsUpdate=!0}get keepFar(){return this.maxDepthStrategy}set keepFar(a){this.maxDepthStrategy=a?pl.KEEP_MAX_DEPTH:pl.DISCARD_MAX_DEPTH}getMaxDepthStrategy(){return this.maxDepthStrategy}setMaxDepthStrategy(a){this.maxDepthStrategy=a}get epsilon(){return Number(this.defines.DEPTH_EPSILON)}set epsilon(a){this.defines.DEPTH_EPSILON=a.toFixed(16),this.needsUpdate=!0}getEpsilon(){return this.epsilon}setEpsilon(a){this.epsilon=a}get depthMode(){return Number(this.defines.DEPTH_MODE)}set depthMode(a){let e;switch(a){case Su:e="false";break;case gl:e="true";break;case Ks:e="abs(d1 - d0) <= DEPTH_EPSILON";break;case _l:e="abs(d1 - d0) > DEPTH_EPSILON";break;case vl:e="d0 > d1";break;case Zr:e="d0 >= d1";break;case bu:e="d0 <= d1";break;case Eu:default:e="d0 < d1";break}this.defines.DEPTH_MODE=a.toFixed(0),this.defines["depthTest(d0, d1)"]=e,this.needsUpdate=!0}getDepthMode(){return this.depthMode}setDepthMode(a){this.depthMode=a}adoptCameraSettings(a){this.copyCameraSettings(a)}copyCameraSettings(a){a&&(this.uniforms.cameraNearFar.value.set(a.near,a.far),a instanceof Xn?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}},d3=class extends o3{constructor(a,e,i){super(i),this.setAttributes(this.getAttributes()|mr.DEPTH),this.camera=e,this.depthPass=new c3(a,e),this.clearPass=new zp(!0,!1,!1),this.clearPass.overrideClearColor=new Nt(0),this.depthMaskPass=new l3(new f3);const s=this.depthMaskMaterial;s.copyCameraSettings(e),s.depthBuffer1=this.depthPass.texture,s.depthPacking1=Cp,s.depthMode=Ks,this.renderTargetMasked=new En(1,1,{depthBuffer:!1}),this.renderTargetMasked.texture.name="Bloom.Masked",this.selection=new cR,this._inverted=!1,this._ignoreBackground=!1}set mainScene(a){this.depthPass.mainScene=a}set mainCamera(a){this.camera=a,this.depthPass.mainCamera=a,this.depthMaskMaterial.copyCameraSettings(a)}getSelection(){return this.selection}get depthMaskMaterial(){return this.depthMaskPass.fullscreenMaterial}get inverted(){return this._inverted}set inverted(a){this._inverted=a,this.depthMaskMaterial.depthMode=a?_l:Ks}isInverted(){return this.inverted}setInverted(a){this.inverted=a}get ignoreBackground(){return this._ignoreBackground}set ignoreBackground(a){this._ignoreBackground=a,this.depthMaskMaterial.maxDepthStrategy=a?pl.DISCARD_MAX_DEPTH:pl.KEEP_MAX_DEPTH}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(a){this.ignoreBackground=a}setDepthTexture(a,e=gr){this.depthMaskMaterial.depthBuffer0=a,this.depthMaskMaterial.depthPacking0=e}update(a,e,i){const s=this.camera,l=this.selection,c=this.inverted;let f=e;if(this.ignoreBackground||!c||l.size>0){const h=s.layers.mask;s.layers.set(l.layer),this.depthPass.render(a),s.layers.mask=h,f=this.renderTargetMasked,this.clearPass.render(a,f),this.depthMaskPass.render(a,e,f)}super.update(a,f,i)}setSize(a,e){super.setSize(a,e),this.renderTargetMasked.setSize(a,e),this.depthPass.setSize(a,e)}initialize(a,e,i){super.initialize(a,e,i),this.clearPass.initialize(a,e,i),this.depthPass.initialize(a,e,i),this.depthMaskPass.initialize(a,e,i),a!==null&&a.capabilities.logarithmicDepthBuffer&&(this.depthMaskPass.fullscreenMaterial.defines.LOG_DEPTH="1"),i!==void 0&&(this.renderTargetMasked.texture.type=i,a!==null&&a.outputColorSpace===Pt&&(this.renderTargetMasked.texture.colorSpace=Pt))}},h3=`#include <common>
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
}`,p3="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",m3=class extends Hn{constructor(a,e,i,s,l=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:wl.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new Mt(null),depthBuffer:new Mt(null),resolution:new Mt(new lt),texelSize:new Mt(new lt),cameraNear:new Mt(.3),cameraFar:new Mt(1e3),aspect:new Mt(1),time:new Mt(0)},blending:Wn,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:l}),a&&this.setShaderParts(a),e&&this.setDefines(e),i&&this.setUniforms(i),this.copyCameraSettings(s)}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setInputBuffer(a){this.uniforms.inputBuffer.value=a}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(a){this.uniforms.depthBuffer.value=a}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(a){this.defines.DEPTH_PACKING=a.toFixed(0),this.needsUpdate=!0}setDepthBuffer(a,e=gr){this.depthBuffer=a,this.depthPacking=e}setShaderData(a){this.setShaderParts(a.shaderParts),this.setDefines(a.defines),this.setUniforms(a.uniforms),this.setExtensions(a.extensions)}setShaderParts(a){return this.fragmentShader=h3.replace(Ut.FRAGMENT_HEAD,a.get(Ut.FRAGMENT_HEAD)||"").replace(Ut.FRAGMENT_MAIN_UV,a.get(Ut.FRAGMENT_MAIN_UV)||"").replace(Ut.FRAGMENT_MAIN_IMAGE,a.get(Ut.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=p3.replace(Ut.VERTEX_HEAD,a.get(Ut.VERTEX_HEAD)||"").replace(Ut.VERTEX_MAIN_SUPPORT,a.get(Ut.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(a){for(const e of a.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(a){for(const e of a.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(a){this.extensions={};for(const e of a)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(a){this.encodeOutput!==a&&(a?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(a){return this.encodeOutput}setOutputEncodingEnabled(a){this.encodeOutput=a}get time(){return this.uniforms.time.value}set time(a){this.uniforms.time.value=a}setDeltaTime(a){this.uniforms.time.value+=a}adoptCameraSettings(a){this.copyCameraSettings(a)}copyCameraSettings(a){a&&(this.uniforms.cameraNear.value=a.near,this.uniforms.cameraFar.value=a.far,a instanceof Xn?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(a,e){const i=this.uniforms;i.resolution.value.set(a,e),i.texelSize.value.set(1/a,1/e),i.aspect.value=a/e}static get Section(){return Ut}};function P_(a,e,i){for(const s of e){const l="$1"+a+s.charAt(0).toUpperCase()+s.slice(1),c=new RegExp("([^\\.])(\\b"+s+"\\b)","g");for(const f of i.entries())f[1]!==null&&i.set(f[0],f[1].replace(c,l))}}function g3(a,e,i){let s=e.getFragmentShader(),l=e.getVertexShader();const c=s!==void 0&&/mainImage/.test(s),f=s!==void 0&&/mainUv/.test(s);if(i.attributes|=e.getAttributes(),s===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(f&&(i.attributes&mr.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!c&&!f)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const h=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,p=i.shaderParts;let m=p.get(Ut.FRAGMENT_HEAD)||"",v=p.get(Ut.FRAGMENT_MAIN_UV)||"",g=p.get(Ut.FRAGMENT_MAIN_IMAGE)||"",x=p.get(Ut.VERTEX_HEAD)||"",E=p.get(Ut.VERTEX_MAIN_SUPPORT)||"";const M=new Set,T=new Set;if(f&&(v+=`	${a}MainUv(UV);
`,i.uvTransformation=!0),l!==null&&/mainSupport/.test(l)){const L=/mainSupport *\([\w\s]*?uv\s*?\)/.test(l);E+=`	${a}MainSupport(`,E+=L?`vUv);
`:`);
`;for(const U of l.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const D of U[1].split(/\s*,\s*/))i.varyings.add(D),M.add(D),T.add(D);for(const U of l.matchAll(h))T.add(U[1])}for(const L of s.matchAll(h))T.add(L[1]);for(const L of e.defines.keys())T.add(L.replace(/\([\w\s,]*\)/g,""));for(const L of e.uniforms.keys())T.add(L);T.delete("while"),T.delete("for"),T.delete("if"),e.uniforms.forEach((L,U)=>i.uniforms.set(a+U.charAt(0).toUpperCase()+U.slice(1),L)),e.defines.forEach((L,U)=>i.defines.set(a+U.charAt(0).toUpperCase()+U.slice(1),L));const b=new Map([["fragment",s],["vertex",l]]);P_(a,T,i.defines),P_(a,T,b),s=b.get("fragment"),l=b.get("vertex");const _=e.blendMode;if(i.blendModes.set(_.blendFunction,_),c){e.inputColorSpace!==null&&e.inputColorSpace!==i.colorSpace&&(g+=e.inputColorSpace===Pt?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==Ki?i.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(i.colorSpace=e.inputColorSpace);const L=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;g+=`${a}MainImage(color0, UV, `,(i.attributes&mr.DEPTH)!==0&&L.test(s)&&(g+="depth, ",i.readDepth=!0),g+=`color1);
	`;const U=a+"BlendOpacity";i.uniforms.set(U,_.opacity),g+=`color0 = blend${_.blendFunction}(color0, color1, ${U});

	`,m+=`uniform float ${U};

`}if(m+=s+`
`,l!==null&&(x+=l+`
`),p.set(Ut.FRAGMENT_HEAD,m),p.set(Ut.FRAGMENT_MAIN_UV,v),p.set(Ut.FRAGMENT_MAIN_IMAGE,g),p.set(Ut.VERTEX_HEAD,x),p.set(Ut.VERTEX_MAIN_SUPPORT,E),e.extensions!==null)for(const L of e.extensions)i.extensions.add(L)}}var v3=class extends vi{constructor(a,...e){super("EffectPass"),this.fullscreenMaterial=new m3(null,null,null,a),this.listener=i=>this.handleEvent(i),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(a){for(const e of this.effects)e.mainScene=a}set mainCamera(a){this.fullscreenMaterial.copyCameraSettings(a);for(const e of this.effects)e.mainCamera=a}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(a){this.fullscreenMaterial.encodeOutput=a}get dithering(){return this.fullscreenMaterial.dithering}set dithering(a){const e=this.fullscreenMaterial;e.dithering=a,e.needsUpdate=!0}setEffects(a){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=a.sort((e,i)=>i.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const a=new oR;let e=0;for(const f of this.effects)if(f.blendMode.blendFunction===gt.DST)a.attributes|=f.getAttributes()&mr.DEPTH;else{if((a.attributes&f.getAttributes()&mr.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${f.name})`);g3("e"+e++,f,a)}let i=a.shaderParts.get(Ut.FRAGMENT_HEAD),s=a.shaderParts.get(Ut.FRAGMENT_MAIN_IMAGE),l=a.shaderParts.get(Ut.FRAGMENT_MAIN_UV);const c=/\bblend\b/g;for(const f of a.blendModes.values())i+=f.getShaderCode().replace(c,`blend${f.blendFunction}`)+`
`;(a.attributes&mr.DEPTH)!==0?(a.readDepth&&(s=`float depth = readDepth(UV);

	`+s),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,a.colorSpace===Pt&&(s+=`color0 = sRGBToLinear(color0);
	`),a.uvTransformation?(l=`vec2 transformedUv = vUv;
`+l,a.defines.set("UV","transformedUv")):a.defines.set("UV","vUv"),a.shaderParts.set(Ut.FRAGMENT_HEAD,i),a.shaderParts.set(Ut.FRAGMENT_MAIN_IMAGE,s),a.shaderParts.set(Ut.FRAGMENT_MAIN_UV,l);for(const[f,h]of a.shaderParts)h!==null&&a.shaderParts.set(f,h.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(a)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(a,e=gr){this.fullscreenMaterial.depthBuffer=a,this.fullscreenMaterial.depthPacking=e;for(const i of this.effects)i.setDepthTexture(a,e)}render(a,e,i,s,l){for(const c of this.effects)c.update(a,e,s);if(!this.skipRendering||this.renderToScreen){const c=this.fullscreenMaterial;c.inputBuffer=e.texture,c.time+=s*this.timeScale,a.setRenderTarget(this.renderToScreen?null:i),a.render(this.scene,this.camera)}}setSize(a,e){this.fullscreenMaterial.setSize(a,e);for(const i of this.effects)i.setSize(a,e)}initialize(a,e,i){this.renderer=a;for(const s of this.effects)s.initialize(a,e,i);this.updateMaterial(),i!==void 0&&i!==Ln&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const a of this.effects)a.removeEventListener("change",this.listener),a.dispose()}handleEvent(a){switch(a.type){case"change":this.recompile();break}}};const B_=1,_3=()=>{const{width:a,height:e}=Nx(),i=le.useRef(null);return le.useEffect(()=>{const s=new Au,l=new Xn(75,a/e,.1,1e3);l.layers.enable(B_);const c=new Ux({alpha:!0,antialias:!0,powerPreference:"high-performance"});c.setClearColor(0,0),c.outputColorSpace=Pt,c.toneMapping=Ca,c.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),c.setSize(a,e),c.domElement.style.position="absolute",c.domElement.style.inset="0",c.domElement.style.zIndex="0",c.domElement.style.pointerEvents="none",c.domElement.style.background="transparent";const f=i.current;f instanceof HTMLElement&&!f.hasChildNodes()&&f.appendChild(c.domElement);const h=new fl;for(let E=0;E<50;E++){const M=.02+Math.random()*.08,T=new Lp(M,16,16),b=new Nu({color:new Nt(1,1,1)});b.toneMapped=!1,b.color.multiplyScalar(4);const _=new hi(T,b);_.position.set((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*10),_.layers.enable(B_),h.add(_)}s.add(h),l.position.z=5;const p=new sR(c);p.addPass(new Px(s,l));const m=new d3(s,l,{blendFunction:gt.ADD,intensity:1.1,luminanceThreshold:.02,luminanceSmoothing:.25,radius:.7,mipmapBlur:!0});h.children.forEach(E=>{m.selection.add(E)});const v=new v3(l,m);v.renderToScreen=!0,p.addPass(v);let g=0;const x=()=>{g=window.requestAnimationFrame(x),h.rotation.x+=18e-5,h.rotation.y+=11e-5,p.render()};return x(),()=>{window.cancelAnimationFrame(g),h.traverse(E=>{E instanceof hi&&(E.geometry.dispose(),Array.isArray(E.material)?E.material.forEach(M=>M.dispose()):E.material.dispose())}),p.dispose(),c.dispose(),f&&f.removeChild(c.domElement)}},[a,e]),S.jsx("div",{id:"three_background",style:{position:"fixed",top:0,left:0,width:`${a}px`,height:`${e}px`,overflow:"hidden",pointerEvents:"none"},ref:i})},Dh=a=>(console.log(a),S.jsx("div",{children:S.jsx(Lx,{width:a.width,categories:a.category_array})})),x3=["https://placehold.co/800x500/fef9c3/0f172a?text=Scan+from+The+Book","https://placehold.co/800x500/fee2e2/0f172a?text=Idea+Index"],y3=()=>{const a=co;return S.jsx(lo,{construction:!0,title:"The Book",children:S.jsxs("div",{className:"space-y-10 text-slate-100",children:[S.jsxs(Ri,{tone:"glass",className:"space-y-6 text-center",children:[S.jsx(Nn,{children:"Portable inspiration vault"}),S.jsx(pr,{quote:"The Book is my lifelong mixtape of great ideas, routines, and reminders.",sizePreset:"balanced"}),S.jsx(Ot,{children:"I started The Book in high school as a place to copy Sun Tzu quotes, Pixar storytelling beats, and notes about the artists and inventors I admired. Decades later it has evolved into a structured vault with prompts, reading lists, and rituals I revisit whenever I need to reset."})]}),S.jsxs(Ri,{className:"space-y-6",children:[S.jsx(Nn,{align:"left",children:"What lives inside"}),S.jsx(Ot,{children:"Sections include daily/weekly checklists, journaling prompts, creative warmups, biographies, and mental models. I pull from Charles Darwin's productivity ledger, Pixar's 22 storytelling rules, and my own running notes on art school critiques."}),S.jsx("div",{className:"grid gap-6 md:grid-cols-2",children:x3.map((e,i)=>S.jsx(Ai,{variant:"full",src:e,alt:`The Book placeholder ${i+1}`,figureLabel:i===0?"Scan":"Index",figureCaption:i===0?"Handwritten spread of quotes + prompts":"Tag structure for quick searching",withMatte:!0,imgClassName:"mx-auto w-full max-w-md aspect-video object-cover",figcaptionClassName:a},e))})]}),S.jsxs(Ri,{className:"space-y-6",children:[S.jsx(Nn,{align:"left",children:"From notebook to app"}),S.jsx(Ot,{children:"Once UrFriends finishes its AWS migration, The Book will become a simple mobile companion. Think of it as a playful creative brief generator: shake a prompt, review the routine, and capture what worked."}),S.jsx("div",{className:"flex justify-center",children:S.jsx(no,{href:"/projects/urfriends",label:"Follow the UrFriends build",newTab:!1})})]})]})})},Yi=["https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_ALL_WORKOUTS.png","https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_DATA_BOARD.png","https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_DATA_BOARD_REGRESSION.png","https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_DATA_CHART.png","https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_ORIGIN_SHEET.png","https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_G_SHEET.png","https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_RAW_JSON.png","https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_FILE.jpg","https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_AP_TIME.png","https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_HERO_PIC.webp"],S3=()=>{const a=co,e="border border-1 border-white/20 p-5 rounded-2xl";return S.jsx(lo,{construction:!1,title:"",children:S.jsxs("div",{className:"space-y-8 text-slate-100",children:[S.jsx(Nn,{align:"left",children:"Case Study: The RIP Sheet"}),S.jsxs("section",{className:"rip-section--intro ",children:[S.jsxs("div",{id:"rip-hero",className:"m-5",children:[S.jsx("style",{children:`
        #rip-hero {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        }

        #rip-hero-image { 
            grid-area: 1 / 1 / 2 / 2; 
            place-items: center;
        }

        #rip-hero-text { 
            grid-area: 1 / 2 / 2 / 4; 
              display: flex;
              justify-content: center; /* Horizontal center */
              align-items: center;   
        }

        @media (max-width: 639px) {
            /* mobile-only styles (before sm breakpoint) */
            #rip-hero {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: repeat(3, 1fr);
                grid-column-gap: 0px;
                grid-row-gap: 0px;
            }

            #rip-hero-image { 
                grid-area: 1 / 1 / 3 / 2; 
                width: full;
                height: 10em;
            }
            #rip-hero-image > img {
                width: 10em;
            }
            #rip-hero-text { grid-area: 3 / 1 / 4 / 2; }
        }
        `}),S.jsx("div",{id:"rip-hero-image",children:S.jsx("img",{src:Yi[9],alt:"Hero image",className:"rounded-full w-full h-full object-cover"})}),S.jsx("div",{id:"rip-hero-text",className:"flex align-center justify-center text-4xl sm:text-6xl xl:text-7xl text-center sm:p-10 leading-tight",style:{fontFamily:hr},children:"In 2018 I decided to learn weightlifting."})]}),S.jsx("div",{className:a,children:S.jsx(pr,{quote:"Since then, I’ve been developing tools and systems to become stronger and to consistently learn.",sizePreset:"compact"})}),S.jsx(Ot,{children:"In 2018, I set out to learn weightlifting. Over time, through repeated iteration, I built a system I call the RIP Sheet. Early versions failed to track progress and enforce consistency — but I kept refining, testing, and improving. The name is a double entendre: a memento mori and a call to get ripped. Today is the day you make that change — this very rep."}),S.jsx("div",{className:"rip-figure rip-figure--single",children:S.jsx(Ai,{variant:"quarter",src:Yi[4],alt:"Origin version of the RIP sheet layout",figureLabel:"Figure 1",figureCaption:"Early (circa 2018) RIP sheet worksheet.",withMatte:!0,figcaptionClassName:a})})]}),S.jsxs("section",{className:`rip-section rip-section--analog ${e}`,children:[S.jsx(Nn,{align:"left",children:"Analog beginnings"}),S.jsx(Ot,{children:"At first, there were multiple different supporting checklists based upon what I wanted to achieve in the gym any given 'day' — a 'back day' for example. I found that to be overly restrictive and not in line with life's unpredictability. I thought to put it together into a single document, one worksheet, and came up with a sassy name: the RIP Sheet. Getting 'stronger' has resonated with me all of my life, for me that's what weightlifting is about, and I need to do it while I'm still breathing! The worksheet was a structured attempt to bring discipline into the gym without relying on screens. The layout was clear, but the medium wasn’t. Tracking progress across loose pages quickly became impractical, and paper doesn’t hold up well in a gym environment where gains are a factor."}),S.jsx(Ot,{children:"Alongside the sheet, I created a small reference packet for stretching and brought both with me to train."}),S.jsx("div",{className:"rip-figure rip-figure--single",children:S.jsx(Ai,{variant:"half",src:Yi[7],alt:"Original workbook used for tracking workouts in the initial prototyping phase",figureLabel:"Figure 2",figureCaption:"The workbook taken to the gym in the initial prototyping phase.",withMatte:!0,figcaptionClassName:a})}),S.jsx(Ot,{children:"This workbook was the version I brought with me to the gym during early prototyping — an attempt to turn structure into habit. I found keeping track of the physical worksheets and transferring them into a digital format was very inconvenient."})]}),S.jsxs("section",{className:`rip-section rip-section--digital ${e}`,children:[S.jsx(Nn,{align:"left",children:"From paper to data"}),S.jsx(Ot,{children:"Eventually, I moved to Google Sheets, which made tracking progress far more efficient and reliable, allowing me to easily track every rep I've made since 2022. Because I had already been collecting this data, I was able to analyze it later in a Linear Algebra for Data Science course in 2025."}),S.jsx(Ot,{children:"In that class, I used Python to create least square regression analyses of each one of my exercises a period of 2.5 years. Seeing visualizations was highly motivational and validating for my stronger routines, but it also showed me clearly where I've been slacking recently. That was kind of like a bell ringing in the distance — effective visualizations can powerfully reinforce habits."}),S.jsx(Ot,{children:"Processing the raw data was complicated at first, and I tailored it using JavaScript and C++. Over time, I simplified the system: each set is stored as JSON, defined by exercise name, weight, reps, and date. This structure makes generating visualizations straightforward, with same-day workouts naturally aligning in the data."}),S.jsxs("div",{className:"rip-cta",children:[S.jsx("p",{className:`rip-cta__label ${a}`,children:"Explore the notebooks + regression overlays"}),S.jsx(no,{href:"https://colab.research.google.com/drive/1ENZlQbCl78q4ilT7lTgQ9YkcPgvTLV9d?usp=sharing",label:"View the Python analysis in Google Colab"})]}),S.jsxs("div",{className:"rip-gallery rip-gallery--grid",children:[S.jsx(Ai,{variant:"full",src:Yi[6],alt:"Origin version of the RIP sheet layout",figureLabel:"Figure 3",figureCaption:"The data is stored in a way that makes it easy to analyze.",withMatte:!0,imgClassName:"mx-auto w-full max-w-sm aspect-square object-cover",figcaptionClassName:a}),S.jsx(Ai,{variant:"full",src:Yi[5],alt:"Origin version of the RIP sheet layout",figureLabel:"Figure 4",figureCaption:"Although it looks basic, this is the system I've found supports consistency.",withMatte:!0,imgClassName:"mx-auto w-full max-w-sm aspect-square object-cover",figcaptionClassName:a}),S.jsx(Ai,{variant:"full",src:Yi[0],alt:"Collection of all workouts tracked in the RIP sheet",figureLabel:"Figure 5",figureCaption:"Consolidated workout history view.",withMatte:!0,imgClassName:"mx-auto w-full max-w-sm aspect-square object-cover",figcaptionClassName:a})]})]}),S.jsxs("section",{className:`rip-section rip-section--insights ${e}`,children:[S.jsx(Nn,{align:"left",children:"Insights"}),S.jsx(Ot,{children:"The very first thing that I wanted to see was the data related to every workout, all in one place. Being able to visualize the data seemed like it could be powerful, and it was. The first time the Python spit out this image my jaw dropped. This is a tool that can help make that life change."}),S.jsx("div",{className:"rip-figure rip-figure--wide",children:S.jsx(Ai,{variant:"centered",src:Yi[1],alt:"RIP sheet data board showing tracked exercise metrics",figureLabel:"Figure 6",figureCaption:"Data board used to monitor progress over time.",withMatte:!0,figcaptionClassName:a})}),S.jsx("div",{className:a,children:S.jsx(pr,{quote:"Today is the day you make that life change — this very rep.",sizePreset:"balanced"})}),S.jsx(Ot,{children:"Visualizations expose my habits instantly — what’s strong, what’s falling off, and where volume spikes. When I fit least-squares regressions to each lift and saw their slopes, I knew I'd found a powerful way to encourage progress."}),S.jsxs("div",{className:"rip-gallery rip-gallery--dual",children:[S.jsx(Ai,{variant:"centered",src:Yi[8],alt:"Regression analysis chart generated from RIP sheet data",figureLabel:"Figure 7",figureCaption:"Visualization of intuitively finding an ideal weight (40lb) for Arnold press over time.",withMatte:!0,figcaptionClassName:a}),S.jsx(Ai,{variant:"centered",src:Yi[3],alt:"Progress chart visualizing workout performance changes",figureLabel:"Figure 8",figureCaption:"Bar chart showing exercise type counts for the data captured.",withMatte:!0,figcaptionClassName:a})]}),S.jsx(Ot,{children:"The Arnold press visualization shows my workout routine ramping up from 20lb to 50lb, and settling on 40lb for that exercise. To me, it helps to see the progress and the pattern; knowing what to do next to improve is useful, and so is seeing how far I've come."}),S.jsx("div",{className:a,children:S.jsx(pr,{quote:"Fitting a least-squares regression to the data shows interesting trends:",sizePreset:"compact"})}),S.jsx("div",{className:"rip-figure rip-figure--wide",children:S.jsx(Ai,{variant:"centered",src:Yi[2],alt:"RIP sheet data board showing tracked exercise metrics",figureLabel:"Figure 9",figureCaption:"Least-squares regression snapshot for exercise trends.",withMatte:!0,figcaptionClassName:a})}),S.jsx(Ot,{children:"I know that there are many more methods and styles of visualizations that can facilitate positive change, help people to understand their progress, be inspired, and make informed decisions."})]}),S.jsxs("section",{className:`rip-section rip-section--future ${e}`,children:[S.jsx(Nn,{align:"left",children:"What’s next"}),S.jsx(Ot,{children:"My hope is to create a fitness app that allows people to develop realistic and healthy physical fitness routines and give useful visualizations that will let users know for sure how to generate real physical progress. The gym habit can be challenging to adopt, and I want to help people realize that learning that habit is counter-intuitive to first impressions."}),S.jsx(Ot,{children:"A major aspect of my routine has been settling on a system that is sustainable, repeatable, and useful. Google Sheets has allowed me to find the *steps* for a system that is sustainable, flexible, and accurate — migrating those steps into a tailor made UI will make a powerful tool for progress."}),S.jsx("div",{className:a,children:S.jsx(pr,{quote:"I believe I can help people to adopt a habit that they love.",sizePreset:"balanced"})})]})]})})},b3=["https://placehold.co/800x500/e0f2fe/0f172a?text=UrFriends+Dashboard","https://placehold.co/800x500/dbeafe/0f172a?text=Reminder+Composer","https://placehold.co/800x500/ede9fe/0f172a?text=Relationship+Journal"],E3=()=>{const a=co;return S.jsx(lo,{construction:!0,title:"UrFriends",children:S.jsxs("div",{className:"space-y-10 text-slate-100",children:[S.jsxs(Ri,{tone:"glass",className:"space-y-6 text-center",children:[S.jsx(Nn,{children:"Intentional relationship OS"}),S.jsx(pr,{quote:"UrFriends helps me reach out on purpose instead of out of guilt.",sizePreset:"balanced"}),S.jsx(Ot,{children:"UrFriends started as a personal CRM inspired by Benjamin Franklin's daily ledger and my grandmother Faye's immaculate address book. Every contact lives inside a tier (daily, weekly, monthly, yearly) so I know exactly when to reach out and what we last talked about."}),S.jsx("div",{className:"flex justify-center",children:S.jsx(no,{href:"https://public--urfriends-beta.us-central1.hosted.app/",label:"Open the current beta"})})]}),S.jsxs(Ri,{className:"space-y-6",children:[S.jsx(Nn,{align:"left",children:"Core flows"}),S.jsx(Ot,{children:"Each contact has a conversations journal, reminder cadence, and lightweight CRM fields (pronouns, kids' names, last meetup). I can promote or demote tiers in one tap. The beta began on Vercel (React + Node + MongoDB), moved to AWS Amplify, and now lives on Firebase for ease of auth + Firestore syncing."}),S.jsx("div",{className:"grid gap-6 md:grid-cols-3",children:b3.map((e,i)=>S.jsx(Ai,{variant:"full",src:e,alt:`UrFriends UI placeholder ${i+1}`,figureLabel:`Screen ${i+1}`,figureCaption:["Home dashboard","Tier reminder composer","Contact journal"][i],withMatte:!0,imgClassName:"mx-auto w-full max-w-sm aspect-video object-cover",figcaptionClassName:a},e))})]}),S.jsxs(Ri,{className:"space-y-6",children:[S.jsx(Nn,{align:"left",children:"Stack and roadmap"}),S.jsx(Ot,{children:"Firebase Auth + Firestore handle the single-user beta. Background Cloud Functions generate reminders and send emails via SendGrid. I'm actively migrating core data to AWS so multi-tenant accounts can launch with scoped DynamoDB tables and Lambda triggers. Google and Apple calendar integrations are next on deck."}),S.jsx(Ot,{children:"UrFriends is for people who still believe technology can deepen relationships. The app nudges me to share wins, remember context, and never let the meaningful folks fall through the cracks."})]}),S.jsxs(Ri,{className:"space-y-6",children:[S.jsx(Nn,{align:"left",children:"What's next"}),S.jsx(Ot,{children:"Finish the AWS migration, ship OAuth with Google + Apple, and open the beta to a curated cohort of founders and community builders. Long term, I want UrFriends to feel like a human operating system we actually enjoy using."})]})]})})},M3=["https://placehold.co/800x500/1e293b/ffffff?text=Widow+Bags+Moodboard","https://placehold.co/800x500/111827/ffffff?text=Prototype+Sketch"],T3=()=>{const a=co;return S.jsx(lo,{construction:!0,title:"Widow Bags",children:S.jsxs("div",{className:"space-y-10 text-slate-100",children:[S.jsxs(Ri,{tone:"glass",className:"space-y-6 text-center",children:[S.jsx(Nn,{children:"Concept studio"}),S.jsx(pr,{quote:"Widow Bags is a sculptural apparel line born at SAIC.",sizePreset:"balanced"}),S.jsx(Ot,{children:"The concept mixes high-energy nightlife silhouettes with utilitarian construction details. Think matte black textiles, exaggerated hardware, and pockets that feel architectural."})]}),S.jsxs(Ri,{className:"space-y-6",children:[S.jsx(Nn,{align:"left",children:"Design roots"}),S.jsx(Ot,{children:"The earliest prototypes came out of School of the Art Institute of Chicago studios. I blended patternmaking assignments with personal experiments—laser-cut vinyl overlays, powder-coated buckles, and partnered stitching with metal fabrication classmates."}),S.jsx("div",{className:"grid gap-6 md:grid-cols-2",children:M3.map((e,i)=>S.jsx(Ai,{variant:"full",src:e,alt:`Widow Bags placeholder ${i+1}`,figureLabel:i===0?"Moodboard":"Sketch",figureCaption:i===0?"Material + color palette":"Front elevation of the flag-ship bag",withMatte:!0,imgClassName:"mx-auto w-full max-w-md aspect-video object-cover",figcaptionClassName:a},e))})]}),S.jsxs(Ri,{className:"space-y-6",children:[S.jsx(Nn,{align:"left",children:"Next steps"}),S.jsx(Ot,{children:"I’m sourcing eco-friendly hardware suppliers, finalizing CAD patterns, and documenting the fabrication process so the line can launch with a small-batch drop. More renderings and fabrication photos coming soon."})]})]})})},w3="https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting/",A3=["KP.webp","G.webp","alien_invasion.webp","alley.webp","bad_painting.webp","bada_bing.webp","behind.webp","blinker.webp","blue_girl_1.webp","blue_girl_2.webp","bouquet.webp","bright_lights_big_city.webp","business_card.webp","california_onlookers.webp","connection.webp","dips.webp","eyes.webp","following.webp","funny_mustache_guy.webp","hilltop_city.webp","hollywood_hills.webp","house.webp","in_the_city.webp","jacks.webp","jacks_2.webp","james.webp","locked_away.webp","network.webp","night.webp","one_way.webp","online.webp","outlooker.webp","perspective.webp","pictures_of_then.webp","portrait_copy.webp","rainy_sun.webp","researchers.webp","street_corner.webp","sunday.webp","time.webp","tornado.webp","transfer.webp","victorian.webp","what_do_you.webp","woah_dude.webp","worm.webp","x.webp"],R3=a=>a&&a.endsWith(".webp")?a.slice(0,-5):"",C3=(a,e)=>a.map(i=>({src:`${e}${i}`,alt:i,title:i})),z_=a=>{const e=()=>a.current>=a.gallery_images.length-5?a.gallery_images.slice(a.gallery_images.length-5,a.gallery_images.length):a.gallery_images.slice(a.current+1,a.current+6);return S.jsx("div",{className:"gallery_subImages",children:e().map(i=>S.jsxs("button",{className:"mini_gallery_image",onClick:()=>a.setCurrent(a.images_array.indexOf(i.title?i.title:"")),children:[S.jsx("style",{children:`
              .mini_gallery_image:hover {
                outline: 2px solid rgba(255, 255, 255, 1);
                transition: outline .2s;
                opacity: 100%;

              .mini_gallery_image {
                opacity: 80%;
              }
              }
            `}),S.jsx("img",{src:i.src,alt:i.alt,title:i.title,className:"inline max-w-25 max-h-25 m-1 rounded-sm",loading:"lazy"},i.src)]}))})},Bx="rgba(255,255,255,0.2)",D3={border:`3px solid ${Bx}`,cursor:"not-allowed"},cu=a=>{const e=a.direction==="left"&&a.current===0||a.direction==="right"&&a.current===a.total-1;console.log(a.current,a.direction);const i=()=>{switch(a.graphic){case"caret-right":return S.jsx("div",{className:"h-10 w-10",children:S.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:S.jsx("path",{d:"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"})})});case"caret-left":return S.jsx("div",{className:"h-10 w-10",children:S.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:S.jsx("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"})})});case"arrow-right":return S.jsx("div",{className:" h-8 w-8",children:S.jsx("svg",{className:"",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:S.jsx("path",{d:"M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"})})});case"arrow-left":return S.jsx("div",{className:" h-8 w-8",children:S.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:S.jsx("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"})})})}};return S.jsxs("button",{style:{...(a.graphic=="arrow-left"||a.graphic=="arrow-right")&&e?D3:{}},className:`inline-block ${a.graphic=="caret-left"||a.graphic=="caret-right"?"LR_bttn":"border-3 border-white LR_bttn"} cursor-pointer p-1 h-20 w-20 bg-none rounded-[50%]`,onClick:a.onclick_func,disabled:e,"aria-label":a.direction==="right"?"Next painting":"Previous painting",type:"button",children:[S.jsx("style",{children:`
        .LR_bttn:hover {
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, .5)) drop-shadow(0 0 10px rgba(255, 255, 255, .5));
        }
        .LR_bttn:active {
          filter: none;
        }
        .LR_bttn {
          transition: filter .2s;
        }
      `}),S.jsx("div",{style:{fill:e?Bx:"white"},className:"flex justify-center items-center",children:i()})]})},U3=a=>{const[e,i]=le.useState(0),s=a.images&&a.images.length>0?a.images:A3,l=a.base_url?a.base_url:w3,c=C3(s,l),f=c.length-1,h=a.detail_medium?a.detail_medium:"acrylic on canvas",p=a.detail_years?a.detail_years:"2021-2025",m=c[e],v=R3(m.title);console.log(e,"is current");const g=()=>i(E=>Math.max(E-1,0)),x=()=>i(E=>Math.min(E+1,f));return a.width>BA?S.jsxs("div",{id:"gallery-container",className:"flex items-center justify-center h-screen",children:[S.jsx("div",{className:"gallery_leftButton ml-auto",children:S.jsx(cu,{graphic:"arrow-left",direction:"left",current:e,total:c.length,onclick_func:g})}),S.jsx("div",{className:"gallery_mainImage",children:S.jsx("img",{src:m.src,alt:m.alt,title:m.title,loading:"lazy"})}),S.jsx("div",{className:"gallery_rightButton",children:S.jsx(cu,{graphic:"arrow-right",direction:"right",current:e,total:c.length,onclick_func:x})}),S.jsx(z_,{images_array:s,gallery_images:c,current:e,setCurrent:i}),S.jsxs("div",{className:"gallery_textDetails text-white text-left p-10",children:[S.jsx("h3",{children:v}),S.jsx("p",{children:h}),S.jsx("p",{children:p})]})]}):S.jsxs("div",{children:[S.jsxs("div",{id:"",className:"flex flex-row justify-center",children:[S.jsx("style",{children:`
            .gallery_leftRightButton_cols {
              display: flex;
              align-items: center;
            }
            `}),S.jsx("button",{onClick:()=>g(),className:"gallery_leftRightButton_cols",children:S.jsx(cu,{graphic:"caret-left",direction:"left",current:e,total:c.length})}),S.jsx("img",{style:{width:"70%"},src:m.src,alt:m.alt,title:m.title,loading:"lazy"}),S.jsx("button",{onClick:()=>x(),className:"gallery_leftRightButton_cols",children:S.jsx(cu,{graphic:"caret-right",direction:"right",current:e,total:c.length})})]}),S.jsxs("div",{className:"text-left p-10",children:[S.jsx("h3",{children:v}),S.jsx("p",{children:h}),S.jsx("p",{children:p})]}),S.jsx(z_,{images_array:s,gallery_images:c,setCurrent:i,current:e})]})},N3=["pictures_of_then.webp","alley.webp","bright_lights_big_city.webp","behind.webp","G.webp","business_card.webp","blue_girl_1.webp","connection.webp","dips.webp"],L3=["alley.webp","eyes.webp","blue_girl_2.webp","KP.webp","house.webp","in_the_city.webp","jacks.webp","locked_away.webp","one_way.webp","time.webp"],O3=["bada_bing.webp","california_onlookers.webp","following.webp","hollywood_hills.webp","rainy_sun.webp","sunday.webp","tornado.webp","victorian.webp","woah_dude.webp","street_corner.webp"],P3=["bad_painting.webp","bouquet.webp","blinker.webp","james.webp","night.webp","outlooker.webp","transfer.webp","what_do_you.webp"],B3=["hilltop_city.webp","funny_mustache_guy.webp","jacks_2.webp","online.webp","perspective.webp","portrait_copy.webp","researchers.webp","x.webp"],z3=["worm.webp","network.webp"],I3=[{slug:"2025p",title:"2025",year_label:"2025",images:z3},{slug:"2024p",title:"2024",year_label:"2024",images:B3},{slug:"2023p",title:"2023",year_label:"2023",images:P3},{slug:"2022p",title:"2022",year_label:"2022",images:O3},{slug:"2021p",title:"2021",year_label:"2021",images:L3},{slug:"2020p",title:"2020",year_label:"2020",images:N3}],F3=I3.reduce((a,e)=>(a[e.slug]=e,a),{}),H3=a=>{const{periodSlug:e}=F1(),i=e?F3[e]:void 0;return i?S.jsxs("div",{className:"text-white px-6 py-20",style:{fontFamily:ea},children:[S.jsxs("h1",{style:{fontFamily:na},className:"text-4xl md:text-5xl font-bold mb-6",children:[i.title," Paintings"]}),S.jsx(U3,{width:a.width,images:i.images,detail_medium:"acrylic on canvas",detail_years:i.year_label})]}):S.jsxs("div",{className:"text-white px-6 py-20",style:{fontFamily:ea},children:[S.jsx("h1",{style:{fontFamily:na},className:"text-3xl font-semibold",children:"Painting period not found"}),S.jsx("p",{className:"mt-4 opacity-80",children:"Check back soon for more updates."})]})},zx=[{category:"Painting",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting_dir/painting-web-icons/painting-web-icon.jpg",url:"painting"},{category:"Drawing",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting_dir/drawing-web-icons/drawing-web-icon.jpg",url:"drawing"}],G3=[{category:"Web Development",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/web-design-web-icons/DM.webp",url:"../projects/web_dev"},{category:"UrFriends - SaaS",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/blog-images/UR_Friends.webp",url:"urfriends"},{category:"Widow Bags",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/product-design-icons/widow-icon.jpg",url:"widowbags"}],Ix=[{category:"Design",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/drawing-web-icons/design-drawing-icon.webp",url:"drawing_design"},{category:"Engineering",img:"https://jayhcrawford-webdocs.s3.us-east-2.amazonaws.com/webdocs-icons/tripod-drawing-icon.webp",url:"drawing_engineering"},{category:"Fine Art",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/drawing-web-icons/fine-art-drawing-icon.webp",url:"drawing_fa"},{category:"Doodling",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting_dir/drawing-web-icons/drawing-web-icon.jpg",url:"drawing_doodle"}],Fx=[{category:"2025",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting_dir/painting-web-icons/2024-painting-icon.jpg",url:"2025p"},{category:"2024",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting_dir/painting-web-icons/2023-painting-icon.jpg",url:"2024p"},{category:"2023",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting_dir/painting-web-icons/2022-painting-icon.jpg",url:"2023p"},{category:"2022",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting_dir/painting-web-icons/2021-painting-icon.jpg",url:"2022p"},{category:"2021",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting_dir/painting-web-icons/2020-painting-icon.jpg",url:"2021p"},{category:"2020 and Prior",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting_dir/painting-web-icons/2019-painting-icon.jpg",url:"2020p"}],V3=a=>{const[e,i]=le.useState(!1);return S.jsxs(S.Fragment,{children:[S.jsx("style",{children:`
      hr {
      color: white;
      border-width: 2px;
      opacity: ${xu}%

      }`}),S.jsx(Qr,{onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),to:a.url?a.url:"",children:S.jsx("div",{className:`${a.url==""?"cursor-not-allowed":"cursor-pointer"} text-white m-6 justify-center ${a.width<750?"flex flex-col":"flex"}`,children:S.jsxs("div",{className:` ${a.width<750?"flex flex-col items-center":"flex w-[70%]"}`,children:[S.jsx("div",{className:"p-1 m-1",children:S.jsx("div",{className:"relative",children:S.jsxs("div",{className:" h-full w-full relative z-100",children:[S.jsx("div",{className:`${a.url==""&&e?"absolute":"hidden"} w-full text-white font-black absolute bg-red-600 top-[120px] p-4 text-center`,children:"Under Construction"}),S.jsx(k3,{img:a.img,under_construction:a.under_construction})]})})}),S.jsxs("div",{className:`ml-10 ${a.width<750?"mt-8 w-full pr-20":"flex flex-col justify-center mb-10"}`,children:[S.jsx("h4",{style:{fontFamily:na},className:"text-2xl",children:a.title}),S.jsx("p",{style:{fontFamily:ea},children:a.about_txt})]})]})})}),S.jsx("hr",{})]})},k3=a=>S.jsxs(S.Fragment,{children:[a.under_construction&&a.under_construction===!0&&S.jsx("div",{className:"h-30 w-30 absolute",children:S.jsx("img",{src:"/under_construction.svg"})}),S.jsx("div",{style:{boxShadow:"5px 5px 5px rgba(0, 0, 0, 1)"},className:"w-80 h-60",children:S.jsx("img",{className:"rounded-lg w-80 h-60",style:{objectFit:"cover"},src:a.img})})]}),Fp=a=>S.jsxs("div",{style:{fontFamily:ea},children:[S.jsx("hr",{}),a.blog_array.map((e,i)=>S.jsx(V3,{url:e.url?e.url:"",title:e.title,about_txt:e.about_txt,img:e.img,width:a.width},i))]}),j3=a=>S.jsx(Fp,{width:a.width,blog_array:a.blog_array}),X3=[{title:"Red X CLI Utility",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/programming-icons/redX-CLI-icon.webp",about_txt:"Stub entry for the Red X CLI utility.",url:"https://github.com/jayhcrawford/3-month-habit-tracker"},{title:"RIP Sheet Data Analysis",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/blog-images/RIP.webp",about_txt:"Stub entry for the RIP Sheet data analysis project.",url:"/projects/ripsheet"}],Hx=[{category:"Web Development",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/web-design-web-icons/DM.webp",url:"web_dev"},{category:"Programming",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/programming-icons/Programming.webp",url:"programming"},{category:"3D Projects",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/3d-project-icons/orthographic-icon.jpg",url:"3d"},{category:"UrFriends - SaaS",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/blog-images/UR_Friends.webp",url:"urfriends"},{category:"The Book",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/blog-images/TheBook.webp",url:"thebook"},{category:"The RIP Sheet",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/blog-images/RIP.webp",url:"ripsheet"},{category:"Widow Bags",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/product-design-icons/widow-icon.jpg",url:"widowbags"}],W3=a=>S.jsx(Fp,{width:a.width,blog_array:a.blog_array}),q3=[{title:"This Website!",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/product-design-icons/jayhcrawford-domain.webp",about_txt:"This resposnive website uses Threejs, CSS, SVG, React, GitHub. I made the components.",url:"https://medium.com/@jayhcrawford/taking-my-github-from-html-based-pages-to-a-vite-based-react-app-a202d7be2ad0",under_construction:!0},{title:"d3 Data Visuatilzations",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/programming-icons/d3_tempGraph.webp",about_txt:"CSS by me; Originally written with while I did freeCodeCamp in 2023.",url:"d3-visualizations",under_construction:!1},{title:"Calculator",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/web-design-web-icons/Calc.webp",about_txt:"CSS by me; Originally written with React class components while I did freeCodeCamp in 2023; rewritten into React 19 with an LLM.",url:"https://codepen.io/jayhcrawford/pen/rNRQJZa?editors=1010",under_construction:!1},{title:"Chem 101 App",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/web-design-web-icons/Chem101.webp",about_txt:"Kind of like a study guide wiki. Essentially a markdown viewer/editor that allowed my classmates to create and propose revisions. Revisions were databased and reviewed using a seperately hosted API. Centralizing all the course content in an easy to access place helped me to get an A in this class.",url:"https://chem101-sg.vercel.app/index.html",under_construction:!1},{title:"UrFriends",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/blog-images/UR_Friends.webp",about_txt:"Will be a SaaS toolset for relationship building; inspired by the routines of world leaders. Started on MongoDB and Vercel; migrated to Amplify and AWS; settled on Firebase and Firestore. The hosted beta has auth and data privacy securely enforced and a Stripe webhook.",url:"/projects/urfriends",under_construction:!1},{title:"Drum Machine",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/web-design-web-icons/DM.webp",about_txt:"CSS by me; Originally written with React class components while I did freeCodeCamp in 2023; rewritten into React 19 with an LLM.",url:"https://codepen.io/jayhcrawford/pen/poYJzyb",under_construction:!1}],Y3=a=>S.jsx(Fp,{width:a.width,blog_array:a.blog_array}),Z3=[{title:"My Place",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/3d-project-icons/orthographic-icon.jpg",about_txt:"Autodesk Maya and Arnold project."},{title:"Door Project",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/3d-project-icons/3d-door-project-icon.jpg",about_txt:"Based on a drawing, built in Blender to emulate the drawing."},{title:"3D Me :-)",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/3d-project-icons/3d-jay-icon.jpg",about_txt:"Fully rigged, simple 3D character modeled after me. This helped me to better understand topology, weight-painting, and rigging."},{title:"Fusion360 Tripod",img:"https://jayhcrawford-webdocs.s3.us-east-2.amazonaws.com/webdocs-icons/tripod-drawing-icon.webp",about_txt:"In my first engineering drawing course, we used Fusion360. I made this there as my final."},{title:"Solidworks Japanese Lantern",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/product-design-icons/j-lantern-icon.webp",about_txt:"In my second engineering drawing course, my groupmates and I collaborated together to make a Japanese-inspired lamp."}],K3=`<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js"><\/script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/topojson/3.0.2/topojson.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/d3-scale-chromatic@3.0.0/dist/d3-scale-chromatic.min.js"><\/script>

<body>
  <div id="main">
    <h1 id="title">United States Educational Attainment</h1>
    <div id="description">
      Percentage of adults age 25 and older with a bachelor's degree or higher
      (2010-2014)
    </div>
    <svg width="960" height="600"></svg>
    <div id="source">
      Source:
      <a href="https://www.ers.usda.gov/data-products/county-level-data-sets/download-data.aspx">USDA Economic Research
        Service</a>
    </div>
  </div>
  <script src="script.js"><\/script>
</body>

</html>
`,Q3=`html,
body {
  padding: 0;
  margin: 0;
}

body {
  display: flex;
  justify-content: center;
  font-family: 'Arial';
}

#main {
  width: 1000px;
  display: flex;
  padding-top: 1rem;
  flex-direction: column;
  align-items: center;
}

.counties {
  fill: none;
}

.states {
  fill: none;
  stroke: black;
  stroke-linejoin: round;
}

div.tooltip {
  position: absolute;
  padding: 10px;
  font: 12px Arial;
  background: rgba(255, 255, 204, 0.9);
  box-shadow: 1px 1px 10px rgba(128, 128, 128, 0.6);
  border: 0px;
  border-radius: 2px;
  pointer-events: none;
}

#title {
  font-size: 3.5rem;
}

#description {
  text-align: center;
}

#source {
  align-self: flex-end;
  margin-top: 1rem;
  color: white;
}

a {
  text-decoration: none;
}


body {
  background-color: black;
}

#title, #description {
  color: white;
}

.key {
  color: white;
}
`,J3=`const projectName = 'choropleth';

// coded by @paycoguy & @ChristianPaul (github)
// Jay Crawford only made minor changes and investigated the structure

// Define body
var body = d3.select('body');

var svg = d3.select('svg');

// Define the div for the tooltip
var tooltip = body
  .append('div')
  .attr('class', 'tooltip')
  .attr('id', 'tooltip')
  .style('opacity', 0);

var path = d3.geoPath();

var x = d3.scaleLinear().domain([2.6, 75.1]).rangeRound([600, 860]);

var color = d3
  .scaleThreshold()
  .domain(d3.range(2.6, 75.1, (75.1 - 2.6) / 8))
  .range(d3.schemeOrRd[9]);

var g = svg
  .append('g')
  .attr('class', 'key')
  .attr('id', 'legend')
  .attr('transform', 'translate(0,20)');

g.selectAll('rect')
  .data(
    color.range().map(function (d) {
      d = color.invertExtent(d);
      if (d[0] === null) {
        d[0] = x.domain()[0];
      }
      if (d[1] === null) {
        d[1] = x.domain()[1];
      }
      return d;
    })
  )
  .enter()
  .append('rect')
  .attr('height', 30)
  .attr('x', function (d) {
    return x(d[0]);
  })
  .attr('width', function (d) {
    return d[0] && d[1] ? x(d[1]) - x(d[0]) : x(null);
  })
  .attr('fill', function (d) {
    return color(d[0]);
  });

g.append('text')
  .attr('class', 'caption')
  .attr('x', x.range()[0])
  .attr('y', -6)
  .attr('fill', '#000')
  .attr('text-anchor', 'start')
  .attr('font-weight', 'bold');

g.call(
  d3
    .axisBottom(x)
    .tickSize(33)
    .tickFormat(function (x) {
      return Math.round(x) + '%';
    })
    .tickValues(color.domain())
)
  .select('.domain')
  .remove();

const EDUCATION_FILE =
  'https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json';
const COUNTY_FILE =
  'https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json';

Promise.all([d3.json(COUNTY_FILE), d3.json(EDUCATION_FILE)])
  .then(data => ready(data[0], data[1]))
  .catch(err => console.log(err));

function ready(us, education) {
  svg
    .append('g')
    .attr('class', 'counties')
    .selectAll('path')
    .data(topojson.feature(us, us.objects.counties).features)
    .enter()
    .append('path')
    .attr('class', 'county')
    .attr('data-fips', function (d) {
      return d.id;
    })
    .attr('data-education', function (d) {
      var result = education.filter(function (obj) {
        return obj.fips === d.id;
      });
      if (result[0]) {
        return result[0].bachelorsOrHigher;
      }
      // could not find a matching fips id in the data
      console.log('could find data for: ', d.id);
      return 0;
    })
    .attr('fill', function (d) {
      var result = education.filter(function (obj) {
        return obj.fips === d.id;
      });
      if (result[0]) {
        return color(result[0].bachelorsOrHigher);
      }
      // could not find a matching fips id in the data
      return color(0);
    })
    .attr('d', path)
    .on('mouseover', function (event, d) {
      tooltip.style('opacity', 0.9);
      tooltip
        .html(function () {
          var result = education.filter(function (obj) {
            return obj.fips === d.id;
          });
          if (result[0]) {
            return (
              result[0]['area_name'] +
              ', ' +
              result[0]['state'] +
              ': ' +
              result[0].bachelorsOrHigher +
              '%'
            );
          }
          // could not find a matching fips id in the data
          return 0;
        })
        .attr('data-education', function () {
          var result = education.filter(function (obj) {
            return obj.fips === d.id;
          });
          if (result[0]) {
            return result[0].bachelorsOrHigher;
          }
          // could not find a matching fips id in the data
          return 0;
        })
        .style('left', event.pageX + 10 + 'px')
        .style('top', event.pageY - 28 + 'px');
    })
    .on('mouseout', function () {
      tooltip.style('opacity', 0);
    });

  svg
    .append('path')
    .datum(
      topojson.mesh(us, us.objects.states, function (a, b) {
        return a !== b;
      })
    )
    .attr('class', 'states')
    .attr('d', path);
}
`,$3=`<h1 id="title">US GDP Through the 20th and 21st Centuries</h1>
<svg id="#visualization"></svg>
`,eC=`#title {
  text-align: center;
}

.bar {
  width: 2.5px;
}

svg {
  background-color: rgb(248,248,248);
}

.bar:hover {
  opacity: 0;
  cursor: pointer;
}

#tooltip {
  background-color: white;
  border: 1px solid black;
  padding: 5px;
  display: none;
  width: 100px;
  box-shadow: 3px 3px black;
}

svg {
  display: flex;
  margin: auto;
  position: relative;
}
`,tC=`const margin = { top: 50, right: 30, bottom: 50, left: 70 };
const width = 900 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

const formatYear = d3.utcFormat("%Y");

const svg = d3
  .select("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", \`translate(\${margin.left}, \${margin.top})\`);

const tooltip = d3
  .select("body")
  .append("div")
  .attr("id", "tooltip")
  .style("opacity", 1)
  .attr("style", "position: absolute; opacity: 1;");

fetch(
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json"
)
  .then((response) => response.json())
  .then((data) => {
    const incData = data.data;
    const gdps = incData.map((d) => d[1]);
    const dates = incData.map((d) => new Date(d[0]));

    const x = d3
      .scaleUtc()
      .domain([d3.min(dates), d3.max(dates)])
      .range([0, width]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(gdps)])
      .range([height, 0]);

    svg
      .append("g")
      .attr("transform", \`translate(0, \${height})\`)
      .attr("id", "x-axis")
      .call(d3.axisBottom(x));

    svg
      .append("g")
      .attr("transform", \`translate(0,\${0})\`)
      .attr("id", "y-axis")
      .call(d3.axisLeft(y));

    svg
      .selectAll("rect")
      .data(incData)
      .enter()
      .append("rect")
      .attr("fill", "rgb(105,105,105)")
      .attr("class", "bar")
      .attr("x", (d) => x(new Date(d[0])))
      .attr("y", (d) => y(d[1]))
      .attr("width", \`\${width / incData.length - 0}px\`)
      .attr("height", (d) => height - y(d[1]))
      .attr("data-date", (d) => d[0])
      .attr("data-gdp", (d) => d[1])
      .attr("index", (d, i) => i)
      .on("mouseover", function (event, d) {
        tooltip
          .html(\`Year: \${formatYear(new Date(d[0]))} <br> GDP: \${d[1]}\`)
          .style("top", \`\${event.pageY + 10}px\`)
          .style("left", \`\${event.pageX + 20}px\`)
          .style("display", "block")
          .style("opacity", 1)
          .attr("data-date", d[0]);
      })
      .on("mouseout", function (event, d) {
        tooltip
          .style("top", \`0px\`)
          .style("left", \`0px\`)
          .style("opacity", 0)
          .html("");
      });
  });
`,nC=`<div id="stage">
  <h1 id="title">Doping in Professional Bicycle Racing</h1>
  <h4 id="slug">35 Fastest times up Alpe d'Huez</h4>
  <div id="chart-and-legend">
    <div id="chartHTML">
    </div>
    <div id="legend"><div id="red-legend"></div> with doping allegations<br><span id="grey-legend"></span>  without allegations</div>
  </div>

</div>
`,iC=`#title,
#slug {
  display: flex;
  align-contents: center;
  justify-content: center;
}

#chartHTML {
  background-color: rgb(248, 248, 248);
  height: 450px;
  width: 800px;
  positon: relative;
  padding: 30px 0px 0px 0px;
}

circle {
  opacity: 0.2;
}

#tooltip {
  height: 5em;
  width: 13em;
  position: absolute;
  padding: 1em;
  box-shadow: 4px 4px black;
  outline: 2px solid black;
  opacity: 0;
}

#legend {
  background-color: lightblue;
  margin: 1em;
  width: 12em;
  height: 4em;
  padding: 1em;
  background-color: rgb(248, 248, 248);

}

body {
  position: relative;
  font-family: arial;
}

#chart-and-legend {
  display: flex;
  justify-content: center;
}

#red-legend {
  background-color: red;
  height: 20px;
  width: 20px;
  opacity: .4;
  border-radius: 20px;
  display: inline-block;
}

#grey-legend {
  background-color: rgb(64,64,64);
  height: 20px;
  width: 20px;
  opacity: .4;
  border-radius: 20px;
  display: inline-block;
}

#stage {
  height: 50em;
}
`,aC=`import * as d3 from "https://esm.sh/d3";

const url =
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json";

const w = 900;
const h = 500;

const svg = d3
  .select("#chartHTML")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

const formatYear = d3.utcFormat("%Y");

const tooltip = d3
  .select("#chartHTML")
  .append("div")
  .attr("id", "tooltip")
  .attr("style", "position: absolute; opacity: 0;");


fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const incomingData = data;
    const cyclistTimes = incomingData.map((d) => d["Time"]);
    const performanceYear = incomingData.map((d) => d["Year"]);
    const yearRange = [d3.min(performanceYear), d3.max(performanceYear)];
    const cycTimeRange = [d3.min(cyclistTimes), d3.max(cyclistTimes)];

    const x = d3.scaleUtc(
      [
        new Date(\`\${yearRange[0] - 1}\`, 0, 1),
        new Date(\`\${yearRange[1] + 1}\`, 0, 1)
      ],
      [60, 760]
    );

    //For the sake of one 36-39 minute segment of time, this app treats all Y-data like a short period of time from single day in the year 2000.
    const y = d3.scaleUtc(
      [
        new Date(\`2000-01-01T01:36:40Z\`),
        new Date(\`2000-01-01T01:\${cycTimeRange[1]}Z\`)
      ],
      [0, 400]
    );

    svg
      .selectAll("rect")
      .data(incomingData)
      .enter()
      .append("circle")
      .attr("class", "dot")
      .attr("style", (d) => {
        if (d["Doping"] === "") {
          return "fill: rgb(64,64,64)";
        } else {
          return "fill: red";
        }
      })
      .attr("cx", (d) => {
        return x(new Date(\`\${d["Year"]}\`, 0, 1));
      })
      .attr("cy", (d) => {
        return y(new Date(\`2000-01-01T01:\${d["Time"]}Z\`));
      })
      .attr("r", 10)
      .attr("data-xvalue", (d) => d["Year"])
      .attr("data-yvalue", (d) => {
        return new Date(\`2000-01-01T01:\${d["Time"]}Z\`);
      })
      .attr("cyc-name", (d) => d["Name"])
      .attr("cyc-time", (d) => d["Time"])
      .attr("cyc-nationality", (d) => d["Nationality"])
      .attr("cyc-doping", (d) => {
        if (d["Doping"] === "") {
          return "clean";
        } else {
          return "doper";
        }
      });

    d3.selectAll(".dot")
      .on("mouseover", function (event, d) {
        d3.select(this).style("cursor", "pointer").style("opacity", 1);
        tooltip
          .attr("style", "opacity: 1;")
          .html(
            \`Name: <b> \${d3.select(this).attr("cyc-name")} </b> <br>
             Time: \${d3.select(this).attr("cyc-time")} <br>
             Nationality: \${d3.select(this).attr("cyc-nationality")} <br>
             Year: \${formatYear(new Date(d3.select(this).attr("data-xvalue")))}\`
          )
          .attr("data-year", d3.select(this).attr("data-xvalue"))
          .style("top", \`\${event.pageY + 10}px\`)
          .style("left", \`\${event.pageX + 20}px\`)
          .style("background-color", (d) => {
          if (d3.select(this).attr("cyc-doping") === "doper") {
            return "pink"
          } else {
            return "rgb(248,248,248)"
          }
        });
      })
      .on("mouseout", function (event, d) {
      d3.select(this).style("opacity", .2)

      if (d3.select(this).attr("cyc-doping") === "doper") {
         d3.select(this).style("fill", "red");
      } else {
        d3.select(this).style("fill", "rgb(64,64,64)");
      }

        d3.select("#tooltip")
          .style("opacity", 0)
          .style("top", \`0px\`)
          .style("left", \`0px\`);
      });

    const gx = svg
      .append("g")
      .attr("transform", \`translate(0,400)\`)
      .call(d3.axisBottom(x))
      .attr("id", "x-axis");

    const gy = svg
      .append("g")
      .attr("transform", \`translate(60,0)\`)
      .call(d3.axisLeft(y).ticks(15, "%M:%S"))
      .attr("id", "y-axis");
  });
`,rC=`


<div id="main-app">

  <div id="description"><span id="title"><u>Monthly Global Land-Surface Temperature</u>
      <p id="title-slug">1753 - 2015: base temperature 8.66℃</p></span>
      <span id="header-filler"></span>
    </div>


  <article id="heatmap-vizualization">
    <div id="chart">

    </div>
  </article>
  <article id="lower-contentData">

      <div id="legend">
            <div id="legend-grid-container">
                <div id="legend-graphic">
        </div>
              <div id="div1">Chart by Jay Crawford</div>
              <div id="div3"></div>
              <div id="div4"></div>
      </div>
  </div>

      <div id="info-box">Data provided by FreeCodeCamp.org:<br><span id="link"><a href="https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json">https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json</a></span>
      </div>
    </div>

  </div>
  </article>
`,sC=`#main-app {
  display: flex;
  justify-content: center;
  flex: 1;
  flex-direction: column;
  align-items: center;
  align-text: left;
  background-color: white;
  width: 1400px;
  margin: 60px auto auto auto;
  border: 2px solid black;
  position: relative;
}

#title {
  font-size: 24px;
  grid-area: 1 / 1 / 2 / 2;
  width: 550px;
  padding: 1em 1em 0em 1em;
  font-weight: bolder;
}

#title-slug {
  font-size: 16px;
  padding: 0;
  font-weight: normal;
}

#description {
  display: grid;
  font-family: sans-serif;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  padding: 1em;
}

#header-filler {
  grid-area: 1 / 2 / 2 / 3;
}

.cell {
  width: 5px;
  height: 37px;
}

#chart {
  padding: 1em;
  position: relative;
}

#link {
  font-size: 10px;
}

.color-sample {
  margin: 10px 1px 1px 1px;
}

.container {
  display: flex;
  gap: 10px;
}

#legend-graphic {
  grid-area: 1 / 2 / 2 / 3;
}

#lower-contentData {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  font-family: sans-serif;
}

#legend {
  width: 600px;
  grid-area: 1 / 1 / 2 / 2;
}

#info-box {
  background-color: white;
  grid-area: 1 / 2 / 2 / 3;
  font-size: 12px;
}

#legend-grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

#div1 {
  grid-area: 1 / 1 / 2 / 2;
}
#div3 {
  grid-area: 2 / 1 / 3 / 2;
}
#div4 {
  grid-area: 2 / 2 / 3 / 3;
}

#div1,
#div3,
#div4 {
  background-color: white;
}

#tooltip {
  background-color: white;
  opacity: 0;
  width: 240px;
  font-family: sans-serif;
  padding: 1.5em;
  border: 1px solid black;
  box-shadow: 3px 3px black;
}
`,oC=`import * as d3 from "https://esm.sh/d3";


//These colors are used in the chart.
const color1 = "#bbbbff",
  color2 = "#fcfbfa",
  color3 = "#ffe8e2",
  color4 = "#ffa4a2",
  color5 = "#da6868";


//tooltip has a "Date: " text feature which is populated in part by returnMonth below:
const returnMonth = (int) => {
  const passThru = int;
  switch (passThru.toString()) {
    case "1":
      return 'January';
    break;
    case "2":
      return 'February';
    break;
    case "3":
      return 'March';
    break;
    case "4":
      return 'April';
    break;
    case "5":
      return 'May';
    break;
    case "6":
      return 'June';
    break;
    case "7":
      return 'July';
    break;
    case "8":
      return 'August';
    break;
    case "9":
      return 'September';
    break;
    case "10":
      return 'October';
    break;
    case "11":
      return 'November';
    break;
    case "12":
      return 'December';
    break;
  }
}

//The legend uses values in this array to populate tooltip information; values here only change HTML, no values or ranges.
const scaleArr = [1.7, 3.7, 5.8, 7.8, 9.8, 13.9];

const url =
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json";

const tooltip = d3
  .select("body")
  .append("div")
  .attr("id", "tooltip")
  .attr("opacity", "0")
  .style("position", "absolute");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const baseTemp = data["baseTemperature"],
      allData = data["monthlyVariance"];

  //returns an array of two values, the lowest base temperature, and the highest base temperature.
    const varianceDomain = (allData) => {
      let allVariances = [];
      allData.forEach((data) => {
        allVariances.push(baseTemp + data["variance"]);
      });
      return [d3.min(allVariances), d3.max(allVariances)];
    };

    //colorScale populates an array with 6 values that are evenly spaced across the range of tmperatures to correlate with colors. Five colors requires 6 values.
    const colorScale = (varianceDomain) => {
      let colorArray = [
        Math.round((varianceDomain[0] + Number.EPSILON) * 100) / 100,
        Math.round(
          (varianceDomain[0] +
            (varianceDomain[1] - varianceDomain[0]) / 6 +
            Number.EPSILON) *
            100
        ) / 100,
        Math.round(
          (varianceDomain[0] +
            2 * ((varianceDomain[1] - varianceDomain[0]) / 6) +
            Number.EPSILON) *
            100
        ) / 100,
        Math.round(
          (varianceDomain[0] +
            3 * ((varianceDomain[1] - varianceDomain[0]) / 6) +
            Number.EPSILON) *
            100
        ) / 100,
        Math.round(
          (varianceDomain[0] +
            4 * ((varianceDomain[1] - varianceDomain[0]) / 6) +
            Number.EPSILON) *
            100
        ) / 100,
        Math.round((varianceDomain[1] + Number.EPSILON) * 100) / 100
      ];
      return colorArray;
    };

    //yearsDomain returns an array for the x-axis domain
    const yearsDomain = (allData) => {
      let allYears = [];
      allData.forEach((entry) => {
        allYears.push(entry["year"]);
      });
      return [new Date(\`\${d3.min(allYears)}\`), new Date(\`\${d3.max(allYears)}\`)];
    };

    const w = 1280;
    const h = 500;
    const padding = 60;

    const xScale = d3.scaleUtc(yearsDomain(allData), [padding, w - padding]);

    const yScale = d3
      .scaleBand()
      .domain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
      .range([h - padding, 0]);

    const svg = d3
      .select("#chart")
      .append("svg")
      .attr("width", w)
      .attr("height", h);

    const xAxis = d3.axisBottom(xScale);
    xAxis.ticks(27, "%Y");

    const yAxis = d3.axisLeft(yScale);
    yAxis.ticks(12).tickFormat((month) => {
      const date = new Date(0);
      date.setUTCMonth(month);
      return d3.timeFormat("%B")(date);
    });

    svg
      .append("g")
      .attr("transform", "translate(0," + (h - padding) + ")")
      .call(xAxis)
      .attr("id", "x-axis");

    svg
      .append("g")
      .attr("transform", \`translate(\${padding},0)\`)
      .call(yAxis)
      .attr("id", "y-axis");

    svg
      .selectAll("rect")
      .data(allData)
      .enter()
      .append("rect")
      .attr("class", "cell")
      .attr("x", (d) => {
        //this is where d["year"] is converted into an actual date
        return xScale(new Date(d["year"].toString()));
      })
      .attr("y", (d) => {
        //this is where d["month"] is converted into an actual date
        return yScale(d["month"]);
      })
      .attr("data-year", (d) => {
        return d["year"];
      })
      .attr("data-month", (d) => {
        return d["month"] - 1;
      })
      .attr("data-temp", (d) => {
        return Math.round(baseTemp + d["variance"]);
      })
      .attr("tru-temp", (d) => {
        return (
          Math.round((baseTemp + d["variance"] + Number.EPSILON) * 100) / 100
        );
      })
      .attr("fill", (d) => {
        const localVariance = baseTemp + d["variance"];
        const colorsArray = colorScale(varianceDomain(allData));
        if (localVariance >= colorsArray[0] && localVariance < colorsArray[1]) {
          return color1;
        }
        if (localVariance <= colorsArray[2] && localVariance > colorsArray[1]) {
          return color2;
        }
        if (localVariance <= colorsArray[3] && localVariance > colorsArray[2]) {
          return color3;
        }
        if (localVariance <= colorsArray[4] && localVariance > colorsArray[3]) {
          return color4;
        }
        if (localVariance === 5) {
          return color3;
        }
        if (localVariance <= colorsArray[5] && localVariance > colorsArray[4]) {
          return color5;
        } else {
          return "pink";
        }
      })
  .on("mouseover", function (event, d) {
        d3.select(this).style("cursor", "pointer").style("opacity", 0.5);
        tooltip
          .style("opacity", ".7")
          .style("top", \`\${event.pageY+ -30}px\`)
          .style("left", \`\${event.pageX + 50}px\`)
          .attr("data-year", (d) => {
            return d3.select(this).attr("data-year");
          })
          .attr("data-temp", (d) => {
            return d3.select(this).attr("data-temp");
          })
          .html(
            \`Month: \${returnMonth(parseInt(d3.select(this).attr('data-month')) + 1)} <br>Year: \${d3
              .select(this)
              .attr("data-year")}<br> Average Temperature: \${d3
              .select(this)
              .attr("tru-temp")}\\u00B0C\`
          );
      })
      .on("mouseout", function (event, d) {
        d3.select(this).style("opacity", 1);
        tooltip.style("opacity", "0").style("top", "0px").style("left", "0px");
      });;

    //fetch closure
  });

// Function to create square SVGs
function createSquareSVG(size, color) {
  const svgNS = "http://www.w3.org/2000/svg"; // SVG namespace
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("width", size);
  svg.setAttribute("height", size);
  svg.setAttribute("class", "color-sample");

  const rect = document.createElementNS(svgNS, "rect");
  rect.setAttribute("width", size);
  rect.setAttribute("height", size);
  rect.setAttribute("fill", color);

  svg.appendChild(rect);
  return svg;
}

// Append 5 square SVGs to the legend
const container = document.getElementById("legend-graphic");
const size = 40; // size of the square
const color = [color1, color2, color3, color4, color5]; // color of the square

for (let i = 0; i < 5; i++) {
  const svgSquare = createSquareSVG(size, color[i]);
  svgSquare.setAttribute("scale", \`\${scaleArr[i]} - \${scaleArr[i + 1]}\`);
  container.appendChild(svgSquare);
}


//This appends tooltip functionality to the "svg squares" in the legend.
d3.selectAll(".color-sample")
  .on("mouseover", function (event, d) {
    d3.select(this).style("cursor", "pointer");
    console.log(event.pageX);
    tooltip
      .style("opacity", ".7")
      .style("top", "670px")
      .style("left", \`\${event.pageX-20}px\`)
      .html(\`Temperature Range: \${d3.select(this).attr("scale")}\\u00B0C\`);
  })
  .on("mouseout", function (event, d) {
    tooltip.style("opacity", "0").style("top", "0px").style("left", "0px");
  });
`,lC=[{id:"1",title:"Global Temperature Story",description:"Line chart built with D3 that animates global surface temperatures from 1880 to present—hovering reveals contextual callouts.",tech:"HTML · CSS · D3.js",pen:"https://codepen.io/jayhcrawford/full/temp-1",files:"Codepen_files/1",html:K3,css:Q3,js:J3},{id:"2",title:"Solar vs Wind Adoption",description:"Responsive stacked area chart comparing utility-scale solar and wind generation from 2000–2030.",tech:"HTML · CSS · D3.js",pen:"https://codepen.io/jayhcrawford/full/temp-2",files:"Codepen_files/2",html:$3,css:eC,js:tC},{id:"3",title:"Malibu Fire Explorer",description:"Interactive choropleth overlaying historical fire perimeter data on top of a simplified California coastline map.",tech:"HTML · CSS · D3.js",pen:"https://codepen.io/jayhcrawford/full/temp-3",files:"Codepen_files/3",html:nC,css:iC,js:aC},{id:"4",title:"Clock Tower B-sides",description:"Radial visualization that converts streaming counts into a kinetic dial—each spoke pulses based on play velocity.",tech:"HTML · CSS · D3.js",pen:"https://codepen.io/jayhcrawford/full/temp-4",files:"Codepen_files/4",html:rC,css:sC,js:oC}],cC=a=>a.replace(/<\/script>/g,"<\\/script>"),uC=(a,e,i)=>`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <style>
      body { margin: 0; font-family: 'Inter', sans-serif; }
      ${e}
    </style>
  </head>
  <body>
    ${a}
    <script>
      ${cC(i)}
    <\/script>
  </body>
</html>`,fC=()=>{const a=co;return S.jsx(lo,{construction:!0,title:"D3 Visualizations",children:S.jsxs("div",{className:"space-y-10 text-slate-100",children:[S.jsxs(Ri,{tone:"glass",className:"space-y-6 text-center",children:[S.jsx(Nn,{children:"Codepen workbench"}),S.jsx(pr,{quote:"Visualizing data keeps me honest about the story I'm telling.",sizePreset:"balanced"}),S.jsxs(Ot,{children:["Each section below embeds the original D3 sketch inline (via ",S.jsx("code",{children:"srcDoc"}),"). For best performance these run in isolated iframes; swap them for dedicated React components later if we want tighter control."]})]}),lC.map(e=>S.jsxs(Ri,{className:"space-y-6",children:[S.jsxs("div",{className:"flex flex-col gap-3 md:flex-row md:items-center md:justify-between",children:[S.jsx(Nn,{align:"left",children:e.title}),S.jsx("span",{className:`text-sm ${a}`,children:e.tech})]}),S.jsx(Ot,{children:e.description}),S.jsx("div",{className:"rounded-2xl border border-white/15 bg-black/30 p-2",children:S.jsx("iframe",{title:e.title,srcDoc:uC(e.html,e.css,e.js),sandbox:"allow-scripts allow-same-origin",loading:"lazy",className:"w-full rounded-xl bg-white",style:{minHeight:520}})}),S.jsxs("div",{className:"flex flex-wrap gap-4",children:[S.jsx(no,{href:e.pen,label:"View on Codepen"}),S.jsx(no,{href:`https://github.com/jayhcrawford/jayhcrawford.github.io/tree/main/${e.files}`,label:"Browse source files"})]})]},e.id))]})})},dC=()=>S.jsx(fC,{}),hC=[{title:"Projects",url:"projects"},{title:"Art",url:"art"},{title:"About",url:"about"},{title:"Contact",url:"contact"},{title:"3D Projects",url:"3d"},...Hx.map(a=>({title:a.category,url:a.url})),...zx.map(a=>({title:a.category,url:a.url})),...Fx.map(a=>({title:a.category,url:a.url})),...Ix.map(a=>({title:a.category,url:a.url})),...G3.map(a=>({title:a.category,url:a.url}))],pC=()=>{const{width:a,height:e}=Nx(),i=le.useRef(null),l=Vi().pathname;function c(){return l.split("/").filter((f,h)=>h!==0)}return console.log(l,"is curernt"),le.useEffect(()=>{const f=new Au,h=new Xn(75,window.innerWidth/window.innerHeight,.1,1e3),p=new Ux({alpha:!0});p.setClearColor(0,0),p.setSize(window.innerWidth,window.innerHeight),p.domElement.style.position="absolute",p.domElement.style.top="0",p.domElement.style.left="0",p.domElement.style.zIndex="-1",i.current instanceof HTMLElement&&!i.current.hasChildNodes()&&i.current.appendChild(p.domElement);const m=new so,v=new Nu({color:65280}),g=new hi(m,v);f.add(g),h.position.z=5;const x=()=>{g.rotation.x+=.01,g.rotation.y+=.01,p.render(f,h),requestAnimationFrame(x)};return x(),()=>{i.current&&i.current.removeChild(p.domElement)}},[]),console.log(a,"is the width; and the height is: ",e),S.jsx(S.Fragment,{children:S.jsxs("div",{id:"outer_bg",children:[S.jsx("div",{style:{position:"fixed",top:0,left:0,width:`${a}px`,height:`${e}px`,overflow:"hidden"},children:S.jsx(JA,{})}),S.jsx(_3,{}),S.jsxs("div",{className:"pt-20",id:"inner_bg",ref:i,style:{position:"relative",width:"95vw",margin:"auto"},children:[S.jsxs("div",{children:[S.jsx(ZA,{width:a,path:l}),c().length>1&&S.jsx(QA,{split:c,locationData:hC})]}),S.jsxs("div",{id:"body_div",children:[S.jsx("main",{children:S.jsxs(eb,{children:[S.jsx(Un,{path:"/",element:S.jsx(S.Fragment,{})}),S.jsx(Un,{path:"/about",element:S.jsx(HA,{})}),S.jsx(Un,{path:"/projects/3d",element:S.jsx(Y3,{width:a,blog_array:Z3})}),S.jsx(Un,{path:"/projects",element:S.jsx(jA,{width:a,category_array:Hx})}),S.jsx(Un,{path:"/projects/web_dev",element:S.jsx(W3,{width:a,blog_array:q3})}),S.jsx(Un,{path:"/projects/programming",element:S.jsx(j3,{width:a,blog_array:X3})}),S.jsx(Un,{path:"/projects/web_dev/d3-visualizations",element:S.jsx(dC,{})}),S.jsx(Un,{path:"/art",element:S.jsx(Dh,{width:a,category_array:zx})}),S.jsx(Un,{path:"/art/painting",element:S.jsx(Dh,{width:a,category_array:Fx})}),S.jsx(Un,{path:"/art/painting/:periodSlug",element:S.jsx(H3,{width:a})}),S.jsx(Un,{path:"/art/drawing",element:S.jsx(Dh,{width:a,category_array:Ix})}),S.jsx(Un,{path:"/contact",element:S.jsx(GA,{})}),S.jsx(Un,{path:"/projects/urfriends",element:S.jsx(E3,{})}),S.jsx(Un,{path:"/projects/thebook",element:S.jsx(y3,{})}),S.jsx(Un,{path:"/projects/ripsheet",element:S.jsx(S3,{})}),S.jsx(Un,{path:"/projects/widowbags",element:S.jsx(T3,{})})]})}),S.jsx(XA,{path:l})]})]}),S.jsx("div",{className:"pointer-events-none flex justify-end fixed top-0 w-full z-100 ",children:S.jsx("a",{href:Sl,target:"new",children:S.jsx("button",{className:"pointer-events-auto p-2 rounded-lg m-2 bg-white cursor-pointer",children:S.jsx(KA,{})})})})]})})};function mC(){const{pathname:a}=Vi();return le.useEffect(()=>{window.scrollTo(0,0)},[a]),null}t1.createRoot(document.getElementById("root")).render(S.jsx(le.StrictMode,{children:S.jsxs(Mb,{basename:"/",children:[S.jsx(mC,{}),S.jsx(pC,{})]})}));
