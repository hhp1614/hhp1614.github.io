import{j as y,l as B,q as x,v as u,x as S,y as p,z as T,h as D,A as I,u as $,r as k,B as b,C as F,F as V,D as L,E as N,T as U,G as H,H as q,I as A,J as C,K as j}from"./@vue-38770cdf.js";import{d as w,c as J}from"./pinia-66418fe9.js";import{c as K,a as z}from"./vue-router-16d39139.js";import"./vue-demi-71ba0ef2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();const W=w("darkMode",{state:()=>({darkModeOn:!1}),actions:{async setDarkModeOn(e){return this.darkModeOn=e,this.darkModeOn}}}),G="modulepreload",Q=function(e,t){return new URL(e,t).href},R={},v=function(t,n,l){if(!n||n.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=Q(o,l),o in R)return;R[o]=!0;const i=o.endsWith(".css"),h=i?'[rel="stylesheet"]':"";if(!!l)for(let r=a.length-1;r>=0;r--){const s=a[r];if(s.href===o&&(!i||s.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${h}`))return;const d=document.createElement("link");if(d.rel=i?"stylesheet":G,i||(d.as="script",d.crossOrigin=""),d.href=o,document.head.appendChild(d),i)return new Promise((r,s)=>{d.addEventListener("load",r),d.addEventListener("error",()=>s(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},X=[{name:"format",meta:{title:"代码格式"},children:[{name:"json",meta:{title:"JSON",desc:"格式化 / 压缩"},component:()=>v(()=>import("./Json-ff0986e0.js"),["./Json-ff0986e0.js","./@vue-38770cdf.js","./jsonHighlight-91f3b943.js","./useAutofocus-df97093e.js","./pinia-66418fe9.js","./vue-demi-71ba0ef2.js","./vue-router-16d39139.js"],import.meta.url)}]},{name:"crypto",meta:{title:"编码加密"},children:[{name:"hash",meta:{title:"Hash",desc:"MD5 / SHA ..."},component:()=>v(()=>import("./Hash-fb8306bc.js"),["./Hash-fb8306bc.js","./@vue-38770cdf.js","./useAutofocus-df97093e.js","./crypto-js-629e539e.js"],import.meta.url)},{name:"base64",meta:{title:"Base64",desc:"编码 / 解码"},component:()=>v(()=>import("./Base64-4679d2da.js"),["./Base64-4679d2da.js","./@vue-38770cdf.js","./useAutofocus-df97093e.js"],import.meta.url)},{name:"encrypt",meta:{title:"Encrypt",desc:"AES / DES / RC4 ..."},component:()=>v(()=>import("./Encrypt-eff0bc89.js"),["./Encrypt-eff0bc89.js","./@vue-38770cdf.js","./crypto-js-629e539e.js"],import.meta.url)},{name:"unicode",meta:{title:"Unicode",desc:"UTF-8 / UTF-16"},component:()=>v(()=>import("./Unicode-bef3ecd0.js"),["./Unicode-bef3ecd0.js","./@vue-38770cdf.js"],import.meta.url)},{name:"html-entity",meta:{title:"HTML Entity",desc:"HTML 实体编码"},component:()=>v(()=>import("./HtmlEntity-dc779a41.js"),["./HtmlEntity-dc779a41.js","./@vue-38770cdf.js","./useAutofocus-df97093e.js","./he-3d9e6f0c.js","./crypto-js-629e539e.js"],import.meta.url)},{name:"url-encoding",meta:{title:"URL Encoding",desc:"URL 编码"},component:()=>v(()=>import("./UrlEncoding-398a324a.js"),["./UrlEncoding-398a324a.js","./@vue-38770cdf.js","./useAutofocus-df97093e.js"],import.meta.url)}]},{name:"generator",meta:{title:"生成器"},children:[{name:"snippets",meta:{title:"Snippets",desc:"VS Code 代码片段"},component:()=>v(()=>import("./Snippets-32f567e8.js"),["./Snippets-32f567e8.js","./@vue-38770cdf.js","./jsonHighlight-91f3b943.js","./useAutofocus-df97093e.js"],import.meta.url)}]}];function Y(e,t,n){let l="";const a=t.reduce((o,i,h)=>(i.children=i.children.map((m,d)=>(m.path=`${e}/${m.name}`,h===0&&d===0&&(l=m.path),m)),[...o,...i.children]),[]);return{path:e,redirect:l,component:n,children:a}}const Z=[{path:"/",component:()=>v(()=>import("./Home-72d3bfa6.js"),["./Home-72d3bfa6.js","./@vue-38770cdf.js","./Footer.vuevuetypescriptsetuptruelang-ad8deea4.js","./useAutofocus-df97093e.js","./pinia-66418fe9.js","./vue-demi-71ba0ef2.js","./vue-router-16d39139.js"],import.meta.url)},Y("/toolbox",X,()=>v(()=>import("./Layout-b398da63.js"),["./Layout-b398da63.js","./@vue-38770cdf.js","./Footer.vuevuetypescriptsetuptruelang-ad8deea4.js","./pinia-66418fe9.js","./vue-demi-71ba0ef2.js","./vue-router-16d39139.js"],import.meta.url))],E=K({history:z(),routes:Z}),Ve=w("tab",{state:()=>({tabs:[],active:{path:"",name:""}}),actions:{gotoTab(e){e.path!=="/"&&e.path!==this.active.path&&(this.tabs.every(t=>t.path!==e.path)&&this.tabs.push(e),this.active=e,E.push(e.path))},removeTab(e){if(this.tabs.length===1)return;let t=this.tabs.findIndex(n=>n.path===e);this.tabs.splice(t,1),this.active.path===e&&(t===this.tabs.length&&t--,this.active=this.tabs[t],E.push(this.active.path))},clearTab(){this.tabs=this.tabs.filter(e=>e.path===this.active.path)}}}),g={id:Date.now(),title:"Tab",text:""},Ee=w("json",{state:()=>({tabs:[{...g}],activeTabId:g.id}),getters:{activeTabText:e=>e.tabs.find(t=>t.id===e.activeTabId).text},actions:{changeTabName(e,t,n){t!==n&&(this.tabs.find(l=>l.id===e).title=n)},addTab(e){const t={...g};t.id=Date.now(),this.tabs.push(t),this.activeTabId=t.id,e&&e.focus()},changeTab(e){this.activeTabId!==e&&(this.activeTabId=e)},changeTabText(e){const t=this.tabs.find(n=>n.id===this.activeTabId);t.text=e},removeTab(e){const t=this.tabs.findIndex(n=>n.id===e);if(this.tabs.splice(t,1),this.tabs.length===0&&this.addTab(),this.activeTabId===e){const n=Math.min(t+1,this.tabs.length-1);this.activeTabId=this.tabs[n].id}},clearTab(e){const t={...g};this.tabs=[t],this.activeTabId=t.id,e&&e.focus()}}}),ee=y({__name:"App",setup(e){function t(n){W().setDarkModeOn(n.matches)}return B(()=>{const n=window.matchMedia("(prefers-color-scheme: dark");t(n),n.addEventListener("change",t)}),(n,l)=>{const a=S("router-view");return u(),x(a)}}}),M=y({__name:"Icon",props:{name:{type:String,require:!0}},setup(e){const t=e;return(n,l)=>(u(),p("i",{class:T(["iconfont",`icon-${t.name}`])},null,2))}}),te=["tooltip"],P=y({__name:"BtnIcon",props:{icon:{type:String,required:!0},tooltip:{type:String,default:""}},setup(e){const t=e,n=new Map([["copy","复制"],["clear","清空"]]),l=D(()=>n.get(t.icon)??"");return(a,o)=>(u(),p("button",{tooltip:e.tooltip||$(l)},[I(M,{name:e.icon},null,8,["name"])],8,te))}});function ne(e){return navigator.clipboard?navigator.clipboard.writeText(e):new Promise(t=>{const n=document.createElement("textarea");document.body.appendChild(n),n.style.position="fixed",n.style.clip="rect(0 0 0 0)",n.style.top="10px",n.value=e,n.select(),document.execCommand("copy",!0),document.body.removeChild(n),t(!0)})}const oe=y({__name:"BtnCopy",props:{text:{type:String,default:""}},setup(e){return(t,n)=>(u(),x(P,{icon:"copy",onClick:n[0]||(n[0]=l=>$(ne)(e.text))}))}}),ae=["tooltip"],se=["type","placeholder","readonly","disabled","value"],le=y({__name:"FormInput",props:{type:{type:String,default:"text"},placeholder:String,label:String,readonly:Boolean,disabled:Boolean,clearable:Boolean,modelValue:String},emits:["update:modelValue"],setup(e,{emit:t}){const n=k();function l(a){const o=a.target;t("update:modelValue",o.value)}return(a,o)=>{const i=S("Icon");return u(),p("div",{class:"form-item",onClick:o[2]||(o[2]=(...h)=>{var m,d;return((m=n.value)==null?void 0:m.focus)&&((d=n.value)==null?void 0:d.focus(...h))})},[b("div",{class:"prefix",tooltip:e.label},[I(i,{name:"pencil"})],8,ae),b("input",{ref_key:"inputRef",ref:n,type:e.type,placeholder:e.placeholder,readonly:e.readonly,disabled:e.disabled,value:e.modelValue,onInput:o[0]||(o[0]=h=>l(h))},null,40,se),e.clearable?(u(),p("span",{key:0,class:"close",onClick:o[1]||(o[1]=h=>t("update:modelValue",""))},"×")):F("",!0)])}}}),ie=["tooltip"],re=["placeholder","value"],ce=["onClick"],ue=y({__name:"FormSelect",props:{placeholder:{type:String,default:"请选择"},label:String,clearable:Boolean,modelValue:String,list:{type:Array,default:[{value:""}]}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,l=k(),a=k(!1),o=k(!1),i=D(()=>{var r;return((r=n.list.find(s=>s.value===n.modelValue))==null?void 0:r.label)??""});function h(r){const s=r.target,f=n.list.find(c=>c.label===s.value);t("update:modelValue",f.value)}function m(r){t("update:modelValue",r),t("change",r)}function d(r){const s=n.list.findIndex(f=>f.value===n.modelValue)??0;if(r.key==="Enter")a.value=!1;else if(r.key==="ArrowDown"){const f=s>=n.list.length-1?0:s+1;m(n.list[f].value)}else if(r.key==="ArrowUp"){const f=s<=0?n.list.length-1:s-1;m(n.list[f].value)}}return(r,s)=>{const f=S("Icon");return u(),p("div",{class:"form-item",onClick:s[7]||(s[7]=(...c)=>l.value.focus&&l.value.focus(...c)),onMouseover:s[8]||(s[8]=c=>o.value=!0),onMouseleave:s[9]||(s[9]=c=>o.value=!1)},[b("div",{class:"prefix",tooltip:e.label},[I(f,{name:"pencil"})],8,ie),b("input",{ref_key:"inputRef",ref:l,placeholder:e.placeholder,value:$(i)||e.modelValue,onFocus:s[0]||(s[0]=c=>a.value=!0),onBlur:s[1]||(s[1]=c=>a.value=!1),onInput:s[2]||(s[2]=c=>h(c)),onKeydown:s[3]||(s[3]=c=>d(c)),readonly:""},null,40,re),e.clearable?(u(),p(V,{key:0},[o.value?(u(),p("span",{key:0,class:"close",onClick:s[4]||(s[4]=L(c=>t("update:modelValue",""),["stop"]))},"×")):(u(),x(f,{key:1,class:T(["collapse",{open:a.value}]),name:"arrow-down"},null,8,["class"]))],64)):(u(),x(f,{key:1,class:T(["collapse",{open:a.value}]),name:"arrow-down"},null,8,["class"])),I(U,{name:"slide-fade"},{default:N(()=>[H(b("div",{class:"select-list",onTest:m,onClick:s[5]||(s[5]=c=>c.stopPropagation()),onMouseover:s[6]||(s[6]=L(c=>o.value=!1,["stop"]))},[(u(!0),p(V,null,A(e.list,({label:c,value:_})=>(u(),p("div",{key:_,class:T(["select-option",{selected:_===e.modelValue}]),onClick:ge=>m(_)},C(c||_),11,ce))),128))],544),[[q,a.value]])]),_:1})],32)}}}),de=["label"],me=["checked","onChange"],pe=["tooltip"],fe=y({__name:"FormRadio",props:{modelValue:[String,Number],list:{type:Array,default:[{value:""}]},label:String},emits:["update:modelValue","change"],setup(e,{emit:t}){function n(l){t("update:modelValue",l),t("change",l)}return(l,a)=>(u(),p("div",{class:"form-item",label:e.label},[(u(!0),p(V,null,A(e.list,o=>(u(),p("label",{key:o.value,class:"radio"},[b("input",{type:"radio",value:"{{ item.value }}",checked:e.modelValue===o.value,onChange:i=>n(o.value)},null,40,me),b("span",{tooltip:o.desc},C(o.label||o.value),9,pe)]))),128))],8,de))}}),he={class:"form-item"},ve={class:"checkbox"},be=["value"],ye=y({__name:"FormCheckbox",props:{modelValue:Boolean,label:String,list:{type:Array,default:[{value:""}]}},emits:["update:modelValue","change"],setup(e,{emit:t}){function n(l){t("update:modelValue",!l),t("change",!l)}return(l,a)=>(u(),p("div",he,[b("label",ve,[b("input",{type:"checkbox",value:e.modelValue,onChange:a[0]||(a[0]=o=>n(e.modelValue))},null,40,be),b("span",null,C(e.label),1)])]))}}),O={Icon:M,BtnIcon:P,BtnCopy:oe,FormInput:le,FormSelect:ue,FormRadio:fe,FormCheckbox:ye},_e={install(e){for(const t in O)e.component(t,O[t])}};j(ee).use(_e).use(J()).use(E).mount("#app");export{Ee as a,E as r,X as t,Ve as u};
