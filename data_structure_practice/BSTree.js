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

}

module.exports = {Node, BSTree};
