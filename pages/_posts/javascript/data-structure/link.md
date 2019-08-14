---
title: 数据结构-04-链表
date: 2019-08-14
layout: post
tags:
  - JavaScript
  - 数据结构
---

数组并不总是组织数据的最佳数据结构，原因如下：

在很多编程语言中，数组的长度是固定的，所以当数组已被数据填满时，再要加入新的元素就会非常困难。

在数组中，添加和删除元素也很麻烦，因为需要将数组中的其他元素向前或向后平移，以反映数组刚刚进行了添加或删除操作。

然而，JavaScript 的数组并不存在上述问题，因为使用 split() 方法不需要再访问数组中的其他元素了。

<br>

JavaScript 中数组的主要问题是，它们被实现成了对象，与其他语言（比如 C++ 和 Java）的数组相比，效率很低。

<br>

如果你发现数组在实际使用时很慢，就可以考虑使用链表来替代它。除了对数据的随机访问，链表几乎可以用在任何可以使用一维数组的情况中。如果需要随机访问，数组仍然是更好的选择。

<br>

**链表是一种物理存储单元上非连续、非顺序的存储结构，数据元素的逻辑顺序是通过链表中的指针链接次序实现的集合。**

**数组元素靠它们的位置进行引用，链表元素则是靠相互之间的关系进行引用。然而要标识出链表的起始节点却有点麻烦，许多链表的实现都在链表最前面有一个特殊节点，叫做头节点。**

**链表中插入一个节点的效率很高。向链表中插入一个节点，需要修改它前面的节点（前驱），使其指向新加入的节点，而新加入的节点则指向原来前驱指向的节点。**

### 单向链表（单链表）

链表的链接方向是单向的，对链表的访问要通过顺序读取从头部开始。

```js
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class Link {
  constructor() {
    this.head = new Node('head');
  }

  // 链表结尾追加一个节点
  append(element) {
    let currentNode = this.head;
    while (currentNode.next != null) {
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(element);
  }

  // 按节点的值查找节点
  find(element) {
    let currentNode = this.head;
    while (currentNode && currentNode.element !== element) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  // 插入一个节点
  insert(newElement, oldElement) {
    let newNode = new Node(newElement);
    let findNode = this.find(oldElement);
    if (findNode) {
      newNode.next = findNode.next;
      findNode.next = newNode;
    } else {
      throw new Error('找不到给定的插入点');
    }
  }

  // 展示链表中的元素
  display() {
    let currentNode = this.head.next;
    while (currentNode) {
      console.log(currentNode.element);
      currentNode = currentNode.next;
    }
  }

  // 寻找给定节点的前一个节点
  findPrev(element) {
    let currentNode = this.head;
    while (currentNode.next && currentNode.next.element !== element) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  // 删除给定的节点
  remove(element) {
    let prevNode = this.findPrev(element);
    if (prevNode != null) {
      prevNode.next = prevNode.next.next;
    } else {
      throw new Error('找不到要删除的节点');
    }
  }
}
```

### 使用单向链表

```js
const link = new Link();
link.append(1);
link.append(2);
link.display(); // 1 2
console.log('-----------------------');
link.insert(3, 1);
link.display(); // 1 3 2
console.log('-----------------------');
link.remove(1);
link.display(); // 3 2
```

### 双向链表

双向链表也叫双链表，是链表的一种，它的每个数据结点中都有两个指针，分别指向直接后继和直接前驱。所以，从双向链表中的任意一个结点开始，都可以很方便地访问它的前驱结点和后继结点。

