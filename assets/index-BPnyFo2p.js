(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var gh={exports:{}},Vo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iv;function $S(){if(Iv)return Vo;Iv=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:a,type:s,key:f,ref:l!==void 0?l:null,props:u}}return Vo.Fragment=e,Vo.jsx=i,Vo.jsxs=i,Vo}var Fv;function ey(){return Fv||(Fv=1,gh.exports=$S()),gh.exports}var B=ey(),vh={exports:{}},rt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hv;function ty(){if(Hv)return rt;Hv=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function x(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,A={};function S(O,ee,Se){this.props=O,this.context=ee,this.refs=A,this.updater=Se||y}S.prototype.isReactComponent={},S.prototype.setState=function(O,ee){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ee,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function v(){}v.prototype=S.prototype;function N(O,ee,Se){this.props=O,this.context=ee,this.refs=A,this.updater=Se||y}var C=N.prototype=new v;C.constructor=N,M(C,S.prototype),C.isPureReactComponent=!0;var U=Array.isArray,H={H:null,A:null,T:null,S:null,V:null},k=Object.prototype.hasOwnProperty;function I(O,ee,Se,Ee,J,me){return Se=me.ref,{$$typeof:a,type:O,key:ee,ref:Se!==void 0?Se:null,props:me}}function j(O,ee){return I(O.type,ee,void 0,void 0,void 0,O.props)}function D(O){return typeof O=="object"&&O!==null&&O.$$typeof===a}function w(O){var ee={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Se){return ee[Se]})}var V=/\/+/g;function ue(O,ee){return typeof O=="object"&&O!==null&&O.key!=null?w(""+O.key):ee.toString(36)}function oe(){}function xe(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(oe,oe):(O.status="pending",O.then(function(ee){O.status==="pending"&&(O.status="fulfilled",O.value=ee)},function(ee){O.status==="pending"&&(O.status="rejected",O.reason=ee)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function pe(O,ee,Se,Ee,J){var me=typeof O;(me==="undefined"||me==="boolean")&&(O=null);var ye=!1;if(O===null)ye=!0;else switch(me){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(O.$$typeof){case a:case e:ye=!0;break;case g:return ye=O._init,pe(ye(O._payload),ee,Se,Ee,J)}}if(ye)return J=J(O),ye=Ee===""?"."+ue(O,0):Ee,U(J)?(Se="",ye!=null&&(Se=ye.replace(V,"$&/")+"/"),pe(J,ee,Se,"",function(lt){return lt})):J!=null&&(D(J)&&(J=j(J,Se+(J.key==null||O&&O.key===J.key?"":(""+J.key).replace(V,"$&/")+"/")+ye)),ee.push(J)),1;ye=0;var Re=Ee===""?".":Ee+":";if(U(O))for(var Le=0;Le<O.length;Le++)Ee=O[Le],me=Re+ue(Ee,Le),ye+=pe(Ee,ee,Se,me,J);else if(Le=x(O),typeof Le=="function")for(O=Le.call(O),Le=0;!(Ee=O.next()).done;)Ee=Ee.value,me=Re+ue(Ee,Le++),ye+=pe(Ee,ee,Se,me,J);else if(me==="object"){if(typeof O.then=="function")return pe(xe(O),ee,Se,Ee,J);throw ee=String(O),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return ye}function z(O,ee,Se){if(O==null)return O;var Ee=[],J=0;return pe(O,Ee,"","",function(me){return ee.call(Se,me,J++)}),Ee}function K(O){if(O._status===-1){var ee=O._result;ee=ee(),ee.then(function(Se){(O._status===0||O._status===-1)&&(O._status=1,O._result=Se)},function(Se){(O._status===0||O._status===-1)&&(O._status=2,O._result=Se)}),O._status===-1&&(O._status=0,O._result=ee)}if(O._status===1)return O._result.default;throw O._result}var Y=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function Me(){}return rt.Children={map:z,forEach:function(O,ee,Se){z(O,function(){ee.apply(this,arguments)},Se)},count:function(O){var ee=0;return z(O,function(){ee++}),ee},toArray:function(O){return z(O,function(ee){return ee})||[]},only:function(O){if(!D(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},rt.Component=S,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=N,rt.StrictMode=s,rt.Suspense=p,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,rt.__COMPILER_RUNTIME={__proto__:null,c:function(O){return H.H.useMemoCache(O)}},rt.cache=function(O){return function(){return O.apply(null,arguments)}},rt.cloneElement=function(O,ee,Se){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Ee=M({},O.props),J=O.key,me=void 0;if(ee!=null)for(ye in ee.ref!==void 0&&(me=void 0),ee.key!==void 0&&(J=""+ee.key),ee)!k.call(ee,ye)||ye==="key"||ye==="__self"||ye==="__source"||ye==="ref"&&ee.ref===void 0||(Ee[ye]=ee[ye]);var ye=arguments.length-2;if(ye===1)Ee.children=Se;else if(1<ye){for(var Re=Array(ye),Le=0;Le<ye;Le++)Re[Le]=arguments[Le+2];Ee.children=Re}return I(O.type,J,void 0,void 0,me,Ee)},rt.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},rt.createElement=function(O,ee,Se){var Ee,J={},me=null;if(ee!=null)for(Ee in ee.key!==void 0&&(me=""+ee.key),ee)k.call(ee,Ee)&&Ee!=="key"&&Ee!=="__self"&&Ee!=="__source"&&(J[Ee]=ee[Ee]);var ye=arguments.length-2;if(ye===1)J.children=Se;else if(1<ye){for(var Re=Array(ye),Le=0;Le<ye;Le++)Re[Le]=arguments[Le+2];J.children=Re}if(O&&O.defaultProps)for(Ee in ye=O.defaultProps,ye)J[Ee]===void 0&&(J[Ee]=ye[Ee]);return I(O,me,void 0,void 0,null,J)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(O){return{$$typeof:h,render:O}},rt.isValidElement=D,rt.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:K}},rt.memo=function(O,ee){return{$$typeof:m,type:O,compare:ee===void 0?null:ee}},rt.startTransition=function(O){var ee=H.T,Se={};H.T=Se;try{var Ee=O(),J=H.S;J!==null&&J(Se,Ee),typeof Ee=="object"&&Ee!==null&&typeof Ee.then=="function"&&Ee.then(Me,Y)}catch(me){Y(me)}finally{H.T=ee}},rt.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},rt.use=function(O){return H.H.use(O)},rt.useActionState=function(O,ee,Se){return H.H.useActionState(O,ee,Se)},rt.useCallback=function(O,ee){return H.H.useCallback(O,ee)},rt.useContext=function(O){return H.H.useContext(O)},rt.useDebugValue=function(){},rt.useDeferredValue=function(O,ee){return H.H.useDeferredValue(O,ee)},rt.useEffect=function(O,ee,Se){var Ee=H.H;if(typeof Se=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Ee.useEffect(O,ee)},rt.useId=function(){return H.H.useId()},rt.useImperativeHandle=function(O,ee,Se){return H.H.useImperativeHandle(O,ee,Se)},rt.useInsertionEffect=function(O,ee){return H.H.useInsertionEffect(O,ee)},rt.useLayoutEffect=function(O,ee){return H.H.useLayoutEffect(O,ee)},rt.useMemo=function(O,ee){return H.H.useMemo(O,ee)},rt.useOptimistic=function(O,ee){return H.H.useOptimistic(O,ee)},rt.useReducer=function(O,ee,Se){return H.H.useReducer(O,ee,Se)},rt.useRef=function(O){return H.H.useRef(O)},rt.useState=function(O){return H.H.useState(O)},rt.useSyncExternalStore=function(O,ee,Se){return H.H.useSyncExternalStore(O,ee,Se)},rt.useTransition=function(){return H.H.useTransition()},rt.version="19.1.0",rt}var Gv;function Yd(){return Gv||(Gv=1,vh.exports=ty()),vh.exports}var he=Yd(),_h={exports:{}},ko={},xh={exports:{}},Sh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vv;function ny(){return Vv||(Vv=1,function(a){function e(z,K){var Y=z.length;z.push(K);e:for(;0<Y;){var Me=Y-1>>>1,O=z[Me];if(0<l(O,K))z[Me]=K,z[Y]=O,Y=Me;else break e}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var K=z[0],Y=z.pop();if(Y!==K){z[0]=Y;e:for(var Me=0,O=z.length,ee=O>>>1;Me<ee;){var Se=2*(Me+1)-1,Ee=z[Se],J=Se+1,me=z[J];if(0>l(Ee,Y))J<O&&0>l(me,Ee)?(z[Me]=me,z[J]=Y,Me=J):(z[Me]=Ee,z[Se]=Y,Me=Se);else if(J<O&&0>l(me,Y))z[Me]=me,z[J]=Y,Me=J;else break e}}return K}function l(z,K){var Y=z.sortIndex-K.sortIndex;return Y!==0?Y:z.id-K.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;a.unstable_now=function(){return u.now()}}else{var f=Date,h=f.now();a.unstable_now=function(){return f.now()-h}}var p=[],m=[],g=1,_=null,x=3,y=!1,M=!1,A=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function U(z){for(var K=i(m);K!==null;){if(K.callback===null)s(m);else if(K.startTime<=z)s(m),K.sortIndex=K.expirationTime,e(p,K);else break;K=i(m)}}function H(z){if(A=!1,U(z),!M)if(i(p)!==null)M=!0,k||(k=!0,ue());else{var K=i(m);K!==null&&pe(H,K.startTime-z)}}var k=!1,I=-1,j=5,D=-1;function w(){return S?!0:!(a.unstable_now()-D<j)}function V(){if(S=!1,k){var z=a.unstable_now();D=z;var K=!0;try{e:{M=!1,A&&(A=!1,N(I),I=-1),y=!0;var Y=x;try{t:{for(U(z),_=i(p);_!==null&&!(_.expirationTime>z&&w());){var Me=_.callback;if(typeof Me=="function"){_.callback=null,x=_.priorityLevel;var O=Me(_.expirationTime<=z);if(z=a.unstable_now(),typeof O=="function"){_.callback=O,U(z),K=!0;break t}_===i(p)&&s(p),U(z)}else s(p);_=i(p)}if(_!==null)K=!0;else{var ee=i(m);ee!==null&&pe(H,ee.startTime-z),K=!1}}break e}finally{_=null,x=Y,y=!1}K=void 0}}finally{K?ue():k=!1}}}var ue;if(typeof C=="function")ue=function(){C(V)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,xe=oe.port2;oe.port1.onmessage=V,ue=function(){xe.postMessage(null)}}else ue=function(){v(V,0)};function pe(z,K){I=v(function(){z(a.unstable_now())},K)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(z){z.callback=null},a.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<z?Math.floor(1e3/z):5},a.unstable_getCurrentPriorityLevel=function(){return x},a.unstable_next=function(z){switch(x){case 1:case 2:case 3:var K=3;break;default:K=x}var Y=x;x=K;try{return z()}finally{x=Y}},a.unstable_requestPaint=function(){S=!0},a.unstable_runWithPriority=function(z,K){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Y=x;x=z;try{return K()}finally{x=Y}},a.unstable_scheduleCallback=function(z,K,Y){var Me=a.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Me+Y:Me):Y=Me,z){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=Y+O,z={id:g++,callback:K,priorityLevel:z,startTime:Y,expirationTime:O,sortIndex:-1},Y>Me?(z.sortIndex=Y,e(m,z),i(p)===null&&z===i(m)&&(A?(N(I),I=-1):A=!0,pe(H,Y-Me))):(z.sortIndex=O,e(p,z),M||y||(M=!0,k||(k=!0,ue()))),z},a.unstable_shouldYield=w,a.unstable_wrapCallback=function(z){var K=x;return function(){var Y=x;x=K;try{return z.apply(this,arguments)}finally{x=Y}}}}(Sh)),Sh}var kv;function iy(){return kv||(kv=1,xh.exports=ny()),xh.exports}var yh={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xv;function ay(){if(Xv)return Ln;Xv=1;var a=Yd();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,m,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:p,containerInfo:m,implementation:g}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ln.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return u(p,m,null,g)},Ln.flushSync=function(p){var m=f.T,g=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=m,s.p=g,s.d.f()}},Ln.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},Ln.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Ln.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,_=h(g,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,y=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:y}):g==="script"&&s.d.X(p,{crossOrigin:_,integrity:x,fetchPriority:y,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Ln.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},Ln.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,_=h(g,m.crossOrigin);s.d.L(p,g,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Ln.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=h(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},Ln.requestFormReset=function(p){s.d.r(p)},Ln.unstable_batchedUpdates=function(p,m){return p(m)},Ln.useFormState=function(p,m,g){return f.H.useFormState(p,m,g)},Ln.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ln.version="19.1.0",Ln}var Wv;function ry(){if(Wv)return yh.exports;Wv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),yh.exports=ay(),yh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jv;function sy(){if(jv)return ko;jv=1;var a=iy(),e=Yd(),i=ry();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,r=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(r=n.return),t=n.return;while(t)}return n.tag===3?r:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(u(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var r=t,o=n;;){var c=r.return;if(c===null)break;var d=c.alternate;if(d===null){if(o=c.return,o!==null){r=o;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===r)return h(c),t;if(d===o)return h(c),n;d=d.sibling}throw Error(s(188))}if(r.return!==o.return)r=c,o=d;else{for(var E=!1,T=c.child;T;){if(T===r){E=!0,r=c,o=d;break}if(T===o){E=!0,o=c,r=d;break}T=T.sibling}if(!E){for(T=d.child;T;){if(T===r){E=!0,r=d,o=c;break}if(T===o){E=!0,o=d,r=c;break}T=T.sibling}if(!E)throw Error(s(189))}}if(r.alternate!==o)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?t:n}function m(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=m(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),C=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function ue(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Symbol.for("react.client.reference");function xe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===oe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case M:return"Fragment";case S:return"Profiler";case A:return"StrictMode";case H:return"Suspense";case k:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case y:return"Portal";case C:return(t.displayName||"Context")+".Provider";case N:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:xe(t.type)||"Memo";case j:n=t._payload,t=t._init;try{return xe(t(n))}catch{}}return null}var pe=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},Me=[],O=-1;function ee(t){return{current:t}}function Se(t){0>O||(t.current=Me[O],Me[O]=null,O--)}function Ee(t,n){O++,Me[O]=t.current,t.current=n}var J=ee(null),me=ee(null),ye=ee(null),Re=ee(null);function Le(t,n){switch(Ee(ye,n),Ee(me,t),Ee(J,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?hv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=hv(n),t=dv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Se(J),Ee(J,t)}function lt(){Se(J),Se(me),Se(ye)}function Ke(t){t.memoizedState!==null&&Ee(Re,t);var n=J.current,r=dv(n,t.type);n!==r&&(Ee(me,t),Ee(J,r))}function Xt(t){me.current===t&&(Se(J),Se(me)),Re.current===t&&(Se(Re),zo._currentValue=Y)}var Gt=Object.prototype.hasOwnProperty,ht=a.unstable_scheduleCallback,F=a.unstable_cancelCallback,Vn=a.unstable_shouldYield,_t=a.unstable_requestPaint,it=a.unstable_now,We=a.unstable_getCurrentPriorityLevel,Ot=a.unstable_ImmediatePriority,Ve=a.unstable_UserBlockingPriority,L=a.unstable_NormalPriority,b=a.unstable_LowPriority,te=a.unstable_IdlePriority,ge=a.log,Te=a.unstable_setDisableYieldValue,fe=null,Pe=null;function we(t){if(typeof ge=="function"&&Te(t),Pe&&typeof Pe.setStrictMode=="function")try{Pe.setStrictMode(fe,t)}catch{}}var Ge=Math.clz32?Math.clz32:Fe,$e=Math.log,Ae=Math.LN2;function Fe(t){return t>>>=0,t===0?32:31-($e(t)/Ae|0)|0}var Ye=256,Qe=4194304;function Be(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ct(t,n,r){var o=t.pendingLanes;if(o===0)return 0;var c=0,d=t.suspendedLanes,E=t.pingedLanes;t=t.warmLanes;var T=o&134217727;return T!==0?(o=T&~d,o!==0?c=Be(o):(E&=T,E!==0?c=Be(E):r||(r=T&~t,r!==0&&(c=Be(r))))):(T=o&~d,T!==0?c=Be(T):E!==0?c=Be(E):r||(r=o&~t,r!==0&&(c=Be(r)))),c===0?0:n!==0&&n!==c&&(n&d)===0&&(d=c&-c,r=n&-n,d>=r||d===32&&(r&4194048)!==0)?n:c}function nt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Pt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var t=Ye;return Ye<<=1,(Ye&4194048)===0&&(Ye=256),t}function Ne(){var t=Qe;return Qe<<=1,(Qe&62914560)===0&&(Qe=4194304),t}function le(t){for(var n=[],r=0;31>r;r++)n.push(t);return n}function ve(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ze(t,n,r,o,c,d){var E=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var T=t.entanglements,P=t.expirationTimes,$=t.hiddenUpdates;for(r=E&~r;0<r;){var ce=31-Ge(r),_e=1<<ce;T[ce]=0,P[ce]=-1;var ne=$[ce];if(ne!==null)for($[ce]=null,ce=0;ce<ne.length;ce++){var ie=ne[ce];ie!==null&&(ie.lane&=-536870913)}r&=~_e}o!==0&&Oe(t,o,0),d!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=d&~(E&~n))}function Oe(t,n,r){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ge(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|r&4194090}function at(t,n){var r=t.entangledLanes|=n;for(t=t.entanglements;r;){var o=31-Ge(r),c=1<<o;c&n|t[o]&n&&(t[o]|=n),r&=~c}}function Wt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function rn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Tt(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:Lv(t.type))}function Jn(t,n){var r=K.p;try{return K.p=t,n()}finally{K.p=r}}var vn=Math.random().toString(36).slice(2),fn="__reactFiber$"+vn,Tn="__reactProps$"+vn,kn="__reactContainer$"+vn,or="__reactEvents$"+vn,dl="__reactListeners$"+vn,pl="__reactHandles$"+vn,lr="__reactResources$"+vn,ya="__reactMarker$"+vn;function Ea(t){delete t[fn],delete t[Tn],delete t[or],delete t[dl],delete t[pl]}function Gi(t){var n=t[fn];if(n)return n;for(var r=t.parentNode;r;){if(n=r[kn]||r[fn]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(t=vv(t);t!==null;){if(r=t[fn])return r;t=vv(t)}return n}t=r,r=t.parentNode}return null}function Vi(t){if(t=t[fn]||t[kn]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function ur(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Ma(t){var n=t[lr];return n||(n=t[lr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function sn(t){t[ya]=!0}var ml=new Set,gl={};function ki(t,n){R(t,n),R(t+"Capture",n)}function R(t,n){for(gl[t]=n,t=0;t<n.length;t++)ml.add(n[t])}var q=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ae={},re={};function Z(t){return Gt.call(re,t)?!0:Gt.call(ae,t)?!1:q.test(t)?re[t]=!0:(ae[t]=!0,!1)}function be(t,n,r){if(Z(n))if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+r)}}function Ce(t,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+r)}}function Ue(t,n,r,o){if(o===null)t.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(n,r,""+o)}}var Ie,et;function je(t){if(Ie===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);Ie=n&&n[1]||"",et=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ie+t+et}var Xe=!1;function pt(t,n){if(!t||Xe)return"";Xe=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(ie){var ne=ie}Reflect.construct(t,[],_e)}else{try{_e.call()}catch(ie){ne=ie}t.call(_e.prototype)}}else{try{throw Error()}catch(ie){ne=ie}(_e=t())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(ie){if(ie&&ne&&typeof ie.stack=="string")return[ie.stack,ne.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),E=d[0],T=d[1];if(E&&T){var P=E.split(`
`),$=T.split(`
`);for(c=o=0;o<P.length&&!P[o].includes("DetermineComponentFrameRoot");)o++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(o===P.length||c===$.length)for(o=P.length-1,c=$.length-1;1<=o&&0<=c&&P[o]!==$[c];)c--;for(;1<=o&&0<=c;o--,c--)if(P[o]!==$[c]){if(o!==1||c!==1)do if(o--,c--,0>c||P[o]!==$[c]){var ce=`
`+P[o].replace(" at new "," at ");return t.displayName&&ce.includes("<anonymous>")&&(ce=ce.replace("<anonymous>",t.displayName)),ce}while(1<=o&&0<=c);break}}}finally{Xe=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?je(r):""}function bt(t){switch(t.tag){case 26:case 27:case 5:return je(t.type);case 16:return je("Lazy");case 13:return je("Suspense");case 19:return je("SuspenseList");case 0:case 15:return pt(t.type,!1);case 11:return pt(t.type.render,!1);case 1:return pt(t.type,!0);case 31:return je("Activity");default:return""}}function Zt(t){try{var n="";do n+=bt(t),t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function xt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function St(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function qe(t){var n=St(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,d=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(E){o=""+E,d.call(this,E)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(E){o=""+E},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function $t(t){t._valueTracker||(t._valueTracker=qe(t))}function Mt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var r=n.getValue(),o="";return t&&(o=St(t)?t.checked?"true":"false":t.value),t=o,t!==r?(n.setValue(t),!0):!1}function Cn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ta=/[\n"\\]/g;function jt(t){return t.replace(Ta,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Xi(t,n,r,o,c,d,E,T){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),n!=null?E==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+xt(n)):t.value!==""+xt(n)&&(t.value=""+xt(n)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),n!=null?Un(t,E,xt(n)):r!=null?Un(t,E,xt(r)):o!=null&&t.removeAttribute("value"),c==null&&d!=null&&(t.defaultChecked=!!d),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+xt(T):t.removeAttribute("name")}function Vt(t,n,r,o,c,d,E,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||r!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;r=r!=null?""+xt(r):"",n=n!=null?""+xt(n):r,T||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=T?t.checked:!!o,t.defaultChecked=!!o,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E)}function Un(t,n,r){n==="number"&&Cn(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function hn(t,n,r,o){if(t=t.options,n){n={};for(var c=0;c<r.length;c++)n["$"+r[c]]=!0;for(r=0;r<t.length;r++)c=n.hasOwnProperty("$"+t[r].value),t[r].selected!==c&&(t[r].selected=c),c&&o&&(t[r].defaultSelected=!0)}else{for(r=""+xt(r),n=null,c=0;c<t.length;c++){if(t[c].value===r){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function _n(t,n,r){if(n!=null&&(n=""+xt(n),n!==t.value&&(t.value=n),r==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=r!=null?""+xt(r):""}function bn(t,n,r,o){if(n==null){if(o!=null){if(r!=null)throw Error(s(92));if(pe(o)){if(1<o.length)throw Error(s(93));o=o[0]}r=o}r==null&&(r=""),n=r}r=xt(n),t.defaultValue=r,o=t.textContent,o===r&&o!==""&&o!==null&&(t.value=o)}function Di(t,n){if(n){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=n;return}}t.textContent=n}var Wi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hp(t,n,r){var o=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,r):typeof r!="number"||r===0||Wi.has(n)?n==="float"?t.cssFloat=r:t[n]=(""+r).trim():t[n]=r+"px"}function dp(t,n,r){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&r[c]!==o&&hp(t,c,o)}else for(var d in n)n.hasOwnProperty(d)&&hp(t,d,n[d])}function pc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Q_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),J_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vl(t){return J_.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var mc=null;function gc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var kr=null,Xr=null;function pp(t){var n=Vi(t);if(n&&(t=n.stateNode)){var r=t[Tn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Xi(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+jt(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var o=r[n];if(o!==t&&o.form===t.form){var c=o[Tn]||null;if(!c)throw Error(s(90));Xi(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<r.length;n++)o=r[n],o.form===t.form&&Mt(o)}break e;case"textarea":_n(t,r.value,r.defaultValue);break e;case"select":n=r.value,n!=null&&hn(t,!!r.multiple,n,!1)}}}var vc=!1;function mp(t,n,r){if(vc)return t(n,r);vc=!0;try{var o=t(n);return o}finally{if(vc=!1,(kr!==null||Xr!==null)&&(nu(),kr&&(n=kr,t=Xr,Xr=kr=null,pp(n),t)))for(n=0;n<t.length;n++)pp(t[n])}}function Zs(t,n){var r=t.stateNode;if(r===null)return null;var o=r[Tn]||null;if(o===null)return null;r=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(s(231,n,typeof r));return r}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_c=!1;if(ji)try{var Ks={};Object.defineProperty(Ks,"passive",{get:function(){_c=!0}}),window.addEventListener("test",Ks,Ks),window.removeEventListener("test",Ks,Ks)}catch{_c=!1}var ba=null,xc=null,_l=null;function gp(){if(_l)return _l;var t,n=xc,r=n.length,o,c="value"in ba?ba.value:ba.textContent,d=c.length;for(t=0;t<r&&n[t]===c[t];t++);var E=r-t;for(o=1;o<=E&&n[r-o]===c[d-o];o++);return _l=c.slice(t,1<o?1-o:void 0)}function xl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Sl(){return!0}function vp(){return!1}function Xn(t){function n(r,o,c,d,E){this._reactName=r,this._targetInst=c,this.type=o,this.nativeEvent=d,this.target=E,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(r=t[T],this[T]=r?r(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Sl:vp,this.isPropagationStopped=vp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Sl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Sl)},persist:function(){},isPersistent:Sl}),n}var cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=Xn(cr),Qs=g({},cr,{view:0,detail:0}),$_=Xn(Qs),Sc,yc,Js,El=g({},Qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Js&&(Js&&t.type==="mousemove"?(Sc=t.screenX-Js.screenX,yc=t.screenY-Js.screenY):yc=Sc=0,Js=t),Sc)},movementY:function(t){return"movementY"in t?t.movementY:yc}}),_p=Xn(El),ex=g({},El,{dataTransfer:0}),tx=Xn(ex),nx=g({},Qs,{relatedTarget:0}),Ec=Xn(nx),ix=g({},cr,{animationName:0,elapsedTime:0,pseudoElement:0}),ax=Xn(ix),rx=g({},cr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sx=Xn(rx),ox=g({},cr,{data:0}),xp=Xn(ox),lx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ux={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=cx[t])?!!n[t]:!1}function Mc(){return fx}var hx=g({},Qs,{key:function(t){if(t.key){var n=lx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ux[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mc,charCode:function(t){return t.type==="keypress"?xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),dx=Xn(hx),px=g({},El,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sp=Xn(px),mx=g({},Qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mc}),gx=Xn(mx),vx=g({},cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),_x=Xn(vx),xx=g({},El,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Sx=Xn(xx),yx=g({},cr,{newState:0,oldState:0}),Ex=Xn(yx),Mx=[9,13,27,32],Tc=ji&&"CompositionEvent"in window,$s=null;ji&&"documentMode"in document&&($s=document.documentMode);var Tx=ji&&"TextEvent"in window&&!$s,yp=ji&&(!Tc||$s&&8<$s&&11>=$s),Ep=" ",Mp=!1;function Tp(t,n){switch(t){case"keyup":return Mx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wr=!1;function bx(t,n){switch(t){case"compositionend":return bp(n);case"keypress":return n.which!==32?null:(Mp=!0,Ep);case"textInput":return t=n.data,t===Ep&&Mp?null:t;default:return null}}function Ax(t,n){if(Wr)return t==="compositionend"||!Tc&&Tp(t,n)?(t=gp(),_l=xc=ba=null,Wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return yp&&n.locale!=="ko"?null:n.data;default:return null}}var Rx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ap(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Rx[t.type]:n==="textarea"}function Rp(t,n,r,o){kr?Xr?Xr.push(o):Xr=[o]:kr=o,n=lu(n,"onChange"),0<n.length&&(r=new yl("onChange","change",null,r,o),t.push({event:r,listeners:n}))}var eo=null,to=null;function wx(t){ov(t,0)}function Ml(t){var n=ur(t);if(Mt(n))return t}function wp(t,n){if(t==="change")return n}var Cp=!1;if(ji){var bc;if(ji){var Ac="oninput"in document;if(!Ac){var Up=document.createElement("div");Up.setAttribute("oninput","return;"),Ac=typeof Up.oninput=="function"}bc=Ac}else bc=!1;Cp=bc&&(!document.documentMode||9<document.documentMode)}function Dp(){eo&&(eo.detachEvent("onpropertychange",Lp),to=eo=null)}function Lp(t){if(t.propertyName==="value"&&Ml(to)){var n=[];Rp(n,to,t,gc(t)),mp(wx,n)}}function Cx(t,n,r){t==="focusin"?(Dp(),eo=n,to=r,eo.attachEvent("onpropertychange",Lp)):t==="focusout"&&Dp()}function Ux(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ml(to)}function Dx(t,n){if(t==="click")return Ml(n)}function Lx(t,n){if(t==="input"||t==="change")return Ml(n)}function Nx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var $n=typeof Object.is=="function"?Object.is:Nx;function no(t,n){if($n(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var r=Object.keys(t),o=Object.keys(n);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var c=r[o];if(!Gt.call(n,c)||!$n(t[c],n[c]))return!1}return!0}function Np(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Op(t,n){var r=Np(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=n&&o>=n)return{node:r,offset:n-t};t=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Np(r)}}function Pp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Pp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Bp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Cn(t.document);n instanceof t.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)t=n.contentWindow;else break;n=Cn(t.document)}return n}function Rc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Ox=ji&&"documentMode"in document&&11>=document.documentMode,jr=null,wc=null,io=null,Cc=!1;function zp(t,n,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Cc||jr==null||jr!==Cn(o)||(o=jr,"selectionStart"in o&&Rc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),io&&no(io,o)||(io=o,o=lu(wc,"onSelect"),0<o.length&&(n=new yl("onSelect","select",null,n,r),t.push({event:n,listeners:o}),n.target=jr)))}function fr(t,n){var r={};return r[t.toLowerCase()]=n.toLowerCase(),r["Webkit"+t]="webkit"+n,r["Moz"+t]="moz"+n,r}var qr={animationend:fr("Animation","AnimationEnd"),animationiteration:fr("Animation","AnimationIteration"),animationstart:fr("Animation","AnimationStart"),transitionrun:fr("Transition","TransitionRun"),transitionstart:fr("Transition","TransitionStart"),transitioncancel:fr("Transition","TransitionCancel"),transitionend:fr("Transition","TransitionEnd")},Uc={},Ip={};ji&&(Ip=document.createElement("div").style,"AnimationEvent"in window||(delete qr.animationend.animation,delete qr.animationiteration.animation,delete qr.animationstart.animation),"TransitionEvent"in window||delete qr.transitionend.transition);function hr(t){if(Uc[t])return Uc[t];if(!qr[t])return t;var n=qr[t],r;for(r in n)if(n.hasOwnProperty(r)&&r in Ip)return Uc[t]=n[r];return t}var Fp=hr("animationend"),Hp=hr("animationiteration"),Gp=hr("animationstart"),Px=hr("transitionrun"),Bx=hr("transitionstart"),zx=hr("transitioncancel"),Vp=hr("transitionend"),kp=new Map,Dc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Dc.push("scrollEnd");function Si(t,n){kp.set(t,n),ki(n,[t])}var Xp=new WeakMap;function ci(t,n){if(typeof t=="object"&&t!==null){var r=Xp.get(t);return r!==void 0?r:(n={value:t,source:n,stack:Zt(n)},Xp.set(t,n),n)}return{value:t,source:n,stack:Zt(n)}}var fi=[],Yr=0,Lc=0;function Tl(){for(var t=Yr,n=Lc=Yr=0;n<t;){var r=fi[n];fi[n++]=null;var o=fi[n];fi[n++]=null;var c=fi[n];fi[n++]=null;var d=fi[n];if(fi[n++]=null,o!==null&&c!==null){var E=o.pending;E===null?c.next=c:(c.next=E.next,E.next=c),o.pending=c}d!==0&&Wp(r,c,d)}}function bl(t,n,r,o){fi[Yr++]=t,fi[Yr++]=n,fi[Yr++]=r,fi[Yr++]=o,Lc|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Nc(t,n,r,o){return bl(t,n,r,o),Al(t)}function Zr(t,n){return bl(t,null,null,n),Al(t)}function Wp(t,n,r){t.lanes|=r;var o=t.alternate;o!==null&&(o.lanes|=r);for(var c=!1,d=t.return;d!==null;)d.childLanes|=r,o=d.alternate,o!==null&&(o.childLanes|=r),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(c=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,c&&n!==null&&(c=31-Ge(r),t=d.hiddenUpdates,o=t[c],o===null?t[c]=[n]:o.push(n),n.lane=r|536870912),d):null}function Al(t){if(50<Co)throw Co=0,Hf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Kr={};function Ix(t,n,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(t,n,r,o){return new Ix(t,n,r,o)}function Oc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qi(t,n){var r=t.alternate;return r===null?(r=ei(t.tag,n,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=n,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,n=t.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function jp(t,n){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,n=r.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Rl(t,n,r,o,c,d){var E=0;if(o=t,typeof t=="function")Oc(t)&&(E=1);else if(typeof t=="string")E=HS(t,r,J.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case D:return t=ei(31,r,n,c),t.elementType=D,t.lanes=d,t;case M:return dr(r.children,c,d,n);case A:E=8,c|=24;break;case S:return t=ei(12,r,n,c|2),t.elementType=S,t.lanes=d,t;case H:return t=ei(13,r,n,c),t.elementType=H,t.lanes=d,t;case k:return t=ei(19,r,n,c),t.elementType=k,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case v:case C:E=10;break e;case N:E=9;break e;case U:E=11;break e;case I:E=14;break e;case j:E=16,o=null;break e}E=29,r=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=ei(E,r,n,c),n.elementType=t,n.type=o,n.lanes=d,n}function dr(t,n,r,o){return t=ei(7,t,o,n),t.lanes=r,t}function Pc(t,n,r){return t=ei(6,t,null,n),t.lanes=r,t}function Bc(t,n,r){return n=ei(4,t.children!==null?t.children:[],t.key,n),n.lanes=r,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Qr=[],Jr=0,wl=null,Cl=0,hi=[],di=0,pr=null,Yi=1,Zi="";function mr(t,n){Qr[Jr++]=Cl,Qr[Jr++]=wl,wl=t,Cl=n}function qp(t,n,r){hi[di++]=Yi,hi[di++]=Zi,hi[di++]=pr,pr=t;var o=Yi;t=Zi;var c=32-Ge(o)-1;o&=~(1<<c),r+=1;var d=32-Ge(n)+c;if(30<d){var E=c-c%5;d=(o&(1<<E)-1).toString(32),o>>=E,c-=E,Yi=1<<32-Ge(n)+c|r<<c|o,Zi=d+t}else Yi=1<<d|r<<c|o,Zi=t}function zc(t){t.return!==null&&(mr(t,1),qp(t,1,0))}function Ic(t){for(;t===wl;)wl=Qr[--Jr],Qr[Jr]=null,Cl=Qr[--Jr],Qr[Jr]=null;for(;t===pr;)pr=hi[--di],hi[di]=null,Zi=hi[--di],hi[di]=null,Yi=hi[--di],hi[di]=null}var zn=null,en=null,Ct=!1,gr=null,Li=!1,Fc=Error(s(519));function vr(t){var n=Error(s(418,""));throw so(ci(n,t)),Fc}function Yp(t){var n=t.stateNode,r=t.type,o=t.memoizedProps;switch(n[fn]=t,n[Tn]=o,r){case"dialog":gt("cancel",n),gt("close",n);break;case"iframe":case"object":case"embed":gt("load",n);break;case"video":case"audio":for(r=0;r<Do.length;r++)gt(Do[r],n);break;case"source":gt("error",n);break;case"img":case"image":case"link":gt("error",n),gt("load",n);break;case"details":gt("toggle",n);break;case"input":gt("invalid",n),Vt(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),$t(n);break;case"select":gt("invalid",n);break;case"textarea":gt("invalid",n),bn(n,o.value,o.defaultValue,o.children),$t(n)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||o.suppressHydrationWarning===!0||fv(n.textContent,r)?(o.popover!=null&&(gt("beforetoggle",n),gt("toggle",n)),o.onScroll!=null&&gt("scroll",n),o.onScrollEnd!=null&&gt("scrollend",n),o.onClick!=null&&(n.onclick=uu),n=!0):n=!1,n||vr(t)}function Zp(t){for(zn=t.return;zn;)switch(zn.tag){case 5:case 13:Li=!1;return;case 27:case 3:Li=!0;return;default:zn=zn.return}}function ao(t){if(t!==zn)return!1;if(!Ct)return Zp(t),Ct=!0,!1;var n=t.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||nh(t.type,t.memoizedProps)),r=!r),r&&en&&vr(t),Zp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(r=t.data,r==="/$"){if(n===0){en=Ei(t.nextSibling);break e}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++;t=t.nextSibling}en=null}}else n===27?(n=en,Ga(t.type)?(t=sh,sh=null,en=t):en=n):en=zn?Ei(t.stateNode.nextSibling):null;return!0}function ro(){en=zn=null,Ct=!1}function Kp(){var t=gr;return t!==null&&(qn===null?qn=t:qn.push.apply(qn,t),gr=null),t}function so(t){gr===null?gr=[t]:gr.push(t)}var Hc=ee(null),_r=null,Ki=null;function Aa(t,n,r){Ee(Hc,n._currentValue),n._currentValue=r}function Qi(t){t._currentValue=Hc.current,Se(Hc)}function Gc(t,n,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===r)break;t=t.return}}function Vc(t,n,r,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var d=c.dependencies;if(d!==null){var E=c.child;d=d.firstContext;e:for(;d!==null;){var T=d;d=c;for(var P=0;P<n.length;P++)if(T.context===n[P]){d.lanes|=r,T=d.alternate,T!==null&&(T.lanes|=r),Gc(d.return,r,t),o||(E=null);break e}d=T.next}}else if(c.tag===18){if(E=c.return,E===null)throw Error(s(341));E.lanes|=r,d=E.alternate,d!==null&&(d.lanes|=r),Gc(E,r,t),E=null}else E=c.child;if(E!==null)E.return=c;else for(E=c;E!==null;){if(E===t){E=null;break}if(c=E.sibling,c!==null){c.return=E.return,E=c;break}E=E.return}c=E}}function oo(t,n,r,o){t=null;for(var c=n,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var E=c.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var T=c.type;$n(c.pendingProps.value,E.value)||(t!==null?t.push(T):t=[T])}}else if(c===Re.current){if(E=c.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(zo):t=[zo])}c=c.return}t!==null&&Vc(n,t,r,o),n.flags|=262144}function Ul(t){for(t=t.firstContext;t!==null;){if(!$n(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function xr(t){_r=t,Ki=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Dn(t){return Qp(_r,t)}function Dl(t,n){return _r===null&&xr(t),Qp(t,n)}function Qp(t,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},Ki===null){if(t===null)throw Error(s(308));Ki=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ki=Ki.next=n;return r}var Fx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(r,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(r){return r()})}},Hx=a.unstable_scheduleCallback,Gx=a.unstable_NormalPriority,dn={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function kc(){return{controller:new Fx,data:new Map,refCount:0}}function lo(t){t.refCount--,t.refCount===0&&Hx(Gx,function(){t.controller.abort()})}var uo=null,Xc=0,$r=0,es=null;function Vx(t,n){if(uo===null){var r=uo=[];Xc=0,$r=qf(),es={status:"pending",value:void 0,then:function(o){r.push(o)}}}return Xc++,n.then(Jp,Jp),n}function Jp(){if(--Xc===0&&uo!==null){es!==null&&(es.status="fulfilled");var t=uo;uo=null,$r=0,es=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function kx(t,n){var r=[],o={status:"pending",value:null,reason:null,then:function(c){r.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<r.length;c++)(0,r[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<r.length;c++)(0,r[c])(void 0)}),o}var $p=z.S;z.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Vx(t,n),$p!==null&&$p(t,n)};var Sr=ee(null);function Wc(){var t=Sr.current;return t!==null?t:qt.pooledCache}function Ll(t,n){n===null?Ee(Sr,Sr.current):Ee(Sr,n.pool)}function em(){var t=Wc();return t===null?null:{parent:dn._currentValue,pool:t}}var co=Error(s(460)),tm=Error(s(474)),Nl=Error(s(542)),jc={then:function(){}};function nm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ol(){}function im(t,n,r){switch(r=t[r],r===void 0?t.push(n):r!==n&&(n.then(Ol,Ol),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,rm(t),t;default:if(typeof n.status=="string")n.then(Ol,Ol);else{if(t=qt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,rm(t),t}throw fo=n,co}}var fo=null;function am(){if(fo===null)throw Error(s(459));var t=fo;return fo=null,t}function rm(t){if(t===co||t===Nl)throw Error(s(483))}var Ra=!1;function qc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function wa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ca(t,n,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ut&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=Al(t),Wp(t,null,r),n}return bl(t,o,n,r),Al(t)}function ho(t,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,at(t,r)}}function Zc(t,n){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var c=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var E={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};d===null?c=d=E:d=d.next=E,r=r.next}while(r!==null);d===null?c=d=n:d=d.next=n}else c=d=n;r={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=n:t.next=n,r.lastBaseUpdate=n}var Kc=!1;function po(){if(Kc){var t=es;if(t!==null)throw t}}function mo(t,n,r,o){Kc=!1;var c=t.updateQueue;Ra=!1;var d=c.firstBaseUpdate,E=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var P=T,$=P.next;P.next=null,E===null?d=$:E.next=$,E=P;var ce=t.alternate;ce!==null&&(ce=ce.updateQueue,T=ce.lastBaseUpdate,T!==E&&(T===null?ce.firstBaseUpdate=$:T.next=$,ce.lastBaseUpdate=P))}if(d!==null){var _e=c.baseState;E=0,ce=$=P=null,T=d;do{var ne=T.lane&-536870913,ie=ne!==T.lane;if(ie?(Et&ne)===ne:(o&ne)===ne){ne!==0&&ne===$r&&(Kc=!0),ce!==null&&(ce=ce.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var tt=t,Ze=T;ne=n;var It=r;switch(Ze.tag){case 1:if(tt=Ze.payload,typeof tt=="function"){_e=tt.call(It,_e,ne);break e}_e=tt;break e;case 3:tt.flags=tt.flags&-65537|128;case 0:if(tt=Ze.payload,ne=typeof tt=="function"?tt.call(It,_e,ne):tt,ne==null)break e;_e=g({},_e,ne);break e;case 2:Ra=!0}}ne=T.callback,ne!==null&&(t.flags|=64,ie&&(t.flags|=8192),ie=c.callbacks,ie===null?c.callbacks=[ne]:ie.push(ne))}else ie={lane:ne,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ce===null?($=ce=ie,P=_e):ce=ce.next=ie,E|=ne;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;ie=T,T=ie.next,ie.next=null,c.lastBaseUpdate=ie,c.shared.pending=null}}while(!0);ce===null&&(P=_e),c.baseState=P,c.firstBaseUpdate=$,c.lastBaseUpdate=ce,d===null&&(c.shared.lanes=0),za|=E,t.lanes=E,t.memoizedState=_e}}function sm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function om(t,n){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)sm(r[t],n)}var ts=ee(null),Pl=ee(0);function lm(t,n){t=aa,Ee(Pl,t),Ee(ts,n),aa=t|n.baseLanes}function Qc(){Ee(Pl,aa),Ee(ts,ts.current)}function Jc(){aa=Pl.current,Se(ts),Se(Pl)}var Ua=0,ft=null,Bt=null,on=null,Bl=!1,ns=!1,yr=!1,zl=0,go=0,is=null,Xx=0;function nn(){throw Error(s(321))}function $c(t,n){if(n===null)return!1;for(var r=0;r<n.length&&r<t.length;r++)if(!$n(t[r],n[r]))return!1;return!0}function ef(t,n,r,o,c,d){return Ua=d,ft=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?Wm:jm,yr=!1,d=r(o,c),yr=!1,ns&&(d=cm(n,r,o,c)),um(t),d}function um(t){z.H=kl;var n=Bt!==null&&Bt.next!==null;if(Ua=0,on=Bt=ft=null,Bl=!1,go=0,is=null,n)throw Error(s(300));t===null||xn||(t=t.dependencies,t!==null&&Ul(t)&&(xn=!0))}function cm(t,n,r,o){ft=t;var c=0;do{if(ns&&(is=null),go=0,ns=!1,25<=c)throw Error(s(301));if(c+=1,on=Bt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}z.H=Qx,d=n(r,o)}while(ns);return d}function Wx(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?vo(n):n,t=t.useState()[0],(Bt!==null?Bt.memoizedState:null)!==t&&(ft.flags|=1024),n}function tf(){var t=zl!==0;return zl=0,t}function nf(t,n,r){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~r}function af(t){if(Bl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Bl=!1}Ua=0,on=Bt=ft=null,ns=!1,go=zl=0,is=null}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?ft.memoizedState=on=t:on=on.next=t,on}function ln(){if(Bt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=Bt.next;var n=on===null?ft.memoizedState:on.next;if(n!==null)on=n,Bt=t;else{if(t===null)throw ft.alternate===null?Error(s(467)):Error(s(310));Bt=t,t={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},on===null?ft.memoizedState=on=t:on=on.next=t}return on}function rf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vo(t){var n=go;return go+=1,is===null&&(is=[]),t=im(is,t,n),n=ft,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Wm:jm),t}function Il(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return vo(t);if(t.$$typeof===C)return Dn(t)}throw Error(s(438,String(t)))}function sf(t){var n=null,r=ft.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var o=ft.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=rf(),ft.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(t),o=0;o<t;o++)r[o]=w;return n.index++,r}function Ji(t,n){return typeof n=="function"?n(t):n}function Fl(t){var n=ln();return of(n,Bt,t)}function of(t,n,r){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=r;var c=t.baseQueue,d=o.pending;if(d!==null){if(c!==null){var E=c.next;c.next=d.next,d.next=E}n.baseQueue=c=d,o.pending=null}if(d=t.baseState,c===null)t.memoizedState=d;else{n=c.next;var T=E=null,P=null,$=n,ce=!1;do{var _e=$.lane&-536870913;if(_e!==$.lane?(Et&_e)===_e:(Ua&_e)===_e){var ne=$.revertLane;if(ne===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),_e===$r&&(ce=!0);else if((Ua&ne)===ne){$=$.next,ne===$r&&(ce=!0);continue}else _e={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(T=P=_e,E=d):P=P.next=_e,ft.lanes|=ne,za|=ne;_e=$.action,yr&&r(d,_e),d=$.hasEagerState?$.eagerState:r(d,_e)}else ne={lane:_e,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(T=P=ne,E=d):P=P.next=ne,ft.lanes|=_e,za|=_e;$=$.next}while($!==null&&$!==n);if(P===null?E=d:P.next=T,!$n(d,t.memoizedState)&&(xn=!0,ce&&(r=es,r!==null)))throw r;t.memoizedState=d,t.baseState=E,t.baseQueue=P,o.lastRenderedState=d}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function lf(t){var n=ln(),r=n.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=t;var o=r.dispatch,c=r.pending,d=n.memoizedState;if(c!==null){r.pending=null;var E=c=c.next;do d=t(d,E.action),E=E.next;while(E!==c);$n(d,n.memoizedState)||(xn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),r.lastRenderedState=d}return[d,o]}function fm(t,n,r){var o=ft,c=ln(),d=Ct;if(d){if(r===void 0)throw Error(s(407));r=r()}else r=n();var E=!$n((Bt||c).memoizedState,r);E&&(c.memoizedState=r,xn=!0),c=c.queue;var T=pm.bind(null,o,c,t);if(_o(2048,8,T,[t]),c.getSnapshot!==n||E||on!==null&&on.memoizedState.tag&1){if(o.flags|=2048,as(9,Hl(),dm.bind(null,o,c,r,n),null),qt===null)throw Error(s(349));d||(Ua&124)!==0||hm(o,n,r)}return r}function hm(t,n,r){t.flags|=16384,t={getSnapshot:n,value:r},n=ft.updateQueue,n===null?(n=rf(),ft.updateQueue=n,n.stores=[t]):(r=n.stores,r===null?n.stores=[t]:r.push(t))}function dm(t,n,r,o){n.value=r,n.getSnapshot=o,mm(n)&&gm(t)}function pm(t,n,r){return r(function(){mm(n)&&gm(t)})}function mm(t){var n=t.getSnapshot;t=t.value;try{var r=n();return!$n(t,r)}catch{return!0}}function gm(t){var n=Zr(t,2);n!==null&&ri(n,t,2)}function uf(t){var n=Wn();if(typeof t=="function"){var r=t;if(t=r(),yr){we(!0);try{r()}finally{we(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:t},n}function vm(t,n,r,o){return t.baseState=r,of(t,Bt,typeof o=="function"?o:Ji)}function jx(t,n,r,o,c){if(Vl(t))throw Error(s(485));if(t=n.action,t!==null){var d={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){d.listeners.push(E)}};z.T!==null?r(!0):d.isTransition=!1,o(d),r=n.pending,r===null?(d.next=n.pending=d,_m(n,d)):(d.next=r.next,n.pending=r.next=d)}}function _m(t,n){var r=n.action,o=n.payload,c=t.state;if(n.isTransition){var d=z.T,E={};z.T=E;try{var T=r(c,o),P=z.S;P!==null&&P(E,T),xm(t,n,T)}catch($){cf(t,n,$)}finally{z.T=d}}else try{d=r(c,o),xm(t,n,d)}catch($){cf(t,n,$)}}function xm(t,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){Sm(t,n,o)},function(o){return cf(t,n,o)}):Sm(t,n,r)}function Sm(t,n,r){n.status="fulfilled",n.value=r,ym(n),t.state=r,n=t.pending,n!==null&&(r=n.next,r===n?t.pending=null:(r=r.next,n.next=r,_m(t,r)))}function cf(t,n,r){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=r,ym(n),n=n.next;while(n!==o)}t.action=null}function ym(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Em(t,n){return n}function Mm(t,n){if(Ct){var r=qt.formState;if(r!==null){e:{var o=ft;if(Ct){if(en){t:{for(var c=en,d=Li;c.nodeType!==8;){if(!d){c=null;break t}if(c=Ei(c.nextSibling),c===null){c=null;break t}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){en=Ei(c.nextSibling),o=c.data==="F!";break e}}vr(o)}o=!1}o&&(n=r[0])}}return r=Wn(),r.memoizedState=r.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Em,lastRenderedState:n},r.queue=o,r=Vm.bind(null,ft,o),o.dispatch=r,o=uf(!1),d=mf.bind(null,ft,!1,o.queue),o=Wn(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,r=jx.bind(null,ft,c,d,r),c.dispatch=r,o.memoizedState=t,[n,r,!1]}function Tm(t){var n=ln();return bm(n,Bt,t)}function bm(t,n,r){if(n=of(t,n,Em)[0],t=Fl(Ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=vo(n)}catch(E){throw E===co?Nl:E}else o=n;n=ln();var c=n.queue,d=c.dispatch;return r!==n.memoizedState&&(ft.flags|=2048,as(9,Hl(),qx.bind(null,c,r),null)),[o,d,t]}function qx(t,n){t.action=n}function Am(t){var n=ln(),r=Bt;if(r!==null)return bm(n,r,t);ln(),n=n.memoizedState,r=ln();var o=r.queue.dispatch;return r.memoizedState=t,[n,o,!1]}function as(t,n,r,o){return t={tag:t,create:r,deps:o,inst:n,next:null},n=ft.updateQueue,n===null&&(n=rf(),ft.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,n.lastEffect=t),t}function Hl(){return{destroy:void 0,resource:void 0}}function Rm(){return ln().memoizedState}function Gl(t,n,r,o){var c=Wn();o=o===void 0?null:o,ft.flags|=t,c.memoizedState=as(1|n,Hl(),r,o)}function _o(t,n,r,o){var c=ln();o=o===void 0?null:o;var d=c.memoizedState.inst;Bt!==null&&o!==null&&$c(o,Bt.memoizedState.deps)?c.memoizedState=as(n,d,r,o):(ft.flags|=t,c.memoizedState=as(1|n,d,r,o))}function wm(t,n){Gl(8390656,8,t,n)}function Cm(t,n){_o(2048,8,t,n)}function Um(t,n){return _o(4,2,t,n)}function Dm(t,n){return _o(4,4,t,n)}function Lm(t,n){if(typeof n=="function"){t=t();var r=n(t);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Nm(t,n,r){r=r!=null?r.concat([t]):null,_o(4,4,Lm.bind(null,n,t),r)}function ff(){}function Om(t,n){var r=ln();n=n===void 0?null:n;var o=r.memoizedState;return n!==null&&$c(n,o[1])?o[0]:(r.memoizedState=[t,n],t)}function Pm(t,n){var r=ln();n=n===void 0?null:n;var o=r.memoizedState;if(n!==null&&$c(n,o[1]))return o[0];if(o=t(),yr){we(!0);try{t()}finally{we(!1)}}return r.memoizedState=[o,n],o}function hf(t,n,r){return r===void 0||(Ua&1073741824)!==0?t.memoizedState=n:(t.memoizedState=r,t=Ig(),ft.lanes|=t,za|=t,r)}function Bm(t,n,r,o){return $n(r,n)?r:ts.current!==null?(t=hf(t,r,o),$n(t,n)||(xn=!0),t):(Ua&42)===0?(xn=!0,t.memoizedState=r):(t=Ig(),ft.lanes|=t,za|=t,n)}function zm(t,n,r,o,c){var d=K.p;K.p=d!==0&&8>d?d:8;var E=z.T,T={};z.T=T,mf(t,!1,n,r);try{var P=c(),$=z.S;if($!==null&&$(T,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ce=kx(P,o);xo(t,n,ce,ai(t))}else xo(t,n,o,ai(t))}catch(_e){xo(t,n,{then:function(){},status:"rejected",reason:_e},ai())}finally{K.p=d,z.T=E}}function Yx(){}function df(t,n,r,o){if(t.tag!==5)throw Error(s(476));var c=Im(t).queue;zm(t,c,n,Y,r===null?Yx:function(){return Fm(t),r(o)})}function Im(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:Y},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:r},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Fm(t){var n=Im(t).next.queue;xo(t,n,{},ai())}function pf(){return Dn(zo)}function Hm(){return ln().memoizedState}function Gm(){return ln().memoizedState}function Zx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var r=ai();t=wa(r);var o=Ca(n,t,r);o!==null&&(ri(o,n,r),ho(o,n,r)),n={cache:kc()},t.payload=n;return}n=n.return}}function Kx(t,n,r){var o=ai();r={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},Vl(t)?km(n,r):(r=Nc(t,n,r,o),r!==null&&(ri(r,t,o),Xm(r,n,o)))}function Vm(t,n,r){var o=ai();xo(t,n,r,o)}function xo(t,n,r,o){var c={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(Vl(t))km(n,c);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var E=n.lastRenderedState,T=d(E,r);if(c.hasEagerState=!0,c.eagerState=T,$n(T,E))return bl(t,n,c,0),qt===null&&Tl(),!1}catch{}finally{}if(r=Nc(t,n,c,o),r!==null)return ri(r,t,o),Xm(r,n,o),!0}return!1}function mf(t,n,r,o){if(o={lane:2,revertLane:qf(),action:o,hasEagerState:!1,eagerState:null,next:null},Vl(t)){if(n)throw Error(s(479))}else n=Nc(t,r,o,2),n!==null&&ri(n,t,2)}function Vl(t){var n=t.alternate;return t===ft||n!==null&&n===ft}function km(t,n){ns=Bl=!0;var r=t.pending;r===null?n.next=n:(n.next=r.next,r.next=n),t.pending=n}function Xm(t,n,r){if((r&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,at(t,r)}}var kl={readContext:Dn,use:Il,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn},Wm={readContext:Dn,use:Il,useCallback:function(t,n){return Wn().memoizedState=[t,n===void 0?null:n],t},useContext:Dn,useEffect:wm,useImperativeHandle:function(t,n,r){r=r!=null?r.concat([t]):null,Gl(4194308,4,Lm.bind(null,n,t),r)},useLayoutEffect:function(t,n){return Gl(4194308,4,t,n)},useInsertionEffect:function(t,n){Gl(4,2,t,n)},useMemo:function(t,n){var r=Wn();n=n===void 0?null:n;var o=t();if(yr){we(!0);try{t()}finally{we(!1)}}return r.memoizedState=[o,n],o},useReducer:function(t,n,r){var o=Wn();if(r!==void 0){var c=r(n);if(yr){we(!0);try{r(n)}finally{we(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=Kx.bind(null,ft,t),[o.memoizedState,t]},useRef:function(t){var n=Wn();return t={current:t},n.memoizedState=t},useState:function(t){t=uf(t);var n=t.queue,r=Vm.bind(null,ft,n);return n.dispatch=r,[t.memoizedState,r]},useDebugValue:ff,useDeferredValue:function(t,n){var r=Wn();return hf(r,t,n)},useTransition:function(){var t=uf(!1);return t=zm.bind(null,ft,t.queue,!0,!1),Wn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,r){var o=ft,c=Wn();if(Ct){if(r===void 0)throw Error(s(407));r=r()}else{if(r=n(),qt===null)throw Error(s(349));(Et&124)!==0||hm(o,n,r)}c.memoizedState=r;var d={value:r,getSnapshot:n};return c.queue=d,wm(pm.bind(null,o,d,t),[t]),o.flags|=2048,as(9,Hl(),dm.bind(null,o,d,r,n),null),r},useId:function(){var t=Wn(),n=qt.identifierPrefix;if(Ct){var r=Zi,o=Yi;r=(o&~(1<<32-Ge(o)-1)).toString(32)+r,n="«"+n+"R"+r,r=zl++,0<r&&(n+="H"+r.toString(32)),n+="»"}else r=Xx++,n="«"+n+"r"+r.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:pf,useFormState:Mm,useActionState:Mm,useOptimistic:function(t){var n=Wn();n.memoizedState=n.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=mf.bind(null,ft,!0,r),r.dispatch=n,[t,n]},useMemoCache:sf,useCacheRefresh:function(){return Wn().memoizedState=Zx.bind(null,ft)}},jm={readContext:Dn,use:Il,useCallback:Om,useContext:Dn,useEffect:Cm,useImperativeHandle:Nm,useInsertionEffect:Um,useLayoutEffect:Dm,useMemo:Pm,useReducer:Fl,useRef:Rm,useState:function(){return Fl(Ji)},useDebugValue:ff,useDeferredValue:function(t,n){var r=ln();return Bm(r,Bt.memoizedState,t,n)},useTransition:function(){var t=Fl(Ji)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:vo(t),n]},useSyncExternalStore:fm,useId:Hm,useHostTransitionStatus:pf,useFormState:Tm,useActionState:Tm,useOptimistic:function(t,n){var r=ln();return vm(r,Bt,t,n)},useMemoCache:sf,useCacheRefresh:Gm},Qx={readContext:Dn,use:Il,useCallback:Om,useContext:Dn,useEffect:Cm,useImperativeHandle:Nm,useInsertionEffect:Um,useLayoutEffect:Dm,useMemo:Pm,useReducer:lf,useRef:Rm,useState:function(){return lf(Ji)},useDebugValue:ff,useDeferredValue:function(t,n){var r=ln();return Bt===null?hf(r,t,n):Bm(r,Bt.memoizedState,t,n)},useTransition:function(){var t=lf(Ji)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:vo(t),n]},useSyncExternalStore:fm,useId:Hm,useHostTransitionStatus:pf,useFormState:Am,useActionState:Am,useOptimistic:function(t,n){var r=ln();return Bt!==null?vm(r,Bt,t,n):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:sf,useCacheRefresh:Gm},rs=null,So=0;function Xl(t){var n=So;return So+=1,rs===null&&(rs=[]),im(rs,t,n)}function yo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Wl(t,n){throw n.$$typeof===_?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function qm(t){var n=t._init;return n(t._payload)}function Ym(t){function n(W,G){if(t){var Q=W.deletions;Q===null?(W.deletions=[G],W.flags|=16):Q.push(G)}}function r(W,G){if(!t)return null;for(;G!==null;)n(W,G),G=G.sibling;return null}function o(W){for(var G=new Map;W!==null;)W.key!==null?G.set(W.key,W):G.set(W.index,W),W=W.sibling;return G}function c(W,G){return W=qi(W,G),W.index=0,W.sibling=null,W}function d(W,G,Q){return W.index=Q,t?(Q=W.alternate,Q!==null?(Q=Q.index,Q<G?(W.flags|=67108866,G):Q):(W.flags|=67108866,G)):(W.flags|=1048576,G)}function E(W){return t&&W.alternate===null&&(W.flags|=67108866),W}function T(W,G,Q,de){return G===null||G.tag!==6?(G=Pc(Q,W.mode,de),G.return=W,G):(G=c(G,Q),G.return=W,G)}function P(W,G,Q,de){var He=Q.type;return He===M?ce(W,G,Q.props.children,de,Q.key):G!==null&&(G.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===j&&qm(He)===G.type)?(G=c(G,Q.props),yo(G,Q),G.return=W,G):(G=Rl(Q.type,Q.key,Q.props,null,W.mode,de),yo(G,Q),G.return=W,G)}function $(W,G,Q,de){return G===null||G.tag!==4||G.stateNode.containerInfo!==Q.containerInfo||G.stateNode.implementation!==Q.implementation?(G=Bc(Q,W.mode,de),G.return=W,G):(G=c(G,Q.children||[]),G.return=W,G)}function ce(W,G,Q,de,He){return G===null||G.tag!==7?(G=dr(Q,W.mode,de,He),G.return=W,G):(G=c(G,Q),G.return=W,G)}function _e(W,G,Q){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=Pc(""+G,W.mode,Q),G.return=W,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case x:return Q=Rl(G.type,G.key,G.props,null,W.mode,Q),yo(Q,G),Q.return=W,Q;case y:return G=Bc(G,W.mode,Q),G.return=W,G;case j:var de=G._init;return G=de(G._payload),_e(W,G,Q)}if(pe(G)||ue(G))return G=dr(G,W.mode,Q,null),G.return=W,G;if(typeof G.then=="function")return _e(W,Xl(G),Q);if(G.$$typeof===C)return _e(W,Dl(W,G),Q);Wl(W,G)}return null}function ne(W,G,Q,de){var He=G!==null?G.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return He!==null?null:T(W,G,""+Q,de);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:return Q.key===He?P(W,G,Q,de):null;case y:return Q.key===He?$(W,G,Q,de):null;case j:return He=Q._init,Q=He(Q._payload),ne(W,G,Q,de)}if(pe(Q)||ue(Q))return He!==null?null:ce(W,G,Q,de,null);if(typeof Q.then=="function")return ne(W,G,Xl(Q),de);if(Q.$$typeof===C)return ne(W,G,Dl(W,Q),de);Wl(W,Q)}return null}function ie(W,G,Q,de,He){if(typeof de=="string"&&de!==""||typeof de=="number"||typeof de=="bigint")return W=W.get(Q)||null,T(G,W,""+de,He);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case x:return W=W.get(de.key===null?Q:de.key)||null,P(G,W,de,He);case y:return W=W.get(de.key===null?Q:de.key)||null,$(G,W,de,He);case j:var dt=de._init;return de=dt(de._payload),ie(W,G,Q,de,He)}if(pe(de)||ue(de))return W=W.get(Q)||null,ce(G,W,de,He,null);if(typeof de.then=="function")return ie(W,G,Q,Xl(de),He);if(de.$$typeof===C)return ie(W,G,Q,Dl(G,de),He);Wl(G,de)}return null}function tt(W,G,Q,de){for(var He=null,dt=null,ke=G,Je=G=0,yn=null;ke!==null&&Je<Q.length;Je++){ke.index>Je?(yn=ke,ke=null):yn=ke.sibling;var At=ne(W,ke,Q[Je],de);if(At===null){ke===null&&(ke=yn);break}t&&ke&&At.alternate===null&&n(W,ke),G=d(At,G,Je),dt===null?He=At:dt.sibling=At,dt=At,ke=yn}if(Je===Q.length)return r(W,ke),Ct&&mr(W,Je),He;if(ke===null){for(;Je<Q.length;Je++)ke=_e(W,Q[Je],de),ke!==null&&(G=d(ke,G,Je),dt===null?He=ke:dt.sibling=ke,dt=ke);return Ct&&mr(W,Je),He}for(ke=o(ke);Je<Q.length;Je++)yn=ie(ke,W,Je,Q[Je],de),yn!==null&&(t&&yn.alternate!==null&&ke.delete(yn.key===null?Je:yn.key),G=d(yn,G,Je),dt===null?He=yn:dt.sibling=yn,dt=yn);return t&&ke.forEach(function(ja){return n(W,ja)}),Ct&&mr(W,Je),He}function Ze(W,G,Q,de){if(Q==null)throw Error(s(151));for(var He=null,dt=null,ke=G,Je=G=0,yn=null,At=Q.next();ke!==null&&!At.done;Je++,At=Q.next()){ke.index>Je?(yn=ke,ke=null):yn=ke.sibling;var ja=ne(W,ke,At.value,de);if(ja===null){ke===null&&(ke=yn);break}t&&ke&&ja.alternate===null&&n(W,ke),G=d(ja,G,Je),dt===null?He=ja:dt.sibling=ja,dt=ja,ke=yn}if(At.done)return r(W,ke),Ct&&mr(W,Je),He;if(ke===null){for(;!At.done;Je++,At=Q.next())At=_e(W,At.value,de),At!==null&&(G=d(At,G,Je),dt===null?He=At:dt.sibling=At,dt=At);return Ct&&mr(W,Je),He}for(ke=o(ke);!At.done;Je++,At=Q.next())At=ie(ke,W,Je,At.value,de),At!==null&&(t&&At.alternate!==null&&ke.delete(At.key===null?Je:At.key),G=d(At,G,Je),dt===null?He=At:dt.sibling=At,dt=At);return t&&ke.forEach(function(JS){return n(W,JS)}),Ct&&mr(W,Je),He}function It(W,G,Q,de){if(typeof Q=="object"&&Q!==null&&Q.type===M&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:e:{for(var He=Q.key;G!==null;){if(G.key===He){if(He=Q.type,He===M){if(G.tag===7){r(W,G.sibling),de=c(G,Q.props.children),de.return=W,W=de;break e}}else if(G.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===j&&qm(He)===G.type){r(W,G.sibling),de=c(G,Q.props),yo(de,Q),de.return=W,W=de;break e}r(W,G);break}else n(W,G);G=G.sibling}Q.type===M?(de=dr(Q.props.children,W.mode,de,Q.key),de.return=W,W=de):(de=Rl(Q.type,Q.key,Q.props,null,W.mode,de),yo(de,Q),de.return=W,W=de)}return E(W);case y:e:{for(He=Q.key;G!==null;){if(G.key===He)if(G.tag===4&&G.stateNode.containerInfo===Q.containerInfo&&G.stateNode.implementation===Q.implementation){r(W,G.sibling),de=c(G,Q.children||[]),de.return=W,W=de;break e}else{r(W,G);break}else n(W,G);G=G.sibling}de=Bc(Q,W.mode,de),de.return=W,W=de}return E(W);case j:return He=Q._init,Q=He(Q._payload),It(W,G,Q,de)}if(pe(Q))return tt(W,G,Q,de);if(ue(Q)){if(He=ue(Q),typeof He!="function")throw Error(s(150));return Q=He.call(Q),Ze(W,G,Q,de)}if(typeof Q.then=="function")return It(W,G,Xl(Q),de);if(Q.$$typeof===C)return It(W,G,Dl(W,Q),de);Wl(W,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,G!==null&&G.tag===6?(r(W,G.sibling),de=c(G,Q),de.return=W,W=de):(r(W,G),de=Pc(Q,W.mode,de),de.return=W,W=de),E(W)):r(W,G)}return function(W,G,Q,de){try{So=0;var He=It(W,G,Q,de);return rs=null,He}catch(ke){if(ke===co||ke===Nl)throw ke;var dt=ei(29,ke,null,W.mode);return dt.lanes=de,dt.return=W,dt}finally{}}}var ss=Ym(!0),Zm=Ym(!1),pi=ee(null),Ni=null;function Da(t){var n=t.alternate;Ee(pn,pn.current&1),Ee(pi,t),Ni===null&&(n===null||ts.current!==null||n.memoizedState!==null)&&(Ni=t)}function Km(t){if(t.tag===22){if(Ee(pn,pn.current),Ee(pi,t),Ni===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Ni=t)}}else La()}function La(){Ee(pn,pn.current),Ee(pi,pi.current)}function $i(t){Se(pi),Ni===t&&(Ni=null),Se(pn)}var pn=ee(0);function jl(t){for(var n=t;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||rh(r)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function gf(t,n,r,o){n=t.memoizedState,r=r(o,n),r=r==null?n:g({},n,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var vf={enqueueSetState:function(t,n,r){t=t._reactInternals;var o=ai(),c=wa(o);c.payload=n,r!=null&&(c.callback=r),n=Ca(t,c,o),n!==null&&(ri(n,t,o),ho(n,t,o))},enqueueReplaceState:function(t,n,r){t=t._reactInternals;var o=ai(),c=wa(o);c.tag=1,c.payload=n,r!=null&&(c.callback=r),n=Ca(t,c,o),n!==null&&(ri(n,t,o),ho(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var r=ai(),o=wa(r);o.tag=2,n!=null&&(o.callback=n),n=Ca(t,o,r),n!==null&&(ri(n,t,r),ho(n,t,r))}};function Qm(t,n,r,o,c,d,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,E):n.prototype&&n.prototype.isPureReactComponent?!no(r,o)||!no(c,d):!0}function Jm(t,n,r,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,o),n.state!==t&&vf.enqueueReplaceState(n,n.state,null)}function Er(t,n){var r=n;if("ref"in n){r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}if(t=t.defaultProps){r===n&&(r=g({},r));for(var c in t)r[c]===void 0&&(r[c]=t[c])}return r}var ql=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function $m(t){ql(t)}function eg(t){console.error(t)}function tg(t){ql(t)}function Yl(t,n){try{var r=t.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function ng(t,n,r){try{var o=t.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function _f(t,n,r){return r=wa(r),r.tag=3,r.payload={element:null},r.callback=function(){Yl(t,n)},r}function ig(t){return t=wa(t),t.tag=3,t}function ag(t,n,r,o){var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var d=o.value;t.payload=function(){return c(d)},t.callback=function(){ng(n,r,o)}}var E=r.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){ng(n,r,o),typeof c!="function"&&(Ia===null?Ia=new Set([this]):Ia.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function Jx(t,n,r,o,c){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=r.alternate,n!==null&&oo(n,r,c,!0),r=pi.current,r!==null){switch(r.tag){case 13:return Ni===null?Vf():r.alternate===null&&tn===0&&(tn=3),r.flags&=-257,r.flags|=65536,r.lanes=c,o===jc?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([o]):n.add(o),Xf(t,o,c)),!1;case 22:return r.flags|=65536,o===jc?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([o]):r.add(o)),Xf(t,o,c)),!1}throw Error(s(435,r.tag))}return Xf(t,o,c),Vf(),!1}if(Ct)return n=pi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Fc&&(t=Error(s(422),{cause:o}),so(ci(t,r)))):(o!==Fc&&(n=Error(s(423),{cause:o}),so(ci(n,r))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=ci(o,r),c=_f(t.stateNode,o,c),Zc(t,c),tn!==4&&(tn=2)),!1;var d=Error(s(520),{cause:o});if(d=ci(d,r),wo===null?wo=[d]:wo.push(d),tn!==4&&(tn=2),n===null)return!0;o=ci(o,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,t=c&-c,r.lanes|=t,t=_f(r.stateNode,o,t),Zc(r,t),!1;case 1:if(n=r.type,d=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ia===null||!Ia.has(d))))return r.flags|=65536,c&=-c,r.lanes|=c,c=ig(c),ag(c,t,r,o),Zc(r,c),!1}r=r.return}while(r!==null);return!1}var rg=Error(s(461)),xn=!1;function An(t,n,r,o){n.child=t===null?Zm(n,null,r,o):ss(n,t.child,r,o)}function sg(t,n,r,o,c){r=r.render;var d=n.ref;if("ref"in o){var E={};for(var T in o)T!=="ref"&&(E[T]=o[T])}else E=o;return xr(n),o=ef(t,n,r,E,d,c),T=tf(),t!==null&&!xn?(nf(t,n,c),ea(t,n,c)):(Ct&&T&&zc(n),n.flags|=1,An(t,n,o,c),n.child)}function og(t,n,r,o,c){if(t===null){var d=r.type;return typeof d=="function"&&!Oc(d)&&d.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=d,lg(t,n,d,o,c)):(t=Rl(r.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Af(t,c)){var E=d.memoizedProps;if(r=r.compare,r=r!==null?r:no,r(E,o)&&t.ref===n.ref)return ea(t,n,c)}return n.flags|=1,t=qi(d,o),t.ref=n.ref,t.return=n,n.child=t}function lg(t,n,r,o,c){if(t!==null){var d=t.memoizedProps;if(no(d,o)&&t.ref===n.ref)if(xn=!1,n.pendingProps=o=d,Af(t,c))(t.flags&131072)!==0&&(xn=!0);else return n.lanes=t.lanes,ea(t,n,c)}return xf(t,n,r,o,c)}function ug(t,n,r){var o=n.pendingProps,c=o.children,d=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=d!==null?d.baseLanes|r:r,t!==null){for(c=n.child=t.child,d=0;c!==null;)d=d|c.lanes|c.childLanes,c=c.sibling;n.childLanes=d&~o}else n.childLanes=0,n.child=null;return cg(t,n,o,r)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ll(n,d!==null?d.cachePool:null),d!==null?lm(n,d):Qc(),Km(n);else return n.lanes=n.childLanes=536870912,cg(t,n,d!==null?d.baseLanes|r:r,r)}else d!==null?(Ll(n,d.cachePool),lm(n,d),La(),n.memoizedState=null):(t!==null&&Ll(n,null),Qc(),La());return An(t,n,c,r),n.child}function cg(t,n,r,o){var c=Wc();return c=c===null?null:{parent:dn._currentValue,pool:c},n.memoizedState={baseLanes:r,cachePool:c},t!==null&&Ll(n,null),Qc(),Km(n),t!==null&&oo(t,n,o,!0),null}function Zl(t,n){var r=n.ref;if(r===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(s(284));(t===null||t.ref!==r)&&(n.flags|=4194816)}}function xf(t,n,r,o,c){return xr(n),r=ef(t,n,r,o,void 0,c),o=tf(),t!==null&&!xn?(nf(t,n,c),ea(t,n,c)):(Ct&&o&&zc(n),n.flags|=1,An(t,n,r,c),n.child)}function fg(t,n,r,o,c,d){return xr(n),n.updateQueue=null,r=cm(n,o,r,c),um(t),o=tf(),t!==null&&!xn?(nf(t,n,d),ea(t,n,d)):(Ct&&o&&zc(n),n.flags|=1,An(t,n,r,d),n.child)}function hg(t,n,r,o,c){if(xr(n),n.stateNode===null){var d=Kr,E=r.contextType;typeof E=="object"&&E!==null&&(d=Dn(E)),d=new r(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=vf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},qc(n),E=r.contextType,d.context=typeof E=="object"&&E!==null?Dn(E):Kr,d.state=n.memoizedState,E=r.getDerivedStateFromProps,typeof E=="function"&&(gf(n,r,E,o),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(E=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),E!==d.state&&vf.enqueueReplaceState(d,d.state,null),mo(n,o,d,c),po(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var T=n.memoizedProps,P=Er(r,T);d.props=P;var $=d.context,ce=r.contextType;E=Kr,typeof ce=="object"&&ce!==null&&(E=Dn(ce));var _e=r.getDerivedStateFromProps;ce=typeof _e=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ce||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||$!==E)&&Jm(n,d,o,E),Ra=!1;var ne=n.memoizedState;d.state=ne,mo(n,o,d,c),po(),$=n.memoizedState,T||ne!==$||Ra?(typeof _e=="function"&&(gf(n,r,_e,o),$=n.memoizedState),(P=Ra||Qm(n,r,P,o,ne,$,E))?(ce||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),d.props=o,d.state=$,d.context=E,o=P):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Yc(t,n),E=n.memoizedProps,ce=Er(r,E),d.props=ce,_e=n.pendingProps,ne=d.context,$=r.contextType,P=Kr,typeof $=="object"&&$!==null&&(P=Dn($)),T=r.getDerivedStateFromProps,($=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E!==_e||ne!==P)&&Jm(n,d,o,P),Ra=!1,ne=n.memoizedState,d.state=ne,mo(n,o,d,c),po();var ie=n.memoizedState;E!==_e||ne!==ie||Ra||t!==null&&t.dependencies!==null&&Ul(t.dependencies)?(typeof T=="function"&&(gf(n,r,T,o),ie=n.memoizedState),(ce=Ra||Qm(n,r,ce,o,ne,ie,P)||t!==null&&t.dependencies!==null&&Ul(t.dependencies))?($||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ie,P),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ie,P)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||E===t.memoizedProps&&ne===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&ne===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ie),d.props=o,d.state=ie,d.context=P,o=ce):(typeof d.componentDidUpdate!="function"||E===t.memoizedProps&&ne===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&ne===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Zl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=ss(n,t.child,null,c),n.child=ss(n,null,r,c)):An(t,n,r,c),n.memoizedState=d.state,t=n.child):t=ea(t,n,c),t}function dg(t,n,r,o){return ro(),n.flags|=256,An(t,n,r,o),n.child}var Sf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yf(t){return{baseLanes:t,cachePool:em()}}function Ef(t,n,r){return t=t!==null?t.childLanes&~r:0,n&&(t|=mi),t}function pg(t,n,r){var o=n.pendingProps,c=!1,d=(n.flags&128)!==0,E;if((E=d)||(E=t!==null&&t.memoizedState===null?!1:(pn.current&2)!==0),E&&(c=!0,n.flags&=-129),E=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ct){if(c?Da(n):La(),Ct){var T=en,P;if(P=T){e:{for(P=T,T=Li;P.nodeType!==8;){if(!T){T=null;break e}if(P=Ei(P.nextSibling),P===null){T=null;break e}}T=P}T!==null?(n.memoizedState={dehydrated:T,treeContext:pr!==null?{id:Yi,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},P=ei(18,null,null,0),P.stateNode=T,P.return=n,n.child=P,zn=n,en=null,P=!0):P=!1}P||vr(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return rh(T)?n.lanes=32:n.lanes=536870912,null;$i(n)}return T=o.children,o=o.fallback,c?(La(),c=n.mode,T=Kl({mode:"hidden",children:T},c),o=dr(o,c,r,null),T.return=n,o.return=n,T.sibling=o,n.child=T,c=n.child,c.memoizedState=yf(r),c.childLanes=Ef(t,E,r),n.memoizedState=Sf,o):(Da(n),Mf(n,T))}if(P=t.memoizedState,P!==null&&(T=P.dehydrated,T!==null)){if(d)n.flags&256?(Da(n),n.flags&=-257,n=Tf(t,n,r)):n.memoizedState!==null?(La(),n.child=t.child,n.flags|=128,n=null):(La(),c=o.fallback,T=n.mode,o=Kl({mode:"visible",children:o.children},T),c=dr(c,T,r,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,ss(n,t.child,null,r),o=n.child,o.memoizedState=yf(r),o.childLanes=Ef(t,E,r),n.memoizedState=Sf,n=c);else if(Da(n),rh(T)){if(E=T.nextSibling&&T.nextSibling.dataset,E)var $=E.dgst;E=$,o=Error(s(419)),o.stack="",o.digest=E,so({value:o,source:null,stack:null}),n=Tf(t,n,r)}else if(xn||oo(t,n,r,!1),E=(r&t.childLanes)!==0,xn||E){if(E=qt,E!==null&&(o=r&-r,o=(o&42)!==0?1:Wt(o),o=(o&(E.suspendedLanes|r))!==0?0:o,o!==0&&o!==P.retryLane))throw P.retryLane=o,Zr(t,o),ri(E,t,o),rg;T.data==="$?"||Vf(),n=Tf(t,n,r)}else T.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=P.treeContext,en=Ei(T.nextSibling),zn=n,Ct=!0,gr=null,Li=!1,t!==null&&(hi[di++]=Yi,hi[di++]=Zi,hi[di++]=pr,Yi=t.id,Zi=t.overflow,pr=n),n=Mf(n,o.children),n.flags|=4096);return n}return c?(La(),c=o.fallback,T=n.mode,P=t.child,$=P.sibling,o=qi(P,{mode:"hidden",children:o.children}),o.subtreeFlags=P.subtreeFlags&65011712,$!==null?c=qi($,c):(c=dr(c,T,r,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,T=t.child.memoizedState,T===null?T=yf(r):(P=T.cachePool,P!==null?($=dn._currentValue,P=P.parent!==$?{parent:$,pool:$}:P):P=em(),T={baseLanes:T.baseLanes|r,cachePool:P}),c.memoizedState=T,c.childLanes=Ef(t,E,r),n.memoizedState=Sf,o):(Da(n),r=t.child,t=r.sibling,r=qi(r,{mode:"visible",children:o.children}),r.return=n,r.sibling=null,t!==null&&(E=n.deletions,E===null?(n.deletions=[t],n.flags|=16):E.push(t)),n.child=r,n.memoizedState=null,r)}function Mf(t,n){return n=Kl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Kl(t,n){return t=ei(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Tf(t,n,r){return ss(n,t.child,null,r),t=Mf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function mg(t,n,r){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Gc(t.return,n,r)}function bf(t,n,r,o,c){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:c}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=r,d.tailMode=c)}function gg(t,n,r){var o=n.pendingProps,c=o.revealOrder,d=o.tail;if(An(t,n,o.children,r),o=pn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&mg(t,r,n);else if(t.tag===19)mg(t,r,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(Ee(pn,o),c){case"forwards":for(r=n.child,c=null;r!==null;)t=r.alternate,t!==null&&jl(t)===null&&(c=r),r=r.sibling;r=c,r===null?(c=n.child,n.child=null):(c=r.sibling,r.sibling=null),bf(n,!1,c,r,d);break;case"backwards":for(r=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&jl(t)===null){n.child=c;break}t=c.sibling,c.sibling=r,r=c,c=t}bf(n,!0,r,null,d);break;case"together":bf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ea(t,n,r){if(t!==null&&(n.dependencies=t.dependencies),za|=n.lanes,(r&n.childLanes)===0)if(t!==null){if(oo(t,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,r=qi(t,t.pendingProps),n.child=r,r.return=n;t.sibling!==null;)t=t.sibling,r=r.sibling=qi(t,t.pendingProps),r.return=n;r.sibling=null}return n.child}function Af(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Ul(t)))}function $x(t,n,r){switch(n.tag){case 3:Le(n,n.stateNode.containerInfo),Aa(n,dn,t.memoizedState.cache),ro();break;case 27:case 5:Ke(n);break;case 4:Le(n,n.stateNode.containerInfo);break;case 10:Aa(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Da(n),n.flags|=128,null):(r&n.child.childLanes)!==0?pg(t,n,r):(Da(n),t=ea(t,n,r),t!==null?t.sibling:null);Da(n);break;case 19:var c=(t.flags&128)!==0;if(o=(r&n.childLanes)!==0,o||(oo(t,n,r,!1),o=(r&n.childLanes)!==0),c){if(o)return gg(t,n,r);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Ee(pn,pn.current),o)break;return null;case 22:case 23:return n.lanes=0,ug(t,n,r);case 24:Aa(n,dn,t.memoizedState.cache)}return ea(t,n,r)}function vg(t,n,r){if(t!==null)if(t.memoizedProps!==n.pendingProps)xn=!0;else{if(!Af(t,r)&&(n.flags&128)===0)return xn=!1,$x(t,n,r);xn=(t.flags&131072)!==0}else xn=!1,Ct&&(n.flags&1048576)!==0&&qp(n,Cl,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")Oc(o)?(t=Er(o,t),n.tag=1,n=hg(null,n,o,t,r)):(n.tag=0,n=xf(null,n,o,t,r));else{if(o!=null){if(c=o.$$typeof,c===U){n.tag=11,n=sg(null,n,o,t,r);break e}else if(c===I){n.tag=14,n=og(null,n,o,t,r);break e}}throw n=xe(o)||o,Error(s(306,n,""))}}return n;case 0:return xf(t,n,n.type,n.pendingProps,r);case 1:return o=n.type,c=Er(o,n.pendingProps),hg(t,n,o,c,r);case 3:e:{if(Le(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;c=d.element,Yc(t,n),mo(n,o,null,r);var E=n.memoizedState;if(o=E.cache,Aa(n,dn,o),o!==d.cache&&Vc(n,[dn],r,!0),po(),o=E.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:E.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=dg(t,n,o,r);break e}else if(o!==c){c=ci(Error(s(424)),n),so(c),n=dg(t,n,o,r);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(en=Ei(t.firstChild),zn=n,Ct=!0,gr=null,Li=!0,r=Zm(n,null,o,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(ro(),o===c){n=ea(t,n,r);break e}An(t,n,o,r)}n=n.child}return n;case 26:return Zl(t,n),t===null?(r=yv(n.type,null,n.pendingProps,null))?n.memoizedState=r:Ct||(r=n.type,t=n.pendingProps,o=cu(ye.current).createElement(r),o[fn]=n,o[Tn]=t,wn(o,r,t),sn(o),n.stateNode=o):n.memoizedState=yv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ke(n),t===null&&Ct&&(o=n.stateNode=_v(n.type,n.pendingProps,ye.current),zn=n,Li=!0,c=en,Ga(n.type)?(sh=c,en=Ei(o.firstChild)):en=c),An(t,n,n.pendingProps.children,r),Zl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ct&&((c=o=en)&&(o=RS(o,n.type,n.pendingProps,Li),o!==null?(n.stateNode=o,zn=n,en=Ei(o.firstChild),Li=!1,c=!0):c=!1),c||vr(n)),Ke(n),c=n.type,d=n.pendingProps,E=t!==null?t.memoizedProps:null,o=d.children,nh(c,d)?o=null:E!==null&&nh(c,E)&&(n.flags|=32),n.memoizedState!==null&&(c=ef(t,n,Wx,null,null,r),zo._currentValue=c),Zl(t,n),An(t,n,o,r),n.child;case 6:return t===null&&Ct&&((t=r=en)&&(r=wS(r,n.pendingProps,Li),r!==null?(n.stateNode=r,zn=n,en=null,t=!0):t=!1),t||vr(n)),null;case 13:return pg(t,n,r);case 4:return Le(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=ss(n,null,o,r):An(t,n,o,r),n.child;case 11:return sg(t,n,n.type,n.pendingProps,r);case 7:return An(t,n,n.pendingProps,r),n.child;case 8:return An(t,n,n.pendingProps.children,r),n.child;case 12:return An(t,n,n.pendingProps.children,r),n.child;case 10:return o=n.pendingProps,Aa(n,n.type,o.value),An(t,n,o.children,r),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,xr(n),c=Dn(c),o=o(c),n.flags|=1,An(t,n,o,r),n.child;case 14:return og(t,n,n.type,n.pendingProps,r);case 15:return lg(t,n,n.type,n.pendingProps,r);case 19:return gg(t,n,r);case 31:return o=n.pendingProps,r=n.mode,o={mode:o.mode,children:o.children},t===null?(r=Kl(o,r),r.ref=n.ref,n.child=r,r.return=n,n=r):(r=qi(t.child,o),r.ref=n.ref,n.child=r,r.return=n,n=r),n;case 22:return ug(t,n,r);case 24:return xr(n),o=Dn(dn),t===null?(c=Wc(),c===null&&(c=qt,d=kc(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=r),c=d),n.memoizedState={parent:o,cache:c},qc(n),Aa(n,dn,c)):((t.lanes&r)!==0&&(Yc(t,n),mo(n,null,null,r),po()),c=t.memoizedState,d=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Aa(n,dn,o)):(o=d.cache,Aa(n,dn,o),o!==c.cache&&Vc(n,[dn],r,!0))),An(t,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ta(t){t.flags|=4}function _g(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Av(n)){if(n=pi.current,n!==null&&((Et&4194048)===Et?Ni!==null:(Et&62914560)!==Et&&(Et&536870912)===0||n!==Ni))throw fo=jc,tm;t.flags|=8192}}function Ql(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ne():536870912,t.lanes|=n,cs|=n)}function Eo(t,n){if(!Ct)switch(t.tailMode){case"hidden":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Kt(t){var n=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(n)for(var c=t.child;c!==null;)r|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)r|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=r,n}function eS(t,n,r){var o=n.pendingProps;switch(Ic(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(n),null;case 1:return Kt(n),null;case 3:return r=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Qi(dn),lt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ao(n)?ta(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Kp())),Kt(n),null;case 26:return r=n.memoizedState,t===null?(ta(n),r!==null?(Kt(n),_g(n,r)):(Kt(n),n.flags&=-16777217)):r?r!==t.memoizedState?(ta(n),Kt(n),_g(n,r)):(Kt(n),n.flags&=-16777217):(t.memoizedProps!==o&&ta(n),Kt(n),n.flags&=-16777217),null;case 27:Xt(n),r=ye.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ta(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Kt(n),null}t=J.current,ao(n)?Yp(n):(t=_v(c,o,r),n.stateNode=t,ta(n))}return Kt(n),null;case 5:if(Xt(n),r=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ta(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Kt(n),null}if(t=J.current,ao(n))Yp(n);else{switch(c=cu(ye.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?c.createElement(r,{is:o.is}):c.createElement(r)}}t[fn]=n,t[Tn]=o;e:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break e;for(;c.sibling===null;){if(c.return===null||c.return===n)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;e:switch(wn(t,r,o),r){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&ta(n)}}return Kt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ta(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=ye.current,ao(n)){if(t=n.stateNode,r=n.memoizedProps,o=null,c=zn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[fn]=n,t=!!(t.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||fv(t.nodeValue,r)),t||vr(n)}else t=cu(t).createTextNode(o),t[fn]=n,n.stateNode=t}return Kt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=ao(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[fn]=n}else ro(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),c=!1}else c=Kp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?($i(n),n):($i(n),null)}if($i(n),(n.flags&128)!==0)return n.lanes=r,n;if(r=o!==null,t=t!==null&&t.memoizedState!==null,r){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==c&&(o.flags|=2048)}return r!==t&&r&&(n.child.flags|=8192),Ql(n,n.updateQueue),Kt(n),null;case 4:return lt(),t===null&&Qf(n.stateNode.containerInfo),Kt(n),null;case 10:return Qi(n.type),Kt(n),null;case 19:if(Se(pn),c=n.memoizedState,c===null)return Kt(n),null;if(o=(n.flags&128)!==0,d=c.rendering,d===null)if(o)Eo(c,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=jl(t),d!==null){for(n.flags|=128,Eo(c,!1),t=d.updateQueue,n.updateQueue=t,Ql(n,t),n.subtreeFlags=0,t=r,r=n.child;r!==null;)jp(r,t),r=r.sibling;return Ee(pn,pn.current&1|2),n.child}t=t.sibling}c.tail!==null&&it()>eu&&(n.flags|=128,o=!0,Eo(c,!1),n.lanes=4194304)}else{if(!o)if(t=jl(d),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,Ql(n,t),Eo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!d.alternate&&!Ct)return Kt(n),null}else 2*it()-c.renderingStartTime>eu&&r!==536870912&&(n.flags|=128,o=!0,Eo(c,!1),n.lanes=4194304);c.isBackwards?(d.sibling=n.child,n.child=d):(t=c.last,t!==null?t.sibling=d:n.child=d,c.last=d)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=it(),n.sibling=null,t=pn.current,Ee(pn,o?t&1|2:t&1),n):(Kt(n),null);case 22:case 23:return $i(n),Jc(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(r&536870912)!==0&&(n.flags&128)===0&&(Kt(n),n.subtreeFlags&6&&(n.flags|=8192)):Kt(n),r=n.updateQueue,r!==null&&Ql(n,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048),t!==null&&Se(Sr),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Qi(dn),Kt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function tS(t,n){switch(Ic(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Qi(dn),lt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Xt(n),null;case 13:if($i(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ro()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Se(pn),null;case 4:return lt(),null;case 10:return Qi(n.type),null;case 22:case 23:return $i(n),Jc(),t!==null&&Se(Sr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Qi(dn),null;case 25:return null;default:return null}}function xg(t,n){switch(Ic(n),n.tag){case 3:Qi(dn),lt();break;case 26:case 27:case 5:Xt(n);break;case 4:lt();break;case 13:$i(n);break;case 19:Se(pn);break;case 10:Qi(n.type);break;case 22:case 23:$i(n),Jc(),t!==null&&Se(Sr);break;case 24:Qi(dn)}}function Mo(t,n){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var c=o.next;r=c;do{if((r.tag&t)===t){o=void 0;var d=r.create,E=r.inst;o=d(),E.destroy=o}r=r.next}while(r!==c)}}catch(T){kt(n,n.return,T)}}function Na(t,n,r){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var d=c.next;o=d;do{if((o.tag&t)===t){var E=o.inst,T=E.destroy;if(T!==void 0){E.destroy=void 0,c=n;var P=r,$=T;try{$()}catch(ce){kt(c,P,ce)}}}o=o.next}while(o!==d)}}catch(ce){kt(n,n.return,ce)}}function Sg(t){var n=t.updateQueue;if(n!==null){var r=t.stateNode;try{om(n,r)}catch(o){kt(t,t.return,o)}}}function yg(t,n,r){r.props=Er(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(o){kt(t,n,o)}}function To(t,n){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof r=="function"?t.refCleanup=r(o):r.current=o}}catch(c){kt(t,n,c)}}function Oi(t,n){var r=t.ref,o=t.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(c){kt(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(c){kt(t,n,c)}else r.current=null}function Eg(t){var n=t.type,r=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break e;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(c){kt(t,t.return,c)}}function Rf(t,n,r){try{var o=t.stateNode;ES(o,t.type,r,n),o[Tn]=n}catch(c){kt(t,t.return,c)}}function Mg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ga(t.type)||t.tag===4}function wf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Mg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ga(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cf(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(t),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=uu));else if(o!==4&&(o===27&&Ga(t.type)&&(r=t.stateNode,n=null),t=t.child,t!==null))for(Cf(t,n,r),t=t.sibling;t!==null;)Cf(t,n,r),t=t.sibling}function Jl(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(o!==4&&(o===27&&Ga(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(Jl(t,n,r),t=t.sibling;t!==null;)Jl(t,n,r),t=t.sibling}function Tg(t){var n=t.stateNode,r=t.memoizedProps;try{for(var o=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);wn(n,o,r),n[fn]=t,n[Tn]=r}catch(d){kt(t,t.return,d)}}var na=!1,an=!1,Uf=!1,bg=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function nS(t,n){if(t=t.containerInfo,eh=gu,t=Bp(t),Rc(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var c=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break e}var E=0,T=-1,P=-1,$=0,ce=0,_e=t,ne=null;t:for(;;){for(var ie;_e!==r||c!==0&&_e.nodeType!==3||(T=E+c),_e!==d||o!==0&&_e.nodeType!==3||(P=E+o),_e.nodeType===3&&(E+=_e.nodeValue.length),(ie=_e.firstChild)!==null;)ne=_e,_e=ie;for(;;){if(_e===t)break t;if(ne===r&&++$===c&&(T=E),ne===d&&++ce===o&&(P=E),(ie=_e.nextSibling)!==null)break;_e=ne,ne=_e.parentNode}_e=ie}r=T===-1||P===-1?null:{start:T,end:P}}else r=null}r=r||{start:0,end:0}}else r=null;for(th={focusedElem:t,selectionRange:r},gu=!1,Sn=n;Sn!==null;)if(n=Sn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,Sn=t;else for(;Sn!==null;){switch(n=Sn,d=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,r=n,c=d.memoizedProps,d=d.memoizedState,o=r.stateNode;try{var tt=Er(r.type,c,r.elementType===r.type);t=o.getSnapshotBeforeUpdate(tt,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(Ze){kt(r,r.return,Ze)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,r=t.nodeType,r===9)ah(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ah(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Sn=t;break}Sn=n.return}}function Ag(t,n,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:Oa(t,r),o&4&&Mo(5,r);break;case 1:if(Oa(t,r),o&4)if(t=r.stateNode,n===null)try{t.componentDidMount()}catch(E){kt(r,r.return,E)}else{var c=Er(r.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(E){kt(r,r.return,E)}}o&64&&Sg(r),o&512&&To(r,r.return);break;case 3:if(Oa(t,r),o&64&&(t=r.updateQueue,t!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{om(t,n)}catch(E){kt(r,r.return,E)}}break;case 27:n===null&&o&4&&Tg(r);case 26:case 5:Oa(t,r),n===null&&o&4&&Eg(r),o&512&&To(r,r.return);break;case 12:Oa(t,r);break;case 13:Oa(t,r),o&4&&Cg(t,r),o&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=fS.bind(null,r),CS(t,r))));break;case 22:if(o=r.memoizedState!==null||na,!o){n=n!==null&&n.memoizedState!==null||an,c=na;var d=an;na=o,(an=n)&&!d?Pa(t,r,(r.subtreeFlags&8772)!==0):Oa(t,r),na=c,an=d}break;case 30:break;default:Oa(t,r)}}function Rg(t){var n=t.alternate;n!==null&&(t.alternate=null,Rg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ea(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Yt=null,jn=!1;function ia(t,n,r){for(r=r.child;r!==null;)wg(t,n,r),r=r.sibling}function wg(t,n,r){if(Pe&&typeof Pe.onCommitFiberUnmount=="function")try{Pe.onCommitFiberUnmount(fe,r)}catch{}switch(r.tag){case 26:an||Oi(r,n),ia(t,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:an||Oi(r,n);var o=Yt,c=jn;Ga(r.type)&&(Yt=r.stateNode,jn=!1),ia(t,n,r),No(r.stateNode),Yt=o,jn=c;break;case 5:an||Oi(r,n);case 6:if(o=Yt,c=jn,Yt=null,ia(t,n,r),Yt=o,jn=c,Yt!==null)if(jn)try{(Yt.nodeType===9?Yt.body:Yt.nodeName==="HTML"?Yt.ownerDocument.body:Yt).removeChild(r.stateNode)}catch(d){kt(r,n,d)}else try{Yt.removeChild(r.stateNode)}catch(d){kt(r,n,d)}break;case 18:Yt!==null&&(jn?(t=Yt,gv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),Go(t)):gv(Yt,r.stateNode));break;case 4:o=Yt,c=jn,Yt=r.stateNode.containerInfo,jn=!0,ia(t,n,r),Yt=o,jn=c;break;case 0:case 11:case 14:case 15:an||Na(2,r,n),an||Na(4,r,n),ia(t,n,r);break;case 1:an||(Oi(r,n),o=r.stateNode,typeof o.componentWillUnmount=="function"&&yg(r,n,o)),ia(t,n,r);break;case 21:ia(t,n,r);break;case 22:an=(o=an)||r.memoizedState!==null,ia(t,n,r),an=o;break;default:ia(t,n,r)}}function Cg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Go(t)}catch(r){kt(n,n.return,r)}}function iS(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new bg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new bg),n;default:throw Error(s(435,t.tag))}}function Df(t,n){var r=iS(t);n.forEach(function(o){var c=hS.bind(null,t,o);r.has(o)||(r.add(o),o.then(c,c))})}function ti(t,n){var r=n.deletions;if(r!==null)for(var o=0;o<r.length;o++){var c=r[o],d=t,E=n,T=E;e:for(;T!==null;){switch(T.tag){case 27:if(Ga(T.type)){Yt=T.stateNode,jn=!1;break e}break;case 5:Yt=T.stateNode,jn=!1;break e;case 3:case 4:Yt=T.stateNode.containerInfo,jn=!0;break e}T=T.return}if(Yt===null)throw Error(s(160));wg(d,E,c),Yt=null,jn=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Ug(n,t),n=n.sibling}var yi=null;function Ug(t,n){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ti(n,t),ni(t),o&4&&(Na(3,t,t.return),Mo(3,t),Na(5,t,t.return));break;case 1:ti(n,t),ni(t),o&512&&(an||r===null||Oi(r,r.return)),o&64&&na&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var c=yi;if(ti(n,t),ni(t),o&512&&(an||r===null||Oi(r,r.return)),o&4){var d=r!==null?r.memoizedState:null;if(o=t.memoizedState,r===null)if(o===null)if(t.stateNode===null){e:{o=t.type,r=t.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":d=c.getElementsByTagName("title")[0],(!d||d[ya]||d[fn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(o),c.head.insertBefore(d,c.querySelector("head > title"))),wn(d,o,r),d[fn]=t,sn(d),o=d;break e;case"link":var E=Tv("link","href",c).get(o+(r.href||""));if(E){for(var T=0;T<E.length;T++)if(d=E[T],d.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&d.getAttribute("rel")===(r.rel==null?null:r.rel)&&d.getAttribute("title")===(r.title==null?null:r.title)&&d.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){E.splice(T,1);break t}}d=c.createElement(o),wn(d,o,r),c.head.appendChild(d);break;case"meta":if(E=Tv("meta","content",c).get(o+(r.content||""))){for(T=0;T<E.length;T++)if(d=E[T],d.getAttribute("content")===(r.content==null?null:""+r.content)&&d.getAttribute("name")===(r.name==null?null:r.name)&&d.getAttribute("property")===(r.property==null?null:r.property)&&d.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&d.getAttribute("charset")===(r.charSet==null?null:r.charSet)){E.splice(T,1);break t}}d=c.createElement(o),wn(d,o,r),c.head.appendChild(d);break;default:throw Error(s(468,o))}d[fn]=t,sn(d),o=d}t.stateNode=o}else bv(c,t.type,t.stateNode);else t.stateNode=Mv(c,o,t.memoizedProps);else d!==o?(d===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):d.count--,o===null?bv(c,t.type,t.stateNode):Mv(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Rf(t,t.memoizedProps,r.memoizedProps)}break;case 27:ti(n,t),ni(t),o&512&&(an||r===null||Oi(r,r.return)),r!==null&&o&4&&Rf(t,t.memoizedProps,r.memoizedProps);break;case 5:if(ti(n,t),ni(t),o&512&&(an||r===null||Oi(r,r.return)),t.flags&32){c=t.stateNode;try{Di(c,"")}catch(ie){kt(t,t.return,ie)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,Rf(t,c,r!==null?r.memoizedProps:c)),o&1024&&(Uf=!0);break;case 6:if(ti(n,t),ni(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,r=t.stateNode;try{r.nodeValue=o}catch(ie){kt(t,t.return,ie)}}break;case 3:if(du=null,c=yi,yi=fu(n.containerInfo),ti(n,t),yi=c,ni(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{Go(n.containerInfo)}catch(ie){kt(t,t.return,ie)}Uf&&(Uf=!1,Dg(t));break;case 4:o=yi,yi=fu(t.stateNode.containerInfo),ti(n,t),ni(t),yi=o;break;case 12:ti(n,t),ni(t);break;case 13:ti(n,t),ni(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(zf=it()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Df(t,o)));break;case 22:c=t.memoizedState!==null;var P=r!==null&&r.memoizedState!==null,$=na,ce=an;if(na=$||c,an=ce||P,ti(n,t),an=ce,na=$,ni(t),o&8192)e:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(r===null||P||na||an||Mr(t)),r=null,n=t;;){if(n.tag===5||n.tag===26){if(r===null){P=r=n;try{if(d=P.stateNode,c)E=d.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{T=P.stateNode;var _e=P.memoizedProps.style,ne=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;T.style.display=ne==null||typeof ne=="boolean"?"":(""+ne).trim()}}catch(ie){kt(P,P.return,ie)}}}else if(n.tag===6){if(r===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(ie){kt(P,P.return,ie)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,Df(t,r))));break;case 19:ti(n,t),ni(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Df(t,o)));break;case 30:break;case 21:break;default:ti(n,t),ni(t)}}function ni(t){var n=t.flags;if(n&2){try{for(var r,o=t.return;o!==null;){if(Mg(o)){r=o;break}o=o.return}if(r==null)throw Error(s(160));switch(r.tag){case 27:var c=r.stateNode,d=wf(t);Jl(t,d,c);break;case 5:var E=r.stateNode;r.flags&32&&(Di(E,""),r.flags&=-33);var T=wf(t);Jl(t,T,E);break;case 3:case 4:var P=r.stateNode.containerInfo,$=wf(t);Cf(t,$,P);break;default:throw Error(s(161))}}catch(ce){kt(t,t.return,ce)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Dg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Dg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Oa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ag(t,n.alternate,n),n=n.sibling}function Mr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Na(4,n,n.return),Mr(n);break;case 1:Oi(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&yg(n,n.return,r),Mr(n);break;case 27:No(n.stateNode);case 26:case 5:Oi(n,n.return),Mr(n);break;case 22:n.memoizedState===null&&Mr(n);break;case 30:Mr(n);break;default:Mr(n)}t=t.sibling}}function Pa(t,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,d=n,E=d.flags;switch(d.tag){case 0:case 11:case 15:Pa(c,d,r),Mo(4,d);break;case 1:if(Pa(c,d,r),o=d,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){kt(o,o.return,$)}if(o=d,c=o.updateQueue,c!==null){var T=o.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)sm(P[c],T)}catch($){kt(o,o.return,$)}}r&&E&64&&Sg(d),To(d,d.return);break;case 27:Tg(d);case 26:case 5:Pa(c,d,r),r&&o===null&&E&4&&Eg(d),To(d,d.return);break;case 12:Pa(c,d,r);break;case 13:Pa(c,d,r),r&&E&4&&Cg(c,d);break;case 22:d.memoizedState===null&&Pa(c,d,r),To(d,d.return);break;case 30:break;default:Pa(c,d,r)}n=n.sibling}}function Lf(t,n){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&lo(r))}function Nf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&lo(t))}function Pi(t,n,r,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Lg(t,n,r,o),n=n.sibling}function Lg(t,n,r,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Pi(t,n,r,o),c&2048&&Mo(9,n);break;case 1:Pi(t,n,r,o);break;case 3:Pi(t,n,r,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&lo(t)));break;case 12:if(c&2048){Pi(t,n,r,o),t=n.stateNode;try{var d=n.memoizedProps,E=d.id,T=d.onPostCommit;typeof T=="function"&&T(E,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(P){kt(n,n.return,P)}}else Pi(t,n,r,o);break;case 13:Pi(t,n,r,o);break;case 23:break;case 22:d=n.stateNode,E=n.alternate,n.memoizedState!==null?d._visibility&2?Pi(t,n,r,o):bo(t,n):d._visibility&2?Pi(t,n,r,o):(d._visibility|=2,os(t,n,r,o,(n.subtreeFlags&10256)!==0)),c&2048&&Lf(E,n);break;case 24:Pi(t,n,r,o),c&2048&&Nf(n.alternate,n);break;default:Pi(t,n,r,o)}}function os(t,n,r,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=t,E=n,T=r,P=o,$=E.flags;switch(E.tag){case 0:case 11:case 15:os(d,E,T,P,c),Mo(8,E);break;case 23:break;case 22:var ce=E.stateNode;E.memoizedState!==null?ce._visibility&2?os(d,E,T,P,c):bo(d,E):(ce._visibility|=2,os(d,E,T,P,c)),c&&$&2048&&Lf(E.alternate,E);break;case 24:os(d,E,T,P,c),c&&$&2048&&Nf(E.alternate,E);break;default:os(d,E,T,P,c)}n=n.sibling}}function bo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=t,o=n,c=o.flags;switch(o.tag){case 22:bo(r,o),c&2048&&Lf(o.alternate,o);break;case 24:bo(r,o),c&2048&&Nf(o.alternate,o);break;default:bo(r,o)}n=n.sibling}}var Ao=8192;function ls(t){if(t.subtreeFlags&Ao)for(t=t.child;t!==null;)Ng(t),t=t.sibling}function Ng(t){switch(t.tag){case 26:ls(t),t.flags&Ao&&t.memoizedState!==null&&VS(yi,t.memoizedState,t.memoizedProps);break;case 5:ls(t);break;case 3:case 4:var n=yi;yi=fu(t.stateNode.containerInfo),ls(t),yi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=Ao,Ao=16777216,ls(t),Ao=n):ls(t));break;default:ls(t)}}function Og(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Ro(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];Sn=o,Bg(o,t)}Og(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Pg(t),t=t.sibling}function Pg(t){switch(t.tag){case 0:case 11:case 15:Ro(t),t.flags&2048&&Na(9,t,t.return);break;case 3:Ro(t);break;case 12:Ro(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,$l(t)):Ro(t);break;default:Ro(t)}}function $l(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];Sn=o,Bg(o,t)}Og(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Na(8,n,n.return),$l(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,$l(n));break;default:$l(n)}t=t.sibling}}function Bg(t,n){for(;Sn!==null;){var r=Sn;switch(r.tag){case 0:case 11:case 15:Na(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:lo(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,Sn=o;else e:for(r=t;Sn!==null;){o=Sn;var c=o.sibling,d=o.return;if(Rg(o),o===r){Sn=null;break e}if(c!==null){c.return=d,Sn=c;break e}Sn=d}}}var aS={getCacheForType:function(t){var n=Dn(dn),r=n.data.get(t);return r===void 0&&(r=t(),n.data.set(t,r)),r}},rS=typeof WeakMap=="function"?WeakMap:Map,Ut=0,qt=null,mt=null,Et=0,Dt=0,ii=null,Ba=!1,us=!1,Of=!1,aa=0,tn=0,za=0,Tr=0,Pf=0,mi=0,cs=0,wo=null,qn=null,Bf=!1,zf=0,eu=1/0,tu=null,Ia=null,Rn=0,Fa=null,fs=null,hs=0,If=0,Ff=null,zg=null,Co=0,Hf=null;function ai(){if((Ut&2)!==0&&Et!==0)return Et&-Et;if(z.T!==null){var t=$r;return t!==0?t:qf()}return Tt()}function Ig(){mi===0&&(mi=(Et&536870912)===0||Ct?X():536870912);var t=pi.current;return t!==null&&(t.flags|=32),mi}function ri(t,n,r){(t===qt&&(Dt===2||Dt===9)||t.cancelPendingCommit!==null)&&(ds(t,0),Ha(t,Et,mi,!1)),ve(t,r),((Ut&2)===0||t!==qt)&&(t===qt&&((Ut&2)===0&&(Tr|=r),tn===4&&Ha(t,Et,mi,!1)),Bi(t))}function Fg(t,n,r){if((Ut&6)!==0)throw Error(s(327));var o=!r&&(n&124)===0&&(n&t.expiredLanes)===0||nt(t,n),c=o?lS(t,n):kf(t,n,!0),d=o;do{if(c===0){us&&!o&&Ha(t,n,0,!1);break}else{if(r=t.current.alternate,d&&!sS(r)){c=kf(t,n,!1),d=!1;continue}if(c===2){if(d=n,t.errorRecoveryDisabledLanes&d)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){n=E;e:{var T=t;c=wo;var P=T.current.memoizedState.isDehydrated;if(P&&(ds(T,E).flags|=256),E=kf(T,E,!1),E!==2){if(Of&&!P){T.errorRecoveryDisabledLanes|=d,Tr|=d,c=4;break e}d=qn,qn=c,d!==null&&(qn===null?qn=d:qn.push.apply(qn,d))}c=E}if(d=!1,c!==2)continue}}if(c===1){ds(t,0),Ha(t,n,0,!0);break}e:{switch(o=t,d=c,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ha(o,n,mi,!Ba);break e;case 2:qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=zf+300-it(),10<c)){if(Ha(o,n,mi,!Ba),ct(o,0,!0)!==0)break e;o.timeoutHandle=pv(Hg.bind(null,o,r,qn,tu,Bf,n,mi,Tr,cs,Ba,d,2,-0,0),c);break e}Hg(o,r,qn,tu,Bf,n,mi,Tr,cs,Ba,d,0,-0,0)}}break}while(!0);Bi(t)}function Hg(t,n,r,o,c,d,E,T,P,$,ce,_e,ne,ie){if(t.timeoutHandle=-1,_e=n.subtreeFlags,(_e&8192||(_e&16785408)===16785408)&&(Bo={stylesheets:null,count:0,unsuspend:GS},Ng(n),_e=kS(),_e!==null)){t.cancelPendingCommit=_e(qg.bind(null,t,n,d,r,o,c,E,T,P,ce,1,ne,ie)),Ha(t,d,E,!$);return}qg(t,n,d,r,o,c,E,T,P)}function sS(t){for(var n=t;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var c=r[o],d=c.getSnapshot;c=c.value;try{if(!$n(d(),c))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ha(t,n,r,o){n&=~Pf,n&=~Tr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var d=31-Ge(c),E=1<<d;o[d]=-1,c&=~E}r!==0&&Oe(t,r,n)}function nu(){return(Ut&6)===0?(Uo(0),!1):!0}function Gf(){if(mt!==null){if(Dt===0)var t=mt.return;else t=mt,Ki=_r=null,af(t),rs=null,So=0,t=mt;for(;t!==null;)xg(t.alternate,t),t=t.return;mt=null}}function ds(t,n){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,TS(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),Gf(),qt=t,mt=r=qi(t.current,null),Et=n,Dt=0,ii=null,Ba=!1,us=nt(t,n),Of=!1,cs=mi=Pf=Tr=za=tn=0,qn=wo=null,Bf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-Ge(o),d=1<<c;n|=t[c],o&=~d}return aa=n,Tl(),r}function Gg(t,n){ft=null,z.H=kl,n===co||n===Nl?(n=am(),Dt=3):n===tm?(n=am(),Dt=4):Dt=n===rg?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,mt===null&&(tn=1,Yl(t,ci(n,t.current)))}function Vg(){var t=z.H;return z.H=kl,t===null?kl:t}function kg(){var t=z.A;return z.A=aS,t}function Vf(){tn=4,Ba||(Et&4194048)!==Et&&pi.current!==null||(us=!0),(za&134217727)===0&&(Tr&134217727)===0||qt===null||Ha(qt,Et,mi,!1)}function kf(t,n,r){var o=Ut;Ut|=2;var c=Vg(),d=kg();(qt!==t||Et!==n)&&(tu=null,ds(t,n)),n=!1;var E=tn;e:do try{if(Dt!==0&&mt!==null){var T=mt,P=ii;switch(Dt){case 8:Gf(),E=6;break e;case 3:case 2:case 9:case 6:pi.current===null&&(n=!0);var $=Dt;if(Dt=0,ii=null,ps(t,T,P,$),r&&us){E=0;break e}break;default:$=Dt,Dt=0,ii=null,ps(t,T,P,$)}}oS(),E=tn;break}catch(ce){Gg(t,ce)}while(!0);return n&&t.shellSuspendCounter++,Ki=_r=null,Ut=o,z.H=c,z.A=d,mt===null&&(qt=null,Et=0,Tl()),E}function oS(){for(;mt!==null;)Xg(mt)}function lS(t,n){var r=Ut;Ut|=2;var o=Vg(),c=kg();qt!==t||Et!==n?(tu=null,eu=it()+500,ds(t,n)):us=nt(t,n);e:do try{if(Dt!==0&&mt!==null){n=mt;var d=ii;t:switch(Dt){case 1:Dt=0,ii=null,ps(t,n,d,1);break;case 2:case 9:if(nm(d)){Dt=0,ii=null,Wg(n);break}n=function(){Dt!==2&&Dt!==9||qt!==t||(Dt=7),Bi(t)},d.then(n,n);break e;case 3:Dt=7;break e;case 4:Dt=5;break e;case 7:nm(d)?(Dt=0,ii=null,Wg(n)):(Dt=0,ii=null,ps(t,n,d,7));break;case 5:var E=null;switch(mt.tag){case 26:E=mt.memoizedState;case 5:case 27:var T=mt;if(!E||Av(E)){Dt=0,ii=null;var P=T.sibling;if(P!==null)mt=P;else{var $=T.return;$!==null?(mt=$,iu($)):mt=null}break t}}Dt=0,ii=null,ps(t,n,d,5);break;case 6:Dt=0,ii=null,ps(t,n,d,6);break;case 8:Gf(),tn=6;break e;default:throw Error(s(462))}}uS();break}catch(ce){Gg(t,ce)}while(!0);return Ki=_r=null,z.H=o,z.A=c,Ut=r,mt!==null?0:(qt=null,Et=0,Tl(),tn)}function uS(){for(;mt!==null&&!Vn();)Xg(mt)}function Xg(t){var n=vg(t.alternate,t,aa);t.memoizedProps=t.pendingProps,n===null?iu(t):mt=n}function Wg(t){var n=t,r=n.alternate;switch(n.tag){case 15:case 0:n=fg(r,n,n.pendingProps,n.type,void 0,Et);break;case 11:n=fg(r,n,n.pendingProps,n.type.render,n.ref,Et);break;case 5:af(n);default:xg(r,n),n=mt=jp(n,aa),n=vg(r,n,aa)}t.memoizedProps=t.pendingProps,n===null?iu(t):mt=n}function ps(t,n,r,o){Ki=_r=null,af(n),rs=null,So=0;var c=n.return;try{if(Jx(t,c,n,r,Et)){tn=1,Yl(t,ci(r,t.current)),mt=null;return}}catch(d){if(c!==null)throw mt=c,d;tn=1,Yl(t,ci(r,t.current)),mt=null;return}n.flags&32768?(Ct||o===1?t=!0:us||(Et&536870912)!==0?t=!1:(Ba=t=!0,(o===2||o===9||o===3||o===6)&&(o=pi.current,o!==null&&o.tag===13&&(o.flags|=16384))),jg(n,t)):iu(n)}function iu(t){var n=t;do{if((n.flags&32768)!==0){jg(n,Ba);return}t=n.return;var r=eS(n.alternate,n,aa);if(r!==null){mt=r;return}if(n=n.sibling,n!==null){mt=n;return}mt=n=t}while(n!==null);tn===0&&(tn=5)}function jg(t,n){do{var r=tS(t.alternate,t);if(r!==null){r.flags&=32767,mt=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(t=t.sibling,t!==null)){mt=t;return}mt=t=r}while(t!==null);tn=6,mt=null}function qg(t,n,r,o,c,d,E,T,P){t.cancelPendingCommit=null;do au();while(Rn!==0);if((Ut&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Lc,ze(t,r,d,E,T,P),t===qt&&(mt=qt=null,Et=0),fs=n,Fa=t,hs=r,If=d,Ff=c,zg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,dS(L,function(){return Jg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,c=K.p,K.p=2,E=Ut,Ut|=4;try{nS(t,n,r)}finally{Ut=E,K.p=c,z.T=o}}Rn=1,Yg(),Zg(),Kg()}}function Yg(){if(Rn===1){Rn=0;var t=Fa,n=fs,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=z.T,z.T=null;var o=K.p;K.p=2;var c=Ut;Ut|=4;try{Ug(n,t);var d=th,E=Bp(t.containerInfo),T=d.focusedElem,P=d.selectionRange;if(E!==T&&T&&T.ownerDocument&&Pp(T.ownerDocument.documentElement,T)){if(P!==null&&Rc(T)){var $=P.start,ce=P.end;if(ce===void 0&&(ce=$),"selectionStart"in T)T.selectionStart=$,T.selectionEnd=Math.min(ce,T.value.length);else{var _e=T.ownerDocument||document,ne=_e&&_e.defaultView||window;if(ne.getSelection){var ie=ne.getSelection(),tt=T.textContent.length,Ze=Math.min(P.start,tt),It=P.end===void 0?Ze:Math.min(P.end,tt);!ie.extend&&Ze>It&&(E=It,It=Ze,Ze=E);var W=Op(T,Ze),G=Op(T,It);if(W&&G&&(ie.rangeCount!==1||ie.anchorNode!==W.node||ie.anchorOffset!==W.offset||ie.focusNode!==G.node||ie.focusOffset!==G.offset)){var Q=_e.createRange();Q.setStart(W.node,W.offset),ie.removeAllRanges(),Ze>It?(ie.addRange(Q),ie.extend(G.node,G.offset)):(Q.setEnd(G.node,G.offset),ie.addRange(Q))}}}}for(_e=[],ie=T;ie=ie.parentNode;)ie.nodeType===1&&_e.push({element:ie,left:ie.scrollLeft,top:ie.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<_e.length;T++){var de=_e[T];de.element.scrollLeft=de.left,de.element.scrollTop=de.top}}gu=!!eh,th=eh=null}finally{Ut=c,K.p=o,z.T=r}}t.current=n,Rn=2}}function Zg(){if(Rn===2){Rn=0;var t=Fa,n=fs,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=z.T,z.T=null;var o=K.p;K.p=2;var c=Ut;Ut|=4;try{Ag(t,n.alternate,n)}finally{Ut=c,K.p=o,z.T=r}}Rn=3}}function Kg(){if(Rn===4||Rn===3){Rn=0,_t();var t=Fa,n=fs,r=hs,o=zg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Rn=5:(Rn=0,fs=Fa=null,Qg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ia=null),rn(r),n=n.stateNode,Pe&&typeof Pe.onCommitFiberRoot=="function")try{Pe.onCommitFiberRoot(fe,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,c=K.p,K.p=2,z.T=null;try{for(var d=t.onRecoverableError,E=0;E<o.length;E++){var T=o[E];d(T.value,{componentStack:T.stack})}}finally{z.T=n,K.p=c}}(hs&3)!==0&&au(),Bi(t),c=t.pendingLanes,(r&4194090)!==0&&(c&42)!==0?t===Hf?Co++:(Co=0,Hf=t):Co=0,Uo(0)}}function Qg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,lo(n)))}function au(t){return Yg(),Zg(),Kg(),Jg()}function Jg(){if(Rn!==5)return!1;var t=Fa,n=If;If=0;var r=rn(hs),o=z.T,c=K.p;try{K.p=32>r?32:r,z.T=null,r=Ff,Ff=null;var d=Fa,E=hs;if(Rn=0,fs=Fa=null,hs=0,(Ut&6)!==0)throw Error(s(331));var T=Ut;if(Ut|=4,Pg(d.current),Lg(d,d.current,E,r),Ut=T,Uo(0,!1),Pe&&typeof Pe.onPostCommitFiberRoot=="function")try{Pe.onPostCommitFiberRoot(fe,d)}catch{}return!0}finally{K.p=c,z.T=o,Qg(t,n)}}function $g(t,n,r){n=ci(r,n),n=_f(t.stateNode,n,2),t=Ca(t,n,2),t!==null&&(ve(t,2),Bi(t))}function kt(t,n,r){if(t.tag===3)$g(t,t,r);else for(;n!==null;){if(n.tag===3){$g(n,t,r);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ia===null||!Ia.has(o))){t=ci(r,t),r=ig(2),o=Ca(n,r,2),o!==null&&(ag(r,o,n,t),ve(o,2),Bi(o));break}}n=n.return}}function Xf(t,n,r){var o=t.pingCache;if(o===null){o=t.pingCache=new rS;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(r)||(Of=!0,c.add(r),t=cS.bind(null,t,n,r),n.then(t,t))}function cS(t,n,r){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,qt===t&&(Et&r)===r&&(tn===4||tn===3&&(Et&62914560)===Et&&300>it()-zf?(Ut&2)===0&&ds(t,0):Pf|=r,cs===Et&&(cs=0)),Bi(t)}function ev(t,n){n===0&&(n=Ne()),t=Zr(t,n),t!==null&&(ve(t,n),Bi(t))}function fS(t){var n=t.memoizedState,r=0;n!==null&&(r=n.retryLane),ev(t,r)}function hS(t,n){var r=0;switch(t.tag){case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(r=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),ev(t,r)}function dS(t,n){return ht(t,n)}var ru=null,ms=null,Wf=!1,su=!1,jf=!1,br=0;function Bi(t){t!==ms&&t.next===null&&(ms===null?ru=ms=t:ms=ms.next=t),su=!0,Wf||(Wf=!0,mS())}function Uo(t,n){if(!jf&&su){jf=!0;do for(var r=!1,o=ru;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var d=0;else{var E=o.suspendedLanes,T=o.pingedLanes;d=(1<<31-Ge(42|t)+1)-1,d&=c&~(E&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(r=!0,av(o,d))}else d=Et,d=ct(o,o===qt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||nt(o,d)||(r=!0,av(o,d));o=o.next}while(r);jf=!1}}function pS(){tv()}function tv(){su=Wf=!1;var t=0;br!==0&&(MS()&&(t=br),br=0);for(var n=it(),r=null,o=ru;o!==null;){var c=o.next,d=nv(o,n);d===0?(o.next=null,r===null?ru=c:r.next=c,c===null&&(ms=r)):(r=o,(t!==0||(d&3)!==0)&&(su=!0)),o=c}Uo(t)}function nv(t,n){for(var r=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var E=31-Ge(d),T=1<<E,P=c[E];P===-1?((T&r)===0||(T&o)!==0)&&(c[E]=Pt(T,n)):P<=n&&(t.expiredLanes|=T),d&=~T}if(n=qt,r=Et,r=ct(t,t===n?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,r===0||t===n&&(Dt===2||Dt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&F(o),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||nt(t,r)){if(n=r&-r,n===t.callbackPriority)return n;switch(o!==null&&F(o),rn(r)){case 2:case 8:r=Ve;break;case 32:r=L;break;case 268435456:r=te;break;default:r=L}return o=iv.bind(null,t),r=ht(r,o),t.callbackPriority=n,t.callbackNode=r,n}return o!==null&&o!==null&&F(o),t.callbackPriority=2,t.callbackNode=null,2}function iv(t,n){if(Rn!==0&&Rn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(au()&&t.callbackNode!==r)return null;var o=Et;return o=ct(t,t===qt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Fg(t,o,n),nv(t,it()),t.callbackNode!=null&&t.callbackNode===r?iv.bind(null,t):null)}function av(t,n){if(au())return null;Fg(t,n,!0)}function mS(){bS(function(){(Ut&6)!==0?ht(Ot,pS):tv()})}function qf(){return br===0&&(br=X()),br}function rv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:vl(""+t)}function sv(t,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,t.id&&r.setAttribute("form",t.id),n.parentNode.insertBefore(r,n),t=new FormData(t),r.parentNode.removeChild(r),t}function gS(t,n,r,o,c){if(n==="submit"&&r&&r.stateNode===c){var d=rv((c[Tn]||null).action),E=o.submitter;E&&(n=(n=E[Tn]||null)?rv(n.formAction):E.getAttribute("formAction"),n!==null&&(d=n,E=null));var T=new yl("action","action",null,o,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(br!==0){var P=E?sv(c,E):new FormData(c);df(r,{pending:!0,data:P,method:c.method,action:d},null,P)}}else typeof d=="function"&&(T.preventDefault(),P=E?sv(c,E):new FormData(c),df(r,{pending:!0,data:P,method:c.method,action:d},d,P))},currentTarget:c}]})}}for(var Yf=0;Yf<Dc.length;Yf++){var Zf=Dc[Yf],vS=Zf.toLowerCase(),_S=Zf[0].toUpperCase()+Zf.slice(1);Si(vS,"on"+_S)}Si(Fp,"onAnimationEnd"),Si(Hp,"onAnimationIteration"),Si(Gp,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(Px,"onTransitionRun"),Si(Bx,"onTransitionStart"),Si(zx,"onTransitionCancel"),Si(Vp,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),ki("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ki("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ki("onBeforeInput",["compositionend","keypress","textInput","paste"]),ki("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ki("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ki("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Do));function ov(t,n){n=(n&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],c=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var E=o.length-1;0<=E;E--){var T=o[E],P=T.instance,$=T.currentTarget;if(T=T.listener,P!==d&&c.isPropagationStopped())break e;d=T,c.currentTarget=$;try{d(c)}catch(ce){ql(ce)}c.currentTarget=null,d=P}else for(E=0;E<o.length;E++){if(T=o[E],P=T.instance,$=T.currentTarget,T=T.listener,P!==d&&c.isPropagationStopped())break e;d=T,c.currentTarget=$;try{d(c)}catch(ce){ql(ce)}c.currentTarget=null,d=P}}}}function gt(t,n){var r=n[or];r===void 0&&(r=n[or]=new Set);var o=t+"__bubble";r.has(o)||(lv(n,t,2,!1),r.add(o))}function Kf(t,n,r){var o=0;n&&(o|=4),lv(r,t,o,n)}var ou="_reactListening"+Math.random().toString(36).slice(2);function Qf(t){if(!t[ou]){t[ou]=!0,ml.forEach(function(r){r!=="selectionchange"&&(xS.has(r)||Kf(r,!1,t),Kf(r,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ou]||(n[ou]=!0,Kf("selectionchange",!1,n))}}function lv(t,n,r,o){switch(Lv(n)){case 2:var c=jS;break;case 8:c=qS;break;default:c=fh}r=c.bind(null,n,r,t),c=void 0,!_c||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,r,{capture:!0,passive:c}):t.addEventListener(n,r,!0):c!==void 0?t.addEventListener(n,r,{passive:c}):t.addEventListener(n,r,!1)}function Jf(t,n,r,o,c){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var E=o.tag;if(E===3||E===4){var T=o.stateNode.containerInfo;if(T===c)break;if(E===4)for(E=o.return;E!==null;){var P=E.tag;if((P===3||P===4)&&E.stateNode.containerInfo===c)return;E=E.return}for(;T!==null;){if(E=Gi(T),E===null)return;if(P=E.tag,P===5||P===6||P===26||P===27){o=d=E;continue e}T=T.parentNode}}o=o.return}mp(function(){var $=d,ce=gc(r),_e=[];e:{var ne=kp.get(t);if(ne!==void 0){var ie=yl,tt=t;switch(t){case"keypress":if(xl(r)===0)break e;case"keydown":case"keyup":ie=dx;break;case"focusin":tt="focus",ie=Ec;break;case"focusout":tt="blur",ie=Ec;break;case"beforeblur":case"afterblur":ie=Ec;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=_p;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=tx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=gx;break;case Fp:case Hp:case Gp:ie=ax;break;case Vp:ie=_x;break;case"scroll":case"scrollend":ie=$_;break;case"wheel":ie=Sx;break;case"copy":case"cut":case"paste":ie=sx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=Sp;break;case"toggle":case"beforetoggle":ie=Ex}var Ze=(n&4)!==0,It=!Ze&&(t==="scroll"||t==="scrollend"),W=Ze?ne!==null?ne+"Capture":null:ne;Ze=[];for(var G=$,Q;G!==null;){var de=G;if(Q=de.stateNode,de=de.tag,de!==5&&de!==26&&de!==27||Q===null||W===null||(de=Zs(G,W),de!=null&&Ze.push(Lo(G,de,Q))),It)break;G=G.return}0<Ze.length&&(ne=new ie(ne,tt,null,r,ce),_e.push({event:ne,listeners:Ze}))}}if((n&7)===0){e:{if(ne=t==="mouseover"||t==="pointerover",ie=t==="mouseout"||t==="pointerout",ne&&r!==mc&&(tt=r.relatedTarget||r.fromElement)&&(Gi(tt)||tt[kn]))break e;if((ie||ne)&&(ne=ce.window===ce?ce:(ne=ce.ownerDocument)?ne.defaultView||ne.parentWindow:window,ie?(tt=r.relatedTarget||r.toElement,ie=$,tt=tt?Gi(tt):null,tt!==null&&(It=u(tt),Ze=tt.tag,tt!==It||Ze!==5&&Ze!==27&&Ze!==6)&&(tt=null)):(ie=null,tt=$),ie!==tt)){if(Ze=_p,de="onMouseLeave",W="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Ze=Sp,de="onPointerLeave",W="onPointerEnter",G="pointer"),It=ie==null?ne:ur(ie),Q=tt==null?ne:ur(tt),ne=new Ze(de,G+"leave",ie,r,ce),ne.target=It,ne.relatedTarget=Q,de=null,Gi(ce)===$&&(Ze=new Ze(W,G+"enter",tt,r,ce),Ze.target=Q,Ze.relatedTarget=It,de=Ze),It=de,ie&&tt)t:{for(Ze=ie,W=tt,G=0,Q=Ze;Q;Q=gs(Q))G++;for(Q=0,de=W;de;de=gs(de))Q++;for(;0<G-Q;)Ze=gs(Ze),G--;for(;0<Q-G;)W=gs(W),Q--;for(;G--;){if(Ze===W||W!==null&&Ze===W.alternate)break t;Ze=gs(Ze),W=gs(W)}Ze=null}else Ze=null;ie!==null&&uv(_e,ne,ie,Ze,!1),tt!==null&&It!==null&&uv(_e,It,tt,Ze,!0)}}e:{if(ne=$?ur($):window,ie=ne.nodeName&&ne.nodeName.toLowerCase(),ie==="select"||ie==="input"&&ne.type==="file")var He=wp;else if(Ap(ne))if(Cp)He=Lx;else{He=Ux;var dt=Cx}else ie=ne.nodeName,!ie||ie.toLowerCase()!=="input"||ne.type!=="checkbox"&&ne.type!=="radio"?$&&pc($.elementType)&&(He=wp):He=Dx;if(He&&(He=He(t,$))){Rp(_e,He,r,ce);break e}dt&&dt(t,ne,$),t==="focusout"&&$&&ne.type==="number"&&$.memoizedProps.value!=null&&Un(ne,"number",ne.value)}switch(dt=$?ur($):window,t){case"focusin":(Ap(dt)||dt.contentEditable==="true")&&(jr=dt,wc=$,io=null);break;case"focusout":io=wc=jr=null;break;case"mousedown":Cc=!0;break;case"contextmenu":case"mouseup":case"dragend":Cc=!1,zp(_e,r,ce);break;case"selectionchange":if(Ox)break;case"keydown":case"keyup":zp(_e,r,ce)}var ke;if(Tc)e:{switch(t){case"compositionstart":var Je="onCompositionStart";break e;case"compositionend":Je="onCompositionEnd";break e;case"compositionupdate":Je="onCompositionUpdate";break e}Je=void 0}else Wr?Tp(t,r)&&(Je="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(Je="onCompositionStart");Je&&(yp&&r.locale!=="ko"&&(Wr||Je!=="onCompositionStart"?Je==="onCompositionEnd"&&Wr&&(ke=gp()):(ba=ce,xc="value"in ba?ba.value:ba.textContent,Wr=!0)),dt=lu($,Je),0<dt.length&&(Je=new xp(Je,t,null,r,ce),_e.push({event:Je,listeners:dt}),ke?Je.data=ke:(ke=bp(r),ke!==null&&(Je.data=ke)))),(ke=Tx?bx(t,r):Ax(t,r))&&(Je=lu($,"onBeforeInput"),0<Je.length&&(dt=new xp("onBeforeInput","beforeinput",null,r,ce),_e.push({event:dt,listeners:Je}),dt.data=ke)),gS(_e,t,$,r,ce)}ov(_e,n)})}function Lo(t,n,r){return{instance:t,listener:n,currentTarget:r}}function lu(t,n){for(var r=n+"Capture",o=[];t!==null;){var c=t,d=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=Zs(t,r),c!=null&&o.unshift(Lo(t,c,d)),c=Zs(t,n),c!=null&&o.push(Lo(t,c,d))),t.tag===3)return o;t=t.return}return[]}function gs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function uv(t,n,r,o,c){for(var d=n._reactName,E=[];r!==null&&r!==o;){var T=r,P=T.alternate,$=T.stateNode;if(T=T.tag,P!==null&&P===o)break;T!==5&&T!==26&&T!==27||$===null||(P=$,c?($=Zs(r,d),$!=null&&E.unshift(Lo(r,$,P))):c||($=Zs(r,d),$!=null&&E.push(Lo(r,$,P)))),r=r.return}E.length!==0&&t.push({event:n,listeners:E})}var SS=/\r\n?/g,yS=/\u0000|\uFFFD/g;function cv(t){return(typeof t=="string"?t:""+t).replace(SS,`
`).replace(yS,"")}function fv(t,n){return n=cv(n),cv(t)===n}function uu(){}function zt(t,n,r,o,c,d){switch(r){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Di(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Di(t,""+o);break;case"className":Ce(t,"class",o);break;case"tabIndex":Ce(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ce(t,r,o);break;case"style":dp(t,o,d);break;case"data":if(n!=="object"){Ce(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||r!=="href")){t.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=vl(""+o),t.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(r==="formAction"?(n!=="input"&&zt(t,n,"name",c.name,c,null),zt(t,n,"formEncType",c.formEncType,c,null),zt(t,n,"formMethod",c.formMethod,c,null),zt(t,n,"formTarget",c.formTarget,c,null)):(zt(t,n,"encType",c.encType,c,null),zt(t,n,"method",c.method,c,null),zt(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=vl(""+o),t.setAttribute(r,o);break;case"onClick":o!=null&&(t.onclick=uu);break;case"onScroll":o!=null&&gt("scroll",t);break;case"onScrollEnd":o!=null&&gt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=r}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}r=vl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""+o):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":o===!0?t.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,o):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(r,o):t.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(r):t.setAttribute(r,o);break;case"popover":gt("beforetoggle",t),gt("toggle",t),be(t,"popover",o);break;case"xlinkActuate":Ue(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ue(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ue(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ue(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ue(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ue(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ue(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ue(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ue(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":be(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Q_.get(r)||r,be(t,r,o))}}function $f(t,n,r,o,c,d){switch(r){case"style":dp(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=r}}break;case"children":typeof o=="string"?Di(t,o):(typeof o=="number"||typeof o=="bigint")&&Di(t,""+o);break;case"onScroll":o!=null&&gt("scroll",t);break;case"onScrollEnd":o!=null&&gt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=uu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!gl.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(c=r.endsWith("Capture"),n=r.slice(2,c?r.length-7:void 0),d=t[Tn]||null,d=d!=null?d[r]:null,typeof d=="function"&&t.removeEventListener(n,d,c),typeof o=="function")){typeof d!="function"&&d!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(n,o,c);break e}r in t?t[r]=o:o===!0?t.setAttribute(r,""):be(t,r,o)}}}function wn(t,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",t),gt("load",t);var o=!1,c=!1,d;for(d in r)if(r.hasOwnProperty(d)){var E=r[d];if(E!=null)switch(d){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:zt(t,n,d,E,r,null)}}c&&zt(t,n,"srcSet",r.srcSet,r,null),o&&zt(t,n,"src",r.src,r,null);return;case"input":gt("invalid",t);var T=d=E=c=null,P=null,$=null;for(o in r)if(r.hasOwnProperty(o)){var ce=r[o];if(ce!=null)switch(o){case"name":c=ce;break;case"type":E=ce;break;case"checked":P=ce;break;case"defaultChecked":$=ce;break;case"value":d=ce;break;case"defaultValue":T=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(s(137,n));break;default:zt(t,n,o,ce,r,null)}}Vt(t,d,T,P,$,E,c,!1),$t(t);return;case"select":gt("invalid",t),o=E=d=null;for(c in r)if(r.hasOwnProperty(c)&&(T=r[c],T!=null))switch(c){case"value":d=T;break;case"defaultValue":E=T;break;case"multiple":o=T;default:zt(t,n,c,T,r,null)}n=d,r=E,t.multiple=!!o,n!=null?hn(t,!!o,n,!1):r!=null&&hn(t,!!o,r,!0);return;case"textarea":gt("invalid",t),d=c=o=null;for(E in r)if(r.hasOwnProperty(E)&&(T=r[E],T!=null))switch(E){case"value":o=T;break;case"defaultValue":c=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:zt(t,n,E,T,r,null)}bn(t,o,c,d),$t(t);return;case"option":for(P in r)if(r.hasOwnProperty(P)&&(o=r[P],o!=null))switch(P){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:zt(t,n,P,o,r,null)}return;case"dialog":gt("beforetoggle",t),gt("toggle",t),gt("cancel",t),gt("close",t);break;case"iframe":case"object":gt("load",t);break;case"video":case"audio":for(o=0;o<Do.length;o++)gt(Do[o],t);break;case"image":gt("error",t),gt("load",t);break;case"details":gt("toggle",t);break;case"embed":case"source":case"link":gt("error",t),gt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in r)if(r.hasOwnProperty($)&&(o=r[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:zt(t,n,$,o,r,null)}return;default:if(pc(n)){for(ce in r)r.hasOwnProperty(ce)&&(o=r[ce],o!==void 0&&$f(t,n,ce,o,r,void 0));return}}for(T in r)r.hasOwnProperty(T)&&(o=r[T],o!=null&&zt(t,n,T,o,r,null))}function ES(t,n,r,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,E=null,T=null,P=null,$=null,ce=null;for(ie in r){var _e=r[ie];if(r.hasOwnProperty(ie)&&_e!=null)switch(ie){case"checked":break;case"value":break;case"defaultValue":P=_e;default:o.hasOwnProperty(ie)||zt(t,n,ie,null,o,_e)}}for(var ne in o){var ie=o[ne];if(_e=r[ne],o.hasOwnProperty(ne)&&(ie!=null||_e!=null))switch(ne){case"type":d=ie;break;case"name":c=ie;break;case"checked":$=ie;break;case"defaultChecked":ce=ie;break;case"value":E=ie;break;case"defaultValue":T=ie;break;case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(s(137,n));break;default:ie!==_e&&zt(t,n,ne,ie,o,_e)}}Xi(t,E,T,P,$,ce,d,c);return;case"select":ie=E=T=ne=null;for(d in r)if(P=r[d],r.hasOwnProperty(d)&&P!=null)switch(d){case"value":break;case"multiple":ie=P;default:o.hasOwnProperty(d)||zt(t,n,d,null,o,P)}for(c in o)if(d=o[c],P=r[c],o.hasOwnProperty(c)&&(d!=null||P!=null))switch(c){case"value":ne=d;break;case"defaultValue":T=d;break;case"multiple":E=d;default:d!==P&&zt(t,n,c,d,o,P)}n=T,r=E,o=ie,ne!=null?hn(t,!!r,ne,!1):!!o!=!!r&&(n!=null?hn(t,!!r,n,!0):hn(t,!!r,r?[]:"",!1));return;case"textarea":ie=ne=null;for(T in r)if(c=r[T],r.hasOwnProperty(T)&&c!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:zt(t,n,T,null,o,c)}for(E in o)if(c=o[E],d=r[E],o.hasOwnProperty(E)&&(c!=null||d!=null))switch(E){case"value":ne=c;break;case"defaultValue":ie=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==d&&zt(t,n,E,c,o,d)}_n(t,ne,ie);return;case"option":for(var tt in r)if(ne=r[tt],r.hasOwnProperty(tt)&&ne!=null&&!o.hasOwnProperty(tt))switch(tt){case"selected":t.selected=!1;break;default:zt(t,n,tt,null,o,ne)}for(P in o)if(ne=o[P],ie=r[P],o.hasOwnProperty(P)&&ne!==ie&&(ne!=null||ie!=null))switch(P){case"selected":t.selected=ne&&typeof ne!="function"&&typeof ne!="symbol";break;default:zt(t,n,P,ne,o,ie)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ze in r)ne=r[Ze],r.hasOwnProperty(Ze)&&ne!=null&&!o.hasOwnProperty(Ze)&&zt(t,n,Ze,null,o,ne);for($ in o)if(ne=o[$],ie=r[$],o.hasOwnProperty($)&&ne!==ie&&(ne!=null||ie!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(s(137,n));break;default:zt(t,n,$,ne,o,ie)}return;default:if(pc(n)){for(var It in r)ne=r[It],r.hasOwnProperty(It)&&ne!==void 0&&!o.hasOwnProperty(It)&&$f(t,n,It,void 0,o,ne);for(ce in o)ne=o[ce],ie=r[ce],!o.hasOwnProperty(ce)||ne===ie||ne===void 0&&ie===void 0||$f(t,n,ce,ne,o,ie);return}}for(var W in r)ne=r[W],r.hasOwnProperty(W)&&ne!=null&&!o.hasOwnProperty(W)&&zt(t,n,W,null,o,ne);for(_e in o)ne=o[_e],ie=r[_e],!o.hasOwnProperty(_e)||ne===ie||ne==null&&ie==null||zt(t,n,_e,ne,o,ie)}var eh=null,th=null;function cu(t){return t.nodeType===9?t:t.ownerDocument}function hv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function dv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function nh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ih=null;function MS(){var t=window.event;return t&&t.type==="popstate"?t===ih?!1:(ih=t,!0):(ih=null,!1)}var pv=typeof setTimeout=="function"?setTimeout:void 0,TS=typeof clearTimeout=="function"?clearTimeout:void 0,mv=typeof Promise=="function"?Promise:void 0,bS=typeof queueMicrotask=="function"?queueMicrotask:typeof mv<"u"?function(t){return mv.resolve(null).then(t).catch(AS)}:pv;function AS(t){setTimeout(function(){throw t})}function Ga(t){return t==="head"}function gv(t,n){var r=n,o=0,c=0;do{var d=r.nextSibling;if(t.removeChild(r),d&&d.nodeType===8)if(r=d.data,r==="/$"){if(0<o&&8>o){r=o;var E=t.ownerDocument;if(r&1&&No(E.documentElement),r&2&&No(E.body),r&4)for(r=E.head,No(r),E=r.firstChild;E;){var T=E.nextSibling,P=E.nodeName;E[ya]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&E.rel.toLowerCase()==="stylesheet"||r.removeChild(E),E=T}}if(c===0){t.removeChild(d),Go(n);return}c--}else r==="$"||r==="$?"||r==="$!"?c++:o=r.charCodeAt(0)-48;else o=0;r=d}while(r);Go(n)}function ah(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":ah(r),Ea(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function RS(t,n,r,o){for(;t.nodeType===1;){var c=r;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ya])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Ei(t.nextSibling),t===null)break}return null}function wS(t,n,r){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=Ei(t.nextSibling),t===null))return null;return t}function rh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function CS(t,n){var r=t.ownerDocument;if(t.data!=="$?"||r.readyState==="complete")n();else{var o=function(){n(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Ei(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var sh=null;function vv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return t;n--}else r==="/$"&&n++}t=t.previousSibling}return null}function _v(t,n,r){switch(n=cu(r),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function No(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ea(t)}var gi=new Map,xv=new Set;function fu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ra=K.d;K.d={f:US,r:DS,D:LS,C:NS,L:OS,m:PS,X:zS,S:BS,M:IS};function US(){var t=ra.f(),n=nu();return t||n}function DS(t){var n=Vi(t);n!==null&&n.tag===5&&n.type==="form"?Fm(n):ra.r(t)}var vs=typeof document>"u"?null:document;function Sv(t,n,r){var o=vs;if(o&&typeof n=="string"&&n){var c=jt(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof r=="string"&&(c+='[crossorigin="'+r+'"]'),xv.has(c)||(xv.add(c),t={rel:t,crossOrigin:r,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),wn(n,"link",t),sn(n),o.head.appendChild(n)))}}function LS(t){ra.D(t),Sv("dns-prefetch",t,null)}function NS(t,n){ra.C(t,n),Sv("preconnect",t,n)}function OS(t,n,r){ra.L(t,n,r);var o=vs;if(o&&t&&n){var c='link[rel="preload"][as="'+jt(n)+'"]';n==="image"&&r&&r.imageSrcSet?(c+='[imagesrcset="'+jt(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(c+='[imagesizes="'+jt(r.imageSizes)+'"]')):c+='[href="'+jt(t)+'"]';var d=c;switch(n){case"style":d=_s(t);break;case"script":d=xs(t)}gi.has(d)||(t=g({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:t,as:n},r),gi.set(d,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(Oo(d))||n==="script"&&o.querySelector(Po(d))||(n=o.createElement("link"),wn(n,"link",t),sn(n),o.head.appendChild(n)))}}function PS(t,n){ra.m(t,n);var r=vs;if(r&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+jt(o)+'"][href="'+jt(t)+'"]',d=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=xs(t)}if(!gi.has(d)&&(t=g({rel:"modulepreload",href:t},n),gi.set(d,t),r.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Po(d)))return}o=r.createElement("link"),wn(o,"link",t),sn(o),r.head.appendChild(o)}}}function BS(t,n,r){ra.S(t,n,r);var o=vs;if(o&&t){var c=Ma(o).hoistableStyles,d=_s(t);n=n||"default";var E=c.get(d);if(!E){var T={loading:0,preload:null};if(E=o.querySelector(Oo(d)))T.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},r),(r=gi.get(d))&&oh(t,r);var P=E=o.createElement("link");sn(P),wn(P,"link",t),P._p=new Promise(function($,ce){P.onload=$,P.onerror=ce}),P.addEventListener("load",function(){T.loading|=1}),P.addEventListener("error",function(){T.loading|=2}),T.loading|=4,hu(E,n,o)}E={type:"stylesheet",instance:E,count:1,state:T},c.set(d,E)}}}function zS(t,n){ra.X(t,n);var r=vs;if(r&&t){var o=Ma(r).hoistableScripts,c=xs(t),d=o.get(c);d||(d=r.querySelector(Po(c)),d||(t=g({src:t,async:!0},n),(n=gi.get(c))&&lh(t,n),d=r.createElement("script"),sn(d),wn(d,"link",t),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function IS(t,n){ra.M(t,n);var r=vs;if(r&&t){var o=Ma(r).hoistableScripts,c=xs(t),d=o.get(c);d||(d=r.querySelector(Po(c)),d||(t=g({src:t,async:!0,type:"module"},n),(n=gi.get(c))&&lh(t,n),d=r.createElement("script"),sn(d),wn(d,"link",t),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function yv(t,n,r,o){var c=(c=ye.current)?fu(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=_s(r.href),r=Ma(c).hoistableStyles,o=r.get(n),o||(o={type:"style",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=_s(r.href);var d=Ma(c).hoistableStyles,E=d.get(t);if(E||(c=c.ownerDocument||c,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,E),(d=c.querySelector(Oo(t)))&&!d._p&&(E.instance=d,E.state.loading=5),gi.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},gi.set(t,r),d||FS(c,t,r,E.state))),n&&o===null)throw Error(s(528,""));return E}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=xs(r),r=Ma(c).hoistableScripts,o=r.get(n),o||(o={type:"script",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function _s(t){return'href="'+jt(t)+'"'}function Oo(t){return'link[rel="stylesheet"]['+t+"]"}function Ev(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function FS(t,n,r,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),wn(n,"link",r),sn(n),t.head.appendChild(n))}function xs(t){return'[src="'+jt(t)+'"]'}function Po(t){return"script[async]"+t}function Mv(t,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+jt(r.href)+'"]');if(o)return n.instance=o,sn(o),o;var c=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),sn(o),wn(o,"style",c),hu(o,r.precedence,t),n.instance=o;case"stylesheet":c=_s(r.href);var d=t.querySelector(Oo(c));if(d)return n.state.loading|=4,n.instance=d,sn(d),d;o=Ev(r),(c=gi.get(c))&&oh(o,c),d=(t.ownerDocument||t).createElement("link"),sn(d);var E=d;return E._p=new Promise(function(T,P){E.onload=T,E.onerror=P}),wn(d,"link",o),n.state.loading|=4,hu(d,r.precedence,t),n.instance=d;case"script":return d=xs(r.src),(c=t.querySelector(Po(d)))?(n.instance=c,sn(c),c):(o=r,(c=gi.get(d))&&(o=g({},r),lh(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),sn(c),wn(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,hu(o,r.precedence,t));return n.instance}function hu(t,n,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,d=c,E=0;E<o.length;E++){var T=o[E];if(T.dataset.precedence===n)d=T;else if(d!==c)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(t,n.firstChild))}function oh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function lh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var du=null;function Tv(t,n,r){if(du===null){var o=new Map,c=du=new Map;c.set(r,o)}else c=du,o=c.get(r),o||(o=new Map,c.set(r,o));if(o.has(t))return o;for(o.set(t,null),r=r.getElementsByTagName(t),c=0;c<r.length;c++){var d=r[c];if(!(d[ya]||d[fn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var E=d.getAttribute(n)||"";E=t+E;var T=o.get(E);T?T.push(d):o.set(E,[d])}}return o}function bv(t,n,r){t=t.ownerDocument||t,t.head.insertBefore(r,n==="title"?t.querySelector("head > title"):null)}function HS(t,n,r){if(r===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Av(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Bo=null;function GS(){}function VS(t,n,r){if(Bo===null)throw Error(s(475));var o=Bo;if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=_s(r.href),d=t.querySelector(Oo(c));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=pu.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=d,sn(d);return}d=t.ownerDocument||t,r=Ev(r),(c=gi.get(c))&&oh(r,c),d=d.createElement("link"),sn(d);var E=d;E._p=new Promise(function(T,P){E.onload=T,E.onerror=P}),wn(d,"link",r),n.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=pu.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function kS(){if(Bo===null)throw Error(s(475));var t=Bo;return t.stylesheets&&t.count===0&&uh(t,t.stylesheets),0<t.count?function(n){var r=setTimeout(function(){if(t.stylesheets&&uh(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(r)}}:null}function pu(){if(this.count--,this.count===0){if(this.stylesheets)uh(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var mu=null;function uh(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,mu=new Map,n.forEach(XS,t),mu=null,pu.call(t))}function XS(t,n){if(!(n.state.loading&4)){var r=mu.get(t);if(r)var o=r.get(null);else{r=new Map,mu.set(t,r);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var E=c[d];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(r.set(E.dataset.precedence,E),o=E)}o&&r.set(null,o)}c=n.instance,E=c.getAttribute("data-precedence"),d=r.get(E)||o,d===o&&r.set(null,c),r.set(E,c),this.count++,o=pu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),d?d.parentNode.insertBefore(c,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var zo={$$typeof:C,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function WS(t,n,r,o,c,d,E,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=le(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=le(0),this.hiddenUpdates=le(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Rv(t,n,r,o,c,d,E,T,P,$,ce,_e){return t=new WS(t,n,r,E,T,P,$,_e),n=1,d===!0&&(n|=24),d=ei(3,null,null,n),t.current=d,d.stateNode=t,n=kc(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:r,cache:n},qc(d),t}function wv(t){return t?(t=Kr,t):Kr}function Cv(t,n,r,o,c,d){c=wv(c),o.context===null?o.context=c:o.pendingContext=c,o=wa(n),o.payload={element:r},d=d===void 0?null:d,d!==null&&(o.callback=d),r=Ca(t,o,n),r!==null&&(ri(r,t,n),ho(r,t,n))}function Uv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<n?r:n}}function ch(t,n){Uv(t,n),(t=t.alternate)&&Uv(t,n)}function Dv(t){if(t.tag===13){var n=Zr(t,67108864);n!==null&&ri(n,t,67108864),ch(t,67108864)}}var gu=!0;function jS(t,n,r,o){var c=z.T;z.T=null;var d=K.p;try{K.p=2,fh(t,n,r,o)}finally{K.p=d,z.T=c}}function qS(t,n,r,o){var c=z.T;z.T=null;var d=K.p;try{K.p=8,fh(t,n,r,o)}finally{K.p=d,z.T=c}}function fh(t,n,r,o){if(gu){var c=hh(o);if(c===null)Jf(t,n,o,vu,r),Nv(t,o);else if(ZS(c,t,n,r,o))o.stopPropagation();else if(Nv(t,o),n&4&&-1<YS.indexOf(t)){for(;c!==null;){var d=Vi(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var E=Be(d.pendingLanes);if(E!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;E;){var P=1<<31-Ge(E);T.entanglements[1]|=P,E&=~P}Bi(d),(Ut&6)===0&&(eu=it()+500,Uo(0))}}break;case 13:T=Zr(d,2),T!==null&&ri(T,d,2),nu(),ch(d,2)}if(d=hh(o),d===null&&Jf(t,n,o,vu,r),d===c)break;c=d}c!==null&&o.stopPropagation()}else Jf(t,n,o,null,r)}}function hh(t){return t=gc(t),dh(t)}var vu=null;function dh(t){if(vu=null,t=Gi(t),t!==null){var n=u(t);if(n===null)t=null;else{var r=n.tag;if(r===13){if(t=f(n),t!==null)return t;t=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return vu=t,null}function Lv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(We()){case Ot:return 2;case Ve:return 8;case L:case b:return 32;case te:return 268435456;default:return 32}default:return 32}}var ph=!1,Va=null,ka=null,Xa=null,Io=new Map,Fo=new Map,Wa=[],YS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Nv(t,n){switch(t){case"focusin":case"focusout":Va=null;break;case"dragenter":case"dragleave":ka=null;break;case"mouseover":case"mouseout":Xa=null;break;case"pointerover":case"pointerout":Io.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(n.pointerId)}}function Ho(t,n,r,o,c,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:r,eventSystemFlags:o,nativeEvent:d,targetContainers:[c]},n!==null&&(n=Vi(n),n!==null&&Dv(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function ZS(t,n,r,o,c){switch(n){case"focusin":return Va=Ho(Va,t,n,r,o,c),!0;case"dragenter":return ka=Ho(ka,t,n,r,o,c),!0;case"mouseover":return Xa=Ho(Xa,t,n,r,o,c),!0;case"pointerover":var d=c.pointerId;return Io.set(d,Ho(Io.get(d)||null,t,n,r,o,c)),!0;case"gotpointercapture":return d=c.pointerId,Fo.set(d,Ho(Fo.get(d)||null,t,n,r,o,c)),!0}return!1}function Ov(t){var n=Gi(t.target);if(n!==null){var r=u(n);if(r!==null){if(n=r.tag,n===13){if(n=f(r),n!==null){t.blockedOn=n,Jn(t.priority,function(){if(r.tag===13){var o=ai();o=Wt(o);var c=Zr(r,o);c!==null&&ri(c,r,o),ch(r,o)}});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _u(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var r=hh(t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);mc=o,r.target.dispatchEvent(o),mc=null}else return n=Vi(r),n!==null&&Dv(n),t.blockedOn=r,!1;n.shift()}return!0}function Pv(t,n,r){_u(t)&&r.delete(n)}function KS(){ph=!1,Va!==null&&_u(Va)&&(Va=null),ka!==null&&_u(ka)&&(ka=null),Xa!==null&&_u(Xa)&&(Xa=null),Io.forEach(Pv),Fo.forEach(Pv)}function xu(t,n){t.blockedOn===n&&(t.blockedOn=null,ph||(ph=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,KS)))}var Su=null;function Bv(t){Su!==t&&(Su=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Su===t&&(Su=null);for(var n=0;n<t.length;n+=3){var r=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(dh(o||r)===null)continue;break}var d=Vi(r);d!==null&&(t.splice(n,3),n-=3,df(d,{pending:!0,data:c,method:r.method,action:o},o,c))}}))}function Go(t){function n(P){return xu(P,t)}Va!==null&&xu(Va,t),ka!==null&&xu(ka,t),Xa!==null&&xu(Xa,t),Io.forEach(n),Fo.forEach(n);for(var r=0;r<Wa.length;r++){var o=Wa[r];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Wa.length&&(r=Wa[0],r.blockedOn===null);)Ov(r),r.blockedOn===null&&Wa.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var c=r[o],d=r[o+1],E=c[Tn]||null;if(typeof d=="function")E||Bv(r);else if(E){var T=null;if(d&&d.hasAttribute("formAction")){if(c=d,E=d[Tn]||null)T=E.formAction;else if(dh(c)!==null)continue}else T=E.action;typeof T=="function"?r[o+1]=T:(r.splice(o,3),o-=3),Bv(r)}}}function mh(t){this._internalRoot=t}yu.prototype.render=mh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var r=n.current,o=ai();Cv(r,o,t,n,null,null)},yu.prototype.unmount=mh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Cv(t.current,2,null,t,null,null),nu(),n[kn]=null}};function yu(t){this._internalRoot=t}yu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Tt();t={blockedOn:null,target:t,priority:n};for(var r=0;r<Wa.length&&n!==0&&n<Wa[r].priority;r++);Wa.splice(r,0,t),r===0&&Ov(t)}};var zv=e.version;if(zv!=="19.1.0")throw Error(s(527,zv,"19.1.0"));K.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var QS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eu.isDisabled&&Eu.supportsFiber)try{fe=Eu.inject(QS),Pe=Eu}catch{}}return ko.createRoot=function(t,n){if(!l(t))throw Error(s(299));var r=!1,o="",c=$m,d=eg,E=tg,T=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(E=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=Rv(t,1,!1,null,null,r,o,c,d,E,T,null),t[kn]=n.current,Qf(t),new mh(n)},ko.hydrateRoot=function(t,n,r){if(!l(t))throw Error(s(299));var o=!1,c="",d=$m,E=eg,T=tg,P=null,$=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(E=r.onCaughtError),r.onRecoverableError!==void 0&&(T=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(P=r.unstable_transitionCallbacks),r.formState!==void 0&&($=r.formState)),n=Rv(t,1,!0,n,r??null,o,c,d,E,T,P,$),n.context=wv(null),r=n.current,o=ai(),o=Wt(o),c=wa(o),c.callback=null,Ca(r,c,o),r=o,n.current.lanes=r,ve(n,r),Bi(n),t[kn]=n.current,Qf(t),new yu(n)},ko.version="19.1.0",ko}var qv;function oy(){if(qv)return _h.exports;qv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),_h.exports=sy(),_h.exports}var ly=oy(),Xo={},Yv;function uy(){if(Yv)return Xo;Yv=1,Object.defineProperty(Xo,"__esModule",{value:!0}),Xo.parse=f,Xo.serialize=m;const a=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,u=(()=>{const x=function(){};return x.prototype=Object.create(null),x})();function f(x,y){const M=new u,A=x.length;if(A<2)return M;const S=(y==null?void 0:y.decode)||g;let v=0;do{const N=x.indexOf("=",v);if(N===-1)break;const C=x.indexOf(";",v),U=C===-1?A:C;if(N>U){v=x.lastIndexOf(";",N-1)+1;continue}const H=h(x,v,N),k=p(x,N,H),I=x.slice(H,k);if(M[I]===void 0){let j=h(x,N+1,U),D=p(x,U,j);const w=S(x.slice(j,D));M[I]=w}v=U+1}while(v<A);return M}function h(x,y,M){do{const A=x.charCodeAt(y);if(A!==32&&A!==9)return y}while(++y<M);return M}function p(x,y,M){for(;y>M;){const A=x.charCodeAt(--y);if(A!==32&&A!==9)return y+1}return M}function m(x,y,M){const A=(M==null?void 0:M.encode)||encodeURIComponent;if(!a.test(x))throw new TypeError(`argument name is invalid: ${x}`);const S=A(y);if(!e.test(S))throw new TypeError(`argument val is invalid: ${y}`);let v=x+"="+S;if(!M)return v;if(M.maxAge!==void 0){if(!Number.isInteger(M.maxAge))throw new TypeError(`option maxAge is invalid: ${M.maxAge}`);v+="; Max-Age="+M.maxAge}if(M.domain){if(!i.test(M.domain))throw new TypeError(`option domain is invalid: ${M.domain}`);v+="; Domain="+M.domain}if(M.path){if(!s.test(M.path))throw new TypeError(`option path is invalid: ${M.path}`);v+="; Path="+M.path}if(M.expires){if(!_(M.expires)||!Number.isFinite(M.expires.valueOf()))throw new TypeError(`option expires is invalid: ${M.expires}`);v+="; Expires="+M.expires.toUTCString()}if(M.httpOnly&&(v+="; HttpOnly"),M.secure&&(v+="; Secure"),M.partitioned&&(v+="; Partitioned"),M.priority)switch(typeof M.priority=="string"?M.priority.toLowerCase():void 0){case"low":v+="; Priority=Low";break;case"medium":v+="; Priority=Medium";break;case"high":v+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${M.priority}`)}if(M.sameSite)switch(typeof M.sameSite=="string"?M.sameSite.toLowerCase():M.sameSite){case!0:case"strict":v+="; SameSite=Strict";break;case"lax":v+="; SameSite=Lax";break;case"none":v+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${M.sameSite}`)}return v}function g(x){if(x.indexOf("%")===-1)return x;try{return decodeURIComponent(x)}catch{return x}}function _(x){return l.call(x)==="[object Date]"}return Xo}uy();var Zv="popstate";function cy(a={}){function e(l,u){let{pathname:f="/",search:h="",hash:p=""}=Hr(l.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),nd("",{pathname:f,search:h,hash:p},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function i(l,u){let f=l.document.querySelector("base"),h="";if(f&&f.getAttribute("href")){let p=l.location.href,m=p.indexOf("#");h=m===-1?p:p.slice(0,m)}return h+"#"+(typeof u=="string"?u:tl(u))}function s(l,u){Ci(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(u)})`)}return hy(e,i,s,a)}function Jt(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function Ci(a,e){if(!a){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function fy(){return Math.random().toString(36).substring(2,10)}function Kv(a,e){return{usr:a.state,key:a.key,idx:e}}function nd(a,e,i=null,s){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof e=="string"?Hr(e):e,state:i,key:e&&e.key||s||fy()}}function tl({pathname:a="/",search:e="",hash:i=""}){return e&&e!=="?"&&(a+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(a+=i.charAt(0)==="#"?i:"#"+i),a}function Hr(a){let e={};if(a){let i=a.indexOf("#");i>=0&&(e.hash=a.substring(i),a=a.substring(0,i));let s=a.indexOf("?");s>=0&&(e.search=a.substring(s),a=a.substring(0,s)),a&&(e.pathname=a)}return e}function hy(a,e,i,s={}){let{window:l=document.defaultView,v5Compat:u=!1}=s,f=l.history,h="POP",p=null,m=g();m==null&&(m=0,f.replaceState({...f.state,idx:m},""));function g(){return(f.state||{idx:null}).idx}function _(){h="POP";let S=g(),v=S==null?null:S-m;m=S,p&&p({action:h,location:A.location,delta:v})}function x(S,v){h="PUSH";let N=nd(A.location,S,v);i&&i(N,S),m=g()+1;let C=Kv(N,m),U=A.createHref(N);try{f.pushState(C,"",U)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;l.location.assign(U)}u&&p&&p({action:h,location:A.location,delta:1})}function y(S,v){h="REPLACE";let N=nd(A.location,S,v);i&&i(N,S),m=g();let C=Kv(N,m),U=A.createHref(N);f.replaceState(C,"",U),u&&p&&p({action:h,location:A.location,delta:0})}function M(S){let v=l.location.origin!=="null"?l.location.origin:l.location.href,N=typeof S=="string"?S:tl(S);return N=N.replace(/ $/,"%20"),Jt(v,`No window.location.(origin|href) available to create URL for href: ${N}`),new URL(N,v)}let A={get action(){return h},get location(){return a(l,f)},listen(S){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(Zv,_),p=S,()=>{l.removeEventListener(Zv,_),p=null}},createHref(S){return e(l,S)},createURL:M,encodeLocation(S){let v=M(S);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:x,replace:y,go(S){return f.go(S)}};return A}function e_(a,e,i="/"){return dy(a,e,i,!1)}function dy(a,e,i,s){let l=typeof e=="string"?Hr(e):e,u=ga(l.pathname||"/",i);if(u==null)return null;let f=t_(a);py(f);let h=null;for(let p=0;h==null&&p<f.length;++p){let m=by(u);h=My(f[p],m,s)}return h}function t_(a,e=[],i=[],s=""){let l=(u,f,h)=>{let p={relativePath:h===void 0?u.path||"":h,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};p.relativePath.startsWith("/")&&(Jt(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let m=pa([s,p.relativePath]),g=i.concat(p);u.children&&u.children.length>0&&(Jt(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),t_(u.children,e,g,m)),!(u.path==null&&!u.index)&&e.push({path:m,score:yy(m,u.index),routesMeta:g})};return a.forEach((u,f)=>{var h;if(u.path===""||!((h=u.path)!=null&&h.includes("?")))l(u,f);else for(let p of n_(u.path))l(u,f,p)}),e}function n_(a){let e=a.split("/");if(e.length===0)return[];let[i,...s]=e,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(s.length===0)return l?[u,""]:[u];let f=n_(s.join("/")),h=[];return h.push(...f.map(p=>p===""?u:[u,p].join("/"))),l&&h.push(...f),h.map(p=>a.startsWith("/")&&p===""?"/":p)}function py(a){a.sort((e,i)=>e.score!==i.score?i.score-e.score:Ey(e.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var my=/^:[\w-]+$/,gy=3,vy=2,_y=1,xy=10,Sy=-2,Qv=a=>a==="*";function yy(a,e){let i=a.split("/"),s=i.length;return i.some(Qv)&&(s+=Sy),e&&(s+=vy),i.filter(l=>!Qv(l)).reduce((l,u)=>l+(my.test(u)?gy:u===""?_y:xy),s)}function Ey(a,e){return a.length===e.length&&a.slice(0,-1).every((s,l)=>s===e[l])?a[a.length-1]-e[e.length-1]:0}function My(a,e,i=!1){let{routesMeta:s}=a,l={},u="/",f=[];for(let h=0;h<s.length;++h){let p=s[h],m=h===s.length-1,g=u==="/"?e:e.slice(u.length)||"/",_=nc({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),x=p.route;if(!_&&m&&i&&!s[s.length-1].route.index&&(_=nc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!_)return null;Object.assign(l,_.params),f.push({params:l,pathname:pa([u,_.pathname]),pathnameBase:Cy(pa([u,_.pathnameBase])),route:x}),_.pathnameBase!=="/"&&(u=pa([u,_.pathnameBase]))}return f}function nc(a,e){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[i,s]=Ty(a.path,a.caseSensitive,a.end),l=e.match(i);if(!l)return null;let u=l[0],f=u.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:s.reduce((m,{paramName:g,isOptional:_},x)=>{if(g==="*"){let M=h[x]||"";f=u.slice(0,u.length-M.length).replace(/(.)\/+$/,"$1")}const y=h[x];return _&&!y?m[g]=void 0:m[g]=(y||"").replace(/%2F/g,"/"),m},{}),pathname:u,pathnameBase:f,pattern:a}}function Ty(a,e=!1,i=!0){Ci(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let s=[],l="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,p)=>(s.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(s.push({paramName:"*"}),l+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":a!==""&&a!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function by(a){try{return a.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ci(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),a}}function ga(a,e){if(e==="/")return a;if(!a.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,s=a.charAt(i);return s&&s!=="/"?null:a.slice(i)||"/"}function Ay(a,e="/"){let{pathname:i,search:s="",hash:l=""}=typeof a=="string"?Hr(a):a;return{pathname:i?i.startsWith("/")?i:Ry(i,e):e,search:Uy(s),hash:Dy(l)}}function Ry(a,e){let i=e.replace(/\/+$/,"").split("/");return a.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Eh(a,e,i,s){return`Cannot include a '${a}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function wy(a){return a.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function i_(a){let e=wy(a);return e.map((i,s)=>s===e.length-1?i.pathname:i.pathnameBase)}function a_(a,e,i,s=!1){let l;typeof a=="string"?l=Hr(a):(l={...a},Jt(!l.pathname||!l.pathname.includes("?"),Eh("?","pathname","search",l)),Jt(!l.pathname||!l.pathname.includes("#"),Eh("#","pathname","hash",l)),Jt(!l.search||!l.search.includes("#"),Eh("#","search","hash",l)));let u=a===""||l.pathname==="",f=u?"/":l.pathname,h;if(f==null)h=i;else{let _=e.length-1;if(!s&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),_-=1;l.pathname=x.join("/")}h=_>=0?e[_]:"/"}let p=Ay(l,h),m=f&&f!=="/"&&f.endsWith("/"),g=(u||f===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}var pa=a=>a.join("/").replace(/\/\/+/g,"/"),Cy=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),Uy=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Dy=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function Ly(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var r_=["POST","PUT","PATCH","DELETE"];new Set(r_);var Ny=["GET",...r_];new Set(Ny);var js=he.createContext(null);js.displayName="DataRouter";var lc=he.createContext(null);lc.displayName="DataRouterState";var s_=he.createContext({isTransitioning:!1});s_.displayName="ViewTransition";var Oy=he.createContext(new Map);Oy.displayName="Fetchers";var Py=he.createContext(null);Py.displayName="Await";var Hi=he.createContext(null);Hi.displayName="Navigation";var al=he.createContext(null);al.displayName="Location";var xa=he.createContext({outlet:null,matches:[],isDataRoute:!1});xa.displayName="Route";var Zd=he.createContext(null);Zd.displayName="RouteError";function By(a,{relative:e}={}){Jt(rl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=he.useContext(Hi),{hash:l,pathname:u,search:f}=sl(a,{relative:e}),h=u;return i!=="/"&&(h=u==="/"?i:pa([i,u])),s.createHref({pathname:h,search:f,hash:l})}function rl(){return he.useContext(al)!=null}function rr(){return Jt(rl(),"useLocation() may be used only in the context of a <Router> component."),he.useContext(al).location}var o_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function l_(a){he.useContext(Hi).static||he.useLayoutEffect(a)}function zy(){let{isDataRoute:a}=he.useContext(xa);return a?Ky():Iy()}function Iy(){Jt(rl(),"useNavigate() may be used only in the context of a <Router> component.");let a=he.useContext(js),{basename:e,navigator:i}=he.useContext(Hi),{matches:s}=he.useContext(xa),{pathname:l}=rr(),u=JSON.stringify(i_(s)),f=he.useRef(!1);return l_(()=>{f.current=!0}),he.useCallback((p,m={})=>{if(Ci(f.current,o_),!f.current)return;if(typeof p=="number"){i.go(p);return}let g=a_(p,JSON.parse(u),l,m.relative==="path");a==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:pa([e,g.pathname])),(m.replace?i.replace:i.push)(g,m.state,m)},[e,i,u,l,a])}he.createContext(null);function sl(a,{relative:e}={}){let{matches:i}=he.useContext(xa),{pathname:s}=rr(),l=JSON.stringify(i_(i));return he.useMemo(()=>a_(a,JSON.parse(l),s,e==="path"),[a,l,s,e])}function Fy(a,e){return u_(a,e)}function u_(a,e,i,s){var N;Jt(rl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:u}=he.useContext(Hi),{matches:f}=he.useContext(xa),h=f[f.length-1],p=h?h.params:{},m=h?h.pathname:"/",g=h?h.pathnameBase:"/",_=h&&h.route;{let C=_&&_.path||"";c_(m,!_||C.endsWith("*")||C.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C==="/"?"*":`${C}/*`}">.`)}let x=rr(),y;if(e){let C=typeof e=="string"?Hr(e):e;Jt(g==="/"||((N=C.pathname)==null?void 0:N.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${C.pathname}" was given in the \`location\` prop.`),y=C}else y=x;let M=y.pathname||"/",A=M;if(g!=="/"){let C=g.replace(/^\//,"").split("/");A="/"+M.replace(/^\//,"").split("/").slice(C.length).join("/")}let S=!u&&i&&i.matches&&i.matches.length>0?i.matches:e_(a,{pathname:A});Ci(_||S!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Ci(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=Xy(S&&S.map(C=>Object.assign({},C,{params:Object.assign({},p,C.params),pathname:pa([g,l.encodeLocation?l.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?g:pa([g,l.encodeLocation?l.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),f,i,s);return e&&v?he.createElement(al.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},v):v}function Hy(){let a=Zy(),e=Ly(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),i=a instanceof Error?a.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",a),f=he.createElement(he.Fragment,null,he.createElement("p",null,"💿 Hey developer 👋"),he.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",he.createElement("code",{style:u},"ErrorBoundary")," or"," ",he.createElement("code",{style:u},"errorElement")," prop on your route.")),he.createElement(he.Fragment,null,he.createElement("h2",null,"Unexpected Application Error!"),he.createElement("h3",{style:{fontStyle:"italic"}},e),i?he.createElement("pre",{style:l},i):null,f)}var Gy=he.createElement(Hy,null),Vy=class extends he.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,e){return e.location!==a.location||e.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:e.error,location:e.location,revalidation:a.revalidation||e.revalidation}}componentDidCatch(a,e){console.error("React Router caught the following error during render",a,e)}render(){return this.state.error!==void 0?he.createElement(xa.Provider,{value:this.props.routeContext},he.createElement(Zd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ky({routeContext:a,match:e,children:i}){let s=he.useContext(js);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),he.createElement(xa.Provider,{value:a},i)}function Xy(a,e=[],i=null,s=null){if(a==null){if(!i)return null;if(i.errors)a=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)a=i.matches;else return null}let l=a,u=i==null?void 0:i.errors;if(u!=null){let p=l.findIndex(m=>m.route.id&&(u==null?void 0:u[m.route.id])!==void 0);Jt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,p+1))}let f=!1,h=-1;if(i)for(let p=0;p<l.length;p++){let m=l[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=p),m.route.id){let{loaderData:g,errors:_}=i,x=m.route.loader&&!g.hasOwnProperty(m.route.id)&&(!_||_[m.route.id]===void 0);if(m.route.lazy||x){f=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((p,m,g)=>{let _,x=!1,y=null,M=null;i&&(_=u&&m.route.id?u[m.route.id]:void 0,y=m.route.errorElement||Gy,f&&(h<0&&g===0?(c_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,M=null):h===g&&(x=!0,M=m.route.hydrateFallbackElement||null)));let A=e.concat(l.slice(0,g+1)),S=()=>{let v;return _?v=y:x?v=M:m.route.Component?v=he.createElement(m.route.Component,null):m.route.element?v=m.route.element:v=p,he.createElement(ky,{match:m,routeContext:{outlet:p,matches:A,isDataRoute:i!=null},children:v})};return i&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?he.createElement(Vy,{location:i.location,revalidation:i.revalidation,component:y,error:_,children:S(),routeContext:{outlet:null,matches:A,isDataRoute:!0}}):S()},null)}function Kd(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Wy(a){let e=he.useContext(js);return Jt(e,Kd(a)),e}function jy(a){let e=he.useContext(lc);return Jt(e,Kd(a)),e}function qy(a){let e=he.useContext(xa);return Jt(e,Kd(a)),e}function Qd(a){let e=qy(a),i=e.matches[e.matches.length-1];return Jt(i.route.id,`${a} can only be used on routes that contain a unique "id"`),i.route.id}function Yy(){return Qd("useRouteId")}function Zy(){var s;let a=he.useContext(Zd),e=jy("useRouteError"),i=Qd("useRouteError");return a!==void 0?a:(s=e.errors)==null?void 0:s[i]}function Ky(){let{router:a}=Wy("useNavigate"),e=Qd("useNavigate"),i=he.useRef(!1);return l_(()=>{i.current=!0}),he.useCallback(async(l,u={})=>{Ci(i.current,o_),i.current&&(typeof l=="number"?a.navigate(l):await a.navigate(l,{fromRouteId:e,...u}))},[a,e])}var Jv={};function c_(a,e,i){!e&&!Jv[a]&&(Jv[a]=!0,Ci(!1,i))}he.memo(Qy);function Qy({routes:a,future:e,state:i}){return u_(a,void 0,i,e)}function Ps(a){Jt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Jy({basename:a="/",children:e=null,location:i,navigationType:s="POP",navigator:l,static:u=!1}){Jt(!rl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=a.replace(/^\/*/,"/"),h=he.useMemo(()=>({basename:f,navigator:l,static:u,future:{}}),[f,l,u]);typeof i=="string"&&(i=Hr(i));let{pathname:p="/",search:m="",hash:g="",state:_=null,key:x="default"}=i,y=he.useMemo(()=>{let M=ga(p,f);return M==null?null:{location:{pathname:M,search:m,hash:g,state:_,key:x},navigationType:s}},[f,p,m,g,_,x,s]);return Ci(y!=null,`<Router basename="${f}"> is not able to match the URL "${p}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:he.createElement(Hi.Provider,{value:h},he.createElement(al.Provider,{children:e,value:y}))}function $y({children:a,location:e}){return Fy(id(a),e)}function id(a,e=[]){let i=[];return he.Children.forEach(a,(s,l)=>{if(!he.isValidElement(s))return;let u=[...e,l];if(s.type===he.Fragment){i.push.apply(i,id(s.props.children,u));return}Jt(s.type===Ps,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Jt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=id(s.props.children,u)),i.push(f)}),i}var ju="get",qu="application/x-www-form-urlencoded";function uc(a){return a!=null&&typeof a.tagName=="string"}function e1(a){return uc(a)&&a.tagName.toLowerCase()==="button"}function t1(a){return uc(a)&&a.tagName.toLowerCase()==="form"}function n1(a){return uc(a)&&a.tagName.toLowerCase()==="input"}function i1(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function a1(a,e){return a.button===0&&(!e||e==="_self")&&!i1(a)}var Mu=null;function r1(){if(Mu===null)try{new FormData(document.createElement("form"),0),Mu=!1}catch{Mu=!0}return Mu}var s1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Mh(a){return a!=null&&!s1.has(a)?(Ci(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${qu}"`),null):a}function o1(a,e){let i,s,l,u,f;if(t1(a)){let h=a.getAttribute("action");s=h?ga(h,e):null,i=a.getAttribute("method")||ju,l=Mh(a.getAttribute("enctype"))||qu,u=new FormData(a)}else if(e1(a)||n1(a)&&(a.type==="submit"||a.type==="image")){let h=a.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=a.getAttribute("formaction")||h.getAttribute("action");if(s=p?ga(p,e):null,i=a.getAttribute("formmethod")||h.getAttribute("method")||ju,l=Mh(a.getAttribute("formenctype"))||Mh(h.getAttribute("enctype"))||qu,u=new FormData(h,a),!r1()){let{name:m,type:g,value:_}=a;if(g==="image"){let x=m?`${m}.`:"";u.append(`${x}x`,"0"),u.append(`${x}y`,"0")}else m&&u.append(m,_)}}else{if(uc(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=ju,s=null,l=qu,f=a}return u&&l==="text/plain"&&(f=u,u=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:u,body:f}}function Jd(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}async function l1(a,e){if(a.id in e)return e[a.id];try{let i=await import(a.module);return e[a.id]=i,i}catch(i){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function u1(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function c1(a,e,i){let s=await Promise.all(a.map(async l=>{let u=e.routes[l.route.id];if(u){let f=await l1(u,i);return f.links?f.links():[]}return[]}));return p1(s.flat(1).filter(u1).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function $v(a,e,i,s,l,u){let f=(p,m)=>i[m]?p.route.id!==i[m].route.id:!0,h=(p,m)=>{var g;return i[m].pathname!==p.pathname||((g=i[m].route.path)==null?void 0:g.endsWith("*"))&&i[m].params["*"]!==p.params["*"]};return u==="assets"?e.filter((p,m)=>f(p,m)||h(p,m)):u==="data"?e.filter((p,m)=>{var _;let g=s.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(f(p,m)||h(p,m))return!0;if(p.route.shouldRevalidate){let x=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((_=i[0])==null?void 0:_.params)||{},nextUrl:new URL(a,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function f1(a,e,{includeHydrateFallback:i}={}){return h1(a.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function h1(a){return[...new Set(a)]}function d1(a){let e={},i=Object.keys(a).sort();for(let s of i)e[s]=a[s];return e}function p1(a,e){let i=new Set;return new Set(e),a.reduce((s,l)=>{let u=JSON.stringify(d1(l));return i.has(u)||(i.add(u),s.push({key:u,link:l})),s},[])}var m1=new Set([100,101,204,205]);function g1(a,e){let i=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return i.pathname==="/"?i.pathname="_root.data":e&&ga(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.data`:i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function f_(){let a=he.useContext(js);return Jd(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function v1(){let a=he.useContext(lc);return Jd(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var $d=he.createContext(void 0);$d.displayName="FrameworkContext";function h_(){let a=he.useContext($d);return Jd(a,"You must render this element inside a <HydratedRouter> element"),a}function _1(a,e){let i=he.useContext($d),[s,l]=he.useState(!1),[u,f]=he.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:m,onMouseLeave:g,onTouchStart:_}=e,x=he.useRef(null);he.useEffect(()=>{if(a==="render"&&f(!0),a==="viewport"){let A=v=>{v.forEach(N=>{f(N.isIntersecting)})},S=new IntersectionObserver(A,{threshold:.5});return x.current&&S.observe(x.current),()=>{S.disconnect()}}},[a]),he.useEffect(()=>{if(s){let A=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(A)}}},[s]);let y=()=>{l(!0)},M=()=>{l(!1),f(!1)};return i?a!=="intent"?[u,x,{}]:[u,x,{onFocus:Wo(h,y),onBlur:Wo(p,M),onMouseEnter:Wo(m,y),onMouseLeave:Wo(g,M),onTouchStart:Wo(_,y)}]:[!1,x,{}]}function Wo(a,e){return i=>{a&&a(i),i.defaultPrevented||e(i)}}function x1({page:a,...e}){let{router:i}=f_(),s=he.useMemo(()=>e_(i.routes,a,i.basename),[i.routes,a,i.basename]);return s?he.createElement(y1,{page:a,matches:s,...e}):null}function S1(a){let{manifest:e,routeModules:i}=h_(),[s,l]=he.useState([]);return he.useEffect(()=>{let u=!1;return c1(a,e,i).then(f=>{u||l(f)}),()=>{u=!0}},[a,e,i]),s}function y1({page:a,matches:e,...i}){let s=rr(),{manifest:l,routeModules:u}=h_(),{basename:f}=f_(),{loaderData:h,matches:p}=v1(),m=he.useMemo(()=>$v(a,e,p,l,s,"data"),[a,e,p,l,s]),g=he.useMemo(()=>$v(a,e,p,l,s,"assets"),[a,e,p,l,s]),_=he.useMemo(()=>{if(a===s.pathname+s.search+s.hash)return[];let M=new Set,A=!1;if(e.forEach(v=>{var C;let N=l.routes[v.route.id];!N||!N.hasLoader||(!m.some(U=>U.route.id===v.route.id)&&v.route.id in h&&((C=u[v.route.id])!=null&&C.shouldRevalidate)||N.hasClientLoader?A=!0:M.add(v.route.id))}),M.size===0)return[];let S=g1(a,f);return A&&M.size>0&&S.searchParams.set("_routes",e.filter(v=>M.has(v.route.id)).map(v=>v.route.id).join(",")),[S.pathname+S.search]},[f,h,s,l,m,e,a,u]),x=he.useMemo(()=>f1(g,l),[g,l]),y=S1(g);return he.createElement(he.Fragment,null,_.map(M=>he.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...i})),x.map(M=>he.createElement("link",{key:M,rel:"modulepreload",href:M,...i})),y.map(({key:M,link:A})=>he.createElement("link",{key:M,...A})))}function E1(...a){return e=>{a.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var d_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{d_&&(window.__reactRouterVersion="7.5.3")}catch{}function M1({basename:a,children:e,window:i}){let s=he.useRef();s.current==null&&(s.current=cy({window:i,v5Compat:!0}));let l=s.current,[u,f]=he.useState({action:l.action,location:l.location}),h=he.useCallback(p=>{he.startTransition(()=>f(p))},[f]);return he.useLayoutEffect(()=>l.listen(h),[l,h]),he.createElement(Jy,{basename:a,children:e,location:u.location,navigationType:u.action,navigator:l})}var p_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gr=he.forwardRef(function({onClick:e,discover:i="render",prefetch:s="none",relative:l,reloadDocument:u,replace:f,state:h,target:p,to:m,preventScrollReset:g,viewTransition:_,...x},y){let{basename:M}=he.useContext(Hi),A=typeof m=="string"&&p_.test(m),S,v=!1;if(typeof m=="string"&&A&&(S=m,d_))try{let D=new URL(window.location.href),w=m.startsWith("//")?new URL(D.protocol+m):new URL(m),V=ga(w.pathname,M);w.origin===D.origin&&V!=null?m=V+w.search+w.hash:v=!0}catch{Ci(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let N=By(m,{relative:l}),[C,U,H]=_1(s,x),k=R1(m,{replace:f,state:h,target:p,preventScrollReset:g,relative:l,viewTransition:_});function I(D){e&&e(D),D.defaultPrevented||k(D)}let j=he.createElement("a",{...x,...H,href:S||N,onClick:v||u?e:I,ref:E1(y,U),target:p,"data-discover":!A&&i==="render"?"true":void 0});return C&&!A?he.createElement(he.Fragment,null,j,he.createElement(x1,{page:N})):j});Gr.displayName="Link";var T1=he.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:s="",end:l=!1,style:u,to:f,viewTransition:h,children:p,...m},g){let _=sl(f,{relative:m.relative}),x=rr(),y=he.useContext(lc),{navigator:M,basename:A}=he.useContext(Hi),S=y!=null&&L1(_)&&h===!0,v=M.encodeLocation?M.encodeLocation(_).pathname:_.pathname,N=x.pathname,C=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(N=N.toLowerCase(),C=C?C.toLowerCase():null,v=v.toLowerCase()),C&&A&&(C=ga(C,A)||C);const U=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let H=N===v||!l&&N.startsWith(v)&&N.charAt(U)==="/",k=C!=null&&(C===v||!l&&C.startsWith(v)&&C.charAt(v.length)==="/"),I={isActive:H,isPending:k,isTransitioning:S},j=H?e:void 0,D;typeof s=="function"?D=s(I):D=[s,H?"active":null,k?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let w=typeof u=="function"?u(I):u;return he.createElement(Gr,{...m,"aria-current":j,className:D,ref:g,style:w,to:f,viewTransition:h},typeof p=="function"?p(I):p)});T1.displayName="NavLink";var b1=he.forwardRef(({discover:a="render",fetcherKey:e,navigate:i,reloadDocument:s,replace:l,state:u,method:f=ju,action:h,onSubmit:p,relative:m,preventScrollReset:g,viewTransition:_,...x},y)=>{let M=U1(),A=D1(h,{relative:m}),S=f.toLowerCase()==="get"?"get":"post",v=typeof h=="string"&&p_.test(h),N=C=>{if(p&&p(C),C.defaultPrevented)return;C.preventDefault();let U=C.nativeEvent.submitter,H=(U==null?void 0:U.getAttribute("formmethod"))||f;M(U||C.currentTarget,{fetcherKey:e,method:H,navigate:i,replace:l,state:u,relative:m,preventScrollReset:g,viewTransition:_})};return he.createElement("form",{ref:y,method:S,action:A,onSubmit:s?p:N,...x,"data-discover":!v&&a==="render"?"true":void 0})});b1.displayName="Form";function A1(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function m_(a){let e=he.useContext(js);return Jt(e,A1(a)),e}function R1(a,{target:e,replace:i,state:s,preventScrollReset:l,relative:u,viewTransition:f}={}){let h=zy(),p=rr(),m=sl(a,{relative:u});return he.useCallback(g=>{if(a1(g,e)){g.preventDefault();let _=i!==void 0?i:tl(p)===tl(m);h(a,{replace:_,state:s,preventScrollReset:l,relative:u,viewTransition:f})}},[p,h,m,i,s,e,a,l,u,f])}var w1=0,C1=()=>`__${String(++w1)}__`;function U1(){let{router:a}=m_("useSubmit"),{basename:e}=he.useContext(Hi),i=Yy();return he.useCallback(async(s,l={})=>{let{action:u,method:f,encType:h,formData:p,body:m}=o1(s,e);if(l.navigate===!1){let g=l.fetcherKey||C1();await a.fetch(g,i,l.action||u,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||h,flushSync:l.flushSync})}else await a.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||h,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[a,e,i])}function D1(a,{relative:e}={}){let{basename:i}=he.useContext(Hi),s=he.useContext(xa);Jt(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),u={...sl(a||".",{relative:e})},f=rr();if(a==null){u.search=f.search;let h=new URLSearchParams(u.search),p=h.getAll("index");if(p.some(g=>g==="")){h.delete("index"),p.filter(_=>_).forEach(_=>h.append("index",_));let g=h.toString();u.search=g?`?${g}`:""}}return(!a||a===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:pa([i,u.pathname])),tl(u)}function L1(a,e={}){let i=he.useContext(s_);Jt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=m_("useViewTransitionState"),l=sl(a,{relative:e.relative});if(!i.isTransitioning)return!1;let u=ga(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=ga(i.nextLocation.pathname,s)||i.nextLocation.pathname;return nc(l.pathname,f)!=null||nc(l.pathname,u)!=null}new TextEncoder;[...m1];const N1=()=>B.jsxs(B.Fragment,{children:[B.jsx("style",{children:`
          #about_me_txt p:not(:first-child) {
            margin-top: 1em;
          }

          #about_me_txt p {
          text-indent: 30px;
          }
        `}),B.jsxs("div",{id:"about_me_txt",className:"w-[80%] ml-10 mb-10 text-white",children:[B.jsxs("p",{children:["I’m an artist and engineering student based in Los Angeles. I grew up in Kentucky and earned my BFA from the School of the Art Institute of Chicago before moving to LA in 2017. My goal was to study alongside great acting teachers and I did that twice weekly, for four years. (Performance and emotion are ",B.jsx("span",{style:{fontStyle:"italic"},children:"other"})," fascinations of mine) "]}),B.jsx("p",{children:`My paintings explore the tension between painting as image and painting as object, where flatness meets surface. Something about the line in between object and image draws me into experimenting with what I consider to be "wrong-ness" in the work. I’m drawn to that moment when something feels just slightly off, when a move on a painting initially strikes me with revolting inadequacy—I'll often stop there.`}),B.jsx("p",{children:"Alongside my art practice, my studies as an engineering student have a focus on product design, app interfaces, and data analysis. I’m interested in how systems break down and reassemble—whether in a canvas or a codebase. My work moves between those worlds, and they feed each other in unexpected ways."}),B.jsx("p",{children:"As an artist, I like breaking things. As an engineer, creating things."})]})]}),Fs="Cal Sans",Qo="Oswald",tr="Arial, sans",O1=1e3,ic="Jay H. Crawford",Yu="65",el="opacity-65 font-bold text-white",P1=a=>B.jsxs(B.Fragment,{children:["      ",a.url==""&&B.jsx("div",{id:"this_one",className:"h-30 w-30 absolute",children:B.jsx("img",{src:"./under_construction.svg"})}),B.jsx("div",{style:{boxShadow:"5px 5px 5px rgba(0, 0, 0, 1)"},className:"gridPhoto_Image_container w-80 h-60",children:B.jsx("img",{className:"rounded-lg w-80 h-60",style:{objectFit:"cover"},src:a.img})})]}),B1=a=>{const[e,i]=he.useState(!1);return B.jsx("div",{onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:B.jsx(Gr,{id:"",to:a.url?a.url:"",children:B.jsx("div",{className:"gridPhoto_container p-1 m-2 flex justify-center",children:B.jsxs("div",{className:`gridPhoto_item_container m-2 inline ${a.url==""&&"cursor-not-allowed"}`,children:[B.jsx("style",{children:`
                .gridPhoto_item_container:hover {
                  text-decoration: dotted;
                }
                .gridPhoto_item_container {
                  text-decoration: dotted;
                }
              `}),B.jsx("div",{className:"relative",children:B.jsxs("div",{className:" h-full w-full relative z-100",children:[B.jsx("div",{className:`${a.url==""&&e?"absolute":"hidden"} w-full absolute text-white font-black bg-red-600 top-[120px] p-4 text-center`,children:"Under Construction"}),B.jsx(P1,{img:a.img,url:a.url})]})}),B.jsx("div",{children:B.jsx("h4",{style:{fontFamily:Fs},className:"text-2xl text-white p-4 abt_gridPhotoItem",children:a.title})})]})})})})},z1=a=>{const e=()=>a.width<2e3?"w-full":"w-[60%]",i=()=>a.width<750?"grid-cols-1":"grid-cols-2";return B.jsx("div",{id:"grid_container",className:`grid ${e()} ${i()}`,children:a.categories.map((s,l)=>B.jsx("span",{children:B.jsx(B1,{title:s.category,img:s.img,url:s.url?s.url:""})},`${l}-${s.category}`))})},I1=a=>B.jsx(z1,{width:a.width,categories:a.category_array}),F1="https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting/",ad=["KP.webp","G.webp","alien_invasion.webp","alley.webp","bad_painting.webp","bada_bing.webp","behind.webp","blinker.webp","blue_girl_1.webp","blue_girl_2.webp","bouquet.webp","bright_lights_big_city.webp","business_card.webp","california_onlookers.webp","connection.webp","dips.webp","eyes.webp","following.webp","funny_mustache_guy.webp","hilltop_city.webp","hollywood_hills.webp","house.webp","in_the_city.webp","jacks.webp","jacks_2.webp","james.webp","locked_away.webp","network.webp","night.webp","one_way.webp","online.webp","outlooker.webp","perspective.webp","pictures_of_then.webp","portrait_copy.webp","rainy_sun.webp","researchers.webp","street_corner.webp","sunday.webp","time.webp","tornado.webp","transfer.webp","victorian.webp","what_do_you.webp","woah_dude.webp","worm.webp","x.webp"],e0=a=>a&&a.endsWith(".webp")?a.slice(0,-5):"",t0=a=>{const e=()=>a.current>=Fn.length-5?Fn.slice(Fn.length-5,Fn.length):Fn.slice(a.current+1,a.current+6);return B.jsx("div",{className:"gallery_subImages",children:e().map(i=>B.jsxs("button",{className:"mini_gallery_image",onClick:()=>a.setCurrent(a.images_array.indexOf(i.title?i.title:"")),children:[B.jsx("style",{children:`
              .mini_gallery_image:hover {
                outline: 2px solid rgba(255, 255, 255, 1);
                transition: outline .2s;
                opacity: 100%;

              .mini_gallery_image {
                opacity: 80%;
              }
              }
            `}),B.jsx("img",{src:i.src,alt:i.alt,title:i.title,className:"inline max-w-25 max-h-25 m-1 rounded-sm",loading:"lazy"},i.src)]}))})},Fn=ad.map(a=>({src:`${F1}${a}`,alt:a,title:a})),g_="rgba(255,255,255,0.2)",H1={border:`3px solid ${g_}`,cursor:"not-allowed"},Tu=a=>{const e=a.direction==="left"&&a.current===0||a.direction==="right"&&a.current===Fn.length-1;console.log(a.current,a.direction);const i=()=>{switch(a.graphic){case"caret-right":return B.jsx("div",{className:"h-10 w-10",children:B.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:B.jsx("path",{d:"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"})})});case"caret-left":return B.jsx("div",{className:"h-10 w-10",children:B.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:B.jsx("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"})})});case"arrow-right":return B.jsx("div",{className:" h-8 w-8",children:B.jsx("svg",{className:"",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:B.jsx("path",{d:"M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"})})});case"arrow-left":return B.jsx("div",{className:" h-8 w-8",children:B.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:B.jsx("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"})})})}};return B.jsxs("button",{style:{...(a.graphic=="arrow-left"||a.graphic=="arrow-right")&&e?H1:{}},className:`inline-block ${a.graphic=="caret-left"||a.graphic=="caret-right"?"LR_bttn":"border-3 border-white LR_bttn"} cursor-pointer p-1 h-20 w-20 bg-none rounded-[50%]`,onClick:a.onclick_func,disabled:e,"aria-label":a.direction==="right"?"Next painting":"Previous painting",type:"button",children:[B.jsx("style",{children:`
        .LR_bttn:hover {
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, .5)) drop-shadow(0 0 10px rgba(255, 255, 255, .5));
        }
        .LR_bttn:active {
          filter: none;
        }
        .LR_bttn {
          transition: filter .2s;
        }
      `}),B.jsx("div",{style:{fill:e?g_:"white"},className:"flex justify-center items-center",children:i()})]})},G1=a=>{const[e,i]=he.useState(0);console.log(e,"is current");const s=()=>i(u=>Math.max(u-1,0)),l=()=>i(u=>Math.min(u+1,Fn.length-1));return a.width>O1?B.jsxs("div",{id:"gallery-container",className:"",children:[B.jsx("div",{className:"gallery_leftButton",children:B.jsx(Tu,{graphic:"arrow-left",direction:"left",current:e,onclick_func:s})}),B.jsx("div",{className:"gallery_mainImage",children:B.jsx("img",{src:Fn[e].src,alt:Fn[e].alt,title:Fn[e].title,loading:"lazy"})}),B.jsx("div",{className:"gallery_rightButton",children:B.jsx(Tu,{graphic:"arrow-right",direction:"right",current:e,onclick_func:l})}),B.jsx(t0,{images_array:ad,current:e,setCurrent:i}),B.jsxs("div",{className:"gallery_textDetails text-white text-left p-10",children:[B.jsx("h3",{children:e0(Fn[e].title)}),B.jsx("p",{children:"acrylic on canvas"}),B.jsx("p",{children:"2021-2025"})]})]}):B.jsxs("div",{children:[B.jsxs("div",{id:"",className:"flex flex-row justify-center",children:[B.jsx("style",{children:`
            .gallery_leftRightButton_cols {
              display: flex;
              align-items: center;
            }
            `}),B.jsx("button",{onClick:()=>s(),className:"gallery_leftRightButton_cols",children:B.jsx(Tu,{graphic:"caret-left",direction:"left",current:e})}),B.jsx("img",{style:{width:"70%"},src:Fn[e].src,alt:Fn[e].alt,title:Fn[e].title,loading:"lazy"}),B.jsx("button",{onClick:()=>l(),className:"gallery_leftRightButton_cols",children:B.jsx(Tu,{graphic:"caret-right",direction:"right",current:e})})]}),B.jsxs("div",{className:"text-left p-10",children:[B.jsx("h3",{children:e0(Fn[e].title)}),B.jsx("p",{children:"acrylic on canvas"}),B.jsx("p",{children:"2021-2025"})]}),B.jsx(t0,{images_array:ad,setCurrent:i,current:e})]})},V1=a=>B.jsxs("div",{className:"text-white",style:{fontFamily:tr,textAlign:"center"},children:[B.jsx("h2",{style:{display:"none"},children:"Art"}),B.jsx(G1,{width:a.width})]}),k1=()=>B.jsx("div",{className:"text-center text-white",style:{fontFamily:tr}});function v_(){const[a,e]=he.useState({width:window.innerWidth,height:window.innerHeight});return he.useEffect(()=>{function i(){e({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}},[]),a}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ol="176",X1=0,n0=1,W1=2,__=1,j1=2,fa=3,va=0,Mn=1,li=2,Qn=0,zs=1,i0=2,a0=3,r0=4,q1=5,Or=100,Y1=101,Z1=102,K1=103,Q1=104,J1=200,$1=201,eE=202,tE=203,rd=204,sd=205,nE=206,iE=207,aE=208,rE=209,sE=210,oE=211,lE=212,uE=213,cE=214,od=0,ld=1,ud=2,Hs=3,cd=4,fd=5,hd=6,dd=7,x_=0,fE=1,hE=2,nr=0,dE=1,pE=2,mE=3,gE=4,vE=5,_E=6,xE=7,S_=300,Gs=301,Vs=302,pd=303,md=304,cc=306,gd=1e3,Br=1001,vd=1002,wi=1003,SE=1004,bu=1005,Kn=1006,Th=1007,zr=1008,Bn=1009,y_=1010,E_=1011,nl=1012,ep=1013,ir=1014,ha=1015,ll=1016,tp=1017,np=1018,ks=1020,M_=35902,T_=1021,b_=1022,Ri=1023,il=1026,Xs=1027,A_=1028,ip=1029,R_=1030,ap=1031,rp=1033,Zu=33776,Ku=33777,Qu=33778,Ju=33779,_d=35840,xd=35841,Sd=35842,yd=35843,Ed=36196,Md=37492,Td=37496,bd=37808,Ad=37809,Rd=37810,wd=37811,Cd=37812,Ud=37813,Dd=37814,Ld=37815,Nd=37816,Od=37817,Pd=37818,Bd=37819,zd=37820,Id=37821,$u=36492,Fd=36494,Hd=36495,w_=36283,Gd=36284,Vd=36285,kd=36286,ul=3200,yE=3201,EE=0,ME=1,Ii="",Ht="srgb",ar="srgb-linear",ac="linear",Ft="srgb",Ss=7680,s0=519,TE=512,bE=513,AE=514,C_=515,RE=516,wE=517,CE=518,UE=519,o0=35044,l0="300 es",da=2e3,rc=2001;class Sa{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,f=l.length;u<f;u++)l[u].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bh=Math.PI/180,Xd=180/Math.PI;function cl(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Nn[a&255]+Nn[a>>8&255]+Nn[a>>16&255]+Nn[a>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]).toLowerCase()}function yt(a,e,i){return Math.max(e,Math.min(i,a))}function DE(a,e){return(a%e+e)%e}function Ah(a,e,i){return(1-i)*a+i*e}function jo(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Yn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class ot{constructor(e=0,i=0){ot.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(yt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(yt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,f=this.y-e.y;return this.x=u*s-f*l+e.x,this.y=u*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,i,s,l,u,f,h,p,m){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,f,h,p,m)}set(e,i,s,l,u,f,h,p,m){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=i,g[4]=u,g[5]=p,g[6]=s,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,f=s[0],h=s[3],p=s[6],m=s[1],g=s[4],_=s[7],x=s[2],y=s[5],M=s[8],A=l[0],S=l[3],v=l[6],N=l[1],C=l[4],U=l[7],H=l[2],k=l[5],I=l[8];return u[0]=f*A+h*N+p*H,u[3]=f*S+h*C+p*k,u[6]=f*v+h*U+p*I,u[1]=m*A+g*N+_*H,u[4]=m*S+g*C+_*k,u[7]=m*v+g*U+_*I,u[2]=x*A+y*N+M*H,u[5]=x*S+y*C+M*k,u[8]=x*v+y*U+M*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],f=e[4],h=e[5],p=e[6],m=e[7],g=e[8];return i*f*g-i*h*m-s*u*g+s*h*p+l*u*m-l*f*p}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],f=e[4],h=e[5],p=e[6],m=e[7],g=e[8],_=g*f-h*m,x=h*p-g*u,y=m*u-f*p,M=i*_+s*x+l*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=_*A,e[1]=(l*m-g*s)*A,e[2]=(h*s-l*f)*A,e[3]=x*A,e[4]=(g*i-l*p)*A,e[5]=(l*u-h*i)*A,e[6]=y*A,e[7]=(s*p-m*i)*A,e[8]=(f*i-s*u)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,f,h){const p=Math.cos(u),m=Math.sin(u);return this.set(s*p,s*m,-s*(p*f+m*h)+f+e,-l*m,l*p,-l*(-m*f+p*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Rh.makeScale(e,i)),this}rotate(e){return this.premultiply(Rh.makeRotation(-e)),this}translate(e,i){return this.premultiply(Rh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rh=new st;function U_(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function sc(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function LE(){const a=sc("canvas");return a.style.display="block",a}const u0={};function ec(a){a in u0||(u0[a]=!0,console.warn(a))}function NE(a,e,i){return new Promise(function(s,l){function u(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:l();break;case a.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}function OE(a){const e=a.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function PE(a){const e=a.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const c0=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),f0=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function BE(){const a={enabled:!0,workingColorSpace:ar,spaces:{},convert:function(l,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Ft&&(l.r=ma(l.r),l.g=ma(l.g),l.b=ma(l.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ft&&(l.r=Is(l.r),l.g=Is(l.g),l.b=Is(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ii?ac:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,f){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return a.define({[ar]:{primaries:e,whitePoint:s,transfer:ac,toXYZ:c0,fromXYZ:f0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:s,transfer:Ft,toXYZ:c0,fromXYZ:f0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),a}const Rt=BE();function ma(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Is(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let ys;class zE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{ys===void 0&&(ys=sc("canvas")),ys.width=e.width,ys.height=e.height;const l=ys.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=ys}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=sc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let f=0;f<u.length;f++)u[f]=ma(u[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ma(i[s]/255)*255):i[s]=ma(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let IE=0;class sp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:IE++}),this.uuid=cl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?u.push(wh(l[f].image)):u.push(wh(l[f]))}else u=wh(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function wh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?zE.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let FE=0;class Pn extends Sa{constructor(e=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,s=Br,l=Br,u=Kn,f=zr,h=Ri,p=Bn,m=Pn.DEFAULT_ANISOTROPY,g=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=cl(),this.name="",this.source=new sp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==S_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gd:e.x=e.x-Math.floor(e.x);break;case Br:e.x=e.x<0?0:1;break;case vd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gd:e.y=e.y-Math.floor(e.y);break;case Br:e.y=e.y<0?0:1;break;case vd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=S_;Pn.DEFAULT_ANISOTROPY=1;class Qt{constructor(e=0,i=0,s=0,l=1){Qt.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*u,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*u,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*u,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const p=e.elements,m=p[0],g=p[4],_=p[8],x=p[1],y=p[5],M=p[9],A=p[2],S=p[6],v=p[10];if(Math.abs(g-x)<.01&&Math.abs(_-A)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+A)<.1&&Math.abs(M+S)<.1&&Math.abs(m+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const C=(m+1)/2,U=(y+1)/2,H=(v+1)/2,k=(g+x)/4,I=(_+A)/4,j=(M+S)/4;return C>U&&C>H?C<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(C),l=k/s,u=I/s):U>H?U<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),s=k/l,u=j/l):H<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(H),s=I/u,l=j/u),this.set(s,l,u,i),this}let N=Math.sqrt((S-M)*(S-M)+(_-A)*(_-A)+(x-g)*(x-g));return Math.abs(N)<.001&&(N=1),this.x=(S-M)/N,this.y=(_-A)/N,this.z=(x-g)/N,this.w=Math.acos((m+y+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this.z=yt(this.z,e.z,i.z),this.w=yt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this.z=yt(this.z,e,i),this.w=yt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(yt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class HE extends Sa{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth?s.depth:1,this.scissor=new Qt(0,0,e,i),this.scissorTest=!1,this.viewport=new Qt(0,0,e,i);const l={width:e,height:i,depth:this.depth};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},s);const u=new Pn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);u.flipY=!1,u.generateMipmaps=s.generateMipmaps,u.internalFormat=s.internalFormat,this.textures=[];const f=s.count;for(let h=0;h<f;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new sp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends HE{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class D_ extends Pn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=wi,this.minFilter=wi,this.wrapR=Br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class GE extends Pn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=wi,this.minFilter=wi,this.wrapR=Br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fl{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,f,h){let p=s[l+0],m=s[l+1],g=s[l+2],_=s[l+3];const x=u[f+0],y=u[f+1],M=u[f+2],A=u[f+3];if(h===0){e[i+0]=p,e[i+1]=m,e[i+2]=g,e[i+3]=_;return}if(h===1){e[i+0]=x,e[i+1]=y,e[i+2]=M,e[i+3]=A;return}if(_!==A||p!==x||m!==y||g!==M){let S=1-h;const v=p*x+m*y+g*M+_*A,N=v>=0?1:-1,C=1-v*v;if(C>Number.EPSILON){const H=Math.sqrt(C),k=Math.atan2(H,v*N);S=Math.sin(S*k)/H,h=Math.sin(h*k)/H}const U=h*N;if(p=p*S+x*U,m=m*S+y*U,g=g*S+M*U,_=_*S+A*U,S===1-h){const H=1/Math.sqrt(p*p+m*m+g*g+_*_);p*=H,m*=H,g*=H,_*=H}}e[i]=p,e[i+1]=m,e[i+2]=g,e[i+3]=_}static multiplyQuaternionsFlat(e,i,s,l,u,f){const h=s[l],p=s[l+1],m=s[l+2],g=s[l+3],_=u[f],x=u[f+1],y=u[f+2],M=u[f+3];return e[i]=h*M+g*_+p*y-m*x,e[i+1]=p*M+g*x+m*_-h*y,e[i+2]=m*M+g*y+h*x-p*_,e[i+3]=g*M-h*_-p*x-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,f=e._order,h=Math.cos,p=Math.sin,m=h(s/2),g=h(l/2),_=h(u/2),x=p(s/2),y=p(l/2),M=p(u/2);switch(f){case"XYZ":this._x=x*g*_+m*y*M,this._y=m*y*_-x*g*M,this._z=m*g*M+x*y*_,this._w=m*g*_-x*y*M;break;case"YXZ":this._x=x*g*_+m*y*M,this._y=m*y*_-x*g*M,this._z=m*g*M-x*y*_,this._w=m*g*_+x*y*M;break;case"ZXY":this._x=x*g*_-m*y*M,this._y=m*y*_+x*g*M,this._z=m*g*M+x*y*_,this._w=m*g*_-x*y*M;break;case"ZYX":this._x=x*g*_-m*y*M,this._y=m*y*_+x*g*M,this._z=m*g*M-x*y*_,this._w=m*g*_+x*y*M;break;case"YZX":this._x=x*g*_+m*y*M,this._y=m*y*_+x*g*M,this._z=m*g*M-x*y*_,this._w=m*g*_-x*y*M;break;case"XZY":this._x=x*g*_-m*y*M,this._y=m*y*_-x*g*M,this._z=m*g*M+x*y*_,this._w=m*g*_+x*y*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],f=i[1],h=i[5],p=i[9],m=i[2],g=i[6],_=i[10],x=s+h+_;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-p)*y,this._y=(u-m)*y,this._z=(f-l)*y}else if(s>h&&s>_){const y=2*Math.sqrt(1+s-h-_);this._w=(g-p)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(u+m)/y}else if(h>_){const y=2*Math.sqrt(1+h-s-_);this._w=(u-m)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(p+g)/y}else{const y=2*Math.sqrt(1+_-s-h);this._w=(f-l)/y,this._x=(u+m)/y,this._y=(p+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,f=e._w,h=i._x,p=i._y,m=i._z,g=i._w;return this._x=s*g+f*h+l*m-u*p,this._y=l*g+f*p+u*h-s*m,this._z=u*g+f*m+s*p-l*h,this._w=f*g-s*h-l*p-u*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,u=this._z,f=this._w;let h=f*e._w+s*e._x+l*e._y+u*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=f,this._x=s,this._y=l,this._z=u,this;const p=1-h*h;if(p<=Number.EPSILON){const y=1-i;return this._w=y*f+i*this._w,this._x=y*s+i*this._x,this._y=y*l+i*this._y,this._z=y*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,h),_=Math.sin((1-i)*g)/m,x=Math.sin(i*g)/m;return this._w=f*_+this._w*x,this._x=s*_+this._x*x,this._y=l*_+this._y*x,this._z=u*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,i=0,s=0){se.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(h0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(h0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,f=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*f,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*f,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,f=e.y,h=e.z,p=e.w,m=2*(f*l-h*s),g=2*(h*i-u*l),_=2*(u*s-f*i);return this.x=i+p*m+f*_-h*g,this.y=s+p*g+h*m-u*_,this.z=l+p*_+u*g-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this.z=yt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this.z=yt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(yt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,f=i.x,h=i.y,p=i.z;return this.x=l*p-u*h,this.y=u*f-s*p,this.z=s*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Ch.copy(this).projectOnVector(e),this.sub(Ch)}reflect(e){return this.sub(Ch.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(yt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ch=new se,h0=new fl;class hl{constructor(e=new se(1/0,1/0,1/0),i=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Mi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Mi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Mi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=u.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,Mi):Mi.fromBufferAttribute(u,f),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Au.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Au.copy(s.boundingBox)),Au.applyMatrix4(e.matrixWorld),this.union(Au)}const l=e.children;for(let u=0,f=l.length;u<f;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qo),Ru.subVectors(this.max,qo),Es.subVectors(e.a,qo),Ms.subVectors(e.b,qo),Ts.subVectors(e.c,qo),qa.subVectors(Ms,Es),Ya.subVectors(Ts,Ms),Ar.subVectors(Es,Ts);let i=[0,-qa.z,qa.y,0,-Ya.z,Ya.y,0,-Ar.z,Ar.y,qa.z,0,-qa.x,Ya.z,0,-Ya.x,Ar.z,0,-Ar.x,-qa.y,qa.x,0,-Ya.y,Ya.x,0,-Ar.y,Ar.x,0];return!Uh(i,Es,Ms,Ts,Ru)||(i=[1,0,0,0,1,0,0,0,1],!Uh(i,Es,Ms,Ts,Ru))?!1:(wu.crossVectors(qa,Ya),i=[wu.x,wu.y,wu.z],Uh(i,Es,Ms,Ts,Ru))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const sa=[new se,new se,new se,new se,new se,new se,new se,new se],Mi=new se,Au=new hl,Es=new se,Ms=new se,Ts=new se,qa=new se,Ya=new se,Ar=new se,qo=new se,Ru=new se,wu=new se,Rr=new se;function Uh(a,e,i,s,l){for(let u=0,f=a.length-3;u<=f;u+=3){Rr.fromArray(a,u);const h=l.x*Math.abs(Rr.x)+l.y*Math.abs(Rr.y)+l.z*Math.abs(Rr.z),p=e.dot(Rr),m=i.dot(Rr),g=s.dot(Rr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>h)return!1}return!0}const VE=new hl,Yo=new se,Dh=new se;class op{constructor(e=new se,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):VE.setFromPoints(e).getCenter(s);let l=0;for(let u=0,f=e.length;u<f;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yo.subVectors(e,this.center);const i=Yo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Yo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yo.copy(e.center).add(Dh)),this.expandByPoint(Yo.copy(e.center).sub(Dh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oa=new se,Lh=new se,Cu=new se,Za=new se,Nh=new se,Uu=new se,Oh=new se;class kE{constructor(e=new se,i=new se(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=oa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(oa.copy(this.origin).addScaledVector(this.direction,i),oa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Lh.copy(e).add(i).multiplyScalar(.5),Cu.copy(i).sub(e).normalize(),Za.copy(this.origin).sub(Lh);const u=e.distanceTo(i)*.5,f=-this.direction.dot(Cu),h=Za.dot(this.direction),p=-Za.dot(Cu),m=Za.lengthSq(),g=Math.abs(1-f*f);let _,x,y,M;if(g>0)if(_=f*p-h,x=f*h-p,M=u*g,_>=0)if(x>=-M)if(x<=M){const A=1/g;_*=A,x*=A,y=_*(_+f*x+2*h)+x*(f*_+x+2*p)+m}else x=u,_=Math.max(0,-(f*x+h)),y=-_*_+x*(x+2*p)+m;else x=-u,_=Math.max(0,-(f*x+h)),y=-_*_+x*(x+2*p)+m;else x<=-M?(_=Math.max(0,-(-f*u+h)),x=_>0?-u:Math.min(Math.max(-u,-p),u),y=-_*_+x*(x+2*p)+m):x<=M?(_=0,x=Math.min(Math.max(-u,-p),u),y=x*(x+2*p)+m):(_=Math.max(0,-(f*u+h)),x=_>0?u:Math.min(Math.max(-u,-p),u),y=-_*_+x*(x+2*p)+m);else x=f>0?-u:u,_=Math.max(0,-(f*x+h)),y=-_*_+x*(x+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Lh).addScaledVector(Cu,x),y}intersectSphere(e,i){oa.subVectors(e.center,this.origin);const s=oa.dot(this.direction),l=oa.dot(oa)-s*s,u=e.radius*e.radius;if(l>u)return null;const f=Math.sqrt(u-l),h=s-f,p=s+f;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,f,h,p;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return m>=0?(s=(e.min.x-x.x)*m,l=(e.max.x-x.x)*m):(s=(e.max.x-x.x)*m,l=(e.min.x-x.x)*m),g>=0?(u=(e.min.y-x.y)*g,f=(e.max.y-x.y)*g):(u=(e.max.y-x.y)*g,f=(e.min.y-x.y)*g),s>f||u>l||((u>s||isNaN(s))&&(s=u),(f<l||isNaN(l))&&(l=f),_>=0?(h=(e.min.z-x.z)*_,p=(e.max.z-x.z)*_):(h=(e.max.z-x.z)*_,p=(e.min.z-x.z)*_),s>p||h>l)||((h>s||s!==s)&&(s=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,oa)!==null}intersectTriangle(e,i,s,l,u){Nh.subVectors(i,e),Uu.subVectors(s,e),Oh.crossVectors(Nh,Uu);let f=this.direction.dot(Oh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Za.subVectors(this.origin,e);const p=h*this.direction.dot(Uu.crossVectors(Za,Uu));if(p<0)return null;const m=h*this.direction.dot(Nh.cross(Za));if(m<0||p+m>f)return null;const g=-h*Za.dot(Oh);return g<0?null:this.at(g/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cn{constructor(e,i,s,l,u,f,h,p,m,g,_,x,y,M,A,S){cn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,f,h,p,m,g,_,x,y,M,A,S)}set(e,i,s,l,u,f,h,p,m,g,_,x,y,M,A,S){const v=this.elements;return v[0]=e,v[4]=i,v[8]=s,v[12]=l,v[1]=u,v[5]=f,v[9]=h,v[13]=p,v[2]=m,v[6]=g,v[10]=_,v[14]=x,v[3]=y,v[7]=M,v[11]=A,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/bs.setFromMatrixColumn(e,0).length(),u=1/bs.setFromMatrixColumn(e,1).length(),f=1/bs.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,f=Math.cos(s),h=Math.sin(s),p=Math.cos(l),m=Math.sin(l),g=Math.cos(u),_=Math.sin(u);if(e.order==="XYZ"){const x=f*g,y=f*_,M=h*g,A=h*_;i[0]=p*g,i[4]=-p*_,i[8]=m,i[1]=y+M*m,i[5]=x-A*m,i[9]=-h*p,i[2]=A-x*m,i[6]=M+y*m,i[10]=f*p}else if(e.order==="YXZ"){const x=p*g,y=p*_,M=m*g,A=m*_;i[0]=x+A*h,i[4]=M*h-y,i[8]=f*m,i[1]=f*_,i[5]=f*g,i[9]=-h,i[2]=y*h-M,i[6]=A+x*h,i[10]=f*p}else if(e.order==="ZXY"){const x=p*g,y=p*_,M=m*g,A=m*_;i[0]=x-A*h,i[4]=-f*_,i[8]=M+y*h,i[1]=y+M*h,i[5]=f*g,i[9]=A-x*h,i[2]=-f*m,i[6]=h,i[10]=f*p}else if(e.order==="ZYX"){const x=f*g,y=f*_,M=h*g,A=h*_;i[0]=p*g,i[4]=M*m-y,i[8]=x*m+A,i[1]=p*_,i[5]=A*m+x,i[9]=y*m-M,i[2]=-m,i[6]=h*p,i[10]=f*p}else if(e.order==="YZX"){const x=f*p,y=f*m,M=h*p,A=h*m;i[0]=p*g,i[4]=A-x*_,i[8]=M*_+y,i[1]=_,i[5]=f*g,i[9]=-h*g,i[2]=-m*g,i[6]=y*_+M,i[10]=x-A*_}else if(e.order==="XZY"){const x=f*p,y=f*m,M=h*p,A=h*m;i[0]=p*g,i[4]=-_,i[8]=m*g,i[1]=x*_+A,i[5]=f*g,i[9]=y*_-M,i[2]=M*_-y,i[6]=h*g,i[10]=A*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(XE,e,WE)}lookAt(e,i,s){const l=this.elements;return si.subVectors(e,i),si.lengthSq()===0&&(si.z=1),si.normalize(),Ka.crossVectors(s,si),Ka.lengthSq()===0&&(Math.abs(s.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Ka.crossVectors(s,si)),Ka.normalize(),Du.crossVectors(si,Ka),l[0]=Ka.x,l[4]=Du.x,l[8]=si.x,l[1]=Ka.y,l[5]=Du.y,l[9]=si.y,l[2]=Ka.z,l[6]=Du.z,l[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,f=s[0],h=s[4],p=s[8],m=s[12],g=s[1],_=s[5],x=s[9],y=s[13],M=s[2],A=s[6],S=s[10],v=s[14],N=s[3],C=s[7],U=s[11],H=s[15],k=l[0],I=l[4],j=l[8],D=l[12],w=l[1],V=l[5],ue=l[9],oe=l[13],xe=l[2],pe=l[6],z=l[10],K=l[14],Y=l[3],Me=l[7],O=l[11],ee=l[15];return u[0]=f*k+h*w+p*xe+m*Y,u[4]=f*I+h*V+p*pe+m*Me,u[8]=f*j+h*ue+p*z+m*O,u[12]=f*D+h*oe+p*K+m*ee,u[1]=g*k+_*w+x*xe+y*Y,u[5]=g*I+_*V+x*pe+y*Me,u[9]=g*j+_*ue+x*z+y*O,u[13]=g*D+_*oe+x*K+y*ee,u[2]=M*k+A*w+S*xe+v*Y,u[6]=M*I+A*V+S*pe+v*Me,u[10]=M*j+A*ue+S*z+v*O,u[14]=M*D+A*oe+S*K+v*ee,u[3]=N*k+C*w+U*xe+H*Y,u[7]=N*I+C*V+U*pe+H*Me,u[11]=N*j+C*ue+U*z+H*O,u[15]=N*D+C*oe+U*K+H*ee,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],f=e[1],h=e[5],p=e[9],m=e[13],g=e[2],_=e[6],x=e[10],y=e[14],M=e[3],A=e[7],S=e[11],v=e[15];return M*(+u*p*_-l*m*_-u*h*x+s*m*x+l*h*y-s*p*y)+A*(+i*p*y-i*m*x+u*f*x-l*f*y+l*m*g-u*p*g)+S*(+i*m*_-i*h*y-u*f*_+s*f*y+u*h*g-s*m*g)+v*(-l*h*g-i*p*_+i*h*x+l*f*_-s*f*x+s*p*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],f=e[4],h=e[5],p=e[6],m=e[7],g=e[8],_=e[9],x=e[10],y=e[11],M=e[12],A=e[13],S=e[14],v=e[15],N=_*S*m-A*x*m+A*p*y-h*S*y-_*p*v+h*x*v,C=M*x*m-g*S*m-M*p*y+f*S*y+g*p*v-f*x*v,U=g*A*m-M*_*m+M*h*y-f*A*y-g*h*v+f*_*v,H=M*_*p-g*A*p-M*h*x+f*A*x+g*h*S-f*_*S,k=i*N+s*C+l*U+u*H;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/k;return e[0]=N*I,e[1]=(A*x*u-_*S*u-A*l*y+s*S*y+_*l*v-s*x*v)*I,e[2]=(h*S*u-A*p*u+A*l*m-s*S*m-h*l*v+s*p*v)*I,e[3]=(_*p*u-h*x*u-_*l*m+s*x*m+h*l*y-s*p*y)*I,e[4]=C*I,e[5]=(g*S*u-M*x*u+M*l*y-i*S*y-g*l*v+i*x*v)*I,e[6]=(M*p*u-f*S*u-M*l*m+i*S*m+f*l*v-i*p*v)*I,e[7]=(f*x*u-g*p*u+g*l*m-i*x*m-f*l*y+i*p*y)*I,e[8]=U*I,e[9]=(M*_*u-g*A*u-M*s*y+i*A*y+g*s*v-i*_*v)*I,e[10]=(f*A*u-M*h*u+M*s*m-i*A*m-f*s*v+i*h*v)*I,e[11]=(g*h*u-f*_*u-g*s*m+i*_*m+f*s*y-i*h*y)*I,e[12]=H*I,e[13]=(g*A*l-M*_*l+M*s*x-i*A*x-g*s*S+i*_*S)*I,e[14]=(M*h*l-f*A*l-M*s*p+i*A*p+f*s*S-i*h*S)*I,e[15]=(f*_*l-g*h*l+g*s*p-i*_*p-f*s*x+i*h*x)*I,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,f=e.x,h=e.y,p=e.z,m=u*f,g=u*h;return this.set(m*f+s,m*h-l*p,m*p+l*h,0,m*h+l*p,g*h+s,g*p-l*f,0,m*p-l*h,g*p+l*f,u*p*p+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,f){return this.set(1,s,u,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,f=i._y,h=i._z,p=i._w,m=u+u,g=f+f,_=h+h,x=u*m,y=u*g,M=u*_,A=f*g,S=f*_,v=h*_,N=p*m,C=p*g,U=p*_,H=s.x,k=s.y,I=s.z;return l[0]=(1-(A+v))*H,l[1]=(y+U)*H,l[2]=(M-C)*H,l[3]=0,l[4]=(y-U)*k,l[5]=(1-(x+v))*k,l[6]=(S+N)*k,l[7]=0,l[8]=(M+C)*I,l[9]=(S-N)*I,l[10]=(1-(x+A))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let u=bs.set(l[0],l[1],l[2]).length();const f=bs.set(l[4],l[5],l[6]).length(),h=bs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],Ti.copy(this);const m=1/u,g=1/f,_=1/h;return Ti.elements[0]*=m,Ti.elements[1]*=m,Ti.elements[2]*=m,Ti.elements[4]*=g,Ti.elements[5]*=g,Ti.elements[6]*=g,Ti.elements[8]*=_,Ti.elements[9]*=_,Ti.elements[10]*=_,i.setFromRotationMatrix(Ti),s.x=u,s.y=f,s.z=h,this}makePerspective(e,i,s,l,u,f,h=da){const p=this.elements,m=2*u/(i-e),g=2*u/(s-l),_=(i+e)/(i-e),x=(s+l)/(s-l);let y,M;if(h===da)y=-(f+u)/(f-u),M=-2*f*u/(f-u);else if(h===rc)y=-f/(f-u),M=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=M,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,u,f,h=da){const p=this.elements,m=1/(i-e),g=1/(s-l),_=1/(f-u),x=(i+e)*m,y=(s+l)*g;let M,A;if(h===da)M=(f+u)*_,A=-2*_;else if(h===rc)M=u*_,A=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=A,p[14]=-M,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const bs=new se,Ti=new cn,XE=new se(0,0,0),WE=new se(1,1,1),Ka=new se,Du=new se,si=new se,d0=new cn,p0=new fl;class _a{constructor(e=0,i=0,s=0,l=_a.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],f=l[4],h=l[8],p=l[1],m=l[5],g=l[9],_=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(yt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-yt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(yt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return d0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(d0,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return p0.setFromEuler(this),this.setFromQuaternion(p0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_a.DEFAULT_ORDER="XYZ";class L_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jE=0;const m0=new se,As=new fl,la=new cn,Lu=new se,Zo=new se,qE=new se,YE=new fl,g0=new se(1,0,0),v0=new se(0,1,0),_0=new se(0,0,1),x0={type:"added"},ZE={type:"removed"},Rs={type:"childadded",child:null},Ph={type:"childremoved",child:null};class ui extends Sa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jE++}),this.uuid=cl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ui.DEFAULT_UP.clone();const e=new se,i=new _a,s=new fl,l=new se(1,1,1);function u(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new cn},normalMatrix:{value:new st}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=ui.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new L_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return As.setFromAxisAngle(e,i),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,i){return As.setFromAxisAngle(e,i),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(g0,e)}rotateY(e){return this.rotateOnAxis(v0,e)}rotateZ(e){return this.rotateOnAxis(_0,e)}translateOnAxis(e,i){return m0.copy(e).applyQuaternion(this.quaternion),this.position.add(m0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(g0,e)}translateY(e){return this.translateOnAxis(v0,e)}translateZ(e){return this.translateOnAxis(_0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(la.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Lu.copy(e):Lu.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?la.lookAt(Zo,Lu,this.up):la.lookAt(Lu,Zo,this.up),this.quaternion.setFromRotationMatrix(la),l&&(la.extractRotation(l.matrixWorld),As.setFromRotationMatrix(la),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(x0),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(ZE),Ph.child=e,this.dispatchEvent(Ph),Ph.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),la.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),la.multiply(e.parent.matrixWorld)),e.applyMatrix4(la),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(x0),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,e,qE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,YE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?{min:h.boundingBox.min.toArray(),max:h.boundingBox.max.toArray()}:void 0,boundingSphere:h.boundingSphere?{radius:h.boundingSphere.radius,center:h.boundingSphere.center.toArray()}:void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function u(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const _=p[m];u(e.shapes,_)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(u(e.materials,this.material[p]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(u(e.animations,p))}}if(i){const h=f(e.geometries),p=f(e.materials),m=f(e.textures),g=f(e.images),_=f(e.shapes),x=f(e.skeletons),y=f(e.animations),M=f(e.nodes);h.length>0&&(s.geometries=h),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),y.length>0&&(s.animations=y),M.length>0&&(s.nodes=M)}return s.object=l,s;function f(h){const p=[];for(const m in h){const g=h[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}ui.DEFAULT_UP=new se(0,1,0);ui.DEFAULT_MATRIX_AUTO_UPDATE=!0;ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bi=new se,ua=new se,Bh=new se,ca=new se,ws=new se,Cs=new se,S0=new se,zh=new se,Ih=new se,Fh=new se,Hh=new Qt,Gh=new Qt,Vh=new Qt;class Ai{constructor(e=new se,i=new se,s=new se){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),bi.subVectors(e,i),l.cross(bi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){bi.subVectors(l,i),ua.subVectors(s,i),Bh.subVectors(e,i);const f=bi.dot(bi),h=bi.dot(ua),p=bi.dot(Bh),m=ua.dot(ua),g=ua.dot(Bh),_=f*m-h*h;if(_===0)return u.set(0,0,0),null;const x=1/_,y=(m*p-h*g)*x,M=(f*g-h*p)*x;return u.set(1-y-M,M,y)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ca)===null?!1:ca.x>=0&&ca.y>=0&&ca.x+ca.y<=1}static getInterpolation(e,i,s,l,u,f,h,p){return this.getBarycoord(e,i,s,l,ca)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,ca.x),p.addScaledVector(f,ca.y),p.addScaledVector(h,ca.z),p)}static getInterpolatedAttribute(e,i,s,l,u,f){return Hh.setScalar(0),Gh.setScalar(0),Vh.setScalar(0),Hh.fromBufferAttribute(e,i),Gh.fromBufferAttribute(e,s),Vh.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Hh,u.x),f.addScaledVector(Gh,u.y),f.addScaledVector(Vh,u.z),f}static isFrontFacing(e,i,s,l){return bi.subVectors(s,i),ua.subVectors(e,i),bi.cross(ua).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),ua.subVectors(this.a,this.b),bi.cross(ua).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ai.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return Ai.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return Ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let f,h;ws.subVectors(l,s),Cs.subVectors(u,s),zh.subVectors(e,s);const p=ws.dot(zh),m=Cs.dot(zh);if(p<=0&&m<=0)return i.copy(s);Ih.subVectors(e,l);const g=ws.dot(Ih),_=Cs.dot(Ih);if(g>=0&&_<=g)return i.copy(l);const x=p*_-g*m;if(x<=0&&p>=0&&g<=0)return f=p/(p-g),i.copy(s).addScaledVector(ws,f);Fh.subVectors(e,u);const y=ws.dot(Fh),M=Cs.dot(Fh);if(M>=0&&y<=M)return i.copy(u);const A=y*m-p*M;if(A<=0&&m>=0&&M<=0)return h=m/(m-M),i.copy(s).addScaledVector(Cs,h);const S=g*M-y*_;if(S<=0&&_-g>=0&&y-M>=0)return S0.subVectors(u,l),h=(_-g)/(_-g+(y-M)),i.copy(l).addScaledVector(S0,h);const v=1/(S+A+x);return f=A*v,h=x*v,i.copy(s).addScaledVector(ws,f).addScaledVector(Cs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const N_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qa={h:0,s:0,l:0},Nu={h:0,s:0,l:0};function kh(a,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(e-a)*6*i:i<1/2?e:i<2/3?a+(e-a)*6*(2/3-i):a}class Nt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=Rt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Rt.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=Rt.workingColorSpace){if(e=DE(e,1),i=yt(i,0,1),s=yt(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,f=2*s-u;this.r=kh(f,u,e+1/3),this.g=kh(f,u,e),this.b=kh(f,u,e-1/3)}return Rt.toWorkingColorSpace(this,l),this}setStyle(e,i=Ht){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Ht){const s=N_[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ma(e.r),this.g=ma(e.g),this.b=ma(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return Rt.fromWorkingColorSpace(On.copy(this),e),Math.round(yt(On.r*255,0,255))*65536+Math.round(yt(On.g*255,0,255))*256+Math.round(yt(On.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Rt.workingColorSpace){Rt.fromWorkingColorSpace(On.copy(this),i);const s=On.r,l=On.g,u=On.b,f=Math.max(s,l,u),h=Math.min(s,l,u);let p,m;const g=(h+f)/2;if(h===f)p=0,m=0;else{const _=f-h;switch(m=g<=.5?_/(f+h):_/(2-f-h),f){case s:p=(l-u)/_+(l<u?6:0);break;case l:p=(u-s)/_+2;break;case u:p=(s-l)/_+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,i=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(On.copy(this),i),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=Ht){Rt.fromWorkingColorSpace(On.copy(this),e);const i=On.r,s=On.g,l=On.b;return e!==Ht?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Qa),this.setHSL(Qa.h+e,Qa.s+i,Qa.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Qa),e.getHSL(Nu);const s=Ah(Qa.h,Nu.h,i),l=Ah(Qa.s,Nu.s,i),u=Ah(Qa.l,Nu.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Nt;Nt.NAMES=N_;let KE=0;class qs extends Sa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=cl(),this.name="",this.type="Material",this.blending=zs,this.side=va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rd,this.blendDst=sd,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=s0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(s.blending=this.blending),this.side!==va&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==rd&&(s.blendSrc=this.blendSrc),this.blendDst!==sd&&(s.blendDst=this.blendDst),this.blendEquation!==Or&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==s0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const f=[];for(const h in u){const p=u[h];delete p.metadata,f.push(p)}return f}if(i){const u=l(e.textures),f=l(e.images);u.length>0&&(s.textures=u),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fc extends qs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _a,this.combine=x_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const un=new se,Ou=new ot;let QE=0;class xi{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:QE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=o0,this.updateRanges=[],this.gpuType=ha,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Ou.fromBufferAttribute(this,i),Ou.applyMatrix3(e),this.setXY(i,Ou.x,Ou.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(e),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.transformDirection(e),this.setXYZ(i,un.x,un.y,un.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=jo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Yn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=jo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=jo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=jo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=jo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),s=Yn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),s=Yn(s,this.array),l=Yn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),s=Yn(s,this.array),l=Yn(l,this.array),u=Yn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==o0&&(e.usage=this.usage),e}}class O_ extends xi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class P_ extends xi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Ir extends xi{constructor(e,i,s){super(new Float32Array(e),i,s)}}let JE=0;const vi=new cn,Xh=new ui,Us=new se,oi=new hl,Ko=new hl,En=new se;class sr extends Sa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:JE++}),this.uuid=cl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(U_(e)?P_:O_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new st().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,i,s){return vi.makeTranslation(e,i,s),this.applyMatrix4(vi),this}scale(e,i,s){return vi.makeScale(e,i,s),this.applyMatrix4(vi),this}lookAt(e){return Xh.lookAt(e),Xh.updateMatrix(),this.applyMatrix4(Xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ir(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];oi.setFromBufferAttribute(u),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new op);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(e){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),i)for(let u=0,f=i.length;u<f;u++){const h=i[u];Ko.setFromBufferAttribute(h),this.morphTargetsRelative?(En.addVectors(oi.min,Ko.min),oi.expandByPoint(En),En.addVectors(oi.max,Ko.max),oi.expandByPoint(En)):(oi.expandByPoint(Ko.min),oi.expandByPoint(Ko.max))}oi.getCenter(s);let l=0;for(let u=0,f=e.count;u<f;u++)En.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(En));if(i)for(let u=0,f=i.length;u<f;u++){const h=i[u],p=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)En.fromBufferAttribute(h,m),p&&(Us.fromBufferAttribute(e,m),En.add(Us)),l=Math.max(l,s.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],p=[];for(let j=0;j<s.count;j++)h[j]=new se,p[j]=new se;const m=new se,g=new se,_=new se,x=new ot,y=new ot,M=new ot,A=new se,S=new se;function v(j,D,w){m.fromBufferAttribute(s,j),g.fromBufferAttribute(s,D),_.fromBufferAttribute(s,w),x.fromBufferAttribute(u,j),y.fromBufferAttribute(u,D),M.fromBufferAttribute(u,w),g.sub(m),_.sub(m),y.sub(x),M.sub(x);const V=1/(y.x*M.y-M.x*y.y);isFinite(V)&&(A.copy(g).multiplyScalar(M.y).addScaledVector(_,-y.y).multiplyScalar(V),S.copy(_).multiplyScalar(y.x).addScaledVector(g,-M.x).multiplyScalar(V),h[j].add(A),h[D].add(A),h[w].add(A),p[j].add(S),p[D].add(S),p[w].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let j=0,D=N.length;j<D;++j){const w=N[j],V=w.start,ue=w.count;for(let oe=V,xe=V+ue;oe<xe;oe+=3)v(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const C=new se,U=new se,H=new se,k=new se;function I(j){H.fromBufferAttribute(l,j),k.copy(H);const D=h[j];C.copy(D),C.sub(H.multiplyScalar(H.dot(D))).normalize(),U.crossVectors(k,D);const V=U.dot(p[j])<0?-1:1;f.setXYZW(j,C.x,C.y,C.z,V)}for(let j=0,D=N.length;j<D;++j){const w=N[j],V=w.start,ue=w.count;for(let oe=V,xe=V+ue;oe<xe;oe+=3)I(e.getX(oe+0)),I(e.getX(oe+1)),I(e.getX(oe+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new xi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,y=s.count;x<y;x++)s.setXYZ(x,0,0,0);const l=new se,u=new se,f=new se,h=new se,p=new se,m=new se,g=new se,_=new se;if(e)for(let x=0,y=e.count;x<y;x+=3){const M=e.getX(x+0),A=e.getX(x+1),S=e.getX(x+2);l.fromBufferAttribute(i,M),u.fromBufferAttribute(i,A),f.fromBufferAttribute(i,S),g.subVectors(f,u),_.subVectors(l,u),g.cross(_),h.fromBufferAttribute(s,M),p.fromBufferAttribute(s,A),m.fromBufferAttribute(s,S),h.add(g),p.add(g),m.add(g),s.setXYZ(M,h.x,h.y,h.z),s.setXYZ(A,p.x,p.y,p.z),s.setXYZ(S,m.x,m.y,m.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),g.subVectors(f,u),_.subVectors(l,u),g.cross(_),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)En.fromBufferAttribute(e,i),En.normalize(),e.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function e(h,p){const m=h.array,g=h.itemSize,_=h.normalized,x=new m.constructor(p.length*g);let y=0,M=0;for(let A=0,S=p.length;A<S;A++){h.isInterleavedBufferAttribute?y=p[A]*h.data.stride+h.offset:y=p[A]*g;for(let v=0;v<g;v++)x[M++]=m[y++]}return new xi(x,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new sr,s=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=e(p,s);i.setAttribute(h,m)}const u=this.morphAttributes;for(const h in u){const p=[],m=u[h];for(let g=0,_=m.length;g<_;g++){const x=m[g],y=e(x,s);p.push(y)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,p=f.length;h<p;h++){const m=f[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let _=0,x=m.length;_<x;_++){const y=m[_];g.push(y.toJSON(e.data))}g.length>0&&(l[p]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const u=e.morphAttributes;for(const m in u){const g=[],_=u[m];for(let x=0,y=_.length;x<y;x++)g.push(_[x].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,g=f.length;m<g;m++){const _=f[m];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const y0=new cn,wr=new kE,Pu=new op,E0=new se,Bu=new se,zu=new se,Iu=new se,Wh=new se,Fu=new se,M0=new se,Hu=new se;class _i extends ui{constructor(e=new sr,i=new fc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){Fu.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=h[p],_=u[p];g!==0&&(Wh.fromBufferAttribute(_,e),f?Fu.addScaledVector(Wh,g):Fu.addScaledVector(Wh.sub(i),g))}i.add(Fu)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Pu.copy(s.boundingSphere),Pu.applyMatrix4(u),wr.copy(e.ray).recast(e.near),!(Pu.containsPoint(wr.origin)===!1&&(wr.intersectSphere(Pu,E0)===null||wr.origin.distanceToSquared(E0)>(e.far-e.near)**2))&&(y0.copy(u).invert(),wr.copy(e.ray).applyMatrix4(y0),!(s.boundingBox!==null&&wr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,wr)))}_computeIntersections(e,i,s){let l;const u=this.geometry,f=this.material,h=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,_=u.attributes.normal,x=u.groups,y=u.drawRange;if(h!==null)if(Array.isArray(f))for(let M=0,A=x.length;M<A;M++){const S=x[M],v=f[S.materialIndex],N=Math.max(S.start,y.start),C=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let U=N,H=C;U<H;U+=3){const k=h.getX(U),I=h.getX(U+1),j=h.getX(U+2);l=Gu(this,v,e,s,m,g,_,k,I,j),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const M=Math.max(0,y.start),A=Math.min(h.count,y.start+y.count);for(let S=M,v=A;S<v;S+=3){const N=h.getX(S),C=h.getX(S+1),U=h.getX(S+2);l=Gu(this,f,e,s,m,g,_,N,C,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let M=0,A=x.length;M<A;M++){const S=x[M],v=f[S.materialIndex],N=Math.max(S.start,y.start),C=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let U=N,H=C;U<H;U+=3){const k=U,I=U+1,j=U+2;l=Gu(this,v,e,s,m,g,_,k,I,j),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const M=Math.max(0,y.start),A=Math.min(p.count,y.start+y.count);for(let S=M,v=A;S<v;S+=3){const N=S,C=S+1,U=S+2;l=Gu(this,f,e,s,m,g,_,N,C,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function $E(a,e,i,s,l,u,f,h){let p;if(e.side===Mn?p=s.intersectTriangle(f,u,l,!0,h):p=s.intersectTriangle(l,u,f,e.side===va,h),p===null)return null;Hu.copy(h),Hu.applyMatrix4(a.matrixWorld);const m=i.ray.origin.distanceTo(Hu);return m<i.near||m>i.far?null:{distance:m,point:Hu.clone(),object:a}}function Gu(a,e,i,s,l,u,f,h,p,m){a.getVertexPosition(h,Bu),a.getVertexPosition(p,zu),a.getVertexPosition(m,Iu);const g=$E(a,e,i,s,Bu,zu,Iu,M0);if(g){const _=new se;Ai.getBarycoord(M0,Bu,zu,Iu,_),l&&(g.uv=Ai.getInterpolatedAttribute(l,h,p,m,_,new ot)),u&&(g.uv1=Ai.getInterpolatedAttribute(u,h,p,m,_,new ot)),f&&(g.normal=Ai.getInterpolatedAttribute(f,h,p,m,_,new se),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:p,c:m,normal:new se,materialIndex:0};Ai.getNormal(Bu,zu,Iu,x.normal),g.face=x,g.barycoord=_}return g}class Vr extends sr{constructor(e=1,i=1,s=1,l=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:f};const h=this;l=Math.floor(l),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],g=[],_=[];let x=0,y=0;M("z","y","x",-1,-1,s,i,e,f,u,0),M("z","y","x",1,-1,s,i,-e,f,u,1),M("x","z","y",1,1,e,s,i,l,f,2),M("x","z","y",1,-1,e,s,-i,l,f,3),M("x","y","z",1,-1,e,i,s,l,u,4),M("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(p),this.setAttribute("position",new Ir(m,3)),this.setAttribute("normal",new Ir(g,3)),this.setAttribute("uv",new Ir(_,2));function M(A,S,v,N,C,U,H,k,I,j,D){const w=U/I,V=H/j,ue=U/2,oe=H/2,xe=k/2,pe=I+1,z=j+1;let K=0,Y=0;const Me=new se;for(let O=0;O<z;O++){const ee=O*V-oe;for(let Se=0;Se<pe;Se++){const Ee=Se*w-ue;Me[A]=Ee*N,Me[S]=ee*C,Me[v]=xe,m.push(Me.x,Me.y,Me.z),Me[A]=0,Me[S]=0,Me[v]=k>0?1:-1,g.push(Me.x,Me.y,Me.z),_.push(Se/I),_.push(1-O/j),K+=1}}for(let O=0;O<j;O++)for(let ee=0;ee<I;ee++){const Se=x+ee+pe*O,Ee=x+ee+pe*(O+1),J=x+(ee+1)+pe*(O+1),me=x+(ee+1)+pe*O;p.push(Se,Ee,me),p.push(Ee,J,me),Y+=6}h.addGroup(y,Y,D),y+=Y,x+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ws(a){const e={};for(const i in a){e[i]={};for(const s in a[i]){const l=a[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function In(a){const e={};for(let i=0;i<a.length;i++){const s=Ws(a[i]);for(const l in s)e[l]=s[l]}return e}function eM(a){const e=[];for(let i=0;i<a.length;i++)e.push(a[i].clone());return e}function B_(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const tM={clone:Ws,merge:In};var nM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends qs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nM,this.fragmentShader=iM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=eM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class lp extends ui{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=da}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ja=new se,T0=new ot,b0=new ot;class Zn extends lp{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Xd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xd*2*Math.atan(Math.tan(bh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z),Ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z)}getViewSize(e,i){return this.getViewBounds(e,T0,b0),i.subVectors(b0,T0)}setViewOffset(e,i,s,l,u,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(bh*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*l/p,i-=f.offsetY*s/m,l*=f.width/p,s*=f.height/m}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ds=-90,Ls=1;class aM extends ui{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Zn(Ds,Ls,e,i);l.layers=this.layers,this.add(l);const u=new Zn(Ds,Ls,e,i);u.layers=this.layers,this.add(u);const f=new Zn(Ds,Ls,e,i);f.layers=this.layers,this.add(f);const h=new Zn(Ds,Ls,e,i);h.layers=this.layers,this.add(h);const p=new Zn(Ds,Ls,e,i);p.layers=this.layers,this.add(p);const m=new Zn(Ds,Ls,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,f,h,p]=i;for(const m of i)this.remove(m);if(e===da)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===rc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,h,p,m,g]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,u),e.setRenderTarget(s,1,l),e.render(i,f),e.setRenderTarget(s,2,l),e.render(i,h),e.setRenderTarget(s,3,l),e.render(i,p),e.setRenderTarget(s,4,l),e.render(i,m),s.texture.generateMipmaps=A,e.setRenderTarget(s,5,l),e.render(i,g),e.setRenderTarget(_,x,y),e.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class z_ extends Pn{constructor(e=[],i=Gs,s,l,u,f,h,p,m,g){super(e,i,s,l,u,f,h,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rM extends Hn{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new z_(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Kn}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Vr(5,5,5),u=new Gn({name:"CubemapFromEquirect",uniforms:Ws(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Mn,blending:Qn});u.uniforms.tEquirect.value=i;const f=new _i(l,u),h=i.minFilter;return i.minFilter===zr&&(i.minFilter=Kn),new aM(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(u)}}class Jo extends ui{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sM={type:"move"};class jh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,f=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const A of e.hand.values()){const S=i.getJointPose(A,s),v=this._getHandJoint(m,A);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],x=g.position.distanceTo(_.position),y=.02,M=.005;m.inputState.pinching&&x>y+M?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=y-M&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(sM)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Jo;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class oc extends ui{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _a,this.environmentIntensity=1,this.environmentRotation=new _a,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const qh=new se,oM=new se,lM=new st;class Lr{constructor(e=new se(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=qh.subVectors(s,i).cross(oM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(qh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||lM.getNormalMatrix(e),l=this.coplanarPoint(qh).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new op,Vu=new se;class I_{constructor(e=new Lr,i=new Lr,s=new Lr,l=new Lr,u=new Lr,f=new Lr){this.planes=[e,i,s,l,u,f]}set(e,i,s,l,u,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(u),h[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=da){const s=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],p=l[3],m=l[4],g=l[5],_=l[6],x=l[7],y=l[8],M=l[9],A=l[10],S=l[11],v=l[12],N=l[13],C=l[14],U=l[15];if(s[0].setComponents(p-u,x-m,S-y,U-v).normalize(),s[1].setComponents(p+u,x+m,S+y,U+v).normalize(),s[2].setComponents(p+f,x+g,S+M,U+N).normalize(),s[3].setComponents(p-f,x-g,S-M,U-N).normalize(),s[4].setComponents(p-h,x-_,S-A,U-C).normalize(),i===da)s[5].setComponents(p+h,x+_,S+A,U+C).normalize();else if(i===rc)s[5].setComponents(h,_,A,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Cr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){return Cr.center.set(0,0,0),Cr.radius=.7071067811865476,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Vu.x=l.normal.x>0?e.max.x:e.min.x,Vu.y=l.normal.y>0?e.max.y:e.min.y,Vu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Vu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class up extends Pn{constructor(e,i,s=ir,l,u,f,h=wi,p=wi,m,g=il){if(g!==il&&g!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,u,f,h,p,g,s,m),this.isDepthTexture=!0,this.image={width:e,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class hc extends sr{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,f=i/2,h=Math.floor(s),p=Math.floor(l),m=h+1,g=p+1,_=e/h,x=i/p,y=[],M=[],A=[],S=[];for(let v=0;v<g;v++){const N=v*x-f;for(let C=0;C<m;C++){const U=C*_-u;M.push(U,-N,0),A.push(0,0,1),S.push(C/h),S.push(1-v/p)}}for(let v=0;v<p;v++)for(let N=0;N<h;N++){const C=N+m*v,U=N+m*(v+1),H=N+1+m*(v+1),k=N+1+m*v;y.push(C,U,k),y.push(U,H,k)}this.setIndex(y),this.setAttribute("position",new Ir(M,3)),this.setAttribute("normal",new Ir(A,3)),this.setAttribute("uv",new Ir(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hc(e.width,e.height,e.widthSegments,e.heightSegments)}}class uM extends qs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ul,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cM extends qs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class fM extends lp{constructor(e=-1,i=1,s=1,l=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,f=s+e,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,f,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class hM extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Lt{constructor(e){this.value=e}clone(){return new Lt(this.value.clone===void 0?this.value:this.value.clone())}}function A0(a,e,i,s){const l=dM(s);switch(i){case T_:return a*e;case A_:return a*e/l.components*l.byteLength;case ip:return a*e/l.components*l.byteLength;case R_:return a*e*2/l.components*l.byteLength;case ap:return a*e*2/l.components*l.byteLength;case b_:return a*e*3/l.components*l.byteLength;case Ri:return a*e*4/l.components*l.byteLength;case rp:return a*e*4/l.components*l.byteLength;case Zu:case Ku:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Qu:case Ju:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case xd:case yd:return Math.max(a,16)*Math.max(e,8)/4;case _d:case Sd:return Math.max(a,8)*Math.max(e,8)/2;case Ed:case Md:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Td:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case bd:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Rd:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case wd:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Ud:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Nd:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Od:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Pd:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Bd:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case zd:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Id:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case $u:case Fd:case Hd:return Math.ceil(a/4)*Math.ceil(e/4)*16;case w_:case Gd:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Vd:case kd:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function dM(a){switch(a){case Bn:case y_:return{byteLength:1,components:1};case nl:case E_:case ll:return{byteLength:2,components:1};case tp:case np:return{byteLength:2,components:4};case ir:case ep:case ha:return{byteLength:4,components:1};case M_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ol}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ol);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function F_(){let a=null,e=!1,i=null,s=null;function l(u,f){i(u,f),s=a.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=a.requestAnimationFrame(l),e=!0)},stop:function(){a.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){a=u}}}function pM(a){const e=new WeakMap;function i(h,p){const m=h.array,g=h.usage,_=m.byteLength,x=a.createBuffer();a.bindBuffer(p,x),a.bufferData(p,m,g),h.onUploadCallback();let y;if(m instanceof Float32Array)y=a.FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?y=a.HALF_FLOAT:y=a.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=a.SHORT;else if(m instanceof Uint32Array)y=a.UNSIGNED_INT;else if(m instanceof Int32Array)y=a.INT;else if(m instanceof Int8Array)y=a.BYTE;else if(m instanceof Uint8Array)y=a.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,p,m){const g=p.array,_=p.updateRanges;if(a.bindBuffer(m,h),_.length===0)a.bufferSubData(m,0,g);else{_.sort((y,M)=>y.start-M.start);let x=0;for(let y=1;y<_.length;y++){const M=_[x],A=_[y];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++x,_[x]=A)}_.length=x+1;for(let y=0,M=_.length;y<M;y++){const A=_[y];a.bufferSubData(m,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(a.deleteBuffer(p.buffer),e.delete(h))}function f(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,p),m.version=h.version}}return{get:l,remove:u,update:f}}var mM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gM=`#ifdef USE_ALPHAHASH
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
#endif`,vM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_M=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,SM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yM=`#ifdef USE_AOMAP
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
#endif`,EM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,MM=`#ifdef USE_BATCHING
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
#endif`,TM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,RM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wM=`#ifdef USE_IRIDESCENCE
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
#endif`,CM=`#ifdef USE_BUMPMAP
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
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,PM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,BM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,IM=`#define PI 3.141592653589793
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
} // validated`,FM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,HM=`vec3 transformedNormal = objectNormal;
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
#endif`,GM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,VM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WM="gl_FragColor = linearToOutputTexel( gl_FragColor );",jM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qM=`#ifdef USE_ENVMAP
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
#endif`,YM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ZM=`#ifdef USE_ENVMAP
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
#endif`,KM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,QM=`#ifdef USE_ENVMAP
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
#endif`,JM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$M=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nT=`#ifdef USE_GRADIENTMAP
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
}`,iT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sT=`uniform bool receiveShadow;
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
#endif`,oT=`#ifdef USE_ENVMAP
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
#endif`,lT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hT=`PhysicalMaterial material;
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
#endif`,dT=`struct PhysicalMaterial {
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
}`,pT=`
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
#endif`,mT=`#if defined( RE_IndirectDiffuse )
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
#endif`,gT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_T=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ST=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ET=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,MT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,TT=`#if defined( USE_POINTS_UV )
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
#endif`,bT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,CT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UT=`#ifdef USE_MORPHTARGETS
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
#endif`,DT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,NT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,OT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zT=`#ifdef USE_NORMALMAP
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
#endif`,IT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,HT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,XT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$T=`float getShadowMask() {
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
}`,eb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tb=`#ifdef USE_SKINNING
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
#endif`,nb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ib=`#ifdef USE_SKINNING
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
#endif`,ab=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ob=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lb=`#ifdef USE_TRANSMISSION
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
#endif`,ub=`#ifdef USE_TRANSMISSION
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
#endif`,cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,db=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mb=`uniform sampler2D t2D;
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
}`,gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sb=`#include <common>
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
}`,yb=`#if DEPTH_PACKING == 3200
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
}`,Eb=`#define DISTANCE
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
}`,Mb=`#define DISTANCE
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
}`,Tb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ab=`uniform float scale;
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
}`,Rb=`uniform vec3 diffuse;
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
}`,wb=`#include <common>
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
}`,Cb=`uniform vec3 diffuse;
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
}`,Ub=`#define LAMBERT
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
}`,Db=`#define LAMBERT
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
}`,Lb=`#define MATCAP
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
}`,Nb=`#define MATCAP
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
}`,Ob=`#define NORMAL
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
}`,Pb=`#define NORMAL
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
}`,Bb=`#define PHONG
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
}`,zb=`#define PHONG
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
}`,Ib=`#define STANDARD
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
}`,Fb=`#define STANDARD
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
}`,Hb=`#define TOON
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
}`,Gb=`#define TOON
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
}`,Vb=`uniform float size;
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
}`,kb=`uniform vec3 diffuse;
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
}`,Xb=`#include <common>
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
}`,Wb=`uniform vec3 color;
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
}`,jb=`uniform float rotation;
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
}`,qb=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:mM,alphahash_pars_fragment:gM,alphamap_fragment:vM,alphamap_pars_fragment:_M,alphatest_fragment:xM,alphatest_pars_fragment:SM,aomap_fragment:yM,aomap_pars_fragment:EM,batching_pars_vertex:MM,batching_vertex:TM,begin_vertex:bM,beginnormal_vertex:AM,bsdfs:RM,iridescence_fragment:wM,bumpmap_pars_fragment:CM,clipping_planes_fragment:UM,clipping_planes_pars_fragment:DM,clipping_planes_pars_vertex:LM,clipping_planes_vertex:NM,color_fragment:OM,color_pars_fragment:PM,color_pars_vertex:BM,color_vertex:zM,common:IM,cube_uv_reflection_fragment:FM,defaultnormal_vertex:HM,displacementmap_pars_vertex:GM,displacementmap_vertex:VM,emissivemap_fragment:kM,emissivemap_pars_fragment:XM,colorspace_fragment:WM,colorspace_pars_fragment:jM,envmap_fragment:qM,envmap_common_pars_fragment:YM,envmap_pars_fragment:ZM,envmap_pars_vertex:KM,envmap_physical_pars_fragment:oT,envmap_vertex:QM,fog_vertex:JM,fog_pars_vertex:$M,fog_fragment:eT,fog_pars_fragment:tT,gradientmap_pars_fragment:nT,lightmap_pars_fragment:iT,lights_lambert_fragment:aT,lights_lambert_pars_fragment:rT,lights_pars_begin:sT,lights_toon_fragment:lT,lights_toon_pars_fragment:uT,lights_phong_fragment:cT,lights_phong_pars_fragment:fT,lights_physical_fragment:hT,lights_physical_pars_fragment:dT,lights_fragment_begin:pT,lights_fragment_maps:mT,lights_fragment_end:gT,logdepthbuf_fragment:vT,logdepthbuf_pars_fragment:_T,logdepthbuf_pars_vertex:xT,logdepthbuf_vertex:ST,map_fragment:yT,map_pars_fragment:ET,map_particle_fragment:MT,map_particle_pars_fragment:TT,metalnessmap_fragment:bT,metalnessmap_pars_fragment:AT,morphinstance_vertex:RT,morphcolor_vertex:wT,morphnormal_vertex:CT,morphtarget_pars_vertex:UT,morphtarget_vertex:DT,normal_fragment_begin:LT,normal_fragment_maps:NT,normal_pars_fragment:OT,normal_pars_vertex:PT,normal_vertex:BT,normalmap_pars_fragment:zT,clearcoat_normal_fragment_begin:IT,clearcoat_normal_fragment_maps:FT,clearcoat_pars_fragment:HT,iridescence_pars_fragment:GT,opaque_fragment:VT,packing:kT,premultiplied_alpha_fragment:XT,project_vertex:WT,dithering_fragment:jT,dithering_pars_fragment:qT,roughnessmap_fragment:YT,roughnessmap_pars_fragment:ZT,shadowmap_pars_fragment:KT,shadowmap_pars_vertex:QT,shadowmap_vertex:JT,shadowmask_pars_fragment:$T,skinbase_vertex:eb,skinning_pars_vertex:tb,skinning_vertex:nb,skinnormal_vertex:ib,specularmap_fragment:ab,specularmap_pars_fragment:rb,tonemapping_fragment:sb,tonemapping_pars_fragment:ob,transmission_fragment:lb,transmission_pars_fragment:ub,uv_pars_fragment:cb,uv_pars_vertex:fb,uv_vertex:hb,worldpos_vertex:db,background_vert:pb,background_frag:mb,backgroundCube_vert:gb,backgroundCube_frag:vb,cube_vert:_b,cube_frag:xb,depth_vert:Sb,depth_frag:yb,distanceRGBA_vert:Eb,distanceRGBA_frag:Mb,equirect_vert:Tb,equirect_frag:bb,linedashed_vert:Ab,linedashed_frag:Rb,meshbasic_vert:wb,meshbasic_frag:Cb,meshlambert_vert:Ub,meshlambert_frag:Db,meshmatcap_vert:Lb,meshmatcap_frag:Nb,meshnormal_vert:Ob,meshnormal_frag:Pb,meshphong_vert:Bb,meshphong_frag:zb,meshphysical_vert:Ib,meshphysical_frag:Fb,meshtoon_vert:Hb,meshtoon_frag:Gb,points_vert:Vb,points_frag:kb,shadow_vert:Xb,shadow_frag:Wb,sprite_vert:jb,sprite_frag:qb},De={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},zi={basic:{uniforms:In([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:In([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Nt(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:In([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:In([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:In([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Nt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:In([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:In([De.points,De.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:In([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:In([De.common,De.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:In([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:In([De.sprite,De.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:In([De.common,De.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:In([De.lights,De.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};zi.physical={uniforms:In([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const ku={r:0,b:0,g:0},Ur=new _a,Yb=new cn;function Zb(a,e,i,s,l,u,f){const h=new Nt(0);let p=u===!0?0:1,m,g,_=null,x=0,y=null;function M(C){let U=C.isScene===!0?C.background:null;return U&&U.isTexture&&(U=(C.backgroundBlurriness>0?i:e).get(U)),U}function A(C){let U=!1;const H=M(C);H===null?v(h,p):H&&H.isColor&&(v(H,1),U=!0);const k=a.xr.getEnvironmentBlendMode();k==="additive"?s.buffers.color.setClear(0,0,0,1,f):k==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(a.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function S(C,U){const H=M(U);H&&(H.isCubeTexture||H.mapping===cc)?(g===void 0&&(g=new _i(new Vr(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:Ws(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(k,I,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Ur.copy(U.backgroundRotation),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),g.material.uniforms.envMap.value=H,g.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(Yb.makeRotationFromEuler(Ur)),g.material.toneMapped=Rt.getTransfer(H.colorSpace)!==Ft,(_!==H||x!==H.version||y!==a.toneMapping)&&(g.material.needsUpdate=!0,_=H,x=H.version,y=a.toneMapping),g.layers.enableAll(),C.unshift(g,g.geometry,g.material,0,0,null)):H&&H.isTexture&&(m===void 0&&(m=new _i(new hc(2,2),new Gn({name:"BackgroundMaterial",uniforms:Ws(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:va,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=H,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=Rt.getTransfer(H.colorSpace)!==Ft,H.matrixAutoUpdate===!0&&H.updateMatrix(),m.material.uniforms.uvTransform.value.copy(H.matrix),(_!==H||x!==H.version||y!==a.toneMapping)&&(m.material.needsUpdate=!0,_=H,x=H.version,y=a.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function v(C,U){C.getRGB(ku,B_(a)),s.buffers.color.setClear(ku.r,ku.g,ku.b,U,f)}function N(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(C,U=1){h.set(C),p=U,v(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(C){p=C,v(h,p)},render:A,addToRenderList:S,dispose:N}}function Kb(a,e){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),s={},l=x(null);let u=l,f=!1;function h(w,V,ue,oe,xe){let pe=!1;const z=_(oe,ue,V);u!==z&&(u=z,m(u.object)),pe=y(w,oe,ue,xe),pe&&M(w,oe,ue,xe),xe!==null&&e.update(xe,a.ELEMENT_ARRAY_BUFFER),(pe||f)&&(f=!1,U(w,V,ue,oe),xe!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(xe).buffer))}function p(){return a.createVertexArray()}function m(w){return a.bindVertexArray(w)}function g(w){return a.deleteVertexArray(w)}function _(w,V,ue){const oe=ue.wireframe===!0;let xe=s[w.id];xe===void 0&&(xe={},s[w.id]=xe);let pe=xe[V.id];pe===void 0&&(pe={},xe[V.id]=pe);let z=pe[oe];return z===void 0&&(z=x(p()),pe[oe]=z),z}function x(w){const V=[],ue=[],oe=[];for(let xe=0;xe<i;xe++)V[xe]=0,ue[xe]=0,oe[xe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ue,attributeDivisors:oe,object:w,attributes:{},index:null}}function y(w,V,ue,oe){const xe=u.attributes,pe=V.attributes;let z=0;const K=ue.getAttributes();for(const Y in K)if(K[Y].location>=0){const O=xe[Y];let ee=pe[Y];if(ee===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(ee=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(ee=w.instanceColor)),O===void 0||O.attribute!==ee||ee&&O.data!==ee.data)return!0;z++}return u.attributesNum!==z||u.index!==oe}function M(w,V,ue,oe){const xe={},pe=V.attributes;let z=0;const K=ue.getAttributes();for(const Y in K)if(K[Y].location>=0){let O=pe[Y];O===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(O=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(O=w.instanceColor));const ee={};ee.attribute=O,O&&O.data&&(ee.data=O.data),xe[Y]=ee,z++}u.attributes=xe,u.attributesNum=z,u.index=oe}function A(){const w=u.newAttributes;for(let V=0,ue=w.length;V<ue;V++)w[V]=0}function S(w){v(w,0)}function v(w,V){const ue=u.newAttributes,oe=u.enabledAttributes,xe=u.attributeDivisors;ue[w]=1,oe[w]===0&&(a.enableVertexAttribArray(w),oe[w]=1),xe[w]!==V&&(a.vertexAttribDivisor(w,V),xe[w]=V)}function N(){const w=u.newAttributes,V=u.enabledAttributes;for(let ue=0,oe=V.length;ue<oe;ue++)V[ue]!==w[ue]&&(a.disableVertexAttribArray(ue),V[ue]=0)}function C(w,V,ue,oe,xe,pe,z){z===!0?a.vertexAttribIPointer(w,V,ue,xe,pe):a.vertexAttribPointer(w,V,ue,oe,xe,pe)}function U(w,V,ue,oe){A();const xe=oe.attributes,pe=ue.getAttributes(),z=V.defaultAttributeValues;for(const K in pe){const Y=pe[K];if(Y.location>=0){let Me=xe[K];if(Me===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(Me=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(Me=w.instanceColor)),Me!==void 0){const O=Me.normalized,ee=Me.itemSize,Se=e.get(Me);if(Se===void 0)continue;const Ee=Se.buffer,J=Se.type,me=Se.bytesPerElement,ye=J===a.INT||J===a.UNSIGNED_INT||Me.gpuType===ep;if(Me.isInterleavedBufferAttribute){const Re=Me.data,Le=Re.stride,lt=Me.offset;if(Re.isInstancedInterleavedBuffer){for(let Ke=0;Ke<Y.locationSize;Ke++)v(Y.location+Ke,Re.meshPerAttribute);w.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let Ke=0;Ke<Y.locationSize;Ke++)S(Y.location+Ke);a.bindBuffer(a.ARRAY_BUFFER,Ee);for(let Ke=0;Ke<Y.locationSize;Ke++)C(Y.location+Ke,ee/Y.locationSize,J,O,Le*me,(lt+ee/Y.locationSize*Ke)*me,ye)}else{if(Me.isInstancedBufferAttribute){for(let Re=0;Re<Y.locationSize;Re++)v(Y.location+Re,Me.meshPerAttribute);w.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Re=0;Re<Y.locationSize;Re++)S(Y.location+Re);a.bindBuffer(a.ARRAY_BUFFER,Ee);for(let Re=0;Re<Y.locationSize;Re++)C(Y.location+Re,ee/Y.locationSize,J,O,ee*me,ee/Y.locationSize*Re*me,ye)}}else if(z!==void 0){const O=z[K];if(O!==void 0)switch(O.length){case 2:a.vertexAttrib2fv(Y.location,O);break;case 3:a.vertexAttrib3fv(Y.location,O);break;case 4:a.vertexAttrib4fv(Y.location,O);break;default:a.vertexAttrib1fv(Y.location,O)}}}}N()}function H(){j();for(const w in s){const V=s[w];for(const ue in V){const oe=V[ue];for(const xe in oe)g(oe[xe].object),delete oe[xe];delete V[ue]}delete s[w]}}function k(w){if(s[w.id]===void 0)return;const V=s[w.id];for(const ue in V){const oe=V[ue];for(const xe in oe)g(oe[xe].object),delete oe[xe];delete V[ue]}delete s[w.id]}function I(w){for(const V in s){const ue=s[V];if(ue[w.id]===void 0)continue;const oe=ue[w.id];for(const xe in oe)g(oe[xe].object),delete oe[xe];delete ue[w.id]}}function j(){D(),f=!0,u!==l&&(u=l,m(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:j,resetDefaultState:D,dispose:H,releaseStatesOfGeometry:k,releaseStatesOfProgram:I,initAttributes:A,enableAttribute:S,disableUnusedAttributes:N}}function Qb(a,e,i){let s;function l(m){s=m}function u(m,g){a.drawArrays(s,m,g),i.update(g,s,1)}function f(m,g,_){_!==0&&(a.drawArraysInstanced(s,m,g,_),i.update(g,s,_))}function h(m,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,g,0,_);let y=0;for(let M=0;M<_;M++)y+=g[M];i.update(y,s,1)}function p(m,g,_,x){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<m.length;M++)f(m[M],g[M],x[M]);else{y.multiDrawArraysInstancedWEBGL(s,m,0,g,0,x,0,_);let M=0;for(let A=0;A<_;A++)M+=g[A]*x[A];i.update(M,s,1)}}this.setMode=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function Jb(a,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=a.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(I){return!(I!==Ri&&s.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const j=I===ll&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Bn&&s.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ha&&!j)}function p(I){if(I==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const _=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),M=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=a.getParameter(a.MAX_TEXTURE_SIZE),S=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),v=a.getParameter(a.MAX_VERTEX_ATTRIBS),N=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),C=a.getParameter(a.MAX_VARYING_VECTORS),U=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),H=M>0,k=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:_,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:N,maxVaryings:C,maxFragmentUniforms:U,vertexTextures:H,maxSamples:k}}function $b(a){const e=this;let i=null,s=0,l=!1,u=!1;const f=new Lr,h=new st,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const y=_.length!==0||x||s!==0||l;return l=x,s=_.length,y},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,x){i=g(_,x,0)},this.setState=function(_,x,y){const M=_.clippingPlanes,A=_.clipIntersection,S=_.clipShadows,v=a.get(_);if(!l||M===null||M.length===0||u&&!S)u?g(null):m();else{const N=u?0:s,C=N*4;let U=v.clippingState||null;p.value=U,U=g(M,x,C,y);for(let H=0;H!==C;++H)U[H]=i[H];v.clippingState=U,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=N}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(_,x,y,M){const A=_!==null?_.length:0;let S=null;if(A!==0){if(S=p.value,M!==!0||S===null){const v=y+A*4,N=x.matrixWorldInverse;h.getNormalMatrix(N),(S===null||S.length<v)&&(S=new Float32Array(v));for(let C=0,U=y;C!==A;++C,U+=4)f.copy(_[C]).applyMatrix4(N,h),f.normal.toArray(S,U),S[U+3]=f.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}function e2(a){let e=new WeakMap;function i(f,h){return h===pd?f.mapping=Gs:h===md&&(f.mapping=Vs),f}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===pd||h===md)if(e.has(f)){const p=e.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new rM(p.height);return m.fromEquirectangularTexture(a,f),e.set(f,m),f.addEventListener("dispose",l),i(m.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}const Bs=4,R0=[.125,.215,.35,.446,.526,.582],Pr=20,Yh=new fM,w0=new Nt;let Zh=null,Kh=0,Qh=0,Jh=!1;const Nr=(1+Math.sqrt(5))/2,Ns=1/Nr,C0=[new se(-Nr,Ns,0),new se(Nr,Ns,0),new se(-Ns,0,Nr),new se(Ns,0,Nr),new se(0,Nr,-Ns),new se(0,Nr,Ns),new se(-1,1,-1),new se(1,1,-1),new se(-1,1,1),new se(1,1,1)],t2=new se;class U0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100,u={}){const{size:f=256,position:h=t2}=u;Zh=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),Qh=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,s,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=N0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=L0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zh,Kh,Qh),this._renderer.xr.enabled=Jh,e.scissorTest=!1,Xu(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Gs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zh=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),Qh=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:ll,format:Ri,colorSpace:ar,depthBuffer:!1},l=D0(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=D0(e,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=n2(u)),this._blurMaterial=i2(u,e,i)}return l}_compileMaterial(e){const i=new _i(this._lodPlanes[0],e);this._renderer.compile(i,Yh)}_sceneToCubeUV(e,i,s,l,u){const p=new Zn(90,1,i,s),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,y=_.toneMapping;_.getClearColor(w0),_.toneMapping=nr,_.autoClear=!1;const M=new fc({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),A=new _i(new Vr,M);let S=!1;const v=e.background;v?v.isColor&&(M.color.copy(v),e.background=null,S=!0):(M.color.copy(w0),S=!0);for(let N=0;N<6;N++){const C=N%3;C===0?(p.up.set(0,m[N],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+g[N],u.y,u.z)):C===1?(p.up.set(0,0,m[N]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+g[N],u.z)):(p.up.set(0,m[N],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+g[N]));const U=this._cubeSize;Xu(l,C*U,N>2?U:0,U,U),_.setRenderTarget(l),S&&_.render(A,p),_.render(e,p)}A.geometry.dispose(),A.material.dispose(),_.toneMapping=y,_.autoClear=x,e.background=v}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Gs||e.mapping===Vs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=N0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=L0());const u=l?this._cubemapMaterial:this._equirectMaterial,f=new _i(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=e;const p=this._cubeSize;Xu(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(f,Yh)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=C0[(l-u-1)%C0.length];this._blur(e,u-1,u,f,h)}i.autoClear=s}_blur(e,i,s,l,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",u),this._halfBlur(f,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,f,h){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new _i(this._lodPlanes[l],m),x=m.uniforms,y=this._sizeLods[s]-1,M=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Pr-1),A=u/M,S=isFinite(u)?1+Math.floor(g*A):Pr;S>Pr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Pr}`);const v=[];let N=0;for(let I=0;I<Pr;++I){const j=I/A,D=Math.exp(-j*j/2);v.push(D),I===0?N+=D:I<S&&(N+=2*D)}for(let I=0;I<v.length;I++)v[I]=v[I]/N;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=v,x.latitudinal.value=f==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:C}=this;x.dTheta.value=M,x.mipInt.value=C-s;const U=this._sizeLods[l],H=3*U*(l>C-Bs?l-C+Bs:0),k=4*(this._cubeSize-U);Xu(i,H,k,3*U,2*U),p.setRenderTarget(i),p.render(_,Yh)}}function n2(a){const e=[],i=[],s=[];let l=a;const u=a-Bs+1+R0.length;for(let f=0;f<u;f++){const h=Math.pow(2,l);i.push(h);let p=1/h;f>a-Bs?p=R0[f-a+Bs-1]:f===0&&(p=0),s.push(p);const m=1/(h-2),g=-m,_=1+m,x=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,M=6,A=3,S=2,v=1,N=new Float32Array(A*M*y),C=new Float32Array(S*M*y),U=new Float32Array(v*M*y);for(let k=0;k<y;k++){const I=k%3*2/3-1,j=k>2?0:-1,D=[I,j,0,I+2/3,j,0,I+2/3,j+1,0,I,j,0,I+2/3,j+1,0,I,j+1,0];N.set(D,A*M*k),C.set(x,S*M*k);const w=[k,k,k,k,k,k];U.set(w,v*M*k)}const H=new sr;H.setAttribute("position",new xi(N,A)),H.setAttribute("uv",new xi(C,S)),H.setAttribute("faceIndex",new xi(U,v)),e.push(H),l>Bs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function D0(a,e,i){const s=new Hn(a,e,i);return s.texture.mapping=cc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Xu(a,e,i,s,l){a.viewport.set(e,i,s,l),a.scissor.set(e,i,s,l)}function i2(a,e,i){const s=new Float32Array(Pr),l=new se(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:cp(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function L0(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cp(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function N0(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function cp(){return`

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
	`}function a2(a){let e=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const p=h.mapping,m=p===pd||p===md,g=p===Gs||p===Vs;if(m||g){let _=e.get(h);const x=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new U0(a)),_=m?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const y=h.image;return m&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new U0(a)),_=m?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",u),_.texture):null}}}return h}function l(h){let p=0;const m=6;for(let g=0;g<m;g++)h[g]!==void 0&&p++;return p===m}function u(h){const p=h.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function r2(a){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=a.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&ec("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function s2(a,e,i,s){const l={},u=new WeakMap;function f(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const M in x.attributes)e.remove(x.attributes[M]);x.removeEventListener("dispose",f),delete l[x.id];const y=u.get(x);y&&(e.remove(y),u.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(_,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function p(_){const x=_.attributes;for(const y in x)e.update(x[y],a.ARRAY_BUFFER)}function m(_){const x=[],y=_.index,M=_.attributes.position;let A=0;if(y!==null){const N=y.array;A=y.version;for(let C=0,U=N.length;C<U;C+=3){const H=N[C+0],k=N[C+1],I=N[C+2];x.push(H,k,k,I,I,H)}}else if(M!==void 0){const N=M.array;A=M.version;for(let C=0,U=N.length/3-1;C<U;C+=3){const H=C+0,k=C+1,I=C+2;x.push(H,k,k,I,I,H)}}else return;const S=new(U_(x)?P_:O_)(x,1);S.version=A;const v=u.get(_);v&&e.remove(v),u.set(_,S)}function g(_){const x=u.get(_);if(x){const y=_.index;y!==null&&x.version<y.version&&m(_)}else m(_);return u.get(_)}return{get:h,update:p,getWireframeAttribute:g}}function o2(a,e,i){let s;function l(x){s=x}let u,f;function h(x){u=x.type,f=x.bytesPerElement}function p(x,y){a.drawElements(s,y,u,x*f),i.update(y,s,1)}function m(x,y,M){M!==0&&(a.drawElementsInstanced(s,y,u,x*f,M),i.update(y,s,M))}function g(x,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,u,x,0,M);let S=0;for(let v=0;v<M;v++)S+=y[v];i.update(S,s,1)}function _(x,y,M,A){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<x.length;v++)m(x[v]/f,y[v],A[v]);else{S.multiDrawElementsInstancedWEBGL(s,y,0,u,x,0,A,0,M);let v=0;for(let N=0;N<M;N++)v+=y[N]*A[N];i.update(v,s,1)}}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function l2(a){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,f,h){switch(i.calls++,f){case a.TRIANGLES:i.triangles+=h*(u/3);break;case a.LINES:i.lines+=h*(u/2);break;case a.LINE_STRIP:i.lines+=h*(u-1);break;case a.LINE_LOOP:i.lines+=h*u;break;case a.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function u2(a,e,i){const s=new WeakMap,l=new Qt;function u(f,h,p){const m=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let x=s.get(h);if(x===void 0||x.count!==_){let w=function(){j.dispose(),s.delete(h),h.removeEventListener("dispose",w)};var y=w;x!==void 0&&x.texture.dispose();const M=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],N=h.morphAttributes.normal||[],C=h.morphAttributes.color||[];let U=0;M===!0&&(U=1),A===!0&&(U=2),S===!0&&(U=3);let H=h.attributes.position.count*U,k=1;H>e.maxTextureSize&&(k=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const I=new Float32Array(H*k*4*_),j=new D_(I,H,k,_);j.type=ha,j.needsUpdate=!0;const D=U*4;for(let V=0;V<_;V++){const ue=v[V],oe=N[V],xe=C[V],pe=H*k*4*V;for(let z=0;z<ue.count;z++){const K=z*D;M===!0&&(l.fromBufferAttribute(ue,z),I[pe+K+0]=l.x,I[pe+K+1]=l.y,I[pe+K+2]=l.z,I[pe+K+3]=0),A===!0&&(l.fromBufferAttribute(oe,z),I[pe+K+4]=l.x,I[pe+K+5]=l.y,I[pe+K+6]=l.z,I[pe+K+7]=0),S===!0&&(l.fromBufferAttribute(xe,z),I[pe+K+8]=l.x,I[pe+K+9]=l.y,I[pe+K+10]=l.z,I[pe+K+11]=xe.itemSize===4?l.w:1)}}x={count:_,texture:j,size:new ot(H,k)},s.set(h,x),h.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(a,"morphTexture",f.morphTexture,i);else{let M=0;for(let S=0;S<m.length;S++)M+=m[S];const A=h.morphTargetsRelative?1:1-M;p.getUniforms().setValue(a,"morphTargetBaseInfluence",A),p.getUniforms().setValue(a,"morphTargetInfluences",m)}p.getUniforms().setValue(a,"morphTargetsTexture",x.texture,i),p.getUniforms().setValue(a,"morphTargetsTextureSize",x.size)}return{update:u}}function c2(a,e,i,s){let l=new WeakMap;function u(p){const m=s.render.frame,g=p.geometry,_=e.get(p,g);if(l.get(_)!==m&&(e.update(_),l.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==m&&(i.update(p.instanceMatrix,a.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,a.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return _}function f(){l=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:f}}const H_=new Pn,O0=new up(1,1),G_=new D_,V_=new GE,k_=new z_,P0=[],B0=[],z0=new Float32Array(16),I0=new Float32Array(9),F0=new Float32Array(4);function Ys(a,e,i){const s=a[0];if(s<=0||s>0)return a;const l=e*i;let u=P0[l];if(u===void 0&&(u=new Float32Array(l),P0[l]=u),e!==0){s.toArray(u,0);for(let f=1,h=0;f!==e;++f)h+=i,a[f].toArray(u,h)}return u}function mn(a,e){if(a.length!==e.length)return!1;for(let i=0,s=a.length;i<s;i++)if(a[i]!==e[i])return!1;return!0}function gn(a,e){for(let i=0,s=e.length;i<s;i++)a[i]=e[i]}function dc(a,e){let i=B0[e];i===void 0&&(i=new Int32Array(e),B0[e]=i);for(let s=0;s!==e;++s)i[s]=a.allocateTextureUnit();return i}function f2(a,e){const i=this.cache;i[0]!==e&&(a.uniform1f(this.addr,e),i[0]=e)}function h2(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;a.uniform2fv(this.addr,e),gn(i,e)}}function d2(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(mn(i,e))return;a.uniform3fv(this.addr,e),gn(i,e)}}function p2(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;a.uniform4fv(this.addr,e),gn(i,e)}}function m2(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;a.uniformMatrix2fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,s))return;F0.set(s),a.uniformMatrix2fv(this.addr,!1,F0),gn(i,s)}}function g2(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;a.uniformMatrix3fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,s))return;I0.set(s),a.uniformMatrix3fv(this.addr,!1,I0),gn(i,s)}}function v2(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;a.uniformMatrix4fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,s))return;z0.set(s),a.uniformMatrix4fv(this.addr,!1,z0),gn(i,s)}}function _2(a,e){const i=this.cache;i[0]!==e&&(a.uniform1i(this.addr,e),i[0]=e)}function x2(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;a.uniform2iv(this.addr,e),gn(i,e)}}function S2(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;a.uniform3iv(this.addr,e),gn(i,e)}}function y2(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;a.uniform4iv(this.addr,e),gn(i,e)}}function E2(a,e){const i=this.cache;i[0]!==e&&(a.uniform1ui(this.addr,e),i[0]=e)}function M2(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;a.uniform2uiv(this.addr,e),gn(i,e)}}function T2(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;a.uniform3uiv(this.addr,e),gn(i,e)}}function b2(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;a.uniform4uiv(this.addr,e),gn(i,e)}}function A2(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l);let u;this.type===a.SAMPLER_2D_SHADOW?(O0.compareFunction=C_,u=O0):u=H_,i.setTexture2D(e||u,l)}function R2(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||V_,l)}function w2(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||k_,l)}function C2(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||G_,l)}function U2(a){switch(a){case 5126:return f2;case 35664:return h2;case 35665:return d2;case 35666:return p2;case 35674:return m2;case 35675:return g2;case 35676:return v2;case 5124:case 35670:return _2;case 35667:case 35671:return x2;case 35668:case 35672:return S2;case 35669:case 35673:return y2;case 5125:return E2;case 36294:return M2;case 36295:return T2;case 36296:return b2;case 35678:case 36198:case 36298:case 36306:case 35682:return A2;case 35679:case 36299:case 36307:return R2;case 35680:case 36300:case 36308:case 36293:return w2;case 36289:case 36303:case 36311:case 36292:return C2}}function D2(a,e){a.uniform1fv(this.addr,e)}function L2(a,e){const i=Ys(e,this.size,2);a.uniform2fv(this.addr,i)}function N2(a,e){const i=Ys(e,this.size,3);a.uniform3fv(this.addr,i)}function O2(a,e){const i=Ys(e,this.size,4);a.uniform4fv(this.addr,i)}function P2(a,e){const i=Ys(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function B2(a,e){const i=Ys(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function z2(a,e){const i=Ys(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function I2(a,e){a.uniform1iv(this.addr,e)}function F2(a,e){a.uniform2iv(this.addr,e)}function H2(a,e){a.uniform3iv(this.addr,e)}function G2(a,e){a.uniform4iv(this.addr,e)}function V2(a,e){a.uniform1uiv(this.addr,e)}function k2(a,e){a.uniform2uiv(this.addr,e)}function X2(a,e){a.uniform3uiv(this.addr,e)}function W2(a,e){a.uniform4uiv(this.addr,e)}function j2(a,e,i){const s=this.cache,l=e.length,u=dc(i,l);mn(s,u)||(a.uniform1iv(this.addr,u),gn(s,u));for(let f=0;f!==l;++f)i.setTexture2D(e[f]||H_,u[f])}function q2(a,e,i){const s=this.cache,l=e.length,u=dc(i,l);mn(s,u)||(a.uniform1iv(this.addr,u),gn(s,u));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||V_,u[f])}function Y2(a,e,i){const s=this.cache,l=e.length,u=dc(i,l);mn(s,u)||(a.uniform1iv(this.addr,u),gn(s,u));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||k_,u[f])}function Z2(a,e,i){const s=this.cache,l=e.length,u=dc(i,l);mn(s,u)||(a.uniform1iv(this.addr,u),gn(s,u));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||G_,u[f])}function K2(a){switch(a){case 5126:return D2;case 35664:return L2;case 35665:return N2;case 35666:return O2;case 35674:return P2;case 35675:return B2;case 35676:return z2;case 5124:case 35670:return I2;case 35667:case 35671:return F2;case 35668:case 35672:return H2;case 35669:case 35673:return G2;case 5125:return V2;case 36294:return k2;case 36295:return X2;case 36296:return W2;case 35678:case 36198:case 36298:case 36306:case 35682:return j2;case 35679:case 36299:case 36307:return q2;case 35680:case 36300:case 36308:case 36293:return Y2;case 36289:case 36303:case 36311:case 36292:return Z2}}class Q2{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=U2(i.type)}}class J2{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=K2(i.type)}}class $2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,f=l.length;u!==f;++u){const h=l[u];h.setValue(e,i[h.id],s)}}}const $h=/(\w+)(\])?(\[|\.)?/g;function H0(a,e){a.seq.push(e),a.map[e.id]=e}function eA(a,e,i){const s=a.name,l=s.length;for($h.lastIndex=0;;){const u=$h.exec(s),f=$h.lastIndex;let h=u[1];const p=u[2]==="]",m=u[3];if(p&&(h=h|0),m===void 0||m==="["&&f+2===l){H0(i,m===void 0?new Q2(h,a,e):new J2(h,a,e));break}else{let _=i.map[h];_===void 0&&(_=new $2(h),H0(i,_)),i=_}}}class tc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=e.getActiveUniform(i,l),f=e.getUniformLocation(i,u.name);eA(u,f,this)}}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,f=i.length;u!==f;++u){const h=i[u],p=s[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function G0(a,e,i){const s=a.createShader(e);return a.shaderSource(s,i),a.compileShader(s),s}const tA=37297;let nA=0;function iA(a,e){const i=a.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let f=l;f<u;f++){const h=f+1;s.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const V0=new st;function aA(a){Rt._getMatrix(V0,Rt.workingColorSpace,a);const e=`mat3( ${V0.elements.map(i=>i.toFixed(4))} )`;switch(Rt.getTransfer(a)){case ac:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function k0(a,e,i){const s=a.getShaderParameter(e,a.COMPILE_STATUS),l=a.getShaderInfoLog(e).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+iA(a.getShaderSource(e),f)}else return l}function rA(a,e){const i=aA(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function sA(a,e){let i;switch(e){case dE:i="Linear";break;case pE:i="Reinhard";break;case mE:i="Cineon";break;case gE:i="ACESFilmic";break;case _E:i="AgX";break;case xE:i="Neutral";break;case vE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Wu=new se;function oA(){Rt.getLuminanceCoefficients(Wu);const a=Wu.x.toFixed(4),e=Wu.y.toFixed(4),i=Wu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lA(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function uA(a){const e=[];for(const i in a){const s=a[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function cA(a,e){const i={},s=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=a.getActiveAttrib(e,l),f=u.name;let h=1;u.type===a.FLOAT_MAT2&&(h=2),u.type===a.FLOAT_MAT3&&(h=3),u.type===a.FLOAT_MAT4&&(h=4),i[f]={type:u.type,location:a.getAttribLocation(e,f),locationSize:h}}return i}function $o(a){return a!==""}function X0(a,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function W0(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wd(a){return a.replace(fA,dA)}const hA=new Map;function dA(a,e){let i=ut[e];if(i===void 0){const s=hA.get(e);if(s!==void 0)i=ut[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Wd(i)}const pA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function j0(a){return a.replace(pA,mA)}function mA(a,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function q0(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}function gA(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===__?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===j1?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===fa&&(e="SHADOWMAP_TYPE_VSM"),e}function vA(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Gs:case Vs:e="ENVMAP_TYPE_CUBE";break;case cc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _A(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Vs:e="ENVMAP_MODE_REFRACTION";break}return e}function xA(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case x_:e="ENVMAP_BLENDING_MULTIPLY";break;case fE:e="ENVMAP_BLENDING_MIX";break;case hE:e="ENVMAP_BLENDING_ADD";break}return e}function SA(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:s,maxMip:i}}function yA(a,e,i,s){const l=a.getContext(),u=i.defines;let f=i.vertexShader,h=i.fragmentShader;const p=gA(i),m=vA(i),g=_A(i),_=xA(i),x=SA(i),y=lA(i),M=uA(u),A=l.createProgram();let S,v,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter($o).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter($o).join(`
`),v.length>0&&(v+=`
`)):(S=[q0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),v=[q0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==nr?"#define TONE_MAPPING":"",i.toneMapping!==nr?ut.tonemapping_pars_fragment:"",i.toneMapping!==nr?sA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,rA("linearToOutputTexel",i.outputColorSpace),oA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter($o).join(`
`)),f=Wd(f),f=X0(f,i),f=W0(f,i),h=Wd(h),h=X0(h,i),h=W0(h,i),f=j0(f),h=j0(h),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",i.glslVersion===l0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===l0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const C=N+S+f,U=N+v+h,H=G0(l,l.VERTEX_SHADER,C),k=G0(l,l.FRAGMENT_SHADER,U);l.attachShader(A,H),l.attachShader(A,k),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function I(V){if(a.debug.checkShaderErrors){const ue=l.getProgramInfoLog(A).trim(),oe=l.getShaderInfoLog(H).trim(),xe=l.getShaderInfoLog(k).trim();let pe=!0,z=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(pe=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(l,A,H,k);else{const K=k0(l,H,"vertex"),Y=k0(l,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ue+`
`+K+`
`+Y)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(oe===""||xe==="")&&(z=!1);z&&(V.diagnostics={runnable:pe,programLog:ue,vertexShader:{log:oe,prefix:S},fragmentShader:{log:xe,prefix:v}})}l.deleteShader(H),l.deleteShader(k),j=new tc(l,A),D=cA(l,A)}let j;this.getUniforms=function(){return j===void 0&&I(this),j};let D;this.getAttributes=function(){return D===void 0&&I(this),D};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(A,tA)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=nA++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=H,this.fragmentShader=k,this}let EA=0;class MA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new TA(e),i.set(e,s)),s}}class TA{constructor(e){this.id=EA++,this.code=e,this.usedTimes=0}}function bA(a,e,i,s,l,u,f){const h=new L_,p=new MA,m=new Set,g=[],_=l.logarithmicDepthBuffer,x=l.vertexTextures;let y=l.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return m.add(D),D===0?"uv":`uv${D}`}function S(D,w,V,ue,oe){const xe=ue.fog,pe=oe.geometry,z=D.isMeshStandardMaterial?ue.environment:null,K=(D.isMeshStandardMaterial?i:e).get(D.envMap||z),Y=K&&K.mapping===cc?K.image.height:null,Me=M[D.type];D.precision!==null&&(y=l.getMaxPrecision(D.precision),y!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",y,"instead."));const O=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,ee=O!==void 0?O.length:0;let Se=0;pe.morphAttributes.position!==void 0&&(Se=1),pe.morphAttributes.normal!==void 0&&(Se=2),pe.morphAttributes.color!==void 0&&(Se=3);let Ee,J,me,ye;if(Me){const Tt=zi[Me];Ee=Tt.vertexShader,J=Tt.fragmentShader}else Ee=D.vertexShader,J=D.fragmentShader,p.update(D),me=p.getVertexShaderID(D),ye=p.getFragmentShaderID(D);const Re=a.getRenderTarget(),Le=a.state.buffers.depth.getReversed(),lt=oe.isInstancedMesh===!0,Ke=oe.isBatchedMesh===!0,Xt=!!D.map,Gt=!!D.matcap,ht=!!K,F=!!D.aoMap,Vn=!!D.lightMap,_t=!!D.bumpMap,it=!!D.normalMap,We=!!D.displacementMap,Ot=!!D.emissiveMap,Ve=!!D.metalnessMap,L=!!D.roughnessMap,b=D.anisotropy>0,te=D.clearcoat>0,ge=D.dispersion>0,Te=D.iridescence>0,fe=D.sheen>0,Pe=D.transmission>0,we=b&&!!D.anisotropyMap,Ge=te&&!!D.clearcoatMap,$e=te&&!!D.clearcoatNormalMap,Ae=te&&!!D.clearcoatRoughnessMap,Fe=Te&&!!D.iridescenceMap,Ye=Te&&!!D.iridescenceThicknessMap,Qe=fe&&!!D.sheenColorMap,Be=fe&&!!D.sheenRoughnessMap,ct=!!D.specularMap,nt=!!D.specularColorMap,Pt=!!D.specularIntensityMap,X=Pe&&!!D.transmissionMap,Ne=Pe&&!!D.thicknessMap,le=!!D.gradientMap,ve=!!D.alphaMap,ze=D.alphaTest>0,Oe=!!D.alphaHash,at=!!D.extensions;let Wt=nr;D.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(Wt=a.toneMapping);const rn={shaderID:Me,shaderType:D.type,shaderName:D.name,vertexShader:Ee,fragmentShader:J,defines:D.defines,customVertexShaderID:me,customFragmentShaderID:ye,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:y,batching:Ke,batchingColor:Ke&&oe._colorsTexture!==null,instancing:lt,instancingColor:lt&&oe.instanceColor!==null,instancingMorph:lt&&oe.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Re===null?a.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:ar,alphaToCoverage:!!D.alphaToCoverage,map:Xt,matcap:Gt,envMap:ht,envMapMode:ht&&K.mapping,envMapCubeUVHeight:Y,aoMap:F,lightMap:Vn,bumpMap:_t,normalMap:it,displacementMap:x&&We,emissiveMap:Ot,normalMapObjectSpace:it&&D.normalMapType===ME,normalMapTangentSpace:it&&D.normalMapType===EE,metalnessMap:Ve,roughnessMap:L,anisotropy:b,anisotropyMap:we,clearcoat:te,clearcoatMap:Ge,clearcoatNormalMap:$e,clearcoatRoughnessMap:Ae,dispersion:ge,iridescence:Te,iridescenceMap:Fe,iridescenceThicknessMap:Ye,sheen:fe,sheenColorMap:Qe,sheenRoughnessMap:Be,specularMap:ct,specularColorMap:nt,specularIntensityMap:Pt,transmission:Pe,transmissionMap:X,thicknessMap:Ne,gradientMap:le,opaque:D.transparent===!1&&D.blending===zs&&D.alphaToCoverage===!1,alphaMap:ve,alphaTest:ze,alphaHash:Oe,combine:D.combine,mapUv:Xt&&A(D.map.channel),aoMapUv:F&&A(D.aoMap.channel),lightMapUv:Vn&&A(D.lightMap.channel),bumpMapUv:_t&&A(D.bumpMap.channel),normalMapUv:it&&A(D.normalMap.channel),displacementMapUv:We&&A(D.displacementMap.channel),emissiveMapUv:Ot&&A(D.emissiveMap.channel),metalnessMapUv:Ve&&A(D.metalnessMap.channel),roughnessMapUv:L&&A(D.roughnessMap.channel),anisotropyMapUv:we&&A(D.anisotropyMap.channel),clearcoatMapUv:Ge&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:$e&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:Be&&A(D.sheenRoughnessMap.channel),specularMapUv:ct&&A(D.specularMap.channel),specularColorMapUv:nt&&A(D.specularColorMap.channel),specularIntensityMapUv:Pt&&A(D.specularIntensityMap.channel),transmissionMapUv:X&&A(D.transmissionMap.channel),thicknessMapUv:Ne&&A(D.thicknessMap.channel),alphaMapUv:ve&&A(D.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(it||b),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!pe.attributes.uv&&(Xt||ve),fog:!!xe,useFog:D.fog===!0,fogExp2:!!xe&&xe.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Le,skinning:oe.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Se,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:D.dithering,shadowMapEnabled:a.shadowMap.enabled&&V.length>0,shadowMapType:a.shadowMap.type,toneMapping:Wt,decodeVideoTexture:Xt&&D.map.isVideoTexture===!0&&Rt.getTransfer(D.map.colorSpace)===Ft,decodeVideoTextureEmissive:Ot&&D.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(D.emissiveMap.colorSpace)===Ft,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===li,flipSided:D.side===Mn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:at&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&D.extensions.multiDraw===!0||Ke)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return rn.vertexUv1s=m.has(1),rn.vertexUv2s=m.has(2),rn.vertexUv3s=m.has(3),m.clear(),rn}function v(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const V in D.defines)w.push(V),w.push(D.defines[V]);return D.isRawShaderMaterial===!1&&(N(w,D),C(w,D),w.push(a.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function N(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function C(D,w){h.disableAll(),w.supportsVertexTextures&&h.enable(0),w.instancing&&h.enable(1),w.instancingColor&&h.enable(2),w.instancingMorph&&h.enable(3),w.matcap&&h.enable(4),w.envMap&&h.enable(5),w.normalMapObjectSpace&&h.enable(6),w.normalMapTangentSpace&&h.enable(7),w.clearcoat&&h.enable(8),w.iridescence&&h.enable(9),w.alphaTest&&h.enable(10),w.vertexColors&&h.enable(11),w.vertexAlphas&&h.enable(12),w.vertexUv1s&&h.enable(13),w.vertexUv2s&&h.enable(14),w.vertexUv3s&&h.enable(15),w.vertexTangents&&h.enable(16),w.anisotropy&&h.enable(17),w.alphaHash&&h.enable(18),w.batching&&h.enable(19),w.dispersion&&h.enable(20),w.batchingColor&&h.enable(21),D.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reverseDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),D.push(h.mask)}function U(D){const w=M[D.type];let V;if(w){const ue=zi[w];V=tM.clone(ue.uniforms)}else V=D.uniforms;return V}function H(D,w){let V;for(let ue=0,oe=g.length;ue<oe;ue++){const xe=g[ue];if(xe.cacheKey===w){V=xe,++V.usedTimes;break}}return V===void 0&&(V=new yA(a,w,D,u),g.push(V)),V}function k(D){if(--D.usedTimes===0){const w=g.indexOf(D);g[w]=g[g.length-1],g.pop(),D.destroy()}}function I(D){p.remove(D)}function j(){p.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:U,acquireProgram:H,releaseProgram:k,releaseShaderCache:I,programs:g,dispose:j}}function AA(){let a=new WeakMap;function e(f){return a.has(f)}function i(f){let h=a.get(f);return h===void 0&&(h={},a.set(f,h)),h}function s(f){a.delete(f)}function l(f,h,p){a.get(f)[h]=p}function u(){a=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function RA(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Y0(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Z0(){const a=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function f(_,x,y,M,A,S){let v=a[e];return v===void 0?(v={id:_.id,object:_,geometry:x,material:y,groupOrder:M,renderOrder:_.renderOrder,z:A,group:S},a[e]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=y,v.groupOrder=M,v.renderOrder=_.renderOrder,v.z=A,v.group=S),e++,v}function h(_,x,y,M,A,S){const v=f(_,x,y,M,A,S);y.transmission>0?s.push(v):y.transparent===!0?l.push(v):i.push(v)}function p(_,x,y,M,A,S){const v=f(_,x,y,M,A,S);y.transmission>0?s.unshift(v):y.transparent===!0?l.unshift(v):i.unshift(v)}function m(_,x){i.length>1&&i.sort(_||RA),s.length>1&&s.sort(x||Y0),l.length>1&&l.sort(x||Y0)}function g(){for(let _=e,x=a.length;_<x;_++){const y=a[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:h,unshift:p,finish:g,sort:m}}function wA(){let a=new WeakMap;function e(s,l){const u=a.get(s);let f;return u===void 0?(f=new Z0,a.set(s,[f])):l>=u.length?(f=new Z0,u.push(f)):f=u[l],f}function i(){a=new WeakMap}return{get:e,dispose:i}}function CA(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new se,color:new Nt};break;case"SpotLight":i={position:new se,direction:new se,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new se,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new se,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":i={color:new Nt,position:new se,halfWidth:new se,halfHeight:new se};break}return a[e.id]=i,i}}}function UA(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=i,i}}}let DA=0;function LA(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function NA(a){const e=new CA,i=UA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new se);const l=new se,u=new cn,f=new cn;function h(m){let g=0,_=0,x=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let y=0,M=0,A=0,S=0,v=0,N=0,C=0,U=0,H=0,k=0,I=0;m.sort(LA);for(let D=0,w=m.length;D<w;D++){const V=m[D],ue=V.color,oe=V.intensity,xe=V.distance,pe=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=ue.r*oe,_+=ue.g*oe,x+=ue.b*oe;else if(V.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(V.sh.coefficients[z],oe);I++}else if(V.isDirectionalLight){const z=e.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const K=V.shadow,Y=i.get(V);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,s.directionalShadow[y]=Y,s.directionalShadowMap[y]=pe,s.directionalShadowMatrix[y]=V.shadow.matrix,N++}s.directional[y]=z,y++}else if(V.isSpotLight){const z=e.get(V);z.position.setFromMatrixPosition(V.matrixWorld),z.color.copy(ue).multiplyScalar(oe),z.distance=xe,z.coneCos=Math.cos(V.angle),z.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),z.decay=V.decay,s.spot[A]=z;const K=V.shadow;if(V.map&&(s.spotLightMap[H]=V.map,H++,K.updateMatrices(V),V.castShadow&&k++),s.spotLightMatrix[A]=K.matrix,V.castShadow){const Y=i.get(V);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,s.spotShadow[A]=Y,s.spotShadowMap[A]=pe,U++}A++}else if(V.isRectAreaLight){const z=e.get(V);z.color.copy(ue).multiplyScalar(oe),z.halfWidth.set(V.width*.5,0,0),z.halfHeight.set(0,V.height*.5,0),s.rectArea[S]=z,S++}else if(V.isPointLight){const z=e.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),z.distance=V.distance,z.decay=V.decay,V.castShadow){const K=V.shadow,Y=i.get(V);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,s.pointShadow[M]=Y,s.pointShadowMap[M]=pe,s.pointShadowMatrix[M]=V.shadow.matrix,C++}s.point[M]=z,M++}else if(V.isHemisphereLight){const z=e.get(V);z.skyColor.copy(V.color).multiplyScalar(oe),z.groundColor.copy(V.groundColor).multiplyScalar(oe),s.hemi[v]=z,v++}}S>0&&(a.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=De.LTC_FLOAT_1,s.rectAreaLTC2=De.LTC_FLOAT_2):(s.rectAreaLTC1=De.LTC_HALF_1,s.rectAreaLTC2=De.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=x;const j=s.hash;(j.directionalLength!==y||j.pointLength!==M||j.spotLength!==A||j.rectAreaLength!==S||j.hemiLength!==v||j.numDirectionalShadows!==N||j.numPointShadows!==C||j.numSpotShadows!==U||j.numSpotMaps!==H||j.numLightProbes!==I)&&(s.directional.length=y,s.spot.length=A,s.rectArea.length=S,s.point.length=M,s.hemi.length=v,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=U+H-k,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=I,j.directionalLength=y,j.pointLength=M,j.spotLength=A,j.rectAreaLength=S,j.hemiLength=v,j.numDirectionalShadows=N,j.numPointShadows=C,j.numSpotShadows=U,j.numSpotMaps=H,j.numLightProbes=I,s.version=DA++)}function p(m,g){let _=0,x=0,y=0,M=0,A=0;const S=g.matrixWorldInverse;for(let v=0,N=m.length;v<N;v++){const C=m[v];if(C.isDirectionalLight){const U=s.directional[_];U.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),_++}else if(C.isSpotLight){const U=s.spot[y];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(S),U.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),y++}else if(C.isRectAreaLight){const U=s.rectArea[M];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(S),f.identity(),u.copy(C.matrixWorld),u.premultiply(S),f.extractRotation(u),U.halfWidth.set(C.width*.5,0,0),U.halfHeight.set(0,C.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),M++}else if(C.isPointLight){const U=s.point[x];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(S),x++}else if(C.isHemisphereLight){const U=s.hemi[A];U.direction.setFromMatrixPosition(C.matrixWorld),U.direction.transformDirection(S),A++}}}return{setup:h,setupView:p,state:s}}function K0(a){const e=new NA(a),i=[],s=[];function l(g){m.camera=g,i.length=0,s.length=0}function u(g){i.push(g)}function f(g){s.push(g)}function h(){e.setup(i)}function p(g){e.setupView(i,g)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:h,setupLightsView:p,pushLight:u,pushShadow:f}}function OA(a){let e=new WeakMap;function i(l,u=0){const f=e.get(l);let h;return f===void 0?(h=new K0(a),e.set(l,[h])):u>=f.length?(h=new K0(a),f.push(h)):h=f[u],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const PA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BA=`uniform sampler2D shadow_pass;
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
}`;function zA(a,e,i){let s=new I_;const l=new ot,u=new ot,f=new Qt,h=new uM({depthPacking:yE}),p=new cM,m={},g=i.maxTextureSize,_={[va]:Mn,[Mn]:va,[li]:li},x=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:PA,fragmentShader:BA}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const M=new sr;M.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new _i(M,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=__;let v=this.type;this.render=function(k,I,j){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||k.length===0)return;const D=a.getRenderTarget(),w=a.getActiveCubeFace(),V=a.getActiveMipmapLevel(),ue=a.state;ue.setBlending(Qn),ue.buffers.color.setClear(1,1,1,1),ue.buffers.depth.setTest(!0),ue.setScissorTest(!1);const oe=v!==fa&&this.type===fa,xe=v===fa&&this.type!==fa;for(let pe=0,z=k.length;pe<z;pe++){const K=k[pe],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const Me=Y.getFrameExtents();if(l.multiply(Me),u.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/Me.x),l.x=u.x*Me.x,Y.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/Me.y),l.y=u.y*Me.y,Y.mapSize.y=u.y)),Y.map===null||oe===!0||xe===!0){const ee=this.type!==fa?{minFilter:wi,magFilter:wi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Hn(l.x,l.y,ee),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}a.setRenderTarget(Y.map),a.clear();const O=Y.getViewportCount();for(let ee=0;ee<O;ee++){const Se=Y.getViewport(ee);f.set(u.x*Se.x,u.y*Se.y,u.x*Se.z,u.y*Se.w),ue.viewport(f),Y.updateMatrices(K,ee),s=Y.getFrustum(),U(I,j,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===fa&&N(Y,j),Y.needsUpdate=!1}v=this.type,S.needsUpdate=!1,a.setRenderTarget(D,w,V)};function N(k,I){const j=e.update(A);x.defines.VSM_SAMPLES!==k.blurSamples&&(x.defines.VSM_SAMPLES=k.blurSamples,y.defines.VSM_SAMPLES=k.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new Hn(l.x,l.y)),x.uniforms.shadow_pass.value=k.map.texture,x.uniforms.resolution.value=k.mapSize,x.uniforms.radius.value=k.radius,a.setRenderTarget(k.mapPass),a.clear(),a.renderBufferDirect(I,null,j,x,A,null),y.uniforms.shadow_pass.value=k.mapPass.texture,y.uniforms.resolution.value=k.mapSize,y.uniforms.radius.value=k.radius,a.setRenderTarget(k.map),a.clear(),a.renderBufferDirect(I,null,j,y,A,null)}function C(k,I,j,D){let w=null;const V=j.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(V!==void 0)w=V;else if(w=j.isPointLight===!0?p:h,a.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const ue=w.uuid,oe=I.uuid;let xe=m[ue];xe===void 0&&(xe={},m[ue]=xe);let pe=xe[oe];pe===void 0&&(pe=w.clone(),xe[oe]=pe,I.addEventListener("dispose",H)),w=pe}if(w.visible=I.visible,w.wireframe=I.wireframe,D===fa?w.side=I.shadowSide!==null?I.shadowSide:I.side:w.side=I.shadowSide!==null?I.shadowSide:_[I.side],w.alphaMap=I.alphaMap,w.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,w.map=I.map,w.clipShadows=I.clipShadows,w.clippingPlanes=I.clippingPlanes,w.clipIntersection=I.clipIntersection,w.displacementMap=I.displacementMap,w.displacementScale=I.displacementScale,w.displacementBias=I.displacementBias,w.wireframeLinewidth=I.wireframeLinewidth,w.linewidth=I.linewidth,j.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ue=a.properties.get(w);ue.light=j}return w}function U(k,I,j,D,w){if(k.visible===!1)return;if(k.layers.test(I.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&w===fa)&&(!k.frustumCulled||s.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,k.matrixWorld);const oe=e.update(k),xe=k.material;if(Array.isArray(xe)){const pe=oe.groups;for(let z=0,K=pe.length;z<K;z++){const Y=pe[z],Me=xe[Y.materialIndex];if(Me&&Me.visible){const O=C(k,Me,D,w);k.onBeforeShadow(a,k,I,j,oe,O,Y),a.renderBufferDirect(j,null,oe,O,k,Y),k.onAfterShadow(a,k,I,j,oe,O,Y)}}}else if(xe.visible){const pe=C(k,xe,D,w);k.onBeforeShadow(a,k,I,j,oe,pe,null),a.renderBufferDirect(j,null,oe,pe,k,null),k.onAfterShadow(a,k,I,j,oe,pe,null)}}const ue=k.children;for(let oe=0,xe=ue.length;oe<xe;oe++)U(ue[oe],I,j,D,w)}function H(k){k.target.removeEventListener("dispose",H);for(const j in m){const D=m[j],w=k.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}const IA={[od]:ld,[ud]:hd,[cd]:dd,[Hs]:fd,[ld]:od,[hd]:ud,[dd]:cd,[fd]:Hs};function FA(a,e){function i(){let X=!1;const Ne=new Qt;let le=null;const ve=new Qt(0,0,0,0);return{setMask:function(ze){le!==ze&&!X&&(a.colorMask(ze,ze,ze,ze),le=ze)},setLocked:function(ze){X=ze},setClear:function(ze,Oe,at,Wt,rn){rn===!0&&(ze*=Wt,Oe*=Wt,at*=Wt),Ne.set(ze,Oe,at,Wt),ve.equals(Ne)===!1&&(a.clearColor(ze,Oe,at,Wt),ve.copy(Ne))},reset:function(){X=!1,le=null,ve.set(-1,0,0,0)}}}function s(){let X=!1,Ne=!1,le=null,ve=null,ze=null;return{setReversed:function(Oe){if(Ne!==Oe){const at=e.get("EXT_clip_control");Oe?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT),Ne=Oe;const Wt=ze;ze=null,this.setClear(Wt)}},getReversed:function(){return Ne},setTest:function(Oe){Oe?Re(a.DEPTH_TEST):Le(a.DEPTH_TEST)},setMask:function(Oe){le!==Oe&&!X&&(a.depthMask(Oe),le=Oe)},setFunc:function(Oe){if(Ne&&(Oe=IA[Oe]),ve!==Oe){switch(Oe){case od:a.depthFunc(a.NEVER);break;case ld:a.depthFunc(a.ALWAYS);break;case ud:a.depthFunc(a.LESS);break;case Hs:a.depthFunc(a.LEQUAL);break;case cd:a.depthFunc(a.EQUAL);break;case fd:a.depthFunc(a.GEQUAL);break;case hd:a.depthFunc(a.GREATER);break;case dd:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}ve=Oe}},setLocked:function(Oe){X=Oe},setClear:function(Oe){ze!==Oe&&(Ne&&(Oe=1-Oe),a.clearDepth(Oe),ze=Oe)},reset:function(){X=!1,le=null,ve=null,ze=null,Ne=!1}}}function l(){let X=!1,Ne=null,le=null,ve=null,ze=null,Oe=null,at=null,Wt=null,rn=null;return{setTest:function(Tt){X||(Tt?Re(a.STENCIL_TEST):Le(a.STENCIL_TEST))},setMask:function(Tt){Ne!==Tt&&!X&&(a.stencilMask(Tt),Ne=Tt)},setFunc:function(Tt,Jn,vn){(le!==Tt||ve!==Jn||ze!==vn)&&(a.stencilFunc(Tt,Jn,vn),le=Tt,ve=Jn,ze=vn)},setOp:function(Tt,Jn,vn){(Oe!==Tt||at!==Jn||Wt!==vn)&&(a.stencilOp(Tt,Jn,vn),Oe=Tt,at=Jn,Wt=vn)},setLocked:function(Tt){X=Tt},setClear:function(Tt){rn!==Tt&&(a.clearStencil(Tt),rn=Tt)},reset:function(){X=!1,Ne=null,le=null,ve=null,ze=null,Oe=null,at=null,Wt=null,rn=null}}}const u=new i,f=new s,h=new l,p=new WeakMap,m=new WeakMap;let g={},_={},x=new WeakMap,y=[],M=null,A=!1,S=null,v=null,N=null,C=null,U=null,H=null,k=null,I=new Nt(0,0,0),j=0,D=!1,w=null,V=null,ue=null,oe=null,xe=null;const pe=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,K=0;const Y=a.getParameter(a.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=K>=2);let Me=null,O={};const ee=a.getParameter(a.SCISSOR_BOX),Se=a.getParameter(a.VIEWPORT),Ee=new Qt().fromArray(ee),J=new Qt().fromArray(Se);function me(X,Ne,le,ve){const ze=new Uint8Array(4),Oe=a.createTexture();a.bindTexture(X,Oe),a.texParameteri(X,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(X,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let at=0;at<le;at++)X===a.TEXTURE_3D||X===a.TEXTURE_2D_ARRAY?a.texImage3D(Ne,0,a.RGBA,1,1,ve,0,a.RGBA,a.UNSIGNED_BYTE,ze):a.texImage2D(Ne+at,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,ze);return Oe}const ye={};ye[a.TEXTURE_2D]=me(a.TEXTURE_2D,a.TEXTURE_2D,1),ye[a.TEXTURE_CUBE_MAP]=me(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[a.TEXTURE_2D_ARRAY]=me(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ye[a.TEXTURE_3D]=me(a.TEXTURE_3D,a.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),h.setClear(0),Re(a.DEPTH_TEST),f.setFunc(Hs),_t(!1),it(n0),Re(a.CULL_FACE),F(Qn);function Re(X){g[X]!==!0&&(a.enable(X),g[X]=!0)}function Le(X){g[X]!==!1&&(a.disable(X),g[X]=!1)}function lt(X,Ne){return _[X]!==Ne?(a.bindFramebuffer(X,Ne),_[X]=Ne,X===a.DRAW_FRAMEBUFFER&&(_[a.FRAMEBUFFER]=Ne),X===a.FRAMEBUFFER&&(_[a.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Ke(X,Ne){let le=y,ve=!1;if(X){le=x.get(Ne),le===void 0&&(le=[],x.set(Ne,le));const ze=X.textures;if(le.length!==ze.length||le[0]!==a.COLOR_ATTACHMENT0){for(let Oe=0,at=ze.length;Oe<at;Oe++)le[Oe]=a.COLOR_ATTACHMENT0+Oe;le.length=ze.length,ve=!0}}else le[0]!==a.BACK&&(le[0]=a.BACK,ve=!0);ve&&a.drawBuffers(le)}function Xt(X){return M!==X?(a.useProgram(X),M=X,!0):!1}const Gt={[Or]:a.FUNC_ADD,[Y1]:a.FUNC_SUBTRACT,[Z1]:a.FUNC_REVERSE_SUBTRACT};Gt[K1]=a.MIN,Gt[Q1]=a.MAX;const ht={[J1]:a.ZERO,[$1]:a.ONE,[eE]:a.SRC_COLOR,[rd]:a.SRC_ALPHA,[sE]:a.SRC_ALPHA_SATURATE,[aE]:a.DST_COLOR,[nE]:a.DST_ALPHA,[tE]:a.ONE_MINUS_SRC_COLOR,[sd]:a.ONE_MINUS_SRC_ALPHA,[rE]:a.ONE_MINUS_DST_COLOR,[iE]:a.ONE_MINUS_DST_ALPHA,[oE]:a.CONSTANT_COLOR,[lE]:a.ONE_MINUS_CONSTANT_COLOR,[uE]:a.CONSTANT_ALPHA,[cE]:a.ONE_MINUS_CONSTANT_ALPHA};function F(X,Ne,le,ve,ze,Oe,at,Wt,rn,Tt){if(X===Qn){A===!0&&(Le(a.BLEND),A=!1);return}if(A===!1&&(Re(a.BLEND),A=!0),X!==q1){if(X!==S||Tt!==D){if((v!==Or||U!==Or)&&(a.blendEquation(a.FUNC_ADD),v=Or,U=Or),Tt)switch(X){case zs:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case i0:a.blendFunc(a.ONE,a.ONE);break;case a0:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case r0:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case zs:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case i0:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case a0:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case r0:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}N=null,C=null,H=null,k=null,I.set(0,0,0),j=0,S=X,D=Tt}return}ze=ze||Ne,Oe=Oe||le,at=at||ve,(Ne!==v||ze!==U)&&(a.blendEquationSeparate(Gt[Ne],Gt[ze]),v=Ne,U=ze),(le!==N||ve!==C||Oe!==H||at!==k)&&(a.blendFuncSeparate(ht[le],ht[ve],ht[Oe],ht[at]),N=le,C=ve,H=Oe,k=at),(Wt.equals(I)===!1||rn!==j)&&(a.blendColor(Wt.r,Wt.g,Wt.b,rn),I.copy(Wt),j=rn),S=X,D=!1}function Vn(X,Ne){X.side===li?Le(a.CULL_FACE):Re(a.CULL_FACE);let le=X.side===Mn;Ne&&(le=!le),_t(le),X.blending===zs&&X.transparent===!1?F(Qn):F(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),u.setMask(X.colorWrite);const ve=X.stencilWrite;h.setTest(ve),ve&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ot(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Re(a.SAMPLE_ALPHA_TO_COVERAGE):Le(a.SAMPLE_ALPHA_TO_COVERAGE)}function _t(X){w!==X&&(X?a.frontFace(a.CW):a.frontFace(a.CCW),w=X)}function it(X){X!==X1?(Re(a.CULL_FACE),X!==V&&(X===n0?a.cullFace(a.BACK):X===W1?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Le(a.CULL_FACE),V=X}function We(X){X!==ue&&(z&&a.lineWidth(X),ue=X)}function Ot(X,Ne,le){X?(Re(a.POLYGON_OFFSET_FILL),(oe!==Ne||xe!==le)&&(a.polygonOffset(Ne,le),oe=Ne,xe=le)):Le(a.POLYGON_OFFSET_FILL)}function Ve(X){X?Re(a.SCISSOR_TEST):Le(a.SCISSOR_TEST)}function L(X){X===void 0&&(X=a.TEXTURE0+pe-1),Me!==X&&(a.activeTexture(X),Me=X)}function b(X,Ne,le){le===void 0&&(Me===null?le=a.TEXTURE0+pe-1:le=Me);let ve=O[le];ve===void 0&&(ve={type:void 0,texture:void 0},O[le]=ve),(ve.type!==X||ve.texture!==Ne)&&(Me!==le&&(a.activeTexture(le),Me=le),a.bindTexture(X,Ne||ye[X]),ve.type=X,ve.texture=Ne)}function te(){const X=O[Me];X!==void 0&&X.type!==void 0&&(a.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function ge(){try{a.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Te(){try{a.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function fe(){try{a.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Pe(){try{a.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function we(){try{a.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ge(){try{a.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $e(){try{a.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ae(){try{a.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Fe(){try{a.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ye(){try{a.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Qe(X){Ee.equals(X)===!1&&(a.scissor(X.x,X.y,X.z,X.w),Ee.copy(X))}function Be(X){J.equals(X)===!1&&(a.viewport(X.x,X.y,X.z,X.w),J.copy(X))}function ct(X,Ne){let le=m.get(Ne);le===void 0&&(le=new WeakMap,m.set(Ne,le));let ve=le.get(X);ve===void 0&&(ve=a.getUniformBlockIndex(Ne,X.name),le.set(X,ve))}function nt(X,Ne){const ve=m.get(Ne).get(X);p.get(Ne)!==ve&&(a.uniformBlockBinding(Ne,ve,X.__bindingPointIndex),p.set(Ne,ve))}function Pt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),f.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),g={},Me=null,O={},_={},x=new WeakMap,y=[],M=null,A=!1,S=null,v=null,N=null,C=null,U=null,H=null,k=null,I=new Nt(0,0,0),j=0,D=!1,w=null,V=null,ue=null,oe=null,xe=null,Ee.set(0,0,a.canvas.width,a.canvas.height),J.set(0,0,a.canvas.width,a.canvas.height),u.reset(),f.reset(),h.reset()}return{buffers:{color:u,depth:f,stencil:h},enable:Re,disable:Le,bindFramebuffer:lt,drawBuffers:Ke,useProgram:Xt,setBlending:F,setMaterial:Vn,setFlipSided:_t,setCullFace:it,setLineWidth:We,setPolygonOffset:Ot,setScissorTest:Ve,activeTexture:L,bindTexture:b,unbindTexture:te,compressedTexImage2D:ge,compressedTexImage3D:Te,texImage2D:Fe,texImage3D:Ye,updateUBOMapping:ct,uniformBlockBinding:nt,texStorage2D:$e,texStorage3D:Ae,texSubImage2D:fe,texSubImage3D:Pe,compressedTexSubImage2D:we,compressedTexSubImage3D:Ge,scissor:Qe,viewport:Be,reset:Pt}}function HA(a,e,i,s,l,u,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ot,g=new WeakMap;let _;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,b){return y?new OffscreenCanvas(L,b):sc("canvas")}function A(L,b,te){let ge=1;const Te=Ve(L);if((Te.width>te||Te.height>te)&&(ge=te/Math.max(Te.width,Te.height)),ge<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const fe=Math.floor(ge*Te.width),Pe=Math.floor(ge*Te.height);_===void 0&&(_=M(fe,Pe));const we=b?M(fe,Pe):_;return we.width=fe,we.height=Pe,we.getContext("2d").drawImage(L,0,0,fe,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Te.width+"x"+Te.height+") to ("+fe+"x"+Pe+")."),we}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Te.width+"x"+Te.height+")."),L;return L}function S(L){return L.generateMipmaps}function v(L){a.generateMipmap(L)}function N(L){return L.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?a.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function C(L,b,te,ge,Te=!1){if(L!==null){if(a[L]!==void 0)return a[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let fe=b;if(b===a.RED&&(te===a.FLOAT&&(fe=a.R32F),te===a.HALF_FLOAT&&(fe=a.R16F),te===a.UNSIGNED_BYTE&&(fe=a.R8)),b===a.RED_INTEGER&&(te===a.UNSIGNED_BYTE&&(fe=a.R8UI),te===a.UNSIGNED_SHORT&&(fe=a.R16UI),te===a.UNSIGNED_INT&&(fe=a.R32UI),te===a.BYTE&&(fe=a.R8I),te===a.SHORT&&(fe=a.R16I),te===a.INT&&(fe=a.R32I)),b===a.RG&&(te===a.FLOAT&&(fe=a.RG32F),te===a.HALF_FLOAT&&(fe=a.RG16F),te===a.UNSIGNED_BYTE&&(fe=a.RG8)),b===a.RG_INTEGER&&(te===a.UNSIGNED_BYTE&&(fe=a.RG8UI),te===a.UNSIGNED_SHORT&&(fe=a.RG16UI),te===a.UNSIGNED_INT&&(fe=a.RG32UI),te===a.BYTE&&(fe=a.RG8I),te===a.SHORT&&(fe=a.RG16I),te===a.INT&&(fe=a.RG32I)),b===a.RGB_INTEGER&&(te===a.UNSIGNED_BYTE&&(fe=a.RGB8UI),te===a.UNSIGNED_SHORT&&(fe=a.RGB16UI),te===a.UNSIGNED_INT&&(fe=a.RGB32UI),te===a.BYTE&&(fe=a.RGB8I),te===a.SHORT&&(fe=a.RGB16I),te===a.INT&&(fe=a.RGB32I)),b===a.RGBA_INTEGER&&(te===a.UNSIGNED_BYTE&&(fe=a.RGBA8UI),te===a.UNSIGNED_SHORT&&(fe=a.RGBA16UI),te===a.UNSIGNED_INT&&(fe=a.RGBA32UI),te===a.BYTE&&(fe=a.RGBA8I),te===a.SHORT&&(fe=a.RGBA16I),te===a.INT&&(fe=a.RGBA32I)),b===a.RGB&&te===a.UNSIGNED_INT_5_9_9_9_REV&&(fe=a.RGB9_E5),b===a.RGBA){const Pe=Te?ac:Rt.getTransfer(ge);te===a.FLOAT&&(fe=a.RGBA32F),te===a.HALF_FLOAT&&(fe=a.RGBA16F),te===a.UNSIGNED_BYTE&&(fe=Pe===Ft?a.SRGB8_ALPHA8:a.RGBA8),te===a.UNSIGNED_SHORT_4_4_4_4&&(fe=a.RGBA4),te===a.UNSIGNED_SHORT_5_5_5_1&&(fe=a.RGB5_A1)}return(fe===a.R16F||fe===a.R32F||fe===a.RG16F||fe===a.RG32F||fe===a.RGBA16F||fe===a.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function U(L,b){let te;return L?b===null||b===ir||b===ks?te=a.DEPTH24_STENCIL8:b===ha?te=a.DEPTH32F_STENCIL8:b===nl&&(te=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ir||b===ks?te=a.DEPTH_COMPONENT24:b===ha?te=a.DEPTH_COMPONENT32F:b===nl&&(te=a.DEPTH_COMPONENT16),te}function H(L,b){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==wi&&L.minFilter!==Kn?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function k(L){const b=L.target;b.removeEventListener("dispose",k),j(b),b.isVideoTexture&&g.delete(b)}function I(L){const b=L.target;b.removeEventListener("dispose",I),w(b)}function j(L){const b=s.get(L);if(b.__webglInit===void 0)return;const te=L.source,ge=x.get(te);if(ge){const Te=ge[b.__cacheKey];Te.usedTimes--,Te.usedTimes===0&&D(L),Object.keys(ge).length===0&&x.delete(te)}s.remove(L)}function D(L){const b=s.get(L);a.deleteTexture(b.__webglTexture);const te=L.source,ge=x.get(te);delete ge[b.__cacheKey],f.memory.textures--}function w(L){const b=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(b.__webglFramebuffer[ge]))for(let Te=0;Te<b.__webglFramebuffer[ge].length;Te++)a.deleteFramebuffer(b.__webglFramebuffer[ge][Te]);else a.deleteFramebuffer(b.__webglFramebuffer[ge]);b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer[ge])}else{if(Array.isArray(b.__webglFramebuffer))for(let ge=0;ge<b.__webglFramebuffer.length;ge++)a.deleteFramebuffer(b.__webglFramebuffer[ge]);else a.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&a.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ge=0;ge<b.__webglColorRenderbuffer.length;ge++)b.__webglColorRenderbuffer[ge]&&a.deleteRenderbuffer(b.__webglColorRenderbuffer[ge]);b.__webglDepthRenderbuffer&&a.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const te=L.textures;for(let ge=0,Te=te.length;ge<Te;ge++){const fe=s.get(te[ge]);fe.__webglTexture&&(a.deleteTexture(fe.__webglTexture),f.memory.textures--),s.remove(te[ge])}s.remove(L)}let V=0;function ue(){V=0}function oe(){const L=V;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),V+=1,L}function xe(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function pe(L,b){const te=s.get(L);if(L.isVideoTexture&&We(L),L.isRenderTargetTexture===!1&&L.version>0&&te.__version!==L.version){const ge=L.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(te,L,b);return}}i.bindTexture(a.TEXTURE_2D,te.__webglTexture,a.TEXTURE0+b)}function z(L,b){const te=s.get(L);if(L.version>0&&te.__version!==L.version){J(te,L,b);return}i.bindTexture(a.TEXTURE_2D_ARRAY,te.__webglTexture,a.TEXTURE0+b)}function K(L,b){const te=s.get(L);if(L.version>0&&te.__version!==L.version){J(te,L,b);return}i.bindTexture(a.TEXTURE_3D,te.__webglTexture,a.TEXTURE0+b)}function Y(L,b){const te=s.get(L);if(L.version>0&&te.__version!==L.version){me(te,L,b);return}i.bindTexture(a.TEXTURE_CUBE_MAP,te.__webglTexture,a.TEXTURE0+b)}const Me={[gd]:a.REPEAT,[Br]:a.CLAMP_TO_EDGE,[vd]:a.MIRRORED_REPEAT},O={[wi]:a.NEAREST,[SE]:a.NEAREST_MIPMAP_NEAREST,[bu]:a.NEAREST_MIPMAP_LINEAR,[Kn]:a.LINEAR,[Th]:a.LINEAR_MIPMAP_NEAREST,[zr]:a.LINEAR_MIPMAP_LINEAR},ee={[TE]:a.NEVER,[UE]:a.ALWAYS,[bE]:a.LESS,[C_]:a.LEQUAL,[AE]:a.EQUAL,[CE]:a.GEQUAL,[RE]:a.GREATER,[wE]:a.NOTEQUAL};function Se(L,b){if(b.type===ha&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Kn||b.magFilter===Th||b.magFilter===bu||b.magFilter===zr||b.minFilter===Kn||b.minFilter===Th||b.minFilter===bu||b.minFilter===zr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(L,a.TEXTURE_WRAP_S,Me[b.wrapS]),a.texParameteri(L,a.TEXTURE_WRAP_T,Me[b.wrapT]),(L===a.TEXTURE_3D||L===a.TEXTURE_2D_ARRAY)&&a.texParameteri(L,a.TEXTURE_WRAP_R,Me[b.wrapR]),a.texParameteri(L,a.TEXTURE_MAG_FILTER,O[b.magFilter]),a.texParameteri(L,a.TEXTURE_MIN_FILTER,O[b.minFilter]),b.compareFunction&&(a.texParameteri(L,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(L,a.TEXTURE_COMPARE_FUNC,ee[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===wi||b.minFilter!==bu&&b.minFilter!==zr||b.type===ha&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");a.texParameterf(L,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function Ee(L,b){let te=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",k));const ge=b.source;let Te=x.get(ge);Te===void 0&&(Te={},x.set(ge,Te));const fe=xe(b);if(fe!==L.__cacheKey){Te[fe]===void 0&&(Te[fe]={texture:a.createTexture(),usedTimes:0},f.memory.textures++,te=!0),Te[fe].usedTimes++;const Pe=Te[L.__cacheKey];Pe!==void 0&&(Te[L.__cacheKey].usedTimes--,Pe.usedTimes===0&&D(b)),L.__cacheKey=fe,L.__webglTexture=Te[fe].texture}return te}function J(L,b,te){let ge=a.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ge=a.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ge=a.TEXTURE_3D);const Te=Ee(L,b),fe=b.source;i.bindTexture(ge,L.__webglTexture,a.TEXTURE0+te);const Pe=s.get(fe);if(fe.version!==Pe.__version||Te===!0){i.activeTexture(a.TEXTURE0+te);const we=Rt.getPrimaries(Rt.workingColorSpace),Ge=b.colorSpace===Ii?null:Rt.getPrimaries(b.colorSpace),$e=b.colorSpace===Ii||we===Ge?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let Ae=A(b.image,!1,l.maxTextureSize);Ae=Ot(b,Ae);const Fe=u.convert(b.format,b.colorSpace),Ye=u.convert(b.type);let Qe=C(b.internalFormat,Fe,Ye,b.colorSpace,b.isVideoTexture);Se(ge,b);let Be;const ct=b.mipmaps,nt=b.isVideoTexture!==!0,Pt=Pe.__version===void 0||Te===!0,X=fe.dataReady,Ne=H(b,Ae);if(b.isDepthTexture)Qe=U(b.format===Xs,b.type),Pt&&(nt?i.texStorage2D(a.TEXTURE_2D,1,Qe,Ae.width,Ae.height):i.texImage2D(a.TEXTURE_2D,0,Qe,Ae.width,Ae.height,0,Fe,Ye,null));else if(b.isDataTexture)if(ct.length>0){nt&&Pt&&i.texStorage2D(a.TEXTURE_2D,Ne,Qe,ct[0].width,ct[0].height);for(let le=0,ve=ct.length;le<ve;le++)Be=ct[le],nt?X&&i.texSubImage2D(a.TEXTURE_2D,le,0,0,Be.width,Be.height,Fe,Ye,Be.data):i.texImage2D(a.TEXTURE_2D,le,Qe,Be.width,Be.height,0,Fe,Ye,Be.data);b.generateMipmaps=!1}else nt?(Pt&&i.texStorage2D(a.TEXTURE_2D,Ne,Qe,Ae.width,Ae.height),X&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,Ae.width,Ae.height,Fe,Ye,Ae.data)):i.texImage2D(a.TEXTURE_2D,0,Qe,Ae.width,Ae.height,0,Fe,Ye,Ae.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){nt&&Pt&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Ne,Qe,ct[0].width,ct[0].height,Ae.depth);for(let le=0,ve=ct.length;le<ve;le++)if(Be=ct[le],b.format!==Ri)if(Fe!==null)if(nt){if(X)if(b.layerUpdates.size>0){const ze=A0(Be.width,Be.height,b.format,b.type);for(const Oe of b.layerUpdates){const at=Be.data.subarray(Oe*ze/Be.data.BYTES_PER_ELEMENT,(Oe+1)*ze/Be.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,le,0,0,Oe,Be.width,Be.height,1,Fe,at)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,le,0,0,0,Be.width,Be.height,Ae.depth,Fe,Be.data)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,le,Qe,Be.width,Be.height,Ae.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?X&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,le,0,0,0,Be.width,Be.height,Ae.depth,Fe,Ye,Be.data):i.texImage3D(a.TEXTURE_2D_ARRAY,le,Qe,Be.width,Be.height,Ae.depth,0,Fe,Ye,Be.data)}else{nt&&Pt&&i.texStorage2D(a.TEXTURE_2D,Ne,Qe,ct[0].width,ct[0].height);for(let le=0,ve=ct.length;le<ve;le++)Be=ct[le],b.format!==Ri?Fe!==null?nt?X&&i.compressedTexSubImage2D(a.TEXTURE_2D,le,0,0,Be.width,Be.height,Fe,Be.data):i.compressedTexImage2D(a.TEXTURE_2D,le,Qe,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?X&&i.texSubImage2D(a.TEXTURE_2D,le,0,0,Be.width,Be.height,Fe,Ye,Be.data):i.texImage2D(a.TEXTURE_2D,le,Qe,Be.width,Be.height,0,Fe,Ye,Be.data)}else if(b.isDataArrayTexture)if(nt){if(Pt&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Ne,Qe,Ae.width,Ae.height,Ae.depth),X)if(b.layerUpdates.size>0){const le=A0(Ae.width,Ae.height,b.format,b.type);for(const ve of b.layerUpdates){const ze=Ae.data.subarray(ve*le/Ae.data.BYTES_PER_ELEMENT,(ve+1)*le/Ae.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,ve,Ae.width,Ae.height,1,Fe,Ye,ze)}b.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Fe,Ye,Ae.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,Qe,Ae.width,Ae.height,Ae.depth,0,Fe,Ye,Ae.data);else if(b.isData3DTexture)nt?(Pt&&i.texStorage3D(a.TEXTURE_3D,Ne,Qe,Ae.width,Ae.height,Ae.depth),X&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Fe,Ye,Ae.data)):i.texImage3D(a.TEXTURE_3D,0,Qe,Ae.width,Ae.height,Ae.depth,0,Fe,Ye,Ae.data);else if(b.isFramebufferTexture){if(Pt)if(nt)i.texStorage2D(a.TEXTURE_2D,Ne,Qe,Ae.width,Ae.height);else{let le=Ae.width,ve=Ae.height;for(let ze=0;ze<Ne;ze++)i.texImage2D(a.TEXTURE_2D,ze,Qe,le,ve,0,Fe,Ye,null),le>>=1,ve>>=1}}else if(ct.length>0){if(nt&&Pt){const le=Ve(ct[0]);i.texStorage2D(a.TEXTURE_2D,Ne,Qe,le.width,le.height)}for(let le=0,ve=ct.length;le<ve;le++)Be=ct[le],nt?X&&i.texSubImage2D(a.TEXTURE_2D,le,0,0,Fe,Ye,Be):i.texImage2D(a.TEXTURE_2D,le,Qe,Fe,Ye,Be);b.generateMipmaps=!1}else if(nt){if(Pt){const le=Ve(Ae);i.texStorage2D(a.TEXTURE_2D,Ne,Qe,le.width,le.height)}X&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,Fe,Ye,Ae)}else i.texImage2D(a.TEXTURE_2D,0,Qe,Fe,Ye,Ae);S(b)&&v(ge),Pe.__version=fe.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function me(L,b,te){if(b.image.length!==6)return;const ge=Ee(L,b),Te=b.source;i.bindTexture(a.TEXTURE_CUBE_MAP,L.__webglTexture,a.TEXTURE0+te);const fe=s.get(Te);if(Te.version!==fe.__version||ge===!0){i.activeTexture(a.TEXTURE0+te);const Pe=Rt.getPrimaries(Rt.workingColorSpace),we=b.colorSpace===Ii?null:Rt.getPrimaries(b.colorSpace),Ge=b.colorSpace===Ii||Pe===we?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);const $e=b.isCompressedTexture||b.image[0].isCompressedTexture,Ae=b.image[0]&&b.image[0].isDataTexture,Fe=[];for(let ve=0;ve<6;ve++)!$e&&!Ae?Fe[ve]=A(b.image[ve],!0,l.maxCubemapSize):Fe[ve]=Ae?b.image[ve].image:b.image[ve],Fe[ve]=Ot(b,Fe[ve]);const Ye=Fe[0],Qe=u.convert(b.format,b.colorSpace),Be=u.convert(b.type),ct=C(b.internalFormat,Qe,Be,b.colorSpace),nt=b.isVideoTexture!==!0,Pt=fe.__version===void 0||ge===!0,X=Te.dataReady;let Ne=H(b,Ye);Se(a.TEXTURE_CUBE_MAP,b);let le;if($e){nt&&Pt&&i.texStorage2D(a.TEXTURE_CUBE_MAP,Ne,ct,Ye.width,Ye.height);for(let ve=0;ve<6;ve++){le=Fe[ve].mipmaps;for(let ze=0;ze<le.length;ze++){const Oe=le[ze];b.format!==Ri?Qe!==null?nt?X&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ze,0,0,Oe.width,Oe.height,Qe,Oe.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ze,ct,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?X&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ze,0,0,Oe.width,Oe.height,Qe,Be,Oe.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ze,ct,Oe.width,Oe.height,0,Qe,Be,Oe.data)}}}else{if(le=b.mipmaps,nt&&Pt){le.length>0&&Ne++;const ve=Ve(Fe[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,Ne,ct,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Ae){nt?X&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Fe[ve].width,Fe[ve].height,Qe,Be,Fe[ve].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ct,Fe[ve].width,Fe[ve].height,0,Qe,Be,Fe[ve].data);for(let ze=0;ze<le.length;ze++){const at=le[ze].image[ve].image;nt?X&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ze+1,0,0,at.width,at.height,Qe,Be,at.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ze+1,ct,at.width,at.height,0,Qe,Be,at.data)}}else{nt?X&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Qe,Be,Fe[ve]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ct,Qe,Be,Fe[ve]);for(let ze=0;ze<le.length;ze++){const Oe=le[ze];nt?X&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ze+1,0,0,Qe,Be,Oe.image[ve]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ze+1,ct,Qe,Be,Oe.image[ve])}}}S(b)&&v(a.TEXTURE_CUBE_MAP),fe.__version=Te.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function ye(L,b,te,ge,Te,fe){const Pe=u.convert(te.format,te.colorSpace),we=u.convert(te.type),Ge=C(te.internalFormat,Pe,we,te.colorSpace),$e=s.get(b),Ae=s.get(te);if(Ae.__renderTarget=b,!$e.__hasExternalTextures){const Fe=Math.max(1,b.width>>fe),Ye=Math.max(1,b.height>>fe);Te===a.TEXTURE_3D||Te===a.TEXTURE_2D_ARRAY?i.texImage3D(Te,fe,Ge,Fe,Ye,b.depth,0,Pe,we,null):i.texImage2D(Te,fe,Ge,Fe,Ye,0,Pe,we,null)}i.bindFramebuffer(a.FRAMEBUFFER,L),it(b)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ge,Te,Ae.__webglTexture,0,_t(b)):(Te===a.TEXTURE_2D||Te>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&Te<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ge,Te,Ae.__webglTexture,fe),i.bindFramebuffer(a.FRAMEBUFFER,null)}function Re(L,b,te){if(a.bindRenderbuffer(a.RENDERBUFFER,L),b.depthBuffer){const ge=b.depthTexture,Te=ge&&ge.isDepthTexture?ge.type:null,fe=U(b.stencilBuffer,Te),Pe=b.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,we=_t(b);it(b)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,we,fe,b.width,b.height):te?a.renderbufferStorageMultisample(a.RENDERBUFFER,we,fe,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,fe,b.width,b.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Pe,a.RENDERBUFFER,L)}else{const ge=b.textures;for(let Te=0;Te<ge.length;Te++){const fe=ge[Te],Pe=u.convert(fe.format,fe.colorSpace),we=u.convert(fe.type),Ge=C(fe.internalFormat,Pe,we,fe.colorSpace),$e=_t(b);te&&it(b)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,$e,Ge,b.width,b.height):it(b)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,$e,Ge,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,Ge,b.width,b.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Le(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(a.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=s.get(b.depthTexture);ge.__renderTarget=b,(!ge.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),pe(b.depthTexture,0);const Te=ge.__webglTexture,fe=_t(b);if(b.depthTexture.format===il)it(b)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Te,0,fe):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Te,0);else if(b.depthTexture.format===Xs)it(b)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Te,0,fe):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Te,0);else throw new Error("Unknown depthTexture format")}function lt(L){const b=s.get(L),te=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const ge=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ge){const Te=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ge.removeEventListener("dispose",Te)};ge.addEventListener("dispose",Te),b.__depthDisposeCallback=Te}b.__boundDepthTexture=ge}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");const ge=L.texture.mipmaps;ge&&ge.length>0?Le(b.__webglFramebuffer[0],L):Le(b.__webglFramebuffer,L)}else if(te){b.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(i.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[ge]),b.__webglDepthbuffer[ge]===void 0)b.__webglDepthbuffer[ge]=a.createRenderbuffer(),Re(b.__webglDepthbuffer[ge],L,!1);else{const Te=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,fe=b.__webglDepthbuffer[ge];a.bindRenderbuffer(a.RENDERBUFFER,fe),a.framebufferRenderbuffer(a.FRAMEBUFFER,Te,a.RENDERBUFFER,fe)}}else{const ge=L.texture.mipmaps;if(ge&&ge.length>0?i.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=a.createRenderbuffer(),Re(b.__webglDepthbuffer,L,!1);else{const Te=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,fe=b.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,fe),a.framebufferRenderbuffer(a.FRAMEBUFFER,Te,a.RENDERBUFFER,fe)}}i.bindFramebuffer(a.FRAMEBUFFER,null)}function Ke(L,b,te){const ge=s.get(L);b!==void 0&&ye(ge.__webglFramebuffer,L,L.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),te!==void 0&&lt(L)}function Xt(L){const b=L.texture,te=s.get(L),ge=s.get(b);L.addEventListener("dispose",I);const Te=L.textures,fe=L.isWebGLCubeRenderTarget===!0,Pe=Te.length>1;if(Pe||(ge.__webglTexture===void 0&&(ge.__webglTexture=a.createTexture()),ge.__version=b.version,f.memory.textures++),fe){te.__webglFramebuffer=[];for(let we=0;we<6;we++)if(b.mipmaps&&b.mipmaps.length>0){te.__webglFramebuffer[we]=[];for(let Ge=0;Ge<b.mipmaps.length;Ge++)te.__webglFramebuffer[we][Ge]=a.createFramebuffer()}else te.__webglFramebuffer[we]=a.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){te.__webglFramebuffer=[];for(let we=0;we<b.mipmaps.length;we++)te.__webglFramebuffer[we]=a.createFramebuffer()}else te.__webglFramebuffer=a.createFramebuffer();if(Pe)for(let we=0,Ge=Te.length;we<Ge;we++){const $e=s.get(Te[we]);$e.__webglTexture===void 0&&($e.__webglTexture=a.createTexture(),f.memory.textures++)}if(L.samples>0&&it(L)===!1){te.__webglMultisampledFramebuffer=a.createFramebuffer(),te.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let we=0;we<Te.length;we++){const Ge=Te[we];te.__webglColorRenderbuffer[we]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,te.__webglColorRenderbuffer[we]);const $e=u.convert(Ge.format,Ge.colorSpace),Ae=u.convert(Ge.type),Fe=C(Ge.internalFormat,$e,Ae,Ge.colorSpace,L.isXRRenderTarget===!0),Ye=_t(L);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ye,Fe,L.width,L.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.RENDERBUFFER,te.__webglColorRenderbuffer[we])}a.bindRenderbuffer(a.RENDERBUFFER,null),L.depthBuffer&&(te.__webglDepthRenderbuffer=a.createRenderbuffer(),Re(te.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(fe){i.bindTexture(a.TEXTURE_CUBE_MAP,ge.__webglTexture),Se(a.TEXTURE_CUBE_MAP,b);for(let we=0;we<6;we++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ge=0;Ge<b.mipmaps.length;Ge++)ye(te.__webglFramebuffer[we][Ge],L,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ge);else ye(te.__webglFramebuffer[we],L,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);S(b)&&v(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pe){for(let we=0,Ge=Te.length;we<Ge;we++){const $e=Te[we],Ae=s.get($e);i.bindTexture(a.TEXTURE_2D,Ae.__webglTexture),Se(a.TEXTURE_2D,$e),ye(te.__webglFramebuffer,L,$e,a.COLOR_ATTACHMENT0+we,a.TEXTURE_2D,0),S($e)&&v(a.TEXTURE_2D)}i.unbindTexture()}else{let we=a.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(we=L.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(we,ge.__webglTexture),Se(we,b),b.mipmaps&&b.mipmaps.length>0)for(let Ge=0;Ge<b.mipmaps.length;Ge++)ye(te.__webglFramebuffer[Ge],L,b,a.COLOR_ATTACHMENT0,we,Ge);else ye(te.__webglFramebuffer,L,b,a.COLOR_ATTACHMENT0,we,0);S(b)&&v(we),i.unbindTexture()}L.depthBuffer&&lt(L)}function Gt(L){const b=L.textures;for(let te=0,ge=b.length;te<ge;te++){const Te=b[te];if(S(Te)){const fe=N(L),Pe=s.get(Te).__webglTexture;i.bindTexture(fe,Pe),v(fe),i.unbindTexture()}}}const ht=[],F=[];function Vn(L){if(L.samples>0){if(it(L)===!1){const b=L.textures,te=L.width,ge=L.height;let Te=a.COLOR_BUFFER_BIT;const fe=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Pe=s.get(L),we=b.length>1;if(we)for(let $e=0;$e<b.length;$e++)i.bindFramebuffer(a.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+$e,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,Pe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+$e,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const Ge=L.texture.mipmaps;Ge&&Ge.length>0?i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let $e=0;$e<b.length;$e++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Te|=a.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Te|=a.STENCIL_BUFFER_BIT)),we){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Pe.__webglColorRenderbuffer[$e]);const Ae=s.get(b[$e]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ae,0)}a.blitFramebuffer(0,0,te,ge,0,0,te,ge,Te,a.NEAREST),p===!0&&(ht.length=0,F.length=0,ht.push(a.COLOR_ATTACHMENT0+$e),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ht.push(fe),F.push(fe),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,F)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,ht))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),we)for(let $e=0;$e<b.length;$e++){i.bindFramebuffer(a.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+$e,a.RENDERBUFFER,Pe.__webglColorRenderbuffer[$e]);const Ae=s.get(b[$e]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,Pe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+$e,a.TEXTURE_2D,Ae,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const b=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[b])}}}function _t(L){return Math.min(l.maxSamples,L.samples)}function it(L){const b=s.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function We(L){const b=f.render.frame;g.get(L)!==b&&(g.set(L,b),L.update())}function Ot(L,b){const te=L.colorSpace,ge=L.format,Te=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||te!==ar&&te!==Ii&&(Rt.getTransfer(te)===Ft?(ge!==Ri||Te!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),b}function Ve(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=oe,this.resetTextureUnits=ue,this.setTexture2D=pe,this.setTexture2DArray=z,this.setTexture3D=K,this.setTextureCube=Y,this.rebindTextures=Ke,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Vn,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=it}function GA(a,e){function i(s,l=Ii){let u;const f=Rt.getTransfer(l);if(s===Bn)return a.UNSIGNED_BYTE;if(s===tp)return a.UNSIGNED_SHORT_4_4_4_4;if(s===np)return a.UNSIGNED_SHORT_5_5_5_1;if(s===M_)return a.UNSIGNED_INT_5_9_9_9_REV;if(s===y_)return a.BYTE;if(s===E_)return a.SHORT;if(s===nl)return a.UNSIGNED_SHORT;if(s===ep)return a.INT;if(s===ir)return a.UNSIGNED_INT;if(s===ha)return a.FLOAT;if(s===ll)return a.HALF_FLOAT;if(s===T_)return a.ALPHA;if(s===b_)return a.RGB;if(s===Ri)return a.RGBA;if(s===il)return a.DEPTH_COMPONENT;if(s===Xs)return a.DEPTH_STENCIL;if(s===A_)return a.RED;if(s===ip)return a.RED_INTEGER;if(s===R_)return a.RG;if(s===ap)return a.RG_INTEGER;if(s===rp)return a.RGBA_INTEGER;if(s===Zu||s===Ku||s===Qu||s===Ju)if(f===Ft)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Zu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ku)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Qu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ju)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Zu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ku)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Qu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ju)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===_d||s===xd||s===Sd||s===yd)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===_d)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===xd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Sd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===yd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ed||s===Md||s===Td)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Ed||s===Md)return f===Ft?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Td)return f===Ft?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===bd||s===Ad||s===Rd||s===wd||s===Cd||s===Ud||s===Dd||s===Ld||s===Nd||s===Od||s===Pd||s===Bd||s===zd||s===Id)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===bd)return f===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ad)return f===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Rd)return f===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===wd)return f===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Cd)return f===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ud)return f===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Dd)return f===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ld)return f===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Nd)return f===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Od)return f===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Pd)return f===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Bd)return f===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===zd)return f===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Id)return f===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===$u||s===Fd||s===Hd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===$u)return f===Ft?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Fd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Hd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===w_||s===Gd||s===Vd||s===kd)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===$u)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Gd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Vd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===kd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ks?a.UNSIGNED_INT_24_8:a[s]!==void 0?a[s]:null}return{convert:i}}const VA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kA=`
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

}`;class XA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,s){if(this.texture===null){const l=new Pn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Gn({vertexShader:VA,fragmentShader:kA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new _i(new hc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WA extends Sa{constructor(e,i){super();const s=this;let l=null,u=1,f=null,h="local-floor",p=1,m=null,g=null,_=null,x=null,y=null,M=null;const A=new XA,S=i.getContextAttributes();let v=null,N=null;const C=[],U=[],H=new ot;let k=null;const I=new Zn;I.viewport=new Qt;const j=new Zn;j.viewport=new Qt;const D=[I,j],w=new hM;let V=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let me=C[J];return me===void 0&&(me=new jh,C[J]=me),me.getTargetRaySpace()},this.getControllerGrip=function(J){let me=C[J];return me===void 0&&(me=new jh,C[J]=me),me.getGripSpace()},this.getHand=function(J){let me=C[J];return me===void 0&&(me=new jh,C[J]=me),me.getHandSpace()};function oe(J){const me=U.indexOf(J.inputSource);if(me===-1)return;const ye=C[me];ye!==void 0&&(ye.update(J.inputSource,J.frame,m||f),ye.dispatchEvent({type:J.type,data:J.inputSource}))}function xe(){l.removeEventListener("select",oe),l.removeEventListener("selectstart",oe),l.removeEventListener("selectend",oe),l.removeEventListener("squeeze",oe),l.removeEventListener("squeezestart",oe),l.removeEventListener("squeezeend",oe),l.removeEventListener("end",xe),l.removeEventListener("inputsourceschange",pe);for(let J=0;J<C.length;J++){const me=U[J];me!==null&&(U[J]=null,C[J].disconnect(me))}V=null,ue=null,A.reset(),e.setRenderTarget(v),y=null,x=null,_=null,l=null,N=null,Ee.stop(),s.isPresenting=!1,e.setPixelRatio(k),e.setSize(H.width,H.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){u=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){h=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(J){m=J},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return _},this.getFrame=function(){return M},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(v=e.getRenderTarget(),l.addEventListener("select",oe),l.addEventListener("selectstart",oe),l.addEventListener("selectend",oe),l.addEventListener("squeeze",oe),l.addEventListener("squeezestart",oe),l.addEventListener("squeezeend",oe),l.addEventListener("end",xe),l.addEventListener("inputsourceschange",pe),S.xrCompatible!==!0&&await i.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Re=null,Le=null;S.depth&&(Le=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ye=S.stencil?Xs:il,Re=S.stencil?ks:ir);const lt={colorFormat:i.RGBA8,depthFormat:Le,scaleFactor:u};_=new XRWebGLBinding(l,i),x=_.createProjectionLayer(lt),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),N=new Hn(x.textureWidth,x.textureHeight,{format:Ri,type:Bn,depthTexture:new up(x.textureWidth,x.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const ye={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,ye),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new Hn(y.framebufferWidth,y.framebufferHeight,{format:Ri,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(h),Ee.setContext(l),Ee.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function pe(J){for(let me=0;me<J.removed.length;me++){const ye=J.removed[me],Re=U.indexOf(ye);Re>=0&&(U[Re]=null,C[Re].disconnect(ye))}for(let me=0;me<J.added.length;me++){const ye=J.added[me];let Re=U.indexOf(ye);if(Re===-1){for(let lt=0;lt<C.length;lt++)if(lt>=U.length){U.push(ye),Re=lt;break}else if(U[lt]===null){U[lt]=ye,Re=lt;break}if(Re===-1)break}const Le=C[Re];Le&&Le.connect(ye)}}const z=new se,K=new se;function Y(J,me,ye){z.setFromMatrixPosition(me.matrixWorld),K.setFromMatrixPosition(ye.matrixWorld);const Re=z.distanceTo(K),Le=me.projectionMatrix.elements,lt=ye.projectionMatrix.elements,Ke=Le[14]/(Le[10]-1),Xt=Le[14]/(Le[10]+1),Gt=(Le[9]+1)/Le[5],ht=(Le[9]-1)/Le[5],F=(Le[8]-1)/Le[0],Vn=(lt[8]+1)/lt[0],_t=Ke*F,it=Ke*Vn,We=Re/(-F+Vn),Ot=We*-F;if(me.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ot),J.translateZ(We),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Le[10]===-1)J.projectionMatrix.copy(me.projectionMatrix),J.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Ve=Ke+We,L=Xt+We,b=_t-Ot,te=it+(Re-Ot),ge=Gt*Xt/L*Ve,Te=ht*Xt/L*Ve;J.projectionMatrix.makePerspective(b,te,ge,Te,Ve,L),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Me(J,me){me===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(me.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let me=J.near,ye=J.far;A.texture!==null&&(A.depthNear>0&&(me=A.depthNear),A.depthFar>0&&(ye=A.depthFar)),w.near=j.near=I.near=me,w.far=j.far=I.far=ye,(V!==w.near||ue!==w.far)&&(l.updateRenderState({depthNear:w.near,depthFar:w.far}),V=w.near,ue=w.far),I.layers.mask=J.layers.mask|2,j.layers.mask=J.layers.mask|4,w.layers.mask=I.layers.mask|j.layers.mask;const Re=J.parent,Le=w.cameras;Me(w,Re);for(let lt=0;lt<Le.length;lt++)Me(Le[lt],Re);Le.length===2?Y(w,I,j):w.projectionMatrix.copy(I.projectionMatrix),O(J,w,Re)};function O(J,me,ye){ye===null?J.matrix.copy(me.matrixWorld):(J.matrix.copy(ye.matrixWorld),J.matrix.invert(),J.matrix.multiply(me.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(me.projectionMatrix),J.projectionMatrixInverse.copy(me.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Xd*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(x===null&&y===null))return p},this.setFoveation=function(J){p=J,x!==null&&(x.fixedFoveation=J),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=J)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(w)};let ee=null;function Se(J,me){if(g=me.getViewerPose(m||f),M=me,g!==null){const ye=g.views;y!==null&&(e.setRenderTargetFramebuffer(N,y.framebuffer),e.setRenderTarget(N));let Re=!1;ye.length!==w.cameras.length&&(w.cameras.length=0,Re=!0);for(let Ke=0;Ke<ye.length;Ke++){const Xt=ye[Ke];let Gt=null;if(y!==null)Gt=y.getViewport(Xt);else{const F=_.getViewSubImage(x,Xt);Gt=F.viewport,Ke===0&&(e.setRenderTargetTextures(N,F.colorTexture,F.depthStencilTexture),e.setRenderTarget(N))}let ht=D[Ke];ht===void 0&&(ht=new Zn,ht.layers.enable(Ke),ht.viewport=new Qt,D[Ke]=ht),ht.matrix.fromArray(Xt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Xt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),Ke===0&&(w.matrix.copy(ht.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Re===!0&&w.cameras.push(ht)}const Le=l.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const Ke=_.getDepthInformation(ye[0]);Ke&&Ke.isValid&&Ke.texture&&A.init(e,Ke,l.renderState)}}for(let ye=0;ye<C.length;ye++){const Re=U[ye],Le=C[ye];Re!==null&&Le!==void 0&&Le.update(Re,me,m||f)}ee&&ee(J,me),me.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:me}),M=null}const Ee=new F_;Ee.setAnimationLoop(Se),this.setAnimationLoop=function(J){ee=J},this.dispose=function(){}}}const Dr=new _a,jA=new cn;function qA(a,e){function i(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function s(S,v){v.color.getRGB(S.fogColor.value,B_(a)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function l(S,v,N,C,U){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(S,v):v.isMeshToonMaterial?(u(S,v),_(S,v)):v.isMeshPhongMaterial?(u(S,v),g(S,v)):v.isMeshStandardMaterial?(u(S,v),x(S,v),v.isMeshPhysicalMaterial&&y(S,v,U)):v.isMeshMatcapMaterial?(u(S,v),M(S,v)):v.isMeshDepthMaterial?u(S,v):v.isMeshDistanceMaterial?(u(S,v),A(S,v)):v.isMeshNormalMaterial?u(S,v):v.isLineBasicMaterial?(f(S,v),v.isLineDashedMaterial&&h(S,v)):v.isPointsMaterial?p(S,v,N,C):v.isSpriteMaterial?m(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,i(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===Mn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,i(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===Mn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,i(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,i(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const N=e.get(v),C=N.envMap,U=N.envMapRotation;C&&(S.envMap.value=C,Dr.copy(U),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),S.envMapRotation.value.setFromMatrix4(jA.makeRotationFromEuler(Dr)),S.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,S.aoMapTransform))}function f(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform))}function h(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function p(S,v,N,C){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*N,S.scale.value=C*.5,v.map&&(S.map.value=v.map,i(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function m(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function g(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function _(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function x(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function y(S,v,N){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Mn&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,v){v.matcap&&(S.matcap.value=v.matcap)}function A(S,v){const N=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function YA(a,e,i,s){let l={},u={},f=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function p(N,C){const U=C.program;s.uniformBlockBinding(N,U)}function m(N,C){let U=l[N.id];U===void 0&&(M(N),U=g(N),l[N.id]=U,N.addEventListener("dispose",S));const H=C.program;s.updateUBOMapping(N,H);const k=e.render.frame;u[N.id]!==k&&(x(N),u[N.id]=k)}function g(N){const C=_();N.__bindingPointIndex=C;const U=a.createBuffer(),H=N.__size,k=N.usage;return a.bindBuffer(a.UNIFORM_BUFFER,U),a.bufferData(a.UNIFORM_BUFFER,H,k),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,C,U),U}function _(){for(let N=0;N<h;N++)if(f.indexOf(N)===-1)return f.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const C=l[N.id],U=N.uniforms,H=N.__cache;a.bindBuffer(a.UNIFORM_BUFFER,C);for(let k=0,I=U.length;k<I;k++){const j=Array.isArray(U[k])?U[k]:[U[k]];for(let D=0,w=j.length;D<w;D++){const V=j[D];if(y(V,k,D,H)===!0){const ue=V.__offset,oe=Array.isArray(V.value)?V.value:[V.value];let xe=0;for(let pe=0;pe<oe.length;pe++){const z=oe[pe],K=A(z);typeof z=="number"||typeof z=="boolean"?(V.__data[0]=z,a.bufferSubData(a.UNIFORM_BUFFER,ue+xe,V.__data)):z.isMatrix3?(V.__data[0]=z.elements[0],V.__data[1]=z.elements[1],V.__data[2]=z.elements[2],V.__data[3]=0,V.__data[4]=z.elements[3],V.__data[5]=z.elements[4],V.__data[6]=z.elements[5],V.__data[7]=0,V.__data[8]=z.elements[6],V.__data[9]=z.elements[7],V.__data[10]=z.elements[8],V.__data[11]=0):(z.toArray(V.__data,xe),xe+=K.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,ue,V.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function y(N,C,U,H){const k=N.value,I=C+"_"+U;if(H[I]===void 0)return typeof k=="number"||typeof k=="boolean"?H[I]=k:H[I]=k.clone(),!0;{const j=H[I];if(typeof k=="number"||typeof k=="boolean"){if(j!==k)return H[I]=k,!0}else if(j.equals(k)===!1)return j.copy(k),!0}return!1}function M(N){const C=N.uniforms;let U=0;const H=16;for(let I=0,j=C.length;I<j;I++){const D=Array.isArray(C[I])?C[I]:[C[I]];for(let w=0,V=D.length;w<V;w++){const ue=D[w],oe=Array.isArray(ue.value)?ue.value:[ue.value];for(let xe=0,pe=oe.length;xe<pe;xe++){const z=oe[xe],K=A(z),Y=U%H,Me=Y%K.boundary,O=Y+Me;U+=Me,O!==0&&H-O<K.storage&&(U+=H-O),ue.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=U,U+=K.storage}}}const k=U%H;return k>0&&(U+=H-k),N.__size=U,N.__cache={},this}function A(N){const C={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(C.boundary=4,C.storage=4):N.isVector2?(C.boundary=8,C.storage=8):N.isVector3||N.isColor?(C.boundary=16,C.storage=12):N.isVector4?(C.boundary=16,C.storage=16):N.isMatrix3?(C.boundary=48,C.storage=48):N.isMatrix4?(C.boundary=64,C.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),C}function S(N){const C=N.target;C.removeEventListener("dispose",S);const U=f.indexOf(C.__bindingPointIndex);f.splice(U,1),a.deleteBuffer(l[C.id]),delete l[C.id],delete u[C.id]}function v(){for(const N in l)a.deleteBuffer(l[N]);f=[],l={},u={}}return{bind:p,update:m,dispose:v}}class X_{constructor(e={}){const{canvas:i=LE(),context:s=null,depth:l=!0,stencil:u=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=f;const M=new Uint32Array(4),A=new Int32Array(4);let S=null,v=null;const N=[],C=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=nr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let H=!1;this._outputColorSpace=Ht;let k=0,I=0,j=null,D=-1,w=null;const V=new Qt,ue=new Qt;let oe=null;const xe=new Nt(0);let pe=0,z=i.width,K=i.height,Y=1,Me=null,O=null;const ee=new Qt(0,0,z,K),Se=new Qt(0,0,z,K);let Ee=!1;const J=new I_;let me=!1,ye=!1;const Re=new cn,Le=new cn,lt=new se,Ke=new Qt,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function ht(){return j===null?Y:1}let F=s;function Vn(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ol}`),i.addEventListener("webglcontextlost",ve,!1),i.addEventListener("webglcontextrestored",ze,!1),i.addEventListener("webglcontextcreationerror",Oe,!1),F===null){const q="webgl2";if(F=Vn(q,R),F===null)throw Vn(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let _t,it,We,Ot,Ve,L,b,te,ge,Te,fe,Pe,we,Ge,$e,Ae,Fe,Ye,Qe,Be,ct,nt,Pt,X;function Ne(){_t=new r2(F),_t.init(),nt=new GA(F,_t),it=new Jb(F,_t,e,nt),We=new FA(F,_t),it.reverseDepthBuffer&&x&&We.buffers.depth.setReversed(!0),Ot=new l2(F),Ve=new AA,L=new HA(F,_t,We,Ve,it,nt,Ot),b=new e2(U),te=new a2(U),ge=new pM(F),Pt=new Kb(F,ge),Te=new s2(F,ge,Ot,Pt),fe=new c2(F,Te,ge,Ot),Qe=new u2(F,it,L),Ae=new $b(Ve),Pe=new bA(U,b,te,_t,it,Pt,Ae),we=new qA(U,Ve),Ge=new wA,$e=new OA(_t),Ye=new Zb(U,b,te,We,fe,y,p),Fe=new zA(U,fe,it),X=new YA(F,Ot,it,We),Be=new Qb(F,_t,Ot),ct=new o2(F,_t,Ot),Ot.programs=Pe.programs,U.capabilities=it,U.extensions=_t,U.properties=Ve,U.renderLists=Ge,U.shadowMap=Fe,U.state=We,U.info=Ot}Ne();const le=new WA(U,F);this.xr=le,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=_t.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=_t.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(z,K,!1))},this.getSize=function(R){return R.set(z,K)},this.setSize=function(R,q,ae=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,K=q,i.width=Math.floor(R*Y),i.height=Math.floor(q*Y),ae===!0&&(i.style.width=R+"px",i.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(z*Y,K*Y).floor()},this.setDrawingBufferSize=function(R,q,ae){z=R,K=q,Y=ae,i.width=Math.floor(R*ae),i.height=Math.floor(q*ae),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(V)},this.getViewport=function(R){return R.copy(ee)},this.setViewport=function(R,q,ae,re){R.isVector4?ee.set(R.x,R.y,R.z,R.w):ee.set(R,q,ae,re),We.viewport(V.copy(ee).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(Se)},this.setScissor=function(R,q,ae,re){R.isVector4?Se.set(R.x,R.y,R.z,R.w):Se.set(R,q,ae,re),We.scissor(ue.copy(Se).multiplyScalar(Y).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(R){We.setScissorTest(Ee=R)},this.setOpaqueSort=function(R){Me=R},this.setTransparentSort=function(R){O=R},this.getClearColor=function(R){return R.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,ae=!0){let re=0;if(R){let Z=!1;if(j!==null){const be=j.texture.format;Z=be===rp||be===ap||be===ip}if(Z){const be=j.texture.type,Ce=be===Bn||be===ir||be===nl||be===ks||be===tp||be===np,Ue=Ye.getClearColor(),Ie=Ye.getClearAlpha(),et=Ue.r,je=Ue.g,Xe=Ue.b;Ce?(M[0]=et,M[1]=je,M[2]=Xe,M[3]=Ie,F.clearBufferuiv(F.COLOR,0,M)):(A[0]=et,A[1]=je,A[2]=Xe,A[3]=Ie,F.clearBufferiv(F.COLOR,0,A))}else re|=F.COLOR_BUFFER_BIT}q&&(re|=F.DEPTH_BUFFER_BIT),ae&&(re|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ve,!1),i.removeEventListener("webglcontextrestored",ze,!1),i.removeEventListener("webglcontextcreationerror",Oe,!1),Ye.dispose(),Ge.dispose(),$e.dispose(),Ve.dispose(),b.dispose(),te.dispose(),fe.dispose(),Pt.dispose(),X.dispose(),Pe.dispose(),le.dispose(),le.removeEventListener("sessionstart",fn),le.removeEventListener("sessionend",Tn),kn.stop()};function ve(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function ze(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const R=Ot.autoReset,q=Fe.enabled,ae=Fe.autoUpdate,re=Fe.needsUpdate,Z=Fe.type;Ne(),Ot.autoReset=R,Fe.enabled=q,Fe.autoUpdate=ae,Fe.needsUpdate=re,Fe.type=Z}function Oe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function at(R){const q=R.target;q.removeEventListener("dispose",at),Wt(q)}function Wt(R){rn(R),Ve.remove(R)}function rn(R){const q=Ve.get(R).programs;q!==void 0&&(q.forEach(function(ae){Pe.releaseProgram(ae)}),R.isShaderMaterial&&Pe.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,ae,re,Z,be){q===null&&(q=Xt);const Ce=Z.isMesh&&Z.matrixWorld.determinant()<0,Ue=ur(R,q,ae,re,Z);We.setMaterial(re,Ce);let Ie=ae.index,et=1;if(re.wireframe===!0){if(Ie=Te.getWireframeAttribute(ae),Ie===void 0)return;et=2}const je=ae.drawRange,Xe=ae.attributes.position;let pt=je.start*et,bt=(je.start+je.count)*et;be!==null&&(pt=Math.max(pt,be.start*et),bt=Math.min(bt,(be.start+be.count)*et)),Ie!==null?(pt=Math.max(pt,0),bt=Math.min(bt,Ie.count)):Xe!=null&&(pt=Math.max(pt,0),bt=Math.min(bt,Xe.count));const Zt=bt-pt;if(Zt<0||Zt===1/0)return;Pt.setup(Z,re,Ue,ae,Ie);let xt,St=Be;if(Ie!==null&&(xt=ge.get(Ie),St=ct,St.setIndex(xt)),Z.isMesh)re.wireframe===!0?(We.setLineWidth(re.wireframeLinewidth*ht()),St.setMode(F.LINES)):St.setMode(F.TRIANGLES);else if(Z.isLine){let qe=re.linewidth;qe===void 0&&(qe=1),We.setLineWidth(qe*ht()),Z.isLineSegments?St.setMode(F.LINES):Z.isLineLoop?St.setMode(F.LINE_LOOP):St.setMode(F.LINE_STRIP)}else Z.isPoints?St.setMode(F.POINTS):Z.isSprite&&St.setMode(F.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)ec("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))St.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const qe=Z._multiDrawStarts,$t=Z._multiDrawCounts,Mt=Z._multiDrawCount,Cn=Ie?ge.get(Ie).bytesPerElement:1,Ta=Ve.get(re).currentProgram.getUniforms();for(let jt=0;jt<Mt;jt++)Ta.setValue(F,"_gl_DrawID",jt),St.render(qe[jt]/Cn,$t[jt])}else if(Z.isInstancedMesh)St.renderInstances(pt,Zt,Z.count);else if(ae.isInstancedBufferGeometry){const qe=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,$t=Math.min(ae.instanceCount,qe);St.renderInstances(pt,Zt,$t)}else St.render(pt,Zt)};function Tt(R,q,ae){R.transparent===!0&&R.side===li&&R.forceSinglePass===!1?(R.side=Mn,R.needsUpdate=!0,Ea(R,q,ae),R.side=va,R.needsUpdate=!0,Ea(R,q,ae),R.side=li):Ea(R,q,ae)}this.compile=function(R,q,ae=null){ae===null&&(ae=R),v=$e.get(ae),v.init(q),C.push(v),ae.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),R!==ae&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),v.setupLights();const re=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const be=Z.material;if(be)if(Array.isArray(be))for(let Ce=0;Ce<be.length;Ce++){const Ue=be[Ce];Tt(Ue,ae,Z),re.add(Ue)}else Tt(be,ae,Z),re.add(be)}),v=C.pop(),re},this.compileAsync=function(R,q,ae=null){const re=this.compile(R,q,ae);return new Promise(Z=>{function be(){if(re.forEach(function(Ce){Ve.get(Ce).currentProgram.isReady()&&re.delete(Ce)}),re.size===0){Z(R);return}setTimeout(be,10)}_t.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Jn=null;function vn(R){Jn&&Jn(R)}function fn(){kn.stop()}function Tn(){kn.start()}const kn=new F_;kn.setAnimationLoop(vn),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(R){Jn=R,le.setAnimationLoop(R),R===null?kn.stop():kn.start()},le.addEventListener("sessionstart",fn),le.addEventListener("sessionend",Tn),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(q),q=le.getCamera()),R.isScene===!0&&R.onBeforeRender(U,R,q,j),v=$e.get(R,C.length),v.init(q),C.push(v),Le.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),J.setFromProjectionMatrix(Le),ye=this.localClippingEnabled,me=Ae.init(this.clippingPlanes,ye),S=Ge.get(R,N.length),S.init(),N.push(S),le.enabled===!0&&le.isPresenting===!0){const be=U.xr.getDepthSensingMesh();be!==null&&or(be,q,-1/0,U.sortObjects)}or(R,q,0,U.sortObjects),S.finish(),U.sortObjects===!0&&S.sort(Me,O),Gt=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Gt&&Ye.addToRenderList(S,R),this.info.render.frame++,me===!0&&Ae.beginShadows();const ae=v.state.shadowsArray;Fe.render(ae,R,q),me===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=S.opaque,Z=S.transmissive;if(v.setupLights(),q.isArrayCamera){const be=q.cameras;if(Z.length>0)for(let Ce=0,Ue=be.length;Ce<Ue;Ce++){const Ie=be[Ce];pl(re,Z,R,Ie)}Gt&&Ye.render(R);for(let Ce=0,Ue=be.length;Ce<Ue;Ce++){const Ie=be[Ce];dl(S,R,Ie,Ie.viewport)}}else Z.length>0&&pl(re,Z,R,q),Gt&&Ye.render(R),dl(S,R,q);j!==null&&I===0&&(L.updateMultisampleRenderTarget(j),L.updateRenderTargetMipmap(j)),R.isScene===!0&&R.onAfterRender(U,R,q),Pt.resetDefaultState(),D=-1,w=null,C.pop(),C.length>0?(v=C[C.length-1],me===!0&&Ae.setGlobalState(U.clippingPlanes,v.state.camera)):v=null,N.pop(),N.length>0?S=N[N.length-1]:S=null};function or(R,q,ae,re){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)ae=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||J.intersectsSprite(R)){re&&Ke.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Le);const Ce=fe.update(R),Ue=R.material;Ue.visible&&S.push(R,Ce,Ue,ae,Ke.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||J.intersectsObject(R))){const Ce=fe.update(R),Ue=R.material;if(re&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ke.copy(R.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Ke.copy(Ce.boundingSphere.center)),Ke.applyMatrix4(R.matrixWorld).applyMatrix4(Le)),Array.isArray(Ue)){const Ie=Ce.groups;for(let et=0,je=Ie.length;et<je;et++){const Xe=Ie[et],pt=Ue[Xe.materialIndex];pt&&pt.visible&&S.push(R,Ce,pt,ae,Ke.z,Xe)}}else Ue.visible&&S.push(R,Ce,Ue,ae,Ke.z,null)}}const be=R.children;for(let Ce=0,Ue=be.length;Ce<Ue;Ce++)or(be[Ce],q,ae,re)}function dl(R,q,ae,re){const Z=R.opaque,be=R.transmissive,Ce=R.transparent;v.setupLightsView(ae),me===!0&&Ae.setGlobalState(U.clippingPlanes,ae),re&&We.viewport(V.copy(re)),Z.length>0&&lr(Z,q,ae),be.length>0&&lr(be,q,ae),Ce.length>0&&lr(Ce,q,ae),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function pl(R,q,ae,re){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[re.id]===void 0&&(v.state.transmissionRenderTarget[re.id]=new Hn(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?ll:Bn,minFilter:zr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace}));const be=v.state.transmissionRenderTarget[re.id],Ce=re.viewport||V;be.setSize(Ce.z*U.transmissionResolutionScale,Ce.w*U.transmissionResolutionScale);const Ue=U.getRenderTarget();U.setRenderTarget(be),U.getClearColor(xe),pe=U.getClearAlpha(),pe<1&&U.setClearColor(16777215,.5),U.clear(),Gt&&Ye.render(ae);const Ie=U.toneMapping;U.toneMapping=nr;const et=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),v.setupLightsView(re),me===!0&&Ae.setGlobalState(U.clippingPlanes,re),lr(R,ae,re),L.updateMultisampleRenderTarget(be),L.updateRenderTargetMipmap(be),_t.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Xe=0,pt=q.length;Xe<pt;Xe++){const bt=q[Xe],Zt=bt.object,xt=bt.geometry,St=bt.material,qe=bt.group;if(St.side===li&&Zt.layers.test(re.layers)){const $t=St.side;St.side=Mn,St.needsUpdate=!0,ya(Zt,ae,re,xt,St,qe),St.side=$t,St.needsUpdate=!0,je=!0}}je===!0&&(L.updateMultisampleRenderTarget(be),L.updateRenderTargetMipmap(be))}U.setRenderTarget(Ue),U.setClearColor(xe,pe),et!==void 0&&(re.viewport=et),U.toneMapping=Ie}function lr(R,q,ae){const re=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,be=R.length;Z<be;Z++){const Ce=R[Z],Ue=Ce.object,Ie=Ce.geometry,et=Ce.group;let je=Ce.material;je.allowOverride===!0&&re!==null&&(je=re),Ue.layers.test(ae.layers)&&ya(Ue,q,ae,Ie,je,et)}}function ya(R,q,ae,re,Z,be){R.onBeforeRender(U,q,ae,re,Z,be),R.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(U,q,ae,re,R,be),Z.transparent===!0&&Z.side===li&&Z.forceSinglePass===!1?(Z.side=Mn,Z.needsUpdate=!0,U.renderBufferDirect(ae,q,re,Z,R,be),Z.side=va,Z.needsUpdate=!0,U.renderBufferDirect(ae,q,re,Z,R,be),Z.side=li):U.renderBufferDirect(ae,q,re,Z,R,be),R.onAfterRender(U,q,ae,re,Z,be)}function Ea(R,q,ae){q.isScene!==!0&&(q=Xt);const re=Ve.get(R),Z=v.state.lights,be=v.state.shadowsArray,Ce=Z.state.version,Ue=Pe.getParameters(R,Z.state,be,q,ae),Ie=Pe.getProgramCacheKey(Ue);let et=re.programs;re.environment=R.isMeshStandardMaterial?q.environment:null,re.fog=q.fog,re.envMap=(R.isMeshStandardMaterial?te:b).get(R.envMap||re.environment),re.envMapRotation=re.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,et===void 0&&(R.addEventListener("dispose",at),et=new Map,re.programs=et);let je=et.get(Ie);if(je!==void 0){if(re.currentProgram===je&&re.lightsStateVersion===Ce)return Vi(R,Ue),je}else Ue.uniforms=Pe.getUniforms(R),R.onBeforeCompile(Ue,U),je=Pe.acquireProgram(Ue,Ie),et.set(Ie,je),re.uniforms=Ue.uniforms;const Xe=re.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xe.clippingPlanes=Ae.uniform),Vi(R,Ue),re.needsLights=sn(R),re.lightsStateVersion=Ce,re.needsLights&&(Xe.ambientLightColor.value=Z.state.ambient,Xe.lightProbe.value=Z.state.probe,Xe.directionalLights.value=Z.state.directional,Xe.directionalLightShadows.value=Z.state.directionalShadow,Xe.spotLights.value=Z.state.spot,Xe.spotLightShadows.value=Z.state.spotShadow,Xe.rectAreaLights.value=Z.state.rectArea,Xe.ltc_1.value=Z.state.rectAreaLTC1,Xe.ltc_2.value=Z.state.rectAreaLTC2,Xe.pointLights.value=Z.state.point,Xe.pointLightShadows.value=Z.state.pointShadow,Xe.hemisphereLights.value=Z.state.hemi,Xe.directionalShadowMap.value=Z.state.directionalShadowMap,Xe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Xe.spotShadowMap.value=Z.state.spotShadowMap,Xe.spotLightMatrix.value=Z.state.spotLightMatrix,Xe.spotLightMap.value=Z.state.spotLightMap,Xe.pointShadowMap.value=Z.state.pointShadowMap,Xe.pointShadowMatrix.value=Z.state.pointShadowMatrix),re.currentProgram=je,re.uniformsList=null,je}function Gi(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=tc.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Vi(R,q){const ae=Ve.get(R);ae.outputColorSpace=q.outputColorSpace,ae.batching=q.batching,ae.batchingColor=q.batchingColor,ae.instancing=q.instancing,ae.instancingColor=q.instancingColor,ae.instancingMorph=q.instancingMorph,ae.skinning=q.skinning,ae.morphTargets=q.morphTargets,ae.morphNormals=q.morphNormals,ae.morphColors=q.morphColors,ae.morphTargetsCount=q.morphTargetsCount,ae.numClippingPlanes=q.numClippingPlanes,ae.numIntersection=q.numClipIntersection,ae.vertexAlphas=q.vertexAlphas,ae.vertexTangents=q.vertexTangents,ae.toneMapping=q.toneMapping}function ur(R,q,ae,re,Z){q.isScene!==!0&&(q=Xt),L.resetTextureUnits();const be=q.fog,Ce=re.isMeshStandardMaterial?q.environment:null,Ue=j===null?U.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ar,Ie=(re.isMeshStandardMaterial?te:b).get(re.envMap||Ce),et=re.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,je=!!ae.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Xe=!!ae.morphAttributes.position,pt=!!ae.morphAttributes.normal,bt=!!ae.morphAttributes.color;let Zt=nr;re.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Zt=U.toneMapping);const xt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,St=xt!==void 0?xt.length:0,qe=Ve.get(re),$t=v.state.lights;if(me===!0&&(ye===!0||R!==w)){const _n=R===w&&re.id===D;Ae.setState(re,R,_n)}let Mt=!1;re.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==$t.state.version||qe.outputColorSpace!==Ue||Z.isBatchedMesh&&qe.batching===!1||!Z.isBatchedMesh&&qe.batching===!0||Z.isBatchedMesh&&qe.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&qe.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&qe.instancing===!1||!Z.isInstancedMesh&&qe.instancing===!0||Z.isSkinnedMesh&&qe.skinning===!1||!Z.isSkinnedMesh&&qe.skinning===!0||Z.isInstancedMesh&&qe.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&qe.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&qe.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&qe.instancingMorph===!1&&Z.morphTexture!==null||qe.envMap!==Ie||re.fog===!0&&qe.fog!==be||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Ae.numPlanes||qe.numIntersection!==Ae.numIntersection)||qe.vertexAlphas!==et||qe.vertexTangents!==je||qe.morphTargets!==Xe||qe.morphNormals!==pt||qe.morphColors!==bt||qe.toneMapping!==Zt||qe.morphTargetsCount!==St)&&(Mt=!0):(Mt=!0,qe.__version=re.version);let Cn=qe.currentProgram;Mt===!0&&(Cn=Ea(re,q,Z));let Ta=!1,jt=!1,Xi=!1;const Vt=Cn.getUniforms(),Un=qe.uniforms;if(We.useProgram(Cn.program)&&(Ta=!0,jt=!0,Xi=!0),re.id!==D&&(D=re.id,jt=!0),Ta||w!==R){We.buffers.depth.getReversed()?(Re.copy(R.projectionMatrix),OE(Re),PE(Re),Vt.setValue(F,"projectionMatrix",Re)):Vt.setValue(F,"projectionMatrix",R.projectionMatrix),Vt.setValue(F,"viewMatrix",R.matrixWorldInverse);const bn=Vt.map.cameraPosition;bn!==void 0&&bn.setValue(F,lt.setFromMatrixPosition(R.matrixWorld)),it.logarithmicDepthBuffer&&Vt.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Vt.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,jt=!0,Xi=!0)}if(Z.isSkinnedMesh){Vt.setOptional(F,Z,"bindMatrix"),Vt.setOptional(F,Z,"bindMatrixInverse");const _n=Z.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Vt.setValue(F,"boneTexture",_n.boneTexture,L))}Z.isBatchedMesh&&(Vt.setOptional(F,Z,"batchingTexture"),Vt.setValue(F,"batchingTexture",Z._matricesTexture,L),Vt.setOptional(F,Z,"batchingIdTexture"),Vt.setValue(F,"batchingIdTexture",Z._indirectTexture,L),Vt.setOptional(F,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Vt.setValue(F,"batchingColorTexture",Z._colorsTexture,L));const hn=ae.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&Qe.update(Z,ae,Cn),(jt||qe.receiveShadow!==Z.receiveShadow)&&(qe.receiveShadow=Z.receiveShadow,Vt.setValue(F,"receiveShadow",Z.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Un.envMap.value=Ie,Un.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&q.environment!==null&&(Un.envMapIntensity.value=q.environmentIntensity),jt&&(Vt.setValue(F,"toneMappingExposure",U.toneMappingExposure),qe.needsLights&&Ma(Un,Xi),be&&re.fog===!0&&we.refreshFogUniforms(Un,be),we.refreshMaterialUniforms(Un,re,Y,K,v.state.transmissionRenderTarget[R.id]),tc.upload(F,Gi(qe),Un,L)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(tc.upload(F,Gi(qe),Un,L),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Vt.setValue(F,"center",Z.center),Vt.setValue(F,"modelViewMatrix",Z.modelViewMatrix),Vt.setValue(F,"normalMatrix",Z.normalMatrix),Vt.setValue(F,"modelMatrix",Z.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const _n=re.uniformsGroups;for(let bn=0,Di=_n.length;bn<Di;bn++){const Wi=_n[bn];X.update(Wi,Cn),X.bind(Wi,Cn)}}return Cn}function Ma(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function sn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(R,q,ae){const re=Ve.get(R);re.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),Ve.get(R.texture).__webglTexture=q,Ve.get(R.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ae,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const ae=Ve.get(R);ae.__webglFramebuffer=q,ae.__useDefaultFramebuffer=q===void 0};const ml=F.createFramebuffer();this.setRenderTarget=function(R,q=0,ae=0){j=R,k=q,I=ae;let re=!0,Z=null,be=!1,Ce=!1;if(R){const Ie=Ve.get(R);if(Ie.__useDefaultFramebuffer!==void 0)We.bindFramebuffer(F.FRAMEBUFFER,null),re=!1;else if(Ie.__webglFramebuffer===void 0)L.setupRenderTarget(R);else if(Ie.__hasExternalTextures)L.rebindTextures(R,Ve.get(R.texture).__webglTexture,Ve.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Xe=R.depthTexture;if(Ie.__boundDepthTexture!==Xe){if(Xe!==null&&Ve.has(Xe)&&(R.width!==Xe.image.width||R.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(R)}}const et=R.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ce=!0);const je=Ve.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(je[q])?Z=je[q][ae]:Z=je[q],be=!0):R.samples>0&&L.useMultisampledRTT(R)===!1?Z=Ve.get(R).__webglMultisampledFramebuffer:Array.isArray(je)?Z=je[ae]:Z=je,V.copy(R.viewport),ue.copy(R.scissor),oe=R.scissorTest}else V.copy(ee).multiplyScalar(Y).floor(),ue.copy(Se).multiplyScalar(Y).floor(),oe=Ee;if(ae!==0&&(Z=ml),We.bindFramebuffer(F.FRAMEBUFFER,Z)&&re&&We.drawBuffers(R,Z),We.viewport(V),We.scissor(ue),We.setScissorTest(oe),be){const Ie=Ve.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ie.__webglTexture,ae)}else if(Ce){const Ie=Ve.get(R.texture),et=q;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ie.__webglTexture,ae,et)}else if(R!==null&&ae!==0){const Ie=Ve.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ie.__webglTexture,ae)}D=-1},this.readRenderTargetPixels=function(R,q,ae,re,Z,be,Ce){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ue=Ue[Ce]),Ue){We.bindFramebuffer(F.FRAMEBUFFER,Ue);try{const Ie=R.texture,et=Ie.format,je=Ie.type;if(!it.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-re&&ae>=0&&ae<=R.height-Z&&F.readPixels(q,ae,re,Z,nt.convert(et),nt.convert(je),be)}finally{const Ie=j!==null?Ve.get(j).__webglFramebuffer:null;We.bindFramebuffer(F.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(R,q,ae,re,Z,be,Ce){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=Ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ue=Ue[Ce]),Ue)if(q>=0&&q<=R.width-re&&ae>=0&&ae<=R.height-Z){We.bindFramebuffer(F.FRAMEBUFFER,Ue);const Ie=R.texture,et=Ie.format,je=Ie.type;if(!it.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Xe),F.bufferData(F.PIXEL_PACK_BUFFER,be.byteLength,F.STREAM_READ),F.readPixels(q,ae,re,Z,nt.convert(et),nt.convert(je),0);const pt=j!==null?Ve.get(j).__webglFramebuffer:null;We.bindFramebuffer(F.FRAMEBUFFER,pt);const bt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await NE(F,bt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Xe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,be),F.deleteBuffer(Xe),F.deleteSync(bt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,ae=0){const re=Math.pow(2,-ae),Z=Math.floor(R.image.width*re),be=Math.floor(R.image.height*re),Ce=q!==null?q.x:0,Ue=q!==null?q.y:0;L.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,ae,0,0,Ce,Ue,Z,be),We.unbindTexture()};const gl=F.createFramebuffer(),ki=F.createFramebuffer();this.copyTextureToTexture=function(R,q,ae=null,re=null,Z=0,be=null){be===null&&(Z!==0?(ec("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=Z,Z=0):be=0);let Ce,Ue,Ie,et,je,Xe,pt,bt,Zt;const xt=R.isCompressedTexture?R.mipmaps[be]:R.image;if(ae!==null)Ce=ae.max.x-ae.min.x,Ue=ae.max.y-ae.min.y,Ie=ae.isBox3?ae.max.z-ae.min.z:1,et=ae.min.x,je=ae.min.y,Xe=ae.isBox3?ae.min.z:0;else{const hn=Math.pow(2,-Z);Ce=Math.floor(xt.width*hn),Ue=Math.floor(xt.height*hn),R.isDataArrayTexture?Ie=xt.depth:R.isData3DTexture?Ie=Math.floor(xt.depth*hn):Ie=1,et=0,je=0,Xe=0}re!==null?(pt=re.x,bt=re.y,Zt=re.z):(pt=0,bt=0,Zt=0);const St=nt.convert(q.format),qe=nt.convert(q.type);let $t;q.isData3DTexture?(L.setTexture3D(q,0),$t=F.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(L.setTexture2DArray(q,0),$t=F.TEXTURE_2D_ARRAY):(L.setTexture2D(q,0),$t=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,q.unpackAlignment);const Mt=F.getParameter(F.UNPACK_ROW_LENGTH),Cn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ta=F.getParameter(F.UNPACK_SKIP_PIXELS),jt=F.getParameter(F.UNPACK_SKIP_ROWS),Xi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,xt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,et),F.pixelStorei(F.UNPACK_SKIP_ROWS,je),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Xe);const Vt=R.isDataArrayTexture||R.isData3DTexture,Un=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const hn=Ve.get(R),_n=Ve.get(q),bn=Ve.get(hn.__renderTarget),Di=Ve.get(_n.__renderTarget);We.bindFramebuffer(F.READ_FRAMEBUFFER,bn.__webglFramebuffer),We.bindFramebuffer(F.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let Wi=0;Wi<Ie;Wi++)Vt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ve.get(R).__webglTexture,Z,Xe+Wi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ve.get(q).__webglTexture,be,Zt+Wi)),F.blitFramebuffer(et,je,Ce,Ue,pt,bt,Ce,Ue,F.DEPTH_BUFFER_BIT,F.NEAREST);We.bindFramebuffer(F.READ_FRAMEBUFFER,null),We.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||Ve.has(R)){const hn=Ve.get(R),_n=Ve.get(q);We.bindFramebuffer(F.READ_FRAMEBUFFER,gl),We.bindFramebuffer(F.DRAW_FRAMEBUFFER,ki);for(let bn=0;bn<Ie;bn++)Vt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,hn.__webglTexture,Z,Xe+bn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,hn.__webglTexture,Z),Un?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,_n.__webglTexture,be,Zt+bn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,_n.__webglTexture,be),Z!==0?F.blitFramebuffer(et,je,Ce,Ue,pt,bt,Ce,Ue,F.COLOR_BUFFER_BIT,F.NEAREST):Un?F.copyTexSubImage3D($t,be,pt,bt,Zt+bn,et,je,Ce,Ue):F.copyTexSubImage2D($t,be,pt,bt,et,je,Ce,Ue);We.bindFramebuffer(F.READ_FRAMEBUFFER,null),We.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Un?R.isDataTexture||R.isData3DTexture?F.texSubImage3D($t,be,pt,bt,Zt,Ce,Ue,Ie,St,qe,xt.data):q.isCompressedArrayTexture?F.compressedTexSubImage3D($t,be,pt,bt,Zt,Ce,Ue,Ie,St,xt.data):F.texSubImage3D($t,be,pt,bt,Zt,Ce,Ue,Ie,St,qe,xt):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,be,pt,bt,Ce,Ue,St,qe,xt.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,be,pt,bt,xt.width,xt.height,St,xt.data):F.texSubImage2D(F.TEXTURE_2D,be,pt,bt,Ce,Ue,St,qe,xt);F.pixelStorei(F.UNPACK_ROW_LENGTH,Mt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Cn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ta),F.pixelStorei(F.UNPACK_SKIP_ROWS,jt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Xi),be===0&&q.generateMipmaps&&F.generateMipmap($t),We.unbindTexture()},this.copyTextureToTexture3D=function(R,q,ae=null,re=null,Z=0){return ec('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,q,ae,re,Z)},this.initRenderTarget=function(R){Ve.get(R).__webglFramebuffer===void 0&&L.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),We.unbindTexture()},this.resetState=function(){k=0,I=0,j=null,We.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return da}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Rt._getUnpackColorSpace()}}const jd="https://github.com/jayhcrawford",W_="https://www.instagram.com/jaycraw1_",j_="https://www.tiktok.com/@jay.harrison.craw",q_="https://www.linkedin.com/in/jay-crawford-prod/",ZA=a=>{const e=new Date().getFullYear();return a.path=="/"?B.jsx("footer",{style:{fontFamily:Fs},className:""}):B.jsxs("footer",{style:{fontFamily:Fs},className:" text-white mx-auto w-full p-4 py-6",children:[B.jsx("style",{children:`
            .footer_links {
              margin-bottom: 2em;
            }
            .footer_links li {
              margin-bottom: .2em;
            }
            .footer_linkes_transp {
            opacity: ${Yu}%;
            }
            
            .footer_links li:hover {
            text-decoration: underline;
            opacity: 100%;
            }`}),B.jsxs("div",{id:"footer_content",children:[B.jsxs("div",{className:"md:flex md:justify-between",children:[B.jsx("div",{className:"",children:B.jsx("ul",{className:"footer_links text-md text-left",children:B.jsx("li",{children:B.jsxs("a",{href:"mailto:jayhcrawford@gmail.com",children:[B.jsx("p",{className:"font-bold",children:ic}),B.jsxs("span",{className:"footer_linkes_transp font-normal",style:{fontFamily:tr},children:[B.jsx("p",{children:"Los Angeles, CA"}),B.jsx("p",{children:"jayhcrawford@gmail.com"})]})]})})})}),B.jsxs("div",{className:"grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 text-left",children:[B.jsxs("div",{children:[B.jsx("h2",{className:"text-sm font-bold uppercase",children:"Social"}),B.jsxs("ul",{id:"footer_social",style:{fontFamily:tr},className:"footer_links footer_linkes_transp font-medium mt-3 mb-10",children:[B.jsx("style",{children:`
                      #footer_social li {
                        
                      }
                    `}),B.jsx("li",{children:B.jsx("a",{href:q_,target:"new",className:"hover:underline",children:"LinkedIn"})}),B.jsx("li",{className:"",children:B.jsx("a",{href:W_,target:"new",className:"hover:underline",children:"Instagram"})}),B.jsx("li",{children:B.jsx("a",{href:j_,target:"new",className:"hover:underline",children:"TikTok"})}),B.jsx("li",{children:B.jsx("a",{href:jd,target:"new",className:"hover:underline",children:"Github"})})]})]}),B.jsx("div",{})]})]}),B.jsxs("div",{className:"sm:flex sm:items-center sm:justify-between",children:[B.jsxs("span",{style:{fontFamily:tr},className:`font-normal text-sm text-white opacity-${Yu} sm:text-center`,children:[e," - ",ic]}),B.jsx("div",{className:"flex mt-4 sm:justify-center sm:mt-0",children:B.jsxs("a",{href:jd,target:"new",className:`opacity-${Yu} hover:opacity-100 hover:white ms-5`,children:[B.jsx("svg",{className:"w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:B.jsx("path",{fillRule:"evenodd",d:"M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z",clipRule:"evenodd"})}),B.jsx("span",{className:"sr-only",children:"GitHub account"})]})})]})]})]})},KA=()=>B.jsx("img",{className:"w-30 ",src:"./LinkedIn_Logo.svg"}),QA=a=>B.jsx("div",{className:"social_brick_icon_container",style:{width:"150px"},children:B.jsxs("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 40",className:"social-svg",children:[B.jsx("defs",{children:B.jsx("style",{children:`
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
                    `})}),a.name=="Tiktok"&&B.jsx("path",{className:"social_icon_fg",d:"M34.41,10.31c-3.78-.81-6.59-3.98-6.95-7.82v-.81h-6.35v25.2c-.01,2.95-2.41,5.33-5.36,5.32-1.66,0-3.22-.78-4.23-2.11h0s0,0,0,0c-1.78-2.35-1.33-5.69,1.02-7.48,1.38-1.05,3.19-1.36,4.85-.84v-6.45c-6.38-.88-12.27,3.58-13.15,9.96-.49,3.57.69,7.17,3.21,9.75,4.5,4.61,11.89,4.69,16.5.19,2.25-2.2,3.51-5.2,3.51-8.34v-12.88c2.57,1.83,5.64,2.82,8.8,2.81v-6.31c-.62,0-1.24-.06-1.85-.19h0Z"}),a.name=="Instagram"&&B.jsx("path",{className:"social_icon_fg",d:"M12.23,1.12C6.1,1.12,1.11,6.1,1.11,12.23v15.39c0,6.13,4.99,11.12,11.12,11.12h15.39c6.13,0,11.12-4.99,11.12-11.12v-15.39c0-6.13-4.99-11.12-11.12-11.12h-15.39ZM12.23,2.83h15.39c5.2,0,9.41,4.2,9.41,9.41v15.39c0,5.2-4.2,9.41-9.41,9.41h-15.39c-5.2,0-9.41-4.2-9.41-9.41v-15.39C2.82,7.03,7.02,2.83,12.23,2.83ZM30.18,7.96c-.94,0-1.71.77-1.71,1.71s.77,1.71,1.71,1.71,1.71-.77,1.71-1.71-.77-1.71-1.71-1.71ZM19.92,10.52c-5.19,0-9.41,4.22-9.41,9.41s4.22,9.41,9.41,9.41,9.41-4.22,9.41-9.41-4.22-9.41-9.41-9.41ZM19.92,12.23c4.26,0,7.7,3.44,7.7,7.7s-3.44,7.7-7.7,7.7-7.7-3.44-7.7-7.7,3.44-7.7,7.7-7.7Z"}),a.name=="Discord"&&B.jsx("path",{className:"social_icon_fg",d:"M33.35,7.61c-2.49-1.16-5.15-2.01-7.93-2.49-.34.62-.74,1.45-1.02,2.11-2.96-.44-5.89-.44-8.79,0-.28-.66-.68-1.49-1.03-2.11-2.79.48-5.45,1.33-7.94,2.5C1.62,15.2.26,22.6.94,29.89c3.33,2.49,6.56,4,9.73,4.99.78-1.08,1.48-2.22,2.08-3.43-1.15-.44-2.24-.97-3.28-1.6.28-.2.54-.42.8-.64,6.33,2.96,13.2,2.96,19.45,0,.26.22.53.43.8.64-1.04.63-2.14,1.16-3.29,1.6.6,1.2,1.3,2.35,2.08,3.43,3.18-.99,6.41-2.5,9.74-4.99.8-8.45-1.36-15.79-5.72-22.28h0ZM13.61,25.41c-1.9,0-3.46-1.77-3.46-3.93s1.52-3.94,3.46-3.94,3.49,1.77,3.46,3.94c0,2.16-1.52,3.93-3.46,3.93ZM26.39,25.41c-1.9,0-3.46-1.77-3.46-3.93s1.52-3.94,3.46-3.94,3.49,1.77,3.46,3.94c0,2.16-1.52,3.93-3.46,3.93Z"}),a.name=="Github"&&B.jsx("path",{className:"social_icon_fg",d:"M19.9,1.55C9.52,1.55,1.12,10.01,1.12,20.47c0,8.36,5.38,15.44,12.84,17.95.93.19,1.27-.41,1.27-.91,0-.44-.03-1.94-.03-3.51-5.22,1.13-6.31-2.26-6.31-2.26-.84-2.19-2.08-2.76-2.08-2.76-1.71-1.16.12-1.16.12-1.16,1.9.13,2.89,1.94,2.89,1.94,1.68,2.88,4.38,2.07,5.47,1.57.16-1.22.65-2.07,1.18-2.54-4.17-.44-8.55-2.07-8.55-9.33,0-2.07.75-3.76,1.93-5.07-.19-.47-.84-2.41.19-5.01,0,0,1.59-.5,5.16,1.94,1.53-.41,3.11-.62,4.7-.63,1.59,0,3.2.22,4.69.63,3.58-2.44,5.16-1.94,5.16-1.94,1.03,2.6.37,4.54.19,5.01,1.21,1.32,1.93,3.01,1.93,5.07,0,7.27-4.38,8.86-8.58,9.33.68.6,1.27,1.72,1.27,3.51,0,2.54-.03,4.57-.03,5.2,0,.5.34,1.1,1.27.91,7.46-2.51,12.84-9.59,12.84-17.95.03-10.46-8.4-18.92-18.75-18.92Z"})]})}),JA=()=>{const a=[{name:"Instagram",url:W_},{name:"Tiktok",url:j_},{name:"Github",url:jd}];return B.jsx("div",{className:"socialbrick-outer",children:B.jsxs("div",{className:"socialbrick-inner",children:[B.jsx("style",{children:`
                        .glow-button:hover svg {
                            filter: drop-shadow(0 0 10px rgba(255, 255, 255, .5)) drop-shadow(0 0 10px rgba(255, 255, 255, .5));
                        }
                        .glow-button:active svg {
                            filter: none;
                        }
                    `}),a.map((e,i)=>B.jsx("a",{"aria-label":`Our ${e.name}`,href:e.url,target:"_blank",className:"glow-button socialbrick-link",children:B.jsx(QA,{name:e.name})},i))]})})};function $A(a){return a?a.toLowerCase().split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "):""}const Os=()=>B.jsx("span",{className:`${el} ml-5 mr-5`,children:"|"}),$a=a=>B.jsx("li",{style:{transition:"opacity .1s .1s"},className:`${el} hover:underline hover:opacity-100`,children:B.jsx(Gr,{to:`${a.name}`,children:$A(a.name)})}),eR=a=>a.path=="/"?B.jsxs(B.Fragment,{children:[B.jsx("nav",{className:"z-10 w-ful",children:B.jsxs("ul",{style:{fontFamily:Qo},className:"list-none p-0 pb-4 m-0 flex justify-center text-xl sm:text-3xl md:text-5xl",children:[B.jsx($a,{name:"about"}),B.jsx(Os,{}),B.jsx($a,{name:"art"}),B.jsx(Os,{}),B.jsx($a,{name:"projects"}),B.jsx(Os,{}),B.jsx($a,{name:"contact"})]})}),B.jsxs("header",{style:{marginBottom:"70px"},children:[B.jsx("h1",{className:"text-center text-white",style:{fontFamily:Fs,fontSize:a.width<500?"3rem":"6rem",fontWeight:"bold"},children:ic}),B.jsx("p",{className:`${el} text-5xl text-center`,style:{fontFamily:Qo},children:"Interdisciplinary Creative & Programmer"}),B.jsx("p",{style:{fontFamily:tr},className:`text-center p-4 ${el} text-3xl`,children:"Los Angeles, CA"}),B.jsx(JA,{})]})]}):B.jsxs(B.Fragment,{children:[B.jsx("nav",{className:"z-10 w-full mb-5",children:B.jsxs("ul",{style:{fontFamily:Qo},className:"list-none p-0 m-0 flex sm:text-2xl md:text-5xl",children:[B.jsx($a,{name:"about"}),B.jsx(Os,{}),B.jsx($a,{name:"art"}),B.jsx(Os,{}),B.jsx($a,{name:"projects"}),B.jsx(Os,{}),B.jsx($a,{name:"contact"})]})}),B.jsxs("header",{style:{marginBottom:"70px"},children:[B.jsx(Gr,{to:"/",children:B.jsx("h1",{className:"text-white",style:{fontFamily:Fs,fontSize:a.width<500?"1rem":"2rem",fontWeight:"bold"},children:ic})}),B.jsx("p",{className:`${el} text-3xl text-left`,style:{fontFamily:Qo},children:"Interdisciplinary Creative & Programmer"})]})]}),tR=a=>{let e="";return B.jsxs(B.Fragment,{children:[B.jsx("style",{children:`
        #location-bar {
        }

        .location-bar-bttn {
          font-family: ${Qo};
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
    
    `}),B.jsx("div",{id:"location-bar",children:a.split().map((i,s)=>(e+="/"+i,B.jsxs("span",{children:[B.jsx(Gr,{to:e,children:B.jsx("button",{className:"location-bar-bttn",children:i})}),s<a.split().length-1&&B.jsx("span",{className:"location-bar-arrow",children:">"})]},`${s}-location`)))})]})},nR=()=>B.jsxs("svg",{id:"Layer_6","data-name":"Layer 6",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 1050 990",children:[B.jsx("defs",{children:B.jsx("style",{children:`
      .cls-1 {
        fill: #0e1a34;
      }

      .cls-2 {
        fill: #0b0f17;
      }

      .cls-3 {
        fill: #1e2b5a;
      }
      `})}),B.jsx("image",{width:"149",height:"149",transform:"translate(-50, -50) scale(9.2)",xlinkHref:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAACVCAYAAABRorhPAAAACXBIWXMAAAGJAAABiQGeLhE1AAABlklEQVR4nO3SoRGDAAAEQcBGIOm/PCQCHQoI8iYEsitfvbhhAAAAfs54Nr7m5f3tI9zTvq0fDU1XHOHZREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5ERFTlTkREVOVORERU5U5EQFAADwDw4ePAUWKoYQ6wAAAABJRU5ErkJggg=="}),B.jsx("polygon",{className:"cls-3",transform:"translate(-20,0)",points:"1103.99 82.8 1103.99 967.01 1089.6 968.46 1089.61 960.77 1081.92 960.78 1081.93 954.05 1075.2 954.07 1075.21 946.38 1060.81 946.38 1060.82 939.66 1054.03 939.25 1053.14 931.98 1046.41 932 1046.42 925.27 1032.02 925.27 1032.03 917.59 1024.34 917.6 1024.35 910.87 1010.85 910.46 1009.95 903.2 995.56 903.2 995.56 896.48 982.06 896.07 981.17 888.81 974.44 888.82 974.45 882.09 960.05 882.09 960.05 874.42 945.66 874.42 945.66 867.7 925.03 867.7 923.59 860.02 909.19 860.02 909.19 853.31 888.08 853.31 888.08 845.63 873.69 845.63 873.69 838.91 844.9 838.91 844.9 831.24 816.11 831.24 816.11 824.52 766.69 824.52 765.25 816.85 707.68 816.85 707.68 824.52 664.49 824.52 664.49 831.24 628.99 831.24 627.55 838.91 600.2 838.91 600.2 845.63 571.41 845.63 569.97 853.31 542.62 853.31 542.62 860.02 513.84 860.02 512.4 867.7 485.05 867.7 485.05 874.42 456.26 874.42 454.82 882.09 427.47 882.09 427.47 888.81 405.4 888.81 405.4 896.49 376.61 896.49 376.61 903.2 347.82 903.2 347.82 910.88 326.71 910.88 326.71 917.6 297.92 917.6 296.49 925.27 269.14 925.27 269.14 931.99 247.07 931.99 247.07 939.67 218.28 939.67 218.28 946.38 197.17 946.38 195.73 954.06 175.09 954.06 175.09 960.78 146.31 960.78 146.31 968.45 125.2 968.45 125.2 975.17 96.41 975.17 94.97 982.85 74.34 982.85 74.34 989.56 53.22 989.56 51.79 997.24 31.15 997.24 31.15 1003.96 16.76 1003.96 16.76 788.06 10.04 788.06 10.04 148.05 37.39 148.05 38.83 140.37 67.62 140.37 67.62 133.65 103.12 133.65 103.12 125.98 131.91 125.98 131.91 119.26 175.09 119.26 175.09 111.58 218.28 111.58 218.28 104.87 384.29 104.87 384.29 111.58 413.08 111.58 413.08 119.26 427.47 119.26 427.47 125.98 448.58 125.98 449.48 133.23 462.98 133.65 462.98 140.37 477.37 140.37 478.27 147.63 485.05 148.04 485.05 154.76 499.44 154.76 499.44 162.44 513.84 162.44 513.83 169.16 520.56 169.15 521.45 176.41 534.95 176.83 534.94 183.55 542.63 183.54 542.62 191.23 557.02 191.23 557.01 197.95 563.74 197.94 564.64 205.2 578.14 205.61 578.13 212.34 592.52 212.34 593.42 219.59 606.92 220.01 606.92 226.73 628.99 226.73 628.99 234.4 713.91 234.4 715.35 226.73 744.14 226.73 744.14 220.01 771.49 220.01 772.93 212.34 794.04 212.34 794.04 205.62 814.67 205.62 816.11 197.94 837.22 197.94 837.22 191.23 857.86 191.23 859.3 183.55 873.69 183.55 873.69 176.83 894.8 176.83 894.8 169.16 909.19 169.16 909.19 162.44 929.83 162.44 931.27 154.76 945.66 154.76 945.65 148.04 959.15 147.63 960.05 140.37 981.17 140.37 981.17 133.65 995.56 133.65 995.56 125.98 1009.95 125.98 1009.95 119.26 1024.35 119.26 1024.35 111.58 1038.74 111.58 1038.74 104.87 1053.14 104.87 1053.14 97.19 1067.53 97.19 1067.53 90.47 1081.92 90.47 1081.92 82.8 1103.99 82.8"}),B.jsx("polygon",{className:"cls-1",transform:"translate(-20,0)",points:"472.49 231.55 472.49 238.74 508.47 238.74 508.47 245.94 537.26 245.94 537.26 253.13 558.85 253.13 558.85 260.33 580.44 260.33 580.44 267.52 594.84 267.52 594.84 274.72 609.23 274.72 609.23 281.92 623.63 281.92 623.63 289.11 645.22 289.11 645.22 296.31 659.61 296.31 659.61 303.5 681.2 303.5 681.2 310.7 695.6 310.7 695.6 317.89 724.39 317.89 724.39 325.09 767.57 325.09 767.57 332.28 795.64 332.28 796.36 325.09 846.02 325.09 846.74 317.89 882 317.89 882.72 310.7 910.79 310.7 911.51 303.5 939.58 303.5 940.3 296.31 968.37 296.31 969.08 289.11 997.15 289.11 997.87 281.92 1018.74 281.92 1019.46 274.72 1047.53 274.72 1048.25 267.52 1069.12 267.52 1069.84 260.33 1090.71 260.33 1091.43 253.13 1105.83 253.13 1105.83 799.26 1105.11 799.98 1084.24 799.98 1084.24 792.79 1048.25 792.79 1048.25 785.59 997.87 785.59 997.87 778.4 933.1 778.4 933.1 771.2 789.16 771.2 788.44 778.4 738.78 778.4 738.06 785.59 695.6 785.59 694.88 792.79 645.22 792.79 644.5 799.98 602.04 799.98 601.32 807.18 558.85 807.18 558.13 814.37 515.67 814.37 514.95 821.57 472.49 821.57 471.77 828.77 429.31 828.77 428.59 835.96 393.32 835.96 392.6 843.16 350.14 843.16 349.42 850.35 306.96 850.35 306.24 857.55 270.97 857.55 270.25 864.74 227.79 864.74 227.07 871.94 191.8 871.94 191.08 879.13 148.62 879.13 147.9 886.33 112.64 886.33 111.92 893.52 76.65 893.52 75.93 900.72 33.47 900.72 32.75 907.91 11.88 907.91 11.88 274.72 18.87 274.27 19.08 267.52 61.54 267.52 62.26 260.33 104.72 260.33 105.44 253.13 147.9 253.13 148.62 245.94 198.28 245.94 199 238.74 255.86 238.74 256.58 231.55 472.49 231.55"}),B.jsx("polygon",{className:"cls-2",transform:"translate(-20,0)",points:"1108.35 316.15 1108.35 553.56 1101.15 553.56 1101.15 769.38 1086.76 769.38 1086.76 762.19 1050.77 762.19 1050.77 754.99 1021.98 754.99 1021.98 747.8 1000.39 747.8 1000.39 740.6 978.8 740.6 978.8 733.41 964.41 733.41 964.41 726.22 942.82 726.22 942.82 719.02 928.42 719.02 928.42 711.83 914.03 711.83 914.03 704.63 899.63 704.63 899.63 697.44 878.04 697.44 878.04 690.25 863.65 690.25 863.65 683.05 849.25 683.05 849.25 675.86 834.86 675.86 834.86 668.66 813.27 668.66 813.27 661.47 798.88 661.47 798.88 654.27 784.48 654.27 784.48 647.08 762.89 647.08 762.89 639.89 748.5 639.89 748.5 632.69 726.9 632.69 726.9 625.5 712.51 625.5 712.51 618.3 690.92 618.3 690.92 611.11 669.33 611.11 669.33 603.92 640.54 603.92 640.54 596.72 611.75 596.72 611.75 589.53 582.96 589.53 582.96 582.33 554.17 582.33 554.17 575.14 510.99 575.14 510.99 567.95 446.22 567.95 446.22 560.75 352.66 560.75 352.66 567.95 323.87 567.95 323.87 575.14 309.47 575.14 309.47 582.33 295.08 582.33 295.08 589.53 280.69 589.53 280.69 596.72 266.29 596.72 266.29 603.92 251.9 603.92 251.9 611.11 244.7 611.11 244.7 618.3 230.31 618.3 230.31 625.5 223.11 625.5 223.11 632.69 208.72 632.69 208.72 639.89 201.52 639.89 201.52 647.08 194.32 647.08 194.32 654.27 179.93 654.27 179.93 661.47 172.73 661.47 172.73 668.66 165.53 668.66 165.53 675.86 158.34 675.86 158.34 683.05 151.14 683.05 151.14 690.25 136.74 690.25 136.74 697.44 129.55 697.44 129.55 704.63 122.35 704.63 122.35 711.83 115.15 711.83 115.15 719.02 107.96 719.02 107.96 726.22 100.76 726.22 100.76 733.41 93.56 733.41 93.56 740.6 86.36 740.6 86.36 747.8 79.17 747.8 79.17 754.99 71.97 754.99 71.97 762.19 64.77 762.19 64.77 769.38 57.58 769.38 57.58 776.57 50.38 776.57 50.38 783.77 43.18 783.77 43.18 798.16 35.99 798.16 35.99 805.35 28.79 805.35 28.79 812.54 21.59 812.54 21.59 819.74 14.39 819.74 14.39 826.93 0 826.93 0 819.74 7.2 819.74 7.2 366.51 35.99 366.51 35.99 373.71 50.38 373.71 50.38 380.9 71.97 380.9 71.97 388.09 93.56 388.09 93.56 395.29 115.15 395.29 115.15 402.48 136.74 402.48 136.74 409.68 158.34 409.68 158.34 416.87 179.93 416.87 179.93 424.06 208.72 424.06 208.72 431.26 237.5 431.26 237.5 438.45 266.29 438.45 266.29 445.65 302.28 445.65 302.28 452.84 352.66 452.84 352.66 460.03 532.58 460.03 532.58 452.84 590.16 452.84 590.16 445.65 633.34 445.65 633.34 438.45 662.13 438.45 662.13 431.26 690.92 431.26 690.92 424.06 719.71 424.06 719.71 416.87 741.3 416.87 741.3 409.68 762.89 409.68 762.89 402.48 784.48 402.48 784.48 395.29 806.07 395.29 806.07 388.09 827.66 388.09 827.66 380.9 842.06 380.9 842.06 373.71 863.65 373.71 863.65 366.51 885.24 366.51 885.24 359.32 899.63 359.32 899.63 352.12 921.23 352.12 921.23 344.93 942.82 344.93 942.82 337.74 971.61 337.74 971.61 330.54 1000.39 330.54 1000.39 323.35 1043.58 323.35 1043.58 316.15 1108.35 316.15"})]}),iR=a=>{const[e,i]=he.useState(!1);return B.jsxs(B.Fragment,{children:[B.jsx("style",{children:`
      hr {
      color: white;
      border-width: 2px;
      opacity: ${Yu}%

      }`}),B.jsx(Gr,{onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),to:a.url?a.url:"",children:B.jsx("div",{className:`${a.url==""?"cursor-not-allowed":"cursor-pointer"} text-white m-6 justify-center ${a.width<750?"flex flex-col":"flex"}`,children:B.jsxs("div",{className:` ${a.width<750?"flex flex-col items-center":"flex w-[70%]"}`,children:[B.jsx("div",{className:"p-1 m-1",children:B.jsx("div",{className:"relative",children:B.jsxs("div",{className:" h-full w-full relative z-100",children:[B.jsx("div",{className:`${a.url==""&&e?"absolute":"hidden"} w-full text-white font-black absolute bg-red-600 top-[120px] p-4 text-center`,children:"Under Construction"}),B.jsx(aR,{img:a.img})]})})}),B.jsxs("div",{className:`ml-10 ${a.width<750?"mt-8 w-full pr-20":"flex flex-col justify-center mb-10"}`,children:[B.jsx("h4",{style:{fontFamily:Fs},className:"text-2xl",children:a.title}),B.jsx("p",{style:{fontFamily:tr},children:a.about_txt})]})]})})}),B.jsx("hr",{})]})},aR=a=>B.jsxs(B.Fragment,{children:[B.jsx("div",{className:"h-30 w-30 absolute",children:B.jsx("img",{src:"./under_construction.svg"})}),B.jsx("div",{style:{boxShadow:"5px 5px 5px rgba(0, 0, 0, 1)"},className:"w-80 h-60",children:B.jsx("img",{className:"rounded-lg w-80 h-60",style:{objectFit:"cover"},src:a.img})})]}),rR=a=>B.jsxs("div",{style:{fontFamily:tr},children:[B.jsx("hr",{}),a.blog_array.map((e,i)=>B.jsx(iR,{url:e.url?e.url:"",title:e.title,about_txt:e.about_txt,img:e.img,width:a.width},i))]}),sR=a=>B.jsx(rR,{width:a.width,blog_array:a.blog_array}),oR=[{title:"My Place",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/3d-project-icons/orthographic-icon.jpg",about_txt:"Autodesk Maya and Arnold project."},{title:"Door Project",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/3d-project-icons/3d-door-project-icon.jpg",about_txt:"Based on a drawing, built in Blender to emulate the drawing."},{title:"3D Me :-)",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/3d-project-icons/3d-jay-icon.jpg",about_txt:"Fully rigged, simple 3D character modeled after me. This helped me to better understand topology, weight-painting, and rigging."}],lR=[{category:"3D Projects",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/3d-project-icons/orthographic-icon.jpg",url:"3d"},{category:"UrFriends - SASS",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/blog-images/UR_Friends.webp"},{category:"The Book",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/blog-images/TheBook.webp"},{category:"The RIP Sheet",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/blog-images/RIP.webp"},{category:"Widow Bags",img:"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/product-design-icons/widow-icon.jpg"}];/**
 * postprocessing v6.37.4 build Sat Jun 07 2025
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2025 Raoul van Rüschen
 * @license Zlib
 */var ed=1/1e3,uR=1e3,cR=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(a){typeof document<"u"&&document.hidden!==void 0&&(a?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=a)}get delta(){return this._delta*ed}get fixedDelta(){return this._fixedDelta*ed}set fixedDelta(a){this._fixedDelta=a*uR}get elapsed(){return this._elapsed*ed}update(a){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(a!==void 0?a:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(a){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},fR=(()=>{const a=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),i=new sr;return i.setAttribute("position",new xi(a,3)),i.setAttribute("uv",new xi(e,2)),i})(),Ui=class qd{static get fullscreenGeometry(){return fR}constructor(e="Pass",i=new oc,s=new lp){this.name=e,this.renderer=null,this.scene=i,this.camera=s,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const i=this.fullscreenMaterial;i!==null&&(i.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let i=this.screen;i!==null?i.material=e:(i=new _i(qd.fullscreenGeometry,e),i.frustumCulled=!1,this.scene===null&&(this.scene=new oc),this.scene.add(i),this.screen=i)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,i=ul){}render(e,i,s,l,u){throw new Error("Render method not implemented!")}setSize(e,i){}initialize(e,i,s){}dispose(){for(const e of Object.keys(this)){const i=this[e];(i instanceof Hn||i instanceof qs||i instanceof Pn||i instanceof qd)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},hR=class extends Ui{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(a,e,i,s,l){const u=a.state.buffers.stencil;u.setLocked(!1),u.setTest(!1)}},dR=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <colorspace_fragment>
#include <dithering_fragment>
}`,Y_="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",Z_=class extends Gn{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new Lt(null),opacity:new Lt(1)},blending:Qn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:dR,vertexShader:Y_})}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setInputBuffer(a){this.uniforms.inputBuffer.value=a}getOpacity(a){return this.uniforms.opacity.value}setOpacity(a){this.uniforms.opacity.value=a}},pR=class extends Ui{constructor(a,e=!0){super("CopyPass"),this.fullscreenMaterial=new Z_,this.needsSwap=!1,this.renderTarget=a,a===void 0&&(this.renderTarget=new Hn(1,1,{minFilter:Kn,magFilter:Kn,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(a){this.autoResize=a}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(a){this.autoResize=a}render(a,e,i,s,l){this.fullscreenMaterial.inputBuffer=e.texture,a.setRenderTarget(this.renderToScreen?null:this.renderTarget),a.render(this.scene,this.camera)}setSize(a,e){this.autoResize&&this.renderTarget.setSize(a,e)}initialize(a,e,i){i!==void 0&&(this.renderTarget.texture.type=i,i!==Bn?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":a!==null&&a.outputColorSpace===Ht&&(this.renderTarget.texture.colorSpace=Ht))}},Q0=new Nt,K_=class extends Ui{constructor(a=!0,e=!0,i=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=a,this.depth=e,this.stencil=i,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(a,e,i){this.color=a,this.depth=e,this.stencil=i}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(a){this.overrideClearColor=a}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(a){this.overrideClearAlpha=a}render(a,e,i,s,l){const u=this.overrideClearColor,f=this.overrideClearAlpha,h=a.getClearAlpha(),p=u!==null,m=f>=0;p?(a.getClearColor(Q0),a.setClearColor(u,m?f:h)):m&&a.setClearAlpha(f),a.setRenderTarget(this.renderToScreen?null:e),a.clear(this.color,this.depth,this.stencil),p?a.setClearColor(Q0,h):m&&a.setClearAlpha(h)}},mR=class extends Ui{constructor(a,e){super("MaskPass",a,e),this.needsSwap=!1,this.clearPass=new K_(!1,!1,!0),this.inverse=!1}set mainScene(a){this.scene=a}set mainCamera(a){this.camera=a}get inverted(){return this.inverse}set inverted(a){this.inverse=a}get clear(){return this.clearPass.enabled}set clear(a){this.clearPass.enabled=a}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(a){this.inverted=a}render(a,e,i,s,l){const u=a.getContext(),f=a.state.buffers,h=this.scene,p=this.camera,m=this.clearPass,g=this.inverted?0:1,_=1-g;f.color.setMask(!1),f.depth.setMask(!1),f.color.setLocked(!0),f.depth.setLocked(!0),f.stencil.setTest(!0),f.stencil.setOp(u.REPLACE,u.REPLACE,u.REPLACE),f.stencil.setFunc(u.ALWAYS,g,4294967295),f.stencil.setClear(_),f.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?m.render(a,null):(m.render(a,e),m.render(a,i))),this.renderToScreen?(a.setRenderTarget(null),a.render(h,p)):(a.setRenderTarget(e),a.render(h,p),a.setRenderTarget(i),a.render(h,p)),f.color.setLocked(!1),f.depth.setLocked(!1),f.stencil.setLocked(!1),f.stencil.setFunc(u.EQUAL,1,4294967295),f.stencil.setOp(u.KEEP,u.KEEP,u.KEEP),f.stencil.setLocked(!0)}},gR=class{constructor(a=null,{depthBuffer:e=!0,stencilBuffer:i=!1,multisampling:s=0,frameBufferType:l}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,i,l,s),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new pR,this.depthTexture=null,this.passes=[],this.timer=new cR,this.autoRenderToScreen=!0,this.setRenderer(a)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(a){const e=this.inputBuffer,i=this.multisampling;i>0&&a>0?(this.inputBuffer.samples=a,this.outputBuffer.samples=a,this.inputBuffer.dispose(),this.outputBuffer.dispose()):i!==a&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,a),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(a){if(this.renderer=a,a!==null){const e=a.getSize(new ot),i=a.getContext().getContextAttributes().alpha,s=this.inputBuffer.texture.type;s===Bn&&a.outputColorSpace===Ht&&(this.inputBuffer.texture.colorSpace=Ht,this.outputBuffer.texture.colorSpace=Ht,this.inputBuffer.dispose(),this.outputBuffer.dispose()),a.autoClear=!1,this.setSize(e.width,e.height);for(const l of this.passes)l.initialize(a,i,s)}}replaceRenderer(a,e=!0){const i=this.renderer,s=i.domElement.parentNode;return this.setRenderer(a),e&&s!==null&&(s.removeChild(i.domElement),s.appendChild(a.domElement)),i}createDepthTexture(){const a=this.depthTexture=new up;return this.inputBuffer.depthTexture=a,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(a.format=Xs,a.type=ks):a.type=ir,a}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const a of this.passes)a.setDepthTexture(null)}}createBuffer(a,e,i,s){const l=this.renderer,u=l===null?new ot:l.getDrawingBufferSize(new ot),f={minFilter:Kn,magFilter:Kn,stencilBuffer:e,depthBuffer:a,type:i},h=new Hn(u.width,u.height,f);return s>0&&(h.ignoreDepthForMultisampleCopy=!1,h.samples=s),i===Bn&&l!==null&&l.outputColorSpace===Ht&&(h.texture.colorSpace=Ht),h.texture.name="EffectComposer.Buffer",h.texture.generateMipmaps=!1,h}setMainScene(a){for(const e of this.passes)e.mainScene=a}setMainCamera(a){for(const e of this.passes)e.mainCamera=a}addPass(a,e){const i=this.passes,s=this.renderer,l=s.getDrawingBufferSize(new ot),u=s.getContext().getContextAttributes().alpha,f=this.inputBuffer.texture.type;if(a.setRenderer(s),a.setSize(l.width,l.height),a.initialize(s,u,f),this.autoRenderToScreen&&(i.length>0&&(i[i.length-1].renderToScreen=!1),a.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?i.splice(e,0,a):i.push(a),this.autoRenderToScreen&&(i[i.length-1].renderToScreen=!0),a.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const h=this.createDepthTexture();for(a of i)a.setDepthTexture(h)}else a.setDepthTexture(this.depthTexture)}removePass(a){const e=this.passes,i=e.indexOf(a);if(i!==-1&&e.splice(i,1).length>0){if(this.depthTexture!==null){const u=(h,p)=>h||p.needsDepthTexture;e.reduce(u,!1)||(a.getDepthTexture()===this.depthTexture&&a.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&i===e.length&&(a.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const a=this.passes;this.deleteDepthTexture(),a.length>0&&(this.autoRenderToScreen&&(a[a.length-1].renderToScreen=!1),this.passes=[])}render(a){const e=this.renderer,i=this.copyPass;let s=this.inputBuffer,l=this.outputBuffer,u=!1,f,h,p;a===void 0&&(this.timer.update(),a=this.timer.getDelta());for(const m of this.passes)m.enabled&&(m.render(e,s,l,a,u),m.needsSwap&&(u&&(i.renderToScreen=m.renderToScreen,f=e.getContext(),h=e.state.buffers.stencil,h.setFunc(f.NOTEQUAL,1,4294967295),i.render(e,s,l,a,u),h.setFunc(f.EQUAL,1,4294967295)),p=s,s=l,l=p),m instanceof mR?u=!0:m instanceof hR&&(u=!1))}setSize(a,e,i){const s=this.renderer,l=s.getSize(new ot);(a===void 0||e===void 0)&&(a=l.width,e=l.height),(l.width!==a||l.height!==e)&&s.setSize(a,e,i);const u=s.getDrawingBufferSize(new ot);this.inputBuffer.setSize(u.width,u.height),this.outputBuffer.setSize(u.width,u.height);for(const f of this.passes)f.setSize(u.width,u.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const a of this.passes)a.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),Ui.fullscreenGeometry.dispose()}},Fr={NONE:0,DEPTH:1,CONVOLUTION:2},wt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},vR=class{constructor(){this.shaderParts=new Map([[wt.FRAGMENT_HEAD,null],[wt.FRAGMENT_MAIN_UV,null],[wt.FRAGMENT_MAIN_IMAGE,null],[wt.VERTEX_HEAD,null],[wt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Fr.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=ar}},td=!1,J0=class{constructor(a=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(a),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let i;if(e.material.flatShading)switch(e.material.side){case li:i=this.materialsFlatShadedDoubleSide;break;case Mn:i=this.materialsFlatShadedBackSide;break;default:i=this.materialsFlatShaded;break}else switch(e.material.side){case li:i=this.materialsDoubleSide;break;case Mn:i=this.materialsBackSide;break;default:i=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=i[2]:e.isInstancedMesh?e.material=i[1]:e.material=i[0],++this.meshCount}}}cloneMaterial(a){if(!(a instanceof Gn))return a.clone();const e=a.uniforms,i=new Map;for(const l in e){const u=e[l].value;u.isRenderTargetTexture&&(e[l].value=null,i.set(l,u))}const s=a.clone();for(const l of i)e[l[0]].value=l[1],s.uniforms[l[0]].value=l[1];return s}setMaterial(a){if(this.disposeMaterials(),this.material=a,a!==null){const e=this.materials=[this.cloneMaterial(a),this.cloneMaterial(a),this.cloneMaterial(a)];for(const i of e)i.uniforms=Object.assign({},a.uniforms),i.side=va;e[2].skinning=!0,this.materialsBackSide=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},a.uniforms),s.side=Mn,s}),this.materialsDoubleSide=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},a.uniforms),s.side=li,s}),this.materialsFlatShaded=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},a.uniforms),s.flatShading=!0,s}),this.materialsFlatShadedBackSide=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},a.uniforms),s.flatShading=!0,s.side=Mn,s}),this.materialsFlatShadedDoubleSide=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},a.uniforms),s.flatShading=!0,s.side=li,s})}}render(a,e,i){const s=a.shadowMap.enabled;if(a.shadowMap.enabled=!1,td){const l=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),a.render(e,i);for(const u of l)u[0].material=u[1];this.meshCount!==l.size&&l.clear()}else{const l=e.overrideMaterial;e.overrideMaterial=this.material,a.render(e,i),e.overrideMaterial=l}a.shadowMap.enabled=s}disposeMaterials(){if(this.material!==null){const a=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of a)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return td}static set workaroundEnabled(a){td=a}},er=-1,Fi=class extends Sa{constructor(a,e=er,i=er,s=1){super(),this.resizable=a,this.baseSize=new ot(1,1),this.preferredSize=new ot(e,i),this.target=this.preferredSize,this.s=s,this.effectiveSize=new ot,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const a=this.baseSize,e=this.preferredSize,i=this.effectiveSize,s=this.scale;e.width!==er?i.width=e.width:e.height!==er?i.width=Math.round(e.height*(a.width/Math.max(a.height,1))):i.width=Math.round(a.width*s),e.height!==er?i.height=e.height:e.width!==er?i.height=Math.round(e.width/Math.max(a.width/Math.max(a.height,1),1)):i.height=Math.round(a.height*s)}get width(){return this.effectiveSize.width}set width(a){this.preferredWidth=a}get height(){return this.effectiveSize.height}set height(a){this.preferredHeight=a}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(a){this.s!==a&&(this.s=a,this.preferredSize.setScalar(er),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(a){this.scale=a}get baseWidth(){return this.baseSize.width}set baseWidth(a){this.baseSize.width!==a&&(this.baseSize.width=a,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(a){this.baseWidth=a}get baseHeight(){return this.baseSize.height}set baseHeight(a){this.baseSize.height!==a&&(this.baseSize.height=a,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(a){this.baseHeight=a}setBaseSize(a,e){(this.baseSize.width!==a||this.baseSize.height!==e)&&(this.baseSize.set(a,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(a){this.preferredSize.width!==a&&(this.preferredSize.width=a,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(a){this.preferredWidth=a}get preferredHeight(){return this.preferredSize.height}set preferredHeight(a){this.preferredSize.height!==a&&(this.preferredSize.height=a,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(a){this.preferredHeight=a}setPreferredSize(a,e){(this.preferredSize.width!==a||this.preferredSize.height!==e)&&(this.preferredSize.set(a,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(a){this.s=a.scale,this.baseSize.set(a.baseWidth,a.baseHeight),this.preferredSize.set(a.preferredWidth,a.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return er}},vt={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},_R="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y,opacity);}",xR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,min(y.a,opacity));}",SR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y)*0.5,opacity);}",yR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.rg,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",ER="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(step(0.0,y)*(1.0-min(vec4(1.0),(1.0-x)/y)),vec4(1.0),step(1.0,x));return mix(x,z,opacity);}",MR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=step(0.0,x)*mix(min(vec4(1.0),x/max(1.0-y,1e-9)),vec4(1.0),step(1.0,y));return mix(x,z,opacity);}",TR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x,y),opacity);}",bR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,abs(x-y),opacity);}",AR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x/max(y,1e-12),opacity);}",RR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y-2.0*x*y),opacity);}",wR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 a=min(x,1.0),b=min(y,1.0);vec4 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,y));return mix(x,z,opacity);}",CR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,step(1.0,x+y),opacity);}",UR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.r,xHSL.gb));return vec4(mix(x.rgb,z,opacity),y.a);}",DR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-y,opacity);}",LR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y*(1.0-x),opacity);}",NR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x,y),opacity);}",OR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(y+x-1.0,0.0,1.0),opacity);}",PR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x+y,1.0),opacity);}",BR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(2.0*y+x-1.0,0.0,1.0),opacity);}",zR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.rg,yHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",IR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x*y,opacity);}",FR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-abs(1.0-x-y),opacity);}",HR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}",GR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(2.0*y*x,1.0-2.0*(1.0-y)*(1.0-x),step(0.5,x));return mix(x,z,opacity);}",VR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 z=mix(mix(y2,x,step(0.5*x,y)),max(vec4(0.0),y2-1.0),step(x,(y2-1.0)));return mix(x,z,opacity);}",kR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(min(x*x/max(1.0-y,1e-12),1.0),y,step(1.0,y));return mix(x,z,opacity);}",XR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.r,yHSL.g,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",WR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y-min(x*y,1.0),opacity);}",jR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 w=step(0.5,y);vec4 z=mix(x-(1.0-y2)*x*(1.0-x),mix(x+(y2-1.0)*(sqrt(x)-x),x+(y2-1.0)*x*((16.0*x-12.0)*x+3.0),w*(1.0-step(0.25,x))),w);return mix(x,z,opacity);}",qR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",YR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x+y-1.0,0.0),opacity);}",ZR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(max(1.0-min((1.0-x)/(2.0*y),1.0),0.0),min(x/(2.0*(1.0-y)),1.0),step(0.5,y));return mix(x,z,opacity);}",KR=new Map([[vt.ADD,_R],[vt.ALPHA,xR],[vt.AVERAGE,SR],[vt.COLOR,yR],[vt.COLOR_BURN,ER],[vt.COLOR_DODGE,MR],[vt.DARKEN,TR],[vt.DIFFERENCE,bR],[vt.DIVIDE,AR],[vt.DST,null],[vt.EXCLUSION,RR],[vt.HARD_LIGHT,wR],[vt.HARD_MIX,CR],[vt.HUE,UR],[vt.INVERT,DR],[vt.INVERT_RGB,LR],[vt.LIGHTEN,NR],[vt.LINEAR_BURN,OR],[vt.LINEAR_DODGE,PR],[vt.LINEAR_LIGHT,BR],[vt.LUMINOSITY,zR],[vt.MULTIPLY,IR],[vt.NEGATION,FR],[vt.NORMAL,HR],[vt.OVERLAY,GR],[vt.PIN_LIGHT,VR],[vt.REFLECT,kR],[vt.SATURATION,XR],[vt.SCREEN,WR],[vt.SOFT_LIGHT,jR],[vt.SRC,qR],[vt.SUBTRACT,YR],[vt.VIVID_LIGHT,ZR]]),QR=class extends Sa{constructor(a,e=1){super(),this._blendFunction=a,this.opacity=new Lt(e)}getOpacity(){return this.opacity.value}setOpacity(a){this.opacity.value=a}get blendFunction(){return this._blendFunction}set blendFunction(a){this._blendFunction=a,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(a){this.blendFunction=a}getShaderCode(){return KR.get(this.blendFunction)}},JR=class extends Sa{constructor(a,e,{attributes:i=Fr.NONE,blendFunction:s=vt.NORMAL,defines:l=new Map,uniforms:u=new Map,extensions:f=null,vertexShader:h=null}={}){super(),this.name=a,this.renderer=null,this.attributes=i,this.fragmentShader=e,this.vertexShader=h,this.defines=l,this.uniforms=u,this.extensions=f,this.blendMode=new QR(s),this.blendMode.addEventListener("change",p=>this.setChanged()),this._inputColorSpace=ar,this._outputColorSpace=Ii}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(a){this._inputColorSpace=a,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(a){this._outputColorSpace=a,this.setChanged()}set mainScene(a){}set mainCamera(a){}getName(){return this.name}setRenderer(a){this.renderer=a}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(a){this.attributes=a,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(a){this.fragmentShader=a,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(a){this.vertexShader=a,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(a,e=ul){}update(a,e,i){}setSize(a,e){}initialize(a,e,i){}dispose(){for(const a of Object.keys(this)){const e=this[a];(e instanceof Hn||e instanceof qs||e instanceof Pn||e instanceof Ui)&&this[a].dispose()}}},fp={MEDIUM:2,LARGE:3},$R=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,e3="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",t3=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],n3=class extends Gn{constructor(a=new Qt){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new Lt(null),texelSize:new Lt(new Qt),scale:new Lt(1),kernel:new Lt(0)},blending:Qn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:$R,vertexShader:e3}),this.setTexelSize(a.x,a.y),this.kernelSize=fp.MEDIUM}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setInputBuffer(a){this.inputBuffer=a}get kernelSequence(){return t3[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(a){this.uniforms.scale.value=a}getScale(){return this.uniforms.scale.value}setScale(a){this.uniforms.scale.value=a}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(a){this.uniforms.kernel.value=a}setKernel(a){this.kernel=a}setTexelSize(a,e){this.uniforms.texelSize.value.set(a,e,a*.5,e*.5)}setSize(a,e){const i=1/a,s=1/e;this.uniforms.texelSize.value.set(i,s,i*.5,s*.5)}},i3=class extends Ui{constructor({kernelSize:a=fp.MEDIUM,resolutionScale:e=.5,width:i=Fi.AUTO_SIZE,height:s=Fi.AUTO_SIZE,resolutionX:l=i,resolutionY:u=s}={}){super("KawaseBlurPass"),this.renderTargetA=new Hn(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const f=this.resolution=new Fi(this,l,u,e);f.addEventListener("change",h=>this.setSize(f.baseWidth,f.baseHeight)),this._blurMaterial=new n3,this._blurMaterial.kernelSize=a,this.copyMaterial=new Z_}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(a){this._blurMaterial=a}get dithering(){return this.copyMaterial.dithering}set dithering(a){this.copyMaterial.dithering=a}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(a){this.blurMaterial.kernelSize=a}get width(){return this.resolution.width}set width(a){this.resolution.preferredWidth=a}get height(){return this.resolution.height}set height(a){this.resolution.preferredHeight=a}get scale(){return this.blurMaterial.scale}set scale(a){this.blurMaterial.scale=a}getScale(){return this.blurMaterial.scale}setScale(a){this.blurMaterial.scale=a}getKernelSize(){return this.kernelSize}setKernelSize(a){this.kernelSize=a}getResolutionScale(){return this.resolution.scale}setResolutionScale(a){this.resolution.scale=a}render(a,e,i,s,l){const u=this.scene,f=this.camera,h=this.renderTargetA,p=this.renderTargetB,m=this.blurMaterial,g=m.kernelSequence;let _=e;this.fullscreenMaterial=m;for(let x=0,y=g.length;x<y;++x){const M=(x&1)===0?h:p;m.kernel=g[x],m.inputBuffer=_.texture,a.setRenderTarget(M),a.render(u,f),_=M}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=_.texture,a.setRenderTarget(this.renderToScreen?null:i),a.render(u,f)}setSize(a,e){const i=this.resolution;i.setBaseSize(a,e);const s=i.width,l=i.height;this.renderTargetA.setSize(s,l),this.renderTargetB.setSize(s,l),this.blurMaterial.setSize(a,e)}initialize(a,e,i){i!==void 0&&(this.renderTargetA.texture.type=i,this.renderTargetB.texture.type=i,i!==Bn?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):a!==null&&a.outputColorSpace===Ht&&(this.renderTargetA.texture.colorSpace=Ht,this.renderTargetB.texture.colorSpace=Ht))}static get AUTO_SIZE(){return Fi.AUTO_SIZE}},a3=`#include <common>
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
}`,r3=class extends Gn{constructor(a=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:ol.replace(/\D+/g,"")},uniforms:{inputBuffer:new Lt(null),threshold:new Lt(0),smoothing:new Lt(1),range:new Lt(null)},blending:Qn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:a3,vertexShader:Y_}),this.colorOutput=a,this.luminanceRange=e}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setInputBuffer(a){this.uniforms.inputBuffer.value=a}get threshold(){return this.uniforms.threshold.value}set threshold(a){this.smoothing>0||a>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=a}getThreshold(){return this.threshold}setThreshold(a){this.threshold=a}get smoothing(){return this.uniforms.smoothing.value}set smoothing(a){this.threshold>0||a>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=a}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(a){this.smoothing=a}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(a){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(a){a?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(a){return this.colorOutput}setColorOutputEnabled(a){this.colorOutput=a}get useRange(){return this.luminanceRange!==null}set useRange(a){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(a){a!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=a,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(a){this.luminanceRange=a}},s3=class extends Ui{constructor({renderTarget:a,luminanceRange:e,colorOutput:i,resolutionScale:s=1,width:l=Fi.AUTO_SIZE,height:u=Fi.AUTO_SIZE,resolutionX:f=l,resolutionY:h=u}={}){super("LuminancePass"),this.fullscreenMaterial=new r3(i,e),this.needsSwap=!1,this.renderTarget=a,this.renderTarget===void 0&&(this.renderTarget=new Hn(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const p=this.resolution=new Fi(this,f,h,s);p.addEventListener("change",m=>this.setSize(p.baseWidth,p.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(a,e,i,s,l){const u=this.fullscreenMaterial;u.inputBuffer=e.texture,a.setRenderTarget(this.renderToScreen?null:this.renderTarget),a.render(this.scene,this.camera)}setSize(a,e){const i=this.resolution;i.setBaseSize(a,e),this.renderTarget.setSize(i.width,i.height)}initialize(a,e,i){i!==void 0&&i!==Bn&&(this.renderTarget.texture.type=i,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},o3=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.0555555
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,l3="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",u3=class extends Gn{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new Lt(null),texelSize:new Lt(new ot)},blending:Qn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:o3,vertexShader:l3})}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setSize(a,e){this.uniforms.texelSize.value.set(1/a,1/e)}},c3=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,f3="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",h3=class extends Gn{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new Lt(null),supportBuffer:new Lt(null),texelSize:new Lt(new ot),radius:new Lt(.85)},blending:Qn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:c3,vertexShader:f3})}set inputBuffer(a){this.uniforms.inputBuffer.value=a}set supportBuffer(a){this.uniforms.supportBuffer.value=a}get radius(){return this.uniforms.radius.value}set radius(a){this.uniforms.radius.value=a}setSize(a,e){this.uniforms.texelSize.value.set(1/a,1/e)}},d3=class extends Ui{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new Hn(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new u3,this.upsamplingMaterial=new h3,this.resolution=new ot}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(a){if(this.levels!==a){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let i=0;i<a;++i){const s=e.clone();s.texture.name="Downsampling.Mipmap"+i,this.downsamplingMipmaps.push(s)}this.upsamplingMipmaps.push(e);for(let i=1,s=a-1;i<s;++i){const l=e.clone();l.texture.name="Upsampling.Mipmap"+i,this.upsamplingMipmaps.push(l)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(a){this.upsamplingMaterial.radius=a}render(a,e,i,s,l){const{scene:u,camera:f}=this,{downsamplingMaterial:h,upsamplingMaterial:p}=this,{downsamplingMipmaps:m,upsamplingMipmaps:g}=this;let _=e;this.fullscreenMaterial=h;for(let x=0,y=m.length;x<y;++x){const M=m[x];h.setSize(_.width,_.height),h.inputBuffer=_.texture,a.setRenderTarget(M),a.render(u,f),_=M}this.fullscreenMaterial=p;for(let x=g.length-1;x>=0;--x){const y=g[x];p.setSize(_.width,_.height),p.inputBuffer=_.texture,p.supportBuffer=m[x].texture,a.setRenderTarget(y),a.render(u,f),_=y}}setSize(a,e){const i=this.resolution;i.set(a,e);let s=i.width,l=i.height;for(let u=0,f=this.downsamplingMipmaps.length;u<f;++u)s=Math.round(s*.5),l=Math.round(l*.5),this.downsamplingMipmaps[u].setSize(s,l),u<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[u].setSize(s,l)}initialize(a,e,i){if(i!==void 0){const s=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const l of s)l.texture.type=i;if(i!==Bn)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(a!==null&&a.outputColorSpace===Ht)for(const l of s)l.texture.colorSpace=Ht}}dispose(){super.dispose();for(const a of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))a.dispose()}},p3=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 texel=texture2D(map,uv);outputColor=vec4(texel.rgb*intensity,texel.a);}`,m3=class extends JR{constructor({blendFunction:a=vt.SCREEN,luminanceThreshold:e=.9,luminanceSmoothing:i=.025,mipmapBlur:s=!1,intensity:l=1,radius:u=.85,levels:f=8,kernelSize:h=fp.LARGE,resolutionScale:p=.5,width:m=Fi.AUTO_SIZE,height:g=Fi.AUTO_SIZE,resolutionX:_=m,resolutionY:x=g}={}){super("BloomEffect",p3,{blendFunction:a,uniforms:new Map([["map",new Lt(null)],["intensity",new Lt(l)]])}),this.renderTarget=new Hn(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new i3({kernelSize:h}),this.luminancePass=new s3({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=i,this.mipmapBlurPass=new d3,this.mipmapBlurPass.enabled=s,this.mipmapBlurPass.radius=u,this.mipmapBlurPass.levels=f,this.uniforms.get("map").value=s?this.mipmapBlurPass.texture:this.renderTarget.texture;const y=this.resolution=new Fi(this,_,x,p);y.addEventListener("change",M=>this.setSize(y.baseWidth,y.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(a){this.resolution.preferredWidth=a}get height(){return this.resolution.height}set height(a){this.resolution.preferredHeight=a}get dithering(){return this.blurPass.dithering}set dithering(a){this.blurPass.dithering=a}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(a){this.blurPass.kernelSize=a}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(a){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(a){this.uniforms.get("intensity").value=a}getIntensity(){return this.intensity}setIntensity(a){this.intensity=a}getResolutionScale(){return this.resolution.scale}setResolutionScale(a){this.resolution.scale=a}update(a,e,i){const s=this.renderTarget,l=this.luminancePass;l.enabled?(l.render(a,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(a,l.renderTarget):this.blurPass.render(a,l.renderTarget,s)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(a,e):this.blurPass.render(a,e,s)}setSize(a,e){const i=this.resolution;i.setBaseSize(a,e),this.renderTarget.setSize(i.width,i.height),this.blurPass.resolution.copy(i),this.luminancePass.setSize(a,e),this.mipmapBlurPass.setSize(a,e)}initialize(a,e,i){this.blurPass.initialize(a,e,i),this.luminancePass.initialize(a,e,i),this.mipmapBlurPass.initialize(a,e,i),i!==void 0&&(this.renderTarget.texture.type=i,a!==null&&a.outputColorSpace===Ht&&(this.renderTarget.texture.colorSpace=Ht))}},g3=class extends Ui{constructor(a,e,i=null){super("RenderPass",a,e),this.needsSwap=!1,this.clearPass=new K_,this.overrideMaterialManager=i===null?null:new J0(i),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(a){this.scene=a}set mainCamera(a){this.camera=a}get renderToScreen(){return super.renderToScreen}set renderToScreen(a){super.renderToScreen=a,this.clearPass.renderToScreen=a}get overrideMaterial(){const a=this.overrideMaterialManager;return a!==null?a.material:null}set overrideMaterial(a){const e=this.overrideMaterialManager;a!==null?e!==null?e.setMaterial(a):this.overrideMaterialManager=new J0(a):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(a){this.overrideMaterial=a}get clear(){return this.clearPass.enabled}set clear(a){this.clearPass.enabled=a}getSelection(){return this.selection}setSelection(a){this.selection=a}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(a){this.ignoreBackground=a}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(a){this.skipShadowMapUpdate=a}getClearPass(){return this.clearPass}render(a,e,i,s,l){const u=this.scene,f=this.camera,h=this.selection,p=f.layers.mask,m=u.background,g=a.shadowMap.autoUpdate,_=this.renderToScreen?null:e;h!==null&&f.layers.set(h.getLayer()),this.skipShadowMapUpdate&&(a.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(u.background=null),this.clearPass.enabled&&this.clearPass.render(a,e),a.setRenderTarget(_),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(a,u,f):a.render(u,f),f.layers.mask=p,u.background=m,a.shadowMap.autoUpdate=g}},v3=`#include <common>
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
}`,_3="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",x3=class extends Gn{constructor(a,e,i,s,l=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:ol.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new Lt(null),depthBuffer:new Lt(null),resolution:new Lt(new ot),texelSize:new Lt(new ot),cameraNear:new Lt(.3),cameraFar:new Lt(1e3),aspect:new Lt(1),time:new Lt(0)},blending:Qn,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:l}),a&&this.setShaderParts(a),e&&this.setDefines(e),i&&this.setUniforms(i),this.copyCameraSettings(s)}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setInputBuffer(a){this.uniforms.inputBuffer.value=a}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(a){this.uniforms.depthBuffer.value=a}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(a){this.defines.DEPTH_PACKING=a.toFixed(0),this.needsUpdate=!0}setDepthBuffer(a,e=ul){this.depthBuffer=a,this.depthPacking=e}setShaderData(a){this.setShaderParts(a.shaderParts),this.setDefines(a.defines),this.setUniforms(a.uniforms),this.setExtensions(a.extensions)}setShaderParts(a){return this.fragmentShader=v3.replace(wt.FRAGMENT_HEAD,a.get(wt.FRAGMENT_HEAD)||"").replace(wt.FRAGMENT_MAIN_UV,a.get(wt.FRAGMENT_MAIN_UV)||"").replace(wt.FRAGMENT_MAIN_IMAGE,a.get(wt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=_3.replace(wt.VERTEX_HEAD,a.get(wt.VERTEX_HEAD)||"").replace(wt.VERTEX_MAIN_SUPPORT,a.get(wt.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(a){for(const e of a.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(a){for(const e of a.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(a){this.extensions={};for(const e of a)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(a){this.encodeOutput!==a&&(a?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(a){return this.encodeOutput}setOutputEncodingEnabled(a){this.encodeOutput=a}get time(){return this.uniforms.time.value}set time(a){this.uniforms.time.value=a}setDeltaTime(a){this.uniforms.time.value+=a}adoptCameraSettings(a){this.copyCameraSettings(a)}copyCameraSettings(a){a&&(this.uniforms.cameraNear.value=a.near,this.uniforms.cameraFar.value=a.far,a instanceof Zn?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(a,e){const i=this.uniforms;i.resolution.value.set(a,e),i.texelSize.value.set(1/a,1/e),i.aspect.value=a/e}static get Section(){return wt}};function $0(a,e,i){for(const s of e){const l="$1"+a+s.charAt(0).toUpperCase()+s.slice(1),u=new RegExp("([^\\.])(\\b"+s+"\\b)","g");for(const f of i.entries())f[1]!==null&&i.set(f[0],f[1].replace(u,l))}}function S3(a,e,i){let s=e.getFragmentShader(),l=e.getVertexShader();const u=s!==void 0&&/mainImage/.test(s),f=s!==void 0&&/mainUv/.test(s);if(i.attributes|=e.getAttributes(),s===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(f&&(i.attributes&Fr.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!u&&!f)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const h=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,p=i.shaderParts;let m=p.get(wt.FRAGMENT_HEAD)||"",g=p.get(wt.FRAGMENT_MAIN_UV)||"",_=p.get(wt.FRAGMENT_MAIN_IMAGE)||"",x=p.get(wt.VERTEX_HEAD)||"",y=p.get(wt.VERTEX_MAIN_SUPPORT)||"";const M=new Set,A=new Set;if(f&&(g+=`	${a}MainUv(UV);
`,i.uvTransformation=!0),l!==null&&/mainSupport/.test(l)){const N=/mainSupport *\([\w\s]*?uv\s*?\)/.test(l);y+=`	${a}MainSupport(`,y+=N?`vUv);
`:`);
`;for(const C of l.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const U of C[1].split(/\s*,\s*/))i.varyings.add(U),M.add(U),A.add(U);for(const C of l.matchAll(h))A.add(C[1])}for(const N of s.matchAll(h))A.add(N[1]);for(const N of e.defines.keys())A.add(N.replace(/\([\w\s,]*\)/g,""));for(const N of e.uniforms.keys())A.add(N);A.delete("while"),A.delete("for"),A.delete("if"),e.uniforms.forEach((N,C)=>i.uniforms.set(a+C.charAt(0).toUpperCase()+C.slice(1),N)),e.defines.forEach((N,C)=>i.defines.set(a+C.charAt(0).toUpperCase()+C.slice(1),N));const S=new Map([["fragment",s],["vertex",l]]);$0(a,A,i.defines),$0(a,A,S),s=S.get("fragment"),l=S.get("vertex");const v=e.blendMode;if(i.blendModes.set(v.blendFunction,v),u){e.inputColorSpace!==null&&e.inputColorSpace!==i.colorSpace&&(_+=e.inputColorSpace===Ht?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==Ii?i.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(i.colorSpace=e.inputColorSpace);const N=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;_+=`${a}MainImage(color0, UV, `,(i.attributes&Fr.DEPTH)!==0&&N.test(s)&&(_+="depth, ",i.readDepth=!0),_+=`color1);
	`;const C=a+"BlendOpacity";i.uniforms.set(C,v.opacity),_+=`color0 = blend${v.blendFunction}(color0, color1, ${C});

	`,m+=`uniform float ${C};

`}if(m+=s+`
`,l!==null&&(x+=l+`
`),p.set(wt.FRAGMENT_HEAD,m),p.set(wt.FRAGMENT_MAIN_UV,g),p.set(wt.FRAGMENT_MAIN_IMAGE,_),p.set(wt.VERTEX_HEAD,x),p.set(wt.VERTEX_MAIN_SUPPORT,y),e.extensions!==null)for(const N of e.extensions)i.extensions.add(N)}}var y3=class extends Ui{constructor(a,...e){super("EffectPass"),this.fullscreenMaterial=new x3(null,null,null,a),this.listener=i=>this.handleEvent(i),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(a){for(const e of this.effects)e.mainScene=a}set mainCamera(a){this.fullscreenMaterial.copyCameraSettings(a);for(const e of this.effects)e.mainCamera=a}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(a){this.fullscreenMaterial.encodeOutput=a}get dithering(){return this.fullscreenMaterial.dithering}set dithering(a){const e=this.fullscreenMaterial;e.dithering=a,e.needsUpdate=!0}setEffects(a){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=a.sort((e,i)=>i.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const a=new vR;let e=0;for(const f of this.effects)if(f.blendMode.blendFunction===vt.DST)a.attributes|=f.getAttributes()&Fr.DEPTH;else{if((a.attributes&f.getAttributes()&Fr.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${f.name})`);S3("e"+e++,f,a)}let i=a.shaderParts.get(wt.FRAGMENT_HEAD),s=a.shaderParts.get(wt.FRAGMENT_MAIN_IMAGE),l=a.shaderParts.get(wt.FRAGMENT_MAIN_UV);const u=/\bblend\b/g;for(const f of a.blendModes.values())i+=f.getShaderCode().replace(u,`blend${f.blendFunction}`)+`
`;(a.attributes&Fr.DEPTH)!==0?(a.readDepth&&(s=`float depth = readDepth(UV);

	`+s),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,a.colorSpace===Ht&&(s+=`color0 = sRGBToLinear(color0);
	`),a.uvTransformation?(l=`vec2 transformedUv = vUv;
`+l,a.defines.set("UV","transformedUv")):a.defines.set("UV","vUv"),a.shaderParts.set(wt.FRAGMENT_HEAD,i),a.shaderParts.set(wt.FRAGMENT_MAIN_IMAGE,s),a.shaderParts.set(wt.FRAGMENT_MAIN_UV,l);for(const[f,h]of a.shaderParts)h!==null&&a.shaderParts.set(f,h.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(a)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(a,e=ul){this.fullscreenMaterial.depthBuffer=a,this.fullscreenMaterial.depthPacking=e;for(const i of this.effects)i.setDepthTexture(a,e)}render(a,e,i,s,l){for(const u of this.effects)u.update(a,e,s);if(!this.skipRendering||this.renderToScreen){const u=this.fullscreenMaterial;u.inputBuffer=e.texture,u.time+=s*this.timeScale,a.setRenderTarget(this.renderToScreen?null:i),a.render(this.scene,this.camera)}}setSize(a,e){this.fullscreenMaterial.setSize(a,e);for(const i of this.effects)i.setSize(a,e)}initialize(a,e,i){this.renderer=a;for(const s of this.effects)s.initialize(a,e,i);this.updateMaterial(),i!==void 0&&i!==Bn&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const a of this.effects)a.removeEventListener("change",this.listener),a.dispose()}handleEvent(a){switch(a.type){case"change":this.recompile();break}}};const E3=()=>{const{width:a,height:e}=v_(),i=he.useRef(null);return he.useEffect(()=>{const s=new oc,l=new Zn(75,a/e,.1,1e3),u=new X_({alpha:!0});u.setClearColor(0,0),u.setSize(a,e),u.domElement.style.position="absolute",u.domElement.style.top="0",u.domElement.style.left="0",u.domElement.style.zIndex="-1";const f=i.current;f instanceof HTMLElement&&!f.hasChildNodes()&&f.appendChild(u.domElement);const h=new Jo;for(let x=0;x<50;x++){const y=.03+Math.random()*.07,M=new Vr(y,y,y),A=new fc({color:"white"}),S=new _i(M,A);S.position.x=(Math.random()-.5)*10,S.position.y=(Math.random()-.5)*10,S.position.z=(Math.random()-.5)*10,h.add(S)}s.add(h),l.position.z=5,h.children.forEach(x=>{});const p=new gR(u);p.addPass(new g3(s,l));const m=new m3({intensity:.15,luminanceThreshold:.007,luminanceSmoothing:.2,radius:15}),g=new y3(l,m);g.renderToScreen=!0,p.addPass(g);const _=()=>{requestAnimationFrame(_),h.rotation.x+=89e-6,h.rotation.y+=99e-6,p.render()};return _(),()=>{f&&f.removeChild(u.domElement)}},[a,e]),B.jsx("div",{id:"three_background",style:{position:"fixed",top:0,left:0,width:`${a}px`,height:`${e}px`,overflow:"hidden"},ref:i})},M3=[{title:"Projects",url:"/projects"},{title:"3D Projects",url:"hi"}],T3=()=>{const{width:a,height:e}=v_(),i=he.useRef(null),l=rr().pathname;function u(){return l.split("/").filter((f,h)=>h!==0)}return console.log(l,"is curernt"),he.useEffect(()=>{const f=new oc,h=new Zn(75,window.innerWidth/window.innerHeight,.1,1e3),p=new X_({alpha:!0});p.setClearColor(0,0),p.setSize(window.innerWidth,window.innerHeight),p.domElement.style.position="absolute",p.domElement.style.top="0",p.domElement.style.left="0",p.domElement.style.zIndex="-1",i.current instanceof HTMLElement&&!i.current.hasChildNodes()&&i.current.appendChild(p.domElement);const m=new Vr,g=new fc({color:65280}),_=new _i(m,g);f.add(_),h.position.z=5;const x=()=>{_.rotation.x+=.01,_.rotation.y+=.01,p.render(f,h),requestAnimationFrame(x)};return x(),()=>{i.current&&i.current.removeChild(p.domElement)}},[]),console.log(a,"is the width; and the height is: ",e),B.jsx(B.Fragment,{children:B.jsxs("div",{id:"outer_bg",children:[B.jsx("div",{style:{position:"fixed",top:0,left:0,width:`${a}px`,height:`${e}px`,overflow:"hidden"},children:B.jsx(nR,{})}),B.jsx(E3,{}),B.jsxs("div",{className:"pt-20",id:"inner_bg",ref:i,style:{position:"relative",width:"95vw",margin:"auto"},children:[B.jsxs("div",{children:[B.jsx(eR,{width:a,path:l}),u().length>1&&B.jsx(tR,{split:u,locationData:M3})]}),B.jsxs("div",{id:"body_div",children:[B.jsx("main",{children:B.jsxs($y,{children:[B.jsx(Ps,{path:"/about",element:B.jsx(N1,{})}),B.jsx(Ps,{path:"/projects/3d",element:B.jsx(sR,{width:a,blog_array:oR})}),B.jsx(Ps,{path:"/projects",element:B.jsx(I1,{width:a,category_array:lR})}),B.jsx(Ps,{path:"/art",element:B.jsx(V1,{width:a})}),B.jsx(Ps,{path:"/contact",element:B.jsx(k1,{})})]})}),B.jsx(ZA,{path:l})]})]}),B.jsx("div",{className:"flex justify-end fixed top-0 w-full z-100",children:B.jsx("a",{href:q_,target:"new",children:B.jsx("button",{className:"p-2 rounded-lg m-2 bg-white cursor-pointer",children:B.jsx(KA,{})})})})]})})};ly.createRoot(document.getElementById("root")).render(B.jsx(he.StrictMode,{children:B.jsx(M1,{children:B.jsx(T3,{})})}));
