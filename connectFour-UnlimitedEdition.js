// Connect Four: Unlimited Edition from https://www.codewars.com/kata/connect-four-unlimited-edition/train/javascript

/*Task
Connect Four its a game where 2 players, each turn, drop a colored disc in one of the columns of a grid.When a player drops a disc, this will occupy the next space available in the column.The winner is the first player that forms a line(vertical, diagonal or horizontal) of 4 discs of its own color.

  However, in this kata there are the following twists:

There's no gravity, so a disc will just be placed in an XY position
The space of the game is virtually infinite, so a disc can be placed in any XY position
There can be more than 2 players
Given a game situation, where some discs has been already been placed, you have to determine a winner, if there's one.

Input
The input consists in an array of moves made during the game

[
  {p: 'R', x: 0, y: 0},
  {p: 'Y', x: 100, y: 100},
  {p: 'R', x: 1, y: 0},
  {p: 'Y', x: 99, y: 100},
  {p: 'R', x: 2, y: 0},
  {p: 'Y', x: 98, y: 100},
  {p: 'R', x: 3, y: 0},
  {p: 'Y', x: 96, y: 100}
];
You can see in this example that the player R won making the line

{x: 0, y: 0} {x: 1, y: 0} {x: 2, y: 0} {x: 3, y: 0}
Be aware that the moves ARE NOT ordered by time, this is an example that would fit well for describe a normal match but the moves you will receive will be in a random order

Output
You must return the player that won as string, in the example above, you would return 'R'

If there's no winner, you must return null

Constraints
As the standard rules, you must check from rows, columns and diagonals
If there's a winner, there will be only one
You will not receive empty array, nor invalid inputs
There will not be duplicates points*/

const changeSomethingBy = something => (move, amount) => JSON.stringify(Object.assign(
  JSON.parse(move),
  {[something]: JSON.parse(move)[something] + amount},
));

const changeXBy = (move, amount) => changeSomethingBy('x')(move, amount);
const changeYBy = (move, amount) => changeSomethingBy('y')(move, amount);
const changeXAndYBy = (move, xAmount, yAmount) => JSON.stringify(Object.assign(
  JSON.parse(move),
  {x: JSON.parse(move).x + xAmount},
  {y: JSON.parse(move).y + yAmount},
));

const checkHorizontally = (mv, bd) => [
  [1, 2, 3].map(n => changeXBy(mv, n)).every(co => bd[co] === bd[mv]),
  [-1, -2, -3].map(n => changeXBy(mv, n)).every(co => bd[co] === bd[mv]),
  [1, -1, -2].map(n => changeXBy(mv, n)).every(co => bd[co] === bd[mv]),
  [-1, 1, 2].map(n => changeXBy(mv, n)).every(co => bd[co] === bd[mv]),
].some(Boolean);

const checkVertically = (mv, bd) => [
  [1, 2, 3].map(n => changeYBy(mv, n)).every(co => bd[co] === bd[mv]),
  [-1, -2, -3].map(n => changeYBy(mv, n)).every(co => bd[co] === bd[mv]),
  [1, -1, -2].map(n => changeYBy(mv, n)).every(co => bd[co] === bd[mv]),
  [-1, 1, 2].map(n => changeYBy(mv, n)).every(co => bd[co] === bd[mv]),
].some(Boolean);

const checkDiagonally = (m, b) => [
  [[1, 1], [2, 2], [3, 3]].map(c => changeXAndYBy(m, ...c)).every(p => b[p] === b[m]),
  [[-1, -1], [-2, -2], [-3, -3]].map(c => changeXAndYBy(m, ...c)).every(p => b[p] === b[m]),
  [[1, -1], [2, -2], [3, -3]].map(c => changeXAndYBy(m, ...c)).every(p => b[p] === b[m]),
  [[-1, 1], [-2, 2], [-3, 3]].map(c => changeXAndYBy(m, ...c)).every(p => b[p] === b[m]),
  [[1, 1], [-1, -1], [-2, -2]].map(c => changeXAndYBy(m, ...c)).every(p => b[p] === b[m]),
  [[-1, -1], [1, 1], [2, 2]].map(c => changeXAndYBy(m, ...c)).every(p => b[p] === b[m]),
  [[1, -1], [-1, 1], [-2, 2]].map(c => changeXAndYBy(m, ...c)).every(p => b[p] === b[m]),
  [[-1, 1], [1, -1], [2, -2]].map(c => changeXAndYBy(m, ...c)).every(p => b[p] === b[m]),
].some(Boolean);

