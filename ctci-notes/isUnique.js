// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

// with counts object, O(n) time
// const countChars = str => [...str].reduce((counts, char) => ({ // O(n)
//   ...counts, [char]: (counts[char] || 0) + 1
// }), {});

// const isUnique = str => Object.values(countChars(str)).every(count => count === 1); // O(n)

// w/o additional data structures
const isUnique = str => {
  for (let i = 0; i < str.length; i++)
    if (str.slice(i + 1).includes(str[i]))
      return false;
  return true;
};

const {expect} = require('chai');

describe('isUnique', () => {
  it('should return true when all chars are unique', () => {
    expect(isUnique('abcdefg')).to.be.true;
  });
  it('should return false when duplicates exist', () => {
    expect(isUnique('ababcdcd')).to.be.false;
  });
});
