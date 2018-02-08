// implement a singly linked list

class Node {
  constructor(data, next) {
    // set data property on Node
    this.data = data;
    // set next property: if next is not specified,
    // (avoiding default param of null to cover edge case--see test)
    this.next = next === undefined
    // default to null
    ? null
    // if next is a Node,
    : next instanceof Node
    // set to next
    ? next
    // otherwise, next is data; set to a new Node w/ that data
    : new Node(next);
  }
}

const {expect} = require('chai');

describe('Node class', () => {
  it('should be a class', () => {
    expect(new Node(0) instanceof Node).to.be.true;
  });
  it('should include passed-in data', () => {
    const n = new Node(6);
    expect(n.data).to.equal(6);
  });
  it('should include passed-in next as Node', () => {
    const n2 = new Node(6);
    const n1 = new Node(5, n2);
    expect(n1.next).to.equal(n2);
  });
  it('should include passed-in next as data', () => {
    const n = new Node(5, 6);
    expect(n.next.data).to.equal(6);
  });
  it('should default next property to null', () => {
    const n = new Node(1);
    expect(n.next).to.be.null;
  });
  it('should handle edge case where passed-in next is meant to have data: null', () => {
    const n = new Node(5, null);
    expect(n.next.data).to.be.null;
  });
});
