// Write Number in Expanded Form from https://www.codewars.com/kata/write-number-in-expanded-form/train/javascript

/*Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form (https://www.mathplacementreview.com/arithmetic/whole-numbers.php#expanded-form). For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2 (https://www.codewars.com/kata/write-number-in-expanded-form-part-2)!!*/

const expandedForm = n => {

};

const expect = require('chai').expect;

describe('expandedForm function', () => {
  it('should return a string', () => {
    expect(expandedForm(2)).to.be.a('string');
  });
  it('should return \'10 + 2\' given 12', () => {
    expect(expandedForm(12)).to.equal('10 + 2');
  });
  it('should return \'40 + 2\' given 42', () => {
    expect(expandedForm(42)).to.equal('40 + 2');
  });
  it('should return \'70000 + 300 + 4\' given 70304', () => {
    expect(expandedForm(70304)).to.equal('70000 + 300 + 4');
  });
});
