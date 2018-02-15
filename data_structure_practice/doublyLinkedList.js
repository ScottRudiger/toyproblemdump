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
  unshift(data) {
    // if list is empty, set head/tail to data
    if (!this.head) this.push(data);
    // otherwise,
    else {
      // save ref to old head
      const oldHead = this.head;
      // set head to data and head.next to old head,
      this.head = new Node(data, oldHead);
      // set oldHead's prev to new head
      oldHead.prev = this.head;
      // and increment size
      this.size++;
    }
  }
  shift() {
    // handle empty list
    if (!this.head) return;
    // save head
    const removed = this.head;
    // set head to old head's next
    this.head = removed.next;
    // if new head is null, set tail to null as well
    if (!this.head) this.tail = null;
    // else, set head's prev to null
    else this.head.prev = null;
    // decrement size
    this.size--;
    // return the old head
    return removed;
  }
  insertAt(index, data) {
    // for cases: index = 0, empty list, negative index, or undefined index, call super's
    if (index === 0 || !this.head && index >= 0 || index < 0 || !index) {
      super.insertAt(...arguments);
    // if inserting in the middle or end of list,
  } else {
      // e.g., insert Node 2 at index 2 in list (0, 1, 3) -> (0, 1, 2, 3)
      let i = this.size;
      // if index is >= size, push it
      if (index >= i) return this.push(data);
      // otherwise start at last Node,
      let node = this.tail;
      while (node) {
        // and traverse until reaching the desired index
        if (--i === index) {
          // save ref for new Node & set its next;, e.g., following the above example:
          const inserted = new Node(data, node); // 2.next = 3
          // set new Node's prev
          inserted.prev = node.prev; // 2.prev = 1
          // update prev Node's next
          node.prev.next = inserted; // 1.next = 2
          // update node's prev
          node.prev = inserted; // 3.prev = 2
          // update size;
          this.size++;
          break;
        }
        node = node.prev;
      }
    }
  }
  removeAt(index) {
    // if removing head, index is out of bounds, or empty list, call super's removeAt
    if (!index || index >= this.size || index < 0 || !this.size) {
      return super.removeAt(index);
    }
    // if removing tail, call pop method
    if (index === this.size - 1) return this.pop();
    // otherwise, node is in the middle; traverse Nodes
    let node = this.head.next;
    let i = 0;
    while (node) {
      // when reaching the desired index
      if (++i === index) {
        // set previous Node's next to node's next
        node.prev.next = node.next;
        // set next Node's prev to node's prev
        node.next.prev = node.prev;
        // decrement size
        this.size--;
        // return the removed node
        return node;
      }
    }
  }
  remove(node) {
    // throw an error if invalid argument passed in for node
    if (!(node instanceof Node)) throw new Error('node must be an instance of Node');
    // handle empty list
    if (!this.size) return;
    // if node is the head, call shift
    if (node === this.head) return this.shift();
    // if node is the tail, call pop
    if (node === this.tail) return this.pop();
    // if node is not in the list, return the node w/o alteration to list
    // pass on handling case where node is a middle Node in a different list
    if (!node.next || !node.prev) return node;
    // otherwise, node is a middle Node,
    // set previous Node's next to node's next
    node.prev.next = node.next;
    // set next Node's prev to node's prev
    node.next.prev = node.prev;
    // decrement size
    this.size--;
    return node;
  }
  removeAfter(node) {
    // if passed the tail node or list is empty, return undefined
    if (node === this.tail || !this.size) return;
    // otherwise, call remove on node's next
    return this.remove(node.next);
  }
  removeBefore(node) {
    // if passed the head node or list is empty, return undefined
    if (node === this.head || !this.size) return;
    // otherwise, call remove on node's prev
    return this.remove(node.prev);
  }
  insertBefore(node, data) {
    // throw an error if called on an empty list
    if (!this.size) throw new Error('insertBefore cannot be called on an empty list');
    // throw an error if invalid argument passed in for node
    if (!(node instanceof Node)) throw new Error('node must be an instance of Node');
    // if inserting before head, call unshift on data
    if (node === this.head) return this.unshift(data);
    // otherwise, create a new Node based on data
    const inserted = new Node(data);
    // set previous Node's next to new Node
    node.prev.next = inserted;
    // set new Node's prev to node's prev
    inserted.prev = node.prev;
    // set new Node's next to node
    inserted.next = node;
    // set node's prev to new Node
    node.prev = inserted;
    // increment size
    this.size++;
  }
  insertAfter(node, data) {
    // if node is the tail, call push on data
    if (node === this.tail) return this.push(data);
    // otherwise, call insertBefore on node's next
    return this.insertBefore(node.next, data);
  }
  copy() {
    // initialize copy (empty array)
    const copy = [];
    // traverse the original LinkedList, pushing each Node's data to the copy
    this.traverse(n => copy.push(n.data));
    // return a new LinkedList based on the copied data
    return new LinkedList(...copy);
  }
}

module.exports = {Node, LinkedList};
