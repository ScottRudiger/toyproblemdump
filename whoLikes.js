// Who likes it? from https://www.codewars.com/kata/who-likes-it/train/javascript
/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
For more than 4 names, the number in and 2 others simply increases.
*/

let likes = names => {
  const len = names.length;
  if (!len) return 'no one likes this';
  if (len === 1) return `${names[0]} likes this`;
  if (len === 2) return `${names[0]} and ${names[1]} like this`;
  if (len === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  if (len > 3) return `${names[0]}, ${names[1]} and ${len - 2} others like this`;
};

likes = names => {
  const len = names.length;
  const labels = [
    'no one likes this',
    `${names[0]} likes this`,
    `${names[0]} and ${names[1]} like this`,
    `${names[0]}, ${names[1]} and ${names[2]} like this`
  ];
  return len > 3 ? `${names[0]}, ${names[1]} and ${len - 2} others like this` : labels[len];
};

likes = names => {
  const likes = names.length;
  const labels = new Map([
    [0, 'no one likes this'],
    [1, `${names[0]} likes this`],
    [2, `${names[0]} and ${names[1]} like this`],
    [3, `${names[0]}, ${names[1]} and ${names[2]} like this`],
    [likes > 3, `${names[0]}, ${names[1]} and ${likes - 2} others like this`]
  ]);
  for (const [num, label] of labels) {
    if (likes === num || num === true) return label;
  }
};

likes = names => [
  'no one likes this',
  `${names[0]} likes this`,
  `${names[0]} and ${names[1]} like this`,
  `${names[0]}, ${names[1]} and ${names[2]} like this`,
  `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
][Math.min(4, names.length)];

const {expect} = require('chai');

describe('likes function', () => {
  const tests = new Map();

  tests.set([], 'no one likes this');
  tests.set(['Peter'], 'Peter likes this');
  tests.set(['Jacob', 'Alex'], 'Jacob and Alex like this');
  tests.set(['Max', 'John', 'Mark'], 'Max, John and Mark like this');
  tests.set(['Alex', 'Jacob', 'Mark', 'Max'], 'Alex, Jacob and 2 others like this');
  tests.set(['Alex', 'Jacob', 'Mark', 'Max', 'Scott'], 'Alex, Jacob and 3 others like this');

  for (const [test, sol] of tests) {
    it(`should return ${sol}`, () => expect(likes(test)).to.equal(sol));
  }
});
