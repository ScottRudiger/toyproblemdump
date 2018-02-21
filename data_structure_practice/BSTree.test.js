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
    it('should build a tree given multiple values', () => {
      const b = new BSTree(2, 1, 3);
      expect(b.root.data).to.equal(2);
      expect(b.root.left.data).to.equal(1);
      expect(b.root.right.data).to.equal(3);
    });
  });

  context('insert method', () => {
    let b = new BSTree();
    afterEach(() => b = new BSTree());
    it('should set root if root isn\'t yet defined', () => {
      b.insert(2);
      expect(b.root.data).to.equal(2);
    });
    it('should insert a Node to the left', () => {
      b.insert(2);
      b.insert(1);
      expect(b.root.left.data).to.equal(1);
    });
    it('should insert a Node to the right', () => {
      b.insert(2);
      b.insert(3);
      expect(b.root.right.data).to.equal(3);
    });
    it('should insert multiple values', () => {
      b.insert(2, 1, 3);
      expect(b.root.data).to.equal(2);
      expect(b.root.left.data).to.equal(1);
      expect(b.root.right.data).to.equal(3);
    });
    it('should insert multiple Nodes', () => {
      const n2 = new Node(2);
      const n1 = new Node(1);
      const n3 = new Node(3);
      b.insert(n2, n1, n3);
      expect(b.root).to.equal(n2);
      expect(b.root.left).to.equal(n1);
      expect(b.root.right).to.equal(n3);
    });
    it('should insert more data', () => {
      b.insert(5, 7, 3, 6, 4, 10, 1, 8, 9);
      expect(b.root.data).to.equal(5);
      expect(b.root.right.data).to.equal(7);
      expect(b.root.left.data).to.equal(3);
      expect(b.root.right.left.data).to.equal(6);
      expect(b.root.left.right.data).to.equal(4);
      expect(b.root.right.right.data).to.equal(10);
      expect(b.root.left.left.data).to.equal(1);
      expect(b.root.right.right.left.data).to.equal(8);
      expect(b.root.right.right.left.right.data).to.equal(9);
    });
  });
});
