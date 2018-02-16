// implement a stack w/ array as the underlying data structure

class Stack {
  constructor(...data) {
    this.storage = [...data];
  }
  push(data) {
    this.storage.push(data);
  }
}

module.exports = Stack;
