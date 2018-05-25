// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// solve w/ reverse
// const reverse = str => [...str].reverse().join``;

// solve w/o reverse
const reverse = str => {
  const arr = [...str];
  for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join``;
};

module.exports = reverse;
