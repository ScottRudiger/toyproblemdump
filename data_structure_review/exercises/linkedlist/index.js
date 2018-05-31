// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  *[Symbol.iterator]() { // O(n) linear time
    let curr = this.head;
    while (curr) {
      yield curr;
      curr = curr.next;
    }
  }
  insertFirst(data) { // O(1) constant time
    this.head = new Node(data, this.head);
  }
  size() { // O(n) linear time
    return [...this].length;
  }
  getFirst() { // O(1) constant time
    return this.head;
  }
  getLast() { // O(n) linear time
    for (const node of this)
      if (!node.next) return node;
    return null;
  }
  clear() { // O(1) constant time
    this.head = null;
  }
  removeFirst() { // O(1) constant time
    if (!this.head) return;
    this.head = this.head.next;
  }
  removeLast() { // O(n) linear time
    if (!this.head || !this.head.next) {
      this.head = null;
      return;
    }
    for (const node of this) {
      if (!node.next.next) {
        node.next = null;
        return;
      }
    }
  }
  insertLast(data) { // O(n) linear time
    const node = new Node(data);
    const last = this.getLast();
    if (last)
      last.next = node;
    else
      this.head = node;
  }
  getAt(index) { // O(n) linear time
    let i = 0;
    for (const node of this) {
      if (i++ === index) return node;
    }
    return null;
  }
  removeAt(index) { // O(n) linear time
    // handle empty list
    if (!this.head) return;
    // handle first node
    if (index === 0) return this.head = this.head.next;
    // save ref to previous node
    const prev = this.getAt(index - 1);
    // handle out of bounds index
    if (!prev || !prev.next) return;
    // common case - remove node
    prev.next = prev.next.next;
  }
  insertAt(data, index) { // O(n) linear time
    if (index === 0 || !this.head)
      return this.head = new Node(data, this.head);
    let i = 0;
    for (var node of this)
      if (++i === index)
        node.next = new Node(data, node.next);
    node.next = new Node(data);
  }
  forEach(fn) { // O(n) linear time
    let i = 0;
    for (const node of this)
      fn(node, i++, this);
  }
}

module.exports = { Node, LinkedList };
