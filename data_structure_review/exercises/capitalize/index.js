// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// const capitalize = str =>
//   str.split` `.map(word => word[0].toUpperCase() + word.slice(1)).join` `;

// const capitalize = str => {
//   let result = '';
//   [...str].forEach((char, i) => {
//     if (!i || str[i - 1] === ' ')
//       result += char.toUpperCase();
//     else
//       result += char;
//   });
//   return result;
// };

const capitalize = str => {
  let result = str[0].toUpperCase();
  [...str.slice(1)].forEach((char, i) => {
    result += str[i] === ' '
      ? char.toUpperCase()
      : char;
  });
  return result;
};

module.exports = capitalize;
