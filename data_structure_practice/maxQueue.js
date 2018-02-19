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
  moveAllFromEqToDq() {
    // start max at -Infinity for comparison with the first value
    let max = -Infinity;
    // until enqueue Stack is empty,
    while (this.eqStack.peek()) {
      // pop from enqueue Stack and save its data
      const [data] = this.eqStack.pop();
      // if data is > max, set max to data
      if (data > max) max = data;
      // push to dequeue Stack and indicate the current max; e.g., [data: 7: max: 8]
      this.dqStack.push([data, max]);
    }
  }
  dequeue() {
    // if the MaxQueue is empty, return undefined
    if (!this.dqStack.peek()) return;
    // pop from the dequeue Stack and save it's data
    const [data] = this.dqStack.pop();
    // if there's no data left in dequeue Stack, move all data from enqueue Stack
    if (!this.dqStack.peek()) this.moveAllFromEqToDq();
    // return the data
    return data;
  }
  peek() {
    // if the MaxQueue is empty, return undefined
    if (!this.dqStack.peek()) return;
    // peek at dequeue Stack and return its data
    return this.dqStack.peek()[0];
  }
}

module.exports = MaxQueue;
