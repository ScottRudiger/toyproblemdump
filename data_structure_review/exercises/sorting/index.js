// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) { // O(n^2) quadratic time
  const copy = [...arr];
  for (let i = 0; i < copy.length; i++)
    for (let j = 0; j < copy.length - i - 1; j++)
      if (copy[j] > copy[j + 1])
        [copy[j], copy[j + 1]] = [copy[j + 1], copy[j]];
  return copy;
}

function selectionSort(arr) {
  const copy = [...arr];
  for (let i = 0; i < copy.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < copy.length; j++)
      if (copy[j] < copy[minIdx]) minIdx = j;
    [copy[i], copy[minIdx]] = [copy[minIdx], copy[i]];
  }
  return copy;
}

function mergeSort(arr) {

}

function merge(left, right) {
  if (left[left.length - 1] < right[0]) return [...left, ...right];
  if (right[right.length - 1] < left[0]) return [...right, ...left];
  const merged = [];
  while (left.length || right.length)
    merged.push(
      (left[0] < right[0] ? left : right).shift()
    );
  return [...merged, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
