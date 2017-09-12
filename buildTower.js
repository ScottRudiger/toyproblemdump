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

const towerBuilderW = nFloors => {
  const result = [];
  const length = nFloors * 2 - 1;
  for (let i = 1; i <= length; i += 2) {
    result.push('*'.repeat(i).padEvenly(length));
  }
  return result;
};

const towerBuildera = nFloors => {
  const result = [];
  const length = nFloors * 2 - 1;
  for (let i = 1; i <= nFloors; i++) {
    const floor = '*'.repeat(i * 2 - 1);
    const padding = ' '.repeat((length - floor.length) / 2);
    result.push(`${padding}${floor}${padding}`);
  }
  return result;
};

const towerBuilderd = nFloors => {
  const tower = [...new Array(nFloors)];
  const length = nFloors * 2 - 1;
  return tower.map((_, i) => {
    const floor = '*'.repeat((i + 1) * 2 - 1);
    const padding = ' '.repeat((length - floor.length) / 2);
    return `${padding}${floor}${padding}`;
  });
};

const towerBuilderz = nFloors => {
  const length = nFloors * 2 - 1;
  return [...Array(nFloors)].map((_, i) => {
    const floor = '*'.repeat((i + 1) * 2 - 1);
    const padding = ' '.repeat((length - floor.length) / 2);
    return `${padding}${floor}${padding}`;
  });
};

const towerBuilderx = nFloors => {
  const calcWidth = n => n * 2 - 1;
  return [...Array(nFloors)].map((_, i) =>(
    `${' '.repeat((calcWidth(nFloors) - calcWidth(i + 1)) / 2)}${'*'.repeat(calcWidth(i + 1))}${' '.repeat((calcWidth(nFloors) - calcWidth(i + 1)) / 2)}`
  ));
};

const towerBuilder = nFloors => {
  const calcWidth = x => x * 2 - 1;
  const buildFloor = (n, i) => `${' '.repeat((calcWidth(n) - calcWidth(i)) / 2)}${'*'.repeat(calcWidth(i))}${' '.repeat((calcWidth(n) - calcWidth(i)) / 2)}`;
  return [...Array(nFloors)].map((_, i) => buildFloor(nFloors, i + 1));
};

const towerBuilderr = nFloors => {
  const result = [];
  for (let i = 1; i <= nFloors; i++) {
    const padding = ' '.repeat((nFloors * 2 - 1 - ((i * 2) - 1)) / 2);
    result.push(`${padding}${'*'.repeat(i * 2 - 1)}${padding}`);
  }
  return result;
};

const towerBuilderB = nFloors => [...Array(nFloors)].map((_, i) => {
  const floor = '*'.repeat(i * 2 + 1);
  const padding = ' '.repeat(((nFloors * 2 - 1) - floor.length) / 2);
  return `${padding}${floor}${padding}`;
});

const towerBuilderC = nFloors => [...Array(nFloors)].map((_, i) => {
  const floor = '*'.repeat(i * 2 + 1);
  const padding = ' '.repeat(((nFloors * 2 - 1) - floor.length) / 2);
  return `${padding}${floor}${padding}`;
});

const expect = require('chai').expect;

describe('towerBuilder should make pyramid-shaped towers', () => {
  it('should output the correct towers given 1, 2, and 3', () => {
    expect(JSON.stringify(towerBuilder(1))).to.equal(JSON.stringify(['*']));
    expect(JSON.stringify(towerBuilder(2))).to.equal(JSON.stringify([' * ', '***']));
    expect(JSON.stringify(towerBuilder(3))).to.equal(JSON.stringify(['  *  ', ' *** ', '*****']));
  });
});
