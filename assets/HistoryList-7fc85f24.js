import{j as $,a as V,r as g,l as r,x as p,A as n,z as s,O as u,D as m,F as y,v as b,H,I as C}from"./@vue-494dff21.js";import{g as P,r as L}from"./history-978854bf.js";import{t as S}from"./request-470f9b44.js";const N={class:"history-list"},T={class:"form"},j={class:"content"},q=["onClick"],A=["onClick"],E=["onClick"],O={class:"wrap"},G={width:"80"},W=$({__name:"HistoryList",setup(J){const k=[{value:"http"},{value:"https"}],t=V({title:"",scheme:"",host:"",port:"",page:1,size:28,ts:""}),w=[{prop:"title",label:"标题"},{prop:"scheme",label:"协议",width:50},{prop:"host",label:"域名",width:200},{prop:"port",label:"端口",width:50},{prop:"create_ts",label:"创建时间",width:140},{prop:"action",label:"操作",width:105,slot:!0}],v=g([]),_=g(0),i=V({visible:!1,title:"",row:{},data:[]});async function a(o){typeof o=="number"&&(t.page=o);const e=await P(t);v.value=e.data.data,t.page=e.data.current_page,_.value=e.data.total}function f(o){window.open(o,"_blank")}function D(o){i.visible=!0,i.row=o,i.data=[{label:"标题",value:o.title},{label:"协议",value:o.scheme},{label:"域名",value:o.host},{label:"端口",value:o.port},{label:"路径",value:o.path},{label:"查询参数",value:o.query},{label:"锚点",value:o.fragment},{label:"创建时间",value:o.create_ts},{label:"链接",value:o.url}]}async function K(o){if(!confirm("确定删除吗?"))return;(await L(o)).status&&S("删除成功","success")&&a()}function F(){t.title="",t.scheme="",t.host="",t.port="",a()}return a(),(o,e)=>{const c=r("FormInput"),I=r("FormSelect"),U=r("DatePicker"),h=r("BtnIcon"),x=r("DataTable"),z=r("Paginate"),B=r("Dialog");return b(),p(y,null,[n("div",N,[n("div",T,[s(c,{modelValue:t.title,"onUpdate:modelValue":e[0]||(e[0]=l=>t.title=l),class:"full",label:"标题",onKeydown:u(a,["enter"]),onClear:a,clearable:""},null,8,["modelValue","onKeydown"]),s(I,{modelValue:t.scheme,"onUpdate:modelValue":e[1]||(e[1]=l=>t.scheme=l),label:"协议",list:k,placeholder:"选择协议",onChange:e[2]||(e[2]=l=>a()),onClear:a,clearable:""},null,8,["modelValue"]),s(c,{modelValue:t.host,"onUpdate:modelValue":e[3]||(e[3]=l=>t.host=l),class:"full",label:"域名",onKeydown:u(a,["enter"]),onClear:a,clearable:""},null,8,["modelValue","onKeydown"]),s(c,{modelValue:t.port,"onUpdate:modelValue":e[4]||(e[4]=l=>t.port=l),type:"number",label:"端口",onKeydown:u(a,["enter"]),onClear:a,clearable:""},null,8,["modelValue","onKeydown"]),s(U,{modelValue:t.ts,"onUpdate:modelValue":e[5]||(e[5]=l=>t.ts=l),label:"创建时间",onKeydown:u(a,["enter"]),onClear:a,clearable:""},null,8,["modelValue","onKeydown"]),s(h,{icon:"search",tooltip:"查询",onClick:a}),s(h,{icon:"clear",onClick:F})]),n("div",j,[s(x,{cols:w,data:v.value},{action:m(({row:l})=>[n("span",{class:"link",onClick:d=>f(l.url)},"打开",8,q),n("span",{class:"link",onClick:d=>D(l)},"详情",8,A),n("span",{class:"link",onClick:d=>K(l.id)},"删除",8,E)]),_:1},8,["data"]),s(z,{page:t.page,size:t.size,total:_.value,onChange:a},null,8,["page","size","total"])])]),s(B,{title:"详情",modelValue:i.visible,"onUpdate:modelValue":e[7]||(e[7]=l=>i.visible=l)},{action:m(()=>[n("button",{onClick:e[6]||(e[6]=l=>f(i.row.url))},"打开链接")]),default:m(()=>[n("table",O,[(b(!0),p(y,null,H(i.data,({label:l,value:d})=>(b(),p("tr",null,[n("td",G,C(l),1),n("td",null,C(d),1)]))),256))])]),_:1},8,["modelValue"])],64)}}});export{W as default};
