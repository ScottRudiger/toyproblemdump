const Stack = require('./stackLinkedList');
const {LinkedList} = require('./doublyLinkedList');

const {expect} = require('chai');

describe('Stack class', () => {
  const stack = new Stack();
  it('should create an instance of Stack', () => {
    expect(stack instanceof Stack).to.be.true;
  });
  it('should use a LinkedList for storage', () => {
    expect(stack.storage instanceof LinkedList).to.be.true;
  });
  it('should add data to its storage', () => {
    expect(new Stack(1, 2, 3).storage).to.eql(new LinkedList(1, 2, 3));
  });

  context('push method', () => {
    it('should add data to an empty Stack', () => {
      const stack = new Stack();
      stack.push(1);
      expect(stack).to.eql(new Stack(1));
    });
    it('should add data to a non-empty Stack', () => {
      const stack = new Stack(0, 1);
      stack.push(2);
      expect(stack).to.eql(new Stack(0, 1, 2));
    });
  });

  context('pop method', () => {
    const stack = new Stack();
    afterEach(() => stack.storage.clear());
    it('should return undefined when the Stack is empty', () => {
      expect(stack.pop()).to.equal(undefined);
      expect(stack).to.eql(new Stack());
    });
    it('should return and remove the only data when storage size is 1', () => {
      stack.push(0);
      expect(stack.pop()).to.equal(0);
      expect(stack).to.eql(new Stack());
    });
    it('should return the most recently added data and remove it', () => {
      stack.push(0);
      stack.push(1);
      stack.push(2);
      expect(stack.pop()).to.equal(2);
      expect(stack).to.eql(new Stack(0, 1));
    });
  });

  context('peek method', () => {
    it('should return undefined when the Stack is empty', () => {
      const stack = new Stack();
      expect(stack.peek()).to.equal(undefined);
    });
    it('should return, but not remove, the only data when Stack is size: 1', () => {
      const stack = new Stack(1);
      expect(stack.peek()).to.equal(1);
      expect(stack).to.eql(new Stack(1));
    });
    it('should return, but not remove, the most recently added data', () => {
      const stack = new Stack(1, 2, 3);
      expect(stack.peek()).to.equal(3);
      expect(stack).to.eql(new Stack(1, 2, 3));
    });
    it('should return the same data as the pop method', () => {
      const stack = new Stack(1, 2);
      const peeked = stack.peek();
      const popped = stack.pop();
      expect(peeked).to.equal(popped);
    });
  });
});
