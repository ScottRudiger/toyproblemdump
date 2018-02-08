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

let encrypt = (text, n) => {
  if (text) {
    for (; n > 0; n--) {
        const [odds, evens] = [[], []];
        for (let i = 0; i < text.length; i++) {
          (i % 2 ? odds : evens).push(text[i]);
        }
        text = [...odds, ...evens].join``;
    }
  }
  return text;
};

encrypt=(t,n)=>n>0?encrypt(t.replace(/.(.|$)/g,'$1')+t.replace(/(.)./g,'$1'),n-1):t

let decrypt = (encryptedText, n) => {
  if (!encryptedText || n <= 0) return encryptedText;
  const mid = encryptedText.length / 2 | 0;
  let decodedText = encryptedText;
  for (n; n--;) {
    [encryptedText, decodedText] = [decodedText, ''];
    for (let m = mid, l = 0; l < mid, m < encryptedText.length; l++, m++) {
      decodedText += encryptedText[m];
      if (l !== mid) {
        decodedText += encryptedText[l];
      }
    }
  }
  return decodedText;
};

decrypt=(t,n)=>n>0?decrypt((m=t.length/2|0,t.slice(m).replace(/./g,(c,i)=>c+(i<m?t[i]:''))),n-1):t

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
  [[null, 0], null],
  [[null, 1], null]
];

describe('encrypt function', () => {
  for (const [input, output] of tests) {
    it(`should return ${output} given (${input})`, () => {
      expect(encrypt(...input)).to.equal(output);
    });
  }
});

describe('decrypt function', () => {
  for (const [input, output] of tests) {
    it(`should return ${input[0]} given (${output}, ${input[1]})`, () => {
      expect(decrypt(output, input[1])).to.equal(input[0]);
    });
  }
});
