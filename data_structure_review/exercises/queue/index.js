// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// more efficient add
// class Queue {
//   constructor() {
//     this.data = [];
//   }
//   add(el) {
//     this.data.push(el);
//   }
//   remove() {
//     return this.data.shift();
//   }
// }

// more efficient remove
class Queue {
  constructor() {
    this.data = [];
  }
  add(el) {
    this.data.unshift(el);
  }
  remove() {
    return this.data.pop();
  }
}

module.exports = Queue;
