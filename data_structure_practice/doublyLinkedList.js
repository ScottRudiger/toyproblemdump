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
    // size prop will be created w/ first push operation; however,
    // to handle case of creating an empty list, set size to 0
    this.size = ~~this.size;
  }
  push(datum, ...data) { // O(1) to add one item, O(n) to add multiple
    // save reference to old tail
    const oldTail = this.tail;
    // call super's push on first datum
    super.push(datum);
    // set new tail's prev to old tail or, if empty list, null
    this.tail.prev = oldTail ? oldTail : null;
    // // set new tail's index (setting indices as Nodes are added so size method does not need to iterate--update: changed to size prop, updated by each operation)
    // this.tail.index = oldTail ? oldTail.index + 1 : 0;
    this.size = ~~this.size + 1;
    // if multiple pieces of data were passed in, call pushBatch
    if (data.length) this.pushBatch(data);
  }
  pushBatch(data) { // O(n)
    // call push on each piece of data
    for (const datum of data) this.push(datum);
  }
  // switched to size property, updated by each operation rather than Node index props
  // size() { // O(1) by adding index property to each Node during push operation
  //   // if list is empty, return 0; otherwise, return the tail's index + 1
  //   return this.tail ? this.tail.index + 1 : 0;
  // }
  traverseRight(fn) { // O(n) linear
    // start traversal at tail
    let node = this.tail;
    let i = this.size;
    // until node is null,
    while(node) {
      // apply fn to the node
      fn(node, --i, this);
      // set node to node's prev
      node = node.prev;
    }
  }
  pop() { // O(1)
    // save a ref to the tail
    const removed = this.tail;
    // update tail to prev Node
    this.tail = removed.prev;
    // update tail's next to null
    this.tail.next = null;
    // update size
    this.size--;
    // return the removed Node
    return removed;
  }
  clear() {
    super.clear();
    this.size = 0;
  }
}

module.exports = {Node, LinkedList};
