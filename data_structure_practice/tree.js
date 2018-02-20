// implement a tree w/ depth-first & breadth-first traversal methods

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
  add(...data) {
    for (const datum of data) {
      this.children.push(new Node(datum));
    }
  }
  // skipping remove this time, just to focus on traversal
}

class Tree {

}

module.exports = {Node, Tree};
