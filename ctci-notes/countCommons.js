// Given two sorted arrays, find the number of elements in common. The arrays are the same length and each has all distinct characters.

// Example:
// [13, 27, 35, 40, 49, 55, 59]
// [17, 35, 39, 40, 55, 58, 60]

// O(n^2)
const countCommons = (arr1, arr2) => {
  let count = 0;
  arr1.forEach(n => {
    arr2.includes(n) && count++;
  });
  return count;
};

const {expect} = require('chai');

describe('countCommons', () => {
  it('should work w/ the given example', () => {
    expect(countCommons(
      [13, 27, 35, 40, 49, 55, 59],
      [17, 35, 39, 40, 55, 58, 60],
    )).to.equal(3);
  });
});
