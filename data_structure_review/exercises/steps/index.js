// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// golfed solution
steps=(n,i=1)=>i>n?0:(console.log('#'.repeat(i).padEnd(n)),steps(n,i+1))

// semi-golfed recursive solution
// const steps = (n, i) => ~~i + 1 > n ? null : (console.log('#'.repeat(~~i + 1).padEnd(n)), steps(n, ~~i + 1));

// readable recursive solution
// const steps = n => {
//   (function nextStep(i) {
//     if (i > n) return;
//     console.log('#'.repeat(i).padEnd(n));
//     nextStep(i + 1);
//   })(1);
// };

// iterative solution
// const steps = n => {
//   let i = 1;
//   while (i <= n) console.log('#'.repeat(i++).padEnd(n));
// };

// solve w/o String.prototype.{repeat,padEnd}
// const steps = n => {
//   for (let i = 1, step = ''; i <= n; i++, step = '') {
//     while (step.length < i) step += '#';
//     while (step.length < n) step += ' ';
//     console.log(step);
//   }
// };

module.exports = steps;
