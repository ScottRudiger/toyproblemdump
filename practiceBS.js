// implement binary search for a sorted array
// O(log n) logarithmic time
const binarySearch = (arr, x, low = 0, high = arr.length - 1) => {
  // calculate midpoint
  const mid = low + (high - low) / 2 | 0;
  // only recurse if high >= low, otherwise you've gone past beg/end and x was not found
  if (high >= low) {
    // base case: element at mid = x, return mid
    if (arr[mid] === x) return mid;
    // if element at mid < x, search right side
    if (arr[mid] < x) return binarySearch(arr, x, mid + 1, high);
    // if element at mid > x, search left side
    if (arr[mid] > x) return binarySearch(arr, x, 0, mid - 1);
  }
  // high < low, thus x was not found; return -1
  return -1;
};

const {expect} = require('chai');

describe('binarySearch function', () => {
  it('should return correct index on the right', () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(binarySearch(arr, 7)).to.equal(7);
  });
  it('should return correct index on the left', () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(binarySearch(arr, 2)).to.equal(2);
  });
  it('should return -1 when x is > last element', () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(binarySearch(arr, 10)).to.equal(-1);
  });
  it('should return -1 when x is < first element', () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(binarySearch(arr, -1)).to.equal(-1);
  });
  it('should return the first instance of x', () => {
    const arr = [0, 1, 1, 2, 3, 4, 5, 6, 7, 8];
    expect(binarySearch(arr, 1)).to.equal(1);
  });
  it('should still return the first instance of x', () => {
    const arr = [0, 0, 1, 1, 2, 3, 4, 5, 6, 7];
    expect(binarySearch(arr, 1)).to.equal(2);
  });
});
