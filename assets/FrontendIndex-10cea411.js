import{j as E,a as U,r as i,h as L,w as z,k as N,v as R,z as b,C as d,F as j,J as V,N as O,B as T,y as w,K as I}from"./@vue-562a0746.js";const S={chobitsu:"http://localhost/libs/chobitsu.js",chiiApp:"http://localhost/libs/chii/public/front_end/entrypoints/chii_app/chii_app.js"},$={chobitsu:"https://unpkg.com/chobitsu@1.4.6/dist/chobitsu.js",chiiApp:"https://unpkg.com/chii@1.8.0/public/front_end/entrypoints/chii_app/chii_app.js"},C=window.isLocal?S:$;function W(p={css:"",html:"",javascript:""}){const e=URL.createObjectURL(new Blob([p.css],{type:"text/css"})),a=URL.createObjectURL(new Blob([p.javascript],{type:"text/javascript"}));return setTimeout(()=>{URL.revokeObjectURL(e),URL.revokeObjectURL(a)},120),`<!DOCTYPE html>
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
            ${p.html}
            <script src="${C.chobitsu}"><\/script>
            <script src="${a}"><\/script>
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
    </html>`}function A(){return`<!DOCTYPE html>
        <html lang="zh">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="color-scheme" content="light dark" />
            <meta name="referrer" content="no-referrer">
            <title>控制台</title>
            <script type="module" src="${C.chiiApp}"><\/script>
        </head>
        <body class="undocked" id="-blink-dev-tools"></body>
    </html>`}const F={class:"frontend-index"},H={class:"source"},P={class:"label"},J=["src"],Y=["src"],q=E({__name:"FrontendIndex",setup(p){const e=U({html:"",javascript:"",css:""}),a=U({html:"",javascript:"",css:""}),m=i(),r=i(),u=i(),f=i(!1),h=i(""),v=i(""),g=i(.625),D=L(()=>{const t=W(a);return h.value=URL.createObjectURL(new Blob([t],{type:"text/html"})),h.value}),k=L(()=>{const t=A();return v.value=URL.createObjectURL(new Blob([t],{type:"text/html"})),`${v.value}#?embedded=${encodeURIComponent(location.origin)}`});window.addEventListener("message",t=>{var n,l,c,o,s,y;(n=r.value)!=null&&n.contentWindow&&t.source===((l=r.value)==null?void 0:l.contentWindow)&&((o=(c=u.value)==null?void 0:c.contentWindow)==null||o.postMessage(t.data,"*")),t.source===((s=u.value)==null?void 0:s.contentWindow)&&((y=r.value)==null||y.contentWindow.postMessage({event:"DEV",data:t.data},"*"))});function x(){URL.revokeObjectURL(h.value),f.value&&r.value.contentWindow.postMessage({event:"LOADED"},"*")}function M(){f.value=!0,URL.revokeObjectURL(v.value)}function B(t,n){const l=m.value.getBoundingClientRect(),c=n-l.top-t/2,o=m.value.offsetHeight-t,s=c/o;g.value=s}let _;return z(e,()=>{clearTimeout(_),_=window.setTimeout(()=>{a.css=e.css,a.html=e.html,a.javascript=e.javascript},240)}),N(()=>{e.html=`<div class="app">
    Hello world
</div>`,e.css=`.app {
    color: red;
}`,e.javascript="console.log('Hello world')"}),(t,n)=>{const l=R("Editor"),c=R("Resize");return w(),b("div",F,[d("div",H,[(w(!0),b(j,null,V(Object.keys(e),o=>(w(),b(j,{key:o},[d("div",P,I(o),1),T(l,{class:"editor",modelValue:e[o],"onUpdate:modelValue":s=>e[o]=s,language:o},null,8,["modelValue","onUpdate:modelValue","language"])],64))),128))]),d("div",{class:"preview",ref_key:"preview",ref:m},[d("iframe",{ref_key:"previewIframe",ref:r,style:O({flex:g.value}),src:D.value,class:"preview-page",onLoad:x,sandbox:"allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"},null,44,J),T(c,{onResize:n[0]||(n[0]=({height:o,y:s})=>B(o,s))}),d("iframe",{id:"devtools",ref_key:"devtoolsIframe",ref:u,style:O({flex:1-g.value}),src:k.value,class:"preview-devtools",onLoad:M},null,44,Y)],512)])}}});export{q as default};
