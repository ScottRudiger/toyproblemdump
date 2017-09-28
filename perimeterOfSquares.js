// Perimeter of squares in a rectangle from https://www.codewars.com/kata/perimeter-of-squares-in-a-rectangle/train/javascript

/*The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

alternative text

#Hint: See Fibonacci sequence

#Ref: http://oeis.org/A000045

The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

JS: Due to a misspelling in the reference solution for random tests,
have an outer auxiliary function that calculates Fibonacci numbers,
name this outer function fib.
(More than 500 CW passed the kata so it is now impossible to change the random tests).*/

// const perimeter = n => {
//   for (var i = 0, p = [0, 4]; i < n; i++) {
//     p.push(p[p.length - 1] + p[p.length - 2]);
//   }
//   return p.reduce((a, b) => a + b);
// };

// const perimeter = (n, p2 = 0, p1 = 4, s = 4, i = 1) => i > n ? s : perimeter(n, p1, p2 + p1, s + p2 + p1, i + 1);

// const perimeter = (n, p2 = 0, p1 = 4, s = 4) => !n ? s : perimeter(n - 1, p1, p2 + p1, s + p2 + p1);

// const perimeter = (n, s5 = Math.sqrt(5), p = (1 + s5) / 2, pn = (1 - s5) / 2) => {
//   let s = 0;
//   n += 2;
//   while (n--) {
//     s += Math.round((1 / s5) * (Math.pow(p, n) - Math.pow(pn, n))) * 4;
//   }
//   return s;
// };

// const perimeter = (n, m = n + 2, s = 0, s5 = Math.sqrt(5)) => m ? perimeter(n, --m, s + Math.round(1 / s5 * (Math.pow((1 + s5) / 2, m) - Math.pow((1 - s5) / 2, m))) * 4) : s;

// const perimeter = (n, s = 0, m = n + 1, s5 = Math.sqrt(5)) => m ? perimeter(n, s + Math.round((1 / s5) * (Math.pow((1 + s5) / 2, m) - Math.pow((1 - s5) / 2, m))) * 4, --m) : s;

const perimeter = (n, s = 0, m = n + 1, r = 5 ** 0.5, p = (1 + r) / 2) => m ? perimeter(n, s + Math.round((p ** m - (-p) ** -m) / r) * 4, --m) : s;

const expect = require('chai').expect;

describe('perimeter function', () => {
  it('should return 4 when n is 0', () => expect(perimeter(0)).to.equal(4));
  it('should return 8 when n is 1', () => expect(perimeter(1)).to.equal(8));
  it('should return 80 when n is 5', () => expect(perimeter(5)).to.equal(80));
  it('should return 572 when n is 9', () => expect(perimeter(9)).to.equal(572));
  it('should return almost 180 trillion when n is 64', () => {
    expect(perimeter(64)).to.equal(179782280851408);
  });
});
