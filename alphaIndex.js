// Replace with Alphabet Position from http://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

/*Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

a being 1, b being 2, etc.

As an example:

alphabet_position("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" as a string.*/

const alphabetPosition = text => {
  const alphabet = 'àabcdefghijklmnopqrstuvwxyz';
  return [...`${text.toLowerCase()}`].reduce((indices, letter) => [...indices, alphabet.indexOf(letter)], []).filter(i => i > 0).join` `;
};

const {expect} = require('chai');

describe('alphabetPostion function', () => {
  it('should convert letters to their position in the alphabet', () => {
    expect(alphabetPosition('The sunset sets at twelve o\' clock.')).to.equal('20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11');
    expect(alphabetPosition('The narwhal bacons at midnight.')).to.equal('20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20');
  });
});
