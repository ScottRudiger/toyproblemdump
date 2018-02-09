// implement a singly linked list

class Node {
  constructor(data, next) {
    // if data is already a node, return it (allows for methods to take in data or nodes)
    if (data instanceof Node) return data;
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
    ? this.head = null
    // otherwise, set list's head to head and push the rest of the data
    : this.push(head, ...data);
  }
  push(datum, ...data) { // O(1) to add one item, O(n) to add multiple
    // save reference to old tail
    const oldTail = this.tail;
    // save reference to new tail
    const newTail = new Node(datum);
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
    // if multiple pieces of data were passed in, call pushBatch
    if (data.length) this.pushBatch(data);
  }
  pushBatch(data) { // O(n)
    // call push on each piece of data
    for (const datum of data) this.push(datum);
  }
  getLast() {
    return this.tail;
  }
  *[Symbol.iterator]() {
    // start at head
    let node = this.head;
    // if head isn't null (non-empty linked list)
    if (node) {
      // until node is null
      while(node) {
        // yield each node
        yield node;
        // and set node to next node
        node = node.next;
      }
    }
  }
  traverse(fn) { // O(n)
    // iterate through nodes
    let i = -1;
    for (const node of this) {
      // apply fn to each node
      fn(node, ++i, this);
    }
  }
  pop() { // O(n) to update tail since this isn't a doubly linked list
    // save reference to last Node
    const last = this.getLast();
    // iterate until node.next is last
    this.traverse(node => {
      if (node.next === last) {
        // separate last from list by setting the previous Node's next to null
        node.next = null;
        // set tail to previous Node
        this.tail = node;
      }
    });
    // return the popped Node
    return last;
  }
  size() { // O(n) looping for size rather than increment/decrement w/ each operation
    // initialize size at 0
    let size = 0;
    // if list is not empty,
    if (this.head) {
      // iterate through nodes
      this.traverse((node, i) => {
        // if node is the tail, set size to i + 1 since indices are zero-based
        if (node === this.tail) size = i + 1;
      });
    }
    return size;
  }
  insertAt(index, data) {
    // if index is < 0, throw an error
    if (index < 0) throw new Error('index must be > -1');
    // if list is empty set head/tail to data, regardless of index
    if (!this.head) return this.push(data);
    // if index is 0,
    if (index === 0) {
      // set head to data, and head's next to old head
      this.head = new Node(data, this.head);
      return;
    }
    // traverse list for all other cases
    let done;
    // pass on refactoring further to use break instead of done flag
    this.traverse((node, i) => {
      if (done) return;
      // if node is the tail,
      if (node === this.tail) {
        // push the data
        this.push(data);
        // to avoid stack overflow, set done flag to true
        return done = true;
      }
      // if node is the node before specified index
      if (i + 1 === index) {
        // save node.next
        const next = node.next;
        // set next to new Node and relink next
        node.next = new Node(data, next);
        // to avoid stack overflow, set done flag to true
        done = true;
      }
    });
  }
  copy() {
    // initialize copy (empty array)
    const copy = [];
    // traverse the original LinkedList, pushing each Node's data to the copy
    this.traverse(n => copy.push(n.data));
    // return a new LinkedList based on the copied data
    return new LinkedList(...copy);
  }
  filter(fn) {
    // make a copy of original LinkedList and filter it based on passed-in fn
    const filtered = [...this.copy()].filter(fn);
    // return a new LinkedList based on the filtered data
    return new LinkedList(...filtered);
  }
  map(fn) {
    // initialize copy as empty array
    const copy = [];
    // intialize i at -1
    let i = -1
    // loop through nodes
    for (let node of this) {
      // save reference to original node
      const original = node;
      // apply map fn to node and push it to copy
      copy.push(fn(node, ++i, this));
      // reset node original LinkedList to prevent mutation
      node = original;
    }
    return new LinkedList(...copy);
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
});
