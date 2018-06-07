// Given two strings, write a function to determine if one is a permutation of the other.

// O(n^2)
// const checkPermutation = (str1, str2) => {
//   if (str1.length !== str2.length) return false;
//   str2 = [...str2];
//   for (const char of str1) {
//     const index = str2.indexOf(char);
//     if (index === -1) return false;
//     str2.splice(index, 1);
//   }
//   return str2.length === 0;
// };

// O(n log n)
// const checkPermutation = (str1, str2) => {
//   if (str1.length !== str2.length) return false;
//   return [...str1].sort().join`` === [...str2].sort().join``;
// };

// O(n)
const checkPermutation = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  const str1Counts = [...str1].reduce((counts, char) => ({
    ...counts, [char]: (counts[char] || 0) + 1
  }), {});
  for (const char of str2)
    str1Counts[char]--;
  return Object.values(str1Counts).every(count => count === 0);
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
