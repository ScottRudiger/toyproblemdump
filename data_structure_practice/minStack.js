// implement a stack with O(1) time complexity for insertion, deletion, and finding the minimum value

const Stack = require('./stackLinkedList');

class minStack {
  constructor() {
    this.storage = new Stack();
    this.min = new Stack(Infinity);
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
});
