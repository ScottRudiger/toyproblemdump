// implement stack w/ linked list as the underlying data structure
const {Node, LinkedList} = require('./doublyLinkedList');

class Stack { // could just use LinkedList's push & pop, but recreating for practice
  constructor(...data) {
    this.storage = new LinkedList(...data); // O(n)
  }
  push(data) { // O(1)
    // create a new Node w/ data
    const node = new Node(data);
    // if storage is empty, set head to new node
    if (!this.storage.size) this.storage.head = node;
    // otherwise, storage has data
    else {
      // set old tail's next to node
      this.storage.tail.next = node;
      // set node's prev to old tail
      node.prev = this.storage.tail;
    }
    // set tail to new node
    this.storage.tail = node;
    // increment size
    this.storage.size++;
  }
  pop() {
    // return undefined if called on an empty Stack
    if (!this.storage.size) return;
    // otherwise, save the tail's data
    const data = this.storage.tail.data;
    // set tail to old tail's prev
    this.storage.tail = this.storage.tail.prev;
    // if new tail is null, the storage is now empty; set head to null
    if (!this.storage.tail) this.storage.head = null;
    // otherwise, storage is not empty; set new tail's next to null
    else this.storage.tail.next = null;
    // decrement size
    this.storage.size--;
    // return the data
    return data;
  }
  peek() {
    // if Stack is not empty,
    return this.storage.tail
    // return the tail node's data
    ? this.storage.tail.data
    // otherwise, return undefined
    : undefined;
  }
}

module.exports = Stack;
