// implement a queue with O(1) time complexity for insertion, deletion, and finding the maximum value

const Stack = require('./stackLinkedList');

class MaxQueue {
  constructor(...data) {
    // create a dequeue Stack from which we'll pop
    this.dqStack = new Stack();
    // create an enqueue Stack to which we'll push
    this.eqStack = new Stack();
    // if enqueueing data at construction, iterate through data and enqueue each
    if (data.length) for (const datum of data) this.enqueue(datum);
  }
}

module.exports = MaxQueue;
