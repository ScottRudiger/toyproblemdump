// Count 1’s in a sorted binary array from https://www.geeksforgeeks.org/count-1s-sorted-binary-array/

/*
Given a binary array sorted in non-increasing order, count the number of 1’s in it.

Examples:

Input: arr[] = {1, 1, 0, 0, 0, 0, 0}
Output: 2

Input: arr[] = {1, 1, 1, 1, 1, 1, 1}
Output: 7

Input: arr[] = {0, 0, 0, 0, 0, 0, 0}
Output: 0
*/

// inefficient solution O(n)
const countOnes = arr => arr.lastIndexOf(1) + 1;

const {expect} = require('chai');

describe('countOnes function', () => {
  it('should return 2', () => {
    const arr = [1, 1, 0, 0, 0, 0, 0];
    expect(countOnes(arr)).to.equal(2);
  });
  it('should return 7', () => {
    const arr = [1, 1, 1, 1, 1, 1, 1];
    expect(countOnes(arr)).to.equal(7);
  });
  it('should return 0', () => {
    const arr = [0, 0, 0, 0, 0, 0, 0];
    expect(countOnes(arr)).to.equal(0);
  });
});
