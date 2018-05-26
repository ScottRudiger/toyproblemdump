// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// const fizzBuzzHelper = n => {
//   let output = '';
//   !(n % 3) && (output += 'fizz');
//   !(n % 5) && (output += 'buzz');
//   console.log(output || n);
// };

// const fizzBuzz = n => Array.from({length: n}, (_, i) => fizzBuzzHelper(i + 1));

// const fizzBuzzHelper = (_, i) => {
//   const n = i + 1;
//   let output = '';
//   !(n % 3) && (output += 'fizz');
//   !(n % 5) && (output += 'buzz');
//   console.log(output || n);
// };

// const fizzBuzz = n => Array.from({length: n}, fizzBuzzHelper);

const fizzBuzz = n => {
  for (let i = 1; i <= n; i++) {
    let output = '';
    !(i % 3) && (output += 'fizz');
    !(i % 5) && (output += 'buzz');
    console.log(output || i);
  }
};

module.exports = fizzBuzz;
