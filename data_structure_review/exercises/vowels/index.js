// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// solve w/ regex
// const vowels = str => (str.match(/[aeiou]/gi) || []).length;

// solve iteratively
// const vowels = str => {
//   let count = 0;
//   for (const char of str.toLowerCase())
//     if ([...'aeiou'].includes(char)) count++;
//   return count;
// };

// using filter
// const vowels = str => [...str.toLowerCase()].filter(char => 'aeiou'.includes(char)).length;

// filter w/ regex test
const vowels = str => [...str].filter(char => /[aeiou]/i.test(char)).length;

module.exports = vowels;
