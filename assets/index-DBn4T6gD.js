(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var rh={exports:{}},Lo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E0;function Ly(){if(E0)return Lo;E0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Lo.Fragment=e,Lo.jsx=i,Lo.jsxs=i,Lo}var b0;function Ny(){return b0||(b0=1,rh.exports=Ly()),rh.exports}var z=Ny(),sh={exports:{}},rt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T0;function Oy(){if(T0)return rt;T0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function v(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function y(N,ee,ye){this.props=N,this.context=ee,this.refs=A,this.updater=ye||M}y.prototype.isReactComponent={},y.prototype.setState=function(N,ee){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ee,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function _(){}_.prototype=y.prototype;function O(N,ee,ye){this.props=N,this.context=ee,this.refs=A,this.updater=ye||M}var U=O.prototype=new _;U.constructor=O,E(U,y.prototype),U.isPureReactComponent=!0;var C=Array.isArray,H={H:null,A:null,T:null,S:null,V:null},k=Object.prototype.hasOwnProperty;function I(N,ee,ye,Me,J,me){return ye=me.ref,{$$typeof:r,type:N,key:ee,ref:ye!==void 0?ye:null,props:me}}function q(N,ee){return I(N.type,ee,void 0,void 0,void 0,N.props)}function D(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function w(N){var ee={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ye){return ee[ye]})}var V=/\/+/g;function ce(N,ee){return typeof N=="object"&&N!==null&&N.key!=null?w(""+N.key):ee.toString(36)}function oe(){}function xe(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(oe,oe):(N.status="pending",N.then(function(ee){N.status==="pending"&&(N.status="fulfilled",N.value=ee)},function(ee){N.status==="pending"&&(N.status="rejected",N.reason=ee)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function de(N,ee,ye,Me,J){var me=typeof N;(me==="undefined"||me==="boolean")&&(N=null);var Se=!1;if(N===null)Se=!0;else switch(me){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(N.$$typeof){case r:case e:Se=!0;break;case g:return Se=N._init,de(Se(N._payload),ee,ye,Me,J)}}if(Se)return J=J(N),Se=Me===""?"."+ce(N,0):Me,C(J)?(ye="",Se!=null&&(ye=Se.replace(V,"$&/")+"/"),de(J,ee,ye,"",function(ot){return ot})):J!=null&&(D(J)&&(J=q(J,ye+(J.key==null||N&&N.key===J.key?"":(""+J.key).replace(V,"$&/")+"/")+Se)),ee.push(J)),1;Se=0;var Re=Me===""?".":Me+":";if(C(N))for(var Le=0;Le<N.length;Le++)Me=N[Le],me=Re+ce(Me,Le),Se+=de(Me,ee,ye,me,J);else if(Le=v(N),typeof Le=="function")for(N=Le.call(N),Le=0;!(Me=N.next()).done;)Me=Me.value,me=Re+ce(Me,Le++),Se+=de(Me,ee,ye,me,J);else if(me==="object"){if(typeof N.then=="function")return de(xe(N),ee,ye,Me,J);throw ee=String(N),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return Se}function B(N,ee,ye){if(N==null)return N;var Me=[],J=0;return de(N,Me,"","",function(me){return ee.call(ye,me,J++)}),Me}function K(N){if(N._status===-1){var ee=N._result;ee=ee(),ee.then(function(ye){(N._status===0||N._status===-1)&&(N._status=1,N._result=ye)},function(ye){(N._status===0||N._status===-1)&&(N._status=2,N._result=ye)}),N._status===-1&&(N._status=0,N._result=ee)}if(N._status===1)return N._result.default;throw N._result}var Y=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function Ee(){}return rt.Children={map:B,forEach:function(N,ee,ye){B(N,function(){ee.apply(this,arguments)},ye)},count:function(N){var ee=0;return B(N,function(){ee++}),ee},toArray:function(N){return B(N,function(ee){return ee})||[]},only:function(N){if(!D(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},rt.Component=y,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=O,rt.StrictMode=s,rt.Suspense=p,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,rt.__COMPILER_RUNTIME={__proto__:null,c:function(N){return H.H.useMemoCache(N)}},rt.cache=function(N){return function(){return N.apply(null,arguments)}},rt.cloneElement=function(N,ee,ye){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Me=E({},N.props),J=N.key,me=void 0;if(ee!=null)for(Se in ee.ref!==void 0&&(me=void 0),ee.key!==void 0&&(J=""+ee.key),ee)!k.call(ee,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&ee.ref===void 0||(Me[Se]=ee[Se]);var Se=arguments.length-2;if(Se===1)Me.children=ye;else if(1<Se){for(var Re=Array(Se),Le=0;Le<Se;Le++)Re[Le]=arguments[Le+2];Me.children=Re}return I(N.type,J,void 0,void 0,me,Me)},rt.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},rt.createElement=function(N,ee,ye){var Me,J={},me=null;if(ee!=null)for(Me in ee.key!==void 0&&(me=""+ee.key),ee)k.call(ee,Me)&&Me!=="key"&&Me!=="__self"&&Me!=="__source"&&(J[Me]=ee[Me]);var Se=arguments.length-2;if(Se===1)J.children=ye;else if(1<Se){for(var Re=Array(Se),Le=0;Le<Se;Le++)Re[Le]=arguments[Le+2];J.children=Re}if(N&&N.defaultProps)for(Me in Se=N.defaultProps,Se)J[Me]===void 0&&(J[Me]=Se[Me]);return I(N,me,void 0,void 0,null,J)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(N){return{$$typeof:d,render:N}},rt.isValidElement=D,rt.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:K}},rt.memo=function(N,ee){return{$$typeof:m,type:N,compare:ee===void 0?null:ee}},rt.startTransition=function(N){var ee=H.T,ye={};H.T=ye;try{var Me=N(),J=H.S;J!==null&&J(ye,Me),typeof Me=="object"&&Me!==null&&typeof Me.then=="function"&&Me.then(Ee,Y)}catch(me){Y(me)}finally{H.T=ee}},rt.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},rt.use=function(N){return H.H.use(N)},rt.useActionState=function(N,ee,ye){return H.H.useActionState(N,ee,ye)},rt.useCallback=function(N,ee){return H.H.useCallback(N,ee)},rt.useContext=function(N){return H.H.useContext(N)},rt.useDebugValue=function(){},rt.useDeferredValue=function(N,ee){return H.H.useDeferredValue(N,ee)},rt.useEffect=function(N,ee,ye){var Me=H.H;if(typeof ye=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Me.useEffect(N,ee)},rt.useId=function(){return H.H.useId()},rt.useImperativeHandle=function(N,ee,ye){return H.H.useImperativeHandle(N,ee,ye)},rt.useInsertionEffect=function(N,ee){return H.H.useInsertionEffect(N,ee)},rt.useLayoutEffect=function(N,ee){return H.H.useLayoutEffect(N,ee)},rt.useMemo=function(N,ee){return H.H.useMemo(N,ee)},rt.useOptimistic=function(N,ee){return H.H.useOptimistic(N,ee)},rt.useReducer=function(N,ee,ye){return H.H.useReducer(N,ee,ye)},rt.useRef=function(N){return H.H.useRef(N)},rt.useState=function(N){return H.H.useState(N)},rt.useSyncExternalStore=function(N,ee,ye){return H.H.useSyncExternalStore(N,ee,ye)},rt.useTransition=function(){return H.H.useTransition()},rt.version="19.1.0",rt}var A0;function Od(){return A0||(A0=1,sh.exports=Oy()),sh.exports}var pe=Od(),oh={exports:{}},No={},lh={exports:{}},ch={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R0;function Py(){return R0||(R0=1,function(r){function e(B,K){var Y=B.length;B.push(K);e:for(;0<Y;){var Ee=Y-1>>>1,N=B[Ee];if(0<l(N,K))B[Ee]=K,B[Y]=N,Y=Ee;else break e}}function i(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var K=B[0],Y=B.pop();if(Y!==K){B[0]=Y;e:for(var Ee=0,N=B.length,ee=N>>>1;Ee<ee;){var ye=2*(Ee+1)-1,Me=B[ye],J=ye+1,me=B[J];if(0>l(Me,Y))J<N&&0>l(me,Me)?(B[Ee]=me,B[J]=Y,Ee=J):(B[Ee]=Me,B[ye]=Y,Ee=ye);else if(J<N&&0>l(me,Y))B[Ee]=me,B[J]=Y,Ee=J;else break e}}return K}function l(B,K){var Y=B.sortIndex-K.sortIndex;return Y!==0?Y:B.id-K.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var p=[],m=[],g=1,x=null,v=3,M=!1,E=!1,A=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function C(B){for(var K=i(m);K!==null;){if(K.callback===null)s(m);else if(K.startTime<=B)s(m),K.sortIndex=K.expirationTime,e(p,K);else break;K=i(m)}}function H(B){if(A=!1,C(B),!E)if(i(p)!==null)E=!0,k||(k=!0,ce());else{var K=i(m);K!==null&&de(H,K.startTime-B)}}var k=!1,I=-1,q=5,D=-1;function w(){return y?!0:!(r.unstable_now()-D<q)}function V(){if(y=!1,k){var B=r.unstable_now();D=B;var K=!0;try{e:{E=!1,A&&(A=!1,O(I),I=-1),M=!0;var Y=v;try{t:{for(C(B),x=i(p);x!==null&&!(x.expirationTime>B&&w());){var Ee=x.callback;if(typeof Ee=="function"){x.callback=null,v=x.priorityLevel;var N=Ee(x.expirationTime<=B);if(B=r.unstable_now(),typeof N=="function"){x.callback=N,C(B),K=!0;break t}x===i(p)&&s(p),C(B)}else s(p);x=i(p)}if(x!==null)K=!0;else{var ee=i(m);ee!==null&&de(H,ee.startTime-B),K=!1}}break e}finally{x=null,v=Y,M=!1}K=void 0}}finally{K?ce():k=!1}}}var ce;if(typeof U=="function")ce=function(){U(V)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,xe=oe.port2;oe.port1.onmessage=V,ce=function(){xe.postMessage(null)}}else ce=function(){_(V,0)};function de(B,K){I=_(function(){B(r.unstable_now())},K)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(B){switch(v){case 1:case 2:case 3:var K=3;break;default:K=v}var Y=v;v=K;try{return B()}finally{v=Y}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(B,K){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Y=v;v=B;try{return K()}finally{v=Y}},r.unstable_scheduleCallback=function(B,K,Y){var Ee=r.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Ee+Y:Ee):Y=Ee,B){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=Y+N,B={id:g++,callback:K,priorityLevel:B,startTime:Y,expirationTime:N,sortIndex:-1},Y>Ee?(B.sortIndex=Y,e(m,B),i(p)===null&&B===i(m)&&(A?(O(I),I=-1):A=!0,de(H,Y-Ee))):(B.sortIndex=N,e(p,B),E||M||(E=!0,k||(k=!0,ce()))),B},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(B){var K=v;return function(){var Y=v;v=K;try{return B.apply(this,arguments)}finally{v=Y}}}}(ch)),ch}var w0;function By(){return w0||(w0=1,lh.exports=Py()),lh.exports}var uh={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C0;function zy(){if(C0)return Rn;C0=1;var r=Od();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:p,containerInfo:m,implementation:g}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Rn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return c(p,m,null,g)},Rn.flushSync=function(p){var m=h.T,g=s.p;try{if(h.T=null,s.p=2,p)return p()}finally{h.T=m,s.p=g,s.d.f()}},Rn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},Rn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Rn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,x=d(g,m.crossOrigin),v=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:x,integrity:v,fetchPriority:M}):g==="script"&&s.d.X(p,{crossOrigin:x,integrity:v,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Rn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=d(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},Rn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,x=d(g,m.crossOrigin);s.d.L(p,g,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Rn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=d(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},Rn.requestFormReset=function(p){s.d.r(p)},Rn.unstable_batchedUpdates=function(p,m){return p(m)},Rn.useFormState=function(p,m,g){return h.H.useFormState(p,m,g)},Rn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Rn.version="19.1.0",Rn}var D0;function Iy(){if(D0)return uh.exports;D0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),uh.exports=zy(),uh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0;function Fy(){if(U0)return No;U0=1;var r=By(),e=Od(),i=Iy();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return d(u),t;if(f===o)return d(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var S=!1,b=u.child;b;){if(b===a){S=!0,a=u,o=f;break}if(b===o){S=!0,o=u,a=f;break}b=b.sibling}if(!S){for(b=f.child;b;){if(b===a){S=!0,a=f,o=u;break}if(b===o){S=!0,o=f,a=u;break}b=b.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function m(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=m(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),U=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function ce(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Symbol.for("react.client.reference");function xe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===oe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case y:return"Profiler";case A:return"StrictMode";case H:return"Suspense";case k:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case U:return(t.displayName||"Context")+".Provider";case O:return(t._context.displayName||"Context")+".Consumer";case C:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:xe(t.type)||"Memo";case q:n=t._payload,t=t._init;try{return xe(t(n))}catch{}}return null}var de=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},Ee=[],N=-1;function ee(t){return{current:t}}function ye(t){0>N||(t.current=Ee[N],Ee[N]=null,N--)}function Me(t,n){N++,Ee[N]=t.current,t.current=n}var J=ee(null),me=ee(null),Se=ee(null),Re=ee(null);function Le(t,n){switch(Me(Se,n),Me(me,t),Me(J,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Qg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Qg(n),t=Jg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ye(J),Me(J,t)}function ot(){ye(J),ye(me),ye(Se)}function Ke(t){t.memoizedState!==null&&Me(Re,t);var n=J.current,a=Jg(n,t.type);n!==a&&(Me(me,t),Me(J,a))}function Ht(t){me.current===t&&(ye(J),ye(me)),Re.current===t&&(ye(Re),Ro._currentValue=Y)}var Bt=Object.prototype.hasOwnProperty,ft=r.unstable_scheduleCallback,F=r.unstable_cancelCallback,Ln=r.unstable_shouldYield,gt=r.unstable_requestPaint,it=r.unstable_now,We=r.unstable_getCurrentPriorityLevel,Ct=r.unstable_ImmediatePriority,Ve=r.unstable_UserBlockingPriority,L=r.unstable_NormalPriority,T=r.unstable_LowPriority,te=r.unstable_IdlePriority,ge=r.log,be=r.unstable_setDisableYieldValue,fe=null,Pe=null;function we(t){if(typeof ge=="function"&&be(t),Pe&&typeof Pe.setStrictMode=="function")try{Pe.setStrictMode(fe,t)}catch{}}var Ge=Math.clz32?Math.clz32:Fe,$e=Math.log,Ae=Math.LN2;function Fe(t){return t>>>=0,t===0?32:31-($e(t)/Ae|0)|0}var Ye=256,Qe=4194304;function Be(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ct(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var b=o&134217727;return b!==0?(o=b&~f,o!==0?u=Be(o):(S&=b,S!==0?u=Be(S):a||(a=b&~t,a!==0&&(u=Be(a))))):(b=o&~f,b!==0?u=Be(b):S!==0?u=Be(S):a||(a=o&~t,a!==0&&(u=Be(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function nt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Dt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var t=Ye;return Ye<<=1,(Ye&4194048)===0&&(Ye=256),t}function Ne(){var t=Qe;return Qe<<=1,(Qe&62914560)===0&&(Qe=4194304),t}function le(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function _e(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ze(t,n,a,o,u,f){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,P=t.expirationTimes,$=t.hiddenUpdates;for(a=S&~a;0<a;){var ue=31-Ge(a),ve=1<<ue;b[ue]=0,P[ue]=-1;var ne=$[ue];if(ne!==null)for($[ue]=null,ue=0;ue<ne.length;ue++){var ie=ne[ue];ie!==null&&(ie.lane&=-536870913)}a&=~ve}o!==0&&Oe(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(S&~n))}function Oe(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ge(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194090}function at(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Ge(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Gt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function en(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Mt(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:_0(t.type))}function Gn(t,n){var a=K.p;try{return K.p=t,n()}finally{K.p=a}}var dn=Math.random().toString(36).slice(2),on="__reactFiber$"+dn,xn="__reactProps$"+dn,Nn="__reactContainer$"+dn,Ka="__reactEvents$"+dn,nl="__reactListeners$"+dn,il="__reactHandles$"+dn,Qa="__reactResources$"+dn,fa="__reactMarker$"+dn;function ha(t){delete t[on],delete t[xn],delete t[Ka],delete t[nl],delete t[il]}function Di(t){var n=t[on];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Nn]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=n0(t);t!==null;){if(a=t[on])return a;t=n0(t)}return n}t=a,a=t.parentNode}return null}function Ui(t){if(t=t[on]||t[Nn]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Ja(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function da(t){var n=t[Qa];return n||(n=t[Qa]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tn(t){t[fa]=!0}var al=new Set,rl={};function Li(t,n){R(t,n),R(t+"Capture",n)}function R(t,n){for(rl[t]=n,t=0;t<n.length;t++)al.add(n[t])}var j=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ae={},re={};function Z(t){return Bt.call(re,t)?!0:Bt.call(ae,t)?!1:j.test(t)?re[t]=!0:(ae[t]=!0,!1)}function Te(t,n,a){if(Z(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ce(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function De(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}var Ie,et;function qe(t){if(Ie===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ie=n&&n[1]||"",et=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ie+t+et}var Xe=!1;function dt(t,n){if(!t||Xe)return"";Xe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ve=function(){throw Error()};if(Object.defineProperty(ve.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ve,[])}catch(ie){var ne=ie}Reflect.construct(t,[],ve)}else{try{ve.call()}catch(ie){ne=ie}t.call(ve.prototype)}}else{try{throw Error()}catch(ie){ne=ie}(ve=t())&&typeof ve.catch=="function"&&ve.catch(function(){})}}catch(ie){if(ie&&ne&&typeof ie.stack=="string")return[ie.stack,ne.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),S=f[0],b=f[1];if(S&&b){var P=S.split(`
`),$=b.split(`
`);for(u=o=0;o<P.length&&!P[o].includes("DetermineComponentFrameRoot");)o++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(o===P.length||u===$.length)for(o=P.length-1,u=$.length-1;1<=o&&0<=u&&P[o]!==$[u];)u--;for(;1<=o&&0<=u;o--,u--)if(P[o]!==$[u]){if(o!==1||u!==1)do if(o--,u--,0>u||P[o]!==$[u]){var ue=`
`+P[o].replace(" at new "," at ");return t.displayName&&ue.includes("<anonymous>")&&(ue=ue.replace("<anonymous>",t.displayName)),ue}while(1<=o&&0<=u);break}}}finally{Xe=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?qe(a):""}function Et(t){switch(t.tag){case 26:case 27:case 5:return qe(t.type);case 16:return qe("Lazy");case 13:return qe("Suspense");case 19:return qe("SuspenseList");case 0:case 15:return dt(t.type,!1);case 11:return dt(t.type.render,!1);case 1:return dt(t.type,!0);case 31:return qe("Activity");default:return""}}function Wt(t){try{var n="";do n+=Et(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function _t(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function je(t){var n=vt(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){o=""+S,f.call(this,S)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(S){o=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Yt(t){t._valueTracker||(t._valueTracker=je(t))}function St(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=vt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function bn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var pa=/[\n"\\]/g;function Vt(t){return t.replace(pa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ni(t,n,a,o,u,f,S,b){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+_t(n)):t.value!==""+_t(n)&&(t.value=""+_t(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?Tn(t,S,_t(n)):a!=null?Tn(t,S,_t(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+_t(b):t.removeAttribute("name")}function zt(t,n,a,o,u,f,S,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+_t(a):"",n=n!=null?""+_t(n):a,b||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=b?t.checked:!!o,t.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S)}function Tn(t,n,a){n==="number"&&bn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ln(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+_t(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function pn(t,n,a){if(n!=null&&(n=""+_t(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+_t(a):""}function yn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(de(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=_t(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function xi(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Oi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qd(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Oi.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Jd(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Qd(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Qd(t,f,n[f])}function iu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Uv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sl(t){return Uv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var au=null;function ru(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Nr=null,Or=null;function $d(t){var n=Ui(t);if(n&&(t=n.stateNode)){var a=t[xn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ni(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Vt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[xn]||null;if(!u)throw Error(s(90));Ni(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&St(o)}break e;case"textarea":pn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ln(t,!!a.multiple,n,!1)}}}var su=!1;function ep(t,n,a){if(su)return t(n,a);su=!0;try{var o=t(n);return o}finally{if(su=!1,(Nr!==null||Or!==null)&&(Wl(),Nr&&(n=Nr,t=Or,Or=Nr=null,$d(n),t)))for(n=0;n<t.length;n++)$d(t[n])}}function Fs(t,n){var a=t.stateNode;if(a===null)return null;var o=a[xn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ou=!1;if(Pi)try{var Hs={};Object.defineProperty(Hs,"passive",{get:function(){ou=!0}}),window.addEventListener("test",Hs,Hs),window.removeEventListener("test",Hs,Hs)}catch{ou=!1}var ma=null,lu=null,ol=null;function tp(){if(ol)return ol;var t,n=lu,a=n.length,o,u="value"in ma?ma.value:ma.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var S=a-t;for(o=1;o<=S&&n[a-o]===u[f-o];o++);return ol=u.slice(t,1<o?1-o:void 0)}function ll(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function cl(){return!0}function np(){return!1}function On(t){function n(a,o,u,f,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?cl:np,this.isPropagationStopped=np,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),n}var $a={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ul=On($a),Gs=g({},$a,{view:0,detail:0}),Lv=On(Gs),cu,uu,Vs,fl=g({},Gs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vs&&(Vs&&t.type==="mousemove"?(cu=t.screenX-Vs.screenX,uu=t.screenY-Vs.screenY):uu=cu=0,Vs=t),cu)},movementY:function(t){return"movementY"in t?t.movementY:uu}}),ip=On(fl),Nv=g({},fl,{dataTransfer:0}),Ov=On(Nv),Pv=g({},Gs,{relatedTarget:0}),fu=On(Pv),Bv=g({},$a,{animationName:0,elapsedTime:0,pseudoElement:0}),zv=On(Bv),Iv=g({},$a,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Fv=On(Iv),Hv=g({},$a,{data:0}),ap=On(Hv),Gv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=kv[t])?!!n[t]:!1}function hu(){return Xv}var Wv=g({},Gs,{key:function(t){if(t.key){var n=Gv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Vv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hu,charCode:function(t){return t.type==="keypress"?ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qv=On(Wv),jv=g({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rp=On(jv),Yv=g({},Gs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hu}),Zv=On(Yv),Kv=g({},$a,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qv=On(Kv),Jv=g({},fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$v=On(Jv),ex=g({},$a,{newState:0,oldState:0}),tx=On(ex),nx=[9,13,27,32],du=Pi&&"CompositionEvent"in window,ks=null;Pi&&"documentMode"in document&&(ks=document.documentMode);var ix=Pi&&"TextEvent"in window&&!ks,sp=Pi&&(!du||ks&&8<ks&&11>=ks),op=" ",lp=!1;function cp(t,n){switch(t){case"keyup":return nx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function up(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pr=!1;function ax(t,n){switch(t){case"compositionend":return up(n);case"keypress":return n.which!==32?null:(lp=!0,op);case"textInput":return t=n.data,t===op&&lp?null:t;default:return null}}function rx(t,n){if(Pr)return t==="compositionend"||!du&&cp(t,n)?(t=tp(),ol=lu=ma=null,Pr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return sp&&n.locale!=="ko"?null:n.data;default:return null}}var sx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!sx[t.type]:n==="textarea"}function hp(t,n,a,o){Nr?Or?Or.push(o):Or=[o]:Nr=o,n=Ql(n,"onChange"),0<n.length&&(a=new ul("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Xs=null,Ws=null;function ox(t){qg(t,0)}function hl(t){var n=Ja(t);if(St(n))return t}function dp(t,n){if(t==="change")return n}var pp=!1;if(Pi){var pu;if(Pi){var mu="oninput"in document;if(!mu){var mp=document.createElement("div");mp.setAttribute("oninput","return;"),mu=typeof mp.oninput=="function"}pu=mu}else pu=!1;pp=pu&&(!document.documentMode||9<document.documentMode)}function gp(){Xs&&(Xs.detachEvent("onpropertychange",_p),Ws=Xs=null)}function _p(t){if(t.propertyName==="value"&&hl(Ws)){var n=[];hp(n,Ws,t,ru(t)),ep(ox,n)}}function lx(t,n,a){t==="focusin"?(gp(),Xs=n,Ws=a,Xs.attachEvent("onpropertychange",_p)):t==="focusout"&&gp()}function cx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hl(Ws)}function ux(t,n){if(t==="click")return hl(n)}function fx(t,n){if(t==="input"||t==="change")return hl(n)}function hx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Vn=typeof Object.is=="function"?Object.is:hx;function qs(t,n){if(Vn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Bt.call(n,u)||!Vn(t[u],n[u]))return!1}return!0}function vp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xp(t,n){var a=vp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=vp(a)}}function yp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?yp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Sp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=bn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=bn(t.document)}return n}function gu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var dx=Pi&&"documentMode"in document&&11>=document.documentMode,Br=null,_u=null,js=null,vu=!1;function Mp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;vu||Br==null||Br!==bn(o)||(o=Br,"selectionStart"in o&&gu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),js&&qs(js,o)||(js=o,o=Ql(_u,"onSelect"),0<o.length&&(n=new ul("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Br)))}function er(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var zr={animationend:er("Animation","AnimationEnd"),animationiteration:er("Animation","AnimationIteration"),animationstart:er("Animation","AnimationStart"),transitionrun:er("Transition","TransitionRun"),transitionstart:er("Transition","TransitionStart"),transitioncancel:er("Transition","TransitionCancel"),transitionend:er("Transition","TransitionEnd")},xu={},Ep={};Pi&&(Ep=document.createElement("div").style,"AnimationEvent"in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),"TransitionEvent"in window||delete zr.transitionend.transition);function tr(t){if(xu[t])return xu[t];if(!zr[t])return t;var n=zr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Ep)return xu[t]=n[a];return t}var bp=tr("animationend"),Tp=tr("animationiteration"),Ap=tr("animationstart"),px=tr("transitionrun"),mx=tr("transitionstart"),gx=tr("transitioncancel"),Rp=tr("transitionend"),wp=new Map,yu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yu.push("scrollEnd");function li(t,n){wp.set(t,n),Li(n,[t])}var Cp=new WeakMap;function Jn(t,n){if(typeof t=="object"&&t!==null){var a=Cp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Wt(n)},Cp.set(t,n),n)}return{value:t,source:n,stack:Wt(n)}}var $n=[],Ir=0,Su=0;function dl(){for(var t=Ir,n=Su=Ir=0;n<t;){var a=$n[n];$n[n++]=null;var o=$n[n];$n[n++]=null;var u=$n[n];$n[n++]=null;var f=$n[n];if($n[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}f!==0&&Dp(a,u,f)}}function pl(t,n,a,o){$n[Ir++]=t,$n[Ir++]=n,$n[Ir++]=a,$n[Ir++]=o,Su|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Mu(t,n,a,o){return pl(t,n,a,o),ml(t)}function Fr(t,n){return pl(t,null,null,n),ml(t)}function Dp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Ge(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function ml(t){if(50<xo)throw xo=0,Cf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Hr={};function _x(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,n,a,o){return new _x(t,n,a,o)}function Eu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Bi(t,n){var a=t.alternate;return a===null?(a=kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Up(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function gl(t,n,a,o,u,f){var S=0;if(o=t,typeof t=="function")Eu(t)&&(S=1);else if(typeof t=="string")S=xy(t,a,J.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case D:return t=kn(31,a,n,u),t.elementType=D,t.lanes=f,t;case E:return nr(a.children,u,f,n);case A:S=8,u|=24;break;case y:return t=kn(12,a,n,u|2),t.elementType=y,t.lanes=f,t;case H:return t=kn(13,a,n,u),t.elementType=H,t.lanes=f,t;case k:return t=kn(19,a,n,u),t.elementType=k,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case U:S=10;break e;case O:S=9;break e;case C:S=11;break e;case I:S=14;break e;case q:S=16,o=null;break e}S=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=kn(S,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function nr(t,n,a,o){return t=kn(7,t,o,n),t.lanes=a,t}function bu(t,n,a){return t=kn(6,t,null,n),t.lanes=a,t}function Tu(t,n,a){return n=kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Gr=[],Vr=0,_l=null,vl=0,ei=[],ti=0,ir=null,zi=1,Ii="";function ar(t,n){Gr[Vr++]=vl,Gr[Vr++]=_l,_l=t,vl=n}function Lp(t,n,a){ei[ti++]=zi,ei[ti++]=Ii,ei[ti++]=ir,ir=t;var o=zi;t=Ii;var u=32-Ge(o)-1;o&=~(1<<u),a+=1;var f=32-Ge(n)+u;if(30<f){var S=u-u%5;f=(o&(1<<S)-1).toString(32),o>>=S,u-=S,zi=1<<32-Ge(n)+u|a<<u|o,Ii=f+t}else zi=1<<f|a<<u|o,Ii=t}function Au(t){t.return!==null&&(ar(t,1),Lp(t,1,0))}function Ru(t){for(;t===_l;)_l=Gr[--Vr],Gr[Vr]=null,vl=Gr[--Vr],Gr[Vr]=null;for(;t===ir;)ir=ei[--ti],ei[ti]=null,Ii=ei[--ti],ei[ti]=null,zi=ei[--ti],ei[ti]=null}var Dn=null,Zt=null,At=!1,rr=null,yi=!1,wu=Error(s(519));function sr(t){var n=Error(s(418,""));throw Ks(Jn(n,t)),wu}function Np(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[on]=t,n[xn]=o,a){case"dialog":mt("cancel",n),mt("close",n);break;case"iframe":case"object":case"embed":mt("load",n);break;case"video":case"audio":for(a=0;a<So.length;a++)mt(So[a],n);break;case"source":mt("error",n);break;case"img":case"image":case"link":mt("error",n),mt("load",n);break;case"details":mt("toggle",n);break;case"input":mt("invalid",n),zt(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Yt(n);break;case"select":mt("invalid",n);break;case"textarea":mt("invalid",n),yn(n,o.value,o.defaultValue,o.children),Yt(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Kg(n.textContent,a)?(o.popover!=null&&(mt("beforetoggle",n),mt("toggle",n)),o.onScroll!=null&&mt("scroll",n),o.onScrollEnd!=null&&mt("scrollend",n),o.onClick!=null&&(n.onclick=Jl),n=!0):n=!1,n||sr(t)}function Op(t){for(Dn=t.return;Dn;)switch(Dn.tag){case 5:case 13:yi=!1;return;case 27:case 3:yi=!0;return;default:Dn=Dn.return}}function Ys(t){if(t!==Dn)return!1;if(!At)return Op(t),At=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Wf(t.type,t.memoizedProps)),a=!a),a&&Zt&&sr(t),Op(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Zt=ui(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Zt=null}}else n===27?(n=Zt,Ua(t.type)?(t=Zf,Zf=null,Zt=t):Zt=n):Zt=Dn?ui(t.stateNode.nextSibling):null;return!0}function Zs(){Zt=Dn=null,At=!1}function Pp(){var t=rr;return t!==null&&(zn===null?zn=t:zn.push.apply(zn,t),rr=null),t}function Ks(t){rr===null?rr=[t]:rr.push(t)}var Cu=ee(null),or=null,Fi=null;function ga(t,n,a){Me(Cu,n._currentValue),n._currentValue=a}function Hi(t){t._currentValue=Cu.current,ye(Cu)}function Du(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Uu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var S=u.child;f=f.firstContext;e:for(;f!==null;){var b=f;f=u;for(var P=0;P<n.length;P++)if(b.context===n[P]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),Du(f.return,a,t),o||(S=null);break e}f=b.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Du(S,a,t),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===t){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Qs(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var b=u.type;Vn(u.pendingProps.value,S.value)||(t!==null?t.push(b):t=[b])}}else if(u===Re.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Ro):t=[Ro])}u=u.return}t!==null&&Uu(n,t,a,o),n.flags|=262144}function xl(t){for(t=t.firstContext;t!==null;){if(!Vn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function lr(t){or=t,Fi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return Bp(or,t)}function yl(t,n){return or===null&&lr(t),Bp(t,n)}function Bp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Fi===null){if(t===null)throw Error(s(308));Fi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Fi=Fi.next=n;return a}var vx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},xx=r.unstable_scheduleCallback,yx=r.unstable_NormalPriority,cn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lu(){return{controller:new vx,data:new Map,refCount:0}}function Js(t){t.refCount--,t.refCount===0&&xx(yx,function(){t.controller.abort()})}var $s=null,Nu=0,kr=0,Xr=null;function Sx(t,n){if($s===null){var a=$s=[];Nu=0,kr=Bf(),Xr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Nu++,n.then(zp,zp),n}function zp(){if(--Nu===0&&$s!==null){Xr!==null&&(Xr.status="fulfilled");var t=$s;$s=null,kr=0,Xr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Mx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Ip=B.S;B.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Sx(t,n),Ip!==null&&Ip(t,n)};var cr=ee(null);function Ou(){var t=cr.current;return t!==null?t:kt.pooledCache}function Sl(t,n){n===null?Me(cr,cr.current):Me(cr,n.pool)}function Fp(){var t=Ou();return t===null?null:{parent:cn._currentValue,pool:t}}var eo=Error(s(460)),Hp=Error(s(474)),Ml=Error(s(542)),Pu={then:function(){}};function Gp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function El(){}function Vp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(El,El),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Xp(t),t;default:if(typeof n.status=="string")n.then(El,El);else{if(t=kt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Xp(t),t}throw to=n,eo}}var to=null;function kp(){if(to===null)throw Error(s(459));var t=to;return to=null,t}function Xp(t){if(t===eo||t===Ml)throw Error(s(483))}var _a=!1;function Bu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function va(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function xa(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Rt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=ml(t),Dp(t,null,a),n}return pl(t,o,n,a),ml(t)}function no(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,at(t,a)}}function Iu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Fu=!1;function io(){if(Fu){var t=Xr;if(t!==null)throw t}}function ao(t,n,a,o){Fu=!1;var u=t.updateQueue;_a=!1;var f=u.firstBaseUpdate,S=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var P=b,$=P.next;P.next=null,S===null?f=$:S.next=$,S=P;var ue=t.alternate;ue!==null&&(ue=ue.updateQueue,b=ue.lastBaseUpdate,b!==S&&(b===null?ue.firstBaseUpdate=$:b.next=$,ue.lastBaseUpdate=P))}if(f!==null){var ve=u.baseState;S=0,ue=$=P=null,b=f;do{var ne=b.lane&-536870913,ie=ne!==b.lane;if(ie?(yt&ne)===ne:(o&ne)===ne){ne!==0&&ne===kr&&(Fu=!0),ue!==null&&(ue=ue.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var tt=t,Ze=b;ne=n;var Nt=a;switch(Ze.tag){case 1:if(tt=Ze.payload,typeof tt=="function"){ve=tt.call(Nt,ve,ne);break e}ve=tt;break e;case 3:tt.flags=tt.flags&-65537|128;case 0:if(tt=Ze.payload,ne=typeof tt=="function"?tt.call(Nt,ve,ne):tt,ne==null)break e;ve=g({},ve,ne);break e;case 2:_a=!0}}ne=b.callback,ne!==null&&(t.flags|=64,ie&&(t.flags|=8192),ie=u.callbacks,ie===null?u.callbacks=[ne]:ie.push(ne))}else ie={lane:ne,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ue===null?($=ue=ie,P=ve):ue=ue.next=ie,S|=ne;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;ie=b,b=ie.next,ie.next=null,u.lastBaseUpdate=ie,u.shared.pending=null}}while(!0);ue===null&&(P=ve),u.baseState=P,u.firstBaseUpdate=$,u.lastBaseUpdate=ue,f===null&&(u.shared.lanes=0),Ra|=S,t.lanes=S,t.memoizedState=ve}}function Wp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function qp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Wp(a[t],n)}var Wr=ee(null),bl=ee(0);function jp(t,n){t=ji,Me(bl,t),Me(Wr,n),ji=t|n.baseLanes}function Hu(){Me(bl,ji),Me(Wr,Wr.current)}function Gu(){ji=bl.current,ye(Wr),ye(bl)}var ya=0,ut=null,Ut=null,nn=null,Tl=!1,qr=!1,ur=!1,Al=0,ro=0,jr=null,Ex=0;function Qt(){throw Error(s(321))}function Vu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Vn(t[a],n[a]))return!1;return!0}function ku(t,n,a,o,u,f){return ya=f,ut=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?Dm:Um,ur=!1,f=a(o,u),ur=!1,qr&&(f=Zp(n,a,o,u)),Yp(t),f}function Yp(t){B.H=Ll;var n=Ut!==null&&Ut.next!==null;if(ya=0,nn=Ut=ut=null,Tl=!1,ro=0,jr=null,n)throw Error(s(300));t===null||mn||(t=t.dependencies,t!==null&&xl(t)&&(mn=!0))}function Zp(t,n,a,o){ut=t;var u=0;do{if(qr&&(jr=null),ro=0,qr=!1,25<=u)throw Error(s(301));if(u+=1,nn=Ut=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=Dx,f=n(a,o)}while(qr);return f}function bx(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?so(n):n,t=t.useState()[0],(Ut!==null?Ut.memoizedState:null)!==t&&(ut.flags|=1024),n}function Xu(){var t=Al!==0;return Al=0,t}function Wu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function qu(t){if(Tl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Tl=!1}ya=0,nn=Ut=ut=null,qr=!1,ro=Al=0,jr=null}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?ut.memoizedState=nn=t:nn=nn.next=t,nn}function an(){if(Ut===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=Ut.next;var n=nn===null?ut.memoizedState:nn.next;if(n!==null)nn=n,Ut=t;else{if(t===null)throw ut.alternate===null?Error(s(467)):Error(s(310));Ut=t,t={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},nn===null?ut.memoizedState=nn=t:nn=nn.next=t}return nn}function ju(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function so(t){var n=ro;return ro+=1,jr===null&&(jr=[]),t=Vp(jr,t,n),n=ut,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?Dm:Um),t}function Rl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return so(t);if(t.$$typeof===U)return An(t)}throw Error(s(438,String(t)))}function Yu(t){var n=null,a=ut.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ut.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ju(),ut.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=w;return n.index++,a}function Gi(t,n){return typeof n=="function"?n(t):n}function wl(t){var n=an();return Zu(n,Ut,t)}function Zu(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var S=u.next;u.next=f.next,f.next=S}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var b=S=null,P=null,$=n,ue=!1;do{var ve=$.lane&-536870913;if(ve!==$.lane?(yt&ve)===ve:(ya&ve)===ve){var ne=$.revertLane;if(ne===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),ve===kr&&(ue=!0);else if((ya&ne)===ne){$=$.next,ne===kr&&(ue=!0);continue}else ve={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(b=P=ve,S=f):P=P.next=ve,ut.lanes|=ne,Ra|=ne;ve=$.action,ur&&a(f,ve),f=$.hasEagerState?$.eagerState:a(f,ve)}else ne={lane:ve,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(b=P=ne,S=f):P=P.next=ne,ut.lanes|=ve,Ra|=ve;$=$.next}while($!==null&&$!==n);if(P===null?S=f:P.next=b,!Vn(f,t.memoizedState)&&(mn=!0,ue&&(a=Xr,a!==null)))throw a;t.memoizedState=f,t.baseState=S,t.baseQueue=P,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Ku(t){var n=an(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do f=t(f,S.action),S=S.next;while(S!==u);Vn(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Kp(t,n,a){var o=ut,u=an(),f=At;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!Vn((Ut||u).memoizedState,a);S&&(u.memoizedState=a,mn=!0),u=u.queue;var b=$p.bind(null,o,u,t);if(oo(2048,8,b,[t]),u.getSnapshot!==n||S||nn!==null&&nn.memoizedState.tag&1){if(o.flags|=2048,Yr(9,Cl(),Jp.bind(null,o,u,a,n),null),kt===null)throw Error(s(349));f||(ya&124)!==0||Qp(o,n,a)}return a}function Qp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ut.updateQueue,n===null?(n=ju(),ut.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Jp(t,n,a,o){n.value=a,n.getSnapshot=o,em(n)&&tm(t)}function $p(t,n,a){return a(function(){em(n)&&tm(t)})}function em(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Vn(t,a)}catch{return!0}}function tm(t){var n=Fr(t,2);n!==null&&Yn(n,t,2)}function Qu(t){var n=Pn();if(typeof t=="function"){var a=t;if(t=a(),ur){we(!0);try{a()}finally{we(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:t},n}function nm(t,n,a,o){return t.baseState=a,Zu(t,Ut,typeof o=="function"?o:Gi)}function Tx(t,n,a,o,u){if(Ul(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};B.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,im(n,f)):(f.next=a.next,n.pending=a.next=f)}}function im(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=B.T,S={};B.T=S;try{var b=a(u,o),P=B.S;P!==null&&P(S,b),am(t,n,b)}catch($){Ju(t,n,$)}finally{B.T=f}}else try{f=a(u,o),am(t,n,f)}catch($){Ju(t,n,$)}}function am(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){rm(t,n,o)},function(o){return Ju(t,n,o)}):rm(t,n,a)}function rm(t,n,a){n.status="fulfilled",n.value=a,sm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,im(t,a)))}function Ju(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,sm(n),n=n.next;while(n!==o)}t.action=null}function sm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function om(t,n){return n}function lm(t,n){if(At){var a=kt.formState;if(a!==null){e:{var o=ut;if(At){if(Zt){t:{for(var u=Zt,f=yi;u.nodeType!==8;){if(!f){u=null;break t}if(u=ui(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Zt=ui(u.nextSibling),o=u.data==="F!";break e}}sr(o)}o=!1}o&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:om,lastRenderedState:n},a.queue=o,a=Rm.bind(null,ut,o),o.dispatch=a,o=Qu(!1),f=af.bind(null,ut,!1,o.queue),o=Pn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=Tx.bind(null,ut,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function cm(t){var n=an();return um(n,Ut,t)}function um(t,n,a){if(n=Zu(t,n,om)[0],t=wl(Gi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=so(n)}catch(S){throw S===eo?Ml:S}else o=n;n=an();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ut.flags|=2048,Yr(9,Cl(),Ax.bind(null,u,a),null)),[o,f,t]}function Ax(t,n){t.action=n}function fm(t){var n=an(),a=Ut;if(a!==null)return um(n,a,t);an(),n=n.memoizedState,a=an();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Yr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ut.updateQueue,n===null&&(n=ju(),ut.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Cl(){return{destroy:void 0,resource:void 0}}function hm(){return an().memoizedState}function Dl(t,n,a,o){var u=Pn();o=o===void 0?null:o,ut.flags|=t,u.memoizedState=Yr(1|n,Cl(),a,o)}function oo(t,n,a,o){var u=an();o=o===void 0?null:o;var f=u.memoizedState.inst;Ut!==null&&o!==null&&Vu(o,Ut.memoizedState.deps)?u.memoizedState=Yr(n,f,a,o):(ut.flags|=t,u.memoizedState=Yr(1|n,f,a,o))}function dm(t,n){Dl(8390656,8,t,n)}function pm(t,n){oo(2048,8,t,n)}function mm(t,n){return oo(4,2,t,n)}function gm(t,n){return oo(4,4,t,n)}function _m(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function vm(t,n,a){a=a!=null?a.concat([t]):null,oo(4,4,_m.bind(null,n,t),a)}function $u(){}function xm(t,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Vu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function ym(t,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Vu(n,o[1]))return o[0];if(o=t(),ur){we(!0);try{t()}finally{we(!1)}}return a.memoizedState=[o,n],o}function ef(t,n,a){return a===void 0||(ya&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Eg(),ut.lanes|=t,Ra|=t,a)}function Sm(t,n,a,o){return Vn(a,n)?a:Wr.current!==null?(t=ef(t,a,o),Vn(t,n)||(mn=!0),t):(ya&42)===0?(mn=!0,t.memoizedState=a):(t=Eg(),ut.lanes|=t,Ra|=t,n)}function Mm(t,n,a,o,u){var f=K.p;K.p=f!==0&&8>f?f:8;var S=B.T,b={};B.T=b,af(t,!1,n,a);try{var P=u(),$=B.S;if($!==null&&$(b,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ue=Mx(P,o);lo(t,n,ue,jn(t))}else lo(t,n,o,jn(t))}catch(ve){lo(t,n,{then:function(){},status:"rejected",reason:ve},jn())}finally{K.p=f,B.T=S}}function Rx(){}function tf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=Em(t).queue;Mm(t,u,n,Y,a===null?Rx:function(){return bm(t),a(o)})}function Em(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function bm(t){var n=Em(t).next.queue;lo(t,n,{},jn())}function nf(){return An(Ro)}function Tm(){return an().memoizedState}function Am(){return an().memoizedState}function wx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=jn();t=va(a);var o=xa(n,t,a);o!==null&&(Yn(o,n,a),no(o,n,a)),n={cache:Lu()},t.payload=n;return}n=n.return}}function Cx(t,n,a){var o=jn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Ul(t)?wm(n,a):(a=Mu(t,n,a,o),a!==null&&(Yn(a,t,o),Cm(a,n,o)))}function Rm(t,n,a){var o=jn();lo(t,n,a,o)}function lo(t,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ul(t))wm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,b=f(S,a);if(u.hasEagerState=!0,u.eagerState=b,Vn(b,S))return pl(t,n,u,0),kt===null&&dl(),!1}catch{}finally{}if(a=Mu(t,n,u,o),a!==null)return Yn(a,t,o),Cm(a,n,o),!0}return!1}function af(t,n,a,o){if(o={lane:2,revertLane:Bf(),action:o,hasEagerState:!1,eagerState:null,next:null},Ul(t)){if(n)throw Error(s(479))}else n=Mu(t,a,o,2),n!==null&&Yn(n,t,2)}function Ul(t){var n=t.alternate;return t===ut||n!==null&&n===ut}function wm(t,n){qr=Tl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Cm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,at(t,a)}}var Ll={readContext:An,use:Rl,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useLayoutEffect:Qt,useInsertionEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useSyncExternalStore:Qt,useId:Qt,useHostTransitionStatus:Qt,useFormState:Qt,useActionState:Qt,useOptimistic:Qt,useMemoCache:Qt,useCacheRefresh:Qt},Dm={readContext:An,use:Rl,useCallback:function(t,n){return Pn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:dm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Dl(4194308,4,_m.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Dl(4194308,4,t,n)},useInsertionEffect:function(t,n){Dl(4,2,t,n)},useMemo:function(t,n){var a=Pn();n=n===void 0?null:n;var o=t();if(ur){we(!0);try{t()}finally{we(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Pn();if(a!==void 0){var u=a(n);if(ur){we(!0);try{a(n)}finally{we(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Cx.bind(null,ut,t),[o.memoizedState,t]},useRef:function(t){var n=Pn();return t={current:t},n.memoizedState=t},useState:function(t){t=Qu(t);var n=t.queue,a=Rm.bind(null,ut,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:$u,useDeferredValue:function(t,n){var a=Pn();return ef(a,t,n)},useTransition:function(){var t=Qu(!1);return t=Mm.bind(null,ut,t.queue,!0,!1),Pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ut,u=Pn();if(At){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),kt===null)throw Error(s(349));(yt&124)!==0||Qp(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,dm($p.bind(null,o,f,t),[t]),o.flags|=2048,Yr(9,Cl(),Jp.bind(null,o,f,a,n),null),a},useId:function(){var t=Pn(),n=kt.identifierPrefix;if(At){var a=Ii,o=zi;a=(o&~(1<<32-Ge(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Al++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Ex++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:nf,useFormState:lm,useActionState:lm,useOptimistic:function(t){var n=Pn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=af.bind(null,ut,!0,a),a.dispatch=n,[t,n]},useMemoCache:Yu,useCacheRefresh:function(){return Pn().memoizedState=wx.bind(null,ut)}},Um={readContext:An,use:Rl,useCallback:xm,useContext:An,useEffect:pm,useImperativeHandle:vm,useInsertionEffect:mm,useLayoutEffect:gm,useMemo:ym,useReducer:wl,useRef:hm,useState:function(){return wl(Gi)},useDebugValue:$u,useDeferredValue:function(t,n){var a=an();return Sm(a,Ut.memoizedState,t,n)},useTransition:function(){var t=wl(Gi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:so(t),n]},useSyncExternalStore:Kp,useId:Tm,useHostTransitionStatus:nf,useFormState:cm,useActionState:cm,useOptimistic:function(t,n){var a=an();return nm(a,Ut,t,n)},useMemoCache:Yu,useCacheRefresh:Am},Dx={readContext:An,use:Rl,useCallback:xm,useContext:An,useEffect:pm,useImperativeHandle:vm,useInsertionEffect:mm,useLayoutEffect:gm,useMemo:ym,useReducer:Ku,useRef:hm,useState:function(){return Ku(Gi)},useDebugValue:$u,useDeferredValue:function(t,n){var a=an();return Ut===null?ef(a,t,n):Sm(a,Ut.memoizedState,t,n)},useTransition:function(){var t=Ku(Gi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:so(t),n]},useSyncExternalStore:Kp,useId:Tm,useHostTransitionStatus:nf,useFormState:fm,useActionState:fm,useOptimistic:function(t,n){var a=an();return Ut!==null?nm(a,Ut,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Yu,useCacheRefresh:Am},Zr=null,co=0;function Nl(t){var n=co;return co+=1,Zr===null&&(Zr=[]),Vp(Zr,t,n)}function uo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ol(t,n){throw n.$$typeof===x?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Lm(t){var n=t._init;return n(t._payload)}function Nm(t){function n(W,G){if(t){var Q=W.deletions;Q===null?(W.deletions=[G],W.flags|=16):Q.push(G)}}function a(W,G){if(!t)return null;for(;G!==null;)n(W,G),G=G.sibling;return null}function o(W){for(var G=new Map;W!==null;)W.key!==null?G.set(W.key,W):G.set(W.index,W),W=W.sibling;return G}function u(W,G){return W=Bi(W,G),W.index=0,W.sibling=null,W}function f(W,G,Q){return W.index=Q,t?(Q=W.alternate,Q!==null?(Q=Q.index,Q<G?(W.flags|=67108866,G):Q):(W.flags|=67108866,G)):(W.flags|=1048576,G)}function S(W){return t&&W.alternate===null&&(W.flags|=67108866),W}function b(W,G,Q,he){return G===null||G.tag!==6?(G=bu(Q,W.mode,he),G.return=W,G):(G=u(G,Q),G.return=W,G)}function P(W,G,Q,he){var He=Q.type;return He===E?ue(W,G,Q.props.children,he,Q.key):G!==null&&(G.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===q&&Lm(He)===G.type)?(G=u(G,Q.props),uo(G,Q),G.return=W,G):(G=gl(Q.type,Q.key,Q.props,null,W.mode,he),uo(G,Q),G.return=W,G)}function $(W,G,Q,he){return G===null||G.tag!==4||G.stateNode.containerInfo!==Q.containerInfo||G.stateNode.implementation!==Q.implementation?(G=Tu(Q,W.mode,he),G.return=W,G):(G=u(G,Q.children||[]),G.return=W,G)}function ue(W,G,Q,he,He){return G===null||G.tag!==7?(G=nr(Q,W.mode,he,He),G.return=W,G):(G=u(G,Q),G.return=W,G)}function ve(W,G,Q){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=bu(""+G,W.mode,Q),G.return=W,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case v:return Q=gl(G.type,G.key,G.props,null,W.mode,Q),uo(Q,G),Q.return=W,Q;case M:return G=Tu(G,W.mode,Q),G.return=W,G;case q:var he=G._init;return G=he(G._payload),ve(W,G,Q)}if(de(G)||ce(G))return G=nr(G,W.mode,Q,null),G.return=W,G;if(typeof G.then=="function")return ve(W,Nl(G),Q);if(G.$$typeof===U)return ve(W,yl(W,G),Q);Ol(W,G)}return null}function ne(W,G,Q,he){var He=G!==null?G.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return He!==null?null:b(W,G,""+Q,he);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:return Q.key===He?P(W,G,Q,he):null;case M:return Q.key===He?$(W,G,Q,he):null;case q:return He=Q._init,Q=He(Q._payload),ne(W,G,Q,he)}if(de(Q)||ce(Q))return He!==null?null:ue(W,G,Q,he,null);if(typeof Q.then=="function")return ne(W,G,Nl(Q),he);if(Q.$$typeof===U)return ne(W,G,yl(W,Q),he);Ol(W,Q)}return null}function ie(W,G,Q,he,He){if(typeof he=="string"&&he!==""||typeof he=="number"||typeof he=="bigint")return W=W.get(Q)||null,b(G,W,""+he,He);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case v:return W=W.get(he.key===null?Q:he.key)||null,P(G,W,he,He);case M:return W=W.get(he.key===null?Q:he.key)||null,$(G,W,he,He);case q:var ht=he._init;return he=ht(he._payload),ie(W,G,Q,he,He)}if(de(he)||ce(he))return W=W.get(Q)||null,ue(G,W,he,He,null);if(typeof he.then=="function")return ie(W,G,Q,Nl(he),He);if(he.$$typeof===U)return ie(W,G,Q,yl(G,he),He);Ol(G,he)}return null}function tt(W,G,Q,he){for(var He=null,ht=null,ke=G,Je=G=0,_n=null;ke!==null&&Je<Q.length;Je++){ke.index>Je?(_n=ke,ke=null):_n=ke.sibling;var bt=ne(W,ke,Q[Je],he);if(bt===null){ke===null&&(ke=_n);break}t&&ke&&bt.alternate===null&&n(W,ke),G=f(bt,G,Je),ht===null?He=bt:ht.sibling=bt,ht=bt,ke=_n}if(Je===Q.length)return a(W,ke),At&&ar(W,Je),He;if(ke===null){for(;Je<Q.length;Je++)ke=ve(W,Q[Je],he),ke!==null&&(G=f(ke,G,Je),ht===null?He=ke:ht.sibling=ke,ht=ke);return At&&ar(W,Je),He}for(ke=o(ke);Je<Q.length;Je++)_n=ie(ke,W,Je,Q[Je],he),_n!==null&&(t&&_n.alternate!==null&&ke.delete(_n.key===null?Je:_n.key),G=f(_n,G,Je),ht===null?He=_n:ht.sibling=_n,ht=_n);return t&&ke.forEach(function(Ba){return n(W,Ba)}),At&&ar(W,Je),He}function Ze(W,G,Q,he){if(Q==null)throw Error(s(151));for(var He=null,ht=null,ke=G,Je=G=0,_n=null,bt=Q.next();ke!==null&&!bt.done;Je++,bt=Q.next()){ke.index>Je?(_n=ke,ke=null):_n=ke.sibling;var Ba=ne(W,ke,bt.value,he);if(Ba===null){ke===null&&(ke=_n);break}t&&ke&&Ba.alternate===null&&n(W,ke),G=f(Ba,G,Je),ht===null?He=Ba:ht.sibling=Ba,ht=Ba,ke=_n}if(bt.done)return a(W,ke),At&&ar(W,Je),He;if(ke===null){for(;!bt.done;Je++,bt=Q.next())bt=ve(W,bt.value,he),bt!==null&&(G=f(bt,G,Je),ht===null?He=bt:ht.sibling=bt,ht=bt);return At&&ar(W,Je),He}for(ke=o(ke);!bt.done;Je++,bt=Q.next())bt=ie(ke,W,Je,bt.value,he),bt!==null&&(t&&bt.alternate!==null&&ke.delete(bt.key===null?Je:bt.key),G=f(bt,G,Je),ht===null?He=bt:ht.sibling=bt,ht=bt);return t&&ke.forEach(function(Uy){return n(W,Uy)}),At&&ar(W,Je),He}function Nt(W,G,Q,he){if(typeof Q=="object"&&Q!==null&&Q.type===E&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:e:{for(var He=Q.key;G!==null;){if(G.key===He){if(He=Q.type,He===E){if(G.tag===7){a(W,G.sibling),he=u(G,Q.props.children),he.return=W,W=he;break e}}else if(G.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===q&&Lm(He)===G.type){a(W,G.sibling),he=u(G,Q.props),uo(he,Q),he.return=W,W=he;break e}a(W,G);break}else n(W,G);G=G.sibling}Q.type===E?(he=nr(Q.props.children,W.mode,he,Q.key),he.return=W,W=he):(he=gl(Q.type,Q.key,Q.props,null,W.mode,he),uo(he,Q),he.return=W,W=he)}return S(W);case M:e:{for(He=Q.key;G!==null;){if(G.key===He)if(G.tag===4&&G.stateNode.containerInfo===Q.containerInfo&&G.stateNode.implementation===Q.implementation){a(W,G.sibling),he=u(G,Q.children||[]),he.return=W,W=he;break e}else{a(W,G);break}else n(W,G);G=G.sibling}he=Tu(Q,W.mode,he),he.return=W,W=he}return S(W);case q:return He=Q._init,Q=He(Q._payload),Nt(W,G,Q,he)}if(de(Q))return tt(W,G,Q,he);if(ce(Q)){if(He=ce(Q),typeof He!="function")throw Error(s(150));return Q=He.call(Q),Ze(W,G,Q,he)}if(typeof Q.then=="function")return Nt(W,G,Nl(Q),he);if(Q.$$typeof===U)return Nt(W,G,yl(W,Q),he);Ol(W,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,G!==null&&G.tag===6?(a(W,G.sibling),he=u(G,Q),he.return=W,W=he):(a(W,G),he=bu(Q,W.mode,he),he.return=W,W=he),S(W)):a(W,G)}return function(W,G,Q,he){try{co=0;var He=Nt(W,G,Q,he);return Zr=null,He}catch(ke){if(ke===eo||ke===Ml)throw ke;var ht=kn(29,ke,null,W.mode);return ht.lanes=he,ht.return=W,ht}finally{}}}var Kr=Nm(!0),Om=Nm(!1),ni=ee(null),Si=null;function Sa(t){var n=t.alternate;Me(un,un.current&1),Me(ni,t),Si===null&&(n===null||Wr.current!==null||n.memoizedState!==null)&&(Si=t)}function Pm(t){if(t.tag===22){if(Me(un,un.current),Me(ni,t),Si===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Si=t)}}else Ma()}function Ma(){Me(un,un.current),Me(ni,ni.current)}function Vi(t){ye(ni),Si===t&&(Si=null),ye(un)}var un=ee(0);function Pl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Yf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function rf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var sf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=jn(),u=va(o);u.payload=n,a!=null&&(u.callback=a),n=xa(t,u,o),n!==null&&(Yn(n,t,o),no(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=jn(),u=va(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=xa(t,u,o),n!==null&&(Yn(n,t,o),no(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=jn(),o=va(a);o.tag=2,n!=null&&(o.callback=n),n=xa(t,o,a),n!==null&&(Yn(n,t,a),no(n,t,a))}};function Bm(t,n,a,o,u,f,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,S):n.prototype&&n.prototype.isPureReactComponent?!qs(a,o)||!qs(u,f):!0}function zm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&sf.enqueueReplaceState(n,n.state,null)}function fr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var Bl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Im(t){Bl(t)}function Fm(t){console.error(t)}function Hm(t){Bl(t)}function zl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Gm(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function of(t,n,a){return a=va(a),a.tag=3,a.payload={element:null},a.callback=function(){zl(t,n)},a}function Vm(t){return t=va(t),t.tag=3,t}function km(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){Gm(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){Gm(n,a,o),typeof u!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function Ux(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Qs(n,a,u,!0),a=ni.current,a!==null){switch(a.tag){case 13:return Si===null?Uf():a.alternate===null&&Kt===0&&(Kt=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Pu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Nf(t,o,u)),!1;case 22:return a.flags|=65536,o===Pu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Nf(t,o,u)),!1}throw Error(s(435,a.tag))}return Nf(t,o,u),Uf(),!1}if(At)return n=ni.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==wu&&(t=Error(s(422),{cause:o}),Ks(Jn(t,a)))):(o!==wu&&(n=Error(s(423),{cause:o}),Ks(Jn(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=Jn(o,a),u=of(t.stateNode,o,u),Iu(t,u),Kt!==4&&(Kt=2)),!1;var f=Error(s(520),{cause:o});if(f=Jn(f,a),vo===null?vo=[f]:vo.push(f),Kt!==4&&(Kt=2),n===null)return!0;o=Jn(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=of(a.stateNode,o,t),Iu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(wa===null||!wa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Vm(u),km(u,t,a,o),Iu(a,u),!1}a=a.return}while(a!==null);return!1}var Xm=Error(s(461)),mn=!1;function Sn(t,n,a,o){n.child=t===null?Om(n,null,a,o):Kr(n,t.child,a,o)}function Wm(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var S={};for(var b in o)b!=="ref"&&(S[b]=o[b])}else S=o;return lr(n),o=ku(t,n,a,S,f,u),b=Xu(),t!==null&&!mn?(Wu(t,n,u),ki(t,n,u)):(At&&b&&Au(n),n.flags|=1,Sn(t,n,o,u),n.child)}function qm(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!Eu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,jm(t,n,f,o,u)):(t=gl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!mf(t,u)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:qs,a(S,o)&&t.ref===n.ref)return ki(t,n,u)}return n.flags|=1,t=Bi(f,o),t.ref=n.ref,t.return=n,n.child=t}function jm(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(qs(f,o)&&t.ref===n.ref)if(mn=!1,n.pendingProps=o=f,mf(t,u))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,ki(t,n,u)}return lf(t,n,a,o,u)}function Ym(t,n,a){var o=n.pendingProps,u=o.children,f=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,t!==null){for(u=n.child=t.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return Zm(t,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Sl(n,f!==null?f.cachePool:null),f!==null?jp(n,f):Hu(),Pm(n);else return n.lanes=n.childLanes=536870912,Zm(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(Sl(n,f.cachePool),jp(n,f),Ma(),n.memoizedState=null):(t!==null&&Sl(n,null),Hu(),Ma());return Sn(t,n,u,a),n.child}function Zm(t,n,a,o){var u=Ou();return u=u===null?null:{parent:cn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&Sl(n,null),Hu(),Pm(n),t!==null&&Qs(t,n,o,!0),null}function Il(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function lf(t,n,a,o,u){return lr(n),a=ku(t,n,a,o,void 0,u),o=Xu(),t!==null&&!mn?(Wu(t,n,u),ki(t,n,u)):(At&&o&&Au(n),n.flags|=1,Sn(t,n,a,u),n.child)}function Km(t,n,a,o,u,f){return lr(n),n.updateQueue=null,a=Zp(n,o,a,u),Yp(t),o=Xu(),t!==null&&!mn?(Wu(t,n,f),ki(t,n,f)):(At&&o&&Au(n),n.flags|=1,Sn(t,n,a,f),n.child)}function Qm(t,n,a,o,u){if(lr(n),n.stateNode===null){var f=Hr,S=a.contextType;typeof S=="object"&&S!==null&&(f=An(S)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=sf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Bu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?An(S):Hr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(rf(n,a,S,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&sf.enqueueReplaceState(f,f.state,null),ao(n,o,f,u),io(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var b=n.memoizedProps,P=fr(a,b);f.props=P;var $=f.context,ue=a.contextType;S=Hr,typeof ue=="object"&&ue!==null&&(S=An(ue));var ve=a.getDerivedStateFromProps;ue=typeof ve=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ue||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||$!==S)&&zm(n,f,o,S),_a=!1;var ne=n.memoizedState;f.state=ne,ao(n,o,f,u),io(),$=n.memoizedState,b||ne!==$||_a?(typeof ve=="function"&&(rf(n,a,ve,o),$=n.memoizedState),(P=_a||Bm(n,a,P,o,ne,$,S))?(ue||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),f.props=o,f.state=$,f.context=S,o=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,zu(t,n),S=n.memoizedProps,ue=fr(a,S),f.props=ue,ve=n.pendingProps,ne=f.context,$=a.contextType,P=Hr,typeof $=="object"&&$!==null&&(P=An($)),b=a.getDerivedStateFromProps,($=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==ve||ne!==P)&&zm(n,f,o,P),_a=!1,ne=n.memoizedState,f.state=ne,ao(n,o,f,u),io();var ie=n.memoizedState;S!==ve||ne!==ie||_a||t!==null&&t.dependencies!==null&&xl(t.dependencies)?(typeof b=="function"&&(rf(n,a,b,o),ie=n.memoizedState),(ue=_a||Bm(n,a,ue,o,ne,ie,P)||t!==null&&t.dependencies!==null&&xl(t.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ie,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ie,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&ne===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ne===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ie),f.props=o,f.state=ie,f.context=P,o=ue):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&ne===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ne===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Il(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Kr(n,t.child,null,u),n.child=Kr(n,null,a,u)):Sn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ki(t,n,u),t}function Jm(t,n,a,o){return Zs(),n.flags|=256,Sn(t,n,a,o),n.child}var cf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function uf(t){return{baseLanes:t,cachePool:Fp()}}function ff(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ii),t}function $m(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=t!==null&&t.memoizedState===null?!1:(un.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(At){if(u?Sa(n):Ma(),At){var b=Zt,P;if(P=b){e:{for(P=b,b=yi;P.nodeType!==8;){if(!b){b=null;break e}if(P=ui(P.nextSibling),P===null){b=null;break e}}b=P}b!==null?(n.memoizedState={dehydrated:b,treeContext:ir!==null?{id:zi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},P=kn(18,null,null,0),P.stateNode=b,P.return=n,n.child=P,Dn=n,Zt=null,P=!0):P=!1}P||sr(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Yf(b)?n.lanes=32:n.lanes=536870912,null;Vi(n)}return b=o.children,o=o.fallback,u?(Ma(),u=n.mode,b=Fl({mode:"hidden",children:b},u),o=nr(o,u,a,null),b.return=n,o.return=n,b.sibling=o,n.child=b,u=n.child,u.memoizedState=uf(a),u.childLanes=ff(t,S,a),n.memoizedState=cf,o):(Sa(n),hf(n,b))}if(P=t.memoizedState,P!==null&&(b=P.dehydrated,b!==null)){if(f)n.flags&256?(Sa(n),n.flags&=-257,n=df(t,n,a)):n.memoizedState!==null?(Ma(),n.child=t.child,n.flags|=128,n=null):(Ma(),u=o.fallback,b=n.mode,o=Fl({mode:"visible",children:o.children},b),u=nr(u,b,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,Kr(n,t.child,null,a),o=n.child,o.memoizedState=uf(a),o.childLanes=ff(t,S,a),n.memoizedState=cf,n=u);else if(Sa(n),Yf(b)){if(S=b.nextSibling&&b.nextSibling.dataset,S)var $=S.dgst;S=$,o=Error(s(419)),o.stack="",o.digest=S,Ks({value:o,source:null,stack:null}),n=df(t,n,a)}else if(mn||Qs(t,n,a,!1),S=(a&t.childLanes)!==0,mn||S){if(S=kt,S!==null&&(o=a&-a,o=(o&42)!==0?1:Gt(o),o=(o&(S.suspendedLanes|a))!==0?0:o,o!==0&&o!==P.retryLane))throw P.retryLane=o,Fr(t,o),Yn(S,t,o),Xm;b.data==="$?"||Uf(),n=df(t,n,a)}else b.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=P.treeContext,Zt=ui(b.nextSibling),Dn=n,At=!0,rr=null,yi=!1,t!==null&&(ei[ti++]=zi,ei[ti++]=Ii,ei[ti++]=ir,zi=t.id,Ii=t.overflow,ir=n),n=hf(n,o.children),n.flags|=4096);return n}return u?(Ma(),u=o.fallback,b=n.mode,P=t.child,$=P.sibling,o=Bi(P,{mode:"hidden",children:o.children}),o.subtreeFlags=P.subtreeFlags&65011712,$!==null?u=Bi($,u):(u=nr(u,b,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,b=t.child.memoizedState,b===null?b=uf(a):(P=b.cachePool,P!==null?($=cn._currentValue,P=P.parent!==$?{parent:$,pool:$}:P):P=Fp(),b={baseLanes:b.baseLanes|a,cachePool:P}),u.memoizedState=b,u.childLanes=ff(t,S,a),n.memoizedState=cf,o):(Sa(n),a=t.child,t=a.sibling,a=Bi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function hf(t,n){return n=Fl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Fl(t,n){return t=kn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function df(t,n,a){return Kr(n,t.child,null,a),t=hf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function eg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Du(t.return,n,a)}function pf(t,n,a,o,u){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=u)}function tg(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;if(Sn(t,n,o.children,a),o=un.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&eg(t,a,n);else if(t.tag===19)eg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(Me(un,o),u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Pl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),pf(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Pl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}pf(n,!0,a,null,f);break;case"together":pf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ki(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ra|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Qs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Bi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Bi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function mf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&xl(t)))}function Lx(t,n,a){switch(n.tag){case 3:Le(n,n.stateNode.containerInfo),ga(n,cn,t.memoizedState.cache),Zs();break;case 27:case 5:Ke(n);break;case 4:Le(n,n.stateNode.containerInfo);break;case 10:ga(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Sa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?$m(t,n,a):(Sa(n),t=ki(t,n,a),t!==null?t.sibling:null);Sa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Qs(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return tg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Me(un,un.current),o)break;return null;case 22:case 23:return n.lanes=0,Ym(t,n,a);case 24:ga(n,cn,t.memoizedState.cache)}return ki(t,n,a)}function ng(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!mf(t,a)&&(n.flags&128)===0)return mn=!1,Lx(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,At&&(n.flags&1048576)!==0&&Lp(n,vl,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Eu(o)?(t=fr(o,t),n.tag=1,n=Qm(null,n,o,t,a)):(n.tag=0,n=lf(null,n,o,t,a));else{if(o!=null){if(u=o.$$typeof,u===C){n.tag=11,n=Wm(null,n,o,t,a);break e}else if(u===I){n.tag=14,n=qm(null,n,o,t,a);break e}}throw n=xe(o)||o,Error(s(306,n,""))}}return n;case 0:return lf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=fr(o,n.pendingProps),Qm(t,n,o,u,a);case 3:e:{if(Le(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,zu(t,n),ao(n,o,null,a);var S=n.memoizedState;if(o=S.cache,ga(n,cn,o),o!==f.cache&&Uu(n,[cn],a,!0),io(),o=S.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Jm(t,n,o,a);break e}else if(o!==u){u=Jn(Error(s(424)),n),Ks(u),n=Jm(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Zt=ui(t.firstChild),Dn=n,At=!0,rr=null,yi=!0,a=Om(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Zs(),o===u){n=ki(t,n,a);break e}Sn(t,n,o,a)}n=n.child}return n;case 26:return Il(t,n),t===null?(a=s0(n.type,null,n.pendingProps,null))?n.memoizedState=a:At||(a=n.type,t=n.pendingProps,o=$l(Se.current).createElement(a),o[on]=n,o[xn]=t,En(o,a,t),tn(o),n.stateNode=o):n.memoizedState=s0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ke(n),t===null&&At&&(o=n.stateNode=i0(n.type,n.pendingProps,Se.current),Dn=n,yi=!0,u=Zt,Ua(n.type)?(Zf=u,Zt=ui(o.firstChild)):Zt=u),Sn(t,n,n.pendingProps.children,a),Il(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&At&&((u=o=Zt)&&(o=sy(o,n.type,n.pendingProps,yi),o!==null?(n.stateNode=o,Dn=n,Zt=ui(o.firstChild),yi=!1,u=!0):u=!1),u||sr(n)),Ke(n),u=n.type,f=n.pendingProps,S=t!==null?t.memoizedProps:null,o=f.children,Wf(u,f)?o=null:S!==null&&Wf(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=ku(t,n,bx,null,null,a),Ro._currentValue=u),Il(t,n),Sn(t,n,o,a),n.child;case 6:return t===null&&At&&((t=a=Zt)&&(a=oy(a,n.pendingProps,yi),a!==null?(n.stateNode=a,Dn=n,Zt=null,t=!0):t=!1),t||sr(n)),null;case 13:return $m(t,n,a);case 4:return Le(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Kr(n,null,o,a):Sn(t,n,o,a),n.child;case 11:return Wm(t,n,n.type,n.pendingProps,a);case 7:return Sn(t,n,n.pendingProps,a),n.child;case 8:return Sn(t,n,n.pendingProps.children,a),n.child;case 12:return Sn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ga(n,n.type,o.value),Sn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,lr(n),u=An(u),o=o(u),n.flags|=1,Sn(t,n,o,a),n.child;case 14:return qm(t,n,n.type,n.pendingProps,a);case 15:return jm(t,n,n.type,n.pendingProps,a);case 19:return tg(t,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},t===null?(a=Fl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Bi(t.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Ym(t,n,a);case 24:return lr(n),o=An(cn),t===null?(u=Ou(),u===null&&(u=kt,f=Lu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Bu(n),ga(n,cn,u)):((t.lanes&a)!==0&&(zu(t,n),ao(n,null,null,a),io()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ga(n,cn,o)):(o=f.cache,ga(n,cn,o),o!==u.cache&&Uu(n,[cn],a,!0))),Sn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Xi(t){t.flags|=4}function ig(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!f0(n)){if(n=ni.current,n!==null&&((yt&4194048)===yt?Si!==null:(yt&62914560)!==yt&&(yt&536870912)===0||n!==Si))throw to=Pu,Hp;t.flags|=8192}}function Hl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ne():536870912,t.lanes|=n,es|=n)}function fo(t,n){if(!At)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function qt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Nx(t,n,a){var o=n.pendingProps;switch(Ru(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(n),null;case 1:return qt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Hi(cn),ot(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ys(n)?Xi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Pp())),qt(n),null;case 26:return a=n.memoizedState,t===null?(Xi(n),a!==null?(qt(n),ig(n,a)):(qt(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Xi(n),qt(n),ig(n,a)):(qt(n),n.flags&=-16777217):(t.memoizedProps!==o&&Xi(n),qt(n),n.flags&=-16777217),null;case 27:Ht(n),a=Se.current;var u=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Xi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return qt(n),null}t=J.current,Ys(n)?Np(n):(t=i0(u,o,a),n.stateNode=t,Xi(n))}return qt(n),null;case 5:if(Ht(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Xi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return qt(n),null}if(t=J.current,Ys(n))Np(n);else{switch(u=$l(Se.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}t[on]=n,t[xn]=o;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=t;e:switch(En(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Xi(n)}}return qt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Xi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=Se.current,Ys(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Dn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[on]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Kg(t.nodeValue,a)),t||sr(n)}else t=$l(t).createTextNode(o),t[on]=n,n.stateNode=t}return qt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Ys(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[on]=n}else Zs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qt(n),u=!1}else u=Pp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Vi(n),n):(Vi(n),null)}if(Vi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Hl(n,n.updateQueue),qt(n),null;case 4:return ot(),t===null&&Hf(n.stateNode.containerInfo),qt(n),null;case 10:return Hi(n.type),qt(n),null;case 19:if(ye(un),u=n.memoizedState,u===null)return qt(n),null;if(o=(n.flags&128)!==0,f=u.rendering,f===null)if(o)fo(u,!1);else{if(Kt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Pl(t),f!==null){for(n.flags|=128,fo(u,!1),t=f.updateQueue,n.updateQueue=t,Hl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Up(a,t),a=a.sibling;return Me(un,un.current&1|2),n.child}t=t.sibling}u.tail!==null&&it()>kl&&(n.flags|=128,o=!0,fo(u,!1),n.lanes=4194304)}else{if(!o)if(t=Pl(f),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,Hl(n,t),fo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!At)return qt(n),null}else 2*it()-u.renderingStartTime>kl&&a!==536870912&&(n.flags|=128,o=!0,fo(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(t=u.last,t!==null?t.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=it(),n.sibling=null,t=un.current,Me(un,o?t&1|2:t&1),n):(qt(n),null);case 22:case 23:return Vi(n),Gu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(qt(n),n.subtreeFlags&6&&(n.flags|=8192)):qt(n),a=n.updateQueue,a!==null&&Hl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&ye(cr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Hi(cn),qt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Ox(t,n){switch(Ru(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Hi(cn),ot(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ht(n),null;case 13:if(Vi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Zs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ye(un),null;case 4:return ot(),null;case 10:return Hi(n.type),null;case 22:case 23:return Vi(n),Gu(),t!==null&&ye(cr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Hi(cn),null;case 25:return null;default:return null}}function ag(t,n){switch(Ru(n),n.tag){case 3:Hi(cn),ot();break;case 26:case 27:case 5:Ht(n);break;case 4:ot();break;case 13:Vi(n);break;case 19:ye(un);break;case 10:Hi(n.type);break;case 22:case 23:Vi(n),Gu(),t!==null&&ye(cr);break;case 24:Hi(cn)}}function ho(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,S=a.inst;o=f(),S.destroy=o}a=a.next}while(a!==u)}}catch(b){It(n,n.return,b)}}function Ea(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var S=o.inst,b=S.destroy;if(b!==void 0){S.destroy=void 0,u=n;var P=a,$=b;try{$()}catch(ue){It(u,P,ue)}}}o=o.next}while(o!==f)}}catch(ue){It(n,n.return,ue)}}function rg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{qp(n,a)}catch(o){It(t,t.return,o)}}}function sg(t,n,a){a.props=fr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){It(t,n,o)}}function po(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){It(t,n,u)}}function Mi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){It(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){It(t,n,u)}else a.current=null}function og(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){It(t,t.return,u)}}function gf(t,n,a){try{var o=t.stateNode;ty(o,t.type,a,n),o[xn]=n}catch(u){It(t,t.return,u)}}function lg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ua(t.type)||t.tag===4}function _f(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||lg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ua(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function vf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Jl));else if(o!==4&&(o===27&&Ua(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(vf(t,n,a),t=t.sibling;t!==null;)vf(t,n,a),t=t.sibling}function Gl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Ua(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Gl(t,n,a),t=t.sibling;t!==null;)Gl(t,n,a),t=t.sibling}function cg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);En(n,o,a),n[on]=t,n[xn]=a}catch(f){It(t,t.return,f)}}var Wi=!1,Jt=!1,xf=!1,ug=typeof WeakSet=="function"?WeakSet:Set,gn=null;function Px(t,n){if(t=t.containerInfo,kf=rc,t=Sp(t),gu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var S=0,b=-1,P=-1,$=0,ue=0,ve=t,ne=null;t:for(;;){for(var ie;ve!==a||u!==0&&ve.nodeType!==3||(b=S+u),ve!==f||o!==0&&ve.nodeType!==3||(P=S+o),ve.nodeType===3&&(S+=ve.nodeValue.length),(ie=ve.firstChild)!==null;)ne=ve,ve=ie;for(;;){if(ve===t)break t;if(ne===a&&++$===u&&(b=S),ne===f&&++ue===o&&(P=S),(ie=ve.nextSibling)!==null)break;ve=ne,ne=ve.parentNode}ve=ie}a=b===-1||P===-1?null:{start:b,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Xf={focusedElem:t,selectionRange:a},rc=!1,gn=n;gn!==null;)if(n=gn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,gn=t;else for(;gn!==null;){switch(n=gn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var tt=fr(a.type,u,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(tt,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(Ze){It(a,a.return,Ze)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)jf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":jf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,gn=t;break}gn=n.return}}function fg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ba(t,a),o&4&&ho(5,a);break;case 1:if(ba(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){It(a,a.return,S)}else{var u=fr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){It(a,a.return,S)}}o&64&&rg(a),o&512&&po(a,a.return);break;case 3:if(ba(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{qp(t,n)}catch(S){It(a,a.return,S)}}break;case 27:n===null&&o&4&&cg(a);case 26:case 5:ba(t,a),n===null&&o&4&&og(a),o&512&&po(a,a.return);break;case 12:ba(t,a);break;case 13:ba(t,a),o&4&&pg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Xx.bind(null,a),ly(t,a))));break;case 22:if(o=a.memoizedState!==null||Wi,!o){n=n!==null&&n.memoizedState!==null||Jt,u=Wi;var f=Jt;Wi=o,(Jt=n)&&!f?Ta(t,a,(a.subtreeFlags&8772)!==0):ba(t,a),Wi=u,Jt=f}break;case 30:break;default:ba(t,a)}}function hg(t){var n=t.alternate;n!==null&&(t.alternate=null,hg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ha(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Xt=null,Bn=!1;function qi(t,n,a){for(a=a.child;a!==null;)dg(t,n,a),a=a.sibling}function dg(t,n,a){if(Pe&&typeof Pe.onCommitFiberUnmount=="function")try{Pe.onCommitFiberUnmount(fe,a)}catch{}switch(a.tag){case 26:Jt||Mi(a,n),qi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Jt||Mi(a,n);var o=Xt,u=Bn;Ua(a.type)&&(Xt=a.stateNode,Bn=!1),qi(t,n,a),Eo(a.stateNode),Xt=o,Bn=u;break;case 5:Jt||Mi(a,n);case 6:if(o=Xt,u=Bn,Xt=null,qi(t,n,a),Xt=o,Bn=u,Xt!==null)if(Bn)try{(Xt.nodeType===9?Xt.body:Xt.nodeName==="HTML"?Xt.ownerDocument.body:Xt).removeChild(a.stateNode)}catch(f){It(a,n,f)}else try{Xt.removeChild(a.stateNode)}catch(f){It(a,n,f)}break;case 18:Xt!==null&&(Bn?(t=Xt,t0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Uo(t)):t0(Xt,a.stateNode));break;case 4:o=Xt,u=Bn,Xt=a.stateNode.containerInfo,Bn=!0,qi(t,n,a),Xt=o,Bn=u;break;case 0:case 11:case 14:case 15:Jt||Ea(2,a,n),Jt||Ea(4,a,n),qi(t,n,a);break;case 1:Jt||(Mi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&sg(a,n,o)),qi(t,n,a);break;case 21:qi(t,n,a);break;case 22:Jt=(o=Jt)||a.memoizedState!==null,qi(t,n,a),Jt=o;break;default:qi(t,n,a)}}function pg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Uo(t)}catch(a){It(n,n.return,a)}}function Bx(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new ug),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new ug),n;default:throw Error(s(435,t.tag))}}function yf(t,n){var a=Bx(t);n.forEach(function(o){var u=Wx.bind(null,t,o);a.has(o)||(a.add(o),o.then(u,u))})}function Xn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,S=n,b=S;e:for(;b!==null;){switch(b.tag){case 27:if(Ua(b.type)){Xt=b.stateNode,Bn=!1;break e}break;case 5:Xt=b.stateNode,Bn=!1;break e;case 3:case 4:Xt=b.stateNode.containerInfo,Bn=!0;break e}b=b.return}if(Xt===null)throw Error(s(160));dg(f,S,u),Xt=null,Bn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)mg(n,t),n=n.sibling}var ci=null;function mg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Xn(n,t),Wn(t),o&4&&(Ea(3,t,t.return),ho(3,t),Ea(5,t,t.return));break;case 1:Xn(n,t),Wn(t),o&512&&(Jt||a===null||Mi(a,a.return)),o&64&&Wi&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=ci;if(Xn(n,t),Wn(t),o&512&&(Jt||a===null||Mi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[fa]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),En(f,o,a),f[on]=t,tn(f),o=f;break e;case"link":var S=c0("link","href",u).get(o+(a.href||""));if(S){for(var b=0;b<S.length;b++)if(f=S[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(b,1);break t}}f=u.createElement(o),En(f,o,a),u.head.appendChild(f);break;case"meta":if(S=c0("meta","content",u).get(o+(a.content||""))){for(b=0;b<S.length;b++)if(f=S[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(b,1);break t}}f=u.createElement(o),En(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[on]=t,tn(f),o=f}t.stateNode=o}else u0(u,t.type,t.stateNode);else t.stateNode=l0(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?u0(u,t.type,t.stateNode):l0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&gf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,t),Wn(t),o&512&&(Jt||a===null||Mi(a,a.return)),a!==null&&o&4&&gf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,t),Wn(t),o&512&&(Jt||a===null||Mi(a,a.return)),t.flags&32){u=t.stateNode;try{xi(u,"")}catch(ie){It(t,t.return,ie)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,gf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(xf=!0);break;case 6:if(Xn(n,t),Wn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(ie){It(t,t.return,ie)}}break;case 3:if(nc=null,u=ci,ci=ec(n.containerInfo),Xn(n,t),ci=u,Wn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Uo(n.containerInfo)}catch(ie){It(t,t.return,ie)}xf&&(xf=!1,gg(t));break;case 4:o=ci,ci=ec(t.stateNode.containerInfo),Xn(n,t),Wn(t),ci=o;break;case 12:Xn(n,t),Wn(t);break;case 13:Xn(n,t),Wn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Af=it()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,yf(t,o)));break;case 22:u=t.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,$=Wi,ue=Jt;if(Wi=$||u,Jt=ue||P,Xn(n,t),Jt=ue,Wi=$,Wn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||P||Wi||Jt||hr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,u)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{b=P.stateNode;var ve=P.memoizedProps.style,ne=ve!=null&&ve.hasOwnProperty("display")?ve.display:null;b.style.display=ne==null||typeof ne=="boolean"?"":(""+ne).trim()}}catch(ie){It(P,P.return,ie)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=u?"":P.memoizedProps}catch(ie){It(P,P.return,ie)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,yf(t,a))));break;case 19:Xn(n,t),Wn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,yf(t,o)));break;case 30:break;case 21:break;default:Xn(n,t),Wn(t)}}function Wn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(lg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=_f(t);Gl(t,f,u);break;case 5:var S=a.stateNode;a.flags&32&&(xi(S,""),a.flags&=-33);var b=_f(t);Gl(t,b,S);break;case 3:case 4:var P=a.stateNode.containerInfo,$=_f(t);vf(t,$,P);break;default:throw Error(s(161))}}catch(ue){It(t,t.return,ue)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function gg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;gg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ba(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)fg(t,n.alternate,n),n=n.sibling}function hr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ea(4,n,n.return),hr(n);break;case 1:Mi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&sg(n,n.return,a),hr(n);break;case 27:Eo(n.stateNode);case 26:case 5:Mi(n,n.return),hr(n);break;case 22:n.memoizedState===null&&hr(n);break;case 30:hr(n);break;default:hr(n)}t=t.sibling}}function Ta(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:Ta(u,f,a),ho(4,f);break;case 1:if(Ta(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch($){It(o,o.return,$)}if(o=f,u=o.updateQueue,u!==null){var b=o.stateNode;try{var P=u.shared.hiddenCallbacks;if(P!==null)for(u.shared.hiddenCallbacks=null,u=0;u<P.length;u++)Wp(P[u],b)}catch($){It(o,o.return,$)}}a&&S&64&&rg(f),po(f,f.return);break;case 27:cg(f);case 26:case 5:Ta(u,f,a),a&&o===null&&S&4&&og(f),po(f,f.return);break;case 12:Ta(u,f,a);break;case 13:Ta(u,f,a),a&&S&4&&pg(u,f);break;case 22:f.memoizedState===null&&Ta(u,f,a),po(f,f.return);break;case 30:break;default:Ta(u,f,a)}n=n.sibling}}function Sf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Js(a))}function Mf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Js(t))}function Ei(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)_g(t,n,a,o),n=n.sibling}function _g(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(t,n,a,o),u&2048&&ho(9,n);break;case 1:Ei(t,n,a,o);break;case 3:Ei(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Js(t)));break;case 12:if(u&2048){Ei(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,S=f.id,b=f.onPostCommit;typeof b=="function"&&b(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(P){It(n,n.return,P)}}else Ei(t,n,a,o);break;case 13:Ei(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Ei(t,n,a,o):mo(t,n):f._visibility&2?Ei(t,n,a,o):(f._visibility|=2,Qr(t,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&Sf(S,n);break;case 24:Ei(t,n,a,o),u&2048&&Mf(n.alternate,n);break;default:Ei(t,n,a,o)}}function Qr(t,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,S=n,b=a,P=o,$=S.flags;switch(S.tag){case 0:case 11:case 15:Qr(f,S,b,P,u),ho(8,S);break;case 23:break;case 22:var ue=S.stateNode;S.memoizedState!==null?ue._visibility&2?Qr(f,S,b,P,u):mo(f,S):(ue._visibility|=2,Qr(f,S,b,P,u)),u&&$&2048&&Sf(S.alternate,S);break;case 24:Qr(f,S,b,P,u),u&&$&2048&&Mf(S.alternate,S);break;default:Qr(f,S,b,P,u)}n=n.sibling}}function mo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:mo(a,o),u&2048&&Sf(o.alternate,o);break;case 24:mo(a,o),u&2048&&Mf(o.alternate,o);break;default:mo(a,o)}n=n.sibling}}var go=8192;function Jr(t){if(t.subtreeFlags&go)for(t=t.child;t!==null;)vg(t),t=t.sibling}function vg(t){switch(t.tag){case 26:Jr(t),t.flags&go&&t.memoizedState!==null&&Sy(ci,t.memoizedState,t.memoizedProps);break;case 5:Jr(t);break;case 3:case 4:var n=ci;ci=ec(t.stateNode.containerInfo),Jr(t),ci=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=go,go=16777216,Jr(t),go=n):Jr(t));break;default:Jr(t)}}function xg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function _o(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,Sg(o,t)}xg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)yg(t),t=t.sibling}function yg(t){switch(t.tag){case 0:case 11:case 15:_o(t),t.flags&2048&&Ea(9,t,t.return);break;case 3:_o(t);break;case 12:_o(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Vl(t)):_o(t);break;default:_o(t)}}function Vl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,Sg(o,t)}xg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ea(8,n,n.return),Vl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Vl(n));break;default:Vl(n)}t=t.sibling}}function Sg(t,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:Ea(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Js(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,gn=o;else e:for(a=t;gn!==null;){o=gn;var u=o.sibling,f=o.return;if(hg(o),o===a){gn=null;break e}if(u!==null){u.return=f,gn=u;break e}gn=f}}}var zx={getCacheForType:function(t){var n=An(cn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},Ix=typeof WeakMap=="function"?WeakMap:Map,Rt=0,kt=null,pt=null,yt=0,wt=0,qn=null,Aa=!1,$r=!1,Ef=!1,ji=0,Kt=0,Ra=0,dr=0,bf=0,ii=0,es=0,vo=null,zn=null,Tf=!1,Af=0,kl=1/0,Xl=null,wa=null,Mn=0,Ca=null,ts=null,ns=0,Rf=0,wf=null,Mg=null,xo=0,Cf=null;function jn(){if((Rt&2)!==0&&yt!==0)return yt&-yt;if(B.T!==null){var t=kr;return t!==0?t:Bf()}return Mt()}function Eg(){ii===0&&(ii=(yt&536870912)===0||At?X():536870912);var t=ni.current;return t!==null&&(t.flags|=32),ii}function Yn(t,n,a){(t===kt&&(wt===2||wt===9)||t.cancelPendingCommit!==null)&&(is(t,0),Da(t,yt,ii,!1)),_e(t,a),((Rt&2)===0||t!==kt)&&(t===kt&&((Rt&2)===0&&(dr|=a),Kt===4&&Da(t,yt,ii,!1)),bi(t))}function bg(t,n,a){if((Rt&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&t.expiredLanes)===0||nt(t,n),u=o?Gx(t,n):Lf(t,n,!0),f=o;do{if(u===0){$r&&!o&&Da(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Fx(a)){u=Lf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var b=t;u=vo;var P=b.current.memoizedState.isDehydrated;if(P&&(is(b,S).flags|=256),S=Lf(b,S,!1),S!==2){if(Ef&&!P){b.errorRecoveryDisabledLanes|=f,dr|=f,u=4;break e}f=zn,zn=u,f!==null&&(zn===null?zn=f:zn.push.apply(zn,f))}u=S}if(f=!1,u!==2)continue}}if(u===1){is(t,0),Da(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Da(o,n,ii,!Aa);break e;case 2:zn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Af+300-it(),10<u)){if(Da(o,n,ii,!Aa),ct(o,0,!0)!==0)break e;o.timeoutHandle=$g(Tg.bind(null,o,a,zn,Xl,Tf,n,ii,dr,es,Aa,f,2,-0,0),u);break e}Tg(o,a,zn,Xl,Tf,n,ii,dr,es,Aa,f,0,-0,0)}}break}while(!0);bi(t)}function Tg(t,n,a,o,u,f,S,b,P,$,ue,ve,ne,ie){if(t.timeoutHandle=-1,ve=n.subtreeFlags,(ve&8192||(ve&16785408)===16785408)&&(Ao={stylesheets:null,count:0,unsuspend:yy},vg(n),ve=My(),ve!==null)){t.cancelPendingCommit=ve(Lg.bind(null,t,n,f,a,o,u,S,b,P,ue,1,ne,ie)),Da(t,f,S,!$);return}Lg(t,n,f,a,o,u,S,b,P)}function Fx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Vn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Da(t,n,a,o){n&=~bf,n&=~dr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-Ge(u),S=1<<f;o[f]=-1,u&=~S}a!==0&&Oe(t,a,n)}function Wl(){return(Rt&6)===0?(yo(0),!1):!0}function Df(){if(pt!==null){if(wt===0)var t=pt.return;else t=pt,Fi=or=null,qu(t),Zr=null,co=0,t=pt;for(;t!==null;)ag(t.alternate,t),t=t.return;pt=null}}function is(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,iy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Df(),kt=t,pt=a=Bi(t.current,null),yt=n,wt=0,qn=null,Aa=!1,$r=nt(t,n),Ef=!1,es=ii=bf=dr=Ra=Kt=0,zn=vo=null,Tf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Ge(o),f=1<<u;n|=t[u],o&=~f}return ji=n,dl(),a}function Ag(t,n){ut=null,B.H=Ll,n===eo||n===Ml?(n=kp(),wt=3):n===Hp?(n=kp(),wt=4):wt=n===Xm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,qn=n,pt===null&&(Kt=1,zl(t,Jn(n,t.current)))}function Rg(){var t=B.H;return B.H=Ll,t===null?Ll:t}function wg(){var t=B.A;return B.A=zx,t}function Uf(){Kt=4,Aa||(yt&4194048)!==yt&&ni.current!==null||($r=!0),(Ra&134217727)===0&&(dr&134217727)===0||kt===null||Da(kt,yt,ii,!1)}function Lf(t,n,a){var o=Rt;Rt|=2;var u=Rg(),f=wg();(kt!==t||yt!==n)&&(Xl=null,is(t,n)),n=!1;var S=Kt;e:do try{if(wt!==0&&pt!==null){var b=pt,P=qn;switch(wt){case 8:Df(),S=6;break e;case 3:case 2:case 9:case 6:ni.current===null&&(n=!0);var $=wt;if(wt=0,qn=null,as(t,b,P,$),a&&$r){S=0;break e}break;default:$=wt,wt=0,qn=null,as(t,b,P,$)}}Hx(),S=Kt;break}catch(ue){Ag(t,ue)}while(!0);return n&&t.shellSuspendCounter++,Fi=or=null,Rt=o,B.H=u,B.A=f,pt===null&&(kt=null,yt=0,dl()),S}function Hx(){for(;pt!==null;)Cg(pt)}function Gx(t,n){var a=Rt;Rt|=2;var o=Rg(),u=wg();kt!==t||yt!==n?(Xl=null,kl=it()+500,is(t,n)):$r=nt(t,n);e:do try{if(wt!==0&&pt!==null){n=pt;var f=qn;t:switch(wt){case 1:wt=0,qn=null,as(t,n,f,1);break;case 2:case 9:if(Gp(f)){wt=0,qn=null,Dg(n);break}n=function(){wt!==2&&wt!==9||kt!==t||(wt=7),bi(t)},f.then(n,n);break e;case 3:wt=7;break e;case 4:wt=5;break e;case 7:Gp(f)?(wt=0,qn=null,Dg(n)):(wt=0,qn=null,as(t,n,f,7));break;case 5:var S=null;switch(pt.tag){case 26:S=pt.memoizedState;case 5:case 27:var b=pt;if(!S||f0(S)){wt=0,qn=null;var P=b.sibling;if(P!==null)pt=P;else{var $=b.return;$!==null?(pt=$,ql($)):pt=null}break t}}wt=0,qn=null,as(t,n,f,5);break;case 6:wt=0,qn=null,as(t,n,f,6);break;case 8:Df(),Kt=6;break e;default:throw Error(s(462))}}Vx();break}catch(ue){Ag(t,ue)}while(!0);return Fi=or=null,B.H=o,B.A=u,Rt=a,pt!==null?0:(kt=null,yt=0,dl(),Kt)}function Vx(){for(;pt!==null&&!Ln();)Cg(pt)}function Cg(t){var n=ng(t.alternate,t,ji);t.memoizedProps=t.pendingProps,n===null?ql(t):pt=n}function Dg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Km(a,n,n.pendingProps,n.type,void 0,yt);break;case 11:n=Km(a,n,n.pendingProps,n.type.render,n.ref,yt);break;case 5:qu(n);default:ag(a,n),n=pt=Up(n,ji),n=ng(a,n,ji)}t.memoizedProps=t.pendingProps,n===null?ql(t):pt=n}function as(t,n,a,o){Fi=or=null,qu(n),Zr=null,co=0;var u=n.return;try{if(Ux(t,u,n,a,yt)){Kt=1,zl(t,Jn(a,t.current)),pt=null;return}}catch(f){if(u!==null)throw pt=u,f;Kt=1,zl(t,Jn(a,t.current)),pt=null;return}n.flags&32768?(At||o===1?t=!0:$r||(yt&536870912)!==0?t=!1:(Aa=t=!0,(o===2||o===9||o===3||o===6)&&(o=ni.current,o!==null&&o.tag===13&&(o.flags|=16384))),Ug(n,t)):ql(n)}function ql(t){var n=t;do{if((n.flags&32768)!==0){Ug(n,Aa);return}t=n.return;var a=Nx(n.alternate,n,ji);if(a!==null){pt=a;return}if(n=n.sibling,n!==null){pt=n;return}pt=n=t}while(n!==null);Kt===0&&(Kt=5)}function Ug(t,n){do{var a=Ox(t.alternate,t);if(a!==null){a.flags&=32767,pt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){pt=t;return}pt=t=a}while(t!==null);Kt=6,pt=null}function Lg(t,n,a,o,u,f,S,b,P){t.cancelPendingCommit=null;do jl();while(Mn!==0);if((Rt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Su,ze(t,a,f,S,b,P),t===kt&&(pt=kt=null,yt=0),ts=n,Ca=t,ns=a,Rf=f,wf=u,Mg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,qx(L,function(){return zg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=K.p,K.p=2,S=Rt,Rt|=4;try{Px(t,n,a)}finally{Rt=S,K.p=u,B.T=o}}Mn=1,Ng(),Og(),Pg()}}function Ng(){if(Mn===1){Mn=0;var t=Ca,n=ts,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=K.p;K.p=2;var u=Rt;Rt|=4;try{mg(n,t);var f=Xf,S=Sp(t.containerInfo),b=f.focusedElem,P=f.selectionRange;if(S!==b&&b&&b.ownerDocument&&yp(b.ownerDocument.documentElement,b)){if(P!==null&&gu(b)){var $=P.start,ue=P.end;if(ue===void 0&&(ue=$),"selectionStart"in b)b.selectionStart=$,b.selectionEnd=Math.min(ue,b.value.length);else{var ve=b.ownerDocument||document,ne=ve&&ve.defaultView||window;if(ne.getSelection){var ie=ne.getSelection(),tt=b.textContent.length,Ze=Math.min(P.start,tt),Nt=P.end===void 0?Ze:Math.min(P.end,tt);!ie.extend&&Ze>Nt&&(S=Nt,Nt=Ze,Ze=S);var W=xp(b,Ze),G=xp(b,Nt);if(W&&G&&(ie.rangeCount!==1||ie.anchorNode!==W.node||ie.anchorOffset!==W.offset||ie.focusNode!==G.node||ie.focusOffset!==G.offset)){var Q=ve.createRange();Q.setStart(W.node,W.offset),ie.removeAllRanges(),Ze>Nt?(ie.addRange(Q),ie.extend(G.node,G.offset)):(Q.setEnd(G.node,G.offset),ie.addRange(Q))}}}}for(ve=[],ie=b;ie=ie.parentNode;)ie.nodeType===1&&ve.push({element:ie,left:ie.scrollLeft,top:ie.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<ve.length;b++){var he=ve[b];he.element.scrollLeft=he.left,he.element.scrollTop=he.top}}rc=!!kf,Xf=kf=null}finally{Rt=u,K.p=o,B.T=a}}t.current=n,Mn=2}}function Og(){if(Mn===2){Mn=0;var t=Ca,n=ts,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=K.p;K.p=2;var u=Rt;Rt|=4;try{fg(t,n.alternate,n)}finally{Rt=u,K.p=o,B.T=a}}Mn=3}}function Pg(){if(Mn===4||Mn===3){Mn=0,gt();var t=Ca,n=ts,a=ns,o=Mg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Mn=5:(Mn=0,ts=Ca=null,Bg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(wa=null),en(a),n=n.stateNode,Pe&&typeof Pe.onCommitFiberRoot=="function")try{Pe.onCommitFiberRoot(fe,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,u=K.p,K.p=2,B.T=null;try{for(var f=t.onRecoverableError,S=0;S<o.length;S++){var b=o[S];f(b.value,{componentStack:b.stack})}}finally{B.T=n,K.p=u}}(ns&3)!==0&&jl(),bi(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===Cf?xo++:(xo=0,Cf=t):xo=0,yo(0)}}function Bg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Js(n)))}function jl(t){return Ng(),Og(),Pg(),zg()}function zg(){if(Mn!==5)return!1;var t=Ca,n=Rf;Rf=0;var a=en(ns),o=B.T,u=K.p;try{K.p=32>a?32:a,B.T=null,a=wf,wf=null;var f=Ca,S=ns;if(Mn=0,ts=Ca=null,ns=0,(Rt&6)!==0)throw Error(s(331));var b=Rt;if(Rt|=4,yg(f.current),_g(f,f.current,S,a),Rt=b,yo(0,!1),Pe&&typeof Pe.onPostCommitFiberRoot=="function")try{Pe.onPostCommitFiberRoot(fe,f)}catch{}return!0}finally{K.p=u,B.T=o,Bg(t,n)}}function Ig(t,n,a){n=Jn(a,n),n=of(t.stateNode,n,2),t=xa(t,n,2),t!==null&&(_e(t,2),bi(t))}function It(t,n,a){if(t.tag===3)Ig(t,t,a);else for(;n!==null;){if(n.tag===3){Ig(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(wa===null||!wa.has(o))){t=Jn(a,t),a=Vm(2),o=xa(n,a,2),o!==null&&(km(a,o,n,t),_e(o,2),bi(o));break}}n=n.return}}function Nf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Ix;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Ef=!0,u.add(a),t=kx.bind(null,t,n,a),n.then(t,t))}function kx(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,kt===t&&(yt&a)===a&&(Kt===4||Kt===3&&(yt&62914560)===yt&&300>it()-Af?(Rt&2)===0&&is(t,0):bf|=a,es===yt&&(es=0)),bi(t)}function Fg(t,n){n===0&&(n=Ne()),t=Fr(t,n),t!==null&&(_e(t,n),bi(t))}function Xx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Fg(t,a)}function Wx(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Fg(t,a)}function qx(t,n){return ft(t,n)}var Yl=null,rs=null,Of=!1,Zl=!1,Pf=!1,pr=0;function bi(t){t!==rs&&t.next===null&&(rs===null?Yl=rs=t:rs=rs.next=t),Zl=!0,Of||(Of=!0,Yx())}function yo(t,n){if(!Pf&&Zl){Pf=!0;do for(var a=!1,o=Yl;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var S=o.suspendedLanes,b=o.pingedLanes;f=(1<<31-Ge(42|t)+1)-1,f&=u&~(S&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,kg(o,f))}else f=yt,f=ct(o,o===kt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||nt(o,f)||(a=!0,kg(o,f));o=o.next}while(a);Pf=!1}}function jx(){Hg()}function Hg(){Zl=Of=!1;var t=0;pr!==0&&(ny()&&(t=pr),pr=0);for(var n=it(),a=null,o=Yl;o!==null;){var u=o.next,f=Gg(o,n);f===0?(o.next=null,a===null?Yl=u:a.next=u,u===null&&(rs=a)):(a=o,(t!==0||(f&3)!==0)&&(Zl=!0)),o=u}yo(t)}function Gg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var S=31-Ge(f),b=1<<S,P=u[S];P===-1?((b&a)===0||(b&o)!==0)&&(u[S]=Dt(b,n)):P<=n&&(t.expiredLanes|=b),f&=~b}if(n=kt,a=yt,a=ct(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(wt===2||wt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&F(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||nt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&F(o),en(a)){case 2:case 8:a=Ve;break;case 32:a=L;break;case 268435456:a=te;break;default:a=L}return o=Vg.bind(null,t),a=ft(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&F(o),t.callbackPriority=2,t.callbackNode=null,2}function Vg(t,n){if(Mn!==0&&Mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(jl()&&t.callbackNode!==a)return null;var o=yt;return o=ct(t,t===kt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(bg(t,o,n),Gg(t,it()),t.callbackNode!=null&&t.callbackNode===a?Vg.bind(null,t):null)}function kg(t,n){if(jl())return null;bg(t,n,!0)}function Yx(){ay(function(){(Rt&6)!==0?ft(Ct,jx):Hg()})}function Bf(){return pr===0&&(pr=X()),pr}function Xg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:sl(""+t)}function Wg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Zx(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Xg((u[xn]||null).action),S=o.submitter;S&&(n=(n=S[xn]||null)?Xg(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var b=new ul("action","action",null,o,u);t.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(pr!==0){var P=S?Wg(u,S):new FormData(u);tf(a,{pending:!0,data:P,method:u.method,action:f},null,P)}}else typeof f=="function"&&(b.preventDefault(),P=S?Wg(u,S):new FormData(u),tf(a,{pending:!0,data:P,method:u.method,action:f},f,P))},currentTarget:u}]})}}for(var zf=0;zf<yu.length;zf++){var If=yu[zf],Kx=If.toLowerCase(),Qx=If[0].toUpperCase()+If.slice(1);li(Kx,"on"+Qx)}li(bp,"onAnimationEnd"),li(Tp,"onAnimationIteration"),li(Ap,"onAnimationStart"),li("dblclick","onDoubleClick"),li("focusin","onFocus"),li("focusout","onBlur"),li(px,"onTransitionRun"),li(mx,"onTransitionStart"),li(gx,"onTransitionCancel"),li(Rp,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),Li("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Li("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Li("onBeforeInput",["compositionend","keypress","textInput","paste"]),Li("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Li("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Li("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(So));function qg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var S=o.length-1;0<=S;S--){var b=o[S],P=b.instance,$=b.currentTarget;if(b=b.listener,P!==f&&u.isPropagationStopped())break e;f=b,u.currentTarget=$;try{f(u)}catch(ue){Bl(ue)}u.currentTarget=null,f=P}else for(S=0;S<o.length;S++){if(b=o[S],P=b.instance,$=b.currentTarget,b=b.listener,P!==f&&u.isPropagationStopped())break e;f=b,u.currentTarget=$;try{f(u)}catch(ue){Bl(ue)}u.currentTarget=null,f=P}}}}function mt(t,n){var a=n[Ka];a===void 0&&(a=n[Ka]=new Set);var o=t+"__bubble";a.has(o)||(jg(n,t,2,!1),a.add(o))}function Ff(t,n,a){var o=0;n&&(o|=4),jg(a,t,o,n)}var Kl="_reactListening"+Math.random().toString(36).slice(2);function Hf(t){if(!t[Kl]){t[Kl]=!0,al.forEach(function(a){a!=="selectionchange"&&(Jx.has(a)||Ff(a,!1,t),Ff(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Kl]||(n[Kl]=!0,Ff("selectionchange",!1,n))}}function jg(t,n,a,o){switch(_0(n)){case 2:var u=Ty;break;case 8:u=Ay;break;default:u=eh}a=u.bind(null,n,a,t),u=void 0,!ou||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Gf(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var b=o.stateNode.containerInfo;if(b===u)break;if(S===4)for(S=o.return;S!==null;){var P=S.tag;if((P===3||P===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;b!==null;){if(S=Di(b),S===null)return;if(P=S.tag,P===5||P===6||P===26||P===27){o=f=S;continue e}b=b.parentNode}}o=o.return}ep(function(){var $=f,ue=ru(a),ve=[];e:{var ne=wp.get(t);if(ne!==void 0){var ie=ul,tt=t;switch(t){case"keypress":if(ll(a)===0)break e;case"keydown":case"keyup":ie=qv;break;case"focusin":tt="focus",ie=fu;break;case"focusout":tt="blur",ie=fu;break;case"beforeblur":case"afterblur":ie=fu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=Ov;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=Zv;break;case bp:case Tp:case Ap:ie=zv;break;case Rp:ie=Qv;break;case"scroll":case"scrollend":ie=Lv;break;case"wheel":ie=$v;break;case"copy":case"cut":case"paste":ie=Fv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=rp;break;case"toggle":case"beforetoggle":ie=tx}var Ze=(n&4)!==0,Nt=!Ze&&(t==="scroll"||t==="scrollend"),W=Ze?ne!==null?ne+"Capture":null:ne;Ze=[];for(var G=$,Q;G!==null;){var he=G;if(Q=he.stateNode,he=he.tag,he!==5&&he!==26&&he!==27||Q===null||W===null||(he=Fs(G,W),he!=null&&Ze.push(Mo(G,he,Q))),Nt)break;G=G.return}0<Ze.length&&(ne=new ie(ne,tt,null,a,ue),ve.push({event:ne,listeners:Ze}))}}if((n&7)===0){e:{if(ne=t==="mouseover"||t==="pointerover",ie=t==="mouseout"||t==="pointerout",ne&&a!==au&&(tt=a.relatedTarget||a.fromElement)&&(Di(tt)||tt[Nn]))break e;if((ie||ne)&&(ne=ue.window===ue?ue:(ne=ue.ownerDocument)?ne.defaultView||ne.parentWindow:window,ie?(tt=a.relatedTarget||a.toElement,ie=$,tt=tt?Di(tt):null,tt!==null&&(Nt=c(tt),Ze=tt.tag,tt!==Nt||Ze!==5&&Ze!==27&&Ze!==6)&&(tt=null)):(ie=null,tt=$),ie!==tt)){if(Ze=ip,he="onMouseLeave",W="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Ze=rp,he="onPointerLeave",W="onPointerEnter",G="pointer"),Nt=ie==null?ne:Ja(ie),Q=tt==null?ne:Ja(tt),ne=new Ze(he,G+"leave",ie,a,ue),ne.target=Nt,ne.relatedTarget=Q,he=null,Di(ue)===$&&(Ze=new Ze(W,G+"enter",tt,a,ue),Ze.target=Q,Ze.relatedTarget=Nt,he=Ze),Nt=he,ie&&tt)t:{for(Ze=ie,W=tt,G=0,Q=Ze;Q;Q=ss(Q))G++;for(Q=0,he=W;he;he=ss(he))Q++;for(;0<G-Q;)Ze=ss(Ze),G--;for(;0<Q-G;)W=ss(W),Q--;for(;G--;){if(Ze===W||W!==null&&Ze===W.alternate)break t;Ze=ss(Ze),W=ss(W)}Ze=null}else Ze=null;ie!==null&&Yg(ve,ne,ie,Ze,!1),tt!==null&&Nt!==null&&Yg(ve,Nt,tt,Ze,!0)}}e:{if(ne=$?Ja($):window,ie=ne.nodeName&&ne.nodeName.toLowerCase(),ie==="select"||ie==="input"&&ne.type==="file")var He=dp;else if(fp(ne))if(pp)He=fx;else{He=cx;var ht=lx}else ie=ne.nodeName,!ie||ie.toLowerCase()!=="input"||ne.type!=="checkbox"&&ne.type!=="radio"?$&&iu($.elementType)&&(He=dp):He=ux;if(He&&(He=He(t,$))){hp(ve,He,a,ue);break e}ht&&ht(t,ne,$),t==="focusout"&&$&&ne.type==="number"&&$.memoizedProps.value!=null&&Tn(ne,"number",ne.value)}switch(ht=$?Ja($):window,t){case"focusin":(fp(ht)||ht.contentEditable==="true")&&(Br=ht,_u=$,js=null);break;case"focusout":js=_u=Br=null;break;case"mousedown":vu=!0;break;case"contextmenu":case"mouseup":case"dragend":vu=!1,Mp(ve,a,ue);break;case"selectionchange":if(dx)break;case"keydown":case"keyup":Mp(ve,a,ue)}var ke;if(du)e:{switch(t){case"compositionstart":var Je="onCompositionStart";break e;case"compositionend":Je="onCompositionEnd";break e;case"compositionupdate":Je="onCompositionUpdate";break e}Je=void 0}else Pr?cp(t,a)&&(Je="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Je="onCompositionStart");Je&&(sp&&a.locale!=="ko"&&(Pr||Je!=="onCompositionStart"?Je==="onCompositionEnd"&&Pr&&(ke=tp()):(ma=ue,lu="value"in ma?ma.value:ma.textContent,Pr=!0)),ht=Ql($,Je),0<ht.length&&(Je=new ap(Je,t,null,a,ue),ve.push({event:Je,listeners:ht}),ke?Je.data=ke:(ke=up(a),ke!==null&&(Je.data=ke)))),(ke=ix?ax(t,a):rx(t,a))&&(Je=Ql($,"onBeforeInput"),0<Je.length&&(ht=new ap("onBeforeInput","beforeinput",null,a,ue),ve.push({event:ht,listeners:Je}),ht.data=ke)),Zx(ve,t,$,a,ue)}qg(ve,n)})}function Mo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Ql(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Fs(t,a),u!=null&&o.unshift(Mo(t,u,f)),u=Fs(t,n),u!=null&&o.push(Mo(t,u,f))),t.tag===3)return o;t=t.return}return[]}function ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Yg(t,n,a,o,u){for(var f=n._reactName,S=[];a!==null&&a!==o;){var b=a,P=b.alternate,$=b.stateNode;if(b=b.tag,P!==null&&P===o)break;b!==5&&b!==26&&b!==27||$===null||(P=$,u?($=Fs(a,f),$!=null&&S.unshift(Mo(a,$,P))):u||($=Fs(a,f),$!=null&&S.push(Mo(a,$,P)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var $x=/\r\n?/g,ey=/\u0000|\uFFFD/g;function Zg(t){return(typeof t=="string"?t:""+t).replace($x,`
`).replace(ey,"")}function Kg(t,n){return n=Zg(n),Zg(t)===n}function Jl(){}function Lt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||xi(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&xi(t,""+o);break;case"className":Ce(t,"class",o);break;case"tabIndex":Ce(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ce(t,a,o);break;case"style":Jd(t,o,f);break;case"data":if(n!=="object"){Ce(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=sl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Lt(t,n,"name",u.name,u,null),Lt(t,n,"formEncType",u.formEncType,u,null),Lt(t,n,"formMethod",u.formMethod,u,null),Lt(t,n,"formTarget",u.formTarget,u,null)):(Lt(t,n,"encType",u.encType,u,null),Lt(t,n,"method",u.method,u,null),Lt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=sl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Jl);break;case"onScroll":o!=null&&mt("scroll",t);break;case"onScrollEnd":o!=null&&mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=sl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":mt("beforetoggle",t),mt("toggle",t),Te(t,"popover",o);break;case"xlinkActuate":De(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":De(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":De(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":De(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":De(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":De(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":De(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":De(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":De(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Te(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Dv.get(a)||a,Te(t,a,o))}}function Vf(t,n,a,o,u,f){switch(a){case"style":Jd(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?xi(t,o):(typeof o=="number"||typeof o=="bigint")&&xi(t,""+o);break;case"onScroll":o!=null&&mt("scroll",t);break;case"onScrollEnd":o!=null&&mt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Jl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rl.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Te(t,a,o)}}}function En(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mt("error",t),mt("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Lt(t,n,f,S,a,null)}}u&&Lt(t,n,"srcSet",a.srcSet,a,null),o&&Lt(t,n,"src",a.src,a,null);return;case"input":mt("invalid",t);var b=f=S=u=null,P=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var ue=a[o];if(ue!=null)switch(o){case"name":u=ue;break;case"type":S=ue;break;case"checked":P=ue;break;case"defaultChecked":$=ue;break;case"value":f=ue;break;case"defaultValue":b=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(s(137,n));break;default:Lt(t,n,o,ue,a,null)}}zt(t,f,b,P,$,S,u,!1),Yt(t);return;case"select":mt("invalid",t),o=S=f=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":f=b;break;case"defaultValue":S=b;break;case"multiple":o=b;default:Lt(t,n,u,b,a,null)}n=f,a=S,t.multiple=!!o,n!=null?ln(t,!!o,n,!1):a!=null&&ln(t,!!o,a,!0);return;case"textarea":mt("invalid",t),f=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(b=a[S],b!=null))switch(S){case"value":o=b;break;case"defaultValue":u=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Lt(t,n,S,b,a,null)}yn(t,o,u,f),Yt(t);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(o=a[P],o!=null))switch(P){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Lt(t,n,P,o,a,null)}return;case"dialog":mt("beforetoggle",t),mt("toggle",t),mt("cancel",t),mt("close",t);break;case"iframe":case"object":mt("load",t);break;case"video":case"audio":for(o=0;o<So.length;o++)mt(So[o],t);break;case"image":mt("error",t),mt("load",t);break;case"details":mt("toggle",t);break;case"embed":case"source":case"link":mt("error",t),mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Lt(t,n,$,o,a,null)}return;default:if(iu(n)){for(ue in a)a.hasOwnProperty(ue)&&(o=a[ue],o!==void 0&&Vf(t,n,ue,o,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(o=a[b],o!=null&&Lt(t,n,b,o,a,null))}function ty(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,S=null,b=null,P=null,$=null,ue=null;for(ie in a){var ve=a[ie];if(a.hasOwnProperty(ie)&&ve!=null)switch(ie){case"checked":break;case"value":break;case"defaultValue":P=ve;default:o.hasOwnProperty(ie)||Lt(t,n,ie,null,o,ve)}}for(var ne in o){var ie=o[ne];if(ve=a[ne],o.hasOwnProperty(ne)&&(ie!=null||ve!=null))switch(ne){case"type":f=ie;break;case"name":u=ie;break;case"checked":$=ie;break;case"defaultChecked":ue=ie;break;case"value":S=ie;break;case"defaultValue":b=ie;break;case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(s(137,n));break;default:ie!==ve&&Lt(t,n,ne,ie,o,ve)}}Ni(t,S,b,P,$,ue,f,u);return;case"select":ie=S=b=ne=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":ie=P;default:o.hasOwnProperty(f)||Lt(t,n,f,null,o,P)}for(u in o)if(f=o[u],P=a[u],o.hasOwnProperty(u)&&(f!=null||P!=null))switch(u){case"value":ne=f;break;case"defaultValue":b=f;break;case"multiple":S=f;default:f!==P&&Lt(t,n,u,f,o,P)}n=b,a=S,o=ie,ne!=null?ln(t,!!a,ne,!1):!!o!=!!a&&(n!=null?ln(t,!!a,n,!0):ln(t,!!a,a?[]:"",!1));return;case"textarea":ie=ne=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Lt(t,n,b,null,o,u)}for(S in o)if(u=o[S],f=a[S],o.hasOwnProperty(S)&&(u!=null||f!=null))switch(S){case"value":ne=u;break;case"defaultValue":ie=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Lt(t,n,S,u,o,f)}pn(t,ne,ie);return;case"option":for(var tt in a)if(ne=a[tt],a.hasOwnProperty(tt)&&ne!=null&&!o.hasOwnProperty(tt))switch(tt){case"selected":t.selected=!1;break;default:Lt(t,n,tt,null,o,ne)}for(P in o)if(ne=o[P],ie=a[P],o.hasOwnProperty(P)&&ne!==ie&&(ne!=null||ie!=null))switch(P){case"selected":t.selected=ne&&typeof ne!="function"&&typeof ne!="symbol";break;default:Lt(t,n,P,ne,o,ie)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ze in a)ne=a[Ze],a.hasOwnProperty(Ze)&&ne!=null&&!o.hasOwnProperty(Ze)&&Lt(t,n,Ze,null,o,ne);for($ in o)if(ne=o[$],ie=a[$],o.hasOwnProperty($)&&ne!==ie&&(ne!=null||ie!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(s(137,n));break;default:Lt(t,n,$,ne,o,ie)}return;default:if(iu(n)){for(var Nt in a)ne=a[Nt],a.hasOwnProperty(Nt)&&ne!==void 0&&!o.hasOwnProperty(Nt)&&Vf(t,n,Nt,void 0,o,ne);for(ue in o)ne=o[ue],ie=a[ue],!o.hasOwnProperty(ue)||ne===ie||ne===void 0&&ie===void 0||Vf(t,n,ue,ne,o,ie);return}}for(var W in a)ne=a[W],a.hasOwnProperty(W)&&ne!=null&&!o.hasOwnProperty(W)&&Lt(t,n,W,null,o,ne);for(ve in o)ne=o[ve],ie=a[ve],!o.hasOwnProperty(ve)||ne===ie||ne==null&&ie==null||Lt(t,n,ve,ne,o,ie)}var kf=null,Xf=null;function $l(t){return t.nodeType===9?t:t.ownerDocument}function Qg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Jg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Wf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var qf=null;function ny(){var t=window.event;return t&&t.type==="popstate"?t===qf?!1:(qf=t,!0):(qf=null,!1)}var $g=typeof setTimeout=="function"?setTimeout:void 0,iy=typeof clearTimeout=="function"?clearTimeout:void 0,e0=typeof Promise=="function"?Promise:void 0,ay=typeof queueMicrotask=="function"?queueMicrotask:typeof e0<"u"?function(t){return e0.resolve(null).then(t).catch(ry)}:$g;function ry(t){setTimeout(function(){throw t})}function Ua(t){return t==="head"}function t0(t,n){var a=n,o=0,u=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var S=t.ownerDocument;if(a&1&&Eo(S.documentElement),a&2&&Eo(S.body),a&4)for(a=S.head,Eo(a),S=a.firstChild;S;){var b=S.nextSibling,P=S.nodeName;S[fa]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=b}}if(u===0){t.removeChild(f),Uo(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);Uo(n)}function jf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":jf(a),ha(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function sy(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[fa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ui(t.nextSibling),t===null)break}return null}function oy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ui(t.nextSibling),t===null))return null;return t}function Yf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function ly(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function ui(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Zf=null;function n0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function i0(t,n,a){switch(n=$l(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Eo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ha(t)}var ai=new Map,a0=new Set;function ec(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Yi=K.d;K.d={f:cy,r:uy,D:fy,C:hy,L:dy,m:py,X:gy,S:my,M:_y};function cy(){var t=Yi.f(),n=Wl();return t||n}function uy(t){var n=Ui(t);n!==null&&n.tag===5&&n.type==="form"?bm(n):Yi.r(t)}var os=typeof document>"u"?null:document;function r0(t,n,a){var o=os;if(o&&typeof n=="string"&&n){var u=Vt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),a0.has(u)||(a0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),En(n,"link",t),tn(n),o.head.appendChild(n)))}}function fy(t){Yi.D(t),r0("dns-prefetch",t,null)}function hy(t,n){Yi.C(t,n),r0("preconnect",t,n)}function dy(t,n,a){Yi.L(t,n,a);var o=os;if(o&&t&&n){var u='link[rel="preload"][as="'+Vt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Vt(a.imageSizes)+'"]')):u+='[href="'+Vt(t)+'"]';var f=u;switch(n){case"style":f=ls(t);break;case"script":f=cs(t)}ai.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ai.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(bo(f))||n==="script"&&o.querySelector(To(f))||(n=o.createElement("link"),En(n,"link",t),tn(n),o.head.appendChild(n)))}}function py(t,n){Yi.m(t,n);var a=os;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Vt(o)+'"][href="'+Vt(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=cs(t)}if(!ai.has(f)&&(t=g({rel:"modulepreload",href:t},n),ai.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(To(f)))return}o=a.createElement("link"),En(o,"link",t),tn(o),a.head.appendChild(o)}}}function my(t,n,a){Yi.S(t,n,a);var o=os;if(o&&t){var u=da(o).hoistableStyles,f=ls(t);n=n||"default";var S=u.get(f);if(!S){var b={loading:0,preload:null};if(S=o.querySelector(bo(f)))b.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ai.get(f))&&Kf(t,a);var P=S=o.createElement("link");tn(P),En(P,"link",t),P._p=new Promise(function($,ue){P.onload=$,P.onerror=ue}),P.addEventListener("load",function(){b.loading|=1}),P.addEventListener("error",function(){b.loading|=2}),b.loading|=4,tc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:b},u.set(f,S)}}}function gy(t,n){Yi.X(t,n);var a=os;if(a&&t){var o=da(a).hoistableScripts,u=cs(t),f=o.get(u);f||(f=a.querySelector(To(u)),f||(t=g({src:t,async:!0},n),(n=ai.get(u))&&Qf(t,n),f=a.createElement("script"),tn(f),En(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function _y(t,n){Yi.M(t,n);var a=os;if(a&&t){var o=da(a).hoistableScripts,u=cs(t),f=o.get(u);f||(f=a.querySelector(To(u)),f||(t=g({src:t,async:!0,type:"module"},n),(n=ai.get(u))&&Qf(t,n),f=a.createElement("script"),tn(f),En(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function s0(t,n,a,o){var u=(u=Se.current)?ec(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ls(a.href),a=da(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ls(a.href);var f=da(u).hoistableStyles,S=f.get(t);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,S),(f=u.querySelector(bo(t)))&&!f._p&&(S.instance=f,S.state.loading=5),ai.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ai.set(t,a),f||vy(u,t,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=cs(a),a=da(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function ls(t){return'href="'+Vt(t)+'"'}function bo(t){return'link[rel="stylesheet"]['+t+"]"}function o0(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function vy(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),En(n,"link",a),tn(n),t.head.appendChild(n))}function cs(t){return'[src="'+Vt(t)+'"]'}function To(t){return"script[async]"+t}function l0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Vt(a.href)+'"]');if(o)return n.instance=o,tn(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),tn(o),En(o,"style",u),tc(o,a.precedence,t),n.instance=o;case"stylesheet":u=ls(a.href);var f=t.querySelector(bo(u));if(f)return n.state.loading|=4,n.instance=f,tn(f),f;o=o0(a),(u=ai.get(u))&&Kf(o,u),f=(t.ownerDocument||t).createElement("link"),tn(f);var S=f;return S._p=new Promise(function(b,P){S.onload=b,S.onerror=P}),En(f,"link",o),n.state.loading|=4,tc(f,a.precedence,t),n.instance=f;case"script":return f=cs(a.src),(u=t.querySelector(To(f)))?(n.instance=u,tn(u),u):(o=a,(u=ai.get(f))&&(o=g({},a),Qf(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),tn(u),En(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,tc(o,a.precedence,t));return n.instance}function tc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,S=0;S<o.length;S++){var b=o[S];if(b.dataset.precedence===n)f=b;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Kf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Qf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var nc=null;function c0(t,n,a){if(nc===null){var o=new Map,u=nc=new Map;u.set(a,o)}else u=nc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[fa]||f[on]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=t+S;var b=o.get(S);b?b.push(f):o.set(S,[f])}}return o}function u0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function xy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function f0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Ao=null;function yy(){}function Sy(t,n,a){if(Ao===null)throw Error(s(475));var o=Ao;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=ls(a.href),f=t.querySelector(bo(u));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=ic.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=f,tn(f);return}f=t.ownerDocument||t,a=o0(a),(u=ai.get(u))&&Kf(a,u),f=f.createElement("link"),tn(f);var S=f;S._p=new Promise(function(b,P){S.onload=b,S.onerror=P}),En(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=ic.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function My(){if(Ao===null)throw Error(s(475));var t=Ao;return t.stylesheets&&t.count===0&&Jf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Jf(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function ic(){if(this.count--,this.count===0){if(this.stylesheets)Jf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ac=null;function Jf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ac=new Map,n.forEach(Ey,t),ac=null,ic.call(t))}function Ey(t,n){if(!(n.state.loading&4)){var a=ac.get(t);if(a)var o=a.get(null);else{a=new Map,ac.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var S=u[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),f=a.get(S)||o,f===o&&a.set(null,u),a.set(S,u),this.count++,o=ic.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Ro={$$typeof:U,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function by(t,n,a,o,u,f,S,b){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=le(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=le(0),this.hiddenUpdates=le(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function h0(t,n,a,o,u,f,S,b,P,$,ue,ve){return t=new by(t,n,a,S,b,P,$,ve),n=1,f===!0&&(n|=24),f=kn(3,null,null,n),t.current=f,f.stateNode=t,n=Lu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Bu(f),t}function d0(t){return t?(t=Hr,t):Hr}function p0(t,n,a,o,u,f){u=d0(u),o.context===null?o.context=u:o.pendingContext=u,o=va(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=xa(t,o,n),a!==null&&(Yn(a,t,n),no(a,t,n))}function m0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function $f(t,n){m0(t,n),(t=t.alternate)&&m0(t,n)}function g0(t){if(t.tag===13){var n=Fr(t,67108864);n!==null&&Yn(n,t,67108864),$f(t,67108864)}}var rc=!0;function Ty(t,n,a,o){var u=B.T;B.T=null;var f=K.p;try{K.p=2,eh(t,n,a,o)}finally{K.p=f,B.T=u}}function Ay(t,n,a,o){var u=B.T;B.T=null;var f=K.p;try{K.p=8,eh(t,n,a,o)}finally{K.p=f,B.T=u}}function eh(t,n,a,o){if(rc){var u=th(o);if(u===null)Gf(t,n,o,sc,a),v0(t,o);else if(wy(u,t,n,a,o))o.stopPropagation();else if(v0(t,o),n&4&&-1<Ry.indexOf(t)){for(;u!==null;){var f=Ui(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Be(f.pendingLanes);if(S!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;S;){var P=1<<31-Ge(S);b.entanglements[1]|=P,S&=~P}bi(f),(Rt&6)===0&&(kl=it()+500,yo(0))}}break;case 13:b=Fr(f,2),b!==null&&Yn(b,f,2),Wl(),$f(f,2)}if(f=th(o),f===null&&Gf(t,n,o,sc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Gf(t,n,o,null,a)}}function th(t){return t=ru(t),nh(t)}var sc=null;function nh(t){if(sc=null,t=Di(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return sc=t,null}function _0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(We()){case Ct:return 2;case Ve:return 8;case L:case T:return 32;case te:return 268435456;default:return 32}default:return 32}}var ih=!1,La=null,Na=null,Oa=null,wo=new Map,Co=new Map,Pa=[],Ry="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function v0(t,n){switch(t){case"focusin":case"focusout":La=null;break;case"dragenter":case"dragleave":Na=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":wo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(n.pointerId)}}function Do(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ui(n),n!==null&&g0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function wy(t,n,a,o,u){switch(n){case"focusin":return La=Do(La,t,n,a,o,u),!0;case"dragenter":return Na=Do(Na,t,n,a,o,u),!0;case"mouseover":return Oa=Do(Oa,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return wo.set(f,Do(wo.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Co.set(f,Do(Co.get(f)||null,t,n,a,o,u)),!0}return!1}function x0(t){var n=Di(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Gn(t.priority,function(){if(a.tag===13){var o=jn();o=Gt(o);var u=Fr(a,o);u!==null&&Yn(u,a,o),$f(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function oc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=th(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);au=o,a.target.dispatchEvent(o),au=null}else return n=Ui(a),n!==null&&g0(n),t.blockedOn=a,!1;n.shift()}return!0}function y0(t,n,a){oc(t)&&a.delete(n)}function Cy(){ih=!1,La!==null&&oc(La)&&(La=null),Na!==null&&oc(Na)&&(Na=null),Oa!==null&&oc(Oa)&&(Oa=null),wo.forEach(y0),Co.forEach(y0)}function lc(t,n){t.blockedOn===n&&(t.blockedOn=null,ih||(ih=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Cy)))}var cc=null;function S0(t){cc!==t&&(cc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){cc===t&&(cc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(nh(o||a)===null)continue;break}var f=Ui(a);f!==null&&(t.splice(n,3),n-=3,tf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Uo(t){function n(P){return lc(P,t)}La!==null&&lc(La,t),Na!==null&&lc(Na,t),Oa!==null&&lc(Oa,t),wo.forEach(n),Co.forEach(n);for(var a=0;a<Pa.length;a++){var o=Pa[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Pa.length&&(a=Pa[0],a.blockedOn===null);)x0(a),a.blockedOn===null&&Pa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],S=u[xn]||null;if(typeof f=="function")S||S0(a);else if(S){var b=null;if(f&&f.hasAttribute("formAction")){if(u=f,S=f[xn]||null)b=S.formAction;else if(nh(u)!==null)continue}else b=S.action;typeof b=="function"?a[o+1]=b:(a.splice(o,3),o-=3),S0(a)}}}function ah(t){this._internalRoot=t}uc.prototype.render=ah.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=jn();p0(a,o,t,n,null,null)},uc.prototype.unmount=ah.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;p0(t.current,2,null,t,null,null),Wl(),n[Nn]=null}};function uc(t){this._internalRoot=t}uc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Mt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Pa.length&&n!==0&&n<Pa[a].priority;a++);Pa.splice(a,0,t),a===0&&x0(t)}};var M0=e.version;if(M0!=="19.1.0")throw Error(s(527,M0,"19.1.0"));K.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var Dy={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fc.isDisabled&&fc.supportsFiber)try{fe=fc.inject(Dy),Pe=fc}catch{}}return No.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=Im,f=Fm,S=Hm,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=h0(t,1,!1,null,null,a,o,u,f,S,b,null),t[Nn]=n.current,Hf(t),new ah(n)},No.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",f=Im,S=Fm,b=Hm,P=null,$=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&($=a.formState)),n=h0(t,1,!0,n,a??null,o,u,f,S,b,P,$),n.context=d0(null),a=n.current,o=jn(),o=Gt(o),u=va(o),u.callback=null,xa(a,u,o),a=o,n.current.lanes=a,_e(n,a),bi(n),t[Nn]=n.current,Hf(t),new uc(n)},No.version="19.1.0",No}var L0;function Hy(){if(L0)return oh.exports;L0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),oh.exports=Fy(),oh.exports}var Gy=Hy(),Oo={},N0;function Vy(){if(N0)return Oo;N0=1,Object.defineProperty(Oo,"__esModule",{value:!0}),Oo.parse=h,Oo.serialize=m;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,c=(()=>{const v=function(){};return v.prototype=Object.create(null),v})();function h(v,M){const E=new c,A=v.length;if(A<2)return E;const y=(M==null?void 0:M.decode)||g;let _=0;do{const O=v.indexOf("=",_);if(O===-1)break;const U=v.indexOf(";",_),C=U===-1?A:U;if(O>C){_=v.lastIndexOf(";",O-1)+1;continue}const H=d(v,_,O),k=p(v,O,H),I=v.slice(H,k);if(E[I]===void 0){let q=d(v,O+1,C),D=p(v,C,q);const w=y(v.slice(q,D));E[I]=w}_=C+1}while(_<A);return E}function d(v,M,E){do{const A=v.charCodeAt(M);if(A!==32&&A!==9)return M}while(++M<E);return E}function p(v,M,E){for(;M>E;){const A=v.charCodeAt(--M);if(A!==32&&A!==9)return M+1}return E}function m(v,M,E){const A=(E==null?void 0:E.encode)||encodeURIComponent;if(!r.test(v))throw new TypeError(`argument name is invalid: ${v}`);const y=A(M);if(!e.test(y))throw new TypeError(`argument val is invalid: ${M}`);let _=v+"="+y;if(!E)return _;if(E.maxAge!==void 0){if(!Number.isInteger(E.maxAge))throw new TypeError(`option maxAge is invalid: ${E.maxAge}`);_+="; Max-Age="+E.maxAge}if(E.domain){if(!i.test(E.domain))throw new TypeError(`option domain is invalid: ${E.domain}`);_+="; Domain="+E.domain}if(E.path){if(!s.test(E.path))throw new TypeError(`option path is invalid: ${E.path}`);_+="; Path="+E.path}if(E.expires){if(!x(E.expires)||!Number.isFinite(E.expires.valueOf()))throw new TypeError(`option expires is invalid: ${E.expires}`);_+="; Expires="+E.expires.toUTCString()}if(E.httpOnly&&(_+="; HttpOnly"),E.secure&&(_+="; Secure"),E.partitioned&&(_+="; Partitioned"),E.priority)switch(typeof E.priority=="string"?E.priority.toLowerCase():void 0){case"low":_+="; Priority=Low";break;case"medium":_+="; Priority=Medium";break;case"high":_+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${E.priority}`)}if(E.sameSite)switch(typeof E.sameSite=="string"?E.sameSite.toLowerCase():E.sameSite){case!0:case"strict":_+="; SameSite=Strict";break;case"lax":_+="; SameSite=Lax";break;case"none":_+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${E.sameSite}`)}return _}function g(v){if(v.indexOf("%")===-1)return v;try{return decodeURIComponent(v)}catch{return v}}function x(v){return l.call(v)==="[object Date]"}return Oo}Vy();var O0="popstate";function ky(r={}){function e(l,c){let{pathname:h="/",search:d="",hash:p=""}=Dr(l.location.hash.substring(1));return!h.startsWith("/")&&!h.startsWith(".")&&(h="/"+h),kh("",{pathname:h,search:d,hash:p},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(l,c){let h=l.document.querySelector("base"),d="";if(h&&h.getAttribute("href")){let p=l.location.href,m=p.indexOf("#");d=m===-1?p:p.slice(0,m)}return d+"#"+(typeof c=="string"?c:Xo(c))}function s(l,c){vi(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return Wy(e,i,s,r)}function jt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function vi(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Xy(){return Math.random().toString(36).substring(2,10)}function P0(r,e){return{usr:r.state,key:r.key,idx:e}}function kh(r,e,i=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Dr(e):e,state:i,key:e&&e.key||s||Xy()}}function Xo({pathname:r="/",search:e="",hash:i=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function Dr(r){let e={};if(r){let i=r.indexOf("#");i>=0&&(e.hash=r.substring(i),r=r.substring(0,i));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function Wy(r,e,i,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,h=l.history,d="POP",p=null,m=g();m==null&&(m=0,h.replaceState({...h.state,idx:m},""));function g(){return(h.state||{idx:null}).idx}function x(){d="POP";let y=g(),_=y==null?null:y-m;m=y,p&&p({action:d,location:A.location,delta:_})}function v(y,_){d="PUSH";let O=kh(A.location,y,_);i&&i(O,y),m=g()+1;let U=P0(O,m),C=A.createHref(O);try{h.pushState(U,"",C)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;l.location.assign(C)}c&&p&&p({action:d,location:A.location,delta:1})}function M(y,_){d="REPLACE";let O=kh(A.location,y,_);i&&i(O,y),m=g();let U=P0(O,m),C=A.createHref(O);h.replaceState(U,"",C),c&&p&&p({action:d,location:A.location,delta:0})}function E(y){let _=l.location.origin!=="null"?l.location.origin:l.location.href,O=typeof y=="string"?y:Xo(y);return O=O.replace(/ $/,"%20"),jt(_,`No window.location.(origin|href) available to create URL for href: ${O}`),new URL(O,_)}let A={get action(){return d},get location(){return r(l,h)},listen(y){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(O0,x),p=y,()=>{l.removeEventListener(O0,x),p=null}},createHref(y){return e(l,y)},createURL:E,encodeLocation(y){let _=E(y);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:v,replace:M,go(y){return h.go(y)}};return A}function B_(r,e,i="/"){return qy(r,e,i,!1)}function qy(r,e,i,s){let l=typeof e=="string"?Dr(e):e,c=oa(l.pathname||"/",i);if(c==null)return null;let h=z_(r);jy(h);let d=null;for(let p=0;d==null&&p<h.length;++p){let m=aS(c);d=nS(h[p],m,s)}return d}function z_(r,e=[],i=[],s=""){let l=(c,h,d)=>{let p={relativePath:d===void 0?c.path||"":d,caseSensitive:c.caseSensitive===!0,childrenIndex:h,route:c};p.relativePath.startsWith("/")&&(jt(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let m=aa([s,p.relativePath]),g=i.concat(p);c.children&&c.children.length>0&&(jt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),z_(c.children,e,g,m)),!(c.path==null&&!c.index)&&e.push({path:m,score:eS(m,c.index),routesMeta:g})};return r.forEach((c,h)=>{var d;if(c.path===""||!((d=c.path)!=null&&d.includes("?")))l(c,h);else for(let p of I_(c.path))l(c,h,p)}),e}function I_(r){let e=r.split("/");if(e.length===0)return[];let[i,...s]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let h=I_(s.join("/")),d=[];return d.push(...h.map(p=>p===""?c:[c,p].join("/"))),l&&d.push(...h),d.map(p=>r.startsWith("/")&&p===""?"/":p)}function jy(r){r.sort((e,i)=>e.score!==i.score?i.score-e.score:tS(e.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var Yy=/^:[\w-]+$/,Zy=3,Ky=2,Qy=1,Jy=10,$y=-2,B0=r=>r==="*";function eS(r,e){let i=r.split("/"),s=i.length;return i.some(B0)&&(s+=$y),e&&(s+=Ky),i.filter(l=>!B0(l)).reduce((l,c)=>l+(Yy.test(c)?Zy:c===""?Qy:Jy),s)}function tS(r,e){return r.length===e.length&&r.slice(0,-1).every((s,l)=>s===e[l])?r[r.length-1]-e[e.length-1]:0}function nS(r,e,i=!1){let{routesMeta:s}=r,l={},c="/",h=[];for(let d=0;d<s.length;++d){let p=s[d],m=d===s.length-1,g=c==="/"?e:e.slice(c.length)||"/",x=qc({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),v=p.route;if(!x&&m&&i&&!s[s.length-1].route.index&&(x=qc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!x)return null;Object.assign(l,x.params),h.push({params:l,pathname:aa([c,x.pathname]),pathnameBase:lS(aa([c,x.pathnameBase])),route:v}),x.pathnameBase!=="/"&&(c=aa([c,x.pathnameBase]))}return h}function qc(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=iS(r.path,r.caseSensitive,r.end),l=e.match(i);if(!l)return null;let c=l[0],h=c.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:s.reduce((m,{paramName:g,isOptional:x},v)=>{if(g==="*"){let E=d[v]||"";h=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const M=d[v];return x&&!M?m[g]=void 0:m[g]=(M||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:h,pattern:r}}function iS(r,e=!1,i=!0){vi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,d,p)=>(s.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function aS(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return vi(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function oa(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}function rS(r,e="/"){let{pathname:i,search:s="",hash:l=""}=typeof r=="string"?Dr(r):r;return{pathname:i?i.startsWith("/")?i:sS(i,e):e,search:cS(s),hash:uS(l)}}function sS(r,e){let i=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function fh(r,e,i,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function oS(r){return r.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function F_(r){let e=oS(r);return e.map((i,s)=>s===e.length-1?i.pathname:i.pathnameBase)}function H_(r,e,i,s=!1){let l;typeof r=="string"?l=Dr(r):(l={...r},jt(!l.pathname||!l.pathname.includes("?"),fh("?","pathname","search",l)),jt(!l.pathname||!l.pathname.includes("#"),fh("#","pathname","hash",l)),jt(!l.search||!l.search.includes("#"),fh("#","search","hash",l)));let c=r===""||l.pathname==="",h=c?"/":l.pathname,d;if(h==null)d=i;else{let x=e.length-1;if(!s&&h.startsWith("..")){let v=h.split("/");for(;v[0]==="..";)v.shift(),x-=1;l.pathname=v.join("/")}d=x>=0?e[x]:"/"}let p=rS(l,d),m=h&&h!=="/"&&h.endsWith("/"),g=(c||h===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}var aa=r=>r.join("/").replace(/\/\/+/g,"/"),lS=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),cS=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,uS=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function fS(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var G_=["POST","PUT","PATCH","DELETE"];new Set(G_);var hS=["GET",...G_];new Set(hS);var Ps=pe.createContext(null);Ps.displayName="DataRouter";var Qc=pe.createContext(null);Qc.displayName="DataRouterState";var V_=pe.createContext({isTransitioning:!1});V_.displayName="ViewTransition";var dS=pe.createContext(new Map);dS.displayName="Fetchers";var pS=pe.createContext(null);pS.displayName="Await";var Ci=pe.createContext(null);Ci.displayName="Navigation";var Zo=pe.createContext(null);Zo.displayName="Location";var ua=pe.createContext({outlet:null,matches:[],isDataRoute:!1});ua.displayName="Route";var Pd=pe.createContext(null);Pd.displayName="RouteError";function mS(r,{relative:e}={}){jt(Ko(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=pe.useContext(Ci),{hash:l,pathname:c,search:h}=Qo(r,{relative:e}),d=c;return i!=="/"&&(d=c==="/"?i:aa([i,c])),s.createHref({pathname:d,search:h,hash:l})}function Ko(){return pe.useContext(Zo)!=null}function Za(){return jt(Ko(),"useLocation() may be used only in the context of a <Router> component."),pe.useContext(Zo).location}var k_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function X_(r){pe.useContext(Ci).static||pe.useLayoutEffect(r)}function gS(){let{isDataRoute:r}=pe.useContext(ua);return r?CS():_S()}function _S(){jt(Ko(),"useNavigate() may be used only in the context of a <Router> component.");let r=pe.useContext(Ps),{basename:e,navigator:i}=pe.useContext(Ci),{matches:s}=pe.useContext(ua),{pathname:l}=Za(),c=JSON.stringify(F_(s)),h=pe.useRef(!1);return X_(()=>{h.current=!0}),pe.useCallback((p,m={})=>{if(vi(h.current,k_),!h.current)return;if(typeof p=="number"){i.go(p);return}let g=H_(p,JSON.parse(c),l,m.relative==="path");r==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:aa([e,g.pathname])),(m.replace?i.replace:i.push)(g,m.state,m)},[e,i,c,l,r])}pe.createContext(null);function Qo(r,{relative:e}={}){let{matches:i}=pe.useContext(ua),{pathname:s}=Za(),l=JSON.stringify(F_(i));return pe.useMemo(()=>H_(r,JSON.parse(l),s,e==="path"),[r,l,s,e])}function vS(r,e){return W_(r,e)}function W_(r,e,i,s){var O;jt(Ko(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:c}=pe.useContext(Ci),{matches:h}=pe.useContext(ua),d=h[h.length-1],p=d?d.params:{},m=d?d.pathname:"/",g=d?d.pathnameBase:"/",x=d&&d.route;{let U=x&&x.path||"";q_(m,!x||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let v=Za(),M;if(e){let U=typeof e=="string"?Dr(e):e;jt(g==="/"||((O=U.pathname)==null?void 0:O.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${U.pathname}" was given in the \`location\` prop.`),M=U}else M=v;let E=M.pathname||"/",A=E;if(g!=="/"){let U=g.replace(/^\//,"").split("/");A="/"+E.replace(/^\//,"").split("/").slice(U.length).join("/")}let y=!c&&i&&i.matches&&i.matches.length>0?i.matches:B_(r,{pathname:A});vi(x||y!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),vi(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=ES(y&&y.map(U=>Object.assign({},U,{params:Object.assign({},p,U.params),pathname:aa([g,l.encodeLocation?l.encodeLocation(U.pathname).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?g:aa([g,l.encodeLocation?l.encodeLocation(U.pathnameBase).pathname:U.pathnameBase])})),h,i,s);return e&&_?pe.createElement(Zo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},_):_}function xS(){let r=wS(),e=fS(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},h=null;return console.error("Error handled by React Router default ErrorBoundary:",r),h=pe.createElement(pe.Fragment,null,pe.createElement("p",null,"💿 Hey developer 👋"),pe.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",pe.createElement("code",{style:c},"ErrorBoundary")," or"," ",pe.createElement("code",{style:c},"errorElement")," prop on your route.")),pe.createElement(pe.Fragment,null,pe.createElement("h2",null,"Unexpected Application Error!"),pe.createElement("h3",{style:{fontStyle:"italic"}},e),i?pe.createElement("pre",{style:l},i):null,h)}var yS=pe.createElement(xS,null),SS=class extends pe.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?pe.createElement(ua.Provider,{value:this.props.routeContext},pe.createElement(Pd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function MS({routeContext:r,match:e,children:i}){let s=pe.useContext(Ps);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),pe.createElement(ua.Provider,{value:r},i)}function ES(r,e=[],i=null,s=null){if(r==null){if(!i)return null;if(i.errors)r=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let l=r,c=i==null?void 0:i.errors;if(c!=null){let p=l.findIndex(m=>m.route.id&&(c==null?void 0:c[m.route.id])!==void 0);jt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,p+1))}let h=!1,d=-1;if(i)for(let p=0;p<l.length;p++){let m=l[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=p),m.route.id){let{loaderData:g,errors:x}=i,v=m.route.loader&&!g.hasOwnProperty(m.route.id)&&(!x||x[m.route.id]===void 0);if(m.route.lazy||v){h=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((p,m,g)=>{let x,v=!1,M=null,E=null;i&&(x=c&&m.route.id?c[m.route.id]:void 0,M=m.route.errorElement||yS,h&&(d<0&&g===0?(q_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,E=null):d===g&&(v=!0,E=m.route.hydrateFallbackElement||null)));let A=e.concat(l.slice(0,g+1)),y=()=>{let _;return x?_=M:v?_=E:m.route.Component?_=pe.createElement(m.route.Component,null):m.route.element?_=m.route.element:_=p,pe.createElement(MS,{match:m,routeContext:{outlet:p,matches:A,isDataRoute:i!=null},children:_})};return i&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?pe.createElement(SS,{location:i.location,revalidation:i.revalidation,component:M,error:x,children:y(),routeContext:{outlet:null,matches:A,isDataRoute:!0}}):y()},null)}function Bd(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function bS(r){let e=pe.useContext(Ps);return jt(e,Bd(r)),e}function TS(r){let e=pe.useContext(Qc);return jt(e,Bd(r)),e}function AS(r){let e=pe.useContext(ua);return jt(e,Bd(r)),e}function zd(r){let e=AS(r),i=e.matches[e.matches.length-1];return jt(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function RS(){return zd("useRouteId")}function wS(){var s;let r=pe.useContext(Pd),e=TS("useRouteError"),i=zd("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[i]}function CS(){let{router:r}=bS("useNavigate"),e=zd("useNavigate"),i=pe.useRef(!1);return X_(()=>{i.current=!0}),pe.useCallback(async(l,c={})=>{vi(i.current,k_),i.current&&(typeof l=="number"?r.navigate(l):await r.navigate(l,{fromRouteId:e,...c}))},[r,e])}var z0={};function q_(r,e,i){!e&&!z0[r]&&(z0[r]=!0,vi(!1,i))}pe.memo(DS);function DS({routes:r,future:e,state:i}){return W_(r,void 0,i,e)}function Ts(r){jt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function US({basename:r="/",children:e=null,location:i,navigationType:s="POP",navigator:l,static:c=!1}){jt(!Ko(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=r.replace(/^\/*/,"/"),d=pe.useMemo(()=>({basename:h,navigator:l,static:c,future:{}}),[h,l,c]);typeof i=="string"&&(i=Dr(i));let{pathname:p="/",search:m="",hash:g="",state:x=null,key:v="default"}=i,M=pe.useMemo(()=>{let E=oa(p,h);return E==null?null:{location:{pathname:E,search:m,hash:g,state:x,key:v},navigationType:s}},[h,p,m,g,x,v,s]);return vi(M!=null,`<Router basename="${h}"> is not able to match the URL "${p}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:pe.createElement(Ci.Provider,{value:d},pe.createElement(Zo.Provider,{children:e,value:M}))}function LS({children:r,location:e}){return vS(Xh(r),e)}function Xh(r,e=[]){let i=[];return pe.Children.forEach(r,(s,l)=>{if(!pe.isValidElement(s))return;let c=[...e,l];if(s.type===pe.Fragment){i.push.apply(i,Xh(s.props.children,c));return}jt(s.type===Ts,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),jt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let h={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=Xh(s.props.children,c)),i.push(h)}),i}var Bc="get",zc="application/x-www-form-urlencoded";function Jc(r){return r!=null&&typeof r.tagName=="string"}function NS(r){return Jc(r)&&r.tagName.toLowerCase()==="button"}function OS(r){return Jc(r)&&r.tagName.toLowerCase()==="form"}function PS(r){return Jc(r)&&r.tagName.toLowerCase()==="input"}function BS(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function zS(r,e){return r.button===0&&(!e||e==="_self")&&!BS(r)}var hc=null;function IS(){if(hc===null)try{new FormData(document.createElement("form"),0),hc=!1}catch{hc=!0}return hc}var FS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function hh(r){return r!=null&&!FS.has(r)?(vi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${zc}"`),null):r}function HS(r,e){let i,s,l,c,h;if(OS(r)){let d=r.getAttribute("action");s=d?oa(d,e):null,i=r.getAttribute("method")||Bc,l=hh(r.getAttribute("enctype"))||zc,c=new FormData(r)}else if(NS(r)||PS(r)&&(r.type==="submit"||r.type==="image")){let d=r.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||d.getAttribute("action");if(s=p?oa(p,e):null,i=r.getAttribute("formmethod")||d.getAttribute("method")||Bc,l=hh(r.getAttribute("formenctype"))||hh(d.getAttribute("enctype"))||zc,c=new FormData(d,r),!IS()){let{name:m,type:g,value:x}=r;if(g==="image"){let v=m?`${m}.`:"";c.append(`${v}x`,"0"),c.append(`${v}y`,"0")}else m&&c.append(m,x)}}else{if(Jc(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Bc,s=null,l=zc,h=r}return c&&l==="text/plain"&&(h=c,c=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:c,body:h}}function Id(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}async function GS(r,e){if(r.id in e)return e[r.id];try{let i=await import(r.module);return e[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function VS(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function kS(r,e,i){let s=await Promise.all(r.map(async l=>{let c=e.routes[l.route.id];if(c){let h=await GS(c,i);return h.links?h.links():[]}return[]}));return jS(s.flat(1).filter(VS).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function I0(r,e,i,s,l,c){let h=(p,m)=>i[m]?p.route.id!==i[m].route.id:!0,d=(p,m)=>{var g;return i[m].pathname!==p.pathname||((g=i[m].route.path)==null?void 0:g.endsWith("*"))&&i[m].params["*"]!==p.params["*"]};return c==="assets"?e.filter((p,m)=>h(p,m)||d(p,m)):c==="data"?e.filter((p,m)=>{var x;let g=s.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(h(p,m)||d(p,m))return!0;if(p.route.shouldRevalidate){let v=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((x=i[0])==null?void 0:x.params)||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function XS(r,e,{includeHydrateFallback:i}={}){return WS(r.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function WS(r){return[...new Set(r)]}function qS(r){let e={},i=Object.keys(r).sort();for(let s of i)e[s]=r[s];return e}function jS(r,e){let i=new Set;return new Set(e),r.reduce((s,l)=>{let c=JSON.stringify(qS(l));return i.has(c)||(i.add(c),s.push({key:c,link:l})),s},[])}var YS=new Set([100,101,204,205]);function ZS(r,e){let i=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i.pathname==="/"?i.pathname="_root.data":e&&oa(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.data`:i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function j_(){let r=pe.useContext(Ps);return Id(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function KS(){let r=pe.useContext(Qc);return Id(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Fd=pe.createContext(void 0);Fd.displayName="FrameworkContext";function Y_(){let r=pe.useContext(Fd);return Id(r,"You must render this element inside a <HydratedRouter> element"),r}function QS(r,e){let i=pe.useContext(Fd),[s,l]=pe.useState(!1),[c,h]=pe.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:m,onMouseLeave:g,onTouchStart:x}=e,v=pe.useRef(null);pe.useEffect(()=>{if(r==="render"&&h(!0),r==="viewport"){let A=_=>{_.forEach(O=>{h(O.isIntersecting)})},y=new IntersectionObserver(A,{threshold:.5});return v.current&&y.observe(v.current),()=>{y.disconnect()}}},[r]),pe.useEffect(()=>{if(s){let A=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(A)}}},[s]);let M=()=>{l(!0)},E=()=>{l(!1),h(!1)};return i?r!=="intent"?[c,v,{}]:[c,v,{onFocus:Po(d,M),onBlur:Po(p,E),onMouseEnter:Po(m,M),onMouseLeave:Po(g,E),onTouchStart:Po(x,M)}]:[!1,v,{}]}function Po(r,e){return i=>{r&&r(i),i.defaultPrevented||e(i)}}function JS({page:r,...e}){let{router:i}=j_(),s=pe.useMemo(()=>B_(i.routes,r,i.basename),[i.routes,r,i.basename]);return s?pe.createElement(e1,{page:r,matches:s,...e}):null}function $S(r){let{manifest:e,routeModules:i}=Y_(),[s,l]=pe.useState([]);return pe.useEffect(()=>{let c=!1;return kS(r,e,i).then(h=>{c||l(h)}),()=>{c=!0}},[r,e,i]),s}function e1({page:r,matches:e,...i}){let s=Za(),{manifest:l,routeModules:c}=Y_(),{basename:h}=j_(),{loaderData:d,matches:p}=KS(),m=pe.useMemo(()=>I0(r,e,p,l,s,"data"),[r,e,p,l,s]),g=pe.useMemo(()=>I0(r,e,p,l,s,"assets"),[r,e,p,l,s]),x=pe.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let E=new Set,A=!1;if(e.forEach(_=>{var U;let O=l.routes[_.route.id];!O||!O.hasLoader||(!m.some(C=>C.route.id===_.route.id)&&_.route.id in d&&((U=c[_.route.id])!=null&&U.shouldRevalidate)||O.hasClientLoader?A=!0:E.add(_.route.id))}),E.size===0)return[];let y=ZS(r,h);return A&&E.size>0&&y.searchParams.set("_routes",e.filter(_=>E.has(_.route.id)).map(_=>_.route.id).join(",")),[y.pathname+y.search]},[h,d,s,l,m,e,r,c]),v=pe.useMemo(()=>XS(g,l),[g,l]),M=$S(g);return pe.createElement(pe.Fragment,null,x.map(E=>pe.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),v.map(E=>pe.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),M.map(({key:E,link:A})=>pe.createElement("link",{key:E,...A})))}function t1(...r){return e=>{r.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var Z_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Z_&&(window.__reactRouterVersion="7.5.3")}catch{}function n1({basename:r,children:e,window:i}){let s=pe.useRef();s.current==null&&(s.current=ky({window:i,v5Compat:!0}));let l=s.current,[c,h]=pe.useState({action:l.action,location:l.location}),d=pe.useCallback(p=>{pe.startTransition(()=>h(p))},[h]);return pe.useLayoutEffect(()=>l.listen(d),[l,d]),pe.createElement(US,{basename:r,children:e,location:c.location,navigationType:c.action,navigator:l})}var K_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ur=pe.forwardRef(function({onClick:e,discover:i="render",prefetch:s="none",relative:l,reloadDocument:c,replace:h,state:d,target:p,to:m,preventScrollReset:g,viewTransition:x,...v},M){let{basename:E}=pe.useContext(Ci),A=typeof m=="string"&&K_.test(m),y,_=!1;if(typeof m=="string"&&A&&(y=m,Z_))try{let D=new URL(window.location.href),w=m.startsWith("//")?new URL(D.protocol+m):new URL(m),V=oa(w.pathname,E);w.origin===D.origin&&V!=null?m=V+w.search+w.hash:_=!0}catch{vi(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let O=mS(m,{relative:l}),[U,C,H]=QS(s,v),k=s1(m,{replace:h,state:d,target:p,preventScrollReset:g,relative:l,viewTransition:x});function I(D){e&&e(D),D.defaultPrevented||k(D)}let q=pe.createElement("a",{...v,...H,href:y||O,onClick:_||c?e:I,ref:t1(M,C),target:p,"data-discover":!A&&i==="render"?"true":void 0});return U&&!A?pe.createElement(pe.Fragment,null,q,pe.createElement(JS,{page:O})):q});Ur.displayName="Link";var i1=pe.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:s="",end:l=!1,style:c,to:h,viewTransition:d,children:p,...m},g){let x=Qo(h,{relative:m.relative}),v=Za(),M=pe.useContext(Qc),{navigator:E,basename:A}=pe.useContext(Ci),y=M!=null&&f1(x)&&d===!0,_=E.encodeLocation?E.encodeLocation(x).pathname:x.pathname,O=v.pathname,U=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(O=O.toLowerCase(),U=U?U.toLowerCase():null,_=_.toLowerCase()),U&&A&&(U=oa(U,A)||U);const C=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let H=O===_||!l&&O.startsWith(_)&&O.charAt(C)==="/",k=U!=null&&(U===_||!l&&U.startsWith(_)&&U.charAt(_.length)==="/"),I={isActive:H,isPending:k,isTransitioning:y},q=H?e:void 0,D;typeof s=="function"?D=s(I):D=[s,H?"active":null,k?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let w=typeof c=="function"?c(I):c;return pe.createElement(Ur,{...m,"aria-current":q,className:D,ref:g,style:w,to:h,viewTransition:d},typeof p=="function"?p(I):p)});i1.displayName="NavLink";var a1=pe.forwardRef(({discover:r="render",fetcherKey:e,navigate:i,reloadDocument:s,replace:l,state:c,method:h=Bc,action:d,onSubmit:p,relative:m,preventScrollReset:g,viewTransition:x,...v},M)=>{let E=c1(),A=u1(d,{relative:m}),y=h.toLowerCase()==="get"?"get":"post",_=typeof d=="string"&&K_.test(d),O=U=>{if(p&&p(U),U.defaultPrevented)return;U.preventDefault();let C=U.nativeEvent.submitter,H=(C==null?void 0:C.getAttribute("formmethod"))||h;E(C||U.currentTarget,{fetcherKey:e,method:H,navigate:i,replace:l,state:c,relative:m,preventScrollReset:g,viewTransition:x})};return pe.createElement("form",{ref:M,method:y,action:A,onSubmit:s?p:O,...v,"data-discover":!_&&r==="render"?"true":void 0})});a1.displayName="Form";function r1(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Q_(r){let e=pe.useContext(Ps);return jt(e,r1(r)),e}function s1(r,{target:e,replace:i,state:s,preventScrollReset:l,relative:c,viewTransition:h}={}){let d=gS(),p=Za(),m=Qo(r,{relative:c});return pe.useCallback(g=>{if(zS(g,e)){g.preventDefault();let x=i!==void 0?i:Xo(p)===Xo(m);d(r,{replace:x,state:s,preventScrollReset:l,relative:c,viewTransition:h})}},[p,d,m,i,s,e,r,l,c,h])}var o1=0,l1=()=>`__${String(++o1)}__`;function c1(){let{router:r}=Q_("useSubmit"),{basename:e}=pe.useContext(Ci),i=RS();return pe.useCallback(async(s,l={})=>{let{action:c,method:h,encType:d,formData:p,body:m}=HS(s,e);if(l.navigate===!1){let g=l.fetcherKey||l1();await r.fetch(g,i,l.action||c,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||h,formEncType:l.encType||d,flushSync:l.flushSync})}else await r.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||h,formEncType:l.encType||d,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[r,e,i])}function u1(r,{relative:e}={}){let{basename:i}=pe.useContext(Ci),s=pe.useContext(ua);jt(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...Qo(r||".",{relative:e})},h=Za();if(r==null){c.search=h.search;let d=new URLSearchParams(c.search),p=d.getAll("index");if(p.some(g=>g==="")){d.delete("index"),p.filter(x=>x).forEach(x=>d.append("index",x));let g=d.toString();c.search=g?`?${g}`:""}}return(!r||r===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:aa([i,c.pathname])),Xo(c)}function f1(r,e={}){let i=pe.useContext(V_);jt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Q_("useViewTransitionState"),l=Qo(r,{relative:e.relative});if(!i.isTransitioning)return!1;let c=oa(i.currentLocation.pathname,s)||i.currentLocation.pathname,h=oa(i.nextLocation.pathname,s)||i.nextLocation.pathname;return qc(l.pathname,h)!=null||qc(l.pathname,c)!=null}new TextEncoder;[...YS];const h1=()=>z.jsxs(z.Fragment,{children:[z.jsx("style",{children:`
          #about_me_txt p:not(:first-child) {
            margin-top: 1em;
          }

          #about_me_txt p {
          text-indent: 30px;
          }
        `}),z.jsxs("div",{id:"about_me_txt",className:"w-[80%] ml-10 mb-10 text-white",children:[z.jsxs("p",{children:["I’m an artist and engineering student based in Los Angeles. I grew up in Kentucky and earned my BFA from the School of the Art Institute of Chicago before moving to LA in 2017. My goal was to study alongside great acting teachers and I did that twice weekly, for four years. (Performance and emotion are ",z.jsx("span",{style:{fontStyle:"italic"},children:"other"})," fascinations of mine) "]}),z.jsx("p",{children:`My paintings explore the tension between painting as image and painting as object, where flatness meets surface. Something about the line in between object and image draws me into experimenting with what I consider to be "wrong-ness" in the work. I’m drawn to that moment when something feels just slightly off, when a move on a painting initially strikes me with revolting inadequacy—I'll often stop there.`}),z.jsx("p",{children:"Alongside my art practice, my studies as an engineering student have a focus on product design, app interfaces, and data analysis. I’m interested in how systems break down and reassemble—whether in a canvas or a codebase. My work moves between those worlds, and they feed each other in unexpected ways."}),z.jsx("p",{children:"As an artist, I like breaking things. As an engineer, creating things."})]})]}),Cs="Cal Sans",Go="Oswald",ra="Arial, sans",d1=1e3,jc="Jay H. Crawford",Ic="65",ko="opacity-65 font-bold text-white",p1=r=>z.jsxs(z.Fragment,{children:[r.url==""&&z.jsx("div",{id:"this_one",className:"h-30 w-30 absolute",children:z.jsx("img",{src:"./under_construction.svg"})}),z.jsx("div",{style:{boxShadow:"5px 5px 5px rgba(0, 0, 0, 1)"},className:"gridPhoto_Image_container w-80 h-60",children:z.jsx("img",{className:"rounded-lg w-80 h-60",style:{objectFit:"cover"},src:r.img})})]}),m1=r=>z.jsx(z.Fragment,{children:z.jsx(Ur,{to:r.url?r.url:"",children:z.jsx("div",{className:"gridPhoto_container p-1 m-2 flex justify-center",children:z.jsxs("div",{className:"gridPhoto_item_container m-2 inline",children:[z.jsx("div",{className:"",children:z.jsx(p1,{img:r.img,url:r.url})}),z.jsx("div",{children:z.jsx("h4",{style:{fontFamily:Cs},className:"text-2xl text-white p-4",children:r.title})})]})})})}),g1=r=>{const e=()=>r.width<2e3?"w-full":"w-[60%]",i=()=>r.width<750?"grid-cols-1":"grid-cols-2";return z.jsx("div",{id:"grid_container",className:`grid ${e()} ${i()}`,children:r.categories.map((s,l)=>z.jsx("span",{children:z.jsx(m1,{title:s.category,img:s.img,url:s.url?s.url:""})},`${l}-${s.category}`))})},_1=r=>z.jsx(g1,{width:r.width,categories:r.category_array}),v1="https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting/",Wh=["KP.webp","G.webp","alien_invasion.webp","alley.webp","bad_painting.webp","bada_bing.webp","behind.webp","blinker.webp","blue_girl_1.webp","blue_girl_2.webp","bouquet.webp","bright_lights_big_city.webp","business_card.webp","california_onlookers.webp","connection.webp","dips.webp","eyes.webp","following.webp","funny_mustache_guy.webp","hilltop_city.webp","hollywood_hills.webp","house.webp","in_the_city.webp","jacks.webp","jacks_2.webp","james.webp","locked_away.webp","network.webp","night.webp","one_way.webp","online.webp","outlooker.webp","perspective.webp","pictures_of_then.webp","portrait_copy.webp","rainy_sun.webp","researchers.webp","street_corner.webp","sunday.webp","time.webp","tornado.webp","transfer.webp","victorian.webp","what_do_you.webp","woah_dude.webp","worm.webp","x.webp"],F0=r=>r&&r.endsWith(".webp")?r.slice(0,-5):"",pi=Wh.map(r=>({src:`${v1}${r}`,alt:r,title:r})),J_="rgba(255,255,255,0.2)",x1={border:`3px solid ${J_}`,cursor:"not-allowed"},dc=r=>{const e=r.direction==="left"&&r.current===0||r.direction==="right"&&r.current===pi.length-1;console.log(r.current,r.direction);const i=()=>{switch(r.graphic){case"caret-right":return z.jsx("div",{className:"h-10 w-10",children:z.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:z.jsx("path",{d:"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"})})});case"caret-left":return z.jsx("div",{className:"h-10 w-10",children:z.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:z.jsx("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"})})});case"arrow-right":return z.jsx("div",{className:" h-8 w-8",children:z.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:z.jsx("path",{d:"M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"})})});case"arrow-left":return z.jsx("div",{className:" h-8 w-8",children:z.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:z.jsx("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"})})})}};return z.jsx("button",{style:{...(r.graphic=="arrow-left"||r.graphic=="arrow-right")&&e?x1:{}},className:`inline-block ${r.graphic=="caret-left"||r.graphic=="caret-right"?"":"border-3 border-white"} cursor-pointer p-1 h-20 w-20 bg-none rounded-[50%]`,onClick:r.onclick_func,disabled:e,"aria-label":r.direction==="right"?"Next painting":"Previous painting",type:"button",children:z.jsx("div",{style:{fill:e?J_:"white"},className:"flex justify-center items-center",children:i()})})},y1=r=>{const[e,i]=pe.useState(0);console.log(e,"is current");const s=()=>i(c=>Math.max(c-1,0)),l=()=>i(c=>Math.min(c+1,pi.length-1));return r.width>d1?z.jsxs("div",{id:"gallery-container",children:[z.jsx("div",{className:"gallery_leftButton",children:z.jsx(dc,{graphic:"arrow-left",direction:"left",current:e,onclick_func:s})}),z.jsx("div",{className:"gallery_mainImage",children:z.jsx("img",{src:pi[e].src,alt:pi[e].alt,title:pi[e].title,loading:"lazy"})}),z.jsx("div",{className:"gallery_rightButton",children:z.jsx(dc,{graphic:"arrow-right",direction:"right",current:e,onclick_func:l})}),z.jsx(H0,{images_array:Wh,current:e,setCurrent:i}),z.jsxs("div",{className:"gallery_textDetails text-white text-left p-10",children:[z.jsx("h3",{children:F0(pi[e].title)}),z.jsx("p",{children:"acrylic on canvas"}),z.jsx("p",{children:"2021-2025"})]})]}):z.jsxs("div",{children:[z.jsxs("div",{id:"",className:"flex flex-row justify-center",children:[z.jsx("style",{children:`
            .gallery_leftRightButton_cols {
              display: flex;
              align-items: center;
            }
            `}),z.jsx("button",{onClick:()=>s(),className:"gallery_leftRightButton_cols",children:z.jsx(dc,{graphic:"caret-left",direction:"left",current:e})}),z.jsx("img",{style:{width:"70%"},src:pi[e].src,alt:pi[e].alt,title:pi[e].title,loading:"lazy"}),z.jsx("button",{onClick:()=>l(),className:"gallery_leftRightButton_cols",children:z.jsx(dc,{graphic:"caret-right",direction:"right",current:e})})]}),z.jsxs("div",{className:"text-left p-10",children:[z.jsx("h3",{children:F0(pi[e].title)}),z.jsx("p",{children:"acrylic on canvas"}),z.jsx("p",{children:"2021-2025"})]}),z.jsx(H0,{images_array:Wh,setCurrent:i,current:e})]})},H0=r=>{const e=pi.slice(r.current+1,r.current+6);return z.jsx("div",{className:"gallery_subImages",children:e.map(i=>z.jsx("button",{onClick:()=>r.setCurrent(r.images_array.indexOf(i.title?i.title:"")),children:z.jsx("img",{src:i.src,alt:i.alt,title:i.title,className:"inline max-w-25 max-h-25 m-1 rounded-sm",loading:"lazy"},i.src)}))})},S1=r=>z.jsxs("div",{className:"text-white",style:{fontFamily:ra,textAlign:"center"},children:[z.jsx("h2",{style:{display:"none"},children:"Art"}),z.jsx(y1,{width:r.width})]}),M1=()=>z.jsx("div",{className:"text-center text-white",style:{fontFamily:ra}});function E1(){const[r,e]=pe.useState({width:window.innerWidth,height:window.innerHeight});return pe.useEffect(()=>{function i(){e({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}},[]),r}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hd="176",b1=0,G0=1,T1=2,$_=1,A1=2,ea=3,ja=0,Fn=1,ta=2,Wa=0,Rs=1,V0=2,k0=3,X0=4,R1=5,Er=100,w1=101,C1=102,D1=103,U1=104,L1=200,N1=201,O1=202,P1=203,qh=204,jh=205,B1=206,z1=207,I1=208,F1=209,H1=210,G1=211,V1=212,k1=213,X1=214,Yh=0,Zh=1,Kh=2,Ds=3,Qh=4,Jh=5,$h=6,ed=7,ev=0,W1=1,q1=2,qa=0,j1=1,Y1=2,Z1=3,K1=4,Q1=5,J1=6,$1=7,tv=300,Us=301,Ls=302,td=303,nd=304,$c=306,id=1e3,Tr=1001,ad=1002,_i=1003,eM=1004,pc=1005,Ai=1006,dh=1007,Ar=1008,la=1009,nv=1010,iv=1011,Wo=1012,Gd=1013,wr=1014,na=1015,Jo=1016,Vd=1017,kd=1018,qo=1020,av=35902,rv=1021,sv=1022,gi=1023,jo=1026,Yo=1027,ov=1028,Xd=1029,lv=1030,Wd=1031,qd=1033,Fc=33776,Hc=33777,Gc=33778,Vc=33779,rd=35840,sd=35841,od=35842,ld=35843,cd=36196,ud=37492,fd=37496,hd=37808,dd=37809,pd=37810,md=37811,gd=37812,_d=37813,vd=37814,xd=37815,yd=37816,Sd=37817,Md=37818,Ed=37819,bd=37820,Td=37821,kc=36492,Ad=36494,Rd=36495,cv=36283,wd=36284,Cd=36285,Dd=36286,tM=3200,nM=3201,iM=0,aM=1,Xa="",si="srgb",Ns="srgb-linear",Yc="linear",Ot="srgb",us=7680,W0=519,rM=512,sM=513,oM=514,uv=515,lM=516,cM=517,uM=518,fM=519,q0=35044,j0="300 es",ia=2e3,Zc=2001;class Bs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ph=Math.PI/180,Ud=180/Math.PI;function $o(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]).toLowerCase()}function xt(r,e,i){return Math.max(e,Math.min(i,r))}function hM(r,e){return(r%e+e)%e}function mh(r,e,i){return(1-i)*r+i*e}function Bo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function In(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ft{constructor(e=0,i=0){Ft.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=xt(this.x,e.x,i.x),this.y=xt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=xt(this.x,e,i),this.y=xt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(xt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*s-h*l+e.x,this.y=c*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,i,s,l,c,h,d,p,m){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,p,m)}set(e,i,s,l,c,h,d,p,m){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=p,g[6]=s,g[7]=h,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],p=s[6],m=s[1],g=s[4],x=s[7],v=s[2],M=s[5],E=s[8],A=l[0],y=l[3],_=l[6],O=l[1],U=l[4],C=l[7],H=l[2],k=l[5],I=l[8];return c[0]=h*A+d*O+p*H,c[3]=h*y+d*U+p*k,c[6]=h*_+d*C+p*I,c[1]=m*A+g*O+x*H,c[4]=m*y+g*U+x*k,c[7]=m*_+g*C+x*I,c[2]=v*A+M*O+E*H,c[5]=v*y+M*U+E*k,c[8]=v*_+M*C+E*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8];return i*h*g-i*d*m-s*c*g+s*d*p+l*c*m-l*h*p}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8],x=g*h-d*m,v=d*p-g*c,M=m*c-h*p,E=i*x+s*v+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=x*A,e[1]=(l*m-g*s)*A,e[2]=(d*s-l*h)*A,e[3]=v*A,e[4]=(g*i-l*p)*A,e[5]=(l*c-d*i)*A,e[6]=M*A,e[7]=(s*p-m*i)*A,e[8]=(h*i-s*c)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,h,d){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*h+m*d)+h+e,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(gh.makeScale(e,i)),this}rotate(e){return this.premultiply(gh.makeRotation(-e)),this}translate(e,i){return this.premultiply(gh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gh=new st;function fv(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Kc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function dM(){const r=Kc("canvas");return r.style.display="block",r}const Y0={};function Xc(r){r in Y0||(Y0[r]=!0,console.warn(r))}function pM(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}function mM(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function gM(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Z0=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),K0=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _M(){const r={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ot&&(l.r=sa(l.r),l.g=sa(l.g),l.b=sa(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ot&&(l.r=ws(l.r),l.g=ws(l.g),l.b=ws(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Xa?Yc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Ns]:{primaries:e,whitePoint:s,transfer:Yc,toXYZ:Z0,fromXYZ:K0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:e,whitePoint:s,transfer:Ot,toXYZ:Z0,fromXYZ:K0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),r}const Tt=_M();function sa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ws(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let fs;class vM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{fs===void 0&&(fs=Kc("canvas")),fs.width=e.width,fs.height=e.height;const l=fs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=fs}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Kc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=sa(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(sa(i[s]/255)*255):i[s]=sa(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xM=0;class jd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=$o(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(_h(l[h].image)):c.push(_h(l[h]))}else c=_h(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function _h(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?vM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yM=0;class Hn extends Bs{constructor(e=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,s=Tr,l=Tr,c=Ai,h=Ar,d=gi,p=la,m=Hn.DEFAULT_ANISOTROPY,g=Xa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=$o(),this.name="",this.source=new jd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case id:e.x=e.x-Math.floor(e.x);break;case Tr:e.x=e.x<0?0:1;break;case ad:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case id:e.y=e.y-Math.floor(e.y);break;case Tr:e.y=e.y<0?0:1;break;case ad:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=tv;Hn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,i=0,s=0,l=1){$t.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const p=e.elements,m=p[0],g=p[4],x=p[8],v=p[1],M=p[5],E=p[9],A=p[2],y=p[6],_=p[10];if(Math.abs(g-v)<.01&&Math.abs(x-A)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(x+A)<.1&&Math.abs(E+y)<.1&&Math.abs(m+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(m+1)/2,C=(M+1)/2,H=(_+1)/2,k=(g+v)/4,I=(x+A)/4,q=(E+y)/4;return U>C&&U>H?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=k/s,c=I/s):C>H?C<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),s=k/l,c=q/l):H<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),s=I/c,l=q/c),this.set(s,l,c,i),this}let O=Math.sqrt((y-E)*(y-E)+(x-A)*(x-A)+(v-g)*(v-g));return Math.abs(O)<.001&&(O=1),this.x=(y-E)/O,this.y=(x-A)/O,this.z=(v-g)/O,this.w=Math.acos((m+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=xt(this.x,e.x,i.x),this.y=xt(this.y,e.y,i.y),this.z=xt(this.z,e.z,i.z),this.w=xt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=xt(this.x,e,i),this.y=xt(this.y,e,i),this.z=xt(this.z,e,i),this.w=xt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class SM extends Bs{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth?s.depth:1,this.scissor=new $t(0,0,e,i),this.scissorTest=!1,this.viewport=new $t(0,0,e,i);const l={width:e,height:i,depth:this.depth};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},s);const c=new Hn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);c.flipY=!1,c.generateMipmaps=s.generateMipmaps,c.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new jd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cr extends SM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class hv extends Hn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class MM extends Hn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class el{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,h,d){let p=s[l+0],m=s[l+1],g=s[l+2],x=s[l+3];const v=c[h+0],M=c[h+1],E=c[h+2],A=c[h+3];if(d===0){e[i+0]=p,e[i+1]=m,e[i+2]=g,e[i+3]=x;return}if(d===1){e[i+0]=v,e[i+1]=M,e[i+2]=E,e[i+3]=A;return}if(x!==A||p!==v||m!==M||g!==E){let y=1-d;const _=p*v+m*M+g*E+x*A,O=_>=0?1:-1,U=1-_*_;if(U>Number.EPSILON){const H=Math.sqrt(U),k=Math.atan2(H,_*O);y=Math.sin(y*k)/H,d=Math.sin(d*k)/H}const C=d*O;if(p=p*y+v*C,m=m*y+M*C,g=g*y+E*C,x=x*y+A*C,y===1-d){const H=1/Math.sqrt(p*p+m*m+g*g+x*x);p*=H,m*=H,g*=H,x*=H}}e[i]=p,e[i+1]=m,e[i+2]=g,e[i+3]=x}static multiplyQuaternionsFlat(e,i,s,l,c,h){const d=s[l],p=s[l+1],m=s[l+2],g=s[l+3],x=c[h],v=c[h+1],M=c[h+2],E=c[h+3];return e[i]=d*E+g*x+p*M-m*v,e[i+1]=p*E+g*v+m*x-d*M,e[i+2]=m*E+g*M+d*v-p*x,e[i+3]=g*E-d*x-p*v-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,p=Math.sin,m=d(s/2),g=d(l/2),x=d(c/2),v=p(s/2),M=p(l/2),E=p(c/2);switch(h){case"XYZ":this._x=v*g*x+m*M*E,this._y=m*M*x-v*g*E,this._z=m*g*E+v*M*x,this._w=m*g*x-v*M*E;break;case"YXZ":this._x=v*g*x+m*M*E,this._y=m*M*x-v*g*E,this._z=m*g*E-v*M*x,this._w=m*g*x+v*M*E;break;case"ZXY":this._x=v*g*x-m*M*E,this._y=m*M*x+v*g*E,this._z=m*g*E+v*M*x,this._w=m*g*x-v*M*E;break;case"ZYX":this._x=v*g*x-m*M*E,this._y=m*M*x+v*g*E,this._z=m*g*E-v*M*x,this._w=m*g*x+v*M*E;break;case"YZX":this._x=v*g*x+m*M*E,this._y=m*M*x+v*g*E,this._z=m*g*E-v*M*x,this._w=m*g*x-v*M*E;break;case"XZY":this._x=v*g*x-m*M*E,this._y=m*M*x-v*g*E,this._z=m*g*E+v*M*x,this._w=m*g*x+v*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],p=i[9],m=i[2],g=i[6],x=i[10],v=s+d+x;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(g-p)*M,this._y=(c-m)*M,this._z=(h-l)*M}else if(s>d&&s>x){const M=2*Math.sqrt(1+s-d-x);this._w=(g-p)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+m)/M}else if(d>x){const M=2*Math.sqrt(1+d-s-x);this._w=(c-m)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(p+g)/M}else{const M=2*Math.sqrt(1+x-s-d);this._w=(h-l)/M,this._x=(c+m)/M,this._y=(p+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,h=e._w,d=i._x,p=i._y,m=i._z,g=i._w;return this._x=s*g+h*d+l*m-c*p,this._y=l*g+h*p+c*d-s*m,this._z=c*g+h*m+s*p-l*d,this._w=h*g-s*d-l*p-c*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+s*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),x=Math.sin((1-i)*g)/m,v=Math.sin(i*g)/m;return this._w=h*x+this._w*v,this._x=s*x+this._x*v,this._y=l*x+this._y*v,this._z=c*x+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,i=0,s=0){se.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Q0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Q0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,h=e.y,d=e.z,p=e.w,m=2*(h*l-d*s),g=2*(d*i-c*l),x=2*(c*s-h*i);return this.x=i+p*m+h*x-d*g,this.y=s+p*g+d*m-c*x,this.z=l+p*x+c*g-h*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=xt(this.x,e.x,i.x),this.y=xt(this.y,e.y,i.y),this.z=xt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=xt(this.x,e,i),this.y=xt(this.y,e,i),this.z=xt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*h-s*p,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return vh.copy(this).projectOnVector(e),this.sub(vh)}reflect(e){return this.sub(vh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(xt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vh=new se,Q0=new el;class tl{constructor(e=new se(1/0,1/0,1/0),i=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(fi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(fi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=fi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,fi):fi.fromBufferAttribute(c,h),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),mc.copy(s.boundingBox)),mc.applyMatrix4(e.matrixWorld),this.union(mc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zo),gc.subVectors(this.max,zo),hs.subVectors(e.a,zo),ds.subVectors(e.b,zo),ps.subVectors(e.c,zo),za.subVectors(ds,hs),Ia.subVectors(ps,ds),mr.subVectors(hs,ps);let i=[0,-za.z,za.y,0,-Ia.z,Ia.y,0,-mr.z,mr.y,za.z,0,-za.x,Ia.z,0,-Ia.x,mr.z,0,-mr.x,-za.y,za.x,0,-Ia.y,Ia.x,0,-mr.y,mr.x,0];return!xh(i,hs,ds,ps,gc)||(i=[1,0,0,0,1,0,0,0,1],!xh(i,hs,ds,ps,gc))?!1:(_c.crossVectors(za,Ia),i=[_c.x,_c.y,_c.z],xh(i,hs,ds,ps,gc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zi=[new se,new se,new se,new se,new se,new se,new se,new se],fi=new se,mc=new tl,hs=new se,ds=new se,ps=new se,za=new se,Ia=new se,mr=new se,zo=new se,gc=new se,_c=new se,gr=new se;function xh(r,e,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){gr.fromArray(r,c);const d=l.x*Math.abs(gr.x)+l.y*Math.abs(gr.y)+l.z*Math.abs(gr.z),p=e.dot(gr),m=i.dot(gr),g=s.dot(gr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const EM=new tl,Io=new se,yh=new se;class Yd{constructor(e=new se,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):EM.setFromPoints(e).getCenter(s);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);const i=Io.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Io,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(yh)),this.expandByPoint(Io.copy(e.center).sub(yh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ki=new se,Sh=new se,vc=new se,Fa=new se,Mh=new se,xc=new se,Eh=new se;class bM{constructor(e=new se,i=new se(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ki.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,i),Ki.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Sh.copy(e).add(i).multiplyScalar(.5),vc.copy(i).sub(e).normalize(),Fa.copy(this.origin).sub(Sh);const c=e.distanceTo(i)*.5,h=-this.direction.dot(vc),d=Fa.dot(this.direction),p=-Fa.dot(vc),m=Fa.lengthSq(),g=Math.abs(1-h*h);let x,v,M,E;if(g>0)if(x=h*p-d,v=h*d-p,E=c*g,x>=0)if(v>=-E)if(v<=E){const A=1/g;x*=A,v*=A,M=x*(x+h*v+2*d)+v*(h*x+v+2*p)+m}else v=c,x=Math.max(0,-(h*v+d)),M=-x*x+v*(v+2*p)+m;else v=-c,x=Math.max(0,-(h*v+d)),M=-x*x+v*(v+2*p)+m;else v<=-E?(x=Math.max(0,-(-h*c+d)),v=x>0?-c:Math.min(Math.max(-c,-p),c),M=-x*x+v*(v+2*p)+m):v<=E?(x=0,v=Math.min(Math.max(-c,-p),c),M=v*(v+2*p)+m):(x=Math.max(0,-(h*c+d)),v=x>0?c:Math.min(Math.max(-c,-p),c),M=-x*x+v*(v+2*p)+m);else v=h>0?-c:c,x=Math.max(0,-(h*v+d)),M=-x*x+v*(v+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Sh).addScaledVector(vc,v),M}intersectSphere(e,i){Ki.subVectors(e.center,this.origin);const s=Ki.dot(this.direction),l=Ki.dot(Ki)-s*s,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,p=s+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,h,d,p;const m=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,v=this.origin;return m>=0?(s=(e.min.x-v.x)*m,l=(e.max.x-v.x)*m):(s=(e.max.x-v.x)*m,l=(e.min.x-v.x)*m),g>=0?(c=(e.min.y-v.y)*g,h=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,h=(e.min.y-v.y)*g),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),x>=0?(d=(e.min.z-v.z)*x,p=(e.max.z-v.z)*x):(d=(e.max.z-v.z)*x,p=(e.min.z-v.z)*x),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,i,s,l,c){Mh.subVectors(i,e),xc.subVectors(s,e),Eh.crossVectors(Mh,xc);let h=this.direction.dot(Eh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Fa.subVectors(this.origin,e);const p=d*this.direction.dot(xc.crossVectors(Fa,xc));if(p<0)return null;const m=d*this.direction.dot(Mh.cross(Fa));if(m<0||p+m>h)return null;const g=-d*Fa.dot(Eh);return g<0?null:this.at(g/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(e,i,s,l,c,h,d,p,m,g,x,v,M,E,A,y){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,p,m,g,x,v,M,E,A,y)}set(e,i,s,l,c,h,d,p,m,g,x,v,M,E,A,y){const _=this.elements;return _[0]=e,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=h,_[9]=d,_[13]=p,_[2]=m,_[6]=g,_[10]=x,_[14]=v,_[3]=M,_[7]=E,_[11]=A,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/ms.setFromMatrixColumn(e,0).length(),c=1/ms.setFromMatrixColumn(e,1).length(),h=1/ms.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,h=Math.cos(s),d=Math.sin(s),p=Math.cos(l),m=Math.sin(l),g=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const v=h*g,M=h*x,E=d*g,A=d*x;i[0]=p*g,i[4]=-p*x,i[8]=m,i[1]=M+E*m,i[5]=v-A*m,i[9]=-d*p,i[2]=A-v*m,i[6]=E+M*m,i[10]=h*p}else if(e.order==="YXZ"){const v=p*g,M=p*x,E=m*g,A=m*x;i[0]=v+A*d,i[4]=E*d-M,i[8]=h*m,i[1]=h*x,i[5]=h*g,i[9]=-d,i[2]=M*d-E,i[6]=A+v*d,i[10]=h*p}else if(e.order==="ZXY"){const v=p*g,M=p*x,E=m*g,A=m*x;i[0]=v-A*d,i[4]=-h*x,i[8]=E+M*d,i[1]=M+E*d,i[5]=h*g,i[9]=A-v*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(e.order==="ZYX"){const v=h*g,M=h*x,E=d*g,A=d*x;i[0]=p*g,i[4]=E*m-M,i[8]=v*m+A,i[1]=p*x,i[5]=A*m+v,i[9]=M*m-E,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(e.order==="YZX"){const v=h*p,M=h*m,E=d*p,A=d*m;i[0]=p*g,i[4]=A-v*x,i[8]=E*x+M,i[1]=x,i[5]=h*g,i[9]=-d*g,i[2]=-m*g,i[6]=M*x+E,i[10]=v-A*x}else if(e.order==="XZY"){const v=h*p,M=h*m,E=d*p,A=d*m;i[0]=p*g,i[4]=-x,i[8]=m*g,i[1]=v*x+A,i[5]=h*g,i[9]=M*x-E,i[2]=E*x-M,i[6]=d*g,i[10]=A*x+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(TM,e,AM)}lookAt(e,i,s){const l=this.elements;return Zn.subVectors(e,i),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Ha.crossVectors(s,Zn),Ha.lengthSq()===0&&(Math.abs(s.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Ha.crossVectors(s,Zn)),Ha.normalize(),yc.crossVectors(Zn,Ha),l[0]=Ha.x,l[4]=yc.x,l[8]=Zn.x,l[1]=Ha.y,l[5]=yc.y,l[9]=Zn.y,l[2]=Ha.z,l[6]=yc.z,l[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],p=s[8],m=s[12],g=s[1],x=s[5],v=s[9],M=s[13],E=s[2],A=s[6],y=s[10],_=s[14],O=s[3],U=s[7],C=s[11],H=s[15],k=l[0],I=l[4],q=l[8],D=l[12],w=l[1],V=l[5],ce=l[9],oe=l[13],xe=l[2],de=l[6],B=l[10],K=l[14],Y=l[3],Ee=l[7],N=l[11],ee=l[15];return c[0]=h*k+d*w+p*xe+m*Y,c[4]=h*I+d*V+p*de+m*Ee,c[8]=h*q+d*ce+p*B+m*N,c[12]=h*D+d*oe+p*K+m*ee,c[1]=g*k+x*w+v*xe+M*Y,c[5]=g*I+x*V+v*de+M*Ee,c[9]=g*q+x*ce+v*B+M*N,c[13]=g*D+x*oe+v*K+M*ee,c[2]=E*k+A*w+y*xe+_*Y,c[6]=E*I+A*V+y*de+_*Ee,c[10]=E*q+A*ce+y*B+_*N,c[14]=E*D+A*oe+y*K+_*ee,c[3]=O*k+U*w+C*xe+H*Y,c[7]=O*I+U*V+C*de+H*Ee,c[11]=O*q+U*ce+C*B+H*N,c[15]=O*D+U*oe+C*K+H*ee,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],h=e[1],d=e[5],p=e[9],m=e[13],g=e[2],x=e[6],v=e[10],M=e[14],E=e[3],A=e[7],y=e[11],_=e[15];return E*(+c*p*x-l*m*x-c*d*v+s*m*v+l*d*M-s*p*M)+A*(+i*p*M-i*m*v+c*h*v-l*h*M+l*m*g-c*p*g)+y*(+i*m*x-i*d*M-c*h*x+s*h*M+c*d*g-s*m*g)+_*(-l*d*g-i*p*x+i*d*v+l*h*x-s*h*v+s*p*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8],x=e[9],v=e[10],M=e[11],E=e[12],A=e[13],y=e[14],_=e[15],O=x*y*m-A*v*m+A*p*M-d*y*M-x*p*_+d*v*_,U=E*v*m-g*y*m-E*p*M+h*y*M+g*p*_-h*v*_,C=g*A*m-E*x*m+E*d*M-h*A*M-g*d*_+h*x*_,H=E*x*p-g*A*p-E*d*v+h*A*v+g*d*y-h*x*y,k=i*O+s*U+l*C+c*H;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/k;return e[0]=O*I,e[1]=(A*v*c-x*y*c-A*l*M+s*y*M+x*l*_-s*v*_)*I,e[2]=(d*y*c-A*p*c+A*l*m-s*y*m-d*l*_+s*p*_)*I,e[3]=(x*p*c-d*v*c-x*l*m+s*v*m+d*l*M-s*p*M)*I,e[4]=U*I,e[5]=(g*y*c-E*v*c+E*l*M-i*y*M-g*l*_+i*v*_)*I,e[6]=(E*p*c-h*y*c-E*l*m+i*y*m+h*l*_-i*p*_)*I,e[7]=(h*v*c-g*p*c+g*l*m-i*v*m-h*l*M+i*p*M)*I,e[8]=C*I,e[9]=(E*x*c-g*A*c-E*s*M+i*A*M+g*s*_-i*x*_)*I,e[10]=(h*A*c-E*d*c+E*s*m-i*A*m-h*s*_+i*d*_)*I,e[11]=(g*d*c-h*x*c-g*s*m+i*x*m+h*s*M-i*d*M)*I,e[12]=H*I,e[13]=(g*A*l-E*x*l+E*s*v-i*A*v-g*s*y+i*x*y)*I,e[14]=(E*d*l-h*A*l-E*s*p+i*A*p+h*s*y-i*d*y)*I,e[15]=(h*x*l-g*d*l+g*s*p-i*x*p-h*s*v+i*d*v)*I,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=e.x,d=e.y,p=e.z,m=c*h,g=c*d;return this.set(m*h+s,m*d-l*p,m*p+l*d,0,m*d+l*p,g*d+s,g*p-l*h,0,m*p-l*d,g*p+l*h,c*p*p+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,h){return this.set(1,s,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,p=i._w,m=c+c,g=h+h,x=d+d,v=c*m,M=c*g,E=c*x,A=h*g,y=h*x,_=d*x,O=p*m,U=p*g,C=p*x,H=s.x,k=s.y,I=s.z;return l[0]=(1-(A+_))*H,l[1]=(M+C)*H,l[2]=(E-U)*H,l[3]=0,l[4]=(M-C)*k,l[5]=(1-(v+_))*k,l[6]=(y+O)*k,l[7]=0,l[8]=(E+U)*I,l[9]=(y-O)*I,l[10]=(1-(v+A))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let c=ms.set(l[0],l[1],l[2]).length();const h=ms.set(l[4],l[5],l[6]).length(),d=ms.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],hi.copy(this);const m=1/c,g=1/h,x=1/d;return hi.elements[0]*=m,hi.elements[1]*=m,hi.elements[2]*=m,hi.elements[4]*=g,hi.elements[5]*=g,hi.elements[6]*=g,hi.elements[8]*=x,hi.elements[9]*=x,hi.elements[10]*=x,i.setFromRotationMatrix(hi),s.x=c,s.y=h,s.z=d,this}makePerspective(e,i,s,l,c,h,d=ia){const p=this.elements,m=2*c/(i-e),g=2*c/(s-l),x=(i+e)/(i-e),v=(s+l)/(s-l);let M,E;if(d===ia)M=-(h+c)/(h-c),E=-2*h*c/(h-c);else if(d===Zc)M=-h/(h-c),E=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=v,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,h,d=ia){const p=this.elements,m=1/(i-e),g=1/(s-l),x=1/(h-c),v=(i+e)*m,M=(s+l)*g;let E,A;if(d===ia)E=(h+c)*x,A=-2*x;else if(d===Zc)E=c*x,A=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-v,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=A,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const ms=new se,hi=new sn,TM=new se(0,0,0),AM=new se(1,1,1),Ha=new se,yc=new se,Zn=new se,J0=new sn,$0=new el;class ca{constructor(e=0,i=0,s=0,l=ca.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],p=l[1],m=l[5],g=l[9],x=l[2],v=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(xt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-xt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(xt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return J0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(J0,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return $0.setFromEuler(this),this.setFromQuaternion($0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ca.DEFAULT_ORDER="XYZ";class dv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let RM=0;const e_=new se,gs=new el,Qi=new sn,Sc=new se,Fo=new se,wM=new se,CM=new el,t_=new se(1,0,0),n_=new se(0,1,0),i_=new se(0,0,1),a_={type:"added"},DM={type:"removed"},_s={type:"childadded",child:null},bh={type:"childremoved",child:null};class Qn extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=$o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qn.DEFAULT_UP.clone();const e=new se,i=new ca,s=new el,l=new se(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new sn},normalMatrix:{value:new st}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return gs.setFromAxisAngle(e,i),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,i){return gs.setFromAxisAngle(e,i),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(t_,e)}rotateY(e){return this.rotateOnAxis(n_,e)}rotateZ(e){return this.rotateOnAxis(i_,e)}translateOnAxis(e,i){return e_.copy(e).applyQuaternion(this.quaternion),this.position.add(e_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(t_,e)}translateY(e){return this.translateOnAxis(n_,e)}translateZ(e){return this.translateOnAxis(i_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Sc.copy(e):Sc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Fo,Sc,this.up):Qi.lookAt(Sc,Fo,this.up),this.quaternion.setFromRotationMatrix(Qi),l&&(Qi.extractRotation(l.matrixWorld),gs.setFromRotationMatrix(Qi),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(a_),_s.child=e,this.dispatchEvent(_s),_s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(DM),bh.child=e,this.dispatchEvent(bh),bh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(a_),_s.child=e,this.dispatchEvent(_s),_s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,e,wM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,CM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?{min:d.boundingBox.min.toArray(),max:d.boundingBox.max.toArray()}:void 0,boundingSphere:d.boundingSphere?{radius:d.boundingSphere.radius,center:d.boundingSphere.center.toArray()}:void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const x=p[m];c(e.shapes,x)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(e.animations,p))}}if(i){const d=h(e.geometries),p=h(e.materials),m=h(e.textures),g=h(e.images),x=h(e.shapes),v=h(e.skeletons),M=h(e.animations),E=h(e.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),g.length>0&&(s.images=g),x.length>0&&(s.shapes=x),v.length>0&&(s.skeletons=v),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Qn.DEFAULT_UP=new se(0,1,0);Qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new se,Ji=new se,Th=new se,$i=new se,vs=new se,xs=new se,r_=new se,Ah=new se,Rh=new se,wh=new se,Ch=new $t,Dh=new $t,Uh=new $t;class mi{constructor(e=new se,i=new se,s=new se){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),di.subVectors(e,i),l.cross(di);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){di.subVectors(l,i),Ji.subVectors(s,i),Th.subVectors(e,i);const h=di.dot(di),d=di.dot(Ji),p=di.dot(Th),m=Ji.dot(Ji),g=Ji.dot(Th),x=h*m-d*d;if(x===0)return c.set(0,0,0),null;const v=1/x,M=(m*p-d*g)*v,E=(h*g-d*p)*v;return c.set(1-M-E,E,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,i,s,l,c,h,d,p){return this.getBarycoord(e,i,s,l,$i)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,$i.x),p.addScaledVector(h,$i.y),p.addScaledVector(d,$i.z),p)}static getInterpolatedAttribute(e,i,s,l,c,h){return Ch.setScalar(0),Dh.setScalar(0),Uh.setScalar(0),Ch.fromBufferAttribute(e,i),Dh.fromBufferAttribute(e,s),Uh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Ch,c.x),h.addScaledVector(Dh,c.y),h.addScaledVector(Uh,c.z),h}static isFrontFacing(e,i,s,l){return di.subVectors(s,i),Ji.subVectors(e,i),di.cross(Ji).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),di.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return mi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return mi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let h,d;vs.subVectors(l,s),xs.subVectors(c,s),Ah.subVectors(e,s);const p=vs.dot(Ah),m=xs.dot(Ah);if(p<=0&&m<=0)return i.copy(s);Rh.subVectors(e,l);const g=vs.dot(Rh),x=xs.dot(Rh);if(g>=0&&x<=g)return i.copy(l);const v=p*x-g*m;if(v<=0&&p>=0&&g<=0)return h=p/(p-g),i.copy(s).addScaledVector(vs,h);wh.subVectors(e,c);const M=vs.dot(wh),E=xs.dot(wh);if(E>=0&&M<=E)return i.copy(c);const A=M*m-p*E;if(A<=0&&m>=0&&E<=0)return d=m/(m-E),i.copy(s).addScaledVector(xs,d);const y=g*E-M*x;if(y<=0&&x-g>=0&&M-E>=0)return r_.subVectors(c,l),d=(x-g)/(x-g+(M-E)),i.copy(l).addScaledVector(r_,d);const _=1/(y+A+v);return h=A*_,d=v*_,i.copy(s).addScaledVector(vs,h).addScaledVector(xs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ga={h:0,s:0,l:0},Mc={h:0,s:0,l:0};function Lh(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Pt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=Tt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Tt.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=Tt.workingColorSpace){if(e=hM(e,1),i=xt(i,0,1),s=xt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Lh(h,c,e+1/3),this.g=Lh(h,c,e),this.b=Lh(h,c,e-1/3)}return Tt.toWorkingColorSpace(this,l),this}setStyle(e,i=si){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=si){const s=pv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sa(e.r),this.g=sa(e.g),this.b=sa(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=si){return Tt.fromWorkingColorSpace(Cn.copy(this),e),Math.round(xt(Cn.r*255,0,255))*65536+Math.round(xt(Cn.g*255,0,255))*256+Math.round(xt(Cn.b*255,0,255))}getHexString(e=si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Tt.workingColorSpace){Tt.fromWorkingColorSpace(Cn.copy(this),i);const s=Cn.r,l=Cn.g,c=Cn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let p,m;const g=(d+h)/2;if(d===h)p=0,m=0;else{const x=h-d;switch(m=g<=.5?x/(h+d):x/(2-h-d),h){case s:p=(l-c)/x+(l<c?6:0);break;case l:p=(c-s)/x+2;break;case c:p=(s-l)/x+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,i=Tt.workingColorSpace){return Tt.fromWorkingColorSpace(Cn.copy(this),i),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=si){Tt.fromWorkingColorSpace(Cn.copy(this),e);const i=Cn.r,s=Cn.g,l=Cn.b;return e!==si?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Ga),this.setHSL(Ga.h+e,Ga.s+i,Ga.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Ga),e.getHSL(Mc);const s=mh(Ga.h,Mc.h,i),l=mh(Ga.s,Mc.s,i),c=mh(Ga.l,Mc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Pt;Pt.NAMES=pv;let UM=0;class eu extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=$o(),this.name="",this.type="Material",this.blending=Rs,this.side=ja,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qh,this.blendDst=jh,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=W0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(s.blending=this.blending),this.side!==ja&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==qh&&(s.blendSrc=this.blendSrc),this.blendDst!==jh&&(s.blendDst=this.blendDst),this.blendEquation!==Er&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==W0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(s.stencilFail=this.stencilFail),this.stencilZFail!==us&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const p=c[d];delete p.metadata,h.push(p)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Zd extends eu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ca,this.combine=ev,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rn=new se,Ec=new Ft;let LM=0;class wi{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:LM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=q0,this.updateRanges=[],this.gpuType=na,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Ec.fromBufferAttribute(this,i),Ec.applyMatrix3(e),this.setXY(i,Ec.x,Ec.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix3(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix4(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)rn.fromBufferAttribute(this,i),rn.applyNormalMatrix(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)rn.fromBufferAttribute(this,i),rn.transformDirection(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Bo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=In(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Bo(i,this.array)),i}setX(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Bo(i,this.array)),i}setY(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Bo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Bo(i,this.array)),i}setW(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),s=In(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),s=In(s,this.array),l=In(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),s=In(s,this.array),l=In(l,this.array),c=In(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==q0&&(e.usage=this.usage),e}}class mv extends wi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class gv extends wi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Rr extends wi{constructor(e,i,s){super(new Float32Array(e),i,s)}}let NM=0;const ri=new sn,Nh=new Qn,ys=new se,Kn=new tl,Ho=new tl,vn=new se;class Lr extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=$o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fv(e)?gv:mv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new st().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,i,s){return ri.makeTranslation(e,i,s),this.applyMatrix4(ri),this}scale(e,i,s){return ri.makeScale(e,i,s),this.applyMatrix4(ri),this}lookAt(e){return Nh.lookAt(e),Nh.updateMatrix(),this.applyMatrix4(Nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Rr(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Kn.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yd);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(e){const s=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Ho.setFromBufferAttribute(d),this.morphTargetsRelative?(vn.addVectors(Kn.min,Ho.min),Kn.expandByPoint(vn),vn.addVectors(Kn.max,Ho.max),Kn.expandByPoint(vn)):(Kn.expandByPoint(Ho.min),Kn.expandByPoint(Ho.max))}Kn.getCenter(s);let l=0;for(let c=0,h=e.count;c<h;c++)vn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(vn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)vn.fromBufferAttribute(d,m),p&&(ys.fromBufferAttribute(e,m),vn.add(ys)),l=Math.max(l,s.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let q=0;q<s.count;q++)d[q]=new se,p[q]=new se;const m=new se,g=new se,x=new se,v=new Ft,M=new Ft,E=new Ft,A=new se,y=new se;function _(q,D,w){m.fromBufferAttribute(s,q),g.fromBufferAttribute(s,D),x.fromBufferAttribute(s,w),v.fromBufferAttribute(c,q),M.fromBufferAttribute(c,D),E.fromBufferAttribute(c,w),g.sub(m),x.sub(m),M.sub(v),E.sub(v);const V=1/(M.x*E.y-E.x*M.y);isFinite(V)&&(A.copy(g).multiplyScalar(E.y).addScaledVector(x,-M.y).multiplyScalar(V),y.copy(x).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(V),d[q].add(A),d[D].add(A),d[w].add(A),p[q].add(y),p[D].add(y),p[w].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let q=0,D=O.length;q<D;++q){const w=O[q],V=w.start,ce=w.count;for(let oe=V,xe=V+ce;oe<xe;oe+=3)_(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const U=new se,C=new se,H=new se,k=new se;function I(q){H.fromBufferAttribute(l,q),k.copy(H);const D=d[q];U.copy(D),U.sub(H.multiplyScalar(H.dot(D))).normalize(),C.crossVectors(k,D);const V=C.dot(p[q])<0?-1:1;h.setXYZW(q,U.x,U.y,U.z,V)}for(let q=0,D=O.length;q<D;++q){const w=O[q],V=w.start,ce=w.count;for(let oe=V,xe=V+ce;oe<xe;oe+=3)I(e.getX(oe+0)),I(e.getX(oe+1)),I(e.getX(oe+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new wi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,M=s.count;v<M;v++)s.setXYZ(v,0,0,0);const l=new se,c=new se,h=new se,d=new se,p=new se,m=new se,g=new se,x=new se;if(e)for(let v=0,M=e.count;v<M;v+=3){const E=e.getX(v+0),A=e.getX(v+1),y=e.getX(v+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,A),h.fromBufferAttribute(i,y),g.subVectors(h,c),x.subVectors(l,c),g.cross(x),d.fromBufferAttribute(s,E),p.fromBufferAttribute(s,A),m.fromBufferAttribute(s,y),d.add(g),p.add(g),m.add(g),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(A,p.x,p.y,p.z),s.setXYZ(y,m.x,m.y,m.z)}else for(let v=0,M=i.count;v<M;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),h.fromBufferAttribute(i,v+2),g.subVectors(h,c),x.subVectors(l,c),g.cross(x),s.setXYZ(v+0,g.x,g.y,g.z),s.setXYZ(v+1,g.x,g.y,g.z),s.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)vn.fromBufferAttribute(e,i),vn.normalize(),e.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function e(d,p){const m=d.array,g=d.itemSize,x=d.normalized,v=new m.constructor(p.length*g);let M=0,E=0;for(let A=0,y=p.length;A<y;A++){d.isInterleavedBufferAttribute?M=p[A]*d.data.stride+d.offset:M=p[A]*g;for(let _=0;_<g;_++)v[E++]=m[M++]}return new wi(v,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Lr,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=e(p,s);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let g=0,x=m.length;g<x;g++){const v=m[g],M=e(v,s);p.push(M)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let x=0,v=m.length;x<v;x++){const M=m[x];g.push(M.toJSON(e.data))}g.length>0&&(l[p]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const c=e.morphAttributes;for(const m in c){const g=[],x=c[m];for(let v=0,M=x.length;v<M;v++)g.push(x[v].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let m=0,g=h.length;m<g;m++){const x=h[m];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const s_=new sn,_r=new bM,bc=new Yd,o_=new se,Tc=new se,Ac=new se,Rc=new se,Oh=new se,wc=new se,l_=new se,Cc=new se;class Ri extends Qn{constructor(e=new Lr,i=new Zd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){wc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=d[p],x=c[p];g!==0&&(Oh.fromBufferAttribute(x,e),h?wc.addScaledVector(Oh,g):wc.addScaledVector(Oh.sub(i),g))}i.add(wc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),bc.copy(s.boundingSphere),bc.applyMatrix4(c),_r.copy(e.ray).recast(e.near),!(bc.containsPoint(_r.origin)===!1&&(_r.intersectSphere(bc,o_)===null||_r.origin.distanceToSquared(o_)>(e.far-e.near)**2))&&(s_.copy(c).invert(),_r.copy(e.ray).applyMatrix4(s_),!(s.boundingBox!==null&&_r.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,_r)))}_computeIntersections(e,i,s){let l;const c=this.geometry,h=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,x=c.attributes.normal,v=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,A=v.length;E<A;E++){const y=v[E],_=h[y.materialIndex],O=Math.max(y.start,M.start),U=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let C=O,H=U;C<H;C+=3){const k=d.getX(C),I=d.getX(C+1),q=d.getX(C+2);l=Dc(this,_,e,s,m,g,x,k,I,q),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let y=E,_=A;y<_;y+=3){const O=d.getX(y),U=d.getX(y+1),C=d.getX(y+2);l=Dc(this,h,e,s,m,g,x,O,U,C),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let E=0,A=v.length;E<A;E++){const y=v[E],_=h[y.materialIndex],O=Math.max(y.start,M.start),U=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let C=O,H=U;C<H;C+=3){const k=C,I=C+1,q=C+2;l=Dc(this,_,e,s,m,g,x,k,I,q),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),A=Math.min(p.count,M.start+M.count);for(let y=E,_=A;y<_;y+=3){const O=y,U=y+1,C=y+2;l=Dc(this,h,e,s,m,g,x,O,U,C),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function OM(r,e,i,s,l,c,h,d){let p;if(e.side===Fn?p=s.intersectTriangle(h,c,l,!0,d):p=s.intersectTriangle(l,c,h,e.side===ja,d),p===null)return null;Cc.copy(d),Cc.applyMatrix4(r.matrixWorld);const m=i.ray.origin.distanceTo(Cc);return m<i.near||m>i.far?null:{distance:m,point:Cc.clone(),object:r}}function Dc(r,e,i,s,l,c,h,d,p,m){r.getVertexPosition(d,Tc),r.getVertexPosition(p,Ac),r.getVertexPosition(m,Rc);const g=OM(r,e,i,s,Tc,Ac,Rc,l_);if(g){const x=new se;mi.getBarycoord(l_,Tc,Ac,Rc,x),l&&(g.uv=mi.getInterpolatedAttribute(l,d,p,m,x,new Ft)),c&&(g.uv1=mi.getInterpolatedAttribute(c,d,p,m,x,new Ft)),h&&(g.normal=mi.getInterpolatedAttribute(h,d,p,m,x,new se),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:p,c:m,normal:new se,materialIndex:0};mi.getNormal(Tc,Ac,Rc,v.normal),g.face=v,g.barycoord=x}return g}class zs extends Lr{constructor(e=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const p=[],m=[],g=[],x=[];let v=0,M=0;E("z","y","x",-1,-1,s,i,e,h,c,0),E("z","y","x",1,-1,s,i,-e,h,c,1),E("x","z","y",1,1,e,s,i,l,h,2),E("x","z","y",1,-1,e,s,-i,l,h,3),E("x","y","z",1,-1,e,i,s,l,c,4),E("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new Rr(m,3)),this.setAttribute("normal",new Rr(g,3)),this.setAttribute("uv",new Rr(x,2));function E(A,y,_,O,U,C,H,k,I,q,D){const w=C/I,V=H/q,ce=C/2,oe=H/2,xe=k/2,de=I+1,B=q+1;let K=0,Y=0;const Ee=new se;for(let N=0;N<B;N++){const ee=N*V-oe;for(let ye=0;ye<de;ye++){const Me=ye*w-ce;Ee[A]=Me*O,Ee[y]=ee*U,Ee[_]=xe,m.push(Ee.x,Ee.y,Ee.z),Ee[A]=0,Ee[y]=0,Ee[_]=k>0?1:-1,g.push(Ee.x,Ee.y,Ee.z),x.push(ye/I),x.push(1-N/q),K+=1}}for(let N=0;N<q;N++)for(let ee=0;ee<I;ee++){const ye=v+ee+de*N,Me=v+ee+de*(N+1),J=v+(ee+1)+de*(N+1),me=v+(ee+1)+de*N;p.push(ye,Me,me),p.push(Me,J,me),Y+=6}d.addGroup(M,Y,D),M+=Y,v+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Os(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Un(r){const e={};for(let i=0;i<r.length;i++){const s=Os(r[i]);for(const l in s)e[l]=s[l]}return e}function PM(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function _v(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const BM={clone:Os,merge:Un};var zM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,IM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ya extends eu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zM,this.fragmentShader=IM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=PM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class vv extends Qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=ia}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Va=new se,c_=new Ft,u_=new Ft;class oi extends vv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Ud*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ph*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ud*2*Math.atan(Math.tan(ph*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Va.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Va.x,Va.y).multiplyScalar(-e/Va.z),Va.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Va.x,Va.y).multiplyScalar(-e/Va.z)}getViewSize(e,i){return this.getViewBounds(e,c_,u_),i.subVectors(u_,c_)}setViewOffset(e,i,s,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(ph*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;c+=h.offsetX*l/p,i-=h.offsetY*s/m,l*=h.width/p,s*=h.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ss=-90,Ms=1;class FM extends Qn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new oi(Ss,Ms,e,i);l.layers=this.layers,this.add(l);const c=new oi(Ss,Ms,e,i);c.layers=this.layers,this.add(c);const h=new oi(Ss,Ms,e,i);h.layers=this.layers,this.add(h);const d=new oi(Ss,Ms,e,i);d.layers=this.layers,this.add(d);const p=new oi(Ss,Ms,e,i);p.layers=this.layers,this.add(p);const m=new oi(Ss,Ms,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,p]=i;for(const m of i)this.remove(m);if(e===ia)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Zc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,p,m,g]=this.children,x=e.getRenderTarget(),v=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,p),e.setRenderTarget(s,4,l),e.render(i,m),s.texture.generateMipmaps=A,e.setRenderTarget(s,5,l),e.render(i,g),e.setRenderTarget(x,v,M),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class xv extends Hn{constructor(e=[],i=Us,s,l,c,h,d,p,m,g){super(e,i,s,l,c,h,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class HM extends Cr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new xv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ai}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new zs(5,5,5),c=new Ya({name:"CubemapFromEquirect",uniforms:Os(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Fn,blending:Wa});c.uniforms.tEquirect.value=i;const h=new Ri(l,c),d=i.minFilter;return i.minFilter===Ar&&(i.minFilter=Ai),new FM(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(c)}}class Uc extends Qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const GM={type:"move"};class Ph{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Uc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Uc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Uc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){h=!0;for(const A of e.hand.values()){const y=i.getJointPose(A,s),_=this._getHandJoint(m,A);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],v=g.position.distanceTo(x.position),M=.02,E=.005;m.inputState.pinching&&v>M+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=M-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(GM)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Uc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class VM extends Qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ca,this.environmentIntensity=1,this.environmentRotation=new ca,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Bh=new se,kM=new se,XM=new st;class Sr{constructor(e=new se(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Bh.subVectors(s,i).cross(kM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Bh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||XM.getNormalMatrix(e),l=this.coplanarPoint(Bh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new Yd,Lc=new se;class yv{constructor(e=new Sr,i=new Sr,s=new Sr,l=new Sr,c=new Sr,h=new Sr){this.planes=[e,i,s,l,c,h]}set(e,i,s,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ia){const s=this.planes,l=e.elements,c=l[0],h=l[1],d=l[2],p=l[3],m=l[4],g=l[5],x=l[6],v=l[7],M=l[8],E=l[9],A=l[10],y=l[11],_=l[12],O=l[13],U=l[14],C=l[15];if(s[0].setComponents(p-c,v-m,y-M,C-_).normalize(),s[1].setComponents(p+c,v+m,y+M,C+_).normalize(),s[2].setComponents(p+h,v+g,y+E,C+O).normalize(),s[3].setComponents(p-h,v-g,y-E,C-O).normalize(),s[4].setComponents(p-d,v-x,y-A,C-U).normalize(),i===ia)s[5].setComponents(p+d,v+x,y+A,C+U).normalize();else if(i===Zc)s[5].setComponents(d,x,A,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),vr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){return vr.center.set(0,0,0),vr.radius=.7071067811865476,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Lc.x=l.normal.x>0?e.max.x:e.min.x,Lc.y=l.normal.y>0?e.max.y:e.min.y,Lc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Lc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sv extends Hn{constructor(e,i,s=wr,l,c,h,d=_i,p=_i,m,g=jo){if(g!==jo&&g!==Yo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,c,h,d,p,g,s,m),this.isDepthTexture=!0,this.image={width:e,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class tu extends Lr{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(s),p=Math.floor(l),m=d+1,g=p+1,x=e/d,v=i/p,M=[],E=[],A=[],y=[];for(let _=0;_<g;_++){const O=_*v-h;for(let U=0;U<m;U++){const C=U*x-c;E.push(C,-O,0),A.push(0,0,1),y.push(U/d),y.push(1-_/p)}}for(let _=0;_<p;_++)for(let O=0;O<d;O++){const U=O+m*_,C=O+m*(_+1),H=O+1+m*(_+1),k=O+1+m*_;M.push(U,C,k),M.push(C,H,k)}this.setIndex(M),this.setAttribute("position",new Rr(E,3)),this.setAttribute("normal",new Rr(A,3)),this.setAttribute("uv",new Rr(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tu(e.width,e.height,e.widthSegments,e.heightSegments)}}class WM extends eu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qM extends eu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class jM extends vv{constructor(e=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,h=s+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,h=c+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class YM extends oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function f_(r,e,i,s){const l=ZM(s);switch(i){case rv:return r*e;case ov:return r*e/l.components*l.byteLength;case Xd:return r*e/l.components*l.byteLength;case lv:return r*e*2/l.components*l.byteLength;case Wd:return r*e*2/l.components*l.byteLength;case sv:return r*e*3/l.components*l.byteLength;case gi:return r*e*4/l.components*l.byteLength;case qd:return r*e*4/l.components*l.byteLength;case Fc:case Hc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Gc:case Vc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case sd:case ld:return Math.max(r,16)*Math.max(e,8)/4;case rd:case od:return Math.max(r,8)*Math.max(e,8)/2;case cd:case ud:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case fd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case hd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case dd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case pd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case md:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case gd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case _d:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case vd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case xd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case yd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Sd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Md:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ed:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case bd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Td:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case kc:case Ad:case Rd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case cv:case wd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Cd:case Dd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ZM(r){switch(r){case la:case nv:return{byteLength:1,components:1};case Wo:case iv:case Jo:return{byteLength:2,components:1};case Vd:case kd:return{byteLength:2,components:4};case wr:case Gd:case na:return{byteLength:4,components:1};case av:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Mv(){let r=null,e=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function KM(r){const e=new WeakMap;function i(d,p){const m=d.array,g=d.usage,x=m.byteLength,v=r.createBuffer();r.bindBuffer(p,v),r.bufferData(p,m,g),d.onUploadCallback();let M;if(m instanceof Float32Array)M=r.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=r.SHORT;else if(m instanceof Uint32Array)M=r.UNSIGNED_INT;else if(m instanceof Int32Array)M=r.INT;else if(m instanceof Int8Array)M=r.BYTE;else if(m instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:x}}function s(d,p,m){const g=p.array,x=p.updateRanges;if(r.bindBuffer(m,d),x.length===0)r.bufferSubData(m,0,g);else{x.sort((M,E)=>M.start-E.start);let v=0;for(let M=1;M<x.length;M++){const E=x[v],A=x[M];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++v,x[v]=A)}x.length=v+1;for(let M=0,E=x.length;M<E;M++){const A=x[M];r.bufferSubData(m,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(r.deleteBuffer(p.buffer),e.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:h}}var QM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,JM=`#ifdef USE_ALPHAHASH
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
#endif`,$M=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iE=`#ifdef USE_AOMAP
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
#endif`,aE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rE=`#ifdef USE_BATCHING
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
#endif`,sE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uE=`#ifdef USE_IRIDESCENCE
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
#endif`,fE=`#ifdef USE_BUMPMAP
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
#endif`,hE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_E=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,yE=`#define PI 3.141592653589793
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
} // validated`,SE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ME=`vec3 transformedNormal = objectNormal;
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
#endif`,EE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,TE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RE="gl_FragColor = linearToOutputTexel( gl_FragColor );",wE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,CE=`#ifdef USE_ENVMAP
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
#endif`,DE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,UE=`#ifdef USE_ENVMAP
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
#endif`,LE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,NE=`#ifdef USE_ENVMAP
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
#endif`,OE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IE=`#ifdef USE_GRADIENTMAP
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
}`,FE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,VE=`uniform bool receiveShadow;
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
#endif`,kE=`#ifdef USE_ENVMAP
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
#endif`,XE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,WE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YE=`PhysicalMaterial material;
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
#endif`,ZE=`struct PhysicalMaterial {
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
}`,KE=`
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
#endif`,QE=`#if defined( RE_IndirectDiffuse )
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
#endif`,JE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$E=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ib=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ab=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sb=`#if defined( USE_POINTS_UV )
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
#endif`,ob=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ub=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hb=`#ifdef USE_MORPHTARGETS
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
#endif`,db=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_b=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xb=`#ifdef USE_NORMALMAP
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
#endif`,yb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Eb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ab=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Db=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ub=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ob=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pb=`float getShadowMask() {
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
}`,Bb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zb=`#ifdef USE_SKINNING
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
#endif`,Ib=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fb=`#ifdef USE_SKINNING
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
#endif`,Hb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xb=`#ifdef USE_TRANSMISSION
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
#endif`,Wb=`#ifdef USE_TRANSMISSION
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
#endif`,qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qb=`uniform sampler2D t2D;
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
}`,Jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$b=`#ifdef ENVMAP_TYPE_CUBE
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
}`,eT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nT=`#include <common>
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
}`,iT=`#if DEPTH_PACKING == 3200
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
}`,aT=`#define DISTANCE
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
}`,rT=`#define DISTANCE
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
}`,sT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lT=`uniform float scale;
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
}`,cT=`uniform vec3 diffuse;
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
}`,uT=`#include <common>
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
}`,fT=`uniform vec3 diffuse;
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
}`,hT=`#define LAMBERT
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
}`,dT=`#define LAMBERT
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
}`,pT=`#define MATCAP
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
}`,mT=`#define MATCAP
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
}`,gT=`#define NORMAL
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
}`,_T=`#define NORMAL
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
}`,vT=`#define PHONG
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
}`,xT=`#define PHONG
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
}`,yT=`#define STANDARD
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
}`,ST=`#define STANDARD
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
}`,MT=`#define TOON
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
}`,ET=`#define TOON
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
}`,bT=`uniform float size;
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
}`,TT=`uniform vec3 diffuse;
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
}`,AT=`#include <common>
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
}`,RT=`uniform vec3 color;
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
}`,wT=`uniform float rotation;
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
}`,CT=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:QM,alphahash_pars_fragment:JM,alphamap_fragment:$M,alphamap_pars_fragment:eE,alphatest_fragment:tE,alphatest_pars_fragment:nE,aomap_fragment:iE,aomap_pars_fragment:aE,batching_pars_vertex:rE,batching_vertex:sE,begin_vertex:oE,beginnormal_vertex:lE,bsdfs:cE,iridescence_fragment:uE,bumpmap_pars_fragment:fE,clipping_planes_fragment:hE,clipping_planes_pars_fragment:dE,clipping_planes_pars_vertex:pE,clipping_planes_vertex:mE,color_fragment:gE,color_pars_fragment:_E,color_pars_vertex:vE,color_vertex:xE,common:yE,cube_uv_reflection_fragment:SE,defaultnormal_vertex:ME,displacementmap_pars_vertex:EE,displacementmap_vertex:bE,emissivemap_fragment:TE,emissivemap_pars_fragment:AE,colorspace_fragment:RE,colorspace_pars_fragment:wE,envmap_fragment:CE,envmap_common_pars_fragment:DE,envmap_pars_fragment:UE,envmap_pars_vertex:LE,envmap_physical_pars_fragment:kE,envmap_vertex:NE,fog_vertex:OE,fog_pars_vertex:PE,fog_fragment:BE,fog_pars_fragment:zE,gradientmap_pars_fragment:IE,lightmap_pars_fragment:FE,lights_lambert_fragment:HE,lights_lambert_pars_fragment:GE,lights_pars_begin:VE,lights_toon_fragment:XE,lights_toon_pars_fragment:WE,lights_phong_fragment:qE,lights_phong_pars_fragment:jE,lights_physical_fragment:YE,lights_physical_pars_fragment:ZE,lights_fragment_begin:KE,lights_fragment_maps:QE,lights_fragment_end:JE,logdepthbuf_fragment:$E,logdepthbuf_pars_fragment:eb,logdepthbuf_pars_vertex:tb,logdepthbuf_vertex:nb,map_fragment:ib,map_pars_fragment:ab,map_particle_fragment:rb,map_particle_pars_fragment:sb,metalnessmap_fragment:ob,metalnessmap_pars_fragment:lb,morphinstance_vertex:cb,morphcolor_vertex:ub,morphnormal_vertex:fb,morphtarget_pars_vertex:hb,morphtarget_vertex:db,normal_fragment_begin:pb,normal_fragment_maps:mb,normal_pars_fragment:gb,normal_pars_vertex:_b,normal_vertex:vb,normalmap_pars_fragment:xb,clearcoat_normal_fragment_begin:yb,clearcoat_normal_fragment_maps:Sb,clearcoat_pars_fragment:Mb,iridescence_pars_fragment:Eb,opaque_fragment:bb,packing:Tb,premultiplied_alpha_fragment:Ab,project_vertex:Rb,dithering_fragment:wb,dithering_pars_fragment:Cb,roughnessmap_fragment:Db,roughnessmap_pars_fragment:Ub,shadowmap_pars_fragment:Lb,shadowmap_pars_vertex:Nb,shadowmap_vertex:Ob,shadowmask_pars_fragment:Pb,skinbase_vertex:Bb,skinning_pars_vertex:zb,skinning_vertex:Ib,skinnormal_vertex:Fb,specularmap_fragment:Hb,specularmap_pars_fragment:Gb,tonemapping_fragment:Vb,tonemapping_pars_fragment:kb,transmission_fragment:Xb,transmission_pars_fragment:Wb,uv_pars_fragment:qb,uv_pars_vertex:jb,uv_vertex:Yb,worldpos_vertex:Zb,background_vert:Kb,background_frag:Qb,backgroundCube_vert:Jb,backgroundCube_frag:$b,cube_vert:eT,cube_frag:tT,depth_vert:nT,depth_frag:iT,distanceRGBA_vert:aT,distanceRGBA_frag:rT,equirect_vert:sT,equirect_frag:oT,linedashed_vert:lT,linedashed_frag:cT,meshbasic_vert:uT,meshbasic_frag:fT,meshlambert_vert:hT,meshlambert_frag:dT,meshmatcap_vert:pT,meshmatcap_frag:mT,meshnormal_vert:gT,meshnormal_frag:_T,meshphong_vert:vT,meshphong_frag:xT,meshphysical_vert:yT,meshphysical_frag:ST,meshtoon_vert:MT,meshtoon_frag:ET,points_vert:bT,points_frag:TT,shadow_vert:AT,shadow_frag:RT,sprite_vert:wT,sprite_frag:CT},Ue={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Ti={basic:{uniforms:Un([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Un([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Pt(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Un([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Un([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Un([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Pt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Un([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Un([Ue.points,Ue.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Un([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Un([Ue.common,Ue.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Un([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Un([Ue.sprite,Ue.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:Un([Ue.common,Ue.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:Un([Ue.lights,Ue.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Ti.physical={uniforms:Un([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const Nc={r:0,b:0,g:0},xr=new ca,DT=new sn;function UT(r,e,i,s,l,c,h){const d=new Pt(0);let p=c===!0?0:1,m,g,x=null,v=0,M=null;function E(U){let C=U.isScene===!0?U.background:null;return C&&C.isTexture&&(C=(U.backgroundBlurriness>0?i:e).get(C)),C}function A(U){let C=!1;const H=E(U);H===null?_(d,p):H&&H.isColor&&(_(H,1),C=!0);const k=r.xr.getEnvironmentBlendMode();k==="additive"?s.buffers.color.setClear(0,0,0,1,h):k==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||C)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(U,C){const H=E(C);H&&(H.isCubeTexture||H.mapping===$c)?(g===void 0&&(g=new Ri(new zs(1,1,1),new Ya({name:"BackgroundCubeMaterial",uniforms:Os(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(k,I,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),xr.copy(C.backgroundRotation),xr.x*=-1,xr.y*=-1,xr.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),g.material.uniforms.envMap.value=H,g.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(DT.makeRotationFromEuler(xr)),g.material.toneMapped=Tt.getTransfer(H.colorSpace)!==Ot,(x!==H||v!==H.version||M!==r.toneMapping)&&(g.material.needsUpdate=!0,x=H,v=H.version,M=r.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):H&&H.isTexture&&(m===void 0&&(m=new Ri(new tu(2,2),new Ya({name:"BackgroundMaterial",uniforms:Os(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:ja,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=H,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(H.colorSpace)!==Ot,H.matrixAutoUpdate===!0&&H.updateMatrix(),m.material.uniforms.uvTransform.value.copy(H.matrix),(x!==H||v!==H.version||M!==r.toneMapping)&&(m.material.needsUpdate=!0,x=H,v=H.version,M=r.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function _(U,C){U.getRGB(Nc,_v(r)),s.buffers.color.setClear(Nc.r,Nc.g,Nc.b,C,h)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,C=1){d.set(U),p=C,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,_(d,p)},render:A,addToRenderList:y,dispose:O}}function LT(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=v(null);let c=l,h=!1;function d(w,V,ce,oe,xe){let de=!1;const B=x(oe,ce,V);c!==B&&(c=B,m(c.object)),de=M(w,oe,ce,xe),de&&E(w,oe,ce,xe),xe!==null&&e.update(xe,r.ELEMENT_ARRAY_BUFFER),(de||h)&&(h=!1,C(w,V,ce,oe),xe!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(xe).buffer))}function p(){return r.createVertexArray()}function m(w){return r.bindVertexArray(w)}function g(w){return r.deleteVertexArray(w)}function x(w,V,ce){const oe=ce.wireframe===!0;let xe=s[w.id];xe===void 0&&(xe={},s[w.id]=xe);let de=xe[V.id];de===void 0&&(de={},xe[V.id]=de);let B=de[oe];return B===void 0&&(B=v(p()),de[oe]=B),B}function v(w){const V=[],ce=[],oe=[];for(let xe=0;xe<i;xe++)V[xe]=0,ce[xe]=0,oe[xe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ce,attributeDivisors:oe,object:w,attributes:{},index:null}}function M(w,V,ce,oe){const xe=c.attributes,de=V.attributes;let B=0;const K=ce.getAttributes();for(const Y in K)if(K[Y].location>=0){const N=xe[Y];let ee=de[Y];if(ee===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(ee=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(ee=w.instanceColor)),N===void 0||N.attribute!==ee||ee&&N.data!==ee.data)return!0;B++}return c.attributesNum!==B||c.index!==oe}function E(w,V,ce,oe){const xe={},de=V.attributes;let B=0;const K=ce.getAttributes();for(const Y in K)if(K[Y].location>=0){let N=de[Y];N===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(N=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(N=w.instanceColor));const ee={};ee.attribute=N,N&&N.data&&(ee.data=N.data),xe[Y]=ee,B++}c.attributes=xe,c.attributesNum=B,c.index=oe}function A(){const w=c.newAttributes;for(let V=0,ce=w.length;V<ce;V++)w[V]=0}function y(w){_(w,0)}function _(w,V){const ce=c.newAttributes,oe=c.enabledAttributes,xe=c.attributeDivisors;ce[w]=1,oe[w]===0&&(r.enableVertexAttribArray(w),oe[w]=1),xe[w]!==V&&(r.vertexAttribDivisor(w,V),xe[w]=V)}function O(){const w=c.newAttributes,V=c.enabledAttributes;for(let ce=0,oe=V.length;ce<oe;ce++)V[ce]!==w[ce]&&(r.disableVertexAttribArray(ce),V[ce]=0)}function U(w,V,ce,oe,xe,de,B){B===!0?r.vertexAttribIPointer(w,V,ce,xe,de):r.vertexAttribPointer(w,V,ce,oe,xe,de)}function C(w,V,ce,oe){A();const xe=oe.attributes,de=ce.getAttributes(),B=V.defaultAttributeValues;for(const K in de){const Y=de[K];if(Y.location>=0){let Ee=xe[K];if(Ee===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(Ee=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(Ee=w.instanceColor)),Ee!==void 0){const N=Ee.normalized,ee=Ee.itemSize,ye=e.get(Ee);if(ye===void 0)continue;const Me=ye.buffer,J=ye.type,me=ye.bytesPerElement,Se=J===r.INT||J===r.UNSIGNED_INT||Ee.gpuType===Gd;if(Ee.isInterleavedBufferAttribute){const Re=Ee.data,Le=Re.stride,ot=Ee.offset;if(Re.isInstancedInterleavedBuffer){for(let Ke=0;Ke<Y.locationSize;Ke++)_(Y.location+Ke,Re.meshPerAttribute);w.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let Ke=0;Ke<Y.locationSize;Ke++)y(Y.location+Ke);r.bindBuffer(r.ARRAY_BUFFER,Me);for(let Ke=0;Ke<Y.locationSize;Ke++)U(Y.location+Ke,ee/Y.locationSize,J,N,Le*me,(ot+ee/Y.locationSize*Ke)*me,Se)}else{if(Ee.isInstancedBufferAttribute){for(let Re=0;Re<Y.locationSize;Re++)_(Y.location+Re,Ee.meshPerAttribute);w.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Re=0;Re<Y.locationSize;Re++)y(Y.location+Re);r.bindBuffer(r.ARRAY_BUFFER,Me);for(let Re=0;Re<Y.locationSize;Re++)U(Y.location+Re,ee/Y.locationSize,J,N,ee*me,ee/Y.locationSize*Re*me,Se)}}else if(B!==void 0){const N=B[K];if(N!==void 0)switch(N.length){case 2:r.vertexAttrib2fv(Y.location,N);break;case 3:r.vertexAttrib3fv(Y.location,N);break;case 4:r.vertexAttrib4fv(Y.location,N);break;default:r.vertexAttrib1fv(Y.location,N)}}}}O()}function H(){q();for(const w in s){const V=s[w];for(const ce in V){const oe=V[ce];for(const xe in oe)g(oe[xe].object),delete oe[xe];delete V[ce]}delete s[w]}}function k(w){if(s[w.id]===void 0)return;const V=s[w.id];for(const ce in V){const oe=V[ce];for(const xe in oe)g(oe[xe].object),delete oe[xe];delete V[ce]}delete s[w.id]}function I(w){for(const V in s){const ce=s[V];if(ce[w.id]===void 0)continue;const oe=ce[w.id];for(const xe in oe)g(oe[xe].object),delete oe[xe];delete ce[w.id]}}function q(){D(),h=!0,c!==l&&(c=l,m(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:D,dispose:H,releaseStatesOfGeometry:k,releaseStatesOfProgram:I,initAttributes:A,enableAttribute:y,disableUnusedAttributes:O}}function NT(r,e,i){let s;function l(m){s=m}function c(m,g){r.drawArrays(s,m,g),i.update(g,s,1)}function h(m,g,x){x!==0&&(r.drawArraysInstanced(s,m,g,x),i.update(g,s,x))}function d(m,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,g,0,x);let M=0;for(let E=0;E<x;E++)M+=g[E];i.update(M,s,1)}function p(m,g,x,v){if(x===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<m.length;E++)h(m[E],g[E],v[E]);else{M.multiDrawArraysInstancedWEBGL(s,m,0,g,0,v,0,x);let E=0;for(let A=0;A<x;A++)E+=g[A]*v[A];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function OT(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==gi&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const q=I===Jo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==la&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==na&&!q)}function p(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const x=i.logarithmicDepthBuffer===!0,v=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),O=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),H=E>0,k=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:x,reverseDepthBuffer:v,maxTextures:M,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:O,maxVaryings:U,maxFragmentUniforms:C,vertexTextures:H,maxSamples:k}}function PT(r){const e=this;let i=null,s=0,l=!1,c=!1;const h=new Sr,d=new st,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const M=x.length!==0||v||s!==0||l;return l=v,s=x.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,v){i=g(x,v,0)},this.setState=function(x,v,M){const E=x.clippingPlanes,A=x.clipIntersection,y=x.clipShadows,_=r.get(x);if(!l||E===null||E.length===0||c&&!y)c?g(null):m();else{const O=c?0:s,U=O*4;let C=_.clippingState||null;p.value=C,C=g(E,v,U,M);for(let H=0;H!==U;++H)C[H]=i[H];_.clippingState=C,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=O}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(x,v,M,E){const A=x!==null?x.length:0;let y=null;if(A!==0){if(y=p.value,E!==!0||y===null){const _=M+A*4,O=v.matrixWorldInverse;d.getNormalMatrix(O),(y===null||y.length<_)&&(y=new Float32Array(_));for(let U=0,C=M;U!==A;++U,C+=4)h.copy(x[U]).applyMatrix4(O,d),h.normal.toArray(y,C),y[C+3]=h.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}function BT(r){let e=new WeakMap;function i(h,d){return d===td?h.mapping=Us:d===nd&&(h.mapping=Ls),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===td||d===nd)if(e.has(h)){const p=e.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new HM(p.height);return m.fromEquirectangularTexture(r,h),e.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const As=4,h_=[.125,.215,.35,.446,.526,.582],br=20,zh=new jM,d_=new Pt;let Ih=null,Fh=0,Hh=0,Gh=!1;const Mr=(1+Math.sqrt(5))/2,Es=1/Mr,p_=[new se(-Mr,Es,0),new se(Mr,Es,0),new se(-Es,0,Mr),new se(Es,0,Mr),new se(0,Mr,-Es),new se(0,Mr,Es),new se(-1,1,-1),new se(1,1,-1),new se(-1,1,1),new se(1,1,1)],zT=new se;class m_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=zT}=c;Ih=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Hh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,s,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=v_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=__(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ih,Fh,Hh),this._renderer.xr.enabled=Gh,e.scissorTest=!1,Oc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Us||e.mapping===Ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ih=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Hh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ai,minFilter:Ai,generateMipmaps:!1,type:Jo,format:gi,colorSpace:Ns,depthBuffer:!1},l=g_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=g_(e,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=IT(c)),this._blurMaterial=FT(c,e,i)}return l}_compileMaterial(e){const i=new Ri(this._lodPlanes[0],e);this._renderer.compile(i,zh)}_sceneToCubeUV(e,i,s,l,c){const p=new oi(90,1,i,s),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,v=x.autoClear,M=x.toneMapping;x.getClearColor(d_),x.toneMapping=qa,x.autoClear=!1;const E=new Zd({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),A=new Ri(new zs,E);let y=!1;const _=e.background;_?_.isColor&&(E.color.copy(_),e.background=null,y=!0):(E.color.copy(d_),y=!0);for(let O=0;O<6;O++){const U=O%3;U===0?(p.up.set(0,m[O],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[O],c.y,c.z)):U===1?(p.up.set(0,0,m[O]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[O],c.z)):(p.up.set(0,m[O],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[O]));const C=this._cubeSize;Oc(l,U*C,O>2?C:0,C,C),x.setRenderTarget(l),y&&x.render(A,p),x.render(e,p)}A.geometry.dispose(),A.material.dispose(),x.toneMapping=M,x.autoClear=v,e.background=_}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Us||e.mapping===Ls;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=v_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=__());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new Ri(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;Oc(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(h,zh)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=p_[(l-c-1)%p_.length];this._blur(e,c-1,c,h,d)}i.autoClear=s}_blur(e,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",c),this._halfBlur(h,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new Ri(this._lodPlanes[l],m),v=m.uniforms,M=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*br-1),A=c/E,y=isFinite(c)?1+Math.floor(g*A):br;y>br&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${br}`);const _=[];let O=0;for(let I=0;I<br;++I){const q=I/A,D=Math.exp(-q*q/2);_.push(D),I===0?O+=D:I<y&&(O+=2*D)}for(let I=0;I<_.length;I++)_[I]=_[I]/O;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=_,v.latitudinal.value=h==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:U}=this;v.dTheta.value=E,v.mipInt.value=U-s;const C=this._sizeLods[l],H=3*C*(l>U-As?l-U+As:0),k=4*(this._cubeSize-C);Oc(i,H,k,3*C,2*C),p.setRenderTarget(i),p.render(x,zh)}}function IT(r){const e=[],i=[],s=[];let l=r;const c=r-As+1+h_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>r-As?p=h_[h-r+As-1]:h===0&&(p=0),s.push(p);const m=1/(d-2),g=-m,x=1+m,v=[g,g,x,g,x,x,g,g,x,x,g,x],M=6,E=6,A=3,y=2,_=1,O=new Float32Array(A*E*M),U=new Float32Array(y*E*M),C=new Float32Array(_*E*M);for(let k=0;k<M;k++){const I=k%3*2/3-1,q=k>2?0:-1,D=[I,q,0,I+2/3,q,0,I+2/3,q+1,0,I,q,0,I+2/3,q+1,0,I,q+1,0];O.set(D,A*E*k),U.set(v,y*E*k);const w=[k,k,k,k,k,k];C.set(w,_*E*k)}const H=new Lr;H.setAttribute("position",new wi(O,A)),H.setAttribute("uv",new wi(U,y)),H.setAttribute("faceIndex",new wi(C,_)),e.push(H),l>As&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function g_(r,e,i){const s=new Cr(r,e,i);return s.texture.mapping=$c,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Oc(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function FT(r,e,i){const s=new Float32Array(br),l=new se(0,1,0);return new Ya({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Kd(),fragmentShader:`

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
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function __(){return new Ya({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kd(),fragmentShader:`

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
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function v_(){return new Ya({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function Kd(){return`

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
	`}function HT(r){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===td||p===nd,g=p===Us||p===Ls;if(m||g){let x=e.get(d);const v=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return i===null&&(i=new m_(r)),x=m?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{const M=d.image;return m&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new m_(r)),x=m?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",c),x.texture):null}}}return d}function l(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function GT(r){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Xc("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function VT(r,e,i,s){const l={},c=new WeakMap;function h(x){const v=x.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",h),delete l[v.id];const M=c.get(v);M&&(e.remove(M),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(x,v){return l[v.id]===!0||(v.addEventListener("dispose",h),l[v.id]=!0,i.memory.geometries++),v}function p(x){const v=x.attributes;for(const M in v)e.update(v[M],r.ARRAY_BUFFER)}function m(x){const v=[],M=x.index,E=x.attributes.position;let A=0;if(M!==null){const O=M.array;A=M.version;for(let U=0,C=O.length;U<C;U+=3){const H=O[U+0],k=O[U+1],I=O[U+2];v.push(H,k,k,I,I,H)}}else if(E!==void 0){const O=E.array;A=E.version;for(let U=0,C=O.length/3-1;U<C;U+=3){const H=U+0,k=U+1,I=U+2;v.push(H,k,k,I,I,H)}}else return;const y=new(fv(v)?gv:mv)(v,1);y.version=A;const _=c.get(x);_&&e.remove(_),c.set(x,y)}function g(x){const v=c.get(x);if(v){const M=x.index;M!==null&&v.version<M.version&&m(x)}else m(x);return c.get(x)}return{get:d,update:p,getWireframeAttribute:g}}function kT(r,e,i){let s;function l(v){s=v}let c,h;function d(v){c=v.type,h=v.bytesPerElement}function p(v,M){r.drawElements(s,M,c,v*h),i.update(M,s,1)}function m(v,M,E){E!==0&&(r.drawElementsInstanced(s,M,c,v*h,E),i.update(M,s,E))}function g(v,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,v,0,E);let y=0;for(let _=0;_<E;_++)y+=M[_];i.update(y,s,1)}function x(v,M,E,A){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<v.length;_++)m(v[_]/h,M[_],A[_]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,c,v,0,A,0,E);let _=0;for(let O=0;O<E;O++)_+=M[O]*A[O];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function XT(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function WT(r,e,i){const s=new WeakMap,l=new $t;function c(h,d,p){const m=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=g!==void 0?g.length:0;let v=s.get(d);if(v===void 0||v.count!==x){let w=function(){q.dispose(),s.delete(d),d.removeEventListener("dispose",w)};var M=w;v!==void 0&&v.texture.dispose();const E=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let C=0;E===!0&&(C=1),A===!0&&(C=2),y===!0&&(C=3);let H=d.attributes.position.count*C,k=1;H>e.maxTextureSize&&(k=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const I=new Float32Array(H*k*4*x),q=new hv(I,H,k,x);q.type=na,q.needsUpdate=!0;const D=C*4;for(let V=0;V<x;V++){const ce=_[V],oe=O[V],xe=U[V],de=H*k*4*V;for(let B=0;B<ce.count;B++){const K=B*D;E===!0&&(l.fromBufferAttribute(ce,B),I[de+K+0]=l.x,I[de+K+1]=l.y,I[de+K+2]=l.z,I[de+K+3]=0),A===!0&&(l.fromBufferAttribute(oe,B),I[de+K+4]=l.x,I[de+K+5]=l.y,I[de+K+6]=l.z,I[de+K+7]=0),y===!0&&(l.fromBufferAttribute(xe,B),I[de+K+8]=l.x,I[de+K+9]=l.y,I[de+K+10]=l.z,I[de+K+11]=xe.itemSize===4?l.w:1)}}v={count:x,texture:q,size:new Ft(H,k)},s.set(d,v),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let E=0;for(let y=0;y<m.length;y++)E+=m[y];const A=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(r,"morphTargetBaseInfluence",A),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",v.texture,i),p.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function qT(r,e,i,s){let l=new WeakMap;function c(p){const m=s.render.frame,g=p.geometry,x=e.get(p,g);if(l.get(x)!==m&&(e.update(x),l.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const v=p.skeleton;l.get(v)!==m&&(v.update(),l.set(v,m))}return x}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:h}}const Ev=new Hn,x_=new Sv(1,1),bv=new hv,Tv=new MM,Av=new xv,y_=[],S_=[],M_=new Float32Array(16),E_=new Float32Array(9),b_=new Float32Array(4);function Is(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=y_[l];if(c===void 0&&(c=new Float32Array(l),y_[l]=c),e!==0){s.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,r[h].toArray(c,d)}return c}function fn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function hn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function nu(r,e){let i=S_[e];i===void 0&&(i=new Int32Array(e),S_[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function jT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function YT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;r.uniform2fv(this.addr,e),hn(i,e)}}function ZT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(fn(i,e))return;r.uniform3fv(this.addr,e),hn(i,e)}}function KT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;r.uniform4fv(this.addr,e),hn(i,e)}}function QT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(fn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,s))return;b_.set(s),r.uniformMatrix2fv(this.addr,!1,b_),hn(i,s)}}function JT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(fn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,s))return;E_.set(s),r.uniformMatrix3fv(this.addr,!1,E_),hn(i,s)}}function $T(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(fn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,s))return;M_.set(s),r.uniformMatrix4fv(this.addr,!1,M_),hn(i,s)}}function e2(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function t2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;r.uniform2iv(this.addr,e),hn(i,e)}}function n2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;r.uniform3iv(this.addr,e),hn(i,e)}}function i2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;r.uniform4iv(this.addr,e),hn(i,e)}}function a2(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function r2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;r.uniform2uiv(this.addr,e),hn(i,e)}}function s2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;r.uniform3uiv(this.addr,e),hn(i,e)}}function o2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;r.uniform4uiv(this.addr,e),hn(i,e)}}function l2(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(x_.compareFunction=uv,c=x_):c=Ev,i.setTexture2D(e||c,l)}function c2(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Tv,l)}function u2(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Av,l)}function f2(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||bv,l)}function h2(r){switch(r){case 5126:return jT;case 35664:return YT;case 35665:return ZT;case 35666:return KT;case 35674:return QT;case 35675:return JT;case 35676:return $T;case 5124:case 35670:return e2;case 35667:case 35671:return t2;case 35668:case 35672:return n2;case 35669:case 35673:return i2;case 5125:return a2;case 36294:return r2;case 36295:return s2;case 36296:return o2;case 35678:case 36198:case 36298:case 36306:case 35682:return l2;case 35679:case 36299:case 36307:return c2;case 35680:case 36300:case 36308:case 36293:return u2;case 36289:case 36303:case 36311:case 36292:return f2}}function d2(r,e){r.uniform1fv(this.addr,e)}function p2(r,e){const i=Is(e,this.size,2);r.uniform2fv(this.addr,i)}function m2(r,e){const i=Is(e,this.size,3);r.uniform3fv(this.addr,i)}function g2(r,e){const i=Is(e,this.size,4);r.uniform4fv(this.addr,i)}function _2(r,e){const i=Is(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function v2(r,e){const i=Is(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function x2(r,e){const i=Is(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function y2(r,e){r.uniform1iv(this.addr,e)}function S2(r,e){r.uniform2iv(this.addr,e)}function M2(r,e){r.uniform3iv(this.addr,e)}function E2(r,e){r.uniform4iv(this.addr,e)}function b2(r,e){r.uniform1uiv(this.addr,e)}function T2(r,e){r.uniform2uiv(this.addr,e)}function A2(r,e){r.uniform3uiv(this.addr,e)}function R2(r,e){r.uniform4uiv(this.addr,e)}function w2(r,e,i){const s=this.cache,l=e.length,c=nu(i,l);fn(s,c)||(r.uniform1iv(this.addr,c),hn(s,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||Ev,c[h])}function C2(r,e,i){const s=this.cache,l=e.length,c=nu(i,l);fn(s,c)||(r.uniform1iv(this.addr,c),hn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Tv,c[h])}function D2(r,e,i){const s=this.cache,l=e.length,c=nu(i,l);fn(s,c)||(r.uniform1iv(this.addr,c),hn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Av,c[h])}function U2(r,e,i){const s=this.cache,l=e.length,c=nu(i,l);fn(s,c)||(r.uniform1iv(this.addr,c),hn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||bv,c[h])}function L2(r){switch(r){case 5126:return d2;case 35664:return p2;case 35665:return m2;case 35666:return g2;case 35674:return _2;case 35675:return v2;case 35676:return x2;case 5124:case 35670:return y2;case 35667:case 35671:return S2;case 35668:case 35672:return M2;case 35669:case 35673:return E2;case 5125:return b2;case 36294:return T2;case 36295:return A2;case 36296:return R2;case 35678:case 36198:case 36298:case 36306:case 35682:return w2;case 35679:case 36299:case 36307:return C2;case 35680:case 36300:case 36308:case 36293:return D2;case 36289:case 36303:case 36311:case 36292:return U2}}class N2{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=h2(i.type)}}class O2{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=L2(i.type)}}class P2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],s)}}}const Vh=/(\w+)(\])?(\[|\.)?/g;function T_(r,e){r.seq.push(e),r.map[e.id]=e}function B2(r,e,i){const s=r.name,l=s.length;for(Vh.lastIndex=0;;){const c=Vh.exec(s),h=Vh.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){T_(i,m===void 0?new N2(d,r,e):new O2(d,r,e));break}else{let x=i.map[d];x===void 0&&(x=new P2(d),T_(i,x)),i=x}}}class Wc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);B2(c,h,this)}}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],p=s[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function A_(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const z2=37297;let I2=0;function F2(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const R_=new st;function H2(r){Tt._getMatrix(R_,Tt.workingColorSpace,r);const e=`mat3( ${R_.elements.map(i=>i.toFixed(4))} )`;switch(Tt.getTransfer(r)){case Yc:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function w_(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=r.getShaderInfoLog(e).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+F2(r.getShaderSource(e),h)}else return l}function G2(r,e){const i=H2(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function V2(r,e){let i;switch(e){case j1:i="Linear";break;case Y1:i="Reinhard";break;case Z1:i="Cineon";break;case K1:i="ACESFilmic";break;case J1:i="AgX";break;case $1:i="Neutral";break;case Q1:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Pc=new se;function k2(){Tt.getLuminanceCoefficients(Pc);const r=Pc.x.toFixed(4),e=Pc.y.toFixed(4),i=Pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X2(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function W2(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function q2(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(e,h),locationSize:d}}return i}function Vo(r){return r!==""}function C_(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function D_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const j2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ld(r){return r.replace(j2,Z2)}const Y2=new Map;function Z2(r,e){let i=lt[e];if(i===void 0){const s=Y2.get(e);if(s!==void 0)i=lt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Ld(i)}const K2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function U_(r){return r.replace(K2,Q2)}function Q2(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function L_(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function J2(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===$_?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===A1?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ea&&(e="SHADOWMAP_TYPE_VSM"),e}function $2(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Us:case Ls:e="ENVMAP_TYPE_CUBE";break;case $c:e="ENVMAP_TYPE_CUBE_UV";break}return e}function eA(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ls:e="ENVMAP_MODE_REFRACTION";break}return e}function tA(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ev:e="ENVMAP_BLENDING_MULTIPLY";break;case W1:e="ENVMAP_BLENDING_MIX";break;case q1:e="ENVMAP_BLENDING_ADD";break}return e}function nA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:s,maxMip:i}}function iA(r,e,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=J2(i),m=$2(i),g=eA(i),x=tA(i),v=nA(i),M=X2(i),E=W2(c),A=l.createProgram();let y,_,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Vo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Vo).join(`
`),_.length>0&&(_+=`
`)):(y=[L_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),_=[L_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qa?"#define TONE_MAPPING":"",i.toneMapping!==qa?lt.tonemapping_pars_fragment:"",i.toneMapping!==qa?V2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,G2("linearToOutputTexel",i.outputColorSpace),k2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Vo).join(`
`)),h=Ld(h),h=C_(h,i),h=D_(h,i),d=Ld(d),d=C_(d,i),d=D_(d,i),h=U_(h),d=U_(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===j0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===j0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=O+y+h,C=O+_+d,H=A_(l,l.VERTEX_SHADER,U),k=A_(l,l.FRAGMENT_SHADER,C);l.attachShader(A,H),l.attachShader(A,k),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function I(V){if(r.debug.checkShaderErrors){const ce=l.getProgramInfoLog(A).trim(),oe=l.getShaderInfoLog(H).trim(),xe=l.getShaderInfoLog(k).trim();let de=!0,B=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(de=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,A,H,k);else{const K=w_(l,H,"vertex"),Y=w_(l,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ce+`
`+K+`
`+Y)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(oe===""||xe==="")&&(B=!1);B&&(V.diagnostics={runnable:de,programLog:ce,vertexShader:{log:oe,prefix:y},fragmentShader:{log:xe,prefix:_}})}l.deleteShader(H),l.deleteShader(k),q=new Wc(l,A),D=q2(l,A)}let q;this.getUniforms=function(){return q===void 0&&I(this),q};let D;this.getAttributes=function(){return D===void 0&&I(this),D};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(A,z2)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=I2++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=H,this.fragmentShader=k,this}let aA=0;class rA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new sA(e),i.set(e,s)),s}}class sA{constructor(e){this.id=aA++,this.code=e,this.usedTimes=0}}function oA(r,e,i,s,l,c,h){const d=new dv,p=new rA,m=new Set,g=[],x=l.logarithmicDepthBuffer,v=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return m.add(D),D===0?"uv":`uv${D}`}function y(D,w,V,ce,oe){const xe=ce.fog,de=oe.geometry,B=D.isMeshStandardMaterial?ce.environment:null,K=(D.isMeshStandardMaterial?i:e).get(D.envMap||B),Y=K&&K.mapping===$c?K.image.height:null,Ee=E[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const N=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,ee=N!==void 0?N.length:0;let ye=0;de.morphAttributes.position!==void 0&&(ye=1),de.morphAttributes.normal!==void 0&&(ye=2),de.morphAttributes.color!==void 0&&(ye=3);let Me,J,me,Se;if(Ee){const Mt=Ti[Ee];Me=Mt.vertexShader,J=Mt.fragmentShader}else Me=D.vertexShader,J=D.fragmentShader,p.update(D),me=p.getVertexShaderID(D),Se=p.getFragmentShaderID(D);const Re=r.getRenderTarget(),Le=r.state.buffers.depth.getReversed(),ot=oe.isInstancedMesh===!0,Ke=oe.isBatchedMesh===!0,Ht=!!D.map,Bt=!!D.matcap,ft=!!K,F=!!D.aoMap,Ln=!!D.lightMap,gt=!!D.bumpMap,it=!!D.normalMap,We=!!D.displacementMap,Ct=!!D.emissiveMap,Ve=!!D.metalnessMap,L=!!D.roughnessMap,T=D.anisotropy>0,te=D.clearcoat>0,ge=D.dispersion>0,be=D.iridescence>0,fe=D.sheen>0,Pe=D.transmission>0,we=T&&!!D.anisotropyMap,Ge=te&&!!D.clearcoatMap,$e=te&&!!D.clearcoatNormalMap,Ae=te&&!!D.clearcoatRoughnessMap,Fe=be&&!!D.iridescenceMap,Ye=be&&!!D.iridescenceThicknessMap,Qe=fe&&!!D.sheenColorMap,Be=fe&&!!D.sheenRoughnessMap,ct=!!D.specularMap,nt=!!D.specularColorMap,Dt=!!D.specularIntensityMap,X=Pe&&!!D.transmissionMap,Ne=Pe&&!!D.thicknessMap,le=!!D.gradientMap,_e=!!D.alphaMap,ze=D.alphaTest>0,Oe=!!D.alphaHash,at=!!D.extensions;let Gt=qa;D.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(Gt=r.toneMapping);const en={shaderID:Ee,shaderType:D.type,shaderName:D.name,vertexShader:Me,fragmentShader:J,defines:D.defines,customVertexShaderID:me,customFragmentShaderID:Se,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Ke,batchingColor:Ke&&oe._colorsTexture!==null,instancing:ot,instancingColor:ot&&oe.instanceColor!==null,instancingMorph:ot&&oe.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Re===null?r.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:Ns,alphaToCoverage:!!D.alphaToCoverage,map:Ht,matcap:Bt,envMap:ft,envMapMode:ft&&K.mapping,envMapCubeUVHeight:Y,aoMap:F,lightMap:Ln,bumpMap:gt,normalMap:it,displacementMap:v&&We,emissiveMap:Ct,normalMapObjectSpace:it&&D.normalMapType===aM,normalMapTangentSpace:it&&D.normalMapType===iM,metalnessMap:Ve,roughnessMap:L,anisotropy:T,anisotropyMap:we,clearcoat:te,clearcoatMap:Ge,clearcoatNormalMap:$e,clearcoatRoughnessMap:Ae,dispersion:ge,iridescence:be,iridescenceMap:Fe,iridescenceThicknessMap:Ye,sheen:fe,sheenColorMap:Qe,sheenRoughnessMap:Be,specularMap:ct,specularColorMap:nt,specularIntensityMap:Dt,transmission:Pe,transmissionMap:X,thicknessMap:Ne,gradientMap:le,opaque:D.transparent===!1&&D.blending===Rs&&D.alphaToCoverage===!1,alphaMap:_e,alphaTest:ze,alphaHash:Oe,combine:D.combine,mapUv:Ht&&A(D.map.channel),aoMapUv:F&&A(D.aoMap.channel),lightMapUv:Ln&&A(D.lightMap.channel),bumpMapUv:gt&&A(D.bumpMap.channel),normalMapUv:it&&A(D.normalMap.channel),displacementMapUv:We&&A(D.displacementMap.channel),emissiveMapUv:Ct&&A(D.emissiveMap.channel),metalnessMapUv:Ve&&A(D.metalnessMap.channel),roughnessMapUv:L&&A(D.roughnessMap.channel),anisotropyMapUv:we&&A(D.anisotropyMap.channel),clearcoatMapUv:Ge&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:$e&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:Be&&A(D.sheenRoughnessMap.channel),specularMapUv:ct&&A(D.specularMap.channel),specularColorMapUv:nt&&A(D.specularColorMap.channel),specularIntensityMapUv:Dt&&A(D.specularIntensityMap.channel),transmissionMapUv:X&&A(D.transmissionMap.channel),thicknessMapUv:Ne&&A(D.thicknessMap.channel),alphaMapUv:_e&&A(D.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(it||T),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!de.attributes.uv&&(Ht||_e),fog:!!xe,useFog:D.fog===!0,fogExp2:!!xe&&xe.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Le,skinning:oe.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ye,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:Gt,decodeVideoTexture:Ht&&D.map.isVideoTexture===!0&&Tt.getTransfer(D.map.colorSpace)===Ot,decodeVideoTextureEmissive:Ct&&D.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(D.emissiveMap.colorSpace)===Ot,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ta,flipSided:D.side===Fn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:at&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&D.extensions.multiDraw===!0||Ke)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return en.vertexUv1s=m.has(1),en.vertexUv2s=m.has(2),en.vertexUv3s=m.has(3),m.clear(),en}function _(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const V in D.defines)w.push(V),w.push(D.defines[V]);return D.isRawShaderMaterial===!1&&(O(w,D),U(w,D),w.push(r.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function O(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function U(D,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reverseDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),D.push(d.mask)}function C(D){const w=E[D.type];let V;if(w){const ce=Ti[w];V=BM.clone(ce.uniforms)}else V=D.uniforms;return V}function H(D,w){let V;for(let ce=0,oe=g.length;ce<oe;ce++){const xe=g[ce];if(xe.cacheKey===w){V=xe,++V.usedTimes;break}}return V===void 0&&(V=new iA(r,w,D,c),g.push(V)),V}function k(D){if(--D.usedTimes===0){const w=g.indexOf(D);g[w]=g[g.length-1],g.pop(),D.destroy()}}function I(D){p.remove(D)}function q(){p.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:C,acquireProgram:H,releaseProgram:k,releaseShaderCache:I,programs:g,dispose:q}}function lA(){let r=new WeakMap;function e(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,p){r.get(h)[d]=p}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function cA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function N_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function O_(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function h(x,v,M,E,A,y){let _=r[e];return _===void 0?(_={id:x.id,object:x,geometry:v,material:M,groupOrder:E,renderOrder:x.renderOrder,z:A,group:y},r[e]=_):(_.id=x.id,_.object=x,_.geometry=v,_.material=M,_.groupOrder=E,_.renderOrder=x.renderOrder,_.z=A,_.group=y),e++,_}function d(x,v,M,E,A,y){const _=h(x,v,M,E,A,y);M.transmission>0?s.push(_):M.transparent===!0?l.push(_):i.push(_)}function p(x,v,M,E,A,y){const _=h(x,v,M,E,A,y);M.transmission>0?s.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function m(x,v){i.length>1&&i.sort(x||cA),s.length>1&&s.sort(v||N_),l.length>1&&l.sort(v||N_)}function g(){for(let x=e,v=r.length;x<v;x++){const M=r[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:p,finish:g,sort:m}}function uA(){let r=new WeakMap;function e(s,l){const c=r.get(s);let h;return c===void 0?(h=new O_,r.set(s,[h])):l>=c.length?(h=new O_,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:e,dispose:i}}function fA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new se,color:new Pt};break;case"SpotLight":i={position:new se,direction:new se,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new se,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new se,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":i={color:new Pt,position:new se,halfWidth:new se,halfHeight:new se};break}return r[e.id]=i,i}}}function hA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let dA=0;function pA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function mA(r){const e=new fA,i=hA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new se);const l=new se,c=new sn,h=new sn;function d(m){let g=0,x=0,v=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let M=0,E=0,A=0,y=0,_=0,O=0,U=0,C=0,H=0,k=0,I=0;m.sort(pA);for(let D=0,w=m.length;D<w;D++){const V=m[D],ce=V.color,oe=V.intensity,xe=V.distance,de=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=ce.r*oe,x+=ce.g*oe,v+=ce.b*oe;else if(V.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(V.sh.coefficients[B],oe);I++}else if(V.isDirectionalLight){const B=e.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const K=V.shadow,Y=i.get(V);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,s.directionalShadow[M]=Y,s.directionalShadowMap[M]=de,s.directionalShadowMatrix[M]=V.shadow.matrix,O++}s.directional[M]=B,M++}else if(V.isSpotLight){const B=e.get(V);B.position.setFromMatrixPosition(V.matrixWorld),B.color.copy(ce).multiplyScalar(oe),B.distance=xe,B.coneCos=Math.cos(V.angle),B.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),B.decay=V.decay,s.spot[A]=B;const K=V.shadow;if(V.map&&(s.spotLightMap[H]=V.map,H++,K.updateMatrices(V),V.castShadow&&k++),s.spotLightMatrix[A]=K.matrix,V.castShadow){const Y=i.get(V);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,s.spotShadow[A]=Y,s.spotShadowMap[A]=de,C++}A++}else if(V.isRectAreaLight){const B=e.get(V);B.color.copy(ce).multiplyScalar(oe),B.halfWidth.set(V.width*.5,0,0),B.halfHeight.set(0,V.height*.5,0),s.rectArea[y]=B,y++}else if(V.isPointLight){const B=e.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),B.distance=V.distance,B.decay=V.decay,V.castShadow){const K=V.shadow,Y=i.get(V);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,s.pointShadow[E]=Y,s.pointShadowMap[E]=de,s.pointShadowMatrix[E]=V.shadow.matrix,U++}s.point[E]=B,E++}else if(V.isHemisphereLight){const B=e.get(V);B.skyColor.copy(V.color).multiplyScalar(oe),B.groundColor.copy(V.groundColor).multiplyScalar(oe),s.hemi[_]=B,_++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ue.LTC_FLOAT_1,s.rectAreaLTC2=Ue.LTC_FLOAT_2):(s.rectAreaLTC1=Ue.LTC_HALF_1,s.rectAreaLTC2=Ue.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=x,s.ambient[2]=v;const q=s.hash;(q.directionalLength!==M||q.pointLength!==E||q.spotLength!==A||q.rectAreaLength!==y||q.hemiLength!==_||q.numDirectionalShadows!==O||q.numPointShadows!==U||q.numSpotShadows!==C||q.numSpotMaps!==H||q.numLightProbes!==I)&&(s.directional.length=M,s.spot.length=A,s.rectArea.length=y,s.point.length=E,s.hemi.length=_,s.directionalShadow.length=O,s.directionalShadowMap.length=O,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=O,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=C+H-k,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=I,q.directionalLength=M,q.pointLength=E,q.spotLength=A,q.rectAreaLength=y,q.hemiLength=_,q.numDirectionalShadows=O,q.numPointShadows=U,q.numSpotShadows=C,q.numSpotMaps=H,q.numLightProbes=I,s.version=dA++)}function p(m,g){let x=0,v=0,M=0,E=0,A=0;const y=g.matrixWorldInverse;for(let _=0,O=m.length;_<O;_++){const U=m[_];if(U.isDirectionalLight){const C=s.directional[x];C.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),x++}else if(U.isSpotLight){const C=s.spot[M];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),M++}else if(U.isRectAreaLight){const C=s.rectArea[E];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(y),h.identity(),c.copy(U.matrixWorld),c.premultiply(y),h.extractRotation(c),C.halfWidth.set(U.width*.5,0,0),C.halfHeight.set(0,U.height*.5,0),C.halfWidth.applyMatrix4(h),C.halfHeight.applyMatrix4(h),E++}else if(U.isPointLight){const C=s.point[v];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(y),v++}else if(U.isHemisphereLight){const C=s.hemi[A];C.direction.setFromMatrixPosition(U.matrixWorld),C.direction.transformDirection(y),A++}}}return{setup:d,setupView:p,state:s}}function P_(r){const e=new mA(r),i=[],s=[];function l(g){m.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function h(g){s.push(g)}function d(){e.setup(i)}function p(g){e.setupView(i,g)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:h}}function gA(r){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new P_(r),e.set(l,[d])):c>=h.length?(d=new P_(r),h.push(d)):d=h[c],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const _A=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vA=`uniform sampler2D shadow_pass;
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
}`;function xA(r,e,i){let s=new yv;const l=new Ft,c=new Ft,h=new $t,d=new WM({depthPacking:nM}),p=new qM,m={},g=i.maxTextureSize,x={[ja]:Fn,[Fn]:ja,[ta]:ta},v=new Ya({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:_A,fragmentShader:vA}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const E=new Lr;E.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Ri(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$_;let _=this.type;this.render=function(k,I,q){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||k.length===0)return;const D=r.getRenderTarget(),w=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),ce=r.state;ce.setBlending(Wa),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const oe=_!==ea&&this.type===ea,xe=_===ea&&this.type!==ea;for(let de=0,B=k.length;de<B;de++){const K=k[de],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const Ee=Y.getFrameExtents();if(l.multiply(Ee),c.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/Ee.x),l.x=c.x*Ee.x,Y.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/Ee.y),l.y=c.y*Ee.y,Y.mapSize.y=c.y)),Y.map===null||oe===!0||xe===!0){const ee=this.type!==ea?{minFilter:_i,magFilter:_i}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Cr(l.x,l.y,ee),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}r.setRenderTarget(Y.map),r.clear();const N=Y.getViewportCount();for(let ee=0;ee<N;ee++){const ye=Y.getViewport(ee);h.set(c.x*ye.x,c.y*ye.y,c.x*ye.z,c.y*ye.w),ce.viewport(h),Y.updateMatrices(K,ee),s=Y.getFrustum(),C(I,q,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===ea&&O(Y,q),Y.needsUpdate=!1}_=this.type,y.needsUpdate=!1,r.setRenderTarget(D,w,V)};function O(k,I){const q=e.update(A);v.defines.VSM_SAMPLES!==k.blurSamples&&(v.defines.VSM_SAMPLES=k.blurSamples,M.defines.VSM_SAMPLES=k.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new Cr(l.x,l.y)),v.uniforms.shadow_pass.value=k.map.texture,v.uniforms.resolution.value=k.mapSize,v.uniforms.radius.value=k.radius,r.setRenderTarget(k.mapPass),r.clear(),r.renderBufferDirect(I,null,q,v,A,null),M.uniforms.shadow_pass.value=k.mapPass.texture,M.uniforms.resolution.value=k.mapSize,M.uniforms.radius.value=k.radius,r.setRenderTarget(k.map),r.clear(),r.renderBufferDirect(I,null,q,M,A,null)}function U(k,I,q,D){let w=null;const V=q.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(V!==void 0)w=V;else if(w=q.isPointLight===!0?p:d,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const ce=w.uuid,oe=I.uuid;let xe=m[ce];xe===void 0&&(xe={},m[ce]=xe);let de=xe[oe];de===void 0&&(de=w.clone(),xe[oe]=de,I.addEventListener("dispose",H)),w=de}if(w.visible=I.visible,w.wireframe=I.wireframe,D===ea?w.side=I.shadowSide!==null?I.shadowSide:I.side:w.side=I.shadowSide!==null?I.shadowSide:x[I.side],w.alphaMap=I.alphaMap,w.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,w.map=I.map,w.clipShadows=I.clipShadows,w.clippingPlanes=I.clippingPlanes,w.clipIntersection=I.clipIntersection,w.displacementMap=I.displacementMap,w.displacementScale=I.displacementScale,w.displacementBias=I.displacementBias,w.wireframeLinewidth=I.wireframeLinewidth,w.linewidth=I.linewidth,q.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ce=r.properties.get(w);ce.light=q}return w}function C(k,I,q,D,w){if(k.visible===!1)return;if(k.layers.test(I.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&w===ea)&&(!k.frustumCulled||s.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,k.matrixWorld);const oe=e.update(k),xe=k.material;if(Array.isArray(xe)){const de=oe.groups;for(let B=0,K=de.length;B<K;B++){const Y=de[B],Ee=xe[Y.materialIndex];if(Ee&&Ee.visible){const N=U(k,Ee,D,w);k.onBeforeShadow(r,k,I,q,oe,N,Y),r.renderBufferDirect(q,null,oe,N,k,Y),k.onAfterShadow(r,k,I,q,oe,N,Y)}}}else if(xe.visible){const de=U(k,xe,D,w);k.onBeforeShadow(r,k,I,q,oe,de,null),r.renderBufferDirect(q,null,oe,de,k,null),k.onAfterShadow(r,k,I,q,oe,de,null)}}const ce=k.children;for(let oe=0,xe=ce.length;oe<xe;oe++)C(ce[oe],I,q,D,w)}function H(k){k.target.removeEventListener("dispose",H);for(const q in m){const D=m[q],w=k.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}const yA={[Yh]:Zh,[Kh]:$h,[Qh]:ed,[Ds]:Jh,[Zh]:Yh,[$h]:Kh,[ed]:Qh,[Jh]:Ds};function SA(r,e){function i(){let X=!1;const Ne=new $t;let le=null;const _e=new $t(0,0,0,0);return{setMask:function(ze){le!==ze&&!X&&(r.colorMask(ze,ze,ze,ze),le=ze)},setLocked:function(ze){X=ze},setClear:function(ze,Oe,at,Gt,en){en===!0&&(ze*=Gt,Oe*=Gt,at*=Gt),Ne.set(ze,Oe,at,Gt),_e.equals(Ne)===!1&&(r.clearColor(ze,Oe,at,Gt),_e.copy(Ne))},reset:function(){X=!1,le=null,_e.set(-1,0,0,0)}}}function s(){let X=!1,Ne=!1,le=null,_e=null,ze=null;return{setReversed:function(Oe){if(Ne!==Oe){const at=e.get("EXT_clip_control");Oe?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT),Ne=Oe;const Gt=ze;ze=null,this.setClear(Gt)}},getReversed:function(){return Ne},setTest:function(Oe){Oe?Re(r.DEPTH_TEST):Le(r.DEPTH_TEST)},setMask:function(Oe){le!==Oe&&!X&&(r.depthMask(Oe),le=Oe)},setFunc:function(Oe){if(Ne&&(Oe=yA[Oe]),_e!==Oe){switch(Oe){case Yh:r.depthFunc(r.NEVER);break;case Zh:r.depthFunc(r.ALWAYS);break;case Kh:r.depthFunc(r.LESS);break;case Ds:r.depthFunc(r.LEQUAL);break;case Qh:r.depthFunc(r.EQUAL);break;case Jh:r.depthFunc(r.GEQUAL);break;case $h:r.depthFunc(r.GREATER);break;case ed:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}_e=Oe}},setLocked:function(Oe){X=Oe},setClear:function(Oe){ze!==Oe&&(Ne&&(Oe=1-Oe),r.clearDepth(Oe),ze=Oe)},reset:function(){X=!1,le=null,_e=null,ze=null,Ne=!1}}}function l(){let X=!1,Ne=null,le=null,_e=null,ze=null,Oe=null,at=null,Gt=null,en=null;return{setTest:function(Mt){X||(Mt?Re(r.STENCIL_TEST):Le(r.STENCIL_TEST))},setMask:function(Mt){Ne!==Mt&&!X&&(r.stencilMask(Mt),Ne=Mt)},setFunc:function(Mt,Gn,dn){(le!==Mt||_e!==Gn||ze!==dn)&&(r.stencilFunc(Mt,Gn,dn),le=Mt,_e=Gn,ze=dn)},setOp:function(Mt,Gn,dn){(Oe!==Mt||at!==Gn||Gt!==dn)&&(r.stencilOp(Mt,Gn,dn),Oe=Mt,at=Gn,Gt=dn)},setLocked:function(Mt){X=Mt},setClear:function(Mt){en!==Mt&&(r.clearStencil(Mt),en=Mt)},reset:function(){X=!1,Ne=null,le=null,_e=null,ze=null,Oe=null,at=null,Gt=null,en=null}}}const c=new i,h=new s,d=new l,p=new WeakMap,m=new WeakMap;let g={},x={},v=new WeakMap,M=[],E=null,A=!1,y=null,_=null,O=null,U=null,C=null,H=null,k=null,I=new Pt(0,0,0),q=0,D=!1,w=null,V=null,ce=null,oe=null,xe=null;const de=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,K=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),B=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),B=K>=2);let Ee=null,N={};const ee=r.getParameter(r.SCISSOR_BOX),ye=r.getParameter(r.VIEWPORT),Me=new $t().fromArray(ee),J=new $t().fromArray(ye);function me(X,Ne,le,_e){const ze=new Uint8Array(4),Oe=r.createTexture();r.bindTexture(X,Oe),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let at=0;at<le;at++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Ne,0,r.RGBA,1,1,_e,0,r.RGBA,r.UNSIGNED_BYTE,ze):r.texImage2D(Ne+at,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ze);return Oe}const Se={};Se[r.TEXTURE_2D]=me(r.TEXTURE_2D,r.TEXTURE_2D,1),Se[r.TEXTURE_CUBE_MAP]=me(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[r.TEXTURE_2D_ARRAY]=me(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Se[r.TEXTURE_3D]=me(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Re(r.DEPTH_TEST),h.setFunc(Ds),gt(!1),it(G0),Re(r.CULL_FACE),F(Wa);function Re(X){g[X]!==!0&&(r.enable(X),g[X]=!0)}function Le(X){g[X]!==!1&&(r.disable(X),g[X]=!1)}function ot(X,Ne){return x[X]!==Ne?(r.bindFramebuffer(X,Ne),x[X]=Ne,X===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Ne),X===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Ke(X,Ne){let le=M,_e=!1;if(X){le=v.get(Ne),le===void 0&&(le=[],v.set(Ne,le));const ze=X.textures;if(le.length!==ze.length||le[0]!==r.COLOR_ATTACHMENT0){for(let Oe=0,at=ze.length;Oe<at;Oe++)le[Oe]=r.COLOR_ATTACHMENT0+Oe;le.length=ze.length,_e=!0}}else le[0]!==r.BACK&&(le[0]=r.BACK,_e=!0);_e&&r.drawBuffers(le)}function Ht(X){return E!==X?(r.useProgram(X),E=X,!0):!1}const Bt={[Er]:r.FUNC_ADD,[w1]:r.FUNC_SUBTRACT,[C1]:r.FUNC_REVERSE_SUBTRACT};Bt[D1]=r.MIN,Bt[U1]=r.MAX;const ft={[L1]:r.ZERO,[N1]:r.ONE,[O1]:r.SRC_COLOR,[qh]:r.SRC_ALPHA,[H1]:r.SRC_ALPHA_SATURATE,[I1]:r.DST_COLOR,[B1]:r.DST_ALPHA,[P1]:r.ONE_MINUS_SRC_COLOR,[jh]:r.ONE_MINUS_SRC_ALPHA,[F1]:r.ONE_MINUS_DST_COLOR,[z1]:r.ONE_MINUS_DST_ALPHA,[G1]:r.CONSTANT_COLOR,[V1]:r.ONE_MINUS_CONSTANT_COLOR,[k1]:r.CONSTANT_ALPHA,[X1]:r.ONE_MINUS_CONSTANT_ALPHA};function F(X,Ne,le,_e,ze,Oe,at,Gt,en,Mt){if(X===Wa){A===!0&&(Le(r.BLEND),A=!1);return}if(A===!1&&(Re(r.BLEND),A=!0),X!==R1){if(X!==y||Mt!==D){if((_!==Er||C!==Er)&&(r.blendEquation(r.FUNC_ADD),_=Er,C=Er),Mt)switch(X){case Rs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case V0:r.blendFunc(r.ONE,r.ONE);break;case k0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case X0:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Rs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case V0:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case k0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case X0:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}O=null,U=null,H=null,k=null,I.set(0,0,0),q=0,y=X,D=Mt}return}ze=ze||Ne,Oe=Oe||le,at=at||_e,(Ne!==_||ze!==C)&&(r.blendEquationSeparate(Bt[Ne],Bt[ze]),_=Ne,C=ze),(le!==O||_e!==U||Oe!==H||at!==k)&&(r.blendFuncSeparate(ft[le],ft[_e],ft[Oe],ft[at]),O=le,U=_e,H=Oe,k=at),(Gt.equals(I)===!1||en!==q)&&(r.blendColor(Gt.r,Gt.g,Gt.b,en),I.copy(Gt),q=en),y=X,D=!1}function Ln(X,Ne){X.side===ta?Le(r.CULL_FACE):Re(r.CULL_FACE);let le=X.side===Fn;Ne&&(le=!le),gt(le),X.blending===Rs&&X.transparent===!1?F(Wa):F(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const _e=X.stencilWrite;d.setTest(_e),_e&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ct(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Re(r.SAMPLE_ALPHA_TO_COVERAGE):Le(r.SAMPLE_ALPHA_TO_COVERAGE)}function gt(X){w!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),w=X)}function it(X){X!==b1?(Re(r.CULL_FACE),X!==V&&(X===G0?r.cullFace(r.BACK):X===T1?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Le(r.CULL_FACE),V=X}function We(X){X!==ce&&(B&&r.lineWidth(X),ce=X)}function Ct(X,Ne,le){X?(Re(r.POLYGON_OFFSET_FILL),(oe!==Ne||xe!==le)&&(r.polygonOffset(Ne,le),oe=Ne,xe=le)):Le(r.POLYGON_OFFSET_FILL)}function Ve(X){X?Re(r.SCISSOR_TEST):Le(r.SCISSOR_TEST)}function L(X){X===void 0&&(X=r.TEXTURE0+de-1),Ee!==X&&(r.activeTexture(X),Ee=X)}function T(X,Ne,le){le===void 0&&(Ee===null?le=r.TEXTURE0+de-1:le=Ee);let _e=N[le];_e===void 0&&(_e={type:void 0,texture:void 0},N[le]=_e),(_e.type!==X||_e.texture!==Ne)&&(Ee!==le&&(r.activeTexture(le),Ee=le),r.bindTexture(X,Ne||Se[X]),_e.type=X,_e.texture=Ne)}function te(){const X=N[Ee];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function ge(){try{r.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function be(){try{r.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function fe(){try{r.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Pe(){try{r.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function we(){try{r.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ge(){try{r.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $e(){try{r.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ae(){try{r.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Fe(){try{r.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ye(){try{r.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Qe(X){Me.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),Me.copy(X))}function Be(X){J.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),J.copy(X))}function ct(X,Ne){let le=m.get(Ne);le===void 0&&(le=new WeakMap,m.set(Ne,le));let _e=le.get(X);_e===void 0&&(_e=r.getUniformBlockIndex(Ne,X.name),le.set(X,_e))}function nt(X,Ne){const _e=m.get(Ne).get(X);p.get(Ne)!==_e&&(r.uniformBlockBinding(Ne,_e,X.__bindingPointIndex),p.set(Ne,_e))}function Dt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},Ee=null,N={},x={},v=new WeakMap,M=[],E=null,A=!1,y=null,_=null,O=null,U=null,C=null,H=null,k=null,I=new Pt(0,0,0),q=0,D=!1,w=null,V=null,ce=null,oe=null,xe=null,Me.set(0,0,r.canvas.width,r.canvas.height),J.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:Re,disable:Le,bindFramebuffer:ot,drawBuffers:Ke,useProgram:Ht,setBlending:F,setMaterial:Ln,setFlipSided:gt,setCullFace:it,setLineWidth:We,setPolygonOffset:Ct,setScissorTest:Ve,activeTexture:L,bindTexture:T,unbindTexture:te,compressedTexImage2D:ge,compressedTexImage3D:be,texImage2D:Fe,texImage3D:Ye,updateUBOMapping:ct,uniformBlockBinding:nt,texStorage2D:$e,texStorage3D:Ae,texSubImage2D:fe,texSubImage3D:Pe,compressedTexSubImage2D:we,compressedTexSubImage3D:Ge,scissor:Qe,viewport:Be,reset:Dt}}function MA(r,e,i,s,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Ft,g=new WeakMap;let x;const v=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,T){return M?new OffscreenCanvas(L,T):Kc("canvas")}function A(L,T,te){let ge=1;const be=Ve(L);if((be.width>te||be.height>te)&&(ge=te/Math.max(be.width,be.height)),ge<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const fe=Math.floor(ge*be.width),Pe=Math.floor(ge*be.height);x===void 0&&(x=E(fe,Pe));const we=T?E(fe,Pe):x;return we.width=fe,we.height=Pe,we.getContext("2d").drawImage(L,0,0,fe,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+fe+"x"+Pe+")."),we}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),L;return L}function y(L){return L.generateMipmaps}function _(L){r.generateMipmap(L)}function O(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(L,T,te,ge,be=!1){if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let fe=T;if(T===r.RED&&(te===r.FLOAT&&(fe=r.R32F),te===r.HALF_FLOAT&&(fe=r.R16F),te===r.UNSIGNED_BYTE&&(fe=r.R8)),T===r.RED_INTEGER&&(te===r.UNSIGNED_BYTE&&(fe=r.R8UI),te===r.UNSIGNED_SHORT&&(fe=r.R16UI),te===r.UNSIGNED_INT&&(fe=r.R32UI),te===r.BYTE&&(fe=r.R8I),te===r.SHORT&&(fe=r.R16I),te===r.INT&&(fe=r.R32I)),T===r.RG&&(te===r.FLOAT&&(fe=r.RG32F),te===r.HALF_FLOAT&&(fe=r.RG16F),te===r.UNSIGNED_BYTE&&(fe=r.RG8)),T===r.RG_INTEGER&&(te===r.UNSIGNED_BYTE&&(fe=r.RG8UI),te===r.UNSIGNED_SHORT&&(fe=r.RG16UI),te===r.UNSIGNED_INT&&(fe=r.RG32UI),te===r.BYTE&&(fe=r.RG8I),te===r.SHORT&&(fe=r.RG16I),te===r.INT&&(fe=r.RG32I)),T===r.RGB_INTEGER&&(te===r.UNSIGNED_BYTE&&(fe=r.RGB8UI),te===r.UNSIGNED_SHORT&&(fe=r.RGB16UI),te===r.UNSIGNED_INT&&(fe=r.RGB32UI),te===r.BYTE&&(fe=r.RGB8I),te===r.SHORT&&(fe=r.RGB16I),te===r.INT&&(fe=r.RGB32I)),T===r.RGBA_INTEGER&&(te===r.UNSIGNED_BYTE&&(fe=r.RGBA8UI),te===r.UNSIGNED_SHORT&&(fe=r.RGBA16UI),te===r.UNSIGNED_INT&&(fe=r.RGBA32UI),te===r.BYTE&&(fe=r.RGBA8I),te===r.SHORT&&(fe=r.RGBA16I),te===r.INT&&(fe=r.RGBA32I)),T===r.RGB&&te===r.UNSIGNED_INT_5_9_9_9_REV&&(fe=r.RGB9_E5),T===r.RGBA){const Pe=be?Yc:Tt.getTransfer(ge);te===r.FLOAT&&(fe=r.RGBA32F),te===r.HALF_FLOAT&&(fe=r.RGBA16F),te===r.UNSIGNED_BYTE&&(fe=Pe===Ot?r.SRGB8_ALPHA8:r.RGBA8),te===r.UNSIGNED_SHORT_4_4_4_4&&(fe=r.RGBA4),te===r.UNSIGNED_SHORT_5_5_5_1&&(fe=r.RGB5_A1)}return(fe===r.R16F||fe===r.R32F||fe===r.RG16F||fe===r.RG32F||fe===r.RGBA16F||fe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function C(L,T){let te;return L?T===null||T===wr||T===qo?te=r.DEPTH24_STENCIL8:T===na?te=r.DEPTH32F_STENCIL8:T===Wo&&(te=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===wr||T===qo?te=r.DEPTH_COMPONENT24:T===na?te=r.DEPTH_COMPONENT32F:T===Wo&&(te=r.DEPTH_COMPONENT16),te}function H(L,T){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==_i&&L.minFilter!==Ai?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function k(L){const T=L.target;T.removeEventListener("dispose",k),q(T),T.isVideoTexture&&g.delete(T)}function I(L){const T=L.target;T.removeEventListener("dispose",I),w(T)}function q(L){const T=s.get(L);if(T.__webglInit===void 0)return;const te=L.source,ge=v.get(te);if(ge){const be=ge[T.__cacheKey];be.usedTimes--,be.usedTimes===0&&D(L),Object.keys(ge).length===0&&v.delete(te)}s.remove(L)}function D(L){const T=s.get(L);r.deleteTexture(T.__webglTexture);const te=L.source,ge=v.get(te);delete ge[T.__cacheKey],h.memory.textures--}function w(L){const T=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(T.__webglFramebuffer[ge]))for(let be=0;be<T.__webglFramebuffer[ge].length;be++)r.deleteFramebuffer(T.__webglFramebuffer[ge][be]);else r.deleteFramebuffer(T.__webglFramebuffer[ge]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[ge])}else{if(Array.isArray(T.__webglFramebuffer))for(let ge=0;ge<T.__webglFramebuffer.length;ge++)r.deleteFramebuffer(T.__webglFramebuffer[ge]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ge=0;ge<T.__webglColorRenderbuffer.length;ge++)T.__webglColorRenderbuffer[ge]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[ge]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const te=L.textures;for(let ge=0,be=te.length;ge<be;ge++){const fe=s.get(te[ge]);fe.__webglTexture&&(r.deleteTexture(fe.__webglTexture),h.memory.textures--),s.remove(te[ge])}s.remove(L)}let V=0;function ce(){V=0}function oe(){const L=V;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),V+=1,L}function xe(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function de(L,T){const te=s.get(L);if(L.isVideoTexture&&We(L),L.isRenderTargetTexture===!1&&L.version>0&&te.__version!==L.version){const ge=L.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(te,L,T);return}}i.bindTexture(r.TEXTURE_2D,te.__webglTexture,r.TEXTURE0+T)}function B(L,T){const te=s.get(L);if(L.version>0&&te.__version!==L.version){J(te,L,T);return}i.bindTexture(r.TEXTURE_2D_ARRAY,te.__webglTexture,r.TEXTURE0+T)}function K(L,T){const te=s.get(L);if(L.version>0&&te.__version!==L.version){J(te,L,T);return}i.bindTexture(r.TEXTURE_3D,te.__webglTexture,r.TEXTURE0+T)}function Y(L,T){const te=s.get(L);if(L.version>0&&te.__version!==L.version){me(te,L,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture,r.TEXTURE0+T)}const Ee={[id]:r.REPEAT,[Tr]:r.CLAMP_TO_EDGE,[ad]:r.MIRRORED_REPEAT},N={[_i]:r.NEAREST,[eM]:r.NEAREST_MIPMAP_NEAREST,[pc]:r.NEAREST_MIPMAP_LINEAR,[Ai]:r.LINEAR,[dh]:r.LINEAR_MIPMAP_NEAREST,[Ar]:r.LINEAR_MIPMAP_LINEAR},ee={[rM]:r.NEVER,[fM]:r.ALWAYS,[sM]:r.LESS,[uv]:r.LEQUAL,[oM]:r.EQUAL,[uM]:r.GEQUAL,[lM]:r.GREATER,[cM]:r.NOTEQUAL};function ye(L,T){if(T.type===na&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ai||T.magFilter===dh||T.magFilter===pc||T.magFilter===Ar||T.minFilter===Ai||T.minFilter===dh||T.minFilter===pc||T.minFilter===Ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,Ee[T.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,Ee[T.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,Ee[T.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,N[T.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,N[T.minFilter]),T.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,ee[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===_i||T.minFilter!==pc&&T.minFilter!==Ar||T.type===na&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");r.texParameterf(L,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Me(L,T){let te=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",k));const ge=T.source;let be=v.get(ge);be===void 0&&(be={},v.set(ge,be));const fe=xe(T);if(fe!==L.__cacheKey){be[fe]===void 0&&(be[fe]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,te=!0),be[fe].usedTimes++;const Pe=be[L.__cacheKey];Pe!==void 0&&(be[L.__cacheKey].usedTimes--,Pe.usedTimes===0&&D(T)),L.__cacheKey=fe,L.__webglTexture=be[fe].texture}return te}function J(L,T,te){let ge=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ge=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ge=r.TEXTURE_3D);const be=Me(L,T),fe=T.source;i.bindTexture(ge,L.__webglTexture,r.TEXTURE0+te);const Pe=s.get(fe);if(fe.version!==Pe.__version||be===!0){i.activeTexture(r.TEXTURE0+te);const we=Tt.getPrimaries(Tt.workingColorSpace),Ge=T.colorSpace===Xa?null:Tt.getPrimaries(T.colorSpace),$e=T.colorSpace===Xa||we===Ge?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let Ae=A(T.image,!1,l.maxTextureSize);Ae=Ct(T,Ae);const Fe=c.convert(T.format,T.colorSpace),Ye=c.convert(T.type);let Qe=U(T.internalFormat,Fe,Ye,T.colorSpace,T.isVideoTexture);ye(ge,T);let Be;const ct=T.mipmaps,nt=T.isVideoTexture!==!0,Dt=Pe.__version===void 0||be===!0,X=fe.dataReady,Ne=H(T,Ae);if(T.isDepthTexture)Qe=C(T.format===Yo,T.type),Dt&&(nt?i.texStorage2D(r.TEXTURE_2D,1,Qe,Ae.width,Ae.height):i.texImage2D(r.TEXTURE_2D,0,Qe,Ae.width,Ae.height,0,Fe,Ye,null));else if(T.isDataTexture)if(ct.length>0){nt&&Dt&&i.texStorage2D(r.TEXTURE_2D,Ne,Qe,ct[0].width,ct[0].height);for(let le=0,_e=ct.length;le<_e;le++)Be=ct[le],nt?X&&i.texSubImage2D(r.TEXTURE_2D,le,0,0,Be.width,Be.height,Fe,Ye,Be.data):i.texImage2D(r.TEXTURE_2D,le,Qe,Be.width,Be.height,0,Fe,Ye,Be.data);T.generateMipmaps=!1}else nt?(Dt&&i.texStorage2D(r.TEXTURE_2D,Ne,Qe,Ae.width,Ae.height),X&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ae.width,Ae.height,Fe,Ye,Ae.data)):i.texImage2D(r.TEXTURE_2D,0,Qe,Ae.width,Ae.height,0,Fe,Ye,Ae.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){nt&&Dt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ne,Qe,ct[0].width,ct[0].height,Ae.depth);for(let le=0,_e=ct.length;le<_e;le++)if(Be=ct[le],T.format!==gi)if(Fe!==null)if(nt){if(X)if(T.layerUpdates.size>0){const ze=f_(Be.width,Be.height,T.format,T.type);for(const Oe of T.layerUpdates){const at=Be.data.subarray(Oe*ze/Be.data.BYTES_PER_ELEMENT,(Oe+1)*ze/Be.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,Oe,Be.width,Be.height,1,Fe,at)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,0,Be.width,Be.height,Ae.depth,Fe,Be.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,le,Qe,Be.width,Be.height,Ae.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?X&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,0,Be.width,Be.height,Ae.depth,Fe,Ye,Be.data):i.texImage3D(r.TEXTURE_2D_ARRAY,le,Qe,Be.width,Be.height,Ae.depth,0,Fe,Ye,Be.data)}else{nt&&Dt&&i.texStorage2D(r.TEXTURE_2D,Ne,Qe,ct[0].width,ct[0].height);for(let le=0,_e=ct.length;le<_e;le++)Be=ct[le],T.format!==gi?Fe!==null?nt?X&&i.compressedTexSubImage2D(r.TEXTURE_2D,le,0,0,Be.width,Be.height,Fe,Be.data):i.compressedTexImage2D(r.TEXTURE_2D,le,Qe,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?X&&i.texSubImage2D(r.TEXTURE_2D,le,0,0,Be.width,Be.height,Fe,Ye,Be.data):i.texImage2D(r.TEXTURE_2D,le,Qe,Be.width,Be.height,0,Fe,Ye,Be.data)}else if(T.isDataArrayTexture)if(nt){if(Dt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ne,Qe,Ae.width,Ae.height,Ae.depth),X)if(T.layerUpdates.size>0){const le=f_(Ae.width,Ae.height,T.format,T.type);for(const _e of T.layerUpdates){const ze=Ae.data.subarray(_e*le/Ae.data.BYTES_PER_ELEMENT,(_e+1)*le/Ae.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,_e,Ae.width,Ae.height,1,Fe,Ye,ze)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Fe,Ye,Ae.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Qe,Ae.width,Ae.height,Ae.depth,0,Fe,Ye,Ae.data);else if(T.isData3DTexture)nt?(Dt&&i.texStorage3D(r.TEXTURE_3D,Ne,Qe,Ae.width,Ae.height,Ae.depth),X&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Fe,Ye,Ae.data)):i.texImage3D(r.TEXTURE_3D,0,Qe,Ae.width,Ae.height,Ae.depth,0,Fe,Ye,Ae.data);else if(T.isFramebufferTexture){if(Dt)if(nt)i.texStorage2D(r.TEXTURE_2D,Ne,Qe,Ae.width,Ae.height);else{let le=Ae.width,_e=Ae.height;for(let ze=0;ze<Ne;ze++)i.texImage2D(r.TEXTURE_2D,ze,Qe,le,_e,0,Fe,Ye,null),le>>=1,_e>>=1}}else if(ct.length>0){if(nt&&Dt){const le=Ve(ct[0]);i.texStorage2D(r.TEXTURE_2D,Ne,Qe,le.width,le.height)}for(let le=0,_e=ct.length;le<_e;le++)Be=ct[le],nt?X&&i.texSubImage2D(r.TEXTURE_2D,le,0,0,Fe,Ye,Be):i.texImage2D(r.TEXTURE_2D,le,Qe,Fe,Ye,Be);T.generateMipmaps=!1}else if(nt){if(Dt){const le=Ve(Ae);i.texStorage2D(r.TEXTURE_2D,Ne,Qe,le.width,le.height)}X&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Fe,Ye,Ae)}else i.texImage2D(r.TEXTURE_2D,0,Qe,Fe,Ye,Ae);y(T)&&_(ge),Pe.__version=fe.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function me(L,T,te){if(T.image.length!==6)return;const ge=Me(L,T),be=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+te);const fe=s.get(be);if(be.version!==fe.__version||ge===!0){i.activeTexture(r.TEXTURE0+te);const Pe=Tt.getPrimaries(Tt.workingColorSpace),we=T.colorSpace===Xa?null:Tt.getPrimaries(T.colorSpace),Ge=T.colorSpace===Xa||Pe===we?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);const $e=T.isCompressedTexture||T.image[0].isCompressedTexture,Ae=T.image[0]&&T.image[0].isDataTexture,Fe=[];for(let _e=0;_e<6;_e++)!$e&&!Ae?Fe[_e]=A(T.image[_e],!0,l.maxCubemapSize):Fe[_e]=Ae?T.image[_e].image:T.image[_e],Fe[_e]=Ct(T,Fe[_e]);const Ye=Fe[0],Qe=c.convert(T.format,T.colorSpace),Be=c.convert(T.type),ct=U(T.internalFormat,Qe,Be,T.colorSpace),nt=T.isVideoTexture!==!0,Dt=fe.__version===void 0||ge===!0,X=be.dataReady;let Ne=H(T,Ye);ye(r.TEXTURE_CUBE_MAP,T);let le;if($e){nt&&Dt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ne,ct,Ye.width,Ye.height);for(let _e=0;_e<6;_e++){le=Fe[_e].mipmaps;for(let ze=0;ze<le.length;ze++){const Oe=le[ze];T.format!==gi?Qe!==null?nt?X&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ze,0,0,Oe.width,Oe.height,Qe,Oe.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ze,ct,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?X&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ze,0,0,Oe.width,Oe.height,Qe,Be,Oe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ze,ct,Oe.width,Oe.height,0,Qe,Be,Oe.data)}}}else{if(le=T.mipmaps,nt&&Dt){le.length>0&&Ne++;const _e=Ve(Fe[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ne,ct,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Ae){nt?X&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Fe[_e].width,Fe[_e].height,Qe,Be,Fe[_e].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ct,Fe[_e].width,Fe[_e].height,0,Qe,Be,Fe[_e].data);for(let ze=0;ze<le.length;ze++){const at=le[ze].image[_e].image;nt?X&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ze+1,0,0,at.width,at.height,Qe,Be,at.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ze+1,ct,at.width,at.height,0,Qe,Be,at.data)}}else{nt?X&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Qe,Be,Fe[_e]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ct,Qe,Be,Fe[_e]);for(let ze=0;ze<le.length;ze++){const Oe=le[ze];nt?X&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ze+1,0,0,Qe,Be,Oe.image[_e]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ze+1,ct,Qe,Be,Oe.image[_e])}}}y(T)&&_(r.TEXTURE_CUBE_MAP),fe.__version=be.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Se(L,T,te,ge,be,fe){const Pe=c.convert(te.format,te.colorSpace),we=c.convert(te.type),Ge=U(te.internalFormat,Pe,we,te.colorSpace),$e=s.get(T),Ae=s.get(te);if(Ae.__renderTarget=T,!$e.__hasExternalTextures){const Fe=Math.max(1,T.width>>fe),Ye=Math.max(1,T.height>>fe);be===r.TEXTURE_3D||be===r.TEXTURE_2D_ARRAY?i.texImage3D(be,fe,Ge,Fe,Ye,T.depth,0,Pe,we,null):i.texImage2D(be,fe,Ge,Fe,Ye,0,Pe,we,null)}i.bindFramebuffer(r.FRAMEBUFFER,L),it(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ge,be,Ae.__webglTexture,0,gt(T)):(be===r.TEXTURE_2D||be>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ge,be,Ae.__webglTexture,fe),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Re(L,T,te){if(r.bindRenderbuffer(r.RENDERBUFFER,L),T.depthBuffer){const ge=T.depthTexture,be=ge&&ge.isDepthTexture?ge.type:null,fe=C(T.stencilBuffer,be),Pe=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=gt(T);it(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,we,fe,T.width,T.height):te?r.renderbufferStorageMultisample(r.RENDERBUFFER,we,fe,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,fe,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Pe,r.RENDERBUFFER,L)}else{const ge=T.textures;for(let be=0;be<ge.length;be++){const fe=ge[be],Pe=c.convert(fe.format,fe.colorSpace),we=c.convert(fe.type),Ge=U(fe.internalFormat,Pe,we,fe.colorSpace),$e=gt(T);te&&it(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,$e,Ge,T.width,T.height):it(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$e,Ge,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Ge,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Le(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=s.get(T.depthTexture);ge.__renderTarget=T,(!ge.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),de(T.depthTexture,0);const be=ge.__webglTexture,fe=gt(T);if(T.depthTexture.format===jo)it(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,be,0,fe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,be,0);else if(T.depthTexture.format===Yo)it(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,be,0,fe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,be,0);else throw new Error("Unknown depthTexture format")}function ot(L){const T=s.get(L),te=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const ge=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ge){const be=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ge.removeEventListener("dispose",be)};ge.addEventListener("dispose",be),T.__depthDisposeCallback=be}T.__boundDepthTexture=ge}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");const ge=L.texture.mipmaps;ge&&ge.length>0?Le(T.__webglFramebuffer[0],L):Le(T.__webglFramebuffer,L)}else if(te){T.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ge]),T.__webglDepthbuffer[ge]===void 0)T.__webglDepthbuffer[ge]=r.createRenderbuffer(),Re(T.__webglDepthbuffer[ge],L,!1);else{const be=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer[ge];r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,be,r.RENDERBUFFER,fe)}}else{const ge=L.texture.mipmaps;if(ge&&ge.length>0?i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Re(T.__webglDepthbuffer,L,!1);else{const be=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,be,r.RENDERBUFFER,fe)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ke(L,T,te){const ge=s.get(L);T!==void 0&&Se(ge.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),te!==void 0&&ot(L)}function Ht(L){const T=L.texture,te=s.get(L),ge=s.get(T);L.addEventListener("dispose",I);const be=L.textures,fe=L.isWebGLCubeRenderTarget===!0,Pe=be.length>1;if(Pe||(ge.__webglTexture===void 0&&(ge.__webglTexture=r.createTexture()),ge.__version=T.version,h.memory.textures++),fe){te.__webglFramebuffer=[];for(let we=0;we<6;we++)if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer[we]=[];for(let Ge=0;Ge<T.mipmaps.length;Ge++)te.__webglFramebuffer[we][Ge]=r.createFramebuffer()}else te.__webglFramebuffer[we]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer=[];for(let we=0;we<T.mipmaps.length;we++)te.__webglFramebuffer[we]=r.createFramebuffer()}else te.__webglFramebuffer=r.createFramebuffer();if(Pe)for(let we=0,Ge=be.length;we<Ge;we++){const $e=s.get(be[we]);$e.__webglTexture===void 0&&($e.__webglTexture=r.createTexture(),h.memory.textures++)}if(L.samples>0&&it(L)===!1){te.__webglMultisampledFramebuffer=r.createFramebuffer(),te.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let we=0;we<be.length;we++){const Ge=be[we];te.__webglColorRenderbuffer[we]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,te.__webglColorRenderbuffer[we]);const $e=c.convert(Ge.format,Ge.colorSpace),Ae=c.convert(Ge.type),Fe=U(Ge.internalFormat,$e,Ae,Ge.colorSpace,L.isXRRenderTarget===!0),Ye=gt(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ye,Fe,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,te.__webglColorRenderbuffer[we])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(te.__webglDepthRenderbuffer=r.createRenderbuffer(),Re(te.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(fe){i.bindTexture(r.TEXTURE_CUBE_MAP,ge.__webglTexture),ye(r.TEXTURE_CUBE_MAP,T);for(let we=0;we<6;we++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ge=0;Ge<T.mipmaps.length;Ge++)Se(te.__webglFramebuffer[we][Ge],L,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ge);else Se(te.__webglFramebuffer[we],L,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);y(T)&&_(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pe){for(let we=0,Ge=be.length;we<Ge;we++){const $e=be[we],Ae=s.get($e);i.bindTexture(r.TEXTURE_2D,Ae.__webglTexture),ye(r.TEXTURE_2D,$e),Se(te.__webglFramebuffer,L,$e,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,0),y($e)&&_(r.TEXTURE_2D)}i.unbindTexture()}else{let we=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(we=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(we,ge.__webglTexture),ye(we,T),T.mipmaps&&T.mipmaps.length>0)for(let Ge=0;Ge<T.mipmaps.length;Ge++)Se(te.__webglFramebuffer[Ge],L,T,r.COLOR_ATTACHMENT0,we,Ge);else Se(te.__webglFramebuffer,L,T,r.COLOR_ATTACHMENT0,we,0);y(T)&&_(we),i.unbindTexture()}L.depthBuffer&&ot(L)}function Bt(L){const T=L.textures;for(let te=0,ge=T.length;te<ge;te++){const be=T[te];if(y(be)){const fe=O(L),Pe=s.get(be).__webglTexture;i.bindTexture(fe,Pe),_(fe),i.unbindTexture()}}}const ft=[],F=[];function Ln(L){if(L.samples>0){if(it(L)===!1){const T=L.textures,te=L.width,ge=L.height;let be=r.COLOR_BUFFER_BIT;const fe=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pe=s.get(L),we=T.length>1;if(we)for(let $e=0;$e<T.length;$e++)i.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const Ge=L.texture.mipmaps;Ge&&Ge.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let $e=0;$e<T.length;$e++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(be|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(be|=r.STENCIL_BUFFER_BIT)),we){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[$e]);const Ae=s.get(T[$e]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ae,0)}r.blitFramebuffer(0,0,te,ge,0,0,te,ge,be,r.NEAREST),p===!0&&(ft.length=0,F.length=0,ft.push(r.COLOR_ATTACHMENT0+$e),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ft.push(fe),F.push(fe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,F)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ft))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),we)for(let $e=0;$e<T.length;$e++){i.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[$e]);const Ae=s.get(T[$e]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.TEXTURE_2D,Ae,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const T=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function gt(L){return Math.min(l.maxSamples,L.samples)}function it(L){const T=s.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function We(L){const T=h.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}function Ct(L,T){const te=L.colorSpace,ge=L.format,be=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||te!==Ns&&te!==Xa&&(Tt.getTransfer(te)===Ot?(ge!==gi||be!==la)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),T}function Ve(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=oe,this.resetTextureUnits=ce,this.setTexture2D=de,this.setTexture2DArray=B,this.setTexture3D=K,this.setTextureCube=Y,this.rebindTextures=Ke,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=Ln,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=it}function EA(r,e){function i(s,l=Xa){let c;const h=Tt.getTransfer(l);if(s===la)return r.UNSIGNED_BYTE;if(s===Vd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===kd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===av)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===nv)return r.BYTE;if(s===iv)return r.SHORT;if(s===Wo)return r.UNSIGNED_SHORT;if(s===Gd)return r.INT;if(s===wr)return r.UNSIGNED_INT;if(s===na)return r.FLOAT;if(s===Jo)return r.HALF_FLOAT;if(s===rv)return r.ALPHA;if(s===sv)return r.RGB;if(s===gi)return r.RGBA;if(s===jo)return r.DEPTH_COMPONENT;if(s===Yo)return r.DEPTH_STENCIL;if(s===ov)return r.RED;if(s===Xd)return r.RED_INTEGER;if(s===lv)return r.RG;if(s===Wd)return r.RG_INTEGER;if(s===qd)return r.RGBA_INTEGER;if(s===Fc||s===Hc||s===Gc||s===Vc)if(h===Ot)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Fc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Hc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Fc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Hc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Gc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Vc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===rd||s===sd||s===od||s===ld)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===rd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===sd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===od)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ld)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===cd||s===ud||s===fd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===cd||s===ud)return h===Ot?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===fd)return h===Ot?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===hd||s===dd||s===pd||s===md||s===gd||s===_d||s===vd||s===xd||s===yd||s===Sd||s===Md||s===Ed||s===bd||s===Td)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===hd)return h===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===dd)return h===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===pd)return h===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===md)return h===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===gd)return h===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===_d)return h===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===vd)return h===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===xd)return h===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===yd)return h===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Sd)return h===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Md)return h===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ed)return h===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===bd)return h===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Td)return h===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===kc||s===Ad||s===Rd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===kc)return h===Ot?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ad)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Rd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===cv||s===wd||s===Cd||s===Dd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===kc)return c.COMPRESSED_RED_RGTC1_EXT;if(s===wd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Cd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Dd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===qo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const bA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TA=`
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

}`;class AA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,s){if(this.texture===null){const l=new Hn,c=e.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Ya({vertexShader:bA,fragmentShader:TA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ri(new tu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RA extends Bs{constructor(e,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",p=1,m=null,g=null,x=null,v=null,M=null,E=null;const A=new AA,y=i.getContextAttributes();let _=null,O=null;const U=[],C=[],H=new Ft;let k=null;const I=new oi;I.viewport=new $t;const q=new oi;q.viewport=new $t;const D=[I,q],w=new YM;let V=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let me=U[J];return me===void 0&&(me=new Ph,U[J]=me),me.getTargetRaySpace()},this.getControllerGrip=function(J){let me=U[J];return me===void 0&&(me=new Ph,U[J]=me),me.getGripSpace()},this.getHand=function(J){let me=U[J];return me===void 0&&(me=new Ph,U[J]=me),me.getHandSpace()};function oe(J){const me=C.indexOf(J.inputSource);if(me===-1)return;const Se=U[me];Se!==void 0&&(Se.update(J.inputSource,J.frame,m||h),Se.dispatchEvent({type:J.type,data:J.inputSource}))}function xe(){l.removeEventListener("select",oe),l.removeEventListener("selectstart",oe),l.removeEventListener("selectend",oe),l.removeEventListener("squeeze",oe),l.removeEventListener("squeezestart",oe),l.removeEventListener("squeezeend",oe),l.removeEventListener("end",xe),l.removeEventListener("inputsourceschange",de);for(let J=0;J<U.length;J++){const me=C[J];me!==null&&(C[J]=null,U[J].disconnect(me))}V=null,ce=null,A.reset(),e.setRenderTarget(_),M=null,v=null,x=null,l=null,O=null,Me.stop(),s.isPresenting=!1,e.setPixelRatio(k),e.setSize(H.width,H.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(J){m=J},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return x},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",oe),l.addEventListener("selectstart",oe),l.addEventListener("selectend",oe),l.addEventListener("squeeze",oe),l.addEventListener("squeezestart",oe),l.addEventListener("squeezeend",oe),l.addEventListener("end",xe),l.addEventListener("inputsourceschange",de),y.xrCompatible!==!0&&await i.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Re=null,Le=null;y.depth&&(Le=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Se=y.stencil?Yo:jo,Re=y.stencil?qo:wr);const ot={colorFormat:i.RGBA8,depthFormat:Le,scaleFactor:c};x=new XRWebGLBinding(l,i),v=x.createProjectionLayer(ot),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),O=new Cr(v.textureWidth,v.textureHeight,{format:gi,type:la,depthTexture:new Sv(v.textureWidth,v.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Se={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Se),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),O=new Cr(M.framebufferWidth,M.framebufferHeight,{format:gi,type:la,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),Me.setContext(l),Me.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function de(J){for(let me=0;me<J.removed.length;me++){const Se=J.removed[me],Re=C.indexOf(Se);Re>=0&&(C[Re]=null,U[Re].disconnect(Se))}for(let me=0;me<J.added.length;me++){const Se=J.added[me];let Re=C.indexOf(Se);if(Re===-1){for(let ot=0;ot<U.length;ot++)if(ot>=C.length){C.push(Se),Re=ot;break}else if(C[ot]===null){C[ot]=Se,Re=ot;break}if(Re===-1)break}const Le=U[Re];Le&&Le.connect(Se)}}const B=new se,K=new se;function Y(J,me,Se){B.setFromMatrixPosition(me.matrixWorld),K.setFromMatrixPosition(Se.matrixWorld);const Re=B.distanceTo(K),Le=me.projectionMatrix.elements,ot=Se.projectionMatrix.elements,Ke=Le[14]/(Le[10]-1),Ht=Le[14]/(Le[10]+1),Bt=(Le[9]+1)/Le[5],ft=(Le[9]-1)/Le[5],F=(Le[8]-1)/Le[0],Ln=(ot[8]+1)/ot[0],gt=Ke*F,it=Ke*Ln,We=Re/(-F+Ln),Ct=We*-F;if(me.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ct),J.translateZ(We),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Le[10]===-1)J.projectionMatrix.copy(me.projectionMatrix),J.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Ve=Ke+We,L=Ht+We,T=gt-Ct,te=it+(Re-Ct),ge=Bt*Ht/L*Ve,be=ft*Ht/L*Ve;J.projectionMatrix.makePerspective(T,te,ge,be,Ve,L),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Ee(J,me){me===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(me.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let me=J.near,Se=J.far;A.texture!==null&&(A.depthNear>0&&(me=A.depthNear),A.depthFar>0&&(Se=A.depthFar)),w.near=q.near=I.near=me,w.far=q.far=I.far=Se,(V!==w.near||ce!==w.far)&&(l.updateRenderState({depthNear:w.near,depthFar:w.far}),V=w.near,ce=w.far),I.layers.mask=J.layers.mask|2,q.layers.mask=J.layers.mask|4,w.layers.mask=I.layers.mask|q.layers.mask;const Re=J.parent,Le=w.cameras;Ee(w,Re);for(let ot=0;ot<Le.length;ot++)Ee(Le[ot],Re);Le.length===2?Y(w,I,q):w.projectionMatrix.copy(I.projectionMatrix),N(J,w,Re)};function N(J,me,Se){Se===null?J.matrix.copy(me.matrixWorld):(J.matrix.copy(Se.matrixWorld),J.matrix.invert(),J.matrix.multiply(me.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(me.projectionMatrix),J.projectionMatrixInverse.copy(me.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ud*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(v===null&&M===null))return p},this.setFoveation=function(J){p=J,v!==null&&(v.fixedFoveation=J),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=J)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(w)};let ee=null;function ye(J,me){if(g=me.getViewerPose(m||h),E=me,g!==null){const Se=g.views;M!==null&&(e.setRenderTargetFramebuffer(O,M.framebuffer),e.setRenderTarget(O));let Re=!1;Se.length!==w.cameras.length&&(w.cameras.length=0,Re=!0);for(let Ke=0;Ke<Se.length;Ke++){const Ht=Se[Ke];let Bt=null;if(M!==null)Bt=M.getViewport(Ht);else{const F=x.getViewSubImage(v,Ht);Bt=F.viewport,Ke===0&&(e.setRenderTargetTextures(O,F.colorTexture,F.depthStencilTexture),e.setRenderTarget(O))}let ft=D[Ke];ft===void 0&&(ft=new oi,ft.layers.enable(Ke),ft.viewport=new $t,D[Ke]=ft),ft.matrix.fromArray(Ht.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(Ht.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),Ke===0&&(w.matrix.copy(ft.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Re===!0&&w.cameras.push(ft)}const Le=l.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&x){const Ke=x.getDepthInformation(Se[0]);Ke&&Ke.isValid&&Ke.texture&&A.init(e,Ke,l.renderState)}}for(let Se=0;Se<U.length;Se++){const Re=C[Se],Le=U[Se];Re!==null&&Le!==void 0&&Le.update(Re,me,m||h)}ee&&ee(J,me),me.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:me}),E=null}const Me=new Mv;Me.setAnimationLoop(ye),this.setAnimationLoop=function(J){ee=J},this.dispose=function(){}}}const yr=new ca,wA=new sn;function CA(r,e){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function s(y,_){_.color.getRGB(y.fogColor.value,_v(r)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,O,U,C){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(y,_):_.isMeshToonMaterial?(c(y,_),x(y,_)):_.isMeshPhongMaterial?(c(y,_),g(y,_)):_.isMeshStandardMaterial?(c(y,_),v(y,_),_.isMeshPhysicalMaterial&&M(y,_,C)):_.isMeshMatcapMaterial?(c(y,_),E(y,_)):_.isMeshDepthMaterial?c(y,_):_.isMeshDistanceMaterial?(c(y,_),A(y,_)):_.isMeshNormalMaterial?c(y,_):_.isLineBasicMaterial?(h(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?p(y,_,O,U):_.isSpriteMaterial?m(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Fn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Fn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const O=e.get(_),U=O.envMap,C=O.envMapRotation;U&&(y.envMap.value=U,yr.copy(C),yr.x*=-1,yr.y*=-1,yr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),y.envMapRotation.value.setFromMatrix4(wA.makeRotationFromEuler(yr)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function p(y,_,O,U){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*O,y.scale.value=U*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function m(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function x(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function v(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,O){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Fn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,_){_.matcap&&(y.matcap.value=_.matcap)}function A(y,_){const O=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function DA(r,e,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(O,U){const C=U.program;s.uniformBlockBinding(O,C)}function m(O,U){let C=l[O.id];C===void 0&&(E(O),C=g(O),l[O.id]=C,O.addEventListener("dispose",y));const H=U.program;s.updateUBOMapping(O,H);const k=e.render.frame;c[O.id]!==k&&(v(O),c[O.id]=k)}function g(O){const U=x();O.__bindingPointIndex=U;const C=r.createBuffer(),H=O.__size,k=O.usage;return r.bindBuffer(r.UNIFORM_BUFFER,C),r.bufferData(r.UNIFORM_BUFFER,H,k),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,C),C}function x(){for(let O=0;O<d;O++)if(h.indexOf(O)===-1)return h.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(O){const U=l[O.id],C=O.uniforms,H=O.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let k=0,I=C.length;k<I;k++){const q=Array.isArray(C[k])?C[k]:[C[k]];for(let D=0,w=q.length;D<w;D++){const V=q[D];if(M(V,k,D,H)===!0){const ce=V.__offset,oe=Array.isArray(V.value)?V.value:[V.value];let xe=0;for(let de=0;de<oe.length;de++){const B=oe[de],K=A(B);typeof B=="number"||typeof B=="boolean"?(V.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,ce+xe,V.__data)):B.isMatrix3?(V.__data[0]=B.elements[0],V.__data[1]=B.elements[1],V.__data[2]=B.elements[2],V.__data[3]=0,V.__data[4]=B.elements[3],V.__data[5]=B.elements[4],V.__data[6]=B.elements[5],V.__data[7]=0,V.__data[8]=B.elements[6],V.__data[9]=B.elements[7],V.__data[10]=B.elements[8],V.__data[11]=0):(B.toArray(V.__data,xe),xe+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ce,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(O,U,C,H){const k=O.value,I=U+"_"+C;if(H[I]===void 0)return typeof k=="number"||typeof k=="boolean"?H[I]=k:H[I]=k.clone(),!0;{const q=H[I];if(typeof k=="number"||typeof k=="boolean"){if(q!==k)return H[I]=k,!0}else if(q.equals(k)===!1)return q.copy(k),!0}return!1}function E(O){const U=O.uniforms;let C=0;const H=16;for(let I=0,q=U.length;I<q;I++){const D=Array.isArray(U[I])?U[I]:[U[I]];for(let w=0,V=D.length;w<V;w++){const ce=D[w],oe=Array.isArray(ce.value)?ce.value:[ce.value];for(let xe=0,de=oe.length;xe<de;xe++){const B=oe[xe],K=A(B),Y=C%H,Ee=Y%K.boundary,N=Y+Ee;C+=Ee,N!==0&&H-N<K.storage&&(C+=H-N),ce.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=C,C+=K.storage}}}const k=C%H;return k>0&&(C+=H-k),O.__size=C,O.__cache={},this}function A(O){const U={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(U.boundary=4,U.storage=4):O.isVector2?(U.boundary=8,U.storage=8):O.isVector3||O.isColor?(U.boundary=16,U.storage=12):O.isVector4?(U.boundary=16,U.storage=16):O.isMatrix3?(U.boundary=48,U.storage=48):O.isMatrix4?(U.boundary=64,U.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),U}function y(O){const U=O.target;U.removeEventListener("dispose",y);const C=h.indexOf(U.__bindingPointIndex);h.splice(C,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function _(){for(const O in l)r.deleteBuffer(l[O]);h=[],l={},c={}}return{bind:p,update:m,dispose:_}}class UA{constructor(e={}){const{canvas:i=dM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const E=new Uint32Array(4),A=new Int32Array(4);let y=null,_=null;const O=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let H=!1;this._outputColorSpace=si;let k=0,I=0,q=null,D=-1,w=null;const V=new $t,ce=new $t;let oe=null;const xe=new Pt(0);let de=0,B=i.width,K=i.height,Y=1,Ee=null,N=null;const ee=new $t(0,0,B,K),ye=new $t(0,0,B,K);let Me=!1;const J=new yv;let me=!1,Se=!1;const Re=new sn,Le=new sn,ot=new se,Ke=new $t,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function ft(){return q===null?Y:1}let F=s;function Ln(R,j){return i.getContext(R,j)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Hd}`),i.addEventListener("webglcontextlost",_e,!1),i.addEventListener("webglcontextrestored",ze,!1),i.addEventListener("webglcontextcreationerror",Oe,!1),F===null){const j="webgl2";if(F=Ln(j,R),F===null)throw Ln(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let gt,it,We,Ct,Ve,L,T,te,ge,be,fe,Pe,we,Ge,$e,Ae,Fe,Ye,Qe,Be,ct,nt,Dt,X;function Ne(){gt=new GT(F),gt.init(),nt=new EA(F,gt),it=new OT(F,gt,e,nt),We=new SA(F,gt),it.reverseDepthBuffer&&v&&We.buffers.depth.setReversed(!0),Ct=new XT(F),Ve=new lA,L=new MA(F,gt,We,Ve,it,nt,Ct),T=new BT(C),te=new HT(C),ge=new KM(F),Dt=new LT(F,ge),be=new VT(F,ge,Ct,Dt),fe=new qT(F,be,ge,Ct),Qe=new WT(F,it,L),Ae=new PT(Ve),Pe=new oA(C,T,te,gt,it,Dt,Ae),we=new CA(C,Ve),Ge=new uA,$e=new gA(gt),Ye=new UT(C,T,te,We,fe,M,p),Fe=new xA(C,fe,it),X=new DA(F,Ct,it,We),Be=new NT(F,gt,Ct),ct=new kT(F,gt,Ct),Ct.programs=Pe.programs,C.capabilities=it,C.extensions=gt,C.properties=Ve,C.renderLists=Ge,C.shadowMap=Fe,C.state=We,C.info=Ct}Ne();const le=new RA(C,F);this.xr=le,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=gt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=gt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(B,K,!1))},this.getSize=function(R){return R.set(B,K)},this.setSize=function(R,j,ae=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,K=j,i.width=Math.floor(R*Y),i.height=Math.floor(j*Y),ae===!0&&(i.style.width=R+"px",i.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(B*Y,K*Y).floor()},this.setDrawingBufferSize=function(R,j,ae){B=R,K=j,Y=ae,i.width=Math.floor(R*ae),i.height=Math.floor(j*ae),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(V)},this.getViewport=function(R){return R.copy(ee)},this.setViewport=function(R,j,ae,re){R.isVector4?ee.set(R.x,R.y,R.z,R.w):ee.set(R,j,ae,re),We.viewport(V.copy(ee).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(ye)},this.setScissor=function(R,j,ae,re){R.isVector4?ye.set(R.x,R.y,R.z,R.w):ye.set(R,j,ae,re),We.scissor(ce.copy(ye).multiplyScalar(Y).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(R){We.setScissorTest(Me=R)},this.setOpaqueSort=function(R){Ee=R},this.setTransparentSort=function(R){N=R},this.getClearColor=function(R){return R.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,ae=!0){let re=0;if(R){let Z=!1;if(q!==null){const Te=q.texture.format;Z=Te===qd||Te===Wd||Te===Xd}if(Z){const Te=q.texture.type,Ce=Te===la||Te===wr||Te===Wo||Te===qo||Te===Vd||Te===kd,De=Ye.getClearColor(),Ie=Ye.getClearAlpha(),et=De.r,qe=De.g,Xe=De.b;Ce?(E[0]=et,E[1]=qe,E[2]=Xe,E[3]=Ie,F.clearBufferuiv(F.COLOR,0,E)):(A[0]=et,A[1]=qe,A[2]=Xe,A[3]=Ie,F.clearBufferiv(F.COLOR,0,A))}else re|=F.COLOR_BUFFER_BIT}j&&(re|=F.DEPTH_BUFFER_BIT),ae&&(re|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_e,!1),i.removeEventListener("webglcontextrestored",ze,!1),i.removeEventListener("webglcontextcreationerror",Oe,!1),Ye.dispose(),Ge.dispose(),$e.dispose(),Ve.dispose(),T.dispose(),te.dispose(),fe.dispose(),Dt.dispose(),X.dispose(),Pe.dispose(),le.dispose(),le.removeEventListener("sessionstart",on),le.removeEventListener("sessionend",xn),Nn.stop()};function _e(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function ze(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const R=Ct.autoReset,j=Fe.enabled,ae=Fe.autoUpdate,re=Fe.needsUpdate,Z=Fe.type;Ne(),Ct.autoReset=R,Fe.enabled=j,Fe.autoUpdate=ae,Fe.needsUpdate=re,Fe.type=Z}function Oe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function at(R){const j=R.target;j.removeEventListener("dispose",at),Gt(j)}function Gt(R){en(R),Ve.remove(R)}function en(R){const j=Ve.get(R).programs;j!==void 0&&(j.forEach(function(ae){Pe.releaseProgram(ae)}),R.isShaderMaterial&&Pe.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,ae,re,Z,Te){j===null&&(j=Ht);const Ce=Z.isMesh&&Z.matrixWorld.determinant()<0,De=Ja(R,j,ae,re,Z);We.setMaterial(re,Ce);let Ie=ae.index,et=1;if(re.wireframe===!0){if(Ie=be.getWireframeAttribute(ae),Ie===void 0)return;et=2}const qe=ae.drawRange,Xe=ae.attributes.position;let dt=qe.start*et,Et=(qe.start+qe.count)*et;Te!==null&&(dt=Math.max(dt,Te.start*et),Et=Math.min(Et,(Te.start+Te.count)*et)),Ie!==null?(dt=Math.max(dt,0),Et=Math.min(Et,Ie.count)):Xe!=null&&(dt=Math.max(dt,0),Et=Math.min(Et,Xe.count));const Wt=Et-dt;if(Wt<0||Wt===1/0)return;Dt.setup(Z,re,De,ae,Ie);let _t,vt=Be;if(Ie!==null&&(_t=ge.get(Ie),vt=ct,vt.setIndex(_t)),Z.isMesh)re.wireframe===!0?(We.setLineWidth(re.wireframeLinewidth*ft()),vt.setMode(F.LINES)):vt.setMode(F.TRIANGLES);else if(Z.isLine){let je=re.linewidth;je===void 0&&(je=1),We.setLineWidth(je*ft()),Z.isLineSegments?vt.setMode(F.LINES):Z.isLineLoop?vt.setMode(F.LINE_LOOP):vt.setMode(F.LINE_STRIP)}else Z.isPoints?vt.setMode(F.POINTS):Z.isSprite&&vt.setMode(F.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Xc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),vt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))vt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const je=Z._multiDrawStarts,Yt=Z._multiDrawCounts,St=Z._multiDrawCount,bn=Ie?ge.get(Ie).bytesPerElement:1,pa=Ve.get(re).currentProgram.getUniforms();for(let Vt=0;Vt<St;Vt++)pa.setValue(F,"_gl_DrawID",Vt),vt.render(je[Vt]/bn,Yt[Vt])}else if(Z.isInstancedMesh)vt.renderInstances(dt,Wt,Z.count);else if(ae.isInstancedBufferGeometry){const je=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Yt=Math.min(ae.instanceCount,je);vt.renderInstances(dt,Wt,Yt)}else vt.render(dt,Wt)};function Mt(R,j,ae){R.transparent===!0&&R.side===ta&&R.forceSinglePass===!1?(R.side=Fn,R.needsUpdate=!0,ha(R,j,ae),R.side=ja,R.needsUpdate=!0,ha(R,j,ae),R.side=ta):ha(R,j,ae)}this.compile=function(R,j,ae=null){ae===null&&(ae=R),_=$e.get(ae),_.init(j),U.push(_),ae.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),R!==ae&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),_.setupLights();const re=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Te=Z.material;if(Te)if(Array.isArray(Te))for(let Ce=0;Ce<Te.length;Ce++){const De=Te[Ce];Mt(De,ae,Z),re.add(De)}else Mt(Te,ae,Z),re.add(Te)}),_=U.pop(),re},this.compileAsync=function(R,j,ae=null){const re=this.compile(R,j,ae);return new Promise(Z=>{function Te(){if(re.forEach(function(Ce){Ve.get(Ce).currentProgram.isReady()&&re.delete(Ce)}),re.size===0){Z(R);return}setTimeout(Te,10)}gt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Gn=null;function dn(R){Gn&&Gn(R)}function on(){Nn.stop()}function xn(){Nn.start()}const Nn=new Mv;Nn.setAnimationLoop(dn),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(R){Gn=R,le.setAnimationLoop(R),R===null?Nn.stop():Nn.start()},le.addEventListener("sessionstart",on),le.addEventListener("sessionend",xn),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(j),j=le.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,j,q),_=$e.get(R,U.length),_.init(j),U.push(_),Le.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),J.setFromProjectionMatrix(Le),Se=this.localClippingEnabled,me=Ae.init(this.clippingPlanes,Se),y=Ge.get(R,O.length),y.init(),O.push(y),le.enabled===!0&&le.isPresenting===!0){const Te=C.xr.getDepthSensingMesh();Te!==null&&Ka(Te,j,-1/0,C.sortObjects)}Ka(R,j,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(Ee,N),Bt=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Bt&&Ye.addToRenderList(y,R),this.info.render.frame++,me===!0&&Ae.beginShadows();const ae=_.state.shadowsArray;Fe.render(ae,R,j),me===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=y.opaque,Z=y.transmissive;if(_.setupLights(),j.isArrayCamera){const Te=j.cameras;if(Z.length>0)for(let Ce=0,De=Te.length;Ce<De;Ce++){const Ie=Te[Ce];il(re,Z,R,Ie)}Bt&&Ye.render(R);for(let Ce=0,De=Te.length;Ce<De;Ce++){const Ie=Te[Ce];nl(y,R,Ie,Ie.viewport)}}else Z.length>0&&il(re,Z,R,j),Bt&&Ye.render(R),nl(y,R,j);q!==null&&I===0&&(L.updateMultisampleRenderTarget(q),L.updateRenderTargetMipmap(q)),R.isScene===!0&&R.onAfterRender(C,R,j),Dt.resetDefaultState(),D=-1,w=null,U.pop(),U.length>0?(_=U[U.length-1],me===!0&&Ae.setGlobalState(C.clippingPlanes,_.state.camera)):_=null,O.pop(),O.length>0?y=O[O.length-1]:y=null};function Ka(R,j,ae,re){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)ae=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||J.intersectsSprite(R)){re&&Ke.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Le);const Ce=fe.update(R),De=R.material;De.visible&&y.push(R,Ce,De,ae,Ke.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||J.intersectsObject(R))){const Ce=fe.update(R),De=R.material;if(re&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ke.copy(R.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Ke.copy(Ce.boundingSphere.center)),Ke.applyMatrix4(R.matrixWorld).applyMatrix4(Le)),Array.isArray(De)){const Ie=Ce.groups;for(let et=0,qe=Ie.length;et<qe;et++){const Xe=Ie[et],dt=De[Xe.materialIndex];dt&&dt.visible&&y.push(R,Ce,dt,ae,Ke.z,Xe)}}else De.visible&&y.push(R,Ce,De,ae,Ke.z,null)}}const Te=R.children;for(let Ce=0,De=Te.length;Ce<De;Ce++)Ka(Te[Ce],j,ae,re)}function nl(R,j,ae,re){const Z=R.opaque,Te=R.transmissive,Ce=R.transparent;_.setupLightsView(ae),me===!0&&Ae.setGlobalState(C.clippingPlanes,ae),re&&We.viewport(V.copy(re)),Z.length>0&&Qa(Z,j,ae),Te.length>0&&Qa(Te,j,ae),Ce.length>0&&Qa(Ce,j,ae),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function il(R,j,ae,re){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[re.id]===void 0&&(_.state.transmissionRenderTarget[re.id]=new Cr(1,1,{generateMipmaps:!0,type:gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float")?Jo:la,minFilter:Ar,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const Te=_.state.transmissionRenderTarget[re.id],Ce=re.viewport||V;Te.setSize(Ce.z*C.transmissionResolutionScale,Ce.w*C.transmissionResolutionScale);const De=C.getRenderTarget();C.setRenderTarget(Te),C.getClearColor(xe),de=C.getClearAlpha(),de<1&&C.setClearColor(16777215,.5),C.clear(),Bt&&Ye.render(ae);const Ie=C.toneMapping;C.toneMapping=qa;const et=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),_.setupLightsView(re),me===!0&&Ae.setGlobalState(C.clippingPlanes,re),Qa(R,ae,re),L.updateMultisampleRenderTarget(Te),L.updateRenderTargetMipmap(Te),gt.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Xe=0,dt=j.length;Xe<dt;Xe++){const Et=j[Xe],Wt=Et.object,_t=Et.geometry,vt=Et.material,je=Et.group;if(vt.side===ta&&Wt.layers.test(re.layers)){const Yt=vt.side;vt.side=Fn,vt.needsUpdate=!0,fa(Wt,ae,re,_t,vt,je),vt.side=Yt,vt.needsUpdate=!0,qe=!0}}qe===!0&&(L.updateMultisampleRenderTarget(Te),L.updateRenderTargetMipmap(Te))}C.setRenderTarget(De),C.setClearColor(xe,de),et!==void 0&&(re.viewport=et),C.toneMapping=Ie}function Qa(R,j,ae){const re=j.isScene===!0?j.overrideMaterial:null;for(let Z=0,Te=R.length;Z<Te;Z++){const Ce=R[Z],De=Ce.object,Ie=Ce.geometry,et=Ce.group;let qe=Ce.material;qe.allowOverride===!0&&re!==null&&(qe=re),De.layers.test(ae.layers)&&fa(De,j,ae,Ie,qe,et)}}function fa(R,j,ae,re,Z,Te){R.onBeforeRender(C,j,ae,re,Z,Te),R.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(C,j,ae,re,R,Te),Z.transparent===!0&&Z.side===ta&&Z.forceSinglePass===!1?(Z.side=Fn,Z.needsUpdate=!0,C.renderBufferDirect(ae,j,re,Z,R,Te),Z.side=ja,Z.needsUpdate=!0,C.renderBufferDirect(ae,j,re,Z,R,Te),Z.side=ta):C.renderBufferDirect(ae,j,re,Z,R,Te),R.onAfterRender(C,j,ae,re,Z,Te)}function ha(R,j,ae){j.isScene!==!0&&(j=Ht);const re=Ve.get(R),Z=_.state.lights,Te=_.state.shadowsArray,Ce=Z.state.version,De=Pe.getParameters(R,Z.state,Te,j,ae),Ie=Pe.getProgramCacheKey(De);let et=re.programs;re.environment=R.isMeshStandardMaterial?j.environment:null,re.fog=j.fog,re.envMap=(R.isMeshStandardMaterial?te:T).get(R.envMap||re.environment),re.envMapRotation=re.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,et===void 0&&(R.addEventListener("dispose",at),et=new Map,re.programs=et);let qe=et.get(Ie);if(qe!==void 0){if(re.currentProgram===qe&&re.lightsStateVersion===Ce)return Ui(R,De),qe}else De.uniforms=Pe.getUniforms(R),R.onBeforeCompile(De,C),qe=Pe.acquireProgram(De,Ie),et.set(Ie,qe),re.uniforms=De.uniforms;const Xe=re.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xe.clippingPlanes=Ae.uniform),Ui(R,De),re.needsLights=tn(R),re.lightsStateVersion=Ce,re.needsLights&&(Xe.ambientLightColor.value=Z.state.ambient,Xe.lightProbe.value=Z.state.probe,Xe.directionalLights.value=Z.state.directional,Xe.directionalLightShadows.value=Z.state.directionalShadow,Xe.spotLights.value=Z.state.spot,Xe.spotLightShadows.value=Z.state.spotShadow,Xe.rectAreaLights.value=Z.state.rectArea,Xe.ltc_1.value=Z.state.rectAreaLTC1,Xe.ltc_2.value=Z.state.rectAreaLTC2,Xe.pointLights.value=Z.state.point,Xe.pointLightShadows.value=Z.state.pointShadow,Xe.hemisphereLights.value=Z.state.hemi,Xe.directionalShadowMap.value=Z.state.directionalShadowMap,Xe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Xe.spotShadowMap.value=Z.state.spotShadowMap,Xe.spotLightMatrix.value=Z.state.spotLightMatrix,Xe.spotLightMap.value=Z.state.spotLightMap,Xe.pointShadowMap.value=Z.state.pointShadowMap,Xe.pointShadowMatrix.value=Z.state.pointShadowMatrix),re.currentProgram=qe,re.uniformsList=null,qe}function Di(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=Wc.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function Ui(R,j){const ae=Ve.get(R);ae.outputColorSpace=j.outputColorSpace,ae.batching=j.batching,ae.batchingColor=j.batchingColor,ae.instancing=j.instancing,ae.instancingColor=j.instancingColor,ae.instancingMorph=j.instancingMorph,ae.skinning=j.skinning,ae.morphTargets=j.morphTargets,ae.morphNormals=j.morphNormals,ae.morphColors=j.morphColors,ae.morphTargetsCount=j.morphTargetsCount,ae.numClippingPlanes=j.numClippingPlanes,ae.numIntersection=j.numClipIntersection,ae.vertexAlphas=j.vertexAlphas,ae.vertexTangents=j.vertexTangents,ae.toneMapping=j.toneMapping}function Ja(R,j,ae,re,Z){j.isScene!==!0&&(j=Ht),L.resetTextureUnits();const Te=j.fog,Ce=re.isMeshStandardMaterial?j.environment:null,De=q===null?C.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Ns,Ie=(re.isMeshStandardMaterial?te:T).get(re.envMap||Ce),et=re.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,qe=!!ae.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Xe=!!ae.morphAttributes.position,dt=!!ae.morphAttributes.normal,Et=!!ae.morphAttributes.color;let Wt=qa;re.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Wt=C.toneMapping);const _t=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,vt=_t!==void 0?_t.length:0,je=Ve.get(re),Yt=_.state.lights;if(me===!0&&(Se===!0||R!==w)){const pn=R===w&&re.id===D;Ae.setState(re,R,pn)}let St=!1;re.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Yt.state.version||je.outputColorSpace!==De||Z.isBatchedMesh&&je.batching===!1||!Z.isBatchedMesh&&je.batching===!0||Z.isBatchedMesh&&je.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&je.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&je.instancing===!1||!Z.isInstancedMesh&&je.instancing===!0||Z.isSkinnedMesh&&je.skinning===!1||!Z.isSkinnedMesh&&je.skinning===!0||Z.isInstancedMesh&&je.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&je.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&je.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&je.instancingMorph===!1&&Z.morphTexture!==null||je.envMap!==Ie||re.fog===!0&&je.fog!==Te||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Ae.numPlanes||je.numIntersection!==Ae.numIntersection)||je.vertexAlphas!==et||je.vertexTangents!==qe||je.morphTargets!==Xe||je.morphNormals!==dt||je.morphColors!==Et||je.toneMapping!==Wt||je.morphTargetsCount!==vt)&&(St=!0):(St=!0,je.__version=re.version);let bn=je.currentProgram;St===!0&&(bn=ha(re,j,Z));let pa=!1,Vt=!1,Ni=!1;const zt=bn.getUniforms(),Tn=je.uniforms;if(We.useProgram(bn.program)&&(pa=!0,Vt=!0,Ni=!0),re.id!==D&&(D=re.id,Vt=!0),pa||w!==R){We.buffers.depth.getReversed()?(Re.copy(R.projectionMatrix),mM(Re),gM(Re),zt.setValue(F,"projectionMatrix",Re)):zt.setValue(F,"projectionMatrix",R.projectionMatrix),zt.setValue(F,"viewMatrix",R.matrixWorldInverse);const yn=zt.map.cameraPosition;yn!==void 0&&yn.setValue(F,ot.setFromMatrixPosition(R.matrixWorld)),it.logarithmicDepthBuffer&&zt.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&zt.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,Vt=!0,Ni=!0)}if(Z.isSkinnedMesh){zt.setOptional(F,Z,"bindMatrix"),zt.setOptional(F,Z,"bindMatrixInverse");const pn=Z.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),zt.setValue(F,"boneTexture",pn.boneTexture,L))}Z.isBatchedMesh&&(zt.setOptional(F,Z,"batchingTexture"),zt.setValue(F,"batchingTexture",Z._matricesTexture,L),zt.setOptional(F,Z,"batchingIdTexture"),zt.setValue(F,"batchingIdTexture",Z._indirectTexture,L),zt.setOptional(F,Z,"batchingColorTexture"),Z._colorsTexture!==null&&zt.setValue(F,"batchingColorTexture",Z._colorsTexture,L));const ln=ae.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Qe.update(Z,ae,bn),(Vt||je.receiveShadow!==Z.receiveShadow)&&(je.receiveShadow=Z.receiveShadow,zt.setValue(F,"receiveShadow",Z.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Tn.envMap.value=Ie,Tn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&j.environment!==null&&(Tn.envMapIntensity.value=j.environmentIntensity),Vt&&(zt.setValue(F,"toneMappingExposure",C.toneMappingExposure),je.needsLights&&da(Tn,Ni),Te&&re.fog===!0&&we.refreshFogUniforms(Tn,Te),we.refreshMaterialUniforms(Tn,re,Y,K,_.state.transmissionRenderTarget[R.id]),Wc.upload(F,Di(je),Tn,L)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Wc.upload(F,Di(je),Tn,L),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&zt.setValue(F,"center",Z.center),zt.setValue(F,"modelViewMatrix",Z.modelViewMatrix),zt.setValue(F,"normalMatrix",Z.normalMatrix),zt.setValue(F,"modelMatrix",Z.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const pn=re.uniformsGroups;for(let yn=0,xi=pn.length;yn<xi;yn++){const Oi=pn[yn];X.update(Oi,bn),X.bind(Oi,bn)}}return bn}function da(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function tn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(R,j,ae){const re=Ve.get(R);re.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),Ve.get(R.texture).__webglTexture=j,Ve.get(R.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ae,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){const ae=Ve.get(R);ae.__webglFramebuffer=j,ae.__useDefaultFramebuffer=j===void 0};const al=F.createFramebuffer();this.setRenderTarget=function(R,j=0,ae=0){q=R,k=j,I=ae;let re=!0,Z=null,Te=!1,Ce=!1;if(R){const Ie=Ve.get(R);if(Ie.__useDefaultFramebuffer!==void 0)We.bindFramebuffer(F.FRAMEBUFFER,null),re=!1;else if(Ie.__webglFramebuffer===void 0)L.setupRenderTarget(R);else if(Ie.__hasExternalTextures)L.rebindTextures(R,Ve.get(R.texture).__webglTexture,Ve.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Xe=R.depthTexture;if(Ie.__boundDepthTexture!==Xe){if(Xe!==null&&Ve.has(Xe)&&(R.width!==Xe.image.width||R.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(R)}}const et=R.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ce=!0);const qe=Ve.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(qe[j])?Z=qe[j][ae]:Z=qe[j],Te=!0):R.samples>0&&L.useMultisampledRTT(R)===!1?Z=Ve.get(R).__webglMultisampledFramebuffer:Array.isArray(qe)?Z=qe[ae]:Z=qe,V.copy(R.viewport),ce.copy(R.scissor),oe=R.scissorTest}else V.copy(ee).multiplyScalar(Y).floor(),ce.copy(ye).multiplyScalar(Y).floor(),oe=Me;if(ae!==0&&(Z=al),We.bindFramebuffer(F.FRAMEBUFFER,Z)&&re&&We.drawBuffers(R,Z),We.viewport(V),We.scissor(ce),We.setScissorTest(oe),Te){const Ie=Ve.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ie.__webglTexture,ae)}else if(Ce){const Ie=Ve.get(R.texture),et=j;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ie.__webglTexture,ae,et)}else if(R!==null&&ae!==0){const Ie=Ve.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ie.__webglTexture,ae)}D=-1},this.readRenderTargetPixels=function(R,j,ae,re,Z,Te,Ce){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De){We.bindFramebuffer(F.FRAMEBUFFER,De);try{const Ie=R.texture,et=Ie.format,qe=Ie.type;if(!it.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-re&&ae>=0&&ae<=R.height-Z&&F.readPixels(j,ae,re,Z,nt.convert(et),nt.convert(qe),Te)}finally{const Ie=q!==null?Ve.get(q).__webglFramebuffer:null;We.bindFramebuffer(F.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(R,j,ae,re,Z,Te,Ce){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De)if(j>=0&&j<=R.width-re&&ae>=0&&ae<=R.height-Z){We.bindFramebuffer(F.FRAMEBUFFER,De);const Ie=R.texture,et=Ie.format,qe=Ie.type;if(!it.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Xe),F.bufferData(F.PIXEL_PACK_BUFFER,Te.byteLength,F.STREAM_READ),F.readPixels(j,ae,re,Z,nt.convert(et),nt.convert(qe),0);const dt=q!==null?Ve.get(q).__webglFramebuffer:null;We.bindFramebuffer(F.FRAMEBUFFER,dt);const Et=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await pM(F,Et,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Xe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Te),F.deleteBuffer(Xe),F.deleteSync(Et),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,ae=0){const re=Math.pow(2,-ae),Z=Math.floor(R.image.width*re),Te=Math.floor(R.image.height*re),Ce=j!==null?j.x:0,De=j!==null?j.y:0;L.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,ae,0,0,Ce,De,Z,Te),We.unbindTexture()};const rl=F.createFramebuffer(),Li=F.createFramebuffer();this.copyTextureToTexture=function(R,j,ae=null,re=null,Z=0,Te=null){Te===null&&(Z!==0?(Xc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=Z,Z=0):Te=0);let Ce,De,Ie,et,qe,Xe,dt,Et,Wt;const _t=R.isCompressedTexture?R.mipmaps[Te]:R.image;if(ae!==null)Ce=ae.max.x-ae.min.x,De=ae.max.y-ae.min.y,Ie=ae.isBox3?ae.max.z-ae.min.z:1,et=ae.min.x,qe=ae.min.y,Xe=ae.isBox3?ae.min.z:0;else{const ln=Math.pow(2,-Z);Ce=Math.floor(_t.width*ln),De=Math.floor(_t.height*ln),R.isDataArrayTexture?Ie=_t.depth:R.isData3DTexture?Ie=Math.floor(_t.depth*ln):Ie=1,et=0,qe=0,Xe=0}re!==null?(dt=re.x,Et=re.y,Wt=re.z):(dt=0,Et=0,Wt=0);const vt=nt.convert(j.format),je=nt.convert(j.type);let Yt;j.isData3DTexture?(L.setTexture3D(j,0),Yt=F.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(L.setTexture2DArray(j,0),Yt=F.TEXTURE_2D_ARRAY):(L.setTexture2D(j,0),Yt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,j.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,j.unpackAlignment);const St=F.getParameter(F.UNPACK_ROW_LENGTH),bn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),pa=F.getParameter(F.UNPACK_SKIP_PIXELS),Vt=F.getParameter(F.UNPACK_SKIP_ROWS),Ni=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,_t.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,_t.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,et),F.pixelStorei(F.UNPACK_SKIP_ROWS,qe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Xe);const zt=R.isDataArrayTexture||R.isData3DTexture,Tn=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const ln=Ve.get(R),pn=Ve.get(j),yn=Ve.get(ln.__renderTarget),xi=Ve.get(pn.__renderTarget);We.bindFramebuffer(F.READ_FRAMEBUFFER,yn.__webglFramebuffer),We.bindFramebuffer(F.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let Oi=0;Oi<Ie;Oi++)zt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ve.get(R).__webglTexture,Z,Xe+Oi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ve.get(j).__webglTexture,Te,Wt+Oi)),F.blitFramebuffer(et,qe,Ce,De,dt,Et,Ce,De,F.DEPTH_BUFFER_BIT,F.NEAREST);We.bindFramebuffer(F.READ_FRAMEBUFFER,null),We.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||Ve.has(R)){const ln=Ve.get(R),pn=Ve.get(j);We.bindFramebuffer(F.READ_FRAMEBUFFER,rl),We.bindFramebuffer(F.DRAW_FRAMEBUFFER,Li);for(let yn=0;yn<Ie;yn++)zt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ln.__webglTexture,Z,Xe+yn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ln.__webglTexture,Z),Tn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,pn.__webglTexture,Te,Wt+yn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,pn.__webglTexture,Te),Z!==0?F.blitFramebuffer(et,qe,Ce,De,dt,Et,Ce,De,F.COLOR_BUFFER_BIT,F.NEAREST):Tn?F.copyTexSubImage3D(Yt,Te,dt,Et,Wt+yn,et,qe,Ce,De):F.copyTexSubImage2D(Yt,Te,dt,Et,et,qe,Ce,De);We.bindFramebuffer(F.READ_FRAMEBUFFER,null),We.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Tn?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(Yt,Te,dt,Et,Wt,Ce,De,Ie,vt,je,_t.data):j.isCompressedArrayTexture?F.compressedTexSubImage3D(Yt,Te,dt,Et,Wt,Ce,De,Ie,vt,_t.data):F.texSubImage3D(Yt,Te,dt,Et,Wt,Ce,De,Ie,vt,je,_t):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Te,dt,Et,Ce,De,vt,je,_t.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Te,dt,Et,_t.width,_t.height,vt,_t.data):F.texSubImage2D(F.TEXTURE_2D,Te,dt,Et,Ce,De,vt,je,_t);F.pixelStorei(F.UNPACK_ROW_LENGTH,St),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,bn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,pa),F.pixelStorei(F.UNPACK_SKIP_ROWS,Vt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ni),Te===0&&j.generateMipmaps&&F.generateMipmap(Yt),We.unbindTexture()},this.copyTextureToTexture3D=function(R,j,ae=null,re=null,Z=0){return Xc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,j,ae,re,Z)},this.initRenderTarget=function(R){Ve.get(R).__webglFramebuffer===void 0&&L.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),We.unbindTexture()},this.resetState=function(){k=0,I=0,q=null,We.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Tt._getUnpackColorSpace()}}const Nd="https://github.com/jayhcrawford",Rv="https://www.instagram.com/jaycraw1_",wv="https://www.tiktok.com/@jay.harrison.craw",Cv="https://www.linkedin.com/in/jay-crawford-prod/",LA=r=>{const e=new Date().getFullYear();return r.path=="/"?z.jsx("footer",{style:{fontFamily:Cs},className:""}):z.jsx("footer",{style:{fontFamily:Cs},className:" text-white mx-auto w-full p-4 py-6",children:z.jsxs("div",{id:"footer_content",children:[z.jsxs("div",{className:"md:flex md:justify-between",children:[z.jsxs("div",{className:"",children:[z.jsx("style",{children:`
            .footer_links {
              margin-bottom: 2em;
            }
            .footer_links li {
              margin-bottom: 1em;
              opacity: ${Ic}%;
            }
            .footer_links li:hover {
            text-decoration: underline;
            opacity: 100%;
            }`}),z.jsx("ul",{className:"footer_links text-md text-left",children:z.jsx("li",{children:z.jsxs("a",{href:"mailto:jayhcrawford@gmail.com",children:[z.jsx("p",{className:"font-bold",children:jc}),z.jsxs("span",{className:"font-normal",style:{fontFamily:ra},children:[z.jsx("p",{children:"Los Angeles, CA"}),z.jsx("p",{children:"jayhcrawford@gmail.com"})]})]})})})]}),z.jsxs("div",{className:"grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 text-left",children:[z.jsxs("div",{children:[z.jsx("h2",{className:"text-sm font-bold uppercase",children:"Social"}),z.jsxs("ul",{style:{fontFamily:ra},className:"footer_links font-medium mt-3 mb-10",children:[z.jsx("li",{children:z.jsx("a",{href:Cv,target:"new",className:"hover:underline",children:"LinkedIn"})}),z.jsx("li",{className:"",children:z.jsx("a",{href:Rv,target:"new",className:"hover:underline",children:"Instagram"})}),z.jsx("li",{children:z.jsx("a",{href:wv,target:"new",className:"hover:underline",children:"TikTok"})}),z.jsx("li",{children:z.jsx("a",{href:Nd,target:"new",className:"hover:underline",children:"Github"})})]})]}),z.jsx("div",{})]})]}),z.jsxs("div",{className:"sm:flex sm:items-center sm:justify-between",children:[z.jsxs("span",{style:{fontFamily:ra},className:`font-normal text-sm text-white opacity-${Ic} sm:text-center`,children:[e," - ",jc]}),z.jsx("div",{className:"flex mt-4 sm:justify-center sm:mt-0",children:z.jsxs("a",{href:Nd,target:"new",className:`opacity-${Ic} hover:opacity-100 hover:white ms-5`,children:[z.jsx("svg",{className:"w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:z.jsx("path",{fillRule:"evenodd",d:"M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z",clipRule:"evenodd"})}),z.jsx("span",{className:"sr-only",children:"GitHub account"})]})})]})]})})},NA=()=>z.jsx("div",{style:{fontFamily:ra,display:"flex",justifyContent:"center"},children:z.jsx("div",{children:z.jsx("img",{className:"w-30",style:{marginLeft:"10px"},src:"./LinkedIn_Logo.svg"})})}),OA=r=>z.jsx("div",{className:"social_brick_icon_container",style:{width:"150px"},children:z.jsxs("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 40",className:"social-svg",children:[z.jsx("defs",{children:z.jsx("style",{children:`
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
                    `})}),r.name=="Tiktok"&&z.jsx("path",{className:"social_icon_fg",d:"M34.41,10.31c-3.78-.81-6.59-3.98-6.95-7.82v-.81h-6.35v25.2c-.01,2.95-2.41,5.33-5.36,5.32-1.66,0-3.22-.78-4.23-2.11h0s0,0,0,0c-1.78-2.35-1.33-5.69,1.02-7.48,1.38-1.05,3.19-1.36,4.85-.84v-6.45c-6.38-.88-12.27,3.58-13.15,9.96-.49,3.57.69,7.17,3.21,9.75,4.5,4.61,11.89,4.69,16.5.19,2.25-2.2,3.51-5.2,3.51-8.34v-12.88c2.57,1.83,5.64,2.82,8.8,2.81v-6.31c-.62,0-1.24-.06-1.85-.19h0Z"}),r.name=="Instagram"&&z.jsx("path",{className:"social_icon_fg",d:"M12.23,1.12C6.1,1.12,1.11,6.1,1.11,12.23v15.39c0,6.13,4.99,11.12,11.12,11.12h15.39c6.13,0,11.12-4.99,11.12-11.12v-15.39c0-6.13-4.99-11.12-11.12-11.12h-15.39ZM12.23,2.83h15.39c5.2,0,9.41,4.2,9.41,9.41v15.39c0,5.2-4.2,9.41-9.41,9.41h-15.39c-5.2,0-9.41-4.2-9.41-9.41v-15.39C2.82,7.03,7.02,2.83,12.23,2.83ZM30.18,7.96c-.94,0-1.71.77-1.71,1.71s.77,1.71,1.71,1.71,1.71-.77,1.71-1.71-.77-1.71-1.71-1.71ZM19.92,10.52c-5.19,0-9.41,4.22-9.41,9.41s4.22,9.41,9.41,9.41,9.41-4.22,9.41-9.41-4.22-9.41-9.41-9.41ZM19.92,12.23c4.26,0,7.7,3.44,7.7,7.7s-3.44,7.7-7.7,7.7-7.7-3.44-7.7-7.7,3.44-7.7,7.7-7.7Z"}),r.name=="Discord"&&z.jsx("path",{className:"social_icon_fg",d:"M33.35,7.61c-2.49-1.16-5.15-2.01-7.93-2.49-.34.62-.74,1.45-1.02,2.11-2.96-.44-5.89-.44-8.79,0-.28-.66-.68-1.49-1.03-2.11-2.79.48-5.45,1.33-7.94,2.5C1.62,15.2.26,22.6.94,29.89c3.33,2.49,6.56,4,9.73,4.99.78-1.08,1.48-2.22,2.08-3.43-1.15-.44-2.24-.97-3.28-1.6.28-.2.54-.42.8-.64,6.33,2.96,13.2,2.96,19.45,0,.26.22.53.43.8.64-1.04.63-2.14,1.16-3.29,1.6.6,1.2,1.3,2.35,2.08,3.43,3.18-.99,6.41-2.5,9.74-4.99.8-8.45-1.36-15.79-5.72-22.28h0ZM13.61,25.41c-1.9,0-3.46-1.77-3.46-3.93s1.52-3.94,3.46-3.94,3.49,1.77,3.46,3.94c0,2.16-1.52,3.93-3.46,3.93ZM26.39,25.41c-1.9,0-3.46-1.77-3.46-3.93s1.52-3.94,3.46-3.94,3.49,1.77,3.46,3.94c0,2.16-1.52,3.93-3.46,3.93Z"}),r.name=="Github"&&z.jsx("path",{className:"social_icon_fg",d:"M19.9,1.55C9.52,1.55,1.12,10.01,1.12,20.47c0,8.36,5.38,15.44,12.84,17.95.93.19,1.27-.41,1.27-.91,0-.44-.03-1.94-.03-3.51-5.22,1.13-6.31-2.26-6.31-2.26-.84-2.19-2.08-2.76-2.08-2.76-1.71-1.16.12-1.16.12-1.16,1.9.13,2.89,1.94,2.89,1.94,1.68,2.88,4.38,2.07,5.47,1.57.16-1.22.65-2.07,1.18-2.54-4.17-.44-8.55-2.07-8.55-9.33,0-2.07.75-3.76,1.93-5.07-.19-.47-.84-2.41.19-5.01,0,0,1.59-.5,5.16,1.94,1.53-.41,3.11-.62,4.7-.63,1.59,0,3.2.22,4.69.63,3.58-2.44,5.16-1.94,5.16-1.94,1.03,2.6.37,4.54.19,5.01,1.21,1.32,1.93,3.01,1.93,5.07,0,7.27-4.38,8.86-8.58,9.33.68.6,1.27,1.72,1.27,3.51,0,2.54-.03,4.57-.03,5.2,0,.5.34,1.1,1.27.91,7.46-2.51,12.84-9.59,12.84-17.95.03-10.46-8.4-18.92-18.75-18.92Z"})]})}),PA=()=>{const r=[{name:"Instagram",url:Rv},{name:"Tiktok",url:wv},{name:"Github",url:Nd}];return z.jsx("div",{className:"socialbrick-outer",children:z.jsxs("div",{className:"socialbrick-inner",children:[z.jsx("style",{children:`
                        .glow-button:hover svg {
                            filter: drop-shadow(0 0 10px rgba(255, 255, 255, .5)) drop-shadow(0 0 10px rgba(255, 255, 255, .5));
                        }
                        .glow-button:active svg {
                            filter: none;
                        }
                    `}),r.map((e,i)=>z.jsx("a",{"aria-label":`Our ${e.name}`,href:e.url,target:"_blank",className:"glow-button socialbrick-link",children:z.jsx(OA,{name:e.name})},i))]})})};function BA(r){return r?r.toLowerCase().split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "):""}const bs=()=>z.jsx("span",{className:`${ko} ml-5 mr-5`,children:"|"}),ka=r=>z.jsx("li",{style:{transition:"opacity .1s .1s"},className:`${ko} hover:underline hover:opacity-100`,children:z.jsx(Ur,{to:`${r.name}`,children:BA(r.name)})}),zA=r=>r.path=="/"?z.jsxs(z.Fragment,{children:[z.jsx("nav",{className:"z-10 w-ful",children:z.jsxs("ul",{style:{fontFamily:Go},className:"list-none p-0 pb-4 m-0 flex justify-center text-xl sm:text-3xl md:text-5xl",children:[z.jsx(ka,{name:"about"}),z.jsx(bs,{}),z.jsx(ka,{name:"art"}),z.jsx(bs,{}),z.jsx(ka,{name:"projects"}),z.jsx(bs,{}),z.jsx(ka,{name:"contact"})]})}),z.jsxs("header",{style:{marginBottom:"70px"},children:[z.jsx("h1",{className:"text-center text-white",style:{fontFamily:Cs,fontSize:r.width<500?"3rem":"6rem",fontWeight:"bold"},children:jc}),z.jsx("p",{className:`${ko} text-5xl text-center`,style:{fontFamily:Go},children:"Interdisciplinary Creative & Programmer"}),z.jsx("p",{style:{fontFamily:ra},className:`text-center p-4 ${ko} text-3xl`,children:"Los Angeles, CA"}),z.jsx(PA,{})]})]}):z.jsxs(z.Fragment,{children:[z.jsx("nav",{className:"z-10 w-full mb-5",children:z.jsxs("ul",{style:{fontFamily:Go},className:"list-none p-0 m-0 flex sm:text-2xl md:text-5xl",children:[z.jsx(ka,{name:"about"}),z.jsx(bs,{}),z.jsx(ka,{name:"art"}),z.jsx(bs,{}),z.jsx(ka,{name:"projects"}),z.jsx(bs,{}),z.jsx(ka,{name:"contact"})]})}),z.jsxs("header",{style:{marginBottom:"70px"},children:[z.jsx(Ur,{to:"/",children:z.jsx("h1",{className:"text-white",style:{fontFamily:Cs,fontSize:r.width<500?"1rem":"2rem",fontWeight:"bold"},children:jc})}),z.jsx("p",{className:`${ko} text-3xl text-left`,style:{fontFamily:Go},children:"Interdisciplinary Creative & Programmer"})]})]}),IA=r=>{let e="";return z.jsxs(z.Fragment,{children:[z.jsx("style",{children:`
        #location-bar {
        }

        .location-bar-bttn {
          font-family: ${Go};
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
    
    `}),z.jsx("div",{id:"location-bar",children:r.split().map((i,s)=>(e+="/"+i,z.jsxs("span",{children:[z.jsx(Ur,{to:e,children:z.jsx("button",{className:"location-bar-bttn",children:i})}),s<r.split().length-1&&z.jsx("span",{className:"location-bar-arrow",children:">"})]},`${s}-location`)))})]})},FA=()=>z.jsxs("svg",{id:"Layer_6","data-name":"Layer 6",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 1050 990",children:[z.jsx("defs",{children:z.jsx("style",{children:`
      .cls-1 {
        fill: #0e1a34;
      }

      .cls-2 {
        fill: #0b0f17;
      }

      .cls-3 {
        fill: #1e2b5a;
      }
      `})}),z.jsx("image",{width:"149",height:"149",transform:"translate(-50, -50) scale(9.2)",xlinkHref:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAACVCAYAAABRorhPAAAACXBIWXMAAAGJAAABiQGeLhE1AAABlklEQVR4nO3SoRGDAAAEQcBGIOm/PCQCHQoI8iYEsitfvbhhAAAAfs54Nr7m5f3tI9zTvq0fDU1XHOHZREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5EQFAADwDw4ePAUWKoYQ6wAAAABJRU5ErkJggg=="}),z.jsx("polygon",{className:"cls-3",transform:"translate(-20,0)",points:"1103.99 82.8 1103.99 967.01 1089.6 968.46 1089.61 960.77 1081.92 960.78 1081.93 954.05 1075.2 954.07 1075.21 946.38 1060.81 946.38 1060.82 939.66 1054.03 939.25 1053.14 931.98 1046.41 932 1046.42 925.27 1032.02 925.27 1032.03 917.59 1024.34 917.6 1024.35 910.87 1010.85 910.46 1009.95 903.2 995.56 903.2 995.56 896.48 982.06 896.07 981.17 888.81 974.44 888.82 974.45 882.09 960.05 882.09 960.05 874.42 945.66 874.42 945.66 867.7 925.03 867.7 923.59 860.02 909.19 860.02 909.19 853.31 888.08 853.31 888.08 845.63 873.69 845.63 873.69 838.91 844.9 838.91 844.9 831.24 816.11 831.24 816.11 824.52 766.69 824.52 765.25 816.85 707.68 816.85 707.68 824.52 664.49 824.52 664.49 831.24 628.99 831.24 627.55 838.91 600.2 838.91 600.2 845.63 571.41 845.63 569.97 853.31 542.62 853.31 542.62 860.02 513.84 860.02 512.4 867.7 485.05 867.7 485.05 874.42 456.26 874.42 454.82 882.09 427.47 882.09 427.47 888.81 405.4 888.81 405.4 896.49 376.61 896.49 376.61 903.2 347.82 903.2 347.82 910.88 326.71 910.88 326.71 917.6 297.92 917.6 296.49 925.27 269.14 925.27 269.14 931.99 247.07 931.99 247.07 939.67 218.28 939.67 218.28 946.38 197.17 946.38 195.73 954.06 175.09 954.06 175.09 960.78 146.31 960.78 146.31 968.45 125.2 968.45 125.2 975.17 96.41 975.17 94.97 982.85 74.34 982.85 74.34 989.56 53.22 989.56 51.79 997.24 31.15 997.24 31.15 1003.96 16.76 1003.96 16.76 788.06 10.04 788.06 10.04 148.05 37.39 148.05 38.83 140.37 67.62 140.37 67.62 133.65 103.12 133.65 103.12 125.98 131.91 125.98 131.91 119.26 175.09 119.26 175.09 111.58 218.28 111.58 218.28 104.87 384.29 104.87 384.29 111.58 413.08 111.58 413.08 119.26 427.47 119.26 427.47 125.98 448.58 125.98 449.48 133.23 462.98 133.65 462.98 140.37 477.37 140.37 478.27 147.63 485.05 148.04 485.05 154.76 499.44 154.76 499.44 162.44 513.84 162.44 513.83 169.16 520.56 169.15 521.45 176.41 534.95 176.83 534.94 183.55 542.63 183.54 542.62 191.23 557.02 191.23 557.01 197.95 563.74 197.94 564.64 205.2 578.14 205.61 578.13 212.34 592.52 212.34 593.42 219.59 606.92 220.01 606.92 226.73 628.99 226.73 628.99 234.4 713.91 234.4 715.35 226.73 744.14 226.73 744.14 220.01 771.49 220.01 772.93 212.34 794.04 212.34 794.04 205.62 814.67 205.62 816.11 197.94 837.22 197.94 837.22 191.23 857.86 191.23 859.3 183.55 873.69 183.55 873.69 176.83 894.8 176.83 894.8 169.16 909.19 169.16 909.19 162.44 929.83 162.44 931.27 154.76 945.66 154.76 945.65 148.04 959.15 147.63 960.05 140.37 981.17 140.37 981.17 133.65 995.56 133.65 995.56 125.98 1009.95 125.98 1009.95 119.26 1024.35 119.26 1024.35 111.58 1038.74 111.58 1038.74 104.87 1053.14 104.87 1053.14 97.19 1067.53 97.19 1067.53 90.47 1081.92 90.47 1081.92 82.8 1103.99 82.8"}),z.jsx("polygon",{className:"cls-1",transform:"translate(-20,0)",points:"472.49 231.55 472.49 238.74 508.47 238.74 508.47 245.94 537.26 245.94 537.26 253.13 558.85 253.13 558.85 260.33 580.44 260.33 580.44 267.52 594.84 267.52 594.84 274.72 609.23 274.72 609.23 281.92 623.63 281.92 623.63 289.11 645.22 289.11 645.22 296.31 659.61 296.31 659.61 303.5 681.2 303.5 681.2 310.7 695.6 310.7 695.6 317.89 724.39 317.89 724.39 325.09 767.57 325.09 767.57 332.28 795.64 332.28 796.36 325.09 846.02 325.09 846.74 317.89 882 317.89 882.72 310.7 910.79 310.7 911.51 303.5 939.58 303.5 940.3 296.31 968.37 296.31 969.08 289.11 997.15 289.11 997.87 281.92 1018.74 281.92 1019.46 274.72 1047.53 274.72 1048.25 267.52 1069.12 267.52 1069.84 260.33 1090.71 260.33 1091.43 253.13 1105.83 253.13 1105.83 799.26 1105.11 799.98 1084.24 799.98 1084.24 792.79 1048.25 792.79 1048.25 785.59 997.87 785.59 997.87 778.4 933.1 778.4 933.1 771.2 789.16 771.2 788.44 778.4 738.78 778.4 738.06 785.59 695.6 785.59 694.88 792.79 645.22 792.79 644.5 799.98 602.04 799.98 601.32 807.18 558.85 807.18 558.13 814.37 515.67 814.37 514.95 821.57 472.49 821.57 471.77 828.77 429.31 828.77 428.59 835.96 393.32 835.96 392.6 843.16 350.14 843.16 349.42 850.35 306.96 850.35 306.24 857.55 270.97 857.55 270.25 864.74 227.79 864.74 227.07 871.94 191.8 871.94 191.08 879.13 148.62 879.13 147.9 886.33 112.64 886.33 111.92 893.52 76.65 893.52 75.93 900.72 33.47 900.72 32.75 907.91 11.88 907.91 11.88 274.72 18.87 274.27 19.08 267.52 61.54 267.52 62.26 260.33 104.72 260.33 105.44 253.13 147.9 253.13 148.62 245.94 198.28 245.94 199 238.74 255.86 238.74 256.58 231.55 472.49 231.55"}),z.jsx("polygon",{className:"cls-2",transform:"translate(-20,0)",points:"1108.35 316.15 1108.35 553.56 1101.15 553.56 1101.15 769.38 1086.76 769.38 1086.76 762.19 1050.77 762.19 1050.77 754.99 1021.98 754.99 1021.98 747.8 1000.39 747.8 1000.39 740.6 978.8 740.6 978.8 733.41 964.41 733.41 964.41 726.22 942.82 726.22 942.82 719.02 928.42 719.02 928.42 711.83 914.03 711.83 914.03 704.63 899.63 704.63 899.63 697.44 878.04 697.44 878.04 690.25 863.65 690.25 863.65 683.05 849.25 683.05 849.25 675.86 834.86 675.86 834.86 668.66 813.27 668.66 813.27 661.47 798.88 661.47 798.88 654.27 784.48 654.27 784.48 647.08 762.89 647.08 762.89 639.89 748.5 639.89 748.5 632.69 726.9 632.69 726.9 625.5 712.51 625.5 712.51 618.3 690.92 618.3 690.92 611.11 669.33 611.11 669.33 603.92 640.54 603.92 640.54 596.72 611.75 596.72 611.75 589.53 582.96 589.53 582.96 582.33 554.17 582.33 554.17 575.14 510.99 575.14 510.99 567.95 446.22 567.95 446.22 560.75 352.66 560.75 352.66 567.95 323.87 567.95 323.87 575.14 309.47 575.14 309.47 582.33 295.08 582.33 295.08 589.53 280.69 589.53 280.69 596.72 266.29 596.72 266.29 603.92 251.9 603.92 251.9 611.11 244.7 611.11 244.7 618.3 230.31 618.3 230.31 625.5 223.11 625.5 223.11 632.69 208.72 632.69 208.72 639.89 201.52 639.89 201.52 647.08 194.32 647.08 194.32 654.27 179.93 654.27 179.93 661.47 172.73 661.47 172.73 668.66 165.53 668.66 165.53 675.86 158.34 675.86 158.34 683.05 151.14 683.05 151.14 690.25 136.74 690.25 136.74 697.44 129.55 697.44 129.55 704.63 122.35 704.63 122.35 711.83 115.15 711.83 115.15 719.02 107.96 719.02 107.96 726.22 100.76 726.22 100.76 733.41 93.56 733.41 93.56 740.6 86.36 740.6 86.36 747.8 79.17 747.8 79.17 754.99 71.97 754.99 71.97 762.19 64.77 762.19 64.77 769.38 57.58 769.38 57.58 776.57 50.38 776.57 50.38 783.77 43.18 783.77 43.18 798.16 35.99 798.16 35.99 805.35 28.79 805.35 28.79 812.54 21.59 812.54 21.59 819.74 14.39 819.74 14.39 826.93 0 826.93 0 819.74 7.2 819.74 7.2 366.51 35.99 366.51 35.99 373.71 50.38 373.71 50.38 380.9 71.97 380.9 71.97 388.09 93.56 388.09 93.56 395.29 115.15 395.29 115.15 402.48 136.74 402.48 136.74 409.68 158.34 409.68 158.34 416.87 179.93 416.87 179.93 424.06 208.72 424.06 208.72 431.26 237.5 431.26 237.5 438.45 266.29 438.45 266.29 445.65 302.28 445.65 302.28 452.84 352.66 452.84 352.66 460.03 532.58 460.03 532.58 452.84 590.16 452.84 590.16 445.65 633.34 445.65 633.34 438.45 662.13 438.45 662.13 431.26 690.92 431.26 690.92 424.06 719.71 424.06 719.71 416.87 741.3 416.87 741.3 409.68 762.89 409.68 762.89 402.48 784.48 402.48 784.48 395.29 806.07 395.29 806.07 388.09 827.66 388.09 827.66 380.9 842.06 380.9 842.06 373.71 863.65 373.71 863.65 366.51 885.24 366.51 885.24 359.32 899.63 359.32 899.63 352.12 921.23 352.12 921.23 344.93 942.82 344.93 942.82 337.74 971.61 337.74 971.61 330.54 1000.39 330.54 1000.39 323.35 1043.58 323.35 1043.58 316.15 1108.35 316.15"})]}),HA=r=>z.jsxs(z.Fragment,{children:[z.jsx("style",{children:`
      hr {
      color: white;
      border-width: 2px;
      opacity: ${Ic}%

      }`}),z.jsx(Ur,{to:r.url?r.url:"",children:z.jsx("div",{className:` text-white m-6 justify-center ${r.width<750?"flex flex-col":"flex"}`,children:z.jsxs("div",{className:` ${r.width<750?"flex flex-col items-center":"flex w-[70%]"}`,children:[z.jsx("div",{className:"p-1 m-1",children:z.jsx(GA,{img:r.img})}),z.jsxs("div",{className:`ml-10 ${r.width<750?"mt-8 w-full pr-20":"flex flex-col justify-center mb-10"}`,children:[z.jsx("h4",{style:{fontFamily:Cs},className:"text-2xl",children:r.title}),z.jsx("p",{style:{fontFamily:ra},children:r.about_txt})]})]})})}),z.jsx("hr",{})]}),GA=r=>z.jsxs(z.Fragment,{children:[z.jsx("div",{className:"h-30 w-30 absolute",children:z.jsx("img",{src:"./under_construction.svg"})}),z.jsx("div",{style:{boxShadow:"5px 5px 5px rgba(0, 0, 0, 1)"},className:"w-80 h-60",children:z.jsx("img",{className:"rounded-lg w-80 h-60",style:{objectFit:"cover"},src:r.img})})]}),VA=r=>z.jsxs("div",{style:{fontFamily:ra},children:[z.jsx("hr",{}),r.blog_array.map((e,i)=>z.jsx(HA,{url:e.url?e.url:"",title:e.title,about_txt:e.about_txt,img:e.img,width:r.width},i))]}),kA=r=>z.jsx(VA,{width:r.width,blog_array:r.blog_array}),XA=[{title:"My Place",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/3d-project-icons/orthographic-icon.jpg",about_txt:"Autodesk Maya and Arnold project."},{title:"Door Project",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/3d-project-icons/3d-door-project-icon.jpg",about_txt:"Based on a drawing, built in Blender to emulate the drawing."},{title:"3D Me :-)",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/3d-project-icons/3d-jay-icon.jpg",about_txt:"Fully rigged, simple 3D character modeled after me. This helped me to better understand topology, weight-painting, and rigging."}],WA=[{category:"3D Projects",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/3d-project-icons/orthographic-icon.jpg",url:"3d"},{category:"UrFriends - SASS",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/blog-images/UR_Friends.webp"},{category:"The Book",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/blog-images/TheBook.webp"},{category:"The RIP Sheet",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/blog-images/RIP.webp"},{category:"Widow Bags",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/product-design-icons/widow-icon.jpg"}],qA=[{title:"Projects",url:"/projects"},{title:"3D Projects",url:"hi"}],jA=()=>{const{width:r,height:e}=E1(),i=pe.useRef(null),l=Za().pathname;function c(){return l.split("/").filter((h,d)=>d!==0)}return console.log(l,"is curernt"),pe.useEffect(()=>{const h=new VM,d=new oi(75,window.innerWidth/window.innerHeight,.1,1e3),p=new UA({alpha:!0});p.setClearColor(0,0),p.setSize(window.innerWidth,window.innerHeight),p.domElement.style.position="absolute",p.domElement.style.top="0",p.domElement.style.left="0",p.domElement.style.zIndex="-1",i.current instanceof HTMLElement&&!i.current.hasChildNodes()&&i.current.appendChild(p.domElement);const m=new zs,g=new Zd({color:65280}),x=new Ri(m,g);h.add(x),d.position.z=5;const v=()=>{x.rotation.x+=.01,x.rotation.y+=.01,p.render(h,d),requestAnimationFrame(v)};return v(),()=>{i.current&&i.current.removeChild(p.domElement)}},[]),console.log(r,"is the width; and the height is: ",e),z.jsxs("div",{id:"outer_bg",children:[z.jsx("div",{style:{position:"fixed",top:0,left:0,width:`${r}px`,height:`${e}px`,overflow:"hidden"},children:z.jsx(FA,{})}),z.jsxs("div",{id:"inner_bg",ref:i,style:{position:"relative",width:"95vw",margin:"auto"},children:[z.jsx("div",{className:`flex justify-end ${l=="/"?"mb-60":"mb-30"}`,children:z.jsx("span",{className:"fixed z-100",children:z.jsx("a",{href:Cv,target:"_blank",rel:"noopener noreferrer",children:z.jsx("button",{className:"mt-4 border-2 bg-white p-3 rounded-lg cursor-pointer",children:z.jsx(NA,{})})})})}),z.jsxs("div",{children:[z.jsx(zA,{width:r,path:l}),c().length>1&&z.jsx(IA,{split:c,locationData:qA})]}),z.jsxs("div",{id:"body_div",children:[z.jsx("main",{children:z.jsxs(LS,{children:[z.jsx(Ts,{path:"/about",element:z.jsx(h1,{})}),z.jsx(Ts,{path:"/projects/3d",element:z.jsx(kA,{width:r,blog_array:XA})}),z.jsx(Ts,{path:"/projects",element:z.jsx(_1,{width:r,category_array:WA})}),z.jsx(Ts,{path:"/art",element:z.jsx(S1,{width:r})}),z.jsx(Ts,{path:"/contact",element:z.jsx(M1,{})})]})}),z.jsx(LA,{path:l})]})]})]})};Gy.createRoot(document.getElementById("root")).render(z.jsx(pe.StrictMode,{children:z.jsx(n1,{children:z.jsx(jA,{})})}));
