---
title: 数据结构-01-栈
date: 2019-08-13
layout: post
tags:
  - JavaScript
  - 数据结构
---

**栈是一种遵从`后进先出（LIFO，Last-In-First-Out）`原则的有序集合，是一种特殊的列表。栈内的元素只能通过列表的一端访问，这一端称为栈顶，另一端就叫栈底。在栈里，新元素都靠近栈顶，旧元素都接近栈底。**

### 栈常用的一些方法

- `push(element)`: 入栈
- `pop()`: 出栈
- `peek()`: 获取栈顶元素
- `length()`: 获取栈中元素个数
- `clear()`: 清除栈中的所有元素

### 实现

```js
class Stack {
  constructor() {
    this.dataStore = []; // 存储栈中的元素
    this.top = -1; // 记录当前栈顶索引位置，默认为 -1
  }

  // 入栈
  push(element) {
    this.dataStore[++this.top] = element;
  }

  // 出栈
  pop() {
    return this.dataStore[this.top--];
  }

  // 获取栈顶元素
  peek() {
    return this.dataStore[this.top];
  }

  // 获取栈中元素个数
  length() {
    return this.top + 1;
  }

  // 清空
  clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.top = -1;
  }
}
```

### 使用

```js
let s = new Stack();
s.push('hello');
s.push('world');

console.log(s); // Stack { dataStore: [ 'hello', 'world' ], top: 1 }
console.log('length:', s.length()); // length: 2
console.log('peek:', s.peek()); // peek: world
console.log('pop:', s.pop()); // pop: world
console.log('length:', s.length()); // length: 1
s.clear();
console.log('length:', s.length()); // length: 0
console.log(s); // Stack { top: -1, dataStore: [] }
```
