import{d as r,E as i}from"./vendor.57e2cb7c.js";import{u as a,e as u,f as d}from"./index.c9e320a8.js";const c=r("love",{state:()=>({songs:[],ids:[]}),actions:{async getLoveList(){let t=a(),{code:o,ids:s}=await u(t.profile.userId);if(o===200){try{this.ids=s;let e=await d(s.join(","));e.code===200&&(this.songs=e.songs)}catch{}return}i({type:"error",message:"\u83B7\u53D6\u559C\u6B22\u5217\u8868\u5931\u8D25"})}},getters:{}});export{c as u};