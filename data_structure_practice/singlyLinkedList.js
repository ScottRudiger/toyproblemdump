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

class LinkedList {
  constructor(head, ...data) {
    // if head not given
    head === undefined
    // default to null
    ? null
    // if first argument is a Node,
    : head instanceof Node
    // set head to it
    ? this.head = head
    // otherwise, create a new Node and set head to it
    : this.head = new Node(head);
    // create temp variable to hold current node, starting at head
    let node = this.head;
    // if only one Node is passed in, set tail to same Node as head
    !data.length ? this.tail = node
    // otherwise, iterate through the data
    : data.forEach((datum, i) => {
      // if each datum is a Node,
      datum instanceof Node
      // set node.next to that datum
      ? node.next = datum
      // else, create a Node with that datum and set node.next to it
      : node.next = new Node(datum);
      // update node to current Node
      node = node.next;
      // if last Node in data, set it to tail
      if (i === data.length - 1) this.tail = node;
    });
  }
  add(datum, ...data) {
    // save reference to old tail
    const oldTail = this.tail;
    // save reference to new tail and convert to Node if necessary
    const newTail = datum instanceof Node ? datum : new Node(datum);
    // if LinkedList is not empty (head/tail aren't null),
    if (oldTail) {
      // set old tail's next property to new tail
      oldTail.next = newTail;
    } else {
      // if empty, set head to newTail
      this.head = newTail;
    }
    // set tail property to new tail
    this.tail = newTail;
    // if multiple pieces of data were passed in, call addBatch
    if (data.length) this.addBatch(data);
  }
  addBatch(data) {
    // call add on each piece of data
    for (const datum of data) this.add(datum);
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

describe('LinkedList class', () => {
  it('should be a class', () => {
    expect(new LinkedList() instanceof LinkedList);
  });
  it('should accept one Node', () => {
    const n = new Node(5);
    const l = new LinkedList(n);
    expect(l.head).to.equal(n);
    expect(l.tail).to.equal(n);
  });
  it('should accept one piece of data', () => {
    const l = new LinkedList(6);
    expect(l.head instanceof Node);
    expect(l.head.data).to.equal(6);
    expect(l.tail.data).to.equal(6);
    expect(l.head.next).to.be.null;
  });
  it('should accept multiple unlinked Nodes', () => {
    const n1 = new Node(1);
    const n2 = new Node(2);
    const n3 = new Node(3);
    const l = new LinkedList(n1, n2, n3);
    expect(l.head).to.equal(n1);
    expect(l.head.next).to.equal(n2);
    expect(l.head.next.next).to.equal(n3);
    expect(l.tail).to.equal(n3);
    expect(l.tail.next).to.be.null;
  });
  it('should accept multiple pieces of data', () => {
    const l = new LinkedList(1, 2, 3);
    expect(l.head.data).to.equal(1);
    expect(l.head.next.data).to.equal(2);
    expect(l.head.next.next.data).to.equal(3);
    expect(l.tail.data).to.equal(3);
    expect(l.tail.next).to.be.null;
  });
  it('should accept previously linked Nodes', () => {
    const n3 = new Node(3);
    const n2 = new Node(2, n3);
    const n1 = new Node(1, n2);
    const l = new LinkedList(n1, n2, n3);
    expect(l.head).to.equal(n1);
    expect(l.head.data).to.equal(1);
    expect(l.head.next).to.equal(n2);
    expect(l.head.next.next).to.equal(n3);
    expect(l.tail).to.equal(n3);
    expect(l.tail.data).to.equal(3);
  });
  it('should accept a mixture of data and linked/unlinked Nodes', () => {
    const n = new Node(2);
    const n2 = new Node(4);
    const n1 = new Node(3, n2);
    const l = new LinkedList(1, n, n1, n2);
    expect(l.head.data).to.equal(1);
    expect(l.head.next).to.equal(n);
    expect(l.head.next.next).to.equal(n1);
    expect(l.head.next.next.next).to.equal(n2);
    expect(l.tail).to.equal(n2);
  });
  context('add method', () => {
    it('should add a Node to the end of the LinkedList', () => {
      const l = new LinkedList(0, 1, 2);
      const n = new Node(3);
      l.add(n);
      expect(l.head.next.next.next).to.equal(n);
      expect(l.tail).to.equal(n);
    });
    it('should add a Node if passed data', () => {
      const l = new LinkedList();
      l.add(2);
      expect(l.head.data).to.equal(2);
    });
    it('should add multiple', () => {
      const l = new LinkedList(0);
      const n = new Node(2);
      l.add(1, n);
      expect(l.head.data).to.equal(0);
      expect(l.head.next.data).to.equal(1);
      expect(l.head.next.next).to.equal(n);
      expect(l.tail).to.equal(n);
    });
  });
});
