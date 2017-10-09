// Formatting a number as price from https://www.codewars.com/kata/formatting-a-number-as-price/train/javascript

/*Your objective is to add formatting to a plain number to display it as price.

The function should return a string like this:

var price = numberToPrice(13253.5123);
console.log(price); // 13,253.51
Numbers should use the standard comma for every 3 numbers and dot to separate the cents, cents need to be truncated to 2 decimals, in the case that the decimal part of the number is 1 character long or none you should add 0's so that the result will always have 2 decimal characters, the function will also evaluate negative numbers.

function should return a string 'NaN' if the input is not a valid number*/
/*eslint-disable quotes*/

const numberToPrice = n => {

};

const {expect} = require('chai');

describe('numberToPrice function', () => {
  it(`should return '1,500.12' given 1500.129`, () =>{
    expect(numberToPrice(1500.129)).to.equal('1,500.12');
  });
  it(`should return '-5.00' given -5`, () => expect(numberToPrice(-5)).to.equal('-5.00'));
  it(`should return '1,000,000.50' given 1000000.5`, () => {
    expect(numberToPrice(1000000.5)).to.equal('1,000,000.50');
  });
  it(`should return 'NaN' for invalid inputs`, () => expect(numberToPrice('@')).to.equal('NaN'));
});
