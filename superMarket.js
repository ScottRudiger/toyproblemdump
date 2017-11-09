// Super Market Queue from https://www.codewars.com/kata/the-supermarket-queue

/*There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

The function has two input variables:

customers: an array (list in python) of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
The function should return an integer, the total time required.

EDIT: A lot of people have been confused in the comments. To try to prevent any more confusion:

There is only ONE queue, and
The order of the queue NEVER changes, and
Assume that the front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
The diagram on the wiki page I linked to at the bottom of the description may be useful.
So, for example:

queueTime([5,3,4], 1)
// should return 12
// because when n=1, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12
N.B. You should assume that all the test input will be valid, as specified above.

P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool*//*eslint-disable*/

queueTime = (customers, n) => {
  let time = 0;
  // first n customers get in line
  let queue = customers.splice(0, n);
  while (queue.some(c => c) || customers.length) {
    // incremement time until all customers have been served
    time++;
    // in each iteration, decrement all customers' values and if an empty space in the queue opens up, insert a new customer
    queue = queue.map(c => c ? --c : customers.shift() - 1);
  }
  return time;
};

queueTime = (customers, n) => {
  // first n customers get in line
  const queue = customers.length && customers.splice(0, n) || [0];
  // place each remaining customer into the queue w/ the shortest wait time
  customers.forEach(c => queue[queue.indexOf(Math.min(...queue))] += c);
  // return the queue w/ the longest total wait time
  return Math.max(...queue);
};

queueTime = (customers, n, t = 0) => {
  // return time once all customers have been served
  if (!customers.length) return t;
  // customers get in line, then remove already served customers
  const queue = customers.splice(0, n).map(c => c - 1).filter(c => c);
  // increment time and recurse
  return queueTime([...queue, ...customers], n, t + 1);
};

queueTime=(c,n)=>{with(Math){x=max;y=min}return x(...c.reduce((t,c)=>(t[t.indexOf(y(...t))]+=c,t),Array(n).fill(0)))}

const {expect} = require('chai');

describe('queueTime function', () => {
  const tests = [
    [[[], 1], 0],
    [[[5], 1], 5],
    [[[2], 5], 2],
    [[[1, 2, 3, 4, 5], 1], 15],
    [[[1, 2, 3, 4, 5], 10], 5],
    [[[2, 2, 3, 3, 4, 4], 2], 9],
    [[[33, 6, 22, 25, 11, 35, 24, 36, 45, 39, 21, 16, 7, 40, 41, 17, 23, 1, 26, 43, 46], 3], 195],
    [[[13, 30, 13, 8, 17, 6, 32, 41, 21, 35, 44, 27], 4], 89],
    [[[49, 13, 10, 46, 24, 43, 24, 5, 23, 22, 48, 50, 13, 31, 38, 5, 50, 24, 16, 11], 2], 275],
    [[[44, 49, 43, 40, 29, 21, 44, 8, 20, 48, 45, 37, 2, 10, 26, 24, 47, 46, 32, 15, 26, 25, 45, 32, 27, 48, 7, 43, 12], 3], 308],
    [[[4, 36, 18, 14, 42, 5, 37, 29, 38, 46, 20, 11, 16, 44, 33, 36, 47, 50, 2, 11, 1, 13, 9], 1], 562],
    [[[32, 35, 28, 21, 38, 21, 14, 6, 50, 43], 6], 77],
    [[[18, 7, 13, 28, 34, 12, 18, 44, 36, 17, 41, 49, 20, 14, 47, 3, 12, 33, 13, 7, 44, 44, 16, 16, 5], 1], 591],
    [[[4, 8, 46, 12, 19, 44, 36, 25, 49, 45, 38, 10, 17, 35], 2], 208],
    [[[31, 10, 23, 14, 29, 3, 23, 24, 35, 36, 47, 13, 10, 12, 48, 21, 34], 5], 97],
    [[[49, 19, 12, 29, 8, 12, 17, 12, 40, 18, 10, 32, 36, 10, 27, 12, 8, 42, 5, 22, 23, 35, 24, 41, 1], 1], 544],
    [[[15, 13, 11, 15, 4, 10, 15, 18, 4, 10, 16, 9, 19, 5], 20], 19],
    [[[201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201], 5], 1608]
  ];

  tests.forEach(test => {
    it(`should return ${test[1]} given ([${test[0][0]}], ${test[0][1]})`, () => {
      expect(queueTime(test[0][0], test[0][1])).to.equal(test[1]);
    });
  });

});
