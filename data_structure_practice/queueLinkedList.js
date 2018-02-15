// implement queue w/ linked list as the underlying data structure

const {LinkedList, Node} = require('./doublyLinkedList');

// could just use LinkedList's methods, e.g., push, shift, but recreating for practice
class Queue {
  constructor(...data) {
    this.storage = new LinkedList(...data);
  }
}

module.exports = Queue;
