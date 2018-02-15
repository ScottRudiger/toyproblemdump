const Queue = require('./queueLinkedList');
const {LinkedList, Node} = require('./doublyLinkedList');

const {expect} = require('chai');

describe('Queue', () => {
  it('should use a LinkedList as its underlying data structure', () => {
    const q = new Queue(0, 1, 2, 3);
    expect(q.storage).to.eql(new LinkedList(0, 1, 2, 3));
  });
});
