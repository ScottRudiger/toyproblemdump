// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

const levelWidth = root => {
  const counters = [0];
  const processQueue = [root, null];
  while (processQueue.length > 1) {
    const node = processQueue.shift();
    if (!node) {
      counters.push(0);
      processQueue.push(null);
    }
    else {
      counters[counters.length - 1]++;
      processQueue.push(...node.children);
    }
  }
  return counters;
};

module.exports = levelWidth;
