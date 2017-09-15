// Intertial Array from https://www.codewars.com/kata/inertial-array/train/javascript

/*An array is defined to be inertialif the following conditions hold:

a. it contains at least one odd value
b. the maximum value in the array is even
c. every odd value is greater than every even value that is not the maximum value.

eg:-

So [11, 4, 20, 9, 2, 8] is inertial because
a. it contains at least one odd value [11,9]
b. the maximum value in the array is 20 which is even
c. the two odd values (11 and 9) are greater than all the even values that are not equal to 20 (the maximum), i.e., [4, 2, 8]

Write a function called isInertial that accepts an integer array and returns true if the array is inertial; otherwise it returns false.*/

const isInertial = arr => {

};

const expect = require('chai').expect;

describe('isInertial function', () => {
  it('should return true when all conditions are satisfied', () => {
    expect(isInertial([11, 4, 20, 9, 2, 8])).to.be.true;
  });
  it('should return false when there are no odd values', () => {
    expect(isInertial([2, 4, 6, 8])).to.be.false;
  });
  it('should return false when the maximum value is odd', () => {
    expect(isInertial([11, 4, 20, 9, 2, 8, 21])).to.be.false;
  });
  it('should return false when an even value that\'s not the maximum value is greater than the odd values', () => {
    expect(isInertial([11, 4, 20, 9, 2, 8, 18])).to.be.false;
  });
});
