// implement a stack with O(1) time complexity for insertion, deletion, and finding the minimum value

const Stack = require('./stackLinkedList');

class minStack {
  constructor() {
    this.storage = new Stack();
    this.min = new Stack(Infinity);
  }
  push(data) {
    this.min.push(
      // if data is less than current minimum
      data < this.min.peek()
      // push data to min
      ? data
      // else, push the current minimum again
      : this.min.peek()
    );
    // push data to storage
    this.storage.push(data);
  }
  pop() {
    // if next value is not Infinity, pop from min
    if (this.min.peek() < Infinity) this.min.pop();
    // pop value from storage and return it
    return this.storage.pop();
  }
}

const {expect} = require('chai');

describe('minStack class', () => {
  let m = new minStack();
  afterEach(() => m = new minStack());

  it('should create an instance of minStack', () => {
    expect(m).to.be.an.instanceof(minStack);
  });
  it('should store data in a Stack', () => {
    expect(m.storage).to.be.an.instanceof(Stack);
  });
  it('should store minimum values in a Stack', () => {
    expect(m.min).to.be.an.instanceof(Stack);
  });
  it('should use Stacks w/ a linked list as the underlying data structure', () => {
    const {LinkedList} = require('./doublyLinkedList');
    expect(m.storage.storage).to.be.an.instanceof(LinkedList);
    expect(m.min.storage).to.be.an.instanceof(LinkedList);
  });
  it('should have a default min value of Infinity', () => {
    expect(m.min.peek()).to.equal(Infinity);
  });

  context('push method', () => {
    it('should push to storage', () => {
      m.push(1);
      m.push(2);
      m.push(3);
      expect(m.storage).to.eql(new Stack(1, 2, 3));
    });
    it('should push the minimum value to min when it doesn\'t change', () => {
      m.push(1);
      m.push(2);
      m.push(3);
      expect(m.min).to.eql(new Stack(Infinity, 1, 1, 1));
    });
    it('should push the minimum value as it changes', () => {
      m.push(3);
      m.push(2);
      m.push(1);
      expect(m.min).to.eql(new Stack(Infinity, 3, 2, 1));
    });
  });

  context('pop method', () => {
    it('should remove/return data from storage in a LIFO fashion', () => {
      m.push(1);
      m.push(2);
      m.push(3);
      expect(m.pop()).to.equal(3);
      expect(m.pop()).to.equal(2);
      expect(m.pop()).to.equal(1);
    });
    it('should return undefined when the minStack is empty', () => {
      expect(m.pop()).to.equal(undefined);
    });
    it('should remove from the minStack with each pop', () => {
      m.push(3);
      m.push(2);
      m.push(1);
      m.pop();
      expect(m.min).to.eql(new Stack(Infinity, 3, 2));
      m.pop();
      expect(m.min).to.eql(new Stack(Infinity, 3));
      m.pop();
      expect(m.min).to.eql(new Stack(Infinity));
    });
    it('should not remove Infinity from min', () => {
      m.pop();
      expect(m.min).to.eql(new Stack(Infinity));
      m.pop();
      expect(m.min).to.eql(new Stack(Infinity));
    });
  });
});
