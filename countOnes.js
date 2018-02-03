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
// const countOnes = arr => arr.lastIndexOf(1) + 1;

// more efficient solution using binary search - O(log n)
const countOnes = (arr, low = 0, high = arr.length - 1) => {
  // calculate midpoint
  const mid = low + (high - low) / 2 | 0; // floor in case of even length (not covered)
  // if high >= low
  if (high >= low) {
    // check if element at mid is the last index of 1 or last index of arr
    if (arr[mid] && !arr[mid + 1]) return mid + 1;
    // check if last 1 is to the right
    if (arr[mid] && arr[mid + 1]) return countOnes(arr, mid + 1, high);
    // check if last 1 is to the left
    if (!arr[mid]) return countOnes(arr, 0, mid - 1);
  }
  // otherwise, high < low, i.e. high has decremented to -1 (no 1's found); return 0
  return 0;
};

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
  it('should return 1', () => {
    const arr = [1, 0, 0, 0, 0, 0, 0];
    expect(countOnes(arr)).to.equal(1);
  });
});
