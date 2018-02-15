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
      expect(q.storage).to.eql(new LinkedList(0));
    });
    it('should add data to a Queue of size 1', () => {
      q.enqueue(1);
      expect(q.storage).to.eql(new LinkedList(0, 1));
    });
    it('should add data again--just to be sure', () => {
      q.enqueue(2);
      expect(q.storage).to.eql(new LinkedList(0, 1, 2));
    });
  });
});
