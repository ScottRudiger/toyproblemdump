// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
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
}

module.exports = { Node, LinkedList };
