// Sum Strings as Numbers from https://www.codewars.com/kata/sum-strings-as-numbers/train/javascript

/*
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".*/
/*eslint-disable quotes, curly*/

const sumStrings = (a, b, c = []) => {
  a.length < b.length ? a = a.padStart(b.length, '0') : b = b.padStart(a.length, '0');
  for (let i = a.length - 1, prev = 0; i >= 0; i--) {
    const sum = prev + +a[i] + +b[i];
    c.unshift(sum > 9 ? `${sum - 10}` : `${sum}`);
    prev = sum > 9 ? 1 : 0;
    if (!i) c.unshift(prev);
  }
  return c.slice(c.findIndex(v => +v)).join('');
};

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
