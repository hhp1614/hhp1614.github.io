import{b as g,_ as v,a as b,c as w}from"./history-603a9ed9.js";import{_ as C}from"./BtnIcon.vuevuetypescriptsetuptruelang-4d4ac8a4.js";import{_ as k}from"./FormInput.vuevuetypescriptsetuptruelang-d869f523.js";import{j as H,a as B,r as m,A as V,B as r,D as n,u as s,G as $,H as z,y as x}from"./@vue-b0826c04.js";import{t as D}from"./request-470f9b44.js";import"./Icon.vuevuetypescriptsetuptruelang-5f3c4842.js";const K={class:"history-host"},F={class:"form"},I={class:"content"},N=["onClick"],J=H({__name:"HistoryHost",setup(j){const t=B({host:"",page:1,size:28}),p=[{prop:"host",label:"域名"},{prop:"count",label:"访问次数",width:300},{prop:"action",label:"操作",width:100,slot:!0}],i=m([]),l=m(0);async function o(e){typeof e=="number"&&(t.page=e);const a=await g(t);i.value=a.data.data,t.page=a.data.current_page,l.value=a.data.total}async function d(e){if(!confirm("确定删除吗?"))return;(await w(e)).status&&D("删除成功","success")&&o()}function u(){t.host="",o()}return o(),(e,a)=>{const f=k,_=C,h=v,y=b;return x(),V("div",K,[r("div",F,[n(f,{modelValue:s(t).host,"onUpdate:modelValue":a[0]||(a[0]=c=>s(t).host=c),class:"full",label:"域名",onKeydown:$(o,["enter"]),onClear:o,clearable:""},null,8,["modelValue","onKeydown"]),n(_,{icon:"search",tooltip:"查询",onClick:o}),n(_,{icon:"clear",onClick:u})]),r("div",I,[n(h,{cols:p,data:s(i)},{action:z(({row:c})=>[r("span",{class:"link",onClick:A=>d(c.id)},"删除",8,N)]),_:1},8,["data"]),n(y,{page:s(t).page,size:s(t).size,total:s(l),onChange:o},null,8,["page","size","total"])])])}}});export{J as default};