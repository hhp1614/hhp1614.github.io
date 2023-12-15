import{j as D,a as _,r as n,h as U,w as C,k,v as x,z as u,C as l,F as L,J as M,y as v,K as E,B}from"./@vue-562a0746.js";const V={chobitsu:"http://localhost/libs/chobitsu.js",chiiApp:"http://localhost/libs/chii/public/front_end/entrypoints/chii_app/chii_app.js"},N={chobitsu:"https://unpkg.com/chobitsu@1.4.6/dist/chobitsu.js",chiiApp:"https://unpkg.com/chii@1.8.0/public/front_end/entrypoints/chii_app/chii_app.js"},j=window.isLocal?V:N;function $(i={css:"",html:"",javascript:""}){const e=URL.createObjectURL(new Blob([i.css],{type:"text/css"})),s=URL.createObjectURL(new Blob([i.javascript],{type:"text/javascript"}));return setTimeout(()=>{URL.revokeObjectURL(e),URL.revokeObjectURL(s)},120),`<!DOCTYPE html>
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
            ${i.html}
            <script src="${j.chobitsu}"><\/script>
            <script src="${s}"><\/script>
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
    </html>`}function I(){return`<!DOCTYPE html>
        <html lang="zh">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="color-scheme" content="light dark" />
            <meta name="referrer" content="no-referrer">
            <title>控制台</title>
            <script type="module" src="${j.chiiApp}"><\/script>
        </head>
        <body class="undocked" id="-blink-dev-tools"></body>
    </html>`}const S={class:"frontend-index"},W={class:"source"},A={class:"label"},F={class:"preview"},P=["src"],z=["src"],H=D({__name:"FrontendIndex",setup(i){const e=_({html:"",javascript:"",css:""}),s=_({html:"",javascript:"",css:""}),a=n(),d=n(),b=n(!1),p=n(""),m=n(""),y=U(()=>{const t=$(s);return p.value=URL.createObjectURL(new Blob([t],{type:"text/html"})),p.value}),O=U(()=>{const t=I();return m.value=URL.createObjectURL(new Blob([t],{type:"text/html"})),`${m.value}#?embedded=${encodeURIComponent(location.origin)}`});window.addEventListener("message",t=>{var h,c,o,r,w,f;(h=a.value)!=null&&h.contentWindow&&t.source===((c=a.value)==null?void 0:c.contentWindow)&&((r=(o=d.value)==null?void 0:o.contentWindow)==null||r.postMessage(t.data,"*")),t.source===((w=d.value)==null?void 0:w.contentWindow)&&((f=a.value)==null||f.contentWindow.postMessage({event:"DEV",data:t.data},"*"))});function R(){URL.revokeObjectURL(p.value),b.value&&a.value.contentWindow.postMessage({event:"LOADED"},"*")}function T(){b.value=!0,URL.revokeObjectURL(m.value)}let g;return C(()=>e,()=>{clearTimeout(g),g=window.setTimeout(()=>{s.css=e.css,s.html=e.html,s.javascript=e.javascript},240)},{deep:!0}),k(()=>{e.html=`<div class="app">
    Hello world
</div>`,e.css=`.app {
    color: red;
}`,e.javascript="console.log('Hello world')"}),(t,h)=>{const c=x("Editor");return v(),u("div",S,[l("div",W,[(v(!0),u(L,null,M(Object.keys(e),o=>(v(),u(L,{key:o},[l("div",A,E(o),1),B(c,{class:"editor",modelValue:e[o],"onUpdate:modelValue":r=>e[o]=r,language:o},null,8,["modelValue","onUpdate:modelValue","language"])],64))),128))]),l("div",F,[l("iframe",{ref_key:"previewIframe",ref:a,src:y.value,class:"preview-page",onLoad:R,sandbox:"allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"},null,40,P),l("iframe",{id:"devtools",ref_key:"devtoolsIframe",ref:d,src:O.value,class:"preview-devtools",onLoad:T},null,40,z)])])}}});export{H as default};
