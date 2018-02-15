// implement queue w/ linked list as the underlying data structure

const {LinkedList, Node} = require('./doublyLinkedList');

class Queue {
  constructor(...data) {
    this.storage = new LinkedList(...data);
  }
}

module.exports = Queue;
