import{j as _,r as t,q as V,y as f,B as o,A as a,E as b,K as x,x as n}from"./@vue-b15b3ec4.js";const h={class:"snippets"},U={class:"form"},y={class:"actions"},B={class:"input"},C={class:"output"},F={class:"content"},S=o("div",{class:"output"},"output",-1),E=_({__name:"Snippets",setup(R){const m=t([{label:"HTML",value:"html"},{label:"JS",value:"js"},{label:"PHP",value:"php"}]),u=t(""),d=t(""),p=t(""),c=t(""),i=t("");return(j,e)=>{const s=n("FormInput"),v=n("FormSelect"),r=n("Copy");return V(),f("div",h,[o("div",U,[a(s,{modelValue:u.value,"onUpdate:modelValue":e[0]||(e[0]=l=>u.value=l),label:"name",placeholder:"name",clearable:""},null,8,["modelValue"]),a(v,{modelValue:i.value,"onUpdate:modelValue":e[1]||(e[1]=l=>i.value=l),list:m.value,label:"scope",placeholder:"scope"},null,8,["modelValue","list"]),a(s,{modelValue:d.value,"onUpdate:modelValue":e[2]||(e[2]=l=>d.value=l),label:"prefix",placeholder:"prefix",clearable:""},null,8,["modelValue"]),a(s,{modelValue:p.value,"onUpdate:modelValue":e[3]||(e[3]=l=>p.value=l),label:"desc",placeholder:"desc",clearable:""},null,8,["modelValue"])]),o("div",y,[o("div",B,[a(r,{text:"inputRef.value"})]),o("div",C,[a(r,{text:"inputRef.value"})])]),o("div",F,[b(o("textarea",{"onUpdate:modelValue":e[4]||(e[4]=l=>c.value=l),class:"input",ref:"inputRef",placeholder:"代码片段"},null,512),[[x,c.value]]),S])])}}});export{E as default};
