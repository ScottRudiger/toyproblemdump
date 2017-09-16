// Simple Pig Latin from https://www.codewars.com/kata/simple-pig-latin/train/javascript

/*Move the first letter of each word to the end of it, then add 'ay' to the end of the word.

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay*/

const pigIt = s => s.split(' ').map(w => `${w.slice(1) + w[0]}ay`).join(' ');

const expect = require('chai').expect;

describe('pigIt pig latin translation function', () => {
  it('should translate a word to pig latin', () => {
    expect(pigIt('word')).to.equal('ordway');
  });
  it('should translate multiple words to pig latin', () => {
    expect(pigIt('Pig latin is cool')).to.equal('igPay atinlay siay oolcay');
  });
});
