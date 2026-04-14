(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();var Od={exports:{}},el={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n0;function yS(){if(n0)return el;n0=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:a,type:s,key:f,ref:l!==void 0?l:null,props:c}}return el.Fragment=e,el.jsx=n,el.jsxs=n,el}var i0;function SS(){return i0||(i0=1,Od.exports=yS()),Od.exports}var y=SS(),Bd={exports:{}},st={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a0;function bS(){if(a0)return st;a0=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function x(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,A={};function S(O,ee,ye){this.props=O,this.context=ee,this.refs=A,this.updater=ye||b}S.prototype.isReactComponent={},S.prototype.setState=function(O,ee){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ee,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function v(){}v.prototype=S.prototype;function L(O,ee,ye){this.props=O,this.context=ee,this.refs=A,this.updater=ye||b}var D=L.prototype=new v;D.constructor=L,M(D,S.prototype),D.isPureReactComponent=!0;var U=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function z(O,ee,ye,be,$,me){return ye=me.ref,{$$typeof:a,type:O,key:ee,ref:ye!==void 0?ye:null,props:me}}function W(O,ee){return z(O.type,ee,void 0,void 0,void 0,O.props)}function N(O){return typeof O=="object"&&O!==null&&O.$$typeof===a}function C(O){var ee={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ye){return ee[ye]})}var k=/\/+/g;function ce(O,ee){return typeof O=="object"&&O!==null&&O.key!=null?C(""+O.key):ee.toString(36)}function oe(){}function xe(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(oe,oe):(O.status="pending",O.then(function(ee){O.status==="pending"&&(O.status="fulfilled",O.value=ee)},function(ee){O.status==="pending"&&(O.status="rejected",O.reason=ee)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function pe(O,ee,ye,be,$){var me=typeof O;(me==="undefined"||me==="boolean")&&(O=null);var Se=!1;if(O===null)Se=!0;else switch(me){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(O.$$typeof){case a:case e:Se=!0;break;case g:return Se=O._init,pe(Se(O._payload),ee,ye,be,$)}}if(Se)return $=$(O),Se=be===""?"."+ce(O,0):be,U($)?(ye="",Se!=null&&(ye=Se.replace(k,"$&/")+"/"),pe($,ee,ye,"",function(lt){return lt})):$!=null&&(N($)&&($=W($,ye+($.key==null||O&&O.key===$.key?"":(""+$.key).replace(k,"$&/")+"/")+Se)),ee.push($)),1;Se=0;var Ae=be===""?".":be+":";if(U(O))for(var Ne=0;Ne<O.length;Ne++)be=O[Ne],me=Ae+ce(be,Ne),Se+=pe(be,ee,ye,me,$);else if(Ne=x(O),typeof Ne=="function")for(O=Ne.call(O),Ne=0;!(be=O.next()).done;)be=be.value,me=Ae+ce(be,Ne++),Se+=pe(be,ee,ye,me,$);else if(me==="object"){if(typeof O.then=="function")return pe(xe(O),ee,ye,be,$);throw ee=String(O),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return Se}function I(O,ee,ye){if(O==null)return O;var be=[],$=0;return pe(O,be,"","",function(me){return ee.call(ye,me,$++)}),be}function K(O){if(O._status===-1){var ee=O._result;ee=ee(),ee.then(function(ye){(O._status===0||O._status===-1)&&(O._status=1,O._result=ye)},function(ye){(O._status===0||O._status===-1)&&(O._status=2,O._result=ye)}),O._status===-1&&(O._status=0,O._result=ee)}if(O._status===1)return O._result.default;throw O._result}var Y=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function Ee(){}return st.Children={map:I,forEach:function(O,ee,ye){I(O,function(){ee.apply(this,arguments)},ye)},count:function(O){var ee=0;return I(O,function(){ee++}),ee},toArray:function(O){return I(O,function(ee){return ee})||[]},only:function(O){if(!N(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},st.Component=S,st.Fragment=n,st.Profiler=l,st.PureComponent=L,st.StrictMode=s,st.Suspense=p,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,st.__COMPILER_RUNTIME={__proto__:null,c:function(O){return F.H.useMemoCache(O)}},st.cache=function(O){return function(){return O.apply(null,arguments)}},st.cloneElement=function(O,ee,ye){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var be=M({},O.props),$=O.key,me=void 0;if(ee!=null)for(Se in ee.ref!==void 0&&(me=void 0),ee.key!==void 0&&($=""+ee.key),ee)!G.call(ee,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&ee.ref===void 0||(be[Se]=ee[Se]);var Se=arguments.length-2;if(Se===1)be.children=ye;else if(1<Se){for(var Ae=Array(Se),Ne=0;Ne<Se;Ne++)Ae[Ne]=arguments[Ne+2];be.children=Ae}return z(O.type,$,void 0,void 0,me,be)},st.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},st.createElement=function(O,ee,ye){var be,$={},me=null;if(ee!=null)for(be in ee.key!==void 0&&(me=""+ee.key),ee)G.call(ee,be)&&be!=="key"&&be!=="__self"&&be!=="__source"&&($[be]=ee[be]);var Se=arguments.length-2;if(Se===1)$.children=ye;else if(1<Se){for(var Ae=Array(Se),Ne=0;Ne<Se;Ne++)Ae[Ne]=arguments[Ne+2];$.children=Ae}if(O&&O.defaultProps)for(be in Se=O.defaultProps,Se)$[be]===void 0&&($[be]=Se[be]);return z(O,me,void 0,void 0,null,$)},st.createRef=function(){return{current:null}},st.forwardRef=function(O){return{$$typeof:d,render:O}},st.isValidElement=N,st.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:K}},st.memo=function(O,ee){return{$$typeof:m,type:O,compare:ee===void 0?null:ee}},st.startTransition=function(O){var ee=F.T,ye={};F.T=ye;try{var be=O(),$=F.S;$!==null&&$(ye,be),typeof be=="object"&&be!==null&&typeof be.then=="function"&&be.then(Ee,Y)}catch(me){Y(me)}finally{F.T=ee}},st.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},st.use=function(O){return F.H.use(O)},st.useActionState=function(O,ee,ye){return F.H.useActionState(O,ee,ye)},st.useCallback=function(O,ee){return F.H.useCallback(O,ee)},st.useContext=function(O){return F.H.useContext(O)},st.useDebugValue=function(){},st.useDeferredValue=function(O,ee){return F.H.useDeferredValue(O,ee)},st.useEffect=function(O,ee,ye){var be=F.H;if(typeof ye=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return be.useEffect(O,ee)},st.useId=function(){return F.H.useId()},st.useImperativeHandle=function(O,ee,ye){return F.H.useImperativeHandle(O,ee,ye)},st.useInsertionEffect=function(O,ee){return F.H.useInsertionEffect(O,ee)},st.useLayoutEffect=function(O,ee){return F.H.useLayoutEffect(O,ee)},st.useMemo=function(O,ee){return F.H.useMemo(O,ee)},st.useOptimistic=function(O,ee){return F.H.useOptimistic(O,ee)},st.useReducer=function(O,ee,ye){return F.H.useReducer(O,ee,ye)},st.useRef=function(O){return F.H.useRef(O)},st.useState=function(O){return F.H.useState(O)},st.useSyncExternalStore=function(O,ee,ye){return F.H.useSyncExternalStore(O,ee,ye)},st.useTransition=function(){return F.H.useTransition()},st.version="19.1.0",st}var r0;function sp(){return r0||(r0=1,Bd.exports=bS()),Bd.exports}var de=sp(),Id={exports:{}},tl={},zd={exports:{}},Fd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s0;function ES(){return s0||(s0=1,function(a){function e(I,K){var Y=I.length;I.push(K);e:for(;0<Y;){var Ee=Y-1>>>1,O=I[Ee];if(0<l(O,K))I[Ee]=K,I[Y]=O,Y=Ee;else break e}}function n(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var K=I[0],Y=I.pop();if(Y!==K){I[0]=Y;e:for(var Ee=0,O=I.length,ee=O>>>1;Ee<ee;){var ye=2*(Ee+1)-1,be=I[ye],$=ye+1,me=I[$];if(0>l(be,Y))$<O&&0>l(me,be)?(I[Ee]=me,I[$]=Y,Ee=$):(I[Ee]=be,I[ye]=Y,Ee=ye);else if($<O&&0>l(me,Y))I[Ee]=me,I[$]=Y,Ee=$;else break e}}return K}function l(I,K){var Y=I.sortIndex-K.sortIndex;return Y!==0?Y:I.id-K.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();a.unstable_now=function(){return f.now()-d}}var p=[],m=[],g=1,_=null,x=3,b=!1,M=!1,A=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function U(I){for(var K=n(m);K!==null;){if(K.callback===null)s(m);else if(K.startTime<=I)s(m),K.sortIndex=K.expirationTime,e(p,K);else break;K=n(m)}}function F(I){if(A=!1,U(I),!M)if(n(p)!==null)M=!0,G||(G=!0,ce());else{var K=n(m);K!==null&&pe(F,K.startTime-I)}}var G=!1,z=-1,W=5,N=-1;function C(){return S?!0:!(a.unstable_now()-N<W)}function k(){if(S=!1,G){var I=a.unstable_now();N=I;var K=!0;try{e:{M=!1,A&&(A=!1,L(z),z=-1),b=!0;var Y=x;try{t:{for(U(I),_=n(p);_!==null&&!(_.expirationTime>I&&C());){var Ee=_.callback;if(typeof Ee=="function"){_.callback=null,x=_.priorityLevel;var O=Ee(_.expirationTime<=I);if(I=a.unstable_now(),typeof O=="function"){_.callback=O,U(I),K=!0;break t}_===n(p)&&s(p),U(I)}else s(p);_=n(p)}if(_!==null)K=!0;else{var ee=n(m);ee!==null&&pe(F,ee.startTime-I),K=!1}}break e}finally{_=null,x=Y,b=!1}K=void 0}}finally{K?ce():G=!1}}}var ce;if(typeof D=="function")ce=function(){D(k)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,xe=oe.port2;oe.port1.onmessage=k,ce=function(){xe.postMessage(null)}}else ce=function(){v(k,0)};function pe(I,K){z=v(function(){I(a.unstable_now())},K)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(I){I.callback=null},a.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<I?Math.floor(1e3/I):5},a.unstable_getCurrentPriorityLevel=function(){return x},a.unstable_next=function(I){switch(x){case 1:case 2:case 3:var K=3;break;default:K=x}var Y=x;x=K;try{return I()}finally{x=Y}},a.unstable_requestPaint=function(){S=!0},a.unstable_runWithPriority=function(I,K){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Y=x;x=I;try{return K()}finally{x=Y}},a.unstable_scheduleCallback=function(I,K,Y){var Ee=a.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Ee+Y:Ee):Y=Ee,I){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=Y+O,I={id:g++,callback:K,priorityLevel:I,startTime:Y,expirationTime:O,sortIndex:-1},Y>Ee?(I.sortIndex=Y,e(m,I),n(p)===null&&I===n(m)&&(A?(L(z),z=-1):A=!0,pe(F,Y-Ee))):(I.sortIndex=O,e(p,I),M||b||(M=!0,G||(G=!0,ce()))),I},a.unstable_shouldYield=C,a.unstable_wrapCallback=function(I){var K=x;return function(){var Y=x;x=K;try{return I.apply(this,arguments)}finally{x=Y}}}}(Fd)),Fd}var o0;function MS(){return o0||(o0=1,zd.exports=ES()),zd.exports}var Hd={exports:{}},In={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l0;function TS(){if(l0)return In;l0=1;var a=sp();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:p,containerInfo:m,implementation:g}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return In.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,In.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return c(p,m,null,g)},In.flushSync=function(p){var m=f.T,g=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=m,s.p=g,s.d.f()}},In.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},In.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},In.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,_=d(g,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,b=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:b}):g==="script"&&s.d.X(p,{crossOrigin:_,integrity:x,fetchPriority:b,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},In.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=d(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},In.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,_=d(g,m.crossOrigin);s.d.L(p,g,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},In.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=d(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},In.requestFormReset=function(p){s.d.r(p)},In.unstable_batchedUpdates=function(p,m){return p(m)},In.useFormState=function(p,m,g){return f.H.useFormState(p,m,g)},In.useFormStatus=function(){return f.H.useHostTransitionStatus()},In.version="19.1.0",In}var c0;function wS(){if(c0)return Hd.exports;c0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Hd.exports=TS(),Hd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u0;function AS(){if(u0)return tl;u0=1;var a=MS(),e=sp(),n=wS();function s(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,r=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(r=i.return),t=i.return;while(t)}return i.tag===3?r:null}function f(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function d(t){if(c(t)!==t)throw Error(s(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(s(188));return i!==t?null:t}for(var r=t,o=i;;){var u=r.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){r=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===r)return d(u),t;if(h===o)return d(u),i;h=h.sibling}throw Error(s(188))}if(r.return!==o.return)r=u,o=h;else{for(var E=!1,T=u.child;T;){if(T===r){E=!0,r=u,o=h;break}if(T===o){E=!0,o=u,r=h;break}T=T.sibling}if(!E){for(T=h.child;T;){if(T===r){E=!0,r=h,o=u;break}if(T===o){E=!0,o=h,r=u;break}T=T.sibling}if(!E)throw Error(s(189))}}if(r.alternate!==o)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?t:i}function m(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=m(t),i!==null)return i;t=t.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),D=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function ce(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Symbol.for("react.client.reference");function xe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===oe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case M:return"Fragment";case S:return"Profiler";case A:return"StrictMode";case F:return"Suspense";case G:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case D:return(t.displayName||"Context")+".Provider";case L:return(t._context.displayName||"Context")+".Consumer";case U:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return i=t.displayName||null,i!==null?i:xe(t.type)||"Memo";case W:i=t._payload,t=t._init;try{return xe(t(i))}catch{}}return null}var pe=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},Ee=[],O=-1;function ee(t){return{current:t}}function ye(t){0>O||(t.current=Ee[O],Ee[O]=null,O--)}function be(t,i){O++,Ee[O]=t.current,t.current=i}var $=ee(null),me=ee(null),Se=ee(null),Ae=ee(null);function Ne(t,i){switch(be(Se,i),be(me,t),be($,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?Dv(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=Dv(i),t=Uv(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ye($),be($,t)}function lt(){ye($),ye(me),ye(Se)}function Ke(t){t.memoizedState!==null&&be(Ae,t);var i=$.current,r=Uv(i,t.type);i!==r&&(be(me,t),be($,r))}function Xt(t){me.current===t&&(ye($),ye(me)),Ae.current===t&&(ye(Ae),Zo._currentValue=Y)}var Vt=Object.prototype.hasOwnProperty,dt=a.unstable_scheduleCallback,H=a.unstable_cancelCallback,Wn=a.unstable_shouldYield,_t=a.unstable_requestPaint,it=a.unstable_now,Xe=a.unstable_getCurrentPriorityLevel,Bt=a.unstable_ImmediatePriority,Ve=a.unstable_UserBlockingPriority,P=a.unstable_NormalPriority,w=a.unstable_LowPriority,te=a.unstable_IdlePriority,ge=a.log,Me=a.unstable_setDisableYieldValue,fe=null,Oe=null;function Re(t){if(typeof ge=="function"&&Me(t),Oe&&typeof Oe.setStrictMode=="function")try{Oe.setStrictMode(fe,t)}catch{}}var Ge=Math.clz32?Math.clz32:Fe,Je=Math.log,we=Math.LN2;function Fe(t){return t>>>=0,t===0?32:31-(Je(t)/we|0)|0}var Ye=256,Qe=4194304;function Be(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ut(t,i,r){var o=t.pendingLanes;if(o===0)return 0;var u=0,h=t.suspendedLanes,E=t.pingedLanes;t=t.warmLanes;var T=o&134217727;return T!==0?(o=T&~h,o!==0?u=Be(o):(E&=T,E!==0?u=Be(E):r||(r=T&~t,r!==0&&(u=Be(r))))):(T=o&~h,T!==0?u=Be(T):E!==0?u=Be(E):r||(r=o&~t,r!==0&&(u=Be(r)))),u===0?0:i!==0&&i!==u&&(i&h)===0&&(h=u&-u,r=i&-i,h>=r||h===32&&(r&4194048)!==0)?i:u}function nt(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function It(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function j(){var t=Ye;return Ye<<=1,(Ye&4194048)===0&&(Ye=256),t}function Le(){var t=Qe;return Qe<<=1,(Qe&62914560)===0&&(Qe=4194304),t}function le(t){for(var i=[],r=0;31>r;r++)i.push(t);return i}function ve(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ie(t,i,r,o,u,h){var E=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var T=t.entanglements,B=t.expirationTimes,J=t.hiddenUpdates;for(r=E&~r;0<r;){var ue=31-Ge(r),_e=1<<ue;T[ue]=0,B[ue]=-1;var ne=J[ue];if(ne!==null)for(J[ue]=null,ue=0;ue<ne.length;ue++){var ie=ne[ue];ie!==null&&(ie.lane&=-536870913)}r&=~_e}o!==0&&Pe(t,o,0),h!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=h&~(E&~i))}function Pe(t,i,r){t.pendingLanes|=i,t.suspendedLanes&=~i;var o=31-Ge(i);t.entangledLanes|=i,t.entanglements[o]=t.entanglements[o]|1073741824|r&4194090}function at(t,i){var r=t.entangledLanes|=i;for(t=t.entanglements;r;){var o=31-Ge(r),u=1<<o;u&i|t[o]&i&&(t[o]|=i),r&=~u}}function Wt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function sn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Tt(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:Kv(t.type))}function ei(t,i){var r=K.p;try{return K.p=t,i()}finally{K.p=r}}var _n=Math.random().toString(36).slice(2),dn="__reactFiber$"+_n,Tn="__reactProps$"+_n,qn="__reactContainer$"+_n,_r="__reactEvents$"+_n,Rl="__reactListeners$"+_n,Cl="__reactHandles$"+_n,xr="__reactResources$"+_n,Na="__reactMarker$"+_n;function La(t){delete t[dn],delete t[Tn],delete t[_r],delete t[Rl],delete t[Cl]}function Ki(t){var i=t[dn];if(i)return i;for(var r=t.parentNode;r;){if(i=r[qn]||r[dn]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(t=Ov(t);t!==null;){if(r=t[dn])return r;t=Ov(t)}return i}t=r,r=t.parentNode}return null}function Qi(t){if(t=t[dn]||t[qn]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function yr(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(s(33))}function Pa(t){var i=t[xr];return i||(i=t[xr]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function on(t){t[Na]=!0}var Dl=new Set,Ul={};function $i(t,i){R(t,i),R(t+"Capture",i)}function R(t,i){for(Ul[t]=i,t=0;t<i.length;t++)Dl.add(i[t])}var q=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ae={},re={};function Z(t){return Vt.call(re,t)?!0:Vt.call(ae,t)?!1:q.test(t)?re[t]=!0:(ae[t]=!0,!1)}function Te(t,i,r){if(Z(i))if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+r)}}function Ce(t,i,r){if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+r)}}function De(t,i,r,o){if(o===null)t.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(i,r,""+o)}}var ze,et;function We(t){if(ze===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);ze=i&&i[1]||"",et=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ze+t+et}var je=!1;function pt(t,i){if(!t||je)return"";je=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(ie){var ne=ie}Reflect.construct(t,[],_e)}else{try{_e.call()}catch(ie){ne=ie}t.call(_e.prototype)}}else{try{throw Error()}catch(ie){ne=ie}(_e=t())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(ie){if(ie&&ne&&typeof ie.stack=="string")return[ie.stack,ne.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),E=h[0],T=h[1];if(E&&T){var B=E.split(`
`),J=T.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===J.length)for(o=B.length-1,u=J.length-1;1<=o&&0<=u&&B[o]!==J[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==J[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==J[u]){var ue=`
`+B[o].replace(" at new "," at ");return t.displayName&&ue.includes("<anonymous>")&&(ue=ue.replace("<anonymous>",t.displayName)),ue}while(1<=o&&0<=u);break}}}finally{je=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?We(r):""}function wt(t){switch(t.tag){case 26:case 27:case 5:return We(t.type);case 16:return We("Lazy");case 13:return We("Suspense");case 19:return We("SuspenseList");case 0:case 15:return pt(t.type,!1);case 11:return pt(t.type.render,!1);case 1:return pt(t.type,!0);case 31:return We("Activity");default:return""}}function Kt(t){try{var i="";do i+=wt(t),t=t.return;while(t);return i}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function xt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function yt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function qe(t){var i=yt(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),o=""+t[i];if(!t.hasOwnProperty(i)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,h=r.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(E){o=""+E,h.call(this,E)}}),Object.defineProperty(t,i,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(E){o=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function en(t){t._valueTracker||(t._valueTracker=qe(t))}function Et(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var r=i.getValue(),o="";return t&&(o=yt(t)?t.checked?"true":"false":t.value),t=o,t!==r?(i.setValue(t),!0):!1}function Pn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Oa=/[\n"\\]/g;function qt(t){return t.replace(Oa,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ji(t,i,r,o,u,h,E,T){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),i!=null?E==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+xt(i)):t.value!==""+xt(i)&&(t.value=""+xt(i)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),i!=null?On(t,E,xt(i)):r!=null?On(t,E,xt(r)):o!=null&&t.removeAttribute("value"),u==null&&h!=null&&(t.defaultChecked=!!h),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+xt(T):t.removeAttribute("name")}function kt(t,i,r,o,u,h,E,T){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),i!=null||r!=null){if(!(h!=="submit"&&h!=="reset"||i!=null))return;r=r!=null?""+xt(r):"",i=i!=null?""+xt(i):r,T||i===t.value||(t.value=i),t.defaultValue=i}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=T?t.checked:!!o,t.defaultChecked=!!o,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E)}function On(t,i,r){i==="number"&&Pn(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function hn(t,i,r,o){if(t=t.options,i){i={};for(var u=0;u<r.length;u++)i["$"+r[u]]=!0;for(r=0;r<t.length;r++)u=i.hasOwnProperty("$"+t[r].value),t[r].selected!==u&&(t[r].selected=u),u&&o&&(t[r].defaultSelected=!0)}else{for(r=""+xt(r),i=null,u=0;u<t.length;u++){if(t[u].value===r){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function xn(t,i,r){if(i!=null&&(i=""+xt(i),i!==t.value&&(t.value=i),r==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=r!=null?""+xt(r):""}function wn(t,i,r,o){if(i==null){if(o!=null){if(r!=null)throw Error(s(92));if(pe(o)){if(1<o.length)throw Error(s(93));o=o[0]}r=o}r==null&&(r=""),i=r}r=xt(i),t.defaultValue=r,o=t.textContent,o===r&&o!==""&&o!==null&&(t.value=o)}function Oi(t,i){if(i){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=i;return}}t.textContent=i}var ea=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Dp(t,i,r){var o=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":o?t.setProperty(i,r):typeof r!="number"||r===0||ea.has(i)?i==="float"?t.cssFloat=r:t[i]=(""+r).trim():t[i]=r+"px"}function Up(t,i,r){if(i!=null&&typeof i!="object")throw Error(s(62));if(t=t.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in i)o=i[u],i.hasOwnProperty(u)&&r[u]!==o&&Dp(t,u,o)}else for(var h in i)i.hasOwnProperty(h)&&Dp(t,h,i[h])}function Lu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _x=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),xx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Nl(t){return xx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Pu=null;function Ou(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qr=null,$r=null;function Np(t){var i=Qi(t);if(i&&(t=i.stateNode)){var r=t[Tn]||null;e:switch(t=i.stateNode,i.type){case"input":if(Ji(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+qt(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var o=r[i];if(o!==t&&o.form===t.form){var u=o[Tn]||null;if(!u)throw Error(s(90));Ji(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<r.length;i++)o=r[i],o.form===t.form&&Et(o)}break e;case"textarea":xn(t,r.value,r.defaultValue);break e;case"select":i=r.value,i!=null&&hn(t,!!r.multiple,i,!1)}}}var Bu=!1;function Lp(t,i,r){if(Bu)return t(i,r);Bu=!0;try{var o=t(i);return o}finally{if(Bu=!1,(Qr!==null||$r!==null)&&(vc(),Qr&&(i=Qr,t=$r,$r=Qr=null,Np(i),t)))for(i=0;i<t.length;i++)Np(t[i])}}function oo(t,i){var r=t.stateNode;if(r===null)return null;var o=r[Tn]||null;if(o===null)return null;r=o[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(s(231,i,typeof r));return r}var ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Iu=!1;if(ta)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){Iu=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{Iu=!1}var Ba=null,zu=null,Ll=null;function Pp(){if(Ll)return Ll;var t,i=zu,r=i.length,o,u="value"in Ba?Ba.value:Ba.textContent,h=u.length;for(t=0;t<r&&i[t]===u[t];t++);var E=r-t;for(o=1;o<=E&&i[r-o]===u[h-o];o++);return Ll=u.slice(t,1<o?1-o:void 0)}function Pl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Ol(){return!0}function Op(){return!1}function Yn(t){function i(r,o,u,h,E){this._reactName=r,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(r=t[T],this[T]=r?r(h):h[T]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Ol:Op,this.isPropagationStopped=Op,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ol)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ol)},persist:function(){},isPersistent:Ol}),i}var Sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bl=Yn(Sr),co=g({},Sr,{view:0,detail:0}),yx=Yn(co),Fu,Hu,uo,Il=g({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==uo&&(uo&&t.type==="mousemove"?(Fu=t.screenX-uo.screenX,Hu=t.screenY-uo.screenY):Hu=Fu=0,uo=t),Fu)},movementY:function(t){return"movementY"in t?t.movementY:Hu}}),Bp=Yn(Il),Sx=g({},Il,{dataTransfer:0}),bx=Yn(Sx),Ex=g({},co,{relatedTarget:0}),Gu=Yn(Ex),Mx=g({},Sr,{animationName:0,elapsedTime:0,pseudoElement:0}),Tx=Yn(Mx),wx=g({},Sr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ax=Yn(wx),Rx=g({},Sr,{data:0}),Ip=Yn(Rx),Cx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ux={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nx(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Ux[t])?!!i[t]:!1}function Vu(){return Nx}var Lx=g({},co,{key:function(t){if(t.key){var i=Cx[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Dx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vu,charCode:function(t){return t.type==="keypress"?Pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Px=Yn(Lx),Ox=g({},Il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zp=Yn(Ox),Bx=g({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vu}),Ix=Yn(Bx),zx=g({},Sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fx=Yn(zx),Hx=g({},Il,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Gx=Yn(Hx),Vx=g({},Sr,{newState:0,oldState:0}),kx=Yn(Vx),jx=[9,13,27,32],ku=ta&&"CompositionEvent"in window,fo=null;ta&&"documentMode"in document&&(fo=document.documentMode);var Xx=ta&&"TextEvent"in window&&!fo,Fp=ta&&(!ku||fo&&8<fo&&11>=fo),Hp=" ",Gp=!1;function Vp(t,i){switch(t){case"keyup":return jx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jr=!1;function Wx(t,i){switch(t){case"compositionend":return kp(i);case"keypress":return i.which!==32?null:(Gp=!0,Hp);case"textInput":return t=i.data,t===Hp&&Gp?null:t;default:return null}}function qx(t,i){if(Jr)return t==="compositionend"||!ku&&Vp(t,i)?(t=Pp(),Ll=zu=Ba=null,Jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Fp&&i.locale!=="ko"?null:i.data;default:return null}}var Yx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jp(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Yx[t.type]:i==="textarea"}function Xp(t,i,r,o){Qr?$r?$r.push(o):$r=[o]:Qr=o,i=Ec(i,"onChange"),0<i.length&&(r=new Bl("onChange","change",null,r,o),t.push({event:r,listeners:i}))}var ho=null,po=null;function Zx(t){Tv(t,0)}function zl(t){var i=yr(t);if(Et(i))return t}function Wp(t,i){if(t==="change")return i}var qp=!1;if(ta){var ju;if(ta){var Xu="oninput"in document;if(!Xu){var Yp=document.createElement("div");Yp.setAttribute("oninput","return;"),Xu=typeof Yp.oninput=="function"}ju=Xu}else ju=!1;qp=ju&&(!document.documentMode||9<document.documentMode)}function Zp(){ho&&(ho.detachEvent("onpropertychange",Kp),po=ho=null)}function Kp(t){if(t.propertyName==="value"&&zl(po)){var i=[];Xp(i,po,t,Ou(t)),Lp(Zx,i)}}function Kx(t,i,r){t==="focusin"?(Zp(),ho=i,po=r,ho.attachEvent("onpropertychange",Kp)):t==="focusout"&&Zp()}function Qx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zl(po)}function $x(t,i){if(t==="click")return zl(i)}function Jx(t,i){if(t==="input"||t==="change")return zl(i)}function ey(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ti=typeof Object.is=="function"?Object.is:ey;function mo(t,i){if(ti(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var r=Object.keys(t),o=Object.keys(i);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var u=r[o];if(!Vt.call(i,u)||!ti(t[u],i[u]))return!1}return!0}function Qp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $p(t,i){var r=Qp(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=i&&o>=i)return{node:r,offset:i-t};t=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Qp(r)}}function Jp(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Jp(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function em(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Pn(t.document);i instanceof t.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)t=i.contentWindow;else break;i=Pn(t.document)}return i}function Wu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var ty=ta&&"documentMode"in document&&11>=document.documentMode,es=null,qu=null,go=null,Yu=!1;function tm(t,i,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Yu||es==null||es!==Pn(o)||(o=es,"selectionStart"in o&&Wu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),go&&mo(go,o)||(go=o,o=Ec(qu,"onSelect"),0<o.length&&(i=new Bl("onSelect","select",null,i,r),t.push({event:i,listeners:o}),i.target=es)))}function br(t,i){var r={};return r[t.toLowerCase()]=i.toLowerCase(),r["Webkit"+t]="webkit"+i,r["Moz"+t]="moz"+i,r}var ts={animationend:br("Animation","AnimationEnd"),animationiteration:br("Animation","AnimationIteration"),animationstart:br("Animation","AnimationStart"),transitionrun:br("Transition","TransitionRun"),transitionstart:br("Transition","TransitionStart"),transitioncancel:br("Transition","TransitionCancel"),transitionend:br("Transition","TransitionEnd")},Zu={},nm={};ta&&(nm=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function Er(t){if(Zu[t])return Zu[t];if(!ts[t])return t;var i=ts[t],r;for(r in i)if(i.hasOwnProperty(r)&&r in nm)return Zu[t]=i[r];return t}var im=Er("animationend"),am=Er("animationiteration"),rm=Er("animationstart"),ny=Er("transitionrun"),iy=Er("transitionstart"),ay=Er("transitioncancel"),sm=Er("transitionend"),om=new Map,Ku="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ku.push("scrollEnd");function Ai(t,i){om.set(t,i),$i(i,[t])}var lm=new WeakMap;function gi(t,i){if(typeof t=="object"&&t!==null){var r=lm.get(t);return r!==void 0?r:(i={value:t,source:i,stack:Kt(i)},lm.set(t,i),i)}return{value:t,source:i,stack:Kt(i)}}var vi=[],ns=0,Qu=0;function Fl(){for(var t=ns,i=Qu=ns=0;i<t;){var r=vi[i];vi[i++]=null;var o=vi[i];vi[i++]=null;var u=vi[i];vi[i++]=null;var h=vi[i];if(vi[i++]=null,o!==null&&u!==null){var E=o.pending;E===null?u.next=u:(u.next=E.next,E.next=u),o.pending=u}h!==0&&cm(r,u,h)}}function Hl(t,i,r,o){vi[ns++]=t,vi[ns++]=i,vi[ns++]=r,vi[ns++]=o,Qu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function $u(t,i,r,o){return Hl(t,i,r,o),Gl(t)}function is(t,i){return Hl(t,null,null,i),Gl(t)}function cm(t,i,r){t.lanes|=r;var o=t.alternate;o!==null&&(o.lanes|=r);for(var u=!1,h=t.return;h!==null;)h.childLanes|=r,o=h.alternate,o!==null&&(o.childLanes|=r),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(u=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,u&&i!==null&&(u=31-Ge(r),t=h.hiddenUpdates,o=t[u],o===null?t[u]=[i]:o.push(i),i.lane=r|536870912),h):null}function Gl(t){if(50<Go)throw Go=0,rd=null,Error(s(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var as={};function ry(t,i,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(t,i,r,o){return new ry(t,i,r,o)}function Ju(t){return t=t.prototype,!(!t||!t.isReactComponent)}function na(t,i){var r=t.alternate;return r===null?(r=ni(t.tag,i,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=i,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,i=t.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function um(t,i){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,i=r.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Vl(t,i,r,o,u,h){var E=0;if(o=t,typeof t=="function")Ju(t)&&(E=1);else if(typeof t=="string")E=oS(t,r,$.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case N:return t=ni(31,r,i,u),t.elementType=N,t.lanes=h,t;case M:return Mr(r.children,u,h,i);case A:E=8,u|=24;break;case S:return t=ni(12,r,i,u|2),t.elementType=S,t.lanes=h,t;case F:return t=ni(13,r,i,u),t.elementType=F,t.lanes=h,t;case G:return t=ni(19,r,i,u),t.elementType=G,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case v:case D:E=10;break e;case L:E=9;break e;case U:E=11;break e;case z:E=14;break e;case W:E=16,o=null;break e}E=29,r=Error(s(130,t===null?"null":typeof t,"")),o=null}return i=ni(E,r,i,u),i.elementType=t,i.type=o,i.lanes=h,i}function Mr(t,i,r,o){return t=ni(7,t,o,i),t.lanes=r,t}function ef(t,i,r){return t=ni(6,t,null,i),t.lanes=r,t}function tf(t,i,r){return i=ni(4,t.children!==null?t.children:[],t.key,i),i.lanes=r,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var rs=[],ss=0,kl=null,jl=0,_i=[],xi=0,Tr=null,ia=1,aa="";function wr(t,i){rs[ss++]=jl,rs[ss++]=kl,kl=t,jl=i}function fm(t,i,r){_i[xi++]=ia,_i[xi++]=aa,_i[xi++]=Tr,Tr=t;var o=ia;t=aa;var u=32-Ge(o)-1;o&=~(1<<u),r+=1;var h=32-Ge(i)+u;if(30<h){var E=u-u%5;h=(o&(1<<E)-1).toString(32),o>>=E,u-=E,ia=1<<32-Ge(i)+u|r<<u|o,aa=h+t}else ia=1<<h|r<<u|o,aa=t}function nf(t){t.return!==null&&(wr(t,1),fm(t,1,0))}function af(t){for(;t===kl;)kl=rs[--ss],rs[ss]=null,jl=rs[--ss],rs[ss]=null;for(;t===Tr;)Tr=_i[--xi],_i[xi]=null,aa=_i[--xi],_i[xi]=null,ia=_i[--xi],_i[xi]=null}var Vn=null,tn=null,Ut=!1,Ar=null,Bi=!1,rf=Error(s(519));function Rr(t){var i=Error(s(418,""));throw xo(gi(i,t)),rf}function dm(t){var i=t.stateNode,r=t.type,o=t.memoizedProps;switch(i[dn]=t,i[Tn]=o,r){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(r=0;r<ko.length;r++)gt(ko[r],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":gt("invalid",i),kt(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),en(i);break;case"select":gt("invalid",i);break;case"textarea":gt("invalid",i),wn(i,o.value,o.defaultValue,o.children),en(i)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||o.suppressHydrationWarning===!0||Cv(i.textContent,r)?(o.popover!=null&&(gt("beforetoggle",i),gt("toggle",i)),o.onScroll!=null&&gt("scroll",i),o.onScrollEnd!=null&&gt("scrollend",i),o.onClick!=null&&(i.onclick=Mc),i=!0):i=!1,i||Rr(t)}function hm(t){for(Vn=t.return;Vn;)switch(Vn.tag){case 5:case 13:Bi=!1;return;case 27:case 3:Bi=!0;return;default:Vn=Vn.return}}function vo(t){if(t!==Vn)return!1;if(!Ut)return hm(t),Ut=!0,!1;var i=t.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||Sd(t.type,t.memoizedProps)),r=!r),r&&tn&&Rr(t),hm(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(r=t.data,r==="/$"){if(i===0){tn=Ci(t.nextSibling);break e}i--}else r!=="$"&&r!=="$!"&&r!=="$?"||i++;t=t.nextSibling}tn=null}}else i===27?(i=tn,$a(t.type)?(t=Td,Td=null,tn=t):tn=i):tn=Vn?Ci(t.stateNode.nextSibling):null;return!0}function _o(){tn=Vn=null,Ut=!1}function pm(){var t=Ar;return t!==null&&(Qn===null?Qn=t:Qn.push.apply(Qn,t),Ar=null),t}function xo(t){Ar===null?Ar=[t]:Ar.push(t)}var sf=ee(null),Cr=null,ra=null;function Ia(t,i,r){be(sf,i._currentValue),i._currentValue=r}function sa(t){t._currentValue=sf.current,ye(sf)}function of(t,i,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),t===r)break;t=t.return}}function lf(t,i,r,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var h=u.dependencies;if(h!==null){var E=u.child;h=h.firstContext;e:for(;h!==null;){var T=h;h=u;for(var B=0;B<i.length;B++)if(T.context===i[B]){h.lanes|=r,T=h.alternate,T!==null&&(T.lanes|=r),of(h.return,r,t),o||(E=null);break e}h=T.next}}else if(u.tag===18){if(E=u.return,E===null)throw Error(s(341));E.lanes|=r,h=E.alternate,h!==null&&(h.lanes|=r),of(E,r,t),E=null}else E=u.child;if(E!==null)E.return=u;else for(E=u;E!==null;){if(E===t){E=null;break}if(u=E.sibling,u!==null){u.return=E.return,E=u;break}E=E.return}u=E}}function yo(t,i,r,o){t=null;for(var u=i,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var E=u.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var T=u.type;ti(u.pendingProps.value,E.value)||(t!==null?t.push(T):t=[T])}}else if(u===Ae.current){if(E=u.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Zo):t=[Zo])}u=u.return}t!==null&&lf(i,t,r,o),i.flags|=262144}function Xl(t){for(t=t.firstContext;t!==null;){if(!ti(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Dr(t){Cr=t,ra=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Bn(t){return mm(Cr,t)}function Wl(t,i){return Cr===null&&Dr(t),mm(t,i)}function mm(t,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},ra===null){if(t===null)throw Error(s(308));ra=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else ra=ra.next=i;return r}var sy=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(r,o){t.push(o)}};this.abort=function(){i.aborted=!0,t.forEach(function(r){return r()})}},oy=a.unstable_scheduleCallback,ly=a.unstable_NormalPriority,pn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cf(){return{controller:new sy,data:new Map,refCount:0}}function So(t){t.refCount--,t.refCount===0&&oy(ly,function(){t.controller.abort()})}var bo=null,uf=0,os=0,ls=null;function cy(t,i){if(bo===null){var r=bo=[];uf=0,os=dd(),ls={status:"pending",value:void 0,then:function(o){r.push(o)}}}return uf++,i.then(gm,gm),i}function gm(){if(--uf===0&&bo!==null){ls!==null&&(ls.status="fulfilled");var t=bo;bo=null,os=0,ls=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function uy(t,i){var r=[],o={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return t.then(function(){o.status="fulfilled",o.value=i;for(var u=0;u<r.length;u++)(0,r[u])(i)},function(u){for(o.status="rejected",o.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),o}var vm=I.S;I.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&cy(t,i),vm!==null&&vm(t,i)};var Ur=ee(null);function ff(){var t=Ur.current;return t!==null?t:Yt.pooledCache}function ql(t,i){i===null?be(Ur,Ur.current):be(Ur,i.pool)}function _m(){var t=ff();return t===null?null:{parent:pn._currentValue,pool:t}}var Eo=Error(s(460)),xm=Error(s(474)),Yl=Error(s(542)),df={then:function(){}};function ym(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Zl(){}function Sm(t,i,r){switch(r=t[r],r===void 0?t.push(i):r!==i&&(i.then(Zl,Zl),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Em(t),t;default:if(typeof i.status=="string")i.then(Zl,Zl);else{if(t=Yt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=i,t.status="pending",t.then(function(o){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=o}},function(o){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Em(t),t}throw Mo=i,Eo}}var Mo=null;function bm(){if(Mo===null)throw Error(s(459));var t=Mo;return Mo=null,t}function Em(t){if(t===Eo||t===Yl)throw Error(s(483))}var za=!1;function hf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Fa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ha(t,i,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Pt&2)!==0){var u=o.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),o.pending=i,i=Gl(t),cm(t,null,r),i}return Hl(t,o,i,r),Gl(t)}function To(t,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var o=i.lanes;o&=t.pendingLanes,r|=o,i.lanes=r,at(t,r)}}function mf(t,i){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var u=null,h=null;if(r=r.firstBaseUpdate,r!==null){do{var E={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};h===null?u=h=E:h=h.next=E,r=r.next}while(r!==null);h===null?u=h=i:h=h.next=i}else u=h=i;r={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=i:t.next=i,r.lastBaseUpdate=i}var gf=!1;function wo(){if(gf){var t=ls;if(t!==null)throw t}}function Ao(t,i,r,o){gf=!1;var u=t.updateQueue;za=!1;var h=u.firstBaseUpdate,E=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var B=T,J=B.next;B.next=null,E===null?h=J:E.next=J,E=B;var ue=t.alternate;ue!==null&&(ue=ue.updateQueue,T=ue.lastBaseUpdate,T!==E&&(T===null?ue.firstBaseUpdate=J:T.next=J,ue.lastBaseUpdate=B))}if(h!==null){var _e=u.baseState;E=0,ue=J=B=null,T=h;do{var ne=T.lane&-536870913,ie=ne!==T.lane;if(ie?(bt&ne)===ne:(o&ne)===ne){ne!==0&&ne===os&&(gf=!0),ue!==null&&(ue=ue.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var tt=t,Ze=T;ne=i;var Ht=r;switch(Ze.tag){case 1:if(tt=Ze.payload,typeof tt=="function"){_e=tt.call(Ht,_e,ne);break e}_e=tt;break e;case 3:tt.flags=tt.flags&-65537|128;case 0:if(tt=Ze.payload,ne=typeof tt=="function"?tt.call(Ht,_e,ne):tt,ne==null)break e;_e=g({},_e,ne);break e;case 2:za=!0}}ne=T.callback,ne!==null&&(t.flags|=64,ie&&(t.flags|=8192),ie=u.callbacks,ie===null?u.callbacks=[ne]:ie.push(ne))}else ie={lane:ne,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ue===null?(J=ue=ie,B=_e):ue=ue.next=ie,E|=ne;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;ie=T,T=ie.next,ie.next=null,u.lastBaseUpdate=ie,u.shared.pending=null}}while(!0);ue===null&&(B=_e),u.baseState=B,u.firstBaseUpdate=J,u.lastBaseUpdate=ue,h===null&&(u.shared.lanes=0),Ya|=E,t.lanes=E,t.memoizedState=_e}}function Mm(t,i){if(typeof t!="function")throw Error(s(191,t));t.call(i)}function Tm(t,i){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)Mm(r[t],i)}var cs=ee(null),Kl=ee(0);function wm(t,i){t=ha,be(Kl,t),be(cs,i),ha=t|i.baseLanes}function vf(){be(Kl,ha),be(cs,cs.current)}function _f(){ha=Kl.current,ye(cs),ye(Kl)}var Ga=0,ft=null,zt=null,ln=null,Ql=!1,us=!1,Nr=!1,$l=0,Ro=0,fs=null,fy=0;function an(){throw Error(s(321))}function xf(t,i){if(i===null)return!1;for(var r=0;r<i.length&&r<t.length;r++)if(!ti(t[r],i[r]))return!1;return!0}function yf(t,i,r,o,u,h){return Ga=h,ft=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,I.H=t===null||t.memoizedState===null?cg:ug,Nr=!1,h=r(o,u),Nr=!1,us&&(h=Rm(i,r,o,u)),Am(t),h}function Am(t){I.H=ac;var i=zt!==null&&zt.next!==null;if(Ga=0,ln=zt=ft=null,Ql=!1,Ro=0,fs=null,i)throw Error(s(300));t===null||yn||(t=t.dependencies,t!==null&&Xl(t)&&(yn=!0))}function Rm(t,i,r,o){ft=t;var u=0;do{if(us&&(fs=null),Ro=0,us=!1,25<=u)throw Error(s(301));if(u+=1,ln=zt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}I.H=_y,h=i(r,o)}while(us);return h}function dy(){var t=I.H,i=t.useState()[0];return i=typeof i.then=="function"?Co(i):i,t=t.useState()[0],(zt!==null?zt.memoizedState:null)!==t&&(ft.flags|=1024),i}function Sf(){var t=$l!==0;return $l=0,t}function bf(t,i,r){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~r}function Ef(t){if(Ql){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Ql=!1}Ga=0,ln=zt=ft=null,us=!1,Ro=$l=0,fs=null}function Zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?ft.memoizedState=ln=t:ln=ln.next=t,ln}function cn(){if(zt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=zt.next;var i=ln===null?ft.memoizedState:ln.next;if(i!==null)ln=i,zt=t;else{if(t===null)throw ft.alternate===null?Error(s(467)):Error(s(310));zt=t,t={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},ln===null?ft.memoizedState=ln=t:ln=ln.next=t}return ln}function Mf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Co(t){var i=Ro;return Ro+=1,fs===null&&(fs=[]),t=Sm(fs,t,i),i=ft,(ln===null?i.memoizedState:ln.next)===null&&(i=i.alternate,I.H=i===null||i.memoizedState===null?cg:ug),t}function Jl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Co(t);if(t.$$typeof===D)return Bn(t)}throw Error(s(438,String(t)))}function Tf(t){var i=null,r=ft.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var o=ft.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=Mf(),ft.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(t),o=0;o<t;o++)r[o]=C;return i.index++,r}function oa(t,i){return typeof i=="function"?i(t):i}function ec(t){var i=cn();return wf(i,zt,t)}function wf(t,i,r){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=r;var u=t.baseQueue,h=o.pending;if(h!==null){if(u!==null){var E=u.next;u.next=h.next,h.next=E}i.baseQueue=u=h,o.pending=null}if(h=t.baseState,u===null)t.memoizedState=h;else{i=u.next;var T=E=null,B=null,J=i,ue=!1;do{var _e=J.lane&-536870913;if(_e!==J.lane?(bt&_e)===_e:(Ga&_e)===_e){var ne=J.revertLane;if(ne===0)B!==null&&(B=B.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),_e===os&&(ue=!0);else if((Ga&ne)===ne){J=J.next,ne===os&&(ue=!0);continue}else _e={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(T=B=_e,E=h):B=B.next=_e,ft.lanes|=ne,Ya|=ne;_e=J.action,Nr&&r(h,_e),h=J.hasEagerState?J.eagerState:r(h,_e)}else ne={lane:_e,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(T=B=ne,E=h):B=B.next=ne,ft.lanes|=_e,Ya|=_e;J=J.next}while(J!==null&&J!==i);if(B===null?E=h:B.next=T,!ti(h,t.memoizedState)&&(yn=!0,ue&&(r=ls,r!==null)))throw r;t.memoizedState=h,t.baseState=E,t.baseQueue=B,o.lastRenderedState=h}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Af(t){var i=cn(),r=i.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=t;var o=r.dispatch,u=r.pending,h=i.memoizedState;if(u!==null){r.pending=null;var E=u=u.next;do h=t(h,E.action),E=E.next;while(E!==u);ti(h,i.memoizedState)||(yn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),r.lastRenderedState=h}return[h,o]}function Cm(t,i,r){var o=ft,u=cn(),h=Ut;if(h){if(r===void 0)throw Error(s(407));r=r()}else r=i();var E=!ti((zt||u).memoizedState,r);E&&(u.memoizedState=r,yn=!0),u=u.queue;var T=Nm.bind(null,o,u,t);if(Do(2048,8,T,[t]),u.getSnapshot!==i||E||ln!==null&&ln.memoizedState.tag&1){if(o.flags|=2048,ds(9,tc(),Um.bind(null,o,u,r,i),null),Yt===null)throw Error(s(349));h||(Ga&124)!==0||Dm(o,i,r)}return r}function Dm(t,i,r){t.flags|=16384,t={getSnapshot:i,value:r},i=ft.updateQueue,i===null?(i=Mf(),ft.updateQueue=i,i.stores=[t]):(r=i.stores,r===null?i.stores=[t]:r.push(t))}function Um(t,i,r,o){i.value=r,i.getSnapshot=o,Lm(i)&&Pm(t)}function Nm(t,i,r){return r(function(){Lm(i)&&Pm(t)})}function Lm(t){var i=t.getSnapshot;t=t.value;try{var r=i();return!ti(t,r)}catch{return!0}}function Pm(t){var i=is(t,2);i!==null&&oi(i,t,2)}function Rf(t){var i=Zn();if(typeof t=="function"){var r=t;if(t=r(),Nr){Re(!0);try{r()}finally{Re(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:t},i}function Om(t,i,r,o){return t.baseState=r,wf(t,zt,typeof o=="function"?o:oa)}function hy(t,i,r,o,u){if(ic(t))throw Error(s(485));if(t=i.action,t!==null){var h={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){h.listeners.push(E)}};I.T!==null?r(!0):h.isTransition=!1,o(h),r=i.pending,r===null?(h.next=i.pending=h,Bm(i,h)):(h.next=r.next,i.pending=r.next=h)}}function Bm(t,i){var r=i.action,o=i.payload,u=t.state;if(i.isTransition){var h=I.T,E={};I.T=E;try{var T=r(u,o),B=I.S;B!==null&&B(E,T),Im(t,i,T)}catch(J){Cf(t,i,J)}finally{I.T=h}}else try{h=r(u,o),Im(t,i,h)}catch(J){Cf(t,i,J)}}function Im(t,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){zm(t,i,o)},function(o){return Cf(t,i,o)}):zm(t,i,r)}function zm(t,i,r){i.status="fulfilled",i.value=r,Fm(i),t.state=r,i=t.pending,i!==null&&(r=i.next,r===i?t.pending=null:(r=r.next,i.next=r,Bm(t,r)))}function Cf(t,i,r){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=r,Fm(i),i=i.next;while(i!==o)}t.action=null}function Fm(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function Hm(t,i){return i}function Gm(t,i){if(Ut){var r=Yt.formState;if(r!==null){e:{var o=ft;if(Ut){if(tn){t:{for(var u=tn,h=Bi;u.nodeType!==8;){if(!h){u=null;break t}if(u=Ci(u.nextSibling),u===null){u=null;break t}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){tn=Ci(u.nextSibling),o=u.data==="F!";break e}}Rr(o)}o=!1}o&&(i=r[0])}}return r=Zn(),r.memoizedState=r.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hm,lastRenderedState:i},r.queue=o,r=sg.bind(null,ft,o),o.dispatch=r,o=Rf(!1),h=Pf.bind(null,ft,!1,o.queue),o=Zn(),u={state:i,dispatch:null,action:t,pending:null},o.queue=u,r=hy.bind(null,ft,u,h,r),u.dispatch=r,o.memoizedState=t,[i,r,!1]}function Vm(t){var i=cn();return km(i,zt,t)}function km(t,i,r){if(i=wf(t,i,Hm)[0],t=ec(oa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=Co(i)}catch(E){throw E===Eo?Yl:E}else o=i;i=cn();var u=i.queue,h=u.dispatch;return r!==i.memoizedState&&(ft.flags|=2048,ds(9,tc(),py.bind(null,u,r),null)),[o,h,t]}function py(t,i){t.action=i}function jm(t){var i=cn(),r=zt;if(r!==null)return km(i,r,t);cn(),i=i.memoizedState,r=cn();var o=r.queue.dispatch;return r.memoizedState=t,[i,o,!1]}function ds(t,i,r,o){return t={tag:t,create:r,deps:o,inst:i,next:null},i=ft.updateQueue,i===null&&(i=Mf(),ft.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,i.lastEffect=t),t}function tc(){return{destroy:void 0,resource:void 0}}function Xm(){return cn().memoizedState}function nc(t,i,r,o){var u=Zn();o=o===void 0?null:o,ft.flags|=t,u.memoizedState=ds(1|i,tc(),r,o)}function Do(t,i,r,o){var u=cn();o=o===void 0?null:o;var h=u.memoizedState.inst;zt!==null&&o!==null&&xf(o,zt.memoizedState.deps)?u.memoizedState=ds(i,h,r,o):(ft.flags|=t,u.memoizedState=ds(1|i,h,r,o))}function Wm(t,i){nc(8390656,8,t,i)}function qm(t,i){Do(2048,8,t,i)}function Ym(t,i){return Do(4,2,t,i)}function Zm(t,i){return Do(4,4,t,i)}function Km(t,i){if(typeof i=="function"){t=t();var r=i(t);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Qm(t,i,r){r=r!=null?r.concat([t]):null,Do(4,4,Km.bind(null,i,t),r)}function Df(){}function $m(t,i){var r=cn();i=i===void 0?null:i;var o=r.memoizedState;return i!==null&&xf(i,o[1])?o[0]:(r.memoizedState=[t,i],t)}function Jm(t,i){var r=cn();i=i===void 0?null:i;var o=r.memoizedState;if(i!==null&&xf(i,o[1]))return o[0];if(o=t(),Nr){Re(!0);try{t()}finally{Re(!1)}}return r.memoizedState=[o,i],o}function Uf(t,i,r){return r===void 0||(Ga&1073741824)!==0?t.memoizedState=i:(t.memoizedState=r,t=nv(),ft.lanes|=t,Ya|=t,r)}function eg(t,i,r,o){return ti(r,i)?r:cs.current!==null?(t=Uf(t,r,o),ti(t,i)||(yn=!0),t):(Ga&42)===0?(yn=!0,t.memoizedState=r):(t=nv(),ft.lanes|=t,Ya|=t,i)}function tg(t,i,r,o,u){var h=K.p;K.p=h!==0&&8>h?h:8;var E=I.T,T={};I.T=T,Pf(t,!1,i,r);try{var B=u(),J=I.S;if(J!==null&&J(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ue=uy(B,o);Uo(t,i,ue,si(t))}else Uo(t,i,o,si(t))}catch(_e){Uo(t,i,{then:function(){},status:"rejected",reason:_e},si())}finally{K.p=h,I.T=E}}function my(){}function Nf(t,i,r,o){if(t.tag!==5)throw Error(s(476));var u=ng(t).queue;tg(t,u,i,Y,r===null?my:function(){return ig(t),r(o)})}function ng(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:Y},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:r},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function ig(t){var i=ng(t).next.queue;Uo(t,i,{},si())}function Lf(){return Bn(Zo)}function ag(){return cn().memoizedState}function rg(){return cn().memoizedState}function gy(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var r=si();t=Fa(r);var o=Ha(i,t,r);o!==null&&(oi(o,i,r),To(o,i,r)),i={cache:cf()},t.payload=i;return}i=i.return}}function vy(t,i,r){var o=si();r={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},ic(t)?og(i,r):(r=$u(t,i,r,o),r!==null&&(oi(r,t,o),lg(r,i,o)))}function sg(t,i,r){var o=si();Uo(t,i,r,o)}function Uo(t,i,r,o){var u={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(ic(t))og(i,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var E=i.lastRenderedState,T=h(E,r);if(u.hasEagerState=!0,u.eagerState=T,ti(T,E))return Hl(t,i,u,0),Yt===null&&Fl(),!1}catch{}finally{}if(r=$u(t,i,u,o),r!==null)return oi(r,t,o),lg(r,i,o),!0}return!1}function Pf(t,i,r,o){if(o={lane:2,revertLane:dd(),action:o,hasEagerState:!1,eagerState:null,next:null},ic(t)){if(i)throw Error(s(479))}else i=$u(t,r,o,2),i!==null&&oi(i,t,2)}function ic(t){var i=t.alternate;return t===ft||i!==null&&i===ft}function og(t,i){us=Ql=!0;var r=t.pending;r===null?i.next=i:(i.next=r.next,r.next=i),t.pending=i}function lg(t,i,r){if((r&4194048)!==0){var o=i.lanes;o&=t.pendingLanes,r|=o,i.lanes=r,at(t,r)}}var ac={readContext:Bn,use:Jl,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an},cg={readContext:Bn,use:Jl,useCallback:function(t,i){return Zn().memoizedState=[t,i===void 0?null:i],t},useContext:Bn,useEffect:Wm,useImperativeHandle:function(t,i,r){r=r!=null?r.concat([t]):null,nc(4194308,4,Km.bind(null,i,t),r)},useLayoutEffect:function(t,i){return nc(4194308,4,t,i)},useInsertionEffect:function(t,i){nc(4,2,t,i)},useMemo:function(t,i){var r=Zn();i=i===void 0?null:i;var o=t();if(Nr){Re(!0);try{t()}finally{Re(!1)}}return r.memoizedState=[o,i],o},useReducer:function(t,i,r){var o=Zn();if(r!==void 0){var u=r(i);if(Nr){Re(!0);try{r(i)}finally{Re(!1)}}}else u=i;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=vy.bind(null,ft,t),[o.memoizedState,t]},useRef:function(t){var i=Zn();return t={current:t},i.memoizedState=t},useState:function(t){t=Rf(t);var i=t.queue,r=sg.bind(null,ft,i);return i.dispatch=r,[t.memoizedState,r]},useDebugValue:Df,useDeferredValue:function(t,i){var r=Zn();return Uf(r,t,i)},useTransition:function(){var t=Rf(!1);return t=tg.bind(null,ft,t.queue,!0,!1),Zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,r){var o=ft,u=Zn();if(Ut){if(r===void 0)throw Error(s(407));r=r()}else{if(r=i(),Yt===null)throw Error(s(349));(bt&124)!==0||Dm(o,i,r)}u.memoizedState=r;var h={value:r,getSnapshot:i};return u.queue=h,Wm(Nm.bind(null,o,h,t),[t]),o.flags|=2048,ds(9,tc(),Um.bind(null,o,h,r,i),null),r},useId:function(){var t=Zn(),i=Yt.identifierPrefix;if(Ut){var r=aa,o=ia;r=(o&~(1<<32-Ge(o)-1)).toString(32)+r,i="«"+i+"R"+r,r=$l++,0<r&&(i+="H"+r.toString(32)),i+="»"}else r=fy++,i="«"+i+"r"+r.toString(32)+"»";return t.memoizedState=i},useHostTransitionStatus:Lf,useFormState:Gm,useActionState:Gm,useOptimistic:function(t){var i=Zn();i.memoizedState=i.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=Pf.bind(null,ft,!0,r),r.dispatch=i,[t,i]},useMemoCache:Tf,useCacheRefresh:function(){return Zn().memoizedState=gy.bind(null,ft)}},ug={readContext:Bn,use:Jl,useCallback:$m,useContext:Bn,useEffect:qm,useImperativeHandle:Qm,useInsertionEffect:Ym,useLayoutEffect:Zm,useMemo:Jm,useReducer:ec,useRef:Xm,useState:function(){return ec(oa)},useDebugValue:Df,useDeferredValue:function(t,i){var r=cn();return eg(r,zt.memoizedState,t,i)},useTransition:function(){var t=ec(oa)[0],i=cn().memoizedState;return[typeof t=="boolean"?t:Co(t),i]},useSyncExternalStore:Cm,useId:ag,useHostTransitionStatus:Lf,useFormState:Vm,useActionState:Vm,useOptimistic:function(t,i){var r=cn();return Om(r,zt,t,i)},useMemoCache:Tf,useCacheRefresh:rg},_y={readContext:Bn,use:Jl,useCallback:$m,useContext:Bn,useEffect:qm,useImperativeHandle:Qm,useInsertionEffect:Ym,useLayoutEffect:Zm,useMemo:Jm,useReducer:Af,useRef:Xm,useState:function(){return Af(oa)},useDebugValue:Df,useDeferredValue:function(t,i){var r=cn();return zt===null?Uf(r,t,i):eg(r,zt.memoizedState,t,i)},useTransition:function(){var t=Af(oa)[0],i=cn().memoizedState;return[typeof t=="boolean"?t:Co(t),i]},useSyncExternalStore:Cm,useId:ag,useHostTransitionStatus:Lf,useFormState:jm,useActionState:jm,useOptimistic:function(t,i){var r=cn();return zt!==null?Om(r,zt,t,i):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:Tf,useCacheRefresh:rg},hs=null,No=0;function rc(t){var i=No;return No+=1,hs===null&&(hs=[]),Sm(hs,t,i)}function Lo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function sc(t,i){throw i.$$typeof===_?Error(s(525)):(t=Object.prototype.toString.call(i),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function fg(t){var i=t._init;return i(t._payload)}function dg(t){function i(X,V){if(t){var Q=X.deletions;Q===null?(X.deletions=[V],X.flags|=16):Q.push(V)}}function r(X,V){if(!t)return null;for(;V!==null;)i(X,V),V=V.sibling;return null}function o(X){for(var V=new Map;X!==null;)X.key!==null?V.set(X.key,X):V.set(X.index,X),X=X.sibling;return V}function u(X,V){return X=na(X,V),X.index=0,X.sibling=null,X}function h(X,V,Q){return X.index=Q,t?(Q=X.alternate,Q!==null?(Q=Q.index,Q<V?(X.flags|=67108866,V):Q):(X.flags|=67108866,V)):(X.flags|=1048576,V)}function E(X){return t&&X.alternate===null&&(X.flags|=67108866),X}function T(X,V,Q,he){return V===null||V.tag!==6?(V=ef(Q,X.mode,he),V.return=X,V):(V=u(V,Q),V.return=X,V)}function B(X,V,Q,he){var He=Q.type;return He===M?ue(X,V,Q.props.children,he,Q.key):V!==null&&(V.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===W&&fg(He)===V.type)?(V=u(V,Q.props),Lo(V,Q),V.return=X,V):(V=Vl(Q.type,Q.key,Q.props,null,X.mode,he),Lo(V,Q),V.return=X,V)}function J(X,V,Q,he){return V===null||V.tag!==4||V.stateNode.containerInfo!==Q.containerInfo||V.stateNode.implementation!==Q.implementation?(V=tf(Q,X.mode,he),V.return=X,V):(V=u(V,Q.children||[]),V.return=X,V)}function ue(X,V,Q,he,He){return V===null||V.tag!==7?(V=Mr(Q,X.mode,he,He),V.return=X,V):(V=u(V,Q),V.return=X,V)}function _e(X,V,Q){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=ef(""+V,X.mode,Q),V.return=X,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case x:return Q=Vl(V.type,V.key,V.props,null,X.mode,Q),Lo(Q,V),Q.return=X,Q;case b:return V=tf(V,X.mode,Q),V.return=X,V;case W:var he=V._init;return V=he(V._payload),_e(X,V,Q)}if(pe(V)||ce(V))return V=Mr(V,X.mode,Q,null),V.return=X,V;if(typeof V.then=="function")return _e(X,rc(V),Q);if(V.$$typeof===D)return _e(X,Wl(X,V),Q);sc(X,V)}return null}function ne(X,V,Q,he){var He=V!==null?V.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return He!==null?null:T(X,V,""+Q,he);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:return Q.key===He?B(X,V,Q,he):null;case b:return Q.key===He?J(X,V,Q,he):null;case W:return He=Q._init,Q=He(Q._payload),ne(X,V,Q,he)}if(pe(Q)||ce(Q))return He!==null?null:ue(X,V,Q,he,null);if(typeof Q.then=="function")return ne(X,V,rc(Q),he);if(Q.$$typeof===D)return ne(X,V,Wl(X,Q),he);sc(X,Q)}return null}function ie(X,V,Q,he,He){if(typeof he=="string"&&he!==""||typeof he=="number"||typeof he=="bigint")return X=X.get(Q)||null,T(V,X,""+he,He);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case x:return X=X.get(he.key===null?Q:he.key)||null,B(V,X,he,He);case b:return X=X.get(he.key===null?Q:he.key)||null,J(V,X,he,He);case W:var ht=he._init;return he=ht(he._payload),ie(X,V,Q,he,He)}if(pe(he)||ce(he))return X=X.get(Q)||null,ue(V,X,he,He,null);if(typeof he.then=="function")return ie(X,V,Q,rc(he),He);if(he.$$typeof===D)return ie(X,V,Q,Wl(V,he),He);sc(V,he)}return null}function tt(X,V,Q,he){for(var He=null,ht=null,ke=V,$e=V=0,bn=null;ke!==null&&$e<Q.length;$e++){ke.index>$e?(bn=ke,ke=null):bn=ke.sibling;var At=ne(X,ke,Q[$e],he);if(At===null){ke===null&&(ke=bn);break}t&&ke&&At.alternate===null&&i(X,ke),V=h(At,V,$e),ht===null?He=At:ht.sibling=At,ht=At,ke=bn}if($e===Q.length)return r(X,ke),Ut&&wr(X,$e),He;if(ke===null){for(;$e<Q.length;$e++)ke=_e(X,Q[$e],he),ke!==null&&(V=h(ke,V,$e),ht===null?He=ke:ht.sibling=ke,ht=ke);return Ut&&wr(X,$e),He}for(ke=o(ke);$e<Q.length;$e++)bn=ie(ke,X,$e,Q[$e],he),bn!==null&&(t&&bn.alternate!==null&&ke.delete(bn.key===null?$e:bn.key),V=h(bn,V,$e),ht===null?He=bn:ht.sibling=bn,ht=bn);return t&&ke.forEach(function(ir){return i(X,ir)}),Ut&&wr(X,$e),He}function Ze(X,V,Q,he){if(Q==null)throw Error(s(151));for(var He=null,ht=null,ke=V,$e=V=0,bn=null,At=Q.next();ke!==null&&!At.done;$e++,At=Q.next()){ke.index>$e?(bn=ke,ke=null):bn=ke.sibling;var ir=ne(X,ke,At.value,he);if(ir===null){ke===null&&(ke=bn);break}t&&ke&&ir.alternate===null&&i(X,ke),V=h(ir,V,$e),ht===null?He=ir:ht.sibling=ir,ht=ir,ke=bn}if(At.done)return r(X,ke),Ut&&wr(X,$e),He;if(ke===null){for(;!At.done;$e++,At=Q.next())At=_e(X,At.value,he),At!==null&&(V=h(At,V,$e),ht===null?He=At:ht.sibling=At,ht=At);return Ut&&wr(X,$e),He}for(ke=o(ke);!At.done;$e++,At=Q.next())At=ie(ke,X,$e,At.value,he),At!==null&&(t&&At.alternate!==null&&ke.delete(At.key===null?$e:At.key),V=h(At,V,$e),ht===null?He=At:ht.sibling=At,ht=At);return t&&ke.forEach(function(xS){return i(X,xS)}),Ut&&wr(X,$e),He}function Ht(X,V,Q,he){if(typeof Q=="object"&&Q!==null&&Q.type===M&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:e:{for(var He=Q.key;V!==null;){if(V.key===He){if(He=Q.type,He===M){if(V.tag===7){r(X,V.sibling),he=u(V,Q.props.children),he.return=X,X=he;break e}}else if(V.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===W&&fg(He)===V.type){r(X,V.sibling),he=u(V,Q.props),Lo(he,Q),he.return=X,X=he;break e}r(X,V);break}else i(X,V);V=V.sibling}Q.type===M?(he=Mr(Q.props.children,X.mode,he,Q.key),he.return=X,X=he):(he=Vl(Q.type,Q.key,Q.props,null,X.mode,he),Lo(he,Q),he.return=X,X=he)}return E(X);case b:e:{for(He=Q.key;V!==null;){if(V.key===He)if(V.tag===4&&V.stateNode.containerInfo===Q.containerInfo&&V.stateNode.implementation===Q.implementation){r(X,V.sibling),he=u(V,Q.children||[]),he.return=X,X=he;break e}else{r(X,V);break}else i(X,V);V=V.sibling}he=tf(Q,X.mode,he),he.return=X,X=he}return E(X);case W:return He=Q._init,Q=He(Q._payload),Ht(X,V,Q,he)}if(pe(Q))return tt(X,V,Q,he);if(ce(Q)){if(He=ce(Q),typeof He!="function")throw Error(s(150));return Q=He.call(Q),Ze(X,V,Q,he)}if(typeof Q.then=="function")return Ht(X,V,rc(Q),he);if(Q.$$typeof===D)return Ht(X,V,Wl(X,Q),he);sc(X,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,V!==null&&V.tag===6?(r(X,V.sibling),he=u(V,Q),he.return=X,X=he):(r(X,V),he=ef(Q,X.mode,he),he.return=X,X=he),E(X)):r(X,V)}return function(X,V,Q,he){try{No=0;var He=Ht(X,V,Q,he);return hs=null,He}catch(ke){if(ke===Eo||ke===Yl)throw ke;var ht=ni(29,ke,null,X.mode);return ht.lanes=he,ht.return=X,ht}finally{}}}var ps=dg(!0),hg=dg(!1),yi=ee(null),Ii=null;function Va(t){var i=t.alternate;be(mn,mn.current&1),be(yi,t),Ii===null&&(i===null||cs.current!==null||i.memoizedState!==null)&&(Ii=t)}function pg(t){if(t.tag===22){if(be(mn,mn.current),be(yi,t),Ii===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(Ii=t)}}else ka()}function ka(){be(mn,mn.current),be(yi,yi.current)}function la(t){ye(yi),Ii===t&&(Ii=null),ye(mn)}var mn=ee(0);function oc(t){for(var i=t;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||Md(r)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Of(t,i,r,o){i=t.memoizedState,r=r(o,i),r=r==null?i:g({},i,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Bf={enqueueSetState:function(t,i,r){t=t._reactInternals;var o=si(),u=Fa(o);u.payload=i,r!=null&&(u.callback=r),i=Ha(t,u,o),i!==null&&(oi(i,t,o),To(i,t,o))},enqueueReplaceState:function(t,i,r){t=t._reactInternals;var o=si(),u=Fa(o);u.tag=1,u.payload=i,r!=null&&(u.callback=r),i=Ha(t,u,o),i!==null&&(oi(i,t,o),To(i,t,o))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var r=si(),o=Fa(r);o.tag=2,i!=null&&(o.callback=i),i=Ha(t,o,r),i!==null&&(oi(i,t,r),To(i,t,r))}};function mg(t,i,r,o,u,h,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,h,E):i.prototype&&i.prototype.isPureReactComponent?!mo(r,o)||!mo(u,h):!0}function gg(t,i,r,o){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,o),i.state!==t&&Bf.enqueueReplaceState(i,i.state,null)}function Lr(t,i){var r=i;if("ref"in i){r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}if(t=t.defaultProps){r===i&&(r=g({},r));for(var u in t)r[u]===void 0&&(r[u]=t[u])}return r}var lc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function vg(t){lc(t)}function _g(t){console.error(t)}function xg(t){lc(t)}function cc(t,i){try{var r=t.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function yg(t,i,r){try{var o=t.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function If(t,i,r){return r=Fa(r),r.tag=3,r.payload={element:null},r.callback=function(){cc(t,i)},r}function Sg(t){return t=Fa(t),t.tag=3,t}function bg(t,i,r,o){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;t.payload=function(){return u(h)},t.callback=function(){yg(i,r,o)}}var E=r.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){yg(i,r,o),typeof u!="function"&&(Za===null?Za=new Set([this]):Za.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function xy(t,i,r,o,u){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=r.alternate,i!==null&&yo(i,r,u,!0),r=yi.current,r!==null){switch(r.tag){case 13:return Ii===null?od():r.alternate===null&&nn===0&&(nn=3),r.flags&=-257,r.flags|=65536,r.lanes=u,o===df?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([o]):i.add(o),cd(t,o,u)),!1;case 22:return r.flags|=65536,o===df?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([o]):r.add(o)),cd(t,o,u)),!1}throw Error(s(435,r.tag))}return cd(t,o,u),od(),!1}if(Ut)return i=yi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,o!==rf&&(t=Error(s(422),{cause:o}),xo(gi(t,r)))):(o!==rf&&(i=Error(s(423),{cause:o}),xo(gi(i,r))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=gi(o,r),u=If(t.stateNode,o,u),mf(t,u),nn!==4&&(nn=2)),!1;var h=Error(s(520),{cause:o});if(h=gi(h,r),Ho===null?Ho=[h]:Ho.push(h),nn!==4&&(nn=2),i===null)return!0;o=gi(o,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,t=u&-u,r.lanes|=t,t=If(r.stateNode,o,t),mf(r,t),!1;case 1:if(i=r.type,h=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Za===null||!Za.has(h))))return r.flags|=65536,u&=-u,r.lanes|=u,u=Sg(u),bg(u,t,r,o),mf(r,u),!1}r=r.return}while(r!==null);return!1}var Eg=Error(s(461)),yn=!1;function An(t,i,r,o){i.child=t===null?hg(i,null,r,o):ps(i,t.child,r,o)}function Mg(t,i,r,o,u){r=r.render;var h=i.ref;if("ref"in o){var E={};for(var T in o)T!=="ref"&&(E[T]=o[T])}else E=o;return Dr(i),o=yf(t,i,r,E,h,u),T=Sf(),t!==null&&!yn?(bf(t,i,u),ca(t,i,u)):(Ut&&T&&nf(i),i.flags|=1,An(t,i,o,u),i.child)}function Tg(t,i,r,o,u){if(t===null){var h=r.type;return typeof h=="function"&&!Ju(h)&&h.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=h,wg(t,i,h,o,u)):(t=Vl(r.type,null,o,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!Xf(t,u)){var E=h.memoizedProps;if(r=r.compare,r=r!==null?r:mo,r(E,o)&&t.ref===i.ref)return ca(t,i,u)}return i.flags|=1,t=na(h,o),t.ref=i.ref,t.return=i,i.child=t}function wg(t,i,r,o,u){if(t!==null){var h=t.memoizedProps;if(mo(h,o)&&t.ref===i.ref)if(yn=!1,i.pendingProps=o=h,Xf(t,u))(t.flags&131072)!==0&&(yn=!0);else return i.lanes=t.lanes,ca(t,i,u)}return zf(t,i,r,o,u)}function Ag(t,i,r){var o=i.pendingProps,u=o.children,h=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((i.flags&128)!==0){if(o=h!==null?h.baseLanes|r:r,t!==null){for(u=i.child=t.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;i.childLanes=h&~o}else i.childLanes=0,i.child=null;return Rg(t,i,o,r)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&ql(i,h!==null?h.cachePool:null),h!==null?wm(i,h):vf(),pg(i);else return i.lanes=i.childLanes=536870912,Rg(t,i,h!==null?h.baseLanes|r:r,r)}else h!==null?(ql(i,h.cachePool),wm(i,h),ka(),i.memoizedState=null):(t!==null&&ql(i,null),vf(),ka());return An(t,i,u,r),i.child}function Rg(t,i,r,o){var u=ff();return u=u===null?null:{parent:pn._currentValue,pool:u},i.memoizedState={baseLanes:r,cachePool:u},t!==null&&ql(i,null),vf(),pg(i),t!==null&&yo(t,i,o,!0),null}function uc(t,i){var r=i.ref;if(r===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(s(284));(t===null||t.ref!==r)&&(i.flags|=4194816)}}function zf(t,i,r,o,u){return Dr(i),r=yf(t,i,r,o,void 0,u),o=Sf(),t!==null&&!yn?(bf(t,i,u),ca(t,i,u)):(Ut&&o&&nf(i),i.flags|=1,An(t,i,r,u),i.child)}function Cg(t,i,r,o,u,h){return Dr(i),i.updateQueue=null,r=Rm(i,o,r,u),Am(t),o=Sf(),t!==null&&!yn?(bf(t,i,h),ca(t,i,h)):(Ut&&o&&nf(i),i.flags|=1,An(t,i,r,h),i.child)}function Dg(t,i,r,o,u){if(Dr(i),i.stateNode===null){var h=as,E=r.contextType;typeof E=="object"&&E!==null&&(h=Bn(E)),h=new r(o,h),i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Bf,i.stateNode=h,h._reactInternals=i,h=i.stateNode,h.props=o,h.state=i.memoizedState,h.refs={},hf(i),E=r.contextType,h.context=typeof E=="object"&&E!==null?Bn(E):as,h.state=i.memoizedState,E=r.getDerivedStateFromProps,typeof E=="function"&&(Of(i,r,E,o),h.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(E=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),E!==h.state&&Bf.enqueueReplaceState(h,h.state,null),Ao(i,o,h,u),wo(),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(t===null){h=i.stateNode;var T=i.memoizedProps,B=Lr(r,T);h.props=B;var J=h.context,ue=r.contextType;E=as,typeof ue=="object"&&ue!==null&&(E=Bn(ue));var _e=r.getDerivedStateFromProps;ue=typeof _e=="function"||typeof h.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,ue||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(T||J!==E)&&gg(i,h,o,E),za=!1;var ne=i.memoizedState;h.state=ne,Ao(i,o,h,u),wo(),J=i.memoizedState,T||ne!==J||za?(typeof _e=="function"&&(Of(i,r,_e,o),J=i.memoizedState),(B=za||mg(i,r,B,o,ne,J,E))?(ue||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(i.flags|=4194308)):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=J),h.props=o,h.state=J,h.context=E,o=B):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{h=i.stateNode,pf(t,i),E=i.memoizedProps,ue=Lr(r,E),h.props=ue,_e=i.pendingProps,ne=h.context,J=r.contextType,B=as,typeof J=="object"&&J!==null&&(B=Bn(J)),T=r.getDerivedStateFromProps,(J=typeof T=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(E!==_e||ne!==B)&&gg(i,h,o,B),za=!1,ne=i.memoizedState,h.state=ne,Ao(i,o,h,u),wo();var ie=i.memoizedState;E!==_e||ne!==ie||za||t!==null&&t.dependencies!==null&&Xl(t.dependencies)?(typeof T=="function"&&(Of(i,r,T,o),ie=i.memoizedState),(ue=za||mg(i,r,ue,o,ne,ie,B)||t!==null&&t.dependencies!==null&&Xl(t.dependencies))?(J||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ie,B),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ie,B)),typeof h.componentDidUpdate=="function"&&(i.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof h.componentDidUpdate!="function"||E===t.memoizedProps&&ne===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&ne===t.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=ie),h.props=o,h.state=ie,h.context=B,o=ue):(typeof h.componentDidUpdate!="function"||E===t.memoizedProps&&ne===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&ne===t.memoizedState||(i.flags|=1024),o=!1)}return h=o,uc(t,i),o=(i.flags&128)!==0,h||o?(h=i.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:h.render(),i.flags|=1,t!==null&&o?(i.child=ps(i,t.child,null,u),i.child=ps(i,null,r,u)):An(t,i,r,u),i.memoizedState=h.state,t=i.child):t=ca(t,i,u),t}function Ug(t,i,r,o){return _o(),i.flags|=256,An(t,i,r,o),i.child}var Ff={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hf(t){return{baseLanes:t,cachePool:_m()}}function Gf(t,i,r){return t=t!==null?t.childLanes&~r:0,i&&(t|=Si),t}function Ng(t,i,r){var o=i.pendingProps,u=!1,h=(i.flags&128)!==0,E;if((E=h)||(E=t!==null&&t.memoizedState===null?!1:(mn.current&2)!==0),E&&(u=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,t===null){if(Ut){if(u?Va(i):ka(),Ut){var T=tn,B;if(B=T){e:{for(B=T,T=Bi;B.nodeType!==8;){if(!T){T=null;break e}if(B=Ci(B.nextSibling),B===null){T=null;break e}}T=B}T!==null?(i.memoizedState={dehydrated:T,treeContext:Tr!==null?{id:ia,overflow:aa}:null,retryLane:536870912,hydrationErrors:null},B=ni(18,null,null,0),B.stateNode=T,B.return=i,i.child=B,Vn=i,tn=null,B=!0):B=!1}B||Rr(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Md(T)?i.lanes=32:i.lanes=536870912,null;la(i)}return T=o.children,o=o.fallback,u?(ka(),u=i.mode,T=fc({mode:"hidden",children:T},u),o=Mr(o,u,r,null),T.return=i,o.return=i,T.sibling=o,i.child=T,u=i.child,u.memoizedState=Hf(r),u.childLanes=Gf(t,E,r),i.memoizedState=Ff,o):(Va(i),Vf(i,T))}if(B=t.memoizedState,B!==null&&(T=B.dehydrated,T!==null)){if(h)i.flags&256?(Va(i),i.flags&=-257,i=kf(t,i,r)):i.memoizedState!==null?(ka(),i.child=t.child,i.flags|=128,i=null):(ka(),u=o.fallback,T=i.mode,o=fc({mode:"visible",children:o.children},T),u=Mr(u,T,r,null),u.flags|=2,o.return=i,u.return=i,o.sibling=u,i.child=o,ps(i,t.child,null,r),o=i.child,o.memoizedState=Hf(r),o.childLanes=Gf(t,E,r),i.memoizedState=Ff,i=u);else if(Va(i),Md(T)){if(E=T.nextSibling&&T.nextSibling.dataset,E)var J=E.dgst;E=J,o=Error(s(419)),o.stack="",o.digest=E,xo({value:o,source:null,stack:null}),i=kf(t,i,r)}else if(yn||yo(t,i,r,!1),E=(r&t.childLanes)!==0,yn||E){if(E=Yt,E!==null&&(o=r&-r,o=(o&42)!==0?1:Wt(o),o=(o&(E.suspendedLanes|r))!==0?0:o,o!==0&&o!==B.retryLane))throw B.retryLane=o,is(t,o),oi(E,t,o),Eg;T.data==="$?"||od(),i=kf(t,i,r)}else T.data==="$?"?(i.flags|=192,i.child=t.child,i=null):(t=B.treeContext,tn=Ci(T.nextSibling),Vn=i,Ut=!0,Ar=null,Bi=!1,t!==null&&(_i[xi++]=ia,_i[xi++]=aa,_i[xi++]=Tr,ia=t.id,aa=t.overflow,Tr=i),i=Vf(i,o.children),i.flags|=4096);return i}return u?(ka(),u=o.fallback,T=i.mode,B=t.child,J=B.sibling,o=na(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,J!==null?u=na(J,u):(u=Mr(u,T,r,null),u.flags|=2),u.return=i,o.return=i,o.sibling=u,i.child=o,o=u,u=i.child,T=t.child.memoizedState,T===null?T=Hf(r):(B=T.cachePool,B!==null?(J=pn._currentValue,B=B.parent!==J?{parent:J,pool:J}:B):B=_m(),T={baseLanes:T.baseLanes|r,cachePool:B}),u.memoizedState=T,u.childLanes=Gf(t,E,r),i.memoizedState=Ff,o):(Va(i),r=t.child,t=r.sibling,r=na(r,{mode:"visible",children:o.children}),r.return=i,r.sibling=null,t!==null&&(E=i.deletions,E===null?(i.deletions=[t],i.flags|=16):E.push(t)),i.child=r,i.memoizedState=null,r)}function Vf(t,i){return i=fc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function fc(t,i){return t=ni(22,t,null,i),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function kf(t,i,r){return ps(i,t.child,null,r),t=Vf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Lg(t,i,r){t.lanes|=i;var o=t.alternate;o!==null&&(o.lanes|=i),of(t.return,i,r)}function jf(t,i,r,o,u){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:u}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=r,h.tailMode=u)}function Pg(t,i,r){var o=i.pendingProps,u=o.revealOrder,h=o.tail;if(An(t,i,o.children,r),o=mn.current,(o&2)!==0)o=o&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lg(t,r,i);else if(t.tag===19)Lg(t,r,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(be(mn,o),u){case"forwards":for(r=i.child,u=null;r!==null;)t=r.alternate,t!==null&&oc(t)===null&&(u=r),r=r.sibling;r=u,r===null?(u=i.child,i.child=null):(u=r.sibling,r.sibling=null),jf(i,!1,u,r,h);break;case"backwards":for(r=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&oc(t)===null){i.child=u;break}t=u.sibling,u.sibling=r,r=u,u=t}jf(i,!0,r,null,h);break;case"together":jf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ca(t,i,r){if(t!==null&&(i.dependencies=t.dependencies),Ya|=i.lanes,(r&i.childLanes)===0)if(t!==null){if(yo(t,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(s(153));if(i.child!==null){for(t=i.child,r=na(t,t.pendingProps),i.child=r,r.return=i;t.sibling!==null;)t=t.sibling,r=r.sibling=na(t,t.pendingProps),r.return=i;r.sibling=null}return i.child}function Xf(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Xl(t)))}function yy(t,i,r){switch(i.tag){case 3:Ne(i,i.stateNode.containerInfo),Ia(i,pn,t.memoizedState.cache),_o();break;case 27:case 5:Ke(i);break;case 4:Ne(i,i.stateNode.containerInfo);break;case 10:Ia(i,i.type,i.memoizedProps.value);break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(Va(i),i.flags|=128,null):(r&i.child.childLanes)!==0?Ng(t,i,r):(Va(i),t=ca(t,i,r),t!==null?t.sibling:null);Va(i);break;case 19:var u=(t.flags&128)!==0;if(o=(r&i.childLanes)!==0,o||(yo(t,i,r,!1),o=(r&i.childLanes)!==0),u){if(o)return Pg(t,i,r);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),be(mn,mn.current),o)break;return null;case 22:case 23:return i.lanes=0,Ag(t,i,r);case 24:Ia(i,pn,t.memoizedState.cache)}return ca(t,i,r)}function Og(t,i,r){if(t!==null)if(t.memoizedProps!==i.pendingProps)yn=!0;else{if(!Xf(t,r)&&(i.flags&128)===0)return yn=!1,yy(t,i,r);yn=(t.flags&131072)!==0}else yn=!1,Ut&&(i.flags&1048576)!==0&&fm(i,jl,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var o=i.elementType,u=o._init;if(o=u(o._payload),i.type=o,typeof o=="function")Ju(o)?(t=Lr(o,t),i.tag=1,i=Dg(null,i,o,t,r)):(i.tag=0,i=zf(null,i,o,t,r));else{if(o!=null){if(u=o.$$typeof,u===U){i.tag=11,i=Mg(null,i,o,t,r);break e}else if(u===z){i.tag=14,i=Tg(null,i,o,t,r);break e}}throw i=xe(o)||o,Error(s(306,i,""))}}return i;case 0:return zf(t,i,i.type,i.pendingProps,r);case 1:return o=i.type,u=Lr(o,i.pendingProps),Dg(t,i,o,u,r);case 3:e:{if(Ne(i,i.stateNode.containerInfo),t===null)throw Error(s(387));o=i.pendingProps;var h=i.memoizedState;u=h.element,pf(t,i),Ao(i,o,null,r);var E=i.memoizedState;if(o=E.cache,Ia(i,pn,o),o!==h.cache&&lf(i,[pn],r,!0),wo(),o=E.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=Ug(t,i,o,r);break e}else if(o!==u){u=gi(Error(s(424)),i),xo(u),i=Ug(t,i,o,r);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(tn=Ci(t.firstChild),Vn=i,Ut=!0,Ar=null,Bi=!0,r=hg(i,null,o,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(_o(),o===u){i=ca(t,i,r);break e}An(t,i,o,r)}i=i.child}return i;case 26:return uc(t,i),t===null?(r=Fv(i.type,null,i.pendingProps,null))?i.memoizedState=r:Ut||(r=i.type,t=i.pendingProps,o=Tc(Se.current).createElement(r),o[dn]=i,o[Tn]=t,Cn(o,r,t),on(o),i.stateNode=o):i.memoizedState=Fv(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Ke(i),t===null&&Ut&&(o=i.stateNode=Bv(i.type,i.pendingProps,Se.current),Vn=i,Bi=!0,u=tn,$a(i.type)?(Td=u,tn=Ci(o.firstChild)):tn=u),An(t,i,i.pendingProps.children,r),uc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Ut&&((u=o=tn)&&(o=Yy(o,i.type,i.pendingProps,Bi),o!==null?(i.stateNode=o,Vn=i,tn=Ci(o.firstChild),Bi=!1,u=!0):u=!1),u||Rr(i)),Ke(i),u=i.type,h=i.pendingProps,E=t!==null?t.memoizedProps:null,o=h.children,Sd(u,h)?o=null:E!==null&&Sd(u,E)&&(i.flags|=32),i.memoizedState!==null&&(u=yf(t,i,dy,null,null,r),Zo._currentValue=u),uc(t,i),An(t,i,o,r),i.child;case 6:return t===null&&Ut&&((t=r=tn)&&(r=Zy(r,i.pendingProps,Bi),r!==null?(i.stateNode=r,Vn=i,tn=null,t=!0):t=!1),t||Rr(i)),null;case 13:return Ng(t,i,r);case 4:return Ne(i,i.stateNode.containerInfo),o=i.pendingProps,t===null?i.child=ps(i,null,o,r):An(t,i,o,r),i.child;case 11:return Mg(t,i,i.type,i.pendingProps,r);case 7:return An(t,i,i.pendingProps,r),i.child;case 8:return An(t,i,i.pendingProps.children,r),i.child;case 12:return An(t,i,i.pendingProps.children,r),i.child;case 10:return o=i.pendingProps,Ia(i,i.type,o.value),An(t,i,o.children,r),i.child;case 9:return u=i.type._context,o=i.pendingProps.children,Dr(i),u=Bn(u),o=o(u),i.flags|=1,An(t,i,o,r),i.child;case 14:return Tg(t,i,i.type,i.pendingProps,r);case 15:return wg(t,i,i.type,i.pendingProps,r);case 19:return Pg(t,i,r);case 31:return o=i.pendingProps,r=i.mode,o={mode:o.mode,children:o.children},t===null?(r=fc(o,r),r.ref=i.ref,i.child=r,r.return=i,i=r):(r=na(t.child,o),r.ref=i.ref,i.child=r,r.return=i,i=r),i;case 22:return Ag(t,i,r);case 24:return Dr(i),o=Bn(pn),t===null?(u=ff(),u===null&&(u=Yt,h=cf(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=r),u=h),i.memoizedState={parent:o,cache:u},hf(i),Ia(i,pn,u)):((t.lanes&r)!==0&&(pf(t,i),Ao(i,null,null,r),wo()),u=t.memoizedState,h=i.memoizedState,u.parent!==o?(u={parent:o,cache:o},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),Ia(i,pn,o)):(o=h.cache,Ia(i,pn,o),o!==u.cache&&lf(i,[pn],r,!0))),An(t,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function ua(t){t.flags|=4}function Bg(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!jv(i)){if(i=yi.current,i!==null&&((bt&4194048)===bt?Ii!==null:(bt&62914560)!==bt&&(bt&536870912)===0||i!==Ii))throw Mo=df,xm;t.flags|=8192}}function dc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Le():536870912,t.lanes|=i,_s|=i)}function Po(t,i){if(!Ut)switch(t.tailMode){case"hidden":i=t.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Qt(t){var i=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(i)for(var u=t.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=r,i}function Sy(t,i,r){var o=i.pendingProps;switch(af(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(i),null;case 1:return Qt(i),null;case 3:return r=i.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),sa(pn),lt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(vo(i)?ua(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,pm())),Qt(i),null;case 26:return r=i.memoizedState,t===null?(ua(i),r!==null?(Qt(i),Bg(i,r)):(Qt(i),i.flags&=-16777217)):r?r!==t.memoizedState?(ua(i),Qt(i),Bg(i,r)):(Qt(i),i.flags&=-16777217):(t.memoizedProps!==o&&ua(i),Qt(i),i.flags&=-16777217),null;case 27:Xt(i),r=Se.current;var u=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==o&&ua(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return Qt(i),null}t=$.current,vo(i)?dm(i):(t=Bv(u,o,r),i.stateNode=t,ua(i))}return Qt(i),null;case 5:if(Xt(i),r=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==o&&ua(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return Qt(i),null}if(t=$.current,vo(i))dm(i);else{switch(u=Tc(Se.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?u.createElement(r,{is:o.is}):u.createElement(r)}}t[dn]=i,t[Tn]=o;e:for(u=i.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===i)break e;for(;u.sibling===null;){if(u.return===null||u.return===i)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}i.stateNode=t;e:switch(Cn(t,r,o),r){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&ua(i)}}return Qt(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==o&&ua(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(s(166));if(t=Se.current,vo(i)){if(t=i.stateNode,r=i.memoizedProps,o=null,u=Vn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[dn]=i,t=!!(t.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||Cv(t.nodeValue,r)),t||Rr(i)}else t=Tc(t).createTextNode(o),t[dn]=i,i.stateNode=t}return Qt(i),null;case 13:if(o=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=vo(i),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[dn]=i}else _o(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Qt(i),u=!1}else u=pm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(la(i),i):(la(i),null)}if(la(i),(i.flags&128)!==0)return i.lanes=r,i;if(r=o!==null,t=t!==null&&t.memoizedState!==null,r){o=i.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)}return r!==t&&r&&(i.child.flags|=8192),dc(i,i.updateQueue),Qt(i),null;case 4:return lt(),t===null&&gd(i.stateNode.containerInfo),Qt(i),null;case 10:return sa(i.type),Qt(i),null;case 19:if(ye(mn),u=i.memoizedState,u===null)return Qt(i),null;if(o=(i.flags&128)!==0,h=u.rendering,h===null)if(o)Po(u,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(h=oc(t),h!==null){for(i.flags|=128,Po(u,!1),t=h.updateQueue,i.updateQueue=t,dc(i,t),i.subtreeFlags=0,t=r,r=i.child;r!==null;)um(r,t),r=r.sibling;return be(mn,mn.current&1|2),i.child}t=t.sibling}u.tail!==null&&it()>mc&&(i.flags|=128,o=!0,Po(u,!1),i.lanes=4194304)}else{if(!o)if(t=oc(h),t!==null){if(i.flags|=128,o=!0,t=t.updateQueue,i.updateQueue=t,dc(i,t),Po(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!Ut)return Qt(i),null}else 2*it()-u.renderingStartTime>mc&&r!==536870912&&(i.flags|=128,o=!0,Po(u,!1),i.lanes=4194304);u.isBackwards?(h.sibling=i.child,i.child=h):(t=u.last,t!==null?t.sibling=h:i.child=h,u.last=h)}return u.tail!==null?(i=u.tail,u.rendering=i,u.tail=i.sibling,u.renderingStartTime=it(),i.sibling=null,t=mn.current,be(mn,o?t&1|2:t&1),i):(Qt(i),null);case 22:case 23:return la(i),_f(),o=i.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(r&536870912)!==0&&(i.flags&128)===0&&(Qt(i),i.subtreeFlags&6&&(i.flags|=8192)):Qt(i),r=i.updateQueue,r!==null&&dc(i,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==r&&(i.flags|=2048),t!==null&&ye(Ur),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),sa(pn),Qt(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function by(t,i){switch(af(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return sa(pn),lt(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Xt(i),null;case 13:if(la(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(s(340));_o()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ye(mn),null;case 4:return lt(),null;case 10:return sa(i.type),null;case 22:case 23:return la(i),_f(),t!==null&&ye(Ur),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return sa(pn),null;case 25:return null;default:return null}}function Ig(t,i){switch(af(i),i.tag){case 3:sa(pn),lt();break;case 26:case 27:case 5:Xt(i);break;case 4:lt();break;case 13:la(i);break;case 19:ye(mn);break;case 10:sa(i.type);break;case 22:case 23:la(i),_f(),t!==null&&ye(Ur);break;case 24:sa(pn)}}function Oo(t,i){try{var r=i.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var u=o.next;r=u;do{if((r.tag&t)===t){o=void 0;var h=r.create,E=r.inst;o=h(),E.destroy=o}r=r.next}while(r!==u)}}catch(T){jt(i,i.return,T)}}function ja(t,i,r){try{var o=i.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&t)===t){var E=o.inst,T=E.destroy;if(T!==void 0){E.destroy=void 0,u=i;var B=r,J=T;try{J()}catch(ue){jt(u,B,ue)}}}o=o.next}while(o!==h)}}catch(ue){jt(i,i.return,ue)}}function zg(t){var i=t.updateQueue;if(i!==null){var r=t.stateNode;try{Tm(i,r)}catch(o){jt(t,t.return,o)}}}function Fg(t,i,r){r.props=Lr(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(o){jt(t,i,o)}}function Bo(t,i){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof r=="function"?t.refCleanup=r(o):r.current=o}}catch(u){jt(t,i,u)}}function zi(t,i){var r=t.ref,o=t.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(u){jt(t,i,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){jt(t,i,u)}else r.current=null}function Hg(t){var i=t.type,r=t.memoizedProps,o=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break e;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(u){jt(t,t.return,u)}}function Wf(t,i,r){try{var o=t.stateNode;ky(o,t.type,r,i),o[Tn]=i}catch(u){jt(t,t.return,u)}}function Gg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&$a(t.type)||t.tag===4}function qf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Gg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&$a(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yf(t,i,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(t),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=Mc));else if(o!==4&&(o===27&&$a(t.type)&&(r=t.stateNode,i=null),t=t.child,t!==null))for(Yf(t,i,r),t=t.sibling;t!==null;)Yf(t,i,r),t=t.sibling}function hc(t,i,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,i?r.insertBefore(t,i):r.appendChild(t);else if(o!==4&&(o===27&&$a(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(hc(t,i,r),t=t.sibling;t!==null;)hc(t,i,r),t=t.sibling}function Vg(t){var i=t.stateNode,r=t.memoizedProps;try{for(var o=t.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);Cn(i,o,r),i[dn]=t,i[Tn]=r}catch(h){jt(t,t.return,h)}}var fa=!1,rn=!1,Zf=!1,kg=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function Ey(t,i){if(t=t.containerInfo,xd=Uc,t=em(t),Wu(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{r.nodeType,h.nodeType}catch{r=null;break e}var E=0,T=-1,B=-1,J=0,ue=0,_e=t,ne=null;t:for(;;){for(var ie;_e!==r||u!==0&&_e.nodeType!==3||(T=E+u),_e!==h||o!==0&&_e.nodeType!==3||(B=E+o),_e.nodeType===3&&(E+=_e.nodeValue.length),(ie=_e.firstChild)!==null;)ne=_e,_e=ie;for(;;){if(_e===t)break t;if(ne===r&&++J===u&&(T=E),ne===h&&++ue===o&&(B=E),(ie=_e.nextSibling)!==null)break;_e=ne,ne=_e.parentNode}_e=ie}r=T===-1||B===-1?null:{start:T,end:B}}else r=null}r=r||{start:0,end:0}}else r=null;for(yd={focusedElem:t,selectionRange:r},Uc=!1,Sn=i;Sn!==null;)if(i=Sn,t=i.child,(i.subtreeFlags&1024)!==0&&t!==null)t.return=i,Sn=t;else for(;Sn!==null;){switch(i=Sn,h=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,r=i,u=h.memoizedProps,h=h.memoizedState,o=r.stateNode;try{var tt=Lr(r.type,u,r.elementType===r.type);t=o.getSnapshotBeforeUpdate(tt,h),o.__reactInternalSnapshotBeforeUpdate=t}catch(Ze){jt(r,r.return,Ze)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,r=t.nodeType,r===9)Ed(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ed(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=i.sibling,t!==null){t.return=i.return,Sn=t;break}Sn=i.return}}function jg(t,i,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:Xa(t,r),o&4&&Oo(5,r);break;case 1:if(Xa(t,r),o&4)if(t=r.stateNode,i===null)try{t.componentDidMount()}catch(E){jt(r,r.return,E)}else{var u=Lr(r.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(u,i,t.__reactInternalSnapshotBeforeUpdate)}catch(E){jt(r,r.return,E)}}o&64&&zg(r),o&512&&Bo(r,r.return);break;case 3:if(Xa(t,r),o&64&&(t=r.updateQueue,t!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{Tm(t,i)}catch(E){jt(r,r.return,E)}}break;case 27:i===null&&o&4&&Vg(r);case 26:case 5:Xa(t,r),i===null&&o&4&&Hg(r),o&512&&Bo(r,r.return);break;case 12:Xa(t,r);break;case 13:Xa(t,r),o&4&&qg(t,r),o&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=Ny.bind(null,r),Ky(t,r))));break;case 22:if(o=r.memoizedState!==null||fa,!o){i=i!==null&&i.memoizedState!==null||rn,u=fa;var h=rn;fa=o,(rn=i)&&!h?Wa(t,r,(r.subtreeFlags&8772)!==0):Xa(t,r),fa=u,rn=h}break;case 30:break;default:Xa(t,r)}}function Xg(t){var i=t.alternate;i!==null&&(t.alternate=null,Xg(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&La(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Zt=null,Kn=!1;function da(t,i,r){for(r=r.child;r!==null;)Wg(t,i,r),r=r.sibling}function Wg(t,i,r){if(Oe&&typeof Oe.onCommitFiberUnmount=="function")try{Oe.onCommitFiberUnmount(fe,r)}catch{}switch(r.tag){case 26:rn||zi(r,i),da(t,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:rn||zi(r,i);var o=Zt,u=Kn;$a(r.type)&&(Zt=r.stateNode,Kn=!1),da(t,i,r),Xo(r.stateNode),Zt=o,Kn=u;break;case 5:rn||zi(r,i);case 6:if(o=Zt,u=Kn,Zt=null,da(t,i,r),Zt=o,Kn=u,Zt!==null)if(Kn)try{(Zt.nodeType===9?Zt.body:Zt.nodeName==="HTML"?Zt.ownerDocument.body:Zt).removeChild(r.stateNode)}catch(h){jt(r,i,h)}else try{Zt.removeChild(r.stateNode)}catch(h){jt(r,i,h)}break;case 18:Zt!==null&&(Kn?(t=Zt,Pv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),Jo(t)):Pv(Zt,r.stateNode));break;case 4:o=Zt,u=Kn,Zt=r.stateNode.containerInfo,Kn=!0,da(t,i,r),Zt=o,Kn=u;break;case 0:case 11:case 14:case 15:rn||ja(2,r,i),rn||ja(4,r,i),da(t,i,r);break;case 1:rn||(zi(r,i),o=r.stateNode,typeof o.componentWillUnmount=="function"&&Fg(r,i,o)),da(t,i,r);break;case 21:da(t,i,r);break;case 22:rn=(o=rn)||r.memoizedState!==null,da(t,i,r),rn=o;break;default:da(t,i,r)}}function qg(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Jo(t)}catch(r){jt(i,i.return,r)}}function My(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new kg),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new kg),i;default:throw Error(s(435,t.tag))}}function Kf(t,i){var r=My(t);i.forEach(function(o){var u=Ly.bind(null,t,o);r.has(o)||(r.add(o),o.then(u,u))})}function ii(t,i){var r=i.deletions;if(r!==null)for(var o=0;o<r.length;o++){var u=r[o],h=t,E=i,T=E;e:for(;T!==null;){switch(T.tag){case 27:if($a(T.type)){Zt=T.stateNode,Kn=!1;break e}break;case 5:Zt=T.stateNode,Kn=!1;break e;case 3:case 4:Zt=T.stateNode.containerInfo,Kn=!0;break e}T=T.return}if(Zt===null)throw Error(s(160));Wg(h,E,u),Zt=null,Kn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Yg(i,t),i=i.sibling}var Ri=null;function Yg(t,i){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ii(i,t),ai(t),o&4&&(ja(3,t,t.return),Oo(3,t),ja(5,t,t.return));break;case 1:ii(i,t),ai(t),o&512&&(rn||r===null||zi(r,r.return)),o&64&&fa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var u=Ri;if(ii(i,t),ai(t),o&512&&(rn||r===null||zi(r,r.return)),o&4){var h=r!==null?r.memoizedState:null;if(o=t.memoizedState,r===null)if(o===null)if(t.stateNode===null){e:{o=t.type,r=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Na]||h[dn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Cn(h,o,r),h[dn]=t,on(h),o=h;break e;case"link":var E=Vv("link","href",u).get(o+(r.href||""));if(E){for(var T=0;T<E.length;T++)if(h=E[T],h.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&h.getAttribute("rel")===(r.rel==null?null:r.rel)&&h.getAttribute("title")===(r.title==null?null:r.title)&&h.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){E.splice(T,1);break t}}h=u.createElement(o),Cn(h,o,r),u.head.appendChild(h);break;case"meta":if(E=Vv("meta","content",u).get(o+(r.content||""))){for(T=0;T<E.length;T++)if(h=E[T],h.getAttribute("content")===(r.content==null?null:""+r.content)&&h.getAttribute("name")===(r.name==null?null:r.name)&&h.getAttribute("property")===(r.property==null?null:r.property)&&h.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&h.getAttribute("charset")===(r.charSet==null?null:r.charSet)){E.splice(T,1);break t}}h=u.createElement(o),Cn(h,o,r),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[dn]=t,on(h),o=h}t.stateNode=o}else kv(u,t.type,t.stateNode);else t.stateNode=Gv(u,o,t.memoizedProps);else h!==o?(h===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):h.count--,o===null?kv(u,t.type,t.stateNode):Gv(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Wf(t,t.memoizedProps,r.memoizedProps)}break;case 27:ii(i,t),ai(t),o&512&&(rn||r===null||zi(r,r.return)),r!==null&&o&4&&Wf(t,t.memoizedProps,r.memoizedProps);break;case 5:if(ii(i,t),ai(t),o&512&&(rn||r===null||zi(r,r.return)),t.flags&32){u=t.stateNode;try{Oi(u,"")}catch(ie){jt(t,t.return,ie)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Wf(t,u,r!==null?r.memoizedProps:u)),o&1024&&(Zf=!0);break;case 6:if(ii(i,t),ai(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,r=t.stateNode;try{r.nodeValue=o}catch(ie){jt(t,t.return,ie)}}break;case 3:if(Rc=null,u=Ri,Ri=wc(i.containerInfo),ii(i,t),Ri=u,ai(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{Jo(i.containerInfo)}catch(ie){jt(t,t.return,ie)}Zf&&(Zf=!1,Zg(t));break;case 4:o=Ri,Ri=wc(t.stateNode.containerInfo),ii(i,t),ai(t),Ri=o;break;case 12:ii(i,t),ai(t);break;case 13:ii(i,t),ai(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(nd=it()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Kf(t,o)));break;case 22:u=t.memoizedState!==null;var B=r!==null&&r.memoizedState!==null,J=fa,ue=rn;if(fa=J||u,rn=ue||B,ii(i,t),rn=ue,fa=J,ai(t),o&8192)e:for(i=t.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(r===null||B||fa||rn||Pr(t)),r=null,i=t;;){if(i.tag===5||i.tag===26){if(r===null){B=r=i;try{if(h=B.stateNode,u)E=h.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{T=B.stateNode;var _e=B.memoizedProps.style,ne=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;T.style.display=ne==null||typeof ne=="boolean"?"":(""+ne).trim()}}catch(ie){jt(B,B.return,ie)}}}else if(i.tag===6){if(r===null){B=i;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(ie){jt(B,B.return,ie)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=t.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,Kf(t,r))));break;case 19:ii(i,t),ai(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Kf(t,o)));break;case 30:break;case 21:break;default:ii(i,t),ai(t)}}function ai(t){var i=t.flags;if(i&2){try{for(var r,o=t.return;o!==null;){if(Gg(o)){r=o;break}o=o.return}if(r==null)throw Error(s(160));switch(r.tag){case 27:var u=r.stateNode,h=qf(t);hc(t,h,u);break;case 5:var E=r.stateNode;r.flags&32&&(Oi(E,""),r.flags&=-33);var T=qf(t);hc(t,T,E);break;case 3:case 4:var B=r.stateNode.containerInfo,J=qf(t);Yf(t,J,B);break;default:throw Error(s(161))}}catch(ue){jt(t,t.return,ue)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Zg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;Zg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Xa(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)jg(t,i.alternate,i),i=i.sibling}function Pr(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:ja(4,i,i.return),Pr(i);break;case 1:zi(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&Fg(i,i.return,r),Pr(i);break;case 27:Xo(i.stateNode);case 26:case 5:zi(i,i.return),Pr(i);break;case 22:i.memoizedState===null&&Pr(i);break;case 30:Pr(i);break;default:Pr(i)}t=t.sibling}}function Wa(t,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,u=t,h=i,E=h.flags;switch(h.tag){case 0:case 11:case 15:Wa(u,h,r),Oo(4,h);break;case 1:if(Wa(u,h,r),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(J){jt(o,o.return,J)}if(o=h,u=o.updateQueue,u!==null){var T=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)Mm(B[u],T)}catch(J){jt(o,o.return,J)}}r&&E&64&&zg(h),Bo(h,h.return);break;case 27:Vg(h);case 26:case 5:Wa(u,h,r),r&&o===null&&E&4&&Hg(h),Bo(h,h.return);break;case 12:Wa(u,h,r);break;case 13:Wa(u,h,r),r&&E&4&&qg(u,h);break;case 22:h.memoizedState===null&&Wa(u,h,r),Bo(h,h.return);break;case 30:break;default:Wa(u,h,r)}i=i.sibling}}function Qf(t,i){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&So(r))}function $f(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&So(t))}function Fi(t,i,r,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Kg(t,i,r,o),i=i.sibling}function Kg(t,i,r,o){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Fi(t,i,r,o),u&2048&&Oo(9,i);break;case 1:Fi(t,i,r,o);break;case 3:Fi(t,i,r,o),u&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&So(t)));break;case 12:if(u&2048){Fi(t,i,r,o),t=i.stateNode;try{var h=i.memoizedProps,E=h.id,T=h.onPostCommit;typeof T=="function"&&T(E,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){jt(i,i.return,B)}}else Fi(t,i,r,o);break;case 13:Fi(t,i,r,o);break;case 23:break;case 22:h=i.stateNode,E=i.alternate,i.memoizedState!==null?h._visibility&2?Fi(t,i,r,o):Io(t,i):h._visibility&2?Fi(t,i,r,o):(h._visibility|=2,ms(t,i,r,o,(i.subtreeFlags&10256)!==0)),u&2048&&Qf(E,i);break;case 24:Fi(t,i,r,o),u&2048&&$f(i.alternate,i);break;default:Fi(t,i,r,o)}}function ms(t,i,r,o,u){for(u=u&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var h=t,E=i,T=r,B=o,J=E.flags;switch(E.tag){case 0:case 11:case 15:ms(h,E,T,B,u),Oo(8,E);break;case 23:break;case 22:var ue=E.stateNode;E.memoizedState!==null?ue._visibility&2?ms(h,E,T,B,u):Io(h,E):(ue._visibility|=2,ms(h,E,T,B,u)),u&&J&2048&&Qf(E.alternate,E);break;case 24:ms(h,E,T,B,u),u&&J&2048&&$f(E.alternate,E);break;default:ms(h,E,T,B,u)}i=i.sibling}}function Io(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=t,o=i,u=o.flags;switch(o.tag){case 22:Io(r,o),u&2048&&Qf(o.alternate,o);break;case 24:Io(r,o),u&2048&&$f(o.alternate,o);break;default:Io(r,o)}i=i.sibling}}var zo=8192;function gs(t){if(t.subtreeFlags&zo)for(t=t.child;t!==null;)Qg(t),t=t.sibling}function Qg(t){switch(t.tag){case 26:gs(t),t.flags&zo&&t.memoizedState!==null&&cS(Ri,t.memoizedState,t.memoizedProps);break;case 5:gs(t);break;case 3:case 4:var i=Ri;Ri=wc(t.stateNode.containerInfo),gs(t),Ri=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=zo,zo=16777216,gs(t),zo=i):gs(t));break;default:gs(t)}}function $g(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Fo(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var o=i[r];Sn=o,ev(o,t)}$g(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Jg(t),t=t.sibling}function Jg(t){switch(t.tag){case 0:case 11:case 15:Fo(t),t.flags&2048&&ja(9,t,t.return);break;case 3:Fo(t);break;case 12:Fo(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,pc(t)):Fo(t);break;default:Fo(t)}}function pc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var o=i[r];Sn=o,ev(o,t)}$g(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:ja(8,i,i.return),pc(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,pc(i));break;default:pc(i)}t=t.sibling}}function ev(t,i){for(;Sn!==null;){var r=Sn;switch(r.tag){case 0:case 11:case 15:ja(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:So(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,Sn=o;else e:for(r=t;Sn!==null;){o=Sn;var u=o.sibling,h=o.return;if(Xg(o),o===r){Sn=null;break e}if(u!==null){u.return=h,Sn=u;break e}Sn=h}}}var Ty={getCacheForType:function(t){var i=Bn(pn),r=i.data.get(t);return r===void 0&&(r=t(),i.data.set(t,r)),r}},wy=typeof WeakMap=="function"?WeakMap:Map,Pt=0,Yt=null,mt=null,bt=0,Ot=0,ri=null,qa=!1,vs=!1,Jf=!1,ha=0,nn=0,Ya=0,Or=0,ed=0,Si=0,_s=0,Ho=null,Qn=null,td=!1,nd=0,mc=1/0,gc=null,Za=null,Rn=0,Ka=null,xs=null,ys=0,id=0,ad=null,tv=null,Go=0,rd=null;function si(){if((Pt&2)!==0&&bt!==0)return bt&-bt;if(I.T!==null){var t=os;return t!==0?t:dd()}return Tt()}function nv(){Si===0&&(Si=(bt&536870912)===0||Ut?j():536870912);var t=yi.current;return t!==null&&(t.flags|=32),Si}function oi(t,i,r){(t===Yt&&(Ot===2||Ot===9)||t.cancelPendingCommit!==null)&&(Ss(t,0),Qa(t,bt,Si,!1)),ve(t,r),((Pt&2)===0||t!==Yt)&&(t===Yt&&((Pt&2)===0&&(Or|=r),nn===4&&Qa(t,bt,Si,!1)),Hi(t))}function iv(t,i,r){if((Pt&6)!==0)throw Error(s(327));var o=!r&&(i&124)===0&&(i&t.expiredLanes)===0||nt(t,i),u=o?Cy(t,i):ld(t,i,!0),h=o;do{if(u===0){vs&&!o&&Qa(t,i,0,!1);break}else{if(r=t.current.alternate,h&&!Ay(r)){u=ld(t,i,!1),h=!1;continue}if(u===2){if(h=i,t.errorRecoveryDisabledLanes&h)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;e:{var T=t;u=Ho;var B=T.current.memoizedState.isDehydrated;if(B&&(Ss(T,E).flags|=256),E=ld(T,E,!1),E!==2){if(Jf&&!B){T.errorRecoveryDisabledLanes|=h,Or|=h,u=4;break e}h=Qn,Qn=u,h!==null&&(Qn===null?Qn=h:Qn.push.apply(Qn,h))}u=E}if(h=!1,u!==2)continue}}if(u===1){Ss(t,0),Qa(t,i,0,!0);break}e:{switch(o=t,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Qa(o,i,Si,!qa);break e;case 2:Qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(u=nd+300-it(),10<u)){if(Qa(o,i,Si,!qa),ut(o,0,!0)!==0)break e;o.timeoutHandle=Nv(av.bind(null,o,r,Qn,gc,td,i,Si,Or,_s,qa,h,2,-0,0),u);break e}av(o,r,Qn,gc,td,i,Si,Or,_s,qa,h,0,-0,0)}}break}while(!0);Hi(t)}function av(t,i,r,o,u,h,E,T,B,J,ue,_e,ne,ie){if(t.timeoutHandle=-1,_e=i.subtreeFlags,(_e&8192||(_e&16785408)===16785408)&&(Yo={stylesheets:null,count:0,unsuspend:lS},Qg(i),_e=uS(),_e!==null)){t.cancelPendingCommit=_e(fv.bind(null,t,i,h,r,o,u,E,T,B,ue,1,ne,ie)),Qa(t,h,E,!J);return}fv(t,i,h,r,o,u,E,T,B)}function Ay(t){for(var i=t;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var u=r[o],h=u.getSnapshot;u=u.value;try{if(!ti(h(),u))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Qa(t,i,r,o){i&=~ed,i&=~Or,t.suspendedLanes|=i,t.pingedLanes&=~i,o&&(t.warmLanes|=i),o=t.expirationTimes;for(var u=i;0<u;){var h=31-Ge(u),E=1<<h;o[h]=-1,u&=~E}r!==0&&Pe(t,r,i)}function vc(){return(Pt&6)===0?(Vo(0),!1):!0}function sd(){if(mt!==null){if(Ot===0)var t=mt.return;else t=mt,ra=Cr=null,Ef(t),hs=null,No=0,t=mt;for(;t!==null;)Ig(t.alternate,t),t=t.return;mt=null}}function Ss(t,i){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,Xy(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),sd(),Yt=t,mt=r=na(t.current,null),bt=i,Ot=0,ri=null,qa=!1,vs=nt(t,i),Jf=!1,_s=Si=ed=Or=Ya=nn=0,Qn=Ho=null,td=!1,(i&8)!==0&&(i|=i&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=i;0<o;){var u=31-Ge(o),h=1<<u;i|=t[u],o&=~h}return ha=i,Fl(),r}function rv(t,i){ft=null,I.H=ac,i===Eo||i===Yl?(i=bm(),Ot=3):i===xm?(i=bm(),Ot=4):Ot=i===Eg?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ri=i,mt===null&&(nn=1,cc(t,gi(i,t.current)))}function sv(){var t=I.H;return I.H=ac,t===null?ac:t}function ov(){var t=I.A;return I.A=Ty,t}function od(){nn=4,qa||(bt&4194048)!==bt&&yi.current!==null||(vs=!0),(Ya&134217727)===0&&(Or&134217727)===0||Yt===null||Qa(Yt,bt,Si,!1)}function ld(t,i,r){var o=Pt;Pt|=2;var u=sv(),h=ov();(Yt!==t||bt!==i)&&(gc=null,Ss(t,i)),i=!1;var E=nn;e:do try{if(Ot!==0&&mt!==null){var T=mt,B=ri;switch(Ot){case 8:sd(),E=6;break e;case 3:case 2:case 9:case 6:yi.current===null&&(i=!0);var J=Ot;if(Ot=0,ri=null,bs(t,T,B,J),r&&vs){E=0;break e}break;default:J=Ot,Ot=0,ri=null,bs(t,T,B,J)}}Ry(),E=nn;break}catch(ue){rv(t,ue)}while(!0);return i&&t.shellSuspendCounter++,ra=Cr=null,Pt=o,I.H=u,I.A=h,mt===null&&(Yt=null,bt=0,Fl()),E}function Ry(){for(;mt!==null;)lv(mt)}function Cy(t,i){var r=Pt;Pt|=2;var o=sv(),u=ov();Yt!==t||bt!==i?(gc=null,mc=it()+500,Ss(t,i)):vs=nt(t,i);e:do try{if(Ot!==0&&mt!==null){i=mt;var h=ri;t:switch(Ot){case 1:Ot=0,ri=null,bs(t,i,h,1);break;case 2:case 9:if(ym(h)){Ot=0,ri=null,cv(i);break}i=function(){Ot!==2&&Ot!==9||Yt!==t||(Ot=7),Hi(t)},h.then(i,i);break e;case 3:Ot=7;break e;case 4:Ot=5;break e;case 7:ym(h)?(Ot=0,ri=null,cv(i)):(Ot=0,ri=null,bs(t,i,h,7));break;case 5:var E=null;switch(mt.tag){case 26:E=mt.memoizedState;case 5:case 27:var T=mt;if(!E||jv(E)){Ot=0,ri=null;var B=T.sibling;if(B!==null)mt=B;else{var J=T.return;J!==null?(mt=J,_c(J)):mt=null}break t}}Ot=0,ri=null,bs(t,i,h,5);break;case 6:Ot=0,ri=null,bs(t,i,h,6);break;case 8:sd(),nn=6;break e;default:throw Error(s(462))}}Dy();break}catch(ue){rv(t,ue)}while(!0);return ra=Cr=null,I.H=o,I.A=u,Pt=r,mt!==null?0:(Yt=null,bt=0,Fl(),nn)}function Dy(){for(;mt!==null&&!Wn();)lv(mt)}function lv(t){var i=Og(t.alternate,t,ha);t.memoizedProps=t.pendingProps,i===null?_c(t):mt=i}function cv(t){var i=t,r=i.alternate;switch(i.tag){case 15:case 0:i=Cg(r,i,i.pendingProps,i.type,void 0,bt);break;case 11:i=Cg(r,i,i.pendingProps,i.type.render,i.ref,bt);break;case 5:Ef(i);default:Ig(r,i),i=mt=um(i,ha),i=Og(r,i,ha)}t.memoizedProps=t.pendingProps,i===null?_c(t):mt=i}function bs(t,i,r,o){ra=Cr=null,Ef(i),hs=null,No=0;var u=i.return;try{if(xy(t,u,i,r,bt)){nn=1,cc(t,gi(r,t.current)),mt=null;return}}catch(h){if(u!==null)throw mt=u,h;nn=1,cc(t,gi(r,t.current)),mt=null;return}i.flags&32768?(Ut||o===1?t=!0:vs||(bt&536870912)!==0?t=!1:(qa=t=!0,(o===2||o===9||o===3||o===6)&&(o=yi.current,o!==null&&o.tag===13&&(o.flags|=16384))),uv(i,t)):_c(i)}function _c(t){var i=t;do{if((i.flags&32768)!==0){uv(i,qa);return}t=i.return;var r=Sy(i.alternate,i,ha);if(r!==null){mt=r;return}if(i=i.sibling,i!==null){mt=i;return}mt=i=t}while(i!==null);nn===0&&(nn=5)}function uv(t,i){do{var r=by(t.alternate,t);if(r!==null){r.flags&=32767,mt=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(t=t.sibling,t!==null)){mt=t;return}mt=t=r}while(t!==null);nn=6,mt=null}function fv(t,i,r,o,u,h,E,T,B){t.cancelPendingCommit=null;do xc();while(Rn!==0);if((Pt&6)!==0)throw Error(s(327));if(i!==null){if(i===t.current)throw Error(s(177));if(h=i.lanes|i.childLanes,h|=Qu,Ie(t,r,h,E,T,B),t===Yt&&(mt=Yt=null,bt=0),xs=i,Ka=t,ys=r,id=h,ad=u,tv=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Py(P,function(){return gv(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=K.p,K.p=2,E=Pt,Pt|=4;try{Ey(t,i,r)}finally{Pt=E,K.p=u,I.T=o}}Rn=1,dv(),hv(),pv()}}function dv(){if(Rn===1){Rn=0;var t=Ka,i=xs,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=I.T,I.T=null;var o=K.p;K.p=2;var u=Pt;Pt|=4;try{Yg(i,t);var h=yd,E=em(t.containerInfo),T=h.focusedElem,B=h.selectionRange;if(E!==T&&T&&T.ownerDocument&&Jp(T.ownerDocument.documentElement,T)){if(B!==null&&Wu(T)){var J=B.start,ue=B.end;if(ue===void 0&&(ue=J),"selectionStart"in T)T.selectionStart=J,T.selectionEnd=Math.min(ue,T.value.length);else{var _e=T.ownerDocument||document,ne=_e&&_e.defaultView||window;if(ne.getSelection){var ie=ne.getSelection(),tt=T.textContent.length,Ze=Math.min(B.start,tt),Ht=B.end===void 0?Ze:Math.min(B.end,tt);!ie.extend&&Ze>Ht&&(E=Ht,Ht=Ze,Ze=E);var X=$p(T,Ze),V=$p(T,Ht);if(X&&V&&(ie.rangeCount!==1||ie.anchorNode!==X.node||ie.anchorOffset!==X.offset||ie.focusNode!==V.node||ie.focusOffset!==V.offset)){var Q=_e.createRange();Q.setStart(X.node,X.offset),ie.removeAllRanges(),Ze>Ht?(ie.addRange(Q),ie.extend(V.node,V.offset)):(Q.setEnd(V.node,V.offset),ie.addRange(Q))}}}}for(_e=[],ie=T;ie=ie.parentNode;)ie.nodeType===1&&_e.push({element:ie,left:ie.scrollLeft,top:ie.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<_e.length;T++){var he=_e[T];he.element.scrollLeft=he.left,he.element.scrollTop=he.top}}Uc=!!xd,yd=xd=null}finally{Pt=u,K.p=o,I.T=r}}t.current=i,Rn=2}}function hv(){if(Rn===2){Rn=0;var t=Ka,i=xs,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=I.T,I.T=null;var o=K.p;K.p=2;var u=Pt;Pt|=4;try{jg(t,i.alternate,i)}finally{Pt=u,K.p=o,I.T=r}}Rn=3}}function pv(){if(Rn===4||Rn===3){Rn=0,_t();var t=Ka,i=xs,r=ys,o=tv;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Rn=5:(Rn=0,xs=Ka=null,mv(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Za=null),sn(r),i=i.stateNode,Oe&&typeof Oe.onCommitFiberRoot=="function")try{Oe.onCommitFiberRoot(fe,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=I.T,u=K.p,K.p=2,I.T=null;try{for(var h=t.onRecoverableError,E=0;E<o.length;E++){var T=o[E];h(T.value,{componentStack:T.stack})}}finally{I.T=i,K.p=u}}(ys&3)!==0&&xc(),Hi(t),u=t.pendingLanes,(r&4194090)!==0&&(u&42)!==0?t===rd?Go++:(Go=0,rd=t):Go=0,Vo(0)}}function mv(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,So(i)))}function xc(t){return dv(),hv(),pv(),gv()}function gv(){if(Rn!==5)return!1;var t=Ka,i=id;id=0;var r=sn(ys),o=I.T,u=K.p;try{K.p=32>r?32:r,I.T=null,r=ad,ad=null;var h=Ka,E=ys;if(Rn=0,xs=Ka=null,ys=0,(Pt&6)!==0)throw Error(s(331));var T=Pt;if(Pt|=4,Jg(h.current),Kg(h,h.current,E,r),Pt=T,Vo(0,!1),Oe&&typeof Oe.onPostCommitFiberRoot=="function")try{Oe.onPostCommitFiberRoot(fe,h)}catch{}return!0}finally{K.p=u,I.T=o,mv(t,i)}}function vv(t,i,r){i=gi(r,i),i=If(t.stateNode,i,2),t=Ha(t,i,2),t!==null&&(ve(t,2),Hi(t))}function jt(t,i,r){if(t.tag===3)vv(t,t,r);else for(;i!==null;){if(i.tag===3){vv(i,t,r);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Za===null||!Za.has(o))){t=gi(r,t),r=Sg(2),o=Ha(i,r,2),o!==null&&(bg(r,o,i,t),ve(o,2),Hi(o));break}}i=i.return}}function cd(t,i,r){var o=t.pingCache;if(o===null){o=t.pingCache=new wy;var u=new Set;o.set(i,u)}else u=o.get(i),u===void 0&&(u=new Set,o.set(i,u));u.has(r)||(Jf=!0,u.add(r),t=Uy.bind(null,t,i,r),i.then(t,t))}function Uy(t,i,r){var o=t.pingCache;o!==null&&o.delete(i),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,Yt===t&&(bt&r)===r&&(nn===4||nn===3&&(bt&62914560)===bt&&300>it()-nd?(Pt&2)===0&&Ss(t,0):ed|=r,_s===bt&&(_s=0)),Hi(t)}function _v(t,i){i===0&&(i=Le()),t=is(t,i),t!==null&&(ve(t,i),Hi(t))}function Ny(t){var i=t.memoizedState,r=0;i!==null&&(r=i.retryLane),_v(t,r)}function Ly(t,i){var r=0;switch(t.tag){case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(r=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(i),_v(t,r)}function Py(t,i){return dt(t,i)}var yc=null,Es=null,ud=!1,Sc=!1,fd=!1,Br=0;function Hi(t){t!==Es&&t.next===null&&(Es===null?yc=Es=t:Es=Es.next=t),Sc=!0,ud||(ud=!0,By())}function Vo(t,i){if(!fd&&Sc){fd=!0;do for(var r=!1,o=yc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var E=o.suspendedLanes,T=o.pingedLanes;h=(1<<31-Ge(42|t)+1)-1,h&=u&~(E&~T),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(r=!0,bv(o,h))}else h=bt,h=ut(o,o===Yt?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||nt(o,h)||(r=!0,bv(o,h));o=o.next}while(r);fd=!1}}function Oy(){xv()}function xv(){Sc=ud=!1;var t=0;Br!==0&&(jy()&&(t=Br),Br=0);for(var i=it(),r=null,o=yc;o!==null;){var u=o.next,h=yv(o,i);h===0?(o.next=null,r===null?yc=u:r.next=u,u===null&&(Es=r)):(r=o,(t!==0||(h&3)!==0)&&(Sc=!0)),o=u}Vo(t)}function yv(t,i){for(var r=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var E=31-Ge(h),T=1<<E,B=u[E];B===-1?((T&r)===0||(T&o)!==0)&&(u[E]=It(T,i)):B<=i&&(t.expiredLanes|=T),h&=~T}if(i=Yt,r=bt,r=ut(t,t===i?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,r===0||t===i&&(Ot===2||Ot===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&H(o),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||nt(t,r)){if(i=r&-r,i===t.callbackPriority)return i;switch(o!==null&&H(o),sn(r)){case 2:case 8:r=Ve;break;case 32:r=P;break;case 268435456:r=te;break;default:r=P}return o=Sv.bind(null,t),r=dt(r,o),t.callbackPriority=i,t.callbackNode=r,i}return o!==null&&o!==null&&H(o),t.callbackPriority=2,t.callbackNode=null,2}function Sv(t,i){if(Rn!==0&&Rn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(xc()&&t.callbackNode!==r)return null;var o=bt;return o=ut(t,t===Yt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(iv(t,o,i),yv(t,it()),t.callbackNode!=null&&t.callbackNode===r?Sv.bind(null,t):null)}function bv(t,i){if(xc())return null;iv(t,i,!0)}function By(){Wy(function(){(Pt&6)!==0?dt(Bt,Oy):xv()})}function dd(){return Br===0&&(Br=j()),Br}function Ev(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Nl(""+t)}function Mv(t,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,t.id&&r.setAttribute("form",t.id),i.parentNode.insertBefore(r,i),t=new FormData(t),r.parentNode.removeChild(r),t}function Iy(t,i,r,o,u){if(i==="submit"&&r&&r.stateNode===u){var h=Ev((u[Tn]||null).action),E=o.submitter;E&&(i=(i=E[Tn]||null)?Ev(i.formAction):E.getAttribute("formAction"),i!==null&&(h=i,E=null));var T=new Bl("action","action",null,o,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Br!==0){var B=E?Mv(u,E):new FormData(u);Nf(r,{pending:!0,data:B,method:u.method,action:h},null,B)}}else typeof h=="function"&&(T.preventDefault(),B=E?Mv(u,E):new FormData(u),Nf(r,{pending:!0,data:B,method:u.method,action:h},h,B))},currentTarget:u}]})}}for(var hd=0;hd<Ku.length;hd++){var pd=Ku[hd],zy=pd.toLowerCase(),Fy=pd[0].toUpperCase()+pd.slice(1);Ai(zy,"on"+Fy)}Ai(im,"onAnimationEnd"),Ai(am,"onAnimationIteration"),Ai(rm,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(ny,"onTransitionRun"),Ai(iy,"onTransitionStart"),Ai(ay,"onTransitionCancel"),Ai(sm,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),$i("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$i("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$i("onBeforeInput",["compositionend","keypress","textInput","paste"]),$i("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$i("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$i("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ko));function Tv(t,i){i=(i&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],u=o.event;o=o.listeners;e:{var h=void 0;if(i)for(var E=o.length-1;0<=E;E--){var T=o[E],B=T.instance,J=T.currentTarget;if(T=T.listener,B!==h&&u.isPropagationStopped())break e;h=T,u.currentTarget=J;try{h(u)}catch(ue){lc(ue)}u.currentTarget=null,h=B}else for(E=0;E<o.length;E++){if(T=o[E],B=T.instance,J=T.currentTarget,T=T.listener,B!==h&&u.isPropagationStopped())break e;h=T,u.currentTarget=J;try{h(u)}catch(ue){lc(ue)}u.currentTarget=null,h=B}}}}function gt(t,i){var r=i[_r];r===void 0&&(r=i[_r]=new Set);var o=t+"__bubble";r.has(o)||(wv(i,t,2,!1),r.add(o))}function md(t,i,r){var o=0;i&&(o|=4),wv(r,t,o,i)}var bc="_reactListening"+Math.random().toString(36).slice(2);function gd(t){if(!t[bc]){t[bc]=!0,Dl.forEach(function(r){r!=="selectionchange"&&(Hy.has(r)||md(r,!1,t),md(r,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[bc]||(i[bc]=!0,md("selectionchange",!1,i))}}function wv(t,i,r,o){switch(Kv(i)){case 2:var u=hS;break;case 8:u=pS;break;default:u=Dd}r=u.bind(null,i,r,t),u=void 0,!Iu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(i,r,{capture:!0,passive:u}):t.addEventListener(i,r,!0):u!==void 0?t.addEventListener(i,r,{passive:u}):t.addEventListener(i,r,!1)}function vd(t,i,r,o,u){var h=o;if((i&1)===0&&(i&2)===0&&o!==null)e:for(;;){if(o===null)return;var E=o.tag;if(E===3||E===4){var T=o.stateNode.containerInfo;if(T===u)break;if(E===4)for(E=o.return;E!==null;){var B=E.tag;if((B===3||B===4)&&E.stateNode.containerInfo===u)return;E=E.return}for(;T!==null;){if(E=Ki(T),E===null)return;if(B=E.tag,B===5||B===6||B===26||B===27){o=h=E;continue e}T=T.parentNode}}o=o.return}Lp(function(){var J=h,ue=Ou(r),_e=[];e:{var ne=om.get(t);if(ne!==void 0){var ie=Bl,tt=t;switch(t){case"keypress":if(Pl(r)===0)break e;case"keydown":case"keyup":ie=Px;break;case"focusin":tt="focus",ie=Gu;break;case"focusout":tt="blur",ie=Gu;break;case"beforeblur":case"afterblur":ie=Gu;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=Bp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=bx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=Ix;break;case im:case am:case rm:ie=Tx;break;case sm:ie=Fx;break;case"scroll":case"scrollend":ie=yx;break;case"wheel":ie=Gx;break;case"copy":case"cut":case"paste":ie=Ax;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=zp;break;case"toggle":case"beforetoggle":ie=kx}var Ze=(i&4)!==0,Ht=!Ze&&(t==="scroll"||t==="scrollend"),X=Ze?ne!==null?ne+"Capture":null:ne;Ze=[];for(var V=J,Q;V!==null;){var he=V;if(Q=he.stateNode,he=he.tag,he!==5&&he!==26&&he!==27||Q===null||X===null||(he=oo(V,X),he!=null&&Ze.push(jo(V,he,Q))),Ht)break;V=V.return}0<Ze.length&&(ne=new ie(ne,tt,null,r,ue),_e.push({event:ne,listeners:Ze}))}}if((i&7)===0){e:{if(ne=t==="mouseover"||t==="pointerover",ie=t==="mouseout"||t==="pointerout",ne&&r!==Pu&&(tt=r.relatedTarget||r.fromElement)&&(Ki(tt)||tt[qn]))break e;if((ie||ne)&&(ne=ue.window===ue?ue:(ne=ue.ownerDocument)?ne.defaultView||ne.parentWindow:window,ie?(tt=r.relatedTarget||r.toElement,ie=J,tt=tt?Ki(tt):null,tt!==null&&(Ht=c(tt),Ze=tt.tag,tt!==Ht||Ze!==5&&Ze!==27&&Ze!==6)&&(tt=null)):(ie=null,tt=J),ie!==tt)){if(Ze=Bp,he="onMouseLeave",X="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(Ze=zp,he="onPointerLeave",X="onPointerEnter",V="pointer"),Ht=ie==null?ne:yr(ie),Q=tt==null?ne:yr(tt),ne=new Ze(he,V+"leave",ie,r,ue),ne.target=Ht,ne.relatedTarget=Q,he=null,Ki(ue)===J&&(Ze=new Ze(X,V+"enter",tt,r,ue),Ze.target=Q,Ze.relatedTarget=Ht,he=Ze),Ht=he,ie&&tt)t:{for(Ze=ie,X=tt,V=0,Q=Ze;Q;Q=Ms(Q))V++;for(Q=0,he=X;he;he=Ms(he))Q++;for(;0<V-Q;)Ze=Ms(Ze),V--;for(;0<Q-V;)X=Ms(X),Q--;for(;V--;){if(Ze===X||X!==null&&Ze===X.alternate)break t;Ze=Ms(Ze),X=Ms(X)}Ze=null}else Ze=null;ie!==null&&Av(_e,ne,ie,Ze,!1),tt!==null&&Ht!==null&&Av(_e,Ht,tt,Ze,!0)}}e:{if(ne=J?yr(J):window,ie=ne.nodeName&&ne.nodeName.toLowerCase(),ie==="select"||ie==="input"&&ne.type==="file")var He=Wp;else if(jp(ne))if(qp)He=Jx;else{He=Qx;var ht=Kx}else ie=ne.nodeName,!ie||ie.toLowerCase()!=="input"||ne.type!=="checkbox"&&ne.type!=="radio"?J&&Lu(J.elementType)&&(He=Wp):He=$x;if(He&&(He=He(t,J))){Xp(_e,He,r,ue);break e}ht&&ht(t,ne,J),t==="focusout"&&J&&ne.type==="number"&&J.memoizedProps.value!=null&&On(ne,"number",ne.value)}switch(ht=J?yr(J):window,t){case"focusin":(jp(ht)||ht.contentEditable==="true")&&(es=ht,qu=J,go=null);break;case"focusout":go=qu=es=null;break;case"mousedown":Yu=!0;break;case"contextmenu":case"mouseup":case"dragend":Yu=!1,tm(_e,r,ue);break;case"selectionchange":if(ty)break;case"keydown":case"keyup":tm(_e,r,ue)}var ke;if(ku)e:{switch(t){case"compositionstart":var $e="onCompositionStart";break e;case"compositionend":$e="onCompositionEnd";break e;case"compositionupdate":$e="onCompositionUpdate";break e}$e=void 0}else Jr?Vp(t,r)&&($e="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&($e="onCompositionStart");$e&&(Fp&&r.locale!=="ko"&&(Jr||$e!=="onCompositionStart"?$e==="onCompositionEnd"&&Jr&&(ke=Pp()):(Ba=ue,zu="value"in Ba?Ba.value:Ba.textContent,Jr=!0)),ht=Ec(J,$e),0<ht.length&&($e=new Ip($e,t,null,r,ue),_e.push({event:$e,listeners:ht}),ke?$e.data=ke:(ke=kp(r),ke!==null&&($e.data=ke)))),(ke=Xx?Wx(t,r):qx(t,r))&&($e=Ec(J,"onBeforeInput"),0<$e.length&&(ht=new Ip("onBeforeInput","beforeinput",null,r,ue),_e.push({event:ht,listeners:$e}),ht.data=ke)),Iy(_e,t,J,r,ue)}Tv(_e,i)})}function jo(t,i,r){return{instance:t,listener:i,currentTarget:r}}function Ec(t,i){for(var r=i+"Capture",o=[];t!==null;){var u=t,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=oo(t,r),u!=null&&o.unshift(jo(t,u,h)),u=oo(t,i),u!=null&&o.push(jo(t,u,h))),t.tag===3)return o;t=t.return}return[]}function Ms(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Av(t,i,r,o,u){for(var h=i._reactName,E=[];r!==null&&r!==o;){var T=r,B=T.alternate,J=T.stateNode;if(T=T.tag,B!==null&&B===o)break;T!==5&&T!==26&&T!==27||J===null||(B=J,u?(J=oo(r,h),J!=null&&E.unshift(jo(r,J,B))):u||(J=oo(r,h),J!=null&&E.push(jo(r,J,B)))),r=r.return}E.length!==0&&t.push({event:i,listeners:E})}var Gy=/\r\n?/g,Vy=/\u0000|\uFFFD/g;function Rv(t){return(typeof t=="string"?t:""+t).replace(Gy,`
`).replace(Vy,"")}function Cv(t,i){return i=Rv(i),Rv(t)===i}function Mc(){}function Ft(t,i,r,o,u,h){switch(r){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||Oi(t,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&Oi(t,""+o);break;case"className":Ce(t,"class",o);break;case"tabIndex":Ce(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ce(t,r,o);break;case"style":Up(t,o,h);break;case"data":if(i!=="object"){Ce(t,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||r!=="href")){t.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=Nl(""+o),t.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(r==="formAction"?(i!=="input"&&Ft(t,i,"name",u.name,u,null),Ft(t,i,"formEncType",u.formEncType,u,null),Ft(t,i,"formMethod",u.formMethod,u,null),Ft(t,i,"formTarget",u.formTarget,u,null)):(Ft(t,i,"encType",u.encType,u,null),Ft(t,i,"method",u.method,u,null),Ft(t,i,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=Nl(""+o),t.setAttribute(r,o);break;case"onClick":o!=null&&(t.onclick=Mc);break;case"onScroll":o!=null&&gt("scroll",t);break;case"onScrollEnd":o!=null&&gt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=r}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}r=Nl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""+o):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":o===!0?t.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,o):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(r,o):t.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(r):t.setAttribute(r,o);break;case"popover":gt("beforetoggle",t),gt("toggle",t),Te(t,"popover",o);break;case"xlinkActuate":De(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":De(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":De(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":De(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":De(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":De(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":De(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":De(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":De(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Te(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=_x.get(r)||r,Te(t,r,o))}}function _d(t,i,r,o,u,h){switch(r){case"style":Up(t,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=r}}break;case"children":typeof o=="string"?Oi(t,o):(typeof o=="number"||typeof o=="bigint")&&Oi(t,""+o);break;case"onScroll":o!=null&&gt("scroll",t);break;case"onScrollEnd":o!=null&&gt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Mc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ul.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),i=r.slice(2,u?r.length-7:void 0),h=t[Tn]||null,h=h!=null?h[r]:null,typeof h=="function"&&t.removeEventListener(i,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(i,o,u);break e}r in t?t[r]=o:o===!0?t.setAttribute(r,""):Te(t,r,o)}}}function Cn(t,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",t),gt("load",t);var o=!1,u=!1,h;for(h in r)if(r.hasOwnProperty(h)){var E=r[h];if(E!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Ft(t,i,h,E,r,null)}}u&&Ft(t,i,"srcSet",r.srcSet,r,null),o&&Ft(t,i,"src",r.src,r,null);return;case"input":gt("invalid",t);var T=h=E=u=null,B=null,J=null;for(o in r)if(r.hasOwnProperty(o)){var ue=r[o];if(ue!=null)switch(o){case"name":u=ue;break;case"type":E=ue;break;case"checked":B=ue;break;case"defaultChecked":J=ue;break;case"value":h=ue;break;case"defaultValue":T=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(s(137,i));break;default:Ft(t,i,o,ue,r,null)}}kt(t,h,T,B,J,E,u,!1),en(t);return;case"select":gt("invalid",t),o=E=h=null;for(u in r)if(r.hasOwnProperty(u)&&(T=r[u],T!=null))switch(u){case"value":h=T;break;case"defaultValue":E=T;break;case"multiple":o=T;default:Ft(t,i,u,T,r,null)}i=h,r=E,t.multiple=!!o,i!=null?hn(t,!!o,i,!1):r!=null&&hn(t,!!o,r,!0);return;case"textarea":gt("invalid",t),h=u=o=null;for(E in r)if(r.hasOwnProperty(E)&&(T=r[E],T!=null))switch(E){case"value":o=T;break;case"defaultValue":u=T;break;case"children":h=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Ft(t,i,E,T,r,null)}wn(t,o,u,h),en(t);return;case"option":for(B in r)if(r.hasOwnProperty(B)&&(o=r[B],o!=null))switch(B){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ft(t,i,B,o,r,null)}return;case"dialog":gt("beforetoggle",t),gt("toggle",t),gt("cancel",t),gt("close",t);break;case"iframe":case"object":gt("load",t);break;case"video":case"audio":for(o=0;o<ko.length;o++)gt(ko[o],t);break;case"image":gt("error",t),gt("load",t);break;case"details":gt("toggle",t);break;case"embed":case"source":case"link":gt("error",t),gt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in r)if(r.hasOwnProperty(J)&&(o=r[J],o!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Ft(t,i,J,o,r,null)}return;default:if(Lu(i)){for(ue in r)r.hasOwnProperty(ue)&&(o=r[ue],o!==void 0&&_d(t,i,ue,o,r,void 0));return}}for(T in r)r.hasOwnProperty(T)&&(o=r[T],o!=null&&Ft(t,i,T,o,r,null))}function ky(t,i,r,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,E=null,T=null,B=null,J=null,ue=null;for(ie in r){var _e=r[ie];if(r.hasOwnProperty(ie)&&_e!=null)switch(ie){case"checked":break;case"value":break;case"defaultValue":B=_e;default:o.hasOwnProperty(ie)||Ft(t,i,ie,null,o,_e)}}for(var ne in o){var ie=o[ne];if(_e=r[ne],o.hasOwnProperty(ne)&&(ie!=null||_e!=null))switch(ne){case"type":h=ie;break;case"name":u=ie;break;case"checked":J=ie;break;case"defaultChecked":ue=ie;break;case"value":E=ie;break;case"defaultValue":T=ie;break;case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(s(137,i));break;default:ie!==_e&&Ft(t,i,ne,ie,o,_e)}}Ji(t,E,T,B,J,ue,h,u);return;case"select":ie=E=T=ne=null;for(h in r)if(B=r[h],r.hasOwnProperty(h)&&B!=null)switch(h){case"value":break;case"multiple":ie=B;default:o.hasOwnProperty(h)||Ft(t,i,h,null,o,B)}for(u in o)if(h=o[u],B=r[u],o.hasOwnProperty(u)&&(h!=null||B!=null))switch(u){case"value":ne=h;break;case"defaultValue":T=h;break;case"multiple":E=h;default:h!==B&&Ft(t,i,u,h,o,B)}i=T,r=E,o=ie,ne!=null?hn(t,!!r,ne,!1):!!o!=!!r&&(i!=null?hn(t,!!r,i,!0):hn(t,!!r,r?[]:"",!1));return;case"textarea":ie=ne=null;for(T in r)if(u=r[T],r.hasOwnProperty(T)&&u!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ft(t,i,T,null,o,u)}for(E in o)if(u=o[E],h=r[E],o.hasOwnProperty(E)&&(u!=null||h!=null))switch(E){case"value":ne=u;break;case"defaultValue":ie=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&Ft(t,i,E,u,o,h)}xn(t,ne,ie);return;case"option":for(var tt in r)if(ne=r[tt],r.hasOwnProperty(tt)&&ne!=null&&!o.hasOwnProperty(tt))switch(tt){case"selected":t.selected=!1;break;default:Ft(t,i,tt,null,o,ne)}for(B in o)if(ne=o[B],ie=r[B],o.hasOwnProperty(B)&&ne!==ie&&(ne!=null||ie!=null))switch(B){case"selected":t.selected=ne&&typeof ne!="function"&&typeof ne!="symbol";break;default:Ft(t,i,B,ne,o,ie)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ze in r)ne=r[Ze],r.hasOwnProperty(Ze)&&ne!=null&&!o.hasOwnProperty(Ze)&&Ft(t,i,Ze,null,o,ne);for(J in o)if(ne=o[J],ie=r[J],o.hasOwnProperty(J)&&ne!==ie&&(ne!=null||ie!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(s(137,i));break;default:Ft(t,i,J,ne,o,ie)}return;default:if(Lu(i)){for(var Ht in r)ne=r[Ht],r.hasOwnProperty(Ht)&&ne!==void 0&&!o.hasOwnProperty(Ht)&&_d(t,i,Ht,void 0,o,ne);for(ue in o)ne=o[ue],ie=r[ue],!o.hasOwnProperty(ue)||ne===ie||ne===void 0&&ie===void 0||_d(t,i,ue,ne,o,ie);return}}for(var X in r)ne=r[X],r.hasOwnProperty(X)&&ne!=null&&!o.hasOwnProperty(X)&&Ft(t,i,X,null,o,ne);for(_e in o)ne=o[_e],ie=r[_e],!o.hasOwnProperty(_e)||ne===ie||ne==null&&ie==null||Ft(t,i,_e,ne,o,ie)}var xd=null,yd=null;function Tc(t){return t.nodeType===9?t:t.ownerDocument}function Dv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Uv(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Sd(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var bd=null;function jy(){var t=window.event;return t&&t.type==="popstate"?t===bd?!1:(bd=t,!0):(bd=null,!1)}var Nv=typeof setTimeout=="function"?setTimeout:void 0,Xy=typeof clearTimeout=="function"?clearTimeout:void 0,Lv=typeof Promise=="function"?Promise:void 0,Wy=typeof queueMicrotask=="function"?queueMicrotask:typeof Lv<"u"?function(t){return Lv.resolve(null).then(t).catch(qy)}:Nv;function qy(t){setTimeout(function(){throw t})}function $a(t){return t==="head"}function Pv(t,i){var r=i,o=0,u=0;do{var h=r.nextSibling;if(t.removeChild(r),h&&h.nodeType===8)if(r=h.data,r==="/$"){if(0<o&&8>o){r=o;var E=t.ownerDocument;if(r&1&&Xo(E.documentElement),r&2&&Xo(E.body),r&4)for(r=E.head,Xo(r),E=r.firstChild;E;){var T=E.nextSibling,B=E.nodeName;E[Na]||B==="SCRIPT"||B==="STYLE"||B==="LINK"&&E.rel.toLowerCase()==="stylesheet"||r.removeChild(E),E=T}}if(u===0){t.removeChild(h),Jo(i);return}u--}else r==="$"||r==="$?"||r==="$!"?u++:o=r.charCodeAt(0)-48;else o=0;r=h}while(r);Jo(i)}function Ed(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Ed(r),La(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function Yy(t,i,r,o){for(;t.nodeType===1;){var u=r;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Na])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=Ci(t.nextSibling),t===null)break}return null}function Zy(t,i,r){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=Ci(t.nextSibling),t===null))return null;return t}function Md(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Ky(t,i){var r=t.ownerDocument;if(t.data!=="$?"||r.readyState==="complete")i();else{var o=function(){i(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Ci(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}var Td=null;function Ov(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(i===0)return t;i--}else r==="/$"&&i++}t=t.previousSibling}return null}function Bv(t,i,r){switch(i=Tc(r),t){case"html":if(t=i.documentElement,!t)throw Error(s(452));return t;case"head":if(t=i.head,!t)throw Error(s(453));return t;case"body":if(t=i.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Xo(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);La(t)}var bi=new Map,Iv=new Set;function wc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var pa=K.d;K.d={f:Qy,r:$y,D:Jy,C:eS,L:tS,m:nS,X:aS,S:iS,M:rS};function Qy(){var t=pa.f(),i=vc();return t||i}function $y(t){var i=Qi(t);i!==null&&i.tag===5&&i.type==="form"?ig(i):pa.r(t)}var Ts=typeof document>"u"?null:document;function zv(t,i,r){var o=Ts;if(o&&typeof i=="string"&&i){var u=qt(i);u='link[rel="'+t+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),Iv.has(u)||(Iv.add(u),t={rel:t,crossOrigin:r,href:i},o.querySelector(u)===null&&(i=o.createElement("link"),Cn(i,"link",t),on(i),o.head.appendChild(i)))}}function Jy(t){pa.D(t),zv("dns-prefetch",t,null)}function eS(t,i){pa.C(t,i),zv("preconnect",t,i)}function tS(t,i,r){pa.L(t,i,r);var o=Ts;if(o&&t&&i){var u='link[rel="preload"][as="'+qt(i)+'"]';i==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+qt(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+qt(r.imageSizes)+'"]')):u+='[href="'+qt(t)+'"]';var h=u;switch(i){case"style":h=ws(t);break;case"script":h=As(t)}bi.has(h)||(t=g({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:t,as:i},r),bi.set(h,t),o.querySelector(u)!==null||i==="style"&&o.querySelector(Wo(h))||i==="script"&&o.querySelector(qo(h))||(i=o.createElement("link"),Cn(i,"link",t),on(i),o.head.appendChild(i)))}}function nS(t,i){pa.m(t,i);var r=Ts;if(r&&t){var o=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+qt(o)+'"][href="'+qt(t)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=As(t)}if(!bi.has(h)&&(t=g({rel:"modulepreload",href:t},i),bi.set(h,t),r.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(qo(h)))return}o=r.createElement("link"),Cn(o,"link",t),on(o),r.head.appendChild(o)}}}function iS(t,i,r){pa.S(t,i,r);var o=Ts;if(o&&t){var u=Pa(o).hoistableStyles,h=ws(t);i=i||"default";var E=u.get(h);if(!E){var T={loading:0,preload:null};if(E=o.querySelector(Wo(h)))T.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":i},r),(r=bi.get(h))&&wd(t,r);var B=E=o.createElement("link");on(B),Cn(B,"link",t),B._p=new Promise(function(J,ue){B.onload=J,B.onerror=ue}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Ac(E,i,o)}E={type:"stylesheet",instance:E,count:1,state:T},u.set(h,E)}}}function aS(t,i){pa.X(t,i);var r=Ts;if(r&&t){var o=Pa(r).hoistableScripts,u=As(t),h=o.get(u);h||(h=r.querySelector(qo(u)),h||(t=g({src:t,async:!0},i),(i=bi.get(u))&&Ad(t,i),h=r.createElement("script"),on(h),Cn(h,"link",t),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function rS(t,i){pa.M(t,i);var r=Ts;if(r&&t){var o=Pa(r).hoistableScripts,u=As(t),h=o.get(u);h||(h=r.querySelector(qo(u)),h||(t=g({src:t,async:!0,type:"module"},i),(i=bi.get(u))&&Ad(t,i),h=r.createElement("script"),on(h),Cn(h,"link",t),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function Fv(t,i,r,o){var u=(u=Se.current)?wc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=ws(r.href),r=Pa(u).hoistableStyles,o=r.get(i),o||(o={type:"style",instance:null,count:0,state:null},r.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=ws(r.href);var h=Pa(u).hoistableStyles,E=h.get(t);if(E||(u=u.ownerDocument||u,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,E),(h=u.querySelector(Wo(t)))&&!h._p&&(E.instance=h,E.state.loading=5),bi.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},bi.set(t,r),h||sS(u,t,r,E.state))),i&&o===null)throw Error(s(528,""));return E}if(i&&o!==null)throw Error(s(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=As(r),r=Pa(u).hoistableScripts,o=r.get(i),o||(o={type:"script",instance:null,count:0,state:null},r.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function ws(t){return'href="'+qt(t)+'"'}function Wo(t){return'link[rel="stylesheet"]['+t+"]"}function Hv(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function sS(t,i,r,o){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=t.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),Cn(i,"link",r),on(i),t.head.appendChild(i))}function As(t){return'[src="'+qt(t)+'"]'}function qo(t){return"script[async]"+t}function Gv(t,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var o=t.querySelector('style[data-href~="'+qt(r.href)+'"]');if(o)return i.instance=o,on(o),o;var u=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),on(o),Cn(o,"style",u),Ac(o,r.precedence,t),i.instance=o;case"stylesheet":u=ws(r.href);var h=t.querySelector(Wo(u));if(h)return i.state.loading|=4,i.instance=h,on(h),h;o=Hv(r),(u=bi.get(u))&&wd(o,u),h=(t.ownerDocument||t).createElement("link"),on(h);var E=h;return E._p=new Promise(function(T,B){E.onload=T,E.onerror=B}),Cn(h,"link",o),i.state.loading|=4,Ac(h,r.precedence,t),i.instance=h;case"script":return h=As(r.src),(u=t.querySelector(qo(h)))?(i.instance=u,on(u),u):(o=r,(u=bi.get(h))&&(o=g({},r),Ad(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),on(u),Cn(u,"link",o),t.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,Ac(o,r.precedence,t));return i.instance}function Ac(t,i,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,E=0;E<o.length;E++){var T=o[E];if(T.dataset.precedence===i)h=T;else if(h!==u)break}h?h.parentNode.insertBefore(t,h.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(t,i.firstChild))}function wd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Ad(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Rc=null;function Vv(t,i,r){if(Rc===null){var o=new Map,u=Rc=new Map;u.set(r,o)}else u=Rc,o=u.get(r),o||(o=new Map,u.set(r,o));if(o.has(t))return o;for(o.set(t,null),r=r.getElementsByTagName(t),u=0;u<r.length;u++){var h=r[u];if(!(h[Na]||h[dn]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var E=h.getAttribute(i)||"";E=t+E;var T=o.get(E);T?T.push(h):o.set(E,[h])}}return o}function kv(t,i,r){t=t.ownerDocument||t,t.head.insertBefore(r,i==="title"?t.querySelector("head > title"):null)}function oS(t,i,r){if(r===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function jv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Yo=null;function lS(){}function cS(t,i,r){if(Yo===null)throw Error(s(475));var o=Yo;if(i.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var u=ws(r.href),h=t.querySelector(Wo(u));if(h){t=h._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=Cc.bind(o),t.then(o,o)),i.state.loading|=4,i.instance=h,on(h);return}h=t.ownerDocument||t,r=Hv(r),(u=bi.get(u))&&wd(r,u),h=h.createElement("link"),on(h);var E=h;E._p=new Promise(function(T,B){E.onload=T,E.onerror=B}),Cn(h,"link",r),i.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(o.count++,i=Cc.bind(o),t.addEventListener("load",i),t.addEventListener("error",i))}}function uS(){if(Yo===null)throw Error(s(475));var t=Yo;return t.stylesheets&&t.count===0&&Rd(t,t.stylesheets),0<t.count?function(i){var r=setTimeout(function(){if(t.stylesheets&&Rd(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(r)}}:null}function Cc(){if(this.count--,this.count===0){if(this.stylesheets)Rd(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Dc=null;function Rd(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Dc=new Map,i.forEach(fS,t),Dc=null,Cc.call(t))}function fS(t,i){if(!(i.state.loading&4)){var r=Dc.get(t);if(r)var o=r.get(null);else{r=new Map,Dc.set(t,r);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var E=u[h];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(r.set(E.dataset.precedence,E),o=E)}o&&r.set(null,o)}u=i.instance,E=u.getAttribute("data-precedence"),h=r.get(E)||o,h===o&&r.set(null,u),r.set(E,u),this.count++,o=Cc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),i.state.loading|=4}}var Zo={$$typeof:D,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function dS(t,i,r,o,u,h,E,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=le(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=le(0),this.hiddenUpdates=le(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Xv(t,i,r,o,u,h,E,T,B,J,ue,_e){return t=new dS(t,i,r,E,T,B,J,_e),i=1,h===!0&&(i|=24),h=ni(3,null,null,i),t.current=h,h.stateNode=t,i=cf(),i.refCount++,t.pooledCache=i,i.refCount++,h.memoizedState={element:o,isDehydrated:r,cache:i},hf(h),t}function Wv(t){return t?(t=as,t):as}function qv(t,i,r,o,u,h){u=Wv(u),o.context===null?o.context=u:o.pendingContext=u,o=Fa(i),o.payload={element:r},h=h===void 0?null:h,h!==null&&(o.callback=h),r=Ha(t,o,i),r!==null&&(oi(r,t,i),To(r,t,i))}function Yv(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<i?r:i}}function Cd(t,i){Yv(t,i),(t=t.alternate)&&Yv(t,i)}function Zv(t){if(t.tag===13){var i=is(t,67108864);i!==null&&oi(i,t,67108864),Cd(t,67108864)}}var Uc=!0;function hS(t,i,r,o){var u=I.T;I.T=null;var h=K.p;try{K.p=2,Dd(t,i,r,o)}finally{K.p=h,I.T=u}}function pS(t,i,r,o){var u=I.T;I.T=null;var h=K.p;try{K.p=8,Dd(t,i,r,o)}finally{K.p=h,I.T=u}}function Dd(t,i,r,o){if(Uc){var u=Ud(o);if(u===null)vd(t,i,o,Nc,r),Qv(t,o);else if(gS(u,t,i,r,o))o.stopPropagation();else if(Qv(t,o),i&4&&-1<mS.indexOf(t)){for(;u!==null;){var h=Qi(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var E=Be(h.pendingLanes);if(E!==0){var T=h;for(T.pendingLanes|=2,T.entangledLanes|=2;E;){var B=1<<31-Ge(E);T.entanglements[1]|=B,E&=~B}Hi(h),(Pt&6)===0&&(mc=it()+500,Vo(0))}}break;case 13:T=is(h,2),T!==null&&oi(T,h,2),vc(),Cd(h,2)}if(h=Ud(o),h===null&&vd(t,i,o,Nc,r),h===u)break;u=h}u!==null&&o.stopPropagation()}else vd(t,i,o,null,r)}}function Ud(t){return t=Ou(t),Nd(t)}var Nc=null;function Nd(t){if(Nc=null,t=Ki(t),t!==null){var i=c(t);if(i===null)t=null;else{var r=i.tag;if(r===13){if(t=f(i),t!==null)return t;t=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Nc=t,null}function Kv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xe()){case Bt:return 2;case Ve:return 8;case P:case w:return 32;case te:return 268435456;default:return 32}default:return 32}}var Ld=!1,Ja=null,er=null,tr=null,Ko=new Map,Qo=new Map,nr=[],mS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qv(t,i){switch(t){case"focusin":case"focusout":Ja=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":Ko.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qo.delete(i.pointerId)}}function $o(t,i,r,o,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:r,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},i!==null&&(i=Qi(i),i!==null&&Zv(i)),t):(t.eventSystemFlags|=o,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function gS(t,i,r,o,u){switch(i){case"focusin":return Ja=$o(Ja,t,i,r,o,u),!0;case"dragenter":return er=$o(er,t,i,r,o,u),!0;case"mouseover":return tr=$o(tr,t,i,r,o,u),!0;case"pointerover":var h=u.pointerId;return Ko.set(h,$o(Ko.get(h)||null,t,i,r,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Qo.set(h,$o(Qo.get(h)||null,t,i,r,o,u)),!0}return!1}function $v(t){var i=Ki(t.target);if(i!==null){var r=c(i);if(r!==null){if(i=r.tag,i===13){if(i=f(r),i!==null){t.blockedOn=i,ei(t.priority,function(){if(r.tag===13){var o=si();o=Wt(o);var u=is(r,o);u!==null&&oi(u,r,o),Cd(r,o)}});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Lc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var r=Ud(t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);Pu=o,r.target.dispatchEvent(o),Pu=null}else return i=Qi(r),i!==null&&Zv(i),t.blockedOn=r,!1;i.shift()}return!0}function Jv(t,i,r){Lc(t)&&r.delete(i)}function vS(){Ld=!1,Ja!==null&&Lc(Ja)&&(Ja=null),er!==null&&Lc(er)&&(er=null),tr!==null&&Lc(tr)&&(tr=null),Ko.forEach(Jv),Qo.forEach(Jv)}function Pc(t,i){t.blockedOn===i&&(t.blockedOn=null,Ld||(Ld=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,vS)))}var Oc=null;function e0(t){Oc!==t&&(Oc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Oc===t&&(Oc=null);for(var i=0;i<t.length;i+=3){var r=t[i],o=t[i+1],u=t[i+2];if(typeof o!="function"){if(Nd(o||r)===null)continue;break}var h=Qi(r);h!==null&&(t.splice(i,3),i-=3,Nf(h,{pending:!0,data:u,method:r.method,action:o},o,u))}}))}function Jo(t){function i(B){return Pc(B,t)}Ja!==null&&Pc(Ja,t),er!==null&&Pc(er,t),tr!==null&&Pc(tr,t),Ko.forEach(i),Qo.forEach(i);for(var r=0;r<nr.length;r++){var o=nr[r];o.blockedOn===t&&(o.blockedOn=null)}for(;0<nr.length&&(r=nr[0],r.blockedOn===null);)$v(r),r.blockedOn===null&&nr.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var u=r[o],h=r[o+1],E=u[Tn]||null;if(typeof h=="function")E||e0(r);else if(E){var T=null;if(h&&h.hasAttribute("formAction")){if(u=h,E=h[Tn]||null)T=E.formAction;else if(Nd(u)!==null)continue}else T=E.action;typeof T=="function"?r[o+1]=T:(r.splice(o,3),o-=3),e0(r)}}}function Pd(t){this._internalRoot=t}Bc.prototype.render=Pd.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(s(409));var r=i.current,o=si();qv(r,o,t,i,null,null)},Bc.prototype.unmount=Pd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;qv(t.current,2,null,t,null,null),vc(),i[qn]=null}};function Bc(t){this._internalRoot=t}Bc.prototype.unstable_scheduleHydration=function(t){if(t){var i=Tt();t={blockedOn:null,target:t,priority:i};for(var r=0;r<nr.length&&i!==0&&i<nr[r].priority;r++);nr.splice(r,0,t),r===0&&$v(t)}};var t0=e.version;if(t0!=="19.1.0")throw Error(s(527,t0,"19.1.0"));K.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(i),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var _S={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ic.isDisabled&&Ic.supportsFiber)try{fe=Ic.inject(_S),Oe=Ic}catch{}}return tl.createRoot=function(t,i){if(!l(t))throw Error(s(299));var r=!1,o="",u=vg,h=_g,E=xg,T=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=Xv(t,1,!1,null,null,r,o,u,h,E,T,null),t[qn]=i.current,gd(t),new Pd(i)},tl.hydrateRoot=function(t,i,r){if(!l(t))throw Error(s(299));var o=!1,u="",h=vg,E=_g,T=xg,B=null,J=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(E=r.onCaughtError),r.onRecoverableError!==void 0&&(T=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(B=r.unstable_transitionCallbacks),r.formState!==void 0&&(J=r.formState)),i=Xv(t,1,!0,i,r??null,o,u,h,E,T,B,J),i.context=Wv(null),r=i.current,o=si(),o=Wt(o),u=Fa(o),u.callback=null,Ha(r,u,o),r=o,i.current.lanes=r,ve(i,r),Hi(i),t[qn]=i.current,gd(t),new Bc(i)},tl.version="19.1.0",tl}var f0;function RS(){if(f0)return Id.exports;f0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Id.exports=AS(),Id.exports}var CS=RS(),nl={},d0;function DS(){if(d0)return nl;d0=1,Object.defineProperty(nl,"__esModule",{value:!0}),nl.parse=f,nl.serialize=m;const a=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,c=(()=>{const x=function(){};return x.prototype=Object.create(null),x})();function f(x,b){const M=new c,A=x.length;if(A<2)return M;const S=(b==null?void 0:b.decode)||g;let v=0;do{const L=x.indexOf("=",v);if(L===-1)break;const D=x.indexOf(";",v),U=D===-1?A:D;if(L>U){v=x.lastIndexOf(";",L-1)+1;continue}const F=d(x,v,L),G=p(x,L,F),z=x.slice(F,G);if(M[z]===void 0){let W=d(x,L+1,U),N=p(x,U,W);const C=S(x.slice(W,N));M[z]=C}v=U+1}while(v<A);return M}function d(x,b,M){do{const A=x.charCodeAt(b);if(A!==32&&A!==9)return b}while(++b<M);return M}function p(x,b,M){for(;b>M;){const A=x.charCodeAt(--b);if(A!==32&&A!==9)return b+1}return M}function m(x,b,M){const A=(M==null?void 0:M.encode)||encodeURIComponent;if(!a.test(x))throw new TypeError(`argument name is invalid: ${x}`);const S=A(b);if(!e.test(S))throw new TypeError(`argument val is invalid: ${b}`);let v=x+"="+S;if(!M)return v;if(M.maxAge!==void 0){if(!Number.isInteger(M.maxAge))throw new TypeError(`option maxAge is invalid: ${M.maxAge}`);v+="; Max-Age="+M.maxAge}if(M.domain){if(!n.test(M.domain))throw new TypeError(`option domain is invalid: ${M.domain}`);v+="; Domain="+M.domain}if(M.path){if(!s.test(M.path))throw new TypeError(`option path is invalid: ${M.path}`);v+="; Path="+M.path}if(M.expires){if(!_(M.expires)||!Number.isFinite(M.expires.valueOf()))throw new TypeError(`option expires is invalid: ${M.expires}`);v+="; Expires="+M.expires.toUTCString()}if(M.httpOnly&&(v+="; HttpOnly"),M.secure&&(v+="; Secure"),M.partitioned&&(v+="; Partitioned"),M.priority)switch(typeof M.priority=="string"?M.priority.toLowerCase():void 0){case"low":v+="; Priority=Low";break;case"medium":v+="; Priority=Medium";break;case"high":v+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${M.priority}`)}if(M.sameSite)switch(typeof M.sameSite=="string"?M.sameSite.toLowerCase():M.sameSite){case!0:case"strict":v+="; SameSite=Strict";break;case"lax":v+="; SameSite=Lax";break;case"none":v+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${M.sameSite}`)}return v}function g(x){if(x.indexOf("%")===-1)return x;try{return decodeURIComponent(x)}catch{return x}}function _(x){return l.call(x)==="[object Date]"}return nl}DS();var h0="popstate";function US(a={}){function e(s,l){let{pathname:c,search:f,hash:d}=s.location;return Eh("",{pathname:c,search:f,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(s,l){return typeof l=="string"?l:hl(l)}return LS(e,n,null,a)}function Jt(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function Wi(a,e){if(!a){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function NS(){return Math.random().toString(36).substring(2,10)}function p0(a,e){return{usr:a.state,key:a.key,idx:e}}function Eh(a,e,n=null,s){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof e=="string"?eo(e):e,state:n,key:e&&e.key||s||NS()}}function hl({pathname:a="/",search:e="",hash:n=""}){return e&&e!=="?"&&(a+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(a+=n.charAt(0)==="#"?n:"#"+n),a}function eo(a){let e={};if(a){let n=a.indexOf("#");n>=0&&(e.hash=a.substring(n),a=a.substring(0,n));let s=a.indexOf("?");s>=0&&(e.search=a.substring(s),a=a.substring(0,s)),a&&(e.pathname=a)}return e}function LS(a,e,n,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,f=l.history,d="POP",p=null,m=g();m==null&&(m=0,f.replaceState({...f.state,idx:m},""));function g(){return(f.state||{idx:null}).idx}function _(){d="POP";let S=g(),v=S==null?null:S-m;m=S,p&&p({action:d,location:A.location,delta:v})}function x(S,v){d="PUSH";let L=Eh(A.location,S,v);m=g()+1;let D=p0(L,m),U=A.createHref(L);try{f.pushState(D,"",U)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;l.location.assign(U)}c&&p&&p({action:d,location:A.location,delta:1})}function b(S,v){d="REPLACE";let L=Eh(A.location,S,v);m=g();let D=p0(L,m),U=A.createHref(L);f.replaceState(D,"",U),c&&p&&p({action:d,location:A.location,delta:0})}function M(S){let v=l.location.origin!=="null"?l.location.origin:l.location.href,L=typeof S=="string"?S:hl(S);return L=L.replace(/ $/,"%20"),Jt(v,`No window.location.(origin|href) available to create URL for href: ${L}`),new URL(L,v)}let A={get action(){return d},get location(){return a(l,f)},listen(S){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(h0,_),p=S,()=>{l.removeEventListener(h0,_),p=null}},createHref(S){return e(l,S)},createURL:M,encodeLocation(S){let v=M(S);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:x,replace:b,go(S){return f.go(S)}};return A}function x_(a,e,n="/"){return PS(a,e,n,!1)}function PS(a,e,n,s){let l=typeof e=="string"?eo(e):e,c=wa(l.pathname||"/",n);if(c==null)return null;let f=y_(a);OS(f);let d=null;for(let p=0;d==null&&p<f.length;++p){let m=WS(c);d=jS(f[p],m,s)}return d}function y_(a,e=[],n=[],s=""){let l=(c,f,d)=>{let p={relativePath:d===void 0?c.path||"":d,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};p.relativePath.startsWith("/")&&(Jt(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let m=Ea([s,p.relativePath]),g=n.concat(p);c.children&&c.children.length>0&&(Jt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),y_(c.children,e,g,m)),!(c.path==null&&!c.index)&&e.push({path:m,score:VS(m,c.index),routesMeta:g})};return a.forEach((c,f)=>{var d;if(c.path===""||!((d=c.path)!=null&&d.includes("?")))l(c,f);else for(let p of S_(c.path))l(c,f,p)}),e}function S_(a){let e=a.split("/");if(e.length===0)return[];let[n,...s]=e,l=n.endsWith("?"),c=n.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let f=S_(s.join("/")),d=[];return d.push(...f.map(p=>p===""?c:[c,p].join("/"))),l&&d.push(...f),d.map(p=>a.startsWith("/")&&p===""?"/":p)}function OS(a){a.sort((e,n)=>e.score!==n.score?n.score-e.score:kS(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}var BS=/^:[\w-]+$/,IS=3,zS=2,FS=1,HS=10,GS=-2,m0=a=>a==="*";function VS(a,e){let n=a.split("/"),s=n.length;return n.some(m0)&&(s+=GS),e&&(s+=zS),n.filter(l=>!m0(l)).reduce((l,c)=>l+(BS.test(c)?IS:c===""?FS:HS),s)}function kS(a,e){return a.length===e.length&&a.slice(0,-1).every((s,l)=>s===e[l])?a[a.length-1]-e[e.length-1]:0}function jS(a,e,n=!1){let{routesMeta:s}=a,l={},c="/",f=[];for(let d=0;d<s.length;++d){let p=s[d],m=d===s.length-1,g=c==="/"?e:e.slice(c.length)||"/",_=vu({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),x=p.route;if(!_&&m&&n&&!s[s.length-1].route.index&&(_=vu({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!_)return null;Object.assign(l,_.params),f.push({params:l,pathname:Ea([c,_.pathname]),pathnameBase:KS(Ea([c,_.pathnameBase])),route:x}),_.pathnameBase!=="/"&&(c=Ea([c,_.pathnameBase]))}return f}function vu(a,e){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[n,s]=XS(a.path,a.caseSensitive,a.end),l=e.match(n);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:s.reduce((m,{paramName:g,isOptional:_},x)=>{if(g==="*"){let M=d[x]||"";f=c.slice(0,c.length-M.length).replace(/(.)\/+$/,"$1")}const b=d[x];return _&&!b?m[g]=void 0:m[g]=(b||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:f,pattern:a}}function XS(a,e=!1,n=!0){Wi(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let s=[],l="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,p)=>(s.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(s.push({paramName:"*"}),l+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":a!==""&&a!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function WS(a){try{return a.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Wi(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),a}}function wa(a,e){if(e==="/")return a;if(!a.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=a.charAt(n);return s&&s!=="/"?null:a.slice(n)||"/"}function qS(a,e="/"){let{pathname:n,search:s="",hash:l=""}=typeof a=="string"?eo(a):a;return{pathname:n?n.startsWith("/")?n:YS(n,e):e,search:QS(s),hash:$S(l)}}function YS(a,e){let n=e.replace(/\/+$/,"").split("/");return a.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function Gd(a,e,n,s){return`Cannot include a '${a}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ZS(a){return a.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function b_(a){let e=ZS(a);return e.map((n,s)=>s===e.length-1?n.pathname:n.pathnameBase)}function E_(a,e,n,s=!1){let l;typeof a=="string"?l=eo(a):(l={...a},Jt(!l.pathname||!l.pathname.includes("?"),Gd("?","pathname","search",l)),Jt(!l.pathname||!l.pathname.includes("#"),Gd("#","pathname","hash",l)),Jt(!l.search||!l.search.includes("#"),Gd("#","search","hash",l)));let c=a===""||l.pathname==="",f=c?"/":l.pathname,d;if(f==null)d=n;else{let _=e.length-1;if(!s&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),_-=1;l.pathname=x.join("/")}d=_>=0?e[_]:"/"}let p=qS(l,d),m=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}var Ea=a=>a.join("/").replace(/\/\/+/g,"/"),KS=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),QS=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,$S=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function JS(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var M_=["POST","PUT","PATCH","DELETE"];new Set(M_);var e1=["GET",...M_];new Set(e1);var to=de.createContext(null);to.displayName="DataRouter";var Au=de.createContext(null);Au.displayName="DataRouterState";var T_=de.createContext({isTransitioning:!1});T_.displayName="ViewTransition";var t1=de.createContext(new Map);t1.displayName="Fetchers";var n1=de.createContext(null);n1.displayName="Await";var Yi=de.createContext(null);Yi.displayName="Navigation";var yl=de.createContext(null);yl.displayName="Location";var Zi=de.createContext({outlet:null,matches:[],isDataRoute:!1});Zi.displayName="Route";var op=de.createContext(null);op.displayName="RouteError";function i1(a,{relative:e}={}){Jt(Sl(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:s}=de.useContext(Yi),{hash:l,pathname:c,search:f}=bl(a,{relative:e}),d=c;return n!=="/"&&(d=c==="/"?n:Ea([n,c])),s.createHref({pathname:d,search:f,hash:l})}function Sl(){return de.useContext(yl)!=null}function Ca(){return Jt(Sl(),"useLocation() may be used only in the context of a <Router> component."),de.useContext(yl).location}var w_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function A_(a){de.useContext(Yi).static||de.useLayoutEffect(a)}function a1(){let{isDataRoute:a}=de.useContext(Zi);return a?_1():r1()}function r1(){Jt(Sl(),"useNavigate() may be used only in the context of a <Router> component.");let a=de.useContext(to),{basename:e,navigator:n}=de.useContext(Yi),{matches:s}=de.useContext(Zi),{pathname:l}=Ca(),c=JSON.stringify(b_(s)),f=de.useRef(!1);return A_(()=>{f.current=!0}),de.useCallback((p,m={})=>{if(Wi(f.current,w_),!f.current)return;if(typeof p=="number"){n.go(p);return}let g=E_(p,JSON.parse(c),l,m.relative==="path");a==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Ea([e,g.pathname])),(m.replace?n.replace:n.push)(g,m.state,m)},[e,n,c,l,a])}de.createContext(null);function s1(){let{matches:a}=de.useContext(Zi),e=a[a.length-1];return e?e.params:{}}function bl(a,{relative:e}={}){let{matches:n}=de.useContext(Zi),{pathname:s}=Ca(),l=JSON.stringify(b_(n));return de.useMemo(()=>E_(a,JSON.parse(l),s,e==="path"),[a,l,s,e])}function o1(a,e){return R_(a,e)}function R_(a,e,n,s){var L;Jt(Sl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:c}=de.useContext(Yi),{matches:f}=de.useContext(Zi),d=f[f.length-1],p=d?d.params:{},m=d?d.pathname:"/",g=d?d.pathnameBase:"/",_=d&&d.route;{let D=_&&_.path||"";C_(m,!_||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let x=Ca(),b;if(e){let D=typeof e=="string"?eo(e):e;Jt(g==="/"||((L=D.pathname)==null?void 0:L.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${D.pathname}" was given in the \`location\` prop.`),b=D}else b=x;let M=b.pathname||"/",A=M;if(g!=="/"){let D=g.replace(/^\//,"").split("/");A="/"+M.replace(/^\//,"").split("/").slice(D.length).join("/")}let S=!c&&n&&n.matches&&n.matches.length>0?n.matches:x_(a,{pathname:A});Wi(_||S!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),Wi(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=d1(S&&S.map(D=>Object.assign({},D,{params:Object.assign({},p,D.params),pathname:Ea([g,l.encodeLocation?l.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?g:Ea([g,l.encodeLocation?l.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),f,n,s);return e&&v?de.createElement(yl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...b},navigationType:"POP"}},v):v}function l1(){let a=v1(),e=JS(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),n=a instanceof Error?a.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",a),f=de.createElement(de.Fragment,null,de.createElement("p",null,"💿 Hey developer 👋"),de.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",de.createElement("code",{style:c},"ErrorBoundary")," or"," ",de.createElement("code",{style:c},"errorElement")," prop on your route.")),de.createElement(de.Fragment,null,de.createElement("h2",null,"Unexpected Application Error!"),de.createElement("h3",{style:{fontStyle:"italic"}},e),n?de.createElement("pre",{style:l},n):null,f)}var c1=de.createElement(l1,null),u1=class extends de.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,e){return e.location!==a.location||e.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:e.error,location:e.location,revalidation:a.revalidation||e.revalidation}}componentDidCatch(a,e){console.error("React Router caught the following error during render",a,e)}render(){return this.state.error!==void 0?de.createElement(Zi.Provider,{value:this.props.routeContext},de.createElement(op.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function f1({routeContext:a,match:e,children:n}){let s=de.useContext(to);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),de.createElement(Zi.Provider,{value:a},n)}function d1(a,e=[],n=null,s=null){if(a==null){if(!n)return null;if(n.errors)a=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)a=n.matches;else return null}let l=a,c=n==null?void 0:n.errors;if(c!=null){let p=l.findIndex(m=>m.route.id&&(c==null?void 0:c[m.route.id])!==void 0);Jt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,p+1))}let f=!1,d=-1;if(n)for(let p=0;p<l.length;p++){let m=l[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=p),m.route.id){let{loaderData:g,errors:_}=n,x=m.route.loader&&!g.hasOwnProperty(m.route.id)&&(!_||_[m.route.id]===void 0);if(m.route.lazy||x){f=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((p,m,g)=>{let _,x=!1,b=null,M=null;n&&(_=c&&m.route.id?c[m.route.id]:void 0,b=m.route.errorElement||c1,f&&(d<0&&g===0?(C_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,M=null):d===g&&(x=!0,M=m.route.hydrateFallbackElement||null)));let A=e.concat(l.slice(0,g+1)),S=()=>{let v;return _?v=b:x?v=M:m.route.Component?v=de.createElement(m.route.Component,null):m.route.element?v=m.route.element:v=p,de.createElement(f1,{match:m,routeContext:{outlet:p,matches:A,isDataRoute:n!=null},children:v})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?de.createElement(u1,{location:n.location,revalidation:n.revalidation,component:b,error:_,children:S(),routeContext:{outlet:null,matches:A,isDataRoute:!0}}):S()},null)}function lp(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function h1(a){let e=de.useContext(to);return Jt(e,lp(a)),e}function p1(a){let e=de.useContext(Au);return Jt(e,lp(a)),e}function m1(a){let e=de.useContext(Zi);return Jt(e,lp(a)),e}function cp(a){let e=m1(a),n=e.matches[e.matches.length-1];return Jt(n.route.id,`${a} can only be used on routes that contain a unique "id"`),n.route.id}function g1(){return cp("useRouteId")}function v1(){var s;let a=de.useContext(op),e=p1("useRouteError"),n=cp("useRouteError");return a!==void 0?a:(s=e.errors)==null?void 0:s[n]}function _1(){let{router:a}=h1("useNavigate"),e=cp("useNavigate"),n=de.useRef(!1);return A_(()=>{n.current=!0}),de.useCallback(async(l,c={})=>{Wi(n.current,w_),n.current&&(typeof l=="number"?a.navigate(l):await a.navigate(l,{fromRouteId:e,...c}))},[a,e])}var g0={};function C_(a,e,n){!e&&!g0[a]&&(g0[a]=!0,Wi(!1,n))}de.memo(x1);function x1({routes:a,future:e,state:n}){return R_(a,void 0,n,e)}function Dn(a){Jt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function y1({basename:a="/",children:e=null,location:n,navigationType:s="POP",navigator:l,static:c=!1}){Jt(!Sl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=a.replace(/^\/*/,"/"),d=de.useMemo(()=>({basename:f,navigator:l,static:c,future:{}}),[f,l,c]);typeof n=="string"&&(n=eo(n));let{pathname:p="/",search:m="",hash:g="",state:_=null,key:x="default"}=n,b=de.useMemo(()=>{let M=wa(p,f);return M==null?null:{location:{pathname:M,search:m,hash:g,state:_,key:x},navigationType:s}},[f,p,m,g,_,x,s]);return Wi(b!=null,`<Router basename="${f}"> is not able to match the URL "${p}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:de.createElement(Yi.Provider,{value:d},de.createElement(yl.Provider,{children:e,value:b}))}function S1({children:a,location:e}){return o1(Mh(a),e)}function Mh(a,e=[]){let n=[];return de.Children.forEach(a,(s,l)=>{if(!de.isValidElement(s))return;let c=[...e,l];if(s.type===de.Fragment){n.push.apply(n,Mh(s.props.children,c));return}Jt(s.type===Dn,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Jt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Mh(s.props.children,c)),n.push(f)}),n}var ou="get",lu="application/x-www-form-urlencoded";function Ru(a){return a!=null&&typeof a.tagName=="string"}function b1(a){return Ru(a)&&a.tagName.toLowerCase()==="button"}function E1(a){return Ru(a)&&a.tagName.toLowerCase()==="form"}function M1(a){return Ru(a)&&a.tagName.toLowerCase()==="input"}function T1(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function w1(a,e){return a.button===0&&(!e||e==="_self")&&!T1(a)}var zc=null;function A1(){if(zc===null)try{new FormData(document.createElement("form"),0),zc=!1}catch{zc=!0}return zc}var R1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Vd(a){return a!=null&&!R1.has(a)?(Wi(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${lu}"`),null):a}function C1(a,e){let n,s,l,c,f;if(E1(a)){let d=a.getAttribute("action");s=d?wa(d,e):null,n=a.getAttribute("method")||ou,l=Vd(a.getAttribute("enctype"))||lu,c=new FormData(a)}else if(b1(a)||M1(a)&&(a.type==="submit"||a.type==="image")){let d=a.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=a.getAttribute("formaction")||d.getAttribute("action");if(s=p?wa(p,e):null,n=a.getAttribute("formmethod")||d.getAttribute("method")||ou,l=Vd(a.getAttribute("formenctype"))||Vd(d.getAttribute("enctype"))||lu,c=new FormData(d,a),!A1()){let{name:m,type:g,value:_}=a;if(g==="image"){let x=m?`${m}.`:"";c.append(`${x}x`,"0"),c.append(`${x}y`,"0")}else m&&c.append(m,_)}}else{if(Ru(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=ou,s=null,l=lu,f=a}return c&&l==="text/plain"&&(f=c,c=void 0),{action:s,method:n.toLowerCase(),encType:l,formData:c,body:f}}function up(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}async function D1(a,e){if(a.id in e)return e[a.id];try{let n=await import(a.module);return e[a.id]=n,n}catch(n){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function U1(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function N1(a,e,n){let s=await Promise.all(a.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await D1(c,n);return f.links?f.links():[]}return[]}));return B1(s.flat(1).filter(U1).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function v0(a,e,n,s,l,c){let f=(p,m)=>n[m]?p.route.id!==n[m].route.id:!0,d=(p,m)=>{var g;return n[m].pathname!==p.pathname||((g=n[m].route.path)==null?void 0:g.endsWith("*"))&&n[m].params["*"]!==p.params["*"]};return c==="assets"?e.filter((p,m)=>f(p,m)||d(p,m)):c==="data"?e.filter((p,m)=>{var _;let g=s.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(f(p,m)||d(p,m))return!0;if(p.route.shouldRevalidate){let x=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((_=n[0])==null?void 0:_.params)||{},nextUrl:new URL(a,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function L1(a,e,{includeHydrateFallback:n}={}){return P1(a.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),n&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function P1(a){return[...new Set(a)]}function O1(a){let e={},n=Object.keys(a).sort();for(let s of n)e[s]=a[s];return e}function B1(a,e){let n=new Set;return new Set(e),a.reduce((s,l)=>{let c=JSON.stringify(O1(l));return n.has(c)||(n.add(c),s.push({key:c,link:l})),s},[])}var I1=new Set([100,101,204,205]);function z1(a,e){let n=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return n.pathname==="/"?n.pathname="_root.data":e&&wa(n.pathname,e)==="/"?n.pathname=`${e.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function D_(){let a=de.useContext(to);return up(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function F1(){let a=de.useContext(Au);return up(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var fp=de.createContext(void 0);fp.displayName="FrameworkContext";function U_(){let a=de.useContext(fp);return up(a,"You must render this element inside a <HydratedRouter> element"),a}function H1(a,e){let n=de.useContext(fp),[s,l]=de.useState(!1),[c,f]=de.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:m,onMouseLeave:g,onTouchStart:_}=e,x=de.useRef(null);de.useEffect(()=>{if(a==="render"&&f(!0),a==="viewport"){let A=v=>{v.forEach(L=>{f(L.isIntersecting)})},S=new IntersectionObserver(A,{threshold:.5});return x.current&&S.observe(x.current),()=>{S.disconnect()}}},[a]),de.useEffect(()=>{if(s){let A=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(A)}}},[s]);let b=()=>{l(!0)},M=()=>{l(!1),f(!1)};return n?a!=="intent"?[c,x,{}]:[c,x,{onFocus:il(d,b),onBlur:il(p,M),onMouseEnter:il(m,b),onMouseLeave:il(g,M),onTouchStart:il(_,b)}]:[!1,x,{}]}function il(a,e){return n=>{a&&a(n),n.defaultPrevented||e(n)}}function G1({page:a,...e}){let{router:n}=D_(),s=de.useMemo(()=>x_(n.routes,a,n.basename),[n.routes,a,n.basename]);return s?de.createElement(k1,{page:a,matches:s,...e}):null}function V1(a){let{manifest:e,routeModules:n}=U_(),[s,l]=de.useState([]);return de.useEffect(()=>{let c=!1;return N1(a,e,n).then(f=>{c||l(f)}),()=>{c=!0}},[a,e,n]),s}function k1({page:a,matches:e,...n}){let s=Ca(),{manifest:l,routeModules:c}=U_(),{basename:f}=D_(),{loaderData:d,matches:p}=F1(),m=de.useMemo(()=>v0(a,e,p,l,s,"data"),[a,e,p,l,s]),g=de.useMemo(()=>v0(a,e,p,l,s,"assets"),[a,e,p,l,s]),_=de.useMemo(()=>{if(a===s.pathname+s.search+s.hash)return[];let M=new Set,A=!1;if(e.forEach(v=>{var D;let L=l.routes[v.route.id];!L||!L.hasLoader||(!m.some(U=>U.route.id===v.route.id)&&v.route.id in d&&((D=c[v.route.id])!=null&&D.shouldRevalidate)||L.hasClientLoader?A=!0:M.add(v.route.id))}),M.size===0)return[];let S=z1(a,f);return A&&M.size>0&&S.searchParams.set("_routes",e.filter(v=>M.has(v.route.id)).map(v=>v.route.id).join(",")),[S.pathname+S.search]},[f,d,s,l,m,e,a,c]),x=de.useMemo(()=>L1(g,l),[g,l]),b=V1(g);return de.createElement(de.Fragment,null,_.map(M=>de.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...n})),x.map(M=>de.createElement("link",{key:M,rel:"modulepreload",href:M,...n})),b.map(({key:M,link:A})=>de.createElement("link",{key:M,...A})))}function j1(...a){return e=>{a.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var N_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{N_&&(window.__reactRouterVersion="7.5.3")}catch{}function X1({basename:a,children:e,window:n}){let s=de.useRef();s.current==null&&(s.current=US({window:n,v5Compat:!0}));let l=s.current,[c,f]=de.useState({action:l.action,location:l.location}),d=de.useCallback(p=>{de.startTransition(()=>f(p))},[f]);return de.useLayoutEffect(()=>l.listen(d),[l,d]),de.createElement(y1,{basename:a,children:e,location:c.location,navigationType:c.action,navigator:l})}var L_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Kr=de.forwardRef(function({onClick:e,discover:n="render",prefetch:s="none",relative:l,reloadDocument:c,replace:f,state:d,target:p,to:m,preventScrollReset:g,viewTransition:_,...x},b){let{basename:M}=de.useContext(Yi),A=typeof m=="string"&&L_.test(m),S,v=!1;if(typeof m=="string"&&A&&(S=m,N_))try{let N=new URL(window.location.href),C=m.startsWith("//")?new URL(N.protocol+m):new URL(m),k=wa(C.pathname,M);C.origin===N.origin&&k!=null?m=k+C.search+C.hash:v=!0}catch{Wi(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=i1(m,{relative:l}),[D,U,F]=H1(s,x),G=Z1(m,{replace:f,state:d,target:p,preventScrollReset:g,relative:l,viewTransition:_});function z(N){e&&e(N),N.defaultPrevented||G(N)}let W=de.createElement("a",{...x,...F,href:S||L,onClick:v||c?e:z,ref:j1(b,U),target:p,"data-discover":!A&&n==="render"?"true":void 0});return D&&!A?de.createElement(de.Fragment,null,W,de.createElement(G1,{page:L})):W});Kr.displayName="Link";var W1=de.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:s="",end:l=!1,style:c,to:f,viewTransition:d,children:p,...m},g){let _=bl(f,{relative:m.relative}),x=Ca(),b=de.useContext(Au),{navigator:M,basename:A}=de.useContext(Yi),S=b!=null&&eb(_)&&d===!0,v=M.encodeLocation?M.encodeLocation(_).pathname:_.pathname,L=x.pathname,D=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;n||(L=L.toLowerCase(),D=D?D.toLowerCase():null,v=v.toLowerCase()),D&&A&&(D=wa(D,A)||D);const U=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let F=L===v||!l&&L.startsWith(v)&&L.charAt(U)==="/",G=D!=null&&(D===v||!l&&D.startsWith(v)&&D.charAt(v.length)==="/"),z={isActive:F,isPending:G,isTransitioning:S},W=F?e:void 0,N;typeof s=="function"?N=s(z):N=[s,F?"active":null,G?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let C=typeof c=="function"?c(z):c;return de.createElement(Kr,{...m,"aria-current":W,className:N,ref:g,style:C,to:f,viewTransition:d},typeof p=="function"?p(z):p)});W1.displayName="NavLink";var q1=de.forwardRef(({discover:a="render",fetcherKey:e,navigate:n,reloadDocument:s,replace:l,state:c,method:f=ou,action:d,onSubmit:p,relative:m,preventScrollReset:g,viewTransition:_,...x},b)=>{let M=$1(),A=J1(d,{relative:m}),S=f.toLowerCase()==="get"?"get":"post",v=typeof d=="string"&&L_.test(d),L=D=>{if(p&&p(D),D.defaultPrevented)return;D.preventDefault();let U=D.nativeEvent.submitter,F=(U==null?void 0:U.getAttribute("formmethod"))||f;M(U||D.currentTarget,{fetcherKey:e,method:F,navigate:n,replace:l,state:c,relative:m,preventScrollReset:g,viewTransition:_})};return de.createElement("form",{ref:b,method:S,action:A,onSubmit:s?p:L,...x,"data-discover":!v&&a==="render"?"true":void 0})});q1.displayName="Form";function Y1(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function P_(a){let e=de.useContext(to);return Jt(e,Y1(a)),e}function Z1(a,{target:e,replace:n,state:s,preventScrollReset:l,relative:c,viewTransition:f}={}){let d=a1(),p=Ca(),m=bl(a,{relative:c});return de.useCallback(g=>{if(w1(g,e)){g.preventDefault();let _=n!==void 0?n:hl(p)===hl(m);d(a,{replace:_,state:s,preventScrollReset:l,relative:c,viewTransition:f})}},[p,d,m,n,s,e,a,l,c,f])}var K1=0,Q1=()=>`__${String(++K1)}__`;function $1(){let{router:a}=P_("useSubmit"),{basename:e}=de.useContext(Yi),n=g1();return de.useCallback(async(s,l={})=>{let{action:c,method:f,encType:d,formData:p,body:m}=C1(s,e);if(l.navigate===!1){let g=l.fetcherKey||Q1();await a.fetch(g,n,l.action||c,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||d,flushSync:l.flushSync})}else await a.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||d,replace:l.replace,state:l.state,fromRouteId:n,flushSync:l.flushSync,viewTransition:l.viewTransition})},[a,e,n])}function J1(a,{relative:e}={}){let{basename:n}=de.useContext(Yi),s=de.useContext(Zi);Jt(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...bl(a||".",{relative:e})},f=Ca();if(a==null){c.search=f.search;let d=new URLSearchParams(c.search),p=d.getAll("index");if(p.some(g=>g==="")){d.delete("index"),p.filter(_=>_).forEach(_=>d.append("index",_));let g=d.toString();c.search=g?`?${g}`:""}}return(!a||a===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(c.pathname=c.pathname==="/"?n:Ea([n,c.pathname])),hl(c)}function eb(a,e={}){let n=de.useContext(T_);Jt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=P_("useViewTransitionState"),l=bl(a,{relative:e.relative});if(!n.isTransitioning)return!1;let c=wa(n.currentLocation.pathname,s)||n.currentLocation.pathname,f=wa(n.nextLocation.pathname,s)||n.nextLocation.pathname;return vu(l.pathname,f)!=null||vu(l.pathname,c)!=null}new TextEncoder;[...I1];/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const El="176",tb=0,_0=1,nb=2,O_=1,ib=2,ya=3,Aa=0,Mn=1,ui=2,Xn=0,Xs=1,x0=2,y0=3,S0=4,ab=5,Xr=100,rb=101,sb=102,ob=103,lb=104,cb=200,ub=201,fb=202,db=203,Th=204,wh=205,hb=206,pb=207,mb=208,gb=209,vb=210,_b=211,xb=212,yb=213,Sb=214,_u=0,xu=1,pl=2,Zr=3,qs=4,yu=5,Su=6,ml=7,B_=0,bb=1,Eb=2,Ma=0,Mb=1,Tb=2,wb=3,Ab=4,Rb=5,Cb=6,Db=7,I_=300,Ys=301,Zs=302,Ah=303,Rh=304,Cu=306,Ch=1e3,qr=1001,Dh=1002,hi=1003,Ub=1004,Fc=1005,Jn=1006,kd=1007,Yr=1008,Nn=1009,z_=1010,F_=1011,gl=1012,dp=1013,mr=1014,Sa=1015,Ml=1016,hp=1017,pp=1018,Ks=1020,H_=35902,G_=1021,V_=1022,Pi=1023,vl=1026,Qs=1027,k_=1028,mp=1029,j_=1030,gp=1031,vp=1033,cu=33776,uu=33777,fu=33778,du=33779,Uh=35840,Nh=35841,Lh=35842,Ph=35843,Oh=36196,Bh=37492,Ih=37496,zh=37808,Fh=37809,Hh=37810,Gh=37811,Vh=37812,kh=37813,jh=37814,Xh=37815,Wh=37816,qh=37817,Yh=37818,Zh=37819,Kh=37820,Qh=37821,hu=36492,$h=36494,Jh=36495,X_=36283,ep=36284,tp=36285,np=36286,gr=3200,_p=3201,Nb=0,Lb=1,ki="",Lt="srgb",vr="srgb-linear",bu="linear",Gt="srgb",Rs=7680,b0=519,Pb=512,Ob=513,Bb=514,W_=515,Ib=516,zb=517,Fb=518,Hb=519,E0=35044,M0="300 es",ba=2e3,Eu=2001;class Da{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(n)===-1&&s[e].push(n)}hasEventListener(e,n){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(n)!==-1}removeEventListener(e,n){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(n);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const s=n[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jd=Math.PI/180,ip=180/Math.PI;function Tl(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(zn[a&255]+zn[a>>8&255]+zn[a>>16&255]+zn[a>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[n&63|128]+zn[n>>8&255]+"-"+zn[n>>16&255]+zn[n>>24&255]+zn[s&255]+zn[s>>8&255]+zn[s>>16&255]+zn[s>>24&255]).toLowerCase()}function St(a,e,n){return Math.max(e,Math.min(n,a))}function Gb(a,e){return(a%e+e)%e}function Xd(a,e,n){return(1-n)*a+n*e}function al(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function $n(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class rt{constructor(e=0,n=0){rt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,s=this.y,l=e.elements;return this.x=l[0]*n+l[3]*s+l[6],this.y=l[1]*n+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(e)/n;return Math.acos(St(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y;return n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const s=Math.cos(n),l=Math.sin(n),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,n,s,l,c,f,d,p,m){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,s,l,c,f,d,p,m)}set(e,n,s,l,c,f,d,p,m){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=n,g[4]=c,g[5]=p,g[6]=s,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(e,n,s){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,l=n.elements,c=this.elements,f=s[0],d=s[3],p=s[6],m=s[1],g=s[4],_=s[7],x=s[2],b=s[5],M=s[8],A=l[0],S=l[3],v=l[6],L=l[1],D=l[4],U=l[7],F=l[2],G=l[5],z=l[8];return c[0]=f*A+d*L+p*F,c[3]=f*S+d*D+p*G,c[6]=f*v+d*U+p*z,c[1]=m*A+g*L+_*F,c[4]=m*S+g*D+_*G,c[7]=m*v+g*U+_*z,c[2]=x*A+b*L+M*F,c[5]=x*S+b*D+M*G,c[8]=x*v+b*U+M*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[1],l=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],g=e[8];return n*f*g-n*d*m-s*c*g+s*d*p+l*c*m-l*f*p}invert(){const e=this.elements,n=e[0],s=e[1],l=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],g=e[8],_=g*f-d*m,x=d*p-g*c,b=m*c-f*p,M=n*_+s*x+l*b;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=_*A,e[1]=(l*m-g*s)*A,e[2]=(d*s-l*f)*A,e[3]=x*A,e[4]=(g*n-l*p)*A,e[5]=(l*c-d*n)*A,e[6]=b*A,e[7]=(s*p-m*n)*A,e[8]=(f*n-s*c)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,s,l,c,f,d){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*f+m*d)+f+e,-l*m,l*p,-l*(-m*f+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Wd.makeScale(e,n)),this}rotate(e){return this.premultiply(Wd.makeRotation(-e)),this}translate(e,n){return this.premultiply(Wd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,s=e.elements;for(let l=0;l<9;l++)if(n[l]!==s[l])return!1;return!0}fromArray(e,n=0){for(let s=0;s<9;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wd=new ot;function q_(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Mu(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Vb(){const a=Mu("canvas");return a.style.display="block",a}const T0={};function pu(a){a in T0||(T0[a]=!0,console.warn(a))}function kb(a,e,n){return new Promise(function(s,l){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:l();break;case a.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:s()}}setTimeout(c,n)})}function jb(a){const e=a.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Xb(a){const e=a.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const w0=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),A0=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wb(){const a={enabled:!0,workingColorSpace:vr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Gt&&(l.r=Ta(l.r),l.g=Ta(l.g),l.b=Ta(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Gt&&(l.r=Ws(l.r),l.g=Ws(l.g),l.b=Ws(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ki?bu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return a.define({[vr]:{primaries:e,whitePoint:s,transfer:bu,toXYZ:w0,fromXYZ:A0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:e,whitePoint:s,transfer:Gt,toXYZ:w0,fromXYZ:A0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),a}const Rt=Wb();function Ta(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ws(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Cs;class qb{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Cs===void 0&&(Cs=Mu("canvas")),Cs.width=e.width,Cs.height=e.height;const l=Cs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Cs}return s.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Mu("canvas");n.width=e.width,n.height=e.height;const s=n.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ta(c[f]/255)*255;return s.putImageData(l,0,0),n}else if(e.data){const n=e.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(Ta(n[s]/255)*255):n[s]=Ta(n[s]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yb=0;class xp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yb++}),this.uuid=Tl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(qd(l[f].image)):c.push(qd(l[f]))}else c=qd(l);s.url=c}return n||(e.images[this.uuid]=s),s}}function qd(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?qb.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zb=0;class Hn extends Da{constructor(e=Hn.DEFAULT_IMAGE,n=Hn.DEFAULT_MAPPING,s=qr,l=qr,c=Jn,f=Yr,d=Pi,p=Nn,m=Hn.DEFAULT_ANISOTROPY,g=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zb++}),this.uuid=Tl(),this.name="",this.source=new xp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==I_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ch:e.x=e.x-Math.floor(e.x);break;case qr:e.x=e.x<0?0:1;break;case Dh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ch:e.y=e.y-Math.floor(e.y);break;case qr:e.y=e.y<0?0:1;break;case Dh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=I_;Hn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,n=0,s=0,l=1){$t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,s,l){return this.x=e,this.y=n,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*n+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*n+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*n+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*n+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,s,l,c;const p=e.elements,m=p[0],g=p[4],_=p[8],x=p[1],b=p[5],M=p[9],A=p[2],S=p[6],v=p[10];if(Math.abs(g-x)<.01&&Math.abs(_-A)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+A)<.1&&Math.abs(M+S)<.1&&Math.abs(m+b+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(m+1)/2,U=(b+1)/2,F=(v+1)/2,G=(g+x)/4,z=(_+A)/4,W=(M+S)/4;return D>U&&D>F?D<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(D),l=G/s,c=z/s):U>F?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=G/l,c=W/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=z/c,l=W/c),this.set(s,l,c,n),this}let L=Math.sqrt((S-M)*(S-M)+(_-A)*(_-A)+(x-g)*(x-g));return Math.abs(L)<.001&&(L=1),this.x=(S-M)/L,this.y=(_-A)/L,this.z=(x-g)/L,this.w=Math.acos((m+b+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this.w=St(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this.w=St(this.w,e,n),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this.w=e.w+(n.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kb extends Da{constructor(e=1,n=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=s.depth?s.depth:1,this.scissor=new $t(0,0,e,n),this.scissorTest=!1,this.viewport=new $t(0,0,e,n);const l={width:e,height:n,depth:this.depth};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},s);const c=new Hn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);c.flipY=!1,c.generateMipmaps=s.generateMipmaps,c.internalFormat=s.internalFormat,this.textures=[];const f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,s=1){if(this.width!==e||this.height!==n||this.depth!==s){this.width=e,this.height=n,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=n,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},e.textures[n].image);this.textures[n].source=new xp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ln extends Kb{constructor(e=1,n=1,s={}){super(e,n,s),this.isWebGLRenderTarget=!0}}class Y_ extends Hn{constructor(e=null,n=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:s,depth:l},this.magFilter=hi,this.minFilter=hi,this.wrapR=qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qb extends Hn{constructor(e=null,n=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:s,depth:l},this.magFilter=hi,this.minFilter=hi,this.wrapR=qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wl{constructor(e=0,n=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=s,this._w=l}static slerpFlat(e,n,s,l,c,f,d){let p=s[l+0],m=s[l+1],g=s[l+2],_=s[l+3];const x=c[f+0],b=c[f+1],M=c[f+2],A=c[f+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=g,e[n+3]=_;return}if(d===1){e[n+0]=x,e[n+1]=b,e[n+2]=M,e[n+3]=A;return}if(_!==A||p!==x||m!==b||g!==M){let S=1-d;const v=p*x+m*b+g*M+_*A,L=v>=0?1:-1,D=1-v*v;if(D>Number.EPSILON){const F=Math.sqrt(D),G=Math.atan2(F,v*L);S=Math.sin(S*G)/F,d=Math.sin(d*G)/F}const U=d*L;if(p=p*S+x*U,m=m*S+b*U,g=g*S+M*U,_=_*S+A*U,S===1-d){const F=1/Math.sqrt(p*p+m*m+g*g+_*_);p*=F,m*=F,g*=F,_*=F}}e[n]=p,e[n+1]=m,e[n+2]=g,e[n+3]=_}static multiplyQuaternionsFlat(e,n,s,l,c,f){const d=s[l],p=s[l+1],m=s[l+2],g=s[l+3],_=c[f],x=c[f+1],b=c[f+2],M=c[f+3];return e[n]=d*M+g*_+p*b-m*x,e[n+1]=p*M+g*x+m*_-d*b,e[n+2]=m*M+g*b+d*x-p*_,e[n+3]=g*M-d*_-p*x-m*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,s,l){return this._x=e,this._y=n,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const s=e._x,l=e._y,c=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(s/2),g=d(l/2),_=d(c/2),x=p(s/2),b=p(l/2),M=p(c/2);switch(f){case"XYZ":this._x=x*g*_+m*b*M,this._y=m*b*_-x*g*M,this._z=m*g*M+x*b*_,this._w=m*g*_-x*b*M;break;case"YXZ":this._x=x*g*_+m*b*M,this._y=m*b*_-x*g*M,this._z=m*g*M-x*b*_,this._w=m*g*_+x*b*M;break;case"ZXY":this._x=x*g*_-m*b*M,this._y=m*b*_+x*g*M,this._z=m*g*M+x*b*_,this._w=m*g*_-x*b*M;break;case"ZYX":this._x=x*g*_-m*b*M,this._y=m*b*_+x*g*M,this._z=m*g*M-x*b*_,this._w=m*g*_+x*b*M;break;case"YZX":this._x=x*g*_+m*b*M,this._y=m*b*_+x*g*M,this._z=m*g*M-x*b*_,this._w=m*g*_-x*b*M;break;case"XZY":this._x=x*g*_-m*b*M,this._y=m*b*_-x*g*M,this._z=m*g*M+x*b*_,this._w=m*g*_+x*b*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const s=n/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,s=n[0],l=n[4],c=n[8],f=n[1],d=n[5],p=n[9],m=n[2],g=n[6],_=n[10],x=s+d+_;if(x>0){const b=.5/Math.sqrt(x+1);this._w=.25/b,this._x=(g-p)*b,this._y=(c-m)*b,this._z=(f-l)*b}else if(s>d&&s>_){const b=2*Math.sqrt(1+s-d-_);this._w=(g-p)/b,this._x=.25*b,this._y=(l+f)/b,this._z=(c+m)/b}else if(d>_){const b=2*Math.sqrt(1+d-s-_);this._w=(c-m)/b,this._x=(l+f)/b,this._y=.25*b,this._z=(p+g)/b}else{const b=2*Math.sqrt(1+_-s-d);this._w=(f-l)/b,this._x=(c+m)/b,this._y=(p+g)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let s=e.dot(n)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,n){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,n/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const s=e._x,l=e._y,c=e._z,f=e._w,d=n._x,p=n._y,m=n._z,g=n._w;return this._x=s*g+f*d+l*m-c*p,this._y=l*g+f*p+c*d-s*m,this._z=c*g+f*m+s*p-l*d,this._w=f*g-s*d-l*p-c*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const s=this._x,l=this._y,c=this._z,f=this._w;let d=f*e._w+s*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=s,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const b=1-n;return this._w=b*f+n*this._w,this._x=b*s+n*this._x,this._y=b*l+n*this._y,this._z=b*c+n*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),_=Math.sin((1-n)*g)/m,x=Math.sin(n*g)/m;return this._w=f*_+this._w*x,this._x=s*_+this._x*x,this._y=l*_+this._y*x,this._z=c*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,s){return this.copy(e).slerp(n,s)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,n=0,s=0){se.prototype.isVector3=!0,this.x=e,this.y=n,this.z=s}set(e,n,s){return s===void 0&&(s=this.z),this.x=e,this.y=n,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(R0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(R0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*n+c[3]*s+c[6]*l,this.y=c[1]*n+c[4]*s+c[7]*l,this.z=c[2]*n+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*n+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*n+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*n+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*n+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const n=this.x,s=this.y,l=this.z,c=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*l-d*s),g=2*(d*n-c*l),_=2*(c*s-f*n);return this.x=n+p*m+f*_-d*g,this.y=s+p*g+d*m-c*_,this.z=l+p*_+c*g-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*n+c[4]*s+c[8]*l,this.y=c[1]*n+c[5]*s+c[9]*l,this.z=c[2]*n+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const s=e.x,l=e.y,c=e.z,f=n.x,d=n.y,p=n.z;return this.x=l*p-c*d,this.y=c*f-s*p,this.z=s*d-l*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const s=e.dot(this)/n;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Yd.copy(this).projectOnVector(e),this.sub(Yd)}reflect(e){return this.sub(Yd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(e)/n;return Math.acos(St(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return n*n+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,s){const l=Math.sin(n)*e;return this.x=l*Math.sin(s),this.y=Math.cos(n)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,s){return this.x=e*Math.sin(n),this.y=s,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=s,this.z=l,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(e),this.y=n,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yd=new se,R0=new wl;class Al{constructor(e=new se(1/0,1/0,1/0),n=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,s=e.length;n<s;n+=3)this.expandByPoint(Di.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,s=e.count;n<s;n++)this.expandByPoint(Di.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,s=e.length;n<s;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const s=Di.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,Di):Di.fromBufferAttribute(c,f),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Hc.copy(s.boundingBox)),Hc.applyMatrix4(e.matrixWorld),this.union(Hc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,s;return e.normal.x>0?(n=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),n<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rl),Gc.subVectors(this.max,rl),Ds.subVectors(e.a,rl),Us.subVectors(e.b,rl),Ns.subVectors(e.c,rl),ar.subVectors(Us,Ds),rr.subVectors(Ns,Us),Ir.subVectors(Ds,Ns);let n=[0,-ar.z,ar.y,0,-rr.z,rr.y,0,-Ir.z,Ir.y,ar.z,0,-ar.x,rr.z,0,-rr.x,Ir.z,0,-Ir.x,-ar.y,ar.x,0,-rr.y,rr.x,0,-Ir.y,Ir.x,0];return!Zd(n,Ds,Us,Ns,Gc)||(n=[1,0,0,0,1,0,0,0,1],!Zd(n,Ds,Us,Ns,Gc))?!1:(Vc.crossVectors(ar,rr),n=[Vc.x,Vc.y,Vc.z],Zd(n,Ds,Us,Ns,Gc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ma),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ma=[new se,new se,new se,new se,new se,new se,new se,new se],Di=new se,Hc=new Al,Ds=new se,Us=new se,Ns=new se,ar=new se,rr=new se,Ir=new se,rl=new se,Gc=new se,Vc=new se,zr=new se;function Zd(a,e,n,s,l){for(let c=0,f=a.length-3;c<=f;c+=3){zr.fromArray(a,c);const d=l.x*Math.abs(zr.x)+l.y*Math.abs(zr.y)+l.z*Math.abs(zr.z),p=e.dot(zr),m=n.dot(zr),g=s.dot(zr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const $b=new Al,sl=new se,Kd=new se;class yp{constructor(e=new se,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const s=this.center;n!==void 0?s.copy(n):$b.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const s=this.center.distanceToSquared(e);return n.copy(e),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sl.subVectors(e,this.center);const n=sl.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),l=(s-this.radius)*.5;this.center.addScaledVector(sl,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sl.copy(e.center).add(Kd)),this.expandByPoint(sl.copy(e.center).sub(Kd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ga=new se,Qd=new se,kc=new se,sr=new se,$d=new se,jc=new se,Jd=new se;class Jb{constructor(e=new se,n=new se(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ga)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ga.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ga.copy(this.origin).addScaledVector(this.direction,n),ga.distanceToSquared(e))}distanceSqToSegment(e,n,s,l){Qd.copy(e).add(n).multiplyScalar(.5),kc.copy(n).sub(e).normalize(),sr.copy(this.origin).sub(Qd);const c=e.distanceTo(n)*.5,f=-this.direction.dot(kc),d=sr.dot(this.direction),p=-sr.dot(kc),m=sr.lengthSq(),g=Math.abs(1-f*f);let _,x,b,M;if(g>0)if(_=f*p-d,x=f*d-p,M=c*g,_>=0)if(x>=-M)if(x<=M){const A=1/g;_*=A,x*=A,b=_*(_+f*x+2*d)+x*(f*_+x+2*p)+m}else x=c,_=Math.max(0,-(f*x+d)),b=-_*_+x*(x+2*p)+m;else x=-c,_=Math.max(0,-(f*x+d)),b=-_*_+x*(x+2*p)+m;else x<=-M?(_=Math.max(0,-(-f*c+d)),x=_>0?-c:Math.min(Math.max(-c,-p),c),b=-_*_+x*(x+2*p)+m):x<=M?(_=0,x=Math.min(Math.max(-c,-p),c),b=x*(x+2*p)+m):(_=Math.max(0,-(f*c+d)),x=_>0?c:Math.min(Math.max(-c,-p),c),b=-_*_+x*(x+2*p)+m);else x=f>0?-c:c,_=Math.max(0,-(f*x+d)),b=-_*_+x*(x+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Qd).addScaledVector(kc,x),b}intersectSphere(e,n){ga.subVectors(e.center,this.origin);const s=ga.dot(this.direction),l=ga.dot(ga)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,p=s+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/n;return s>=0?s:null}intersectPlane(e,n){const s=this.distanceToPlane(e);return s===null?null:this.at(s,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let s,l,c,f,d,p;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return m>=0?(s=(e.min.x-x.x)*m,l=(e.max.x-x.x)*m):(s=(e.max.x-x.x)*m,l=(e.min.x-x.x)*m),g>=0?(c=(e.min.y-x.y)*g,f=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,f=(e.min.y-x.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),_>=0?(d=(e.min.z-x.z)*_,p=(e.max.z-x.z)*_):(d=(e.max.z-x.z)*_,p=(e.min.z-x.z)*_),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,n)}intersectsBox(e){return this.intersectBox(e,ga)!==null}intersectTriangle(e,n,s,l,c){$d.subVectors(n,e),jc.subVectors(s,e),Jd.crossVectors($d,jc);let f=this.direction.dot(Jd),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;sr.subVectors(this.origin,e);const p=d*this.direction.dot(jc.crossVectors(sr,jc));if(p<0)return null;const m=d*this.direction.dot($d.cross(sr));if(m<0||p+m>f)return null;const g=-d*sr.dot(Jd);return g<0?null:this.at(g/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fn{constructor(e,n,s,l,c,f,d,p,m,g,_,x,b,M,A,S){fn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,s,l,c,f,d,p,m,g,_,x,b,M,A,S)}set(e,n,s,l,c,f,d,p,m,g,_,x,b,M,A,S){const v=this.elements;return v[0]=e,v[4]=n,v[8]=s,v[12]=l,v[1]=c,v[5]=f,v[9]=d,v[13]=p,v[2]=m,v[6]=g,v[10]=_,v[14]=x,v[3]=b,v[7]=M,v[11]=A,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fn().fromArray(this.elements)}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(e){const n=this.elements,s=e.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,s){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,n,s){return this.set(e.x,n.x,s.x,0,e.y,n.y,s.y,0,e.z,n.z,s.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,s=e.elements,l=1/Ls.setFromMatrixColumn(e,0).length(),c=1/Ls.setFromMatrixColumn(e,1).length(),f=1/Ls.setFromMatrixColumn(e,2).length();return n[0]=s[0]*l,n[1]=s[1]*l,n[2]=s[2]*l,n[3]=0,n[4]=s[4]*c,n[5]=s[5]*c,n[6]=s[6]*c,n[7]=0,n[8]=s[8]*f,n[9]=s[9]*f,n[10]=s[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),d=Math.sin(s),p=Math.cos(l),m=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const x=f*g,b=f*_,M=d*g,A=d*_;n[0]=p*g,n[4]=-p*_,n[8]=m,n[1]=b+M*m,n[5]=x-A*m,n[9]=-d*p,n[2]=A-x*m,n[6]=M+b*m,n[10]=f*p}else if(e.order==="YXZ"){const x=p*g,b=p*_,M=m*g,A=m*_;n[0]=x+A*d,n[4]=M*d-b,n[8]=f*m,n[1]=f*_,n[5]=f*g,n[9]=-d,n[2]=b*d-M,n[6]=A+x*d,n[10]=f*p}else if(e.order==="ZXY"){const x=p*g,b=p*_,M=m*g,A=m*_;n[0]=x-A*d,n[4]=-f*_,n[8]=M+b*d,n[1]=b+M*d,n[5]=f*g,n[9]=A-x*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(e.order==="ZYX"){const x=f*g,b=f*_,M=d*g,A=d*_;n[0]=p*g,n[4]=M*m-b,n[8]=x*m+A,n[1]=p*_,n[5]=A*m+x,n[9]=b*m-M,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(e.order==="YZX"){const x=f*p,b=f*m,M=d*p,A=d*m;n[0]=p*g,n[4]=A-x*_,n[8]=M*_+b,n[1]=_,n[5]=f*g,n[9]=-d*g,n[2]=-m*g,n[6]=b*_+M,n[10]=x-A*_}else if(e.order==="XZY"){const x=f*p,b=f*m,M=d*p,A=d*m;n[0]=p*g,n[4]=-_,n[8]=m*g,n[1]=x*_+A,n[5]=f*g,n[9]=b*_-M,n[2]=M*_-b,n[6]=d*g,n[10]=A*_+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eE,e,tE)}lookAt(e,n,s){const l=this.elements;return li.subVectors(e,n),li.lengthSq()===0&&(li.z=1),li.normalize(),or.crossVectors(s,li),or.lengthSq()===0&&(Math.abs(s.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),or.crossVectors(s,li)),or.normalize(),Xc.crossVectors(li,or),l[0]=or.x,l[4]=Xc.x,l[8]=li.x,l[1]=or.y,l[5]=Xc.y,l[9]=li.y,l[2]=or.z,l[6]=Xc.z,l[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,l=n.elements,c=this.elements,f=s[0],d=s[4],p=s[8],m=s[12],g=s[1],_=s[5],x=s[9],b=s[13],M=s[2],A=s[6],S=s[10],v=s[14],L=s[3],D=s[7],U=s[11],F=s[15],G=l[0],z=l[4],W=l[8],N=l[12],C=l[1],k=l[5],ce=l[9],oe=l[13],xe=l[2],pe=l[6],I=l[10],K=l[14],Y=l[3],Ee=l[7],O=l[11],ee=l[15];return c[0]=f*G+d*C+p*xe+m*Y,c[4]=f*z+d*k+p*pe+m*Ee,c[8]=f*W+d*ce+p*I+m*O,c[12]=f*N+d*oe+p*K+m*ee,c[1]=g*G+_*C+x*xe+b*Y,c[5]=g*z+_*k+x*pe+b*Ee,c[9]=g*W+_*ce+x*I+b*O,c[13]=g*N+_*oe+x*K+b*ee,c[2]=M*G+A*C+S*xe+v*Y,c[6]=M*z+A*k+S*pe+v*Ee,c[10]=M*W+A*ce+S*I+v*O,c[14]=M*N+A*oe+S*K+v*ee,c[3]=L*G+D*C+U*xe+F*Y,c[7]=L*z+D*k+U*pe+F*Ee,c[11]=L*W+D*ce+U*I+F*O,c[15]=L*N+D*oe+U*K+F*ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[4],l=e[8],c=e[12],f=e[1],d=e[5],p=e[9],m=e[13],g=e[2],_=e[6],x=e[10],b=e[14],M=e[3],A=e[7],S=e[11],v=e[15];return M*(+c*p*_-l*m*_-c*d*x+s*m*x+l*d*b-s*p*b)+A*(+n*p*b-n*m*x+c*f*x-l*f*b+l*m*g-c*p*g)+S*(+n*m*_-n*d*b-c*f*_+s*f*b+c*d*g-s*m*g)+v*(-l*d*g-n*p*_+n*d*x+l*f*_-s*f*x+s*p*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=n,l[14]=s),this}invert(){const e=this.elements,n=e[0],s=e[1],l=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],g=e[8],_=e[9],x=e[10],b=e[11],M=e[12],A=e[13],S=e[14],v=e[15],L=_*S*m-A*x*m+A*p*b-d*S*b-_*p*v+d*x*v,D=M*x*m-g*S*m-M*p*b+f*S*b+g*p*v-f*x*v,U=g*A*m-M*_*m+M*d*b-f*A*b-g*d*v+f*_*v,F=M*_*p-g*A*p-M*d*x+f*A*x+g*d*S-f*_*S,G=n*L+s*D+l*U+c*F;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/G;return e[0]=L*z,e[1]=(A*x*c-_*S*c-A*l*b+s*S*b+_*l*v-s*x*v)*z,e[2]=(d*S*c-A*p*c+A*l*m-s*S*m-d*l*v+s*p*v)*z,e[3]=(_*p*c-d*x*c-_*l*m+s*x*m+d*l*b-s*p*b)*z,e[4]=D*z,e[5]=(g*S*c-M*x*c+M*l*b-n*S*b-g*l*v+n*x*v)*z,e[6]=(M*p*c-f*S*c-M*l*m+n*S*m+f*l*v-n*p*v)*z,e[7]=(f*x*c-g*p*c+g*l*m-n*x*m-f*l*b+n*p*b)*z,e[8]=U*z,e[9]=(M*_*c-g*A*c-M*s*b+n*A*b+g*s*v-n*_*v)*z,e[10]=(f*A*c-M*d*c+M*s*m-n*A*m-f*s*v+n*d*v)*z,e[11]=(g*d*c-f*_*c-g*s*m+n*_*m+f*s*b-n*d*b)*z,e[12]=F*z,e[13]=(g*A*l-M*_*l+M*s*x-n*A*x-g*s*S+n*_*S)*z,e[14]=(M*d*l-f*A*l-M*s*p+n*A*p+f*s*S-n*d*S)*z,e[15]=(f*_*l-g*d*l+g*s*p-n*_*p-f*s*x+n*d*x)*z,this}scale(e){const n=this.elements,s=e.x,l=e.y,c=e.z;return n[0]*=s,n[4]*=l,n[8]*=c,n[1]*=s,n[5]*=l,n[9]*=c,n[2]*=s,n[6]*=l,n[10]*=c,n[3]*=s,n[7]*=l,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,s,l))}makeTranslation(e,n,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const s=Math.cos(n),l=Math.sin(n),c=1-s,f=e.x,d=e.y,p=e.z,m=c*f,g=c*d;return this.set(m*f+s,m*d-l*p,m*p+l*d,0,m*d+l*p,g*d+s,g*p-l*f,0,m*p-l*d,g*p+l*f,c*p*p+s,0,0,0,0,1),this}makeScale(e,n,s){return this.set(e,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,n,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,n,l,1,0,0,0,0,1),this}compose(e,n,s){const l=this.elements,c=n._x,f=n._y,d=n._z,p=n._w,m=c+c,g=f+f,_=d+d,x=c*m,b=c*g,M=c*_,A=f*g,S=f*_,v=d*_,L=p*m,D=p*g,U=p*_,F=s.x,G=s.y,z=s.z;return l[0]=(1-(A+v))*F,l[1]=(b+U)*F,l[2]=(M-D)*F,l[3]=0,l[4]=(b-U)*G,l[5]=(1-(x+v))*G,l[6]=(S+L)*G,l[7]=0,l[8]=(M+D)*z,l[9]=(S-L)*z,l[10]=(1-(x+A))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,n,s){const l=this.elements;let c=Ls.set(l[0],l[1],l[2]).length();const f=Ls.set(l[4],l[5],l[6]).length(),d=Ls.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],Ui.copy(this);const m=1/c,g=1/f,_=1/d;return Ui.elements[0]*=m,Ui.elements[1]*=m,Ui.elements[2]*=m,Ui.elements[4]*=g,Ui.elements[5]*=g,Ui.elements[6]*=g,Ui.elements[8]*=_,Ui.elements[9]*=_,Ui.elements[10]*=_,n.setFromRotationMatrix(Ui),s.x=c,s.y=f,s.z=d,this}makePerspective(e,n,s,l,c,f,d=ba){const p=this.elements,m=2*c/(n-e),g=2*c/(s-l),_=(n+e)/(n-e),x=(s+l)/(s-l);let b,M;if(d===ba)b=-(f+c)/(f-c),M=-2*f*c/(f-c);else if(d===Eu)b=-f/(f-c),M=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=M,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,s,l,c,f,d=ba){const p=this.elements,m=1/(n-e),g=1/(s-l),_=1/(f-c),x=(n+e)*m,b=(s+l)*g;let M,A;if(d===ba)M=(f+c)*_,A=-2*_;else if(d===Eu)M=c*_,A=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-b,p[2]=0,p[6]=0,p[10]=A,p[14]=-M,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,s=e.elements;for(let l=0;l<16;l++)if(n[l]!==s[l])return!1;return!0}fromArray(e,n=0){for(let s=0;s<16;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e[n+9]=s[9],e[n+10]=s[10],e[n+11]=s[11],e[n+12]=s[12],e[n+13]=s[13],e[n+14]=s[14],e[n+15]=s[15],e}}const Ls=new se,Ui=new fn,eE=new se(0,0,0),tE=new se(1,1,1),or=new se,Xc=new se,li=new se,C0=new fn,D0=new wl;class Ra{constructor(e=0,n=0,s=0,l=Ra.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,s,l=this._order){return this._x=e,this._y=n,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],d=l[8],p=l[1],m=l[5],g=l[9],_=l[2],x=l[6],b=l[10];switch(n){case"XYZ":this._y=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,b),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,b),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(St(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,b),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-St(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,b),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(St(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,b));break;case"XZY":this._z=Math.asin(-St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,b),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,s){return C0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(C0,n,s)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return D0.setFromEuler(this),this.setFromQuaternion(D0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ra.DEFAULT_ORDER="XYZ";class Z_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nE=0;const U0=new se,Ps=new wl,va=new fn,Wc=new se,ol=new se,iE=new se,aE=new wl,N0=new se(1,0,0),L0=new se(0,1,0),P0=new se(0,0,1),O0={type:"added"},rE={type:"removed"},Os={type:"childadded",child:null},eh={type:"childremoved",child:null};class pi extends Da{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nE++}),this.uuid=Tl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pi.DEFAULT_UP.clone();const e=new se,n=new Ra,s=new wl,l=new se(1,1,1);function c(){s.setFromEuler(n,!1)}function f(){n.setFromQuaternion(s,void 0,!1)}n._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new fn},normalMatrix:{value:new ot}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=pi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Z_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(N0,e)}rotateY(e){return this.rotateOnAxis(L0,e)}rotateZ(e){return this.rotateOnAxis(P0,e)}translateOnAxis(e,n){return U0.copy(e).applyQuaternion(this.quaternion),this.position.add(U0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(N0,e)}translateY(e){return this.translateOnAxis(L0,e)}translateZ(e){return this.translateOnAxis(P0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(va.copy(this.matrixWorld).invert())}lookAt(e,n,s){e.isVector3?Wc.copy(e):Wc.set(e,n,s);const l=this.parent;this.updateWorldMatrix(!0,!1),ol.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?va.lookAt(ol,Wc,this.up):va.lookAt(Wc,ol,this.up),this.quaternion.setFromRotationMatrix(va),l&&(va.extractRotation(l.matrixWorld),Ps.setFromRotationMatrix(va),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(O0),Os.child=e,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(rE),eh.child=e,this.dispatchEvent(eh),eh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),va.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),va.multiply(e.parent.matrixWorld)),e.applyMatrix4(va),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(O0),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,s=[]){this[e]===n&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,n,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ol,e,iE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ol,aE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].updateMatrixWorld(e)}updateWorldMatrix(e,n){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",s={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?{min:d.boundingBox.min.toArray(),max:d.boundingBox.max.toArray()}:void 0,boundingSphere:d.boundingSphere?{radius:d.boundingSphere.radius,center:d.boundingSphere.center.toArray()}:void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const _=p[m];c(e.shapes,_)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(e.animations,p))}}if(n){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),g=f(e.images),_=f(e.shapes),x=f(e.skeletons),b=f(e.animations),M=f(e.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),b.length>0&&(s.animations=b),M.length>0&&(s.nodes=M)}return s.object=l,s;function f(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}pi.DEFAULT_UP=new se(0,1,0);pi.DEFAULT_MATRIX_AUTO_UPDATE=!0;pi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ni=new se,_a=new se,th=new se,xa=new se,Bs=new se,Is=new se,B0=new se,nh=new se,ih=new se,ah=new se,rh=new $t,sh=new $t,oh=new $t;class Li{constructor(e=new se,n=new se,s=new se){this.a=e,this.b=n,this.c=s}static getNormal(e,n,s,l){l.subVectors(s,n),Ni.subVectors(e,n),l.cross(Ni);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,n,s,l,c){Ni.subVectors(l,n),_a.subVectors(s,n),th.subVectors(e,n);const f=Ni.dot(Ni),d=Ni.dot(_a),p=Ni.dot(th),m=_a.dot(_a),g=_a.dot(th),_=f*m-d*d;if(_===0)return c.set(0,0,0),null;const x=1/_,b=(m*p-d*g)*x,M=(f*g-d*p)*x;return c.set(1-b-M,M,b)}static containsPoint(e,n,s,l){return this.getBarycoord(e,n,s,l,xa)===null?!1:xa.x>=0&&xa.y>=0&&xa.x+xa.y<=1}static getInterpolation(e,n,s,l,c,f,d,p){return this.getBarycoord(e,n,s,l,xa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,xa.x),p.addScaledVector(f,xa.y),p.addScaledVector(d,xa.z),p)}static getInterpolatedAttribute(e,n,s,l,c,f){return rh.setScalar(0),sh.setScalar(0),oh.setScalar(0),rh.fromBufferAttribute(e,n),sh.fromBufferAttribute(e,s),oh.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(rh,c.x),f.addScaledVector(sh,c.y),f.addScaledVector(oh,c.z),f}static isFrontFacing(e,n,s,l){return Ni.subVectors(s,n),_a.subVectors(e,n),Ni.cross(_a).dot(l)<0}set(e,n,s){return this.a.copy(e),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(e,n,s,l){return this.a.copy(e[n]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,n,s,l){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),_a.subVectors(this.a,this.b),Ni.cross(_a).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Li.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,s,l,c){return Li.getInterpolation(e,this.a,this.b,this.c,n,s,l,c)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const s=this.a,l=this.b,c=this.c;let f,d;Bs.subVectors(l,s),Is.subVectors(c,s),nh.subVectors(e,s);const p=Bs.dot(nh),m=Is.dot(nh);if(p<=0&&m<=0)return n.copy(s);ih.subVectors(e,l);const g=Bs.dot(ih),_=Is.dot(ih);if(g>=0&&_<=g)return n.copy(l);const x=p*_-g*m;if(x<=0&&p>=0&&g<=0)return f=p/(p-g),n.copy(s).addScaledVector(Bs,f);ah.subVectors(e,c);const b=Bs.dot(ah),M=Is.dot(ah);if(M>=0&&b<=M)return n.copy(c);const A=b*m-p*M;if(A<=0&&m>=0&&M<=0)return d=m/(m-M),n.copy(s).addScaledVector(Is,d);const S=g*M-b*_;if(S<=0&&_-g>=0&&b-M>=0)return B0.subVectors(c,l),d=(_-g)/(_-g+(b-M)),n.copy(l).addScaledVector(B0,d);const v=1/(S+A+x);return f=A*v,d=x*v,n.copy(s).addScaledVector(Bs,f).addScaledVector(Is,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const K_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},qc={h:0,s:0,l:0};function lh(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(e-a)*6*n:n<1/2?e:n<2/3?a+(e-a)*6*(2/3-n):a}class Dt{constructor(e,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,s)}set(e,n,s){if(n===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,n,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,n),this}setRGB(e,n,s,l=Rt.workingColorSpace){return this.r=e,this.g=n,this.b=s,Rt.toWorkingColorSpace(this,l),this}setHSL(e,n,s,l=Rt.workingColorSpace){if(e=Gb(e,1),n=St(n,0,1),s=St(s,0,1),n===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+n):s+n-s*n,f=2*s-c;this.r=lh(f,c,e+1/3),this.g=lh(f,c,e),this.b=lh(f,c,e-1/3)}return Rt.toWorkingColorSpace(this,l),this}setStyle(e,n=Lt){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Lt){const s=K_[e.toLowerCase()];return s!==void 0?this.setHex(s,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ta(e.r),this.g=Ta(e.g),this.b=Ta(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return Rt.fromWorkingColorSpace(Fn.copy(this),e),Math.round(St(Fn.r*255,0,255))*65536+Math.round(St(Fn.g*255,0,255))*256+Math.round(St(Fn.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Rt.workingColorSpace){Rt.fromWorkingColorSpace(Fn.copy(this),n);const s=Fn.r,l=Fn.g,c=Fn.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let p,m;const g=(d+f)/2;if(d===f)p=0,m=0;else{const _=f-d;switch(m=g<=.5?_/(f+d):_/(2-f-d),f){case s:p=(l-c)/_+(l<c?6:0);break;case l:p=(c-s)/_+2;break;case c:p=(s-l)/_+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,n=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(Fn.copy(this),n),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=Lt){Rt.fromWorkingColorSpace(Fn.copy(this),e);const n=Fn.r,s=Fn.g,l=Fn.b;return e!==Lt?`color(${e} ${n.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,n,s){return this.getHSL(lr),this.setHSL(lr.h+e,lr.s+n,lr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,s){return this.r=e.r+(n.r-e.r)*s,this.g=e.g+(n.g-e.g)*s,this.b=e.b+(n.b-e.b)*s,this}lerpHSL(e,n){this.getHSL(lr),e.getHSL(qc);const s=Xd(lr.h,qc.h,n),l=Xd(lr.s,qc.s,n),c=Xd(lr.l,qc.l,n);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*n+c[3]*s+c[6]*l,this.g=c[1]*n+c[4]*s+c[7]*l,this.b=c[2]*n+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Dt;Dt.NAMES=K_;let sE=0;class no extends Da{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sE++}),this.uuid=Tl(),this.name="",this.type="Material",this.blending=Xs,this.side=Aa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Th,this.blendDst=wh,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=Zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=b0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const s=e[n];if(s===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[n]=s}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(s.blending=this.blending),this.side!==Aa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Th&&(s.blendSrc=this.blendSrc),this.blendDst!==wh&&(s.blendDst=this.blendDst),this.blendEquation!==Xr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Zr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==b0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}if(n){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let s=null;if(n!==null){const l=n.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=n[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Du extends no{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ra,this.combine=B_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const un=new se,Yc=new rt;let oE=0;class wi{constructor(e,n,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:oE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=s,this.usage=E0,this.updateRanges=[],this.gpuType=Sa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,s){e*=this.itemSize,s*=n.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=n.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)Yc.fromBufferAttribute(this,n),Yc.applyMatrix3(e),this.setXY(n,Yc.x,Yc.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)un.fromBufferAttribute(this,n),un.applyMatrix3(e),this.setXYZ(n,un.x,un.y,un.z);return this}applyMatrix4(e){for(let n=0,s=this.count;n<s;n++)un.fromBufferAttribute(this,n),un.applyMatrix4(e),this.setXYZ(n,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let n=0,s=this.count;n<s;n++)un.fromBufferAttribute(this,n),un.applyNormalMatrix(e),this.setXYZ(n,un.x,un.y,un.z);return this}transformDirection(e){for(let n=0,s=this.count;n<s;n++)un.fromBufferAttribute(this,n),un.transformDirection(e),this.setXYZ(n,un.x,un.y,un.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let s=this.array[e*this.itemSize+n];return this.normalized&&(s=al(s,this.array)),s}setComponent(e,n,s){return this.normalized&&(s=$n(s,this.array)),this.array[e*this.itemSize+n]=s,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=al(n,this.array)),n}setX(e,n){return this.normalized&&(n=$n(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=al(n,this.array)),n}setY(e,n){return this.normalized&&(n=$n(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=al(n,this.array)),n}setZ(e,n){return this.normalized&&(n=$n(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=al(n,this.array)),n}setW(e,n){return this.normalized&&(n=$n(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,s){return e*=this.itemSize,this.normalized&&(n=$n(n,this.array),s=$n(s,this.array)),this.array[e+0]=n,this.array[e+1]=s,this}setXYZ(e,n,s,l){return e*=this.itemSize,this.normalized&&(n=$n(n,this.array),s=$n(s,this.array),l=$n(l,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,n,s,l,c){return e*=this.itemSize,this.normalized&&(n=$n(n,this.array),s=$n(s,this.array),l=$n(l,this.array),c=$n(c,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==E0&&(e.usage=this.usage),e}}class Q_ extends wi{constructor(e,n,s){super(new Uint16Array(e),n,s)}}class $_ extends wi{constructor(e,n,s){super(new Uint32Array(e),n,s)}}class ji extends wi{constructor(e,n,s){super(new Float32Array(e),n,s)}}let lE=0;const Ei=new fn,ch=new pi,zs=new se,ci=new Al,ll=new Al,En=new se;class Ua extends Da{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lE++}),this.uuid=Tl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(q_(e)?$_:Q_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,s=0){this.groups.push({start:e,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ot().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,n,s){return Ei.makeTranslation(e,n,s),this.applyMatrix4(Ei),this}scale(e,n,s){return Ei.makeScale(e,n,s),this.applyMatrix4(Ei),this}lookAt(e){return ch.lookAt(e),ch.updateMatrix(),this.applyMatrix4(ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ji(s,3))}else{const s=Math.min(e.length,n.count);for(let l=0;l<s;l++){const c=e[l];n.setXYZ(l,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Al);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let s=0,l=n.length;s<l;s++){const c=n[s];ci.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yp);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(e){const s=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),n)for(let c=0,f=n.length;c<f;c++){const d=n[c];ll.setFromBufferAttribute(d),this.morphTargetsRelative?(En.addVectors(ci.min,ll.min),ci.expandByPoint(En),En.addVectors(ci.max,ll.max),ci.expandByPoint(En)):(ci.expandByPoint(ll.min),ci.expandByPoint(ll.max))}ci.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)En.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(En));if(n)for(let c=0,f=n.length;c<f;c++){const d=n[c],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)En.fromBufferAttribute(d,m),p&&(zs.fromBufferAttribute(e,m),En.add(zs)),l=Math.max(l,s.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,l=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let W=0;W<s.count;W++)d[W]=new se,p[W]=new se;const m=new se,g=new se,_=new se,x=new rt,b=new rt,M=new rt,A=new se,S=new se;function v(W,N,C){m.fromBufferAttribute(s,W),g.fromBufferAttribute(s,N),_.fromBufferAttribute(s,C),x.fromBufferAttribute(c,W),b.fromBufferAttribute(c,N),M.fromBufferAttribute(c,C),g.sub(m),_.sub(m),b.sub(x),M.sub(x);const k=1/(b.x*M.y-M.x*b.y);isFinite(k)&&(A.copy(g).multiplyScalar(M.y).addScaledVector(_,-b.y).multiplyScalar(k),S.copy(_).multiplyScalar(b.x).addScaledVector(g,-M.x).multiplyScalar(k),d[W].add(A),d[N].add(A),d[C].add(A),p[W].add(S),p[N].add(S),p[C].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let W=0,N=L.length;W<N;++W){const C=L[W],k=C.start,ce=C.count;for(let oe=k,xe=k+ce;oe<xe;oe+=3)v(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const D=new se,U=new se,F=new se,G=new se;function z(W){F.fromBufferAttribute(l,W),G.copy(F);const N=d[W];D.copy(N),D.sub(F.multiplyScalar(F.dot(N))).normalize(),U.crossVectors(G,N);const k=U.dot(p[W])<0?-1:1;f.setXYZW(W,D.x,D.y,D.z,k)}for(let W=0,N=L.length;W<N;++W){const C=L[W],k=C.start,ce=C.count;for(let oe=k,xe=k+ce;oe<xe;oe+=3)z(e.getX(oe+0)),z(e.getX(oe+1)),z(e.getX(oe+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new wi(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let x=0,b=s.count;x<b;x++)s.setXYZ(x,0,0,0);const l=new se,c=new se,f=new se,d=new se,p=new se,m=new se,g=new se,_=new se;if(e)for(let x=0,b=e.count;x<b;x+=3){const M=e.getX(x+0),A=e.getX(x+1),S=e.getX(x+2);l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,A),f.fromBufferAttribute(n,S),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(s,M),p.fromBufferAttribute(s,A),m.fromBufferAttribute(s,S),d.add(g),p.add(g),m.add(g),s.setXYZ(M,d.x,d.y,d.z),s.setXYZ(A,p.x,p.y,p.z),s.setXYZ(S,m.x,m.y,m.z)}else for(let x=0,b=n.count;x<b;x+=3)l.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,s=e.count;n<s;n++)En.fromBufferAttribute(e,n),En.normalize(),e.setXYZ(n,En.x,En.y,En.z)}toNonIndexed(){function e(d,p){const m=d.array,g=d.itemSize,_=d.normalized,x=new m.constructor(p.length*g);let b=0,M=0;for(let A=0,S=p.length;A<S;A++){d.isInterleavedBufferAttribute?b=p[A]*d.data.stride+d.offset:b=p[A]*g;for(let v=0;v<g;v++)x[M++]=m[b++]}return new wi(x,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ua,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=e(p,s);n.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let g=0,_=m.length;g<_;g++){const x=m[g],b=e(x,s);p.push(b)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let _=0,x=m.length;_<x;_++){const b=m[_];g.push(b.toJSON(e.data))}g.length>0&&(l[p]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(n))}const c=e.morphAttributes;for(const m in c){const g=[],_=c[m];for(let x=0,b=_.length;x<b;x++)g.push(_[x].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,g=f.length;m<g;m++){const _=f[m];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const I0=new fn,Fr=new Jb,Zc=new yp,z0=new se,Kc=new se,Qc=new se,$c=new se,uh=new se,Jc=new se,F0=new se,eu=new se;class fi extends pi{constructor(e=new Ua,n=new Du){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const l=n[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;n.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){Jc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=d[p],_=c[p];g!==0&&(uh.fromBufferAttribute(_,e),f?Jc.addScaledVector(uh,g):Jc.addScaledVector(uh.sub(n),g))}n.add(Jc)}return n}raycast(e,n){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Zc.copy(s.boundingSphere),Zc.applyMatrix4(c),Fr.copy(e.ray).recast(e.near),!(Zc.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(Zc,z0)===null||Fr.origin.distanceToSquared(z0)>(e.far-e.near)**2))&&(I0.copy(c).invert(),Fr.copy(e.ray).applyMatrix4(I0),!(s.boundingBox!==null&&Fr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,n,Fr)))}_computeIntersections(e,n,s){let l;const c=this.geometry,f=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,b=c.drawRange;if(d!==null)if(Array.isArray(f))for(let M=0,A=x.length;M<A;M++){const S=x[M],v=f[S.materialIndex],L=Math.max(S.start,b.start),D=Math.min(d.count,Math.min(S.start+S.count,b.start+b.count));for(let U=L,F=D;U<F;U+=3){const G=d.getX(U),z=d.getX(U+1),W=d.getX(U+2);l=tu(this,v,e,s,m,g,_,G,z,W),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,n.push(l))}}else{const M=Math.max(0,b.start),A=Math.min(d.count,b.start+b.count);for(let S=M,v=A;S<v;S+=3){const L=d.getX(S),D=d.getX(S+1),U=d.getX(S+2);l=tu(this,f,e,s,m,g,_,L,D,U),l&&(l.faceIndex=Math.floor(S/3),n.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let M=0,A=x.length;M<A;M++){const S=x[M],v=f[S.materialIndex],L=Math.max(S.start,b.start),D=Math.min(p.count,Math.min(S.start+S.count,b.start+b.count));for(let U=L,F=D;U<F;U+=3){const G=U,z=U+1,W=U+2;l=tu(this,v,e,s,m,g,_,G,z,W),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,n.push(l))}}else{const M=Math.max(0,b.start),A=Math.min(p.count,b.start+b.count);for(let S=M,v=A;S<v;S+=3){const L=S,D=S+1,U=S+2;l=tu(this,f,e,s,m,g,_,L,D,U),l&&(l.faceIndex=Math.floor(S/3),n.push(l))}}}}function cE(a,e,n,s,l,c,f,d){let p;if(e.side===Mn?p=s.intersectTriangle(f,c,l,!0,d):p=s.intersectTriangle(l,c,f,e.side===Aa,d),p===null)return null;eu.copy(d),eu.applyMatrix4(a.matrixWorld);const m=n.ray.origin.distanceTo(eu);return m<n.near||m>n.far?null:{distance:m,point:eu.clone(),object:a}}function tu(a,e,n,s,l,c,f,d,p,m){a.getVertexPosition(d,Kc),a.getVertexPosition(p,Qc),a.getVertexPosition(m,$c);const g=cE(a,e,n,s,Kc,Qc,$c,F0);if(g){const _=new se;Li.getBarycoord(F0,Kc,Qc,$c,_),l&&(g.uv=Li.getInterpolatedAttribute(l,d,p,m,_,new rt)),c&&(g.uv1=Li.getInterpolatedAttribute(c,d,p,m,_,new rt)),f&&(g.normal=Li.getInterpolatedAttribute(f,d,p,m,_,new se),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new se,materialIndex:0};Li.getNormal(Kc,Qc,$c,x.normal),g.face=x,g.barycoord=_}return g}class io extends Ua{constructor(e=1,n=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],g=[],_=[];let x=0,b=0;M("z","y","x",-1,-1,s,n,e,f,c,0),M("z","y","x",1,-1,s,n,-e,f,c,1),M("x","z","y",1,1,e,s,n,l,f,2),M("x","z","y",1,-1,e,s,-n,l,f,3),M("x","y","z",1,-1,e,n,s,l,c,4),M("x","y","z",-1,-1,e,n,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new ji(m,3)),this.setAttribute("normal",new ji(g,3)),this.setAttribute("uv",new ji(_,2));function M(A,S,v,L,D,U,F,G,z,W,N){const C=U/z,k=F/W,ce=U/2,oe=F/2,xe=G/2,pe=z+1,I=W+1;let K=0,Y=0;const Ee=new se;for(let O=0;O<I;O++){const ee=O*k-oe;for(let ye=0;ye<pe;ye++){const be=ye*C-ce;Ee[A]=be*L,Ee[S]=ee*D,Ee[v]=xe,m.push(Ee.x,Ee.y,Ee.z),Ee[A]=0,Ee[S]=0,Ee[v]=G>0?1:-1,g.push(Ee.x,Ee.y,Ee.z),_.push(ye/z),_.push(1-O/W),K+=1}}for(let O=0;O<W;O++)for(let ee=0;ee<z;ee++){const ye=x+ee+pe*O,be=x+ee+pe*(O+1),$=x+(ee+1)+pe*(O+1),me=x+(ee+1)+pe*O;p.push(ye,be,me),p.push(be,$,me),Y+=6}d.addGroup(b,Y,N),b+=Y,x+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $s(a){const e={};for(const n in a){e[n]={};for(const s in a[n]){const l=a[n][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][s]=null):e[n][s]=l.clone():Array.isArray(l)?e[n][s]=l.slice():e[n][s]=l}}return e}function kn(a){const e={};for(let n=0;n<a.length;n++){const s=$s(a[n]);for(const l in s)e[l]=s[l]}return e}function uE(a){const e=[];for(let n=0;n<a.length;n++)e.push(a[n].clone());return e}function J_(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const fE={clone:$s,merge:kn};var dE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends no{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dE,this.fragmentShader=hE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=uE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?n.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[l]={type:"m4",value:f.toArray()}:n.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class Sp extends pi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=ba}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const cr=new se,H0=new rt,G0=new rt;class jn extends Sp{constructor(e=50,n=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ip*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ip*2*Math.atan(Math.tan(jd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,s){cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cr.x,cr.y).multiplyScalar(-e/cr.z),cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(cr.x,cr.y).multiplyScalar(-e/cr.z)}getViewSize(e,n){return this.getViewBounds(e,H0,G0),n.subVectors(G0,H0)}setViewOffset(e,n,s,l,c,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(jd*.5*this.fov)/this.zoom,s=2*n,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,n-=f.offsetY*s/m,l*=f.width/p,s*=f.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,n,n-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Fs=-90,Hs=1;class pE extends pi{constructor(e,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new jn(Fs,Hs,e,n);l.layers=this.layers,this.add(l);const c=new jn(Fs,Hs,e,n);c.layers=this.layers,this.add(c);const f=new jn(Fs,Hs,e,n);f.layers=this.layers,this.add(f);const d=new jn(Fs,Hs,e,n);d.layers=this.layers,this.add(d);const p=new jn(Fs,Hs,e,n);p.layers=this.layers,this.add(p);const m=new jn(Fs,Hs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[s,l,c,f,d,p]=n;for(const m of n)this.remove(m);if(e===ba)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Eu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,p,m,g]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(n,c),e.setRenderTarget(s,1,l),e.render(n,f),e.setRenderTarget(s,2,l),e.render(n,d),e.setRenderTarget(s,3,l),e.render(n,p),e.setRenderTarget(s,4,l),e.render(n,m),s.texture.generateMipmaps=A,e.setRenderTarget(s,5,l),e.render(n,g),e.setRenderTarget(_,x,b),e.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class ex extends Hn{constructor(e=[],n=Ys,s,l,c,f,d,p,m,g){super(e,n,s,l,c,f,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mE extends Ln{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new ex(l,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Jn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new io(5,5,5),c=new Gn({name:"CubemapFromEquirect",uniforms:$s(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Mn,blending:Xn});c.uniforms.tEquirect.value=n;const f=new fi(l,c),d=n.minFilter;return n.minFilter===Yr&&(n.minFilter=Jn),new pE(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,s,l);e.setRenderTarget(c)}}class cl extends pi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gE={type:"move"};class fh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const s of e.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,s){let l=null,c=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const A of e.hand.values()){const S=n.getJointPose(A,s),v=this._getHandJoint(m,A);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],x=g.position.distanceTo(_.position),b=.02,M=.005;m.inputState.pinching&&x>b+M?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=b-M&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=n.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(gE)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const s=new cl;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[n.jointName]=s,e.add(s)}return e.joints[n.jointName]}}class Tu extends pi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ra,this.environmentIntensity=1,this.environmentRotation=new Ra,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const dh=new se,vE=new se,_E=new ot;class kr{constructor(e=new se(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,s,l){return this.normal.set(e,n,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,s){const l=dh.subVectors(s,n).cross(vE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const s=e.delta(dh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:n.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return n<0&&s>0||s<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const s=n||_E.getNormalMatrix(e),l=this.coplanarPoint(dh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new yp,nu=new se;class tx{constructor(e=new kr,n=new kr,s=new kr,l=new kr,c=new kr,f=new kr){this.planes=[e,n,s,l,c,f]}set(e,n,s,l,c,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(e){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,n=ba){const s=this.planes,l=e.elements,c=l[0],f=l[1],d=l[2],p=l[3],m=l[4],g=l[5],_=l[6],x=l[7],b=l[8],M=l[9],A=l[10],S=l[11],v=l[12],L=l[13],D=l[14],U=l[15];if(s[0].setComponents(p-c,x-m,S-b,U-v).normalize(),s[1].setComponents(p+c,x+m,S+b,U+v).normalize(),s[2].setComponents(p+f,x+g,S+M,U+L).normalize(),s[3].setComponents(p-f,x-g,S-M,U-L).normalize(),s[4].setComponents(p-d,x-_,S-A,U-D).normalize(),n===ba)s[5].setComponents(p+d,x+_,S+A,U+D).normalize();else if(n===Eu)s[5].setComponents(d,_,A,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){return Hr.center.set(0,0,0),Hr.radius=.7071067811865476,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const n=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const n=this.planes;for(let s=0;s<6;s++){const l=n[s];if(nu.x=l.normal.x>0?e.max.x:e.min.x,nu.y=l.normal.y>0?e.max.y:e.min.y,nu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(nu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bp extends Hn{constructor(e,n,s=mr,l,c,f,d=hi,p=hi,m,g=vl){if(g!==vl&&g!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,c,f,d,p,g,s,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Uu extends Ua{constructor(e=1,n=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:s,heightSegments:l};const c=e/2,f=n/2,d=Math.floor(s),p=Math.floor(l),m=d+1,g=p+1,_=e/d,x=n/p,b=[],M=[],A=[],S=[];for(let v=0;v<g;v++){const L=v*x-f;for(let D=0;D<m;D++){const U=D*_-c;M.push(U,-L,0),A.push(0,0,1),S.push(D/d),S.push(1-v/p)}}for(let v=0;v<p;v++)for(let L=0;L<d;L++){const D=L+m*v,U=L+m*(v+1),F=L+1+m*(v+1),G=L+1+m*v;b.push(D,U,G),b.push(U,F,G)}this.setIndex(b),this.setAttribute("position",new ji(M,3)),this.setAttribute("normal",new ji(A,3)),this.setAttribute("uv",new ji(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ep extends Ua{constructor(e=1,n=32,s=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},n=Math.max(3,Math.floor(n)),s=Math.max(2,Math.floor(s));const p=Math.min(f+d,Math.PI);let m=0;const g=[],_=new se,x=new se,b=[],M=[],A=[],S=[];for(let v=0;v<=s;v++){const L=[],D=v/s;let U=0;v===0&&f===0?U=.5/n:v===s&&p===Math.PI&&(U=-.5/n);for(let F=0;F<=n;F++){const G=F/n;_.x=-e*Math.cos(l+G*c)*Math.sin(f+D*d),_.y=e*Math.cos(f+D*d),_.z=e*Math.sin(l+G*c)*Math.sin(f+D*d),M.push(_.x,_.y,_.z),x.copy(_).normalize(),A.push(x.x,x.y,x.z),S.push(G+U,1-D),L.push(m++)}g.push(L)}for(let v=0;v<s;v++)for(let L=0;L<n;L++){const D=g[v][L+1],U=g[v][L],F=g[v+1][L],G=g[v+1][L+1];(v!==0||f>0)&&b.push(D,U,G),(v!==s-1||p<Math.PI)&&b.push(U,F,G)}this.setIndex(b),this.setAttribute("position",new ji(M,3)),this.setAttribute("normal",new ji(A,3)),this.setAttribute("uv",new ji(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ep(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class nx extends no{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gr,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xE extends no{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class yE extends Sp{constructor(e=-1,n=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,d=l+n,p=l-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class SE extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Mt{constructor(e){this.value=e}clone(){return new Mt(this.value.clone===void 0?this.value:this.value.clone())}}function V0(a,e,n,s){const l=bE(s);switch(n){case G_:return a*e;case k_:return a*e/l.components*l.byteLength;case mp:return a*e/l.components*l.byteLength;case j_:return a*e*2/l.components*l.byteLength;case gp:return a*e*2/l.components*l.byteLength;case V_:return a*e*3/l.components*l.byteLength;case Pi:return a*e*4/l.components*l.byteLength;case vp:return a*e*4/l.components*l.byteLength;case cu:case uu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case fu:case du:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Nh:case Ph:return Math.max(a,16)*Math.max(e,8)/4;case Uh:case Lh:return Math.max(a,8)*Math.max(e,8)/2;case Oh:case Bh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Ih:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case zh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Hh:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case kh:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case jh:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Wh:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case qh:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Yh:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Zh:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Kh:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Qh:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case hu:case $h:case Jh:return Math.ceil(a/4)*Math.ceil(e/4)*16;case X_:case ep:return Math.ceil(a/4)*Math.ceil(e/4)*8;case tp:case np:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function bE(a){switch(a){case Nn:case z_:return{byteLength:1,components:1};case gl:case F_:case Ml:return{byteLength:2,components:1};case hp:case pp:return{byteLength:2,components:4};case mr:case dp:case Sa:return{byteLength:4,components:1};case H_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:El}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=El);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ix(){let a=null,e=!1,n=null,s=null;function l(c,f){n(c,f),s=a.requestAnimationFrame(l)}return{start:function(){e!==!0&&n!==null&&(s=a.requestAnimationFrame(l),e=!0)},stop:function(){a.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){a=c}}}function EE(a){const e=new WeakMap;function n(d,p){const m=d.array,g=d.usage,_=m.byteLength,x=a.createBuffer();a.bindBuffer(p,x),a.bufferData(p,m,g),d.onUploadCallback();let b;if(m instanceof Float32Array)b=a.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?b=a.HALF_FLOAT:b=a.UNSIGNED_SHORT;else if(m instanceof Int16Array)b=a.SHORT;else if(m instanceof Uint32Array)b=a.UNSIGNED_INT;else if(m instanceof Int32Array)b=a.INT;else if(m instanceof Int8Array)b=a.BYTE;else if(m instanceof Uint8Array)b=a.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)b=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:b,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,p,m){const g=p.array,_=p.updateRanges;if(a.bindBuffer(m,d),_.length===0)a.bufferSubData(m,0,g);else{_.sort((b,M)=>b.start-M.start);let x=0;for(let b=1;b<_.length;b++){const M=_[x],A=_[b];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++x,_[x]=A)}_.length=x+1;for(let b=0,M=_.length;b<M;b++){const A=_[b];a.bufferSubData(m,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(a.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:f}}var ME=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,TE=`#ifdef USE_ALPHAHASH
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
#endif`,wE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,AE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,CE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,DE=`#ifdef USE_AOMAP
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
#endif`,UE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,NE=`#ifdef USE_BATCHING
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
#endif`,LE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,BE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,IE=`#ifdef USE_IRIDESCENCE
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
#endif`,zE=`#ifdef USE_BUMPMAP
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
#endif`,FE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,HE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,GE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,XE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,WE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qE=`#define PI 3.141592653589793
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
} // validated`,YE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ZE=`vec3 transformedNormal = objectNormal;
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
#endif`,KE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$E=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eM="gl_FragColor = linearToOutputTexel( gl_FragColor );",tM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nM=`#ifdef USE_ENVMAP
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
#endif`,iM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,aM=`#ifdef USE_ENVMAP
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
#endif`,rM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sM=`#ifdef USE_ENVMAP
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
#endif`,oM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fM=`#ifdef USE_GRADIENTMAP
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
}`,dM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mM=`uniform bool receiveShadow;
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
#endif`,gM=`#ifdef USE_ENVMAP
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
#endif`,vM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_M=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,SM=`PhysicalMaterial material;
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
#endif`,bM=`struct PhysicalMaterial {
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
}`,EM=`
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
#endif`,MM=`#if defined( RE_IndirectDiffuse )
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
#endif`,TM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,AM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,DM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,UM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,NM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,LM=`#if defined( USE_POINTS_UV )
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
#endif`,PM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,IM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FM=`#ifdef USE_MORPHTARGETS
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
#endif`,HM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,VM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WM=`#ifdef USE_NORMALMAP
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
#endif`,qM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,YM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ZM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,KM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,QM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$M=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,JM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lT=`float getShadowMask() {
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
}`,cT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uT=`#ifdef USE_SKINNING
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
#endif`,fT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dT=`#ifdef USE_SKINNING
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
#endif`,hT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vT=`#ifdef USE_TRANSMISSION
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
#endif`,_T=`#ifdef USE_TRANSMISSION
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
#endif`,xT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ST=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ET=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,MT=`uniform sampler2D t2D;
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
}`,TT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,AT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CT=`#include <common>
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
}`,DT=`#if DEPTH_PACKING == 3200
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
}`,UT=`#define DISTANCE
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
}`,NT=`#define DISTANCE
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
}`,LT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OT=`uniform float scale;
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
}`,BT=`uniform vec3 diffuse;
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
}`,IT=`#include <common>
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
}`,zT=`uniform vec3 diffuse;
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
}`,FT=`#define LAMBERT
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
}`,HT=`#define LAMBERT
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
}`,GT=`#define MATCAP
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
}`,VT=`#define MATCAP
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
}`,kT=`#define NORMAL
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
}`,jT=`#define NORMAL
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
}`,XT=`#define PHONG
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
}`,WT=`#define PHONG
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
}`,qT=`#define STANDARD
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
}`,YT=`#define STANDARD
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
}`,ZT=`#define TOON
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
}`,KT=`#define TOON
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
}`,QT=`uniform float size;
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
}`,$T=`uniform vec3 diffuse;
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
}`,JT=`#include <common>
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
}`,e2=`uniform vec3 color;
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
}`,t2=`uniform float rotation;
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
}`,n2=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:ME,alphahash_pars_fragment:TE,alphamap_fragment:wE,alphamap_pars_fragment:AE,alphatest_fragment:RE,alphatest_pars_fragment:CE,aomap_fragment:DE,aomap_pars_fragment:UE,batching_pars_vertex:NE,batching_vertex:LE,begin_vertex:PE,beginnormal_vertex:OE,bsdfs:BE,iridescence_fragment:IE,bumpmap_pars_fragment:zE,clipping_planes_fragment:FE,clipping_planes_pars_fragment:HE,clipping_planes_pars_vertex:GE,clipping_planes_vertex:VE,color_fragment:kE,color_pars_fragment:jE,color_pars_vertex:XE,color_vertex:WE,common:qE,cube_uv_reflection_fragment:YE,defaultnormal_vertex:ZE,displacementmap_pars_vertex:KE,displacementmap_vertex:QE,emissivemap_fragment:$E,emissivemap_pars_fragment:JE,colorspace_fragment:eM,colorspace_pars_fragment:tM,envmap_fragment:nM,envmap_common_pars_fragment:iM,envmap_pars_fragment:aM,envmap_pars_vertex:rM,envmap_physical_pars_fragment:gM,envmap_vertex:sM,fog_vertex:oM,fog_pars_vertex:lM,fog_fragment:cM,fog_pars_fragment:uM,gradientmap_pars_fragment:fM,lightmap_pars_fragment:dM,lights_lambert_fragment:hM,lights_lambert_pars_fragment:pM,lights_pars_begin:mM,lights_toon_fragment:vM,lights_toon_pars_fragment:_M,lights_phong_fragment:xM,lights_phong_pars_fragment:yM,lights_physical_fragment:SM,lights_physical_pars_fragment:bM,lights_fragment_begin:EM,lights_fragment_maps:MM,lights_fragment_end:TM,logdepthbuf_fragment:wM,logdepthbuf_pars_fragment:AM,logdepthbuf_pars_vertex:RM,logdepthbuf_vertex:CM,map_fragment:DM,map_pars_fragment:UM,map_particle_fragment:NM,map_particle_pars_fragment:LM,metalnessmap_fragment:PM,metalnessmap_pars_fragment:OM,morphinstance_vertex:BM,morphcolor_vertex:IM,morphnormal_vertex:zM,morphtarget_pars_vertex:FM,morphtarget_vertex:HM,normal_fragment_begin:GM,normal_fragment_maps:VM,normal_pars_fragment:kM,normal_pars_vertex:jM,normal_vertex:XM,normalmap_pars_fragment:WM,clearcoat_normal_fragment_begin:qM,clearcoat_normal_fragment_maps:YM,clearcoat_pars_fragment:ZM,iridescence_pars_fragment:KM,opaque_fragment:QM,packing:$M,premultiplied_alpha_fragment:JM,project_vertex:eT,dithering_fragment:tT,dithering_pars_fragment:nT,roughnessmap_fragment:iT,roughnessmap_pars_fragment:aT,shadowmap_pars_fragment:rT,shadowmap_pars_vertex:sT,shadowmap_vertex:oT,shadowmask_pars_fragment:lT,skinbase_vertex:cT,skinning_pars_vertex:uT,skinning_vertex:fT,skinnormal_vertex:dT,specularmap_fragment:hT,specularmap_pars_fragment:pT,tonemapping_fragment:mT,tonemapping_pars_fragment:gT,transmission_fragment:vT,transmission_pars_fragment:_T,uv_pars_fragment:xT,uv_pars_vertex:yT,uv_vertex:ST,worldpos_vertex:bT,background_vert:ET,background_frag:MT,backgroundCube_vert:TT,backgroundCube_frag:wT,cube_vert:AT,cube_frag:RT,depth_vert:CT,depth_frag:DT,distanceRGBA_vert:UT,distanceRGBA_frag:NT,equirect_vert:LT,equirect_frag:PT,linedashed_vert:OT,linedashed_frag:BT,meshbasic_vert:IT,meshbasic_frag:zT,meshlambert_vert:FT,meshlambert_frag:HT,meshmatcap_vert:GT,meshmatcap_frag:VT,meshnormal_vert:kT,meshnormal_frag:jT,meshphong_vert:XT,meshphong_frag:WT,meshphysical_vert:qT,meshphysical_frag:YT,meshtoon_vert:ZT,meshtoon_frag:KT,points_vert:QT,points_frag:$T,shadow_vert:JT,shadow_frag:e2,sprite_vert:t2,sprite_frag:n2},Ue={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Vi={basic:{uniforms:kn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:kn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Dt(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:kn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:kn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:kn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Dt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:kn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:kn([Ue.points,Ue.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:kn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:kn([Ue.common,Ue.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:kn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:kn([Ue.sprite,Ue.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:kn([Ue.common,Ue.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:kn([Ue.lights,Ue.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Vi.physical={uniforms:kn([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const iu={r:0,b:0,g:0},Gr=new Ra,i2=new fn;function a2(a,e,n,s,l,c,f){const d=new Dt(0);let p=c===!0?0:1,m,g,_=null,x=0,b=null;function M(D){let U=D.isScene===!0?D.background:null;return U&&U.isTexture&&(U=(D.backgroundBlurriness>0?n:e).get(U)),U}function A(D){let U=!1;const F=M(D);F===null?v(d,p):F&&F.isColor&&(v(F,1),U=!0);const G=a.xr.getEnvironmentBlendMode();G==="additive"?s.buffers.color.setClear(0,0,0,1,f):G==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(a.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function S(D,U){const F=M(U);F&&(F.isCubeTexture||F.mapping===Cu)?(g===void 0&&(g=new fi(new io(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:$s(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,z,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Gr.copy(U.backgroundRotation),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),g.material.uniforms.envMap.value=F,g.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(i2.makeRotationFromEuler(Gr)),g.material.toneMapped=Rt.getTransfer(F.colorSpace)!==Gt,(_!==F||x!==F.version||b!==a.toneMapping)&&(g.material.needsUpdate=!0,_=F,x=F.version,b=a.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):F&&F.isTexture&&(m===void 0&&(m=new fi(new Uu(2,2),new Gn({name:"BackgroundMaterial",uniforms:$s(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:Aa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=F,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=Rt.getTransfer(F.colorSpace)!==Gt,F.matrixAutoUpdate===!0&&F.updateMatrix(),m.material.uniforms.uvTransform.value.copy(F.matrix),(_!==F||x!==F.version||b!==a.toneMapping)&&(m.material.needsUpdate=!0,_=F,x=F.version,b=a.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function v(D,U){D.getRGB(iu,J_(a)),s.buffers.color.setClear(iu.r,iu.g,iu.b,U,f)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,U=1){d.set(D),p=U,v(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,v(d,p)},render:A,addToRenderList:S,dispose:L}}function r2(a,e){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,f=!1;function d(C,k,ce,oe,xe){let pe=!1;const I=_(oe,ce,k);c!==I&&(c=I,m(c.object)),pe=b(C,oe,ce,xe),pe&&M(C,oe,ce,xe),xe!==null&&e.update(xe,a.ELEMENT_ARRAY_BUFFER),(pe||f)&&(f=!1,U(C,k,ce,oe),xe!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(xe).buffer))}function p(){return a.createVertexArray()}function m(C){return a.bindVertexArray(C)}function g(C){return a.deleteVertexArray(C)}function _(C,k,ce){const oe=ce.wireframe===!0;let xe=s[C.id];xe===void 0&&(xe={},s[C.id]=xe);let pe=xe[k.id];pe===void 0&&(pe={},xe[k.id]=pe);let I=pe[oe];return I===void 0&&(I=x(p()),pe[oe]=I),I}function x(C){const k=[],ce=[],oe=[];for(let xe=0;xe<n;xe++)k[xe]=0,ce[xe]=0,oe[xe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ce,attributeDivisors:oe,object:C,attributes:{},index:null}}function b(C,k,ce,oe){const xe=c.attributes,pe=k.attributes;let I=0;const K=ce.getAttributes();for(const Y in K)if(K[Y].location>=0){const O=xe[Y];let ee=pe[Y];if(ee===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(ee=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(ee=C.instanceColor)),O===void 0||O.attribute!==ee||ee&&O.data!==ee.data)return!0;I++}return c.attributesNum!==I||c.index!==oe}function M(C,k,ce,oe){const xe={},pe=k.attributes;let I=0;const K=ce.getAttributes();for(const Y in K)if(K[Y].location>=0){let O=pe[Y];O===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(O=C.instanceColor));const ee={};ee.attribute=O,O&&O.data&&(ee.data=O.data),xe[Y]=ee,I++}c.attributes=xe,c.attributesNum=I,c.index=oe}function A(){const C=c.newAttributes;for(let k=0,ce=C.length;k<ce;k++)C[k]=0}function S(C){v(C,0)}function v(C,k){const ce=c.newAttributes,oe=c.enabledAttributes,xe=c.attributeDivisors;ce[C]=1,oe[C]===0&&(a.enableVertexAttribArray(C),oe[C]=1),xe[C]!==k&&(a.vertexAttribDivisor(C,k),xe[C]=k)}function L(){const C=c.newAttributes,k=c.enabledAttributes;for(let ce=0,oe=k.length;ce<oe;ce++)k[ce]!==C[ce]&&(a.disableVertexAttribArray(ce),k[ce]=0)}function D(C,k,ce,oe,xe,pe,I){I===!0?a.vertexAttribIPointer(C,k,ce,xe,pe):a.vertexAttribPointer(C,k,ce,oe,xe,pe)}function U(C,k,ce,oe){A();const xe=oe.attributes,pe=ce.getAttributes(),I=k.defaultAttributeValues;for(const K in pe){const Y=pe[K];if(Y.location>=0){let Ee=xe[K];if(Ee===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(Ee=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(Ee=C.instanceColor)),Ee!==void 0){const O=Ee.normalized,ee=Ee.itemSize,ye=e.get(Ee);if(ye===void 0)continue;const be=ye.buffer,$=ye.type,me=ye.bytesPerElement,Se=$===a.INT||$===a.UNSIGNED_INT||Ee.gpuType===dp;if(Ee.isInterleavedBufferAttribute){const Ae=Ee.data,Ne=Ae.stride,lt=Ee.offset;if(Ae.isInstancedInterleavedBuffer){for(let Ke=0;Ke<Y.locationSize;Ke++)v(Y.location+Ke,Ae.meshPerAttribute);C.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Ke=0;Ke<Y.locationSize;Ke++)S(Y.location+Ke);a.bindBuffer(a.ARRAY_BUFFER,be);for(let Ke=0;Ke<Y.locationSize;Ke++)D(Y.location+Ke,ee/Y.locationSize,$,O,Ne*me,(lt+ee/Y.locationSize*Ke)*me,Se)}else{if(Ee.isInstancedBufferAttribute){for(let Ae=0;Ae<Y.locationSize;Ae++)v(Y.location+Ae,Ee.meshPerAttribute);C.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Ae=0;Ae<Y.locationSize;Ae++)S(Y.location+Ae);a.bindBuffer(a.ARRAY_BUFFER,be);for(let Ae=0;Ae<Y.locationSize;Ae++)D(Y.location+Ae,ee/Y.locationSize,$,O,ee*me,ee/Y.locationSize*Ae*me,Se)}}else if(I!==void 0){const O=I[K];if(O!==void 0)switch(O.length){case 2:a.vertexAttrib2fv(Y.location,O);break;case 3:a.vertexAttrib3fv(Y.location,O);break;case 4:a.vertexAttrib4fv(Y.location,O);break;default:a.vertexAttrib1fv(Y.location,O)}}}}L()}function F(){W();for(const C in s){const k=s[C];for(const ce in k){const oe=k[ce];for(const xe in oe)g(oe[xe].object),delete oe[xe];delete k[ce]}delete s[C]}}function G(C){if(s[C.id]===void 0)return;const k=s[C.id];for(const ce in k){const oe=k[ce];for(const xe in oe)g(oe[xe].object),delete oe[xe];delete k[ce]}delete s[C.id]}function z(C){for(const k in s){const ce=s[k];if(ce[C.id]===void 0)continue;const oe=ce[C.id];for(const xe in oe)g(oe[xe].object),delete oe[xe];delete ce[C.id]}}function W(){N(),f=!0,c!==l&&(c=l,m(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:N,dispose:F,releaseStatesOfGeometry:G,releaseStatesOfProgram:z,initAttributes:A,enableAttribute:S,disableUnusedAttributes:L}}function s2(a,e,n){let s;function l(m){s=m}function c(m,g){a.drawArrays(s,m,g),n.update(g,s,1)}function f(m,g,_){_!==0&&(a.drawArraysInstanced(s,m,g,_),n.update(g,s,_))}function d(m,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,g,0,_);let b=0;for(let M=0;M<_;M++)b+=g[M];n.update(b,s,1)}function p(m,g,_,x){if(_===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let M=0;M<m.length;M++)f(m[M],g[M],x[M]);else{b.multiDrawArraysInstancedWEBGL(s,m,0,g,0,x,0,_);let M=0;for(let A=0;A<_;A++)M+=g[A]*x[A];n.update(M,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function o2(a,e,n,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=a.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==Pi&&s.convert(z)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const W=z===Ml&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Nn&&s.convert(z)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Sa&&!W)}function p(z){if(z==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const _=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),b=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),M=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=a.getParameter(a.MAX_TEXTURE_SIZE),S=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),v=a.getParameter(a.MAX_VERTEX_ATTRIBS),L=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),D=a.getParameter(a.MAX_VARYING_VECTORS),U=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),F=M>0,G=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:_,reverseDepthBuffer:x,maxTextures:b,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:L,maxVaryings:D,maxFragmentUniforms:U,vertexTextures:F,maxSamples:G}}function l2(a){const e=this;let n=null,s=0,l=!1,c=!1;const f=new kr,d=new ot,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const b=_.length!==0||x||s!==0||l;return l=x,s=_.length,b},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){n=g(_,x,0)},this.setState=function(_,x,b){const M=_.clippingPlanes,A=_.clipIntersection,S=_.clipShadows,v=a.get(_);if(!l||M===null||M.length===0||c&&!S)c?g(null):m();else{const L=c?0:s,D=L*4;let U=v.clippingState||null;p.value=U,U=g(M,x,D,b);for(let F=0;F!==D;++F)U[F]=n[F];v.clippingState=U,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=L}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(_,x,b,M){const A=_!==null?_.length:0;let S=null;if(A!==0){if(S=p.value,M!==!0||S===null){const v=b+A*4,L=x.matrixWorldInverse;d.getNormalMatrix(L),(S===null||S.length<v)&&(S=new Float32Array(v));for(let D=0,U=b;D!==A;++D,U+=4)f.copy(_[D]).applyMatrix4(L,d),f.normal.toArray(S,U),S[U+3]=f.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}function c2(a){let e=new WeakMap;function n(f,d){return d===Ah?f.mapping=Ys:d===Rh&&(f.mapping=Zs),f}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===Ah||d===Rh)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new mE(p.height);return m.fromEquirectangularTexture(a,f),e.set(f,m),f.addEventListener("dispose",l),n(m.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const js=4,k0=[.125,.215,.35,.446,.526,.582],Wr=20,hh=new yE,j0=new Dt;let ph=null,mh=0,gh=0,vh=!1;const jr=(1+Math.sqrt(5))/2,Gs=1/jr,X0=[new se(-jr,Gs,0),new se(jr,Gs,0),new se(-Gs,0,jr),new se(Gs,0,jr),new se(0,jr,-Gs),new se(0,jr,Gs),new se(-1,1,-1),new se(1,1,-1),new se(-1,1,1),new se(1,1,1)],u2=new se;class W0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,s=.1,l=100,c={}){const{size:f=256,position:d=u2}=c;ph=this._renderer.getRenderTarget(),mh=this._renderer.getActiveCubeFace(),gh=this._renderer.getActiveMipmapLevel(),vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,s,l,p,d),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Z0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Y0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ph,mh,gh),this._renderer.xr.enabled=vh,e.scissorTest=!1,au(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ys||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ph=this._renderer.getRenderTarget(),mh=this._renderer.getActiveCubeFace(),gh=this._renderer.getActiveMipmapLevel(),vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:Ml,format:Pi,colorSpace:vr,depthBuffer:!1},l=q0(e,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=q0(e,n,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=f2(c)),this._blurMaterial=d2(c,e,n)}return l}_compileMaterial(e){const n=new fi(this._lodPlanes[0],e);this._renderer.compile(n,hh)}_sceneToCubeUV(e,n,s,l,c){const p=new jn(90,1,n,s),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,b=_.toneMapping;_.getClearColor(j0),_.toneMapping=Ma,_.autoClear=!1;const M=new Du({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),A=new fi(new io,M);let S=!1;const v=e.background;v?v.isColor&&(M.color.copy(v),e.background=null,S=!0):(M.color.copy(j0),S=!0);for(let L=0;L<6;L++){const D=L%3;D===0?(p.up.set(0,m[L],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[L],c.y,c.z)):D===1?(p.up.set(0,0,m[L]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[L],c.z)):(p.up.set(0,m[L],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[L]));const U=this._cubeSize;au(l,D*U,L>2?U:0,U,U),_.setRenderTarget(l),S&&_.render(A,p),_.render(e,p)}A.geometry.dispose(),A.material.dispose(),_.toneMapping=b,_.autoClear=x,e.background=v}_textureToCubeUV(e,n){const s=this._renderer,l=e.mapping===Ys||e.mapping===Zs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Z0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Y0());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new fi(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;au(n,0,0,3*p,2*p),s.setRenderTarget(n),s.render(f,hh)}_applyPMREM(e){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=X0[(l-c-1)%X0.length];this._blur(e,c-1,c,f,d)}n.autoClear=s}_blur(e,n,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,n,s,l,c,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new fi(this._lodPlanes[l],m),x=m.uniforms,b=this._sizeLods[s]-1,M=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*Wr-1),A=c/M,S=isFinite(c)?1+Math.floor(g*A):Wr;S>Wr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Wr}`);const v=[];let L=0;for(let z=0;z<Wr;++z){const W=z/A,N=Math.exp(-W*W/2);v.push(N),z===0?L+=N:z<S&&(L+=2*N)}for(let z=0;z<v.length;z++)v[z]=v[z]/L;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=v,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:D}=this;x.dTheta.value=M,x.mipInt.value=D-s;const U=this._sizeLods[l],F=3*U*(l>D-js?l-D+js:0),G=4*(this._cubeSize-U);au(n,F,G,3*U,2*U),p.setRenderTarget(n),p.render(_,hh)}}function f2(a){const e=[],n=[],s=[];let l=a;const c=a-js+1+k0.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);n.push(d);let p=1/d;f>a-js?p=k0[f-a+js-1]:f===0&&(p=0),s.push(p);const m=1/(d-2),g=-m,_=1+m,x=[g,g,_,g,_,_,g,g,_,_,g,_],b=6,M=6,A=3,S=2,v=1,L=new Float32Array(A*M*b),D=new Float32Array(S*M*b),U=new Float32Array(v*M*b);for(let G=0;G<b;G++){const z=G%3*2/3-1,W=G>2?0:-1,N=[z,W,0,z+2/3,W,0,z+2/3,W+1,0,z,W,0,z+2/3,W+1,0,z,W+1,0];L.set(N,A*M*G),D.set(x,S*M*G);const C=[G,G,G,G,G,G];U.set(C,v*M*G)}const F=new Ua;F.setAttribute("position",new wi(L,A)),F.setAttribute("uv",new wi(D,S)),F.setAttribute("faceIndex",new wi(U,v)),e.push(F),l>js&&l--}return{lodPlanes:e,sizeLods:n,sigmas:s}}function q0(a,e,n){const s=new Ln(a,e,n);return s.texture.mapping=Cu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function au(a,e,n,s,l){a.viewport.set(e,n,s,l),a.scissor.set(e,n,s,l)}function d2(a,e,n){const s=new Float32Array(Wr),l=new se(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Mp(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Y0(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mp(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Z0(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Mp(){return`

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
	`}function h2(a){let e=new WeakMap,n=null;function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===Ah||p===Rh,g=p===Ys||p===Zs;if(m||g){let _=e.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new W0(a)),_=m?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const b=d.image;return m&&b&&b.height>0||g&&b&&l(b)?(n===null&&(n=new W0(a)),_=m?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function p2(a){const e={};function n(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=a.getExtension(s)}return e[s]=l,l}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const l=n(s);return l===null&&pu("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function m2(a,e,n,s){const l={},c=new WeakMap;function f(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const M in x.attributes)e.remove(x.attributes[M]);x.removeEventListener("dispose",f),delete l[x.id];const b=c.get(x);b&&(e.remove(b),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(_,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,n.memory.geometries++),x}function p(_){const x=_.attributes;for(const b in x)e.update(x[b],a.ARRAY_BUFFER)}function m(_){const x=[],b=_.index,M=_.attributes.position;let A=0;if(b!==null){const L=b.array;A=b.version;for(let D=0,U=L.length;D<U;D+=3){const F=L[D+0],G=L[D+1],z=L[D+2];x.push(F,G,G,z,z,F)}}else if(M!==void 0){const L=M.array;A=M.version;for(let D=0,U=L.length/3-1;D<U;D+=3){const F=D+0,G=D+1,z=D+2;x.push(F,G,G,z,z,F)}}else return;const S=new(q_(x)?$_:Q_)(x,1);S.version=A;const v=c.get(_);v&&e.remove(v),c.set(_,S)}function g(_){const x=c.get(_);if(x){const b=_.index;b!==null&&x.version<b.version&&m(_)}else m(_);return c.get(_)}return{get:d,update:p,getWireframeAttribute:g}}function g2(a,e,n){let s;function l(x){s=x}let c,f;function d(x){c=x.type,f=x.bytesPerElement}function p(x,b){a.drawElements(s,b,c,x*f),n.update(b,s,1)}function m(x,b,M){M!==0&&(a.drawElementsInstanced(s,b,c,x*f,M),n.update(b,s,M))}function g(x,b,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,b,0,c,x,0,M);let S=0;for(let v=0;v<M;v++)S+=b[v];n.update(S,s,1)}function _(x,b,M,A){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<x.length;v++)m(x[v]/f,b[v],A[v]);else{S.multiDrawElementsInstancedWEBGL(s,b,0,c,x,0,A,0,M);let v=0;for(let L=0;L<M;L++)v+=b[L]*A[L];n.update(v,s,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function v2(a){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(n.calls++,f){case a.TRIANGLES:n.triangles+=d*(c/3);break;case a.LINES:n.lines+=d*(c/2);break;case a.LINE_STRIP:n.lines+=d*(c-1);break;case a.LINE_LOOP:n.lines+=d*c;break;case a.POINTS:n.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:l,update:s}}function _2(a,e,n){const s=new WeakMap,l=new $t;function c(f,d,p){const m=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let x=s.get(d);if(x===void 0||x.count!==_){let C=function(){W.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var b=C;x!==void 0&&x.texture.dispose();const M=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let U=0;M===!0&&(U=1),A===!0&&(U=2),S===!0&&(U=3);let F=d.attributes.position.count*U,G=1;F>e.maxTextureSize&&(G=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const z=new Float32Array(F*G*4*_),W=new Y_(z,F,G,_);W.type=Sa,W.needsUpdate=!0;const N=U*4;for(let k=0;k<_;k++){const ce=v[k],oe=L[k],xe=D[k],pe=F*G*4*k;for(let I=0;I<ce.count;I++){const K=I*N;M===!0&&(l.fromBufferAttribute(ce,I),z[pe+K+0]=l.x,z[pe+K+1]=l.y,z[pe+K+2]=l.z,z[pe+K+3]=0),A===!0&&(l.fromBufferAttribute(oe,I),z[pe+K+4]=l.x,z[pe+K+5]=l.y,z[pe+K+6]=l.z,z[pe+K+7]=0),S===!0&&(l.fromBufferAttribute(xe,I),z[pe+K+8]=l.x,z[pe+K+9]=l.y,z[pe+K+10]=l.z,z[pe+K+11]=xe.itemSize===4?l.w:1)}}x={count:_,texture:W,size:new rt(F,G)},s.set(d,x),d.addEventListener("dispose",C)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(a,"morphTexture",f.morphTexture,n);else{let M=0;for(let S=0;S<m.length;S++)M+=m[S];const A=d.morphTargetsRelative?1:1-M;p.getUniforms().setValue(a,"morphTargetBaseInfluence",A),p.getUniforms().setValue(a,"morphTargetInfluences",m)}p.getUniforms().setValue(a,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(a,"morphTargetsTextureSize",x.size)}return{update:c}}function x2(a,e,n,s){let l=new WeakMap;function c(p){const m=s.render.frame,g=p.geometry,_=e.get(p,g);if(l.get(_)!==m&&(e.update(_),l.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(n.update(p.instanceMatrix,a.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,a.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return _}function f(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:f}}const ax=new Hn,K0=new bp(1,1),rx=new Y_,sx=new Qb,ox=new ex,Q0=[],$0=[],J0=new Float32Array(16),e_=new Float32Array(9),t_=new Float32Array(4);function ao(a,e,n){const s=a[0];if(s<=0||s>0)return a;const l=e*n;let c=Q0[l];if(c===void 0&&(c=new Float32Array(l),Q0[l]=c),e!==0){s.toArray(c,0);for(let f=1,d=0;f!==e;++f)d+=n,a[f].toArray(c,d)}return c}function gn(a,e){if(a.length!==e.length)return!1;for(let n=0,s=a.length;n<s;n++)if(a[n]!==e[n])return!1;return!0}function vn(a,e){for(let n=0,s=e.length;n<s;n++)a[n]=e[n]}function Nu(a,e){let n=$0[e];n===void 0&&(n=new Int32Array(e),$0[e]=n);for(let s=0;s!==e;++s)n[s]=a.allocateTextureUnit();return n}function y2(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function S2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(gn(n,e))return;a.uniform2fv(this.addr,e),vn(n,e)}}function b2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(gn(n,e))return;a.uniform3fv(this.addr,e),vn(n,e)}}function E2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(gn(n,e))return;a.uniform4fv(this.addr,e),vn(n,e)}}function M2(a,e){const n=this.cache,s=e.elements;if(s===void 0){if(gn(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),vn(n,e)}else{if(gn(n,s))return;t_.set(s),a.uniformMatrix2fv(this.addr,!1,t_),vn(n,s)}}function T2(a,e){const n=this.cache,s=e.elements;if(s===void 0){if(gn(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),vn(n,e)}else{if(gn(n,s))return;e_.set(s),a.uniformMatrix3fv(this.addr,!1,e_),vn(n,s)}}function w2(a,e){const n=this.cache,s=e.elements;if(s===void 0){if(gn(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),vn(n,e)}else{if(gn(n,s))return;J0.set(s),a.uniformMatrix4fv(this.addr,!1,J0),vn(n,s)}}function A2(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function R2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(gn(n,e))return;a.uniform2iv(this.addr,e),vn(n,e)}}function C2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(gn(n,e))return;a.uniform3iv(this.addr,e),vn(n,e)}}function D2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(gn(n,e))return;a.uniform4iv(this.addr,e),vn(n,e)}}function U2(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function N2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(gn(n,e))return;a.uniform2uiv(this.addr,e),vn(n,e)}}function L2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(gn(n,e))return;a.uniform3uiv(this.addr,e),vn(n,e)}}function P2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(gn(n,e))return;a.uniform4uiv(this.addr,e),vn(n,e)}}function O2(a,e,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l);let c;this.type===a.SAMPLER_2D_SHADOW?(K0.compareFunction=W_,c=K0):c=ax,n.setTexture2D(e||c,l)}function B2(a,e,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),n.setTexture3D(e||sx,l)}function I2(a,e,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),n.setTextureCube(e||ox,l)}function z2(a,e,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),n.setTexture2DArray(e||rx,l)}function F2(a){switch(a){case 5126:return y2;case 35664:return S2;case 35665:return b2;case 35666:return E2;case 35674:return M2;case 35675:return T2;case 35676:return w2;case 5124:case 35670:return A2;case 35667:case 35671:return R2;case 35668:case 35672:return C2;case 35669:case 35673:return D2;case 5125:return U2;case 36294:return N2;case 36295:return L2;case 36296:return P2;case 35678:case 36198:case 36298:case 36306:case 35682:return O2;case 35679:case 36299:case 36307:return B2;case 35680:case 36300:case 36308:case 36293:return I2;case 36289:case 36303:case 36311:case 36292:return z2}}function H2(a,e){a.uniform1fv(this.addr,e)}function G2(a,e){const n=ao(e,this.size,2);a.uniform2fv(this.addr,n)}function V2(a,e){const n=ao(e,this.size,3);a.uniform3fv(this.addr,n)}function k2(a,e){const n=ao(e,this.size,4);a.uniform4fv(this.addr,n)}function j2(a,e){const n=ao(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function X2(a,e){const n=ao(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function W2(a,e){const n=ao(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function q2(a,e){a.uniform1iv(this.addr,e)}function Y2(a,e){a.uniform2iv(this.addr,e)}function Z2(a,e){a.uniform3iv(this.addr,e)}function K2(a,e){a.uniform4iv(this.addr,e)}function Q2(a,e){a.uniform1uiv(this.addr,e)}function $2(a,e){a.uniform2uiv(this.addr,e)}function J2(a,e){a.uniform3uiv(this.addr,e)}function ew(a,e){a.uniform4uiv(this.addr,e)}function tw(a,e,n){const s=this.cache,l=e.length,c=Nu(n,l);gn(s,c)||(a.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)n.setTexture2D(e[f]||ax,c[f])}function nw(a,e,n){const s=this.cache,l=e.length,c=Nu(n,l);gn(s,c)||(a.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)n.setTexture3D(e[f]||sx,c[f])}function iw(a,e,n){const s=this.cache,l=e.length,c=Nu(n,l);gn(s,c)||(a.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)n.setTextureCube(e[f]||ox,c[f])}function aw(a,e,n){const s=this.cache,l=e.length,c=Nu(n,l);gn(s,c)||(a.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)n.setTexture2DArray(e[f]||rx,c[f])}function rw(a){switch(a){case 5126:return H2;case 35664:return G2;case 35665:return V2;case 35666:return k2;case 35674:return j2;case 35675:return X2;case 35676:return W2;case 5124:case 35670:return q2;case 35667:case 35671:return Y2;case 35668:case 35672:return Z2;case 35669:case 35673:return K2;case 5125:return Q2;case 36294:return $2;case 36295:return J2;case 36296:return ew;case 35678:case 36198:case 36298:case 36306:case 35682:return tw;case 35679:case 36299:case 36307:return nw;case 35680:case 36300:case 36308:case 36293:return iw;case 36289:case 36303:case 36311:case 36292:return aw}}class sw{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.type=n.type,this.setValue=F2(n.type)}}class ow{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=rw(n.type)}}class lw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(e,n[d.id],s)}}}const _h=/(\w+)(\])?(\[|\.)?/g;function n_(a,e){a.seq.push(e),a.map[e.id]=e}function cw(a,e,n){const s=a.name,l=s.length;for(_h.lastIndex=0;;){const c=_h.exec(s),f=_h.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===l){n_(n,m===void 0?new sw(d,a,e):new ow(d,a,e));break}else{let _=n.map[d];_===void 0&&(_=new lw(d),n_(n,_)),n=_}}}class mu{constructor(e,n){this.seq=[],this.map={};const s=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=e.getActiveUniform(n,l),f=e.getUniformLocation(n,c.name);cw(c,f,this)}}setValue(e,n,s,l){const c=this.map[n];c!==void 0&&c.setValue(e,s,l)}setOptional(e,n,s){const l=n[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,n,s,l){for(let c=0,f=n.length;c!==f;++c){const d=n[c],p=s[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,n){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in n&&s.push(f)}return s}}function i_(a,e,n){const s=a.createShader(e);return a.shaderSource(s,n),a.compileShader(s),s}const uw=37297;let fw=0;function dw(a,e){const n=a.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return s.join(`
`)}const a_=new ot;function hw(a){Rt._getMatrix(a_,Rt.workingColorSpace,a);const e=`mat3( ${a_.elements.map(n=>n.toFixed(4))} )`;switch(Rt.getTransfer(a)){case bu:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function r_(a,e,n){const s=a.getShaderParameter(e,a.COMPILE_STATUS),l=a.getShaderInfoLog(e).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+l+`

`+dw(a.getShaderSource(e),f)}else return l}function pw(a,e){const n=hw(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function mw(a,e){let n;switch(e){case Mb:n="Linear";break;case Tb:n="Reinhard";break;case wb:n="Cineon";break;case Ab:n="ACESFilmic";break;case Cb:n="AgX";break;case Db:n="Neutral";break;case Rb:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ru=new se;function gw(){Rt.getLuminanceCoefficients(ru);const a=ru.x.toFixed(4),e=ru.y.toFixed(4),n=ru.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vw(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ul).join(`
`)}function _w(a){const e=[];for(const n in a){const s=a[n];s!==!1&&e.push("#define "+n+" "+s)}return e.join(`
`)}function xw(a,e){const n={},s=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=a.getActiveAttrib(e,l),f=c.name;let d=1;c.type===a.FLOAT_MAT2&&(d=2),c.type===a.FLOAT_MAT3&&(d=3),c.type===a.FLOAT_MAT4&&(d=4),n[f]={type:c.type,location:a.getAttribLocation(e,f),locationSize:d}}return n}function ul(a){return a!==""}function s_(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function o_(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yw=/^[ \t]*#include +<([\w\d./]+)>/gm;function ap(a){return a.replace(yw,bw)}const Sw=new Map;function bw(a,e){let n=ct[e];if(n===void 0){const s=Sw.get(e);if(s!==void 0)n=ct[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return ap(n)}const Ew=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function l_(a){return a.replace(Ew,Mw)}function Mw(a,e,n,s){let l="";for(let c=parseInt(e);c<parseInt(n);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function c_(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}function Tw(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===O_?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===ib?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===ya&&(e="SHADOWMAP_TYPE_VSM"),e}function ww(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Ys:case Zs:e="ENVMAP_TYPE_CUBE";break;case Cu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Aw(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function Rw(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case B_:e="ENVMAP_BLENDING_MULTIPLY";break;case bb:e="ENVMAP_BLENDING_MIX";break;case Eb:e="ENVMAP_BLENDING_ADD";break}return e}function Cw(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:s,maxMip:n}}function Dw(a,e,n,s){const l=a.getContext(),c=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=Tw(n),m=ww(n),g=Aw(n),_=Rw(n),x=Cw(n),b=vw(n),M=_w(c),A=l.createProgram();let S,v,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(ul).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(ul).join(`
`),v.length>0&&(v+=`
`)):(S=[c_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ul).join(`
`),v=[c_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ma?"#define TONE_MAPPING":"",n.toneMapping!==Ma?ct.tonemapping_pars_fragment:"",n.toneMapping!==Ma?mw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,pw("linearToOutputTexel",n.outputColorSpace),gw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ul).join(`
`)),f=ap(f),f=s_(f,n),f=o_(f,n),d=ap(d),d=s_(d,n),d=o_(d,n),f=l_(f),d=l_(d),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",n.glslVersion===M0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===M0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const D=L+S+f,U=L+v+d,F=i_(l,l.VERTEX_SHADER,D),G=i_(l,l.FRAGMENT_SHADER,U);l.attachShader(A,F),l.attachShader(A,G),n.index0AttributeName!==void 0?l.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function z(k){if(a.debug.checkShaderErrors){const ce=l.getProgramInfoLog(A).trim(),oe=l.getShaderInfoLog(F).trim(),xe=l.getShaderInfoLog(G).trim();let pe=!0,I=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(pe=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(l,A,F,G);else{const K=r_(l,F,"vertex"),Y=r_(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ce+`
`+K+`
`+Y)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(oe===""||xe==="")&&(I=!1);I&&(k.diagnostics={runnable:pe,programLog:ce,vertexShader:{log:oe,prefix:S},fragmentShader:{log:xe,prefix:v}})}l.deleteShader(F),l.deleteShader(G),W=new mu(l,A),N=xw(l,A)}let W;this.getUniforms=function(){return W===void 0&&z(this),W};let N;this.getAttributes=function(){return N===void 0&&z(this),N};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,uw)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=fw++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=F,this.fragmentShader=G,this}let Uw=0;class Nw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(n),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let s=n.get(e);return s===void 0&&(s=new Set,n.set(e,s)),s}_getShaderStage(e){const n=this.shaderCache;let s=n.get(e);return s===void 0&&(s=new Lw(e),n.set(e,s)),s}}class Lw{constructor(e){this.id=Uw++,this.code=e,this.usedTimes=0}}function Pw(a,e,n,s,l,c,f){const d=new Z_,p=new Nw,m=new Set,g=[],_=l.logarithmicDepthBuffer,x=l.vertexTextures;let b=l.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(N){return m.add(N),N===0?"uv":`uv${N}`}function S(N,C,k,ce,oe){const xe=ce.fog,pe=oe.geometry,I=N.isMeshStandardMaterial?ce.environment:null,K=(N.isMeshStandardMaterial?n:e).get(N.envMap||I),Y=K&&K.mapping===Cu?K.image.height:null,Ee=M[N.type];N.precision!==null&&(b=l.getMaxPrecision(N.precision),b!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",b,"instead."));const O=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,ee=O!==void 0?O.length:0;let ye=0;pe.morphAttributes.position!==void 0&&(ye=1),pe.morphAttributes.normal!==void 0&&(ye=2),pe.morphAttributes.color!==void 0&&(ye=3);let be,$,me,Se;if(Ee){const Tt=Vi[Ee];be=Tt.vertexShader,$=Tt.fragmentShader}else be=N.vertexShader,$=N.fragmentShader,p.update(N),me=p.getVertexShaderID(N),Se=p.getFragmentShaderID(N);const Ae=a.getRenderTarget(),Ne=a.state.buffers.depth.getReversed(),lt=oe.isInstancedMesh===!0,Ke=oe.isBatchedMesh===!0,Xt=!!N.map,Vt=!!N.matcap,dt=!!K,H=!!N.aoMap,Wn=!!N.lightMap,_t=!!N.bumpMap,it=!!N.normalMap,Xe=!!N.displacementMap,Bt=!!N.emissiveMap,Ve=!!N.metalnessMap,P=!!N.roughnessMap,w=N.anisotropy>0,te=N.clearcoat>0,ge=N.dispersion>0,Me=N.iridescence>0,fe=N.sheen>0,Oe=N.transmission>0,Re=w&&!!N.anisotropyMap,Ge=te&&!!N.clearcoatMap,Je=te&&!!N.clearcoatNormalMap,we=te&&!!N.clearcoatRoughnessMap,Fe=Me&&!!N.iridescenceMap,Ye=Me&&!!N.iridescenceThicknessMap,Qe=fe&&!!N.sheenColorMap,Be=fe&&!!N.sheenRoughnessMap,ut=!!N.specularMap,nt=!!N.specularColorMap,It=!!N.specularIntensityMap,j=Oe&&!!N.transmissionMap,Le=Oe&&!!N.thicknessMap,le=!!N.gradientMap,ve=!!N.alphaMap,Ie=N.alphaTest>0,Pe=!!N.alphaHash,at=!!N.extensions;let Wt=Ma;N.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(Wt=a.toneMapping);const sn={shaderID:Ee,shaderType:N.type,shaderName:N.name,vertexShader:be,fragmentShader:$,defines:N.defines,customVertexShaderID:me,customFragmentShaderID:Se,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:b,batching:Ke,batchingColor:Ke&&oe._colorsTexture!==null,instancing:lt,instancingColor:lt&&oe.instanceColor!==null,instancingMorph:lt&&oe.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Ae===null?a.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:vr,alphaToCoverage:!!N.alphaToCoverage,map:Xt,matcap:Vt,envMap:dt,envMapMode:dt&&K.mapping,envMapCubeUVHeight:Y,aoMap:H,lightMap:Wn,bumpMap:_t,normalMap:it,displacementMap:x&&Xe,emissiveMap:Bt,normalMapObjectSpace:it&&N.normalMapType===Lb,normalMapTangentSpace:it&&N.normalMapType===Nb,metalnessMap:Ve,roughnessMap:P,anisotropy:w,anisotropyMap:Re,clearcoat:te,clearcoatMap:Ge,clearcoatNormalMap:Je,clearcoatRoughnessMap:we,dispersion:ge,iridescence:Me,iridescenceMap:Fe,iridescenceThicknessMap:Ye,sheen:fe,sheenColorMap:Qe,sheenRoughnessMap:Be,specularMap:ut,specularColorMap:nt,specularIntensityMap:It,transmission:Oe,transmissionMap:j,thicknessMap:Le,gradientMap:le,opaque:N.transparent===!1&&N.blending===Xs&&N.alphaToCoverage===!1,alphaMap:ve,alphaTest:Ie,alphaHash:Pe,combine:N.combine,mapUv:Xt&&A(N.map.channel),aoMapUv:H&&A(N.aoMap.channel),lightMapUv:Wn&&A(N.lightMap.channel),bumpMapUv:_t&&A(N.bumpMap.channel),normalMapUv:it&&A(N.normalMap.channel),displacementMapUv:Xe&&A(N.displacementMap.channel),emissiveMapUv:Bt&&A(N.emissiveMap.channel),metalnessMapUv:Ve&&A(N.metalnessMap.channel),roughnessMapUv:P&&A(N.roughnessMap.channel),anisotropyMapUv:Re&&A(N.anisotropyMap.channel),clearcoatMapUv:Ge&&A(N.clearcoatMap.channel),clearcoatNormalMapUv:Je&&A(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&A(N.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&A(N.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&A(N.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&A(N.sheenColorMap.channel),sheenRoughnessMapUv:Be&&A(N.sheenRoughnessMap.channel),specularMapUv:ut&&A(N.specularMap.channel),specularColorMapUv:nt&&A(N.specularColorMap.channel),specularIntensityMapUv:It&&A(N.specularIntensityMap.channel),transmissionMapUv:j&&A(N.transmissionMap.channel),thicknessMapUv:Le&&A(N.thicknessMap.channel),alphaMapUv:ve&&A(N.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(it||w),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!pe.attributes.uv&&(Xt||ve),fog:!!xe,useFog:N.fog===!0,fogExp2:!!xe&&xe.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Ne,skinning:oe.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ye,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:N.dithering,shadowMapEnabled:a.shadowMap.enabled&&k.length>0,shadowMapType:a.shadowMap.type,toneMapping:Wt,decodeVideoTexture:Xt&&N.map.isVideoTexture===!0&&Rt.getTransfer(N.map.colorSpace)===Gt,decodeVideoTextureEmissive:Bt&&N.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(N.emissiveMap.colorSpace)===Gt,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===ui,flipSided:N.side===Mn,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:at&&N.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&N.extensions.multiDraw===!0||Ke)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return sn.vertexUv1s=m.has(1),sn.vertexUv2s=m.has(2),sn.vertexUv3s=m.has(3),m.clear(),sn}function v(N){const C=[];if(N.shaderID?C.push(N.shaderID):(C.push(N.customVertexShaderID),C.push(N.customFragmentShaderID)),N.defines!==void 0)for(const k in N.defines)C.push(k),C.push(N.defines[k]);return N.isRawShaderMaterial===!1&&(L(C,N),D(C,N),C.push(a.outputColorSpace)),C.push(N.customProgramCacheKey),C.join()}function L(N,C){N.push(C.precision),N.push(C.outputColorSpace),N.push(C.envMapMode),N.push(C.envMapCubeUVHeight),N.push(C.mapUv),N.push(C.alphaMapUv),N.push(C.lightMapUv),N.push(C.aoMapUv),N.push(C.bumpMapUv),N.push(C.normalMapUv),N.push(C.displacementMapUv),N.push(C.emissiveMapUv),N.push(C.metalnessMapUv),N.push(C.roughnessMapUv),N.push(C.anisotropyMapUv),N.push(C.clearcoatMapUv),N.push(C.clearcoatNormalMapUv),N.push(C.clearcoatRoughnessMapUv),N.push(C.iridescenceMapUv),N.push(C.iridescenceThicknessMapUv),N.push(C.sheenColorMapUv),N.push(C.sheenRoughnessMapUv),N.push(C.specularMapUv),N.push(C.specularColorMapUv),N.push(C.specularIntensityMapUv),N.push(C.transmissionMapUv),N.push(C.thicknessMapUv),N.push(C.combine),N.push(C.fogExp2),N.push(C.sizeAttenuation),N.push(C.morphTargetsCount),N.push(C.morphAttributeCount),N.push(C.numDirLights),N.push(C.numPointLights),N.push(C.numSpotLights),N.push(C.numSpotLightMaps),N.push(C.numHemiLights),N.push(C.numRectAreaLights),N.push(C.numDirLightShadows),N.push(C.numPointLightShadows),N.push(C.numSpotLightShadows),N.push(C.numSpotLightShadowsWithMaps),N.push(C.numLightProbes),N.push(C.shadowMapType),N.push(C.toneMapping),N.push(C.numClippingPlanes),N.push(C.numClipIntersection),N.push(C.depthPacking)}function D(N,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),N.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),N.push(d.mask)}function U(N){const C=M[N.type];let k;if(C){const ce=Vi[C];k=fE.clone(ce.uniforms)}else k=N.uniforms;return k}function F(N,C){let k;for(let ce=0,oe=g.length;ce<oe;ce++){const xe=g[ce];if(xe.cacheKey===C){k=xe,++k.usedTimes;break}}return k===void 0&&(k=new Dw(a,C,N,c),g.push(k)),k}function G(N){if(--N.usedTimes===0){const C=g.indexOf(N);g[C]=g[g.length-1],g.pop(),N.destroy()}}function z(N){p.remove(N)}function W(){p.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:U,acquireProgram:F,releaseProgram:G,releaseShaderCache:z,programs:g,dispose:W}}function Ow(){let a=new WeakMap;function e(f){return a.has(f)}function n(f){let d=a.get(f);return d===void 0&&(d={},a.set(f,d)),d}function s(f){a.delete(f)}function l(f,d,p){a.get(f)[d]=p}function c(){a=new WeakMap}return{has:e,get:n,remove:s,update:l,dispose:c}}function Bw(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function u_(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function f_(){const a=[];let e=0;const n=[],s=[],l=[];function c(){e=0,n.length=0,s.length=0,l.length=0}function f(_,x,b,M,A,S){let v=a[e];return v===void 0?(v={id:_.id,object:_,geometry:x,material:b,groupOrder:M,renderOrder:_.renderOrder,z:A,group:S},a[e]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=b,v.groupOrder=M,v.renderOrder=_.renderOrder,v.z=A,v.group=S),e++,v}function d(_,x,b,M,A,S){const v=f(_,x,b,M,A,S);b.transmission>0?s.push(v):b.transparent===!0?l.push(v):n.push(v)}function p(_,x,b,M,A,S){const v=f(_,x,b,M,A,S);b.transmission>0?s.unshift(v):b.transparent===!0?l.unshift(v):n.unshift(v)}function m(_,x){n.length>1&&n.sort(_||Bw),s.length>1&&s.sort(x||u_),l.length>1&&l.sort(x||u_)}function g(){for(let _=e,x=a.length;_<x;_++){const b=a[_];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:n,transmissive:s,transparent:l,init:c,push:d,unshift:p,finish:g,sort:m}}function Iw(){let a=new WeakMap;function e(s,l){const c=a.get(s);let f;return c===void 0?(f=new f_,a.set(s,[f])):l>=c.length?(f=new f_,c.push(f)):f=c[l],f}function n(){a=new WeakMap}return{get:e,dispose:n}}function zw(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new se,color:new Dt};break;case"SpotLight":n={position:new se,direction:new se,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new se,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new se,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":n={color:new Dt,position:new se,halfWidth:new se,halfHeight:new se};break}return a[e.id]=n,n}}}function Fw(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=n,n}}}let Hw=0;function Gw(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Vw(a){const e=new zw,n=Fw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new se);const l=new se,c=new fn,f=new fn;function d(m){let g=0,_=0,x=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let b=0,M=0,A=0,S=0,v=0,L=0,D=0,U=0,F=0,G=0,z=0;m.sort(Gw);for(let N=0,C=m.length;N<C;N++){const k=m[N],ce=k.color,oe=k.intensity,xe=k.distance,pe=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)g+=ce.r*oe,_+=ce.g*oe,x+=ce.b*oe;else if(k.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(k.sh.coefficients[I],oe);z++}else if(k.isDirectionalLight){const I=e.get(k);if(I.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const K=k.shadow,Y=n.get(k);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,s.directionalShadow[b]=Y,s.directionalShadowMap[b]=pe,s.directionalShadowMatrix[b]=k.shadow.matrix,L++}s.directional[b]=I,b++}else if(k.isSpotLight){const I=e.get(k);I.position.setFromMatrixPosition(k.matrixWorld),I.color.copy(ce).multiplyScalar(oe),I.distance=xe,I.coneCos=Math.cos(k.angle),I.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),I.decay=k.decay,s.spot[A]=I;const K=k.shadow;if(k.map&&(s.spotLightMap[F]=k.map,F++,K.updateMatrices(k),k.castShadow&&G++),s.spotLightMatrix[A]=K.matrix,k.castShadow){const Y=n.get(k);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,s.spotShadow[A]=Y,s.spotShadowMap[A]=pe,U++}A++}else if(k.isRectAreaLight){const I=e.get(k);I.color.copy(ce).multiplyScalar(oe),I.halfWidth.set(k.width*.5,0,0),I.halfHeight.set(0,k.height*.5,0),s.rectArea[S]=I,S++}else if(k.isPointLight){const I=e.get(k);if(I.color.copy(k.color).multiplyScalar(k.intensity),I.distance=k.distance,I.decay=k.decay,k.castShadow){const K=k.shadow,Y=n.get(k);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,s.pointShadow[M]=Y,s.pointShadowMap[M]=pe,s.pointShadowMatrix[M]=k.shadow.matrix,D++}s.point[M]=I,M++}else if(k.isHemisphereLight){const I=e.get(k);I.skyColor.copy(k.color).multiplyScalar(oe),I.groundColor.copy(k.groundColor).multiplyScalar(oe),s.hemi[v]=I,v++}}S>0&&(a.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ue.LTC_FLOAT_1,s.rectAreaLTC2=Ue.LTC_FLOAT_2):(s.rectAreaLTC1=Ue.LTC_HALF_1,s.rectAreaLTC2=Ue.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=x;const W=s.hash;(W.directionalLength!==b||W.pointLength!==M||W.spotLength!==A||W.rectAreaLength!==S||W.hemiLength!==v||W.numDirectionalShadows!==L||W.numPointShadows!==D||W.numSpotShadows!==U||W.numSpotMaps!==F||W.numLightProbes!==z)&&(s.directional.length=b,s.spot.length=A,s.rectArea.length=S,s.point.length=M,s.hemi.length=v,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=U+F-G,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=z,W.directionalLength=b,W.pointLength=M,W.spotLength=A,W.rectAreaLength=S,W.hemiLength=v,W.numDirectionalShadows=L,W.numPointShadows=D,W.numSpotShadows=U,W.numSpotMaps=F,W.numLightProbes=z,s.version=Hw++)}function p(m,g){let _=0,x=0,b=0,M=0,A=0;const S=g.matrixWorldInverse;for(let v=0,L=m.length;v<L;v++){const D=m[v];if(D.isDirectionalLight){const U=s.directional[_];U.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),_++}else if(D.isSpotLight){const U=s.spot[b];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(S),U.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),b++}else if(D.isRectAreaLight){const U=s.rectArea[M];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(S),f.identity(),c.copy(D.matrixWorld),c.premultiply(S),f.extractRotation(c),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),M++}else if(D.isPointLight){const U=s.point[x];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(S),x++}else if(D.isHemisphereLight){const U=s.hemi[A];U.direction.setFromMatrixPosition(D.matrixWorld),U.direction.transformDirection(S),A++}}}return{setup:d,setupView:p,state:s}}function d_(a){const e=new Vw(a),n=[],s=[];function l(g){m.camera=g,n.length=0,s.length=0}function c(g){n.push(g)}function f(g){s.push(g)}function d(){e.setup(n)}function p(g){e.setupView(n,g)}const m={lightsArray:n,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:f}}function kw(a){let e=new WeakMap;function n(l,c=0){const f=e.get(l);let d;return f===void 0?(d=new d_(a),e.set(l,[d])):c>=f.length?(d=new d_(a),f.push(d)):d=f[c],d}function s(){e=new WeakMap}return{get:n,dispose:s}}const jw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xw=`uniform sampler2D shadow_pass;
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
}`;function Ww(a,e,n){let s=new tx;const l=new rt,c=new rt,f=new $t,d=new nx({depthPacking:_p}),p=new xE,m={},g=n.maxTextureSize,_={[Aa]:Mn,[Mn]:Aa,[ui]:ui},x=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:jw,fragmentShader:Xw}),b=x.clone();b.defines.HORIZONTAL_PASS=1;const M=new Ua;M.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new fi(M,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=O_;let v=this.type;this.render=function(G,z,W){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||G.length===0)return;const N=a.getRenderTarget(),C=a.getActiveCubeFace(),k=a.getActiveMipmapLevel(),ce=a.state;ce.setBlending(Xn),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const oe=v!==ya&&this.type===ya,xe=v===ya&&this.type!==ya;for(let pe=0,I=G.length;pe<I;pe++){const K=G[pe],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const Ee=Y.getFrameExtents();if(l.multiply(Ee),c.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/Ee.x),l.x=c.x*Ee.x,Y.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/Ee.y),l.y=c.y*Ee.y,Y.mapSize.y=c.y)),Y.map===null||oe===!0||xe===!0){const ee=this.type!==ya?{minFilter:hi,magFilter:hi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ln(l.x,l.y,ee),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}a.setRenderTarget(Y.map),a.clear();const O=Y.getViewportCount();for(let ee=0;ee<O;ee++){const ye=Y.getViewport(ee);f.set(c.x*ye.x,c.y*ye.y,c.x*ye.z,c.y*ye.w),ce.viewport(f),Y.updateMatrices(K,ee),s=Y.getFrustum(),U(z,W,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===ya&&L(Y,W),Y.needsUpdate=!1}v=this.type,S.needsUpdate=!1,a.setRenderTarget(N,C,k)};function L(G,z){const W=e.update(A);x.defines.VSM_SAMPLES!==G.blurSamples&&(x.defines.VSM_SAMPLES=G.blurSamples,b.defines.VSM_SAMPLES=G.blurSamples,x.needsUpdate=!0,b.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Ln(l.x,l.y)),x.uniforms.shadow_pass.value=G.map.texture,x.uniforms.resolution.value=G.mapSize,x.uniforms.radius.value=G.radius,a.setRenderTarget(G.mapPass),a.clear(),a.renderBufferDirect(z,null,W,x,A,null),b.uniforms.shadow_pass.value=G.mapPass.texture,b.uniforms.resolution.value=G.mapSize,b.uniforms.radius.value=G.radius,a.setRenderTarget(G.map),a.clear(),a.renderBufferDirect(z,null,W,b,A,null)}function D(G,z,W,N){let C=null;const k=W.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(k!==void 0)C=k;else if(C=W.isPointLight===!0?p:d,a.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const ce=C.uuid,oe=z.uuid;let xe=m[ce];xe===void 0&&(xe={},m[ce]=xe);let pe=xe[oe];pe===void 0&&(pe=C.clone(),xe[oe]=pe,z.addEventListener("dispose",F)),C=pe}if(C.visible=z.visible,C.wireframe=z.wireframe,N===ya?C.side=z.shadowSide!==null?z.shadowSide:z.side:C.side=z.shadowSide!==null?z.shadowSide:_[z.side],C.alphaMap=z.alphaMap,C.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,C.map=z.map,C.clipShadows=z.clipShadows,C.clippingPlanes=z.clippingPlanes,C.clipIntersection=z.clipIntersection,C.displacementMap=z.displacementMap,C.displacementScale=z.displacementScale,C.displacementBias=z.displacementBias,C.wireframeLinewidth=z.wireframeLinewidth,C.linewidth=z.linewidth,W.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ce=a.properties.get(C);ce.light=W}return C}function U(G,z,W,N,C){if(G.visible===!1)return;if(G.layers.test(z.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&C===ya)&&(!G.frustumCulled||s.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,G.matrixWorld);const oe=e.update(G),xe=G.material;if(Array.isArray(xe)){const pe=oe.groups;for(let I=0,K=pe.length;I<K;I++){const Y=pe[I],Ee=xe[Y.materialIndex];if(Ee&&Ee.visible){const O=D(G,Ee,N,C);G.onBeforeShadow(a,G,z,W,oe,O,Y),a.renderBufferDirect(W,null,oe,O,G,Y),G.onAfterShadow(a,G,z,W,oe,O,Y)}}}else if(xe.visible){const pe=D(G,xe,N,C);G.onBeforeShadow(a,G,z,W,oe,pe,null),a.renderBufferDirect(W,null,oe,pe,G,null),G.onAfterShadow(a,G,z,W,oe,pe,null)}}const ce=G.children;for(let oe=0,xe=ce.length;oe<xe;oe++)U(ce[oe],z,W,N,C)}function F(G){G.target.removeEventListener("dispose",F);for(const W in m){const N=m[W],C=G.target.uuid;C in N&&(N[C].dispose(),delete N[C])}}}const qw={[_u]:xu,[pl]:Su,[qs]:ml,[Zr]:yu,[xu]:_u,[Su]:pl,[ml]:qs,[yu]:Zr};function Yw(a,e){function n(){let j=!1;const Le=new $t;let le=null;const ve=new $t(0,0,0,0);return{setMask:function(Ie){le!==Ie&&!j&&(a.colorMask(Ie,Ie,Ie,Ie),le=Ie)},setLocked:function(Ie){j=Ie},setClear:function(Ie,Pe,at,Wt,sn){sn===!0&&(Ie*=Wt,Pe*=Wt,at*=Wt),Le.set(Ie,Pe,at,Wt),ve.equals(Le)===!1&&(a.clearColor(Ie,Pe,at,Wt),ve.copy(Le))},reset:function(){j=!1,le=null,ve.set(-1,0,0,0)}}}function s(){let j=!1,Le=!1,le=null,ve=null,Ie=null;return{setReversed:function(Pe){if(Le!==Pe){const at=e.get("EXT_clip_control");Pe?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT),Le=Pe;const Wt=Ie;Ie=null,this.setClear(Wt)}},getReversed:function(){return Le},setTest:function(Pe){Pe?Ae(a.DEPTH_TEST):Ne(a.DEPTH_TEST)},setMask:function(Pe){le!==Pe&&!j&&(a.depthMask(Pe),le=Pe)},setFunc:function(Pe){if(Le&&(Pe=qw[Pe]),ve!==Pe){switch(Pe){case _u:a.depthFunc(a.NEVER);break;case xu:a.depthFunc(a.ALWAYS);break;case pl:a.depthFunc(a.LESS);break;case Zr:a.depthFunc(a.LEQUAL);break;case qs:a.depthFunc(a.EQUAL);break;case yu:a.depthFunc(a.GEQUAL);break;case Su:a.depthFunc(a.GREATER);break;case ml:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}ve=Pe}},setLocked:function(Pe){j=Pe},setClear:function(Pe){Ie!==Pe&&(Le&&(Pe=1-Pe),a.clearDepth(Pe),Ie=Pe)},reset:function(){j=!1,le=null,ve=null,Ie=null,Le=!1}}}function l(){let j=!1,Le=null,le=null,ve=null,Ie=null,Pe=null,at=null,Wt=null,sn=null;return{setTest:function(Tt){j||(Tt?Ae(a.STENCIL_TEST):Ne(a.STENCIL_TEST))},setMask:function(Tt){Le!==Tt&&!j&&(a.stencilMask(Tt),Le=Tt)},setFunc:function(Tt,ei,_n){(le!==Tt||ve!==ei||Ie!==_n)&&(a.stencilFunc(Tt,ei,_n),le=Tt,ve=ei,Ie=_n)},setOp:function(Tt,ei,_n){(Pe!==Tt||at!==ei||Wt!==_n)&&(a.stencilOp(Tt,ei,_n),Pe=Tt,at=ei,Wt=_n)},setLocked:function(Tt){j=Tt},setClear:function(Tt){sn!==Tt&&(a.clearStencil(Tt),sn=Tt)},reset:function(){j=!1,Le=null,le=null,ve=null,Ie=null,Pe=null,at=null,Wt=null,sn=null}}}const c=new n,f=new s,d=new l,p=new WeakMap,m=new WeakMap;let g={},_={},x=new WeakMap,b=[],M=null,A=!1,S=null,v=null,L=null,D=null,U=null,F=null,G=null,z=new Dt(0,0,0),W=0,N=!1,C=null,k=null,ce=null,oe=null,xe=null;const pe=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,K=0;const Y=a.getParameter(a.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),I=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),I=K>=2);let Ee=null,O={};const ee=a.getParameter(a.SCISSOR_BOX),ye=a.getParameter(a.VIEWPORT),be=new $t().fromArray(ee),$=new $t().fromArray(ye);function me(j,Le,le,ve){const Ie=new Uint8Array(4),Pe=a.createTexture();a.bindTexture(j,Pe),a.texParameteri(j,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(j,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let at=0;at<le;at++)j===a.TEXTURE_3D||j===a.TEXTURE_2D_ARRAY?a.texImage3D(Le,0,a.RGBA,1,1,ve,0,a.RGBA,a.UNSIGNED_BYTE,Ie):a.texImage2D(Le+at,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ie);return Pe}const Se={};Se[a.TEXTURE_2D]=me(a.TEXTURE_2D,a.TEXTURE_2D,1),Se[a.TEXTURE_CUBE_MAP]=me(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[a.TEXTURE_2D_ARRAY]=me(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Se[a.TEXTURE_3D]=me(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),Ae(a.DEPTH_TEST),f.setFunc(Zr),_t(!1),it(_0),Ae(a.CULL_FACE),H(Xn);function Ae(j){g[j]!==!0&&(a.enable(j),g[j]=!0)}function Ne(j){g[j]!==!1&&(a.disable(j),g[j]=!1)}function lt(j,Le){return _[j]!==Le?(a.bindFramebuffer(j,Le),_[j]=Le,j===a.DRAW_FRAMEBUFFER&&(_[a.FRAMEBUFFER]=Le),j===a.FRAMEBUFFER&&(_[a.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ke(j,Le){let le=b,ve=!1;if(j){le=x.get(Le),le===void 0&&(le=[],x.set(Le,le));const Ie=j.textures;if(le.length!==Ie.length||le[0]!==a.COLOR_ATTACHMENT0){for(let Pe=0,at=Ie.length;Pe<at;Pe++)le[Pe]=a.COLOR_ATTACHMENT0+Pe;le.length=Ie.length,ve=!0}}else le[0]!==a.BACK&&(le[0]=a.BACK,ve=!0);ve&&a.drawBuffers(le)}function Xt(j){return M!==j?(a.useProgram(j),M=j,!0):!1}const Vt={[Xr]:a.FUNC_ADD,[rb]:a.FUNC_SUBTRACT,[sb]:a.FUNC_REVERSE_SUBTRACT};Vt[ob]=a.MIN,Vt[lb]=a.MAX;const dt={[cb]:a.ZERO,[ub]:a.ONE,[fb]:a.SRC_COLOR,[Th]:a.SRC_ALPHA,[vb]:a.SRC_ALPHA_SATURATE,[mb]:a.DST_COLOR,[hb]:a.DST_ALPHA,[db]:a.ONE_MINUS_SRC_COLOR,[wh]:a.ONE_MINUS_SRC_ALPHA,[gb]:a.ONE_MINUS_DST_COLOR,[pb]:a.ONE_MINUS_DST_ALPHA,[_b]:a.CONSTANT_COLOR,[xb]:a.ONE_MINUS_CONSTANT_COLOR,[yb]:a.CONSTANT_ALPHA,[Sb]:a.ONE_MINUS_CONSTANT_ALPHA};function H(j,Le,le,ve,Ie,Pe,at,Wt,sn,Tt){if(j===Xn){A===!0&&(Ne(a.BLEND),A=!1);return}if(A===!1&&(Ae(a.BLEND),A=!0),j!==ab){if(j!==S||Tt!==N){if((v!==Xr||U!==Xr)&&(a.blendEquation(a.FUNC_ADD),v=Xr,U=Xr),Tt)switch(j){case Xs:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case x0:a.blendFunc(a.ONE,a.ONE);break;case y0:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case S0:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case Xs:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case x0:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case y0:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case S0:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}L=null,D=null,F=null,G=null,z.set(0,0,0),W=0,S=j,N=Tt}return}Ie=Ie||Le,Pe=Pe||le,at=at||ve,(Le!==v||Ie!==U)&&(a.blendEquationSeparate(Vt[Le],Vt[Ie]),v=Le,U=Ie),(le!==L||ve!==D||Pe!==F||at!==G)&&(a.blendFuncSeparate(dt[le],dt[ve],dt[Pe],dt[at]),L=le,D=ve,F=Pe,G=at),(Wt.equals(z)===!1||sn!==W)&&(a.blendColor(Wt.r,Wt.g,Wt.b,sn),z.copy(Wt),W=sn),S=j,N=!1}function Wn(j,Le){j.side===ui?Ne(a.CULL_FACE):Ae(a.CULL_FACE);let le=j.side===Mn;Le&&(le=!le),_t(le),j.blending===Xs&&j.transparent===!1?H(Xn):H(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),f.setFunc(j.depthFunc),f.setTest(j.depthTest),f.setMask(j.depthWrite),c.setMask(j.colorWrite);const ve=j.stencilWrite;d.setTest(ve),ve&&(d.setMask(j.stencilWriteMask),d.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),d.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Bt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?Ae(a.SAMPLE_ALPHA_TO_COVERAGE):Ne(a.SAMPLE_ALPHA_TO_COVERAGE)}function _t(j){C!==j&&(j?a.frontFace(a.CW):a.frontFace(a.CCW),C=j)}function it(j){j!==tb?(Ae(a.CULL_FACE),j!==k&&(j===_0?a.cullFace(a.BACK):j===nb?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Ne(a.CULL_FACE),k=j}function Xe(j){j!==ce&&(I&&a.lineWidth(j),ce=j)}function Bt(j,Le,le){j?(Ae(a.POLYGON_OFFSET_FILL),(oe!==Le||xe!==le)&&(a.polygonOffset(Le,le),oe=Le,xe=le)):Ne(a.POLYGON_OFFSET_FILL)}function Ve(j){j?Ae(a.SCISSOR_TEST):Ne(a.SCISSOR_TEST)}function P(j){j===void 0&&(j=a.TEXTURE0+pe-1),Ee!==j&&(a.activeTexture(j),Ee=j)}function w(j,Le,le){le===void 0&&(Ee===null?le=a.TEXTURE0+pe-1:le=Ee);let ve=O[le];ve===void 0&&(ve={type:void 0,texture:void 0},O[le]=ve),(ve.type!==j||ve.texture!==Le)&&(Ee!==le&&(a.activeTexture(le),Ee=le),a.bindTexture(j,Le||Se[j]),ve.type=j,ve.texture=Le)}function te(){const j=O[Ee];j!==void 0&&j.type!==void 0&&(a.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function ge(){try{a.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Me(){try{a.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function fe(){try{a.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Oe(){try{a.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Re(){try{a.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ge(){try{a.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Je(){try{a.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function we(){try{a.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Fe(){try{a.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ye(){try{a.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Qe(j){be.equals(j)===!1&&(a.scissor(j.x,j.y,j.z,j.w),be.copy(j))}function Be(j){$.equals(j)===!1&&(a.viewport(j.x,j.y,j.z,j.w),$.copy(j))}function ut(j,Le){let le=m.get(Le);le===void 0&&(le=new WeakMap,m.set(Le,le));let ve=le.get(j);ve===void 0&&(ve=a.getUniformBlockIndex(Le,j.name),le.set(j,ve))}function nt(j,Le){const ve=m.get(Le).get(j);p.get(Le)!==ve&&(a.uniformBlockBinding(Le,ve,j.__bindingPointIndex),p.set(Le,ve))}function It(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),f.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),g={},Ee=null,O={},_={},x=new WeakMap,b=[],M=null,A=!1,S=null,v=null,L=null,D=null,U=null,F=null,G=null,z=new Dt(0,0,0),W=0,N=!1,C=null,k=null,ce=null,oe=null,xe=null,be.set(0,0,a.canvas.width,a.canvas.height),$.set(0,0,a.canvas.width,a.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:Ae,disable:Ne,bindFramebuffer:lt,drawBuffers:Ke,useProgram:Xt,setBlending:H,setMaterial:Wn,setFlipSided:_t,setCullFace:it,setLineWidth:Xe,setPolygonOffset:Bt,setScissorTest:Ve,activeTexture:P,bindTexture:w,unbindTexture:te,compressedTexImage2D:ge,compressedTexImage3D:Me,texImage2D:Fe,texImage3D:Ye,updateUBOMapping:ut,uniformBlockBinding:nt,texStorage2D:Je,texStorage3D:we,texSubImage2D:fe,texSubImage3D:Oe,compressedTexSubImage2D:Re,compressedTexSubImage3D:Ge,scissor:Qe,viewport:Be,reset:It}}function Zw(a,e,n,s,l,c,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new rt,g=new WeakMap;let _;const x=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(P,w){return b?new OffscreenCanvas(P,w):Mu("canvas")}function A(P,w,te){let ge=1;const Me=Ve(P);if((Me.width>te||Me.height>te)&&(ge=te/Math.max(Me.width,Me.height)),ge<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const fe=Math.floor(ge*Me.width),Oe=Math.floor(ge*Me.height);_===void 0&&(_=M(fe,Oe));const Re=w?M(fe,Oe):_;return Re.width=fe,Re.height=Oe,Re.getContext("2d").drawImage(P,0,0,fe,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+fe+"x"+Oe+")."),Re}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),P;return P}function S(P){return P.generateMipmaps}function v(P){a.generateMipmap(P)}function L(P){return P.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?a.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function D(P,w,te,ge,Me=!1){if(P!==null){if(a[P]!==void 0)return a[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let fe=w;if(w===a.RED&&(te===a.FLOAT&&(fe=a.R32F),te===a.HALF_FLOAT&&(fe=a.R16F),te===a.UNSIGNED_BYTE&&(fe=a.R8)),w===a.RED_INTEGER&&(te===a.UNSIGNED_BYTE&&(fe=a.R8UI),te===a.UNSIGNED_SHORT&&(fe=a.R16UI),te===a.UNSIGNED_INT&&(fe=a.R32UI),te===a.BYTE&&(fe=a.R8I),te===a.SHORT&&(fe=a.R16I),te===a.INT&&(fe=a.R32I)),w===a.RG&&(te===a.FLOAT&&(fe=a.RG32F),te===a.HALF_FLOAT&&(fe=a.RG16F),te===a.UNSIGNED_BYTE&&(fe=a.RG8)),w===a.RG_INTEGER&&(te===a.UNSIGNED_BYTE&&(fe=a.RG8UI),te===a.UNSIGNED_SHORT&&(fe=a.RG16UI),te===a.UNSIGNED_INT&&(fe=a.RG32UI),te===a.BYTE&&(fe=a.RG8I),te===a.SHORT&&(fe=a.RG16I),te===a.INT&&(fe=a.RG32I)),w===a.RGB_INTEGER&&(te===a.UNSIGNED_BYTE&&(fe=a.RGB8UI),te===a.UNSIGNED_SHORT&&(fe=a.RGB16UI),te===a.UNSIGNED_INT&&(fe=a.RGB32UI),te===a.BYTE&&(fe=a.RGB8I),te===a.SHORT&&(fe=a.RGB16I),te===a.INT&&(fe=a.RGB32I)),w===a.RGBA_INTEGER&&(te===a.UNSIGNED_BYTE&&(fe=a.RGBA8UI),te===a.UNSIGNED_SHORT&&(fe=a.RGBA16UI),te===a.UNSIGNED_INT&&(fe=a.RGBA32UI),te===a.BYTE&&(fe=a.RGBA8I),te===a.SHORT&&(fe=a.RGBA16I),te===a.INT&&(fe=a.RGBA32I)),w===a.RGB&&te===a.UNSIGNED_INT_5_9_9_9_REV&&(fe=a.RGB9_E5),w===a.RGBA){const Oe=Me?bu:Rt.getTransfer(ge);te===a.FLOAT&&(fe=a.RGBA32F),te===a.HALF_FLOAT&&(fe=a.RGBA16F),te===a.UNSIGNED_BYTE&&(fe=Oe===Gt?a.SRGB8_ALPHA8:a.RGBA8),te===a.UNSIGNED_SHORT_4_4_4_4&&(fe=a.RGBA4),te===a.UNSIGNED_SHORT_5_5_5_1&&(fe=a.RGB5_A1)}return(fe===a.R16F||fe===a.R32F||fe===a.RG16F||fe===a.RG32F||fe===a.RGBA16F||fe===a.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function U(P,w){let te;return P?w===null||w===mr||w===Ks?te=a.DEPTH24_STENCIL8:w===Sa?te=a.DEPTH32F_STENCIL8:w===gl&&(te=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===mr||w===Ks?te=a.DEPTH_COMPONENT24:w===Sa?te=a.DEPTH_COMPONENT32F:w===gl&&(te=a.DEPTH_COMPONENT16),te}function F(P,w){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==hi&&P.minFilter!==Jn?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function G(P){const w=P.target;w.removeEventListener("dispose",G),W(w),w.isVideoTexture&&g.delete(w)}function z(P){const w=P.target;w.removeEventListener("dispose",z),C(w)}function W(P){const w=s.get(P);if(w.__webglInit===void 0)return;const te=P.source,ge=x.get(te);if(ge){const Me=ge[w.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&N(P),Object.keys(ge).length===0&&x.delete(te)}s.remove(P)}function N(P){const w=s.get(P);a.deleteTexture(w.__webglTexture);const te=P.source,ge=x.get(te);delete ge[w.__cacheKey],f.memory.textures--}function C(P){const w=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(w.__webglFramebuffer[ge]))for(let Me=0;Me<w.__webglFramebuffer[ge].length;Me++)a.deleteFramebuffer(w.__webglFramebuffer[ge][Me]);else a.deleteFramebuffer(w.__webglFramebuffer[ge]);w.__webglDepthbuffer&&a.deleteRenderbuffer(w.__webglDepthbuffer[ge])}else{if(Array.isArray(w.__webglFramebuffer))for(let ge=0;ge<w.__webglFramebuffer.length;ge++)a.deleteFramebuffer(w.__webglFramebuffer[ge]);else a.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&a.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&a.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ge=0;ge<w.__webglColorRenderbuffer.length;ge++)w.__webglColorRenderbuffer[ge]&&a.deleteRenderbuffer(w.__webglColorRenderbuffer[ge]);w.__webglDepthRenderbuffer&&a.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const te=P.textures;for(let ge=0,Me=te.length;ge<Me;ge++){const fe=s.get(te[ge]);fe.__webglTexture&&(a.deleteTexture(fe.__webglTexture),f.memory.textures--),s.remove(te[ge])}s.remove(P)}let k=0;function ce(){k=0}function oe(){const P=k;return P>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),k+=1,P}function xe(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function pe(P,w){const te=s.get(P);if(P.isVideoTexture&&Xe(P),P.isRenderTargetTexture===!1&&P.version>0&&te.__version!==P.version){const ge=P.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(te,P,w);return}}n.bindTexture(a.TEXTURE_2D,te.__webglTexture,a.TEXTURE0+w)}function I(P,w){const te=s.get(P);if(P.version>0&&te.__version!==P.version){$(te,P,w);return}n.bindTexture(a.TEXTURE_2D_ARRAY,te.__webglTexture,a.TEXTURE0+w)}function K(P,w){const te=s.get(P);if(P.version>0&&te.__version!==P.version){$(te,P,w);return}n.bindTexture(a.TEXTURE_3D,te.__webglTexture,a.TEXTURE0+w)}function Y(P,w){const te=s.get(P);if(P.version>0&&te.__version!==P.version){me(te,P,w);return}n.bindTexture(a.TEXTURE_CUBE_MAP,te.__webglTexture,a.TEXTURE0+w)}const Ee={[Ch]:a.REPEAT,[qr]:a.CLAMP_TO_EDGE,[Dh]:a.MIRRORED_REPEAT},O={[hi]:a.NEAREST,[Ub]:a.NEAREST_MIPMAP_NEAREST,[Fc]:a.NEAREST_MIPMAP_LINEAR,[Jn]:a.LINEAR,[kd]:a.LINEAR_MIPMAP_NEAREST,[Yr]:a.LINEAR_MIPMAP_LINEAR},ee={[Pb]:a.NEVER,[Hb]:a.ALWAYS,[Ob]:a.LESS,[W_]:a.LEQUAL,[Bb]:a.EQUAL,[Fb]:a.GEQUAL,[Ib]:a.GREATER,[zb]:a.NOTEQUAL};function ye(P,w){if(w.type===Sa&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Jn||w.magFilter===kd||w.magFilter===Fc||w.magFilter===Yr||w.minFilter===Jn||w.minFilter===kd||w.minFilter===Fc||w.minFilter===Yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(P,a.TEXTURE_WRAP_S,Ee[w.wrapS]),a.texParameteri(P,a.TEXTURE_WRAP_T,Ee[w.wrapT]),(P===a.TEXTURE_3D||P===a.TEXTURE_2D_ARRAY)&&a.texParameteri(P,a.TEXTURE_WRAP_R,Ee[w.wrapR]),a.texParameteri(P,a.TEXTURE_MAG_FILTER,O[w.magFilter]),a.texParameteri(P,a.TEXTURE_MIN_FILTER,O[w.minFilter]),w.compareFunction&&(a.texParameteri(P,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(P,a.TEXTURE_COMPARE_FUNC,ee[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===hi||w.minFilter!==Fc&&w.minFilter!==Yr||w.type===Sa&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||s.get(w).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");a.texParameterf(P,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,l.getMaxAnisotropy())),s.get(w).__currentAnisotropy=w.anisotropy}}}function be(P,w){let te=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",G));const ge=w.source;let Me=x.get(ge);Me===void 0&&(Me={},x.set(ge,Me));const fe=xe(w);if(fe!==P.__cacheKey){Me[fe]===void 0&&(Me[fe]={texture:a.createTexture(),usedTimes:0},f.memory.textures++,te=!0),Me[fe].usedTimes++;const Oe=Me[P.__cacheKey];Oe!==void 0&&(Me[P.__cacheKey].usedTimes--,Oe.usedTimes===0&&N(w)),P.__cacheKey=fe,P.__webglTexture=Me[fe].texture}return te}function $(P,w,te){let ge=a.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ge=a.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ge=a.TEXTURE_3D);const Me=be(P,w),fe=w.source;n.bindTexture(ge,P.__webglTexture,a.TEXTURE0+te);const Oe=s.get(fe);if(fe.version!==Oe.__version||Me===!0){n.activeTexture(a.TEXTURE0+te);const Re=Rt.getPrimaries(Rt.workingColorSpace),Ge=w.colorSpace===ki?null:Rt.getPrimaries(w.colorSpace),Je=w.colorSpace===ki||Re===Ge?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,w.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,w.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let we=A(w.image,!1,l.maxTextureSize);we=Bt(w,we);const Fe=c.convert(w.format,w.colorSpace),Ye=c.convert(w.type);let Qe=D(w.internalFormat,Fe,Ye,w.colorSpace,w.isVideoTexture);ye(ge,w);let Be;const ut=w.mipmaps,nt=w.isVideoTexture!==!0,It=Oe.__version===void 0||Me===!0,j=fe.dataReady,Le=F(w,we);if(w.isDepthTexture)Qe=U(w.format===Qs,w.type),It&&(nt?n.texStorage2D(a.TEXTURE_2D,1,Qe,we.width,we.height):n.texImage2D(a.TEXTURE_2D,0,Qe,we.width,we.height,0,Fe,Ye,null));else if(w.isDataTexture)if(ut.length>0){nt&&It&&n.texStorage2D(a.TEXTURE_2D,Le,Qe,ut[0].width,ut[0].height);for(let le=0,ve=ut.length;le<ve;le++)Be=ut[le],nt?j&&n.texSubImage2D(a.TEXTURE_2D,le,0,0,Be.width,Be.height,Fe,Ye,Be.data):n.texImage2D(a.TEXTURE_2D,le,Qe,Be.width,Be.height,0,Fe,Ye,Be.data);w.generateMipmaps=!1}else nt?(It&&n.texStorage2D(a.TEXTURE_2D,Le,Qe,we.width,we.height),j&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,we.width,we.height,Fe,Ye,we.data)):n.texImage2D(a.TEXTURE_2D,0,Qe,we.width,we.height,0,Fe,Ye,we.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){nt&&It&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Le,Qe,ut[0].width,ut[0].height,we.depth);for(let le=0,ve=ut.length;le<ve;le++)if(Be=ut[le],w.format!==Pi)if(Fe!==null)if(nt){if(j)if(w.layerUpdates.size>0){const Ie=V0(Be.width,Be.height,w.format,w.type);for(const Pe of w.layerUpdates){const at=Be.data.subarray(Pe*Ie/Be.data.BYTES_PER_ELEMENT,(Pe+1)*Ie/Be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,le,0,0,Pe,Be.width,Be.height,1,Fe,at)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,le,0,0,0,Be.width,Be.height,we.depth,Fe,Be.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,le,Qe,Be.width,Be.height,we.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?j&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,le,0,0,0,Be.width,Be.height,we.depth,Fe,Ye,Be.data):n.texImage3D(a.TEXTURE_2D_ARRAY,le,Qe,Be.width,Be.height,we.depth,0,Fe,Ye,Be.data)}else{nt&&It&&n.texStorage2D(a.TEXTURE_2D,Le,Qe,ut[0].width,ut[0].height);for(let le=0,ve=ut.length;le<ve;le++)Be=ut[le],w.format!==Pi?Fe!==null?nt?j&&n.compressedTexSubImage2D(a.TEXTURE_2D,le,0,0,Be.width,Be.height,Fe,Be.data):n.compressedTexImage2D(a.TEXTURE_2D,le,Qe,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?j&&n.texSubImage2D(a.TEXTURE_2D,le,0,0,Be.width,Be.height,Fe,Ye,Be.data):n.texImage2D(a.TEXTURE_2D,le,Qe,Be.width,Be.height,0,Fe,Ye,Be.data)}else if(w.isDataArrayTexture)if(nt){if(It&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Le,Qe,we.width,we.height,we.depth),j)if(w.layerUpdates.size>0){const le=V0(we.width,we.height,w.format,w.type);for(const ve of w.layerUpdates){const Ie=we.data.subarray(ve*le/we.data.BYTES_PER_ELEMENT,(ve+1)*le/we.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,ve,we.width,we.height,1,Fe,Ye,Ie)}w.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Fe,Ye,we.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,Qe,we.width,we.height,we.depth,0,Fe,Ye,we.data);else if(w.isData3DTexture)nt?(It&&n.texStorage3D(a.TEXTURE_3D,Le,Qe,we.width,we.height,we.depth),j&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Fe,Ye,we.data)):n.texImage3D(a.TEXTURE_3D,0,Qe,we.width,we.height,we.depth,0,Fe,Ye,we.data);else if(w.isFramebufferTexture){if(It)if(nt)n.texStorage2D(a.TEXTURE_2D,Le,Qe,we.width,we.height);else{let le=we.width,ve=we.height;for(let Ie=0;Ie<Le;Ie++)n.texImage2D(a.TEXTURE_2D,Ie,Qe,le,ve,0,Fe,Ye,null),le>>=1,ve>>=1}}else if(ut.length>0){if(nt&&It){const le=Ve(ut[0]);n.texStorage2D(a.TEXTURE_2D,Le,Qe,le.width,le.height)}for(let le=0,ve=ut.length;le<ve;le++)Be=ut[le],nt?j&&n.texSubImage2D(a.TEXTURE_2D,le,0,0,Fe,Ye,Be):n.texImage2D(a.TEXTURE_2D,le,Qe,Fe,Ye,Be);w.generateMipmaps=!1}else if(nt){if(It){const le=Ve(we);n.texStorage2D(a.TEXTURE_2D,Le,Qe,le.width,le.height)}j&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,Fe,Ye,we)}else n.texImage2D(a.TEXTURE_2D,0,Qe,Fe,Ye,we);S(w)&&v(ge),Oe.__version=fe.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function me(P,w,te){if(w.image.length!==6)return;const ge=be(P,w),Me=w.source;n.bindTexture(a.TEXTURE_CUBE_MAP,P.__webglTexture,a.TEXTURE0+te);const fe=s.get(Me);if(Me.version!==fe.__version||ge===!0){n.activeTexture(a.TEXTURE0+te);const Oe=Rt.getPrimaries(Rt.workingColorSpace),Re=w.colorSpace===ki?null:Rt.getPrimaries(w.colorSpace),Ge=w.colorSpace===ki||Oe===Re?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,w.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,w.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);const Je=w.isCompressedTexture||w.image[0].isCompressedTexture,we=w.image[0]&&w.image[0].isDataTexture,Fe=[];for(let ve=0;ve<6;ve++)!Je&&!we?Fe[ve]=A(w.image[ve],!0,l.maxCubemapSize):Fe[ve]=we?w.image[ve].image:w.image[ve],Fe[ve]=Bt(w,Fe[ve]);const Ye=Fe[0],Qe=c.convert(w.format,w.colorSpace),Be=c.convert(w.type),ut=D(w.internalFormat,Qe,Be,w.colorSpace),nt=w.isVideoTexture!==!0,It=fe.__version===void 0||ge===!0,j=Me.dataReady;let Le=F(w,Ye);ye(a.TEXTURE_CUBE_MAP,w);let le;if(Je){nt&&It&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Le,ut,Ye.width,Ye.height);for(let ve=0;ve<6;ve++){le=Fe[ve].mipmaps;for(let Ie=0;Ie<le.length;Ie++){const Pe=le[Ie];w.format!==Pi?Qe!==null?nt?j&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie,0,0,Pe.width,Pe.height,Qe,Pe.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie,ut,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?j&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie,0,0,Pe.width,Pe.height,Qe,Be,Pe.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie,ut,Pe.width,Pe.height,0,Qe,Be,Pe.data)}}}else{if(le=w.mipmaps,nt&&It){le.length>0&&Le++;const ve=Ve(Fe[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,Le,ut,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(we){nt?j&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Fe[ve].width,Fe[ve].height,Qe,Be,Fe[ve].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ut,Fe[ve].width,Fe[ve].height,0,Qe,Be,Fe[ve].data);for(let Ie=0;Ie<le.length;Ie++){const at=le[Ie].image[ve].image;nt?j&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie+1,0,0,at.width,at.height,Qe,Be,at.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie+1,ut,at.width,at.height,0,Qe,Be,at.data)}}else{nt?j&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Qe,Be,Fe[ve]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ut,Qe,Be,Fe[ve]);for(let Ie=0;Ie<le.length;Ie++){const Pe=le[Ie];nt?j&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie+1,0,0,Qe,Be,Pe.image[ve]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie+1,ut,Qe,Be,Pe.image[ve])}}}S(w)&&v(a.TEXTURE_CUBE_MAP),fe.__version=Me.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Se(P,w,te,ge,Me,fe){const Oe=c.convert(te.format,te.colorSpace),Re=c.convert(te.type),Ge=D(te.internalFormat,Oe,Re,te.colorSpace),Je=s.get(w),we=s.get(te);if(we.__renderTarget=w,!Je.__hasExternalTextures){const Fe=Math.max(1,w.width>>fe),Ye=Math.max(1,w.height>>fe);Me===a.TEXTURE_3D||Me===a.TEXTURE_2D_ARRAY?n.texImage3D(Me,fe,Ge,Fe,Ye,w.depth,0,Oe,Re,null):n.texImage2D(Me,fe,Ge,Fe,Ye,0,Oe,Re,null)}n.bindFramebuffer(a.FRAMEBUFFER,P),it(w)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ge,Me,we.__webglTexture,0,_t(w)):(Me===a.TEXTURE_2D||Me>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ge,Me,we.__webglTexture,fe),n.bindFramebuffer(a.FRAMEBUFFER,null)}function Ae(P,w,te){if(a.bindRenderbuffer(a.RENDERBUFFER,P),w.depthBuffer){const ge=w.depthTexture,Me=ge&&ge.isDepthTexture?ge.type:null,fe=U(w.stencilBuffer,Me),Oe=w.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Re=_t(w);it(w)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Re,fe,w.width,w.height):te?a.renderbufferStorageMultisample(a.RENDERBUFFER,Re,fe,w.width,w.height):a.renderbufferStorage(a.RENDERBUFFER,fe,w.width,w.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Oe,a.RENDERBUFFER,P)}else{const ge=w.textures;for(let Me=0;Me<ge.length;Me++){const fe=ge[Me],Oe=c.convert(fe.format,fe.colorSpace),Re=c.convert(fe.type),Ge=D(fe.internalFormat,Oe,Re,fe.colorSpace),Je=_t(w);te&&it(w)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Je,Ge,w.width,w.height):it(w)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Je,Ge,w.width,w.height):a.renderbufferStorage(a.RENDERBUFFER,Ge,w.width,w.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Ne(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(a.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=s.get(w.depthTexture);ge.__renderTarget=w,(!ge.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),pe(w.depthTexture,0);const Me=ge.__webglTexture,fe=_t(w);if(w.depthTexture.format===vl)it(w)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Me,0,fe):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Me,0);else if(w.depthTexture.format===Qs)it(w)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Me,0,fe):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Me,0);else throw new Error("Unknown depthTexture format")}function lt(P){const w=s.get(P),te=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const ge=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ge){const Me=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ge.removeEventListener("dispose",Me)};ge.addEventListener("dispose",Me),w.__depthDisposeCallback=Me}w.__boundDepthTexture=ge}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");const ge=P.texture.mipmaps;ge&&ge.length>0?Ne(w.__webglFramebuffer[0],P):Ne(w.__webglFramebuffer,P)}else if(te){w.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(n.bindFramebuffer(a.FRAMEBUFFER,w.__webglFramebuffer[ge]),w.__webglDepthbuffer[ge]===void 0)w.__webglDepthbuffer[ge]=a.createRenderbuffer(),Ae(w.__webglDepthbuffer[ge],P,!1);else{const Me=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,fe=w.__webglDepthbuffer[ge];a.bindRenderbuffer(a.RENDERBUFFER,fe),a.framebufferRenderbuffer(a.FRAMEBUFFER,Me,a.RENDERBUFFER,fe)}}else{const ge=P.texture.mipmaps;if(ge&&ge.length>0?n.bindFramebuffer(a.FRAMEBUFFER,w.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=a.createRenderbuffer(),Ae(w.__webglDepthbuffer,P,!1);else{const Me=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,fe=w.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,fe),a.framebufferRenderbuffer(a.FRAMEBUFFER,Me,a.RENDERBUFFER,fe)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function Ke(P,w,te){const ge=s.get(P);w!==void 0&&Se(ge.__webglFramebuffer,P,P.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),te!==void 0&&lt(P)}function Xt(P){const w=P.texture,te=s.get(P),ge=s.get(w);P.addEventListener("dispose",z);const Me=P.textures,fe=P.isWebGLCubeRenderTarget===!0,Oe=Me.length>1;if(Oe||(ge.__webglTexture===void 0&&(ge.__webglTexture=a.createTexture()),ge.__version=w.version,f.memory.textures++),fe){te.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(w.mipmaps&&w.mipmaps.length>0){te.__webglFramebuffer[Re]=[];for(let Ge=0;Ge<w.mipmaps.length;Ge++)te.__webglFramebuffer[Re][Ge]=a.createFramebuffer()}else te.__webglFramebuffer[Re]=a.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){te.__webglFramebuffer=[];for(let Re=0;Re<w.mipmaps.length;Re++)te.__webglFramebuffer[Re]=a.createFramebuffer()}else te.__webglFramebuffer=a.createFramebuffer();if(Oe)for(let Re=0,Ge=Me.length;Re<Ge;Re++){const Je=s.get(Me[Re]);Je.__webglTexture===void 0&&(Je.__webglTexture=a.createTexture(),f.memory.textures++)}if(P.samples>0&&it(P)===!1){te.__webglMultisampledFramebuffer=a.createFramebuffer(),te.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Re=0;Re<Me.length;Re++){const Ge=Me[Re];te.__webglColorRenderbuffer[Re]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,te.__webglColorRenderbuffer[Re]);const Je=c.convert(Ge.format,Ge.colorSpace),we=c.convert(Ge.type),Fe=D(Ge.internalFormat,Je,we,Ge.colorSpace,P.isXRRenderTarget===!0),Ye=_t(P);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ye,Fe,P.width,P.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Re,a.RENDERBUFFER,te.__webglColorRenderbuffer[Re])}a.bindRenderbuffer(a.RENDERBUFFER,null),P.depthBuffer&&(te.__webglDepthRenderbuffer=a.createRenderbuffer(),Ae(te.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(fe){n.bindTexture(a.TEXTURE_CUBE_MAP,ge.__webglTexture),ye(a.TEXTURE_CUBE_MAP,w);for(let Re=0;Re<6;Re++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ge=0;Ge<w.mipmaps.length;Ge++)Se(te.__webglFramebuffer[Re][Ge],P,w,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ge);else Se(te.__webglFramebuffer[Re],P,w,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);S(w)&&v(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Oe){for(let Re=0,Ge=Me.length;Re<Ge;Re++){const Je=Me[Re],we=s.get(Je);n.bindTexture(a.TEXTURE_2D,we.__webglTexture),ye(a.TEXTURE_2D,Je),Se(te.__webglFramebuffer,P,Je,a.COLOR_ATTACHMENT0+Re,a.TEXTURE_2D,0),S(Je)&&v(a.TEXTURE_2D)}n.unbindTexture()}else{let Re=a.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Re=P.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Re,ge.__webglTexture),ye(Re,w),w.mipmaps&&w.mipmaps.length>0)for(let Ge=0;Ge<w.mipmaps.length;Ge++)Se(te.__webglFramebuffer[Ge],P,w,a.COLOR_ATTACHMENT0,Re,Ge);else Se(te.__webglFramebuffer,P,w,a.COLOR_ATTACHMENT0,Re,0);S(w)&&v(Re),n.unbindTexture()}P.depthBuffer&&lt(P)}function Vt(P){const w=P.textures;for(let te=0,ge=w.length;te<ge;te++){const Me=w[te];if(S(Me)){const fe=L(P),Oe=s.get(Me).__webglTexture;n.bindTexture(fe,Oe),v(fe),n.unbindTexture()}}}const dt=[],H=[];function Wn(P){if(P.samples>0){if(it(P)===!1){const w=P.textures,te=P.width,ge=P.height;let Me=a.COLOR_BUFFER_BIT;const fe=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Oe=s.get(P),Re=w.length>1;if(Re)for(let Je=0;Je<w.length;Je++)n.bindFramebuffer(a.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Je,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,Oe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Je,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const Ge=P.texture.mipmaps;Ge&&Ge.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Je=0;Je<w.length;Je++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Me|=a.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Me|=a.STENCIL_BUFFER_BIT)),Re){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Oe.__webglColorRenderbuffer[Je]);const we=s.get(w[Je]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,we,0)}a.blitFramebuffer(0,0,te,ge,0,0,te,ge,Me,a.NEAREST),p===!0&&(dt.length=0,H.length=0,dt.push(a.COLOR_ATTACHMENT0+Je),P.depthBuffer&&P.resolveDepthBuffer===!1&&(dt.push(fe),H.push(fe),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,H)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,dt))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Re)for(let Je=0;Je<w.length;Je++){n.bindFramebuffer(a.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Je,a.RENDERBUFFER,Oe.__webglColorRenderbuffer[Je]);const we=s.get(w[Je]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,Oe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Je,a.TEXTURE_2D,we,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&p){const w=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[w])}}}function _t(P){return Math.min(l.maxSamples,P.samples)}function it(P){const w=s.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Xe(P){const w=f.render.frame;g.get(P)!==w&&(g.set(P,w),P.update())}function Bt(P,w){const te=P.colorSpace,ge=P.format,Me=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||te!==vr&&te!==ki&&(Rt.getTransfer(te)===Gt?(ge!==Pi||Me!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),w}function Ve(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(m.width=P.naturalWidth||P.width,m.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(m.width=P.displayWidth,m.height=P.displayHeight):(m.width=P.width,m.height=P.height),m}this.allocateTextureUnit=oe,this.resetTextureUnits=ce,this.setTexture2D=pe,this.setTexture2DArray=I,this.setTexture3D=K,this.setTextureCube=Y,this.rebindTextures=Ke,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=Wn,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=it}function Kw(a,e){function n(s,l=ki){let c;const f=Rt.getTransfer(l);if(s===Nn)return a.UNSIGNED_BYTE;if(s===hp)return a.UNSIGNED_SHORT_4_4_4_4;if(s===pp)return a.UNSIGNED_SHORT_5_5_5_1;if(s===H_)return a.UNSIGNED_INT_5_9_9_9_REV;if(s===z_)return a.BYTE;if(s===F_)return a.SHORT;if(s===gl)return a.UNSIGNED_SHORT;if(s===dp)return a.INT;if(s===mr)return a.UNSIGNED_INT;if(s===Sa)return a.FLOAT;if(s===Ml)return a.HALF_FLOAT;if(s===G_)return a.ALPHA;if(s===V_)return a.RGB;if(s===Pi)return a.RGBA;if(s===vl)return a.DEPTH_COMPONENT;if(s===Qs)return a.DEPTH_STENCIL;if(s===k_)return a.RED;if(s===mp)return a.RED_INTEGER;if(s===j_)return a.RG;if(s===gp)return a.RG_INTEGER;if(s===vp)return a.RGBA_INTEGER;if(s===cu||s===uu||s===fu||s===du)if(f===Gt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===cu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===uu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===fu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===du)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===cu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===uu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===fu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===du)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Uh||s===Nh||s===Lh||s===Ph)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Uh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Nh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Lh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ph)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Oh||s===Bh||s===Ih)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Oh||s===Bh)return f===Gt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Ih)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===zh||s===Fh||s===Hh||s===Gh||s===Vh||s===kh||s===jh||s===Xh||s===Wh||s===qh||s===Yh||s===Zh||s===Kh||s===Qh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===zh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Fh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Hh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Gh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Vh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===kh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===jh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Xh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Wh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===qh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Yh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Zh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Kh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Qh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===hu||s===$h||s===Jh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===hu)return f===Gt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===$h)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Jh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===X_||s===ep||s===tp||s===np)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===hu)return c.COMPRESSED_RED_RGTC1_EXT;if(s===ep)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===tp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===np)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ks?a.UNSIGNED_INT_24_8:a[s]!==void 0?a[s]:null}return{convert:n}}const Qw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$w=`
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

}`;class Jw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,s){if(this.texture===null){const l=new Hn,c=e.properties.get(l);c.__webglTexture=n.texture,(n.depthNear!==s.depthNear||n.depthFar!==s.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,s=new Gn({vertexShader:Qw,fragmentShader:$w,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new fi(new Uu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eA extends Da{constructor(e,n){super();const s=this;let l=null,c=1,f=null,d="local-floor",p=1,m=null,g=null,_=null,x=null,b=null,M=null;const A=new Jw,S=n.getContextAttributes();let v=null,L=null;const D=[],U=[],F=new rt;let G=null;const z=new jn;z.viewport=new $t;const W=new jn;W.viewport=new $t;const N=[z,W],C=new SE;let k=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let me=D[$];return me===void 0&&(me=new fh,D[$]=me),me.getTargetRaySpace()},this.getControllerGrip=function($){let me=D[$];return me===void 0&&(me=new fh,D[$]=me),me.getGripSpace()},this.getHand=function($){let me=D[$];return me===void 0&&(me=new fh,D[$]=me),me.getHandSpace()};function oe($){const me=U.indexOf($.inputSource);if(me===-1)return;const Se=D[me];Se!==void 0&&(Se.update($.inputSource,$.frame,m||f),Se.dispatchEvent({type:$.type,data:$.inputSource}))}function xe(){l.removeEventListener("select",oe),l.removeEventListener("selectstart",oe),l.removeEventListener("selectend",oe),l.removeEventListener("squeeze",oe),l.removeEventListener("squeezestart",oe),l.removeEventListener("squeezeend",oe),l.removeEventListener("end",xe),l.removeEventListener("inputsourceschange",pe);for(let $=0;$<D.length;$++){const me=U[$];me!==null&&(U[$]=null,D[$].disconnect(me))}k=null,ce=null,A.reset(),e.setRenderTarget(v),b=null,x=null,_=null,l=null,L=null,be.stop(),s.isPresenting=!1,e.setPixelRatio(G),e.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){d=$,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function($){m=$},this.getBaseLayer=function(){return x!==null?x:b},this.getBinding=function(){return _},this.getFrame=function(){return M},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(v=e.getRenderTarget(),l.addEventListener("select",oe),l.addEventListener("selectstart",oe),l.addEventListener("selectend",oe),l.addEventListener("squeeze",oe),l.addEventListener("squeezestart",oe),l.addEventListener("squeezeend",oe),l.addEventListener("end",xe),l.addEventListener("inputsourceschange",pe),S.xrCompatible!==!0&&await n.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Ae=null,Ne=null;S.depth&&(Ne=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Se=S.stencil?Qs:vl,Ae=S.stencil?Ks:mr);const lt={colorFormat:n.RGBA8,depthFormat:Ne,scaleFactor:c};_=new XRWebGLBinding(l,n),x=_.createProjectionLayer(lt),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),L=new Ln(x.textureWidth,x.textureHeight,{format:Pi,type:Nn,depthTexture:new bp(x.textureWidth,x.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Se={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(l,n,Se),l.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),L=new Ln(b.framebufferWidth,b.framebufferHeight,{format:Pi,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(d),be.setContext(l),be.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function pe($){for(let me=0;me<$.removed.length;me++){const Se=$.removed[me],Ae=U.indexOf(Se);Ae>=0&&(U[Ae]=null,D[Ae].disconnect(Se))}for(let me=0;me<$.added.length;me++){const Se=$.added[me];let Ae=U.indexOf(Se);if(Ae===-1){for(let lt=0;lt<D.length;lt++)if(lt>=U.length){U.push(Se),Ae=lt;break}else if(U[lt]===null){U[lt]=Se,Ae=lt;break}if(Ae===-1)break}const Ne=D[Ae];Ne&&Ne.connect(Se)}}const I=new se,K=new se;function Y($,me,Se){I.setFromMatrixPosition(me.matrixWorld),K.setFromMatrixPosition(Se.matrixWorld);const Ae=I.distanceTo(K),Ne=me.projectionMatrix.elements,lt=Se.projectionMatrix.elements,Ke=Ne[14]/(Ne[10]-1),Xt=Ne[14]/(Ne[10]+1),Vt=(Ne[9]+1)/Ne[5],dt=(Ne[9]-1)/Ne[5],H=(Ne[8]-1)/Ne[0],Wn=(lt[8]+1)/lt[0],_t=Ke*H,it=Ke*Wn,Xe=Ae/(-H+Wn),Bt=Xe*-H;if(me.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Bt),$.translateZ(Xe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ne[10]===-1)$.projectionMatrix.copy(me.projectionMatrix),$.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Ve=Ke+Xe,P=Xt+Xe,w=_t-Bt,te=it+(Ae-Bt),ge=Vt*Xt/P*Ve,Me=dt*Xt/P*Ve;$.projectionMatrix.makePerspective(w,te,ge,Me,Ve,P),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Ee($,me){me===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(me.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let me=$.near,Se=$.far;A.texture!==null&&(A.depthNear>0&&(me=A.depthNear),A.depthFar>0&&(Se=A.depthFar)),C.near=W.near=z.near=me,C.far=W.far=z.far=Se,(k!==C.near||ce!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),k=C.near,ce=C.far),z.layers.mask=$.layers.mask|2,W.layers.mask=$.layers.mask|4,C.layers.mask=z.layers.mask|W.layers.mask;const Ae=$.parent,Ne=C.cameras;Ee(C,Ae);for(let lt=0;lt<Ne.length;lt++)Ee(Ne[lt],Ae);Ne.length===2?Y(C,z,W):C.projectionMatrix.copy(z.projectionMatrix),O($,C,Ae)};function O($,me,Se){Se===null?$.matrix.copy(me.matrixWorld):($.matrix.copy(Se.matrixWorld),$.matrix.invert(),$.matrix.multiply(me.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(me.projectionMatrix),$.projectionMatrixInverse.copy(me.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ip*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&b===null))return p},this.setFoveation=function($){p=$,x!==null&&(x.fixedFoveation=$),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=$)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(C)};let ee=null;function ye($,me){if(g=me.getViewerPose(m||f),M=me,g!==null){const Se=g.views;b!==null&&(e.setRenderTargetFramebuffer(L,b.framebuffer),e.setRenderTarget(L));let Ae=!1;Se.length!==C.cameras.length&&(C.cameras.length=0,Ae=!0);for(let Ke=0;Ke<Se.length;Ke++){const Xt=Se[Ke];let Vt=null;if(b!==null)Vt=b.getViewport(Xt);else{const H=_.getViewSubImage(x,Xt);Vt=H.viewport,Ke===0&&(e.setRenderTargetTextures(L,H.colorTexture,H.depthStencilTexture),e.setRenderTarget(L))}let dt=N[Ke];dt===void 0&&(dt=new jn,dt.layers.enable(Ke),dt.viewport=new $t,N[Ke]=dt),dt.matrix.fromArray(Xt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(Xt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),Ke===0&&(C.matrix.copy(dt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Ae===!0&&C.cameras.push(dt)}const Ne=l.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const Ke=_.getDepthInformation(Se[0]);Ke&&Ke.isValid&&Ke.texture&&A.init(e,Ke,l.renderState)}}for(let Se=0;Se<D.length;Se++){const Ae=U[Se],Ne=D[Se];Ae!==null&&Ne!==void 0&&Ne.update(Ae,me,m||f)}ee&&ee($,me),me.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:me}),M=null}const be=new ix;be.setAnimationLoop(ye),this.setAnimationLoop=function($){ee=$},this.dispose=function(){}}}const Vr=new Ra,tA=new fn;function nA(a,e){function n(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function s(S,v){v.color.getRGB(S.fogColor.value,J_(a)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function l(S,v,L,D,U){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(S,v):v.isMeshToonMaterial?(c(S,v),_(S,v)):v.isMeshPhongMaterial?(c(S,v),g(S,v)):v.isMeshStandardMaterial?(c(S,v),x(S,v),v.isMeshPhysicalMaterial&&b(S,v,U)):v.isMeshMatcapMaterial?(c(S,v),M(S,v)):v.isMeshDepthMaterial?c(S,v):v.isMeshDistanceMaterial?(c(S,v),A(S,v)):v.isMeshNormalMaterial?c(S,v):v.isLineBasicMaterial?(f(S,v),v.isLineDashedMaterial&&d(S,v)):v.isPointsMaterial?p(S,v,L,D):v.isSpriteMaterial?m(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,n(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,n(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===Mn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,n(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===Mn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,n(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,n(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const L=e.get(v),D=L.envMap,U=L.envMapRotation;D&&(S.envMap.value=D,Vr.copy(U),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),S.envMapRotation.value.setFromMatrix4(tA.makeRotationFromEuler(Vr)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,S.aoMapTransform))}function f(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,n(v.map,S.mapTransform))}function d(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function p(S,v,L,D){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*L,S.scale.value=D*.5,v.map&&(S.map.value=v.map,n(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function m(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,n(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function g(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function _(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function x(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function b(S,v,L){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Mn&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,v){v.matcap&&(S.matcap.value=v.matcap)}function A(S,v){const L=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function iA(a,e,n,s){let l={},c={},f=[];const d=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function p(L,D){const U=D.program;s.uniformBlockBinding(L,U)}function m(L,D){let U=l[L.id];U===void 0&&(M(L),U=g(L),l[L.id]=U,L.addEventListener("dispose",S));const F=D.program;s.updateUBOMapping(L,F);const G=e.render.frame;c[L.id]!==G&&(x(L),c[L.id]=G)}function g(L){const D=_();L.__bindingPointIndex=D;const U=a.createBuffer(),F=L.__size,G=L.usage;return a.bindBuffer(a.UNIFORM_BUFFER,U),a.bufferData(a.UNIFORM_BUFFER,F,G),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,D,U),U}function _(){for(let L=0;L<d;L++)if(f.indexOf(L)===-1)return f.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const D=l[L.id],U=L.uniforms,F=L.__cache;a.bindBuffer(a.UNIFORM_BUFFER,D);for(let G=0,z=U.length;G<z;G++){const W=Array.isArray(U[G])?U[G]:[U[G]];for(let N=0,C=W.length;N<C;N++){const k=W[N];if(b(k,G,N,F)===!0){const ce=k.__offset,oe=Array.isArray(k.value)?k.value:[k.value];let xe=0;for(let pe=0;pe<oe.length;pe++){const I=oe[pe],K=A(I);typeof I=="number"||typeof I=="boolean"?(k.__data[0]=I,a.bufferSubData(a.UNIFORM_BUFFER,ce+xe,k.__data)):I.isMatrix3?(k.__data[0]=I.elements[0],k.__data[1]=I.elements[1],k.__data[2]=I.elements[2],k.__data[3]=0,k.__data[4]=I.elements[3],k.__data[5]=I.elements[4],k.__data[6]=I.elements[5],k.__data[7]=0,k.__data[8]=I.elements[6],k.__data[9]=I.elements[7],k.__data[10]=I.elements[8],k.__data[11]=0):(I.toArray(k.__data,xe),xe+=K.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,ce,k.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function b(L,D,U,F){const G=L.value,z=D+"_"+U;if(F[z]===void 0)return typeof G=="number"||typeof G=="boolean"?F[z]=G:F[z]=G.clone(),!0;{const W=F[z];if(typeof G=="number"||typeof G=="boolean"){if(W!==G)return F[z]=G,!0}else if(W.equals(G)===!1)return W.copy(G),!0}return!1}function M(L){const D=L.uniforms;let U=0;const F=16;for(let z=0,W=D.length;z<W;z++){const N=Array.isArray(D[z])?D[z]:[D[z]];for(let C=0,k=N.length;C<k;C++){const ce=N[C],oe=Array.isArray(ce.value)?ce.value:[ce.value];for(let xe=0,pe=oe.length;xe<pe;xe++){const I=oe[xe],K=A(I),Y=U%F,Ee=Y%K.boundary,O=Y+Ee;U+=Ee,O!==0&&F-O<K.storage&&(U+=F-O),ce.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=U,U+=K.storage}}}const G=U%F;return G>0&&(U+=F-G),L.__size=U,L.__cache={},this}function A(L){const D={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(D.boundary=4,D.storage=4):L.isVector2?(D.boundary=8,D.storage=8):L.isVector3||L.isColor?(D.boundary=16,D.storage=12):L.isVector4?(D.boundary=16,D.storage=16):L.isMatrix3?(D.boundary=48,D.storage=48):L.isMatrix4?(D.boundary=64,D.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),D}function S(L){const D=L.target;D.removeEventListener("dispose",S);const U=f.indexOf(D.__bindingPointIndex);f.splice(U,1),a.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function v(){for(const L in l)a.deleteBuffer(l[L]);f=[],l={},c={}}return{bind:p,update:m,dispose:v}}class lx{constructor(e={}){const{canvas:n=Vb(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=f;const M=new Uint32Array(4),A=new Int32Array(4);let S=null,v=null;const L=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ma,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let F=!1;this._outputColorSpace=Lt;let G=0,z=0,W=null,N=-1,C=null;const k=new $t,ce=new $t;let oe=null;const xe=new Dt(0);let pe=0,I=n.width,K=n.height,Y=1,Ee=null,O=null;const ee=new $t(0,0,I,K),ye=new $t(0,0,I,K);let be=!1;const $=new tx;let me=!1,Se=!1;const Ae=new fn,Ne=new fn,lt=new se,Ke=new $t,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function dt(){return W===null?Y:1}let H=s;function Wn(R,q){return n.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${El}`),n.addEventListener("webglcontextlost",ve,!1),n.addEventListener("webglcontextrestored",Ie,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),H===null){const q="webgl2";if(H=Wn(q,R),H===null)throw Wn(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let _t,it,Xe,Bt,Ve,P,w,te,ge,Me,fe,Oe,Re,Ge,Je,we,Fe,Ye,Qe,Be,ut,nt,It,j;function Le(){_t=new p2(H),_t.init(),nt=new Kw(H,_t),it=new o2(H,_t,e,nt),Xe=new Yw(H,_t),it.reverseDepthBuffer&&x&&Xe.buffers.depth.setReversed(!0),Bt=new v2(H),Ve=new Ow,P=new Zw(H,_t,Xe,Ve,it,nt,Bt),w=new c2(U),te=new h2(U),ge=new EE(H),It=new r2(H,ge),Me=new m2(H,ge,Bt,It),fe=new x2(H,Me,ge,Bt),Qe=new _2(H,it,P),we=new l2(Ve),Oe=new Pw(U,w,te,_t,it,It,we),Re=new nA(U,Ve),Ge=new Iw,Je=new kw(_t),Ye=new a2(U,w,te,Xe,fe,b,p),Fe=new Ww(U,fe,it),j=new iA(H,Bt,it,Xe),Be=new s2(H,_t,Bt),ut=new g2(H,_t,Bt),Bt.programs=Oe.programs,U.capabilities=it,U.extensions=_t,U.properties=Ve,U.renderLists=Ge,U.shadowMap=Fe,U.state=Xe,U.info=Bt}Le();const le=new eA(U,H);this.xr=le,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=_t.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=_t.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(I,K,!1))},this.getSize=function(R){return R.set(I,K)},this.setSize=function(R,q,ae=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=R,K=q,n.width=Math.floor(R*Y),n.height=Math.floor(q*Y),ae===!0&&(n.style.width=R+"px",n.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(I*Y,K*Y).floor()},this.setDrawingBufferSize=function(R,q,ae){I=R,K=q,Y=ae,n.width=Math.floor(R*ae),n.height=Math.floor(q*ae),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(k)},this.getViewport=function(R){return R.copy(ee)},this.setViewport=function(R,q,ae,re){R.isVector4?ee.set(R.x,R.y,R.z,R.w):ee.set(R,q,ae,re),Xe.viewport(k.copy(ee).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(ye)},this.setScissor=function(R,q,ae,re){R.isVector4?ye.set(R.x,R.y,R.z,R.w):ye.set(R,q,ae,re),Xe.scissor(ce.copy(ye).multiplyScalar(Y).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(R){Xe.setScissorTest(be=R)},this.setOpaqueSort=function(R){Ee=R},this.setTransparentSort=function(R){O=R},this.getClearColor=function(R){return R.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,ae=!0){let re=0;if(R){let Z=!1;if(W!==null){const Te=W.texture.format;Z=Te===vp||Te===gp||Te===mp}if(Z){const Te=W.texture.type,Ce=Te===Nn||Te===mr||Te===gl||Te===Ks||Te===hp||Te===pp,De=Ye.getClearColor(),ze=Ye.getClearAlpha(),et=De.r,We=De.g,je=De.b;Ce?(M[0]=et,M[1]=We,M[2]=je,M[3]=ze,H.clearBufferuiv(H.COLOR,0,M)):(A[0]=et,A[1]=We,A[2]=je,A[3]=ze,H.clearBufferiv(H.COLOR,0,A))}else re|=H.COLOR_BUFFER_BIT}q&&(re|=H.DEPTH_BUFFER_BIT),ae&&(re|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ve,!1),n.removeEventListener("webglcontextrestored",Ie,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),Ye.dispose(),Ge.dispose(),Je.dispose(),Ve.dispose(),w.dispose(),te.dispose(),fe.dispose(),It.dispose(),j.dispose(),Oe.dispose(),le.dispose(),le.removeEventListener("sessionstart",dn),le.removeEventListener("sessionend",Tn),qn.stop()};function ve(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const R=Bt.autoReset,q=Fe.enabled,ae=Fe.autoUpdate,re=Fe.needsUpdate,Z=Fe.type;Le(),Bt.autoReset=R,Fe.enabled=q,Fe.autoUpdate=ae,Fe.needsUpdate=re,Fe.type=Z}function Pe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function at(R){const q=R.target;q.removeEventListener("dispose",at),Wt(q)}function Wt(R){sn(R),Ve.remove(R)}function sn(R){const q=Ve.get(R).programs;q!==void 0&&(q.forEach(function(ae){Oe.releaseProgram(ae)}),R.isShaderMaterial&&Oe.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,ae,re,Z,Te){q===null&&(q=Xt);const Ce=Z.isMesh&&Z.matrixWorld.determinant()<0,De=yr(R,q,ae,re,Z);Xe.setMaterial(re,Ce);let ze=ae.index,et=1;if(re.wireframe===!0){if(ze=Me.getWireframeAttribute(ae),ze===void 0)return;et=2}const We=ae.drawRange,je=ae.attributes.position;let pt=We.start*et,wt=(We.start+We.count)*et;Te!==null&&(pt=Math.max(pt,Te.start*et),wt=Math.min(wt,(Te.start+Te.count)*et)),ze!==null?(pt=Math.max(pt,0),wt=Math.min(wt,ze.count)):je!=null&&(pt=Math.max(pt,0),wt=Math.min(wt,je.count));const Kt=wt-pt;if(Kt<0||Kt===1/0)return;It.setup(Z,re,De,ae,ze);let xt,yt=Be;if(ze!==null&&(xt=ge.get(ze),yt=ut,yt.setIndex(xt)),Z.isMesh)re.wireframe===!0?(Xe.setLineWidth(re.wireframeLinewidth*dt()),yt.setMode(H.LINES)):yt.setMode(H.TRIANGLES);else if(Z.isLine){let qe=re.linewidth;qe===void 0&&(qe=1),Xe.setLineWidth(qe*dt()),Z.isLineSegments?yt.setMode(H.LINES):Z.isLineLoop?yt.setMode(H.LINE_LOOP):yt.setMode(H.LINE_STRIP)}else Z.isPoints?yt.setMode(H.POINTS):Z.isSprite&&yt.setMode(H.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)pu("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))yt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const qe=Z._multiDrawStarts,en=Z._multiDrawCounts,Et=Z._multiDrawCount,Pn=ze?ge.get(ze).bytesPerElement:1,Oa=Ve.get(re).currentProgram.getUniforms();for(let qt=0;qt<Et;qt++)Oa.setValue(H,"_gl_DrawID",qt),yt.render(qe[qt]/Pn,en[qt])}else if(Z.isInstancedMesh)yt.renderInstances(pt,Kt,Z.count);else if(ae.isInstancedBufferGeometry){const qe=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,en=Math.min(ae.instanceCount,qe);yt.renderInstances(pt,Kt,en)}else yt.render(pt,Kt)};function Tt(R,q,ae){R.transparent===!0&&R.side===ui&&R.forceSinglePass===!1?(R.side=Mn,R.needsUpdate=!0,La(R,q,ae),R.side=Aa,R.needsUpdate=!0,La(R,q,ae),R.side=ui):La(R,q,ae)}this.compile=function(R,q,ae=null){ae===null&&(ae=R),v=Je.get(ae),v.init(q),D.push(v),ae.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),R!==ae&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),v.setupLights();const re=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Te=Z.material;if(Te)if(Array.isArray(Te))for(let Ce=0;Ce<Te.length;Ce++){const De=Te[Ce];Tt(De,ae,Z),re.add(De)}else Tt(Te,ae,Z),re.add(Te)}),v=D.pop(),re},this.compileAsync=function(R,q,ae=null){const re=this.compile(R,q,ae);return new Promise(Z=>{function Te(){if(re.forEach(function(Ce){Ve.get(Ce).currentProgram.isReady()&&re.delete(Ce)}),re.size===0){Z(R);return}setTimeout(Te,10)}_t.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let ei=null;function _n(R){ei&&ei(R)}function dn(){qn.stop()}function Tn(){qn.start()}const qn=new ix;qn.setAnimationLoop(_n),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(R){ei=R,le.setAnimationLoop(R),R===null?qn.stop():qn.start()},le.addEventListener("sessionstart",dn),le.addEventListener("sessionend",Tn),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(q),q=le.getCamera()),R.isScene===!0&&R.onBeforeRender(U,R,q,W),v=Je.get(R,D.length),v.init(q),D.push(v),Ne.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),$.setFromProjectionMatrix(Ne),Se=this.localClippingEnabled,me=we.init(this.clippingPlanes,Se),S=Ge.get(R,L.length),S.init(),L.push(S),le.enabled===!0&&le.isPresenting===!0){const Te=U.xr.getDepthSensingMesh();Te!==null&&_r(Te,q,-1/0,U.sortObjects)}_r(R,q,0,U.sortObjects),S.finish(),U.sortObjects===!0&&S.sort(Ee,O),Vt=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Vt&&Ye.addToRenderList(S,R),this.info.render.frame++,me===!0&&we.beginShadows();const ae=v.state.shadowsArray;Fe.render(ae,R,q),me===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=S.opaque,Z=S.transmissive;if(v.setupLights(),q.isArrayCamera){const Te=q.cameras;if(Z.length>0)for(let Ce=0,De=Te.length;Ce<De;Ce++){const ze=Te[Ce];Cl(re,Z,R,ze)}Vt&&Ye.render(R);for(let Ce=0,De=Te.length;Ce<De;Ce++){const ze=Te[Ce];Rl(S,R,ze,ze.viewport)}}else Z.length>0&&Cl(re,Z,R,q),Vt&&Ye.render(R),Rl(S,R,q);W!==null&&z===0&&(P.updateMultisampleRenderTarget(W),P.updateRenderTargetMipmap(W)),R.isScene===!0&&R.onAfterRender(U,R,q),It.resetDefaultState(),N=-1,C=null,D.pop(),D.length>0?(v=D[D.length-1],me===!0&&we.setGlobalState(U.clippingPlanes,v.state.camera)):v=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function _r(R,q,ae,re){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)ae=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||$.intersectsSprite(R)){re&&Ke.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ne);const Ce=fe.update(R),De=R.material;De.visible&&S.push(R,Ce,De,ae,Ke.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||$.intersectsObject(R))){const Ce=fe.update(R),De=R.material;if(re&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ke.copy(R.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Ke.copy(Ce.boundingSphere.center)),Ke.applyMatrix4(R.matrixWorld).applyMatrix4(Ne)),Array.isArray(De)){const ze=Ce.groups;for(let et=0,We=ze.length;et<We;et++){const je=ze[et],pt=De[je.materialIndex];pt&&pt.visible&&S.push(R,Ce,pt,ae,Ke.z,je)}}else De.visible&&S.push(R,Ce,De,ae,Ke.z,null)}}const Te=R.children;for(let Ce=0,De=Te.length;Ce<De;Ce++)_r(Te[Ce],q,ae,re)}function Rl(R,q,ae,re){const Z=R.opaque,Te=R.transmissive,Ce=R.transparent;v.setupLightsView(ae),me===!0&&we.setGlobalState(U.clippingPlanes,ae),re&&Xe.viewport(k.copy(re)),Z.length>0&&xr(Z,q,ae),Te.length>0&&xr(Te,q,ae),Ce.length>0&&xr(Ce,q,ae),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function Cl(R,q,ae,re){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[re.id]===void 0&&(v.state.transmissionRenderTarget[re.id]=new Ln(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?Ml:Nn,minFilter:Yr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace}));const Te=v.state.transmissionRenderTarget[re.id],Ce=re.viewport||k;Te.setSize(Ce.z*U.transmissionResolutionScale,Ce.w*U.transmissionResolutionScale);const De=U.getRenderTarget();U.setRenderTarget(Te),U.getClearColor(xe),pe=U.getClearAlpha(),pe<1&&U.setClearColor(16777215,.5),U.clear(),Vt&&Ye.render(ae);const ze=U.toneMapping;U.toneMapping=Ma;const et=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),v.setupLightsView(re),me===!0&&we.setGlobalState(U.clippingPlanes,re),xr(R,ae,re),P.updateMultisampleRenderTarget(Te),P.updateRenderTargetMipmap(Te),_t.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let je=0,pt=q.length;je<pt;je++){const wt=q[je],Kt=wt.object,xt=wt.geometry,yt=wt.material,qe=wt.group;if(yt.side===ui&&Kt.layers.test(re.layers)){const en=yt.side;yt.side=Mn,yt.needsUpdate=!0,Na(Kt,ae,re,xt,yt,qe),yt.side=en,yt.needsUpdate=!0,We=!0}}We===!0&&(P.updateMultisampleRenderTarget(Te),P.updateRenderTargetMipmap(Te))}U.setRenderTarget(De),U.setClearColor(xe,pe),et!==void 0&&(re.viewport=et),U.toneMapping=ze}function xr(R,q,ae){const re=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,Te=R.length;Z<Te;Z++){const Ce=R[Z],De=Ce.object,ze=Ce.geometry,et=Ce.group;let We=Ce.material;We.allowOverride===!0&&re!==null&&(We=re),De.layers.test(ae.layers)&&Na(De,q,ae,ze,We,et)}}function Na(R,q,ae,re,Z,Te){R.onBeforeRender(U,q,ae,re,Z,Te),R.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(U,q,ae,re,R,Te),Z.transparent===!0&&Z.side===ui&&Z.forceSinglePass===!1?(Z.side=Mn,Z.needsUpdate=!0,U.renderBufferDirect(ae,q,re,Z,R,Te),Z.side=Aa,Z.needsUpdate=!0,U.renderBufferDirect(ae,q,re,Z,R,Te),Z.side=ui):U.renderBufferDirect(ae,q,re,Z,R,Te),R.onAfterRender(U,q,ae,re,Z,Te)}function La(R,q,ae){q.isScene!==!0&&(q=Xt);const re=Ve.get(R),Z=v.state.lights,Te=v.state.shadowsArray,Ce=Z.state.version,De=Oe.getParameters(R,Z.state,Te,q,ae),ze=Oe.getProgramCacheKey(De);let et=re.programs;re.environment=R.isMeshStandardMaterial?q.environment:null,re.fog=q.fog,re.envMap=(R.isMeshStandardMaterial?te:w).get(R.envMap||re.environment),re.envMapRotation=re.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,et===void 0&&(R.addEventListener("dispose",at),et=new Map,re.programs=et);let We=et.get(ze);if(We!==void 0){if(re.currentProgram===We&&re.lightsStateVersion===Ce)return Qi(R,De),We}else De.uniforms=Oe.getUniforms(R),R.onBeforeCompile(De,U),We=Oe.acquireProgram(De,ze),et.set(ze,We),re.uniforms=De.uniforms;const je=re.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(je.clippingPlanes=we.uniform),Qi(R,De),re.needsLights=on(R),re.lightsStateVersion=Ce,re.needsLights&&(je.ambientLightColor.value=Z.state.ambient,je.lightProbe.value=Z.state.probe,je.directionalLights.value=Z.state.directional,je.directionalLightShadows.value=Z.state.directionalShadow,je.spotLights.value=Z.state.spot,je.spotLightShadows.value=Z.state.spotShadow,je.rectAreaLights.value=Z.state.rectArea,je.ltc_1.value=Z.state.rectAreaLTC1,je.ltc_2.value=Z.state.rectAreaLTC2,je.pointLights.value=Z.state.point,je.pointLightShadows.value=Z.state.pointShadow,je.hemisphereLights.value=Z.state.hemi,je.directionalShadowMap.value=Z.state.directionalShadowMap,je.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,je.spotShadowMap.value=Z.state.spotShadowMap,je.spotLightMatrix.value=Z.state.spotLightMatrix,je.spotLightMap.value=Z.state.spotLightMap,je.pointShadowMap.value=Z.state.pointShadowMap,je.pointShadowMatrix.value=Z.state.pointShadowMatrix),re.currentProgram=We,re.uniformsList=null,We}function Ki(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=mu.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Qi(R,q){const ae=Ve.get(R);ae.outputColorSpace=q.outputColorSpace,ae.batching=q.batching,ae.batchingColor=q.batchingColor,ae.instancing=q.instancing,ae.instancingColor=q.instancingColor,ae.instancingMorph=q.instancingMorph,ae.skinning=q.skinning,ae.morphTargets=q.morphTargets,ae.morphNormals=q.morphNormals,ae.morphColors=q.morphColors,ae.morphTargetsCount=q.morphTargetsCount,ae.numClippingPlanes=q.numClippingPlanes,ae.numIntersection=q.numClipIntersection,ae.vertexAlphas=q.vertexAlphas,ae.vertexTangents=q.vertexTangents,ae.toneMapping=q.toneMapping}function yr(R,q,ae,re,Z){q.isScene!==!0&&(q=Xt),P.resetTextureUnits();const Te=q.fog,Ce=re.isMeshStandardMaterial?q.environment:null,De=W===null?U.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:vr,ze=(re.isMeshStandardMaterial?te:w).get(re.envMap||Ce),et=re.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,We=!!ae.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),je=!!ae.morphAttributes.position,pt=!!ae.morphAttributes.normal,wt=!!ae.morphAttributes.color;let Kt=Ma;re.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Kt=U.toneMapping);const xt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,yt=xt!==void 0?xt.length:0,qe=Ve.get(re),en=v.state.lights;if(me===!0&&(Se===!0||R!==C)){const xn=R===C&&re.id===N;we.setState(re,R,xn)}let Et=!1;re.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==en.state.version||qe.outputColorSpace!==De||Z.isBatchedMesh&&qe.batching===!1||!Z.isBatchedMesh&&qe.batching===!0||Z.isBatchedMesh&&qe.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&qe.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&qe.instancing===!1||!Z.isInstancedMesh&&qe.instancing===!0||Z.isSkinnedMesh&&qe.skinning===!1||!Z.isSkinnedMesh&&qe.skinning===!0||Z.isInstancedMesh&&qe.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&qe.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&qe.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&qe.instancingMorph===!1&&Z.morphTexture!==null||qe.envMap!==ze||re.fog===!0&&qe.fog!==Te||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==we.numPlanes||qe.numIntersection!==we.numIntersection)||qe.vertexAlphas!==et||qe.vertexTangents!==We||qe.morphTargets!==je||qe.morphNormals!==pt||qe.morphColors!==wt||qe.toneMapping!==Kt||qe.morphTargetsCount!==yt)&&(Et=!0):(Et=!0,qe.__version=re.version);let Pn=qe.currentProgram;Et===!0&&(Pn=La(re,q,Z));let Oa=!1,qt=!1,Ji=!1;const kt=Pn.getUniforms(),On=qe.uniforms;if(Xe.useProgram(Pn.program)&&(Oa=!0,qt=!0,Ji=!0),re.id!==N&&(N=re.id,qt=!0),Oa||C!==R){Xe.buffers.depth.getReversed()?(Ae.copy(R.projectionMatrix),jb(Ae),Xb(Ae),kt.setValue(H,"projectionMatrix",Ae)):kt.setValue(H,"projectionMatrix",R.projectionMatrix),kt.setValue(H,"viewMatrix",R.matrixWorldInverse);const wn=kt.map.cameraPosition;wn!==void 0&&wn.setValue(H,lt.setFromMatrixPosition(R.matrixWorld)),it.logarithmicDepthBuffer&&kt.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&kt.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,qt=!0,Ji=!0)}if(Z.isSkinnedMesh){kt.setOptional(H,Z,"bindMatrix"),kt.setOptional(H,Z,"bindMatrixInverse");const xn=Z.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),kt.setValue(H,"boneTexture",xn.boneTexture,P))}Z.isBatchedMesh&&(kt.setOptional(H,Z,"batchingTexture"),kt.setValue(H,"batchingTexture",Z._matricesTexture,P),kt.setOptional(H,Z,"batchingIdTexture"),kt.setValue(H,"batchingIdTexture",Z._indirectTexture,P),kt.setOptional(H,Z,"batchingColorTexture"),Z._colorsTexture!==null&&kt.setValue(H,"batchingColorTexture",Z._colorsTexture,P));const hn=ae.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&Qe.update(Z,ae,Pn),(qt||qe.receiveShadow!==Z.receiveShadow)&&(qe.receiveShadow=Z.receiveShadow,kt.setValue(H,"receiveShadow",Z.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(On.envMap.value=ze,On.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&q.environment!==null&&(On.envMapIntensity.value=q.environmentIntensity),qt&&(kt.setValue(H,"toneMappingExposure",U.toneMappingExposure),qe.needsLights&&Pa(On,Ji),Te&&re.fog===!0&&Re.refreshFogUniforms(On,Te),Re.refreshMaterialUniforms(On,re,Y,K,v.state.transmissionRenderTarget[R.id]),mu.upload(H,Ki(qe),On,P)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(mu.upload(H,Ki(qe),On,P),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&kt.setValue(H,"center",Z.center),kt.setValue(H,"modelViewMatrix",Z.modelViewMatrix),kt.setValue(H,"normalMatrix",Z.normalMatrix),kt.setValue(H,"modelMatrix",Z.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const xn=re.uniformsGroups;for(let wn=0,Oi=xn.length;wn<Oi;wn++){const ea=xn[wn];j.update(ea,Pn),j.bind(ea,Pn)}}return Pn}function Pa(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function on(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(R,q,ae){const re=Ve.get(R);re.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),Ve.get(R.texture).__webglTexture=q,Ve.get(R.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ae,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const ae=Ve.get(R);ae.__webglFramebuffer=q,ae.__useDefaultFramebuffer=q===void 0};const Dl=H.createFramebuffer();this.setRenderTarget=function(R,q=0,ae=0){W=R,G=q,z=ae;let re=!0,Z=null,Te=!1,Ce=!1;if(R){const ze=Ve.get(R);if(ze.__useDefaultFramebuffer!==void 0)Xe.bindFramebuffer(H.FRAMEBUFFER,null),re=!1;else if(ze.__webglFramebuffer===void 0)P.setupRenderTarget(R);else if(ze.__hasExternalTextures)P.rebindTextures(R,Ve.get(R.texture).__webglTexture,Ve.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const je=R.depthTexture;if(ze.__boundDepthTexture!==je){if(je!==null&&Ve.has(je)&&(R.width!==je.image.width||R.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(R)}}const et=R.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ce=!0);const We=Ve.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(We[q])?Z=We[q][ae]:Z=We[q],Te=!0):R.samples>0&&P.useMultisampledRTT(R)===!1?Z=Ve.get(R).__webglMultisampledFramebuffer:Array.isArray(We)?Z=We[ae]:Z=We,k.copy(R.viewport),ce.copy(R.scissor),oe=R.scissorTest}else k.copy(ee).multiplyScalar(Y).floor(),ce.copy(ye).multiplyScalar(Y).floor(),oe=be;if(ae!==0&&(Z=Dl),Xe.bindFramebuffer(H.FRAMEBUFFER,Z)&&re&&Xe.drawBuffers(R,Z),Xe.viewport(k),Xe.scissor(ce),Xe.setScissorTest(oe),Te){const ze=Ve.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+q,ze.__webglTexture,ae)}else if(Ce){const ze=Ve.get(R.texture),et=q;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,ze.__webglTexture,ae,et)}else if(R!==null&&ae!==0){const ze=Ve.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ze.__webglTexture,ae)}N=-1},this.readRenderTargetPixels=function(R,q,ae,re,Z,Te,Ce){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De){Xe.bindFramebuffer(H.FRAMEBUFFER,De);try{const ze=R.texture,et=ze.format,We=ze.type;if(!it.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-re&&ae>=0&&ae<=R.height-Z&&H.readPixels(q,ae,re,Z,nt.convert(et),nt.convert(We),Te)}finally{const ze=W!==null?Ve.get(W).__webglFramebuffer:null;Xe.bindFramebuffer(H.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(R,q,ae,re,Z,Te,Ce){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De)if(q>=0&&q<=R.width-re&&ae>=0&&ae<=R.height-Z){Xe.bindFramebuffer(H.FRAMEBUFFER,De);const ze=R.texture,et=ze.format,We=ze.type;if(!it.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,je),H.bufferData(H.PIXEL_PACK_BUFFER,Te.byteLength,H.STREAM_READ),H.readPixels(q,ae,re,Z,nt.convert(et),nt.convert(We),0);const pt=W!==null?Ve.get(W).__webglFramebuffer:null;Xe.bindFramebuffer(H.FRAMEBUFFER,pt);const wt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await kb(H,wt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,je),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Te),H.deleteBuffer(je),H.deleteSync(wt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,ae=0){const re=Math.pow(2,-ae),Z=Math.floor(R.image.width*re),Te=Math.floor(R.image.height*re),Ce=q!==null?q.x:0,De=q!==null?q.y:0;P.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,ae,0,0,Ce,De,Z,Te),Xe.unbindTexture()};const Ul=H.createFramebuffer(),$i=H.createFramebuffer();this.copyTextureToTexture=function(R,q,ae=null,re=null,Z=0,Te=null){Te===null&&(Z!==0?(pu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=Z,Z=0):Te=0);let Ce,De,ze,et,We,je,pt,wt,Kt;const xt=R.isCompressedTexture?R.mipmaps[Te]:R.image;if(ae!==null)Ce=ae.max.x-ae.min.x,De=ae.max.y-ae.min.y,ze=ae.isBox3?ae.max.z-ae.min.z:1,et=ae.min.x,We=ae.min.y,je=ae.isBox3?ae.min.z:0;else{const hn=Math.pow(2,-Z);Ce=Math.floor(xt.width*hn),De=Math.floor(xt.height*hn),R.isDataArrayTexture?ze=xt.depth:R.isData3DTexture?ze=Math.floor(xt.depth*hn):ze=1,et=0,We=0,je=0}re!==null?(pt=re.x,wt=re.y,Kt=re.z):(pt=0,wt=0,Kt=0);const yt=nt.convert(q.format),qe=nt.convert(q.type);let en;q.isData3DTexture?(P.setTexture3D(q,0),en=H.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(P.setTexture2DArray(q,0),en=H.TEXTURE_2D_ARRAY):(P.setTexture2D(q,0),en=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const Et=H.getParameter(H.UNPACK_ROW_LENGTH),Pn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Oa=H.getParameter(H.UNPACK_SKIP_PIXELS),qt=H.getParameter(H.UNPACK_SKIP_ROWS),Ji=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,xt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,xt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,et),H.pixelStorei(H.UNPACK_SKIP_ROWS,We),H.pixelStorei(H.UNPACK_SKIP_IMAGES,je);const kt=R.isDataArrayTexture||R.isData3DTexture,On=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const hn=Ve.get(R),xn=Ve.get(q),wn=Ve.get(hn.__renderTarget),Oi=Ve.get(xn.__renderTarget);Xe.bindFramebuffer(H.READ_FRAMEBUFFER,wn.__webglFramebuffer),Xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let ea=0;ea<ze;ea++)kt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ve.get(R).__webglTexture,Z,je+ea),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ve.get(q).__webglTexture,Te,Kt+ea)),H.blitFramebuffer(et,We,Ce,De,pt,wt,Ce,De,H.DEPTH_BUFFER_BIT,H.NEAREST);Xe.bindFramebuffer(H.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||Ve.has(R)){const hn=Ve.get(R),xn=Ve.get(q);Xe.bindFramebuffer(H.READ_FRAMEBUFFER,Ul),Xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,$i);for(let wn=0;wn<ze;wn++)kt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,hn.__webglTexture,Z,je+wn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,hn.__webglTexture,Z),On?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,xn.__webglTexture,Te,Kt+wn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,xn.__webglTexture,Te),Z!==0?H.blitFramebuffer(et,We,Ce,De,pt,wt,Ce,De,H.COLOR_BUFFER_BIT,H.NEAREST):On?H.copyTexSubImage3D(en,Te,pt,wt,Kt+wn,et,We,Ce,De):H.copyTexSubImage2D(en,Te,pt,wt,et,We,Ce,De);Xe.bindFramebuffer(H.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else On?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(en,Te,pt,wt,Kt,Ce,De,ze,yt,qe,xt.data):q.isCompressedArrayTexture?H.compressedTexSubImage3D(en,Te,pt,wt,Kt,Ce,De,ze,yt,xt.data):H.texSubImage3D(en,Te,pt,wt,Kt,Ce,De,ze,yt,qe,xt):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Te,pt,wt,Ce,De,yt,qe,xt.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Te,pt,wt,xt.width,xt.height,yt,xt.data):H.texSubImage2D(H.TEXTURE_2D,Te,pt,wt,Ce,De,yt,qe,xt);H.pixelStorei(H.UNPACK_ROW_LENGTH,Et),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Pn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Oa),H.pixelStorei(H.UNPACK_SKIP_ROWS,qt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ji),Te===0&&q.generateMipmaps&&H.generateMipmap(en),Xe.unbindTexture()},this.copyTextureToTexture3D=function(R,q,ae=null,re=null,Z=0){return pu('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,q,ae,re,Z)},this.initRenderTarget=function(R){Ve.get(R).__webglFramebuffer===void 0&&P.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),Xe.unbindTexture()},this.resetState=function(){G=0,z=0,W=null,Xe.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ba}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Rt._getUnpackColorSpace()}}function cx(){const[a,e]=de.useState({width:window.innerWidth,height:window.innerHeight});return de.useEffect(()=>{function n(){e({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]),a}const wu="https://github.com/jayhcrawford",Tp="https://www.instagram.com/jaycraw1_",_l="https://www.linkedin.com/in/jay-crawford-prod/",qi="Cal Sans",dr="Oswald",Xi="Arial, sans",aA=1e3,h_="Full Stack Developer & SaaS Founder",xl="Jay H. Crawford",gu="65",fl="opacity-65 font-bold text-white",ro=a=>y.jsx(y.Fragment,{children:y.jsxs("div",{className:"text-white mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10 py-8",children:[a.construction==!0&&y.jsx("div",{className:"flex justify-center mb-10",children:y.jsxs("div",{className:"flex flex-col",children:[y.jsx("div",{className:"flex justify-center",children:y.jsx("div",{className:"h-40 w-40",children:y.jsx("img",{src:"/under_construction.svg"})})}),y.jsx("p",{className:"inline-block bg-red-500 rounded-xl text-center font-extrabold text-4xl",children:"This section is under construction"})]})}),y.jsx("h1",{style:{fontFamily:dr},id:"blog_header",className:"text-5xl text-white font-extrabold pb-10 ",children:a.title}),y.jsx("div",{className:"p-4 sm:p-6 lg:p-8",style:{backgroundColor:"#0b0f17",borderRadius:"20px"},children:a.children})]})}),so="text-[#CCCFD9]",Un=({children:a,align:e="center",className:n})=>{const s={left:"text-left",center:"text-center",right:"text-right"};return y.jsx("p",{className:`${s[e]} text-xs uppercase tracking-[0.4em] ${so} ${n??""}`.trim(),children:a})},Ti=({children:a,tone:e="solid",className:n})=>{const s=e==="glass"?"border border-white/20 bg-slate-800/40 backdrop-blur":"border border-white/10 bg-slate-900/40";return y.jsx("div",{className:`rounded-2xl p-6 ${s} ${n??""}`.trim(),children:a})},Mi=({src:a,alt:e,variant:n="full",figureLabel:s,figureCaption:l,imgClassName:c,figureMarginClassName:f="my-8",figcaptionClassName:d,withMatte:p=!1,matteClassName:m})=>{const g=!!(s||l),_={full:"w-full max-w-4xl",half:"mx-auto w-full sm:w-3/4 lg:w-1/2",centered:"mx-auto w-full sm:w-3/4 lg:w-2/3",quarter:"mx-auto w-full sm:w-1/2 lg:w-1/4"},x=y.jsx("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:y.jsx("img",{src:a,alt:e,className:`${_[n]} ${c??""}`.trim()})});return y.jsxs("figure",{className:`flex flex-col justify-center ${f}`,children:[p?y.jsx("div",{className:`rounded-2xl border border-3 border-white/20 bg-white/5 p-10 ${m??""}`.trim(),children:x}):x,g&&y.jsxs("figcaption",{className:`mt-2 text-center text-sm ${d??"text-gray-300"}`.trim(),children:[s&&y.jsx("span",{className:"font-semibold",children:s}),l&&y.jsx("span",{className:s?"ml-2":"",children:l})]})]})},Js=({href:a,label:e,newTab:n=!0})=>y.jsx("a",{href:a,target:n?"_blank":void 0,rel:n?"noopener noreferrer":void 0,className:"inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/90 bg-white/70 px-6 py-3 text-sm font-semibold tracking-wide text-slate-900 text-center backdrop-blur-sm transition hover:bg-white/90 hover:border-white hover:text-slate-900 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]",children:e}),Nt=({children:a,className:e})=>y.jsx("section",{className:"mt-0",style:{fontFamily:Xi},children:y.jsx("p",{className:`text-lg leading-relaxed text-slate-200 mt-5 ${e??""}`.trim(),children:a})}),hr=a=>{const e={compact:"text-2xl sm:text-4xl lg:text-5xl font-light text-center p-4 sm:p-6 pb-8 leading-snug",balanced:"text-3xl sm:text-5xl lg:text-6xl font-light text-center p-6 sm:p-8 pb-10 sm:pb-14 leading-tight",hero:"text-4xl sm:text-6xl xl:text-7xl font-light text-center p-6 sm:p-10 pb-12 leading-tight"};return y.jsxs("section",{id:"Blog_heroQuote",className:`${e[a.sizePreset??"hero"]}`,style:{fontFamily:dr},children:[y.jsx("style",{children:`
                        #Blog_heroQuoteQuoter::before {
                            content: "- "; /* or content: "&copy;"; */
                        }
                `}),y.jsxs("p",{children:[a.quote,a.quoter?y.jsx("span",{id:"Blog_heroQuoteQuoter",className:`block text-center pt-4 ml-${a.quoter_padding}`,children:a.quoter}):null]})]})},rA=[{label:"Now",items:["Engineering student at LACC","BuildLACCD intern","UrFriends dev"]},{label:"Roots",items:["BFA from SAIC","Lexington-born","multidisciplinary maker"]},{label:"Range",items:["Construction ops","hospitality leadership","art direction","software"]}],sA=["Designing community-driven software","Digitizing construction workflows","Making data feel human (fitness, fabrication, finance)"],oA=[{title:"Creative Tools",tools:["Photoshop","Illustrator","Maya","Blender","Fusion 360","SOLIDWORKS"]},{title:"Programming / Languages",tools:["TypeScript","JavaScript","Python","C++","Powershell","SQL"]},{title:"Web Dev & Platforms",tools:["Next.js","Firebase","Stripe","Vercel","Render","Tailwind"]},{title:"AI Tools",tools:["Gemini","Copilot","ChatGPT","Codex","OpenClaw","OpenAI API","Claude"]}],Vs="text-[#CCCFD9]",lA=()=>y.jsxs(ro,{title:"About",construction:!1,children:[y.jsxs("style",{children:[`
        /* Custom scrollbar styles */
        `,"`"]}),y.jsx("div",{className:"relative flex items-center justify-center rounded-2xl border border-dashed border-white/20 bg-slate-800/40 p-6 text-center",children:y.jsxs("div",{children:[y.jsx("p",{className:`text-sm uppercase tracking-[0.3em] ${Vs}`,children:"Portrait Placeholder"}),y.jsx("p",{className:"mt-3 text-xl font-semibold text-white",children:"Drop a high-contrast photo here"}),y.jsx("p",{className:"mt-2 text-sm text-slate-300",children:"Suggested: clean lighting, subtle gradient background, confident but relaxed posture."})]})}),y.jsxs("div",{className:"space-y-16 text-slate-100",children:[y.jsx("section",{className:"grid gap-10 rounded-2xl p-8 lg:grid-cols-[3fr,2fr]",children:y.jsxs("div",{className:"space-y-6",children:[y.jsx("p",{className:`text-center text-sm uppercase tracking-[0.3em] ${Vs}`,children:"Designer · Builder · Storyteller"}),y.jsxs("h1",{className:"text-4xl font-semibold leading-tight text-white sm:text-5xl mt-10 mb-10",children:["Context-switching between ",y.jsx("strong",{children:"construction sites"}),", ",y.jsx("strong",{children:"code editors"}),", and ",y.jsx("strong",{children:"sketchbooks"})," is my normal."]}),y.jsxs(Nt,{children:["I grew up in Kentucky, cut my teeth in ",y.jsx("strong",{children:"art school"})," at SAIC, and moved to Los Angeles in 2017 to pursue dreams; ",y.jsx("i",{children:"LA has become home now. "}),"The city's beauty, its diversity, the weather, the culture, I love what it has to offer here  — here I've worked across specialty construction, hospitality, and entertainment. Today I split my time between BuildLACCD ",y.jsx("strong",{children:"project management"}),", UrFriends",y.jsx("strong",{children:" full-stack development"}),", ",y.jsx("strong",{children:"engineering school"}),", my passion for the fitness & creativity."]}),y.jsxs("div",{className:"space-y-3 rounded-2xl border border-white/5 bg-white/5/20 mt-5 pt-1 p-6",children:[y.jsx("p",{className:`text-xs uppercase tracking-[0.4em] pb-5 pt-5 ${Vs}`,children:"What Drives Me"}),y.jsx("div",{className:"flex flex-wrap gap-3",children:sA.map(a=>y.jsx("span",{className:"rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm",children:a},a))})]})]})}),y.jsx("section",{className:"grid gap-6 lg:grid-cols-3",children:rA.map(a=>y.jsxs("article",{className:"rounded-2xl border border-white/10 bg-slate-900/40 p-6 shadow-lg shadow-black/20",children:[y.jsx("p",{className:`text-xs uppercase tracking-[0.4em] ${Vs}`,children:a.label}),y.jsx("ul",{className:"mt-3 space-y-2",children:a.items.map(e=>y.jsxs("li",{className:"text-lg font-semibold text-white flex items-start",children:[y.jsx("span",{className:"mr-3",children:"•"}),y.jsx("span",{children:e})]},e))})]},a.label))}),y.jsxs("section",{className:"space-y-6 text-lg leading-relaxed text-slate-200",children:[y.jsxs(Nt,{children:["I thrive where ",y.jsx("strong",{children:"hands-on execution"})," meets ",y.jsx("strong",{children:"polished storytelling"}),". I have ",y.jsx("strong",{children:y.jsx("a",{href:_l,target:"_blank",className:"hover:text-white/80 transition-colors",children:y.jsx("u",{children:"managed multimillion-dollar campus upgrades"})})}),", ",y.jsx("strong",{children:y.jsx("a",{href:"/projects/urfriends",className:"hover:text-white/80 transition-colors",children:y.jsx("u",{children:"shipped SaaS products"})})}),", led hospitality teams, fabricated sets for film & TV, and still carve out time to paint, sketch, and cycle the Los Angeles river paths. Fitness is a huge passion of mine, especially running and cycling. As a runner, I love the distance and concentration, and as a cyclist I love the freedom. Each lane teaches me to stay calm, design deliberately, and communicate with clarity — and in every world thoughts of finding cross-pollination drive my imagination wild! I'm always looking for new ways to learn."]}),y.jsxs(Nt,{children:["Engineering school sharpened my math and systems thinking; art school wired me to experiment without fear; years in hospitality taught me to keep people seen and to communicate ",y.jsx("i",{children:"thoroughly"}),". School in STEM has been extremely rewarding — it has exposed me to tools that I've used for refining and analyzing",y.jsx("strong",{children:y.jsxs("a",{href:"/projects/ripsheet",className:"hover:text-white/80 transition-colors",children:[" ",y.jsx("u",{children:"personal fitness systems"})]})}),", allowed me to tutor fellow students at MESA; I've celebrated and philosophized in the Human Computer Interaction Club, helped organize a hackathon, I've gone from 'self-taught' programmer to someone who understands computer science paradigms, and become ",y.jsx("i",{children:"actually"})," kind of fascinated by math."]}),y.jsx(Nt,{children:`When I am not laboring (with love ofc), you will find me studying new fabrication techniques, spelunking the wiki of my latest fascination, long-distnace or trail running, homecanning beans (they're SO good), riding my bike around LA, going to an art museum, or tinkering creatively. I'm big on "hippie" type stuff, get way into reading about future green-tech, and resonate with preserving the environment — you can absolutely find me using a bicycle and public transit.`}),y.jsx(Nt,{children:"I still say yes to the weird gigs — they keep me humble and curious."})]}),y.jsxs("section",{className:"space-y-8 rounded-2xl border border-white/10 bg-slate-900/40 p-6",children:[y.jsx("div",{className:"flex items-baseline justify-between",children:y.jsx("h2",{className:"text-2xl font-semibold text-white",children:"Digital skills"})}),y.jsx("div",{className:"space-y-6",children:oA.map(a=>y.jsxs("div",{className:"space-y-3",children:[y.jsx("p",{className:`text-s uppercase tracking-[0.4em]  p-5 text-center font-bold ${Vs}`,children:a.title}),y.jsx("div",{className:"grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-4",children:a.tools.map(e=>{const s={Photoshop:"photoshop_logo_40pt.svg",Illustrator:"illustrator_logo_40pt.svg",Maya:"maya_logo_40pt.svg",Blender:"blender_logo_40pt.svg","Fusion 360":"fusion_logo_40pt.svg",SOLIDWORKS:"solidworks_logo_40pt.svg",TypeScript:"typescript_logo_40pt.svg",JavaScript:"javascript_logo_40pt.svg",Python:"python_logo_40pt.svg","C++":"cpp_logo_40pt.svg",Powershell:"powershell_logo_40pt.svg",SQL:"sql_logo_40pt.svg",Firebase:"firebase_logo_40pt.svg","Next.js":"next_logo_40pt.svg",Stripe:"stripe_logo_40pt.svg",Tailwind:"tailwind_logo_40pt.svg",Vercel:"vercel_logo_40pt.svg",Render:"render_logo_40pt.svg",Gemini:"gemini_logo_40pt.svg",Copilot:"copilot_logo_40pt.svg",ChatGPT:"chatgpt_logo_40pt.svg",Codex:"codex_logo_40pt.svg",OpenClaw:"openclaw_logo_40pt.svg","OpenAI API":"openai_logo_40pt.svg",Claude:"claude_logo_40pt.svg"}[e];return y.jsxs("div",{className:"flex flex-col items-center gap-2 text-center",children:[y.jsx("div",{className:`flex h-16 w-16 items-center justify-center rounded-full text-xs uppercase tracking-wide text-slate-400 ${s?"":"border border-white/15 bg-slate-800/60"}`,children:s?y.jsx("img",{src:`/${s}`,alt:`${e} logo`,className:"h-16 w-16"}):"Logo"}),y.jsx("p",{className:"text-sm font-medium text-white",children:e})]},e)})})]},a.title))})]}),y.jsxs("section",{className:`flex flex-col items-center gap-4 rounded-2xl border border-white/20 bg-slate-800/40 px-6 py-5 text-sm ${Vs}`,children:[y.jsx("p",{className:"text-xs uppercase tracking-[0.4em]",children:"Next steps"}),y.jsxs("div",{className:"flex flex-col gap-3 text-base text-slate-100",children:[y.jsxs("p",{className:"text-center",children:["I love ",y.jsx("strong",{children:"building"})," and ",y.jsx("strong",{children:"creating"}),", and if you can use my help, ",y.jsx("strong",{children:"please reach out!"})]}),y.jsx(Js,{href:"/contact",label:"Open Contact Page",newTab:!1})]})]})]})]}),cA=()=>y.jsx("div",{className:"text-white",style:{fontFamily:Xi},children:y.jsx("div",{className:"mx-auto w-full max-w-6xl px-6 py-20",children:y.jsxs("div",{className:"grid gap-10 md:grid-cols-2 md:items-center",children:[y.jsxs("div",{children:[y.jsx("p",{className:"uppercase tracking-[0.3em] text-sm opacity-70",children:"Contact"}),y.jsx("h1",{style:{fontFamily:qi},className:"text-4xl md:text-6xl font-bold mt-4",children:"Let's build something bold."}),y.jsx("p",{className:"mt-4 text-lg opacity-80 max-w-xl",children:"Reach out for collaborations, commissions, or just to say hello. I'm based in Los Angeles and always open to new ideas."}),y.jsxs("div",{className:"mt-8 flex flex-col sm:flex-row gap-4",children:[y.jsx("a",{href:"mailto:jayhcrawford@gmail.com",className:"inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:border-white hover:bg-white/10",children:"Email Me"}),y.jsx("a",{href:_l,target:"new",className:"inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:border-white hover:bg-white/10",children:"LinkedIn"})]})]}),y.jsxs("div",{className:"rounded-2xl border border-white/20 bg-white/5 p-8 backdrop-blur",children:[y.jsx("p",{className:"text-sm uppercase tracking-[0.3em] opacity-70",children:"Direct"}),y.jsx("h2",{style:{fontFamily:qi},className:"text-3xl font-semibold mt-3",children:xl}),y.jsx("p",{className:"opacity-80 mt-2",children:"Los Angeles, CA"}),y.jsxs("div",{className:"mt-6",children:[y.jsx("p",{className:"text-sm uppercase tracking-[0.3em] opacity-70",children:"Email"}),y.jsx("a",{className:"text-lg font-semibold hover:underline",href:"mailto:jayhcrawford@gmail.com",children:"jayhcrawford@gmail.com"})]}),y.jsxs("div",{className:"mt-6",children:[y.jsx("p",{className:"text-sm uppercase tracking-[0.3em] opacity-70",children:"Social"}),y.jsxs("div",{className:"mt-3 flex flex-wrap gap-4 text-sm",children:[y.jsx("a",{className:"hover:underline",href:_l,target:"new",children:"LinkedIn"}),y.jsx("a",{className:"hover:underline",href:Tp,target:"new",children:"Instagram"}),y.jsx("a",{className:"hover:underline",href:wu,target:"new",children:"Github"})]})]})]})]})})}),uA=a=>y.jsxs(y.Fragment,{children:[a.url==""&&y.jsx("div",{id:"this_one",className:"h-30 w-30 absolute",children:y.jsx("img",{src:"/under_construction.svg"})}),y.jsx("div",{style:{boxShadow:"5px 5px 5px rgba(0, 0, 0, 1)"},className:"gridPhoto_Image_container w-80 h-60",children:y.jsx("img",{className:"rounded-lg w-80 h-60",style:{objectFit:"cover"},src:a.img})})]}),fA=a=>{const[e,n]=de.useState(!1);return y.jsx("div",{onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:y.jsx(Kr,{id:"",to:a.url?a.url:"",children:y.jsx("div",{className:"gridPhoto_container p-1 m-2 flex justify-center",children:y.jsxs("div",{className:`gridPhoto_item_container m-2 inline ${a.url==""&&"cursor-not-allowed"}`,children:[y.jsx("style",{children:`
                .gridPhoto_item_container:hover {
                  text-decoration: dotted;
                }
                .gridPhoto_item_container {
                  text-decoration: dotted;
                }
              `}),y.jsx("div",{className:"relative",children:y.jsxs("div",{className:" h-full w-full relative z-100",children:[y.jsx("div",{className:`${a.url==""&&e?"absolute":"hidden"} w-full absolute text-white font-black bg-red-600 top-[120px] p-4 text-center`,children:"Under Construction"}),y.jsx(uA,{img:a.img,url:a.url})]})}),y.jsx("div",{children:y.jsx("h4",{style:{fontFamily:qi},className:"text-2xl text-white p-4 abt_gridPhotoItem",children:a.title})})]})})})})},ux=a=>{const e=()=>a.width<2e3?"w-full":"w-[60%]",n=()=>a.width<750?"grid-cols-1":"grid-cols-2";return y.jsx("div",{id:"grid_container",className:`grid ${e()} ${n()}`,children:a.categories.map((s,l)=>y.jsx("span",{children:y.jsx(fA,{title:s.category,img:s.img,url:s.url?s.url:""})},`${l}-${s.category}`))})},dA=a=>y.jsx(ux,{width:a.width,categories:a.category_array}),hA=a=>{const e=new Date().getFullYear();return a.path=="/"?y.jsx("footer",{style:{fontFamily:qi},className:""}):y.jsxs("footer",{style:{fontFamily:qi},className:" text-white mx-auto w-full p-4 py-6",children:[y.jsx("style",{children:`
            .footer_links {
              margin-bottom: 2em;
            }
            .footer_links li {
              margin-bottom: .2em;
            }
            .footer_linkes_transp {
            opacity: ${gu}%;
            }
            
            .footer_links li:hover {
            text-decoration: underline;
            opacity: 100%;
            }`}),y.jsxs("div",{id:"footer_content",children:[y.jsxs("div",{className:"md:flex md:justify-between",children:[y.jsx("div",{className:"",children:y.jsx("ul",{className:"footer_links text-md text-left",children:y.jsx("li",{children:y.jsxs("a",{href:"mailto:jayhcrawford@gmail.com",children:[y.jsx("p",{className:"font-bold",children:xl}),y.jsxs("span",{className:"footer_linkes_transp font-normal",style:{fontFamily:Xi},children:[y.jsx("p",{children:"Los Angeles, CA"}),y.jsx("p",{children:"jayhcrawford@gmail.com"})]})]})})})}),y.jsxs("div",{className:"grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 text-left",children:[y.jsxs("div",{children:[y.jsx("h2",{className:"text-sm font-bold uppercase",children:"Social"}),y.jsxs("ul",{id:"footer_social",style:{fontFamily:Xi},className:"footer_links footer_linkes_transp font-medium mt-3 mb-10",children:[y.jsx("style",{children:`
                      #footer_social li {
                        
                      }
                    `}),y.jsx("li",{children:y.jsx("a",{href:_l,target:"new",className:"hover:underline",children:"LinkedIn"})}),y.jsx("li",{className:"",children:y.jsx("a",{href:Tp,target:"new",className:"hover:underline",children:"Instagram"})}),y.jsx("li",{children:y.jsx("a",{href:wu,target:"new",className:"hover:underline",children:"Github"})})]})]}),y.jsx("div",{})]})]}),y.jsxs("div",{className:"sm:flex sm:items-center sm:justify-between",children:[y.jsxs("span",{style:{fontFamily:Xi},className:`font-normal text-sm text-white opacity-${gu} sm:text-center`,children:[e," - ",xl]}),y.jsx("div",{className:"flex mt-4 sm:justify-center sm:mt-0",children:y.jsxs("a",{href:wu,target:"new",className:`opacity-${gu} hover:opacity-100 hover:white ms-5`,children:[y.jsx("svg",{className:"w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:y.jsx("path",{fillRule:"evenodd",d:"M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z",clipRule:"evenodd"})}),y.jsx("span",{className:"sr-only",children:"GitHub account"})]})})]})]})]})},pA=a=>y.jsx("div",{className:"social_brick_icon_container",style:{width:"150px"},children:y.jsxs("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 40",className:"social-svg",children:[y.jsx("defs",{children:y.jsx("style",{children:`
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
                    `})}),a.name=="Tiktok"&&y.jsx("path",{className:"social_icon_fg",d:"M34.41,10.31c-3.78-.81-6.59-3.98-6.95-7.82v-.81h-6.35v25.2c-.01,2.95-2.41,5.33-5.36,5.32-1.66,0-3.22-.78-4.23-2.11h0s0,0,0,0c-1.78-2.35-1.33-5.69,1.02-7.48,1.38-1.05,3.19-1.36,4.85-.84v-6.45c-6.38-.88-12.27,3.58-13.15,9.96-.49,3.57.69,7.17,3.21,9.75,4.5,4.61,11.89,4.69,16.5.19,2.25-2.2,3.51-5.2,3.51-8.34v-12.88c2.57,1.83,5.64,2.82,8.8,2.81v-6.31c-.62,0-1.24-.06-1.85-.19h0Z"}),a.name=="Instagram"&&y.jsx("path",{className:"social_icon_fg",d:"M12.23,1.12C6.1,1.12,1.11,6.1,1.11,12.23v15.39c0,6.13,4.99,11.12,11.12,11.12h15.39c6.13,0,11.12-4.99,11.12-11.12v-15.39c0-6.13-4.99-11.12-11.12-11.12h-15.39ZM12.23,2.83h15.39c5.2,0,9.41,4.2,9.41,9.41v15.39c0,5.2-4.2,9.41-9.41,9.41h-15.39c-5.2,0-9.41-4.2-9.41-9.41v-15.39C2.82,7.03,7.02,2.83,12.23,2.83ZM30.18,7.96c-.94,0-1.71.77-1.71,1.71s.77,1.71,1.71,1.71,1.71-.77,1.71-1.71-.77-1.71-1.71-1.71ZM19.92,10.52c-5.19,0-9.41,4.22-9.41,9.41s4.22,9.41,9.41,9.41,9.41-4.22,9.41-9.41-4.22-9.41-9.41-9.41ZM19.92,12.23c4.26,0,7.7,3.44,7.7,7.7s-3.44,7.7-7.7,7.7-7.7-3.44-7.7-7.7,3.44-7.7,7.7-7.7Z"}),a.name=="Discord"&&y.jsx("path",{className:"social_icon_fg",d:"M33.35,7.61c-2.49-1.16-5.15-2.01-7.93-2.49-.34.62-.74,1.45-1.02,2.11-2.96-.44-5.89-.44-8.79,0-.28-.66-.68-1.49-1.03-2.11-2.79.48-5.45,1.33-7.94,2.5C1.62,15.2.26,22.6.94,29.89c3.33,2.49,6.56,4,9.73,4.99.78-1.08,1.48-2.22,2.08-3.43-1.15-.44-2.24-.97-3.28-1.6.28-.2.54-.42.8-.64,6.33,2.96,13.2,2.96,19.45,0,.26.22.53.43.8.64-1.04.63-2.14,1.16-3.29,1.6.6,1.2,1.3,2.35,2.08,3.43,3.18-.99,6.41-2.5,9.74-4.99.8-8.45-1.36-15.79-5.72-22.28h0ZM13.61,25.41c-1.9,0-3.46-1.77-3.46-3.93s1.52-3.94,3.46-3.94,3.49,1.77,3.46,3.94c0,2.16-1.52,3.93-3.46,3.93ZM26.39,25.41c-1.9,0-3.46-1.77-3.46-3.93s1.52-3.94,3.46-3.94,3.49,1.77,3.46,3.94c0,2.16-1.52,3.93-3.46,3.93Z"}),a.name=="Github"&&y.jsx("path",{className:"social_icon_fg",d:"M19.9,1.55C9.52,1.55,1.12,10.01,1.12,20.47c0,8.36,5.38,15.44,12.84,17.95.93.19,1.27-.41,1.27-.91,0-.44-.03-1.94-.03-3.51-5.22,1.13-6.31-2.26-6.31-2.26-.84-2.19-2.08-2.76-2.08-2.76-1.71-1.16.12-1.16.12-1.16,1.9.13,2.89,1.94,2.89,1.94,1.68,2.88,4.38,2.07,5.47,1.57.16-1.22.65-2.07,1.18-2.54-4.17-.44-8.55-2.07-8.55-9.33,0-2.07.75-3.76,1.93-5.07-.19-.47-.84-2.41.19-5.01,0,0,1.59-.5,5.16,1.94,1.53-.41,3.11-.62,4.7-.63,1.59,0,3.2.22,4.69.63,3.58-2.44,5.16-1.94,5.16-1.94,1.03,2.6.37,4.54.19,5.01,1.21,1.32,1.93,3.01,1.93,5.07,0,7.27-4.38,8.86-8.58,9.33.68.6,1.27,1.72,1.27,3.51,0,2.54-.03,4.57-.03,5.2,0,.5.34,1.1,1.27.91,7.46-2.51,12.84-9.59,12.84-17.95.03-10.46-8.4-18.92-18.75-18.92Z"})]})}),mA=()=>{const a=[{name:"Instagram",url:Tp},{name:"Github",url:wu}];return y.jsx("div",{className:"socialbrick-outer",children:y.jsxs("div",{className:"socialbrick-inner",children:[y.jsx("style",{children:`
                        .glow-button:hover svg {
                            filter: drop-shadow(0 0 10px rgba(255, 255, 255, .5)) drop-shadow(0 0 10px rgba(255, 255, 255, .5));
                        }
                        .glow-button:active svg {
                            filter: none;
                        }
                    `}),a.map((e,n)=>y.jsx("a",{"aria-label":`Our ${e.name}`,href:e.url,target:"_blank",className:"glow-button socialbrick-link",children:y.jsx(pA,{name:e.name})},n))]})})};function gA(a){return a?a.toLowerCase().split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "):""}const ks=()=>y.jsx("span",{className:`${fl} ml-5 mr-5`,children:"|"}),ur=a=>y.jsx("li",{style:{transition:"opacity .1s .1s"},className:`outline_nav_elem_text ${fl} hover:underline hover:opacity-100`,children:y.jsxs(Kr,{to:`/${a.name}`,children:[y.jsx("style",{children:`


        `}),gA(a.name)]})}),vA=a=>a.path=="/"?y.jsxs(y.Fragment,{children:[y.jsx("nav",{className:"z-10 w-ful",children:y.jsxs("ul",{style:{fontFamily:dr},className:"list-none p-0 pb-4 m-0 flex justify-center text-xl sm:text-3xl md:text-5xl",children:[y.jsx(ur,{name:"about"}),y.jsx(ks,{}),y.jsx(ur,{name:"art"}),y.jsx(ks,{}),y.jsx(ur,{name:"projects"}),y.jsx(ks,{}),y.jsx(ur,{name:"contact"})]})}),y.jsxs("header",{style:{marginBottom:"70px"},children:[y.jsx("h1",{className:"text-center text-white",style:{fontFamily:qi,fontSize:a.width<500?"3rem":"6rem",fontWeight:"bold"},children:xl}),y.jsx("p",{className:`${fl} text-5xl text-center`,style:{fontFamily:dr},children:y.jsx("span",{children:h_})}),y.jsx("p",{style:{fontFamily:Xi},className:`text-center p-4 ${fl} text-3xl`,children:"Los Angeles, CA"}),y.jsx(mA,{})]})]}):y.jsxs(y.Fragment,{children:[y.jsx("nav",{className:"z-10 w-full mb-5",children:y.jsxs("ul",{style:{fontFamily:dr},className:"list-none p-0 m-0 flex sm:text-2xl md:text-5xl",children:[y.jsx(ur,{name:"about"}),y.jsx(ks,{}),y.jsx(ur,{name:"art"}),y.jsx(ks,{}),y.jsx(ur,{name:"projects"}),y.jsx(ks,{}),y.jsx(ur,{name:"contact"})]})}),y.jsxs("header",{style:{marginBottom:"70px"},children:[y.jsx(Kr,{to:"/",children:y.jsx("h1",{className:"text-white",style:{fontFamily:qi,fontSize:a.width<500?"1rem":"2rem",fontWeight:"bold"},children:xl})}),y.jsx("p",{className:`${fl} text-3xl text-left`,style:{fontFamily:dr},children:h_})]})]}),_A=()=>y.jsx("img",{className:"w-30",src:"/LinkedIn_Logo.svg",alt:"LinkedIn logo"}),xA=a=>{let e="";const n=new Map(a.locationData.map(l=>[l.url.replace(/^\//,""),l.title])),s=l=>l.replace(/[_-]/g," ").trim().split(" ").filter(Boolean).map(f=>f.charAt(0).toUpperCase()+f.slice(1)).join(" ");return y.jsxs(y.Fragment,{children:[y.jsx("style",{children:`
        #location-bar {
        }

        .location-bar-bttn {
          font-family: ${dr};
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

    `}),y.jsx("div",{id:"location-bar",children:a.split().map((l,c)=>{e+="/"+l;const f=n.get(l)??s(l);return y.jsxs("span",{children:[y.jsx(Kr,{to:e,children:y.jsx("button",{className:"location-bar-bttn",children:f})}),c<a.split().length-1&&y.jsx("span",{className:"location-bar-arrow",children:">"})]},`${c}-location`)})})]})},yA=()=>y.jsxs("svg",{id:"Layer_6","data-name":"Layer 6",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 1050 990",children:[y.jsx("defs",{children:y.jsx("style",{children:`
      .cls-1 {
        fill: #0e1a34;
      }

      .cls-2 {
        fill: #0b0f17;
      }

      .cls-3 {
        fill: #1e2b5a;
      }
      `})}),y.jsx("image",{width:"149",height:"149",transform:"translate(-50, -50) scale(9.2)",xlinkHref:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAACVCAYAAABRorhPAAAACXBIWXMAAAGJAAABiQGeLhE1AAABlklEQVR4nO3SoRGDAAAEQcBGIOm/PCQCHQoI8iYEsitfvbhhAAAAfs54Nr7m5f3tI9zTvq0fDU1XHOHZREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5EQFAADwDw4ePAUWKoYQ6wAAAABJRU5ErkJggg=="}),y.jsx("polygon",{className:"cls-3",transform:"translate(-20,0)",points:"1103.99 82.8 1103.99 967.01 1089.6 968.46 1089.61 960.77 1081.92 960.78 1081.93 954.05 1075.2 954.07 1075.21 946.38 1060.81 946.38 1060.82 939.66 1054.03 939.25 1053.14 931.98 1046.41 932 1046.42 925.27 1032.02 925.27 1032.03 917.59 1024.34 917.6 1024.35 910.87 1010.85 910.46 1009.95 903.2 995.56 903.2 995.56 896.48 982.06 896.07 981.17 888.81 974.44 888.82 974.45 882.09 960.05 882.09 960.05 874.42 945.66 874.42 945.66 867.7 925.03 867.7 923.59 860.02 909.19 860.02 909.19 853.31 888.08 853.31 888.08 845.63 873.69 845.63 873.69 838.91 844.9 838.91 844.9 831.24 816.11 831.24 816.11 824.52 766.69 824.52 765.25 816.85 707.68 816.85 707.68 824.52 664.49 824.52 664.49 831.24 628.99 831.24 627.55 838.91 600.2 838.91 600.2 845.63 571.41 845.63 569.97 853.31 542.62 853.31 542.62 860.02 513.84 860.02 512.4 867.7 485.05 867.7 485.05 874.42 456.26 874.42 454.82 882.09 427.47 882.09 427.47 888.81 405.4 888.81 405.4 896.49 376.61 896.49 376.61 903.2 347.82 903.2 347.82 910.88 326.71 910.88 326.71 917.6 297.92 917.6 296.49 925.27 269.14 925.27 269.14 931.99 247.07 931.99 247.07 939.67 218.28 939.67 218.28 946.38 197.17 946.38 195.73 954.06 175.09 954.06 175.09 960.78 146.31 960.78 146.31 968.45 125.2 968.45 125.2 975.17 96.41 975.17 94.97 982.85 74.34 982.85 74.34 989.56 53.22 989.56 51.79 997.24 31.15 997.24 31.15 1003.96 16.76 1003.96 16.76 788.06 10.04 788.06 10.04 148.05 37.39 148.05 38.83 140.37 67.62 140.37 67.62 133.65 103.12 133.65 103.12 125.98 131.91 125.98 131.91 119.26 175.09 119.26 175.09 111.58 218.28 111.58 218.28 104.87 384.29 104.87 384.29 111.58 413.08 111.58 413.08 119.26 427.47 119.26 427.47 125.98 448.58 125.98 449.48 133.23 462.98 133.65 462.98 140.37 477.37 140.37 478.27 147.63 485.05 148.04 485.05 154.76 499.44 154.76 499.44 162.44 513.84 162.44 513.83 169.16 520.56 169.15 521.45 176.41 534.95 176.83 534.94 183.55 542.63 183.54 542.62 191.23 557.02 191.23 557.01 197.95 563.74 197.94 564.64 205.2 578.14 205.61 578.13 212.34 592.52 212.34 593.42 219.59 606.92 220.01 606.92 226.73 628.99 226.73 628.99 234.4 713.91 234.4 715.35 226.73 744.14 226.73 744.14 220.01 771.49 220.01 772.93 212.34 794.04 212.34 794.04 205.62 814.67 205.62 816.11 197.94 837.22 197.94 837.22 191.23 857.86 191.23 859.3 183.55 873.69 183.55 873.69 176.83 894.8 176.83 894.8 169.16 909.19 169.16 909.19 162.44 929.83 162.44 931.27 154.76 945.66 154.76 945.65 148.04 959.15 147.63 960.05 140.37 981.17 140.37 981.17 133.65 995.56 133.65 995.56 125.98 1009.95 125.98 1009.95 119.26 1024.35 119.26 1024.35 111.58 1038.74 111.58 1038.74 104.87 1053.14 104.87 1053.14 97.19 1067.53 97.19 1067.53 90.47 1081.92 90.47 1081.92 82.8 1103.99 82.8"}),y.jsx("polygon",{className:"cls-1",transform:"translate(-20,0)",points:"472.49 231.55 472.49 238.74 508.47 238.74 508.47 245.94 537.26 245.94 537.26 253.13 558.85 253.13 558.85 260.33 580.44 260.33 580.44 267.52 594.84 267.52 594.84 274.72 609.23 274.72 609.23 281.92 623.63 281.92 623.63 289.11 645.22 289.11 645.22 296.31 659.61 296.31 659.61 303.5 681.2 303.5 681.2 310.7 695.6 310.7 695.6 317.89 724.39 317.89 724.39 325.09 767.57 325.09 767.57 332.28 795.64 332.28 796.36 325.09 846.02 325.09 846.74 317.89 882 317.89 882.72 310.7 910.79 310.7 911.51 303.5 939.58 303.5 940.3 296.31 968.37 296.31 969.08 289.11 997.15 289.11 997.87 281.92 1018.74 281.92 1019.46 274.72 1047.53 274.72 1048.25 267.52 1069.12 267.52 1069.84 260.33 1090.71 260.33 1091.43 253.13 1105.83 253.13 1105.83 799.26 1105.11 799.98 1084.24 799.98 1084.24 792.79 1048.25 792.79 1048.25 785.59 997.87 785.59 997.87 778.4 933.1 778.4 933.1 771.2 789.16 771.2 788.44 778.4 738.78 778.4 738.06 785.59 695.6 785.59 694.88 792.79 645.22 792.79 644.5 799.98 602.04 799.98 601.32 807.18 558.85 807.18 558.13 814.37 515.67 814.37 514.95 821.57 472.49 821.57 471.77 828.77 429.31 828.77 428.59 835.96 393.32 835.96 392.6 843.16 350.14 843.16 349.42 850.35 306.96 850.35 306.24 857.55 270.97 857.55 270.25 864.74 227.79 864.74 227.07 871.94 191.8 871.94 191.08 879.13 148.62 879.13 147.9 886.33 112.64 886.33 111.92 893.52 76.65 893.52 75.93 900.72 33.47 900.72 32.75 907.91 11.88 907.91 11.88 274.72 18.87 274.27 19.08 267.52 61.54 267.52 62.26 260.33 104.72 260.33 105.44 253.13 147.9 253.13 148.62 245.94 198.28 245.94 199 238.74 255.86 238.74 256.58 231.55 472.49 231.55"}),y.jsx("polygon",{className:"cls-2",transform:"translate(-20,0)",points:"1108.35 316.15 1108.35 553.56 1101.15 553.56 1101.15 769.38 1086.76 769.38 1086.76 762.19 1050.77 762.19 1050.77 754.99 1021.98 754.99 1021.98 747.8 1000.39 747.8 1000.39 740.6 978.8 740.6 978.8 733.41 964.41 733.41 964.41 726.22 942.82 726.22 942.82 719.02 928.42 719.02 928.42 711.83 914.03 711.83 914.03 704.63 899.63 704.63 899.63 697.44 878.04 697.44 878.04 690.25 863.65 690.25 863.65 683.05 849.25 683.05 849.25 675.86 834.86 675.86 834.86 668.66 813.27 668.66 813.27 661.47 798.88 661.47 798.88 654.27 784.48 654.27 784.48 647.08 762.89 647.08 762.89 639.89 748.5 639.89 748.5 632.69 726.9 632.69 726.9 625.5 712.51 625.5 712.51 618.3 690.92 618.3 690.92 611.11 669.33 611.11 669.33 603.92 640.54 603.92 640.54 596.72 611.75 596.72 611.75 589.53 582.96 589.53 582.96 582.33 554.17 582.33 554.17 575.14 510.99 575.14 510.99 567.95 446.22 567.95 446.22 560.75 352.66 560.75 352.66 567.95 323.87 567.95 323.87 575.14 309.47 575.14 309.47 582.33 295.08 582.33 295.08 589.53 280.69 589.53 280.69 596.72 266.29 596.72 266.29 603.92 251.9 603.92 251.9 611.11 244.7 611.11 244.7 618.3 230.31 618.3 230.31 625.5 223.11 625.5 223.11 632.69 208.72 632.69 208.72 639.89 201.52 639.89 201.52 647.08 194.32 647.08 194.32 654.27 179.93 654.27 179.93 661.47 172.73 661.47 172.73 668.66 165.53 668.66 165.53 675.86 158.34 675.86 158.34 683.05 151.14 683.05 151.14 690.25 136.74 690.25 136.74 697.44 129.55 697.44 129.55 704.63 122.35 704.63 122.35 711.83 115.15 711.83 115.15 719.02 107.96 719.02 107.96 726.22 100.76 726.22 100.76 733.41 93.56 733.41 93.56 740.6 86.36 740.6 86.36 747.8 79.17 747.8 79.17 754.99 71.97 754.99 71.97 762.19 64.77 762.19 64.77 769.38 57.58 769.38 57.58 776.57 50.38 776.57 50.38 783.77 43.18 783.77 43.18 798.16 35.99 798.16 35.99 805.35 28.79 805.35 28.79 812.54 21.59 812.54 21.59 819.74 14.39 819.74 14.39 826.93 0 826.93 0 819.74 7.2 819.74 7.2 366.51 35.99 366.51 35.99 373.71 50.38 373.71 50.38 380.9 71.97 380.9 71.97 388.09 93.56 388.09 93.56 395.29 115.15 395.29 115.15 402.48 136.74 402.48 136.74 409.68 158.34 409.68 158.34 416.87 179.93 416.87 179.93 424.06 208.72 424.06 208.72 431.26 237.5 431.26 237.5 438.45 266.29 438.45 266.29 445.65 302.28 445.65 302.28 452.84 352.66 452.84 352.66 460.03 532.58 460.03 532.58 452.84 590.16 452.84 590.16 445.65 633.34 445.65 633.34 438.45 662.13 438.45 662.13 431.26 690.92 431.26 690.92 424.06 719.71 424.06 719.71 416.87 741.3 416.87 741.3 409.68 762.89 409.68 762.89 402.48 784.48 402.48 784.48 395.29 806.07 395.29 806.07 388.09 827.66 388.09 827.66 380.9 842.06 380.9 842.06 373.71 863.65 373.71 863.65 366.51 885.24 366.51 885.24 359.32 899.63 359.32 899.63 352.12 921.23 352.12 921.23 344.93 942.82 344.93 942.82 337.74 971.61 337.74 971.61 330.54 1000.39 330.54 1000.39 323.35 1043.58 323.35 1043.58 316.15 1108.35 316.15"})]});/**
 * postprocessing v6.37.4 build Sat Jun 07 2025
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2025 Raoul van Rüschen
 * @license Zlib
 */var xh=1/1e3,SA=1e3,bA=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(a){typeof document<"u"&&document.hidden!==void 0&&(a?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=a)}get delta(){return this._delta*xh}get fixedDelta(){return this._fixedDelta*xh}set fixedDelta(a){this._fixedDelta=a*SA}get elapsed(){return this._elapsed*xh}update(a){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(a!==void 0?a:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(a){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},EA=(()=>{const a=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),n=new Ua;return n.setAttribute("position",new wi(a,3)),n.setAttribute("uv",new wi(e,2)),n})(),mi=class rp{static get fullscreenGeometry(){return EA}constructor(e="Pass",n=new Tu,s=new Sp){this.name=e,this.renderer=null,this.scene=n,this.camera=s,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const n=this.fullscreenMaterial;n!==null&&(n.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let n=this.screen;n!==null?n.material=e:(n=new fi(rp.fullscreenGeometry,e),n.frustumCulled=!1,this.scene===null&&(this.scene=new Tu),this.scene.add(n),this.screen=n)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,n=gr){}render(e,n,s,l,c){throw new Error("Render method not implemented!")}setSize(e,n){}initialize(e,n,s){}dispose(){for(const e of Object.keys(this)){const n=this[e];(n instanceof Ln||n instanceof no||n instanceof Hn||n instanceof rp)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},MA=class extends mi{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(a,e,n,s,l){const c=a.state.buffers.stencil;c.setLocked(!1),c.setTest(!1)}},TA=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <colorspace_fragment>
#include <dithering_fragment>
}`,wp="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",fx=class extends Gn{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new Mt(null),opacity:new Mt(1)},blending:Xn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:TA,vertexShader:wp})}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setInputBuffer(a){this.uniforms.inputBuffer.value=a}getOpacity(a){return this.uniforms.opacity.value}setOpacity(a){this.uniforms.opacity.value=a}},wA=class extends mi{constructor(a,e=!0){super("CopyPass"),this.fullscreenMaterial=new fx,this.needsSwap=!1,this.renderTarget=a,a===void 0&&(this.renderTarget=new Ln(1,1,{minFilter:Jn,magFilter:Jn,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(a){this.autoResize=a}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(a){this.autoResize=a}render(a,e,n,s,l){this.fullscreenMaterial.inputBuffer=e.texture,a.setRenderTarget(this.renderToScreen?null:this.renderTarget),a.render(this.scene,this.camera)}setSize(a,e){this.autoResize&&this.renderTarget.setSize(a,e)}initialize(a,e,n){n!==void 0&&(this.renderTarget.texture.type=n,n!==Nn?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":a!==null&&a.outputColorSpace===Lt&&(this.renderTarget.texture.colorSpace=Lt))}},p_=new Dt,Ap=class extends mi{constructor(a=!0,e=!0,n=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=a,this.depth=e,this.stencil=n,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(a,e,n){this.color=a,this.depth=e,this.stencil=n}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(a){this.overrideClearColor=a}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(a){this.overrideClearAlpha=a}render(a,e,n,s,l){const c=this.overrideClearColor,f=this.overrideClearAlpha,d=a.getClearAlpha(),p=c!==null,m=f>=0;p?(a.getClearColor(p_),a.setClearColor(c,m?f:d)):m&&a.setClearAlpha(f),a.setRenderTarget(this.renderToScreen?null:e),a.clear(this.color,this.depth,this.stencil),p?a.setClearColor(p_,d):m&&a.setClearAlpha(d)}},AA=class extends mi{constructor(a,e){super("MaskPass",a,e),this.needsSwap=!1,this.clearPass=new Ap(!1,!1,!0),this.inverse=!1}set mainScene(a){this.scene=a}set mainCamera(a){this.camera=a}get inverted(){return this.inverse}set inverted(a){this.inverse=a}get clear(){return this.clearPass.enabled}set clear(a){this.clearPass.enabled=a}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(a){this.inverted=a}render(a,e,n,s,l){const c=a.getContext(),f=a.state.buffers,d=this.scene,p=this.camera,m=this.clearPass,g=this.inverted?0:1,_=1-g;f.color.setMask(!1),f.depth.setMask(!1),f.color.setLocked(!0),f.depth.setLocked(!0),f.stencil.setTest(!0),f.stencil.setOp(c.REPLACE,c.REPLACE,c.REPLACE),f.stencil.setFunc(c.ALWAYS,g,4294967295),f.stencil.setClear(_),f.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?m.render(a,null):(m.render(a,e),m.render(a,n))),this.renderToScreen?(a.setRenderTarget(null),a.render(d,p)):(a.setRenderTarget(e),a.render(d,p),a.setRenderTarget(n),a.render(d,p)),f.color.setLocked(!1),f.depth.setLocked(!1),f.stencil.setLocked(!1),f.stencil.setFunc(c.EQUAL,1,4294967295),f.stencil.setOp(c.KEEP,c.KEEP,c.KEEP),f.stencil.setLocked(!0)}},RA=class{constructor(a=null,{depthBuffer:e=!0,stencilBuffer:n=!1,multisampling:s=0,frameBufferType:l}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,n,l,s),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new wA,this.depthTexture=null,this.passes=[],this.timer=new bA,this.autoRenderToScreen=!0,this.setRenderer(a)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(a){const e=this.inputBuffer,n=this.multisampling;n>0&&a>0?(this.inputBuffer.samples=a,this.outputBuffer.samples=a,this.inputBuffer.dispose(),this.outputBuffer.dispose()):n!==a&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,a),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(a){if(this.renderer=a,a!==null){const e=a.getSize(new rt),n=a.getContext().getContextAttributes().alpha,s=this.inputBuffer.texture.type;s===Nn&&a.outputColorSpace===Lt&&(this.inputBuffer.texture.colorSpace=Lt,this.outputBuffer.texture.colorSpace=Lt,this.inputBuffer.dispose(),this.outputBuffer.dispose()),a.autoClear=!1,this.setSize(e.width,e.height);for(const l of this.passes)l.initialize(a,n,s)}}replaceRenderer(a,e=!0){const n=this.renderer,s=n.domElement.parentNode;return this.setRenderer(a),e&&s!==null&&(s.removeChild(n.domElement),s.appendChild(a.domElement)),n}createDepthTexture(){const a=this.depthTexture=new bp;return this.inputBuffer.depthTexture=a,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(a.format=Qs,a.type=Ks):a.type=mr,a}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const a of this.passes)a.setDepthTexture(null)}}createBuffer(a,e,n,s){const l=this.renderer,c=l===null?new rt:l.getDrawingBufferSize(new rt),f={minFilter:Jn,magFilter:Jn,stencilBuffer:e,depthBuffer:a,type:n},d=new Ln(c.width,c.height,f);return s>0&&(d.ignoreDepthForMultisampleCopy=!1,d.samples=s),n===Nn&&l!==null&&l.outputColorSpace===Lt&&(d.texture.colorSpace=Lt),d.texture.name="EffectComposer.Buffer",d.texture.generateMipmaps=!1,d}setMainScene(a){for(const e of this.passes)e.mainScene=a}setMainCamera(a){for(const e of this.passes)e.mainCamera=a}addPass(a,e){const n=this.passes,s=this.renderer,l=s.getDrawingBufferSize(new rt),c=s.getContext().getContextAttributes().alpha,f=this.inputBuffer.texture.type;if(a.setRenderer(s),a.setSize(l.width,l.height),a.initialize(s,c,f),this.autoRenderToScreen&&(n.length>0&&(n[n.length-1].renderToScreen=!1),a.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?n.splice(e,0,a):n.push(a),this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!0),a.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const d=this.createDepthTexture();for(a of n)a.setDepthTexture(d)}else a.setDepthTexture(this.depthTexture)}removePass(a){const e=this.passes,n=e.indexOf(a);if(n!==-1&&e.splice(n,1).length>0){if(this.depthTexture!==null){const c=(d,p)=>d||p.needsDepthTexture;e.reduce(c,!1)||(a.getDepthTexture()===this.depthTexture&&a.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&n===e.length&&(a.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const a=this.passes;this.deleteDepthTexture(),a.length>0&&(this.autoRenderToScreen&&(a[a.length-1].renderToScreen=!1),this.passes=[])}render(a){const e=this.renderer,n=this.copyPass;let s=this.inputBuffer,l=this.outputBuffer,c=!1,f,d,p;a===void 0&&(this.timer.update(),a=this.timer.getDelta());for(const m of this.passes)m.enabled&&(m.render(e,s,l,a,c),m.needsSwap&&(c&&(n.renderToScreen=m.renderToScreen,f=e.getContext(),d=e.state.buffers.stencil,d.setFunc(f.NOTEQUAL,1,4294967295),n.render(e,s,l,a,c),d.setFunc(f.EQUAL,1,4294967295)),p=s,s=l,l=p),m instanceof AA?c=!0:m instanceof MA&&(c=!1))}setSize(a,e,n){const s=this.renderer,l=s.getSize(new rt);(a===void 0||e===void 0)&&(a=l.width,e=l.height),(l.width!==a||l.height!==e)&&s.setSize(a,e,n);const c=s.getDrawingBufferSize(new rt);this.inputBuffer.setSize(c.width,c.height),this.outputBuffer.setSize(c.width,c.height);for(const f of this.passes)f.setSize(c.width,c.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const a of this.passes)a.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),mi.fullscreenGeometry.dispose()}},pr={NONE:0,DEPTH:1,CONVOLUTION:2},Ct={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},CA=class{constructor(){this.shaderParts=new Map([[Ct.FRAGMENT_HEAD,null],[Ct.FRAGMENT_MAIN_UV,null],[Ct.FRAGMENT_MAIN_IMAGE,null],[Ct.VERTEX_HEAD,null],[Ct.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=pr.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=vr}},yh=!1,m_=class{constructor(a=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(a),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let n;if(e.material.flatShading)switch(e.material.side){case ui:n=this.materialsFlatShadedDoubleSide;break;case Mn:n=this.materialsFlatShadedBackSide;break;default:n=this.materialsFlatShaded;break}else switch(e.material.side){case ui:n=this.materialsDoubleSide;break;case Mn:n=this.materialsBackSide;break;default:n=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=n[2]:e.isInstancedMesh?e.material=n[1]:e.material=n[0],++this.meshCount}}}cloneMaterial(a){if(!(a instanceof Gn))return a.clone();const e=a.uniforms,n=new Map;for(const l in e){const c=e[l].value;c.isRenderTargetTexture&&(e[l].value=null,n.set(l,c))}const s=a.clone();for(const l of n)e[l[0]].value=l[1],s.uniforms[l[0]].value=l[1];return s}setMaterial(a){if(this.disposeMaterials(),this.material=a,a!==null){const e=this.materials=[this.cloneMaterial(a),this.cloneMaterial(a),this.cloneMaterial(a)];for(const n of e)n.uniforms=Object.assign({},a.uniforms),n.side=Aa;e[2].skinning=!0,this.materialsBackSide=e.map(n=>{const s=this.cloneMaterial(n);return s.uniforms=Object.assign({},a.uniforms),s.side=Mn,s}),this.materialsDoubleSide=e.map(n=>{const s=this.cloneMaterial(n);return s.uniforms=Object.assign({},a.uniforms),s.side=ui,s}),this.materialsFlatShaded=e.map(n=>{const s=this.cloneMaterial(n);return s.uniforms=Object.assign({},a.uniforms),s.flatShading=!0,s}),this.materialsFlatShadedBackSide=e.map(n=>{const s=this.cloneMaterial(n);return s.uniforms=Object.assign({},a.uniforms),s.flatShading=!0,s.side=Mn,s}),this.materialsFlatShadedDoubleSide=e.map(n=>{const s=this.cloneMaterial(n);return s.uniforms=Object.assign({},a.uniforms),s.flatShading=!0,s.side=ui,s})}}render(a,e,n){const s=a.shadowMap.enabled;if(a.shadowMap.enabled=!1,yh){const l=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),a.render(e,n);for(const c of l)c[0].material=c[1];this.meshCount!==l.size&&l.clear()}else{const l=e.overrideMaterial;e.overrideMaterial=this.material,a.render(e,n),e.overrideMaterial=l}a.shadowMap.enabled=s}disposeMaterials(){if(this.material!==null){const a=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of a)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return yh}static set workaroundEnabled(a){yh=a}},fr=-1,di=class extends Da{constructor(a,e=fr,n=fr,s=1){super(),this.resizable=a,this.baseSize=new rt(1,1),this.preferredSize=new rt(e,n),this.target=this.preferredSize,this.s=s,this.effectiveSize=new rt,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const a=this.baseSize,e=this.preferredSize,n=this.effectiveSize,s=this.scale;e.width!==fr?n.width=e.width:e.height!==fr?n.width=Math.round(e.height*(a.width/Math.max(a.height,1))):n.width=Math.round(a.width*s),e.height!==fr?n.height=e.height:e.width!==fr?n.height=Math.round(e.width/Math.max(a.width/Math.max(a.height,1),1)):n.height=Math.round(a.height*s)}get width(){return this.effectiveSize.width}set width(a){this.preferredWidth=a}get height(){return this.effectiveSize.height}set height(a){this.preferredHeight=a}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(a){this.s!==a&&(this.s=a,this.preferredSize.setScalar(fr),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(a){this.scale=a}get baseWidth(){return this.baseSize.width}set baseWidth(a){this.baseSize.width!==a&&(this.baseSize.width=a,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(a){this.baseWidth=a}get baseHeight(){return this.baseSize.height}set baseHeight(a){this.baseSize.height!==a&&(this.baseSize.height=a,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(a){this.baseHeight=a}setBaseSize(a,e){(this.baseSize.width!==a||this.baseSize.height!==e)&&(this.baseSize.set(a,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(a){this.preferredSize.width!==a&&(this.preferredSize.width=a,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(a){this.preferredWidth=a}get preferredHeight(){return this.preferredSize.height}set preferredHeight(a){this.preferredSize.height!==a&&(this.preferredSize.height=a,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(a){this.preferredHeight=a}setPreferredSize(a,e){(this.preferredSize.width!==a||this.preferredSize.height!==e)&&(this.preferredSize.set(a,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(a){this.s=a.scale,this.baseSize.set(a.baseWidth,a.baseHeight),this.preferredSize.set(a.preferredWidth,a.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return fr}},DA=class{constructor(a=0){this.nextId=a}getNextId(){return this.nextId++}reset(a=0){return this.nextId=a,this}},Sh=new DA(2),UA=class extends Set{constructor(a,e=Sh.getNextId()){super(),this.exclusive=!1,this._layer=e,(this._layer<1||this._layer>31)&&(console.warn("Layer out of range, resetting to 2"),Sh.reset(2),this._layer=Sh.getNextId()),a!==void 0&&this.set(a)}get layer(){return this._layer}set layer(a){const e=this._layer;for(const n of this)n.layers.disable(e),n.layers.enable(a);this._layer=a}getLayer(){return this.layer}setLayer(a){this.layer=a}isExclusive(){return this.exclusive}setExclusive(a){this.exclusive=a}clear(){const a=this.layer;for(const e of this)e.layers.disable(a);return super.clear()}set(a){this.clear();for(const e of a)this.add(e);return this}indexOf(a){return this.has(a)?0:-1}add(a){return this.exclusive?a.layers.set(this.layer):a.layers.enable(this.layer),super.add(a)}delete(a){return this.has(a)&&a.layers.disable(this.layer),super.delete(a)}toggle(a){let e;return this.has(a)?(this.delete(a),e=!1):(this.add(a),e=!0),e}setVisible(a){for(const e of this)a?e.layers.enable(0):e.layers.disable(0);return this}},vt={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},NA="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y,opacity);}",LA="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,min(y.a,opacity));}",PA="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y)*0.5,opacity);}",OA="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.rg,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",BA="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(step(0.0,y)*(1.0-min(vec4(1.0),(1.0-x)/y)),vec4(1.0),step(1.0,x));return mix(x,z,opacity);}",IA="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=step(0.0,x)*mix(min(vec4(1.0),x/max(1.0-y,1e-9)),vec4(1.0),step(1.0,y));return mix(x,z,opacity);}",zA="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x,y),opacity);}",FA="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,abs(x-y),opacity);}",HA="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x/max(y,1e-12),opacity);}",GA="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y-2.0*x*y),opacity);}",VA="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 a=min(x,1.0),b=min(y,1.0);vec4 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,y));return mix(x,z,opacity);}",kA="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,step(1.0,x+y),opacity);}",jA="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.r,xHSL.gb));return vec4(mix(x.rgb,z,opacity),y.a);}",XA="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-y,opacity);}",WA="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y*(1.0-x),opacity);}",qA="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x,y),opacity);}",YA="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(y+x-1.0,0.0,1.0),opacity);}",ZA="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x+y,1.0),opacity);}",KA="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(2.0*y+x-1.0,0.0,1.0),opacity);}",QA="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.rg,yHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",$A="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x*y,opacity);}",JA="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-abs(1.0-x-y),opacity);}",eR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}",tR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(2.0*y*x,1.0-2.0*(1.0-y)*(1.0-x),step(0.5,x));return mix(x,z,opacity);}",nR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 z=mix(mix(y2,x,step(0.5*x,y)),max(vec4(0.0),y2-1.0),step(x,(y2-1.0)));return mix(x,z,opacity);}",iR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(min(x*x/max(1.0-y,1e-12),1.0),y,step(1.0,y));return mix(x,z,opacity);}",aR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.r,yHSL.g,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",rR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y-min(x*y,1.0),opacity);}",sR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 w=step(0.5,y);vec4 z=mix(x-(1.0-y2)*x*(1.0-x),mix(x+(y2-1.0)*(sqrt(x)-x),x+(y2-1.0)*x*((16.0*x-12.0)*x+3.0),w*(1.0-step(0.25,x))),w);return mix(x,z,opacity);}",oR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",lR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x+y-1.0,0.0),opacity);}",cR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(max(1.0-min((1.0-x)/(2.0*y),1.0),0.0),min(x/(2.0*(1.0-y)),1.0),step(0.5,y));return mix(x,z,opacity);}",uR=new Map([[vt.ADD,NA],[vt.ALPHA,LA],[vt.AVERAGE,PA],[vt.COLOR,OA],[vt.COLOR_BURN,BA],[vt.COLOR_DODGE,IA],[vt.DARKEN,zA],[vt.DIFFERENCE,FA],[vt.DIVIDE,HA],[vt.DST,null],[vt.EXCLUSION,GA],[vt.HARD_LIGHT,VA],[vt.HARD_MIX,kA],[vt.HUE,jA],[vt.INVERT,XA],[vt.INVERT_RGB,WA],[vt.LIGHTEN,qA],[vt.LINEAR_BURN,YA],[vt.LINEAR_DODGE,ZA],[vt.LINEAR_LIGHT,KA],[vt.LUMINOSITY,QA],[vt.MULTIPLY,$A],[vt.NEGATION,JA],[vt.NORMAL,eR],[vt.OVERLAY,tR],[vt.PIN_LIGHT,nR],[vt.REFLECT,iR],[vt.SATURATION,aR],[vt.SCREEN,rR],[vt.SOFT_LIGHT,sR],[vt.SRC,oR],[vt.SUBTRACT,lR],[vt.VIVID_LIGHT,cR]]),fR=class extends Da{constructor(a,e=1){super(),this._blendFunction=a,this.opacity=new Mt(e)}getOpacity(){return this.opacity.value}setOpacity(a){this.opacity.value=a}get blendFunction(){return this._blendFunction}set blendFunction(a){this._blendFunction=a,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(a){this.blendFunction=a}getShaderCode(){return uR.get(this.blendFunction)}},dR=class extends Da{constructor(a,e,{attributes:n=pr.NONE,blendFunction:s=vt.NORMAL,defines:l=new Map,uniforms:c=new Map,extensions:f=null,vertexShader:d=null}={}){super(),this.name=a,this.renderer=null,this.attributes=n,this.fragmentShader=e,this.vertexShader=d,this.defines=l,this.uniforms=c,this.extensions=f,this.blendMode=new fR(s),this.blendMode.addEventListener("change",p=>this.setChanged()),this._inputColorSpace=vr,this._outputColorSpace=ki}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(a){this._inputColorSpace=a,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(a){this._outputColorSpace=a,this.setChanged()}set mainScene(a){}set mainCamera(a){}getName(){return this.name}setRenderer(a){this.renderer=a}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(a){this.attributes=a,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(a){this.fragmentShader=a,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(a){this.vertexShader=a,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(a,e=gr){}update(a,e,n){}setSize(a,e){}initialize(a,e,n){}dispose(){for(const a of Object.keys(this)){const e=this[a];(e instanceof Ln||e instanceof no||e instanceof Hn||e instanceof mi)&&this[a].dispose()}}},Rp={MEDIUM:2,LARGE:3},hR=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,pR="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",mR=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],gR=class extends Gn{constructor(a=new $t){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new Mt(null),texelSize:new Mt(new $t),scale:new Mt(1),kernel:new Mt(0)},blending:Xn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:hR,vertexShader:pR}),this.setTexelSize(a.x,a.y),this.kernelSize=Rp.MEDIUM}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setInputBuffer(a){this.inputBuffer=a}get kernelSequence(){return mR[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(a){this.uniforms.scale.value=a}getScale(){return this.uniforms.scale.value}setScale(a){this.uniforms.scale.value=a}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(a){this.uniforms.kernel.value=a}setKernel(a){this.kernel=a}setTexelSize(a,e){this.uniforms.texelSize.value.set(a,e,a*.5,e*.5)}setSize(a,e){const n=1/a,s=1/e;this.uniforms.texelSize.value.set(n,s,n*.5,s*.5)}},vR=class extends mi{constructor({kernelSize:a=Rp.MEDIUM,resolutionScale:e=.5,width:n=di.AUTO_SIZE,height:s=di.AUTO_SIZE,resolutionX:l=n,resolutionY:c=s}={}){super("KawaseBlurPass"),this.renderTargetA=new Ln(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const f=this.resolution=new di(this,l,c,e);f.addEventListener("change",d=>this.setSize(f.baseWidth,f.baseHeight)),this._blurMaterial=new gR,this._blurMaterial.kernelSize=a,this.copyMaterial=new fx}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(a){this._blurMaterial=a}get dithering(){return this.copyMaterial.dithering}set dithering(a){this.copyMaterial.dithering=a}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(a){this.blurMaterial.kernelSize=a}get width(){return this.resolution.width}set width(a){this.resolution.preferredWidth=a}get height(){return this.resolution.height}set height(a){this.resolution.preferredHeight=a}get scale(){return this.blurMaterial.scale}set scale(a){this.blurMaterial.scale=a}getScale(){return this.blurMaterial.scale}setScale(a){this.blurMaterial.scale=a}getKernelSize(){return this.kernelSize}setKernelSize(a){this.kernelSize=a}getResolutionScale(){return this.resolution.scale}setResolutionScale(a){this.resolution.scale=a}render(a,e,n,s,l){const c=this.scene,f=this.camera,d=this.renderTargetA,p=this.renderTargetB,m=this.blurMaterial,g=m.kernelSequence;let _=e;this.fullscreenMaterial=m;for(let x=0,b=g.length;x<b;++x){const M=(x&1)===0?d:p;m.kernel=g[x],m.inputBuffer=_.texture,a.setRenderTarget(M),a.render(c,f),_=M}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=_.texture,a.setRenderTarget(this.renderToScreen?null:n),a.render(c,f)}setSize(a,e){const n=this.resolution;n.setBaseSize(a,e);const s=n.width,l=n.height;this.renderTargetA.setSize(s,l),this.renderTargetB.setSize(s,l),this.blurMaterial.setSize(a,e)}initialize(a,e,n){n!==void 0&&(this.renderTargetA.texture.type=n,this.renderTargetB.texture.type=n,n!==Nn?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):a!==null&&a.outputColorSpace===Lt&&(this.renderTargetA.texture.colorSpace=Lt,this.renderTargetB.texture.colorSpace=Lt))}static get AUTO_SIZE(){return di.AUTO_SIZE}},_R=`#include <common>
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
}`,xR=class extends Gn{constructor(a=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:El.replace(/\D+/g,"")},uniforms:{inputBuffer:new Mt(null),threshold:new Mt(0),smoothing:new Mt(1),range:new Mt(null)},blending:Xn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:_R,vertexShader:wp}),this.colorOutput=a,this.luminanceRange=e}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setInputBuffer(a){this.uniforms.inputBuffer.value=a}get threshold(){return this.uniforms.threshold.value}set threshold(a){this.smoothing>0||a>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=a}getThreshold(){return this.threshold}setThreshold(a){this.threshold=a}get smoothing(){return this.uniforms.smoothing.value}set smoothing(a){this.threshold>0||a>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=a}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(a){this.smoothing=a}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(a){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(a){a?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(a){return this.colorOutput}setColorOutputEnabled(a){this.colorOutput=a}get useRange(){return this.luminanceRange!==null}set useRange(a){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(a){a!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=a,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(a){this.luminanceRange=a}},yR=class extends mi{constructor({renderTarget:a,luminanceRange:e,colorOutput:n,resolutionScale:s=1,width:l=di.AUTO_SIZE,height:c=di.AUTO_SIZE,resolutionX:f=l,resolutionY:d=c}={}){super("LuminancePass"),this.fullscreenMaterial=new xR(n,e),this.needsSwap=!1,this.renderTarget=a,this.renderTarget===void 0&&(this.renderTarget=new Ln(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const p=this.resolution=new di(this,f,d,s);p.addEventListener("change",m=>this.setSize(p.baseWidth,p.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(a,e,n,s,l){const c=this.fullscreenMaterial;c.inputBuffer=e.texture,a.setRenderTarget(this.renderToScreen?null:this.renderTarget),a.render(this.scene,this.camera)}setSize(a,e){const n=this.resolution;n.setBaseSize(a,e),this.renderTarget.setSize(n.width,n.height)}initialize(a,e,n){n!==void 0&&n!==Nn&&(this.renderTarget.texture.type=n,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},SR=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.0555555
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,bR="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",ER=class extends Gn{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new Mt(null),texelSize:new Mt(new rt)},blending:Xn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:SR,vertexShader:bR})}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setSize(a,e){this.uniforms.texelSize.value.set(1/a,1/e)}},MR=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,TR="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",wR=class extends Gn{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new Mt(null),supportBuffer:new Mt(null),texelSize:new Mt(new rt),radius:new Mt(.85)},blending:Xn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:MR,vertexShader:TR})}set inputBuffer(a){this.uniforms.inputBuffer.value=a}set supportBuffer(a){this.uniforms.supportBuffer.value=a}get radius(){return this.uniforms.radius.value}set radius(a){this.uniforms.radius.value=a}setSize(a,e){this.uniforms.texelSize.value.set(1/a,1/e)}},AR=class extends mi{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new Ln(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new ER,this.upsamplingMaterial=new wR,this.resolution=new rt}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(a){if(this.levels!==a){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let n=0;n<a;++n){const s=e.clone();s.texture.name="Downsampling.Mipmap"+n,this.downsamplingMipmaps.push(s)}this.upsamplingMipmaps.push(e);for(let n=1,s=a-1;n<s;++n){const l=e.clone();l.texture.name="Upsampling.Mipmap"+n,this.upsamplingMipmaps.push(l)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(a){this.upsamplingMaterial.radius=a}render(a,e,n,s,l){const{scene:c,camera:f}=this,{downsamplingMaterial:d,upsamplingMaterial:p}=this,{downsamplingMipmaps:m,upsamplingMipmaps:g}=this;let _=e;this.fullscreenMaterial=d;for(let x=0,b=m.length;x<b;++x){const M=m[x];d.setSize(_.width,_.height),d.inputBuffer=_.texture,a.setRenderTarget(M),a.render(c,f),_=M}this.fullscreenMaterial=p;for(let x=g.length-1;x>=0;--x){const b=g[x];p.setSize(_.width,_.height),p.inputBuffer=_.texture,p.supportBuffer=m[x].texture,a.setRenderTarget(b),a.render(c,f),_=b}}setSize(a,e){const n=this.resolution;n.set(a,e);let s=n.width,l=n.height;for(let c=0,f=this.downsamplingMipmaps.length;c<f;++c)s=Math.round(s*.5),l=Math.round(l*.5),this.downsamplingMipmaps[c].setSize(s,l),c<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[c].setSize(s,l)}initialize(a,e,n){if(n!==void 0){const s=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const l of s)l.texture.type=n;if(n!==Nn)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(a!==null&&a.outputColorSpace===Lt)for(const l of s)l.texture.colorSpace=Lt}}dispose(){super.dispose();for(const a of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))a.dispose()}},RR=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 texel=texture2D(map,uv);outputColor=vec4(texel.rgb*intensity,texel.a);}`,CR=class extends dR{constructor({blendFunction:a=vt.SCREEN,luminanceThreshold:e=.9,luminanceSmoothing:n=.025,mipmapBlur:s=!1,intensity:l=1,radius:c=.85,levels:f=8,kernelSize:d=Rp.LARGE,resolutionScale:p=.5,width:m=di.AUTO_SIZE,height:g=di.AUTO_SIZE,resolutionX:_=m,resolutionY:x=g}={}){super("BloomEffect",RR,{blendFunction:a,uniforms:new Map([["map",new Mt(null)],["intensity",new Mt(l)]])}),this.renderTarget=new Ln(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new vR({kernelSize:d}),this.luminancePass=new yR({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=n,this.mipmapBlurPass=new AR,this.mipmapBlurPass.enabled=s,this.mipmapBlurPass.radius=c,this.mipmapBlurPass.levels=f,this.uniforms.get("map").value=s?this.mipmapBlurPass.texture:this.renderTarget.texture;const b=this.resolution=new di(this,_,x,p);b.addEventListener("change",M=>this.setSize(b.baseWidth,b.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(a){this.resolution.preferredWidth=a}get height(){return this.resolution.height}set height(a){this.resolution.preferredHeight=a}get dithering(){return this.blurPass.dithering}set dithering(a){this.blurPass.dithering=a}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(a){this.blurPass.kernelSize=a}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(a){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(a){this.uniforms.get("intensity").value=a}getIntensity(){return this.intensity}setIntensity(a){this.intensity=a}getResolutionScale(){return this.resolution.scale}setResolutionScale(a){this.resolution.scale=a}update(a,e,n){const s=this.renderTarget,l=this.luminancePass;l.enabled?(l.render(a,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(a,l.renderTarget):this.blurPass.render(a,l.renderTarget,s)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(a,e):this.blurPass.render(a,e,s)}setSize(a,e){const n=this.resolution;n.setBaseSize(a,e),this.renderTarget.setSize(n.width,n.height),this.blurPass.resolution.copy(n),this.luminancePass.setSize(a,e),this.mipmapBlurPass.setSize(a,e)}initialize(a,e,n){this.blurPass.initialize(a,e,n),this.luminancePass.initialize(a,e,n),this.mipmapBlurPass.initialize(a,e,n),n!==void 0&&(this.renderTarget.texture.type=n,a!==null&&a.outputColorSpace===Lt&&(this.renderTarget.texture.colorSpace=Lt))}},DR=class extends mi{constructor(a,e="inputBuffer"){super("ShaderPass"),this.fullscreenMaterial=a,this.input=e}setInput(a){this.input=a}render(a,e,n,s,l){const c=this.fullscreenMaterial.uniforms;e!==null&&c!==void 0&&c[this.input]!==void 0&&(c[this.input].value=e.texture),a.setRenderTarget(this.renderToScreen?null:n),a.render(this.scene,this.camera)}initialize(a,e,n){n!==void 0&&n!==Nn&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},dl={KEEP_MAX_DEPTH:1,DISCARD_MAX_DEPTH:2},UR=`#include <common>
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
#ifdef LOG_DEPTH
float d=pow(2.0,depth.x*log2(cameraNearFar.y+1.0))-1.0;float a=cameraNearFar.y/(cameraNearFar.y-cameraNearFar.x);float b=cameraNearFar.y*cameraNearFar.x/(cameraNearFar.x-cameraNearFar.y);depth.x=a+b/d;
#endif
#endif
#if DEPTH_PACKING_1 == 3201
depth.y=unpackRGBAToDepth(texture2D(depthBuffer1,vUv));
#else
depth.y=texture2D(depthBuffer1,vUv).r;
#ifdef LOG_DEPTH
float d=pow(2.0,depth.y*log2(cameraNearFar.y+1.0))-1.0;float a=cameraNearFar.y/(cameraNearFar.y-cameraNearFar.x);float b=cameraNearFar.y*cameraNearFar.x/(cameraNearFar.x-cameraNearFar.y);depth.y=a+b/d;
#endif
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
if(keep){gl_FragColor=texture2D(inputBuffer,vUv);}else{discard;}}`,NR=class extends Gn{constructor(){super({name:"DepthMaskMaterial",defines:{DEPTH_EPSILON:"0.0001",DEPTH_PACKING_0:"0",DEPTH_PACKING_1:"0",DEPTH_TEST_STRATEGY:dl.KEEP_MAX_DEPTH},uniforms:{inputBuffer:new Mt(null),depthBuffer0:new Mt(null),depthBuffer1:new Mt(null),cameraNearFar:new Mt(new rt(1,1))},blending:Xn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:UR,vertexShader:wp}),this.depthMode=pl}set depthBuffer0(a){this.uniforms.depthBuffer0.value=a}set depthPacking0(a){this.defines.DEPTH_PACKING_0=a.toFixed(0),this.needsUpdate=!0}setDepthBuffer0(a,e=gr){this.depthBuffer0=a,this.depthPacking0=e}set depthBuffer1(a){this.uniforms.depthBuffer1.value=a}set depthPacking1(a){this.defines.DEPTH_PACKING_1=a.toFixed(0),this.needsUpdate=!0}setDepthBuffer1(a,e=gr){this.depthBuffer1=a,this.depthPacking1=e}get maxDepthStrategy(){return Number(this.defines.DEPTH_TEST_STRATEGY)}set maxDepthStrategy(a){this.defines.DEPTH_TEST_STRATEGY=a.toFixed(0),this.needsUpdate=!0}get keepFar(){return this.maxDepthStrategy}set keepFar(a){this.maxDepthStrategy=a?dl.KEEP_MAX_DEPTH:dl.DISCARD_MAX_DEPTH}getMaxDepthStrategy(){return this.maxDepthStrategy}setMaxDepthStrategy(a){this.maxDepthStrategy=a}get epsilon(){return Number(this.defines.DEPTH_EPSILON)}set epsilon(a){this.defines.DEPTH_EPSILON=a.toFixed(16),this.needsUpdate=!0}getEpsilon(){return this.epsilon}setEpsilon(a){this.epsilon=a}get depthMode(){return Number(this.defines.DEPTH_MODE)}set depthMode(a){let e;switch(a){case _u:e="false";break;case xu:e="true";break;case qs:e="abs(d1 - d0) <= DEPTH_EPSILON";break;case ml:e="abs(d1 - d0) > DEPTH_EPSILON";break;case pl:e="d0 > d1";break;case Zr:e="d0 >= d1";break;case yu:e="d0 <= d1";break;case Su:default:e="d0 < d1";break}this.defines.DEPTH_MODE=a.toFixed(0),this.defines["depthTest(d0, d1)"]=e,this.needsUpdate=!0}getDepthMode(){return this.depthMode}setDepthMode(a){this.depthMode=a}adoptCameraSettings(a){this.copyCameraSettings(a)}copyCameraSettings(a){a&&(this.uniforms.cameraNearFar.value.set(a.near,a.far),a instanceof jn?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}},dx=class extends mi{constructor(a,e,n=null){super("RenderPass",a,e),this.needsSwap=!1,this.clearPass=new Ap,this.overrideMaterialManager=n===null?null:new m_(n),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(a){this.scene=a}set mainCamera(a){this.camera=a}get renderToScreen(){return super.renderToScreen}set renderToScreen(a){super.renderToScreen=a,this.clearPass.renderToScreen=a}get overrideMaterial(){const a=this.overrideMaterialManager;return a!==null?a.material:null}set overrideMaterial(a){const e=this.overrideMaterialManager;a!==null?e!==null?e.setMaterial(a):this.overrideMaterialManager=new m_(a):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(a){this.overrideMaterial=a}get clear(){return this.clearPass.enabled}set clear(a){this.clearPass.enabled=a}getSelection(){return this.selection}setSelection(a){this.selection=a}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(a){this.ignoreBackground=a}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(a){this.skipShadowMapUpdate=a}getClearPass(){return this.clearPass}render(a,e,n,s,l){const c=this.scene,f=this.camera,d=this.selection,p=f.layers.mask,m=c.background,g=a.shadowMap.autoUpdate,_=this.renderToScreen?null:e;d!==null&&f.layers.set(d.getLayer()),this.skipShadowMapUpdate&&(a.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(c.background=null),this.clearPass.enabled&&this.clearPass.render(a,e),a.setRenderTarget(_),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(a,c,f):a.render(c,f),f.layers.mask=p,c.background=m,a.shadowMap.autoUpdate=g}},LR=class extends mi{constructor(a,e,{renderTarget:n,resolutionScale:s=1,width:l=di.AUTO_SIZE,height:c=di.AUTO_SIZE,resolutionX:f=l,resolutionY:d=c}={}){super("DepthPass"),this.needsSwap=!1,this.renderPass=new dx(a,e,new nx({depthPacking:_p}));const p=this.renderPass;p.skipShadowMapUpdate=!0,p.ignoreBackground=!0;const m=p.clearPass;m.overrideClearColor=new Dt(16777215),m.overrideClearAlpha=1,this.renderTarget=n,this.renderTarget===void 0&&(this.renderTarget=new Ln(1,1,{minFilter:hi,magFilter:hi}),this.renderTarget.texture.name="DepthPass.Target");const g=this.resolution=new di(this,f,d,s);g.addEventListener("change",_=>this.setSize(g.baseWidth,g.baseHeight))}set mainScene(a){this.renderPass.mainScene=a}set mainCamera(a){this.renderPass.mainCamera=a}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}getResolutionScale(){return this.resolution.scale}setResolutionScale(a){this.resolution.scale=a}render(a,e,n,s,l){const c=this.renderToScreen?null:this.renderTarget;this.renderPass.render(a,c)}setSize(a,e){const n=this.resolution;n.setBaseSize(a,e),this.renderTarget.setSize(n.width,n.height)}},PR=class extends CR{constructor(a,e,n){super(n),this.setAttributes(this.getAttributes()|pr.DEPTH),this.camera=e,this.depthPass=new LR(a,e),this.clearPass=new Ap(!0,!1,!1),this.clearPass.overrideClearColor=new Dt(0),this.depthMaskPass=new DR(new NR);const s=this.depthMaskMaterial;s.copyCameraSettings(e),s.depthBuffer1=this.depthPass.texture,s.depthPacking1=_p,s.depthMode=qs,this.renderTargetMasked=new Ln(1,1,{depthBuffer:!1}),this.renderTargetMasked.texture.name="Bloom.Masked",this.selection=new UA,this._inverted=!1,this._ignoreBackground=!1}set mainScene(a){this.depthPass.mainScene=a}set mainCamera(a){this.camera=a,this.depthPass.mainCamera=a,this.depthMaskMaterial.copyCameraSettings(a)}getSelection(){return this.selection}get depthMaskMaterial(){return this.depthMaskPass.fullscreenMaterial}get inverted(){return this._inverted}set inverted(a){this._inverted=a,this.depthMaskMaterial.depthMode=a?ml:qs}isInverted(){return this.inverted}setInverted(a){this.inverted=a}get ignoreBackground(){return this._ignoreBackground}set ignoreBackground(a){this._ignoreBackground=a,this.depthMaskMaterial.maxDepthStrategy=a?dl.DISCARD_MAX_DEPTH:dl.KEEP_MAX_DEPTH}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(a){this.ignoreBackground=a}setDepthTexture(a,e=gr){this.depthMaskMaterial.depthBuffer0=a,this.depthMaskMaterial.depthPacking0=e}update(a,e,n){const s=this.camera,l=this.selection,c=this.inverted;let f=e;if(this.ignoreBackground||!c||l.size>0){const d=s.layers.mask;s.layers.set(l.layer),this.depthPass.render(a),s.layers.mask=d,f=this.renderTargetMasked,this.clearPass.render(a,f),this.depthMaskPass.render(a,e,f)}super.update(a,f,n)}setSize(a,e){super.setSize(a,e),this.renderTargetMasked.setSize(a,e),this.depthPass.setSize(a,e)}initialize(a,e,n){super.initialize(a,e,n),this.clearPass.initialize(a,e,n),this.depthPass.initialize(a,e,n),this.depthMaskPass.initialize(a,e,n),a!==null&&a.capabilities.logarithmicDepthBuffer&&(this.depthMaskPass.fullscreenMaterial.defines.LOG_DEPTH="1"),n!==void 0&&(this.renderTargetMasked.texture.type=n,a!==null&&a.outputColorSpace===Lt&&(this.renderTargetMasked.texture.colorSpace=Lt))}},OR=`#include <common>
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
}`,BR="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",IR=class extends Gn{constructor(a,e,n,s,l=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:El.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new Mt(null),depthBuffer:new Mt(null),resolution:new Mt(new rt),texelSize:new Mt(new rt),cameraNear:new Mt(.3),cameraFar:new Mt(1e3),aspect:new Mt(1),time:new Mt(0)},blending:Xn,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:l}),a&&this.setShaderParts(a),e&&this.setDefines(e),n&&this.setUniforms(n),this.copyCameraSettings(s)}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setInputBuffer(a){this.uniforms.inputBuffer.value=a}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(a){this.uniforms.depthBuffer.value=a}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(a){this.defines.DEPTH_PACKING=a.toFixed(0),this.needsUpdate=!0}setDepthBuffer(a,e=gr){this.depthBuffer=a,this.depthPacking=e}setShaderData(a){this.setShaderParts(a.shaderParts),this.setDefines(a.defines),this.setUniforms(a.uniforms),this.setExtensions(a.extensions)}setShaderParts(a){return this.fragmentShader=OR.replace(Ct.FRAGMENT_HEAD,a.get(Ct.FRAGMENT_HEAD)||"").replace(Ct.FRAGMENT_MAIN_UV,a.get(Ct.FRAGMENT_MAIN_UV)||"").replace(Ct.FRAGMENT_MAIN_IMAGE,a.get(Ct.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=BR.replace(Ct.VERTEX_HEAD,a.get(Ct.VERTEX_HEAD)||"").replace(Ct.VERTEX_MAIN_SUPPORT,a.get(Ct.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(a){for(const e of a.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(a){for(const e of a.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(a){this.extensions={};for(const e of a)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(a){this.encodeOutput!==a&&(a?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(a){return this.encodeOutput}setOutputEncodingEnabled(a){this.encodeOutput=a}get time(){return this.uniforms.time.value}set time(a){this.uniforms.time.value=a}setDeltaTime(a){this.uniforms.time.value+=a}adoptCameraSettings(a){this.copyCameraSettings(a)}copyCameraSettings(a){a&&(this.uniforms.cameraNear.value=a.near,this.uniforms.cameraFar.value=a.far,a instanceof jn?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(a,e){const n=this.uniforms;n.resolution.value.set(a,e),n.texelSize.value.set(1/a,1/e),n.aspect.value=a/e}static get Section(){return Ct}};function g_(a,e,n){for(const s of e){const l="$1"+a+s.charAt(0).toUpperCase()+s.slice(1),c=new RegExp("([^\\.])(\\b"+s+"\\b)","g");for(const f of n.entries())f[1]!==null&&n.set(f[0],f[1].replace(c,l))}}function zR(a,e,n){let s=e.getFragmentShader(),l=e.getVertexShader();const c=s!==void 0&&/mainImage/.test(s),f=s!==void 0&&/mainUv/.test(s);if(n.attributes|=e.getAttributes(),s===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(f&&(n.attributes&pr.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!c&&!f)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const d=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,p=n.shaderParts;let m=p.get(Ct.FRAGMENT_HEAD)||"",g=p.get(Ct.FRAGMENT_MAIN_UV)||"",_=p.get(Ct.FRAGMENT_MAIN_IMAGE)||"",x=p.get(Ct.VERTEX_HEAD)||"",b=p.get(Ct.VERTEX_MAIN_SUPPORT)||"";const M=new Set,A=new Set;if(f&&(g+=`	${a}MainUv(UV);
`,n.uvTransformation=!0),l!==null&&/mainSupport/.test(l)){const L=/mainSupport *\([\w\s]*?uv\s*?\)/.test(l);b+=`	${a}MainSupport(`,b+=L?`vUv);
`:`);
`;for(const D of l.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const U of D[1].split(/\s*,\s*/))n.varyings.add(U),M.add(U),A.add(U);for(const D of l.matchAll(d))A.add(D[1])}for(const L of s.matchAll(d))A.add(L[1]);for(const L of e.defines.keys())A.add(L.replace(/\([\w\s,]*\)/g,""));for(const L of e.uniforms.keys())A.add(L);A.delete("while"),A.delete("for"),A.delete("if"),e.uniforms.forEach((L,D)=>n.uniforms.set(a+D.charAt(0).toUpperCase()+D.slice(1),L)),e.defines.forEach((L,D)=>n.defines.set(a+D.charAt(0).toUpperCase()+D.slice(1),L));const S=new Map([["fragment",s],["vertex",l]]);g_(a,A,n.defines),g_(a,A,S),s=S.get("fragment"),l=S.get("vertex");const v=e.blendMode;if(n.blendModes.set(v.blendFunction,v),c){e.inputColorSpace!==null&&e.inputColorSpace!==n.colorSpace&&(_+=e.inputColorSpace===Lt?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==ki?n.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(n.colorSpace=e.inputColorSpace);const L=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;_+=`${a}MainImage(color0, UV, `,(n.attributes&pr.DEPTH)!==0&&L.test(s)&&(_+="depth, ",n.readDepth=!0),_+=`color1);
	`;const D=a+"BlendOpacity";n.uniforms.set(D,v.opacity),_+=`color0 = blend${v.blendFunction}(color0, color1, ${D});

	`,m+=`uniform float ${D};

`}if(m+=s+`
`,l!==null&&(x+=l+`
`),p.set(Ct.FRAGMENT_HEAD,m),p.set(Ct.FRAGMENT_MAIN_UV,g),p.set(Ct.FRAGMENT_MAIN_IMAGE,_),p.set(Ct.VERTEX_HEAD,x),p.set(Ct.VERTEX_MAIN_SUPPORT,b),e.extensions!==null)for(const L of e.extensions)n.extensions.add(L)}}var FR=class extends mi{constructor(a,...e){super("EffectPass"),this.fullscreenMaterial=new IR(null,null,null,a),this.listener=n=>this.handleEvent(n),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(a){for(const e of this.effects)e.mainScene=a}set mainCamera(a){this.fullscreenMaterial.copyCameraSettings(a);for(const e of this.effects)e.mainCamera=a}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(a){this.fullscreenMaterial.encodeOutput=a}get dithering(){return this.fullscreenMaterial.dithering}set dithering(a){const e=this.fullscreenMaterial;e.dithering=a,e.needsUpdate=!0}setEffects(a){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=a.sort((e,n)=>n.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const a=new CA;let e=0;for(const f of this.effects)if(f.blendMode.blendFunction===vt.DST)a.attributes|=f.getAttributes()&pr.DEPTH;else{if((a.attributes&f.getAttributes()&pr.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${f.name})`);zR("e"+e++,f,a)}let n=a.shaderParts.get(Ct.FRAGMENT_HEAD),s=a.shaderParts.get(Ct.FRAGMENT_MAIN_IMAGE),l=a.shaderParts.get(Ct.FRAGMENT_MAIN_UV);const c=/\bblend\b/g;for(const f of a.blendModes.values())n+=f.getShaderCode().replace(c,`blend${f.blendFunction}`)+`
`;(a.attributes&pr.DEPTH)!==0?(a.readDepth&&(s=`float depth = readDepth(UV);

	`+s),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,a.colorSpace===Lt&&(s+=`color0 = sRGBToLinear(color0);
	`),a.uvTransformation?(l=`vec2 transformedUv = vUv;
`+l,a.defines.set("UV","transformedUv")):a.defines.set("UV","vUv"),a.shaderParts.set(Ct.FRAGMENT_HEAD,n),a.shaderParts.set(Ct.FRAGMENT_MAIN_IMAGE,s),a.shaderParts.set(Ct.FRAGMENT_MAIN_UV,l);for(const[f,d]of a.shaderParts)d!==null&&a.shaderParts.set(f,d.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(a)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(a,e=gr){this.fullscreenMaterial.depthBuffer=a,this.fullscreenMaterial.depthPacking=e;for(const n of this.effects)n.setDepthTexture(a,e)}render(a,e,n,s,l){for(const c of this.effects)c.update(a,e,s);if(!this.skipRendering||this.renderToScreen){const c=this.fullscreenMaterial;c.inputBuffer=e.texture,c.time+=s*this.timeScale,a.setRenderTarget(this.renderToScreen?null:n),a.render(this.scene,this.camera)}}setSize(a,e){this.fullscreenMaterial.setSize(a,e);for(const n of this.effects)n.setSize(a,e)}initialize(a,e,n){this.renderer=a;for(const s of this.effects)s.initialize(a,e,n);this.updateMaterial(),n!==void 0&&n!==Nn&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const a of this.effects)a.removeEventListener("change",this.listener),a.dispose()}handleEvent(a){switch(a.type){case"change":this.recompile();break}}};const v_=1,HR=()=>{const{width:a,height:e}=cx(),n=de.useRef(null);return de.useEffect(()=>{const s=new Tu,l=new jn(75,a/e,.1,1e3);l.layers.enable(v_);const c=new lx({alpha:!0,antialias:!0,powerPreference:"high-performance"});c.setClearColor(0,0),c.outputColorSpace=Lt,c.toneMapping=Ma,c.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),c.setSize(a,e),c.domElement.style.position="absolute",c.domElement.style.inset="0",c.domElement.style.zIndex="0",c.domElement.style.pointerEvents="none",c.domElement.style.background="transparent";const f=n.current;f instanceof HTMLElement&&!f.hasChildNodes()&&f.appendChild(c.domElement);const d=new cl;for(let b=0;b<50;b++){const M=.02+Math.random()*.08,A=new Ep(M,16,16),S=new Du({color:new Dt(4,4.2,3.8)});S.toneMapped=!1;const v=new fi(A,S);v.position.set((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*10),v.layers.enable(v_),d.add(v)}s.add(d),l.position.z=5;const p=new RA(c);p.addPass(new dx(s,l));const m=new PR(s,l,{blendFunction:23,intensity:1.1,luminanceThreshold:.02,luminanceSmoothing:.25,radius:.7,mipmapBlur:!0});m.selection.add(d);const g=new FR(l,m);g.renderToScreen=!0,p.addPass(g);let _=0;const x=()=>{_=window.requestAnimationFrame(x),d.rotation.x+=18e-5,d.rotation.y+=11e-5,p.render()};return x(),()=>{window.cancelAnimationFrame(_),d.traverse(b=>{b instanceof fi&&(b.geometry.dispose(),Array.isArray(b.material)?b.material.forEach(M=>M.dispose()):b.material.dispose())}),p.dispose(),c.dispose(),f&&f.removeChild(c.domElement)}},[a,e]),y.jsx("div",{id:"three_background",style:{position:"fixed",top:0,left:0,width:`${a}px`,height:`${e}px`,overflow:"hidden",pointerEvents:"none"},ref:n})},bh=a=>(console.log(a),y.jsx("div",{children:y.jsx(ux,{width:a.width,categories:a.category_array})})),GR=["https://placehold.co/800x500/fef9c3/0f172a?text=Scan+from+The+Book","https://placehold.co/800x500/fee2e2/0f172a?text=Idea+Index"],VR=()=>{const a=so;return y.jsx(ro,{construction:!0,title:"The Book",children:y.jsxs("div",{className:"space-y-10 text-slate-100",children:[y.jsxs(Ti,{tone:"glass",className:"space-y-6 text-center",children:[y.jsx(Un,{children:"Portable inspiration vault"}),y.jsx(hr,{quote:"The Book is my lifelong mixtape of great ideas, routines, and reminders.",sizePreset:"balanced"}),y.jsx(Nt,{children:"I started The Book in high school as a place to copy Sun Tzu quotes, Pixar storytelling beats, and notes about the artists and inventors I admired. Decades later it has evolved into a structured vault with prompts, reading lists, and rituals I revisit whenever I need to reset."})]}),y.jsxs(Ti,{className:"space-y-6",children:[y.jsx(Un,{align:"left",children:"What lives inside"}),y.jsx(Nt,{children:"Sections include daily/weekly checklists, journaling prompts, creative warmups, biographies, and mental models. I pull from Charles Darwin's productivity ledger, Pixar's 22 storytelling rules, and my own running notes on art school critiques."}),y.jsx("div",{className:"grid gap-6 md:grid-cols-2",children:GR.map((e,n)=>y.jsx(Mi,{variant:"full",src:e,alt:`The Book placeholder ${n+1}`,figureLabel:n===0?"Scan":"Index",figureCaption:n===0?"Handwritten spread of quotes + prompts":"Tag structure for quick searching",withMatte:!0,imgClassName:"mx-auto w-full max-w-md aspect-video object-cover",figcaptionClassName:a},e))})]}),y.jsxs(Ti,{className:"space-y-6",children:[y.jsx(Un,{align:"left",children:"From notebook to app"}),y.jsx(Nt,{children:"Once UrFriends finishes its AWS migration, The Book will become a simple mobile companion. Think of it as a playful creative brief generator: shake a prompt, review the routine, and capture what worked."}),y.jsx("div",{className:"flex justify-center",children:y.jsx(Js,{href:"/projects/urfriends",label:"Follow the UrFriends build",newTab:!1})})]})]})})},Gi=["https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_ALL_WORKOUTS.png","https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_DATA_BOARD.png","https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_DATA_BOARD_REGRESSION.png","https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_DATA_CHART.png","https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_ORIGIN_SHEET.png","https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_G_SHEET.png","https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_RAW_JSON.png","https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_FILE.jpg","https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_AP_TIME.png","https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_HERO_PIC.webp"],kR=()=>{const a=so,e="border border-1 border-white/20 p-5 rounded-2xl";return y.jsx(ro,{construction:!1,title:"",children:y.jsxs("div",{className:"space-y-8 text-slate-100",children:[y.jsx(Un,{align:"left",children:"Case Study: The RIP Sheet"}),y.jsxs("section",{className:"rip-section--intro ",children:[y.jsxs("div",{id:"rip-hero",className:"m-5",children:[y.jsx("style",{children:`
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
        `}),y.jsx("div",{id:"rip-hero-image",children:y.jsx("img",{src:Gi[9],alt:"Hero image",className:"rounded-full w-full h-full object-cover"})}),y.jsx("div",{id:"rip-hero-text",className:"flex align-center justify-center text-4xl sm:text-6xl xl:text-7xl text-center sm:p-10 leading-tight",style:{fontFamily:dr},children:"In 2018 I decided to learn weightlifting."})]}),y.jsx("div",{className:a,children:y.jsx(hr,{quote:"Since then, I’ve been developing tools and systems to become stronger and to consistently learn.",sizePreset:"compact"})}),y.jsx(Nt,{children:"In 2018, I set out to learn weightlifting. Over time, through repeated iteration, I built a system I call the RIP Sheet. Early versions failed to track progress and enforce consistency — but I kept refining, testing, and improving. The name is a double entendre: a memento mori and a call to get ripped. Today is the day you make that change — this very rep."}),y.jsx("div",{className:"rip-figure rip-figure--single",children:y.jsx(Mi,{variant:"quarter",src:Gi[4],alt:"Origin version of the RIP sheet layout",figureLabel:"Figure 1",figureCaption:"Early (circa 2018) RIP sheet worksheet.",withMatte:!0,figcaptionClassName:a})})]}),y.jsxs("section",{className:`rip-section rip-section--analog ${e}`,children:[y.jsx(Un,{align:"left",children:"Analog beginnings"}),y.jsx(Nt,{children:"At first, there were multiple different supporting checklists based upon what I wanted to achieve in the gym any given 'day' — a 'back day' for example. I found that to be overly restrictive and not in line with life's unpredictability. I thought to put it together into a single document, one worksheet, and came up with a sassy name: the RIP Sheet. Getting 'stronger' has resonated with me all of my life, for me that's what weightlifting is about, and I need to do it while I'm still breathing! The worksheet was a structured attempt to bring discipline into the gym without relying on screens. The layout was clear, but the medium wasn’t. Tracking progress across loose pages quickly became impractical, and paper doesn’t hold up well in a gym environment where gains are a factor."}),y.jsx(Nt,{children:"Alongside the sheet, I created a small reference packet for stretching and brought both with me to train."}),y.jsx("div",{className:"rip-figure rip-figure--single",children:y.jsx(Mi,{variant:"half",src:Gi[7],alt:"Original workbook used for tracking workouts in the initial prototyping phase",figureLabel:"Figure 2",figureCaption:"The workbook taken to the gym in the initial prototyping phase.",withMatte:!0,figcaptionClassName:a})}),y.jsx(Nt,{children:"This workbook was the version I brought with me to the gym during early prototyping — an attempt to turn structure into habit. I found keeping track of the physical worksheets and transferring them into a digital format was very inconvenient."})]}),y.jsxs("section",{className:`rip-section rip-section--digital ${e}`,children:[y.jsx(Un,{align:"left",children:"From paper to data"}),y.jsx(Nt,{children:"Eventually, I moved to Google Sheets, which made tracking progress far more efficient and reliable, allowing me to easily track every rep I've made since 2022. Because I had already been collecting this data, I was able to analyze it later in a Linear Algebra for Data Science course in 2025."}),y.jsx(Nt,{children:"In that class, I used Python to create least square regression analyses of each one of my exercises a period of 2.5 years. Seeing visualizations was highly motivational and validating for my stronger routines, but it also showed me clearly where I've been slacking recently. That was kind of like a bell ringing in the distance — effective visualizations can powerfully reinforce habits."}),y.jsx(Nt,{children:"Processing the raw data was complicated at first, and I tailored it using JavaScript and C++. Over time, I simplified the system: each set is stored as JSON, defined by exercise name, weight, reps, and date. This structure makes generating visualizations straightforward, with same-day workouts naturally aligning in the data."}),y.jsxs("div",{className:"rip-cta",children:[y.jsx("p",{className:`rip-cta__label ${a}`,children:"Explore the notebooks + regression overlays"}),y.jsx(Js,{href:"https://colab.research.google.com/drive/1ENZlQbCl78q4ilT7lTgQ9YkcPgvTLV9d?usp=sharing",label:"View the Python analysis in Google Colab"})]}),y.jsxs("div",{className:"rip-gallery rip-gallery--grid",children:[y.jsx(Mi,{variant:"full",src:Gi[6],alt:"Origin version of the RIP sheet layout",figureLabel:"Figure 3",figureCaption:"The data is stored in a way that makes it easy to analyze.",withMatte:!0,imgClassName:"mx-auto w-full max-w-sm aspect-square object-cover",figcaptionClassName:a}),y.jsx(Mi,{variant:"full",src:Gi[5],alt:"Origin version of the RIP sheet layout",figureLabel:"Figure 4",figureCaption:"Although it looks basic, this is the system I've found supports consistency.",withMatte:!0,imgClassName:"mx-auto w-full max-w-sm aspect-square object-cover",figcaptionClassName:a}),y.jsx(Mi,{variant:"full",src:Gi[0],alt:"Collection of all workouts tracked in the RIP sheet",figureLabel:"Figure 5",figureCaption:"Consolidated workout history view.",withMatte:!0,imgClassName:"mx-auto w-full max-w-sm aspect-square object-cover",figcaptionClassName:a})]})]}),y.jsxs("section",{className:`rip-section rip-section--insights ${e}`,children:[y.jsx(Un,{align:"left",children:"Insights"}),y.jsx(Nt,{children:"The very first thing that I wanted to see was the data related to every workout, all in one place. Being able to visualize the data seemed like it could be powerful, and it was. The first time the Python spit out this image my jaw dropped. This is a tool that can help make that life change."}),y.jsx("div",{className:"rip-figure rip-figure--wide",children:y.jsx(Mi,{variant:"centered",src:Gi[1],alt:"RIP sheet data board showing tracked exercise metrics",figureLabel:"Figure 6",figureCaption:"Data board used to monitor progress over time.",withMatte:!0,figcaptionClassName:a})}),y.jsx("div",{className:a,children:y.jsx(hr,{quote:"Today is the day you make that life change — this very rep.",sizePreset:"balanced"})}),y.jsx(Nt,{children:"Visualizations expose my habits instantly — what’s strong, what’s falling off, and where volume spikes. When I fit least-squares regressions to each lift and saw their slopes, I knew I'd found a powerful way to encourage progress."}),y.jsxs("div",{className:"rip-gallery rip-gallery--dual",children:[y.jsx(Mi,{variant:"centered",src:Gi[8],alt:"Regression analysis chart generated from RIP sheet data",figureLabel:"Figure 7",figureCaption:"Visualization of intuitively finding an ideal weight (40lb) for Arnold press over time.",withMatte:!0,figcaptionClassName:a}),y.jsx(Mi,{variant:"centered",src:Gi[3],alt:"Progress chart visualizing workout performance changes",figureLabel:"Figure 8",figureCaption:"Bar chart showing exercise type counts for the data captured.",withMatte:!0,figcaptionClassName:a})]}),y.jsx(Nt,{children:"The Arnold press visualization shows my workout routine ramping up from 20lb to 50lb, and settling on 40lb for that exercise. To me, it helps to see the progress and the pattern; knowing what to do next to improve is useful, and so is seeing how far I've come."}),y.jsx("div",{className:a,children:y.jsx(hr,{quote:"Fitting a least-squares regression to the data shows interesting trends:",sizePreset:"compact"})}),y.jsx("div",{className:"rip-figure rip-figure--wide",children:y.jsx(Mi,{variant:"centered",src:Gi[2],alt:"RIP sheet data board showing tracked exercise metrics",figureLabel:"Figure 9",figureCaption:"Least-squares regression snapshot for exercise trends.",withMatte:!0,figcaptionClassName:a})}),y.jsx(Nt,{children:"I know that there are many more methods and styles of visualizations that can facilitate positive change, help people to understand their progress, be inspired, and make informed decisions."})]}),y.jsxs("section",{className:`rip-section rip-section--future ${e}`,children:[y.jsx(Un,{align:"left",children:"What’s next"}),y.jsx(Nt,{children:"My hope is to create a fitness app that allows people to develop realistic and healthy physical fitness routines and give useful visualizations that will let users know for sure how to generate real physical progress. The gym habit can be challenging to adopt, and I want to help people realize that learning that habit is counter-intuitive to first impressions."}),y.jsx(Nt,{children:"A major aspect of my routine has been settling on a system that is sustainable, repeatable, and useful. Google Sheets has allowed me to find the *steps* for a system that is sustainable, flexible, and accurate — migrating those steps into a tailor made UI will make a powerful tool for progress."}),y.jsx("div",{className:a,children:y.jsx(hr,{quote:"I believe I can help people to adopt a habit that they love.",sizePreset:"balanced"})})]})]})})},jR=["https://placehold.co/800x500/e0f2fe/0f172a?text=UrFriends+Dashboard","https://placehold.co/800x500/dbeafe/0f172a?text=Reminder+Composer","https://placehold.co/800x500/ede9fe/0f172a?text=Relationship+Journal"],XR=()=>{const a=so;return y.jsx(ro,{construction:!1,title:"UrFriends",children:y.jsxs("div",{className:"space-y-10 text-slate-100",children:[y.jsxs(Ti,{tone:"glass",className:"space-y-6 text-center",children:[y.jsx(Un,{children:"Intentional relationship OS"}),y.jsx(hr,{quote:"UrFriends helps me reach out on purpose instead of out of guilt.",sizePreset:"balanced"}),y.jsx(Nt,{children:"UrFriends started as a personal CRM inspired by Benjamin Franklin's daily ledger and my grandmother Faye's immaculate address book. Every contact lives inside a tier (daily, weekly, monthly, yearly) so I know exactly when to reach out and what we last talked about."}),y.jsx("div",{className:"flex justify-center",children:y.jsx(Js,{href:"https://public--urfriends-beta.us-central1.hosted.app/",label:"Open the current beta"})})]}),y.jsxs(Ti,{className:"space-y-6",children:[y.jsx(Un,{align:"left",children:"Core flows"}),y.jsx(Nt,{children:"Each contact has a conversations journal, reminder cadence, and lightweight CRM fields (pronouns, kids' names, last meetup). I can promote or demote tiers in one tap. The beta began on Vercel (React + Node + MongoDB), moved to AWS Amplify, and now lives on Firebase for ease of auth + Firestore syncing."}),y.jsx("div",{className:"grid gap-6 md:grid-cols-3",children:jR.map((e,n)=>y.jsx(Mi,{variant:"full",src:e,alt:`UrFriends UI placeholder ${n+1}`,figureLabel:`Screen ${n+1}`,figureCaption:["Home dashboard","Tier reminder composer","Contact journal"][n],withMatte:!0,imgClassName:"mx-auto w-full max-w-sm aspect-video object-cover",figcaptionClassName:a},e))})]}),y.jsxs(Ti,{className:"space-y-6",children:[y.jsx(Un,{align:"left",children:"Stack and roadmap"}),y.jsx(Nt,{children:"Firebase Auth + Firestore handle the single-user beta. Background Cloud Functions generate reminders and send emails via SendGrid. I'm actively migrating core data to AWS so multi-tenant accounts can launch with scoped DynamoDB tables and Lambda triggers. Google and Apple calendar integrations are next on deck."}),y.jsx(Nt,{children:"UrFriends is for people who still believe technology can deepen relationships. The app nudges me to share wins, remember context, and never let the meaningful folks fall through the cracks."})]}),y.jsxs(Ti,{className:"space-y-6",children:[y.jsx(Un,{align:"left",children:"What's next"}),y.jsx(Nt,{children:"Finish the AWS migration, ship OAuth with Google + Apple, and open the beta to a curated cohort of founders and community builders. Long term, I want UrFriends to feel like a human operating system we actually enjoy using."})]})]})})},WR=["https://placehold.co/800x500/1e293b/ffffff?text=Widow+Bags+Moodboard","https://placehold.co/800x500/111827/ffffff?text=Prototype+Sketch"],qR=()=>{const a=so;return y.jsx(ro,{construction:!0,title:"Widow Bags",children:y.jsxs("div",{className:"space-y-10 text-slate-100",children:[y.jsxs(Ti,{tone:"glass",className:"space-y-6 text-center",children:[y.jsx(Un,{children:"Concept studio"}),y.jsx(hr,{quote:"Widow Bags is a sculptural apparel line born at SAIC.",sizePreset:"balanced"}),y.jsx(Nt,{children:"The concept mixes high-energy nightlife silhouettes with utilitarian construction details. Think matte black textiles, exaggerated hardware, and pockets that feel architectural."})]}),y.jsxs(Ti,{className:"space-y-6",children:[y.jsx(Un,{align:"left",children:"Design roots"}),y.jsx(Nt,{children:"The earliest prototypes came out of School of the Art Institute of Chicago studios. I blended patternmaking assignments with personal experiments—laser-cut vinyl overlays, powder-coated buckles, and partnered stitching with metal fabrication classmates."}),y.jsx("div",{className:"grid gap-6 md:grid-cols-2",children:WR.map((e,n)=>y.jsx(Mi,{variant:"full",src:e,alt:`Widow Bags placeholder ${n+1}`,figureLabel:n===0?"Moodboard":"Sketch",figureCaption:n===0?"Material + color palette":"Front elevation of the flag-ship bag",withMatte:!0,imgClassName:"mx-auto w-full max-w-md aspect-video object-cover",figcaptionClassName:a},e))})]}),y.jsxs(Ti,{className:"space-y-6",children:[y.jsx(Un,{align:"left",children:"Next steps"}),y.jsx(Nt,{children:"I’m sourcing eco-friendly hardware suppliers, finalizing CAD patterns, and documenting the fabrication process so the line can launch with a small-batch drop. More renderings and fabrication photos coming soon."})]})]})})},YR="https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting/",ZR=["KP.webp","G.webp","alien_invasion.webp","alley.webp","bad_painting.webp","bada_bing.webp","behind.webp","blinker.webp","blue_girl_1.webp","blue_girl_2.webp","bouquet.webp","bright_lights_big_city.webp","business_card.webp","california_onlookers.webp","connection.webp","dips.webp","eyes.webp","following.webp","funny_mustache_guy.webp","hilltop_city.webp","hollywood_hills.webp","house.webp","in_the_city.webp","jacks.webp","jacks_2.webp","james.webp","locked_away.webp","network.webp","night.webp","one_way.webp","online.webp","outlooker.webp","perspective.webp","pictures_of_then.webp","portrait_copy.webp","rainy_sun.webp","researchers.webp","street_corner.webp","sunday.webp","time.webp","tornado.webp","transfer.webp","victorian.webp","what_do_you.webp","woah_dude.webp","worm.webp","x.webp"],KR=a=>a&&a.endsWith(".webp")?a.slice(0,-5):"",QR=(a,e)=>a.map(n=>({src:`${e}${n}`,alt:n,title:n})),__=a=>{const e=()=>a.current>=a.gallery_images.length-5?a.gallery_images.slice(a.gallery_images.length-5,a.gallery_images.length):a.gallery_images.slice(a.current+1,a.current+6);return y.jsx("div",{className:"gallery_subImages",children:e().map(n=>y.jsxs("button",{className:"mini_gallery_image",onClick:()=>a.setCurrent(a.images_array.indexOf(n.title?n.title:"")),children:[y.jsx("style",{children:`
              .mini_gallery_image:hover {
                outline: 2px solid rgba(255, 255, 255, 1);
                transition: outline .2s;
                opacity: 100%;

              .mini_gallery_image {
                opacity: 80%;
              }
              }
            `}),y.jsx("img",{src:n.src,alt:n.alt,title:n.title,className:"inline max-w-25 max-h-25 m-1 rounded-sm",loading:"lazy"},n.src)]}))})},hx="rgba(255,255,255,0.2)",$R={border:`3px solid ${hx}`,cursor:"not-allowed"},su=a=>{const e=a.direction==="left"&&a.current===0||a.direction==="right"&&a.current===a.total-1;console.log(a.current,a.direction);const n=()=>{switch(a.graphic){case"caret-right":return y.jsx("div",{className:"h-10 w-10",children:y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:y.jsx("path",{d:"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"})})});case"caret-left":return y.jsx("div",{className:"h-10 w-10",children:y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:y.jsx("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"})})});case"arrow-right":return y.jsx("div",{className:" h-8 w-8",children:y.jsx("svg",{className:"",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:y.jsx("path",{d:"M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"})})});case"arrow-left":return y.jsx("div",{className:" h-8 w-8",children:y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:y.jsx("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"})})})}};return y.jsxs("button",{style:{...(a.graphic=="arrow-left"||a.graphic=="arrow-right")&&e?$R:{}},className:`inline-block ${a.graphic=="caret-left"||a.graphic=="caret-right"?"LR_bttn":"border-3 border-white LR_bttn"} cursor-pointer p-1 h-20 w-20 bg-none rounded-[50%]`,onClick:a.onclick_func,disabled:e,"aria-label":a.direction==="right"?"Next painting":"Previous painting",type:"button",children:[y.jsx("style",{children:`
        .LR_bttn:hover {
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, .5)) drop-shadow(0 0 10px rgba(255, 255, 255, .5));
        }
        .LR_bttn:active {
          filter: none;
        }
        .LR_bttn {
          transition: filter .2s;
        }
      `}),y.jsx("div",{style:{fill:e?hx:"white"},className:"flex justify-center items-center",children:n()})]})},JR=a=>{const[e,n]=de.useState(0),s=a.images&&a.images.length>0?a.images:ZR,l=a.base_url?a.base_url:YR,c=QR(s,l),f=c.length-1,d=a.detail_medium?a.detail_medium:"acrylic on canvas",p=a.detail_years?a.detail_years:"2021-2025",m=c[e],g=KR(m.title);console.log(e,"is current");const _=()=>n(b=>Math.max(b-1,0)),x=()=>n(b=>Math.min(b+1,f));return a.width>aA?y.jsxs("div",{id:"gallery-container",className:"flex items-center justify-center h-screen",children:[y.jsx("div",{className:"gallery_leftButton ml-auto",children:y.jsx(su,{graphic:"arrow-left",direction:"left",current:e,total:c.length,onclick_func:_})}),y.jsx("div",{className:"gallery_mainImage",children:y.jsx("img",{src:m.src,alt:m.alt,title:m.title,loading:"lazy"})}),y.jsx("div",{className:"gallery_rightButton",children:y.jsx(su,{graphic:"arrow-right",direction:"right",current:e,total:c.length,onclick_func:x})}),y.jsx(__,{images_array:s,gallery_images:c,current:e,setCurrent:n}),y.jsxs("div",{className:"gallery_textDetails text-white text-left p-10",children:[y.jsx("h3",{children:g}),y.jsx("p",{children:d}),y.jsx("p",{children:p})]})]}):y.jsxs("div",{children:[y.jsxs("div",{id:"",className:"flex flex-row justify-center",children:[y.jsx("style",{children:`
            .gallery_leftRightButton_cols {
              display: flex;
              align-items: center;
            }
            `}),y.jsx("button",{onClick:()=>_(),className:"gallery_leftRightButton_cols",children:y.jsx(su,{graphic:"caret-left",direction:"left",current:e,total:c.length})}),y.jsx("img",{style:{width:"70%"},src:m.src,alt:m.alt,title:m.title,loading:"lazy"}),y.jsx("button",{onClick:()=>x(),className:"gallery_leftRightButton_cols",children:y.jsx(su,{graphic:"caret-right",direction:"right",current:e,total:c.length})})]}),y.jsxs("div",{className:"text-left p-10",children:[y.jsx("h3",{children:g}),y.jsx("p",{children:d}),y.jsx("p",{children:p})]}),y.jsx(__,{images_array:s,gallery_images:c,setCurrent:n,current:e})]})},e3=["pictures_of_then.webp","alley.webp","bright_lights_big_city.webp","behind.webp","G.webp","business_card.webp","blue_girl_1.webp","connection.webp","dips.webp"],t3=["alley.webp","eyes.webp","blue_girl_2.webp","KP.webp","house.webp","in_the_city.webp","jacks.webp","locked_away.webp","one_way.webp","time.webp"],n3=["bada_bing.webp","california_onlookers.webp","following.webp","hollywood_hills.webp","rainy_sun.webp","sunday.webp","tornado.webp","victorian.webp","woah_dude.webp","street_corner.webp"],i3=["bad_painting.webp","bouquet.webp","blinker.webp","james.webp","night.webp","outlooker.webp","transfer.webp","what_do_you.webp"],a3=["hilltop_city.webp","funny_mustache_guy.webp","jacks_2.webp","online.webp","perspective.webp","portrait_copy.webp","researchers.webp","x.webp"],r3=["worm.webp","network.webp"],s3=[{slug:"2025p",title:"2025",year_label:"2025",images:r3},{slug:"2024p",title:"2024",year_label:"2024",images:a3},{slug:"2023p",title:"2023",year_label:"2023",images:i3},{slug:"2022p",title:"2022",year_label:"2022",images:n3},{slug:"2021p",title:"2021",year_label:"2021",images:t3},{slug:"2020p",title:"2020",year_label:"2020",images:e3}],o3=s3.reduce((a,e)=>(a[e.slug]=e,a),{}),l3=a=>{const{periodSlug:e}=s1(),n=e?o3[e]:void 0;return n?y.jsxs("div",{className:"text-white px-6 py-20",style:{fontFamily:Xi},children:[y.jsxs("h1",{style:{fontFamily:qi},className:"text-4xl md:text-5xl font-bold mb-6",children:[n.title," Paintings"]}),y.jsx(JR,{width:a.width,images:n.images,detail_medium:"acrylic on canvas",detail_years:n.year_label})]}):y.jsxs("div",{className:"text-white px-6 py-20",style:{fontFamily:Xi},children:[y.jsx("h1",{style:{fontFamily:qi},className:"text-3xl font-semibold",children:"Painting period not found"}),y.jsx("p",{className:"mt-4 opacity-80",children:"Check back soon for more updates."})]})},px=[{category:"Painting",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting_dir/painting-web-icons/painting-web-icon.jpg",url:"painting"},{category:"Drawing",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting_dir/drawing-web-icons/drawing-web-icon.jpg",url:"drawing"}],c3=[{category:"Web Development",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/web-design-web-icons/DM.webp",url:"../projects/web_dev"},{category:"UrFriends - SaaS",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/blog-images/UR_Friends.webp",url:"urfriends"},{category:"Widow Bags",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/product-design-icons/widow-icon.jpg",url:"widowbags"}],mx=[{category:"Design",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/drawing-web-icons/design-drawing-icon.webp",url:"drawing_design"},{category:"Engineering",img:"https://jayhcrawford-webdocs.s3.us-east-2.amazonaws.com/webdocs-icons/tripod-drawing-icon.webp",url:"drawing_engineering"},{category:"Fine Art",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/drawing-web-icons/fine-art-drawing-icon.webp",url:"drawing_fa"},{category:"Doodling",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting_dir/drawing-web-icons/drawing-web-icon.jpg",url:"drawing_doodle"}],gx=[{category:"2025",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting_dir/painting-web-icons/2024-painting-icon.jpg",url:"2025p"},{category:"2024",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting_dir/painting-web-icons/2023-painting-icon.jpg",url:"2024p"},{category:"2023",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting_dir/painting-web-icons/2022-painting-icon.jpg",url:"2023p"},{category:"2022",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting_dir/painting-web-icons/2021-painting-icon.jpg",url:"2022p"},{category:"2021",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting_dir/painting-web-icons/2020-painting-icon.jpg",url:"2021p"},{category:"2020 and Prior",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting_dir/painting-web-icons/2019-painting-icon.jpg",url:"2020p"}],u3=a=>{const[e,n]=de.useState(!1);return y.jsxs(y.Fragment,{children:[y.jsx("style",{children:`
      hr {
      color: white;
      border-width: 2px;
      opacity: ${gu}%

      }`}),y.jsx(Kr,{onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),to:a.url?a.url:"",children:y.jsx("div",{className:`${a.url==""?"cursor-not-allowed":"cursor-pointer"} text-white m-6 justify-center ${a.width<750?"flex flex-col":"flex"}`,children:y.jsxs("div",{className:` ${a.width<750?"flex flex-col items-center":"flex w-[70%]"}`,children:[y.jsx("div",{className:"p-1 m-1",children:y.jsx("div",{className:"relative",children:y.jsxs("div",{className:" h-full w-full relative z-100",children:[y.jsx("div",{className:`${a.url==""&&e?"absolute":"hidden"} w-full text-white font-black absolute bg-red-600 top-[120px] p-4 text-center`,children:"Under Construction"}),y.jsx(f3,{img:a.img,under_construction:a.under_construction})]})})}),y.jsxs("div",{className:`ml-10 ${a.width<750?"mt-8 w-full pr-20":"flex flex-col justify-center mb-10"}`,children:[y.jsx("h4",{style:{fontFamily:qi},className:"text-2xl",children:a.title}),y.jsx("p",{style:{fontFamily:Xi},children:a.about_txt})]})]})})}),y.jsx("hr",{})]})},f3=a=>y.jsxs(y.Fragment,{children:[a.under_construction&&a.under_construction===!0&&y.jsx("div",{className:"h-30 w-30 absolute",children:y.jsx("img",{src:"/under_construction.svg"})}),y.jsx("div",{style:{boxShadow:"5px 5px 5px rgba(0, 0, 0, 1)"},className:"w-80 h-60",children:y.jsx("img",{className:"rounded-lg w-80 h-60",style:{objectFit:"cover"},src:a.img})})]}),Cp=a=>y.jsxs("div",{style:{fontFamily:Xi},children:[y.jsx("hr",{}),a.blog_array.map((e,n)=>y.jsx(u3,{url:e.url?e.url:"",title:e.title,about_txt:e.about_txt,img:e.img,width:a.width},n))]}),d3=a=>y.jsx(Cp,{width:a.width,blog_array:a.blog_array}),h3=[{title:"Red X CLI Utility",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/programming-icons/redX-CLI-icon.webp",about_txt:"Stub entry for the Red X CLI utility.",url:"https://github.com/jayhcrawford/3-month-habit-tracker"},{title:"RIP Sheet Data Analysis",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/blog-images/RIP.webp",about_txt:"Stub entry for the RIP Sheet data analysis project.",url:"/projects/ripsheet"}],vx=[{category:"Web Development",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/web-design-web-icons/DM.webp",url:"web_dev"},{category:"Programming",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/programming-icons/Programming.webp",url:"programming"},{category:"3D Projects",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/3d-project-icons/orthographic-icon.jpg",url:"3d"},{category:"UrFriends - SaaS",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/blog-images/UR_Friends.webp",url:"urfriends"},{category:"The Book",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/blog-images/TheBook.webp",url:"thebook"},{category:"The RIP Sheet",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/blog-images/RIP.webp",url:"ripsheet"},{category:"Widow Bags",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/product-design-icons/widow-icon.jpg",url:"widowbags"}],p3=a=>y.jsx(Cp,{width:a.width,blog_array:a.blog_array}),m3=[{title:"This Website!",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/product-design-icons/jayhcrawford-domain.webp",about_txt:"This resposnive website uses Threejs, CSS, SVG, React, GitHub. I made the components.",url:"https://medium.com/@jayhcrawford/taking-my-github-from-html-based-pages-to-a-vite-based-react-app-a202d7be2ad0",under_construction:!0},{title:"d3 Data Visuatilzations",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/programming-icons/d3_tempGraph.webp",about_txt:"CSS by me; Originally written with while I did freeCodeCamp in 2023.",url:"d3-visualizations",under_construction:!1},{title:"Calculator",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/web-design-web-icons/Calc.webp",about_txt:"CSS by me; Originally written with React class components while I did freeCodeCamp in 2023; rewritten into React 19 with an LLM.",url:"https://codepen.io/jayhcrawford/pen/rNRQJZa?editors=1010",under_construction:!1},{title:"Chem 101 App",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/web-design-web-icons/Chem101.webp",about_txt:"Kind of like a study guide wiki. Essentially a markdown viewer/editor that allowed my classmates to create and propose revisions. Revisions were databased and reviewed using a seperately hosted API. Centralizing all the course content in an easy to access place helped me to get an A in this class.",url:"https://chem101-sg.vercel.app/index.html",under_construction:!1},{title:"UrFriends",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/blog-images/UR_Friends.webp",about_txt:"Will be a SaaS toolset for relationship building; inspired by the routines of world leaders. Started on MongoDB and Vercel; migrated to Amplify and AWS; settled on Firebase and Firestore. The hosted beta has auth and data privacy securely enforced and a Stripe webhook.",url:"/projects/urfriends",under_construction:!1},{title:"Drum Machine",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/web-design-web-icons/DM.webp",about_txt:"CSS by me; Originally written with React class components while I did freeCodeCamp in 2023; rewritten into React 19 with an LLM.",url:"https://codepen.io/jayhcrawford/pen/poYJzyb",under_construction:!1}],g3=a=>y.jsx(Cp,{width:a.width,blog_array:a.blog_array}),v3=[{title:"My Place",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/3d-project-icons/orthographic-icon.jpg",about_txt:"Autodesk Maya and Arnold project."},{title:"Door Project",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/3d-project-icons/3d-door-project-icon.jpg",about_txt:"Based on a drawing, built in Blender to emulate the drawing."},{title:"3D Me :-)",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/3d-project-icons/3d-jay-icon.jpg",about_txt:"Fully rigged, simple 3D character modeled after me. This helped me to better understand topology, weight-painting, and rigging."},{title:"Fusion360 Tripod",img:"https://jayhcrawford-webdocs.s3.us-east-2.amazonaws.com/webdocs-icons/tripod-drawing-icon.webp",about_txt:"In my first engineering drawing course, we used Fusion360. I made this there as my final."},{title:"Solidworks Japanese Lantern",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/product-design-icons/j-lantern-icon.webp",about_txt:"In my second engineering drawing course, my groupmates and I collaborated together to make a Japanese-inspired lamp."}],_3=`<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js"><\/script>\r
<script src="https://cdnjs.cloudflare.com/ajax/libs/topojson/3.0.2/topojson.min.js"><\/script>\r
<script src="https://cdn.jsdelivr.net/npm/d3-scale-chromatic@3.0.0/dist/d3-scale-chromatic.min.js"><\/script>\r
\r
<body>\r
  <div id="main">\r
    <h1 id="title">United States Educational Attainment</h1>\r
    <div id="description">\r
      Percentage of adults age 25 and older with a bachelor's degree or higher\r
      (2010-2014)\r
    </div>\r
    <svg width="960" height="600"></svg>\r
    <div id="source">\r
      Source:\r
      <a href="https://www.ers.usda.gov/data-products/county-level-data-sets/download-data.aspx">USDA Economic Research\r
        Service</a>\r
    </div>\r
  </div>\r
  <script src="script.js"><\/script>\r
</body>\r
\r
</html>\r
`,x3=`html,\r
body {\r
  padding: 0;\r
  margin: 0;\r
}\r
\r
body {\r
  display: flex;\r
  justify-content: center;\r
  font-family: 'Arial';\r
}\r
\r
#main {\r
  width: 1000px;\r
  display: flex;\r
  padding-top: 1rem;\r
  flex-direction: column;\r
  align-items: center;\r
}\r
\r
.counties {\r
  fill: none;\r
}\r
\r
.states {\r
  fill: none;\r
  stroke: black;\r
  stroke-linejoin: round;\r
}\r
\r
div.tooltip {\r
  position: absolute;\r
  padding: 10px;\r
  font: 12px Arial;\r
  background: rgba(255, 255, 204, 0.9);\r
  box-shadow: 1px 1px 10px rgba(128, 128, 128, 0.6);\r
  border: 0px;\r
  border-radius: 2px;\r
  pointer-events: none;\r
}\r
\r
#title {\r
  font-size: 3.5rem;\r
}\r
\r
#description {\r
  text-align: center;\r
}\r
\r
#source {\r
  align-self: flex-end;\r
  margin-top: 1rem;\r
  color: white;\r
}\r
\r
a {\r
  text-decoration: none;\r
}\r
\r
\r
body {\r
  background-color: black;\r
}\r
\r
#title, #description {\r
  color: white;\r
}\r
\r
.key {\r
  color: white;\r
}\r
`,y3=`const projectName = 'choropleth';\r
\r
// coded by @paycoguy & @ChristianPaul (github)\r
// Jay Crawford only made minor changes and investigated the structure\r
\r
// Define body\r
var body = d3.select('body');\r
\r
var svg = d3.select('svg');\r
\r
// Define the div for the tooltip\r
var tooltip = body\r
  .append('div')\r
  .attr('class', 'tooltip')\r
  .attr('id', 'tooltip')\r
  .style('opacity', 0);\r
\r
var path = d3.geoPath();\r
\r
var x = d3.scaleLinear().domain([2.6, 75.1]).rangeRound([600, 860]);\r
\r
var color = d3\r
  .scaleThreshold()\r
  .domain(d3.range(2.6, 75.1, (75.1 - 2.6) / 8))\r
  .range(d3.schemeOrRd[9]);\r
\r
var g = svg\r
  .append('g')\r
  .attr('class', 'key')\r
  .attr('id', 'legend')\r
  .attr('transform', 'translate(0,20)');\r
\r
g.selectAll('rect')\r
  .data(\r
    color.range().map(function (d) {\r
      d = color.invertExtent(d);\r
      if (d[0] === null) {\r
        d[0] = x.domain()[0];\r
      }\r
      if (d[1] === null) {\r
        d[1] = x.domain()[1];\r
      }\r
      return d;\r
    })\r
  )\r
  .enter()\r
  .append('rect')\r
  .attr('height', 30)\r
  .attr('x', function (d) {\r
    return x(d[0]);\r
  })\r
  .attr('width', function (d) {\r
    return d[0] && d[1] ? x(d[1]) - x(d[0]) : x(null);\r
  })\r
  .attr('fill', function (d) {\r
    return color(d[0]);\r
  });\r
\r
g.append('text')\r
  .attr('class', 'caption')\r
  .attr('x', x.range()[0])\r
  .attr('y', -6)\r
  .attr('fill', '#000')\r
  .attr('text-anchor', 'start')\r
  .attr('font-weight', 'bold');\r
\r
g.call(\r
  d3\r
    .axisBottom(x)\r
    .tickSize(33)\r
    .tickFormat(function (x) {\r
      return Math.round(x) + '%';\r
    })\r
    .tickValues(color.domain())\r
)\r
  .select('.domain')\r
  .remove();\r
\r
const EDUCATION_FILE =\r
  'https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json';\r
const COUNTY_FILE =\r
  'https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json';\r
\r
Promise.all([d3.json(COUNTY_FILE), d3.json(EDUCATION_FILE)])\r
  .then(data => ready(data[0], data[1]))\r
  .catch(err => console.log(err));\r
\r
function ready(us, education) {\r
  svg\r
    .append('g')\r
    .attr('class', 'counties')\r
    .selectAll('path')\r
    .data(topojson.feature(us, us.objects.counties).features)\r
    .enter()\r
    .append('path')\r
    .attr('class', 'county')\r
    .attr('data-fips', function (d) {\r
      return d.id;\r
    })\r
    .attr('data-education', function (d) {\r
      var result = education.filter(function (obj) {\r
        return obj.fips === d.id;\r
      });\r
      if (result[0]) {\r
        return result[0].bachelorsOrHigher;\r
      }\r
      // could not find a matching fips id in the data\r
      console.log('could find data for: ', d.id);\r
      return 0;\r
    })\r
    .attr('fill', function (d) {\r
      var result = education.filter(function (obj) {\r
        return obj.fips === d.id;\r
      });\r
      if (result[0]) {\r
        return color(result[0].bachelorsOrHigher);\r
      }\r
      // could not find a matching fips id in the data\r
      return color(0);\r
    })\r
    .attr('d', path)\r
    .on('mouseover', function (event, d) {\r
      tooltip.style('opacity', 0.9);\r
      tooltip\r
        .html(function () {\r
          var result = education.filter(function (obj) {\r
            return obj.fips === d.id;\r
          });\r
          if (result[0]) {\r
            return (\r
              result[0]['area_name'] +\r
              ', ' +\r
              result[0]['state'] +\r
              ': ' +\r
              result[0].bachelorsOrHigher +\r
              '%'\r
            );\r
          }\r
          // could not find a matching fips id in the data\r
          return 0;\r
        })\r
        .attr('data-education', function () {\r
          var result = education.filter(function (obj) {\r
            return obj.fips === d.id;\r
          });\r
          if (result[0]) {\r
            return result[0].bachelorsOrHigher;\r
          }\r
          // could not find a matching fips id in the data\r
          return 0;\r
        })\r
        .style('left', event.pageX + 10 + 'px')\r
        .style('top', event.pageY - 28 + 'px');\r
    })\r
    .on('mouseout', function () {\r
      tooltip.style('opacity', 0);\r
    });\r
\r
  svg\r
    .append('path')\r
    .datum(\r
      topojson.mesh(us, us.objects.states, function (a, b) {\r
        return a !== b;\r
      })\r
    )\r
    .attr('class', 'states')\r
    .attr('d', path);\r
}\r
`,S3=`<h1 id="title">US GDP Through the 20th and 21st Centuries</h1>\r
<svg id="#visualization"></svg>\r
`,b3=`#title {\r
  text-align: center;\r
}\r
\r
.bar {\r
  width: 2.5px;\r
}\r
\r
svg {\r
  background-color: rgb(248,248,248);\r
}\r
\r
.bar:hover {\r
  opacity: 0;\r
  cursor: pointer;\r
}\r
\r
#tooltip {\r
  background-color: white;\r
  border: 1px solid black;\r
  padding: 5px;\r
  display: none;\r
  width: 100px;\r
  box-shadow: 3px 3px black;\r
}\r
\r
svg {\r
  display: flex;\r
  margin: auto;\r
  position: relative;\r
}\r
`,E3=`const margin = { top: 50, right: 30, bottom: 50, left: 70 };\r
const width = 900 - margin.left - margin.right;\r
const height = 500 - margin.top - margin.bottom;\r
\r
const formatYear = d3.utcFormat("%Y");\r
\r
const svg = d3\r
  .select("svg")\r
  .attr("width", width + margin.left + margin.right)\r
  .attr("height", height + margin.top + margin.bottom)\r
  .append("g")\r
  .attr("transform", \`translate(\${margin.left}, \${margin.top})\`);\r
\r
const tooltip = d3\r
  .select("body")\r
  .append("div")\r
  .attr("id", "tooltip")\r
  .style("opacity", 1)\r
  .attr("style", "position: absolute; opacity: 1;");\r
\r
fetch(\r
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json"\r
)\r
  .then((response) => response.json())\r
  .then((data) => {\r
    const incData = data.data;\r
    const gdps = incData.map((d) => d[1]);\r
    const dates = incData.map((d) => new Date(d[0]));\r
\r
    const x = d3\r
      .scaleUtc()\r
      .domain([d3.min(dates), d3.max(dates)])\r
      .range([0, width]);\r
\r
    const y = d3\r
      .scaleLinear()\r
      .domain([0, d3.max(gdps)])\r
      .range([height, 0]);\r
\r
    svg\r
      .append("g")\r
      .attr("transform", \`translate(0, \${height})\`)\r
      .attr("id", "x-axis")\r
      .call(d3.axisBottom(x));\r
\r
    svg\r
      .append("g")\r
      .attr("transform", \`translate(0,\${0})\`)\r
      .attr("id", "y-axis")\r
      .call(d3.axisLeft(y));\r
\r
    svg\r
      .selectAll("rect")\r
      .data(incData)\r
      .enter()\r
      .append("rect")\r
      .attr("fill", "rgb(105,105,105)")\r
      .attr("class", "bar")\r
      .attr("x", (d) => x(new Date(d[0])))\r
      .attr("y", (d) => y(d[1]))\r
      .attr("width", \`\${width / incData.length - 0}px\`)\r
      .attr("height", (d) => height - y(d[1]))\r
      .attr("data-date", (d) => d[0])\r
      .attr("data-gdp", (d) => d[1])\r
      .attr("index", (d, i) => i)\r
      .on("mouseover", function (event, d) {\r
        tooltip\r
          .html(\`Year: \${formatYear(new Date(d[0]))} <br> GDP: \${d[1]}\`)\r
          .style("top", \`\${event.pageY + 10}px\`)\r
          .style("left", \`\${event.pageX + 20}px\`)\r
          .style("display", "block")\r
          .style("opacity", 1)\r
          .attr("data-date", d[0]);\r
      })\r
      .on("mouseout", function (event, d) {\r
        tooltip\r
          .style("top", \`0px\`)\r
          .style("left", \`0px\`)\r
          .style("opacity", 0)\r
          .html("");\r
      });\r
  });\r
`,M3=`<div id="stage">\r
  <h1 id="title">Doping in Professional Bicycle Racing</h1>\r
  <h4 id="slug">35 Fastest times up Alpe d'Huez</h4>\r
  <div id="chart-and-legend">\r
    <div id="chartHTML">\r
    </div>\r
    <div id="legend"><div id="red-legend"></div> with doping allegations<br><span id="grey-legend"></span>  without allegations</div>\r
  </div>\r
\r
</div>\r
`,T3=`#title,\r
#slug {\r
  display: flex;\r
  align-contents: center;\r
  justify-content: center;\r
}\r
\r
#chartHTML {\r
  background-color: rgb(248, 248, 248);\r
  height: 450px;\r
  width: 800px;\r
  positon: relative;\r
  padding: 30px 0px 0px 0px;\r
}\r
\r
circle {\r
  opacity: 0.2;\r
}\r
\r
#tooltip {\r
  height: 5em;\r
  width: 13em;\r
  position: absolute;\r
  padding: 1em;\r
  box-shadow: 4px 4px black;\r
  outline: 2px solid black;\r
  opacity: 0;\r
}\r
\r
#legend {\r
  background-color: lightblue;\r
  margin: 1em;\r
  width: 12em;\r
  height: 4em;\r
  padding: 1em;\r
  background-color: rgb(248, 248, 248);\r
\r
}\r
\r
body {\r
  position: relative;\r
  font-family: arial;\r
}\r
\r
#chart-and-legend {\r
  display: flex;\r
  justify-content: center;\r
}\r
\r
#red-legend {\r
  background-color: red;\r
  height: 20px;\r
  width: 20px;\r
  opacity: .4;\r
  border-radius: 20px;\r
  display: inline-block;\r
}\r
\r
#grey-legend {\r
  background-color: rgb(64,64,64);\r
  height: 20px;\r
  width: 20px;\r
  opacity: .4;\r
  border-radius: 20px;\r
  display: inline-block;\r
}\r
\r
#stage {\r
  height: 50em;\r
}\r
`,w3=`import * as d3 from "https://esm.sh/d3";\r
\r
const url =\r
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json";\r
\r
const w = 900;\r
const h = 500;\r
\r
const svg = d3\r
  .select("#chartHTML")\r
  .append("svg")\r
  .attr("width", w)\r
  .attr("height", h);\r
\r
const formatYear = d3.utcFormat("%Y");\r
\r
const tooltip = d3\r
  .select("#chartHTML")\r
  .append("div")\r
  .attr("id", "tooltip")\r
  .attr("style", "position: absolute; opacity: 0;");\r
\r
\r
fetch(url)\r
  .then((response) => response.json())\r
  .then((data) => {\r
    const incomingData = data;\r
    const cyclistTimes = incomingData.map((d) => d["Time"]);\r
    const performanceYear = incomingData.map((d) => d["Year"]);\r
    const yearRange = [d3.min(performanceYear), d3.max(performanceYear)];\r
    const cycTimeRange = [d3.min(cyclistTimes), d3.max(cyclistTimes)];\r
\r
    const x = d3.scaleUtc(\r
      [\r
        new Date(\`\${yearRange[0] - 1}\`, 0, 1),\r
        new Date(\`\${yearRange[1] + 1}\`, 0, 1)\r
      ],\r
      [60, 760]\r
    );\r
\r
    //For the sake of one 36-39 minute segment of time, this app treats all Y-data like a short period of time from single day in the year 2000.\r
    const y = d3.scaleUtc(\r
      [\r
        new Date(\`2000-01-01T01:36:40Z\`),\r
        new Date(\`2000-01-01T01:\${cycTimeRange[1]}Z\`)\r
      ],\r
      [0, 400]\r
    );\r
\r
    svg\r
      .selectAll("rect")\r
      .data(incomingData)\r
      .enter()\r
      .append("circle")\r
      .attr("class", "dot")\r
      .attr("style", (d) => {\r
        if (d["Doping"] === "") {\r
          return "fill: rgb(64,64,64)";\r
        } else {\r
          return "fill: red";\r
        }\r
      })\r
      .attr("cx", (d) => {\r
        return x(new Date(\`\${d["Year"]}\`, 0, 1));\r
      })\r
      .attr("cy", (d) => {\r
        return y(new Date(\`2000-01-01T01:\${d["Time"]}Z\`));\r
      })\r
      .attr("r", 10)\r
      .attr("data-xvalue", (d) => d["Year"])\r
      .attr("data-yvalue", (d) => {\r
        return new Date(\`2000-01-01T01:\${d["Time"]}Z\`);\r
      })\r
      .attr("cyc-name", (d) => d["Name"])\r
      .attr("cyc-time", (d) => d["Time"])\r
      .attr("cyc-nationality", (d) => d["Nationality"])\r
      .attr("cyc-doping", (d) => {\r
        if (d["Doping"] === "") {\r
          return "clean";\r
        } else {\r
          return "doper";\r
        }\r
      });\r
\r
    d3.selectAll(".dot")\r
      .on("mouseover", function (event, d) {\r
        d3.select(this).style("cursor", "pointer").style("opacity", 1);\r
        tooltip\r
          .attr("style", "opacity: 1;")\r
          .html(\r
            \`Name: <b> \${d3.select(this).attr("cyc-name")} </b> <br>\r
             Time: \${d3.select(this).attr("cyc-time")} <br>\r
             Nationality: \${d3.select(this).attr("cyc-nationality")} <br>\r
             Year: \${formatYear(new Date(d3.select(this).attr("data-xvalue")))}\`\r
          )\r
          .attr("data-year", d3.select(this).attr("data-xvalue"))\r
          .style("top", \`\${event.pageY + 10}px\`)\r
          .style("left", \`\${event.pageX + 20}px\`)\r
          .style("background-color", (d) => {\r
          if (d3.select(this).attr("cyc-doping") === "doper") {\r
            return "pink"\r
          } else {\r
            return "rgb(248,248,248)"\r
          }\r
        });\r
      })\r
      .on("mouseout", function (event, d) {\r
      d3.select(this).style("opacity", .2)\r
\r
      if (d3.select(this).attr("cyc-doping") === "doper") {\r
         d3.select(this).style("fill", "red");\r
      } else {\r
        d3.select(this).style("fill", "rgb(64,64,64)");\r
      }\r
\r
        d3.select("#tooltip")\r
          .style("opacity", 0)\r
          .style("top", \`0px\`)\r
          .style("left", \`0px\`);\r
      });\r
\r
    const gx = svg\r
      .append("g")\r
      .attr("transform", \`translate(0,400)\`)\r
      .call(d3.axisBottom(x))\r
      .attr("id", "x-axis");\r
\r
    const gy = svg\r
      .append("g")\r
      .attr("transform", \`translate(60,0)\`)\r
      .call(d3.axisLeft(y).ticks(15, "%M:%S"))\r
      .attr("id", "y-axis");\r
  });\r
`,A3=`\r
\r
\r
<div id="main-app">\r
\r
  <div id="description"><span id="title"><u>Monthly Global Land-Surface Temperature</u>\r
      <p id="title-slug">1753 - 2015: base temperature 8.66℃</p></span>\r
      <span id="header-filler"></span>\r
    </div>\r
\r
\r
  <article id="heatmap-vizualization">\r
    <div id="chart">\r
\r
    </div>\r
  </article>\r
  <article id="lower-contentData">\r
\r
      <div id="legend">\r
            <div id="legend-grid-container">\r
                <div id="legend-graphic">\r
        </div>\r
              <div id="div1">Chart by Jay Crawford</div>\r
              <div id="div3"></div>\r
              <div id="div4"></div>\r
      </div>\r
  </div>\r
\r
      <div id="info-box">Data provided by FreeCodeCamp.org:<br><span id="link"><a href="https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json">https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json</a></span>\r
      </div>\r
    </div>\r
\r
  </div>\r
  </article>\r
`,R3=`#main-app {\r
  display: flex;\r
  justify-content: center;\r
  flex: 1;\r
  flex-direction: column;\r
  align-items: center;\r
  align-text: left;\r
  background-color: white;\r
  width: 1400px;\r
  margin: 60px auto auto auto;\r
  border: 2px solid black;\r
  position: relative;\r
}\r
\r
#title {\r
  font-size: 24px;\r
  grid-area: 1 / 1 / 2 / 2;\r
  width: 550px;\r
  padding: 1em 1em 0em 1em;\r
  font-weight: bolder;\r
}\r
\r
#title-slug {\r
  font-size: 16px;\r
  padding: 0;\r
  font-weight: normal;\r
}\r
\r
#description {\r
  display: grid;\r
  font-family: sans-serif;\r
  grid-template-columns: repeat(2, 1fr);\r
  grid-template-rows: 1fr;\r
  grid-column-gap: 0px;\r
  grid-row-gap: 0px;\r
  padding: 1em;\r
}\r
\r
#header-filler {\r
  grid-area: 1 / 2 / 2 / 3;\r
}\r
\r
.cell {\r
  width: 5px;\r
  height: 37px;\r
}\r
\r
#chart {\r
  padding: 1em;\r
  position: relative;\r
}\r
\r
#link {\r
  font-size: 10px;\r
}\r
\r
.color-sample {\r
  margin: 10px 1px 1px 1px;\r
}\r
\r
.container {\r
  display: flex;\r
  gap: 10px;\r
}\r
\r
#legend-graphic {\r
  grid-area: 1 / 2 / 2 / 3;\r
}\r
\r
#lower-contentData {\r
  display: grid;\r
  grid-template-columns: repeat(2, 1fr);\r
  grid-template-rows: 1fr;\r
  grid-column-gap: 0px;\r
  grid-row-gap: 0px;\r
  font-family: sans-serif;\r
}\r
\r
#legend {\r
  width: 600px;\r
  grid-area: 1 / 1 / 2 / 2;\r
}\r
\r
#info-box {\r
  background-color: white;\r
  grid-area: 1 / 2 / 2 / 3;\r
  font-size: 12px;\r
}\r
\r
#legend-grid-container {\r
  display: grid;\r
  grid-template-columns: repeat(2, 1fr);\r
  grid-template-rows: repeat(2, 1fr);\r
  grid-column-gap: 0px;\r
  grid-row-gap: 0px;\r
}\r
\r
#div1 {\r
  grid-area: 1 / 1 / 2 / 2;\r
}\r
#div3 {\r
  grid-area: 2 / 1 / 3 / 2;\r
}\r
#div4 {\r
  grid-area: 2 / 2 / 3 / 3;\r
}\r
\r
#div1,\r
#div3,\r
#div4 {\r
  background-color: white;\r
}\r
\r
#tooltip {\r
  background-color: white;\r
  opacity: 0;\r
  width: 240px;\r
  font-family: sans-serif;\r
  padding: 1.5em;\r
  border: 1px solid black;\r
  box-shadow: 3px 3px black;\r
}\r
`,C3=`import * as d3 from "https://esm.sh/d3";\r
\r
\r
//These colors are used in the chart.\r
const color1 = "#bbbbff",\r
  color2 = "#fcfbfa",\r
  color3 = "#ffe8e2",\r
  color4 = "#ffa4a2",\r
  color5 = "#da6868";\r
\r
\r
//tooltip has a "Date: " text feature which is populated in part by returnMonth below:\r
const returnMonth = (int) => {\r
  const passThru = int;\r
  switch (passThru.toString()) {\r
    case "1":\r
      return 'January';\r
    break;\r
    case "2":\r
      return 'February';\r
    break;\r
    case "3":\r
      return 'March';\r
    break;\r
    case "4":\r
      return 'April';\r
    break;\r
    case "5":\r
      return 'May';\r
    break;\r
    case "6":\r
      return 'June';\r
    break;\r
    case "7":\r
      return 'July';\r
    break;\r
    case "8":\r
      return 'August';\r
    break;\r
    case "9":\r
      return 'September';\r
    break;\r
    case "10":\r
      return 'October';\r
    break;\r
    case "11":\r
      return 'November';\r
    break;\r
    case "12":\r
      return 'December';\r
    break;\r
  }\r
}\r
\r
//The legend uses values in this array to populate tooltip information; values here only change HTML, no values or ranges.\r
const scaleArr = [1.7, 3.7, 5.8, 7.8, 9.8, 13.9];\r
\r
const url =\r
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json";\r
\r
const tooltip = d3\r
  .select("body")\r
  .append("div")\r
  .attr("id", "tooltip")\r
  .attr("opacity", "0")\r
  .style("position", "absolute");\r
\r
fetch(url)\r
  .then((response) => response.json())\r
  .then((data) => {\r
    const baseTemp = data["baseTemperature"],\r
      allData = data["monthlyVariance"];\r
\r
  //returns an array of two values, the lowest base temperature, and the highest base temperature.\r
    const varianceDomain = (allData) => {\r
      let allVariances = [];\r
      allData.forEach((data) => {\r
        allVariances.push(baseTemp + data["variance"]);\r
      });\r
      return [d3.min(allVariances), d3.max(allVariances)];\r
    };\r
\r
    //colorScale populates an array with 6 values that are evenly spaced across the range of tmperatures to correlate with colors. Five colors requires 6 values.\r
    const colorScale = (varianceDomain) => {\r
      let colorArray = [\r
        Math.round((varianceDomain[0] + Number.EPSILON) * 100) / 100,\r
        Math.round(\r
          (varianceDomain[0] +\r
            (varianceDomain[1] - varianceDomain[0]) / 6 +\r
            Number.EPSILON) *\r
            100\r
        ) / 100,\r
        Math.round(\r
          (varianceDomain[0] +\r
            2 * ((varianceDomain[1] - varianceDomain[0]) / 6) +\r
            Number.EPSILON) *\r
            100\r
        ) / 100,\r
        Math.round(\r
          (varianceDomain[0] +\r
            3 * ((varianceDomain[1] - varianceDomain[0]) / 6) +\r
            Number.EPSILON) *\r
            100\r
        ) / 100,\r
        Math.round(\r
          (varianceDomain[0] +\r
            4 * ((varianceDomain[1] - varianceDomain[0]) / 6) +\r
            Number.EPSILON) *\r
            100\r
        ) / 100,\r
        Math.round((varianceDomain[1] + Number.EPSILON) * 100) / 100\r
      ];\r
      return colorArray;\r
    };\r
\r
    //yearsDomain returns an array for the x-axis domain\r
    const yearsDomain = (allData) => {\r
      let allYears = [];\r
      allData.forEach((entry) => {\r
        allYears.push(entry["year"]);\r
      });\r
      return [new Date(\`\${d3.min(allYears)}\`), new Date(\`\${d3.max(allYears)}\`)];\r
    };\r
\r
    const w = 1280;\r
    const h = 500;\r
    const padding = 60;\r
\r
    const xScale = d3.scaleUtc(yearsDomain(allData), [padding, w - padding]);\r
\r
    const yScale = d3\r
      .scaleBand()\r
      .domain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])\r
      .range([h - padding, 0]);\r
\r
    const svg = d3\r
      .select("#chart")\r
      .append("svg")\r
      .attr("width", w)\r
      .attr("height", h);\r
\r
    const xAxis = d3.axisBottom(xScale);\r
    xAxis.ticks(27, "%Y");\r
\r
    const yAxis = d3.axisLeft(yScale);\r
    yAxis.ticks(12).tickFormat((month) => {\r
      const date = new Date(0);\r
      date.setUTCMonth(month);\r
      return d3.timeFormat("%B")(date);\r
    });\r
\r
    svg\r
      .append("g")\r
      .attr("transform", "translate(0," + (h - padding) + ")")\r
      .call(xAxis)\r
      .attr("id", "x-axis");\r
\r
    svg\r
      .append("g")\r
      .attr("transform", \`translate(\${padding},0)\`)\r
      .call(yAxis)\r
      .attr("id", "y-axis");\r
\r
    svg\r
      .selectAll("rect")\r
      .data(allData)\r
      .enter()\r
      .append("rect")\r
      .attr("class", "cell")\r
      .attr("x", (d) => {\r
        //this is where d["year"] is converted into an actual date\r
        return xScale(new Date(d["year"].toString()));\r
      })\r
      .attr("y", (d) => {\r
        //this is where d["month"] is converted into an actual date\r
        return yScale(d["month"]);\r
      })\r
      .attr("data-year", (d) => {\r
        return d["year"];\r
      })\r
      .attr("data-month", (d) => {\r
        return d["month"] - 1;\r
      })\r
      .attr("data-temp", (d) => {\r
        return Math.round(baseTemp + d["variance"]);\r
      })\r
      .attr("tru-temp", (d) => {\r
        return (\r
          Math.round((baseTemp + d["variance"] + Number.EPSILON) * 100) / 100\r
        );\r
      })\r
      .attr("fill", (d) => {\r
        const localVariance = baseTemp + d["variance"];\r
        const colorsArray = colorScale(varianceDomain(allData));\r
        if (localVariance >= colorsArray[0] && localVariance < colorsArray[1]) {\r
          return color1;\r
        }\r
        if (localVariance <= colorsArray[2] && localVariance > colorsArray[1]) {\r
          return color2;\r
        }\r
        if (localVariance <= colorsArray[3] && localVariance > colorsArray[2]) {\r
          return color3;\r
        }\r
        if (localVariance <= colorsArray[4] && localVariance > colorsArray[3]) {\r
          return color4;\r
        }\r
        if (localVariance === 5) {\r
          return color3;\r
        }\r
        if (localVariance <= colorsArray[5] && localVariance > colorsArray[4]) {\r
          return color5;\r
        } else {\r
          return "pink";\r
        }\r
      })\r
  .on("mouseover", function (event, d) {\r
        d3.select(this).style("cursor", "pointer").style("opacity", 0.5);\r
        tooltip\r
          .style("opacity", ".7")\r
          .style("top", \`\${event.pageY+ -30}px\`)\r
          .style("left", \`\${event.pageX + 50}px\`)\r
          .attr("data-year", (d) => {\r
            return d3.select(this).attr("data-year");\r
          })\r
          .attr("data-temp", (d) => {\r
            return d3.select(this).attr("data-temp");\r
          })\r
          .html(\r
            \`Month: \${returnMonth(parseInt(d3.select(this).attr('data-month')) + 1)} <br>Year: \${d3\r
              .select(this)\r
              .attr("data-year")}<br> Average Temperature: \${d3\r
              .select(this)\r
              .attr("tru-temp")}\\u00B0C\`\r
          );\r
      })\r
      .on("mouseout", function (event, d) {\r
        d3.select(this).style("opacity", 1);\r
        tooltip.style("opacity", "0").style("top", "0px").style("left", "0px");\r
      });;\r
\r
    //fetch closure\r
  });\r
\r
// Function to create square SVGs\r
function createSquareSVG(size, color) {\r
  const svgNS = "http://www.w3.org/2000/svg"; // SVG namespace\r
  const svg = document.createElementNS(svgNS, "svg");\r
  svg.setAttribute("width", size);\r
  svg.setAttribute("height", size);\r
  svg.setAttribute("class", "color-sample");\r
\r
  const rect = document.createElementNS(svgNS, "rect");\r
  rect.setAttribute("width", size);\r
  rect.setAttribute("height", size);\r
  rect.setAttribute("fill", color);\r
\r
  svg.appendChild(rect);\r
  return svg;\r
}\r
\r
// Append 5 square SVGs to the legend\r
const container = document.getElementById("legend-graphic");\r
const size = 40; // size of the square\r
const color = [color1, color2, color3, color4, color5]; // color of the square\r
\r
for (let i = 0; i < 5; i++) {\r
  const svgSquare = createSquareSVG(size, color[i]);\r
  svgSquare.setAttribute("scale", \`\${scaleArr[i]} - \${scaleArr[i + 1]}\`);\r
  container.appendChild(svgSquare);\r
}\r
\r
\r
//This appends tooltip functionality to the "svg squares" in the legend.\r
d3.selectAll(".color-sample")\r
  .on("mouseover", function (event, d) {\r
    d3.select(this).style("cursor", "pointer");\r
    console.log(event.pageX);\r
    tooltip\r
      .style("opacity", ".7")\r
      .style("top", "670px")\r
      .style("left", \`\${event.pageX-20}px\`)\r
      .html(\`Temperature Range: \${d3.select(this).attr("scale")}\\u00B0C\`);\r
  })\r
  .on("mouseout", function (event, d) {\r
    tooltip.style("opacity", "0").style("top", "0px").style("left", "0px");\r
  });\r
`,D3=[{id:"1",title:"Global Temperature Story",description:"Line chart built with D3 that animates global surface temperatures from 1880 to present—hovering reveals contextual callouts.",tech:"HTML · CSS · D3.js",pen:"https://codepen.io/jayhcrawford/full/temp-1",files:"Codepen_files/1",html:_3,css:x3,js:y3},{id:"2",title:"Solar vs Wind Adoption",description:"Responsive stacked area chart comparing utility-scale solar and wind generation from 2000–2030.",tech:"HTML · CSS · D3.js",pen:"https://codepen.io/jayhcrawford/full/temp-2",files:"Codepen_files/2",html:S3,css:b3,js:E3},{id:"3",title:"Malibu Fire Explorer",description:"Interactive choropleth overlaying historical fire perimeter data on top of a simplified California coastline map.",tech:"HTML · CSS · D3.js",pen:"https://codepen.io/jayhcrawford/full/temp-3",files:"Codepen_files/3",html:M3,css:T3,js:w3},{id:"4",title:"Clock Tower B-sides",description:"Radial visualization that converts streaming counts into a kinetic dial—each spoke pulses based on play velocity.",tech:"HTML · CSS · D3.js",pen:"https://codepen.io/jayhcrawford/full/temp-4",files:"Codepen_files/4",html:A3,css:R3,js:C3}],U3=a=>a.replace(/<\/script>/g,"<\\/script>"),N3=(a,e,n)=>`<!DOCTYPE html>
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
      ${U3(n)}
    <\/script>
  </body>
</html>`,L3=()=>{const a=so;return y.jsx(ro,{construction:!1,title:"D3 Visualizations",children:y.jsxs("div",{className:"space-y-10 text-slate-100",children:[y.jsxs(Ti,{tone:"glass",className:"space-y-6 text-center",children:[y.jsx(Un,{children:"Codepen workbench"}),y.jsx(hr,{quote:"Visualizing data keeps me honest about the story I'm telling.",sizePreset:"balanced"}),y.jsxs(Nt,{children:["Each section below embeds the original D3 sketch inline (via ",y.jsx("code",{children:"srcDoc"}),"). For best performance these run in isolated iframes; swap them for dedicated React components later if we want tighter control."]})]}),D3.map(e=>y.jsxs(Ti,{className:"space-y-6",children:[y.jsxs("div",{className:"flex flex-col gap-3 md:flex-row md:items-center md:justify-between",children:[y.jsx(Un,{align:"left",children:e.title}),y.jsx("span",{className:`text-sm ${a}`,children:e.tech})]}),y.jsx(Nt,{children:e.description}),y.jsx("div",{className:"rounded-2xl border border-white/15 bg-black/30 p-2",children:y.jsx("iframe",{title:e.title,srcDoc:N3(e.html,e.css,e.js),sandbox:"allow-scripts allow-same-origin",loading:"lazy",className:"w-full rounded-xl bg-white",style:{minHeight:520}})}),y.jsxs("div",{className:"flex flex-wrap gap-4",children:[y.jsx(Js,{href:e.pen,label:"View on Codepen"}),y.jsx(Js,{href:`https://github.com/jayhcrawford/jayhcrawford.github.io/tree/main/${e.files}`,label:"Browse source files"})]})]},e.id))]})})},P3=()=>y.jsx(L3,{}),O3=[{title:"Projects",url:"projects"},{title:"Art",url:"art"},{title:"About",url:"about"},{title:"Contact",url:"contact"},{title:"3D Projects",url:"3d"},...vx.map(a=>({title:a.category,url:a.url})),...px.map(a=>({title:a.category,url:a.url})),...gx.map(a=>({title:a.category,url:a.url})),...mx.map(a=>({title:a.category,url:a.url})),...c3.map(a=>({title:a.category,url:a.url}))],B3=()=>{const{width:a,height:e}=cx(),n=de.useRef(null),l=Ca().pathname;function c(){return l.split("/").filter((f,d)=>d!==0)}return console.log(l,"is curernt"),de.useEffect(()=>{const f=new Tu,d=new jn(75,window.innerWidth/window.innerHeight,.1,1e3),p=new lx({alpha:!0});p.setClearColor(0,0),p.setSize(window.innerWidth,window.innerHeight),p.domElement.style.position="absolute",p.domElement.style.top="0",p.domElement.style.left="0",p.domElement.style.zIndex="-1",n.current instanceof HTMLElement&&!n.current.hasChildNodes()&&n.current.appendChild(p.domElement);const m=new io,g=new Du({color:65280}),_=new fi(m,g);f.add(_),d.position.z=5;const x=()=>{_.rotation.x+=.01,_.rotation.y+=.01,p.render(f,d),requestAnimationFrame(x)};return x(),()=>{n.current&&n.current.removeChild(p.domElement)}},[]),console.log(a,"is the width; and the height is: ",e),y.jsx(y.Fragment,{children:y.jsxs("div",{id:"outer_bg",children:[y.jsx("div",{style:{position:"fixed",top:0,left:0,width:`${a}px`,height:`${e}px`,overflow:"hidden"},children:y.jsx(yA,{})}),y.jsx(HR,{}),y.jsxs("div",{className:"pt-20",id:"inner_bg",ref:n,style:{position:"relative",width:"95vw",margin:"auto"},children:[y.jsxs("div",{children:[y.jsx(vA,{width:a,path:l}),c().length>1&&y.jsx(xA,{split:c,locationData:O3})]}),y.jsxs("div",{id:"body_div",children:[y.jsx("main",{children:y.jsxs(S1,{children:[y.jsx(Dn,{path:"/",element:y.jsx(y.Fragment,{})}),y.jsx(Dn,{path:"/about",element:y.jsx(lA,{})}),y.jsx(Dn,{path:"/projects/3d",element:y.jsx(g3,{width:a,blog_array:v3})}),y.jsx(Dn,{path:"/projects",element:y.jsx(dA,{width:a,category_array:vx})}),y.jsx(Dn,{path:"/projects/web_dev",element:y.jsx(p3,{width:a,blog_array:m3})}),y.jsx(Dn,{path:"/projects/programming",element:y.jsx(d3,{width:a,blog_array:h3})}),y.jsx(Dn,{path:"/projects/web_dev/d3-visualizations",element:y.jsx(P3,{})}),y.jsx(Dn,{path:"/art",element:y.jsx(bh,{width:a,category_array:px})}),y.jsx(Dn,{path:"/art/painting",element:y.jsx(bh,{width:a,category_array:gx})}),y.jsx(Dn,{path:"/art/painting/:periodSlug",element:y.jsx(l3,{width:a})}),y.jsx(Dn,{path:"/art/drawing",element:y.jsx(bh,{width:a,category_array:mx})}),y.jsx(Dn,{path:"/contact",element:y.jsx(cA,{})}),y.jsx(Dn,{path:"/projects/urfriends",element:y.jsx(XR,{})}),y.jsx(Dn,{path:"/projects/thebook",element:y.jsx(VR,{})}),y.jsx(Dn,{path:"/projects/ripsheet",element:y.jsx(kR,{})}),y.jsx(Dn,{path:"/projects/widowbags",element:y.jsx(qR,{})})]})}),y.jsx(hA,{path:l})]})]}),y.jsx("div",{className:"pointer-events-none flex justify-end fixed top-0 w-full z-100 ",children:y.jsx("a",{href:_l,target:"new",children:y.jsx("button",{className:"pointer-events-auto p-2 rounded-lg m-2 bg-white cursor-pointer",children:y.jsx(_A,{})})})})]})})};function I3(){const{pathname:a}=Ca();return de.useEffect(()=>{window.scrollTo(0,0)},[a]),null}CS.createRoot(document.getElementById("root")).render(y.jsx(de.StrictMode,{children:y.jsxs(X1,{basename:"/",children:[y.jsx(I3,{}),y.jsx(B3,{})]})}));
