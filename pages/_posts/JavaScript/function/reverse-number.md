---
title: 优雅的翻转整数
date: 2019-06-05
layout: post
tags:
  - JavaScript
---

在需要将一个整数翻转的时候，例如：`123` 转化为 `321`，通常都是将 `number` 转化为 `string`，然后再转化为数组，然后再调用数组的 `reverse()` 方法，最后再 `join()` 成字符串，如果返回值需要 `number` 类型，还需要重新转回 `number` 类型。

例如：

```js {highlightLines:['1-11']}
const reverseNum = x => {
  // Math.sing() 取正负 值为 1 或 -1
  const sign = Math.sign(x)
  // Math.abs() 取绝对值
  const y = Math.abs(x)
    .toString()
    .split('')
    .reverse()
    .join('')
  return sign * y
}

console.log(reverseNum(123)) // 321
console.log(reverseNum(-123)) // -321
```

然鹅，今天在刷 LeetCode 的时候突然看到一个别人的思路，发现翻转整数不需要转换成字符也行：

```js {highlightLines:['1-14']}
const reverseNum = x => {
  const sign = Math.sign(x)
  let y = Math.abs(x)
  let n = 0
  while (y != 0) {
    // 取 y 最后一位数字
    const pop = y % 10
    // 将 y 最后一位数删掉
    y = parseInt(y / 10)
    // 将 y 最后一位数字加入到 n，成为 n 的最后一位数字
    n = n * 10 + pop
  }
  return sign * n
}

console.log(reverseNum(123)) // 321
console.log(reverseNum(-123)) // -321
```
