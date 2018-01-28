// Find common elements in three sorted arrays from https://www.geeksforgeeks.org/find-common-elements-three-sorted-arrays/

/*
Given three arrays sorted in non-decreasing order, print all common elements in these arrays.

Examples:

ar1[] = {1, 5, 10, 20, 40, 80}
ar2[] = {6, 7, 20, 80, 100}
ar3[] = {3, 4, 15, 20, 30, 70, 80, 120}
Output: 20, 80

ar1[] = {1, 5, 5}
ar2[] = {3, 4, 5, 5, 10}
ar3[] = {5, 5, 10, 20}
Output: 5, 5
*/

const findCommon = (a1, a2, a3) => {
  // initialize result array to hold common elements
  const result = [];
  // initialize a1, a2, and a3 indices at 0
  let x = y = z = 0;
  // loop until reaching the end of one of the arrays
  while (x < a1.length && y < a2.length && z < a3.length) {
    // if elements at x = y = z, it's a common element; add to result
    if (a1[x] === a2[y] && a2[y] === a3[z]) {
      result.push(a1[x]);
      // increment all
      x++; y++; z++;
    } // else if element at x < y, increment x as it can't be a common element
    else if (a1[x] < a2[y]) x++;
    // else if element at y < z, increment y as it can't be a common element
    else if (a2[y] < a3[z]) y++;
    // else, x > y & y > z, increment z as it can't be a common element
    else z++;
  }
  return result;
};

const {expect} = require('chai');

describe('findCommon function', () => {
  it('should return [5, 5]', () => {
    const a1 = [1, 5, 5];
    const a2 = [3, 4, 5, 5, 10];
    const a3 = [5, 5, 10, 20];
    expect(findCommon(a1, a2, a3)).to.eql([5, 5]);
  });
  it('should return [20, 80]', () => {
    const a1 = [1, 5, 10, 20, 40, 80];
    const a2 = [6, 7, 20, 80, 100];
    const a3 = [3, 4, 15, 20, 30, 70, 80, 120];
    expect(findCommon(a1, a2, a3)).to.eql([20, 80])
  });
});
