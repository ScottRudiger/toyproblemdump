// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

const matrix = n => {
  const matrix = Array.from({length: n}, () => []);
  let row = 0;
  let col = 0;
  const isAvailable = (row, col) =>
    row >= 0 && col >= 0 && row < n && col < n && !matrix[row][col];
  const tryUp = () => isAvailable(row - 1, col);
  const tryRight = () => isAvailable(row, col + 1);
  const tryDown = () => isAvailable(row + 1, col);
  const tryLeft = () => isAvailable(row, col - 1);
  for (let k = 1; k <= n ** 2; k++) {
    matrix[row][col] = k;
    // up or left? go left
    if (tryUp() && tryLeft()) {col--; continue; }
    // right or up? go up
    if (tryRight() && tryUp() || tryUp()) { row--; continue; }
    // down or right? go right
    if (tryDown() && tryRight() || tryRight()) { col++; continue; }
    // left or down? go down
    if (tryLeft() && tryDown() || tryDown()) { row++; continue; }
    // otherwise, go left
    col--;
  }
  return matrix;
};

module.exports = matrix;
