---
title: 父子窗口通信（postMessage）
date: 2019-09-12
tags:
 - JavaScript
 - CORS
categories:
 - JavaScript
---

## 发送消息

```js
otherWindow.postMessage(message, targetOrigin, [transfer]);
```

`otherWindow`

其他窗口的一个引用，比如iframe的contentWindow属性、执行[`window.open`](https://developer.mozilla.org/zh-CN/docs/DOM/window.open "DOM/window.open")返回的窗口对象、或者是命名过或数值索引的[`window.frames`](https://developer.mozilla.org/zh-CN/docs/DOM/window.frames "DOM/window.frames")。

`message`

将要发送到其他 window的数据。它将会被[结构化克隆算法](https://developer.mozilla.org/zh-CN/docs/DOM/The_structured_clone_algorithm)序列化。这意味着你可以不受什么限制的将数据对象安全的传送给目标窗口而无需自己序列化。

`targetOrigin`

通过窗口的origin属性来指定哪些窗口能接收到消息事件，其值可以是字符串"`*`"（表示无限制）或者一个URI。在发送消息的时候，如果目标窗口的协议、主机地址或端口这三者的任意一项不匹配`targetOrigin`提供的值，那么消息就不会被发送；只有三者完全匹配，消息才会被发送。这个机制用来控制消息可以发送到哪些窗口；例如，当用`postMessage`传送密码时，这个参数就显得尤为重要，必须保证它的值与这条包含密码的信息的预期接受者的`origin`属性完全一致，来防止密码被恶意的第三方截获。**如果你明确的知道消息应该发送到哪个窗口，那么请始终提供一个有确切值的`targetOrigin`，而不是`*`。不提供确切的目标将导致数据泄露到任何对数据感兴趣的恶意站点。**

- > `transfer` 可选

是一串和 message 同时传递的 [`Transferable`](https://developer.mozilla.org/zh-CN/docs/Web/API/Transferable "Transferable 接口代表一个能在不同可执行上下文中相互传递的对象，列如主线程和 Worker 间。") 对象. 这些对象的所有权将被转移给消息的接收方，而发送一方将不再保有所有权。

## 接收消息

```js
window.addEventListener("message", receiveMessage, false);

function receiveMessage(event) {
  var origin = event.origin
  if (origin !== "http://example.org:8080") {
    return;
  }
  // do something...
}
```

`event`的属性有：

- `data`：指的是从其他窗口发送过来的消息对象。
- `origin`：指的是发送消息的窗口的源
- `source`：指的是发送消息的窗口对象
- `type`指的是发送消息的类型

调用 `postMessage`  时消息发送方窗口的 `origin` . 这个字符串由 协议、“`://`“、域名、“`:`端口号”拼接而成。例如 “`https://example.org` (隐含端口 `443`)”、“`http://example.net` (隐含端口 `80`)”、“`http://example.com:8080`”。请注意，这个`origin`不能保证是该窗口的当前或未来`origin`，因为`postMessage`被调用后可能被导航到不同的位置。

## 使用场景

### 父窗口创建跨域`iframe`

```html
<p>这里是父窗口</p>
<button id="btn">发送消息到子窗口</button>
<span id="result"></span>

<iframe id="iframe" src="http://localhost:8887/test.html"></iframe>

<script>
  // 声明子窗口的 origin
  const url = 'http://localhost:8887';

  document.querySelector('#btn').addEventListener('click', () => {
    // 定义消息内容
    const data = {
      msg: '来自父窗口发送的消息'
    };
    // 获取到子窗口的 window 对象
    const testWindow = document.querySelector('#iframe').contentWindow;
    // 调用子窗口 window 对象的 postMessage 方法，向子窗口发送消息，url 为子窗口的 origin
    testWindow.postMessage(data, url);
    // 如果明确消息应该发往哪个窗口
    // testWindow.postMessage(data, '*');
  });

  // 监听 message 事件，获取从子窗口发送过来的消息
  window.addEventListener('message', e => {
    // 出于安全考虑，设置url以拒绝接收其他不需要的网站发送的消息
    if (e.origin !== url) {
      return;
    }
    // e.data 为接收到的消息
    const data = e && e.data && e.data ? e.data : false;
    if (data) {
      console.warn('收到来自子窗口的消息：' + data.msg);
      document.querySelector('#result').innerText = '收到来自子窗口的消息：' + data.msg;
    }
  }, false);
</script>
```

### 子窗口

```html
<meta charset="utf-8">
<p>这里是子窗口</p>
<button id="btn">发送消息到父窗口</button>
<span id="result"></span>

<script type="text/javascript">
  // 声明父窗口的 origin
  const url = 'http://localhost:63342';
  document.querySelector('#btn').addEventListener('click', () => {
    const data = {
      msg: '来自 test.html 发送的消息'
    };
    // 调用父窗口 window 对象的 postMessage 方法
    window.parent.postMessage(data, url);
    // window.parent.postMessage(data, '*');
  });

  // 监听 message 事件，获取从父窗口发送过来的消息
  window.addEventListener('message', e => {
    if (e.origin !== url) {
      return;
    }
    const data = e && e.data && e.data ? e.data : false;
    if (data) {
      console.warn('收到来自父窗口的消息：' + data.msg);
      document.querySelector('#result').innerText = '收到来自父窗口的消息：' + data.msg;
    }
  }, false);
</script>
```
