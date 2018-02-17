// implement a stack with O(1) time complexity for insertion, deletion, and finding the minimum value

const Stack = require('./stackLinkedList');

class MinStack { // O(1) if creating empty MinStack, O(n) to push all the data
  constructor(...data) {
    // store data in a Stack based on doubly linked list so insertion/deletion is O(1)
    this.storage = new Stack();
    // store minimum values in a Stack, with default min of Infinity
    this.min = new Stack(Infinity);
    // for convenience, loop through data and add it to the Stacks
    for (const datum of data) this.push(datum);
  }
  push(data) { // O(1) insertion
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
  pop() { // O(1) deletion
    // if next value is not Infinity, pop from min
    if (this.min.storage.size > 1) this.min.pop();
    // pop value from storage and return it
    return this.storage.pop();
  }
  getMin() { // O(1) to find min value
    // if next value in min is not Infinity,
    return this.min.storage.size > 1
    // return the next value in min
    ? this.min.peek()
    // otherwise, return undefined
    : undefined;
  }
}

const {expect} = require('chai');

describe('MinStack class', () => {
  let m = new MinStack();
  afterEach(() => m = new MinStack());

  it('should create an instance of MinStack', () => {
    expect(m).to.be.an.instanceof(MinStack);
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
      const m = new MinStack(1, 2, 3);
      expect(m.pop()).to.equal(3);
      expect(m.pop()).to.equal(2);
      expect(m.pop()).to.equal(1);
    });
    it('should return undefined when the MinStack is empty', () => {
      expect(m.pop()).to.equal(undefined);
    });
    it('should remove from the MinStack with each pop', () => {
      const m = new MinStack(3, 2, 1);
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

  context('getMin method', () => {
    it('should consistently return the minimum value in an in-order Stack', () => {
      const m = new MinStack(5, 4, 3, 2, 1);
      expect(m.getMin()).to.equal(1);
      expect(m.pop()).to.equal(1);
      expect(m.getMin()).to.equal(2);
      expect(m.pop()).to.equal(2);
      m.push(4);
      expect(m.getMin()).to.equal(3);
      expect(m.pop()).to.equal(4);
      expect(m.getMin()).to.equal(3);
      expect(m.pop()).to.equal(3);
      expect(m.getMin()).to.equal(4);
      expect(m.pop()).to.equal(4);
      expect(m.getMin()).to.equal(5);
      expect(m.pop()).to.equal(5);
      expect(m.getMin()).to.equal(undefined);
      expect(m.pop()).to.equal(undefined);
    });
    it('should consistently return the min value in a reverse-order Stack', () => {
      const m = new MinStack(1, 2, 3, 4);
      expect(m.getMin()).to.equal(1);
      expect(m.pop()).to.equal(4);
      expect(m.getMin()).to.equal(1);
      expect(m.pop()).to.equal(3);
      expect(m.getMin()).to.equal(1);
      expect(m.pop()).to.equal(2);
      expect(m.getMin()).to.equal(1);
      expect(m.pop()).to.equal(1);
      expect(m.getMin()).to.equal(undefined);
    });
    it('should consistently return the min value in an unsorted Stack', () => {
      const m = new MinStack(3, 5, 2, 4, 1);
      expect(m.getMin()).to.equal(1);
      expect(m.pop()).to.equal(1);
      expect(m.getMin()).to.equal(2);
      expect(m.pop()).to.equal(4);
      expect(m.getMin()).to.equal(2);
      expect(m.pop()).to.equal(2);
      expect(m.getMin()).to.equal(3);
      expect(m.pop()).to.equal(5);
      expect(m.getMin()).to.equal(3);
      expect(m.pop()).to.equal(3);
      expect(m.getMin()).to.equal(undefined);
    });
  });
});
