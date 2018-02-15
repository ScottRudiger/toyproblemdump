// implement queue w/ linked list as the underlying data structure

const {LinkedList, Node} = require('./doublyLinkedList');

// could just use LinkedList's methods, e.g., push, shift, but recreating for practice
class Queue {
  constructor(...data) {
    this.storage = new LinkedList(...data);
  }
  enqueue(data) { // O(1)
    // create a new Node w/ data
    const node = new Node(data);
    // if Queue is empty, set head to node
    if (!this.storage.size) this.storage.head = node;
    // otherwise, Queue is not empty,
    else {
      // set tail's next to node
      this.storage.tail.next = node;
      // set node's prev to old tail
      node.prev = this.storage.tail
    }
    // set tail to node
    this.storage.tail = node;
    // and increment Queue's size
    this.storage.size++;
  }
  dequeue() { // O(1); assuming we only want data, not nodes returned
    // handle an empty list by returning undefined
    if (!this.storage.size) return;
    // otherwise, save the head Node's data
    const data = this.storage.head.data;
    // set head to the next Node
    this.storage.head = this.storage.head.next;
    // if storage is not empty, set new head's prev to null
    if (this.storage.head) this.storage.head.prev = null;
    // otherwise, storage is now empty; set tail to null
    else this.storage.tail = null;
    // decrement size
    this.storage.size--;
    // and return the data
    return data;
  }
}

module.exports = Queue;
