// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// golfed recursive solution
// fib=n=>n<2?n:fib(n-1)+fib(n-2)

// recursive solution
// const fib = n => {
//   if (n < 2) return n;
//   return fib(n - 1) + fib(n - 2);
// };

// iterative solution
// const fib = n => {
//   let [prev, curr] = [0, 1];
//   let i = 2;
//   while (i++ <= n) [prev, curr] = [curr, prev + curr];
//   return curr;
// };

// memoized recursive solution
// const memoize = fn => {
//   const cache = {};
//   return (...args) => {
//     const stringifiedArgs = JSON.stringify(args);
//     if (cache[stringifiedArgs]) return cache[stringifiedArgs];
//     cache[stringifiedArgs] = fn(...args);
//     return cache[stringifiedArgs];
//   };
// };

const memoize = fn => {
  const cache = {};
  const isPrimitive = v => Object(v) === v;
  return (...args) => {
    const stringifiedArgs = args.length < 2 && isPrimitive(args[0])
      ? args[0]
      : JSON.stringify(args);
    if (cache[stringifiedArgs]) return cache[stringifiedArgs];
    cache[stringifiedArgs] = fn(...args);
    return cache[stringifiedArgs];
  };
};

const fib = memoize(n => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
});

module.exports = fib;
