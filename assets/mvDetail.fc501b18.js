import{f as n,H as i,G as a,o as p,e as d,ag as f,ak as v,j as m,k as _,l as e}from"./vendor.93f8be85.js";import{b as y,E as h}from"./index.c3c752ca.js";import{P as k}from"./plyr.623e6d1e.js";const x={class:"p-5"},w={class:"flex gap-x-5"},B={class:"flex-1"},g=e("div",{class:"hidden w-80 flex-shrink-0 xl:block"},[e("div",null,"\u5927\u5BB6\u90FD\u5728\u770B")],-1),D=n({setup(P){const l=i(),r=Number(l.query.id),{setPlay:u,setPause:c}=y(),t=a(),s=a();return p(async()=>{s.value=await h(r),c();const o=new k(t.value,{autoplay:!0,fullscreen:{iosNative:!0},tooltips:{controls:!0},controls:["play-large","play","progress","current-time","mute","volume","captions","settings","pip","airplay","fullscreen"]});o.source={type:"video",sources:[{src:s.value.url}]}}),d(()=>{setTimeout(()=>{u()},1e3)}),(o,b)=>f((m(),_("div",x,[e("div",w,[e("div",B,[e("video",{ref_key:"playerRef",ref:t,class:"aspect-video w-full"},null,512)]),g])],512)),[[v,s.value]])}});export{D as default};
