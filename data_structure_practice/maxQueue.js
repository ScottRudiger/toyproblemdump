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
  enqueue(data) {
    // if the MaxQueue is empty,
    if (!this.dqStack.peek()) {
      // push data to the dequeue Stack and indicate it's the max;
      this.dqStack.push([data, data]); // e.g., enqueue(8) ==> [data: 8, max: 8]
    } else {
      // otherwise, the MaxQueue is not empty; push data to enqueue Stack
      this.eqStack.push([data]);
      // save a reference to the tuple that's next in line to be dequeued
      const next = this.dqStack.peek();
      // if the enqueueing data is > the max in that tuple, update it
      if (data > next[1]) next[1] = data;
    }
  }
}

module.exports = MaxQueue;
