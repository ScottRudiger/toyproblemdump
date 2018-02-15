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

  context('unshift method', () => {
    it('should place data at the head/tail of an empty LinkedList', () => {
      const l = new LinkedList();
      l.unshift(0);
      expect(l).to.eql(new LinkedList(0));
    });
    it('should place data at the head of a non-empty list', () => {
      const l = new LinkedList(0);
      l.unshift(-1);
      expect(l).to.eql(new LinkedList(-1, 0));
    });
  });

  context('insertAt method', () => {
    const l = new LinkedList();
    afterEach(() => {
      l.clear();
    });
    it('should throw an error if index is negative', () => {
      expect(() => l.insertAt(-2, 2)).to.throw('insertAt: index must be > -1');
    });
    it('should set head/tail when the list is empty, even when index > 0', () => {
      l.insertAt(23, 2);
      expect(l.head.data).to.equal(2);
      expect(l.tail.data).to.equal(2);
      expect(l.size).to.equal(1);
    });
    it('should insert data at head when index is 0 for a non-empty list', () => {
      l.push(1, 2, 3);
      l.insertAt(0, 0);
      expect(l.head.data).to.equal(0);
      expect(l).to.eql(new LinkedList(0, 1, 2, 3));
    });
    it('should insert data at the specified index', () => {
      l.push(0, 1, 3);
      l.insertAt(2, 2);
      expect(l.head.next.next.data).to.equal(2);
      expect(l.tail.data).to.equal(3);
      expect(l).to.eql(new LinkedList(0, 1, 2, 3));
    });
    it('should insert data at tail if index is >= the list\'s size', () => {
      l.push(0, 1, 2);
      l.insertAt(3, 3);
      expect(l.tail.data).to.equal(3);
      l.insertAt(23, 4);
      expect(l.tail.data).to.equal(4);
      l.insertAt(l.size, 5);
      expect(l).to.eql(new LinkedList(0, 1, 2, 3, 4, 5));
    });
  });

  context('clear method', () => {
    const l = new LinkedList(1, 2, 3);
    l.clear();
    expect(l.size).to.equal(0);
    expect(l).to.eql(new LinkedList());
  });

  context('size property', () => {
    it('should be 0 for an empty list', () => {
      const l = new LinkedList();
      expect(l.size).to.equal(0);
    });
    it('should be 3 for a list with 3 Nodes', () => {
      const l = new LinkedList(1, 2, 3);
      expect(l.size).to.equal(3);
    });
  });

  context('shift method', () => {
    it('should remove and return the first Node in a list', () => {
      const l = new LinkedList(1, 2, 3);
      expect(l.shift().data).to.equal(1);
      expect(l).to.eql(new LinkedList(2, 3));
    });
    it('should leave an empty list when called on a list where size = 1', () => {
      const l = new LinkedList(1);
      expect(l.shift().data).to.equal(1);
      expect(l.tail).to.be.null;
      expect(l).to.eql(new LinkedList());
    });
    it('should handle being called on an empty list', () => {
      const l = new LinkedList();
      expect(() => l.shift()).not.to.throw();
      expect(l.shift()).to.equal(undefined);
      expect(l).to.eql(new LinkedList());
    });
  });

  context('removeAt method', () => {
    let l;
    beforeEach(() => l = new LinkedList(0, 1, 2, 3));
    it('should remove and return the tail Node', () => {
      expect(l.removeAt(3).data).to.equal(3);
      expect(l).to.eql(new LinkedList(0, 1, 2));
    });
    it('should return undefined given an index > list length - 1', () => {
      expect(l.removeAt(23)).to.equal(undefined);
      expect(l).to.eql(new LinkedList(0, 1, 2, 3));
    });
    it('should remove the head node', () => {
      expect(l.removeAt(0).data).to.equal(0);
      expect(l).to.eql(new LinkedList(1, 2, 3));
    });
    it('should throw an error given a negative index', () => {
      expect(() => l.removeAt(-1)).to.throw('removeAt: index must be > -1');
    });
    it('should remove a middle Node at the specified index', () => {
      expect(l.removeAt(1).data).to.equal(1);
      expect(l).to.eql(new LinkedList(0, 2, 3));
    });
    it('should return undefined on an empty list', () => {
      const l = new LinkedList();
      expect(l.removeAt(0)).to.equal(undefined);
    });
  });

  context('remove method', () => {
    const l = new LinkedList();
    const n0 = new Node(0);
    const n1 = new Node(1);
    const n2 = new Node(2);
    const n3 = new Node(3);
    afterEach(() => {
      l.clear();
      l.push(n0, n1, n2, n3);
    });
    it('should return undefined if list is empty', () => {
      expect(l.remove(n0)).to.equal(undefined);
    });
    it('should remove the head node', () => {
      expect(l.remove(n0)).to.equal(n0);
      expect(l).to.eql(new LinkedList(1, 2, 3));
    });
    it('should remove the tail node', () => {
      expect(l.remove(n3)).to.equal(n3);
      expect(l).to.eql(new LinkedList(0, 1, 2));
    });
    it('should remove a middle node', () => {
      expect(l.remove(n2)).to.equal(n2);
      expect(l).to.eql(new LinkedList(0, 1, 3));
    });
    it('should handle a node not contained in the list', () => {
      const n4 = new Node(4);
      expect(l.remove(n4)).to.equal(n4);
      expect(l).to.eql(new LinkedList(0, 1, 2, 3));
    });
    it('should throw an error when argument is not a Node', () => {
      expect(() => l.remove(1)).to.throw();
      expect(() => l.remove()).to.throw();
    });
  });

  context('removeAfter method', () => {
    const l = new LinkedList();
    const n0 = new Node(0);
    const n1 = new Node(1);
    const n2 = new Node(2);
    const n3 = new Node(3);
    afterEach(() => {
      l.clear();
      l.push(n0, n1, n2, n3);
    });
    it('should return undefined if list is empty', () => {
      expect(l.removeAfter(n0)).to.equal(undefined);
      expect(l).to.eql(new LinkedList());
    });
    it('should remove the tail Node', () => {
      expect(l.removeAfter(n2)).to.equal(n3);
      expect(l).to.eql(new LinkedList(0, 1, 2));
    });
    it('should remove a middle Node', () => {
      expect(l.removeAfter(n1)).to.equal(n2);
      expect(l).to.eql(new LinkedList(0, 1, 3));
    });
    it('should return undefined given the tail Node', () => {
      expect(l.removeAfter(n3)).to.equal(undefined);
      expect(l).to.eql(new LinkedList(0, 1, 2, 3));
    });
    it('should throw an error when argument is not a Node', () => {
      expect(() => l.removeAfter(1)).to.throw();
      expect(() => l.removeAfter()).to.throw();
    });
  });

  context('removeBefore method', () => {
    const l = new LinkedList();
    const n0 = new Node(0);
    const n1 = new Node(1);
    const n2 = new Node(2);
    const n3 = new Node(3);
    afterEach(() => {
      l.clear();
      l.push(n0, n1, n2, n3);
    });
    it('should return undefined if list is empty', () => {
      expect(l.removeBefore(n0)).to.equal(undefined);
      expect(l).to.eql(new LinkedList());
    });
    it('should remove the head Node', () => {
      expect(l.removeBefore(n1)).to.equal(n0);
      expect(l).to.eql(new LinkedList(1, 2, 3));
    });
    it('should remove a middle Node', () => {
      expect(l.removeBefore(n2)).to.equal(n1);
      expect(l).to.eql(new LinkedList(0, 2, 3));
    });
    it('should return undefined given the head Node', () => {
      expect(l.removeBefore(n0)).to.equal(undefined);
      expect(l).to.eql(new LinkedList(0, 1, 2, 3));
    });
    it('should throw an error when argument is not a Node', () => {
      expect(() => l.removeBefore(1)).to.throw();
      expect(() => l.removeBefore()).to.throw();
    });
  });

  context('insertBefore method', () => {
    const l = new LinkedList();
    const n0 = new Node(0);
    const n1 = new Node(1);
    const n2 = new Node(2);
    const n3 = new Node(3);
    afterEach(() => {
      l.clear();
      l.push(n0, n1, n2, n3);
    });
    it('should throw an error if list is empty', () => {
      expect(() => l.insertBefore(n0)).to.throw();
    });
    it('should throw an error when node argument is not a Node', () => {
      expect(() => l.insertBefore(1)).to.throw();
      expect(() => l.insertBefore()).to.throw();
    });
    it('should insert a Node before a middle Node', () => {
      l.insertBefore(n2, new Node(1.5));
      expect(l).to.eql(new LinkedList(0, 1, 1.5, 2, 3));
    });
    it('should insert data before the head', () => {
      l.insertBefore(n0, -1);
      expect(l).to.eql(new LinkedList(-1, 0, 1, 2, 3));
    });
  });

  context('insertAfter method', () => {
    const l = new LinkedList();
    const n0 = new Node(0);
    const n1 = new Node(1);
    const n2 = new Node(2);
    const n3 = new Node(3);
    afterEach(() => {
      l.clear();
      l.push(n0, n1, n2, n3);
    });
    it('should throw an error if list is empty', () => {
      expect(() => l.insertAfter(n0)).to.throw();
    });
    it('should throw an error when node argument is not a Node', () => {
      expect(() => l.insertAfter(1)).to.throw();
      expect(() => l.insertAfter()).to.throw();
    });
    it('should insert a Node after a middle Node', () => {
      l.insertAfter(n2, new Node(2.5));
      expect(l).to.eql(new LinkedList(0, 1, 2, 2.5, 3));
    });
    it('should insert data after the tail', () => {
      l.insertAfter(n3, 4);
      expect(l).to.eql(new LinkedList(0, 1, 2, 3, 4));
    });
  });

  context('copy method', () => {
    const original = new LinkedList(1, 2, 3);
    const copy = original.copy();
    it('should return a copy with the same data as the original', () => {
      expect(copy).to.eql(original);
    });
    it('should not mutate original when changes are made to a copy', () => {
      copy.push(4);
      expect(original).to.eql(new LinkedList(1, 2, 3));
      expect(copy).to.eql(new LinkedList(1, 2, 3, 4));
    });
  });

  context('slice method', () => {
    const l = new LinkedList();
    it('should work with an empty list', () => {
      const empty = new LinkedList();
      expect(l.slice()).to.eql(empty);
      expect(l.slice(1)).to.eql(empty);
      expect(l.slice(1, 15)).to.eql(empty);
      expect(l.slice(-1)).to.eql(empty);
      expect(l.slice(-1, -3)).to.eql(empty);
      expect(l.slice(-3, -1)).to.eql(empty);
    });
    it('should return an empty list because of start/end', () => {
      l.push(0, 1, 2, 3);
      expect(l.slice(-2, 0)).to.eql(new LinkedList());
      expect(l.slice(2, 0)).to.eql(new LinkedList());
      expect(l.slice(3, 1)).to.eql(new LinkedList());
      expect(l.slice(-1, -2)).to.eql(new LinkedList());
    });
    it('should copy the list', () => {
      expect(l.slice()).to.eql(l);
      expect(l.slice(0)).to.eql(l);
      expect(l.slice(0, 15)).to.eql(l);
    });
    it('should slice off the head', () => {
      expect(l.slice(1)).to.eql(new LinkedList(1, 2, 3));
      expect(l).to.eql(new LinkedList(0, 1, 2, 3));
    });
    it('should slice off the head and tail', () => {
      expect(l.slice(1, 3)).to.eql(new LinkedList(1, 2));
      expect(l).to.eql(new LinkedList(0, 1, 2, 3));
    });
    it('should slice off the tail', () => {
      expect(l.slice(0, 3)).to.eql(new LinkedList(0, 1, 2));
      expect(l).to.eql(new LinkedList(0, 1, 2, 3));
    });
    it('should slice from the tail given a negative index', () => {
      expect(l.slice(-2)).to.eql(new LinkedList(2, 3));
      expect(l.slice(-3, -1)).to.eql(new LinkedList(1, 2));
      expect(l).to.eql(new LinkedList(0, 1, 2, 3));
      const a = [0, 1, 2, 3];
    });
  });
});
