// 'Build Tower' from https://www.codewars.com/kata/build-tower/train/javascript

/*Build Tower

Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

Python: return a list;
JavaScript: returns an Array;
C#: returns a string[];
PHP: returns an array;
C++: returns a vector<string>;
Haskell: returns a [String];
Have fun!

for example, a tower of 3 floors looks like below

[
  '  *  ',
  ' *** ',
  '*****'
]
and a tower of 6 floors looks like below

[
  '     *     ',
  '    ***    ',
  '   *****   ',
  '  *******  ',
  ' ********* ',
  '***********'
]
Go challenge Build Tower Advanced (https://www.codewars.com/kata/57675f3dedc6f728ee000256) once you have finished this :)*/

String.prototype.padEvenly = function(desiredLength, char = ' ') {
  const padding = (desiredLength - this.length) / 2;
  let that = this;
  that = that.padStart(that.length + padding, char);
  that = that.padEnd(that.length + padding, char);
  return that.toString();
};

const towerBuilder = nFloors => {
  const result = [];
  const length = nFloors * 2 - 1;
  for (let i = 1; i <= length; i += 2) {
    result.push('*'.repeat(i).padEvenly(length));
  }
  return result;
};

const expect = require('chai').expect;

describe('towerBuilder should make pyramid-shaped towers', () => {
  it('should output the correct towers given 1, 2, and 3', () => {
    expect(JSON.stringify(towerBuilder(1))).to.equal(JSON.stringify(['*']));
    expect(JSON.stringify(towerBuilder(2))).to.equal(JSON.stringify([' * ', '***']));
    expect(JSON.stringify(towerBuilder(3))).to.equal(JSON.stringify(['  *  ', ' *** ', '*****']));
  });
});
