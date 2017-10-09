// Formatting a number as price from https://www.codewars.com/kata/formatting-a-number-as-price/train/javascript

/*Your objective is to add formatting to a plain number to display it as price.

The function should return a string like this:

var price = numberToPrice(13253.5123);
console.log(price); // 13,253.51
Numbers should use the standard comma for every 3 numbers and dot to separate the cents, cents need to be truncated to 2 decimals, in the case that the decimal part of the number is 1 character long or none you should add 0's so that the result will always have 2 decimal characters, the function will also evaluate negative numbers.

function should return a string 'NaN' if the input is not a valid number*/
/*eslint-disable quotes, curly*/

// const numberToPrice = n => {
//   if (isNaN(n) || !`${n}`.length) return 'NaN';
//   int = [...`${n}`].reverse();
//   const idxOfDot = int.indexOf('.');
//   dec = idxOfDot === -1 ? '.00' : int.slice(0, idxOfDot + 1).slice(-3).reverse().join('').padEnd(3, '0');
//   int = int.slice(idxOfDot + 1);
//   for (let i = 3; i < (n < 0 ? int.length - 1 : int.length); i += 4) {
//     int.splice(i, 0, ',');
//   }
//   return int.reverse().join('') + dec;
// };

// const numberToPrice = n => {
//   if (isNaN(n) || !`${n}`.length) return 'NaN';
//   int = [...`${n}`];
//   const idxOfDot = int.indexOf('.');
//   dec = idxOfDot === -1 ? '.00' : int.slice(idxOfDot).slice(0, 3).join('').padEnd(3, '0');
//   int = int.slice(0, idxOfDot !== -1 ? idxOfDot : Infinity);
//   for (let i = int.length - 3; i > (n < 0 ? 1 : 0); i -= 3) {
//     int.splice(i, 0, ',');
//   }
//   return int.join('') + dec;
// };

const numberToPrice = n => {
  if (isNaN(n) || !`${n}`.length) return 'NaN';
  const m = `${n}`.split('.');
  const $ = [...m[0]];
  const c = '.' + (m[1] ? m[1].padEnd(2, '0').slice(0, 2) : '00');
  for (let i = $.length - 3; i > (n < 0 ? 1 : 0); i -= 3) $.splice(i, 0, ',');
  return $.join('') + c;
};

const {expect} = require('chai');

describe('numberToPrice function', () => {
  it('should return a string', () => expect(numberToPrice(100)).to.be.a.string);
  it(`should return '1,500.12' given 1500.129`, () =>{
    expect(numberToPrice(1500.129)).to.equal('1,500.12');
  });
  it(`should return '-5.00' given -5`, () => expect(numberToPrice(-5)).to.equal('-5.00'));
  it(`should return '1,000,000.50' given 1000000.5`, () => {
    expect(numberToPrice(1000000.5)).to.equal('1,000,000.50');
  });
  it(`should return '-1,000,000,000.30' given -1000000000.3`, () => {
    expect(numberToPrice(-100000000000.3)).to.equal('-100,000,000,000.30');
  });
  it(`should return 'NaN' for invalid inputs`, () => expect(numberToPrice('@')).to.equal('NaN'));
  it(`should return 'NaN' given an empty string`, () => {
    expect(numberToPrice('')).to.equal('NaN');
  });
});
