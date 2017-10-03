// Conway's Game of Life - Unlimited Edition from https://www.codewars.com/kata/conways-game-of-life-unlimited-edition/train/javascript

/*Given a 2D array and a number of generations, compute n timesteps of Conway's Game of Life.

The rules of the game are:

Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
Any live cell with more than three live neighbours dies, as if by overcrowding.
Any live cell with two or three live neighbours lives on to the next generation.
Any dead cell with exactly three live neighbours becomes a live cell.

Each cell's neighborhood is the 8 cells immediately around it (i.e. Moore Neighborhood). The universe is infinite in both the x and y dimensions and all cells are initially dead - except for those specified in the arguments. The return value should be a 2d array cropped around all of the living cells. (If there are no living cells, then return [[]].)For illustration purposes, 0 and 1 will be represented as ░░ and ▓▓ blocks respectively (PHP: plain black and white squares). You can take advantage of the htmlize function to get a text representation of the universe: eg:

console.log(htmlize(cells));
trace (htmlize cells)*/
/*eslint-disable curly, one-var*/

const countNeighbors = (c, i, j) => (t = 0, d = [-1, 0, 1], d.map(k => d.map(l => (k || l) && c[i + k] && c[i + k][j + l] ? t++ : 0)), t);

const padCells = c => (c = c.map(r => r.slice()), c.unshift(c[0].map(v => 0)), c.push(c[0].map(v => 0)), c.map(r => (r.unshift(0), r.push(0))), c);

const cropCells = c => ((t = c => c[0].some(v => v) ? 0 : (c.shift(), t(c)))(c), (b = c => c[c.length - 1].some(v => v) ? 0 : (c.pop(), b(c)))(c), (l = c => c.some(r => r[0]) ? 0 : (c.map(r => r.shift()), l(c)))(c), (r = c => c.some(r => r[r.length - 1]) ? 0 : (c.map(r => r.pop()), r(c)))(c), c);

const getGeneration = (cells, generation) => {
  if (!generation) return cropCells(cells);
  const copyToCount = padCells(cells), copyToMutate = padCells(cells);
  for (let i = 0; i < copyToCount.length; i++) {
    for (let j = 0; j < copyToCount[i].length; j++) {
      const count = countNeighbors(copyToCount, i, j);
      copyToMutate[i][j] = count === 2 ? copyToMutate[i][j] : count === 3 ? 1 : 0;
    }
  }
  return getGeneration(copyToMutate, generation - 1);
};

const {expect} = require('chai');

describe('getGeneration function', () => {

  const input = [
    [1, 0, 0],
    [0, 1, 1],
    [1, 1, 0]
  ];

  const generation1 = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1]
  ];

  const generation2 = [
    [1, 0, 1],
    [0, 1, 1],
    [0, 1, 0]
  ];

  const generation4 = [
    [1, 0, 0],
    [0, 1, 1],
    [1, 1, 0]
  ];

  const input2 = [
    [1, 1, 1, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 1, 1, 1]
  ];

  const generation16 = [
    [ 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1 ]
  ];

  it('should not mutate the input array', () => {
    const copy = [...input];
    getGeneration(input, 1);
    expect(input).to.eql(copy);
  });
  it('should return the correct output for generation1', () => {
    expect(getGeneration(input, 1)).to.eql(generation1);
  });
  it('should return the correct output for generation2', () => {
    expect(getGeneration(input, 2)).to.eql(generation2);
  });
  it('should return the correct output for generation0', () => {
    expect(getGeneration(input, 0)).to.eql(input);
  });
  it('should return the correct output for generation4', () => {
    expect(getGeneration(input, 4)).to.eql(generation4);
  });
  it('should return the correct output for generation16', () => {
    expect(getGeneration(input2, 16)).to.eql(generation16);
  });
});
