// Default Arguments from https://www.codewars.com/kata/52605419be184942d400003d/train/javascript

/*Write a function defaultArguments. It takes a function as an argument, along with an object containing default values for that function's arguments, and returns another function which defaults to the right values.

You cannot assume that the function's arguments have any particular names.

You should be able to call defaultArguments repeatedly to change the defaults.

function add(a,b) { return a+b;};

var add_ = defaultArguments(add,{b:9});
add_(10); // returns 19
add_(10,7); // returns 17
add_(); // returns NaN

add_ = defaultArguments(add_,{b:3, a:2});
add_(10); // returns 13 now
add_(); // returns 5

add_ = defaultArguments(add_,{c:3}); // doesn't do anything, since c isn't an argument
add_(10); // returns NaN
add_(10,10); // returns 20
HINT: This problem requires using Fuction.prototype.toString() in order to extract a function's argument list*/

const defaultArguments = (func, params) => {

};

const {expect} = require('chai');

describe('defaultArguments function', () => {
  const add = (a, b) => a + b;
  const add_ = defaultArguments(add, {b: 9});
  context('should default b to 9', () => {
    it('should equal 19', () => {
      expect(add_(10)).to.equal(19);
    });
    it('should should not use default when an argument is passed in for b', () => {
      expect(add_(10, 5)).to.equal(15);
    });
  });
  context('should change b\'s default to 3', () => {
    add_ = defaultArguments(add_, {b: 3});
    it('should equal 13', () => {
      expect(add_(10)).to.equal(13);
    });
  });
});
