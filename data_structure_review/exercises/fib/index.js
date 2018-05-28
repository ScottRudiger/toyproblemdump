// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// recursive solution
// const fib = n => {
//   if (n < 2) return n;
//   return fib(n - 1) + fib(n - 2);
// };

// iterative solution
const fib = n => {
  if (n < 2) return n;
  let seq = [0, 1];
  let i = 2;
  while (i++ <= n) {
    const prev = seq[1];
    const curr = seq.reduce((a, b) => a + b);
    seq = [prev, curr];
  }
  return seq[1];
};

module.exports = fib;
