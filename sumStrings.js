// Sum Strings as Numbers from https://www.codewars.com/kata/sum-strings-as-numbers/train/javascript

/*
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".*/
/*eslint-disable quotes, curly*/

// const sumStrings = (a, b) => (a.length < b.length ? a = a.padStart(b.length, '0') : b = b.padStart(a.length, '0'), r = s => s.split('').reverse(), a = r(a), b = r(b), p = 0, r = [...a.reduce((r, v, i) => (s = p + +v + +b[i], [...r, s > 9 ? (p = 1, `${s - 10}`) : (p = 0, `${s}`)]), []), p].reverse(), r.slice(r.findIndex(v => +v)).join(''));

// refactor as codewars does not support ES2017's padStart method
// const sumStrings = (a, b) => (l = (a, b) => '0'.repeat(a.length - b.length) + b, a.length > b.length ? b = l(a, b) : a = l(b, a), r = s => s.split('').reverse(), a = r(a), b = r(b), p = 0, r = [...a.reduce((r, v, i) => (s = p + +v + +b[i], p = +(s > 9), [...r, p ? `${s - 10}` : `${s}`]), []), p].reverse(), r.slice(r.findIndex(v => +v)).join(''));

// const sumStrings = (a, b) => (a = [...a], b = [...b], r = [], (c => { while (a.length || b.length || c) (c += ~~a.pop() + ~~b.pop(), r.unshift(c % 10), c = c > 9); })(0), r.slice(r.findIndex(v => +v)).join(''));

const sumStrings = (a, b, s = 0, r = []) => a.length || b.length || s ? (a = [...a], b = [...b], s += ~~a.pop() + ~~b.pop(), r.unshift(s % 10), sumStrings(a, b, s > 9, r)) : r.slice(r.findIndex(v => +v)).join('');

const {expect} = require('chai');

describe('sumStrings function', () => {
  it(`should return '3' given '1', '2'`, () => expect(sumStrings('1', '2')).to.equal('3'));
  it(`should return '579' given '123', '456'`, () => expect(sumStrings('123', '456')).to.equal('579'));
  it(`should return '9007199254740990' given '4503599627370495', '4503599627370495'`, () => {
    const n = `${Math.floor(Number.MAX_SAFE_INTEGER / 2)}`;
    expect(sumStrings(n, n)).to.equal(`${Number.MAX_SAFE_INTEGER - 1}`);
  });
  it(`should return '712577413488402631964821329' given '712569312664357328695151392', '8100824045303269669937'`, () => {
    expect(sumStrings('712569312664357328695151392', '8100824045303269669937')).to.equal('712577413488402631964821329');
  });
  it(`should return 131151201344081895336534324866 given '50095301248058391139327916261', '81055900096023504197206408605'`, () => {
    expect(sumStrings('50095301248058391139327916261', '81055900096023504197206408605')).to.equal('131151201344081895336534324866');
  });
  it('should not return leading zeros', () => expect(sumStrings('000103', '008567')).to.equal('8670'));
  it(`should return '0' given '0', '0'`, () => expect(sumStrings('0', '0')).to.equal('0'));
  it(`should return '579579579579579579579579579579579579579579579' given '123123123123123123123123123123123123123123123', '456456456456456456456456456456456456456456456'`, () => {
    expect(sumStrings('123123123123123123123123123123123123123123123', '456456456456456456456456456456456456456456456')).to.equal('579579579579579579579579579579579579579579579');
  });
});
