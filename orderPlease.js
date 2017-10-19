// Your order, please from https://www.codewars.com/kata/your-order-please/train/javascript

/*Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.

For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"*/
/*eslint-disable*/
// order = w => w.split` `.sort((a, b) => (f = w => w.split``.filter(v => +v)[0], f(a) - f(b))).join` `;

order=w=>w.split` `.sort((a,b)=>(f=w=>[...w].filter(v=>+v)[0],f(a)-f(b))).join` `

const {expect} = require('chai');

describe('order functionality', () => {

  const tests = {
    'is2 Thi1s T4est 3a': 'Thi1s is2 3a T4est',
    '4of Fo1r pe6ople g3ood th5e the2': 'Fo1r the2 g3ood 4of th5e pe6ople',
    'd4o dru7nken sh2all w5ith s8ailor wha1t 3we a6': 'wha1t sh2all 3we d4o w5ith a6 dru7nken s8ailor',
    '': '',
    '3 6 4 2 8 7 5 1 9': '1 2 3 4 5 6 7 8 9',
    '1Igor Ali5ce B4ob Gr2eg Cind3y': '1Igor Gr2eg Cind3y B4ob Ali5ce',
    '5Cindy B3ob Gre4g Ern1st He2idi': 'Ern1st He2idi B3ob Gre4g 5Cindy',
    'Ja4mila Ig3or G1reg Ali2ce C5indy': 'G1reg Ali2ce Ig3or Ja4mila C5indy',
    'Jamil3a Erns2t Cin1dy': 'Cin1dy Erns2t Jamil3a',
    '1Heidi Ali3ce Bo4b 6Greg C5indy Ig2or': '1Heidi Ig2or Ali3ce Bo4b C5indy 6Greg',
    '2Jamila Ern5st 3Fiona Ci6ndy Alic1e Gr4eg': 'Alic1e 2Jamila 3Fiona Gr4eg Ern5st Ci6ndy',
    'Jamil6a Gre3g E1rnst Fi4ona Cind2y He7idi Bo5b A8lice': 'E1rnst Cind2y Gre3g Fi4ona Bo5b Jamil6a He7idi A8lice',
    '6Greg 2Cindy H3eidi Jamil5a 4Bob 1Fiona E7rnst': '1Fiona 2Cindy H3eidi 4Bob Jamil5a 6Greg E7rnst',
    'Fi5ona Gre4g Igo3r 1Heidi Ci2ndy 7Ernst A6lice': '1Heidi Ci2ndy Igo3r Gre4g Fi5ona A6lice 7Ernst'
  };

  Object.entries(tests).forEach(test => {
    it(`should return:\n${test[1]}\ngiven:\n${test[0]}`, () => {
      expect(order(test[0])).to.equal(test[1]);
    });
  });

});
