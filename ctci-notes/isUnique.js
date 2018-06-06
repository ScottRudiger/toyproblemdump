// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

const isUnique = str => {

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
