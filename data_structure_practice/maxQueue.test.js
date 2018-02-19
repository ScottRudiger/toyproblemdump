const MaxQueue = require('./maxQueue');
const Stack = require('./stackLinkedList');

const { expect } = require('chai');

describe('MaxQueue class', () => {
  let m = new MaxQueue();
  afterEach(() => m = new MaxQueue());
  it('should create an instance of MaxQueue', () => {
    expect(m).to.be.an.instanceof(MaxQueue);
  });
  it('should be implemented using two Stacks', () => {
    for (const prop in m) expect(m[prop]).to.be.an.instanceof(Stack);
  });
  it('should use Stacks that store data in a linked list', () => {
    const {LinkedList} = require('./doublyLinkedList');
    for (const prop in m) expect(m[prop].storage).to.be.an.instanceof(LinkedList);
  });

  context('enqueue method', () => {
    it('should add data to the dequeue Stack if MaxQueue is empty', () => {
      m.enqueue(1);
      expect(m.dqStack).to.not.eql(new Stack());
      expect(m.eqStack).to.eql(new Stack());
    });
    it('should add data to the enqueue Stack if MaxQueue is not empty', () => {
      m.enqueue(1);
      m.enqueue(2);
      expect(m.dqStack).to.not.eql(new Stack());
      expect(m.eqStack).to.not.eql(new Stack());
    });
  });

  context('dequeue method', () => {
    it('should remove/return values in a FIFO fashion', () => {
      m.enqueue(1);
      m.enqueue(2);
      m.enqueue(3);
      expect(m.dequeue()).to.equal(1);
      expect(m.dequeue()).to.equal(2);
      expect(m.dequeue()).to.equal(3);
      expect(m.dequeue()).to.equal(undefined);
    });
    it('should move all data from eqStack to dqStack when dqStack is empty', () => {
      m.enqueue(1);
      m.enqueue(2);
      m.enqueue(3);
      m.dequeue();
      expect(m.eqStack).to.eql(new Stack());
      expect(m.dqStack).to.not.equal(new Stack);
    });
  });
});
