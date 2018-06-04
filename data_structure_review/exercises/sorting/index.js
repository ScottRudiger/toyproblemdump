// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) { // O(n^2) quadratic time
  const copy = [...arr];
  for (let i = 0; i < copy.length; i++)
    for (let j = 0; j < copy.length - i; j++)
      if (copy[j] > copy[j + 1])
        [copy[j], copy[j + 1]] = [copy[j + 1], copy[j]];
  return copy;
}

function selectionSort(arr) {

}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