const areFourConnected = (move, board) => [
  checkHorizontally,
  checkVertically,
  checkDiagonally,
].map(fn => fn(move, board)).some(Boolean);

const connectFour = moves => {
  const board = {};
  for (const move of moves) {
    board[JSON.stringify(move)] = move.p;
    if (areFourConnected(JSON.stringify(move), board))
      return move.p;
  }
  return null;
};

const {assert} = require('chai');

describe("Tests", () => {
  const moves1 = [
    {p: 'R', x: 0, y: 0},
    {p: 'Y', x: 100, y: 100},
    {p: 'R', x: 1, y: 0},
    {p: 'Y', x: 99, y: 100},
    {p: 'R', x: 2, y: 0},
    {p: 'Y', x: 98, y: 100},
    {p: 'R', x: 3, y: 0},
    {p: 'Y', x: 96, y: 100}
  ];

  const moves2 = [
    {p: 'R', x: 15, y: 15},
    {p: 'Y', x: 10, y: 10},
    {p: 'Y', x: 10, y: 11},
    {p: 'Y', x: 10, y: 12},
    {p: 'Y', x: 10, y: 13},
    {p: 'R', x: 15, y: 16},
    {p: 'R', x: 16, y: 15},
    {p: 'R', x: 16, y: 16}
  ];

  const moves3 = [
    {p: 'G', x: 0, y: 0},
    {p: 'Y', x: 0, y: 1},
    {p: 'G', x: 1, y: 1},
    {p: 'Y', x: 1, y: 2},
    {p: 'G', x: 2, y: 2},
    {p: 'Y', x: 2, y: 3},
    {p: 'G', x: -1, y: -1},
    {p: 'Y', x: 3, y: 3}
  ];

  const moves4 = [
    {p: 'A', x: 50, y: -50},
    {p: 'B', x: 49, y: -50},
    {p: 'C', x: 48, y: -50},
    {p: 'D', x: 50, y: -49},
    {p: 'A', x: 51, y: -50},
    {p: 'B', x: 49, y: -49},
    {p: 'C', x: 48, y: -51},
    {p: 'D', x: 51, y: -49}
  ];

  const moves5 = [
    {p: 'P', x: 0, y: 1},
    {p: 'P', x: 0, y: -1},
    {p: 'P', x: 0, y: -2},
    {p: 'P', x: 0, y: -3},
    {p: 'E', x: 0, y: 0},
    {p: 'E', x: 1, y: -1},
    {p: 'E', x: 2, y: -2},
    {p: 'E', x: 3, y: -3}
  ];

  const moves6 = [
    {p: 'C', x: 4, y: -4},
    {p: 'C', x: 3, y: 3},
    {p: 'C', x: 2, y: -2},
    {p: 'C', x: 1, y: 1}
  ];

  const moves7 = [
    {p: 'D', x: 0, y: 0},
    {p: 'D', x: 1, y: -1},
    {p: 'D', x: 2, y: -2},
    {p: 'D', x: 7, y: 7},
    {p: 'D', x: 3, y: -3},
  ];

  it("4 in a row", () => {
    assert.deepEqual(connectFour(moves1), 'R', 'Should check 4 in a row');
  });
  it("4 in a column", () => {
    assert.deepEqual(connectFour(moves2), 'Y', 'Should check 4 in a column');
  });
  it("4 in diagonal", () => {
    assert.deepEqual(connectFour(moves3), 'G', 'Should check 4 in diagonal');
  });
  it("no winner", () => {
    assert.deepEqual(connectFour(moves4), null, 'Should check if there\'s no winner');
  });
  it("4 in diagonal", () => {
    assert.deepEqual(connectFour(moves5), 'E', 'Should check 4 in diagonal');
  });
  it("no winner", () => {
    assert.deepEqual(connectFour(moves6), null, 'Should check if there\'s no winner');
  });
  it("4 in diagonal", () => {
    assert.deepEqual(connectFour(moves7), 'D', 'Should check 4 in diagonal');
  });
});
