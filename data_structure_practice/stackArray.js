// implement a stack w/ array as the underlying data structure

class Stack {
  constructor(...data) {
    this.storage = [...data]; // O(n)
  }
  push(data) { // O(1)
    this.storage.push(data);
  }
  pop() { // O(1)
    return this.storage.pop();
  }
  peek() { // O(1)
    return this.storage[this.storage.length - 1];
  }
}

module.exports = Stack;
