// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// using String.prototype.replace
// const sortWithoutNonWords = str => [...str.replace(/\W/g, '').toLowerCase()].sort().join``;

// using String.prototype.match
// const sortWithoutNonWords = str => str.toLowerCase().match(/\w/g).sort().join``;

// const anagrams = (stringA, stringB) =>
//   sortWithoutNonWords(stringA) === sortWithoutNonWords(stringB);

// counting
const countChars = str => [...str.toLowerCase().replace(/\W/g, '')].reduce((count, char) => {
  count[char] = (count[char] || 0) + 1;
  return count;
}, {});

const anagrams = (stringA, stringB) => {
  const [countA, countB] = [stringA, stringB].map(countChars);
  if (Object.keys(countA).length !== Object.keys(countB).length) return false;
  for (const char in countA) {
    if (countA[char] !== countB[char]) return false;
  }
  return true;
};

module.exports = anagrams;
