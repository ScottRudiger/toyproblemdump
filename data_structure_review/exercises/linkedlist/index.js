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
    let curr = this.head;
    // handle an empty list
    if (!curr) return;
    if (index === 0) {
      this.head = curr.next;
    }
    let i = 0;
    while (i++ < index - 1 && curr) {
      curr = curr.next;
    }
    if (!curr.next) return;
    curr.next = curr.next.next || null;
  }
  insertAt(data, index) { // O(n) linear time
    let curr = this.head;
    if (index === 0 || !curr) {
      this.head = new Node(data, curr);
      return;
    }
    let i = 0;
    while(i++ < index - 1 && curr) {
      if (!curr.next) {
        curr.next = new Node(data);
        return;
      }
      curr = curr.next;
    }
    curr.next = new Node(data, curr.next);
  }
  forEach(fn) { // O(n) linear time
    let curr = this.head;
    while (curr) {
      fn(curr);
      curr = curr.next;
    }
  }
}

module.exports = { Node, LinkedList };
