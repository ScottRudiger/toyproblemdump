// Regex validate PIN Code from https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript

/*ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

eg:

validatePIN("1234") === true
validatePIN("12345") === false
validatePIN("a234") === false*/

const validatePIN = pin => (l = pin.match(/\d/g).length, (pin.length === 4 || pin.length === 6) && (l === 4 || l === 6));

const {expect} = require('chai');

describe('validatePIN function', () => {

  const invalidPINs = ['1', '12', '123', '12345', '1234567', '-1234', '1.234', '00000000', 'a234', '.234', '-0.234'];

  invalidPINs.forEach(PIN => it(`should return false given the invalid PIN ${PIN}`, () => {
    expect(validatePIN(PIN)).to.be.false;
  }));

  const validPINs = ['1234', '0000', '1111', '123456', '098765', '000000', '123456', '090909'];

  validPINs.forEach(PIN => it(`should return TRUE given the valid PIN ${PIN}`, () => {
    expect(validatePIN(PIN)).to.be.true;
  }));
});
