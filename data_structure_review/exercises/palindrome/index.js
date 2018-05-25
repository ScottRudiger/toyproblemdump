// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// solve using `reverse` function
// const reverse = require('../reversestring');

// const palindrome = str => reverse(str) === str;

// solve w/ reduce
// const palindrome = str => str === [...str].reduce((rev, char) => char + rev, '');

// solve in O(log n) time O(1) space
// const palindrome = str => {
//   for (let i = 0, j = str.length - 1; i < j; i++, j--) {
//     if (str[i] !== str[j]) return false;
//   }
//   return true;
// };

// solve w/ every
const palindrome = str => [...str].every((char, i) => char === str[str.length - i - 1]);

module.exports = palindrome;
