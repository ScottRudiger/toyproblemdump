// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) { // O(1) constant time
    this.head = new Node(data, this.head);
  }
  size() { // O(n) linear time
    let count = 0;
    let current = this.head;
    while(current) {
      count++;
      current = current.next;
    }
    return count;
  }
}

module.exports = { Node, LinkedList };
