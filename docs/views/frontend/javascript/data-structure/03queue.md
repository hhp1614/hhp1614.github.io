---
title: JS-数据结构-03-队列
date: 2019-08-13
tags:
 - JavaScript
 - 数据结构
categories:
 - JavaScript
---

**队列是遵循`先进先出（FIFO，First-In-First-Out）`原则的一组有序的项，队列也是一种列表。队列在尾部添加新元素，并从队列首部移除元素。最新添加的元素必须排在队列的末尾。**

## 队列常用的一些方法

- `enqueue(element)`: 入队
- `dequeue()`: 出对
- `peek()`: 获取队头元素
- `length()`: 获取队列的长度
- `clear()`: 清除队列中的所有元素
- `toString()`: 将队列中的元素输出为字符串形式

## 实现

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
    this.dataStore = [];
  }

  // 将队列中的元素输出为字符串形式
  toString() {
    return this.dataStore.join();
  }
}
```

## 使用

```js
const queue = new Queue('hello', 'world');
console.log(queue.toString()); // hello,world
console.log(queue.length()); // 2
queue.enqueue('hhp');
console.log(queue.toString()); // hello,world,hhp
console.log(queue.dequeue()); // hello
console.log(queue.peek()); // world
queue.clear();
console.log(queue.toString()); // ''
```
