const [singlyNode, singlyLinkedList] = require('./singlyLinkedList');

class Node extends singlyNode {
  constructor(data, next, prev) {
    super(data, next);
    // set prev property: if prev is not specified,
    // (avoiding default param of null to cover edge case--see test)
    this.prev = prev === undefined
      // default to null
      ? null
      // if prev is a Node,
      : prev instanceof Node
        // set to prev
        ? prev
        // otherwise, prev is data; set to a new Node w/ that data
        : new Node(prev);
  }
}

class LinkedList extends singlyLinkedList {

}

module.exports = {Node, LinkedList};
