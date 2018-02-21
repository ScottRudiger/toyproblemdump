// implement a binary search tree class

class Node {
  constructor(data, left = null, right = null) {
    // set data prop to data
    this.data = data;
    // if left is null or already wrapped in a Node,
    this.left = !left || left instanceof Node
    // set left prop to left
    ? left
    // otherwise, set left prop to a new Node
    : new Node(left);
    // if right is null or already wrapped in a Node,
    this.right = !right || right instanceof Node
    // set right prop to right
    ? right
    // otherwise, set right prop to a new Node
    : new Node(right);
  }
}

class BSTree {
  constructor(root = null, comp = (a, b) => a.data > b.data) {
    // if root is null or already wrapped in a Node,
    this.root = !root || root instanceof Node
      // set root prop to root
      ? root
      // otherwise, set root prop to a new Node
      : new Node(root);
    // set comparator; default to a > b
    this.comp = comp;
  }
  insert(...data) {
    // iterate through data in case we're inserting multiple
    for (const datum of data) {
      // wrap data in Node if it's not already
      const nodeToInsert = datum instanceof Node
      ? datum
      : new Node(datum);
      // if no root defined yet,
      if (!this.root) {
        // set root to value
        this.root = nodeToInsert;
        continue;
      }
      // otherwise, start at root
      let node = this.root;
      while (true) {
        // if value > node,
        if (this.comp(nodeToInsert, node)) {
          // and node's right is null
          if (!node.right) {
            // set node's right to value
            node.right = nodeToInsert;
            break;
          }
          // otherwise, node's right is defined, move right
          node = node.right;
        // otherwise, value < node,
        } else {
          // if node's left is null,
          if (!node.left) {
            // set node's left to value
            node.left = nodeToInsert;
            break;
          }
          // otherwise, node's left is defined, move left
          node = node.left;
        }
      }
    }
  }
}

module.exports = {Node, BSTree};
