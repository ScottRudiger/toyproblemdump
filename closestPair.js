// Find the closest pair from two sorted arrays from https://www.geeksforgeeks.org/given-two-sorted-arrays-number-x-find-pair-whose-sum-closest-x/

/*
Given two sorted arrays and a number x, find the pair whose sum is closest to x and the pair has an element from each array.

We are given two arrays ar1[0…m-1] and ar2[0..n-1] and a number x, we need to find the pair ar1[i] + ar2[j] such that absolute value of (ar1[i] + ar2[j] – x) is minimum.

Example:

Input:  ar1[] = {1, 4, 5, 7};
        ar2[] = {10, 20, 30, 40};
        x = 32
Output:  1 and 30

Input:  ar1[] = {1, 4, 5, 7};
        ar2[] = {10, 20, 30, 40};
        x = 50
Output:  7 and 40
*/

const findClosestPair = (arr1, arr2, x) => {

};

const {expect} = require('chai');

describe('findClosestPair function', () => {
  const arr1 = [1, 4, 5, 7];
  const arr2 = [10, 20, 30, 40];
  it('should return [1, 30]', () => {
    const x = 32;
    expect(findClosestPair(arr1, arr2, x)).to.eql([1, 30]);
  });
  it('should return [7, 40]', () => {
    const x = 50;
    expect(findClosestPair(arr1, arr2, x)).to.eql([7, 40]);
  });
});
