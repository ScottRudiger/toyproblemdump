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

  context('size method', () => {
    it('should return 0 for an empty list', () => {
      const l = new LinkedList();
      expect(l.size()).to.equal(0);
    });
    it('should return 3 for a list with 3 Nodes', () => {
      const l = new LinkedList(1, 2, 3);
      expect(l.size()).to.equal(3);
    });
  });

  context('traverseRight method', () => {
    it('should not throw on an empty list', () => {
      const l = new LinkedList();
      expect(() => l.traverseRight(console.log)).not.to.throw();
    });
    it('should apply a passed-in function', () => {
      const l = new LinkedList(1);
      let result;
      l.traverseRight(n => result = n.data + 1);
      expect(result).to.equal(2);
    });
    it('should apply fn to every node, starting at the end', () => {
      const l = new LinkedList(1, 2, 3);
      let result = [];
      l.traverseRight(n => result.push(n.data));
      expect(result).to.eql([3, 2, 1]);
    });
    it('should work with indices', () => {
      const l = new LinkedList(0, 1, 2);
      let result = 0;
      l.traverseRight((n, i) => result += n.data * i);
      expect(result).to.equal(5);
    });
    it('should work with list reference', () => {
      const l = new LinkedList(2, 3, 4, 5);
      let result = 0;
      l.traverseRight((n, i, list) => result += n.data * list.head.data);
      expect(result).to.equal(28);
    });
  });

  context('pop method', () => {
    const l = new LinkedList(1, 2);
    const n = new Node(3);
    beforeEach(() => {
      l.push(n);
    });
    it('should return the last Node', () => {
      expect(l.pop()).to.equal(n);
    });
    it('should remove the last Node from the LinkedList', () => {
      l.pop();
      expect(l.tail.data).to.equal(2);
      expect(l.tail.prev.prev).to.be.null;
    });
  });

  context('insertAt method', () => {
    const l = new LinkedList();
    afterEach(() => {
      l.head = null;
      l.tail = null;
    });
    it('should throw an error if index is negative', () => {
      expect(() => l.insertAt(-2, 2)).to.throw('insertAt: index must be > -1');
    });
    it('should set head/tail & Node index property when the list is empty, even when index > 0', () => {
      l.insertAt(23, 2);
      expect(l.head.data).to.equal(2);
      expect(l.tail.data).to.equal(2);
      expect(l.tail.index).to.equal(0);
    });
    it('should insert data at head when index is 0 for a non-empty list', () => {
      l.push(1, 2, 3);
      l.insertAt(0, 0);
      expect(l.head.data).to.equal(0);
      expect(l.head.index).to.equal(0);
      expect(l).to.eql(new LinkedList(0, 1, 2, 3));
    });
    it('should insert data at the specified index', () => {
      l.push(0, 1, 3);
      l.insertAt(2, 2);
      expect(l.head.next.next.data).to.equal(2);
      expect(l.head.next.next.index).to.equal(2);
      expect(l.tail.data).to.equal(3);
      expect(l.tail.index).to.equal(3);
      expect(l).to.eql(new LinkedList(0, 1, 2, 3));
    });
    it('should insert data at tail if index is >= the list\'s size', () => {
      l.push(0, 1, 2);
      l.insertAt(3, 3);
      expect(l.tail.data).to.equal(3);
      expect(l.tail.index).to.equal(3);
      l.insertAt(23, 4);
      expect(l.tail.data).to.equal(4);
      expect(l.tail.index).to.equal(4);
      expect(l).to.eql(new LinkedList(0, 1, 2, 3, 4));
    });
  });
});
