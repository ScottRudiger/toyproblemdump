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

  context('peek method', () => {
    it('should return the only value enqueued', () => {
      m.enqueue(1);
      expect(m.peek()).to.equal(1);
    });
    it('should return the first value enqueued', () => {
      m.enqueue(1);
      m.enqueue(2);
      expect(m.peek()).to.equal(1);
    });
    it('should return undefined when MaxQueue is empty', () => {
      expect(m.peek()).to.equal(undefined);
    });
  });

  context('getMax method', () => {
    it('should consistently return the max value with increasing data', () => {
      const inc = new MaxQueue(1, 2, 3);
      expect(inc.getMax()).to.equal(3);
      m.dequeue();
      expect(inc.getMax()).to.equal(3);
      m.dequeue();
      expect(inc.getMax()).to.equal(3);
    });
    it('should consistently return the max value with decreasing data', () => {
      const dec = new MaxQueue(3, 2, 1);
      expect(dec.getMax()).to.equal(3);
      dec.dequeue();
      expect(dec.getMax()).to.equal(2);
      dec.dequeue();
      expect(dec.getMax()).to.equal(1);
    });
    it('should consistently return the max value with unsorted data', () => {
      const mix = new MaxQueue(3, 5, 2, 4, 1);
      expect(mix.getMax()).to.equal(5);
      mix.dequeue();
      expect(mix.getMax()).to.equal(5);
      mix.dequeue();
      expect(mix.getMax()).to.equal(4);
      mix.dequeue();
      expect(mix.getMax()).to.equal(4);
      mix.dequeue();
      expect(mix.getMax()).to.equal(1);
    });
    it('should return the max when an enqueue follows a dequeue', () => {
      m.enqueue(1);
      m.enqueue(2);
      m.enqueue(3);
      m.enqueue(4);
      m.dequeue();
      m.enqueue(0);
      expect(m.getMax()).to.equal(4);
    });
    it('should return undefined when MaxQueue is empty', () => {
      expect(m.getMax()).to.equal(undefined);
    });
  });
});
