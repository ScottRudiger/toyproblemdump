// Given a sorted array and a number x, find the pair in array whose sum is closest to x
// from https://www.geeksforgeeks.org/given-sorted-array-number-x-find-pair-array-whose-sum-closest-x/

/*
Given a sorted array and a number x, find a pair in array whose sum is closest to x.

Examples:

Input: arr[] = {10, 22, 28, 29, 30, 40}, x = 54
Output: 22 and 30

Input: arr[] = {1, 3, 4, 7, 10}, x = 15
Output: 4 and 10
*/

const findClosestPair = (arr, x) => { // O(n)
  // initialize l at left index, r at right index
  let l = 0, r = arr.length - 1;
  // initialize minDiff at Infinity, result as empty array
  let minDiff = Infinity
  let result = [];
  // loop until l & r meet in the middle
  while (l < r) {
    // calculate sum & diff at each iteration
    const sum = arr[l] + arr[r];
    const diff = Math.abs(sum - x);
    // if diff is less than minDiff
    if (diff < minDiff) {
      // update minDiff and result
      minDiff = diff;
      result = [arr[l], arr[r]];
    }
    // if sum < x, increment l to get a larger sum
    if (sum < x) l++;
    // else, sum > x; decrement r to get a smaller sum
    else r--;
  }
  return result;
};

const {expect} = require('chai');

describe('findClosestPair function', () => {
  it('should return [22, 30]', () => {
    const arr = [10, 22, 28, 29, 30, 40];
    expect(findClosestPair(arr, 54)).to.eql([22, 30]);
  });
  it('should return [4, 10]', () => {
    const arr = [1, 3, 4, 7, 10];
    expect(findClosestPair(arr, 15)).to.eql([4, 10]);
  });
});
