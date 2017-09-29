// Permutations from https://www.codewars.com/kata/permutations/train/javascript

/*In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

Examples:

permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
The order of the permutations doesn't matter.*/
/*eslint-disable quotes*/

const permutations = string => {

};

const {expect} = require('chai');

describe('permutations function', () => {
  it('should return an array', () => expect(Array.isArray(permutations('a'))).to.be.true);
  it('all permutations returned should be unique', () => {
    const counts = permutations('aabbcddeff').reduce((counts, perm) => {
      counts[perm] ? counts[perm]++ : counts[perm] = 1;
      return counts;
    }, {});
    const allCountsAre1 = Object.values(counts).every(count => count === 1);
    expect(allCountsAre1).to.be.true;
  });
  it(`should return the correct output given 'a'`, () => {
    expect(permutations('a')).to.eql(['a']);
  });
  it(`should return the correct output given 'ab'`, () => {
    expect(permutations('ab').sort()).to.eql(['ab', 'ba'].sort());
  });
  it(`should return the correct output given 'aabb'`, () => {
    const perms = ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort();
    expect(permutations('aabb').sort()).to.eql(perms);
  });
});
