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
  constructor(head, ...data) {
    !arguments.length ? super() : super(head, ...data);
  }
  push(datum, ...data) { // O(1) to add one item, O(n) to add multiple
    // save reference to old tail
    const oldTail = this.tail;
    // call super's push on first datum
    super.push(datum);
    // set new tail's prev to old tail or, if empty list, null
    this.tail.prev = oldTail ? oldTail : null;
    // if multiple pieces of data were passed in, call pushBatch
    if (data.length) this.pushBatch(data);
  }
  pushBatch(data) { // O(n)
    // call push on each piece of data
    for (const datum of data) this.push(datum);
  }
}

module.exports = {Node, LinkedList};
