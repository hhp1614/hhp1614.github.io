---
title: 数据结构-02-队列
date: 2019-08-13
layout: post
tags:
  - JavaScript
  - 数据结构
---

**队列是遵循先进先出（FIFO，First-In-First-Out）原则的一组有序的项，队列也是一种列表。队列在尾部添加新元素，并从队列首部移除元素。最新添加的元素必须排在队列的末尾。**

### 队列常用的一些方法

- `enqueue(element)`: 入队
- `dequeue()`: 出对
- `peek()`: 获取队头元素
- `length()`: 获取队列的长度
- `clear()`: 清除队列中的所有元素
- `toString()`: 将队列中的元素输出为字符串形式

### 实现

```js
class Queue {
  constructor(...args) {
    // 初始化队列
    this.dataStore = [...args];
    // ES5 写法为
    // this.dataStore = [].slice.call(arguments);
  }

  // 入队
  enqueue(element) {
    this.dataStore.push(element);
  }

  // 出队
  dequeue() {
    return this.dataStore.shift();
  }

  // 获取队头元素
  peek() {
    return this.dataStore[0];
  }

  // 获取队列长度
  length() {
    return this.dataStore.length;
  }

  // 清除队列中的所有元素
  clear() {
    delete this.dataStore;
    this.dataStore = [];
  }

  // 将队列中的元素输出为字符串形式
  toString() {
    return this.dataStore.join();
  }
}
```

### 使用

```js
const q = new Queue('hello', 'world');
console.log(q.toString()); // hello,world
console.log(q.length()); // 2
q.enqueue('hhp');
console.log(q.toString()); // hello,world,hhp
console.log(q.dequeue()); // hello
console.log(q.peek()); // world
q.clear();
console.log(q.toString()); // ''
```
