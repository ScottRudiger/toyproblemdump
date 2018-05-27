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
const pyramid = n => {
  for (let i = 1; i < n * 2; i += 2) {
    let level = '#'.repeat(i);
    while (level.length < n * 2 - 1)
      level = ' ' + level + ' ';
    console.log(level);
  }
};

pyramid(4);

module.exports = pyramid;
