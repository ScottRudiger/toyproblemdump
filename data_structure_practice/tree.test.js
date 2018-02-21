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

    context('add method', () => {
      it('should add a child', () => {
        n.add(1);
        expect(n.children[0].data).to.equal(1);
      });
      it('should add multiple children', () => {
        n.add(2, 3);
        expect(n.children[1].data).an.equal(2);
        expect(n.children[2].data).an.equal(3);
      });
    });
  });

  context('constructor', () => {
    const n = new Node(1);
    const t = new Tree(n);
    it('should create a Tree', () => {
      expect(t).to.be.an.instanceof(Tree);
    });
    it('should accept a Node and set it as the Tree\'s root', () => {
      expect(t.root).to.equal(n);
    });
  });

  context('traverseDF method', () => {
    const n = new Node(1);
    const t = new Tree(n);
    t.root.add(2, 4);
    t.root.children[0].add(3);
    /*  Tree:
              1
            /   \
           2    4
          /
         3
    */
    const ordered = [];
    t.traverseDF(n => ordered.push(n.data));
    expect(ordered).to.eql([1, 2, 3, 4]);
  });
});
