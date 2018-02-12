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

describe('LinkedList class', () => {
  it('should be a class', () => {
    expect(new LinkedList() instanceof LinkedList);
  });
  it('should accept multiple unlinked Nodes', () => {
    const n1 = new Node(1);
    const n2 = new Node(2);
    const n3 = new Node(3);
    const l = new LinkedList(n1, n2, n3);
    expect(l.tail).to.equal(n3);
    expect(l.tail.prev).to.equal(n2);
    expect(l.tail.prev.prev).to.equal(n1).and.to.equal(l.head);
    expect(l.tail.next).to.be.null;
    expect(l.head.prev).to.be.null;
  });
  it('should accept multiple pieces of data', () => {
    const l = new LinkedList(1, 2, 3);
    expect(l.tail.next).to.be.null;
    expect(l.tail.data).to.equal(3);
    expect(l.tail.prev.data).to.equal(2);
    expect(l.tail.prev.prev.data).to.equal(1);
    expect(l.head.data).to.equal(1);
    expect(l.head.prev).to.be.null;
  });
  it('should accept previously linked Nodes', () => {
    const n3 = new Node(3);
    const n2 = new Node(2, n3);
    const n1 = new Node(1, n2);
    const l = new LinkedList(n1, n2, n3);
    expect(l.tail.next).to.be.null;
    expect(l.tail).to.equal(n3);
    expect(l.tail.prev).to.equal(n2);
    expect(l.tail.prev.prev).to.equal(n1);
    expect(l.head.prev).to.be.null;
  });
  it('should accept a mixture of data and linked/unlinked Nodes', () => {
    const n = new Node(2);
    const n2 = new Node(4);
    const n1 = new Node(3, n2);
    const l = new LinkedList(1, n, n1, n2);
    expect(l.tail.next).to.be.null;
    expect(l.tail).to.equal(n2);
    expect(l.tail.prev).to.equal(n1);
    expect(l.tail.prev.prev).to.equal(n);
    expect(l.head.data).to.equal(1);
    expect(l.head.prev).to.be.null;
  });

  context('push method', () => {
    it('should add a Node to the end of the LinkedList', () => {
      const l = new LinkedList(0, 1, 2);
      const n = new Node(3);
      l.push(n);
      expect(l.tail).to.equal(n);
      expect(l.tail.prev.data).to.equal(2);
    });
    it('should add a Node if passed data', () => {
      const l = new LinkedList();
      l.push(2);
      expect(l.tail.data).to.equal(2);
    });
    it('should add multiple', () => {
      const l = new LinkedList(0);
      const n = new Node(2);
      l.push(1, n);
      expect(l.tail).to.equal(n);
      expect(l.tail.prev.data).to.equal(1);
      expect(l.head.data).to.equal(0);
    });
  });
});
