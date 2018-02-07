// Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
// from https://www.codewars.com/kata/take-a-number-and-sum-its-digits-raised-to-the-consecutive-powers-and-dot-dot-dot-eureka/train/javascript

/*
The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

In effect: 89 = 8^1 + 9^2

The next number in having this property is 135.

See this property again: 135 = 1^1 + 3^2 + 5^3

We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Let's see some cases:

sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range [a, b] the function should output an empty list.

sumDigPow(90, 100) == []
Enjoy it!!
*/

const sumDigPow = (a, b) => {
  const result = [];
  for (let i = a; i <= b; i++) {
    const str = `${i}`;
    let sum = 0;
    for (let j = 0; j < str.length; j++) {
      sum += str[j] ** (j + 1);
    }
    if (sum === i) result.push(i);
  }
  return result;
};

const {expect} = require('chai');

describe('sumDigPow function', () => {
  const tests = new Map();

  tests.set([1, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  tests.set([1, 100], [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]);
  tests.set([10, 100], [89]);
  tests.set([90, 100], []);
  tests.set([90, 150], [135]);
  tests.set([50, 150], [89, 135]);
  tests.set([10, 150], [89, 135]);

  for (const [input, output] of tests) {
    it(`should return [${output}] given [${input}]`, () => {
      expect(sumDigPow(...input)).to.eql(output);
    });
  }
});
