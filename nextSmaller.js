// "Next smaller number with the same digits" from https://www.codewars.com/kata/next-smaller-number-with-the-same-digits

/*Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

For example:

nextSmaller(21) == 12
nextSmaller(531) == 513
nextSmaller(2071) == 2017
Return -1, when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

nextSmaller(9) == -1
nextSmaller(111) == -1
nextSmaller(135) == -1
nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
some tests will include very large numbers.
test data only employs positive integers.
The function you write for this challenge is the inverse of this kata: "Next bigger number with the same digits." (http://www.codewars.com/kata/next-bigger-number-with-the-same-digits)*/

const nextSmaller = (n, a = [...`${n}`], j = a.length, i = j - 1) => j ? a[i] > a[j] ? ((_ = (() => a[i] = a.splice(a.indexOf(`${Math.max(...a.slice(j).filter(n => n < a[i]))}`, j), 1, a[i])[0])(), r = (() => a.slice(0, j).concat(a.slice(j).sort().reverse()).join(''))()) => +r[0] ? +r : -1)() : nextSmaller(n, a, i) : -1;

const expect = require('chai').expect;

describe('nextSmaller function finds the next smallest number with the same digits', () => {
  context('works when there is a valid nextSmaller number', () => {
    it('should return 12 given 21', () => expect(nextSmaller(21)).to.equal(12));
    it('should return 513 given 531', () => expect(nextSmaller(531)).to.equal(513));
    it('should return 2017 given 2071', () => expect(nextSmaller(2071)).to.equal(2017));
    it('should return 790 given 907', () => expect(nextSmaller(907)).to.equal(790));
    it('should return 1072 given 1207', () => expect(nextSmaller(1207)).to.equal(1072));
  });
  context('works on bigger numbers', () => {
    it('should return 123456789 given 123456798', () => {
      expect(nextSmaller(123456798)).to.equal(123456789);
    });
    it('should return 1234567890 given 1234567908', () => {
      expect(nextSmaller(1234567908)).to.equal(1234567890);
    });
    it('should return 466937331 given 466971333', () => {
      expect(nextSmaller(466971333)).to.equal(466937331);
    });
    it('should return 520135347774 given 520135374477', () => {
      expect(nextSmaller(520135374477)).to.equal(520135347774);
    });
  });
  context('returns -1 for numbers without a valid nextSmaller number', () => {
    it('should return -1 given 9', () => expect(nextSmaller(9)).to.equal(-1));
    it('should return -1 given 111', () => expect(nextSmaller(111)).to.equal(-1));
    it('should return -1 given 135', () => expect(nextSmaller(135)).to.equal(-1));
    it('should return -1 given 1027', () => expect(nextSmaller(1027)).to.equal(-1));
    it('should return -1 given 123456789', () => expect(nextSmaller(123456789)).to.equal(-1));
  });
});
