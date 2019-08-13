---
title: 数据结构-01-列表
date: 2019-08-13
layout: post
tags:
  - JavaScript
  - 数据结构
---

**列表是一组有序的数据。每个列表中的数据项称为元素。在 JavaScript 中，列表中的元素可以是任意数据类型。列表中可以保存多少元素并没有事先限定，实际使用时元素的数量受到程序内存的限制。不包含任何元素的列表称为空列表。**

### 列表属性

- `size`: 列表中包含元素的个数
- `pos`: 列表中当前位置记录
- `dataStore`: 存储列表元素的数组

### 列表方法

- `append(element)`: 在列表末尾添加一个元素
- `insert(element, pos)`: 在一个给定元素或列表的起始位置插入一个元素
- `remove(element)`: 从列表中删除元素
- `clear()`: 清空列表中所有的元素
- `length()`: 获取列表中元素的个数
- `toString()`: 显示列表中所有的元素
- `getElement()`: 显示当前元素
- `front()`: 将当前位置移动到第一个位置
- `end()`: 将当前位置移动到最后一个位置
- `prev()`: 将当前位置前移一位
- `next()`: 将当前位置后移一位
- `currentPosition()`: 获取列表当前位置
- `moveTo(pos)`: 将当前位置移动到指定位置
- `contains(element)`: 判断参数是否在列表中存在

### 实现

```js
class List {
  constructor(...args) {
    this.size = args.length;
    this.position = -1;
    this.dataStore = args;
    // ES5 写法为
    // this.dataStore = [].slice.call(arguments);
  }

  // 给列表添加元素
  append(element) {
    this.dataStore[this.size++] = element;
  }

  // 找出给定元素的下标
  find(element) {
    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] === element) {
        return i;
      }
    }
    return -1;
  }

  // 从列表中删除元素
  remove(element) {
    const findIdx = this.find(element);
    if (findIdx > -1) {
      this.dataStore.splice(findIdx, 1);
      this.size--;
      return true;
    }
    return false;
  }

  // 返回列表中有多少个元素
  length() {
    return this.size;
  }

  // 以字符串的形式显示列表中的元素
  toString() {
    return this.dataStore.join();
  }

  // 向列表中插入一个元素
  insert(element, position) {
    if (position > -1 && position < this.size) {
      this.dataStore.splice(position, 0, element);
      this.size++;
      return true;
    }
    return false;
  }

  // 清空列表中所有的元素
  clear() {
    this.dataStore = [];
    this.size = 0;
    this.position = -1;
  }

  // 判断给定的值是否在列表中
  contains(element) {
    const findIdx = this.find(element);
    return findIdx > -1;
  }

  // 移动指针到第一个元素
  front() {
    this.position = 0;
  }

  // 移动指针到最后一个元素
  end() {
    this.position = this.size - 1;
  }

  // 移动指针到前一个元素
  prev() {
    if (this.position > -1) {
      this.position--;
    }
  }

  // 移动指针到后一个元素
  next() {
    if (this.position < this.size) {
      this.position++;
    }
  }

  // 获取当前指针
  currentPosition() {
    return this.position;
  }

  // 移动指针到指定位置
  moveTo(position) {
    this.position = position;
  }

  // 获取当前指针对应的元素
  getElement() {
    if (this.position > -1 && this.position < this.size) {
      return this.dataStore[this.position];
    } else {
      console.warn('当前列表位置越界，请调整指针');
      return null;
    }
  }
}
```

### 使用

```js
const l = new List(1, 2, 3);
// 以字符串形式输出列表元素
console.log(l.toString()); // 1,2,3

// 在列表末尾添加一个元素
l.append(5);
// 以字符串形式输出列表元素
console.log(l.toString()); // 1,2,3,5

// 删除列表一个元素
l.remove(1);
// 以字符串形式输出列表元素
console.log(l.toString()); // 2,3,5

// 向列表插入元素
l.insert(1, 0);
l.insert(4, 3);
// 以字符串形式输出列表元素
console.log(l.toString()); // 1,2,3,4,5

// 判断列表是否包含指定的元素
console.log(l.contains(6)); // false

// 向列表末尾追加元素
l.append(6);
l.append(7);

// 判断列表是否包含指定的元素
console.log(l.contains(6)); // true
// 输出列表元素个数
console.log(l.length()); // 7

l.moveTo(2);
console.log(l.getElement()); // 3

// 遍历列表
for (l.front(); l.currentPosition() < l.length(); l.next()) {
  console.log(l.getElement());
}
/* console
1
2
3
4
5
6
7
 */
```
