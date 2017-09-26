// IP Validation from https://www.codewars.com/kata/ip-validation/train/javascript

/*Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0..255 (included).

Input to the function is guaranteed to be a single string.

Examples

// valid inputs:
1.2.3.4
123.45.67.89

// invalid inputs:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Note: leading zeros (e.g. 01.02.03.04) are considered not valid in this kata!*/
/*eslint-disable curly, quotes*/

// const isValidIp = address => {
//   const octets = address.split('.');
//   // check that IP address does not include whitespace
//   if (address.includes(' ')) return false;
//   // check that IP address is exactly four octets long
//   if (octets.length !== 4) return false;
//   // check that there are no leading zeros
//   if (octets.some(octet => octet.length > 1 && !+octet[0])) return false;
//   // check that octet's value is between 0 and 255 (inclusive)
//   return octets.map(Number).every(octet => octet < 256 && octet >= 0);
// };

// const isValidIp = (a, o = a.split('.')) => !a.includes(' ') && o.length === 4 && !o.some(o => o.length > 1 && !+o[0]) && o.map(Number).every(o => o < 256);

// // passes all codewars tests, but would improperly return true in some cases; e.g., '1.2.3.4.256'
// const isValidIp = a => a.split('.').filter(o => !o.includes(' ') && !(o.length > 1 && !+o[0]) && +o < 256).length === 4;

// // with regex
// const isValidIp = a => /^((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(?!$)|$)){4}$/.test(a);

// shorten previous one-liner (non-regex) solution
const isValidIp = (a, o = a.split('.')) => o.length === 4 && o.every(o => !(o.includes(' ') || o[1] && !+o[0]) && o < 256);

const expect = require('chai').expect;

describe('isValidIp function', () => {

  context('a valid IP address should contain four octets--no more; no less', () => {
    it('should return true for 1.2.3.4', () => {
      expect(isValidIp('1.2.3.4')).to.be.true;
    });
    it('should return false for 1.2.3', () => {
      expect(isValidIp('1.2.3')).to.be.false;
    });
    it('should return false for 1.2.3.4.5', () => {
      expect(isValidIp('1.2.3.4.5')).to.be.false;
    });
  });

  context('a valid IP address should have no octet with a value greater than 255', () => {
    it('should return true for 123.45.67.89', () => {
      expect(isValidIp('123.45.67.89')).to.be.true;
    });
    it('should return false for 123.456.78.90', () => {
      expect(isValidIp('123.456.78.90')).to.be.false;
    });
  });

  context('an IP address with leading zeros is invalid', () => {
    it('should return false for 01.02.03.04', () => {
      expect(isValidIp('01.02.03.04')).to.be.false;
    });
    it('should return false for 123.045.067.089', () => { // based on codewars instructions
      expect(isValidIp('123.045.067.089')).to.be.false;
    });
  });

  context('an IP address with spaces is invalid', () => { // based on codewars test cases
    it('should return false for 1. 2.3.4', () => {
      expect(isValidIp('1. 2.3.4')).to.be.false;
    });
    it(`should return false for '1.2.3.4 '`, () => {
      expect(isValidIp('1.2.3.4 ')).to.be.false;
    });
  });

  // additional test to avoid certain false positives
  context('should correctly ascertain validity when only the 5th octet is invalid', () => {
    it('should return false for 1.2.3.4.256', () => {
      expect(isValidIp('1.2.3.4.256')).to.be.false;
    });
  });

});
