// implement a stack w/ array as the underlying data structure

class Stack {
  constructor(...data) {
    this.storage = [...data];
  }
  push(data) {
    this.storage.push(data);
  }
  pop() {
    return this.storage.pop();
  }
  peek() {
    return this.storage[this.storage.length - 1];
  }
}

module.exports = Stack;
