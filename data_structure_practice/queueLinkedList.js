// implement queue w/ linked list as the underlying data structure

const {LinkedList, Node} = require('./doublyLinkedList');

// could just use LinkedList's methods, e.g., push, shift, but recreating for practice
class Queue {
  constructor(...data) {
    this.storage = new LinkedList(...data);
  }
  enqueue(data) { // O(1)
    // if Queue is empty,
    if (!this.storage.size) {
      // create a new Node w/ data
      const node = new Node(data);
      // set head
      this.storage.head = node;
      // set tail
      this.storage.tail = node;
    // otherwise, Queue is not empty,
    } else {
      // create a new Node w/ data
      const node = new Node(data);
      // set tail's next to node
      this.storage.tail.next = node;
      // set node's prev to old tail
      node.prev = this.storage.tail
      // and set tail to nodoe
      this.storage.tail = node;
    }
    // increment Queue's size
    this.storage.size++;
  }
}

module.exports = Queue;
