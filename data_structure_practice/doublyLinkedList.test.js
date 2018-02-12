const {Node, LinkedList} = require('./doublyLinkedList');

const {expect} = require('chai');

describe('Node class', () => {
  it('should be a class', () => {
    expect(new Node(0) instanceof Node).to.be.true;
  });
  it('should include passed-in data', () => {
    const n = new Node(6);
    expect(n.data).to.equal(6);
  });
  it('should include passed-in prev as Node', () => {
    const n1 = new Node(1);
    const n2 = new Node(2, 3, n1);
    expect(n2.prev).to.equal(n1);
  });
  it('should include passed-in prev as data', () => {
    const n = new Node(2, 3, 1);
    expect(n.prev.data).to.equal(1);
  });
  it('should default prev property to null', () => {
    const n = new Node(1);
    expect(n.prev).to.be.null;
  });
  it('should handle edge case where passed-in prev is meant to have data: null', () => {
    const n = new Node(5, null, null);
    expect(n.prev.data).to.be.null;
  });
});
