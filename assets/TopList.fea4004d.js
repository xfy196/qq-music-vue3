import{c as g,t as v,I as y,o as k,h as o,i as e,j as t,L as c,J as a,u,k as p,K as n}from"./vendor.57e2cb7c.js";import{_}from"./CoverPlay.4318d393.js";import{u as x}from"./music.1a0092e4.js";import"./el-image-viewer.bef8cc85.js";import"./IconPark.87a29eca.js";import"./index.c9e320a8.js";import"./PlayOne.7701f3d2.js";const C=t("div",{class:"text-xl pb-5 font-bold"},"\u5B98\u65B9\u699C",-1),w={class:"grid grid-flow-row grid-cols-2 2xl:grid-cols-4 gap-5"},b=["onClick"],B={class:"px-5 flex-1 flex-shrink-0 flex flex-col"},D={class:"text-xl font-bold"},L={class:"text-xs text-main mt-2"},I={class:"flex"},$={class:"mr-1"},M={class:"flex-auto w-20 truncate"},N=t("div",{class:"text-xl py-5 font-bold"},"\u7279\u8272\u699C",-1),R={class:"grid grid-flow-row grid-cols-5 2xl:grid-cols-10 gap-5"},S=["onClick"],U={class:"text-xs mt-2"},z=g({setup(V){const{topListDetailData:i}=v(x()),{getTopListDetailData:f}=x(),m=y();k(async()=>{await f()});const r=d=>{m.push({name:"playlist",query:{id:d.id}})};return(d,j)=>(o(),e(c,null,[C,t("div",w,[(o(!0),e(c,null,a(u(i).slice(0,4),s=>(o(),e("div",{key:s.id,class:"flex bg-dc rounded-lg items-center cursor-pointer",onClick:l=>r(s)},[p(_,{name:s.name,"pic-url":s.coverImgUrl,"play-count":s.playCount,class:"w-36 flex-shrink-0","show-play-count":""},null,8,["name","pic-url","play-count"]),t("div",B,[t("div",D,n(s.name),1),t("div",L,[(o(!0),e(c,null,a(s.tracks,(l,h)=>(o(),e("div",{key:l.second,class:"mt-2"},[t("div",I,[t("span",$,n(h+1),1),t("div",M,n(l.first)+" - "+n(l.second),1)])]))),128))])])],8,b))),128))]),N,t("div",R,[(o(!0),e(c,null,a(u(i).slice(4),s=>(o(),e("div",{key:s.id,onClick:l=>r(s)},[p(_,{name:s.name,"pic-url":s.coverImgUrl,"play-count":s.playCount},null,8,["name","pic-url","play-count"]),t("div",U,n(s.name),1)],8,S))),128))])],64))}});export{z as default};