```js
class DNode {
  constructor(element) {
    this.element = element;
    this.prev = null;
    this.next = null;
  }
}

class DLink {
  constructor() {
    this.head = new DNode('head');
  }

  // 在链表结尾添加一个新的节点
  append(element) {
    let currentNode = this.head;
    while (currentNode.next != null) {
      currentNode = currentNode.next;
    }
    let newNode = new DNode(element);
    newNode.next = currentNode.next;
    newNode.prev = currentNode;
    currentNode.next = newNode;
  }

  // 根据节点的值查找链表节点
  find(element) {
    let currentNode = this.head;
    while (currentNode && currentNode.element !== element) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  // 插入一个节点
  insert(newElement, oldElement) {
    let newNode = new DNode(newElement);
    let currentNode = this.find(oldElement);
    if (currentNode) {
      newNode.next = currentNode.next;
      newNode.prev = currentNode;
      currentNode.next = newNode;
    } else {
      throw new Error('未找到指定要插入节点位置对应的值');
    }
  }

  // 顺序展示链表节点
  display() {
    let currentNode = this.head.next;
    while (currentNode) {
      console.log(currentNode.element);
      currentNode = currentNode.next;
    }
  }

  // 查找最后一个节点
  findLast() {
    let currentNode = this.head;
    while (currentNode.next != null) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  // 逆序展示链表节点
  displayReverse() {
    let currentNode = this.head;
    currentNode = this.findLast();
    while (currentNode.prev != null) {
      console.log(currentNode.element);
      currentNode = currentNode.prev;
    }
  }

  // 删除给定的节点
  remove(element) {
    let currentNode = this.find(element);
    if (currentNode && currentNode.next != null) {
      currentNode.prev.next = currentNode.next;
      currentNode.next.prev = currentNode.prev;
      currentNode.next = null;
      currentNode.prev = null;
    } else {
      throw new Error('找不到要删除的节点');
    }
  }
}
```

### 使用双向链表

```js
const dLink = new DLink();
dLink.append(1);
dLink.append(2);
dLink.append(4);
dLink.display(); // 1 2 4
console.log('---------------------');
dLink.displayReverse(); // 4 2 1
console.log('---------------------');
dLink.insert(3, 2);
dLink.display(); // 1 2 3 4
dLink.remove(1)
console.log('---------------------');
dLink.display() // 2 3 4
```

### 循环链表

循环链表和单向链表相似，节点类型都是一样的。唯一的区别是，在创建循环链表时，让其头节点的 next 属性指向它本身，即：`this.head.next = this.head`，并保证链表中最后一个节点的 `next` 属性，始终指向
`head`。

```js
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class CLink {
  constructor() {
    this.head = new Node('head');
    this.head.next = this.head;
  }

  // 向链表节点增加一个元素
  append(element) {
    let currentNode = this.head;
    while (currentNode.next != null && currentNode.next !== this.head) {
      currentNode = currentNode.next;
    }
    let newNode = new Node(element);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  // 根据节点的值查找链表节点
  find(element) {
    let currentNode = this.head;
    while (currentNode && currentNode.element !== element && currentNode.next !== this.head) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  // 插入一个节点
  insert(newElement, oldElement) {
    let newNode = new Node(newElement);
    let currentNode = this.find(oldElement);
    if (currentNode) {
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    } else {
      throw new Error('未找到指定要插入节点对应的值');
    }
  }

  // 展示链表元素节点
  display() {
    let currentNode = this.head.next;
    while (currentNode && currentNode !== this.head) {
      console.log(currentNode.element);
      currentNode = currentNode.next;
    }
  }

  // 根据给定值寻找前一个节点
  findPrev(element) {
    let currentNode = this.head;
    while (currentNode.next && currentNode.next.element !== element) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  // 删除给定值对应的节点
  remove(element) {
    let prevNode = this.findPrev(element);
    if (prevNode.next != null) {
      prevNode.next = prevNode.next.next;
    } else {
      throw new Error('找不到要删除的节点');
    }
  }
}
```

### 使用循环链表

```js
const cLink = new CLink();
cLink.append(1);
cLink.append(2);
cLink.append(4);
cLink.display(); // 1 2 4
console.log('--------------------');
cLink.insert(3, 2);
cLink.display(); // 1 2 3 4
console.log('--------------------');
cLink.remove(4);
cLink.display(); // 1 2 3
```
