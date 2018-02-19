// implement a queue with O(1) time complexity for insertion, deletion, and finding the maximum value

const Queue = require('./queueLinkedList');

class MaxQueue {
  constructor() {
    this.storage = new Queue();
    this.max = new Queue(-Infinity);
  }
}

const {expect} = require('chai');

describe('MaxQueue class', () => {
  const m = new MaxQueue();
  it('should store data in a Queue', () => {
    expect(m.storage).to.be.an.instanceof(Queue);
  });
  it('should store maximum values in a Queue', () => {
    expect(m.max).to.be.an.instanceof(Queue);
  });
  it('should use Queues that store data in a linked list', () => {
    const {LinkedList} = require('./doublyLinkedList');
    expect(m.storage.storage).to.be.an.instanceof(LinkedList);
    expect(m.max.storage).to.be.an.instanceof(LinkedList);
  });
});
