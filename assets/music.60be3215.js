import{d as i,G as s}from"./vendor.e8d640e7.js";import{g as r,h as l,i as u}from"./index.cd2cfa17.js";const p=i("music",()=>{const e=s([]),n=async()=>{e.value.length||(e.value=await r())},a=s([]),o=async()=>{a.value.length||(a.value=await l())},t=s([]);return{topListDetailData:e,getTopListDetailData:n,personalized:a,getPersonalized:o,personalizedNewSong:t,getPersonalizedNewSong:async()=>{t.value.length||(t.value=await u())}}});export{p as u};