import{_ as v}from"./Editor.vuevuetypescriptsetuptruelang-e7dff7ad.js";import{_ as b}from"./BtnCopy.vuevuetypescriptsetuptruelang-1214ca86.js";import{_ as f}from"./BtnIcon.vuevuetypescriptsetuptruelang-1d4502b0.js";import{_ as g}from"./Icon.vuevuetypescriptsetuptruelang-5f3c4842.js";import{j as x,h as C,A as c,B as s,I as h,K as k,u as e,D as a,y as m,M as $,G as y,L as B,N}from"./@vue-b0826c04.js";import{b as J}from"./index-36575489.js";import"./vue-codemirror-6855a0c7.js";import"./codemirror-5234e8e4.js";import"./@codemirror-6cacace9.js";import"./@lezer-48ad2a7f.js";import"./crelt-7bb88e1d.js";import"./style-mod-fd510d21.js";import"./w3c-keyname-9fb136d3.js";import"./pinia-d27202be.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-a796cf7c.js";const S={class:"json has-tabs"},I={class:"tabs"},O=["onBlur","onClick"],w=["onClick"],E={class:"actions"},K={class:"input"},j={class:"output"},D={class:"content"},tt=x({__name:"Json",setup(L){const t=J(),_=C(()=>r(t.activeTabText));function r(i,o=!1){if(i=i.trim(),!i)return"";try{return JSON.stringify(JSON.parse(i),null,o?0:4)}catch{return"Error: is not valid JSON"}}return(i,o)=>{const T=g,u=f,d=b,p=v;return m(),c("div",S,[s("nav",I,[(m(!0),c(h,null,k(e(t).tabs,n=>(m(),c("div",{class:$(["item",{active:n.id===e(t).activeTabId}]),key:n.id},[s("span",{class:"title",onBlur:l=>e(t).changeTabName(n.id,n.title,l.target.innerText),onKeydown:o[0]||(o[0]=y(l=>l.target.blur(),["enter"])),onClick:l=>e(t).changeTab(n.id),contenteditable:""},B(n.title),41,O),s("span",{class:"close",tooltip:"关闭标签",onClick:N(l=>e(t).removeTab(n.id),["stop"])},"×",8,w)],2))),128)),s("button",{class:"item",onClick:o[1]||(o[1]=(...n)=>e(t).addTab&&e(t).addTab(...n)),tooltip:"添加标签"},[a(T,{name:"plus"})]),a(u,{class:"item",icon:"clear",tooltip:"清空标签",onClick:e(t).clearTab},null,8,["onClick"])]),s("div",E,[s("div",K,[a(d,{text:e(t).activeTabText},null,8,["text"]),a(u,{class:"item",icon:"clear",onClick:o[2]||(o[2]=n=>e(t).changeTabText(""))}),s("button",{onClick:o[3]||(o[3]=n=>e(t).changeTabText(r(e(t).activeTabText)))},"格式化"),s("button",{onClick:o[4]||(o[4]=n=>e(t).changeTabText(r(e(t).activeTabText,!0)))},"压缩")]),s("div",j,[a(d,{text:r(e(t).activeTabText)},null,8,["text"])])]),s("div",D,[a(p,{class:"input","model-value":e(t).activeTabText,language:"json",placeholder:"输入 JSON 数据",onChange:e(t).changeTabText,autofocus:""},null,8,["model-value","onChange"]),a(p,{class:"output","model-value":e(_),language:"json",disabled:""},null,8,["model-value"])])])}}});export{tt as default};
