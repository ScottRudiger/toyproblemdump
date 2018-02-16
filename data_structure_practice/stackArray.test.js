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
});
