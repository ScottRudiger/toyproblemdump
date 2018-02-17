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
}

module.exports = Stack;
