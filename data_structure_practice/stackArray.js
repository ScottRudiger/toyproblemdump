// implement a stack w/ array as the underlying data structure

class Stack {
  constructor(...data) {
    this.storage = [...data];
  }
}

module.exports = Stack;
