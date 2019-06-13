---
title: 图片上传预览
date: 2019-06-13
layout: post
tags:
  - JavaScript
---

今天项目中遇到了需要本地预览上传图片的需求，在这里记录一下。

预览图片的实现方法有 3 种：

1. 直接上传文件到服务器，取服务器返回的 URL

2. 使用 HTML5 的 `File API` 的 `FileReader()` 构造函数将本地文件转成 base64 格式的 URL

3. 使用 `URL.createObjectURL(file)` 对象方法创建临时文件路径

由于需要纯前端实现图片预览，所以方法 1 直接 pass。下面来看剩下的两种方法：

### `FileReader()`

```html
<!-- accept 限制选择的文件为图片类型 -->
<input type="file" accept="image/*" />
<div class="output"></div>
<script>
  // 方法接受一个 file 对象
  const getImgUrl = file => {
    // 创建 FileReader 对象
    const reader = new FileReader()
    // 将文件转成 base64 编码的 URL
    reader.readAsDataURL(file)
    // 加载完文件后的回调函数
    reader.onload = e => {
      console.log(e.target.result) // => data:image/jpeg;base64,/9j/4A...

      const url = e.target.result
      // 创建图片
      const $img = document.createElement('img')
      $img.src = url
      document.querySelector('.output').appendChild($img)
    }
  }
  document.querySelector('input').addEventListener('change', function() {
    const file = this.files[0]
    getImgUrl(file)
  })
</script>
```

由于方法是异步操作，所以我们可以根据需要进行修改，比如加入回调函数，或者利用 Promise 等等

```js
const getImgUrl = (file, callback) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = e => {
    callback(e.target.result)
  }
}
document.querySelector('input').addEventListener('change', function() {
  const file = this.files[0]
  getImgUrl(file, url => {
    // 创建图片
    const $img = document.createElement('img')
    $img.src = url
    document.querySelector('.output').appendChild($img)
  })
})
```

```js
const getImgUrl = file => {
  return new Promise(resolve => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = e => {
      resolve(e.target.result)
    }
  })
}
document.querySelector('input').addEventListener('change', function() {
  const file = this.files[0]
  getImgUrl(file).then(url => {
    // 创建图片
    const $img = document.createElement('img')
    $img.src = url
    document.querySelector('.output').appendChild($img)
  })
})
```

### `URL.createObjectURL()`

```html
<input type="file" accept="image/*" />
<div class="output"></div>
<script>
  document.querySelector('input').addEventListener('change', function() {
    const file = this.files[0]
    // 创建 URL，参数可为 File 对象、Blob 对象或者 MediaSource 对象，返回 DOMString
    const src = URL.createObjectURL(file)
    // 创建图片
    const $img = document.createElement('img')
    $img.src = src
    // 使用完 URL 对象后需要使用 URL.revokeObjectURL() 手动释放
    $img.onload = () => URL.revokeObjectURL(src)
    document.querySelector('.output').appendChild($img)
  })
</script>
```

PS：预览视频不能使用 `FileReader()`，而要使用 `URL.createObjectURL()`
