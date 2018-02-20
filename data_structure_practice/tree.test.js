const {Node, Tree} = require('./tree');

const {expect} = require('chai');

describe('Tree class', () => {
  context('Node constructor', () => {
    const n = new Node(1);
    it('should create an instance of Node', () => {
      expect(n).to.be.an.instanceof(Node);
    });
    it('should store data', () => {
      expect(n.data).to.equal(1);
    });
    it('should store children in an Array', () => {
      expect(n.children).to.be.an('array');
    });
  });
});
