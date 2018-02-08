// Simple Encryption #1 - Alternating Split from https://www.codewars.com/kata/simple-encryption-number-1-alternating-split/train/javascript

/*
For building the encrypted string:
Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
Do this n times!

Examples:

"This is a test!", 1 -> "hsi  etTi sats!"
"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
Write two methods:

function encrypt(text, n)
function decrypt(encryptedText, n)
For both methods:
If the input-string is null or empty return exactly this value!
If n is <= 0 then return the input text.
*/

const encrypt = (text, n) => {

};

const decrypt = (encryptedText, n) => {

};

const {expect} = require('chai');

const tests = [
  [['This is a test!', 0], 'This is a test!'],
  [['This is a test!', 1], 'hsi  etTi sats!'],
  [['This is a test!', 2], 's eT ashi tist!'],
  [['This is a test!', 3], ' Tah itse sits!'],
  [['This is a test!', 4], 'This is a test!'],
  [['This is a test!', -1], 'This is a test!'],
  [['This kata is very interesting!', 1], 'hskt svr neetn!Ti aai eyitrsig'],
  [['', 0], ''],
  [[null, 0], null]
];

describe('encrypt function', () => {
  for ([input, output] of tests) {
    it(`should return ${output} given (${input})`, () => {
      expect(encrypt(...input)).to.equal(output);
    });
  }
});

describe('decrypt function', () => {
  for ([input, output] of tests) {
    it(`should return ${input[0]} given (${output}, ${input[1]})`, () => {
      expect(decrypt(output, input[1])).to.equal(input[0]);
    });
  }
});
