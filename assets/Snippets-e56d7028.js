import{j as V,a as y,h as m,l as i,x as p,A as n,z as l,E as h,M as g,F as B,H as F,v as c}from"./@vue-c550c1ff.js";import{j as C}from"./jsonHighlight-91f3b943.js";import{u as j}from"./useAutofocus-426b52e8.js";const k={class:"snippets"},H={class:"form"},U={class:"actions"},I={class:"input"},M={class:"output"},S={class:"content"},L={class:"output"},N=["innerHTML"],R=V({__name:"Snippets",setup(T){const f=j(),_=[{value:"html"},{value:"js"},{value:"php"}],e=y({name:"",prefix:"",desc:"",body:"",scope:"html"}),d=m(()=>{const a=e.body.split(`
`).map(s=>s.replace(/\$/g,"\\$")),o={[e.name]:{scope:e.scope,prefix:e.prefix,description:e.desc,body:a.length===1?a.pop():a}};return JSON.stringify(o,null,4)}),v=m(()=>C(d.value));function x(){e.name="",e.prefix="",e.desc="",e.scope="html"}return(a,o)=>{const s=i("FormInput"),b=i("FormSelect"),r=i("BtnIcon"),u=i("BtnCopy");return c(),p("div",k,[n("div",H,[l(s,{modelValue:e.name,"onUpdate:modelValue":o[0]||(o[0]=t=>e.name=t),label:"name",clearable:""},null,8,["modelValue"]),l(b,{modelValue:e.scope,"onUpdate:modelValue":o[1]||(o[1]=t=>e.scope=t),list:_,label:"scope",clearable:""},null,8,["modelValue"]),l(s,{modelValue:e.prefix,"onUpdate:modelValue":o[2]||(o[2]=t=>e.prefix=t),label:"prefix",clearable:""},null,8,["modelValue"]),l(s,{modelValue:e.desc,"onUpdate:modelValue":o[3]||(o[3]=t=>e.desc=t),label:"desc",clearable:""},null,8,["modelValue"]),l(r,{icon:"clear",onClick:x})]),n("div",U,[n("div",I,[l(u,{text:e.body},null,8,["text"]),l(r,{class:"item",icon:"clear",onClick:o[4]||(o[4]=t=>e.body="")})]),n("div",M,[l(u,{text:d.value},null,8,["text"])])]),n("div",S,[h(n("textarea",{"onUpdate:modelValue":o[5]||(o[5]=t=>e.body=t),class:"input",ref_key:"inputRef",ref:f,placeholder:"代码片段"},null,512),[[g,e.body]]),n("div",L,[(c(!0),p(B,null,F(v.value.split(`
`),t=>(c(),p("div",{class:"code-text",innerHTML:t},null,8,N))),256))])])])}}});export{R as default};
