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
// class Queue {
//   constructor() {
//     this.data = [];
//   }
//   add(el) {
//     this.data.unshift(el);
//   }
//   remove() {
//     return this.data.pop();
//   }
// }

// Queue w/o Array
const fromEntries = require('object.fromentries');
fromEntries.shim();
class Queue {
  constructor() {
    this.data = {};
  }
  add(el) {
    // move all other elements up one index
    this.data = Object.fromEntries(
      Object.entries(this.data).map(([i, el]) => [i + 1, el])
    );
    // add new element to beginning
    this.data[0] = el;
  }
  remove() {
    // if queue is empty return undefined
    if (!this.data[0]) return;
    // save element
    const [i, el] = Object.entries(this.data).pop();
    // delete it
    delete this.data[i];
    return el;
  }
}

module.exports = Queue;
