"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3061],{43061:function(e,t,o){o.d(t,{Nr:function(){return l},O_:function(){return u},_:function(){return f},b:function(){return d}});var n=o(2265);function r(e,t){window.dispatchEvent(new StorageEvent("storage",{key:e,newValue:t}))}function l(e,t){let[o,r]=n.useState(e);return n.useEffect(()=>{let o=setTimeout(()=>{r(e)},t);return()=>{clearTimeout(o)}},[e,t]),o}function u(){let[e,t]=n.useState(!1);return n.useEffect(()=>{t(!0)},[]),e}let s=(e,t)=>{let o=JSON.stringify(t);window.localStorage.setItem(e,o),r(e,o)},i=e=>{window.localStorage.removeItem(e),r(e,null)},c=e=>window.localStorage.getItem(e),a=e=>(window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)),w=()=>{throw Error("useLocalStorage is a client-only hook")};function f(e,t){let o=n.useSyncExternalStore(a,()=>c(e),w),r=n.useCallback(t=>{try{let n="function"==typeof t?t(JSON.parse(o)):t;null==n?i(e):s(e,n)}catch(e){console.warn(e)}},[e,o]);return n.useEffect(()=>{null===c(e)&&void 0!==t&&s(e,t)},[e,t]),[o?JSON.parse(o):t,r]}function d(){let[e,t]=n.useState({x:null,y:null}),o=n.useCallback((...e)=>{if("object"==typeof e[0])window.scrollTo(e[0]);else if("number"==typeof e[0]&&"number"==typeof e[1])window.scrollTo(e[0],e[1]);else throw Error("Invalid arguments passed to scrollTo. See here for more info. https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo")},[]);return n.useLayoutEffect(()=>{let e=()=>{t({x:window.scrollX,y:window.scrollY})};return e(),window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),[e,o]}}}]);