const Queue = require('./queueArray');

const {expect} = require('chai');

describe('Queue class', () => {
  const q = new Queue();
  it('should create an empty Queue', () => {
    expect(q instanceof Queue).to.be.true;
  });
  it('should use an array as its underlying data structure', () => {
    expect(Array.isArray(q.storage)).to.be.true;
  });
  it('should add data to its storage upon creation', () => {
    const queue = new Queue(0, 1, 2, 3);
    expect(queue.storage).to.eql([0, 1, 2, 3]);
  });

  context('enqueue method', () => {
    const q = new Queue();
    it('should add data to an empty Queue', () => {
      q.enqueue(0);
      expect(q).to.eql(new Queue(0));
    });
    it('should add data to the beginning of a Queue', () => {
      q.enqueue(1);
      expect(q).to.eql(new Queue(1, 0));
    });
  });

  context('dequeue method', () => {
    const q = new Queue();
    afterEach(() => q.storage = []);
    it('should return undefined if Queue is empty', () => {
      expect(q.dequeue()).to.equal(undefined);
      expect(q).to.eql(new Queue());
    });
    it('should return & remove data when Queue length is 1', () => {
      q.enqueue(0);
      expect(q.dequeue()).to.equal(0);
      expect(q).to.eql(new Queue());
    });
    it('should remove data in a FIFO fashion', () => {
      q.enqueue(0);
      q.enqueue(1);
      expect(q.dequeue()).to.equal(0);
      expect(q).to.eql(new Queue(1));
      q.enqueue(2);
      q.enqueue(3);
      expect(q.dequeue()).to.equal(1);
      expect(q).to.eql(new Queue(3, 2));
    });
  });
});
