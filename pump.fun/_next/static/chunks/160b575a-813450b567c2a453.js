"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9571],{27485:function(t,e,r){r.d(e,{C:function(){return x},iT:function(){return h}});var a=r(57437);r(2265);var s=r(89183);let i="#4fa94d",c={"aria-busy":!0,role:"progressbar"},o=(0,s.ZP).div`
  display: ${t=>t.$visible?"flex":"none"};
`,n=(0,s.F4)`
12.5% {
  stroke-dasharray: ${33.98873199462888}px, ${242.776657104492}px;
  stroke-dashoffset: -${26.70543228149412}px;
}
43.75% {
  stroke-dasharray: ${84.97182998657219}px, ${242.776657104492}px;
  stroke-dashoffset: -${84.97182998657219}px;
}
100% {
  stroke-dasharray: ${2.42776657104492}px, ${242.776657104492}px;
  stroke-dashoffset: -${240.34889053344708}px;
}
`;(0,s.ZP).path`
  stroke-dasharray: ${2.42776657104492}px, ${242.776657104492};
  stroke-dashoffset: 0;
  animation: ${n} ${1.6}s linear infinite;
`;let l=t=>["M"+t+" 0c0-9.94-8.06",t,t,t].join("-"),d=(t,e,r)=>{let a=Math.max(t,e),s=-r-a/2+1,i=2*r+a;return[s,s,i,i].join(" ")},h=({height:t=80,width:e=80,color:r=i,secondaryColor:s=i,ariaLabel:n="oval-loading",wrapperStyle:h,wrapperClass:p,visible:f=!0,strokeWidth:x=2,strokeWidthSecondary:k})=>(0,a.jsx)(o,{style:h,$visible:f,className:p,"data-testid":"oval-loading","aria-label":n,...c,children:(0,a.jsx)("svg",{width:e,height:t,viewBox:d(Number(x),Number(k||x),20),xmlns:"http://www.w3.org/2000/svg",stroke:r,"data-testid":"oval-svg",children:(0,a.jsx)("g",{fill:"none",fillRule:"evenodd",children:(0,a.jsxs)("g",{transform:"translate(1 1)",strokeWidth:Number(k||x),"data-testid":"oval-secondary-group",children:[(0,a.jsx)("circle",{strokeOpacity:".5",cx:"0",cy:"0",r:20,stroke:s,strokeWidth:x}),(0,a.jsx)("path",{d:l(20),children:(0,a.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 0 0",to:"360 0 0",dur:"1s",repeatCount:"indefinite"})})]})})})}),p=(0,s.F4)`
to {
   transform: rotate(360deg);
 }
`;(0,s.ZP).svg`
  animation: ${p} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`,(0,s.ZP).polyline`
  stroke-width: ${t=>t.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;let f=(0,s.F4)`
to {
   stroke-dashoffset: 136;
 }
`;(0,s.ZP).polygon`
  stroke-dasharray: 17;
  animation: ${f} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`,(0,s.ZP).svg`
  transform-origin: 50% 65%;
`;let x=({width:t="80",height:e="80",backgroundColor:r=i,ballColors:s=["#fc636b","#6a67ce","#ffb900"],wrapperClass:o="",wrapperStyle:n={},ariaLabel:l="fidget-spinner-loader",visible:d=!0})=>d?(0,a.jsx)("svg",{width:t,height:e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:o,style:n,"aria-label":l,"data-testid":"fidget-spinner-svg",...c,children:(0,a.jsxs)("g",{transform:"rotate(6 50 50)",children:[(0,a.jsx)("g",{transform:"translate(50 50)",children:(0,a.jsx)("g",{transform:"scale(0.9)",children:(0,a.jsxs)("g",{transform:"translate(-50 -58)",children:[(0,a.jsx)("path",{d:"M27.1,79.4c-1.1,0.6-2.4,1-3.7,1c-2.6,0-5.1-1.4-6.4-3.7c-2-3.5-0.8-8,2.7-10.1c1.1-0.6,2.4-1,3.7-1c2.6,0,5.1,1.4,6.4,3.7 C31.8,72.9,30.6,77.4,27.1,79.4z",fill:s[0]}),(0,a.jsx)("path",{d:"M72.9,79.4c1.1,0.6,2.4,1,3.7,1c2.6,0,5.1-1.4,6.4-3.7c2-3.5,0.8-8-2.7-10.1c-1.1-0.6-2.4-1-3.7-1c-2.6,0-5.1,1.4-6.4,3.7 C68.2,72.9,69.4,77.4,72.9,79.4z",fill:s[1]}),(0,a.jsx)("circle",{cx:"50",cy:"27",r:"7.4",fill:s[2]}),(0,a.jsx)("path",{d:"M86.5,57.5c-3.1-1.9-6.4-2.8-9.8-2.8c-0.5,0-0.9,0-1.4,0c-0.4,0-0.8,0-1.1,0c-2.1,0-4.2-0.4-6.2-1.2 c-0.8-3.6-2.8-6.9-5.4-9.3c0.4-2.5,1.3-4.8,2.7-6.9c2-2.9,3.2-6.5,3.2-10.4c0-10.2-8.2-18.4-18.4-18.4c-0.3,0-0.6,0-0.9,0 C39.7,9,32,16.8,31.6,26.2c-0.2,4.1,1,7.9,3.2,11c1.4,2.1,2.3,4.5,2.7,6.9c-2.6,2.5-4.6,5.7-5.4,9.3c-1.9,0.7-4,1.1-6.1,1.1 c-0.4,0-0.8,0-1.2,0c-0.5,0-0.9-0.1-1.4-0.1c-3.1,0-6.3,0.8-9.2,2.5c-9.1,5.2-12,17-6.3,25.9c3.5,5.4,9.5,8.4,15.6,8.4 c2.9,0,5.8-0.7,8.5-2.1c3.6-1.9,6.3-4.9,8-8.3c1.1-2.3,2.7-4.2,4.6-5.8c1.7,0.5,3.5,0.8,5.4,0.8c1.9,0,3.7-0.3,5.4-0.8 c1.9,1.6,3.5,3.5,4.6,5.7c1.5,3.2,4,6,7.4,8c2.9,1.7,6.1,2.5,9.2,2.5c6.6,0,13.1-3.6,16.4-10C97.3,73.1,94.4,62.5,86.5,57.5z M29.6,83.7c-1.9,1.1-4,1.6-6.1,1.6c-4.2,0-8.4-2.2-10.6-6.1c-3.4-5.9-1.4-13.4,4.5-16.8c1.9-1.1,4-1.6,6.1-1.6 c4.2,0,8.4,2.2,10.6,6.1C37.5,72.8,35.4,80.3,29.6,83.7z M50,39.3c-6.8,0-12.3-5.5-12.3-12.3S43.2,14.7,50,14.7 c6.8,0,12.3,5.5,12.3,12.3S56.8,39.3,50,39.3z M87.2,79.2c-2.3,3.9-6.4,6.1-10.6,6.1c-2.1,0-4.2-0.5-6.1-1.6 c-5.9-3.4-7.9-10.9-4.5-16.8c2.3-3.9,6.4-6.1,10.6-6.1c2.1,0,4.2,0.5,6.1,1.6C88.6,65.8,90.6,73.3,87.2,79.2z",fill:r})]})})}),(0,a.jsx)("animateTransform",{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 50;360 50 50",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"})]})}):null}}]);