// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// iterative solution
// const pyramid = n => {
//   for (let i = 1; i < n * 2; i += 2) {
//     let level = '#'.repeat(i);
//     while (level.length < n * 2 - 1)
//       level = ' ' + level + ' ';
//     console.log(level);
//   }
// };

// solve w/ helper function
const pad = (str, n) => {
  while (str.length < n)
    str = ` ${str} `;
  return str;
};

// and recursion
const pyramid = (n, i = 1) => {
  if (i < n * 2) {
    console.log(pad('#'.repeat(i), n * 2 - 1));
    pyramid(n, i + 2);
  }
};

module.exports = pyramid;
