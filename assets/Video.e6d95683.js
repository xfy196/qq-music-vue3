import{c as U,G as n,t as j,s as N,I as O,o as q,p as J,O as M,Y as T,ah as I,ai as K,h as t,i as o,ag as C,m as v,j as s,u as l,aj as Y,v as z,l as c,k as d,L as _,J as f,U as k,K as b}from"./vendor.57e2cb7c.js";/* empty css                   *//* empty css                   */import{u as x}from"./video.59f59462.js";import{_ as H}from"./IconPark.87a29eca.js";import{u as Q,C as E}from"./index.c9e320a8.js";import{_ as W}from"./CoverPlay.4318d393.js";import{R as X}from"./Right.da58d992.js";import"./el-image-viewer.bef8cc85.js";import"./PlayOne.7701f3d2.js";const Z={class:"relative p-5 video-page"},ee={key:0,class:"absolute w-full h-60"},te={class:"flex items-center justify-between"},oe=s("span",{class:"mr-2"},"\u5168\u90E8\u89C6\u9891",-1),se=s("div",{class:"pt-5 pl-5 text-xl"},"\u5168\u90E8\u89C6\u9891",-1),ie={class:"py-5 pl-5 h-96"},le={class:"grid grid-flow-row grid-cols-5 gap-5 text-xs"},re=["onClick"],ae={class:"flex text-xs gap-x-4"},ue=["onClick"],ne={key:1,class:"grid grid-flow-row grid-cols-3 gap-5 mt-5"},ce={key:2,class:"w-full mt-4"},de=s("iframe",{class:"w-full",height:"500",src:"//player.bilibili.com/player.html?aid=926106212&bvid=BV1qT4y1J74A&cid=203303939&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"},`
      `,-1),pe=s("div",{class:"mt-4 text-center"}," \u75AB\u60C5\u65E0\u60C5\uFF0C\u4EBA\u95F4\u6709\u60C5\uFF0C\u6211\u4EEC\u4E00\u8D77\u52A0\u6CB9\u3002\u60F3\u8981\u770B\u5230\u97F3\u4E50\u89C6\u9891\u9700\u8981\u767B\u5F55\u54E6\u{1F62F} ",-1),ve=[de,pe],we=U({setup(_e){const r=n(!1),{videoGroup:m}=j(x()),{getVideoGroup:w}=x(),B=Q(),{isLogin:g}=N(B),i=n(!1),p=n([]),h=n(),F=O(),V=async()=>{try{i.value=!0,p.value=await E()}catch{}finally{i.value=!1}},y=async a=>{try{r.value=!1,i.value=!0,p.value=await E(a.id)}catch{}finally{i.value=!1}},R=()=>{r.value=!1},S=a=>{F.push({path:"/video/detail",query:{id:a.vid}})};return q(()=>{w(),V()}),(a,u)=>{const D=J,G=M,L=T,P=I,$=K;return t(),o("div",Z,[i.value?C((t(),o("div",ee,null,512)),[[P,i.value]]):v("",!0),s("div",te,[C((t(),z(D,{round:"",onClick:u[0]||(u[0]=e=>r.value=!0),class:"px-5 button-outline"},{default:c(()=>[oe,d(H,{icon:l(X)},null,8,["icon"])]),_:1})),[[$,h.value],[l(Y),R]]),d(L,{width:"60%",placement:"bottom-start","popper-style":"padding:0;",ref_key:"popoverRef",ref:h,trigger:"click","virtual-triggering":"",persistent:"",visible:r.value,"onUpdate:visible":u[1]||(u[1]=e=>r.value=e)},{reference:c(()=>[]),default:c(()=>[s("div",null,[se,s("div",ie,[d(G,null,{default:c(()=>[s("div",le,[(t(!0),o(_,null,f(l(m),e=>(t(),o("div",{class:"hover-text",key:e.id,onClick:k(A=>y(e),["stop"])},b(e.name),9,re))),128))])]),_:1})])])]),_:1},8,["visible"]),s("div",ae,[(t(!0),o(_,null,f(l(m).slice(0,8),e=>(t(),o("div",{class:"hover-text",onClick:k(A=>y(e),["stop"]),key:e.id},b(e.name),9,ue))),128))])]),l(g)?(t(),o("div",ne,[(t(!0),o(_,null,f(p.value,({data:e})=>(t(),o("div",{key:e.vid},[d(W,{onPlay:S.bind(null,e),"pic-url":e.coverUrl,video:""},null,8,["onPlay","pic-url"])]))),128))])):v("",!0),l(g)?v("",!0):(t(),o("div",ce,ve))])}}});export{we as default};