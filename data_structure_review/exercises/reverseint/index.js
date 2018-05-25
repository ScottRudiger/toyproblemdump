// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// const reverseInt = n => +(n < 0 ? [...`${n}-`].slice(1) : [...`${n}`]).reverse().join``;

// const reverseInt = n => Number(
//   [...Math.abs(n).toString()].reverse().join``
// ) * Math.sign(n);

const reverseInt = n => parseInt([...`${n}`].reverse().join``) * Math.sign(n);

module.exports = reverseInt;
