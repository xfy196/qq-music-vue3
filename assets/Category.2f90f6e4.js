import{c as v,I as h,G as x,o as C,h as a,i as s,j as r,L as f,J as k,K as m,r as w,p as $,k as g,u as c,l as B,m as E,M as P,n as D}from"./vendor.57e2cb7c.js";import{r as N,s as V,P as q}from"./index.c9e320a8.js";import{_ as F}from"./CoverPlay.4318d393.js";import"./el-image-viewer.bef8cc85.js";import"./IconPark.87a29eca.js";import"./PlayOne.7701f3d2.js";const H={class:"grid grid-flow-row grid-cols-8 2xl:grid-cols-12 gap-2.5"},M=["onClick"],T=v({emits:["catChange"],setup(b,{emit:i}){const u=d=>{i("catChange",d)};h();const t=x();return C(async()=>{t.value=await N()}),(d,o)=>(a(),s("div",H,[r("div",{class:"button-dc",onClick:o[0]||(o[0]=n=>u("\u5168\u90E8"))},"\u5168\u90E8"),(a(!0),s(f,null,k(t.value,n=>(a(),s("div",{key:n.id,class:"button-dc",onClick:l=>u(n.name)},m(n.name),9,M))),128))]))}}),A={class:"py-5 text-xl"},I={class:"gap-5 grid grid-flow-row grid-cols-3 lg:grid-cols-5 2xl:grid-cols-7"},L=["onClick"],j={class:"mt-2 text-xs text-main leading-5"},z={class:"mt-2 text-xs text-main truncate text-dc"},G={key:0,class:"py-10"},J=D("\u52A0\u8F7D\u66F4\u591A"),X=v({setup(b){const i=x(),u=h(),t=w({init:!1,loading:!1,limit:35,before:0,more:!1,cat:"\u5168\u90E8"}),d=l=>{t.cat=l,t.before=0,t.more=!1,o()},o=async()=>{var l;t.loading=!0;try{const{playlists:_,lasttime:p,more:e}=await V({limit:t.limit,before:t.before,cat:t.cat});t.before<=0?i.value=_:(l=i.value)==null||l.push(..._),t.init=!0,t.loading=!1,t.before=p,t.more=e}catch{}},n=()=>{o()};return C(o),(l,_)=>{const p=$;return a(),s(f,null,[g(T,{onCatChange:d}),r("div",A,m(c(t).cat)+"\u6B4C\u5355",1),r("div",I,[(a(!0),s(f,null,k(i.value,(e,y)=>(a(),s("div",{key:y,class:P({"item-1":y===0}),onClick:K=>c(u).push({name:c(q).playlist,query:{id:e.id}})},[g(F,{name:e.name,"pic-url":e.coverImgUrl,"play-count":e.playCount,"show-play-count":""},null,8,["name","pic-url","play-count"]),r("div",j,m(e.name),1),r("div",z,m(e.creator.nickname),1)],10,L))),128))]),c(t).more?(a(),s("div",G,[g(p,{type:"text",class:"text-center w-full",onClick:n,loading:c(t).loading},{default:B(()=>[J]),_:1},8,["loading"])])):E("",!0)],64)}}});export{X as default};