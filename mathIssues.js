// Math Issues from https://www.codewars.com/kata/math-issues/train/javascript

/*Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

round()
ceil()
floor()*/

// round = n => (s = `${n}`.split('.'), s[1] ? s[1][0] >= 5 ? +s[0] + 1 : +s[0] : n);

// ceil = n => (s = `${n}`.split('.'), s[1] ? +s[0] + 1 : n);

// floor = n => +`${n}`.split('.')[0];

const floor = n => ~~n;

const round = n => floor(n + 0.5);

const ceil = n => n % 1 ? floor(n) + 1 : n;

const {expect} = require('chai');

describe('Math methods', () => {
  context('round functionality', () => {
    it('should return 0 given 0.4', () => expect(round(0.4)).to.equal(0));
    it('should return 1 given 0.5', () => expect(round(0.5)).to.equal(1));
    it('should return 7 given 7.12', () => expect(round(7.12)).to.equal(7));
  });
  context('ceil functionality', () => {
    it('should return 1 given 0.4', () => expect(ceil(0.4)).to.equal(1));
    it('should return 1 given 0.5', () => expect(ceil(0.5)).to.equal(1));
    it('should return 8 given 7.12', () => expect(ceil(7.12)).to.equal(8));
  });
  context('floor functionality', () => {
    it('should return 0 given 0.4', () => expect(floor(0.4)).to.equal(0));
    it('should return 0 given 0.5', () => expect(floor(0.5)).to.equal(0));
    it('should return 7 given 7.12', () => expect(floor(7.12)).to.equal(7));
  });
});
