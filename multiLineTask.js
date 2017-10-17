// Multi Line Task++: Hello World from https://www.codewars.com/kata/5935558a32fb828aad001213/train/javascript

/*
You need to write a function f that returns the string Hello, world!.

Requirement: Every line must have at most 2 characters, and total number of lines must be less than 40.

Hint: It's possible to complete this in 28 lines only.

(Even) harder verion: https://www.codewars.com/kata/59a421985eb5d4bb41000031
*//*eslint-disable*/

f=
_=>
''

const {expect} = require('chai');

describe('f function', () => {
  const code = f.toString().split('\n');
  it(`should return 'Hello, world!'`, () => {
    expect(f()).to.equal('Hello, world!');
  });
  it('should have no line longer than 2 characters', () => {
    expect(code.every(line => line.length < 3)).to.be.true;
  });
  it('should be less than 40 lines', () => {
    expect(code.length < 40).to.be.true;
  });
});
