import{j as f,h as g,l as p,x as a,A as s,F as T,H as _,u as t,z as l,v as r,y as C,O as h,I as k,C as y}from"./@vue-494dff21.js";import{b as B}from"./index-b62b3608.js";import{j as I}from"./jsonHighlight-91f3b943.js";import{u as $}from"./useAutofocus-8c90add0.js";import"./pinia-2e75a51d.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-7044920f.js";const J={class:"json has-tabs"},N={class:"tabs"},S=["onBlur","onClick"],H=["onClick"],j={class:"actions"},O={class:"input"},w={class:"output"},L={class:"content"},M=["value"],z={class:"output"},A=["innerHTML"],P=f({__name:"Json",setup(E){const u=$(),e=B();function c(d,n=!1){if(!d)return"";try{return JSON.stringify(JSON.parse(d),null,n?0:4)}catch{return"Error: is not valid JSON"}}const x=g(()=>I(c(e.activeTabText)));return(d,n)=>{const b=p("Icon"),v=p("BtnIcon"),m=p("BtnCopy");return r(),a("div",J,[s("nav",N,[(r(!0),a(T,null,_(t(e).tabs,o=>(r(),a("div",{class:C(["item",{active:o.id===t(e).activeTabId}]),key:o.id},[s("span",{class:"title",onBlur:i=>t(e).changeTabName(o.id,o.title,i.target.innerText),onKeydown:n[0]||(n[0]=h(i=>i.target.blur(),["enter"])),onClick:i=>t(e).changeTab(o.id),contenteditable:""},k(o.title),41,S),s("span",{class:"close",tooltip:"关闭标签",onClick:y(i=>t(e).removeTab(o.id),["stop"])},"×",8,H)],2))),128)),s("button",{class:"item",onClick:n[1]||(n[1]=o=>t(e).addTab(t(u))),tooltip:"添加标签"},[l(b,{name:"plus"})]),l(v,{class:"item",icon:"clear",tooltip:"清空标签",onClick:n[2]||(n[2]=o=>t(e).clearTab(t(u)))})]),s("div",j,[s("div",O,[l(m,{text:t(e).activeTabText},null,8,["text"]),l(v,{class:"item",icon:"clear",onClick:n[3]||(n[3]=o=>t(e).changeTabText(""))}),s("button",{onClick:n[4]||(n[4]=o=>t(e).changeTabText(c(t(e).activeTabText)))},"格式化"),s("button",{onClick:n[5]||(n[5]=o=>t(e).changeTabText(c(t(e).activeTabText,!0)))},"压缩")]),s("div",w,[l(m,{text:c(t(e).activeTabText)},null,8,["text"])])]),s("div",L,[s("textarea",{class:"input",ref_key:"inputRef",ref:u,value:t(e).activeTabText,onInput:n[6]||(n[6]=o=>t(e).changeTabText(o.target.value))},null,40,M),s("div",z,[(r(!0),a(T,null,_(x.value.split(`
`),o=>(r(),a("div",{class:"code-text",innerHTML:o},null,8,A))),256))])])])}}});export{P as default};