(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();var Th={exports:{}},Wo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yv;function dS(){if(Yv)return Wo;Yv=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:a,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Wo.Fragment=e,Wo.jsx=n,Wo.jsxs=n,Wo}var Zv;function pS(){return Zv||(Zv=1,Th.exports=dS()),Th.exports}var M=pS(),Ah={exports:{}},rt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kv;function mS(){if(Kv)return rt;Kv=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function x(P){return P===null||typeof P!="object"?null:(P=_&&P[_]||P["@@iterator"],typeof P=="function"?P:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,w={};function y(P,ee,ye){this.props=P,this.context=ee,this.refs=w,this.updater=ye||S}y.prototype.isReactComponent={},y.prototype.setState=function(P,ee){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,ee,"setState")},y.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function v(){}v.prototype=y.prototype;function L(P,ee,ye){this.props=P,this.context=ee,this.refs=w,this.updater=ye||S}var D=L.prototype=new v;D.constructor=L,b(D,y.prototype),D.isPureReactComponent=!0;var U=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function I(P,ee,ye,Ee,J,me){return ye=me.ref,{$$typeof:a,type:P,key:ee,ref:ye!==void 0?ye:null,props:me}}function W(P,ee){return I(P.type,ee,void 0,void 0,void 0,P.props)}function N(P){return typeof P=="object"&&P!==null&&P.$$typeof===a}function C(P){var ee={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(ye){return ee[ye]})}var k=/\/+/g;function ce(P,ee){return typeof P=="object"&&P!==null&&P.key!=null?C(""+P.key):ee.toString(36)}function oe(){}function xe(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(oe,oe):(P.status="pending",P.then(function(ee){P.status==="pending"&&(P.status="fulfilled",P.value=ee)},function(ee){P.status==="pending"&&(P.status="rejected",P.reason=ee)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function pe(P,ee,ye,Ee,J){var me=typeof P;(me==="undefined"||me==="boolean")&&(P=null);var Se=!1;if(P===null)Se=!0;else switch(me){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(P.$$typeof){case a:case e:Se=!0;break;case g:return Se=P._init,pe(Se(P._payload),ee,ye,Ee,J)}}if(Se)return J=J(P),Se=Ee===""?"."+ce(P,0):Ee,U(J)?(ye="",Se!=null&&(ye=Se.replace(k,"$&/")+"/"),pe(J,ee,ye,"",function(lt){return lt})):J!=null&&(N(J)&&(J=W(J,ye+(J.key==null||P&&P.key===J.key?"":(""+J.key).replace(k,"$&/")+"/")+Se)),ee.push(J)),1;Se=0;var we=Ee===""?".":Ee+":";if(U(P))for(var Ne=0;Ne<P.length;Ne++)Ee=P[Ne],me=we+ce(Ee,Ne),Se+=pe(Ee,ee,ye,me,J);else if(Ne=x(P),typeof Ne=="function")for(P=Ne.call(P),Ne=0;!(Ee=P.next()).done;)Ee=Ee.value,me=we+ce(Ee,Ne++),Se+=pe(Ee,ee,ye,me,J);else if(me==="object"){if(typeof P.then=="function")return pe(xe(P),ee,ye,Ee,J);throw ee=String(P),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return Se}function z(P,ee,ye){if(P==null)return P;var Ee=[],J=0;return pe(P,Ee,"","",function(me){return ee.call(ye,me,J++)}),Ee}function K(P){if(P._status===-1){var ee=P._result;ee=ee(),ee.then(function(ye){(P._status===0||P._status===-1)&&(P._status=1,P._result=ye)},function(ye){(P._status===0||P._status===-1)&&(P._status=2,P._result=ye)}),P._status===-1&&(P._status=0,P._result=ee)}if(P._status===1)return P._result.default;throw P._result}var Y=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)};function Me(){}return rt.Children={map:z,forEach:function(P,ee,ye){z(P,function(){ee.apply(this,arguments)},ye)},count:function(P){var ee=0;return z(P,function(){ee++}),ee},toArray:function(P){return z(P,function(ee){return ee})||[]},only:function(P){if(!N(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},rt.Component=y,rt.Fragment=n,rt.Profiler=l,rt.PureComponent=L,rt.StrictMode=s,rt.Suspense=p,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,rt.__COMPILER_RUNTIME={__proto__:null,c:function(P){return F.H.useMemoCache(P)}},rt.cache=function(P){return function(){return P.apply(null,arguments)}},rt.cloneElement=function(P,ee,ye){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Ee=b({},P.props),J=P.key,me=void 0;if(ee!=null)for(Se in ee.ref!==void 0&&(me=void 0),ee.key!==void 0&&(J=""+ee.key),ee)!G.call(ee,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&ee.ref===void 0||(Ee[Se]=ee[Se]);var Se=arguments.length-2;if(Se===1)Ee.children=ye;else if(1<Se){for(var we=Array(Se),Ne=0;Ne<Se;Ne++)we[Ne]=arguments[Ne+2];Ee.children=we}return I(P.type,J,void 0,void 0,me,Ee)},rt.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},rt.createElement=function(P,ee,ye){var Ee,J={},me=null;if(ee!=null)for(Ee in ee.key!==void 0&&(me=""+ee.key),ee)G.call(ee,Ee)&&Ee!=="key"&&Ee!=="__self"&&Ee!=="__source"&&(J[Ee]=ee[Ee]);var Se=arguments.length-2;if(Se===1)J.children=ye;else if(1<Se){for(var we=Array(Se),Ne=0;Ne<Se;Ne++)we[Ne]=arguments[Ne+2];J.children=we}if(P&&P.defaultProps)for(Ee in Se=P.defaultProps,Se)J[Ee]===void 0&&(J[Ee]=Se[Ee]);return I(P,me,void 0,void 0,null,J)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(P){return{$$typeof:h,render:P}},rt.isValidElement=N,rt.lazy=function(P){return{$$typeof:g,_payload:{_status:-1,_result:P},_init:K}},rt.memo=function(P,ee){return{$$typeof:m,type:P,compare:ee===void 0?null:ee}},rt.startTransition=function(P){var ee=F.T,ye={};F.T=ye;try{var Ee=P(),J=F.S;J!==null&&J(ye,Ee),typeof Ee=="object"&&Ee!==null&&typeof Ee.then=="function"&&Ee.then(Me,Y)}catch(me){Y(me)}finally{F.T=ee}},rt.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},rt.use=function(P){return F.H.use(P)},rt.useActionState=function(P,ee,ye){return F.H.useActionState(P,ee,ye)},rt.useCallback=function(P,ee){return F.H.useCallback(P,ee)},rt.useContext=function(P){return F.H.useContext(P)},rt.useDebugValue=function(){},rt.useDeferredValue=function(P,ee){return F.H.useDeferredValue(P,ee)},rt.useEffect=function(P,ee,ye){var Ee=F.H;if(typeof ye=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Ee.useEffect(P,ee)},rt.useId=function(){return F.H.useId()},rt.useImperativeHandle=function(P,ee,ye){return F.H.useImperativeHandle(P,ee,ye)},rt.useInsertionEffect=function(P,ee){return F.H.useInsertionEffect(P,ee)},rt.useLayoutEffect=function(P,ee){return F.H.useLayoutEffect(P,ee)},rt.useMemo=function(P,ee){return F.H.useMemo(P,ee)},rt.useOptimistic=function(P,ee){return F.H.useOptimistic(P,ee)},rt.useReducer=function(P,ee,ye){return F.H.useReducer(P,ee,ye)},rt.useRef=function(P){return F.H.useRef(P)},rt.useState=function(P){return F.H.useState(P)},rt.useSyncExternalStore=function(P,ee,ye){return F.H.useSyncExternalStore(P,ee,ye)},rt.useTransition=function(){return F.H.useTransition()},rt.version="19.1.0",rt}var Qv;function np(){return Qv||(Qv=1,Ah.exports=mS()),Ah.exports}var he=np(),wh={exports:{}},qo={},Rh={exports:{}},Ch={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jv;function gS(){return Jv||(Jv=1,function(a){function e(z,K){var Y=z.length;z.push(K);e:for(;0<Y;){var Me=Y-1>>>1,P=z[Me];if(0<l(P,K))z[Me]=K,z[Y]=P,Y=Me;else break e}}function n(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var K=z[0],Y=z.pop();if(Y!==K){z[0]=Y;e:for(var Me=0,P=z.length,ee=P>>>1;Me<ee;){var ye=2*(Me+1)-1,Ee=z[ye],J=ye+1,me=z[J];if(0>l(Ee,Y))J<P&&0>l(me,Ee)?(z[Me]=me,z[J]=Y,Me=J):(z[Me]=Ee,z[ye]=Y,Me=ye);else if(J<P&&0>l(me,Y))z[Me]=me,z[J]=Y,Me=J;else break e}}return K}function l(z,K){var Y=z.sortIndex-K.sortIndex;return Y!==0?Y:z.id-K.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();a.unstable_now=function(){return f.now()-h}}var p=[],m=[],g=1,_=null,x=3,S=!1,b=!1,w=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function U(z){for(var K=n(m);K!==null;){if(K.callback===null)s(m);else if(K.startTime<=z)s(m),K.sortIndex=K.expirationTime,e(p,K);else break;K=n(m)}}function F(z){if(w=!1,U(z),!b)if(n(p)!==null)b=!0,G||(G=!0,ce());else{var K=n(m);K!==null&&pe(F,K.startTime-z)}}var G=!1,I=-1,W=5,N=-1;function C(){return y?!0:!(a.unstable_now()-N<W)}function k(){if(y=!1,G){var z=a.unstable_now();N=z;var K=!0;try{e:{b=!1,w&&(w=!1,L(I),I=-1),S=!0;var Y=x;try{t:{for(U(z),_=n(p);_!==null&&!(_.expirationTime>z&&C());){var Me=_.callback;if(typeof Me=="function"){_.callback=null,x=_.priorityLevel;var P=Me(_.expirationTime<=z);if(z=a.unstable_now(),typeof P=="function"){_.callback=P,U(z),K=!0;break t}_===n(p)&&s(p),U(z)}else s(p);_=n(p)}if(_!==null)K=!0;else{var ee=n(m);ee!==null&&pe(F,ee.startTime-z),K=!1}}break e}finally{_=null,x=Y,S=!1}K=void 0}}finally{K?ce():G=!1}}}var ce;if(typeof D=="function")ce=function(){D(k)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,xe=oe.port2;oe.port1.onmessage=k,ce=function(){xe.postMessage(null)}}else ce=function(){v(k,0)};function pe(z,K){I=v(function(){z(a.unstable_now())},K)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(z){z.callback=null},a.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<z?Math.floor(1e3/z):5},a.unstable_getCurrentPriorityLevel=function(){return x},a.unstable_next=function(z){switch(x){case 1:case 2:case 3:var K=3;break;default:K=x}var Y=x;x=K;try{return z()}finally{x=Y}},a.unstable_requestPaint=function(){y=!0},a.unstable_runWithPriority=function(z,K){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Y=x;x=z;try{return K()}finally{x=Y}},a.unstable_scheduleCallback=function(z,K,Y){var Me=a.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Me+Y:Me):Y=Me,z){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=Y+P,z={id:g++,callback:K,priorityLevel:z,startTime:Y,expirationTime:P,sortIndex:-1},Y>Me?(z.sortIndex=Y,e(m,z),n(p)===null&&z===n(m)&&(w?(L(I),I=-1):w=!0,pe(F,Y-Me))):(z.sortIndex=P,e(p,z),b||S||(b=!0,G||(G=!0,ce()))),z},a.unstable_shouldYield=C,a.unstable_wrapCallback=function(z){var K=x;return function(){var Y=x;x=K;try{return z.apply(this,arguments)}finally{x=Y}}}}(Ch)),Ch}var $v;function vS(){return $v||($v=1,Rh.exports=gS()),Rh.exports}var Dh={exports:{}},On={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e0;function _S(){if(e0)return On;e0=1;var a=np();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:p,containerInfo:m,implementation:g}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,On.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return c(p,m,null,g)},On.flushSync=function(p){var m=f.T,g=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=m,s.p=g,s.d.f()}},On.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},On.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},On.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,_=h(g,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:S}):g==="script"&&s.d.X(p,{crossOrigin:_,integrity:x,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},On.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},On.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,_=h(g,m.crossOrigin);s.d.L(p,g,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},On.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=h(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},On.requestFormReset=function(p){s.d.r(p)},On.unstable_batchedUpdates=function(p,m){return p(m)},On.useFormState=function(p,m,g){return f.H.useFormState(p,m,g)},On.useFormStatus=function(){return f.H.useHostTransitionStatus()},On.version="19.1.0",On}var t0;function xS(){if(t0)return Dh.exports;t0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Dh.exports=_S(),Dh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n0;function yS(){if(n0)return qo;n0=1;var a=vS(),e=np(),n=xS();function s(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,r=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(r=i.return),t=i.return;while(t)}return i.tag===3?r:null}function f(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(c(t)!==t)throw Error(s(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(s(188));return i!==t?null:t}for(var r=t,o=i;;){var u=r.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){r=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===r)return h(u),t;if(d===o)return h(u),i;d=d.sibling}throw Error(s(188))}if(r.return!==o.return)r=u,o=d;else{for(var E=!1,T=u.child;T;){if(T===r){E=!0,r=u,o=d;break}if(T===o){E=!0,o=u,r=d;break}T=T.sibling}if(!E){for(T=d.child;T;){if(T===r){E=!0,r=d,o=u;break}if(T===o){E=!0,o=d,r=u;break}T=T.sibling}if(!E)throw Error(s(189))}}if(r.alternate!==o)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?t:i}function m(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=m(t),i!==null)return i;t=t.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),D=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function ce(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Symbol.for("react.client.reference");function xe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===oe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case y:return"Profiler";case w:return"StrictMode";case F:return"Suspense";case G:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case S:return"Portal";case D:return(t.displayName||"Context")+".Provider";case L:return(t._context.displayName||"Context")+".Consumer";case U:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return i=t.displayName||null,i!==null?i:xe(t.type)||"Memo";case W:i=t._payload,t=t._init;try{return xe(t(i))}catch{}}return null}var pe=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},Me=[],P=-1;function ee(t){return{current:t}}function ye(t){0>P||(t.current=Me[P],Me[P]=null,P--)}function Ee(t,i){P++,Me[P]=t.current,t.current=i}var J=ee(null),me=ee(null),Se=ee(null),we=ee(null);function Ne(t,i){switch(Ee(Se,i),Ee(me,t),Ee(J,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?Ev(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=Ev(i),t=Mv(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ye(J),Ee(J,t)}function lt(){ye(J),ye(me),ye(Se)}function Ke(t){t.memoizedState!==null&&Ee(we,t);var i=J.current,r=Mv(i,t.type);i!==r&&(Ee(me,t),Ee(J,r))}function jt(t){me.current===t&&(ye(J),ye(me)),we.current===t&&(ye(we),Go._currentValue=Y)}var Gt=Object.prototype.hasOwnProperty,ht=a.unstable_scheduleCallback,H=a.unstable_cancelCallback,kn=a.unstable_shouldYield,_t=a.unstable_requestPaint,it=a.unstable_now,Xe=a.unstable_getCurrentPriorityLevel,Ot=a.unstable_ImmediatePriority,Ve=a.unstable_UserBlockingPriority,O=a.unstable_NormalPriority,A=a.unstable_LowPriority,te=a.unstable_IdlePriority,ge=a.log,be=a.unstable_setDisableYieldValue,fe=null,Pe=null;function Re(t){if(typeof ge=="function"&&be(t),Pe&&typeof Pe.setStrictMode=="function")try{Pe.setStrictMode(fe,t)}catch{}}var Ge=Math.clz32?Math.clz32:Fe,$e=Math.log,Ae=Math.LN2;function Fe(t){return t>>>=0,t===0?32:31-($e(t)/Ae|0)|0}var Ye=256,Qe=4194304;function Be(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ut(t,i,r){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,E=t.pingedLanes;t=t.warmLanes;var T=o&134217727;return T!==0?(o=T&~d,o!==0?u=Be(o):(E&=T,E!==0?u=Be(E):r||(r=T&~t,r!==0&&(u=Be(r))))):(T=o&~d,T!==0?u=Be(T):E!==0?u=Be(E):r||(r=o&~t,r!==0&&(u=Be(r)))),u===0?0:i!==0&&i!==u&&(i&d)===0&&(d=u&-u,r=i&-i,d>=r||d===32&&(r&4194048)!==0)?i:u}function nt(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Pt(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function j(){var t=Ye;return Ye<<=1,(Ye&4194048)===0&&(Ye=256),t}function Le(){var t=Qe;return Qe<<=1,(Qe&62914560)===0&&(Qe=4194304),t}function le(t){for(var i=[],r=0;31>r;r++)i.push(t);return i}function ve(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ze(t,i,r,o,u,d){var E=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var T=t.entanglements,B=t.expirationTimes,$=t.hiddenUpdates;for(r=E&~r;0<r;){var ue=31-Ge(r),_e=1<<ue;T[ue]=0,B[ue]=-1;var ne=$[ue];if(ne!==null)for($[ue]=null,ue=0;ue<ne.length;ue++){var ie=ne[ue];ie!==null&&(ie.lane&=-536870913)}r&=~_e}o!==0&&Oe(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(E&~i))}function Oe(t,i,r){t.pendingLanes|=i,t.suspendedLanes&=~i;var o=31-Ge(i);t.entangledLanes|=i,t.entanglements[o]=t.entanglements[o]|1073741824|r&4194090}function at(t,i){var r=t.entangledLanes|=i;for(t=t.entanglements;r;){var o=31-Ge(r),u=1<<o;u&i|t[o]&i&&(t[o]|=i),r&=~u}}function Xt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function rn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function bt(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:Vv(t.type))}function $n(t,i){var r=K.p;try{return K.p=t,i()}finally{K.p=r}}var vn=Math.random().toString(36).slice(2),fn="__reactFiber$"+vn,bn="__reactProps$"+vn,jn="__reactContainer$"+vn,hr="__reactEvents$"+vn,yl="__reactListeners$"+vn,Sl="__reactHandles$"+vn,dr="__reactResources$"+vn,Aa="__reactMarker$"+vn;function wa(t){delete t[fn],delete t[bn],delete t[hr],delete t[yl],delete t[Sl]}function Wi(t){var i=t[fn];if(i)return i;for(var r=t.parentNode;r;){if(i=r[jn]||r[fn]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(t=wv(t);t!==null;){if(r=t[fn])return r;t=wv(t)}return i}t=r,r=t.parentNode}return null}function qi(t){if(t=t[fn]||t[jn]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function pr(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(s(33))}function Ra(t){var i=t[dr];return i||(i=t[dr]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function sn(t){t[Aa]=!0}var El=new Set,Ml={};function Yi(t,i){R(t,i),R(t+"Capture",i)}function R(t,i){for(Ml[t]=i,t=0;t<i.length;t++)El.add(i[t])}var q=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ae={},re={};function Z(t){return Gt.call(re,t)?!0:Gt.call(ae,t)?!1:q.test(t)?re[t]=!0:(ae[t]=!0,!1)}function Te(t,i,r){if(Z(i))if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+r)}}function Ce(t,i,r){if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+r)}}function De(t,i,r,o){if(o===null)t.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(i,r,""+o)}}var Ie,et;function We(t){if(Ie===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);Ie=i&&i[1]||"",et=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ie+t+et}var je=!1;function pt(t,i){if(!t||je)return"";je=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(ie){var ne=ie}Reflect.construct(t,[],_e)}else{try{_e.call()}catch(ie){ne=ie}t.call(_e.prototype)}}else{try{throw Error()}catch(ie){ne=ie}(_e=t())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(ie){if(ie&&ne&&typeof ie.stack=="string")return[ie.stack,ne.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),E=d[0],T=d[1];if(E&&T){var B=E.split(`
`),$=T.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===$.length)for(o=B.length-1,u=$.length-1;1<=o&&0<=u&&B[o]!==$[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==$[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==$[u]){var ue=`
`+B[o].replace(" at new "," at ");return t.displayName&&ue.includes("<anonymous>")&&(ue=ue.replace("<anonymous>",t.displayName)),ue}while(1<=o&&0<=u);break}}}finally{je=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?We(r):""}function Tt(t){switch(t.tag){case 26:case 27:case 5:return We(t.type);case 16:return We("Lazy");case 13:return We("Suspense");case 19:return We("SuspenseList");case 0:case 15:return pt(t.type,!1);case 11:return pt(t.type.render,!1);case 1:return pt(t.type,!0);case 31:return We("Activity");default:return""}}function Zt(t){try{var i="";do i+=Tt(t),t=t.return;while(t);return i}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function xt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function yt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function qe(t){var i=yt(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),o=""+t[i];if(!t.hasOwnProperty(i)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,d=r.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(E){o=""+E,d.call(this,E)}}),Object.defineProperty(t,i,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(E){o=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function $t(t){t._valueTracker||(t._valueTracker=qe(t))}function Mt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var r=i.getValue(),o="";return t&&(o=yt(t)?t.checked?"true":"false":t.value),t=o,t!==r?(i.setValue(t),!0):!1}function Un(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ca=/[\n"\\]/g;function Wt(t){return t.replace(Ca,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Zi(t,i,r,o,u,d,E,T){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),i!=null?E==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+xt(i)):t.value!==""+xt(i)&&(t.value=""+xt(i)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),i!=null?Nn(t,E,xt(i)):r!=null?Nn(t,E,xt(r)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+xt(T):t.removeAttribute("name")}function Vt(t,i,r,o,u,d,E,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||r!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;r=r!=null?""+xt(r):"",i=i!=null?""+xt(i):r,T||i===t.value||(t.value=i),t.defaultValue=i}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=T?t.checked:!!o,t.defaultChecked=!!o,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E)}function Nn(t,i,r){i==="number"&&Un(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function hn(t,i,r,o){if(t=t.options,i){i={};for(var u=0;u<r.length;u++)i["$"+r[u]]=!0;for(r=0;r<t.length;r++)u=i.hasOwnProperty("$"+t[r].value),t[r].selected!==u&&(t[r].selected=u),u&&o&&(t[r].defaultSelected=!0)}else{for(r=""+xt(r),i=null,u=0;u<t.length;u++){if(t[u].value===r){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function _n(t,i,r){if(i!=null&&(i=""+xt(i),i!==t.value&&(t.value=i),r==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=r!=null?""+xt(r):""}function Tn(t,i,r,o){if(i==null){if(o!=null){if(r!=null)throw Error(s(92));if(pe(o)){if(1<o.length)throw Error(s(93));o=o[0]}r=o}r==null&&(r=""),i=r}r=xt(i),t.defaultValue=r,o=t.textContent,o===r&&o!==""&&o!==null&&(t.value=o)}function Ui(t,i){if(i){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=i;return}}t.textContent=i}var Ki=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ep(t,i,r){var o=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":o?t.setProperty(i,r):typeof r!="number"||r===0||Ki.has(i)?i==="float"?t.cssFloat=r:t[i]=(""+r).trim():t[i]=r+"px"}function Mp(t,i,r){if(i!=null&&typeof i!="object")throw Error(s(62));if(t=t.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in i)o=i[u],i.hasOwnProperty(u)&&r[u]!==o&&Ep(t,u,o)}else for(var d in i)i.hasOwnProperty(d)&&Ep(t,d,i[d])}function Mu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bl(t){return hx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var bu=null;function Tu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qr=null,Yr=null;function bp(t){var i=qi(t);if(i&&(t=i.stateNode)){var r=t[bn]||null;e:switch(t=i.stateNode,i.type){case"input":if(Zi(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Wt(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var o=r[i];if(o!==t&&o.form===t.form){var u=o[bn]||null;if(!u)throw Error(s(90));Zi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<r.length;i++)o=r[i],o.form===t.form&&Mt(o)}break e;case"textarea":_n(t,r.value,r.defaultValue);break e;case"select":i=r.value,i!=null&&hn(t,!!r.multiple,i,!1)}}}var Au=!1;function Tp(t,i,r){if(Au)return t(i,r);Au=!0;try{var o=t(i);return o}finally{if(Au=!1,(qr!==null||Yr!==null)&&(cc(),qr&&(i=qr,t=Yr,Yr=qr=null,bp(i),t)))for(i=0;i<t.length;i++)bp(t[i])}}function $s(t,i){var r=t.stateNode;if(r===null)return null;var o=r[bn]||null;if(o===null)return null;r=o[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(s(231,i,typeof r));return r}var Qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wu=!1;if(Qi)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){wu=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{wu=!1}var Da=null,Ru=null,Tl=null;function Ap(){if(Tl)return Tl;var t,i=Ru,r=i.length,o,u="value"in Da?Da.value:Da.textContent,d=u.length;for(t=0;t<r&&i[t]===u[t];t++);var E=r-t;for(o=1;o<=E&&i[r-o]===u[d-o];o++);return Tl=u.slice(t,1<o?1-o:void 0)}function Al(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function wl(){return!0}function wp(){return!1}function Xn(t){function i(r,o,u,d,E){this._reactName=r,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=E,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(r=t[T],this[T]=r?r(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?wl:wp,this.isPropagationStopped=wp,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=wl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=wl)},persist:function(){},isPersistent:wl}),i}var mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rl=Xn(mr),to=g({},mr,{view:0,detail:0}),dx=Xn(to),Cu,Du,no,Cl=g({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==no&&(no&&t.type==="mousemove"?(Cu=t.screenX-no.screenX,Du=t.screenY-no.screenY):Du=Cu=0,no=t),Cu)},movementY:function(t){return"movementY"in t?t.movementY:Du}}),Rp=Xn(Cl),px=g({},Cl,{dataTransfer:0}),mx=Xn(px),gx=g({},to,{relatedTarget:0}),Uu=Xn(gx),vx=g({},mr,{animationName:0,elapsedTime:0,pseudoElement:0}),_x=Xn(vx),xx=g({},mr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yx=Xn(xx),Sx=g({},mr,{data:0}),Cp=Xn(Sx),Ex={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tx(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=bx[t])?!!i[t]:!1}function Nu(){return Tx}var Ax=g({},to,{key:function(t){if(t.key){var i=Ex[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Mx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nu,charCode:function(t){return t.type==="keypress"?Al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wx=Xn(Ax),Rx=g({},Cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dp=Xn(Rx),Cx=g({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nu}),Dx=Xn(Cx),Ux=g({},mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nx=Xn(Ux),Lx=g({},Cl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ox=Xn(Lx),Px=g({},mr,{newState:0,oldState:0}),Bx=Xn(Px),zx=[9,13,27,32],Lu=Qi&&"CompositionEvent"in window,io=null;Qi&&"documentMode"in document&&(io=document.documentMode);var Ix=Qi&&"TextEvent"in window&&!io,Up=Qi&&(!Lu||io&&8<io&&11>=io),Np=" ",Lp=!1;function Op(t,i){switch(t){case"keyup":return zx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zr=!1;function Fx(t,i){switch(t){case"compositionend":return Pp(i);case"keypress":return i.which!==32?null:(Lp=!0,Np);case"textInput":return t=i.data,t===Np&&Lp?null:t;default:return null}}function Hx(t,i){if(Zr)return t==="compositionend"||!Lu&&Op(t,i)?(t=Ap(),Tl=Ru=Da=null,Zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Up&&i.locale!=="ko"?null:i.data;default:return null}}var Gx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bp(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Gx[t.type]:i==="textarea"}function zp(t,i,r,o){qr?Yr?Yr.push(o):Yr=[o]:qr=o,i=mc(i,"onChange"),0<i.length&&(r=new Rl("onChange","change",null,r,o),t.push({event:r,listeners:i}))}var ao=null,ro=null;function Vx(t){vv(t,0)}function Dl(t){var i=pr(t);if(Mt(i))return t}function Ip(t,i){if(t==="change")return i}var Fp=!1;if(Qi){var Ou;if(Qi){var Pu="oninput"in document;if(!Pu){var Hp=document.createElement("div");Hp.setAttribute("oninput","return;"),Pu=typeof Hp.oninput=="function"}Ou=Pu}else Ou=!1;Fp=Ou&&(!document.documentMode||9<document.documentMode)}function Gp(){ao&&(ao.detachEvent("onpropertychange",Vp),ro=ao=null)}function Vp(t){if(t.propertyName==="value"&&Dl(ro)){var i=[];zp(i,ro,t,Tu(t)),Tp(Vx,i)}}function kx(t,i,r){t==="focusin"?(Gp(),ao=i,ro=r,ao.attachEvent("onpropertychange",Vp)):t==="focusout"&&Gp()}function jx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Dl(ro)}function Xx(t,i){if(t==="click")return Dl(i)}function Wx(t,i){if(t==="input"||t==="change")return Dl(i)}function qx(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ei=typeof Object.is=="function"?Object.is:qx;function so(t,i){if(ei(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var r=Object.keys(t),o=Object.keys(i);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var u=r[o];if(!Gt.call(i,u)||!ei(t[u],i[u]))return!1}return!0}function kp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jp(t,i){var r=kp(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=i&&o>=i)return{node:r,offset:i-t};t=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=kp(r)}}function Xp(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Xp(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Wp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Un(t.document);i instanceof t.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)t=i.contentWindow;else break;i=Un(t.document)}return i}function Bu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var Yx=Qi&&"documentMode"in document&&11>=document.documentMode,Kr=null,zu=null,oo=null,Iu=!1;function qp(t,i,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Iu||Kr==null||Kr!==Un(o)||(o=Kr,"selectionStart"in o&&Bu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),oo&&so(oo,o)||(oo=o,o=mc(zu,"onSelect"),0<o.length&&(i=new Rl("onSelect","select",null,i,r),t.push({event:i,listeners:o}),i.target=Kr)))}function gr(t,i){var r={};return r[t.toLowerCase()]=i.toLowerCase(),r["Webkit"+t]="webkit"+i,r["Moz"+t]="moz"+i,r}var Qr={animationend:gr("Animation","AnimationEnd"),animationiteration:gr("Animation","AnimationIteration"),animationstart:gr("Animation","AnimationStart"),transitionrun:gr("Transition","TransitionRun"),transitionstart:gr("Transition","TransitionStart"),transitioncancel:gr("Transition","TransitionCancel"),transitionend:gr("Transition","TransitionEnd")},Fu={},Yp={};Qi&&(Yp=document.createElement("div").style,"AnimationEvent"in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),"TransitionEvent"in window||delete Qr.transitionend.transition);function vr(t){if(Fu[t])return Fu[t];if(!Qr[t])return t;var i=Qr[t],r;for(r in i)if(i.hasOwnProperty(r)&&r in Yp)return Fu[t]=i[r];return t}var Zp=vr("animationend"),Kp=vr("animationiteration"),Qp=vr("animationstart"),Zx=vr("transitionrun"),Kx=vr("transitionstart"),Qx=vr("transitioncancel"),Jp=vr("transitionend"),$p=new Map,Hu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Hu.push("scrollEnd");function Si(t,i){$p.set(t,i),Yi(i,[t])}var em=new WeakMap;function fi(t,i){if(typeof t=="object"&&t!==null){var r=em.get(t);return r!==void 0?r:(i={value:t,source:i,stack:Zt(i)},em.set(t,i),i)}return{value:t,source:i,stack:Zt(i)}}var hi=[],Jr=0,Gu=0;function Ul(){for(var t=Jr,i=Gu=Jr=0;i<t;){var r=hi[i];hi[i++]=null;var o=hi[i];hi[i++]=null;var u=hi[i];hi[i++]=null;var d=hi[i];if(hi[i++]=null,o!==null&&u!==null){var E=o.pending;E===null?u.next=u:(u.next=E.next,E.next=u),o.pending=u}d!==0&&tm(r,u,d)}}function Nl(t,i,r,o){hi[Jr++]=t,hi[Jr++]=i,hi[Jr++]=r,hi[Jr++]=o,Gu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Vu(t,i,r,o){return Nl(t,i,r,o),Ll(t)}function $r(t,i){return Nl(t,null,null,i),Ll(t)}function tm(t,i,r){t.lanes|=r;var o=t.alternate;o!==null&&(o.lanes|=r);for(var u=!1,d=t.return;d!==null;)d.childLanes|=r,o=d.alternate,o!==null&&(o.childLanes|=r),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&i!==null&&(u=31-Ge(r),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[i]:o.push(i),i.lane=r|536870912),d):null}function Ll(t){if(50<Lo)throw Lo=0,Zf=null,Error(s(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var es={};function Jx(t,i,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(t,i,r,o){return new Jx(t,i,r,o)}function ku(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ji(t,i){var r=t.alternate;return r===null?(r=ti(t.tag,i,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=i,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,i=t.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function nm(t,i){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,i=r.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Ol(t,i,r,o,u,d){var E=0;if(o=t,typeof t=="function")ku(t)&&(E=1);else if(typeof t=="string")E=eS(t,r,J.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case N:return t=ti(31,r,i,u),t.elementType=N,t.lanes=d,t;case b:return _r(r.children,u,d,i);case w:E=8,u|=24;break;case y:return t=ti(12,r,i,u|2),t.elementType=y,t.lanes=d,t;case F:return t=ti(13,r,i,u),t.elementType=F,t.lanes=d,t;case G:return t=ti(19,r,i,u),t.elementType=G,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case v:case D:E=10;break e;case L:E=9;break e;case U:E=11;break e;case I:E=14;break e;case W:E=16,o=null;break e}E=29,r=Error(s(130,t===null?"null":typeof t,"")),o=null}return i=ti(E,r,i,u),i.elementType=t,i.type=o,i.lanes=d,i}function _r(t,i,r,o){return t=ti(7,t,o,i),t.lanes=r,t}function ju(t,i,r){return t=ti(6,t,null,i),t.lanes=r,t}function Xu(t,i,r){return i=ti(4,t.children!==null?t.children:[],t.key,i),i.lanes=r,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var ts=[],ns=0,Pl=null,Bl=0,di=[],pi=0,xr=null,$i=1,ea="";function yr(t,i){ts[ns++]=Bl,ts[ns++]=Pl,Pl=t,Bl=i}function im(t,i,r){di[pi++]=$i,di[pi++]=ea,di[pi++]=xr,xr=t;var o=$i;t=ea;var u=32-Ge(o)-1;o&=~(1<<u),r+=1;var d=32-Ge(i)+u;if(30<d){var E=u-u%5;d=(o&(1<<E)-1).toString(32),o>>=E,u-=E,$i=1<<32-Ge(i)+u|r<<u|o,ea=d+t}else $i=1<<d|r<<u|o,ea=t}function Wu(t){t.return!==null&&(yr(t,1),im(t,1,0))}function qu(t){for(;t===Pl;)Pl=ts[--ns],ts[ns]=null,Bl=ts[--ns],ts[ns]=null;for(;t===xr;)xr=di[--pi],di[pi]=null,ea=di[--pi],di[pi]=null,$i=di[--pi],di[pi]=null}var Fn=null,en=null,Ct=!1,Sr=null,Ni=!1,Yu=Error(s(519));function Er(t){var i=Error(s(418,""));throw uo(fi(i,t)),Yu}function am(t){var i=t.stateNode,r=t.type,o=t.memoizedProps;switch(i[fn]=t,i[bn]=o,r){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(r=0;r<Po.length;r++)gt(Po[r],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":gt("invalid",i),Vt(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),$t(i);break;case"select":gt("invalid",i);break;case"textarea":gt("invalid",i),Tn(i,o.value,o.defaultValue,o.children),$t(i)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||o.suppressHydrationWarning===!0||Sv(i.textContent,r)?(o.popover!=null&&(gt("beforetoggle",i),gt("toggle",i)),o.onScroll!=null&&gt("scroll",i),o.onScrollEnd!=null&&gt("scrollend",i),o.onClick!=null&&(i.onclick=gc),i=!0):i=!1,i||Er(t)}function rm(t){for(Fn=t.return;Fn;)switch(Fn.tag){case 5:case 13:Ni=!1;return;case 27:case 3:Ni=!0;return;default:Fn=Fn.return}}function lo(t){if(t!==Fn)return!1;if(!Ct)return rm(t),Ct=!0,!1;var i=t.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||fh(t.type,t.memoizedProps)),r=!r),r&&en&&Er(t),rm(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(r=t.data,r==="/$"){if(i===0){en=Mi(t.nextSibling);break e}i--}else r!=="$"&&r!=="$!"&&r!=="$?"||i++;t=t.nextSibling}en=null}}else i===27?(i=en,Wa(t.type)?(t=mh,mh=null,en=t):en=i):en=Fn?Mi(t.stateNode.nextSibling):null;return!0}function co(){en=Fn=null,Ct=!1}function sm(){var t=Sr;return t!==null&&(Yn===null?Yn=t:Yn.push.apply(Yn,t),Sr=null),t}function uo(t){Sr===null?Sr=[t]:Sr.push(t)}var Zu=ee(null),Mr=null,ta=null;function Ua(t,i,r){Ee(Zu,i._currentValue),i._currentValue=r}function na(t){t._currentValue=Zu.current,ye(Zu)}function Ku(t,i,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),t===r)break;t=t.return}}function Qu(t,i,r,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var E=u.child;d=d.firstContext;e:for(;d!==null;){var T=d;d=u;for(var B=0;B<i.length;B++)if(T.context===i[B]){d.lanes|=r,T=d.alternate,T!==null&&(T.lanes|=r),Ku(d.return,r,t),o||(E=null);break e}d=T.next}}else if(u.tag===18){if(E=u.return,E===null)throw Error(s(341));E.lanes|=r,d=E.alternate,d!==null&&(d.lanes|=r),Ku(E,r,t),E=null}else E=u.child;if(E!==null)E.return=u;else for(E=u;E!==null;){if(E===t){E=null;break}if(u=E.sibling,u!==null){u.return=E.return,E=u;break}E=E.return}u=E}}function fo(t,i,r,o){t=null;for(var u=i,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var E=u.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var T=u.type;ei(u.pendingProps.value,E.value)||(t!==null?t.push(T):t=[T])}}else if(u===we.current){if(E=u.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Go):t=[Go])}u=u.return}t!==null&&Qu(i,t,r,o),i.flags|=262144}function zl(t){for(t=t.firstContext;t!==null;){if(!ei(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function br(t){Mr=t,ta=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ln(t){return om(Mr,t)}function Il(t,i){return Mr===null&&br(t),om(t,i)}function om(t,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},ta===null){if(t===null)throw Error(s(308));ta=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else ta=ta.next=i;return r}var $x=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(r,o){t.push(o)}};this.abort=function(){i.aborted=!0,t.forEach(function(r){return r()})}},ey=a.unstable_scheduleCallback,ty=a.unstable_NormalPriority,dn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ju(){return{controller:new $x,data:new Map,refCount:0}}function ho(t){t.refCount--,t.refCount===0&&ey(ty,function(){t.controller.abort()})}var po=null,$u=0,is=0,as=null;function ny(t,i){if(po===null){var r=po=[];$u=0,is=nh(),as={status:"pending",value:void 0,then:function(o){r.push(o)}}}return $u++,i.then(lm,lm),i}function lm(){if(--$u===0&&po!==null){as!==null&&(as.status="fulfilled");var t=po;po=null,is=0,as=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function iy(t,i){var r=[],o={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return t.then(function(){o.status="fulfilled",o.value=i;for(var u=0;u<r.length;u++)(0,r[u])(i)},function(u){for(o.status="rejected",o.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),o}var cm=z.S;z.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&ny(t,i),cm!==null&&cm(t,i)};var Tr=ee(null);function ef(){var t=Tr.current;return t!==null?t:qt.pooledCache}function Fl(t,i){i===null?Ee(Tr,Tr.current):Ee(Tr,i.pool)}function um(){var t=ef();return t===null?null:{parent:dn._currentValue,pool:t}}var mo=Error(s(460)),fm=Error(s(474)),Hl=Error(s(542)),tf={then:function(){}};function hm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Gl(){}function dm(t,i,r){switch(r=t[r],r===void 0?t.push(i):r!==i&&(i.then(Gl,Gl),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,mm(t),t;default:if(typeof i.status=="string")i.then(Gl,Gl);else{if(t=qt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=i,t.status="pending",t.then(function(o){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=o}},function(o){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,mm(t),t}throw go=i,mo}}var go=null;function pm(){if(go===null)throw Error(s(459));var t=go;return go=null,t}function mm(t){if(t===mo||t===Hl)throw Error(s(483))}var Na=!1;function nf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function af(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function La(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Oa(t,i,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Dt&2)!==0){var u=o.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),o.pending=i,i=Ll(t),tm(t,null,r),i}return Nl(t,o,i,r),Ll(t)}function vo(t,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var o=i.lanes;o&=t.pendingLanes,r|=o,i.lanes=r,at(t,r)}}function rf(t,i){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var u=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var E={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};d===null?u=d=E:d=d.next=E,r=r.next}while(r!==null);d===null?u=d=i:d=d.next=i}else u=d=i;r={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=i:t.next=i,r.lastBaseUpdate=i}var sf=!1;function _o(){if(sf){var t=as;if(t!==null)throw t}}function xo(t,i,r,o){sf=!1;var u=t.updateQueue;Na=!1;var d=u.firstBaseUpdate,E=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var B=T,$=B.next;B.next=null,E===null?d=$:E.next=$,E=B;var ue=t.alternate;ue!==null&&(ue=ue.updateQueue,T=ue.lastBaseUpdate,T!==E&&(T===null?ue.firstBaseUpdate=$:T.next=$,ue.lastBaseUpdate=B))}if(d!==null){var _e=u.baseState;E=0,ue=$=B=null,T=d;do{var ne=T.lane&-536870913,ie=ne!==T.lane;if(ie?(Et&ne)===ne:(o&ne)===ne){ne!==0&&ne===is&&(sf=!0),ue!==null&&(ue=ue.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var tt=t,Ze=T;ne=i;var It=r;switch(Ze.tag){case 1:if(tt=Ze.payload,typeof tt=="function"){_e=tt.call(It,_e,ne);break e}_e=tt;break e;case 3:tt.flags=tt.flags&-65537|128;case 0:if(tt=Ze.payload,ne=typeof tt=="function"?tt.call(It,_e,ne):tt,ne==null)break e;_e=g({},_e,ne);break e;case 2:Na=!0}}ne=T.callback,ne!==null&&(t.flags|=64,ie&&(t.flags|=8192),ie=u.callbacks,ie===null?u.callbacks=[ne]:ie.push(ne))}else ie={lane:ne,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ue===null?($=ue=ie,B=_e):ue=ue.next=ie,E|=ne;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;ie=T,T=ie.next,ie.next=null,u.lastBaseUpdate=ie,u.shared.pending=null}}while(!0);ue===null&&(B=_e),u.baseState=B,u.firstBaseUpdate=$,u.lastBaseUpdate=ue,d===null&&(u.shared.lanes=0),Va|=E,t.lanes=E,t.memoizedState=_e}}function gm(t,i){if(typeof t!="function")throw Error(s(191,t));t.call(i)}function vm(t,i){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)gm(r[t],i)}var rs=ee(null),Vl=ee(0);function _m(t,i){t=ca,Ee(Vl,t),Ee(rs,i),ca=t|i.baseLanes}function of(){Ee(Vl,ca),Ee(rs,rs.current)}function lf(){ca=Vl.current,ye(rs),ye(Vl)}var Pa=0,ft=null,Bt=null,on=null,kl=!1,ss=!1,Ar=!1,jl=0,yo=0,os=null,ay=0;function nn(){throw Error(s(321))}function cf(t,i){if(i===null)return!1;for(var r=0;r<i.length&&r<t.length;r++)if(!ei(t[r],i[r]))return!1;return!0}function uf(t,i,r,o,u,d){return Pa=d,ft=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,z.H=t===null||t.memoizedState===null?tg:ng,Ar=!1,d=r(o,u),Ar=!1,ss&&(d=ym(i,r,o,u)),xm(t),d}function xm(t){z.H=Kl;var i=Bt!==null&&Bt.next!==null;if(Pa=0,on=Bt=ft=null,kl=!1,yo=0,os=null,i)throw Error(s(300));t===null||xn||(t=t.dependencies,t!==null&&zl(t)&&(xn=!0))}function ym(t,i,r,o){ft=t;var u=0;do{if(ss&&(os=null),yo=0,ss=!1,25<=u)throw Error(s(301));if(u+=1,on=Bt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}z.H=fy,d=i(r,o)}while(ss);return d}function ry(){var t=z.H,i=t.useState()[0];return i=typeof i.then=="function"?So(i):i,t=t.useState()[0],(Bt!==null?Bt.memoizedState:null)!==t&&(ft.flags|=1024),i}function ff(){var t=jl!==0;return jl=0,t}function hf(t,i,r){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~r}function df(t){if(kl){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}kl=!1}Pa=0,on=Bt=ft=null,ss=!1,yo=jl=0,os=null}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?ft.memoizedState=on=t:on=on.next=t,on}function ln(){if(Bt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=Bt.next;var i=on===null?ft.memoizedState:on.next;if(i!==null)on=i,Bt=t;else{if(t===null)throw ft.alternate===null?Error(s(467)):Error(s(310));Bt=t,t={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},on===null?ft.memoizedState=on=t:on=on.next=t}return on}function pf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function So(t){var i=yo;return yo+=1,os===null&&(os=[]),t=dm(os,t,i),i=ft,(on===null?i.memoizedState:on.next)===null&&(i=i.alternate,z.H=i===null||i.memoizedState===null?tg:ng),t}function Xl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return So(t);if(t.$$typeof===D)return Ln(t)}throw Error(s(438,String(t)))}function mf(t){var i=null,r=ft.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var o=ft.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=pf(),ft.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(t),o=0;o<t;o++)r[o]=C;return i.index++,r}function ia(t,i){return typeof i=="function"?i(t):i}function Wl(t){var i=ln();return gf(i,Bt,t)}function gf(t,i,r){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=r;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var E=u.next;u.next=d.next,d.next=E}i.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{i=u.next;var T=E=null,B=null,$=i,ue=!1;do{var _e=$.lane&-536870913;if(_e!==$.lane?(Et&_e)===_e:(Pa&_e)===_e){var ne=$.revertLane;if(ne===0)B!==null&&(B=B.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),_e===is&&(ue=!0);else if((Pa&ne)===ne){$=$.next,ne===is&&(ue=!0);continue}else _e={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(T=B=_e,E=d):B=B.next=_e,ft.lanes|=ne,Va|=ne;_e=$.action,Ar&&r(d,_e),d=$.hasEagerState?$.eagerState:r(d,_e)}else ne={lane:_e,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(T=B=ne,E=d):B=B.next=ne,ft.lanes|=_e,Va|=_e;$=$.next}while($!==null&&$!==i);if(B===null?E=d:B.next=T,!ei(d,t.memoizedState)&&(xn=!0,ue&&(r=as,r!==null)))throw r;t.memoizedState=d,t.baseState=E,t.baseQueue=B,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function vf(t){var i=ln(),r=i.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=t;var o=r.dispatch,u=r.pending,d=i.memoizedState;if(u!==null){r.pending=null;var E=u=u.next;do d=t(d,E.action),E=E.next;while(E!==u);ei(d,i.memoizedState)||(xn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),r.lastRenderedState=d}return[d,o]}function Sm(t,i,r){var o=ft,u=ln(),d=Ct;if(d){if(r===void 0)throw Error(s(407));r=r()}else r=i();var E=!ei((Bt||u).memoizedState,r);E&&(u.memoizedState=r,xn=!0),u=u.queue;var T=bm.bind(null,o,u,t);if(Eo(2048,8,T,[t]),u.getSnapshot!==i||E||on!==null&&on.memoizedState.tag&1){if(o.flags|=2048,ls(9,ql(),Mm.bind(null,o,u,r,i),null),qt===null)throw Error(s(349));d||(Pa&124)!==0||Em(o,i,r)}return r}function Em(t,i,r){t.flags|=16384,t={getSnapshot:i,value:r},i=ft.updateQueue,i===null?(i=pf(),ft.updateQueue=i,i.stores=[t]):(r=i.stores,r===null?i.stores=[t]:r.push(t))}function Mm(t,i,r,o){i.value=r,i.getSnapshot=o,Tm(i)&&Am(t)}function bm(t,i,r){return r(function(){Tm(i)&&Am(t)})}function Tm(t){var i=t.getSnapshot;t=t.value;try{var r=i();return!ei(t,r)}catch{return!0}}function Am(t){var i=$r(t,2);i!==null&&si(i,t,2)}function _f(t){var i=Wn();if(typeof t=="function"){var r=t;if(t=r(),Ar){Re(!0);try{r()}finally{Re(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:t},i}function wm(t,i,r,o){return t.baseState=r,gf(t,Bt,typeof o=="function"?o:ia)}function sy(t,i,r,o,u){if(Zl(t))throw Error(s(485));if(t=i.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){d.listeners.push(E)}};z.T!==null?r(!0):d.isTransition=!1,o(d),r=i.pending,r===null?(d.next=i.pending=d,Rm(i,d)):(d.next=r.next,i.pending=r.next=d)}}function Rm(t,i){var r=i.action,o=i.payload,u=t.state;if(i.isTransition){var d=z.T,E={};z.T=E;try{var T=r(u,o),B=z.S;B!==null&&B(E,T),Cm(t,i,T)}catch($){xf(t,i,$)}finally{z.T=d}}else try{d=r(u,o),Cm(t,i,d)}catch($){xf(t,i,$)}}function Cm(t,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){Dm(t,i,o)},function(o){return xf(t,i,o)}):Dm(t,i,r)}function Dm(t,i,r){i.status="fulfilled",i.value=r,Um(i),t.state=r,i=t.pending,i!==null&&(r=i.next,r===i?t.pending=null:(r=r.next,i.next=r,Rm(t,r)))}function xf(t,i,r){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=r,Um(i),i=i.next;while(i!==o)}t.action=null}function Um(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function Nm(t,i){return i}function Lm(t,i){if(Ct){var r=qt.formState;if(r!==null){e:{var o=ft;if(Ct){if(en){t:{for(var u=en,d=Ni;u.nodeType!==8;){if(!d){u=null;break t}if(u=Mi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){en=Mi(u.nextSibling),o=u.data==="F!";break e}}Er(o)}o=!1}o&&(i=r[0])}}return r=Wn(),r.memoizedState=r.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nm,lastRenderedState:i},r.queue=o,r=Jm.bind(null,ft,o),o.dispatch=r,o=_f(!1),d=bf.bind(null,ft,!1,o.queue),o=Wn(),u={state:i,dispatch:null,action:t,pending:null},o.queue=u,r=sy.bind(null,ft,u,d,r),u.dispatch=r,o.memoizedState=t,[i,r,!1]}function Om(t){var i=ln();return Pm(i,Bt,t)}function Pm(t,i,r){if(i=gf(t,i,Nm)[0],t=Wl(ia)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=So(i)}catch(E){throw E===mo?Hl:E}else o=i;i=ln();var u=i.queue,d=u.dispatch;return r!==i.memoizedState&&(ft.flags|=2048,ls(9,ql(),oy.bind(null,u,r),null)),[o,d,t]}function oy(t,i){t.action=i}function Bm(t){var i=ln(),r=Bt;if(r!==null)return Pm(i,r,t);ln(),i=i.memoizedState,r=ln();var o=r.queue.dispatch;return r.memoizedState=t,[i,o,!1]}function ls(t,i,r,o){return t={tag:t,create:r,deps:o,inst:i,next:null},i=ft.updateQueue,i===null&&(i=pf(),ft.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,i.lastEffect=t),t}function ql(){return{destroy:void 0,resource:void 0}}function zm(){return ln().memoizedState}function Yl(t,i,r,o){var u=Wn();o=o===void 0?null:o,ft.flags|=t,u.memoizedState=ls(1|i,ql(),r,o)}function Eo(t,i,r,o){var u=ln();o=o===void 0?null:o;var d=u.memoizedState.inst;Bt!==null&&o!==null&&cf(o,Bt.memoizedState.deps)?u.memoizedState=ls(i,d,r,o):(ft.flags|=t,u.memoizedState=ls(1|i,d,r,o))}function Im(t,i){Yl(8390656,8,t,i)}function Fm(t,i){Eo(2048,8,t,i)}function Hm(t,i){return Eo(4,2,t,i)}function Gm(t,i){return Eo(4,4,t,i)}function Vm(t,i){if(typeof i=="function"){t=t();var r=i(t);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function km(t,i,r){r=r!=null?r.concat([t]):null,Eo(4,4,Vm.bind(null,i,t),r)}function yf(){}function jm(t,i){var r=ln();i=i===void 0?null:i;var o=r.memoizedState;return i!==null&&cf(i,o[1])?o[0]:(r.memoizedState=[t,i],t)}function Xm(t,i){var r=ln();i=i===void 0?null:i;var o=r.memoizedState;if(i!==null&&cf(i,o[1]))return o[0];if(o=t(),Ar){Re(!0);try{t()}finally{Re(!1)}}return r.memoizedState=[o,i],o}function Sf(t,i,r){return r===void 0||(Pa&1073741824)!==0?t.memoizedState=i:(t.memoizedState=r,t=Yg(),ft.lanes|=t,Va|=t,r)}function Wm(t,i,r,o){return ei(r,i)?r:rs.current!==null?(t=Sf(t,r,o),ei(t,i)||(xn=!0),t):(Pa&42)===0?(xn=!0,t.memoizedState=r):(t=Yg(),ft.lanes|=t,Va|=t,i)}function qm(t,i,r,o,u){var d=K.p;K.p=d!==0&&8>d?d:8;var E=z.T,T={};z.T=T,bf(t,!1,i,r);try{var B=u(),$=z.S;if($!==null&&$(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ue=iy(B,o);Mo(t,i,ue,ri(t))}else Mo(t,i,o,ri(t))}catch(_e){Mo(t,i,{then:function(){},status:"rejected",reason:_e},ri())}finally{K.p=d,z.T=E}}function ly(){}function Ef(t,i,r,o){if(t.tag!==5)throw Error(s(476));var u=Ym(t).queue;qm(t,u,i,Y,r===null?ly:function(){return Zm(t),r(o)})}function Ym(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:Y},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:r},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Zm(t){var i=Ym(t).next.queue;Mo(t,i,{},ri())}function Mf(){return Ln(Go)}function Km(){return ln().memoizedState}function Qm(){return ln().memoizedState}function cy(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var r=ri();t=La(r);var o=Oa(i,t,r);o!==null&&(si(o,i,r),vo(o,i,r)),i={cache:Ju()},t.payload=i;return}i=i.return}}function uy(t,i,r){var o=ri();r={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},Zl(t)?$m(i,r):(r=Vu(t,i,r,o),r!==null&&(si(r,t,o),eg(r,i,o)))}function Jm(t,i,r){var o=ri();Mo(t,i,r,o)}function Mo(t,i,r,o){var u={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(Zl(t))$m(i,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var E=i.lastRenderedState,T=d(E,r);if(u.hasEagerState=!0,u.eagerState=T,ei(T,E))return Nl(t,i,u,0),qt===null&&Ul(),!1}catch{}finally{}if(r=Vu(t,i,u,o),r!==null)return si(r,t,o),eg(r,i,o),!0}return!1}function bf(t,i,r,o){if(o={lane:2,revertLane:nh(),action:o,hasEagerState:!1,eagerState:null,next:null},Zl(t)){if(i)throw Error(s(479))}else i=Vu(t,r,o,2),i!==null&&si(i,t,2)}function Zl(t){var i=t.alternate;return t===ft||i!==null&&i===ft}function $m(t,i){ss=kl=!0;var r=t.pending;r===null?i.next=i:(i.next=r.next,r.next=i),t.pending=i}function eg(t,i,r){if((r&4194048)!==0){var o=i.lanes;o&=t.pendingLanes,r|=o,i.lanes=r,at(t,r)}}var Kl={readContext:Ln,use:Xl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn},tg={readContext:Ln,use:Xl,useCallback:function(t,i){return Wn().memoizedState=[t,i===void 0?null:i],t},useContext:Ln,useEffect:Im,useImperativeHandle:function(t,i,r){r=r!=null?r.concat([t]):null,Yl(4194308,4,Vm.bind(null,i,t),r)},useLayoutEffect:function(t,i){return Yl(4194308,4,t,i)},useInsertionEffect:function(t,i){Yl(4,2,t,i)},useMemo:function(t,i){var r=Wn();i=i===void 0?null:i;var o=t();if(Ar){Re(!0);try{t()}finally{Re(!1)}}return r.memoizedState=[o,i],o},useReducer:function(t,i,r){var o=Wn();if(r!==void 0){var u=r(i);if(Ar){Re(!0);try{r(i)}finally{Re(!1)}}}else u=i;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=uy.bind(null,ft,t),[o.memoizedState,t]},useRef:function(t){var i=Wn();return t={current:t},i.memoizedState=t},useState:function(t){t=_f(t);var i=t.queue,r=Jm.bind(null,ft,i);return i.dispatch=r,[t.memoizedState,r]},useDebugValue:yf,useDeferredValue:function(t,i){var r=Wn();return Sf(r,t,i)},useTransition:function(){var t=_f(!1);return t=qm.bind(null,ft,t.queue,!0,!1),Wn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,r){var o=ft,u=Wn();if(Ct){if(r===void 0)throw Error(s(407));r=r()}else{if(r=i(),qt===null)throw Error(s(349));(Et&124)!==0||Em(o,i,r)}u.memoizedState=r;var d={value:r,getSnapshot:i};return u.queue=d,Im(bm.bind(null,o,d,t),[t]),o.flags|=2048,ls(9,ql(),Mm.bind(null,o,d,r,i),null),r},useId:function(){var t=Wn(),i=qt.identifierPrefix;if(Ct){var r=ea,o=$i;r=(o&~(1<<32-Ge(o)-1)).toString(32)+r,i="«"+i+"R"+r,r=jl++,0<r&&(i+="H"+r.toString(32)),i+="»"}else r=ay++,i="«"+i+"r"+r.toString(32)+"»";return t.memoizedState=i},useHostTransitionStatus:Mf,useFormState:Lm,useActionState:Lm,useOptimistic:function(t){var i=Wn();i.memoizedState=i.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=bf.bind(null,ft,!0,r),r.dispatch=i,[t,i]},useMemoCache:mf,useCacheRefresh:function(){return Wn().memoizedState=cy.bind(null,ft)}},ng={readContext:Ln,use:Xl,useCallback:jm,useContext:Ln,useEffect:Fm,useImperativeHandle:km,useInsertionEffect:Hm,useLayoutEffect:Gm,useMemo:Xm,useReducer:Wl,useRef:zm,useState:function(){return Wl(ia)},useDebugValue:yf,useDeferredValue:function(t,i){var r=ln();return Wm(r,Bt.memoizedState,t,i)},useTransition:function(){var t=Wl(ia)[0],i=ln().memoizedState;return[typeof t=="boolean"?t:So(t),i]},useSyncExternalStore:Sm,useId:Km,useHostTransitionStatus:Mf,useFormState:Om,useActionState:Om,useOptimistic:function(t,i){var r=ln();return wm(r,Bt,t,i)},useMemoCache:mf,useCacheRefresh:Qm},fy={readContext:Ln,use:Xl,useCallback:jm,useContext:Ln,useEffect:Fm,useImperativeHandle:km,useInsertionEffect:Hm,useLayoutEffect:Gm,useMemo:Xm,useReducer:vf,useRef:zm,useState:function(){return vf(ia)},useDebugValue:yf,useDeferredValue:function(t,i){var r=ln();return Bt===null?Sf(r,t,i):Wm(r,Bt.memoizedState,t,i)},useTransition:function(){var t=vf(ia)[0],i=ln().memoizedState;return[typeof t=="boolean"?t:So(t),i]},useSyncExternalStore:Sm,useId:Km,useHostTransitionStatus:Mf,useFormState:Bm,useActionState:Bm,useOptimistic:function(t,i){var r=ln();return Bt!==null?wm(r,Bt,t,i):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:mf,useCacheRefresh:Qm},cs=null,bo=0;function Ql(t){var i=bo;return bo+=1,cs===null&&(cs=[]),dm(cs,t,i)}function To(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Jl(t,i){throw i.$$typeof===_?Error(s(525)):(t=Object.prototype.toString.call(i),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function ig(t){var i=t._init;return i(t._payload)}function ag(t){function i(X,V){if(t){var Q=X.deletions;Q===null?(X.deletions=[V],X.flags|=16):Q.push(V)}}function r(X,V){if(!t)return null;for(;V!==null;)i(X,V),V=V.sibling;return null}function o(X){for(var V=new Map;X!==null;)X.key!==null?V.set(X.key,X):V.set(X.index,X),X=X.sibling;return V}function u(X,V){return X=Ji(X,V),X.index=0,X.sibling=null,X}function d(X,V,Q){return X.index=Q,t?(Q=X.alternate,Q!==null?(Q=Q.index,Q<V?(X.flags|=67108866,V):Q):(X.flags|=67108866,V)):(X.flags|=1048576,V)}function E(X){return t&&X.alternate===null&&(X.flags|=67108866),X}function T(X,V,Q,de){return V===null||V.tag!==6?(V=ju(Q,X.mode,de),V.return=X,V):(V=u(V,Q),V.return=X,V)}function B(X,V,Q,de){var He=Q.type;return He===b?ue(X,V,Q.props.children,de,Q.key):V!==null&&(V.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===W&&ig(He)===V.type)?(V=u(V,Q.props),To(V,Q),V.return=X,V):(V=Ol(Q.type,Q.key,Q.props,null,X.mode,de),To(V,Q),V.return=X,V)}function $(X,V,Q,de){return V===null||V.tag!==4||V.stateNode.containerInfo!==Q.containerInfo||V.stateNode.implementation!==Q.implementation?(V=Xu(Q,X.mode,de),V.return=X,V):(V=u(V,Q.children||[]),V.return=X,V)}function ue(X,V,Q,de,He){return V===null||V.tag!==7?(V=_r(Q,X.mode,de,He),V.return=X,V):(V=u(V,Q),V.return=X,V)}function _e(X,V,Q){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=ju(""+V,X.mode,Q),V.return=X,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case x:return Q=Ol(V.type,V.key,V.props,null,X.mode,Q),To(Q,V),Q.return=X,Q;case S:return V=Xu(V,X.mode,Q),V.return=X,V;case W:var de=V._init;return V=de(V._payload),_e(X,V,Q)}if(pe(V)||ce(V))return V=_r(V,X.mode,Q,null),V.return=X,V;if(typeof V.then=="function")return _e(X,Ql(V),Q);if(V.$$typeof===D)return _e(X,Il(X,V),Q);Jl(X,V)}return null}function ne(X,V,Q,de){var He=V!==null?V.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return He!==null?null:T(X,V,""+Q,de);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:return Q.key===He?B(X,V,Q,de):null;case S:return Q.key===He?$(X,V,Q,de):null;case W:return He=Q._init,Q=He(Q._payload),ne(X,V,Q,de)}if(pe(Q)||ce(Q))return He!==null?null:ue(X,V,Q,de,null);if(typeof Q.then=="function")return ne(X,V,Ql(Q),de);if(Q.$$typeof===D)return ne(X,V,Il(X,Q),de);Jl(X,Q)}return null}function ie(X,V,Q,de,He){if(typeof de=="string"&&de!==""||typeof de=="number"||typeof de=="bigint")return X=X.get(Q)||null,T(V,X,""+de,He);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case x:return X=X.get(de.key===null?Q:de.key)||null,B(V,X,de,He);case S:return X=X.get(de.key===null?Q:de.key)||null,$(V,X,de,He);case W:var dt=de._init;return de=dt(de._payload),ie(X,V,Q,de,He)}if(pe(de)||ce(de))return X=X.get(Q)||null,ue(V,X,de,He,null);if(typeof de.then=="function")return ie(X,V,Q,Ql(de),He);if(de.$$typeof===D)return ie(X,V,Q,Il(V,de),He);Jl(V,de)}return null}function tt(X,V,Q,de){for(var He=null,dt=null,ke=V,Je=V=0,Sn=null;ke!==null&&Je<Q.length;Je++){ke.index>Je?(Sn=ke,ke=null):Sn=ke.sibling;var At=ne(X,ke,Q[Je],de);if(At===null){ke===null&&(ke=Sn);break}t&&ke&&At.alternate===null&&i(X,ke),V=d(At,V,Je),dt===null?He=At:dt.sibling=At,dt=At,ke=Sn}if(Je===Q.length)return r(X,ke),Ct&&yr(X,Je),He;if(ke===null){for(;Je<Q.length;Je++)ke=_e(X,Q[Je],de),ke!==null&&(V=d(ke,V,Je),dt===null?He=ke:dt.sibling=ke,dt=ke);return Ct&&yr(X,Je),He}for(ke=o(ke);Je<Q.length;Je++)Sn=ie(ke,X,Je,Q[Je],de),Sn!==null&&(t&&Sn.alternate!==null&&ke.delete(Sn.key===null?Je:Sn.key),V=d(Sn,V,Je),dt===null?He=Sn:dt.sibling=Sn,dt=Sn);return t&&ke.forEach(function(Qa){return i(X,Qa)}),Ct&&yr(X,Je),He}function Ze(X,V,Q,de){if(Q==null)throw Error(s(151));for(var He=null,dt=null,ke=V,Je=V=0,Sn=null,At=Q.next();ke!==null&&!At.done;Je++,At=Q.next()){ke.index>Je?(Sn=ke,ke=null):Sn=ke.sibling;var Qa=ne(X,ke,At.value,de);if(Qa===null){ke===null&&(ke=Sn);break}t&&ke&&Qa.alternate===null&&i(X,ke),V=d(Qa,V,Je),dt===null?He=Qa:dt.sibling=Qa,dt=Qa,ke=Sn}if(At.done)return r(X,ke),Ct&&yr(X,Je),He;if(ke===null){for(;!At.done;Je++,At=Q.next())At=_e(X,At.value,de),At!==null&&(V=d(At,V,Je),dt===null?He=At:dt.sibling=At,dt=At);return Ct&&yr(X,Je),He}for(ke=o(ke);!At.done;Je++,At=Q.next())At=ie(ke,X,Je,At.value,de),At!==null&&(t&&At.alternate!==null&&ke.delete(At.key===null?Je:At.key),V=d(At,V,Je),dt===null?He=At:dt.sibling=At,dt=At);return t&&ke.forEach(function(hS){return i(X,hS)}),Ct&&yr(X,Je),He}function It(X,V,Q,de){if(typeof Q=="object"&&Q!==null&&Q.type===b&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:e:{for(var He=Q.key;V!==null;){if(V.key===He){if(He=Q.type,He===b){if(V.tag===7){r(X,V.sibling),de=u(V,Q.props.children),de.return=X,X=de;break e}}else if(V.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===W&&ig(He)===V.type){r(X,V.sibling),de=u(V,Q.props),To(de,Q),de.return=X,X=de;break e}r(X,V);break}else i(X,V);V=V.sibling}Q.type===b?(de=_r(Q.props.children,X.mode,de,Q.key),de.return=X,X=de):(de=Ol(Q.type,Q.key,Q.props,null,X.mode,de),To(de,Q),de.return=X,X=de)}return E(X);case S:e:{for(He=Q.key;V!==null;){if(V.key===He)if(V.tag===4&&V.stateNode.containerInfo===Q.containerInfo&&V.stateNode.implementation===Q.implementation){r(X,V.sibling),de=u(V,Q.children||[]),de.return=X,X=de;break e}else{r(X,V);break}else i(X,V);V=V.sibling}de=Xu(Q,X.mode,de),de.return=X,X=de}return E(X);case W:return He=Q._init,Q=He(Q._payload),It(X,V,Q,de)}if(pe(Q))return tt(X,V,Q,de);if(ce(Q)){if(He=ce(Q),typeof He!="function")throw Error(s(150));return Q=He.call(Q),Ze(X,V,Q,de)}if(typeof Q.then=="function")return It(X,V,Ql(Q),de);if(Q.$$typeof===D)return It(X,V,Il(X,Q),de);Jl(X,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,V!==null&&V.tag===6?(r(X,V.sibling),de=u(V,Q),de.return=X,X=de):(r(X,V),de=ju(Q,X.mode,de),de.return=X,X=de),E(X)):r(X,V)}return function(X,V,Q,de){try{bo=0;var He=It(X,V,Q,de);return cs=null,He}catch(ke){if(ke===mo||ke===Hl)throw ke;var dt=ti(29,ke,null,X.mode);return dt.lanes=de,dt.return=X,dt}finally{}}}var us=ag(!0),rg=ag(!1),mi=ee(null),Li=null;function Ba(t){var i=t.alternate;Ee(pn,pn.current&1),Ee(mi,t),Li===null&&(i===null||rs.current!==null||i.memoizedState!==null)&&(Li=t)}function sg(t){if(t.tag===22){if(Ee(pn,pn.current),Ee(mi,t),Li===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(Li=t)}}else za()}function za(){Ee(pn,pn.current),Ee(mi,mi.current)}function aa(t){ye(mi),Li===t&&(Li=null),ye(pn)}var pn=ee(0);function $l(t){for(var i=t;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||ph(r)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Tf(t,i,r,o){i=t.memoizedState,r=r(o,i),r=r==null?i:g({},i,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Af={enqueueSetState:function(t,i,r){t=t._reactInternals;var o=ri(),u=La(o);u.payload=i,r!=null&&(u.callback=r),i=Oa(t,u,o),i!==null&&(si(i,t,o),vo(i,t,o))},enqueueReplaceState:function(t,i,r){t=t._reactInternals;var o=ri(),u=La(o);u.tag=1,u.payload=i,r!=null&&(u.callback=r),i=Oa(t,u,o),i!==null&&(si(i,t,o),vo(i,t,o))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var r=ri(),o=La(r);o.tag=2,i!=null&&(o.callback=i),i=Oa(t,o,r),i!==null&&(si(i,t,r),vo(i,t,r))}};function og(t,i,r,o,u,d,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,E):i.prototype&&i.prototype.isPureReactComponent?!so(r,o)||!so(u,d):!0}function lg(t,i,r,o){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,o),i.state!==t&&Af.enqueueReplaceState(i,i.state,null)}function wr(t,i){var r=i;if("ref"in i){r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}if(t=t.defaultProps){r===i&&(r=g({},r));for(var u in t)r[u]===void 0&&(r[u]=t[u])}return r}var ec=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function cg(t){ec(t)}function ug(t){console.error(t)}function fg(t){ec(t)}function tc(t,i){try{var r=t.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function hg(t,i,r){try{var o=t.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function wf(t,i,r){return r=La(r),r.tag=3,r.payload={element:null},r.callback=function(){tc(t,i)},r}function dg(t){return t=La(t),t.tag=3,t}function pg(t,i,r,o){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){hg(i,r,o)}}var E=r.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){hg(i,r,o),typeof u!="function"&&(ka===null?ka=new Set([this]):ka.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function hy(t,i,r,o,u){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=r.alternate,i!==null&&fo(i,r,u,!0),r=mi.current,r!==null){switch(r.tag){case 13:return Li===null?Qf():r.alternate===null&&tn===0&&(tn=3),r.flags&=-257,r.flags|=65536,r.lanes=u,o===tf?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([o]):i.add(o),$f(t,o,u)),!1;case 22:return r.flags|=65536,o===tf?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([o]):r.add(o)),$f(t,o,u)),!1}throw Error(s(435,r.tag))}return $f(t,o,u),Qf(),!1}if(Ct)return i=mi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,o!==Yu&&(t=Error(s(422),{cause:o}),uo(fi(t,r)))):(o!==Yu&&(i=Error(s(423),{cause:o}),uo(fi(i,r))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=fi(o,r),u=wf(t.stateNode,o,u),rf(t,u),tn!==4&&(tn=2)),!1;var d=Error(s(520),{cause:o});if(d=fi(d,r),No===null?No=[d]:No.push(d),tn!==4&&(tn=2),i===null)return!0;o=fi(o,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,t=u&-u,r.lanes|=t,t=wf(r.stateNode,o,t),rf(r,t),!1;case 1:if(i=r.type,d=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ka===null||!ka.has(d))))return r.flags|=65536,u&=-u,r.lanes|=u,u=dg(u),pg(u,t,r,o),rf(r,u),!1}r=r.return}while(r!==null);return!1}var mg=Error(s(461)),xn=!1;function An(t,i,r,o){i.child=t===null?rg(i,null,r,o):us(i,t.child,r,o)}function gg(t,i,r,o,u){r=r.render;var d=i.ref;if("ref"in o){var E={};for(var T in o)T!=="ref"&&(E[T]=o[T])}else E=o;return br(i),o=uf(t,i,r,E,d,u),T=ff(),t!==null&&!xn?(hf(t,i,u),ra(t,i,u)):(Ct&&T&&Wu(i),i.flags|=1,An(t,i,o,u),i.child)}function vg(t,i,r,o,u){if(t===null){var d=r.type;return typeof d=="function"&&!ku(d)&&d.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=d,_g(t,i,d,o,u)):(t=Ol(r.type,null,o,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!Pf(t,u)){var E=d.memoizedProps;if(r=r.compare,r=r!==null?r:so,r(E,o)&&t.ref===i.ref)return ra(t,i,u)}return i.flags|=1,t=Ji(d,o),t.ref=i.ref,t.return=i,i.child=t}function _g(t,i,r,o,u){if(t!==null){var d=t.memoizedProps;if(so(d,o)&&t.ref===i.ref)if(xn=!1,i.pendingProps=o=d,Pf(t,u))(t.flags&131072)!==0&&(xn=!0);else return i.lanes=t.lanes,ra(t,i,u)}return Rf(t,i,r,o,u)}function xg(t,i,r){var o=i.pendingProps,u=o.children,d=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((i.flags&128)!==0){if(o=d!==null?d.baseLanes|r:r,t!==null){for(u=i.child=t.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;i.childLanes=d&~o}else i.childLanes=0,i.child=null;return yg(t,i,o,r)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Fl(i,d!==null?d.cachePool:null),d!==null?_m(i,d):of(),sg(i);else return i.lanes=i.childLanes=536870912,yg(t,i,d!==null?d.baseLanes|r:r,r)}else d!==null?(Fl(i,d.cachePool),_m(i,d),za(),i.memoizedState=null):(t!==null&&Fl(i,null),of(),za());return An(t,i,u,r),i.child}function yg(t,i,r,o){var u=ef();return u=u===null?null:{parent:dn._currentValue,pool:u},i.memoizedState={baseLanes:r,cachePool:u},t!==null&&Fl(i,null),of(),sg(i),t!==null&&fo(t,i,o,!0),null}function nc(t,i){var r=i.ref;if(r===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(s(284));(t===null||t.ref!==r)&&(i.flags|=4194816)}}function Rf(t,i,r,o,u){return br(i),r=uf(t,i,r,o,void 0,u),o=ff(),t!==null&&!xn?(hf(t,i,u),ra(t,i,u)):(Ct&&o&&Wu(i),i.flags|=1,An(t,i,r,u),i.child)}function Sg(t,i,r,o,u,d){return br(i),i.updateQueue=null,r=ym(i,o,r,u),xm(t),o=ff(),t!==null&&!xn?(hf(t,i,d),ra(t,i,d)):(Ct&&o&&Wu(i),i.flags|=1,An(t,i,r,d),i.child)}function Eg(t,i,r,o,u){if(br(i),i.stateNode===null){var d=es,E=r.contextType;typeof E=="object"&&E!==null&&(d=Ln(E)),d=new r(o,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Af,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=o,d.state=i.memoizedState,d.refs={},nf(i),E=r.contextType,d.context=typeof E=="object"&&E!==null?Ln(E):es,d.state=i.memoizedState,E=r.getDerivedStateFromProps,typeof E=="function"&&(Tf(i,r,E,o),d.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(E=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),E!==d.state&&Af.enqueueReplaceState(d,d.state,null),xo(i,o,d,u),_o(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(t===null){d=i.stateNode;var T=i.memoizedProps,B=wr(r,T);d.props=B;var $=d.context,ue=r.contextType;E=es,typeof ue=="object"&&ue!==null&&(E=Ln(ue));var _e=r.getDerivedStateFromProps;ue=typeof _e=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,ue||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||$!==E)&&lg(i,d,o,E),Na=!1;var ne=i.memoizedState;d.state=ne,xo(i,o,d,u),_o(),$=i.memoizedState,T||ne!==$||Na?(typeof _e=="function"&&(Tf(i,r,_e,o),$=i.memoizedState),(B=Na||og(i,r,B,o,ne,$,E))?(ue||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=$),d.props=o,d.state=$,d.context=E,o=B):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{d=i.stateNode,af(t,i),E=i.memoizedProps,ue=wr(r,E),d.props=ue,_e=i.pendingProps,ne=d.context,$=r.contextType,B=es,typeof $=="object"&&$!==null&&(B=Ln($)),T=r.getDerivedStateFromProps,($=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E!==_e||ne!==B)&&lg(i,d,o,B),Na=!1,ne=i.memoizedState,d.state=ne,xo(i,o,d,u),_o();var ie=i.memoizedState;E!==_e||ne!==ie||Na||t!==null&&t.dependencies!==null&&zl(t.dependencies)?(typeof T=="function"&&(Tf(i,r,T,o),ie=i.memoizedState),(ue=Na||og(i,r,ue,o,ne,ie,B)||t!==null&&t.dependencies!==null&&zl(t.dependencies))?($||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ie,B),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ie,B)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||E===t.memoizedProps&&ne===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&ne===t.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=ie),d.props=o,d.state=ie,d.context=B,o=ue):(typeof d.componentDidUpdate!="function"||E===t.memoizedProps&&ne===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&ne===t.memoizedState||(i.flags|=1024),o=!1)}return d=o,nc(t,i),o=(i.flags&128)!==0,d||o?(d=i.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&o?(i.child=us(i,t.child,null,u),i.child=us(i,null,r,u)):An(t,i,r,u),i.memoizedState=d.state,t=i.child):t=ra(t,i,u),t}function Mg(t,i,r,o){return co(),i.flags|=256,An(t,i,r,o),i.child}var Cf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Df(t){return{baseLanes:t,cachePool:um()}}function Uf(t,i,r){return t=t!==null?t.childLanes&~r:0,i&&(t|=gi),t}function bg(t,i,r){var o=i.pendingProps,u=!1,d=(i.flags&128)!==0,E;if((E=d)||(E=t!==null&&t.memoizedState===null?!1:(pn.current&2)!==0),E&&(u=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,t===null){if(Ct){if(u?Ba(i):za(),Ct){var T=en,B;if(B=T){e:{for(B=T,T=Ni;B.nodeType!==8;){if(!T){T=null;break e}if(B=Mi(B.nextSibling),B===null){T=null;break e}}T=B}T!==null?(i.memoizedState={dehydrated:T,treeContext:xr!==null?{id:$i,overflow:ea}:null,retryLane:536870912,hydrationErrors:null},B=ti(18,null,null,0),B.stateNode=T,B.return=i,i.child=B,Fn=i,en=null,B=!0):B=!1}B||Er(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return ph(T)?i.lanes=32:i.lanes=536870912,null;aa(i)}return T=o.children,o=o.fallback,u?(za(),u=i.mode,T=ic({mode:"hidden",children:T},u),o=_r(o,u,r,null),T.return=i,o.return=i,T.sibling=o,i.child=T,u=i.child,u.memoizedState=Df(r),u.childLanes=Uf(t,E,r),i.memoizedState=Cf,o):(Ba(i),Nf(i,T))}if(B=t.memoizedState,B!==null&&(T=B.dehydrated,T!==null)){if(d)i.flags&256?(Ba(i),i.flags&=-257,i=Lf(t,i,r)):i.memoizedState!==null?(za(),i.child=t.child,i.flags|=128,i=null):(za(),u=o.fallback,T=i.mode,o=ic({mode:"visible",children:o.children},T),u=_r(u,T,r,null),u.flags|=2,o.return=i,u.return=i,o.sibling=u,i.child=o,us(i,t.child,null,r),o=i.child,o.memoizedState=Df(r),o.childLanes=Uf(t,E,r),i.memoizedState=Cf,i=u);else if(Ba(i),ph(T)){if(E=T.nextSibling&&T.nextSibling.dataset,E)var $=E.dgst;E=$,o=Error(s(419)),o.stack="",o.digest=E,uo({value:o,source:null,stack:null}),i=Lf(t,i,r)}else if(xn||fo(t,i,r,!1),E=(r&t.childLanes)!==0,xn||E){if(E=qt,E!==null&&(o=r&-r,o=(o&42)!==0?1:Xt(o),o=(o&(E.suspendedLanes|r))!==0?0:o,o!==0&&o!==B.retryLane))throw B.retryLane=o,$r(t,o),si(E,t,o),mg;T.data==="$?"||Qf(),i=Lf(t,i,r)}else T.data==="$?"?(i.flags|=192,i.child=t.child,i=null):(t=B.treeContext,en=Mi(T.nextSibling),Fn=i,Ct=!0,Sr=null,Ni=!1,t!==null&&(di[pi++]=$i,di[pi++]=ea,di[pi++]=xr,$i=t.id,ea=t.overflow,xr=i),i=Nf(i,o.children),i.flags|=4096);return i}return u?(za(),u=o.fallback,T=i.mode,B=t.child,$=B.sibling,o=Ji(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,$!==null?u=Ji($,u):(u=_r(u,T,r,null),u.flags|=2),u.return=i,o.return=i,o.sibling=u,i.child=o,o=u,u=i.child,T=t.child.memoizedState,T===null?T=Df(r):(B=T.cachePool,B!==null?($=dn._currentValue,B=B.parent!==$?{parent:$,pool:$}:B):B=um(),T={baseLanes:T.baseLanes|r,cachePool:B}),u.memoizedState=T,u.childLanes=Uf(t,E,r),i.memoizedState=Cf,o):(Ba(i),r=t.child,t=r.sibling,r=Ji(r,{mode:"visible",children:o.children}),r.return=i,r.sibling=null,t!==null&&(E=i.deletions,E===null?(i.deletions=[t],i.flags|=16):E.push(t)),i.child=r,i.memoizedState=null,r)}function Nf(t,i){return i=ic({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function ic(t,i){return t=ti(22,t,null,i),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Lf(t,i,r){return us(i,t.child,null,r),t=Nf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Tg(t,i,r){t.lanes|=i;var o=t.alternate;o!==null&&(o.lanes|=i),Ku(t.return,i,r)}function Of(t,i,r,o,u){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:u}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=r,d.tailMode=u)}function Ag(t,i,r){var o=i.pendingProps,u=o.revealOrder,d=o.tail;if(An(t,i,o.children,r),o=pn.current,(o&2)!==0)o=o&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tg(t,r,i);else if(t.tag===19)Tg(t,r,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(Ee(pn,o),u){case"forwards":for(r=i.child,u=null;r!==null;)t=r.alternate,t!==null&&$l(t)===null&&(u=r),r=r.sibling;r=u,r===null?(u=i.child,i.child=null):(u=r.sibling,r.sibling=null),Of(i,!1,u,r,d);break;case"backwards":for(r=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&$l(t)===null){i.child=u;break}t=u.sibling,u.sibling=r,r=u,u=t}Of(i,!0,r,null,d);break;case"together":Of(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ra(t,i,r){if(t!==null&&(i.dependencies=t.dependencies),Va|=i.lanes,(r&i.childLanes)===0)if(t!==null){if(fo(t,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(s(153));if(i.child!==null){for(t=i.child,r=Ji(t,t.pendingProps),i.child=r,r.return=i;t.sibling!==null;)t=t.sibling,r=r.sibling=Ji(t,t.pendingProps),r.return=i;r.sibling=null}return i.child}function Pf(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&zl(t)))}function dy(t,i,r){switch(i.tag){case 3:Ne(i,i.stateNode.containerInfo),Ua(i,dn,t.memoizedState.cache),co();break;case 27:case 5:Ke(i);break;case 4:Ne(i,i.stateNode.containerInfo);break;case 10:Ua(i,i.type,i.memoizedProps.value);break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(Ba(i),i.flags|=128,null):(r&i.child.childLanes)!==0?bg(t,i,r):(Ba(i),t=ra(t,i,r),t!==null?t.sibling:null);Ba(i);break;case 19:var u=(t.flags&128)!==0;if(o=(r&i.childLanes)!==0,o||(fo(t,i,r,!1),o=(r&i.childLanes)!==0),u){if(o)return Ag(t,i,r);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ee(pn,pn.current),o)break;return null;case 22:case 23:return i.lanes=0,xg(t,i,r);case 24:Ua(i,dn,t.memoizedState.cache)}return ra(t,i,r)}function wg(t,i,r){if(t!==null)if(t.memoizedProps!==i.pendingProps)xn=!0;else{if(!Pf(t,r)&&(i.flags&128)===0)return xn=!1,dy(t,i,r);xn=(t.flags&131072)!==0}else xn=!1,Ct&&(i.flags&1048576)!==0&&im(i,Bl,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var o=i.elementType,u=o._init;if(o=u(o._payload),i.type=o,typeof o=="function")ku(o)?(t=wr(o,t),i.tag=1,i=Eg(null,i,o,t,r)):(i.tag=0,i=Rf(null,i,o,t,r));else{if(o!=null){if(u=o.$$typeof,u===U){i.tag=11,i=gg(null,i,o,t,r);break e}else if(u===I){i.tag=14,i=vg(null,i,o,t,r);break e}}throw i=xe(o)||o,Error(s(306,i,""))}}return i;case 0:return Rf(t,i,i.type,i.pendingProps,r);case 1:return o=i.type,u=wr(o,i.pendingProps),Eg(t,i,o,u,r);case 3:e:{if(Ne(i,i.stateNode.containerInfo),t===null)throw Error(s(387));o=i.pendingProps;var d=i.memoizedState;u=d.element,af(t,i),xo(i,o,null,r);var E=i.memoizedState;if(o=E.cache,Ua(i,dn,o),o!==d.cache&&Qu(i,[dn],r,!0),_o(),o=E.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=Mg(t,i,o,r);break e}else if(o!==u){u=fi(Error(s(424)),i),uo(u),i=Mg(t,i,o,r);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(en=Mi(t.firstChild),Fn=i,Ct=!0,Sr=null,Ni=!0,r=rg(i,null,o,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(co(),o===u){i=ra(t,i,r);break e}An(t,i,o,r)}i=i.child}return i;case 26:return nc(t,i),t===null?(r=Uv(i.type,null,i.pendingProps,null))?i.memoizedState=r:Ct||(r=i.type,t=i.pendingProps,o=vc(Se.current).createElement(r),o[fn]=i,o[bn]=t,Rn(o,r,t),sn(o),i.stateNode=o):i.memoizedState=Uv(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Ke(i),t===null&&Ct&&(o=i.stateNode=Rv(i.type,i.pendingProps,Se.current),Fn=i,Ni=!0,u=en,Wa(i.type)?(mh=u,en=Mi(o.firstChild)):en=u),An(t,i,i.pendingProps.children,r),nc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Ct&&((u=o=en)&&(o=Gy(o,i.type,i.pendingProps,Ni),o!==null?(i.stateNode=o,Fn=i,en=Mi(o.firstChild),Ni=!1,u=!0):u=!1),u||Er(i)),Ke(i),u=i.type,d=i.pendingProps,E=t!==null?t.memoizedProps:null,o=d.children,fh(u,d)?o=null:E!==null&&fh(u,E)&&(i.flags|=32),i.memoizedState!==null&&(u=uf(t,i,ry,null,null,r),Go._currentValue=u),nc(t,i),An(t,i,o,r),i.child;case 6:return t===null&&Ct&&((t=r=en)&&(r=Vy(r,i.pendingProps,Ni),r!==null?(i.stateNode=r,Fn=i,en=null,t=!0):t=!1),t||Er(i)),null;case 13:return bg(t,i,r);case 4:return Ne(i,i.stateNode.containerInfo),o=i.pendingProps,t===null?i.child=us(i,null,o,r):An(t,i,o,r),i.child;case 11:return gg(t,i,i.type,i.pendingProps,r);case 7:return An(t,i,i.pendingProps,r),i.child;case 8:return An(t,i,i.pendingProps.children,r),i.child;case 12:return An(t,i,i.pendingProps.children,r),i.child;case 10:return o=i.pendingProps,Ua(i,i.type,o.value),An(t,i,o.children,r),i.child;case 9:return u=i.type._context,o=i.pendingProps.children,br(i),u=Ln(u),o=o(u),i.flags|=1,An(t,i,o,r),i.child;case 14:return vg(t,i,i.type,i.pendingProps,r);case 15:return _g(t,i,i.type,i.pendingProps,r);case 19:return Ag(t,i,r);case 31:return o=i.pendingProps,r=i.mode,o={mode:o.mode,children:o.children},t===null?(r=ic(o,r),r.ref=i.ref,i.child=r,r.return=i,i=r):(r=Ji(t.child,o),r.ref=i.ref,i.child=r,r.return=i,i=r),i;case 22:return xg(t,i,r);case 24:return br(i),o=Ln(dn),t===null?(u=ef(),u===null&&(u=qt,d=Ju(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=r),u=d),i.memoizedState={parent:o,cache:u},nf(i),Ua(i,dn,u)):((t.lanes&r)!==0&&(af(t,i),xo(i,null,null,r),_o()),u=t.memoizedState,d=i.memoizedState,u.parent!==o?(u={parent:o,cache:o},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),Ua(i,dn,o)):(o=d.cache,Ua(i,dn,o),o!==u.cache&&Qu(i,[dn],r,!0))),An(t,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function sa(t){t.flags|=4}function Rg(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Bv(i)){if(i=mi.current,i!==null&&((Et&4194048)===Et?Li!==null:(Et&62914560)!==Et&&(Et&536870912)===0||i!==Li))throw go=tf,fm;t.flags|=8192}}function ac(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Le():536870912,t.lanes|=i,ps|=i)}function Ao(t,i){if(!Ct)switch(t.tailMode){case"hidden":i=t.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Kt(t){var i=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(i)for(var u=t.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=r,i}function py(t,i,r){var o=i.pendingProps;switch(qu(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(i),null;case 1:return Kt(i),null;case 3:return r=i.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),na(dn),lt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(lo(i)?sa(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,sm())),Kt(i),null;case 26:return r=i.memoizedState,t===null?(sa(i),r!==null?(Kt(i),Rg(i,r)):(Kt(i),i.flags&=-16777217)):r?r!==t.memoizedState?(sa(i),Kt(i),Rg(i,r)):(Kt(i),i.flags&=-16777217):(t.memoizedProps!==o&&sa(i),Kt(i),i.flags&=-16777217),null;case 27:jt(i),r=Se.current;var u=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==o&&sa(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return Kt(i),null}t=J.current,lo(i)?am(i):(t=Rv(u,o,r),i.stateNode=t,sa(i))}return Kt(i),null;case 5:if(jt(i),r=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==o&&sa(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return Kt(i),null}if(t=J.current,lo(i))am(i);else{switch(u=vc(Se.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?u.createElement(r,{is:o.is}):u.createElement(r)}}t[fn]=i,t[bn]=o;e:for(u=i.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===i)break e;for(;u.sibling===null;){if(u.return===null||u.return===i)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}i.stateNode=t;e:switch(Rn(t,r,o),r){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&sa(i)}}return Kt(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==o&&sa(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(s(166));if(t=Se.current,lo(i)){if(t=i.stateNode,r=i.memoizedProps,o=null,u=Fn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[fn]=i,t=!!(t.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||Sv(t.nodeValue,r)),t||Er(i)}else t=vc(t).createTextNode(o),t[fn]=i,i.stateNode=t}return Kt(i),null;case 13:if(o=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=lo(i),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[fn]=i}else co(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Kt(i),u=!1}else u=sm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(aa(i),i):(aa(i),null)}if(aa(i),(i.flags&128)!==0)return i.lanes=r,i;if(r=o!==null,t=t!==null&&t.memoizedState!==null,r){o=i.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)}return r!==t&&r&&(i.child.flags|=8192),ac(i,i.updateQueue),Kt(i),null;case 4:return lt(),t===null&&sh(i.stateNode.containerInfo),Kt(i),null;case 10:return na(i.type),Kt(i),null;case 19:if(ye(pn),u=i.memoizedState,u===null)return Kt(i),null;if(o=(i.flags&128)!==0,d=u.rendering,d===null)if(o)Ao(u,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=$l(t),d!==null){for(i.flags|=128,Ao(u,!1),t=d.updateQueue,i.updateQueue=t,ac(i,t),i.subtreeFlags=0,t=r,r=i.child;r!==null;)nm(r,t),r=r.sibling;return Ee(pn,pn.current&1|2),i.child}t=t.sibling}u.tail!==null&&it()>oc&&(i.flags|=128,o=!0,Ao(u,!1),i.lanes=4194304)}else{if(!o)if(t=$l(d),t!==null){if(i.flags|=128,o=!0,t=t.updateQueue,i.updateQueue=t,ac(i,t),Ao(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!Ct)return Kt(i),null}else 2*it()-u.renderingStartTime>oc&&r!==536870912&&(i.flags|=128,o=!0,Ao(u,!1),i.lanes=4194304);u.isBackwards?(d.sibling=i.child,i.child=d):(t=u.last,t!==null?t.sibling=d:i.child=d,u.last=d)}return u.tail!==null?(i=u.tail,u.rendering=i,u.tail=i.sibling,u.renderingStartTime=it(),i.sibling=null,t=pn.current,Ee(pn,o?t&1|2:t&1),i):(Kt(i),null);case 22:case 23:return aa(i),lf(),o=i.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(r&536870912)!==0&&(i.flags&128)===0&&(Kt(i),i.subtreeFlags&6&&(i.flags|=8192)):Kt(i),r=i.updateQueue,r!==null&&ac(i,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==r&&(i.flags|=2048),t!==null&&ye(Tr),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),na(dn),Kt(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function my(t,i){switch(qu(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return na(dn),lt(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return jt(i),null;case 13:if(aa(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(s(340));co()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ye(pn),null;case 4:return lt(),null;case 10:return na(i.type),null;case 22:case 23:return aa(i),lf(),t!==null&&ye(Tr),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return na(dn),null;case 25:return null;default:return null}}function Cg(t,i){switch(qu(i),i.tag){case 3:na(dn),lt();break;case 26:case 27:case 5:jt(i);break;case 4:lt();break;case 13:aa(i);break;case 19:ye(pn);break;case 10:na(i.type);break;case 22:case 23:aa(i),lf(),t!==null&&ye(Tr);break;case 24:na(dn)}}function wo(t,i){try{var r=i.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var u=o.next;r=u;do{if((r.tag&t)===t){o=void 0;var d=r.create,E=r.inst;o=d(),E.destroy=o}r=r.next}while(r!==u)}}catch(T){kt(i,i.return,T)}}function Ia(t,i,r){try{var o=i.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var E=o.inst,T=E.destroy;if(T!==void 0){E.destroy=void 0,u=i;var B=r,$=T;try{$()}catch(ue){kt(u,B,ue)}}}o=o.next}while(o!==d)}}catch(ue){kt(i,i.return,ue)}}function Dg(t){var i=t.updateQueue;if(i!==null){var r=t.stateNode;try{vm(i,r)}catch(o){kt(t,t.return,o)}}}function Ug(t,i,r){r.props=wr(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(o){kt(t,i,o)}}function Ro(t,i){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof r=="function"?t.refCleanup=r(o):r.current=o}}catch(u){kt(t,i,u)}}function Oi(t,i){var r=t.ref,o=t.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(u){kt(t,i,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){kt(t,i,u)}else r.current=null}function Ng(t){var i=t.type,r=t.memoizedProps,o=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break e;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(u){kt(t,t.return,u)}}function Bf(t,i,r){try{var o=t.stateNode;By(o,t.type,r,i),o[bn]=i}catch(u){kt(t,t.return,u)}}function Lg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Wa(t.type)||t.tag===4}function zf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Lg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Wa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function If(t,i,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(t),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=gc));else if(o!==4&&(o===27&&Wa(t.type)&&(r=t.stateNode,i=null),t=t.child,t!==null))for(If(t,i,r),t=t.sibling;t!==null;)If(t,i,r),t=t.sibling}function rc(t,i,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,i?r.insertBefore(t,i):r.appendChild(t);else if(o!==4&&(o===27&&Wa(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(rc(t,i,r),t=t.sibling;t!==null;)rc(t,i,r),t=t.sibling}function Og(t){var i=t.stateNode,r=t.memoizedProps;try{for(var o=t.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);Rn(i,o,r),i[fn]=t,i[bn]=r}catch(d){kt(t,t.return,d)}}var oa=!1,an=!1,Ff=!1,Pg=typeof WeakSet=="function"?WeakSet:Set,yn=null;function gy(t,i){if(t=t.containerInfo,ch=Mc,t=Wp(t),Bu(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break e}var E=0,T=-1,B=-1,$=0,ue=0,_e=t,ne=null;t:for(;;){for(var ie;_e!==r||u!==0&&_e.nodeType!==3||(T=E+u),_e!==d||o!==0&&_e.nodeType!==3||(B=E+o),_e.nodeType===3&&(E+=_e.nodeValue.length),(ie=_e.firstChild)!==null;)ne=_e,_e=ie;for(;;){if(_e===t)break t;if(ne===r&&++$===u&&(T=E),ne===d&&++ue===o&&(B=E),(ie=_e.nextSibling)!==null)break;_e=ne,ne=_e.parentNode}_e=ie}r=T===-1||B===-1?null:{start:T,end:B}}else r=null}r=r||{start:0,end:0}}else r=null;for(uh={focusedElem:t,selectionRange:r},Mc=!1,yn=i;yn!==null;)if(i=yn,t=i.child,(i.subtreeFlags&1024)!==0&&t!==null)t.return=i,yn=t;else for(;yn!==null;){switch(i=yn,d=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,r=i,u=d.memoizedProps,d=d.memoizedState,o=r.stateNode;try{var tt=wr(r.type,u,r.elementType===r.type);t=o.getSnapshotBeforeUpdate(tt,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(Ze){kt(r,r.return,Ze)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,r=t.nodeType,r===9)dh(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":dh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=i.sibling,t!==null){t.return=i.return,yn=t;break}yn=i.return}}function Bg(t,i,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:Fa(t,r),o&4&&wo(5,r);break;case 1:if(Fa(t,r),o&4)if(t=r.stateNode,i===null)try{t.componentDidMount()}catch(E){kt(r,r.return,E)}else{var u=wr(r.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(u,i,t.__reactInternalSnapshotBeforeUpdate)}catch(E){kt(r,r.return,E)}}o&64&&Dg(r),o&512&&Ro(r,r.return);break;case 3:if(Fa(t,r),o&64&&(t=r.updateQueue,t!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{vm(t,i)}catch(E){kt(r,r.return,E)}}break;case 27:i===null&&o&4&&Og(r);case 26:case 5:Fa(t,r),i===null&&o&4&&Ng(r),o&512&&Ro(r,r.return);break;case 12:Fa(t,r);break;case 13:Fa(t,r),o&4&&Fg(t,r),o&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=Ty.bind(null,r),ky(t,r))));break;case 22:if(o=r.memoizedState!==null||oa,!o){i=i!==null&&i.memoizedState!==null||an,u=oa;var d=an;oa=o,(an=i)&&!d?Ha(t,r,(r.subtreeFlags&8772)!==0):Fa(t,r),oa=u,an=d}break;case 30:break;default:Fa(t,r)}}function zg(t){var i=t.alternate;i!==null&&(t.alternate=null,zg(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&wa(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Yt=null,qn=!1;function la(t,i,r){for(r=r.child;r!==null;)Ig(t,i,r),r=r.sibling}function Ig(t,i,r){if(Pe&&typeof Pe.onCommitFiberUnmount=="function")try{Pe.onCommitFiberUnmount(fe,r)}catch{}switch(r.tag){case 26:an||Oi(r,i),la(t,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:an||Oi(r,i);var o=Yt,u=qn;Wa(r.type)&&(Yt=r.stateNode,qn=!1),la(t,i,r),zo(r.stateNode),Yt=o,qn=u;break;case 5:an||Oi(r,i);case 6:if(o=Yt,u=qn,Yt=null,la(t,i,r),Yt=o,qn=u,Yt!==null)if(qn)try{(Yt.nodeType===9?Yt.body:Yt.nodeName==="HTML"?Yt.ownerDocument.body:Yt).removeChild(r.stateNode)}catch(d){kt(r,i,d)}else try{Yt.removeChild(r.stateNode)}catch(d){kt(r,i,d)}break;case 18:Yt!==null&&(qn?(t=Yt,Av(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),Xo(t)):Av(Yt,r.stateNode));break;case 4:o=Yt,u=qn,Yt=r.stateNode.containerInfo,qn=!0,la(t,i,r),Yt=o,qn=u;break;case 0:case 11:case 14:case 15:an||Ia(2,r,i),an||Ia(4,r,i),la(t,i,r);break;case 1:an||(Oi(r,i),o=r.stateNode,typeof o.componentWillUnmount=="function"&&Ug(r,i,o)),la(t,i,r);break;case 21:la(t,i,r);break;case 22:an=(o=an)||r.memoizedState!==null,la(t,i,r),an=o;break;default:la(t,i,r)}}function Fg(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Xo(t)}catch(r){kt(i,i.return,r)}}function vy(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new Pg),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new Pg),i;default:throw Error(s(435,t.tag))}}function Hf(t,i){var r=vy(t);i.forEach(function(o){var u=Ay.bind(null,t,o);r.has(o)||(r.add(o),o.then(u,u))})}function ni(t,i){var r=i.deletions;if(r!==null)for(var o=0;o<r.length;o++){var u=r[o],d=t,E=i,T=E;e:for(;T!==null;){switch(T.tag){case 27:if(Wa(T.type)){Yt=T.stateNode,qn=!1;break e}break;case 5:Yt=T.stateNode,qn=!1;break e;case 3:case 4:Yt=T.stateNode.containerInfo,qn=!0;break e}T=T.return}if(Yt===null)throw Error(s(160));Ig(d,E,u),Yt=null,qn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Hg(i,t),i=i.sibling}var Ei=null;function Hg(t,i){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ni(i,t),ii(t),o&4&&(Ia(3,t,t.return),wo(3,t),Ia(5,t,t.return));break;case 1:ni(i,t),ii(t),o&512&&(an||r===null||Oi(r,r.return)),o&64&&oa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var u=Ei;if(ni(i,t),ii(t),o&512&&(an||r===null||Oi(r,r.return)),o&4){var d=r!==null?r.memoizedState:null;if(o=t.memoizedState,r===null)if(o===null)if(t.stateNode===null){e:{o=t.type,r=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Aa]||d[fn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Rn(d,o,r),d[fn]=t,sn(d),o=d;break e;case"link":var E=Ov("link","href",u).get(o+(r.href||""));if(E){for(var T=0;T<E.length;T++)if(d=E[T],d.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&d.getAttribute("rel")===(r.rel==null?null:r.rel)&&d.getAttribute("title")===(r.title==null?null:r.title)&&d.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){E.splice(T,1);break t}}d=u.createElement(o),Rn(d,o,r),u.head.appendChild(d);break;case"meta":if(E=Ov("meta","content",u).get(o+(r.content||""))){for(T=0;T<E.length;T++)if(d=E[T],d.getAttribute("content")===(r.content==null?null:""+r.content)&&d.getAttribute("name")===(r.name==null?null:r.name)&&d.getAttribute("property")===(r.property==null?null:r.property)&&d.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&d.getAttribute("charset")===(r.charSet==null?null:r.charSet)){E.splice(T,1);break t}}d=u.createElement(o),Rn(d,o,r),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[fn]=t,sn(d),o=d}t.stateNode=o}else Pv(u,t.type,t.stateNode);else t.stateNode=Lv(u,o,t.memoizedProps);else d!==o?(d===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):d.count--,o===null?Pv(u,t.type,t.stateNode):Lv(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Bf(t,t.memoizedProps,r.memoizedProps)}break;case 27:ni(i,t),ii(t),o&512&&(an||r===null||Oi(r,r.return)),r!==null&&o&4&&Bf(t,t.memoizedProps,r.memoizedProps);break;case 5:if(ni(i,t),ii(t),o&512&&(an||r===null||Oi(r,r.return)),t.flags&32){u=t.stateNode;try{Ui(u,"")}catch(ie){kt(t,t.return,ie)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Bf(t,u,r!==null?r.memoizedProps:u)),o&1024&&(Ff=!0);break;case 6:if(ni(i,t),ii(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,r=t.stateNode;try{r.nodeValue=o}catch(ie){kt(t,t.return,ie)}}break;case 3:if(yc=null,u=Ei,Ei=_c(i.containerInfo),ni(i,t),Ei=u,ii(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{Xo(i.containerInfo)}catch(ie){kt(t,t.return,ie)}Ff&&(Ff=!1,Gg(t));break;case 4:o=Ei,Ei=_c(t.stateNode.containerInfo),ni(i,t),ii(t),Ei=o;break;case 12:ni(i,t),ii(t);break;case 13:ni(i,t),ii(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Wf=it()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Hf(t,o)));break;case 22:u=t.memoizedState!==null;var B=r!==null&&r.memoizedState!==null,$=oa,ue=an;if(oa=$||u,an=ue||B,ni(i,t),an=ue,oa=$,ii(t),o&8192)e:for(i=t.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(r===null||B||oa||an||Rr(t)),r=null,i=t;;){if(i.tag===5||i.tag===26){if(r===null){B=r=i;try{if(d=B.stateNode,u)E=d.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{T=B.stateNode;var _e=B.memoizedProps.style,ne=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;T.style.display=ne==null||typeof ne=="boolean"?"":(""+ne).trim()}}catch(ie){kt(B,B.return,ie)}}}else if(i.tag===6){if(r===null){B=i;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(ie){kt(B,B.return,ie)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=t.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,Hf(t,r))));break;case 19:ni(i,t),ii(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Hf(t,o)));break;case 30:break;case 21:break;default:ni(i,t),ii(t)}}function ii(t){var i=t.flags;if(i&2){try{for(var r,o=t.return;o!==null;){if(Lg(o)){r=o;break}o=o.return}if(r==null)throw Error(s(160));switch(r.tag){case 27:var u=r.stateNode,d=zf(t);rc(t,d,u);break;case 5:var E=r.stateNode;r.flags&32&&(Ui(E,""),r.flags&=-33);var T=zf(t);rc(t,T,E);break;case 3:case 4:var B=r.stateNode.containerInfo,$=zf(t);If(t,$,B);break;default:throw Error(s(161))}}catch(ue){kt(t,t.return,ue)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Gg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;Gg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Fa(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Bg(t,i.alternate,i),i=i.sibling}function Rr(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Ia(4,i,i.return),Rr(i);break;case 1:Oi(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&Ug(i,i.return,r),Rr(i);break;case 27:zo(i.stateNode);case 26:case 5:Oi(i,i.return),Rr(i);break;case 22:i.memoizedState===null&&Rr(i);break;case 30:Rr(i);break;default:Rr(i)}t=t.sibling}}function Ha(t,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,u=t,d=i,E=d.flags;switch(d.tag){case 0:case 11:case 15:Ha(u,d,r),wo(4,d);break;case 1:if(Ha(u,d,r),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch($){kt(o,o.return,$)}if(o=d,u=o.updateQueue,u!==null){var T=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)gm(B[u],T)}catch($){kt(o,o.return,$)}}r&&E&64&&Dg(d),Ro(d,d.return);break;case 27:Og(d);case 26:case 5:Ha(u,d,r),r&&o===null&&E&4&&Ng(d),Ro(d,d.return);break;case 12:Ha(u,d,r);break;case 13:Ha(u,d,r),r&&E&4&&Fg(u,d);break;case 22:d.memoizedState===null&&Ha(u,d,r),Ro(d,d.return);break;case 30:break;default:Ha(u,d,r)}i=i.sibling}}function Gf(t,i){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&ho(r))}function Vf(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&ho(t))}function Pi(t,i,r,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Vg(t,i,r,o),i=i.sibling}function Vg(t,i,r,o){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Pi(t,i,r,o),u&2048&&wo(9,i);break;case 1:Pi(t,i,r,o);break;case 3:Pi(t,i,r,o),u&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&ho(t)));break;case 12:if(u&2048){Pi(t,i,r,o),t=i.stateNode;try{var d=i.memoizedProps,E=d.id,T=d.onPostCommit;typeof T=="function"&&T(E,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){kt(i,i.return,B)}}else Pi(t,i,r,o);break;case 13:Pi(t,i,r,o);break;case 23:break;case 22:d=i.stateNode,E=i.alternate,i.memoizedState!==null?d._visibility&2?Pi(t,i,r,o):Co(t,i):d._visibility&2?Pi(t,i,r,o):(d._visibility|=2,fs(t,i,r,o,(i.subtreeFlags&10256)!==0)),u&2048&&Gf(E,i);break;case 24:Pi(t,i,r,o),u&2048&&Vf(i.alternate,i);break;default:Pi(t,i,r,o)}}function fs(t,i,r,o,u){for(u=u&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=t,E=i,T=r,B=o,$=E.flags;switch(E.tag){case 0:case 11:case 15:fs(d,E,T,B,u),wo(8,E);break;case 23:break;case 22:var ue=E.stateNode;E.memoizedState!==null?ue._visibility&2?fs(d,E,T,B,u):Co(d,E):(ue._visibility|=2,fs(d,E,T,B,u)),u&&$&2048&&Gf(E.alternate,E);break;case 24:fs(d,E,T,B,u),u&&$&2048&&Vf(E.alternate,E);break;default:fs(d,E,T,B,u)}i=i.sibling}}function Co(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=t,o=i,u=o.flags;switch(o.tag){case 22:Co(r,o),u&2048&&Gf(o.alternate,o);break;case 24:Co(r,o),u&2048&&Vf(o.alternate,o);break;default:Co(r,o)}i=i.sibling}}var Do=8192;function hs(t){if(t.subtreeFlags&Do)for(t=t.child;t!==null;)kg(t),t=t.sibling}function kg(t){switch(t.tag){case 26:hs(t),t.flags&Do&&t.memoizedState!==null&&nS(Ei,t.memoizedState,t.memoizedProps);break;case 5:hs(t);break;case 3:case 4:var i=Ei;Ei=_c(t.stateNode.containerInfo),hs(t),Ei=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Do,Do=16777216,hs(t),Do=i):hs(t));break;default:hs(t)}}function jg(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Uo(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var o=i[r];yn=o,Wg(o,t)}jg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Xg(t),t=t.sibling}function Xg(t){switch(t.tag){case 0:case 11:case 15:Uo(t),t.flags&2048&&Ia(9,t,t.return);break;case 3:Uo(t);break;case 12:Uo(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,sc(t)):Uo(t);break;default:Uo(t)}}function sc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var o=i[r];yn=o,Wg(o,t)}jg(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Ia(8,i,i.return),sc(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,sc(i));break;default:sc(i)}t=t.sibling}}function Wg(t,i){for(;yn!==null;){var r=yn;switch(r.tag){case 0:case 11:case 15:Ia(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ho(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,yn=o;else e:for(r=t;yn!==null;){o=yn;var u=o.sibling,d=o.return;if(zg(o),o===r){yn=null;break e}if(u!==null){u.return=d,yn=u;break e}yn=d}}}var _y={getCacheForType:function(t){var i=Ln(dn),r=i.data.get(t);return r===void 0&&(r=t(),i.data.set(t,r)),r}},xy=typeof WeakMap=="function"?WeakMap:Map,Dt=0,qt=null,mt=null,Et=0,Ut=0,ai=null,Ga=!1,ds=!1,kf=!1,ca=0,tn=0,Va=0,Cr=0,jf=0,gi=0,ps=0,No=null,Yn=null,Xf=!1,Wf=0,oc=1/0,lc=null,ka=null,wn=0,ja=null,ms=null,gs=0,qf=0,Yf=null,qg=null,Lo=0,Zf=null;function ri(){if((Dt&2)!==0&&Et!==0)return Et&-Et;if(z.T!==null){var t=is;return t!==0?t:nh()}return bt()}function Yg(){gi===0&&(gi=(Et&536870912)===0||Ct?j():536870912);var t=mi.current;return t!==null&&(t.flags|=32),gi}function si(t,i,r){(t===qt&&(Ut===2||Ut===9)||t.cancelPendingCommit!==null)&&(vs(t,0),Xa(t,Et,gi,!1)),ve(t,r),((Dt&2)===0||t!==qt)&&(t===qt&&((Dt&2)===0&&(Cr|=r),tn===4&&Xa(t,Et,gi,!1)),Bi(t))}function Zg(t,i,r){if((Dt&6)!==0)throw Error(s(327));var o=!r&&(i&124)===0&&(i&t.expiredLanes)===0||nt(t,i),u=o?Ey(t,i):Jf(t,i,!0),d=o;do{if(u===0){ds&&!o&&Xa(t,i,0,!1);break}else{if(r=t.current.alternate,d&&!yy(r)){u=Jf(t,i,!1),d=!1;continue}if(u===2){if(d=i,t.errorRecoveryDisabledLanes&d)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;e:{var T=t;u=No;var B=T.current.memoizedState.isDehydrated;if(B&&(vs(T,E).flags|=256),E=Jf(T,E,!1),E!==2){if(kf&&!B){T.errorRecoveryDisabledLanes|=d,Cr|=d,u=4;break e}d=Yn,Yn=u,d!==null&&(Yn===null?Yn=d:Yn.push.apply(Yn,d))}u=E}if(d=!1,u!==2)continue}}if(u===1){vs(t,0),Xa(t,i,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Xa(o,i,gi,!Ga);break e;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(u=Wf+300-it(),10<u)){if(Xa(o,i,gi,!Ga),ut(o,0,!0)!==0)break e;o.timeoutHandle=bv(Kg.bind(null,o,r,Yn,lc,Xf,i,gi,Cr,ps,Ga,d,2,-0,0),u);break e}Kg(o,r,Yn,lc,Xf,i,gi,Cr,ps,Ga,d,0,-0,0)}}break}while(!0);Bi(t)}function Kg(t,i,r,o,u,d,E,T,B,$,ue,_e,ne,ie){if(t.timeoutHandle=-1,_e=i.subtreeFlags,(_e&8192||(_e&16785408)===16785408)&&(Ho={stylesheets:null,count:0,unsuspend:tS},kg(i),_e=iS(),_e!==null)){t.cancelPendingCommit=_e(iv.bind(null,t,i,d,r,o,u,E,T,B,ue,1,ne,ie)),Xa(t,d,E,!$);return}iv(t,i,d,r,o,u,E,T,B)}function yy(t){for(var i=t;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var u=r[o],d=u.getSnapshot;u=u.value;try{if(!ei(d(),u))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Xa(t,i,r,o){i&=~jf,i&=~Cr,t.suspendedLanes|=i,t.pingedLanes&=~i,o&&(t.warmLanes|=i),o=t.expirationTimes;for(var u=i;0<u;){var d=31-Ge(u),E=1<<d;o[d]=-1,u&=~E}r!==0&&Oe(t,r,i)}function cc(){return(Dt&6)===0?(Oo(0),!1):!0}function Kf(){if(mt!==null){if(Ut===0)var t=mt.return;else t=mt,ta=Mr=null,df(t),cs=null,bo=0,t=mt;for(;t!==null;)Cg(t.alternate,t),t=t.return;mt=null}}function vs(t,i){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,Iy(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),Kf(),qt=t,mt=r=Ji(t.current,null),Et=i,Ut=0,ai=null,Ga=!1,ds=nt(t,i),kf=!1,ps=gi=jf=Cr=Va=tn=0,Yn=No=null,Xf=!1,(i&8)!==0&&(i|=i&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=i;0<o;){var u=31-Ge(o),d=1<<u;i|=t[u],o&=~d}return ca=i,Ul(),r}function Qg(t,i){ft=null,z.H=Kl,i===mo||i===Hl?(i=pm(),Ut=3):i===fm?(i=pm(),Ut=4):Ut=i===mg?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ai=i,mt===null&&(tn=1,tc(t,fi(i,t.current)))}function Jg(){var t=z.H;return z.H=Kl,t===null?Kl:t}function $g(){var t=z.A;return z.A=_y,t}function Qf(){tn=4,Ga||(Et&4194048)!==Et&&mi.current!==null||(ds=!0),(Va&134217727)===0&&(Cr&134217727)===0||qt===null||Xa(qt,Et,gi,!1)}function Jf(t,i,r){var o=Dt;Dt|=2;var u=Jg(),d=$g();(qt!==t||Et!==i)&&(lc=null,vs(t,i)),i=!1;var E=tn;e:do try{if(Ut!==0&&mt!==null){var T=mt,B=ai;switch(Ut){case 8:Kf(),E=6;break e;case 3:case 2:case 9:case 6:mi.current===null&&(i=!0);var $=Ut;if(Ut=0,ai=null,_s(t,T,B,$),r&&ds){E=0;break e}break;default:$=Ut,Ut=0,ai=null,_s(t,T,B,$)}}Sy(),E=tn;break}catch(ue){Qg(t,ue)}while(!0);return i&&t.shellSuspendCounter++,ta=Mr=null,Dt=o,z.H=u,z.A=d,mt===null&&(qt=null,Et=0,Ul()),E}function Sy(){for(;mt!==null;)ev(mt)}function Ey(t,i){var r=Dt;Dt|=2;var o=Jg(),u=$g();qt!==t||Et!==i?(lc=null,oc=it()+500,vs(t,i)):ds=nt(t,i);e:do try{if(Ut!==0&&mt!==null){i=mt;var d=ai;t:switch(Ut){case 1:Ut=0,ai=null,_s(t,i,d,1);break;case 2:case 9:if(hm(d)){Ut=0,ai=null,tv(i);break}i=function(){Ut!==2&&Ut!==9||qt!==t||(Ut=7),Bi(t)},d.then(i,i);break e;case 3:Ut=7;break e;case 4:Ut=5;break e;case 7:hm(d)?(Ut=0,ai=null,tv(i)):(Ut=0,ai=null,_s(t,i,d,7));break;case 5:var E=null;switch(mt.tag){case 26:E=mt.memoizedState;case 5:case 27:var T=mt;if(!E||Bv(E)){Ut=0,ai=null;var B=T.sibling;if(B!==null)mt=B;else{var $=T.return;$!==null?(mt=$,uc($)):mt=null}break t}}Ut=0,ai=null,_s(t,i,d,5);break;case 6:Ut=0,ai=null,_s(t,i,d,6);break;case 8:Kf(),tn=6;break e;default:throw Error(s(462))}}My();break}catch(ue){Qg(t,ue)}while(!0);return ta=Mr=null,z.H=o,z.A=u,Dt=r,mt!==null?0:(qt=null,Et=0,Ul(),tn)}function My(){for(;mt!==null&&!kn();)ev(mt)}function ev(t){var i=wg(t.alternate,t,ca);t.memoizedProps=t.pendingProps,i===null?uc(t):mt=i}function tv(t){var i=t,r=i.alternate;switch(i.tag){case 15:case 0:i=Sg(r,i,i.pendingProps,i.type,void 0,Et);break;case 11:i=Sg(r,i,i.pendingProps,i.type.render,i.ref,Et);break;case 5:df(i);default:Cg(r,i),i=mt=nm(i,ca),i=wg(r,i,ca)}t.memoizedProps=t.pendingProps,i===null?uc(t):mt=i}function _s(t,i,r,o){ta=Mr=null,df(i),cs=null,bo=0;var u=i.return;try{if(hy(t,u,i,r,Et)){tn=1,tc(t,fi(r,t.current)),mt=null;return}}catch(d){if(u!==null)throw mt=u,d;tn=1,tc(t,fi(r,t.current)),mt=null;return}i.flags&32768?(Ct||o===1?t=!0:ds||(Et&536870912)!==0?t=!1:(Ga=t=!0,(o===2||o===9||o===3||o===6)&&(o=mi.current,o!==null&&o.tag===13&&(o.flags|=16384))),nv(i,t)):uc(i)}function uc(t){var i=t;do{if((i.flags&32768)!==0){nv(i,Ga);return}t=i.return;var r=py(i.alternate,i,ca);if(r!==null){mt=r;return}if(i=i.sibling,i!==null){mt=i;return}mt=i=t}while(i!==null);tn===0&&(tn=5)}function nv(t,i){do{var r=my(t.alternate,t);if(r!==null){r.flags&=32767,mt=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(t=t.sibling,t!==null)){mt=t;return}mt=t=r}while(t!==null);tn=6,mt=null}function iv(t,i,r,o,u,d,E,T,B){t.cancelPendingCommit=null;do fc();while(wn!==0);if((Dt&6)!==0)throw Error(s(327));if(i!==null){if(i===t.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Gu,ze(t,r,d,E,T,B),t===qt&&(mt=qt=null,Et=0),ms=i,ja=t,gs=r,qf=d,Yf=u,qg=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,wy(O,function(){return lv(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,u=K.p,K.p=2,E=Dt,Dt|=4;try{gy(t,i,r)}finally{Dt=E,K.p=u,z.T=o}}wn=1,av(),rv(),sv()}}function av(){if(wn===1){wn=0;var t=ja,i=ms,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=z.T,z.T=null;var o=K.p;K.p=2;var u=Dt;Dt|=4;try{Hg(i,t);var d=uh,E=Wp(t.containerInfo),T=d.focusedElem,B=d.selectionRange;if(E!==T&&T&&T.ownerDocument&&Xp(T.ownerDocument.documentElement,T)){if(B!==null&&Bu(T)){var $=B.start,ue=B.end;if(ue===void 0&&(ue=$),"selectionStart"in T)T.selectionStart=$,T.selectionEnd=Math.min(ue,T.value.length);else{var _e=T.ownerDocument||document,ne=_e&&_e.defaultView||window;if(ne.getSelection){var ie=ne.getSelection(),tt=T.textContent.length,Ze=Math.min(B.start,tt),It=B.end===void 0?Ze:Math.min(B.end,tt);!ie.extend&&Ze>It&&(E=It,It=Ze,Ze=E);var X=jp(T,Ze),V=jp(T,It);if(X&&V&&(ie.rangeCount!==1||ie.anchorNode!==X.node||ie.anchorOffset!==X.offset||ie.focusNode!==V.node||ie.focusOffset!==V.offset)){var Q=_e.createRange();Q.setStart(X.node,X.offset),ie.removeAllRanges(),Ze>It?(ie.addRange(Q),ie.extend(V.node,V.offset)):(Q.setEnd(V.node,V.offset),ie.addRange(Q))}}}}for(_e=[],ie=T;ie=ie.parentNode;)ie.nodeType===1&&_e.push({element:ie,left:ie.scrollLeft,top:ie.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<_e.length;T++){var de=_e[T];de.element.scrollLeft=de.left,de.element.scrollTop=de.top}}Mc=!!ch,uh=ch=null}finally{Dt=u,K.p=o,z.T=r}}t.current=i,wn=2}}function rv(){if(wn===2){wn=0;var t=ja,i=ms,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=z.T,z.T=null;var o=K.p;K.p=2;var u=Dt;Dt|=4;try{Bg(t,i.alternate,i)}finally{Dt=u,K.p=o,z.T=r}}wn=3}}function sv(){if(wn===4||wn===3){wn=0,_t();var t=ja,i=ms,r=gs,o=qg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?wn=5:(wn=0,ms=ja=null,ov(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(ka=null),rn(r),i=i.stateNode,Pe&&typeof Pe.onCommitFiberRoot=="function")try{Pe.onCommitFiberRoot(fe,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=z.T,u=K.p,K.p=2,z.T=null;try{for(var d=t.onRecoverableError,E=0;E<o.length;E++){var T=o[E];d(T.value,{componentStack:T.stack})}}finally{z.T=i,K.p=u}}(gs&3)!==0&&fc(),Bi(t),u=t.pendingLanes,(r&4194090)!==0&&(u&42)!==0?t===Zf?Lo++:(Lo=0,Zf=t):Lo=0,Oo(0)}}function ov(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,ho(i)))}function fc(t){return av(),rv(),sv(),lv()}function lv(){if(wn!==5)return!1;var t=ja,i=qf;qf=0;var r=rn(gs),o=z.T,u=K.p;try{K.p=32>r?32:r,z.T=null,r=Yf,Yf=null;var d=ja,E=gs;if(wn=0,ms=ja=null,gs=0,(Dt&6)!==0)throw Error(s(331));var T=Dt;if(Dt|=4,Xg(d.current),Vg(d,d.current,E,r),Dt=T,Oo(0,!1),Pe&&typeof Pe.onPostCommitFiberRoot=="function")try{Pe.onPostCommitFiberRoot(fe,d)}catch{}return!0}finally{K.p=u,z.T=o,ov(t,i)}}function cv(t,i,r){i=fi(r,i),i=wf(t.stateNode,i,2),t=Oa(t,i,2),t!==null&&(ve(t,2),Bi(t))}function kt(t,i,r){if(t.tag===3)cv(t,t,r);else for(;i!==null;){if(i.tag===3){cv(i,t,r);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ka===null||!ka.has(o))){t=fi(r,t),r=dg(2),o=Oa(i,r,2),o!==null&&(pg(r,o,i,t),ve(o,2),Bi(o));break}}i=i.return}}function $f(t,i,r){var o=t.pingCache;if(o===null){o=t.pingCache=new xy;var u=new Set;o.set(i,u)}else u=o.get(i),u===void 0&&(u=new Set,o.set(i,u));u.has(r)||(kf=!0,u.add(r),t=by.bind(null,t,i,r),i.then(t,t))}function by(t,i,r){var o=t.pingCache;o!==null&&o.delete(i),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,qt===t&&(Et&r)===r&&(tn===4||tn===3&&(Et&62914560)===Et&&300>it()-Wf?(Dt&2)===0&&vs(t,0):jf|=r,ps===Et&&(ps=0)),Bi(t)}function uv(t,i){i===0&&(i=Le()),t=$r(t,i),t!==null&&(ve(t,i),Bi(t))}function Ty(t){var i=t.memoizedState,r=0;i!==null&&(r=i.retryLane),uv(t,r)}function Ay(t,i){var r=0;switch(t.tag){case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(r=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(i),uv(t,r)}function wy(t,i){return ht(t,i)}var hc=null,xs=null,eh=!1,dc=!1,th=!1,Dr=0;function Bi(t){t!==xs&&t.next===null&&(xs===null?hc=xs=t:xs=xs.next=t),dc=!0,eh||(eh=!0,Cy())}function Oo(t,i){if(!th&&dc){th=!0;do for(var r=!1,o=hc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var E=o.suspendedLanes,T=o.pingedLanes;d=(1<<31-Ge(42|t)+1)-1,d&=u&~(E&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(r=!0,pv(o,d))}else d=Et,d=ut(o,o===qt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||nt(o,d)||(r=!0,pv(o,d));o=o.next}while(r);th=!1}}function Ry(){fv()}function fv(){dc=eh=!1;var t=0;Dr!==0&&(zy()&&(t=Dr),Dr=0);for(var i=it(),r=null,o=hc;o!==null;){var u=o.next,d=hv(o,i);d===0?(o.next=null,r===null?hc=u:r.next=u,u===null&&(xs=r)):(r=o,(t!==0||(d&3)!==0)&&(dc=!0)),o=u}Oo(t)}function hv(t,i){for(var r=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var E=31-Ge(d),T=1<<E,B=u[E];B===-1?((T&r)===0||(T&o)!==0)&&(u[E]=Pt(T,i)):B<=i&&(t.expiredLanes|=T),d&=~T}if(i=qt,r=Et,r=ut(t,t===i?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,r===0||t===i&&(Ut===2||Ut===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&H(o),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||nt(t,r)){if(i=r&-r,i===t.callbackPriority)return i;switch(o!==null&&H(o),rn(r)){case 2:case 8:r=Ve;break;case 32:r=O;break;case 268435456:r=te;break;default:r=O}return o=dv.bind(null,t),r=ht(r,o),t.callbackPriority=i,t.callbackNode=r,i}return o!==null&&o!==null&&H(o),t.callbackPriority=2,t.callbackNode=null,2}function dv(t,i){if(wn!==0&&wn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(fc()&&t.callbackNode!==r)return null;var o=Et;return o=ut(t,t===qt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Zg(t,o,i),hv(t,it()),t.callbackNode!=null&&t.callbackNode===r?dv.bind(null,t):null)}function pv(t,i){if(fc())return null;Zg(t,i,!0)}function Cy(){Fy(function(){(Dt&6)!==0?ht(Ot,Ry):fv()})}function nh(){return Dr===0&&(Dr=j()),Dr}function mv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:bl(""+t)}function gv(t,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,t.id&&r.setAttribute("form",t.id),i.parentNode.insertBefore(r,i),t=new FormData(t),r.parentNode.removeChild(r),t}function Dy(t,i,r,o,u){if(i==="submit"&&r&&r.stateNode===u){var d=mv((u[bn]||null).action),E=o.submitter;E&&(i=(i=E[bn]||null)?mv(i.formAction):E.getAttribute("formAction"),i!==null&&(d=i,E=null));var T=new Rl("action","action",null,o,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Dr!==0){var B=E?gv(u,E):new FormData(u);Ef(r,{pending:!0,data:B,method:u.method,action:d},null,B)}}else typeof d=="function"&&(T.preventDefault(),B=E?gv(u,E):new FormData(u),Ef(r,{pending:!0,data:B,method:u.method,action:d},d,B))},currentTarget:u}]})}}for(var ih=0;ih<Hu.length;ih++){var ah=Hu[ih],Uy=ah.toLowerCase(),Ny=ah[0].toUpperCase()+ah.slice(1);Si(Uy,"on"+Ny)}Si(Zp,"onAnimationEnd"),Si(Kp,"onAnimationIteration"),Si(Qp,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(Zx,"onTransitionRun"),Si(Kx,"onTransitionStart"),Si(Qx,"onTransitionCancel"),Si(Jp,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),Yi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Yi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Yi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Yi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Yi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Yi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ly=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Po));function vv(t,i){i=(i&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],u=o.event;o=o.listeners;e:{var d=void 0;if(i)for(var E=o.length-1;0<=E;E--){var T=o[E],B=T.instance,$=T.currentTarget;if(T=T.listener,B!==d&&u.isPropagationStopped())break e;d=T,u.currentTarget=$;try{d(u)}catch(ue){ec(ue)}u.currentTarget=null,d=B}else for(E=0;E<o.length;E++){if(T=o[E],B=T.instance,$=T.currentTarget,T=T.listener,B!==d&&u.isPropagationStopped())break e;d=T,u.currentTarget=$;try{d(u)}catch(ue){ec(ue)}u.currentTarget=null,d=B}}}}function gt(t,i){var r=i[hr];r===void 0&&(r=i[hr]=new Set);var o=t+"__bubble";r.has(o)||(_v(i,t,2,!1),r.add(o))}function rh(t,i,r){var o=0;i&&(o|=4),_v(r,t,o,i)}var pc="_reactListening"+Math.random().toString(36).slice(2);function sh(t){if(!t[pc]){t[pc]=!0,El.forEach(function(r){r!=="selectionchange"&&(Ly.has(r)||rh(r,!1,t),rh(r,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[pc]||(i[pc]=!0,rh("selectionchange",!1,i))}}function _v(t,i,r,o){switch(Vv(i)){case 2:var u=sS;break;case 8:u=oS;break;default:u=yh}r=u.bind(null,i,r,t),u=void 0,!wu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(i,r,{capture:!0,passive:u}):t.addEventListener(i,r,!0):u!==void 0?t.addEventListener(i,r,{passive:u}):t.addEventListener(i,r,!1)}function oh(t,i,r,o,u){var d=o;if((i&1)===0&&(i&2)===0&&o!==null)e:for(;;){if(o===null)return;var E=o.tag;if(E===3||E===4){var T=o.stateNode.containerInfo;if(T===u)break;if(E===4)for(E=o.return;E!==null;){var B=E.tag;if((B===3||B===4)&&E.stateNode.containerInfo===u)return;E=E.return}for(;T!==null;){if(E=Wi(T),E===null)return;if(B=E.tag,B===5||B===6||B===26||B===27){o=d=E;continue e}T=T.parentNode}}o=o.return}Tp(function(){var $=d,ue=Tu(r),_e=[];e:{var ne=$p.get(t);if(ne!==void 0){var ie=Rl,tt=t;switch(t){case"keypress":if(Al(r)===0)break e;case"keydown":case"keyup":ie=wx;break;case"focusin":tt="focus",ie=Uu;break;case"focusout":tt="blur",ie=Uu;break;case"beforeblur":case"afterblur":ie=Uu;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=Rp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=mx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=Dx;break;case Zp:case Kp:case Qp:ie=_x;break;case Jp:ie=Nx;break;case"scroll":case"scrollend":ie=dx;break;case"wheel":ie=Ox;break;case"copy":case"cut":case"paste":ie=yx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=Dp;break;case"toggle":case"beforetoggle":ie=Bx}var Ze=(i&4)!==0,It=!Ze&&(t==="scroll"||t==="scrollend"),X=Ze?ne!==null?ne+"Capture":null:ne;Ze=[];for(var V=$,Q;V!==null;){var de=V;if(Q=de.stateNode,de=de.tag,de!==5&&de!==26&&de!==27||Q===null||X===null||(de=$s(V,X),de!=null&&Ze.push(Bo(V,de,Q))),It)break;V=V.return}0<Ze.length&&(ne=new ie(ne,tt,null,r,ue),_e.push({event:ne,listeners:Ze}))}}if((i&7)===0){e:{if(ne=t==="mouseover"||t==="pointerover",ie=t==="mouseout"||t==="pointerout",ne&&r!==bu&&(tt=r.relatedTarget||r.fromElement)&&(Wi(tt)||tt[jn]))break e;if((ie||ne)&&(ne=ue.window===ue?ue:(ne=ue.ownerDocument)?ne.defaultView||ne.parentWindow:window,ie?(tt=r.relatedTarget||r.toElement,ie=$,tt=tt?Wi(tt):null,tt!==null&&(It=c(tt),Ze=tt.tag,tt!==It||Ze!==5&&Ze!==27&&Ze!==6)&&(tt=null)):(ie=null,tt=$),ie!==tt)){if(Ze=Rp,de="onMouseLeave",X="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(Ze=Dp,de="onPointerLeave",X="onPointerEnter",V="pointer"),It=ie==null?ne:pr(ie),Q=tt==null?ne:pr(tt),ne=new Ze(de,V+"leave",ie,r,ue),ne.target=It,ne.relatedTarget=Q,de=null,Wi(ue)===$&&(Ze=new Ze(X,V+"enter",tt,r,ue),Ze.target=Q,Ze.relatedTarget=It,de=Ze),It=de,ie&&tt)t:{for(Ze=ie,X=tt,V=0,Q=Ze;Q;Q=ys(Q))V++;for(Q=0,de=X;de;de=ys(de))Q++;for(;0<V-Q;)Ze=ys(Ze),V--;for(;0<Q-V;)X=ys(X),Q--;for(;V--;){if(Ze===X||X!==null&&Ze===X.alternate)break t;Ze=ys(Ze),X=ys(X)}Ze=null}else Ze=null;ie!==null&&xv(_e,ne,ie,Ze,!1),tt!==null&&It!==null&&xv(_e,It,tt,Ze,!0)}}e:{if(ne=$?pr($):window,ie=ne.nodeName&&ne.nodeName.toLowerCase(),ie==="select"||ie==="input"&&ne.type==="file")var He=Ip;else if(Bp(ne))if(Fp)He=Wx;else{He=jx;var dt=kx}else ie=ne.nodeName,!ie||ie.toLowerCase()!=="input"||ne.type!=="checkbox"&&ne.type!=="radio"?$&&Mu($.elementType)&&(He=Ip):He=Xx;if(He&&(He=He(t,$))){zp(_e,He,r,ue);break e}dt&&dt(t,ne,$),t==="focusout"&&$&&ne.type==="number"&&$.memoizedProps.value!=null&&Nn(ne,"number",ne.value)}switch(dt=$?pr($):window,t){case"focusin":(Bp(dt)||dt.contentEditable==="true")&&(Kr=dt,zu=$,oo=null);break;case"focusout":oo=zu=Kr=null;break;case"mousedown":Iu=!0;break;case"contextmenu":case"mouseup":case"dragend":Iu=!1,qp(_e,r,ue);break;case"selectionchange":if(Yx)break;case"keydown":case"keyup":qp(_e,r,ue)}var ke;if(Lu)e:{switch(t){case"compositionstart":var Je="onCompositionStart";break e;case"compositionend":Je="onCompositionEnd";break e;case"compositionupdate":Je="onCompositionUpdate";break e}Je=void 0}else Zr?Op(t,r)&&(Je="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(Je="onCompositionStart");Je&&(Up&&r.locale!=="ko"&&(Zr||Je!=="onCompositionStart"?Je==="onCompositionEnd"&&Zr&&(ke=Ap()):(Da=ue,Ru="value"in Da?Da.value:Da.textContent,Zr=!0)),dt=mc($,Je),0<dt.length&&(Je=new Cp(Je,t,null,r,ue),_e.push({event:Je,listeners:dt}),ke?Je.data=ke:(ke=Pp(r),ke!==null&&(Je.data=ke)))),(ke=Ix?Fx(t,r):Hx(t,r))&&(Je=mc($,"onBeforeInput"),0<Je.length&&(dt=new Cp("onBeforeInput","beforeinput",null,r,ue),_e.push({event:dt,listeners:Je}),dt.data=ke)),Dy(_e,t,$,r,ue)}vv(_e,i)})}function Bo(t,i,r){return{instance:t,listener:i,currentTarget:r}}function mc(t,i){for(var r=i+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=$s(t,r),u!=null&&o.unshift(Bo(t,u,d)),u=$s(t,i),u!=null&&o.push(Bo(t,u,d))),t.tag===3)return o;t=t.return}return[]}function ys(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function xv(t,i,r,o,u){for(var d=i._reactName,E=[];r!==null&&r!==o;){var T=r,B=T.alternate,$=T.stateNode;if(T=T.tag,B!==null&&B===o)break;T!==5&&T!==26&&T!==27||$===null||(B=$,u?($=$s(r,d),$!=null&&E.unshift(Bo(r,$,B))):u||($=$s(r,d),$!=null&&E.push(Bo(r,$,B)))),r=r.return}E.length!==0&&t.push({event:i,listeners:E})}var Oy=/\r\n?/g,Py=/\u0000|\uFFFD/g;function yv(t){return(typeof t=="string"?t:""+t).replace(Oy,`
`).replace(Py,"")}function Sv(t,i){return i=yv(i),yv(t)===i}function gc(){}function zt(t,i,r,o,u,d){switch(r){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||Ui(t,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&Ui(t,""+o);break;case"className":Ce(t,"class",o);break;case"tabIndex":Ce(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ce(t,r,o);break;case"style":Mp(t,o,d);break;case"data":if(i!=="object"){Ce(t,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||r!=="href")){t.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=bl(""+o),t.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(r==="formAction"?(i!=="input"&&zt(t,i,"name",u.name,u,null),zt(t,i,"formEncType",u.formEncType,u,null),zt(t,i,"formMethod",u.formMethod,u,null),zt(t,i,"formTarget",u.formTarget,u,null)):(zt(t,i,"encType",u.encType,u,null),zt(t,i,"method",u.method,u,null),zt(t,i,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=bl(""+o),t.setAttribute(r,o);break;case"onClick":o!=null&&(t.onclick=gc);break;case"onScroll":o!=null&&gt("scroll",t);break;case"onScrollEnd":o!=null&&gt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=r}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}r=bl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""+o):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":o===!0?t.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,o):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(r,o):t.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(r):t.setAttribute(r,o);break;case"popover":gt("beforetoggle",t),gt("toggle",t),Te(t,"popover",o);break;case"xlinkActuate":De(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":De(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":De(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":De(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":De(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":De(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":De(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":De(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":De(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Te(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=fx.get(r)||r,Te(t,r,o))}}function lh(t,i,r,o,u,d){switch(r){case"style":Mp(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=r}}break;case"children":typeof o=="string"?Ui(t,o):(typeof o=="number"||typeof o=="bigint")&&Ui(t,""+o);break;case"onScroll":o!=null&&gt("scroll",t);break;case"onScrollEnd":o!=null&&gt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=gc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ml.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),i=r.slice(2,u?r.length-7:void 0),d=t[bn]||null,d=d!=null?d[r]:null,typeof d=="function"&&t.removeEventListener(i,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(i,o,u);break e}r in t?t[r]=o:o===!0?t.setAttribute(r,""):Te(t,r,o)}}}function Rn(t,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",t),gt("load",t);var o=!1,u=!1,d;for(d in r)if(r.hasOwnProperty(d)){var E=r[d];if(E!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:zt(t,i,d,E,r,null)}}u&&zt(t,i,"srcSet",r.srcSet,r,null),o&&zt(t,i,"src",r.src,r,null);return;case"input":gt("invalid",t);var T=d=E=u=null,B=null,$=null;for(o in r)if(r.hasOwnProperty(o)){var ue=r[o];if(ue!=null)switch(o){case"name":u=ue;break;case"type":E=ue;break;case"checked":B=ue;break;case"defaultChecked":$=ue;break;case"value":d=ue;break;case"defaultValue":T=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(s(137,i));break;default:zt(t,i,o,ue,r,null)}}Vt(t,d,T,B,$,E,u,!1),$t(t);return;case"select":gt("invalid",t),o=E=d=null;for(u in r)if(r.hasOwnProperty(u)&&(T=r[u],T!=null))switch(u){case"value":d=T;break;case"defaultValue":E=T;break;case"multiple":o=T;default:zt(t,i,u,T,r,null)}i=d,r=E,t.multiple=!!o,i!=null?hn(t,!!o,i,!1):r!=null&&hn(t,!!o,r,!0);return;case"textarea":gt("invalid",t),d=u=o=null;for(E in r)if(r.hasOwnProperty(E)&&(T=r[E],T!=null))switch(E){case"value":o=T;break;case"defaultValue":u=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:zt(t,i,E,T,r,null)}Tn(t,o,u,d),$t(t);return;case"option":for(B in r)if(r.hasOwnProperty(B)&&(o=r[B],o!=null))switch(B){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:zt(t,i,B,o,r,null)}return;case"dialog":gt("beforetoggle",t),gt("toggle",t),gt("cancel",t),gt("close",t);break;case"iframe":case"object":gt("load",t);break;case"video":case"audio":for(o=0;o<Po.length;o++)gt(Po[o],t);break;case"image":gt("error",t),gt("load",t);break;case"details":gt("toggle",t);break;case"embed":case"source":case"link":gt("error",t),gt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in r)if(r.hasOwnProperty($)&&(o=r[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:zt(t,i,$,o,r,null)}return;default:if(Mu(i)){for(ue in r)r.hasOwnProperty(ue)&&(o=r[ue],o!==void 0&&lh(t,i,ue,o,r,void 0));return}}for(T in r)r.hasOwnProperty(T)&&(o=r[T],o!=null&&zt(t,i,T,o,r,null))}function By(t,i,r,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,E=null,T=null,B=null,$=null,ue=null;for(ie in r){var _e=r[ie];if(r.hasOwnProperty(ie)&&_e!=null)switch(ie){case"checked":break;case"value":break;case"defaultValue":B=_e;default:o.hasOwnProperty(ie)||zt(t,i,ie,null,o,_e)}}for(var ne in o){var ie=o[ne];if(_e=r[ne],o.hasOwnProperty(ne)&&(ie!=null||_e!=null))switch(ne){case"type":d=ie;break;case"name":u=ie;break;case"checked":$=ie;break;case"defaultChecked":ue=ie;break;case"value":E=ie;break;case"defaultValue":T=ie;break;case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(s(137,i));break;default:ie!==_e&&zt(t,i,ne,ie,o,_e)}}Zi(t,E,T,B,$,ue,d,u);return;case"select":ie=E=T=ne=null;for(d in r)if(B=r[d],r.hasOwnProperty(d)&&B!=null)switch(d){case"value":break;case"multiple":ie=B;default:o.hasOwnProperty(d)||zt(t,i,d,null,o,B)}for(u in o)if(d=o[u],B=r[u],o.hasOwnProperty(u)&&(d!=null||B!=null))switch(u){case"value":ne=d;break;case"defaultValue":T=d;break;case"multiple":E=d;default:d!==B&&zt(t,i,u,d,o,B)}i=T,r=E,o=ie,ne!=null?hn(t,!!r,ne,!1):!!o!=!!r&&(i!=null?hn(t,!!r,i,!0):hn(t,!!r,r?[]:"",!1));return;case"textarea":ie=ne=null;for(T in r)if(u=r[T],r.hasOwnProperty(T)&&u!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:zt(t,i,T,null,o,u)}for(E in o)if(u=o[E],d=r[E],o.hasOwnProperty(E)&&(u!=null||d!=null))switch(E){case"value":ne=u;break;case"defaultValue":ie=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&zt(t,i,E,u,o,d)}_n(t,ne,ie);return;case"option":for(var tt in r)if(ne=r[tt],r.hasOwnProperty(tt)&&ne!=null&&!o.hasOwnProperty(tt))switch(tt){case"selected":t.selected=!1;break;default:zt(t,i,tt,null,o,ne)}for(B in o)if(ne=o[B],ie=r[B],o.hasOwnProperty(B)&&ne!==ie&&(ne!=null||ie!=null))switch(B){case"selected":t.selected=ne&&typeof ne!="function"&&typeof ne!="symbol";break;default:zt(t,i,B,ne,o,ie)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ze in r)ne=r[Ze],r.hasOwnProperty(Ze)&&ne!=null&&!o.hasOwnProperty(Ze)&&zt(t,i,Ze,null,o,ne);for($ in o)if(ne=o[$],ie=r[$],o.hasOwnProperty($)&&ne!==ie&&(ne!=null||ie!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(s(137,i));break;default:zt(t,i,$,ne,o,ie)}return;default:if(Mu(i)){for(var It in r)ne=r[It],r.hasOwnProperty(It)&&ne!==void 0&&!o.hasOwnProperty(It)&&lh(t,i,It,void 0,o,ne);for(ue in o)ne=o[ue],ie=r[ue],!o.hasOwnProperty(ue)||ne===ie||ne===void 0&&ie===void 0||lh(t,i,ue,ne,o,ie);return}}for(var X in r)ne=r[X],r.hasOwnProperty(X)&&ne!=null&&!o.hasOwnProperty(X)&&zt(t,i,X,null,o,ne);for(_e in o)ne=o[_e],ie=r[_e],!o.hasOwnProperty(_e)||ne===ie||ne==null&&ie==null||zt(t,i,_e,ne,o,ie)}var ch=null,uh=null;function vc(t){return t.nodeType===9?t:t.ownerDocument}function Ev(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Mv(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function fh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var hh=null;function zy(){var t=window.event;return t&&t.type==="popstate"?t===hh?!1:(hh=t,!0):(hh=null,!1)}var bv=typeof setTimeout=="function"?setTimeout:void 0,Iy=typeof clearTimeout=="function"?clearTimeout:void 0,Tv=typeof Promise=="function"?Promise:void 0,Fy=typeof queueMicrotask=="function"?queueMicrotask:typeof Tv<"u"?function(t){return Tv.resolve(null).then(t).catch(Hy)}:bv;function Hy(t){setTimeout(function(){throw t})}function Wa(t){return t==="head"}function Av(t,i){var r=i,o=0,u=0;do{var d=r.nextSibling;if(t.removeChild(r),d&&d.nodeType===8)if(r=d.data,r==="/$"){if(0<o&&8>o){r=o;var E=t.ownerDocument;if(r&1&&zo(E.documentElement),r&2&&zo(E.body),r&4)for(r=E.head,zo(r),E=r.firstChild;E;){var T=E.nextSibling,B=E.nodeName;E[Aa]||B==="SCRIPT"||B==="STYLE"||B==="LINK"&&E.rel.toLowerCase()==="stylesheet"||r.removeChild(E),E=T}}if(u===0){t.removeChild(d),Xo(i);return}u--}else r==="$"||r==="$?"||r==="$!"?u++:o=r.charCodeAt(0)-48;else o=0;r=d}while(r);Xo(i)}function dh(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":dh(r),wa(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function Gy(t,i,r,o){for(;t.nodeType===1;){var u=r;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Aa])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Mi(t.nextSibling),t===null)break}return null}function Vy(t,i,r){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=Mi(t.nextSibling),t===null))return null;return t}function ph(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function ky(t,i){var r=t.ownerDocument;if(t.data!=="$?"||r.readyState==="complete")i();else{var o=function(){i(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Mi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}var mh=null;function wv(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(i===0)return t;i--}else r==="/$"&&i++}t=t.previousSibling}return null}function Rv(t,i,r){switch(i=vc(r),t){case"html":if(t=i.documentElement,!t)throw Error(s(452));return t;case"head":if(t=i.head,!t)throw Error(s(453));return t;case"body":if(t=i.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function zo(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);wa(t)}var vi=new Map,Cv=new Set;function _c(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ua=K.d;K.d={f:jy,r:Xy,D:Wy,C:qy,L:Yy,m:Zy,X:Qy,S:Ky,M:Jy};function jy(){var t=ua.f(),i=cc();return t||i}function Xy(t){var i=qi(t);i!==null&&i.tag===5&&i.type==="form"?Zm(i):ua.r(t)}var Ss=typeof document>"u"?null:document;function Dv(t,i,r){var o=Ss;if(o&&typeof i=="string"&&i){var u=Wt(i);u='link[rel="'+t+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),Cv.has(u)||(Cv.add(u),t={rel:t,crossOrigin:r,href:i},o.querySelector(u)===null&&(i=o.createElement("link"),Rn(i,"link",t),sn(i),o.head.appendChild(i)))}}function Wy(t){ua.D(t),Dv("dns-prefetch",t,null)}function qy(t,i){ua.C(t,i),Dv("preconnect",t,i)}function Yy(t,i,r){ua.L(t,i,r);var o=Ss;if(o&&t&&i){var u='link[rel="preload"][as="'+Wt(i)+'"]';i==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+Wt(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+Wt(r.imageSizes)+'"]')):u+='[href="'+Wt(t)+'"]';var d=u;switch(i){case"style":d=Es(t);break;case"script":d=Ms(t)}vi.has(d)||(t=g({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:t,as:i},r),vi.set(d,t),o.querySelector(u)!==null||i==="style"&&o.querySelector(Io(d))||i==="script"&&o.querySelector(Fo(d))||(i=o.createElement("link"),Rn(i,"link",t),sn(i),o.head.appendChild(i)))}}function Zy(t,i){ua.m(t,i);var r=Ss;if(r&&t){var o=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+Wt(o)+'"][href="'+Wt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ms(t)}if(!vi.has(d)&&(t=g({rel:"modulepreload",href:t},i),vi.set(d,t),r.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Fo(d)))return}o=r.createElement("link"),Rn(o,"link",t),sn(o),r.head.appendChild(o)}}}function Ky(t,i,r){ua.S(t,i,r);var o=Ss;if(o&&t){var u=Ra(o).hoistableStyles,d=Es(t);i=i||"default";var E=u.get(d);if(!E){var T={loading:0,preload:null};if(E=o.querySelector(Io(d)))T.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":i},r),(r=vi.get(d))&&gh(t,r);var B=E=o.createElement("link");sn(B),Rn(B,"link",t),B._p=new Promise(function($,ue){B.onload=$,B.onerror=ue}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,xc(E,i,o)}E={type:"stylesheet",instance:E,count:1,state:T},u.set(d,E)}}}function Qy(t,i){ua.X(t,i);var r=Ss;if(r&&t){var o=Ra(r).hoistableScripts,u=Ms(t),d=o.get(u);d||(d=r.querySelector(Fo(u)),d||(t=g({src:t,async:!0},i),(i=vi.get(u))&&vh(t,i),d=r.createElement("script"),sn(d),Rn(d,"link",t),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Jy(t,i){ua.M(t,i);var r=Ss;if(r&&t){var o=Ra(r).hoistableScripts,u=Ms(t),d=o.get(u);d||(d=r.querySelector(Fo(u)),d||(t=g({src:t,async:!0,type:"module"},i),(i=vi.get(u))&&vh(t,i),d=r.createElement("script"),sn(d),Rn(d,"link",t),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Uv(t,i,r,o){var u=(u=Se.current)?_c(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=Es(r.href),r=Ra(u).hoistableStyles,o=r.get(i),o||(o={type:"style",instance:null,count:0,state:null},r.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=Es(r.href);var d=Ra(u).hoistableStyles,E=d.get(t);if(E||(u=u.ownerDocument||u,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,E),(d=u.querySelector(Io(t)))&&!d._p&&(E.instance=d,E.state.loading=5),vi.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},vi.set(t,r),d||$y(u,t,r,E.state))),i&&o===null)throw Error(s(528,""));return E}if(i&&o!==null)throw Error(s(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ms(r),r=Ra(u).hoistableScripts,o=r.get(i),o||(o={type:"script",instance:null,count:0,state:null},r.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Es(t){return'href="'+Wt(t)+'"'}function Io(t){return'link[rel="stylesheet"]['+t+"]"}function Nv(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function $y(t,i,r,o){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=t.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),Rn(i,"link",r),sn(i),t.head.appendChild(i))}function Ms(t){return'[src="'+Wt(t)+'"]'}function Fo(t){return"script[async]"+t}function Lv(t,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var o=t.querySelector('style[data-href~="'+Wt(r.href)+'"]');if(o)return i.instance=o,sn(o),o;var u=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),sn(o),Rn(o,"style",u),xc(o,r.precedence,t),i.instance=o;case"stylesheet":u=Es(r.href);var d=t.querySelector(Io(u));if(d)return i.state.loading|=4,i.instance=d,sn(d),d;o=Nv(r),(u=vi.get(u))&&gh(o,u),d=(t.ownerDocument||t).createElement("link"),sn(d);var E=d;return E._p=new Promise(function(T,B){E.onload=T,E.onerror=B}),Rn(d,"link",o),i.state.loading|=4,xc(d,r.precedence,t),i.instance=d;case"script":return d=Ms(r.src),(u=t.querySelector(Fo(d)))?(i.instance=u,sn(u),u):(o=r,(u=vi.get(d))&&(o=g({},r),vh(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),sn(u),Rn(u,"link",o),t.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,xc(o,r.precedence,t));return i.instance}function xc(t,i,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,E=0;E<o.length;E++){var T=o[E];if(T.dataset.precedence===i)d=T;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(t,i.firstChild))}function gh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function vh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var yc=null;function Ov(t,i,r){if(yc===null){var o=new Map,u=yc=new Map;u.set(r,o)}else u=yc,o=u.get(r),o||(o=new Map,u.set(r,o));if(o.has(t))return o;for(o.set(t,null),r=r.getElementsByTagName(t),u=0;u<r.length;u++){var d=r[u];if(!(d[Aa]||d[fn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var E=d.getAttribute(i)||"";E=t+E;var T=o.get(E);T?T.push(d):o.set(E,[d])}}return o}function Pv(t,i,r){t=t.ownerDocument||t,t.head.insertBefore(r,i==="title"?t.querySelector("head > title"):null)}function eS(t,i,r){if(r===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Bv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Ho=null;function tS(){}function nS(t,i,r){if(Ho===null)throw Error(s(475));var o=Ho;if(i.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var u=Es(r.href),d=t.querySelector(Io(u));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=Sc.bind(o),t.then(o,o)),i.state.loading|=4,i.instance=d,sn(d);return}d=t.ownerDocument||t,r=Nv(r),(u=vi.get(u))&&gh(r,u),d=d.createElement("link"),sn(d);var E=d;E._p=new Promise(function(T,B){E.onload=T,E.onerror=B}),Rn(d,"link",r),i.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(o.count++,i=Sc.bind(o),t.addEventListener("load",i),t.addEventListener("error",i))}}function iS(){if(Ho===null)throw Error(s(475));var t=Ho;return t.stylesheets&&t.count===0&&_h(t,t.stylesheets),0<t.count?function(i){var r=setTimeout(function(){if(t.stylesheets&&_h(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(r)}}:null}function Sc(){if(this.count--,this.count===0){if(this.stylesheets)_h(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ec=null;function _h(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ec=new Map,i.forEach(aS,t),Ec=null,Sc.call(t))}function aS(t,i){if(!(i.state.loading&4)){var r=Ec.get(t);if(r)var o=r.get(null);else{r=new Map,Ec.set(t,r);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var E=u[d];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(r.set(E.dataset.precedence,E),o=E)}o&&r.set(null,o)}u=i.instance,E=u.getAttribute("data-precedence"),d=r.get(E)||o,d===o&&r.set(null,u),r.set(E,u),this.count++,o=Sc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),i.state.loading|=4}}var Go={$$typeof:D,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function rS(t,i,r,o,u,d,E,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=le(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=le(0),this.hiddenUpdates=le(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function zv(t,i,r,o,u,d,E,T,B,$,ue,_e){return t=new rS(t,i,r,E,T,B,$,_e),i=1,d===!0&&(i|=24),d=ti(3,null,null,i),t.current=d,d.stateNode=t,i=Ju(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:o,isDehydrated:r,cache:i},nf(d),t}function Iv(t){return t?(t=es,t):es}function Fv(t,i,r,o,u,d){u=Iv(u),o.context===null?o.context=u:o.pendingContext=u,o=La(i),o.payload={element:r},d=d===void 0?null:d,d!==null&&(o.callback=d),r=Oa(t,o,i),r!==null&&(si(r,t,i),vo(r,t,i))}function Hv(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<i?r:i}}function xh(t,i){Hv(t,i),(t=t.alternate)&&Hv(t,i)}function Gv(t){if(t.tag===13){var i=$r(t,67108864);i!==null&&si(i,t,67108864),xh(t,67108864)}}var Mc=!0;function sS(t,i,r,o){var u=z.T;z.T=null;var d=K.p;try{K.p=2,yh(t,i,r,o)}finally{K.p=d,z.T=u}}function oS(t,i,r,o){var u=z.T;z.T=null;var d=K.p;try{K.p=8,yh(t,i,r,o)}finally{K.p=d,z.T=u}}function yh(t,i,r,o){if(Mc){var u=Sh(o);if(u===null)oh(t,i,o,bc,r),kv(t,o);else if(cS(u,t,i,r,o))o.stopPropagation();else if(kv(t,o),i&4&&-1<lS.indexOf(t)){for(;u!==null;){var d=qi(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var E=Be(d.pendingLanes);if(E!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;E;){var B=1<<31-Ge(E);T.entanglements[1]|=B,E&=~B}Bi(d),(Dt&6)===0&&(oc=it()+500,Oo(0))}}break;case 13:T=$r(d,2),T!==null&&si(T,d,2),cc(),xh(d,2)}if(d=Sh(o),d===null&&oh(t,i,o,bc,r),d===u)break;u=d}u!==null&&o.stopPropagation()}else oh(t,i,o,null,r)}}function Sh(t){return t=Tu(t),Eh(t)}var bc=null;function Eh(t){if(bc=null,t=Wi(t),t!==null){var i=c(t);if(i===null)t=null;else{var r=i.tag;if(r===13){if(t=f(i),t!==null)return t;t=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return bc=t,null}function Vv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xe()){case Ot:return 2;case Ve:return 8;case O:case A:return 32;case te:return 268435456;default:return 32}default:return 32}}var Mh=!1,qa=null,Ya=null,Za=null,Vo=new Map,ko=new Map,Ka=[],lS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function kv(t,i){switch(t){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":Ya=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":Vo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(i.pointerId)}}function jo(t,i,r,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:r,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},i!==null&&(i=qi(i),i!==null&&Gv(i)),t):(t.eventSystemFlags|=o,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function cS(t,i,r,o,u){switch(i){case"focusin":return qa=jo(qa,t,i,r,o,u),!0;case"dragenter":return Ya=jo(Ya,t,i,r,o,u),!0;case"mouseover":return Za=jo(Za,t,i,r,o,u),!0;case"pointerover":var d=u.pointerId;return Vo.set(d,jo(Vo.get(d)||null,t,i,r,o,u)),!0;case"gotpointercapture":return d=u.pointerId,ko.set(d,jo(ko.get(d)||null,t,i,r,o,u)),!0}return!1}function jv(t){var i=Wi(t.target);if(i!==null){var r=c(i);if(r!==null){if(i=r.tag,i===13){if(i=f(r),i!==null){t.blockedOn=i,$n(t.priority,function(){if(r.tag===13){var o=ri();o=Xt(o);var u=$r(r,o);u!==null&&si(u,r,o),xh(r,o)}});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Tc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var r=Sh(t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);bu=o,r.target.dispatchEvent(o),bu=null}else return i=qi(r),i!==null&&Gv(i),t.blockedOn=r,!1;i.shift()}return!0}function Xv(t,i,r){Tc(t)&&r.delete(i)}function uS(){Mh=!1,qa!==null&&Tc(qa)&&(qa=null),Ya!==null&&Tc(Ya)&&(Ya=null),Za!==null&&Tc(Za)&&(Za=null),Vo.forEach(Xv),ko.forEach(Xv)}function Ac(t,i){t.blockedOn===i&&(t.blockedOn=null,Mh||(Mh=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,uS)))}var wc=null;function Wv(t){wc!==t&&(wc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){wc===t&&(wc=null);for(var i=0;i<t.length;i+=3){var r=t[i],o=t[i+1],u=t[i+2];if(typeof o!="function"){if(Eh(o||r)===null)continue;break}var d=qi(r);d!==null&&(t.splice(i,3),i-=3,Ef(d,{pending:!0,data:u,method:r.method,action:o},o,u))}}))}function Xo(t){function i(B){return Ac(B,t)}qa!==null&&Ac(qa,t),Ya!==null&&Ac(Ya,t),Za!==null&&Ac(Za,t),Vo.forEach(i),ko.forEach(i);for(var r=0;r<Ka.length;r++){var o=Ka[r];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ka.length&&(r=Ka[0],r.blockedOn===null);)jv(r),r.blockedOn===null&&Ka.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var u=r[o],d=r[o+1],E=u[bn]||null;if(typeof d=="function")E||Wv(r);else if(E){var T=null;if(d&&d.hasAttribute("formAction")){if(u=d,E=d[bn]||null)T=E.formAction;else if(Eh(u)!==null)continue}else T=E.action;typeof T=="function"?r[o+1]=T:(r.splice(o,3),o-=3),Wv(r)}}}function bh(t){this._internalRoot=t}Rc.prototype.render=bh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(s(409));var r=i.current,o=ri();Fv(r,o,t,i,null,null)},Rc.prototype.unmount=bh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Fv(t.current,2,null,t,null,null),cc(),i[jn]=null}};function Rc(t){this._internalRoot=t}Rc.prototype.unstable_scheduleHydration=function(t){if(t){var i=bt();t={blockedOn:null,target:t,priority:i};for(var r=0;r<Ka.length&&i!==0&&i<Ka[r].priority;r++);Ka.splice(r,0,t),r===0&&jv(t)}};var qv=e.version;if(qv!=="19.1.0")throw Error(s(527,qv,"19.1.0"));K.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(i),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var fS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cc.isDisabled&&Cc.supportsFiber)try{fe=Cc.inject(fS),Pe=Cc}catch{}}return qo.createRoot=function(t,i){if(!l(t))throw Error(s(299));var r=!1,o="",u=cg,d=ug,E=fg,T=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=zv(t,1,!1,null,null,r,o,u,d,E,T,null),t[jn]=i.current,sh(t),new bh(i)},qo.hydrateRoot=function(t,i,r){if(!l(t))throw Error(s(299));var o=!1,u="",d=cg,E=ug,T=fg,B=null,$=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(E=r.onCaughtError),r.onRecoverableError!==void 0&&(T=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(B=r.unstable_transitionCallbacks),r.formState!==void 0&&($=r.formState)),i=zv(t,1,!0,i,r??null,o,u,d,E,T,B,$),i.context=Iv(null),r=i.current,o=ri(),o=Xt(o),u=La(o),u.callback=null,Oa(r,u,o),r=o,i.current.lanes=r,ve(i,r),Bi(i),t[jn]=i.current,sh(t),new Rc(i)},qo.version="19.1.0",qo}var i0;function SS(){if(i0)return wh.exports;i0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),wh.exports=yS(),wh.exports}var ES=SS(),Yo={},a0;function MS(){if(a0)return Yo;a0=1,Object.defineProperty(Yo,"__esModule",{value:!0}),Yo.parse=f,Yo.serialize=m;const a=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,c=(()=>{const x=function(){};return x.prototype=Object.create(null),x})();function f(x,S){const b=new c,w=x.length;if(w<2)return b;const y=(S==null?void 0:S.decode)||g;let v=0;do{const L=x.indexOf("=",v);if(L===-1)break;const D=x.indexOf(";",v),U=D===-1?w:D;if(L>U){v=x.lastIndexOf(";",L-1)+1;continue}const F=h(x,v,L),G=p(x,L,F),I=x.slice(F,G);if(b[I]===void 0){let W=h(x,L+1,U),N=p(x,U,W);const C=y(x.slice(W,N));b[I]=C}v=U+1}while(v<w);return b}function h(x,S,b){do{const w=x.charCodeAt(S);if(w!==32&&w!==9)return S}while(++S<b);return b}function p(x,S,b){for(;S>b;){const w=x.charCodeAt(--S);if(w!==32&&w!==9)return S+1}return b}function m(x,S,b){const w=(b==null?void 0:b.encode)||encodeURIComponent;if(!a.test(x))throw new TypeError(`argument name is invalid: ${x}`);const y=w(S);if(!e.test(y))throw new TypeError(`argument val is invalid: ${S}`);let v=x+"="+y;if(!b)return v;if(b.maxAge!==void 0){if(!Number.isInteger(b.maxAge))throw new TypeError(`option maxAge is invalid: ${b.maxAge}`);v+="; Max-Age="+b.maxAge}if(b.domain){if(!n.test(b.domain))throw new TypeError(`option domain is invalid: ${b.domain}`);v+="; Domain="+b.domain}if(b.path){if(!s.test(b.path))throw new TypeError(`option path is invalid: ${b.path}`);v+="; Path="+b.path}if(b.expires){if(!_(b.expires)||!Number.isFinite(b.expires.valueOf()))throw new TypeError(`option expires is invalid: ${b.expires}`);v+="; Expires="+b.expires.toUTCString()}if(b.httpOnly&&(v+="; HttpOnly"),b.secure&&(v+="; Secure"),b.partitioned&&(v+="; Partitioned"),b.priority)switch(typeof b.priority=="string"?b.priority.toLowerCase():void 0){case"low":v+="; Priority=Low";break;case"medium":v+="; Priority=Medium";break;case"high":v+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${b.priority}`)}if(b.sameSite)switch(typeof b.sameSite=="string"?b.sameSite.toLowerCase():b.sameSite){case!0:case"strict":v+="; SameSite=Strict";break;case"lax":v+="; SameSite=Lax";break;case"none":v+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${b.sameSite}`)}return v}function g(x){if(x.indexOf("%")===-1)return x;try{return decodeURIComponent(x)}catch{return x}}function _(x){return l.call(x)==="[object Date]"}return Yo}MS();var r0="popstate";function bS(a={}){function e(s,l){let{pathname:c,search:f,hash:h}=s.location;return hd("",{pathname:c,search:f,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(s,l){return typeof l=="string"?l:rl(l)}return AS(e,n,null,a)}function Jt(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function Vi(a,e){if(!a){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function TS(){return Math.random().toString(36).substring(2,10)}function s0(a,e){return{usr:a.state,key:a.key,idx:e}}function hd(a,e,n=null,s){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof e=="string"?Ys(e):e,state:n,key:e&&e.key||s||TS()}}function rl({pathname:a="/",search:e="",hash:n=""}){return e&&e!=="?"&&(a+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(a+=n.charAt(0)==="#"?n:"#"+n),a}function Ys(a){let e={};if(a){let n=a.indexOf("#");n>=0&&(e.hash=a.substring(n),a=a.substring(0,n));let s=a.indexOf("?");s>=0&&(e.search=a.substring(s),a=a.substring(0,s)),a&&(e.pathname=a)}return e}function AS(a,e,n,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,f=l.history,h="POP",p=null,m=g();m==null&&(m=0,f.replaceState({...f.state,idx:m},""));function g(){return(f.state||{idx:null}).idx}function _(){h="POP";let y=g(),v=y==null?null:y-m;m=y,p&&p({action:h,location:w.location,delta:v})}function x(y,v){h="PUSH";let L=hd(w.location,y,v);m=g()+1;let D=s0(L,m),U=w.createHref(L);try{f.pushState(D,"",U)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;l.location.assign(U)}c&&p&&p({action:h,location:w.location,delta:1})}function S(y,v){h="REPLACE";let L=hd(w.location,y,v);m=g();let D=s0(L,m),U=w.createHref(L);f.replaceState(D,"",U),c&&p&&p({action:h,location:w.location,delta:0})}function b(y){let v=l.location.origin!=="null"?l.location.origin:l.location.href,L=typeof y=="string"?y:rl(y);return L=L.replace(/ $/,"%20"),Jt(v,`No window.location.(origin|href) available to create URL for href: ${L}`),new URL(L,v)}let w={get action(){return h},get location(){return a(l,f)},listen(y){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(r0,_),p=y,()=>{l.removeEventListener(r0,_),p=null}},createHref(y){return e(l,y)},createURL:b,encodeLocation(y){let v=b(y);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:x,replace:S,go(y){return f.go(y)}};return w}function u_(a,e,n="/"){return wS(a,e,n,!1)}function wS(a,e,n,s){let l=typeof e=="string"?Ys(e):e,c=Sa(l.pathname||"/",n);if(c==null)return null;let f=f_(a);RS(f);let h=null;for(let p=0;h==null&&p<f.length;++p){let m=FS(c);h=zS(f[p],m,s)}return h}function f_(a,e=[],n=[],s=""){let l=(c,f,h)=>{let p={relativePath:h===void 0?c.path||"":h,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};p.relativePath.startsWith("/")&&(Jt(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let m=xa([s,p.relativePath]),g=n.concat(p);c.children&&c.children.length>0&&(Jt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),f_(c.children,e,g,m)),!(c.path==null&&!c.index)&&e.push({path:m,score:PS(m,c.index),routesMeta:g})};return a.forEach((c,f)=>{var h;if(c.path===""||!((h=c.path)!=null&&h.includes("?")))l(c,f);else for(let p of h_(c.path))l(c,f,p)}),e}function h_(a){let e=a.split("/");if(e.length===0)return[];let[n,...s]=e,l=n.endsWith("?"),c=n.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let f=h_(s.join("/")),h=[];return h.push(...f.map(p=>p===""?c:[c,p].join("/"))),l&&h.push(...f),h.map(p=>a.startsWith("/")&&p===""?"/":p)}function RS(a){a.sort((e,n)=>e.score!==n.score?n.score-e.score:BS(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}var CS=/^:[\w-]+$/,DS=3,US=2,NS=1,LS=10,OS=-2,o0=a=>a==="*";function PS(a,e){let n=a.split("/"),s=n.length;return n.some(o0)&&(s+=OS),e&&(s+=US),n.filter(l=>!o0(l)).reduce((l,c)=>l+(CS.test(c)?DS:c===""?NS:LS),s)}function BS(a,e){return a.length===e.length&&a.slice(0,-1).every((s,l)=>s===e[l])?a[a.length-1]-e[e.length-1]:0}function zS(a,e,n=!1){let{routesMeta:s}=a,l={},c="/",f=[];for(let h=0;h<s.length;++h){let p=s[h],m=h===s.length-1,g=c==="/"?e:e.slice(c.length)||"/",_=uu({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),x=p.route;if(!_&&m&&n&&!s[s.length-1].route.index&&(_=uu({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!_)return null;Object.assign(l,_.params),f.push({params:l,pathname:xa([c,_.pathname]),pathnameBase:kS(xa([c,_.pathnameBase])),route:x}),_.pathnameBase!=="/"&&(c=xa([c,_.pathnameBase]))}return f}function uu(a,e){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[n,s]=IS(a.path,a.caseSensitive,a.end),l=e.match(n);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:s.reduce((m,{paramName:g,isOptional:_},x)=>{if(g==="*"){let b=h[x]||"";f=c.slice(0,c.length-b.length).replace(/(.)\/+$/,"$1")}const S=h[x];return _&&!S?m[g]=void 0:m[g]=(S||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:f,pattern:a}}function IS(a,e=!1,n=!0){Vi(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let s=[],l="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,p)=>(s.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(s.push({paramName:"*"}),l+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":a!==""&&a!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function FS(a){try{return a.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Vi(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),a}}function Sa(a,e){if(e==="/")return a;if(!a.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=a.charAt(n);return s&&s!=="/"?null:a.slice(n)||"/"}function HS(a,e="/"){let{pathname:n,search:s="",hash:l=""}=typeof a=="string"?Ys(a):a;return{pathname:n?n.startsWith("/")?n:GS(n,e):e,search:jS(s),hash:XS(l)}}function GS(a,e){let n=e.replace(/\/+$/,"").split("/");return a.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function Uh(a,e,n,s){return`Cannot include a '${a}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function VS(a){return a.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function d_(a){let e=VS(a);return e.map((n,s)=>s===e.length-1?n.pathname:n.pathnameBase)}function p_(a,e,n,s=!1){let l;typeof a=="string"?l=Ys(a):(l={...a},Jt(!l.pathname||!l.pathname.includes("?"),Uh("?","pathname","search",l)),Jt(!l.pathname||!l.pathname.includes("#"),Uh("#","pathname","hash",l)),Jt(!l.search||!l.search.includes("#"),Uh("#","search","hash",l)));let c=a===""||l.pathname==="",f=c?"/":l.pathname,h;if(f==null)h=n;else{let _=e.length-1;if(!s&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),_-=1;l.pathname=x.join("/")}h=_>=0?e[_]:"/"}let p=HS(l,h),m=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}var xa=a=>a.join("/").replace(/\/\/+/g,"/"),kS=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),jS=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,XS=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function WS(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var m_=["POST","PUT","PATCH","DELETE"];new Set(m_);var qS=["GET",...m_];new Set(qS);var Zs=he.createContext(null);Zs.displayName="DataRouter";var gu=he.createContext(null);gu.displayName="DataRouterState";var g_=he.createContext({isTransitioning:!1});g_.displayName="ViewTransition";var YS=he.createContext(new Map);YS.displayName="Fetchers";var ZS=he.createContext(null);ZS.displayName="Await";var ji=he.createContext(null);ji.displayName="Navigation";var ul=he.createContext(null);ul.displayName="Location";var Xi=he.createContext({outlet:null,matches:[],isDataRoute:!1});Xi.displayName="Route";var ip=he.createContext(null);ip.displayName="RouteError";function KS(a,{relative:e}={}){Jt(fl(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:s}=he.useContext(ji),{hash:l,pathname:c,search:f}=hl(a,{relative:e}),h=c;return n!=="/"&&(h=c==="/"?n:xa([n,c])),s.createHref({pathname:h,search:f,hash:l})}function fl(){return he.useContext(ul)!=null}function fr(){return Jt(fl(),"useLocation() may be used only in the context of a <Router> component."),he.useContext(ul).location}var v_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function __(a){he.useContext(ji).static||he.useLayoutEffect(a)}function QS(){let{isDataRoute:a}=he.useContext(Xi);return a?f1():JS()}function JS(){Jt(fl(),"useNavigate() may be used only in the context of a <Router> component.");let a=he.useContext(Zs),{basename:e,navigator:n}=he.useContext(ji),{matches:s}=he.useContext(Xi),{pathname:l}=fr(),c=JSON.stringify(d_(s)),f=he.useRef(!1);return __(()=>{f.current=!0}),he.useCallback((p,m={})=>{if(Vi(f.current,v_),!f.current)return;if(typeof p=="number"){n.go(p);return}let g=p_(p,JSON.parse(c),l,m.relative==="path");a==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:xa([e,g.pathname])),(m.replace?n.replace:n.push)(g,m.state,m)},[e,n,c,l,a])}he.createContext(null);function $S(){let{matches:a}=he.useContext(Xi),e=a[a.length-1];return e?e.params:{}}function hl(a,{relative:e}={}){let{matches:n}=he.useContext(Xi),{pathname:s}=fr(),l=JSON.stringify(d_(n));return he.useMemo(()=>p_(a,JSON.parse(l),s,e==="path"),[a,l,s,e])}function e1(a,e){return x_(a,e)}function x_(a,e,n,s){var L;Jt(fl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:c}=he.useContext(ji),{matches:f}=he.useContext(Xi),h=f[f.length-1],p=h?h.params:{},m=h?h.pathname:"/",g=h?h.pathnameBase:"/",_=h&&h.route;{let D=_&&_.path||"";y_(m,!_||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let x=fr(),S;if(e){let D=typeof e=="string"?Ys(e):e;Jt(g==="/"||((L=D.pathname)==null?void 0:L.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${D.pathname}" was given in the \`location\` prop.`),S=D}else S=x;let b=S.pathname||"/",w=b;if(g!=="/"){let D=g.replace(/^\//,"").split("/");w="/"+b.replace(/^\//,"").split("/").slice(D.length).join("/")}let y=!c&&n&&n.matches&&n.matches.length>0?n.matches:u_(a,{pathname:w});Vi(_||y!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Vi(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=r1(y&&y.map(D=>Object.assign({},D,{params:Object.assign({},p,D.params),pathname:xa([g,l.encodeLocation?l.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?g:xa([g,l.encodeLocation?l.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),f,n,s);return e&&v?he.createElement(ul.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},v):v}function t1(){let a=u1(),e=WS(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),n=a instanceof Error?a.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",a),f=he.createElement(he.Fragment,null,he.createElement("p",null,"💿 Hey developer 👋"),he.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",he.createElement("code",{style:c},"ErrorBoundary")," or"," ",he.createElement("code",{style:c},"errorElement")," prop on your route.")),he.createElement(he.Fragment,null,he.createElement("h2",null,"Unexpected Application Error!"),he.createElement("h3",{style:{fontStyle:"italic"}},e),n?he.createElement("pre",{style:l},n):null,f)}var n1=he.createElement(t1,null),i1=class extends he.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,e){return e.location!==a.location||e.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:e.error,location:e.location,revalidation:a.revalidation||e.revalidation}}componentDidCatch(a,e){console.error("React Router caught the following error during render",a,e)}render(){return this.state.error!==void 0?he.createElement(Xi.Provider,{value:this.props.routeContext},he.createElement(ip.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function a1({routeContext:a,match:e,children:n}){let s=he.useContext(Zs);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),he.createElement(Xi.Provider,{value:a},n)}function r1(a,e=[],n=null,s=null){if(a==null){if(!n)return null;if(n.errors)a=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)a=n.matches;else return null}let l=a,c=n==null?void 0:n.errors;if(c!=null){let p=l.findIndex(m=>m.route.id&&(c==null?void 0:c[m.route.id])!==void 0);Jt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,p+1))}let f=!1,h=-1;if(n)for(let p=0;p<l.length;p++){let m=l[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=p),m.route.id){let{loaderData:g,errors:_}=n,x=m.route.loader&&!g.hasOwnProperty(m.route.id)&&(!_||_[m.route.id]===void 0);if(m.route.lazy||x){f=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((p,m,g)=>{let _,x=!1,S=null,b=null;n&&(_=c&&m.route.id?c[m.route.id]:void 0,S=m.route.errorElement||n1,f&&(h<0&&g===0?(y_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,b=null):h===g&&(x=!0,b=m.route.hydrateFallbackElement||null)));let w=e.concat(l.slice(0,g+1)),y=()=>{let v;return _?v=S:x?v=b:m.route.Component?v=he.createElement(m.route.Component,null):m.route.element?v=m.route.element:v=p,he.createElement(a1,{match:m,routeContext:{outlet:p,matches:w,isDataRoute:n!=null},children:v})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?he.createElement(i1,{location:n.location,revalidation:n.revalidation,component:S,error:_,children:y(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):y()},null)}function ap(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function s1(a){let e=he.useContext(Zs);return Jt(e,ap(a)),e}function o1(a){let e=he.useContext(gu);return Jt(e,ap(a)),e}function l1(a){let e=he.useContext(Xi);return Jt(e,ap(a)),e}function rp(a){let e=l1(a),n=e.matches[e.matches.length-1];return Jt(n.route.id,`${a} can only be used on routes that contain a unique "id"`),n.route.id}function c1(){return rp("useRouteId")}function u1(){var s;let a=he.useContext(ip),e=o1("useRouteError"),n=rp("useRouteError");return a!==void 0?a:(s=e.errors)==null?void 0:s[n]}function f1(){let{router:a}=s1("useNavigate"),e=rp("useNavigate"),n=he.useRef(!1);return __(()=>{n.current=!0}),he.useCallback(async(l,c={})=>{Vi(n.current,v_),n.current&&(typeof l=="number"?a.navigate(l):await a.navigate(l,{fromRouteId:e,...c}))},[a,e])}var l0={};function y_(a,e,n){!e&&!l0[a]&&(l0[a]=!0,Vi(!1,n))}he.memo(h1);function h1({routes:a,future:e,state:n}){return x_(a,void 0,n,e)}function Cn(a){Jt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function d1({basename:a="/",children:e=null,location:n,navigationType:s="POP",navigator:l,static:c=!1}){Jt(!fl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=a.replace(/^\/*/,"/"),h=he.useMemo(()=>({basename:f,navigator:l,static:c,future:{}}),[f,l,c]);typeof n=="string"&&(n=Ys(n));let{pathname:p="/",search:m="",hash:g="",state:_=null,key:x="default"}=n,S=he.useMemo(()=>{let b=Sa(p,f);return b==null?null:{location:{pathname:b,search:m,hash:g,state:_,key:x},navigationType:s}},[f,p,m,g,_,x,s]);return Vi(S!=null,`<Router basename="${f}"> is not able to match the URL "${p}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:he.createElement(ji.Provider,{value:h},he.createElement(ul.Provider,{children:e,value:S}))}function p1({children:a,location:e}){return e1(dd(a),e)}function dd(a,e=[]){let n=[];return he.Children.forEach(a,(s,l)=>{if(!he.isValidElement(s))return;let c=[...e,l];if(s.type===he.Fragment){n.push.apply(n,dd(s.props.children,c));return}Jt(s.type===Cn,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Jt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=dd(s.props.children,c)),n.push(f)}),n}var eu="get",tu="application/x-www-form-urlencoded";function vu(a){return a!=null&&typeof a.tagName=="string"}function m1(a){return vu(a)&&a.tagName.toLowerCase()==="button"}function g1(a){return vu(a)&&a.tagName.toLowerCase()==="form"}function v1(a){return vu(a)&&a.tagName.toLowerCase()==="input"}function _1(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function x1(a,e){return a.button===0&&(!e||e==="_self")&&!_1(a)}var Dc=null;function y1(){if(Dc===null)try{new FormData(document.createElement("form"),0),Dc=!1}catch{Dc=!0}return Dc}var S1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Nh(a){return a!=null&&!S1.has(a)?(Vi(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${tu}"`),null):a}function E1(a,e){let n,s,l,c,f;if(g1(a)){let h=a.getAttribute("action");s=h?Sa(h,e):null,n=a.getAttribute("method")||eu,l=Nh(a.getAttribute("enctype"))||tu,c=new FormData(a)}else if(m1(a)||v1(a)&&(a.type==="submit"||a.type==="image")){let h=a.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=a.getAttribute("formaction")||h.getAttribute("action");if(s=p?Sa(p,e):null,n=a.getAttribute("formmethod")||h.getAttribute("method")||eu,l=Nh(a.getAttribute("formenctype"))||Nh(h.getAttribute("enctype"))||tu,c=new FormData(h,a),!y1()){let{name:m,type:g,value:_}=a;if(g==="image"){let x=m?`${m}.`:"";c.append(`${x}x`,"0"),c.append(`${x}y`,"0")}else m&&c.append(m,_)}}else{if(vu(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=eu,s=null,l=tu,f=a}return c&&l==="text/plain"&&(f=c,c=void 0),{action:s,method:n.toLowerCase(),encType:l,formData:c,body:f}}function sp(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}async function M1(a,e){if(a.id in e)return e[a.id];try{let n=await import(a.module);return e[a.id]=n,n}catch(n){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function b1(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function T1(a,e,n){let s=await Promise.all(a.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await M1(c,n);return f.links?f.links():[]}return[]}));return C1(s.flat(1).filter(b1).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function c0(a,e,n,s,l,c){let f=(p,m)=>n[m]?p.route.id!==n[m].route.id:!0,h=(p,m)=>{var g;return n[m].pathname!==p.pathname||((g=n[m].route.path)==null?void 0:g.endsWith("*"))&&n[m].params["*"]!==p.params["*"]};return c==="assets"?e.filter((p,m)=>f(p,m)||h(p,m)):c==="data"?e.filter((p,m)=>{var _;let g=s.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(f(p,m)||h(p,m))return!0;if(p.route.shouldRevalidate){let x=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((_=n[0])==null?void 0:_.params)||{},nextUrl:new URL(a,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function A1(a,e,{includeHydrateFallback:n}={}){return w1(a.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),n&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function w1(a){return[...new Set(a)]}function R1(a){let e={},n=Object.keys(a).sort();for(let s of n)e[s]=a[s];return e}function C1(a,e){let n=new Set;return new Set(e),a.reduce((s,l)=>{let c=JSON.stringify(R1(l));return n.has(c)||(n.add(c),s.push({key:c,link:l})),s},[])}var D1=new Set([100,101,204,205]);function U1(a,e){let n=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return n.pathname==="/"?n.pathname="_root.data":e&&Sa(n.pathname,e)==="/"?n.pathname=`${e.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function S_(){let a=he.useContext(Zs);return sp(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function N1(){let a=he.useContext(gu);return sp(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var op=he.createContext(void 0);op.displayName="FrameworkContext";function E_(){let a=he.useContext(op);return sp(a,"You must render this element inside a <HydratedRouter> element"),a}function L1(a,e){let n=he.useContext(op),[s,l]=he.useState(!1),[c,f]=he.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:m,onMouseLeave:g,onTouchStart:_}=e,x=he.useRef(null);he.useEffect(()=>{if(a==="render"&&f(!0),a==="viewport"){let w=v=>{v.forEach(L=>{f(L.isIntersecting)})},y=new IntersectionObserver(w,{threshold:.5});return x.current&&y.observe(x.current),()=>{y.disconnect()}}},[a]),he.useEffect(()=>{if(s){let w=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(w)}}},[s]);let S=()=>{l(!0)},b=()=>{l(!1),f(!1)};return n?a!=="intent"?[c,x,{}]:[c,x,{onFocus:Zo(h,S),onBlur:Zo(p,b),onMouseEnter:Zo(m,S),onMouseLeave:Zo(g,b),onTouchStart:Zo(_,S)}]:[!1,x,{}]}function Zo(a,e){return n=>{a&&a(n),n.defaultPrevented||e(n)}}function O1({page:a,...e}){let{router:n}=S_(),s=he.useMemo(()=>u_(n.routes,a,n.basename),[n.routes,a,n.basename]);return s?he.createElement(B1,{page:a,matches:s,...e}):null}function P1(a){let{manifest:e,routeModules:n}=E_(),[s,l]=he.useState([]);return he.useEffect(()=>{let c=!1;return T1(a,e,n).then(f=>{c||l(f)}),()=>{c=!0}},[a,e,n]),s}function B1({page:a,matches:e,...n}){let s=fr(),{manifest:l,routeModules:c}=E_(),{basename:f}=S_(),{loaderData:h,matches:p}=N1(),m=he.useMemo(()=>c0(a,e,p,l,s,"data"),[a,e,p,l,s]),g=he.useMemo(()=>c0(a,e,p,l,s,"assets"),[a,e,p,l,s]),_=he.useMemo(()=>{if(a===s.pathname+s.search+s.hash)return[];let b=new Set,w=!1;if(e.forEach(v=>{var D;let L=l.routes[v.route.id];!L||!L.hasLoader||(!m.some(U=>U.route.id===v.route.id)&&v.route.id in h&&((D=c[v.route.id])!=null&&D.shouldRevalidate)||L.hasClientLoader?w=!0:b.add(v.route.id))}),b.size===0)return[];let y=U1(a,f);return w&&b.size>0&&y.searchParams.set("_routes",e.filter(v=>b.has(v.route.id)).map(v=>v.route.id).join(",")),[y.pathname+y.search]},[f,h,s,l,m,e,a,c]),x=he.useMemo(()=>A1(g,l),[g,l]),S=P1(g);return he.createElement(he.Fragment,null,_.map(b=>he.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...n})),x.map(b=>he.createElement("link",{key:b,rel:"modulepreload",href:b,...n})),S.map(({key:b,link:w})=>he.createElement("link",{key:b,...w})))}function z1(...a){return e=>{a.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var M_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{M_&&(window.__reactRouterVersion="7.5.3")}catch{}function I1({basename:a,children:e,window:n}){let s=he.useRef();s.current==null&&(s.current=bS({window:n,v5Compat:!0}));let l=s.current,[c,f]=he.useState({action:l.action,location:l.location}),h=he.useCallback(p=>{he.startTransition(()=>f(p))},[f]);return he.useLayoutEffect(()=>l.listen(h),[l,h]),he.createElement(d1,{basename:a,children:e,location:c.location,navigationType:c.action,navigator:l})}var b_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wr=he.forwardRef(function({onClick:e,discover:n="render",prefetch:s="none",relative:l,reloadDocument:c,replace:f,state:h,target:p,to:m,preventScrollReset:g,viewTransition:_,...x},S){let{basename:b}=he.useContext(ji),w=typeof m=="string"&&b_.test(m),y,v=!1;if(typeof m=="string"&&w&&(y=m,M_))try{let N=new URL(window.location.href),C=m.startsWith("//")?new URL(N.protocol+m):new URL(m),k=Sa(C.pathname,b);C.origin===N.origin&&k!=null?m=k+C.search+C.hash:v=!0}catch{Vi(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=KS(m,{relative:l}),[D,U,F]=L1(s,x),G=V1(m,{replace:f,state:h,target:p,preventScrollReset:g,relative:l,viewTransition:_});function I(N){e&&e(N),N.defaultPrevented||G(N)}let W=he.createElement("a",{...x,...F,href:y||L,onClick:v||c?e:I,ref:z1(S,U),target:p,"data-discover":!w&&n==="render"?"true":void 0});return D&&!w?he.createElement(he.Fragment,null,W,he.createElement(O1,{page:L})):W});Wr.displayName="Link";var F1=he.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:s="",end:l=!1,style:c,to:f,viewTransition:h,children:p,...m},g){let _=hl(f,{relative:m.relative}),x=fr(),S=he.useContext(gu),{navigator:b,basename:w}=he.useContext(ji),y=S!=null&&q1(_)&&h===!0,v=b.encodeLocation?b.encodeLocation(_).pathname:_.pathname,L=x.pathname,D=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;n||(L=L.toLowerCase(),D=D?D.toLowerCase():null,v=v.toLowerCase()),D&&w&&(D=Sa(D,w)||D);const U=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let F=L===v||!l&&L.startsWith(v)&&L.charAt(U)==="/",G=D!=null&&(D===v||!l&&D.startsWith(v)&&D.charAt(v.length)==="/"),I={isActive:F,isPending:G,isTransitioning:y},W=F?e:void 0,N;typeof s=="function"?N=s(I):N=[s,F?"active":null,G?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let C=typeof c=="function"?c(I):c;return he.createElement(Wr,{...m,"aria-current":W,className:N,ref:g,style:C,to:f,viewTransition:h},typeof p=="function"?p(I):p)});F1.displayName="NavLink";var H1=he.forwardRef(({discover:a="render",fetcherKey:e,navigate:n,reloadDocument:s,replace:l,state:c,method:f=eu,action:h,onSubmit:p,relative:m,preventScrollReset:g,viewTransition:_,...x},S)=>{let b=X1(),w=W1(h,{relative:m}),y=f.toLowerCase()==="get"?"get":"post",v=typeof h=="string"&&b_.test(h),L=D=>{if(p&&p(D),D.defaultPrevented)return;D.preventDefault();let U=D.nativeEvent.submitter,F=(U==null?void 0:U.getAttribute("formmethod"))||f;b(U||D.currentTarget,{fetcherKey:e,method:F,navigate:n,replace:l,state:c,relative:m,preventScrollReset:g,viewTransition:_})};return he.createElement("form",{ref:S,method:y,action:w,onSubmit:s?p:L,...x,"data-discover":!v&&a==="render"?"true":void 0})});H1.displayName="Form";function G1(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function T_(a){let e=he.useContext(Zs);return Jt(e,G1(a)),e}function V1(a,{target:e,replace:n,state:s,preventScrollReset:l,relative:c,viewTransition:f}={}){let h=QS(),p=fr(),m=hl(a,{relative:c});return he.useCallback(g=>{if(x1(g,e)){g.preventDefault();let _=n!==void 0?n:rl(p)===rl(m);h(a,{replace:_,state:s,preventScrollReset:l,relative:c,viewTransition:f})}},[p,h,m,n,s,e,a,l,c,f])}var k1=0,j1=()=>`__${String(++k1)}__`;function X1(){let{router:a}=T_("useSubmit"),{basename:e}=he.useContext(ji),n=c1();return he.useCallback(async(s,l={})=>{let{action:c,method:f,encType:h,formData:p,body:m}=E1(s,e);if(l.navigate===!1){let g=l.fetcherKey||j1();await a.fetch(g,n,l.action||c,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||h,flushSync:l.flushSync})}else await a.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||h,replace:l.replace,state:l.state,fromRouteId:n,flushSync:l.flushSync,viewTransition:l.viewTransition})},[a,e,n])}function W1(a,{relative:e}={}){let{basename:n}=he.useContext(ji),s=he.useContext(Xi);Jt(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...hl(a||".",{relative:e})},f=fr();if(a==null){c.search=f.search;let h=new URLSearchParams(c.search),p=h.getAll("index");if(p.some(g=>g==="")){h.delete("index"),p.filter(_=>_).forEach(_=>h.append("index",_));let g=h.toString();c.search=g?`?${g}`:""}}return(!a||a===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(c.pathname=c.pathname==="/"?n:xa([n,c.pathname])),rl(c)}function q1(a,e={}){let n=he.useContext(g_);Jt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=T_("useViewTransitionState"),l=hl(a,{relative:e.relative});if(!n.isTransitioning)return!1;let c=Sa(n.currentLocation.pathname,s)||n.currentLocation.pathname,f=Sa(n.nextLocation.pathname,s)||n.nextLocation.pathname;return uu(l.pathname,f)!=null||uu(l.pathname,c)!=null}new TextEncoder;[...D1];/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dl="176",Y1=0,u0=1,Z1=2,A_=1,K1=2,ga=3,Ea=0,Mn=1,ci=2,Jn=0,Hs=1,f0=2,h0=3,d0=4,Q1=5,Hr=100,J1=101,$1=102,eE=103,tE=104,nE=200,iE=201,aE=202,rE=203,pd=204,md=205,sE=206,oE=207,lE=208,cE=209,uE=210,fE=211,hE=212,dE=213,pE=214,gd=0,vd=1,_d=2,Vs=3,xd=4,yd=5,Sd=6,Ed=7,w_=0,mE=1,gE=2,lr=0,vE=1,_E=2,xE=3,yE=4,SE=5,EE=6,ME=7,R_=300,ks=301,js=302,Md=303,bd=304,_u=306,Td=1e3,Vr=1001,Ad=1002,Ci=1003,bE=1004,Uc=1005,Qn=1006,Lh=1007,kr=1008,In=1009,C_=1010,D_=1011,sl=1012,lp=1013,cr=1014,va=1015,pl=1016,cp=1017,up=1018,Xs=1020,U_=35902,N_=1021,L_=1022,Ri=1023,ol=1026,Ws=1027,O_=1028,fp=1029,P_=1030,hp=1031,dp=1033,nu=33776,iu=33777,au=33778,ru=33779,wd=35840,Rd=35841,Cd=35842,Dd=35843,Ud=36196,Nd=37492,Ld=37496,Od=37808,Pd=37809,Bd=37810,zd=37811,Id=37812,Fd=37813,Hd=37814,Gd=37815,Vd=37816,kd=37817,jd=37818,Xd=37819,Wd=37820,qd=37821,su=36492,Yd=36494,Zd=36495,B_=36283,Kd=36284,Qd=36285,Jd=36286,ml=3200,TE=3201,AE=0,wE=1,Ii="",Ht="srgb",ur="srgb-linear",fu="linear",Ft="srgb",bs=7680,p0=519,RE=512,CE=513,DE=514,z_=515,UE=516,NE=517,LE=518,OE=519,m0=35044,g0="300 es",_a=2e3,hu=2001;class ba{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(n)===-1&&s[e].push(n)}hasEventListener(e,n){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(n)!==-1}removeEventListener(e,n){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(n);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const s=n[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oh=Math.PI/180,$d=180/Math.PI;function gl(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[a&255]+Pn[a>>8&255]+Pn[a>>16&255]+Pn[a>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[n&63|128]+Pn[n>>8&255]+"-"+Pn[n>>16&255]+Pn[n>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function St(a,e,n){return Math.max(e,Math.min(n,a))}function PE(a,e){return(a%e+e)%e}function Ph(a,e,n){return(1-n)*a+n*e}function Ko(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Zn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class ot{constructor(e=0,n=0){ot.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,s=this.y,l=e.elements;return this.x=l[0]*n+l[3]*s+l[6],this.y=l[1]*n+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(e)/n;return Math.acos(St(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y;return n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const s=Math.cos(n),l=Math.sin(n),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,n,s,l,c,f,h,p,m){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,s,l,c,f,h,p,m)}set(e,n,s,l,c,f,h,p,m){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=n,g[4]=c,g[5]=p,g[6]=s,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(e,n,s){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,l=n.elements,c=this.elements,f=s[0],h=s[3],p=s[6],m=s[1],g=s[4],_=s[7],x=s[2],S=s[5],b=s[8],w=l[0],y=l[3],v=l[6],L=l[1],D=l[4],U=l[7],F=l[2],G=l[5],I=l[8];return c[0]=f*w+h*L+p*F,c[3]=f*y+h*D+p*G,c[6]=f*v+h*U+p*I,c[1]=m*w+g*L+_*F,c[4]=m*y+g*D+_*G,c[7]=m*v+g*U+_*I,c[2]=x*w+S*L+b*F,c[5]=x*y+S*D+b*G,c[8]=x*v+S*U+b*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],p=e[6],m=e[7],g=e[8];return n*f*g-n*h*m-s*c*g+s*h*p+l*c*m-l*f*p}invert(){const e=this.elements,n=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],p=e[6],m=e[7],g=e[8],_=g*f-h*m,x=h*p-g*c,S=m*c-f*p,b=n*_+s*x+l*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=_*w,e[1]=(l*m-g*s)*w,e[2]=(h*s-l*f)*w,e[3]=x*w,e[4]=(g*n-l*p)*w,e[5]=(l*c-h*n)*w,e[6]=S*w,e[7]=(s*p-m*n)*w,e[8]=(f*n-s*c)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,s,l,c,f,h){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*f+m*h)+f+e,-l*m,l*p,-l*(-m*f+p*h)+h+n,0,0,1),this}scale(e,n){return this.premultiply(Bh.makeScale(e,n)),this}rotate(e){return this.premultiply(Bh.makeRotation(-e)),this}translate(e,n){return this.premultiply(Bh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,s=e.elements;for(let l=0;l<9;l++)if(n[l]!==s[l])return!1;return!0}fromArray(e,n=0){for(let s=0;s<9;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bh=new st;function I_(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function du(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function BE(){const a=du("canvas");return a.style.display="block",a}const v0={};function ou(a){a in v0||(v0[a]=!0,console.warn(a))}function zE(a,e,n){return new Promise(function(s,l){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:l();break;case a.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:s()}}setTimeout(c,n)})}function IE(a){const e=a.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function FE(a){const e=a.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const _0=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),x0=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function HE(){const a={enabled:!0,workingColorSpace:ur,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ft&&(l.r=ya(l.r),l.g=ya(l.g),l.b=ya(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ft&&(l.r=Gs(l.r),l.g=Gs(l.g),l.b=Gs(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ii?fu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return a.define({[ur]:{primaries:e,whitePoint:s,transfer:fu,toXYZ:_0,fromXYZ:x0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:s,transfer:Ft,toXYZ:_0,fromXYZ:x0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),a}const wt=HE();function ya(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Gs(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Ts;class GE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Ts===void 0&&(Ts=du("canvas")),Ts.width=e.width,Ts.height=e.height;const l=Ts.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Ts}return s.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=du("canvas");n.width=e.width,n.height=e.height;const s=n.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ya(c[f]/255)*255;return s.putImageData(l,0,0),n}else if(e.data){const n=e.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(ya(n[s]/255)*255):n[s]=ya(n[s]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let VE=0;class pp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VE++}),this.uuid=gl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(zh(l[f].image)):c.push(zh(l[f]))}else c=zh(l);s.url=c}return n||(e.images[this.uuid]=s),s}}function zh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?GE.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kE=0;class zn extends ba{constructor(e=zn.DEFAULT_IMAGE,n=zn.DEFAULT_MAPPING,s=Vr,l=Vr,c=Qn,f=kr,h=Ri,p=In,m=zn.DEFAULT_ANISOTROPY,g=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kE++}),this.uuid=gl(),this.name="",this.source=new pp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==R_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Td:e.x=e.x-Math.floor(e.x);break;case Vr:e.x=e.x<0?0:1;break;case Ad:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Td:e.y=e.y-Math.floor(e.y);break;case Vr:e.y=e.y<0?0:1;break;case Ad:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=R_;zn.DEFAULT_ANISOTROPY=1;class Qt{constructor(e=0,n=0,s=0,l=1){Qt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,s,l){return this.x=e,this.y=n,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*n+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*n+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*n+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*n+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,s,l,c;const p=e.elements,m=p[0],g=p[4],_=p[8],x=p[1],S=p[5],b=p[9],w=p[2],y=p[6],v=p[10];if(Math.abs(g-x)<.01&&Math.abs(_-w)<.01&&Math.abs(b-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+w)<.1&&Math.abs(b+y)<.1&&Math.abs(m+S+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(m+1)/2,U=(S+1)/2,F=(v+1)/2,G=(g+x)/4,I=(_+w)/4,W=(b+y)/4;return D>U&&D>F?D<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(D),l=G/s,c=I/s):U>F?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=G/l,c=W/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=I/c,l=W/c),this.set(s,l,c,n),this}let L=Math.sqrt((y-b)*(y-b)+(_-w)*(_-w)+(x-g)*(x-g));return Math.abs(L)<.001&&(L=1),this.x=(y-b)/L,this.y=(_-w)/L,this.z=(x-g)/L,this.w=Math.acos((m+S+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this.w=St(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this.w=St(this.w,e,n),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this.w=e.w+(n.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jE extends ba{constructor(e=1,n=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=s.depth?s.depth:1,this.scissor=new Qt(0,0,e,n),this.scissorTest=!1,this.viewport=new Qt(0,0,e,n);const l={width:e,height:n,depth:this.depth};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},s);const c=new zn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);c.flipY=!1,c.generateMipmaps=s.generateMipmaps,c.internalFormat=s.internalFormat,this.textures=[];const f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,s=1){if(this.width!==e||this.height!==n||this.depth!==s){this.width=e,this.height=n,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=n,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},e.textures[n].image);this.textures[n].source=new pp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends jE{constructor(e=1,n=1,s={}){super(e,n,s),this.isWebGLRenderTarget=!0}}class F_ extends zn{constructor(e=null,n=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:s,depth:l},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class XE extends zn{constructor(e=null,n=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:s,depth:l},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vl{constructor(e=0,n=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=s,this._w=l}static slerpFlat(e,n,s,l,c,f,h){let p=s[l+0],m=s[l+1],g=s[l+2],_=s[l+3];const x=c[f+0],S=c[f+1],b=c[f+2],w=c[f+3];if(h===0){e[n+0]=p,e[n+1]=m,e[n+2]=g,e[n+3]=_;return}if(h===1){e[n+0]=x,e[n+1]=S,e[n+2]=b,e[n+3]=w;return}if(_!==w||p!==x||m!==S||g!==b){let y=1-h;const v=p*x+m*S+g*b+_*w,L=v>=0?1:-1,D=1-v*v;if(D>Number.EPSILON){const F=Math.sqrt(D),G=Math.atan2(F,v*L);y=Math.sin(y*G)/F,h=Math.sin(h*G)/F}const U=h*L;if(p=p*y+x*U,m=m*y+S*U,g=g*y+b*U,_=_*y+w*U,y===1-h){const F=1/Math.sqrt(p*p+m*m+g*g+_*_);p*=F,m*=F,g*=F,_*=F}}e[n]=p,e[n+1]=m,e[n+2]=g,e[n+3]=_}static multiplyQuaternionsFlat(e,n,s,l,c,f){const h=s[l],p=s[l+1],m=s[l+2],g=s[l+3],_=c[f],x=c[f+1],S=c[f+2],b=c[f+3];return e[n]=h*b+g*_+p*S-m*x,e[n+1]=p*b+g*x+m*_-h*S,e[n+2]=m*b+g*S+h*x-p*_,e[n+3]=g*b-h*_-p*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,s,l){return this._x=e,this._y=n,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const s=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,p=Math.sin,m=h(s/2),g=h(l/2),_=h(c/2),x=p(s/2),S=p(l/2),b=p(c/2);switch(f){case"XYZ":this._x=x*g*_+m*S*b,this._y=m*S*_-x*g*b,this._z=m*g*b+x*S*_,this._w=m*g*_-x*S*b;break;case"YXZ":this._x=x*g*_+m*S*b,this._y=m*S*_-x*g*b,this._z=m*g*b-x*S*_,this._w=m*g*_+x*S*b;break;case"ZXY":this._x=x*g*_-m*S*b,this._y=m*S*_+x*g*b,this._z=m*g*b+x*S*_,this._w=m*g*_-x*S*b;break;case"ZYX":this._x=x*g*_-m*S*b,this._y=m*S*_+x*g*b,this._z=m*g*b-x*S*_,this._w=m*g*_+x*S*b;break;case"YZX":this._x=x*g*_+m*S*b,this._y=m*S*_+x*g*b,this._z=m*g*b-x*S*_,this._w=m*g*_-x*S*b;break;case"XZY":this._x=x*g*_-m*S*b,this._y=m*S*_-x*g*b,this._z=m*g*b+x*S*_,this._w=m*g*_+x*S*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const s=n/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,s=n[0],l=n[4],c=n[8],f=n[1],h=n[5],p=n[9],m=n[2],g=n[6],_=n[10],x=s+h+_;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(g-p)*S,this._y=(c-m)*S,this._z=(f-l)*S}else if(s>h&&s>_){const S=2*Math.sqrt(1+s-h-_);this._w=(g-p)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+m)/S}else if(h>_){const S=2*Math.sqrt(1+h-s-_);this._w=(c-m)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(p+g)/S}else{const S=2*Math.sqrt(1+_-s-h);this._w=(f-l)/S,this._x=(c+m)/S,this._y=(p+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let s=e.dot(n)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,n){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,n/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const s=e._x,l=e._y,c=e._z,f=e._w,h=n._x,p=n._y,m=n._z,g=n._w;return this._x=s*g+f*h+l*m-c*p,this._y=l*g+f*p+c*h-s*m,this._z=c*g+f*m+s*p-l*h,this._w=f*g-s*h-l*p-c*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const s=this._x,l=this._y,c=this._z,f=this._w;let h=f*e._w+s*e._x+l*e._y+c*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=f,this._x=s,this._y=l,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const S=1-n;return this._w=S*f+n*this._w,this._x=S*s+n*this._x,this._y=S*l+n*this._y,this._z=S*c+n*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,h),_=Math.sin((1-n)*g)/m,x=Math.sin(n*g)/m;return this._w=f*_+this._w*x,this._x=s*_+this._x*x,this._y=l*_+this._y*x,this._z=c*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,s){return this.copy(e).slerp(n,s)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,n=0,s=0){se.prototype.isVector3=!0,this.x=e,this.y=n,this.z=s}set(e,n,s){return s===void 0&&(s=this.z),this.x=e,this.y=n,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(y0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(y0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*n+c[3]*s+c[6]*l,this.y=c[1]*n+c[4]*s+c[7]*l,this.z=c[2]*n+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*n+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*n+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*n+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*n+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const n=this.x,s=this.y,l=this.z,c=e.x,f=e.y,h=e.z,p=e.w,m=2*(f*l-h*s),g=2*(h*n-c*l),_=2*(c*s-f*n);return this.x=n+p*m+f*_-h*g,this.y=s+p*g+h*m-c*_,this.z=l+p*_+c*g-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*n+c[4]*s+c[8]*l,this.y=c[1]*n+c[5]*s+c[9]*l,this.z=c[2]*n+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const s=e.x,l=e.y,c=e.z,f=n.x,h=n.y,p=n.z;return this.x=l*p-c*h,this.y=c*f-s*p,this.z=s*h-l*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const s=e.dot(this)/n;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Ih.copy(this).projectOnVector(e),this.sub(Ih)}reflect(e){return this.sub(Ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(e)/n;return Math.acos(St(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return n*n+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,s){const l=Math.sin(n)*e;return this.x=l*Math.sin(s),this.y=Math.cos(n)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,s){return this.x=e*Math.sin(n),this.y=s,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=s,this.z=l,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(e),this.y=n,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ih=new se,y0=new vl;class _l{constructor(e=new se(1/0,1/0,1/0),n=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,s=e.length;n<s;n+=3)this.expandByPoint(bi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,s=e.count;n<s;n++)this.expandByPoint(bi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,s=e.length;n<s;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const s=bi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,bi):bi.fromBufferAttribute(c,f),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Nc.copy(s.boundingBox)),Nc.applyMatrix4(e.matrixWorld),this.union(Nc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,s;return e.normal.x>0?(n=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),n<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qo),Lc.subVectors(this.max,Qo),As.subVectors(e.a,Qo),ws.subVectors(e.b,Qo),Rs.subVectors(e.c,Qo),Ja.subVectors(ws,As),$a.subVectors(Rs,ws),Ur.subVectors(As,Rs);let n=[0,-Ja.z,Ja.y,0,-$a.z,$a.y,0,-Ur.z,Ur.y,Ja.z,0,-Ja.x,$a.z,0,-$a.x,Ur.z,0,-Ur.x,-Ja.y,Ja.x,0,-$a.y,$a.x,0,-Ur.y,Ur.x,0];return!Fh(n,As,ws,Rs,Lc)||(n=[1,0,0,0,1,0,0,0,1],!Fh(n,As,ws,Rs,Lc))?!1:(Oc.crossVectors(Ja,$a),n=[Oc.x,Oc.y,Oc.z],Fh(n,As,ws,Rs,Lc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fa=[new se,new se,new se,new se,new se,new se,new se,new se],bi=new se,Nc=new _l,As=new se,ws=new se,Rs=new se,Ja=new se,$a=new se,Ur=new se,Qo=new se,Lc=new se,Oc=new se,Nr=new se;function Fh(a,e,n,s,l){for(let c=0,f=a.length-3;c<=f;c+=3){Nr.fromArray(a,c);const h=l.x*Math.abs(Nr.x)+l.y*Math.abs(Nr.y)+l.z*Math.abs(Nr.z),p=e.dot(Nr),m=n.dot(Nr),g=s.dot(Nr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>h)return!1}return!0}const WE=new _l,Jo=new se,Hh=new se;class mp{constructor(e=new se,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const s=this.center;n!==void 0?s.copy(n):WE.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const s=this.center.distanceToSquared(e);return n.copy(e),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jo.subVectors(e,this.center);const n=Jo.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),l=(s-this.radius)*.5;this.center.addScaledVector(Jo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jo.copy(e.center).add(Hh)),this.expandByPoint(Jo.copy(e.center).sub(Hh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ha=new se,Gh=new se,Pc=new se,er=new se,Vh=new se,Bc=new se,kh=new se;class qE{constructor(e=new se,n=new se(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ha)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ha.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ha.copy(this.origin).addScaledVector(this.direction,n),ha.distanceToSquared(e))}distanceSqToSegment(e,n,s,l){Gh.copy(e).add(n).multiplyScalar(.5),Pc.copy(n).sub(e).normalize(),er.copy(this.origin).sub(Gh);const c=e.distanceTo(n)*.5,f=-this.direction.dot(Pc),h=er.dot(this.direction),p=-er.dot(Pc),m=er.lengthSq(),g=Math.abs(1-f*f);let _,x,S,b;if(g>0)if(_=f*p-h,x=f*h-p,b=c*g,_>=0)if(x>=-b)if(x<=b){const w=1/g;_*=w,x*=w,S=_*(_+f*x+2*h)+x*(f*_+x+2*p)+m}else x=c,_=Math.max(0,-(f*x+h)),S=-_*_+x*(x+2*p)+m;else x=-c,_=Math.max(0,-(f*x+h)),S=-_*_+x*(x+2*p)+m;else x<=-b?(_=Math.max(0,-(-f*c+h)),x=_>0?-c:Math.min(Math.max(-c,-p),c),S=-_*_+x*(x+2*p)+m):x<=b?(_=0,x=Math.min(Math.max(-c,-p),c),S=x*(x+2*p)+m):(_=Math.max(0,-(f*c+h)),x=_>0?c:Math.min(Math.max(-c,-p),c),S=-_*_+x*(x+2*p)+m);else x=f>0?-c:c,_=Math.max(0,-(f*x+h)),S=-_*_+x*(x+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Gh).addScaledVector(Pc,x),S}intersectSphere(e,n){ha.subVectors(e.center,this.origin);const s=ha.dot(this.direction),l=ha.dot(ha)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,p=s+f;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/n;return s>=0?s:null}intersectPlane(e,n){const s=this.distanceToPlane(e);return s===null?null:this.at(s,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let s,l,c,f,h,p;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return m>=0?(s=(e.min.x-x.x)*m,l=(e.max.x-x.x)*m):(s=(e.max.x-x.x)*m,l=(e.min.x-x.x)*m),g>=0?(c=(e.min.y-x.y)*g,f=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,f=(e.min.y-x.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),_>=0?(h=(e.min.z-x.z)*_,p=(e.max.z-x.z)*_):(h=(e.max.z-x.z)*_,p=(e.min.z-x.z)*_),s>p||h>l)||((h>s||s!==s)&&(s=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,n)}intersectsBox(e){return this.intersectBox(e,ha)!==null}intersectTriangle(e,n,s,l,c){Vh.subVectors(n,e),Bc.subVectors(s,e),kh.crossVectors(Vh,Bc);let f=this.direction.dot(kh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;er.subVectors(this.origin,e);const p=h*this.direction.dot(Bc.crossVectors(er,Bc));if(p<0)return null;const m=h*this.direction.dot(Vh.cross(er));if(m<0||p+m>f)return null;const g=-h*er.dot(kh);return g<0?null:this.at(g/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class un{constructor(e,n,s,l,c,f,h,p,m,g,_,x,S,b,w,y){un.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,s,l,c,f,h,p,m,g,_,x,S,b,w,y)}set(e,n,s,l,c,f,h,p,m,g,_,x,S,b,w,y){const v=this.elements;return v[0]=e,v[4]=n,v[8]=s,v[12]=l,v[1]=c,v[5]=f,v[9]=h,v[13]=p,v[2]=m,v[6]=g,v[10]=_,v[14]=x,v[3]=S,v[7]=b,v[11]=w,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new un().fromArray(this.elements)}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(e){const n=this.elements,s=e.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,s){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,n,s){return this.set(e.x,n.x,s.x,0,e.y,n.y,s.y,0,e.z,n.z,s.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,s=e.elements,l=1/Cs.setFromMatrixColumn(e,0).length(),c=1/Cs.setFromMatrixColumn(e,1).length(),f=1/Cs.setFromMatrixColumn(e,2).length();return n[0]=s[0]*l,n[1]=s[1]*l,n[2]=s[2]*l,n[3]=0,n[4]=s[4]*c,n[5]=s[5]*c,n[6]=s[6]*c,n[7]=0,n[8]=s[8]*f,n[9]=s[9]*f,n[10]=s[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),h=Math.sin(s),p=Math.cos(l),m=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const x=f*g,S=f*_,b=h*g,w=h*_;n[0]=p*g,n[4]=-p*_,n[8]=m,n[1]=S+b*m,n[5]=x-w*m,n[9]=-h*p,n[2]=w-x*m,n[6]=b+S*m,n[10]=f*p}else if(e.order==="YXZ"){const x=p*g,S=p*_,b=m*g,w=m*_;n[0]=x+w*h,n[4]=b*h-S,n[8]=f*m,n[1]=f*_,n[5]=f*g,n[9]=-h,n[2]=S*h-b,n[6]=w+x*h,n[10]=f*p}else if(e.order==="ZXY"){const x=p*g,S=p*_,b=m*g,w=m*_;n[0]=x-w*h,n[4]=-f*_,n[8]=b+S*h,n[1]=S+b*h,n[5]=f*g,n[9]=w-x*h,n[2]=-f*m,n[6]=h,n[10]=f*p}else if(e.order==="ZYX"){const x=f*g,S=f*_,b=h*g,w=h*_;n[0]=p*g,n[4]=b*m-S,n[8]=x*m+w,n[1]=p*_,n[5]=w*m+x,n[9]=S*m-b,n[2]=-m,n[6]=h*p,n[10]=f*p}else if(e.order==="YZX"){const x=f*p,S=f*m,b=h*p,w=h*m;n[0]=p*g,n[4]=w-x*_,n[8]=b*_+S,n[1]=_,n[5]=f*g,n[9]=-h*g,n[2]=-m*g,n[6]=S*_+b,n[10]=x-w*_}else if(e.order==="XZY"){const x=f*p,S=f*m,b=h*p,w=h*m;n[0]=p*g,n[4]=-_,n[8]=m*g,n[1]=x*_+w,n[5]=f*g,n[9]=S*_-b,n[2]=b*_-S,n[6]=h*g,n[10]=w*_+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(YE,e,ZE)}lookAt(e,n,s){const l=this.elements;return oi.subVectors(e,n),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),tr.crossVectors(s,oi),tr.lengthSq()===0&&(Math.abs(s.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),tr.crossVectors(s,oi)),tr.normalize(),zc.crossVectors(oi,tr),l[0]=tr.x,l[4]=zc.x,l[8]=oi.x,l[1]=tr.y,l[5]=zc.y,l[9]=oi.y,l[2]=tr.z,l[6]=zc.z,l[10]=oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,l=n.elements,c=this.elements,f=s[0],h=s[4],p=s[8],m=s[12],g=s[1],_=s[5],x=s[9],S=s[13],b=s[2],w=s[6],y=s[10],v=s[14],L=s[3],D=s[7],U=s[11],F=s[15],G=l[0],I=l[4],W=l[8],N=l[12],C=l[1],k=l[5],ce=l[9],oe=l[13],xe=l[2],pe=l[6],z=l[10],K=l[14],Y=l[3],Me=l[7],P=l[11],ee=l[15];return c[0]=f*G+h*C+p*xe+m*Y,c[4]=f*I+h*k+p*pe+m*Me,c[8]=f*W+h*ce+p*z+m*P,c[12]=f*N+h*oe+p*K+m*ee,c[1]=g*G+_*C+x*xe+S*Y,c[5]=g*I+_*k+x*pe+S*Me,c[9]=g*W+_*ce+x*z+S*P,c[13]=g*N+_*oe+x*K+S*ee,c[2]=b*G+w*C+y*xe+v*Y,c[6]=b*I+w*k+y*pe+v*Me,c[10]=b*W+w*ce+y*z+v*P,c[14]=b*N+w*oe+y*K+v*ee,c[3]=L*G+D*C+U*xe+F*Y,c[7]=L*I+D*k+U*pe+F*Me,c[11]=L*W+D*ce+U*z+F*P,c[15]=L*N+D*oe+U*K+F*ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[4],l=e[8],c=e[12],f=e[1],h=e[5],p=e[9],m=e[13],g=e[2],_=e[6],x=e[10],S=e[14],b=e[3],w=e[7],y=e[11],v=e[15];return b*(+c*p*_-l*m*_-c*h*x+s*m*x+l*h*S-s*p*S)+w*(+n*p*S-n*m*x+c*f*x-l*f*S+l*m*g-c*p*g)+y*(+n*m*_-n*h*S-c*f*_+s*f*S+c*h*g-s*m*g)+v*(-l*h*g-n*p*_+n*h*x+l*f*_-s*f*x+s*p*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=n,l[14]=s),this}invert(){const e=this.elements,n=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],p=e[6],m=e[7],g=e[8],_=e[9],x=e[10],S=e[11],b=e[12],w=e[13],y=e[14],v=e[15],L=_*y*m-w*x*m+w*p*S-h*y*S-_*p*v+h*x*v,D=b*x*m-g*y*m-b*p*S+f*y*S+g*p*v-f*x*v,U=g*w*m-b*_*m+b*h*S-f*w*S-g*h*v+f*_*v,F=b*_*p-g*w*p-b*h*x+f*w*x+g*h*y-f*_*y,G=n*L+s*D+l*U+c*F;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/G;return e[0]=L*I,e[1]=(w*x*c-_*y*c-w*l*S+s*y*S+_*l*v-s*x*v)*I,e[2]=(h*y*c-w*p*c+w*l*m-s*y*m-h*l*v+s*p*v)*I,e[3]=(_*p*c-h*x*c-_*l*m+s*x*m+h*l*S-s*p*S)*I,e[4]=D*I,e[5]=(g*y*c-b*x*c+b*l*S-n*y*S-g*l*v+n*x*v)*I,e[6]=(b*p*c-f*y*c-b*l*m+n*y*m+f*l*v-n*p*v)*I,e[7]=(f*x*c-g*p*c+g*l*m-n*x*m-f*l*S+n*p*S)*I,e[8]=U*I,e[9]=(b*_*c-g*w*c-b*s*S+n*w*S+g*s*v-n*_*v)*I,e[10]=(f*w*c-b*h*c+b*s*m-n*w*m-f*s*v+n*h*v)*I,e[11]=(g*h*c-f*_*c-g*s*m+n*_*m+f*s*S-n*h*S)*I,e[12]=F*I,e[13]=(g*w*l-b*_*l+b*s*x-n*w*x-g*s*y+n*_*y)*I,e[14]=(b*h*l-f*w*l-b*s*p+n*w*p+f*s*y-n*h*y)*I,e[15]=(f*_*l-g*h*l+g*s*p-n*_*p-f*s*x+n*h*x)*I,this}scale(e){const n=this.elements,s=e.x,l=e.y,c=e.z;return n[0]*=s,n[4]*=l,n[8]*=c,n[1]*=s,n[5]*=l,n[9]*=c,n[2]*=s,n[6]*=l,n[10]*=c,n[3]*=s,n[7]*=l,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,s,l))}makeTranslation(e,n,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const s=Math.cos(n),l=Math.sin(n),c=1-s,f=e.x,h=e.y,p=e.z,m=c*f,g=c*h;return this.set(m*f+s,m*h-l*p,m*p+l*h,0,m*h+l*p,g*h+s,g*p-l*f,0,m*p-l*h,g*p+l*f,c*p*p+s,0,0,0,0,1),this}makeScale(e,n,s){return this.set(e,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,n,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,n,l,1,0,0,0,0,1),this}compose(e,n,s){const l=this.elements,c=n._x,f=n._y,h=n._z,p=n._w,m=c+c,g=f+f,_=h+h,x=c*m,S=c*g,b=c*_,w=f*g,y=f*_,v=h*_,L=p*m,D=p*g,U=p*_,F=s.x,G=s.y,I=s.z;return l[0]=(1-(w+v))*F,l[1]=(S+U)*F,l[2]=(b-D)*F,l[3]=0,l[4]=(S-U)*G,l[5]=(1-(x+v))*G,l[6]=(y+L)*G,l[7]=0,l[8]=(b+D)*I,l[9]=(y-L)*I,l[10]=(1-(x+w))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,n,s){const l=this.elements;let c=Cs.set(l[0],l[1],l[2]).length();const f=Cs.set(l[4],l[5],l[6]).length(),h=Cs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],Ti.copy(this);const m=1/c,g=1/f,_=1/h;return Ti.elements[0]*=m,Ti.elements[1]*=m,Ti.elements[2]*=m,Ti.elements[4]*=g,Ti.elements[5]*=g,Ti.elements[6]*=g,Ti.elements[8]*=_,Ti.elements[9]*=_,Ti.elements[10]*=_,n.setFromRotationMatrix(Ti),s.x=c,s.y=f,s.z=h,this}makePerspective(e,n,s,l,c,f,h=_a){const p=this.elements,m=2*c/(n-e),g=2*c/(s-l),_=(n+e)/(n-e),x=(s+l)/(s-l);let S,b;if(h===_a)S=-(f+c)/(f-c),b=-2*f*c/(f-c);else if(h===hu)S=-f/(f-c),b=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,s,l,c,f,h=_a){const p=this.elements,m=1/(n-e),g=1/(s-l),_=1/(f-c),x=(n+e)*m,S=(s+l)*g;let b,w;if(h===_a)b=(f+c)*_,w=-2*_;else if(h===hu)b=c*_,w=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=w,p[14]=-b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,s=e.elements;for(let l=0;l<16;l++)if(n[l]!==s[l])return!1;return!0}fromArray(e,n=0){for(let s=0;s<16;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e[n+9]=s[9],e[n+10]=s[10],e[n+11]=s[11],e[n+12]=s[12],e[n+13]=s[13],e[n+14]=s[14],e[n+15]=s[15],e}}const Cs=new se,Ti=new un,YE=new se(0,0,0),ZE=new se(1,1,1),tr=new se,zc=new se,oi=new se,S0=new un,E0=new vl;class Ma{constructor(e=0,n=0,s=0,l=Ma.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,s,l=this._order){return this._x=e,this._y=n,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],p=l[1],m=l[5],g=l[9],_=l[2],x=l[6],S=l[10];switch(n){case"XYZ":this._y=Math.asin(St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(St(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-St(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(St(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,s){return S0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(S0,n,s)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return E0.setFromEuler(this),this.setFromQuaternion(E0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ma.DEFAULT_ORDER="XYZ";class H_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let KE=0;const M0=new se,Ds=new vl,da=new un,Ic=new se,$o=new se,QE=new se,JE=new vl,b0=new se(1,0,0),T0=new se(0,1,0),A0=new se(0,0,1),w0={type:"added"},$E={type:"removed"},Us={type:"childadded",child:null},jh={type:"childremoved",child:null};class ui extends ba{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=gl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ui.DEFAULT_UP.clone();const e=new se,n=new Ma,s=new vl,l=new se(1,1,1);function c(){s.setFromEuler(n,!1)}function f(){n.setFromQuaternion(s,void 0,!1)}n._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new un},normalMatrix:{value:new st}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=ui.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new H_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ds.setFromAxisAngle(e,n),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,n){return Ds.setFromAxisAngle(e,n),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(b0,e)}rotateY(e){return this.rotateOnAxis(T0,e)}rotateZ(e){return this.rotateOnAxis(A0,e)}translateOnAxis(e,n){return M0.copy(e).applyQuaternion(this.quaternion),this.position.add(M0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(b0,e)}translateY(e){return this.translateOnAxis(T0,e)}translateZ(e){return this.translateOnAxis(A0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(da.copy(this.matrixWorld).invert())}lookAt(e,n,s){e.isVector3?Ic.copy(e):Ic.set(e,n,s);const l=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?da.lookAt($o,Ic,this.up):da.lookAt(Ic,$o,this.up),this.quaternion.setFromRotationMatrix(da),l&&(da.extractRotation(l.matrixWorld),Ds.setFromRotationMatrix(da),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(w0),Us.child=e,this.dispatchEvent(Us),Us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent($E),jh.child=e,this.dispatchEvent(jh),jh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),da.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),da.multiply(e.parent.matrixWorld)),e.applyMatrix4(da),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(w0),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,s=[]){this[e]===n&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,n,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,e,QE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,JE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].updateMatrixWorld(e)}updateWorldMatrix(e,n){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",s={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?{min:h.boundingBox.min.toArray(),max:h.boundingBox.max.toArray()}:void 0,boundingSphere:h.boundingSphere?{radius:h.boundingSphere.radius,center:h.boundingSphere.center.toArray()}:void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const _=p[m];c(e.shapes,_)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(e.materials,this.material[p]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(c(e.animations,p))}}if(n){const h=f(e.geometries),p=f(e.materials),m=f(e.textures),g=f(e.images),_=f(e.shapes),x=f(e.skeletons),S=f(e.animations),b=f(e.nodes);h.length>0&&(s.geometries=h),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),S.length>0&&(s.animations=S),b.length>0&&(s.nodes=b)}return s.object=l,s;function f(h){const p=[];for(const m in h){const g=h[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}ui.DEFAULT_UP=new se(0,1,0);ui.DEFAULT_MATRIX_AUTO_UPDATE=!0;ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new se,pa=new se,Xh=new se,ma=new se,Ns=new se,Ls=new se,R0=new se,Wh=new se,qh=new se,Yh=new se,Zh=new Qt,Kh=new Qt,Qh=new Qt;class wi{constructor(e=new se,n=new se,s=new se){this.a=e,this.b=n,this.c=s}static getNormal(e,n,s,l){l.subVectors(s,n),Ai.subVectors(e,n),l.cross(Ai);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,n,s,l,c){Ai.subVectors(l,n),pa.subVectors(s,n),Xh.subVectors(e,n);const f=Ai.dot(Ai),h=Ai.dot(pa),p=Ai.dot(Xh),m=pa.dot(pa),g=pa.dot(Xh),_=f*m-h*h;if(_===0)return c.set(0,0,0),null;const x=1/_,S=(m*p-h*g)*x,b=(f*g-h*p)*x;return c.set(1-S-b,b,S)}static containsPoint(e,n,s,l){return this.getBarycoord(e,n,s,l,ma)===null?!1:ma.x>=0&&ma.y>=0&&ma.x+ma.y<=1}static getInterpolation(e,n,s,l,c,f,h,p){return this.getBarycoord(e,n,s,l,ma)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,ma.x),p.addScaledVector(f,ma.y),p.addScaledVector(h,ma.z),p)}static getInterpolatedAttribute(e,n,s,l,c,f){return Zh.setScalar(0),Kh.setScalar(0),Qh.setScalar(0),Zh.fromBufferAttribute(e,n),Kh.fromBufferAttribute(e,s),Qh.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Zh,c.x),f.addScaledVector(Kh,c.y),f.addScaledVector(Qh,c.z),f}static isFrontFacing(e,n,s,l){return Ai.subVectors(s,n),pa.subVectors(e,n),Ai.cross(pa).dot(l)<0}set(e,n,s){return this.a.copy(e),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(e,n,s,l){return this.a.copy(e[n]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,n,s,l){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),pa.subVectors(this.a,this.b),Ai.cross(pa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return wi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,s,l,c){return wi.getInterpolation(e,this.a,this.b,this.c,n,s,l,c)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const s=this.a,l=this.b,c=this.c;let f,h;Ns.subVectors(l,s),Ls.subVectors(c,s),Wh.subVectors(e,s);const p=Ns.dot(Wh),m=Ls.dot(Wh);if(p<=0&&m<=0)return n.copy(s);qh.subVectors(e,l);const g=Ns.dot(qh),_=Ls.dot(qh);if(g>=0&&_<=g)return n.copy(l);const x=p*_-g*m;if(x<=0&&p>=0&&g<=0)return f=p/(p-g),n.copy(s).addScaledVector(Ns,f);Yh.subVectors(e,c);const S=Ns.dot(Yh),b=Ls.dot(Yh);if(b>=0&&S<=b)return n.copy(c);const w=S*m-p*b;if(w<=0&&m>=0&&b<=0)return h=m/(m-b),n.copy(s).addScaledVector(Ls,h);const y=g*b-S*_;if(y<=0&&_-g>=0&&S-b>=0)return R0.subVectors(c,l),h=(_-g)/(_-g+(S-b)),n.copy(l).addScaledVector(R0,h);const v=1/(y+w+x);return f=w*v,h=x*v,n.copy(s).addScaledVector(Ns,f).addScaledVector(Ls,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const G_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},Fc={h:0,s:0,l:0};function Jh(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(e-a)*6*n:n<1/2?e:n<2/3?a+(e-a)*6*(2/3-n):a}class Lt{constructor(e,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,s)}set(e,n,s){if(n===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,n,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,n),this}setRGB(e,n,s,l=wt.workingColorSpace){return this.r=e,this.g=n,this.b=s,wt.toWorkingColorSpace(this,l),this}setHSL(e,n,s,l=wt.workingColorSpace){if(e=PE(e,1),n=St(n,0,1),s=St(s,0,1),n===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+n):s+n-s*n,f=2*s-c;this.r=Jh(f,c,e+1/3),this.g=Jh(f,c,e),this.b=Jh(f,c,e-1/3)}return wt.toWorkingColorSpace(this,l),this}setStyle(e,n=Ht){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ht){const s=G_[e.toLowerCase()];return s!==void 0?this.setHex(s,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ya(e.r),this.g=ya(e.g),this.b=ya(e.b),this}copyLinearToSRGB(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return wt.fromWorkingColorSpace(Bn.copy(this),e),Math.round(St(Bn.r*255,0,255))*65536+Math.round(St(Bn.g*255,0,255))*256+Math.round(St(Bn.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=wt.workingColorSpace){wt.fromWorkingColorSpace(Bn.copy(this),n);const s=Bn.r,l=Bn.g,c=Bn.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let p,m;const g=(h+f)/2;if(h===f)p=0,m=0;else{const _=f-h;switch(m=g<=.5?_/(f+h):_/(2-f-h),f){case s:p=(l-c)/_+(l<c?6:0);break;case l:p=(c-s)/_+2;break;case c:p=(s-l)/_+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,n=wt.workingColorSpace){return wt.fromWorkingColorSpace(Bn.copy(this),n),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=Ht){wt.fromWorkingColorSpace(Bn.copy(this),e);const n=Bn.r,s=Bn.g,l=Bn.b;return e!==Ht?`color(${e} ${n.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,n,s){return this.getHSL(nr),this.setHSL(nr.h+e,nr.s+n,nr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,s){return this.r=e.r+(n.r-e.r)*s,this.g=e.g+(n.g-e.g)*s,this.b=e.b+(n.b-e.b)*s,this}lerpHSL(e,n){this.getHSL(nr),e.getHSL(Fc);const s=Ph(nr.h,Fc.h,n),l=Ph(nr.s,Fc.s,n),c=Ph(nr.l,Fc.l,n);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*n+c[3]*s+c[6]*l,this.g=c[1]*n+c[4]*s+c[7]*l,this.b=c[2]*n+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new Lt;Lt.NAMES=G_;let eM=0;class Ks extends ba{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=gl(),this.name="",this.type="Material",this.blending=Hs,this.side=Ea,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pd,this.blendDst=md,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=p0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const s=e[n];if(s===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[n]=s}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(s.blending=this.blending),this.side!==Ea&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==pd&&(s.blendSrc=this.blendSrc),this.blendDst!==md&&(s.blendDst=this.blendDst),this.blendEquation!==Hr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==p0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const p=c[h];delete p.metadata,f.push(p)}return f}if(n){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let s=null;if(n!==null){const l=n.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=n[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xu extends Ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ma,this.combine=w_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cn=new se,Hc=new ot;let tM=0;class yi{constructor(e,n,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=s,this.usage=m0,this.updateRanges=[],this.gpuType=va,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,s){e*=this.itemSize,s*=n.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=n.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)Hc.fromBufferAttribute(this,n),Hc.applyMatrix3(e),this.setXY(n,Hc.x,Hc.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)cn.fromBufferAttribute(this,n),cn.applyMatrix3(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let n=0,s=this.count;n<s;n++)cn.fromBufferAttribute(this,n),cn.applyMatrix4(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let n=0,s=this.count;n<s;n++)cn.fromBufferAttribute(this,n),cn.applyNormalMatrix(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let n=0,s=this.count;n<s;n++)cn.fromBufferAttribute(this,n),cn.transformDirection(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let s=this.array[e*this.itemSize+n];return this.normalized&&(s=Ko(s,this.array)),s}setComponent(e,n,s){return this.normalized&&(s=Zn(s,this.array)),this.array[e*this.itemSize+n]=s,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ko(n,this.array)),n}setX(e,n){return this.normalized&&(n=Zn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ko(n,this.array)),n}setY(e,n){return this.normalized&&(n=Zn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ko(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Zn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ko(n,this.array)),n}setW(e,n){return this.normalized&&(n=Zn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,s){return e*=this.itemSize,this.normalized&&(n=Zn(n,this.array),s=Zn(s,this.array)),this.array[e+0]=n,this.array[e+1]=s,this}setXYZ(e,n,s,l){return e*=this.itemSize,this.normalized&&(n=Zn(n,this.array),s=Zn(s,this.array),l=Zn(l,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,n,s,l,c){return e*=this.itemSize,this.normalized&&(n=Zn(n,this.array),s=Zn(s,this.array),l=Zn(l,this.array),c=Zn(c,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==m0&&(e.usage=this.usage),e}}class V_ extends yi{constructor(e,n,s){super(new Uint16Array(e),n,s)}}class k_ extends yi{constructor(e,n,s){super(new Uint32Array(e),n,s)}}class Hi extends yi{constructor(e,n,s){super(new Float32Array(e),n,s)}}let nM=0;const _i=new un,$h=new ui,Os=new se,li=new _l,el=new _l,En=new se;class Ta extends ba{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=gl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(I_(e)?k_:V_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,s=0){this.groups.push({start:e,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new st().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,n,s){return _i.makeTranslation(e,n,s),this.applyMatrix4(_i),this}scale(e,n,s){return _i.makeScale(e,n,s),this.applyMatrix4(_i),this}lookAt(e){return $h.lookAt(e),$h.updateMatrix(),this.applyMatrix4($h.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Hi(s,3))}else{const s=Math.min(e.length,n.count);for(let l=0;l<s;l++){const c=e[l];n.setXYZ(l,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _l);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let s=0,l=n.length;s<l;s++){const c=n[s];li.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mp);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(e){const s=this.boundingSphere.center;if(li.setFromBufferAttribute(e),n)for(let c=0,f=n.length;c<f;c++){const h=n[c];el.setFromBufferAttribute(h),this.morphTargetsRelative?(En.addVectors(li.min,el.min),li.expandByPoint(En),En.addVectors(li.max,el.max),li.expandByPoint(En)):(li.expandByPoint(el.min),li.expandByPoint(el.max))}li.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)En.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(En));if(n)for(let c=0,f=n.length;c<f;c++){const h=n[c],p=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)En.fromBufferAttribute(h,m),p&&(Os.fromBufferAttribute(e,m),En.add(Os)),l=Math.max(l,s.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,l=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],p=[];for(let W=0;W<s.count;W++)h[W]=new se,p[W]=new se;const m=new se,g=new se,_=new se,x=new ot,S=new ot,b=new ot,w=new se,y=new se;function v(W,N,C){m.fromBufferAttribute(s,W),g.fromBufferAttribute(s,N),_.fromBufferAttribute(s,C),x.fromBufferAttribute(c,W),S.fromBufferAttribute(c,N),b.fromBufferAttribute(c,C),g.sub(m),_.sub(m),S.sub(x),b.sub(x);const k=1/(S.x*b.y-b.x*S.y);isFinite(k)&&(w.copy(g).multiplyScalar(b.y).addScaledVector(_,-S.y).multiplyScalar(k),y.copy(_).multiplyScalar(S.x).addScaledVector(g,-b.x).multiplyScalar(k),h[W].add(w),h[N].add(w),h[C].add(w),p[W].add(y),p[N].add(y),p[C].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let W=0,N=L.length;W<N;++W){const C=L[W],k=C.start,ce=C.count;for(let oe=k,xe=k+ce;oe<xe;oe+=3)v(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const D=new se,U=new se,F=new se,G=new se;function I(W){F.fromBufferAttribute(l,W),G.copy(F);const N=h[W];D.copy(N),D.sub(F.multiplyScalar(F.dot(N))).normalize(),U.crossVectors(G,N);const k=U.dot(p[W])<0?-1:1;f.setXYZW(W,D.x,D.y,D.z,k)}for(let W=0,N=L.length;W<N;++W){const C=L[W],k=C.start,ce=C.count;for(let oe=k,xe=k+ce;oe<xe;oe+=3)I(e.getX(oe+0)),I(e.getX(oe+1)),I(e.getX(oe+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new yi(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let x=0,S=s.count;x<S;x++)s.setXYZ(x,0,0,0);const l=new se,c=new se,f=new se,h=new se,p=new se,m=new se,g=new se,_=new se;if(e)for(let x=0,S=e.count;x<S;x+=3){const b=e.getX(x+0),w=e.getX(x+1),y=e.getX(x+2);l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,w),f.fromBufferAttribute(n,y),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),h.fromBufferAttribute(s,b),p.fromBufferAttribute(s,w),m.fromBufferAttribute(s,y),h.add(g),p.add(g),m.add(g),s.setXYZ(b,h.x,h.y,h.z),s.setXYZ(w,p.x,p.y,p.z),s.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,S=n.count;x<S;x+=3)l.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,s=e.count;n<s;n++)En.fromBufferAttribute(e,n),En.normalize(),e.setXYZ(n,En.x,En.y,En.z)}toNonIndexed(){function e(h,p){const m=h.array,g=h.itemSize,_=h.normalized,x=new m.constructor(p.length*g);let S=0,b=0;for(let w=0,y=p.length;w<y;w++){h.isInterleavedBufferAttribute?S=p[w]*h.data.stride+h.offset:S=p[w]*g;for(let v=0;v<g;v++)x[b++]=m[S++]}return new yi(x,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ta,s=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=e(p,s);n.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let g=0,_=m.length;g<_;g++){const x=m[g],S=e(x,s);p.push(S)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,p=f.length;h<p;h++){const m=f[h];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let _=0,x=m.length;_<x;_++){const S=m[_];g.push(S.toJSON(e.data))}g.length>0&&(l[p]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(n))}const c=e.morphAttributes;for(const m in c){const g=[],_=c[m];for(let x=0,S=_.length;x<S;x++)g.push(_[x].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,g=f.length;m<g;m++){const _=f[m];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const C0=new un,Lr=new qE,Gc=new mp,D0=new se,Vc=new se,kc=new se,jc=new se,ed=new se,Xc=new se,U0=new se,Wc=new se;class xi extends ui{constructor(e=new Ta,n=new xu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const l=n[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,n){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;n.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Xc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=h[p],_=c[p];g!==0&&(ed.fromBufferAttribute(_,e),f?Xc.addScaledVector(ed,g):Xc.addScaledVector(ed.sub(n),g))}n.add(Xc)}return n}raycast(e,n){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Gc.copy(s.boundingSphere),Gc.applyMatrix4(c),Lr.copy(e.ray).recast(e.near),!(Gc.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(Gc,D0)===null||Lr.origin.distanceToSquared(D0)>(e.far-e.near)**2))&&(C0.copy(c).invert(),Lr.copy(e.ray).applyMatrix4(C0),!(s.boundingBox!==null&&Lr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,n,Lr)))}_computeIntersections(e,n,s){let l;const c=this.geometry,f=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(f))for(let b=0,w=x.length;b<w;b++){const y=x[b],v=f[y.materialIndex],L=Math.max(y.start,S.start),D=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let U=L,F=D;U<F;U+=3){const G=h.getX(U),I=h.getX(U+1),W=h.getX(U+2);l=qc(this,v,e,s,m,g,_,G,I,W),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,n.push(l))}}else{const b=Math.max(0,S.start),w=Math.min(h.count,S.start+S.count);for(let y=b,v=w;y<v;y+=3){const L=h.getX(y),D=h.getX(y+1),U=h.getX(y+2);l=qc(this,f,e,s,m,g,_,L,D,U),l&&(l.faceIndex=Math.floor(y/3),n.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let b=0,w=x.length;b<w;b++){const y=x[b],v=f[y.materialIndex],L=Math.max(y.start,S.start),D=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let U=L,F=D;U<F;U+=3){const G=U,I=U+1,W=U+2;l=qc(this,v,e,s,m,g,_,G,I,W),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,n.push(l))}}else{const b=Math.max(0,S.start),w=Math.min(p.count,S.start+S.count);for(let y=b,v=w;y<v;y+=3){const L=y,D=y+1,U=y+2;l=qc(this,f,e,s,m,g,_,L,D,U),l&&(l.faceIndex=Math.floor(y/3),n.push(l))}}}}function iM(a,e,n,s,l,c,f,h){let p;if(e.side===Mn?p=s.intersectTriangle(f,c,l,!0,h):p=s.intersectTriangle(l,c,f,e.side===Ea,h),p===null)return null;Wc.copy(h),Wc.applyMatrix4(a.matrixWorld);const m=n.ray.origin.distanceTo(Wc);return m<n.near||m>n.far?null:{distance:m,point:Wc.clone(),object:a}}function qc(a,e,n,s,l,c,f,h,p,m){a.getVertexPosition(h,Vc),a.getVertexPosition(p,kc),a.getVertexPosition(m,jc);const g=iM(a,e,n,s,Vc,kc,jc,U0);if(g){const _=new se;wi.getBarycoord(U0,Vc,kc,jc,_),l&&(g.uv=wi.getInterpolatedAttribute(l,h,p,m,_,new ot)),c&&(g.uv1=wi.getInterpolatedAttribute(c,h,p,m,_,new ot)),f&&(g.normal=wi.getInterpolatedAttribute(f,h,p,m,_,new se),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:p,c:m,normal:new se,materialIndex:0};wi.getNormal(Vc,kc,jc,x.normal),g.face=x,g.barycoord=_}return g}class Qs extends Ta{constructor(e=1,n=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],g=[],_=[];let x=0,S=0;b("z","y","x",-1,-1,s,n,e,f,c,0),b("z","y","x",1,-1,s,n,-e,f,c,1),b("x","z","y",1,1,e,s,n,l,f,2),b("x","z","y",1,-1,e,s,-n,l,f,3),b("x","y","z",1,-1,e,n,s,l,c,4),b("x","y","z",-1,-1,e,n,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new Hi(m,3)),this.setAttribute("normal",new Hi(g,3)),this.setAttribute("uv",new Hi(_,2));function b(w,y,v,L,D,U,F,G,I,W,N){const C=U/I,k=F/W,ce=U/2,oe=F/2,xe=G/2,pe=I+1,z=W+1;let K=0,Y=0;const Me=new se;for(let P=0;P<z;P++){const ee=P*k-oe;for(let ye=0;ye<pe;ye++){const Ee=ye*C-ce;Me[w]=Ee*L,Me[y]=ee*D,Me[v]=xe,m.push(Me.x,Me.y,Me.z),Me[w]=0,Me[y]=0,Me[v]=G>0?1:-1,g.push(Me.x,Me.y,Me.z),_.push(ye/I),_.push(1-P/W),K+=1}}for(let P=0;P<W;P++)for(let ee=0;ee<I;ee++){const ye=x+ee+pe*P,Ee=x+ee+pe*(P+1),J=x+(ee+1)+pe*(P+1),me=x+(ee+1)+pe*P;p.push(ye,Ee,me),p.push(Ee,J,me),Y+=6}h.addGroup(S,Y,N),S+=Y,x+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qs(a){const e={};for(const n in a){e[n]={};for(const s in a[n]){const l=a[n][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][s]=null):e[n][s]=l.clone():Array.isArray(l)?e[n][s]=l.slice():e[n][s]=l}}return e}function Hn(a){const e={};for(let n=0;n<a.length;n++){const s=qs(a[n]);for(const l in s)e[l]=s[l]}return e}function aM(a){const e=[];for(let n=0;n<a.length;n++)e.push(a[n].clone());return e}function j_(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const rM={clone:qs,merge:Hn};var sM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends Ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sM,this.fragmentShader=oM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=aM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?n.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[l]={type:"m4",value:f.toArray()}:n.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class gp extends ui{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=_a}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ir=new se,N0=new ot,L0=new ot;class Kn extends gp{constructor(e=50,n=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=$d*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $d*2*Math.atan(Math.tan(Oh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,s){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ir.x,ir.y).multiplyScalar(-e/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ir.x,ir.y).multiplyScalar(-e/ir.z)}getViewSize(e,n){return this.getViewBounds(e,N0,L0),n.subVectors(L0,N0)}setViewOffset(e,n,s,l,c,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Oh*.5*this.fov)/this.zoom,s=2*n,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,n-=f.offsetY*s/m,l*=f.width/p,s*=f.height/m}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,n,n-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ps=-90,Bs=1;class lM extends ui{constructor(e,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Kn(Ps,Bs,e,n);l.layers=this.layers,this.add(l);const c=new Kn(Ps,Bs,e,n);c.layers=this.layers,this.add(c);const f=new Kn(Ps,Bs,e,n);f.layers=this.layers,this.add(f);const h=new Kn(Ps,Bs,e,n);h.layers=this.layers,this.add(h);const p=new Kn(Ps,Bs,e,n);p.layers=this.layers,this.add(p);const m=new Kn(Ps,Bs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[s,l,c,f,h,p]=n;for(const m of n)this.remove(m);if(e===_a)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===hu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,p,m,g]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(n,c),e.setRenderTarget(s,1,l),e.render(n,f),e.setRenderTarget(s,2,l),e.render(n,h),e.setRenderTarget(s,3,l),e.render(n,p),e.setRenderTarget(s,4,l),e.render(n,m),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,l),e.render(n,g),e.setRenderTarget(_,x,S),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class X_ extends zn{constructor(e=[],n=ks,s,l,c,f,h,p,m,g){super(e,n,s,l,c,f,h,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cM extends Gn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new X_(l,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Qn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Qs(5,5,5),c=new Vn({name:"CubemapFromEquirect",uniforms:qs(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Mn,blending:Jn});c.uniforms.tEquirect.value=n;const f=new xi(l,c),h=n.minFilter;return n.minFilter===kr&&(n.minFilter=Qn),new lM(1,10,this).update(e,f),n.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,n=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,s,l);e.setRenderTarget(c)}}class nl extends ui{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uM={type:"move"};class td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const s of e.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,s){let l=null,c=null,f=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const w of e.hand.values()){const y=n.getJointPose(w,s),v=this._getHandJoint(m,w);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],x=g.position.distanceTo(_.position),S=.02,b=.005;m.inputState.pinching&&x>S+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=n.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(uM)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const s=new nl;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[n.jointName]=s,e.add(s)}return e.joints[n.jointName]}}class pu extends ui{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ma,this.environmentIntensity=1,this.environmentRotation=new Ma,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const nd=new se,fM=new se,hM=new st;class Ir{constructor(e=new se(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,s,l){return this.normal.set(e,n,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,s){const l=nd.subVectors(s,n).cross(fM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const s=e.delta(nd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:n.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return n<0&&s>0||s<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const s=n||hM.getNormalMatrix(e),l=this.coplanarPoint(nd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Or=new mp,Yc=new se;class W_{constructor(e=new Ir,n=new Ir,s=new Ir,l=new Ir,c=new Ir,f=new Ir){this.planes=[e,n,s,l,c,f]}set(e,n,s,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,n=_a){const s=this.planes,l=e.elements,c=l[0],f=l[1],h=l[2],p=l[3],m=l[4],g=l[5],_=l[6],x=l[7],S=l[8],b=l[9],w=l[10],y=l[11],v=l[12],L=l[13],D=l[14],U=l[15];if(s[0].setComponents(p-c,x-m,y-S,U-v).normalize(),s[1].setComponents(p+c,x+m,y+S,U+v).normalize(),s[2].setComponents(p+f,x+g,y+b,U+L).normalize(),s[3].setComponents(p-f,x-g,y-b,U-L).normalize(),s[4].setComponents(p-h,x-_,y-w,U-D).normalize(),n===_a)s[5].setComponents(p+h,x+_,y+w,U+D).normalize();else if(n===hu)s[5].setComponents(h,_,w,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){return Or.center.set(0,0,0),Or.radius=.7071067811865476,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){const n=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const n=this.planes;for(let s=0;s<6;s++){const l=n[s];if(Yc.x=l.normal.x>0?e.max.x:e.min.x,Yc.y=l.normal.y>0?e.max.y:e.min.y,Yc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Yc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vp extends zn{constructor(e,n,s=cr,l,c,f,h=Ci,p=Ci,m,g=ol){if(g!==ol&&g!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,c,f,h,p,g,s,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class yu extends Ta{constructor(e=1,n=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:s,heightSegments:l};const c=e/2,f=n/2,h=Math.floor(s),p=Math.floor(l),m=h+1,g=p+1,_=e/h,x=n/p,S=[],b=[],w=[],y=[];for(let v=0;v<g;v++){const L=v*x-f;for(let D=0;D<m;D++){const U=D*_-c;b.push(U,-L,0),w.push(0,0,1),y.push(D/h),y.push(1-v/p)}}for(let v=0;v<p;v++)for(let L=0;L<h;L++){const D=L+m*v,U=L+m*(v+1),F=L+1+m*(v+1),G=L+1+m*v;S.push(D,U,G),S.push(U,F,G)}this.setIndex(S),this.setAttribute("position",new Hi(b,3)),this.setAttribute("normal",new Hi(w,3)),this.setAttribute("uv",new Hi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yu(e.width,e.height,e.widthSegments,e.heightSegments)}}class _p extends Ta{constructor(e=1,n=32,s=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},n=Math.max(3,Math.floor(n)),s=Math.max(2,Math.floor(s));const p=Math.min(f+h,Math.PI);let m=0;const g=[],_=new se,x=new se,S=[],b=[],w=[],y=[];for(let v=0;v<=s;v++){const L=[],D=v/s;let U=0;v===0&&f===0?U=.5/n:v===s&&p===Math.PI&&(U=-.5/n);for(let F=0;F<=n;F++){const G=F/n;_.x=-e*Math.cos(l+G*c)*Math.sin(f+D*h),_.y=e*Math.cos(f+D*h),_.z=e*Math.sin(l+G*c)*Math.sin(f+D*h),b.push(_.x,_.y,_.z),x.copy(_).normalize(),w.push(x.x,x.y,x.z),y.push(G+U,1-D),L.push(m++)}g.push(L)}for(let v=0;v<s;v++)for(let L=0;L<n;L++){const D=g[v][L+1],U=g[v][L],F=g[v+1][L],G=g[v+1][L+1];(v!==0||f>0)&&S.push(D,U,G),(v!==s-1||p<Math.PI)&&S.push(U,F,G)}this.setIndex(S),this.setAttribute("position",new Hi(b,3)),this.setAttribute("normal",new Hi(w,3)),this.setAttribute("uv",new Hi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _p(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class dM extends Ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ml,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pM extends Ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class mM extends gp{constructor(e=-1,n=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,h=l+n,p=l-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class gM extends Kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Nt{constructor(e){this.value=e}clone(){return new Nt(this.value.clone===void 0?this.value:this.value.clone())}}function O0(a,e,n,s){const l=vM(s);switch(n){case N_:return a*e;case O_:return a*e/l.components*l.byteLength;case fp:return a*e/l.components*l.byteLength;case P_:return a*e*2/l.components*l.byteLength;case hp:return a*e*2/l.components*l.byteLength;case L_:return a*e*3/l.components*l.byteLength;case Ri:return a*e*4/l.components*l.byteLength;case dp:return a*e*4/l.components*l.byteLength;case nu:case iu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case au:case ru:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Rd:case Dd:return Math.max(a,16)*Math.max(e,8)/4;case wd:case Cd:return Math.max(a,8)*Math.max(e,8)/2;case Ud:case Nd:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Ld:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Od:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Pd:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Bd:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case zd:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Id:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Fd:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Hd:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Gd:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Vd:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case kd:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case jd:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Xd:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Wd:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case qd:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case su:case Yd:case Zd:return Math.ceil(a/4)*Math.ceil(e/4)*16;case B_:case Kd:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Qd:case Jd:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function vM(a){switch(a){case In:case C_:return{byteLength:1,components:1};case sl:case D_:case pl:return{byteLength:2,components:1};case cp:case up:return{byteLength:2,components:4};case cr:case lp:case va:return{byteLength:4,components:1};case U_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function q_(){let a=null,e=!1,n=null,s=null;function l(c,f){n(c,f),s=a.requestAnimationFrame(l)}return{start:function(){e!==!0&&n!==null&&(s=a.requestAnimationFrame(l),e=!0)},stop:function(){a.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){a=c}}}function _M(a){const e=new WeakMap;function n(h,p){const m=h.array,g=h.usage,_=m.byteLength,x=a.createBuffer();a.bindBuffer(p,x),a.bufferData(p,m,g),h.onUploadCallback();let S;if(m instanceof Float32Array)S=a.FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?S=a.HALF_FLOAT:S=a.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=a.SHORT;else if(m instanceof Uint32Array)S=a.UNSIGNED_INT;else if(m instanceof Int32Array)S=a.INT;else if(m instanceof Int8Array)S=a.BYTE;else if(m instanceof Uint8Array)S=a.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,p,m){const g=p.array,_=p.updateRanges;if(a.bindBuffer(m,h),_.length===0)a.bufferSubData(m,0,g);else{_.sort((S,b)=>S.start-b.start);let x=0;for(let S=1;S<_.length;S++){const b=_[x],w=_[S];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++x,_[x]=w)}_.length=x+1;for(let S=0,b=_.length;S<b;S++){const w=_[S];a.bufferSubData(m,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(a.deleteBuffer(p.buffer),e.delete(h))}function f(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,n(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,p),m.version=h.version}}return{get:l,remove:c,update:f}}var xM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yM=`#ifdef USE_ALPHAHASH
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
#endif`,SM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,EM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TM=`#ifdef USE_AOMAP
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
#endif`,AM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wM=`#ifdef USE_BATCHING
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
#endif`,RM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,CM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,UM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,NM=`#ifdef USE_IRIDESCENCE
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
#endif`,LM=`#ifdef USE_BUMPMAP
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
#endif`,OM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,IM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,FM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,HM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,GM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,VM=`#define PI 3.141592653589793
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
} // validated`,kM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jM=`vec3 transformedNormal = objectNormal;
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
#endif`,XM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ZM="gl_FragColor = linearToOutputTexel( gl_FragColor );",KM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,QM=`#ifdef USE_ENVMAP
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
#endif`,JM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$M=`#ifdef USE_ENVMAP
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
#endif`,eb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tb=`#ifdef USE_ENVMAP
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
#endif`,nb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ib=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ab=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sb=`#ifdef USE_GRADIENTMAP
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
}`,ob=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ub=`uniform bool receiveShadow;
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
#endif`,fb=`#ifdef USE_ENVMAP
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
#endif`,hb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,db=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gb=`PhysicalMaterial material;
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
#endif`,vb=`struct PhysicalMaterial {
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
}`,_b=`
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
#endif`,xb=`#if defined( RE_IndirectDiffuse )
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
#endif`,yb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Eb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ab=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rb=`#if defined( USE_POINTS_UV )
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
#endif`,Cb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Db=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ub=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ob=`#ifdef USE_MORPHTARGETS
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
#endif`,Pb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ib=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gb=`#ifdef USE_NORMALMAP
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
#endif`,Vb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$b=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,e2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,i2=`float getShadowMask() {
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
}`,a2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r2=`#ifdef USE_SKINNING
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
#endif`,s2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o2=`#ifdef USE_SKINNING
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
#endif`,l2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,u2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,f2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,h2=`#ifdef USE_TRANSMISSION
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
#endif`,d2=`#ifdef USE_TRANSMISSION
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
#endif`,p2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,x2=`uniform sampler2D t2D;
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
}`,y2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,E2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b2=`#include <common>
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
}`,T2=`#if DEPTH_PACKING == 3200
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
}`,A2=`#define DISTANCE
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
}`,w2=`#define DISTANCE
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
}`,R2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D2=`uniform float scale;
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
}`,U2=`uniform vec3 diffuse;
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
}`,N2=`#include <common>
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
}`,L2=`uniform vec3 diffuse;
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
}`,O2=`#define LAMBERT
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
}`,P2=`#define LAMBERT
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
}`,B2=`#define MATCAP
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
}`,z2=`#define MATCAP
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
}`,I2=`#define NORMAL
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
}`,F2=`#define NORMAL
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
}`,H2=`#define PHONG
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
}`,G2=`#define PHONG
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
}`,V2=`#define STANDARD
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
}`,k2=`#define STANDARD
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
}`,j2=`#define TOON
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
}`,X2=`#define TOON
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
}`,W2=`uniform float size;
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
}`,q2=`uniform vec3 diffuse;
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
}`,Y2=`#include <common>
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
}`,Z2=`uniform vec3 color;
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
}`,K2=`uniform float rotation;
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
}`,Q2=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:xM,alphahash_pars_fragment:yM,alphamap_fragment:SM,alphamap_pars_fragment:EM,alphatest_fragment:MM,alphatest_pars_fragment:bM,aomap_fragment:TM,aomap_pars_fragment:AM,batching_pars_vertex:wM,batching_vertex:RM,begin_vertex:CM,beginnormal_vertex:DM,bsdfs:UM,iridescence_fragment:NM,bumpmap_pars_fragment:LM,clipping_planes_fragment:OM,clipping_planes_pars_fragment:PM,clipping_planes_pars_vertex:BM,clipping_planes_vertex:zM,color_fragment:IM,color_pars_fragment:FM,color_pars_vertex:HM,color_vertex:GM,common:VM,cube_uv_reflection_fragment:kM,defaultnormal_vertex:jM,displacementmap_pars_vertex:XM,displacementmap_vertex:WM,emissivemap_fragment:qM,emissivemap_pars_fragment:YM,colorspace_fragment:ZM,colorspace_pars_fragment:KM,envmap_fragment:QM,envmap_common_pars_fragment:JM,envmap_pars_fragment:$M,envmap_pars_vertex:eb,envmap_physical_pars_fragment:fb,envmap_vertex:tb,fog_vertex:nb,fog_pars_vertex:ib,fog_fragment:ab,fog_pars_fragment:rb,gradientmap_pars_fragment:sb,lightmap_pars_fragment:ob,lights_lambert_fragment:lb,lights_lambert_pars_fragment:cb,lights_pars_begin:ub,lights_toon_fragment:hb,lights_toon_pars_fragment:db,lights_phong_fragment:pb,lights_phong_pars_fragment:mb,lights_physical_fragment:gb,lights_physical_pars_fragment:vb,lights_fragment_begin:_b,lights_fragment_maps:xb,lights_fragment_end:yb,logdepthbuf_fragment:Sb,logdepthbuf_pars_fragment:Eb,logdepthbuf_pars_vertex:Mb,logdepthbuf_vertex:bb,map_fragment:Tb,map_pars_fragment:Ab,map_particle_fragment:wb,map_particle_pars_fragment:Rb,metalnessmap_fragment:Cb,metalnessmap_pars_fragment:Db,morphinstance_vertex:Ub,morphcolor_vertex:Nb,morphnormal_vertex:Lb,morphtarget_pars_vertex:Ob,morphtarget_vertex:Pb,normal_fragment_begin:Bb,normal_fragment_maps:zb,normal_pars_fragment:Ib,normal_pars_vertex:Fb,normal_vertex:Hb,normalmap_pars_fragment:Gb,clearcoat_normal_fragment_begin:Vb,clearcoat_normal_fragment_maps:kb,clearcoat_pars_fragment:jb,iridescence_pars_fragment:Xb,opaque_fragment:Wb,packing:qb,premultiplied_alpha_fragment:Yb,project_vertex:Zb,dithering_fragment:Kb,dithering_pars_fragment:Qb,roughnessmap_fragment:Jb,roughnessmap_pars_fragment:$b,shadowmap_pars_fragment:e2,shadowmap_pars_vertex:t2,shadowmap_vertex:n2,shadowmask_pars_fragment:i2,skinbase_vertex:a2,skinning_pars_vertex:r2,skinning_vertex:s2,skinnormal_vertex:o2,specularmap_fragment:l2,specularmap_pars_fragment:c2,tonemapping_fragment:u2,tonemapping_pars_fragment:f2,transmission_fragment:h2,transmission_pars_fragment:d2,uv_pars_fragment:p2,uv_pars_vertex:m2,uv_vertex:g2,worldpos_vertex:v2,background_vert:_2,background_frag:x2,backgroundCube_vert:y2,backgroundCube_frag:S2,cube_vert:E2,cube_frag:M2,depth_vert:b2,depth_frag:T2,distanceRGBA_vert:A2,distanceRGBA_frag:w2,equirect_vert:R2,equirect_frag:C2,linedashed_vert:D2,linedashed_frag:U2,meshbasic_vert:N2,meshbasic_frag:L2,meshlambert_vert:O2,meshlambert_frag:P2,meshmatcap_vert:B2,meshmatcap_frag:z2,meshnormal_vert:I2,meshnormal_frag:F2,meshphong_vert:H2,meshphong_frag:G2,meshphysical_vert:V2,meshphysical_frag:k2,meshtoon_vert:j2,meshtoon_frag:X2,points_vert:W2,points_frag:q2,shadow_vert:Y2,shadow_frag:Z2,sprite_vert:K2,sprite_frag:Q2},Ue={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},zi={basic:{uniforms:Hn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Hn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Hn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Hn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Hn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Hn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Hn([Ue.points,Ue.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Hn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Hn([Ue.common,Ue.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Hn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Hn([Ue.sprite,Ue.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:Hn([Ue.common,Ue.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:Hn([Ue.lights,Ue.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};zi.physical={uniforms:Hn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Zc={r:0,b:0,g:0},Pr=new Ma,J2=new un;function $2(a,e,n,s,l,c,f){const h=new Lt(0);let p=c===!0?0:1,m,g,_=null,x=0,S=null;function b(D){let U=D.isScene===!0?D.background:null;return U&&U.isTexture&&(U=(D.backgroundBlurriness>0?n:e).get(U)),U}function w(D){let U=!1;const F=b(D);F===null?v(h,p):F&&F.isColor&&(v(F,1),U=!0);const G=a.xr.getEnvironmentBlendMode();G==="additive"?s.buffers.color.setClear(0,0,0,1,f):G==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(a.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function y(D,U){const F=b(U);F&&(F.isCubeTexture||F.mapping===_u)?(g===void 0&&(g=new xi(new Qs(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:qs(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,I,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Pr.copy(U.backgroundRotation),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),g.material.uniforms.envMap.value=F,g.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(J2.makeRotationFromEuler(Pr)),g.material.toneMapped=wt.getTransfer(F.colorSpace)!==Ft,(_!==F||x!==F.version||S!==a.toneMapping)&&(g.material.needsUpdate=!0,_=F,x=F.version,S=a.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):F&&F.isTexture&&(m===void 0&&(m=new xi(new yu(2,2),new Vn({name:"BackgroundMaterial",uniforms:qs(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:Ea,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=F,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=wt.getTransfer(F.colorSpace)!==Ft,F.matrixAutoUpdate===!0&&F.updateMatrix(),m.material.uniforms.uvTransform.value.copy(F.matrix),(_!==F||x!==F.version||S!==a.toneMapping)&&(m.material.needsUpdate=!0,_=F,x=F.version,S=a.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function v(D,U){D.getRGB(Zc,j_(a)),s.buffers.color.setClear(Zc.r,Zc.g,Zc.b,U,f)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,U=1){h.set(D),p=U,v(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,v(h,p)},render:w,addToRenderList:y,dispose:L}}function eT(a,e){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,f=!1;function h(C,k,ce,oe,xe){let pe=!1;const z=_(oe,ce,k);c!==z&&(c=z,m(c.object)),pe=S(C,oe,ce,xe),pe&&b(C,oe,ce,xe),xe!==null&&e.update(xe,a.ELEMENT_ARRAY_BUFFER),(pe||f)&&(f=!1,U(C,k,ce,oe),xe!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(xe).buffer))}function p(){return a.createVertexArray()}function m(C){return a.bindVertexArray(C)}function g(C){return a.deleteVertexArray(C)}function _(C,k,ce){const oe=ce.wireframe===!0;let xe=s[C.id];xe===void 0&&(xe={},s[C.id]=xe);let pe=xe[k.id];pe===void 0&&(pe={},xe[k.id]=pe);let z=pe[oe];return z===void 0&&(z=x(p()),pe[oe]=z),z}function x(C){const k=[],ce=[],oe=[];for(let xe=0;xe<n;xe++)k[xe]=0,ce[xe]=0,oe[xe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ce,attributeDivisors:oe,object:C,attributes:{},index:null}}function S(C,k,ce,oe){const xe=c.attributes,pe=k.attributes;let z=0;const K=ce.getAttributes();for(const Y in K)if(K[Y].location>=0){const P=xe[Y];let ee=pe[Y];if(ee===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(ee=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(ee=C.instanceColor)),P===void 0||P.attribute!==ee||ee&&P.data!==ee.data)return!0;z++}return c.attributesNum!==z||c.index!==oe}function b(C,k,ce,oe){const xe={},pe=k.attributes;let z=0;const K=ce.getAttributes();for(const Y in K)if(K[Y].location>=0){let P=pe[Y];P===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(P=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(P=C.instanceColor));const ee={};ee.attribute=P,P&&P.data&&(ee.data=P.data),xe[Y]=ee,z++}c.attributes=xe,c.attributesNum=z,c.index=oe}function w(){const C=c.newAttributes;for(let k=0,ce=C.length;k<ce;k++)C[k]=0}function y(C){v(C,0)}function v(C,k){const ce=c.newAttributes,oe=c.enabledAttributes,xe=c.attributeDivisors;ce[C]=1,oe[C]===0&&(a.enableVertexAttribArray(C),oe[C]=1),xe[C]!==k&&(a.vertexAttribDivisor(C,k),xe[C]=k)}function L(){const C=c.newAttributes,k=c.enabledAttributes;for(let ce=0,oe=k.length;ce<oe;ce++)k[ce]!==C[ce]&&(a.disableVertexAttribArray(ce),k[ce]=0)}function D(C,k,ce,oe,xe,pe,z){z===!0?a.vertexAttribIPointer(C,k,ce,xe,pe):a.vertexAttribPointer(C,k,ce,oe,xe,pe)}function U(C,k,ce,oe){w();const xe=oe.attributes,pe=ce.getAttributes(),z=k.defaultAttributeValues;for(const K in pe){const Y=pe[K];if(Y.location>=0){let Me=xe[K];if(Me===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(Me=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(Me=C.instanceColor)),Me!==void 0){const P=Me.normalized,ee=Me.itemSize,ye=e.get(Me);if(ye===void 0)continue;const Ee=ye.buffer,J=ye.type,me=ye.bytesPerElement,Se=J===a.INT||J===a.UNSIGNED_INT||Me.gpuType===lp;if(Me.isInterleavedBufferAttribute){const we=Me.data,Ne=we.stride,lt=Me.offset;if(we.isInstancedInterleavedBuffer){for(let Ke=0;Ke<Y.locationSize;Ke++)v(Y.location+Ke,we.meshPerAttribute);C.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let Ke=0;Ke<Y.locationSize;Ke++)y(Y.location+Ke);a.bindBuffer(a.ARRAY_BUFFER,Ee);for(let Ke=0;Ke<Y.locationSize;Ke++)D(Y.location+Ke,ee/Y.locationSize,J,P,Ne*me,(lt+ee/Y.locationSize*Ke)*me,Se)}else{if(Me.isInstancedBufferAttribute){for(let we=0;we<Y.locationSize;we++)v(Y.location+we,Me.meshPerAttribute);C.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let we=0;we<Y.locationSize;we++)y(Y.location+we);a.bindBuffer(a.ARRAY_BUFFER,Ee);for(let we=0;we<Y.locationSize;we++)D(Y.location+we,ee/Y.locationSize,J,P,ee*me,ee/Y.locationSize*we*me,Se)}}else if(z!==void 0){const P=z[K];if(P!==void 0)switch(P.length){case 2:a.vertexAttrib2fv(Y.location,P);break;case 3:a.vertexAttrib3fv(Y.location,P);break;case 4:a.vertexAttrib4fv(Y.location,P);break;default:a.vertexAttrib1fv(Y.location,P)}}}}L()}function F(){W();for(const C in s){const k=s[C];for(const ce in k){const oe=k[ce];for(const xe in oe)g(oe[xe].object),delete oe[xe];delete k[ce]}delete s[C]}}function G(C){if(s[C.id]===void 0)return;const k=s[C.id];for(const ce in k){const oe=k[ce];for(const xe in oe)g(oe[xe].object),delete oe[xe];delete k[ce]}delete s[C.id]}function I(C){for(const k in s){const ce=s[k];if(ce[C.id]===void 0)continue;const oe=ce[C.id];for(const xe in oe)g(oe[xe].object),delete oe[xe];delete ce[C.id]}}function W(){N(),f=!0,c!==l&&(c=l,m(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:W,resetDefaultState:N,dispose:F,releaseStatesOfGeometry:G,releaseStatesOfProgram:I,initAttributes:w,enableAttribute:y,disableUnusedAttributes:L}}function tT(a,e,n){let s;function l(m){s=m}function c(m,g){a.drawArrays(s,m,g),n.update(g,s,1)}function f(m,g,_){_!==0&&(a.drawArraysInstanced(s,m,g,_),n.update(g,s,_))}function h(m,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,g,0,_);let S=0;for(let b=0;b<_;b++)S+=g[b];n.update(S,s,1)}function p(m,g,_,x){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let b=0;b<m.length;b++)f(m[b],g[b],x[b]);else{S.multiDrawArraysInstancedWEBGL(s,m,0,g,0,x,0,_);let b=0;for(let w=0;w<_;w++)b+=g[w]*x[w];n.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function nT(a,e,n,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=a.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(I){return!(I!==Ri&&s.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const W=I===pl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==In&&s.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==va&&!W)}function p(I){if(I==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const _=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),v=a.getParameter(a.MAX_VERTEX_ATTRIBS),L=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),D=a.getParameter(a.MAX_VARYING_VECTORS),U=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),F=b>0,G=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:_,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:L,maxVaryings:D,maxFragmentUniforms:U,vertexTextures:F,maxSamples:G}}function iT(a){const e=this;let n=null,s=0,l=!1,c=!1;const f=new Ir,h=new st,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const S=_.length!==0||x||s!==0||l;return l=x,s=_.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){n=g(_,x,0)},this.setState=function(_,x,S){const b=_.clippingPlanes,w=_.clipIntersection,y=_.clipShadows,v=a.get(_);if(!l||b===null||b.length===0||c&&!y)c?g(null):m();else{const L=c?0:s,D=L*4;let U=v.clippingState||null;p.value=U,U=g(b,x,D,S);for(let F=0;F!==D;++F)U[F]=n[F];v.clippingState=U,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=L}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(_,x,S,b){const w=_!==null?_.length:0;let y=null;if(w!==0){if(y=p.value,b!==!0||y===null){const v=S+w*4,L=x.matrixWorldInverse;h.getNormalMatrix(L),(y===null||y.length<v)&&(y=new Float32Array(v));for(let D=0,U=S;D!==w;++D,U+=4)f.copy(_[D]).applyMatrix4(L,h),f.normal.toArray(y,U),y[U+3]=f.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function aT(a){let e=new WeakMap;function n(f,h){return h===Md?f.mapping=ks:h===bd&&(f.mapping=js),f}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===Md||h===bd)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new cM(p.height);return m.fromEquirectangularTexture(a,f),e.set(f,m),f.addEventListener("dispose",l),n(m.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const Fs=4,P0=[.125,.215,.35,.446,.526,.582],Gr=20,id=new mM,B0=new Lt;let ad=null,rd=0,sd=0,od=!1;const Fr=(1+Math.sqrt(5))/2,zs=1/Fr,z0=[new se(-Fr,zs,0),new se(Fr,zs,0),new se(-zs,0,Fr),new se(zs,0,Fr),new se(0,Fr,-zs),new se(0,Fr,zs),new se(-1,1,-1),new se(1,1,-1),new se(-1,1,1),new se(1,1,1)],rT=new se;class I0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,s=.1,l=100,c={}){const{size:f=256,position:h=rT}=c;ad=this._renderer.getRenderTarget(),rd=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,s,l,p,h),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=G0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=H0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ad,rd,sd),this._renderer.xr.enabled=od,e.scissorTest=!1,Kc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ks||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ad=this._renderer.getRenderTarget(),rd=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:pl,format:Ri,colorSpace:ur,depthBuffer:!1},l=F0(e,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=F0(e,n,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sT(c)),this._blurMaterial=oT(c,e,n)}return l}_compileMaterial(e){const n=new xi(this._lodPlanes[0],e);this._renderer.compile(n,id)}_sceneToCubeUV(e,n,s,l,c){const p=new Kn(90,1,n,s),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,S=_.toneMapping;_.getClearColor(B0),_.toneMapping=lr,_.autoClear=!1;const b=new xu({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),w=new xi(new Qs,b);let y=!1;const v=e.background;v?v.isColor&&(b.color.copy(v),e.background=null,y=!0):(b.color.copy(B0),y=!0);for(let L=0;L<6;L++){const D=L%3;D===0?(p.up.set(0,m[L],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[L],c.y,c.z)):D===1?(p.up.set(0,0,m[L]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[L],c.z)):(p.up.set(0,m[L],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[L]));const U=this._cubeSize;Kc(l,D*U,L>2?U:0,U,U),_.setRenderTarget(l),y&&_.render(w,p),_.render(e,p)}w.geometry.dispose(),w.material.dispose(),_.toneMapping=S,_.autoClear=x,e.background=v}_textureToCubeUV(e,n){const s=this._renderer,l=e.mapping===ks||e.mapping===js;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=G0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=H0());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new xi(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=e;const p=this._cubeSize;Kc(n,0,0,3*p,2*p),s.setRenderTarget(n),s.render(f,id)}_applyPMREM(e){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=z0[(l-c-1)%z0.length];this._blur(e,c-1,c,f,h)}n.autoClear=s}_blur(e,n,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,n,s,l,c,f,h){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new xi(this._lodPlanes[l],m),x=m.uniforms,S=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Gr-1),w=c/b,y=isFinite(c)?1+Math.floor(g*w):Gr;y>Gr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Gr}`);const v=[];let L=0;for(let I=0;I<Gr;++I){const W=I/w,N=Math.exp(-W*W/2);v.push(N),I===0?L+=N:I<y&&(L+=2*N)}for(let I=0;I<v.length;I++)v[I]=v[I]/L;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=f==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:D}=this;x.dTheta.value=b,x.mipInt.value=D-s;const U=this._sizeLods[l],F=3*U*(l>D-Fs?l-D+Fs:0),G=4*(this._cubeSize-U);Kc(n,F,G,3*U,2*U),p.setRenderTarget(n),p.render(_,id)}}function sT(a){const e=[],n=[],s=[];let l=a;const c=a-Fs+1+P0.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);n.push(h);let p=1/h;f>a-Fs?p=P0[f-a+Fs-1]:f===0&&(p=0),s.push(p);const m=1/(h-2),g=-m,_=1+m,x=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,b=6,w=3,y=2,v=1,L=new Float32Array(w*b*S),D=new Float32Array(y*b*S),U=new Float32Array(v*b*S);for(let G=0;G<S;G++){const I=G%3*2/3-1,W=G>2?0:-1,N=[I,W,0,I+2/3,W,0,I+2/3,W+1,0,I,W,0,I+2/3,W+1,0,I,W+1,0];L.set(N,w*b*G),D.set(x,y*b*G);const C=[G,G,G,G,G,G];U.set(C,v*b*G)}const F=new Ta;F.setAttribute("position",new yi(L,w)),F.setAttribute("uv",new yi(D,y)),F.setAttribute("faceIndex",new yi(U,v)),e.push(F),l>Fs&&l--}return{lodPlanes:e,sizeLods:n,sigmas:s}}function F0(a,e,n){const s=new Gn(a,e,n);return s.texture.mapping=_u,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Kc(a,e,n,s,l){a.viewport.set(e,n,s,l),a.scissor.set(e,n,s,l)}function oT(a,e,n){const s=new Float32Array(Gr),l=new se(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:xp(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function H0(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xp(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function G0(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function xp(){return`

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
	`}function lT(a){let e=new WeakMap,n=null;function s(h){if(h&&h.isTexture){const p=h.mapping,m=p===Md||p===bd,g=p===ks||p===js;if(m||g){let _=e.get(h);const x=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return n===null&&(n=new I0(a)),_=m?n.fromEquirectangular(h,_):n.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const S=h.image;return m&&S&&S.height>0||g&&S&&l(S)?(n===null&&(n=new I0(a)),_=m?n.fromEquirectangular(h):n.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function l(h){let p=0;const m=6;for(let g=0;g<m;g++)h[g]!==void 0&&p++;return p===m}function c(h){const p=h.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function cT(a){const e={};function n(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=a.getExtension(s)}return e[s]=l,l}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const l=n(s);return l===null&&ou("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function uT(a,e,n,s){const l={},c=new WeakMap;function f(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const b in x.attributes)e.remove(x.attributes[b]);x.removeEventListener("dispose",f),delete l[x.id];const S=c.get(x);S&&(e.remove(S),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function h(_,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,n.memory.geometries++),x}function p(_){const x=_.attributes;for(const S in x)e.update(x[S],a.ARRAY_BUFFER)}function m(_){const x=[],S=_.index,b=_.attributes.position;let w=0;if(S!==null){const L=S.array;w=S.version;for(let D=0,U=L.length;D<U;D+=3){const F=L[D+0],G=L[D+1],I=L[D+2];x.push(F,G,G,I,I,F)}}else if(b!==void 0){const L=b.array;w=b.version;for(let D=0,U=L.length/3-1;D<U;D+=3){const F=D+0,G=D+1,I=D+2;x.push(F,G,G,I,I,F)}}else return;const y=new(I_(x)?k_:V_)(x,1);y.version=w;const v=c.get(_);v&&e.remove(v),c.set(_,y)}function g(_){const x=c.get(_);if(x){const S=_.index;S!==null&&x.version<S.version&&m(_)}else m(_);return c.get(_)}return{get:h,update:p,getWireframeAttribute:g}}function fT(a,e,n){let s;function l(x){s=x}let c,f;function h(x){c=x.type,f=x.bytesPerElement}function p(x,S){a.drawElements(s,S,c,x*f),n.update(S,s,1)}function m(x,S,b){b!==0&&(a.drawElementsInstanced(s,S,c,x*f,b),n.update(S,s,b))}function g(x,S,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,x,0,b);let y=0;for(let v=0;v<b;v++)y+=S[v];n.update(y,s,1)}function _(x,S,b,w){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<x.length;v++)m(x[v]/f,S[v],w[v]);else{y.multiDrawElementsInstancedWEBGL(s,S,0,c,x,0,w,0,b);let v=0;for(let L=0;L<b;L++)v+=S[L]*w[L];n.update(v,s,1)}}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function hT(a){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(n.calls++,f){case a.TRIANGLES:n.triangles+=h*(c/3);break;case a.LINES:n.lines+=h*(c/2);break;case a.LINE_STRIP:n.lines+=h*(c-1);break;case a.LINE_LOOP:n.lines+=h*c;break;case a.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:l,update:s}}function dT(a,e,n){const s=new WeakMap,l=new Qt;function c(f,h,p){const m=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let x=s.get(h);if(x===void 0||x.count!==_){let C=function(){W.dispose(),s.delete(h),h.removeEventListener("dispose",C)};var S=C;x!==void 0&&x.texture.dispose();const b=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let U=0;b===!0&&(U=1),w===!0&&(U=2),y===!0&&(U=3);let F=h.attributes.position.count*U,G=1;F>e.maxTextureSize&&(G=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const I=new Float32Array(F*G*4*_),W=new F_(I,F,G,_);W.type=va,W.needsUpdate=!0;const N=U*4;for(let k=0;k<_;k++){const ce=v[k],oe=L[k],xe=D[k],pe=F*G*4*k;for(let z=0;z<ce.count;z++){const K=z*N;b===!0&&(l.fromBufferAttribute(ce,z),I[pe+K+0]=l.x,I[pe+K+1]=l.y,I[pe+K+2]=l.z,I[pe+K+3]=0),w===!0&&(l.fromBufferAttribute(oe,z),I[pe+K+4]=l.x,I[pe+K+5]=l.y,I[pe+K+6]=l.z,I[pe+K+7]=0),y===!0&&(l.fromBufferAttribute(xe,z),I[pe+K+8]=l.x,I[pe+K+9]=l.y,I[pe+K+10]=l.z,I[pe+K+11]=xe.itemSize===4?l.w:1)}}x={count:_,texture:W,size:new ot(F,G)},s.set(h,x),h.addEventListener("dispose",C)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(a,"morphTexture",f.morphTexture,n);else{let b=0;for(let y=0;y<m.length;y++)b+=m[y];const w=h.morphTargetsRelative?1:1-b;p.getUniforms().setValue(a,"morphTargetBaseInfluence",w),p.getUniforms().setValue(a,"morphTargetInfluences",m)}p.getUniforms().setValue(a,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(a,"morphTargetsTextureSize",x.size)}return{update:c}}function pT(a,e,n,s){let l=new WeakMap;function c(p){const m=s.render.frame,g=p.geometry,_=e.get(p,g);if(l.get(_)!==m&&(e.update(_),l.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==m&&(n.update(p.instanceMatrix,a.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,a.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return _}function f(){l=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:f}}const Y_=new zn,V0=new vp(1,1),Z_=new F_,K_=new XE,Q_=new X_,k0=[],j0=[],X0=new Float32Array(16),W0=new Float32Array(9),q0=new Float32Array(4);function Js(a,e,n){const s=a[0];if(s<=0||s>0)return a;const l=e*n;let c=k0[l];if(c===void 0&&(c=new Float32Array(l),k0[l]=c),e!==0){s.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=n,a[f].toArray(c,h)}return c}function mn(a,e){if(a.length!==e.length)return!1;for(let n=0,s=a.length;n<s;n++)if(a[n]!==e[n])return!1;return!0}function gn(a,e){for(let n=0,s=e.length;n<s;n++)a[n]=e[n]}function Su(a,e){let n=j0[e];n===void 0&&(n=new Int32Array(e),j0[e]=n);for(let s=0;s!==e;++s)n[s]=a.allocateTextureUnit();return n}function mT(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function gT(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(mn(n,e))return;a.uniform2fv(this.addr,e),gn(n,e)}}function vT(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(mn(n,e))return;a.uniform3fv(this.addr,e),gn(n,e)}}function _T(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(mn(n,e))return;a.uniform4fv(this.addr,e),gn(n,e)}}function xT(a,e){const n=this.cache,s=e.elements;if(s===void 0){if(mn(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),gn(n,e)}else{if(mn(n,s))return;q0.set(s),a.uniformMatrix2fv(this.addr,!1,q0),gn(n,s)}}function yT(a,e){const n=this.cache,s=e.elements;if(s===void 0){if(mn(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),gn(n,e)}else{if(mn(n,s))return;W0.set(s),a.uniformMatrix3fv(this.addr,!1,W0),gn(n,s)}}function ST(a,e){const n=this.cache,s=e.elements;if(s===void 0){if(mn(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),gn(n,e)}else{if(mn(n,s))return;X0.set(s),a.uniformMatrix4fv(this.addr,!1,X0),gn(n,s)}}function ET(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function MT(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(mn(n,e))return;a.uniform2iv(this.addr,e),gn(n,e)}}function bT(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(mn(n,e))return;a.uniform3iv(this.addr,e),gn(n,e)}}function TT(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(mn(n,e))return;a.uniform4iv(this.addr,e),gn(n,e)}}function AT(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function wT(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(mn(n,e))return;a.uniform2uiv(this.addr,e),gn(n,e)}}function RT(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(mn(n,e))return;a.uniform3uiv(this.addr,e),gn(n,e)}}function CT(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(mn(n,e))return;a.uniform4uiv(this.addr,e),gn(n,e)}}function DT(a,e,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l);let c;this.type===a.SAMPLER_2D_SHADOW?(V0.compareFunction=z_,c=V0):c=Y_,n.setTexture2D(e||c,l)}function UT(a,e,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),n.setTexture3D(e||K_,l)}function NT(a,e,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),n.setTextureCube(e||Q_,l)}function LT(a,e,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),n.setTexture2DArray(e||Z_,l)}function OT(a){switch(a){case 5126:return mT;case 35664:return gT;case 35665:return vT;case 35666:return _T;case 35674:return xT;case 35675:return yT;case 35676:return ST;case 5124:case 35670:return ET;case 35667:case 35671:return MT;case 35668:case 35672:return bT;case 35669:case 35673:return TT;case 5125:return AT;case 36294:return wT;case 36295:return RT;case 36296:return CT;case 35678:case 36198:case 36298:case 36306:case 35682:return DT;case 35679:case 36299:case 36307:return UT;case 35680:case 36300:case 36308:case 36293:return NT;case 36289:case 36303:case 36311:case 36292:return LT}}function PT(a,e){a.uniform1fv(this.addr,e)}function BT(a,e){const n=Js(e,this.size,2);a.uniform2fv(this.addr,n)}function zT(a,e){const n=Js(e,this.size,3);a.uniform3fv(this.addr,n)}function IT(a,e){const n=Js(e,this.size,4);a.uniform4fv(this.addr,n)}function FT(a,e){const n=Js(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function HT(a,e){const n=Js(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function GT(a,e){const n=Js(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function VT(a,e){a.uniform1iv(this.addr,e)}function kT(a,e){a.uniform2iv(this.addr,e)}function jT(a,e){a.uniform3iv(this.addr,e)}function XT(a,e){a.uniform4iv(this.addr,e)}function WT(a,e){a.uniform1uiv(this.addr,e)}function qT(a,e){a.uniform2uiv(this.addr,e)}function YT(a,e){a.uniform3uiv(this.addr,e)}function ZT(a,e){a.uniform4uiv(this.addr,e)}function KT(a,e,n){const s=this.cache,l=e.length,c=Su(n,l);mn(s,c)||(a.uniform1iv(this.addr,c),gn(s,c));for(let f=0;f!==l;++f)n.setTexture2D(e[f]||Y_,c[f])}function QT(a,e,n){const s=this.cache,l=e.length,c=Su(n,l);mn(s,c)||(a.uniform1iv(this.addr,c),gn(s,c));for(let f=0;f!==l;++f)n.setTexture3D(e[f]||K_,c[f])}function JT(a,e,n){const s=this.cache,l=e.length,c=Su(n,l);mn(s,c)||(a.uniform1iv(this.addr,c),gn(s,c));for(let f=0;f!==l;++f)n.setTextureCube(e[f]||Q_,c[f])}function $T(a,e,n){const s=this.cache,l=e.length,c=Su(n,l);mn(s,c)||(a.uniform1iv(this.addr,c),gn(s,c));for(let f=0;f!==l;++f)n.setTexture2DArray(e[f]||Z_,c[f])}function eA(a){switch(a){case 5126:return PT;case 35664:return BT;case 35665:return zT;case 35666:return IT;case 35674:return FT;case 35675:return HT;case 35676:return GT;case 5124:case 35670:return VT;case 35667:case 35671:return kT;case 35668:case 35672:return jT;case 35669:case 35673:return XT;case 5125:return WT;case 36294:return qT;case 36295:return YT;case 36296:return ZT;case 35678:case 36198:case 36298:case 36306:case 35682:return KT;case 35679:case 36299:case 36307:return QT;case 35680:case 36300:case 36308:case 36293:return JT;case 36289:case 36303:case 36311:case 36292:return $T}}class tA{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.type=n.type,this.setValue=OT(n.type)}}class nA{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=eA(n.type)}}class iA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,n[h.id],s)}}}const ld=/(\w+)(\])?(\[|\.)?/g;function Y0(a,e){a.seq.push(e),a.map[e.id]=e}function aA(a,e,n){const s=a.name,l=s.length;for(ld.lastIndex=0;;){const c=ld.exec(s),f=ld.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&f+2===l){Y0(n,m===void 0?new tA(h,a,e):new nA(h,a,e));break}else{let _=n.map[h];_===void 0&&(_=new iA(h),Y0(n,_)),n=_}}}class lu{constructor(e,n){this.seq=[],this.map={};const s=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=e.getActiveUniform(n,l),f=e.getUniformLocation(n,c.name);aA(c,f,this)}}setValue(e,n,s,l){const c=this.map[n];c!==void 0&&c.setValue(e,s,l)}setOptional(e,n,s){const l=n[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,n,s,l){for(let c=0,f=n.length;c!==f;++c){const h=n[c],p=s[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,l)}}static seqWithValue(e,n){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in n&&s.push(f)}return s}}function Z0(a,e,n){const s=a.createShader(e);return a.shaderSource(s,n),a.compileShader(s),s}const rA=37297;let sA=0;function oA(a,e){const n=a.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===e?">":" "} ${h}: ${n[f]}`)}return s.join(`
`)}const K0=new st;function lA(a){wt._getMatrix(K0,wt.workingColorSpace,a);const e=`mat3( ${K0.elements.map(n=>n.toFixed(4))} )`;switch(wt.getTransfer(a)){case fu:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Q0(a,e,n){const s=a.getShaderParameter(e,a.COMPILE_STATUS),l=a.getShaderInfoLog(e).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+l+`

`+oA(a.getShaderSource(e),f)}else return l}function cA(a,e){const n=lA(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function uA(a,e){let n;switch(e){case vE:n="Linear";break;case _E:n="Reinhard";break;case xE:n="Cineon";break;case yE:n="ACESFilmic";break;case EE:n="AgX";break;case ME:n="Neutral";break;case SE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Qc=new se;function fA(){wt.getLuminanceCoefficients(Qc);const a=Qc.x.toFixed(4),e=Qc.y.toFixed(4),n=Qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hA(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(il).join(`
`)}function dA(a){const e=[];for(const n in a){const s=a[n];s!==!1&&e.push("#define "+n+" "+s)}return e.join(`
`)}function pA(a,e){const n={},s=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=a.getActiveAttrib(e,l),f=c.name;let h=1;c.type===a.FLOAT_MAT2&&(h=2),c.type===a.FLOAT_MAT3&&(h=3),c.type===a.FLOAT_MAT4&&(h=4),n[f]={type:c.type,location:a.getAttribLocation(e,f),locationSize:h}}return n}function il(a){return a!==""}function J0(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $0(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mA=/^[ \t]*#include +<([\w\d./]+)>/gm;function ep(a){return a.replace(mA,vA)}const gA=new Map;function vA(a,e){let n=ct[e];if(n===void 0){const s=gA.get(e);if(s!==void 0)n=ct[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return ep(n)}const _A=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function e_(a){return a.replace(_A,xA)}function xA(a,e,n,s){let l="";for(let c=parseInt(e);c<parseInt(n);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function t_(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}function yA(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===A_?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===K1?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===ga&&(e="SHADOWMAP_TYPE_VSM"),e}function SA(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case ks:case js:e="ENVMAP_TYPE_CUBE";break;case _u:e="ENVMAP_TYPE_CUBE_UV";break}return e}function EA(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case js:e="ENVMAP_MODE_REFRACTION";break}return e}function MA(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case w_:e="ENVMAP_BLENDING_MULTIPLY";break;case mE:e="ENVMAP_BLENDING_MIX";break;case gE:e="ENVMAP_BLENDING_ADD";break}return e}function bA(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:s,maxMip:n}}function TA(a,e,n,s){const l=a.getContext(),c=n.defines;let f=n.vertexShader,h=n.fragmentShader;const p=yA(n),m=SA(n),g=EA(n),_=MA(n),x=bA(n),S=hA(n),b=dA(c),w=l.createProgram();let y,v,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(il).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(il).join(`
`),v.length>0&&(v+=`
`)):(y=[t_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(il).join(`
`),v=[t_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==lr?"#define TONE_MAPPING":"",n.toneMapping!==lr?ct.tonemapping_pars_fragment:"",n.toneMapping!==lr?uA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,cA("linearToOutputTexel",n.outputColorSpace),fA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(il).join(`
`)),f=ep(f),f=J0(f,n),f=$0(f,n),h=ep(h),h=J0(h,n),h=$0(h,n),f=e_(f),h=e_(h),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",n.glslVersion===g0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===g0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const D=L+y+f,U=L+v+h,F=Z0(l,l.VERTEX_SHADER,D),G=Z0(l,l.FRAGMENT_SHADER,U);l.attachShader(w,F),l.attachShader(w,G),n.index0AttributeName!==void 0?l.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function I(k){if(a.debug.checkShaderErrors){const ce=l.getProgramInfoLog(w).trim(),oe=l.getShaderInfoLog(F).trim(),xe=l.getShaderInfoLog(G).trim();let pe=!0,z=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(pe=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(l,w,F,G);else{const K=Q0(l,F,"vertex"),Y=Q0(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ce+`
`+K+`
`+Y)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(oe===""||xe==="")&&(z=!1);z&&(k.diagnostics={runnable:pe,programLog:ce,vertexShader:{log:oe,prefix:y},fragmentShader:{log:xe,prefix:v}})}l.deleteShader(F),l.deleteShader(G),W=new lu(l,w),N=pA(l,w)}let W;this.getUniforms=function(){return W===void 0&&I(this),W};let N;this.getAttributes=function(){return N===void 0&&I(this),N};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(w,rA)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=sA++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=F,this.fragmentShader=G,this}let AA=0;class wA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(n),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let s=n.get(e);return s===void 0&&(s=new Set,n.set(e,s)),s}_getShaderStage(e){const n=this.shaderCache;let s=n.get(e);return s===void 0&&(s=new RA(e),n.set(e,s)),s}}class RA{constructor(e){this.id=AA++,this.code=e,this.usedTimes=0}}function CA(a,e,n,s,l,c,f){const h=new H_,p=new wA,m=new Set,g=[],_=l.logarithmicDepthBuffer,x=l.vertexTextures;let S=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(N){return m.add(N),N===0?"uv":`uv${N}`}function y(N,C,k,ce,oe){const xe=ce.fog,pe=oe.geometry,z=N.isMeshStandardMaterial?ce.environment:null,K=(N.isMeshStandardMaterial?n:e).get(N.envMap||z),Y=K&&K.mapping===_u?K.image.height:null,Me=b[N.type];N.precision!==null&&(S=l.getMaxPrecision(N.precision),S!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",S,"instead."));const P=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,ee=P!==void 0?P.length:0;let ye=0;pe.morphAttributes.position!==void 0&&(ye=1),pe.morphAttributes.normal!==void 0&&(ye=2),pe.morphAttributes.color!==void 0&&(ye=3);let Ee,J,me,Se;if(Me){const bt=zi[Me];Ee=bt.vertexShader,J=bt.fragmentShader}else Ee=N.vertexShader,J=N.fragmentShader,p.update(N),me=p.getVertexShaderID(N),Se=p.getFragmentShaderID(N);const we=a.getRenderTarget(),Ne=a.state.buffers.depth.getReversed(),lt=oe.isInstancedMesh===!0,Ke=oe.isBatchedMesh===!0,jt=!!N.map,Gt=!!N.matcap,ht=!!K,H=!!N.aoMap,kn=!!N.lightMap,_t=!!N.bumpMap,it=!!N.normalMap,Xe=!!N.displacementMap,Ot=!!N.emissiveMap,Ve=!!N.metalnessMap,O=!!N.roughnessMap,A=N.anisotropy>0,te=N.clearcoat>0,ge=N.dispersion>0,be=N.iridescence>0,fe=N.sheen>0,Pe=N.transmission>0,Re=A&&!!N.anisotropyMap,Ge=te&&!!N.clearcoatMap,$e=te&&!!N.clearcoatNormalMap,Ae=te&&!!N.clearcoatRoughnessMap,Fe=be&&!!N.iridescenceMap,Ye=be&&!!N.iridescenceThicknessMap,Qe=fe&&!!N.sheenColorMap,Be=fe&&!!N.sheenRoughnessMap,ut=!!N.specularMap,nt=!!N.specularColorMap,Pt=!!N.specularIntensityMap,j=Pe&&!!N.transmissionMap,Le=Pe&&!!N.thicknessMap,le=!!N.gradientMap,ve=!!N.alphaMap,ze=N.alphaTest>0,Oe=!!N.alphaHash,at=!!N.extensions;let Xt=lr;N.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(Xt=a.toneMapping);const rn={shaderID:Me,shaderType:N.type,shaderName:N.name,vertexShader:Ee,fragmentShader:J,defines:N.defines,customVertexShaderID:me,customFragmentShaderID:Se,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:S,batching:Ke,batchingColor:Ke&&oe._colorsTexture!==null,instancing:lt,instancingColor:lt&&oe.instanceColor!==null,instancingMorph:lt&&oe.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:we===null?a.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:ur,alphaToCoverage:!!N.alphaToCoverage,map:jt,matcap:Gt,envMap:ht,envMapMode:ht&&K.mapping,envMapCubeUVHeight:Y,aoMap:H,lightMap:kn,bumpMap:_t,normalMap:it,displacementMap:x&&Xe,emissiveMap:Ot,normalMapObjectSpace:it&&N.normalMapType===wE,normalMapTangentSpace:it&&N.normalMapType===AE,metalnessMap:Ve,roughnessMap:O,anisotropy:A,anisotropyMap:Re,clearcoat:te,clearcoatMap:Ge,clearcoatNormalMap:$e,clearcoatRoughnessMap:Ae,dispersion:ge,iridescence:be,iridescenceMap:Fe,iridescenceThicknessMap:Ye,sheen:fe,sheenColorMap:Qe,sheenRoughnessMap:Be,specularMap:ut,specularColorMap:nt,specularIntensityMap:Pt,transmission:Pe,transmissionMap:j,thicknessMap:Le,gradientMap:le,opaque:N.transparent===!1&&N.blending===Hs&&N.alphaToCoverage===!1,alphaMap:ve,alphaTest:ze,alphaHash:Oe,combine:N.combine,mapUv:jt&&w(N.map.channel),aoMapUv:H&&w(N.aoMap.channel),lightMapUv:kn&&w(N.lightMap.channel),bumpMapUv:_t&&w(N.bumpMap.channel),normalMapUv:it&&w(N.normalMap.channel),displacementMapUv:Xe&&w(N.displacementMap.channel),emissiveMapUv:Ot&&w(N.emissiveMap.channel),metalnessMapUv:Ve&&w(N.metalnessMap.channel),roughnessMapUv:O&&w(N.roughnessMap.channel),anisotropyMapUv:Re&&w(N.anisotropyMap.channel),clearcoatMapUv:Ge&&w(N.clearcoatMap.channel),clearcoatNormalMapUv:$e&&w(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&w(N.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&w(N.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&w(N.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&w(N.sheenColorMap.channel),sheenRoughnessMapUv:Be&&w(N.sheenRoughnessMap.channel),specularMapUv:ut&&w(N.specularMap.channel),specularColorMapUv:nt&&w(N.specularColorMap.channel),specularIntensityMapUv:Pt&&w(N.specularIntensityMap.channel),transmissionMapUv:j&&w(N.transmissionMap.channel),thicknessMapUv:Le&&w(N.thicknessMap.channel),alphaMapUv:ve&&w(N.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(it||A),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!pe.attributes.uv&&(jt||ve),fog:!!xe,useFog:N.fog===!0,fogExp2:!!xe&&xe.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Ne,skinning:oe.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ye,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:N.dithering,shadowMapEnabled:a.shadowMap.enabled&&k.length>0,shadowMapType:a.shadowMap.type,toneMapping:Xt,decodeVideoTexture:jt&&N.map.isVideoTexture===!0&&wt.getTransfer(N.map.colorSpace)===Ft,decodeVideoTextureEmissive:Ot&&N.emissiveMap.isVideoTexture===!0&&wt.getTransfer(N.emissiveMap.colorSpace)===Ft,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===ci,flipSided:N.side===Mn,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:at&&N.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&N.extensions.multiDraw===!0||Ke)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return rn.vertexUv1s=m.has(1),rn.vertexUv2s=m.has(2),rn.vertexUv3s=m.has(3),m.clear(),rn}function v(N){const C=[];if(N.shaderID?C.push(N.shaderID):(C.push(N.customVertexShaderID),C.push(N.customFragmentShaderID)),N.defines!==void 0)for(const k in N.defines)C.push(k),C.push(N.defines[k]);return N.isRawShaderMaterial===!1&&(L(C,N),D(C,N),C.push(a.outputColorSpace)),C.push(N.customProgramCacheKey),C.join()}function L(N,C){N.push(C.precision),N.push(C.outputColorSpace),N.push(C.envMapMode),N.push(C.envMapCubeUVHeight),N.push(C.mapUv),N.push(C.alphaMapUv),N.push(C.lightMapUv),N.push(C.aoMapUv),N.push(C.bumpMapUv),N.push(C.normalMapUv),N.push(C.displacementMapUv),N.push(C.emissiveMapUv),N.push(C.metalnessMapUv),N.push(C.roughnessMapUv),N.push(C.anisotropyMapUv),N.push(C.clearcoatMapUv),N.push(C.clearcoatNormalMapUv),N.push(C.clearcoatRoughnessMapUv),N.push(C.iridescenceMapUv),N.push(C.iridescenceThicknessMapUv),N.push(C.sheenColorMapUv),N.push(C.sheenRoughnessMapUv),N.push(C.specularMapUv),N.push(C.specularColorMapUv),N.push(C.specularIntensityMapUv),N.push(C.transmissionMapUv),N.push(C.thicknessMapUv),N.push(C.combine),N.push(C.fogExp2),N.push(C.sizeAttenuation),N.push(C.morphTargetsCount),N.push(C.morphAttributeCount),N.push(C.numDirLights),N.push(C.numPointLights),N.push(C.numSpotLights),N.push(C.numSpotLightMaps),N.push(C.numHemiLights),N.push(C.numRectAreaLights),N.push(C.numDirLightShadows),N.push(C.numPointLightShadows),N.push(C.numSpotLightShadows),N.push(C.numSpotLightShadowsWithMaps),N.push(C.numLightProbes),N.push(C.shadowMapType),N.push(C.toneMapping),N.push(C.numClippingPlanes),N.push(C.numClipIntersection),N.push(C.depthPacking)}function D(N,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),N.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reverseDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),N.push(h.mask)}function U(N){const C=b[N.type];let k;if(C){const ce=zi[C];k=rM.clone(ce.uniforms)}else k=N.uniforms;return k}function F(N,C){let k;for(let ce=0,oe=g.length;ce<oe;ce++){const xe=g[ce];if(xe.cacheKey===C){k=xe,++k.usedTimes;break}}return k===void 0&&(k=new TA(a,C,N,c),g.push(k)),k}function G(N){if(--N.usedTimes===0){const C=g.indexOf(N);g[C]=g[g.length-1],g.pop(),N.destroy()}}function I(N){p.remove(N)}function W(){p.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:U,acquireProgram:F,releaseProgram:G,releaseShaderCache:I,programs:g,dispose:W}}function DA(){let a=new WeakMap;function e(f){return a.has(f)}function n(f){let h=a.get(f);return h===void 0&&(h={},a.set(f,h)),h}function s(f){a.delete(f)}function l(f,h,p){a.get(f)[h]=p}function c(){a=new WeakMap}return{has:e,get:n,remove:s,update:l,dispose:c}}function UA(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function n_(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function i_(){const a=[];let e=0;const n=[],s=[],l=[];function c(){e=0,n.length=0,s.length=0,l.length=0}function f(_,x,S,b,w,y){let v=a[e];return v===void 0?(v={id:_.id,object:_,geometry:x,material:S,groupOrder:b,renderOrder:_.renderOrder,z:w,group:y},a[e]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=S,v.groupOrder=b,v.renderOrder=_.renderOrder,v.z=w,v.group=y),e++,v}function h(_,x,S,b,w,y){const v=f(_,x,S,b,w,y);S.transmission>0?s.push(v):S.transparent===!0?l.push(v):n.push(v)}function p(_,x,S,b,w,y){const v=f(_,x,S,b,w,y);S.transmission>0?s.unshift(v):S.transparent===!0?l.unshift(v):n.unshift(v)}function m(_,x){n.length>1&&n.sort(_||UA),s.length>1&&s.sort(x||n_),l.length>1&&l.sort(x||n_)}function g(){for(let _=e,x=a.length;_<x;_++){const S=a[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:s,transparent:l,init:c,push:h,unshift:p,finish:g,sort:m}}function NA(){let a=new WeakMap;function e(s,l){const c=a.get(s);let f;return c===void 0?(f=new i_,a.set(s,[f])):l>=c.length?(f=new i_,c.push(f)):f=c[l],f}function n(){a=new WeakMap}return{get:e,dispose:n}}function LA(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new se,color:new Lt};break;case"SpotLight":n={position:new se,direction:new se,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new se,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new se,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":n={color:new Lt,position:new se,halfWidth:new se,halfHeight:new se};break}return a[e.id]=n,n}}}function OA(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=n,n}}}let PA=0;function BA(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function zA(a){const e=new LA,n=OA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new se);const l=new se,c=new un,f=new un;function h(m){let g=0,_=0,x=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let S=0,b=0,w=0,y=0,v=0,L=0,D=0,U=0,F=0,G=0,I=0;m.sort(BA);for(let N=0,C=m.length;N<C;N++){const k=m[N],ce=k.color,oe=k.intensity,xe=k.distance,pe=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)g+=ce.r*oe,_+=ce.g*oe,x+=ce.b*oe;else if(k.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(k.sh.coefficients[z],oe);I++}else if(k.isDirectionalLight){const z=e.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const K=k.shadow,Y=n.get(k);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,s.directionalShadow[S]=Y,s.directionalShadowMap[S]=pe,s.directionalShadowMatrix[S]=k.shadow.matrix,L++}s.directional[S]=z,S++}else if(k.isSpotLight){const z=e.get(k);z.position.setFromMatrixPosition(k.matrixWorld),z.color.copy(ce).multiplyScalar(oe),z.distance=xe,z.coneCos=Math.cos(k.angle),z.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),z.decay=k.decay,s.spot[w]=z;const K=k.shadow;if(k.map&&(s.spotLightMap[F]=k.map,F++,K.updateMatrices(k),k.castShadow&&G++),s.spotLightMatrix[w]=K.matrix,k.castShadow){const Y=n.get(k);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,s.spotShadow[w]=Y,s.spotShadowMap[w]=pe,U++}w++}else if(k.isRectAreaLight){const z=e.get(k);z.color.copy(ce).multiplyScalar(oe),z.halfWidth.set(k.width*.5,0,0),z.halfHeight.set(0,k.height*.5,0),s.rectArea[y]=z,y++}else if(k.isPointLight){const z=e.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity),z.distance=k.distance,z.decay=k.decay,k.castShadow){const K=k.shadow,Y=n.get(k);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,s.pointShadow[b]=Y,s.pointShadowMap[b]=pe,s.pointShadowMatrix[b]=k.shadow.matrix,D++}s.point[b]=z,b++}else if(k.isHemisphereLight){const z=e.get(k);z.skyColor.copy(k.color).multiplyScalar(oe),z.groundColor.copy(k.groundColor).multiplyScalar(oe),s.hemi[v]=z,v++}}y>0&&(a.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ue.LTC_FLOAT_1,s.rectAreaLTC2=Ue.LTC_FLOAT_2):(s.rectAreaLTC1=Ue.LTC_HALF_1,s.rectAreaLTC2=Ue.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=x;const W=s.hash;(W.directionalLength!==S||W.pointLength!==b||W.spotLength!==w||W.rectAreaLength!==y||W.hemiLength!==v||W.numDirectionalShadows!==L||W.numPointShadows!==D||W.numSpotShadows!==U||W.numSpotMaps!==F||W.numLightProbes!==I)&&(s.directional.length=S,s.spot.length=w,s.rectArea.length=y,s.point.length=b,s.hemi.length=v,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=U+F-G,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=I,W.directionalLength=S,W.pointLength=b,W.spotLength=w,W.rectAreaLength=y,W.hemiLength=v,W.numDirectionalShadows=L,W.numPointShadows=D,W.numSpotShadows=U,W.numSpotMaps=F,W.numLightProbes=I,s.version=PA++)}function p(m,g){let _=0,x=0,S=0,b=0,w=0;const y=g.matrixWorldInverse;for(let v=0,L=m.length;v<L;v++){const D=m[v];if(D.isDirectionalLight){const U=s.directional[_];U.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),_++}else if(D.isSpotLight){const U=s.spot[S];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),S++}else if(D.isRectAreaLight){const U=s.rectArea[b];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(y),f.identity(),c.copy(D.matrixWorld),c.premultiply(y),f.extractRotation(c),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),b++}else if(D.isPointLight){const U=s.point[x];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(y),x++}else if(D.isHemisphereLight){const U=s.hemi[w];U.direction.setFromMatrixPosition(D.matrixWorld),U.direction.transformDirection(y),w++}}}return{setup:h,setupView:p,state:s}}function a_(a){const e=new zA(a),n=[],s=[];function l(g){m.camera=g,n.length=0,s.length=0}function c(g){n.push(g)}function f(g){s.push(g)}function h(){e.setup(n)}function p(g){e.setupView(n,g)}const m={lightsArray:n,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:f}}function IA(a){let e=new WeakMap;function n(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new a_(a),e.set(l,[h])):c>=f.length?(h=new a_(a),f.push(h)):h=f[c],h}function s(){e=new WeakMap}return{get:n,dispose:s}}const FA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HA=`uniform sampler2D shadow_pass;
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
}`;function GA(a,e,n){let s=new W_;const l=new ot,c=new ot,f=new Qt,h=new dM({depthPacking:TE}),p=new pM,m={},g=n.maxTextureSize,_={[Ea]:Mn,[Mn]:Ea,[ci]:ci},x=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:FA,fragmentShader:HA}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const b=new Ta;b.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new xi(b,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=A_;let v=this.type;this.render=function(G,I,W){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||G.length===0)return;const N=a.getRenderTarget(),C=a.getActiveCubeFace(),k=a.getActiveMipmapLevel(),ce=a.state;ce.setBlending(Jn),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const oe=v!==ga&&this.type===ga,xe=v===ga&&this.type!==ga;for(let pe=0,z=G.length;pe<z;pe++){const K=G[pe],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const Me=Y.getFrameExtents();if(l.multiply(Me),c.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/Me.x),l.x=c.x*Me.x,Y.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/Me.y),l.y=c.y*Me.y,Y.mapSize.y=c.y)),Y.map===null||oe===!0||xe===!0){const ee=this.type!==ga?{minFilter:Ci,magFilter:Ci}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Gn(l.x,l.y,ee),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}a.setRenderTarget(Y.map),a.clear();const P=Y.getViewportCount();for(let ee=0;ee<P;ee++){const ye=Y.getViewport(ee);f.set(c.x*ye.x,c.y*ye.y,c.x*ye.z,c.y*ye.w),ce.viewport(f),Y.updateMatrices(K,ee),s=Y.getFrustum(),U(I,W,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===ga&&L(Y,W),Y.needsUpdate=!1}v=this.type,y.needsUpdate=!1,a.setRenderTarget(N,C,k)};function L(G,I){const W=e.update(w);x.defines.VSM_SAMPLES!==G.blurSamples&&(x.defines.VSM_SAMPLES=G.blurSamples,S.defines.VSM_SAMPLES=G.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Gn(l.x,l.y)),x.uniforms.shadow_pass.value=G.map.texture,x.uniforms.resolution.value=G.mapSize,x.uniforms.radius.value=G.radius,a.setRenderTarget(G.mapPass),a.clear(),a.renderBufferDirect(I,null,W,x,w,null),S.uniforms.shadow_pass.value=G.mapPass.texture,S.uniforms.resolution.value=G.mapSize,S.uniforms.radius.value=G.radius,a.setRenderTarget(G.map),a.clear(),a.renderBufferDirect(I,null,W,S,w,null)}function D(G,I,W,N){let C=null;const k=W.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(k!==void 0)C=k;else if(C=W.isPointLight===!0?p:h,a.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const ce=C.uuid,oe=I.uuid;let xe=m[ce];xe===void 0&&(xe={},m[ce]=xe);let pe=xe[oe];pe===void 0&&(pe=C.clone(),xe[oe]=pe,I.addEventListener("dispose",F)),C=pe}if(C.visible=I.visible,C.wireframe=I.wireframe,N===ga?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:_[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,W.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ce=a.properties.get(C);ce.light=W}return C}function U(G,I,W,N,C){if(G.visible===!1)return;if(G.layers.test(I.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&C===ga)&&(!G.frustumCulled||s.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,G.matrixWorld);const oe=e.update(G),xe=G.material;if(Array.isArray(xe)){const pe=oe.groups;for(let z=0,K=pe.length;z<K;z++){const Y=pe[z],Me=xe[Y.materialIndex];if(Me&&Me.visible){const P=D(G,Me,N,C);G.onBeforeShadow(a,G,I,W,oe,P,Y),a.renderBufferDirect(W,null,oe,P,G,Y),G.onAfterShadow(a,G,I,W,oe,P,Y)}}}else if(xe.visible){const pe=D(G,xe,N,C);G.onBeforeShadow(a,G,I,W,oe,pe,null),a.renderBufferDirect(W,null,oe,pe,G,null),G.onAfterShadow(a,G,I,W,oe,pe,null)}}const ce=G.children;for(let oe=0,xe=ce.length;oe<xe;oe++)U(ce[oe],I,W,N,C)}function F(G){G.target.removeEventListener("dispose",F);for(const W in m){const N=m[W],C=G.target.uuid;C in N&&(N[C].dispose(),delete N[C])}}}const VA={[gd]:vd,[_d]:Sd,[xd]:Ed,[Vs]:yd,[vd]:gd,[Sd]:_d,[Ed]:xd,[yd]:Vs};function kA(a,e){function n(){let j=!1;const Le=new Qt;let le=null;const ve=new Qt(0,0,0,0);return{setMask:function(ze){le!==ze&&!j&&(a.colorMask(ze,ze,ze,ze),le=ze)},setLocked:function(ze){j=ze},setClear:function(ze,Oe,at,Xt,rn){rn===!0&&(ze*=Xt,Oe*=Xt,at*=Xt),Le.set(ze,Oe,at,Xt),ve.equals(Le)===!1&&(a.clearColor(ze,Oe,at,Xt),ve.copy(Le))},reset:function(){j=!1,le=null,ve.set(-1,0,0,0)}}}function s(){let j=!1,Le=!1,le=null,ve=null,ze=null;return{setReversed:function(Oe){if(Le!==Oe){const at=e.get("EXT_clip_control");Oe?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT),Le=Oe;const Xt=ze;ze=null,this.setClear(Xt)}},getReversed:function(){return Le},setTest:function(Oe){Oe?we(a.DEPTH_TEST):Ne(a.DEPTH_TEST)},setMask:function(Oe){le!==Oe&&!j&&(a.depthMask(Oe),le=Oe)},setFunc:function(Oe){if(Le&&(Oe=VA[Oe]),ve!==Oe){switch(Oe){case gd:a.depthFunc(a.NEVER);break;case vd:a.depthFunc(a.ALWAYS);break;case _d:a.depthFunc(a.LESS);break;case Vs:a.depthFunc(a.LEQUAL);break;case xd:a.depthFunc(a.EQUAL);break;case yd:a.depthFunc(a.GEQUAL);break;case Sd:a.depthFunc(a.GREATER);break;case Ed:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}ve=Oe}},setLocked:function(Oe){j=Oe},setClear:function(Oe){ze!==Oe&&(Le&&(Oe=1-Oe),a.clearDepth(Oe),ze=Oe)},reset:function(){j=!1,le=null,ve=null,ze=null,Le=!1}}}function l(){let j=!1,Le=null,le=null,ve=null,ze=null,Oe=null,at=null,Xt=null,rn=null;return{setTest:function(bt){j||(bt?we(a.STENCIL_TEST):Ne(a.STENCIL_TEST))},setMask:function(bt){Le!==bt&&!j&&(a.stencilMask(bt),Le=bt)},setFunc:function(bt,$n,vn){(le!==bt||ve!==$n||ze!==vn)&&(a.stencilFunc(bt,$n,vn),le=bt,ve=$n,ze=vn)},setOp:function(bt,$n,vn){(Oe!==bt||at!==$n||Xt!==vn)&&(a.stencilOp(bt,$n,vn),Oe=bt,at=$n,Xt=vn)},setLocked:function(bt){j=bt},setClear:function(bt){rn!==bt&&(a.clearStencil(bt),rn=bt)},reset:function(){j=!1,Le=null,le=null,ve=null,ze=null,Oe=null,at=null,Xt=null,rn=null}}}const c=new n,f=new s,h=new l,p=new WeakMap,m=new WeakMap;let g={},_={},x=new WeakMap,S=[],b=null,w=!1,y=null,v=null,L=null,D=null,U=null,F=null,G=null,I=new Lt(0,0,0),W=0,N=!1,C=null,k=null,ce=null,oe=null,xe=null;const pe=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,K=0;const Y=a.getParameter(a.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=K>=2);let Me=null,P={};const ee=a.getParameter(a.SCISSOR_BOX),ye=a.getParameter(a.VIEWPORT),Ee=new Qt().fromArray(ee),J=new Qt().fromArray(ye);function me(j,Le,le,ve){const ze=new Uint8Array(4),Oe=a.createTexture();a.bindTexture(j,Oe),a.texParameteri(j,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(j,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let at=0;at<le;at++)j===a.TEXTURE_3D||j===a.TEXTURE_2D_ARRAY?a.texImage3D(Le,0,a.RGBA,1,1,ve,0,a.RGBA,a.UNSIGNED_BYTE,ze):a.texImage2D(Le+at,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,ze);return Oe}const Se={};Se[a.TEXTURE_2D]=me(a.TEXTURE_2D,a.TEXTURE_2D,1),Se[a.TEXTURE_CUBE_MAP]=me(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[a.TEXTURE_2D_ARRAY]=me(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Se[a.TEXTURE_3D]=me(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),we(a.DEPTH_TEST),f.setFunc(Vs),_t(!1),it(u0),we(a.CULL_FACE),H(Jn);function we(j){g[j]!==!0&&(a.enable(j),g[j]=!0)}function Ne(j){g[j]!==!1&&(a.disable(j),g[j]=!1)}function lt(j,Le){return _[j]!==Le?(a.bindFramebuffer(j,Le),_[j]=Le,j===a.DRAW_FRAMEBUFFER&&(_[a.FRAMEBUFFER]=Le),j===a.FRAMEBUFFER&&(_[a.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ke(j,Le){let le=S,ve=!1;if(j){le=x.get(Le),le===void 0&&(le=[],x.set(Le,le));const ze=j.textures;if(le.length!==ze.length||le[0]!==a.COLOR_ATTACHMENT0){for(let Oe=0,at=ze.length;Oe<at;Oe++)le[Oe]=a.COLOR_ATTACHMENT0+Oe;le.length=ze.length,ve=!0}}else le[0]!==a.BACK&&(le[0]=a.BACK,ve=!0);ve&&a.drawBuffers(le)}function jt(j){return b!==j?(a.useProgram(j),b=j,!0):!1}const Gt={[Hr]:a.FUNC_ADD,[J1]:a.FUNC_SUBTRACT,[$1]:a.FUNC_REVERSE_SUBTRACT};Gt[eE]=a.MIN,Gt[tE]=a.MAX;const ht={[nE]:a.ZERO,[iE]:a.ONE,[aE]:a.SRC_COLOR,[pd]:a.SRC_ALPHA,[uE]:a.SRC_ALPHA_SATURATE,[lE]:a.DST_COLOR,[sE]:a.DST_ALPHA,[rE]:a.ONE_MINUS_SRC_COLOR,[md]:a.ONE_MINUS_SRC_ALPHA,[cE]:a.ONE_MINUS_DST_COLOR,[oE]:a.ONE_MINUS_DST_ALPHA,[fE]:a.CONSTANT_COLOR,[hE]:a.ONE_MINUS_CONSTANT_COLOR,[dE]:a.CONSTANT_ALPHA,[pE]:a.ONE_MINUS_CONSTANT_ALPHA};function H(j,Le,le,ve,ze,Oe,at,Xt,rn,bt){if(j===Jn){w===!0&&(Ne(a.BLEND),w=!1);return}if(w===!1&&(we(a.BLEND),w=!0),j!==Q1){if(j!==y||bt!==N){if((v!==Hr||U!==Hr)&&(a.blendEquation(a.FUNC_ADD),v=Hr,U=Hr),bt)switch(j){case Hs:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case f0:a.blendFunc(a.ONE,a.ONE);break;case h0:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case d0:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case Hs:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case f0:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case h0:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case d0:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}L=null,D=null,F=null,G=null,I.set(0,0,0),W=0,y=j,N=bt}return}ze=ze||Le,Oe=Oe||le,at=at||ve,(Le!==v||ze!==U)&&(a.blendEquationSeparate(Gt[Le],Gt[ze]),v=Le,U=ze),(le!==L||ve!==D||Oe!==F||at!==G)&&(a.blendFuncSeparate(ht[le],ht[ve],ht[Oe],ht[at]),L=le,D=ve,F=Oe,G=at),(Xt.equals(I)===!1||rn!==W)&&(a.blendColor(Xt.r,Xt.g,Xt.b,rn),I.copy(Xt),W=rn),y=j,N=!1}function kn(j,Le){j.side===ci?Ne(a.CULL_FACE):we(a.CULL_FACE);let le=j.side===Mn;Le&&(le=!le),_t(le),j.blending===Hs&&j.transparent===!1?H(Jn):H(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),f.setFunc(j.depthFunc),f.setTest(j.depthTest),f.setMask(j.depthWrite),c.setMask(j.colorWrite);const ve=j.stencilWrite;h.setTest(ve),ve&&(h.setMask(j.stencilWriteMask),h.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),h.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Ot(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?we(a.SAMPLE_ALPHA_TO_COVERAGE):Ne(a.SAMPLE_ALPHA_TO_COVERAGE)}function _t(j){C!==j&&(j?a.frontFace(a.CW):a.frontFace(a.CCW),C=j)}function it(j){j!==Y1?(we(a.CULL_FACE),j!==k&&(j===u0?a.cullFace(a.BACK):j===Z1?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Ne(a.CULL_FACE),k=j}function Xe(j){j!==ce&&(z&&a.lineWidth(j),ce=j)}function Ot(j,Le,le){j?(we(a.POLYGON_OFFSET_FILL),(oe!==Le||xe!==le)&&(a.polygonOffset(Le,le),oe=Le,xe=le)):Ne(a.POLYGON_OFFSET_FILL)}function Ve(j){j?we(a.SCISSOR_TEST):Ne(a.SCISSOR_TEST)}function O(j){j===void 0&&(j=a.TEXTURE0+pe-1),Me!==j&&(a.activeTexture(j),Me=j)}function A(j,Le,le){le===void 0&&(Me===null?le=a.TEXTURE0+pe-1:le=Me);let ve=P[le];ve===void 0&&(ve={type:void 0,texture:void 0},P[le]=ve),(ve.type!==j||ve.texture!==Le)&&(Me!==le&&(a.activeTexture(le),Me=le),a.bindTexture(j,Le||Se[j]),ve.type=j,ve.texture=Le)}function te(){const j=P[Me];j!==void 0&&j.type!==void 0&&(a.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function ge(){try{a.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function be(){try{a.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function fe(){try{a.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Pe(){try{a.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Re(){try{a.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ge(){try{a.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function $e(){try{a.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ae(){try{a.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Fe(){try{a.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ye(){try{a.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Qe(j){Ee.equals(j)===!1&&(a.scissor(j.x,j.y,j.z,j.w),Ee.copy(j))}function Be(j){J.equals(j)===!1&&(a.viewport(j.x,j.y,j.z,j.w),J.copy(j))}function ut(j,Le){let le=m.get(Le);le===void 0&&(le=new WeakMap,m.set(Le,le));let ve=le.get(j);ve===void 0&&(ve=a.getUniformBlockIndex(Le,j.name),le.set(j,ve))}function nt(j,Le){const ve=m.get(Le).get(j);p.get(Le)!==ve&&(a.uniformBlockBinding(Le,ve,j.__bindingPointIndex),p.set(Le,ve))}function Pt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),f.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),g={},Me=null,P={},_={},x=new WeakMap,S=[],b=null,w=!1,y=null,v=null,L=null,D=null,U=null,F=null,G=null,I=new Lt(0,0,0),W=0,N=!1,C=null,k=null,ce=null,oe=null,xe=null,Ee.set(0,0,a.canvas.width,a.canvas.height),J.set(0,0,a.canvas.width,a.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:we,disable:Ne,bindFramebuffer:lt,drawBuffers:Ke,useProgram:jt,setBlending:H,setMaterial:kn,setFlipSided:_t,setCullFace:it,setLineWidth:Xe,setPolygonOffset:Ot,setScissorTest:Ve,activeTexture:O,bindTexture:A,unbindTexture:te,compressedTexImage2D:ge,compressedTexImage3D:be,texImage2D:Fe,texImage3D:Ye,updateUBOMapping:ut,uniformBlockBinding:nt,texStorage2D:$e,texStorage3D:Ae,texSubImage2D:fe,texSubImage3D:Pe,compressedTexSubImage2D:Re,compressedTexSubImage3D:Ge,scissor:Qe,viewport:Be,reset:Pt}}function jA(a,e,n,s,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ot,g=new WeakMap;let _;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(O,A){return S?new OffscreenCanvas(O,A):du("canvas")}function w(O,A,te){let ge=1;const be=Ve(O);if((be.width>te||be.height>te)&&(ge=te/Math.max(be.width,be.height)),ge<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const fe=Math.floor(ge*be.width),Pe=Math.floor(ge*be.height);_===void 0&&(_=b(fe,Pe));const Re=A?b(fe,Pe):_;return Re.width=fe,Re.height=Pe,Re.getContext("2d").drawImage(O,0,0,fe,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+fe+"x"+Pe+")."),Re}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),O;return O}function y(O){return O.generateMipmaps}function v(O){a.generateMipmap(O)}function L(O){return O.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?a.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function D(O,A,te,ge,be=!1){if(O!==null){if(a[O]!==void 0)return a[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let fe=A;if(A===a.RED&&(te===a.FLOAT&&(fe=a.R32F),te===a.HALF_FLOAT&&(fe=a.R16F),te===a.UNSIGNED_BYTE&&(fe=a.R8)),A===a.RED_INTEGER&&(te===a.UNSIGNED_BYTE&&(fe=a.R8UI),te===a.UNSIGNED_SHORT&&(fe=a.R16UI),te===a.UNSIGNED_INT&&(fe=a.R32UI),te===a.BYTE&&(fe=a.R8I),te===a.SHORT&&(fe=a.R16I),te===a.INT&&(fe=a.R32I)),A===a.RG&&(te===a.FLOAT&&(fe=a.RG32F),te===a.HALF_FLOAT&&(fe=a.RG16F),te===a.UNSIGNED_BYTE&&(fe=a.RG8)),A===a.RG_INTEGER&&(te===a.UNSIGNED_BYTE&&(fe=a.RG8UI),te===a.UNSIGNED_SHORT&&(fe=a.RG16UI),te===a.UNSIGNED_INT&&(fe=a.RG32UI),te===a.BYTE&&(fe=a.RG8I),te===a.SHORT&&(fe=a.RG16I),te===a.INT&&(fe=a.RG32I)),A===a.RGB_INTEGER&&(te===a.UNSIGNED_BYTE&&(fe=a.RGB8UI),te===a.UNSIGNED_SHORT&&(fe=a.RGB16UI),te===a.UNSIGNED_INT&&(fe=a.RGB32UI),te===a.BYTE&&(fe=a.RGB8I),te===a.SHORT&&(fe=a.RGB16I),te===a.INT&&(fe=a.RGB32I)),A===a.RGBA_INTEGER&&(te===a.UNSIGNED_BYTE&&(fe=a.RGBA8UI),te===a.UNSIGNED_SHORT&&(fe=a.RGBA16UI),te===a.UNSIGNED_INT&&(fe=a.RGBA32UI),te===a.BYTE&&(fe=a.RGBA8I),te===a.SHORT&&(fe=a.RGBA16I),te===a.INT&&(fe=a.RGBA32I)),A===a.RGB&&te===a.UNSIGNED_INT_5_9_9_9_REV&&(fe=a.RGB9_E5),A===a.RGBA){const Pe=be?fu:wt.getTransfer(ge);te===a.FLOAT&&(fe=a.RGBA32F),te===a.HALF_FLOAT&&(fe=a.RGBA16F),te===a.UNSIGNED_BYTE&&(fe=Pe===Ft?a.SRGB8_ALPHA8:a.RGBA8),te===a.UNSIGNED_SHORT_4_4_4_4&&(fe=a.RGBA4),te===a.UNSIGNED_SHORT_5_5_5_1&&(fe=a.RGB5_A1)}return(fe===a.R16F||fe===a.R32F||fe===a.RG16F||fe===a.RG32F||fe===a.RGBA16F||fe===a.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function U(O,A){let te;return O?A===null||A===cr||A===Xs?te=a.DEPTH24_STENCIL8:A===va?te=a.DEPTH32F_STENCIL8:A===sl&&(te=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===cr||A===Xs?te=a.DEPTH_COMPONENT24:A===va?te=a.DEPTH_COMPONENT32F:A===sl&&(te=a.DEPTH_COMPONENT16),te}function F(O,A){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==Ci&&O.minFilter!==Qn?Math.log2(Math.max(A.width,A.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?A.mipmaps.length:1}function G(O){const A=O.target;A.removeEventListener("dispose",G),W(A),A.isVideoTexture&&g.delete(A)}function I(O){const A=O.target;A.removeEventListener("dispose",I),C(A)}function W(O){const A=s.get(O);if(A.__webglInit===void 0)return;const te=O.source,ge=x.get(te);if(ge){const be=ge[A.__cacheKey];be.usedTimes--,be.usedTimes===0&&N(O),Object.keys(ge).length===0&&x.delete(te)}s.remove(O)}function N(O){const A=s.get(O);a.deleteTexture(A.__webglTexture);const te=O.source,ge=x.get(te);delete ge[A.__cacheKey],f.memory.textures--}function C(O){const A=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(A.__webglFramebuffer[ge]))for(let be=0;be<A.__webglFramebuffer[ge].length;be++)a.deleteFramebuffer(A.__webglFramebuffer[ge][be]);else a.deleteFramebuffer(A.__webglFramebuffer[ge]);A.__webglDepthbuffer&&a.deleteRenderbuffer(A.__webglDepthbuffer[ge])}else{if(Array.isArray(A.__webglFramebuffer))for(let ge=0;ge<A.__webglFramebuffer.length;ge++)a.deleteFramebuffer(A.__webglFramebuffer[ge]);else a.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&a.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&a.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ge=0;ge<A.__webglColorRenderbuffer.length;ge++)A.__webglColorRenderbuffer[ge]&&a.deleteRenderbuffer(A.__webglColorRenderbuffer[ge]);A.__webglDepthRenderbuffer&&a.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const te=O.textures;for(let ge=0,be=te.length;ge<be;ge++){const fe=s.get(te[ge]);fe.__webglTexture&&(a.deleteTexture(fe.__webglTexture),f.memory.textures--),s.remove(te[ge])}s.remove(O)}let k=0;function ce(){k=0}function oe(){const O=k;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),k+=1,O}function xe(O){const A=[];return A.push(O.wrapS),A.push(O.wrapT),A.push(O.wrapR||0),A.push(O.magFilter),A.push(O.minFilter),A.push(O.anisotropy),A.push(O.internalFormat),A.push(O.format),A.push(O.type),A.push(O.generateMipmaps),A.push(O.premultiplyAlpha),A.push(O.flipY),A.push(O.unpackAlignment),A.push(O.colorSpace),A.join()}function pe(O,A){const te=s.get(O);if(O.isVideoTexture&&Xe(O),O.isRenderTargetTexture===!1&&O.version>0&&te.__version!==O.version){const ge=O.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(te,O,A);return}}n.bindTexture(a.TEXTURE_2D,te.__webglTexture,a.TEXTURE0+A)}function z(O,A){const te=s.get(O);if(O.version>0&&te.__version!==O.version){J(te,O,A);return}n.bindTexture(a.TEXTURE_2D_ARRAY,te.__webglTexture,a.TEXTURE0+A)}function K(O,A){const te=s.get(O);if(O.version>0&&te.__version!==O.version){J(te,O,A);return}n.bindTexture(a.TEXTURE_3D,te.__webglTexture,a.TEXTURE0+A)}function Y(O,A){const te=s.get(O);if(O.version>0&&te.__version!==O.version){me(te,O,A);return}n.bindTexture(a.TEXTURE_CUBE_MAP,te.__webglTexture,a.TEXTURE0+A)}const Me={[Td]:a.REPEAT,[Vr]:a.CLAMP_TO_EDGE,[Ad]:a.MIRRORED_REPEAT},P={[Ci]:a.NEAREST,[bE]:a.NEAREST_MIPMAP_NEAREST,[Uc]:a.NEAREST_MIPMAP_LINEAR,[Qn]:a.LINEAR,[Lh]:a.LINEAR_MIPMAP_NEAREST,[kr]:a.LINEAR_MIPMAP_LINEAR},ee={[RE]:a.NEVER,[OE]:a.ALWAYS,[CE]:a.LESS,[z_]:a.LEQUAL,[DE]:a.EQUAL,[LE]:a.GEQUAL,[UE]:a.GREATER,[NE]:a.NOTEQUAL};function ye(O,A){if(A.type===va&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Qn||A.magFilter===Lh||A.magFilter===Uc||A.magFilter===kr||A.minFilter===Qn||A.minFilter===Lh||A.minFilter===Uc||A.minFilter===kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(O,a.TEXTURE_WRAP_S,Me[A.wrapS]),a.texParameteri(O,a.TEXTURE_WRAP_T,Me[A.wrapT]),(O===a.TEXTURE_3D||O===a.TEXTURE_2D_ARRAY)&&a.texParameteri(O,a.TEXTURE_WRAP_R,Me[A.wrapR]),a.texParameteri(O,a.TEXTURE_MAG_FILTER,P[A.magFilter]),a.texParameteri(O,a.TEXTURE_MIN_FILTER,P[A.minFilter]),A.compareFunction&&(a.texParameteri(O,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(O,a.TEXTURE_COMPARE_FUNC,ee[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ci||A.minFilter!==Uc&&A.minFilter!==kr||A.type===va&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||s.get(A).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");a.texParameterf(O,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy}}}function Ee(O,A){let te=!1;O.__webglInit===void 0&&(O.__webglInit=!0,A.addEventListener("dispose",G));const ge=A.source;let be=x.get(ge);be===void 0&&(be={},x.set(ge,be));const fe=xe(A);if(fe!==O.__cacheKey){be[fe]===void 0&&(be[fe]={texture:a.createTexture(),usedTimes:0},f.memory.textures++,te=!0),be[fe].usedTimes++;const Pe=be[O.__cacheKey];Pe!==void 0&&(be[O.__cacheKey].usedTimes--,Pe.usedTimes===0&&N(A)),O.__cacheKey=fe,O.__webglTexture=be[fe].texture}return te}function J(O,A,te){let ge=a.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ge=a.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ge=a.TEXTURE_3D);const be=Ee(O,A),fe=A.source;n.bindTexture(ge,O.__webglTexture,a.TEXTURE0+te);const Pe=s.get(fe);if(fe.version!==Pe.__version||be===!0){n.activeTexture(a.TEXTURE0+te);const Re=wt.getPrimaries(wt.workingColorSpace),Ge=A.colorSpace===Ii?null:wt.getPrimaries(A.colorSpace),$e=A.colorSpace===Ii||Re===Ge?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,A.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,A.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let Ae=w(A.image,!1,l.maxTextureSize);Ae=Ot(A,Ae);const Fe=c.convert(A.format,A.colorSpace),Ye=c.convert(A.type);let Qe=D(A.internalFormat,Fe,Ye,A.colorSpace,A.isVideoTexture);ye(ge,A);let Be;const ut=A.mipmaps,nt=A.isVideoTexture!==!0,Pt=Pe.__version===void 0||be===!0,j=fe.dataReady,Le=F(A,Ae);if(A.isDepthTexture)Qe=U(A.format===Ws,A.type),Pt&&(nt?n.texStorage2D(a.TEXTURE_2D,1,Qe,Ae.width,Ae.height):n.texImage2D(a.TEXTURE_2D,0,Qe,Ae.width,Ae.height,0,Fe,Ye,null));else if(A.isDataTexture)if(ut.length>0){nt&&Pt&&n.texStorage2D(a.TEXTURE_2D,Le,Qe,ut[0].width,ut[0].height);for(let le=0,ve=ut.length;le<ve;le++)Be=ut[le],nt?j&&n.texSubImage2D(a.TEXTURE_2D,le,0,0,Be.width,Be.height,Fe,Ye,Be.data):n.texImage2D(a.TEXTURE_2D,le,Qe,Be.width,Be.height,0,Fe,Ye,Be.data);A.generateMipmaps=!1}else nt?(Pt&&n.texStorage2D(a.TEXTURE_2D,Le,Qe,Ae.width,Ae.height),j&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,Ae.width,Ae.height,Fe,Ye,Ae.data)):n.texImage2D(a.TEXTURE_2D,0,Qe,Ae.width,Ae.height,0,Fe,Ye,Ae.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){nt&&Pt&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Le,Qe,ut[0].width,ut[0].height,Ae.depth);for(let le=0,ve=ut.length;le<ve;le++)if(Be=ut[le],A.format!==Ri)if(Fe!==null)if(nt){if(j)if(A.layerUpdates.size>0){const ze=O0(Be.width,Be.height,A.format,A.type);for(const Oe of A.layerUpdates){const at=Be.data.subarray(Oe*ze/Be.data.BYTES_PER_ELEMENT,(Oe+1)*ze/Be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,le,0,0,Oe,Be.width,Be.height,1,Fe,at)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,le,0,0,0,Be.width,Be.height,Ae.depth,Fe,Be.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,le,Qe,Be.width,Be.height,Ae.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?j&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,le,0,0,0,Be.width,Be.height,Ae.depth,Fe,Ye,Be.data):n.texImage3D(a.TEXTURE_2D_ARRAY,le,Qe,Be.width,Be.height,Ae.depth,0,Fe,Ye,Be.data)}else{nt&&Pt&&n.texStorage2D(a.TEXTURE_2D,Le,Qe,ut[0].width,ut[0].height);for(let le=0,ve=ut.length;le<ve;le++)Be=ut[le],A.format!==Ri?Fe!==null?nt?j&&n.compressedTexSubImage2D(a.TEXTURE_2D,le,0,0,Be.width,Be.height,Fe,Be.data):n.compressedTexImage2D(a.TEXTURE_2D,le,Qe,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?j&&n.texSubImage2D(a.TEXTURE_2D,le,0,0,Be.width,Be.height,Fe,Ye,Be.data):n.texImage2D(a.TEXTURE_2D,le,Qe,Be.width,Be.height,0,Fe,Ye,Be.data)}else if(A.isDataArrayTexture)if(nt){if(Pt&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Le,Qe,Ae.width,Ae.height,Ae.depth),j)if(A.layerUpdates.size>0){const le=O0(Ae.width,Ae.height,A.format,A.type);for(const ve of A.layerUpdates){const ze=Ae.data.subarray(ve*le/Ae.data.BYTES_PER_ELEMENT,(ve+1)*le/Ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,ve,Ae.width,Ae.height,1,Fe,Ye,ze)}A.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Fe,Ye,Ae.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,Qe,Ae.width,Ae.height,Ae.depth,0,Fe,Ye,Ae.data);else if(A.isData3DTexture)nt?(Pt&&n.texStorage3D(a.TEXTURE_3D,Le,Qe,Ae.width,Ae.height,Ae.depth),j&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Fe,Ye,Ae.data)):n.texImage3D(a.TEXTURE_3D,0,Qe,Ae.width,Ae.height,Ae.depth,0,Fe,Ye,Ae.data);else if(A.isFramebufferTexture){if(Pt)if(nt)n.texStorage2D(a.TEXTURE_2D,Le,Qe,Ae.width,Ae.height);else{let le=Ae.width,ve=Ae.height;for(let ze=0;ze<Le;ze++)n.texImage2D(a.TEXTURE_2D,ze,Qe,le,ve,0,Fe,Ye,null),le>>=1,ve>>=1}}else if(ut.length>0){if(nt&&Pt){const le=Ve(ut[0]);n.texStorage2D(a.TEXTURE_2D,Le,Qe,le.width,le.height)}for(let le=0,ve=ut.length;le<ve;le++)Be=ut[le],nt?j&&n.texSubImage2D(a.TEXTURE_2D,le,0,0,Fe,Ye,Be):n.texImage2D(a.TEXTURE_2D,le,Qe,Fe,Ye,Be);A.generateMipmaps=!1}else if(nt){if(Pt){const le=Ve(Ae);n.texStorage2D(a.TEXTURE_2D,Le,Qe,le.width,le.height)}j&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,Fe,Ye,Ae)}else n.texImage2D(a.TEXTURE_2D,0,Qe,Fe,Ye,Ae);y(A)&&v(ge),Pe.__version=fe.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function me(O,A,te){if(A.image.length!==6)return;const ge=Ee(O,A),be=A.source;n.bindTexture(a.TEXTURE_CUBE_MAP,O.__webglTexture,a.TEXTURE0+te);const fe=s.get(be);if(be.version!==fe.__version||ge===!0){n.activeTexture(a.TEXTURE0+te);const Pe=wt.getPrimaries(wt.workingColorSpace),Re=A.colorSpace===Ii?null:wt.getPrimaries(A.colorSpace),Ge=A.colorSpace===Ii||Pe===Re?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,A.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,A.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);const $e=A.isCompressedTexture||A.image[0].isCompressedTexture,Ae=A.image[0]&&A.image[0].isDataTexture,Fe=[];for(let ve=0;ve<6;ve++)!$e&&!Ae?Fe[ve]=w(A.image[ve],!0,l.maxCubemapSize):Fe[ve]=Ae?A.image[ve].image:A.image[ve],Fe[ve]=Ot(A,Fe[ve]);const Ye=Fe[0],Qe=c.convert(A.format,A.colorSpace),Be=c.convert(A.type),ut=D(A.internalFormat,Qe,Be,A.colorSpace),nt=A.isVideoTexture!==!0,Pt=fe.__version===void 0||ge===!0,j=be.dataReady;let Le=F(A,Ye);ye(a.TEXTURE_CUBE_MAP,A);let le;if($e){nt&&Pt&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Le,ut,Ye.width,Ye.height);for(let ve=0;ve<6;ve++){le=Fe[ve].mipmaps;for(let ze=0;ze<le.length;ze++){const Oe=le[ze];A.format!==Ri?Qe!==null?nt?j&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ze,0,0,Oe.width,Oe.height,Qe,Oe.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ze,ut,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?j&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ze,0,0,Oe.width,Oe.height,Qe,Be,Oe.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ze,ut,Oe.width,Oe.height,0,Qe,Be,Oe.data)}}}else{if(le=A.mipmaps,nt&&Pt){le.length>0&&Le++;const ve=Ve(Fe[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,Le,ut,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Ae){nt?j&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Fe[ve].width,Fe[ve].height,Qe,Be,Fe[ve].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ut,Fe[ve].width,Fe[ve].height,0,Qe,Be,Fe[ve].data);for(let ze=0;ze<le.length;ze++){const at=le[ze].image[ve].image;nt?j&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ze+1,0,0,at.width,at.height,Qe,Be,at.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ze+1,ut,at.width,at.height,0,Qe,Be,at.data)}}else{nt?j&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Qe,Be,Fe[ve]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ut,Qe,Be,Fe[ve]);for(let ze=0;ze<le.length;ze++){const Oe=le[ze];nt?j&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ze+1,0,0,Qe,Be,Oe.image[ve]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ze+1,ut,Qe,Be,Oe.image[ve])}}}y(A)&&v(a.TEXTURE_CUBE_MAP),fe.__version=be.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function Se(O,A,te,ge,be,fe){const Pe=c.convert(te.format,te.colorSpace),Re=c.convert(te.type),Ge=D(te.internalFormat,Pe,Re,te.colorSpace),$e=s.get(A),Ae=s.get(te);if(Ae.__renderTarget=A,!$e.__hasExternalTextures){const Fe=Math.max(1,A.width>>fe),Ye=Math.max(1,A.height>>fe);be===a.TEXTURE_3D||be===a.TEXTURE_2D_ARRAY?n.texImage3D(be,fe,Ge,Fe,Ye,A.depth,0,Pe,Re,null):n.texImage2D(be,fe,Ge,Fe,Ye,0,Pe,Re,null)}n.bindFramebuffer(a.FRAMEBUFFER,O),it(A)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ge,be,Ae.__webglTexture,0,_t(A)):(be===a.TEXTURE_2D||be>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ge,be,Ae.__webglTexture,fe),n.bindFramebuffer(a.FRAMEBUFFER,null)}function we(O,A,te){if(a.bindRenderbuffer(a.RENDERBUFFER,O),A.depthBuffer){const ge=A.depthTexture,be=ge&&ge.isDepthTexture?ge.type:null,fe=U(A.stencilBuffer,be),Pe=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Re=_t(A);it(A)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Re,fe,A.width,A.height):te?a.renderbufferStorageMultisample(a.RENDERBUFFER,Re,fe,A.width,A.height):a.renderbufferStorage(a.RENDERBUFFER,fe,A.width,A.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Pe,a.RENDERBUFFER,O)}else{const ge=A.textures;for(let be=0;be<ge.length;be++){const fe=ge[be],Pe=c.convert(fe.format,fe.colorSpace),Re=c.convert(fe.type),Ge=D(fe.internalFormat,Pe,Re,fe.colorSpace),$e=_t(A);te&&it(A)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,$e,Ge,A.width,A.height):it(A)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,$e,Ge,A.width,A.height):a.renderbufferStorage(a.RENDERBUFFER,Ge,A.width,A.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Ne(O,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(a.FRAMEBUFFER,O),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=s.get(A.depthTexture);ge.__renderTarget=A,(!ge.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),pe(A.depthTexture,0);const be=ge.__webglTexture,fe=_t(A);if(A.depthTexture.format===ol)it(A)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,be,0,fe):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,be,0);else if(A.depthTexture.format===Ws)it(A)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,be,0,fe):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,be,0);else throw new Error("Unknown depthTexture format")}function lt(O){const A=s.get(O),te=O.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==O.depthTexture){const ge=O.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ge){const be=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ge.removeEventListener("dispose",be)};ge.addEventListener("dispose",be),A.__depthDisposeCallback=be}A.__boundDepthTexture=ge}if(O.depthTexture&&!A.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");const ge=O.texture.mipmaps;ge&&ge.length>0?Ne(A.__webglFramebuffer[0],O):Ne(A.__webglFramebuffer,O)}else if(te){A.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(n.bindFramebuffer(a.FRAMEBUFFER,A.__webglFramebuffer[ge]),A.__webglDepthbuffer[ge]===void 0)A.__webglDepthbuffer[ge]=a.createRenderbuffer(),we(A.__webglDepthbuffer[ge],O,!1);else{const be=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,fe=A.__webglDepthbuffer[ge];a.bindRenderbuffer(a.RENDERBUFFER,fe),a.framebufferRenderbuffer(a.FRAMEBUFFER,be,a.RENDERBUFFER,fe)}}else{const ge=O.texture.mipmaps;if(ge&&ge.length>0?n.bindFramebuffer(a.FRAMEBUFFER,A.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=a.createRenderbuffer(),we(A.__webglDepthbuffer,O,!1);else{const be=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,fe=A.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,fe),a.framebufferRenderbuffer(a.FRAMEBUFFER,be,a.RENDERBUFFER,fe)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function Ke(O,A,te){const ge=s.get(O);A!==void 0&&Se(ge.__webglFramebuffer,O,O.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),te!==void 0&&lt(O)}function jt(O){const A=O.texture,te=s.get(O),ge=s.get(A);O.addEventListener("dispose",I);const be=O.textures,fe=O.isWebGLCubeRenderTarget===!0,Pe=be.length>1;if(Pe||(ge.__webglTexture===void 0&&(ge.__webglTexture=a.createTexture()),ge.__version=A.version,f.memory.textures++),fe){te.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(A.mipmaps&&A.mipmaps.length>0){te.__webglFramebuffer[Re]=[];for(let Ge=0;Ge<A.mipmaps.length;Ge++)te.__webglFramebuffer[Re][Ge]=a.createFramebuffer()}else te.__webglFramebuffer[Re]=a.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){te.__webglFramebuffer=[];for(let Re=0;Re<A.mipmaps.length;Re++)te.__webglFramebuffer[Re]=a.createFramebuffer()}else te.__webglFramebuffer=a.createFramebuffer();if(Pe)for(let Re=0,Ge=be.length;Re<Ge;Re++){const $e=s.get(be[Re]);$e.__webglTexture===void 0&&($e.__webglTexture=a.createTexture(),f.memory.textures++)}if(O.samples>0&&it(O)===!1){te.__webglMultisampledFramebuffer=a.createFramebuffer(),te.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Re=0;Re<be.length;Re++){const Ge=be[Re];te.__webglColorRenderbuffer[Re]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,te.__webglColorRenderbuffer[Re]);const $e=c.convert(Ge.format,Ge.colorSpace),Ae=c.convert(Ge.type),Fe=D(Ge.internalFormat,$e,Ae,Ge.colorSpace,O.isXRRenderTarget===!0),Ye=_t(O);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ye,Fe,O.width,O.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Re,a.RENDERBUFFER,te.__webglColorRenderbuffer[Re])}a.bindRenderbuffer(a.RENDERBUFFER,null),O.depthBuffer&&(te.__webglDepthRenderbuffer=a.createRenderbuffer(),we(te.__webglDepthRenderbuffer,O,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(fe){n.bindTexture(a.TEXTURE_CUBE_MAP,ge.__webglTexture),ye(a.TEXTURE_CUBE_MAP,A);for(let Re=0;Re<6;Re++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ge=0;Ge<A.mipmaps.length;Ge++)Se(te.__webglFramebuffer[Re][Ge],O,A,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ge);else Se(te.__webglFramebuffer[Re],O,A,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);y(A)&&v(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pe){for(let Re=0,Ge=be.length;Re<Ge;Re++){const $e=be[Re],Ae=s.get($e);n.bindTexture(a.TEXTURE_2D,Ae.__webglTexture),ye(a.TEXTURE_2D,$e),Se(te.__webglFramebuffer,O,$e,a.COLOR_ATTACHMENT0+Re,a.TEXTURE_2D,0),y($e)&&v(a.TEXTURE_2D)}n.unbindTexture()}else{let Re=a.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Re=O.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Re,ge.__webglTexture),ye(Re,A),A.mipmaps&&A.mipmaps.length>0)for(let Ge=0;Ge<A.mipmaps.length;Ge++)Se(te.__webglFramebuffer[Ge],O,A,a.COLOR_ATTACHMENT0,Re,Ge);else Se(te.__webglFramebuffer,O,A,a.COLOR_ATTACHMENT0,Re,0);y(A)&&v(Re),n.unbindTexture()}O.depthBuffer&&lt(O)}function Gt(O){const A=O.textures;for(let te=0,ge=A.length;te<ge;te++){const be=A[te];if(y(be)){const fe=L(O),Pe=s.get(be).__webglTexture;n.bindTexture(fe,Pe),v(fe),n.unbindTexture()}}}const ht=[],H=[];function kn(O){if(O.samples>0){if(it(O)===!1){const A=O.textures,te=O.width,ge=O.height;let be=a.COLOR_BUFFER_BIT;const fe=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Pe=s.get(O),Re=A.length>1;if(Re)for(let $e=0;$e<A.length;$e++)n.bindFramebuffer(a.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+$e,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,Pe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+$e,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const Ge=O.texture.mipmaps;Ge&&Ge.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let $e=0;$e<A.length;$e++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(be|=a.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(be|=a.STENCIL_BUFFER_BIT)),Re){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Pe.__webglColorRenderbuffer[$e]);const Ae=s.get(A[$e]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ae,0)}a.blitFramebuffer(0,0,te,ge,0,0,te,ge,be,a.NEAREST),p===!0&&(ht.length=0,H.length=0,ht.push(a.COLOR_ATTACHMENT0+$e),O.depthBuffer&&O.resolveDepthBuffer===!1&&(ht.push(fe),H.push(fe),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,H)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,ht))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Re)for(let $e=0;$e<A.length;$e++){n.bindFramebuffer(a.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+$e,a.RENDERBUFFER,Pe.__webglColorRenderbuffer[$e]);const Ae=s.get(A[$e]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,Pe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+$e,a.TEXTURE_2D,Ae,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&p){const A=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[A])}}}function _t(O){return Math.min(l.maxSamples,O.samples)}function it(O){const A=s.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Xe(O){const A=f.render.frame;g.get(O)!==A&&(g.set(O,A),O.update())}function Ot(O,A){const te=O.colorSpace,ge=O.format,be=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||te!==ur&&te!==Ii&&(wt.getTransfer(te)===Ft?(ge!==Ri||be!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),A}function Ve(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(m.width=O.naturalWidth||O.width,m.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(m.width=O.displayWidth,m.height=O.displayHeight):(m.width=O.width,m.height=O.height),m}this.allocateTextureUnit=oe,this.resetTextureUnits=ce,this.setTexture2D=pe,this.setTexture2DArray=z,this.setTexture3D=K,this.setTextureCube=Y,this.rebindTextures=Ke,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=kn,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=it}function XA(a,e){function n(s,l=Ii){let c;const f=wt.getTransfer(l);if(s===In)return a.UNSIGNED_BYTE;if(s===cp)return a.UNSIGNED_SHORT_4_4_4_4;if(s===up)return a.UNSIGNED_SHORT_5_5_5_1;if(s===U_)return a.UNSIGNED_INT_5_9_9_9_REV;if(s===C_)return a.BYTE;if(s===D_)return a.SHORT;if(s===sl)return a.UNSIGNED_SHORT;if(s===lp)return a.INT;if(s===cr)return a.UNSIGNED_INT;if(s===va)return a.FLOAT;if(s===pl)return a.HALF_FLOAT;if(s===N_)return a.ALPHA;if(s===L_)return a.RGB;if(s===Ri)return a.RGBA;if(s===ol)return a.DEPTH_COMPONENT;if(s===Ws)return a.DEPTH_STENCIL;if(s===O_)return a.RED;if(s===fp)return a.RED_INTEGER;if(s===P_)return a.RG;if(s===hp)return a.RG_INTEGER;if(s===dp)return a.RGBA_INTEGER;if(s===nu||s===iu||s===au||s===ru)if(f===Ft)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===nu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ru)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===nu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===iu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===au)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ru)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===wd||s===Rd||s===Cd||s===Dd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===wd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Rd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Cd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Dd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ud||s===Nd||s===Ld)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Ud||s===Nd)return f===Ft?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Ld)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Od||s===Pd||s===Bd||s===zd||s===Id||s===Fd||s===Hd||s===Gd||s===Vd||s===kd||s===jd||s===Xd||s===Wd||s===qd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Od)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Pd)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Bd)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===zd)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Id)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Fd)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Hd)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Gd)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Vd)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===kd)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===jd)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Xd)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Wd)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===qd)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===su||s===Yd||s===Zd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===su)return f===Ft?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Yd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Zd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===B_||s===Kd||s===Qd||s===Jd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===su)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Kd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Qd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Jd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Xs?a.UNSIGNED_INT_24_8:a[s]!==void 0?a[s]:null}return{convert:n}}const WA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qA=`
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

}`;class YA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,s){if(this.texture===null){const l=new zn,c=e.properties.get(l);c.__webglTexture=n.texture,(n.depthNear!==s.depthNear||n.depthFar!==s.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,s=new Vn({vertexShader:WA,fragmentShader:qA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new xi(new yu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZA extends ba{constructor(e,n){super();const s=this;let l=null,c=1,f=null,h="local-floor",p=1,m=null,g=null,_=null,x=null,S=null,b=null;const w=new YA,y=n.getContextAttributes();let v=null,L=null;const D=[],U=[],F=new ot;let G=null;const I=new Kn;I.viewport=new Qt;const W=new Kn;W.viewport=new Qt;const N=[I,W],C=new gM;let k=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let me=D[J];return me===void 0&&(me=new td,D[J]=me),me.getTargetRaySpace()},this.getControllerGrip=function(J){let me=D[J];return me===void 0&&(me=new td,D[J]=me),me.getGripSpace()},this.getHand=function(J){let me=D[J];return me===void 0&&(me=new td,D[J]=me),me.getHandSpace()};function oe(J){const me=U.indexOf(J.inputSource);if(me===-1)return;const Se=D[me];Se!==void 0&&(Se.update(J.inputSource,J.frame,m||f),Se.dispatchEvent({type:J.type,data:J.inputSource}))}function xe(){l.removeEventListener("select",oe),l.removeEventListener("selectstart",oe),l.removeEventListener("selectend",oe),l.removeEventListener("squeeze",oe),l.removeEventListener("squeezestart",oe),l.removeEventListener("squeezeend",oe),l.removeEventListener("end",xe),l.removeEventListener("inputsourceschange",pe);for(let J=0;J<D.length;J++){const me=U[J];me!==null&&(U[J]=null,D[J].disconnect(me))}k=null,ce=null,w.reset(),e.setRenderTarget(v),S=null,x=null,_=null,l=null,L=null,Ee.stop(),s.isPresenting=!1,e.setPixelRatio(G),e.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){h=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(J){m=J},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return _},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(v=e.getRenderTarget(),l.addEventListener("select",oe),l.addEventListener("selectstart",oe),l.addEventListener("selectend",oe),l.addEventListener("squeeze",oe),l.addEventListener("squeezestart",oe),l.addEventListener("squeezeend",oe),l.addEventListener("end",xe),l.addEventListener("inputsourceschange",pe),y.xrCompatible!==!0&&await n.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,we=null,Ne=null;y.depth&&(Ne=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Se=y.stencil?Ws:ol,we=y.stencil?Xs:cr);const lt={colorFormat:n.RGBA8,depthFormat:Ne,scaleFactor:c};_=new XRWebGLBinding(l,n),x=_.createProjectionLayer(lt),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),L=new Gn(x.textureWidth,x.textureHeight,{format:Ri,type:In,depthTexture:new vp(x.textureWidth,x.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Se={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,n,Se),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new Gn(S.framebufferWidth,S.framebufferHeight,{format:Ri,type:In,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(h),Ee.setContext(l),Ee.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function pe(J){for(let me=0;me<J.removed.length;me++){const Se=J.removed[me],we=U.indexOf(Se);we>=0&&(U[we]=null,D[we].disconnect(Se))}for(let me=0;me<J.added.length;me++){const Se=J.added[me];let we=U.indexOf(Se);if(we===-1){for(let lt=0;lt<D.length;lt++)if(lt>=U.length){U.push(Se),we=lt;break}else if(U[lt]===null){U[lt]=Se,we=lt;break}if(we===-1)break}const Ne=D[we];Ne&&Ne.connect(Se)}}const z=new se,K=new se;function Y(J,me,Se){z.setFromMatrixPosition(me.matrixWorld),K.setFromMatrixPosition(Se.matrixWorld);const we=z.distanceTo(K),Ne=me.projectionMatrix.elements,lt=Se.projectionMatrix.elements,Ke=Ne[14]/(Ne[10]-1),jt=Ne[14]/(Ne[10]+1),Gt=(Ne[9]+1)/Ne[5],ht=(Ne[9]-1)/Ne[5],H=(Ne[8]-1)/Ne[0],kn=(lt[8]+1)/lt[0],_t=Ke*H,it=Ke*kn,Xe=we/(-H+kn),Ot=Xe*-H;if(me.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ot),J.translateZ(Xe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ne[10]===-1)J.projectionMatrix.copy(me.projectionMatrix),J.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Ve=Ke+Xe,O=jt+Xe,A=_t-Ot,te=it+(we-Ot),ge=Gt*jt/O*Ve,be=ht*jt/O*Ve;J.projectionMatrix.makePerspective(A,te,ge,be,Ve,O),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Me(J,me){me===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(me.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let me=J.near,Se=J.far;w.texture!==null&&(w.depthNear>0&&(me=w.depthNear),w.depthFar>0&&(Se=w.depthFar)),C.near=W.near=I.near=me,C.far=W.far=I.far=Se,(k!==C.near||ce!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),k=C.near,ce=C.far),I.layers.mask=J.layers.mask|2,W.layers.mask=J.layers.mask|4,C.layers.mask=I.layers.mask|W.layers.mask;const we=J.parent,Ne=C.cameras;Me(C,we);for(let lt=0;lt<Ne.length;lt++)Me(Ne[lt],we);Ne.length===2?Y(C,I,W):C.projectionMatrix.copy(I.projectionMatrix),P(J,C,we)};function P(J,me,Se){Se===null?J.matrix.copy(me.matrixWorld):(J.matrix.copy(Se.matrixWorld),J.matrix.invert(),J.matrix.multiply(me.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(me.projectionMatrix),J.projectionMatrixInverse.copy(me.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=$d*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&S===null))return p},this.setFoveation=function(J){p=J,x!==null&&(x.fixedFoveation=J),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=J)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(C)};let ee=null;function ye(J,me){if(g=me.getViewerPose(m||f),b=me,g!==null){const Se=g.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let we=!1;Se.length!==C.cameras.length&&(C.cameras.length=0,we=!0);for(let Ke=0;Ke<Se.length;Ke++){const jt=Se[Ke];let Gt=null;if(S!==null)Gt=S.getViewport(jt);else{const H=_.getViewSubImage(x,jt);Gt=H.viewport,Ke===0&&(e.setRenderTargetTextures(L,H.colorTexture,H.depthStencilTexture),e.setRenderTarget(L))}let ht=N[Ke];ht===void 0&&(ht=new Kn,ht.layers.enable(Ke),ht.viewport=new Qt,N[Ke]=ht),ht.matrix.fromArray(jt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(jt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),Ke===0&&(C.matrix.copy(ht.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),we===!0&&C.cameras.push(ht)}const Ne=l.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const Ke=_.getDepthInformation(Se[0]);Ke&&Ke.isValid&&Ke.texture&&w.init(e,Ke,l.renderState)}}for(let Se=0;Se<D.length;Se++){const we=U[Se],Ne=D[Se];we!==null&&Ne!==void 0&&Ne.update(we,me,m||f)}ee&&ee(J,me),me.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:me}),b=null}const Ee=new q_;Ee.setAnimationLoop(ye),this.setAnimationLoop=function(J){ee=J},this.dispose=function(){}}}const Br=new Ma,KA=new un;function QA(a,e){function n(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function s(y,v){v.color.getRGB(y.fogColor.value,j_(a)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,L,D,U){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(y,v):v.isMeshToonMaterial?(c(y,v),_(y,v)):v.isMeshPhongMaterial?(c(y,v),g(y,v)):v.isMeshStandardMaterial?(c(y,v),x(y,v),v.isMeshPhysicalMaterial&&S(y,v,U)):v.isMeshMatcapMaterial?(c(y,v),b(y,v)):v.isMeshDepthMaterial?c(y,v):v.isMeshDistanceMaterial?(c(y,v),w(y,v)):v.isMeshNormalMaterial?c(y,v):v.isLineBasicMaterial?(f(y,v),v.isLineDashedMaterial&&h(y,v)):v.isPointsMaterial?p(y,v,L,D):v.isSpriteMaterial?m(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,n(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Mn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,n(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Mn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,n(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,n(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const L=e.get(v),D=L.envMap,U=L.envMapRotation;D&&(y.envMap.value=D,Br.copy(U),Br.x*=-1,Br.y*=-1,Br.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),y.envMapRotation.value.setFromMatrix4(KA.makeRotationFromEuler(Br)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,y.aoMapTransform))}function f(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform))}function h(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function p(y,v,L,D){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*L,y.scale.value=D*.5,v.map&&(y.map.value=v.map,n(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function m(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function g(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function S(y,v,L){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Mn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,v){v.matcap&&(y.matcap.value=v.matcap)}function w(y,v){const L=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function JA(a,e,n,s){let l={},c={},f=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function p(L,D){const U=D.program;s.uniformBlockBinding(L,U)}function m(L,D){let U=l[L.id];U===void 0&&(b(L),U=g(L),l[L.id]=U,L.addEventListener("dispose",y));const F=D.program;s.updateUBOMapping(L,F);const G=e.render.frame;c[L.id]!==G&&(x(L),c[L.id]=G)}function g(L){const D=_();L.__bindingPointIndex=D;const U=a.createBuffer(),F=L.__size,G=L.usage;return a.bindBuffer(a.UNIFORM_BUFFER,U),a.bufferData(a.UNIFORM_BUFFER,F,G),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,D,U),U}function _(){for(let L=0;L<h;L++)if(f.indexOf(L)===-1)return f.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const D=l[L.id],U=L.uniforms,F=L.__cache;a.bindBuffer(a.UNIFORM_BUFFER,D);for(let G=0,I=U.length;G<I;G++){const W=Array.isArray(U[G])?U[G]:[U[G]];for(let N=0,C=W.length;N<C;N++){const k=W[N];if(S(k,G,N,F)===!0){const ce=k.__offset,oe=Array.isArray(k.value)?k.value:[k.value];let xe=0;for(let pe=0;pe<oe.length;pe++){const z=oe[pe],K=w(z);typeof z=="number"||typeof z=="boolean"?(k.__data[0]=z,a.bufferSubData(a.UNIFORM_BUFFER,ce+xe,k.__data)):z.isMatrix3?(k.__data[0]=z.elements[0],k.__data[1]=z.elements[1],k.__data[2]=z.elements[2],k.__data[3]=0,k.__data[4]=z.elements[3],k.__data[5]=z.elements[4],k.__data[6]=z.elements[5],k.__data[7]=0,k.__data[8]=z.elements[6],k.__data[9]=z.elements[7],k.__data[10]=z.elements[8],k.__data[11]=0):(z.toArray(k.__data,xe),xe+=K.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,ce,k.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function S(L,D,U,F){const G=L.value,I=D+"_"+U;if(F[I]===void 0)return typeof G=="number"||typeof G=="boolean"?F[I]=G:F[I]=G.clone(),!0;{const W=F[I];if(typeof G=="number"||typeof G=="boolean"){if(W!==G)return F[I]=G,!0}else if(W.equals(G)===!1)return W.copy(G),!0}return!1}function b(L){const D=L.uniforms;let U=0;const F=16;for(let I=0,W=D.length;I<W;I++){const N=Array.isArray(D[I])?D[I]:[D[I]];for(let C=0,k=N.length;C<k;C++){const ce=N[C],oe=Array.isArray(ce.value)?ce.value:[ce.value];for(let xe=0,pe=oe.length;xe<pe;xe++){const z=oe[xe],K=w(z),Y=U%F,Me=Y%K.boundary,P=Y+Me;U+=Me,P!==0&&F-P<K.storage&&(U+=F-P),ce.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=U,U+=K.storage}}}const G=U%F;return G>0&&(U+=F-G),L.__size=U,L.__cache={},this}function w(L){const D={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(D.boundary=4,D.storage=4):L.isVector2?(D.boundary=8,D.storage=8):L.isVector3||L.isColor?(D.boundary=16,D.storage=12):L.isVector4?(D.boundary=16,D.storage=16):L.isMatrix3?(D.boundary=48,D.storage=48):L.isMatrix4?(D.boundary=64,D.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),D}function y(L){const D=L.target;D.removeEventListener("dispose",y);const U=f.indexOf(D.__bindingPointIndex);f.splice(U,1),a.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function v(){for(const L in l)a.deleteBuffer(l[L]);f=[],l={},c={}}return{bind:p,update:m,dispose:v}}class J_{constructor(e={}){const{canvas:n=BE(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=f;const b=new Uint32Array(4),w=new Int32Array(4);let y=null,v=null;const L=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=lr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let F=!1;this._outputColorSpace=Ht;let G=0,I=0,W=null,N=-1,C=null;const k=new Qt,ce=new Qt;let oe=null;const xe=new Lt(0);let pe=0,z=n.width,K=n.height,Y=1,Me=null,P=null;const ee=new Qt(0,0,z,K),ye=new Qt(0,0,z,K);let Ee=!1;const J=new W_;let me=!1,Se=!1;const we=new un,Ne=new un,lt=new se,Ke=new Qt,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function ht(){return W===null?Y:1}let H=s;function kn(R,q){return n.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${dl}`),n.addEventListener("webglcontextlost",ve,!1),n.addEventListener("webglcontextrestored",ze,!1),n.addEventListener("webglcontextcreationerror",Oe,!1),H===null){const q="webgl2";if(H=kn(q,R),H===null)throw kn(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let _t,it,Xe,Ot,Ve,O,A,te,ge,be,fe,Pe,Re,Ge,$e,Ae,Fe,Ye,Qe,Be,ut,nt,Pt,j;function Le(){_t=new cT(H),_t.init(),nt=new XA(H,_t),it=new nT(H,_t,e,nt),Xe=new kA(H,_t),it.reverseDepthBuffer&&x&&Xe.buffers.depth.setReversed(!0),Ot=new hT(H),Ve=new DA,O=new jA(H,_t,Xe,Ve,it,nt,Ot),A=new aT(U),te=new lT(U),ge=new _M(H),Pt=new eT(H,ge),be=new uT(H,ge,Ot,Pt),fe=new pT(H,be,ge,Ot),Qe=new dT(H,it,O),Ae=new iT(Ve),Pe=new CA(U,A,te,_t,it,Pt,Ae),Re=new QA(U,Ve),Ge=new NA,$e=new IA(_t),Ye=new $2(U,A,te,Xe,fe,S,p),Fe=new GA(U,fe,it),j=new JA(H,Ot,it,Xe),Be=new tT(H,_t,Ot),ut=new fT(H,_t,Ot),Ot.programs=Pe.programs,U.capabilities=it,U.extensions=_t,U.properties=Ve,U.renderLists=Ge,U.shadowMap=Fe,U.state=Xe,U.info=Ot}Le();const le=new ZA(U,H);this.xr=le,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=_t.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=_t.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(z,K,!1))},this.getSize=function(R){return R.set(z,K)},this.setSize=function(R,q,ae=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,K=q,n.width=Math.floor(R*Y),n.height=Math.floor(q*Y),ae===!0&&(n.style.width=R+"px",n.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(z*Y,K*Y).floor()},this.setDrawingBufferSize=function(R,q,ae){z=R,K=q,Y=ae,n.width=Math.floor(R*ae),n.height=Math.floor(q*ae),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(k)},this.getViewport=function(R){return R.copy(ee)},this.setViewport=function(R,q,ae,re){R.isVector4?ee.set(R.x,R.y,R.z,R.w):ee.set(R,q,ae,re),Xe.viewport(k.copy(ee).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(ye)},this.setScissor=function(R,q,ae,re){R.isVector4?ye.set(R.x,R.y,R.z,R.w):ye.set(R,q,ae,re),Xe.scissor(ce.copy(ye).multiplyScalar(Y).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(R){Xe.setScissorTest(Ee=R)},this.setOpaqueSort=function(R){Me=R},this.setTransparentSort=function(R){P=R},this.getClearColor=function(R){return R.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,ae=!0){let re=0;if(R){let Z=!1;if(W!==null){const Te=W.texture.format;Z=Te===dp||Te===hp||Te===fp}if(Z){const Te=W.texture.type,Ce=Te===In||Te===cr||Te===sl||Te===Xs||Te===cp||Te===up,De=Ye.getClearColor(),Ie=Ye.getClearAlpha(),et=De.r,We=De.g,je=De.b;Ce?(b[0]=et,b[1]=We,b[2]=je,b[3]=Ie,H.clearBufferuiv(H.COLOR,0,b)):(w[0]=et,w[1]=We,w[2]=je,w[3]=Ie,H.clearBufferiv(H.COLOR,0,w))}else re|=H.COLOR_BUFFER_BIT}q&&(re|=H.DEPTH_BUFFER_BIT),ae&&(re|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ve,!1),n.removeEventListener("webglcontextrestored",ze,!1),n.removeEventListener("webglcontextcreationerror",Oe,!1),Ye.dispose(),Ge.dispose(),$e.dispose(),Ve.dispose(),A.dispose(),te.dispose(),fe.dispose(),Pt.dispose(),j.dispose(),Pe.dispose(),le.dispose(),le.removeEventListener("sessionstart",fn),le.removeEventListener("sessionend",bn),jn.stop()};function ve(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function ze(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const R=Ot.autoReset,q=Fe.enabled,ae=Fe.autoUpdate,re=Fe.needsUpdate,Z=Fe.type;Le(),Ot.autoReset=R,Fe.enabled=q,Fe.autoUpdate=ae,Fe.needsUpdate=re,Fe.type=Z}function Oe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function at(R){const q=R.target;q.removeEventListener("dispose",at),Xt(q)}function Xt(R){rn(R),Ve.remove(R)}function rn(R){const q=Ve.get(R).programs;q!==void 0&&(q.forEach(function(ae){Pe.releaseProgram(ae)}),R.isShaderMaterial&&Pe.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,ae,re,Z,Te){q===null&&(q=jt);const Ce=Z.isMesh&&Z.matrixWorld.determinant()<0,De=pr(R,q,ae,re,Z);Xe.setMaterial(re,Ce);let Ie=ae.index,et=1;if(re.wireframe===!0){if(Ie=be.getWireframeAttribute(ae),Ie===void 0)return;et=2}const We=ae.drawRange,je=ae.attributes.position;let pt=We.start*et,Tt=(We.start+We.count)*et;Te!==null&&(pt=Math.max(pt,Te.start*et),Tt=Math.min(Tt,(Te.start+Te.count)*et)),Ie!==null?(pt=Math.max(pt,0),Tt=Math.min(Tt,Ie.count)):je!=null&&(pt=Math.max(pt,0),Tt=Math.min(Tt,je.count));const Zt=Tt-pt;if(Zt<0||Zt===1/0)return;Pt.setup(Z,re,De,ae,Ie);let xt,yt=Be;if(Ie!==null&&(xt=ge.get(Ie),yt=ut,yt.setIndex(xt)),Z.isMesh)re.wireframe===!0?(Xe.setLineWidth(re.wireframeLinewidth*ht()),yt.setMode(H.LINES)):yt.setMode(H.TRIANGLES);else if(Z.isLine){let qe=re.linewidth;qe===void 0&&(qe=1),Xe.setLineWidth(qe*ht()),Z.isLineSegments?yt.setMode(H.LINES):Z.isLineLoop?yt.setMode(H.LINE_LOOP):yt.setMode(H.LINE_STRIP)}else Z.isPoints?yt.setMode(H.POINTS):Z.isSprite&&yt.setMode(H.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)ou("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))yt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const qe=Z._multiDrawStarts,$t=Z._multiDrawCounts,Mt=Z._multiDrawCount,Un=Ie?ge.get(Ie).bytesPerElement:1,Ca=Ve.get(re).currentProgram.getUniforms();for(let Wt=0;Wt<Mt;Wt++)Ca.setValue(H,"_gl_DrawID",Wt),yt.render(qe[Wt]/Un,$t[Wt])}else if(Z.isInstancedMesh)yt.renderInstances(pt,Zt,Z.count);else if(ae.isInstancedBufferGeometry){const qe=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,$t=Math.min(ae.instanceCount,qe);yt.renderInstances(pt,Zt,$t)}else yt.render(pt,Zt)};function bt(R,q,ae){R.transparent===!0&&R.side===ci&&R.forceSinglePass===!1?(R.side=Mn,R.needsUpdate=!0,wa(R,q,ae),R.side=Ea,R.needsUpdate=!0,wa(R,q,ae),R.side=ci):wa(R,q,ae)}this.compile=function(R,q,ae=null){ae===null&&(ae=R),v=$e.get(ae),v.init(q),D.push(v),ae.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),R!==ae&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),v.setupLights();const re=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Te=Z.material;if(Te)if(Array.isArray(Te))for(let Ce=0;Ce<Te.length;Ce++){const De=Te[Ce];bt(De,ae,Z),re.add(De)}else bt(Te,ae,Z),re.add(Te)}),v=D.pop(),re},this.compileAsync=function(R,q,ae=null){const re=this.compile(R,q,ae);return new Promise(Z=>{function Te(){if(re.forEach(function(Ce){Ve.get(Ce).currentProgram.isReady()&&re.delete(Ce)}),re.size===0){Z(R);return}setTimeout(Te,10)}_t.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let $n=null;function vn(R){$n&&$n(R)}function fn(){jn.stop()}function bn(){jn.start()}const jn=new q_;jn.setAnimationLoop(vn),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(R){$n=R,le.setAnimationLoop(R),R===null?jn.stop():jn.start()},le.addEventListener("sessionstart",fn),le.addEventListener("sessionend",bn),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(q),q=le.getCamera()),R.isScene===!0&&R.onBeforeRender(U,R,q,W),v=$e.get(R,D.length),v.init(q),D.push(v),Ne.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),J.setFromProjectionMatrix(Ne),Se=this.localClippingEnabled,me=Ae.init(this.clippingPlanes,Se),y=Ge.get(R,L.length),y.init(),L.push(y),le.enabled===!0&&le.isPresenting===!0){const Te=U.xr.getDepthSensingMesh();Te!==null&&hr(Te,q,-1/0,U.sortObjects)}hr(R,q,0,U.sortObjects),y.finish(),U.sortObjects===!0&&y.sort(Me,P),Gt=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Gt&&Ye.addToRenderList(y,R),this.info.render.frame++,me===!0&&Ae.beginShadows();const ae=v.state.shadowsArray;Fe.render(ae,R,q),me===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=y.opaque,Z=y.transmissive;if(v.setupLights(),q.isArrayCamera){const Te=q.cameras;if(Z.length>0)for(let Ce=0,De=Te.length;Ce<De;Ce++){const Ie=Te[Ce];Sl(re,Z,R,Ie)}Gt&&Ye.render(R);for(let Ce=0,De=Te.length;Ce<De;Ce++){const Ie=Te[Ce];yl(y,R,Ie,Ie.viewport)}}else Z.length>0&&Sl(re,Z,R,q),Gt&&Ye.render(R),yl(y,R,q);W!==null&&I===0&&(O.updateMultisampleRenderTarget(W),O.updateRenderTargetMipmap(W)),R.isScene===!0&&R.onAfterRender(U,R,q),Pt.resetDefaultState(),N=-1,C=null,D.pop(),D.length>0?(v=D[D.length-1],me===!0&&Ae.setGlobalState(U.clippingPlanes,v.state.camera)):v=null,L.pop(),L.length>0?y=L[L.length-1]:y=null};function hr(R,q,ae,re){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)ae=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||J.intersectsSprite(R)){re&&Ke.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ne);const Ce=fe.update(R),De=R.material;De.visible&&y.push(R,Ce,De,ae,Ke.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||J.intersectsObject(R))){const Ce=fe.update(R),De=R.material;if(re&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ke.copy(R.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Ke.copy(Ce.boundingSphere.center)),Ke.applyMatrix4(R.matrixWorld).applyMatrix4(Ne)),Array.isArray(De)){const Ie=Ce.groups;for(let et=0,We=Ie.length;et<We;et++){const je=Ie[et],pt=De[je.materialIndex];pt&&pt.visible&&y.push(R,Ce,pt,ae,Ke.z,je)}}else De.visible&&y.push(R,Ce,De,ae,Ke.z,null)}}const Te=R.children;for(let Ce=0,De=Te.length;Ce<De;Ce++)hr(Te[Ce],q,ae,re)}function yl(R,q,ae,re){const Z=R.opaque,Te=R.transmissive,Ce=R.transparent;v.setupLightsView(ae),me===!0&&Ae.setGlobalState(U.clippingPlanes,ae),re&&Xe.viewport(k.copy(re)),Z.length>0&&dr(Z,q,ae),Te.length>0&&dr(Te,q,ae),Ce.length>0&&dr(Ce,q,ae),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function Sl(R,q,ae,re){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[re.id]===void 0&&(v.state.transmissionRenderTarget[re.id]=new Gn(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?pl:In,minFilter:kr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Te=v.state.transmissionRenderTarget[re.id],Ce=re.viewport||k;Te.setSize(Ce.z*U.transmissionResolutionScale,Ce.w*U.transmissionResolutionScale);const De=U.getRenderTarget();U.setRenderTarget(Te),U.getClearColor(xe),pe=U.getClearAlpha(),pe<1&&U.setClearColor(16777215,.5),U.clear(),Gt&&Ye.render(ae);const Ie=U.toneMapping;U.toneMapping=lr;const et=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),v.setupLightsView(re),me===!0&&Ae.setGlobalState(U.clippingPlanes,re),dr(R,ae,re),O.updateMultisampleRenderTarget(Te),O.updateRenderTargetMipmap(Te),_t.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let je=0,pt=q.length;je<pt;je++){const Tt=q[je],Zt=Tt.object,xt=Tt.geometry,yt=Tt.material,qe=Tt.group;if(yt.side===ci&&Zt.layers.test(re.layers)){const $t=yt.side;yt.side=Mn,yt.needsUpdate=!0,Aa(Zt,ae,re,xt,yt,qe),yt.side=$t,yt.needsUpdate=!0,We=!0}}We===!0&&(O.updateMultisampleRenderTarget(Te),O.updateRenderTargetMipmap(Te))}U.setRenderTarget(De),U.setClearColor(xe,pe),et!==void 0&&(re.viewport=et),U.toneMapping=Ie}function dr(R,q,ae){const re=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,Te=R.length;Z<Te;Z++){const Ce=R[Z],De=Ce.object,Ie=Ce.geometry,et=Ce.group;let We=Ce.material;We.allowOverride===!0&&re!==null&&(We=re),De.layers.test(ae.layers)&&Aa(De,q,ae,Ie,We,et)}}function Aa(R,q,ae,re,Z,Te){R.onBeforeRender(U,q,ae,re,Z,Te),R.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(U,q,ae,re,R,Te),Z.transparent===!0&&Z.side===ci&&Z.forceSinglePass===!1?(Z.side=Mn,Z.needsUpdate=!0,U.renderBufferDirect(ae,q,re,Z,R,Te),Z.side=Ea,Z.needsUpdate=!0,U.renderBufferDirect(ae,q,re,Z,R,Te),Z.side=ci):U.renderBufferDirect(ae,q,re,Z,R,Te),R.onAfterRender(U,q,ae,re,Z,Te)}function wa(R,q,ae){q.isScene!==!0&&(q=jt);const re=Ve.get(R),Z=v.state.lights,Te=v.state.shadowsArray,Ce=Z.state.version,De=Pe.getParameters(R,Z.state,Te,q,ae),Ie=Pe.getProgramCacheKey(De);let et=re.programs;re.environment=R.isMeshStandardMaterial?q.environment:null,re.fog=q.fog,re.envMap=(R.isMeshStandardMaterial?te:A).get(R.envMap||re.environment),re.envMapRotation=re.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,et===void 0&&(R.addEventListener("dispose",at),et=new Map,re.programs=et);let We=et.get(Ie);if(We!==void 0){if(re.currentProgram===We&&re.lightsStateVersion===Ce)return qi(R,De),We}else De.uniforms=Pe.getUniforms(R),R.onBeforeCompile(De,U),We=Pe.acquireProgram(De,Ie),et.set(Ie,We),re.uniforms=De.uniforms;const je=re.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(je.clippingPlanes=Ae.uniform),qi(R,De),re.needsLights=sn(R),re.lightsStateVersion=Ce,re.needsLights&&(je.ambientLightColor.value=Z.state.ambient,je.lightProbe.value=Z.state.probe,je.directionalLights.value=Z.state.directional,je.directionalLightShadows.value=Z.state.directionalShadow,je.spotLights.value=Z.state.spot,je.spotLightShadows.value=Z.state.spotShadow,je.rectAreaLights.value=Z.state.rectArea,je.ltc_1.value=Z.state.rectAreaLTC1,je.ltc_2.value=Z.state.rectAreaLTC2,je.pointLights.value=Z.state.point,je.pointLightShadows.value=Z.state.pointShadow,je.hemisphereLights.value=Z.state.hemi,je.directionalShadowMap.value=Z.state.directionalShadowMap,je.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,je.spotShadowMap.value=Z.state.spotShadowMap,je.spotLightMatrix.value=Z.state.spotLightMatrix,je.spotLightMap.value=Z.state.spotLightMap,je.pointShadowMap.value=Z.state.pointShadowMap,je.pointShadowMatrix.value=Z.state.pointShadowMatrix),re.currentProgram=We,re.uniformsList=null,We}function Wi(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=lu.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function qi(R,q){const ae=Ve.get(R);ae.outputColorSpace=q.outputColorSpace,ae.batching=q.batching,ae.batchingColor=q.batchingColor,ae.instancing=q.instancing,ae.instancingColor=q.instancingColor,ae.instancingMorph=q.instancingMorph,ae.skinning=q.skinning,ae.morphTargets=q.morphTargets,ae.morphNormals=q.morphNormals,ae.morphColors=q.morphColors,ae.morphTargetsCount=q.morphTargetsCount,ae.numClippingPlanes=q.numClippingPlanes,ae.numIntersection=q.numClipIntersection,ae.vertexAlphas=q.vertexAlphas,ae.vertexTangents=q.vertexTangents,ae.toneMapping=q.toneMapping}function pr(R,q,ae,re,Z){q.isScene!==!0&&(q=jt),O.resetTextureUnits();const Te=q.fog,Ce=re.isMeshStandardMaterial?q.environment:null,De=W===null?U.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:ur,Ie=(re.isMeshStandardMaterial?te:A).get(re.envMap||Ce),et=re.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,We=!!ae.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),je=!!ae.morphAttributes.position,pt=!!ae.morphAttributes.normal,Tt=!!ae.morphAttributes.color;let Zt=lr;re.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Zt=U.toneMapping);const xt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,yt=xt!==void 0?xt.length:0,qe=Ve.get(re),$t=v.state.lights;if(me===!0&&(Se===!0||R!==C)){const _n=R===C&&re.id===N;Ae.setState(re,R,_n)}let Mt=!1;re.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==$t.state.version||qe.outputColorSpace!==De||Z.isBatchedMesh&&qe.batching===!1||!Z.isBatchedMesh&&qe.batching===!0||Z.isBatchedMesh&&qe.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&qe.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&qe.instancing===!1||!Z.isInstancedMesh&&qe.instancing===!0||Z.isSkinnedMesh&&qe.skinning===!1||!Z.isSkinnedMesh&&qe.skinning===!0||Z.isInstancedMesh&&qe.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&qe.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&qe.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&qe.instancingMorph===!1&&Z.morphTexture!==null||qe.envMap!==Ie||re.fog===!0&&qe.fog!==Te||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Ae.numPlanes||qe.numIntersection!==Ae.numIntersection)||qe.vertexAlphas!==et||qe.vertexTangents!==We||qe.morphTargets!==je||qe.morphNormals!==pt||qe.morphColors!==Tt||qe.toneMapping!==Zt||qe.morphTargetsCount!==yt)&&(Mt=!0):(Mt=!0,qe.__version=re.version);let Un=qe.currentProgram;Mt===!0&&(Un=wa(re,q,Z));let Ca=!1,Wt=!1,Zi=!1;const Vt=Un.getUniforms(),Nn=qe.uniforms;if(Xe.useProgram(Un.program)&&(Ca=!0,Wt=!0,Zi=!0),re.id!==N&&(N=re.id,Wt=!0),Ca||C!==R){Xe.buffers.depth.getReversed()?(we.copy(R.projectionMatrix),IE(we),FE(we),Vt.setValue(H,"projectionMatrix",we)):Vt.setValue(H,"projectionMatrix",R.projectionMatrix),Vt.setValue(H,"viewMatrix",R.matrixWorldInverse);const Tn=Vt.map.cameraPosition;Tn!==void 0&&Tn.setValue(H,lt.setFromMatrixPosition(R.matrixWorld)),it.logarithmicDepthBuffer&&Vt.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Vt.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,Wt=!0,Zi=!0)}if(Z.isSkinnedMesh){Vt.setOptional(H,Z,"bindMatrix"),Vt.setOptional(H,Z,"bindMatrixInverse");const _n=Z.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Vt.setValue(H,"boneTexture",_n.boneTexture,O))}Z.isBatchedMesh&&(Vt.setOptional(H,Z,"batchingTexture"),Vt.setValue(H,"batchingTexture",Z._matricesTexture,O),Vt.setOptional(H,Z,"batchingIdTexture"),Vt.setValue(H,"batchingIdTexture",Z._indirectTexture,O),Vt.setOptional(H,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Vt.setValue(H,"batchingColorTexture",Z._colorsTexture,O));const hn=ae.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&Qe.update(Z,ae,Un),(Wt||qe.receiveShadow!==Z.receiveShadow)&&(qe.receiveShadow=Z.receiveShadow,Vt.setValue(H,"receiveShadow",Z.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Nn.envMap.value=Ie,Nn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&q.environment!==null&&(Nn.envMapIntensity.value=q.environmentIntensity),Wt&&(Vt.setValue(H,"toneMappingExposure",U.toneMappingExposure),qe.needsLights&&Ra(Nn,Zi),Te&&re.fog===!0&&Re.refreshFogUniforms(Nn,Te),Re.refreshMaterialUniforms(Nn,re,Y,K,v.state.transmissionRenderTarget[R.id]),lu.upload(H,Wi(qe),Nn,O)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(lu.upload(H,Wi(qe),Nn,O),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Vt.setValue(H,"center",Z.center),Vt.setValue(H,"modelViewMatrix",Z.modelViewMatrix),Vt.setValue(H,"normalMatrix",Z.normalMatrix),Vt.setValue(H,"modelMatrix",Z.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const _n=re.uniformsGroups;for(let Tn=0,Ui=_n.length;Tn<Ui;Tn++){const Ki=_n[Tn];j.update(Ki,Un),j.bind(Ki,Un)}}return Un}function Ra(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function sn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(R,q,ae){const re=Ve.get(R);re.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),Ve.get(R.texture).__webglTexture=q,Ve.get(R.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ae,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const ae=Ve.get(R);ae.__webglFramebuffer=q,ae.__useDefaultFramebuffer=q===void 0};const El=H.createFramebuffer();this.setRenderTarget=function(R,q=0,ae=0){W=R,G=q,I=ae;let re=!0,Z=null,Te=!1,Ce=!1;if(R){const Ie=Ve.get(R);if(Ie.__useDefaultFramebuffer!==void 0)Xe.bindFramebuffer(H.FRAMEBUFFER,null),re=!1;else if(Ie.__webglFramebuffer===void 0)O.setupRenderTarget(R);else if(Ie.__hasExternalTextures)O.rebindTextures(R,Ve.get(R.texture).__webglTexture,Ve.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const je=R.depthTexture;if(Ie.__boundDepthTexture!==je){if(je!==null&&Ve.has(je)&&(R.width!==je.image.width||R.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(R)}}const et=R.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ce=!0);const We=Ve.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(We[q])?Z=We[q][ae]:Z=We[q],Te=!0):R.samples>0&&O.useMultisampledRTT(R)===!1?Z=Ve.get(R).__webglMultisampledFramebuffer:Array.isArray(We)?Z=We[ae]:Z=We,k.copy(R.viewport),ce.copy(R.scissor),oe=R.scissorTest}else k.copy(ee).multiplyScalar(Y).floor(),ce.copy(ye).multiplyScalar(Y).floor(),oe=Ee;if(ae!==0&&(Z=El),Xe.bindFramebuffer(H.FRAMEBUFFER,Z)&&re&&Xe.drawBuffers(R,Z),Xe.viewport(k),Xe.scissor(ce),Xe.setScissorTest(oe),Te){const Ie=Ve.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ie.__webglTexture,ae)}else if(Ce){const Ie=Ve.get(R.texture),et=q;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ie.__webglTexture,ae,et)}else if(R!==null&&ae!==0){const Ie=Ve.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ie.__webglTexture,ae)}N=-1},this.readRenderTargetPixels=function(R,q,ae,re,Z,Te,Ce){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De){Xe.bindFramebuffer(H.FRAMEBUFFER,De);try{const Ie=R.texture,et=Ie.format,We=Ie.type;if(!it.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-re&&ae>=0&&ae<=R.height-Z&&H.readPixels(q,ae,re,Z,nt.convert(et),nt.convert(We),Te)}finally{const Ie=W!==null?Ve.get(W).__webglFramebuffer:null;Xe.bindFramebuffer(H.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(R,q,ae,re,Z,Te,Ce){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De)if(q>=0&&q<=R.width-re&&ae>=0&&ae<=R.height-Z){Xe.bindFramebuffer(H.FRAMEBUFFER,De);const Ie=R.texture,et=Ie.format,We=Ie.type;if(!it.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,je),H.bufferData(H.PIXEL_PACK_BUFFER,Te.byteLength,H.STREAM_READ),H.readPixels(q,ae,re,Z,nt.convert(et),nt.convert(We),0);const pt=W!==null?Ve.get(W).__webglFramebuffer:null;Xe.bindFramebuffer(H.FRAMEBUFFER,pt);const Tt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await zE(H,Tt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,je),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Te),H.deleteBuffer(je),H.deleteSync(Tt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,ae=0){const re=Math.pow(2,-ae),Z=Math.floor(R.image.width*re),Te=Math.floor(R.image.height*re),Ce=q!==null?q.x:0,De=q!==null?q.y:0;O.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,ae,0,0,Ce,De,Z,Te),Xe.unbindTexture()};const Ml=H.createFramebuffer(),Yi=H.createFramebuffer();this.copyTextureToTexture=function(R,q,ae=null,re=null,Z=0,Te=null){Te===null&&(Z!==0?(ou("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=Z,Z=0):Te=0);let Ce,De,Ie,et,We,je,pt,Tt,Zt;const xt=R.isCompressedTexture?R.mipmaps[Te]:R.image;if(ae!==null)Ce=ae.max.x-ae.min.x,De=ae.max.y-ae.min.y,Ie=ae.isBox3?ae.max.z-ae.min.z:1,et=ae.min.x,We=ae.min.y,je=ae.isBox3?ae.min.z:0;else{const hn=Math.pow(2,-Z);Ce=Math.floor(xt.width*hn),De=Math.floor(xt.height*hn),R.isDataArrayTexture?Ie=xt.depth:R.isData3DTexture?Ie=Math.floor(xt.depth*hn):Ie=1,et=0,We=0,je=0}re!==null?(pt=re.x,Tt=re.y,Zt=re.z):(pt=0,Tt=0,Zt=0);const yt=nt.convert(q.format),qe=nt.convert(q.type);let $t;q.isData3DTexture?(O.setTexture3D(q,0),$t=H.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(O.setTexture2DArray(q,0),$t=H.TEXTURE_2D_ARRAY):(O.setTexture2D(q,0),$t=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const Mt=H.getParameter(H.UNPACK_ROW_LENGTH),Un=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Ca=H.getParameter(H.UNPACK_SKIP_PIXELS),Wt=H.getParameter(H.UNPACK_SKIP_ROWS),Zi=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,xt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,xt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,et),H.pixelStorei(H.UNPACK_SKIP_ROWS,We),H.pixelStorei(H.UNPACK_SKIP_IMAGES,je);const Vt=R.isDataArrayTexture||R.isData3DTexture,Nn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const hn=Ve.get(R),_n=Ve.get(q),Tn=Ve.get(hn.__renderTarget),Ui=Ve.get(_n.__renderTarget);Xe.bindFramebuffer(H.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let Ki=0;Ki<Ie;Ki++)Vt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ve.get(R).__webglTexture,Z,je+Ki),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ve.get(q).__webglTexture,Te,Zt+Ki)),H.blitFramebuffer(et,We,Ce,De,pt,Tt,Ce,De,H.DEPTH_BUFFER_BIT,H.NEAREST);Xe.bindFramebuffer(H.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||Ve.has(R)){const hn=Ve.get(R),_n=Ve.get(q);Xe.bindFramebuffer(H.READ_FRAMEBUFFER,Ml),Xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,Yi);for(let Tn=0;Tn<Ie;Tn++)Vt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,hn.__webglTexture,Z,je+Tn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,hn.__webglTexture,Z),Nn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,_n.__webglTexture,Te,Zt+Tn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,_n.__webglTexture,Te),Z!==0?H.blitFramebuffer(et,We,Ce,De,pt,Tt,Ce,De,H.COLOR_BUFFER_BIT,H.NEAREST):Nn?H.copyTexSubImage3D($t,Te,pt,Tt,Zt+Tn,et,We,Ce,De):H.copyTexSubImage2D($t,Te,pt,Tt,et,We,Ce,De);Xe.bindFramebuffer(H.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Nn?R.isDataTexture||R.isData3DTexture?H.texSubImage3D($t,Te,pt,Tt,Zt,Ce,De,Ie,yt,qe,xt.data):q.isCompressedArrayTexture?H.compressedTexSubImage3D($t,Te,pt,Tt,Zt,Ce,De,Ie,yt,xt.data):H.texSubImage3D($t,Te,pt,Tt,Zt,Ce,De,Ie,yt,qe,xt):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Te,pt,Tt,Ce,De,yt,qe,xt.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Te,pt,Tt,xt.width,xt.height,yt,xt.data):H.texSubImage2D(H.TEXTURE_2D,Te,pt,Tt,Ce,De,yt,qe,xt);H.pixelStorei(H.UNPACK_ROW_LENGTH,Mt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Un),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ca),H.pixelStorei(H.UNPACK_SKIP_ROWS,Wt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Zi),Te===0&&q.generateMipmaps&&H.generateMipmap($t),Xe.unbindTexture()},this.copyTextureToTexture3D=function(R,q,ae=null,re=null,Z=0){return ou('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,q,ae,re,Z)},this.initRenderTarget=function(R){Ve.get(R).__webglFramebuffer===void 0&&O.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?O.setTextureCube(R,0):R.isData3DTexture?O.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?O.setTexture2DArray(R,0):O.setTexture2D(R,0),Xe.unbindTexture()},this.resetState=function(){G=0,I=0,W=null,Xe.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _a}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),n.unpackColorSpace=wt._getUnpackColorSpace()}}function $_(){const[a,e]=he.useState({width:window.innerWidth,height:window.innerHeight});return he.useEffect(()=>{function n(){e({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]),a}const mu="https://github.com/jayhcrawford",yp="https://www.instagram.com/jaycraw1_",ll="https://www.linkedin.com/in/jay-crawford-prod/",ki="Cal Sans",jr="Oswald",Gi="Arial, sans",$A=1e3,cl="Jay H. Crawford",cu="65",al="opacity-65 font-bold text-white",xl=a=>M.jsx(M.Fragment,{children:M.jsxs("div",{className:"text-white mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10 py-8",children:[a.construction==!0&&M.jsx("div",{className:"flex justify-center mb-10",children:M.jsxs("div",{className:"flex flex-col",children:[M.jsx("div",{className:"flex justify-center",children:M.jsx("div",{className:"h-40 w-40",children:M.jsx("img",{src:"./under_construction.svg"})})}),M.jsx("p",{className:"inline-block bg-red-500 rounded-xl text-center font-extrabold text-4xl",children:"This section is under construction"})]})}),M.jsx("h1",{style:{fontFamily:jr},id:"blog_header",className:"text-5xl text-white font-extrabold pb-10 ",children:a.title}),M.jsx("div",{className:"p-4 sm:p-6 lg:p-8",style:{backgroundColor:"#0b0f17",borderRadius:"20px"},children:a.children})]})}),ex="text-[#CCCFD9]",Jc=({children:a,align:e="center",className:n})=>{const s={left:"text-left",center:"text-center",right:"text-right"};return M.jsx("p",{className:`${s[e]} text-xs uppercase tracking-[0.4em] ${ex} ${n??""}`.trim(),children:a})},ar=({src:a,alt:e,variant:n="full",figureLabel:s,figureCaption:l,imgClassName:c,figureMarginClassName:f="my-8",figcaptionClassName:h,withMatte:p=!1,matteClassName:m})=>{const g=!!(s||l),_={full:"w-full max-w-4xl",half:"mx-auto w-full sm:w-3/4 lg:w-1/2",centered:"mx-auto w-full sm:w-3/4 lg:w-2/3",quarter:"mx-auto w-full sm:w-1/2 lg:w-1/4"},x=M.jsx("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:M.jsx("img",{src:a,alt:e,className:`${_[n]} ${c??""}`.trim()})});return M.jsxs("figure",{className:`flex flex-col justify-center ${f}`,children:[p?M.jsx("div",{className:`rounded-2xl border border-white/20 bg-white/5 p-4 ${m??""}`.trim(),children:x}):x,g&&M.jsxs("figcaption",{className:`mt-2 text-center text-sm ${h??"text-gray-300"}`.trim(),children:[s&&M.jsx("span",{className:"font-semibold",children:s}),l&&M.jsx("span",{className:s?"ml-2":"",children:l})]})]})},tx=({href:a,label:e,newTab:n=!0})=>M.jsx("a",{href:a,target:n?"_blank":void 0,rel:n?"noopener noreferrer":void 0,className:"inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/90 bg-white/70 px-6 py-3 text-sm font-semibold tracking-wide text-slate-900 text-center backdrop-blur-sm transition hover:bg-white/90 hover:border-white hover:text-slate-900 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]",children:e}),ew=a=>M.jsxs("div",{className:" flex justify-center",children:[M.jsx("a",{className:" text-xl font-semibold underline text-center",target:"_blank",href:a.url,children:a.linkText}),M.jsx("div",{style:{width:"90px"},children:M.jsx("svg",{style:{filter:"invert(100%)",transform:"rotate(-10deg), translateX(-20px)"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 640",children:M.jsx("path",{d:"M224 104C224 81.9 241.9 64 264 64C286.1 64 304 81.9 304 104L304 252.2C312.5 244.6 323.7 240 336 240C356.6 240 374.2 253 381 271.2C389.8 261.9 402.2 256 416 256C441.3 256 462 275.5 463.9 300.3C472.4 292.6 483.7 288 496 288C522.5 288 544 309.5 544 336L544 448C544 518.7 486.7 576 416 576L330.7 576C325.7 576 320.8 575.7 316 575C260.7 569.4 209.8 541 176 496L104 400C90.7 382.3 94.3 357.3 112 344C129.7 330.7 154.7 334.3 168 352L224 426.7L224 104zM336 368C336 359.2 328.8 352 320 352C311.2 352 304 359.2 304 368L304 464C304 472.8 311.2 480 320 480C328.8 480 336 472.8 336 464L336 368zM384 352C375.2 352 368 359.2 368 368L368 464C368 472.8 375.2 480 384 480C392.8 480 400 472.8 400 464L400 368C400 359.2 392.8 352 384 352zM464 368C464 359.2 456.8 352 448 352C439.2 352 432 359.2 432 368L432 464C432 472.8 439.2 480 448 480C456.8 480 464 472.8 464 464L464 368z"})})})]}),Dn=({text:a,className:e})=>M.jsx("section",{id:"blog_standardParagraph",className:"mt-0",style:{fontFamily:Gi},children:M.jsx("p",{className:`text-lg leading-relaxed text-slate-200 text-left max-w-3xl mx-auto ${e??""}`.trim(),children:a})}),tl=a=>{const e={compact:"text-2xl sm:text-4xl lg:text-5xl font-light text-center p-4 sm:p-6 pb-8 leading-snug",balanced:"text-3xl sm:text-5xl lg:text-6xl font-light text-center p-6 sm:p-8 pb-10 sm:pb-14 leading-tight",hero:"text-4xl sm:text-6xl xl:text-7xl font-light text-center p-6 sm:p-10 pb-12 leading-tight"};return M.jsxs("section",{id:"Blog_heroQuote",className:`${e[a.sizePreset??"hero"]}`,style:{fontFamily:jr},children:[M.jsx("style",{children:`
                        #Blog_heroQuoteQuoter::before {
                            content: "- "; /* or content: "&copy;"; */
                        }
                `}),M.jsxs("p",{children:[a.quote,a.quoter?M.jsx("span",{id:"Blog_heroQuoteQuoter",className:`block text-center pt-4 ml-${a.quoter_padding}`,children:a.quoter}):null]})]})},tw=[{label:"Now",items:["Engineering student at LACC","BuildLACCD intern","UrFriends dev"]},{label:"Roots",items:["BFA from SAIC","Lexington-born","multidisciplinary maker"]},{label:"Range",items:["Construction ops","hospitality leadership","art direction","software"]}],nw=["Designing community-driven software","Digitizing construction workflows","Making data feel human (fitness, fabrication, finance)"],iw=[{title:"Creative Tools",tools:["Photoshop","Illustrator","Maya","Blender","Fusion 360","SOLIDWORKS"]},{title:"Coding / Languages",tools:["TypeScript","JavaScript","Python","C++","SQL"]},{title:"Web Dev & Platforms",tools:["Next.js","Firebase","Stripe","Vercel","Render","Tailwind"]}],zr="text-[#CCCFD9]",aw=()=>M.jsxs(xl,{title:"About",construction:!1,children:[M.jsx("style",{children:`/* Custom scrollbar styles */
         p {
         margin-bottom: 1.5em;
        }
        `}),M.jsx("div",{className:"relative flex items-center justify-center rounded-2xl border border-dashed border-white/20 bg-slate-800/40 p-6 text-center",children:M.jsxs("div",{children:[M.jsx("p",{className:`text-sm uppercase tracking-[0.3em] ${zr}`,children:"Portrait Placeholder"}),M.jsx("p",{className:"mt-3 text-xl font-semibold text-white",children:"Drop a high-contrast photo here"}),M.jsx("p",{className:"mt-2 text-sm text-slate-300",children:"Suggested: clean lighting, subtle gradient background, confident but relaxed posture."})]})}),M.jsxs("div",{className:"space-y-16 text-slate-100",children:[M.jsx("section",{className:"grid gap-10 rounded-2xl p-8 lg:grid-cols-[3fr,2fr]",children:M.jsxs("div",{className:"space-y-6",children:[M.jsx("p",{className:`text-center text-sm uppercase tracking-[0.3em] ${zr}`,children:"Designer · Builder · Storyteller"}),M.jsxs("h1",{className:"text-4xl font-semibold leading-tight text-white sm:text-5xl mt-10 mb-10",children:["Context-switching between ",M.jsx("strong",{children:"construction sites"}),", ",M.jsx("strong",{children:"code editors"}),", and ",M.jsx("strong",{children:"sketchbooks"})," is my normal."]}),M.jsxs("p",{className:"text-lg leading-relaxed text-slate-200 mt-5",children:["I grew up in Kentucky, cut my teeth in ",M.jsx("strong",{children:"art school"})," at SAIC, and moved to Los Angeles in 2017 to pursue dreams; ",M.jsx("i",{children:"LA has become home now. "}),"The city's beauty, its diversity, the weather, the culture, I love what it has to offer here  — here I've worked across specialty construction, hospitality, and entertainment. Today I split my time between BuildLACCD ",M.jsx("strong",{children:"project management"}),", UrFriends",M.jsx("strong",{children:" full-stack development"}),", ",M.jsx("strong",{children:"engineering school"}),", my passion for the fitness & creativity."]}),M.jsxs("div",{className:"space-y-3 rounded-2xl border border-white/5 bg-white/5/20 mt-5 pt-1 p-6",children:[M.jsx("p",{className:`text-xs uppercase tracking-[0.4em] pb-5 pt-5 ${zr}`,children:"What Drives Me"}),M.jsx("div",{className:"flex flex-wrap gap-3",children:nw.map(a=>M.jsx("span",{className:"rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm",children:a},a))})]})]})}),M.jsx("section",{className:"grid gap-6 lg:grid-cols-3",children:tw.map(a=>M.jsxs("article",{className:"rounded-2xl border border-white/10 bg-slate-900/40 p-6 shadow-lg shadow-black/20",children:[M.jsx("p",{className:`text-xs uppercase tracking-[0.4em] ${zr}`,children:a.label}),M.jsx("ul",{className:"mt-3 space-y-2",children:a.items.map(e=>M.jsxs("li",{className:"text-lg font-semibold text-white flex items-start",children:[M.jsx("span",{className:"mr-3",children:"•"}),M.jsx("span",{children:e})]},e))})]},a.label))}),M.jsxs("section",{className:"space-y-6 text-lg leading-relaxed text-slate-200",children:[M.jsxs("p",{children:["I thrive where ",M.jsx("strong",{children:"hands-on execution"})," meets ",M.jsx("strong",{children:"polished storytelling"}),". I have ",M.jsx("strong",{children:M.jsx("a",{href:ll,target:"_blank",className:"hover:text-white/80 transition-colors",children:M.jsx("u",{children:"managed multimillion-dollar campus upgrades"})})}),", ",M.jsx("strong",{children:M.jsx("a",{href:"/projects/urfriends",className:"hover:text-white/80 transition-colors",children:M.jsx("u",{children:"shipped SaaS products"})})}),", led hospitality teams, fabricated sets, and still carve out time to paint, sketch, and cycle the Los Angeles river paths. Fitness is a huge passion of mine, especially running and cycling. As a runner, I love the distance and concentration, and as a cyclist I love the freedom. Each lane teaches me to stay calm, design deliberately, and communicate with clarity — and in every world thoughts of finding cross-pollination drive my imagination wild! I'm always looking for new ways to learn."]}),M.jsxs("p",{children:["Engineering school sharpened my math and systems thinking; art school wired me to experiment without fear; years in hospitality taught me to keep people seen and to communicate ",M.jsx("i",{children:"thoroughly"}),". School in STEM has been extremely rewarding — it has exposed me to tools that I've used for refining and analyzing",M.jsx("strong",{children:M.jsxs("a",{href:"/projects/ripsheet",className:"hover:text-white/80 transition-colors",children:[" ",M.jsx("u",{children:"personal fitness systems"})]})}),", allowed me to tutor fellow students at MESA; I've celebrated and philosophized in the Human Computer Interaction Club, helped organize a hackathon, I've gone from 'self-taught' programmer to someone who understands computer science paradigms, and become ",M.jsx("i",{children:"actually"})," kind of fascinated by math."]}),M.jsx("p",{children:`When I am not laboring (with love ofc), you will find me studying new fabrication techniques, spelunking the wiki of my latest fascination, long-distnace or trail running, homecanning beans (they're SO good), riding my bike around LA, going to an art museum, or tinkering creatively. I'm big on "hippie" type stuff, get way into reading about future green-tech, and resonate with preserving the environment — you can absolutely find me using a bicycle and public transit.`}),M.jsx("p",{className:"mt-8",children:"I still say yes to the weird gigs — they keep me humble and curious."})]}),M.jsxs("section",{className:"space-y-8 rounded-2xl border border-white/10 bg-slate-900/40 p-6",children:[M.jsxs("div",{className:"flex items-baseline justify-between",children:[M.jsx("h2",{className:"text-2xl font-semibold text-white",children:"Digital skills"}),M.jsx("span",{className:`text-xs uppercase tracking-[0.4em] ${zr}`,children:"TODO: ADD GRAPHIC"})]}),M.jsx("div",{className:"space-y-6",children:iw.map(a=>M.jsxs("div",{className:"space-y-3",children:[M.jsx("p",{className:`text-s uppercase tracking-[0.4em]  p-5 text-center font-bold ${zr}`,children:a.title}),M.jsx("div",{className:"grid sm:grid-cols-3 md:grid-cols-5 gap-4 lg:grid-cols-5 xl:grid-cols-6",children:a.tools.map(e=>M.jsxs("div",{className:"flex flex-col items-center gap-2 text-center",children:[M.jsx("div",{className:"flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-slate-800/60 text-xs uppercase tracking-wide text-slate-400",children:"Logo"}),M.jsx("p",{className:"text-sm font-medium text-white",children:e})]},e))})]},a.title))})]}),M.jsxs("section",{className:`flex flex-col items-center gap-4 rounded-2xl border border-white/20 bg-slate-800/40 px-6 py-5 text-sm ${zr}`,children:[M.jsx("p",{className:"text-xs uppercase tracking-[0.4em]",children:"Next steps"}),M.jsxs("div",{className:"flex flex-col gap-3 text-base text-slate-100",children:[M.jsxs("p",{className:"text-center",children:["I love ",M.jsx("strong",{children:"building"})," and ",M.jsx("strong",{children:"creating"}),", and if you can use my help, ",M.jsx("strong",{children:"please reach out!"})]}),M.jsx(tx,{href:"/contact",label:"Open Contact Page",newTab:!1})]})]})]})]}),rw=()=>M.jsx("div",{className:"text-white",style:{fontFamily:Gi},children:M.jsx("div",{className:"mx-auto w-full max-w-6xl px-6 py-20",children:M.jsxs("div",{className:"grid gap-10 md:grid-cols-2 md:items-center",children:[M.jsxs("div",{children:[M.jsx("p",{className:"uppercase tracking-[0.3em] text-sm opacity-70",children:"Contact"}),M.jsx("h1",{style:{fontFamily:ki},className:"text-4xl md:text-6xl font-bold mt-4",children:"Let's build something bold."}),M.jsx("p",{className:"mt-4 text-lg opacity-80 max-w-xl",children:"Reach out for collaborations, commissions, or just to say hello. I'm based in Los Angeles and always open to new ideas."}),M.jsxs("div",{className:"mt-8 flex flex-col sm:flex-row gap-4",children:[M.jsx("a",{href:"mailto:jayhcrawford@gmail.com",className:"inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:border-white hover:bg-white/10",children:"Email Me"}),M.jsx("a",{href:ll,target:"new",className:"inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:border-white hover:bg-white/10",children:"LinkedIn"})]})]}),M.jsxs("div",{className:"rounded-2xl border border-white/20 bg-white/5 p-8 backdrop-blur",children:[M.jsx("p",{className:"text-sm uppercase tracking-[0.3em] opacity-70",children:"Direct"}),M.jsx("h2",{style:{fontFamily:ki},className:"text-3xl font-semibold mt-3",children:cl}),M.jsx("p",{className:"opacity-80 mt-2",children:"Los Angeles, CA"}),M.jsxs("div",{className:"mt-6",children:[M.jsx("p",{className:"text-sm uppercase tracking-[0.3em] opacity-70",children:"Email"}),M.jsx("a",{className:"text-lg font-semibold hover:underline",href:"mailto:jayhcrawford@gmail.com",children:"jayhcrawford@gmail.com"})]}),M.jsxs("div",{className:"mt-6",children:[M.jsx("p",{className:"text-sm uppercase tracking-[0.3em] opacity-70",children:"Social"}),M.jsxs("div",{className:"mt-3 flex flex-wrap gap-4 text-sm",children:[M.jsx("a",{className:"hover:underline",href:ll,target:"new",children:"LinkedIn"}),M.jsx("a",{className:"hover:underline",href:yp,target:"new",children:"Instagram"}),M.jsx("a",{className:"hover:underline",href:mu,target:"new",children:"Github"})]})]})]})]})})}),sw=a=>M.jsxs(M.Fragment,{children:[a.url==""&&M.jsx("div",{id:"this_one",className:"h-30 w-30 absolute",children:M.jsx("img",{src:"./under_construction.svg"})}),M.jsx("div",{style:{boxShadow:"5px 5px 5px rgba(0, 0, 0, 1)"},className:"gridPhoto_Image_container w-80 h-60",children:M.jsx("img",{className:"rounded-lg w-80 h-60",style:{objectFit:"cover"},src:a.img})})]}),ow=a=>{const[e,n]=he.useState(!1);return M.jsx("div",{onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:M.jsx(Wr,{id:"",to:a.url?a.url:"",children:M.jsx("div",{className:"gridPhoto_container p-1 m-2 flex justify-center",children:M.jsxs("div",{className:`gridPhoto_item_container m-2 inline ${a.url==""&&"cursor-not-allowed"}`,children:[M.jsx("style",{children:`
                .gridPhoto_item_container:hover {
                  text-decoration: dotted;
                }
                .gridPhoto_item_container {
                  text-decoration: dotted;
                }
              `}),M.jsx("div",{className:"relative",children:M.jsxs("div",{className:" h-full w-full relative z-100",children:[M.jsx("div",{className:`${a.url==""&&e?"absolute":"hidden"} w-full absolute text-white font-black bg-red-600 top-[120px] p-4 text-center`,children:"Under Construction"}),M.jsx(sw,{img:a.img,url:a.url})]})}),M.jsx("div",{children:M.jsx("h4",{style:{fontFamily:ki},className:"text-2xl text-white p-4 abt_gridPhotoItem",children:a.title})})]})})})})},nx=a=>{const e=()=>a.width<2e3?"w-full":"w-[60%]",n=()=>a.width<750?"grid-cols-1":"grid-cols-2";return M.jsx("div",{id:"grid_container",className:`grid ${e()} ${n()}`,children:a.categories.map((s,l)=>M.jsx("span",{children:M.jsx(ow,{title:s.category,img:s.img,url:s.url?s.url:""})},`${l}-${s.category}`))})},lw=a=>M.jsx(nx,{width:a.width,categories:a.category_array}),cw=a=>{const e=new Date().getFullYear();return a.path=="/"?M.jsx("footer",{style:{fontFamily:ki},className:""}):M.jsxs("footer",{style:{fontFamily:ki},className:" text-white mx-auto w-full p-4 py-6",children:[M.jsx("style",{children:`
            .footer_links {
              margin-bottom: 2em;
            }
            .footer_links li {
              margin-bottom: .2em;
            }
            .footer_linkes_transp {
            opacity: ${cu}%;
            }
            
            .footer_links li:hover {
            text-decoration: underline;
            opacity: 100%;
            }`}),M.jsxs("div",{id:"footer_content",children:[M.jsxs("div",{className:"md:flex md:justify-between",children:[M.jsx("div",{className:"",children:M.jsx("ul",{className:"footer_links text-md text-left",children:M.jsx("li",{children:M.jsxs("a",{href:"mailto:jayhcrawford@gmail.com",children:[M.jsx("p",{className:"font-bold",children:cl}),M.jsxs("span",{className:"footer_linkes_transp font-normal",style:{fontFamily:Gi},children:[M.jsx("p",{children:"Los Angeles, CA"}),M.jsx("p",{children:"jayhcrawford@gmail.com"})]})]})})})}),M.jsxs("div",{className:"grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 text-left",children:[M.jsxs("div",{children:[M.jsx("h2",{className:"text-sm font-bold uppercase",children:"Social"}),M.jsxs("ul",{id:"footer_social",style:{fontFamily:Gi},className:"footer_links footer_linkes_transp font-medium mt-3 mb-10",children:[M.jsx("style",{children:`
                      #footer_social li {
                        
                      }
                    `}),M.jsx("li",{children:M.jsx("a",{href:ll,target:"new",className:"hover:underline",children:"LinkedIn"})}),M.jsx("li",{className:"",children:M.jsx("a",{href:yp,target:"new",className:"hover:underline",children:"Instagram"})}),M.jsx("li",{children:M.jsx("a",{href:mu,target:"new",className:"hover:underline",children:"Github"})})]})]}),M.jsx("div",{})]})]}),M.jsxs("div",{className:"sm:flex sm:items-center sm:justify-between",children:[M.jsxs("span",{style:{fontFamily:Gi},className:`font-normal text-sm text-white opacity-${cu} sm:text-center`,children:[e," - ",cl]}),M.jsx("div",{className:"flex mt-4 sm:justify-center sm:mt-0",children:M.jsxs("a",{href:mu,target:"new",className:`opacity-${cu} hover:opacity-100 hover:white ms-5`,children:[M.jsx("svg",{className:"w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:M.jsx("path",{fillRule:"evenodd",d:"M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z",clipRule:"evenodd"})}),M.jsx("span",{className:"sr-only",children:"GitHub account"})]})})]})]})]})},uw=a=>M.jsx("div",{className:"social_brick_icon_container",style:{width:"150px"},children:M.jsxs("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 40",className:"social-svg",children:[M.jsx("defs",{children:M.jsx("style",{children:`
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
                    `})}),a.name=="Tiktok"&&M.jsx("path",{className:"social_icon_fg",d:"M34.41,10.31c-3.78-.81-6.59-3.98-6.95-7.82v-.81h-6.35v25.2c-.01,2.95-2.41,5.33-5.36,5.32-1.66,0-3.22-.78-4.23-2.11h0s0,0,0,0c-1.78-2.35-1.33-5.69,1.02-7.48,1.38-1.05,3.19-1.36,4.85-.84v-6.45c-6.38-.88-12.27,3.58-13.15,9.96-.49,3.57.69,7.17,3.21,9.75,4.5,4.61,11.89,4.69,16.5.19,2.25-2.2,3.51-5.2,3.51-8.34v-12.88c2.57,1.83,5.64,2.82,8.8,2.81v-6.31c-.62,0-1.24-.06-1.85-.19h0Z"}),a.name=="Instagram"&&M.jsx("path",{className:"social_icon_fg",d:"M12.23,1.12C6.1,1.12,1.11,6.1,1.11,12.23v15.39c0,6.13,4.99,11.12,11.12,11.12h15.39c6.13,0,11.12-4.99,11.12-11.12v-15.39c0-6.13-4.99-11.12-11.12-11.12h-15.39ZM12.23,2.83h15.39c5.2,0,9.41,4.2,9.41,9.41v15.39c0,5.2-4.2,9.41-9.41,9.41h-15.39c-5.2,0-9.41-4.2-9.41-9.41v-15.39C2.82,7.03,7.02,2.83,12.23,2.83ZM30.18,7.96c-.94,0-1.71.77-1.71,1.71s.77,1.71,1.71,1.71,1.71-.77,1.71-1.71-.77-1.71-1.71-1.71ZM19.92,10.52c-5.19,0-9.41,4.22-9.41,9.41s4.22,9.41,9.41,9.41,9.41-4.22,9.41-9.41-4.22-9.41-9.41-9.41ZM19.92,12.23c4.26,0,7.7,3.44,7.7,7.7s-3.44,7.7-7.7,7.7-7.7-3.44-7.7-7.7,3.44-7.7,7.7-7.7Z"}),a.name=="Discord"&&M.jsx("path",{className:"social_icon_fg",d:"M33.35,7.61c-2.49-1.16-5.15-2.01-7.93-2.49-.34.62-.74,1.45-1.02,2.11-2.96-.44-5.89-.44-8.79,0-.28-.66-.68-1.49-1.03-2.11-2.79.48-5.45,1.33-7.94,2.5C1.62,15.2.26,22.6.94,29.89c3.33,2.49,6.56,4,9.73,4.99.78-1.08,1.48-2.22,2.08-3.43-1.15-.44-2.24-.97-3.28-1.6.28-.2.54-.42.8-.64,6.33,2.96,13.2,2.96,19.45,0,.26.22.53.43.8.64-1.04.63-2.14,1.16-3.29,1.6.6,1.2,1.3,2.35,2.08,3.43,3.18-.99,6.41-2.5,9.74-4.99.8-8.45-1.36-15.79-5.72-22.28h0ZM13.61,25.41c-1.9,0-3.46-1.77-3.46-3.93s1.52-3.94,3.46-3.94,3.49,1.77,3.46,3.94c0,2.16-1.52,3.93-3.46,3.93ZM26.39,25.41c-1.9,0-3.46-1.77-3.46-3.93s1.52-3.94,3.46-3.94,3.49,1.77,3.46,3.94c0,2.16-1.52,3.93-3.46,3.93Z"}),a.name=="Github"&&M.jsx("path",{className:"social_icon_fg",d:"M19.9,1.55C9.52,1.55,1.12,10.01,1.12,20.47c0,8.36,5.38,15.44,12.84,17.95.93.19,1.27-.41,1.27-.91,0-.44-.03-1.94-.03-3.51-5.22,1.13-6.31-2.26-6.31-2.26-.84-2.19-2.08-2.76-2.08-2.76-1.71-1.16.12-1.16.12-1.16,1.9.13,2.89,1.94,2.89,1.94,1.68,2.88,4.38,2.07,5.47,1.57.16-1.22.65-2.07,1.18-2.54-4.17-.44-8.55-2.07-8.55-9.33,0-2.07.75-3.76,1.93-5.07-.19-.47-.84-2.41.19-5.01,0,0,1.59-.5,5.16,1.94,1.53-.41,3.11-.62,4.7-.63,1.59,0,3.2.22,4.69.63,3.58-2.44,5.16-1.94,5.16-1.94,1.03,2.6.37,4.54.19,5.01,1.21,1.32,1.93,3.01,1.93,5.07,0,7.27-4.38,8.86-8.58,9.33.68.6,1.27,1.72,1.27,3.51,0,2.54-.03,4.57-.03,5.2,0,.5.34,1.1,1.27.91,7.46-2.51,12.84-9.59,12.84-17.95.03-10.46-8.4-18.92-18.75-18.92Z"})]})}),fw=()=>{const a=[{name:"Instagram",url:yp},{name:"Github",url:mu}];return M.jsx("div",{className:"socialbrick-outer",children:M.jsxs("div",{className:"socialbrick-inner",children:[M.jsx("style",{children:`
                        .glow-button:hover svg {
                            filter: drop-shadow(0 0 10px rgba(255, 255, 255, .5)) drop-shadow(0 0 10px rgba(255, 255, 255, .5));
                        }
                        .glow-button:active svg {
                            filter: none;
                        }
                    `}),a.map((e,n)=>M.jsx("a",{"aria-label":`Our ${e.name}`,href:e.url,target:"_blank",className:"glow-button socialbrick-link",children:M.jsx(uw,{name:e.name})},n))]})})};function hw(a){return a?a.toLowerCase().split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "):""}const Is=()=>M.jsx("span",{className:`${al} ml-5 mr-5`,children:"|"}),rr=a=>M.jsx("li",{style:{transition:"opacity .1s .1s"},className:`outline_nav_elem_text ${al} hover:underline hover:opacity-100`,children:M.jsxs(Wr,{to:`${a.name}`,children:[M.jsx("style",{children:`
 
        
        `}),hw(a.name)]})}),dw=a=>a.path=="/"?M.jsxs(M.Fragment,{children:[M.jsx("nav",{className:"z-10 w-ful",children:M.jsxs("ul",{style:{fontFamily:jr},className:"list-none p-0 pb-4 m-0 flex justify-center text-xl sm:text-3xl md:text-5xl",children:[M.jsx(rr,{name:"about"}),M.jsx(Is,{}),M.jsx(rr,{name:"art"}),M.jsx(Is,{}),M.jsx(rr,{name:"projects"}),M.jsx(Is,{}),M.jsx(rr,{name:"contact"})]})}),M.jsxs("header",{style:{marginBottom:"70px"},children:[M.jsx("h1",{className:"text-center text-white",style:{fontFamily:ki,fontSize:a.width<500?"3rem":"6rem",fontWeight:"bold"},children:cl}),M.jsxs("p",{className:`${al} text-5xl text-center`,style:{fontFamily:jr},children:[M.jsx("span",{className:"block",children:"Engineering Student,"}),M.jsx("span",{children:"Interdisciplinary Creative & Programmer"})]}),M.jsx("p",{style:{fontFamily:Gi},className:`text-center p-4 ${al} text-3xl`,children:"Los Angeles, CA"}),M.jsx(fw,{})]})]}):M.jsxs(M.Fragment,{children:[M.jsx("nav",{className:"z-10 w-full mb-5",children:M.jsxs("ul",{style:{fontFamily:jr},className:"list-none p-0 m-0 flex sm:text-2xl md:text-5xl",children:[M.jsx(rr,{name:"about"}),M.jsx(Is,{}),M.jsx(rr,{name:"art"}),M.jsx(Is,{}),M.jsx(rr,{name:"projects"}),M.jsx(Is,{}),M.jsx(rr,{name:"contact"})]})}),M.jsxs("header",{style:{marginBottom:"70px"},children:[M.jsx(Wr,{to:"/",children:M.jsx("h1",{className:"text-white",style:{fontFamily:ki,fontSize:a.width<500?"1rem":"2rem",fontWeight:"bold"},children:cl})}),M.jsx("p",{className:`${al} text-3xl text-left`,style:{fontFamily:jr},children:"Interdisciplinary Creative & Programmer"})]})]}),pw=()=>M.jsx("img",{className:"w-30 ",src:"./LinkedIn_Logo.svg"}),mw=a=>{let e="";const n=new Map(a.locationData.map(l=>[l.url.replace(/^\//,""),l.title])),s=l=>l.replace(/[_-]/g," ").trim().split(" ").filter(Boolean).map(f=>f.charAt(0).toUpperCase()+f.slice(1)).join(" ");return M.jsxs(M.Fragment,{children:[M.jsx("style",{children:`
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

    `}),M.jsx("div",{id:"location-bar",children:a.split().map((l,c)=>{e+="/"+l;const f=n.get(l)??s(l);return M.jsxs("span",{children:[M.jsx(Wr,{to:e,children:M.jsx("button",{className:"location-bar-bttn",children:f})}),c<a.split().length-1&&M.jsx("span",{className:"location-bar-arrow",children:">"})]},`${c}-location`)})})]})},gw=()=>M.jsxs("svg",{id:"Layer_6","data-name":"Layer 6",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 1050 990",children:[M.jsx("defs",{children:M.jsx("style",{children:`
      .cls-1 {
        fill: #0e1a34;
      }

      .cls-2 {
        fill: #0b0f17;
      }

      .cls-3 {
        fill: #1e2b5a;
      }
      `})}),M.jsx("image",{width:"149",height:"149",transform:"translate(-50, -50) scale(9.2)",xlinkHref:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAACVCAYAAABRorhPAAAACXBIWXMAAAGJAAABiQGeLhE1AAABlklEQVR4nO3SoRGDAAAEQcBGIOm/PCQCHQoI8iYEsitfvbhhAAAAfs54Nr7m5f3tI9zTvq0fDU1XHOHZREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5EQFAADwDw4ePAUWKoYQ6wAAAABJRU5ErkJggg=="}),M.jsx("polygon",{className:"cls-3",transform:"translate(-20,0)",points:"1103.99 82.8 1103.99 967.01 1089.6 968.46 1089.61 960.77 1081.92 960.78 1081.93 954.05 1075.2 954.07 1075.21 946.38 1060.81 946.38 1060.82 939.66 1054.03 939.25 1053.14 931.98 1046.41 932 1046.42 925.27 1032.02 925.27 1032.03 917.59 1024.34 917.6 1024.35 910.87 1010.85 910.46 1009.95 903.2 995.56 903.2 995.56 896.48 982.06 896.07 981.17 888.81 974.44 888.82 974.45 882.09 960.05 882.09 960.05 874.42 945.66 874.42 945.66 867.7 925.03 867.7 923.59 860.02 909.19 860.02 909.19 853.31 888.08 853.31 888.08 845.63 873.69 845.63 873.69 838.91 844.9 838.91 844.9 831.24 816.11 831.24 816.11 824.52 766.69 824.52 765.25 816.85 707.68 816.85 707.68 824.52 664.49 824.52 664.49 831.24 628.99 831.24 627.55 838.91 600.2 838.91 600.2 845.63 571.41 845.63 569.97 853.31 542.62 853.31 542.62 860.02 513.84 860.02 512.4 867.7 485.05 867.7 485.05 874.42 456.26 874.42 454.82 882.09 427.47 882.09 427.47 888.81 405.4 888.81 405.4 896.49 376.61 896.49 376.61 903.2 347.82 903.2 347.82 910.88 326.71 910.88 326.71 917.6 297.92 917.6 296.49 925.27 269.14 925.27 269.14 931.99 247.07 931.99 247.07 939.67 218.28 939.67 218.28 946.38 197.17 946.38 195.73 954.06 175.09 954.06 175.09 960.78 146.31 960.78 146.31 968.45 125.2 968.45 125.2 975.17 96.41 975.17 94.97 982.85 74.34 982.85 74.34 989.56 53.22 989.56 51.79 997.24 31.15 997.24 31.15 1003.96 16.76 1003.96 16.76 788.06 10.04 788.06 10.04 148.05 37.39 148.05 38.83 140.37 67.62 140.37 67.62 133.65 103.12 133.65 103.12 125.98 131.91 125.98 131.91 119.26 175.09 119.26 175.09 111.58 218.28 111.58 218.28 104.87 384.29 104.87 384.29 111.58 413.08 111.58 413.08 119.26 427.47 119.26 427.47 125.98 448.58 125.98 449.48 133.23 462.98 133.65 462.98 140.37 477.37 140.37 478.27 147.63 485.05 148.04 485.05 154.76 499.44 154.76 499.44 162.44 513.84 162.44 513.83 169.16 520.56 169.15 521.45 176.41 534.95 176.83 534.94 183.55 542.63 183.54 542.62 191.23 557.02 191.23 557.01 197.95 563.74 197.94 564.64 205.2 578.14 205.61 578.13 212.34 592.52 212.34 593.42 219.59 606.92 220.01 606.92 226.73 628.99 226.73 628.99 234.4 713.91 234.4 715.35 226.73 744.14 226.73 744.14 220.01 771.49 220.01 772.93 212.34 794.04 212.34 794.04 205.62 814.67 205.62 816.11 197.94 837.22 197.94 837.22 191.23 857.86 191.23 859.3 183.55 873.69 183.55 873.69 176.83 894.8 176.83 894.8 169.16 909.19 169.16 909.19 162.44 929.83 162.44 931.27 154.76 945.66 154.76 945.65 148.04 959.15 147.63 960.05 140.37 981.17 140.37 981.17 133.65 995.56 133.65 995.56 125.98 1009.95 125.98 1009.95 119.26 1024.35 119.26 1024.35 111.58 1038.74 111.58 1038.74 104.87 1053.14 104.87 1053.14 97.19 1067.53 97.19 1067.53 90.47 1081.92 90.47 1081.92 82.8 1103.99 82.8"}),M.jsx("polygon",{className:"cls-1",transform:"translate(-20,0)",points:"472.49 231.55 472.49 238.74 508.47 238.74 508.47 245.94 537.26 245.94 537.26 253.13 558.85 253.13 558.85 260.33 580.44 260.33 580.44 267.52 594.84 267.52 594.84 274.72 609.23 274.72 609.23 281.92 623.63 281.92 623.63 289.11 645.22 289.11 645.22 296.31 659.61 296.31 659.61 303.5 681.2 303.5 681.2 310.7 695.6 310.7 695.6 317.89 724.39 317.89 724.39 325.09 767.57 325.09 767.57 332.28 795.64 332.28 796.36 325.09 846.02 325.09 846.74 317.89 882 317.89 882.72 310.7 910.79 310.7 911.51 303.5 939.58 303.5 940.3 296.31 968.37 296.31 969.08 289.11 997.15 289.11 997.87 281.92 1018.74 281.92 1019.46 274.72 1047.53 274.72 1048.25 267.52 1069.12 267.52 1069.84 260.33 1090.71 260.33 1091.43 253.13 1105.83 253.13 1105.83 799.26 1105.11 799.98 1084.24 799.98 1084.24 792.79 1048.25 792.79 1048.25 785.59 997.87 785.59 997.87 778.4 933.1 778.4 933.1 771.2 789.16 771.2 788.44 778.4 738.78 778.4 738.06 785.59 695.6 785.59 694.88 792.79 645.22 792.79 644.5 799.98 602.04 799.98 601.32 807.18 558.85 807.18 558.13 814.37 515.67 814.37 514.95 821.57 472.49 821.57 471.77 828.77 429.31 828.77 428.59 835.96 393.32 835.96 392.6 843.16 350.14 843.16 349.42 850.35 306.96 850.35 306.24 857.55 270.97 857.55 270.25 864.74 227.79 864.74 227.07 871.94 191.8 871.94 191.08 879.13 148.62 879.13 147.9 886.33 112.64 886.33 111.92 893.52 76.65 893.52 75.93 900.72 33.47 900.72 32.75 907.91 11.88 907.91 11.88 274.72 18.87 274.27 19.08 267.52 61.54 267.52 62.26 260.33 104.72 260.33 105.44 253.13 147.9 253.13 148.62 245.94 198.28 245.94 199 238.74 255.86 238.74 256.58 231.55 472.49 231.55"}),M.jsx("polygon",{className:"cls-2",transform:"translate(-20,0)",points:"1108.35 316.15 1108.35 553.56 1101.15 553.56 1101.15 769.38 1086.76 769.38 1086.76 762.19 1050.77 762.19 1050.77 754.99 1021.98 754.99 1021.98 747.8 1000.39 747.8 1000.39 740.6 978.8 740.6 978.8 733.41 964.41 733.41 964.41 726.22 942.82 726.22 942.82 719.02 928.42 719.02 928.42 711.83 914.03 711.83 914.03 704.63 899.63 704.63 899.63 697.44 878.04 697.44 878.04 690.25 863.65 690.25 863.65 683.05 849.25 683.05 849.25 675.86 834.86 675.86 834.86 668.66 813.27 668.66 813.27 661.47 798.88 661.47 798.88 654.27 784.48 654.27 784.48 647.08 762.89 647.08 762.89 639.89 748.5 639.89 748.5 632.69 726.9 632.69 726.9 625.5 712.51 625.5 712.51 618.3 690.92 618.3 690.92 611.11 669.33 611.11 669.33 603.92 640.54 603.92 640.54 596.72 611.75 596.72 611.75 589.53 582.96 589.53 582.96 582.33 554.17 582.33 554.17 575.14 510.99 575.14 510.99 567.95 446.22 567.95 446.22 560.75 352.66 560.75 352.66 567.95 323.87 567.95 323.87 575.14 309.47 575.14 309.47 582.33 295.08 582.33 295.08 589.53 280.69 589.53 280.69 596.72 266.29 596.72 266.29 603.92 251.9 603.92 251.9 611.11 244.7 611.11 244.7 618.3 230.31 618.3 230.31 625.5 223.11 625.5 223.11 632.69 208.72 632.69 208.72 639.89 201.52 639.89 201.52 647.08 194.32 647.08 194.32 654.27 179.93 654.27 179.93 661.47 172.73 661.47 172.73 668.66 165.53 668.66 165.53 675.86 158.34 675.86 158.34 683.05 151.14 683.05 151.14 690.25 136.74 690.25 136.74 697.44 129.55 697.44 129.55 704.63 122.35 704.63 122.35 711.83 115.15 711.83 115.15 719.02 107.96 719.02 107.96 726.22 100.76 726.22 100.76 733.41 93.56 733.41 93.56 740.6 86.36 740.6 86.36 747.8 79.17 747.8 79.17 754.99 71.97 754.99 71.97 762.19 64.77 762.19 64.77 769.38 57.58 769.38 57.58 776.57 50.38 776.57 50.38 783.77 43.18 783.77 43.18 798.16 35.99 798.16 35.99 805.35 28.79 805.35 28.79 812.54 21.59 812.54 21.59 819.74 14.39 819.74 14.39 826.93 0 826.93 0 819.74 7.2 819.74 7.2 366.51 35.99 366.51 35.99 373.71 50.38 373.71 50.38 380.9 71.97 380.9 71.97 388.09 93.56 388.09 93.56 395.29 115.15 395.29 115.15 402.48 136.74 402.48 136.74 409.68 158.34 409.68 158.34 416.87 179.93 416.87 179.93 424.06 208.72 424.06 208.72 431.26 237.5 431.26 237.5 438.45 266.29 438.45 266.29 445.65 302.28 445.65 302.28 452.84 352.66 452.84 352.66 460.03 532.58 460.03 532.58 452.84 590.16 452.84 590.16 445.65 633.34 445.65 633.34 438.45 662.13 438.45 662.13 431.26 690.92 431.26 690.92 424.06 719.71 424.06 719.71 416.87 741.3 416.87 741.3 409.68 762.89 409.68 762.89 402.48 784.48 402.48 784.48 395.29 806.07 395.29 806.07 388.09 827.66 388.09 827.66 380.9 842.06 380.9 842.06 373.71 863.65 373.71 863.65 366.51 885.24 366.51 885.24 359.32 899.63 359.32 899.63 352.12 921.23 352.12 921.23 344.93 942.82 344.93 942.82 337.74 971.61 337.74 971.61 330.54 1000.39 330.54 1000.39 323.35 1043.58 323.35 1043.58 316.15 1108.35 316.15"})]});/**
 * postprocessing v6.37.4 build Sat Jun 07 2025
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2025 Raoul van Rüschen
 * @license Zlib
 */var cd=1/1e3,vw=1e3,_w=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(a){typeof document<"u"&&document.hidden!==void 0&&(a?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=a)}get delta(){return this._delta*cd}get fixedDelta(){return this._fixedDelta*cd}set fixedDelta(a){this._fixedDelta=a*vw}get elapsed(){return this._elapsed*cd}update(a){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(a!==void 0?a:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(a){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},xw=(()=>{const a=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),n=new Ta;return n.setAttribute("position",new yi(a,3)),n.setAttribute("uv",new yi(e,2)),n})(),Di=class tp{static get fullscreenGeometry(){return xw}constructor(e="Pass",n=new pu,s=new gp){this.name=e,this.renderer=null,this.scene=n,this.camera=s,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const n=this.fullscreenMaterial;n!==null&&(n.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let n=this.screen;n!==null?n.material=e:(n=new xi(tp.fullscreenGeometry,e),n.frustumCulled=!1,this.scene===null&&(this.scene=new pu),this.scene.add(n),this.screen=n)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,n=ml){}render(e,n,s,l,c){throw new Error("Render method not implemented!")}setSize(e,n){}initialize(e,n,s){}dispose(){for(const e of Object.keys(this)){const n=this[e];(n instanceof Gn||n instanceof Ks||n instanceof zn||n instanceof tp)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},yw=class extends Di{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(a,e,n,s,l){const c=a.state.buffers.stencil;c.setLocked(!1),c.setTest(!1)}},Sw=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <colorspace_fragment>
#include <dithering_fragment>
}`,ix="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",ax=class extends Vn{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new Nt(null),opacity:new Nt(1)},blending:Jn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Sw,vertexShader:ix})}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setInputBuffer(a){this.uniforms.inputBuffer.value=a}getOpacity(a){return this.uniforms.opacity.value}setOpacity(a){this.uniforms.opacity.value=a}},Ew=class extends Di{constructor(a,e=!0){super("CopyPass"),this.fullscreenMaterial=new ax,this.needsSwap=!1,this.renderTarget=a,a===void 0&&(this.renderTarget=new Gn(1,1,{minFilter:Qn,magFilter:Qn,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(a){this.autoResize=a}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(a){this.autoResize=a}render(a,e,n,s,l){this.fullscreenMaterial.inputBuffer=e.texture,a.setRenderTarget(this.renderToScreen?null:this.renderTarget),a.render(this.scene,this.camera)}setSize(a,e){this.autoResize&&this.renderTarget.setSize(a,e)}initialize(a,e,n){n!==void 0&&(this.renderTarget.texture.type=n,n!==In?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":a!==null&&a.outputColorSpace===Ht&&(this.renderTarget.texture.colorSpace=Ht))}},r_=new Lt,rx=class extends Di{constructor(a=!0,e=!0,n=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=a,this.depth=e,this.stencil=n,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(a,e,n){this.color=a,this.depth=e,this.stencil=n}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(a){this.overrideClearColor=a}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(a){this.overrideClearAlpha=a}render(a,e,n,s,l){const c=this.overrideClearColor,f=this.overrideClearAlpha,h=a.getClearAlpha(),p=c!==null,m=f>=0;p?(a.getClearColor(r_),a.setClearColor(c,m?f:h)):m&&a.setClearAlpha(f),a.setRenderTarget(this.renderToScreen?null:e),a.clear(this.color,this.depth,this.stencil),p?a.setClearColor(r_,h):m&&a.setClearAlpha(h)}},Mw=class extends Di{constructor(a,e){super("MaskPass",a,e),this.needsSwap=!1,this.clearPass=new rx(!1,!1,!0),this.inverse=!1}set mainScene(a){this.scene=a}set mainCamera(a){this.camera=a}get inverted(){return this.inverse}set inverted(a){this.inverse=a}get clear(){return this.clearPass.enabled}set clear(a){this.clearPass.enabled=a}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(a){this.inverted=a}render(a,e,n,s,l){const c=a.getContext(),f=a.state.buffers,h=this.scene,p=this.camera,m=this.clearPass,g=this.inverted?0:1,_=1-g;f.color.setMask(!1),f.depth.setMask(!1),f.color.setLocked(!0),f.depth.setLocked(!0),f.stencil.setTest(!0),f.stencil.setOp(c.REPLACE,c.REPLACE,c.REPLACE),f.stencil.setFunc(c.ALWAYS,g,4294967295),f.stencil.setClear(_),f.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?m.render(a,null):(m.render(a,e),m.render(a,n))),this.renderToScreen?(a.setRenderTarget(null),a.render(h,p)):(a.setRenderTarget(e),a.render(h,p),a.setRenderTarget(n),a.render(h,p)),f.color.setLocked(!1),f.depth.setLocked(!1),f.stencil.setLocked(!1),f.stencil.setFunc(c.EQUAL,1,4294967295),f.stencil.setOp(c.KEEP,c.KEEP,c.KEEP),f.stencil.setLocked(!0)}},bw=class{constructor(a=null,{depthBuffer:e=!0,stencilBuffer:n=!1,multisampling:s=0,frameBufferType:l}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,n,l,s),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new Ew,this.depthTexture=null,this.passes=[],this.timer=new _w,this.autoRenderToScreen=!0,this.setRenderer(a)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(a){const e=this.inputBuffer,n=this.multisampling;n>0&&a>0?(this.inputBuffer.samples=a,this.outputBuffer.samples=a,this.inputBuffer.dispose(),this.outputBuffer.dispose()):n!==a&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,a),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(a){if(this.renderer=a,a!==null){const e=a.getSize(new ot),n=a.getContext().getContextAttributes().alpha,s=this.inputBuffer.texture.type;s===In&&a.outputColorSpace===Ht&&(this.inputBuffer.texture.colorSpace=Ht,this.outputBuffer.texture.colorSpace=Ht,this.inputBuffer.dispose(),this.outputBuffer.dispose()),a.autoClear=!1,this.setSize(e.width,e.height);for(const l of this.passes)l.initialize(a,n,s)}}replaceRenderer(a,e=!0){const n=this.renderer,s=n.domElement.parentNode;return this.setRenderer(a),e&&s!==null&&(s.removeChild(n.domElement),s.appendChild(a.domElement)),n}createDepthTexture(){const a=this.depthTexture=new vp;return this.inputBuffer.depthTexture=a,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(a.format=Ws,a.type=Xs):a.type=cr,a}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const a of this.passes)a.setDepthTexture(null)}}createBuffer(a,e,n,s){const l=this.renderer,c=l===null?new ot:l.getDrawingBufferSize(new ot),f={minFilter:Qn,magFilter:Qn,stencilBuffer:e,depthBuffer:a,type:n},h=new Gn(c.width,c.height,f);return s>0&&(h.ignoreDepthForMultisampleCopy=!1,h.samples=s),n===In&&l!==null&&l.outputColorSpace===Ht&&(h.texture.colorSpace=Ht),h.texture.name="EffectComposer.Buffer",h.texture.generateMipmaps=!1,h}setMainScene(a){for(const e of this.passes)e.mainScene=a}setMainCamera(a){for(const e of this.passes)e.mainCamera=a}addPass(a,e){const n=this.passes,s=this.renderer,l=s.getDrawingBufferSize(new ot),c=s.getContext().getContextAttributes().alpha,f=this.inputBuffer.texture.type;if(a.setRenderer(s),a.setSize(l.width,l.height),a.initialize(s,c,f),this.autoRenderToScreen&&(n.length>0&&(n[n.length-1].renderToScreen=!1),a.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?n.splice(e,0,a):n.push(a),this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!0),a.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const h=this.createDepthTexture();for(a of n)a.setDepthTexture(h)}else a.setDepthTexture(this.depthTexture)}removePass(a){const e=this.passes,n=e.indexOf(a);if(n!==-1&&e.splice(n,1).length>0){if(this.depthTexture!==null){const c=(h,p)=>h||p.needsDepthTexture;e.reduce(c,!1)||(a.getDepthTexture()===this.depthTexture&&a.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&n===e.length&&(a.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const a=this.passes;this.deleteDepthTexture(),a.length>0&&(this.autoRenderToScreen&&(a[a.length-1].renderToScreen=!1),this.passes=[])}render(a){const e=this.renderer,n=this.copyPass;let s=this.inputBuffer,l=this.outputBuffer,c=!1,f,h,p;a===void 0&&(this.timer.update(),a=this.timer.getDelta());for(const m of this.passes)m.enabled&&(m.render(e,s,l,a,c),m.needsSwap&&(c&&(n.renderToScreen=m.renderToScreen,f=e.getContext(),h=e.state.buffers.stencil,h.setFunc(f.NOTEQUAL,1,4294967295),n.render(e,s,l,a,c),h.setFunc(f.EQUAL,1,4294967295)),p=s,s=l,l=p),m instanceof Mw?c=!0:m instanceof yw&&(c=!1))}setSize(a,e,n){const s=this.renderer,l=s.getSize(new ot);(a===void 0||e===void 0)&&(a=l.width,e=l.height),(l.width!==a||l.height!==e)&&s.setSize(a,e,n);const c=s.getDrawingBufferSize(new ot);this.inputBuffer.setSize(c.width,c.height),this.outputBuffer.setSize(c.width,c.height);for(const f of this.passes)f.setSize(c.width,c.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const a of this.passes)a.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),Di.fullscreenGeometry.dispose()}},Xr={NONE:0,DEPTH:1,CONVOLUTION:2},Rt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},Tw=class{constructor(){this.shaderParts=new Map([[Rt.FRAGMENT_HEAD,null],[Rt.FRAGMENT_MAIN_UV,null],[Rt.FRAGMENT_MAIN_IMAGE,null],[Rt.VERTEX_HEAD,null],[Rt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Xr.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=ur}},ud=!1,s_=class{constructor(a=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(a),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let n;if(e.material.flatShading)switch(e.material.side){case ci:n=this.materialsFlatShadedDoubleSide;break;case Mn:n=this.materialsFlatShadedBackSide;break;default:n=this.materialsFlatShaded;break}else switch(e.material.side){case ci:n=this.materialsDoubleSide;break;case Mn:n=this.materialsBackSide;break;default:n=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=n[2]:e.isInstancedMesh?e.material=n[1]:e.material=n[0],++this.meshCount}}}cloneMaterial(a){if(!(a instanceof Vn))return a.clone();const e=a.uniforms,n=new Map;for(const l in e){const c=e[l].value;c.isRenderTargetTexture&&(e[l].value=null,n.set(l,c))}const s=a.clone();for(const l of n)e[l[0]].value=l[1],s.uniforms[l[0]].value=l[1];return s}setMaterial(a){if(this.disposeMaterials(),this.material=a,a!==null){const e=this.materials=[this.cloneMaterial(a),this.cloneMaterial(a),this.cloneMaterial(a)];for(const n of e)n.uniforms=Object.assign({},a.uniforms),n.side=Ea;e[2].skinning=!0,this.materialsBackSide=e.map(n=>{const s=this.cloneMaterial(n);return s.uniforms=Object.assign({},a.uniforms),s.side=Mn,s}),this.materialsDoubleSide=e.map(n=>{const s=this.cloneMaterial(n);return s.uniforms=Object.assign({},a.uniforms),s.side=ci,s}),this.materialsFlatShaded=e.map(n=>{const s=this.cloneMaterial(n);return s.uniforms=Object.assign({},a.uniforms),s.flatShading=!0,s}),this.materialsFlatShadedBackSide=e.map(n=>{const s=this.cloneMaterial(n);return s.uniforms=Object.assign({},a.uniforms),s.flatShading=!0,s.side=Mn,s}),this.materialsFlatShadedDoubleSide=e.map(n=>{const s=this.cloneMaterial(n);return s.uniforms=Object.assign({},a.uniforms),s.flatShading=!0,s.side=ci,s})}}render(a,e,n){const s=a.shadowMap.enabled;if(a.shadowMap.enabled=!1,ud){const l=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),a.render(e,n);for(const c of l)c[0].material=c[1];this.meshCount!==l.size&&l.clear()}else{const l=e.overrideMaterial;e.overrideMaterial=this.material,a.render(e,n),e.overrideMaterial=l}a.shadowMap.enabled=s}disposeMaterials(){if(this.material!==null){const a=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of a)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return ud}static set workaroundEnabled(a){ud=a}},sr=-1,Fi=class extends ba{constructor(a,e=sr,n=sr,s=1){super(),this.resizable=a,this.baseSize=new ot(1,1),this.preferredSize=new ot(e,n),this.target=this.preferredSize,this.s=s,this.effectiveSize=new ot,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const a=this.baseSize,e=this.preferredSize,n=this.effectiveSize,s=this.scale;e.width!==sr?n.width=e.width:e.height!==sr?n.width=Math.round(e.height*(a.width/Math.max(a.height,1))):n.width=Math.round(a.width*s),e.height!==sr?n.height=e.height:e.width!==sr?n.height=Math.round(e.width/Math.max(a.width/Math.max(a.height,1),1)):n.height=Math.round(a.height*s)}get width(){return this.effectiveSize.width}set width(a){this.preferredWidth=a}get height(){return this.effectiveSize.height}set height(a){this.preferredHeight=a}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(a){this.s!==a&&(this.s=a,this.preferredSize.setScalar(sr),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(a){this.scale=a}get baseWidth(){return this.baseSize.width}set baseWidth(a){this.baseSize.width!==a&&(this.baseSize.width=a,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(a){this.baseWidth=a}get baseHeight(){return this.baseSize.height}set baseHeight(a){this.baseSize.height!==a&&(this.baseSize.height=a,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(a){this.baseHeight=a}setBaseSize(a,e){(this.baseSize.width!==a||this.baseSize.height!==e)&&(this.baseSize.set(a,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(a){this.preferredSize.width!==a&&(this.preferredSize.width=a,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(a){this.preferredWidth=a}get preferredHeight(){return this.preferredSize.height}set preferredHeight(a){this.preferredSize.height!==a&&(this.preferredSize.height=a,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(a){this.preferredHeight=a}setPreferredSize(a,e){(this.preferredSize.width!==a||this.preferredSize.height!==e)&&(this.preferredSize.set(a,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(a){this.s=a.scale,this.baseSize.set(a.baseWidth,a.baseHeight),this.preferredSize.set(a.preferredWidth,a.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return sr}},vt={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},Aw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y,opacity);}",ww="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,min(y.a,opacity));}",Rw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y)*0.5,opacity);}",Cw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.rg,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",Dw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(step(0.0,y)*(1.0-min(vec4(1.0),(1.0-x)/y)),vec4(1.0),step(1.0,x));return mix(x,z,opacity);}",Uw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=step(0.0,x)*mix(min(vec4(1.0),x/max(1.0-y,1e-9)),vec4(1.0),step(1.0,y));return mix(x,z,opacity);}",Nw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x,y),opacity);}",Lw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,abs(x-y),opacity);}",Ow="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x/max(y,1e-12),opacity);}",Pw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y-2.0*x*y),opacity);}",Bw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 a=min(x,1.0),b=min(y,1.0);vec4 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,y));return mix(x,z,opacity);}",zw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,step(1.0,x+y),opacity);}",Iw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.r,xHSL.gb));return vec4(mix(x.rgb,z,opacity),y.a);}",Fw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-y,opacity);}",Hw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y*(1.0-x),opacity);}",Gw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x,y),opacity);}",Vw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(y+x-1.0,0.0,1.0),opacity);}",kw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x+y,1.0),opacity);}",jw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(2.0*y+x-1.0,0.0,1.0),opacity);}",Xw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.rg,yHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",Ww="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x*y,opacity);}",qw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-abs(1.0-x-y),opacity);}",Yw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}",Zw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(2.0*y*x,1.0-2.0*(1.0-y)*(1.0-x),step(0.5,x));return mix(x,z,opacity);}",Kw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 z=mix(mix(y2,x,step(0.5*x,y)),max(vec4(0.0),y2-1.0),step(x,(y2-1.0)));return mix(x,z,opacity);}",Qw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(min(x*x/max(1.0-y,1e-12),1.0),y,step(1.0,y));return mix(x,z,opacity);}",Jw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.r,yHSL.g,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",$w="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y-min(x*y,1.0),opacity);}",eR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 w=step(0.5,y);vec4 z=mix(x-(1.0-y2)*x*(1.0-x),mix(x+(y2-1.0)*(sqrt(x)-x),x+(y2-1.0)*x*((16.0*x-12.0)*x+3.0),w*(1.0-step(0.25,x))),w);return mix(x,z,opacity);}",tR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",nR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x+y-1.0,0.0),opacity);}",iR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(max(1.0-min((1.0-x)/(2.0*y),1.0),0.0),min(x/(2.0*(1.0-y)),1.0),step(0.5,y));return mix(x,z,opacity);}",aR=new Map([[vt.ADD,Aw],[vt.ALPHA,ww],[vt.AVERAGE,Rw],[vt.COLOR,Cw],[vt.COLOR_BURN,Dw],[vt.COLOR_DODGE,Uw],[vt.DARKEN,Nw],[vt.DIFFERENCE,Lw],[vt.DIVIDE,Ow],[vt.DST,null],[vt.EXCLUSION,Pw],[vt.HARD_LIGHT,Bw],[vt.HARD_MIX,zw],[vt.HUE,Iw],[vt.INVERT,Fw],[vt.INVERT_RGB,Hw],[vt.LIGHTEN,Gw],[vt.LINEAR_BURN,Vw],[vt.LINEAR_DODGE,kw],[vt.LINEAR_LIGHT,jw],[vt.LUMINOSITY,Xw],[vt.MULTIPLY,Ww],[vt.NEGATION,qw],[vt.NORMAL,Yw],[vt.OVERLAY,Zw],[vt.PIN_LIGHT,Kw],[vt.REFLECT,Qw],[vt.SATURATION,Jw],[vt.SCREEN,$w],[vt.SOFT_LIGHT,eR],[vt.SRC,tR],[vt.SUBTRACT,nR],[vt.VIVID_LIGHT,iR]]),rR=class extends ba{constructor(a,e=1){super(),this._blendFunction=a,this.opacity=new Nt(e)}getOpacity(){return this.opacity.value}setOpacity(a){this.opacity.value=a}get blendFunction(){return this._blendFunction}set blendFunction(a){this._blendFunction=a,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(a){this.blendFunction=a}getShaderCode(){return aR.get(this.blendFunction)}},sR=class extends ba{constructor(a,e,{attributes:n=Xr.NONE,blendFunction:s=vt.NORMAL,defines:l=new Map,uniforms:c=new Map,extensions:f=null,vertexShader:h=null}={}){super(),this.name=a,this.renderer=null,this.attributes=n,this.fragmentShader=e,this.vertexShader=h,this.defines=l,this.uniforms=c,this.extensions=f,this.blendMode=new rR(s),this.blendMode.addEventListener("change",p=>this.setChanged()),this._inputColorSpace=ur,this._outputColorSpace=Ii}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(a){this._inputColorSpace=a,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(a){this._outputColorSpace=a,this.setChanged()}set mainScene(a){}set mainCamera(a){}getName(){return this.name}setRenderer(a){this.renderer=a}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(a){this.attributes=a,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(a){this.fragmentShader=a,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(a){this.vertexShader=a,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(a,e=ml){}update(a,e,n){}setSize(a,e){}initialize(a,e,n){}dispose(){for(const a of Object.keys(this)){const e=this[a];(e instanceof Gn||e instanceof Ks||e instanceof zn||e instanceof Di)&&this[a].dispose()}}},Sp={MEDIUM:2,LARGE:3},oR=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,lR="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",cR=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],uR=class extends Vn{constructor(a=new Qt){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new Nt(null),texelSize:new Nt(new Qt),scale:new Nt(1),kernel:new Nt(0)},blending:Jn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:oR,vertexShader:lR}),this.setTexelSize(a.x,a.y),this.kernelSize=Sp.MEDIUM}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setInputBuffer(a){this.inputBuffer=a}get kernelSequence(){return cR[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(a){this.uniforms.scale.value=a}getScale(){return this.uniforms.scale.value}setScale(a){this.uniforms.scale.value=a}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(a){this.uniforms.kernel.value=a}setKernel(a){this.kernel=a}setTexelSize(a,e){this.uniforms.texelSize.value.set(a,e,a*.5,e*.5)}setSize(a,e){const n=1/a,s=1/e;this.uniforms.texelSize.value.set(n,s,n*.5,s*.5)}},fR=class extends Di{constructor({kernelSize:a=Sp.MEDIUM,resolutionScale:e=.5,width:n=Fi.AUTO_SIZE,height:s=Fi.AUTO_SIZE,resolutionX:l=n,resolutionY:c=s}={}){super("KawaseBlurPass"),this.renderTargetA=new Gn(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const f=this.resolution=new Fi(this,l,c,e);f.addEventListener("change",h=>this.setSize(f.baseWidth,f.baseHeight)),this._blurMaterial=new uR,this._blurMaterial.kernelSize=a,this.copyMaterial=new ax}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(a){this._blurMaterial=a}get dithering(){return this.copyMaterial.dithering}set dithering(a){this.copyMaterial.dithering=a}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(a){this.blurMaterial.kernelSize=a}get width(){return this.resolution.width}set width(a){this.resolution.preferredWidth=a}get height(){return this.resolution.height}set height(a){this.resolution.preferredHeight=a}get scale(){return this.blurMaterial.scale}set scale(a){this.blurMaterial.scale=a}getScale(){return this.blurMaterial.scale}setScale(a){this.blurMaterial.scale=a}getKernelSize(){return this.kernelSize}setKernelSize(a){this.kernelSize=a}getResolutionScale(){return this.resolution.scale}setResolutionScale(a){this.resolution.scale=a}render(a,e,n,s,l){const c=this.scene,f=this.camera,h=this.renderTargetA,p=this.renderTargetB,m=this.blurMaterial,g=m.kernelSequence;let _=e;this.fullscreenMaterial=m;for(let x=0,S=g.length;x<S;++x){const b=(x&1)===0?h:p;m.kernel=g[x],m.inputBuffer=_.texture,a.setRenderTarget(b),a.render(c,f),_=b}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=_.texture,a.setRenderTarget(this.renderToScreen?null:n),a.render(c,f)}setSize(a,e){const n=this.resolution;n.setBaseSize(a,e);const s=n.width,l=n.height;this.renderTargetA.setSize(s,l),this.renderTargetB.setSize(s,l),this.blurMaterial.setSize(a,e)}initialize(a,e,n){n!==void 0&&(this.renderTargetA.texture.type=n,this.renderTargetB.texture.type=n,n!==In?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):a!==null&&a.outputColorSpace===Ht&&(this.renderTargetA.texture.colorSpace=Ht,this.renderTargetB.texture.colorSpace=Ht))}static get AUTO_SIZE(){return Fi.AUTO_SIZE}},hR=`#include <common>
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
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);l*=low*high;
#elif defined(THRESHOLD)
l=smoothstep(threshold,threshold+smoothing,l)*l;
#endif
#ifdef COLOR
gl_FragColor=vec4(texel.rgb*clamp(l,0.0,1.0),l);
#else
gl_FragColor=vec4(l);
#endif
}`,dR=class extends Vn{constructor(a=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:dl.replace(/\D+/g,"")},uniforms:{inputBuffer:new Nt(null),threshold:new Nt(0),smoothing:new Nt(1),range:new Nt(null)},blending:Jn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:hR,vertexShader:ix}),this.colorOutput=a,this.luminanceRange=e}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setInputBuffer(a){this.uniforms.inputBuffer.value=a}get threshold(){return this.uniforms.threshold.value}set threshold(a){this.smoothing>0||a>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=a}getThreshold(){return this.threshold}setThreshold(a){this.threshold=a}get smoothing(){return this.uniforms.smoothing.value}set smoothing(a){this.threshold>0||a>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=a}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(a){this.smoothing=a}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(a){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(a){a?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(a){return this.colorOutput}setColorOutputEnabled(a){this.colorOutput=a}get useRange(){return this.luminanceRange!==null}set useRange(a){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(a){a!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=a,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(a){this.luminanceRange=a}},pR=class extends Di{constructor({renderTarget:a,luminanceRange:e,colorOutput:n,resolutionScale:s=1,width:l=Fi.AUTO_SIZE,height:c=Fi.AUTO_SIZE,resolutionX:f=l,resolutionY:h=c}={}){super("LuminancePass"),this.fullscreenMaterial=new dR(n,e),this.needsSwap=!1,this.renderTarget=a,this.renderTarget===void 0&&(this.renderTarget=new Gn(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const p=this.resolution=new Fi(this,f,h,s);p.addEventListener("change",m=>this.setSize(p.baseWidth,p.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(a,e,n,s,l){const c=this.fullscreenMaterial;c.inputBuffer=e.texture,a.setRenderTarget(this.renderToScreen?null:this.renderTarget),a.render(this.scene,this.camera)}setSize(a,e){const n=this.resolution;n.setBaseSize(a,e),this.renderTarget.setSize(n.width,n.height)}initialize(a,e,n){n!==void 0&&n!==In&&(this.renderTarget.texture.type=n,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},mR=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.0555555
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,gR="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",vR=class extends Vn{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new Nt(null),texelSize:new Nt(new ot)},blending:Jn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:mR,vertexShader:gR})}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setSize(a,e){this.uniforms.texelSize.value.set(1/a,1/e)}},_R=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,xR="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",yR=class extends Vn{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new Nt(null),supportBuffer:new Nt(null),texelSize:new Nt(new ot),radius:new Nt(.85)},blending:Jn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:_R,vertexShader:xR})}set inputBuffer(a){this.uniforms.inputBuffer.value=a}set supportBuffer(a){this.uniforms.supportBuffer.value=a}get radius(){return this.uniforms.radius.value}set radius(a){this.uniforms.radius.value=a}setSize(a,e){this.uniforms.texelSize.value.set(1/a,1/e)}},SR=class extends Di{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new Gn(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new vR,this.upsamplingMaterial=new yR,this.resolution=new ot}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(a){if(this.levels!==a){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let n=0;n<a;++n){const s=e.clone();s.texture.name="Downsampling.Mipmap"+n,this.downsamplingMipmaps.push(s)}this.upsamplingMipmaps.push(e);for(let n=1,s=a-1;n<s;++n){const l=e.clone();l.texture.name="Upsampling.Mipmap"+n,this.upsamplingMipmaps.push(l)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(a){this.upsamplingMaterial.radius=a}render(a,e,n,s,l){const{scene:c,camera:f}=this,{downsamplingMaterial:h,upsamplingMaterial:p}=this,{downsamplingMipmaps:m,upsamplingMipmaps:g}=this;let _=e;this.fullscreenMaterial=h;for(let x=0,S=m.length;x<S;++x){const b=m[x];h.setSize(_.width,_.height),h.inputBuffer=_.texture,a.setRenderTarget(b),a.render(c,f),_=b}this.fullscreenMaterial=p;for(let x=g.length-1;x>=0;--x){const S=g[x];p.setSize(_.width,_.height),p.inputBuffer=_.texture,p.supportBuffer=m[x].texture,a.setRenderTarget(S),a.render(c,f),_=S}}setSize(a,e){const n=this.resolution;n.set(a,e);let s=n.width,l=n.height;for(let c=0,f=this.downsamplingMipmaps.length;c<f;++c)s=Math.round(s*.5),l=Math.round(l*.5),this.downsamplingMipmaps[c].setSize(s,l),c<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[c].setSize(s,l)}initialize(a,e,n){if(n!==void 0){const s=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const l of s)l.texture.type=n;if(n!==In)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(a!==null&&a.outputColorSpace===Ht)for(const l of s)l.texture.colorSpace=Ht}}dispose(){super.dispose();for(const a of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))a.dispose()}},ER=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 texel=texture2D(map,uv);outputColor=vec4(texel.rgb*intensity,texel.a);}`,MR=class extends sR{constructor({blendFunction:a=vt.SCREEN,luminanceThreshold:e=.9,luminanceSmoothing:n=.025,mipmapBlur:s=!1,intensity:l=1,radius:c=.85,levels:f=8,kernelSize:h=Sp.LARGE,resolutionScale:p=.5,width:m=Fi.AUTO_SIZE,height:g=Fi.AUTO_SIZE,resolutionX:_=m,resolutionY:x=g}={}){super("BloomEffect",ER,{blendFunction:a,uniforms:new Map([["map",new Nt(null)],["intensity",new Nt(l)]])}),this.renderTarget=new Gn(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new fR({kernelSize:h}),this.luminancePass=new pR({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=n,this.mipmapBlurPass=new SR,this.mipmapBlurPass.enabled=s,this.mipmapBlurPass.radius=c,this.mipmapBlurPass.levels=f,this.uniforms.get("map").value=s?this.mipmapBlurPass.texture:this.renderTarget.texture;const S=this.resolution=new Fi(this,_,x,p);S.addEventListener("change",b=>this.setSize(S.baseWidth,S.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(a){this.resolution.preferredWidth=a}get height(){return this.resolution.height}set height(a){this.resolution.preferredHeight=a}get dithering(){return this.blurPass.dithering}set dithering(a){this.blurPass.dithering=a}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(a){this.blurPass.kernelSize=a}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(a){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(a){this.uniforms.get("intensity").value=a}getIntensity(){return this.intensity}setIntensity(a){this.intensity=a}getResolutionScale(){return this.resolution.scale}setResolutionScale(a){this.resolution.scale=a}update(a,e,n){const s=this.renderTarget,l=this.luminancePass;l.enabled?(l.render(a,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(a,l.renderTarget):this.blurPass.render(a,l.renderTarget,s)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(a,e):this.blurPass.render(a,e,s)}setSize(a,e){const n=this.resolution;n.setBaseSize(a,e),this.renderTarget.setSize(n.width,n.height),this.blurPass.resolution.copy(n),this.luminancePass.setSize(a,e),this.mipmapBlurPass.setSize(a,e)}initialize(a,e,n){this.blurPass.initialize(a,e,n),this.luminancePass.initialize(a,e,n),this.mipmapBlurPass.initialize(a,e,n),n!==void 0&&(this.renderTarget.texture.type=n,a!==null&&a.outputColorSpace===Ht&&(this.renderTarget.texture.colorSpace=Ht))}},bR=class extends Di{constructor(a,e,n=null){super("RenderPass",a,e),this.needsSwap=!1,this.clearPass=new rx,this.overrideMaterialManager=n===null?null:new s_(n),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(a){this.scene=a}set mainCamera(a){this.camera=a}get renderToScreen(){return super.renderToScreen}set renderToScreen(a){super.renderToScreen=a,this.clearPass.renderToScreen=a}get overrideMaterial(){const a=this.overrideMaterialManager;return a!==null?a.material:null}set overrideMaterial(a){const e=this.overrideMaterialManager;a!==null?e!==null?e.setMaterial(a):this.overrideMaterialManager=new s_(a):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(a){this.overrideMaterial=a}get clear(){return this.clearPass.enabled}set clear(a){this.clearPass.enabled=a}getSelection(){return this.selection}setSelection(a){this.selection=a}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(a){this.ignoreBackground=a}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(a){this.skipShadowMapUpdate=a}getClearPass(){return this.clearPass}render(a,e,n,s,l){const c=this.scene,f=this.camera,h=this.selection,p=f.layers.mask,m=c.background,g=a.shadowMap.autoUpdate,_=this.renderToScreen?null:e;h!==null&&f.layers.set(h.getLayer()),this.skipShadowMapUpdate&&(a.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(c.background=null),this.clearPass.enabled&&this.clearPass.render(a,e),a.setRenderTarget(_),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(a,c,f):a.render(c,f),f.layers.mask=p,c.background=m,a.shadowMap.autoUpdate=g}},TR=`#include <common>
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
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}float getViewZ(const in float depth){
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
}`,AR="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",wR=class extends Vn{constructor(a,e,n,s,l=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:dl.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new Nt(null),depthBuffer:new Nt(null),resolution:new Nt(new ot),texelSize:new Nt(new ot),cameraNear:new Nt(.3),cameraFar:new Nt(1e3),aspect:new Nt(1),time:new Nt(0)},blending:Jn,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:l}),a&&this.setShaderParts(a),e&&this.setDefines(e),n&&this.setUniforms(n),this.copyCameraSettings(s)}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setInputBuffer(a){this.uniforms.inputBuffer.value=a}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(a){this.uniforms.depthBuffer.value=a}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(a){this.defines.DEPTH_PACKING=a.toFixed(0),this.needsUpdate=!0}setDepthBuffer(a,e=ml){this.depthBuffer=a,this.depthPacking=e}setShaderData(a){this.setShaderParts(a.shaderParts),this.setDefines(a.defines),this.setUniforms(a.uniforms),this.setExtensions(a.extensions)}setShaderParts(a){return this.fragmentShader=TR.replace(Rt.FRAGMENT_HEAD,a.get(Rt.FRAGMENT_HEAD)||"").replace(Rt.FRAGMENT_MAIN_UV,a.get(Rt.FRAGMENT_MAIN_UV)||"").replace(Rt.FRAGMENT_MAIN_IMAGE,a.get(Rt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=AR.replace(Rt.VERTEX_HEAD,a.get(Rt.VERTEX_HEAD)||"").replace(Rt.VERTEX_MAIN_SUPPORT,a.get(Rt.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(a){for(const e of a.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(a){for(const e of a.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(a){this.extensions={};for(const e of a)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(a){this.encodeOutput!==a&&(a?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(a){return this.encodeOutput}setOutputEncodingEnabled(a){this.encodeOutput=a}get time(){return this.uniforms.time.value}set time(a){this.uniforms.time.value=a}setDeltaTime(a){this.uniforms.time.value+=a}adoptCameraSettings(a){this.copyCameraSettings(a)}copyCameraSettings(a){a&&(this.uniforms.cameraNear.value=a.near,this.uniforms.cameraFar.value=a.far,a instanceof Kn?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(a,e){const n=this.uniforms;n.resolution.value.set(a,e),n.texelSize.value.set(1/a,1/e),n.aspect.value=a/e}static get Section(){return Rt}};function o_(a,e,n){for(const s of e){const l="$1"+a+s.charAt(0).toUpperCase()+s.slice(1),c=new RegExp("([^\\.])(\\b"+s+"\\b)","g");for(const f of n.entries())f[1]!==null&&n.set(f[0],f[1].replace(c,l))}}function RR(a,e,n){let s=e.getFragmentShader(),l=e.getVertexShader();const c=s!==void 0&&/mainImage/.test(s),f=s!==void 0&&/mainUv/.test(s);if(n.attributes|=e.getAttributes(),s===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(f&&(n.attributes&Xr.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!c&&!f)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const h=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,p=n.shaderParts;let m=p.get(Rt.FRAGMENT_HEAD)||"",g=p.get(Rt.FRAGMENT_MAIN_UV)||"",_=p.get(Rt.FRAGMENT_MAIN_IMAGE)||"",x=p.get(Rt.VERTEX_HEAD)||"",S=p.get(Rt.VERTEX_MAIN_SUPPORT)||"";const b=new Set,w=new Set;if(f&&(g+=`	${a}MainUv(UV);
`,n.uvTransformation=!0),l!==null&&/mainSupport/.test(l)){const L=/mainSupport *\([\w\s]*?uv\s*?\)/.test(l);S+=`	${a}MainSupport(`,S+=L?`vUv);
`:`);
`;for(const D of l.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const U of D[1].split(/\s*,\s*/))n.varyings.add(U),b.add(U),w.add(U);for(const D of l.matchAll(h))w.add(D[1])}for(const L of s.matchAll(h))w.add(L[1]);for(const L of e.defines.keys())w.add(L.replace(/\([\w\s,]*\)/g,""));for(const L of e.uniforms.keys())w.add(L);w.delete("while"),w.delete("for"),w.delete("if"),e.uniforms.forEach((L,D)=>n.uniforms.set(a+D.charAt(0).toUpperCase()+D.slice(1),L)),e.defines.forEach((L,D)=>n.defines.set(a+D.charAt(0).toUpperCase()+D.slice(1),L));const y=new Map([["fragment",s],["vertex",l]]);o_(a,w,n.defines),o_(a,w,y),s=y.get("fragment"),l=y.get("vertex");const v=e.blendMode;if(n.blendModes.set(v.blendFunction,v),c){e.inputColorSpace!==null&&e.inputColorSpace!==n.colorSpace&&(_+=e.inputColorSpace===Ht?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==Ii?n.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(n.colorSpace=e.inputColorSpace);const L=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;_+=`${a}MainImage(color0, UV, `,(n.attributes&Xr.DEPTH)!==0&&L.test(s)&&(_+="depth, ",n.readDepth=!0),_+=`color1);
	`;const D=a+"BlendOpacity";n.uniforms.set(D,v.opacity),_+=`color0 = blend${v.blendFunction}(color0, color1, ${D});

	`,m+=`uniform float ${D};

`}if(m+=s+`
`,l!==null&&(x+=l+`
`),p.set(Rt.FRAGMENT_HEAD,m),p.set(Rt.FRAGMENT_MAIN_UV,g),p.set(Rt.FRAGMENT_MAIN_IMAGE,_),p.set(Rt.VERTEX_HEAD,x),p.set(Rt.VERTEX_MAIN_SUPPORT,S),e.extensions!==null)for(const L of e.extensions)n.extensions.add(L)}}var CR=class extends Di{constructor(a,...e){super("EffectPass"),this.fullscreenMaterial=new wR(null,null,null,a),this.listener=n=>this.handleEvent(n),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(a){for(const e of this.effects)e.mainScene=a}set mainCamera(a){this.fullscreenMaterial.copyCameraSettings(a);for(const e of this.effects)e.mainCamera=a}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(a){this.fullscreenMaterial.encodeOutput=a}get dithering(){return this.fullscreenMaterial.dithering}set dithering(a){const e=this.fullscreenMaterial;e.dithering=a,e.needsUpdate=!0}setEffects(a){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=a.sort((e,n)=>n.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const a=new Tw;let e=0;for(const f of this.effects)if(f.blendMode.blendFunction===vt.DST)a.attributes|=f.getAttributes()&Xr.DEPTH;else{if((a.attributes&f.getAttributes()&Xr.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${f.name})`);RR("e"+e++,f,a)}let n=a.shaderParts.get(Rt.FRAGMENT_HEAD),s=a.shaderParts.get(Rt.FRAGMENT_MAIN_IMAGE),l=a.shaderParts.get(Rt.FRAGMENT_MAIN_UV);const c=/\bblend\b/g;for(const f of a.blendModes.values())n+=f.getShaderCode().replace(c,`blend${f.blendFunction}`)+`
`;(a.attributes&Xr.DEPTH)!==0?(a.readDepth&&(s=`float depth = readDepth(UV);

	`+s),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,a.colorSpace===Ht&&(s+=`color0 = sRGBToLinear(color0);
	`),a.uvTransformation?(l=`vec2 transformedUv = vUv;
`+l,a.defines.set("UV","transformedUv")):a.defines.set("UV","vUv"),a.shaderParts.set(Rt.FRAGMENT_HEAD,n),a.shaderParts.set(Rt.FRAGMENT_MAIN_IMAGE,s),a.shaderParts.set(Rt.FRAGMENT_MAIN_UV,l);for(const[f,h]of a.shaderParts)h!==null&&a.shaderParts.set(f,h.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(a)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(a,e=ml){this.fullscreenMaterial.depthBuffer=a,this.fullscreenMaterial.depthPacking=e;for(const n of this.effects)n.setDepthTexture(a,e)}render(a,e,n,s,l){for(const c of this.effects)c.update(a,e,s);if(!this.skipRendering||this.renderToScreen){const c=this.fullscreenMaterial;c.inputBuffer=e.texture,c.time+=s*this.timeScale,a.setRenderTarget(this.renderToScreen?null:n),a.render(this.scene,this.camera)}}setSize(a,e){this.fullscreenMaterial.setSize(a,e);for(const n of this.effects)n.setSize(a,e)}initialize(a,e,n){this.renderer=a;for(const s of this.effects)s.initialize(a,e,n);this.updateMaterial(),n!==void 0&&n!==In&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const a of this.effects)a.removeEventListener("change",this.listener),a.dispose()}handleEvent(a){switch(a.type){case"change":this.recompile();break}}};const DR=()=>{const{width:a,height:e}=$_(),n=he.useRef(null);return he.useEffect(()=>{const s=new pu,l=new Kn(75,a/e,.1,1e3),c=new J_({alpha:!0});c.setClearColor(0,0),c.setSize(a,e),c.domElement.style.position="absolute",c.domElement.style.top="0",c.domElement.style.left="0",c.domElement.style.zIndex="-1";const f=n.current;f instanceof HTMLElement&&!f.hasChildNodes()&&f.appendChild(c.domElement);const h=new nl;for(let x=0;x<50;x++){const S=.03+Math.random()*.07,b=new _p(S,7,7),w=new xu({color:"white"}),y=new xi(b,w);y.position.x=(Math.random()-.5)*10,y.position.y=(Math.random()-.5)*10,y.position.z=(Math.random()-.5)*10,h.add(y)}s.add(h),l.position.z=5,h.children.forEach(x=>{});const p=new bw(c);p.addPass(new bR(s,l));const m=new MR({intensity:.15,luminanceThreshold:.007,luminanceSmoothing:.2,radius:15}),g=new CR(l,m);g.renderToScreen=!0,p.addPass(g);const _=()=>{requestAnimationFrame(_),h.rotation.x+=89e-6,h.rotation.y+=99e-6,p.render()};return _(),()=>{f&&f.removeChild(c.domElement)}},[a,e]),M.jsx("div",{id:"three_background",style:{position:"fixed",top:0,left:0,width:`${a}px`,height:`${e}px`,overflow:"hidden"},ref:n})},fd=a=>(console.log(a),M.jsx("div",{children:M.jsx(nx,{width:a.width,categories:a.category_array})})),UR=()=>M.jsx("div",{children:M.jsxs(xl,{construction:!0,title:"The Book",children:[M.jsx(Dn,{text:"The Book is a project that I started in highschool. This is an expansive collection of great thoughts, ideas, practices, and philosphies."}),M.jsx(Dn,{text:`
                    Sun Tzu quotes, storytelling ideas from PIXAR, biographical information about great artists and thinkers,
                    reading lists from our planet's great innovative minds, and a mixed-bag of other written ideas.
                    `}),M.jsx(Dn,{text:`
                    After UrFriends is fully migrated to AWS, turning this inspirational collection of highly motivational material into a simple mobile app is up next.
                    `})]})}),or=["https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_ALL_WORKOUTS.png","https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_DATA_BOARD.png","https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_DATA_BOARD_REGRESSION.png","https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_DATA_CHART.png","https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_ORIGIN_SHEET.png","https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_G_SHEET.png","https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_RAW_JSON.png","https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_FILE.jpg"],NR=()=>{const a=ex;return M.jsx(xl,{construction:!0,title:"The Rip Sheet",children:M.jsxs("div",{className:"space-y-8 text-slate-100",children:[M.jsxs("section",{className:"rip-section rip-section--intro",children:[M.jsx(Jc,{children:"RIP Sheet case study"}),M.jsx("div",{className:"relative flex items-center justify-center rounded-2xl border border-dashed border-white/20 bg-slate-800/40 p-6 text-center",children:M.jsxs("div",{children:[M.jsx("p",{className:`text-sm uppercase tracking-[0.3em] ${a}`,children:"Portrait Placeholder"}),M.jsx("p",{className:"mt-3 text-xl font-semibold text-white",children:"Drop a strong bicep portrait here"}),M.jsx("p",{className:"mt-2 text-sm text-slate-300",children:"Suggested: gym setting, clear lighting, confident flex."})]})}),M.jsx(tl,{quote:"In 2018, I decided to learn weightlifting."}),M.jsx("div",{className:a,children:M.jsx(tl,{quote:"Since then, I’ve been developing tools and systems to become stronger and to consistently learn.",sizePreset:"compact"})}),M.jsx(Dn,{text:"In 2018, I set out to learn weightlifting. Over time, through repeated iteration, I built a system I call the RIP Sheet. Early versions failed to track progress and enforce consistency—but I kept refining, testing, and improving. The name is a double entendre: a memento mori and a call to get ripped. Today is the day you make that change—this very rep."}),M.jsx("div",{className:"rip-figure rip-figure--single",children:M.jsx(ar,{variant:"quarter",src:or[4],alt:"Origin version of the RIP sheet layout",figureLabel:"Figure 1",figureCaption:"Early RIP sheet concept and structure.",withMatte:!0,figcaptionClassName:a})})]}),M.jsxs("section",{className:"rip-section rip-section--analog",children:[M.jsx(Jc,{align:"left",children:"Analog beginnings"}),M.jsx(Dn,{text:"The first version of the RIP Sheet was a physical worksheet—a structured attempt to bring discipline into the gym without relying on screens. The layout was clear, but the medium wasn’t. Tracking progress across loose pages quickly became impractical, and paper doesn’t hold up well in a gym environment."}),M.jsx(Dn,{text:"Alongside the sheet, I created a small reference packet for stretching and brought both with me to train."}),M.jsx("div",{className:"rip-figure rip-figure--single",children:M.jsx(ar,{variant:"half",src:or[7],alt:"Original workbook used for tracking workouts in the initial prototyping phase",figureLabel:"Figure 2",figureCaption:"The workbook taken to the gym in the initial prototyping phase.",withMatte:!0,figcaptionClassName:a})}),M.jsx(Dn,{text:"This workbook was the version I brought with me to the gym during early prototyping—an attempt to turn structure into habit. I found keeping track of the physical worksheets and transferring them into a digital format was very inconvenient."})]}),M.jsxs("section",{className:"rip-section rip-section--digital",children:[M.jsx(Jc,{align:"left",children:"From paper to data"}),M.jsx(Dn,{text:"Eventually, I moved to Google Sheets, which made tracking progress far more efficient and reliable allowing me to track every rep I've made since 2022. Because I had already been collecting this data, I was able to analyze it later in a Linear Algebra for Data Science course in 2025."}),M.jsx(Dn,{text:"Processing the data was inconsistent at first, and I experimented with both JavaScript and C++. Over time, I simplified the system: each set is stored as JSON, defined by exercise name, weight, reps, and date. This structure makes generating visualizations straightforward, with same-day workouts naturally aligning in the data."}),M.jsxs("div",{className:"rip-cta",children:[M.jsx("p",{className:`rip-cta__label ${a}`,children:"Explore the notebooks + regression overlays"}),M.jsx(tx,{href:"https://colab.research.google.com/drive/1ENZlQbCl78q4ilT7lTgQ9YkcPgvTLV9d?usp=sharing",label:"View the Python analysis in Google Colab"})]}),M.jsxs("div",{className:"rip-gallery rip-gallery--grid",children:[M.jsx(ar,{variant:"full",src:or[6],alt:"Origin version of the RIP sheet layout",figureLabel:"Figure 3",figureCaption:"The data is stored in a way that makes it easy to analyze.",withMatte:!0,imgClassName:"mx-auto w-full max-w-sm aspect-square object-cover",figcaptionClassName:a}),M.jsx(ar,{variant:"full",src:or[5],alt:"Origin version of the RIP sheet layout",figureLabel:"Figure 4",figureCaption:"Although it looks basic, this is the system I've found supports consistency.",withMatte:!0,imgClassName:"mx-auto w-full max-w-sm aspect-square object-cover",figcaptionClassName:a}),M.jsx(ar,{variant:"full",src:or[0],alt:"Collection of all workouts tracked in the RIP sheet",figureLabel:"Figure 5",figureCaption:"Consolidated workout history view.",withMatte:!0,imgClassName:"mx-auto w-full max-w-sm aspect-square object-cover",figcaptionClassName:a})]})]}),M.jsxs("section",{className:"rip-section rip-section--insights",children:[M.jsx("div",{className:a,children:M.jsx(tl,{quote:"Today is the day you make that life change—this very rep.",sizePreset:"balanced"})}),M.jsx("div",{className:"rip-figure rip-figure--wide",children:M.jsx(ar,{variant:"centered",src:or[1],alt:"RIP sheet data board showing tracked exercise metrics",figureLabel:"Figure 6",figureCaption:"Data board used to monitor progress over time.",withMatte:!0,figcaptionClassName:a})}),M.jsx(Dn,{text:"Visualizations expose my habits instantly—what’s strong, what’s falling off, and where volume spikes. When I fit least-squares regressions to each lift, I could literally see plateaus forming."}),M.jsx("div",{className:a,children:M.jsx(tl,{quote:"Fitting a least-squares regression to the data shows interesting trends:",sizePreset:"compact"})}),M.jsxs("div",{className:"rip-gallery rip-gallery--dual",children:[M.jsx(ar,{variant:"centered",src:or[2],alt:"Regression analysis chart generated from RIP sheet data",figureLabel:"Figure 7",figureCaption:"Least-squares regression snapshot for exercise trends.",withMatte:!0,figcaptionClassName:a}),M.jsx(ar,{variant:"centered",src:or[3],alt:"Progress chart visualizing workout performance changes",figureLabel:"Figure 8",figureCaption:"Bar chart showing exercise type counts for the data captured.",withMatte:!0,figcaptionClassName:a})]}),M.jsx(Dn,{text:"Recently, I took a linear algebra for data analysis course, and used Python to create least square regression analyses of each one of my exercises over the past 2.5 years. Seeing a visualization was highly motivational and validating for my stronger routines, but it also showed me clearly where I've been slacking recently."})]}),M.jsxs("section",{className:"rip-section rip-section--future",children:[M.jsx(Jc,{align:"left",children:"What’s next"}),M.jsx(Dn,{text:"My hope is to create a fitness app that allows people to develop realistic and healthy physical fitness routines and give useful visualizations that will let users know for sure how to generate real physical progress. The gym habit can be challenging to adopt, and I want to help people realize that learning that habit is counter-intuitive to first impressions."}),M.jsx("div",{className:a,children:M.jsx(tl,{quote:"I believe I can help people to adopt a habit that they love.",sizePreset:"balanced"})})]})]})})},LR=()=>M.jsx("div",{children:M.jsxs(xl,{construction:!1,title:"UrFriends",children:[M.jsx(Dn,{text:"UrFriends is designed to help you build real, lasting relationships using your device. "}),M.jsx(ew,{url:"https://public--urfriends-beta.us-central1.hosted.app/",linkText:"The Latest UrFriends Deployment"}),M.jsx(Dn,{text:`
                Inspired by the documented habits of highly influential thinkers like Benjamin Franklin and Charles Darwin, and by the routines of my endlessly social Grandmother Faye, UrFriends is about staying connected with intention—not just collecting contacts.
                Organize your relationships into tiers and set unique reminder timeframes for each. A tier could be set for a daily reach-out, weekly, or even yearly. Each contact has a conversations journal, so you can take notes after reaching out and remember the things that matter.
                There is a functional beta for a single user on my Github. The beta started on Vercel with React.js, Node, and MongoDB. Then it migrated to AWS, and Amplify. Finally, I've settled on Firebase, because of the ease of accomplishing everything that I want to.
                `}),M.jsx(Dn,{text:`
                I’m currently migrating functionality to AWS to support real users. Google and Apple integration is on the way.
                UrFriends is for people who believe technology should bring us together—not make us busier.`})]})}),OR=()=>M.jsx("div",{children:M.jsxs(xl,{construction:!0,title:"Widow Bags",children:[M.jsx(Dn,{text:"Widow Bags is an conceptual, apparel company currently under development. More details coming soon."}),M.jsx(Dn,{text:"My initial design was formulated at the School of the Art Institute of Chicago."})]})}),PR="https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting/",BR=["KP.webp","G.webp","alien_invasion.webp","alley.webp","bad_painting.webp","bada_bing.webp","behind.webp","blinker.webp","blue_girl_1.webp","blue_girl_2.webp","bouquet.webp","bright_lights_big_city.webp","business_card.webp","california_onlookers.webp","connection.webp","dips.webp","eyes.webp","following.webp","funny_mustache_guy.webp","hilltop_city.webp","hollywood_hills.webp","house.webp","in_the_city.webp","jacks.webp","jacks_2.webp","james.webp","locked_away.webp","network.webp","night.webp","one_way.webp","online.webp","outlooker.webp","perspective.webp","pictures_of_then.webp","portrait_copy.webp","rainy_sun.webp","researchers.webp","street_corner.webp","sunday.webp","time.webp","tornado.webp","transfer.webp","victorian.webp","what_do_you.webp","woah_dude.webp","worm.webp","x.webp"],zR=a=>a&&a.endsWith(".webp")?a.slice(0,-5):"",IR=(a,e)=>a.map(n=>({src:`${e}${n}`,alt:n,title:n})),l_=a=>{const e=()=>a.current>=a.gallery_images.length-5?a.gallery_images.slice(a.gallery_images.length-5,a.gallery_images.length):a.gallery_images.slice(a.current+1,a.current+6);return M.jsx("div",{className:"gallery_subImages",children:e().map(n=>M.jsxs("button",{className:"mini_gallery_image",onClick:()=>a.setCurrent(a.images_array.indexOf(n.title?n.title:"")),children:[M.jsx("style",{children:`
              .mini_gallery_image:hover {
                outline: 2px solid rgba(255, 255, 255, 1);
                transition: outline .2s;
                opacity: 100%;

              .mini_gallery_image {
                opacity: 80%;
              }
              }
            `}),M.jsx("img",{src:n.src,alt:n.alt,title:n.title,className:"inline max-w-25 max-h-25 m-1 rounded-sm",loading:"lazy"},n.src)]}))})},sx="rgba(255,255,255,0.2)",FR={border:`3px solid ${sx}`,cursor:"not-allowed"},$c=a=>{const e=a.direction==="left"&&a.current===0||a.direction==="right"&&a.current===a.total-1;console.log(a.current,a.direction);const n=()=>{switch(a.graphic){case"caret-right":return M.jsx("div",{className:"h-10 w-10",children:M.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:M.jsx("path",{d:"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"})})});case"caret-left":return M.jsx("div",{className:"h-10 w-10",children:M.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:M.jsx("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"})})});case"arrow-right":return M.jsx("div",{className:" h-8 w-8",children:M.jsx("svg",{className:"",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:M.jsx("path",{d:"M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"})})});case"arrow-left":return M.jsx("div",{className:" h-8 w-8",children:M.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:M.jsx("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"})})})}};return M.jsxs("button",{style:{...(a.graphic=="arrow-left"||a.graphic=="arrow-right")&&e?FR:{}},className:`inline-block ${a.graphic=="caret-left"||a.graphic=="caret-right"?"LR_bttn":"border-3 border-white LR_bttn"} cursor-pointer p-1 h-20 w-20 bg-none rounded-[50%]`,onClick:a.onclick_func,disabled:e,"aria-label":a.direction==="right"?"Next painting":"Previous painting",type:"button",children:[M.jsx("style",{children:`
        .LR_bttn:hover {
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, .5)) drop-shadow(0 0 10px rgba(255, 255, 255, .5));
        }
        .LR_bttn:active {
          filter: none;
        }
        .LR_bttn {
          transition: filter .2s;
        }
      `}),M.jsx("div",{style:{fill:e?sx:"white"},className:"flex justify-center items-center",children:n()})]})},HR=a=>{const[e,n]=he.useState(0),s=a.images&&a.images.length>0?a.images:BR,l=a.base_url?a.base_url:PR,c=IR(s,l),f=c.length-1,h=a.detail_medium?a.detail_medium:"acrylic on canvas",p=a.detail_years?a.detail_years:"2021-2025",m=c[e],g=zR(m.title);console.log(e,"is current");const _=()=>n(S=>Math.max(S-1,0)),x=()=>n(S=>Math.min(S+1,f));return a.width>$A?M.jsxs("div",{id:"gallery-container",className:"flex items-center justify-center h-screen",children:[M.jsx("div",{className:"gallery_leftButton ml-auto",children:M.jsx($c,{graphic:"arrow-left",direction:"left",current:e,total:c.length,onclick_func:_})}),M.jsx("div",{className:"gallery_mainImage",children:M.jsx("img",{src:m.src,alt:m.alt,title:m.title,loading:"lazy"})}),M.jsx("div",{className:"gallery_rightButton",children:M.jsx($c,{graphic:"arrow-right",direction:"right",current:e,total:c.length,onclick_func:x})}),M.jsx(l_,{images_array:s,gallery_images:c,current:e,setCurrent:n}),M.jsxs("div",{className:"gallery_textDetails text-white text-left p-10",children:[M.jsx("h3",{children:g}),M.jsx("p",{children:h}),M.jsx("p",{children:p})]})]}):M.jsxs("div",{children:[M.jsxs("div",{id:"",className:"flex flex-row justify-center",children:[M.jsx("style",{children:`
            .gallery_leftRightButton_cols {
              display: flex;
              align-items: center;
            }
            `}),M.jsx("button",{onClick:()=>_(),className:"gallery_leftRightButton_cols",children:M.jsx($c,{graphic:"caret-left",direction:"left",current:e,total:c.length})}),M.jsx("img",{style:{width:"70%"},src:m.src,alt:m.alt,title:m.title,loading:"lazy"}),M.jsx("button",{onClick:()=>x(),className:"gallery_leftRightButton_cols",children:M.jsx($c,{graphic:"caret-right",direction:"right",current:e,total:c.length})})]}),M.jsxs("div",{className:"text-left p-10",children:[M.jsx("h3",{children:g}),M.jsx("p",{children:h}),M.jsx("p",{children:p})]}),M.jsx(l_,{images_array:s,gallery_images:c,setCurrent:n,current:e})]})},GR=["pictures_of_then.webp","alley.webp","bright_lights_big_city.webp","behind.webp","G.webp","business_card.webp","blue_girl_1.webp","connection.webp","dips.webp"],VR=["alley.webp","eyes.webp","blue_girl_2.webp","KP.webp","house.webp","in_the_city.webp","jacks.webp","locked_away.webp","one_way.webp","time.webp"],kR=["bada_bing.webp","california_onlookers.webp","following.webp","hollywood_hills.webp","rainy_sun.webp","sunday.webp","tornado.webp","victorian.webp","woah_dude.webp","street_corner.webp"],jR=["bad_painting.webp","bouquet.webp","blinker.webp","james.webp","night.webp","outlooker.webp","transfer.webp","what_do_you.webp"],XR=["hilltop_city.webp","funny_mustache_guy.webp","jacks_2.webp","online.webp","perspective.webp","portrait_copy.webp","researchers.webp","x.webp"],WR=["worm.webp","network.webp"],qR=[{slug:"2025p",title:"2025",year_label:"2025",images:WR},{slug:"2024p",title:"2024",year_label:"2024",images:XR},{slug:"2023p",title:"2023",year_label:"2023",images:jR},{slug:"2022p",title:"2022",year_label:"2022",images:kR},{slug:"2021p",title:"2021",year_label:"2021",images:VR},{slug:"2020p",title:"2020",year_label:"2020",images:GR}],YR=qR.reduce((a,e)=>(a[e.slug]=e,a),{}),ZR=a=>{const{periodSlug:e}=$S(),n=e?YR[e]:void 0;return n?M.jsxs("div",{className:"text-white px-6 py-20",style:{fontFamily:Gi},children:[M.jsxs("h1",{style:{fontFamily:ki},className:"text-4xl md:text-5xl font-bold mb-6",children:[n.title," Paintings"]}),M.jsx(HR,{width:a.width,images:n.images,detail_medium:"acrylic on canvas",detail_years:n.year_label})]}):M.jsxs("div",{className:"text-white px-6 py-20",style:{fontFamily:Gi},children:[M.jsx("h1",{style:{fontFamily:ki},className:"text-3xl font-semibold",children:"Painting period not found"}),M.jsx("p",{className:"mt-4 opacity-80",children:"Check back soon for more updates."})]})},ox=[{category:"Painting",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting_dir/painting-web-icons/painting-web-icon.jpg",url:"painting"},{category:"Drawing",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting_dir/drawing-web-icons/drawing-web-icon.jpg",url:"drawing"}],KR=[{category:"Web Development",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/web-design-web-icons/DM.webp",url:"../projects/web_dev"},{category:"UrFriends - SaaS",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/blog-images/UR_Friends.webp",url:"urfriends"},{category:"Widow Bags",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/product-design-icons/widow-icon.jpg",url:"widowbags"}],lx=[{category:"Design",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/drawing-web-icons/design-drawing-icon.webp",url:"drawing_design"},{category:"Engineering",img:"https://jayhcrawford-webdocs.s3.us-east-2.amazonaws.com/webdocs-icons/tripod-drawing-icon.webp",url:"drawing_engineering"},{category:"Fine Art",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/drawing-web-icons/fine-art-drawing-icon.webp",url:"drawing_fa"},{category:"Doodling",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting_dir/drawing-web-icons/drawing-web-icon.jpg",url:"drawing_doodle"}],cx=[{category:"2025",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting_dir/painting-web-icons/2024-painting-icon.jpg",url:"2025p"},{category:"2024",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting_dir/painting-web-icons/2023-painting-icon.jpg",url:"2024p"},{category:"2023",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting_dir/painting-web-icons/2022-painting-icon.jpg",url:"2023p"},{category:"2022",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting_dir/painting-web-icons/2021-painting-icon.jpg",url:"2022p"},{category:"2021",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting_dir/painting-web-icons/2020-painting-icon.jpg",url:"2021p"},{category:"2020 and Prior",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting_dir/painting-web-icons/2019-painting-icon.jpg",url:"2020p"}],QR=a=>{const[e,n]=he.useState(!1);return M.jsxs(M.Fragment,{children:[M.jsx("style",{children:`
      hr {
      color: white;
      border-width: 2px;
      opacity: ${cu}%

      }`}),M.jsx(Wr,{onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),to:a.url?a.url:"",children:M.jsx("div",{className:`${a.url==""?"cursor-not-allowed":"cursor-pointer"} text-white m-6 justify-center ${a.width<750?"flex flex-col":"flex"}`,children:M.jsxs("div",{className:` ${a.width<750?"flex flex-col items-center":"flex w-[70%]"}`,children:[M.jsx("div",{className:"p-1 m-1",children:M.jsx("div",{className:"relative",children:M.jsxs("div",{className:" h-full w-full relative z-100",children:[M.jsx("div",{className:`${a.url==""&&e?"absolute":"hidden"} w-full text-white font-black absolute bg-red-600 top-[120px] p-4 text-center`,children:"Under Construction"}),M.jsx(JR,{img:a.img,under_construction:a.under_construction})]})})}),M.jsxs("div",{className:`ml-10 ${a.width<750?"mt-8 w-full pr-20":"flex flex-col justify-center mb-10"}`,children:[M.jsx("h4",{style:{fontFamily:ki},className:"text-2xl",children:a.title}),M.jsx("p",{style:{fontFamily:Gi},children:a.about_txt})]})]})})}),M.jsx("hr",{})]})},JR=a=>M.jsxs(M.Fragment,{children:[a.under_construction&&a.under_construction===!0&&M.jsx("div",{className:"h-30 w-30 absolute",children:M.jsx("img",{src:"./under_construction.svg"})}),M.jsx("div",{style:{boxShadow:"5px 5px 5px rgba(0, 0, 0, 1)"},className:"w-80 h-60",children:M.jsx("img",{className:"rounded-lg w-80 h-60",style:{objectFit:"cover"},src:a.img})})]}),Eu=a=>M.jsxs("div",{style:{fontFamily:Gi},children:[M.jsx("hr",{}),a.blog_array.map((e,n)=>M.jsx(QR,{url:e.url?e.url:"",title:e.title,about_txt:e.about_txt,img:e.img,width:a.width},n))]}),$R=a=>M.jsx(Eu,{width:a.width,blog_array:a.blog_array}),e3=[{title:"Red X CLI Utility",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/programming-icons/redX-CLI-icon.webp",about_txt:"Stub entry for the Red X CLI utility.",url:"https://github.com/jayhcrawford/3-month-habit-tracker"},{title:"RIP Sheet Data Analysis",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/blog-images/RIP.webp",about_txt:"Stub entry for the RIP Sheet data analysis project.",url:"/projects/ripsheet"}],ux=[{category:"Web Development",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/web-design-web-icons/DM.webp",url:"web_dev"},{category:"Programming",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/programming-icons/Programming.webp",url:"programming"},{category:"3D Projects",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/3d-project-icons/orthographic-icon.jpg",url:"3d"},{category:"UrFriends - SaaS",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/blog-images/UR_Friends.webp",url:"urfriends"},{category:"The Book",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/blog-images/TheBook.webp",url:"thebook"},{category:"The RIP Sheet",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/blog-images/RIP.webp",url:"ripsheet"},{category:"Widow Bags",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/product-design-icons/widow-icon.jpg",url:"widowbags"}],t3=a=>M.jsx(Eu,{width:a.width,blog_array:a.blog_array}),c_=[{title:"This Website!",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/product-design-icons/jayhcrawford-domain.webp",about_txt:"This resposnive website uses Threejs, CSS, SVG, React, GitHub. I made the components.",url:"https://medium.com/@jayhcrawford/taking-my-github-from-html-based-pages-to-a-vite-based-react-app-a202d7be2ad0",under_construction:!0},{title:"d3 Data Visuatilzations",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/programming-icons/d3_tempGraph.webp",about_txt:"CSS by me; Originally written with while I did freeCodeCamp in 2023.",url:"d3-visualizations",under_construction:!1},{title:"Calculator",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/web-design-web-icons/Calc.webp",about_txt:"CSS by me; Originally written with React class components while I did freeCodeCamp in 2023; rewritten into React 19 with an LLM.",url:"https://codepen.io/jayhcrawford/pen/rNRQJZa?editors=1010",under_construction:!1},{title:"Chem 101 App",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/web-design-web-icons/Chem101.webp",about_txt:"Kind of like a study guide wiki. Essentially a markdown viewer/editor that allowed my classmates to create and propose revisions. Revisions were databased and reviewed using a seperately hosted API. Centralizing all the course content in an easy to access place helped me to get an A in this class.",url:"https://chem101-sg.vercel.app/index.html",under_construction:!1},{title:"UrFriends",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/blog-images/UR_Friends.webp",about_txt:"Will be a SaaS toolset for relationship building; inspired by the routines of world leaders. Started on MongoDB and Vercel; migrated to Amplify and AWS; settled on Firebase and Firestore. The hosted beta has auth and data privacy securely enforced and a Stripe webhook.",url:"/projects/urfriends",under_construction:!1},{title:"Drum Machine",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/web-design-web-icons/DM.webp",about_txt:"CSS by me; Originally written with React class components while I did freeCodeCamp in 2023; rewritten into React 19 with an LLM.",url:"https://codepen.io/jayhcrawford/pen/poYJzyb",under_construction:!1}],n3=a=>M.jsx(Eu,{width:a.width,blog_array:a.blog_array}),i3=[{title:"My Place",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/3d-project-icons/orthographic-icon.jpg",about_txt:"Autodesk Maya and Arnold project."},{title:"Door Project",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/3d-project-icons/3d-door-project-icon.jpg",about_txt:"Based on a drawing, built in Blender to emulate the drawing."},{title:"3D Me :-)",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/3d-project-icons/3d-jay-icon.jpg",about_txt:"Fully rigged, simple 3D character modeled after me. This helped me to better understand topology, weight-painting, and rigging."},{title:"Fusion360 Tripod",img:"https://jayhcrawford-webdocs.s3.us-east-2.amazonaws.com/webdocs-icons/tripod-drawing-icon.webp",about_txt:"In my first engineering drawing course, we used Fusion360. I made this there as my final."},{title:"Solidworks Japanese Lantern",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/product-design-icons/j-lantern-icon.webp",about_txt:"In my second engineering drawing course, my groupmates and I collaborated together to make a Japanese-inspired lamp."}],a3=a=>M.jsx(Eu,{width:a.width,blog_array:a.blog_array}),r3=[{title:"Projects",url:"projects"},{title:"Art",url:"art"},{title:"About",url:"about"},{title:"Contact",url:"contact"},{title:"3D Projects",url:"3d"},...ux.map(a=>({title:a.category,url:a.url})),...ox.map(a=>({title:a.category,url:a.url})),...cx.map(a=>({title:a.category,url:a.url})),...lx.map(a=>({title:a.category,url:a.url})),...KR.map(a=>({title:a.category,url:a.url}))],s3=()=>{const{width:a,height:e}=$_(),n=he.useRef(null),l=fr().pathname;function c(){return l.split("/").filter((f,h)=>h!==0)}return console.log(l,"is curernt"),he.useEffect(()=>{const f=new pu,h=new Kn(75,window.innerWidth/window.innerHeight,.1,1e3),p=new J_({alpha:!0});p.setClearColor(0,0),p.setSize(window.innerWidth,window.innerHeight),p.domElement.style.position="absolute",p.domElement.style.top="0",p.domElement.style.left="0",p.domElement.style.zIndex="-1",n.current instanceof HTMLElement&&!n.current.hasChildNodes()&&n.current.appendChild(p.domElement);const m=new Qs,g=new xu({color:65280}),_=new xi(m,g);f.add(_),h.position.z=5;const x=()=>{_.rotation.x+=.01,_.rotation.y+=.01,p.render(f,h),requestAnimationFrame(x)};return x(),()=>{n.current&&n.current.removeChild(p.domElement)}},[]),console.log(a,"is the width; and the height is: ",e),M.jsx(M.Fragment,{children:M.jsxs("div",{id:"outer_bg",children:[M.jsx("div",{style:{position:"fixed",top:0,left:0,width:`${a}px`,height:`${e}px`,overflow:"hidden"},children:M.jsx(gw,{})}),M.jsx(DR,{}),M.jsxs("div",{className:"pt-20",id:"inner_bg",ref:n,style:{position:"relative",width:"95vw",margin:"auto"},children:[M.jsxs("div",{children:[M.jsx(dw,{width:a,path:l}),c().length>1&&M.jsx(mw,{split:c,locationData:r3})]}),M.jsxs("div",{id:"body_div",children:[M.jsx("main",{children:M.jsxs(p1,{children:[M.jsx(Cn,{path:"/",element:M.jsx(M.Fragment,{})}),M.jsx(Cn,{path:"/about",element:M.jsx(aw,{})}),M.jsx(Cn,{path:"/projects/3d",element:M.jsx(n3,{width:a,blog_array:i3})}),M.jsx(Cn,{path:"/projects",element:M.jsx(lw,{width:a,category_array:ux})}),M.jsx(Cn,{path:"/projects/web_dev",element:M.jsx(t3,{width:a,blog_array:c_})}),M.jsx(Cn,{path:"/projects/programming",element:M.jsx($R,{width:a,blog_array:e3})}),M.jsx(Cn,{path:"/projects/web_dev/d3-visualizations",element:M.jsx(a3,{width:a,blog_array:c_})}),M.jsx(Cn,{path:"/art",element:M.jsx(fd,{width:a,category_array:ox})}),M.jsx(Cn,{path:"/art/painting",element:M.jsx(fd,{width:a,category_array:cx})}),M.jsx(Cn,{path:"/art/painting/:periodSlug",element:M.jsx(ZR,{width:a})}),M.jsx(Cn,{path:"/art/drawing",element:M.jsx(fd,{width:a,category_array:lx})}),M.jsx(Cn,{path:"/contact",element:M.jsx(rw,{})}),M.jsx(Cn,{path:"/projects/urfriends",element:M.jsx(LR,{})}),M.jsx(Cn,{path:"/projects/thebook",element:M.jsx(UR,{})}),M.jsx(Cn,{path:"/projects/ripsheet",element:M.jsx(NR,{})}),M.jsx(Cn,{path:"/projects/widowbags",element:M.jsx(OR,{})})]})}),M.jsx(cw,{path:l})]})]}),M.jsx("div",{className:"pointer-events-none flex justify-end fixed top-0 w-full z-100 ",children:M.jsx("a",{href:ll,target:"new",children:M.jsx("button",{className:"pointer-events-auto p-2 rounded-lg m-2 bg-white cursor-pointer",children:M.jsx(pw,{})})})})]})})};ES.createRoot(document.getElementById("root")).render(M.jsx(he.StrictMode,{children:M.jsx(I1,{children:M.jsx(s3,{})})}));
