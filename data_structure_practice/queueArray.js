// implement queue w/ an array as the underlying data structure

class Queue {
  constructor(...data) {
    this.storage = [...data]; // O(n)
  }
}

module.exports = Queue;
