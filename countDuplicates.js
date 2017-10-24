// Counting Duplicates from http://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

/*
Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (bandB)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*//*eslint-disable curly*/

/**
finds the count of duplicates in a string
@param {string} text - input string with or without duplicates
@returns {number} count of duplicates
*/

const duplicateCount = text => (counts = [...text.toLowerCase()].reduce((counts, char) => counts[char] ? (counts[char]++, counts) : (counts[char] = 1, counts), {}), Object.values(counts).filter(count => count > 1).length);

const {expect} = require('chai');

describe('duplicateCount function', () => {

  const tests = {
    a: 0,
    abcde: 0,
    aabbcde: 2,
    aabBcde: 2,
    Indivisibility: 1,
    Indivisibilities: 2,
    abcdefghijklmnopqrstuvwxyz: 0,
    abcdefghijklmnopqrstuvwxyzbaaAAB: 2,
    abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz: 26,
    abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ: 26,
    abcdefghwxyz: 0,
    abcdefghABCDABCABA: 4,
    abcdefghijABCDEABCDABCABa: 5,
    abcdefghijklABCDEFabcdeABCDABCaba: 6,
    abcdefghijABCDEabcdabcabA: 5,
    abcdefghijklabcdefabcdeabcdABCABA: 6,
    abcdefABCabA: 3,
    zZzZzZzZzZz: 1
  };

  Object.entries(tests).forEach(test => {
    it(`should return ${test[1]} given ${test[0]}`, () => {
      expect(duplicateCount(test[0])).to.equal(test[1]);
    });
  });

});
