// implement stack w/ linked list as the underlying data structure
const {Node, LinkedList} = require('./doublyLinkedList');

class Stack {
  constructor(...data) {
    this.storage = new LinkedList(...data);
  }
}

module.exports = Stack;
