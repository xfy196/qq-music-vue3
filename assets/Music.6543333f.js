import{G as v,D as C,F as k,w as x,c as h,a0 as B,a1 as w,a2 as T,q as V,h as o,i,k as l,l as _,j as c,J as E,H as g,v as M,u,N as R}from"./vendor.6b1cfc97.js";/* empty css                    */function y(){const r=[{label:"\u7CBE\u9009",name:"picked"},{label:"\u6392\u884C",name:"toplist"},{label:"\u6B4C\u624B",name:"artist"},{label:"\u5206\u7C7B\u6B4C\u5355",name:"category"}],s=v(),e=C(),n=k(e.name);return x(()=>e.name,a=>{n.value=a}),{menus:r,currentMenu:n,onTabClick:({props:a})=>{s.push({name:a.name,replace:!0})}}}const F={class:"pl-5 pr-5 music"},N=c("h1",{class:"text-3xl font-bold pt-8 pb-4"},"\u97F3\u4E50\u9986",-1),A={class:"bg-view"},j={class:"mt-5 overflow-hidden"},G=h({setup(r){const{menus:s,currentMenu:e,onTabClick:n}=y();return(m,a)=>{const p=B,d=w,f=T,b=V("RouterView");return o(),i("div",F,[N,l(f,{target:".music",offset:56},{default:_(()=>[c("div",A,[l(d,{modelValue:u(e),"onUpdate:modelValue":a[0]||(a[0]=t=>R(e)?e.value=t:null),onTabClick:u(n)},{default:_(()=>[(o(!0),i(E,null,g(u(s),t=>(o(),M(p,{key:t.name,label:t.label,name:t.name,class:"text-main"},null,8,["label","name"]))),128))]),_:1},8,["modelValue","onTabClick"])])]),_:1}),c("div",j,[l(b)])])}}});export{G as default};
