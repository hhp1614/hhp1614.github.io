import{j as _,v as g,x as f,A as s,I as $,u as D,K as k,r as x}from"./@vue-494dff21.js";const y=s("a",{href:"https://github.com/hhp1614",target:"_blank"},"hhp1614",-1),T=_({__name:"Footer",setup(S){function a(){const n=x(""),e=t=>String(t).padStart(2,"0"),o=()=>{const t=new Date,c=t.getFullYear(),u=t.getMonth()+1,i=t.getDate(),p=t.getDay(),d=e(t.getHours()),m=e(t.getMinutes()),h=e(t.getSeconds()),l="日一二三四五六";return n.value=`${c}年${u}月${i}日 星期${l[p]} ${d}:${m}:${h}`,setTimeout(()=>o(),1e3),n};return o()}const r=a();return(n,e)=>(g(),f("footer",null,[s("span",null,$(D(r)),1),k("   "),y]))}});export{T as _};