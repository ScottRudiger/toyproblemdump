// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// const maxChar = str => {
//   const counts = [...str].reduce((counts, char) => {
//     counts[char] = (counts[char] || 0) + 1;
//     return counts;
//   }, {});
//   const [[max]] = Object.entries(counts).sort(([, countA], [, countB]) => countB - countA);
//   return max;
// };

const maxChar = str => {
  let maxCount = 0;
  let maxChar = '';
  const counts = [...str].reduce((counts, char) => {
    counts[char] = counts[char] + 1 || 1;
    return counts;
  }, {});
  for (const char in counts) {
    if (counts[char] > maxCount) {
      maxCount = counts[char];
      maxChar = char;
    }
  }
  return maxChar;
};

module.exports = maxChar;
