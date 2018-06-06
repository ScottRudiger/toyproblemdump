// Given a smaller string s and a bigger string b, design an algorithm to find all permutations of the shorter string within the longer one.

// example
// s: abbc
// b: cbabadcbbabbcbabaabccbabc

// O(sb) overall
const getCharCounts = string => [...string].reduce((counts, char) => ({ // O(s)
  ...counts,
  [char]: (counts[char] || 0) + 1,
}), {});

const compareCounts = s => { // O(s)
  const sCounts = getCharCounts(s);
  return b => {
    if (s.length !== b.length) return false;
    const bCounts = getCharCounts(b);
    for (const char in sCounts)
      if (sCounts[char] !== bCounts[char])
        return false;
    return true;
  }
};

const findPermutations = (s, b) => { // O(b)
  const isPermutationOfS = compareCounts(s);
  const permutations = [];
  for (let i = 0; i < b.length; i++) {
    const sliceOfB = b.slice(i, i + s.length);
    isPermutationOfS(sliceOfB) && permutations.push(sliceOfB);
  }
  return permutations;
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
