// Given two strings, write a function to determine if one is a permutation of the other.

const checkPermutation = (str1, str2) => { // O(n^2)
  if (str1.length !== str2.length) return false;
  str2 = [...str2];
  for (const char of str1) {
    const index = str2.indexOf(char);
    if (index === -1) return false;
    str2.splice(index, 1);
  }
  return str2.length === 0;
};

const {expect} = require('chai');

describe('checkPermutation', () => {
  it('should return true when a permutation exists', () => {
    expect(checkPermutation('abcde', 'bdcea')).to.be.true;
  });
  it('should return false when there is no permutation', () => {
    expect(checkPermutation('abc', 'def')).to.be.false;
  });
});
