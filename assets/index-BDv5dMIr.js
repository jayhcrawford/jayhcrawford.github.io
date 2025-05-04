(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Kf={exports:{}},Ro={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d_;function xS(){if(d_)return Ro;d_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:u}}return Ro.Fragment=t,Ro.jsx=i,Ro.jsxs=i,Ro}var p_;function SS(){return p_||(p_=1,Kf.exports=xS()),Kf.exports}var It=SS(),Qf={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_;function yS(){if(m_)return re;m_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function v(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function S(N,$,xt){this.props=N,this.context=$,this.refs=A,this.updater=xt||M}S.prototype.isReactComponent={},S.prototype.setState=function(N,$){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,$,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function _(){}_.prototype=S.prototype;function O(N,$,xt){this.props=N,this.context=$,this.refs=A,this.updater=xt||M}var U=O.prototype=new _;U.constructor=O,E(U,S.prototype),U.isPureReactComponent=!0;var w=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},V=Object.prototype.hasOwnProperty;function z(N,$,xt,yt,Q,pt){return xt=pt.ref,{$$typeof:s,type:N,key:$,ref:xt!==void 0?xt:null,props:pt}}function W(N,$){return z(N.type,$,void 0,void 0,void 0,N.props)}function D(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function C(N){var $={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(xt){return $[xt]})}var G=/\/+/g;function lt(N,$){return typeof N=="object"&&N!==null&&N.key!=null?C(""+N.key):$.toString(36)}function st(){}function vt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(st,st):(N.status="pending",N.then(function($){N.status==="pending"&&(N.status="fulfilled",N.value=$)},function($){N.status==="pending"&&(N.status="rejected",N.reason=$)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function dt(N,$,xt,yt,Q){var pt=typeof N;(pt==="undefined"||pt==="boolean")&&(N=null);var St=!1;if(N===null)St=!0;else switch(pt){case"bigint":case"string":case"number":St=!0;break;case"object":switch(N.$$typeof){case s:case t:St=!0;break;case g:return St=N._init,dt(St(N._payload),$,xt,yt,Q)}}if(St)return Q=Q(N),St=yt===""?"."+lt(N,0):yt,w(Q)?(xt="",St!=null&&(xt=St.replace(G,"$&/")+"/"),dt(Q,$,xt,"",function(oe){return oe})):Q!=null&&(D(Q)&&(Q=W(Q,xt+(Q.key==null||N&&N.key===Q.key?"":(""+Q.key).replace(G,"$&/")+"/")+St)),$.push(Q)),1;St=0;var At=yt===""?".":yt+":";if(w(N))for(var Ut=0;Ut<N.length;Ut++)yt=N[Ut],pt=At+lt(yt,Ut),St+=dt(yt,$,xt,pt,Q);else if(Ut=v(N),typeof Ut=="function")for(N=Ut.call(N),Ut=0;!(yt=N.next()).done;)yt=yt.value,pt=At+lt(yt,Ut++),St+=dt(yt,$,xt,pt,Q);else if(pt==="object"){if(typeof N.then=="function")return dt(vt(N),$,xt,yt,Q);throw $=String(N),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return St}function B(N,$,xt){if(N==null)return N;var yt=[],Q=0;return dt(N,yt,"","",function(pt){return $.call(xt,pt,Q++)}),yt}function Z(N){if(N._status===-1){var $=N._result;$=$(),$.then(function(xt){(N._status===0||N._status===-1)&&(N._status=1,N._result=xt)},function(xt){(N._status===0||N._status===-1)&&(N._status=2,N._result=xt)}),N._status===-1&&(N._status=0,N._result=$)}if(N._status===1)return N._result.default;throw N._result}var Y=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function Mt(){}return re.Children={map:B,forEach:function(N,$,xt){B(N,function(){$.apply(this,arguments)},xt)},count:function(N){var $=0;return B(N,function(){$++}),$},toArray:function(N){return B(N,function($){return $})||[]},only:function(N){if(!D(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},re.Component=S,re.Fragment=i,re.Profiler=l,re.PureComponent=O,re.StrictMode=r,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,re.__COMPILER_RUNTIME={__proto__:null,c:function(N){return F.H.useMemoCache(N)}},re.cache=function(N){return function(){return N.apply(null,arguments)}},re.cloneElement=function(N,$,xt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var yt=E({},N.props),Q=N.key,pt=void 0;if($!=null)for(St in $.ref!==void 0&&(pt=void 0),$.key!==void 0&&(Q=""+$.key),$)!V.call($,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&$.ref===void 0||(yt[St]=$[St]);var St=arguments.length-2;if(St===1)yt.children=xt;else if(1<St){for(var At=Array(St),Ut=0;Ut<St;Ut++)At[Ut]=arguments[Ut+2];yt.children=At}return z(N.type,Q,void 0,void 0,pt,yt)},re.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},re.createElement=function(N,$,xt){var yt,Q={},pt=null;if($!=null)for(yt in $.key!==void 0&&(pt=""+$.key),$)V.call($,yt)&&yt!=="key"&&yt!=="__self"&&yt!=="__source"&&(Q[yt]=$[yt]);var St=arguments.length-2;if(St===1)Q.children=xt;else if(1<St){for(var At=Array(St),Ut=0;Ut<St;Ut++)At[Ut]=arguments[Ut+2];Q.children=At}if(N&&N.defaultProps)for(yt in St=N.defaultProps,St)Q[yt]===void 0&&(Q[yt]=St[yt]);return z(N,pt,void 0,void 0,null,Q)},re.createRef=function(){return{current:null}},re.forwardRef=function(N){return{$$typeof:d,render:N}},re.isValidElement=D,re.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:Z}},re.memo=function(N,$){return{$$typeof:p,type:N,compare:$===void 0?null:$}},re.startTransition=function(N){var $=F.T,xt={};F.T=xt;try{var yt=N(),Q=F.S;Q!==null&&Q(xt,yt),typeof yt=="object"&&yt!==null&&typeof yt.then=="function"&&yt.then(Mt,Y)}catch(pt){Y(pt)}finally{F.T=$}},re.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},re.use=function(N){return F.H.use(N)},re.useActionState=function(N,$,xt){return F.H.useActionState(N,$,xt)},re.useCallback=function(N,$){return F.H.useCallback(N,$)},re.useContext=function(N){return F.H.useContext(N)},re.useDebugValue=function(){},re.useDeferredValue=function(N,$){return F.H.useDeferredValue(N,$)},re.useEffect=function(N,$,xt){var yt=F.H;if(typeof xt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return yt.useEffect(N,$)},re.useId=function(){return F.H.useId()},re.useImperativeHandle=function(N,$,xt){return F.H.useImperativeHandle(N,$,xt)},re.useInsertionEffect=function(N,$){return F.H.useInsertionEffect(N,$)},re.useLayoutEffect=function(N,$){return F.H.useLayoutEffect(N,$)},re.useMemo=function(N,$){return F.H.useMemo(N,$)},re.useOptimistic=function(N,$){return F.H.useOptimistic(N,$)},re.useReducer=function(N,$,xt){return F.H.useReducer(N,$,xt)},re.useRef=function(N){return F.H.useRef(N)},re.useState=function(N){return F.H.useState(N)},re.useSyncExternalStore=function(N,$,xt){return F.H.useSyncExternalStore(N,$,xt)},re.useTransition=function(){return F.H.useTransition()},re.version="19.1.0",re}var g_;function Ed(){return g_||(g_=1,Qf.exports=yS()),Qf.exports}var ht=Ed(),Jf={exports:{}},Co={},$f={exports:{}},th={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __;function MS(){return __||(__=1,function(s){function t(B,Z){var Y=B.length;B.push(Z);t:for(;0<Y;){var Mt=Y-1>>>1,N=B[Mt];if(0<l(N,Z))B[Mt]=Z,B[Y]=N,Y=Mt;else break t}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Z=B[0],Y=B.pop();if(Y!==Z){B[0]=Y;t:for(var Mt=0,N=B.length,$=N>>>1;Mt<$;){var xt=2*(Mt+1)-1,yt=B[xt],Q=xt+1,pt=B[Q];if(0>l(yt,Y))Q<N&&0>l(pt,yt)?(B[Mt]=pt,B[Q]=Y,Mt=Q):(B[Mt]=yt,B[xt]=Y,Mt=xt);else if(Q<N&&0>l(pt,Y))B[Mt]=pt,B[Q]=Y,Mt=Q;else break t}}return Z}function l(B,Z){var Y=B.sortIndex-Z.sortIndex;return Y!==0?Y:B.id-Z.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,x=null,v=3,M=!1,E=!1,A=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function w(B){for(var Z=i(p);Z!==null;){if(Z.callback===null)r(p);else if(Z.startTime<=B)r(p),Z.sortIndex=Z.expirationTime,t(m,Z);else break;Z=i(p)}}function F(B){if(A=!1,w(B),!E)if(i(m)!==null)E=!0,V||(V=!0,lt());else{var Z=i(p);Z!==null&&dt(F,Z.startTime-B)}}var V=!1,z=-1,W=5,D=-1;function C(){return S?!0:!(s.unstable_now()-D<W)}function G(){if(S=!1,V){var B=s.unstable_now();D=B;var Z=!0;try{t:{E=!1,A&&(A=!1,O(z),z=-1),M=!0;var Y=v;try{e:{for(w(B),x=i(m);x!==null&&!(x.expirationTime>B&&C());){var Mt=x.callback;if(typeof Mt=="function"){x.callback=null,v=x.priorityLevel;var N=Mt(x.expirationTime<=B);if(B=s.unstable_now(),typeof N=="function"){x.callback=N,w(B),Z=!0;break e}x===i(m)&&r(m),w(B)}else r(m);x=i(m)}if(x!==null)Z=!0;else{var $=i(p);$!==null&&dt(F,$.startTime-B),Z=!1}}break t}finally{x=null,v=Y,M=!1}Z=void 0}}finally{Z?lt():V=!1}}}var lt;if(typeof U=="function")lt=function(){U(G)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,vt=st.port2;st.port1.onmessage=G,lt=function(){vt.postMessage(null)}}else lt=function(){_(G,0)};function dt(B,Z){z=_(function(){B(s.unstable_now())},Z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(B){switch(v){case 1:case 2:case 3:var Z=3;break;default:Z=v}var Y=v;v=Z;try{return B()}finally{v=Y}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(B,Z){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Y=v;v=B;try{return Z()}finally{v=Y}},s.unstable_scheduleCallback=function(B,Z,Y){var Mt=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Mt+Y:Mt):Y=Mt,B){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=Y+N,B={id:g++,callback:Z,priorityLevel:B,startTime:Y,expirationTime:N,sortIndex:-1},Y>Mt?(B.sortIndex=Y,t(p,B),i(m)===null&&B===i(p)&&(A?(O(z),z=-1):A=!0,dt(F,Y-Mt))):(B.sortIndex=N,t(m,B),E||M||(E=!0,V||(V=!0,lt()))),B},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(B){var Z=v;return function(){var Y=v;v=Z;try{return B.apply(this,arguments)}finally{v=Y}}}}(th)),th}var v_;function ES(){return v_||(v_=1,$f.exports=MS()),$f.exports}var eh={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function TS(){if(x_)return Rn;x_=1;var s=Ed();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:g}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Rn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,g)},Rn.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},Rn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Rn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Rn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:v,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:x,integrity:v,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Rn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Rn.requestFormReset=function(m){r.d.r(m)},Rn.unstable_batchedUpdates=function(m,p){return m(p)},Rn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Rn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Rn.version="19.1.0",Rn}var S_;function bS(){if(S_)return eh.exports;S_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),eh.exports=TS(),eh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_;function AS(){if(y_)return Co;y_=1;var s=ES(),t=Ed(),i=bS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(u(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),e;if(f===o)return d(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=f;else{for(var y=!1,T=c.child;T;){if(T===a){y=!0,a=c,o=f;break}if(T===o){y=!0,o=c,a=f;break}T=T.sibling}if(!y){for(T=f.child;T;){if(T===a){y=!0,a=f,o=c;break}if(T===o){y=!0,o=f,a=c;break}T=T.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),U=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function lt(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var st=Symbol.for("react.client.reference");function vt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===st?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case S:return"Profiler";case A:return"StrictMode";case F:return"Suspense";case V:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case U:return(e.displayName||"Context")+".Provider";case O:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:vt(e.type)||"Memo";case W:n=e._payload,e=e._init;try{return vt(e(n))}catch{}}return null}var dt=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},Mt=[],N=-1;function $(e){return{current:e}}function xt(e){0>N||(e.current=Mt[N],Mt[N]=null,N--)}function yt(e,n){N++,Mt[N]=e.current,e.current=n}var Q=$(null),pt=$(null),St=$(null),At=$(null);function Ut(e,n){switch(yt(St,n),yt(pt,e),yt(Q,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Gg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Gg(n),e=Vg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}xt(Q),yt(Q,e)}function oe(){xt(Q),xt(pt),xt(St)}function Kt(e){e.memoizedState!==null&&yt(At,e);var n=Q.current,a=Vg(n,e.type);n!==a&&(yt(pt,e),yt(Q,a))}function He(e){pt.current===e&&(xt(Q),xt(pt)),At.current===e&&(xt(At),Mo._currentValue=Y)}var Be=Object.prototype.hasOwnProperty,fe=s.unstable_scheduleCallback,I=s.unstable_cancelCallback,Ln=s.unstable_shouldYield,ge=s.unstable_requestPaint,ie=s.unstable_now,Wt=s.unstable_getCurrentPriorityLevel,we=s.unstable_ImmediatePriority,Vt=s.unstable_UserBlockingPriority,L=s.unstable_NormalPriority,b=s.unstable_LowPriority,tt=s.unstable_IdlePriority,mt=s.log,Et=s.unstable_setDisableYieldValue,ct=null,Ot=null;function Rt(e){if(typeof mt=="function"&&Et(e),Ot&&typeof Ot.setStrictMode=="function")try{Ot.setStrictMode(ct,e)}catch{}}var Gt=Math.clz32?Math.clz32:Ft,$t=Math.log,bt=Math.LN2;function Ft(e){return e>>>=0,e===0?32:31-($t(e)/bt|0)|0}var jt=256,Qt=4194304;function Pt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ue(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?c=Pt(o):(y&=T,y!==0?c=Pt(y):a||(a=T&~e,a!==0&&(c=Pt(a))))):(T=o&~f,T!==0?c=Pt(T):y!==0?c=Pt(y):a||(a=o&~e,a!==0&&(c=Pt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function ne(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function De(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var e=jt;return jt<<=1,(jt&4194048)===0&&(jt=256),e}function Lt(){var e=Qt;return Qt<<=1,(Qt&62914560)===0&&(Qt=4194304),e}function ot(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function gt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Bt(e,n,a,o,c,f){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,P=e.expirationTimes,J=e.hiddenUpdates;for(a=y&~a;0<a;){var ut=31-Gt(a),_t=1<<ut;T[ut]=0,P[ut]=-1;var et=J[ut];if(et!==null)for(J[ut]=null,ut=0;ut<et.length;ut++){var nt=et[ut];nt!==null&&(nt.lane&=-536870913)}a&=~_t}o!==0&&Nt(e,o,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~n))}function Nt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Gt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function ae(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Gt(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function Ge(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function tn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Me(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:o_(e.type))}function Vn(e,n){var a=Z.p;try{return Z.p=e,n()}finally{Z.p=a}}var dn=Math.random().toString(36).slice(2),on="__reactFiber$"+dn,xn="__reactProps$"+dn,Nn="__reactContainer$"+dn,Ya="__reactEvents$"+dn,Ko="__reactListeners$"+dn,Qo="__reactHandles$"+dn,ja="__reactResources$"+dn,ua="__reactMarker$"+dn;function ca(e){delete e[on],delete e[xn],delete e[Ya],delete e[Ko],delete e[Qo]}function wi(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Nn]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=qg(e);e!==null;){if(a=e[on])return a;e=qg(e)}return n}e=a,a=e.parentNode}return null}function Di(e){if(e=e[on]||e[Nn]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Za(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function fa(e){var n=e[ja];return n||(n=e[ja]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function en(e){e[ua]=!0}var Jo=new Set,$o={};function Ui(e,n){R(e,n),R(e+"Capture",n)}function R(e,n){for($o[e]=n,e=0;e<n.length;e++)Jo.add(n[e])}var q=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),it={},at={};function j(e){return Be.call(at,e)?!0:Be.call(it,e)?!1:q.test(e)?at[e]=!0:(it[e]=!0,!1)}function Tt(e,n,a){if(j(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ct(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function wt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var zt,te;function qt(e){if(zt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);zt=n&&n[1]||"",te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zt+e+te}var Xt=!1;function de(e,n){if(!e||Xt)return"";Xt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(nt){var et=nt}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(nt){et=nt}e.call(_t.prototype)}}else{try{throw Error()}catch(nt){et=nt}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(nt){if(nt&&et&&typeof nt.stack=="string")return[nt.stack,et.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],T=f[1];if(y&&T){var P=y.split(`
`),J=T.split(`
`);for(c=o=0;o<P.length&&!P[o].includes("DetermineComponentFrameRoot");)o++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(o===P.length||c===J.length)for(o=P.length-1,c=J.length-1;1<=o&&0<=c&&P[o]!==J[c];)c--;for(;1<=o&&0<=c;o--,c--)if(P[o]!==J[c]){if(o!==1||c!==1)do if(o--,c--,0>c||P[o]!==J[c]){var ut=`
`+P[o].replace(" at new "," at ");return e.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",e.displayName)),ut}while(1<=o&&0<=c);break}}}finally{Xt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?qt(a):""}function Ee(e){switch(e.tag){case 26:case 27:case 5:return qt(e.type);case 16:return qt("Lazy");case 13:return qt("Suspense");case 19:return qt("SuspenseList");case 0:case 15:return de(e.type,!1);case 11:return de(e.type.render,!1);case 1:return de(e.type,!0);case 31:return qt("Activity");default:return""}}function We(e){try{var n="";do n+=Ee(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function _e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ve(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Yt(e){var n=ve(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(y){o=""+y,f.call(this,y)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(y){o=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function je(e){e._valueTracker||(e._valueTracker=Yt(e))}function ye(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=ve(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Tn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ha=/[\n"\\]/g;function Ve(e){return e.replace(ha,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Li(e,n,a,o,c,f,y,T){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+_e(n)):e.value!==""+_e(n)&&(e.value=""+_e(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?bn(e,y,_e(n)):a!=null?bn(e,y,_e(a)):o!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+_e(T):e.removeAttribute("name")}function ze(e,n,a,o,c,f,y,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+_e(a):"",n=n!=null?""+_e(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=T?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y)}function bn(e,n,a){n==="number"&&Tn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ln(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+_e(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function pn(e,n,a){if(n!=null&&(n=""+_e(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+_e(a):""}function Sn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(dt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=_e(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function xi(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Ni=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gd(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Ni.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Vd(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&Gd(e,c,o)}else for(var f in n)n.hasOwnProperty(f)&&Gd(e,f,n[f])}function ju(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),v0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tl(e){return v0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Zu=null;function Ku(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dr=null,Ur=null;function kd(e){var n=Di(e);if(n&&(e=n.stateNode)){var a=e[xn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Li(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ve(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[xn]||null;if(!c)throw Error(r(90));Li(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&ye(o)}break t;case"textarea":pn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ln(e,!!a.multiple,n,!1)}}}var Qu=!1;function Xd(e,n,a){if(Qu)return e(n,a);Qu=!0;try{var o=e(n);return o}finally{if(Qu=!1,(Dr!==null||Ur!==null)&&(Fl(),Dr&&(n=Dr,e=Ur,Ur=Dr=null,kd(n),e)))for(n=0;n<e.length;n++)kd(e[n])}}function Os(e,n){var a=e.stateNode;if(a===null)return null;var o=a[xn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ju=!1;if(Oi)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){Ju=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{Ju=!1}var da=null,$u=null,el=null;function Wd(){if(el)return el;var e,n=$u,a=n.length,o,c="value"in da?da.value:da.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var y=a-e;for(o=1;o<=y&&n[a-o]===c[f-o];o++);return el=c.slice(e,1<o?1-o:void 0)}function nl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function il(){return!0}function qd(){return!1}function On(e){function n(a,o,c,f,y){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?il:qd,this.isPropagationStopped=qd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=il)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=il)},persist:function(){},isPersistent:il}),n}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},al=On(Ka),Bs=g({},Ka,{view:0,detail:0}),x0=On(Bs),tc,ec,zs,rl=g({},Bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ic,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zs&&(zs&&e.type==="mousemove"?(tc=e.screenX-zs.screenX,ec=e.screenY-zs.screenY):ec=tc=0,zs=e),tc)},movementY:function(e){return"movementY"in e?e.movementY:ec}}),Yd=On(rl),S0=g({},rl,{dataTransfer:0}),y0=On(S0),M0=g({},Bs,{relatedTarget:0}),nc=On(M0),E0=g({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),T0=On(E0),b0=g({},Ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),A0=On(b0),R0=g({},Ka,{data:0}),jd=On(R0),C0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},w0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},D0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function U0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=D0[e])?!!n[e]:!1}function ic(){return U0}var L0=g({},Bs,{key:function(e){if(e.key){var n=C0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=nl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?w0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ic,charCode:function(e){return e.type==="keypress"?nl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?nl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),N0=On(L0),O0=g({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zd=On(O0),P0=g({},Bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ic}),B0=On(P0),z0=g({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),I0=On(z0),F0=g({},rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),H0=On(F0),G0=g({},Ka,{newState:0,oldState:0}),V0=On(G0),k0=[9,13,27,32],ac=Oi&&"CompositionEvent"in window,Is=null;Oi&&"documentMode"in document&&(Is=document.documentMode);var X0=Oi&&"TextEvent"in window&&!Is,Kd=Oi&&(!ac||Is&&8<Is&&11>=Is),Qd=" ",Jd=!1;function $d(e,n){switch(e){case"keyup":return k0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Lr=!1;function W0(e,n){switch(e){case"compositionend":return tp(n);case"keypress":return n.which!==32?null:(Jd=!0,Qd);case"textInput":return e=n.data,e===Qd&&Jd?null:e;default:return null}}function q0(e,n){if(Lr)return e==="compositionend"||!ac&&$d(e,n)?(e=Wd(),el=$u=da=null,Lr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Kd&&n.locale!=="ko"?null:n.data;default:return null}}var Y0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ep(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Y0[e.type]:n==="textarea"}function np(e,n,a,o){Dr?Ur?Ur.push(o):Ur=[o]:Dr=o,n=Wl(n,"onChange"),0<n.length&&(a=new al("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Fs=null,Hs=null;function j0(e){Bg(e,0)}function sl(e){var n=Za(e);if(ye(n))return e}function ip(e,n){if(e==="change")return n}var ap=!1;if(Oi){var rc;if(Oi){var sc="oninput"in document;if(!sc){var rp=document.createElement("div");rp.setAttribute("oninput","return;"),sc=typeof rp.oninput=="function"}rc=sc}else rc=!1;ap=rc&&(!document.documentMode||9<document.documentMode)}function sp(){Fs&&(Fs.detachEvent("onpropertychange",op),Hs=Fs=null)}function op(e){if(e.propertyName==="value"&&sl(Hs)){var n=[];np(n,Hs,e,Ku(e)),Xd(j0,n)}}function Z0(e,n,a){e==="focusin"?(sp(),Fs=n,Hs=a,Fs.attachEvent("onpropertychange",op)):e==="focusout"&&sp()}function K0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return sl(Hs)}function Q0(e,n){if(e==="click")return sl(n)}function J0(e,n){if(e==="input"||e==="change")return sl(n)}function $0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var kn=typeof Object.is=="function"?Object.is:$0;function Gs(e,n){if(kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Be.call(n,c)||!kn(e[c],n[c]))return!1}return!0}function lp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function up(e,n){var a=lp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=lp(a)}}function cp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?cp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function fp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Tn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Tn(e.document)}return n}function oc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var tx=Oi&&"documentMode"in document&&11>=document.documentMode,Nr=null,lc=null,Vs=null,uc=!1;function hp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;uc||Nr==null||Nr!==Tn(o)||(o=Nr,"selectionStart"in o&&oc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Vs&&Gs(Vs,o)||(Vs=o,o=Wl(lc,"onSelect"),0<o.length&&(n=new al("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Nr)))}function Qa(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Or={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionrun:Qa("Transition","TransitionRun"),transitionstart:Qa("Transition","TransitionStart"),transitioncancel:Qa("Transition","TransitionCancel"),transitionend:Qa("Transition","TransitionEnd")},cc={},dp={};Oi&&(dp=document.createElement("div").style,"AnimationEvent"in window||(delete Or.animationend.animation,delete Or.animationiteration.animation,delete Or.animationstart.animation),"TransitionEvent"in window||delete Or.transitionend.transition);function Ja(e){if(cc[e])return cc[e];if(!Or[e])return e;var n=Or[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in dp)return cc[e]=n[a];return e}var pp=Ja("animationend"),mp=Ja("animationiteration"),gp=Ja("animationstart"),ex=Ja("transitionrun"),nx=Ja("transitionstart"),ix=Ja("transitioncancel"),_p=Ja("transitionend"),vp=new Map,fc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fc.push("scrollEnd");function ui(e,n){vp.set(e,n),Ui(n,[e])}var xp=new WeakMap;function $n(e,n){if(typeof e=="object"&&e!==null){var a=xp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:We(n)},xp.set(e,n),n)}return{value:e,source:n,stack:We(n)}}var ti=[],Pr=0,hc=0;function ol(){for(var e=Pr,n=hc=Pr=0;n<e;){var a=ti[n];ti[n++]=null;var o=ti[n];ti[n++]=null;var c=ti[n];ti[n++]=null;var f=ti[n];if(ti[n++]=null,o!==null&&c!==null){var y=o.pending;y===null?c.next=c:(c.next=y.next,y.next=c),o.pending=c}f!==0&&Sp(a,c,f)}}function ll(e,n,a,o){ti[Pr++]=e,ti[Pr++]=n,ti[Pr++]=a,ti[Pr++]=o,hc|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function dc(e,n,a,o){return ll(e,n,a,o),ul(e)}function Br(e,n){return ll(e,null,null,n),ul(e)}function Sp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Gt(a),e=f.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function ul(e){if(50<po)throw po=0,Sf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var zr={};function ax(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(e,n,a,o){return new ax(e,n,a,o)}function pc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pi(e,n){var a=e.alternate;return a===null?(a=Xn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function yp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function cl(e,n,a,o,c,f){var y=0;if(o=e,typeof e=="function")pc(e)&&(y=1);else if(typeof e=="string")y=sS(e,a,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=Xn(31,a,n,c),e.elementType=D,e.lanes=f,e;case E:return $a(a.children,c,f,n);case A:y=8,c|=24;break;case S:return e=Xn(12,a,n,c|2),e.elementType=S,e.lanes=f,e;case F:return e=Xn(13,a,n,c),e.elementType=F,e.lanes=f,e;case V:return e=Xn(19,a,n,c),e.elementType=V,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case U:y=10;break t;case O:y=9;break t;case w:y=11;break t;case z:y=14;break t;case W:y=16,o=null;break t}y=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=Xn(y,a,n,c),n.elementType=e,n.type=o,n.lanes=f,n}function $a(e,n,a,o){return e=Xn(7,e,o,n),e.lanes=a,e}function mc(e,n,a){return e=Xn(6,e,null,n),e.lanes=a,e}function gc(e,n,a){return n=Xn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ir=[],Fr=0,fl=null,hl=0,ei=[],ni=0,tr=null,Bi=1,zi="";function er(e,n){Ir[Fr++]=hl,Ir[Fr++]=fl,fl=e,hl=n}function Mp(e,n,a){ei[ni++]=Bi,ei[ni++]=zi,ei[ni++]=tr,tr=e;var o=Bi;e=zi;var c=32-Gt(o)-1;o&=~(1<<c),a+=1;var f=32-Gt(n)+c;if(30<f){var y=c-c%5;f=(o&(1<<y)-1).toString(32),o>>=y,c-=y,Bi=1<<32-Gt(n)+c|a<<c|o,zi=f+e}else Bi=1<<f|a<<c|o,zi=e}function _c(e){e.return!==null&&(er(e,1),Mp(e,1,0))}function vc(e){for(;e===fl;)fl=Ir[--Fr],Ir[Fr]=null,hl=Ir[--Fr],Ir[Fr]=null;for(;e===tr;)tr=ei[--ni],ei[ni]=null,zi=ei[--ni],ei[ni]=null,Bi=ei[--ni],ei[ni]=null}var Dn=null,Ze=null,Ae=!1,nr=null,Si=!1,xc=Error(r(519));function ir(e){var n=Error(r(418,""));throw Ws($n(n,e)),xc}function Ep(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[on]=e,n[xn]=o,a){case"dialog":me("cancel",n),me("close",n);break;case"iframe":case"object":case"embed":me("load",n);break;case"video":case"audio":for(a=0;a<go.length;a++)me(go[a],n);break;case"source":me("error",n);break;case"img":case"image":case"link":me("error",n),me("load",n);break;case"details":me("toggle",n);break;case"input":me("invalid",n),ze(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),je(n);break;case"select":me("invalid",n);break;case"textarea":me("invalid",n),Sn(n,o.value,o.defaultValue,o.children),je(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Hg(n.textContent,a)?(o.popover!=null&&(me("beforetoggle",n),me("toggle",n)),o.onScroll!=null&&me("scroll",n),o.onScrollEnd!=null&&me("scrollend",n),o.onClick!=null&&(n.onclick=ql),n=!0):n=!1,n||ir(e)}function Tp(e){for(Dn=e.return;Dn;)switch(Dn.tag){case 5:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:Dn=Dn.return}}function ks(e){if(e!==Dn)return!1;if(!Ae)return Tp(e),Ae=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Bf(e.type,e.memoizedProps)),a=!a),a&&Ze&&ir(e),Tp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Ze=fi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Ze=null}}else n===27?(n=Ze,wa(e.type)?(e=Hf,Hf=null,Ze=e):Ze=n):Ze=Dn?fi(e.stateNode.nextSibling):null;return!0}function Xs(){Ze=Dn=null,Ae=!1}function bp(){var e=nr;return e!==null&&(zn===null?zn=e:zn.push.apply(zn,e),nr=null),e}function Ws(e){nr===null?nr=[e]:nr.push(e)}var Sc=$(null),ar=null,Ii=null;function pa(e,n,a){yt(Sc,n._currentValue),n._currentValue=a}function Fi(e){e._currentValue=Sc.current,xt(Sc)}function yc(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Mc(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var y=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var P=0;P<n.length;P++)if(T.context===n[P]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),yc(f.return,a,e),o||(y=null);break t}f=T.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(r(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),yc(y,a,e),y=null}else y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===e){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function qs(e,n,a,o){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var T=c.type;kn(c.pendingProps.value,y.value)||(e!==null?e.push(T):e=[T])}}else if(c===At.current){if(y=c.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Mo):e=[Mo])}c=c.return}e!==null&&Mc(n,e,a,o),n.flags|=262144}function dl(e){for(e=e.firstContext;e!==null;){if(!kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function rr(e){ar=e,Ii=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return Ap(ar,e)}function pl(e,n){return ar===null&&rr(e),Ap(e,n)}function Ap(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ii===null){if(e===null)throw Error(r(308));Ii=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ii=Ii.next=n;return a}var rx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},sx=s.unstable_scheduleCallback,ox=s.unstable_NormalPriority,un={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ec(){return{controller:new rx,data:new Map,refCount:0}}function Ys(e){e.refCount--,e.refCount===0&&sx(ox,function(){e.controller.abort()})}var js=null,Tc=0,Hr=0,Gr=null;function lx(e,n){if(js===null){var a=js=[];Tc=0,Hr=Rf(),Gr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Tc++,n.then(Rp,Rp),n}function Rp(){if(--Tc===0&&js!==null){Gr!==null&&(Gr.status="fulfilled");var e=js;js=null,Hr=0,Gr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function ux(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Cp=B.S;B.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&lx(e,n),Cp!==null&&Cp(e,n)};var sr=$(null);function bc(){var e=sr.current;return e!==null?e:ke.pooledCache}function ml(e,n){n===null?yt(sr,sr.current):yt(sr,n.pool)}function wp(){var e=bc();return e===null?null:{parent:un._currentValue,pool:e}}var Zs=Error(r(460)),Dp=Error(r(474)),gl=Error(r(542)),Ac={then:function(){}};function Up(e){return e=e.status,e==="fulfilled"||e==="rejected"}function _l(){}function Lp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(_l,_l),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Op(e),e;default:if(typeof n.status=="string")n.then(_l,_l);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Op(e),e}throw Ks=n,Zs}}var Ks=null;function Np(){if(Ks===null)throw Error(r(459));var e=Ks;return Ks=null,e}function Op(e){if(e===Zs||e===gl)throw Error(r(483))}var ma=!1;function Rc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _a(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Re&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=ul(e),Sp(e,null,a),n}return ll(e,o,n,a),ul(e)}function Qs(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ae(e,a)}}function wc(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Dc=!1;function Js(){if(Dc){var e=Gr;if(e!==null)throw e}}function $s(e,n,a,o){Dc=!1;var c=e.updateQueue;ma=!1;var f=c.firstBaseUpdate,y=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var P=T,J=P.next;P.next=null,y===null?f=J:y.next=J,y=P;var ut=e.alternate;ut!==null&&(ut=ut.updateQueue,T=ut.lastBaseUpdate,T!==y&&(T===null?ut.firstBaseUpdate=J:T.next=J,ut.lastBaseUpdate=P))}if(f!==null){var _t=c.baseState;y=0,ut=J=P=null,T=f;do{var et=T.lane&-536870913,nt=et!==T.lane;if(nt?(Se&et)===et:(o&et)===et){et!==0&&et===Hr&&(Dc=!0),ut!==null&&(ut=ut.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ee=e,Zt=T;et=n;var Ne=a;switch(Zt.tag){case 1:if(ee=Zt.payload,typeof ee=="function"){_t=ee.call(Ne,_t,et);break t}_t=ee;break t;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=Zt.payload,et=typeof ee=="function"?ee.call(Ne,_t,et):ee,et==null)break t;_t=g({},_t,et);break t;case 2:ma=!0}}et=T.callback,et!==null&&(e.flags|=64,nt&&(e.flags|=8192),nt=c.callbacks,nt===null?c.callbacks=[et]:nt.push(et))}else nt={lane:et,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ut===null?(J=ut=nt,P=_t):ut=ut.next=nt,y|=et;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;nt=T,T=nt.next,nt.next=null,c.lastBaseUpdate=nt,c.shared.pending=null}}while(!0);ut===null&&(P=_t),c.baseState=P,c.firstBaseUpdate=J,c.lastBaseUpdate=ut,f===null&&(c.shared.lanes=0),ba|=y,e.lanes=y,e.memoizedState=_t}}function Pp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Bp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Pp(a[e],n)}var Vr=$(null),vl=$(0);function zp(e,n){e=qi,yt(vl,e),yt(Vr,n),qi=e|n.baseLanes}function Uc(){yt(vl,qi),yt(Vr,Vr.current)}function Lc(){qi=vl.current,xt(Vr),xt(vl)}var va=0,ce=null,Ue=null,nn=null,xl=!1,kr=!1,or=!1,Sl=0,to=0,Xr=null,cx=0;function Qe(){throw Error(r(321))}function Nc(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!kn(e[a],n[a]))return!1;return!0}function Oc(e,n,a,o,c,f){return va=f,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=e===null||e.memoizedState===null?Sm:ym,or=!1,f=a(o,c),or=!1,kr&&(f=Fp(n,a,o,c)),Ip(e),f}function Ip(e){B.H=Al;var n=Ue!==null&&Ue.next!==null;if(va=0,nn=Ue=ce=null,xl=!1,to=0,Xr=null,n)throw Error(r(300));e===null||mn||(e=e.dependencies,e!==null&&dl(e)&&(mn=!0))}function Fp(e,n,a,o){ce=e;var c=0;do{if(kr&&(Xr=null),to=0,kr=!1,25<=c)throw Error(r(301));if(c+=1,nn=Ue=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=_x,f=n(a,o)}while(kr);return f}function fx(){var e=B.H,n=e.useState()[0];return n=typeof n.then=="function"?eo(n):n,e=e.useState()[0],(Ue!==null?Ue.memoizedState:null)!==e&&(ce.flags|=1024),n}function Pc(){var e=Sl!==0;return Sl=0,e}function Bc(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function zc(e){if(xl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}xl=!1}va=0,nn=Ue=ce=null,kr=!1,to=Sl=0,Xr=null}function Pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?ce.memoizedState=nn=e:nn=nn.next=e,nn}function an(){if(Ue===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var n=nn===null?ce.memoizedState:nn.next;if(n!==null)nn=n,Ue=e;else{if(e===null)throw ce.alternate===null?Error(r(467)):Error(r(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},nn===null?ce.memoizedState=nn=e:nn=nn.next=e}return nn}function Ic(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function eo(e){var n=to;return to+=1,Xr===null&&(Xr=[]),e=Lp(Xr,e,n),n=ce,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?Sm:ym),e}function yl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return eo(e);if(e.$$typeof===U)return An(e)}throw Error(r(438,String(e)))}function Fc(e){var n=null,a=ce.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ce.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ic(),ce.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=C;return n.index++,a}function Hi(e,n){return typeof n=="function"?n(e):n}function Ml(e){var n=an();return Hc(n,Ue,e)}function Hc(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=e.baseQueue,f=o.pending;if(f!==null){if(c!==null){var y=c.next;c.next=f.next,f.next=y}n.baseQueue=c=f,o.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var T=y=null,P=null,J=n,ut=!1;do{var _t=J.lane&-536870913;if(_t!==J.lane?(Se&_t)===_t:(va&_t)===_t){var et=J.revertLane;if(et===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),_t===Hr&&(ut=!0);else if((va&et)===et){J=J.next,et===Hr&&(ut=!0);continue}else _t={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(T=P=_t,y=f):P=P.next=_t,ce.lanes|=et,ba|=et;_t=J.action,or&&a(f,_t),f=J.hasEagerState?J.eagerState:a(f,_t)}else et={lane:_t,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(T=P=et,y=f):P=P.next=et,ce.lanes|=_t,ba|=_t;J=J.next}while(J!==null&&J!==n);if(P===null?y=f:P.next=T,!kn(f,e.memoizedState)&&(mn=!0,ut&&(a=Gr,a!==null)))throw a;e.memoizedState=f,e.baseState=y,e.baseQueue=P,o.lastRenderedState=f}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Gc(e){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var y=c=c.next;do f=e(f,y.action),y=y.next;while(y!==c);kn(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Hp(e,n,a){var o=ce,c=an(),f=Ae;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!kn((Ue||c).memoizedState,a);y&&(c.memoizedState=a,mn=!0),c=c.queue;var T=kp.bind(null,o,c,e);if(no(2048,8,T,[e]),c.getSnapshot!==n||y||nn!==null&&nn.memoizedState.tag&1){if(o.flags|=2048,Wr(9,El(),Vp.bind(null,o,c,a,n),null),ke===null)throw Error(r(349));f||(va&124)!==0||Gp(o,n,a)}return a}function Gp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ce.updateQueue,n===null?(n=Ic(),ce.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Vp(e,n,a,o){n.value=a,n.getSnapshot=o,Xp(n)&&Wp(e)}function kp(e,n,a){return a(function(){Xp(n)&&Wp(e)})}function Xp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!kn(e,a)}catch{return!0}}function Wp(e){var n=Br(e,2);n!==null&&Zn(n,e,2)}function Vc(e){var n=Pn();if(typeof e=="function"){var a=e;if(e=a(),or){Rt(!0);try{a()}finally{Rt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:e},n}function qp(e,n,a,o){return e.baseState=a,Hc(e,Ue,typeof o=="function"?o:Hi)}function hx(e,n,a,o,c){if(bl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};B.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Yp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Yp(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var f=B.T,y={};B.T=y;try{var T=a(c,o),P=B.S;P!==null&&P(y,T),jp(e,n,T)}catch(J){kc(e,n,J)}finally{B.T=f}}else try{f=a(c,o),jp(e,n,f)}catch(J){kc(e,n,J)}}function jp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Zp(e,n,o)},function(o){return kc(e,n,o)}):Zp(e,n,a)}function Zp(e,n,a){n.status="fulfilled",n.value=a,Kp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Yp(e,a)))}function kc(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Kp(n),n=n.next;while(n!==o)}e.action=null}function Kp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Qp(e,n){return n}function Jp(e,n){if(Ae){var a=ke.formState;if(a!==null){t:{var o=ce;if(Ae){if(Ze){e:{for(var c=Ze,f=Si;c.nodeType!==8;){if(!f){c=null;break e}if(c=fi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ze=fi(c.nextSibling),o=c.data==="F!";break t}}ir(o)}o=!1}o&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qp,lastRenderedState:n},a.queue=o,a=_m.bind(null,ce,o),o.dispatch=a,o=Vc(!1),f=jc.bind(null,ce,!1,o.queue),o=Pn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=hx.bind(null,ce,c,f,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function $p(e){var n=an();return tm(n,Ue,e)}function tm(e,n,a){if(n=Hc(e,n,Qp)[0],e=Ml(Hi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=eo(n)}catch(y){throw y===Zs?gl:y}else o=n;n=an();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ce.flags|=2048,Wr(9,El(),dx.bind(null,c,a),null)),[o,f,e]}function dx(e,n){e.action=n}function em(e){var n=an(),a=Ue;if(a!==null)return tm(n,a,e);an(),n=n.memoizedState,a=an();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Wr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ce.updateQueue,n===null&&(n=Ic(),ce.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function El(){return{destroy:void 0,resource:void 0}}function nm(){return an().memoizedState}function Tl(e,n,a,o){var c=Pn();o=o===void 0?null:o,ce.flags|=e,c.memoizedState=Wr(1|n,El(),a,o)}function no(e,n,a,o){var c=an();o=o===void 0?null:o;var f=c.memoizedState.inst;Ue!==null&&o!==null&&Nc(o,Ue.memoizedState.deps)?c.memoizedState=Wr(n,f,a,o):(ce.flags|=e,c.memoizedState=Wr(1|n,f,a,o))}function im(e,n){Tl(8390656,8,e,n)}function am(e,n){no(2048,8,e,n)}function rm(e,n){return no(4,2,e,n)}function sm(e,n){return no(4,4,e,n)}function om(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function lm(e,n,a){a=a!=null?a.concat([e]):null,no(4,4,om.bind(null,n,e),a)}function Xc(){}function um(e,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Nc(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function cm(e,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Nc(n,o[1]))return o[0];if(o=e(),or){Rt(!0);try{e()}finally{Rt(!1)}}return a.memoizedState=[o,n],o}function Wc(e,n,a){return a===void 0||(va&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=dg(),ce.lanes|=e,ba|=e,a)}function fm(e,n,a,o){return kn(a,n)?a:Vr.current!==null?(e=Wc(e,a,o),kn(e,n)||(mn=!0),e):(va&42)===0?(mn=!0,e.memoizedState=a):(e=dg(),ce.lanes|=e,ba|=e,n)}function hm(e,n,a,o,c){var f=Z.p;Z.p=f!==0&&8>f?f:8;var y=B.T,T={};B.T=T,jc(e,!1,n,a);try{var P=c(),J=B.S;if(J!==null&&J(T,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ut=ux(P,o);io(e,n,ut,jn(e))}else io(e,n,o,jn(e))}catch(_t){io(e,n,{then:function(){},status:"rejected",reason:_t},jn())}finally{Z.p=f,B.T=y}}function px(){}function qc(e,n,a,o){if(e.tag!==5)throw Error(r(476));var c=dm(e).queue;hm(e,c,n,Y,a===null?px:function(){return pm(e),a(o)})}function dm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function pm(e){var n=dm(e).next.queue;io(e,n,{},jn())}function Yc(){return An(Mo)}function mm(){return an().memoizedState}function gm(){return an().memoizedState}function mx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=jn();e=ga(a);var o=_a(n,e,a);o!==null&&(Zn(o,n,a),Qs(o,n,a)),n={cache:Ec()},e.payload=n;return}n=n.return}}function gx(e,n,a){var o=jn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},bl(e)?vm(n,a):(a=dc(e,n,a,o),a!==null&&(Zn(a,e,o),xm(a,n,o)))}function _m(e,n,a){var o=jn();io(e,n,a,o)}function io(e,n,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(bl(e))vm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,T=f(y,a);if(c.hasEagerState=!0,c.eagerState=T,kn(T,y))return ll(e,n,c,0),ke===null&&ol(),!1}catch{}finally{}if(a=dc(e,n,c,o),a!==null)return Zn(a,e,o),xm(a,n,o),!0}return!1}function jc(e,n,a,o){if(o={lane:2,revertLane:Rf(),action:o,hasEagerState:!1,eagerState:null,next:null},bl(e)){if(n)throw Error(r(479))}else n=dc(e,a,o,2),n!==null&&Zn(n,e,2)}function bl(e){var n=e.alternate;return e===ce||n!==null&&n===ce}function vm(e,n){kr=xl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function xm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ae(e,a)}}var Al={readContext:An,use:yl,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe},Sm={readContext:An,use:yl,useCallback:function(e,n){return Pn().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:im,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Tl(4194308,4,om.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Tl(4194308,4,e,n)},useInsertionEffect:function(e,n){Tl(4,2,e,n)},useMemo:function(e,n){var a=Pn();n=n===void 0?null:n;var o=e();if(or){Rt(!0);try{e()}finally{Rt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Pn();if(a!==void 0){var c=a(n);if(or){Rt(!0);try{a(n)}finally{Rt(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=gx.bind(null,ce,e),[o.memoizedState,e]},useRef:function(e){var n=Pn();return e={current:e},n.memoizedState=e},useState:function(e){e=Vc(e);var n=e.queue,a=_m.bind(null,ce,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Xc,useDeferredValue:function(e,n){var a=Pn();return Wc(a,e,n)},useTransition:function(){var e=Vc(!1);return e=hm.bind(null,ce,e.queue,!0,!1),Pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ce,c=Pn();if(Ae){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),ke===null)throw Error(r(349));(Se&124)!==0||Gp(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,im(kp.bind(null,o,f,e),[e]),o.flags|=2048,Wr(9,El(),Vp.bind(null,o,f,a,n),null),a},useId:function(){var e=Pn(),n=ke.identifierPrefix;if(Ae){var a=zi,o=Bi;a=(o&~(1<<32-Gt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Sl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=cx++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Yc,useFormState:Jp,useActionState:Jp,useOptimistic:function(e){var n=Pn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=jc.bind(null,ce,!0,a),a.dispatch=n,[e,n]},useMemoCache:Fc,useCacheRefresh:function(){return Pn().memoizedState=mx.bind(null,ce)}},ym={readContext:An,use:yl,useCallback:um,useContext:An,useEffect:am,useImperativeHandle:lm,useInsertionEffect:rm,useLayoutEffect:sm,useMemo:cm,useReducer:Ml,useRef:nm,useState:function(){return Ml(Hi)},useDebugValue:Xc,useDeferredValue:function(e,n){var a=an();return fm(a,Ue.memoizedState,e,n)},useTransition:function(){var e=Ml(Hi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:eo(e),n]},useSyncExternalStore:Hp,useId:mm,useHostTransitionStatus:Yc,useFormState:$p,useActionState:$p,useOptimistic:function(e,n){var a=an();return qp(a,Ue,e,n)},useMemoCache:Fc,useCacheRefresh:gm},_x={readContext:An,use:yl,useCallback:um,useContext:An,useEffect:am,useImperativeHandle:lm,useInsertionEffect:rm,useLayoutEffect:sm,useMemo:cm,useReducer:Gc,useRef:nm,useState:function(){return Gc(Hi)},useDebugValue:Xc,useDeferredValue:function(e,n){var a=an();return Ue===null?Wc(a,e,n):fm(a,Ue.memoizedState,e,n)},useTransition:function(){var e=Gc(Hi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:eo(e),n]},useSyncExternalStore:Hp,useId:mm,useHostTransitionStatus:Yc,useFormState:em,useActionState:em,useOptimistic:function(e,n){var a=an();return Ue!==null?qp(a,Ue,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Fc,useCacheRefresh:gm},qr=null,ao=0;function Rl(e){var n=ao;return ao+=1,qr===null&&(qr=[]),Lp(qr,e,n)}function ro(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Cl(e,n){throw n.$$typeof===x?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Mm(e){var n=e._init;return n(e._payload)}function Em(e){function n(X,H){if(e){var K=X.deletions;K===null?(X.deletions=[H],X.flags|=16):K.push(H)}}function a(X,H){if(!e)return null;for(;H!==null;)n(X,H),H=H.sibling;return null}function o(X){for(var H=new Map;X!==null;)X.key!==null?H.set(X.key,X):H.set(X.index,X),X=X.sibling;return H}function c(X,H){return X=Pi(X,H),X.index=0,X.sibling=null,X}function f(X,H,K){return X.index=K,e?(K=X.alternate,K!==null?(K=K.index,K<H?(X.flags|=67108866,H):K):(X.flags|=67108866,H)):(X.flags|=1048576,H)}function y(X){return e&&X.alternate===null&&(X.flags|=67108866),X}function T(X,H,K,ft){return H===null||H.tag!==6?(H=mc(K,X.mode,ft),H.return=X,H):(H=c(H,K),H.return=X,H)}function P(X,H,K,ft){var Ht=K.type;return Ht===E?ut(X,H,K.props.children,ft,K.key):H!==null&&(H.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===W&&Mm(Ht)===H.type)?(H=c(H,K.props),ro(H,K),H.return=X,H):(H=cl(K.type,K.key,K.props,null,X.mode,ft),ro(H,K),H.return=X,H)}function J(X,H,K,ft){return H===null||H.tag!==4||H.stateNode.containerInfo!==K.containerInfo||H.stateNode.implementation!==K.implementation?(H=gc(K,X.mode,ft),H.return=X,H):(H=c(H,K.children||[]),H.return=X,H)}function ut(X,H,K,ft,Ht){return H===null||H.tag!==7?(H=$a(K,X.mode,ft,Ht),H.return=X,H):(H=c(H,K),H.return=X,H)}function _t(X,H,K){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=mc(""+H,X.mode,K),H.return=X,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case v:return K=cl(H.type,H.key,H.props,null,X.mode,K),ro(K,H),K.return=X,K;case M:return H=gc(H,X.mode,K),H.return=X,H;case W:var ft=H._init;return H=ft(H._payload),_t(X,H,K)}if(dt(H)||lt(H))return H=$a(H,X.mode,K,null),H.return=X,H;if(typeof H.then=="function")return _t(X,Rl(H),K);if(H.$$typeof===U)return _t(X,pl(X,H),K);Cl(X,H)}return null}function et(X,H,K,ft){var Ht=H!==null?H.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Ht!==null?null:T(X,H,""+K,ft);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case v:return K.key===Ht?P(X,H,K,ft):null;case M:return K.key===Ht?J(X,H,K,ft):null;case W:return Ht=K._init,K=Ht(K._payload),et(X,H,K,ft)}if(dt(K)||lt(K))return Ht!==null?null:ut(X,H,K,ft,null);if(typeof K.then=="function")return et(X,H,Rl(K),ft);if(K.$$typeof===U)return et(X,H,pl(X,K),ft);Cl(X,K)}return null}function nt(X,H,K,ft,Ht){if(typeof ft=="string"&&ft!==""||typeof ft=="number"||typeof ft=="bigint")return X=X.get(K)||null,T(H,X,""+ft,Ht);if(typeof ft=="object"&&ft!==null){switch(ft.$$typeof){case v:return X=X.get(ft.key===null?K:ft.key)||null,P(H,X,ft,Ht);case M:return X=X.get(ft.key===null?K:ft.key)||null,J(H,X,ft,Ht);case W:var he=ft._init;return ft=he(ft._payload),nt(X,H,K,ft,Ht)}if(dt(ft)||lt(ft))return X=X.get(K)||null,ut(H,X,ft,Ht,null);if(typeof ft.then=="function")return nt(X,H,K,Rl(ft),Ht);if(ft.$$typeof===U)return nt(X,H,K,pl(H,ft),Ht);Cl(H,ft)}return null}function ee(X,H,K,ft){for(var Ht=null,he=null,kt=H,Jt=H=0,_n=null;kt!==null&&Jt<K.length;Jt++){kt.index>Jt?(_n=kt,kt=null):_n=kt.sibling;var Te=et(X,kt,K[Jt],ft);if(Te===null){kt===null&&(kt=_n);break}e&&kt&&Te.alternate===null&&n(X,kt),H=f(Te,H,Jt),he===null?Ht=Te:he.sibling=Te,he=Te,kt=_n}if(Jt===K.length)return a(X,kt),Ae&&er(X,Jt),Ht;if(kt===null){for(;Jt<K.length;Jt++)kt=_t(X,K[Jt],ft),kt!==null&&(H=f(kt,H,Jt),he===null?Ht=kt:he.sibling=kt,he=kt);return Ae&&er(X,Jt),Ht}for(kt=o(kt);Jt<K.length;Jt++)_n=nt(kt,X,Jt,K[Jt],ft),_n!==null&&(e&&_n.alternate!==null&&kt.delete(_n.key===null?Jt:_n.key),H=f(_n,H,Jt),he===null?Ht=_n:he.sibling=_n,he=_n);return e&&kt.forEach(function(Oa){return n(X,Oa)}),Ae&&er(X,Jt),Ht}function Zt(X,H,K,ft){if(K==null)throw Error(r(151));for(var Ht=null,he=null,kt=H,Jt=H=0,_n=null,Te=K.next();kt!==null&&!Te.done;Jt++,Te=K.next()){kt.index>Jt?(_n=kt,kt=null):_n=kt.sibling;var Oa=et(X,kt,Te.value,ft);if(Oa===null){kt===null&&(kt=_n);break}e&&kt&&Oa.alternate===null&&n(X,kt),H=f(Oa,H,Jt),he===null?Ht=Oa:he.sibling=Oa,he=Oa,kt=_n}if(Te.done)return a(X,kt),Ae&&er(X,Jt),Ht;if(kt===null){for(;!Te.done;Jt++,Te=K.next())Te=_t(X,Te.value,ft),Te!==null&&(H=f(Te,H,Jt),he===null?Ht=Te:he.sibling=Te,he=Te);return Ae&&er(X,Jt),Ht}for(kt=o(kt);!Te.done;Jt++,Te=K.next())Te=nt(kt,X,Jt,Te.value,ft),Te!==null&&(e&&Te.alternate!==null&&kt.delete(Te.key===null?Jt:Te.key),H=f(Te,H,Jt),he===null?Ht=Te:he.sibling=Te,he=Te);return e&&kt.forEach(function(vS){return n(X,vS)}),Ae&&er(X,Jt),Ht}function Ne(X,H,K,ft){if(typeof K=="object"&&K!==null&&K.type===E&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case v:t:{for(var Ht=K.key;H!==null;){if(H.key===Ht){if(Ht=K.type,Ht===E){if(H.tag===7){a(X,H.sibling),ft=c(H,K.props.children),ft.return=X,X=ft;break t}}else if(H.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===W&&Mm(Ht)===H.type){a(X,H.sibling),ft=c(H,K.props),ro(ft,K),ft.return=X,X=ft;break t}a(X,H);break}else n(X,H);H=H.sibling}K.type===E?(ft=$a(K.props.children,X.mode,ft,K.key),ft.return=X,X=ft):(ft=cl(K.type,K.key,K.props,null,X.mode,ft),ro(ft,K),ft.return=X,X=ft)}return y(X);case M:t:{for(Ht=K.key;H!==null;){if(H.key===Ht)if(H.tag===4&&H.stateNode.containerInfo===K.containerInfo&&H.stateNode.implementation===K.implementation){a(X,H.sibling),ft=c(H,K.children||[]),ft.return=X,X=ft;break t}else{a(X,H);break}else n(X,H);H=H.sibling}ft=gc(K,X.mode,ft),ft.return=X,X=ft}return y(X);case W:return Ht=K._init,K=Ht(K._payload),Ne(X,H,K,ft)}if(dt(K))return ee(X,H,K,ft);if(lt(K)){if(Ht=lt(K),typeof Ht!="function")throw Error(r(150));return K=Ht.call(K),Zt(X,H,K,ft)}if(typeof K.then=="function")return Ne(X,H,Rl(K),ft);if(K.$$typeof===U)return Ne(X,H,pl(X,K),ft);Cl(X,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,H!==null&&H.tag===6?(a(X,H.sibling),ft=c(H,K),ft.return=X,X=ft):(a(X,H),ft=mc(K,X.mode,ft),ft.return=X,X=ft),y(X)):a(X,H)}return function(X,H,K,ft){try{ao=0;var Ht=Ne(X,H,K,ft);return qr=null,Ht}catch(kt){if(kt===Zs||kt===gl)throw kt;var he=Xn(29,kt,null,X.mode);return he.lanes=ft,he.return=X,he}finally{}}}var Yr=Em(!0),Tm=Em(!1),ii=$(null),yi=null;function xa(e){var n=e.alternate;yt(cn,cn.current&1),yt(ii,e),yi===null&&(n===null||Vr.current!==null||n.memoizedState!==null)&&(yi=e)}function bm(e){if(e.tag===22){if(yt(cn,cn.current),yt(ii,e),yi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(yi=e)}}else Sa()}function Sa(){yt(cn,cn.current),yt(ii,ii.current)}function Gi(e){xt(ii),yi===e&&(yi=null),xt(cn)}var cn=$(0);function wl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Ff(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Zc(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Kc={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=jn(),c=ga(o);c.payload=n,a!=null&&(c.callback=a),n=_a(e,c,o),n!==null&&(Zn(n,e,o),Qs(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=jn(),c=ga(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=_a(e,c,o),n!==null&&(Zn(n,e,o),Qs(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=jn(),o=ga(a);o.tag=2,n!=null&&(o.callback=n),n=_a(e,o,a),n!==null&&(Zn(n,e,a),Qs(n,e,a))}};function Am(e,n,a,o,c,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,y):n.prototype&&n.prototype.isPureReactComponent?!Gs(a,o)||!Gs(c,f):!0}function Rm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Kc.enqueueReplaceState(n,n.state,null)}function lr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var Dl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Cm(e){Dl(e)}function wm(e){console.error(e)}function Dm(e){Dl(e)}function Ul(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Um(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Qc(e,n,a){return a=ga(a),a.tag=3,a.payload={element:null},a.callback=function(){Ul(e,n)},a}function Lm(e){return e=ga(e),e.tag=3,e}function Nm(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;e.payload=function(){return c(f)},e.callback=function(){Um(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){Um(n,a,o),typeof c!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function vx(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&qs(n,a,c,!0),a=ii.current,a!==null){switch(a.tag){case 13:return yi===null?Mf():a.alternate===null&&Ke===0&&(Ke=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Ac?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Tf(e,o,c)),!1;case 22:return a.flags|=65536,o===Ac?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Tf(e,o,c)),!1}throw Error(r(435,a.tag))}return Tf(e,o,c),Mf(),!1}if(Ae)return n=ii.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==xc&&(e=Error(r(422),{cause:o}),Ws($n(e,a)))):(o!==xc&&(n=Error(r(423),{cause:o}),Ws($n(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=$n(o,a),c=Qc(e.stateNode,o,c),wc(e,c),Ke!==4&&(Ke=2)),!1;var f=Error(r(520),{cause:o});if(f=$n(f,a),ho===null?ho=[f]:ho.push(f),Ke!==4&&(Ke=2),n===null)return!0;o=$n(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Qc(a.stateNode,o,e),wc(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Aa===null||!Aa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Lm(c),Nm(c,e,a,o),wc(a,c),!1}a=a.return}while(a!==null);return!1}var Om=Error(r(461)),mn=!1;function yn(e,n,a,o){n.child=e===null?Tm(n,null,a,o):Yr(n,e.child,a,o)}function Pm(e,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var y={};for(var T in o)T!=="ref"&&(y[T]=o[T])}else y=o;return rr(n),o=Oc(e,n,a,y,f,c),T=Pc(),e!==null&&!mn?(Bc(e,n,c),Vi(e,n,c)):(Ae&&T&&_c(n),n.flags|=1,yn(e,n,o,c),n.child)}function Bm(e,n,a,o,c){if(e===null){var f=a.type;return typeof f=="function"&&!pc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,zm(e,n,f,o,c)):(e=cl(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!sf(e,c)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:Gs,a(y,o)&&e.ref===n.ref)return Vi(e,n,c)}return n.flags|=1,e=Pi(f,o),e.ref=n.ref,e.return=n,n.child=e}function zm(e,n,a,o,c){if(e!==null){var f=e.memoizedProps;if(Gs(f,o)&&e.ref===n.ref)if(mn=!1,n.pendingProps=o=f,sf(e,c))(e.flags&131072)!==0&&(mn=!0);else return n.lanes=e.lanes,Vi(e,n,c)}return Jc(e,n,a,o,c)}function Im(e,n,a){var o=n.pendingProps,c=o.children,f=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return Fm(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ml(n,f!==null?f.cachePool:null),f!==null?zp(n,f):Uc(),bm(n);else return n.lanes=n.childLanes=536870912,Fm(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(ml(n,f.cachePool),zp(n,f),Sa(),n.memoizedState=null):(e!==null&&ml(n,null),Uc(),Sa());return yn(e,n,c,a),n.child}function Fm(e,n,a,o){var c=bc();return c=c===null?null:{parent:un._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&ml(n,null),Uc(),bm(n),e!==null&&qs(e,n,o,!0),null}function Ll(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Jc(e,n,a,o,c){return rr(n),a=Oc(e,n,a,o,void 0,c),o=Pc(),e!==null&&!mn?(Bc(e,n,c),Vi(e,n,c)):(Ae&&o&&_c(n),n.flags|=1,yn(e,n,a,c),n.child)}function Hm(e,n,a,o,c,f){return rr(n),n.updateQueue=null,a=Fp(n,o,a,c),Ip(e),o=Pc(),e!==null&&!mn?(Bc(e,n,f),Vi(e,n,f)):(Ae&&o&&_c(n),n.flags|=1,yn(e,n,a,f),n.child)}function Gm(e,n,a,o,c){if(rr(n),n.stateNode===null){var f=zr,y=a.contextType;typeof y=="object"&&y!==null&&(f=An(y)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Kc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Rc(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?An(y):zr,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Zc(n,a,y,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&Kc.enqueueReplaceState(f,f.state,null),$s(n,o,f,c),Js(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,P=lr(a,T);f.props=P;var J=f.context,ut=a.contextType;y=zr,typeof ut=="object"&&ut!==null&&(y=An(ut));var _t=a.getDerivedStateFromProps;ut=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||J!==y)&&Rm(n,f,o,y),ma=!1;var et=n.memoizedState;f.state=et,$s(n,o,f,c),Js(),J=n.memoizedState,T||et!==J||ma?(typeof _t=="function"&&(Zc(n,a,_t,o),J=n.memoizedState),(P=ma||Am(n,a,P,o,et,J,y))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=J),f.props=o,f.state=J,f.context=y,o=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Cc(e,n),y=n.memoizedProps,ut=lr(a,y),f.props=ut,_t=n.pendingProps,et=f.context,J=a.contextType,P=zr,typeof J=="object"&&J!==null&&(P=An(J)),T=a.getDerivedStateFromProps,(J=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==_t||et!==P)&&Rm(n,f,o,P),ma=!1,et=n.memoizedState,f.state=et,$s(n,o,f,c),Js();var nt=n.memoizedState;y!==_t||et!==nt||ma||e!==null&&e.dependencies!==null&&dl(e.dependencies)?(typeof T=="function"&&(Zc(n,a,T,o),nt=n.memoizedState),(ut=ma||Am(n,a,ut,o,et,nt,P)||e!==null&&e.dependencies!==null&&dl(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,nt,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,nt,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=nt),f.props=o,f.state=nt,f.context=P,o=ut):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Ll(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Yr(n,e.child,null,c),n.child=Yr(n,null,a,c)):yn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Vi(e,n,c),e}function Vm(e,n,a,o){return Xs(),n.flags|=256,yn(e,n,a,o),n.child}var $c={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function tf(e){return{baseLanes:e,cachePool:wp()}}function ef(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ai),e}function km(e,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(cn.current&2)!==0),y&&(c=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ae){if(c?xa(n):Sa(),Ae){var T=Ze,P;if(P=T){t:{for(P=T,T=Si;P.nodeType!==8;){if(!T){T=null;break t}if(P=fi(P.nextSibling),P===null){T=null;break t}}T=P}T!==null?(n.memoizedState={dehydrated:T,treeContext:tr!==null?{id:Bi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},P=Xn(18,null,null,0),P.stateNode=T,P.return=n,n.child=P,Dn=n,Ze=null,P=!0):P=!1}P||ir(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Ff(T)?n.lanes=32:n.lanes=536870912,null;Gi(n)}return T=o.children,o=o.fallback,c?(Sa(),c=n.mode,T=Nl({mode:"hidden",children:T},c),o=$a(o,c,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,c=n.child,c.memoizedState=tf(a),c.childLanes=ef(e,y,a),n.memoizedState=$c,o):(xa(n),nf(n,T))}if(P=e.memoizedState,P!==null&&(T=P.dehydrated,T!==null)){if(f)n.flags&256?(xa(n),n.flags&=-257,n=af(e,n,a)):n.memoizedState!==null?(Sa(),n.child=e.child,n.flags|=128,n=null):(Sa(),c=o.fallback,T=n.mode,o=Nl({mode:"visible",children:o.children},T),c=$a(c,T,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,Yr(n,e.child,null,a),o=n.child,o.memoizedState=tf(a),o.childLanes=ef(e,y,a),n.memoizedState=$c,n=c);else if(xa(n),Ff(T)){if(y=T.nextSibling&&T.nextSibling.dataset,y)var J=y.dgst;y=J,o=Error(r(419)),o.stack="",o.digest=y,Ws({value:o,source:null,stack:null}),n=af(e,n,a)}else if(mn||qs(e,n,a,!1),y=(a&e.childLanes)!==0,mn||y){if(y=ke,y!==null&&(o=a&-a,o=(o&42)!==0?1:Ge(o),o=(o&(y.suspendedLanes|a))!==0?0:o,o!==0&&o!==P.retryLane))throw P.retryLane=o,Br(e,o),Zn(y,e,o),Om;T.data==="$?"||Mf(),n=af(e,n,a)}else T.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=P.treeContext,Ze=fi(T.nextSibling),Dn=n,Ae=!0,nr=null,Si=!1,e!==null&&(ei[ni++]=Bi,ei[ni++]=zi,ei[ni++]=tr,Bi=e.id,zi=e.overflow,tr=n),n=nf(n,o.children),n.flags|=4096);return n}return c?(Sa(),c=o.fallback,T=n.mode,P=e.child,J=P.sibling,o=Pi(P,{mode:"hidden",children:o.children}),o.subtreeFlags=P.subtreeFlags&65011712,J!==null?c=Pi(J,c):(c=$a(c,T,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,T=e.child.memoizedState,T===null?T=tf(a):(P=T.cachePool,P!==null?(J=un._currentValue,P=P.parent!==J?{parent:J,pool:J}:P):P=wp(),T={baseLanes:T.baseLanes|a,cachePool:P}),c.memoizedState=T,c.childLanes=ef(e,y,a),n.memoizedState=$c,o):(xa(n),a=e.child,e=a.sibling,a=Pi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function nf(e,n){return n=Nl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Nl(e,n){return e=Xn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function af(e,n,a){return Yr(n,e.child,null,a),e=nf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Xm(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),yc(e.return,n,a)}function rf(e,n,a,o,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=c)}function Wm(e,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;if(yn(e,n,o.children,a),o=cn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xm(e,a,n);else if(e.tag===19)Xm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(yt(cn,o),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&wl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),rf(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&wl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}rf(n,!0,a,null,f);break;case"together":rf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Vi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ba|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(qs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Pi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Pi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function sf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&dl(e)))}function xx(e,n,a){switch(n.tag){case 3:Ut(n,n.stateNode.containerInfo),pa(n,un,e.memoizedState.cache),Xs();break;case 27:case 5:Kt(n);break;case 4:Ut(n,n.stateNode.containerInfo);break;case 10:pa(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(xa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?km(e,n,a):(xa(n),e=Vi(e,n,a),e!==null?e.sibling:null);xa(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(qs(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return Wm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),yt(cn,cn.current),o)break;return null;case 22:case 23:return n.lanes=0,Im(e,n,a);case 24:pa(n,un,e.memoizedState.cache)}return Vi(e,n,a)}function qm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)mn=!0;else{if(!sf(e,a)&&(n.flags&128)===0)return mn=!1,xx(e,n,a);mn=(e.flags&131072)!==0}else mn=!1,Ae&&(n.flags&1048576)!==0&&Mp(n,hl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")pc(o)?(e=lr(o,e),n.tag=1,n=Gm(null,n,o,e,a)):(n.tag=0,n=Jc(null,n,o,e,a));else{if(o!=null){if(c=o.$$typeof,c===w){n.tag=11,n=Pm(null,n,o,e,a);break t}else if(c===z){n.tag=14,n=Bm(null,n,o,e,a);break t}}throw n=vt(o)||o,Error(r(306,n,""))}}return n;case 0:return Jc(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=lr(o,n.pendingProps),Gm(e,n,o,c,a);case 3:t:{if(Ut(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,Cc(e,n),$s(n,o,null,a);var y=n.memoizedState;if(o=y.cache,pa(n,un,o),o!==f.cache&&Mc(n,[un],a,!0),Js(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Vm(e,n,o,a);break t}else if(o!==c){c=$n(Error(r(424)),n),Ws(c),n=Vm(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=fi(e.firstChild),Dn=n,Ae=!0,nr=null,Si=!0,a=Tm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Xs(),o===c){n=Vi(e,n,a);break t}yn(e,n,o,a)}n=n.child}return n;case 26:return Ll(e,n),e===null?(a=Kg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(a=n.type,e=n.pendingProps,o=Yl(St.current).createElement(a),o[on]=n,o[xn]=e,En(o,a,e),en(o),n.stateNode=o):n.memoizedState=Kg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Kt(n),e===null&&Ae&&(o=n.stateNode=Yg(n.type,n.pendingProps,St.current),Dn=n,Si=!0,c=Ze,wa(n.type)?(Hf=c,Ze=fi(o.firstChild)):Ze=c),yn(e,n,n.pendingProps.children,a),Ll(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ae&&((c=o=Ze)&&(o=Yx(o,n.type,n.pendingProps,Si),o!==null?(n.stateNode=o,Dn=n,Ze=fi(o.firstChild),Si=!1,c=!0):c=!1),c||ir(n)),Kt(n),c=n.type,f=n.pendingProps,y=e!==null?e.memoizedProps:null,o=f.children,Bf(c,f)?o=null:y!==null&&Bf(c,y)&&(n.flags|=32),n.memoizedState!==null&&(c=Oc(e,n,fx,null,null,a),Mo._currentValue=c),Ll(e,n),yn(e,n,o,a),n.child;case 6:return e===null&&Ae&&((e=a=Ze)&&(a=jx(a,n.pendingProps,Si),a!==null?(n.stateNode=a,Dn=n,Ze=null,e=!0):e=!1),e||ir(n)),null;case 13:return km(e,n,a);case 4:return Ut(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Yr(n,null,o,a):yn(e,n,o,a),n.child;case 11:return Pm(e,n,n.type,n.pendingProps,a);case 7:return yn(e,n,n.pendingProps,a),n.child;case 8:return yn(e,n,n.pendingProps.children,a),n.child;case 12:return yn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,pa(n,n.type,o.value),yn(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,rr(n),c=An(c),o=o(c),n.flags|=1,yn(e,n,o,a),n.child;case 14:return Bm(e,n,n.type,n.pendingProps,a);case 15:return zm(e,n,n.type,n.pendingProps,a);case 19:return Wm(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Nl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Pi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Im(e,n,a);case 24:return rr(n),o=An(un),e===null?(c=bc(),c===null&&(c=ke,f=Ec(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},Rc(n),pa(n,un,c)):((e.lanes&a)!==0&&(Cc(e,n),$s(n,null,null,a),Js()),c=e.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),pa(n,un,o)):(o=f.cache,pa(n,un,o),o!==c.cache&&Mc(n,[un],a,!0))),yn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ki(e){e.flags|=4}function Ym(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!e_(n)){if(n=ii.current,n!==null&&((Se&4194048)===Se?yi!==null:(Se&62914560)!==Se&&(Se&536870912)===0||n!==yi))throw Ks=Ac,Dp;e.flags|=8192}}function Ol(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Lt():536870912,e.lanes|=n,Qr|=n)}function so(e,n){if(!Ae)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Sx(e,n,a){var o=n.pendingProps;switch(vc(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Fi(un),oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ks(n)?ki(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,bp())),qe(n),null;case 26:return a=n.memoizedState,e===null?(ki(n),a!==null?(qe(n),Ym(n,a)):(qe(n),n.flags&=-16777217)):a?a!==e.memoizedState?(ki(n),qe(n),Ym(n,a)):(qe(n),n.flags&=-16777217):(e.memoizedProps!==o&&ki(n),qe(n),n.flags&=-16777217),null;case 27:He(n),a=St.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ki(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qe(n),null}e=Q.current,ks(n)?Ep(n):(e=Yg(c,o,a),n.stateNode=e,ki(n))}return qe(n),null;case 5:if(He(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ki(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qe(n),null}if(e=Q.current,ks(n))Ep(n);else{switch(c=Yl(St.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}e[on]=n,e[xn]=o;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(En(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ki(n)}}return qe(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ki(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=St.current,ks(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=Dn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Hg(e.nodeValue,a)),e||ir(n)}else e=Yl(e).createTextNode(o),e[on]=n,n.stateNode=e}return qe(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=ks(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[on]=n}else Xs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),c=!1}else c=bp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Gi(n),n):(Gi(n),null)}if(Gi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Ol(n,n.updateQueue),qe(n),null;case 4:return oe(),e===null&&Uf(n.stateNode.containerInfo),qe(n),null;case 10:return Fi(n.type),qe(n),null;case 19:if(xt(cn),c=n.memoizedState,c===null)return qe(n),null;if(o=(n.flags&128)!==0,f=c.rendering,f===null)if(o)so(c,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=wl(e),f!==null){for(n.flags|=128,so(c,!1),e=f.updateQueue,n.updateQueue=e,Ol(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)yp(a,e),a=a.sibling;return yt(cn,cn.current&1|2),n.child}e=e.sibling}c.tail!==null&&ie()>zl&&(n.flags|=128,o=!0,so(c,!1),n.lanes=4194304)}else{if(!o)if(e=wl(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Ol(n,e),so(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Ae)return qe(n),null}else 2*ie()-c.renderingStartTime>zl&&a!==536870912&&(n.flags|=128,o=!0,so(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=ie(),n.sibling=null,e=cn.current,yt(cn,o?e&1|2:e&1),n):(qe(n),null);case 22:case 23:return Gi(n),Lc(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&Ol(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&xt(sr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Fi(un),qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function yx(e,n){switch(vc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Fi(un),oe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return He(n),null;case 13:if(Gi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Xs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return xt(cn),null;case 4:return oe(),null;case 10:return Fi(n.type),null;case 22:case 23:return Gi(n),Lc(),e!==null&&xt(sr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Fi(un),null;case 25:return null;default:return null}}function jm(e,n){switch(vc(n),n.tag){case 3:Fi(un),oe();break;case 26:case 27:case 5:He(n);break;case 4:oe();break;case 13:Gi(n);break;case 19:xt(cn);break;case 10:Fi(n.type);break;case 22:case 23:Gi(n),Lc(),e!==null&&xt(sr);break;case 24:Fi(un)}}function oo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var f=a.create,y=a.inst;o=f(),y.destroy=o}a=a.next}while(a!==c)}}catch(T){Ie(n,n.return,T)}}function ya(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&e)===e){var y=o.inst,T=y.destroy;if(T!==void 0){y.destroy=void 0,c=n;var P=a,J=T;try{J()}catch(ut){Ie(c,P,ut)}}}o=o.next}while(o!==f)}}catch(ut){Ie(n,n.return,ut)}}function Zm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Bp(n,a)}catch(o){Ie(e,e.return,o)}}}function Km(e,n,a){a.props=lr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ie(e,n,o)}}function lo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){Ie(e,n,c)}}function Mi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Ie(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ie(e,n,c)}else a.current=null}function Qm(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Ie(e,e.return,c)}}function of(e,n,a){try{var o=e.stateNode;Vx(o,e.type,a,n),o[xn]=n}catch(c){Ie(e,e.return,c)}}function Jm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&wa(e.type)||e.tag===4}function lf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Jm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function uf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ql));else if(o!==4&&(o===27&&wa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(uf(e,n,a),e=e.sibling;e!==null;)uf(e,n,a),e=e.sibling}function Pl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&wa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Pl(e,n,a),e=e.sibling;e!==null;)Pl(e,n,a),e=e.sibling}function $m(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);En(n,o,a),n[on]=e,n[xn]=a}catch(f){Ie(e,e.return,f)}}var Xi=!1,Je=!1,cf=!1,tg=typeof WeakSet=="function"?WeakSet:Set,gn=null;function Mx(e,n){if(e=e.containerInfo,Of=$l,e=fp(e),oc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var y=0,T=-1,P=-1,J=0,ut=0,_t=e,et=null;e:for(;;){for(var nt;_t!==a||c!==0&&_t.nodeType!==3||(T=y+c),_t!==f||o!==0&&_t.nodeType!==3||(P=y+o),_t.nodeType===3&&(y+=_t.nodeValue.length),(nt=_t.firstChild)!==null;)et=_t,_t=nt;for(;;){if(_t===e)break e;if(et===a&&++J===c&&(T=y),et===f&&++ut===o&&(P=y),(nt=_t.nextSibling)!==null)break;_t=et,et=_t.parentNode}_t=nt}a=T===-1||P===-1?null:{start:T,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Pf={focusedElem:e,selectionRange:a},$l=!1,gn=n;gn!==null;)if(n=gn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,gn=e;else for(;gn!==null;){switch(n=gn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ee=lr(a.type,c,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ee,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(Zt){Ie(a,a.return,Zt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)If(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":If(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,gn=e;break}gn=n.return}}function eg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ma(e,a),o&4&&oo(5,a);break;case 1:if(Ma(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){Ie(a,a.return,y)}else{var c=lr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Ie(a,a.return,y)}}o&64&&Zm(a),o&512&&lo(a,a.return);break;case 3:if(Ma(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Bp(e,n)}catch(y){Ie(a,a.return,y)}}break;case 27:n===null&&o&4&&$m(a);case 26:case 5:Ma(e,a),n===null&&o&4&&Qm(a),o&512&&lo(a,a.return);break;case 12:Ma(e,a);break;case 13:Ma(e,a),o&4&&ag(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Ux.bind(null,a),Zx(e,a))));break;case 22:if(o=a.memoizedState!==null||Xi,!o){n=n!==null&&n.memoizedState!==null||Je,c=Xi;var f=Je;Xi=o,(Je=n)&&!f?Ea(e,a,(a.subtreeFlags&8772)!==0):Ma(e,a),Xi=c,Je=f}break;case 30:break;default:Ma(e,a)}}function ng(e){var n=e.alternate;n!==null&&(e.alternate=null,ng(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ca(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Xe=null,Bn=!1;function Wi(e,n,a){for(a=a.child;a!==null;)ig(e,n,a),a=a.sibling}function ig(e,n,a){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(ct,a)}catch{}switch(a.tag){case 26:Je||Mi(a,n),Wi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Je||Mi(a,n);var o=Xe,c=Bn;wa(a.type)&&(Xe=a.stateNode,Bn=!1),Wi(e,n,a),vo(a.stateNode),Xe=o,Bn=c;break;case 5:Je||Mi(a,n);case 6:if(o=Xe,c=Bn,Xe=null,Wi(e,n,a),Xe=o,Bn=c,Xe!==null)if(Bn)try{(Xe.nodeType===9?Xe.body:Xe.nodeName==="HTML"?Xe.ownerDocument.body:Xe).removeChild(a.stateNode)}catch(f){Ie(a,n,f)}else try{Xe.removeChild(a.stateNode)}catch(f){Ie(a,n,f)}break;case 18:Xe!==null&&(Bn?(e=Xe,Wg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ao(e)):Wg(Xe,a.stateNode));break;case 4:o=Xe,c=Bn,Xe=a.stateNode.containerInfo,Bn=!0,Wi(e,n,a),Xe=o,Bn=c;break;case 0:case 11:case 14:case 15:Je||ya(2,a,n),Je||ya(4,a,n),Wi(e,n,a);break;case 1:Je||(Mi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Km(a,n,o)),Wi(e,n,a);break;case 21:Wi(e,n,a);break;case 22:Je=(o=Je)||a.memoizedState!==null,Wi(e,n,a),Je=o;break;default:Wi(e,n,a)}}function ag(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ao(e)}catch(a){Ie(n,n.return,a)}}function Ex(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new tg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new tg),n;default:throw Error(r(435,e.tag))}}function ff(e,n){var a=Ex(e);n.forEach(function(o){var c=Lx.bind(null,e,o);a.has(o)||(a.add(o),o.then(c,c))})}function Wn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=e,y=n,T=y;t:for(;T!==null;){switch(T.tag){case 27:if(wa(T.type)){Xe=T.stateNode,Bn=!1;break t}break;case 5:Xe=T.stateNode,Bn=!1;break t;case 3:case 4:Xe=T.stateNode.containerInfo,Bn=!0;break t}T=T.return}if(Xe===null)throw Error(r(160));ig(f,y,c),Xe=null,Bn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)rg(n,e),n=n.sibling}var ci=null;function rg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Wn(n,e),qn(e),o&4&&(ya(3,e,e.return),oo(3,e),ya(5,e,e.return));break;case 1:Wn(n,e),qn(e),o&512&&(Je||a===null||Mi(a,a.return)),o&64&&Xi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=ci;if(Wn(n,e),qn(e),o&512&&(Je||a===null||Mi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ua]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),En(f,o,a),f[on]=e,en(f),o=f;break t;case"link":var y=$g("link","href",c).get(o+(a.href||""));if(y){for(var T=0;T<y.length;T++)if(f=y[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(T,1);break e}}f=c.createElement(o),En(f,o,a),c.head.appendChild(f);break;case"meta":if(y=$g("meta","content",c).get(o+(a.content||""))){for(T=0;T<y.length;T++)if(f=y[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(T,1);break e}}f=c.createElement(o),En(f,o,a),c.head.appendChild(f);break;default:throw Error(r(468,o))}f[on]=e,en(f),o=f}e.stateNode=o}else t_(c,e.type,e.stateNode);else e.stateNode=Jg(c,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?t_(c,e.type,e.stateNode):Jg(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&of(e,e.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,e),qn(e),o&512&&(Je||a===null||Mi(a,a.return)),a!==null&&o&4&&of(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,e),qn(e),o&512&&(Je||a===null||Mi(a,a.return)),e.flags&32){c=e.stateNode;try{xi(c,"")}catch(nt){Ie(e,e.return,nt)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,of(e,c,a!==null?a.memoizedProps:c)),o&1024&&(cf=!0);break;case 6:if(Wn(n,e),qn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(nt){Ie(e,e.return,nt)}}break;case 3:if(Kl=null,c=ci,ci=jl(n.containerInfo),Wn(n,e),ci=c,qn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ao(n.containerInfo)}catch(nt){Ie(e,e.return,nt)}cf&&(cf=!1,sg(e));break;case 4:o=ci,ci=jl(e.stateNode.containerInfo),Wn(n,e),qn(e),ci=o;break;case 12:Wn(n,e),qn(e);break;case 13:Wn(n,e),qn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(_f=ie()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ff(e,o)));break;case 22:c=e.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,J=Xi,ut=Je;if(Xi=J||c,Je=ut||P,Wn(n,e),Je=ut,Xi=J,qn(e),o&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||P||Xi||Je||ur(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,c)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{T=P.stateNode;var _t=P.memoizedProps.style,et=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;T.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(nt){Ie(P,P.return,nt)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(nt){Ie(P,P.return,nt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,ff(e,a))));break;case 19:Wn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ff(e,o)));break;case 30:break;case 21:break;default:Wn(n,e),qn(e)}}function qn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Jm(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=lf(e);Pl(e,f,c);break;case 5:var y=a.stateNode;a.flags&32&&(xi(y,""),a.flags&=-33);var T=lf(e);Pl(e,T,y);break;case 3:case 4:var P=a.stateNode.containerInfo,J=lf(e);uf(e,J,P);break;default:throw Error(r(161))}}catch(ut){Ie(e,e.return,ut)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function sg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;sg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ma(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)eg(e,n.alternate,n),n=n.sibling}function ur(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ya(4,n,n.return),ur(n);break;case 1:Mi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Km(n,n.return,a),ur(n);break;case 27:vo(n.stateNode);case 26:case 5:Mi(n,n.return),ur(n);break;case 22:n.memoizedState===null&&ur(n);break;case 30:ur(n);break;default:ur(n)}e=e.sibling}}function Ea(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:Ea(c,f,a),oo(4,f);break;case 1:if(Ea(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){Ie(o,o.return,J)}if(o=f,c=o.updateQueue,c!==null){var T=o.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)Pp(P[c],T)}catch(J){Ie(o,o.return,J)}}a&&y&64&&Zm(f),lo(f,f.return);break;case 27:$m(f);case 26:case 5:Ea(c,f,a),a&&o===null&&y&4&&Qm(f),lo(f,f.return);break;case 12:Ea(c,f,a);break;case 13:Ea(c,f,a),a&&y&4&&ag(c,f);break;case 22:f.memoizedState===null&&Ea(c,f,a),lo(f,f.return);break;case 30:break;default:Ea(c,f,a)}n=n.sibling}}function hf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ys(a))}function df(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ys(e))}function Ei(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)og(e,n,a,o),n=n.sibling}function og(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(e,n,a,o),c&2048&&oo(9,n);break;case 1:Ei(e,n,a,o);break;case 3:Ei(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ys(e)));break;case 12:if(c&2048){Ei(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,y=f.id,T=f.onPostCommit;typeof T=="function"&&T(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){Ie(n,n.return,P)}}else Ei(e,n,a,o);break;case 13:Ei(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?Ei(e,n,a,o):uo(e,n):f._visibility&2?Ei(e,n,a,o):(f._visibility|=2,jr(e,n,a,o,(n.subtreeFlags&10256)!==0)),c&2048&&hf(y,n);break;case 24:Ei(e,n,a,o),c&2048&&df(n.alternate,n);break;default:Ei(e,n,a,o)}}function jr(e,n,a,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,y=n,T=a,P=o,J=y.flags;switch(y.tag){case 0:case 11:case 15:jr(f,y,T,P,c),oo(8,y);break;case 23:break;case 22:var ut=y.stateNode;y.memoizedState!==null?ut._visibility&2?jr(f,y,T,P,c):uo(f,y):(ut._visibility|=2,jr(f,y,T,P,c)),c&&J&2048&&hf(y.alternate,y);break;case 24:jr(f,y,T,P,c),c&&J&2048&&df(y.alternate,y);break;default:jr(f,y,T,P,c)}n=n.sibling}}function uo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:uo(a,o),c&2048&&hf(o.alternate,o);break;case 24:uo(a,o),c&2048&&df(o.alternate,o);break;default:uo(a,o)}n=n.sibling}}var co=8192;function Zr(e){if(e.subtreeFlags&co)for(e=e.child;e!==null;)lg(e),e=e.sibling}function lg(e){switch(e.tag){case 26:Zr(e),e.flags&co&&e.memoizedState!==null&&lS(ci,e.memoizedState,e.memoizedProps);break;case 5:Zr(e);break;case 3:case 4:var n=ci;ci=jl(e.stateNode.containerInfo),Zr(e),ci=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=co,co=16777216,Zr(e),co=n):Zr(e));break;default:Zr(e)}}function ug(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function fo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,fg(o,e)}ug(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)cg(e),e=e.sibling}function cg(e){switch(e.tag){case 0:case 11:case 15:fo(e),e.flags&2048&&ya(9,e,e.return);break;case 3:fo(e);break;case 12:fo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Bl(e)):fo(e);break;default:fo(e)}}function Bl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,fg(o,e)}ug(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ya(8,n,n.return),Bl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Bl(n));break;default:Bl(n)}e=e.sibling}}function fg(e,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Ys(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,gn=o;else t:for(a=e;gn!==null;){o=gn;var c=o.sibling,f=o.return;if(ng(o),o===a){gn=null;break t}if(c!==null){c.return=f,gn=c;break t}gn=f}}}var Tx={getCacheForType:function(e){var n=An(un),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},bx=typeof WeakMap=="function"?WeakMap:Map,Re=0,ke=null,pe=null,Se=0,Ce=0,Yn=null,Ta=!1,Kr=!1,pf=!1,qi=0,Ke=0,ba=0,cr=0,mf=0,ai=0,Qr=0,ho=null,zn=null,gf=!1,_f=0,zl=1/0,Il=null,Aa=null,Mn=0,Ra=null,Jr=null,$r=0,vf=0,xf=null,hg=null,po=0,Sf=null;function jn(){if((Re&2)!==0&&Se!==0)return Se&-Se;if(B.T!==null){var e=Hr;return e!==0?e:Rf()}return Me()}function dg(){ai===0&&(ai=(Se&536870912)===0||Ae?k():536870912);var e=ii.current;return e!==null&&(e.flags|=32),ai}function Zn(e,n,a){(e===ke&&(Ce===2||Ce===9)||e.cancelPendingCommit!==null)&&(ts(e,0),Ca(e,Se,ai,!1)),gt(e,a),((Re&2)===0||e!==ke)&&(e===ke&&((Re&2)===0&&(cr|=a),Ke===4&&Ca(e,Se,ai,!1)),Ti(e))}function pg(e,n,a){if((Re&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||ne(e,n),c=o?Cx(e,n):Ef(e,n,!0),f=o;do{if(c===0){Kr&&!o&&Ca(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Ax(a)){c=Ef(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var T=e;c=ho;var P=T.current.memoizedState.isDehydrated;if(P&&(ts(T,y).flags|=256),y=Ef(T,y,!1),y!==2){if(pf&&!P){T.errorRecoveryDisabledLanes|=f,cr|=f,c=4;break t}f=zn,zn=c,f!==null&&(zn===null?zn=f:zn.push.apply(zn,f))}c=y}if(f=!1,c!==2)continue}}if(c===1){ts(e,0),Ca(e,n,0,!0);break}t:{switch(o=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ca(o,n,ai,!Ta);break t;case 2:zn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=_f+300-ie(),10<c)){if(Ca(o,n,ai,!Ta),ue(o,0,!0)!==0)break t;o.timeoutHandle=kg(mg.bind(null,o,a,zn,Il,gf,n,ai,cr,Qr,Ta,f,2,-0,0),c);break t}mg(o,a,zn,Il,gf,n,ai,cr,Qr,Ta,f,0,-0,0)}}break}while(!0);Ti(e)}function mg(e,n,a,o,c,f,y,T,P,J,ut,_t,et,nt){if(e.timeoutHandle=-1,_t=n.subtreeFlags,(_t&8192||(_t&16785408)===16785408)&&(yo={stylesheets:null,count:0,unsuspend:oS},lg(n),_t=uS(),_t!==null)){e.cancelPendingCommit=_t(Mg.bind(null,e,n,f,a,o,c,y,T,P,ut,1,et,nt)),Ca(e,f,y,!J);return}Mg(e,n,f,a,o,c,y,T,P)}function Ax(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!kn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ca(e,n,a,o){n&=~mf,n&=~cr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var f=31-Gt(c),y=1<<f;o[f]=-1,c&=~y}a!==0&&Nt(e,a,n)}function Fl(){return(Re&6)===0?(mo(0),!1):!0}function yf(){if(pe!==null){if(Ce===0)var e=pe.return;else e=pe,Ii=ar=null,zc(e),qr=null,ao=0,e=pe;for(;e!==null;)jm(e.alternate,e),e=e.return;pe=null}}function ts(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Xx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),yf(),ke=e,pe=a=Pi(e.current,null),Se=n,Ce=0,Yn=null,Ta=!1,Kr=ne(e,n),pf=!1,Qr=ai=mf=cr=ba=Ke=0,zn=ho=null,gf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-Gt(o),f=1<<c;n|=e[c],o&=~f}return qi=n,ol(),a}function gg(e,n){ce=null,B.H=Al,n===Zs||n===gl?(n=Np(),Ce=3):n===Dp?(n=Np(),Ce=4):Ce=n===Om?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Yn=n,pe===null&&(Ke=1,Ul(e,$n(n,e.current)))}function _g(){var e=B.H;return B.H=Al,e===null?Al:e}function vg(){var e=B.A;return B.A=Tx,e}function Mf(){Ke=4,Ta||(Se&4194048)!==Se&&ii.current!==null||(Kr=!0),(ba&134217727)===0&&(cr&134217727)===0||ke===null||Ca(ke,Se,ai,!1)}function Ef(e,n,a){var o=Re;Re|=2;var c=_g(),f=vg();(ke!==e||Se!==n)&&(Il=null,ts(e,n)),n=!1;var y=Ke;t:do try{if(Ce!==0&&pe!==null){var T=pe,P=Yn;switch(Ce){case 8:yf(),y=6;break t;case 3:case 2:case 9:case 6:ii.current===null&&(n=!0);var J=Ce;if(Ce=0,Yn=null,es(e,T,P,J),a&&Kr){y=0;break t}break;default:J=Ce,Ce=0,Yn=null,es(e,T,P,J)}}Rx(),y=Ke;break}catch(ut){gg(e,ut)}while(!0);return n&&e.shellSuspendCounter++,Ii=ar=null,Re=o,B.H=c,B.A=f,pe===null&&(ke=null,Se=0,ol()),y}function Rx(){for(;pe!==null;)xg(pe)}function Cx(e,n){var a=Re;Re|=2;var o=_g(),c=vg();ke!==e||Se!==n?(Il=null,zl=ie()+500,ts(e,n)):Kr=ne(e,n);t:do try{if(Ce!==0&&pe!==null){n=pe;var f=Yn;e:switch(Ce){case 1:Ce=0,Yn=null,es(e,n,f,1);break;case 2:case 9:if(Up(f)){Ce=0,Yn=null,Sg(n);break}n=function(){Ce!==2&&Ce!==9||ke!==e||(Ce=7),Ti(e)},f.then(n,n);break t;case 3:Ce=7;break t;case 4:Ce=5;break t;case 7:Up(f)?(Ce=0,Yn=null,Sg(n)):(Ce=0,Yn=null,es(e,n,f,7));break;case 5:var y=null;switch(pe.tag){case 26:y=pe.memoizedState;case 5:case 27:var T=pe;if(!y||e_(y)){Ce=0,Yn=null;var P=T.sibling;if(P!==null)pe=P;else{var J=T.return;J!==null?(pe=J,Hl(J)):pe=null}break e}}Ce=0,Yn=null,es(e,n,f,5);break;case 6:Ce=0,Yn=null,es(e,n,f,6);break;case 8:yf(),Ke=6;break t;default:throw Error(r(462))}}wx();break}catch(ut){gg(e,ut)}while(!0);return Ii=ar=null,B.H=o,B.A=c,Re=a,pe!==null?0:(ke=null,Se=0,ol(),Ke)}function wx(){for(;pe!==null&&!Ln();)xg(pe)}function xg(e){var n=qm(e.alternate,e,qi);e.memoizedProps=e.pendingProps,n===null?Hl(e):pe=n}function Sg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Hm(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=Hm(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:zc(n);default:jm(a,n),n=pe=yp(n,qi),n=qm(a,n,qi)}e.memoizedProps=e.pendingProps,n===null?Hl(e):pe=n}function es(e,n,a,o){Ii=ar=null,zc(n),qr=null,ao=0;var c=n.return;try{if(vx(e,c,n,a,Se)){Ke=1,Ul(e,$n(a,e.current)),pe=null;return}}catch(f){if(c!==null)throw pe=c,f;Ke=1,Ul(e,$n(a,e.current)),pe=null;return}n.flags&32768?(Ae||o===1?e=!0:Kr||(Se&536870912)!==0?e=!1:(Ta=e=!0,(o===2||o===9||o===3||o===6)&&(o=ii.current,o!==null&&o.tag===13&&(o.flags|=16384))),yg(n,e)):Hl(n)}function Hl(e){var n=e;do{if((n.flags&32768)!==0){yg(n,Ta);return}e=n.return;var a=Sx(n.alternate,n,qi);if(a!==null){pe=a;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=e}while(n!==null);Ke===0&&(Ke=5)}function yg(e,n){do{var a=yx(e.alternate,e);if(a!==null){a.flags&=32767,pe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){pe=e;return}pe=e=a}while(e!==null);Ke=6,pe=null}function Mg(e,n,a,o,c,f,y,T,P){e.cancelPendingCommit=null;do Gl();while(Mn!==0);if((Re&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=hc,Bt(e,a,f,y,T,P),e===ke&&(pe=ke=null,Se=0),Jr=n,Ra=e,$r=a,vf=f,xf=c,hg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Nx(L,function(){return Rg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,c=Z.p,Z.p=2,y=Re,Re|=4;try{Mx(e,n,a)}finally{Re=y,Z.p=c,B.T=o}}Mn=1,Eg(),Tg(),bg()}}function Eg(){if(Mn===1){Mn=0;var e=Ra,n=Jr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=Z.p;Z.p=2;var c=Re;Re|=4;try{rg(n,e);var f=Pf,y=fp(e.containerInfo),T=f.focusedElem,P=f.selectionRange;if(y!==T&&T&&T.ownerDocument&&cp(T.ownerDocument.documentElement,T)){if(P!==null&&oc(T)){var J=P.start,ut=P.end;if(ut===void 0&&(ut=J),"selectionStart"in T)T.selectionStart=J,T.selectionEnd=Math.min(ut,T.value.length);else{var _t=T.ownerDocument||document,et=_t&&_t.defaultView||window;if(et.getSelection){var nt=et.getSelection(),ee=T.textContent.length,Zt=Math.min(P.start,ee),Ne=P.end===void 0?Zt:Math.min(P.end,ee);!nt.extend&&Zt>Ne&&(y=Ne,Ne=Zt,Zt=y);var X=up(T,Zt),H=up(T,Ne);if(X&&H&&(nt.rangeCount!==1||nt.anchorNode!==X.node||nt.anchorOffset!==X.offset||nt.focusNode!==H.node||nt.focusOffset!==H.offset)){var K=_t.createRange();K.setStart(X.node,X.offset),nt.removeAllRanges(),Zt>Ne?(nt.addRange(K),nt.extend(H.node,H.offset)):(K.setEnd(H.node,H.offset),nt.addRange(K))}}}}for(_t=[],nt=T;nt=nt.parentNode;)nt.nodeType===1&&_t.push({element:nt,left:nt.scrollLeft,top:nt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<_t.length;T++){var ft=_t[T];ft.element.scrollLeft=ft.left,ft.element.scrollTop=ft.top}}$l=!!Of,Pf=Of=null}finally{Re=c,Z.p=o,B.T=a}}e.current=n,Mn=2}}function Tg(){if(Mn===2){Mn=0;var e=Ra,n=Jr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=Z.p;Z.p=2;var c=Re;Re|=4;try{eg(e,n.alternate,n)}finally{Re=c,Z.p=o,B.T=a}}Mn=3}}function bg(){if(Mn===4||Mn===3){Mn=0,ge();var e=Ra,n=Jr,a=$r,o=hg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Mn=5:(Mn=0,Jr=Ra=null,Ag(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Aa=null),tn(a),n=n.stateNode,Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(ct,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,c=Z.p,Z.p=2,B.T=null;try{for(var f=e.onRecoverableError,y=0;y<o.length;y++){var T=o[y];f(T.value,{componentStack:T.stack})}}finally{B.T=n,Z.p=c}}($r&3)!==0&&Gl(),Ti(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===Sf?po++:(po=0,Sf=e):po=0,mo(0)}}function Ag(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ys(n)))}function Gl(e){return Eg(),Tg(),bg(),Rg()}function Rg(){if(Mn!==5)return!1;var e=Ra,n=vf;vf=0;var a=tn($r),o=B.T,c=Z.p;try{Z.p=32>a?32:a,B.T=null,a=xf,xf=null;var f=Ra,y=$r;if(Mn=0,Jr=Ra=null,$r=0,(Re&6)!==0)throw Error(r(331));var T=Re;if(Re|=4,cg(f.current),og(f,f.current,y,a),Re=T,mo(0,!1),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(ct,f)}catch{}return!0}finally{Z.p=c,B.T=o,Ag(e,n)}}function Cg(e,n,a){n=$n(a,n),n=Qc(e.stateNode,n,2),e=_a(e,n,2),e!==null&&(gt(e,2),Ti(e))}function Ie(e,n,a){if(e.tag===3)Cg(e,e,a);else for(;n!==null;){if(n.tag===3){Cg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Aa===null||!Aa.has(o))){e=$n(a,e),a=Lm(2),o=_a(n,a,2),o!==null&&(Nm(a,o,n,e),gt(o,2),Ti(o));break}}n=n.return}}function Tf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new bx;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(pf=!0,c.add(a),e=Dx.bind(null,e,n,a),n.then(e,e))}function Dx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ke===e&&(Se&a)===a&&(Ke===4||Ke===3&&(Se&62914560)===Se&&300>ie()-_f?(Re&2)===0&&ts(e,0):mf|=a,Qr===Se&&(Qr=0)),Ti(e)}function wg(e,n){n===0&&(n=Lt()),e=Br(e,n),e!==null&&(gt(e,n),Ti(e))}function Ux(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),wg(e,a)}function Lx(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),wg(e,a)}function Nx(e,n){return fe(e,n)}var Vl=null,ns=null,bf=!1,kl=!1,Af=!1,fr=0;function Ti(e){e!==ns&&e.next===null&&(ns===null?Vl=ns=e:ns=ns.next=e),kl=!0,bf||(bf=!0,Px())}function mo(e,n){if(!Af&&kl){Af=!0;do for(var a=!1,o=Vl;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var y=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-Gt(42|e)+1)-1,f&=c&~(y&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Ng(o,f))}else f=Se,f=ue(o,o===ke?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||ne(o,f)||(a=!0,Ng(o,f));o=o.next}while(a);Af=!1}}function Ox(){Dg()}function Dg(){kl=bf=!1;var e=0;fr!==0&&(kx()&&(e=fr),fr=0);for(var n=ie(),a=null,o=Vl;o!==null;){var c=o.next,f=Ug(o,n);f===0?(o.next=null,a===null?Vl=c:a.next=c,c===null&&(ns=a)):(a=o,(e!==0||(f&3)!==0)&&(kl=!0)),o=c}mo(e)}function Ug(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-Gt(f),T=1<<y,P=c[y];P===-1?((T&a)===0||(T&o)!==0)&&(c[y]=De(T,n)):P<=n&&(e.expiredLanes|=T),f&=~T}if(n=ke,a=Se,a=ue(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ce===2||Ce===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&I(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ne(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&I(o),tn(a)){case 2:case 8:a=Vt;break;case 32:a=L;break;case 268435456:a=tt;break;default:a=L}return o=Lg.bind(null,e),a=fe(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&I(o),e.callbackPriority=2,e.callbackNode=null,2}function Lg(e,n){if(Mn!==0&&Mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Gl()&&e.callbackNode!==a)return null;var o=Se;return o=ue(e,e===ke?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(pg(e,o,n),Ug(e,ie()),e.callbackNode!=null&&e.callbackNode===a?Lg.bind(null,e):null)}function Ng(e,n){if(Gl())return null;pg(e,n,!0)}function Px(){Wx(function(){(Re&6)!==0?fe(we,Ox):Dg()})}function Rf(){return fr===0&&(fr=k()),fr}function Og(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:tl(""+e)}function Pg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Bx(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=Og((c[xn]||null).action),y=o.submitter;y&&(n=(n=y[xn]||null)?Og(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var T=new al("action","action",null,o,c);e.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(fr!==0){var P=y?Pg(c,y):new FormData(c);qc(a,{pending:!0,data:P,method:c.method,action:f},null,P)}}else typeof f=="function"&&(T.preventDefault(),P=y?Pg(c,y):new FormData(c),qc(a,{pending:!0,data:P,method:c.method,action:f},f,P))},currentTarget:c}]})}}for(var Cf=0;Cf<fc.length;Cf++){var wf=fc[Cf],zx=wf.toLowerCase(),Ix=wf[0].toUpperCase()+wf.slice(1);ui(zx,"on"+Ix)}ui(pp,"onAnimationEnd"),ui(mp,"onAnimationIteration"),ui(gp,"onAnimationStart"),ui("dblclick","onDoubleClick"),ui("focusin","onFocus"),ui("focusout","onBlur"),ui(ex,"onTransitionRun"),ui(nx,"onTransitionStart"),ui(ix,"onTransitionCancel"),ui(_p,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),Ui("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ui("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ui("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ui("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ui("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ui("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(go));function Bg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var y=o.length-1;0<=y;y--){var T=o[y],P=T.instance,J=T.currentTarget;if(T=T.listener,P!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=J;try{f(c)}catch(ut){Dl(ut)}c.currentTarget=null,f=P}else for(y=0;y<o.length;y++){if(T=o[y],P=T.instance,J=T.currentTarget,T=T.listener,P!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=J;try{f(c)}catch(ut){Dl(ut)}c.currentTarget=null,f=P}}}}function me(e,n){var a=n[Ya];a===void 0&&(a=n[Ya]=new Set);var o=e+"__bubble";a.has(o)||(zg(n,e,2,!1),a.add(o))}function Df(e,n,a){var o=0;n&&(o|=4),zg(a,e,o,n)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function Uf(e){if(!e[Xl]){e[Xl]=!0,Jo.forEach(function(a){a!=="selectionchange"&&(Fx.has(a)||Df(a,!1,e),Df(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Xl]||(n[Xl]=!0,Df("selectionchange",!1,n))}}function zg(e,n,a,o){switch(o_(n)){case 2:var c=hS;break;case 8:c=dS;break;default:c=Wf}a=c.bind(null,n,a,e),c=void 0,!Ju||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Lf(e,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var T=o.stateNode.containerInfo;if(T===c)break;if(y===4)for(y=o.return;y!==null;){var P=y.tag;if((P===3||P===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;T!==null;){if(y=wi(T),y===null)return;if(P=y.tag,P===5||P===6||P===26||P===27){o=f=y;continue t}T=T.parentNode}}o=o.return}Xd(function(){var J=f,ut=Ku(a),_t=[];t:{var et=vp.get(e);if(et!==void 0){var nt=al,ee=e;switch(e){case"keypress":if(nl(a)===0)break t;case"keydown":case"keyup":nt=N0;break;case"focusin":ee="focus",nt=nc;break;case"focusout":ee="blur",nt=nc;break;case"beforeblur":case"afterblur":nt=nc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":nt=Yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":nt=y0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":nt=B0;break;case pp:case mp:case gp:nt=T0;break;case _p:nt=I0;break;case"scroll":case"scrollend":nt=x0;break;case"wheel":nt=H0;break;case"copy":case"cut":case"paste":nt=A0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":nt=Zd;break;case"toggle":case"beforetoggle":nt=V0}var Zt=(n&4)!==0,Ne=!Zt&&(e==="scroll"||e==="scrollend"),X=Zt?et!==null?et+"Capture":null:et;Zt=[];for(var H=J,K;H!==null;){var ft=H;if(K=ft.stateNode,ft=ft.tag,ft!==5&&ft!==26&&ft!==27||K===null||X===null||(ft=Os(H,X),ft!=null&&Zt.push(_o(H,ft,K))),Ne)break;H=H.return}0<Zt.length&&(et=new nt(et,ee,null,a,ut),_t.push({event:et,listeners:Zt}))}}if((n&7)===0){t:{if(et=e==="mouseover"||e==="pointerover",nt=e==="mouseout"||e==="pointerout",et&&a!==Zu&&(ee=a.relatedTarget||a.fromElement)&&(wi(ee)||ee[Nn]))break t;if((nt||et)&&(et=ut.window===ut?ut:(et=ut.ownerDocument)?et.defaultView||et.parentWindow:window,nt?(ee=a.relatedTarget||a.toElement,nt=J,ee=ee?wi(ee):null,ee!==null&&(Ne=u(ee),Zt=ee.tag,ee!==Ne||Zt!==5&&Zt!==27&&Zt!==6)&&(ee=null)):(nt=null,ee=J),nt!==ee)){if(Zt=Yd,ft="onMouseLeave",X="onMouseEnter",H="mouse",(e==="pointerout"||e==="pointerover")&&(Zt=Zd,ft="onPointerLeave",X="onPointerEnter",H="pointer"),Ne=nt==null?et:Za(nt),K=ee==null?et:Za(ee),et=new Zt(ft,H+"leave",nt,a,ut),et.target=Ne,et.relatedTarget=K,ft=null,wi(ut)===J&&(Zt=new Zt(X,H+"enter",ee,a,ut),Zt.target=K,Zt.relatedTarget=Ne,ft=Zt),Ne=ft,nt&&ee)e:{for(Zt=nt,X=ee,H=0,K=Zt;K;K=is(K))H++;for(K=0,ft=X;ft;ft=is(ft))K++;for(;0<H-K;)Zt=is(Zt),H--;for(;0<K-H;)X=is(X),K--;for(;H--;){if(Zt===X||X!==null&&Zt===X.alternate)break e;Zt=is(Zt),X=is(X)}Zt=null}else Zt=null;nt!==null&&Ig(_t,et,nt,Zt,!1),ee!==null&&Ne!==null&&Ig(_t,Ne,ee,Zt,!0)}}t:{if(et=J?Za(J):window,nt=et.nodeName&&et.nodeName.toLowerCase(),nt==="select"||nt==="input"&&et.type==="file")var Ht=ip;else if(ep(et))if(ap)Ht=J0;else{Ht=K0;var he=Z0}else nt=et.nodeName,!nt||nt.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?J&&ju(J.elementType)&&(Ht=ip):Ht=Q0;if(Ht&&(Ht=Ht(e,J))){np(_t,Ht,a,ut);break t}he&&he(e,et,J),e==="focusout"&&J&&et.type==="number"&&J.memoizedProps.value!=null&&bn(et,"number",et.value)}switch(he=J?Za(J):window,e){case"focusin":(ep(he)||he.contentEditable==="true")&&(Nr=he,lc=J,Vs=null);break;case"focusout":Vs=lc=Nr=null;break;case"mousedown":uc=!0;break;case"contextmenu":case"mouseup":case"dragend":uc=!1,hp(_t,a,ut);break;case"selectionchange":if(tx)break;case"keydown":case"keyup":hp(_t,a,ut)}var kt;if(ac)t:{switch(e){case"compositionstart":var Jt="onCompositionStart";break t;case"compositionend":Jt="onCompositionEnd";break t;case"compositionupdate":Jt="onCompositionUpdate";break t}Jt=void 0}else Lr?$d(e,a)&&(Jt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Jt="onCompositionStart");Jt&&(Kd&&a.locale!=="ko"&&(Lr||Jt!=="onCompositionStart"?Jt==="onCompositionEnd"&&Lr&&(kt=Wd()):(da=ut,$u="value"in da?da.value:da.textContent,Lr=!0)),he=Wl(J,Jt),0<he.length&&(Jt=new jd(Jt,e,null,a,ut),_t.push({event:Jt,listeners:he}),kt?Jt.data=kt:(kt=tp(a),kt!==null&&(Jt.data=kt)))),(kt=X0?W0(e,a):q0(e,a))&&(Jt=Wl(J,"onBeforeInput"),0<Jt.length&&(he=new jd("onBeforeInput","beforeinput",null,a,ut),_t.push({event:he,listeners:Jt}),he.data=kt)),Bx(_t,e,J,a,ut)}Bg(_t,n)})}function _o(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Wl(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Os(e,a),c!=null&&o.unshift(_o(e,c,f)),c=Os(e,n),c!=null&&o.push(_o(e,c,f))),e.tag===3)return o;e=e.return}return[]}function is(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ig(e,n,a,o,c){for(var f=n._reactName,y=[];a!==null&&a!==o;){var T=a,P=T.alternate,J=T.stateNode;if(T=T.tag,P!==null&&P===o)break;T!==5&&T!==26&&T!==27||J===null||(P=J,c?(J=Os(a,f),J!=null&&y.unshift(_o(a,J,P))):c||(J=Os(a,f),J!=null&&y.push(_o(a,J,P)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var Hx=/\r\n?/g,Gx=/\u0000|\uFFFD/g;function Fg(e){return(typeof e=="string"?e:""+e).replace(Hx,`
`).replace(Gx,"")}function Hg(e,n){return n=Fg(n),Fg(e)===n}function ql(){}function Le(e,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||xi(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&xi(e,""+o);break;case"className":Ct(e,"class",o);break;case"tabIndex":Ct(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ct(e,a,o);break;case"style":Vd(e,o,f);break;case"data":if(n!=="object"){Ct(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=tl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Le(e,n,"name",c.name,c,null),Le(e,n,"formEncType",c.formEncType,c,null),Le(e,n,"formMethod",c.formMethod,c,null),Le(e,n,"formTarget",c.formTarget,c,null)):(Le(e,n,"encType",c.encType,c,null),Le(e,n,"method",c.method,c,null),Le(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=tl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ql);break;case"onScroll":o!=null&&me("scroll",e);break;case"onScrollEnd":o!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=tl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":me("beforetoggle",e),me("toggle",e),Tt(e,"popover",o);break;case"xlinkActuate":wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":wt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":wt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":wt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":wt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Tt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=_0.get(a)||a,Tt(e,a,o))}}function Nf(e,n,a,o,c,f){switch(a){case"style":Vd(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?xi(e,o):(typeof o=="number"||typeof o=="bigint")&&xi(e,""+o);break;case"onScroll":o!=null&&me("scroll",e);break;case"onScrollEnd":o!=null&&me("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ql);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$o.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Tt(e,a,o)}}}function En(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Le(e,n,f,y,a,null)}}c&&Le(e,n,"srcSet",a.srcSet,a,null),o&&Le(e,n,"src",a.src,a,null);return;case"input":me("invalid",e);var T=f=y=c=null,P=null,J=null;for(o in a)if(a.hasOwnProperty(o)){var ut=a[o];if(ut!=null)switch(o){case"name":c=ut;break;case"type":y=ut;break;case"checked":P=ut;break;case"defaultChecked":J=ut;break;case"value":f=ut;break;case"defaultValue":T=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:Le(e,n,o,ut,a,null)}}ze(e,f,T,P,J,y,c,!1),je(e);return;case"select":me("invalid",e),o=y=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":y=T;break;case"multiple":o=T;default:Le(e,n,c,T,a,null)}n=f,a=y,e.multiple=!!o,n!=null?ln(e,!!o,n,!1):a!=null&&ln(e,!!o,a,!0);return;case"textarea":me("invalid",e),f=c=o=null;for(y in a)if(a.hasOwnProperty(y)&&(T=a[y],T!=null))switch(y){case"value":o=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Le(e,n,y,T,a,null)}Sn(e,o,c,f),je(e);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(o=a[P],o!=null))switch(P){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Le(e,n,P,o,a,null)}return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(o=0;o<go.length;o++)me(go[o],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(o=a[J],o!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Le(e,n,J,o,a,null)}return;default:if(ju(n)){for(ut in a)a.hasOwnProperty(ut)&&(o=a[ut],o!==void 0&&Nf(e,n,ut,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Le(e,n,T,o,a,null))}function Vx(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,y=null,T=null,P=null,J=null,ut=null;for(nt in a){var _t=a[nt];if(a.hasOwnProperty(nt)&&_t!=null)switch(nt){case"checked":break;case"value":break;case"defaultValue":P=_t;default:o.hasOwnProperty(nt)||Le(e,n,nt,null,o,_t)}}for(var et in o){var nt=o[et];if(_t=a[et],o.hasOwnProperty(et)&&(nt!=null||_t!=null))switch(et){case"type":f=nt;break;case"name":c=nt;break;case"checked":J=nt;break;case"defaultChecked":ut=nt;break;case"value":y=nt;break;case"defaultValue":T=nt;break;case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:nt!==_t&&Le(e,n,et,nt,o,_t)}}Li(e,y,T,P,J,ut,f,c);return;case"select":nt=y=T=et=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":nt=P;default:o.hasOwnProperty(f)||Le(e,n,f,null,o,P)}for(c in o)if(f=o[c],P=a[c],o.hasOwnProperty(c)&&(f!=null||P!=null))switch(c){case"value":et=f;break;case"defaultValue":T=f;break;case"multiple":y=f;default:f!==P&&Le(e,n,c,f,o,P)}n=T,a=y,o=nt,et!=null?ln(e,!!a,et,!1):!!o!=!!a&&(n!=null?ln(e,!!a,n,!0):ln(e,!!a,a?[]:"",!1));return;case"textarea":nt=et=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Le(e,n,T,null,o,c)}for(y in o)if(c=o[y],f=a[y],o.hasOwnProperty(y)&&(c!=null||f!=null))switch(y){case"value":et=c;break;case"defaultValue":nt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Le(e,n,y,c,o,f)}pn(e,et,nt);return;case"option":for(var ee in a)if(et=a[ee],a.hasOwnProperty(ee)&&et!=null&&!o.hasOwnProperty(ee))switch(ee){case"selected":e.selected=!1;break;default:Le(e,n,ee,null,o,et)}for(P in o)if(et=o[P],nt=a[P],o.hasOwnProperty(P)&&et!==nt&&(et!=null||nt!=null))switch(P){case"selected":e.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Le(e,n,P,et,o,nt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Zt in a)et=a[Zt],a.hasOwnProperty(Zt)&&et!=null&&!o.hasOwnProperty(Zt)&&Le(e,n,Zt,null,o,et);for(J in o)if(et=o[J],nt=a[J],o.hasOwnProperty(J)&&et!==nt&&(et!=null||nt!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:Le(e,n,J,et,o,nt)}return;default:if(ju(n)){for(var Ne in a)et=a[Ne],a.hasOwnProperty(Ne)&&et!==void 0&&!o.hasOwnProperty(Ne)&&Nf(e,n,Ne,void 0,o,et);for(ut in o)et=o[ut],nt=a[ut],!o.hasOwnProperty(ut)||et===nt||et===void 0&&nt===void 0||Nf(e,n,ut,et,o,nt);return}}for(var X in a)et=a[X],a.hasOwnProperty(X)&&et!=null&&!o.hasOwnProperty(X)&&Le(e,n,X,null,o,et);for(_t in o)et=o[_t],nt=a[_t],!o.hasOwnProperty(_t)||et===nt||et==null&&nt==null||Le(e,n,_t,et,o,nt)}var Of=null,Pf=null;function Yl(e){return e.nodeType===9?e:e.ownerDocument}function Gg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Vg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Bf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var zf=null;function kx(){var e=window.event;return e&&e.type==="popstate"?e===zf?!1:(zf=e,!0):(zf=null,!1)}var kg=typeof setTimeout=="function"?setTimeout:void 0,Xx=typeof clearTimeout=="function"?clearTimeout:void 0,Xg=typeof Promise=="function"?Promise:void 0,Wx=typeof queueMicrotask=="function"?queueMicrotask:typeof Xg<"u"?function(e){return Xg.resolve(null).then(e).catch(qx)}:kg;function qx(e){setTimeout(function(){throw e})}function wa(e){return e==="head"}function Wg(e,n){var a=n,o=0,c=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var y=e.ownerDocument;if(a&1&&vo(y.documentElement),a&2&&vo(y.body),a&4)for(a=y.head,vo(a),y=a.firstChild;y;){var T=y.nextSibling,P=y.nodeName;y[ua]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&y.rel.toLowerCase()==="stylesheet"||a.removeChild(y),y=T}}if(c===0){e.removeChild(f),Ao(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);Ao(n)}function If(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":If(a),ca(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Yx(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ua])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=fi(e.nextSibling),e===null)break}return null}function jx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=fi(e.nextSibling),e===null))return null;return e}function Ff(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Zx(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function fi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Hf=null;function qg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Yg(e,n,a){switch(n=Yl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function vo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ca(e)}var ri=new Map,jg=new Set;function jl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Yi=Z.d;Z.d={f:Kx,r:Qx,D:Jx,C:$x,L:tS,m:eS,X:iS,S:nS,M:aS};function Kx(){var e=Yi.f(),n=Fl();return e||n}function Qx(e){var n=Di(e);n!==null&&n.tag===5&&n.type==="form"?pm(n):Yi.r(e)}var as=typeof document>"u"?null:document;function Zg(e,n,a){var o=as;if(o&&typeof n=="string"&&n){var c=Ve(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),jg.has(c)||(jg.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),En(n,"link",e),en(n),o.head.appendChild(n)))}}function Jx(e){Yi.D(e),Zg("dns-prefetch",e,null)}function $x(e,n){Yi.C(e,n),Zg("preconnect",e,n)}function tS(e,n,a){Yi.L(e,n,a);var o=as;if(o&&e&&n){var c='link[rel="preload"][as="'+Ve(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Ve(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Ve(a.imageSizes)+'"]')):c+='[href="'+Ve(e)+'"]';var f=c;switch(n){case"style":f=rs(e);break;case"script":f=ss(e)}ri.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ri.set(f,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(xo(f))||n==="script"&&o.querySelector(So(f))||(n=o.createElement("link"),En(n,"link",e),en(n),o.head.appendChild(n)))}}function eS(e,n){Yi.m(e,n);var a=as;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Ve(o)+'"][href="'+Ve(e)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ss(e)}if(!ri.has(f)&&(e=g({rel:"modulepreload",href:e},n),ri.set(f,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(So(f)))return}o=a.createElement("link"),En(o,"link",e),en(o),a.head.appendChild(o)}}}function nS(e,n,a){Yi.S(e,n,a);var o=as;if(o&&e){var c=fa(o).hoistableStyles,f=rs(e);n=n||"default";var y=c.get(f);if(!y){var T={loading:0,preload:null};if(y=o.querySelector(xo(f)))T.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ri.get(f))&&Gf(e,a);var P=y=o.createElement("link");en(P),En(P,"link",e),P._p=new Promise(function(J,ut){P.onload=J,P.onerror=ut}),P.addEventListener("load",function(){T.loading|=1}),P.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Zl(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:T},c.set(f,y)}}}function iS(e,n){Yi.X(e,n);var a=as;if(a&&e){var o=fa(a).hoistableScripts,c=ss(e),f=o.get(c);f||(f=a.querySelector(So(c)),f||(e=g({src:e,async:!0},n),(n=ri.get(c))&&Vf(e,n),f=a.createElement("script"),en(f),En(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function aS(e,n){Yi.M(e,n);var a=as;if(a&&e){var o=fa(a).hoistableScripts,c=ss(e),f=o.get(c);f||(f=a.querySelector(So(c)),f||(e=g({src:e,async:!0,type:"module"},n),(n=ri.get(c))&&Vf(e,n),f=a.createElement("script"),en(f),En(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function Kg(e,n,a,o){var c=(c=St.current)?jl(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=rs(a.href),a=fa(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=rs(a.href);var f=fa(c).hoistableStyles,y=f.get(e);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=c.querySelector(xo(e)))&&!f._p&&(y.instance=f,y.state.loading=5),ri.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ri.set(e,a),f||rS(c,e,a,y.state))),n&&o===null)throw Error(r(528,""));return y}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ss(a),a=fa(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function rs(e){return'href="'+Ve(e)+'"'}function xo(e){return'link[rel="stylesheet"]['+e+"]"}function Qg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function rS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),En(n,"link",a),en(n),e.head.appendChild(n))}function ss(e){return'[src="'+Ve(e)+'"]'}function So(e){return"script[async]"+e}function Jg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Ve(a.href)+'"]');if(o)return n.instance=o,en(o),o;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),en(o),En(o,"style",c),Zl(o,a.precedence,e),n.instance=o;case"stylesheet":c=rs(a.href);var f=e.querySelector(xo(c));if(f)return n.state.loading|=4,n.instance=f,en(f),f;o=Qg(a),(c=ri.get(c))&&Gf(o,c),f=(e.ownerDocument||e).createElement("link"),en(f);var y=f;return y._p=new Promise(function(T,P){y.onload=T,y.onerror=P}),En(f,"link",o),n.state.loading|=4,Zl(f,a.precedence,e),n.instance=f;case"script":return f=ss(a.src),(c=e.querySelector(So(f)))?(n.instance=c,en(c),c):(o=a,(c=ri.get(f))&&(o=g({},a),Vf(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),en(c),En(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Zl(o,a.precedence,e));return n.instance}function Zl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,y=0;y<o.length;y++){var T=o[y];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Gf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Vf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Kl=null;function $g(e,n,a){if(Kl===null){var o=new Map,c=Kl=new Map;c.set(a,o)}else c=Kl,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[ua]||f[on]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=e+y;var T=o.get(y);T?T.push(f):o.set(y,[f])}}return o}function t_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function sS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function e_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var yo=null;function oS(){}function lS(e,n,a){if(yo===null)throw Error(r(475));var o=yo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=rs(a.href),f=e.querySelector(xo(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Ql.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,en(f);return}f=e.ownerDocument||e,a=Qg(a),(c=ri.get(c))&&Gf(a,c),f=f.createElement("link"),en(f);var y=f;y._p=new Promise(function(T,P){y.onload=T,y.onerror=P}),En(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=Ql.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function uS(){if(yo===null)throw Error(r(475));var e=yo;return e.stylesheets&&e.count===0&&kf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&kf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Ql(){if(this.count--,this.count===0){if(this.stylesheets)kf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Jl=null;function kf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Jl=new Map,n.forEach(cS,e),Jl=null,Ql.call(e))}function cS(e,n){if(!(n.state.loading&4)){var a=Jl.get(e);if(a)var o=a.get(null);else{a=new Map,Jl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var y=c[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}c=n.instance,y=c.getAttribute("data-precedence"),f=a.get(y)||o,f===o&&a.set(null,c),a.set(y,c),this.count++,o=Ql.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Mo={$$typeof:U,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function fS(e,n,a,o,c,f,y,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ot(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ot(0),this.hiddenUpdates=ot(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function n_(e,n,a,o,c,f,y,T,P,J,ut,_t){return e=new fS(e,n,a,y,T,P,J,_t),n=1,f===!0&&(n|=24),f=Xn(3,null,null,n),e.current=f,f.stateNode=e,n=Ec(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Rc(f),e}function i_(e){return e?(e=zr,e):zr}function a_(e,n,a,o,c,f){c=i_(c),o.context===null?o.context=c:o.pendingContext=c,o=ga(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=_a(e,o,n),a!==null&&(Zn(a,e,n),Qs(a,e,n))}function r_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Xf(e,n){r_(e,n),(e=e.alternate)&&r_(e,n)}function s_(e){if(e.tag===13){var n=Br(e,67108864);n!==null&&Zn(n,e,67108864),Xf(e,67108864)}}var $l=!0;function hS(e,n,a,o){var c=B.T;B.T=null;var f=Z.p;try{Z.p=2,Wf(e,n,a,o)}finally{Z.p=f,B.T=c}}function dS(e,n,a,o){var c=B.T;B.T=null;var f=Z.p;try{Z.p=8,Wf(e,n,a,o)}finally{Z.p=f,B.T=c}}function Wf(e,n,a,o){if($l){var c=qf(o);if(c===null)Lf(e,n,o,tu,a),l_(e,o);else if(mS(c,e,n,a,o))o.stopPropagation();else if(l_(e,o),n&4&&-1<pS.indexOf(e)){for(;c!==null;){var f=Di(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Pt(f.pendingLanes);if(y!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;y;){var P=1<<31-Gt(y);T.entanglements[1]|=P,y&=~P}Ti(f),(Re&6)===0&&(zl=ie()+500,mo(0))}}break;case 13:T=Br(f,2),T!==null&&Zn(T,f,2),Fl(),Xf(f,2)}if(f=qf(o),f===null&&Lf(e,n,o,tu,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else Lf(e,n,o,null,a)}}function qf(e){return e=Ku(e),Yf(e)}var tu=null;function Yf(e){if(tu=null,e=wi(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return tu=e,null}function o_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Wt()){case we:return 2;case Vt:return 8;case L:case b:return 32;case tt:return 268435456;default:return 32}default:return 32}}var jf=!1,Da=null,Ua=null,La=null,Eo=new Map,To=new Map,Na=[],pS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function l_(e,n){switch(e){case"focusin":case"focusout":Da=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":La=null;break;case"pointerover":case"pointerout":Eo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(n.pointerId)}}function bo(e,n,a,o,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Di(n),n!==null&&s_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function mS(e,n,a,o,c){switch(n){case"focusin":return Da=bo(Da,e,n,a,o,c),!0;case"dragenter":return Ua=bo(Ua,e,n,a,o,c),!0;case"mouseover":return La=bo(La,e,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return Eo.set(f,bo(Eo.get(f)||null,e,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,To.set(f,bo(To.get(f)||null,e,n,a,o,c)),!0}return!1}function u_(e){var n=wi(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Vn(e.priority,function(){if(a.tag===13){var o=jn();o=Ge(o);var c=Br(a,o);c!==null&&Zn(c,a,o),Xf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function eu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=qf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Zu=o,a.target.dispatchEvent(o),Zu=null}else return n=Di(a),n!==null&&s_(n),e.blockedOn=a,!1;n.shift()}return!0}function c_(e,n,a){eu(e)&&a.delete(n)}function gS(){jf=!1,Da!==null&&eu(Da)&&(Da=null),Ua!==null&&eu(Ua)&&(Ua=null),La!==null&&eu(La)&&(La=null),Eo.forEach(c_),To.forEach(c_)}function nu(e,n){e.blockedOn===n&&(e.blockedOn=null,jf||(jf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,gS)))}var iu=null;function f_(e){iu!==e&&(iu=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){iu===e&&(iu=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(Yf(o||a)===null)continue;break}var f=Di(a);f!==null&&(e.splice(n,3),n-=3,qc(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function Ao(e){function n(P){return nu(P,e)}Da!==null&&nu(Da,e),Ua!==null&&nu(Ua,e),La!==null&&nu(La,e),Eo.forEach(n),To.forEach(n);for(var a=0;a<Na.length;a++){var o=Na[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Na.length&&(a=Na[0],a.blockedOn===null);)u_(a),a.blockedOn===null&&Na.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],y=c[xn]||null;if(typeof f=="function")y||f_(a);else if(y){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,y=f[xn]||null)T=y.formAction;else if(Yf(c)!==null)continue}else T=y.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),f_(a)}}}function Zf(e){this._internalRoot=e}au.prototype.render=Zf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=jn();a_(a,o,e,n,null,null)},au.prototype.unmount=Zf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;a_(e.current,2,null,e,null,null),Fl(),n[Nn]=null}};function au(e){this._internalRoot=e}au.prototype.unstable_scheduleHydration=function(e){if(e){var n=Me();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Na.length&&n!==0&&n<Na[a].priority;a++);Na.splice(a,0,e),a===0&&u_(e)}};var h_=t.version;if(h_!=="19.1.0")throw Error(r(527,h_,"19.1.0"));Z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var _S={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{ct=ru.inject(_S),Ot=ru}catch{}}return Co.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",c=Cm,f=wm,y=Dm,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=n_(e,1,!1,null,null,a,o,c,f,y,T,null),e[Nn]=n.current,Uf(e),new Zf(n)},Co.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,c="",f=Cm,y=wm,T=Dm,P=null,J=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&(J=a.formState)),n=n_(e,1,!0,n,a??null,o,c,f,y,T,P,J),n.context=i_(null),a=n.current,o=jn(),o=Ge(o),c=ga(o),c.callback=null,_a(a,c,o),a=o,n.current.lanes=a,gt(n,a),Ti(n),e[Nn]=n.current,Uf(e),new au(n)},Co.version="19.1.0",Co}var M_;function RS(){if(M_)return Jf.exports;M_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Jf.exports=AS(),Jf.exports}var CS=RS(),wo={},E_;function wS(){if(E_)return wo;E_=1,Object.defineProperty(wo,"__esModule",{value:!0}),wo.parse=h,wo.serialize=p;const s=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,u=(()=>{const v=function(){};return v.prototype=Object.create(null),v})();function h(v,M){const E=new u,A=v.length;if(A<2)return E;const S=(M==null?void 0:M.decode)||g;let _=0;do{const O=v.indexOf("=",_);if(O===-1)break;const U=v.indexOf(";",_),w=U===-1?A:U;if(O>w){_=v.lastIndexOf(";",O-1)+1;continue}const F=d(v,_,O),V=m(v,O,F),z=v.slice(F,V);if(E[z]===void 0){let W=d(v,O+1,w),D=m(v,w,W);const C=S(v.slice(W,D));E[z]=C}_=w+1}while(_<A);return E}function d(v,M,E){do{const A=v.charCodeAt(M);if(A!==32&&A!==9)return M}while(++M<E);return E}function m(v,M,E){for(;M>E;){const A=v.charCodeAt(--M);if(A!==32&&A!==9)return M+1}return E}function p(v,M,E){const A=(E==null?void 0:E.encode)||encodeURIComponent;if(!s.test(v))throw new TypeError(`argument name is invalid: ${v}`);const S=A(M);if(!t.test(S))throw new TypeError(`argument val is invalid: ${M}`);let _=v+"="+S;if(!E)return _;if(E.maxAge!==void 0){if(!Number.isInteger(E.maxAge))throw new TypeError(`option maxAge is invalid: ${E.maxAge}`);_+="; Max-Age="+E.maxAge}if(E.domain){if(!i.test(E.domain))throw new TypeError(`option domain is invalid: ${E.domain}`);_+="; Domain="+E.domain}if(E.path){if(!r.test(E.path))throw new TypeError(`option path is invalid: ${E.path}`);_+="; Path="+E.path}if(E.expires){if(!x(E.expires)||!Number.isFinite(E.expires.valueOf()))throw new TypeError(`option expires is invalid: ${E.expires}`);_+="; Expires="+E.expires.toUTCString()}if(E.httpOnly&&(_+="; HttpOnly"),E.secure&&(_+="; Secure"),E.partitioned&&(_+="; Partitioned"),E.priority)switch(typeof E.priority=="string"?E.priority.toLowerCase():void 0){case"low":_+="; Priority=Low";break;case"medium":_+="; Priority=Medium";break;case"high":_+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${E.priority}`)}if(E.sameSite)switch(typeof E.sameSite=="string"?E.sameSite.toLowerCase():E.sameSite){case!0:case"strict":_+="; SameSite=Strict";break;case"lax":_+="; SameSite=Lax";break;case"none":_+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${E.sameSite}`)}return _}function g(v){if(v.indexOf("%")===-1)return v;try{return decodeURIComponent(v)}catch{return v}}function x(v){return l.call(v)==="[object Date]"}return wo}wS();var T_="popstate";function DS(s={}){function t(l,u){let{pathname:h="/",search:d="",hash:m=""}=Rr(l.location.hash.substring(1));return!h.startsWith("/")&&!h.startsWith(".")&&(h="/"+h),Oh("",{pathname:h,search:d,hash:m},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function i(l,u){let h=l.document.querySelector("base"),d="";if(h&&h.getAttribute("href")){let m=l.location.href,p=m.indexOf("#");d=p===-1?m:m.slice(0,p)}return d+"#"+(typeof u=="string"?u:zo(u))}function r(l,u){vi(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(u)})`)}return LS(t,i,r,s)}function Ye(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function vi(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function US(){return Math.random().toString(36).substring(2,10)}function b_(s,t){return{usr:s.state,key:s.key,idx:t}}function Oh(s,t,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof t=="string"?Rr(t):t,state:i,key:t&&t.key||r||US()}}function zo({pathname:s="/",search:t="",hash:i=""}){return t&&t!=="?"&&(s+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Rr(s){let t={};if(s){let i=s.indexOf("#");i>=0&&(t.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(t.search=s.substring(r),s=s.substring(0,r)),s&&(t.pathname=s)}return t}function LS(s,t,i,r={}){let{window:l=document.defaultView,v5Compat:u=!1}=r,h=l.history,d="POP",m=null,p=g();p==null&&(p=0,h.replaceState({...h.state,idx:p},""));function g(){return(h.state||{idx:null}).idx}function x(){d="POP";let S=g(),_=S==null?null:S-p;p=S,m&&m({action:d,location:A.location,delta:_})}function v(S,_){d="PUSH";let O=Oh(A.location,S,_);i&&i(O,S),p=g()+1;let U=b_(O,p),w=A.createHref(O);try{h.pushState(U,"",w)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;l.location.assign(w)}u&&m&&m({action:d,location:A.location,delta:1})}function M(S,_){d="REPLACE";let O=Oh(A.location,S,_);i&&i(O,S),p=g();let U=b_(O,p),w=A.createHref(O);h.replaceState(U,"",w),u&&m&&m({action:d,location:A.location,delta:0})}function E(S){let _=l.location.origin!=="null"?l.location.origin:l.location.href,O=typeof S=="string"?S:zo(S);return O=O.replace(/ $/,"%20"),Ye(_,`No window.location.(origin|href) available to create URL for href: ${O}`),new URL(O,_)}let A={get action(){return d},get location(){return s(l,h)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(T_,x),m=S,()=>{l.removeEventListener(T_,x),m=null}},createHref(S){return t(l,S)},createURL:E,encodeLocation(S){let _=E(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:v,replace:M,go(S){return h.go(S)}};return A}function bv(s,t,i="/"){return NS(s,t,i,!1)}function NS(s,t,i,r){let l=typeof t=="string"?Rr(t):t,u=ra(l.pathname||"/",i);if(u==null)return null;let h=Av(s);OS(h);let d=null;for(let m=0;d==null&&m<h.length;++m){let p=WS(u);d=kS(h[m],p,r)}return d}function Av(s,t=[],i=[],r=""){let l=(u,h,d)=>{let m={relativePath:d===void 0?u.path||"":d,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};m.relativePath.startsWith("/")&&(Ye(m.relativePath.startsWith(r),`Absolute route path "${m.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(r.length));let p=ia([r,m.relativePath]),g=i.concat(m);u.children&&u.children.length>0&&(Ye(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Av(u.children,t,g,p)),!(u.path==null&&!u.index)&&t.push({path:p,score:GS(p,u.index),routesMeta:g})};return s.forEach((u,h)=>{var d;if(u.path===""||!((d=u.path)!=null&&d.includes("?")))l(u,h);else for(let m of Rv(u.path))l(u,h,m)}),t}function Rv(s){let t=s.split("/");if(t.length===0)return[];let[i,...r]=t,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(r.length===0)return l?[u,""]:[u];let h=Rv(r.join("/")),d=[];return d.push(...h.map(m=>m===""?u:[u,m].join("/"))),l&&d.push(...h),d.map(m=>s.startsWith("/")&&m===""?"/":m)}function OS(s){s.sort((t,i)=>t.score!==i.score?i.score-t.score:VS(t.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var PS=/^:[\w-]+$/,BS=3,zS=2,IS=1,FS=10,HS=-2,A_=s=>s==="*";function GS(s,t){let i=s.split("/"),r=i.length;return i.some(A_)&&(r+=HS),t&&(r+=zS),i.filter(l=>!A_(l)).reduce((l,u)=>l+(PS.test(u)?BS:u===""?IS:FS),r)}function VS(s,t){return s.length===t.length&&s.slice(0,-1).every((r,l)=>r===t[l])?s[s.length-1]-t[t.length-1]:0}function kS(s,t,i=!1){let{routesMeta:r}=s,l={},u="/",h=[];for(let d=0;d<r.length;++d){let m=r[d],p=d===r.length-1,g=u==="/"?t:t.slice(u.length)||"/",x=Iu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},g),v=m.route;if(!x&&p&&i&&!r[r.length-1].route.index&&(x=Iu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!x)return null;Object.assign(l,x.params),h.push({params:l,pathname:ia([u,x.pathname]),pathnameBase:ZS(ia([u,x.pathnameBase])),route:v}),x.pathnameBase!=="/"&&(u=ia([u,x.pathnameBase]))}return h}function Iu(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=XS(s.path,s.caseSensitive,s.end),l=t.match(i);if(!l)return null;let u=l[0],h=u.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:r.reduce((p,{paramName:g,isOptional:x},v)=>{if(g==="*"){let E=d[v]||"";h=u.slice(0,u.length-E.length).replace(/(.)\/+$/,"$1")}const M=d[v];return x&&!M?p[g]=void 0:p[g]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:h,pattern:s}}function XS(s,t=!1,i=!0){vi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,d,m)=>(r.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function WS(s){try{return s.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return vi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),s}}function ra(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}function qS(s,t="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Rr(s):s;return{pathname:i?i.startsWith("/")?i:YS(i,t):t,search:KS(r),hash:QS(l)}}function YS(s,t){let i=t.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function nh(s,t,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function jS(s){return s.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function Cv(s){let t=jS(s);return t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase)}function wv(s,t,i,r=!1){let l;typeof s=="string"?l=Rr(s):(l={...s},Ye(!l.pathname||!l.pathname.includes("?"),nh("?","pathname","search",l)),Ye(!l.pathname||!l.pathname.includes("#"),nh("#","pathname","hash",l)),Ye(!l.search||!l.search.includes("#"),nh("#","search","hash",l)));let u=s===""||l.pathname==="",h=u?"/":l.pathname,d;if(h==null)d=i;else{let x=t.length-1;if(!r&&h.startsWith("..")){let v=h.split("/");for(;v[0]==="..";)v.shift(),x-=1;l.pathname=v.join("/")}d=x>=0?t[x]:"/"}let m=qS(l,d),p=h&&h!=="/"&&h.endsWith("/"),g=(u||h===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||g)&&(m.pathname+="/"),m}var ia=s=>s.join("/").replace(/\/\/+/g,"/"),ZS=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),KS=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,QS=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function JS(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var Dv=["POST","PUT","PATCH","DELETE"];new Set(Dv);var $S=["GET",...Dv];new Set($S);var Ds=ht.createContext(null);Ds.displayName="DataRouter";var Vu=ht.createContext(null);Vu.displayName="DataRouterState";var Uv=ht.createContext({isTransitioning:!1});Uv.displayName="ViewTransition";var ty=ht.createContext(new Map);ty.displayName="Fetchers";var ey=ht.createContext(null);ey.displayName="Await";var Ci=ht.createContext(null);Ci.displayName="Navigation";var Vo=ht.createContext(null);Vo.displayName="Location";var la=ht.createContext({outlet:null,matches:[],isDataRoute:!1});la.displayName="Route";var Td=ht.createContext(null);Td.displayName="RouteError";function ny(s,{relative:t}={}){Ye(ko(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=ht.useContext(Ci),{hash:l,pathname:u,search:h}=Xo(s,{relative:t}),d=u;return i!=="/"&&(d=u==="/"?i:ia([i,u])),r.createHref({pathname:d,search:h,hash:l})}function ko(){return ht.useContext(Vo)!=null}function Cr(){return Ye(ko(),"useLocation() may be used only in the context of a <Router> component."),ht.useContext(Vo).location}var Lv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Nv(s){ht.useContext(Ci).static||ht.useLayoutEffect(s)}function iy(){let{isDataRoute:s}=ht.useContext(la);return s?gy():ay()}function ay(){Ye(ko(),"useNavigate() may be used only in the context of a <Router> component.");let s=ht.useContext(Ds),{basename:t,navigator:i}=ht.useContext(Ci),{matches:r}=ht.useContext(la),{pathname:l}=Cr(),u=JSON.stringify(Cv(r)),h=ht.useRef(!1);return Nv(()=>{h.current=!0}),ht.useCallback((m,p={})=>{if(vi(h.current,Lv),!h.current)return;if(typeof m=="number"){i.go(m);return}let g=wv(m,JSON.parse(u),l,p.relative==="path");s==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:ia([t,g.pathname])),(p.replace?i.replace:i.push)(g,p.state,p)},[t,i,u,l,s])}ht.createContext(null);function Xo(s,{relative:t}={}){let{matches:i}=ht.useContext(la),{pathname:r}=Cr(),l=JSON.stringify(Cv(i));return ht.useMemo(()=>wv(s,JSON.parse(l),r,t==="path"),[s,l,r,t])}function ry(s,t){return Ov(s,t)}function Ov(s,t,i,r){var O;Ye(ko(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:u}=ht.useContext(Ci),{matches:h}=ht.useContext(la),d=h[h.length-1],m=d?d.params:{},p=d?d.pathname:"/",g=d?d.pathnameBase:"/",x=d&&d.route;{let U=x&&x.path||"";Pv(p,!x||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let v=Cr(),M;if(t){let U=typeof t=="string"?Rr(t):t;Ye(g==="/"||((O=U.pathname)==null?void 0:O.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${U.pathname}" was given in the \`location\` prop.`),M=U}else M=v;let E=M.pathname||"/",A=E;if(g!=="/"){let U=g.replace(/^\//,"").split("/");A="/"+E.replace(/^\//,"").split("/").slice(U.length).join("/")}let S=!u&&i&&i.matches&&i.matches.length>0?i.matches:bv(s,{pathname:A});vi(x||S!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),vi(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=cy(S&&S.map(U=>Object.assign({},U,{params:Object.assign({},m,U.params),pathname:ia([g,l.encodeLocation?l.encodeLocation(U.pathname).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?g:ia([g,l.encodeLocation?l.encodeLocation(U.pathnameBase).pathname:U.pathnameBase])})),h,i,r);return t&&_?ht.createElement(Vo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},_):_}function sy(){let s=my(),t=JS(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},h=null;return console.error("Error handled by React Router default ErrorBoundary:",s),h=ht.createElement(ht.Fragment,null,ht.createElement("p",null,"💿 Hey developer 👋"),ht.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ht.createElement("code",{style:u},"ErrorBoundary")," or"," ",ht.createElement("code",{style:u},"errorElement")," prop on your route.")),ht.createElement(ht.Fragment,null,ht.createElement("h2",null,"Unexpected Application Error!"),ht.createElement("h3",{style:{fontStyle:"italic"}},t),i?ht.createElement("pre",{style:l},i):null,h)}var oy=ht.createElement(sy,null),ly=class extends ht.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,t){return t.location!==s.location||t.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:t.error,location:t.location,revalidation:s.revalidation||t.revalidation}}componentDidCatch(s,t){console.error("React Router caught the following error during render",s,t)}render(){return this.state.error!==void 0?ht.createElement(la.Provider,{value:this.props.routeContext},ht.createElement(Td.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function uy({routeContext:s,match:t,children:i}){let r=ht.useContext(Ds);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),ht.createElement(la.Provider,{value:s},i)}function cy(s,t=[],i=null,r=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let l=s,u=i==null?void 0:i.errors;if(u!=null){let m=l.findIndex(p=>p.route.id&&(u==null?void 0:u[p.route.id])!==void 0);Ye(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,m+1))}let h=!1,d=-1;if(i)for(let m=0;m<l.length;m++){let p=l[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=m),p.route.id){let{loaderData:g,errors:x}=i,v=p.route.loader&&!g.hasOwnProperty(p.route.id)&&(!x||x[p.route.id]===void 0);if(p.route.lazy||v){h=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((m,p,g)=>{let x,v=!1,M=null,E=null;i&&(x=u&&p.route.id?u[p.route.id]:void 0,M=p.route.errorElement||oy,h&&(d<0&&g===0?(Pv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,E=null):d===g&&(v=!0,E=p.route.hydrateFallbackElement||null)));let A=t.concat(l.slice(0,g+1)),S=()=>{let _;return x?_=M:v?_=E:p.route.Component?_=ht.createElement(p.route.Component,null):p.route.element?_=p.route.element:_=m,ht.createElement(uy,{match:p,routeContext:{outlet:m,matches:A,isDataRoute:i!=null},children:_})};return i&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?ht.createElement(ly,{location:i.location,revalidation:i.revalidation,component:M,error:x,children:S(),routeContext:{outlet:null,matches:A,isDataRoute:!0}}):S()},null)}function bd(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function fy(s){let t=ht.useContext(Ds);return Ye(t,bd(s)),t}function hy(s){let t=ht.useContext(Vu);return Ye(t,bd(s)),t}function dy(s){let t=ht.useContext(la);return Ye(t,bd(s)),t}function Ad(s){let t=dy(s),i=t.matches[t.matches.length-1];return Ye(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function py(){return Ad("useRouteId")}function my(){var r;let s=ht.useContext(Td),t=hy("useRouteError"),i=Ad("useRouteError");return s!==void 0?s:(r=t.errors)==null?void 0:r[i]}function gy(){let{router:s}=fy("useNavigate"),t=Ad("useNavigate"),i=ht.useRef(!1);return Nv(()=>{i.current=!0}),ht.useCallback(async(l,u={})=>{vi(i.current,Lv),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:t,...u}))},[s,t])}var R_={};function Pv(s,t,i){!t&&!R_[s]&&(R_[s]=!0,vi(!1,i))}ht.memo(_y);function _y({routes:s,future:t,state:i}){return Ov(s,void 0,i,t)}function ys(s){Ye(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function vy({basename:s="/",children:t=null,location:i,navigationType:r="POP",navigator:l,static:u=!1}){Ye(!ko(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=s.replace(/^\/*/,"/"),d=ht.useMemo(()=>({basename:h,navigator:l,static:u,future:{}}),[h,l,u]);typeof i=="string"&&(i=Rr(i));let{pathname:m="/",search:p="",hash:g="",state:x=null,key:v="default"}=i,M=ht.useMemo(()=>{let E=ra(m,h);return E==null?null:{location:{pathname:E,search:p,hash:g,state:x,key:v},navigationType:r}},[h,m,p,g,x,v,r]);return vi(M!=null,`<Router basename="${h}"> is not able to match the URL "${m}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:ht.createElement(Ci.Provider,{value:d},ht.createElement(Vo.Provider,{children:t,value:M}))}function xy({children:s,location:t}){return ry(Ph(s),t)}function Ph(s,t=[]){let i=[];return ht.Children.forEach(s,(r,l)=>{if(!ht.isValidElement(r))return;let u=[...t,l];if(r.type===ht.Fragment){i.push.apply(i,Ph(r.props.children,u));return}Ye(r.type===ys,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ye(!r.props.index||!r.props.children,"An index route cannot have child routes.");let h={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(h.children=Ph(r.props.children,u)),i.push(h)}),i}var wu="get",Du="application/x-www-form-urlencoded";function ku(s){return s!=null&&typeof s.tagName=="string"}function Sy(s){return ku(s)&&s.tagName.toLowerCase()==="button"}function yy(s){return ku(s)&&s.tagName.toLowerCase()==="form"}function My(s){return ku(s)&&s.tagName.toLowerCase()==="input"}function Ey(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function Ty(s,t){return s.button===0&&(!t||t==="_self")&&!Ey(s)}var su=null;function by(){if(su===null)try{new FormData(document.createElement("form"),0),su=!1}catch{su=!0}return su}var Ay=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ih(s){return s!=null&&!Ay.has(s)?(vi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Du}"`),null):s}function Ry(s,t){let i,r,l,u,h;if(yy(s)){let d=s.getAttribute("action");r=d?ra(d,t):null,i=s.getAttribute("method")||wu,l=ih(s.getAttribute("enctype"))||Du,u=new FormData(s)}else if(Sy(s)||My(s)&&(s.type==="submit"||s.type==="image")){let d=s.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||d.getAttribute("action");if(r=m?ra(m,t):null,i=s.getAttribute("formmethod")||d.getAttribute("method")||wu,l=ih(s.getAttribute("formenctype"))||ih(d.getAttribute("enctype"))||Du,u=new FormData(d,s),!by()){let{name:p,type:g,value:x}=s;if(g==="image"){let v=p?`${p}.`:"";u.append(`${v}x`,"0"),u.append(`${v}y`,"0")}else p&&u.append(p,x)}}else{if(ku(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=wu,r=null,l=Du,h=s}return u&&l==="text/plain"&&(h=u,u=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:u,body:h}}function Rd(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}async function Cy(s,t){if(s.id in t)return t[s.id];try{let i=await import(s.module);return t[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function wy(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function Dy(s,t,i){let r=await Promise.all(s.map(async l=>{let u=t.routes[l.route.id];if(u){let h=await Cy(u,i);return h.links?h.links():[]}return[]}));return Oy(r.flat(1).filter(wy).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function C_(s,t,i,r,l,u){let h=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,d=(m,p)=>{var g;return i[p].pathname!==m.pathname||((g=i[p].route.path)==null?void 0:g.endsWith("*"))&&i[p].params["*"]!==m.params["*"]};return u==="assets"?t.filter((m,p)=>h(m,p)||d(m,p)):u==="data"?t.filter((m,p)=>{var x;let g=r.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(h(m,p)||d(m,p))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((x=i[0])==null?void 0:x.params)||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function Uy(s,t,{includeHydrateFallback:i}={}){return Ly(s.map(r=>{let l=t.routes[r.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function Ly(s){return[...new Set(s)]}function Ny(s){let t={},i=Object.keys(s).sort();for(let r of i)t[r]=s[r];return t}function Oy(s,t){let i=new Set;return new Set(t),s.reduce((r,l)=>{let u=JSON.stringify(Ny(l));return i.has(u)||(i.add(u),r.push({key:u,link:l})),r},[])}var Py=new Set([100,101,204,205]);function By(s,t){let i=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i.pathname==="/"?i.pathname="_root.data":t&&ra(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.data`:i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function Bv(){let s=ht.useContext(Ds);return Rd(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function zy(){let s=ht.useContext(Vu);return Rd(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Cd=ht.createContext(void 0);Cd.displayName="FrameworkContext";function zv(){let s=ht.useContext(Cd);return Rd(s,"You must render this element inside a <HydratedRouter> element"),s}function Iy(s,t){let i=ht.useContext(Cd),[r,l]=ht.useState(!1),[u,h]=ht.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:p,onMouseLeave:g,onTouchStart:x}=t,v=ht.useRef(null);ht.useEffect(()=>{if(s==="render"&&h(!0),s==="viewport"){let A=_=>{_.forEach(O=>{h(O.isIntersecting)})},S=new IntersectionObserver(A,{threshold:.5});return v.current&&S.observe(v.current),()=>{S.disconnect()}}},[s]),ht.useEffect(()=>{if(r){let A=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(A)}}},[r]);let M=()=>{l(!0)},E=()=>{l(!1),h(!1)};return i?s!=="intent"?[u,v,{}]:[u,v,{onFocus:Do(d,M),onBlur:Do(m,E),onMouseEnter:Do(p,M),onMouseLeave:Do(g,E),onTouchStart:Do(x,M)}]:[!1,v,{}]}function Do(s,t){return i=>{s&&s(i),i.defaultPrevented||t(i)}}function Fy({page:s,...t}){let{router:i}=Bv(),r=ht.useMemo(()=>bv(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?ht.createElement(Gy,{page:s,matches:r,...t}):null}function Hy(s){let{manifest:t,routeModules:i}=zv(),[r,l]=ht.useState([]);return ht.useEffect(()=>{let u=!1;return Dy(s,t,i).then(h=>{u||l(h)}),()=>{u=!0}},[s,t,i]),r}function Gy({page:s,matches:t,...i}){let r=Cr(),{manifest:l,routeModules:u}=zv(),{basename:h}=Bv(),{loaderData:d,matches:m}=zy(),p=ht.useMemo(()=>C_(s,t,m,l,r,"data"),[s,t,m,l,r]),g=ht.useMemo(()=>C_(s,t,m,l,r,"assets"),[s,t,m,l,r]),x=ht.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let E=new Set,A=!1;if(t.forEach(_=>{var U;let O=l.routes[_.route.id];!O||!O.hasLoader||(!p.some(w=>w.route.id===_.route.id)&&_.route.id in d&&((U=u[_.route.id])!=null&&U.shouldRevalidate)||O.hasClientLoader?A=!0:E.add(_.route.id))}),E.size===0)return[];let S=By(s,h);return A&&E.size>0&&S.searchParams.set("_routes",t.filter(_=>E.has(_.route.id)).map(_=>_.route.id).join(",")),[S.pathname+S.search]},[h,d,r,l,p,t,s,u]),v=ht.useMemo(()=>Uy(g,l),[g,l]),M=Hy(g);return ht.createElement(ht.Fragment,null,x.map(E=>ht.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),v.map(E=>ht.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),M.map(({key:E,link:A})=>ht.createElement("link",{key:E,...A})))}function Vy(...s){return t=>{s.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var Iv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Iv&&(window.__reactRouterVersion="7.5.3")}catch{}function ky({basename:s,children:t,window:i}){let r=ht.useRef();r.current==null&&(r.current=DS({window:i,v5Compat:!0}));let l=r.current,[u,h]=ht.useState({action:l.action,location:l.location}),d=ht.useCallback(m=>{ht.startTransition(()=>h(m))},[h]);return ht.useLayoutEffect(()=>l.listen(d),[l,d]),ht.createElement(vy,{basename:s,children:t,location:u.location,navigationType:u.action,navigator:l})}var Fv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hv=ht.forwardRef(function({onClick:t,discover:i="render",prefetch:r="none",relative:l,reloadDocument:u,replace:h,state:d,target:m,to:p,preventScrollReset:g,viewTransition:x,...v},M){let{basename:E}=ht.useContext(Ci),A=typeof p=="string"&&Fv.test(p),S,_=!1;if(typeof p=="string"&&A&&(S=p,Iv))try{let D=new URL(window.location.href),C=p.startsWith("//")?new URL(D.protocol+p):new URL(p),G=ra(C.pathname,E);C.origin===D.origin&&G!=null?p=G+C.search+C.hash:_=!0}catch{vi(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let O=ny(p,{relative:l}),[U,w,F]=Iy(r,v),V=Yy(p,{replace:h,state:d,target:m,preventScrollReset:g,relative:l,viewTransition:x});function z(D){t&&t(D),D.defaultPrevented||V(D)}let W=ht.createElement("a",{...v,...F,href:S||O,onClick:_||u?t:z,ref:Vy(M,w),target:m,"data-discover":!A&&i==="render"?"true":void 0});return U&&!A?ht.createElement(ht.Fragment,null,W,ht.createElement(Fy,{page:O})):W});Hv.displayName="Link";var Xy=ht.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:r="",end:l=!1,style:u,to:h,viewTransition:d,children:m,...p},g){let x=Xo(h,{relative:p.relative}),v=Cr(),M=ht.useContext(Vu),{navigator:E,basename:A}=ht.useContext(Ci),S=M!=null&&Jy(x)&&d===!0,_=E.encodeLocation?E.encodeLocation(x).pathname:x.pathname,O=v.pathname,U=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(O=O.toLowerCase(),U=U?U.toLowerCase():null,_=_.toLowerCase()),U&&A&&(U=ra(U,A)||U);const w=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let F=O===_||!l&&O.startsWith(_)&&O.charAt(w)==="/",V=U!=null&&(U===_||!l&&U.startsWith(_)&&U.charAt(_.length)==="/"),z={isActive:F,isPending:V,isTransitioning:S},W=F?t:void 0,D;typeof r=="function"?D=r(z):D=[r,F?"active":null,V?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let C=typeof u=="function"?u(z):u;return ht.createElement(Hv,{...p,"aria-current":W,className:D,ref:g,style:C,to:h,viewTransition:d},typeof m=="function"?m(z):m)});Xy.displayName="NavLink";var Wy=ht.forwardRef(({discover:s="render",fetcherKey:t,navigate:i,reloadDocument:r,replace:l,state:u,method:h=wu,action:d,onSubmit:m,relative:p,preventScrollReset:g,viewTransition:x,...v},M)=>{let E=Ky(),A=Qy(d,{relative:p}),S=h.toLowerCase()==="get"?"get":"post",_=typeof d=="string"&&Fv.test(d),O=U=>{if(m&&m(U),U.defaultPrevented)return;U.preventDefault();let w=U.nativeEvent.submitter,F=(w==null?void 0:w.getAttribute("formmethod"))||h;E(w||U.currentTarget,{fetcherKey:t,method:F,navigate:i,replace:l,state:u,relative:p,preventScrollReset:g,viewTransition:x})};return ht.createElement("form",{ref:M,method:S,action:A,onSubmit:r?m:O,...v,"data-discover":!_&&s==="render"?"true":void 0})});Wy.displayName="Form";function qy(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Gv(s){let t=ht.useContext(Ds);return Ye(t,qy(s)),t}function Yy(s,{target:t,replace:i,state:r,preventScrollReset:l,relative:u,viewTransition:h}={}){let d=iy(),m=Cr(),p=Xo(s,{relative:u});return ht.useCallback(g=>{if(Ty(g,t)){g.preventDefault();let x=i!==void 0?i:zo(m)===zo(p);d(s,{replace:x,state:r,preventScrollReset:l,relative:u,viewTransition:h})}},[m,d,p,i,r,t,s,l,u,h])}var jy=0,Zy=()=>`__${String(++jy)}__`;function Ky(){let{router:s}=Gv("useSubmit"),{basename:t}=ht.useContext(Ci),i=py();return ht.useCallback(async(r,l={})=>{let{action:u,method:h,encType:d,formData:m,body:p}=Ry(r,t);if(l.navigate===!1){let g=l.fetcherKey||Zy();await s.fetch(g,i,l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||h,formEncType:l.encType||d,flushSync:l.flushSync})}else await s.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||h,formEncType:l.encType||d,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,t,i])}function Qy(s,{relative:t}={}){let{basename:i}=ht.useContext(Ci),r=ht.useContext(la);Ye(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),u={...Xo(s||".",{relative:t})},h=Cr();if(s==null){u.search=h.search;let d=new URLSearchParams(u.search),m=d.getAll("index");if(m.some(g=>g==="")){d.delete("index"),m.filter(x=>x).forEach(x=>d.append("index",x));let g=d.toString();u.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:ia([i,u.pathname])),zo(u)}function Jy(s,t={}){let i=ht.useContext(Uv);Ye(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Gv("useViewTransitionState"),l=Xo(s,{relative:t.relative});if(!i.isTransitioning)return!1;let u=ra(i.currentLocation.pathname,r)||i.currentLocation.pathname,h=ra(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Iu(l.pathname,h)!=null||Iu(l.pathname,u)!=null}new TextEncoder;[...Py];function Vv(){const[s,t]=ht.useState({width:window.innerWidth,height:window.innerHeight});return ht.useEffect(()=>{function i(){t({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}},[]),s}const $y="Cal Sans",tM="Oswald",Us="Arial, sans",w_=500,eM=()=>{const{width:s}=Vv();return It.jsx("div",{style:{fontFamily:Us},children:It.jsx("p",{children:It.jsx("div",{style:{display:"flex",justifyContent:"center"},children:It.jsx("div",{style:{width:s>500?"20vw":"25vw"},children:It.jsx("a",{href:"https://www.linkedin.com/in/jay-crawford-prod/",target:"_blank",rel:"noopener noreferrer",style:{marginLeft:"10px"},children:It.jsx("img",{src:"./LinkedIn_Logo.svg"})})})})})})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wd="176",nM=0,D_=1,iM=2,kv=1,aM=2,$i=3,Xa=0,Hn=1,ta=2,Va=0,Es=1,U_=2,L_=3,N_=4,rM=5,Sr=100,sM=101,oM=102,lM=103,uM=104,cM=200,fM=201,hM=202,dM=203,Bh=204,zh=205,pM=206,mM=207,gM=208,_M=209,vM=210,xM=211,SM=212,yM=213,MM=214,Ih=0,Fh=1,Hh=2,bs=3,Gh=4,Vh=5,kh=6,Xh=7,Xv=0,EM=1,TM=2,ka=0,bM=1,AM=2,RM=3,CM=4,wM=5,DM=6,UM=7,Wv=300,As=301,Rs=302,Wh=303,qh=304,Xu=306,Yh=1e3,Mr=1001,jh=1002,_i=1003,LM=1004,ou=1005,Ai=1006,ah=1007,Er=1008,sa=1009,qv=1010,Yv=1011,Io=1012,Dd=1013,br=1014,ea=1015,Wo=1016,Ud=1017,Ld=1018,Fo=1020,jv=35902,Zv=1021,Kv=1022,gi=1023,Ho=1026,Go=1027,Qv=1028,Nd=1029,Jv=1030,Od=1031,Pd=1033,Uu=33776,Lu=33777,Nu=33778,Ou=33779,Zh=35840,Kh=35841,Qh=35842,Jh=35843,$h=36196,td=37492,ed=37496,nd=37808,id=37809,ad=37810,rd=37811,sd=37812,od=37813,ld=37814,ud=37815,cd=37816,fd=37817,hd=37818,dd=37819,pd=37820,md=37821,Pu=36492,gd=36494,_d=36495,$v=36283,vd=36284,xd=36285,Sd=36286,NM=3200,OM=3201,PM=0,BM=1,Ga="",oi="srgb",Cs="srgb-linear",Fu="linear",Oe="srgb",os=7680,O_=519,zM=512,IM=513,FM=514,t0=515,HM=516,GM=517,VM=518,kM=519,P_=35044,B_="300 es",na=2e3,Hu=2001;class Ls{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rh=Math.PI/180,yd=180/Math.PI;function qo(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]).toLowerCase()}function xe(s,t,i){return Math.max(t,Math.min(i,s))}function XM(s,t){return(s%t+t)%t}function sh(s,t,i){return(1-i)*s+i*t}function Uo(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function In(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Fe{constructor(t=0,i=0){Fe.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(xe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*r-h*l+t.x,this.y=u*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class se{constructor(t,i,r,l,u,h,d,m,p){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p)}set(t,i,r,l,u,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],x=r[7],v=r[2],M=r[5],E=r[8],A=l[0],S=l[3],_=l[6],O=l[1],U=l[4],w=l[7],F=l[2],V=l[5],z=l[8];return u[0]=h*A+d*O+m*F,u[3]=h*S+d*U+m*V,u[6]=h*_+d*w+m*z,u[1]=p*A+g*O+x*F,u[4]=p*S+g*U+x*V,u[7]=p*_+g*w+x*z,u[2]=v*A+M*O+E*F,u[5]=v*S+M*U+E*V,u[8]=v*_+M*w+E*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-r*u*g+r*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],x=g*h-d*p,v=d*m-g*u,M=p*u-h*m,E=i*x+r*v+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=x*A,t[1]=(l*p-g*r)*A,t[2]=(d*r-l*h)*A,t[3]=v*A,t[4]=(g*i-l*m)*A,t[5]=(l*u-d*i)*A,t[6]=M*A,t[7]=(r*m-p*i)*A,t[8]=(h*i-r*u)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(oh.makeScale(t,i)),this}rotate(t){return this.premultiply(oh.makeRotation(-t)),this}translate(t,i){return this.premultiply(oh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const oh=new se;function e0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Gu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function WM(){const s=Gu("canvas");return s.style.display="block",s}const z_={};function Bu(s){s in z_||(z_[s]=!0,console.warn(s))}function qM(s,t,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function YM(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function jM(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const I_=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),F_=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ZM(){const s={enabled:!0,workingColorSpace:Cs,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Oe&&(l.r=aa(l.r),l.g=aa(l.g),l.b=aa(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Oe&&(l.r=Ts(l.r),l.g=Ts(l.g),l.b=Ts(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ga?Fu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Cs]:{primaries:t,whitePoint:r,transfer:Fu,toXYZ:I_,fromXYZ:F_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:t,whitePoint:r,transfer:Oe,toXYZ:I_,fromXYZ:F_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),s}const be=ZM();function aa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ts(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ls;class KM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{ls===void 0&&(ls=Gu("canvas")),ls.width=t.width,ls.height=t.height;const l=ls.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=ls}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Gu("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=aa(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(aa(i[r]/255)*255):i[r]=aa(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let QM=0;class Bd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:QM++}),this.uuid=qo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(lh(l[h].image)):u.push(lh(l[h]))}else u=lh(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function lh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?KM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let JM=0;class Gn extends Ls{constructor(t=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,r=Mr,l=Mr,u=Ai,h=Er,d=gi,m=sa,p=Gn.DEFAULT_ANISOTROPY,g=Ga){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:JM++}),this.uuid=qo(),this.name="",this.source=new Bd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yh:t.x=t.x-Math.floor(t.x);break;case Mr:t.x=t.x<0?0:1;break;case jh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yh:t.y=t.y-Math.floor(t.y);break;case Mr:t.y=t.y<0?0:1;break;case jh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=Wv;Gn.DEFAULT_ANISOTROPY=1;class $e{constructor(t=0,i=0,r=0,l=1){$e.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],g=m[4],x=m[8],v=m[1],M=m[5],E=m[9],A=m[2],S=m[6],_=m[10];if(Math.abs(g-v)<.01&&Math.abs(x-A)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(x+A)<.1&&Math.abs(E+S)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,w=(M+1)/2,F=(_+1)/2,V=(g+v)/4,z=(x+A)/4,W=(E+S)/4;return U>w&&U>F?U<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(U),l=V/r,u=z/r):w>F?w<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(w),r=V/l,u=W/l):F<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(F),r=z/u,l=W/u),this.set(r,l,u,i),this}let O=Math.sqrt((S-E)*(S-E)+(x-A)*(x-A)+(v-g)*(v-g));return Math.abs(O)<.001&&(O=1),this.x=(S-E)/O,this.y=(x-A)/O,this.z=(v-g)/O,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this.w=xe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this.w=xe(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $M extends Ls{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth?r.depth:1,this.scissor=new $e(0,0,t,i),this.scissorTest=!1,this.viewport=new $e(0,0,t,i);const l={width:t,height:i,depth:this.depth};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},r);const u=new Gn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Bd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends $M{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class n0 extends Gn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class tE extends Gn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],x=r[l+3];const v=u[h+0],M=u[h+1],E=u[h+2],A=u[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x;return}if(d===1){t[i+0]=v,t[i+1]=M,t[i+2]=E,t[i+3]=A;return}if(x!==A||m!==v||p!==M||g!==E){let S=1-d;const _=m*v+p*M+g*E+x*A,O=_>=0?1:-1,U=1-_*_;if(U>Number.EPSILON){const F=Math.sqrt(U),V=Math.atan2(F,_*O);S=Math.sin(S*V)/F,d=Math.sin(d*V)/F}const w=d*O;if(m=m*S+v*w,p=p*S+M*w,g=g*S+E*w,x=x*S+A*w,S===1-d){const F=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=F,p*=F,g*=F,x*=F}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x}static multiplyQuaternionsFlat(t,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],x=u[h],v=u[h+1],M=u[h+2],E=u[h+3];return t[i]=d*E+g*x+m*M-p*v,t[i+1]=m*E+g*v+p*x-d*M,t[i+2]=p*E+g*M+d*v-m*x,t[i+3]=g*E-d*x-m*v-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),x=d(u/2),v=m(r/2),M=m(l/2),E=m(u/2);switch(h){case"XYZ":this._x=v*g*x+p*M*E,this._y=p*M*x-v*g*E,this._z=p*g*E+v*M*x,this._w=p*g*x-v*M*E;break;case"YXZ":this._x=v*g*x+p*M*E,this._y=p*M*x-v*g*E,this._z=p*g*E-v*M*x,this._w=p*g*x+v*M*E;break;case"ZXY":this._x=v*g*x-p*M*E,this._y=p*M*x+v*g*E,this._z=p*g*E+v*M*x,this._w=p*g*x-v*M*E;break;case"ZYX":this._x=v*g*x-p*M*E,this._y=p*M*x+v*g*E,this._z=p*g*E-v*M*x,this._w=p*g*x+v*M*E;break;case"YZX":this._x=v*g*x+p*M*E,this._y=p*M*x+v*g*E,this._z=p*g*E-v*M*x,this._w=p*g*x-v*M*E;break;case"XZY":this._x=v*g*x-p*M*E,this._y=p*M*x-v*g*E,this._z=p*g*E+v*M*x,this._w=p*g*x+v*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],x=i[10],v=r+d+x;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(r>d&&r>x){const M=2*Math.sqrt(1+r-d-x);this._w=(g-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>x){const M=2*Math.sqrt(1+d-r-x);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+x-r-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-r*p,this._z=u*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),x=Math.sin((1-i)*g)/p,v=Math.sin(i*g)/p;return this._w=h*x+this._w*v,this._x=r*x+this._x*v,this._y=l*x+this._y*v,this._z=u*x+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(t=0,i=0,r=0){rt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(H_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(H_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),g=2*(d*i-u*l),x=2*(u*r-h*i);return this.x=i+m*p+h*x-d*g,this.y=r+m*g+d*p-u*x,this.z=l+m*x+u*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return uh.copy(this).projectOnVector(t),this.sub(uh)}reflect(t){return this.sub(uh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(xe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uh=new rt,H_=new Yo;class jo{constructor(t=new rt(1/0,1/0,1/0),i=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(hi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(hi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=hi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,hi):hi.fromBufferAttribute(u,h),hi.applyMatrix4(t.matrixWorld),this.expandByPoint(hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lu.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),lu.copy(r.boundingBox)),lu.applyMatrix4(t.matrixWorld),this.union(lu)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hi),hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Lo),uu.subVectors(this.max,Lo),us.subVectors(t.a,Lo),cs.subVectors(t.b,Lo),fs.subVectors(t.c,Lo),Pa.subVectors(cs,us),Ba.subVectors(fs,cs),hr.subVectors(us,fs);let i=[0,-Pa.z,Pa.y,0,-Ba.z,Ba.y,0,-hr.z,hr.y,Pa.z,0,-Pa.x,Ba.z,0,-Ba.x,hr.z,0,-hr.x,-Pa.y,Pa.x,0,-Ba.y,Ba.x,0,-hr.y,hr.x,0];return!ch(i,us,cs,fs,uu)||(i=[1,0,0,0,1,0,0,0,1],!ch(i,us,cs,fs,uu))?!1:(cu.crossVectors(Pa,Ba),i=[cu.x,cu.y,cu.z],ch(i,us,cs,fs,uu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ji=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],hi=new rt,lu=new jo,us=new rt,cs=new rt,fs=new rt,Pa=new rt,Ba=new rt,hr=new rt,Lo=new rt,uu=new rt,cu=new rt,dr=new rt;function ch(s,t,i,r,l){for(let u=0,h=s.length-3;u<=h;u+=3){dr.fromArray(s,u);const d=l.x*Math.abs(dr.x)+l.y*Math.abs(dr.y)+l.z*Math.abs(dr.z),m=t.dot(dr),p=i.dot(dr),g=r.dot(dr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const eE=new jo,No=new rt,fh=new rt;class zd{constructor(t=new rt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):eE.setFromPoints(t).getCenter(r);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;No.subVectors(t,this.center);const i=No.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(No,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(No.copy(t.center).add(fh)),this.expandByPoint(No.copy(t.center).sub(fh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zi=new rt,hh=new rt,fu=new rt,za=new rt,dh=new rt,hu=new rt,ph=new rt;class nE{constructor(t=new rt,i=new rt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zi)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Zi.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Zi.copy(this.origin).addScaledVector(this.direction,i),Zi.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){hh.copy(t).add(i).multiplyScalar(.5),fu.copy(i).sub(t).normalize(),za.copy(this.origin).sub(hh);const u=t.distanceTo(i)*.5,h=-this.direction.dot(fu),d=za.dot(this.direction),m=-za.dot(fu),p=za.lengthSq(),g=Math.abs(1-h*h);let x,v,M,E;if(g>0)if(x=h*m-d,v=h*d-m,E=u*g,x>=0)if(v>=-E)if(v<=E){const A=1/g;x*=A,v*=A,M=x*(x+h*v+2*d)+v*(h*x+v+2*m)+p}else v=u,x=Math.max(0,-(h*v+d)),M=-x*x+v*(v+2*m)+p;else v=-u,x=Math.max(0,-(h*v+d)),M=-x*x+v*(v+2*m)+p;else v<=-E?(x=Math.max(0,-(-h*u+d)),v=x>0?-u:Math.min(Math.max(-u,-m),u),M=-x*x+v*(v+2*m)+p):v<=E?(x=0,v=Math.min(Math.max(-u,-m),u),M=v*(v+2*m)+p):(x=Math.max(0,-(h*u+d)),v=x>0?u:Math.min(Math.max(-u,-m),u),M=-x*x+v*(v+2*m)+p);else v=h>0?-u:u,x=Math.max(0,-(h*v+d)),M=-x*x+v*(v+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(hh).addScaledVector(fu,v),M}intersectSphere(t,i){Zi.subVectors(t.center,this.origin);const r=Zi.dot(this.direction),l=Zi.dot(Zi)-r*r,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,v=this.origin;return p>=0?(r=(t.min.x-v.x)*p,l=(t.max.x-v.x)*p):(r=(t.max.x-v.x)*p,l=(t.min.x-v.x)*p),g>=0?(u=(t.min.y-v.y)*g,h=(t.max.y-v.y)*g):(u=(t.max.y-v.y)*g,h=(t.min.y-v.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),x>=0?(d=(t.min.z-v.z)*x,m=(t.max.z-v.z)*x):(d=(t.max.z-v.z)*x,m=(t.min.z-v.z)*x),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Zi)!==null}intersectTriangle(t,i,r,l,u){dh.subVectors(i,t),hu.subVectors(r,t),ph.crossVectors(dh,hu);let h=this.direction.dot(ph),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;za.subVectors(this.origin,t);const m=d*this.direction.dot(hu.crossVectors(za,hu));if(m<0)return null;const p=d*this.direction.dot(dh.cross(za));if(p<0||m+p>h)return null;const g=-d*za.dot(ph);return g<0?null:this.at(g/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(t,i,r,l,u,h,d,m,p,g,x,v,M,E,A,S){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p,g,x,v,M,E,A,S)}set(t,i,r,l,u,h,d,m,p,g,x,v,M,E,A,S){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=x,_[14]=v,_[3]=M,_[7]=E,_[11]=A,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/hs.setFromMatrixColumn(t,0).length(),u=1/hs.setFromMatrixColumn(t,1).length(),h=1/hs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),x=Math.sin(u);if(t.order==="XYZ"){const v=h*g,M=h*x,E=d*g,A=d*x;i[0]=m*g,i[4]=-m*x,i[8]=p,i[1]=M+E*p,i[5]=v-A*p,i[9]=-d*m,i[2]=A-v*p,i[6]=E+M*p,i[10]=h*m}else if(t.order==="YXZ"){const v=m*g,M=m*x,E=p*g,A=p*x;i[0]=v+A*d,i[4]=E*d-M,i[8]=h*p,i[1]=h*x,i[5]=h*g,i[9]=-d,i[2]=M*d-E,i[6]=A+v*d,i[10]=h*m}else if(t.order==="ZXY"){const v=m*g,M=m*x,E=p*g,A=p*x;i[0]=v-A*d,i[4]=-h*x,i[8]=E+M*d,i[1]=M+E*d,i[5]=h*g,i[9]=A-v*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const v=h*g,M=h*x,E=d*g,A=d*x;i[0]=m*g,i[4]=E*p-M,i[8]=v*p+A,i[1]=m*x,i[5]=A*p+v,i[9]=M*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const v=h*m,M=h*p,E=d*m,A=d*p;i[0]=m*g,i[4]=A-v*x,i[8]=E*x+M,i[1]=x,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*x+E,i[10]=v-A*x}else if(t.order==="XZY"){const v=h*m,M=h*p,E=d*m,A=d*p;i[0]=m*g,i[4]=-x,i[8]=p*g,i[1]=v*x+A,i[5]=h*g,i[9]=M*x-E,i[2]=E*x-M,i[6]=d*g,i[10]=A*x+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(iE,t,aE)}lookAt(t,i,r){const l=this.elements;return Kn.subVectors(t,i),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Ia.crossVectors(r,Kn),Ia.lengthSq()===0&&(Math.abs(r.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Ia.crossVectors(r,Kn)),Ia.normalize(),du.crossVectors(Kn,Ia),l[0]=Ia.x,l[4]=du.x,l[8]=Kn.x,l[1]=Ia.y,l[5]=du.y,l[9]=Kn.y,l[2]=Ia.z,l[6]=du.z,l[10]=Kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],x=r[5],v=r[9],M=r[13],E=r[2],A=r[6],S=r[10],_=r[14],O=r[3],U=r[7],w=r[11],F=r[15],V=l[0],z=l[4],W=l[8],D=l[12],C=l[1],G=l[5],lt=l[9],st=l[13],vt=l[2],dt=l[6],B=l[10],Z=l[14],Y=l[3],Mt=l[7],N=l[11],$=l[15];return u[0]=h*V+d*C+m*vt+p*Y,u[4]=h*z+d*G+m*dt+p*Mt,u[8]=h*W+d*lt+m*B+p*N,u[12]=h*D+d*st+m*Z+p*$,u[1]=g*V+x*C+v*vt+M*Y,u[5]=g*z+x*G+v*dt+M*Mt,u[9]=g*W+x*lt+v*B+M*N,u[13]=g*D+x*st+v*Z+M*$,u[2]=E*V+A*C+S*vt+_*Y,u[6]=E*z+A*G+S*dt+_*Mt,u[10]=E*W+A*lt+S*B+_*N,u[14]=E*D+A*st+S*Z+_*$,u[3]=O*V+U*C+w*vt+F*Y,u[7]=O*z+U*G+w*dt+F*Mt,u[11]=O*W+U*lt+w*B+F*N,u[15]=O*D+U*st+w*Z+F*$,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],x=t[6],v=t[10],M=t[14],E=t[3],A=t[7],S=t[11],_=t[15];return E*(+u*m*x-l*p*x-u*d*v+r*p*v+l*d*M-r*m*M)+A*(+i*m*M-i*p*v+u*h*v-l*h*M+l*p*g-u*m*g)+S*(+i*p*x-i*d*M-u*h*x+r*h*M+u*d*g-r*p*g)+_*(-l*d*g-i*m*x+i*d*v+l*h*x-r*h*v+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],x=t[9],v=t[10],M=t[11],E=t[12],A=t[13],S=t[14],_=t[15],O=x*S*p-A*v*p+A*m*M-d*S*M-x*m*_+d*v*_,U=E*v*p-g*S*p-E*m*M+h*S*M+g*m*_-h*v*_,w=g*A*p-E*x*p+E*d*M-h*A*M-g*d*_+h*x*_,F=E*x*m-g*A*m-E*d*v+h*A*v+g*d*S-h*x*S,V=i*O+r*U+l*w+u*F;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/V;return t[0]=O*z,t[1]=(A*v*u-x*S*u-A*l*M+r*S*M+x*l*_-r*v*_)*z,t[2]=(d*S*u-A*m*u+A*l*p-r*S*p-d*l*_+r*m*_)*z,t[3]=(x*m*u-d*v*u-x*l*p+r*v*p+d*l*M-r*m*M)*z,t[4]=U*z,t[5]=(g*S*u-E*v*u+E*l*M-i*S*M-g*l*_+i*v*_)*z,t[6]=(E*m*u-h*S*u-E*l*p+i*S*p+h*l*_-i*m*_)*z,t[7]=(h*v*u-g*m*u+g*l*p-i*v*p-h*l*M+i*m*M)*z,t[8]=w*z,t[9]=(E*x*u-g*A*u-E*r*M+i*A*M+g*r*_-i*x*_)*z,t[10]=(h*A*u-E*d*u+E*r*p-i*A*p-h*r*_+i*d*_)*z,t[11]=(g*d*u-h*x*u-g*r*p+i*x*p+h*r*M-i*d*M)*z,t[12]=F*z,t[13]=(g*A*l-E*x*l+E*r*v-i*A*v-g*r*S+i*x*S)*z,t[14]=(E*d*l-h*A*l-E*r*m+i*A*m+h*r*S-i*d*S)*z,t[15]=(h*x*l-g*d*l+g*r*m-i*x*m-h*r*v+i*d*v)*z,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=t.x,d=t.y,m=t.z,p=u*h,g=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,h){return this.set(1,r,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,x=d+d,v=u*p,M=u*g,E=u*x,A=h*g,S=h*x,_=d*x,O=m*p,U=m*g,w=m*x,F=r.x,V=r.y,z=r.z;return l[0]=(1-(A+_))*F,l[1]=(M+w)*F,l[2]=(E-U)*F,l[3]=0,l[4]=(M-w)*V,l[5]=(1-(v+_))*V,l[6]=(S+O)*V,l[7]=0,l[8]=(E+U)*z,l[9]=(S-O)*z,l[10]=(1-(v+A))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=hs.set(l[0],l[1],l[2]).length();const h=hs.set(l[4],l[5],l[6]).length(),d=hs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],di.copy(this);const p=1/u,g=1/h,x=1/d;return di.elements[0]*=p,di.elements[1]*=p,di.elements[2]*=p,di.elements[4]*=g,di.elements[5]*=g,di.elements[6]*=g,di.elements[8]*=x,di.elements[9]*=x,di.elements[10]*=x,i.setFromRotationMatrix(di),r.x=u,r.y=h,r.z=d,this}makePerspective(t,i,r,l,u,h,d=na){const m=this.elements,p=2*u/(i-t),g=2*u/(r-l),x=(i+t)/(i-t),v=(r+l)/(r-l);let M,E;if(d===na)M=-(h+u)/(h-u),E=-2*h*u/(h-u);else if(d===Hu)M=-h/(h-u),E=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=g,m[9]=v,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,r,l,u,h,d=na){const m=this.elements,p=1/(i-t),g=1/(r-l),x=1/(h-u),v=(i+t)*p,M=(r+l)*g;let E,A;if(d===na)E=(h+u)*x,A=-2*x;else if(d===Hu)E=u*x,A=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-v,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=A,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const hs=new rt,di=new sn,iE=new rt(0,0,0),aE=new rt(1,1,1),Ia=new rt,du=new rt,Kn=new rt,G_=new sn,V_=new Yo;class oa{constructor(t=0,i=0,r=0,l=oa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],x=l[2],v=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(xe(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-xe(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return G_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(G_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return V_.setFromEuler(this),this.setFromQuaternion(V_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oa.DEFAULT_ORDER="XYZ";class i0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let rE=0;const k_=new rt,ds=new Yo,Ki=new sn,pu=new rt,Oo=new rt,sE=new rt,oE=new Yo,X_=new rt(1,0,0),W_=new rt(0,1,0),q_=new rt(0,0,1),Y_={type:"added"},lE={type:"removed"},ps={type:"childadded",child:null},mh={type:"childremoved",child:null};class Jn extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rE++}),this.uuid=qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jn.DEFAULT_UP.clone();const t=new rt,i=new oa,r=new Yo,l=new rt(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new sn},normalMatrix:{value:new se}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new i0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ds.setFromAxisAngle(t,i),this.quaternion.multiply(ds),this}rotateOnWorldAxis(t,i){return ds.setFromAxisAngle(t,i),this.quaternion.premultiply(ds),this}rotateX(t){return this.rotateOnAxis(X_,t)}rotateY(t){return this.rotateOnAxis(W_,t)}rotateZ(t){return this.rotateOnAxis(q_,t)}translateOnAxis(t,i){return k_.copy(t).applyQuaternion(this.quaternion),this.position.add(k_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(X_,t)}translateY(t){return this.translateOnAxis(W_,t)}translateZ(t){return this.translateOnAxis(q_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?pu.copy(t):pu.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Oo,pu,this.up):Ki.lookAt(pu,Oo,this.up),this.quaternion.setFromRotationMatrix(Ki),l&&(Ki.extractRotation(l.matrixWorld),ds.setFromRotationMatrix(Ki),this.quaternion.premultiply(ds.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Y_),ps.child=t,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(lE),mh.child=t,this.dispatchEvent(mh),mh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Y_),ps.child=t,this.dispatchEvent(ps),ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,t,sE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,oE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?{min:d.boundingBox.min.toArray(),max:d.boundingBox.max.toArray()}:void 0,boundingSphere:d.boundingSphere?{radius:d.boundingSphere.radius,center:d.boundingSphere.center.toArray()}:void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];u(t.shapes,x)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),x=h(t.shapes),v=h(t.skeletons),M=h(t.animations),E=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),v.length>0&&(r.skeletons=v),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Jn.DEFAULT_UP=new rt(0,1,0);Jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new rt,Qi=new rt,gh=new rt,Ji=new rt,ms=new rt,gs=new rt,j_=new rt,_h=new rt,vh=new rt,xh=new rt,Sh=new $e,yh=new $e,Mh=new $e;class mi{constructor(t=new rt,i=new rt,r=new rt){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),pi.subVectors(t,i),l.cross(pi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){pi.subVectors(l,i),Qi.subVectors(r,i),gh.subVectors(t,i);const h=pi.dot(pi),d=pi.dot(Qi),m=pi.dot(gh),p=Qi.dot(Qi),g=Qi.dot(gh),x=h*p-d*d;if(x===0)return u.set(0,0,0),null;const v=1/x,M=(p*m-d*g)*v,E=(h*g-d*m)*v;return u.set(1-M-E,E,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(t,i,r,l,u,h,d,m){return this.getBarycoord(t,i,r,l,Ji)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Ji.x),m.addScaledVector(h,Ji.y),m.addScaledVector(d,Ji.z),m)}static getInterpolatedAttribute(t,i,r,l,u,h){return Sh.setScalar(0),yh.setScalar(0),Mh.setScalar(0),Sh.fromBufferAttribute(t,i),yh.fromBufferAttribute(t,r),Mh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Sh,u.x),h.addScaledVector(yh,u.y),h.addScaledVector(Mh,u.z),h}static isFrontFacing(t,i,r,l){return pi.subVectors(r,i),Qi.subVectors(t,i),pi.cross(Qi).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pi.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),pi.cross(Qi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return mi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return mi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let h,d;ms.subVectors(l,r),gs.subVectors(u,r),_h.subVectors(t,r);const m=ms.dot(_h),p=gs.dot(_h);if(m<=0&&p<=0)return i.copy(r);vh.subVectors(t,l);const g=ms.dot(vh),x=gs.dot(vh);if(g>=0&&x<=g)return i.copy(l);const v=m*x-g*p;if(v<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(ms,h);xh.subVectors(t,u);const M=ms.dot(xh),E=gs.dot(xh);if(E>=0&&M<=E)return i.copy(u);const A=M*p-m*E;if(A<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(r).addScaledVector(gs,d);const S=g*E-M*x;if(S<=0&&x-g>=0&&M-E>=0)return j_.subVectors(u,l),d=(x-g)/(x-g+(M-E)),i.copy(l).addScaledVector(j_,d);const _=1/(S+A+v);return h=A*_,d=v*_,i.copy(r).addScaledVector(ms,h).addScaledVector(gs,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const a0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fa={h:0,s:0,l:0},mu={h:0,s:0,l:0};function Eh(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Pe{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=oi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=be.workingColorSpace){return this.r=t,this.g=i,this.b=r,be.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=be.workingColorSpace){if(t=XM(t,1),i=xe(i,0,1),r=xe(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=Eh(h,u,t+1/3),this.g=Eh(h,u,t),this.b=Eh(h,u,t-1/3)}return be.toWorkingColorSpace(this,l),this}setStyle(t,i=oi){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=oi){const r=a0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=aa(t.r),this.g=aa(t.g),this.b=aa(t.b),this}copyLinearToSRGB(t){return this.r=Ts(t.r),this.g=Ts(t.g),this.b=Ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=oi){return be.fromWorkingColorSpace(wn.copy(this),t),Math.round(xe(wn.r*255,0,255))*65536+Math.round(xe(wn.g*255,0,255))*256+Math.round(xe(wn.b*255,0,255))}getHexString(t=oi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=be.workingColorSpace){be.fromWorkingColorSpace(wn.copy(this),i);const r=wn.r,l=wn.g,u=wn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=g<=.5?x/(h+d):x/(2-h-d),h){case r:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-r)/x+2;break;case u:m=(r-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=be.workingColorSpace){return be.fromWorkingColorSpace(wn.copy(this),i),t.r=wn.r,t.g=wn.g,t.b=wn.b,t}getStyle(t=oi){be.fromWorkingColorSpace(wn.copy(this),t);const i=wn.r,r=wn.g,l=wn.b;return t!==oi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Fa),this.setHSL(Fa.h+t,Fa.s+i,Fa.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Fa),t.getHSL(mu);const r=sh(Fa.h,mu.h,i),l=sh(Fa.s,mu.s,i),u=sh(Fa.l,mu.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Pe;Pe.NAMES=a0;let uE=0;class Wu extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uE++}),this.uuid=qo(),this.name="",this.type="Material",this.blending=Es,this.side=Xa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bh,this.blendDst=zh,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=O_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(r.blending=this.blending),this.side!==Xa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Bh&&(r.blendSrc=this.blendSrc),this.blendDst!==zh&&(r.blendDst=this.blendDst),this.blendEquation!==Sr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==O_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(r.stencilFail=this.stencilFail),this.stencilZFail!==os&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Zo extends Wu{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oa,this.combine=Xv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const rn=new rt,gu=new Fe;let cE=0;class Ri{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=P_,this.updateRanges=[],this.gpuType=ea,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)gu.fromBufferAttribute(this,i),gu.applyMatrix3(t),this.setXY(i,gu.x,gu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix3(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix4(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyNormalMatrix(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.transformDirection(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Uo(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=In(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Uo(i,this.array)),i}setX(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Uo(i,this.array)),i}setY(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Uo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Uo(i,this.array)),i}setW(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array),l=In(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array),l=In(l,this.array),u=In(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==P_&&(t.usage=this.usage),t}}class r0 extends Ri{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class s0 extends Ri{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Tr extends Ri{constructor(t,i,r){super(new Float32Array(t),i,r)}}let fE=0;const si=new sn,Th=new Jn,_s=new rt,Qn=new jo,Po=new jo,vn=new rt;class wr extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(e0(t)?s0:r0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new se().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return si.makeRotationFromQuaternion(t),this.applyMatrix4(si),this}rotateX(t){return si.makeRotationX(t),this.applyMatrix4(si),this}rotateY(t){return si.makeRotationY(t),this.applyMatrix4(si),this}rotateZ(t){return si.makeRotationZ(t),this.applyMatrix4(si),this}translate(t,i,r){return si.makeTranslation(t,i,r),this.applyMatrix4(si),this}scale(t,i,r){return si.makeScale(t,i,r),this.applyMatrix4(si),this}lookAt(t){return Th.lookAt(t),Th.updateMatrix(),this.applyMatrix4(Th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Tr(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Qn.setFromBufferAttribute(u),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zd);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(t){const r=this.boundingSphere.center;if(Qn.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Po.setFromBufferAttribute(d),this.morphTargetsRelative?(vn.addVectors(Qn.min,Po.min),Qn.expandByPoint(vn),vn.addVectors(Qn.max,Po.max),Qn.expandByPoint(vn)):(Qn.expandByPoint(Po.min),Qn.expandByPoint(Po.max))}Qn.getCenter(r);let l=0;for(let u=0,h=t.count;u<h;u++)vn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(vn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)vn.fromBufferAttribute(d,p),m&&(_s.fromBufferAttribute(t,p),vn.add(_s)),l=Math.max(l,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let W=0;W<r.count;W++)d[W]=new rt,m[W]=new rt;const p=new rt,g=new rt,x=new rt,v=new Fe,M=new Fe,E=new Fe,A=new rt,S=new rt;function _(W,D,C){p.fromBufferAttribute(r,W),g.fromBufferAttribute(r,D),x.fromBufferAttribute(r,C),v.fromBufferAttribute(u,W),M.fromBufferAttribute(u,D),E.fromBufferAttribute(u,C),g.sub(p),x.sub(p),M.sub(v),E.sub(v);const G=1/(M.x*E.y-E.x*M.y);isFinite(G)&&(A.copy(g).multiplyScalar(E.y).addScaledVector(x,-M.y).multiplyScalar(G),S.copy(x).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(G),d[W].add(A),d[D].add(A),d[C].add(A),m[W].add(S),m[D].add(S),m[C].add(S))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let W=0,D=O.length;W<D;++W){const C=O[W],G=C.start,lt=C.count;for(let st=G,vt=G+lt;st<vt;st+=3)_(t.getX(st+0),t.getX(st+1),t.getX(st+2))}const U=new rt,w=new rt,F=new rt,V=new rt;function z(W){F.fromBufferAttribute(l,W),V.copy(F);const D=d[W];U.copy(D),U.sub(F.multiplyScalar(F.dot(D))).normalize(),w.crossVectors(V,D);const G=w.dot(m[W])<0?-1:1;h.setXYZW(W,U.x,U.y,U.z,G)}for(let W=0,D=O.length;W<D;++W){const C=O[W],G=C.start,lt=C.count;for(let st=G,vt=G+lt;st<vt;st+=3)z(t.getX(st+0)),z(t.getX(st+1)),z(t.getX(st+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ri(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,M=r.count;v<M;v++)r.setXYZ(v,0,0,0);const l=new rt,u=new rt,h=new rt,d=new rt,m=new rt,p=new rt,g=new rt,x=new rt;if(t)for(let v=0,M=t.count;v<M;v+=3){const E=t.getX(v+0),A=t.getX(v+1),S=t.getX(v+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,A),h.fromBufferAttribute(i,S),g.subVectors(h,u),x.subVectors(l,u),g.cross(x),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,S),d.add(g),m.add(g),p.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let v=0,M=i.count;v<M;v+=3)l.fromBufferAttribute(i,v+0),u.fromBufferAttribute(i,v+1),h.fromBufferAttribute(i,v+2),g.subVectors(h,u),x.subVectors(l,u),g.cross(x),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)vn.fromBufferAttribute(t,i),vn.normalize(),t.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,x=d.normalized,v=new p.constructor(m.length*g);let M=0,E=0;for(let A=0,S=m.length;A<S;A++){d.isInterleavedBufferAttribute?M=m[A]*d.data.stride+d.offset:M=m[A]*g;for(let _=0;_<g;_++)v[E++]=p[M++]}return new Ri(v,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new wr,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,x=p.length;g<x;g++){const v=p[g],M=t(v,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,v=p.length;x<v;x++){const M=p[x];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=t.morphAttributes;for(const p in u){const g=[],x=u[p];for(let v=0,M=x.length;v<M;v++)g.push(x[v].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Z_=new sn,pr=new nE,_u=new zd,K_=new rt,vu=new rt,xu=new rt,Su=new rt,bh=new rt,yu=new rt,Q_=new rt,Mu=new rt;class li extends Jn{constructor(t=new wr,i=new Zo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){yu.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],x=u[m];g!==0&&(bh.fromBufferAttribute(x,t),h?yu.addScaledVector(bh,g):yu.addScaledVector(bh.sub(i),g))}i.add(yu)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),_u.copy(r.boundingSphere),_u.applyMatrix4(u),pr.copy(t.ray).recast(t.near),!(_u.containsPoint(pr.origin)===!1&&(pr.intersectSphere(_u,K_)===null||pr.origin.distanceToSquared(K_)>(t.far-t.near)**2))&&(Z_.copy(u).invert(),pr.copy(t.ray).applyMatrix4(Z_),!(r.boundingBox!==null&&pr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,pr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,x=u.attributes.normal,v=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,A=v.length;E<A;E++){const S=v[E],_=h[S.materialIndex],O=Math.max(S.start,M.start),U=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let w=O,F=U;w<F;w+=3){const V=d.getX(w),z=d.getX(w+1),W=d.getX(w+2);l=Eu(this,_,t,r,p,g,x,V,z,W),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let S=E,_=A;S<_;S+=3){const O=d.getX(S),U=d.getX(S+1),w=d.getX(S+2);l=Eu(this,h,t,r,p,g,x,O,U,w),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,A=v.length;E<A;E++){const S=v[E],_=h[S.materialIndex],O=Math.max(S.start,M.start),U=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let w=O,F=U;w<F;w+=3){const V=w,z=w+1,W=w+2;l=Eu(this,_,t,r,p,g,x,V,z,W),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let S=E,_=A;S<_;S+=3){const O=S,U=S+1,w=S+2;l=Eu(this,h,t,r,p,g,x,O,U,w),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function hE(s,t,i,r,l,u,h,d){let m;if(t.side===Hn?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,t.side===Xa,d),m===null)return null;Mu.copy(d),Mu.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Mu);return p<i.near||p>i.far?null:{distance:p,point:Mu.clone(),object:s}}function Eu(s,t,i,r,l,u,h,d,m,p){s.getVertexPosition(d,vu),s.getVertexPosition(m,xu),s.getVertexPosition(p,Su);const g=hE(s,t,i,r,vu,xu,Su,Q_);if(g){const x=new rt;mi.getBarycoord(Q_,vu,xu,Su,x),l&&(g.uv=mi.getInterpolatedAttribute(l,d,m,p,x,new Fe)),u&&(g.uv1=mi.getInterpolatedAttribute(u,d,m,p,x,new Fe)),h&&(g.normal=mi.getInterpolatedAttribute(h,d,m,p,x,new rt),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:m,c:p,normal:new rt,materialIndex:0};mi.getNormal(vu,xu,Su,v.normal),g.face=v,g.barycoord=x}return g}class qa extends wr{constructor(t=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],x=[];let v=0,M=0;E("z","y","x",-1,-1,r,i,t,h,u,0),E("z","y","x",1,-1,r,i,-t,h,u,1),E("x","z","y",1,1,t,r,i,l,h,2),E("x","z","y",1,-1,t,r,-i,l,h,3),E("x","y","z",1,-1,t,i,r,l,u,4),E("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Tr(p,3)),this.setAttribute("normal",new Tr(g,3)),this.setAttribute("uv",new Tr(x,2));function E(A,S,_,O,U,w,F,V,z,W,D){const C=w/z,G=F/W,lt=w/2,st=F/2,vt=V/2,dt=z+1,B=W+1;let Z=0,Y=0;const Mt=new rt;for(let N=0;N<B;N++){const $=N*G-st;for(let xt=0;xt<dt;xt++){const yt=xt*C-lt;Mt[A]=yt*O,Mt[S]=$*U,Mt[_]=vt,p.push(Mt.x,Mt.y,Mt.z),Mt[A]=0,Mt[S]=0,Mt[_]=V>0?1:-1,g.push(Mt.x,Mt.y,Mt.z),x.push(xt/z),x.push(1-N/W),Z+=1}}for(let N=0;N<W;N++)for(let $=0;$<z;$++){const xt=v+$+dt*N,yt=v+$+dt*(N+1),Q=v+($+1)+dt*(N+1),pt=v+($+1)+dt*N;m.push(xt,yt,pt),m.push(yt,Q,pt),Y+=6}d.addGroup(M,Y,D),M+=Y,v+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qa(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ws(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Un(s){const t={};for(let i=0;i<s.length;i++){const r=ws(s[i]);for(const l in r)t[l]=r[l]}return t}function dE(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function o0(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}const pE={clone:ws,merge:Un};var mE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wa extends Wu{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mE,this.fragmentShader=gE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ws(t.uniforms),this.uniformsGroups=dE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class l0 extends Jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=na}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ha=new rt,J_=new Fe,$_=new Fe;class Fn extends l0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=yd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(rh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yd*2*Math.atan(Math.tan(rh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Ha.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z),Ha.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z)}getViewSize(t,i){return this.getViewBounds(t,J_,$_),i.subVectors($_,J_)}setViewOffset(t,i,r,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(rh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const vs=-90,xs=1;class _E extends Jn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Fn(vs,xs,t,i);l.layers=this.layers,this.add(l);const u=new Fn(vs,xs,t,i);u.layers=this.layers,this.add(u);const h=new Fn(vs,xs,t,i);h.layers=this.layers,this.add(h);const d=new Fn(vs,xs,t,i);d.layers=this.layers,this.add(d);const m=new Fn(vs,xs,t,i);m.layers=this.layers,this.add(m);const p=new Fn(vs,xs,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===na)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Hu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,x=t.getRenderTarget(),v=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=A,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(x,v,M),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class u0 extends Gn{constructor(t=[],i=As,r,l,u,h,d,m,p,g){super(t,i,r,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vE extends Ar{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new u0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ai}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new qa(5,5,5),u=new Wa({name:"CubemapFromEquirect",uniforms:ws(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Hn,blending:Va});u.uniforms.tEquirect.value=i;const h=new li(l,u),d=i.minFilter;return i.minFilter===Er&&(i.minFilter=Ai),new _E(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(u)}}class Tu extends Jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xE={type:"move"};class Ah{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const A of t.hand.values()){const S=i.getJointPose(A,r),_=this._getHandJoint(p,A);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],v=g.position.distanceTo(x.position),M=.02,E=.005;p.inputState.pinching&&v>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(xE)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Tu;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class Id extends Jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oa,this.environmentIntensity=1,this.environmentRotation=new oa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Rh=new rt,SE=new rt,yE=new se;class vr{constructor(t=new rt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Rh.subVectors(r,i).cross(SE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Rh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||yE.getNormalMatrix(t),l=this.coplanarPoint(Rh).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new zd,bu=new rt;class c0{constructor(t=new vr,i=new vr,r=new vr,l=new vr,u=new vr,h=new vr){this.planes=[t,i,r,l,u,h]}set(t,i,r,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=na){const r=this.planes,l=t.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],x=l[6],v=l[7],M=l[8],E=l[9],A=l[10],S=l[11],_=l[12],O=l[13],U=l[14],w=l[15];if(r[0].setComponents(m-u,v-p,S-M,w-_).normalize(),r[1].setComponents(m+u,v+p,S+M,w+_).normalize(),r[2].setComponents(m+h,v+g,S+E,w+O).normalize(),r[3].setComponents(m-h,v-g,S-E,w-O).normalize(),r[4].setComponents(m-d,v-x,S-A,w-U).normalize(),i===na)r[5].setComponents(m+d,v+x,S+A,w+U).normalize();else if(i===Hu)r[5].setComponents(d,x,A,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),mr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(t){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(t.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(bu.x=l.normal.x>0?t.max.x:t.min.x,bu.y=l.normal.y>0?t.max.y:t.min.y,bu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(bu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class f0 extends Gn{constructor(t,i,r=br,l,u,h,d=_i,m=_i,p,g=Ho){if(g!==Ho&&g!==Go)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,u,h,d,m,g,r,p),this.isDepthTexture=!0,this.image={width:t,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class qu extends wr{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,x=t/d,v=i/m,M=[],E=[],A=[],S=[];for(let _=0;_<g;_++){const O=_*v-h;for(let U=0;U<p;U++){const w=U*x-u;E.push(w,-O,0),A.push(0,0,1),S.push(U/d),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let O=0;O<d;O++){const U=O+p*_,w=O+p*(_+1),F=O+1+p*(_+1),V=O+1+p*_;M.push(U,w,V),M.push(w,F,V)}this.setIndex(M),this.setAttribute("position",new Tr(E,3)),this.setAttribute("normal",new Tr(A,3)),this.setAttribute("uv",new Tr(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qu(t.width,t.height,t.widthSegments,t.heightSegments)}}class ME extends Wu{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=NM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class EE extends Wu{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class TE extends l0{constructor(t=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class bE extends Fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function tv(s,t,i,r){const l=AE(r);switch(i){case Zv:return s*t;case Qv:return s*t/l.components*l.byteLength;case Nd:return s*t/l.components*l.byteLength;case Jv:return s*t*2/l.components*l.byteLength;case Od:return s*t*2/l.components*l.byteLength;case Kv:return s*t*3/l.components*l.byteLength;case gi:return s*t*4/l.components*l.byteLength;case Pd:return s*t*4/l.components*l.byteLength;case Uu:case Lu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Nu:case Ou:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Kh:case Jh:return Math.max(s,16)*Math.max(t,8)/4;case Zh:case Qh:return Math.max(s,8)*Math.max(t,8)/2;case $h:case td:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ed:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case nd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case id:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ad:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case rd:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case sd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case od:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ld:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ud:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case cd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case fd:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case hd:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case dd:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case pd:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case md:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Pu:case gd:case _d:return Math.ceil(s/4)*Math.ceil(t/4)*16;case $v:case vd:return Math.ceil(s/4)*Math.ceil(t/4)*8;case xd:case Sd:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function AE(s){switch(s){case sa:case qv:return{byteLength:1,components:1};case Io:case Yv:case Wo:return{byteLength:2,components:1};case Ud:case Ld:return{byteLength:2,components:4};case br:case Dd:case ea:return{byteLength:4,components:1};case jv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function h0(){let s=null,t=!1,i=null,r=null;function l(u,h){i(u,h),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function RE(s){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,x=p.byteLength,v=s.createBuffer();s.bindBuffer(m,v),s.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,m,p){const g=m.array,x=m.updateRanges;if(s.bindBuffer(p,d),x.length===0)s.bufferSubData(p,0,g);else{x.sort((M,E)=>M.start-E.start);let v=0;for(let M=1;M<x.length;M++){const E=x[v],A=x[M];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++v,x[v]=A)}x.length=v+1;for(let M=0,E=x.length;M<E;M++){const A=x[M];s.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(s.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var CE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wE=`#ifdef USE_ALPHAHASH
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
#endif`,DE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,NE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OE=`#ifdef USE_AOMAP
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
#endif`,PE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BE=`#ifdef USE_BATCHING
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
#endif`,zE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,IE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,HE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,GE=`#ifdef USE_IRIDESCENCE
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
#endif`,VE=`#ifdef USE_BUMPMAP
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
#endif`,kE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,XE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,WE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ZE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,KE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,QE=`#define PI 3.141592653589793
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
} // validated`,JE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$E=`vec3 transformedNormal = objectNormal;
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
#endif`,tT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aT="gl_FragColor = linearToOutputTexel( gl_FragColor );",rT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sT=`#ifdef USE_ENVMAP
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
#endif`,oT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lT=`#ifdef USE_ENVMAP
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
#endif`,uT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cT=`#ifdef USE_ENVMAP
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
#endif`,fT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mT=`#ifdef USE_GRADIENTMAP
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
}`,gT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_T=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xT=`uniform bool receiveShadow;
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
#endif`,ST=`#ifdef USE_ENVMAP
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
#endif`,yT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,MT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ET=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,TT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bT=`PhysicalMaterial material;
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
#endif`,AT=`struct PhysicalMaterial {
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
}`,RT=`
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
#endif`,CT=`#if defined( RE_IndirectDiffuse )
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
#endif`,wT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,DT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,UT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,OT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,PT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,BT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zT=`#if defined( USE_POINTS_UV )
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
#endif`,IT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,GT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kT=`#ifdef USE_MORPHTARGETS
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
#endif`,XT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,YT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,KT=`#ifdef USE_NORMALMAP
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
#endif`,QT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,JT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$T=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ib=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ab=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ob=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ub=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hb=`float getShadowMask() {
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
}`,db=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pb=`#ifdef USE_SKINNING
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
#endif`,mb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gb=`#ifdef USE_SKINNING
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
#endif`,_b=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yb=`#ifdef USE_TRANSMISSION
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
#endif`,Mb=`#ifdef USE_TRANSMISSION
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
#endif`,Eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ab=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cb=`uniform sampler2D t2D;
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
}`,wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Db=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nb=`#include <common>
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
}`,Ob=`#if DEPTH_PACKING == 3200
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
}`,Pb=`#define DISTANCE
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
}`,Bb=`#define DISTANCE
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
}`,zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ib=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fb=`uniform float scale;
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
}`,Hb=`uniform vec3 diffuse;
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
}`,Gb=`#include <common>
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
}`,Vb=`uniform vec3 diffuse;
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
}`,kb=`#define LAMBERT
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
}`,Xb=`#define LAMBERT
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
}`,Wb=`#define MATCAP
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
}`,qb=`#define MATCAP
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
}`,Yb=`#define NORMAL
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
}`,jb=`#define NORMAL
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
}`,Zb=`#define PHONG
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
}`,Kb=`#define PHONG
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
}`,Qb=`#define STANDARD
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
}`,Jb=`#define STANDARD
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
}`,$b=`#define TOON
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
}`,tA=`#define TOON
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
}`,eA=`uniform float size;
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
}`,nA=`uniform vec3 diffuse;
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
}`,iA=`#include <common>
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
}`,aA=`uniform vec3 color;
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
}`,rA=`uniform float rotation;
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
}`,sA=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:CE,alphahash_pars_fragment:wE,alphamap_fragment:DE,alphamap_pars_fragment:UE,alphatest_fragment:LE,alphatest_pars_fragment:NE,aomap_fragment:OE,aomap_pars_fragment:PE,batching_pars_vertex:BE,batching_vertex:zE,begin_vertex:IE,beginnormal_vertex:FE,bsdfs:HE,iridescence_fragment:GE,bumpmap_pars_fragment:VE,clipping_planes_fragment:kE,clipping_planes_pars_fragment:XE,clipping_planes_pars_vertex:WE,clipping_planes_vertex:qE,color_fragment:YE,color_pars_fragment:jE,color_pars_vertex:ZE,color_vertex:KE,common:QE,cube_uv_reflection_fragment:JE,defaultnormal_vertex:$E,displacementmap_pars_vertex:tT,displacementmap_vertex:eT,emissivemap_fragment:nT,emissivemap_pars_fragment:iT,colorspace_fragment:aT,colorspace_pars_fragment:rT,envmap_fragment:sT,envmap_common_pars_fragment:oT,envmap_pars_fragment:lT,envmap_pars_vertex:uT,envmap_physical_pars_fragment:ST,envmap_vertex:cT,fog_vertex:fT,fog_pars_vertex:hT,fog_fragment:dT,fog_pars_fragment:pT,gradientmap_pars_fragment:mT,lightmap_pars_fragment:gT,lights_lambert_fragment:_T,lights_lambert_pars_fragment:vT,lights_pars_begin:xT,lights_toon_fragment:yT,lights_toon_pars_fragment:MT,lights_phong_fragment:ET,lights_phong_pars_fragment:TT,lights_physical_fragment:bT,lights_physical_pars_fragment:AT,lights_fragment_begin:RT,lights_fragment_maps:CT,lights_fragment_end:wT,logdepthbuf_fragment:DT,logdepthbuf_pars_fragment:UT,logdepthbuf_pars_vertex:LT,logdepthbuf_vertex:NT,map_fragment:OT,map_pars_fragment:PT,map_particle_fragment:BT,map_particle_pars_fragment:zT,metalnessmap_fragment:IT,metalnessmap_pars_fragment:FT,morphinstance_vertex:HT,morphcolor_vertex:GT,morphnormal_vertex:VT,morphtarget_pars_vertex:kT,morphtarget_vertex:XT,normal_fragment_begin:WT,normal_fragment_maps:qT,normal_pars_fragment:YT,normal_pars_vertex:jT,normal_vertex:ZT,normalmap_pars_fragment:KT,clearcoat_normal_fragment_begin:QT,clearcoat_normal_fragment_maps:JT,clearcoat_pars_fragment:$T,iridescence_pars_fragment:tb,opaque_fragment:eb,packing:nb,premultiplied_alpha_fragment:ib,project_vertex:ab,dithering_fragment:rb,dithering_pars_fragment:sb,roughnessmap_fragment:ob,roughnessmap_pars_fragment:lb,shadowmap_pars_fragment:ub,shadowmap_pars_vertex:cb,shadowmap_vertex:fb,shadowmask_pars_fragment:hb,skinbase_vertex:db,skinning_pars_vertex:pb,skinning_vertex:mb,skinnormal_vertex:gb,specularmap_fragment:_b,specularmap_pars_fragment:vb,tonemapping_fragment:xb,tonemapping_pars_fragment:Sb,transmission_fragment:yb,transmission_pars_fragment:Mb,uv_pars_fragment:Eb,uv_pars_vertex:Tb,uv_vertex:bb,worldpos_vertex:Ab,background_vert:Rb,background_frag:Cb,backgroundCube_vert:wb,backgroundCube_frag:Db,cube_vert:Ub,cube_frag:Lb,depth_vert:Nb,depth_frag:Ob,distanceRGBA_vert:Pb,distanceRGBA_frag:Bb,equirect_vert:zb,equirect_frag:Ib,linedashed_vert:Fb,linedashed_frag:Hb,meshbasic_vert:Gb,meshbasic_frag:Vb,meshlambert_vert:kb,meshlambert_frag:Xb,meshmatcap_vert:Wb,meshmatcap_frag:qb,meshnormal_vert:Yb,meshnormal_frag:jb,meshphong_vert:Zb,meshphong_frag:Kb,meshphysical_vert:Qb,meshphysical_frag:Jb,meshtoon_vert:$b,meshtoon_frag:tA,points_vert:eA,points_frag:nA,shadow_vert:iA,shadow_frag:aA,sprite_vert:rA,sprite_frag:sA},Dt={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},bi={basic:{uniforms:Un([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:Un([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Pe(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:Un([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:Un([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:Un([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new Pe(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:Un([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:Un([Dt.points,Dt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:Un([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:Un([Dt.common,Dt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:Un([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:Un([Dt.sprite,Dt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:Un([Dt.common,Dt.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:Un([Dt.lights,Dt.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};bi.physical={uniforms:Un([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const Au={r:0,b:0,g:0},gr=new oa,oA=new sn;function lA(s,t,i,r,l,u,h){const d=new Pe(0);let m=u===!0?0:1,p,g,x=null,v=0,M=null;function E(U){let w=U.isScene===!0?U.background:null;return w&&w.isTexture&&(w=(U.backgroundBlurriness>0?i:t).get(w)),w}function A(U){let w=!1;const F=E(U);F===null?_(d,m):F&&F.isColor&&(_(F,1),w=!0);const V=s.xr.getEnvironmentBlendMode();V==="additive"?r.buffers.color.setClear(0,0,0,1,h):V==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(U,w){const F=E(w);F&&(F.isCubeTexture||F.mapping===Xu)?(g===void 0&&(g=new li(new qa(1,1,1),new Wa({name:"BackgroundCubeMaterial",uniforms:ws(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(V,z,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),gr.copy(w.backgroundRotation),gr.x*=-1,gr.y*=-1,gr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),g.material.uniforms.envMap.value=F,g.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(oA.makeRotationFromEuler(gr)),g.material.toneMapped=be.getTransfer(F.colorSpace)!==Oe,(x!==F||v!==F.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,x=F,v=F.version,M=s.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new li(new qu(2,2),new Wa({name:"BackgroundMaterial",uniforms:ws(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Xa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=be.getTransfer(F.colorSpace)!==Oe,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(x!==F||v!==F.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,x=F,v=F.version,M=s.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function _(U,w){U.getRGB(Au,o0(s)),r.buffers.color.setClear(Au.r,Au.g,Au.b,w,h)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,w=1){d.set(U),m=w,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,_(d,m)},render:A,addToRenderList:S,dispose:O}}function uA(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=v(null);let u=l,h=!1;function d(C,G,lt,st,vt){let dt=!1;const B=x(st,lt,G);u!==B&&(u=B,p(u.object)),dt=M(C,st,lt,vt),dt&&E(C,st,lt,vt),vt!==null&&t.update(vt,s.ELEMENT_ARRAY_BUFFER),(dt||h)&&(h=!1,w(C,G,lt,st),vt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(vt).buffer))}function m(){return s.createVertexArray()}function p(C){return s.bindVertexArray(C)}function g(C){return s.deleteVertexArray(C)}function x(C,G,lt){const st=lt.wireframe===!0;let vt=r[C.id];vt===void 0&&(vt={},r[C.id]=vt);let dt=vt[G.id];dt===void 0&&(dt={},vt[G.id]=dt);let B=dt[st];return B===void 0&&(B=v(m()),dt[st]=B),B}function v(C){const G=[],lt=[],st=[];for(let vt=0;vt<i;vt++)G[vt]=0,lt[vt]=0,st[vt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:lt,attributeDivisors:st,object:C,attributes:{},index:null}}function M(C,G,lt,st){const vt=u.attributes,dt=G.attributes;let B=0;const Z=lt.getAttributes();for(const Y in Z)if(Z[Y].location>=0){const N=vt[Y];let $=dt[Y];if($===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&($=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&($=C.instanceColor)),N===void 0||N.attribute!==$||$&&N.data!==$.data)return!0;B++}return u.attributesNum!==B||u.index!==st}function E(C,G,lt,st){const vt={},dt=G.attributes;let B=0;const Z=lt.getAttributes();for(const Y in Z)if(Z[Y].location>=0){let N=dt[Y];N===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(N=C.instanceColor));const $={};$.attribute=N,N&&N.data&&($.data=N.data),vt[Y]=$,B++}u.attributes=vt,u.attributesNum=B,u.index=st}function A(){const C=u.newAttributes;for(let G=0,lt=C.length;G<lt;G++)C[G]=0}function S(C){_(C,0)}function _(C,G){const lt=u.newAttributes,st=u.enabledAttributes,vt=u.attributeDivisors;lt[C]=1,st[C]===0&&(s.enableVertexAttribArray(C),st[C]=1),vt[C]!==G&&(s.vertexAttribDivisor(C,G),vt[C]=G)}function O(){const C=u.newAttributes,G=u.enabledAttributes;for(let lt=0,st=G.length;lt<st;lt++)G[lt]!==C[lt]&&(s.disableVertexAttribArray(lt),G[lt]=0)}function U(C,G,lt,st,vt,dt,B){B===!0?s.vertexAttribIPointer(C,G,lt,vt,dt):s.vertexAttribPointer(C,G,lt,st,vt,dt)}function w(C,G,lt,st){A();const vt=st.attributes,dt=lt.getAttributes(),B=G.defaultAttributeValues;for(const Z in dt){const Y=dt[Z];if(Y.location>=0){let Mt=vt[Z];if(Mt===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(Mt=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(Mt=C.instanceColor)),Mt!==void 0){const N=Mt.normalized,$=Mt.itemSize,xt=t.get(Mt);if(xt===void 0)continue;const yt=xt.buffer,Q=xt.type,pt=xt.bytesPerElement,St=Q===s.INT||Q===s.UNSIGNED_INT||Mt.gpuType===Dd;if(Mt.isInterleavedBufferAttribute){const At=Mt.data,Ut=At.stride,oe=Mt.offset;if(At.isInstancedInterleavedBuffer){for(let Kt=0;Kt<Y.locationSize;Kt++)_(Y.location+Kt,At.meshPerAttribute);C.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let Kt=0;Kt<Y.locationSize;Kt++)S(Y.location+Kt);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let Kt=0;Kt<Y.locationSize;Kt++)U(Y.location+Kt,$/Y.locationSize,Q,N,Ut*pt,(oe+$/Y.locationSize*Kt)*pt,St)}else{if(Mt.isInstancedBufferAttribute){for(let At=0;At<Y.locationSize;At++)_(Y.location+At,Mt.meshPerAttribute);C.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let At=0;At<Y.locationSize;At++)S(Y.location+At);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let At=0;At<Y.locationSize;At++)U(Y.location+At,$/Y.locationSize,Q,N,$*pt,$/Y.locationSize*At*pt,St)}}else if(B!==void 0){const N=B[Z];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv(Y.location,N);break;case 3:s.vertexAttrib3fv(Y.location,N);break;case 4:s.vertexAttrib4fv(Y.location,N);break;default:s.vertexAttrib1fv(Y.location,N)}}}}O()}function F(){W();for(const C in r){const G=r[C];for(const lt in G){const st=G[lt];for(const vt in st)g(st[vt].object),delete st[vt];delete G[lt]}delete r[C]}}function V(C){if(r[C.id]===void 0)return;const G=r[C.id];for(const lt in G){const st=G[lt];for(const vt in st)g(st[vt].object),delete st[vt];delete G[lt]}delete r[C.id]}function z(C){for(const G in r){const lt=r[G];if(lt[C.id]===void 0)continue;const st=lt[C.id];for(const vt in st)g(st[vt].object),delete st[vt];delete lt[C.id]}}function W(){D(),h=!0,u!==l&&(u=l,p(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:D,dispose:F,releaseStatesOfGeometry:V,releaseStatesOfProgram:z,initAttributes:A,enableAttribute:S,disableUnusedAttributes:O}}function cA(s,t,i){let r;function l(p){r=p}function u(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,x){x!==0&&(s.drawArraysInstanced(r,p,g,x),i.update(g,r,x))}function d(p,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,x);let M=0;for(let E=0;E<x;E++)M+=g[E];i.update(M,r,1)}function m(p,g,x,v){if(x===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)h(p[E],g[E],v[E]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,g,0,v,0,x);let E=0;for(let A=0;A<x;A++)E+=g[A]*v[A];i.update(E,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function fA(s,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==gi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const W=z===Wo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==sa&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ea&&!W)}function m(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=i.logarithmicDepthBuffer===!0,v=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),O=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=E>0,V=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reverseDepthBuffer:v,maxTextures:M,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:O,maxVaryings:U,maxFragmentUniforms:w,vertexTextures:F,maxSamples:V}}function hA(s){const t=this;let i=null,r=0,l=!1,u=!1;const h=new vr,d=new se,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const M=x.length!==0||v||r!==0||l;return l=v,r=x.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,v){i=g(x,v,0)},this.setState=function(x,v,M){const E=x.clippingPlanes,A=x.clipIntersection,S=x.clipShadows,_=s.get(x);if(!l||E===null||E.length===0||u&&!S)u?g(null):p();else{const O=u?0:r,U=O*4;let w=_.clippingState||null;m.value=w,w=g(E,v,U,M);for(let F=0;F!==U;++F)w[F]=i[F];_.clippingState=w,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(x,v,M,E){const A=x!==null?x.length:0;let S=null;if(A!==0){if(S=m.value,E!==!0||S===null){const _=M+A*4,O=v.matrixWorldInverse;d.getNormalMatrix(O),(S===null||S.length<_)&&(S=new Float32Array(_));for(let U=0,w=M;U!==A;++U,w+=4)h.copy(x[U]).applyMatrix4(O,d),h.normal.toArray(S,w),S[w+3]=h.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,S}}function dA(s){let t=new WeakMap;function i(h,d){return d===Wh?h.mapping=As:d===qh&&(h.mapping=Rs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Wh||d===qh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new vE(m.height);return p.fromEquirectangularTexture(s,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const Ms=4,ev=[.125,.215,.35,.446,.526,.582],yr=20,Ch=new TE,nv=new Pe;let wh=null,Dh=0,Uh=0,Lh=!1;const xr=(1+Math.sqrt(5))/2,Ss=1/xr,iv=[new rt(-xr,Ss,0),new rt(xr,Ss,0),new rt(-Ss,0,xr),new rt(Ss,0,xr),new rt(0,xr,-Ss),new rt(0,xr,Ss),new rt(-1,1,-1),new rt(1,1,-1),new rt(-1,1,1),new rt(1,1,1)],pA=new rt;class av{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=pA}=u;wh=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ov(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wh,Dh,Uh),this._renderer.xr.enabled=Lh,t.scissorTest=!1,Ru(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===As||t.mapping===Rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wh=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ai,minFilter:Ai,generateMipmaps:!1,type:Wo,format:gi,colorSpace:Cs,depthBuffer:!1},l=rv(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rv(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mA(u)),this._blurMaterial=gA(u,t,i)}return l}_compileMaterial(t){const i=new li(this._lodPlanes[0],t);this._renderer.compile(i,Ch)}_sceneToCubeUV(t,i,r,l,u){const m=new Fn(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,v=x.autoClear,M=x.toneMapping;x.getClearColor(nv),x.toneMapping=ka,x.autoClear=!1;const E=new Zo({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),A=new li(new qa,E);let S=!1;const _=t.background;_?_.isColor&&(E.color.copy(_),t.background=null,S=!0):(E.color.copy(nv),S=!0);for(let O=0;O<6;O++){const U=O%3;U===0?(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[O],u.y,u.z)):U===1?(m.up.set(0,0,p[O]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[O],u.z)):(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[O]));const w=this._cubeSize;Ru(l,U*w,O>2?w:0,w,w),x.setRenderTarget(l),S&&x.render(A,m),x.render(t,m)}A.geometry.dispose(),A.material.dispose(),x.toneMapping=M,x.autoClear=v,t.background=_}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===As||t.mapping===Rs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=ov()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sv());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new li(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;Ru(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Ch)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=iv[(l-u-1)%iv.length];this._blur(t,u-1,u,h,d)}i.autoClear=r}_blur(t,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",u),this._halfBlur(h,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new li(this._lodPlanes[l],p),v=p.uniforms,M=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*yr-1),A=u/E,S=isFinite(u)?1+Math.floor(g*A):yr;S>yr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${yr}`);const _=[];let O=0;for(let z=0;z<yr;++z){const W=z/A,D=Math.exp(-W*W/2);_.push(D),z===0?O+=D:z<S&&(O+=2*D)}for(let z=0;z<_.length;z++)_[z]=_[z]/O;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=_,v.latitudinal.value=h==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:U}=this;v.dTheta.value=E,v.mipInt.value=U-r;const w=this._sizeLods[l],F=3*w*(l>U-Ms?l-U+Ms:0),V=4*(this._cubeSize-w);Ru(i,F,V,3*w,2*w),m.setRenderTarget(i),m.render(x,Ch)}}function mA(s){const t=[],i=[],r=[];let l=s;const u=s-Ms+1+ev.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>s-Ms?m=ev[h-s+Ms-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,x=1+p,v=[g,g,x,g,x,x,g,g,x,x,g,x],M=6,E=6,A=3,S=2,_=1,O=new Float32Array(A*E*M),U=new Float32Array(S*E*M),w=new Float32Array(_*E*M);for(let V=0;V<M;V++){const z=V%3*2/3-1,W=V>2?0:-1,D=[z,W,0,z+2/3,W,0,z+2/3,W+1,0,z,W,0,z+2/3,W+1,0,z,W+1,0];O.set(D,A*E*V),U.set(v,S*E*V);const C=[V,V,V,V,V,V];w.set(C,_*E*V)}const F=new wr;F.setAttribute("position",new Ri(O,A)),F.setAttribute("uv",new Ri(U,S)),F.setAttribute("faceIndex",new Ri(w,_)),t.push(F),l>Ms&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function rv(s,t,i){const r=new Ar(s,t,i);return r.texture.mapping=Xu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ru(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function gA(s,t,i){const r=new Float32Array(yr),l=new rt(0,1,0);return new Wa({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Fd(),fragmentShader:`

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
		`,blending:Va,depthTest:!1,depthWrite:!1})}function sv(){return new Wa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fd(),fragmentShader:`

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
		`,blending:Va,depthTest:!1,depthWrite:!1})}function ov(){return new Wa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function Fd(){return`

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
	`}function _A(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Wh||m===qh,g=m===As||m===Rs;if(p||g){let x=t.get(d);const v=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return i===null&&(i=new av(s)),x=p?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),x.texture;if(x!==void 0)return x.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new av(s)),x=p?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),d.addEventListener("dispose",u),x.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function vA(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Bu("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function xA(s,t,i,r){const l={},u=new WeakMap;function h(x){const v=x.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",h),delete l[v.id];const M=u.get(v);M&&(t.remove(M),u.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(x,v){return l[v.id]===!0||(v.addEventListener("dispose",h),l[v.id]=!0,i.memory.geometries++),v}function m(x){const v=x.attributes;for(const M in v)t.update(v[M],s.ARRAY_BUFFER)}function p(x){const v=[],M=x.index,E=x.attributes.position;let A=0;if(M!==null){const O=M.array;A=M.version;for(let U=0,w=O.length;U<w;U+=3){const F=O[U+0],V=O[U+1],z=O[U+2];v.push(F,V,V,z,z,F)}}else if(E!==void 0){const O=E.array;A=E.version;for(let U=0,w=O.length/3-1;U<w;U+=3){const F=U+0,V=U+1,z=U+2;v.push(F,V,V,z,z,F)}}else return;const S=new(e0(v)?s0:r0)(v,1);S.version=A;const _=u.get(x);_&&t.remove(_),u.set(x,S)}function g(x){const v=u.get(x);if(v){const M=x.index;M!==null&&v.version<M.version&&p(x)}else p(x);return u.get(x)}return{get:d,update:m,getWireframeAttribute:g}}function SA(s,t,i){let r;function l(v){r=v}let u,h;function d(v){u=v.type,h=v.bytesPerElement}function m(v,M){s.drawElements(r,M,u,v*h),i.update(M,r,1)}function p(v,M,E){E!==0&&(s.drawElementsInstanced(r,M,u,v*h,E),i.update(M,r,E))}function g(v,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,v,0,E);let S=0;for(let _=0;_<E;_++)S+=M[_];i.update(S,r,1)}function x(v,M,E,A){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<v.length;_++)p(v[_]/h,M[_],A[_]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,u,v,0,A,0,E);let _=0;for(let O=0;O<E;O++)_+=M[O]*A[O];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function yA(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=d*(u/3);break;case s.LINES:i.lines+=d*(u/2);break;case s.LINE_STRIP:i.lines+=d*(u-1);break;case s.LINE_LOOP:i.lines+=d*u;break;case s.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function MA(s,t,i){const r=new WeakMap,l=new $e;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=g!==void 0?g.length:0;let v=r.get(d);if(v===void 0||v.count!==x){let C=function(){W.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var M=C;v!==void 0&&v.texture.dispose();const E=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let w=0;E===!0&&(w=1),A===!0&&(w=2),S===!0&&(w=3);let F=d.attributes.position.count*w,V=1;F>t.maxTextureSize&&(V=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const z=new Float32Array(F*V*4*x),W=new n0(z,F,V,x);W.type=ea,W.needsUpdate=!0;const D=w*4;for(let G=0;G<x;G++){const lt=_[G],st=O[G],vt=U[G],dt=F*V*4*G;for(let B=0;B<lt.count;B++){const Z=B*D;E===!0&&(l.fromBufferAttribute(lt,B),z[dt+Z+0]=l.x,z[dt+Z+1]=l.y,z[dt+Z+2]=l.z,z[dt+Z+3]=0),A===!0&&(l.fromBufferAttribute(st,B),z[dt+Z+4]=l.x,z[dt+Z+5]=l.y,z[dt+Z+6]=l.z,z[dt+Z+7]=0),S===!0&&(l.fromBufferAttribute(vt,B),z[dt+Z+8]=l.x,z[dt+Z+9]=l.y,z[dt+Z+10]=l.z,z[dt+Z+11]=vt.itemSize===4?l.w:1)}}v={count:x,texture:W,size:new Fe(F,V)},r.set(d,v),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const A=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:u}}function EA(s,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,x=t.get(m,g);if(l.get(x)!==p&&(t.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return x}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const d0=new Gn,lv=new f0(1,1),p0=new n0,m0=new tE,g0=new u0,uv=[],cv=[],fv=new Float32Array(16),hv=new Float32Array(9),dv=new Float32Array(4);function Ns(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let u=uv[l];if(u===void 0&&(u=new Float32Array(l),uv[l]=u),t!==0){r.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,s[h].toArray(u,d)}return u}function fn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function hn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function Yu(s,t){let i=cv[t];i===void 0&&(i=new Int32Array(t),cv[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function TA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function bA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;s.uniform2fv(this.addr,t),hn(i,t)}}function AA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(fn(i,t))return;s.uniform3fv(this.addr,t),hn(i,t)}}function RA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;s.uniform4fv(this.addr,t),hn(i,t)}}function CA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,r))return;dv.set(r),s.uniformMatrix2fv(this.addr,!1,dv),hn(i,r)}}function wA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,r))return;hv.set(r),s.uniformMatrix3fv(this.addr,!1,hv),hn(i,r)}}function DA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,r))return;fv.set(r),s.uniformMatrix4fv(this.addr,!1,fv),hn(i,r)}}function UA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function LA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;s.uniform2iv(this.addr,t),hn(i,t)}}function NA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;s.uniform3iv(this.addr,t),hn(i,t)}}function OA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;s.uniform4iv(this.addr,t),hn(i,t)}}function PA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function BA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;s.uniform2uiv(this.addr,t),hn(i,t)}}function zA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;s.uniform3uiv(this.addr,t),hn(i,t)}}function IA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;s.uniform4uiv(this.addr,t),hn(i,t)}}function FA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(lv.compareFunction=t0,u=lv):u=d0,i.setTexture2D(t||u,l)}function HA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||m0,l)}function GA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||g0,l)}function VA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||p0,l)}function kA(s){switch(s){case 5126:return TA;case 35664:return bA;case 35665:return AA;case 35666:return RA;case 35674:return CA;case 35675:return wA;case 35676:return DA;case 5124:case 35670:return UA;case 35667:case 35671:return LA;case 35668:case 35672:return NA;case 35669:case 35673:return OA;case 5125:return PA;case 36294:return BA;case 36295:return zA;case 36296:return IA;case 35678:case 36198:case 36298:case 36306:case 35682:return FA;case 35679:case 36299:case 36307:return HA;case 35680:case 36300:case 36308:case 36293:return GA;case 36289:case 36303:case 36311:case 36292:return VA}}function XA(s,t){s.uniform1fv(this.addr,t)}function WA(s,t){const i=Ns(t,this.size,2);s.uniform2fv(this.addr,i)}function qA(s,t){const i=Ns(t,this.size,3);s.uniform3fv(this.addr,i)}function YA(s,t){const i=Ns(t,this.size,4);s.uniform4fv(this.addr,i)}function jA(s,t){const i=Ns(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function ZA(s,t){const i=Ns(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function KA(s,t){const i=Ns(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function QA(s,t){s.uniform1iv(this.addr,t)}function JA(s,t){s.uniform2iv(this.addr,t)}function $A(s,t){s.uniform3iv(this.addr,t)}function t1(s,t){s.uniform4iv(this.addr,t)}function e1(s,t){s.uniform1uiv(this.addr,t)}function n1(s,t){s.uniform2uiv(this.addr,t)}function i1(s,t){s.uniform3uiv(this.addr,t)}function a1(s,t){s.uniform4uiv(this.addr,t)}function r1(s,t,i){const r=this.cache,l=t.length,u=Yu(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||d0,u[h])}function s1(s,t,i){const r=this.cache,l=t.length,u=Yu(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||m0,u[h])}function o1(s,t,i){const r=this.cache,l=t.length,u=Yu(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||g0,u[h])}function l1(s,t,i){const r=this.cache,l=t.length,u=Yu(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||p0,u[h])}function u1(s){switch(s){case 5126:return XA;case 35664:return WA;case 35665:return qA;case 35666:return YA;case 35674:return jA;case 35675:return ZA;case 35676:return KA;case 5124:case 35670:return QA;case 35667:case 35671:return JA;case 35668:case 35672:return $A;case 35669:case 35673:return t1;case 5125:return e1;case 36294:return n1;case 36295:return i1;case 36296:return a1;case 35678:case 36198:case 36298:case 36306:case 35682:return r1;case 35679:case 36299:case 36307:return s1;case 35680:case 36300:case 36308:case 36293:return o1;case 36289:case 36303:case 36311:case 36292:return l1}}class c1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=kA(i.type)}}class f1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=u1(i.type)}}class h1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],r)}}}const Nh=/(\w+)(\])?(\[|\.)?/g;function pv(s,t){s.seq.push(t),s.map[t.id]=t}function d1(s,t,i){const r=s.name,l=r.length;for(Nh.lastIndex=0;;){const u=Nh.exec(r),h=Nh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){pv(i,p===void 0?new c1(d,s,t):new f1(d,s,t));break}else{let x=i.map[d];x===void 0&&(x=new h1(d),pv(i,x)),i=x}}}class zu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);d1(u,h,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function mv(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const p1=37297;let m1=0;function g1(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const gv=new se;function _1(s){be._getMatrix(gv,be.workingColorSpace,s);const t=`mat3( ${gv.elements.map(i=>i.toFixed(4))} )`;switch(be.getTransfer(s)){case Fu:return[t,"LinearTransferOETF"];case Oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function _v(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+g1(s.getShaderSource(t),h)}else return l}function v1(s,t){const i=_1(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function x1(s,t){let i;switch(t){case bM:i="Linear";break;case AM:i="Reinhard";break;case RM:i="Cineon";break;case CM:i="ACESFilmic";break;case DM:i="AgX";break;case UM:i="Neutral";break;case wM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Cu=new rt;function S1(){be.getLuminanceCoefficients(Cu);const s=Cu.x.toFixed(4),t=Cu.y.toFixed(4),i=Cu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function y1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function M1(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function E1(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(t,l),h=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:s.getAttribLocation(t,h),locationSize:d}}return i}function Bo(s){return s!==""}function vv(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xv(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const T1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Md(s){return s.replace(T1,A1)}const b1=new Map;function A1(s,t){let i=le[t];if(i===void 0){const r=b1.get(t);if(r!==void 0)i=le[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Md(i)}const R1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sv(s){return s.replace(R1,C1)}function C1(s,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function yv(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function w1(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===kv?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===aM?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===$i&&(t="SHADOWMAP_TYPE_VSM"),t}function D1(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case As:case Rs:t="ENVMAP_TYPE_CUBE";break;case Xu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function U1(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Rs:t="ENVMAP_MODE_REFRACTION";break}return t}function L1(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Xv:t="ENVMAP_BLENDING_MULTIPLY";break;case EM:t="ENVMAP_BLENDING_MIX";break;case TM:t="ENVMAP_BLENDING_ADD";break}return t}function N1(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function O1(s,t,i,r){const l=s.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=w1(i),p=D1(i),g=U1(i),x=L1(i),v=N1(i),M=y1(i),E=M1(u),A=l.createProgram();let S,_,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Bo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Bo).join(`
`),_.length>0&&(_+=`
`)):(S=[yv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),_=[yv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ka?"#define TONE_MAPPING":"",i.toneMapping!==ka?le.tonemapping_pars_fragment:"",i.toneMapping!==ka?x1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,v1("linearToOutputTexel",i.outputColorSpace),S1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Bo).join(`
`)),h=Md(h),h=vv(h,i),h=xv(h,i),d=Md(d),d=vv(d,i),d=xv(d,i),h=Sv(h),d=Sv(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===B_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===B_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=O+S+h,w=O+_+d,F=mv(l,l.VERTEX_SHADER,U),V=mv(l,l.FRAGMENT_SHADER,w);l.attachShader(A,F),l.attachShader(A,V),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function z(G){if(s.debug.checkShaderErrors){const lt=l.getProgramInfoLog(A).trim(),st=l.getShaderInfoLog(F).trim(),vt=l.getShaderInfoLog(V).trim();let dt=!0,B=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(dt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,A,F,V);else{const Z=_v(l,F,"vertex"),Y=_v(l,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+lt+`
`+Z+`
`+Y)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(st===""||vt==="")&&(B=!1);B&&(G.diagnostics={runnable:dt,programLog:lt,vertexShader:{log:st,prefix:S},fragmentShader:{log:vt,prefix:_}})}l.deleteShader(F),l.deleteShader(V),W=new zu(l,A),D=E1(l,A)}let W;this.getUniforms=function(){return W===void 0&&z(this),W};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,p1)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=m1++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=F,this.fragmentShader=V,this}let P1=0;class B1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new z1(t),i.set(t,r)),r}}class z1{constructor(t){this.id=P1++,this.code=t,this.usedTimes=0}}function I1(s,t,i,r,l,u,h){const d=new i0,m=new B1,p=new Set,g=[],x=l.logarithmicDepthBuffer,v=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return p.add(D),D===0?"uv":`uv${D}`}function S(D,C,G,lt,st){const vt=lt.fog,dt=st.geometry,B=D.isMeshStandardMaterial?lt.environment:null,Z=(D.isMeshStandardMaterial?i:t).get(D.envMap||B),Y=Z&&Z.mapping===Xu?Z.image.height:null,Mt=E[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const N=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,$=N!==void 0?N.length:0;let xt=0;dt.morphAttributes.position!==void 0&&(xt=1),dt.morphAttributes.normal!==void 0&&(xt=2),dt.morphAttributes.color!==void 0&&(xt=3);let yt,Q,pt,St;if(Mt){const Me=bi[Mt];yt=Me.vertexShader,Q=Me.fragmentShader}else yt=D.vertexShader,Q=D.fragmentShader,m.update(D),pt=m.getVertexShaderID(D),St=m.getFragmentShaderID(D);const At=s.getRenderTarget(),Ut=s.state.buffers.depth.getReversed(),oe=st.isInstancedMesh===!0,Kt=st.isBatchedMesh===!0,He=!!D.map,Be=!!D.matcap,fe=!!Z,I=!!D.aoMap,Ln=!!D.lightMap,ge=!!D.bumpMap,ie=!!D.normalMap,Wt=!!D.displacementMap,we=!!D.emissiveMap,Vt=!!D.metalnessMap,L=!!D.roughnessMap,b=D.anisotropy>0,tt=D.clearcoat>0,mt=D.dispersion>0,Et=D.iridescence>0,ct=D.sheen>0,Ot=D.transmission>0,Rt=b&&!!D.anisotropyMap,Gt=tt&&!!D.clearcoatMap,$t=tt&&!!D.clearcoatNormalMap,bt=tt&&!!D.clearcoatRoughnessMap,Ft=Et&&!!D.iridescenceMap,jt=Et&&!!D.iridescenceThicknessMap,Qt=ct&&!!D.sheenColorMap,Pt=ct&&!!D.sheenRoughnessMap,ue=!!D.specularMap,ne=!!D.specularColorMap,De=!!D.specularIntensityMap,k=Ot&&!!D.transmissionMap,Lt=Ot&&!!D.thicknessMap,ot=!!D.gradientMap,gt=!!D.alphaMap,Bt=D.alphaTest>0,Nt=!!D.alphaHash,ae=!!D.extensions;let Ge=ka;D.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(Ge=s.toneMapping);const tn={shaderID:Mt,shaderType:D.type,shaderName:D.name,vertexShader:yt,fragmentShader:Q,defines:D.defines,customVertexShaderID:pt,customFragmentShaderID:St,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Kt,batchingColor:Kt&&st._colorsTexture!==null,instancing:oe,instancingColor:oe&&st.instanceColor!==null,instancingMorph:oe&&st.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:At===null?s.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Cs,alphaToCoverage:!!D.alphaToCoverage,map:He,matcap:Be,envMap:fe,envMapMode:fe&&Z.mapping,envMapCubeUVHeight:Y,aoMap:I,lightMap:Ln,bumpMap:ge,normalMap:ie,displacementMap:v&&Wt,emissiveMap:we,normalMapObjectSpace:ie&&D.normalMapType===BM,normalMapTangentSpace:ie&&D.normalMapType===PM,metalnessMap:Vt,roughnessMap:L,anisotropy:b,anisotropyMap:Rt,clearcoat:tt,clearcoatMap:Gt,clearcoatNormalMap:$t,clearcoatRoughnessMap:bt,dispersion:mt,iridescence:Et,iridescenceMap:Ft,iridescenceThicknessMap:jt,sheen:ct,sheenColorMap:Qt,sheenRoughnessMap:Pt,specularMap:ue,specularColorMap:ne,specularIntensityMap:De,transmission:Ot,transmissionMap:k,thicknessMap:Lt,gradientMap:ot,opaque:D.transparent===!1&&D.blending===Es&&D.alphaToCoverage===!1,alphaMap:gt,alphaTest:Bt,alphaHash:Nt,combine:D.combine,mapUv:He&&A(D.map.channel),aoMapUv:I&&A(D.aoMap.channel),lightMapUv:Ln&&A(D.lightMap.channel),bumpMapUv:ge&&A(D.bumpMap.channel),normalMapUv:ie&&A(D.normalMap.channel),displacementMapUv:Wt&&A(D.displacementMap.channel),emissiveMapUv:we&&A(D.emissiveMap.channel),metalnessMapUv:Vt&&A(D.metalnessMap.channel),roughnessMapUv:L&&A(D.roughnessMap.channel),anisotropyMapUv:Rt&&A(D.anisotropyMap.channel),clearcoatMapUv:Gt&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:$t&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:Qt&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&A(D.sheenRoughnessMap.channel),specularMapUv:ue&&A(D.specularMap.channel),specularColorMapUv:ne&&A(D.specularColorMap.channel),specularIntensityMapUv:De&&A(D.specularIntensityMap.channel),transmissionMapUv:k&&A(D.transmissionMap.channel),thicknessMapUv:Lt&&A(D.thicknessMap.channel),alphaMapUv:gt&&A(D.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(ie||b),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!dt.attributes.uv&&(He||gt),fog:!!vt,useFog:D.fog===!0,fogExp2:!!vt&&vt.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Ut,skinning:st.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:xt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ge,decodeVideoTexture:He&&D.map.isVideoTexture===!0&&be.getTransfer(D.map.colorSpace)===Oe,decodeVideoTextureEmissive:we&&D.emissiveMap.isVideoTexture===!0&&be.getTransfer(D.emissiveMap.colorSpace)===Oe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ta,flipSided:D.side===Hn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:ae&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&D.extensions.multiDraw===!0||Kt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return tn.vertexUv1s=p.has(1),tn.vertexUv2s=p.has(2),tn.vertexUv3s=p.has(3),p.clear(),tn}function _(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)C.push(G),C.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(O(C,D),U(C,D),C.push(s.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function O(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function U(D,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),D.push(d.mask)}function w(D){const C=E[D.type];let G;if(C){const lt=bi[C];G=pE.clone(lt.uniforms)}else G=D.uniforms;return G}function F(D,C){let G;for(let lt=0,st=g.length;lt<st;lt++){const vt=g[lt];if(vt.cacheKey===C){G=vt,++G.usedTimes;break}}return G===void 0&&(G=new O1(s,C,D,u),g.push(G)),G}function V(D){if(--D.usedTimes===0){const C=g.indexOf(D);g[C]=g[g.length-1],g.pop(),D.destroy()}}function z(D){m.remove(D)}function W(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:w,acquireProgram:F,releaseProgram:V,releaseShaderCache:z,programs:g,dispose:W}}function F1(){let s=new WeakMap;function t(h){return s.has(h)}function i(h){let d=s.get(h);return d===void 0&&(d={},s.set(h,d)),d}function r(h){s.delete(h)}function l(h,d,m){s.get(h)[d]=m}function u(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function H1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Mv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ev(){const s=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function h(x,v,M,E,A,S){let _=s[t];return _===void 0?(_={id:x.id,object:x,geometry:v,material:M,groupOrder:E,renderOrder:x.renderOrder,z:A,group:S},s[t]=_):(_.id=x.id,_.object=x,_.geometry=v,_.material=M,_.groupOrder=E,_.renderOrder=x.renderOrder,_.z=A,_.group=S),t++,_}function d(x,v,M,E,A,S){const _=h(x,v,M,E,A,S);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(x,v,M,E,A,S){const _=h(x,v,M,E,A,S);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(x,v){i.length>1&&i.sort(x||H1),r.length>1&&r.sort(v||Mv),l.length>1&&l.sort(v||Mv)}function g(){for(let x=t,v=s.length;x<v;x++){const M=s[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function G1(){let s=new WeakMap;function t(r,l){const u=s.get(r);let h;return u===void 0?(h=new Ev,s.set(r,[h])):l>=u.length?(h=new Ev,u.push(h)):h=u[l],h}function i(){s=new WeakMap}return{get:t,dispose:i}}function V1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new rt,color:new Pe};break;case"SpotLight":i={position:new rt,direction:new rt,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new rt,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new rt,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":i={color:new Pe,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return s[t.id]=i,i}}}function k1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let X1=0;function W1(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function q1(s){const t=new V1,i=k1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new rt);const l=new rt,u=new sn,h=new sn;function d(p){let g=0,x=0,v=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,E=0,A=0,S=0,_=0,O=0,U=0,w=0,F=0,V=0,z=0;p.sort(W1);for(let D=0,C=p.length;D<C;D++){const G=p[D],lt=G.color,st=G.intensity,vt=G.distance,dt=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=lt.r*st,x+=lt.g*st,v+=lt.b*st;else if(G.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(G.sh.coefficients[B],st);z++}else if(G.isDirectionalLight){const B=t.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Z=G.shadow,Y=i.get(G);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.directionalShadow[M]=Y,r.directionalShadowMap[M]=dt,r.directionalShadowMatrix[M]=G.shadow.matrix,O++}r.directional[M]=B,M++}else if(G.isSpotLight){const B=t.get(G);B.position.setFromMatrixPosition(G.matrixWorld),B.color.copy(lt).multiplyScalar(st),B.distance=vt,B.coneCos=Math.cos(G.angle),B.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),B.decay=G.decay,r.spot[A]=B;const Z=G.shadow;if(G.map&&(r.spotLightMap[F]=G.map,F++,Z.updateMatrices(G),G.castShadow&&V++),r.spotLightMatrix[A]=Z.matrix,G.castShadow){const Y=i.get(G);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.spotShadow[A]=Y,r.spotShadowMap[A]=dt,w++}A++}else if(G.isRectAreaLight){const B=t.get(G);B.color.copy(lt).multiplyScalar(st),B.halfWidth.set(G.width*.5,0,0),B.halfHeight.set(0,G.height*.5,0),r.rectArea[S]=B,S++}else if(G.isPointLight){const B=t.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),B.distance=G.distance,B.decay=G.decay,G.castShadow){const Z=G.shadow,Y=i.get(G);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,Y.shadowCameraNear=Z.camera.near,Y.shadowCameraFar=Z.camera.far,r.pointShadow[E]=Y,r.pointShadowMap[E]=dt,r.pointShadowMatrix[E]=G.shadow.matrix,U++}r.point[E]=B,E++}else if(G.isHemisphereLight){const B=t.get(G);B.skyColor.copy(G.color).multiplyScalar(st),B.groundColor.copy(G.groundColor).multiplyScalar(st),r.hemi[_]=B,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Dt.LTC_FLOAT_1,r.rectAreaLTC2=Dt.LTC_FLOAT_2):(r.rectAreaLTC1=Dt.LTC_HALF_1,r.rectAreaLTC2=Dt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=v;const W=r.hash;(W.directionalLength!==M||W.pointLength!==E||W.spotLength!==A||W.rectAreaLength!==S||W.hemiLength!==_||W.numDirectionalShadows!==O||W.numPointShadows!==U||W.numSpotShadows!==w||W.numSpotMaps!==F||W.numLightProbes!==z)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=S,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=w+F-V,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=V,r.numLightProbes=z,W.directionalLength=M,W.pointLength=E,W.spotLength=A,W.rectAreaLength=S,W.hemiLength=_,W.numDirectionalShadows=O,W.numPointShadows=U,W.numSpotShadows=w,W.numSpotMaps=F,W.numLightProbes=z,r.version=X1++)}function m(p,g){let x=0,v=0,M=0,E=0,A=0;const S=g.matrixWorldInverse;for(let _=0,O=p.length;_<O;_++){const U=p[_];if(U.isDirectionalLight){const w=r.directional[x];w.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(S),x++}else if(U.isSpotLight){const w=r.spot[M];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(S),M++}else if(U.isRectAreaLight){const w=r.rectArea[E];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(S),h.identity(),u.copy(U.matrixWorld),u.premultiply(S),h.extractRotation(u),w.halfWidth.set(U.width*.5,0,0),w.halfHeight.set(0,U.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),E++}else if(U.isPointLight){const w=r.point[v];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(S),v++}else if(U.isHemisphereLight){const w=r.hemi[A];w.direction.setFromMatrixPosition(U.matrixWorld),w.direction.transformDirection(S),A++}}}return{setup:d,setupView:m,state:r}}function Tv(s){const t=new q1(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function h(g){r.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function Y1(s){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new Tv(s),t.set(l,[d])):u>=h.length?(d=new Tv(s),h.push(d)):d=h[u],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const j1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z1=`uniform sampler2D shadow_pass;
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
}`;function K1(s,t,i){let r=new c0;const l=new Fe,u=new Fe,h=new $e,d=new ME({depthPacking:OM}),m=new EE,p={},g=i.maxTextureSize,x={[Xa]:Hn,[Hn]:Xa,[ta]:ta},v=new Wa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:j1,fragmentShader:Z1}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const E=new wr;E.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new li(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kv;let _=this.type;this.render=function(V,z,W){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||V.length===0)return;const D=s.getRenderTarget(),C=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),lt=s.state;lt.setBlending(Va),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const st=_!==$i&&this.type===$i,vt=_===$i&&this.type!==$i;for(let dt=0,B=V.length;dt<B;dt++){const Z=V[dt],Y=Z.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const Mt=Y.getFrameExtents();if(l.multiply(Mt),u.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/Mt.x),l.x=u.x*Mt.x,Y.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/Mt.y),l.y=u.y*Mt.y,Y.mapSize.y=u.y)),Y.map===null||st===!0||vt===!0){const $=this.type!==$i?{minFilter:_i,magFilter:_i}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ar(l.x,l.y,$),Y.map.texture.name=Z.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const N=Y.getViewportCount();for(let $=0;$<N;$++){const xt=Y.getViewport($);h.set(u.x*xt.x,u.y*xt.y,u.x*xt.z,u.y*xt.w),lt.viewport(h),Y.updateMatrices(Z,$),r=Y.getFrustum(),w(z,W,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===$i&&O(Y,W),Y.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(D,C,G)};function O(V,z){const W=t.update(A);v.defines.VSM_SAMPLES!==V.blurSamples&&(v.defines.VSM_SAMPLES=V.blurSamples,M.defines.VSM_SAMPLES=V.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new Ar(l.x,l.y)),v.uniforms.shadow_pass.value=V.map.texture,v.uniforms.resolution.value=V.mapSize,v.uniforms.radius.value=V.radius,s.setRenderTarget(V.mapPass),s.clear(),s.renderBufferDirect(z,null,W,v,A,null),M.uniforms.shadow_pass.value=V.mapPass.texture,M.uniforms.resolution.value=V.mapSize,M.uniforms.radius.value=V.radius,s.setRenderTarget(V.map),s.clear(),s.renderBufferDirect(z,null,W,M,A,null)}function U(V,z,W,D){let C=null;const G=W.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(G!==void 0)C=G;else if(C=W.isPointLight===!0?m:d,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const lt=C.uuid,st=z.uuid;let vt=p[lt];vt===void 0&&(vt={},p[lt]=vt);let dt=vt[st];dt===void 0&&(dt=C.clone(),vt[st]=dt,z.addEventListener("dispose",F)),C=dt}if(C.visible=z.visible,C.wireframe=z.wireframe,D===$i?C.side=z.shadowSide!==null?z.shadowSide:z.side:C.side=z.shadowSide!==null?z.shadowSide:x[z.side],C.alphaMap=z.alphaMap,C.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,C.map=z.map,C.clipShadows=z.clipShadows,C.clippingPlanes=z.clippingPlanes,C.clipIntersection=z.clipIntersection,C.displacementMap=z.displacementMap,C.displacementScale=z.displacementScale,C.displacementBias=z.displacementBias,C.wireframeLinewidth=z.wireframeLinewidth,C.linewidth=z.linewidth,W.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const lt=s.properties.get(C);lt.light=W}return C}function w(V,z,W,D,C){if(V.visible===!1)return;if(V.layers.test(z.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&C===$i)&&(!V.frustumCulled||r.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,V.matrixWorld);const st=t.update(V),vt=V.material;if(Array.isArray(vt)){const dt=st.groups;for(let B=0,Z=dt.length;B<Z;B++){const Y=dt[B],Mt=vt[Y.materialIndex];if(Mt&&Mt.visible){const N=U(V,Mt,D,C);V.onBeforeShadow(s,V,z,W,st,N,Y),s.renderBufferDirect(W,null,st,N,V,Y),V.onAfterShadow(s,V,z,W,st,N,Y)}}}else if(vt.visible){const dt=U(V,vt,D,C);V.onBeforeShadow(s,V,z,W,st,dt,null),s.renderBufferDirect(W,null,st,dt,V,null),V.onAfterShadow(s,V,z,W,st,dt,null)}}const lt=V.children;for(let st=0,vt=lt.length;st<vt;st++)w(lt[st],z,W,D,C)}function F(V){V.target.removeEventListener("dispose",F);for(const W in p){const D=p[W],C=V.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const Q1={[Ih]:Fh,[Hh]:kh,[Gh]:Xh,[bs]:Vh,[Fh]:Ih,[kh]:Hh,[Xh]:Gh,[Vh]:bs};function J1(s,t){function i(){let k=!1;const Lt=new $e;let ot=null;const gt=new $e(0,0,0,0);return{setMask:function(Bt){ot!==Bt&&!k&&(s.colorMask(Bt,Bt,Bt,Bt),ot=Bt)},setLocked:function(Bt){k=Bt},setClear:function(Bt,Nt,ae,Ge,tn){tn===!0&&(Bt*=Ge,Nt*=Ge,ae*=Ge),Lt.set(Bt,Nt,ae,Ge),gt.equals(Lt)===!1&&(s.clearColor(Bt,Nt,ae,Ge),gt.copy(Lt))},reset:function(){k=!1,ot=null,gt.set(-1,0,0,0)}}}function r(){let k=!1,Lt=!1,ot=null,gt=null,Bt=null;return{setReversed:function(Nt){if(Lt!==Nt){const ae=t.get("EXT_clip_control");Nt?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT),Lt=Nt;const Ge=Bt;Bt=null,this.setClear(Ge)}},getReversed:function(){return Lt},setTest:function(Nt){Nt?At(s.DEPTH_TEST):Ut(s.DEPTH_TEST)},setMask:function(Nt){ot!==Nt&&!k&&(s.depthMask(Nt),ot=Nt)},setFunc:function(Nt){if(Lt&&(Nt=Q1[Nt]),gt!==Nt){switch(Nt){case Ih:s.depthFunc(s.NEVER);break;case Fh:s.depthFunc(s.ALWAYS);break;case Hh:s.depthFunc(s.LESS);break;case bs:s.depthFunc(s.LEQUAL);break;case Gh:s.depthFunc(s.EQUAL);break;case Vh:s.depthFunc(s.GEQUAL);break;case kh:s.depthFunc(s.GREATER);break;case Xh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}gt=Nt}},setLocked:function(Nt){k=Nt},setClear:function(Nt){Bt!==Nt&&(Lt&&(Nt=1-Nt),s.clearDepth(Nt),Bt=Nt)},reset:function(){k=!1,ot=null,gt=null,Bt=null,Lt=!1}}}function l(){let k=!1,Lt=null,ot=null,gt=null,Bt=null,Nt=null,ae=null,Ge=null,tn=null;return{setTest:function(Me){k||(Me?At(s.STENCIL_TEST):Ut(s.STENCIL_TEST))},setMask:function(Me){Lt!==Me&&!k&&(s.stencilMask(Me),Lt=Me)},setFunc:function(Me,Vn,dn){(ot!==Me||gt!==Vn||Bt!==dn)&&(s.stencilFunc(Me,Vn,dn),ot=Me,gt=Vn,Bt=dn)},setOp:function(Me,Vn,dn){(Nt!==Me||ae!==Vn||Ge!==dn)&&(s.stencilOp(Me,Vn,dn),Nt=Me,ae=Vn,Ge=dn)},setLocked:function(Me){k=Me},setClear:function(Me){tn!==Me&&(s.clearStencil(Me),tn=Me)},reset:function(){k=!1,Lt=null,ot=null,gt=null,Bt=null,Nt=null,ae=null,Ge=null,tn=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},x={},v=new WeakMap,M=[],E=null,A=!1,S=null,_=null,O=null,U=null,w=null,F=null,V=null,z=new Pe(0,0,0),W=0,D=!1,C=null,G=null,lt=null,st=null,vt=null;const dt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Z=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),B=Z>=1):Y.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),B=Z>=2);let Mt=null,N={};const $=s.getParameter(s.SCISSOR_BOX),xt=s.getParameter(s.VIEWPORT),yt=new $e().fromArray($),Q=new $e().fromArray(xt);function pt(k,Lt,ot,gt){const Bt=new Uint8Array(4),Nt=s.createTexture();s.bindTexture(k,Nt),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ae=0;ae<ot;ae++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Lt,0,s.RGBA,1,1,gt,0,s.RGBA,s.UNSIGNED_BYTE,Bt):s.texImage2D(Lt+ae,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Bt);return Nt}const St={};St[s.TEXTURE_2D]=pt(s.TEXTURE_2D,s.TEXTURE_2D,1),St[s.TEXTURE_CUBE_MAP]=pt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[s.TEXTURE_2D_ARRAY]=pt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),St[s.TEXTURE_3D]=pt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),At(s.DEPTH_TEST),h.setFunc(bs),ge(!1),ie(D_),At(s.CULL_FACE),I(Va);function At(k){g[k]!==!0&&(s.enable(k),g[k]=!0)}function Ut(k){g[k]!==!1&&(s.disable(k),g[k]=!1)}function oe(k,Lt){return x[k]!==Lt?(s.bindFramebuffer(k,Lt),x[k]=Lt,k===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Lt),k===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Kt(k,Lt){let ot=M,gt=!1;if(k){ot=v.get(Lt),ot===void 0&&(ot=[],v.set(Lt,ot));const Bt=k.textures;if(ot.length!==Bt.length||ot[0]!==s.COLOR_ATTACHMENT0){for(let Nt=0,ae=Bt.length;Nt<ae;Nt++)ot[Nt]=s.COLOR_ATTACHMENT0+Nt;ot.length=Bt.length,gt=!0}}else ot[0]!==s.BACK&&(ot[0]=s.BACK,gt=!0);gt&&s.drawBuffers(ot)}function He(k){return E!==k?(s.useProgram(k),E=k,!0):!1}const Be={[Sr]:s.FUNC_ADD,[sM]:s.FUNC_SUBTRACT,[oM]:s.FUNC_REVERSE_SUBTRACT};Be[lM]=s.MIN,Be[uM]=s.MAX;const fe={[cM]:s.ZERO,[fM]:s.ONE,[hM]:s.SRC_COLOR,[Bh]:s.SRC_ALPHA,[vM]:s.SRC_ALPHA_SATURATE,[gM]:s.DST_COLOR,[pM]:s.DST_ALPHA,[dM]:s.ONE_MINUS_SRC_COLOR,[zh]:s.ONE_MINUS_SRC_ALPHA,[_M]:s.ONE_MINUS_DST_COLOR,[mM]:s.ONE_MINUS_DST_ALPHA,[xM]:s.CONSTANT_COLOR,[SM]:s.ONE_MINUS_CONSTANT_COLOR,[yM]:s.CONSTANT_ALPHA,[MM]:s.ONE_MINUS_CONSTANT_ALPHA};function I(k,Lt,ot,gt,Bt,Nt,ae,Ge,tn,Me){if(k===Va){A===!0&&(Ut(s.BLEND),A=!1);return}if(A===!1&&(At(s.BLEND),A=!0),k!==rM){if(k!==S||Me!==D){if((_!==Sr||w!==Sr)&&(s.blendEquation(s.FUNC_ADD),_=Sr,w=Sr),Me)switch(k){case Es:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case U_:s.blendFunc(s.ONE,s.ONE);break;case L_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case N_:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Es:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case U_:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case L_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case N_:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}O=null,U=null,F=null,V=null,z.set(0,0,0),W=0,S=k,D=Me}return}Bt=Bt||Lt,Nt=Nt||ot,ae=ae||gt,(Lt!==_||Bt!==w)&&(s.blendEquationSeparate(Be[Lt],Be[Bt]),_=Lt,w=Bt),(ot!==O||gt!==U||Nt!==F||ae!==V)&&(s.blendFuncSeparate(fe[ot],fe[gt],fe[Nt],fe[ae]),O=ot,U=gt,F=Nt,V=ae),(Ge.equals(z)===!1||tn!==W)&&(s.blendColor(Ge.r,Ge.g,Ge.b,tn),z.copy(Ge),W=tn),S=k,D=!1}function Ln(k,Lt){k.side===ta?Ut(s.CULL_FACE):At(s.CULL_FACE);let ot=k.side===Hn;Lt&&(ot=!ot),ge(ot),k.blending===Es&&k.transparent===!1?I(Va):I(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),u.setMask(k.colorWrite);const gt=k.stencilWrite;d.setTest(gt),gt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),we(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?At(s.SAMPLE_ALPHA_TO_COVERAGE):Ut(s.SAMPLE_ALPHA_TO_COVERAGE)}function ge(k){C!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),C=k)}function ie(k){k!==nM?(At(s.CULL_FACE),k!==G&&(k===D_?s.cullFace(s.BACK):k===iM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ut(s.CULL_FACE),G=k}function Wt(k){k!==lt&&(B&&s.lineWidth(k),lt=k)}function we(k,Lt,ot){k?(At(s.POLYGON_OFFSET_FILL),(st!==Lt||vt!==ot)&&(s.polygonOffset(Lt,ot),st=Lt,vt=ot)):Ut(s.POLYGON_OFFSET_FILL)}function Vt(k){k?At(s.SCISSOR_TEST):Ut(s.SCISSOR_TEST)}function L(k){k===void 0&&(k=s.TEXTURE0+dt-1),Mt!==k&&(s.activeTexture(k),Mt=k)}function b(k,Lt,ot){ot===void 0&&(Mt===null?ot=s.TEXTURE0+dt-1:ot=Mt);let gt=N[ot];gt===void 0&&(gt={type:void 0,texture:void 0},N[ot]=gt),(gt.type!==k||gt.texture!==Lt)&&(Mt!==ot&&(s.activeTexture(ot),Mt=ot),s.bindTexture(k,Lt||St[k]),gt.type=k,gt.texture=Lt)}function tt(){const k=N[Mt];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function mt(){try{s.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Et(){try{s.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ct(){try{s.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ot(){try{s.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Rt(){try{s.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Gt(){try{s.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $t(){try{s.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function bt(){try{s.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ft(){try{s.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function jt(){try{s.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Qt(k){yt.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),yt.copy(k))}function Pt(k){Q.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Q.copy(k))}function ue(k,Lt){let ot=p.get(Lt);ot===void 0&&(ot=new WeakMap,p.set(Lt,ot));let gt=ot.get(k);gt===void 0&&(gt=s.getUniformBlockIndex(Lt,k.name),ot.set(k,gt))}function ne(k,Lt){const gt=p.get(Lt).get(k);m.get(Lt)!==gt&&(s.uniformBlockBinding(Lt,gt,k.__bindingPointIndex),m.set(Lt,gt))}function De(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},Mt=null,N={},x={},v=new WeakMap,M=[],E=null,A=!1,S=null,_=null,O=null,U=null,w=null,F=null,V=null,z=new Pe(0,0,0),W=0,D=!1,C=null,G=null,lt=null,st=null,vt=null,yt.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:At,disable:Ut,bindFramebuffer:oe,drawBuffers:Kt,useProgram:He,setBlending:I,setMaterial:Ln,setFlipSided:ge,setCullFace:ie,setLineWidth:Wt,setPolygonOffset:we,setScissorTest:Vt,activeTexture:L,bindTexture:b,unbindTexture:tt,compressedTexImage2D:mt,compressedTexImage3D:Et,texImage2D:Ft,texImage3D:jt,updateUBOMapping:ue,uniformBlockBinding:ne,texStorage2D:$t,texStorage3D:bt,texSubImage2D:ct,texSubImage3D:Ot,compressedTexSubImage2D:Rt,compressedTexSubImage3D:Gt,scissor:Qt,viewport:Pt,reset:De}}function $1(s,t,i,r,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Fe,g=new WeakMap;let x;const v=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,b){return M?new OffscreenCanvas(L,b):Gu("canvas")}function A(L,b,tt){let mt=1;const Et=Vt(L);if((Et.width>tt||Et.height>tt)&&(mt=tt/Math.max(Et.width,Et.height)),mt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ct=Math.floor(mt*Et.width),Ot=Math.floor(mt*Et.height);x===void 0&&(x=E(ct,Ot));const Rt=b?E(ct,Ot):x;return Rt.width=ct,Rt.height=Ot,Rt.getContext("2d").drawImage(L,0,0,ct,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+ct+"x"+Ot+")."),Rt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),L;return L}function S(L){return L.generateMipmaps}function _(L){s.generateMipmap(L)}function O(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(L,b,tt,mt,Et=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ct=b;if(b===s.RED&&(tt===s.FLOAT&&(ct=s.R32F),tt===s.HALF_FLOAT&&(ct=s.R16F),tt===s.UNSIGNED_BYTE&&(ct=s.R8)),b===s.RED_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ct=s.R8UI),tt===s.UNSIGNED_SHORT&&(ct=s.R16UI),tt===s.UNSIGNED_INT&&(ct=s.R32UI),tt===s.BYTE&&(ct=s.R8I),tt===s.SHORT&&(ct=s.R16I),tt===s.INT&&(ct=s.R32I)),b===s.RG&&(tt===s.FLOAT&&(ct=s.RG32F),tt===s.HALF_FLOAT&&(ct=s.RG16F),tt===s.UNSIGNED_BYTE&&(ct=s.RG8)),b===s.RG_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ct=s.RG8UI),tt===s.UNSIGNED_SHORT&&(ct=s.RG16UI),tt===s.UNSIGNED_INT&&(ct=s.RG32UI),tt===s.BYTE&&(ct=s.RG8I),tt===s.SHORT&&(ct=s.RG16I),tt===s.INT&&(ct=s.RG32I)),b===s.RGB_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ct=s.RGB8UI),tt===s.UNSIGNED_SHORT&&(ct=s.RGB16UI),tt===s.UNSIGNED_INT&&(ct=s.RGB32UI),tt===s.BYTE&&(ct=s.RGB8I),tt===s.SHORT&&(ct=s.RGB16I),tt===s.INT&&(ct=s.RGB32I)),b===s.RGBA_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ct=s.RGBA8UI),tt===s.UNSIGNED_SHORT&&(ct=s.RGBA16UI),tt===s.UNSIGNED_INT&&(ct=s.RGBA32UI),tt===s.BYTE&&(ct=s.RGBA8I),tt===s.SHORT&&(ct=s.RGBA16I),tt===s.INT&&(ct=s.RGBA32I)),b===s.RGB&&tt===s.UNSIGNED_INT_5_9_9_9_REV&&(ct=s.RGB9_E5),b===s.RGBA){const Ot=Et?Fu:be.getTransfer(mt);tt===s.FLOAT&&(ct=s.RGBA32F),tt===s.HALF_FLOAT&&(ct=s.RGBA16F),tt===s.UNSIGNED_BYTE&&(ct=Ot===Oe?s.SRGB8_ALPHA8:s.RGBA8),tt===s.UNSIGNED_SHORT_4_4_4_4&&(ct=s.RGBA4),tt===s.UNSIGNED_SHORT_5_5_5_1&&(ct=s.RGB5_A1)}return(ct===s.R16F||ct===s.R32F||ct===s.RG16F||ct===s.RG32F||ct===s.RGBA16F||ct===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function w(L,b){let tt;return L?b===null||b===br||b===Fo?tt=s.DEPTH24_STENCIL8:b===ea?tt=s.DEPTH32F_STENCIL8:b===Io&&(tt=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===br||b===Fo?tt=s.DEPTH_COMPONENT24:b===ea?tt=s.DEPTH_COMPONENT32F:b===Io&&(tt=s.DEPTH_COMPONENT16),tt}function F(L,b){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==_i&&L.minFilter!==Ai?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function V(L){const b=L.target;b.removeEventListener("dispose",V),W(b),b.isVideoTexture&&g.delete(b)}function z(L){const b=L.target;b.removeEventListener("dispose",z),C(b)}function W(L){const b=r.get(L);if(b.__webglInit===void 0)return;const tt=L.source,mt=v.get(tt);if(mt){const Et=mt[b.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&D(L),Object.keys(mt).length===0&&v.delete(tt)}r.remove(L)}function D(L){const b=r.get(L);s.deleteTexture(b.__webglTexture);const tt=L.source,mt=v.get(tt);delete mt[b.__cacheKey],h.memory.textures--}function C(L){const b=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(b.__webglFramebuffer[mt]))for(let Et=0;Et<b.__webglFramebuffer[mt].length;Et++)s.deleteFramebuffer(b.__webglFramebuffer[mt][Et]);else s.deleteFramebuffer(b.__webglFramebuffer[mt]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[mt])}else{if(Array.isArray(b.__webglFramebuffer))for(let mt=0;mt<b.__webglFramebuffer.length;mt++)s.deleteFramebuffer(b.__webglFramebuffer[mt]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let mt=0;mt<b.__webglColorRenderbuffer.length;mt++)b.__webglColorRenderbuffer[mt]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[mt]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const tt=L.textures;for(let mt=0,Et=tt.length;mt<Et;mt++){const ct=r.get(tt[mt]);ct.__webglTexture&&(s.deleteTexture(ct.__webglTexture),h.memory.textures--),r.remove(tt[mt])}r.remove(L)}let G=0;function lt(){G=0}function st(){const L=G;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),G+=1,L}function vt(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function dt(L,b){const tt=r.get(L);if(L.isVideoTexture&&Wt(L),L.isRenderTargetTexture===!1&&L.version>0&&tt.__version!==L.version){const mt=L.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(tt,L,b);return}}i.bindTexture(s.TEXTURE_2D,tt.__webglTexture,s.TEXTURE0+b)}function B(L,b){const tt=r.get(L);if(L.version>0&&tt.__version!==L.version){Q(tt,L,b);return}i.bindTexture(s.TEXTURE_2D_ARRAY,tt.__webglTexture,s.TEXTURE0+b)}function Z(L,b){const tt=r.get(L);if(L.version>0&&tt.__version!==L.version){Q(tt,L,b);return}i.bindTexture(s.TEXTURE_3D,tt.__webglTexture,s.TEXTURE0+b)}function Y(L,b){const tt=r.get(L);if(L.version>0&&tt.__version!==L.version){pt(tt,L,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture,s.TEXTURE0+b)}const Mt={[Yh]:s.REPEAT,[Mr]:s.CLAMP_TO_EDGE,[jh]:s.MIRRORED_REPEAT},N={[_i]:s.NEAREST,[LM]:s.NEAREST_MIPMAP_NEAREST,[ou]:s.NEAREST_MIPMAP_LINEAR,[Ai]:s.LINEAR,[ah]:s.LINEAR_MIPMAP_NEAREST,[Er]:s.LINEAR_MIPMAP_LINEAR},$={[zM]:s.NEVER,[kM]:s.ALWAYS,[IM]:s.LESS,[t0]:s.LEQUAL,[FM]:s.EQUAL,[VM]:s.GEQUAL,[HM]:s.GREATER,[GM]:s.NOTEQUAL};function xt(L,b){if(b.type===ea&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ai||b.magFilter===ah||b.magFilter===ou||b.magFilter===Er||b.minFilter===Ai||b.minFilter===ah||b.minFilter===ou||b.minFilter===Er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,Mt[b.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,Mt[b.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,Mt[b.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,N[b.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,N[b.minFilter]),b.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,$[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===_i||b.minFilter!==ou&&b.minFilter!==Er||b.type===ea&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function yt(L,b){let tt=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",V));const mt=b.source;let Et=v.get(mt);Et===void 0&&(Et={},v.set(mt,Et));const ct=vt(b);if(ct!==L.__cacheKey){Et[ct]===void 0&&(Et[ct]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),Et[ct].usedTimes++;const Ot=Et[L.__cacheKey];Ot!==void 0&&(Et[L.__cacheKey].usedTimes--,Ot.usedTimes===0&&D(b)),L.__cacheKey=ct,L.__webglTexture=Et[ct].texture}return tt}function Q(L,b,tt){let mt=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(mt=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(mt=s.TEXTURE_3D);const Et=yt(L,b),ct=b.source;i.bindTexture(mt,L.__webglTexture,s.TEXTURE0+tt);const Ot=r.get(ct);if(ct.version!==Ot.__version||Et===!0){i.activeTexture(s.TEXTURE0+tt);const Rt=be.getPrimaries(be.workingColorSpace),Gt=b.colorSpace===Ga?null:be.getPrimaries(b.colorSpace),$t=b.colorSpace===Ga||Rt===Gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let bt=A(b.image,!1,l.maxTextureSize);bt=we(b,bt);const Ft=u.convert(b.format,b.colorSpace),jt=u.convert(b.type);let Qt=U(b.internalFormat,Ft,jt,b.colorSpace,b.isVideoTexture);xt(mt,b);let Pt;const ue=b.mipmaps,ne=b.isVideoTexture!==!0,De=Ot.__version===void 0||Et===!0,k=ct.dataReady,Lt=F(b,bt);if(b.isDepthTexture)Qt=w(b.format===Go,b.type),De&&(ne?i.texStorage2D(s.TEXTURE_2D,1,Qt,bt.width,bt.height):i.texImage2D(s.TEXTURE_2D,0,Qt,bt.width,bt.height,0,Ft,jt,null));else if(b.isDataTexture)if(ue.length>0){ne&&De&&i.texStorage2D(s.TEXTURE_2D,Lt,Qt,ue[0].width,ue[0].height);for(let ot=0,gt=ue.length;ot<gt;ot++)Pt=ue[ot],ne?k&&i.texSubImage2D(s.TEXTURE_2D,ot,0,0,Pt.width,Pt.height,Ft,jt,Pt.data):i.texImage2D(s.TEXTURE_2D,ot,Qt,Pt.width,Pt.height,0,Ft,jt,Pt.data);b.generateMipmaps=!1}else ne?(De&&i.texStorage2D(s.TEXTURE_2D,Lt,Qt,bt.width,bt.height),k&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,bt.width,bt.height,Ft,jt,bt.data)):i.texImage2D(s.TEXTURE_2D,0,Qt,bt.width,bt.height,0,Ft,jt,bt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ne&&De&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Lt,Qt,ue[0].width,ue[0].height,bt.depth);for(let ot=0,gt=ue.length;ot<gt;ot++)if(Pt=ue[ot],b.format!==gi)if(Ft!==null)if(ne){if(k)if(b.layerUpdates.size>0){const Bt=tv(Pt.width,Pt.height,b.format,b.type);for(const Nt of b.layerUpdates){const ae=Pt.data.subarray(Nt*Bt/Pt.data.BYTES_PER_ELEMENT,(Nt+1)*Bt/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,Nt,Pt.width,Pt.height,1,Ft,ae)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,0,Pt.width,Pt.height,bt.depth,Ft,Pt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ot,Qt,Pt.width,Pt.height,bt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?k&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,0,Pt.width,Pt.height,bt.depth,Ft,jt,Pt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,ot,Qt,Pt.width,Pt.height,bt.depth,0,Ft,jt,Pt.data)}else{ne&&De&&i.texStorage2D(s.TEXTURE_2D,Lt,Qt,ue[0].width,ue[0].height);for(let ot=0,gt=ue.length;ot<gt;ot++)Pt=ue[ot],b.format!==gi?Ft!==null?ne?k&&i.compressedTexSubImage2D(s.TEXTURE_2D,ot,0,0,Pt.width,Pt.height,Ft,Pt.data):i.compressedTexImage2D(s.TEXTURE_2D,ot,Qt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?k&&i.texSubImage2D(s.TEXTURE_2D,ot,0,0,Pt.width,Pt.height,Ft,jt,Pt.data):i.texImage2D(s.TEXTURE_2D,ot,Qt,Pt.width,Pt.height,0,Ft,jt,Pt.data)}else if(b.isDataArrayTexture)if(ne){if(De&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Lt,Qt,bt.width,bt.height,bt.depth),k)if(b.layerUpdates.size>0){const ot=tv(bt.width,bt.height,b.format,b.type);for(const gt of b.layerUpdates){const Bt=bt.data.subarray(gt*ot/bt.data.BYTES_PER_ELEMENT,(gt+1)*ot/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,gt,bt.width,bt.height,1,Ft,jt,Bt)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Ft,jt,bt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Qt,bt.width,bt.height,bt.depth,0,Ft,jt,bt.data);else if(b.isData3DTexture)ne?(De&&i.texStorage3D(s.TEXTURE_3D,Lt,Qt,bt.width,bt.height,bt.depth),k&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Ft,jt,bt.data)):i.texImage3D(s.TEXTURE_3D,0,Qt,bt.width,bt.height,bt.depth,0,Ft,jt,bt.data);else if(b.isFramebufferTexture){if(De)if(ne)i.texStorage2D(s.TEXTURE_2D,Lt,Qt,bt.width,bt.height);else{let ot=bt.width,gt=bt.height;for(let Bt=0;Bt<Lt;Bt++)i.texImage2D(s.TEXTURE_2D,Bt,Qt,ot,gt,0,Ft,jt,null),ot>>=1,gt>>=1}}else if(ue.length>0){if(ne&&De){const ot=Vt(ue[0]);i.texStorage2D(s.TEXTURE_2D,Lt,Qt,ot.width,ot.height)}for(let ot=0,gt=ue.length;ot<gt;ot++)Pt=ue[ot],ne?k&&i.texSubImage2D(s.TEXTURE_2D,ot,0,0,Ft,jt,Pt):i.texImage2D(s.TEXTURE_2D,ot,Qt,Ft,jt,Pt);b.generateMipmaps=!1}else if(ne){if(De){const ot=Vt(bt);i.texStorage2D(s.TEXTURE_2D,Lt,Qt,ot.width,ot.height)}k&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ft,jt,bt)}else i.texImage2D(s.TEXTURE_2D,0,Qt,Ft,jt,bt);S(b)&&_(mt),Ot.__version=ct.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function pt(L,b,tt){if(b.image.length!==6)return;const mt=yt(L,b),Et=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+tt);const ct=r.get(Et);if(Et.version!==ct.__version||mt===!0){i.activeTexture(s.TEXTURE0+tt);const Ot=be.getPrimaries(be.workingColorSpace),Rt=b.colorSpace===Ga?null:be.getPrimaries(b.colorSpace),Gt=b.colorSpace===Ga||Ot===Rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);const $t=b.isCompressedTexture||b.image[0].isCompressedTexture,bt=b.image[0]&&b.image[0].isDataTexture,Ft=[];for(let gt=0;gt<6;gt++)!$t&&!bt?Ft[gt]=A(b.image[gt],!0,l.maxCubemapSize):Ft[gt]=bt?b.image[gt].image:b.image[gt],Ft[gt]=we(b,Ft[gt]);const jt=Ft[0],Qt=u.convert(b.format,b.colorSpace),Pt=u.convert(b.type),ue=U(b.internalFormat,Qt,Pt,b.colorSpace),ne=b.isVideoTexture!==!0,De=ct.__version===void 0||mt===!0,k=Et.dataReady;let Lt=F(b,jt);xt(s.TEXTURE_CUBE_MAP,b);let ot;if($t){ne&&De&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Lt,ue,jt.width,jt.height);for(let gt=0;gt<6;gt++){ot=Ft[gt].mipmaps;for(let Bt=0;Bt<ot.length;Bt++){const Nt=ot[Bt];b.format!==gi?Qt!==null?ne?k&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt,0,0,Nt.width,Nt.height,Qt,Nt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt,ue,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt,0,0,Nt.width,Nt.height,Qt,Pt,Nt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt,ue,Nt.width,Nt.height,0,Qt,Pt,Nt.data)}}}else{if(ot=b.mipmaps,ne&&De){ot.length>0&&Lt++;const gt=Vt(Ft[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Lt,ue,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(bt){ne?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Ft[gt].width,Ft[gt].height,Qt,Pt,Ft[gt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ue,Ft[gt].width,Ft[gt].height,0,Qt,Pt,Ft[gt].data);for(let Bt=0;Bt<ot.length;Bt++){const ae=ot[Bt].image[gt].image;ne?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt+1,0,0,ae.width,ae.height,Qt,Pt,ae.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt+1,ue,ae.width,ae.height,0,Qt,Pt,ae.data)}}else{ne?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Qt,Pt,Ft[gt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ue,Qt,Pt,Ft[gt]);for(let Bt=0;Bt<ot.length;Bt++){const Nt=ot[Bt];ne?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt+1,0,0,Qt,Pt,Nt.image[gt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt+1,ue,Qt,Pt,Nt.image[gt])}}}S(b)&&_(s.TEXTURE_CUBE_MAP),ct.__version=Et.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function St(L,b,tt,mt,Et,ct){const Ot=u.convert(tt.format,tt.colorSpace),Rt=u.convert(tt.type),Gt=U(tt.internalFormat,Ot,Rt,tt.colorSpace),$t=r.get(b),bt=r.get(tt);if(bt.__renderTarget=b,!$t.__hasExternalTextures){const Ft=Math.max(1,b.width>>ct),jt=Math.max(1,b.height>>ct);Et===s.TEXTURE_3D||Et===s.TEXTURE_2D_ARRAY?i.texImage3D(Et,ct,Gt,Ft,jt,b.depth,0,Ot,Rt,null):i.texImage2D(Et,ct,Gt,Ft,jt,0,Ot,Rt,null)}i.bindFramebuffer(s.FRAMEBUFFER,L),ie(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,mt,Et,bt.__webglTexture,0,ge(b)):(Et===s.TEXTURE_2D||Et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,mt,Et,bt.__webglTexture,ct),i.bindFramebuffer(s.FRAMEBUFFER,null)}function At(L,b,tt){if(s.bindRenderbuffer(s.RENDERBUFFER,L),b.depthBuffer){const mt=b.depthTexture,Et=mt&&mt.isDepthTexture?mt.type:null,ct=w(b.stencilBuffer,Et),Ot=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Rt=ge(b);ie(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Rt,ct,b.width,b.height):tt?s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt,ct,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ct,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ot,s.RENDERBUFFER,L)}else{const mt=b.textures;for(let Et=0;Et<mt.length;Et++){const ct=mt[Et],Ot=u.convert(ct.format,ct.colorSpace),Rt=u.convert(ct.type),Gt=U(ct.internalFormat,Ot,Rt,ct.colorSpace),$t=ge(b);tt&&ie(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t,Gt,b.width,b.height):ie(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t,Gt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Gt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ut(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const mt=r.get(b.depthTexture);mt.__renderTarget=b,(!mt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),dt(b.depthTexture,0);const Et=mt.__webglTexture,ct=ge(b);if(b.depthTexture.format===Ho)ie(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Et,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Et,0);else if(b.depthTexture.format===Go)ie(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Et,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Et,0);else throw new Error("Unknown depthTexture format")}function oe(L){const b=r.get(L),tt=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const mt=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),mt){const Et=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,mt.removeEventListener("dispose",Et)};mt.addEventListener("dispose",Et),b.__depthDisposeCallback=Et}b.__boundDepthTexture=mt}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const mt=L.texture.mipmaps;mt&&mt.length>0?Ut(b.__webglFramebuffer[0],L):Ut(b.__webglFramebuffer,L)}else if(tt){b.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[mt]),b.__webglDepthbuffer[mt]===void 0)b.__webglDepthbuffer[mt]=s.createRenderbuffer(),At(b.__webglDepthbuffer[mt],L,!1);else{const Et=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer[mt];s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,ct)}}else{const mt=L.texture.mipmaps;if(mt&&mt.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),At(b.__webglDepthbuffer,L,!1);else{const Et=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,ct)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Kt(L,b,tt){const mt=r.get(L);b!==void 0&&St(mt.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),tt!==void 0&&oe(L)}function He(L){const b=L.texture,tt=r.get(L),mt=r.get(b);L.addEventListener("dispose",z);const Et=L.textures,ct=L.isWebGLCubeRenderTarget===!0,Ot=Et.length>1;if(Ot||(mt.__webglTexture===void 0&&(mt.__webglTexture=s.createTexture()),mt.__version=b.version,h.memory.textures++),ct){tt.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0){tt.__webglFramebuffer[Rt]=[];for(let Gt=0;Gt<b.mipmaps.length;Gt++)tt.__webglFramebuffer[Rt][Gt]=s.createFramebuffer()}else tt.__webglFramebuffer[Rt]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Rt=0;Rt<b.mipmaps.length;Rt++)tt.__webglFramebuffer[Rt]=s.createFramebuffer()}else tt.__webglFramebuffer=s.createFramebuffer();if(Ot)for(let Rt=0,Gt=Et.length;Rt<Gt;Rt++){const $t=r.get(Et[Rt]);$t.__webglTexture===void 0&&($t.__webglTexture=s.createTexture(),h.memory.textures++)}if(L.samples>0&&ie(L)===!1){tt.__webglMultisampledFramebuffer=s.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Rt=0;Rt<Et.length;Rt++){const Gt=Et[Rt];tt.__webglColorRenderbuffer[Rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,tt.__webglColorRenderbuffer[Rt]);const $t=u.convert(Gt.format,Gt.colorSpace),bt=u.convert(Gt.type),Ft=U(Gt.internalFormat,$t,bt,Gt.colorSpace,L.isXRRenderTarget===!0),jt=ge(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,jt,Ft,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,tt.__webglColorRenderbuffer[Rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(tt.__webglDepthRenderbuffer=s.createRenderbuffer(),At(tt.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ct){i.bindTexture(s.TEXTURE_CUBE_MAP,mt.__webglTexture),xt(s.TEXTURE_CUBE_MAP,b);for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Gt=0;Gt<b.mipmaps.length;Gt++)St(tt.__webglFramebuffer[Rt][Gt],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Gt);else St(tt.__webglFramebuffer[Rt],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);S(b)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ot){for(let Rt=0,Gt=Et.length;Rt<Gt;Rt++){const $t=Et[Rt],bt=r.get($t);i.bindTexture(s.TEXTURE_2D,bt.__webglTexture),xt(s.TEXTURE_2D,$t),St(tt.__webglFramebuffer,L,$t,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,0),S($t)&&_(s.TEXTURE_2D)}i.unbindTexture()}else{let Rt=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Rt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Rt,mt.__webglTexture),xt(Rt,b),b.mipmaps&&b.mipmaps.length>0)for(let Gt=0;Gt<b.mipmaps.length;Gt++)St(tt.__webglFramebuffer[Gt],L,b,s.COLOR_ATTACHMENT0,Rt,Gt);else St(tt.__webglFramebuffer,L,b,s.COLOR_ATTACHMENT0,Rt,0);S(b)&&_(Rt),i.unbindTexture()}L.depthBuffer&&oe(L)}function Be(L){const b=L.textures;for(let tt=0,mt=b.length;tt<mt;tt++){const Et=b[tt];if(S(Et)){const ct=O(L),Ot=r.get(Et).__webglTexture;i.bindTexture(ct,Ot),_(ct),i.unbindTexture()}}}const fe=[],I=[];function Ln(L){if(L.samples>0){if(ie(L)===!1){const b=L.textures,tt=L.width,mt=L.height;let Et=s.COLOR_BUFFER_BIT;const ct=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ot=r.get(L),Rt=b.length>1;if(Rt)for(let $t=0;$t<b.length;$t++)i.bindFramebuffer(s.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ot.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer);const Gt=L.texture.mipmaps;Gt&&Gt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let $t=0;$t<b.length;$t++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Et|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Et|=s.STENCIL_BUFFER_BIT)),Rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ot.__webglColorRenderbuffer[$t]);const bt=r.get(b[$t]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,bt,0)}s.blitFramebuffer(0,0,tt,mt,0,0,tt,mt,Et,s.NEAREST),m===!0&&(fe.length=0,I.length=0,fe.push(s.COLOR_ATTACHMENT0+$t),L.depthBuffer&&L.resolveDepthBuffer===!1&&(fe.push(ct),I.push(ct),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,fe))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Rt)for(let $t=0;$t<b.length;$t++){i.bindFramebuffer(s.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.RENDERBUFFER,Ot.__webglColorRenderbuffer[$t]);const bt=r.get(b[$t]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ot.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.TEXTURE_2D,bt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const b=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function ge(L){return Math.min(l.maxSamples,L.samples)}function ie(L){const b=r.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Wt(L){const b=h.render.frame;g.get(L)!==b&&(g.set(L,b),L.update())}function we(L,b){const tt=L.colorSpace,mt=L.format,Et=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||tt!==Cs&&tt!==Ga&&(be.getTransfer(tt)===Oe?(mt!==gi||Et!==sa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),b}function Vt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=st,this.resetTextureUnits=lt,this.setTexture2D=dt,this.setTexture2DArray=B,this.setTexture3D=Z,this.setTextureCube=Y,this.rebindTextures=Kt,this.setupRenderTarget=He,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=Ln,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=St,this.useMultisampledRTT=ie}function tR(s,t){function i(r,l=Ga){let u;const h=be.getTransfer(l);if(r===sa)return s.UNSIGNED_BYTE;if(r===Ud)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Ld)return s.UNSIGNED_SHORT_5_5_5_1;if(r===jv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===qv)return s.BYTE;if(r===Yv)return s.SHORT;if(r===Io)return s.UNSIGNED_SHORT;if(r===Dd)return s.INT;if(r===br)return s.UNSIGNED_INT;if(r===ea)return s.FLOAT;if(r===Wo)return s.HALF_FLOAT;if(r===Zv)return s.ALPHA;if(r===Kv)return s.RGB;if(r===gi)return s.RGBA;if(r===Ho)return s.DEPTH_COMPONENT;if(r===Go)return s.DEPTH_STENCIL;if(r===Qv)return s.RED;if(r===Nd)return s.RED_INTEGER;if(r===Jv)return s.RG;if(r===Od)return s.RG_INTEGER;if(r===Pd)return s.RGBA_INTEGER;if(r===Uu||r===Lu||r===Nu||r===Ou)if(h===Oe)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Uu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Lu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Nu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ou)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Uu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Lu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Nu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ou)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Zh||r===Kh||r===Qh||r===Jh)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Zh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Kh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Qh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Jh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===$h||r===td||r===ed)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===$h||r===td)return h===Oe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===ed)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===nd||r===id||r===ad||r===rd||r===sd||r===od||r===ld||r===ud||r===cd||r===fd||r===hd||r===dd||r===pd||r===md)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===nd)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===id)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ad)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===rd)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===sd)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===od)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ld)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ud)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===cd)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===fd)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===hd)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===dd)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===pd)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===md)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Pu||r===gd||r===_d)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Pu)return h===Oe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===gd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===_d)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===$v||r===vd||r===xd||r===Sd)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Pu)return u.COMPRESSED_RED_RGTC1_EXT;if(r===vd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===xd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Sd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Fo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const eR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nR=`
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

}`;class iR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new Gn,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Wa({vertexShader:eR,fragmentShader:nR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new li(new qu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aR extends Ls{constructor(t,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,x=null,v=null,M=null,E=null;const A=new iR,S=i.getContextAttributes();let _=null,O=null;const U=[],w=[],F=new Fe;let V=null;const z=new Fn;z.viewport=new $e;const W=new Fn;W.viewport=new $e;const D=[z,W],C=new bE;let G=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let pt=U[Q];return pt===void 0&&(pt=new Ah,U[Q]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(Q){let pt=U[Q];return pt===void 0&&(pt=new Ah,U[Q]=pt),pt.getGripSpace()},this.getHand=function(Q){let pt=U[Q];return pt===void 0&&(pt=new Ah,U[Q]=pt),pt.getHandSpace()};function st(Q){const pt=w.indexOf(Q.inputSource);if(pt===-1)return;const St=U[pt];St!==void 0&&(St.update(Q.inputSource,Q.frame,p||h),St.dispatchEvent({type:Q.type,data:Q.inputSource}))}function vt(){l.removeEventListener("select",st),l.removeEventListener("selectstart",st),l.removeEventListener("selectend",st),l.removeEventListener("squeeze",st),l.removeEventListener("squeezestart",st),l.removeEventListener("squeezeend",st),l.removeEventListener("end",vt),l.removeEventListener("inputsourceschange",dt);for(let Q=0;Q<U.length;Q++){const pt=w[Q];pt!==null&&(w[Q]=null,U[Q].disconnect(pt))}G=null,lt=null,A.reset(),t.setRenderTarget(_),M=null,v=null,x=null,l=null,O=null,yt.stop(),r.isPresenting=!1,t.setPixelRatio(V),t.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return x},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(_=t.getRenderTarget(),l.addEventListener("select",st),l.addEventListener("selectstart",st),l.addEventListener("selectend",st),l.addEventListener("squeeze",st),l.addEventListener("squeezestart",st),l.addEventListener("squeezeend",st),l.addEventListener("end",vt),l.addEventListener("inputsourceschange",dt),S.xrCompatible!==!0&&await i.makeXRCompatible(),V=t.getPixelRatio(),t.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,At=null,Ut=null;S.depth&&(Ut=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,St=S.stencil?Go:Ho,At=S.stencil?Fo:br);const oe={colorFormat:i.RGBA8,depthFormat:Ut,scaleFactor:u};x=new XRWebGLBinding(l,i),v=x.createProjectionLayer(oe),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),O=new Ar(v.textureWidth,v.textureHeight,{format:gi,type:sa,depthTexture:new f0(v.textureWidth,v.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const St={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,St),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),O=new Ar(M.framebufferWidth,M.framebufferHeight,{format:gi,type:sa,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),yt.setContext(l),yt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function dt(Q){for(let pt=0;pt<Q.removed.length;pt++){const St=Q.removed[pt],At=w.indexOf(St);At>=0&&(w[At]=null,U[At].disconnect(St))}for(let pt=0;pt<Q.added.length;pt++){const St=Q.added[pt];let At=w.indexOf(St);if(At===-1){for(let oe=0;oe<U.length;oe++)if(oe>=w.length){w.push(St),At=oe;break}else if(w[oe]===null){w[oe]=St,At=oe;break}if(At===-1)break}const Ut=U[At];Ut&&Ut.connect(St)}}const B=new rt,Z=new rt;function Y(Q,pt,St){B.setFromMatrixPosition(pt.matrixWorld),Z.setFromMatrixPosition(St.matrixWorld);const At=B.distanceTo(Z),Ut=pt.projectionMatrix.elements,oe=St.projectionMatrix.elements,Kt=Ut[14]/(Ut[10]-1),He=Ut[14]/(Ut[10]+1),Be=(Ut[9]+1)/Ut[5],fe=(Ut[9]-1)/Ut[5],I=(Ut[8]-1)/Ut[0],Ln=(oe[8]+1)/oe[0],ge=Kt*I,ie=Kt*Ln,Wt=At/(-I+Ln),we=Wt*-I;if(pt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(we),Q.translateZ(Wt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ut[10]===-1)Q.projectionMatrix.copy(pt.projectionMatrix),Q.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Vt=Kt+Wt,L=He+Wt,b=ge-we,tt=ie+(At-we),mt=Be*He/L*Vt,Et=fe*He/L*Vt;Q.projectionMatrix.makePerspective(b,tt,mt,Et,Vt,L),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Mt(Q,pt){pt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(pt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let pt=Q.near,St=Q.far;A.texture!==null&&(A.depthNear>0&&(pt=A.depthNear),A.depthFar>0&&(St=A.depthFar)),C.near=W.near=z.near=pt,C.far=W.far=z.far=St,(G!==C.near||lt!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),G=C.near,lt=C.far),z.layers.mask=Q.layers.mask|2,W.layers.mask=Q.layers.mask|4,C.layers.mask=z.layers.mask|W.layers.mask;const At=Q.parent,Ut=C.cameras;Mt(C,At);for(let oe=0;oe<Ut.length;oe++)Mt(Ut[oe],At);Ut.length===2?Y(C,z,W):C.projectionMatrix.copy(z.projectionMatrix),N(Q,C,At)};function N(Q,pt,St){St===null?Q.matrix.copy(pt.matrixWorld):(Q.matrix.copy(St.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(pt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(pt.projectionMatrix),Q.projectionMatrixInverse.copy(pt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=yd*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(v===null&&M===null))return m},this.setFoveation=function(Q){m=Q,v!==null&&(v.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(C)};let $=null;function xt(Q,pt){if(g=pt.getViewerPose(p||h),E=pt,g!==null){const St=g.views;M!==null&&(t.setRenderTargetFramebuffer(O,M.framebuffer),t.setRenderTarget(O));let At=!1;St.length!==C.cameras.length&&(C.cameras.length=0,At=!0);for(let Kt=0;Kt<St.length;Kt++){const He=St[Kt];let Be=null;if(M!==null)Be=M.getViewport(He);else{const I=x.getViewSubImage(v,He);Be=I.viewport,Kt===0&&(t.setRenderTargetTextures(O,I.colorTexture,I.depthStencilTexture),t.setRenderTarget(O))}let fe=D[Kt];fe===void 0&&(fe=new Fn,fe.layers.enable(Kt),fe.viewport=new $e,D[Kt]=fe),fe.matrix.fromArray(He.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(He.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(Be.x,Be.y,Be.width,Be.height),Kt===0&&(C.matrix.copy(fe.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),At===!0&&C.cameras.push(fe)}const Ut=l.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&x){const Kt=x.getDepthInformation(St[0]);Kt&&Kt.isValid&&Kt.texture&&A.init(t,Kt,l.renderState)}}for(let St=0;St<U.length;St++){const At=w[St],Ut=U[St];At!==null&&Ut!==void 0&&Ut.update(At,pt,p||h)}$&&$(Q,pt),pt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pt}),E=null}const yt=new h0;yt.setAnimationLoop(xt),this.setAnimationLoop=function(Q){$=Q},this.dispose=function(){}}}const _r=new oa,rR=new sn;function sR(s,t){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,o0(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,O,U,w){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(S,_):_.isMeshToonMaterial?(u(S,_),x(S,_)):_.isMeshPhongMaterial?(u(S,_),g(S,_)):_.isMeshStandardMaterial?(u(S,_),v(S,_),_.isMeshPhysicalMaterial&&M(S,_,w)):_.isMeshMatcapMaterial?(u(S,_),E(S,_)):_.isMeshDepthMaterial?u(S,_):_.isMeshDistanceMaterial?(u(S,_),A(S,_)):_.isMeshNormalMaterial?u(S,_):_.isLineBasicMaterial?(h(S,_),_.isLineDashedMaterial&&d(S,_)):_.isPointsMaterial?m(S,_,O,U):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Hn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Hn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const O=t.get(_),U=O.envMap,w=O.envMapRotation;U&&(S.envMap.value=U,_r.copy(w),_r.x*=-1,_r.y*=-1,_r.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),S.envMapRotation.value.setFromMatrix4(rR.makeRotationFromEuler(_r)),S.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function h(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function d(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,O,U){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*O,S.scale.value=U*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function x(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function v(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,O){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Hn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=O.texture,S.transmissionSamplerSize.value.set(O.width,O.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,_){_.matcap&&(S.matcap.value=_.matcap)}function A(S,_){const O=t.get(_).light;S.referencePosition.value.setFromMatrixPosition(O.matrixWorld),S.nearDistance.value=O.shadow.camera.near,S.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function oR(s,t,i,r){let l={},u={},h=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,U){const w=U.program;r.uniformBlockBinding(O,w)}function p(O,U){let w=l[O.id];w===void 0&&(E(O),w=g(O),l[O.id]=w,O.addEventListener("dispose",S));const F=U.program;r.updateUBOMapping(O,F);const V=t.render.frame;u[O.id]!==V&&(v(O),u[O.id]=V)}function g(O){const U=x();O.__bindingPointIndex=U;const w=s.createBuffer(),F=O.__size,V=O.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,F,V),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,w),w}function x(){for(let O=0;O<d;O++)if(h.indexOf(O)===-1)return h.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(O){const U=l[O.id],w=O.uniforms,F=O.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let V=0,z=w.length;V<z;V++){const W=Array.isArray(w[V])?w[V]:[w[V]];for(let D=0,C=W.length;D<C;D++){const G=W[D];if(M(G,V,D,F)===!0){const lt=G.__offset,st=Array.isArray(G.value)?G.value:[G.value];let vt=0;for(let dt=0;dt<st.length;dt++){const B=st[dt],Z=A(B);typeof B=="number"||typeof B=="boolean"?(G.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,lt+vt,G.__data)):B.isMatrix3?(G.__data[0]=B.elements[0],G.__data[1]=B.elements[1],G.__data[2]=B.elements[2],G.__data[3]=0,G.__data[4]=B.elements[3],G.__data[5]=B.elements[4],G.__data[6]=B.elements[5],G.__data[7]=0,G.__data[8]=B.elements[6],G.__data[9]=B.elements[7],G.__data[10]=B.elements[8],G.__data[11]=0):(B.toArray(G.__data,vt),vt+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,lt,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(O,U,w,F){const V=O.value,z=U+"_"+w;if(F[z]===void 0)return typeof V=="number"||typeof V=="boolean"?F[z]=V:F[z]=V.clone(),!0;{const W=F[z];if(typeof V=="number"||typeof V=="boolean"){if(W!==V)return F[z]=V,!0}else if(W.equals(V)===!1)return W.copy(V),!0}return!1}function E(O){const U=O.uniforms;let w=0;const F=16;for(let z=0,W=U.length;z<W;z++){const D=Array.isArray(U[z])?U[z]:[U[z]];for(let C=0,G=D.length;C<G;C++){const lt=D[C],st=Array.isArray(lt.value)?lt.value:[lt.value];for(let vt=0,dt=st.length;vt<dt;vt++){const B=st[vt],Z=A(B),Y=w%F,Mt=Y%Z.boundary,N=Y+Mt;w+=Mt,N!==0&&F-N<Z.storage&&(w+=F-N),lt.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=w,w+=Z.storage}}}const V=w%F;return V>0&&(w+=F-V),O.__size=w,O.__cache={},this}function A(O){const U={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(U.boundary=4,U.storage=4):O.isVector2?(U.boundary=8,U.storage=8):O.isVector3||O.isColor?(U.boundary=16,U.storage=12):O.isVector4?(U.boundary=16,U.storage=16):O.isMatrix3?(U.boundary=48,U.storage=48):O.isMatrix4?(U.boundary=64,U.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),U}function S(O){const U=O.target;U.removeEventListener("dispose",S);const w=h.indexOf(U.__bindingPointIndex);h.splice(w,1),s.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function _(){for(const O in l)s.deleteBuffer(l[O]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class Hd{constructor(t={}){const{canvas:i=WM(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const E=new Uint32Array(4),A=new Int32Array(4);let S=null,_=null;const O=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ka,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let F=!1;this._outputColorSpace=oi;let V=0,z=0,W=null,D=-1,C=null;const G=new $e,lt=new $e;let st=null;const vt=new Pe(0);let dt=0,B=i.width,Z=i.height,Y=1,Mt=null,N=null;const $=new $e(0,0,B,Z),xt=new $e(0,0,B,Z);let yt=!1;const Q=new c0;let pt=!1,St=!1;const At=new sn,Ut=new sn,oe=new rt,Kt=new $e,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function fe(){return W===null?Y:1}let I=r;function Ln(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${wd}`),i.addEventListener("webglcontextlost",gt,!1),i.addEventListener("webglcontextrestored",Bt,!1),i.addEventListener("webglcontextcreationerror",Nt,!1),I===null){const q="webgl2";if(I=Ln(q,R),I===null)throw Ln(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ge,ie,Wt,we,Vt,L,b,tt,mt,Et,ct,Ot,Rt,Gt,$t,bt,Ft,jt,Qt,Pt,ue,ne,De,k;function Lt(){ge=new vA(I),ge.init(),ne=new tR(I,ge),ie=new fA(I,ge,t,ne),Wt=new J1(I,ge),ie.reverseDepthBuffer&&v&&Wt.buffers.depth.setReversed(!0),we=new yA(I),Vt=new F1,L=new $1(I,ge,Wt,Vt,ie,ne,we),b=new dA(w),tt=new _A(w),mt=new RE(I),De=new uA(I,mt),Et=new xA(I,mt,we,De),ct=new EA(I,Et,mt,we),Qt=new MA(I,ie,L),bt=new hA(Vt),Ot=new I1(w,b,tt,ge,ie,De,bt),Rt=new sR(w,Vt),Gt=new G1,$t=new Y1(ge),jt=new lA(w,b,tt,Wt,ct,M,m),Ft=new K1(w,ct,ie),k=new oR(I,we,ie,Wt),Pt=new cA(I,ge,we),ue=new SA(I,ge,we),we.programs=Ot.programs,w.capabilities=ie,w.extensions=ge,w.properties=Vt,w.renderLists=Gt,w.shadowMap=Ft,w.state=Wt,w.info=we}Lt();const ot=new aR(w,I);this.xr=ot,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=ge.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ge.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(B,Z,!1))},this.getSize=function(R){return R.set(B,Z)},this.setSize=function(R,q,it=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,Z=q,i.width=Math.floor(R*Y),i.height=Math.floor(q*Y),it===!0&&(i.style.width=R+"px",i.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(B*Y,Z*Y).floor()},this.setDrawingBufferSize=function(R,q,it){B=R,Z=q,Y=it,i.width=Math.floor(R*it),i.height=Math.floor(q*it),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(G)},this.getViewport=function(R){return R.copy($)},this.setViewport=function(R,q,it,at){R.isVector4?$.set(R.x,R.y,R.z,R.w):$.set(R,q,it,at),Wt.viewport(G.copy($).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(xt)},this.setScissor=function(R,q,it,at){R.isVector4?xt.set(R.x,R.y,R.z,R.w):xt.set(R,q,it,at),Wt.scissor(lt.copy(xt).multiplyScalar(Y).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(R){Wt.setScissorTest(yt=R)},this.setOpaqueSort=function(R){Mt=R},this.setTransparentSort=function(R){N=R},this.getClearColor=function(R){return R.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,it=!0){let at=0;if(R){let j=!1;if(W!==null){const Tt=W.texture.format;j=Tt===Pd||Tt===Od||Tt===Nd}if(j){const Tt=W.texture.type,Ct=Tt===sa||Tt===br||Tt===Io||Tt===Fo||Tt===Ud||Tt===Ld,wt=jt.getClearColor(),zt=jt.getClearAlpha(),te=wt.r,qt=wt.g,Xt=wt.b;Ct?(E[0]=te,E[1]=qt,E[2]=Xt,E[3]=zt,I.clearBufferuiv(I.COLOR,0,E)):(A[0]=te,A[1]=qt,A[2]=Xt,A[3]=zt,I.clearBufferiv(I.COLOR,0,A))}else at|=I.COLOR_BUFFER_BIT}q&&(at|=I.DEPTH_BUFFER_BIT),it&&(at|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",gt,!1),i.removeEventListener("webglcontextrestored",Bt,!1),i.removeEventListener("webglcontextcreationerror",Nt,!1),jt.dispose(),Gt.dispose(),$t.dispose(),Vt.dispose(),b.dispose(),tt.dispose(),ct.dispose(),De.dispose(),k.dispose(),Ot.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",on),ot.removeEventListener("sessionend",xn),Nn.stop()};function gt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const R=we.autoReset,q=Ft.enabled,it=Ft.autoUpdate,at=Ft.needsUpdate,j=Ft.type;Lt(),we.autoReset=R,Ft.enabled=q,Ft.autoUpdate=it,Ft.needsUpdate=at,Ft.type=j}function Nt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ae(R){const q=R.target;q.removeEventListener("dispose",ae),Ge(q)}function Ge(R){tn(R),Vt.remove(R)}function tn(R){const q=Vt.get(R).programs;q!==void 0&&(q.forEach(function(it){Ot.releaseProgram(it)}),R.isShaderMaterial&&Ot.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,it,at,j,Tt){q===null&&(q=He);const Ct=j.isMesh&&j.matrixWorld.determinant()<0,wt=Za(R,q,it,at,j);Wt.setMaterial(at,Ct);let zt=it.index,te=1;if(at.wireframe===!0){if(zt=Et.getWireframeAttribute(it),zt===void 0)return;te=2}const qt=it.drawRange,Xt=it.attributes.position;let de=qt.start*te,Ee=(qt.start+qt.count)*te;Tt!==null&&(de=Math.max(de,Tt.start*te),Ee=Math.min(Ee,(Tt.start+Tt.count)*te)),zt!==null?(de=Math.max(de,0),Ee=Math.min(Ee,zt.count)):Xt!=null&&(de=Math.max(de,0),Ee=Math.min(Ee,Xt.count));const We=Ee-de;if(We<0||We===1/0)return;De.setup(j,at,wt,it,zt);let _e,ve=Pt;if(zt!==null&&(_e=mt.get(zt),ve=ue,ve.setIndex(_e)),j.isMesh)at.wireframe===!0?(Wt.setLineWidth(at.wireframeLinewidth*fe()),ve.setMode(I.LINES)):ve.setMode(I.TRIANGLES);else if(j.isLine){let Yt=at.linewidth;Yt===void 0&&(Yt=1),Wt.setLineWidth(Yt*fe()),j.isLineSegments?ve.setMode(I.LINES):j.isLineLoop?ve.setMode(I.LINE_LOOP):ve.setMode(I.LINE_STRIP)}else j.isPoints?ve.setMode(I.POINTS):j.isSprite&&ve.setMode(I.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Bu("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ve.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ge.get("WEBGL_multi_draw"))ve.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Yt=j._multiDrawStarts,je=j._multiDrawCounts,ye=j._multiDrawCount,Tn=zt?mt.get(zt).bytesPerElement:1,ha=Vt.get(at).currentProgram.getUniforms();for(let Ve=0;Ve<ye;Ve++)ha.setValue(I,"_gl_DrawID",Ve),ve.render(Yt[Ve]/Tn,je[Ve])}else if(j.isInstancedMesh)ve.renderInstances(de,We,j.count);else if(it.isInstancedBufferGeometry){const Yt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,je=Math.min(it.instanceCount,Yt);ve.renderInstances(de,We,je)}else ve.render(de,We)};function Me(R,q,it){R.transparent===!0&&R.side===ta&&R.forceSinglePass===!1?(R.side=Hn,R.needsUpdate=!0,ca(R,q,it),R.side=Xa,R.needsUpdate=!0,ca(R,q,it),R.side=ta):ca(R,q,it)}this.compile=function(R,q,it=null){it===null&&(it=R),_=$t.get(it),_.init(q),U.push(_),it.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),R!==it&&R.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const at=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Tt=j.material;if(Tt)if(Array.isArray(Tt))for(let Ct=0;Ct<Tt.length;Ct++){const wt=Tt[Ct];Me(wt,it,j),at.add(wt)}else Me(Tt,it,j),at.add(Tt)}),_=U.pop(),at},this.compileAsync=function(R,q,it=null){const at=this.compile(R,q,it);return new Promise(j=>{function Tt(){if(at.forEach(function(Ct){Vt.get(Ct).currentProgram.isReady()&&at.delete(Ct)}),at.size===0){j(R);return}setTimeout(Tt,10)}ge.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Vn=null;function dn(R){Vn&&Vn(R)}function on(){Nn.stop()}function xn(){Nn.start()}const Nn=new h0;Nn.setAnimationLoop(dn),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(R){Vn=R,ot.setAnimationLoop(R),R===null?Nn.stop():Nn.start()},ot.addEventListener("sessionstart",on),ot.addEventListener("sessionend",xn),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(q),q=ot.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,q,W),_=$t.get(R,U.length),_.init(q),U.push(_),Ut.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Q.setFromProjectionMatrix(Ut),St=this.localClippingEnabled,pt=bt.init(this.clippingPlanes,St),S=Gt.get(R,O.length),S.init(),O.push(S),ot.enabled===!0&&ot.isPresenting===!0){const Tt=w.xr.getDepthSensingMesh();Tt!==null&&Ya(Tt,q,-1/0,w.sortObjects)}Ya(R,q,0,w.sortObjects),S.finish(),w.sortObjects===!0&&S.sort(Mt,N),Be=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Be&&jt.addToRenderList(S,R),this.info.render.frame++,pt===!0&&bt.beginShadows();const it=_.state.shadowsArray;Ft.render(it,R,q),pt===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const at=S.opaque,j=S.transmissive;if(_.setupLights(),q.isArrayCamera){const Tt=q.cameras;if(j.length>0)for(let Ct=0,wt=Tt.length;Ct<wt;Ct++){const zt=Tt[Ct];Qo(at,j,R,zt)}Be&&jt.render(R);for(let Ct=0,wt=Tt.length;Ct<wt;Ct++){const zt=Tt[Ct];Ko(S,R,zt,zt.viewport)}}else j.length>0&&Qo(at,j,R,q),Be&&jt.render(R),Ko(S,R,q);W!==null&&z===0&&(L.updateMultisampleRenderTarget(W),L.updateRenderTargetMipmap(W)),R.isScene===!0&&R.onAfterRender(w,R,q),De.resetDefaultState(),D=-1,C=null,U.pop(),U.length>0?(_=U[U.length-1],pt===!0&&bt.setGlobalState(w.clippingPlanes,_.state.camera)):_=null,O.pop(),O.length>0?S=O[O.length-1]:S=null};function Ya(R,q,it,at){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)it=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Q.intersectsSprite(R)){at&&Kt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ut);const Ct=ct.update(R),wt=R.material;wt.visible&&S.push(R,Ct,wt,it,Kt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Q.intersectsObject(R))){const Ct=ct.update(R),wt=R.material;if(at&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Kt.copy(R.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Kt.copy(Ct.boundingSphere.center)),Kt.applyMatrix4(R.matrixWorld).applyMatrix4(Ut)),Array.isArray(wt)){const zt=Ct.groups;for(let te=0,qt=zt.length;te<qt;te++){const Xt=zt[te],de=wt[Xt.materialIndex];de&&de.visible&&S.push(R,Ct,de,it,Kt.z,Xt)}}else wt.visible&&S.push(R,Ct,wt,it,Kt.z,null)}}const Tt=R.children;for(let Ct=0,wt=Tt.length;Ct<wt;Ct++)Ya(Tt[Ct],q,it,at)}function Ko(R,q,it,at){const j=R.opaque,Tt=R.transmissive,Ct=R.transparent;_.setupLightsView(it),pt===!0&&bt.setGlobalState(w.clippingPlanes,it),at&&Wt.viewport(G.copy(at)),j.length>0&&ja(j,q,it),Tt.length>0&&ja(Tt,q,it),Ct.length>0&&ja(Ct,q,it),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function Qo(R,q,it,at){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[at.id]===void 0&&(_.state.transmissionRenderTarget[at.id]=new Ar(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float")?Wo:sa,minFilter:Er,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace}));const Tt=_.state.transmissionRenderTarget[at.id],Ct=at.viewport||G;Tt.setSize(Ct.z*w.transmissionResolutionScale,Ct.w*w.transmissionResolutionScale);const wt=w.getRenderTarget();w.setRenderTarget(Tt),w.getClearColor(vt),dt=w.getClearAlpha(),dt<1&&w.setClearColor(16777215,.5),w.clear(),Be&&jt.render(it);const zt=w.toneMapping;w.toneMapping=ka;const te=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),_.setupLightsView(at),pt===!0&&bt.setGlobalState(w.clippingPlanes,at),ja(R,it,at),L.updateMultisampleRenderTarget(Tt),L.updateRenderTargetMipmap(Tt),ge.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Xt=0,de=q.length;Xt<de;Xt++){const Ee=q[Xt],We=Ee.object,_e=Ee.geometry,ve=Ee.material,Yt=Ee.group;if(ve.side===ta&&We.layers.test(at.layers)){const je=ve.side;ve.side=Hn,ve.needsUpdate=!0,ua(We,it,at,_e,ve,Yt),ve.side=je,ve.needsUpdate=!0,qt=!0}}qt===!0&&(L.updateMultisampleRenderTarget(Tt),L.updateRenderTargetMipmap(Tt))}w.setRenderTarget(wt),w.setClearColor(vt,dt),te!==void 0&&(at.viewport=te),w.toneMapping=zt}function ja(R,q,it){const at=q.isScene===!0?q.overrideMaterial:null;for(let j=0,Tt=R.length;j<Tt;j++){const Ct=R[j],wt=Ct.object,zt=Ct.geometry,te=Ct.group;let qt=Ct.material;qt.allowOverride===!0&&at!==null&&(qt=at),wt.layers.test(it.layers)&&ua(wt,q,it,zt,qt,te)}}function ua(R,q,it,at,j,Tt){R.onBeforeRender(w,q,it,at,j,Tt),R.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(w,q,it,at,R,Tt),j.transparent===!0&&j.side===ta&&j.forceSinglePass===!1?(j.side=Hn,j.needsUpdate=!0,w.renderBufferDirect(it,q,at,j,R,Tt),j.side=Xa,j.needsUpdate=!0,w.renderBufferDirect(it,q,at,j,R,Tt),j.side=ta):w.renderBufferDirect(it,q,at,j,R,Tt),R.onAfterRender(w,q,it,at,j,Tt)}function ca(R,q,it){q.isScene!==!0&&(q=He);const at=Vt.get(R),j=_.state.lights,Tt=_.state.shadowsArray,Ct=j.state.version,wt=Ot.getParameters(R,j.state,Tt,q,it),zt=Ot.getProgramCacheKey(wt);let te=at.programs;at.environment=R.isMeshStandardMaterial?q.environment:null,at.fog=q.fog,at.envMap=(R.isMeshStandardMaterial?tt:b).get(R.envMap||at.environment),at.envMapRotation=at.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,te===void 0&&(R.addEventListener("dispose",ae),te=new Map,at.programs=te);let qt=te.get(zt);if(qt!==void 0){if(at.currentProgram===qt&&at.lightsStateVersion===Ct)return Di(R,wt),qt}else wt.uniforms=Ot.getUniforms(R),R.onBeforeCompile(wt,w),qt=Ot.acquireProgram(wt,zt),te.set(zt,qt),at.uniforms=wt.uniforms;const Xt=at.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xt.clippingPlanes=bt.uniform),Di(R,wt),at.needsLights=en(R),at.lightsStateVersion=Ct,at.needsLights&&(Xt.ambientLightColor.value=j.state.ambient,Xt.lightProbe.value=j.state.probe,Xt.directionalLights.value=j.state.directional,Xt.directionalLightShadows.value=j.state.directionalShadow,Xt.spotLights.value=j.state.spot,Xt.spotLightShadows.value=j.state.spotShadow,Xt.rectAreaLights.value=j.state.rectArea,Xt.ltc_1.value=j.state.rectAreaLTC1,Xt.ltc_2.value=j.state.rectAreaLTC2,Xt.pointLights.value=j.state.point,Xt.pointLightShadows.value=j.state.pointShadow,Xt.hemisphereLights.value=j.state.hemi,Xt.directionalShadowMap.value=j.state.directionalShadowMap,Xt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Xt.spotShadowMap.value=j.state.spotShadowMap,Xt.spotLightMatrix.value=j.state.spotLightMatrix,Xt.spotLightMap.value=j.state.spotLightMap,Xt.pointShadowMap.value=j.state.pointShadowMap,Xt.pointShadowMatrix.value=j.state.pointShadowMatrix),at.currentProgram=qt,at.uniformsList=null,qt}function wi(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=zu.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Di(R,q){const it=Vt.get(R);it.outputColorSpace=q.outputColorSpace,it.batching=q.batching,it.batchingColor=q.batchingColor,it.instancing=q.instancing,it.instancingColor=q.instancingColor,it.instancingMorph=q.instancingMorph,it.skinning=q.skinning,it.morphTargets=q.morphTargets,it.morphNormals=q.morphNormals,it.morphColors=q.morphColors,it.morphTargetsCount=q.morphTargetsCount,it.numClippingPlanes=q.numClippingPlanes,it.numIntersection=q.numClipIntersection,it.vertexAlphas=q.vertexAlphas,it.vertexTangents=q.vertexTangents,it.toneMapping=q.toneMapping}function Za(R,q,it,at,j){q.isScene!==!0&&(q=He),L.resetTextureUnits();const Tt=q.fog,Ct=at.isMeshStandardMaterial?q.environment:null,wt=W===null?w.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Cs,zt=(at.isMeshStandardMaterial?tt:b).get(at.envMap||Ct),te=at.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,qt=!!it.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Xt=!!it.morphAttributes.position,de=!!it.morphAttributes.normal,Ee=!!it.morphAttributes.color;let We=ka;at.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(We=w.toneMapping);const _e=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,ve=_e!==void 0?_e.length:0,Yt=Vt.get(at),je=_.state.lights;if(pt===!0&&(St===!0||R!==C)){const pn=R===C&&at.id===D;bt.setState(at,R,pn)}let ye=!1;at.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==je.state.version||Yt.outputColorSpace!==wt||j.isBatchedMesh&&Yt.batching===!1||!j.isBatchedMesh&&Yt.batching===!0||j.isBatchedMesh&&Yt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Yt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Yt.instancing===!1||!j.isInstancedMesh&&Yt.instancing===!0||j.isSkinnedMesh&&Yt.skinning===!1||!j.isSkinnedMesh&&Yt.skinning===!0||j.isInstancedMesh&&Yt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Yt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Yt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Yt.instancingMorph===!1&&j.morphTexture!==null||Yt.envMap!==zt||at.fog===!0&&Yt.fog!==Tt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==bt.numPlanes||Yt.numIntersection!==bt.numIntersection)||Yt.vertexAlphas!==te||Yt.vertexTangents!==qt||Yt.morphTargets!==Xt||Yt.morphNormals!==de||Yt.morphColors!==Ee||Yt.toneMapping!==We||Yt.morphTargetsCount!==ve)&&(ye=!0):(ye=!0,Yt.__version=at.version);let Tn=Yt.currentProgram;ye===!0&&(Tn=ca(at,q,j));let ha=!1,Ve=!1,Li=!1;const ze=Tn.getUniforms(),bn=Yt.uniforms;if(Wt.useProgram(Tn.program)&&(ha=!0,Ve=!0,Li=!0),at.id!==D&&(D=at.id,Ve=!0),ha||C!==R){Wt.buffers.depth.getReversed()?(At.copy(R.projectionMatrix),YM(At),jM(At),ze.setValue(I,"projectionMatrix",At)):ze.setValue(I,"projectionMatrix",R.projectionMatrix),ze.setValue(I,"viewMatrix",R.matrixWorldInverse);const Sn=ze.map.cameraPosition;Sn!==void 0&&Sn.setValue(I,oe.setFromMatrixPosition(R.matrixWorld)),ie.logarithmicDepthBuffer&&ze.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&ze.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,Ve=!0,Li=!0)}if(j.isSkinnedMesh){ze.setOptional(I,j,"bindMatrix"),ze.setOptional(I,j,"bindMatrixInverse");const pn=j.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),ze.setValue(I,"boneTexture",pn.boneTexture,L))}j.isBatchedMesh&&(ze.setOptional(I,j,"batchingTexture"),ze.setValue(I,"batchingTexture",j._matricesTexture,L),ze.setOptional(I,j,"batchingIdTexture"),ze.setValue(I,"batchingIdTexture",j._indirectTexture,L),ze.setOptional(I,j,"batchingColorTexture"),j._colorsTexture!==null&&ze.setValue(I,"batchingColorTexture",j._colorsTexture,L));const ln=it.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Qt.update(j,it,Tn),(Ve||Yt.receiveShadow!==j.receiveShadow)&&(Yt.receiveShadow=j.receiveShadow,ze.setValue(I,"receiveShadow",j.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(bn.envMap.value=zt,bn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&q.environment!==null&&(bn.envMapIntensity.value=q.environmentIntensity),Ve&&(ze.setValue(I,"toneMappingExposure",w.toneMappingExposure),Yt.needsLights&&fa(bn,Li),Tt&&at.fog===!0&&Rt.refreshFogUniforms(bn,Tt),Rt.refreshMaterialUniforms(bn,at,Y,Z,_.state.transmissionRenderTarget[R.id]),zu.upload(I,wi(Yt),bn,L)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(zu.upload(I,wi(Yt),bn,L),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&ze.setValue(I,"center",j.center),ze.setValue(I,"modelViewMatrix",j.modelViewMatrix),ze.setValue(I,"normalMatrix",j.normalMatrix),ze.setValue(I,"modelMatrix",j.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const pn=at.uniformsGroups;for(let Sn=0,xi=pn.length;Sn<xi;Sn++){const Ni=pn[Sn];k.update(Ni,Tn),k.bind(Ni,Tn)}}return Tn}function fa(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function en(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(R,q,it){const at=Vt.get(R);at.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),Vt.get(R.texture).__webglTexture=q,Vt.get(R.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:it,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const it=Vt.get(R);it.__webglFramebuffer=q,it.__useDefaultFramebuffer=q===void 0};const Jo=I.createFramebuffer();this.setRenderTarget=function(R,q=0,it=0){W=R,V=q,z=it;let at=!0,j=null,Tt=!1,Ct=!1;if(R){const zt=Vt.get(R);if(zt.__useDefaultFramebuffer!==void 0)Wt.bindFramebuffer(I.FRAMEBUFFER,null),at=!1;else if(zt.__webglFramebuffer===void 0)L.setupRenderTarget(R);else if(zt.__hasExternalTextures)L.rebindTextures(R,Vt.get(R.texture).__webglTexture,Vt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Xt=R.depthTexture;if(zt.__boundDepthTexture!==Xt){if(Xt!==null&&Vt.has(Xt)&&(R.width!==Xt.image.width||R.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(R)}}const te=R.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Ct=!0);const qt=Vt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(qt[q])?j=qt[q][it]:j=qt[q],Tt=!0):R.samples>0&&L.useMultisampledRTT(R)===!1?j=Vt.get(R).__webglMultisampledFramebuffer:Array.isArray(qt)?j=qt[it]:j=qt,G.copy(R.viewport),lt.copy(R.scissor),st=R.scissorTest}else G.copy($).multiplyScalar(Y).floor(),lt.copy(xt).multiplyScalar(Y).floor(),st=yt;if(it!==0&&(j=Jo),Wt.bindFramebuffer(I.FRAMEBUFFER,j)&&at&&Wt.drawBuffers(R,j),Wt.viewport(G),Wt.scissor(lt),Wt.setScissorTest(st),Tt){const zt=Vt.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+q,zt.__webglTexture,it)}else if(Ct){const zt=Vt.get(R.texture),te=q;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,zt.__webglTexture,it,te)}else if(R!==null&&it!==0){const zt=Vt.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,zt.__webglTexture,it)}D=-1},this.readRenderTargetPixels=function(R,q,it,at,j,Tt,Ct){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Vt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ct!==void 0&&(wt=wt[Ct]),wt){Wt.bindFramebuffer(I.FRAMEBUFFER,wt);try{const zt=R.texture,te=zt.format,qt=zt.type;if(!ie.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-at&&it>=0&&it<=R.height-j&&I.readPixels(q,it,at,j,ne.convert(te),ne.convert(qt),Tt)}finally{const zt=W!==null?Vt.get(W).__webglFramebuffer:null;Wt.bindFramebuffer(I.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(R,q,it,at,j,Tt,Ct){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Vt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ct!==void 0&&(wt=wt[Ct]),wt)if(q>=0&&q<=R.width-at&&it>=0&&it<=R.height-j){Wt.bindFramebuffer(I.FRAMEBUFFER,wt);const zt=R.texture,te=zt.format,qt=zt.type;if(!ie.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Xt),I.bufferData(I.PIXEL_PACK_BUFFER,Tt.byteLength,I.STREAM_READ),I.readPixels(q,it,at,j,ne.convert(te),ne.convert(qt),0);const de=W!==null?Vt.get(W).__webglFramebuffer:null;Wt.bindFramebuffer(I.FRAMEBUFFER,de);const Ee=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await qM(I,Ee,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Xt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Tt),I.deleteBuffer(Xt),I.deleteSync(Ee),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,it=0){const at=Math.pow(2,-it),j=Math.floor(R.image.width*at),Tt=Math.floor(R.image.height*at),Ct=q!==null?q.x:0,wt=q!==null?q.y:0;L.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,it,0,0,Ct,wt,j,Tt),Wt.unbindTexture()};const $o=I.createFramebuffer(),Ui=I.createFramebuffer();this.copyTextureToTexture=function(R,q,it=null,at=null,j=0,Tt=null){Tt===null&&(j!==0?(Bu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=j,j=0):Tt=0);let Ct,wt,zt,te,qt,Xt,de,Ee,We;const _e=R.isCompressedTexture?R.mipmaps[Tt]:R.image;if(it!==null)Ct=it.max.x-it.min.x,wt=it.max.y-it.min.y,zt=it.isBox3?it.max.z-it.min.z:1,te=it.min.x,qt=it.min.y,Xt=it.isBox3?it.min.z:0;else{const ln=Math.pow(2,-j);Ct=Math.floor(_e.width*ln),wt=Math.floor(_e.height*ln),R.isDataArrayTexture?zt=_e.depth:R.isData3DTexture?zt=Math.floor(_e.depth*ln):zt=1,te=0,qt=0,Xt=0}at!==null?(de=at.x,Ee=at.y,We=at.z):(de=0,Ee=0,We=0);const ve=ne.convert(q.format),Yt=ne.convert(q.type);let je;q.isData3DTexture?(L.setTexture3D(q,0),je=I.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(L.setTexture2DArray(q,0),je=I.TEXTURE_2D_ARRAY):(L.setTexture2D(q,0),je=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,q.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,q.unpackAlignment);const ye=I.getParameter(I.UNPACK_ROW_LENGTH),Tn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ha=I.getParameter(I.UNPACK_SKIP_PIXELS),Ve=I.getParameter(I.UNPACK_SKIP_ROWS),Li=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,_e.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_e.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,te),I.pixelStorei(I.UNPACK_SKIP_ROWS,qt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Xt);const ze=R.isDataArrayTexture||R.isData3DTexture,bn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const ln=Vt.get(R),pn=Vt.get(q),Sn=Vt.get(ln.__renderTarget),xi=Vt.get(pn.__renderTarget);Wt.bindFramebuffer(I.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let Ni=0;Ni<zt;Ni++)ze&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Vt.get(R).__webglTexture,j,Xt+Ni),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Vt.get(q).__webglTexture,Tt,We+Ni)),I.blitFramebuffer(te,qt,Ct,wt,de,Ee,Ct,wt,I.DEPTH_BUFFER_BIT,I.NEAREST);Wt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||Vt.has(R)){const ln=Vt.get(R),pn=Vt.get(q);Wt.bindFramebuffer(I.READ_FRAMEBUFFER,$o),Wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ui);for(let Sn=0;Sn<zt;Sn++)ze?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ln.__webglTexture,j,Xt+Sn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ln.__webglTexture,j),bn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,pn.__webglTexture,Tt,We+Sn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,pn.__webglTexture,Tt),j!==0?I.blitFramebuffer(te,qt,Ct,wt,de,Ee,Ct,wt,I.COLOR_BUFFER_BIT,I.NEAREST):bn?I.copyTexSubImage3D(je,Tt,de,Ee,We+Sn,te,qt,Ct,wt):I.copyTexSubImage2D(je,Tt,de,Ee,te,qt,Ct,wt);Wt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else bn?R.isDataTexture||R.isData3DTexture?I.texSubImage3D(je,Tt,de,Ee,We,Ct,wt,zt,ve,Yt,_e.data):q.isCompressedArrayTexture?I.compressedTexSubImage3D(je,Tt,de,Ee,We,Ct,wt,zt,ve,_e.data):I.texSubImage3D(je,Tt,de,Ee,We,Ct,wt,zt,ve,Yt,_e):R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Tt,de,Ee,Ct,wt,ve,Yt,_e.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Tt,de,Ee,_e.width,_e.height,ve,_e.data):I.texSubImage2D(I.TEXTURE_2D,Tt,de,Ee,Ct,wt,ve,Yt,_e);I.pixelStorei(I.UNPACK_ROW_LENGTH,ye),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Tn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ha),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ve),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Li),Tt===0&&q.generateMipmaps&&I.generateMipmap(je),Wt.unbindTexture()},this.copyTextureToTexture3D=function(R,q,it=null,at=null,j=0){return Bu('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,q,it,at,j)},this.initRenderTarget=function(R){Vt.get(R).__webglFramebuffer===void 0&&L.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),Wt.unbindTexture()},this.resetState=function(){V=0,z=0,W=null,Wt.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return na}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=be._getDrawingBufferColorSpace(t),i.unpackColorSpace=be._getUnpackColorSpace()}}const lR=()=>{const s=ht.useRef(null);return ht.useEffect(()=>{const t=new Id,i=new Fn(75,window.innerWidth/window.innerHeight,.1,1e3),r=new Hd({alpha:!0});r.setClearColor(0,0),r.setSize(window.innerWidth,window.innerHeight),r.domElement.style.position="absolute",r.domElement.style.top="0",r.domElement.style.left="0",r.domElement.style.zIndex="-1",s.current instanceof HTMLElement&&!s.current.hasChildNodes()&&s.current.appendChild(r.domElement);const l=new qa,u=new Zo({color:65280}),h=new li(l,u);t.add(h),i.position.z=5;const d=()=>{h.rotation.x+=.01,h.rotation.y+=.01,r.render(t,i),requestAnimationFrame(d)};return d(),()=>{s.current&&s.current.removeChild(r.domElement)}},[]),It.jsx("div",{ref:s})},uR=()=>It.jsxs("div",{style:{fontFamily:Us},children:[It.jsx("h2",{children:"Projects"}),It.jsx("p",{children:"Explore my projects here!"}),It.jsx(lR,{})]}),cR=()=>It.jsxs("div",{style:{fontFamily:Us},children:[It.jsx("h2",{children:"Art"}),It.jsx("p",{children:"Discover my art portfolio!"})]}),fR=()=>It.jsxs("div",{style:{fontFamily:Us},children:[It.jsx("h2",{children:"Writing"}),It.jsx("p",{children:"Read my writings and articles!"})]}),hR=()=>It.jsxs("div",{style:{fontFamily:Us},children:[It.jsx("h2",{children:"Contact"}),It.jsx("p",{children:"Get in touch with me!"})]}),dR=()=>{const s=ht.useRef(null);return ht.useEffect(()=>{const t=new Id,i=new Fn(75,window.innerWidth/window.innerHeight,.1,1e3),r=new Hd({alpha:!0});r.setClearColor(0,0),r.setSize(window.innerWidth,window.innerHeight),r.domElement.style.position="absolute",r.domElement.style.top="0",r.domElement.style.left="0",r.domElement.style.zIndex="-1",s.current instanceof HTMLElement&&!s.current.hasChildNodes()&&s.current.appendChild(r.domElement);const l=new qa,u=new Zo({color:65280}),h=new li(l,u);t.add(h),i.position.z=5;const d=()=>{h.rotation.x+=.01,h.rotation.y+=.01,r.render(t,i),requestAnimationFrame(d)};return d(),()=>{s.current&&s.current.removeChild(r.domElement)}},[]),It.jsx("div",{ref:s})},pR=()=>{const{width:s,height:t}=Vv(),i=ht.useRef(null);return ht.useEffect(()=>{const r=new Id,l=new Fn(75,window.innerWidth/window.innerHeight,.1,1e3),u=new Hd({alpha:!0});u.setClearColor(0,0),u.setSize(window.innerWidth,window.innerHeight),u.domElement.style.position="absolute",u.domElement.style.top="0",u.domElement.style.left="0",u.domElement.style.zIndex="-1",i.current instanceof HTMLElement&&!i.current.hasChildNodes()&&i.current.appendChild(u.domElement);const h=new qa,d=new Zo({color:65280}),m=new li(h,d);r.add(m),l.position.z=5;const p=()=>{m.rotation.x+=.01,m.rotation.y+=.01,u.render(r,l),requestAnimationFrame(p)};return p(),()=>{i.current&&i.current.removeChild(u.domElement)}},[]),console.log(s,"is the width; and the height is: ",t),It.jsxs(It.Fragment,{children:[It.jsx(dR,{}),It.jsx(ky,{children:It.jsx("div",{ref:i,style:{position:"relative",width:"100vw",height:"100vh"},children:It.jsxs("div",{style:{textAlign:"center"},children:[It.jsxs("header",{style:{marginBottom:"70px"},children:[It.jsx("h1",{style:{fontFamily:$y,fontSize:"6rem",fontWeight:"bold"},children:"Jay Crawford"}),It.jsxs("div",{style:{marginTop:"2em",marginBottom:"2em",fontFamily:"Cal Sans",color:"white",backgroundColor:"red",marginLeft:"-8px",width:"100vw",transform:"rotate(-2deg)",transformOrigin:"center"},children:[It.jsx("style",{children:`
            .under_construct_text {
              padding-left: 2em;
              padding-right: 2em;
              white-space: nowrap;
            }
            `}),s>w_&&It.jsxs(It.Fragment,{children:[It.jsx("span",{className:"under_construct_text",children:"Under Construction"}),It.jsx("span",{className:"under_construct_text",children:"Under Construction"}),It.jsx("span",{className:"under_construct_text",children:"Under Construction"})]}),s<=w_&&It.jsxs(It.Fragment,{children:[It.jsx("span",{className:"under_construct_text",children:"Under Construction"}),It.jsx("span",{className:"under_construct_text",children:"Under Construction"})]})]}),"            ",It.jsx("p",{style:{fontFamily:tM,fontSize:"2rem",color:"#555"},children:"Interdisciplinary Creative & Programmer"})]}),It.jsx("nav",{style:{marginBottom:"50px",fontFamily:Us},children:It.jsxs("ul",{style:{listStyle:"none",padding:0,display:"flex",justifyContent:"center",gap:"20px"},children:[It.jsx("li",{children:It.jsx("a",{href:"#/about",style:{textDecoration:"none",color:"#007BFF"},children:"About"})}),It.jsx("li",{children:It.jsx("a",{href:"#/projects",style:{textDecoration:"none",color:"#007BFF"},children:"Projects"})}),It.jsx("li",{children:It.jsx("a",{href:"#/art",style:{textDecoration:"none",color:"#007BFF"},children:"Art"})}),It.jsx("li",{children:It.jsx("a",{href:"#/writing",style:{textDecoration:"none",color:"#007BFF"},children:"Writing"})}),It.jsx("li",{children:It.jsx("a",{href:"#/contact",style:{textDecoration:"none",color:"#007BFF"},children:"Contact"})})]})}),It.jsx("main",{children:It.jsxs(xy,{children:[It.jsx(ys,{path:"/about",element:It.jsx(eM,{})}),It.jsx(ys,{path:"/projects",element:It.jsx(uR,{})}),It.jsx(ys,{path:"/art",element:It.jsx(cR,{})}),It.jsx(ys,{path:"/writing",element:It.jsx(fR,{})}),It.jsx(ys,{path:"/contact",element:It.jsx(hR,{})})]})})]})})})]})};CS.createRoot(document.getElementById("root")).render(It.jsx(ht.StrictMode,{children:It.jsx(pR,{})}));
