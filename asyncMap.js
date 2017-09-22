'use strict';

/* Implement the function asyncMap:
 *
 * asyncMap has two parameters, an array of asynchronous functions (tasks) and a callback.
 * Each of the tasks takes a separate callback and invokes that callback when complete.
 *
 * The callback passed to asyncMap is then performed on the results of the callbacks of the tasks.
 *
 * The order of these results should be the same as the order of the tasks.
 * It is important to note that this is not the order in which the tasks return,
 * but the order in which they are passed to asyncMap.
 *
 * Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
 * on the results array.
 *
 *
 * Example:
 *
 * asyncMap([
 *  function(cb){
 *    setTimeout(function(){
 *      cb('one');
 *    }, 200);
 *  },
 *  function(cb){
 *    setTimeout(function(){
 *      cb('two');
 *    }, 100);
 *  }
 * ],
 *  function(results){
 *    // the results array will equal ['one','two'] even though
 *    // the second function had a shorter timeout.
 *    console.log(results); // ['one', 'two']
 * });
 *
 *
 */

const asyncMap = (tasks, callback) => {

};

const expect = require('chai').expect;

describe('asyncMap function', () => {

  it('should pass the completed tasks to its callback', done => {
    const wait2For2 = cb => setTimeout(() => cb(2), 200);
    const wait3For1 = cb => setTimeout(() => cb(1), 300);
    asyncMap([wait2For2, wait3For1], results => {
      expect(results).to.eql([2, 1]);
      done();
    });
  });

  it('should pass the completed tasks to its callback in the correct order', done => {
    const wait3For1 = cb => setTimeout(() => cb(1), 300);
    const wait2For2 = cb => setTimeout(() => cb(2), 200);
    asyncMap([wait3For1, wait2For2], results => {
      expect(results).to.eql([1, 2]);
      done();
    });
  });

  it('should handle more than two asynchronous functions in the correct order', done => {
    const wait3For1 = cb => setTimeout(() => cb(1), 300);
    const wait2For2 = cb => setTimeout(() => cb(2), 200);
    const wait1For3 = cb => setTimeout(() => cb(3), 100);
    const wait5For4 = cb => setTimeout(() => cb(4), 500);
    const wait1For5 = cb => setTimeout(() => cb(5), 100);
    asyncMap([wait3For1, wait2For2, wait1For3, wait5For4, wait1For5], results => {
      expect(results).to.eql([1, 2, 3, 4, 5]);
      done();
    });
  });

});
