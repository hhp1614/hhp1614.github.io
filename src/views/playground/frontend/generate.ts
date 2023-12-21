const localMap = {
    chobitsu: `http://localhost/libs/chobitsu.js`,
    chiiApp: `http://localhost/libs/chii/public/front_end/entrypoints/chii_app/chii_app.js`,
};
const unpkgMap = {
    // esModuleShims: 'https://unpkg.com/es-module-shims@1.7.0/dist/es-module-shims.js',
    chobitsu: 'https://unpkg.com/chobitsu@1.4.6/dist/chobitsu.js',
    chiiApp: 'https://unpkg.com/chii@1.8.0/public/front_end/entrypoints/chii_app/chii_app.js',
};

const libsMap = window.isLocal ? localMap : unpkgMap;

export function generatePage(code = { css: '', html: '', javascript: '' }) {
    const css = URL.createObjectURL(new Blob([code.css], { type: 'text/css' }));
    const js = URL.createObjectURL(new Blob([code.javascript], { type: 'text/javascript' }));
    setTimeout(() => {
        URL.revokeObjectURL(css);
        URL.revokeObjectURL(js);
    }, 120);
    return `<!DOCTYPE html>
        <html lang="zh">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="color-scheme" content="light dark" />
            <title>预览</title>
            <style>*{text-shadow:0 0 1.5px}</style>
            <link rel="stylesheet" href="${css}" />
            <script>console.clear();</script>
        </head>
        <body>
            ${code.html}
            <script src="${libsMap.chobitsu}"></script>
            <script src="${js}"></script>
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
            </script>
        </body>
    </html>`;
}

export function generateDevtool() {
    return `<!DOCTYPE html>
        <html lang="zh">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="color-scheme" content="light dark" />
            <meta name="referrer" content="no-referrer">
            <title>控制台</title>
            <script type="module" src="${libsMap.chiiApp}"></script>
        </head>
        <body class="undocked" id="-blink-dev-tools"></body>
    </html>`;
}
