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
});
