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

describe("Solution", function () {
  it("EncryptExampleTests", function () {
    Test.assertEquals(encrypt("This is a test!", 0), "This is a test!");
    Test.assertEquals(encrypt("This is a test!", 1), "hsi  etTi sats!");
    Test.assertEquals(encrypt("This is a test!", 2), "s eT ashi tist!");
    Test.assertEquals(encrypt("This is a test!", 3), " Tah itse sits!");
    Test.assertEquals(encrypt("This is a test!", 4), "This is a test!");
    Test.assertEquals(encrypt("This is a test!", -1), "This is a test!");
    Test.assertEquals(encrypt("This kata is very interesting!", 1), "hskt svr neetn!Ti aai eyitrsig");
  });
});

describe("Solution", function () {
  it("DecryptExampleTests", function () {
    Test.assertEquals(decrypt("This is a test!", 0), "This is a test!");
    Test.assertEquals(decrypt("hsi  etTi sats!", 1), "This is a test!");
    Test.assertEquals(decrypt("s eT ashi tist!", 2), "This is a test!");
    Test.assertEquals(decrypt(" Tah itse sits!", 3), "This is a test!");
    Test.assertEquals(decrypt("This is a test!", 4), "This is a test!");
    Test.assertEquals(decrypt("This is a test!", -1), "This is a test!");
    Test.assertEquals(decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!");
  });
});

describe("Solution", function () {
  it("Null or Empty", function () {
    Test.assertEquals(encrypt("", 0), "");
    Test.assertEquals(decrypt("", 0), "");
    Test.assertEquals(encrypt(null, 0), null);
    Test.assertEquals(decrypt(null, 0), null);
  });
});

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
