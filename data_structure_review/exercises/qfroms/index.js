// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

// class Queue {
//   constructor() {
//     this.stack1 = new Stack;
//     this.stack2 = new Stack;
//   }
//   add(el) {
//     this.stack1.push(el);
//   }
//   remove() {
//     // shift elements with peek
//     this.peek();
//     // pop & return element from stack1
//     const el = this.stack1.pop();
//     // replace it by moving one element from stack2 to stack1
//     this.stack1.push(this.stack2.pop());
//     return el;
//   }
//   peek() {
//     // push all from stack1 to stack2
//     while (this.stack1.peek())
//       this.stack2.push(this.stack1.pop());
//     // shift one back to stack1
//     this.stack1.push(this.stack2.pop());
//     // peek at stack1
//     return this.stack1.peek();
//   }
// }

class Queue {
  constructor() {
    Stack.prototype.moveOneTo = function(stack) {
      stack.push(this.pop());
    };
    Stack.prototype.moveAllTo = function(stack) {
      while (this.peek()) stack.push(this.pop());
    };
    this.stack1 = new Stack;
    this.stack2 = new Stack;
  }
  add(el) {
    this.stack1.push(el);
  }
  remove() {
    this.peek();
    const el = this.stack1.pop();
    this.stack2.moveOneTo(this.stack1);
    return el;
  }
  peek() {
    this.stack1.moveAllTo(this.stack2);
    this.stack2.moveOneTo(this.stack1);
    return this.stack1.peek();
  }
}

module.exports = Queue;
