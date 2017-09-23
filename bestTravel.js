// Best travel from https://www.codewars.com/kata/best-travel/train/javascript

/*John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list of distances between these towns. ls = [50, 55, 57, 58, 60]. John is tired of driving and he says to Mary that he doesn't want to drive more than t = 174 miles and he will visit only 3 towns.

Which distances, hence which towns, they will choose so that the sum of the distances is the biggest possible

to please Mary - but less than t - to please John- ?
Example:

With list ls and 3 towns to visit they can make a choice between: [50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].

The sums of distances are then: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.

The biggest possible sum taking a limit of 174 into account is then 173 and the distances of the 3 corresponding towns is [55, 58, 60].

The function chooseBestSum (or choose_best_sum or ... depending on the language) will take as parameters t (maximum sum of distances, integer >= 0), k (number of towns to visit, k >= 1) and ls (list of distances, all distances are positive or null integers and this list has at least one element). The function returns the "best" sum ie the biggest possible sum of k distances less than or equal to the given limit t, if that sum exists, or otherwise nil, null, None, Nothing, depending on the language. With C++, C, Rust, Swift, Go return -1.

Examples:

ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163

xs = [50] choose_best_sum(163, 3, xs) -> nil (or null or ... or -1 (C++, C, Rust, Swift, Go)

ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228*/
/*eslint-disable curly*/

const chooseBestSum = (t, k, ls) => {
  const bestSum = Math.max(...(getCombos = (k, ls) => {
    const temp = [];
    if (k === 1) return ls.map(l => [l]);
    for (let i = 0; i <= ls.length - k; i++) {
      const rest = getCombos(k - 1, ls.slice(i + 1));
      for (let j = 0; j < rest.length;) temp.push([ls[i], ...rest[j++]]);
    }
    return temp;
  })(k, ls).map(combo => combo.reduce((a, b) => a + b)).filter(sum => sum <= t));
  return bestSum !== -Infinity ? bestSum : null;
};

const expect = require('chai').expect;

describe('chooseBestSum function', () => {

  it('should work when bestSum is equal to t', () => {
    const ts = [50, 55, 56, 57, 58]; // 50 + 55 + 58
    expect(chooseBestSum(163, 3, ts)).to.equal(163);
  });

  it('should return null if no valid bestSum exists', () => {
    const ts = [50];
    expect(chooseBestSum(163, 3, ts)).to.be.null;
  });

  it('should work when bestSum is less than t', () => {
    const ts = [91, 74, 73, 85, 73, 81, 87]; // 73 + 81 + 74
    expect(chooseBestSum(230, 3, ts)).to.equal(228);
  });

});
