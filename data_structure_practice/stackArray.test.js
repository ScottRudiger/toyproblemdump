const Stack = require('./stackArray');

const {expect} = require('chai');

describe('Stack class', () => {
  const stack = new Stack();
  it('should create a Stack', () => {
    expect(stack instanceof Stack).to.be.true;
  });
  it('should use an Array as its underlying data structure', () => {
    expect(Array.isArray(stack.storage)).to.be.true;
  });
  it('should store data in its storage', () => {
    expect(new Stack(0, 1, 2, 3).storage).to.eql([0, 1, 2, 3]);
  });

  context('push method', () => {
    const stack = new Stack();
    it('should add data to an empty Stack', () => {
      stack.push(0);
      expect(stack).to.eql(new Stack(0));
    });
    it('should add data to the end of a Stack', () => {
      stack.push(1);
      expect(stack).to.eql(new Stack(0, 1));
      stack.push(2);
      expect(stack).to.eql(new Stack(0, 1, 2));
    });
  });

  context('pop method', () => {
    const stack = new Stack();
    afterEach(() => stack.storage = []);
    it('should return undefined for an empty Stack', () => {
      expect(stack.pop()).to.equal(undefined);
      expect(stack).to.eql(new Stack());
    });
    it('should return the last in when storage has a length of 1', () => {
      stack.push(0);
      expect(stack.pop()).to.equal(0);
      expect(stack).to.eql(new Stack());
    });
    it('should return the last in when storage has more than 1 item', () => {
      stack.push(0);
      stack.push(1);
      stack.push(2);
      expect(stack.pop()).to.equal(2);
      expect(stack).to.eql(new Stack(0, 1));
    });
  });

  context('peek method', () => {
    const stack = new Stack();
    it('should return undefined when Stack is empty', () => {
      expect(stack.peek()).to.equal(undefined);
    });
    it('should return the only data when Stack\'s storage is length: 1', () => {
      stack.push(0);
      expect(stack.peek()).to.equal(0);
    });
    it('should not remove the data from the stack', () => {
      expect(stack).to.eql(new Stack(0));
    });
    it('should return the last element pushed to the Stack', () => {
      stack.push(1);
      stack.push(2);
      expect(stack.peek()).to.equal(2);
      expect(stack).to.eql(new Stack(0, 1, 2));
    });
  });
});
