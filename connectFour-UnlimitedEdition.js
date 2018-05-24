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

const connectFour = moves => {

};

const {assert} = require('chai');

describe("Tests", function () {
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

  it("4 in a row", function () {
    assert.deepEqual(connectFour(moves1), 'R', 'Should check 4 in a row');
  });
  it("4 in a column", function () {
    assert.deepEqual(connectFour(moves2), 'Y', 'Should check 4 in a column');
  });
  it("4 in diagonal", function () {
    assert.deepEqual(connectFour(moves3), 'G', 'Should check 4 in diagonal');
  });
  it("no winner", function () {
    assert.deepEqual(connectFour(moves4), null, 'Should check if there\'s no winner');
  });
  it("4 in diagonal", function () {
    assert.deepEqual(connectFour(moves5), 'E', 'Should check 4 in diagonal');
  });
});
