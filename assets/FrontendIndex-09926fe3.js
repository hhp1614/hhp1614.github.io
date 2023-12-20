import{j as D,r as l,w as x,A as b,y as _,a as R,h as U,k as I,B as w,I as j,K as S,u as h,Q as O,D as T,L as $}from"./@vue-b0826c04.js";import{_ as A}from"./Editor.vuevuetypescriptsetuptruelang-e7dff7ad.js";import"./vue-codemirror-6855a0c7.js";import"./codemirror-5234e8e4.js";import"./@codemirror-6cacace9.js";import"./@lezer-48ad2a7f.js";import"./crelt-7bb88e1d.js";import"./style-mod-fd510d21.js";import"./w3c-keyname-9fb136d3.js";import"./index-36575489.js";import"./pinia-d27202be.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-a796cf7c.js";const V=(d,e)=>{let t=!1,n,r;return Object.assign((...m)=>{r=m,!t&&(t=!0,n=setTimeout(()=>{d(...r),t=!1},e))},{clear:()=>{clearTimeout(n),t=!1}})},N=D({__name:"Resize",emits:["resize"],setup(d,{emit:e}){const t=l(),n=l(!1),r=V(a=>{if(!n.value)return;const i={width:t.value.offsetWidth,height:t.value.offsetHeight,x:a.clientX,y:a.clientY};e("resize",i)},10);function p(a){[...document.querySelectorAll("iframe")].forEach(i=>{i.style.pointerEvents=a?"auto":"none"})}function g(){n.value=!0,p(!1)}function m(){n.value=!1,p(!0)}return x(n,a=>{const i=a?"addEventListener":"removeEventListener";window[i]("mousemove",r),window[i]("mouseup",m)}),(a,i)=>(_(),b("div",{ref_key:"resizer",ref:t,class:"resizer",onMousedownPassive:g},null,544))}}),W={chobitsu:"http://localhost/libs/chobitsu.js",chiiApp:"http://localhost/libs/chii/public/front_end/entrypoints/chii_app/chii_app.js"},H={chobitsu:"https://unpkg.com/chobitsu@1.4.6/dist/chobitsu.js",chiiApp:"https://unpkg.com/chii@1.8.0/public/front_end/entrypoints/chii_app/chii_app.js"},k=window.isLocal?W:H;function P(d={css:"",html:"",javascript:""}){const e=URL.createObjectURL(new Blob([d.css],{type:"text/css"})),t=URL.createObjectURL(new Blob([d.javascript],{type:"text/javascript"}));return setTimeout(()=>{URL.revokeObjectURL(e),URL.revokeObjectURL(t)},120),`<!DOCTYPE html>
        <html lang="zh">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="color-scheme" content="light dark" />
            <title>预览</title>
            <style>*{text-shadow:0 0 1.5px}</style>
            <link rel="stylesheet" href="${e}" />
            <script>console.clear();<\/script>
        </head>
        <body>
            ${d.html}
            <script src="${k.chobitsu}"><\/script>
            <script src="${t}"><\/script>
            <script type="module">
                const sendToDevtools = message => {
                    window.parent.postMessage(JSON.stringify(message), '*');
                };
                let id = 0;
                const sendToChobitsu = message => {
                    message.id = 'tmp' + ++id;
                    chobitsu.sendRawMessage(JSON.stringify(message));
                };
                chobitsu.setOnMessage(message => {
                    if (message.includes('"id":"tmp')) return;
                    window.parent.postMessage(message, '*');
                });
                window.addEventListener('message', ({ data }) => {
                    try {
                        const { event, value } = data;
                        if (event === 'DEV') {
                            chobitsu.sendRawMessage(data.data);
                        } else if (event === 'LOADED') {
                            sendToDevtools({
                                method: 'Page.frameNavigated',
                                params: {
                                    frame: {
                                        id: '1',
                                        mimeType: 'text/html',
                                        securityOrigin: location.origin,
                                        url: location.href,
                                    },
                                    type: 'Navigation',
                                },
                            });
                            sendToChobitsu({ method: 'Network.enable' });
                            sendToDevtools({ method: 'Runtime.executionContextsCleared' });
                            sendToChobitsu({ method: 'Runtime.enable' });
                            sendToChobitsu({ method: 'Debugger.enable' });
                            sendToChobitsu({ method: 'DOMStorage.enable' });
                            sendToChobitsu({ method: 'DOM.enable' });
                            sendToChobitsu({ method: 'CSS.enable' });
                            sendToChobitsu({ method: 'Overlay.enable' });
                            sendToDevtools({ method: 'DOM.documentUpdated' });
                        }
                    } catch (e) {
                        console.error(e);
                    }
                });
            <\/script>
        </body>
    </html>`}function F(){return`<!DOCTYPE html>
        <html lang="zh">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="color-scheme" content="light dark" />
            <meta name="referrer" content="no-referrer">
            <title>控制台</title>
            <script type="module" src="${k.chiiApp}"><\/script>
        </head>
        <body class="undocked" id="-blink-dev-tools"></body>
    </html>`}const Y={class:"frontend-index"},J={class:"source"},q={class:"label"},K=["src"],Q=["src"],de=D({__name:"FrontendIndex",setup(d){const e=R({html:"",javascript:"",css:""}),t=R({html:"",javascript:"",css:""}),n=l(),r=l(),p=l(),g=l(!1),m=l(""),a=l(""),i=l(.625),M=U(()=>{const o=P(t);return m.value=URL.createObjectURL(new Blob([o],{type:"text/html"})),m.value}),C=U(()=>{const o=F();return a.value=URL.createObjectURL(new Blob([o],{type:"text/html"})),`${a.value}#?embedded=${encodeURIComponent(location.origin)}`});window.addEventListener("message",o=>{var u,v,f,s,c,L;(u=r.value)!=null&&u.contentWindow&&o.source===((v=r.value)==null?void 0:v.contentWindow)&&((s=(f=p.value)==null?void 0:f.contentWindow)==null||s.postMessage(o.data,"*")),o.source===((c=p.value)==null?void 0:c.contentWindow)&&((L=r.value)==null||L.contentWindow.postMessage({event:"DEV",data:o.data},"*"))});function E(){URL.revokeObjectURL(m.value),g.value&&r.value.contentWindow.postMessage({event:"LOADED"},"*")}function z(){g.value=!0,URL.revokeObjectURL(a.value)}function B(o,u){const v=n.value.getBoundingClientRect(),f=u-v.top-o/2,s=n.value.offsetHeight-o,c=f/s;i.value=c}let y;return x(e,()=>{clearTimeout(y),y=window.setTimeout(()=>{t.css=e.css,t.html=e.html,t.javascript=e.javascript},240)}),I(()=>{e.html=`<div class="app">
    Hello world
</div>`,e.css=`.app {
    color: red;
}`,e.javascript="console.log('Hello world')"}),(o,u)=>{const v=A,f=N;return _(),b("div",Y,[w("div",J,[(_(!0),b(j,null,S(Object.keys(h(e)),s=>(_(),b(j,{key:s},[w("div",q,$(s),1),T(v,{class:"editor",modelValue:h(e)[s],"onUpdate:modelValue":c=>h(e)[s]=c,language:s},null,8,["modelValue","onUpdate:modelValue","language"])],64))),128))]),w("div",{class:"preview",ref_key:"preview",ref:n},[w("iframe",{ref_key:"previewIframe",ref:r,style:O({flex:h(i)}),src:h(M),class:"preview-page",onLoad:E,sandbox:"allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"},null,44,K),T(f,{onResize:u[0]||(u[0]=({height:s,y:c})=>B(s,c))}),w("iframe",{id:"devtools",ref_key:"devtoolsIframe",ref:p,style:O({flex:1-h(i)}),src:h(C),class:"preview-devtools",onLoad:z},null,44,Q)],512)])}}});export{de as default};
