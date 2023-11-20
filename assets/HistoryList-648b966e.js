import{j as B,a as h,r as k,l as r,x as m,A as n,z as s,O as c,D as b,F as V,v,H,I as g}from"./@vue-494dff21.js";import{g as P,r as L}from"./history-978854bf.js";import{t as S}from"./request-470f9b44.js";const N={class:"history-list"},T={class:"form"},j={class:"content"},q=["onClick"],A=["onClick"],E=["onClick"],O=["onClick"],G={class:"wrap"},J={width:"80"},X=B({__name:"HistoryList",setup(M){const y=[{value:"http"},{value:"https"}],l=h({title:"",scheme:"",host:"",port:"",page:1,size:28,ts:""}),w=[{prop:"title",label:"标题"},{prop:"scheme",label:"协议",width:50},{prop:"host",label:"域名",width:200},{prop:"port",label:"端口",width:50},{prop:"create_ts",label:"创建时间",width:140},{prop:"action",label:"操作",width:170,slot:!0}],_=k([]),f=k(0),i=h({visible:!1,title:"",row:{},data:[]});async function a(o){typeof o=="number"&&(l.page=o);const e=await P(l);_.value=e.data.data,l.page=e.data.current_page,f.value=e.data.total}function d(o,e=!1){window.open(o,e?"_blank":"_self")}function D(o){i.visible=!0,i.row=o,i.data=[{label:"标题",value:o.title},{label:"协议",value:o.scheme},{label:"域名",value:o.host},{label:"端口",value:o.port},{label:"路径",value:o.path},{label:"查询参数",value:o.query},{label:"锚点",value:o.fragment},{label:"创建时间",value:o.create_ts},{label:"链接",value:o.url}]}async function K(o){if(!confirm("确定删除吗?"))return;(await L(o)).status&&S("删除成功","success")&&a()}function F(){l.title="",l.scheme="",l.host="",l.port="",a()}return a(),(o,e)=>{const p=r("FormInput"),$=r("FormSelect"),I=r("DatePicker"),C=r("BtnIcon"),U=r("DataTable"),x=r("Paginate"),z=r("Dialog");return v(),m(V,null,[n("div",N,[n("div",T,[s(p,{modelValue:l.title,"onUpdate:modelValue":e[0]||(e[0]=t=>l.title=t),class:"full",label:"标题",onKeydown:c(a,["enter"]),onClear:a,clearable:""},null,8,["modelValue","onKeydown"]),s($,{modelValue:l.scheme,"onUpdate:modelValue":e[1]||(e[1]=t=>l.scheme=t),label:"协议",list:y,placeholder:"选择协议",onChange:e[2]||(e[2]=t=>a()),onClear:a,clearable:""},null,8,["modelValue"]),s(p,{modelValue:l.host,"onUpdate:modelValue":e[3]||(e[3]=t=>l.host=t),class:"full",label:"域名",onKeydown:c(a,["enter"]),onClear:a,clearable:""},null,8,["modelValue","onKeydown"]),s(p,{modelValue:l.port,"onUpdate:modelValue":e[4]||(e[4]=t=>l.port=t),type:"number",label:"端口",onKeydown:c(a,["enter"]),onClear:a,clearable:""},null,8,["modelValue","onKeydown"]),s(I,{modelValue:l.ts,"onUpdate:modelValue":e[5]||(e[5]=t=>l.ts=t),label:"创建时间",onKeydown:c(a,["enter"]),onClear:a,clearable:""},null,8,["modelValue","onKeydown"]),s(C,{icon:"search",tooltip:"查询",onClick:a}),s(C,{icon:"clear",onClick:F})]),n("div",j,[s(U,{cols:w,data:_.value},{action:b(({row:t})=>[n("span",{class:"link",onClick:u=>d(t.url)},"打开",8,q),n("span",{class:"link",onClick:u=>d(t.url,!0)},"新标签页",8,A),n("span",{class:"link",onClick:u=>D(t)},"详情",8,E),n("span",{class:"link",onClick:u=>K(t.id)},"删除",8,O)]),_:1},8,["data"]),s(x,{page:l.page,size:l.size,total:f.value,onChange:a},null,8,["page","size","total"])])]),s(z,{title:"详情",modelValue:i.visible,"onUpdate:modelValue":e[8]||(e[8]=t=>i.visible=t)},{action:b(()=>[n("button",{onClick:e[6]||(e[6]=t=>d(i.row.url))},"当前窗口打开"),n("button",{onClick:e[7]||(e[7]=t=>d(i.row.url,!0))},"新标签页打开")]),default:b(()=>[n("table",G,[(v(!0),m(V,null,H(i.data,({label:t,value:u})=>(v(),m("tr",null,[n("td",J,g(t),1),n("td",null,g(u),1)]))),256))])]),_:1},8,["modelValue"])],64)}}});export{X as default};
