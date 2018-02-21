const {Node, BSTree} = require('./BSTree');

const {expect} = require('chai');

describe('BSTree class', () => {
  context('Node constructor', () => {
    it('should create a Node', () => {
      expect(new Node()).to.be.an.instanceof(Node);
    });
    it('should set a data property', () => {
      expect(new Node(1).data).to.equal(1);
    });
    it('should default left & right properties to null', () => {
      const n = new Node(1);
      expect(n.left).to.be.null;
      expect(n.right).to.be.null;
    });
    it('should set left & right properties', () => {
      const n = new Node(2, 1, 3);
      expect(n.left.data).to.equal(1);
      expect(n.right.data).to.equal(3);
    });
  });

  context('constructor', () => {
    const b = new BSTree();
    it('should create a BSTree', () => {
      expect(b).to.be.an.instanceof(BSTree);
    });
    it('should default root to null', () => {
      expect(b.root).to.be.null;
    });
    it('should set root given a Node', () => {
      const n = new Node(1);
      expect(new BSTree(n).root).to.equal(n);
    });
    it('should set root given a value', () => {
      expect(new BSTree(1).root.data).to.equal(1);
    });
  });
});
