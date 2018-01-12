// minimum subarray to sort for whole array to be sorted
// from https://www.geeksforgeeks.org/minimum-length-unsorted-subarray-sorting-which-makes-the-complete-array-sorted/

/*
Given an unsorted array arr[0..n-1] of size n, find the minimum length subarray arr[s..e] such that sorting this subarray makes the whole array sorted.

Examples:
1) If the input array is [10, 12, 20, 30, 25, 40, 32, 31, 35, 50, 60], your program should be able to find that the subarray lies between the indexes 3 and 8.

2) If the input array is [0, 1, 15, 25, 6, 7, 30, 40, 50], your program should be able to find that the subarray lies between the indexes 2 and 5.
*/

const findSubArrayToSort = arr => {

};

const {expect} = require('chai');

describe('findSubArrayToSort function', () => {
  it('should return indices [3, 8]', () => {
    const arr = [10, 12, 20, 30, 25, 40, 32, 31, 35, 50, 60];
    expect(findSubArrayToSort(arr)).to.eql([3, 8]);
  });
  it('should return indicies [2, 5]', () => {
    const arr = [0, 1, 15, 25, 6, 7, 30, 40, 50];
    expect(findSubArrayToSort(arr)).to.eql([2, 5]);
  });
  it('should return indices [2, 10]', () => {
    const arr = [5, 7, 9, 13, 16, 12, 15, 8, 14, 18, 17, 20];
    expect(findSubArrayToSort(arr)).to.eql([2, 10]);
  });
});
