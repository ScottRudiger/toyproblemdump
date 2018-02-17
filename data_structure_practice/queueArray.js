// implement queue w/ an array as the underlying data structure

class Queue {
  constructor(...data) {
    this.storage = [...data]; // O(n)
  }
  enqueue(data) { // O(n) due to shifting all other data to the right
    this.storage.unshift(data);
  }
  dequeue() { // O(1)
    return this.storage.pop();
  }
  peek() { // O(1)
    return this.storage[this.storage.length - 1];
  }
}

module.exports = Queue;
