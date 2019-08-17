---
title: JS 中的节流和防抖
date: 2019-06-05
tags:
 - JavaScript
 - JS Function
categories:
 - JavaScript
---

在进行窗口的 resize、scroll，输入框内容校验等操作时，如果事件处理函数调用的频率无限制，会加重浏览器的负担，导致用户体验非常糟糕。此时我们可以采用两个常用的高阶函数：`throttle`（节流）和 `debounce`（防抖）。它们经常用来防止函数被高频调用，同时又不影响实际效果。

## throttle 节流

当持续触发事件时，保证一定时间段内只调用一次事件处理函数。

```html
<div style="width: 300px; height: 300px; border: 1px solid #999;"></div>

<script>
  const throttle = (func, delay = 160) => {
    let timeout = null;
    let start = +new Date();
    return (...args) => {
      const curr = +new Date();
      clearTimeout(timeout);
      if (curr - start >= delay) {
        // 让方法在一定时间段内只执行一次
        func.apply(this, args);
        start = curr;
      } else {
        // 让方法在脱离时间后也执行一次
        timeout = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      }
    };
  };
  const mouseMove = e => console.log('pageX:', e.pageX, 'pageY:', e.pageY);
  // 例子
  document
    .querySelector('div')
    .addEventListener('mousemove', throttle(mouseMove, 500));
</script>
```

## debounce 防抖

当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，如果设定的时间到来之前，又一次触发了事件，就重新开始延时。

```html
<input type="text" />

<script>
  const debounce = (func, wait = 160) => {
    let timeout = null;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, wait);
    };
  };
  // 例子
  const input = e => console.log('change', e.target.value);
  document
    .querySelector('input')
    .addEventListener('input', debounce(input, 500));
</script>
```

## 总结

`throttle` **节流**：使得一定时间内只触发一次函数。原理是通过判断是否到达一定时间来触发函数。

`debounce` **防抖**：将几次操作合并为一此操作进行。原理是维护一个计时器，规定在 `delay` 时间后触发函数，但是在 `delay` 时间内再次触发的话，就会取消之前的计时器而重新设置。这样一来，只有最后一次操作能被触发。

**区别**： 函数节流不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理函数，而函数防抖只是在最后一次事件后才触发一次函数。 比如在页面的无限加载场景下，我们需要用户在滚动页面时，每隔一段时间发一次 Ajax 请求，而不是在用户停下滚动页面操作时才去请求数据。这样的场景，就适合用节流技术来实现。
