// Given a smaller string s and a bigger string b, design an algorithm to find all permutations of the shorter string within the longer one.

// example
// s: abbc
// b: cbabadcbbabbcbabaabccbabc

const findPermutations = (s, b) => {

};

const {expect} = require('chai');

describe('findPermutations', () => {
  it('should solve the given example correctly', () => {
    expect(findPermutations('abbc', 'cbabadcbbabbcbabaabccbabc')).to.eql([
      'cbab',
      'cbba',
      'abbc',
      'bcba',
      'cbab',
      'cbab',
      'babc',
    ]);
  });
});
