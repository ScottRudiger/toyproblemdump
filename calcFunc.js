// Calculating with Functions from https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript

/*This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
*/

const zero = () => {

};

const one = () => {

};

const two = () => {

};

const three = () => {

};

const four = () => {

};

const five = () => {

};

const six = () => {

};

const seven = () => {

};

const eight = () => {

};

const nine = () => {

};

const plus = () => {

};

const minus = () => {

};

const times = () => {

};

const dividedBy = () => {

};

const {expect} = require('chai');

describe('calculating functions', () => {
  it('should be 35 given seven times five', () => {
    expect(seven(times(five()))).to.equal(35);
  });
  it('should be 13 given four plus nine', () => {
    expect(four(plus(nine()))).to.equal(13);
  });
  it('should be 5 given eight minus three', () => {
    expect(eight(minus(three()))).to.equal(5);
  });
  it('should be 3 given six divided by 2', () => {
    expect(six(dividedBy(two()))).to.equal(3);
  });
});
