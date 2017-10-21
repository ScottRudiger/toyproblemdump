// Take a Ten Minute Walk from http://www.codewars.com/kata/take-a-ten-minute-walk/train/javascript

/*You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).*/

const isValidWalk = walk => {

};

const {expect} = require('chai');

// note: the codewars kata does not require Booleans; hence testing for truthiness or falsiness
describe('isValidWalk function', () => {
  it('should return a truthy value given a valid walk', () => {
    expect(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])).to.be.ok;
    expect(isValidWalk(['e', 'w', 'e', 'w', 'n', 's', 'n', 's', 'e', 'w'])).to.be.ok;
    expect(isValidWalk(['n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 's'])).to.be.ok;
  });
  it('should return a falsy value if the walk is too short', () => {
    expect(isValidWalk(['n'])).to.not.be.ok;
    expect(isValidWalk(['n', 's'])).to.not.be.ok;
  });
  it('should return a falsy value if the walk is too long', () => {
    expect(isValidWalk([ 'n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's' ])).to.not.be.ok;
    expect(isValidWalk(['n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 's', 'e', 'w'])).to.not.be.ok;
  });
  it('should return a falsy value if the walk does not bring you back to your starting point', () => {
    expect(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 'n'])).to.not.be.ok;
    expect(isValidWalk(['e', 'e', 'e', 'w', 'n', 's', 'n', 's', 'e', 'w'])).to.not.be.ok;
    expect(isValidWalk(['n', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'w', 'e'])).to.not.be.ok;
    expect(isValidWalk(['s', 'n', 'n', 's', 'n', 'w', 'e', 'e', 'w', 'e'])).to.not.be.ok;
  });
});
