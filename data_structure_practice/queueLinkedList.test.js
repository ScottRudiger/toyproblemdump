const Queue = require('./queueLinkedList');
const {LinkedList, Node} = require('./doublyLinkedList');

const {expect} = require('chai');

describe('Queue', () => {
  it('should use a LinkedList as its underlying data structure', () => {
    const q = new Queue(0, 1, 2, 3);
    expect(q.storage).to.eql(new LinkedList(0, 1, 2, 3));
  });

  context('enqueue method', () => {
    const q = new Queue();
    it('should add data to an empty Queue', () => {
      q.enqueue(0);
      expect(q).to.eql(new Queue(0));
    });
    it('should add data to a Queue of size 1', () => {
      q.enqueue(1);
      expect(q).to.eql(new Queue(0, 1));
    });
    it('should add data again--just to be sure', () => {
      q.enqueue(2);
      expect(q).to.eql(new Queue(0, 1, 2));
    });
  });

  context('dequeue method', () => {
    const q = new Queue();
    afterEach(() => q.storage.clear());
    it('should returned undefined when Queue is empty', () => {
      expect(q.dequeue()).to.equal(undefined);
      expect(q).to.eql(new Queue());
    });
    it('should return the head\'s data and set head/tail to null when size is 1', () => {
      q.enqueue(0);
      expect(q.dequeue()).to.equal(0);
      expect(q).to.eql(new Queue());
    });
    it('should work when size = 2', () => {
      q.enqueue(0);
      q.enqueue(1);
      expect(q.dequeue()).to.equal(0);
      expect(q).to.eql(new Queue(1));
    });
    it('should work when size = 3', () => {
      q.enqueue(0);
      q.enqueue(1);
      q.enqueue(2);
      expect(q.dequeue()).to.equal(0);
      expect(q).to.eql(new Queue(1, 2));
    });
  });
});
