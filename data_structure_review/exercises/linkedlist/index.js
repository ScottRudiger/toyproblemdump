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
  *[Symbol.iterator]() {
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
    let count = 0;
    let current = this.head;
    while(current) {
      count++;
      current = current.next;
    }
    return count;
  }
  getFirst() { // O(1) constant time
    return this.head;
  }
  getLast() { // O(n) linear time
    let current = this.head;
    while (current && current.next) {
      current = current.next;
    }
    return current;
  }
  clear() { // O(1) constant time
    this.head = null;
  }
  removeFirst() { // O(1) constant time
    this.head = this.head.next;
  }
  removeLast() { // O(n) linear time
    let current = this.head;
    if (!current || !current.next) {
      this.head = null;
      return;
    }
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }
  insertLast(data) { // O(n) linear time
    const node = new Node(data);
    let current = this.head;
    if (!current) {
      this.head = node;
      return;
    }
    while (current.next)
      current = current.next;
    current.next = node;
  }
  getAt(index) { // O(n) linear time
    let current = this.head;
    let i = 0;
    while (i++ < index && current) current = current.next;
    return current;
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
