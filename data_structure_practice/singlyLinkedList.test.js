const {Node, LinkedList} = require('./singlyLinkedList');

const { expect } = require('chai');

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

  context('push method', () => {
    it('should add a Node to the end of the LinkedList', () => {
      const l = new LinkedList(0, 1, 2);
      const n = new Node(3);
      l.push(n);
      expect(l.head.next.next.next).to.equal(n);
      expect(l.tail).to.equal(n);
    });
    it('should add a Node if passed data', () => {
      const l = new LinkedList();
      l.push(2);
      expect(l.head.data).to.equal(2);
    });
    it('should add multiple', () => {
      const l = new LinkedList(0);
      const n = new Node(2);
      l.push(1, n);
      expect(l.head.data).to.equal(0);
      expect(l.head.next.data).to.equal(1);
      expect(l.head.next.next).to.equal(n);
      expect(l.tail).to.equal(n);
    });
  });

  context('getLast method', () => {
    it('should return the last Node', () => {
      const l = new LinkedList(1, 2);
      const n = new Node(3);
      l.push(n);
      expect(l.getLast()).to.equal(n);
    });
  });

  context('should be iterable', () => {
    it(', work with for..of', () => {
      const l = new LinkedList(0, 1, 2, 3);
      let result = 0;
      for (const node of l) {
        result += node.data;
      }
      expect(result).to.equal(6);
    });
    it('and work with ...', () => {
      const l = [...new LinkedList(0, 1, 2, 3)];
      let result = 0;
      l.forEach(node => result += node.data);
      expect(result).to.equal(6);
    });
  });

  context('traverse method', () => {
    it('should not throw on an empty list', () => {
      const l = new LinkedList();
      expect(l.traverse(console.log)).not.to.throw;
    });
    it('should apply a passed-in function', () => {
      const l = new LinkedList(1);
      let result;
      l.traverse(n => result = n.data + 1);
      expect(result).to.equal(2);
    });
    it('should apply traverse through every node', () => {
      const l = new LinkedList(1, 2, 3);
      let result = 0;
      l.traverse(n => result += n.data);
      expect(result).to.equal(6);
    });
    it('should work with indices', () => {
      const l = new LinkedList(0, 1, 2);
      let result = 0;
      l.traverse((n, i) => result += n.data * i);
      expect(result).to.equal(5);
    });
    it('should work with list reference', () => {
      const l = new LinkedList(2, 3, 4, 5);
      let result = 0;
      l.traverse((n, i, list) => result += n.data * list.head.data);
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
      expect(l.head.next.next).to.be.null;
      expect(l.tail.data).to.equal(2);
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

  context('insertAt method', () => {
    const l = new LinkedList();
    afterEach(() => {
      l.head = null;
      l.tail = null;
    });
    it('should throw an error if index is negative', () => {
      expect(() => l.insertAt(-2, 2)).to.throw;
    });
    it('should set head/tail when the list is empty, even when index > 0', () => {
      l.insertAt(23, 2);
      expect(l.head.data).to.equal(2);
      expect(l.tail.data).to.equal(2);
    });
    it('should insert data at head when index is 0 for a non-empty list', () => {
      l.push(1, 2, 3);
      l.insertAt(0, 0);
      expect(l.head.data).to.equal(0);
      expect(l.head.next.data).to.equal(1);
    });
    it('should insert data at the specified index', () => {
      l.push(0, 1, 3);
      l.insertAt(2, 2);
      expect(l.head.next.next.data).to.equal(2);
    });
    it('should insert data at tail if index is >= the list\'s size', () => {
      l.push(0, 1, 2);

      l.insertAt(3, 3);
      expect(l.tail.data).to.equal(3);
      expect(l.head.next.next.next.data).to.equal(3);

      l.insertAt(23, 4);
      expect(l.tail.data).to.equal(4);
      expect(l.head.next.next.next.next.data).to.equal(4);
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

  context('filter method', () => {
    const l = new LinkedList(1, 2, 3);
    it('should return a new LinkedList filtered based on passed-in function', () => {
      expect(l.filter(n => n.data % 2)).to.eql(new LinkedList(1, 3));
    });
    it('should work when using index and list params', () => {
      const filtered = l.filter((n, index, list) => {
        return index === 1 && n !== list.tail && n !== list.head;
      });
      expect(filtered).to.eql(new LinkedList(2));
    });
    it('should not mutate the original LinkedList', () => {
      expect(l).to.eql(new LinkedList(1, 2, 3));
    });
  });

  context('map method', () => {
    const original = new LinkedList(1, 2, 3);
    it('should return a copy of the original, altered by the mapping fn', () => {
      const copy = original.map((n, i, list) => {
        if (n === list.head) return n.data + 6;
        if (!(n.data % 2)) return n.data + 5;
        if (i === 2) return n.data * 2 + 1;
      });
      expect(copy).to.eql(new LinkedList(7, 7, 7));
    });
    it('should not mutate the original', () => {
      expect(original).to.eql(new LinkedList(1, 2, 3));
    });
  });

  context('removeAt method', () => {
    let l = new LinkedList(0, 1, 2, 3);
    afterEach(() => l = new LinkedList(0, 1, 2, 3));
    it('should remove and return the tail Node', () => {
      expect(l.removeAt(3).data).to.equal(3);
      expect(l.tail.data).to.equal(2);
      expect(l.head.next.next.data).to.equal(2);
    });
    it('should remove the tail node given an index > list length - 1', () => {
      expect(l.removeAt(23).data).to.equal(3);
      expect(l.tail.data).to.equal(2);
      expect(l.head.next.next.data).to.equal(2);
    });
    it('should remove the head node', () => {
      expect(l.removeAt(0).data).to.equal(0);
      expect(l.head.data).to.equal(1);
      expect(l.head.next.data).to.equal(2);
    });
    it('should throw an error given a negative index', () => {
      expect(() => l.removeAt(-1)).to.throw;
    });
    it('should remove a middle Node at the specified index', () => {
      expect(l.removeAt(1).data).to.equal(1);
      expect(l.head.data).to.equal(0);
      expect(l.tail.data).to.equal(3);
      expect(l).to.eql(new LinkedList(0, 2, 3));
    });
  });
});
