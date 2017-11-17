// Sum of Pairs from https://www.codewars.com/kata/sum-of-pairs/train/javascript

/*Sum of Pairs

Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * entire pair is earlier, and therefore is the correct answer
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * entire pair is earlier, and therefore is the correct answer
== [3, 7]
Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.*//*eslint-disable camelcase, curly, eqeqeq*/

const sum_pairs = (ints, s) => {
  for (let i = 0; i < ints.length; i++) {
    for (let j = 0; j < (slice = ints.slice(i + 1)).length; j++) {
      const sum = ints[i] + slice[j];
      if (sum === s) {
        var cutoff = i + j;
        break;
      }
    }
  }
  const sums = [];
  for (let i = 0; i <= cutoff; i++) {
    for (let j = 0; j < (slice = ints.slice(i + 1)).length; j++) {
      const sum = ints[i] + slice[j];
      if (sum === s) {
        sums.push([ints[i], slice[j], i + j]);
      }
    }
  }
  return sums == 0 ? undefined : sums.sort((a, b) => a[2] - b[2])[0].splice(0, 2);
};

const {expect} = require('chai');

describe('sum_pairs', () => {
  const a1 = [1, 4, 8, 7, 3, 15];
  const a2 = [1, -2, 3, 0, -6, 1];
  const a3 = [20, -13, 40];
  const a4 = [1, 2, 3, 4, 1, 0];
  const a5 = [10, 5, 2, 3, 7, 5];
  const a6 = [4, -2, 3, 3, 4];
  const a7 = [0, 2, 0];
  const a8 = [5, 9, 13, -3];
  it('should return [1, 7] given (a1, 8)', () => {
    expect(sum_pairs(a1, 8)).to.eql([1, 7]);
  });
  it('should return [0, -6] given (a2, -6)', () => {
    expect(sum_pairs(a2, -6)).to.eql([0, -6]);
  });
  it('should return undefined given (a3, -7)', () => {
    expect(sum_pairs(a3, -7)).to.equal(undefined);
  });
  it('should return [1, 1] given (a4, 2)', () => {
    expect(sum_pairs(a4, 2)).to.eql([1, 1]);
  });
  it('should return [3, 7] given (a5, 10)', () => {
    expect(sum_pairs(a5, 10)).to.eql([3, 7]);
  });
  it('should return [4, 4] given (l6, 8)', () => {
    expect(sum_pairs(a6, 8)).to.eql([4, 4]);
  });
  it('should return [0, 0] given (a7, 0)', () => {
    expect(sum_pairs(a7, 0)).to.eql([0, 0]);
  });
  it('should return [13, -3] given (a8, 10)', () => {
    expect(sum_pairs(a8, 10)).to.eql([13, -3]);
  });
});
