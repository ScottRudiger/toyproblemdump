// Given an array of distinct integer values, count the number of pairs of integers that have difference k. For example, given the array [1, 7, 5, 9, 2, 12, 3] and the difference k = 2, there are four pairs with difference 2: [1, 3], [3, 5], [5, 7], [7, 9].

// brute force O(n log n) because of sort
// const countPairs = (nums, k) => {
//   let count = 0;
//   nums.sort((a, b) => a - b).forEach((num, i) => {
//     nums.slice(i + 1).find(n => n === num + k) && count++;
//   });
//   return count;
// };

// O(n^2)
// const countPairs = (nums, k) => {
//   let count = 0;
//   nums.forEach(num => {
//     nums.find(n => n === num + k) && count++;
//   });
//   return count;
// };

// O(n)
const countPairs = (nums, k) => {
  let count = 0;
  const numObj = nums.reduce((nums, num) => ({...nums, [num]: true}), {});
  nums.forEach(num => {
    numObj[num + k] && count++;
  });
  return count;
};

const {expect} = require('chai');

describe('countPairs', () => {
  it('works with the given example', () => {
    expect(countPairs([1, 7, 5, 9, 2, 12, 3], 2)).to.equal(4);
  });
});
