// from https://www.geeksforgeeks.org/find-k-closest-elements-given-value/
/*
Find k closest elements to a given value
3.1
Given a sorted array arr[] and a value X, find the k closest elements to X in arr[].
  Examples:

Input: K = 4, X = 35
arr[] = {
  12, 16, 22, 30, 35, 39, 42,
  45, 48, 50, 53, 55, 56}
Output: 30 39 42 45
*/

const getCloser = (x, a, b) => {
  if (Math.abs(x - (a || Infinity)) <= Math.abs(x - (b || Infinity))) return a;
  else return b;
};

const findClosest = (arr, x, k) => {
  const result = [];
  let i = j = arr.indexOf(x); // could optimize w/ binary search
  for (k; k--;) {
    if (getCloser(x, arr[--j], arr[++i]) === arr[j]) {
      result.push(arr[j]);
      i--;
    } else {
      result.push(arr[i]);
      j++;
    }
  }
  return result;
};

const {expect} = require('chai');

describe('findClosest function', () => {
  it('should return [30, 39, 42, 45]', () => {
    const arr = [12, 16, 22, 30, 35, 39, 42, 45, 48, 50, 53, 55, 56];
    expect(findClosest(arr, 35, 4)).to.eql([39, 30, 42, 45]);
  });
  it('should work when x is at beg/end of array', () => {
    const arr = [23, 38, 76, 99, 147, 147, 148, 159, 163, 189, 197, 230, 231, 279, 293, 316, 337, 353, 362, 393, 398, 399, 419, 449, 450, 459, 463, 487, 499, 521, 541, 561, 568, 570, 576, 601, 603, 634, 639, 648, 656, 659, 664, 676, 715, 755, 763, 793, 800, 808, 817, 829, 831, 852, 883, 898, 926, 926, 941, 947]
    expect(findClosest(arr, 926, 4)).to.eql([926, 941, 947, 898]);
    expect(findClosest(arr, 23, 5)).to.eql([38, 76, 99, 147, 147]);
    expect(findClosest(arr, 947, 3)).to.eql([941, 926, 926]);
  });
  it('should work when all elements are equal', () => {
    const arr = [2, 2, 2];
    expect(findClosest(arr, 2, 2)).to.eql([2, 2]);
  })
});
