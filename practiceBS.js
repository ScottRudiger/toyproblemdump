// implement binary search for a sorted array

const binarySearch = arr => {

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
});
