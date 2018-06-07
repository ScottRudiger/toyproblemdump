// Given two strings, write a function to determine if one is a permutation of the other.

const checkPermutation = (str1, str2) => {

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
