// 'Does my number look big in this?
// from https://www.codewars.com/kata/does-my-number-look-big-in-this/train/javascript

/*A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits.

For example, take 153 (3 digits):

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1634 (4 digits):

    1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634
The Challenge:

Your code must return true or false depending upon whether the given number is a Narcissistic number.

Error checking for text strings or other invalid inputs is not required, only valid integers will be passed into the function.*/

const narcissistic = value => String(value).split('').map(Number).reduce((a, b) => a + Math.pow(b, String(value).length), 0) === value;

const expect = require('chai').expect;

describe('narcissistic function', () => {

  context('all one-digit numbers are narcissistic', () => {
    it('should return true given 7', () => {
      expect(narcissistic(7)).to.be.true;
    });
  });

  context('some larger numbers are also narcissistic', () => {
    it('should return true given 371', () => {
      expect(narcissistic(371)).to.be.true;
    });
  });

  context('other large numbers are not narcissistic', () => {
    it('should return false given 144', () => {
      expect(narcissistic(144)).to.be.false;
    });
  });

});
