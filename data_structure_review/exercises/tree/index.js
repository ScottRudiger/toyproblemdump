// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
  add(data) {
    this.children.push(new Node(data));
  }
  remove(dataToRemove) {
    this.children = this.children.filter(({data}) => data !== dataToRemove);
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }
  traverseBF(fn) {
    const processQueue = [this.root];
    while (processQueue.length) {
      const node = processQueue.shift();
      processQueue.push(...node.children);
      fn(node);
    }
  }
  // traverseDF(fn) {
  //   (function traverse(node) {
  //     fn(node);
  //     node.children.forEach(traverse);
  //   })(this.root);
  // }
  traverseDF(fn) {
    const processQueue = [this.root];
    while (processQueue.length) {
      const node = processQueue.shift();
      processQueue.unshift(...node.children);
      fn(node);
    }
  }
}

module.exports = { Tree, Node };
